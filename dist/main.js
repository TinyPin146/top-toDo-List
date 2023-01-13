/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/addProjects.js":
/*!****************************!*\
  !*** ./src/addProjects.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProject\": () => (/* binding */ addProject)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\nclass Project {\n    constructor(name) {\n        this.name = name;\n        this.tasks = [];\n    }\n}\n\nfunction addProject(e) {\n    const addNewProjectInput = document.querySelector('#add-new-project');\n    console.log(e.type);\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWRkUHJvamVjdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2FkZFByb2plY3RzLmpzPzI1NzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWRkTmV3UHJvamVjdElucHV0IH0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3QoZSkge1xuICAgIGNvbnN0IGFkZE5ld1Byb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtbmV3LXByb2plY3QnKTtcbiAgICBjb25zb2xlLmxvZyhlLnR5cGUpO1xufVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/addProjects.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addNewProjectInputBtn\": () => (/* binding */ addNewProjectInputBtn)\n/* harmony export */ });\n/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n/* harmony import */ var _addProjects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addProjects.js */ \"./src/addProjects.js\");\n\n\n\n\nconst buttonNewTask = document.querySelector('.button--new-task');\nconst taskIntakePopup = document.querySelector('.wrapper--task-intake');\nconst addNewProjectInputBtn = document.querySelector('#add-new-project-btn');\n\nfunction handleNewTaskBtn() {\n    _util_js__WEBPACK_IMPORTED_MODULE_0__.toggleHide(taskIntakePopup);\n}\n\nbuttonNewTask.addEventListener('click', handleNewTaskBtn);\ntaskIntakePopup.addEventListener('click', _util_js__WEBPACK_IMPORTED_MODULE_0__.toggleHideOnPopup);\naddNewProjectInputBtn.addEventListener('click', _addProjects_js__WEBPACK_IMPORTED_MODULE_1__.addProject)//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtDO0FBQ0E7QUFDVTs7QUFFNUM7QUFDQTtBQUNPOztBQUVQO0FBQ0EsSUFBSSxnREFBZTtBQUNuQjs7QUFFQTtBQUNBLDBDQUEwQyx1REFBc0I7QUFDaEUsZ0RBQWdELHVEQUFtQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi91dGlsLmpzJztcbmltcG9ydCAqIGFzIHByb2plY3RzIGZyb20gJy4vYWRkUHJvamVjdHMuanMnXG5cbmNvbnN0IGJ1dHRvbk5ld1Rhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLS1uZXctdGFzaycpO1xuY29uc3QgdGFza0ludGFrZVBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXItLXRhc2staW50YWtlJyk7XG5leHBvcnQgY29uc3QgYWRkTmV3UHJvamVjdElucHV0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1uZXctcHJvamVjdC1idG4nKTtcblxuZnVuY3Rpb24gaGFuZGxlTmV3VGFza0J0bigpIHtcbiAgICB1dGlsLnRvZ2dsZUhpZGUodGFza0ludGFrZVBvcHVwKTtcbn1cblxuYnV0dG9uTmV3VGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZU5ld1Rhc2tCdG4pO1xudGFza0ludGFrZVBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdXRpbC50b2dnbGVIaWRlT25Qb3B1cCk7XG5hZGROZXdQcm9qZWN0SW5wdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcm9qZWN0cy5hZGRQcm9qZWN0KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toggleHide\": () => (/* binding */ toggleHide),\n/* harmony export */   \"toggleHideOnPopup\": () => (/* binding */ toggleHideOnPopup)\n/* harmony export */ });\nfunction toggleHide(el) {\n    el.classList.toggle('hidden');\n}\n\nfunction toggleHideOnPopup(e) {\n    if (this !== e.target) return;\n    e.target.classList.toggle('hidden')\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91dGlsLmpzP2UwZWIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUhpZGUoZWwpIHtcbiAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUhpZGVPblBvcHVwKGUpIHtcbiAgICBpZiAodGhpcyAhPT0gZS50YXJnZXQpIHJldHVybjtcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/util.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;