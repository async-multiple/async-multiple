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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _index = __webpack_require__(6);

var _index2 = _interopRequireDefault(_index);

var _orderby = __webpack_require__(10);

var _orderby2 = _interopRequireDefault(_orderby);

var _constants = __webpack_require__(3);

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
    _this.taskStatus = _constants.UNCALL;
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
      this.taskStatus = _constants.CALLING;
      return this._beginTask().then(function (response) {
        var allArray = (0, _orderby2.default)(response, ['order']);
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
      return this.assign.apply(this, [THIS].concat(_toConsumableArray(params)));
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
          status: _constants.UNCALL
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
            return s.status === _constants.CALLED;
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
    key: '_createQueue',
    value: function _createQueue() {
      var _this7 = this;

      var unCalledTask = this.task.filter(function (s) {
        return s.status === _constants.UNCALL;
      });
      var callingTask = this.task.filter(function (s) {
        return s.status === _constants.CALLING;
      });
      var orderList = this.task.map(function (s) {
        return s.order;
      });
      var canCallCount = Math.min(this.maxCall - callingTask.length, unCalledTask.length);
      if (canCallCount < 1) return;
      unCalledTask.slice(0, canCallCount).map(function (s) {
        var step = orderList.indexOf(s.order);
        _this7.task[step].status = _constants.CALLING;
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

          if (_this8.taskStatus === _constants.CALLED) return;
          // check if continue
          if (_this8._stopAtNextTrick) {
            _this8.taskStatus = _constants.CALLED;
            resolve(result);
            _this8.event.emit('TASKSTOPED');
            return;
          }
          // chech if enough success result
          if (_this8.maxSuccessCount && result.filter(function (item) {
            return !item.error;
          }).length >= _this8.maxSuccessCount) {
            _this8._debug('Enough success result, task will stop!');
            _this8.taskStatus = _constants.CALLED;
            resolve(result);
            return;
          }
          if (error) {
            // if set errorRetry
            if (_this8.errorRetry > singleTaskCalledNum) {
              singleTaskCalledNum += 1;
              _this8.task[step].status = _constants.UNCALL;
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
          _this8.task[step].status = _constants.CALLED;
          result.push(_this8.removeUndefined(_extends({}, _this8.task[step], { output: output, error: error, handle: undefined, status: undefined, stepKey: undefined })));
          if (_this8.task.filter(function (s) {
            return s.status === _constants.CALLED;
          }).length !== _this8.task.length) {
            _this8._createQueue();
          } else {
            _this8.taskStatus = _constants.CALLED;
            resolve(result);
          }
        });
      });
    }
  }, {
    key: '_debug',
    value: function _debug() {
      if (this.debug) {
        var _get2;

        for (var _len4 = arguments.length, params = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          params[_key4] = arguments[_key4];
        }

        (_get2 = _get(Each.prototype.__proto__ || Object.getPrototypeOf(Each.prototype), '_debug', this)).call.apply(_get2, [this].concat(params));
      }
    }
  }, {
    key: '_callTaskHandle',
    value: function _callTaskHandle() {
      var _this9 = this;

      var step = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var isRetry = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (step > this.task.length - 1 || step < 0) return Promise.reject(this._errorManage('step overflow!'));
      var status = _constants.PENDING;
      var timer = null;
      var allStep = this.task.length;
      var completeStep = this.task.filter(function (s) {
        return s.status === _constants.CALLED;
      }).length;
      var progress = function progress(s) {
        return (100 * s / allStep).toFixed(2) + '%';
      };
      if (this.handleStart) this.handleStart(_extends({ step: step, all: allStep, progress: progress(completeStep) }, this.task[step], { isRetry: isRetry, cancelTask: this.cancelTask.bind(this) }));
      var succcesCallback = function succcesCallback(output) {
        if (_this9.taskStatus === _constants.CALLED) return;
        if (status !== _constants.PENDING) return;
        status = _constants.RESOLVE;
        if (timer) clearInterval(timer);
        var response = _extends({}, _this9.task[step], { all: allStep, progress: progress(completeStep + 1), output: output, error: null, step: step, isRetry: isRetry, cancelTask: _this9.cancelTask.bind(_this9) });
        if (_this9.handleEnd) _this9.handleEnd(response);
        _this9.event.emit(_this9._actionName, response);
      };
      var errorCallback = function errorCallback(error) {
        if (_this9.taskStatus === _constants.CALLED) return;
        if (status !== _constants.PENDING) return;
        status = _constants.REJECT;
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
}(_index2.default);

exports.default = Each;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(7);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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
      return this.whatType(fn) === '[object Promise]' || !!(fn.then && this.isType(fn, fn.then, function () {}));
    }
  }, {
    key: 'makePromise',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(obj) {
        var res;
        return _regenerator2.default.wrap(function _callee$(_context) {
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
var PENDING = exports.PENDING = 'PENDING';
var RESOLVE = exports.RESOLVE = 'RESOLVE';
var REJECT = exports.REJECT = 'REJECT';
var UNCALL = exports.UNCALL = 'UNCALL';
var CALLING = exports.CALLING = 'CALLING';
var CALLED = exports.CALLED = 'CALLED';

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Event = exports.Each = exports.Map = exports.each = exports.map = undefined;

var _map = __webpack_require__(5);

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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _each = __webpack_require__(0);

var _each2 = _interopRequireDefault(_each);

var _constants = __webpack_require__(3);

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

  // _initTask() {
  //   const res = this.task.map((item, key) => ({
  //     order: key,
  //     input: item,
  //     handle: (...params) => this.handle(...params),
  //   }))
  //   this.task = this.randomStep ? this.shuffle(res) : res
  // }

  _createClass(Map, [{
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
          status: _constants.UNCALL
        });
        order++;
      }
      this.task = this.randomStep ? this.shuffle(task) : task;
    }
  }]);

  return Map;
}(_each2.default);

exports.default = Map;

/***/ }),
/* 6 */
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(9);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 10 */
/***/ (function(module, exports) {

// Generated by CoffeeScript 1.9.2
var compareProperty, dot;

module.exports = function(collection, expressions) {
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
  getter;
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


/***/ })
/******/ ]);
});
//# sourceMappingURL=async-multiple.map