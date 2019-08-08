
/*
* @Package async-multiple
* @Version 0.1.2
* @Author: async-multiple
* @Date: 2019-07-21 11:57:15
* @Last Modified Time: 2019-08-08T14:09:51 518 Z PM
*/

define(['exports'], function (exports) { 'use strict';

  var asyncToGenerator = function (fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  };

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        return get(parent, property, receiver);
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  };

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  var toConsumableArray = function (arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    } else {
      return Array.from(arr);
    }
  };

  var Util = function () {
    function Util() {
      classCallCheck(this, Util);
    }

    createClass(Util, [{
      key: 'whatType',
      value: function whatType(obj) {
        return Object.prototype.toString.call(obj);
      }
    }, {
      key: 'shuffle',
      value: function shuffle(arr) {
        return arr.map(function (i) {
          return { v: i, r: Math.random() };
        }).sort(function (a, b) {
          return a.r - b.r;
        }).map(function (item) {
          return item.v;
        });
      }
    }, {
      key: 'assign',
      value: function assign() {
        return Object.assign.apply(Object, arguments);
      }
    }, {
      key: 'isType',
      value: function isType() {
        var _this = this;

        for (var _len = arguments.length, objs = Array(_len), _key = 0; _key < _len; _key++) {
          objs[_key] = arguments[_key];
        }

        return objs.map(function (item) {
          return _this.whatType(item) === _this.whatType(objs[0]);
        }).filter(function (item) {
          return !item;
        }).length === 0;
      }
    }, {
      key: 'isPromise',
      value: function isPromise(fn) {
        return this.whatType(fn) === '[object Promise]' || !!(fn.then && this.isType(fn, fn.then, function () {}));
      }
    }, {
      key: 'makePromise',
      value: function () {
        var _ref = asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(obj) {
          var res;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!this.isPromise(obj)) {
                    _context.next = 7;
                    break;
                  }

                  _context.next = 3;
                  return obj;

                case 3:
                  res = _context.sent;

                  if (!(res !== undefined)) {
                    _context.next = 6;
                    break;
                  }

                  return _context.abrupt('return', obj);

                case 6:
                  return _context.abrupt('return', new Promise(function () {}));

                case 7:
                  if (!(obj instanceof Error)) {
                    _context.next = 9;
                    break;
                  }

                  return _context.abrupt('return', Promise.reject(obj));

                case 9:
                  return _context.abrupt('return', Promise.resolve(obj));

                case 10:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function makePromise(_x) {
          return _ref.apply(this, arguments);
        }

        return makePromise;
      }()
    }, {
      key: 'arrayToObject',
      value: function arrayToObject(list) {
        if (!this.isType(list, [])) throw new Error('[arrayToObject error]: expect a array!');
        var obj = {};
        list.map(function (item, key) {
          obj[key] = item;
        });
        return obj;
      }
    }, {
      key: 'objectToArray',
      value: function objectToArray(obj) {
        if (!this.isType(obj, {})) throw new Error('[objectToArray error]: expect a object!');
        var list = [];
        for (var i in obj) {
          list.push(obj[i]);
        }
        return obj;
      }
    }, {
      key: 'sleep',
      value: function sleep(time) {
        return new Promise(function (resolve, reject) {
          setTimeout(function () {
            return resolve('[Sleep]: ' + time + 'ms');
          }, time);
        });
      }
    }, {
      key: 'removeUndefined',
      value: function removeUndefined(obj) {
        if (!this.isType(obj, {})) {
          throw new Error('[removeUndefined message]: obj expect a ' + this.whatType({}));
        }
        for (var i in obj) {
          if (this.isType(obj[i], undefined)) delete obj[i];
        }
        return obj;
      }
    }, {
      key: 'randomString',
      value: function randomString() {
        var L = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;

        var s = '';
        var randomchar = function randomchar() {
          var n = Math.floor(Math.random() * 62);
          if (n < 10) return n; // 1-10
          if (n < 36) return String.fromCharCode(n + 55); // A-Z
          return String.fromCharCode(n + 61); // a-z
        };
        while (s.length < L) {
          s += randomchar();
        }return s;
      }
    }, {
      key: 'randomNumber',
      value: function randomNumber(s, e) {
        var isPrase = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

        if (!this.isType(s, e, 1)) {
          throw new Error('[randomNumber message]: obj expect a ' + this.whatType(1));
        }
        if (s > e) {
          throw new Error('[randomNumber message]: start number big than end!');
        }
        var num = Math.random() * (e - s) + s;
        return isPrase ? parseInt(num) : num;
      }
    }]);
    return Util;
  }();

  var Event = function (_Util) {
    inherits(Event, _Util);

    function Event() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$debug = _ref.debug,
          debug = _ref$debug === undefined ? false : _ref$debug;

      classCallCheck(this, Event);

      var _this = possibleConstructorReturn(this, (Event.__proto__ || Object.getPrototypeOf(Event)).call(this));

      _this._callbacks = {};
      _this._isDebug = debug;
      return _this;
    }

    createClass(Event, [{
      key: 'on',
      value: function on(name, callback, times) {
        if (!this.isType(name, '')) {
          this._errorManage('name expected a string!');
        }
        if (!this.isType(callback, function () {})) {
          this._errorManage('callback expected a function!');
        }
        if (!this.isType(times, undefined) && !this.isType(times, 1) && times <= 0) {
          this._errorManage('times expected a number(min 1)!');
        }
        this._debug('Add listener for ' + name);
        this._callbacks[name] = this._callbacks[name] || [];
        this._callbacks[name].push({
          fn: callback,
          times: times
        });
      }
    }, {
      key: 'emit',
      value: function emit(name) {
        var _this2 = this;

        for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          params[_key - 1] = arguments[_key];
        }

        if (!this.isType(name, '')) {
          this._errorManage('name expected a string!');
        }
        if (!this._callbacks[name]) {
          return;
        }
        this._callbacks[name].map(function (c, k) {
          if (!_this2.isType(c, {})) return;
          var fn = c.fn,
              times = c.times;

          fn.apply(undefined, params);
          if (!_this2.isType(times, undefined)) {
            var newItem = times > 1 ? { fn: fn, times: times - 1 } : undefined;
            _this2._callbacks[name].splice(k, 1, newItem);
          }
        });
      }
    }, {
      key: 'remove',
      value: function remove(name) {
        if (!this.isType(name, '')) {
          this._errorManage('name expected a string!');
        }
        if (!this._callbacks[name]) {
          this._errorManage('action named ' + name + ' wasn\'t bind or removed!');
        }
        delete this._callbacks[name];
      }
    }, {
      key: 'once',
      value: function once(name) {
        return this.on(name, arguments.length <= 1 ? undefined : arguments[1], 1);
      }
    }, {
      key: '_debug',
      value: function _debug(message) {
        if (!this._isDebug) return;
        if (!message) return;
        if (!this.isType(message, '')) message = message.toString();
        console.log('[event MESSAGE]: ' + message);
      }
    }, {
      key: '_errorManage',
      value: function _errorManage() {
        var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'unexpected error!';

        if (!this.isType(message, '')) message = message.toString();
        throw new Error('[event ERROR]: ' + message);
      }
    }]);
    return Event;
  }(Util);

  var Lib = function (_Util) {
    inherits(Lib, _Util);

    function Lib(param) {
      classCallCheck(this, Lib);

      var _this = possibleConstructorReturn(this, (Lib.__proto__ || Object.getPrototypeOf(Lib)).call(this, param));

      _this.event = new Event();
      return _this;
    }

    createClass(Lib, [{
      key: '_errorManage',
      value: function _errorManage() {
        var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'unexpected error!';

        if (!this.isType(message, '')) message = message.toString();
        return new Error('[async-multiple ERROR]: ' + message);
      }
    }, {
      key: '_debug',
      value: function _debug(message) {
        if (!message) return;
        if (!this.isType(message, '')) message = message.toString();
        console.log('[async-multiple MESSAGE]: ' + message);
      }
    }]);
    return Lib;
  }(Util);

  // Generated by CoffeeScript 1.9.2
  var compareProperty, dot;

  var lib = function(collection, expressions) {
    return collection.sort(function(a, b) {
      var expression, i, len, predicate, reverse, value;
      for (i = 0, len = expressions.length; i < len; i++) {
        expression = expressions[i];
        if (typeof expression === 'object') {
          predicate = expression.predicate;
          reverse = expression.reverse;
        } else {
          predicate = expression;
        }
        value = compareProperty(predicate, reverse)(a, b);
        if (value !== 0) {
          return value;
        }
      }
    });
  };

  dot = {
    get: function(obj, field) {
      var i, key, keys, len, value;
      keys = field.split('.');
      value = obj;
      for (i = 0, len = keys.length; i < len; i++) {
        key = keys[i];
        value = value[key];
      }
      return value;
    },
    set: function(obj, field, setValue) {
      var allButLastKey, i, key, keys, lastKey, len, value;
      keys = field.split('.');
      allButLastKey = keys.slice(0, -1);
      lastKey = keys[keys.length - 1];
      value = obj;
      for (i = 0, len = allButLastKey.length; i < len; i++) {
        key = allButLastKey[i];
        value = value[key] != null ? value[key] : value[key] = {};
      }
      return value[lastKey] = setValue;
    }
  };

  compareProperty = function(predicate, reverse) {
    var getter;
    getter = typeof predicate === 'function' ? function(obj) {
      return predicate(obj);
    } : function(obj) {
      return dot.get(obj, predicate);
    };
    if (!reverse) {
      return function(a, b) {
        if (getter(a) < getter(b)) {
          return -1;
        } else if (getter(a) > getter(b)) {
          return 1;
        } else {
          return 0;
        }
      };
    } else {
      return function(a, b) {
        if (getter(a) > getter(b)) {
          return -1;
        } else if (getter(a) < getter(b)) {
          return 1;
        } else {
          return 0;
        }
      };
    }
  };

  var PENDING = 'PENDING';
  var RESOLVE = 'RESOLVE';
  var REJECT = 'REJECT';
  var UNCALL = 'UNCALL';
  var CALLING = 'CALLING';
  var CALLED = 'CALLED';

  var Each = function (_Lib) {
    inherits(Each, _Lib);

    function Each() {
      classCallCheck(this, Each);

      var _this = possibleConstructorReturn(this, (Each.__proto__ || Object.getPrototypeOf(Each)).call(this));

      _this._defaultParams = {
        task: {
          type: [Array, Object],
          default: []
        },
        rejectOnError: {
          type: Boolean,
          default: false
        },
        handleStart: function handleStart() {},
        handleEnd: function handleEnd() {},
        randomStep: {
          type: Boolean,
          default: false
        },
        stepBettwen: {
          type: [Array, Number],
          default: 0,
          min: 0
        },
        stepTimeout: {
          type: Number,
          default: undefined,
          min: 0
        },
        errorReplace: undefined,
        errorRetry: {
          type: Number,
          default: 0,
          min: 0
        },
        maxCall: {
          type: Number,
          default: 1,
          min: 0
        },
        maxSuccessCount: {
          type: Number,
          default: undefined
        },
        showProgress: {
          type: Boolean,
          default: false
        },
        alias: {
          type: String,
          default: 'TASK_' + _this.randomString(8)
        },
        debug: {
          type: Boolean,
          default: false
        }
      };
      _this._formatType = 'each';
      _this.taskStatus = UNCALL;
      _this._stopAtNextTrick = false;
      _this._actionName = _this.randomString(8);
      // check params

      for (var _len = arguments.length, param = Array(_len), _key = 0; _key < _len; _key++) {
        param[_key] = arguments[_key];
      }

      _this._checkParams(param);
      // init task
      _this._initTask();
      // init hooks
      _this._initHooks();
      return _this;
    }

    createClass(Each, [{
      key: 'start',
      value: function start() {
        var _this2 = this;

        // handle result
        this.taskStatus = CALLING;
        return this._beginTask().then(function (response) {
          var allArray = lib(response, ['order']);
          var allObject = {};
          var outputArray = allArray.map(function (item) {
            allObject[_this2._formatType === 'map' ? item.input : item.order] = item.output;
            return item.output;
          });
          return Promise.resolve({
            response: response,
            allObject: allObject,
            allArray: allArray,
            outputArray: outputArray,
            toObject: function toObject() {
              return allObject;
            },
            toArray: function toArray() {
              return allArray;
            }
          });
        });
      }
    }, {
      key: 'cancelTask',
      value: function cancelTask() {
        var _this3 = this;

        this._debug('Calling the cancelTask method, task will stop at next trick!');
        this._stopAtNextTrick = true;
        return new Promise(function (resolve, reject) {
          _this3.event.on('TASKSTOPED', resolve());
        });
      }
    }, {
      key: '_assign',
      value: function _assign(THIS) {
        var _this4 = this;

        for (var _len2 = arguments.length, params = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          params[_key2 - 1] = arguments[_key2];
        }

        params = params.map(function (item) {
          if (!_this4.isType(item, {})) return undefined;
          var newObj = {};
          for (var key in item) {
            var value = item[key];
            if (_this4.isType(value, {})) {
              if (!THIS.hasOwnProperty(key)) newObj[key] = _this4.isType(value.default, function () {}) ? value.default() : value.default;
            } else {
              newObj[key] = value;
            }
          }
          return newObj;
        });
        return this.assign.apply(this, [THIS].concat(toConsumableArray(params)));
      }
    }, {
      key: '_checkParams',
      value: function _checkParams(param) {
        var _this5 = this;

        this._assign(this, this._defaultParams);
        if (this.isType(param[0], {})) {
          this.assign(this, param[0]);
        } else if (this.isType(param[0], [])) {
          this.task = param[0];
          this.rejectOnError = param[1] || false;
          if (param[2]) {
            if (this.isType(param[2], {})) {
              this.assign(this, param[2]);
            } else {
              throw this._errorManage('option expect to a object, please check!');
            }
          }
        }

        var _loop = function _loop(name) {
          var param = _this5._defaultParams[name];
          if (_this5.isType(param, undefined)) {
            return 'continue';
          }
          if (_this5.isType(param, {})) {
            if (param.hasOwnProperty('type') && !_this5.isType(_this5[name], undefined)) {
              param.type = _this5.isType(param.type, []) ? param.type : [param.type];
              if (param.type.filter(function (item) {
                return item === _this5[name].constructor;
              }).length === 0) {
                var types = param.type.map(function (item) {
                  return item.name;
                });
                throw _this5._errorManage(name + ' expect to a ' + types + ' but get a ' + _this5.whatType(_this5[name]) + ', please check!');
              }
            } else {
              return 'continue';
            }
          } else if (!_this5.isType(param, _this5[name])) {
            throw _this5._errorManage(name + ' expect to a ' + _this5.whatType(param) + ' but get a ' + _this5.whatType(_this5[name]) + ', please check!');
          }
        };

        for (var name in this._defaultParams) {
          var _ret = _loop(name);

          if (_ret === 'continue') continue;
        }
      }
    }, {
      key: '_initTask',
      value: function _initTask() {
        var order = 0;
        var task = [];
        for (var key in this.task) {
          task.push({
            order: order,
            stepKey: key,
            handle: this.task[key],
            status: UNCALL
          });
          order++;
        }
        this.task = this.randomStep ? this.shuffle(task) : task;
      }
    }, {
      key: '_initHooks',
      value: function _initHooks() {
        var _this6 = this;

        if (this.showProgress) {
          var progress = function progress(_ref) {
            var step = _ref.step,
                all = _ref.all,
                progress = _ref.progress;

            var completeStep = _this6.task.filter(function (s) {
              return s.status === CALLED;
            }).length;
            console.log('[ ' + _this6.alias + ' ] all: ' + all + ' complete: ' + (completeStep + 1) + ' progress: ' + progress);
          };
          var oldHandleEnd = this.handleEnd;
          this.handleEnd = function () {
            for (var _len3 = arguments.length, params = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              params[_key3] = arguments[_key3];
            }

            oldHandleEnd.apply(_this6, params);
            progress.apply(_this6, params);
          };
        }
      }
    }, {
      key: '_getStepBettwen',
      value: function _getStepBettwen() {
        return this.isType(this.stepBettwen, []) ? this.randomNumber.apply(this, toConsumableArray(this.stepBettwen.slice(0, 2))) : this.stepBettwen;
      }
    }, {
      key: '_errorManage',
      value: function _errorManage() {
        var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'unexpected error!';

        if (!this.isType(message, '')) message = message.toString();
        return new Error('[async-multiple ERROR]: ' + message);
      }
    }, {
      key: '_makeError',
      value: function _makeError(err) {
        if (err instanceof Error) return err;
        if (err instanceof String) return new Error(err);
        return new Error(err.toString());
      }
    }, {
      key: '_createQueue',
      value: function _createQueue() {
        var _this7 = this;

        var unCalledTask = this.task.filter(function (s) {
          return s.status === UNCALL;
        });
        var callingTask = this.task.filter(function (s) {
          return s.status === CALLING;
        });
        var orderList = this.task.map(function (s) {
          return s.order;
        });
        var canCallCount = Math.min(this.maxCall - callingTask.length, unCalledTask.length);
        if (canCallCount < 1) return;
        unCalledTask.slice(0, canCallCount).map(function (s) {
          var step = orderList.indexOf(s.order);
          _this7.task[step].status = CALLING;
          _this7.sleep(_this7._getStepBettwen()).then(function () {
            _this7._callTaskHandle(step);
          });
        });
      }
    }, {
      key: '_beginTask',
      value: function _beginTask() {
        var _this8 = this;

        var singleTaskCalledNum = 0;
        var result = [];
        if (this.task.length === 0) return Promise.resolve([]);
        this._createQueue();
        return new Promise(function (resolve, reject) {
          // bind action
          _this8.event.on(_this8._actionName, function (_ref2) {
            var error = _ref2.error,
                output = _ref2.output,
                step = _ref2.step;

            if (_this8.taskStatus === CALLED) return;
            // check if continue
            if (_this8._stopAtNextTrick) {
              _this8.taskStatus = CALLED;
              resolve(result);
              _this8.event.emit('TASKSTOPED');
              return;
            }
            // chech if enough success result
            if (_this8.maxSuccessCount && result.filter(function (item) {
              return !item.error;
            }).length >= _this8.maxSuccessCount) {
              _this8._debug('Enough success result, task will stop!');
              _this8.taskStatus = CALLED;
              resolve(result);
              return;
            }
            if (error) {
              // if set errorRetry
              if (_this8.errorRetry > singleTaskCalledNum) {
                singleTaskCalledNum += 1;
                _this8.task[step].status = UNCALL;
                // reinit queue
                _this8._createQueue();
                return;
              }
              error = _this8._makeError(error);
              if (_this8.rejectOnError) {
                return reject(error);
              }
            }
            singleTaskCalledNum = 0;
            _this8.task[step].status = CALLED;
            result.push(_this8.removeUndefined(_extends({}, _this8.task[step], {
              output: output,
              error: error,
              handle: undefined,
              status: undefined,
              stepKey: undefined
            })));
            if (_this8.task.filter(function (s) {
              return s.status === CALLED;
            }).length !== _this8.task.length) {
              _this8._createQueue();
            } else {
              _this8.taskStatus = CALLED;
              resolve(result);
            }
          });
        });
      }
    }, {
      key: '_debug',
      value: function _debug() {
        if (this.debug) {
          var _babelHelpers$get;

          for (var _len4 = arguments.length, params = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            params[_key4] = arguments[_key4];
          }

          (_babelHelpers$get = get(Each.prototype.__proto__ || Object.getPrototypeOf(Each.prototype), '_debug', this)).call.apply(_babelHelpers$get, [this].concat(params));
        }
      }
    }, {
      key: '_callTaskHandle',
      value: function _callTaskHandle() {
        var _this9 = this;

        var step = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var isRetry = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        if (step > this.task.length - 1 || step < 0) return Promise.reject(this._errorManage('step overflow!'));
        var status = PENDING;
        var timer = null;
        var allStep = this.task.length;
        var completeStep = this.task.filter(function (s) {
          return s.status === CALLED;
        }).length;
        var progress = function progress(s) {
          return (100 * s / allStep).toFixed(2) + '%';
        };
        if (this.handleStart) this.handleStart(_extends({ step: step, all: allStep, progress: progress(completeStep) }, this.task[step], { isRetry: isRetry, cancelTask: this.cancelTask.bind(this) }));
        var succcesCallback = function succcesCallback(output) {
          if (_this9.taskStatus === CALLED) return;
          if (status !== PENDING) return;
          status = RESOLVE;
          if (timer) clearInterval(timer);
          var response = _extends({}, _this9.task[step], { all: allStep, progress: progress(completeStep + 1), output: output, error: null, step: step, isRetry: isRetry, cancelTask: _this9.cancelTask.bind(_this9) });
          if (_this9.handleEnd) _this9.handleEnd(response);
          _this9.event.emit(_this9._actionName, response);
        };
        var errorCallback = function errorCallback(error) {
          if (_this9.taskStatus === CALLED) return;
          if (status !== PENDING) return;
          status = REJECT;
          if (timer) clearInterval(timer);
          var response = _extends({}, _this9.task[step], { all: allStep, progress: progress(completeStep + 1), output: _this9._getTaskOutput, error: error, step: step, isRetry: isRetry });
          if (_this9.handleEnd) _this9.handleEnd(response);
          _this9.event.emit(_this9._actionName, response);
        };
        if (!this.isType(this.stepTimeout, undefined)) {
          timer = setTimeout(function () {
            errorCallback(_this9._makeError('timeout!'));
          }, this.stepTimeout);
        }
        var res = this.task[step].handle(this.task[step].input, step, this.cancelTask.bind(this), this.task[step].stepKey);
        if (res !== undefined) this.makePromise(res).then(succcesCallback, errorCallback);
      }
    }, {
      key: '_getTaskOutput',
      get: function get() {
        if (!this.isType(this.errorReplace, undefined)) return this.errorReplace;
        return null;
      }
    }]);
    return Each;
  }(Lib);

  var Map = function (_Each) {
    inherits(Map, _Each);

    function Map(param) {
      classCallCheck(this, Map);

      var _this = possibleConstructorReturn(this, (Map.__proto__ || Object.getPrototypeOf(Map)).call(this, param));

      _this._formatType = 'map';
      return _this;
    }

    // _initTask() {
    //   const res = this.task.map((item, key) => ({
    //     order: key,
    //     input: item,
    //     handle: (...params) => this.handle(...params),
    //   }))
    //   this.task = this.randomStep ? this.shuffle(res) : res
    // }

    createClass(Map, [{
      key: '_initTask',
      value: function _initTask() {
        var _this2 = this;

        var order = 0;
        var task = [];
        for (var key in this.task) {
          task.push({
            order: order,
            input: this.task[key],
            stepKey: key,
            handle: function handle() {
              return _this2.handle.apply(_this2, arguments);
            },
            status: UNCALL
          });
          order++;
        }
        this.task = this.randomStep ? this.shuffle(task) : task;
      }
    }]);
    return Map;
  }(Each);

  var map = function map() {
    for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
      params[_key] = arguments[_key];
    }

    return new (Function.prototype.bind.apply(Map, [null].concat(params)))().start();
  };
  var each = function each() {
    for (var _len2 = arguments.length, params = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      params[_key2] = arguments[_key2];
    }

    return new (Function.prototype.bind.apply(Each, [null].concat(params)))().start();
  };

  exports.Each = Each;
  exports.Event = Event;
  exports.Map = Map;
  exports.each = each;
  exports.map = map;

  Object.defineProperty(exports, '__esModule', { value: true });

});
