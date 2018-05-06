(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("prop-types"), require("react"), require("styled-components"));
	else if(typeof define === 'function' && define.amd)
		define("RomanNumeral", ["prop-types", "react", "styled-components"], factory);
	else if(typeof exports === 'object')
		exports["RomanNumeral"] = factory(require("prop-types"), require("react"), require("styled-components"));
	else
		root["RomanNumeral"] = factory(root["PropTypes"], root["React"], root["styled"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_prop_types__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_styled_components__) {
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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/components/RomanNumeral.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/101/is-integer.js":
/*!****************************************!*\
  !*** ./node_modules/101/is-integer.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** 
 * @module 101/is-integer
 */ 

/**
 * Returns true if n is an integer.
 * @function module:101/is-integer
 * @param {*} val - value checked to be a string
 * @return {boolean} Whether the value is an integer or not
 */

module.exports = isInteger;

function isInteger (val) {
  return typeof val === 'number' && isFinite(val) && Math.floor(val) === val;
}


/***/ }),

/***/ "./node_modules/object-loops/inverse.js":
/*!**********************************************!*\
  !*** ./node_modules/object-loops/inverse.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @module object-loops/inverse
 */
var isInteger = __webpack_require__(/*! 101/is-integer */ "./node_modules/101/is-integer.js")
var reduce = __webpack_require__(/*! ./reduce */ "./node_modules/object-loops/reduce.js")

/**
 * Creates a new object with keys and values flipped.
 * @function module:object-loops/inverse
 * @param {object} [obj] - object to inverse keys and values, not accepted if being used directly on Object.prototype
 * @returns {object} newly created object with inversed values
 */
module.exports = inverse

function inverse (obj) {
  if (Array.isArray(obj)) {
    var valsAreInts = obj.every(isInteger)
    return obj.reduce(flip, valsAreInts ? [] : {})
  }
  if (typeof obj !== 'object' && typeof obj !== 'function') {
    throw new TypeError(obj + ' must be an object')
  }
  return reduce(obj, flip, {})
}

function flip (inversed, val, key) {
  inversed[val] = key
  return inversed
}


/***/ }),

/***/ "./node_modules/object-loops/reduce.js":
/*!*********************************************!*\
  !*** ./node_modules/object-loops/reduce.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @module object-loops/reduce
 */

/**
 * Applies a function against an accumulator and each value of the object to reduce it to a single value.
 * @function module:object-loops/reduce
 * @param {object} [obj] - object to reduce values, not accepted if being used directly on Object.prototype
 * @param {reduceCallback} callback - function to test each value in the object. return true to keep that entry, false otherwise.
 * @param {*} [initialValue] - optional. object to use as the first argument to the first call of the callback
 * @returns {*} finalValue - final value returned by reduction, or just first val if only one exists.
 */
module.exports = reduce

function reduce (obj, callback, initialValue) {
  if (Array.isArray(obj)) {
    return (arguments.length > 2)
      ? obj.reduce(callback, initialValue)
      : obj.reduce(callback)
  }
  if (typeof obj !== 'object' && typeof obj !== 'function') {
    throw new TypeError(obj + ' must be an object')
  }
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' must be a function')
  }
  var keys = Object.keys(obj)
  var noInitialValue = arguments.length < 3 // initial value can be null or undefined
  if (keys.length === 0 && noInitialValue) {
    throw new Error('Reduce of empty object with no initial value')
  }
  if (keys.length === 1 && noInitialValue) {
    return obj[keys[0]] // return first value
  }
  var finalValue = noInitialValue
    ? keys.reduce(reduction)
    : keys.reduce(reduction, initialValue)
  function reduction (prevVal, key, i) {
    if (noInitialValue && i === 1) {
      // if no initial value, prevVal is first KEY
      prevVal = obj[prevVal]
    }
    var val = obj[key]

    return callback(prevVal, val, key, obj)
  }

  return finalValue
}
/**
 * This callback type is called `reduceCallback` and is displayed as a global symbol.
 * @callback reduceCallback
 * @param {*} previousValue - value previously returned in the last invocation of the callback, initialValue (if supplied), or first value in the object
 * @param {*} currentValue - current value being processed in the object
 * @param {string} key - key of the current value being processed in the object
 * @param {object} obj - object which values are being iterated
 * @returns {*} memo -  return true to keep that entry, false otherwise
 */


/***/ }),

/***/ "./src/components/RomanNumeral.js":
/*!****************************************!*\
  !*** ./src/components/RomanNumeral.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tooltip/Tooltip */ "./src/components/Tooltip/Tooltip.js");
/* harmony import */ var _utils_roman__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/roman */ "./src/utils/roman.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n\tposition: relative;\n\tcursor: default;\n'], ['\n\tposition: relative;\n\tcursor: default;\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span(_templateObject);

var RomanNumeral = function (_React$Component) {
	_inherits(RomanNumeral, _React$Component);

	function RomanNumeral(props) {
		_classCallCheck(this, RomanNumeral);

		var _this = _possibleConstructorReturn(this, (RomanNumeral.__proto__ || Object.getPrototypeOf(RomanNumeral)).call(this, props));

		_this.state = {
			isTooltipVisible: false
		};

		_this.onMouseEnter = _this.onMouseEnter.bind(_this);
		_this.onMouseLeave = _this.onMouseLeave.bind(_this);
		return _this;
	}

	_createClass(RomanNumeral, [{
		key: 'onMouseEnter',
		value: function onMouseEnter() {
			this.setState({
				isTooltipVisible: true
			});
		}
	}, {
		key: 'onMouseLeave',
		value: function onMouseLeave() {
			this.setState({
				isTooltipVisible: false
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    returnType = _props.returnType,
			    value = _props.value,
			    hasTooltip = _props.hasTooltip;
			var isTooltipVisible = this.state.isTooltipVisible;
			var onMouseEnter = this.onMouseEnter,
			    onMouseLeave = this.onMouseLeave;


			return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
				Wrapper,
				{ onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave },
				returnType === 'roman-numeral' && Object(_utils_roman__WEBPACK_IMPORTED_MODULE_4__["toRoman"])(value) || returnType === 'decimal' && Object(_utils_roman__WEBPACK_IMPORTED_MODULE_4__["fromRoman"])(value),
				hasTooltip && isTooltipVisible && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
					_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_3__["default"],
					null,
					value
				)
			);
		}
	}]);

	return RomanNumeral;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

RomanNumeral.propTypes = {
	hasTooltip: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
	returnType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['roman-numeral', 'decimal']),
	value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]).isRequired
};

RomanNumeral.defaultProps = {
	hasTooltip: false,
	returnType: 'roman-numeral'
};

/* harmony default export */ __webpack_exports__["default"] = (RomanNumeral);

/***/ }),

/***/ "./src/components/Tooltip/Tooltip.js":
/*!*******************************************!*\
  !*** ./src/components/Tooltip/Tooltip.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
var _templateObject = _taggedTemplateLiteral(['\n\ttop: 100%;\n\tleft: 30%;\n\tborder: solid transparent;\n\tcontent: \' \';\n\theight: 0;\n\twidth: 0;\n\tposition: absolute;\n\tpointer-events: none;\n'], ['\n\ttop: 100%;\n\tleft: 30%;\n\tborder: solid transparent;\n\tcontent: \' \';\n\theight: 0;\n\twidth: 0;\n\tposition: absolute;\n\tpointer-events: none;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\tposition: absolute;\n\tleft: -1rem;\n\tbottom: calc(100% + 1rem);\n\tbackground: #88b7d5;\n\tbox-shadow: 1px 2px 10px rgba(0, 0, 0, 0.5);\n\tpadding: 0.375rem 1rem;\n\tcolor: white;\n\tfont-weight: bold;\n\tborder: 4px solid #c2e1f5;\n\tfont-family: \'Times New Roman\', serif;\n\tborder-radius: 5px;\n\n\t&::before {\n\t\t', ';\n\t}\n\n\t&::after {\n\t\t', ';\n\t}\n\n\t&::after {\n\t\tborder-color: rgba(136, 183, 213, 0);\n\t\tborder-top-color: #88b7d5;\n\t\tborder-width: 10px;\n\t\tmargin-left: -10px;\n\t}\n\n\t&::before {\n\t\tborder-color: rgba(194, 225, 245, 0);\n\t\tborder-top-color: #c2e1f5;\n\t\tborder-width: 16px;\n\t\tmargin-left: -16px;\n\t}\n'], ['\n\tposition: absolute;\n\tleft: -1rem;\n\tbottom: calc(100% + 1rem);\n\tbackground: #88b7d5;\n\tbox-shadow: 1px 2px 10px rgba(0, 0, 0, 0.5);\n\tpadding: 0.375rem 1rem;\n\tcolor: white;\n\tfont-weight: bold;\n\tborder: 4px solid #c2e1f5;\n\tfont-family: \'Times New Roman\', serif;\n\tborder-radius: 5px;\n\n\t&::before {\n\t\t', ';\n\t}\n\n\t&::after {\n\t\t', ';\n\t}\n\n\t&::after {\n\t\tborder-color: rgba(136, 183, 213, 0);\n\t\tborder-top-color: #88b7d5;\n\t\tborder-width: 10px;\n\t\tmargin-left: -10px;\n\t}\n\n\t&::before {\n\t\tborder-color: rgba(194, 225, 245, 0);\n\t\tborder-top-color: #c2e1f5;\n\t\tborder-width: 16px;\n\t\tmargin-left: -16px;\n\t}\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var beforeAndAfter = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject);

var Tooltip = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject2, beforeAndAfter, beforeAndAfter);

/* harmony default export */ __webpack_exports__["default"] = (Tooltip);

/***/ }),

/***/ "./src/utils/roman.js":
/*!****************************!*\
  !*** ./src/utils/roman.js ***!
  \****************************/
/*! exports provided: toRoman, fromRoman */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toRoman", function() { return toRoman; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRoman", function() { return fromRoman; });
/* harmony import */ var object_loops_inverse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! object-loops/inverse */ "./node_modules/object-loops/inverse.js");
/* harmony import */ var object_loops_inverse__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(object_loops_inverse__WEBPACK_IMPORTED_MODULE_0__);


var overline = function overline(letter) {
	return letter + '\u0305';
};

var romanNumeralsMap = {
	1: 'I',
	4: 'IV',
	5: 'V',
	9: 'IX',
	10: 'X',
	40: 'XL',
	50: 'L',
	90: 'XC',
	100: 'C',
	400: 'CD',
	500: 'D',
	900: 'CM',
	1000: 'M',
	4000: '' + overline('I') + overline('V'),
	5000: overline('V'),
	9000: '' + overline('I') + overline('X'),
	10000: overline('X'),
	40000: '' + overline('X') + overline('L'),
	50000: overline('L'),
	90000: '' + overline('X') + overline('C'),
	100000: overline('C'),
	400000: '' + overline('C') + overline('D'),
	500000: overline('D'),
	900000: '' + overline('C') + overline('M'),
	1000000: overline('M')
};

var MAX_ALLOWED_DECIMAL_VALUE = 10000000000;
var toRoman = function toRoman(decimalValue) {
	// error check
	if (decimalValue > MAX_ALLOWED_DECIMAL_VALUE) return 'too-large';

	var descendingOrder = function descendingOrder(prevValue, currValue) {
		return Number(prevValue) < Number(currValue) ? 1 : -1;
	};
	var decimalValues = Object.keys(romanNumeralsMap).sort(descendingOrder);

	var remaining = decimalValue;
	var romanNumeralResult = '';
	while (remaining > 0) {
		// eslint-disable-next-line no-loop-func
		var currentHighestValue = function currentHighestValue(value) {
			return remaining >= value;
		};
		var valueToDeduct = decimalValues.find(currentHighestValue);
		var romanCharacterCount = Math.floor(remaining / valueToDeduct);

		remaining -= valueToDeduct * romanCharacterCount;
		romanNumeralResult += romanNumeralsMap[valueToDeduct].repeat(romanCharacterCount);
	}

	return romanNumeralResult;
};

var MAX_ITERATION_TIMEOUT = 5000;
var fromRoman = function fromRoman(romanNumeral) {
	var romanNumeralsMapInversed = object_loops_inverse__WEBPACK_IMPORTED_MODULE_0___default()(romanNumeralsMap);

	// start from left to right, recognize partial of numeral, and add to total sum
	var iterationCount = 0;
	var remaining = romanNumeral;
	var decimalValueResult = 0;
	while (remaining !== '' && iterationCount < MAX_ITERATION_TIMEOUT) {
		// eslint-disable-next-line no-magic-numbers
		var firstFourChars = remaining.substr(0, 4);
		var firstTwoChars = remaining.substr(0, 2);
		var firstOneChar = remaining.substr(0, 1);

		remaining = remaining.substr(
		// eslint-disable-next-line no-magic-numbers
		romanNumeralsMapInversed[firstFourChars] && 4 || romanNumeralsMapInversed[firstTwoChars] && 2 || romanNumeralsMapInversed[firstOneChar] && 1);
		decimalValueResult += Number(romanNumeralsMapInversed[firstFourChars] || romanNumeralsMapInversed[firstTwoChars] || romanNumeralsMapInversed[firstOneChar]);

		iterationCount++;
	}

	// if not timed-out, then return result, else "error"
	return iterationCount === MAX_ITERATION_TIMEOUT ? 'error' : decimalValueResult;
};

/***/ }),

/***/ "prop-types":
/*!*********************************************************************************************************!*\
  !*** external {"commonjs":"prop-types","commonjs2":"prop-types","amd":"prop-types","root":"PropTypes"} ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_prop_types__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "styled-components":
/*!***************************************************************************************************************************!*\
  !*** external {"commonjs":"styled-components","commonjs2":"styled-components","amd":"styled-components","root":"styled"} ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_styled_components__;

/***/ })

/******/ });
});
//# sourceMappingURL=roman-numeral-component.js.map