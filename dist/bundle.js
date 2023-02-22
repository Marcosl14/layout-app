/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/common/functions/drag-star-with-target-id.ts":
/*!*********************************************************************!*\
  !*** ./src/components/common/functions/drag-star-with-target-id.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dragStartWithTargetId)
/* harmony export */ });
function dragStartWithTargetId(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
}


/***/ }),

/***/ "./src/components/common/functions/drag-start-with-target-node_name.ts":
/*!*****************************************************************************!*\
  !*** ./src/components/common/functions/drag-start-with-target-node_name.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dragStartWithTargetNodeName)
/* harmony export */ });
function dragStartWithTargetNodeName(e) {
    e.dataTransfer.setData('text/plain', e.target.nodeName);
}


/***/ }),

/***/ "./src/components/html-components/Button.ts":
/*!**************************************************!*\
  !*** ./src/components/html-components/Button.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_functions_drag_star_with_target_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/functions/drag-star-with-target-id */ "./src/components/common/functions/drag-star-with-target-id.ts");

var Button = /** @class */ (function () {
    function Button() {
        this._domElement = document.createElement('button');
        // TODO cambiar por clases css
        this._domElement.innerHTML = 'nuevo boton';
        this._domElement.style.margin = '5px';
        this._domElement.id = 'button' + Button.iterator++;
        this._domElement.draggable = true;
        this._domElement.addEventListener('dragstart', _common_functions_drag_star_with_target_id__WEBPACK_IMPORTED_MODULE_0__["default"]);
        this._domElement.addEventListener('click', this.openElementConfigs);
    }
    Object.defineProperty(Button.prototype, "domElement", {
        get: function () {
            return this._domElement;
        },
        enumerable: false,
        configurable: true
    });
    Button.prototype.openElementConfigs = function (e) {
        console.log(e.target.nodeName);
        console.log(e.target.id);
        e.target.parentNode.removeChild(e.target);
    };
    Button.iterator = 0;
    return Button;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ "./src/components/html-components/Container.ts":
/*!*****************************************************!*\
  !*** ./src/components/html-components/Container.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_functions_drag_star_with_target_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/functions/drag-star-with-target-id */ "./src/components/common/functions/drag-star-with-target-id.ts");

var Container = /** @class */ (function () {
    function Container() {
        this._domElement = document.createElement('div');
        this._domElement.classList.add('drag-leave');
        this._domElement.classList.add('app-component-container');
        this._domElement.id = 'container' + Container.iterator++;
        this.dragEnter = this.dragEnter.bind(this);
        this.dragOver = this.dragOver.bind(this);
        this.dragLeave = this.dragLeave.bind(this);
        this.drop = this.drop.bind(this);
        this._domElement.addEventListener('dragenter', this.dragEnter);
        this._domElement.addEventListener('dragover', this.dragOver);
        this._domElement.addEventListener('dragleave', this.dragLeave);
        this._domElement.addEventListener('drop', this.drop);
        this._domElement.draggable = true;
        this._domElement.addEventListener('dragstart', _common_functions_drag_star_with_target_id__WEBPACK_IMPORTED_MODULE_0__["default"]);
        this._domElement.addEventListener('click', this.openElementConfigs);
    }
    Object.defineProperty(Container.prototype, "domElement", {
        get: function () {
            return this._domElement;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.dragEnter = function (e) {
        e.preventDefault();
        this._domElement.classList.remove('drag-leave');
        this._domElement.classList.add('drag-enter');
    };
    Container.prototype.dragOver = function (e) {
        e.preventDefault();
        this._domElement.classList.remove('drag-leave');
        this._domElement.classList.add('drag-enter');
    };
    Container.prototype.dragLeave = function () {
        this._domElement.classList.remove('drag-enter');
        this._domElement.classList.add('drag-leave');
    };
    Container.prototype.drop = function () {
        this._domElement.classList.remove('drag-enter');
        this._domElement.classList.add('drag-leave');
    };
    Container.prototype.openElementConfigs = function (e) {
        console.log(e.target.nodeName);
        console.log(e.target.id);
        e.target.parentNode.removeChild(e.target);
    };
    Container.iterator = 0;
    return Container;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);


/***/ }),

/***/ "./src/components/html-components/Input.ts":
/*!*************************************************!*\
  !*** ./src/components/html-components/Input.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_functions_drag_star_with_target_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/functions/drag-star-with-target-id */ "./src/components/common/functions/drag-star-with-target-id.ts");

var Input = /** @class */ (function () {
    function Input() {
        this._domElement = document.createElement('input');
        // TODO cambiar por clases css
        this._domElement.type = 'text';
        this._domElement.style.margin = '5px';
        this._domElement.id = 'input' + Input.iterator++;
        this._domElement.draggable = true;
        this._domElement.addEventListener('dragstart', _common_functions_drag_star_with_target_id__WEBPACK_IMPORTED_MODULE_0__["default"]);
        this._domElement.addEventListener('click', this.openElementConfigs);
    }
    Object.defineProperty(Input.prototype, "domElement", {
        get: function () {
            return this._domElement;
        },
        enumerable: false,
        configurable: true
    });
    Input.prototype.openElementConfigs = function (e) {
        console.log(e.target.nodeName);
        console.log(e.target.id);
        e.target.parentNode.removeChild(e.target);
    };
    Input.iterator = 0;
    return Input;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);


/***/ }),

/***/ "./src/components/html-components/componentsIndex.ts":
/*!***********************************************************!*\
  !*** ./src/components/html-components/componentsIndex.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "./src/components/html-components/Button.ts");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Input */ "./src/components/html-components/Input.ts");
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Container */ "./src/components/html-components/Container.ts");



function componentsIndex(index) {
    var componentsIndex = {
        'BUTTON': function () { return new _Button__WEBPACK_IMPORTED_MODULE_0__["default"]().domElement; },
        'INPUT': function () { return new _Input__WEBPACK_IMPORTED_MODULE_1__["default"]().domElement; },
        'DIV': function () { return new _Container__WEBPACK_IMPORTED_MODULE_2__["default"]().domElement; },
        'default': function () { return undefined; },
    };
    return componentsIndex[index] || componentsIndex['default'];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (componentsIndex);


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_html_components_componentsIndex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/html-components/componentsIndex */ "./src/components/html-components/componentsIndex.ts");
/* harmony import */ var _components_common_functions_drag_start_with_target_node_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/common/functions/drag-start-with-target-node_name */ "./src/components/common/functions/drag-start-with-target-node_name.ts");


/* draggable element */
var domElements = document.querySelectorAll('.dom-element');
domElements.forEach(function (domElement) {
    domElement.addEventListener('dragstart', _components_common_functions_drag_start_with_target_node_name__WEBPACK_IMPORTED_MODULE_1__["default"]);
});
// prueba: agregar elementos mediante los objetos creados
// const componentsContainer = document.querySelector('.components-container')
// const newContainer = new Container().domElement;
// newContainer.addEventListener('drop', drop);
// newContainer.addEventListener('dragstart', dragStart);
// newContainer.draggable = true;
// componentsContainer.appendChild(newContainer);
// prueba
/* Target container */
var appContainer = document.querySelector('.app-container');
appContainer.addEventListener('dragenter', dragEnter);
appContainer.addEventListener('dragover', dragOver);
appContainer.addEventListener('dragleave', dragLeave);
appContainer.addEventListener('drop', drop);
function dragEnter(e) {
    e.preventDefault();
    this.classList.add('drag-enter');
    this.classList.remove('drag-leave');
}
function dragOver(e) {
    e.preventDefault();
    this.classList.add('drag-enter');
    this.classList.remove('drag-leave');
}
function dragLeave(e) {
    this.classList.add('drag-leave');
    this.classList.remove('drag-enter');
}
function drop(e) {
    this.classList.add('drag-leave');
    this.classList.remove('drag-enter');
    if (e.target.nodeName === 'INPUT') {
        return;
    }
    var tipoDeElemento = e.dataTransfer.getData('text/plain');
    var newDomElement = (0,_components_html_components_componentsIndex__WEBPACK_IMPORTED_MODULE_0__["default"])(tipoDeElemento)();
    var elementExists = newDomElement ? false : true;
    if (elementExists) {
        var draggable = document.getElementById(tipoDeElemento);
        e.target.appendChild(draggable);
        return;
    }
    e.target.appendChild(newDomElement);
}
// const cssStyleSheet = document.styleSheets;
// cssStyleSheet[1].insertRule(`.components-container {
//     border: dashed 1px black;
//     width: 400px;
//     padding: 10px;
//   }`);
// cssStyleSheet[1].insertRule(`.actions-container {
//     border: dashed 1px black;
//     width: 400px;
//   }`);
// cssStyleSheet[1].insertRule(`.dom-element {
//     box-sizing: border-box;
//   }`);
// cssStyleSheet[1].insertRule(`.dom-element:not(:last-child) {
//     margin-bottom: 5px;
//   }`);
// cssStyleSheet[1].insertRule(`.dom-element-input {
//   width: 100%;
// }`);
// cssStyleSheet[1].insertRule(`.dom-element-button {
//     width: 100%;
//   }`);
// cssStyleSheet[1].insertRule(`.drag-enter {
//     border: dashed 1px red
//   }`);
// let cssFileOutput = '';
// Object.keys(cssStyleSheet[1].rules).forEach(key => {
//     cssFileOutput += `${cssStyleSheet[1].rules[parseInt(key)].cssText}\n\n`
// });
// console.log(cssFileOutput);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPO0tBQ1Y7SUFFRCxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUN4QyxDQUFDO0FBRUQsOENBQThDO0FBRTlDLHVEQUF1RDtBQUN2RCxnQ0FBZ0M7QUFDaEMsb0JBQW9CO0FBQ3BCLHFCQUFxQjtBQUNyQixTQUFTO0FBRVQsb0RBQW9EO0FBQ3BELGdDQUFnQztBQUNoQyxvQkFBb0I7QUFDcEIsU0FBUztBQUVULDhDQUE4QztBQUM5Qyw4QkFBOEI7QUFDOUIsU0FBUztBQUVULCtEQUErRDtBQUMvRCwwQkFBMEI7QUFDMUIsU0FBUztBQUVULG9EQUFvRDtBQUNwRCxpQkFBaUI7QUFDakIsT0FBTztBQUVQLHFEQUFxRDtBQUNyRCxtQkFBbUI7QUFDbkIsU0FBUztBQUVULDZDQUE2QztBQUM3Qyw2QkFBNkI7QUFDN0IsU0FBUztBQUVULDBCQUEwQjtBQUUxQix1REFBdUQ7QUFDdkQsOEVBQThFO0FBQzlFLE1BQU07QUFFTiw4QkFBOEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2Z1bmN0aW9ucy9kcmFnLXN0YXItd2l0aC10YXJnZXQtaWQudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9mdW5jdGlvbnMvZHJhZy1zdGFydC13aXRoLXRhcmdldC1ub2RlX25hbWUudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2h0bWwtY29tcG9uZW50cy9CdXR0b24udHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2h0bWwtY29tcG9uZW50cy9Db250YWluZXIudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2h0bWwtY29tcG9uZW50cy9JbnB1dC50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvaHRtbC1jb21wb25lbnRzL2NvbXBvbmVudHNJbmRleC50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xheW91dC1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2xheW91dC1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkcmFnU3RhcnRXaXRoVGFyZ2V0SWQoZTogYW55KSB7XG4gICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9wbGFpbicsIGUudGFyZ2V0LmlkKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkcmFnU3RhcnRXaXRoVGFyZ2V0Tm9kZU5hbWUoZTogYW55KSB7XG4gICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9wbGFpbicsIGUudGFyZ2V0Lm5vZGVOYW1lKTtcbn0iLCJpbXBvcnQgZHJhZ1N0YXJ0V2l0aFRhcmdldElkIGZyb20gJy4uL2NvbW1vbi9mdW5jdGlvbnMvZHJhZy1zdGFyLXdpdGgtdGFyZ2V0LWlkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uIHtcbiAgICBwcml2YXRlIHN0YXRpYyBpdGVyYXRvciA9IDA7XG4gICAgcHJpdmF0ZSBfZG9tRWxlbWVudDogSFRNTEJ1dHRvbkVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAvLyBUT0RPIGNhbWJpYXIgcG9yIGNsYXNlcyBjc3NcbiAgICAgICAgdGhpcy5fZG9tRWxlbWVudC5pbm5lckhUTUwgPSAnbnVldm8gYm90b24nO1xuICAgICAgICB0aGlzLl9kb21FbGVtZW50LnN0eWxlLm1hcmdpbiA9ICc1cHgnO1xuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmlkID0gJ2J1dHRvbicgKyBCdXR0b24uaXRlcmF0b3IrKztcblxuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmRyYWdnYWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMuX2RvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZHJhZ1N0YXJ0V2l0aFRhcmdldElkKTtcbiAgICBcbiAgICAgICAgdGhpcy5fZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3BlbkVsZW1lbnRDb25maWdzKTtcbiAgICB9XG5cbiAgICBnZXQgZG9tRWxlbWVudCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fZG9tRWxlbWVudDtcbiAgICB9XG4gICAgXG4gICAgcHJpdmF0ZSBvcGVuRWxlbWVudENvbmZpZ3MoZTogYW55KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0Lm5vZGVOYW1lKTtcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQuaWQpO1xuICAgIFxuICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUudGFyZ2V0KTtcbiAgICB9XG59IiwiaW1wb3J0IGRyYWdTdGFydFdpdGhUYXJnZXRJZCBmcm9tICcuLi9jb21tb24vZnVuY3Rpb25zL2RyYWctc3Rhci13aXRoLXRhcmdldC1pZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRhaW5lciB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaXRlcmF0b3IgPSAwO1xuICAgIHByaXZhdGUgX2RvbUVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX2RvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWctbGVhdmUnKTtcbiAgICAgICAgdGhpcy5fZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhcHAtY29tcG9uZW50LWNvbnRhaW5lcicpO1xuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmlkID0gJ2NvbnRhaW5lcicgKyBDb250YWluZXIuaXRlcmF0b3IrKztcblxuICAgICAgICB0aGlzLmRyYWdFbnRlciA9IHRoaXMuZHJhZ0VudGVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhZ092ZXIgPSB0aGlzLmRyYWdPdmVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhZ0xlYXZlID0gdGhpcy5kcmFnTGVhdmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcm9wID0gdGhpcy5kcm9wLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5fZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCB0aGlzLmRyYWdFbnRlcik7XG4gICAgICAgIHRoaXMuX2RvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLmRyYWdPdmVyKTtcbiAgICAgICAgdGhpcy5fZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCB0aGlzLmRyYWdMZWF2ZSk7XG4gICAgICAgIHRoaXMuX2RvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuZHJvcCk7XG5cbiAgICAgICAgdGhpcy5fZG9tRWxlbWVudC5kcmFnZ2FibGUgPSB0cnVlO1xuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGRyYWdTdGFydFdpdGhUYXJnZXRJZCk7XG4gICAgXG4gICAgICAgIHRoaXMuX2RvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9wZW5FbGVtZW50Q29uZmlncyk7XG4gICAgfVxuXG4gICAgZ2V0IGRvbUVsZW1lbnQoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RvbUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkcmFnRW50ZXIoZTogYW55KSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5fZG9tRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnLWxlYXZlJyk7XG4gICAgICAgIHRoaXMuX2RvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZHJhZy1lbnRlcicpO1xuICAgIH1cbiAgICBcbiAgICBwcml2YXRlIGRyYWdPdmVyKGU6IGFueSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuX2RvbUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZy1sZWF2ZScpO1xuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWctZW50ZXInKTtcbiAgICB9XG4gICAgXG4gICAgcHJpdmF0ZSBkcmFnTGVhdmUoKSB7XG4gICAgICAgIHRoaXMuX2RvbUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZy1lbnRlcicpO1xuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWctbGVhdmUnKTtcbiAgICB9XG4gICAgXG4gICAgcHJpdmF0ZSBkcm9wKCkge1xuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWctZW50ZXInKTtcbiAgICAgICAgdGhpcy5fZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcmFnLWxlYXZlJyk7XG4gICAgfVxuICAgIFxuICAgIHByaXZhdGUgb3BlbkVsZW1lbnRDb25maWdzKGU6IGFueSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5ub2RlTmFtZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmlkKTtcbiAgICBcbiAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlLnRhcmdldCk7XG4gICAgfVxufSIsImltcG9ydCBkcmFnU3RhcnRXaXRoVGFyZ2V0SWQgZnJvbSAnLi4vY29tbW9uL2Z1bmN0aW9ucy9kcmFnLXN0YXItd2l0aC10YXJnZXQtaWQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dCB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaXRlcmF0b3IgPSAwO1xuICAgIHByaXZhdGUgX2RvbUVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIC8vIFRPRE8gY2FtYmlhciBwb3IgY2xhc2VzIGNzc1xuICAgICAgICB0aGlzLl9kb21FbGVtZW50LnR5cGUgPSAndGV4dCc7XG4gICAgICAgIHRoaXMuX2RvbUVsZW1lbnQuc3R5bGUubWFyZ2luID0gJzVweCc7XG4gICAgICAgIHRoaXMuX2RvbUVsZW1lbnQuaWQgPSAnaW5wdXQnICsgSW5wdXQuaXRlcmF0b3IrKztcblxuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmRyYWdnYWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMuX2RvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZHJhZ1N0YXJ0V2l0aFRhcmdldElkKTtcbiAgICBcbiAgICAgICAgdGhpcy5fZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3BlbkVsZW1lbnRDb25maWdzKTtcbiAgICB9XG5cbiAgICBnZXQgZG9tRWxlbWVudCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fZG9tRWxlbWVudDtcbiAgICB9XG4gICAgXG4gICAgcHJpdmF0ZSBvcGVuRWxlbWVudENvbmZpZ3MoZTogYW55KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0Lm5vZGVOYW1lKTtcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQuaWQpO1xuICAgIFxuICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUudGFyZ2V0KTtcbiAgICB9XG59IiwiaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcbmltcG9ydCBJbnB1dCBmcm9tICcuL0lucHV0JztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi9Db250YWluZXInO1xuXG5mdW5jdGlvbiBjb21wb25lbnRzSW5kZXgoaW5kZXgpIHtcbiAgICBjb25zdCBjb21wb25lbnRzSW5kZXggPSB7XG4gICAgICAgICdCVVRUT04nOiAoKSA9PiBuZXcgQnV0dG9uKCkuZG9tRWxlbWVudCxcbiAgICAgICAgJ0lOUFVUJzogKCkgPT4gbmV3IElucHV0KCkuZG9tRWxlbWVudCxcbiAgICAgICAgJ0RJVic6ICgpID0+IG5ldyBDb250YWluZXIoKS5kb21FbGVtZW50LFxuICAgICAgICAnZGVmYXVsdCc6ICgpID0+IHVuZGVmaW5lZCxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50c0luZGV4W2luZGV4XSB8fCBjb21wb25lbnRzSW5kZXhbJ2RlZmF1bHQnXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50c0luZGV4O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgY29tcG9uZW50c0luZGV4IGZyb20gJy4vY29tcG9uZW50cy9odG1sLWNvbXBvbmVudHMvY29tcG9uZW50c0luZGV4JztcbmltcG9ydCBkcmFnU3RhcnRXaXRoVGFyZ2V0Tm9kZU5hbWUgZnJvbSAnLi9jb21wb25lbnRzL2NvbW1vbi9mdW5jdGlvbnMvZHJhZy1zdGFydC13aXRoLXRhcmdldC1ub2RlX25hbWUnO1xuXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4vY29tcG9uZW50cy9odG1sLWNvbXBvbmVudHMvQ29udGFpbmVyJztcblxuXG4vKiBkcmFnZ2FibGUgZWxlbWVudCAqL1xuY29uc3QgZG9tRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZG9tLWVsZW1lbnQnKTtcblxuZG9tRWxlbWVudHMuZm9yRWFjaCgoZG9tRWxlbWVudCkgPT4ge1xuICAgIGRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZHJhZ1N0YXJ0V2l0aFRhcmdldE5vZGVOYW1lKTtcbn0pO1xuXG4vLyBwcnVlYmE6IGFncmVnYXIgZWxlbWVudG9zIG1lZGlhbnRlIGxvcyBvYmpldG9zIGNyZWFkb3Ncbi8vIGNvbnN0IGNvbXBvbmVudHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcG9uZW50cy1jb250YWluZXInKVxuLy8gY29uc3QgbmV3Q29udGFpbmVyID0gbmV3IENvbnRhaW5lcigpLmRvbUVsZW1lbnQ7XG4vLyBuZXdDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIGRyb3ApO1xuLy8gbmV3Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGRyYWdTdGFydCk7XG4vLyBuZXdDb250YWluZXIuZHJhZ2dhYmxlID0gdHJ1ZTtcbi8vIGNvbXBvbmVudHNDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3Q29udGFpbmVyKTtcbi8vIHBydWViYVxuXG4vKiBUYXJnZXQgY29udGFpbmVyICovXG5jb25zdCBhcHBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXBwLWNvbnRhaW5lcicpO1xuXG5hcHBDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgZHJhZ0VudGVyKTtcbmFwcENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGRyYWdPdmVyKTtcbmFwcENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCBkcmFnTGVhdmUpO1xuYXBwQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBkcm9wKTtcblxuZnVuY3Rpb24gZHJhZ0VudGVyKGU6IGFueSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2RyYWctZW50ZXInKTtcbiAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWctbGVhdmUnKTtcbn1cblxuZnVuY3Rpb24gZHJhZ092ZXIoZTogYW55KSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgdGhpcy5jbGFzc0xpc3QuYWRkKCdkcmFnLWVudGVyJyk7XG4gIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZy1sZWF2ZScpO1xufVxuXG5mdW5jdGlvbiBkcmFnTGVhdmUoZTogYW55KSB7XG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdkcmFnLWxlYXZlJyk7XG4gICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnLWVudGVyJyk7XG59XG5cbmZ1bmN0aW9uIGRyb3AoZTogYW55KSB7XG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdkcmFnLWxlYXZlJyk7XG4gICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnLWVudGVyJyk7XG5cbiAgICBpZiAoZS50YXJnZXQubm9kZU5hbWUgPT09ICdJTlBVVCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHRpcG9EZUVsZW1lbnRvID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgndGV4dC9wbGFpbicpO1xuXG4gICAgY29uc3QgbmV3RG9tRWxlbWVudCA9IGNvbXBvbmVudHNJbmRleCh0aXBvRGVFbGVtZW50bykoKTtcblxuICAgIGxldCBlbGVtZW50RXhpc3RzID0gbmV3RG9tRWxlbWVudCA/IGZhbHNlIDogdHJ1ZTtcblxuICAgIGlmIChlbGVtZW50RXhpc3RzKSB7XG4gICAgICAgIGNvbnN0IGRyYWdnYWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRpcG9EZUVsZW1lbnRvKTtcbiAgICAgICAgZS50YXJnZXQuYXBwZW5kQ2hpbGQoZHJhZ2dhYmxlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGUudGFyZ2V0LmFwcGVuZENoaWxkKG5ld0RvbUVsZW1lbnQpO1xufVxuXG4vLyBjb25zdCBjc3NTdHlsZVNoZWV0ID0gZG9jdW1lbnQuc3R5bGVTaGVldHM7XG5cbi8vIGNzc1N0eWxlU2hlZXRbMV0uaW5zZXJ0UnVsZShgLmNvbXBvbmVudHMtY29udGFpbmVyIHtcbi8vICAgICBib3JkZXI6IGRhc2hlZCAxcHggYmxhY2s7XG4vLyAgICAgd2lkdGg6IDQwMHB4O1xuLy8gICAgIHBhZGRpbmc6IDEwcHg7XG4vLyAgIH1gKTtcblxuLy8gY3NzU3R5bGVTaGVldFsxXS5pbnNlcnRSdWxlKGAuYWN0aW9ucy1jb250YWluZXIge1xuLy8gICAgIGJvcmRlcjogZGFzaGVkIDFweCBibGFjaztcbi8vICAgICB3aWR0aDogNDAwcHg7XG4vLyAgIH1gKTtcblxuLy8gY3NzU3R5bGVTaGVldFsxXS5pbnNlcnRSdWxlKGAuZG9tLWVsZW1lbnQge1xuLy8gICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4vLyAgIH1gKTtcblxuLy8gY3NzU3R5bGVTaGVldFsxXS5pbnNlcnRSdWxlKGAuZG9tLWVsZW1lbnQ6bm90KDpsYXN0LWNoaWxkKSB7XG4vLyAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuLy8gICB9YCk7XG5cbi8vIGNzc1N0eWxlU2hlZXRbMV0uaW5zZXJ0UnVsZShgLmRvbS1lbGVtZW50LWlucHV0IHtcbi8vICAgd2lkdGg6IDEwMCU7XG4vLyB9YCk7XG5cbi8vIGNzc1N0eWxlU2hlZXRbMV0uaW5zZXJ0UnVsZShgLmRvbS1lbGVtZW50LWJ1dHRvbiB7XG4vLyAgICAgd2lkdGg6IDEwMCU7XG4vLyAgIH1gKTtcblxuLy8gY3NzU3R5bGVTaGVldFsxXS5pbnNlcnRSdWxlKGAuZHJhZy1lbnRlciB7XG4vLyAgICAgYm9yZGVyOiBkYXNoZWQgMXB4IHJlZFxuLy8gICB9YCk7XG5cbi8vIGxldCBjc3NGaWxlT3V0cHV0ID0gJyc7XG5cbi8vIE9iamVjdC5rZXlzKGNzc1N0eWxlU2hlZXRbMV0ucnVsZXMpLmZvckVhY2goa2V5ID0+IHtcbi8vICAgICBjc3NGaWxlT3V0cHV0ICs9IGAke2Nzc1N0eWxlU2hlZXRbMV0ucnVsZXNbcGFyc2VJbnQoa2V5KV0uY3NzVGV4dH1cXG5cXG5gXG4vLyB9KTtcblxuLy8gY29uc29sZS5sb2coY3NzRmlsZU91dHB1dCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=