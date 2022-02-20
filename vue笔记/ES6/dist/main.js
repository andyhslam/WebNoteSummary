/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/aicoder.js":
/*!************************!*\
  !*** ./src/aicoder.js ***!
  \************************/
/*! exports provided: age, name, addAge, show, a, b, c, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"age\", function() { return age; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"name\", function() { return name; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addAge\", function() { return addAge; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"show\", function() { return show; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return a; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return b; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"c\", function() { return c; });\nlet age = 19;\r\nlet name = 'aicoder';\r\nfunction addAge(num) {\r\n    age += num;\r\n}\r\nfunction show() {\r\n    console.log('a :', a);\r\n    console.log('b :', b);\r\n    console.log('c :', c);\r\n    console.log('age :', age);\r\n    console.log('name :', name);\r\n}\r\nlet [a, b, c] = [1, 2, 3];\r\n\r\nlet k = 10;\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (k); // 等价于 export let default = k;\n\n//# sourceURL=webpack:///./src/aicoder.js?");

/***/ }),

/***/ "./src/gwj.js":
/*!********************!*\
  !*** ./src/gwj.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("console.log('miss asia');\n\n//# sourceURL=webpack:///./src/gwj.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _whole__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./whole */ \"./src/whole.js\");\n/* harmony import */ var _gwj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gwj */ \"./src/gwj.js\");\n/* harmony import */ var _gwj__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_gwj__WEBPACK_IMPORTED_MODULE_1__);\n// ES6的模块是单例模式：从一个文件中导出的模块，不管导出多少次，都是同一个对象。\r\n// 模块的变量延迟执行：用到的时候，才会去拿具体的值。\r\n\r\n\r\n\r\nObject(_whole__WEBPACK_IMPORTED_MODULE_0__[\"show\"])()\r\nObject(_whole__WEBPACK_IMPORTED_MODULE_0__[\"addAge\"])(10)\r\nObject(_whole__WEBPACK_IMPORTED_MODULE_0__[\"show\"])()\r\n_whole__WEBPACK_IMPORTED_MODULE_0__[\"show\"]()\r\nconsole.log('sdk :', _whole__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/whole.js":
/*!**********************!*\
  !*** ./src/whole.js ***!
  \**********************/
/*! exports provided: default, age, name, addAge, show, a, b, c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _aicoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aicoder */ \"./src/aicoder.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"age\", function() { return _aicoder__WEBPACK_IMPORTED_MODULE_0__[\"age\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"name\", function() { return _aicoder__WEBPACK_IMPORTED_MODULE_0__[\"name\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"addAge\", function() { return _aicoder__WEBPACK_IMPORTED_MODULE_0__[\"addAge\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"show\", function() { return _aicoder__WEBPACK_IMPORTED_MODULE_0__[\"show\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return _aicoder__WEBPACK_IMPORTED_MODULE_0__[\"a\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return _aicoder__WEBPACK_IMPORTED_MODULE_0__[\"b\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"c\", function() { return _aicoder__WEBPACK_IMPORTED_MODULE_0__[\"c\"]; });\n\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (22);\n\n//# sourceURL=webpack:///./src/whole.js?");

/***/ })

/******/ });