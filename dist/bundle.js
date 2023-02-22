/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/html-components/Button.ts":
/*!**************************************************!*\
  !*** ./src/components/html-components/Button.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Button = /** @class */ (function () {
    function Button() {
        this.domElement = document.createElement('button');
        // TODO cambiar por clases css
        this.domElement.innerHTML = 'nuevo boton';
        this.domElement.style.margin = '5px';
        this.domElement.id = 'button' + Button.iterator++;
        this.domElement.draggable = true;
        this.domElement.addEventListener('dragstart', this.dragStart);
        this.domElement.addEventListener('click', this.openElementConfigs);
    }
    Button.prototype.dragStart = function (e) {
        e.dataTransfer.setData('text/plain', e.target.id);
    };
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
var Container = /** @class */ (function () {
    function Container() {
        this.domElement = document.createElement('div');
        this.domElement.classList.add('drag-leave');
        this.domElement.classList.add('app-component-container');
        this.domElement.id = 'container' + Container.iterator++;
        this.dragEnter = this.dragEnter.bind(this);
        this.dragOver = this.dragOver.bind(this);
        this.dragLeave = this.dragLeave.bind(this);
        this.drop = this.drop.bind(this);
        this.domElement.addEventListener('dragenter', this.dragEnter);
        this.domElement.addEventListener('dragover', this.dragOver);
        this.domElement.addEventListener('dragleave', this.dragLeave);
        this.domElement.addEventListener('drop', this.drop);
        this.domElement.draggable = true;
        this.domElement.addEventListener('dragstart', this.dragStart);
        this.domElement.addEventListener('click', this.openElementConfigs);
    }
    Container.prototype.dragEnter = function (e) {
        e.preventDefault();
        this.domElement.classList.remove('drag-leave');
        this.domElement.classList.add('drag-enter');
    };
    Container.prototype.dragOver = function (e) {
        e.preventDefault();
        this.domElement.classList.remove('drag-leave');
        this.domElement.classList.add('drag-enter');
    };
    Container.prototype.dragLeave = function () {
        this.domElement.classList.remove('drag-enter');
        this.domElement.classList.add('drag-leave');
    };
    Container.prototype.drop = function () {
        this.domElement.classList.remove('drag-enter');
        this.domElement.classList.add('drag-leave');
    };
    Container.prototype.dragStart = function (e) {
        e.dataTransfer.setData('text/plain', e.target.id);
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
var Input = /** @class */ (function () {
    function Input() {
        this.domElement = document.createElement('input');
        // TODO cambiar por clases css
        this.domElement.type = 'text';
        this.domElement.style.margin = '5px';
        this.domElement.id = 'input' + Input.iterator++;
        this.domElement.draggable = true;
        this.domElement.addEventListener('dragstart', this.dragStart);
        this.domElement.addEventListener('click', this.openElementConfigs);
    }
    Input.prototype.dragStart = function (e) {
        e.dataTransfer.setData('text/plain', e.target.id);
    };
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

/* draggable element */
var domElements = document.querySelectorAll('.dom-element');
domElements.forEach(function (domElement) {
    domElement.addEventListener('dragstart', dragStart);
});
function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.nodeName);
}
// prueba agregar elementos mediante los objetos creados
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFJSTtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuRCw4QkFBOEI7UUFDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDO1FBQzFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDckMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEdBQUcsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVsRCxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRTlELElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFTywwQkFBUyxHQUFqQixVQUFrQixDQUFNO1FBQ3BCLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFTyxtQ0FBa0IsR0FBMUIsVUFBMkIsQ0FBTTtRQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRXpCLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQXpCYyxlQUFRLEdBQUcsQ0FBQyxDQUFDO0lBMEJoQyxhQUFDO0NBQUE7aUVBM0JvQixNQUFNOzs7Ozs7Ozs7Ozs7Ozs7QUNBM0I7SUFJSTtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVoRCxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEdBQUcsV0FBVyxHQUFHLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUV4RCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWpDLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVwRCxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRTlELElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFTyw2QkFBUyxHQUFqQixVQUFrQixDQUFNO1FBQ3BCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFTyw0QkFBUSxHQUFoQixVQUFpQixDQUFNO1FBQ25CLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFTyw2QkFBUyxHQUFqQjtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVPLHdCQUFJLEdBQVo7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFTyw2QkFBUyxHQUFqQixVQUFrQixDQUFNO1FBQ3BCLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFTyxzQ0FBa0IsR0FBMUIsVUFBMkIsQ0FBTTtRQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRXpCLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQXpEYyxrQkFBUSxHQUFHLENBQUMsQ0FBQztJQTBEaEMsZ0JBQUM7Q0FBQTtpRUEzRG9CLFNBQVM7Ozs7Ozs7Ozs7Ozs7OztBQ0E5QjtJQUlJO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xELDhCQUE4QjtRQUM5QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7UUFDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNyQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsR0FBRyxPQUFPLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRWhELElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFOUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVPLHlCQUFTLEdBQWpCLFVBQWtCLENBQU07UUFDcEIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVPLGtDQUFrQixHQUExQixVQUEyQixDQUFNO1FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFekIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBekJjLGNBQVEsR0FBRyxDQUFDLENBQUM7SUEwQmhDLFlBQUM7Q0FBQTtpRUEzQm9CLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FJO0FBQ0Y7QUFDUTtBQUVwQyxTQUFTLGVBQWUsQ0FBQyxLQUFLO0lBQzFCLElBQU0sZUFBZSxHQUFHO1FBQ3BCLFFBQVEsRUFBRSxjQUFNLFdBQUksK0NBQU0sRUFBRSxDQUFDLFVBQVUsRUFBdkIsQ0FBdUI7UUFDdkMsT0FBTyxFQUFFLGNBQU0sV0FBSSw4Q0FBSyxFQUFFLENBQUMsVUFBVSxFQUF0QixDQUFzQjtRQUNyQyxLQUFLLEVBQUUsY0FBTSxXQUFJLGtEQUFTLEVBQUUsQ0FBQyxVQUFVLEVBQTFCLENBQTBCO1FBQ3ZDLFNBQVMsRUFBRSxjQUFNLGdCQUFTLEVBQVQsQ0FBUztLQUM3QjtJQUVELE9BQU8sZUFBZSxDQUFDLEtBQUssQ0FBQyxJQUFJLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNoRSxDQUFDO0FBRUQsaUVBQWUsZUFBZSxFQUFDOzs7Ozs7O1VDZi9CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOMkU7QUFJM0UsdUJBQXVCO0FBQ3ZCLElBQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUU5RCxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQUMsVUFBVTtJQUMzQixVQUFVLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ3hELENBQUMsQ0FBQyxDQUFDO0FBRUgsU0FBUyxTQUFTLENBQUMsQ0FBTTtJQUNyQixDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUM1RCxDQUFDO0FBRUQsd0RBQXdEO0FBQ3hELDhFQUE4RTtBQUM5RSxtREFBbUQ7QUFDbkQsK0NBQStDO0FBQy9DLHlEQUF5RDtBQUN6RCxpQ0FBaUM7QUFDakMsaURBQWlEO0FBQ2pELFNBQVM7QUFFVCxzQkFBc0I7QUFDdEIsSUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBRTlELFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDdEQsWUFBWSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUNwRCxZQUFZLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ3RELFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFFNUMsU0FBUyxTQUFTLENBQUMsQ0FBTTtJQUNyQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDeEMsQ0FBQztBQUVELFNBQVMsUUFBUSxDQUFDLENBQU07SUFDdEIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3RDLENBQUM7QUFFRCxTQUFTLFNBQVMsQ0FBQyxDQUFNO0lBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3hDLENBQUM7QUFFRCxTQUFTLElBQUksQ0FBQyxDQUFNO0lBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBRXBDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEtBQUssT0FBTyxFQUFFO1FBQy9CLE9BQU87S0FDVjtJQUVELElBQU0sY0FBYyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBRTVELElBQU0sYUFBYSxHQUFHLHVGQUFlLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQztJQUV4RCxJQUFJLGFBQWEsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBRWpELElBQUksYUFBYSxFQUFFO1FBQ2YsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMxRCxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNoQyxPQUFPO0tBQ1Y7SUFFRCxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUN4QyxDQUFDO0FBRUQsOENBQThDO0FBRTlDLHVEQUF1RDtBQUN2RCxnQ0FBZ0M7QUFDaEMsb0JBQW9CO0FBQ3BCLHFCQUFxQjtBQUNyQixTQUFTO0FBRVQsb0RBQW9EO0FBQ3BELGdDQUFnQztBQUNoQyxvQkFBb0I7QUFDcEIsU0FBUztBQUVULDhDQUE4QztBQUM5Qyw4QkFBOEI7QUFDOUIsU0FBUztBQUVULCtEQUErRDtBQUMvRCwwQkFBMEI7QUFDMUIsU0FBUztBQUVULG9EQUFvRDtBQUNwRCxpQkFBaUI7QUFDakIsT0FBTztBQUVQLHFEQUFxRDtBQUNyRCxtQkFBbUI7QUFDbkIsU0FBUztBQUVULDZDQUE2QztBQUM3Qyw2QkFBNkI7QUFDN0IsU0FBUztBQUVULDBCQUEwQjtBQUUxQix1REFBdUQ7QUFDdkQsOEVBQThFO0FBQzlFLE1BQU07QUFFTiw4QkFBOEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvaHRtbC1jb21wb25lbnRzL0J1dHRvbi50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvaHRtbC1jb21wb25lbnRzL0NvbnRhaW5lci50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvaHRtbC1jb21wb25lbnRzL0lucHV0LnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9odG1sLWNvbXBvbmVudHMvY29tcG9uZW50c0luZGV4LnRzIiwid2VicGFjazovL2xheW91dC1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xheW91dC1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaXRlcmF0b3IgPSAwO1xuICAgIHB1YmxpYyBkb21FbGVtZW50OiBIVE1MQnV0dG9uRWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgLy8gVE9ETyBjYW1iaWFyIHBvciBjbGFzZXMgY3NzXG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5pbm5lckhUTUwgPSAnbnVldm8gYm90b24nO1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnQuc3R5bGUubWFyZ2luID0gJzVweCc7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5pZCA9ICdidXR0b24nICsgQnV0dG9uLml0ZXJhdG9yKys7XG5cbiAgICAgICAgdGhpcy5kb21FbGVtZW50LmRyYWdnYWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLmRyYWdTdGFydCk7XG4gICAgXG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3BlbkVsZW1lbnRDb25maWdzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRyYWdTdGFydChlOiBhbnkpIHtcbiAgICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9wbGFpbicsIGUudGFyZ2V0LmlkKTtcbiAgICB9XG4gICAgXG4gICAgcHJpdmF0ZSBvcGVuRWxlbWVudENvbmZpZ3MoZTogYW55KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0Lm5vZGVOYW1lKTtcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQuaWQpO1xuICAgIFxuICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUudGFyZ2V0KTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGFpbmVyIHtcbiAgICBwcml2YXRlIHN0YXRpYyBpdGVyYXRvciA9IDA7XG4gICAgcHVibGljIGRvbUVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcmFnLWxlYXZlJyk7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhcHAtY29tcG9uZW50LWNvbnRhaW5lcicpO1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnQuaWQgPSAnY29udGFpbmVyJyArIENvbnRhaW5lci5pdGVyYXRvcisrO1xuXG4gICAgICAgIHRoaXMuZHJhZ0VudGVyID0gdGhpcy5kcmFnRW50ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcmFnT3ZlciA9IHRoaXMuZHJhZ092ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcmFnTGVhdmUgPSB0aGlzLmRyYWdMZWF2ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRyb3AgPSB0aGlzLmRyb3AuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgdGhpcy5kcmFnRW50ZXIpO1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLmRyYWdPdmVyKTtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIHRoaXMuZHJhZ0xlYXZlKTtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLmRyb3ApO1xuXG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5kcmFnZ2FibGUgPSB0cnVlO1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5kcmFnU3RhcnQpO1xuICAgIFxuICAgICAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9wZW5FbGVtZW50Q29uZmlncyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkcmFnRW50ZXIoZTogYW55KSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWctbGVhdmUnKTtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWctZW50ZXInKTtcbiAgICB9XG4gICAgXG4gICAgcHJpdmF0ZSBkcmFnT3ZlcihlOiBhbnkpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZy1sZWF2ZScpO1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZHJhZy1lbnRlcicpO1xuICAgIH1cbiAgICBcbiAgICBwcml2YXRlIGRyYWdMZWF2ZSgpIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWctZW50ZXInKTtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWctbGVhdmUnKTtcbiAgICB9XG4gICAgXG4gICAgcHJpdmF0ZSBkcm9wKCkge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZy1lbnRlcicpO1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZHJhZy1sZWF2ZScpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZHJhZ1N0YXJ0KGU6IGFueSkge1xuICAgICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0L3BsYWluJywgZS50YXJnZXQuaWQpO1xuICAgIH1cbiAgICBcbiAgICBwcml2YXRlIG9wZW5FbGVtZW50Q29uZmlncyhlOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQubm9kZU5hbWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5pZCk7XG4gICAgXG4gICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZS50YXJnZXQpO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dCB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaXRlcmF0b3IgPSAwO1xuICAgIHB1YmxpYyBkb21FbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIC8vIFRPRE8gY2FtYmlhciBwb3IgY2xhc2VzIGNzc1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnQudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgdGhpcy5kb21FbGVtZW50LnN0eWxlLm1hcmdpbiA9ICc1cHgnO1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnQuaWQgPSAnaW5wdXQnICsgSW5wdXQuaXRlcmF0b3IrKztcblxuICAgICAgICB0aGlzLmRvbUVsZW1lbnQuZHJhZ2dhYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuZHJhZ1N0YXJ0KTtcbiAgICBcbiAgICAgICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcGVuRWxlbWVudENvbmZpZ3MpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZHJhZ1N0YXJ0KGU6IGFueSkge1xuICAgICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0L3BsYWluJywgZS50YXJnZXQuaWQpO1xuICAgIH1cbiAgICBcbiAgICBwcml2YXRlIG9wZW5FbGVtZW50Q29uZmlncyhlOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQubm9kZU5hbWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5pZCk7XG4gICAgXG4gICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZS50YXJnZXQpO1xuICAgIH1cbn0iLCJpbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xuaW1wb3J0IElucHV0IGZyb20gJy4vSW5wdXQnO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuL0NvbnRhaW5lcic7XG5cbmZ1bmN0aW9uIGNvbXBvbmVudHNJbmRleChpbmRleCkge1xuICAgIGNvbnN0IGNvbXBvbmVudHNJbmRleCA9IHtcbiAgICAgICAgJ0JVVFRPTic6ICgpID0+IG5ldyBCdXR0b24oKS5kb21FbGVtZW50LFxuICAgICAgICAnSU5QVVQnOiAoKSA9PiBuZXcgSW5wdXQoKS5kb21FbGVtZW50LFxuICAgICAgICAnRElWJzogKCkgPT4gbmV3IENvbnRhaW5lcigpLmRvbUVsZW1lbnQsXG4gICAgICAgICdkZWZhdWx0JzogKCkgPT4gdW5kZWZpbmVkLFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRzSW5kZXhbaW5kZXhdIHx8IGNvbXBvbmVudHNJbmRleFsnZGVmYXVsdCddO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnRzSW5kZXg7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjb21wb25lbnRzSW5kZXggZnJvbSAnLi9jb21wb25lbnRzL2h0bWwtY29tcG9uZW50cy9jb21wb25lbnRzSW5kZXgnO1xuXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4vY29tcG9uZW50cy9odG1sLWNvbXBvbmVudHMvQ29udGFpbmVyJztcblxuLyogZHJhZ2dhYmxlIGVsZW1lbnQgKi9cbmNvbnN0IGRvbUVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRvbS1lbGVtZW50Jyk7XG5cbmRvbUVsZW1lbnRzLmZvckVhY2goKGRvbUVsZW1lbnQpID0+IHtcbiAgICBkb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGRyYWdTdGFydCk7XG59KTtcblxuZnVuY3Rpb24gZHJhZ1N0YXJ0KGU6IGFueSkge1xuICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQvcGxhaW4nLCBlLnRhcmdldC5ub2RlTmFtZSk7XG59XG5cbi8vIHBydWViYSBhZ3JlZ2FyIGVsZW1lbnRvcyBtZWRpYW50ZSBsb3Mgb2JqZXRvcyBjcmVhZG9zXG4vLyBjb25zdCBjb21wb25lbnRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXBvbmVudHMtY29udGFpbmVyJylcbi8vIGNvbnN0IG5ld0NvbnRhaW5lciA9IG5ldyBDb250YWluZXIoKS5kb21FbGVtZW50O1xuLy8gbmV3Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBkcm9wKTtcbi8vIG5ld0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBkcmFnU3RhcnQpO1xuLy8gbmV3Q29udGFpbmVyLmRyYWdnYWJsZSA9IHRydWU7XG4vLyBjb21wb25lbnRzQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0NvbnRhaW5lcik7XG4vLyBwcnVlYmFcblxuLyogVGFyZ2V0IGNvbnRhaW5lciAqL1xuY29uc3QgYXBwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFwcC1jb250YWluZXInKTtcblxuYXBwQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIGRyYWdFbnRlcik7XG5hcHBDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBkcmFnT3Zlcik7XG5hcHBDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgZHJhZ0xlYXZlKTtcbmFwcENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgZHJvcCk7XG5cbmZ1bmN0aW9uIGRyYWdFbnRlcihlOiBhbnkpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdkcmFnLWVudGVyJyk7XG4gICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnLWxlYXZlJyk7XG59XG5cbmZ1bmN0aW9uIGRyYWdPdmVyKGU6IGFueSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIHRoaXMuY2xhc3NMaXN0LmFkZCgnZHJhZy1lbnRlcicpO1xuICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWctbGVhdmUnKTtcbn1cblxuZnVuY3Rpb24gZHJhZ0xlYXZlKGU6IGFueSkge1xuICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnZHJhZy1sZWF2ZScpO1xuICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZy1lbnRlcicpO1xufVxuXG5mdW5jdGlvbiBkcm9wKGU6IGFueSkge1xuICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnZHJhZy1sZWF2ZScpO1xuICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZy1lbnRlcicpO1xuXG4gICAgaWYgKGUudGFyZ2V0Lm5vZGVOYW1lID09PSAnSU5QVVQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB0aXBvRGVFbGVtZW50byA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQvcGxhaW4nKTtcblxuICAgIGNvbnN0IG5ld0RvbUVsZW1lbnQgPSBjb21wb25lbnRzSW5kZXgodGlwb0RlRWxlbWVudG8pKCk7XG5cbiAgICBsZXQgZWxlbWVudEV4aXN0cyA9IG5ld0RvbUVsZW1lbnQgPyBmYWxzZSA6IHRydWU7XG5cbiAgICBpZiAoZWxlbWVudEV4aXN0cykge1xuICAgICAgICBjb25zdCBkcmFnZ2FibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aXBvRGVFbGVtZW50byk7XG4gICAgICAgIGUudGFyZ2V0LmFwcGVuZENoaWxkKGRyYWdnYWJsZSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlLnRhcmdldC5hcHBlbmRDaGlsZChuZXdEb21FbGVtZW50KTtcbn1cblxuLy8gY29uc3QgY3NzU3R5bGVTaGVldCA9IGRvY3VtZW50LnN0eWxlU2hlZXRzO1xuXG4vLyBjc3NTdHlsZVNoZWV0WzFdLmluc2VydFJ1bGUoYC5jb21wb25lbnRzLWNvbnRhaW5lciB7XG4vLyAgICAgYm9yZGVyOiBkYXNoZWQgMXB4IGJsYWNrO1xuLy8gICAgIHdpZHRoOiA0MDBweDtcbi8vICAgICBwYWRkaW5nOiAxMHB4O1xuLy8gICB9YCk7XG5cbi8vIGNzc1N0eWxlU2hlZXRbMV0uaW5zZXJ0UnVsZShgLmFjdGlvbnMtY29udGFpbmVyIHtcbi8vICAgICBib3JkZXI6IGRhc2hlZCAxcHggYmxhY2s7XG4vLyAgICAgd2lkdGg6IDQwMHB4O1xuLy8gICB9YCk7XG5cbi8vIGNzc1N0eWxlU2hlZXRbMV0uaW5zZXJ0UnVsZShgLmRvbS1lbGVtZW50IHtcbi8vICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuLy8gICB9YCk7XG5cbi8vIGNzc1N0eWxlU2hlZXRbMV0uaW5zZXJ0UnVsZShgLmRvbS1lbGVtZW50Om5vdCg6bGFzdC1jaGlsZCkge1xuLy8gICAgIG1hcmdpbi1ib3R0b206IDVweDtcbi8vICAgfWApO1xuXG4vLyBjc3NTdHlsZVNoZWV0WzFdLmluc2VydFJ1bGUoYC5kb20tZWxlbWVudC1pbnB1dCB7XG4vLyAgIHdpZHRoOiAxMDAlO1xuLy8gfWApO1xuXG4vLyBjc3NTdHlsZVNoZWV0WzFdLmluc2VydFJ1bGUoYC5kb20tZWxlbWVudC1idXR0b24ge1xuLy8gICAgIHdpZHRoOiAxMDAlO1xuLy8gICB9YCk7XG5cbi8vIGNzc1N0eWxlU2hlZXRbMV0uaW5zZXJ0UnVsZShgLmRyYWctZW50ZXIge1xuLy8gICAgIGJvcmRlcjogZGFzaGVkIDFweCByZWRcbi8vICAgfWApO1xuXG4vLyBsZXQgY3NzRmlsZU91dHB1dCA9ICcnO1xuXG4vLyBPYmplY3Qua2V5cyhjc3NTdHlsZVNoZWV0WzFdLnJ1bGVzKS5mb3JFYWNoKGtleSA9PiB7XG4vLyAgICAgY3NzRmlsZU91dHB1dCArPSBgJHtjc3NTdHlsZVNoZWV0WzFdLnJ1bGVzW3BhcnNlSW50KGtleSldLmNzc1RleHR9XFxuXFxuYFxuLy8gfSk7XG5cbi8vIGNvbnNvbGUubG9nKGNzc0ZpbGVPdXRwdXQpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9