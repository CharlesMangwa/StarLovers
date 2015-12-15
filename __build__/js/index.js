/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _context;
	
	var _dom = __webpack_require__(1);
	
	(_context = (0, _dom.select)('.Default_content'), _dom.text).call(_context, 'It works &#92;o/ !');

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.select = select;
	exports.css = css;
	exports.text = text;
	/*
	 * Select a DOM element
	 *
	 * @params {array} elements
	 * @return {array}
	 */
	function select() {
	    for (var _len = arguments.length, elements = Array(_len), _key = 0; _key < _len; _key++) {
	        elements[_key] = arguments[_key];
	    }
	
	    return elements.map(function (element) {
	        return document.querySelector(element);
	    });
	};
	
	/*
	 * Stylize elements
	 *
	 * @params {object} styles
	 * @return {this}
	 */
	function css(styles) {
	    this.map(function (element) {
	        for (var key in styles) {
	            element.style[key] = styles[key];
	        }
	    });
	    return this;
	}
	
	/*
	 * Change text content of elements
	 *
	 * @params {string} text
	 * @return {this}
	 */
	function text(text) {
	    this.map(function (element) {
	        element.innerHTML = text;
	    });
	    return this;
	}

/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map