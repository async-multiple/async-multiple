# async-multiple

A lite asynchronous queue runtime library!

## Installing

Using npm:

```bash
$ npm install async-multiple
```

## Example

#### map

```js
import { map } from 'async-multiple'
const task = [1, 2, 3, 4, 5]
map({
  task,
  handle: async (item) => {
    // you can also use other asynchronous function, like fetch or ajax
    await this.sleep(1000)
    if (item === 3) {
      return Promise.reject(new Error('not 3!'))
    }
    return Promise.resolve(item * item)
  }
})
.then(result => {
  console.log(result)
})

// result is
[ { order: 0, input: 1, output: 1, error: null },
  { order: 1, input: 2, output: 4, error: null },
  { order: 2,
    input: 3,
    output: null,
    error: 'not 3!',   // error object
  },
  { order: 3, input: 4, output: 16, error: null },
  { order: 4, input: 5, output: 25, error: null }
]
```

#### each

```js
import { each } from 'async-multiple'
each({
  task: [
    async () => {
      return Promise.resolve(1)
    },
    async () => {
      return Promise.resolve(2)
    },
    async () => {
      return Promise.resolve(3)
    },
    async () => {
      return Promise.reject(new Error('not 4'))
    },
    async () => {
      return Promise.resolve(5)
    },
  ],
})
.then(result => {
  console.log(result.toArray())
})

// result is
[ 
  { order: 0, output: 1, error: null },
  { order: 1, output: 2, error: null },
  { order: 2, output: 3, error: null },
  { order: 3,
    output: null,
    error: 'not 4'
  },
  { order: 5, output: 5, error: null }
]
```

## API

### map(config)
loop task can be made by passing the relevant config to `map`.

#### task

##### required: true type: array

##### example
```js
map({
  task: [1, 2, 3, 4, 5]
})

map({
  task: [file1, file2, file3, file4, file5]
})
```

#### handle
##### required: true type: function

##### callback return: promise
###### NOTE
When handle wasn't return a promise but a value like number or string, it will be wrap by Promise.resolve.
If you have no return, the task will stop at this step!

##### callback params: (input, step, cancelTask)

###### input: data from task array
###### step: task called step
###### cancalTask: global cancel function, if called, task will stop at this step, that means you can cancel task at before every step

##### example
```js
// return a value
map({
  task: [1, 2, 3, 4, 5],
  handle: input => input
})

// same as
map({
  task: [1, 2, 3, 4, 5],
  handle: input => Promise.resolve(input)
})

// handle error
map({
  task: [1, 2, 3, 4, 5],
  handle: input => {
    if (input === 3) {
      return Promise.reject(new Error('not 3, failed!'))
    }
    return Promise.resolve(input)
  }
})

// use async/await
map({
  task: [1, 2, 3, 4, 5],
  handle: async input => {
    await sleep(1000)
    return Promise.resolve(input)
  }
})
```

#### rejectOnError

##### required: false type: boolean default: false
##### set true: when receive a reject, task will stop at this step

##### example

```js
map({
  task: [1, 2, 3, 4, 5]
  handle: input => {
    if (input === 3) {
      return Promise.reject(new Error('not 3!'))
    }
    return Promise.resolve(input)
  },
  rejectOnError: true
})
// result
[ { order: 0, input: 1, output: 1, error: null },
  { order: 1, input: 2, output: 4, error: null },
  { order: 2,
    input: 3,
    output: null,
    error: 'not 3!',   // error object
  }
]
```

#### randomStep

##### required: false type: boolean default: false
##### set true: random call task

##### example

```js
map({
  task: [1, 2, 3, 4, 5],
  handle: async (item) => {
    return Promise.resolve(item)
  },
  randomStep: true,
  handleStart: ({ step, input }) => {
    console.log(`begin handle at step ${step}, input is ${input}`)
  },
})
.then(result => {
  console.log(result.toArray())
})
// result
begin handle at step 0, input is 2 
begin handle at step 1, input is 5 
begin handle at step 2, input is 1 
begin handle at step 3, input is 3 
begin handle at step 4, input is 4 
[ 
  { order: 0, input: 1, output: 1, error: null },
  { order: 1, input: 2, output: 2, error: null },
  { order: 2, input: 3, output: 3, error: null },
  { order: 3, input: 4, output: 4, error: null },
  { order: 4, input: 5, output: 5, error: null }
]
```

#### stepBettwen

##### required: false type: [number, array] default: 0

##### example

```js
// every task will sleep 1000ms, then called
map({
  task: [1, 2, 3, 4, 5],
  handle: async (item) => {
    return Promise.resolve(item)
  },
  stepBettwen: 1000
})

// every task will sleep 500~2000ms, then called
map({
  task: [1, 2, 3, 4, 5],
  handle: async (item) => {
    return Promise.resolve(item)
  },
  stepBettwen: [500, 2000]
})
```

#### stepTimeout

##### required: false type: number default: undefined

##### example

```js
// if step handle time longer then stepTimeout, this step will reject, then call next step
// and receive a timeout error
map({
  task: [1, 2, 3, 4, 5],
  handle: someFucntion,  // some async function like fetch or readFile
  stepTimeout: 1000
})
```

#### errorRetry

##### required: false type: number default: 0

##### example

```js
// if set, when receive a reject, handle will recall at next step
// if called times more than errorRetry, get error result, then call next step
const task = [1, 2, 3, 4, 5]
let flag = false
map({
  task,
  handle: async (item) => {
    if (item === 3) {
      if (flag === false) {
        flag = true
        return Promise.reject(new Error('flag is false'))
      }
      return Promise.resolve(item)
    }
    return Promise.resolve(item)
  },
  errorRetry: 3,
  handleStart: ({ step, input, isRetry }) => {
    console.log(`begin handle at step ${step} input is ${input} ${isRetry ? '[RETRY]' : ''}`)
  },
})
.then(result => {
  console.log(result.toArray())
})
```

#### maxSuccessCount

##### required: false type: number default: undefined

##### example

```js
// if set, when receive enough resolve, task will cancel then stop at next step
map({
  task: [1, 2, 3, 4, 5],
  handle: someFucntion,  // some async function like fetch or readFile
  maxSuccessCount: 3
})

// result
begin handle at step 0 input is 1 
begin handle at step 1 input is 2 
begin handle at step 2 input is 3 
[async-multiple MESSAGE]: Enough success result, task will stop!
[ { order: 0, input: 1, output: 1, error: null },
  { order: 1, input: 2, output: 2, error: null },
  { order: 2, input: 3, output: 3, error: null } ]
```

#### showProgress

##### required: false type: boolean default: false

##### example

```js
// if set, when receive enough resolve, task will cancel then stop at next step
const task = [1, 2, 3, 4, 5]
map({
  task,
  handle: async (item) => {
    return Promise.resolve(item)
  },
  showProgress: true
})
.then(result => {
  console.log(result.toArray())
})

// result
[ TASK_csv1LTmw ] all: 5 complete: 1 progress: 20.00%
[ TASK_csv1LTmw ] all: 5 complete: 2 progress: 40.00%
[ TASK_csv1LTmw ] all: 5 complete: 3 progress: 60.00%
[ TASK_csv1LTmw ] all: 5 complete: 4 progress: 80.00%
[ TASK_csv1LTmw ] all: 5 complete: 5 progress: 100.00%
[ { order: 0, input: 1, output: 1, error: null },
  { order: 1, input: 2, output: 2, error: null },
  { order: 2, input: 3, output: 3, error: null },
  { order: 3, input: 4, output: 4, error: null },
  { order: 4, input: 5, output: 5, error: null } ]
```

#### alias

##### required: false type: string default: undefined

##### example

```js
// if set, when receive enough resolve, task will cancel then stop at next step
const task = [1, 2, 3, 4, 5]
map({
  task,
  handle: async (item) => {
    return Promise.resolve(item)
  },
  showProgress: true,
  alias: 'loop task'
})
.then(result => {
  console.log(result.toArray())
})

// result
[ loop task ] all: 5 complete: 1 progress: 20.00%
[ loop task ] all: 5 complete: 2 progress: 40.00%
[ loop task ] all: 5 complete: 3 progress: 60.00%
[ loop task ] all: 5 complete: 4 progress: 80.00%
[ loop task ] all: 5 complete: 5 progress: 100.00%
[ { order: 0, input: 1, output: 1, error: null },
  { order: 1, input: 2, output: 2, error: null },
  { order: 2, input: 3, output: 3, error: null },
  { order: 3, input: 4, output: 4, error: null },
  { order: 4, input: 5, output: 5, error: null } ]
```

#### handleStart | handleEnd

##### required: false type: function default: undefined

##### example

```js
const task = [1, 2, 3, 4, 5]
map({
  task,
  handle: async (item) => {
    return Promise.resolve(item)
  },
  handleStart: ({ step, input, isRetry }) => {
    console.log(`begin handle at step ${step} input is ${input} ${isRetry ? '[RETRY]' : ''}`)
  },
  handleEnd: ({ step, input, isRetry }) => {
    console.log(`end handle at step ${step} input is ${input} ${isRetry ? '[RETRY]' : ''}`)
  },
})
.then(result => {
  console.log(result.toArray())
})

// result
begin handle at step 0 input is 1 
end handle at step 0 input is 1 
begin handle at step 1 input is 2 
end handle at step 1 input is 2 
begin handle at step 2 input is 3 
end handle at step 2 input is 3 
begin handle at step 3 input is 4 
end handle at step 3 input is 4 
begin handle at step 4 input is 5 
end handle at step 4 input is 5 
[ 
  { order: 0, input: 1, output: 1, error: null },
  { order: 1, input: 2, output: 2, error: null },
  { order: 2, input: 3, output: 3, error: null },
  { order: 3, input: 4, output: 4, error: null },
  { order: 4, input: 5, output: 5, error: null }
]
```

### each(config)
All params is same as map, except task && handle(each havn't this params)

#### task

##### required: true type: array
##### diff each's mask receive a list contain handle you want to call

##### example

```js
const task = [
  () => {},  // what to do 1
  () => {},  // what to do 2
  () => {},  // what to do 3
  () => {},  // what to do 4
]
map({
  task,
})
.then(result => {
  console.log(result.toArray())
})
```

### CONSTRUCT

### Map | Each

#### example

```js
import { Map, Each } from 'async-multiple'
const loop =  new Map({
  task: [1, 2, 3, 4, 5],
  handle: s => s,
})
loop.start().then(
  result => {
    console.log(result)
  }
)

const loop =  new Each({
  task: [
    () => {},  // what to do 1
    () => {},  // what to do 2
    () => {},  // what to do 3
    () => {},  // what to do 4
  ],
})
loop.start().then(
  result => {
    console.log(result)
  }
)
```
#### method

##### start
call this method to start the task, return a promise

##### cancelTask
call this method to cancel the task global

### Event

#### example

```js
import { Event } from 'async-multiple'
const eventBus = new Event({ debug: true })

eventBus.on('action1', (params) => {
  console.log('action1 called!', params)
}, 5)

eventBus.on('action1', (params) => {
  console.log('action1 called!', params)
}, 5)

setInterval(() => {
  eventBus.emit('action1', '123')
}, 1000)
```

#### method

##### on
###### params
actionName: the action you listening
callback: callback method, params is received data
callTime: max times that callback run, if undefined, no times limit
###### NOTE
You can register it many times, like that:

```js
import { Event } from 'async-multiple'
const eventBus = new Event({ debug: true })

eventBus.on('action1', (params) => {
  console.log('action1 called! funtion 1', params)
})

eventBus.on('action1', (params) => {
  console.log('action1 called! funtion 2', params)
})

setInterval(() => {
  eventBus.emit('action1', '123')
}, 1000)
```

Every callback will be called


##### once
###### params
actionName: the action you listening
callback: callback method, params is received data, can called once

##### emit
###### params
actionName: the action you emit
data: the data you send
 

## Todo

#### call mutli task at the same time

## License (MIT)

Copyright (c) 2019 Leo

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

