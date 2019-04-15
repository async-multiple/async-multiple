(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["async-multiple"] = factory();
	else
		root["async-multiple"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = __webpack_require__(5);

var _index2 = _interopRequireDefault(_index);

var _orderbyShiv = __webpack_require__(6);

var _orderbyShiv2 = _interopRequireDefault(_orderbyShiv);

var _constants = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Each = function (_Lib) {
  _inherits(Each, _Lib);

  function Each() {
    _classCallCheck(this, Each);

    var _this = _possibleConstructorReturn(this, (Each.__proto__ || Object.getPrototypeOf(Each)).call(this));

    _this._defaultParams = {
      task: [],
      rejectOnError: false,
      handleStart: function handleStart() {},
      handleEnd: function handleEnd() {},
      randomStep: false,
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
      errorRetry: 0,
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
      }
    };
    _this._formatType = 'each';
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

  _createClass(Each, [{
    key: 'start',
    value: function start() {
      var _this2 = this;

      // handle result
      return this._beginTask().then(function (response) {
        var allArray = (0, _orderbyShiv2.default)(response, 'order', false);
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
      this._debug('Calling the cancelTask method, task will stop at next trick!');
      this._stopAtNextTrick = true;
    }
  }, {
    key: '_assign',
    value: function _assign(THIS) {
      var _this3 = this;

      for (var _len2 = arguments.length, params = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        params[_key2 - 1] = arguments[_key2];
      }

      params = params.map(function (item) {
        if (!_this3.isType(item, {})) return undefined;
        var newObj = {};
        for (var key in item) {
          var value = item[key];
          if (_this3.isType(value, {})) {
            if (!THIS.hasOwnProperty(key)) newObj[key] = _this3.isType(value.default, function () {}) ? value.default() : value.default;
          } else {
            newObj[key] = value;
          }
        }
        return newObj;
      });
      return this.assign.apply(this, [THIS].concat(_toConsumableArray(params)));
    }
  }, {
    key: '_checkParams',
    value: function _checkParams(param) {
      var _this4 = this;

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
        var param = _this4._defaultParams[name];
        if (_this4.isType(param, undefined)) {
          return 'continue';
        }
        if (_this4.isType(param, {})) {
          if (param.hasOwnProperty('type') && !_this4.isType(_this4[name], undefined)) {
            param.type = _this4.isType(param.type, []) ? param.type : [param.type];
            if (param.type.filter(function (item) {
              return item === _this4[name].constructor;
            }).length === 0) {
              var types = param.type.map(function (item) {
                return item.name;
              });
              throw _this4._errorManage(name + ' expect to a ' + types + ' but get a ' + _this4.whatType(_this4[name]) + ', please check!');
            }
          } else {
            return 'continue';
          }
        } else if (!_this4.isType(param, _this4[name])) {
          throw _this4._errorManage(name + ' expect to a ' + _this4.whatType(param) + ' but get a ' + _this4.whatType(_this4[name]) + ', please check!');
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
      var res = this.task.map(function (item, key) {
        return {
          order: key,
          handle: item
        };
      });
      this.task = this.randomStep ? this.shuffle(res) : res;
    }
  }, {
    key: '_initHooks',
    value: function _initHooks() {
      var _this5 = this;

      if (this.showProgress) {
        var progress = function progress(_ref) {
          var step = _ref.step,
              all = _ref.all,
              progress = _ref.progress;

          console.log('[ ' + _this5.alias + ' ] all: ' + all + ' complete: ' + (step + 1) + ' progress: ' + progress);
        };
        var oldHandleEnd = this.handleEnd;
        this.handleEnd = function () {
          for (var _len3 = arguments.length, params = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            params[_key3] = arguments[_key3];
          }

          oldHandleEnd.apply(_this5, params);
          progress.apply(_this5, params);
        };
      }
    }
  }, {
    key: '_getStepBettwen',
    value: function _getStepBettwen() {
      return this.isType(this.stepBettwen, []) ? this.randomNumber.apply(this, _toConsumableArray(this.stepBettwen.slice(0, 2))) : this.stepBettwen;
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
    key: '_beginTask',
    value: function _beginTask() {
      var _this6 = this;

      var taskCalledNum = 0;
      var result = [];
      var stepHandle = function stepHandle(step, resolveFn, isRetry) {
        // check if continue
        if (_this6._stopAtNextTrick) {
          resolveFn(result);
          return;
        }
        // chech if enough success result
        if (_this6.maxSuccessCount && result.filter(function (item) {
          return !item.error;
        }).length >= _this6.maxSuccessCount) {
          _this6._debug('Enough success result, task will stop!');
          resolveFn(result);
          return;
        }
        _this6.sleep(_this6._getStepBettwen()).then(function () {
          if (step < _this6.task.length) {
            _this6._callTaskHandle(step, isRetry);
          } else {
            resolveFn(result);
          }
        });
      };
      this._callTaskHandle();
      return new Promise(function (resolve, reject) {
        // bind action
        _this6.event.on(_this6._actionName, function (_ref2) {
          var error = _ref2.error,
              output = _ref2.output,
              step = _ref2.step;

          if (error) {
            // if set errorRetry
            if (_this6.errorRetry > taskCalledNum) {
              taskCalledNum += 1;
              stepHandle(step, resolve, true);
              return;
            }
            error = _this6._makeError(error);
            if (_this6.rejectOnError) {
              return reject(error);
            }
          }
          taskCalledNum = 0;
          result.push(_this6.removeUndefined(_extends({}, _this6.task[step], { output: output, error: error, handle: undefined })));
          stepHandle(step + 1, resolve);
        });
      });
    }
  }, {
    key: '_callTaskHandle',
    value: function _callTaskHandle() {
      var _this7 = this;

      var step = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var isRetry = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (step > this.task.length - 1 || step < 0) return Promise.reject(this._errorManage('step overflow!'));
      var status = _constants.PENDING;
      var timer = null;
      var allStep = this.task.length;
      var progress = function progress(s) {
        return (100 * s / allStep).toFixed(2) + '%';
      };
      if (this.handleStart) this.handleStart(_extends({ step: step, all: allStep, progress: progress(step) }, this.task[step], { isRetry: isRetry, cancelTask: this.cancelTask.bind(this) }));
      var succcesCallback = function succcesCallback(output) {
        if (status !== _constants.PENDING) return;
        status = _constants.RESOLVE;
        if (timer) clearInterval(timer);
        var response = _extends({}, _this7.task[step], { all: allStep, progress: progress(step + 1), output: output, error: null, step: step, isRetry: isRetry, cancelTask: _this7.cancelTask.bind(_this7) });
        if (_this7.handleEnd) _this7.handleEnd(response);
        _this7.event.emit(_this7._actionName, response);
      };
      var errorCallback = function errorCallback(error) {
        if (status !== _constants.PENDING) return;
        status = _constants.REJECT;
        if (timer) clearInterval(timer);
        var response = _extends({}, _this7.task[step], { all: allStep, progress: progress(step + 1), output: _this7._getTaskOutput, error: error, step: step, isRetry: isRetry });
        if (_this7.handleEnd) _this7.handleEnd(response);
        _this7.event.emit(_this7._actionName, response);
      };
      if (!this.isType(this.stepTimeout, undefined)) {
        timer = setTimeout(function () {
          errorCallback(_this7._makeError('timeout!'));
        }, this.stepTimeout);
      }
      this.makePromise(this.task[step].handle(this.task[step].input, step, this.cancelTask.bind(this))).then(succcesCallback, errorCallback);
    }
  }, {
    key: '_getTaskOutput',
    get: function get() {
      if (!this.isType(this.errorReplace, undefined)) return this.errorReplace;
      return null;
    }
  }]);

  return Each;
}(_index2.default);

exports.default = Each;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Util = function () {
  function Util() {
    _classCallCheck(this, Util);
  }

  _createClass(Util, [{
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
      return !!(fn.then && this.isType(fn, fn.then, function () {}));
    }
  }, {
    key: 'makePromise',
    value: function makePromise(obj) {
      return this.isPromise(obj) ? obj : Promise.resolve(obj);
    }
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

exports.default = Util;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(1);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Event = function (_Util) {
  _inherits(Event, _Util);

  function Event() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$debug = _ref.debug,
        debug = _ref$debug === undefined ? false : _ref$debug;

    _classCallCheck(this, Event);

    var _this = _possibleConstructorReturn(this, (Event.__proto__ || Object.getPrototypeOf(Event)).call(this));

    _this._callbacks = {};
    _this._isDebug = debug;
    return _this;
  }

  _createClass(Event, [{
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
}(_util2.default);

exports.default = Event;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Event = exports.Each = exports.Map = exports.each = exports.map = undefined;

var _map = __webpack_require__(4);

var _map2 = _interopRequireDefault(_map);

var _each = __webpack_require__(0);

var _each2 = _interopRequireDefault(_each);

var _event = __webpack_require__(2);

var _event2 = _interopRequireDefault(_event);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var map = exports.map = function map() {
  for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(_map2.default, [null].concat(params)))().start();
};
var each = exports.each = function each() {
  for (var _len2 = arguments.length, params = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    params[_key2] = arguments[_key2];
  }

  return new (Function.prototype.bind.apply(_each2.default, [null].concat(params)))().start();
};
exports.Map = _map2.default;
exports.Each = _each2.default;
exports.Event = _event2.default;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _each = __webpack_require__(0);

var _each2 = _interopRequireDefault(_each);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Map = function (_Each) {
  _inherits(Map, _Each);

  function Map(param) {
    _classCallCheck(this, Map);

    var _this = _possibleConstructorReturn(this, (Map.__proto__ || Object.getPrototypeOf(Map)).call(this, param));

    _this._formatType = 'map';
    return _this;
  }

  _createClass(Map, [{
    key: '_initTask',
    value: function _initTask() {
      var _this2 = this;

      var res = this.task.map(function (item, key) {
        return {
          order: key,
          input: item,
          handle: function handle() {
            return _this2.handle.apply(_this2, arguments);
          }
        };
      });
      this.task = this.randomStep ? this.shuffle(res) : res;
    }
  }]);

  return Map;
}(_each2.default);

exports.default = Map;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(1);

var _util2 = _interopRequireDefault(_util);

var _event = __webpack_require__(2);

var _event2 = _interopRequireDefault(_event);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Lib = function (_Util) {
  _inherits(Lib, _Util);

  function Lib(param) {
    _classCallCheck(this, Lib);

    var _this = _possibleConstructorReturn(this, (Lib.__proto__ || Object.getPrototypeOf(Lib)).call(this, param));

    _this.event = new _event2.default();
    return _this;
  }

  _createClass(Lib, [{
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
}(_util2.default);

exports.default = Lib;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function (definition) {
  if (true) {
    module.exports = definition();
  }
  else {
    window.orderBy = definition();
  }
})(
function () {
  return function orderBy (target, by, decend) {
    // If `target` is not an target, throw type error.
    var type = Object.prototype.toString.call(target);
    if (type !== '[object Array]') {
      throw new TypeError('orderBy only takes array parameter. Found: ' + type);
    }

    // If `by` is not defined properly, throw type error.
    if (typeof by !== 'string') {
      throw new TypeError('orderBy expects to take a string parameter. Found: '
                          + typeof by);
    }

    decend = typeof decend === 'boolean' ? decend : false;

    // First, create a `by` mapping list.
    // Format: {byValue: originalIndex, ...}
    var mapping = {};
    var temp = [];
    target.forEach(function (item, index) {
      var byValue = item[by];
      mapping[item[by]] = index;

      // Push curent item to `temp`.
      temp.push(byValue);
    });

    // Now, sort `temp`.
    temp.sort();
    // If need `decend`, reverse `temp`.
    if (decend) {
      temp.reverse();
    }

    // Now, map `temp` back to original `target`.
    var result = [];
    temp.forEach(function (value) { // `value` refers to `byValue` in `mapping`.
      result.push(target[mapping[value]]);
    });

    return result;
  };
});


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var PENDING = exports.PENDING = 'PENDING';
var RESOLVE = exports.RESOLVE = 'RESOLVE';
var REJECT = exports.REJECT = 'REJECT';

/***/ })
/******/ ]);
});
//# sourceMappingURL=async-multiple.map