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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"activeProjectGlobal\": () => (/* binding */ activeProjectGlobal),\n/* harmony export */   \"addProject\": () => (/* binding */ addProject),\n/* harmony export */   \"projects\": () => (/* binding */ projects)\n/* harmony export */ });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\n\nlet projects = {};\nlet activeProjectGlobal;\nconst addNewProjectInput = document.querySelector('#add-new-project');\nconst projectsMenuUl = document.querySelector('.projects-menu');\nconst contentHolder = document.querySelector('.content-holder');\n\nclass Project {\n    constructor(name) {\n        this.name = name;\n        this.tasks = [];\n    }\n}\n\nfunction addProject(name) {\n    const newProjectName = addNewProjectInput.value;\n    if (Object.keys(projects).length === 0) {\n        addNewProjToProjectObj(name);\n        return;\n    };\n    if (addNewProjectInput.value === '') return;\n    addNewProjToProjectObj();\n    function addNewProjToProjectObj(name = newProjectName) {\n        const newProject = new Project(name);\n        projects[newProject.name] = newProject;    \n        addNewProjectToMenu(newProject);\n    }\n}\n\nfunction addNewProjectToMenu(projectObj) {\n    addNewProjectInput.value = '';\n    projectsMenuUl.insertAdjacentHTML('beforeend', `<li id=\"${projectObj.name}\">${projectObj.name}</li>`);\n    (0,_util__WEBPACK_IMPORTED_MODULE_0__.attachEventListener)(document.querySelector(`#${projectObj.name}`), 'click', updateDomWithProject);\n}\n\nfunction updateDomWithProject(e) {\n    contentHolder.innerHTML = '';\n    const activeProject = projects[e.target.id];\n    activeProjectGlobal = activeProject;\n    console.log(activeProjectGlobal);\n    console.log(activeProject); //! CLG!\n    const projectDiv = document.createElement('div');\n    projectDiv.classList.add(`project`, `project-${activeProject.name}`);\n    const template = `\n            <h3>${activeProject.name}</h3>\n            <ul class=\"project-tasks\"></ul>    \n    `;\n    projectDiv.insertAdjacentHTML('afterbegin', template);\n    activeProject.tasks.forEach(taskObj => {\n        const taskTemplate = `\n        <li class=\"task ${taskObj.name}\">\n            <h4>${taskObj.name}</h4>\n            <p>${taskObj.description}</p>\n            <p>${taskObj.priority}</p>\n            <p>${taskObj.dueDate}</p>\n        </li>\n        `;\n        projectDiv.querySelector('.project-tasks').insertAdjacentHTML('beforeend', taskTemplate);\n    });\n    contentHolder.insertAdjacentElement('afterbegin', projectDiv);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWRkUHJvamVjdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE2Qzs7QUFFdEM7QUFDQTtBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOERBQThELGdCQUFnQixJQUFJLGdCQUFnQjtBQUNsRyxJQUFJLDBEQUFtQiw0QkFBNEIsZ0JBQWdCO0FBQ25FOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQSxtREFBbUQsbUJBQW1CO0FBQ3RFO0FBQ0Esa0JBQWtCLG1CQUFtQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGFBQWE7QUFDdkMsa0JBQWtCLGFBQWE7QUFDL0IsaUJBQWlCLG9CQUFvQjtBQUNyQyxpQkFBaUIsaUJBQWlCO0FBQ2xDLGlCQUFpQixnQkFBZ0I7QUFDakM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYWRkUHJvamVjdHMuanM/MjU3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdHRhY2hFdmVudExpc3RlbmVyIH0gZnJvbSBcIi4vdXRpbFwiO1xuXG5leHBvcnQgbGV0IHByb2plY3RzID0ge307XG5leHBvcnQgbGV0IGFjdGl2ZVByb2plY3RHbG9iYWw7XG5jb25zdCBhZGROZXdQcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLW5ldy1wcm9qZWN0Jyk7XG5jb25zdCBwcm9qZWN0c01lbnVVbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1tZW51Jyk7XG5jb25zdCBjb250ZW50SG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtaG9sZGVyJyk7XG5cbmNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3QobmFtZSkge1xuICAgIGNvbnN0IG5ld1Byb2plY3ROYW1lID0gYWRkTmV3UHJvamVjdElucHV0LnZhbHVlO1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9qZWN0cykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGFkZE5ld1Byb2pUb1Byb2plY3RPYmoobmFtZSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9O1xuICAgIGlmIChhZGROZXdQcm9qZWN0SW5wdXQudmFsdWUgPT09ICcnKSByZXR1cm47XG4gICAgYWRkTmV3UHJvalRvUHJvamVjdE9iaigpO1xuICAgIGZ1bmN0aW9uIGFkZE5ld1Byb2pUb1Byb2plY3RPYmoobmFtZSA9IG5ld1Byb2plY3ROYW1lKSB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChuYW1lKTtcbiAgICAgICAgcHJvamVjdHNbbmV3UHJvamVjdC5uYW1lXSA9IG5ld1Byb2plY3Q7ICAgIFxuICAgICAgICBhZGROZXdQcm9qZWN0VG9NZW51KG5ld1Byb2plY3QpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gYWRkTmV3UHJvamVjdFRvTWVudShwcm9qZWN0T2JqKSB7XG4gICAgYWRkTmV3UHJvamVjdElucHV0LnZhbHVlID0gJyc7XG4gICAgcHJvamVjdHNNZW51VWwuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgPGxpIGlkPVwiJHtwcm9qZWN0T2JqLm5hbWV9XCI+JHtwcm9qZWN0T2JqLm5hbWV9PC9saT5gKTtcbiAgICBhdHRhY2hFdmVudExpc3RlbmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3Byb2plY3RPYmoubmFtZX1gKSwgJ2NsaWNrJywgdXBkYXRlRG9tV2l0aFByb2plY3QpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVEb21XaXRoUHJvamVjdChlKSB7XG4gICAgY29udGVudEhvbGRlci5pbm5lckhUTUwgPSAnJztcbiAgICBjb25zdCBhY3RpdmVQcm9qZWN0ID0gcHJvamVjdHNbZS50YXJnZXQuaWRdO1xuICAgIGFjdGl2ZVByb2plY3RHbG9iYWwgPSBhY3RpdmVQcm9qZWN0O1xuICAgIGNvbnNvbGUubG9nKGFjdGl2ZVByb2plY3RHbG9iYWwpO1xuICAgIGNvbnNvbGUubG9nKGFjdGl2ZVByb2plY3QpOyAvLyEgQ0xHIVxuICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoYHByb2plY3RgLCBgcHJvamVjdC0ke2FjdGl2ZVByb2plY3QubmFtZX1gKTtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGBcbiAgICAgICAgICAgIDxoMz4ke2FjdGl2ZVByb2plY3QubmFtZX08L2gzPlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwicHJvamVjdC10YXNrc1wiPjwvdWw+ICAgIFxuICAgIGA7XG4gICAgcHJvamVjdERpdi5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCB0ZW1wbGF0ZSk7XG4gICAgYWN0aXZlUHJvamVjdC50YXNrcy5mb3JFYWNoKHRhc2tPYmogPT4ge1xuICAgICAgICBjb25zdCB0YXNrVGVtcGxhdGUgPSBgXG4gICAgICAgIDxsaSBjbGFzcz1cInRhc2sgJHt0YXNrT2JqLm5hbWV9XCI+XG4gICAgICAgICAgICA8aDQ+JHt0YXNrT2JqLm5hbWV9PC9oND5cbiAgICAgICAgICAgIDxwPiR7dGFza09iai5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8cD4ke3Rhc2tPYmoucHJpb3JpdHl9PC9wPlxuICAgICAgICAgICAgPHA+JHt0YXNrT2JqLmR1ZURhdGV9PC9wPlxuICAgICAgICA8L2xpPlxuICAgICAgICBgO1xuICAgICAgICBwcm9qZWN0RGl2LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRhc2tzJykuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB0YXNrVGVtcGxhdGUpO1xuICAgIH0pO1xuICAgIGNvbnRlbnRIb2xkZXIuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmJlZ2luJywgcHJvamVjdERpdik7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/addProjects.js\n");

/***/ }),

/***/ "./src/addTasks.js":
/*!*************************!*\
  !*** ./src/addTasks.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTask\": () => (/* binding */ addTask)\n/* harmony export */ });\n/* harmony import */ var _addProjects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addProjects.js */ \"./src/addProjects.js\");\n/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n// TODO A felhaszn. hozzáadja a taskot, ezután az megjelenik az oldalon és egy projekt részévé válik.\n// ! Kell egy task és egy projektgenerátor és valami, ami a taskokat hozzárendeli és berakja a taskok alá\n\n\n\n\n\n\nclass Task {\n    constructor(name, desc, prio, dueDate) {\n        this.name = name;\n        this.description = desc;\n        this.priority = prio;\n        this.dueDate = dueDate;\n    }\n}\n\nfunction addTask(event) {\n    event.preventDefault();\n    const formData = new FormData(event.currentTarget);\n    const newTask = new Task(formData.get('task-name'),formData.get('task-description'),formData.get('priority'), formData.get('due-date'));\n    console.log({projects: _addProjects_js__WEBPACK_IMPORTED_MODULE_0__.projects, activeProjectGlobal: _addProjects_js__WEBPACK_IMPORTED_MODULE_0__.activeProjectGlobal});\n    _addProjects_js__WEBPACK_IMPORTED_MODULE_0__.activeProjectGlobal.tasks.push(newTask);\n\n    updateDomWithNewTask(newTask);\n    (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.toggleHide)(_index_js__WEBPACK_IMPORTED_MODULE_2__.taskIntakePopup);\n}\n\nfunction updateDomWithNewTask(taskObj) {\n    const taskTemplate = `\n    <li class=\"task ${taskObj.name}\">\n        <h4>${taskObj.name}</h4>\n        <p>${taskObj.description}</p>\n        <p>${taskObj.priority}</p>\n        <p>${taskObj.dueDate}</p>\n    </li>\n    `;\n\n    document.querySelector('.project-tasks').insertAdjacentHTML('beforeend', taskTemplate);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWRkVGFza3MuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7O0FBRWlFO0FBQzFCO0FBQ007OztBQUc3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFFBQVEsNEVBQXFCLG1FQUFDO0FBQy9DLElBQUksMkVBQThCOztBQUVsQztBQUNBLElBQUksb0RBQVUsQ0FBQyxzREFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLGFBQWE7QUFDbkMsY0FBYyxhQUFhO0FBQzNCLGFBQWEsb0JBQW9CO0FBQ2pDLGFBQWEsaUJBQWlCO0FBQzlCLGFBQWEsZ0JBQWdCO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hZGRUYXNrcy5qcz83OTQ5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRPRE8gQSBmZWxoYXN6bi4gaG96esOhYWRqYSBhIHRhc2tvdCwgZXp1dMOhbiBheiBtZWdqZWxlbmlrIGF6IG9sZGFsb24gw6lzIGVneSBwcm9qZWt0IHLDqXN6w6l2w6kgdsOhbGlrLlxuLy8gISBLZWxsIGVneSB0YXNrIMOpcyBlZ3kgcHJvamVrdGdlbmVyw6F0b3Igw6lzIHZhbGFtaSwgYW1pIGEgdGFza29rYXQgaG96esOhcmVuZGVsaSDDqXMgYmVyYWtqYSBhIHRhc2tvayBhbMOhXG5cbmltcG9ydCB7IHByb2plY3RzLCBhY3RpdmVQcm9qZWN0R2xvYmFsIH0gZnJvbSBcIi4vYWRkUHJvamVjdHMuanNcIjtcbmltcG9ydCB7IHRvZ2dsZUhpZGUgfSBmcm9tIFwiLi91dGlsLmpzXCI7XG5pbXBvcnQgeyB0YXNrSW50YWtlUG9wdXAgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuXG5cbmNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2MsIHByaW8sIGR1ZURhdGUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2M7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRhc2soZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayhmb3JtRGF0YS5nZXQoJ3Rhc2stbmFtZScpLGZvcm1EYXRhLmdldCgndGFzay1kZXNjcmlwdGlvbicpLGZvcm1EYXRhLmdldCgncHJpb3JpdHknKSwgZm9ybURhdGEuZ2V0KCdkdWUtZGF0ZScpKTtcbiAgICBjb25zb2xlLmxvZyh7cHJvamVjdHMsIGFjdGl2ZVByb2plY3RHbG9iYWx9KTtcbiAgICBhY3RpdmVQcm9qZWN0R2xvYmFsLnRhc2tzLnB1c2gobmV3VGFzayk7XG5cbiAgICB1cGRhdGVEb21XaXRoTmV3VGFzayhuZXdUYXNrKTtcbiAgICB0b2dnbGVIaWRlKHRhc2tJbnRha2VQb3B1cCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZURvbVdpdGhOZXdUYXNrKHRhc2tPYmopIHtcbiAgICBjb25zdCB0YXNrVGVtcGxhdGUgPSBgXG4gICAgPGxpIGNsYXNzPVwidGFzayAke3Rhc2tPYmoubmFtZX1cIj5cbiAgICAgICAgPGg0PiR7dGFza09iai5uYW1lfTwvaDQ+XG4gICAgICAgIDxwPiR7dGFza09iai5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIDxwPiR7dGFza09iai5wcmlvcml0eX08L3A+XG4gICAgICAgIDxwPiR7dGFza09iai5kdWVEYXRlfTwvcD5cbiAgICA8L2xpPlxuICAgIGA7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC10YXNrcycpLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdGFza1RlbXBsYXRlKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/addTasks.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"taskIntakePopup\": () => (/* binding */ taskIntakePopup)\n/* harmony export */ });\n/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n/* harmony import */ var _addProjects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addProjects.js */ \"./src/addProjects.js\");\n/* harmony import */ var _addTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addTasks */ \"./src/addTasks.js\");\n\n\n\n\n\nconst buttonNewTask = document.querySelector('.button--new-task');\nconst taskIntakePopup = document.querySelector('.wrapper--task-intake');\nconst addNewProjectInputBtn = document.querySelector('#add-new-project-btn');\nconst taskConfirmBtn = taskIntakePopup.querySelector('#task-confirm-btn');\nconst taskIntakeForm = document.querySelector('#task-intake-form');\n\n\nfunction handleNewTaskBtn() {\n    _util_js__WEBPACK_IMPORTED_MODULE_0__.toggleHide(taskIntakePopup);\n}\n\nbuttonNewTask.addEventListener('click', handleNewTaskBtn);\ntaskIntakePopup.addEventListener('click', _util_js__WEBPACK_IMPORTED_MODULE_0__.toggleHideOnPopup);\naddNewProjectInputBtn.addEventListener('click', _addProjects_js__WEBPACK_IMPORTED_MODULE_1__.addProject);\ntaskIntakeForm.addEventListener('submit', _addTasks__WEBPACK_IMPORTED_MODULE_2__.addTask);\n\n_addProjects_js__WEBPACK_IMPORTED_MODULE_1__.addProject('Default');\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFrQztBQUNBO0FBQ1c7QUFDVDs7QUFFcEM7QUFDTztBQUNQO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxJQUFJLGdEQUFlO0FBQ25COztBQUVBO0FBQ0EsMENBQTBDLHVEQUFzQjtBQUNoRSxnREFBZ0QsdURBQW1CO0FBQ25FLDBDQUEwQyw4Q0FBYTs7QUFFdkQsdURBQW1CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuL3V0aWwuanMnO1xuaW1wb3J0ICogYXMgcHJvamVjdHMgZnJvbSAnLi9hZGRQcm9qZWN0cy5qcyc7XG5pbXBvcnQgKiBhcyB0YXNrcyBmcm9tICcuL2FkZFRhc2tzJztcblxuY29uc3QgYnV0dG9uTmV3VGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tLW5ldy10YXNrJyk7XG5leHBvcnQgY29uc3QgdGFza0ludGFrZVBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXItLXRhc2staW50YWtlJyk7XG5jb25zdCBhZGROZXdQcm9qZWN0SW5wdXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLW5ldy1wcm9qZWN0LWJ0bicpO1xuY29uc3QgdGFza0NvbmZpcm1CdG4gPSB0YXNrSW50YWtlUG9wdXAucXVlcnlTZWxlY3RvcignI3Rhc2stY29uZmlybS1idG4nKTtcbmNvbnN0IHRhc2tJbnRha2VGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2staW50YWtlLWZvcm0nKTtcblxuXG5mdW5jdGlvbiBoYW5kbGVOZXdUYXNrQnRuKCkge1xuICAgIHV0aWwudG9nZ2xlSGlkZSh0YXNrSW50YWtlUG9wdXApO1xufVxuXG5idXR0b25OZXdUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlTmV3VGFza0J0bik7XG50YXNrSW50YWtlUG9wdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB1dGlsLnRvZ2dsZUhpZGVPblBvcHVwKTtcbmFkZE5ld1Byb2plY3RJbnB1dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHByb2plY3RzLmFkZFByb2plY3QpO1xudGFza0ludGFrZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGFza3MuYWRkVGFzayk7XG5cbnByb2plY3RzLmFkZFByb2plY3QoJ0RlZmF1bHQnKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"attachEventListener\": () => (/* binding */ attachEventListener),\n/* harmony export */   \"toggleHide\": () => (/* binding */ toggleHide),\n/* harmony export */   \"toggleHideOnPopup\": () => (/* binding */ toggleHideOnPopup)\n/* harmony export */ });\nfunction toggleHide(el) {\n    el.classList.toggle('hidden');\n}\n\nfunction toggleHideOnPopup(e) {\n    if (this !== e.target) return;\n    e.target.classList.toggle('hidden')\n}\n\nfunction attachEventListener(elem, event, cbFunc) {\n    elem.addEventListener(event, cbFunc);\n\n    document.querySelector('header').addEventListener\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3V0aWwuanM/ZTBlYiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gdG9nZ2xlSGlkZShlbCkge1xuICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlSGlkZU9uUG9wdXAoZSkge1xuICAgIGlmICh0aGlzICE9PSBlLnRhcmdldCkgcmV0dXJuO1xuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRhY2hFdmVudExpc3RlbmVyKGVsZW0sIGV2ZW50LCBjYkZ1bmMpIHtcbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNiRnVuYyk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKS5hZGRFdmVudExpc3RlbmVyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/util.js\n");

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