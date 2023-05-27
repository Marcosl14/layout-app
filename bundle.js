/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/app-container/componentsIndex.ts":
/*!*********************************************************!*\
  !*** ./src/components/app-container/componentsIndex.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_enums_title_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/enums/title.types.enum */ "./src/components/common/enums/title.types.enum.ts");
/* harmony import */ var _html_components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../html-components/Button */ "./src/components/html-components/Button.ts");
/* harmony import */ var _html_components_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../html-components/Input */ "./src/components/html-components/Input.ts");
/* harmony import */ var _html_components_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../html-components/Container */ "./src/components/html-components/Container.ts");
/* harmony import */ var _html_components_Label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../html-components/Label */ "./src/components/html-components/Label.ts");
/* harmony import */ var _html_components_Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../html-components/Title */ "./src/components/html-components/Title.ts");
/* harmony import */ var _html_components_Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../html-components/Image */ "./src/components/html-components/Image.ts");
/* harmony import */ var _html_components_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../html-components/Form */ "./src/components/html-components/Form.ts");
/* harmony import */ var _html_components_OrderedList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../html-components/OrderedList */ "./src/components/html-components/OrderedList.ts");
/* harmony import */ var _html_components_UnorderedList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../html-components/UnorderedList */ "./src/components/html-components/UnorderedList.ts");
/* harmony import */ var _html_components_Table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../html-components/Table */ "./src/components/html-components/Table.ts");
/* harmony import */ var _html_components_Anchor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../html-components/Anchor */ "./src/components/html-components/Anchor.ts");
/* harmony import */ var _html_components_TextArea__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../html-components/TextArea */ "./src/components/html-components/TextArea.ts");
/* harmony import */ var _html_components_ListItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../html-components/ListItem */ "./src/components/html-components/ListItem.ts");














function componentsIndex(index) {
    var componentsIndex = {
        'DIV': {
            create: function () { return new _html_components_Container__WEBPACK_IMPORTED_MODULE_3__["default"](); },
            isContainer: true,
        },
        'FORM': {
            create: function () { return new _html_components_Form__WEBPACK_IMPORTED_MODULE_7__["default"](); },
            isContainer: true,
        },
        'BUTTON': {
            create: function () { return new _html_components_Button__WEBPACK_IMPORTED_MODULE_1__["default"](); },
            isContainer: true,
        },
        'INPUT': {
            create: function () { return new _html_components_Input__WEBPACK_IMPORTED_MODULE_2__["default"](); },
            isContainer: false,
        },
        'LABEL': {
            create: function () { return new _html_components_Label__WEBPACK_IMPORTED_MODULE_4__["default"](); },
            isContainer: false,
        },
        'H1': {
            create: function () { return new _html_components_Title__WEBPACK_IMPORTED_MODULE_5__["default"](_common_enums_title_types_enum__WEBPACK_IMPORTED_MODULE_0__.TitleTypesEnum.H1); },
            isContainer: false,
        },
        'H2': {
            create: function () { return new _html_components_Title__WEBPACK_IMPORTED_MODULE_5__["default"](_common_enums_title_types_enum__WEBPACK_IMPORTED_MODULE_0__.TitleTypesEnum.H2); },
            isContainer: false,
        },
        'H3': {
            create: function () { return new _html_components_Title__WEBPACK_IMPORTED_MODULE_5__["default"](_common_enums_title_types_enum__WEBPACK_IMPORTED_MODULE_0__.TitleTypesEnum.H3); },
            isContainer: false,
        },
        'H4': {
            create: function () { return new _html_components_Title__WEBPACK_IMPORTED_MODULE_5__["default"](_common_enums_title_types_enum__WEBPACK_IMPORTED_MODULE_0__.TitleTypesEnum.H4); },
            isContainer: false,
        },
        'H5': {
            create: function () { return new _html_components_Title__WEBPACK_IMPORTED_MODULE_5__["default"](_common_enums_title_types_enum__WEBPACK_IMPORTED_MODULE_0__.TitleTypesEnum.H5); },
            isContainer: false,
        },
        'H6': {
            create: function () { return new _html_components_Title__WEBPACK_IMPORTED_MODULE_5__["default"](_common_enums_title_types_enum__WEBPACK_IMPORTED_MODULE_0__.TitleTypesEnum.H6); },
            isContainer: false,
        },
        'IMG': {
            create: function () { return new _html_components_Image__WEBPACK_IMPORTED_MODULE_6__["default"](); },
            isContainer: false,
        },
        'OL': {
            create: function () { return new _html_components_OrderedList__WEBPACK_IMPORTED_MODULE_8__["default"](); },
            isContainer: true,
        },
        'UL': {
            create: function () { return new _html_components_UnorderedList__WEBPACK_IMPORTED_MODULE_9__["default"](); },
            isContainer: true,
        },
        'LI': {
            create: function () { return new _html_components_ListItem__WEBPACK_IMPORTED_MODULE_13__["default"](); },
            isContainer: true,
        },
        'A': {
            create: function () { return new _html_components_Anchor__WEBPACK_IMPORTED_MODULE_11__["default"](); },
            isContainer: true,
        },
        'TEXTAREA': {
            create: function () { return new _html_components_TextArea__WEBPACK_IMPORTED_MODULE_12__["default"](); },
            isContainer: true,
        },
        'TABLE': {
            create: function () { return new _html_components_Table__WEBPACK_IMPORTED_MODULE_10__["default"](); },
            isContainer: true,
        },
        'default': {
            create: function () { return undefined; },
            isContainer: false,
        },
    };
    return componentsIndex[index] || componentsIndex['default'];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (componentsIndex);


/***/ }),

/***/ "./src/components/app-container/init-app-container.ts":
/*!************************************************************!*\
  !*** ./src/components/app-container/init-app-container.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_components_display_as_parent_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/components/display-as-parent.component */ "./src/components/common/components/display-as-parent.component.ts");
/* harmony import */ var _common_components_margin_or_padding_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/components/margin-or-padding.component */ "./src/components/common/components/margin-or-padding.component.ts");
/* harmony import */ var _common_models_StylesComponentsBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/models/StylesComponentsBuilder */ "./src/components/common/models/StylesComponentsBuilder.ts");
/* harmony import */ var _common_components_background_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/components/background.component */ "./src/components/common/components/background.component.ts");
/* harmony import */ var _componentsIndex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./componentsIndex */ "./src/components/app-container/componentsIndex.ts");
/* harmony import */ var _common_constants_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/constants/constants */ "./src/components/common/constants/constants.ts");
/* harmony import */ var _common_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/enums/style-name.enum */ "./src/components/common/enums/style-name.enum.ts");
/* harmony import */ var _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../css-stylesheet/css-stylesheet */ "./src/components/css-stylesheet/css-stylesheet.ts");
/* harmony import */ var _common_publishers_ComponentChangePublisher__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/publishers/ComponentChangePublisher */ "./src/components/common/publishers/ComponentChangePublisher.ts");









var InitAppContainer = /** @class */ (function () {
    function InitAppContainer() {
        this.appContainerClassName = 'body';
        this.componentSelector = document.querySelector('#select-item');
        this.versionLabel = document.querySelector('#version-label');
        this.printHtmlButton = document.querySelector('#print-html-file');
        this.appContainer = document.querySelector('#app-container');
        this.appContainerHeightInput = document.querySelector('#update-height');
        this.changeAppContainerHeight = this.changeAppContainerHeight.bind(this);
        this.appContainerHeightInput.value = "".concat(parseInt(this.getCurrentHeight()));
        this.appContainerHeightInput.addEventListener('input', this.changeAppContainerHeight);
        this.appContainerWidthInput = document.querySelector('#update-width');
        this.changeAppContainerWidth = this.changeAppContainerWidth.bind(this);
        this.appContainerWidthInput.value = "".concat(parseInt(this.getCurrentWidth()));
        this.appContainerWidthInput.addEventListener('input', this.changeAppContainerWidth);
        this.dragEnter = this.dragEnter.bind(this);
        this.dragOver = this.dragOver.bind(this);
        this.dragLeave = this.dragLeave.bind(this);
        this.drop = this.drop.bind(this);
        this.openElementConfigs = this.openElementConfigs.bind(this);
        this.changeSize = this.changeSize.bind(this);
        this.appContainer.addEventListener('dragenter', this.dragEnter);
        this.appContainer.addEventListener('dragover', this.dragOver);
        this.appContainer.addEventListener('dragleave', this.dragLeave);
        this.appContainer.addEventListener('drop', this.drop);
        this.appContainer.addEventListener('click', this.openElementConfigs);
        this.onResize(this.appContainer, this.changeSize);
        this.sendComponentName = this.sendComponentName.bind(this);
        this.componentChangePublisher = new _common_publishers_ComponentChangePublisher__WEBPACK_IMPORTED_MODULE_8__["default"]();
        this.componentSelector.addEventListener('change', this.sendComponentName);
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        var packageVersion = (__webpack_require__(/*! ../../../package.json */ "./package.json").version);
        this.versionLabel.innerText = "Version: ".concat(packageVersion);
        this.printHtmlButton.addEventListener('click', this.printHtmlFile);
    }
    InitAppContainer.prototype.dragEnter = function (event) {
        event.preventDefault();
        this.backgroundColor = _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_7__["default"].getRuleStyles(this.appContainerClassName)['background-color'];
        this.appContainer.style.backgroundColor = _common_constants_constants__WEBPACK_IMPORTED_MODULE_5__["default"].INVERTED_BACKGROUND_COLOR;
    };
    InitAppContainer.prototype.dragOver = function (event) {
        event.preventDefault();
    };
    InitAppContainer.prototype.dragLeave = function () {
        this.appContainer.style.backgroundColor = '';
        this.appContainer.attributes.removeNamedItem('style');
    };
    InitAppContainer.prototype.drop = function (event) {
        this.appContainer.style.backgroundColor = '';
        var targetElement = event.target;
        if (!(0,_componentsIndex__WEBPACK_IMPORTED_MODULE_4__["default"])(targetElement.nodeName).isContainer) {
            return;
        }
        if (targetElement.children.length === 0 && targetElement.innerText !== '') {
            alert('InnerText must be empty');
            return;
        }
        var elementType = event.dataTransfer.getData('text/plain');
        var newDomElement = (0,_componentsIndex__WEBPACK_IMPORTED_MODULE_4__["default"])(elementType).create();
        var elementExists = newDomElement ? false : true;
        if (elementExists) {
            var draggable = document.getElementById(elementType);
            targetElement.appendChild(draggable);
            return;
        }
        else {
            this.componentChangePublisher.attach(newDomElement);
        }
        targetElement.appendChild(newDomElement.domElement);
    };
    InitAppContainer.prototype.openElementConfigs = function (event) {
        event.stopPropagation();
        this.stylesComponents = new _common_models_StylesComponentsBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .appendChild(new _common_components_margin_or_padding_component__WEBPACK_IMPORTED_MODULE_1__["default"](this.appContainer, _common_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_6__.StyleNameEnum.margin).component)
            .appendChild(new _common_components_margin_or_padding_component__WEBPACK_IMPORTED_MODULE_1__["default"](this.appContainer, _common_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_6__.StyleNameEnum.padding).component)
            .appendChild(new _common_components_background_component__WEBPACK_IMPORTED_MODULE_3__["default"](this.appContainer).component)
            .appendChild(new _common_components_display_as_parent_component__WEBPACK_IMPORTED_MODULE_0__["default"](this.appContainer).component)
            .build();
    };
    InitAppContainer.prototype.onResize = function (dom_elem, callback) {
        var resizeObserver = new ResizeObserver(function () { return callback(); });
        resizeObserver.observe(dom_elem);
    };
    InitAppContainer.prototype.changeSize = function () {
        var height = this.appContainer.style['height'];
        var width = this.appContainer.style['width'];
        if (height) {
            this.appContainerHeightInput.value = "".concat(parseInt(height));
            _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_7__["default"].getRuleStyles(this.appContainerClassName)['height'] = height;
            this.appContainer.style['height'] = '';
        }
        if (width) {
            this.appContainerWidthInput.value = "".concat(parseInt(width));
            _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_7__["default"].getRuleStyles(this.appContainerClassName)['width'] = width;
            this.appContainer.style['width'] = '';
        }
    };
    InitAppContainer.prototype.changeAppContainerHeight = function () {
        _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_7__["default"].getRuleStyles(this.appContainerClassName)['height'] = "".concat(this.appContainerHeightInput.value, "px");
    };
    InitAppContainer.prototype.changeAppContainerWidth = function () {
        _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_7__["default"].getRuleStyles(this.appContainerClassName)['width'] = "".concat(this.appContainerWidthInput.value, "px");
    };
    InitAppContainer.prototype.getCurrentHeight = function () {
        return _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_7__["default"].getRuleStyles(this.appContainerClassName)['height'];
    };
    InitAppContainer.prototype.getCurrentWidth = function () {
        return _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_7__["default"].getRuleStyles(this.appContainerClassName)['width'];
    };
    InitAppContainer.prototype.printHtmlFile = function () {
        var mainContainer = document.querySelector('#app-container').innerHTML;
        var removeDraggableRegEx = new RegExp(' draggable="true"', 'g');
        mainContainer.replace(removeDraggableRegEx, '');
        // TODO: ver si deberia ir desplegando el arbol de elementos HTML e ir armando el html aqui.
        // TODO: ver si es necesario borrar el style y lo que haya dentro....
        // TODO: eliminar el draggable
        var outputHtml = "\n        <!DOCTYPE html>\n        <html lang=\"en\">\n        <head>\n            <meta charset=\"UTF-8\">\n            <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n            <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n            <title>Document</title>\n        </head>\n        <body id=\"app-container\" class=\"body\">\n            ".concat(mainContainer, "\n        </body>\n        </html>");
        console.log(outputHtml);
    };
    InitAppContainer.prototype.sendComponentName = function () {
        this.componentChangePublisher.notifyComponentName(this.componentSelector.value);
    };
    return InitAppContainer;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InitAppContainer);


/***/ }),

/***/ "./src/components/app-container/init-draggable-components.ts":
/*!*******************************************************************!*\
  !*** ./src/components/app-container/init-draggable-components.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initDraggableComponents)
/* harmony export */ });
/* harmony import */ var _common_functions_drag_start_with_target_node_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/functions/drag-start-with-target-node_name */ "./src/components/common/functions/drag-start-with-target-node_name.ts");

function initDraggableComponents() {
    var domElements = document.querySelectorAll('.dom-element');
    domElements.forEach(function (domElement) {
        domElement.addEventListener('dragstart', _common_functions_drag_start_with_target_node_name__WEBPACK_IMPORTED_MODULE_0__["default"]);
    });
}


/***/ }),

/***/ "./src/components/common/components/background.component.ts":
/*!******************************************************************!*\
  !*** ./src/components/common/components/background.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/ContainerBuilder */ "./src/components/common/models/ContainerBuilder.ts");
/* harmony import */ var _models_InputBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/InputBuilder */ "./src/components/common/models/InputBuilder.ts");
/* harmony import */ var _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/LabelBuilder */ "./src/components/common/models/LabelBuilder.ts");
/* harmony import */ var _models_ButtonBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/ButtonBuilder */ "./src/components/common/models/ButtonBuilder.ts");
/* harmony import */ var _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../css-stylesheet/css-stylesheet */ "./src/components/css-stylesheet/css-stylesheet.ts");
/* harmony import */ var _functions_rgb_to_hex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../functions/rgb-to-hex */ "./src/components/common/functions/rgb-to-hex.ts");
/* harmony import */ var _enums_input_type_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../enums/input-type.enum */ "./src/components/common/enums/input-type.enum.ts");
/* harmony import */ var _enums_style_name_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../enums/style-name.enum */ "./src/components/common/enums/style-name.enum.ts");
/* harmony import */ var _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../enums/display-types.enum */ "./src/components/common/enums/display-types.enum.ts");









var BackgroundComponent = /** @class */ (function () {
    function BackgroundComponent(domElement) {
        this.domElement = domElement;
        this.domElementStyleSheet = _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_4__["default"].getRuleStyles(this.domElement.classList[0]);
        this.addComponents();
    }
    Object.defineProperty(BackgroundComponent.prototype, "component", {
        get: function () {
            return this.container;
        },
        enumerable: false,
        configurable: true
    });
    BackgroundComponent.prototype.addComponents = function () {
        this.updateColor = this.updateColor.bind(this);
        this.updateOpacity = this.updateOpacity.bind(this);
        this.colorInput = new _models_InputBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_6__.InputTypeEnum.color)
            .setValue(this.getCurrentColor())
            .addEventListener('input', this.updateColor)
            .build();
        var removeColor = new _models_ButtonBuilder__WEBPACK_IMPORTED_MODULE_3__["default"]()
            .setInnerText('Remove Color')
            .addEventListener('click', this.updateColor)
            .build();
        this.opacitySlider = new _models_InputBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_6__.InputTypeEnum.range)
            .setValue(this.getCurrentOpacity())
            .setMin(0)
            .setMax(100)
            .addEventListener('input', this.updateOpacity)
            .build();
        this.opacityValue = new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setInnerText("".concat(this.getCurrentOpacity(), "%"))
            .build();
        var backgroundComponents = new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_7__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_8__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_7__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setInnerText('Color / Opacity')
            .build())
            .build())
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_7__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_8__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_7__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(this.colorInput)
            .appendChild(this.opacitySlider)
            .appendChild(this.opacityValue)
            .build())
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_7__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_8__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_7__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(removeColor)
            .build())
            .build();
        this.container = new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_7__.StyleNameEnum.border, '1px solid #4CAF50')
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_7__.StyleNameEnum.padding, '3px')
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_7__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setInnerText('Background')
            .build())
            .appendChild(backgroundComponents)
            .build();
    };
    BackgroundComponent.prototype.getCurrentColor = function () {
        return (0,_functions_rgb_to_hex__WEBPACK_IMPORTED_MODULE_5__["default"])(this.domElementStyleSheet['background-color']);
    };
    BackgroundComponent.prototype.getCurrentOpacity = function () {
        var opacity = parseFloat(this.domElementStyleSheet['opacity']) * 100;
        return isNaN(opacity) ? '100' : Math.round(opacity).toString();
    };
    BackgroundComponent.prototype.updateColor = function (event) {
        if (event.type === 'click') {
            this.domElementStyleSheet['background-color'] = '';
            return;
        }
        this.domElementStyleSheet['background-color'] = this.colorInput.value;
    };
    BackgroundComponent.prototype.updateOpacity = function () {
        var value = parseInt(this.opacitySlider.value);
        var percentage = value / 100;
        if (value >= 100) {
            this.domElementStyleSheet['opacity'] = '';
            this.opacityValue.innerText = '100%';
            return;
        }
        this.domElementStyleSheet['opacity'] = "".concat(percentage);
        this.opacityValue.innerText = "".concat(value, "%");
    };
    BackgroundComponent.prototype.classNameUpdated = function (name) {
        this.domElementStyleSheet = _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_4__["default"].getRuleStyles(name);
        this.colorInput.value = this.getCurrentColor();
        this.opacitySlider.value = this.getCurrentOpacity();
        this.opacityValue.innerText = "".concat(this.opacitySlider.value, "%");
    };
    return BackgroundComponent;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BackgroundComponent);


/***/ }),

/***/ "./src/components/common/components/border.component.ts":
/*!**************************************************************!*\
  !*** ./src/components/common/components/border.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/ContainerBuilder */ "./src/components/common/models/ContainerBuilder.ts");
/* harmony import */ var _models_InputBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/InputBuilder */ "./src/components/common/models/InputBuilder.ts");
/* harmony import */ var _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/LabelBuilder */ "./src/components/common/models/LabelBuilder.ts");
/* harmony import */ var _models_SelectorFromEnumBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/SelectorFromEnumBuilder */ "./src/components/common/models/SelectorFromEnumBuilder.ts");
/* harmony import */ var _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../css-stylesheet/css-stylesheet */ "./src/components/css-stylesheet/css-stylesheet.ts");
/* harmony import */ var _functions_rgb_to_hex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../functions/rgb-to-hex */ "./src/components/common/functions/rgb-to-hex.ts");
/* harmony import */ var _functions_get_css_unit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../functions/get-css-unit */ "./src/components/common/functions/get-css-unit.ts");
/* harmony import */ var _enums_input_type_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../enums/input-type.enum */ "./src/components/common/enums/input-type.enum.ts");
/* harmony import */ var _enums_border_style_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../enums/border-style.enum */ "./src/components/common/enums/border-style.enum.ts");
/* harmony import */ var _enums_units_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../enums/units.enum */ "./src/components/common/enums/units.enum.ts");
/* harmony import */ var _enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../enums/style-name.enum */ "./src/components/common/enums/style-name.enum.ts");
/* harmony import */ var _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../enums/display-types.enum */ "./src/components/common/enums/display-types.enum.ts");












var BorderComponent = /** @class */ (function () {
    function BorderComponent(domElement) {
        this.domElement = domElement;
        this.domElementStyleSheet = _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_4__["default"].getRuleStyles(this.domElement.classList[0]);
        this.addComponents();
    }
    Object.defineProperty(BorderComponent.prototype, "component", {
        get: function () {
            return this.container;
        },
        enumerable: false,
        configurable: true
    });
    BorderComponent.prototype.addComponents = function () {
        this.changeComponentsStatus = this.changeComponentsStatus.bind(this);
        this.updateBorderStyleProperty = this.updateBorderStyleProperty.bind(this);
        this.updateBorderColor = this.updateBorderColor.bind(this);
        this.updateBorderWidth = this.updateBorderWidth.bind(this);
        this.updateBorderRadius = this.updateBorderRadius.bind(this);
        this.selectAllCheckBox = new _models_InputBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_7__.InputTypeEnum.checkbox)
            .addEventListener('change', this.changeComponentsStatus)
            .checked(this.unifiedBorderProperties())
            .build();
        var selectAllContainer = new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setInnerText('Select All')
            .build())
            .appendChild(this.selectAllCheckBox)
            .build();
        this.buildAllComponents();
        this.setBorderValuesAccordingToClass();
        var topContainer = new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_11__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setInnerText('Top Border Color / Style')
            .build())
            .build())
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_11__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(this.topBorderColorInput)
            .appendChild(this.topBorderStyleSelector)
            .build())
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_11__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setInnerText('Top Border Width')
            .build())
            .build())
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_11__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(this.topBorderWidthInput)
            .appendChild(this.topBorderWidthUnitSelector)
            .build())
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_11__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setInnerText('Top Border Radius')
            .build())
            .build())
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_11__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(this.topBorderRadiusInput)
            .appendChild(this.topBorderRadiusUnitSelector)
            .build())
            .build();
        var rightContainer = new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_11__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setInnerText('Right Border Color / Style')
            .build())
            .build())
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_11__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(this.rightBorderColorInput)
            .appendChild(this.rightBorderStyleSelector)
            .build())
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_11__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setInnerText('Right Border Width')
            .build())
            .build())
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_11__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(this.rightBorderWidthInput)
            .appendChild(this.rightBorderWidthUnitSelector)
            .build())
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_11__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setInnerText('Right Border Radius')
            .build())
            .build())
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_11__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(this.rightBorderRadiusInput)
            .appendChild(this.rightBorderRadiusUnitSelector)
            .build())
            .build();
        var bottomContainer = new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_11__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setInnerText('Bottom Border Color / Style')
            .build())
            .build())
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_11__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(this.bottomBorderColorInput)
            .appendChild(this.bottomBorderStyleSelector)
            .build())
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_11__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setInnerText('Bottom Border Width')
            .build())
            .build())
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_11__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(this.bottomBorderWidthInput)
            .appendChild(this.bottomBorderWidthUnitSelector)
            .build())
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_11__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setInnerText('Bottom Border Radius')
            .build())
            .build())
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_11__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(this.bottomBorderRadiusInput)
            .appendChild(this.bottomBorderRadiusUnitSelector)
            .build())
            .build();
        var leftContainer = new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_11__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setInnerText('Left Border Color / Style')
            .build())
            .build())
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_11__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(this.leftBorderColorInput)
            .appendChild(this.leftBorderStyleSelector)
            .build())
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_11__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setInnerText('Left Border Width')
            .build())
            .build())
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_11__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(this.leftBorderWidthInput)
            .appendChild(this.leftBorderWidthUnitSelector)
            .build())
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_11__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setInnerText('Left Border Radius')
            .build())
            .build())
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_11__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(this.leftBorderRadiusInput)
            .appendChild(this.leftBorderRadiusUnitSelector)
            .build())
            .build();
        var inputValuesContainer = new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .appendChild(topContainer)
            .appendChild(rightContainer)
            .appendChild(bottomContainer)
            .appendChild(leftContainer)
            .build();
        this.container = new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.border, '1px solid #4CAF50')
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.padding, '3px')
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setInnerText('Border Type Selector')
            .build())
            .appendChild(selectAllContainer)
            .appendChild(inputValuesContainer)
            .build();
    };
    BorderComponent.prototype.buildAllComponents = function () {
        this.buildColorInputs();
        this.buildStyleSelectors();
        this.buildBorderWidthInputs();
        this.buildBorderWidthUnitsSelectors();
        this.buildBorderRadiusInputs();
        this.buildBorderRadiusUnitsSelectors();
    };
    BorderComponent.prototype.buildColorInputs = function () {
        this.topBorderColorInput = new _models_InputBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_7__.InputTypeEnum.color)
            .addEventListener('input', this.updateBorderColor)
            .build();
        this.rightBorderColorInput = new _models_InputBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_7__.InputTypeEnum.color)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('input', this.updateBorderColor)
            .build();
        this.bottomBorderColorInput = new _models_InputBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_7__.InputTypeEnum.color)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('input', this.updateBorderColor)
            .build();
        this.leftBorderColorInput = new _models_InputBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_7__.InputTypeEnum.color)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('input', this.updateBorderColor)
            .build();
    };
    BorderComponent.prototype.buildStyleSelectors = function () {
        this.topBorderStyleSelector = new _models_SelectorFromEnumBuilder__WEBPACK_IMPORTED_MODULE_3__["default"](_enums_border_style_enum__WEBPACK_IMPORTED_MODULE_8__.BorderStyleEnum)
            .addEventListener('change', this.updateBorderStyleProperty)
            .build();
        this.rightBorderStyleSelector = new _models_SelectorFromEnumBuilder__WEBPACK_IMPORTED_MODULE_3__["default"](_enums_border_style_enum__WEBPACK_IMPORTED_MODULE_8__.BorderStyleEnum)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('change', this.updateBorderStyleProperty)
            .build();
        this.bottomBorderStyleSelector = new _models_SelectorFromEnumBuilder__WEBPACK_IMPORTED_MODULE_3__["default"](_enums_border_style_enum__WEBPACK_IMPORTED_MODULE_8__.BorderStyleEnum)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('change', this.updateBorderStyleProperty)
            .build();
        this.leftBorderStyleSelector = new _models_SelectorFromEnumBuilder__WEBPACK_IMPORTED_MODULE_3__["default"](_enums_border_style_enum__WEBPACK_IMPORTED_MODULE_8__.BorderStyleEnum)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('change', this.updateBorderStyleProperty)
            .build();
    };
    BorderComponent.prototype.buildBorderWidthInputs = function () {
        this.topBorderWidthInput = new _models_InputBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_7__.InputTypeEnum.number)
            .setMin(0)
            .addEventListener('input', this.updateBorderWidth)
            .build();
        this.rightBorderWidthInput = new _models_InputBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_7__.InputTypeEnum.number)
            .setMin(0)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('change', this.updateBorderWidth)
            .build();
        this.bottomBorderWidthInput = new _models_InputBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_7__.InputTypeEnum.number)
            .setMin(0)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('change', this.updateBorderWidth)
            .build();
        this.leftBorderWidthInput = new _models_InputBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_7__.InputTypeEnum.number)
            .setMin(0)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('change', this.updateBorderWidth)
            .build();
    };
    BorderComponent.prototype.buildBorderWidthUnitsSelectors = function () {
        this.topBorderWidthUnitSelector = new _models_SelectorFromEnumBuilder__WEBPACK_IMPORTED_MODULE_3__["default"](_enums_units_enum__WEBPACK_IMPORTED_MODULE_9__.UnitsEnum)
            .addEventListener('change', this.updateBorderWidth)
            .build();
        this.rightBorderWidthUnitSelector = new _models_SelectorFromEnumBuilder__WEBPACK_IMPORTED_MODULE_3__["default"](_enums_units_enum__WEBPACK_IMPORTED_MODULE_9__.UnitsEnum)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('change', this.updateBorderWidth)
            .build();
        this.bottomBorderWidthUnitSelector = new _models_SelectorFromEnumBuilder__WEBPACK_IMPORTED_MODULE_3__["default"](_enums_units_enum__WEBPACK_IMPORTED_MODULE_9__.UnitsEnum)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('change', this.updateBorderWidth)
            .build();
        this.leftBorderWidthUnitSelector = new _models_SelectorFromEnumBuilder__WEBPACK_IMPORTED_MODULE_3__["default"](_enums_units_enum__WEBPACK_IMPORTED_MODULE_9__.UnitsEnum)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('change', this.updateBorderWidth)
            .build();
    };
    BorderComponent.prototype.buildBorderRadiusInputs = function () {
        this.topBorderRadiusInput = new _models_InputBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_7__.InputTypeEnum.number)
            .setMin(0)
            .addEventListener('input', this.updateBorderRadius)
            .build();
        this.rightBorderRadiusInput = new _models_InputBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_7__.InputTypeEnum.number)
            .setMin(0)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('change', this.updateBorderRadius)
            .build();
        this.bottomBorderRadiusInput = new _models_InputBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_7__.InputTypeEnum.number)
            .setMin(0)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('change', this.updateBorderRadius)
            .build();
        this.leftBorderRadiusInput = new _models_InputBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_7__.InputTypeEnum.number)
            .setMin(0)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('change', this.updateBorderRadius)
            .build();
    };
    BorderComponent.prototype.buildBorderRadiusUnitsSelectors = function () {
        this.topBorderRadiusUnitSelector = new _models_SelectorFromEnumBuilder__WEBPACK_IMPORTED_MODULE_3__["default"](_enums_units_enum__WEBPACK_IMPORTED_MODULE_9__.UnitsEnum)
            .addEventListener('change', this.updateBorderRadius)
            .build();
        this.rightBorderRadiusUnitSelector = new _models_SelectorFromEnumBuilder__WEBPACK_IMPORTED_MODULE_3__["default"](_enums_units_enum__WEBPACK_IMPORTED_MODULE_9__.UnitsEnum)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('change', this.updateBorderRadius)
            .build();
        this.bottomBorderRadiusUnitSelector = new _models_SelectorFromEnumBuilder__WEBPACK_IMPORTED_MODULE_3__["default"](_enums_units_enum__WEBPACK_IMPORTED_MODULE_9__.UnitsEnum)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('change', this.updateBorderRadius)
            .build();
        this.leftBorderRadiusUnitSelector = new _models_SelectorFromEnumBuilder__WEBPACK_IMPORTED_MODULE_3__["default"](_enums_units_enum__WEBPACK_IMPORTED_MODULE_9__.UnitsEnum)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('change', this.updateBorderRadius)
            .build();
    };
    BorderComponent.prototype.changeComponentsStatus = function () {
        if (this.selectAllCheckBox.checked) {
            this.rightBorderStyleSelector.disabled = true;
            this.bottomBorderStyleSelector.disabled = true;
            this.leftBorderStyleSelector.disabled = true;
            this.rightBorderColorInput.disabled = true;
            this.bottomBorderColorInput.disabled = true;
            this.leftBorderColorInput.disabled = true;
            this.rightBorderWidthInput.disabled = true;
            this.bottomBorderWidthInput.disabled = true;
            this.leftBorderWidthInput.disabled = true;
            this.rightBorderWidthUnitSelector.disabled = true;
            this.bottomBorderWidthUnitSelector.disabled = true;
            this.leftBorderWidthUnitSelector.disabled = true;
            this.rightBorderRadiusInput.disabled = true;
            this.bottomBorderRadiusInput.disabled = true;
            this.leftBorderRadiusInput.disabled = true;
            this.rightBorderRadiusUnitSelector.disabled = true;
            this.bottomBorderRadiusUnitSelector.disabled = true;
            this.leftBorderRadiusUnitSelector.disabled = true;
        }
        else {
            this.rightBorderStyleSelector.disabled = false;
            this.bottomBorderStyleSelector.disabled = false;
            this.leftBorderStyleSelector.disabled = false;
            this.rightBorderColorInput.disabled = false;
            this.bottomBorderColorInput.disabled = false;
            this.leftBorderColorInput.disabled = false;
            this.rightBorderWidthInput.disabled = false;
            this.bottomBorderWidthInput.disabled = false;
            this.leftBorderWidthInput.disabled = false;
            this.rightBorderWidthUnitSelector.disabled = false;
            this.bottomBorderWidthUnitSelector.disabled = false;
            this.leftBorderWidthUnitSelector.disabled = false;
            this.rightBorderRadiusInput.disabled = false;
            this.bottomBorderRadiusInput.disabled = false;
            this.leftBorderRadiusInput.disabled = false;
            this.rightBorderRadiusUnitSelector.disabled = false;
            this.bottomBorderRadiusUnitSelector.disabled = false;
            this.leftBorderRadiusUnitSelector.disabled = false;
        }
    };
    BorderComponent.prototype.setBorderValuesAccordingToClass = function () {
        this.setBorderColorValuesAccordingToClass();
        this.setBorderStyleValuesAccordingToClass();
        this.setBorderWidthValuesAccordingToClass();
        this.setBorderRadiusValuesAccordingToClass();
    };
    BorderComponent.prototype.setBorderColorValuesAccordingToClass = function () {
        var _a = this.getCurrentBorderColor(), top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left;
        this.topBorderColorInput.value = top;
        this.rightBorderColorInput.value = right;
        this.bottomBorderColorInput.value = bottom;
        this.leftBorderColorInput.value = left;
    };
    BorderComponent.prototype.setBorderStyleValuesAccordingToClass = function () {
        var _a = this.getCurrentBorderStyle(), top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left;
        this.topBorderStyleSelector.value = top;
        this.rightBorderStyleSelector.value = right;
        this.bottomBorderStyleSelector.value = bottom;
        this.leftBorderStyleSelector.value = left;
    };
    BorderComponent.prototype.setBorderWidthValuesAccordingToClass = function () {
        var _a = this.getCurrentBorderWidth(), top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left;
        this.topBorderWidthInput.value = "".concat(parseInt(top));
        this.rightBorderWidthInput.value = "".concat(parseInt(right));
        this.bottomBorderWidthInput.value = "".concat(parseInt(bottom));
        this.leftBorderWidthInput.value = "".concat(parseInt(left));
        this.topBorderWidthUnitSelector.value = (0,_functions_get_css_unit__WEBPACK_IMPORTED_MODULE_6__["default"])(top);
        this.rightBorderWidthUnitSelector.value = (0,_functions_get_css_unit__WEBPACK_IMPORTED_MODULE_6__["default"])(right);
        this.bottomBorderWidthUnitSelector.value = (0,_functions_get_css_unit__WEBPACK_IMPORTED_MODULE_6__["default"])(bottom);
        this.leftBorderWidthUnitSelector.value = (0,_functions_get_css_unit__WEBPACK_IMPORTED_MODULE_6__["default"])(left);
    };
    BorderComponent.prototype.setBorderRadiusValuesAccordingToClass = function () {
        var _a = this.getCurrentBorderRadius(), top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left;
        this.topBorderRadiusInput.value = "".concat(parseInt(top));
        this.rightBorderRadiusInput.value = "".concat(parseInt(right));
        this.bottomBorderRadiusInput.value = "".concat(parseInt(bottom));
        this.leftBorderRadiusInput.value = "".concat(parseInt(left));
        this.topBorderRadiusUnitSelector.value = (0,_functions_get_css_unit__WEBPACK_IMPORTED_MODULE_6__["default"])(top);
        this.rightBorderRadiusUnitSelector.value = (0,_functions_get_css_unit__WEBPACK_IMPORTED_MODULE_6__["default"])(right);
        this.bottomBorderRadiusUnitSelector.value = (0,_functions_get_css_unit__WEBPACK_IMPORTED_MODULE_6__["default"])(bottom);
        this.leftBorderRadiusUnitSelector.value = (0,_functions_get_css_unit__WEBPACK_IMPORTED_MODULE_6__["default"])(left);
    };
    BorderComponent.prototype.updateBorderStyleProperty = function () {
        var _a = this.getCurrentBorderStyle(), top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left;
        if (this.selectAllCheckBox.checked) {
            top = this.topBorderStyleSelector.value;
            right = top;
            bottom = top;
            left = top;
            this.rightBorderStyleSelector.value = this.topBorderStyleSelector.value;
            this.bottomBorderStyleSelector.value = this.topBorderStyleSelector.value;
            this.leftBorderStyleSelector.value = this.topBorderStyleSelector.value;
            if (top === _enums_border_style_enum__WEBPACK_IMPORTED_MODULE_8__.BorderStyleEnum.none) {
                this.resetBorderProperty('border-style', 'all');
                this.resetBorderProperty('border-color', 'all');
                this.resetBorderProperty('border-width', 'all');
                this.resetBorderProperty('border-radius', 'all');
                this.resetBorderProperty('border-image', 'all');
                return;
            }
        }
        else {
            top = this.topBorderStyleSelector.value;
            right = this.rightBorderStyleSelector.value;
            bottom = this.bottomBorderStyleSelector.value;
            left = this.leftBorderStyleSelector.value;
        }
        this.domElementStyleSheet['border-style'] = [top, right, bottom, left].join(' ');
    };
    BorderComponent.prototype.resetBorderProperty = function (property, position) {
        var style = position === 'all' ? property : "".concat(property, "-").concat(position);
        this.domElementStyleSheet[style] = '';
        if (property === 'border-style') {
            this.setBorderStyleValuesAccordingToClass();
        }
        if (property === 'border-color') {
            this.setBorderColorValuesAccordingToClass();
        }
        if (property === 'border-width') {
            this.setBorderWidthValuesAccordingToClass();
        }
        if (property === 'border-radius') {
            this.setBorderRadiusValuesAccordingToClass();
        }
    };
    BorderComponent.prototype.updateBorderColor = function () {
        var _a = this.getCurrentBorderColor(), top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left;
        if (this.selectAllCheckBox.checked) {
            top = this.topBorderColorInput.value;
            right = top;
            bottom = top;
            left = top;
            this.rightBorderColorInput.value = this.topBorderColorInput.value;
            this.bottomBorderColorInput.value = this.topBorderColorInput.value;
            this.leftBorderColorInput.value = this.topBorderColorInput.value;
        }
        else {
            top = this.topBorderColorInput.value;
            right = this.rightBorderColorInput.value;
            bottom = this.bottomBorderColorInput.value;
            left = this.leftBorderColorInput.value;
        }
        this.domElementStyleSheet['border-color'] = [top, right, bottom, left].join(' ');
    };
    BorderComponent.prototype.updateBorderWidth = function () {
        var _a = this.getCurrentBorderWidth(), top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left;
        if (this.selectAllCheckBox.checked) {
            if (parseInt(this.topBorderWidthInput.value) === 0) {
                this.resetBorderProperty('border-width', 'all');
                return;
            }
            top = "".concat(this.topBorderWidthInput.value).concat(this.topBorderWidthUnitSelector.value);
            right = top;
            bottom = top;
            left = top;
            this.rightBorderWidthInput.value = this.topBorderWidthInput.value;
            this.bottomBorderWidthInput.value = this.topBorderWidthInput.value;
            this.leftBorderWidthInput.value = this.topBorderWidthInput.value;
            this.rightBorderWidthUnitSelector.value = this.topBorderWidthUnitSelector.value;
            this.bottomBorderWidthUnitSelector.value = this.topBorderWidthUnitSelector.value;
            this.leftBorderWidthUnitSelector.value = this.topBorderWidthUnitSelector.value;
        }
        else {
            top = "".concat(this.topBorderWidthInput.value).concat(this.topBorderWidthUnitSelector.value);
            right = "".concat(this.rightBorderWidthInput.value).concat(this.rightBorderWidthUnitSelector.value);
            bottom = "".concat(this.bottomBorderWidthInput.value).concat(this.bottomBorderWidthUnitSelector.value);
            left = "".concat(this.leftBorderWidthInput.value).concat(this.leftBorderWidthUnitSelector.value);
        }
        this.domElementStyleSheet['border-width'] = [top, right, bottom, left].join(' ');
    };
    BorderComponent.prototype.updateBorderRadius = function () {
        var _a = this.getCurrentBorderRadius(), top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left;
        if (this.selectAllCheckBox.checked) {
            if (parseInt(this.topBorderRadiusInput.value) === 0) {
                this.resetBorderProperty('border-radius', 'all');
                return;
            }
            top = "".concat(this.topBorderRadiusInput.value).concat(this.topBorderRadiusUnitSelector.value);
            right = top;
            bottom = top;
            left = top;
            this.rightBorderRadiusInput.value = this.topBorderRadiusInput.value;
            this.bottomBorderRadiusInput.value = this.topBorderRadiusInput.value;
            this.leftBorderRadiusInput.value = this.topBorderRadiusInput.value;
            this.rightBorderRadiusUnitSelector.value = this.topBorderRadiusUnitSelector.value;
            this.bottomBorderRadiusUnitSelector.value = this.topBorderRadiusUnitSelector.value;
            this.leftBorderRadiusUnitSelector.value = this.topBorderRadiusUnitSelector.value;
        }
        else {
            top = "".concat(this.topBorderRadiusInput.value).concat(this.topBorderRadiusUnitSelector.value);
            right = "".concat(this.rightBorderRadiusInput.value).concat(this.rightBorderRadiusUnitSelector.value);
            bottom = "".concat(this.bottomBorderRadiusInput.value).concat(this.bottomBorderRadiusUnitSelector.value);
            left = "".concat(this.leftBorderRadiusInput.value).concat(this.leftBorderRadiusUnitSelector.value);
        }
        this.domElementStyleSheet['border-radius'] = [top, right, bottom, left].join(' ');
    };
    BorderComponent.prototype.unifiedBorderProperties = function () {
        var allEqual = [];
        allEqual.push(this.getCurrentBorderStyle().allEqual);
        allEqual.push(this.getCurrentBorderColor().allEqual);
        allEqual.push(this.getCurrentBorderRadius().allEqual);
        allEqual.push(this.getCurrentBorderStyle().allEqual);
        allEqual.push(this.getCurrentBorderWidth().allEqual);
        if (allEqual.find(function (el) { return el === false; }) === undefined) {
            return true;
        }
        return false;
    };
    BorderComponent.prototype.getCurrentBorderStyle = function () {
        var top = this.domElementStyleSheet['border-top-style'];
        var right = this.domElementStyleSheet['border-right-style'];
        var bottom = this.domElementStyleSheet['border-bottom-style'];
        var left = this.domElementStyleSheet['border-left-style'];
        return {
            top: top ? top : 'none',
            right: right ? right : 'none',
            bottom: bottom ? bottom : 'none',
            left: left ? left : 'none',
            allEqual: top === right && top === bottom && top === left,
        };
    };
    BorderComponent.prototype.getCurrentBorderColor = function () {
        var top = this.domElementStyleSheet['border-top-color'];
        var right = this.domElementStyleSheet['border-right-color'];
        var bottom = this.domElementStyleSheet['border-bottom-color'];
        var left = this.domElementStyleSheet['border-left-color'];
        return {
            top: (0,_functions_rgb_to_hex__WEBPACK_IMPORTED_MODULE_5__["default"])(top),
            right: (0,_functions_rgb_to_hex__WEBPACK_IMPORTED_MODULE_5__["default"])(right),
            bottom: (0,_functions_rgb_to_hex__WEBPACK_IMPORTED_MODULE_5__["default"])(bottom),
            left: (0,_functions_rgb_to_hex__WEBPACK_IMPORTED_MODULE_5__["default"])(left),
            allEqual: top === right && top === bottom && top === left,
        };
    };
    BorderComponent.prototype.getCurrentBorderWidth = function () {
        var top = this.domElementStyleSheet['border-top-width'];
        var right = this.domElementStyleSheet['border-right-width'];
        var bottom = this.domElementStyleSheet['border-bottom-width'];
        var left = this.domElementStyleSheet['border-left-width'];
        return {
            top: top ? top : '0px',
            right: right ? right : '0px',
            bottom: bottom ? bottom : '0px',
            left: left ? left : '0px',
            allEqual: top === right && top === bottom && top === left,
        };
    };
    BorderComponent.prototype.getCurrentBorderRadius = function () {
        var top = this.domElementStyleSheet['border-top-left-radius'];
        var right = this.domElementStyleSheet['border-top-right-radius'];
        var bottom = this.domElementStyleSheet['border-bottom-right-radius'];
        var left = this.domElementStyleSheet['border-bottom-left-radius'];
        return {
            top: top ? top : '0px',
            right: right ? right : '0px',
            bottom: bottom ? bottom : '0px',
            left: left ? left : '0px',
            allEqual: top === right && top === bottom && top === left,
        };
    };
    BorderComponent.prototype.classNameUpdated = function (name) {
        this.domElementStyleSheet = _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_4__["default"].getRuleStyles(name);
        this.selectAllCheckBox.checked = this.unifiedBorderProperties();
        this.changeComponentsStatus();
        this.setBorderValuesAccordingToClass();
    };
    return BorderComponent;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BorderComponent);


/***/ }),

/***/ "./src/components/common/components/box-shadow.component.ts":
/*!******************************************************************!*\
  !*** ./src/components/common/components/box-shadow.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/ContainerBuilder */ "./src/components/common/models/ContainerBuilder.ts");
/* harmony import */ var _models_SelectorFromEnumBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/SelectorFromEnumBuilder */ "./src/components/common/models/SelectorFromEnumBuilder.ts");
/* harmony import */ var _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/LabelBuilder */ "./src/components/common/models/LabelBuilder.ts");
/* harmony import */ var _models_InputBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/InputBuilder */ "./src/components/common/models/InputBuilder.ts");
/* harmony import */ var _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../css-stylesheet/css-stylesheet */ "./src/components/css-stylesheet/css-stylesheet.ts");
/* harmony import */ var _functions_get_css_unit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../functions/get-css-unit */ "./src/components/common/functions/get-css-unit.ts");
/* harmony import */ var _functions_rgb_to_hex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../functions/rgb-to-hex */ "./src/components/common/functions/rgb-to-hex.ts");
/* harmony import */ var _models_TextAreaBuilder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/TextAreaBuilder */ "./src/components/common/models/TextAreaBuilder.ts");
/* harmony import */ var _enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../enums/style-name.enum */ "./src/components/common/enums/style-name.enum.ts");
/* harmony import */ var _enums_input_type_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../enums/input-type.enum */ "./src/components/common/enums/input-type.enum.ts");
/* harmony import */ var _enums_units_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../enums/units.enum */ "./src/components/common/enums/units.enum.ts");
/* harmony import */ var _enums_align_flex_items_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../enums/align-flex-items.enum */ "./src/components/common/enums/align-flex-items.enum.ts");
/* harmony import */ var _enums_flex_direction_enum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../enums/flex-direction.enum */ "./src/components/common/enums/flex-direction.enum.ts");
/* harmony import */ var _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../enums/display-types.enum */ "./src/components/common/enums/display-types.enum.ts");














var BoxShadowComponent = /** @class */ (function () {
    function BoxShadowComponent(domElement) {
        this.advancedEnabled = false;
        this.domElement = domElement;
        this.domElementStyleSheet = _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_4__["default"].getRuleStyles(this.domElement.classList[0]);
        this.getInitialValues();
        this.addComponents();
        this.setBoxShadowValuesAccordingToClass();
    }
    Object.defineProperty(BoxShadowComponent.prototype, "component", {
        get: function () {
            return this.container;
        },
        enumerable: false,
        configurable: true
    });
    BoxShadowComponent.prototype.addComponents = function () {
        this.buildShadowBoxTypeContainer();
        this.buildBasicShadowBoxContainers();
        this.buildAdvancedShadowBoxContainer();
        this.buildComponentsContainer();
        this.container = new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .appendChild(this.componentsContainer)
            .build();
    };
    BoxShadowComponent.prototype.buildShadowBoxTypeContainer = function () {
        this.updateBoxShadowType = this.updateBoxShadowType.bind(this);
        this.simpleBoxShadowCheckbox = new _models_InputBuilder__WEBPACK_IMPORTED_MODULE_3__["default"](_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_9__.InputTypeEnum.radio)
            .setName('shadowType')
            .addEventListener('change', this.updateBoxShadowType)
            .build();
        this.advancedBoxShadowCheckbox = new _models_InputBuilder__WEBPACK_IMPORTED_MODULE_3__["default"](_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_9__.InputTypeEnum.radio)
            .setName('shadowType')
            .addEventListener('change', this.updateBoxShadowType)
            .build();
        if (this.advancedEnabled) {
            this.advancedBoxShadowCheckbox.checked = true;
        }
        else {
            this.simpleBoxShadowCheckbox.checked = true;
        }
        this.shadowBoxTypeContainer = new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_13__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum["flex-direction"], _enums_flex_direction_enum__WEBPACK_IMPORTED_MODULE_12__.FlexDirectionEnum.column)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum["align-items"], _enums_align_flex_items_enum__WEBPACK_IMPORTED_MODULE_11__.AlignFlexItemsEnum.stretch)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setInnerText('Simple or Advanced Shadow Box')
            .build())
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setInnerText('Simple ->')
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum.margin, '0px 3px 0px 20px')
            .build())
            .appendChild(this.simpleBoxShadowCheckbox)
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setInnerText('Advanced ->')
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum.margin, '0px 3px 0px 20px')
            .build())
            .appendChild(this.advancedBoxShadowCheckbox)
            .build())
            .build();
    };
    BoxShadowComponent.prototype.buildBasicShadowBoxContainers = function () {
        this.updateBasicProperty = this.updateBasicProperty.bind(this);
        this.colorInput = new _models_InputBuilder__WEBPACK_IMPORTED_MODULE_3__["default"](_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_9__.InputTypeEnum.color)
            .addEventListener('input', this.updateBasicProperty)
            .build();
        this.insetSelector = new _models_InputBuilder__WEBPACK_IMPORTED_MODULE_3__["default"](_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_9__.InputTypeEnum.checkbox)
            .addEventListener('input', this.updateBasicProperty)
            .build();
        this.horizontalOffsetInput = new _models_InputBuilder__WEBPACK_IMPORTED_MODULE_3__["default"](_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_9__.InputTypeEnum.number)
            .addEventListener('input', this.updateBasicProperty)
            .build();
        this.horizontalOffsetUnitSelector = new _models_SelectorFromEnumBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](_enums_units_enum__WEBPACK_IMPORTED_MODULE_10__.UnitsEnum)
            .addEventListener('change', this.updateBasicProperty)
            .build();
        this.verticalOffsetInput = new _models_InputBuilder__WEBPACK_IMPORTED_MODULE_3__["default"](_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_9__.InputTypeEnum.number)
            .addEventListener('input', this.updateBasicProperty)
            .build();
        this.verticalOffsetUnitSelector = new _models_SelectorFromEnumBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](_enums_units_enum__WEBPACK_IMPORTED_MODULE_10__.UnitsEnum)
            .addEventListener('change', this.updateBasicProperty)
            .build();
        this.blurRadiusInput = new _models_InputBuilder__WEBPACK_IMPORTED_MODULE_3__["default"](_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_9__.InputTypeEnum.number)
            .setMin(0)
            .addEventListener('input', this.updateBasicProperty)
            .build();
        this.blurRadiusUnitSelector = new _models_SelectorFromEnumBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](_enums_units_enum__WEBPACK_IMPORTED_MODULE_10__.UnitsEnum)
            .addEventListener('change', this.updateBasicProperty)
            .build();
        this.spreadRadiusInput = new _models_InputBuilder__WEBPACK_IMPORTED_MODULE_3__["default"](_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_9__.InputTypeEnum.number)
            .setMin(0)
            .addEventListener('input', this.updateBasicProperty)
            .build();
        this.spreadRadiusUnitSelector = new _models_SelectorFromEnumBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](_enums_units_enum__WEBPACK_IMPORTED_MODULE_10__.UnitsEnum)
            .addEventListener('change', this.updateBasicProperty)
            .build();
        this.colorInsetContainer = new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_13__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum["flex-direction"], _enums_flex_direction_enum__WEBPACK_IMPORTED_MODULE_12__.FlexDirectionEnum.column)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum["align-items"], _enums_align_flex_items_enum__WEBPACK_IMPORTED_MODULE_11__.AlignFlexItemsEnum.stretch)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setInnerText('Horizontal Offset')
            .build())
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .appendChild(this.colorInput)
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setInnerText('Inset ->')
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum.margin, '0px 3px 0px 20px')
            .build())
            .appendChild(this.insetSelector)
            .build())
            .build();
        this.horizontalOffsetContainer = new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_13__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum["flex-direction"], _enums_flex_direction_enum__WEBPACK_IMPORTED_MODULE_12__.FlexDirectionEnum.column)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum["align-items"], _enums_align_flex_items_enum__WEBPACK_IMPORTED_MODULE_11__.AlignFlexItemsEnum.stretch)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setInnerText('Horizontal Offset')
            .build())
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .appendChild(this.horizontalOffsetInput)
            .appendChild(this.horizontalOffsetUnitSelector)
            .build())
            .build();
        this.verticalOffsetContainer = new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_13__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum["flex-direction"], _enums_flex_direction_enum__WEBPACK_IMPORTED_MODULE_12__.FlexDirectionEnum.column)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum["align-items"], _enums_align_flex_items_enum__WEBPACK_IMPORTED_MODULE_11__.AlignFlexItemsEnum.stretch)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setInnerText('Vertical Offset')
            .build())
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .appendChild(this.verticalOffsetInput)
            .appendChild(this.verticalOffsetUnitSelector)
            .build())
            .build();
        this.blurRadiusContainer = new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_13__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum["flex-direction"], _enums_flex_direction_enum__WEBPACK_IMPORTED_MODULE_12__.FlexDirectionEnum.column)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum["align-items"], _enums_align_flex_items_enum__WEBPACK_IMPORTED_MODULE_11__.AlignFlexItemsEnum.stretch)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setInnerText('Blur Radius')
            .build())
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .appendChild(this.blurRadiusInput)
            .appendChild(this.blurRadiusUnitSelector)
            .build())
            .build();
        this.spreadRadiusContainer = new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_13__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum["flex-direction"], _enums_flex_direction_enum__WEBPACK_IMPORTED_MODULE_12__.FlexDirectionEnum.column)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum["align-items"], _enums_align_flex_items_enum__WEBPACK_IMPORTED_MODULE_11__.AlignFlexItemsEnum.stretch)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setInnerText('Spread Radius')
            .build())
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .appendChild(this.spreadRadiusInput)
            .appendChild(this.spreadRadiusUnitSelector)
            .build())
            .build();
    };
    BoxShadowComponent.prototype.buildComponentsContainer = function () {
        if (this.advancedEnabled) {
            this.componentsContainer = new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
                .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_13__.DisplayTypesEnum.flex)
                .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum["flex-direction"], _enums_flex_direction_enum__WEBPACK_IMPORTED_MODULE_12__.FlexDirectionEnum.column)
                .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum["align-items"], _enums_align_flex_items_enum__WEBPACK_IMPORTED_MODULE_11__.AlignFlexItemsEnum.stretch)
                .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum.border, '1px solid #4CAF50')
                .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum.padding, '3px')
                .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
                .setInnerText('Box Shadow')
                .build())
                .appendChild(this.shadowBoxTypeContainer)
                .appendChild(this.advancedShadowBoxContainer)
                .build();
        }
        else {
            this.componentsContainer = new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
                .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_13__.DisplayTypesEnum.flex)
                .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum["flex-direction"], _enums_flex_direction_enum__WEBPACK_IMPORTED_MODULE_12__.FlexDirectionEnum.column)
                .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum["align-items"], _enums_align_flex_items_enum__WEBPACK_IMPORTED_MODULE_11__.AlignFlexItemsEnum.stretch)
                .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum.border, '1px solid #4CAF50')
                .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum.padding, '3px')
                .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
                .setInnerText('Box Shadow')
                .build())
                .appendChild(this.shadowBoxTypeContainer)
                .appendChild(this.colorInsetContainer)
                .appendChild(this.horizontalOffsetContainer)
                .appendChild(this.verticalOffsetContainer)
                .appendChild(this.blurRadiusContainer)
                .appendChild(this.spreadRadiusContainer)
                .build();
        }
    };
    BoxShadowComponent.prototype.buildAdvancedShadowBoxContainer = function () {
        this.updateAdvancedProperty = this.updateAdvancedProperty.bind(this);
        this.advancedShadowBoxTextArea = new _models_TextAreaBuilder__WEBPACK_IMPORTED_MODULE_7__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum.resize, 'vertical')
            .addEventListener('input', this.updateAdvancedProperty)
            .build();
        this.advancedShadowBoxContainer = new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_13__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum["flex-direction"], _enums_flex_direction_enum__WEBPACK_IMPORTED_MODULE_12__.FlexDirectionEnum.column)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum["align-items"], _enums_align_flex_items_enum__WEBPACK_IMPORTED_MODULE_11__.AlignFlexItemsEnum.stretch)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setInnerText('Advanced Box Shadow')
            .build())
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_13__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum["flex-direction"], _enums_flex_direction_enum__WEBPACK_IMPORTED_MODULE_12__.FlexDirectionEnum.column)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum["align-items"], _enums_align_flex_items_enum__WEBPACK_IMPORTED_MODULE_11__.AlignFlexItemsEnum.stretch)
            .appendChild(this.advancedShadowBoxTextArea)
            .build())
            .build();
    };
    BoxShadowComponent.prototype.setBoxShadowValuesAccordingToClass = function () {
        var initialValues = this.getInitialValues();
        if (initialValues.inset !== undefined) {
            this.insetSelector.checked = true;
        }
        this.colorInput.value = (0,_functions_rgb_to_hex__WEBPACK_IMPORTED_MODULE_6__["default"])(initialValues.color);
        this.horizontalOffsetInput.value = "".concat(parseInt(initialValues.horizontalOffset) || 0);
        this.horizontalOffsetUnitSelector.value = (0,_functions_get_css_unit__WEBPACK_IMPORTED_MODULE_5__["default"])(initialValues.horizontalOffset);
        this.verticalOffsetInput.value = "".concat(parseInt(initialValues.verticalOffset) || 0);
        this.verticalOffsetUnitSelector.value = (0,_functions_get_css_unit__WEBPACK_IMPORTED_MODULE_5__["default"])(initialValues.verticalOffset);
        this.blurRadiusInput.value = "".concat(parseInt(initialValues.blurRadius) || 0);
        this.blurRadiusUnitSelector.value = (0,_functions_get_css_unit__WEBPACK_IMPORTED_MODULE_5__["default"])(initialValues.blurRadius);
        this.spreadRadiusInput.value = "".concat(parseInt(initialValues.spreadRadius) || 0);
        this.spreadRadiusUnitSelector.value = (0,_functions_get_css_unit__WEBPACK_IMPORTED_MODULE_5__["default"])(initialValues.spreadRadius);
        this.advancedShadowBoxTextArea.value = this.domElementStyleSheet['box-shadow'];
    };
    BoxShadowComponent.prototype.updateBasicProperty = function () {
        if (this.horizontalOffsetInput.value === '0'
            && this.verticalOffsetInput.value === '0'
            && this.blurRadiusInput.value === '0'
            && this.spreadRadiusInput.value === '0') {
            this.domElementStyleSheet['box-shadow'] = '';
            return;
        }
        var inset = this.insetSelector.checked ? 'inset' : '';
        var color = this.colorInput.value;
        var horizontalOffset = this.horizontalOffsetInput.value + this.horizontalOffsetUnitSelector.value;
        var verticalOffset = this.verticalOffsetInput.value + this.verticalOffsetUnitSelector.value;
        var blurRadius = this.blurRadiusInput.value + this.blurRadiusUnitSelector.value;
        var spreadRadius = this.spreadRadiusInput.value + this.spreadRadiusUnitSelector.value;
        var boxShadowValue = "".concat(horizontalOffset, " ").concat(verticalOffset, " ").concat(blurRadius, " ").concat(spreadRadius, " ").concat(color, " ").concat(inset);
        this.domElementStyleSheet['box-shadow'] = boxShadowValue;
    };
    BoxShadowComponent.prototype.updateAdvancedProperty = function () {
        this.domElementStyleSheet['box-shadow'] = this.advancedShadowBoxTextArea.value;
    };
    BoxShadowComponent.prototype.updateBoxShadowType = function () {
        this.domElementStyleSheet['box-shadow'] = '';
        if (this.advancedBoxShadowCheckbox.checked) {
            this.componentsContainer.removeChild(this.colorInsetContainer);
            this.componentsContainer.removeChild(this.horizontalOffsetContainer);
            this.componentsContainer.removeChild(this.verticalOffsetContainer);
            this.componentsContainer.removeChild(this.blurRadiusContainer);
            this.componentsContainer.removeChild(this.spreadRadiusContainer);
            this.componentsContainer.appendChild(this.advancedShadowBoxContainer);
        }
        else {
            this.componentsContainer.removeChild(this.advancedShadowBoxContainer);
            this.componentsContainer.appendChild(this.colorInsetContainer);
            this.componentsContainer.appendChild(this.horizontalOffsetContainer);
            this.componentsContainer.appendChild(this.verticalOffsetContainer);
            this.componentsContainer.appendChild(this.blurRadiusContainer);
            this.componentsContainer.appendChild(this.spreadRadiusContainer);
        }
    };
    BoxShadowComponent.prototype.getInitialValues = function () {
        var boxShadowString = this.domElementStyleSheet['box-shadow'];
        var color, inset;
        var sizesArr = [];
        if (boxShadowString) {
            if (boxShadowString.split(',').filter(function (ele) { return ele.includes('rgb'); }).length > 1) {
                this.advancedEnabled = true;
            }
            else {
                if (boxShadowString.split(',').length > 1) {
                    this.advancedEnabled = true;
                }
            }
            if (boxShadowString.includes('rgb')) {
                var initialIndexOfRGB = boxShadowString.indexOf('rgb');
                var finalIndexOfRGB = boxShadowString.indexOf(')');
                color = boxShadowString.slice(initialIndexOfRGB, finalIndexOfRGB + 1);
                boxShadowString = boxShadowString.replace(color, '');
            }
            var boxShadowArr = boxShadowString.split(' ');
            inset = boxShadowArr.find(function (ele) { return ele === 'inset'; });
            sizesArr = boxShadowArr.filter(function (ele) { return !isNaN(parseInt(ele)); });
        }
        return {
            color: color,
            inset: inset,
            horizontalOffset: sizesArr[0],
            verticalOffset: sizesArr[1],
            blurRadius: sizesArr[2],
            spreadRadius: sizesArr[3],
        };
    };
    BoxShadowComponent.prototype.classNameUpdated = function (name) {
        this.domElementStyleSheet = _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_4__["default"].getRuleStyles(name);
        this.getInitialValues();
        this.setBoxShadowValuesAccordingToClass();
    };
    return BoxShadowComponent;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BoxShadowComponent);


/***/ }),

/***/ "./src/components/common/components/class-management.component.ts":
/*!************************************************************************!*\
  !*** ./src/components/common/components/class-management.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-stylesheet/css-stylesheet */ "./src/components/css-stylesheet/css-stylesheet.ts");
/* harmony import */ var _html_components_RawHTMLComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../html-components/RawHTMLComponent */ "./src/components/html-components/RawHTMLComponent.ts");
/* harmony import */ var _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/ContainerBuilder */ "./src/components/common/models/ContainerBuilder.ts");
/* harmony import */ var _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/LabelBuilder */ "./src/components/common/models/LabelBuilder.ts");
/* harmony import */ var _models_SelectorFromArrayBuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/SelectorFromArrayBuilder */ "./src/components/common/models/SelectorFromArrayBuilder.ts");
/* harmony import */ var _models_InputBuilder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/InputBuilder */ "./src/components/common/models/InputBuilder.ts");
/* harmony import */ var _models_ButtonBuilder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/ButtonBuilder */ "./src/components/common/models/ButtonBuilder.ts");
/* harmony import */ var _models_SelectorFromEnumBuilder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/SelectorFromEnumBuilder */ "./src/components/common/models/SelectorFromEnumBuilder.ts");
/* harmony import */ var _models_TextAreaBuilder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/TextAreaBuilder */ "./src/components/common/models/TextAreaBuilder.ts");
/* harmony import */ var _enums_style_name_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../enums/style-name.enum */ "./src/components/common/enums/style-name.enum.ts");
/* harmony import */ var _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../enums/display-types.enum */ "./src/components/common/enums/display-types.enum.ts");
/* harmony import */ var _enums_flex_direction_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../enums/flex-direction.enum */ "./src/components/common/enums/flex-direction.enum.ts");
/* harmony import */ var _enums_input_type_enum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../enums/input-type.enum */ "./src/components/common/enums/input-type.enum.ts");
/* harmony import */ var _enums_general_pseudoclass_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../enums/general-pseudoclass.enum */ "./src/components/common/enums/general-pseudoclass.enum.ts");














// TODO: ver estilos especificos para los ancor elements (links):
// eslint-disable-next-line max-len
// https://www.aprenderaprogramar.com/index.php?option=com_content&view=article&id=752:pseudoclases-css-link-visited-focus-hover-y-active-estilos-y-efectos-en-links-propiedad-outline-cu01047d&catid=75&Itemid=203
var ClassManagementComponent = /** @class */ (function () {
    function ClassManagementComponent(domElement, publisher) {
        this.publisher = publisher;
        this.domElement = domElement;
        this.initialClassName = this.domElement.classList[0];
        this.populateClassesList();
        this.populateAppendableClassList();
        this.populateDuplicableClassList();
        this.buildRawClassTextEditor();
        this.populateRawClassTextEditor(this.initialClassName);
        this.addComponents();
    }
    Object.defineProperty(ClassManagementComponent.prototype, "component", {
        get: function () {
            return this.container;
        },
        enumerable: false,
        configurable: true
    });
    ClassManagementComponent.prototype.buildRawClassTextEditor = function () {
        this.rawClassTextEditor = new _models_TextAreaBuilder__WEBPACK_IMPORTED_MODULE_8__["default"]();
    };
    ClassManagementComponent.prototype.populateRawClassTextEditor = function (className) {
        var values = _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_0__["default"].getRules(className).map(function (rule) { return rule.cssText; }).join('\n');
        var modifiedValues = '';
        for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
            var char = values_1[_i];
            if (char === '{' || char === ';' || char === '}') {
                modifiedValues += "".concat(char, "\n ");
            }
            else {
                modifiedValues += char;
            }
        }
        this.rawClassTextEditor
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_9__.StyleNameEnum.height, '100px')
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_9__.StyleNameEnum["font-size"], '10px')
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_9__.StyleNameEnum.resize, 'vertical')
            .setValue(modifiedValues);
    };
    ClassManagementComponent.prototype.populateClassesList = function () {
        var classNames = [];
        this.domElement.classList.forEach(function (classElementName) {
            var rules = _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_0__["default"].getRules(classElementName);
            rules.forEach(function (rule) {
                var ruleName = rule['selectorText'];
                var value;
                if (ruleName[0] === '.' || ruleName[0] === '#') {
                    value = ruleName.substring(1);
                }
                classNames.push({
                    text: ruleName,
                    value: value,
                });
            });
        });
        this.classNames = classNames;
    };
    ClassManagementComponent.prototype.populateDuplicableClassList = function () {
        var duplicableClassNames = [];
        var rules = _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_0__["default"].getAllRules();
        rules.forEach(function (rule) {
            var ruleName = rule['selectorText'];
            var value;
            if (ruleName[0] === '.' || ruleName[0] === '#') {
                value = ruleName.substring(1);
            }
            if (value !== 'body') {
                duplicableClassNames.push({
                    text: ruleName,
                    value: value,
                });
            }
        });
        this.duplicableClassNames = duplicableClassNames;
    };
    ClassManagementComponent.prototype.populateAppendableClassList = function () {
        var _this = this;
        var appendableClassNames = [];
        var rules = _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_0__["default"].getAllRules();
        rules.forEach(function (rule) {
            var ruleName = rule['selectorText'];
            var value;
            if (ruleName[0] === '.' || ruleName[0] === '#') {
                value = ruleName.substring(1);
            }
            if (value !== 'body' && !_this.domElement.classList.contains(value)) {
                appendableClassNames.push({
                    text: ruleName,
                    value: value,
                });
            }
        });
        this.appendableClassNames = appendableClassNames;
    };
    ClassManagementComponent.prototype.addComponents = function () {
        this.updateClassName = this.updateClassName.bind(this);
        this.createNewClassName = this.createNewClassName.bind(this);
        this.removeClass = this.removeClass.bind(this);
        this.changeClassName = this.changeClassName.bind(this);
        this.appendClass = this.appendClass.bind(this);
        this.duplicateClass = this.duplicateClass.bind(this);
        this.changeFullClass = this.changeFullClass.bind(this);
        // Class selector and remove class
        this.classesSelector = new _models_SelectorFromArrayBuilder__WEBPACK_IMPORTED_MODULE_4__["default"](this.classNames)
            .selectOption(this.initialClassName)
            .addEventListener('change', this.updateClassName)
            .build();
        var removeClassButton = new _models_ButtonBuilder__WEBPACK_IMPORTED_MODULE_6__["default"]()
            .setInnerText('Remove')
            .addEventListener('click', this.removeClass)
            .build();
        this.classesSelectorContainer = new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_9__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_10__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_9__.StyleNameEnum["flex-direction"], _enums_flex_direction_enum__WEBPACK_IMPORTED_MODULE_11__.FlexDirectionEnum.column)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_9__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .appendChild(this.classesSelector)
            .appendChild(removeClassButton)
            .build())
            .build();
        // Rename Class
        this.renameClassInput = new _models_InputBuilder__WEBPACK_IMPORTED_MODULE_5__["default"](_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_12__.InputTypeEnum.text)
            .setPlaceholder('New class name')
            .build();
        var renameClassButton = new _models_ButtonBuilder__WEBPACK_IMPORTED_MODULE_6__["default"]()
            .setInnerText('Change')
            .addEventListener('click', this.changeClassName)
            .build();
        var renameClassContainer = new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_9__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_10__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_9__.StyleNameEnum["flex-direction"], _enums_flex_direction_enum__WEBPACK_IMPORTED_MODULE_11__.FlexDirectionEnum.column)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_9__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_3__["default"]()
            .setInnerText('Change Class Name')
            .build())
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_9__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_10__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_9__.StyleNameEnum["flex-direction"], _enums_flex_direction_enum__WEBPACK_IMPORTED_MODULE_11__.FlexDirectionEnum.row)
            .appendChild(this.renameClassInput)
            .appendChild(renameClassButton)
            .build())
            .build();
        // Create Class
        this.newClassNameInput = new _models_InputBuilder__WEBPACK_IMPORTED_MODULE_5__["default"](_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_12__.InputTypeEnum.text)
            .setPlaceholder('Class name')
            .build();
        this.newPseudoclassSelector = new _models_SelectorFromEnumBuilder__WEBPACK_IMPORTED_MODULE_7__["default"](_enums_general_pseudoclass_enum__WEBPACK_IMPORTED_MODULE_13__.GeneralPseudoclassEnum)
            .selectOption(_enums_general_pseudoclass_enum__WEBPACK_IMPORTED_MODULE_13__.GeneralPseudoclassEnum.none)
            .build();
        var createClassButton = new _models_ButtonBuilder__WEBPACK_IMPORTED_MODULE_6__["default"]()
            .setInnerText('Create')
            .addEventListener('click', this.createNewClassName)
            .build();
        var newClassContainer = new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_9__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_10__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_9__.StyleNameEnum["flex-direction"], _enums_flex_direction_enum__WEBPACK_IMPORTED_MODULE_11__.FlexDirectionEnum.column)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_9__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_3__["default"]()
            .setInnerText('Create New Class')
            .build())
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .appendChild(this.newClassNameInput)
            .appendChild(this.newPseudoclassSelector)
            .appendChild(createClassButton)
            .build())
            .build();
        // Duplicate class
        this.duplicableClassSelector = new _models_SelectorFromArrayBuilder__WEBPACK_IMPORTED_MODULE_4__["default"](this.duplicableClassNames)
            .selectOption(this.duplicableClassNames[0].value)
            .build();
        this.newDuplicadedClassNameInput = new _models_InputBuilder__WEBPACK_IMPORTED_MODULE_5__["default"](_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_12__.InputTypeEnum.text)
            .setPlaceholder('Duplicated class name')
            .build();
        var duplicateClassButton = new _models_ButtonBuilder__WEBPACK_IMPORTED_MODULE_6__["default"]()
            .setInnerText('Duplicate')
            .addEventListener('click', this.duplicateClass)
            .build();
        this.duplicatePseudoclassSelector = new _models_SelectorFromEnumBuilder__WEBPACK_IMPORTED_MODULE_7__["default"](_enums_general_pseudoclass_enum__WEBPACK_IMPORTED_MODULE_13__.GeneralPseudoclassEnum)
            .selectOption(_enums_general_pseudoclass_enum__WEBPACK_IMPORTED_MODULE_13__.GeneralPseudoclassEnum.none)
            .build();
        var duplicateClassContainer = new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_9__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_10__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_9__.StyleNameEnum["flex-direction"], _enums_flex_direction_enum__WEBPACK_IMPORTED_MODULE_11__.FlexDirectionEnum.column)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_9__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_3__["default"]()
            .setInnerText('Duplicate Class')
            .build())
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_9__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_10__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_9__.StyleNameEnum["flex-direction"], _enums_flex_direction_enum__WEBPACK_IMPORTED_MODULE_11__.FlexDirectionEnum.row)
            .appendChild(this.duplicableClassSelector)
            .appendChild(this.duplicatePseudoclassSelector)
            .build())
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_9__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_10__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_9__.StyleNameEnum["flex-direction"], _enums_flex_direction_enum__WEBPACK_IMPORTED_MODULE_11__.FlexDirectionEnum.row)
            .appendChild(this.newDuplicadedClassNameInput)
            .appendChild(duplicateClassButton)
            .build())
            .build();
        // Append class
        if (this.appendableClassNames.length > 0) {
            this.appendClassSelector = new _models_SelectorFromArrayBuilder__WEBPACK_IMPORTED_MODULE_4__["default"](this.appendableClassNames)
                .selectOption(this.appendableClassNames[0].value)
                .build();
            var appendClassButton = new _models_ButtonBuilder__WEBPACK_IMPORTED_MODULE_6__["default"]()
                .setInnerText('Append')
                .addEventListener('click', this.appendClass)
                .build();
            this.appendClassContainer = new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
                .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_9__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_10__.DisplayTypesEnum.flex)
                .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_9__.StyleNameEnum["flex-direction"], _enums_flex_direction_enum__WEBPACK_IMPORTED_MODULE_11__.FlexDirectionEnum.column)
                .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_9__.StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_3__["default"]()
                .setInnerText('Append Class')
                .build())
                .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
                .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_9__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_10__.DisplayTypesEnum.flex)
                .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_9__.StyleNameEnum["flex-direction"], _enums_flex_direction_enum__WEBPACK_IMPORTED_MODULE_11__.FlexDirectionEnum.row)
                .appendChild(this.appendClassSelector)
                .appendChild(appendClassButton)
                .build())
                .build();
        }
        // Edit full class
        var rawClassChangeButton = new _models_ButtonBuilder__WEBPACK_IMPORTED_MODULE_6__["default"]()
            .setInnerText('Change Raw Class')
            .addEventListener('click', this.changeFullClass)
            .build();
        var rawClassEditor = new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_9__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_10__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_9__.StyleNameEnum["flex-direction"], _enums_flex_direction_enum__WEBPACK_IMPORTED_MODULE_11__.FlexDirectionEnum.column)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_9__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_3__["default"]()
            .setInnerText('Raw Class Editor')
            .build())
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_9__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_10__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_9__.StyleNameEnum["flex-direction"], _enums_flex_direction_enum__WEBPACK_IMPORTED_MODULE_11__.FlexDirectionEnum.column)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_9__.StyleNameEnum.width, '100%')
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_9__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_10__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_9__.StyleNameEnum["flex-direction"], _enums_flex_direction_enum__WEBPACK_IMPORTED_MODULE_11__.FlexDirectionEnum.column)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_9__.StyleNameEnum.width, '100%')
            .appendChild(this.rawClassTextEditor.build())
            .build())
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .appendChild(rawClassChangeButton)
            .build())
            .build())
            .build();
        // Main container
        this.container = new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_9__.StyleNameEnum.border, '1px solid #4CAF50')
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_9__.StyleNameEnum.padding, '3px')
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_9__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_3__["default"]()
            .setInnerText('Classes Management')
            .build())
            .appendChild(this.classesSelectorContainer)
            .appendChild(renameClassContainer)
            .appendChild(newClassContainer)
            .appendChild(duplicateClassContainer)
            .appendChildIfDefined(this.appendClassContainer)
            .appendChild(rawClassEditor)
            .build();
    };
    ClassManagementComponent.prototype.updateClassName = function () {
        this.populateRawClassTextEditor(this.classesSelector.value);
        this.publisher.notifyClassName(this.classesSelector.value);
    };
    ClassManagementComponent.prototype.createNewClassName = function () {
        try {
            var className_1 = this.newClassNameInput.value;
            var pseudoclass = this.newPseudoclassSelector.value;
            var completeCssName = className_1 + (pseudoclass !== '' && pseudoclass !== 'none' ? ":".concat(pseudoclass) : '');
            if (className_1 === '') {
                throw new Error('Class name can not be an empty string');
            }
            if (!isNaN(parseInt(className_1[0]))) {
                throw new Error('Class name must start with a letter');
            }
            var foundBaseRule = _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_0__["default"].getRuleIndex(className_1);
            var foundRuleWithPseudoclass = _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_0__["default"].getRuleIndex(completeCssName);
            var classNameNotFoundForThisElement_1 = true;
            this.domElement.classList.forEach(function (cn) {
                if (cn === className_1) {
                    classNameNotFoundForThisElement_1 = false;
                }
            });
            if (foundBaseRule >= 0) {
                if (classNameNotFoundForThisElement_1) {
                    throw new Error('Class name already exists for another element');
                }
                else {
                    if (foundRuleWithPseudoclass >= 0) {
                        throw new Error('Class name already exists');
                    }
                }
            }
            this.domElement.classList.add(className_1);
            _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_0__["default"].insertRule(".".concat(completeCssName, " {}"));
            var newOption_1 = document.createElement('option');
            newOption_1.text = ".".concat(completeCssName);
            newOption_1.value = completeCssName;
            this.classesSelector.appendChild(newOption_1);
            var index_1 = 0;
            this.classesSelector.childNodes.forEach(function (child, i) {
                if (child.value === newOption_1.value) {
                    index_1 = i;
                }
            });
            this.newClassNameInput.value = '';
            this.classesSelector.selectedIndex = index_1;
            this.updateClassName();
        }
        catch (error) {
            alert(error.message);
        }
    };
    ClassManagementComponent.prototype.removeClass = function () {
        this.domElement.classList.remove("".concat(this.classesSelector.value));
        _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_0__["default"].removeRule("".concat(this.classesSelector.value));
        this.classesSelector.options.remove(this.classesSelector.selectedIndex);
        if (this.classesSelector.options.length === 0) {
            this.classesSelectorContainer.style.display = 'none';
        }
        if (this.domElement.classList.value === '') {
            this.domElement.removeAttribute('class');
        }
    };
    ClassManagementComponent.prototype.changeClassName = function () {
        var _this = this;
        _html_components_RawHTMLComponent__WEBPACK_IMPORTED_MODULE_1__["default"].instances.forEach(function (instance) {
            instance.classList.replace(_this.classesSelector.value, _this.renameClassInput.value);
        });
        _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_0__["default"].changeRuleName(this.classesSelector.value, this.renameClassInput.value);
        this.populateClassesList();
        this.classesSelector.remove(this.classesSelector.selectedIndex);
        this.appendNewOptionElement(this.renameClassInput.value, this.classesSelector);
        this.renameClassInput.value = '';
        this.populateRawClassTextEditor(this.classesSelector.value);
    };
    ClassManagementComponent.prototype.appendClass = function () {
        // TODO: se muestra la clase .input0:hover para el input0, y no deberia....
        this.domElement.classList.add(this.appendClassSelector.value);
        this.appendNewOptionElement(this.appendClassSelector.value, this.classesSelector);
        this.appendClassSelector.options.remove(this.appendClassSelector.selectedIndex);
        if (this.appendClassSelector.options.length === 0) {
            this.appendClassContainer.style.display = 'none';
        }
        this.populateRawClassTextEditor(this.classesSelector.value);
    };
    ClassManagementComponent.prototype.appendNewOptionElement = function (optionValue, selector) {
        var option = document.createElement('option');
        option.value = optionValue;
        option.text = ".".concat(optionValue);
        selector.appendChild(option);
        selector.selectedIndex = selector.options.length - 1;
    };
    ClassManagementComponent.prototype.duplicateClass = function () {
        this.domElement.classList.add(this.newDuplicadedClassNameInput.value);
        var newClassName;
        if (this.duplicatePseudoclassSelector.value !== 'none') {
            newClassName = "".concat(this.newDuplicadedClassNameInput.value, ":").concat(this.duplicatePseudoclassSelector.value);
        }
        else {
            newClassName = "".concat(this.newDuplicadedClassNameInput.value);
        }
        _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_0__["default"].duplicateRule(this.duplicableClassSelector.value, newClassName);
        this.appendNewOptionElement(newClassName, this.classesSelector);
        this.appendNewOptionElement(newClassName, this.duplicableClassSelector);
        this.newDuplicadedClassNameInput.value = '';
        this.duplicatePseudoclassSelector.value = _enums_general_pseudoclass_enum__WEBPACK_IMPORTED_MODULE_13__.GeneralPseudoclassEnum.none;
        this.populateRawClassTextEditor(this.classesSelector.value);
    };
    ClassManagementComponent.prototype.changeFullClass = function () {
        // eslint-disable-next-line max-len
        // TODO: los valores de la ventana no se van actualizando a medida que se agregan cosas a esa clase, quizas necesitamos un observer, que seria un verdadero quilombassssoooooo...
        var _this = this;
        var input = this.rawClassTextEditor.getValue();
        var regex = /\.([\s\S]*?)\s*\{([\s\S]*?)\}/g;
        var result = [];
        var match;
        var _loop_1 = function () {
            var name_1 = match[1].trim();
            var value = match[2].trim();
            var values = [];
            value.split(';').forEach(function (val) {
                var trimedValue = val.trim();
                if (trimedValue !== '') {
                    values.push(trimedValue);
                }
            });
            result.push({ name: name_1, values: values, raw: match[0] });
        };
        while ((match = regex.exec(input))) {
            _loop_1();
        }
        result.forEach(function (rule) {
            var ruleStyles = _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_0__["default"].getRuleStyles(rule.name);
            if (Object.keys(ruleStyles).length > 0) {
                rule.values.forEach(function (value) {
                    var keyValues = value.split(':').map(function (val) { return val.replace(';', '').trim(); });
                    ruleStyles[keyValues[0]] = keyValues[1];
                });
            }
            else {
                try {
                    _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_0__["default"].insertRule(rule.raw);
                    _this.domElement.classList.add(rule.name);
                    var newOption_2 = document.createElement('option');
                    newOption_2.text = ".".concat(rule.name);
                    newOption_2.value = rule.name;
                    _this.classesSelector.appendChild(newOption_2);
                    var index_2 = 0;
                    _this.classesSelector.childNodes.forEach(function (child, i) {
                        if (child.value === newOption_2.value) {
                            index_2 = i;
                        }
                    });
                    _this.classesSelector.selectedIndex = index_2;
                    _this.updateClassName();
                }
                catch (error) {
                    alert(error.message);
                }
            }
        });
    };
    return ClassManagementComponent;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClassManagementComponent);


/***/ }),

/***/ "./src/components/common/components/display-as-child.component.ts":
/*!************************************************************************!*\
  !*** ./src/components/common/components/display-as-child.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-stylesheet/css-stylesheet */ "./src/components/css-stylesheet/css-stylesheet.ts");
/* harmony import */ var _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/ContainerBuilder */ "./src/components/common/models/ContainerBuilder.ts");
/* harmony import */ var _models_SelectorFromEnumBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/SelectorFromEnumBuilder */ "./src/components/common/models/SelectorFromEnumBuilder.ts");
/* harmony import */ var _models_InputBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/InputBuilder */ "./src/components/common/models/InputBuilder.ts");
/* harmony import */ var _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/LabelBuilder */ "./src/components/common/models/LabelBuilder.ts");
/* harmony import */ var _generic_css_property_mutator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./generic-css-property-mutator.component */ "./src/components/common/components/generic-css-property-mutator.component.ts");
/* harmony import */ var _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../enums/display-types.enum */ "./src/components/common/enums/display-types.enum.ts");
/* harmony import */ var _enums_style_name_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../enums/style-name.enum */ "./src/components/common/enums/style-name.enum.ts");
/* harmony import */ var _enums_align_flex_self_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../enums/align-flex-self.enum */ "./src/components/common/enums/align-flex-self.enum.ts");
/* harmony import */ var _enums_input_type_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../enums/input-type.enum */ "./src/components/common/enums/input-type.enum.ts");
/* harmony import */ var _enums_event_type_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../enums/event-type.enum */ "./src/components/common/enums/event-type.enum.ts");
/* harmony import */ var _enums_justify_grid_self_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../enums/justify-grid-self.enum */ "./src/components/common/enums/justify-grid-self.enum.ts");
/* harmony import */ var _enums_align_grid_self_enum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../enums/align-grid-self.enum */ "./src/components/common/enums/align-grid-self.enum.ts");













var DisplayAsChildComponent = /** @class */ (function () {
    function DisplayAsChildComponent(domElement) {
        this.domElement = domElement;
        this.domElementStyleSheet = _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_0__["default"].getRuleStyles(this.domElement.classList[0]);
        this.container = new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_1__["default"]().build();
        this.flexContainerAsChildren = this.createFlexAsChildrenContainer();
        this.gridContainerAsChildren = this.createGridAsChildrenContainer();
        this.setComponentAccordingToSelector();
    }
    Object.defineProperty(DisplayAsChildComponent.prototype, "component", {
        get: function () {
            return this.container;
        },
        enumerable: false,
        configurable: true
    });
    DisplayAsChildComponent.prototype.setComponentAccordingToSelector = function () {
        if (this.domElement.id !== 'app-container') {
            // NOTE: window.getComputedStyle(domElement) return the active style of that dom element.
            var currentProperties = window.getComputedStyle(this.domElement.parentElement)['display'];
            if (currentProperties === _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_6__.DisplayTypesEnum.flex || currentProperties === _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_6__.DisplayTypesEnum["inline-flex"]) {
                this.resetGrid();
                this.updateFlexComponentsStyleSheet();
                this.setFlexAsChildrenInitialValues();
                this.container.appendChild(this.flexContainerAsChildren);
            }
            else if (currentProperties === _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_6__.DisplayTypesEnum.grid
                || currentProperties === _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_6__.DisplayTypesEnum["inline-grid"]) {
                this.resetFlex();
                this.updateGridComponentsStyleSheet();
                this.setGridAsChildrenInitialValues();
                this.container.appendChild(this.gridContainerAsChildren);
            }
            else {
                this.resetFlex();
                this.resetGrid();
            }
        }
    };
    DisplayAsChildComponent.prototype.createFlexAsChildrenContainer = function () {
        this.alignSelfSelector = new _generic_css_property_mutator_component__WEBPACK_IMPORTED_MODULE_5__["default"](this.domElementStyleSheet, 'align-self', 'Align Self', new _models_SelectorFromEnumBuilder__WEBPACK_IMPORTED_MODULE_2__["default"](_enums_align_flex_self_enum__WEBPACK_IMPORTED_MODULE_8__.AlignFlexSelfEnum)
            .build(), _enums_event_type_enum__WEBPACK_IMPORTED_MODULE_10__.EventTypeEnum.change);
        this.flexGrowInput = new _generic_css_property_mutator_component__WEBPACK_IMPORTED_MODULE_5__["default"](this.domElementStyleSheet, 'flex-grow', 'Flex Grow', new _models_InputBuilder__WEBPACK_IMPORTED_MODULE_3__["default"](_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_9__.InputTypeEnum.number)
            .setMax(1000)
            .setMin(0)
            .build(), _enums_event_type_enum__WEBPACK_IMPORTED_MODULE_10__.EventTypeEnum.input).setZeroValue(0);
        this.flexShrinkInput = new _generic_css_property_mutator_component__WEBPACK_IMPORTED_MODULE_5__["default"](this.domElementStyleSheet, 'flex-shrink', 'Flex Shrink', new _models_InputBuilder__WEBPACK_IMPORTED_MODULE_3__["default"](_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_9__.InputTypeEnum.number)
            .setMax(1000)
            .setMin(0)
            .build(), _enums_event_type_enum__WEBPACK_IMPORTED_MODULE_10__.EventTypeEnum.input).setZeroValue(0);
        this.flexBasisInput = new _generic_css_property_mutator_component__WEBPACK_IMPORTED_MODULE_5__["default"](this.domElementStyleSheet, 'flex-basis', 'Flex Basis(%)', new _models_InputBuilder__WEBPACK_IMPORTED_MODULE_3__["default"](_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_9__.InputTypeEnum.number)
            .setMax(1000)
            .setMin(0)
            .build(), _enums_event_type_enum__WEBPACK_IMPORTED_MODULE_10__.EventTypeEnum.input, '%').setZeroValue(0);
        return new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_1__["default"]()
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_1__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_7__.StyleNameEnum.border, '1px solid #4CAF50')
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_7__.StyleNameEnum.padding, '3px')
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_7__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_1__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_7__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_6__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_7__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_4__["default"]()
            .setInnerText('Display Flex as Child')
            .build())
            .build())
            .appendChild(this.alignSelfSelector.component)
            .appendChild(this.flexGrowInput.component)
            .appendChild(this.flexShrinkInput.component)
            .appendChild(this.flexBasisInput.component)
            .build())
            .build();
    };
    DisplayAsChildComponent.prototype.setFlexAsChildrenInitialValues = function () {
        this.alignSelfSelector.setValue(this.domElementStyleSheet['align-self'] || '');
        this.flexGrowInput.setValue("".concat(parseInt(this.domElementStyleSheet['flex-grow']) || 0));
        this.flexShrinkInput.setValue("".concat(parseInt(this.domElementStyleSheet['flex-shrink']) || 0));
        this.flexBasisInput.setValue("".concat(parseInt(this.domElementStyleSheet['flex-basis']) || 0));
    };
    DisplayAsChildComponent.prototype.createGridAsChildrenContainer = function () {
        this.gridColumnStartInput = new _generic_css_property_mutator_component__WEBPACK_IMPORTED_MODULE_5__["default"](this.domElementStyleSheet, 'grid-column-start', 'Grid Column Start', new _models_InputBuilder__WEBPACK_IMPORTED_MODULE_3__["default"](_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_9__.InputTypeEnum.text).build(), _enums_event_type_enum__WEBPACK_IMPORTED_MODULE_10__.EventTypeEnum.input);
        this.gridColumnEndInput = new _generic_css_property_mutator_component__WEBPACK_IMPORTED_MODULE_5__["default"](this.domElementStyleSheet, 'grid-column-end', 'Grid Column End', new _models_InputBuilder__WEBPACK_IMPORTED_MODULE_3__["default"](_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_9__.InputTypeEnum.text).build(), _enums_event_type_enum__WEBPACK_IMPORTED_MODULE_10__.EventTypeEnum.input);
        this.gridRowStartInput = new _generic_css_property_mutator_component__WEBPACK_IMPORTED_MODULE_5__["default"](this.domElementStyleSheet, 'grid-row-start', 'Grid Row Start', new _models_InputBuilder__WEBPACK_IMPORTED_MODULE_3__["default"](_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_9__.InputTypeEnum.text).build(), _enums_event_type_enum__WEBPACK_IMPORTED_MODULE_10__.EventTypeEnum.input);
        this.gridRowEndInput = new _generic_css_property_mutator_component__WEBPACK_IMPORTED_MODULE_5__["default"](this.domElementStyleSheet, 'grid-row-end', 'Grid Row End', new _models_InputBuilder__WEBPACK_IMPORTED_MODULE_3__["default"](_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_9__.InputTypeEnum.text).build(), _enums_event_type_enum__WEBPACK_IMPORTED_MODULE_10__.EventTypeEnum.input);
        this.gridJustifySelf = new _generic_css_property_mutator_component__WEBPACK_IMPORTED_MODULE_5__["default"](this.domElementStyleSheet, 'justify-self', 'Grid Justify Self', new _models_SelectorFromEnumBuilder__WEBPACK_IMPORTED_MODULE_2__["default"](_enums_justify_grid_self_enum__WEBPACK_IMPORTED_MODULE_11__.JustifyGridSelfEnum).build(), _enums_event_type_enum__WEBPACK_IMPORTED_MODULE_10__.EventTypeEnum.change);
        this.gridAlignSelf = new _generic_css_property_mutator_component__WEBPACK_IMPORTED_MODULE_5__["default"](this.domElementStyleSheet, 'align-self', 'Grid Align Self', new _models_SelectorFromEnumBuilder__WEBPACK_IMPORTED_MODULE_2__["default"](_enums_align_grid_self_enum__WEBPACK_IMPORTED_MODULE_12__.AlignGridSelfEnum).build(), _enums_event_type_enum__WEBPACK_IMPORTED_MODULE_10__.EventTypeEnum.change);
        return new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_1__["default"]()
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_1__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_7__.StyleNameEnum.border, '1px solid #4CAF50')
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_7__.StyleNameEnum.padding, '3px')
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_7__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_1__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_7__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_6__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_7__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_4__["default"]()
            .setInnerText('Display Grid as Child')
            .build())
            .build())
            .appendChild(this.gridColumnStartInput.component)
            .appendChild(this.gridColumnEndInput.component)
            .appendChild(this.gridRowStartInput.component)
            .appendChild(this.gridRowEndInput.component)
            .appendChild(this.gridJustifySelf.component)
            .appendChild(this.gridAlignSelf.component)
            .build())
            .build();
    };
    DisplayAsChildComponent.prototype.setGridAsChildrenInitialValues = function () {
        this.gridColumnStartInput.setValue(this.domElementStyleSheet['grid-column-start'] || '');
        this.gridColumnEndInput.setValue(this.domElementStyleSheet['grid-column-end'] || '');
        this.gridRowStartInput.setValue(this.domElementStyleSheet['grid-row-start'] || '');
        this.gridRowEndInput.setValue(this.domElementStyleSheet['grid-row-end'] || '');
        this.gridJustifySelf.setValue(this.domElementStyleSheet['justify-self'] || '');
        this.gridAlignSelf.setValue(this.domElementStyleSheet['align-self'] || '');
    };
    DisplayAsChildComponent.prototype.resetFlex = function () {
        try {
            this.container.removeChild(this.flexContainerAsChildren);
        }
        catch (err) {
            undefined;
        }
    };
    DisplayAsChildComponent.prototype.resetGrid = function () {
        try {
            this.container.removeChild(this.gridContainerAsChildren);
        }
        catch (err) {
            undefined;
        }
    };
    DisplayAsChildComponent.prototype.classNameUpdated = function (name) {
        this.domElementStyleSheet = _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_0__["default"].getRuleStyles(name);
        this.setComponentAccordingToSelector();
    };
    DisplayAsChildComponent.prototype.updateFlexComponentsStyleSheet = function () {
        this.alignSelfSelector.updateStyleSheet(this.domElementStyleSheet);
        this.flexGrowInput.updateStyleSheet(this.domElementStyleSheet);
        this.flexShrinkInput.updateStyleSheet(this.domElementStyleSheet);
        this.flexBasisInput.updateStyleSheet(this.domElementStyleSheet);
    };
    DisplayAsChildComponent.prototype.updateGridComponentsStyleSheet = function () {
        this.gridColumnStartInput.updateStyleSheet(this.domElementStyleSheet);
        this.gridColumnEndInput.updateStyleSheet(this.domElementStyleSheet);
        this.gridRowStartInput.updateStyleSheet(this.domElementStyleSheet);
        this.gridRowEndInput.updateStyleSheet(this.domElementStyleSheet);
        this.gridJustifySelf.updateStyleSheet(this.domElementStyleSheet);
        this.gridAlignSelf.updateStyleSheet(this.domElementStyleSheet);
    };
    return DisplayAsChildComponent;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisplayAsChildComponent);


/***/ }),

/***/ "./src/components/common/components/display-as-parent.component.ts":
/*!*************************************************************************!*\
  !*** ./src/components/common/components/display-as-parent.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-stylesheet/css-stylesheet */ "./src/components/css-stylesheet/css-stylesheet.ts");
/* harmony import */ var _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/ContainerBuilder */ "./src/components/common/models/ContainerBuilder.ts");
/* harmony import */ var _models_SelectorFromEnumBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/SelectorFromEnumBuilder */ "./src/components/common/models/SelectorFromEnumBuilder.ts");
/* harmony import */ var _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/LabelBuilder */ "./src/components/common/models/LabelBuilder.ts");
/* harmony import */ var _models_InputBuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/InputBuilder */ "./src/components/common/models/InputBuilder.ts");
/* harmony import */ var _models_TextAreaBuilder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/TextAreaBuilder */ "./src/components/common/models/TextAreaBuilder.ts");
/* harmony import */ var _input_with_units_selector_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./input-with-units-selector.component */ "./src/components/common/components/input-with-units-selector.component.ts");
/* harmony import */ var _generic_css_property_mutator_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./generic-css-property-mutator.component */ "./src/components/common/components/generic-css-property-mutator.component.ts");
/* harmony import */ var _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../enums/display-types.enum */ "./src/components/common/enums/display-types.enum.ts");
/* harmony import */ var _enums_flex_direction_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../enums/flex-direction.enum */ "./src/components/common/enums/flex-direction.enum.ts");
/* harmony import */ var _enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../enums/style-name.enum */ "./src/components/common/enums/style-name.enum.ts");
/* harmony import */ var _enums_flex_wrap_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../enums/flex-wrap.enum */ "./src/components/common/enums/flex-wrap.enum.ts");
/* harmony import */ var _enums_align_flex_items_enum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../enums/align-flex-items.enum */ "./src/components/common/enums/align-flex-items.enum.ts");
/* harmony import */ var _enums_justify_flex_content_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../enums/justify-flex-content.enum */ "./src/components/common/enums/justify-flex-content.enum.ts");
/* harmony import */ var _enums_align_flex_content_enum__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../enums/align-flex-content.enum */ "./src/components/common/enums/align-flex-content.enum.ts");
/* harmony import */ var _enums_input_type_enum__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../enums/input-type.enum */ "./src/components/common/enums/input-type.enum.ts");
/* harmony import */ var _enums_event_type_enum__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../enums/event-type.enum */ "./src/components/common/enums/event-type.enum.ts");
/* harmony import */ var _enums_justify_grid_items_enum__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../enums/justify-grid-items.enum */ "./src/components/common/enums/justify-grid-items.enum.ts");
/* harmony import */ var _enums_align_grid_items_enum__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../enums/align-grid-items.enum */ "./src/components/common/enums/align-grid-items.enum.ts");
/* harmony import */ var _enums_justify_grid_content_enum__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../enums/justify-grid-content.enum */ "./src/components/common/enums/justify-grid-content.enum.ts");
/* harmony import */ var _enums_align_grid_content_enum__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../enums/align-grid-content.enum */ "./src/components/common/enums/align-grid-content.enum.ts");
/* harmony import */ var _enums_grid_auto_flow_enum__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../enums/grid-auto-flow.enum */ "./src/components/common/enums/grid-auto-flow.enum.ts");






















var DisplayAsParentComponent = /** @class */ (function () {
    function DisplayAsParentComponent(domElement) {
        this.domElement = domElement;
        this.domElementStyleSheet = _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_0__["default"].getRuleStyles(this.domElement.classList[0]);
        this.addComponents();
    }
    Object.defineProperty(DisplayAsParentComponent.prototype, "component", {
        get: function () {
            return this.container;
        },
        enumerable: false,
        configurable: true
    });
    DisplayAsParentComponent.prototype.addComponents = function () {
        this.updateProperty = this.updateProperty.bind(this);
        this.displaySelector = new _models_SelectorFromEnumBuilder__WEBPACK_IMPORTED_MODULE_2__["default"](_enums_display_types_enum__WEBPACK_IMPORTED_MODULE_8__.DisplayTypesEnum)
            .selectOption(this.getCurrentProperties('display'))
            .addEventListener('change', this.updateProperty)
            .build();
        this.container = new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_1__["default"]()
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_1__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_8__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum["flex-direction"], _enums_flex_direction_enum__WEBPACK_IMPORTED_MODULE_9__.FlexDirectionEnum.column)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum["align-items"], _enums_align_flex_items_enum__WEBPACK_IMPORTED_MODULE_12__.AlignFlexItemsEnum.stretch)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.border, '1px solid #4CAF50')
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.padding, '3px')
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_3__["default"]()
            .setInnerText('Display Settings')
            .build())
            .appendChild(this.displaySelector)
            .build())
            .build();
        this.flexContainerAsParent = this.createFlexAsParentContainer();
        this.gridContainerAsParent = this.createGridAsParentContainer();
        this.setComponentAccordingToSelector();
    };
    DisplayAsParentComponent.prototype.updateProperty = function () {
        this.domElementStyleSheet['display'] = this.displaySelector.value;
        this.setComponentAccordingToSelector(true);
    };
    DisplayAsParentComponent.prototype.getCurrentProperties = function (property) {
        return this.domElementStyleSheet[property];
    };
    DisplayAsParentComponent.prototype.setComponentAccordingToSelector = function (reset) {
        var currentProperties = this.getCurrentProperties('display');
        if (currentProperties === _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_8__.DisplayTypesEnum.flex || currentProperties === _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_8__.DisplayTypesEnum["inline-flex"]) {
            if (reset) {
                this.resetGrid();
            }
            this.updateFlexComponentsStyleSheet();
            this.setFlexAsParentInitialValues();
            this.container.appendChild(this.flexContainerAsParent.build());
        }
        else if (currentProperties === _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_8__.DisplayTypesEnum.grid
            || currentProperties === _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_8__.DisplayTypesEnum["inline-grid"]) {
            if (reset) {
                this.resetFlex();
            }
            this.updateGridComponentsStyleSheet();
            this.setGridAsParentInitialValues();
            this.container.appendChild(this.gridContainerAsParent.build());
        }
        else {
            this.resetFlex();
            this.resetGrid();
        }
    };
    DisplayAsParentComponent.prototype.createFlexAsParentContainer = function () {
        this.flexDirectionSelector = new _generic_css_property_mutator_component__WEBPACK_IMPORTED_MODULE_7__["default"](this.domElementStyleSheet, 'flex-direction', 'Flex Direction', new _models_SelectorFromEnumBuilder__WEBPACK_IMPORTED_MODULE_2__["default"](_enums_flex_direction_enum__WEBPACK_IMPORTED_MODULE_9__.FlexDirectionEnum).build(), _enums_event_type_enum__WEBPACK_IMPORTED_MODULE_16__.EventTypeEnum.change);
        this.flexWrapSelector = new _generic_css_property_mutator_component__WEBPACK_IMPORTED_MODULE_7__["default"](this.domElementStyleSheet, 'flex-wrap', 'Flex Wrap', new _models_SelectorFromEnumBuilder__WEBPACK_IMPORTED_MODULE_2__["default"](_enums_flex_wrap_enum__WEBPACK_IMPORTED_MODULE_11__.FlexWrapEnum).build(), _enums_event_type_enum__WEBPACK_IMPORTED_MODULE_16__.EventTypeEnum.change);
        this.alignItemsSelector = new _generic_css_property_mutator_component__WEBPACK_IMPORTED_MODULE_7__["default"](this.domElementStyleSheet, 'align-items', 'Align Items', new _models_SelectorFromEnumBuilder__WEBPACK_IMPORTED_MODULE_2__["default"](_enums_align_flex_items_enum__WEBPACK_IMPORTED_MODULE_12__.AlignFlexItemsEnum).build(), _enums_event_type_enum__WEBPACK_IMPORTED_MODULE_16__.EventTypeEnum.change);
        this.justifyContentSelector = new _generic_css_property_mutator_component__WEBPACK_IMPORTED_MODULE_7__["default"](this.domElementStyleSheet, 'justify-content', 'Justify Content', new _models_SelectorFromEnumBuilder__WEBPACK_IMPORTED_MODULE_2__["default"](_enums_justify_flex_content_enum__WEBPACK_IMPORTED_MODULE_13__.JustifyFlexContentEnum).build(), _enums_event_type_enum__WEBPACK_IMPORTED_MODULE_16__.EventTypeEnum.change);
        this.alignContentSelector = new _generic_css_property_mutator_component__WEBPACK_IMPORTED_MODULE_7__["default"](this.domElementStyleSheet, 'align-content', 'Align Content', new _models_SelectorFromEnumBuilder__WEBPACK_IMPORTED_MODULE_2__["default"](_enums_align_flex_content_enum__WEBPACK_IMPORTED_MODULE_14__.AlignFlexContentEnum).build(), _enums_event_type_enum__WEBPACK_IMPORTED_MODULE_16__.EventTypeEnum.change);
        return new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_1__["default"]()
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_1__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.border, '1px solid #4CAF50')
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.padding, '3px')
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_1__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_8__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_3__["default"]()
            .setInnerText('Display Flex as Parent')
            .build())
            .build())
            .appendChild(this.flexDirectionSelector.component)
            .appendChild(this.flexWrapSelector.component)
            .appendChild(this.alignItemsSelector.component)
            .appendChild(this.justifyContentSelector.component)
            .appendChild(this.alignContentSelector.component)
            .build());
    };
    DisplayAsParentComponent.prototype.setFlexAsParentInitialValues = function () {
        this.flexDirectionSelector.setValue(this.domElementStyleSheet['flex-direction'] || '');
        this.flexWrapSelector.setValue(this.domElementStyleSheet['flex-wrap'] || '');
        this.alignItemsSelector.setValue(this.domElementStyleSheet['align-items'] || '');
        this.justifyContentSelector.setValue(this.domElementStyleSheet['justify-content'] || '');
        this.alignContentSelector.setValue(this.domElementStyleSheet['align-content'] || '');
    };
    DisplayAsParentComponent.prototype.createGridAsParentContainer = function () {
        this.gridTemplateColumnsInput = new _generic_css_property_mutator_component__WEBPACK_IMPORTED_MODULE_7__["default"](this.domElementStyleSheet, 'grid-template-columns', 'Grid Template Columns', new _models_InputBuilder__WEBPACK_IMPORTED_MODULE_4__["default"](_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_15__.InputTypeEnum.text).build(), _enums_event_type_enum__WEBPACK_IMPORTED_MODULE_16__.EventTypeEnum.input);
        this.gridTemplateRowsInput = new _generic_css_property_mutator_component__WEBPACK_IMPORTED_MODULE_7__["default"](this.domElementStyleSheet, 'grid-template-rows', 'Grid Template Rows', new _models_InputBuilder__WEBPACK_IMPORTED_MODULE_4__["default"](_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_15__.InputTypeEnum.text).build(), _enums_event_type_enum__WEBPACK_IMPORTED_MODULE_16__.EventTypeEnum.input);
        this.gridAutoColumnsInput = new _generic_css_property_mutator_component__WEBPACK_IMPORTED_MODULE_7__["default"](this.domElementStyleSheet, 'grid-auto-columns', 'Grid Auto Columns', new _models_InputBuilder__WEBPACK_IMPORTED_MODULE_4__["default"](_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_15__.InputTypeEnum.text).build(), _enums_event_type_enum__WEBPACK_IMPORTED_MODULE_16__.EventTypeEnum.input);
        this.gridAutoRowsInput = new _generic_css_property_mutator_component__WEBPACK_IMPORTED_MODULE_7__["default"](this.domElementStyleSheet, 'grid-auto-rows', 'Grid Auto Rows', new _models_InputBuilder__WEBPACK_IMPORTED_MODULE_4__["default"](_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_15__.InputTypeEnum.text).build(), _enums_event_type_enum__WEBPACK_IMPORTED_MODULE_16__.EventTypeEnum.input);
        this.gridTemplateAreasTextarea = new _generic_css_property_mutator_component__WEBPACK_IMPORTED_MODULE_7__["default"](this.domElementStyleSheet, 'grid-template-areas', 'Grid Template Areas', new _models_TextAreaBuilder__WEBPACK_IMPORTED_MODULE_5__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.resize, 'vertical')
            .build(), _enums_event_type_enum__WEBPACK_IMPORTED_MODULE_16__.EventTypeEnum.input);
        this.gridJustifyItemsSelector = new _generic_css_property_mutator_component__WEBPACK_IMPORTED_MODULE_7__["default"](this.domElementStyleSheet, 'justify-items', 'Grid Justify Items', new _models_SelectorFromEnumBuilder__WEBPACK_IMPORTED_MODULE_2__["default"](_enums_justify_grid_items_enum__WEBPACK_IMPORTED_MODULE_17__.JustifyGridItemsEnum).build(), _enums_event_type_enum__WEBPACK_IMPORTED_MODULE_16__.EventTypeEnum.change);
        this.gridAlignItemsSelector = new _generic_css_property_mutator_component__WEBPACK_IMPORTED_MODULE_7__["default"](this.domElementStyleSheet, 'align-items', 'Grid Align Items', new _models_SelectorFromEnumBuilder__WEBPACK_IMPORTED_MODULE_2__["default"](_enums_align_grid_items_enum__WEBPACK_IMPORTED_MODULE_18__.AlignGridItemsEnum).build(), _enums_event_type_enum__WEBPACK_IMPORTED_MODULE_16__.EventTypeEnum.change);
        this.gridJustifyContentSelector = new _generic_css_property_mutator_component__WEBPACK_IMPORTED_MODULE_7__["default"](this.domElementStyleSheet, 'justify-content', 'Grid Justify Content', new _models_SelectorFromEnumBuilder__WEBPACK_IMPORTED_MODULE_2__["default"](_enums_justify_grid_content_enum__WEBPACK_IMPORTED_MODULE_19__.JustifyGridContentEnum).build(), _enums_event_type_enum__WEBPACK_IMPORTED_MODULE_16__.EventTypeEnum.change);
        this.gridAlignContentSelector = new _generic_css_property_mutator_component__WEBPACK_IMPORTED_MODULE_7__["default"](this.domElementStyleSheet, 'align-content', 'Grid Align Content', new _models_SelectorFromEnumBuilder__WEBPACK_IMPORTED_MODULE_2__["default"](_enums_align_grid_content_enum__WEBPACK_IMPORTED_MODULE_20__.AlignGridContentEnum).build(), _enums_event_type_enum__WEBPACK_IMPORTED_MODULE_16__.EventTypeEnum.change);
        this.gridAutoFlowSelector = new _generic_css_property_mutator_component__WEBPACK_IMPORTED_MODULE_7__["default"](this.domElementStyleSheet, 'grid-auto-flow', 'Grid Auto Flow', new _models_SelectorFromEnumBuilder__WEBPACK_IMPORTED_MODULE_2__["default"](_enums_grid_auto_flow_enum__WEBPACK_IMPORTED_MODULE_21__.GridAutoFlowEnum).build(), _enums_event_type_enum__WEBPACK_IMPORTED_MODULE_16__.EventTypeEnum.change);
        this.gridColumnGapInput = new _input_with_units_selector_component__WEBPACK_IMPORTED_MODULE_6__["default"](this.domElementStyleSheet, 'column-gap', 'Grid Column Gap')
            .setMinValue(0)
            .setZeroValue(0);
        this.gridRowGapInput = new _input_with_units_selector_component__WEBPACK_IMPORTED_MODULE_6__["default"](this.domElementStyleSheet, 'row-gap', 'Grid Row Gap')
            .setMinValue(0)
            .setZeroValue(0);
        return new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_1__["default"]()
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_1__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.border, '1px solid #4CAF50')
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.padding, '3px')
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_1__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_8__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_3__["default"]()
            .setInnerText('Display Grid as Parent')
            .build())
            .build())
            .appendChild(this.gridTemplateColumnsInput.component)
            .appendChild(this.gridTemplateRowsInput.component)
            .appendChild(this.gridAutoColumnsInput.component)
            .appendChild(this.gridAutoRowsInput.component)
            .appendChild(this.gridTemplateAreasTextarea.component)
            .appendChild(this.gridJustifyItemsSelector.component)
            .appendChild(this.gridAlignItemsSelector.component)
            .appendChild(this.gridJustifyContentSelector.component)
            .appendChild(this.gridAlignContentSelector.component)
            .appendChild(this.gridAutoFlowSelector.component)
            .appendChild(this.gridColumnGapInput.component)
            .appendChild(this.gridRowGapInput.component)
            .build());
    };
    DisplayAsParentComponent.prototype.setGridAsParentInitialValues = function () {
        this.gridTemplateColumnsInput.setValue(this.domElementStyleSheet['grid-template-columns'] || '');
        this.gridTemplateRowsInput.setValue(this.domElementStyleSheet['grid-template-rows'] || '');
        this.gridAutoColumnsInput.setValue(this.domElementStyleSheet['grid-auto-columns'] || '');
        this.gridAutoRowsInput.setValue(this.domElementStyleSheet['grid-auto-rows'] || '');
        this.gridTemplateAreasTextarea.setValue(this.domElementStyleSheet['grid-template-areas'] || '');
        this.gridJustifyItemsSelector.setValue(this.domElementStyleSheet['justify-items'] || '');
        this.gridAlignItemsSelector.setValue(this.domElementStyleSheet['align-items'] || '');
        this.gridJustifyContentSelector.setValue(this.domElementStyleSheet['justify-content'] || '');
        this.gridAlignContentSelector.setValue(this.domElementStyleSheet['align-content'] || '');
        this.gridAutoFlowSelector.setValue(this.domElementStyleSheet['grid-auto-flow'] || '');
    };
    DisplayAsParentComponent.prototype.resetFlex = function () {
        try {
            this.container.removeChild(this.flexContainerAsParent.build());
        }
        catch (err) {
            undefined;
        }
        finally {
            this.domElementStyleSheet['flex-direction'] = '';
            this.domElementStyleSheet['flex-wrap'] = '';
            this.domElementStyleSheet['align-items'] = '';
            this.domElementStyleSheet['justify-content'] = '';
            this.domElementStyleSheet['align-content'] = '';
            // NOTE: decision: delete only children styles for classes named as the component id.
            this.domElement.childNodes.forEach(function (child) {
                _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_0__["default"].getRuleStyles(child['name'])['align-self'] = '';
                _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_0__["default"].getRuleStyles(child['name'])['flex-grow'] = '';
                _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_0__["default"].getRuleStyles(child['name'])['flex-shrink'] = '';
                _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_0__["default"].getRuleStyles(child['name'])['flex-basis'] = '';
            });
        }
    };
    DisplayAsParentComponent.prototype.resetGrid = function () {
        try {
            this.container.removeChild(this.gridContainerAsParent.build());
        }
        catch (err) {
            undefined;
        }
        finally {
            this.domElementStyleSheet['grid-template-columns'] = '';
            this.domElementStyleSheet['grid-template-rows'] = '';
            this.domElementStyleSheet['grid-auto-columns'] = '';
            this.domElementStyleSheet['grid-auto-rows'] = '';
            this.domElementStyleSheet['grid-template-areas'] = '';
            this.domElementStyleSheet['justify-items'] = '';
            this.domElementStyleSheet['grid-auto-flow'] = '';
            this.domElementStyleSheet['column-gap'] = '';
            this.domElementStyleSheet['row-gap'] = '';
            this.domElementStyleSheet['align-items'] = '';
            this.domElementStyleSheet['justify-content'] = '';
            this.domElementStyleSheet['align-content'] = '';
            // NOTE: decision: delete only children styles for classes named as the component id.
            this.domElement.childNodes.forEach(function (child) {
                _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_0__["default"].getRuleStyles(child['name'])['grid-column-start'] = '';
                _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_0__["default"].getRuleStyles(child['name'])['grid-column-end'] = '';
                _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_0__["default"].getRuleStyles(child['name'])['grid-row-start'] = '';
                _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_0__["default"].getRuleStyles(child['name'])['grid-row-end'] = '';
                _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_0__["default"].getRuleStyles(child['name'])['justify-self'] = '';
                _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_0__["default"].getRuleStyles(child['name'])['align-self'] = '';
            });
        }
    };
    DisplayAsParentComponent.prototype.classNameUpdated = function (name) {
        this.domElementStyleSheet = _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_0__["default"].getRuleStyles(name);
        var currentProperties = this.getCurrentProperties('display');
        this.displaySelector.value = currentProperties;
        this.setComponentAccordingToSelector(true);
    };
    DisplayAsParentComponent.prototype.updateFlexComponentsStyleSheet = function () {
        this.flexDirectionSelector.updateStyleSheet(this.domElementStyleSheet);
        this.flexWrapSelector.updateStyleSheet(this.domElementStyleSheet);
        this.alignItemsSelector.updateStyleSheet(this.domElementStyleSheet);
        this.justifyContentSelector.updateStyleSheet(this.domElementStyleSheet);
        this.alignContentSelector.updateStyleSheet(this.domElementStyleSheet);
    };
    DisplayAsParentComponent.prototype.updateGridComponentsStyleSheet = function () {
        this.gridTemplateColumnsInput.updateStyleSheet(this.domElementStyleSheet);
        this.gridTemplateRowsInput.updateStyleSheet(this.domElementStyleSheet);
        this.gridAutoColumnsInput.updateStyleSheet(this.domElementStyleSheet);
        this.gridAutoRowsInput.updateStyleSheet(this.domElementStyleSheet);
        this.gridTemplateAreasTextarea.updateStyleSheet(this.domElementStyleSheet);
        this.gridJustifyItemsSelector.updateStyleSheet(this.domElementStyleSheet);
        this.gridAlignItemsSelector.updateStyleSheet(this.domElementStyleSheet);
        this.gridJustifyContentSelector.updateStyleSheet(this.domElementStyleSheet);
        this.gridAlignContentSelector.updateStyleSheet(this.domElementStyleSheet);
        this.gridAutoFlowSelector.updateStyleSheet(this.domElementStyleSheet);
        this.gridColumnGapInput.updateStyleSheet(this.domElementStyleSheet);
        this.gridRowGapInput.updateStyleSheet(this.domElementStyleSheet);
    };
    return DisplayAsParentComponent;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisplayAsParentComponent);


/***/ }),

/***/ "./src/components/common/components/font.components.ts":
/*!*************************************************************!*\
  !*** ./src/components/common/components/font.components.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/ContainerBuilder */ "./src/components/common/models/ContainerBuilder.ts");
/* harmony import */ var _models_InputBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/InputBuilder */ "./src/components/common/models/InputBuilder.ts");
/* harmony import */ var _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/LabelBuilder */ "./src/components/common/models/LabelBuilder.ts");
/* harmony import */ var _models_SelectorFromEnumBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/SelectorFromEnumBuilder */ "./src/components/common/models/SelectorFromEnumBuilder.ts");
/* harmony import */ var _models_ButtonBuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/ButtonBuilder */ "./src/components/common/models/ButtonBuilder.ts");
/* harmony import */ var _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../css-stylesheet/css-stylesheet */ "./src/components/css-stylesheet/css-stylesheet.ts");
/* harmony import */ var _functions_get_css_unit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../functions/get-css-unit */ "./src/components/common/functions/get-css-unit.ts");
/* harmony import */ var _functions_rgb_to_hex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../functions/rgb-to-hex */ "./src/components/common/functions/rgb-to-hex.ts");
/* harmony import */ var _enums_input_type_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../enums/input-type.enum */ "./src/components/common/enums/input-type.enum.ts");
/* harmony import */ var _enums_units_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../enums/units.enum */ "./src/components/common/enums/units.enum.ts");
/* harmony import */ var _enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../enums/style-name.enum */ "./src/components/common/enums/style-name.enum.ts");
/* harmony import */ var _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../enums/display-types.enum */ "./src/components/common/enums/display-types.enum.ts");
/* harmony import */ var _enums_fonts_enum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../enums/fonts.enum */ "./src/components/common/enums/fonts.enum.ts");
/* harmony import */ var _enums_font_styles_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../enums/font-styles.enum */ "./src/components/common/enums/font-styles.enum.ts");
/* harmony import */ var _enums_font_weight_enum__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../enums/font-weight.enum */ "./src/components/common/enums/font-weight.enum.ts");
/* harmony import */ var _enums_font_variant_enum__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../enums/font-variant.enum */ "./src/components/common/enums/font-variant.enum.ts");
















// TODO: hacer mas bello el contenedor de todas las fuentes que tiene el elemento
// TODO: ver si se pueden agregar fuentes de Google, por ejemplo... como hacerlo...
var FontComponent = /** @class */ (function () {
    function FontComponent(domElement) {
        this.currentFontFamiliesArray = [];
        this.domElement = domElement;
        this.domElementStyleSheet = _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_5__["default"].getRuleStyles(this.domElement.classList[0]);
        this.addComponents();
    }
    Object.defineProperty(FontComponent.prototype, "component", {
        get: function () {
            return this.container;
        },
        enumerable: false,
        configurable: true
    });
    FontComponent.prototype.addComponents = function () {
        this.addFont = this.addFont.bind(this);
        this.removeFont = this.removeFont.bind(this);
        this.moveFontToTheFront = this.moveFontToTheFront.bind(this);
        this.moveFontBehind = this.moveFontBehind.bind(this);
        this.updateFontSize = this.updateFontSize.bind(this);
        this.updateFontStyle = this.updateFontStyle.bind(this);
        this.updateFontWeight = this.updateFontWeight.bind(this);
        this.updateFontVarian = this.updateFontVarian.bind(this);
        this.updateFontColor = this.updateFontColor.bind(this);
        this.buildAllComponents();
        this.setInitialValuesAccordingToClass();
        var addFontButton = new _models_ButtonBuilder__WEBPACK_IMPORTED_MODULE_4__["default"]()
            .setInnerText('Add')
            .addEventListener('click', this.addFont)
            .build();
        var fontFamilyComponentsContainer = new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_11__.DisplayTypesEnum.flex)
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setInnerText('Add Font Family')
            .build())
            .build())
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_11__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(this.fontSelector)
            .appendChild(addFontButton)
            .build())
            .build();
        this.currentFontsContainer = this.currentFontsComponentsContainer();
        var fontSizeContainer = new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_11__.DisplayTypesEnum.flex)
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setInnerText('Font Size')
            .build())
            .build())
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_11__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(this.fontSizeInput)
            .appendChild(this.fontUnitSelector)
            .build())
            .build();
        var fontStyleContainer = new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_11__.DisplayTypesEnum.flex)
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setInnerText('Font Style')
            .build())
            .build())
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_11__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(this.fontStyleSelector)
            .build())
            .build();
        var fontWeightContainer = new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_11__.DisplayTypesEnum.flex)
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setInnerText('Font Weight')
            .build())
            .build())
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_11__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(this.fontWeightSelector)
            .build())
            .build();
        var fontVariantContainer = new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_11__.DisplayTypesEnum.flex)
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setInnerText('Font Variant')
            .build())
            .build())
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_11__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(this.fontVariantSelector)
            .build())
            .build();
        var fontColorContainer = new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_11__.DisplayTypesEnum.flex)
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setInnerText('Font Color')
            .build())
            .build())
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_11__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(this.fontColorInput)
            .build())
            .build();
        this.container = new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.border, '1px solid #4CAF50')
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.padding, '3px')
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setInnerText('Font')
            .build())
            .appendChild(fontFamilyComponentsContainer)
            .appendChildIfDefined(this.currentFontsContainer.build())
            .appendChild(fontSizeContainer)
            .appendChild(fontStyleContainer)
            .appendChild(fontWeightContainer)
            .appendChild(fontVariantContainer)
            .appendChild(fontColorContainer)
            .build();
    };
    FontComponent.prototype.buildAllComponents = function () {
        this.fontSelector = new _models_SelectorFromEnumBuilder__WEBPACK_IMPORTED_MODULE_3__["default"](_enums_fonts_enum__WEBPACK_IMPORTED_MODULE_12__.FontsEnum)
            .selectOption(_enums_fonts_enum__WEBPACK_IMPORTED_MODULE_12__.FontsEnum["default"])
            .build();
        this.currentFontsElementsContainer = new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.fontSizeInput = new _models_InputBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_8__.InputTypeEnum.number)
            .setMin(0)
            .addEventListener('input', this.updateFontSize)
            .build();
        this.fontUnitSelector = new _models_SelectorFromEnumBuilder__WEBPACK_IMPORTED_MODULE_3__["default"](_enums_units_enum__WEBPACK_IMPORTED_MODULE_9__.UnitsEnum)
            .addEventListener('change', this.updateFontSize)
            .build();
        this.fontStyleSelector = new _models_SelectorFromEnumBuilder__WEBPACK_IMPORTED_MODULE_3__["default"](_enums_font_styles_enum__WEBPACK_IMPORTED_MODULE_13__.FontStylesEnum)
            .addEventListener('change', this.updateFontStyle)
            .build();
        this.fontWeightSelector = new _models_SelectorFromEnumBuilder__WEBPACK_IMPORTED_MODULE_3__["default"](_enums_font_weight_enum__WEBPACK_IMPORTED_MODULE_14__.FontWeightEnum)
            .addEventListener('change', this.updateFontWeight)
            .build();
        this.fontVariantSelector = new _models_SelectorFromEnumBuilder__WEBPACK_IMPORTED_MODULE_3__["default"](_enums_font_variant_enum__WEBPACK_IMPORTED_MODULE_15__.FontVariantEnum)
            .addEventListener('change', this.updateFontVarian)
            .build();
        this.fontColorInput = new _models_InputBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_8__.InputTypeEnum.color)
            .addEventListener('input', this.updateFontColor)
            .build();
    };
    FontComponent.prototype.setInitialValuesAccordingToClass = function () {
        this.setFontFamilyValueAccordingToClass();
        this.fillContainerAccordingToInitialValues();
        this.setFontSizeValueAccordingToClass();
        this.setFontStyleValueAccordingToClass();
        this.setFontWeightValueAccordingToClass();
        this.setFontVariantValueAccordingToClass();
        this.setFontColorValueAccordingToClass();
    };
    FontComponent.prototype.setFontFamilyValueAccordingToClass = function () {
        var fonts = this.domElementStyleSheet['font-family'];
        if (fonts) {
            this.currentFontFamiliesArray = fonts.split(', ');
        }
    };
    FontComponent.prototype.fillContainerAccordingToInitialValues = function () {
        var _this = this;
        if (this.currentFontFamiliesArray) {
            this.currentFontFamiliesArray.forEach(function (font) {
                _this.currentFontsElementsContainer.appendChild(_this.fontFamilyComponent(font.trim()));
            });
        }
    };
    FontComponent.prototype.setFontSizeValueAccordingToClass = function () {
        var fontSize = this.domElementStyleSheet['font-size'];
        this.fontSizeInput.value = "".concat(parseInt(fontSize) || 1);
        this.fontUnitSelector.value = (0,_functions_get_css_unit__WEBPACK_IMPORTED_MODULE_6__["default"])(fontSize, _enums_units_enum__WEBPACK_IMPORTED_MODULE_9__.UnitsEnum.em);
    };
    FontComponent.prototype.setFontStyleValueAccordingToClass = function () {
        var fontStyle = this.domElementStyleSheet['font-style'];
        this.fontStyleSelector.value = fontStyle === '' ? 'normal' : fontStyle;
    };
    FontComponent.prototype.setFontWeightValueAccordingToClass = function () {
        var fontWeight = this.domElementStyleSheet['font-weight'];
        this.fontWeightSelector.value = fontWeight === '' ? 'normal' : fontWeight;
    };
    FontComponent.prototype.setFontVariantValueAccordingToClass = function () {
        var fontVariant = this.domElementStyleSheet['font-variant'];
        this.fontVariantSelector.value = fontVariant === '' ? 'normal' : fontVariant;
    };
    FontComponent.prototype.setFontColorValueAccordingToClass = function () {
        var fontColor = this.domElementStyleSheet['color'];
        this.fontColorInput.value = (0,_functions_rgb_to_hex__WEBPACK_IMPORTED_MODULE_7__["default"])(fontColor);
    };
    FontComponent.prototype.fontFamilyComponent = function (font) {
        return new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setName(font)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_11__.DisplayTypesEnum.grid)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum["grid-template-columns"], '2fr 1fr 1fr 1fr')
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setInnerText(font)
            .build())
            .appendChild(new _models_ButtonBuilder__WEBPACK_IMPORTED_MODULE_4__["default"]()
            .setInnerText('Remove')
            .setName(font)
            .addEventListener('click', this.removeFont)
            .build())
            .appendChild(new _models_ButtonBuilder__WEBPACK_IMPORTED_MODULE_4__["default"]()
            .setInnerText('↑')
            .setName(font)
            .addEventListener('click', this.moveFontToTheFront)
            .build())
            .appendChild(new _models_ButtonBuilder__WEBPACK_IMPORTED_MODULE_4__["default"]()
            .setInnerText('↓')
            .setName(font)
            .addEventListener('click', this.moveFontBehind)
            .build())
            .build();
    };
    FontComponent.prototype.currentFontsComponentsContainer = function () {
        var container = new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_11__.DisplayTypesEnum.flex)
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setInnerText('Current Component Fonts')
            .build())
            .build())
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(this.currentFontsElementsContainer.build())
            .build());
        if (this.currentFontFamiliesArray.length > 0) {
            container.setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.display, 'block');
        }
        else {
            container.setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.display, 'none');
        }
        return container;
    };
    FontComponent.prototype.addFont = function () {
        if (!this.currentFontFamiliesArray.includes(this.fontSelector.value)) {
            this.currentFontFamiliesArray.push(this.fontSelector.value);
            this.domElementStyleSheet['font-family'] = this.currentFontFamiliesArray.join(', ');
            this.currentFontsElementsContainer.appendChild(this.fontFamilyComponent(this.fontSelector.value));
            this.currentFontsContainer.setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.display, 'block');
        }
    };
    FontComponent.prototype.removeFont = function (event) {
        var fontName = event.target['name'];
        var fontIndex = this.currentFontFamiliesArray.findIndex(function (font) { return font === fontName; });
        this.currentFontFamiliesArray.splice(fontIndex, 1);
        this.domElementStyleSheet['font-family'] = this.currentFontFamiliesArray.join(', ');
        this.currentFontsElementsContainer.removeChildNodeByName(fontName);
        if (this.currentFontsElementsContainer.getAllChilds().length === 0) {
            this.currentFontsContainer.setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_10__.StyleNameEnum.display, 'none');
        }
    };
    FontComponent.prototype.moveFontToTheFront = function (event) {
        var fontName = event.target['name'];
        var fontIndex = this.currentFontFamiliesArray.findIndex(function (font) { return font === fontName; });
        var selectedElement = this.currentFontFamiliesArray.splice(fontIndex, 1)[0];
        this.currentFontFamiliesArray.splice(fontIndex - 1, 0, selectedElement);
        this.domElementStyleSheet['font-family'] = this.currentFontFamiliesArray.map(function (font) { return font; }).join(', ');
        this.currentFontsElementsContainer.mooveChildUpperPositionByName(fontName);
    };
    FontComponent.prototype.moveFontBehind = function (event) {
        var fontName = event.target['name'];
        var fontIndex = this.currentFontFamiliesArray.findIndex(function (font) { return font === fontName; });
        var selectedElement = this.currentFontFamiliesArray.splice(fontIndex, 1)[0];
        this.currentFontFamiliesArray.splice(fontIndex + 1, 0, selectedElement);
        this.domElementStyleSheet['font-family'] = this.currentFontFamiliesArray.map(function (font) { return font; }).join(', ');
        this.currentFontsElementsContainer.mooveChildLowerPositionByName(fontName);
    };
    FontComponent.prototype.updateFontSize = function () {
        this.domElementStyleSheet['font-size'] = "".concat(this.fontSizeInput.value).concat(this.fontUnitSelector.value);
    };
    FontComponent.prototype.updateFontStyle = function () {
        this.domElementStyleSheet['font-style'] = this.fontStyleSelector.value;
    };
    FontComponent.prototype.updateFontWeight = function () {
        this.domElementStyleSheet['font-weight'] = this.fontWeightSelector.value;
    };
    FontComponent.prototype.updateFontVarian = function () {
        this.domElementStyleSheet['font-variant'] = this.fontVariantSelector.value;
    };
    FontComponent.prototype.updateFontColor = function () {
        this.domElementStyleSheet['color'] = this.fontColorInput.value;
    };
    FontComponent.prototype.classNameUpdated = function (name) {
        this.domElementStyleSheet = _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_5__["default"].getRuleStyles(name);
        this.setInitialValuesAccordingToClass();
    };
    return FontComponent;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FontComponent);


/***/ }),

/***/ "./src/components/common/components/generic-css-property-mutator.component.ts":
/*!************************************************************************************!*\
  !*** ./src/components/common/components/generic-css-property-mutator.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/ContainerBuilder */ "./src/components/common/models/ContainerBuilder.ts");
/* harmony import */ var _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/LabelBuilder */ "./src/components/common/models/LabelBuilder.ts");
/* harmony import */ var _enums_style_name_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums/style-name.enum */ "./src/components/common/enums/style-name.enum.ts");
/* harmony import */ var _enums_flex_direction_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums/flex-direction.enum */ "./src/components/common/enums/flex-direction.enum.ts");
/* harmony import */ var _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../enums/display-types.enum */ "./src/components/common/enums/display-types.enum.ts");
/* harmony import */ var _enums_align_flex_items_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../enums/align-flex-items.enum */ "./src/components/common/enums/align-flex-items.enum.ts");






var GenericCssPropertyMutatorComponent = /** @class */ (function () {
    function GenericCssPropertyMutatorComponent(domElementStyleSheet, style, label, changeElement, eventType, unit) {
        if (unit === void 0) { unit = ''; }
        this.style = style;
        this.label = label;
        this.domElementStyleSheet = domElementStyleSheet;
        this.changeElement = changeElement;
        this.eventType = eventType;
        this.unit = unit;
        this.addComponents();
    }
    Object.defineProperty(GenericCssPropertyMutatorComponent.prototype, "component", {
        get: function () {
            return this.container;
        },
        enumerable: false,
        configurable: true
    });
    GenericCssPropertyMutatorComponent.prototype.addComponents = function () {
        this.updateProperty = this.updateProperty.bind(this);
        this.changeElement.addEventListener(this.eventType, this.updateProperty);
        this.container = new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_2__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_4__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_2__.StyleNameEnum["flex-direction"], _enums_flex_direction_enum__WEBPACK_IMPORTED_MODULE_3__.FlexDirectionEnum.column)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_2__.StyleNameEnum["align-items"], _enums_align_flex_items_enum__WEBPACK_IMPORTED_MODULE_5__.AlignFlexItemsEnum.stretch)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_2__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_1__["default"]()
            .setInnerText(this.label)
            .build())
            .appendChild(this.changeElement)
            .build();
    };
    GenericCssPropertyMutatorComponent.prototype.setValue = function (value) {
        if (value === void 0) { value = 'string'; }
        this.changeElement.value = value;
    };
    GenericCssPropertyMutatorComponent.prototype.updateStyleSheet = function (domElementStyleSheet) {
        this.domElementStyleSheet = domElementStyleSheet;
    };
    GenericCssPropertyMutatorComponent.prototype.updateProperty = function () {
        if (parseInt(this.changeElement.value) === this.zeroValue) {
            this.domElementStyleSheet[this.style] = '';
            return;
        }
        this.domElementStyleSheet[this.style] = this.changeElement.value + this.unit;
    };
    GenericCssPropertyMutatorComponent.prototype.setZeroValue = function (value) {
        this.zeroValue = value;
        return this;
    };
    return GenericCssPropertyMutatorComponent;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GenericCssPropertyMutatorComponent);


/***/ }),

/***/ "./src/components/common/components/generic-primary-input.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/components/common/components/generic-primary-input.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/ContainerBuilder */ "./src/components/common/models/ContainerBuilder.ts");
/* harmony import */ var _models_InputBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/InputBuilder */ "./src/components/common/models/InputBuilder.ts");
/* harmony import */ var _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/LabelBuilder */ "./src/components/common/models/LabelBuilder.ts");
/* harmony import */ var _models_ButtonBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/ButtonBuilder */ "./src/components/common/models/ButtonBuilder.ts");
/* harmony import */ var _enums_style_name_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../enums/style-name.enum */ "./src/components/common/enums/style-name.enum.ts");
/* harmony import */ var _enums_input_type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../enums/input-type.enum */ "./src/components/common/enums/input-type.enum.ts");






var GenericPrimaryInputComponent = /** @class */ (function () {
    function GenericPrimaryInputComponent(domElement, style, label, callback) {
        this.domElement = domElement;
        this.label = label;
        this.style = style;
        this.callback = callback;
        this.callback = this.callback.bind(this);
        this.addComponents();
    }
    Object.defineProperty(GenericPrimaryInputComponent.prototype, "component", {
        get: function () {
            return this.container;
        },
        enumerable: false,
        configurable: true
    });
    GenericPrimaryInputComponent.prototype.addComponents = function () {
        this.updateProperty = this.updateProperty.bind(this);
        this.propertyValueInput = new _models_InputBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_5__.InputTypeEnum.text)
            .setValue(this.domElement[this.style])
            .addEventListener('keyup', this.updateProperty)
            .build();
        var elementsContainer = new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .appendChild(this.propertyValueInput)
            .appendChild(new _models_ButtonBuilder__WEBPACK_IMPORTED_MODULE_3__["default"]()
            .setInnerText('Change')
            .addEventListener('click', this.updateProperty)
            .build())
            .build();
        this.container = new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_4__.StyleNameEnum.border, '1px solid #4CAF50')
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_4__.StyleNameEnum.padding, '3px')
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_4__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setInnerText(this.label)
            .build())
            .appendChild(elementsContainer)
            .build();
    };
    GenericPrimaryInputComponent.prototype.updateProperty = function (event) {
        if (event.type === 'click'
            || event.key === 'Enter'
            || event.code === '13') {
            if (this.callback()) {
                this.domElement[this.style] = this.propertyValueInput.value;
            }
            else {
                this.propertyValueInput.value = '';
            }
        }
    };
    return GenericPrimaryInputComponent;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GenericPrimaryInputComponent);


/***/ }),

/***/ "./src/components/common/components/generic-primary-selector.component.ts":
/*!********************************************************************************!*\
  !*** ./src/components/common/components/generic-primary-selector.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/ContainerBuilder */ "./src/components/common/models/ContainerBuilder.ts");
/* harmony import */ var _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/LabelBuilder */ "./src/components/common/models/LabelBuilder.ts");
/* harmony import */ var _models_SelectorFromEnumBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/SelectorFromEnumBuilder */ "./src/components/common/models/SelectorFromEnumBuilder.ts");
/* harmony import */ var _enums_style_name_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums/style-name.enum */ "./src/components/common/enums/style-name.enum.ts");




var GenericPrimarySelectorComponent = /** @class */ (function () {
    function GenericPrimarySelectorComponent(domElement, atributeToModify, label, options) {
        this.domElement = domElement;
        this.label = label;
        this.atributeToModify = atributeToModify;
        this.options = options;
        this.addComponents();
    }
    Object.defineProperty(GenericPrimarySelectorComponent.prototype, "component", {
        get: function () {
            return this.container;
        },
        enumerable: false,
        configurable: true
    });
    GenericPrimarySelectorComponent.prototype.addComponents = function () {
        this.updateProperty = this.updateProperty.bind(this);
        this.propertySelector = new _models_SelectorFromEnumBuilder__WEBPACK_IMPORTED_MODULE_2__["default"](this.options)
            .selectOption(this.domElement[this.atributeToModify])
            .addEventListener('change', this.updateProperty)
            .build();
        var elementsContainer = new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .appendChild(this.propertySelector)
            .build();
        this.container = new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_3__.StyleNameEnum.border, '1px solid #4CAF50')
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_3__.StyleNameEnum.padding, '3px')
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_3__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_1__["default"]()
            .setInnerText(this.label)
            .build())
            .appendChild(elementsContainer)
            .build();
    };
    GenericPrimarySelectorComponent.prototype.updateProperty = function () {
        this.domElement[this.atributeToModify] = this.propertySelector.value;
    };
    return GenericPrimarySelectorComponent;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GenericPrimarySelectorComponent);


/***/ }),

/***/ "./src/components/common/components/id-definition.component.ts":
/*!*********************************************************************!*\
  !*** ./src/components/common/components/id-definition.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/ContainerBuilder */ "./src/components/common/models/ContainerBuilder.ts");
/* harmony import */ var _models_InputBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/InputBuilder */ "./src/components/common/models/InputBuilder.ts");
/* harmony import */ var _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/LabelBuilder */ "./src/components/common/models/LabelBuilder.ts");
/* harmony import */ var _models_ButtonBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/ButtonBuilder */ "./src/components/common/models/ButtonBuilder.ts");
/* harmony import */ var _html_components_RawHTMLComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../html-components/RawHTMLComponent */ "./src/components/html-components/RawHTMLComponent.ts");
/* harmony import */ var _functions_define_element_id__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../functions/define-element-id */ "./src/components/common/functions/define-element-id.ts");
/* harmony import */ var _enums_style_name_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../enums/style-name.enum */ "./src/components/common/enums/style-name.enum.ts");
/* harmony import */ var _enums_input_type_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../enums/input-type.enum */ "./src/components/common/enums/input-type.enum.ts");








var IdDefinitionComponent = /** @class */ (function () {
    function IdDefinitionComponent(domElement) {
        // TODO: si la clase solo la utiliza ese unico componente,
        // quizas el nombre de la clase css deberia ir con # y no con punto...
        this.domElement = domElement;
        IdDefinitionComponent.instances = _html_components_RawHTMLComponent__WEBPACK_IMPORTED_MODULE_4__["default"].instances;
        this.addComponents();
    }
    Object.defineProperty(IdDefinitionComponent.prototype, "component", {
        get: function () {
            return this.container;
        },
        enumerable: false,
        configurable: true
    });
    IdDefinitionComponent.prototype.addComponents = function () {
        this.updateProperty = this.updateProperty.bind(this);
        this.propertyValueInput = new _models_InputBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_7__.InputTypeEnum.text)
            .setValue(this.domElement.id)
            .addEventListener('keyup', this.updateProperty)
            .build();
        var elementsContainer = new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .appendChild(this.propertyValueInput)
            .appendChild(new _models_ButtonBuilder__WEBPACK_IMPORTED_MODULE_3__["default"]()
            .setInnerText('Change')
            .addEventListener('click', this.updateProperty)
            .build())
            .build();
        this.container = new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_6__.StyleNameEnum.border, '1px solid #4CAF50')
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_6__.StyleNameEnum.padding, '3px')
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_6__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setInnerText('Id Definition')
            .build())
            .appendChild(elementsContainer)
            .build();
    };
    IdDefinitionComponent.prototype.updateProperty = function (event) {
        if (this.propertyValueInput.value !== this.domElement.id
            && (event.type === 'click'
                || event.key === 'Enter'
                || event.code === '13')) {
            try {
                var id = (0,_functions_define_element_id__WEBPACK_IMPORTED_MODULE_5__["default"])(this.propertyValueInput.value, IdDefinitionComponent.instances);
                if (id === '') {
                    this.domElement.removeAttribute('id');
                }
                else {
                    this.domElement.id = id;
                }
            }
            catch (_a) {
                this.propertyValueInput.value = this.domElement.id;
            }
        }
    };
    return IdDefinitionComponent;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IdDefinitionComponent);


/***/ }),

/***/ "./src/components/common/components/input-with-units-selector.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/components/common/components/input-with-units-selector.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/ContainerBuilder */ "./src/components/common/models/ContainerBuilder.ts");
/* harmony import */ var _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/LabelBuilder */ "./src/components/common/models/LabelBuilder.ts");
/* harmony import */ var _models_InputBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/InputBuilder */ "./src/components/common/models/InputBuilder.ts");
/* harmony import */ var _models_SelectorFromEnumBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/SelectorFromEnumBuilder */ "./src/components/common/models/SelectorFromEnumBuilder.ts");
/* harmony import */ var _functions_get_css_unit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../functions/get-css-unit */ "./src/components/common/functions/get-css-unit.ts");
/* harmony import */ var _enums_style_name_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../enums/style-name.enum */ "./src/components/common/enums/style-name.enum.ts");
/* harmony import */ var _enums_input_type_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../enums/input-type.enum */ "./src/components/common/enums/input-type.enum.ts");
/* harmony import */ var _enums_units_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../enums/units.enum */ "./src/components/common/enums/units.enum.ts");
/* harmony import */ var _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../enums/display-types.enum */ "./src/components/common/enums/display-types.enum.ts");
/* harmony import */ var _enums_flex_direction_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../enums/flex-direction.enum */ "./src/components/common/enums/flex-direction.enum.ts");
/* harmony import */ var _enums_align_flex_items_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../enums/align-flex-items.enum */ "./src/components/common/enums/align-flex-items.enum.ts");











var InputAndUnitsSelectorComponent = /** @class */ (function () {
    function InputAndUnitsSelectorComponent(domElementStyleSheet, style, label) {
        this.style = style;
        this.label = label;
        this.domElementStyleSheet = domElementStyleSheet;
        this.addComponents();
        this.setInitialValues();
    }
    Object.defineProperty(InputAndUnitsSelectorComponent.prototype, "component", {
        get: function () {
            return this.container;
        },
        enumerable: false,
        configurable: true
    });
    InputAndUnitsSelectorComponent.prototype.addComponents = function () {
        this.updateProperty = this.updateProperty.bind(this);
        this.unitsSelectorInput = new _models_SelectorFromEnumBuilder__WEBPACK_IMPORTED_MODULE_3__["default"](_enums_units_enum__WEBPACK_IMPORTED_MODULE_7__.UnitsEnum)
            .addEventListener('change', this.updateProperty);
        this.propertyValueInput = new _models_InputBuilder__WEBPACK_IMPORTED_MODULE_2__["default"](_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_6__.InputTypeEnum.number)
            .addEventListener('input', this.updateProperty);
        var innerContainer = new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .appendChild(this.propertyValueInput.build())
            .appendChild(this.unitsSelectorInput.build())
            .build();
        this.container = new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_5__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_8__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_5__.StyleNameEnum["flex-direction"], _enums_flex_direction_enum__WEBPACK_IMPORTED_MODULE_9__.FlexDirectionEnum.column)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_5__.StyleNameEnum["align-items"], _enums_align_flex_items_enum__WEBPACK_IMPORTED_MODULE_10__.AlignFlexItemsEnum.stretch)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_5__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_1__["default"]()
            .setInnerText(this.label)
            .build())
            .appendChild(innerContainer)
            .build();
    };
    InputAndUnitsSelectorComponent.prototype.setInitialValues = function () {
        this.propertyValueInput.setValue("".concat(parseInt(this.domElementStyleSheet[this.style]) || 0));
        this.unitsSelectorInput.selectOption((0,_functions_get_css_unit__WEBPACK_IMPORTED_MODULE_4__["default"])(this.domElementStyleSheet[this.style]));
    };
    InputAndUnitsSelectorComponent.prototype.updateProperty = function () {
        if (parseInt(this.propertyValueInput.getValue()) === this.zeroValue) {
            this.domElementStyleSheet[this.style] = '';
            return;
        }
        this.domElementStyleSheet[this.style] =
            "".concat(this.propertyValueInput.getValue()).concat(this.unitsSelectorInput.getValue());
    };
    InputAndUnitsSelectorComponent.prototype.updateStyleSheet = function (domElementStyleSheet) {
        this.domElementStyleSheet = domElementStyleSheet;
        this.setInitialValues();
    };
    InputAndUnitsSelectorComponent.prototype.setMinValue = function (value) {
        this.propertyValueInput.setMin(value);
        return this;
    };
    InputAndUnitsSelectorComponent.prototype.setZeroValue = function (value) {
        this.zeroValue = value;
        return this;
    };
    return InputAndUnitsSelectorComponent;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputAndUnitsSelectorComponent);


/***/ }),

/***/ "./src/components/common/components/margin-or-padding.component.ts":
/*!*************************************************************************!*\
  !*** ./src/components/common/components/margin-or-padding.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/ContainerBuilder */ "./src/components/common/models/ContainerBuilder.ts");
/* harmony import */ var _models_InputBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/InputBuilder */ "./src/components/common/models/InputBuilder.ts");
/* harmony import */ var _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/LabelBuilder */ "./src/components/common/models/LabelBuilder.ts");
/* harmony import */ var _models_SelectorFromEnumBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/SelectorFromEnumBuilder */ "./src/components/common/models/SelectorFromEnumBuilder.ts");
/* harmony import */ var _enums_input_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../enums/input-type.enum */ "./src/components/common/enums/input-type.enum.ts");
/* harmony import */ var _enums_units_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../enums/units.enum */ "./src/components/common/enums/units.enum.ts");
/* harmony import */ var _enums_style_name_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../enums/style-name.enum */ "./src/components/common/enums/style-name.enum.ts");
/* harmony import */ var _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../css-stylesheet/css-stylesheet */ "./src/components/css-stylesheet/css-stylesheet.ts");
/* harmony import */ var _functions_first_letters_capitalized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../functions/first-letters-capitalized */ "./src/components/common/functions/first-letters-capitalized.ts");
/* harmony import */ var _functions_get_css_unit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../functions/get-css-unit */ "./src/components/common/functions/get-css-unit.ts");










var MarginOrPaddingComponent = /** @class */ (function () {
    function MarginOrPaddingComponent(domElement, type) {
        this.type = type;
        this.domElement = domElement;
        this.domElementStyleSheet = _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_7__["default"].getRuleStyles(this.domElement.classList[0]);
        this.addComponents();
        this.setValuesAccordingToClass();
        this.updateProperty();
    }
    Object.defineProperty(MarginOrPaddingComponent.prototype, "component", {
        get: function () {
            return this.container;
        },
        enumerable: false,
        configurable: true
    });
    MarginOrPaddingComponent.prototype.addComponents = function () {
        // TODO: falta agregar el !important y quizas los inherit y no se si habra mas propiedades
        // quizas todo eso deba estar en el selector de la unidad...
        this.updateProperty = this.updateProperty.bind(this);
        this.selectAllCheckBox = new _models_InputBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_4__.InputTypeEnum.checkbox)
            .addEventListener('change', this.updateProperty)
            .build();
        var selectAllContainer = new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setInnerText('Select All')
            .build())
            .appendChild(this.selectAllCheckBox)
            .build();
        this.topPropertyValueInput = new _models_InputBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_4__.InputTypeEnum.number)
            .addEventListener('input', this.updateProperty)
            .build();
        this.rigthPropertyValueInput = new _models_InputBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_4__.InputTypeEnum.number)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('input', this.updateProperty)
            .build();
        this.bottomPropertyValueInput = new _models_InputBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_4__.InputTypeEnum.number)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('input', this.updateProperty)
            .build();
        this.leftPropertyValueInput = new _models_InputBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_4__.InputTypeEnum.number)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('input', this.updateProperty)
            .build();
        this.topUnitSelector = new _models_SelectorFromEnumBuilder__WEBPACK_IMPORTED_MODULE_3__["default"](_enums_units_enum__WEBPACK_IMPORTED_MODULE_5__.UnitsEnum)
            .addEventListener('change', this.updateProperty)
            .build();
        this.bottomUnitSelector = new _models_SelectorFromEnumBuilder__WEBPACK_IMPORTED_MODULE_3__["default"](_enums_units_enum__WEBPACK_IMPORTED_MODULE_5__.UnitsEnum)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('change', this.updateProperty)
            .build();
        this.rightUnitSelector = new _models_SelectorFromEnumBuilder__WEBPACK_IMPORTED_MODULE_3__["default"](_enums_units_enum__WEBPACK_IMPORTED_MODULE_5__.UnitsEnum)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('change', this.updateProperty)
            .build();
        this.leftUnitSelector = new _models_SelectorFromEnumBuilder__WEBPACK_IMPORTED_MODULE_3__["default"](_enums_units_enum__WEBPACK_IMPORTED_MODULE_5__.UnitsEnum)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('change', this.updateProperty)
            .build();
        var topContainer = new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setInnerText('T')
            .build())
            .appendChild(this.topPropertyValueInput)
            .appendChild(this.topUnitSelector)
            .build();
        var rightContainer = new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setInnerText('R')
            .build())
            .appendChild(this.rigthPropertyValueInput)
            .appendChild(this.rightUnitSelector)
            .build();
        var bottomContainer = new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setInnerText('B')
            .build())
            .appendChild(this.bottomPropertyValueInput)
            .appendChild(this.bottomUnitSelector)
            .build();
        var leftContainer = new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setInnerText('L')
            .build())
            .appendChild(this.leftPropertyValueInput)
            .appendChild(this.leftUnitSelector)
            .build();
        var inputValuesContainer = new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .appendChild(topContainer)
            .appendChild(rightContainer)
            .appendChild(bottomContainer)
            .appendChild(leftContainer)
            .build();
        this.container = new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_6__.StyleNameEnum.border, '1px solid #4CAF50')
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_6__.StyleNameEnum.padding, '3px')
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_6__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setInnerText("".concat((0,_functions_first_letters_capitalized__WEBPACK_IMPORTED_MODULE_8__["default"])(this.type, ' ', ' '), " Selector"))
            .build())
            .appendChild(selectAllContainer)
            .appendChild(inputValuesContainer)
            .build();
    };
    MarginOrPaddingComponent.prototype.updateProperty = function () {
        var _a = this.getCurrentProperties(), top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left;
        if (this.selectAllCheckBox.checked) {
            this.rigthPropertyValueInput.disabled = true;
            this.bottomPropertyValueInput.disabled = true;
            this.leftPropertyValueInput.disabled = true;
            this.rightUnitSelector.disabled = true;
            this.bottomUnitSelector.disabled = true;
            this.leftUnitSelector.disabled = true;
            if (this.topUnitSelector.value === _enums_units_enum__WEBPACK_IMPORTED_MODULE_5__.UnitsEnum.auto) {
                top = 'auto';
                right = 'auto';
                bottom = 'auto';
                left = 'auto';
                this.topPropertyValueInput.disabled = true;
                this.rigthPropertyValueInput.disabled = true;
                this.bottomPropertyValueInput.disabled = true;
                this.leftPropertyValueInput.disabled = true;
                this.rightUnitSelector.value = this.topUnitSelector.value;
                this.bottomUnitSelector.value = this.topUnitSelector.value;
                this.leftUnitSelector.value = this.topUnitSelector.value;
                this.topPropertyValueInput.value = '';
                this.rigthPropertyValueInput.value = '';
                this.bottomPropertyValueInput.value = '';
                this.leftPropertyValueInput.value = '';
            }
            else {
                this.topPropertyValueInput.disabled = false;
                top = "".concat(this.topPropertyValueInput.value).concat(this.topUnitSelector.value);
                right = "".concat(this.topPropertyValueInput.value).concat(this.topUnitSelector.value);
                bottom = "".concat(this.topPropertyValueInput.value).concat(this.topUnitSelector.value);
                left = "".concat(this.topPropertyValueInput.value).concat(this.topUnitSelector.value);
                this.rigthPropertyValueInput.value = this.topPropertyValueInput.value;
                this.bottomPropertyValueInput.value = this.topPropertyValueInput.value;
                this.leftPropertyValueInput.value = this.topPropertyValueInput.value;
                if (parseInt(this.topPropertyValueInput.value) === 0) {
                    this.domElementStyleSheet[this.type] = '';
                    return;
                }
            }
        }
        else {
            this.rightUnitSelector.disabled = false;
            this.bottomUnitSelector.disabled = false;
            this.leftUnitSelector.disabled = false;
            if (this.topUnitSelector.value === _enums_units_enum__WEBPACK_IMPORTED_MODULE_5__.UnitsEnum.auto) {
                top = 'auto';
                this.topPropertyValueInput.disabled = true;
            }
            else {
                this.topPropertyValueInput.disabled = false;
                top = "".concat(this.topPropertyValueInput.value).concat(this.topUnitSelector.value);
            }
            if (this.rightUnitSelector.value === _enums_units_enum__WEBPACK_IMPORTED_MODULE_5__.UnitsEnum.auto) {
                right = 'auto';
                this.rigthPropertyValueInput.disabled = true;
            }
            else {
                this.rigthPropertyValueInput.disabled = false;
                right = "".concat(this.rigthPropertyValueInput.value).concat(this.rightUnitSelector.value);
            }
            if (this.bottomUnitSelector.value === _enums_units_enum__WEBPACK_IMPORTED_MODULE_5__.UnitsEnum.auto) {
                bottom = 'auto';
                this.bottomPropertyValueInput.disabled = true;
            }
            else {
                this.bottomPropertyValueInput.disabled = false;
                bottom = "".concat(this.bottomPropertyValueInput.value).concat(this.bottomUnitSelector.value);
            }
            if (this.leftUnitSelector.value === _enums_units_enum__WEBPACK_IMPORTED_MODULE_5__.UnitsEnum.auto) {
                left = 'auto';
                this.leftPropertyValueInput.disabled = true;
            }
            else {
                this.leftPropertyValueInput.disabled = false;
                left = "".concat(this.leftPropertyValueInput.value).concat(this.leftUnitSelector.value);
            }
        }
        this.domElementStyleSheet[this.type] = [top, right, bottom, left].join(' ');
    };
    MarginOrPaddingComponent.prototype.setValuesAccordingToClass = function () {
        var _a = this.getCurrentProperties(), top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left, allEqual = _a.allEqual;
        this.selectAllCheckBox.checked = allEqual;
        this.topPropertyValueInput.value = "".concat(parseInt(top));
        this.rigthPropertyValueInput.value = "".concat(parseInt(right));
        this.bottomPropertyValueInput.value = "".concat(parseInt(bottom));
        this.leftPropertyValueInput.value = "".concat(parseInt(left));
        this.topUnitSelector.value = (0,_functions_get_css_unit__WEBPACK_IMPORTED_MODULE_9__["default"])(top);
        this.bottomUnitSelector.value = (0,_functions_get_css_unit__WEBPACK_IMPORTED_MODULE_9__["default"])(bottom);
        this.rightUnitSelector.value = (0,_functions_get_css_unit__WEBPACK_IMPORTED_MODULE_9__["default"])(right);
        this.leftUnitSelector.value = (0,_functions_get_css_unit__WEBPACK_IMPORTED_MODULE_9__["default"])(left);
    };
    MarginOrPaddingComponent.prototype.getCurrentProperties = function () {
        var top = this.domElementStyleSheet["".concat(this.type, "-top")];
        var right = this.domElementStyleSheet["".concat(this.type, "-right")];
        var bottom = this.domElementStyleSheet["".concat(this.type, "-bottom")];
        var left = this.domElementStyleSheet["".concat(this.type, "-left")];
        return {
            top: top ? top : '0px',
            right: right ? right : '0px',
            bottom: bottom ? bottom : '0px',
            left: left ? left : '0px',
            allEqual: top === right && top === bottom && top === left,
        };
    };
    MarginOrPaddingComponent.prototype.classNameUpdated = function (name) {
        this.domElementStyleSheet = _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_7__["default"].getRuleStyles(name);
        this.setValuesAccordingToClass();
        this.updateProperty();
    };
    return MarginOrPaddingComponent;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MarginOrPaddingComponent);


/***/ }),

/***/ "./src/components/common/components/sizes.component.ts":
/*!*************************************************************!*\
  !*** ./src/components/common/components/sizes.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/ContainerBuilder */ "./src/components/common/models/ContainerBuilder.ts");
/* harmony import */ var _models_InputBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/InputBuilder */ "./src/components/common/models/InputBuilder.ts");
/* harmony import */ var _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/LabelBuilder */ "./src/components/common/models/LabelBuilder.ts");
/* harmony import */ var _models_SelectorFromEnumBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/SelectorFromEnumBuilder */ "./src/components/common/models/SelectorFromEnumBuilder.ts");
/* harmony import */ var _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../css-stylesheet/css-stylesheet */ "./src/components/css-stylesheet/css-stylesheet.ts");
/* harmony import */ var _functions_get_css_unit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../functions/get-css-unit */ "./src/components/common/functions/get-css-unit.ts");
/* harmony import */ var _enums_input_type_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../enums/input-type.enum */ "./src/components/common/enums/input-type.enum.ts");
/* harmony import */ var _enums_units_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../enums/units.enum */ "./src/components/common/enums/units.enum.ts");
/* harmony import */ var _enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../enums/style-name.enum */ "./src/components/common/enums/style-name.enum.ts");
/* harmony import */ var _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../enums/display-types.enum */ "./src/components/common/enums/display-types.enum.ts");










var SizesComponent = /** @class */ (function () {
    function SizesComponent(domElement) {
        this.domElement = domElement;
        this.domElementStyleSheet = _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_4__["default"].getRuleStyles(this.domElement.classList[0]);
        this.addComponents();
    }
    Object.defineProperty(SizesComponent.prototype, "component", {
        get: function () {
            return this.container;
        },
        enumerable: false,
        configurable: true
    });
    SizesComponent.prototype.addComponents = function () {
        this.updateWidth = this.updateWidth.bind(this);
        this.updateHeight = this.updateHeight.bind(this);
        this.buildAllComponents();
        this.setInitialValuesAccordingToClass();
        var widthComponentsContainer = this.buildSizeContainer('Width', this.widthSizeInput, this.widthUnitSelector);
        var heightComponentsContainer = this.buildSizeContainer('Height', this.heightSizeInput, this.heightSizeSelector);
        this.container = new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum.border, '1px solid #4CAF50')
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum.padding, '3px')
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setInnerText('Sizes')
            .build())
            .appendChild(widthComponentsContainer)
            .appendChild(heightComponentsContainer)
            .build();
    };
    SizesComponent.prototype.buildSizeContainer = function (label, inputComponent, selectorComponent) {
        return new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_9__.DisplayTypesEnum.flex)
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setInnerText(label)
            .build())
            .build())
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_9__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(inputComponent)
            .appendChild(selectorComponent)
            .build())
            .build();
    };
    SizesComponent.prototype.buildAllComponents = function () {
        this.widthSizeInput = this.buildInput(_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_6__.InputTypeEnum.number, this.updateWidth);
        this.heightSizeInput = this.buildInput(_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_6__.InputTypeEnum.number, this.updateHeight);
        this.widthUnitSelector = this.buildSelector(this.updateWidth);
        this.heightSizeSelector = this.buildSelector(this.updateHeight);
    };
    SizesComponent.prototype.setInitialValuesAccordingToClass = function () {
        this.setWidthValueAccordingToClass();
        this.setHeightValueAccordingToClass();
    };
    SizesComponent.prototype.setWidthValueAccordingToClass = function () {
        var width = this.domElementStyleSheet['width'];
        this.widthSizeInput.value = "".concat(parseInt(width) || 0);
        this.widthUnitSelector.value = (0,_functions_get_css_unit__WEBPACK_IMPORTED_MODULE_5__["default"])(width);
    };
    SizesComponent.prototype.setHeightValueAccordingToClass = function () {
        var height = this.domElementStyleSheet['height'];
        this.heightSizeInput.value = "".concat(parseInt(height) || 0);
        this.heightSizeSelector.value = (0,_functions_get_css_unit__WEBPACK_IMPORTED_MODULE_5__["default"])(height);
    };
    SizesComponent.prototype.buildInput = function (InputTypeEnum, callback) {
        return new _models_InputBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](InputTypeEnum)
            .setMin(0)
            .addEventListener('input', callback)
            .build();
    };
    SizesComponent.prototype.buildSelector = function (callback) {
        return new _models_SelectorFromEnumBuilder__WEBPACK_IMPORTED_MODULE_3__["default"](_enums_units_enum__WEBPACK_IMPORTED_MODULE_7__.UnitsEnum)
            .addEventListener('change', callback)
            .build();
    };
    SizesComponent.prototype.updateWidth = function () {
        if (this.widthSizeInput.value === '0') {
            this.domElementStyleSheet.removeProperty('width');
            return;
        }
        this.domElementStyleSheet['width'] = "".concat(this.widthSizeInput.value).concat(this.widthUnitSelector.value);
    };
    SizesComponent.prototype.updateHeight = function () {
        if (this.heightSizeInput.value === '0') {
            this.domElementStyleSheet.removeProperty('height');
            return;
        }
        this.domElementStyleSheet['height'] = "".concat(this.heightSizeInput.value).concat(this.heightSizeSelector.value);
    };
    SizesComponent.prototype.classNameUpdated = function (name) {
        this.domElementStyleSheet = _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_4__["default"].getRuleStyles(name);
        this.setInitialValuesAccordingToClass();
    };
    return SizesComponent;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SizesComponent);


/***/ }),

/***/ "./src/components/common/components/url-definition-component.ts":
/*!**********************************************************************!*\
  !*** ./src/components/common/components/url-definition-component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-stylesheet/css-stylesheet */ "./src/components/css-stylesheet/css-stylesheet.ts");
/* harmony import */ var _models_ButtonBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/ButtonBuilder */ "./src/components/common/models/ButtonBuilder.ts");
/* harmony import */ var _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/ContainerBuilder */ "./src/components/common/models/ContainerBuilder.ts");
/* harmony import */ var _models_InputBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/InputBuilder */ "./src/components/common/models/InputBuilder.ts");
/* harmony import */ var _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/LabelBuilder */ "./src/components/common/models/LabelBuilder.ts");
/* harmony import */ var _enums_input_type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../enums/input-type.enum */ "./src/components/common/enums/input-type.enum.ts");
/* harmony import */ var _enums_style_name_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../enums/style-name.enum */ "./src/components/common/enums/style-name.enum.ts");
/* harmony import */ var _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../enums/display-types.enum */ "./src/components/common/enums/display-types.enum.ts");








var UrlDefinitionComponent = /** @class */ (function () {
    function UrlDefinitionComponent(domElement) {
        this.domElement = domElement;
        this.domElementStyleSheet = _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_0__["default"].getRuleStyles(this.domElement.classList[0]);
        this.addComponents();
    }
    Object.defineProperty(UrlDefinitionComponent.prototype, "currentUrl", {
        get: function () {
            return this.domElement['src'];
        },
        enumerable: false,
        configurable: true
    });
    UrlDefinitionComponent.prototype.setNewUrl = function (url) {
        this.domElement['src'] = url;
    };
    Object.defineProperty(UrlDefinitionComponent.prototype, "component", {
        get: function () {
            return this.container;
        },
        enumerable: false,
        configurable: true
    });
    UrlDefinitionComponent.prototype.addComponents = function () {
        this.updateUrl = this.updateUrl.bind(this);
        this.buildAllComponents();
        this.setInitialValuesAccordingToClass();
        var acceptButton = new _models_ButtonBuilder__WEBPACK_IMPORTED_MODULE_1__["default"]()
            .addEventListener('click', this.updateUrl)
            .setInnerText('Assign')
            .build();
        var urlComponentsContainer = new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_6__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_7__.DisplayTypesEnum.flex)
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_4__["default"]()
            .setInnerText('Assign Url')
            .build())
            .build())
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_6__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_7__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_6__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(this.urlInput)
            .appendChild(acceptButton)
            .build())
            .build();
        this.container = new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_6__.StyleNameEnum.border, '1px solid #4CAF50')
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_6__.StyleNameEnum.padding, '3px')
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_6__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_4__["default"]()
            .setInnerText('Image Properties')
            .build())
            .appendChild(urlComponentsContainer)
            .build();
    };
    UrlDefinitionComponent.prototype.buildAllComponents = function () {
        this.buildUrlComponents();
    };
    UrlDefinitionComponent.prototype.buildUrlComponents = function () {
        this.urlInput = new _models_InputBuilder__WEBPACK_IMPORTED_MODULE_3__["default"](_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_5__.InputTypeEnum.url).build();
    };
    UrlDefinitionComponent.prototype.setInitialValuesAccordingToClass = function () {
        this.setUrlInitialValuesAccordingToClass();
    };
    UrlDefinitionComponent.prototype.setUrlInitialValuesAccordingToClass = function () {
        this.urlInput.value = this.currentUrl;
    };
    UrlDefinitionComponent.prototype.updateUrl = function () {
        if (this.urlInput.value === '') {
            this.setNewUrl();
            return;
        }
        this.setNewUrl(this.urlInput.value);
    };
    UrlDefinitionComponent.prototype.classNameUpdated = function (name) {
        this.domElementStyleSheet = _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_0__["default"].getRuleStyles(name);
        this.setInitialValuesAccordingToClass();
    };
    return UrlDefinitionComponent;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UrlDefinitionComponent);


/***/ }),

/***/ "./src/components/common/constants/constants.ts":
/*!******************************************************!*\
  !*** ./src/components/common/constants/constants.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var contants = {
    INVERTED_BACKGROUND_COLOR: 'rgb(209,255,240)'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contants);


/***/ }),

/***/ "./src/components/common/enums/add-component.enum.ts":
/*!***********************************************************!*\
  !*** ./src/components/common/enums/add-component.enum.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddComponentEnum: () => (/* binding */ AddComponentEnum)
/* harmony export */ });
var AddComponentEnum;
(function (AddComponentEnum) {
    AddComponentEnum["addIdDefinitionComponent"] = "addIdDefinitionComponent";
    AddComponentEnum["addClassNameDefinitionComponent"] = "addClassNameDefinitionComponent";
    AddComponentEnum["addMarginStyleComponent"] = "addMarginStyleComponent";
    AddComponentEnum["addPaddingStyleComponent"] = "addPaddingStyleComponent";
    AddComponentEnum["addSizeComponents"] = "addSizeComponents";
    AddComponentEnum["addFontComponens"] = "addFontComponens";
    AddComponentEnum["addBackgroundSettingsComponent"] = "addBackgroundSettingsComponent";
    AddComponentEnum["addBorderSettingsComponent"] = "addBorderSettingsComponent";
    AddComponentEnum["addBoxShadowComponent"] = "addBoxShadowComponent";
    AddComponentEnum["addDisplayAsChildComponent"] = "addDisplayAsChildComponent";
    AddComponentEnum["addActionsComponents"] = "addActionsComponents";
    AddComponentEnum["addInnerTextChangeComponent"] = "addInnerTextChangeComponent";
    AddComponentEnum["addDisplayAsParentComponent"] = "addDisplayAsParentComponent";
    AddComponentEnum["addUrlInputComponent"] = "addUrlInputComponent";
    AddComponentEnum["addInputTypeSelectorComponent"] = "addInputTypeSelectorComponent";
})(AddComponentEnum || (AddComponentEnum = {}));


/***/ }),

/***/ "./src/components/common/enums/align-flex-content.enum.ts":
/*!****************************************************************!*\
  !*** ./src/components/common/enums/align-flex-content.enum.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlignFlexContentEnum: () => (/* binding */ AlignFlexContentEnum)
/* harmony export */ });
var AlignFlexContentEnum;
(function (AlignFlexContentEnum) {
    AlignFlexContentEnum["flex-start"] = "flex-start";
    AlignFlexContentEnum["flex-end"] = "flex-end";
    AlignFlexContentEnum["center"] = "center";
    AlignFlexContentEnum["space-between"] = "space-between";
    AlignFlexContentEnum["space-around"] = "space-around";
    AlignFlexContentEnum["stretch"] = "stretch";
    AlignFlexContentEnum["none"] = "";
})(AlignFlexContentEnum || (AlignFlexContentEnum = {}));


/***/ }),

/***/ "./src/components/common/enums/align-flex-items.enum.ts":
/*!**************************************************************!*\
  !*** ./src/components/common/enums/align-flex-items.enum.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlignFlexItemsEnum: () => (/* binding */ AlignFlexItemsEnum)
/* harmony export */ });
var AlignFlexItemsEnum;
(function (AlignFlexItemsEnum) {
    AlignFlexItemsEnum["flex-start"] = "flex-start";
    AlignFlexItemsEnum["flex-end"] = "flex-end";
    AlignFlexItemsEnum["center"] = "center";
    AlignFlexItemsEnum["baseline"] = "baseline";
    AlignFlexItemsEnum["stretch"] = "stretch";
    AlignFlexItemsEnum["none"] = "";
})(AlignFlexItemsEnum || (AlignFlexItemsEnum = {}));


/***/ }),

/***/ "./src/components/common/enums/align-flex-self.enum.ts":
/*!*************************************************************!*\
  !*** ./src/components/common/enums/align-flex-self.enum.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlignFlexSelfEnum: () => (/* binding */ AlignFlexSelfEnum)
/* harmony export */ });
var AlignFlexSelfEnum;
(function (AlignFlexSelfEnum) {
    AlignFlexSelfEnum["auto"] = "auto";
    AlignFlexSelfEnum["flex-start"] = "flex-start";
    AlignFlexSelfEnum["flex-end"] = "flex-end";
    AlignFlexSelfEnum["center"] = "center";
    AlignFlexSelfEnum["baseline"] = "baseline";
    AlignFlexSelfEnum["stretch"] = "stretch";
    AlignFlexSelfEnum["none"] = "";
})(AlignFlexSelfEnum || (AlignFlexSelfEnum = {}));


/***/ }),

/***/ "./src/components/common/enums/align-grid-content.enum.ts":
/*!****************************************************************!*\
  !*** ./src/components/common/enums/align-grid-content.enum.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlignGridContentEnum: () => (/* binding */ AlignGridContentEnum)
/* harmony export */ });
var AlignGridContentEnum;
(function (AlignGridContentEnum) {
    AlignGridContentEnum["start"] = "start";
    AlignGridContentEnum["end"] = "end";
    AlignGridContentEnum["center"] = "center";
    AlignGridContentEnum["stretch"] = "stretch";
    AlignGridContentEnum["space-between"] = "space-between";
    AlignGridContentEnum["space-around"] = "space-around";
    AlignGridContentEnum["space-evenly"] = "space-evenly";
    AlignGridContentEnum["none"] = "";
})(AlignGridContentEnum || (AlignGridContentEnum = {}));


/***/ }),

/***/ "./src/components/common/enums/align-grid-items.enum.ts":
/*!**************************************************************!*\
  !*** ./src/components/common/enums/align-grid-items.enum.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlignGridItemsEnum: () => (/* binding */ AlignGridItemsEnum)
/* harmony export */ });
var AlignGridItemsEnum;
(function (AlignGridItemsEnum) {
    AlignGridItemsEnum["start"] = "start";
    AlignGridItemsEnum["end"] = "end";
    AlignGridItemsEnum["center"] = "center";
    AlignGridItemsEnum["stretch"] = "stretch";
    AlignGridItemsEnum["none"] = "";
})(AlignGridItemsEnum || (AlignGridItemsEnum = {}));


/***/ }),

/***/ "./src/components/common/enums/align-grid-self.enum.ts":
/*!*************************************************************!*\
  !*** ./src/components/common/enums/align-grid-self.enum.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlignGridSelfEnum: () => (/* binding */ AlignGridSelfEnum)
/* harmony export */ });
var AlignGridSelfEnum;
(function (AlignGridSelfEnum) {
    AlignGridSelfEnum["start"] = "start";
    AlignGridSelfEnum["end"] = "end";
    AlignGridSelfEnum["center"] = "center";
    AlignGridSelfEnum["stretch"] = "stretch";
    AlignGridSelfEnum["none"] = "";
})(AlignGridSelfEnum || (AlignGridSelfEnum = {}));


/***/ }),

/***/ "./src/components/common/enums/border-style.enum.ts":
/*!**********************************************************!*\
  !*** ./src/components/common/enums/border-style.enum.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BorderStyleEnum: () => (/* binding */ BorderStyleEnum)
/* harmony export */ });
var BorderStyleEnum;
(function (BorderStyleEnum) {
    BorderStyleEnum["none"] = "none";
    BorderStyleEnum["hidden"] = "hidden";
    BorderStyleEnum["dotted"] = "dotted";
    BorderStyleEnum["dashed"] = "dashed";
    BorderStyleEnum["solid"] = "solid";
    BorderStyleEnum["double"] = "double";
    BorderStyleEnum["groove"] = "groove";
    BorderStyleEnum["ridge"] = "ridge";
    BorderStyleEnum["inset"] = "inset";
    BorderStyleEnum["outset"] = "outset";
})(BorderStyleEnum || (BorderStyleEnum = {}));


/***/ }),

/***/ "./src/components/common/enums/display-types.enum.ts":
/*!***********************************************************!*\
  !*** ./src/components/common/enums/display-types.enum.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DisplayTypesEnum: () => (/* binding */ DisplayTypesEnum)
/* harmony export */ });
var DisplayTypesEnum;
(function (DisplayTypesEnum) {
    DisplayTypesEnum["flex"] = "flex";
    DisplayTypesEnum["inline-flex"] = "inline-flex";
    DisplayTypesEnum["grid"] = "grid";
    DisplayTypesEnum["inline-grid"] = "inline-grid";
    DisplayTypesEnum["block"] = "block";
    DisplayTypesEnum["inline"] = "inline";
    DisplayTypesEnum["contents"] = "contents";
    DisplayTypesEnum["inherit"] = "inherit";
    DisplayTypesEnum["initial"] = "initial";
    DisplayTypesEnum["revert"] = "revert";
    DisplayTypesEnum["unset"] = "unset";
    DisplayTypesEnum["none"] = "";
})(DisplayTypesEnum || (DisplayTypesEnum = {}));


/***/ }),

/***/ "./src/components/common/enums/event-type.enum.ts":
/*!********************************************************!*\
  !*** ./src/components/common/enums/event-type.enum.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventTypeEnum: () => (/* binding */ EventTypeEnum)
/* harmony export */ });
var EventTypeEnum;
(function (EventTypeEnum) {
    EventTypeEnum["input"] = "input";
    EventTypeEnum["change"] = "change";
})(EventTypeEnum || (EventTypeEnum = {}));


/***/ }),

/***/ "./src/components/common/enums/flex-direction.enum.ts":
/*!************************************************************!*\
  !*** ./src/components/common/enums/flex-direction.enum.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlexDirectionEnum: () => (/* binding */ FlexDirectionEnum)
/* harmony export */ });
var FlexDirectionEnum;
(function (FlexDirectionEnum) {
    FlexDirectionEnum["row"] = "row";
    FlexDirectionEnum["row-reverse"] = "row-reverse";
    FlexDirectionEnum["column"] = "column";
    FlexDirectionEnum["column-reverse"] = "column-reverse";
    FlexDirectionEnum["none"] = "";
})(FlexDirectionEnum || (FlexDirectionEnum = {}));


/***/ }),

/***/ "./src/components/common/enums/flex-wrap.enum.ts":
/*!*******************************************************!*\
  !*** ./src/components/common/enums/flex-wrap.enum.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlexWrapEnum: () => (/* binding */ FlexWrapEnum)
/* harmony export */ });
var FlexWrapEnum;
(function (FlexWrapEnum) {
    FlexWrapEnum["nowrap"] = "nowrap";
    FlexWrapEnum["wrap"] = "wrap";
    FlexWrapEnum["wrap-reverse"] = "wrap-reverse";
    FlexWrapEnum["none"] = "";
})(FlexWrapEnum || (FlexWrapEnum = {}));


/***/ }),

/***/ "./src/components/common/enums/font-styles.enum.ts":
/*!*********************************************************!*\
  !*** ./src/components/common/enums/font-styles.enum.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FontStylesEnum: () => (/* binding */ FontStylesEnum)
/* harmony export */ });
var FontStylesEnum;
(function (FontStylesEnum) {
    FontStylesEnum["normal"] = "normal";
    FontStylesEnum["italic"] = "italic";
    FontStylesEnum["oblique"] = "oblique";
})(FontStylesEnum || (FontStylesEnum = {}));


/***/ }),

/***/ "./src/components/common/enums/font-variant.enum.ts":
/*!**********************************************************!*\
  !*** ./src/components/common/enums/font-variant.enum.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FontVariantEnum: () => (/* binding */ FontVariantEnum)
/* harmony export */ });
var FontVariantEnum;
(function (FontVariantEnum) {
    FontVariantEnum["normal"] = "normal";
    FontVariantEnum["small-caps"] = "small-caps";
    FontVariantEnum["all-small-caps"] = "all-small-caps";
    FontVariantEnum["petite-caps"] = "petite-caps";
    FontVariantEnum["all-petite-caps"] = "all-petite-caps";
    FontVariantEnum["unicase"] = "unicase";
    FontVariantEnum["titling-caps"] = "titling-caps";
    FontVariantEnum["inherit"] = "inherit";
    FontVariantEnum["initial"] = "initial";
    FontVariantEnum["revert"] = "revert";
    FontVariantEnum["revert-layer"] = "revert-layer";
    FontVariantEnum["unset"] = "unset";
})(FontVariantEnum || (FontVariantEnum = {}));


/***/ }),

/***/ "./src/components/common/enums/font-weight.enum.ts":
/*!*********************************************************!*\
  !*** ./src/components/common/enums/font-weight.enum.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FontWeightEnum: () => (/* binding */ FontWeightEnum)
/* harmony export */ });
var FontWeightEnum;
(function (FontWeightEnum) {
    FontWeightEnum["lighter"] = "lighter";
    FontWeightEnum["normal"] = "normal";
    FontWeightEnum["bold"] = "bold";
    FontWeightEnum["bolder"] = "bolder";
    FontWeightEnum["s100"] = "100";
    FontWeightEnum["s200"] = "200";
    FontWeightEnum["s300"] = "300";
    FontWeightEnum["s400"] = "400";
    FontWeightEnum["s500"] = "500";
    FontWeightEnum["s600"] = "600";
    FontWeightEnum["s700"] = "700";
    FontWeightEnum["s800"] = "800";
    FontWeightEnum["s900"] = "900";
    FontWeightEnum["inherit"] = "inherit";
    FontWeightEnum["initial"] = "initial";
    FontWeightEnum["revert"] = "revert";
    FontWeightEnum["revert-layer"] = "revert-layer";
    FontWeightEnum["unset"] = "unset";
})(FontWeightEnum || (FontWeightEnum = {}));


/***/ }),

/***/ "./src/components/common/enums/fonts.enum.ts":
/*!***************************************************!*\
  !*** ./src/components/common/enums/fonts.enum.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FontsEnum: () => (/* binding */ FontsEnum)
/* harmony export */ });
var FontsEnum;
(function (FontsEnum) {
    FontsEnum["cursive"] = "cursive";
    FontsEnum["monospace"] = "monospace";
    FontsEnum["serif"] = "serif";
    FontsEnum["sans-serif"] = "sans-serif";
    FontsEnum["fantasy"] = "fantasy";
    FontsEnum["default"] = "default";
    FontsEnum["Arial"] = "Arial";
    FontsEnum["Arial Black"] = "Arial Black";
    FontsEnum["Arial Narrow"] = "Arial Narrow";
    FontsEnum["Arial Rounded MT Bold"] = "Arial Rounded MT Bold";
    FontsEnum["Bookman Old Style"] = "Bookman Old Style";
    FontsEnum["Bradley Hand ITC"] = "Bradley Hand ITC";
    FontsEnum["Century"] = "Century";
    FontsEnum["Century Gothic"] = "Century Gothic";
    FontsEnum["Comic Sans MS"] = "Comic Sans MS";
    FontsEnum["Courier"] = "Courier";
    FontsEnum["Courier New"] = "Courier New";
    FontsEnum["Georgia"] = "Georgia";
    FontsEnum["Gentium"] = "Gentium";
    FontsEnum["Impact"] = "Impact";
    FontsEnum["King"] = "King";
    FontsEnum["Lucida Console"] = "Lucida Console";
    FontsEnum["Lalit"] = "Lalit";
    FontsEnum["Modena"] = "Modena";
    FontsEnum["Monotype Corsiva"] = "Monotype Corsiva";
    FontsEnum["Papyrus"] = "Papyrus";
    FontsEnum["Tahoma"] = "Tahoma";
    FontsEnum["TeX"] = "TeX";
    FontsEnum["Times"] = "Times";
    FontsEnum["Times New Roman"] = "Times New Roman";
    FontsEnum["Trebuchet MS"] = "Trebuchet MS";
    FontsEnum["Verdana"] = "Verdana";
    FontsEnum["Verona"] = "Verona";
})(FontsEnum || (FontsEnum = {}));


/***/ }),

/***/ "./src/components/common/enums/general-pseudoclass.enum.ts":
/*!*****************************************************************!*\
  !*** ./src/components/common/enums/general-pseudoclass.enum.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeneralPseudoclassEnum: () => (/* binding */ GeneralPseudoclassEnum)
/* harmony export */ });
var GeneralPseudoclassEnum;
(function (GeneralPseudoclassEnum) {
    GeneralPseudoclassEnum["focus"] = "focus";
    GeneralPseudoclassEnum["hover"] = "hover";
    GeneralPseudoclassEnum["active"] = "active";
    GeneralPseudoclassEnum["none"] = "none";
})(GeneralPseudoclassEnum || (GeneralPseudoclassEnum = {}));


/***/ }),

/***/ "./src/components/common/enums/grid-auto-flow.enum.ts":
/*!************************************************************!*\
  !*** ./src/components/common/enums/grid-auto-flow.enum.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GridAutoFlowEnum: () => (/* binding */ GridAutoFlowEnum)
/* harmony export */ });
var GridAutoFlowEnum;
(function (GridAutoFlowEnum) {
    GridAutoFlowEnum["row"] = "row";
    GridAutoFlowEnum["column"] = "column";
    GridAutoFlowEnum["row-dense"] = "row-dense";
    GridAutoFlowEnum["column-dense"] = "column-dense";
    GridAutoFlowEnum["none"] = "";
})(GridAutoFlowEnum || (GridAutoFlowEnum = {}));


/***/ }),

/***/ "./src/components/common/enums/input-type.enum.ts":
/*!********************************************************!*\
  !*** ./src/components/common/enums/input-type.enum.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputTypeEnum: () => (/* binding */ InputTypeEnum)
/* harmony export */ });
var InputTypeEnum;
(function (InputTypeEnum) {
    InputTypeEnum["text"] = "text";
    InputTypeEnum["number"] = "number";
    InputTypeEnum["checkbox"] = "checkbox";
    InputTypeEnum["button"] = "button";
    InputTypeEnum["color"] = "color";
    InputTypeEnum["date"] = "date";
    InputTypeEnum["datetime"] = "datetime";
    InputTypeEnum["datetime-local"] = "datetime-local";
    InputTypeEnum["email"] = "email";
    InputTypeEnum["file"] = "file";
    InputTypeEnum["hidden"] = "hidden";
    InputTypeEnum["month"] = "month";
    InputTypeEnum["password"] = "password";
    InputTypeEnum["radio"] = "radio";
    InputTypeEnum["range"] = "range";
    InputTypeEnum["reset"] = "reset";
    InputTypeEnum["submit"] = "submit";
    InputTypeEnum["tel"] = "tel";
    InputTypeEnum["time"] = "time";
    InputTypeEnum["url"] = "url";
    InputTypeEnum["week"] = "week";
})(InputTypeEnum || (InputTypeEnum = {}));


/***/ }),

/***/ "./src/components/common/enums/justify-flex-content.enum.ts":
/*!******************************************************************!*\
  !*** ./src/components/common/enums/justify-flex-content.enum.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JustifyFlexContentEnum: () => (/* binding */ JustifyFlexContentEnum)
/* harmony export */ });
var JustifyFlexContentEnum;
(function (JustifyFlexContentEnum) {
    JustifyFlexContentEnum["flex-start"] = "flex-start";
    JustifyFlexContentEnum["flex-end"] = "flex-end";
    JustifyFlexContentEnum["center"] = "center";
    JustifyFlexContentEnum["space-between"] = "space-between";
    JustifyFlexContentEnum["space-around"] = "space-around";
    JustifyFlexContentEnum["none"] = "";
})(JustifyFlexContentEnum || (JustifyFlexContentEnum = {}));


/***/ }),

/***/ "./src/components/common/enums/justify-grid-content.enum.ts":
/*!******************************************************************!*\
  !*** ./src/components/common/enums/justify-grid-content.enum.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JustifyGridContentEnum: () => (/* binding */ JustifyGridContentEnum)
/* harmony export */ });
var JustifyGridContentEnum;
(function (JustifyGridContentEnum) {
    JustifyGridContentEnum["start"] = "start";
    JustifyGridContentEnum["end"] = "end";
    JustifyGridContentEnum["center"] = "center";
    JustifyGridContentEnum["stretch"] = "stretch";
    JustifyGridContentEnum["space-between"] = "space-between";
    JustifyGridContentEnum["space-around"] = "space-around";
    JustifyGridContentEnum["space-evenly"] = "space-evenly";
    JustifyGridContentEnum["none"] = "";
})(JustifyGridContentEnum || (JustifyGridContentEnum = {}));


/***/ }),

/***/ "./src/components/common/enums/justify-grid-items.enum.ts":
/*!****************************************************************!*\
  !*** ./src/components/common/enums/justify-grid-items.enum.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JustifyGridItemsEnum: () => (/* binding */ JustifyGridItemsEnum)
/* harmony export */ });
var JustifyGridItemsEnum;
(function (JustifyGridItemsEnum) {
    JustifyGridItemsEnum["start"] = "start";
    JustifyGridItemsEnum["end"] = "end";
    JustifyGridItemsEnum["center"] = "center";
    JustifyGridItemsEnum["stretch"] = "stretch";
    JustifyGridItemsEnum["none"] = "";
})(JustifyGridItemsEnum || (JustifyGridItemsEnum = {}));


/***/ }),

/***/ "./src/components/common/enums/justify-grid-self.enum.ts":
/*!***************************************************************!*\
  !*** ./src/components/common/enums/justify-grid-self.enum.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JustifyGridSelfEnum: () => (/* binding */ JustifyGridSelfEnum)
/* harmony export */ });
var JustifyGridSelfEnum;
(function (JustifyGridSelfEnum) {
    JustifyGridSelfEnum["start"] = "start";
    JustifyGridSelfEnum["end"] = "end";
    JustifyGridSelfEnum["center"] = "center";
    JustifyGridSelfEnum["stretch"] = "stretch";
    JustifyGridSelfEnum["none"] = "";
})(JustifyGridSelfEnum || (JustifyGridSelfEnum = {}));


/***/ }),

/***/ "./src/components/common/enums/style-name.enum.ts":
/*!********************************************************!*\
  !*** ./src/components/common/enums/style-name.enum.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StyleNameEnum: () => (/* binding */ StyleNameEnum)
/* harmony export */ });
var StyleNameEnum;
(function (StyleNameEnum) {
    StyleNameEnum["margin"] = "margin";
    StyleNameEnum["padding"] = "padding";
    StyleNameEnum["display"] = "display";
    StyleNameEnum["flex-direction"] = "flex-direction";
    StyleNameEnum["align-items"] = "align-items";
    StyleNameEnum["align-self"] = "align-self";
    StyleNameEnum["grid-template-columns"] = "grid-template-columns";
    StyleNameEnum["grid-template-rows"] = "grid-template-rows";
    StyleNameEnum["border"] = "border";
    StyleNameEnum["resize"] = "resize";
    StyleNameEnum["width"] = "witdth";
    StyleNameEnum["height"] = "height";
    StyleNameEnum["font-size"] = "font-size";
})(StyleNameEnum || (StyleNameEnum = {}));


/***/ }),

/***/ "./src/components/common/enums/title.types.enum.ts":
/*!*********************************************************!*\
  !*** ./src/components/common/enums/title.types.enum.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TitleTypesEnum: () => (/* binding */ TitleTypesEnum)
/* harmony export */ });
var TitleTypesEnum;
(function (TitleTypesEnum) {
    TitleTypesEnum["H1"] = "H1";
    TitleTypesEnum["H2"] = "H2";
    TitleTypesEnum["H3"] = "H3";
    TitleTypesEnum["H4"] = "H4";
    TitleTypesEnum["H5"] = "H5";
    TitleTypesEnum["H6"] = "H6";
})(TitleTypesEnum || (TitleTypesEnum = {}));


/***/ }),

/***/ "./src/components/common/enums/units.enum.ts":
/*!***************************************************!*\
  !*** ./src/components/common/enums/units.enum.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnitsEnum: () => (/* binding */ UnitsEnum)
/* harmony export */ });
var UnitsEnum;
(function (UnitsEnum) {
    UnitsEnum["px"] = "px";
    UnitsEnum["em"] = "em";
    UnitsEnum["rem"] = "rem";
    UnitsEnum["vw"] = "vw";
    UnitsEnum["vh"] = "vh";
    UnitsEnum["vmin"] = "vmin";
    UnitsEnum["vmax"] = "vmax";
    UnitsEnum["%"] = "%";
    UnitsEnum["ex"] = "ex";
    UnitsEnum["ch"] = "ch";
    UnitsEnum["mm"] = "mm";
    UnitsEnum["cm"] = "cm";
    UnitsEnum["in"] = "in";
    UnitsEnum["pt"] = "pt";
    UnitsEnum["pc"] = "pc";
    UnitsEnum["auto"] = "auto";
})(UnitsEnum || (UnitsEnum = {}));


/***/ }),

/***/ "./src/components/common/functions/define-element-id.ts":
/*!**************************************************************!*\
  !*** ./src/components/common/functions/define-element-id.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ defineElementId)
/* harmony export */ });
function defineElementId(initialName, instances) {
    var nameAlreadyExists = instances.find(function (instance) { return instance.id === initialName; }) ? true : false;
    if (nameAlreadyExists) {
        alert('Id name already exists \nThe name has not been updated');
        throw new Error('Id name already exists');
    }
    return initialName;
}


/***/ }),

/***/ "./src/components/common/functions/define-element-name.ts":
/*!****************************************************************!*\
  !*** ./src/components/common/functions/define-element-name.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ defineElementName)
/* harmony export */ });
function defineElementName(initialName, instances) {
    var nameAlreadyExists = instances.find(function (instance) { return instance['name'] === initialName; }) ? true : false;
    if (nameAlreadyExists) {
        alert('Element name already exists \nThe name has not been updated');
        throw new Error('Element name already exists');
    }
    return initialName;
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
function dragStartWithTargetNodeName(event) {
    event.dataTransfer.setData('text/plain', event.target.nodeName);
}


/***/ }),

/***/ "./src/components/common/functions/first-letters-capitalized.ts":
/*!**********************************************************************!*\
  !*** ./src/components/common/functions/first-letters-capitalized.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ capitalizeFirstLetters)
/* harmony export */ });
function capitalizeFirstLetters(text, splitCharacter, joinCharacter) {
    var words = text.split(splitCharacter);
    return words.map(function (word) { return "".concat(word.charAt(0).toUpperCase()).concat(word.slice(1)); }).join(joinCharacter);
}


/***/ }),

/***/ "./src/components/common/functions/get-css-unit.ts":
/*!*********************************************************!*\
  !*** ./src/components/common/functions/get-css-unit.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUnit)
/* harmony export */ });
/* harmony import */ var _enums_units_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/units.enum */ "./src/components/common/enums/units.enum.ts");

function getUnit(text, defaultUnit) {
    if (defaultUnit === void 0) { defaultUnit = _enums_units_enum__WEBPACK_IMPORTED_MODULE_0__.UnitsEnum.px; }
    try {
        var values = text.match(/[a-z%]+$/i);
        return values ? values[0] : defaultUnit;
    }
    catch (_a) {
        return 'px';
    }
}


/***/ }),

/***/ "./src/components/common/functions/rgb-to-hex.ts":
/*!*******************************************************!*\
  !*** ./src/components/common/functions/rgb-to-hex.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ colorToHex)
/* harmony export */ });
function colorToHex(color) {
    if (color === undefined) {
        return '#000000';
    }
    if (color.includes('rgb')) {
        return rgbToHex(color);
    }
    else if (color.includes('#')) {
        return color;
    }
    else {
        var foundColor = colorValues.find(function (col) { return col.name.toLowerCase() === color; });
        if (!foundColor) {
            return '#000000';
        }
        return foundColor.hex;
    }
}
function rgbToHex(rgb) {
    try {
        var _a = rgb.replace(/[^\d,]+/g, '').split(','), r = _a[0], g = _a[1], b = _a[2];
        return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }
    catch (err) {
        return '#000000';
    }
}
function componentToHex(c) {
    var hex = parseInt(c).toString(16);
    if (hex === 'NaN') {
        return '00';
    }
    return hex.length === 1 ? '0' + hex : hex;
}
var colorValues = [
    { hex: '#F0F8FF', name: 'AliceBlue' },
    { hex: '#FAEBD7', name: 'AntiqueWhite' },
    { hex: '#00FFFF', name: 'Aqua' },
    { hex: '#7FFFD4', name: 'Aquamarine' },
    { hex: '#F0FFFF', name: 'Azure' },
    { hex: '#F5F5DC', name: 'Beige' },
    { hex: '#FFE4C4', name: 'Bisque' },
    { hex: '#000000', name: 'Black' },
    { hex: '#FFEBCD', name: 'BlanchedAlmond' },
    { hex: '#0000FF', name: 'Blue' },
    { hex: '#8A2BE2', name: 'BlueViolet' },
    { hex: '#A52A2A', name: 'Brown' },
    { hex: '#DEB887', name: 'BurlyWood' },
    { hex: '#5F9EA0', name: 'CadetBlue' },
    { hex: '#7FFF00', name: 'Chartreuse' },
    { hex: '#D2691E', name: 'Chocolate' },
    { hex: '#FF7F50', name: 'Coral' },
    { hex: '#6495ED', name: 'CornflowerBlue' },
    { hex: '#FFF8DC', name: 'Cornsilk' },
    { hex: '#DC143C', name: 'Crimson' },
    { hex: '#00FFFF', name: 'Cyan' },
    { hex: '#00008B', name: 'DarkBlue' },
    { hex: '#008B8B', name: 'DarkCyan' },
    { hex: '#B8860B', name: 'DarkGoldenRod' },
    { hex: '#A9A9A9', name: 'DarkGray' },
    { hex: '#A9A9A9', name: 'DarkGrey' },
    { hex: '#006400', name: 'DarkGreen' },
    { hex: '#BDB76B', name: 'DarkKhaki' },
    { hex: '#8B008B', name: 'DarkMagenta' },
    { hex: '#556B2F', name: 'DarkOliveGreen' },
    { hex: '#FF8C00', name: 'DarkOrange' },
    { hex: '#9932CC', name: 'DarkOrchid' },
    { hex: '#8B0000', name: 'DarkRed' },
    { hex: '#E9967A', name: 'DarkSalmon' },
    { hex: '#8FBC8F', name: 'DarkSeaGreen' },
    { hex: '#483D8B', name: 'DarkSlateBlue' },
    { hex: '#2F4F4F', name: 'DarkSlateGray' },
    { hex: '#2F4F4F', name: 'DarkSlateGrey' },
    { hex: '#00CED1', name: 'DarkTurquoise' },
    { hex: '#9400D3', name: 'DarkViolet' },
    { hex: '#FF1493', name: 'DeepPink' },
    { hex: '#00BFFF', name: 'DeepSkyBlue' },
    { hex: '#696969', name: 'DimGray' },
    { hex: '#696969', name: 'DimGrey' },
    { hex: '#1E90FF', name: 'DodgerBlue' },
    { hex: '#B22222', name: 'FireBrick' },
    { hex: '#FFFAF0', name: 'FloralWhite' },
    { hex: '#228B22', name: 'ForestGreen' },
    { hex: '#FF00FF', name: 'Fuchsia' },
    { hex: '#DCDCDC', name: 'Gainsboro' },
    { hex: '#F8F8FF', name: 'GhostWhite' },
    { hex: '#FFD700', name: 'Gold' },
    { hex: '#DAA520', name: 'GoldenRod' },
    { hex: '#808080', name: 'Gray' },
    { hex: '#808080', name: 'Grey' },
    { hex: '#008000', name: 'Green' },
    { hex: '#ADFF2F', name: 'GreenYellow' },
    { hex: '#F0FFF0', name: 'HoneyDew' },
    { hex: '#FF69B4', name: 'HotPink' },
    { hex: '#CD5C5C', name: 'IndianRed' },
    { hex: '#4B0082', name: 'Indigo' },
    { hex: '#FFFFF0', name: 'Ivory' },
    { hex: '#F0E68C', name: 'Khaki' },
    { hex: '#E6E6FA', name: 'Lavender' },
    { hex: '#FFF0F5', name: 'LavenderBlush' },
    { hex: '#7CFC00', name: 'LawnGreen' },
    { hex: '#FFFACD', name: 'LemonChiffon' },
    { hex: '#ADD8E6', name: 'LightBlue' },
    { hex: '#F08080', name: 'LightCoral' },
    { hex: '#E0FFFF', name: 'LightCyan' },
    { hex: '#FAFAD2', name: 'LightGoldenRodYellow' },
    { hex: '#D3D3D3', name: 'LightGray' },
    { hex: '#D3D3D3', name: 'LightGrey' },
    { hex: '#90EE90', name: 'LightGreen' },
    { hex: '#FFB6C1', name: 'LightPink' },
    { hex: '#FFA07A', name: 'LightSalmon' },
    { hex: '#20B2AA', name: 'LightSeaGreen' },
    { hex: '#87CEFA', name: 'LightSkyBlue' },
    { hex: '#778899', name: 'LightSlateGray' },
    { hex: '#778899', name: 'LightSlateGrey' },
    { hex: '#B0C4DE', name: 'LightSteelBlue' },
    { hex: '#FFFFE0', name: 'LightYellow' },
    { hex: '#00FF00', name: 'Lime' },
    { hex: '#32CD32', name: 'LimeGreen' },
    { hex: '#FAF0E6', name: 'Linen' },
    { hex: '#FF00FF', name: 'Magenta' },
    { hex: '#800000', name: 'Maroon' },
    { hex: '#66CDAA', name: 'MediumAquaMarine' },
    { hex: '#0000CD', name: 'MediumBlue' },
    { hex: '#BA55D3', name: 'MediumOrchid' },
    { hex: '#9370DB', name: 'MediumPurple' },
    { hex: '#3CB371', name: 'MediumSeaGreen' },
    { hex: '#7B68EE', name: 'MediumSlateBlue' },
    { hex: '#00FA9A', name: 'MediumSpringGreen' },
    { hex: '#48D1CC', name: 'MediumTurquoise' },
    { hex: '#C71585', name: 'MediumVioletRed' },
    { hex: '#191970', name: 'MidnightBlue' },
    { hex: '#F5FFFA', name: 'MintCream' },
    { hex: '#FFE4E1', name: 'MistyRose' },
    { hex: '#FFE4B5', name: 'Moccasin' },
    { hex: '#FFDEAD', name: 'NavajoWhite' },
    { hex: '#000080', name: 'Navy' },
    { hex: '#FDF5E6', name: 'OldLace' },
    { hex: '#808000', name: 'Olive' },
    { hex: '#6B8E23', name: 'OliveDrab' },
    { hex: '#FFA500', name: 'Orange' },
    { hex: '#FF4500', name: 'OrangeRed' },
    { hex: '#DA70D6', name: 'Orchid' },
    { hex: '#EEE8AA', name: 'PaleGoldenRod' },
    { hex: '#98FB98', name: 'PaleGreen' },
    { hex: '#AFEEEE', name: 'PaleTurquoise' },
    { hex: '#DB7093', name: 'PaleVioletRed' },
    { hex: '#FFEFD5', name: 'PapayaWhip' },
    { hex: '#FFDAB9', name: 'PeachPuff' },
    { hex: '#CD853F', name: 'Peru' },
    { hex: '#FFC0CB', name: 'Pink' },
    { hex: '#DDA0DD', name: 'Plum' },
    { hex: '#B0E0E6', name: 'PowderBlue' },
    { hex: '#800080', name: 'Purple' },
    { hex: '#663399', name: 'RebeccaPurple' },
    { hex: '#FF0000', name: 'Red' },
    { hex: '#BC8F8F', name: 'RosyBrown' },
    { hex: '#4169E1', name: 'RoyalBlue' },
    { hex: '#8B4513', name: 'SaddleBrown' },
    { hex: '#FA8072', name: 'Salmon' },
    { hex: '#F4A460', name: 'SandyBrown' },
    { hex: '#2E8B57', name: 'SeaGreen' },
    { hex: '#FFF5EE', name: 'SeaShell' },
    { hex: '#A0522D', name: 'Sienna' },
    { hex: '#C0C0C0', name: 'Silver' },
    { hex: '#87CEEB', name: 'SkyBlue' },
    { hex: '#6A5ACD', name: 'SlateBlue' },
    { hex: '#708090', name: 'SlateGray' },
    { hex: '#708090', name: 'SlateGrey' },
    { hex: '#FFFAFA', name: 'Snow' },
    { hex: '#00FF7F', name: 'SpringGreen' },
    { hex: '#4682B4', name: 'SteelBlue' },
    { hex: '#D2B48C', name: 'Tan' },
    { hex: '#008080', name: 'Teal' },
    { hex: '#D8BFD8', name: 'Thistle' },
    { hex: '#FF6347', name: 'Tomato' },
    { hex: '#40E0D0', name: 'Turquoise' },
    { hex: '#EE82EE', name: 'Violet' },
    { hex: '#F5DEB3', name: 'Wheat' },
    { hex: '#FFFFFF', name: 'White' },
    { hex: '#F5F5F5', name: 'WhiteSmoke' },
    { hex: '#FFFF00', name: 'Yellow' },
    { hex: '#9ACD32', name: 'YellowGreen' }
];


/***/ }),

/***/ "./src/components/common/models/AnchorBuilder.ts":
/*!*******************************************************!*\
  !*** ./src/components/common/models/AnchorBuilder.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RawBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RawBuilder */ "./src/components/common/models/RawBuilder.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var AnchorBuilder = /** @class */ (function (_super) {
    __extends(AnchorBuilder, _super);
    function AnchorBuilder() {
        return _super.call(this, 'a') || this;
    }
    AnchorBuilder.prototype.setHiperlink = function (hiperlink) {
        this.element.href = hiperlink;
        return this;
    };
    return AnchorBuilder;
}(_RawBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnchorBuilder);


/***/ }),

/***/ "./src/components/common/models/ButtonBuilder.ts":
/*!*******************************************************!*\
  !*** ./src/components/common/models/ButtonBuilder.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RawBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RawBuilder */ "./src/components/common/models/RawBuilder.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ButtonBuilder = /** @class */ (function (_super) {
    __extends(ButtonBuilder, _super);
    function ButtonBuilder() {
        return _super.call(this, 'button') || this;
    }
    return ButtonBuilder;
}(_RawBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonBuilder);


/***/ }),

/***/ "./src/components/common/models/ContainerBuilder.ts":
/*!**********************************************************!*\
  !*** ./src/components/common/models/ContainerBuilder.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RawBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RawBuilder */ "./src/components/common/models/RawBuilder.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ContainerBuilder = /** @class */ (function (_super) {
    __extends(ContainerBuilder, _super);
    function ContainerBuilder() {
        return _super.call(this, 'div') || this;
    }
    ContainerBuilder.prototype.appendChildIfDefined = function (element) {
        if (element !== undefined) {
            this.element.appendChild(element);
        }
        return this;
    };
    return ContainerBuilder;
}(_RawBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContainerBuilder);


/***/ }),

/***/ "./src/components/common/models/FormBuilder.ts":
/*!*****************************************************!*\
  !*** ./src/components/common/models/FormBuilder.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RawBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RawBuilder */ "./src/components/common/models/RawBuilder.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var FormBuilder = /** @class */ (function (_super) {
    __extends(FormBuilder, _super);
    function FormBuilder() {
        return _super.call(this, 'form') || this;
    }
    FormBuilder.prototype.appendChildIfDefined = function (element) {
        if (element !== undefined) {
            this.element.appendChild(element);
        }
        return this;
    };
    return FormBuilder;
}(_RawBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormBuilder);


/***/ }),

/***/ "./src/components/common/models/ImageBuilder.ts":
/*!******************************************************!*\
  !*** ./src/components/common/models/ImageBuilder.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RawBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RawBuilder */ "./src/components/common/models/RawBuilder.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ImageBuilder = /** @class */ (function (_super) {
    __extends(ImageBuilder, _super);
    function ImageBuilder() {
        return _super.call(this, 'img') || this;
    }
    ImageBuilder.prototype.setUrl = function (url) {
        this.element.src = url;
        return this;
    };
    return ImageBuilder;
}(_RawBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageBuilder);


/***/ }),

/***/ "./src/components/common/models/InputBuilder.ts":
/*!******************************************************!*\
  !*** ./src/components/common/models/InputBuilder.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RawBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RawBuilder */ "./src/components/common/models/RawBuilder.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var InputBuilder = /** @class */ (function (_super) {
    __extends(InputBuilder, _super);
    function InputBuilder(type) {
        var _this = _super.call(this, 'input') || this;
        _this.element.type = type;
        return _this;
    }
    InputBuilder.prototype.getValue = function () {
        return this.element.value;
    };
    InputBuilder.prototype.setValue = function (value) {
        this.element.value = value;
        return this;
    };
    InputBuilder.prototype.setName = function (name) {
        this.element.name = name;
        return this;
    };
    InputBuilder.prototype.setPlaceholder = function (placeholder) {
        this.element.placeholder = placeholder;
        return this;
    };
    InputBuilder.prototype.checked = function (checked) {
        if (checked === void 0) { checked = true; }
        this.element.checked = checked;
        return this;
    };
    InputBuilder.prototype.setMax = function (max) {
        this.element.max = "".concat(max);
        return this;
    };
    InputBuilder.prototype.setMin = function (min) {
        this.element.min = "".concat(min);
        return this;
    };
    return InputBuilder;
}(_RawBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputBuilder);


/***/ }),

/***/ "./src/components/common/models/LabelBuilder.ts":
/*!******************************************************!*\
  !*** ./src/components/common/models/LabelBuilder.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RawBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RawBuilder */ "./src/components/common/models/RawBuilder.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var LabelBuilder = /** @class */ (function (_super) {
    __extends(LabelBuilder, _super);
    function LabelBuilder() {
        return _super.call(this, 'label') || this;
    }
    return LabelBuilder;
}(_RawBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LabelBuilder);


/***/ }),

/***/ "./src/components/common/models/ListItemBuilder.ts":
/*!*********************************************************!*\
  !*** ./src/components/common/models/ListItemBuilder.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RawBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RawBuilder */ "./src/components/common/models/RawBuilder.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ListItemBuilder = /** @class */ (function (_super) {
    __extends(ListItemBuilder, _super);
    function ListItemBuilder() {
        return _super.call(this, 'li') || this;
    }
    return ListItemBuilder;
}(_RawBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListItemBuilder);


/***/ }),

/***/ "./src/components/common/models/OrderedListBuilder.ts":
/*!************************************************************!*\
  !*** ./src/components/common/models/OrderedListBuilder.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RawBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RawBuilder */ "./src/components/common/models/RawBuilder.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var OrderedListBuilder = /** @class */ (function (_super) {
    __extends(OrderedListBuilder, _super);
    function OrderedListBuilder() {
        return _super.call(this, 'ol') || this;
    }
    OrderedListBuilder.prototype.appendChildIfDefined = function (element) {
        if (element !== undefined) {
            this.element.appendChild(element);
        }
        return this;
    };
    return OrderedListBuilder;
}(_RawBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderedListBuilder);


/***/ }),

/***/ "./src/components/common/models/RawBuilder.ts":
/*!****************************************************!*\
  !*** ./src/components/common/models/RawBuilder.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var RawBuilder = /** @class */ (function () {
    function RawBuilder(element) {
        this.element = document.createElement(element);
    }
    RawBuilder.prototype.setId = function (id) {
        this.element.id = id;
        return this;
    };
    RawBuilder.prototype.setName = function (name) {
        this.element['name'] = name;
        return this;
    };
    RawBuilder.prototype.setStyle = function (styleName, value) {
        this.element.style[styleName] = value;
        return this;
    };
    RawBuilder.prototype.setInnerText = function (text) {
        this.element.innerText = text;
        return this;
    };
    RawBuilder.prototype.draggable = function (selected) {
        if (selected === void 0) { selected = true; }
        this.element.draggable = selected;
        return this;
    };
    RawBuilder.prototype.addCssClassName = function (className) {
        this.element.classList.add(className);
        return this;
    };
    RawBuilder.prototype.getAllChilds = function () {
        var childNodes = [];
        this.element.childNodes.forEach(function (node) {
            childNodes.push(node);
        });
        return childNodes;
    };
    RawBuilder.prototype.findChildNodeByName = function (name) {
        return this.getAllChilds().find(function (node) {
            return node['name'] === name;
        });
    };
    RawBuilder.prototype.appendChild = function (element) {
        this.element.appendChild(element);
        return this;
    };
    RawBuilder.prototype.removeChildNode = function (node) {
        this.element.removeChild(node);
        return this;
    };
    RawBuilder.prototype.removeChildNodeByName = function (name) {
        this.removeChildNode(this.findChildNodeByName(name));
    };
    RawBuilder.prototype.mooveChildUpperPositionByName = function (name) {
        var _this = this;
        var nodesArray = this.getAllChilds();
        var indexOfChild = nodesArray.findIndex(function (node) {
            return node['name'] === name;
        });
        if (indexOfChild !== 0) {
            var itemsToMove = nodesArray.slice(-nodesArray.length + indexOfChild - 1);
            itemsToMove.forEach(function (node) { return _this.element.removeChild(node); });
            this.element.appendChild(nodesArray[indexOfChild]);
            itemsToMove.splice(1, 1);
            itemsToMove.forEach(function (node) { return _this.element.appendChild(node); });
        }
    };
    RawBuilder.prototype.mooveChildLowerPositionByName = function (name) {
        var _this = this;
        var nodesArray = this.getAllChilds();
        var indexOfChild = nodesArray.findIndex(function (node) {
            return node['name'] === name;
        });
        if (indexOfChild !== nodesArray.length - 1) {
            var itemsToMove = nodesArray.slice(-nodesArray.length + indexOfChild);
            itemsToMove.forEach(function (node) { return _this.element.removeChild(node); });
            var selectedElement = itemsToMove.splice(0, 1)[0];
            itemsToMove.splice(0 + 1, 0, selectedElement);
            itemsToMove.forEach(function (node) { return _this.element.appendChild(node); });
        }
    };
    RawBuilder.prototype.addEventListener = function (type, callback) {
        this.element.addEventListener(type, callback);
        return this;
    };
    RawBuilder.prototype.disabled = function (value) {
        this.element['disabled'] = value;
        return this;
    };
    RawBuilder.prototype.build = function () {
        return this.element;
    };
    return RawBuilder;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RawBuilder);


/***/ }),

/***/ "./src/components/common/models/SelectorFromArrayBuilder.ts":
/*!******************************************************************!*\
  !*** ./src/components/common/models/SelectorFromArrayBuilder.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RawBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RawBuilder */ "./src/components/common/models/RawBuilder.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var SelectorFromArrayBuilder = /** @class */ (function (_super) {
    __extends(SelectorFromArrayBuilder, _super);
    function SelectorFromArrayBuilder(options) {
        var _this = _super.call(this, 'select') || this;
        _this._options = options;
        _this.addOptions();
        return _this;
    }
    SelectorFromArrayBuilder.prototype.addOptions = function () {
        var _this = this;
        this._options.forEach(function (option) {
            var newOption = document.createElement('option');
            newOption.text = option.text;
            newOption.value = option.value;
            _this.element.appendChild(newOption);
        });
        return this;
    };
    SelectorFromArrayBuilder.prototype.selectOption = function (value) {
        var foundValueIndex = this._options.findIndex(function (key) { return key.value === value; });
        this.element.selectedIndex = foundValueIndex;
        return this;
    };
    Object.defineProperty(SelectorFromArrayBuilder.prototype, "value", {
        get: function () {
            return this.element.value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SelectorFromArrayBuilder.prototype, "selectedIndex", {
        get: function () {
            return this.element.selectedIndex;
        },
        set: function (index) {
            this.element.selectedIndex = index;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SelectorFromArrayBuilder.prototype, "options", {
        get: function () {
            return this.element.options;
        },
        enumerable: false,
        configurable: true
    });
    return SelectorFromArrayBuilder;
}(_RawBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectorFromArrayBuilder);


/***/ }),

/***/ "./src/components/common/models/SelectorFromEnumBuilder.ts":
/*!*****************************************************************!*\
  !*** ./src/components/common/models/SelectorFromEnumBuilder.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RawBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RawBuilder */ "./src/components/common/models/RawBuilder.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var SelectorFromEnumBuilder = /** @class */ (function (_super) {
    __extends(SelectorFromEnumBuilder, _super);
    function SelectorFromEnumBuilder(options) {
        var _this = _super.call(this, 'select') || this;
        _this.options = options;
        _this.keys = Object.keys(options);
        _this.addOptions();
        return _this;
    }
    SelectorFromEnumBuilder.prototype.getValue = function () {
        return this.element.value;
    };
    SelectorFromEnumBuilder.prototype.addOptions = function () {
        var _this = this;
        this.keys.forEach(function (optKey) {
            var newOption = document.createElement('option');
            newOption.text = optKey;
            newOption.value = _this.options[optKey];
            _this.element.appendChild(newOption);
        });
        return this;
    };
    SelectorFromEnumBuilder.prototype.selectOption = function (option) {
        var _this = this;
        var foundValueIndex = this.keys.findIndex(function (key) { return _this.options[key] === option; });
        this.element.selectedIndex = foundValueIndex;
        return this;
    };
    return SelectorFromEnumBuilder;
}(_RawBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectorFromEnumBuilder);


/***/ }),

/***/ "./src/components/common/models/StylesComponentsBuilder.ts":
/*!*****************************************************************!*\
  !*** ./src/components/common/models/StylesComponentsBuilder.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContainerBuilder */ "./src/components/common/models/ContainerBuilder.ts");

var StylesComponentsBuilder = /** @class */ (function () {
    function StylesComponentsBuilder() {
        this.htmlStylesContainer = new _ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]().build();
        this.actionsContainer = document.querySelector('#actions-container');
    }
    StylesComponentsBuilder.prototype.appendChild = function (element) {
        this.htmlStylesContainer.appendChild(element);
        return this;
    };
    StylesComponentsBuilder.prototype.build = function () {
        this.actionsContainer.innerHTML = '';
        this.actionsContainer.appendChild(this.htmlStylesContainer);
        return this.htmlStylesContainer;
    };
    StylesComponentsBuilder.prototype.remove = function () {
        this.actionsContainer.innerHTML = '';
    };
    return StylesComponentsBuilder;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StylesComponentsBuilder);


/***/ }),

/***/ "./src/components/common/models/TableBuilder.ts":
/*!******************************************************!*\
  !*** ./src/components/common/models/TableBuilder.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RawBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RawBuilder */ "./src/components/common/models/RawBuilder.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TableBuilder = /** @class */ (function (_super) {
    __extends(TableBuilder, _super);
    function TableBuilder() {
        return _super.call(this, 'table') || this;
    }
    TableBuilder.prototype.appendChildIfDefined = function (element) {
        if (element !== undefined) {
            this.element.appendChild(element);
        }
        return this;
    };
    return TableBuilder;
}(_RawBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableBuilder);


/***/ }),

/***/ "./src/components/common/models/TextAreaBuilder.ts":
/*!*********************************************************!*\
  !*** ./src/components/common/models/TextAreaBuilder.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RawBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RawBuilder */ "./src/components/common/models/RawBuilder.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TextareaBuilder = /** @class */ (function (_super) {
    __extends(TextareaBuilder, _super);
    function TextareaBuilder() {
        return _super.call(this, 'textarea') || this;
    }
    TextareaBuilder.prototype.setValue = function (value) {
        this.element.value = value;
        return this;
    };
    TextareaBuilder.prototype.getValue = function () {
        return this.element.value;
    };
    return TextareaBuilder;
}(_RawBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextareaBuilder);


/***/ }),

/***/ "./src/components/common/models/TitleBuilder.ts":
/*!******************************************************!*\
  !*** ./src/components/common/models/TitleBuilder.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RawBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RawBuilder */ "./src/components/common/models/RawBuilder.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TitleBuilder = /** @class */ (function (_super) {
    __extends(TitleBuilder, _super);
    function TitleBuilder(type) {
        return _super.call(this, type) || this;
    }
    return TitleBuilder;
}(_RawBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TitleBuilder);


/***/ }),

/***/ "./src/components/common/models/UnoderedListBuilder.ts":
/*!*************************************************************!*\
  !*** ./src/components/common/models/UnoderedListBuilder.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RawBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RawBuilder */ "./src/components/common/models/RawBuilder.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var UnoderedListBuilder = /** @class */ (function (_super) {
    __extends(UnoderedListBuilder, _super);
    function UnoderedListBuilder() {
        return _super.call(this, 'ul') || this;
    }
    UnoderedListBuilder.prototype.appendChildIfDefined = function (element) {
        if (element !== undefined) {
            this.element.appendChild(element);
        }
        return this;
    };
    return UnoderedListBuilder;
}(_RawBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UnoderedListBuilder);


/***/ }),

/***/ "./src/components/common/publishers/ClassChangePublisher.ts":
/*!******************************************************************!*\
  !*** ./src/components/common/publishers/ClassChangePublisher.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var ClassChangePublisher = /** @class */ (function () {
    function ClassChangePublisher() {
        this.observers = [];
    }
    ClassChangePublisher.prototype.attach = function (observer) {
        var isExist = this.observers.includes(observer);
        if (isExist) {
            return console.log('Subject: Observer has been attached already.');
        }
        this.observers.push(observer);
    };
    ClassChangePublisher.prototype.detach = function (observer) {
        var observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log('Subject: Nonexistent observer.');
        }
        this.observers.splice(observerIndex, 1);
    };
    ClassChangePublisher.prototype.notifyClassName = function (name) {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.classNameUpdated(name);
        }
    };
    return ClassChangePublisher;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClassChangePublisher);


/***/ }),

/***/ "./src/components/common/publishers/ComponentChangePublisher.ts":
/*!**********************************************************************!*\
  !*** ./src/components/common/publishers/ComponentChangePublisher.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var ComponentChangePublisher = /** @class */ (function () {
    function ComponentChangePublisher() {
        this.observers = [];
    }
    ComponentChangePublisher.prototype.attach = function (observer) {
        var isExist = this.observers.includes(observer);
        if (isExist) {
            return console.log('Subject: Observer has been attached already.');
        }
        this.observers.push(observer);
    };
    ComponentChangePublisher.prototype.detach = function (observer) {
        var observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log('Subject: Nonexistent observer.');
        }
        this.observers.splice(observerIndex, 1);
    };
    ComponentChangePublisher.prototype.notifyComponentName = function (name) {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.componentSelected(name);
        }
    };
    return ComponentChangePublisher;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComponentChangePublisher);


/***/ }),

/***/ "./src/components/css-stylesheet/css-stylesheet.ts":
/*!*********************************************************!*\
  !*** ./src/components/css-stylesheet/css-stylesheet.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _html_components_RawHTMLComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../html-components/RawHTMLComponent */ "./src/components/html-components/RawHTMLComponent.ts");

var CssStyleSheet = /** @class */ (function () {
    function CssStyleSheet() {
    }
    /*
    CSSStyleSheetDocumentation:
    https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/addRule
    */
    CssStyleSheet.init = function () {
        var printCssFileButton = document.querySelector('#print-css-file');
        this.print = this.print.bind(this);
        printCssFileButton.addEventListener('click', this.print);
    };
    CssStyleSheet.print = function () {
        var _this = this;
        var cssFileOutput = '';
        Object.keys(this.styleSheet.cssRules).forEach(function (key) {
            cssFileOutput += "".concat(_this.styleSheet.cssRules[parseInt(key)].cssText, "\n\n");
        });
        console.log(cssFileOutput);
        // TODO: ver si hay que eliminar algo del app-container... algun atributo...
    };
    CssStyleSheet.getRule = function (id) {
        var index = this.getRuleIndex(id);
        return this.styleSheet.cssRules[index];
    };
    CssStyleSheet.getRuleIndex = function (id) {
        var _this = this;
        var index = parseInt(Object.keys(this.styleSheet.cssRules).find(function (key) {
            var className = _this.styleSheet.cssRules[parseInt(key)]['selectorText'];
            return className === ".".concat(id);
        }));
        if (isNaN(index)) {
            return -1;
        }
        return index;
    };
    CssStyleSheet.getRules = function (id) {
        var _this = this;
        var indexes = this.getRulesIndexes(id);
        return indexes.map(function (index) { return _this.styleSheet.cssRules[index]; });
    };
    CssStyleSheet.getAllRules = function () {
        return Object.values(this.styleSheet.cssRules);
    };
    CssStyleSheet.getRulesIndexes = function (id) {
        var _this = this;
        return Object.keys(this.styleSheet.cssRules)
            .filter(function (key) {
            var className = _this.styleSheet.cssRules[parseInt(key)]['selectorText'];
            return className === ".".concat(id) || className.includes(".".concat(id, ":"));
        })
            .map(function (index) { return parseInt(index); });
    };
    CssStyleSheet.getRuleStyles = function (id) {
        var index = this.getRuleIndex(id);
        var styles = this.styleSheet.cssRules[index];
        return styles ? styles['style'] : {};
    };
    CssStyleSheet.removeRule = function (id) {
        var index = this.getRuleIndex(id);
        var existsRuleForAnotherComponent = false;
        _html_components_RawHTMLComponent__WEBPACK_IMPORTED_MODULE_0__["default"].instances.forEach(function (instance) {
            if (instance.classList.contains(id)) {
                existsRuleForAnotherComponent = true;
            }
        });
        if (!existsRuleForAnotherComponent) {
            this.styleSheet.deleteRule(index);
        }
    };
    CssStyleSheet.removeRuleByIndex = function (index) {
        this.styleSheet.deleteRule(index);
    };
    CssStyleSheet.insertRule = function (rule) {
        this.styleSheet.insertRule(rule);
    };
    CssStyleSheet.changeRuleName = function (currentRule, newRuleName) {
        var currentRuleIndex = this.getRuleIndex(currentRule);
        var newRule = this.styleSheet.cssRules[currentRuleIndex].cssText.replace(currentRule, newRuleName);
        this.removeRuleByIndex(currentRuleIndex);
        this.insertRule(newRule);
    };
    CssStyleSheet.duplicateRule = function (ruleToDuplicate, newName) {
        var ruleToDuplicateIndex = this.getRuleIndex(ruleToDuplicate);
        var newRule = this.styleSheet.cssRules[ruleToDuplicateIndex].cssText.replace(ruleToDuplicate, newName);
        this.insertRule(newRule);
    };
    CssStyleSheet.styleSheet = document.styleSheets[1];
    return CssStyleSheet;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CssStyleSheet);


/***/ }),

/***/ "./src/components/html-components/Anchor.ts":
/*!**************************************************!*\
  !*** ./src/components/html-components/Anchor.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_models_AnchorBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/models/AnchorBuilder */ "./src/components/common/models/AnchorBuilder.ts");
/* harmony import */ var _RawHTMLComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RawHTMLComponent */ "./src/components/html-components/RawHTMLComponent.ts");
/* harmony import */ var _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css-stylesheet/css-stylesheet */ "./src/components/css-stylesheet/css-stylesheet.ts");
/* harmony import */ var _common_functions_define_element_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/functions/define-element-name */ "./src/components/common/functions/define-element-name.ts");
/* harmony import */ var _common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/enums/add-component.enum */ "./src/components/common/enums/add-component.enum.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var Anchor = /** @class */ (function (_super) {
    __extends(Anchor, _super);
    function Anchor() {
        var _this = this;
        var name = (0,_common_functions_define_element_name__WEBPACK_IMPORTED_MODULE_3__["default"])("anchor".concat(Anchor.iterator++), _RawHTMLComponent__WEBPACK_IMPORTED_MODULE_1__["default"].instances);
        _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_2__["default"].insertRule(".".concat(name, " {\n            display: inline\n        }"));
        var element = new _common_models_AnchorBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setName(name)
            .setId(name)
            .addCssClassName(name)
            .setInnerText('New Anchor')
            .setHiperlink('')
            .draggable()
            .build();
        _this = _super.call(this, element) || this;
        _this.openElementConfigs = _this.openElementConfigs.bind(_this);
        _this.dragLeave = _this.dragLeave.bind(_this);
        _this._domElement.addEventListener('dragstart', _this.dragStartWithTargetId);
        _this._domElement.addEventListener('dragleave', _this.dragLeave);
        _this._domElement.addEventListener('click', _this.openElementConfigs);
        return _this;
    }
    Object.defineProperty(Anchor.prototype, "domElement", {
        get: function () {
            return this._domElement;
        },
        enumerable: false,
        configurable: true
    });
    Anchor.prototype.openElementConfigs = function (event) {
        event.stopPropagation();
        event.preventDefault();
        this.selectorValue();
        this.buildElementConfigs();
    };
    Anchor.prototype.componentSelected = function (component) {
        if (component === this._domElement['name']) {
            this.buildElementConfigs();
        }
    };
    Anchor.prototype.buildElementConfigs = function () {
        this.insertComponentAfter(_common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_4__.AddComponentEnum.addInnerTextChangeComponent, _common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_4__.AddComponentEnum.addClassNameDefinitionComponent);
        // TODO: falta agregar la url del href y ver si algo mas
        this.buildElements();
    };
    Anchor.iterator = 0;
    return Anchor;
}(_RawHTMLComponent__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Anchor);


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
/* harmony import */ var _common_models_ButtonBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/models/ButtonBuilder */ "./src/components/common/models/ButtonBuilder.ts");
/* harmony import */ var _RawHTMLComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RawHTMLComponent */ "./src/components/html-components/RawHTMLComponent.ts");
/* harmony import */ var _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css-stylesheet/css-stylesheet */ "./src/components/css-stylesheet/css-stylesheet.ts");
/* harmony import */ var _common_functions_define_element_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/functions/define-element-name */ "./src/components/common/functions/define-element-name.ts");
/* harmony import */ var _common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/enums/add-component.enum */ "./src/components/common/enums/add-component.enum.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        var _this = this;
        var name = (0,_common_functions_define_element_name__WEBPACK_IMPORTED_MODULE_3__["default"])("button".concat(Button.iterator++), _RawHTMLComponent__WEBPACK_IMPORTED_MODULE_1__["default"].instances);
        _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_2__["default"].insertRule(".".concat(name, " {\n            margin: 10px;\n            padding: 10px;\n            background-color: #4CAF50;\n            border-style: solid;\n            border-color: #4CAF50;\n            border-width: 1px;\n            color: #FFFFFF;\n            text-align: center;\n        }"));
        _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_2__["default"].insertRule(".".concat(name, ":hover {opacity: 0.6}"));
        var element = new _common_models_ButtonBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setName(name)
            .setId(name)
            .addCssClassName(name)
            .setInnerText('New Button')
            .draggable()
            .build();
        _this = _super.call(this, element) || this;
        _this.openElementConfigs = _this.openElementConfigs.bind(_this);
        _this.dragLeave = _this.dragLeave.bind(_this);
        _this._domElement.addEventListener('dragstart', _this.dragStartWithTargetId);
        _this._domElement.addEventListener('dragleave', _this.dragLeave);
        _this._domElement.addEventListener('click', _this.openElementConfigs);
        return _this;
    }
    Object.defineProperty(Button.prototype, "domElement", {
        get: function () {
            return this._domElement;
        },
        enumerable: false,
        configurable: true
    });
    Button.prototype.openElementConfigs = function (event) {
        event.stopPropagation();
        this.selectorValue();
        this.buildElementConfigs();
    };
    Button.prototype.componentSelected = function (component) {
        if (component === this._domElement['name']) {
            this.buildElementConfigs();
        }
    };
    Button.prototype.buildElementConfigs = function () {
        this.insertComponentAfter(_common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_4__.AddComponentEnum.addInnerTextChangeComponent, _common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_4__.AddComponentEnum.addClassNameDefinitionComponent);
        this.insertComponentBefore(_common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_4__.AddComponentEnum.addDisplayAsParentComponent, _common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_4__.AddComponentEnum.addDisplayAsChildComponent);
        this.buildElements();
    };
    Button.iterator = 0;
    return Button;
}(_RawHTMLComponent__WEBPACK_IMPORTED_MODULE_1__["default"]));
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
/* harmony import */ var _common_models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/models/ContainerBuilder */ "./src/components/common/models/ContainerBuilder.ts");
/* harmony import */ var _RawHTMLComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RawHTMLComponent */ "./src/components/html-components/RawHTMLComponent.ts");
/* harmony import */ var _RawContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RawContainer */ "./src/components/html-components/RawContainer.ts");
/* harmony import */ var _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css-stylesheet/css-stylesheet */ "./src/components/css-stylesheet/css-stylesheet.ts");
/* harmony import */ var _common_constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/constants/constants */ "./src/components/common/constants/constants.ts");
/* harmony import */ var _common_functions_define_element_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/functions/define-element-name */ "./src/components/common/functions/define-element-name.ts");
/* harmony import */ var _common_enums_display_types_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/enums/display-types.enum */ "./src/components/common/enums/display-types.enum.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







var Container = /** @class */ (function (_super) {
    __extends(Container, _super);
    function Container() {
        var name = (0,_common_functions_define_element_name__WEBPACK_IMPORTED_MODULE_5__["default"])("container".concat(Container.iterator++), _RawHTMLComponent__WEBPACK_IMPORTED_MODULE_1__["default"].instances);
        _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_3__["default"].insertRule(".".concat(name, " {\n            margin: 10px;\n            padding: 10px;\n            display: ").concat(_common_enums_display_types_enum__WEBPACK_IMPORTED_MODULE_6__.DisplayTypesEnum.flex, ";\n            flex-direction: column;\n            background-color: rgb(255,255,255);\n            border: 1px dashed rgb(0,0,0);\n        }"));
        _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_3__["default"].insertRule(".".concat(name, ":hover {\n            background-color: ").concat(_common_constants_constants__WEBPACK_IMPORTED_MODULE_4__["default"].INVERTED_BACKGROUND_COLOR, ";\n        }"));
        var element = new _common_models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setName(name)
            .setId(name)
            .addCssClassName(name)
            .draggable()
            .build();
        return _super.call(this, element) || this;
    }
    Container.iterator = 0;
    return Container;
}(_RawContainer__WEBPACK_IMPORTED_MODULE_2__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);


/***/ }),

/***/ "./src/components/html-components/Form.ts":
/*!************************************************!*\
  !*** ./src/components/html-components/Form.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_models_FormBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/models/FormBuilder */ "./src/components/common/models/FormBuilder.ts");
/* harmony import */ var _RawHTMLComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RawHTMLComponent */ "./src/components/html-components/RawHTMLComponent.ts");
/* harmony import */ var _RawContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RawContainer */ "./src/components/html-components/RawContainer.ts");
/* harmony import */ var _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css-stylesheet/css-stylesheet */ "./src/components/css-stylesheet/css-stylesheet.ts");
/* harmony import */ var _common_constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/constants/constants */ "./src/components/common/constants/constants.ts");
/* harmony import */ var _common_functions_define_element_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/functions/define-element-name */ "./src/components/common/functions/define-element-name.ts");
/* harmony import */ var _common_enums_display_types_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/enums/display-types.enum */ "./src/components/common/enums/display-types.enum.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







var Form = /** @class */ (function (_super) {
    __extends(Form, _super);
    function Form() {
        var _this = this;
        var name = (0,_common_functions_define_element_name__WEBPACK_IMPORTED_MODULE_5__["default"])("form".concat(Form.iterator++), _RawHTMLComponent__WEBPACK_IMPORTED_MODULE_1__["default"].instances);
        _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_3__["default"].insertRule(".".concat(name, " {\n            margin: 10px;\n            padding: 10px;\n            display: ").concat(_common_enums_display_types_enum__WEBPACK_IMPORTED_MODULE_6__.DisplayTypesEnum.flex, ";\n            flex-direction: column;\n            background-color: rgb(255,255,255);\n            border: 1px dashed rgb(0,0,0);\n        }"));
        _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_3__["default"].insertRule(".".concat(name, ":hover {\n            background-color: ").concat(_common_constants_constants__WEBPACK_IMPORTED_MODULE_4__["default"].INVERTED_BACKGROUND_COLOR, ";\n        }"));
        var element = new _common_models_FormBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setName(name)
            .setId(name)
            .addCssClassName(name)
            .draggable()
            .build();
        _this = _super.call(this, element) || this;
        _this._domElement.addEventListener('submit', _this.eventPreventDefault);
        return _this;
    }
    Form.prototype.eventPreventDefault = function (event) {
        event.preventDefault();
    };
    Form.iterator = 0;
    return Form;
}(_RawContainer__WEBPACK_IMPORTED_MODULE_2__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);


/***/ }),

/***/ "./src/components/html-components/Image.ts":
/*!*************************************************!*\
  !*** ./src/components/html-components/Image.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_models_ImageBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/models/ImageBuilder */ "./src/components/common/models/ImageBuilder.ts");
/* harmony import */ var _RawHTMLComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RawHTMLComponent */ "./src/components/html-components/RawHTMLComponent.ts");
/* harmony import */ var _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css-stylesheet/css-stylesheet */ "./src/components/css-stylesheet/css-stylesheet.ts");
/* harmony import */ var _common_functions_define_element_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/functions/define-element-name */ "./src/components/common/functions/define-element-name.ts");
/* harmony import */ var _common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/enums/add-component.enum */ "./src/components/common/enums/add-component.enum.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var Image = /** @class */ (function (_super) {
    __extends(Image, _super);
    function Image() {
        var _this = this;
        var name = (0,_common_functions_define_element_name__WEBPACK_IMPORTED_MODULE_3__["default"])("image".concat(Image.iterator++), _RawHTMLComponent__WEBPACK_IMPORTED_MODULE_1__["default"].instances);
        _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_2__["default"].insertRule(".".concat(name, " {\n            margin: 10px;\n            padding: 10px;\n            background-color: rgb(255,255,255);\n            border: 1px dashed rgb(0,0,0);\n        }"));
        var element = new _common_models_ImageBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setName(name)
            .setId(name)
            .addCssClassName(name)
            .setUrl()
            .draggable()
            .build();
        _this = _super.call(this, element) || this;
        _this.openElementConfigs = _this.openElementConfigs.bind(_this);
        _this.dragLeave = _this.dragLeave.bind(_this);
        _this._domElement.addEventListener('dragstart', _this.dragStartWithTargetId);
        _this._domElement.addEventListener('dragleave', _this.dragLeave);
        _this._domElement.addEventListener('click', _this.openElementConfigs);
        return _this;
    }
    Object.defineProperty(Image.prototype, "domElement", {
        get: function () {
            return this._domElement;
        },
        enumerable: false,
        configurable: true
    });
    Image.prototype.openElementConfigs = function (event) {
        event.stopPropagation();
        this.selectorValue();
        this.buildElementConfigs();
    };
    Image.prototype.componentSelected = function (component) {
        if (component === this._domElement['name']) {
            this.buildElementConfigs();
        }
    };
    Image.prototype.buildElementConfigs = function () {
        this.insertComponentAfter(_common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_4__.AddComponentEnum.addUrlInputComponent, _common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_4__.AddComponentEnum.addClassNameDefinitionComponent);
        this.buildElements();
    };
    Image.iterator = 0;
    return Image;
}(_RawHTMLComponent__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Image);


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
/* harmony import */ var _common_models_InputBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/models/InputBuilder */ "./src/components/common/models/InputBuilder.ts");
/* harmony import */ var _RawHTMLComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RawHTMLComponent */ "./src/components/html-components/RawHTMLComponent.ts");
/* harmony import */ var _common_functions_define_element_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/functions/define-element-name */ "./src/components/common/functions/define-element-name.ts");
/* harmony import */ var _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css-stylesheet/css-stylesheet */ "./src/components/css-stylesheet/css-stylesheet.ts");
/* harmony import */ var _common_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/enums/input-type.enum */ "./src/components/common/enums/input-type.enum.ts");
/* harmony import */ var _common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/enums/add-component.enum */ "./src/components/common/enums/add-component.enum.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input() {
        var _this = this;
        var name = (0,_common_functions_define_element_name__WEBPACK_IMPORTED_MODULE_2__["default"])("input".concat(Input.iterator++), _RawHTMLComponent__WEBPACK_IMPORTED_MODULE_1__["default"].instances);
        _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_3__["default"].insertRule(".".concat(name, " {\n            margin: 10px;\n            padding: 10px;\n            border: 1px solid #ccc;\n            border-radius: 4px;\n            box-shadow: inset 0 1px 3px #ddd;\n        }"));
        _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_3__["default"].insertRule(".".concat(name, ":hover {\n            border: 1px solid red;\n        }"));
        var element = new _common_models_InputBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](_common_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_4__.InputTypeEnum.text)
            .setName(name)
            .setId(name)
            .addCssClassName(name)
            .draggable()
            .build();
        _this = _super.call(this, element) || this;
        _this.openElementConfigs = _this.openElementConfigs.bind(_this);
        _this.dragLeave = _this.dragLeave.bind(_this);
        _this._domElement.addEventListener('dragstart', _this.dragStartWithTargetId);
        _this._domElement.addEventListener('dragleave', _this.dragLeave);
        _this._domElement.addEventListener('click', _this.openElementConfigs);
        return _this;
    }
    Object.defineProperty(Input.prototype, "domElement", {
        get: function () {
            return this._domElement;
        },
        enumerable: false,
        configurable: true
    });
    Input.prototype.openElementConfigs = function (event) {
        event.stopPropagation();
        this.selectorValue();
        this.buildElementConfigs();
    };
    Input.prototype.componentSelected = function (component) {
        if (component === this._domElement['name']) {
            this.buildElementConfigs();
        }
    };
    Input.prototype.buildElementConfigs = function () {
        this.insertComponentAfter(_common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_5__.AddComponentEnum.addInputTypeSelectorComponent, _common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_5__.AddComponentEnum.addClassNameDefinitionComponent);
        this.buildElements();
    };
    Input.iterator = 0;
    return Input;
}(_RawHTMLComponent__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);


/***/ }),

/***/ "./src/components/html-components/Label.ts":
/*!*************************************************!*\
  !*** ./src/components/html-components/Label.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_models_LabelBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/models/LabelBuilder */ "./src/components/common/models/LabelBuilder.ts");
/* harmony import */ var _RawHTMLComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RawHTMLComponent */ "./src/components/html-components/RawHTMLComponent.ts");
/* harmony import */ var _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css-stylesheet/css-stylesheet */ "./src/components/css-stylesheet/css-stylesheet.ts");
/* harmony import */ var _common_functions_define_element_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/functions/define-element-name */ "./src/components/common/functions/define-element-name.ts");
/* harmony import */ var _common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/enums/add-component.enum */ "./src/components/common/enums/add-component.enum.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var Label = /** @class */ (function (_super) {
    __extends(Label, _super);
    function Label() {
        var _this = this;
        var name = (0,_common_functions_define_element_name__WEBPACK_IMPORTED_MODULE_3__["default"])("label".concat(Label.iterator++), _RawHTMLComponent__WEBPACK_IMPORTED_MODULE_1__["default"].instances);
        _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_2__["default"].insertRule(".".concat(name, " {\n            display: inline\n        }"));
        var element = new _common_models_LabelBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setName(name)
            .setId(name)
            .addCssClassName(name)
            .setInnerText('New Label')
            .draggable()
            .build();
        _this = _super.call(this, element) || this;
        _this.openElementConfigs = _this.openElementConfigs.bind(_this);
        _this.dragLeave = _this.dragLeave.bind(_this);
        _this._domElement.addEventListener('dragstart', _this.dragStartWithTargetId);
        _this._domElement.addEventListener('dragleave', _this.dragLeave);
        _this._domElement.addEventListener('click', _this.openElementConfigs);
        return _this;
    }
    Object.defineProperty(Label.prototype, "domElement", {
        get: function () {
            return this._domElement;
        },
        enumerable: false,
        configurable: true
    });
    Label.prototype.openElementConfigs = function (event) {
        event.stopPropagation();
        this.selectorValue();
        this.buildElementConfigs();
    };
    Label.prototype.componentSelected = function (component) {
        if (component === this._domElement['name']) {
            this.buildElementConfigs();
        }
    };
    Label.prototype.buildElementConfigs = function () {
        this.insertComponentAfter(_common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_4__.AddComponentEnum.addInnerTextChangeComponent, _common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_4__.AddComponentEnum.addClassNameDefinitionComponent);
        this.buildElements();
    };
    Label.iterator = 0;
    return Label;
}(_RawHTMLComponent__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Label);


/***/ }),

/***/ "./src/components/html-components/ListItem.ts":
/*!****************************************************!*\
  !*** ./src/components/html-components/ListItem.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_models_ListItemBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/models/ListItemBuilder */ "./src/components/common/models/ListItemBuilder.ts");
/* harmony import */ var _RawHTMLComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RawHTMLComponent */ "./src/components/html-components/RawHTMLComponent.ts");
/* harmony import */ var _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css-stylesheet/css-stylesheet */ "./src/components/css-stylesheet/css-stylesheet.ts");
/* harmony import */ var _common_functions_define_element_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/functions/define-element-name */ "./src/components/common/functions/define-element-name.ts");
/* harmony import */ var _common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/enums/add-component.enum */ "./src/components/common/enums/add-component.enum.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var ListItem = /** @class */ (function (_super) {
    __extends(ListItem, _super);
    function ListItem() {
        var _this = this;
        var name = (0,_common_functions_define_element_name__WEBPACK_IMPORTED_MODULE_3__["default"])("list_item".concat(ListItem.iterator++), _RawHTMLComponent__WEBPACK_IMPORTED_MODULE_1__["default"].instances);
        _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_2__["default"].insertRule(".".concat(name, " {}"));
        var element = new _common_models_ListItemBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setName(name)
            .setId(name)
            .addCssClassName(name)
            .setInnerText('New List Item')
            .draggable()
            .build();
        _this = _super.call(this, element) || this;
        _this.openElementConfigs = _this.openElementConfigs.bind(_this);
        _this.dragLeave = _this.dragLeave.bind(_this);
        _this._domElement.addEventListener('dragstart', _this.dragStartWithTargetId);
        _this._domElement.addEventListener('dragleave', _this.dragLeave);
        _this._domElement.addEventListener('click', _this.openElementConfigs);
        return _this;
    }
    Object.defineProperty(ListItem.prototype, "domElement", {
        get: function () {
            return this._domElement;
        },
        enumerable: false,
        configurable: true
    });
    ListItem.prototype.openElementConfigs = function (event) {
        event.stopPropagation();
        this.selectorValue();
        this.buildElementConfigs();
    };
    ListItem.prototype.componentSelected = function (component) {
        if (component === this._domElement['name']) {
            this.buildElementConfigs();
        }
    };
    ListItem.prototype.buildElementConfigs = function () {
        this.insertComponentAfter(_common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_4__.AddComponentEnum.addInnerTextChangeComponent, _common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_4__.AddComponentEnum.addClassNameDefinitionComponent);
        this.buildElements();
    };
    ListItem.iterator = 0;
    return ListItem;
}(_RawHTMLComponent__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListItem);


/***/ }),

/***/ "./src/components/html-components/OrderedList.ts":
/*!*******************************************************!*\
  !*** ./src/components/html-components/OrderedList.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_models_OrderedListBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/models/OrderedListBuilder */ "./src/components/common/models/OrderedListBuilder.ts");
/* harmony import */ var _RawHTMLComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RawHTMLComponent */ "./src/components/html-components/RawHTMLComponent.ts");
/* harmony import */ var _RawContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RawContainer */ "./src/components/html-components/RawContainer.ts");
/* harmony import */ var _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css-stylesheet/css-stylesheet */ "./src/components/css-stylesheet/css-stylesheet.ts");
/* harmony import */ var _common_constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/constants/constants */ "./src/components/common/constants/constants.ts");
/* harmony import */ var _common_functions_define_element_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/functions/define-element-name */ "./src/components/common/functions/define-element-name.ts");
/* harmony import */ var _common_enums_display_types_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/enums/display-types.enum */ "./src/components/common/enums/display-types.enum.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







var OrderedList = /** @class */ (function (_super) {
    __extends(OrderedList, _super);
    function OrderedList() {
        var name = (0,_common_functions_define_element_name__WEBPACK_IMPORTED_MODULE_5__["default"])("ordered_list".concat(OrderedList.iterator++), _RawHTMLComponent__WEBPACK_IMPORTED_MODULE_1__["default"].instances);
        _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_3__["default"].insertRule(".".concat(name, " {\n            margin: 10px;\n            padding: 10px;\n            display: ").concat(_common_enums_display_types_enum__WEBPACK_IMPORTED_MODULE_6__.DisplayTypesEnum.flex, ";\n            flex-direction: column;\n            background-color: rgb(255,255,255);\n            border: 1px dashed rgb(0,0,0);\n        }"));
        _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_3__["default"].insertRule(".".concat(name, ":hover {\n            background-color: ").concat(_common_constants_constants__WEBPACK_IMPORTED_MODULE_4__["default"].INVERTED_BACKGROUND_COLOR, ";\n        }"));
        var element = new _common_models_OrderedListBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setName(name)
            .setId(name)
            .addCssClassName(name)
            .draggable()
            .build();
        return _super.call(this, element) || this;
    }
    OrderedList.iterator = 0;
    return OrderedList;
}(_RawContainer__WEBPACK_IMPORTED_MODULE_2__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderedList);


/***/ }),

/***/ "./src/components/html-components/RawContainer.ts":
/*!********************************************************!*\
  !*** ./src/components/html-components/RawContainer.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RawHTMLComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RawHTMLComponent */ "./src/components/html-components/RawHTMLComponent.ts");
/* harmony import */ var _common_constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/constants/constants */ "./src/components/common/constants/constants.ts");
/* harmony import */ var _common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/enums/add-component.enum */ "./src/components/common/enums/add-component.enum.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var RawContainer = /** @class */ (function (_super) {
    __extends(RawContainer, _super);
    function RawContainer(element) {
        var _this = _super.call(this, element) || this;
        _this.dragEnter = _this.dragEnter.bind(_this);
        _this.dragLeaveForThisElement = _this.dragLeaveForThisElement.bind(_this);
        _this.drop = _this.drop.bind(_this);
        _this.openElementConfigs = _this.openElementConfigs.bind(_this);
        _this._domElement.addEventListener('dragstart', _this.dragStartWithTargetId);
        _this._domElement.addEventListener('dragenter', _this.dragEnter);
        _this._domElement.addEventListener('dragleave', _this.dragLeaveForThisElement);
        _this._domElement.addEventListener('drop', _this.drop);
        _this._domElement.addEventListener('click', _this.openElementConfigs);
        return _this;
    }
    Object.defineProperty(RawContainer.prototype, "domElement", {
        get: function () {
            return this._domElement;
        },
        enumerable: false,
        configurable: true
    });
    RawContainer.prototype.dragEnter = function (event) {
        event.stopPropagation();
        this.domElement.style.backgroundColor = _common_constants_constants__WEBPACK_IMPORTED_MODULE_1__["default"].INVERTED_BACKGROUND_COLOR;
    };
    RawContainer.prototype.dragLeaveForThisElement = function (event) {
        event.stopPropagation();
        this.domElement.style.backgroundColor = '';
        this._domElement.attributes.removeNamedItem('style');
    };
    RawContainer.prototype.drop = function () {
        this.domElement.style.backgroundColor = '';
    };
    RawContainer.prototype.openElementConfigs = function (event) {
        event.stopPropagation();
        this.selectorValue();
        this.buildElementConfigs();
    };
    RawContainer.prototype.componentSelected = function (component) {
        if (component === this._domElement['name']) {
            this.buildElementConfigs();
        }
    };
    RawContainer.prototype.buildElementConfigs = function () {
        this.insertComponentBefore(_common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_2__.AddComponentEnum.addDisplayAsParentComponent, _common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_2__.AddComponentEnum.addDisplayAsChildComponent);
        this.addChildConfigs();
        this.buildElements();
    };
    RawContainer.prototype.addChildConfigs = function () {
        return;
    };
    return RawContainer;
}(_RawHTMLComponent__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RawContainer);


/***/ }),

/***/ "./src/components/html-components/RawHTMLComponent.ts":
/*!************************************************************!*\
  !*** ./src/components/html-components/RawHTMLComponent.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_publishers_ClassChangePublisher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/publishers/ClassChangePublisher */ "./src/components/common/publishers/ClassChangePublisher.ts");
/* harmony import */ var _common_models_ButtonBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/models/ButtonBuilder */ "./src/components/common/models/ButtonBuilder.ts");
/* harmony import */ var _common_models_LabelBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/models/LabelBuilder */ "./src/components/common/models/LabelBuilder.ts");
/* harmony import */ var _common_models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/models/ContainerBuilder */ "./src/components/common/models/ContainerBuilder.ts");
/* harmony import */ var _common_models_StylesComponentsBuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/models/StylesComponentsBuilder */ "./src/components/common/models/StylesComponentsBuilder.ts");
/* harmony import */ var _common_constants_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/constants/constants */ "./src/components/common/constants/constants.ts");
/* harmony import */ var _common_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/enums/input-type.enum */ "./src/components/common/enums/input-type.enum.ts");
/* harmony import */ var _common_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/enums/style-name.enum */ "./src/components/common/enums/style-name.enum.ts");
/* harmony import */ var _common_enums_display_types_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/enums/display-types.enum */ "./src/components/common/enums/display-types.enum.ts");
/* harmony import */ var _common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/enums/add-component.enum */ "./src/components/common/enums/add-component.enum.ts");
/* harmony import */ var _common_components_display_as_parent_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/components/display-as-parent.component */ "./src/components/common/components/display-as-parent.component.ts");
/* harmony import */ var _common_components_generic_primary_input_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/components/generic-primary-input.component */ "./src/components/common/components/generic-primary-input.component.ts");
/* harmony import */ var _common_components_generic_primary_selector_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/components/generic-primary-selector.component */ "./src/components/common/components/generic-primary-selector.component.ts");
/* harmony import */ var _common_components_id_definition_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/components/id-definition.component */ "./src/components/common/components/id-definition.component.ts");
/* harmony import */ var _common_components_margin_or_padding_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/components/margin-or-padding.component */ "./src/components/common/components/margin-or-padding.component.ts");
/* harmony import */ var _common_components_display_as_child_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/components/display-as-child.component */ "./src/components/common/components/display-as-child.component.ts");
/* harmony import */ var _common_components_border_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common/components/border.component */ "./src/components/common/components/border.component.ts");
/* harmony import */ var _common_components_background_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../common/components/background.component */ "./src/components/common/components/background.component.ts");
/* harmony import */ var _common_components_box_shadow_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../common/components/box-shadow.component */ "./src/components/common/components/box-shadow.component.ts");
/* harmony import */ var _common_components_class_management_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../common/components/class-management.component */ "./src/components/common/components/class-management.component.ts");
/* harmony import */ var _common_components_sizes_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../common/components/sizes.component */ "./src/components/common/components/sizes.component.ts");
/* harmony import */ var _common_components_font_components__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../common/components/font.components */ "./src/components/common/components/font.components.ts");
/* harmony import */ var _common_components_url_definition_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../common/components/url-definition-component */ "./src/components/common/components/url-definition-component.ts");























var RawHTMLConponent = /** @class */ (function () {
    function RawHTMLConponent(domElement) {
        this.itemsSelector = document.querySelector('#select-item');
        this.optionElement = document.createElement('option');
        this.commonComponents = [
            _common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_9__.AddComponentEnum.addIdDefinitionComponent,
            _common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_9__.AddComponentEnum.addClassNameDefinitionComponent,
            _common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_9__.AddComponentEnum.addMarginStyleComponent,
            _common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_9__.AddComponentEnum.addPaddingStyleComponent,
            _common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_9__.AddComponentEnum.addSizeComponents,
            _common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_9__.AddComponentEnum.addFontComponens,
            _common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_9__.AddComponentEnum.addBackgroundSettingsComponent,
            _common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_9__.AddComponentEnum.addBorderSettingsComponent,
            _common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_9__.AddComponentEnum.addBoxShadowComponent,
            _common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_9__.AddComponentEnum.addDisplayAsChildComponent,
            _common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_9__.AddComponentEnum.addActionsComponents,
        ];
        this._domElement = domElement;
        RawHTMLConponent.instances.push(this._domElement);
        this.classChangePublisher = new _common_publishers_ClassChangePublisher__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.optionElement.value = this.domElement.id;
        this.optionElement.text = this.domElement.id;
        this.itemsSelector.appendChild(this.optionElement);
        this.removeElement = this.removeElement.bind(this);
    }
    Object.defineProperty(RawHTMLConponent.prototype, "domElement", {
        get: function () {
            return this._domElement;
        },
        enumerable: false,
        configurable: true
    });
    RawHTMLConponent.prototype.dragStartWithTargetId = function (event) {
        event.dataTransfer.setData('text/plain', event.target.id);
    };
    RawHTMLConponent.prototype.addIdDefinitionComponent = function () {
        return new _common_components_id_definition_component__WEBPACK_IMPORTED_MODULE_13__["default"](this._domElement).component;
    };
    RawHTMLConponent.prototype.addClassNameDefinitionComponent = function () {
        return new _common_components_class_management_component__WEBPACK_IMPORTED_MODULE_19__["default"](this._domElement, this.classChangePublisher).component;
    };
    RawHTMLConponent.prototype.addMarginStyleComponent = function () {
        var component = new _common_components_margin_or_padding_component__WEBPACK_IMPORTED_MODULE_14__["default"](this._domElement, _common_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_7__.StyleNameEnum.margin);
        this.classChangePublisher.attach(component);
        return component.component;
    };
    RawHTMLConponent.prototype.addPaddingStyleComponent = function () {
        var component = new _common_components_margin_or_padding_component__WEBPACK_IMPORTED_MODULE_14__["default"](this._domElement, _common_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_7__.StyleNameEnum.padding);
        this.classChangePublisher.attach(component);
        return component.component;
    };
    RawHTMLConponent.prototype.addInnerTextChangeComponent = function () {
        var _this = this;
        var canAddText = function () {
            if (_this.domElement.innerHTML.includes('<')) {
                alert('InnerHTML must be empty');
                return false;
            }
            return true;
        };
        return new _common_components_generic_primary_input_component__WEBPACK_IMPORTED_MODULE_11__["default"](this._domElement, 'innerText', 'Inner Text', canAddText).component;
    };
    RawHTMLConponent.prototype.addInputTypeSelectorComponent = function () {
        return new _common_components_generic_primary_selector_component__WEBPACK_IMPORTED_MODULE_12__["default"](this._domElement, 'type', 'Input Type Selector', _common_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_6__.InputTypeEnum).component;
    };
    RawHTMLConponent.prototype.addLabelComponent = function (label) {
        return new _common_models_LabelBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setInnerText(label)
            .build();
    };
    RawHTMLConponent.prototype.addDisplayAsParentComponent = function () {
        var component = new _common_components_display_as_parent_component__WEBPACK_IMPORTED_MODULE_10__["default"](this._domElement);
        this.classChangePublisher.attach(component);
        return component.component;
    };
    RawHTMLConponent.prototype.addDisplayAsChildComponent = function () {
        var component = new _common_components_display_as_child_component__WEBPACK_IMPORTED_MODULE_15__["default"](this._domElement);
        this.classChangePublisher.attach(component);
        return component.component;
    };
    RawHTMLConponent.prototype.addBorderSettingsComponent = function () {
        var component = new _common_components_border_component__WEBPACK_IMPORTED_MODULE_16__["default"](this._domElement);
        this.classChangePublisher.attach(component);
        return component.component;
    };
    RawHTMLConponent.prototype.addBackgroundSettingsComponent = function () {
        var component = new _common_components_background_component__WEBPACK_IMPORTED_MODULE_17__["default"](this._domElement);
        this.classChangePublisher.attach(component);
        return component.component;
    };
    RawHTMLConponent.prototype.addBoxShadowComponent = function () {
        var component = new _common_components_box_shadow_component__WEBPACK_IMPORTED_MODULE_18__["default"](this._domElement);
        this.classChangePublisher.attach(component);
        return component.component;
    };
    RawHTMLConponent.prototype.addSizeComponents = function () {
        var component = new _common_components_sizes_component__WEBPACK_IMPORTED_MODULE_20__["default"](this._domElement);
        this.classChangePublisher.attach(component);
        return component.component;
    };
    RawHTMLConponent.prototype.addFontComponens = function () {
        var component = new _common_components_font_components__WEBPACK_IMPORTED_MODULE_21__["default"](this._domElement);
        this.classChangePublisher.attach(component);
        return component.component;
    };
    RawHTMLConponent.prototype.addUrlInputComponent = function () {
        var component = new _common_components_url_definition_component__WEBPACK_IMPORTED_MODULE_22__["default"](this._domElement);
        return component.component;
    };
    RawHTMLConponent.prototype.addActionsComponents = function () {
        return new _common_models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_3__["default"]()
            .setStyle(_common_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_7__.StyleNameEnum.border, '1px solid #4CAF50')
            .setStyle(_common_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_7__.StyleNameEnum.padding, '3px')
            .setStyle(_common_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_7__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new _common_models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_3__["default"]()
            .setStyle(_common_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_7__.StyleNameEnum.display, _common_enums_display_types_enum__WEBPACK_IMPORTED_MODULE_8__.DisplayTypesEnum.flex)
            .setStyle(_common_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_7__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new _common_models_LabelBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setInnerText('Available Actions')
            .build())
            .build())
            .appendChild(new _common_models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_3__["default"]()
            .setStyle(_common_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_7__.StyleNameEnum.display, _common_enums_display_types_enum__WEBPACK_IMPORTED_MODULE_8__.DisplayTypesEnum.flex)
            .setStyle(_common_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_7__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(this.addRemoveElementComponent())
            .build())
            .build();
    };
    RawHTMLConponent.prototype.addRemoveElementComponent = function () {
        return new _common_models_ButtonBuilder__WEBPACK_IMPORTED_MODULE_1__["default"]()
            .setInnerText('Remove Element')
            .addEventListener('click', this.removeElement)
            .build();
    };
    RawHTMLConponent.prototype.removeElement = function () {
        if (confirm('Are you sure to remove this component')) {
            var parent_1 = this._domElement.parentNode;
            parent_1.removeChild(this._domElement);
            this.stylesComponents.remove();
            this.itemsSelector.removeChild(this.optionElement);
        }
    };
    RawHTMLConponent.prototype.dragLeave = function (event) {
        event.stopPropagation();
        if (this._domElement.parentElement.tagName === 'DIV') {
            this._domElement.parentElement.style.backgroundColor = _common_constants_constants__WEBPACK_IMPORTED_MODULE_5__["default"].INVERTED_BACKGROUND_COLOR;
        }
    };
    RawHTMLConponent.prototype.selectorValue = function () {
        var _this = this;
        var thisOptionIndex;
        this.itemsSelector.childNodes.forEach(function (child, index) {
            child.value === _this.domElement.id ? thisOptionIndex = index : undefined;
        });
        this.itemsSelector.selectedIndex = thisOptionIndex;
    };
    RawHTMLConponent.prototype.componentSelected = function (component) {
        return;
    };
    RawHTMLConponent.prototype.insertComponentBefore = function (componentToInsert, referenceComponent) {
        var alreadyExists = this.commonComponents.find(function (comp) { return comp === componentToInsert; });
        if (alreadyExists) {
            return;
        }
        var index = this.commonComponents.findIndex(function (comp) { return comp === referenceComponent; });
        this.commonComponents.splice(index, 0, componentToInsert);
    };
    RawHTMLConponent.prototype.insertComponentAfter = function (componentToInsert, referenceComponent) {
        var alreadyExists = this.commonComponents.find(function (comp) { return comp === componentToInsert; });
        if (alreadyExists) {
            return;
        }
        var index = this.commonComponents.findIndex(function (comp) { return comp === referenceComponent; });
        this.commonComponents.splice(index + 1, 0, componentToInsert);
    };
    RawHTMLConponent.prototype.buildElements = function () {
        var _this = this;
        this.stylesComponents = new _common_models_StylesComponentsBuilder__WEBPACK_IMPORTED_MODULE_4__["default"]();
        this.commonComponents.forEach(function (componentName) {
            _this.stylesComponents.appendChild(_this[componentName]());
        });
        this.stylesComponents.build();
    };
    RawHTMLConponent.instances = [];
    return RawHTMLConponent;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RawHTMLConponent);


/***/ }),

/***/ "./src/components/html-components/Table.ts":
/*!*************************************************!*\
  !*** ./src/components/html-components/Table.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_models_TableBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/models/TableBuilder */ "./src/components/common/models/TableBuilder.ts");
/* harmony import */ var _RawHTMLComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RawHTMLComponent */ "./src/components/html-components/RawHTMLComponent.ts");
/* harmony import */ var _RawContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RawContainer */ "./src/components/html-components/RawContainer.ts");
/* harmony import */ var _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css-stylesheet/css-stylesheet */ "./src/components/css-stylesheet/css-stylesheet.ts");
/* harmony import */ var _common_constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/constants/constants */ "./src/components/common/constants/constants.ts");
/* harmony import */ var _common_functions_define_element_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/functions/define-element-name */ "./src/components/common/functions/define-element-name.ts");
/* harmony import */ var _common_enums_display_types_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/enums/display-types.enum */ "./src/components/common/enums/display-types.enum.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







var Table = /** @class */ (function (_super) {
    __extends(Table, _super);
    function Table() {
        var name = (0,_common_functions_define_element_name__WEBPACK_IMPORTED_MODULE_5__["default"])("table".concat(Table.iterator++), _RawHTMLComponent__WEBPACK_IMPORTED_MODULE_1__["default"].instances);
        _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_3__["default"].insertRule(".".concat(name, " {\n            margin: 10px;\n            padding: 10px;\n            display: ").concat(_common_enums_display_types_enum__WEBPACK_IMPORTED_MODULE_6__.DisplayTypesEnum.flex, ";\n            flex-direction: column;\n            background-color: rgb(255,255,255);\n            border: 1px dashed rgb(0,0,0);\n        }"));
        _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_3__["default"].insertRule(".".concat(name, ":hover {\n            background-color: ").concat(_common_constants_constants__WEBPACK_IMPORTED_MODULE_4__["default"].INVERTED_BACKGROUND_COLOR, ";\n        }"));
        var element = new _common_models_TableBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setName(name)
            .setId(name)
            .addCssClassName(name)
            .draggable()
            .build();
        return _super.call(this, element) || this;
    }
    Table.iterator = 0;
    return Table;
}(_RawContainer__WEBPACK_IMPORTED_MODULE_2__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Table);


/***/ }),

/***/ "./src/components/html-components/TextArea.ts":
/*!****************************************************!*\
  !*** ./src/components/html-components/TextArea.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_models_TextAreaBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/models/TextAreaBuilder */ "./src/components/common/models/TextAreaBuilder.ts");
/* harmony import */ var _RawHTMLComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RawHTMLComponent */ "./src/components/html-components/RawHTMLComponent.ts");
/* harmony import */ var _common_functions_define_element_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/functions/define-element-name */ "./src/components/common/functions/define-element-name.ts");
/* harmony import */ var _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css-stylesheet/css-stylesheet */ "./src/components/css-stylesheet/css-stylesheet.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var TextArea = /** @class */ (function (_super) {
    __extends(TextArea, _super);
    function TextArea() {
        var _this = this;
        var name = (0,_common_functions_define_element_name__WEBPACK_IMPORTED_MODULE_2__["default"])("text_area".concat(TextArea.iterator++), _RawHTMLComponent__WEBPACK_IMPORTED_MODULE_1__["default"].instances);
        _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_3__["default"].insertRule(".".concat(name, " {\n            margin: 10px;\n            padding: 10px;\n            border: 1px solid #ccc;\n            border-radius: 4px;\n            box-shadow: inset 0 1px 3px #ddd;\n        }"));
        _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_3__["default"].insertRule(".".concat(name, ":hover {\n            border: 1px solid red;\n        }"));
        var element = new _common_models_TextAreaBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setName(name)
            .setId(name)
            .addCssClassName(name)
            .draggable()
            .build();
        _this = _super.call(this, element) || this;
        _this.openElementConfigs = _this.openElementConfigs.bind(_this);
        _this.dragLeave = _this.dragLeave.bind(_this);
        _this._domElement.addEventListener('dragstart', _this.dragStartWithTargetId);
        _this._domElement.addEventListener('dragleave', _this.dragLeave);
        _this._domElement.addEventListener('click', _this.openElementConfigs);
        return _this;
    }
    Object.defineProperty(TextArea.prototype, "domElement", {
        get: function () {
            return this._domElement;
        },
        enumerable: false,
        configurable: true
    });
    TextArea.prototype.openElementConfigs = function (event) {
        event.stopPropagation();
        this.selectorValue();
        this.buildElementConfigs();
    };
    TextArea.prototype.componentSelected = function (component) {
        if (component === this._domElement['name']) {
            this.buildElementConfigs();
        }
    };
    TextArea.prototype.buildElementConfigs = function () {
        this.buildElements();
    };
    TextArea.iterator = 0;
    return TextArea;
}(_RawHTMLComponent__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextArea);


/***/ }),

/***/ "./src/components/html-components/Title.ts":
/*!*************************************************!*\
  !*** ./src/components/html-components/Title.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_models_TitleBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/models/TitleBuilder */ "./src/components/common/models/TitleBuilder.ts");
/* harmony import */ var _RawHTMLComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RawHTMLComponent */ "./src/components/html-components/RawHTMLComponent.ts");
/* harmony import */ var _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css-stylesheet/css-stylesheet */ "./src/components/css-stylesheet/css-stylesheet.ts");
/* harmony import */ var _common_functions_define_element_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/functions/define-element-name */ "./src/components/common/functions/define-element-name.ts");
/* harmony import */ var _common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/enums/add-component.enum */ "./src/components/common/enums/add-component.enum.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var Title = /** @class */ (function (_super) {
    __extends(Title, _super);
    function Title(type) {
        var _this = this;
        var name = (0,_common_functions_define_element_name__WEBPACK_IMPORTED_MODULE_3__["default"])("title".concat(Title.iterator++), _RawHTMLComponent__WEBPACK_IMPORTED_MODULE_1__["default"].instances);
        _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_2__["default"].insertRule(".".concat(name, " {\n            margin: 10px;\n            padding: 10px;\n            display: inline\n        }"));
        var element = new _common_models_TitleBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](type)
            .setName(name)
            .setId(name)
            .addCssClassName(name)
            .setInnerText("New Title ".concat(type))
            .draggable()
            .build();
        _this = _super.call(this, element) || this;
        _this.openElementConfigs = _this.openElementConfigs.bind(_this);
        _this.dragLeave = _this.dragLeave.bind(_this);
        _this._domElement.addEventListener('dragstart', _this.dragStartWithTargetId);
        _this._domElement.addEventListener('dragleave', _this.dragLeave);
        _this._domElement.addEventListener('click', _this.openElementConfigs);
        return _this;
    }
    Object.defineProperty(Title.prototype, "domElement", {
        get: function () {
            return this._domElement;
        },
        enumerable: false,
        configurable: true
    });
    Title.prototype.openElementConfigs = function (event) {
        event.stopPropagation();
        this.selectorValue();
        this.buildElementConfigs();
    };
    Title.prototype.componentSelected = function (component) {
        if (component === this._domElement['name']) {
            this.buildElementConfigs();
        }
    };
    Title.prototype.buildElementConfigs = function () {
        this.insertComponentAfter(_common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_4__.AddComponentEnum.addInnerTextChangeComponent, _common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_4__.AddComponentEnum.addClassNameDefinitionComponent);
        this.buildElements();
    };
    Title.iterator = 0;
    return Title;
}(_RawHTMLComponent__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);


/***/ }),

/***/ "./src/components/html-components/UnorderedList.ts":
/*!*********************************************************!*\
  !*** ./src/components/html-components/UnorderedList.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_models_UnoderedListBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/models/UnoderedListBuilder */ "./src/components/common/models/UnoderedListBuilder.ts");
/* harmony import */ var _RawHTMLComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RawHTMLComponent */ "./src/components/html-components/RawHTMLComponent.ts");
/* harmony import */ var _RawContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RawContainer */ "./src/components/html-components/RawContainer.ts");
/* harmony import */ var _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css-stylesheet/css-stylesheet */ "./src/components/css-stylesheet/css-stylesheet.ts");
/* harmony import */ var _common_constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/constants/constants */ "./src/components/common/constants/constants.ts");
/* harmony import */ var _common_functions_define_element_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/functions/define-element-name */ "./src/components/common/functions/define-element-name.ts");
/* harmony import */ var _common_enums_display_types_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/enums/display-types.enum */ "./src/components/common/enums/display-types.enum.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







var UnorderedList = /** @class */ (function (_super) {
    __extends(UnorderedList, _super);
    function UnorderedList() {
        var name = (0,_common_functions_define_element_name__WEBPACK_IMPORTED_MODULE_5__["default"])("unordered_list".concat(UnorderedList.iterator++), _RawHTMLComponent__WEBPACK_IMPORTED_MODULE_1__["default"].instances);
        _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_3__["default"].insertRule(".".concat(name, " {\n            margin: 10px;\n            padding: 10px;\n            display: ").concat(_common_enums_display_types_enum__WEBPACK_IMPORTED_MODULE_6__.DisplayTypesEnum.flex, ";\n            flex-direction: column;\n            background-color: rgb(255,255,255);\n            border: 1px dashed rgb(0,0,0);\n        }"));
        _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_3__["default"].insertRule(".".concat(name, ":hover {\n            background-color: ").concat(_common_constants_constants__WEBPACK_IMPORTED_MODULE_4__["default"].INVERTED_BACKGROUND_COLOR, ";\n        }"));
        var element = new _common_models_UnoderedListBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setName(name)
            .setId(name)
            .addCssClassName(name)
            .draggable()
            .build();
        return _super.call(this, element) || this;
    }
    UnorderedList.iterator = 0;
    return UnorderedList;
}(_RawContainer__WEBPACK_IMPORTED_MODULE_2__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UnorderedList);


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"layout-app","version":"1.0.0-4","repository":{"url":"git+https://github.com/Marcosl14/layout-app.git"},"description":"","main":"index.js","scripts":{"build":"webpack","start":"webpack --watch","lint":"eslint src/**/*.ts","lint-fix":"eslint src/**/*.ts --fix","predeploy":"npm run build","deploy":"gh-pages -d dist"},"author":"","license":"ISC","devDependencies":{"@typescript-eslint/eslint-plugin":"^5.53.0","@typescript-eslint/parser":"^5.53.0","eslint":"^8.34.0","gh-pages":"^5.0.0","husky":"^8.0.3","lint-staged":"^13.2.0","ts-loader":"^9.4.2","typescript":"^5.0.4","webpack":"^5.75.0","webpack-cli":"^5.0.1","webpack-dev-server":"^4.11.1"}}');

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
/* harmony import */ var _components_app_container_init_draggable_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/app-container/init-draggable-components */ "./src/components/app-container/init-draggable-components.ts");
/* harmony import */ var _components_css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/css-stylesheet/css-stylesheet */ "./src/components/css-stylesheet/css-stylesheet.ts");
/* harmony import */ var _components_app_container_init_app_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/app-container/init-app-container */ "./src/components/app-container/init-app-container.ts");



(0,_components_app_container_init_draggable_components__WEBPACK_IMPORTED_MODULE_0__["default"])();
new _components_app_container_init_app_container__WEBPACK_IMPORTED_MODULE_2__["default"]();
_components_css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_1__["default"].init();
// TODO: el metodo init deberia buscar el css del localstorage, deberiamos hacer lo mismo con el HTML
// Deberiamos ver como almacenar y deshacer cambios....
// TODO: acomodar estructuras con prettier y tslinter. Saltar linea cuando muy larga.
// TODO: hay que meterle drag enter al app-container-fixed para que le saque el background color al app-container...
// o ver que pasa con el drag leave
// TODO: insertar rules para el media query : https://davidwalsh.name/add-rules-stylesheets
// https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule
// TODO: probar exportar css y html y ver como queda la pagina en la realidad */
// TODO: hacer analisis de que deberiamos exportar realmente del html */
// TODO: aqui falta la accion de duplicar un componente, es decir, de un componente existente, duplicar la config...
// si, es necesario, porque es mucho mas facil que asignarle la clase de otro componente...
// ver como duplicamos las clases... si le asignamos las clases del otro componente???, como hacemos con su clase???
// si duplicamos, no creamos clase propia, solo asignamos las clases del otro componente...
// Agregar el elemento img y a su vez, agregar imagenes al background...
// TODO: falta todo lo que es position... Absolute, relative, etc... No recuerdo bien como es eso...
// incluso, el z index, que podria estar en el mismo componente.
// TODO: ver forma de remover el borde original del input. No es la misma propiedad que el border...
// TODO: el borderbox del input viene como advanced... Ver si tenemos que hacerle algo
// TODO: cuando creo un nombre futuro, y justo creo un elemento con ese nombre futuro, tira error...
// por eso yo le pasaba el iterator... ver como solucionar...
// TODO: con el id habria que reemplazar todos los caracteres especiales por guiones o algo asi...
// TODO: falta propiedad scrollable en div
// TODO: cualquier elemento debe poder modificar el display settings
// TODO: falta la propiedad background-image en el background-color
// eslint-disable-next-line max-len
// TODO: en el Select Item no se encuentra el app-container. Es que para que esto funcione, el app-container deberia ser creado como un new Container();
// TODO: falta un boton de delete initial properties, asi sacamos los bordes y eso a un div, por ejemplo...
/*
TODO: faltan los siguientes componentes:
    - Table, tr, th, tb, y ver que otros de tablas -> Para esto tendremos que ir agregando elementos mediant JS:
        - como ser, agregar el th, el tb o el t

<table>
  <thead>
    <tr>
      <th>Header content 1</th>
      <th>Header content 2</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <td>Footer content 1</td>
      <td>Footer content 2</td>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <td>Body content 1</td>
      <td>Body content 2</td>
    </tr>
  </tbody>
</table>

<table>
  <colgroup span="4" class="columns"></colgroup>
  <tr>
    <th>Countries</th>
    <th>Capitals</th>
    <th>Population</th>
    <th>Language</th>
  </tr>
  <tr>
    <td>USA</td>
    <td>Washington D.C.</td>
    <td>309 million</td>
    <td>English</td>
  </tr>
  <tr>
    <td>Sweden</td>
    <td>Stockholm</td>
    <td>9 million</td>
    <td>Swedish</td>
  </tr>
</table>

<table>
  <caption>Awesome caption</caption>
  <tr>
    <td>Awesome data</td>
  </tr>
</table>

    - hyperlink o anchor element: debemos agregar el hiperlink y algunas otras cosas

    - textarea: debemos poder modificar el relleno, pero en vez de con un input, con un textarea
    dar estilo tambien para que no sea estirable en el selector antes de hacer el drag and drop
    tambien debe poder ser seleccionable si la queres estirable o no en el dom
*/
// TODO: falta posicion absoluta o relativa, z-index
// TODO: el color tambien podria ser en degrade, pero podemos dejar que eso lo hagan con la rawclass
// TODO: si yo a una clase le agrego, por ejemplo .table0>td,
// nunca me trae esa clase como parte de la table0 en el Raw Class Editor
// ni en el Classes Management Selector

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cEMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7SUFDcEMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7SUFDckMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7SUFDckMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUU7SUFDdkMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTtJQUMxQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTtJQUN0QyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTtJQUN0QyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtJQUNuQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTtJQUN0QyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRTtJQUN4QyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRTtJQUN6QyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRTtJQUN6QyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRTtJQUN6QyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRTtJQUN6QyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTtJQUN0QyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtJQUNwQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRTtJQUN2QyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtJQUNuQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtJQUNuQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTtJQUN0QyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtJQUNyQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRTtJQUN2QyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRTtJQUN2QyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtJQUNuQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtJQUNyQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTtJQUN0QyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtJQUNoQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtJQUNyQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtJQUNoQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtJQUNoQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtJQUNqQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRTtJQUN2QyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtJQUNwQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtJQUNuQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtJQUNyQyxFQUFFLEdBQUcs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QUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFO0lBQzNDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFO0lBQ3hDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0lBQ3JDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0lBQ3JDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO0lBQ3BDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO0lBQ3ZDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO0lBQ2hDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO0lBQ25DLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO0lBQ2pDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0lBQ3JDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO0lBQ2xDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0lBQ3JDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO0lBQ2xDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFO0lBQ3pDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0lBQ3JDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFO0lBQ3pDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFO0lBQ3pDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO0lBQ3RDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0lBQ3JDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO0lBQ2hDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO0lBQ2hDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO0lBQ2hDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO0lBQ3RDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO0lBQ2xDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFO0lBQ3pDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO0lBQy9CLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0lBQ3JDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0lBQ3JDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO0lBQ3ZDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO0lBQ2xDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO0lBQ3RDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO0lBQ3BDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO0lBQ3BDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO0lBQ2xDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO0lBQ2xDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO0lBQ25DLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0lBQ3JDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0lBQ3JDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0lBQ3JDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO0lBQ2hDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO0lBQ3ZDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0lBQ3JDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO0lBQy9CLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO0lBQ2hDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO0lBQ25DLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO0lBQ2xDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0lBQ3JDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO0lBQ2xDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO0lBQ2pDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO0lBQ2pDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO0lBQ3RDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO0lBQ2xDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO0NBQ3hDOzs7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LGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ04yRjtBQUNwQjtBQUNNO0FBRTdFLCtGQUF1QixFQUFFLENBQUM7QUFDMUIsSUFBSSxvRkFBZ0IsRUFBRSxDQUFDO0FBQ3ZCLHNGQUFrQixFQUFFLENBQUM7QUFFckIscUdBQXFHO0FBQ3JHLHVEQUF1RDtBQUV2RCxxRkFBcUY7QUFFckYsb0hBQW9IO0FBQ3BILG1DQUFtQztBQUVuQywyRkFBMkY7QUFDM0YsMkRBQTJEO0FBRTNELGdGQUFnRjtBQUNoRix3RUFBd0U7QUFFeEUsb0hBQW9IO0FBQ3BILDJGQUEyRjtBQUMzRixvSEFBb0g7QUFDcEgsMkZBQTJGO0FBRTNGLHdFQUF3RTtBQUV4RSxvR0FBb0c7QUFDcEcsZ0VBQWdFO0FBR2hFLG9HQUFvRztBQUNwRyxzRkFBc0Y7QUFFdEYsb0dBQW9HO0FBQ3BHLDZEQUE2RDtBQUU3RCxrR0FBa0c7QUFFbEcsMENBQTBDO0FBRTFDLG9FQUFvRTtBQUVwRSxtRUFBbUU7QUFFbkUsbUNBQW1DO0FBQ25DLHdKQUF3SjtBQUV4SiwyR0FBMkc7QUFFM0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTRERTtBQUVGLG9EQUFvRDtBQUVwRCxvR0FBb0c7QUFFcEcsNkRBQTZEO0FBQzdELHlFQUF5RTtBQUN6RSx1Q0FBdUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvYXBwLWNvbnRhaW5lci9jb21wb25lbnRzSW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2FwcC1jb250YWluZXIvaW5pdC1hcHAtY29udGFpbmVyLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9hcHAtY29udGFpbmVyL2luaXQtZHJhZ2dhYmxlLWNvbXBvbmVudHMudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9jb21wb25lbnRzL2JhY2tncm91bmQuY29tcG9uZW50LnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vY29tcG9uZW50cy9ib3JkZXIuY29tcG9uZW50LnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vY29tcG9uZW50cy9ib3gtc2hhZG93LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2NvbXBvbmVudHMvY2xhc3MtbWFuYWdlbWVudC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9jb21wb25lbnRzL2Rpc3BsYXktYXMtY2hpbGQuY29tcG9uZW50LnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vY29tcG9uZW50cy9kaXNwbGF5LWFzLXBhcmVudC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9jb21wb25lbnRzL2ZvbnQuY29tcG9uZW50cy50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2NvbXBvbmVudHMvZ2VuZXJpYy1jc3MtcHJvcGVydHktbXV0YXRvci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9jb21wb25lbnRzL2dlbmVyaWMtcHJpbWFyeS1pbnB1dC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9jb21wb25lbnRzL2dlbmVyaWMtcHJpbWFyeS1zZWxlY3Rvci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9jb21wb25lbnRzL2lkLWRlZmluaXRpb24uY29tcG9uZW50LnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vY29tcG9uZW50cy9pbnB1dC13aXRoLXVuaXRzLXNlbGVjdG9yLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2NvbXBvbmVudHMvbWFyZ2luLW9yLXBhZGRpbmcuY29tcG9uZW50LnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vY29tcG9uZW50cy9zaXplcy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9jb21wb25lbnRzL3VybC1kZWZpbml0aW9uLWNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2NvbnN0YW50cy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9lbnVtcy9hZGQtY29tcG9uZW50LmVudW0udHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9lbnVtcy9hbGlnbi1mbGV4LWNvbnRlbnQuZW51bS50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2VudW1zL2FsaWduLWZsZXgtaXRlbXMuZW51bS50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2VudW1zL2FsaWduLWZsZXgtc2VsZi5lbnVtLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vZW51bXMvYWxpZ24tZ3JpZC1jb250ZW50LmVudW0udHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9lbnVtcy9hbGlnbi1ncmlkLWl0ZW1zLmVudW0udHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9lbnVtcy9hbGlnbi1ncmlkLXNlbGYuZW51bS50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2VudW1zL2JvcmRlci1zdHlsZS5lbnVtLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vZW51bXMvZGlzcGxheS10eXBlcy5lbnVtLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vZW51bXMvZXZlbnQtdHlwZS5lbnVtLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vZW51bXMvZmxleC1kaXJlY3Rpb24uZW51bS50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2VudW1zL2ZsZXgtd3JhcC5lbnVtLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vZW51bXMvZm9udC1zdHlsZXMuZW51bS50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2VudW1zL2ZvbnQtdmFyaWFudC5lbnVtLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vZW51bXMvZm9udC13ZWlnaHQuZW51bS50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2VudW1zL2ZvbnRzLmVudW0udHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9lbnVtcy9nZW5lcmFsLXBzZXVkb2NsYXNzLmVudW0udHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9lbnVtcy9ncmlkLWF1dG8tZmxvdy5lbnVtLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vZW51bXMvaW5wdXQtdHlwZS5lbnVtLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vZW51bXMvanVzdGlmeS1mbGV4LWNvbnRlbnQuZW51bS50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2VudW1zL2p1c3RpZnktZ3JpZC1jb250ZW50LmVudW0udHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9lbnVtcy9qdXN0aWZ5LWdyaWQtaXRlbXMuZW51bS50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2VudW1zL2p1c3RpZnktZ3JpZC1zZWxmLmVudW0udHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9lbnVtcy9zdHlsZS1uYW1lLmVudW0udHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9lbnVtcy90aXRsZS50eXBlcy5lbnVtLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vZW51bXMvdW5pdHMuZW51bS50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2Z1bmN0aW9ucy9kZWZpbmUtZWxlbWVudC1pZC50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2Z1bmN0aW9ucy9kZWZpbmUtZWxlbWVudC1uYW1lLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vZnVuY3Rpb25zL2RyYWctc3RhcnQtd2l0aC10YXJnZXQtbm9kZV9uYW1lLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vZnVuY3Rpb25zL2ZpcnN0LWxldHRlcnMtY2FwaXRhbGl6ZWQudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9mdW5jdGlvbnMvZ2V0LWNzcy11bml0LnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vZnVuY3Rpb25zL3JnYi10by1oZXgudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9tb2RlbHMvQW5jaG9yQnVpbGRlci50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL21vZGVscy9CdXR0b25CdWlsZGVyLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vbW9kZWxzL0NvbnRhaW5lckJ1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9tb2RlbHMvRm9ybUJ1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9tb2RlbHMvSW1hZ2VCdWlsZGVyLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vbW9kZWxzL0lucHV0QnVpbGRlci50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL21vZGVscy9MYWJlbEJ1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9tb2RlbHMvTGlzdEl0ZW1CdWlsZGVyLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vbW9kZWxzL09yZGVyZWRMaXN0QnVpbGRlci50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL21vZGVscy9SYXdCdWlsZGVyLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vbW9kZWxzL1NlbGVjdG9yRnJvbUFycmF5QnVpbGRlci50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL21vZGVscy9TZWxlY3RvckZyb21FbnVtQnVpbGRlci50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL21vZGVscy9TdHlsZXNDb21wb25lbnRzQnVpbGRlci50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL21vZGVscy9UYWJsZUJ1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9tb2RlbHMvVGV4dEFyZWFCdWlsZGVyLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vbW9kZWxzL1RpdGxlQnVpbGRlci50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL21vZGVscy9Vbm9kZXJlZExpc3RCdWlsZGVyLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vcHVibGlzaGVycy9DbGFzc0NoYW5nZVB1Ymxpc2hlci50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL3B1Ymxpc2hlcnMvQ29tcG9uZW50Q2hhbmdlUHVibGlzaGVyLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jc3Mtc3R5bGVzaGVldC9jc3Mtc3R5bGVzaGVldC50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvaHRtbC1jb21wb25lbnRzL0FuY2hvci50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvaHRtbC1jb21wb25lbnRzL0J1dHRvbi50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvaHRtbC1jb21wb25lbnRzL0NvbnRhaW5lci50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvaHRtbC1jb21wb25lbnRzL0Zvcm0udHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2h0bWwtY29tcG9uZW50cy9JbWFnZS50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvaHRtbC1jb21wb25lbnRzL0lucHV0LnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9odG1sLWNvbXBvbmVudHMvTGFiZWwudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2h0bWwtY29tcG9uZW50cy9MaXN0SXRlbS50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvaHRtbC1jb21wb25lbnRzL09yZGVyZWRMaXN0LnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9odG1sLWNvbXBvbmVudHMvUmF3Q29udGFpbmVyLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9odG1sLWNvbXBvbmVudHMvUmF3SFRNTENvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvaHRtbC1jb21wb25lbnRzL1RhYmxlLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9odG1sLWNvbXBvbmVudHMvVGV4dEFyZWEudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2h0bWwtY29tcG9uZW50cy9UaXRsZS50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvaHRtbC1jb21wb25lbnRzL1Vub3JkZXJlZExpc3QudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50SW5kZXggfSBmcm9tICcuLi9jb21tb24vaW50ZXJmYWNlcy9jb21wb25lbnQtaW5kZXguaW50ZXJmYWNlJztcbmltcG9ydCBSYXdIVE1MQ29ucG9uZW50IGZyb20gJy4uL2h0bWwtY29tcG9uZW50cy9SYXdIVE1MQ29tcG9uZW50JztcblxuaW1wb3J0IHsgVGl0bGVUeXBlc0VudW0gfSBmcm9tICcuLi9jb21tb24vZW51bXMvdGl0bGUudHlwZXMuZW51bSc7XG5cbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vaHRtbC1jb21wb25lbnRzL0J1dHRvbic7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vaHRtbC1jb21wb25lbnRzL0lucHV0JztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vaHRtbC1jb21wb25lbnRzL0NvbnRhaW5lcic7XG5pbXBvcnQgTGFiZWwgZnJvbSAnLi4vaHRtbC1jb21wb25lbnRzL0xhYmVsJztcbmltcG9ydCBUaXRsZSBmcm9tICcuLi9odG1sLWNvbXBvbmVudHMvVGl0bGUnO1xuaW1wb3J0IEltYWdlIGZyb20gJy4uL2h0bWwtY29tcG9uZW50cy9JbWFnZSc7XG5pbXBvcnQgRm9ybSBmcm9tICcuLi9odG1sLWNvbXBvbmVudHMvRm9ybSc7XG5pbXBvcnQgT3JkZXJlZExpc3QgZnJvbSAnLi4vaHRtbC1jb21wb25lbnRzL09yZGVyZWRMaXN0JztcbmltcG9ydCBVbm9yZGVyZWRMaXN0IGZyb20gJy4uL2h0bWwtY29tcG9uZW50cy9Vbm9yZGVyZWRMaXN0JztcbmltcG9ydCBUYWJsZSBmcm9tICcuLi9odG1sLWNvbXBvbmVudHMvVGFibGUnO1xuaW1wb3J0IEFuY2hvciBmcm9tICcuLi9odG1sLWNvbXBvbmVudHMvQW5jaG9yJztcbmltcG9ydCBUZXh0QXJlYSBmcm9tICcuLi9odG1sLWNvbXBvbmVudHMvVGV4dEFyZWEnO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gJy4uL2h0bWwtY29tcG9uZW50cy9MaXN0SXRlbSc7XG5cbmZ1bmN0aW9uIGNvbXBvbmVudHNJbmRleChpbmRleCkge1xuICAgIGNvbnN0IGNvbXBvbmVudHNJbmRleCA6IENvbXBvbmVudEluZGV4ID0ge1xuICAgICAgICAnRElWJzoge1xuICAgICAgICAgICAgY3JlYXRlOiAoKSA6IFJhd0hUTUxDb25wb25lbnQgPT4gbmV3IENvbnRhaW5lcigpLFxuICAgICAgICAgICAgaXNDb250YWluZXI6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgICdGT1JNJzoge1xuICAgICAgICAgICAgY3JlYXRlOiAoKSA6IFJhd0hUTUxDb25wb25lbnQgPT4gbmV3IEZvcm0oKSxcbiAgICAgICAgICAgIGlzQ29udGFpbmVyOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICAnQlVUVE9OJzoge1xuICAgICAgICAgICAgY3JlYXRlOiAoKSA6IFJhd0hUTUxDb25wb25lbnQgPT4gbmV3IEJ1dHRvbigpLFxuICAgICAgICAgICAgaXNDb250YWluZXI6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgICdJTlBVVCc6IHtcbiAgICAgICAgICAgIGNyZWF0ZTogKCkgOiBSYXdIVE1MQ29ucG9uZW50ID0+IG5ldyBJbnB1dCgpLFxuICAgICAgICAgICAgaXNDb250YWluZXI6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICAnTEFCRUwnOiB7XG4gICAgICAgICAgICBjcmVhdGU6ICgpIDogUmF3SFRNTENvbnBvbmVudCA9PiBuZXcgTGFiZWwoKSxcbiAgICAgICAgICAgIGlzQ29udGFpbmVyOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgJ0gxJzoge1xuICAgICAgICAgICAgY3JlYXRlOiAoKSA6IFJhd0hUTUxDb25wb25lbnQgPT4gbmV3IFRpdGxlKFRpdGxlVHlwZXNFbnVtLkgxKSxcbiAgICAgICAgICAgIGlzQ29udGFpbmVyOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgJ0gyJzoge1xuICAgICAgICAgICAgY3JlYXRlOiAoKSA6IFJhd0hUTUxDb25wb25lbnQgPT4gbmV3IFRpdGxlKFRpdGxlVHlwZXNFbnVtLkgyKSxcbiAgICAgICAgICAgIGlzQ29udGFpbmVyOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgJ0gzJzoge1xuICAgICAgICAgICAgY3JlYXRlOiAoKSA6IFJhd0hUTUxDb25wb25lbnQgPT4gbmV3IFRpdGxlKFRpdGxlVHlwZXNFbnVtLkgzKSxcbiAgICAgICAgICAgIGlzQ29udGFpbmVyOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgJ0g0Jzoge1xuICAgICAgICAgICAgY3JlYXRlOiAoKSA6IFJhd0hUTUxDb25wb25lbnQgPT4gbmV3IFRpdGxlKFRpdGxlVHlwZXNFbnVtLkg0KSxcbiAgICAgICAgICAgIGlzQ29udGFpbmVyOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgJ0g1Jzoge1xuICAgICAgICAgICAgY3JlYXRlOiAoKSA6IFJhd0hUTUxDb25wb25lbnQgPT4gbmV3IFRpdGxlKFRpdGxlVHlwZXNFbnVtLkg1KSxcbiAgICAgICAgICAgIGlzQ29udGFpbmVyOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgJ0g2Jzoge1xuICAgICAgICAgICAgY3JlYXRlOiAoKSA6IFJhd0hUTUxDb25wb25lbnQgPT4gbmV3IFRpdGxlKFRpdGxlVHlwZXNFbnVtLkg2KSxcbiAgICAgICAgICAgIGlzQ29udGFpbmVyOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgJ0lNRyc6IHtcbiAgICAgICAgICAgIGNyZWF0ZTogKCkgOiBSYXdIVE1MQ29ucG9uZW50ID0+IG5ldyBJbWFnZSgpLFxuICAgICAgICAgICAgaXNDb250YWluZXI6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICAnT0wnOiB7XG4gICAgICAgICAgICBjcmVhdGU6ICgpIDogUmF3SFRNTENvbnBvbmVudCA9PiBuZXcgT3JkZXJlZExpc3QoKSxcbiAgICAgICAgICAgIGlzQ29udGFpbmVyOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICAnVUwnOiB7XG4gICAgICAgICAgICBjcmVhdGU6ICgpIDogUmF3SFRNTENvbnBvbmVudCA9PiBuZXcgVW5vcmRlcmVkTGlzdCgpLFxuICAgICAgICAgICAgaXNDb250YWluZXI6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgICdMSSc6IHtcbiAgICAgICAgICAgIGNyZWF0ZTogKCkgOiBSYXdIVE1MQ29ucG9uZW50ID0+IG5ldyBMaXN0SXRlbSgpLFxuICAgICAgICAgICAgaXNDb250YWluZXI6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgICdBJzoge1xuICAgICAgICAgICAgY3JlYXRlOiAoKSA6IFJhd0hUTUxDb25wb25lbnQgPT4gbmV3IEFuY2hvcigpLFxuICAgICAgICAgICAgaXNDb250YWluZXI6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgICdURVhUQVJFQSc6IHtcbiAgICAgICAgICAgIGNyZWF0ZTogKCkgOiBSYXdIVE1MQ29ucG9uZW50ID0+IG5ldyBUZXh0QXJlYSgpLFxuICAgICAgICAgICAgaXNDb250YWluZXI6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgICdUQUJMRSc6IHtcbiAgICAgICAgICAgIGNyZWF0ZTogKCkgOiBSYXdIVE1MQ29ucG9uZW50ID0+IG5ldyBUYWJsZSgpLFxuICAgICAgICAgICAgaXNDb250YWluZXI6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgICdkZWZhdWx0Jzoge1xuICAgICAgICAgICAgY3JlYXRlOiAoKSA6IHVuZGVmaW5lZCAgPT4gdW5kZWZpbmVkLFxuICAgICAgICAgICAgaXNDb250YWluZXI6IGZhbHNlLFxuICAgICAgICB9LFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRzSW5kZXhbaW5kZXhdIHx8IGNvbXBvbmVudHNJbmRleFsnZGVmYXVsdCddO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnRzSW5kZXg7XG4iLCJpbXBvcnQgRGlzcGxheUNvbXBvbmVudCBmcm9tICcuLi9jb21tb24vY29tcG9uZW50cy9kaXNwbGF5LWFzLXBhcmVudC5jb21wb25lbnQnO1xuaW1wb3J0IE1hcmdpbk9yUGFkZGluZ0NvbXBvbmVudCBmcm9tICcuLi9jb21tb24vY29tcG9uZW50cy9tYXJnaW4tb3ItcGFkZGluZy5jb21wb25lbnQnO1xuaW1wb3J0IFN0eWxlc0NvbXBvbmVudHNCdWlsZGVyIGZyb20gJy4uL2NvbW1vbi9tb2RlbHMvU3R5bGVzQ29tcG9uZW50c0J1aWxkZXInO1xuaW1wb3J0IFJhd0hUTUxDb25wb25lbnQgZnJvbSAnLi4vaHRtbC1jb21wb25lbnRzL1Jhd0hUTUxDb21wb25lbnQnO1xuaW1wb3J0IEJhY2tncm91bmRDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudHMvYmFja2dyb3VuZC5jb21wb25lbnQnO1xuaW1wb3J0IGNvbXBvbmVudHNJbmRleCBmcm9tICcuL2NvbXBvbmVudHNJbmRleCc7XG5pbXBvcnQgY29uc3RhbnRzIGZyb20gJy4uL2NvbW1vbi9jb25zdGFudHMvY29uc3RhbnRzJztcblxuaW1wb3J0IHsgU3R5bGVOYW1lRW51bSB9IGZyb20gJy4uL2NvbW1vbi9lbnVtcy9zdHlsZS1uYW1lLmVudW0nO1xuaW1wb3J0IENzc1N0eWxlU2hlZXQgZnJvbSAnLi4vY3NzLXN0eWxlc2hlZXQvY3NzLXN0eWxlc2hlZXQnO1xuXG5pbXBvcnQgQ29tcG9uZW50Q2hhbmdlUHVibGlzaGVyIGZyb20gJy4uL2NvbW1vbi9wdWJsaXNoZXJzL0NvbXBvbmVudENoYW5nZVB1Ymxpc2hlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluaXRBcHBDb250YWluZXIge1xuICAgIHByaXZhdGUgYXBwQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcbiAgICBwcml2YXRlIGFwcENvbnRhaW5lckNsYXNzTmFtZSA9ICdib2R5JztcbiAgICBwcml2YXRlIGFwcENvbnRhaW5lckhlaWdodElucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHByaXZhdGUgYXBwQ29udGFpbmVyV2lkdGhJbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgICBwcm90ZWN0ZWQgc3R5bGVzQ29tcG9uZW50czogSFRNTERpdkVsZW1lbnQ7XG5cbiAgICBwcm90ZWN0ZWQgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIGZhdGhlckJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xuXG4gICAgcHJpdmF0ZSBjb21wb25lbnRTZWxlY3RvcjogSFRNTFNlbGVjdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0LWl0ZW0nKTtcbiAgICBwcml2YXRlIHZlcnNpb25MYWJlbDogSFRNTExhYmVsRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN2ZXJzaW9uLWxhYmVsJyk7XG5cbiAgICBwcml2YXRlIGNvbXBvbmVudENoYW5nZVB1Ymxpc2hlcjogQ29tcG9uZW50Q2hhbmdlUHVibGlzaGVyO1xuXG4gICAgcHJpdmF0ZSBwcmludEh0bWxCdXR0b246IEhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW50LWh0bWwtZmlsZScpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYXBwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcC1jb250YWluZXInKTtcblxuICAgICAgICB0aGlzLmFwcENvbnRhaW5lckhlaWdodElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VwZGF0ZS1oZWlnaHQnKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VBcHBDb250YWluZXJIZWlnaHQgPSB0aGlzLmNoYW5nZUFwcENvbnRhaW5lckhlaWdodC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFwcENvbnRhaW5lckhlaWdodElucHV0LnZhbHVlID0gYCR7cGFyc2VJbnQodGhpcy5nZXRDdXJyZW50SGVpZ2h0KCkpfWA7XG4gICAgICAgIHRoaXMuYXBwQ29udGFpbmVySGVpZ2h0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLmNoYW5nZUFwcENvbnRhaW5lckhlaWdodCk7XG5cbiAgICAgICAgdGhpcy5hcHBDb250YWluZXJXaWR0aElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VwZGF0ZS13aWR0aCcpO1xuICAgICAgICB0aGlzLmNoYW5nZUFwcENvbnRhaW5lcldpZHRoID0gdGhpcy5jaGFuZ2VBcHBDb250YWluZXJXaWR0aC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFwcENvbnRhaW5lcldpZHRoSW5wdXQudmFsdWUgPSBgJHtwYXJzZUludCh0aGlzLmdldEN1cnJlbnRXaWR0aCgpKX1gO1xuICAgICAgICB0aGlzLmFwcENvbnRhaW5lcldpZHRoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLmNoYW5nZUFwcENvbnRhaW5lcldpZHRoKTtcblxuICAgICAgICB0aGlzLmRyYWdFbnRlciA9IHRoaXMuZHJhZ0VudGVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhZ092ZXIgPSB0aGlzLmRyYWdPdmVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhZ0xlYXZlID0gdGhpcy5kcmFnTGVhdmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcm9wID0gdGhpcy5kcm9wLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5vcGVuRWxlbWVudENvbmZpZ3MgPSB0aGlzLm9wZW5FbGVtZW50Q29uZmlncy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNoYW5nZVNpemUgPSB0aGlzLmNoYW5nZVNpemUuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmFwcENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCB0aGlzLmRyYWdFbnRlcik7XG4gICAgICAgIHRoaXMuYXBwQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5kcmFnT3Zlcik7XG4gICAgICAgIHRoaXMuYXBwQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIHRoaXMuZHJhZ0xlYXZlKTtcbiAgICAgICAgdGhpcy5hcHBDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuZHJvcCk7XG5cbiAgICAgICAgdGhpcy5hcHBDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9wZW5FbGVtZW50Q29uZmlncyk7XG5cbiAgICAgICAgdGhpcy5vblJlc2l6ZSh0aGlzLmFwcENvbnRhaW5lciwgdGhpcy5jaGFuZ2VTaXplKTtcblxuICAgICAgICB0aGlzLnNlbmRDb21wb25lbnROYW1lID0gdGhpcy5zZW5kQ29tcG9uZW50TmFtZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudENoYW5nZVB1Ymxpc2hlciA9IG5ldyBDb21wb25lbnRDaGFuZ2VQdWJsaXNoZXIoKTtcblxuICAgICAgICB0aGlzLmNvbXBvbmVudFNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuc2VuZENvbXBvbmVudE5hbWUpO1xuXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdmFyLXJlcXVpcmVzXG4gICAgICAgIGNvbnN0IHBhY2thZ2VWZXJzaW9uID0gcmVxdWlyZSgnLi4vLi4vLi4vcGFja2FnZS5qc29uJykudmVyc2lvbjtcbiAgICAgICAgdGhpcy52ZXJzaW9uTGFiZWwuaW5uZXJUZXh0ID0gYFZlcnNpb246ICR7cGFja2FnZVZlcnNpb259YDtcblxuICAgICAgICB0aGlzLnByaW50SHRtbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucHJpbnRIdG1sRmlsZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkcmFnRW50ZXIoZXZlbnQ6IERyYWdFdmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9IENzc1N0eWxlU2hlZXQuZ2V0UnVsZVN0eWxlcyh0aGlzLmFwcENvbnRhaW5lckNsYXNzTmFtZSlbJ2JhY2tncm91bmQtY29sb3InXTtcbiAgICAgICAgdGhpcy5hcHBDb250YWluZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29uc3RhbnRzLklOVkVSVEVEX0JBQ0tHUk9VTkRfQ09MT1I7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkcmFnT3ZlcihldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkcmFnTGVhdmUoKSB7XG4gICAgICAgIHRoaXMuYXBwQ29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcnO1xuICAgICAgICB0aGlzLmFwcENvbnRhaW5lci5hdHRyaWJ1dGVzLnJlbW92ZU5hbWVkSXRlbSgnc3R5bGUnKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRyb3AoZXZlbnQ6IERyYWdFdmVudCkge1xuICAgICAgICB0aGlzLmFwcENvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJztcblxuICAgICAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICAgIGlmICghY29tcG9uZW50c0luZGV4KHRhcmdldEVsZW1lbnQubm9kZU5hbWUpLmlzQ29udGFpbmVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZih0YXJnZXRFbGVtZW50LmNoaWxkcmVuLmxlbmd0aCA9PT0gMCAmJiB0YXJnZXRFbGVtZW50LmlubmVyVGV4dCAhPT0gJycpe1xuICAgICAgICAgICAgYWxlcnQoJ0lubmVyVGV4dCBtdXN0IGJlIGVtcHR5JylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGVsZW1lbnRUeXBlID0gZXZlbnQuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQvcGxhaW4nKTtcblxuICAgICAgICBjb25zdCBuZXdEb21FbGVtZW50OiBSYXdIVE1MQ29ucG9uZW50IHwgdW5kZWZpbmVkID0gY29tcG9uZW50c0luZGV4KGVsZW1lbnRUeXBlKS5jcmVhdGUoKTtcblxuICAgICAgICBjb25zdCBlbGVtZW50RXhpc3RzID0gbmV3RG9tRWxlbWVudCA/IGZhbHNlIDogdHJ1ZTtcblxuICAgICAgICBpZiAoZWxlbWVudEV4aXN0cykge1xuICAgICAgICAgICAgY29uc3QgZHJhZ2dhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudFR5cGUpO1xuICAgICAgICAgICAgdGFyZ2V0RWxlbWVudC5hcHBlbmRDaGlsZChkcmFnZ2FibGUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRDaGFuZ2VQdWJsaXNoZXIuYXR0YWNoKG5ld0RvbUVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGFyZ2V0RWxlbWVudC5hcHBlbmRDaGlsZChuZXdEb21FbGVtZW50LmRvbUVsZW1lbnQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb3BlbkVsZW1lbnRDb25maWdzKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIHRoaXMuc3R5bGVzQ29tcG9uZW50cyA9IG5ldyBTdHlsZXNDb21wb25lbnRzQnVpbGRlcigpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IE1hcmdpbk9yUGFkZGluZ0NvbXBvbmVudChcbiAgICAgICAgICAgICAgICB0aGlzLmFwcENvbnRhaW5lcixcbiAgICAgICAgICAgICAgICBTdHlsZU5hbWVFbnVtLm1hcmdpbikuY29tcG9uZW50KVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBNYXJnaW5PclBhZGRpbmdDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBDb250YWluZXIsXG4gICAgICAgICAgICAgICAgU3R5bGVOYW1lRW51bS5wYWRkaW5nKS5jb21wb25lbnQpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IEJhY2tncm91bmRDb21wb25lbnQodGhpcy5hcHBDb250YWluZXIpLmNvbXBvbmVudClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgRGlzcGxheUNvbXBvbmVudCh0aGlzLmFwcENvbnRhaW5lcikuY29tcG9uZW50KVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblJlc2l6ZShkb21fZWxlbSwgY2FsbGJhY2spIHtcbiAgICAgICAgY29uc3QgcmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKCkgPT4gY2FsbGJhY2soKSk7XG4gICAgICAgIHJlc2l6ZU9ic2VydmVyLm9ic2VydmUoZG9tX2VsZW0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2hhbmdlU2l6ZSgpIHtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5hcHBDb250YWluZXIuc3R5bGVbJ2hlaWdodCddO1xuICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMuYXBwQ29udGFpbmVyLnN0eWxlWyd3aWR0aCddO1xuXG4gICAgICAgIGlmIChoZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMuYXBwQ29udGFpbmVySGVpZ2h0SW5wdXQudmFsdWUgPSBgJHtwYXJzZUludChoZWlnaHQpfWA7XG4gICAgICAgICAgICBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXModGhpcy5hcHBDb250YWluZXJDbGFzc05hbWUpWydoZWlnaHQnXSA9IGhlaWdodDtcbiAgICAgICAgICAgIHRoaXMuYXBwQ29udGFpbmVyLnN0eWxlWydoZWlnaHQnXSA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGlmICh3aWR0aCkge1xuICAgICAgICAgICAgdGhpcy5hcHBDb250YWluZXJXaWR0aElucHV0LnZhbHVlID0gYCR7cGFyc2VJbnQod2lkdGgpfWA7XG4gICAgICAgICAgICBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXModGhpcy5hcHBDb250YWluZXJDbGFzc05hbWUpWyd3aWR0aCddID0gd2lkdGg7XG4gICAgICAgICAgICB0aGlzLmFwcENvbnRhaW5lci5zdHlsZVsnd2lkdGgnXSA9ICcnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjaGFuZ2VBcHBDb250YWluZXJIZWlnaHQoKSB7XG4gICAgICAgIENzc1N0eWxlU2hlZXQuZ2V0UnVsZVN0eWxlcyh0aGlzLmFwcENvbnRhaW5lckNsYXNzTmFtZSlbJ2hlaWdodCddID0gYCR7dGhpcy5hcHBDb250YWluZXJIZWlnaHRJbnB1dC52YWx1ZX1weGBcbiAgICB9XG5cbiAgICBwcml2YXRlIGNoYW5nZUFwcENvbnRhaW5lcldpZHRoKCkge1xuICAgICAgICBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXModGhpcy5hcHBDb250YWluZXJDbGFzc05hbWUpWyd3aWR0aCddID0gYCR7dGhpcy5hcHBDb250YWluZXJXaWR0aElucHV0LnZhbHVlfXB4YFxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0Q3VycmVudEhlaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIENzc1N0eWxlU2hlZXQuZ2V0UnVsZVN0eWxlcyh0aGlzLmFwcENvbnRhaW5lckNsYXNzTmFtZSlbJ2hlaWdodCddXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRDdXJyZW50V2lkdGgoKSB7XG4gICAgICAgIHJldHVybiBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXModGhpcy5hcHBDb250YWluZXJDbGFzc05hbWUpWyd3aWR0aCddXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwcmludEh0bWxGaWxlKCkge1xuICAgICAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcC1jb250YWluZXInKS5pbm5lckhUTUw7XG4gICAgICAgIGNvbnN0IHJlbW92ZURyYWdnYWJsZVJlZ0V4ID0gbmV3IFJlZ0V4cCgnIGRyYWdnYWJsZT1cInRydWVcIicsICdnJyk7XG4gICAgICAgIG1haW5Db250YWluZXIucmVwbGFjZShyZW1vdmVEcmFnZ2FibGVSZWdFeCwgJycpO1xuXG4gICAgICAgIC8vIFRPRE86IHZlciBzaSBkZWJlcmlhIGlyIGRlc3BsZWdhbmRvIGVsIGFyYm9sIGRlIGVsZW1lbnRvcyBIVE1MIGUgaXIgYXJtYW5kbyBlbCBodG1sIGFxdWkuXG4gICAgICAgIC8vIFRPRE86IHZlciBzaSBlcyBuZWNlc2FyaW8gYm9ycmFyIGVsIHN0eWxlIHkgbG8gcXVlIGhheWEgZGVudHJvLi4uLlxuICAgICAgICAvLyBUT0RPOiBlbGltaW5hciBlbCBkcmFnZ2FibGVcblxuICAgICAgICBjb25zdCBvdXRwdXRIdG1sID0gYFxuICAgICAgICA8IURPQ1RZUEUgaHRtbD5cbiAgICAgICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICAgIDxoZWFkPlxuICAgICAgICAgICAgPG1ldGEgY2hhcnNldD1cIlVURi04XCI+XG4gICAgICAgICAgICA8bWV0YSBodHRwLWVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIj5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCI+XG4gICAgICAgICAgICA8dGl0bGU+RG9jdW1lbnQ8L3RpdGxlPlxuICAgICAgICA8L2hlYWQ+XG4gICAgICAgIDxib2R5IGlkPVwiYXBwLWNvbnRhaW5lclwiIGNsYXNzPVwiYm9keVwiPlxuICAgICAgICAgICAgJHttYWluQ29udGFpbmVyfVxuICAgICAgICA8L2JvZHk+XG4gICAgICAgIDwvaHRtbD5gXG5cbiAgICAgICAgY29uc29sZS5sb2cob3V0cHV0SHRtbCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZW5kQ29tcG9uZW50TmFtZSgpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnRDaGFuZ2VQdWJsaXNoZXIubm90aWZ5Q29tcG9uZW50TmFtZSh0aGlzLmNvbXBvbmVudFNlbGVjdG9yLnZhbHVlKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgZHJhZ1N0YXJ0V2l0aFRhcmdldE5vZGVOYW1lIGZyb20gJy4uL2NvbW1vbi9mdW5jdGlvbnMvZHJhZy1zdGFydC13aXRoLXRhcmdldC1ub2RlX25hbWUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0RHJhZ2dhYmxlQ29tcG9uZW50cygpIHtcbiAgICBjb25zdCBkb21FbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kb20tZWxlbWVudCcpO1xuXG4gICAgZG9tRWxlbWVudHMuZm9yRWFjaCgoZG9tRWxlbWVudCkgPT4ge1xuICAgICAgICBkb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGRyYWdTdGFydFdpdGhUYXJnZXROb2RlTmFtZSk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgQ2xhc3NDaGFuZ2VPYnNlcnZlckludGVyZmFjZSBmcm9tICcuLi9pbnRlcmZhY2VzL2NsYXNzLWNoYW5nZS1vYnNlcnZlci5pbnRlcmZhY2UnO1xuXG5pbXBvcnQgQ29udGFpbmVyQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvQ29udGFpbmVyQnVpbGRlcic7XG5pbXBvcnQgSW5wdXRCdWlsZGVyIGZyb20gJy4uL21vZGVscy9JbnB1dEJ1aWxkZXInO1xuaW1wb3J0IExhYmVsQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvTGFiZWxCdWlsZGVyJztcbmltcG9ydCBCdXR0b25CdWlsZGVyIGZyb20gJy4uL21vZGVscy9CdXR0b25CdWlsZGVyJztcblxuaW1wb3J0IENzc1N0eWxlU2hlZXQgZnJvbSAnLi4vLi4vY3NzLXN0eWxlc2hlZXQvY3NzLXN0eWxlc2hlZXQnO1xuaW1wb3J0IGNvbG9yVG9IZXggZnJvbSAnLi4vZnVuY3Rpb25zL3JnYi10by1oZXgnO1xuXG5pbXBvcnQgeyBJbnB1dFR5cGVFbnVtIH0gZnJvbSAnLi4vZW51bXMvaW5wdXQtdHlwZS5lbnVtJztcbmltcG9ydCB7IFN0eWxlTmFtZUVudW0gfSBmcm9tICcuLi9lbnVtcy9zdHlsZS1uYW1lLmVudW0nO1xuaW1wb3J0IHsgRGlzcGxheVR5cGVzRW51bSB9IGZyb20gJy4uL2VudW1zL2Rpc3BsYXktdHlwZXMuZW51bSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhY2tncm91bmRDb21wb25lbnQgaW1wbGVtZW50cyBDbGFzc0NoYW5nZU9ic2VydmVySW50ZXJmYWNle1xuICAgIHByaXZhdGUgZG9tRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBjb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgZG9tRWxlbWVudFN0eWxlU2hlZXQ6IENTU1N0eWxlRGVjbGFyYXRpb247XG5cbiAgICBwcml2YXRlIGNvbG9ySW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBvcGFjaXR5U2xpZGVyOiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHByaXZhdGUgb3BhY2l0eVZhbHVlOiBIVE1MTGFiZWxFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IoZG9tRWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCA9IENzc1N0eWxlU2hlZXQuZ2V0UnVsZVN0eWxlcyh0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0WzBdKTtcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnRzKCk7XG4gICAgfVxuXG4gICAgZ2V0IGNvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkQ29tcG9uZW50cygpIHtcbiAgICAgICAgdGhpcy51cGRhdGVDb2xvciA9IHRoaXMudXBkYXRlQ29sb3IuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGVPcGFjaXR5ID0gdGhpcy51cGRhdGVPcGFjaXR5LmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5jb2xvcklucHV0ID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLmNvbG9yKVxuICAgICAgICAgICAgLnNldFZhbHVlKHRoaXMuZ2V0Q3VycmVudENvbG9yKCkpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLnVwZGF0ZUNvbG9yKVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICBjb25zdCByZW1vdmVDb2xvciA9IG5ldyBCdXR0b25CdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ1JlbW92ZSBDb2xvcicpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnVwZGF0ZUNvbG9yKVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICB0aGlzLm9wYWNpdHlTbGlkZXIgPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0ucmFuZ2UpXG4gICAgICAgICAgICAuc2V0VmFsdWUodGhpcy5nZXRDdXJyZW50T3BhY2l0eSgpKVxuICAgICAgICAgICAgLnNldE1pbigwKVxuICAgICAgICAgICAgLnNldE1heCgxMDApXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLnVwZGF0ZU9wYWNpdHkpXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIHRoaXMub3BhY2l0eVZhbHVlID0gbmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0SW5uZXJUZXh0KGAke3RoaXMuZ2V0Q3VycmVudE9wYWNpdHkoKX0lYClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgY29uc3QgYmFja2dyb3VuZENvbXBvbmVudHMgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnQ29sb3IgLyBPcGFjaXR5JylcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuY29sb3JJbnB1dClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5vcGFjaXR5U2xpZGVyKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLm9wYWNpdHlWYWx1ZSlcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQocmVtb3ZlQ29sb3IpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5ib3JkZXIsICcxcHggc29saWQgIzRDQUY1MCcpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5wYWRkaW5nLCAnM3B4JylcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnQmFja2dyb3VuZCcpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kQ29tcG9uZW50cylcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRDdXJyZW50Q29sb3IoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGNvbG9yVG9IZXgodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYmFja2dyb3VuZC1jb2xvciddKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEN1cnJlbnRPcGFjaXR5KCk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IG9wYWNpdHkgPSBwYXJzZUZsb2F0KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ29wYWNpdHknXSkgKiAxMDA7XG4gICAgICAgIHJldHVybiBpc05hTihvcGFjaXR5KSA/ICcxMDAnIDogTWF0aC5yb3VuZChvcGFjaXR5KS50b1N0cmluZygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlQ29sb3IoZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgIGlmICggZXZlbnQudHlwZSA9PT0gJ2NsaWNrJyl7XG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydiYWNrZ3JvdW5kLWNvbG9yJ10gPSAnJztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2JhY2tncm91bmQtY29sb3InXSA9IHRoaXMuY29sb3JJbnB1dC52YWx1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZU9wYWNpdHkoKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcGFyc2VJbnQodGhpcy5vcGFjaXR5U2xpZGVyLnZhbHVlKVxuICAgICAgICBjb25zdCBwZXJjZW50YWdlID0gdmFsdWUgLyAxMDA7XG4gICAgICAgIGlmKHZhbHVlID49IDEwMCkge1xuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnb3BhY2l0eSddID0gJydcbiAgICAgICAgICAgIHRoaXMub3BhY2l0eVZhbHVlLmlubmVyVGV4dCA9ICcxMDAlJztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydvcGFjaXR5J10gPSBgJHtwZXJjZW50YWdlfWA7XG4gICAgICAgIHRoaXMub3BhY2l0eVZhbHVlLmlubmVyVGV4dCA9IGAke3ZhbHVlfSVgO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGFzc05hbWVVcGRhdGVkKG5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0ID0gQ3NzU3R5bGVTaGVldC5nZXRSdWxlU3R5bGVzKG5hbWUpO1xuICAgICAgICB0aGlzLmNvbG9ySW5wdXQudmFsdWUgPSB0aGlzLmdldEN1cnJlbnRDb2xvcigpO1xuICAgICAgICB0aGlzLm9wYWNpdHlTbGlkZXIudmFsdWUgPSB0aGlzLmdldEN1cnJlbnRPcGFjaXR5KCk7XG4gICAgICAgIHRoaXMub3BhY2l0eVZhbHVlLmlubmVyVGV4dCA9IGAke3RoaXMub3BhY2l0eVNsaWRlci52YWx1ZX0lYDtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ2xhc3NDaGFuZ2VPYnNlcnZlckludGVyZmFjZSBmcm9tICcuLi9pbnRlcmZhY2VzL2NsYXNzLWNoYW5nZS1vYnNlcnZlci5pbnRlcmZhY2UnO1xuXG5pbXBvcnQgQ29udGFpbmVyQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvQ29udGFpbmVyQnVpbGRlcic7XG5pbXBvcnQgSW5wdXRCdWlsZGVyIGZyb20gJy4uL21vZGVscy9JbnB1dEJ1aWxkZXInO1xuaW1wb3J0IExhYmVsQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvTGFiZWxCdWlsZGVyJztcbmltcG9ydCBTZWxlY3RvckZyb21FbnVtQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXInO1xuXG5pbXBvcnQgQ3NzU3R5bGVTaGVldCBmcm9tICcuLi8uLi9jc3Mtc3R5bGVzaGVldC9jc3Mtc3R5bGVzaGVldCc7XG5pbXBvcnQgY29sb3JUb0hleCBmcm9tICcuLi9mdW5jdGlvbnMvcmdiLXRvLWhleCc7XG5pbXBvcnQgZ2V0VW5pdCBmcm9tICcuLi9mdW5jdGlvbnMvZ2V0LWNzcy11bml0JztcblxuaW1wb3J0IHsgSW5wdXRUeXBlRW51bSB9IGZyb20gJy4uL2VudW1zL2lucHV0LXR5cGUuZW51bSc7XG5pbXBvcnQgeyBCb3JkZXJTdHlsZUVudW0gfSBmcm9tICcuLi9lbnVtcy9ib3JkZXItc3R5bGUuZW51bSc7XG5pbXBvcnQgeyBVbml0c0VudW0gfSBmcm9tICcuLi9lbnVtcy91bml0cy5lbnVtJztcbmltcG9ydCB7IFN0eWxlTmFtZUVudW0gfSBmcm9tICcuLi9lbnVtcy9zdHlsZS1uYW1lLmVudW0nO1xuaW1wb3J0IHsgRGlzcGxheVR5cGVzRW51bSB9IGZyb20gJy4uL2VudW1zL2Rpc3BsYXktdHlwZXMuZW51bSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvcmRlckNvbXBvbmVudCBpbXBsZW1lbnRzIENsYXNzQ2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2Uge1xuICAgIHByaXZhdGUgZG9tRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBjb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgZG9tRWxlbWVudFN0eWxlU2hlZXQ6IENTU1N0eWxlRGVjbGFyYXRpb247XG5cbiAgICBwcml2YXRlIHRvcEJvcmRlckNvbG9ySW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSByaWdodEJvcmRlckNvbG9ySW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBib3R0b21Cb3JkZXJDb2xvcklucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHByaXZhdGUgbGVmdEJvcmRlckNvbG9ySW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIHRvcEJvcmRlclN0eWxlU2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIHByaXZhdGUgcmlnaHRCb3JkZXJTdHlsZVNlbGVjdG9yOiBIVE1MU2VsZWN0RWxlbWVudDtcbiAgICBwcml2YXRlIGJvdHRvbUJvcmRlclN0eWxlU2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIHByaXZhdGUgbGVmdEJvcmRlclN0eWxlU2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSB0b3BCb3JkZXJXaWR0aElucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHByaXZhdGUgcmlnaHRCb3JkZXJXaWR0aElucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHByaXZhdGUgYm90dG9tQm9yZGVyV2lkdGhJbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgICBwcml2YXRlIGxlZnRCb3JkZXJXaWR0aElucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSB0b3BCb3JkZXJXaWR0aFVuaXRTZWxlY3RvcjogSFRNTFNlbGVjdEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSByaWdodEJvcmRlcldpZHRoVW5pdFNlbGVjdG9yOiBIVE1MU2VsZWN0RWxlbWVudDtcbiAgICBwcml2YXRlIGJvdHRvbUJvcmRlcldpZHRoVW5pdFNlbGVjdG9yOiBIVE1MU2VsZWN0RWxlbWVudDtcbiAgICBwcml2YXRlIGxlZnRCb3JkZXJXaWR0aFVuaXRTZWxlY3RvcjogSFRNTFNlbGVjdEVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIHRvcEJvcmRlclJhZGl1c0lucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHByaXZhdGUgcmlnaHRCb3JkZXJSYWRpdXNJbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgICBwcml2YXRlIGJvdHRvbUJvcmRlclJhZGl1c0lucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHByaXZhdGUgbGVmdEJvcmRlclJhZGl1c0lucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSB0b3BCb3JkZXJSYWRpdXNVbml0U2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIHByaXZhdGUgcmlnaHRCb3JkZXJSYWRpdXNVbml0U2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIHByaXZhdGUgYm90dG9tQm9yZGVyUmFkaXVzVW5pdFNlbGVjdG9yOiBIVE1MU2VsZWN0RWxlbWVudDtcbiAgICBwcml2YXRlIGxlZnRCb3JkZXJSYWRpdXNVbml0U2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSBzZWxlY3RBbGxDaGVja0JveDogSFRNTElucHV0RWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKGRvbUVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQgPSBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXModGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdFswXSk7XG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50cygpO1xuICAgIH1cblxuICAgIGdldCBjb21wb25lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZENvbXBvbmVudHMoKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlQ29tcG9uZW50c1N0YXR1cyA9IHRoaXMuY2hhbmdlQ29tcG9uZW50c1N0YXR1cy5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlQm9yZGVyU3R5bGVQcm9wZXJ0eSA9IHRoaXMudXBkYXRlQm9yZGVyU3R5bGVQcm9wZXJ0eS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZUJvcmRlckNvbG9yID0gdGhpcy51cGRhdGVCb3JkZXJDb2xvci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZUJvcmRlcldpZHRoID0gdGhpcy51cGRhdGVCb3JkZXJXaWR0aC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZUJvcmRlclJhZGl1cyA9IHRoaXMudXBkYXRlQm9yZGVyUmFkaXVzLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5zZWxlY3RBbGxDaGVja0JveCA9IG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS5jaGVja2JveClcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmNoYW5nZUNvbXBvbmVudHNTdGF0dXMpXG4gICAgICAgICAgICAuY2hlY2tlZCh0aGlzLnVuaWZpZWRCb3JkZXJQcm9wZXJ0aWVzKCkpXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIGNvbnN0IHNlbGVjdEFsbENvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdTZWxlY3QgQWxsJylcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuc2VsZWN0QWxsQ2hlY2tCb3gpXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG5cbiAgICAgICAgdGhpcy5idWlsZEFsbENvbXBvbmVudHMoKTtcbiAgICAgICAgdGhpcy5zZXRCb3JkZXJWYWx1ZXNBY2NvcmRpbmdUb0NsYXNzKCk7XG5cbiAgICAgICAgY29uc3QgdG9wQ29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ1RvcCBCb3JkZXIgQ29sb3IgLyBTdHlsZScpXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLnRvcEJvcmRlckNvbG9ySW5wdXQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMudG9wQm9yZGVyU3R5bGVTZWxlY3RvcilcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ1RvcCBCb3JkZXIgV2lkdGgnKVxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy50b3BCb3JkZXJXaWR0aElucHV0KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLnRvcEJvcmRlcldpZHRoVW5pdFNlbGVjdG9yKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnVG9wIEJvcmRlciBSYWRpdXMnKVxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy50b3BCb3JkZXJSYWRpdXNJbnB1dClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy50b3BCb3JkZXJSYWRpdXNVbml0U2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgY29uc3QgcmlnaHRDb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnUmlnaHQgQm9yZGVyIENvbG9yIC8gU3R5bGUnKVxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5yaWdodEJvcmRlckNvbG9ySW5wdXQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMucmlnaHRCb3JkZXJTdHlsZVNlbGVjdG9yKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnUmlnaHQgQm9yZGVyIFdpZHRoJylcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMucmlnaHRCb3JkZXJXaWR0aElucHV0KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLnJpZ2h0Qm9yZGVyV2lkdGhVbml0U2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdSaWdodCBCb3JkZXIgUmFkaXVzJylcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMucmlnaHRCb3JkZXJSYWRpdXNJbnB1dClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5yaWdodEJvcmRlclJhZGl1c1VuaXRTZWxlY3RvcilcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICBjb25zdCBib3R0b21Db250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnQm90dG9tIEJvcmRlciBDb2xvciAvIFN0eWxlJylcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuYm90dG9tQm9yZGVyQ29sb3JJbnB1dClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5ib3R0b21Cb3JkZXJTdHlsZVNlbGVjdG9yKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnQm90dG9tIEJvcmRlciBXaWR0aCcpXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmJvdHRvbUJvcmRlcldpZHRoSW5wdXQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuYm90dG9tQm9yZGVyV2lkdGhVbml0U2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdCb3R0b20gQm9yZGVyIFJhZGl1cycpXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmJvdHRvbUJvcmRlclJhZGl1c0lucHV0KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmJvdHRvbUJvcmRlclJhZGl1c1VuaXRTZWxlY3RvcilcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICBjb25zdCBsZWZ0Q29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0xlZnQgQm9yZGVyIENvbG9yIC8gU3R5bGUnKVxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5sZWZ0Qm9yZGVyQ29sb3JJbnB1dClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5sZWZ0Qm9yZGVyU3R5bGVTZWxlY3RvcilcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0xlZnQgQm9yZGVyIFdpZHRoJylcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMubGVmdEJvcmRlcldpZHRoSW5wdXQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMubGVmdEJvcmRlcldpZHRoVW5pdFNlbGVjdG9yKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnTGVmdCBCb3JkZXIgUmFkaXVzJylcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMubGVmdEJvcmRlclJhZGl1c0lucHV0KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmxlZnRCb3JkZXJSYWRpdXNVbml0U2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgY29uc3QgaW5wdXRWYWx1ZXNDb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQodG9wQ29udGFpbmVyKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKHJpZ2h0Q29udGFpbmVyKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKGJvdHRvbUNvbnRhaW5lcilcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChsZWZ0Q29udGFpbmVyKVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmJvcmRlciwgJzFweCBzb2xpZCAjNENBRjUwJylcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLnBhZGRpbmcsICczcHgnKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdCb3JkZXIgVHlwZSBTZWxlY3RvcicpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChzZWxlY3RBbGxDb250YWluZXIpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQoaW5wdXRWYWx1ZXNDb250YWluZXIpXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgIH1cblxuICAgIHByaXZhdGUgYnVpbGRBbGxDb21wb25lbnRzKCkge1xuICAgICAgICB0aGlzLmJ1aWxkQ29sb3JJbnB1dHMoKTtcbiAgICAgICAgdGhpcy5idWlsZFN0eWxlU2VsZWN0b3JzKCk7XG4gICAgICAgIHRoaXMuYnVpbGRCb3JkZXJXaWR0aElucHV0cygpO1xuICAgICAgICB0aGlzLmJ1aWxkQm9yZGVyV2lkdGhVbml0c1NlbGVjdG9ycygpO1xuICAgICAgICB0aGlzLmJ1aWxkQm9yZGVyUmFkaXVzSW5wdXRzKClcbiAgICAgICAgdGhpcy5idWlsZEJvcmRlclJhZGl1c1VuaXRzU2VsZWN0b3JzKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBidWlsZENvbG9ySW5wdXRzKCkge1xuICAgICAgICB0aGlzLnRvcEJvcmRlckNvbG9ySW5wdXQgPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0uY29sb3IpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLnVwZGF0ZUJvcmRlckNvbG9yKVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG4gICAgICAgIHRoaXMucmlnaHRCb3JkZXJDb2xvcklucHV0ID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLmNvbG9yKVxuICAgICAgICAgICAgLmRpc2FibGVkKHRoaXMuc2VsZWN0QWxsQ2hlY2tCb3guY2hlY2tlZClcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMudXBkYXRlQm9yZGVyQ29sb3IpXG4gICAgICAgICAgICAuYnVpbGQoKTtcbiAgICAgICAgdGhpcy5ib3R0b21Cb3JkZXJDb2xvcklucHV0ID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLmNvbG9yKVxuICAgICAgICAgICAgLmRpc2FibGVkKHRoaXMuc2VsZWN0QWxsQ2hlY2tCb3guY2hlY2tlZClcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMudXBkYXRlQm9yZGVyQ29sb3IpXG4gICAgICAgICAgICAuYnVpbGQoKTtcbiAgICAgICAgdGhpcy5sZWZ0Qm9yZGVyQ29sb3JJbnB1dCA9IG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS5jb2xvcilcbiAgICAgICAgICAgIC5kaXNhYmxlZCh0aGlzLnNlbGVjdEFsbENoZWNrQm94LmNoZWNrZWQpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLnVwZGF0ZUJvcmRlckNvbG9yKVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBidWlsZFN0eWxlU2VsZWN0b3JzKCkge1xuICAgICAgICB0aGlzLnRvcEJvcmRlclN0eWxlU2VsZWN0b3IgPSBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIoQm9yZGVyU3R5bGVFbnVtKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudXBkYXRlQm9yZGVyU3R5bGVQcm9wZXJ0eSlcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgIHRoaXMucmlnaHRCb3JkZXJTdHlsZVNlbGVjdG9yID0gbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKEJvcmRlclN0eWxlRW51bSlcbiAgICAgICAgICAgIC5kaXNhYmxlZCh0aGlzLnNlbGVjdEFsbENoZWNrQm94LmNoZWNrZWQpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVCb3JkZXJTdHlsZVByb3BlcnR5KVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgdGhpcy5ib3R0b21Cb3JkZXJTdHlsZVNlbGVjdG9yID0gbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKEJvcmRlclN0eWxlRW51bSlcbiAgICAgICAgICAgIC5kaXNhYmxlZCh0aGlzLnNlbGVjdEFsbENoZWNrQm94LmNoZWNrZWQpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVCb3JkZXJTdHlsZVByb3BlcnR5KVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgdGhpcy5sZWZ0Qm9yZGVyU3R5bGVTZWxlY3RvciA9IG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihCb3JkZXJTdHlsZUVudW0pXG4gICAgICAgICAgICAuZGlzYWJsZWQodGhpcy5zZWxlY3RBbGxDaGVja0JveC5jaGVja2VkKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudXBkYXRlQm9yZGVyU3R5bGVQcm9wZXJ0eSlcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBidWlsZEJvcmRlcldpZHRoSW5wdXRzKCkge1xuICAgICAgICB0aGlzLnRvcEJvcmRlcldpZHRoSW5wdXQgPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0ubnVtYmVyKVxuICAgICAgICAgICAgLnNldE1pbigwKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy51cGRhdGVCb3JkZXJXaWR0aClcbiAgICAgICAgICAgIC5idWlsZCgpO1xuICAgICAgICB0aGlzLnJpZ2h0Qm9yZGVyV2lkdGhJbnB1dCA9IG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS5udW1iZXIpXG4gICAgICAgICAgICAuc2V0TWluKDApXG4gICAgICAgICAgICAuZGlzYWJsZWQodGhpcy5zZWxlY3RBbGxDaGVja0JveC5jaGVja2VkKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudXBkYXRlQm9yZGVyV2lkdGgpXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICB0aGlzLmJvdHRvbUJvcmRlcldpZHRoSW5wdXQgPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0ubnVtYmVyKVxuICAgICAgICAgICAgLnNldE1pbigwKVxuICAgICAgICAgICAgLmRpc2FibGVkKHRoaXMuc2VsZWN0QWxsQ2hlY2tCb3guY2hlY2tlZClcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnVwZGF0ZUJvcmRlcldpZHRoKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgdGhpcy5sZWZ0Qm9yZGVyV2lkdGhJbnB1dCA9IG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS5udW1iZXIpXG4gICAgICAgICAgICAuc2V0TWluKDApXG4gICAgICAgICAgICAuZGlzYWJsZWQodGhpcy5zZWxlY3RBbGxDaGVja0JveC5jaGVja2VkKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudXBkYXRlQm9yZGVyV2lkdGgpXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgIH1cblxuICAgIHByaXZhdGUgYnVpbGRCb3JkZXJXaWR0aFVuaXRzU2VsZWN0b3JzKCkge1xuICAgICAgICB0aGlzLnRvcEJvcmRlcldpZHRoVW5pdFNlbGVjdG9yID0gbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKFVuaXRzRW51bSlcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnVwZGF0ZUJvcmRlcldpZHRoKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgdGhpcy5yaWdodEJvcmRlcldpZHRoVW5pdFNlbGVjdG9yID0gbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKFVuaXRzRW51bSlcbiAgICAgICAgICAgIC5kaXNhYmxlZCh0aGlzLnNlbGVjdEFsbENoZWNrQm94LmNoZWNrZWQpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVCb3JkZXJXaWR0aClcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgIHRoaXMuYm90dG9tQm9yZGVyV2lkdGhVbml0U2VsZWN0b3IgPSBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIoVW5pdHNFbnVtKVxuICAgICAgICAgICAgLmRpc2FibGVkKHRoaXMuc2VsZWN0QWxsQ2hlY2tCb3guY2hlY2tlZClcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnVwZGF0ZUJvcmRlcldpZHRoKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgdGhpcy5sZWZ0Qm9yZGVyV2lkdGhVbml0U2VsZWN0b3IgPSBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIoVW5pdHNFbnVtKVxuICAgICAgICAgICAgLmRpc2FibGVkKHRoaXMuc2VsZWN0QWxsQ2hlY2tCb3guY2hlY2tlZClcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnVwZGF0ZUJvcmRlcldpZHRoKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICB9XG5cbiAgICBwcml2YXRlIGJ1aWxkQm9yZGVyUmFkaXVzSW5wdXRzKCkge1xuICAgICAgICB0aGlzLnRvcEJvcmRlclJhZGl1c0lucHV0ID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLm51bWJlcilcbiAgICAgICAgICAgIC5zZXRNaW4oMClcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMudXBkYXRlQm9yZGVyUmFkaXVzKVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG4gICAgICAgIHRoaXMucmlnaHRCb3JkZXJSYWRpdXNJbnB1dCA9IG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS5udW1iZXIpXG4gICAgICAgICAgICAuc2V0TWluKDApXG4gICAgICAgICAgICAuZGlzYWJsZWQodGhpcy5zZWxlY3RBbGxDaGVja0JveC5jaGVja2VkKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudXBkYXRlQm9yZGVyUmFkaXVzKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgdGhpcy5ib3R0b21Cb3JkZXJSYWRpdXNJbnB1dCA9IG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS5udW1iZXIpXG4gICAgICAgICAgICAuc2V0TWluKDApXG4gICAgICAgICAgICAuZGlzYWJsZWQodGhpcy5zZWxlY3RBbGxDaGVja0JveC5jaGVja2VkKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudXBkYXRlQm9yZGVyUmFkaXVzKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgdGhpcy5sZWZ0Qm9yZGVyUmFkaXVzSW5wdXQgPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0ubnVtYmVyKVxuICAgICAgICAgICAgLnNldE1pbigwKVxuICAgICAgICAgICAgLmRpc2FibGVkKHRoaXMuc2VsZWN0QWxsQ2hlY2tCb3guY2hlY2tlZClcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnVwZGF0ZUJvcmRlclJhZGl1cylcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBidWlsZEJvcmRlclJhZGl1c1VuaXRzU2VsZWN0b3JzKCkge1xuICAgICAgICB0aGlzLnRvcEJvcmRlclJhZGl1c1VuaXRTZWxlY3RvciA9IG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihVbml0c0VudW0pXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVCb3JkZXJSYWRpdXMpXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICB0aGlzLnJpZ2h0Qm9yZGVyUmFkaXVzVW5pdFNlbGVjdG9yID0gbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKFVuaXRzRW51bSlcbiAgICAgICAgICAgIC5kaXNhYmxlZCh0aGlzLnNlbGVjdEFsbENoZWNrQm94LmNoZWNrZWQpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVCb3JkZXJSYWRpdXMpXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICB0aGlzLmJvdHRvbUJvcmRlclJhZGl1c1VuaXRTZWxlY3RvciA9IG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihVbml0c0VudW0pXG4gICAgICAgICAgICAuZGlzYWJsZWQodGhpcy5zZWxlY3RBbGxDaGVja0JveC5jaGVja2VkKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudXBkYXRlQm9yZGVyUmFkaXVzKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgdGhpcy5sZWZ0Qm9yZGVyUmFkaXVzVW5pdFNlbGVjdG9yID0gbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKFVuaXRzRW51bSlcbiAgICAgICAgICAgIC5kaXNhYmxlZCh0aGlzLnNlbGVjdEFsbENoZWNrQm94LmNoZWNrZWQpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVCb3JkZXJSYWRpdXMpXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgIH1cblxuICAgIHByaXZhdGUgY2hhbmdlQ29tcG9uZW50c1N0YXR1cyAoKSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdEFsbENoZWNrQm94LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmlnaHRCb3JkZXJTdHlsZVNlbGVjdG9yLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tQm9yZGVyU3R5bGVTZWxlY3Rvci5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmxlZnRCb3JkZXJTdHlsZVNlbGVjdG9yLmRpc2FibGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgdGhpcy5yaWdodEJvcmRlckNvbG9ySW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5ib3R0b21Cb3JkZXJDb2xvcklucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubGVmdEJvcmRlckNvbG9ySW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICB0aGlzLnJpZ2h0Qm9yZGVyV2lkdGhJbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbUJvcmRlcldpZHRoSW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5sZWZ0Qm9yZGVyV2lkdGhJbnB1dC5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIHRoaXMucmlnaHRCb3JkZXJXaWR0aFVuaXRTZWxlY3Rvci5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbUJvcmRlcldpZHRoVW5pdFNlbGVjdG9yLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubGVmdEJvcmRlcldpZHRoVW5pdFNlbGVjdG9yLmRpc2FibGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgdGhpcy5yaWdodEJvcmRlclJhZGl1c0lucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tQm9yZGVyUmFkaXVzSW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5sZWZ0Qm9yZGVyUmFkaXVzSW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICB0aGlzLnJpZ2h0Qm9yZGVyUmFkaXVzVW5pdFNlbGVjdG9yLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tQm9yZGVyUmFkaXVzVW5pdFNlbGVjdG9yLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubGVmdEJvcmRlclJhZGl1c1VuaXRTZWxlY3Rvci5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJpZ2h0Qm9yZGVyU3R5bGVTZWxlY3Rvci5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5ib3R0b21Cb3JkZXJTdHlsZVNlbGVjdG9yLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmxlZnRCb3JkZXJTdHlsZVNlbGVjdG9yLmRpc2FibGVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIHRoaXMucmlnaHRCb3JkZXJDb2xvcklucHV0LmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbUJvcmRlckNvbG9ySW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubGVmdEJvcmRlckNvbG9ySW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgdGhpcy5yaWdodEJvcmRlcldpZHRoSW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tQm9yZGVyV2lkdGhJbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5sZWZ0Qm9yZGVyV2lkdGhJbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICB0aGlzLnJpZ2h0Qm9yZGVyV2lkdGhVbml0U2VsZWN0b3IuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tQm9yZGVyV2lkdGhVbml0U2VsZWN0b3IuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubGVmdEJvcmRlcldpZHRoVW5pdFNlbGVjdG9yLmRpc2FibGVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIHRoaXMucmlnaHRCb3JkZXJSYWRpdXNJbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5ib3R0b21Cb3JkZXJSYWRpdXNJbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5sZWZ0Qm9yZGVyUmFkaXVzSW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgdGhpcy5yaWdodEJvcmRlclJhZGl1c1VuaXRTZWxlY3Rvci5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5ib3R0b21Cb3JkZXJSYWRpdXNVbml0U2VsZWN0b3IuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubGVmdEJvcmRlclJhZGl1c1VuaXRTZWxlY3Rvci5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRCb3JkZXJWYWx1ZXNBY2NvcmRpbmdUb0NsYXNzKCkge1xuICAgICAgICB0aGlzLnNldEJvcmRlckNvbG9yVmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpO1xuICAgICAgICB0aGlzLnNldEJvcmRlclN0eWxlVmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpO1xuICAgICAgICB0aGlzLnNldEJvcmRlcldpZHRoVmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpO1xuICAgICAgICB0aGlzLnNldEJvcmRlclJhZGl1c1ZhbHVlc0FjY29yZGluZ1RvQ2xhc3MoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEJvcmRlckNvbG9yVmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpIHtcbiAgICAgICAgY29uc3Qge3RvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdH0gPSB0aGlzLmdldEN1cnJlbnRCb3JkZXJDb2xvcigpO1xuICAgICAgICB0aGlzLnRvcEJvcmRlckNvbG9ySW5wdXQudmFsdWUgPSB0b3A7XG4gICAgICAgIHRoaXMucmlnaHRCb3JkZXJDb2xvcklucHV0LnZhbHVlID0gcmlnaHQ7XG4gICAgICAgIHRoaXMuYm90dG9tQm9yZGVyQ29sb3JJbnB1dC52YWx1ZSA9IGJvdHRvbTtcbiAgICAgICAgdGhpcy5sZWZ0Qm9yZGVyQ29sb3JJbnB1dC52YWx1ZSA9IGxlZnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRCb3JkZXJTdHlsZVZhbHVlc0FjY29yZGluZ1RvQ2xhc3MoKSB7XG4gICAgICAgIGNvbnN0IHt0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnR9ID0gdGhpcy5nZXRDdXJyZW50Qm9yZGVyU3R5bGUoKTtcbiAgICAgICAgdGhpcy50b3BCb3JkZXJTdHlsZVNlbGVjdG9yLnZhbHVlID0gdG9wO1xuICAgICAgICB0aGlzLnJpZ2h0Qm9yZGVyU3R5bGVTZWxlY3Rvci52YWx1ZSA9IHJpZ2h0O1xuICAgICAgICB0aGlzLmJvdHRvbUJvcmRlclN0eWxlU2VsZWN0b3IudmFsdWUgPSBib3R0b207XG4gICAgICAgIHRoaXMubGVmdEJvcmRlclN0eWxlU2VsZWN0b3IudmFsdWUgPSBsZWZ0O1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0Qm9yZGVyV2lkdGhWYWx1ZXNBY2NvcmRpbmdUb0NsYXNzKCkge1xuICAgICAgICBjb25zdCB7dG9wLCByaWdodCwgYm90dG9tLCBsZWZ0fSA9IHRoaXMuZ2V0Q3VycmVudEJvcmRlcldpZHRoKCk7XG4gICAgICAgIHRoaXMudG9wQm9yZGVyV2lkdGhJbnB1dC52YWx1ZSA9IGAke3BhcnNlSW50KHRvcCl9YDtcbiAgICAgICAgdGhpcy5yaWdodEJvcmRlcldpZHRoSW5wdXQudmFsdWUgPSBgJHtwYXJzZUludChyaWdodCl9YDtcbiAgICAgICAgdGhpcy5ib3R0b21Cb3JkZXJXaWR0aElucHV0LnZhbHVlID0gYCR7cGFyc2VJbnQoYm90dG9tKX1gO1xuICAgICAgICB0aGlzLmxlZnRCb3JkZXJXaWR0aElucHV0LnZhbHVlID0gYCR7cGFyc2VJbnQobGVmdCl9YDtcblxuICAgICAgICB0aGlzLnRvcEJvcmRlcldpZHRoVW5pdFNlbGVjdG9yLnZhbHVlID0gZ2V0VW5pdCh0b3ApO1xuICAgICAgICB0aGlzLnJpZ2h0Qm9yZGVyV2lkdGhVbml0U2VsZWN0b3IudmFsdWUgPSBnZXRVbml0KHJpZ2h0KTtcbiAgICAgICAgdGhpcy5ib3R0b21Cb3JkZXJXaWR0aFVuaXRTZWxlY3Rvci52YWx1ZSA9IGdldFVuaXQoYm90dG9tKTtcbiAgICAgICAgdGhpcy5sZWZ0Qm9yZGVyV2lkdGhVbml0U2VsZWN0b3IudmFsdWUgPSBnZXRVbml0KGxlZnQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0Qm9yZGVyUmFkaXVzVmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpIHtcbiAgICAgICAgY29uc3Qge3RvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdH0gPSB0aGlzLmdldEN1cnJlbnRCb3JkZXJSYWRpdXMoKTtcbiAgICAgICAgdGhpcy50b3BCb3JkZXJSYWRpdXNJbnB1dC52YWx1ZSA9IGAke3BhcnNlSW50KHRvcCl9YDtcbiAgICAgICAgdGhpcy5yaWdodEJvcmRlclJhZGl1c0lucHV0LnZhbHVlID0gYCR7cGFyc2VJbnQocmlnaHQpfWA7XG4gICAgICAgIHRoaXMuYm90dG9tQm9yZGVyUmFkaXVzSW5wdXQudmFsdWUgPSBgJHtwYXJzZUludChib3R0b20pfWA7XG4gICAgICAgIHRoaXMubGVmdEJvcmRlclJhZGl1c0lucHV0LnZhbHVlID0gYCR7cGFyc2VJbnQobGVmdCl9YDtcblxuICAgICAgICB0aGlzLnRvcEJvcmRlclJhZGl1c1VuaXRTZWxlY3Rvci52YWx1ZSA9IGdldFVuaXQodG9wKTtcbiAgICAgICAgdGhpcy5yaWdodEJvcmRlclJhZGl1c1VuaXRTZWxlY3Rvci52YWx1ZSA9IGdldFVuaXQocmlnaHQpO1xuICAgICAgICB0aGlzLmJvdHRvbUJvcmRlclJhZGl1c1VuaXRTZWxlY3Rvci52YWx1ZSA9IGdldFVuaXQoYm90dG9tKTtcbiAgICAgICAgdGhpcy5sZWZ0Qm9yZGVyUmFkaXVzVW5pdFNlbGVjdG9yLnZhbHVlID0gZ2V0VW5pdChsZWZ0KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUJvcmRlclN0eWxlUHJvcGVydHkoKSB7XG4gICAgICAgIGxldCB7dG9wLCByaWdodCwgYm90dG9tLCBsZWZ0fSA9IHRoaXMuZ2V0Q3VycmVudEJvcmRlclN0eWxlKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0QWxsQ2hlY2tCb3guY2hlY2tlZCkge1xuICAgICAgICAgICAgdG9wID0gdGhpcy50b3BCb3JkZXJTdHlsZVNlbGVjdG9yLnZhbHVlO1xuICAgICAgICAgICAgcmlnaHQgPSB0b3A7XG4gICAgICAgICAgICBib3R0b20gPSB0b3A7XG4gICAgICAgICAgICBsZWZ0ID0gdG9wO1xuXG4gICAgICAgICAgICB0aGlzLnJpZ2h0Qm9yZGVyU3R5bGVTZWxlY3Rvci52YWx1ZSA9IHRoaXMudG9wQm9yZGVyU3R5bGVTZWxlY3Rvci52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tQm9yZGVyU3R5bGVTZWxlY3Rvci52YWx1ZSA9IHRoaXMudG9wQm9yZGVyU3R5bGVTZWxlY3Rvci52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMubGVmdEJvcmRlclN0eWxlU2VsZWN0b3IudmFsdWUgPSB0aGlzLnRvcEJvcmRlclN0eWxlU2VsZWN0b3IudmFsdWU7XG5cbiAgICAgICAgICAgIGlmKHRvcCA9PT0gQm9yZGVyU3R5bGVFbnVtLm5vbmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0Qm9yZGVyUHJvcGVydHkoJ2JvcmRlci1zdHlsZScsICdhbGwnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0Qm9yZGVyUHJvcGVydHkoJ2JvcmRlci1jb2xvcicsICdhbGwnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0Qm9yZGVyUHJvcGVydHkoJ2JvcmRlci13aWR0aCcsICdhbGwnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0Qm9yZGVyUHJvcGVydHkoJ2JvcmRlci1yYWRpdXMnLCAnYWxsJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldEJvcmRlclByb3BlcnR5KCdib3JkZXItaW1hZ2UnLCAnYWxsJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG9wID0gdGhpcy50b3BCb3JkZXJTdHlsZVNlbGVjdG9yLnZhbHVlO1xuICAgICAgICAgICAgcmlnaHQgPSB0aGlzLnJpZ2h0Qm9yZGVyU3R5bGVTZWxlY3Rvci52YWx1ZTtcbiAgICAgICAgICAgIGJvdHRvbSA9IHRoaXMuYm90dG9tQm9yZGVyU3R5bGVTZWxlY3Rvci52YWx1ZTtcbiAgICAgICAgICAgIGxlZnQgPSB0aGlzLmxlZnRCb3JkZXJTdHlsZVNlbGVjdG9yLnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYm9yZGVyLXN0eWxlJ10gPSBbdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0XS5qb2luKCcgJylcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlc2V0Qm9yZGVyUHJvcGVydHkoXG4gICAgICAgIHByb3BlcnR5OiAnYm9yZGVyLXN0eWxlJyB8ICdib3JkZXItY29sb3InIHwgJ2JvcmRlci13aWR0aCcgfCAnYm9yZGVyLXJhZGl1cycgfCAnYm9yZGVyLWltYWdlJyxcbiAgICAgICAgcG9zaXRpb246ICd0b3AnIHwgJ3JpZ2h0JyB8ICdib3R0b20nIHwgJ2xlZnQnIHwgJ2FsbCdcbiAgICApIHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBwb3NpdGlvbiA9PT0gJ2FsbCcgPyBwcm9wZXJ0eSA6IGAke3Byb3BlcnR5fS0ke3Bvc2l0aW9ufWA7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbc3R5bGVdID0gJyc7XG5cbiAgICAgICAgaWYocHJvcGVydHkgPT09ICdib3JkZXItc3R5bGUnKSB7XG4gICAgICAgICAgICB0aGlzLnNldEJvcmRlclN0eWxlVmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYocHJvcGVydHkgPT09ICdib3JkZXItY29sb3InKSB7XG4gICAgICAgICAgICB0aGlzLnNldEJvcmRlckNvbG9yVmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYocHJvcGVydHkgPT09ICdib3JkZXItd2lkdGgnKSB7XG4gICAgICAgICAgICB0aGlzLnNldEJvcmRlcldpZHRoVmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYocHJvcGVydHkgPT09ICdib3JkZXItcmFkaXVzJykge1xuICAgICAgICAgICAgdGhpcy5zZXRCb3JkZXJSYWRpdXNWYWx1ZXNBY2NvcmRpbmdUb0NsYXNzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUJvcmRlckNvbG9yKCkge1xuICAgICAgICBsZXQge3RvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdH0gPSB0aGlzLmdldEN1cnJlbnRCb3JkZXJDb2xvcigpO1xuXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdEFsbENoZWNrQm94LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIHRvcCA9IHRoaXMudG9wQm9yZGVyQ29sb3JJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIHJpZ2h0ID0gdG9wO1xuICAgICAgICAgICAgYm90dG9tID0gdG9wO1xuICAgICAgICAgICAgbGVmdCA9IHRvcDtcblxuICAgICAgICAgICAgdGhpcy5yaWdodEJvcmRlckNvbG9ySW5wdXQudmFsdWUgPSB0aGlzLnRvcEJvcmRlckNvbG9ySW5wdXQudmFsdWU7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbUJvcmRlckNvbG9ySW5wdXQudmFsdWUgPSB0aGlzLnRvcEJvcmRlckNvbG9ySW5wdXQudmFsdWU7XG4gICAgICAgICAgICB0aGlzLmxlZnRCb3JkZXJDb2xvcklucHV0LnZhbHVlID0gdGhpcy50b3BCb3JkZXJDb2xvcklucHV0LnZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG9wID0gdGhpcy50b3BCb3JkZXJDb2xvcklucHV0LnZhbHVlO1xuICAgICAgICAgICAgcmlnaHQgPSB0aGlzLnJpZ2h0Qm9yZGVyQ29sb3JJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIGJvdHRvbSA9IHRoaXMuYm90dG9tQm9yZGVyQ29sb3JJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIGxlZnQgPSB0aGlzLmxlZnRCb3JkZXJDb2xvcklucHV0LnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYm9yZGVyLWNvbG9yJ10gPSBbdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0XS5qb2luKCcgJylcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUJvcmRlcldpZHRoKCkge1xuICAgICAgICBsZXQge3RvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdH0gPSB0aGlzLmdldEN1cnJlbnRCb3JkZXJXaWR0aCgpO1xuXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdEFsbENoZWNrQm94LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGlmKHBhcnNlSW50KHRoaXMudG9wQm9yZGVyV2lkdGhJbnB1dC52YWx1ZSkgPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0Qm9yZGVyUHJvcGVydHkoJ2JvcmRlci13aWR0aCcsICdhbGwnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRvcCA9IGAke3RoaXMudG9wQm9yZGVyV2lkdGhJbnB1dC52YWx1ZX0ke3RoaXMudG9wQm9yZGVyV2lkdGhVbml0U2VsZWN0b3IudmFsdWV9YDtcbiAgICAgICAgICAgIHJpZ2h0ID0gdG9wO1xuICAgICAgICAgICAgYm90dG9tID0gdG9wO1xuICAgICAgICAgICAgbGVmdCA9IHRvcDtcblxuICAgICAgICAgICAgdGhpcy5yaWdodEJvcmRlcldpZHRoSW5wdXQudmFsdWUgPSB0aGlzLnRvcEJvcmRlcldpZHRoSW5wdXQudmFsdWU7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbUJvcmRlcldpZHRoSW5wdXQudmFsdWUgPSB0aGlzLnRvcEJvcmRlcldpZHRoSW5wdXQudmFsdWU7XG4gICAgICAgICAgICB0aGlzLmxlZnRCb3JkZXJXaWR0aElucHV0LnZhbHVlID0gdGhpcy50b3BCb3JkZXJXaWR0aElucHV0LnZhbHVlO1xuXG4gICAgICAgICAgICB0aGlzLnJpZ2h0Qm9yZGVyV2lkdGhVbml0U2VsZWN0b3IudmFsdWUgPSB0aGlzLnRvcEJvcmRlcldpZHRoVW5pdFNlbGVjdG9yLnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ib3R0b21Cb3JkZXJXaWR0aFVuaXRTZWxlY3Rvci52YWx1ZSA9IHRoaXMudG9wQm9yZGVyV2lkdGhVbml0U2VsZWN0b3IudmFsdWU7XG4gICAgICAgICAgICB0aGlzLmxlZnRCb3JkZXJXaWR0aFVuaXRTZWxlY3Rvci52YWx1ZSA9IHRoaXMudG9wQm9yZGVyV2lkdGhVbml0U2VsZWN0b3IudmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0b3AgPSBgJHt0aGlzLnRvcEJvcmRlcldpZHRoSW5wdXQudmFsdWV9JHt0aGlzLnRvcEJvcmRlcldpZHRoVW5pdFNlbGVjdG9yLnZhbHVlfWA7XG4gICAgICAgICAgICByaWdodCA9IGAke3RoaXMucmlnaHRCb3JkZXJXaWR0aElucHV0LnZhbHVlfSR7dGhpcy5yaWdodEJvcmRlcldpZHRoVW5pdFNlbGVjdG9yLnZhbHVlfWA7XG4gICAgICAgICAgICBib3R0b20gPSBgJHt0aGlzLmJvdHRvbUJvcmRlcldpZHRoSW5wdXQudmFsdWV9JHt0aGlzLmJvdHRvbUJvcmRlcldpZHRoVW5pdFNlbGVjdG9yLnZhbHVlfWA7XG4gICAgICAgICAgICBsZWZ0ID0gYCR7dGhpcy5sZWZ0Qm9yZGVyV2lkdGhJbnB1dC52YWx1ZX0ke3RoaXMubGVmdEJvcmRlcldpZHRoVW5pdFNlbGVjdG9yLnZhbHVlfWA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYm9yZGVyLXdpZHRoJ10gPSBbdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0XS5qb2luKCcgJylcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUJvcmRlclJhZGl1cygpIHtcbiAgICAgICAgbGV0IHt0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnR9ID0gdGhpcy5nZXRDdXJyZW50Qm9yZGVyUmFkaXVzKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0QWxsQ2hlY2tCb3guY2hlY2tlZCkge1xuICAgICAgICAgICAgaWYocGFyc2VJbnQodGhpcy50b3BCb3JkZXJSYWRpdXNJbnB1dC52YWx1ZSkgPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0Qm9yZGVyUHJvcGVydHkoJ2JvcmRlci1yYWRpdXMnLCAnYWxsJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0b3AgPSBgJHt0aGlzLnRvcEJvcmRlclJhZGl1c0lucHV0LnZhbHVlfSR7dGhpcy50b3BCb3JkZXJSYWRpdXNVbml0U2VsZWN0b3IudmFsdWV9YDtcbiAgICAgICAgICAgIHJpZ2h0ID0gdG9wO1xuICAgICAgICAgICAgYm90dG9tID0gdG9wO1xuICAgICAgICAgICAgbGVmdCA9IHRvcDtcblxuICAgICAgICAgICAgdGhpcy5yaWdodEJvcmRlclJhZGl1c0lucHV0LnZhbHVlID0gdGhpcy50b3BCb3JkZXJSYWRpdXNJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tQm9yZGVyUmFkaXVzSW5wdXQudmFsdWUgPSB0aGlzLnRvcEJvcmRlclJhZGl1c0lucHV0LnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5sZWZ0Qm9yZGVyUmFkaXVzSW5wdXQudmFsdWUgPSB0aGlzLnRvcEJvcmRlclJhZGl1c0lucHV0LnZhbHVlO1xuXG4gICAgICAgICAgICB0aGlzLnJpZ2h0Qm9yZGVyUmFkaXVzVW5pdFNlbGVjdG9yLnZhbHVlID0gdGhpcy50b3BCb3JkZXJSYWRpdXNVbml0U2VsZWN0b3IudmFsdWU7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbUJvcmRlclJhZGl1c1VuaXRTZWxlY3Rvci52YWx1ZSA9IHRoaXMudG9wQm9yZGVyUmFkaXVzVW5pdFNlbGVjdG9yLnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5sZWZ0Qm9yZGVyUmFkaXVzVW5pdFNlbGVjdG9yLnZhbHVlID0gdGhpcy50b3BCb3JkZXJSYWRpdXNVbml0U2VsZWN0b3IudmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0b3AgPSBgJHt0aGlzLnRvcEJvcmRlclJhZGl1c0lucHV0LnZhbHVlfSR7dGhpcy50b3BCb3JkZXJSYWRpdXNVbml0U2VsZWN0b3IudmFsdWV9YDtcbiAgICAgICAgICAgIHJpZ2h0ID0gYCR7dGhpcy5yaWdodEJvcmRlclJhZGl1c0lucHV0LnZhbHVlfSR7dGhpcy5yaWdodEJvcmRlclJhZGl1c1VuaXRTZWxlY3Rvci52YWx1ZX1gO1xuICAgICAgICAgICAgYm90dG9tID0gYCR7dGhpcy5ib3R0b21Cb3JkZXJSYWRpdXNJbnB1dC52YWx1ZX0ke3RoaXMuYm90dG9tQm9yZGVyUmFkaXVzVW5pdFNlbGVjdG9yLnZhbHVlfWA7XG4gICAgICAgICAgICBsZWZ0ID0gYCR7dGhpcy5sZWZ0Qm9yZGVyUmFkaXVzSW5wdXQudmFsdWV9JHt0aGlzLmxlZnRCb3JkZXJSYWRpdXNVbml0U2VsZWN0b3IudmFsdWV9YDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydib3JkZXItcmFkaXVzJ10gPSBbdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0XS5qb2luKCcgJylcbiAgICB9XG5cbiAgICBwcml2YXRlIHVuaWZpZWRCb3JkZXJQcm9wZXJ0aWVzKCkgOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgYWxsRXF1YWwgPSBbXTtcbiAgICAgICAgYWxsRXF1YWwucHVzaCh0aGlzLmdldEN1cnJlbnRCb3JkZXJTdHlsZSgpLmFsbEVxdWFsKVxuICAgICAgICBhbGxFcXVhbC5wdXNoKHRoaXMuZ2V0Q3VycmVudEJvcmRlckNvbG9yKCkuYWxsRXF1YWwpXG4gICAgICAgIGFsbEVxdWFsLnB1c2godGhpcy5nZXRDdXJyZW50Qm9yZGVyUmFkaXVzKCkuYWxsRXF1YWwpXG4gICAgICAgIGFsbEVxdWFsLnB1c2godGhpcy5nZXRDdXJyZW50Qm9yZGVyU3R5bGUoKS5hbGxFcXVhbClcbiAgICAgICAgYWxsRXF1YWwucHVzaCh0aGlzLmdldEN1cnJlbnRCb3JkZXJXaWR0aCgpLmFsbEVxdWFsKVxuXG4gICAgICAgIGlmKGFsbEVxdWFsLmZpbmQoKGVsKSA9PiBlbCA9PT0gZmFsc2UpID09PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0Q3VycmVudEJvcmRlclN0eWxlKCk6IFN0eWxlc1JldHVybk9iamVjdEludGVyZmFjZSB7XG4gICAgICAgIGNvbnN0IHRvcCA9IHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2JvcmRlci10b3Atc3R5bGUnXTtcbiAgICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydib3JkZXItcmlnaHQtc3R5bGUnXTtcbiAgICAgICAgY29uc3QgYm90dG9tID0gdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYm9yZGVyLWJvdHRvbS1zdHlsZSddO1xuICAgICAgICBjb25zdCBsZWZ0ID0gdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYm9yZGVyLWxlZnQtc3R5bGUnXTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdG9wOiB0b3AgPyB0b3AgOiAnbm9uZScsXG4gICAgICAgICAgICByaWdodDogcmlnaHQgPyByaWdodCA6ICdub25lJyxcbiAgICAgICAgICAgIGJvdHRvbTogYm90dG9tID8gYm90dG9tIDogJ25vbmUnLFxuICAgICAgICAgICAgbGVmdDogbGVmdCA/IGxlZnQgOiAnbm9uZScsXG4gICAgICAgICAgICBhbGxFcXVhbDogdG9wID09PSByaWdodCAmJiB0b3AgPT09IGJvdHRvbSAmJiB0b3AgPT09IGxlZnQsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRDdXJyZW50Qm9yZGVyQ29sb3IoKTogU3R5bGVzUmV0dXJuT2JqZWN0SW50ZXJmYWNlIHtcbiAgICAgICAgY29uc3QgdG9wID0gdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYm9yZGVyLXRvcC1jb2xvciddO1xuICAgICAgICBjb25zdCByaWdodCA9IHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2JvcmRlci1yaWdodC1jb2xvciddO1xuICAgICAgICBjb25zdCBib3R0b20gPSB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydib3JkZXItYm90dG9tLWNvbG9yJ107XG4gICAgICAgIGNvbnN0IGxlZnQgPSB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydib3JkZXItbGVmdC1jb2xvciddO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0b3A6IGNvbG9yVG9IZXgodG9wKSxcbiAgICAgICAgICAgIHJpZ2h0OiBjb2xvclRvSGV4KHJpZ2h0KSxcbiAgICAgICAgICAgIGJvdHRvbTogY29sb3JUb0hleChib3R0b20pLFxuICAgICAgICAgICAgbGVmdDogY29sb3JUb0hleChsZWZ0KSxcbiAgICAgICAgICAgIGFsbEVxdWFsOiB0b3AgPT09IHJpZ2h0ICYmIHRvcCA9PT0gYm90dG9tICYmIHRvcCA9PT0gbGVmdCxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEN1cnJlbnRCb3JkZXJXaWR0aCgpOiBTdHlsZXNSZXR1cm5PYmplY3RJbnRlcmZhY2Uge1xuICAgICAgICBjb25zdCB0b3AgPSB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydib3JkZXItdG9wLXdpZHRoJ107XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYm9yZGVyLXJpZ2h0LXdpZHRoJ107XG4gICAgICAgIGNvbnN0IGJvdHRvbSA9IHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2JvcmRlci1ib3R0b20td2lkdGgnXTtcbiAgICAgICAgY29uc3QgbGVmdCA9IHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2JvcmRlci1sZWZ0LXdpZHRoJ107XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRvcDogdG9wID8gdG9wIDogJzBweCcsXG4gICAgICAgICAgICByaWdodDogcmlnaHQgPyByaWdodCA6ICcwcHgnLFxuICAgICAgICAgICAgYm90dG9tOiBib3R0b20gPyBib3R0b20gOiAnMHB4JyxcbiAgICAgICAgICAgIGxlZnQ6IGxlZnQgPyBsZWZ0IDogJzBweCcsXG4gICAgICAgICAgICBhbGxFcXVhbDogdG9wID09PSByaWdodCAmJiB0b3AgPT09IGJvdHRvbSAmJiB0b3AgPT09IGxlZnQsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRDdXJyZW50Qm9yZGVyUmFkaXVzKCk6IFN0eWxlc1JldHVybk9iamVjdEludGVyZmFjZSB7XG4gICAgICAgIGNvbnN0IHRvcCA9IHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2JvcmRlci10b3AtbGVmdC1yYWRpdXMnXTtcbiAgICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydib3JkZXItdG9wLXJpZ2h0LXJhZGl1cyddO1xuICAgICAgICBjb25zdCBib3R0b20gPSB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cyddO1xuICAgICAgICBjb25zdCBsZWZ0ID0gdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cyddO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0b3A6IHRvcCA/IHRvcCA6ICcwcHgnLFxuICAgICAgICAgICAgcmlnaHQ6IHJpZ2h0ID8gcmlnaHQgOiAnMHB4JyxcbiAgICAgICAgICAgIGJvdHRvbTogYm90dG9tID8gYm90dG9tIDogJzBweCcsXG4gICAgICAgICAgICBsZWZ0OiBsZWZ0ID8gbGVmdCA6ICcwcHgnLFxuICAgICAgICAgICAgYWxsRXF1YWw6IHRvcCA9PT0gcmlnaHQgJiYgdG9wID09PSBib3R0b20gJiYgdG9wID09PSBsZWZ0LFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGFzc05hbWVVcGRhdGVkKG5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0ID0gQ3NzU3R5bGVTaGVldC5nZXRSdWxlU3R5bGVzKG5hbWUpO1xuICAgICAgICB0aGlzLnNlbGVjdEFsbENoZWNrQm94LmNoZWNrZWQgPSB0aGlzLnVuaWZpZWRCb3JkZXJQcm9wZXJ0aWVzKCk7XG4gICAgICAgIHRoaXMuY2hhbmdlQ29tcG9uZW50c1N0YXR1cygpO1xuICAgICAgICB0aGlzLnNldEJvcmRlclZhbHVlc0FjY29yZGluZ1RvQ2xhc3MoKTtcbiAgICB9XG59XG5cbmludGVyZmFjZSBTdHlsZXNSZXR1cm5PYmplY3RJbnRlcmZhY2Uge1xuICAgIHRvcDogc3RyaW5nLFxuICAgIHJpZ2h0OiBzdHJpbmcsXG4gICAgYm90dG9tOiBzdHJpbmcsXG4gICAgbGVmdDogc3RyaW5nLFxuICAgIGFsbEVxdWFsOiBib29sZWFuLFxufVxuIiwiaW1wb3J0IENsYXNzQ2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2UgZnJvbSAnLi4vaW50ZXJmYWNlcy9jbGFzcy1jaGFuZ2Utb2JzZXJ2ZXIuaW50ZXJmYWNlJztcblxuaW1wb3J0IENvbnRhaW5lckJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0NvbnRhaW5lckJ1aWxkZXInO1xuaW1wb3J0IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyIGZyb20gJy4uL21vZGVscy9TZWxlY3RvckZyb21FbnVtQnVpbGRlcic7XG5pbXBvcnQgTGFiZWxCdWlsZGVyIGZyb20gJy4uL21vZGVscy9MYWJlbEJ1aWxkZXInO1xuaW1wb3J0IElucHV0QnVpbGRlciBmcm9tICcuLi9tb2RlbHMvSW5wdXRCdWlsZGVyJztcblxuaW1wb3J0IENzc1N0eWxlU2hlZXQgZnJvbSAnLi4vLi4vY3NzLXN0eWxlc2hlZXQvY3NzLXN0eWxlc2hlZXQnO1xuaW1wb3J0IGdldFVuaXQgZnJvbSAnLi4vZnVuY3Rpb25zL2dldC1jc3MtdW5pdCc7XG5pbXBvcnQgY29sb3JUb0hleCBmcm9tICcuLi9mdW5jdGlvbnMvcmdiLXRvLWhleCc7XG5pbXBvcnQgVGV4dGFyZWFCdWlsZGVyIGZyb20gJy4uL21vZGVscy9UZXh0QXJlYUJ1aWxkZXInO1xuXG5pbXBvcnQgeyBTdHlsZU5hbWVFbnVtIH0gZnJvbSAnLi4vZW51bXMvc3R5bGUtbmFtZS5lbnVtJztcbmltcG9ydCB7IElucHV0VHlwZUVudW0gfSBmcm9tICcuLi9lbnVtcy9pbnB1dC10eXBlLmVudW0nO1xuaW1wb3J0IHsgVW5pdHNFbnVtIH0gZnJvbSAnLi4vZW51bXMvdW5pdHMuZW51bSc7XG5pbXBvcnQgeyBBbGlnbkZsZXhJdGVtc0VudW0gfSBmcm9tICcuLi9lbnVtcy9hbGlnbi1mbGV4LWl0ZW1zLmVudW0nO1xuaW1wb3J0IHsgRmxleERpcmVjdGlvbkVudW0gfSBmcm9tICcuLi9lbnVtcy9mbGV4LWRpcmVjdGlvbi5lbnVtJztcbmltcG9ydCB7IERpc3BsYXlUeXBlc0VudW0gfSBmcm9tICcuLi9lbnVtcy9kaXNwbGF5LXR5cGVzLmVudW0nO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJveFNoYWRvd0NvbXBvbmVudCBpbXBsZW1lbnRzIENsYXNzQ2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2Uge1xuICAgIHByaXZhdGUgZG9tRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBjb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgY29tcG9uZW50c0NvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBzaGFkb3dCb3hUeXBlQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcbiAgICBwcml2YXRlIGRvbUVsZW1lbnRTdHlsZVNoZWV0OiBDU1NTdHlsZURlY2xhcmF0aW9uO1xuXG4gICAgcHJpdmF0ZSBzaW1wbGVCb3hTaGFkb3dDaGVja2JveDogSFRNTElucHV0RWxlbWVudDtcbiAgICBwcml2YXRlIGFkdmFuY2VkQm94U2hhZG93Q2hlY2tib3g6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIGNvbG9ySW5zZXRDb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgY29sb3JJbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgICBwcml2YXRlIGluc2V0U2VsZWN0b3I6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIGhvcml6b250YWxPZmZzZXRDb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgaG9yaXpvbnRhbE9mZnNldElucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHByaXZhdGUgaG9yaXpvbnRhbE9mZnNldFVuaXRTZWxlY3RvcjogSFRNTFNlbGVjdEVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIHZlcnRpY2FsT2Zmc2V0Q29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcbiAgICBwcml2YXRlIHZlcnRpY2FsT2Zmc2V0SW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSB2ZXJ0aWNhbE9mZnNldFVuaXRTZWxlY3RvcjogSFRNTFNlbGVjdEVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIGJsdXJSYWRpdXNDb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgYmx1clJhZGl1c0lucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHByaXZhdGUgYmx1clJhZGl1c1VuaXRTZWxlY3RvcjogSFRNTFNlbGVjdEVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIHNwcmVhZFJhZGl1c0NvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBzcHJlYWRSYWRpdXNJbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgICBwcml2YXRlIHNwcmVhZFJhZGl1c1VuaXRTZWxlY3RvcjogSFRNTFNlbGVjdEVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIGFkdmFuY2VkRW5hYmxlZCA9IGZhbHNlO1xuXG4gICAgcHJpdmF0ZSBhZHZhbmNlZFNoYWRvd0JveFRleHRBcmVhOiBIVE1MVGV4dEFyZWFFbGVtZW50O1xuICAgIHByaXZhdGUgYWR2YW5jZWRTaGFkb3dCb3hDb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihkb21FbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0ID0gQ3NzU3R5bGVTaGVldC5nZXRSdWxlU3R5bGVzKHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3RbMF0pO1xuICAgICAgICB0aGlzLmdldEluaXRpYWxWYWx1ZXMoKTtcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnRzKCk7XG4gICAgICAgIHRoaXMuc2V0Qm94U2hhZG93VmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpO1xuICAgIH1cblxuICAgIGdldCBjb21wb25lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZENvbXBvbmVudHMoKSB7XG4gICAgICAgIHRoaXMuYnVpbGRTaGFkb3dCb3hUeXBlQ29udGFpbmVyKCk7XG4gICAgICAgIHRoaXMuYnVpbGRCYXNpY1NoYWRvd0JveENvbnRhaW5lcnMoKTtcbiAgICAgICAgdGhpcy5idWlsZEFkdmFuY2VkU2hhZG93Qm94Q29udGFpbmVyKCk7XG4gICAgICAgIHRoaXMuYnVpbGRDb21wb25lbnRzQ29udGFpbmVyKCk7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5jb21wb25lbnRzQ29udGFpbmVyKVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBidWlsZFNoYWRvd0JveFR5cGVDb250YWluZXIoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlQm94U2hhZG93VHlwZSA9IHRoaXMudXBkYXRlQm94U2hhZG93VHlwZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuc2ltcGxlQm94U2hhZG93Q2hlY2tib3ggPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0ucmFkaW8pXG4gICAgICAgICAgICAuc2V0TmFtZSgnc2hhZG93VHlwZScpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVCb3hTaGFkb3dUeXBlKVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICB0aGlzLmFkdmFuY2VkQm94U2hhZG93Q2hlY2tib3ggPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0ucmFkaW8pXG4gICAgICAgICAgICAuc2V0TmFtZSgnc2hhZG93VHlwZScpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVCb3hTaGFkb3dUeXBlKVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICBpZiAodGhpcy5hZHZhbmNlZEVuYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZWRCb3hTaGFkb3dDaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2ltcGxlQm94U2hhZG93Q2hlY2tib3guY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNoYWRvd0JveFR5cGVDb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnZmxleC1kaXJlY3Rpb24nXSwgRmxleERpcmVjdGlvbkVudW0uY29sdW1uKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW1bJ2FsaWduLWl0ZW1zJ10sIEFsaWduRmxleEl0ZW1zRW51bS5zdHJldGNoKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdTaW1wbGUgb3IgQWR2YW5jZWQgU2hhZG93IEJveCcpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdTaW1wbGUgLT4nKVxuICAgICAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggM3B4IDBweCAyMHB4JylcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuc2ltcGxlQm94U2hhZG93Q2hlY2tib3gpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdBZHZhbmNlZCAtPicpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAzcHggMHB4IDIwcHgnKVxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5hZHZhbmNlZEJveFNoYWRvd0NoZWNrYm94KVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgIH1cblxuICAgIHByaXZhdGUgYnVpbGRCYXNpY1NoYWRvd0JveENvbnRhaW5lcnMoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlQmFzaWNQcm9wZXJ0eSA9IHRoaXMudXBkYXRlQmFzaWNQcm9wZXJ0eS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuY29sb3JJbnB1dCA9IG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS5jb2xvcilcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMudXBkYXRlQmFzaWNQcm9wZXJ0eSlcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgdGhpcy5pbnNldFNlbGVjdG9yID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLmNoZWNrYm94KVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy51cGRhdGVCYXNpY1Byb3BlcnR5KVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICB0aGlzLmhvcml6b250YWxPZmZzZXRJbnB1dCA9IG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS5udW1iZXIpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLnVwZGF0ZUJhc2ljUHJvcGVydHkpXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIHRoaXMuaG9yaXpvbnRhbE9mZnNldFVuaXRTZWxlY3RvciA9IG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihVbml0c0VudW0pXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVCYXNpY1Byb3BlcnR5KVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICB0aGlzLnZlcnRpY2FsT2Zmc2V0SW5wdXQgPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0ubnVtYmVyKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy51cGRhdGVCYXNpY1Byb3BlcnR5KVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICB0aGlzLnZlcnRpY2FsT2Zmc2V0VW5pdFNlbGVjdG9yID0gbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKFVuaXRzRW51bSlcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnVwZGF0ZUJhc2ljUHJvcGVydHkpXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIHRoaXMuYmx1clJhZGl1c0lucHV0ID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLm51bWJlcilcbiAgICAgICAgICAgIC5zZXRNaW4oMClcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMudXBkYXRlQmFzaWNQcm9wZXJ0eSlcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgdGhpcy5ibHVyUmFkaXVzVW5pdFNlbGVjdG9yID0gbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKFVuaXRzRW51bSlcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnVwZGF0ZUJhc2ljUHJvcGVydHkpXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIHRoaXMuc3ByZWFkUmFkaXVzSW5wdXQgPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0ubnVtYmVyKVxuICAgICAgICAgICAgLnNldE1pbigwKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy51cGRhdGVCYXNpY1Byb3BlcnR5KVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICB0aGlzLnNwcmVhZFJhZGl1c1VuaXRTZWxlY3RvciA9IG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihVbml0c0VudW0pXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVCYXNpY1Byb3BlcnR5KVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICB0aGlzLmNvbG9ySW5zZXRDb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnZmxleC1kaXJlY3Rpb24nXSwgRmxleERpcmVjdGlvbkVudW0uY29sdW1uKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW1bJ2FsaWduLWl0ZW1zJ10sIEFsaWduRmxleEl0ZW1zRW51bS5zdHJldGNoKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdIb3Jpem9udGFsIE9mZnNldCcpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuY29sb3JJbnB1dClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0luc2V0IC0+JylcbiAgICAgICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDNweCAwcHggMjBweCcpXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmluc2V0U2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgdGhpcy5ob3Jpem9udGFsT2Zmc2V0Q29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW1bJ2ZsZXgtZGlyZWN0aW9uJ10sIEZsZXhEaXJlY3Rpb25FbnVtLmNvbHVtbilcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydhbGlnbi1pdGVtcyddLCBBbGlnbkZsZXhJdGVtc0VudW0uc3RyZXRjaClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnSG9yaXpvbnRhbCBPZmZzZXQnKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmhvcml6b250YWxPZmZzZXRJbnB1dClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5ob3Jpem9udGFsT2Zmc2V0VW5pdFNlbGVjdG9yKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIHRoaXMudmVydGljYWxPZmZzZXRDb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnZmxleC1kaXJlY3Rpb24nXSwgRmxleERpcmVjdGlvbkVudW0uY29sdW1uKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW1bJ2FsaWduLWl0ZW1zJ10sIEFsaWduRmxleEl0ZW1zRW51bS5zdHJldGNoKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdWZXJ0aWNhbCBPZmZzZXQnKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLnZlcnRpY2FsT2Zmc2V0SW5wdXQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMudmVydGljYWxPZmZzZXRVbml0U2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgdGhpcy5ibHVyUmFkaXVzQ29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW1bJ2ZsZXgtZGlyZWN0aW9uJ10sIEZsZXhEaXJlY3Rpb25FbnVtLmNvbHVtbilcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydhbGlnbi1pdGVtcyddLCBBbGlnbkZsZXhJdGVtc0VudW0uc3RyZXRjaClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnQmx1ciBSYWRpdXMnKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmJsdXJSYWRpdXNJbnB1dClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5ibHVyUmFkaXVzVW5pdFNlbGVjdG9yKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIHRoaXMuc3ByZWFkUmFkaXVzQ29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW1bJ2ZsZXgtZGlyZWN0aW9uJ10sIEZsZXhEaXJlY3Rpb25FbnVtLmNvbHVtbilcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydhbGlnbi1pdGVtcyddLCBBbGlnbkZsZXhJdGVtc0VudW0uc3RyZXRjaClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnU3ByZWFkIFJhZGl1cycpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuc3ByZWFkUmFkaXVzSW5wdXQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuc3ByZWFkUmFkaXVzVW5pdFNlbGVjdG9yKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgIH1cblxuICAgIHByaXZhdGUgYnVpbGRDb21wb25lbnRzQ29udGFpbmVyKCkge1xuICAgICAgICBpZiAodGhpcy5hZHZhbmNlZEVuYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c0NvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW1bJ2ZsZXgtZGlyZWN0aW9uJ10sIEZsZXhEaXJlY3Rpb25FbnVtLmNvbHVtbilcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnYWxpZ24taXRlbXMnXSwgQWxpZ25GbGV4SXRlbXNFbnVtLnN0cmV0Y2gpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uYm9yZGVyLCAnMXB4IHNvbGlkICM0Q0FGNTAnKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLnBhZGRpbmcsICczcHgnKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdCb3ggU2hhZG93JylcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuc2hhZG93Qm94VHlwZUNvbnRhaW5lcilcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5hZHZhbmNlZFNoYWRvd0JveENvbnRhaW5lcilcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzQ29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnZmxleC1kaXJlY3Rpb24nXSwgRmxleERpcmVjdGlvbkVudW0uY29sdW1uKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydhbGlnbi1pdGVtcyddLCBBbGlnbkZsZXhJdGVtc0VudW0uc3RyZXRjaClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5ib3JkZXIsICcxcHggc29saWQgIzRDQUY1MCcpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ucGFkZGluZywgJzNweCcpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0JveCBTaGFkb3cnKVxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5zaGFkb3dCb3hUeXBlQ29udGFpbmVyKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmNvbG9ySW5zZXRDb250YWluZXIpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuaG9yaXpvbnRhbE9mZnNldENvbnRhaW5lcilcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy52ZXJ0aWNhbE9mZnNldENvbnRhaW5lcilcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5ibHVyUmFkaXVzQ29udGFpbmVyKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLnNwcmVhZFJhZGl1c0NvbnRhaW5lcilcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBidWlsZEFkdmFuY2VkU2hhZG93Qm94Q29udGFpbmVyKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZUFkdmFuY2VkUHJvcGVydHkgPSB0aGlzLnVwZGF0ZUFkdmFuY2VkUHJvcGVydHkuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmFkdmFuY2VkU2hhZG93Qm94VGV4dEFyZWEgPSBuZXcgVGV4dGFyZWFCdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLnJlc2l6ZSwgJ3ZlcnRpY2FsJylcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMudXBkYXRlQWR2YW5jZWRQcm9wZXJ0eSlcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgdGhpcy5hZHZhbmNlZFNoYWRvd0JveENvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydmbGV4LWRpcmVjdGlvbiddLCBGbGV4RGlyZWN0aW9uRW51bS5jb2x1bW4pXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnYWxpZ24taXRlbXMnXSwgQWxpZ25GbGV4SXRlbXNFbnVtLnN0cmV0Y2gpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0FkdmFuY2VkIEJveCBTaGFkb3cnKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnZmxleC1kaXJlY3Rpb24nXSwgRmxleERpcmVjdGlvbkVudW0uY29sdW1uKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydhbGlnbi1pdGVtcyddLCBBbGlnbkZsZXhJdGVtc0VudW0uc3RyZXRjaClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5hZHZhbmNlZFNoYWRvd0JveFRleHRBcmVhKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgIH1cblxuICAgIHByaXZhdGUgc2V0Qm94U2hhZG93VmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpIHtcbiAgICAgICAgY29uc3QgaW5pdGlhbFZhbHVlcyA9IHRoaXMuZ2V0SW5pdGlhbFZhbHVlcygpO1xuXG4gICAgICAgIGlmIChpbml0aWFsVmFsdWVzLmluc2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zZXRTZWxlY3Rvci5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29sb3JJbnB1dC52YWx1ZSA9IGNvbG9yVG9IZXgoaW5pdGlhbFZhbHVlcy5jb2xvcik7XG4gICAgICAgIHRoaXMuaG9yaXpvbnRhbE9mZnNldElucHV0LnZhbHVlID0gYCR7cGFyc2VJbnQoaW5pdGlhbFZhbHVlcy5ob3Jpem9udGFsT2Zmc2V0KSB8fCAwfWA7XG4gICAgICAgIHRoaXMuaG9yaXpvbnRhbE9mZnNldFVuaXRTZWxlY3Rvci52YWx1ZSA9IGdldFVuaXQoaW5pdGlhbFZhbHVlcy5ob3Jpem9udGFsT2Zmc2V0KTtcbiAgICAgICAgdGhpcy52ZXJ0aWNhbE9mZnNldElucHV0LnZhbHVlID0gYCR7cGFyc2VJbnQoaW5pdGlhbFZhbHVlcy52ZXJ0aWNhbE9mZnNldCkgfHwgMH1gO1xuICAgICAgICB0aGlzLnZlcnRpY2FsT2Zmc2V0VW5pdFNlbGVjdG9yLnZhbHVlID0gZ2V0VW5pdChpbml0aWFsVmFsdWVzLnZlcnRpY2FsT2Zmc2V0KTtcbiAgICAgICAgdGhpcy5ibHVyUmFkaXVzSW5wdXQudmFsdWUgPSBgJHtwYXJzZUludChpbml0aWFsVmFsdWVzLmJsdXJSYWRpdXMpIHx8IDB9YDtcbiAgICAgICAgdGhpcy5ibHVyUmFkaXVzVW5pdFNlbGVjdG9yLnZhbHVlID0gZ2V0VW5pdChpbml0aWFsVmFsdWVzLmJsdXJSYWRpdXMpO1xuICAgICAgICB0aGlzLnNwcmVhZFJhZGl1c0lucHV0LnZhbHVlID0gYCR7cGFyc2VJbnQoaW5pdGlhbFZhbHVlcy5zcHJlYWRSYWRpdXMpIHx8IDB9YDtcbiAgICAgICAgdGhpcy5zcHJlYWRSYWRpdXNVbml0U2VsZWN0b3IudmFsdWUgPSBnZXRVbml0KGluaXRpYWxWYWx1ZXMuc3ByZWFkUmFkaXVzKTtcblxuICAgICAgICB0aGlzLmFkdmFuY2VkU2hhZG93Qm94VGV4dEFyZWEudmFsdWUgPSB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydib3gtc2hhZG93J107XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVCYXNpY1Byb3BlcnR5KCkge1xuICAgICAgICBpZiAodGhpcy5ob3Jpem9udGFsT2Zmc2V0SW5wdXQudmFsdWUgPT09ICcwJ1xuICAgICAgICAgICAgJiYgdGhpcy52ZXJ0aWNhbE9mZnNldElucHV0LnZhbHVlID09PSAnMCdcbiAgICAgICAgICAgICYmIHRoaXMuYmx1clJhZGl1c0lucHV0LnZhbHVlID09PSAnMCdcbiAgICAgICAgICAgICYmIHRoaXMuc3ByZWFkUmFkaXVzSW5wdXQudmFsdWUgPT09ICcwJ1xuICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2JveC1zaGFkb3cnXSA9ICcnO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaW5zZXQgPSB0aGlzLmluc2V0U2VsZWN0b3IuY2hlY2tlZCA/ICdpbnNldCcgOiAnJztcbiAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmNvbG9ySW5wdXQudmFsdWU7XG4gICAgICAgIGNvbnN0IGhvcml6b250YWxPZmZzZXQgPSB0aGlzLmhvcml6b250YWxPZmZzZXRJbnB1dC52YWx1ZSArIHRoaXMuaG9yaXpvbnRhbE9mZnNldFVuaXRTZWxlY3Rvci52YWx1ZTtcbiAgICAgICAgY29uc3QgdmVydGljYWxPZmZzZXQgPSB0aGlzLnZlcnRpY2FsT2Zmc2V0SW5wdXQudmFsdWUgKyB0aGlzLnZlcnRpY2FsT2Zmc2V0VW5pdFNlbGVjdG9yLnZhbHVlO1xuICAgICAgICBjb25zdCBibHVyUmFkaXVzID0gdGhpcy5ibHVyUmFkaXVzSW5wdXQudmFsdWUgKyB0aGlzLmJsdXJSYWRpdXNVbml0U2VsZWN0b3IudmFsdWU7XG4gICAgICAgIGNvbnN0IHNwcmVhZFJhZGl1cyA9IHRoaXMuc3ByZWFkUmFkaXVzSW5wdXQudmFsdWUgKyB0aGlzLnNwcmVhZFJhZGl1c1VuaXRTZWxlY3Rvci52YWx1ZTtcblxuICAgICAgICBjb25zdCBib3hTaGFkb3dWYWx1ZSA9IGAke2hvcml6b250YWxPZmZzZXR9ICR7dmVydGljYWxPZmZzZXR9ICR7Ymx1clJhZGl1c30gJHtzcHJlYWRSYWRpdXN9ICR7Y29sb3J9ICR7aW5zZXR9YFxuXG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2JveC1zaGFkb3cnXSA9IGJveFNoYWRvd1ZhbHVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlQWR2YW5jZWRQcm9wZXJ0eSgpIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYm94LXNoYWRvdyddID0gdGhpcy5hZHZhbmNlZFNoYWRvd0JveFRleHRBcmVhLnZhbHVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlQm94U2hhZG93VHlwZSgpIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYm94LXNoYWRvdyddID0gJyc7XG5cbiAgICAgICAgaWYgKHRoaXMuYWR2YW5jZWRCb3hTaGFkb3dDaGVja2JveC5jaGVja2VkKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNDb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5jb2xvckluc2V0Q29udGFpbmVyKTtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c0NvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLmhvcml6b250YWxPZmZzZXRDb250YWluZXIpO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMudmVydGljYWxPZmZzZXRDb250YWluZXIpO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuYmx1clJhZGl1c0NvbnRhaW5lcik7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNDb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5zcHJlYWRSYWRpdXNDb250YWluZXIpO1xuXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5hZHZhbmNlZFNoYWRvd0JveENvbnRhaW5lcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNDb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5hZHZhbmNlZFNoYWRvd0JveENvbnRhaW5lcik7XG5cbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbG9ySW5zZXRDb250YWluZXIpO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaG9yaXpvbnRhbE9mZnNldENvbnRhaW5lcik7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy52ZXJ0aWNhbE9mZnNldENvbnRhaW5lcik7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5ibHVyUmFkaXVzQ29udGFpbmVyKTtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnNwcmVhZFJhZGl1c0NvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEluaXRpYWxWYWx1ZXMoKSB7XG4gICAgICAgIGxldCBib3hTaGFkb3dTdHJpbmcgPSB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydib3gtc2hhZG93J107XG5cbiAgICAgICAgbGV0IGNvbG9yLCBpbnNldDtcbiAgICAgICAgbGV0IHNpemVzQXJyID0gW107XG5cbiAgICAgICAgaWYgKGJveFNoYWRvd1N0cmluZykge1xuICAgICAgICAgICAgaWYgKGJveFNoYWRvd1N0cmluZy5zcGxpdCgnLCcpLmZpbHRlcigoZWxlKSA9PiBlbGUuaW5jbHVkZXMoJ3JnYicpKS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZHZhbmNlZEVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoYm94U2hhZG93U3RyaW5nLnNwbGl0KCcsJykubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkdmFuY2VkRW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYm94U2hhZG93U3RyaW5nLmluY2x1ZGVzKCdyZ2InKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluaXRpYWxJbmRleE9mUkdCID0gYm94U2hhZG93U3RyaW5nLmluZGV4T2YoJ3JnYicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpbmFsSW5kZXhPZlJHQiA9IGJveFNoYWRvd1N0cmluZy5pbmRleE9mKCcpJylcblxuICAgICAgICAgICAgICAgIGNvbG9yID0gYm94U2hhZG93U3RyaW5nLnNsaWNlKGluaXRpYWxJbmRleE9mUkdCLCBmaW5hbEluZGV4T2ZSR0IgKyAxKVxuXG4gICAgICAgICAgICAgICAgYm94U2hhZG93U3RyaW5nID0gYm94U2hhZG93U3RyaW5nLnJlcGxhY2UoY29sb3IsICcnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgYm94U2hhZG93QXJyID0gYm94U2hhZG93U3RyaW5nLnNwbGl0KCcgJyk7XG5cbiAgICAgICAgICAgIGluc2V0ID0gYm94U2hhZG93QXJyLmZpbmQoKGVsZSkgPT4gZWxlID09PSAnaW5zZXQnKVxuXG4gICAgICAgICAgICBzaXplc0FyciA9IGJveFNoYWRvd0Fyci5maWx0ZXIoKGVsZSkgPT4gIWlzTmFOKHBhcnNlSW50KGVsZSkpKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgaW5zZXQsXG4gICAgICAgICAgICBob3Jpem9udGFsT2Zmc2V0OiBzaXplc0FyclswXSxcbiAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0OiBzaXplc0FyclsxXSxcbiAgICAgICAgICAgIGJsdXJSYWRpdXM6IHNpemVzQXJyWzJdLFxuICAgICAgICAgICAgc3ByZWFkUmFkaXVzOiBzaXplc0FyclszXSxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBjbGFzc05hbWVVcGRhdGVkKG5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0ID0gQ3NzU3R5bGVTaGVldC5nZXRSdWxlU3R5bGVzKG5hbWUpO1xuICAgICAgICB0aGlzLmdldEluaXRpYWxWYWx1ZXMoKTtcbiAgICAgICAgdGhpcy5zZXRCb3hTaGFkb3dWYWx1ZXNBY2NvcmRpbmdUb0NsYXNzKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IEFycmF5U2VsZWN0b3JCb2R5SW50ZXJmYWNlIGZyb20gJy4uL2ludGVyZmFjZXMvc2VsZWN0b3ItZnJvbS1hcnJheS1ib2R5LmludGVyZmFjZSc7XG5cbmltcG9ydCBDbGFzc0NoYW5nZVB1Ymxpc2hlciBmcm9tICcuLi9wdWJsaXNoZXJzL0NsYXNzQ2hhbmdlUHVibGlzaGVyJztcbmltcG9ydCBDc3NTdHlsZVNoZWV0IGZyb20gJy4uLy4uL2Nzcy1zdHlsZXNoZWV0L2Nzcy1zdHlsZXNoZWV0JztcbmltcG9ydCBSYXdIVE1MQ29ucG9uZW50IGZyb20gJy4uLy4uL2h0bWwtY29tcG9uZW50cy9SYXdIVE1MQ29tcG9uZW50JztcblxuaW1wb3J0IENvbnRhaW5lckJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0NvbnRhaW5lckJ1aWxkZXInO1xuaW1wb3J0IExhYmVsQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvTGFiZWxCdWlsZGVyJztcbmltcG9ydCBTZWxlY3RvckZyb21BcnJheUJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL1NlbGVjdG9yRnJvbUFycmF5QnVpbGRlcic7XG5pbXBvcnQgSW5wdXRCdWlsZGVyIGZyb20gJy4uL21vZGVscy9JbnB1dEJ1aWxkZXInO1xuaW1wb3J0IEJ1dHRvbkJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0J1dHRvbkJ1aWxkZXInO1xuaW1wb3J0IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyIGZyb20gJy4uL21vZGVscy9TZWxlY3RvckZyb21FbnVtQnVpbGRlcic7XG5pbXBvcnQgVGV4dGFyZWFCdWlsZGVyIGZyb20gJy4uL21vZGVscy9UZXh0QXJlYUJ1aWxkZXInO1xuXG5pbXBvcnQgeyBTdHlsZU5hbWVFbnVtIH0gZnJvbSAnLi4vZW51bXMvc3R5bGUtbmFtZS5lbnVtJztcbmltcG9ydCB7IERpc3BsYXlUeXBlc0VudW0gfSBmcm9tICcuLi9lbnVtcy9kaXNwbGF5LXR5cGVzLmVudW0nO1xuaW1wb3J0IHsgRmxleERpcmVjdGlvbkVudW0gfSBmcm9tICcuLi9lbnVtcy9mbGV4LWRpcmVjdGlvbi5lbnVtJztcbmltcG9ydCB7IElucHV0VHlwZUVudW0gfSBmcm9tICcuLi9lbnVtcy9pbnB1dC10eXBlLmVudW0nO1xuaW1wb3J0IHsgR2VuZXJhbFBzZXVkb2NsYXNzRW51bSB9IGZyb20gJy4uL2VudW1zL2dlbmVyYWwtcHNldWRvY2xhc3MuZW51bSc7XG5cbi8vIFRPRE86IHZlciBlc3RpbG9zIGVzcGVjaWZpY29zIHBhcmEgbG9zIGFuY29yIGVsZW1lbnRzIChsaW5rcyk6XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuLy8gaHR0cHM6Ly93d3cuYXByZW5kZXJhcHJvZ3JhbWFyLmNvbS9pbmRleC5waHA/b3B0aW9uPWNvbV9jb250ZW50JnZpZXc9YXJ0aWNsZSZpZD03NTI6cHNldWRvY2xhc2VzLWNzcy1saW5rLXZpc2l0ZWQtZm9jdXMtaG92ZXIteS1hY3RpdmUtZXN0aWxvcy15LWVmZWN0b3MtZW4tbGlua3MtcHJvcGllZGFkLW91dGxpbmUtY3UwMTA0N2QmY2F0aWQ9NzUmSXRlbWlkPTIwM1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGFzc01hbmFnZW1lbnRDb21wb25lbnQge1xuICAgIHByaXZhdGUgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcbiAgICBwcml2YXRlIGRvbUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSBjbGFzc05hbWVzOiBBcnJheVNlbGVjdG9yQm9keUludGVyZmFjZVtdO1xuICAgIHByaXZhdGUgYXBwZW5kYWJsZUNsYXNzTmFtZXM6IEFycmF5U2VsZWN0b3JCb2R5SW50ZXJmYWNlW107XG4gICAgcHJpdmF0ZSBjbGFzc2VzU2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIHByaXZhdGUgaW5pdGlhbENsYXNzTmFtZTogc3RyaW5nO1xuXG4gICAgcHJpdmF0ZSBuZXdDbGFzc05hbWVJbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgICBwcml2YXRlIG5ld1BzZXVkb2NsYXNzU2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIHByaXZhdGUgZHVwbGljYWJsZUNsYXNzU2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIHByaXZhdGUgYXBwZW5kQ2xhc3NTZWxlY3RvcjogSFRNTFNlbGVjdEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSByZW5hbWVDbGFzc0lucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSBkdXBsaWNhYmxlQ2xhc3NOYW1lczogQXJyYXlTZWxlY3RvckJvZHlJbnRlcmZhY2VbXTtcbiAgICBwcml2YXRlIG5ld0R1cGxpY2FkZWRDbGFzc05hbWVJbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgICBwcml2YXRlIGR1cGxpY2F0ZVBzZXVkb2NsYXNzU2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSBjbGFzc2VzU2VsZWN0b3JDb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgYXBwZW5kQ2xhc3NDb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSByYXdDbGFzc1RleHRFZGl0b3I6IFRleHRhcmVhQnVpbGRlcjtcblxuICAgIHByaXZhdGUgcHVibGlzaGVyOiBDbGFzc0NoYW5nZVB1Ymxpc2hlcjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBkb21FbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgICAgICAgcHVibGlzaGVyOiBDbGFzc0NoYW5nZVB1Ymxpc2hlclxuICAgICkge1xuICAgICAgICB0aGlzLnB1Ymxpc2hlciA9IHB1Ymxpc2hlcjtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgICAgICAgdGhpcy5pbml0aWFsQ2xhc3NOYW1lID0gdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdFswXTtcbiAgICAgICAgdGhpcy5wb3B1bGF0ZUNsYXNzZXNMaXN0KCk7XG4gICAgICAgIHRoaXMucG9wdWxhdGVBcHBlbmRhYmxlQ2xhc3NMaXN0KCk7XG4gICAgICAgIHRoaXMucG9wdWxhdGVEdXBsaWNhYmxlQ2xhc3NMaXN0KCk7XG5cbiAgICAgICAgdGhpcy5idWlsZFJhd0NsYXNzVGV4dEVkaXRvcigpO1xuICAgICAgICB0aGlzLnBvcHVsYXRlUmF3Q2xhc3NUZXh0RWRpdG9yKHRoaXMuaW5pdGlhbENsYXNzTmFtZSk7XG5cbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnRzKCk7XG4gICAgfVxuXG4gICAgZ2V0IGNvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xuICAgIH1cblxuICAgIHByaXZhdGUgYnVpbGRSYXdDbGFzc1RleHRFZGl0b3IoKSB7XG4gICAgICAgIHRoaXMucmF3Q2xhc3NUZXh0RWRpdG9yID0gbmV3IFRleHRhcmVhQnVpbGRlcigpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwb3B1bGF0ZVJhd0NsYXNzVGV4dEVkaXRvcihjbGFzc05hbWUpIHtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gQ3NzU3R5bGVTaGVldC5nZXRSdWxlcyhjbGFzc05hbWUpLm1hcCgocnVsZSkgPT4gcnVsZS5jc3NUZXh0KS5qb2luKCdcXG4nKTtcblxuICAgICAgICBsZXQgbW9kaWZpZWRWYWx1ZXMgPSAnJztcblxuICAgICAgICBmb3IgKGNvbnN0IGNoYXIgb2YgdmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAoY2hhciA9PT0gJ3snIHx8IGNoYXIgPT09ICc7JyB8fCBjaGFyID09PSAnfScpIHtcbiAgICAgICAgICAgICAgICBtb2RpZmllZFZhbHVlcyArPSBgJHtjaGFyfVxcbiBgO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtb2RpZmllZFZhbHVlcyArPSBjaGFyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yYXdDbGFzc1RleHRFZGl0b3JcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmhlaWdodCwgJzEwMHB4JylcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydmb250LXNpemUnXSwgJzEwcHgnKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW1bJ3Jlc2l6ZSddLCAndmVydGljYWwnKVxuICAgICAgICAgICAgLnNldFZhbHVlKG1vZGlmaWVkVmFsdWVzKVxuICAgIH1cblxuICAgIHByaXZhdGUgcG9wdWxhdGVDbGFzc2VzTGlzdCgpIHtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lcyA9IFtdXG5cbiAgICAgICAgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5mb3JFYWNoKChjbGFzc0VsZW1lbnROYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBydWxlcyA9IENzc1N0eWxlU2hlZXQuZ2V0UnVsZXMoY2xhc3NFbGVtZW50TmFtZSk7XG5cbiAgICAgICAgICAgIHJ1bGVzLmZvckVhY2goKHJ1bGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGVbJ3NlbGVjdG9yVGV4dCddXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgaWYgKHJ1bGVOYW1lWzBdID09PSAnLicgfHwgcnVsZU5hbWVbMF0gPT09ICcjJykge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHJ1bGVOYW1lLnN1YnN0cmluZygxKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHJ1bGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcbiAgICB9XG5cbiAgICBwcml2YXRlIHBvcHVsYXRlRHVwbGljYWJsZUNsYXNzTGlzdCgpIHtcbiAgICAgICAgY29uc3QgZHVwbGljYWJsZUNsYXNzTmFtZXMgPSBbXVxuXG4gICAgICAgIGNvbnN0IHJ1bGVzID0gQ3NzU3R5bGVTaGVldC5nZXRBbGxSdWxlcygpO1xuXG4gICAgICAgIHJ1bGVzLmZvckVhY2goKHJ1bGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZVsnc2VsZWN0b3JUZXh0J11cbiAgICAgICAgICAgIGxldCB2YWx1ZTogc3RyaW5nO1xuICAgICAgICAgICAgaWYgKHJ1bGVOYW1lWzBdID09PSAnLicgfHwgcnVsZU5hbWVbMF0gPT09ICcjJykge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gcnVsZU5hbWUuc3Vic3RyaW5nKDEpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gJ2JvZHknKSB7XG4gICAgICAgICAgICAgICAgZHVwbGljYWJsZUNsYXNzTmFtZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHJ1bGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuZHVwbGljYWJsZUNsYXNzTmFtZXMgPSBkdXBsaWNhYmxlQ2xhc3NOYW1lcztcbiAgICB9XG5cbiAgICBwcml2YXRlIHBvcHVsYXRlQXBwZW5kYWJsZUNsYXNzTGlzdCgpIHtcbiAgICAgICAgY29uc3QgYXBwZW5kYWJsZUNsYXNzTmFtZXMgPSBbXVxuXG4gICAgICAgIGNvbnN0IHJ1bGVzID0gQ3NzU3R5bGVTaGVldC5nZXRBbGxSdWxlcygpO1xuXG4gICAgICAgIHJ1bGVzLmZvckVhY2goKHJ1bGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZVsnc2VsZWN0b3JUZXh0J11cbiAgICAgICAgICAgIGxldCB2YWx1ZTogc3RyaW5nO1xuICAgICAgICAgICAgaWYgKHJ1bGVOYW1lWzBdID09PSAnLicgfHwgcnVsZU5hbWVbMF0gPT09ICcjJykge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gcnVsZU5hbWUuc3Vic3RyaW5nKDEpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gJ2JvZHknICYmICF0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGFwcGVuZGFibGVDbGFzc05hbWVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBydWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmFwcGVuZGFibGVDbGFzc05hbWVzID0gYXBwZW5kYWJsZUNsYXNzTmFtZXM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRDb21wb25lbnRzKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZUNsYXNzTmFtZSA9IHRoaXMudXBkYXRlQ2xhc3NOYW1lLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY3JlYXRlTmV3Q2xhc3NOYW1lID0gdGhpcy5jcmVhdGVOZXdDbGFzc05hbWUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW1vdmVDbGFzcyA9IHRoaXMucmVtb3ZlQ2xhc3MuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VDbGFzc05hbWUgPSB0aGlzLmNoYW5nZUNsYXNzTmFtZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFwcGVuZENsYXNzID0gdGhpcy5hcHBlbmRDbGFzcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmR1cGxpY2F0ZUNsYXNzID0gdGhpcy5kdXBsaWNhdGVDbGFzcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNoYW5nZUZ1bGxDbGFzcyA9IHRoaXMuY2hhbmdlRnVsbENsYXNzLmJpbmQodGhpcyk7XG5cbiAgICAgICAgLy8gQ2xhc3Mgc2VsZWN0b3IgYW5kIHJlbW92ZSBjbGFzc1xuICAgICAgICB0aGlzLmNsYXNzZXNTZWxlY3RvciA9IG5ldyBTZWxlY3RvckZyb21BcnJheUJ1aWxkZXIodGhpcy5jbGFzc05hbWVzKVxuICAgICAgICAgICAgLnNlbGVjdE9wdGlvbih0aGlzLmluaXRpYWxDbGFzc05hbWUpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVDbGFzc05hbWUpXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIGNvbnN0IHJlbW92ZUNsYXNzQnV0dG9uID0gbmV3IEJ1dHRvbkJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldElubmVyVGV4dCgnUmVtb3ZlJylcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucmVtb3ZlQ2xhc3MpXG4gICAgICAgICAgICAuYnVpbGQoKTtcblxuICAgICAgICB0aGlzLmNsYXNzZXNTZWxlY3RvckNvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydmbGV4LWRpcmVjdGlvbiddLCBGbGV4RGlyZWN0aW9uRW51bS5jb2x1bW4pXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5jbGFzc2VzU2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHJlbW92ZUNsYXNzQnV0dG9uKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYnVpbGQoKTtcblxuICAgICAgICAvLyBSZW5hbWUgQ2xhc3NcbiAgICAgICAgdGhpcy5yZW5hbWVDbGFzc0lucHV0ID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLnRleHQpXG4gICAgICAgICAgICAuc2V0UGxhY2Vob2xkZXIoJ05ldyBjbGFzcyBuYW1lJylcbiAgICAgICAgICAgIC5idWlsZCgpO1xuXG4gICAgICAgIGNvbnN0IHJlbmFtZUNsYXNzQnV0dG9uID0gbmV3IEJ1dHRvbkJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldElubmVyVGV4dCgnQ2hhbmdlJylcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2hhbmdlQ2xhc3NOYW1lKVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG5cbiAgICAgICAgY29uc3QgcmVuYW1lQ2xhc3NDb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnZmxleC1kaXJlY3Rpb24nXSwgRmxleERpcmVjdGlvbkVudW0uY29sdW1uKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdDaGFuZ2UgQ2xhc3MgTmFtZScpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydmbGV4LWRpcmVjdGlvbiddLCBGbGV4RGlyZWN0aW9uRW51bS5yb3cpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMucmVuYW1lQ2xhc3NJbnB1dClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQocmVuYW1lQ2xhc3NCdXR0b24pXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBDbGFzc1xuICAgICAgICB0aGlzLm5ld0NsYXNzTmFtZUlucHV0ID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLnRleHQpXG4gICAgICAgICAgICAuc2V0UGxhY2Vob2xkZXIoJ0NsYXNzIG5hbWUnKVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG5cbiAgICAgICAgdGhpcy5uZXdQc2V1ZG9jbGFzc1NlbGVjdG9yID0gbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKEdlbmVyYWxQc2V1ZG9jbGFzc0VudW0pXG4gICAgICAgICAgICAuc2VsZWN0T3B0aW9uKEdlbmVyYWxQc2V1ZG9jbGFzc0VudW0ubm9uZSlcbiAgICAgICAgICAgIC5idWlsZCgpO1xuXG4gICAgICAgIGNvbnN0IGNyZWF0ZUNsYXNzQnV0dG9uID0gbmV3IEJ1dHRvbkJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldElubmVyVGV4dCgnQ3JlYXRlJylcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY3JlYXRlTmV3Q2xhc3NOYW1lKVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG5cbiAgICAgICAgY29uc3QgbmV3Q2xhc3NDb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnZmxleC1kaXJlY3Rpb24nXSwgRmxleERpcmVjdGlvbkVudW0uY29sdW1uKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdDcmVhdGUgTmV3IENsYXNzJylcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5uZXdDbGFzc05hbWVJbnB1dClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5uZXdQc2V1ZG9jbGFzc1NlbGVjdG9yKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChjcmVhdGVDbGFzc0J1dHRvbilcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG5cbiAgICAgICAgLy8gRHVwbGljYXRlIGNsYXNzXG4gICAgICAgIHRoaXMuZHVwbGljYWJsZUNsYXNzU2VsZWN0b3IgPSBuZXcgU2VsZWN0b3JGcm9tQXJyYXlCdWlsZGVyKHRoaXMuZHVwbGljYWJsZUNsYXNzTmFtZXMpXG4gICAgICAgICAgICAuc2VsZWN0T3B0aW9uKHRoaXMuZHVwbGljYWJsZUNsYXNzTmFtZXNbMF0udmFsdWUpXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIHRoaXMubmV3RHVwbGljYWRlZENsYXNzTmFtZUlucHV0ID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLnRleHQpXG4gICAgICAgICAgICAuc2V0UGxhY2Vob2xkZXIoJ0R1cGxpY2F0ZWQgY2xhc3MgbmFtZScpXG4gICAgICAgICAgICAuYnVpbGQoKTtcblxuICAgICAgICBjb25zdCBkdXBsaWNhdGVDbGFzc0J1dHRvbiA9IG5ldyBCdXR0b25CdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0R1cGxpY2F0ZScpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmR1cGxpY2F0ZUNsYXNzKVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICB0aGlzLmR1cGxpY2F0ZVBzZXVkb2NsYXNzU2VsZWN0b3IgPSBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIoR2VuZXJhbFBzZXVkb2NsYXNzRW51bSlcbiAgICAgICAgICAgIC5zZWxlY3RPcHRpb24oR2VuZXJhbFBzZXVkb2NsYXNzRW51bS5ub25lKVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG5cbiAgICAgICAgY29uc3QgZHVwbGljYXRlQ2xhc3NDb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnZmxleC1kaXJlY3Rpb24nXSwgRmxleERpcmVjdGlvbkVudW0uY29sdW1uKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdEdXBsaWNhdGUgQ2xhc3MnKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICAgICAgbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydmbGV4LWRpcmVjdGlvbiddLCBGbGV4RGlyZWN0aW9uRW51bS5yb3cpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmR1cGxpY2FibGVDbGFzc1NlbGVjdG9yKVxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5kdXBsaWNhdGVQc2V1ZG9jbGFzc1NlbGVjdG9yKVxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgICAgIG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnZmxleC1kaXJlY3Rpb24nXSwgRmxleERpcmVjdGlvbkVudW0ucm93KVxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5uZXdEdXBsaWNhZGVkQ2xhc3NOYW1lSW5wdXQpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChkdXBsaWNhdGVDbGFzc0J1dHRvbilcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgLy8gQXBwZW5kIGNsYXNzXG4gICAgICAgIGlmICh0aGlzLmFwcGVuZGFibGVDbGFzc05hbWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuYXBwZW5kQ2xhc3NTZWxlY3RvciA9IG5ldyBTZWxlY3RvckZyb21BcnJheUJ1aWxkZXIodGhpcy5hcHBlbmRhYmxlQ2xhc3NOYW1lcylcbiAgICAgICAgICAgICAgICAuc2VsZWN0T3B0aW9uKHRoaXMuYXBwZW5kYWJsZUNsYXNzTmFtZXNbMF0udmFsdWUpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICAgICAgY29uc3QgYXBwZW5kQ2xhc3NCdXR0b24gPSBuZXcgQnV0dG9uQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnQXBwZW5kJylcbiAgICAgICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmFwcGVuZENsYXNzKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgICAgIHRoaXMuYXBwZW5kQ2xhc3NDb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydmbGV4LWRpcmVjdGlvbiddLCBGbGV4RGlyZWN0aW9uRW51bS5jb2x1bW4pXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0FwcGVuZCBDbGFzcycpXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChcbiAgICAgICAgICAgICAgICAgICAgbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW1bJ2ZsZXgtZGlyZWN0aW9uJ10sIEZsZXhEaXJlY3Rpb25FbnVtLnJvdylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmFwcGVuZENsYXNzU2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQoYXBwZW5kQ2xhc3NCdXR0b24pXG4gICAgICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gRWRpdCBmdWxsIGNsYXNzXG4gICAgICAgIGNvbnN0IHJhd0NsYXNzQ2hhbmdlQnV0dG9uID0gbmV3IEJ1dHRvbkJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldElubmVyVGV4dCgnQ2hhbmdlIFJhdyBDbGFzcycpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNoYW5nZUZ1bGxDbGFzcylcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgY29uc3QgcmF3Q2xhc3NFZGl0b3IgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnZmxleC1kaXJlY3Rpb24nXSwgRmxleERpcmVjdGlvbkVudW0uY29sdW1uKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdSYXcgQ2xhc3MgRWRpdG9yJylcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgICAgIG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnZmxleC1kaXJlY3Rpb24nXSwgRmxleERpcmVjdGlvbkVudW0uY29sdW1uKVxuICAgICAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS53aWR0aCwgJzEwMCUnKVxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW1bJ2ZsZXgtZGlyZWN0aW9uJ10sIEZsZXhEaXJlY3Rpb25FbnVtLmNvbHVtbilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLndpZHRoLCAnMTAwJScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5yYXdDbGFzc1RleHRFZGl0b3IuYnVpbGQoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChyYXdDbGFzc0NoYW5nZUJ1dHRvbilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgLy8gTWFpbiBjb250YWluZXJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5ib3JkZXIsICcxcHggc29saWQgIzRDQUY1MCcpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5wYWRkaW5nLCAnM3B4JylcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnQ2xhc3NlcyBNYW5hZ2VtZW50JylcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuY2xhc3Nlc1NlbGVjdG9yQ29udGFpbmVyKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKHJlbmFtZUNsYXNzQ29udGFpbmVyKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ld0NsYXNzQ29udGFpbmVyKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKGR1cGxpY2F0ZUNsYXNzQ29udGFpbmVyKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkSWZEZWZpbmVkKHRoaXMuYXBwZW5kQ2xhc3NDb250YWluZXIpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQocmF3Q2xhc3NFZGl0b3IpXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlQ2xhc3NOYW1lKCkge1xuICAgICAgICB0aGlzLnBvcHVsYXRlUmF3Q2xhc3NUZXh0RWRpdG9yKHRoaXMuY2xhc3Nlc1NlbGVjdG9yLnZhbHVlKTtcbiAgICAgICAgdGhpcy5wdWJsaXNoZXIubm90aWZ5Q2xhc3NOYW1lKHRoaXMuY2xhc3Nlc1NlbGVjdG9yLnZhbHVlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZU5ld0NsYXNzTmFtZSgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZTogc3RyaW5nID0gdGhpcy5uZXdDbGFzc05hbWVJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHBzZXVkb2NsYXNzID0gdGhpcy5uZXdQc2V1ZG9jbGFzc1NlbGVjdG9yLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgY29tcGxldGVDc3NOYW1lOiBzdHJpbmcgPVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSArIChwc2V1ZG9jbGFzcyAhPT0gJycgJiYgcHNldWRvY2xhc3MgIT09ICdub25lJyA/IGA6JHtwc2V1ZG9jbGFzc31gIDogJycpO1xuXG4gICAgICAgICAgICBpZiAoY2xhc3NOYW1lID09PSAnJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2xhc3MgbmFtZSBjYW4gbm90IGJlIGFuIGVtcHR5IHN0cmluZycpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsYXNzTmFtZVswXSkpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDbGFzcyBuYW1lIG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlcicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBmb3VuZEJhc2VSdWxlID0gQ3NzU3R5bGVTaGVldC5nZXRSdWxlSW5kZXgoY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IGZvdW5kUnVsZVdpdGhQc2V1ZG9jbGFzcyA9IENzc1N0eWxlU2hlZXQuZ2V0UnVsZUluZGV4KGNvbXBsZXRlQ3NzTmFtZSk7XG5cbiAgICAgICAgICAgIGxldCBjbGFzc05hbWVOb3RGb3VuZEZvclRoaXNFbGVtZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuZm9yRWFjaCgoY24pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY24gPT09IGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWVOb3RGb3VuZEZvclRoaXNFbGVtZW50ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgaWYgKGZvdW5kQmFzZVJ1bGUgPj0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChjbGFzc05hbWVOb3RGb3VuZEZvclRoaXNFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2xhc3MgbmFtZSBhbHJlYWR5IGV4aXN0cyBmb3IgYW5vdGhlciBlbGVtZW50Jyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZvdW5kUnVsZVdpdGhQc2V1ZG9jbGFzcyA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NsYXNzIG5hbWUgYWxyZWFkeSBleGlzdHMnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIENzc1N0eWxlU2hlZXQuaW5zZXJ0UnVsZShgLiR7Y29tcGxldGVDc3NOYW1lfSB7fWApO1xuXG4gICAgICAgICAgICBjb25zdCBuZXdPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIG5ld09wdGlvbi50ZXh0ID0gYC4ke2NvbXBsZXRlQ3NzTmFtZX1gO1xuICAgICAgICAgICAgbmV3T3B0aW9uLnZhbHVlID0gY29tcGxldGVDc3NOYW1lO1xuXG4gICAgICAgICAgICB0aGlzLmNsYXNzZXNTZWxlY3Rvci5hcHBlbmRDaGlsZChuZXdPcHRpb24pO1xuXG4gICAgICAgICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgICAgICAgdGhpcy5jbGFzc2VzU2VsZWN0b3IuY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZDogSFRNTE9wdGlvbkVsZW1lbnQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQudmFsdWUgPT09IG5ld09wdGlvbi52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMubmV3Q2xhc3NOYW1lSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgIHRoaXMuY2xhc3Nlc1NlbGVjdG9yLnNlbGVjdGVkSW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2xhc3NOYW1lKCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBhbGVydChlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgcmVtb3ZlQ2xhc3MoKSB7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGAke3RoaXMuY2xhc3Nlc1NlbGVjdG9yLnZhbHVlfWApO1xuICAgICAgICBDc3NTdHlsZVNoZWV0LnJlbW92ZVJ1bGUoYCR7dGhpcy5jbGFzc2VzU2VsZWN0b3IudmFsdWV9YCk7XG4gICAgICAgIHRoaXMuY2xhc3Nlc1NlbGVjdG9yLm9wdGlvbnMucmVtb3ZlKHRoaXMuY2xhc3Nlc1NlbGVjdG9yLnNlbGVjdGVkSW5kZXgpO1xuXG4gICAgICAgIGlmICh0aGlzLmNsYXNzZXNTZWxlY3Rvci5vcHRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5jbGFzc2VzU2VsZWN0b3JDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgY2hhbmdlQ2xhc3NOYW1lKCkge1xuICAgICAgICBSYXdIVE1MQ29ucG9uZW50Lmluc3RhbmNlcy5mb3JFYWNoKChpbnN0YW5jZSkgPT4ge1xuICAgICAgICAgICAgaW5zdGFuY2UuY2xhc3NMaXN0LnJlcGxhY2UodGhpcy5jbGFzc2VzU2VsZWN0b3IudmFsdWUsIHRoaXMucmVuYW1lQ2xhc3NJbnB1dC52YWx1ZSk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgQ3NzU3R5bGVTaGVldC5jaGFuZ2VSdWxlTmFtZSh0aGlzLmNsYXNzZXNTZWxlY3Rvci52YWx1ZSwgdGhpcy5yZW5hbWVDbGFzc0lucHV0LnZhbHVlKTtcbiAgICAgICAgdGhpcy5wb3B1bGF0ZUNsYXNzZXNMaXN0KCk7XG4gICAgICAgIHRoaXMuY2xhc3Nlc1NlbGVjdG9yLnJlbW92ZSh0aGlzLmNsYXNzZXNTZWxlY3Rvci5zZWxlY3RlZEluZGV4KTtcblxuICAgICAgICB0aGlzLmFwcGVuZE5ld09wdGlvbkVsZW1lbnQodGhpcy5yZW5hbWVDbGFzc0lucHV0LnZhbHVlLCB0aGlzLmNsYXNzZXNTZWxlY3Rvcik7XG5cbiAgICAgICAgdGhpcy5yZW5hbWVDbGFzc0lucHV0LnZhbHVlID0gJyc7XG5cbiAgICAgICAgdGhpcy5wb3B1bGF0ZVJhd0NsYXNzVGV4dEVkaXRvcih0aGlzLmNsYXNzZXNTZWxlY3Rvci52YWx1ZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhcHBlbmRDbGFzcygpIHtcblxuICAgICAgICAvLyBUT0RPOiBzZSBtdWVzdHJhIGxhIGNsYXNlIC5pbnB1dDA6aG92ZXIgcGFyYSBlbCBpbnB1dDAsIHkgbm8gZGViZXJpYS4uLi5cbiAgICAgICAgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5hcHBlbmRDbGFzc1NlbGVjdG9yLnZhbHVlKTtcblxuICAgICAgICB0aGlzLmFwcGVuZE5ld09wdGlvbkVsZW1lbnQodGhpcy5hcHBlbmRDbGFzc1NlbGVjdG9yLnZhbHVlLCB0aGlzLmNsYXNzZXNTZWxlY3Rvcik7XG5cbiAgICAgICAgdGhpcy5hcHBlbmRDbGFzc1NlbGVjdG9yLm9wdGlvbnMucmVtb3ZlKHRoaXMuYXBwZW5kQ2xhc3NTZWxlY3Rvci5zZWxlY3RlZEluZGV4KTtcblxuICAgICAgICBpZiAodGhpcy5hcHBlbmRDbGFzc1NlbGVjdG9yLm9wdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmFwcGVuZENsYXNzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBvcHVsYXRlUmF3Q2xhc3NUZXh0RWRpdG9yKHRoaXMuY2xhc3Nlc1NlbGVjdG9yLnZhbHVlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFwcGVuZE5ld09wdGlvbkVsZW1lbnQob3B0aW9uVmFsdWU6IHN0cmluZywgc2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24udmFsdWUgPSBvcHRpb25WYWx1ZTtcbiAgICAgICAgb3B0aW9uLnRleHQgPSBgLiR7b3B0aW9uVmFsdWV9YDtcblxuICAgICAgICBzZWxlY3Rvci5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICBzZWxlY3Rvci5zZWxlY3RlZEluZGV4ID0gc2VsZWN0b3Iub3B0aW9ucy5sZW5ndGggLSAxO1xuICAgIH1cblxuICAgIHByaXZhdGUgZHVwbGljYXRlQ2xhc3MoKSB7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMubmV3RHVwbGljYWRlZENsYXNzTmFtZUlucHV0LnZhbHVlKTtcblxuICAgICAgICBsZXQgbmV3Q2xhc3NOYW1lO1xuICAgICAgICBpZiAodGhpcy5kdXBsaWNhdGVQc2V1ZG9jbGFzc1NlbGVjdG9yLnZhbHVlICE9PSAnbm9uZScpIHtcbiAgICAgICAgICAgIG5ld0NsYXNzTmFtZSA9IGAke3RoaXMubmV3RHVwbGljYWRlZENsYXNzTmFtZUlucHV0LnZhbHVlfToke3RoaXMuZHVwbGljYXRlUHNldWRvY2xhc3NTZWxlY3Rvci52YWx1ZX1gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3Q2xhc3NOYW1lID0gYCR7dGhpcy5uZXdEdXBsaWNhZGVkQ2xhc3NOYW1lSW5wdXQudmFsdWV9YDtcbiAgICAgICAgfVxuXG4gICAgICAgIENzc1N0eWxlU2hlZXQuZHVwbGljYXRlUnVsZSh0aGlzLmR1cGxpY2FibGVDbGFzc1NlbGVjdG9yLnZhbHVlLCBuZXdDbGFzc05hbWUpO1xuXG4gICAgICAgIHRoaXMuYXBwZW5kTmV3T3B0aW9uRWxlbWVudChuZXdDbGFzc05hbWUsIHRoaXMuY2xhc3Nlc1NlbGVjdG9yKTtcbiAgICAgICAgdGhpcy5hcHBlbmROZXdPcHRpb25FbGVtZW50KG5ld0NsYXNzTmFtZSwgdGhpcy5kdXBsaWNhYmxlQ2xhc3NTZWxlY3Rvcik7XG5cbiAgICAgICAgdGhpcy5uZXdEdXBsaWNhZGVkQ2xhc3NOYW1lSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgdGhpcy5kdXBsaWNhdGVQc2V1ZG9jbGFzc1NlbGVjdG9yLnZhbHVlID0gR2VuZXJhbFBzZXVkb2NsYXNzRW51bS5ub25lO1xuXG4gICAgICAgIHRoaXMucG9wdWxhdGVSYXdDbGFzc1RleHRFZGl0b3IodGhpcy5jbGFzc2VzU2VsZWN0b3IudmFsdWUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2hhbmdlRnVsbENsYXNzKCkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuICAgICAgICAvLyBUT0RPOiBsb3MgdmFsb3JlcyBkZSBsYSB2ZW50YW5hIG5vIHNlIHZhbiBhY3R1YWxpemFuZG8gYSBtZWRpZGEgcXVlIHNlIGFncmVnYW4gY29zYXMgYSBlc2EgY2xhc2UsIHF1aXphcyBuZWNlc2l0YW1vcyB1biBvYnNlcnZlciwgcXVlIHNlcmlhIHVuIHZlcmRhZGVybyBxdWlsb21iYXNzc3Nvb29vb28uLi5cblxuICAgICAgICBjb25zdCBpbnB1dCA9IHRoaXMucmF3Q2xhc3NUZXh0RWRpdG9yLmdldFZhbHVlKCk7XG4gICAgICAgIGNvbnN0IHJlZ2V4ID0gL1xcLihbXFxzXFxTXSo/KVxccypcXHsoW1xcc1xcU10qPylcXH0vZztcblxuICAgICAgICBjb25zdCByZXN1bHQ6IHsgbmFtZTogc3RyaW5nLCB2YWx1ZXM6IHN0cmluZ1tdLCByYXc6IHN0cmluZyB9W10gPSBbXTtcblxuICAgICAgICBsZXQgbWF0Y2g7XG4gICAgICAgIHdoaWxlICgobWF0Y2ggPSByZWdleC5leGVjKGlucHV0KSkpIHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBtYXRjaFsxXS50cmltKCk7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IG1hdGNoWzJdLnRyaW0oKTtcblxuICAgICAgICAgICAgY29uc3QgdmFsdWVzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgICAgICAgICB2YWx1ZS5zcGxpdCgnOycpLmZvckVhY2goKHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRyaW1lZFZhbHVlID0gdmFsLnRyaW0oKTtcblxuICAgICAgICAgICAgICAgIGlmKHRyaW1lZFZhbHVlICE9PSAnJyl7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlcy5wdXNoKHRyaW1lZFZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICByZXN1bHQucHVzaCh7IG5hbWUsIHZhbHVlcywgcmF3OiBtYXRjaFswXX0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0LmZvckVhY2goKHJ1bGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVTdHlsZXMgPSBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXMocnVsZS5uYW1lKTtcblxuICAgICAgICAgICAgaWYoT2JqZWN0LmtleXMocnVsZVN0eWxlcykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHJ1bGUudmFsdWVzLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleVZhbHVlcyA9IHZhbHVlLnNwbGl0KCc6JykubWFwKCh2YWwpID0+IHZhbC5yZXBsYWNlKCc7JywnJykudHJpbSgpKVxuICAgICAgICAgICAgICAgICAgICBydWxlU3R5bGVzW2tleVZhbHVlc1swXV0gPSBrZXlWYWx1ZXNbMV07XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgQ3NzU3R5bGVTaGVldC5pbnNlcnRSdWxlKHJ1bGUucmF3KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQocnVsZS5uYW1lKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgbmV3T3B0aW9uLnRleHQgPSBgLiR7cnVsZS5uYW1lfWA7XG4gICAgICAgICAgICAgICAgICAgIG5ld09wdGlvbi52YWx1ZSA9IHJ1bGUubmFtZTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsYXNzZXNTZWxlY3Rvci5hcHBlbmRDaGlsZChuZXdPcHRpb24pO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xhc3Nlc1NlbGVjdG9yLmNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGQ6IEhUTUxPcHRpb25FbGVtZW50LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGQudmFsdWUgPT09IG5ld09wdGlvbi52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGFzc2VzU2VsZWN0b3Iuc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNsYXNzTmFtZSgpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IENsYXNzQ2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2UgZnJvbSAnLi4vaW50ZXJmYWNlcy9jbGFzcy1jaGFuZ2Utb2JzZXJ2ZXIuaW50ZXJmYWNlJztcblxuaW1wb3J0IENzc1N0eWxlU2hlZXQgZnJvbSAnLi4vLi4vY3NzLXN0eWxlc2hlZXQvY3NzLXN0eWxlc2hlZXQnO1xuXG5pbXBvcnQgQ29udGFpbmVyQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvQ29udGFpbmVyQnVpbGRlcic7XG5pbXBvcnQgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL1NlbGVjdG9yRnJvbUVudW1CdWlsZGVyJztcbmltcG9ydCBJbnB1dEJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0lucHV0QnVpbGRlcic7XG5pbXBvcnQgTGFiZWxCdWlsZGVyIGZyb20gJy4uL21vZGVscy9MYWJlbEJ1aWxkZXInO1xuXG5pbXBvcnQgR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudCBmcm9tICcuL2dlbmVyaWMtY3NzLXByb3BlcnR5LW11dGF0b3IuY29tcG9uZW50JztcblxuaW1wb3J0IHsgRGlzcGxheVR5cGVzRW51bSB9IGZyb20gJy4uL2VudW1zL2Rpc3BsYXktdHlwZXMuZW51bSc7XG5pbXBvcnQgeyBTdHlsZU5hbWVFbnVtIH0gZnJvbSAnLi4vZW51bXMvc3R5bGUtbmFtZS5lbnVtJztcbmltcG9ydCB7IEFsaWduRmxleFNlbGZFbnVtIH0gZnJvbSAnLi4vZW51bXMvYWxpZ24tZmxleC1zZWxmLmVudW0nO1xuaW1wb3J0IHsgSW5wdXRUeXBlRW51bSB9IGZyb20gJy4uL2VudW1zL2lucHV0LXR5cGUuZW51bSc7XG5pbXBvcnQgeyBFdmVudFR5cGVFbnVtIH0gZnJvbSAnLi4vZW51bXMvZXZlbnQtdHlwZS5lbnVtJztcbmltcG9ydCB7IEp1c3RpZnlHcmlkU2VsZkVudW0gfSBmcm9tICcuLi9lbnVtcy9qdXN0aWZ5LWdyaWQtc2VsZi5lbnVtJztcbmltcG9ydCB7IEFsaWduR3JpZFNlbGZFbnVtIH0gZnJvbSAnLi4vZW51bXMvYWxpZ24tZ3JpZC1zZWxmLmVudW0nO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3BsYXlBc0NoaWxkQ29tcG9uZW50IGltcGxlbWVudHMgQ2xhc3NDaGFuZ2VPYnNlcnZlckludGVyZmFjZSB7XG4gICAgcHJpdmF0ZSBkb21FbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBkb21FbGVtZW50U3R5bGVTaGVldDogQ1NTU3R5bGVEZWNsYXJhdGlvbjtcblxuICAgIHByaXZhdGUgZmxleENvbnRhaW5lckFzQ2hpbGRyZW46IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgYWxpZ25TZWxmU2VsZWN0b3I6IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBmbGV4R3Jvd0lucHV0OiBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50O1xuICAgIHByaXZhdGUgZmxleFNocmlua0lucHV0OiBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50O1xuICAgIHByaXZhdGUgZmxleEJhc2lzSW5wdXQ6IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQ7XG5cbiAgICBwcml2YXRlIGdyaWRDb250YWluZXJBc0NoaWxkcmVuOiBIVE1MRGl2RWxlbWVudDtcbiAgICBwcml2YXRlIGdyaWRDb2x1bW5TdGFydElucHV0OiBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50O1xuICAgIHByaXZhdGUgZ3JpZENvbHVtbkVuZElucHV0OiBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50O1xuICAgIHByaXZhdGUgZ3JpZFJvd1N0YXJ0SW5wdXQ6IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBncmlkUm93RW5kSW5wdXQ6IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBncmlkSnVzdGlmeVNlbGY6IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBncmlkQWxpZ25TZWxmOiBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50O1xuXG4gICAgY29uc3RydWN0b3IoZG9tRWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCA9IENzc1N0eWxlU2hlZXQuZ2V0UnVsZVN0eWxlcyh0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0WzBdKTtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKCkuYnVpbGQoKTtcblxuICAgICAgICB0aGlzLmZsZXhDb250YWluZXJBc0NoaWxkcmVuID0gdGhpcy5jcmVhdGVGbGV4QXNDaGlsZHJlbkNvbnRhaW5lcigpO1xuICAgICAgICB0aGlzLmdyaWRDb250YWluZXJBc0NoaWxkcmVuID0gdGhpcy5jcmVhdGVHcmlkQXNDaGlsZHJlbkNvbnRhaW5lcigpO1xuICAgICAgICB0aGlzLnNldENvbXBvbmVudEFjY29yZGluZ1RvU2VsZWN0b3IoKTtcbiAgICB9XG5cbiAgICBnZXQgY29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRDb21wb25lbnRBY2NvcmRpbmdUb1NlbGVjdG9yKCkge1xuICAgICAgICBpZiAodGhpcy5kb21FbGVtZW50LmlkICE9PSAnYXBwLWNvbnRhaW5lcicpIHtcbiAgICAgICAgICAgIC8vIE5PVEU6IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvbUVsZW1lbnQpIHJldHVybiB0aGUgYWN0aXZlIHN0eWxlIG9mIHRoYXQgZG9tIGVsZW1lbnQuXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50UHJvcGVydGllcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50KVsnZGlzcGxheSddXG5cbiAgICAgICAgICAgIGlmIChjdXJyZW50UHJvcGVydGllcyA9PT0gRGlzcGxheVR5cGVzRW51bS5mbGV4IHx8IGN1cnJlbnRQcm9wZXJ0aWVzID09PSBEaXNwbGF5VHlwZXNFbnVtWydpbmxpbmUtZmxleCddKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldEdyaWQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUZsZXhDb21wb25lbnRzU3R5bGVTaGVldCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RmxleEFzQ2hpbGRyZW5Jbml0aWFsVmFsdWVzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5mbGV4Q29udGFpbmVyQXNDaGlsZHJlbik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9wZXJ0aWVzID09PSBEaXNwbGF5VHlwZXNFbnVtLmdyaWRcbiAgICAgICAgICAgICAgICB8fCBjdXJyZW50UHJvcGVydGllcyA9PT0gRGlzcGxheVR5cGVzRW51bVsnaW5saW5lLWdyaWQnXVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldEZsZXgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUdyaWRDb21wb25lbnRzU3R5bGVTaGVldCgpO1xuICAgICAgICAgICAgdGhpcy5zZXRHcmlkQXNDaGlsZHJlbkluaXRpYWxWYWx1ZXMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmdyaWRDb250YWluZXJBc0NoaWxkcmVuKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldEZsZXgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0R3JpZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVGbGV4QXNDaGlsZHJlbkNvbnRhaW5lcigpIHtcbiAgICAgICAgdGhpcy5hbGlnblNlbGZTZWxlY3RvciA9IG5ldyBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50KFxuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCxcbiAgICAgICAgICAgICdhbGlnbi1zZWxmJyxcbiAgICAgICAgICAgICdBbGlnbiBTZWxmJyxcbiAgICAgICAgICAgIG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihBbGlnbkZsZXhTZWxmRW51bSlcbiAgICAgICAgICAgICAgICAuYnVpbGQoKSxcbiAgICAgICAgICAgIEV2ZW50VHlwZUVudW0uY2hhbmdlXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5mbGV4R3Jvd0lucHV0ID0gbmV3IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQoXG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0LFxuICAgICAgICAgICAgJ2ZsZXgtZ3JvdycsXG4gICAgICAgICAgICAnRmxleCBHcm93JyxcbiAgICAgICAgICAgIG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS5udW1iZXIpXG4gICAgICAgICAgICAgICAgLnNldE1heCgxMDAwKVxuICAgICAgICAgICAgICAgIC5zZXRNaW4oMClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKSxcbiAgICAgICAgICAgIEV2ZW50VHlwZUVudW0uaW5wdXRcbiAgICAgICAgKS5zZXRaZXJvVmFsdWUoMClcblxuICAgICAgICB0aGlzLmZsZXhTaHJpbmtJbnB1dCA9IG5ldyBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50KFxuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCxcbiAgICAgICAgICAgICdmbGV4LXNocmluaycsXG4gICAgICAgICAgICAnRmxleCBTaHJpbmsnLFxuICAgICAgICAgICAgbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLm51bWJlcilcbiAgICAgICAgICAgICAgICAuc2V0TWF4KDEwMDApXG4gICAgICAgICAgICAgICAgLnNldE1pbigwKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpLFxuICAgICAgICAgICAgRXZlbnRUeXBlRW51bS5pbnB1dFxuICAgICAgICApLnNldFplcm9WYWx1ZSgwKVxuXG5cbiAgICAgICAgdGhpcy5mbGV4QmFzaXNJbnB1dCA9IG5ldyBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50KFxuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCxcbiAgICAgICAgICAgICdmbGV4LWJhc2lzJyxcbiAgICAgICAgICAgICdGbGV4IEJhc2lzKCUpJyxcbiAgICAgICAgICAgIG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS5udW1iZXIpXG4gICAgICAgICAgICAgICAgLnNldE1heCgxMDAwKVxuICAgICAgICAgICAgICAgIC5zZXRNaW4oMClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKSxcbiAgICAgICAgICAgIEV2ZW50VHlwZUVudW0uaW5wdXQsXG4gICAgICAgICAgICAnJSdcbiAgICAgICAgKS5zZXRaZXJvVmFsdWUoMClcblxuICAgICAgICByZXR1cm4gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5ib3JkZXIsICcxcHggc29saWQgIzRDQUY1MCcpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ucGFkZGluZywgJzNweCcpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0Rpc3BsYXkgRmxleCBhcyBDaGlsZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmFsaWduU2VsZlNlbGVjdG9yLmNvbXBvbmVudClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5mbGV4R3Jvd0lucHV0LmNvbXBvbmVudClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5mbGV4U2hyaW5rSW5wdXQuY29tcG9uZW50KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmZsZXhCYXNpc0lucHV0LmNvbXBvbmVudClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEZsZXhBc0NoaWxkcmVuSW5pdGlhbFZhbHVlcygpIHtcbiAgICAgICAgdGhpcy5hbGlnblNlbGZTZWxlY3Rvci5zZXRWYWx1ZSh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydhbGlnbi1zZWxmJ10gfHwgJycpO1xuICAgICAgICB0aGlzLmZsZXhHcm93SW5wdXQuc2V0VmFsdWUoYCR7cGFyc2VJbnQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZmxleC1ncm93J10pIHx8IDB9YCk7XG4gICAgICAgIHRoaXMuZmxleFNocmlua0lucHV0LnNldFZhbHVlKGAke3BhcnNlSW50KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2ZsZXgtc2hyaW5rJ10pIHx8IDB9YCk7XG4gICAgICAgIHRoaXMuZmxleEJhc2lzSW5wdXQuc2V0VmFsdWUoYCR7cGFyc2VJbnQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZmxleC1iYXNpcyddKSB8fCAwfWApO1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlR3JpZEFzQ2hpbGRyZW5Db250YWluZXIoKSB7XG4gICAgICAgIHRoaXMuZ3JpZENvbHVtblN0YXJ0SW5wdXQgPSBuZXcgR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudChcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQsXG4gICAgICAgICAgICAnZ3JpZC1jb2x1bW4tc3RhcnQnLFxuICAgICAgICAgICAgJ0dyaWQgQ29sdW1uIFN0YXJ0JyxcbiAgICAgICAgICAgIG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS50ZXh0KS5idWlsZCgpLFxuICAgICAgICAgICAgRXZlbnRUeXBlRW51bS5pbnB1dFxuICAgICAgICApXG5cbiAgICAgICAgdGhpcy5ncmlkQ29sdW1uRW5kSW5wdXQgPSBuZXcgR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudChcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQsXG4gICAgICAgICAgICAnZ3JpZC1jb2x1bW4tZW5kJyxcbiAgICAgICAgICAgICdHcmlkIENvbHVtbiBFbmQnLFxuICAgICAgICAgICAgbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLnRleHQpLmJ1aWxkKCksXG4gICAgICAgICAgICBFdmVudFR5cGVFbnVtLmlucHV0XG4gICAgICAgIClcblxuICAgICAgICB0aGlzLmdyaWRSb3dTdGFydElucHV0ID0gbmV3IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQoXG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0LFxuICAgICAgICAgICAgJ2dyaWQtcm93LXN0YXJ0JyxcbiAgICAgICAgICAgICdHcmlkIFJvdyBTdGFydCcsXG4gICAgICAgICAgICBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0udGV4dCkuYnVpbGQoKSxcbiAgICAgICAgICAgIEV2ZW50VHlwZUVudW0uaW5wdXRcbiAgICAgICAgKVxuXG4gICAgICAgIHRoaXMuZ3JpZFJvd0VuZElucHV0ID0gbmV3IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQoXG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0LFxuICAgICAgICAgICAgJ2dyaWQtcm93LWVuZCcsXG4gICAgICAgICAgICAnR3JpZCBSb3cgRW5kJyxcbiAgICAgICAgICAgIG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS50ZXh0KS5idWlsZCgpLFxuICAgICAgICAgICAgRXZlbnRUeXBlRW51bS5pbnB1dFxuICAgICAgICApXG5cbiAgICAgICAgdGhpcy5ncmlkSnVzdGlmeVNlbGYgPSBuZXcgR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudChcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQsXG4gICAgICAgICAgICAnanVzdGlmeS1zZWxmJyxcbiAgICAgICAgICAgICdHcmlkIEp1c3RpZnkgU2VsZicsXG4gICAgICAgICAgICBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIoSnVzdGlmeUdyaWRTZWxmRW51bSkuYnVpbGQoKSxcbiAgICAgICAgICAgIEV2ZW50VHlwZUVudW0uY2hhbmdlXG4gICAgICAgIClcblxuICAgICAgICB0aGlzLmdyaWRBbGlnblNlbGYgPSBuZXcgR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudChcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQsXG4gICAgICAgICAgICAnYWxpZ24tc2VsZicsXG4gICAgICAgICAgICAnR3JpZCBBbGlnbiBTZWxmJyxcbiAgICAgICAgICAgIG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihBbGlnbkdyaWRTZWxmRW51bSkuYnVpbGQoKSxcbiAgICAgICAgICAgIEV2ZW50VHlwZUVudW0uY2hhbmdlXG4gICAgICAgIClcblxuICAgICAgICByZXR1cm4gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5ib3JkZXIsICcxcHggc29saWQgIzRDQUY1MCcpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ucGFkZGluZywgJzNweCcpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0Rpc3BsYXkgR3JpZCBhcyBDaGlsZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmdyaWRDb2x1bW5TdGFydElucHV0LmNvbXBvbmVudClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5ncmlkQ29sdW1uRW5kSW5wdXQuY29tcG9uZW50KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmdyaWRSb3dTdGFydElucHV0LmNvbXBvbmVudClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5ncmlkUm93RW5kSW5wdXQuY29tcG9uZW50KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmdyaWRKdXN0aWZ5U2VsZi5jb21wb25lbnQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuZ3JpZEFsaWduU2VsZi5jb21wb25lbnQpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRHcmlkQXNDaGlsZHJlbkluaXRpYWxWYWx1ZXMoKSB7XG4gICAgICAgIHRoaXMuZ3JpZENvbHVtblN0YXJ0SW5wdXQuc2V0VmFsdWUodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZ3JpZC1jb2x1bW4tc3RhcnQnXSB8fCAnJyk7XG4gICAgICAgIHRoaXMuZ3JpZENvbHVtbkVuZElucHV0LnNldFZhbHVlKHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2dyaWQtY29sdW1uLWVuZCddIHx8ICcnKTtcbiAgICAgICAgdGhpcy5ncmlkUm93U3RhcnRJbnB1dC5zZXRWYWx1ZSh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydncmlkLXJvdy1zdGFydCddIHx8ICcnKTtcbiAgICAgICAgdGhpcy5ncmlkUm93RW5kSW5wdXQuc2V0VmFsdWUodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZ3JpZC1yb3ctZW5kJ10gfHwgJycpO1xuICAgICAgICB0aGlzLmdyaWRKdXN0aWZ5U2VsZi5zZXRWYWx1ZSh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydqdXN0aWZ5LXNlbGYnXSB8fCAnJyk7XG4gICAgICAgIHRoaXMuZ3JpZEFsaWduU2VsZi5zZXRWYWx1ZSh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydhbGlnbi1zZWxmJ10gfHwgJycpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVzZXRGbGV4KCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5mbGV4Q29udGFpbmVyQXNDaGlsZHJlbik7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXNldEdyaWQoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLmdyaWRDb250YWluZXJBc0NoaWxkcmVuKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgY2xhc3NOYW1lVXBkYXRlZChuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCA9IENzc1N0eWxlU2hlZXQuZ2V0UnVsZVN0eWxlcyhuYW1lKTtcbiAgICAgICAgdGhpcy5zZXRDb21wb25lbnRBY2NvcmRpbmdUb1NlbGVjdG9yKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVGbGV4Q29tcG9uZW50c1N0eWxlU2hlZXQoKSB7XG4gICAgICAgIHRoaXMuYWxpZ25TZWxmU2VsZWN0b3IudXBkYXRlU3R5bGVTaGVldCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0KTtcbiAgICAgICAgdGhpcy5mbGV4R3Jvd0lucHV0LnVwZGF0ZVN0eWxlU2hlZXQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCk7XG4gICAgICAgIHRoaXMuZmxleFNocmlua0lucHV0LnVwZGF0ZVN0eWxlU2hlZXQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCk7XG4gICAgICAgIHRoaXMuZmxleEJhc2lzSW5wdXQudXBkYXRlU3R5bGVTaGVldCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUdyaWRDb21wb25lbnRzU3R5bGVTaGVldCgpIHtcbiAgICAgICAgdGhpcy5ncmlkQ29sdW1uU3RhcnRJbnB1dC51cGRhdGVTdHlsZVNoZWV0KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQpO1xuICAgICAgICB0aGlzLmdyaWRDb2x1bW5FbmRJbnB1dC51cGRhdGVTdHlsZVNoZWV0KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQpO1xuICAgICAgICB0aGlzLmdyaWRSb3dTdGFydElucHV0LnVwZGF0ZVN0eWxlU2hlZXQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCk7XG4gICAgICAgIHRoaXMuZ3JpZFJvd0VuZElucHV0LnVwZGF0ZVN0eWxlU2hlZXQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCk7XG4gICAgICAgIHRoaXMuZ3JpZEp1c3RpZnlTZWxmLnVwZGF0ZVN0eWxlU2hlZXQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCk7XG4gICAgICAgIHRoaXMuZ3JpZEFsaWduU2VsZi51cGRhdGVTdHlsZVNoZWV0KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQpO1xuICAgIH1cbn1cbiIsImltcG9ydCBDbGFzc0NoYW5nZU9ic2VydmVySW50ZXJmYWNlIGZyb20gJy4uL2ludGVyZmFjZXMvY2xhc3MtY2hhbmdlLW9ic2VydmVyLmludGVyZmFjZSc7XG5cbmltcG9ydCBDc3NTdHlsZVNoZWV0IGZyb20gJy4uLy4uL2Nzcy1zdHlsZXNoZWV0L2Nzcy1zdHlsZXNoZWV0JztcblxuaW1wb3J0IENvbnRhaW5lckJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0NvbnRhaW5lckJ1aWxkZXInO1xuaW1wb3J0IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyIGZyb20gJy4uL21vZGVscy9TZWxlY3RvckZyb21FbnVtQnVpbGRlcic7XG5pbXBvcnQgTGFiZWxCdWlsZGVyIGZyb20gJy4uL21vZGVscy9MYWJlbEJ1aWxkZXInO1xuaW1wb3J0IElucHV0QnVpbGRlciBmcm9tICcuLi9tb2RlbHMvSW5wdXRCdWlsZGVyJztcbmltcG9ydCBUZXh0YXJlYUJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL1RleHRBcmVhQnVpbGRlcic7XG5cbmltcG9ydCBJbnB1dEFuZFVuaXRzU2VsZWN0b3JDb21wb25lbnQgZnJvbSAnLi9pbnB1dC13aXRoLXVuaXRzLXNlbGVjdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudCBmcm9tICcuL2dlbmVyaWMtY3NzLXByb3BlcnR5LW11dGF0b3IuY29tcG9uZW50JztcblxuaW1wb3J0IHsgRGlzcGxheVR5cGVzRW51bSB9IGZyb20gJy4uL2VudW1zL2Rpc3BsYXktdHlwZXMuZW51bSc7XG5pbXBvcnQgeyBGbGV4RGlyZWN0aW9uRW51bSB9IGZyb20gJy4uL2VudW1zL2ZsZXgtZGlyZWN0aW9uLmVudW0nO1xuaW1wb3J0IHsgU3R5bGVOYW1lRW51bSB9IGZyb20gJy4uL2VudW1zL3N0eWxlLW5hbWUuZW51bSc7XG5pbXBvcnQgeyBGbGV4V3JhcEVudW0gfSBmcm9tICcuLi9lbnVtcy9mbGV4LXdyYXAuZW51bSc7XG5pbXBvcnQgeyBBbGlnbkZsZXhJdGVtc0VudW0gfSBmcm9tICcuLi9lbnVtcy9hbGlnbi1mbGV4LWl0ZW1zLmVudW0nO1xuaW1wb3J0IHsgSnVzdGlmeUZsZXhDb250ZW50RW51bSB9IGZyb20gJy4uL2VudW1zL2p1c3RpZnktZmxleC1jb250ZW50LmVudW0nO1xuaW1wb3J0IHsgQWxpZ25GbGV4Q29udGVudEVudW0gfSBmcm9tICcuLi9lbnVtcy9hbGlnbi1mbGV4LWNvbnRlbnQuZW51bSc7XG5pbXBvcnQgeyBJbnB1dFR5cGVFbnVtIH0gZnJvbSAnLi4vZW51bXMvaW5wdXQtdHlwZS5lbnVtJztcbmltcG9ydCB7IEV2ZW50VHlwZUVudW0gfSBmcm9tICcuLi9lbnVtcy9ldmVudC10eXBlLmVudW0nO1xuaW1wb3J0IHsgSnVzdGlmeUdyaWRJdGVtc0VudW0gfSBmcm9tICcuLi9lbnVtcy9qdXN0aWZ5LWdyaWQtaXRlbXMuZW51bSc7XG5pbXBvcnQgeyBBbGlnbkdyaWRJdGVtc0VudW0gfSBmcm9tICcuLi9lbnVtcy9hbGlnbi1ncmlkLWl0ZW1zLmVudW0nO1xuaW1wb3J0IHsgSnVzdGlmeUdyaWRDb250ZW50RW51bSB9IGZyb20gJy4uL2VudW1zL2p1c3RpZnktZ3JpZC1jb250ZW50LmVudW0nO1xuaW1wb3J0IHsgQWxpZ25HcmlkQ29udGVudEVudW0gfSBmcm9tICcuLi9lbnVtcy9hbGlnbi1ncmlkLWNvbnRlbnQuZW51bSc7XG5pbXBvcnQgeyBHcmlkQXV0b0Zsb3dFbnVtIH0gZnJvbSAnLi4vZW51bXMvZ3JpZC1hdXRvLWZsb3cuZW51bSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzcGxheUFzUGFyZW50Q29tcG9uZW50IGltcGxlbWVudHMgQ2xhc3NDaGFuZ2VPYnNlcnZlckludGVyZmFjZSB7XG4gICAgcHJpdmF0ZSBkb21FbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBkb21FbGVtZW50U3R5bGVTaGVldDogQ1NTU3R5bGVEZWNsYXJhdGlvbjtcblxuICAgIHByaXZhdGUgZGlzcGxheVNlbGVjdG9yOiBIVE1MU2VsZWN0RWxlbWVudDtcblxuICAgIHByaXZhdGUgZmxleENvbnRhaW5lckFzUGFyZW50OiBDb250YWluZXJCdWlsZGVyO1xuICAgIHByaXZhdGUgZmxleERpcmVjdGlvblNlbGVjdG9yOiBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50O1xuICAgIHByaXZhdGUgZmxleFdyYXBTZWxlY3RvcjogR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudDtcbiAgICBwcml2YXRlIGFsaWduSXRlbXNTZWxlY3RvcjogR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudDtcbiAgICBwcml2YXRlIGp1c3RpZnlDb250ZW50U2VsZWN0b3I6IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBhbGlnbkNvbnRlbnRTZWxlY3RvcjogR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudDtcblxuICAgIHByaXZhdGUgZ3JpZENvbnRhaW5lckFzUGFyZW50OiBDb250YWluZXJCdWlsZGVyO1xuICAgIHByaXZhdGUgZ3JpZFRlbXBsYXRlQ29sdW1uc0lucHV0OiBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50O1xuICAgIHByaXZhdGUgZ3JpZFRlbXBsYXRlUm93c0lucHV0OiBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50O1xuICAgIHByaXZhdGUgZ3JpZEF1dG9Db2x1bW5zSW5wdXQ6IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBncmlkQXV0b1Jvd3NJbnB1dDogR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudDtcbiAgICBwcml2YXRlIGdyaWRUZW1wbGF0ZUFyZWFzVGV4dGFyZWE6IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBncmlkSnVzdGlmeUl0ZW1zU2VsZWN0b3I6IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBncmlkQWxpZ25JdGVtc1NlbGVjdG9yOiBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50O1xuICAgIHByaXZhdGUgZ3JpZEp1c3RpZnlDb250ZW50U2VsZWN0b3I6IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBncmlkQWxpZ25Db250ZW50U2VsZWN0b3I6IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBncmlkQXV0b0Zsb3dTZWxlY3RvcjogR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudDtcbiAgICBwcml2YXRlIGdyaWRDb2x1bW5HYXBJbnB1dDogSW5wdXRBbmRVbml0c1NlbGVjdG9yQ29tcG9uZW50O1xuICAgIHByaXZhdGUgZ3JpZFJvd0dhcElucHV0OiBJbnB1dEFuZFVuaXRzU2VsZWN0b3JDb21wb25lbnQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihkb21FbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0ID0gQ3NzU3R5bGVTaGVldC5nZXRSdWxlU3R5bGVzKHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3RbMF0pO1xuICAgICAgICB0aGlzLmFkZENvbXBvbmVudHMoKTtcbiAgICB9XG5cbiAgICBnZXQgY29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRDb21wb25lbnRzKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVByb3BlcnR5ID0gdGhpcy51cGRhdGVQcm9wZXJ0eS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuZGlzcGxheVNlbGVjdG9yID0gbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKERpc3BsYXlUeXBlc0VudW0pXG4gICAgICAgICAgICAuc2VsZWN0T3B0aW9uKHRoaXMuZ2V0Q3VycmVudFByb3BlcnRpZXMoJ2Rpc3BsYXknKSlcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnVwZGF0ZVByb3BlcnR5KVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydmbGV4LWRpcmVjdGlvbiddLCBGbGV4RGlyZWN0aW9uRW51bS5jb2x1bW4pXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW1bJ2FsaWduLWl0ZW1zJ10sIEFsaWduRmxleEl0ZW1zRW51bS5zdHJldGNoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmJvcmRlciwgJzFweCBzb2xpZCAjNENBRjUwJylcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5wYWRkaW5nLCAnM3B4JylcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnRGlzcGxheSBTZXR0aW5ncycpXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmRpc3BsYXlTZWxlY3RvcilcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG5cbiAgICAgICAgdGhpcy5mbGV4Q29udGFpbmVyQXNQYXJlbnQgPSB0aGlzLmNyZWF0ZUZsZXhBc1BhcmVudENvbnRhaW5lcigpO1xuICAgICAgICB0aGlzLmdyaWRDb250YWluZXJBc1BhcmVudCA9IHRoaXMuY3JlYXRlR3JpZEFzUGFyZW50Q29udGFpbmVyKCk7XG4gICAgICAgIHRoaXMuc2V0Q29tcG9uZW50QWNjb3JkaW5nVG9TZWxlY3RvcigpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlUHJvcGVydHkoKSB7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2Rpc3BsYXknXSA9IHRoaXMuZGlzcGxheVNlbGVjdG9yLnZhbHVlO1xuICAgICAgICB0aGlzLnNldENvbXBvbmVudEFjY29yZGluZ1RvU2VsZWN0b3IodHJ1ZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRDdXJyZW50UHJvcGVydGllcyhwcm9wZXJ0eTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbcHJvcGVydHldO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0Q29tcG9uZW50QWNjb3JkaW5nVG9TZWxlY3RvcihyZXNldD86IGJvb2xlYW4pIHtcbiAgICAgICAgY29uc3QgY3VycmVudFByb3BlcnRpZXMgPSB0aGlzLmdldEN1cnJlbnRQcm9wZXJ0aWVzKCdkaXNwbGF5Jyk7XG5cbiAgICAgICAgaWYgKGN1cnJlbnRQcm9wZXJ0aWVzID09PSBEaXNwbGF5VHlwZXNFbnVtLmZsZXggfHwgY3VycmVudFByb3BlcnRpZXMgPT09IERpc3BsYXlUeXBlc0VudW1bJ2lubGluZS1mbGV4J10pIHtcbiAgICAgICAgICAgIGlmKHJlc2V0KXtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0R3JpZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy51cGRhdGVGbGV4Q29tcG9uZW50c1N0eWxlU2hlZXQoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0RmxleEFzUGFyZW50SW5pdGlhbFZhbHVlcygpO1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5mbGV4Q29udGFpbmVyQXNQYXJlbnQuYnVpbGQoKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICBjdXJyZW50UHJvcGVydGllcyA9PT0gRGlzcGxheVR5cGVzRW51bS5ncmlkXG4gICAgICAgICAgICB8fCBjdXJyZW50UHJvcGVydGllcyA9PT0gRGlzcGxheVR5cGVzRW51bVsnaW5saW5lLWdyaWQnXVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGlmKHJlc2V0KXtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0RmxleCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy51cGRhdGVHcmlkQ29tcG9uZW50c1N0eWxlU2hlZXQoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0R3JpZEFzUGFyZW50SW5pdGlhbFZhbHVlcygpO1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5ncmlkQ29udGFpbmVyQXNQYXJlbnQuYnVpbGQoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0RmxleCgpO1xuICAgICAgICAgICAgdGhpcy5yZXNldEdyaWQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlRmxleEFzUGFyZW50Q29udGFpbmVyKCkge1xuICAgICAgICB0aGlzLmZsZXhEaXJlY3Rpb25TZWxlY3RvciA9IG5ldyBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQsXG4gICAgICAgICAgICAnZmxleC1kaXJlY3Rpb24nLFxuICAgICAgICAgICAgJ0ZsZXggRGlyZWN0aW9uJyxcbiAgICAgICAgICAgIG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihGbGV4RGlyZWN0aW9uRW51bSkuYnVpbGQoKSxcbiAgICAgICAgICAgIEV2ZW50VHlwZUVudW0uY2hhbmdlXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5mbGV4V3JhcFNlbGVjdG9yID0gbmV3IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCxcbiAgICAgICAgICAgICdmbGV4LXdyYXAnLFxuICAgICAgICAgICAgJ0ZsZXggV3JhcCcsXG4gICAgICAgICAgICBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIoRmxleFdyYXBFbnVtKS5idWlsZCgpLFxuICAgICAgICAgICAgRXZlbnRUeXBlRW51bS5jaGFuZ2VcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmFsaWduSXRlbXNTZWxlY3RvciA9IG5ldyBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQsXG4gICAgICAgICAgICAnYWxpZ24taXRlbXMnLFxuICAgICAgICAgICAgJ0FsaWduIEl0ZW1zJyxcbiAgICAgICAgICAgIG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihBbGlnbkZsZXhJdGVtc0VudW0pLmJ1aWxkKCksXG4gICAgICAgICAgICBFdmVudFR5cGVFbnVtLmNoYW5nZVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuanVzdGlmeUNvbnRlbnRTZWxlY3RvciA9IG5ldyBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQsXG4gICAgICAgICAgICAnanVzdGlmeS1jb250ZW50JyxcbiAgICAgICAgICAgICdKdXN0aWZ5IENvbnRlbnQnLFxuICAgICAgICAgICAgbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKEp1c3RpZnlGbGV4Q29udGVudEVudW0pLmJ1aWxkKCksXG4gICAgICAgICAgICBFdmVudFR5cGVFbnVtLmNoYW5nZVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuYWxpZ25Db250ZW50U2VsZWN0b3IgPSBuZXcgR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0LFxuICAgICAgICAgICAgJ2FsaWduLWNvbnRlbnQnLFxuICAgICAgICAgICAgJ0FsaWduIENvbnRlbnQnLFxuICAgICAgICAgICAgbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKEFsaWduRmxleENvbnRlbnRFbnVtKS5idWlsZCgpLFxuICAgICAgICAgICAgRXZlbnRUeXBlRW51bS5jaGFuZ2VcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5ib3JkZXIsICcxcHggc29saWQgIzRDQUY1MCcpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ucGFkZGluZywgJzNweCcpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0Rpc3BsYXkgRmxleCBhcyBQYXJlbnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5mbGV4RGlyZWN0aW9uU2VsZWN0b3IuY29tcG9uZW50KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmZsZXhXcmFwU2VsZWN0b3IuY29tcG9uZW50KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmFsaWduSXRlbXNTZWxlY3Rvci5jb21wb25lbnQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuanVzdGlmeUNvbnRlbnRTZWxlY3Rvci5jb21wb25lbnQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuYWxpZ25Db250ZW50U2VsZWN0b3IuY29tcG9uZW50KVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRGbGV4QXNQYXJlbnRJbml0aWFsVmFsdWVzKCkge1xuICAgICAgICB0aGlzLmZsZXhEaXJlY3Rpb25TZWxlY3Rvci5zZXRWYWx1ZSh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydmbGV4LWRpcmVjdGlvbiddIHx8ICcnKTtcbiAgICAgICAgdGhpcy5mbGV4V3JhcFNlbGVjdG9yLnNldFZhbHVlKHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2ZsZXgtd3JhcCddIHx8ICcnKTtcbiAgICAgICAgdGhpcy5hbGlnbkl0ZW1zU2VsZWN0b3Iuc2V0VmFsdWUodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYWxpZ24taXRlbXMnXSB8fCAnJyk7XG4gICAgICAgIHRoaXMuanVzdGlmeUNvbnRlbnRTZWxlY3Rvci5zZXRWYWx1ZSh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydqdXN0aWZ5LWNvbnRlbnQnXSB8fCAnJyk7XG4gICAgICAgIHRoaXMuYWxpZ25Db250ZW50U2VsZWN0b3Iuc2V0VmFsdWUodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYWxpZ24tY29udGVudCddIHx8ICcnKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZUdyaWRBc1BhcmVudENvbnRhaW5lcigpIHtcbiAgICAgICAgdGhpcy5ncmlkVGVtcGxhdGVDb2x1bW5zSW5wdXQgPSBuZXcgR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0LFxuICAgICAgICAgICAgJ2dyaWQtdGVtcGxhdGUtY29sdW1ucycsXG4gICAgICAgICAgICAnR3JpZCBUZW1wbGF0ZSBDb2x1bW5zJyxcbiAgICAgICAgICAgIG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS50ZXh0KS5idWlsZCgpLFxuICAgICAgICAgICAgRXZlbnRUeXBlRW51bS5pbnB1dCk7XG5cbiAgICAgICAgdGhpcy5ncmlkVGVtcGxhdGVSb3dzSW5wdXQgPSBuZXcgR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0LFxuICAgICAgICAgICAgJ2dyaWQtdGVtcGxhdGUtcm93cycsXG4gICAgICAgICAgICAnR3JpZCBUZW1wbGF0ZSBSb3dzJyxcbiAgICAgICAgICAgIG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS50ZXh0KS5idWlsZCgpLFxuICAgICAgICAgICAgRXZlbnRUeXBlRW51bS5pbnB1dCk7XG5cbiAgICAgICAgdGhpcy5ncmlkQXV0b0NvbHVtbnNJbnB1dCA9IG5ldyBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQsXG4gICAgICAgICAgICAnZ3JpZC1hdXRvLWNvbHVtbnMnLFxuICAgICAgICAgICAgJ0dyaWQgQXV0byBDb2x1bW5zJyxcbiAgICAgICAgICAgIG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS50ZXh0KS5idWlsZCgpLFxuICAgICAgICAgICAgRXZlbnRUeXBlRW51bS5pbnB1dCk7XG5cbiAgICAgICAgdGhpcy5ncmlkQXV0b1Jvd3NJbnB1dCA9IG5ldyBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQsXG4gICAgICAgICAgICAnZ3JpZC1hdXRvLXJvd3MnLFxuICAgICAgICAgICAgJ0dyaWQgQXV0byBSb3dzJyxcbiAgICAgICAgICAgIG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS50ZXh0KS5idWlsZCgpLFxuICAgICAgICAgICAgRXZlbnRUeXBlRW51bS5pbnB1dCk7XG5cbiAgICAgICAgdGhpcy5ncmlkVGVtcGxhdGVBcmVhc1RleHRhcmVhID0gbmV3IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCxcbiAgICAgICAgICAgICdncmlkLXRlbXBsYXRlLWFyZWFzJyxcbiAgICAgICAgICAgICdHcmlkIFRlbXBsYXRlIEFyZWFzJyxcbiAgICAgICAgICAgIG5ldyBUZXh0YXJlYUJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLnJlc2l6ZSwgJ3ZlcnRpY2FsJylcbiAgICAgICAgICAgICAgICAuYnVpbGQoKSxcbiAgICAgICAgICAgIEV2ZW50VHlwZUVudW0uaW5wdXQpO1xuXG4gICAgICAgIHRoaXMuZ3JpZEp1c3RpZnlJdGVtc1NlbGVjdG9yID0gbmV3IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCxcbiAgICAgICAgICAgICdqdXN0aWZ5LWl0ZW1zJyxcbiAgICAgICAgICAgICdHcmlkIEp1c3RpZnkgSXRlbXMnLFxuICAgICAgICAgICAgbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKEp1c3RpZnlHcmlkSXRlbXNFbnVtKS5idWlsZCgpLFxuICAgICAgICAgICAgRXZlbnRUeXBlRW51bS5jaGFuZ2UpO1xuXG4gICAgICAgIHRoaXMuZ3JpZEFsaWduSXRlbXNTZWxlY3RvciA9IG5ldyBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQsXG4gICAgICAgICAgICAnYWxpZ24taXRlbXMnLFxuICAgICAgICAgICAgJ0dyaWQgQWxpZ24gSXRlbXMnLFxuICAgICAgICAgICAgbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKEFsaWduR3JpZEl0ZW1zRW51bSkuYnVpbGQoKSxcbiAgICAgICAgICAgIEV2ZW50VHlwZUVudW0uY2hhbmdlKTtcblxuICAgICAgICB0aGlzLmdyaWRKdXN0aWZ5Q29udGVudFNlbGVjdG9yID0gbmV3IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCxcbiAgICAgICAgICAgICdqdXN0aWZ5LWNvbnRlbnQnLFxuICAgICAgICAgICAgJ0dyaWQgSnVzdGlmeSBDb250ZW50JyxcbiAgICAgICAgICAgIG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihKdXN0aWZ5R3JpZENvbnRlbnRFbnVtKS5idWlsZCgpLFxuICAgICAgICAgICAgRXZlbnRUeXBlRW51bS5jaGFuZ2UpO1xuXG4gICAgICAgIHRoaXMuZ3JpZEFsaWduQ29udGVudFNlbGVjdG9yID0gbmV3IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCxcbiAgICAgICAgICAgICdhbGlnbi1jb250ZW50JyxcbiAgICAgICAgICAgICdHcmlkIEFsaWduIENvbnRlbnQnLFxuICAgICAgICAgICAgbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKEFsaWduR3JpZENvbnRlbnRFbnVtKS5idWlsZCgpLFxuICAgICAgICAgICAgRXZlbnRUeXBlRW51bS5jaGFuZ2UpO1xuXG4gICAgICAgIHRoaXMuZ3JpZEF1dG9GbG93U2VsZWN0b3IgPSBuZXcgR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0LFxuICAgICAgICAgICAgJ2dyaWQtYXV0by1mbG93JyxcbiAgICAgICAgICAgICdHcmlkIEF1dG8gRmxvdycsXG4gICAgICAgICAgICBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIoR3JpZEF1dG9GbG93RW51bSkuYnVpbGQoKSxcbiAgICAgICAgICAgIEV2ZW50VHlwZUVudW0uY2hhbmdlKTtcblxuICAgICAgICB0aGlzLmdyaWRDb2x1bW5HYXBJbnB1dCA9IG5ldyBJbnB1dEFuZFVuaXRzU2VsZWN0b3JDb21wb25lbnQoXG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0LFxuICAgICAgICAgICAgJ2NvbHVtbi1nYXAnLFxuICAgICAgICAgICAgJ0dyaWQgQ29sdW1uIEdhcCdcbiAgICAgICAgKVxuICAgICAgICAgICAgLnNldE1pblZhbHVlKDApXG4gICAgICAgICAgICAuc2V0WmVyb1ZhbHVlKDApXG5cbiAgICAgICAgdGhpcy5ncmlkUm93R2FwSW5wdXQgPSBuZXcgSW5wdXRBbmRVbml0c1NlbGVjdG9yQ29tcG9uZW50KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQsICdyb3ctZ2FwJywgJ0dyaWQgUm93IEdhcCcpXG4gICAgICAgICAgICAuc2V0TWluVmFsdWUoMClcbiAgICAgICAgICAgIC5zZXRaZXJvVmFsdWUoMClcblxuICAgICAgICByZXR1cm4gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5ib3JkZXIsICcxcHggc29saWQgIzRDQUY1MCcpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ucGFkZGluZywgJzNweCcpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0Rpc3BsYXkgR3JpZCBhcyBQYXJlbnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5ncmlkVGVtcGxhdGVDb2x1bW5zSW5wdXQuY29tcG9uZW50KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmdyaWRUZW1wbGF0ZVJvd3NJbnB1dC5jb21wb25lbnQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuZ3JpZEF1dG9Db2x1bW5zSW5wdXQuY29tcG9uZW50KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmdyaWRBdXRvUm93c0lucHV0LmNvbXBvbmVudClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5ncmlkVGVtcGxhdGVBcmVhc1RleHRhcmVhLmNvbXBvbmVudClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5ncmlkSnVzdGlmeUl0ZW1zU2VsZWN0b3IuY29tcG9uZW50KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmdyaWRBbGlnbkl0ZW1zU2VsZWN0b3IuY29tcG9uZW50KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmdyaWRKdXN0aWZ5Q29udGVudFNlbGVjdG9yLmNvbXBvbmVudClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5ncmlkQWxpZ25Db250ZW50U2VsZWN0b3IuY29tcG9uZW50KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmdyaWRBdXRvRmxvd1NlbGVjdG9yLmNvbXBvbmVudClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5ncmlkQ29sdW1uR2FwSW5wdXQuY29tcG9uZW50KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmdyaWRSb3dHYXBJbnB1dC5jb21wb25lbnQpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEdyaWRBc1BhcmVudEluaXRpYWxWYWx1ZXMoKSB7XG4gICAgICAgIHRoaXMuZ3JpZFRlbXBsYXRlQ29sdW1uc0lucHV0LnNldFZhbHVlKHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2dyaWQtdGVtcGxhdGUtY29sdW1ucyddIHx8ICcnKTtcbiAgICAgICAgdGhpcy5ncmlkVGVtcGxhdGVSb3dzSW5wdXQuc2V0VmFsdWUodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZ3JpZC10ZW1wbGF0ZS1yb3dzJ10gfHwgJycpO1xuICAgICAgICB0aGlzLmdyaWRBdXRvQ29sdW1uc0lucHV0LnNldFZhbHVlKHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2dyaWQtYXV0by1jb2x1bW5zJ10gfHwgJycpO1xuICAgICAgICB0aGlzLmdyaWRBdXRvUm93c0lucHV0LnNldFZhbHVlKHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2dyaWQtYXV0by1yb3dzJ10gfHwgJycpO1xuICAgICAgICB0aGlzLmdyaWRUZW1wbGF0ZUFyZWFzVGV4dGFyZWEuc2V0VmFsdWUodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZ3JpZC10ZW1wbGF0ZS1hcmVhcyddIHx8ICcnKTtcbiAgICAgICAgdGhpcy5ncmlkSnVzdGlmeUl0ZW1zU2VsZWN0b3Iuc2V0VmFsdWUodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnanVzdGlmeS1pdGVtcyddIHx8ICcnKTtcbiAgICAgICAgdGhpcy5ncmlkQWxpZ25JdGVtc1NlbGVjdG9yLnNldFZhbHVlKHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2FsaWduLWl0ZW1zJ10gfHwgJycpO1xuICAgICAgICB0aGlzLmdyaWRKdXN0aWZ5Q29udGVudFNlbGVjdG9yLnNldFZhbHVlKHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2p1c3RpZnktY29udGVudCddIHx8ICcnKTtcbiAgICAgICAgdGhpcy5ncmlkQWxpZ25Db250ZW50U2VsZWN0b3Iuc2V0VmFsdWUodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYWxpZ24tY29udGVudCddIHx8ICcnKTtcbiAgICAgICAgdGhpcy5ncmlkQXV0b0Zsb3dTZWxlY3Rvci5zZXRWYWx1ZSh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydncmlkLWF1dG8tZmxvdyddIHx8ICcnKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlc2V0RmxleCgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuZmxleENvbnRhaW5lckFzUGFyZW50LmJ1aWxkKCkpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHVuZGVmaW5lZDtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2ZsZXgtZGlyZWN0aW9uJ10gPSAnJztcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2ZsZXgtd3JhcCddID0gJyc7XG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydhbGlnbi1pdGVtcyddID0gJyc7XG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydqdXN0aWZ5LWNvbnRlbnQnXSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYWxpZ24tY29udGVudCddID0gJyc7XG5cbiAgICAgICAgICAgIC8vIE5PVEU6IGRlY2lzaW9uOiBkZWxldGUgb25seSBjaGlsZHJlbiBzdHlsZXMgZm9yIGNsYXNzZXMgbmFtZWQgYXMgdGhlIGNvbXBvbmVudCBpZC5cbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5jaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgQ3NzU3R5bGVTaGVldC5nZXRSdWxlU3R5bGVzKGNoaWxkWyduYW1lJ10pWydhbGlnbi1zZWxmJ10gPSAnJztcbiAgICAgICAgICAgICAgICBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXMoY2hpbGRbJ25hbWUnXSlbJ2ZsZXgtZ3JvdyddID0gJyc7XG4gICAgICAgICAgICAgICAgQ3NzU3R5bGVTaGVldC5nZXRSdWxlU3R5bGVzKGNoaWxkWyduYW1lJ10pWydmbGV4LXNocmluayddID0gJyc7XG4gICAgICAgICAgICAgICAgQ3NzU3R5bGVTaGVldC5nZXRSdWxlU3R5bGVzKGNoaWxkWyduYW1lJ10pWydmbGV4LWJhc2lzJ10gPSAnJztcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHJlc2V0R3JpZCgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuZ3JpZENvbnRhaW5lckFzUGFyZW50LmJ1aWxkKCkpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHVuZGVmaW5lZDtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2dyaWQtdGVtcGxhdGUtY29sdW1ucyddID0gJyc7XG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydncmlkLXRlbXBsYXRlLXJvd3MnXSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZ3JpZC1hdXRvLWNvbHVtbnMnXSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZ3JpZC1hdXRvLXJvd3MnXSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZ3JpZC10ZW1wbGF0ZS1hcmVhcyddID0gJyc7XG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydqdXN0aWZ5LWl0ZW1zJ10gPSAnJztcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2dyaWQtYXV0by1mbG93J10gPSAnJztcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2NvbHVtbi1nYXAnXSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsncm93LWdhcCddID0gJyc7XG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydhbGlnbi1pdGVtcyddID0gJyc7XG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydqdXN0aWZ5LWNvbnRlbnQnXSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYWxpZ24tY29udGVudCddID0gJyc7XG5cbiAgICAgICAgICAgIC8vIE5PVEU6IGRlY2lzaW9uOiBkZWxldGUgb25seSBjaGlsZHJlbiBzdHlsZXMgZm9yIGNsYXNzZXMgbmFtZWQgYXMgdGhlIGNvbXBvbmVudCBpZC5cbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5jaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgQ3NzU3R5bGVTaGVldC5nZXRSdWxlU3R5bGVzKGNoaWxkWyduYW1lJ10pWydncmlkLWNvbHVtbi1zdGFydCddID0gJyc7XG4gICAgICAgICAgICAgICAgQ3NzU3R5bGVTaGVldC5nZXRSdWxlU3R5bGVzKGNoaWxkWyduYW1lJ10pWydncmlkLWNvbHVtbi1lbmQnXSA9ICcnO1xuICAgICAgICAgICAgICAgIENzc1N0eWxlU2hlZXQuZ2V0UnVsZVN0eWxlcyhjaGlsZFsnbmFtZSddKVsnZ3JpZC1yb3ctc3RhcnQnXSA9ICcnO1xuICAgICAgICAgICAgICAgIENzc1N0eWxlU2hlZXQuZ2V0UnVsZVN0eWxlcyhjaGlsZFsnbmFtZSddKVsnZ3JpZC1yb3ctZW5kJ10gPSAnJztcbiAgICAgICAgICAgICAgICBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXMoY2hpbGRbJ25hbWUnXSlbJ2p1c3RpZnktc2VsZiddID0gJyc7XG4gICAgICAgICAgICAgICAgQ3NzU3R5bGVTaGVldC5nZXRSdWxlU3R5bGVzKGNoaWxkWyduYW1lJ10pWydhbGlnbi1zZWxmJ10gPSAnJztcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgY2xhc3NOYW1lVXBkYXRlZChuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCA9IENzc1N0eWxlU2hlZXQuZ2V0UnVsZVN0eWxlcyhuYW1lKTtcblxuICAgICAgICBjb25zdCBjdXJyZW50UHJvcGVydGllcyA9IHRoaXMuZ2V0Q3VycmVudFByb3BlcnRpZXMoJ2Rpc3BsYXknKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5U2VsZWN0b3IudmFsdWUgPSBjdXJyZW50UHJvcGVydGllcztcblxuICAgICAgICB0aGlzLnNldENvbXBvbmVudEFjY29yZGluZ1RvU2VsZWN0b3IodHJ1ZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVGbGV4Q29tcG9uZW50c1N0eWxlU2hlZXQoKSB7XG4gICAgICAgIHRoaXMuZmxleERpcmVjdGlvblNlbGVjdG9yLnVwZGF0ZVN0eWxlU2hlZXQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCk7XG4gICAgICAgIHRoaXMuZmxleFdyYXBTZWxlY3Rvci51cGRhdGVTdHlsZVNoZWV0KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQpO1xuICAgICAgICB0aGlzLmFsaWduSXRlbXNTZWxlY3Rvci51cGRhdGVTdHlsZVNoZWV0KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQpO1xuICAgICAgICB0aGlzLmp1c3RpZnlDb250ZW50U2VsZWN0b3IudXBkYXRlU3R5bGVTaGVldCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0KTtcbiAgICAgICAgdGhpcy5hbGlnbkNvbnRlbnRTZWxlY3Rvci51cGRhdGVTdHlsZVNoZWV0KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlR3JpZENvbXBvbmVudHNTdHlsZVNoZWV0KCkge1xuICAgICAgICB0aGlzLmdyaWRUZW1wbGF0ZUNvbHVtbnNJbnB1dC51cGRhdGVTdHlsZVNoZWV0KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQpO1xuICAgICAgICB0aGlzLmdyaWRUZW1wbGF0ZVJvd3NJbnB1dC51cGRhdGVTdHlsZVNoZWV0KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQpO1xuICAgICAgICB0aGlzLmdyaWRBdXRvQ29sdW1uc0lucHV0LnVwZGF0ZVN0eWxlU2hlZXQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCk7XG4gICAgICAgIHRoaXMuZ3JpZEF1dG9Sb3dzSW5wdXQudXBkYXRlU3R5bGVTaGVldCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0KTtcbiAgICAgICAgdGhpcy5ncmlkVGVtcGxhdGVBcmVhc1RleHRhcmVhLnVwZGF0ZVN0eWxlU2hlZXQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCk7XG4gICAgICAgIHRoaXMuZ3JpZEp1c3RpZnlJdGVtc1NlbGVjdG9yLnVwZGF0ZVN0eWxlU2hlZXQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCk7XG4gICAgICAgIHRoaXMuZ3JpZEFsaWduSXRlbXNTZWxlY3Rvci51cGRhdGVTdHlsZVNoZWV0KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQpO1xuICAgICAgICB0aGlzLmdyaWRKdXN0aWZ5Q29udGVudFNlbGVjdG9yLnVwZGF0ZVN0eWxlU2hlZXQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCk7XG4gICAgICAgIHRoaXMuZ3JpZEFsaWduQ29udGVudFNlbGVjdG9yLnVwZGF0ZVN0eWxlU2hlZXQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCk7XG4gICAgICAgIHRoaXMuZ3JpZEF1dG9GbG93U2VsZWN0b3IudXBkYXRlU3R5bGVTaGVldCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0KTtcbiAgICAgICAgdGhpcy5ncmlkQ29sdW1uR2FwSW5wdXQudXBkYXRlU3R5bGVTaGVldCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0KTtcbiAgICAgICAgdGhpcy5ncmlkUm93R2FwSW5wdXQudXBkYXRlU3R5bGVTaGVldCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ2xhc3NDaGFuZ2VPYnNlcnZlckludGVyZmFjZSBmcm9tICcuLi9pbnRlcmZhY2VzL2NsYXNzLWNoYW5nZS1vYnNlcnZlci5pbnRlcmZhY2UnO1xuXG5pbXBvcnQgQ29udGFpbmVyQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvQ29udGFpbmVyQnVpbGRlcic7XG5pbXBvcnQgSW5wdXRCdWlsZGVyIGZyb20gJy4uL21vZGVscy9JbnB1dEJ1aWxkZXInO1xuaW1wb3J0IExhYmVsQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvTGFiZWxCdWlsZGVyJztcbmltcG9ydCBTZWxlY3RvckZyb21FbnVtQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXInO1xuaW1wb3J0IEJ1dHRvbkJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0J1dHRvbkJ1aWxkZXInO1xuXG5pbXBvcnQgQ3NzU3R5bGVTaGVldCBmcm9tICcuLi8uLi9jc3Mtc3R5bGVzaGVldC9jc3Mtc3R5bGVzaGVldCc7XG5pbXBvcnQgZ2V0VW5pdCBmcm9tICcuLi9mdW5jdGlvbnMvZ2V0LWNzcy11bml0JztcbmltcG9ydCBjb2xvclRvSGV4IGZyb20gJy4uL2Z1bmN0aW9ucy9yZ2ItdG8taGV4JztcblxuaW1wb3J0IHsgSW5wdXRUeXBlRW51bSB9IGZyb20gJy4uL2VudW1zL2lucHV0LXR5cGUuZW51bSc7XG5pbXBvcnQgeyBVbml0c0VudW0gfSBmcm9tICcuLi9lbnVtcy91bml0cy5lbnVtJztcbmltcG9ydCB7IFN0eWxlTmFtZUVudW0gfSBmcm9tICcuLi9lbnVtcy9zdHlsZS1uYW1lLmVudW0nO1xuaW1wb3J0IHsgRGlzcGxheVR5cGVzRW51bSB9IGZyb20gJy4uL2VudW1zL2Rpc3BsYXktdHlwZXMuZW51bSc7XG5pbXBvcnQgeyBGb250c0VudW0gfSBmcm9tICcuLi9lbnVtcy9mb250cy5lbnVtJztcbmltcG9ydCB7IEZvbnRTdHlsZXNFbnVtIH0gZnJvbSAnLi4vZW51bXMvZm9udC1zdHlsZXMuZW51bSc7XG5pbXBvcnQgeyBGb250V2VpZ2h0RW51bSB9IGZyb20gJy4uL2VudW1zL2ZvbnQtd2VpZ2h0LmVudW0nO1xuaW1wb3J0IHsgRm9udFZhcmlhbnRFbnVtIH0gZnJvbSAnLi4vZW51bXMvZm9udC12YXJpYW50LmVudW0nO1xuXG4vLyBUT0RPOiBoYWNlciBtYXMgYmVsbG8gZWwgY29udGVuZWRvciBkZSB0b2RhcyBsYXMgZnVlbnRlcyBxdWUgdGllbmUgZWwgZWxlbWVudG9cbi8vIFRPRE86IHZlciBzaSBzZSBwdWVkZW4gYWdyZWdhciBmdWVudGVzIGRlIEdvb2dsZSwgcG9yIGVqZW1wbG8uLi4gY29tbyBoYWNlcmxvLi4uXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvbnRDb21wb25lbnQgaW1wbGVtZW50cyBDbGFzc0NoYW5nZU9ic2VydmVySW50ZXJmYWNlIHtcbiAgICBwcml2YXRlIGRvbUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcbiAgICBwcml2YXRlIGRvbUVsZW1lbnRTdHlsZVNoZWV0OiBDU1NTdHlsZURlY2xhcmF0aW9uO1xuXG4gICAgcHJpdmF0ZSBjdXJyZW50Rm9udEZhbWlsaWVzQXJyYXk6IHN0cmluZ1tdID0gW107XG4gICAgcHJpdmF0ZSBmb250U2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIHByaXZhdGUgY3VycmVudEZvbnRzRWxlbWVudHNDb250YWluZXI6IENvbnRhaW5lckJ1aWxkZXI7XG4gICAgcHJpdmF0ZSBjdXJyZW50Rm9udHNDb250YWluZXI6IENvbnRhaW5lckJ1aWxkZXI7XG5cbiAgICBwcml2YXRlIGZvbnRTaXplSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBmb250VW5pdFNlbGVjdG9yOiBIVE1MU2VsZWN0RWxlbWVudDtcblxuICAgIHByaXZhdGUgZm9udFN0eWxlU2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIHByaXZhdGUgZm9udFdlaWdodFNlbGVjdG9yOiBIVE1MU2VsZWN0RWxlbWVudDtcbiAgICBwcml2YXRlIGZvbnRWYXJpYW50U2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIHByaXZhdGUgZm9udENvbG9ySW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihkb21FbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0ID0gQ3NzU3R5bGVTaGVldC5nZXRSdWxlU3R5bGVzKHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3RbMF0pO1xuICAgICAgICB0aGlzLmFkZENvbXBvbmVudHMoKTtcbiAgICB9XG5cbiAgICBnZXQgY29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRDb21wb25lbnRzKCkge1xuICAgICAgICB0aGlzLmFkZEZvbnQgPSB0aGlzLmFkZEZvbnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW1vdmVGb250ID0gdGhpcy5yZW1vdmVGb250LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubW92ZUZvbnRUb1RoZUZyb250ID0gdGhpcy5tb3ZlRm9udFRvVGhlRnJvbnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5tb3ZlRm9udEJlaGluZCA9IHRoaXMubW92ZUZvbnRCZWhpbmQuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZUZvbnRTaXplID0gdGhpcy51cGRhdGVGb250U2l6ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZUZvbnRTdHlsZSA9IHRoaXMudXBkYXRlRm9udFN0eWxlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlRm9udFdlaWdodCA9IHRoaXMudXBkYXRlRm9udFdlaWdodC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZUZvbnRWYXJpYW4gPSB0aGlzLnVwZGF0ZUZvbnRWYXJpYW4uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGVGb250Q29sb3IgPSB0aGlzLnVwZGF0ZUZvbnRDb2xvci5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuYnVpbGRBbGxDb21wb25lbnRzKCk7XG4gICAgICAgIHRoaXMuc2V0SW5pdGlhbFZhbHVlc0FjY29yZGluZ1RvQ2xhc3MoKTtcblxuICAgICAgICBjb25zdCBhZGRGb250QnV0dG9uID0gbmV3IEJ1dHRvbkJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldElubmVyVGV4dCgnQWRkJylcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYWRkRm9udClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgY29uc3QgZm9udEZhbWlseUNvbXBvbmVudHNDb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0FkZCBGb250IEZhbWlseScpXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmZvbnRTZWxlY3RvcilcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQoYWRkRm9udEJ1dHRvbilcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICB0aGlzLmN1cnJlbnRGb250c0NvbnRhaW5lciA9IHRoaXMuY3VycmVudEZvbnRzQ29tcG9uZW50c0NvbnRhaW5lcigpO1xuXG4gICAgICAgIGNvbnN0IGZvbnRTaXplQ29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdGb250IFNpemUnKVxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5mb250U2l6ZUlucHV0KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmZvbnRVbml0U2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgY29uc3QgZm9udFN0eWxlQ29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdGb250IFN0eWxlJylcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuZm9udFN0eWxlU2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgY29uc3QgZm9udFdlaWdodENvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnRm9udCBXZWlnaHQnKVxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5mb250V2VpZ2h0U2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgY29uc3QgZm9udFZhcmlhbnRDb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0ZvbnQgVmFyaWFudCcpXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmZvbnRWYXJpYW50U2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgY29uc3QgZm9udENvbG9yQ29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdGb250IENvbG9yJylcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuZm9udENvbG9ySW5wdXQpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5ib3JkZXIsICcxcHggc29saWQgIzRDQUY1MCcpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5wYWRkaW5nLCAnM3B4JylcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnRm9udCcpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChmb250RmFtaWx5Q29tcG9uZW50c0NvbnRhaW5lcilcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZElmRGVmaW5lZCh0aGlzLmN1cnJlbnRGb250c0NvbnRhaW5lci5idWlsZCgpKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKGZvbnRTaXplQ29udGFpbmVyKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKGZvbnRTdHlsZUNvbnRhaW5lcilcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChmb250V2VpZ2h0Q29udGFpbmVyKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKGZvbnRWYXJpYW50Q29udGFpbmVyKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKGZvbnRDb2xvckNvbnRhaW5lcilcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBidWlsZEFsbENvbXBvbmVudHMoKSB7XG4gICAgICAgIHRoaXMuZm9udFNlbGVjdG9yID0gbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKEZvbnRzRW51bSlcbiAgICAgICAgICAgIC5zZWxlY3RPcHRpb24oRm9udHNFbnVtLmRlZmF1bHQpXG4gICAgICAgICAgICAuYnVpbGQoKTtcblxuICAgICAgICB0aGlzLmN1cnJlbnRGb250c0VsZW1lbnRzQ29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKTtcblxuICAgICAgICB0aGlzLmZvbnRTaXplSW5wdXQgPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0ubnVtYmVyKVxuICAgICAgICAgICAgLnNldE1pbigwKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy51cGRhdGVGb250U2l6ZSlcbiAgICAgICAgICAgIC5idWlsZCgpO1xuXG4gICAgICAgIHRoaXMuZm9udFVuaXRTZWxlY3RvciA9IG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihVbml0c0VudW0pXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVGb250U2l6ZSlcbiAgICAgICAgICAgIC5idWlsZCgpO1xuXG4gICAgICAgIHRoaXMuZm9udFN0eWxlU2VsZWN0b3IgPSBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIoRm9udFN0eWxlc0VudW0pXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVGb250U3R5bGUpXG4gICAgICAgICAgICAuYnVpbGQoKTtcblxuICAgICAgICB0aGlzLmZvbnRXZWlnaHRTZWxlY3RvciA9IG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihGb250V2VpZ2h0RW51bSlcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnVwZGF0ZUZvbnRXZWlnaHQpXG4gICAgICAgICAgICAuYnVpbGQoKTtcblxuICAgICAgICB0aGlzLmZvbnRWYXJpYW50U2VsZWN0b3IgPSBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIoRm9udFZhcmlhbnRFbnVtKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudXBkYXRlRm9udFZhcmlhbilcbiAgICAgICAgICAgIC5idWlsZCgpO1xuXG4gICAgICAgIHRoaXMuZm9udENvbG9ySW5wdXQgPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0uY29sb3IpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLnVwZGF0ZUZvbnRDb2xvcilcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRJbml0aWFsVmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpIHtcbiAgICAgICAgdGhpcy5zZXRGb250RmFtaWx5VmFsdWVBY2NvcmRpbmdUb0NsYXNzKCk7XG4gICAgICAgIHRoaXMuZmlsbENvbnRhaW5lckFjY29yZGluZ1RvSW5pdGlhbFZhbHVlcygpO1xuXG4gICAgICAgIHRoaXMuc2V0Rm9udFNpemVWYWx1ZUFjY29yZGluZ1RvQ2xhc3MoKTtcbiAgICAgICAgdGhpcy5zZXRGb250U3R5bGVWYWx1ZUFjY29yZGluZ1RvQ2xhc3MoKTtcbiAgICAgICAgdGhpcy5zZXRGb250V2VpZ2h0VmFsdWVBY2NvcmRpbmdUb0NsYXNzKCk7XG4gICAgICAgIHRoaXMuc2V0Rm9udFZhcmlhbnRWYWx1ZUFjY29yZGluZ1RvQ2xhc3MoKTtcbiAgICAgICAgdGhpcy5zZXRGb250Q29sb3JWYWx1ZUFjY29yZGluZ1RvQ2xhc3MoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEZvbnRGYW1pbHlWYWx1ZUFjY29yZGluZ1RvQ2xhc3MoKSB7XG4gICAgICAgIGNvbnN0IGZvbnRzID0gdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZm9udC1mYW1pbHknXTtcbiAgICAgICAgaWYgKGZvbnRzKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRGb250RmFtaWxpZXNBcnJheSA9IGZvbnRzLnNwbGl0KCcsICcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmaWxsQ29udGFpbmVyQWNjb3JkaW5nVG9Jbml0aWFsVmFsdWVzKCkge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50Rm9udEZhbWlsaWVzQXJyYXkpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEZvbnRGYW1pbGllc0FycmF5LmZvckVhY2goKGZvbnQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRGb250c0VsZW1lbnRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZm9udEZhbWlseUNvbXBvbmVudChmb250LnRyaW0oKSkpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc2V0Rm9udFNpemVWYWx1ZUFjY29yZGluZ1RvQ2xhc3MoKSB7XG4gICAgICAgIGNvbnN0IGZvbnRTaXplID0gdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZm9udC1zaXplJ107XG4gICAgICAgIHRoaXMuZm9udFNpemVJbnB1dC52YWx1ZSA9IGAke3BhcnNlSW50KGZvbnRTaXplKSB8fCAxfWA7XG4gICAgICAgIHRoaXMuZm9udFVuaXRTZWxlY3Rvci52YWx1ZSA9IGdldFVuaXQoZm9udFNpemUsIFVuaXRzRW51bS5lbSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRGb250U3R5bGVWYWx1ZUFjY29yZGluZ1RvQ2xhc3MoKSB7XG4gICAgICAgIGNvbnN0IGZvbnRTdHlsZSA9IHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2ZvbnQtc3R5bGUnXTtcbiAgICAgICAgdGhpcy5mb250U3R5bGVTZWxlY3Rvci52YWx1ZSA9IGZvbnRTdHlsZSA9PT0gJycgPyAnbm9ybWFsJyA6IGZvbnRTdHlsZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEZvbnRXZWlnaHRWYWx1ZUFjY29yZGluZ1RvQ2xhc3MoKSB7XG4gICAgICAgIGNvbnN0IGZvbnRXZWlnaHQgPSB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydmb250LXdlaWdodCddO1xuICAgICAgICB0aGlzLmZvbnRXZWlnaHRTZWxlY3Rvci52YWx1ZSA9IGZvbnRXZWlnaHQgPT09ICcnID8gJ25vcm1hbCcgOiBmb250V2VpZ2h0O1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0Rm9udFZhcmlhbnRWYWx1ZUFjY29yZGluZ1RvQ2xhc3MoKSB7XG4gICAgICAgIGNvbnN0IGZvbnRWYXJpYW50ID0gdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZm9udC12YXJpYW50J107XG4gICAgICAgIHRoaXMuZm9udFZhcmlhbnRTZWxlY3Rvci52YWx1ZSA9IGZvbnRWYXJpYW50ID09PSAnJyA/ICdub3JtYWwnIDogZm9udFZhcmlhbnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRGb250Q29sb3JWYWx1ZUFjY29yZGluZ1RvQ2xhc3MoKSB7XG4gICAgICAgIGNvbnN0IGZvbnRDb2xvciA9IHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2NvbG9yJ107XG4gICAgICAgIHRoaXMuZm9udENvbG9ySW5wdXQudmFsdWUgPSBjb2xvclRvSGV4KGZvbnRDb2xvcik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmb250RmFtaWx5Q29tcG9uZW50KGZvbnQ6IHN0cmluZyk6IEhUTUxEaXZFbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXROYW1lKGZvbnQpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmdyaWQpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zJ10sICcyZnIgMWZyIDFmciAxZnInKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoZm9udClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBCdXR0b25CdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdSZW1vdmUnKVxuICAgICAgICAgICAgICAgIC5zZXROYW1lKGZvbnQpXG4gICAgICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yZW1vdmVGb250KVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IEJ1dHRvbkJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ+KGkScpXG4gICAgICAgICAgICAgICAgLnNldE5hbWUoZm9udClcbiAgICAgICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm1vdmVGb250VG9UaGVGcm9udClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBCdXR0b25CdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCfihpMnKVxuICAgICAgICAgICAgICAgIC5zZXROYW1lKGZvbnQpXG4gICAgICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5tb3ZlRm9udEJlaGluZClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICB9XG5cbiAgICBwcml2YXRlIGN1cnJlbnRGb250c0NvbXBvbmVudHNDb250YWluZXIoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0N1cnJlbnQgQ29tcG9uZW50IEZvbnRzJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuY3VycmVudEZvbnRzRWxlbWVudHNDb250YWluZXIuYnVpbGQoKSlcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICApXG5cbiAgICAgICAgaWYodGhpcy5jdXJyZW50Rm9udEZhbWlsaWVzQXJyYXkubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICBjb250YWluZXIuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCAnYmxvY2snKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29udGFpbmVyLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgJ25vbmUnKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZEZvbnQoKSB7XG4gICAgICAgIGlmKCF0aGlzLmN1cnJlbnRGb250RmFtaWxpZXNBcnJheS5pbmNsdWRlcyh0aGlzLmZvbnRTZWxlY3Rvci52YWx1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEZvbnRGYW1pbGllc0FycmF5LnB1c2godGhpcy5mb250U2VsZWN0b3IudmFsdWUpXG5cbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2ZvbnQtZmFtaWx5J10gPSB0aGlzLmN1cnJlbnRGb250RmFtaWxpZXNBcnJheS5qb2luKCcsICcpO1xuXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRGb250c0VsZW1lbnRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZm9udEZhbWlseUNvbXBvbmVudCh0aGlzLmZvbnRTZWxlY3Rvci52YWx1ZSkpO1xuXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRGb250c0NvbnRhaW5lci5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksICdibG9jaycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW1vdmVGb250KGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGZvbnROYW1lID0gZXZlbnQudGFyZ2V0WyduYW1lJ107XG5cbiAgICAgICAgY29uc3QgZm9udEluZGV4ID0gdGhpcy5jdXJyZW50Rm9udEZhbWlsaWVzQXJyYXkuZmluZEluZGV4KChmb250KSA9PiBmb250ID09PSBmb250TmFtZSk7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50Rm9udEZhbWlsaWVzQXJyYXkuc3BsaWNlKGZvbnRJbmRleCwgMSk7XG5cbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZm9udC1mYW1pbHknXSA9IHRoaXMuY3VycmVudEZvbnRGYW1pbGllc0FycmF5LmpvaW4oJywgJyk7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50Rm9udHNFbGVtZW50c0NvbnRhaW5lci5yZW1vdmVDaGlsZE5vZGVCeU5hbWUoZm9udE5hbWUpO1xuXG4gICAgICAgIGlmKHRoaXMuY3VycmVudEZvbnRzRWxlbWVudHNDb250YWluZXIuZ2V0QWxsQ2hpbGRzKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRGb250c0NvbnRhaW5lci5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksICdub25lJylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgbW92ZUZvbnRUb1RoZUZyb250KGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGZvbnROYW1lID0gZXZlbnQudGFyZ2V0WyduYW1lJ107XG5cbiAgICAgICAgY29uc3QgZm9udEluZGV4ID0gdGhpcy5jdXJyZW50Rm9udEZhbWlsaWVzQXJyYXkuZmluZEluZGV4KChmb250KSA9PiBmb250ID09PSBmb250TmFtZSk7XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRFbGVtZW50ID0gdGhpcy5jdXJyZW50Rm9udEZhbWlsaWVzQXJyYXkuc3BsaWNlKGZvbnRJbmRleCwgMSlbMF07XG5cbiAgICAgICAgdGhpcy5jdXJyZW50Rm9udEZhbWlsaWVzQXJyYXkuc3BsaWNlKGZvbnRJbmRleCAtIDEsIDAsIHNlbGVjdGVkRWxlbWVudCk7XG5cbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZm9udC1mYW1pbHknXSA9IHRoaXMuY3VycmVudEZvbnRGYW1pbGllc0FycmF5Lm1hcCgoZm9udCkgPT4gZm9udCkuam9pbignLCAnKTtcblxuICAgICAgICB0aGlzLmN1cnJlbnRGb250c0VsZW1lbnRzQ29udGFpbmVyLm1vb3ZlQ2hpbGRVcHBlclBvc2l0aW9uQnlOYW1lKGZvbnROYW1lKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG1vdmVGb250QmVoaW5kKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGZvbnROYW1lID0gZXZlbnQudGFyZ2V0WyduYW1lJ107XG5cbiAgICAgICAgY29uc3QgZm9udEluZGV4ID0gdGhpcy5jdXJyZW50Rm9udEZhbWlsaWVzQXJyYXkuZmluZEluZGV4KChmb250KSA9PiBmb250ID09PSBmb250TmFtZSk7XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRFbGVtZW50ID0gdGhpcy5jdXJyZW50Rm9udEZhbWlsaWVzQXJyYXkuc3BsaWNlKGZvbnRJbmRleCwgMSlbMF07XG5cbiAgICAgICAgdGhpcy5jdXJyZW50Rm9udEZhbWlsaWVzQXJyYXkuc3BsaWNlKGZvbnRJbmRleCArIDEsIDAsIHNlbGVjdGVkRWxlbWVudCk7XG5cbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZm9udC1mYW1pbHknXSA9IHRoaXMuY3VycmVudEZvbnRGYW1pbGllc0FycmF5Lm1hcCgoZm9udCkgPT4gZm9udCkuam9pbignLCAnKTtcblxuICAgICAgICB0aGlzLmN1cnJlbnRGb250c0VsZW1lbnRzQ29udGFpbmVyLm1vb3ZlQ2hpbGRMb3dlclBvc2l0aW9uQnlOYW1lKGZvbnROYW1lKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUZvbnRTaXplKCkge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydmb250LXNpemUnXSA9IGAke3RoaXMuZm9udFNpemVJbnB1dC52YWx1ZX0ke3RoaXMuZm9udFVuaXRTZWxlY3Rvci52YWx1ZX1gXG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVGb250U3R5bGUoKSB7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2ZvbnQtc3R5bGUnXSA9IHRoaXMuZm9udFN0eWxlU2VsZWN0b3IudmFsdWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVGb250V2VpZ2h0KCkge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydmb250LXdlaWdodCddID0gdGhpcy5mb250V2VpZ2h0U2VsZWN0b3IudmFsdWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVGb250VmFyaWFuKCkge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydmb250LXZhcmlhbnQnXSA9IHRoaXMuZm9udFZhcmlhbnRTZWxlY3Rvci52YWx1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUZvbnRDb2xvcigpIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnY29sb3InXSA9IHRoaXMuZm9udENvbG9ySW5wdXQudmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGNsYXNzTmFtZVVwZGF0ZWQobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQgPSBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXMobmFtZSk7XG4gICAgICAgIHRoaXMuc2V0SW5pdGlhbFZhbHVlc0FjY29yZGluZ1RvQ2xhc3MoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29udGFpbmVyQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvQ29udGFpbmVyQnVpbGRlcic7XG5pbXBvcnQgTGFiZWxCdWlsZGVyIGZyb20gJy4uL21vZGVscy9MYWJlbEJ1aWxkZXInO1xuXG5pbXBvcnQgeyBTdHlsZU5hbWVFbnVtIH0gZnJvbSAnLi4vZW51bXMvc3R5bGUtbmFtZS5lbnVtJztcbmltcG9ydCB7IEV2ZW50VHlwZUVudW0gfSBmcm9tICcuLi9lbnVtcy9ldmVudC10eXBlLmVudW0nO1xuaW1wb3J0IHsgRmxleERpcmVjdGlvbkVudW0gfSBmcm9tICcuLi9lbnVtcy9mbGV4LWRpcmVjdGlvbi5lbnVtJztcbmltcG9ydCB7IERpc3BsYXlUeXBlc0VudW0gfSBmcm9tICcuLi9lbnVtcy9kaXNwbGF5LXR5cGVzLmVudW0nO1xuaW1wb3J0IHsgQWxpZ25GbGV4SXRlbXNFbnVtIH0gZnJvbSAnLi4vZW51bXMvYWxpZ24tZmxleC1pdGVtcy5lbnVtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBjb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgZG9tRWxlbWVudFN0eWxlU2hlZXQ6IENTU1N0eWxlRGVjbGFyYXRpb247XG5cbiAgICBwcml2YXRlIGxhYmVsOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBzdHlsZTogc3RyaW5nO1xuICAgIHByaXZhdGUgY2hhbmdlRWxlbWVudDogSFRNTElucHV0RWxlbWVudCB8IEhUTUxTZWxlY3RFbGVtZW50IHwgSFRNTFRleHRBcmVhRWxlbWVudDtcbiAgICBwcml2YXRlIGV2ZW50VHlwZTogRXZlbnRUeXBlRW51bTtcbiAgICBwcml2YXRlIHVuaXQ6IHN0cmluZztcblxuICAgIHByaXZhdGUgemVyb1ZhbHVlOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgZG9tRWxlbWVudFN0eWxlU2hlZXQ6IENTU1N0eWxlRGVjbGFyYXRpb24sXG4gICAgICAgIHN0eWxlOiBzdHJpbmcsXG4gICAgICAgIGxhYmVsOiBzdHJpbmcsXG4gICAgICAgIGNoYW5nZUVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MU2VsZWN0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnQsXG4gICAgICAgIGV2ZW50VHlwZTogRXZlbnRUeXBlRW51bSxcbiAgICAgICAgdW5pdCA9ICcnLFxuICAgICkge1xuICAgICAgICB0aGlzLnN0eWxlID0gc3R5bGU7XG4gICAgICAgIHRoaXMubGFiZWwgPSBsYWJlbDtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCA9IGRvbUVsZW1lbnRTdHlsZVNoZWV0O1xuICAgICAgICB0aGlzLmNoYW5nZUVsZW1lbnQgPSBjaGFuZ2VFbGVtZW50O1xuICAgICAgICB0aGlzLmV2ZW50VHlwZSA9IGV2ZW50VHlwZTtcbiAgICAgICAgdGhpcy51bml0ID0gdW5pdDtcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnRzKCk7XG4gICAgfVxuXG4gICAgZ2V0IGNvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkQ29tcG9uZW50cygpIHtcbiAgICAgICAgdGhpcy51cGRhdGVQcm9wZXJ0eSA9IHRoaXMudXBkYXRlUHJvcGVydHkuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmNoYW5nZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmV2ZW50VHlwZSwgdGhpcy51cGRhdGVQcm9wZXJ0eSlcblxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydmbGV4LWRpcmVjdGlvbiddLCBGbGV4RGlyZWN0aW9uRW51bS5jb2x1bW4pXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnYWxpZ24taXRlbXMnXSwgQWxpZ25GbGV4SXRlbXNFbnVtLnN0cmV0Y2gpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQodGhpcy5sYWJlbClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuY2hhbmdlRWxlbWVudClcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgfVxuXG4gICAgcHVibGljIHNldFZhbHVlKHZhbHVlID0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VFbGVtZW50LnZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZVN0eWxlU2hlZXQoZG9tRWxlbWVudFN0eWxlU2hlZXQ6IENTU1N0eWxlRGVjbGFyYXRpb24pIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCA9IGRvbUVsZW1lbnRTdHlsZVNoZWV0O1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlUHJvcGVydHkoKSB7XG4gICAgICAgIGlmKHBhcnNlSW50KHRoaXMuY2hhbmdlRWxlbWVudC52YWx1ZSkgPT09IHRoaXMuemVyb1ZhbHVlKXtcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbdGhpcy5zdHlsZV0gPSAnJztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0W3RoaXMuc3R5bGVdID0gdGhpcy5jaGFuZ2VFbGVtZW50LnZhbHVlICsgdGhpcy51bml0O1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRaZXJvVmFsdWUodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLnplcm9WYWx1ZSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29udGFpbmVyQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvQ29udGFpbmVyQnVpbGRlcic7XG5pbXBvcnQgSW5wdXRCdWlsZGVyIGZyb20gJy4uL21vZGVscy9JbnB1dEJ1aWxkZXInO1xuaW1wb3J0IExhYmVsQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvTGFiZWxCdWlsZGVyJztcbmltcG9ydCBCdXR0b25CdWlsZGVyIGZyb20gJy4uL21vZGVscy9CdXR0b25CdWlsZGVyJztcblxuaW1wb3J0IHsgU3R5bGVOYW1lRW51bSB9IGZyb20gJy4uL2VudW1zL3N0eWxlLW5hbWUuZW51bSc7XG5pbXBvcnQgeyBJbnB1dFR5cGVFbnVtIH0gZnJvbSAnLi4vZW51bXMvaW5wdXQtdHlwZS5lbnVtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2VuZXJpY1ByaW1hcnlJbnB1dENvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBkb21FbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBsYWJlbDogc3RyaW5nO1xuICAgIHByaXZhdGUgc3R5bGU6IHN0cmluZztcblxuICAgIHByaXZhdGUgcHJvcGVydHlWYWx1ZUlucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSBjYWxsYmFjazogKCkgPT4gYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKGRvbUVsZW1lbnQ6IEhUTUxFbGVtZW50LCBzdHlsZTogc3RyaW5nLCBsYWJlbDogc3RyaW5nLCBjYWxsYmFjazogKCkgPT4gYm9vbGVhbikge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICAgICAgICB0aGlzLmxhYmVsID0gbGFiZWw7XG4gICAgICAgIHRoaXMuc3R5bGUgPSBzdHlsZTtcblxuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSB0aGlzLmNhbGxiYWNrLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnRzKCk7XG4gICAgfVxuXG4gICAgZ2V0IGNvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkQ29tcG9uZW50cygpIHtcbiAgICAgICAgdGhpcy51cGRhdGVQcm9wZXJ0eSA9IHRoaXMudXBkYXRlUHJvcGVydHkuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnByb3BlcnR5VmFsdWVJbnB1dCA9IG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS50ZXh0KVxuICAgICAgICAgICAgLnNldFZhbHVlKHRoaXMuZG9tRWxlbWVudFt0aGlzLnN0eWxlXSlcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMudXBkYXRlUHJvcGVydHkpXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIGNvbnN0IGVsZW1lbnRzQ29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMucHJvcGVydHlWYWx1ZUlucHV0KVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgICAgIG5ldyBCdXR0b25CdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnQ2hhbmdlJylcbiAgICAgICAgICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy51cGRhdGVQcm9wZXJ0eSlcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5ib3JkZXIsICcxcHggc29saWQgIzRDQUY1MCcpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5wYWRkaW5nLCAnM3B4JylcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCh0aGlzLmxhYmVsKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQoZWxlbWVudHNDb250YWluZXIpXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlUHJvcGVydHkoZXZlbnQ6IE1vdXNlRXZlbnQgfCBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGlmICggZXZlbnQudHlwZSA9PT0gJ2NsaWNrJ1xuICAgICAgICAgICAgfHwgKGV2ZW50IGFzIEtleWJvYXJkRXZlbnQpLmtleSA9PT0gJ0VudGVyJ1xuICAgICAgICAgICAgfHwgKGV2ZW50IGFzIEtleWJvYXJkRXZlbnQpLmNvZGUgPT09ICcxMydcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBpZih0aGlzLmNhbGxiYWNrKCkpe1xuICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFt0aGlzLnN0eWxlXSA9IHRoaXMucHJvcGVydHlWYWx1ZUlucHV0LnZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BlcnR5VmFsdWVJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IENvbnRhaW5lckJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0NvbnRhaW5lckJ1aWxkZXInO1xuaW1wb3J0IExhYmVsQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvTGFiZWxCdWlsZGVyJztcbmltcG9ydCBTZWxlY3RvckZyb21FbnVtQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXInO1xuXG5pbXBvcnQgeyBTdHlsZU5hbWVFbnVtIH0gZnJvbSAnLi4vZW51bXMvc3R5bGUtbmFtZS5lbnVtJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdlbmVyaWNQcmltYXJ5U2VsZWN0b3JDb21wb25lbnQge1xuICAgIHByaXZhdGUgZG9tRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBjb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgbGFiZWw6IHN0cmluZztcbiAgICBwcml2YXRlIGF0cmlidXRlVG9Nb2RpZnk6IHN0cmluZztcbiAgICBwcml2YXRlIG9wdGlvbnM6IFJlY29yZDxzdHJpbmcsc3RyaW5nPjtcbiAgICBwcml2YXRlIHByb3BlcnR5U2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IoZG9tRWxlbWVudDogSFRNTEVsZW1lbnQsIGF0cmlidXRlVG9Nb2RpZnk6IHN0cmluZywgbGFiZWw6IHN0cmluZywgb3B0aW9uczogUmVjb3JkPHN0cmluZyxzdHJpbmc+KSB7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gICAgICAgIHRoaXMubGFiZWwgPSBsYWJlbDtcbiAgICAgICAgdGhpcy5hdHJpYnV0ZVRvTW9kaWZ5ID0gYXRyaWJ1dGVUb01vZGlmeTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnRzKCk7XG4gICAgfVxuXG4gICAgZ2V0IGNvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkQ29tcG9uZW50cygpIHtcbiAgICAgICAgdGhpcy51cGRhdGVQcm9wZXJ0eSA9IHRoaXMudXBkYXRlUHJvcGVydHkuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnByb3BlcnR5U2VsZWN0b3IgPSBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIodGhpcy5vcHRpb25zKVxuICAgICAgICAgICAgLnNlbGVjdE9wdGlvbih0aGlzLmRvbUVsZW1lbnRbdGhpcy5hdHJpYnV0ZVRvTW9kaWZ5XSlcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnVwZGF0ZVByb3BlcnR5KVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICBjb25zdCBlbGVtZW50c0NvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLnByb3BlcnR5U2VsZWN0b3IpXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uYm9yZGVyLCAnMXB4IHNvbGlkICM0Q0FGNTAnKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ucGFkZGluZywgJzNweCcpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQodGhpcy5sYWJlbClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKGVsZW1lbnRzQ29udGFpbmVyKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZVByb3BlcnR5KCkge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRbdGhpcy5hdHJpYnV0ZVRvTW9kaWZ5XSA9IHRoaXMucHJvcGVydHlTZWxlY3Rvci52YWx1ZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29udGFpbmVyQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvQ29udGFpbmVyQnVpbGRlcic7XG5pbXBvcnQgSW5wdXRCdWlsZGVyIGZyb20gJy4uL21vZGVscy9JbnB1dEJ1aWxkZXInO1xuaW1wb3J0IExhYmVsQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvTGFiZWxCdWlsZGVyJztcbmltcG9ydCBCdXR0b25CdWlsZGVyIGZyb20gJy4uL21vZGVscy9CdXR0b25CdWlsZGVyJztcbmltcG9ydCBSYXdIVE1MQ29ucG9uZW50IGZyb20gJy4uLy4uL2h0bWwtY29tcG9uZW50cy9SYXdIVE1MQ29tcG9uZW50JztcblxuaW1wb3J0IGRlZmluZUVsZW1lbnRJZCBmcm9tICcuLi9mdW5jdGlvbnMvZGVmaW5lLWVsZW1lbnQtaWQnO1xuXG5pbXBvcnQgeyBTdHlsZU5hbWVFbnVtIH0gZnJvbSAnLi4vZW51bXMvc3R5bGUtbmFtZS5lbnVtJztcbmltcG9ydCB7IElucHV0VHlwZUVudW0gfSBmcm9tICcuLi9lbnVtcy9pbnB1dC10eXBlLmVudW0nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJZERlZmluaXRpb25Db21wb25lbnQge1xuICAgIHByaXZhdGUgZG9tRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBjb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlczogSFRNTEVsZW1lbnRbXTtcblxuICAgIHByaXZhdGUgcHJvcGVydHlWYWx1ZUlucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IoZG9tRWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgLy8gVE9ETzogc2kgbGEgY2xhc2Ugc29sbyBsYSB1dGlsaXphIGVzZSB1bmljbyBjb21wb25lbnRlLFxuICAgICAgICAvLyBxdWl6YXMgZWwgbm9tYnJlIGRlIGxhIGNsYXNlIGNzcyBkZWJlcmlhIGlyIGNvbiAjIHkgbm8gY29uIHB1bnRvLi4uXG5cbiAgICAgICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgICAgICAgSWREZWZpbml0aW9uQ29tcG9uZW50Lmluc3RhbmNlcyA9IFJhd0hUTUxDb25wb25lbnQuaW5zdGFuY2VzO1xuICAgICAgICB0aGlzLmFkZENvbXBvbmVudHMoKTtcbiAgICB9XG5cbiAgICBnZXQgY29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRDb21wb25lbnRzKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVByb3BlcnR5ID0gdGhpcy51cGRhdGVQcm9wZXJ0eS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMucHJvcGVydHlWYWx1ZUlucHV0ID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLnRleHQpXG4gICAgICAgICAgICAuc2V0VmFsdWUodGhpcy5kb21FbGVtZW50LmlkKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy51cGRhdGVQcm9wZXJ0eSlcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgY29uc3QgZWxlbWVudHNDb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5wcm9wZXJ0eVZhbHVlSW5wdXQpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICAgICAgbmV3IEJ1dHRvbkJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdDaGFuZ2UnKVxuICAgICAgICAgICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnVwZGF0ZVByb3BlcnR5KVxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmJvcmRlciwgJzFweCBzb2xpZCAjNENBRjUwJylcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLnBhZGRpbmcsICczcHgnKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdJZCBEZWZpbml0aW9uJylcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKGVsZW1lbnRzQ29udGFpbmVyKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZVByb3BlcnR5KGV2ZW50OiBNb3VzZUV2ZW50IHwgS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAoIHRoaXMucHJvcGVydHlWYWx1ZUlucHV0LnZhbHVlICE9PSB0aGlzLmRvbUVsZW1lbnQuaWRcbiAgICAgICAgICAgICYmICggZXZlbnQudHlwZSA9PT0gJ2NsaWNrJ1xuICAgICAgICAgICAgfHwgKGV2ZW50IGFzIEtleWJvYXJkRXZlbnQpLmtleSA9PT0gJ0VudGVyJ1xuICAgICAgICAgICAgfHwgKGV2ZW50IGFzIEtleWJvYXJkRXZlbnQpLmNvZGUgPT09ICcxMydcbiAgICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gZGVmaW5lRWxlbWVudElkKHRoaXMucHJvcGVydHlWYWx1ZUlucHV0LnZhbHVlLCBJZERlZmluaXRpb25Db21wb25lbnQuaW5zdGFuY2VzKTtcblxuICAgICAgICAgICAgICAgIGlmKGlkID09PSAnJyl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50LmlkID0gaWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wZXJ0eVZhbHVlSW5wdXQudmFsdWUgPSB0aGlzLmRvbUVsZW1lbnQuaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgQ29udGFpbmVyQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvQ29udGFpbmVyQnVpbGRlcic7XG5pbXBvcnQgTGFiZWxCdWlsZGVyIGZyb20gJy4uL21vZGVscy9MYWJlbEJ1aWxkZXInO1xuaW1wb3J0IElucHV0QnVpbGRlciBmcm9tICcuLi9tb2RlbHMvSW5wdXRCdWlsZGVyJztcbmltcG9ydCBTZWxlY3RvckZyb21FbnVtQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXInO1xuXG5pbXBvcnQgZ2V0VW5pdCBmcm9tICcuLi9mdW5jdGlvbnMvZ2V0LWNzcy11bml0JztcblxuaW1wb3J0IHsgU3R5bGVOYW1lRW51bSB9IGZyb20gJy4uL2VudW1zL3N0eWxlLW5hbWUuZW51bSc7XG5pbXBvcnQgeyBJbnB1dFR5cGVFbnVtIH0gZnJvbSAnLi4vZW51bXMvaW5wdXQtdHlwZS5lbnVtJztcbmltcG9ydCB7IFVuaXRzRW51bSB9IGZyb20gJy4uL2VudW1zL3VuaXRzLmVudW0nO1xuaW1wb3J0IHsgRGlzcGxheVR5cGVzRW51bSB9IGZyb20gJy4uL2VudW1zL2Rpc3BsYXktdHlwZXMuZW51bSc7XG5pbXBvcnQgeyBGbGV4RGlyZWN0aW9uRW51bSB9IGZyb20gJy4uL2VudW1zL2ZsZXgtZGlyZWN0aW9uLmVudW0nO1xuaW1wb3J0IHsgQWxpZ25GbGV4SXRlbXNFbnVtIH0gZnJvbSAnLi4vZW51bXMvYWxpZ24tZmxleC1pdGVtcy5lbnVtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXRBbmRVbml0c1NlbGVjdG9yQ29tcG9uZW50IHtcbiAgICBwcml2YXRlIGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBkb21FbGVtZW50U3R5bGVTaGVldDogQ1NTU3R5bGVEZWNsYXJhdGlvbjtcblxuICAgIHByaXZhdGUgbGFiZWw6IHN0cmluZztcbiAgICBwcml2YXRlIHN0eWxlOiBzdHJpbmc7XG5cbiAgICBwcml2YXRlIHByb3BlcnR5VmFsdWVJbnB1dDogSW5wdXRCdWlsZGVyO1xuICAgIHByaXZhdGUgdW5pdHNTZWxlY3RvcklucHV0OiBTZWxlY3RvckZyb21FbnVtQnVpbGRlcjtcblxuICAgIHByaXZhdGUgemVyb1ZhbHVlOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihkb21FbGVtZW50U3R5bGVTaGVldDogQ1NTU3R5bGVEZWNsYXJhdGlvbiwgc3R5bGU6IHN0cmluZywgbGFiZWw6IHN0cmluZykge1xuICAgICAgICB0aGlzLnN0eWxlID0gc3R5bGU7XG4gICAgICAgIHRoaXMubGFiZWwgPSBsYWJlbDtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCA9IGRvbUVsZW1lbnRTdHlsZVNoZWV0O1xuICAgICAgICB0aGlzLmFkZENvbXBvbmVudHMoKTtcbiAgICAgICAgdGhpcy5zZXRJbml0aWFsVmFsdWVzKCk7XG4gICAgfVxuXG4gICAgZ2V0IGNvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkQ29tcG9uZW50cygpIHtcbiAgICAgICAgdGhpcy51cGRhdGVQcm9wZXJ0eSA9IHRoaXMudXBkYXRlUHJvcGVydHkuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnVuaXRzU2VsZWN0b3JJbnB1dCA9IG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihVbml0c0VudW0pXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVQcm9wZXJ0eSlcblxuICAgICAgICB0aGlzLnByb3BlcnR5VmFsdWVJbnB1dCA9IG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS5udW1iZXIpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLnVwZGF0ZVByb3BlcnR5KVxuXG4gICAgICAgIGNvbnN0IGlubmVyQ29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMucHJvcGVydHlWYWx1ZUlucHV0LmJ1aWxkKCkpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy51bml0c1NlbGVjdG9ySW5wdXQuYnVpbGQoKSlcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnZmxleC1kaXJlY3Rpb24nXSwgRmxleERpcmVjdGlvbkVudW0uY29sdW1uKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW1bJ2FsaWduLWl0ZW1zJ10sIEFsaWduRmxleEl0ZW1zRW51bS5zdHJldGNoKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KHRoaXMubGFiZWwpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChpbm5lckNvbnRhaW5lcilcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRJbml0aWFsVmFsdWVzKCkge1xuICAgICAgICB0aGlzLnByb3BlcnR5VmFsdWVJbnB1dC5zZXRWYWx1ZShgJHtwYXJzZUludCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0W3RoaXMuc3R5bGVdKSB8fCAwfWApXG4gICAgICAgIHRoaXMudW5pdHNTZWxlY3RvcklucHV0LnNlbGVjdE9wdGlvbihnZXRVbml0KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbdGhpcy5zdHlsZV0pKVxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlUHJvcGVydHkoKSB7XG4gICAgICAgIGlmKHBhcnNlSW50KHRoaXMucHJvcGVydHlWYWx1ZUlucHV0LmdldFZhbHVlKCkpID09PSB0aGlzLnplcm9WYWx1ZSl7XG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0W3RoaXMuc3R5bGVdID0gJyc7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFt0aGlzLnN0eWxlXSA9XG4gICAgICAgICAgICBgJHt0aGlzLnByb3BlcnR5VmFsdWVJbnB1dC5nZXRWYWx1ZSgpfSR7dGhpcy51bml0c1NlbGVjdG9ySW5wdXQuZ2V0VmFsdWUoKX1gXG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZVN0eWxlU2hlZXQoZG9tRWxlbWVudFN0eWxlU2hlZXQ6IENTU1N0eWxlRGVjbGFyYXRpb24pIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCA9IGRvbUVsZW1lbnRTdHlsZVNoZWV0O1xuICAgICAgICB0aGlzLnNldEluaXRpYWxWYWx1ZXMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0TWluVmFsdWUodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLnByb3BlcnR5VmFsdWVJbnB1dC5zZXRNaW4odmFsdWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0WmVyb1ZhbHVlKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy56ZXJvVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuIiwiaW1wb3J0IENsYXNzQ2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2UgZnJvbSAnLi4vaW50ZXJmYWNlcy9jbGFzcy1jaGFuZ2Utb2JzZXJ2ZXIuaW50ZXJmYWNlJztcblxuaW1wb3J0IENvbnRhaW5lckJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0NvbnRhaW5lckJ1aWxkZXInO1xuaW1wb3J0IElucHV0QnVpbGRlciBmcm9tICcuLi9tb2RlbHMvSW5wdXRCdWlsZGVyJztcbmltcG9ydCBMYWJlbEJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0xhYmVsQnVpbGRlcic7XG5pbXBvcnQgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL1NlbGVjdG9yRnJvbUVudW1CdWlsZGVyJztcblxuaW1wb3J0IHsgSW5wdXRUeXBlRW51bSB9IGZyb20gJy4uL2VudW1zL2lucHV0LXR5cGUuZW51bSc7XG5pbXBvcnQgeyBVbml0c0VudW0gfSBmcm9tICcuLi9lbnVtcy91bml0cy5lbnVtJztcbmltcG9ydCB7IFN0eWxlTmFtZUVudW0gfSBmcm9tICcuLi9lbnVtcy9zdHlsZS1uYW1lLmVudW0nO1xuXG5pbXBvcnQgQ3NzU3R5bGVTaGVldCBmcm9tICcuLi8uLi9jc3Mtc3R5bGVzaGVldC9jc3Mtc3R5bGVzaGVldCc7XG5cbmltcG9ydCBjYXBpdGFsaXplRmlyc3RMZXR0ZXJzIGZyb20gJy4uL2Z1bmN0aW9ucy9maXJzdC1sZXR0ZXJzLWNhcGl0YWxpemVkJztcbmltcG9ydCBnZXRVbml0IGZyb20gJy4uL2Z1bmN0aW9ucy9nZXQtY3NzLXVuaXQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXJnaW5PclBhZGRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBDbGFzc0NoYW5nZU9ic2VydmVySW50ZXJmYWNlIHtcbiAgICBwcml2YXRlIHR5cGU7XG4gICAgcHJpdmF0ZSBkb21FbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBkb21FbGVtZW50U3R5bGVTaGVldDogQ1NTU3R5bGVEZWNsYXJhdGlvbjtcblxuICAgIHByaXZhdGUgdG9wUHJvcGVydHlWYWx1ZUlucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHByaXZhdGUgcmlndGhQcm9wZXJ0eVZhbHVlSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBib3R0b21Qcm9wZXJ0eVZhbHVlSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBsZWZ0UHJvcGVydHlWYWx1ZUlucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSB0b3BVbml0U2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIHByaXZhdGUgcmlnaHRVbml0U2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIHByaXZhdGUgYm90dG9tVW5pdFNlbGVjdG9yOiBIVE1MU2VsZWN0RWxlbWVudDtcbiAgICBwcml2YXRlIGxlZnRVbml0U2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSBzZWxlY3RBbGxDaGVja0JveDogSFRNTElucHV0RWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKGRvbUVsZW1lbnQ6IEhUTUxFbGVtZW50LCB0eXBlOiAnbWFyZ2luJyB8ICdwYWRkaW5nJywgKSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQgPSBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXModGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdFswXSlcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnRzKCk7XG4gICAgICAgIHRoaXMuc2V0VmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpO1xuICAgICAgICB0aGlzLnVwZGF0ZVByb3BlcnR5KClcbiAgICB9XG5cbiAgICBnZXQgY29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRDb21wb25lbnRzKCkge1xuICAgICAgICAvLyBUT0RPOiBmYWx0YSBhZ3JlZ2FyIGVsICFpbXBvcnRhbnQgeSBxdWl6YXMgbG9zIGluaGVyaXQgeSBubyBzZSBzaSBoYWJyYSBtYXMgcHJvcGllZGFkZXNcbiAgICAgICAgLy8gcXVpemFzIHRvZG8gZXNvIGRlYmEgZXN0YXIgZW4gZWwgc2VsZWN0b3IgZGUgbGEgdW5pZGFkLi4uXG5cbiAgICAgICAgdGhpcy51cGRhdGVQcm9wZXJ0eSA9IHRoaXMudXBkYXRlUHJvcGVydHkuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnNlbGVjdEFsbENoZWNrQm94ID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLmNoZWNrYm94KVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudXBkYXRlUHJvcGVydHkpXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIGNvbnN0IHNlbGVjdEFsbENvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdTZWxlY3QgQWxsJylcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuc2VsZWN0QWxsQ2hlY2tCb3gpXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIHRoaXMudG9wUHJvcGVydHlWYWx1ZUlucHV0ID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLm51bWJlcilcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMudXBkYXRlUHJvcGVydHkpXG4gICAgICAgICAgICAuYnVpbGQoKTtcbiAgICAgICAgdGhpcy5yaWd0aFByb3BlcnR5VmFsdWVJbnB1dCA9IG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS5udW1iZXIpXG4gICAgICAgICAgICAuZGlzYWJsZWQodGhpcy5zZWxlY3RBbGxDaGVja0JveC5jaGVja2VkKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy51cGRhdGVQcm9wZXJ0eSlcbiAgICAgICAgICAgIC5idWlsZCgpO1xuICAgICAgICB0aGlzLmJvdHRvbVByb3BlcnR5VmFsdWVJbnB1dCA9IG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS5udW1iZXIpXG4gICAgICAgICAgICAuZGlzYWJsZWQodGhpcy5zZWxlY3RBbGxDaGVja0JveC5jaGVja2VkKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy51cGRhdGVQcm9wZXJ0eSlcbiAgICAgICAgICAgIC5idWlsZCgpO1xuICAgICAgICB0aGlzLmxlZnRQcm9wZXJ0eVZhbHVlSW5wdXQgPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0ubnVtYmVyKVxuICAgICAgICAgICAgLmRpc2FibGVkKHRoaXMuc2VsZWN0QWxsQ2hlY2tCb3guY2hlY2tlZClcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMudXBkYXRlUHJvcGVydHkpXG4gICAgICAgICAgICAuYnVpbGQoKTtcblxuICAgICAgICB0aGlzLnRvcFVuaXRTZWxlY3RvciA9IG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihVbml0c0VudW0pXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVQcm9wZXJ0eSlcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgIHRoaXMuYm90dG9tVW5pdFNlbGVjdG9yID0gbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKFVuaXRzRW51bSlcbiAgICAgICAgICAgIC5kaXNhYmxlZCh0aGlzLnNlbGVjdEFsbENoZWNrQm94LmNoZWNrZWQpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVQcm9wZXJ0eSlcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgIHRoaXMucmlnaHRVbml0U2VsZWN0b3IgPSBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIoVW5pdHNFbnVtKVxuICAgICAgICAgICAgLmRpc2FibGVkKHRoaXMuc2VsZWN0QWxsQ2hlY2tCb3guY2hlY2tlZClcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnVwZGF0ZVByb3BlcnR5KVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgdGhpcy5sZWZ0VW5pdFNlbGVjdG9yID0gbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKFVuaXRzRW51bSlcbiAgICAgICAgICAgIC5kaXNhYmxlZCh0aGlzLnNlbGVjdEFsbENoZWNrQm94LmNoZWNrZWQpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVQcm9wZXJ0eSlcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgY29uc3QgdG9wQ29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ1QnKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy50b3BQcm9wZXJ0eVZhbHVlSW5wdXQpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy50b3BVbml0U2VsZWN0b3IpXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIGNvbnN0IHJpZ2h0Q29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ1InKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5yaWd0aFByb3BlcnR5VmFsdWVJbnB1dClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLnJpZ2h0VW5pdFNlbGVjdG9yKVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICBjb25zdCBib3R0b21Db250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnQicpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmJvdHRvbVByb3BlcnR5VmFsdWVJbnB1dClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmJvdHRvbVVuaXRTZWxlY3RvcilcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgY29uc3QgbGVmdENvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdMJylcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMubGVmdFByb3BlcnR5VmFsdWVJbnB1dClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmxlZnRVbml0U2VsZWN0b3IpXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIGNvbnN0IGlucHV0VmFsdWVzQ29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRvcENvbnRhaW5lcilcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChyaWdodENvbnRhaW5lcilcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChib3R0b21Db250YWluZXIpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobGVmdENvbnRhaW5lcilcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5ib3JkZXIsICcxcHggc29saWQgIzRDQUY1MCcpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5wYWRkaW5nLCAnM3B4JylcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldElubmVyVGV4dChgJHtjYXBpdGFsaXplRmlyc3RMZXR0ZXJzKHRoaXMudHlwZSwgJyAnLCAnICcpfSBTZWxlY3RvcmApXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChzZWxlY3RBbGxDb250YWluZXIpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQoaW5wdXRWYWx1ZXNDb250YWluZXIpXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlUHJvcGVydHkoKSB7XG4gICAgICAgIGxldCB7dG9wLCByaWdodCwgYm90dG9tLCBsZWZ0fSA9IHRoaXMuZ2V0Q3VycmVudFByb3BlcnRpZXMoKTtcblxuICAgICAgICBpZih0aGlzLnNlbGVjdEFsbENoZWNrQm94LmNoZWNrZWQpe1xuICAgICAgICAgICAgdGhpcy5yaWd0aFByb3BlcnR5VmFsdWVJbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbVByb3BlcnR5VmFsdWVJbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmxlZnRQcm9wZXJ0eVZhbHVlSW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5yaWdodFVuaXRTZWxlY3Rvci5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbVVuaXRTZWxlY3Rvci5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmxlZnRVbml0U2VsZWN0b3IuZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICBpZih0aGlzLnRvcFVuaXRTZWxlY3Rvci52YWx1ZSA9PT0gVW5pdHNFbnVtLmF1dG8pe1xuICAgICAgICAgICAgICAgIHRvcCA9ICdhdXRvJztcbiAgICAgICAgICAgICAgICByaWdodCA9ICdhdXRvJztcbiAgICAgICAgICAgICAgICBib3R0b20gPSAnYXV0byc7XG4gICAgICAgICAgICAgICAgbGVmdCA9ICdhdXRvJztcblxuICAgICAgICAgICAgICAgIHRoaXMudG9wUHJvcGVydHlWYWx1ZUlucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ3RoUHJvcGVydHlWYWx1ZUlucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmJvdHRvbVByb3BlcnR5VmFsdWVJbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5sZWZ0UHJvcGVydHlWYWx1ZUlucHV0LmRpc2FibGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHRoaXMucmlnaHRVbml0U2VsZWN0b3IudmFsdWUgPSB0aGlzLnRvcFVuaXRTZWxlY3Rvci52YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmJvdHRvbVVuaXRTZWxlY3Rvci52YWx1ZSA9IHRoaXMudG9wVW5pdFNlbGVjdG9yLnZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMubGVmdFVuaXRTZWxlY3Rvci52YWx1ZSA9IHRoaXMudG9wVW5pdFNlbGVjdG9yLnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy50b3BQcm9wZXJ0eVZhbHVlSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ3RoUHJvcGVydHlWYWx1ZUlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgdGhpcy5ib3R0b21Qcm9wZXJ0eVZhbHVlSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnRQcm9wZXJ0eVZhbHVlSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b3BQcm9wZXJ0eVZhbHVlSW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0b3AgPSBgJHt0aGlzLnRvcFByb3BlcnR5VmFsdWVJbnB1dC52YWx1ZX0ke3RoaXMudG9wVW5pdFNlbGVjdG9yLnZhbHVlfWA7XG4gICAgICAgICAgICAgICAgcmlnaHQgPSBgJHt0aGlzLnRvcFByb3BlcnR5VmFsdWVJbnB1dC52YWx1ZX0ke3RoaXMudG9wVW5pdFNlbGVjdG9yLnZhbHVlfWA7XG4gICAgICAgICAgICAgICAgYm90dG9tID0gYCR7dGhpcy50b3BQcm9wZXJ0eVZhbHVlSW5wdXQudmFsdWV9JHt0aGlzLnRvcFVuaXRTZWxlY3Rvci52YWx1ZX1gO1xuICAgICAgICAgICAgICAgIGxlZnQgPSBgJHt0aGlzLnRvcFByb3BlcnR5VmFsdWVJbnB1dC52YWx1ZX0ke3RoaXMudG9wVW5pdFNlbGVjdG9yLnZhbHVlfWA7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJpZ3RoUHJvcGVydHlWYWx1ZUlucHV0LnZhbHVlID0gdGhpcy50b3BQcm9wZXJ0eVZhbHVlSW5wdXQudmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5ib3R0b21Qcm9wZXJ0eVZhbHVlSW5wdXQudmFsdWUgPSB0aGlzLnRvcFByb3BlcnR5VmFsdWVJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnRQcm9wZXJ0eVZhbHVlSW5wdXQudmFsdWUgPSB0aGlzLnRvcFByb3BlcnR5VmFsdWVJbnB1dC52YWx1ZTtcblxuICAgICAgICAgICAgICAgIGlmKHBhcnNlSW50KHRoaXMudG9wUHJvcGVydHlWYWx1ZUlucHV0LnZhbHVlKSA9PT0gMCl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbdGhpcy50eXBlXSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yaWdodFVuaXRTZWxlY3Rvci5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5ib3R0b21Vbml0U2VsZWN0b3IuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubGVmdFVuaXRTZWxlY3Rvci5kaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZih0aGlzLnRvcFVuaXRTZWxlY3Rvci52YWx1ZSA9PT0gVW5pdHNFbnVtLmF1dG8pe1xuICAgICAgICAgICAgICAgIHRvcCA9ICdhdXRvJztcbiAgICAgICAgICAgICAgICB0aGlzLnRvcFByb3BlcnR5VmFsdWVJbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudG9wUHJvcGVydHlWYWx1ZUlucHV0LmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdG9wID0gYCR7dGhpcy50b3BQcm9wZXJ0eVZhbHVlSW5wdXQudmFsdWV9JHt0aGlzLnRvcFVuaXRTZWxlY3Rvci52YWx1ZX1gO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZih0aGlzLnJpZ2h0VW5pdFNlbGVjdG9yLnZhbHVlID09PSBVbml0c0VudW0uYXV0byl7XG4gICAgICAgICAgICAgICAgcmlnaHQgPSAnYXV0byc7XG4gICAgICAgICAgICAgICAgdGhpcy5yaWd0aFByb3BlcnR5VmFsdWVJbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucmlndGhQcm9wZXJ0eVZhbHVlSW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByaWdodCA9IGAke3RoaXMucmlndGhQcm9wZXJ0eVZhbHVlSW5wdXQudmFsdWV9JHt0aGlzLnJpZ2h0VW5pdFNlbGVjdG9yLnZhbHVlfWA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHRoaXMuYm90dG9tVW5pdFNlbGVjdG9yLnZhbHVlID09PSBVbml0c0VudW0uYXV0byl7XG4gICAgICAgICAgICAgICAgYm90dG9tID0gJ2F1dG8nO1xuICAgICAgICAgICAgICAgIHRoaXMuYm90dG9tUHJvcGVydHlWYWx1ZUlucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib3R0b21Qcm9wZXJ0eVZhbHVlSW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBib3R0b20gPSBgJHt0aGlzLmJvdHRvbVByb3BlcnR5VmFsdWVJbnB1dC52YWx1ZX0ke3RoaXMuYm90dG9tVW5pdFNlbGVjdG9yLnZhbHVlfWA7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYodGhpcy5sZWZ0VW5pdFNlbGVjdG9yLnZhbHVlID09PSBVbml0c0VudW0uYXV0byl7XG4gICAgICAgICAgICAgICAgbGVmdCA9ICdhdXRvJztcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnRQcm9wZXJ0eVZhbHVlSW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnRQcm9wZXJ0eVZhbHVlSW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBsZWZ0ID0gYCR7dGhpcy5sZWZ0UHJvcGVydHlWYWx1ZUlucHV0LnZhbHVlfSR7dGhpcy5sZWZ0VW5pdFNlbGVjdG9yLnZhbHVlfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0W3RoaXMudHlwZV0gPSBbdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0XS5qb2luKCcgJyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRWYWx1ZXNBY2NvcmRpbmdUb0NsYXNzKCkge1xuICAgICAgICBjb25zdCB7dG9wLCByaWdodCwgYm90dG9tLCBsZWZ0LCBhbGxFcXVhbH0gPSB0aGlzLmdldEN1cnJlbnRQcm9wZXJ0aWVzKCk7XG5cbiAgICAgICAgdGhpcy5zZWxlY3RBbGxDaGVja0JveC5jaGVja2VkID0gYWxsRXF1YWw7XG5cbiAgICAgICAgdGhpcy50b3BQcm9wZXJ0eVZhbHVlSW5wdXQudmFsdWUgPSBgJHtwYXJzZUludCh0b3ApfWA7XG4gICAgICAgIHRoaXMucmlndGhQcm9wZXJ0eVZhbHVlSW5wdXQudmFsdWUgPSBgJHtwYXJzZUludChyaWdodCl9YDtcbiAgICAgICAgdGhpcy5ib3R0b21Qcm9wZXJ0eVZhbHVlSW5wdXQudmFsdWUgPSBgJHtwYXJzZUludChib3R0b20pfWA7XG4gICAgICAgIHRoaXMubGVmdFByb3BlcnR5VmFsdWVJbnB1dC52YWx1ZSA9IGAke3BhcnNlSW50KGxlZnQpfWA7XG5cbiAgICAgICAgdGhpcy50b3BVbml0U2VsZWN0b3IudmFsdWUgPSBnZXRVbml0KHRvcCk7XG4gICAgICAgIHRoaXMuYm90dG9tVW5pdFNlbGVjdG9yLnZhbHVlID0gZ2V0VW5pdChib3R0b20pO1xuICAgICAgICB0aGlzLnJpZ2h0VW5pdFNlbGVjdG9yLnZhbHVlID0gZ2V0VW5pdChyaWdodCk7XG4gICAgICAgIHRoaXMubGVmdFVuaXRTZWxlY3Rvci52YWx1ZSA9IGdldFVuaXQobGVmdCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRDdXJyZW50UHJvcGVydGllcygpOiBTdHlsZXNSZXR1cm5PYmplY3RJbnRlcmZhY2Uge1xuICAgICAgICBjb25zdCB0b3AgPSB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0W2Ake3RoaXMudHlwZX0tdG9wYF07XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFtgJHt0aGlzLnR5cGV9LXJpZ2h0YF07XG4gICAgICAgIGNvbnN0IGJvdHRvbSA9IHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbYCR7dGhpcy50eXBlfS1ib3R0b21gXTtcbiAgICAgICAgY29uc3QgbGVmdCA9IHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbYCR7dGhpcy50eXBlfS1sZWZ0YF07XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRvcDogdG9wID8gdG9wIDogJzBweCcsXG4gICAgICAgICAgICByaWdodDogcmlnaHQgPyByaWdodCA6ICcwcHgnLFxuICAgICAgICAgICAgYm90dG9tOiBib3R0b20gPyBib3R0b20gOiAnMHB4JyxcbiAgICAgICAgICAgIGxlZnQ6IGxlZnQgPyBsZWZ0IDogJzBweCcsXG4gICAgICAgICAgICBhbGxFcXVhbDogdG9wID09PSByaWdodCAmJiB0b3AgPT09IGJvdHRvbSAmJiB0b3AgPT09IGxlZnQsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHVibGljIGNsYXNzTmFtZVVwZGF0ZWQobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQgPSBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXMobmFtZSk7XG4gICAgICAgIHRoaXMuc2V0VmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpO1xuICAgICAgICB0aGlzLnVwZGF0ZVByb3BlcnR5KCk7XG4gICAgfVxufVxuXG5pbnRlcmZhY2UgU3R5bGVzUmV0dXJuT2JqZWN0SW50ZXJmYWNlIHtcbiAgICB0b3A6IHN0cmluZyxcbiAgICByaWdodDogc3RyaW5nLFxuICAgIGJvdHRvbTogc3RyaW5nLFxuICAgIGxlZnQ6IHN0cmluZyxcbiAgICBhbGxFcXVhbDogYm9vbGVhbixcbn1cbiIsImltcG9ydCBDbGFzc0NoYW5nZU9ic2VydmVySW50ZXJmYWNlIGZyb20gJy4uL2ludGVyZmFjZXMvY2xhc3MtY2hhbmdlLW9ic2VydmVyLmludGVyZmFjZSc7XG5cbmltcG9ydCBDb250YWluZXJCdWlsZGVyIGZyb20gJy4uL21vZGVscy9Db250YWluZXJCdWlsZGVyJztcbmltcG9ydCBJbnB1dEJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0lucHV0QnVpbGRlcic7XG5pbXBvcnQgTGFiZWxCdWlsZGVyIGZyb20gJy4uL21vZGVscy9MYWJlbEJ1aWxkZXInO1xuaW1wb3J0IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyIGZyb20gJy4uL21vZGVscy9TZWxlY3RvckZyb21FbnVtQnVpbGRlcic7XG5cbmltcG9ydCBDc3NTdHlsZVNoZWV0IGZyb20gJy4uLy4uL2Nzcy1zdHlsZXNoZWV0L2Nzcy1zdHlsZXNoZWV0JztcbmltcG9ydCBnZXRVbml0IGZyb20gJy4uL2Z1bmN0aW9ucy9nZXQtY3NzLXVuaXQnO1xuXG5pbXBvcnQgeyBJbnB1dFR5cGVFbnVtIH0gZnJvbSAnLi4vZW51bXMvaW5wdXQtdHlwZS5lbnVtJztcbmltcG9ydCB7IFVuaXRzRW51bSB9IGZyb20gJy4uL2VudW1zL3VuaXRzLmVudW0nO1xuaW1wb3J0IHsgU3R5bGVOYW1lRW51bSB9IGZyb20gJy4uL2VudW1zL3N0eWxlLW5hbWUuZW51bSc7XG5pbXBvcnQgeyBEaXNwbGF5VHlwZXNFbnVtIH0gZnJvbSAnLi4vZW51bXMvZGlzcGxheS10eXBlcy5lbnVtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2l6ZXNDb21wb25lbnQgaW1wbGVtZW50cyBDbGFzc0NoYW5nZU9ic2VydmVySW50ZXJmYWNlIHtcbiAgICBwcml2YXRlIGRvbUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcbiAgICBwcml2YXRlIGRvbUVsZW1lbnRTdHlsZVNoZWV0OiBDU1NTdHlsZURlY2xhcmF0aW9uO1xuXG4gICAgcHJpdmF0ZSB3aWR0aFNpemVJbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgICBwcml2YXRlIHdpZHRoVW5pdFNlbGVjdG9yOiBIVE1MU2VsZWN0RWxlbWVudDtcblxuICAgIHByaXZhdGUgaGVpZ2h0U2l6ZUlucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHByaXZhdGUgaGVpZ2h0U2l6ZVNlbGVjdG9yOiBIVE1MU2VsZWN0RWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKGRvbUVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQgPSBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXModGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdFswXSk7XG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50cygpO1xuICAgIH1cblxuICAgIGdldCBjb21wb25lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZENvbXBvbmVudHMoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlV2lkdGggPSB0aGlzLnVwZGF0ZVdpZHRoLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlSGVpZ2h0ID0gdGhpcy51cGRhdGVIZWlnaHQuYmluZCh0aGlzKTtcblxuXG4gICAgICAgIHRoaXMuYnVpbGRBbGxDb21wb25lbnRzKCk7XG4gICAgICAgIHRoaXMuc2V0SW5pdGlhbFZhbHVlc0FjY29yZGluZ1RvQ2xhc3MoKTtcblxuICAgICAgICBjb25zdCB3aWR0aENvbXBvbmVudHNDb250YWluZXIgPSB0aGlzLmJ1aWxkU2l6ZUNvbnRhaW5lcihcbiAgICAgICAgICAgICdXaWR0aCcsXG4gICAgICAgICAgICB0aGlzLndpZHRoU2l6ZUlucHV0LFxuICAgICAgICAgICAgdGhpcy53aWR0aFVuaXRTZWxlY3RvclxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGhlaWdodENvbXBvbmVudHNDb250YWluZXIgPSB0aGlzLmJ1aWxkU2l6ZUNvbnRhaW5lcihcbiAgICAgICAgICAgICdIZWlnaHQnLFxuICAgICAgICAgICAgdGhpcy5oZWlnaHRTaXplSW5wdXQsXG4gICAgICAgICAgICB0aGlzLmhlaWdodFNpemVTZWxlY3RvclxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uYm9yZGVyLCAnMXB4IHNvbGlkICM0Q0FGNTAnKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ucGFkZGluZywgJzNweCcpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ1NpemVzJylcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKHdpZHRoQ29tcG9uZW50c0NvbnRhaW5lcilcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChoZWlnaHRDb21wb25lbnRzQ29udGFpbmVyKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICB9XG5cbiAgICBwcml2YXRlIGJ1aWxkU2l6ZUNvbnRhaW5lcihcbiAgICAgICAgbGFiZWw6IHN0cmluZyxcbiAgICAgICAgaW5wdXRDb21wb25lbnQ6IEhUTUxJbnB1dEVsZW1lbnQsXG4gICAgICAgIHNlbGVjdG9yQ29tcG9uZW50OiBIVE1MU2VsZWN0RWxlbWVudCkge1xuICAgICAgICByZXR1cm4gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KGxhYmVsKVxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQoaW5wdXRDb21wb25lbnQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHNlbGVjdG9yQ29tcG9uZW50KVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgIH1cblxuICAgIHByaXZhdGUgYnVpbGRBbGxDb21wb25lbnRzKCkge1xuICAgICAgICB0aGlzLndpZHRoU2l6ZUlucHV0ID0gdGhpcy5idWlsZElucHV0KElucHV0VHlwZUVudW0ubnVtYmVyLCB0aGlzLnVwZGF0ZVdpZHRoKTtcbiAgICAgICAgdGhpcy5oZWlnaHRTaXplSW5wdXQgPSB0aGlzLmJ1aWxkSW5wdXQoSW5wdXRUeXBlRW51bS5udW1iZXIsIHRoaXMudXBkYXRlSGVpZ2h0KTtcblxuICAgICAgICB0aGlzLndpZHRoVW5pdFNlbGVjdG9yID0gdGhpcy5idWlsZFNlbGVjdG9yKHRoaXMudXBkYXRlV2lkdGgpO1xuICAgICAgICB0aGlzLmhlaWdodFNpemVTZWxlY3RvciA9IHRoaXMuYnVpbGRTZWxlY3Rvcih0aGlzLnVwZGF0ZUhlaWdodCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRJbml0aWFsVmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpIHtcbiAgICAgICAgdGhpcy5zZXRXaWR0aFZhbHVlQWNjb3JkaW5nVG9DbGFzcygpO1xuICAgICAgICB0aGlzLnNldEhlaWdodFZhbHVlQWNjb3JkaW5nVG9DbGFzcygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0V2lkdGhWYWx1ZUFjY29yZGluZ1RvQ2xhc3MoKSB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnd2lkdGgnXTtcbiAgICAgICAgdGhpcy53aWR0aFNpemVJbnB1dC52YWx1ZSA9IGAke3BhcnNlSW50KHdpZHRoKSB8fCAwfWA7XG4gICAgICAgIHRoaXMud2lkdGhVbml0U2VsZWN0b3IudmFsdWUgPSBnZXRVbml0KHdpZHRoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEhlaWdodFZhbHVlQWNjb3JkaW5nVG9DbGFzcygpIHtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnaGVpZ2h0J107XG4gICAgICAgIHRoaXMuaGVpZ2h0U2l6ZUlucHV0LnZhbHVlID0gYCR7cGFyc2VJbnQoaGVpZ2h0KSB8fCAwfWA7XG4gICAgICAgIHRoaXMuaGVpZ2h0U2l6ZVNlbGVjdG9yLnZhbHVlID0gZ2V0VW5pdChoZWlnaHQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYnVpbGRJbnB1dChJbnB1dFR5cGVFbnVtOiBJbnB1dFR5cGVFbnVtLCBjYWxsYmFjazogeygpOiB2b2lkfSkge1xuICAgICAgICByZXR1cm4gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtKVxuICAgICAgICAgICAgLnNldE1pbigwKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgY2FsbGJhY2spXG4gICAgICAgICAgICAuYnVpbGQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGJ1aWxkU2VsZWN0b3IoY2FsbGJhY2s6IHsoKTogdm9pZH0pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihVbml0c0VudW0pXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgY2FsbGJhY2spXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlV2lkdGgoKSB7XG4gICAgICAgIGlmKHRoaXMud2lkdGhTaXplSW5wdXQudmFsdWUgPT09ICcwJyl7XG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0LnJlbW92ZVByb3BlcnR5KCd3aWR0aCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ3dpZHRoJ10gPSBgJHt0aGlzLndpZHRoU2l6ZUlucHV0LnZhbHVlfSR7dGhpcy53aWR0aFVuaXRTZWxlY3Rvci52YWx1ZX1gO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlSGVpZ2h0KCkge1xuICAgICAgICBpZih0aGlzLmhlaWdodFNpemVJbnB1dC52YWx1ZSA9PT0gJzAnKXtcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQucmVtb3ZlUHJvcGVydHkoJ2hlaWdodCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2hlaWdodCddID0gYCR7dGhpcy5oZWlnaHRTaXplSW5wdXQudmFsdWV9JHt0aGlzLmhlaWdodFNpemVTZWxlY3Rvci52YWx1ZX1gO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGFzc05hbWVVcGRhdGVkKG5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0ID0gQ3NzU3R5bGVTaGVldC5nZXRSdWxlU3R5bGVzKG5hbWUpO1xuICAgICAgICB0aGlzLnNldEluaXRpYWxWYWx1ZXNBY2NvcmRpbmdUb0NsYXNzKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IENzc1N0eWxlU2hlZXQgZnJvbSAnLi4vLi4vY3NzLXN0eWxlc2hlZXQvY3NzLXN0eWxlc2hlZXQnO1xuaW1wb3J0IENsYXNzQ2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2UgZnJvbSAnLi4vaW50ZXJmYWNlcy9jbGFzcy1jaGFuZ2Utb2JzZXJ2ZXIuaW50ZXJmYWNlJztcblxuaW1wb3J0IEJ1dHRvbkJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0J1dHRvbkJ1aWxkZXInO1xuaW1wb3J0IENvbnRhaW5lckJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0NvbnRhaW5lckJ1aWxkZXInO1xuaW1wb3J0IElucHV0QnVpbGRlciBmcm9tICcuLi9tb2RlbHMvSW5wdXRCdWlsZGVyJztcbmltcG9ydCBMYWJlbEJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0xhYmVsQnVpbGRlcic7XG5cbmltcG9ydCB7IElucHV0VHlwZUVudW0gfSBmcm9tICcuLi9lbnVtcy9pbnB1dC10eXBlLmVudW0nO1xuaW1wb3J0IHsgU3R5bGVOYW1lRW51bSB9IGZyb20gJy4uL2VudW1zL3N0eWxlLW5hbWUuZW51bSc7XG5pbXBvcnQgeyBEaXNwbGF5VHlwZXNFbnVtIH0gZnJvbSAnLi4vZW51bXMvZGlzcGxheS10eXBlcy5lbnVtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXJsRGVmaW5pdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIENsYXNzQ2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2Uge1xuICAgIHByaXZhdGUgZG9tRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBjb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgZG9tRWxlbWVudFN0eWxlU2hlZXQ6IENTU1N0eWxlRGVjbGFyYXRpb247XG5cbiAgICBwcml2YXRlIHVybElucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IoZG9tRWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCA9IENzc1N0eWxlU2hlZXQuZ2V0UnVsZVN0eWxlcyh0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0WzBdKTtcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnRzKCk7XG4gICAgfVxuXG4gICAgZ2V0IGN1cnJlbnRVcmwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnRbJ3NyYyddO1xuICAgIH1cblxuICAgIHNldE5ld1VybCh1cmw/OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50WydzcmMnXSA9IHVybDtcbiAgICB9XG5cbiAgICBnZXQgY29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRDb21wb25lbnRzKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVVybCA9IHRoaXMudXBkYXRlVXJsLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5idWlsZEFsbENvbXBvbmVudHMoKTtcbiAgICAgICAgdGhpcy5zZXRJbml0aWFsVmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpO1xuXG4gICAgICAgIGNvbnN0IGFjY2VwdEJ1dHRvbiA9IG5ldyBCdXR0b25CdWlsZGVyKClcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudXBkYXRlVXJsKVxuICAgICAgICAgICAgLnNldElubmVyVGV4dCgnQXNzaWduJylcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgY29uc3QgdXJsQ29tcG9uZW50c0NvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnQXNzaWduIFVybCcpXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLnVybElucHV0KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChhY2NlcHRCdXR0b24pXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5ib3JkZXIsICcxcHggc29saWQgIzRDQUY1MCcpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5wYWRkaW5nLCAnM3B4JylcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnSW1hZ2UgUHJvcGVydGllcycpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh1cmxDb21wb25lbnRzQ29udGFpbmVyKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICB9XG5cbiAgICBwcml2YXRlIGJ1aWxkQWxsQ29tcG9uZW50cygpIHtcbiAgICAgICAgdGhpcy5idWlsZFVybENvbXBvbmVudHMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGJ1aWxkVXJsQ29tcG9uZW50cygpIHtcbiAgICAgICAgdGhpcy51cmxJbnB1dCA9IG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS51cmwpLmJ1aWxkKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRJbml0aWFsVmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpIHtcbiAgICAgICAgdGhpcy5zZXRVcmxJbml0aWFsVmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0VXJsSW5pdGlhbFZhbHVlc0FjY29yZGluZ1RvQ2xhc3MoKSB7XG4gICAgICAgIHRoaXMudXJsSW5wdXQudmFsdWUgPSB0aGlzLmN1cnJlbnRVcmw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVVcmwoKSB7XG4gICAgICAgIGlmKHRoaXMudXJsSW5wdXQudmFsdWUgPT09ICcnKXtcbiAgICAgICAgICAgIHRoaXMuc2V0TmV3VXJsKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXROZXdVcmwodGhpcy51cmxJbnB1dC52YWx1ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNsYXNzTmFtZVVwZGF0ZWQobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQgPSBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXMobmFtZSk7XG4gICAgICAgIHRoaXMuc2V0SW5pdGlhbFZhbHVlc0FjY29yZGluZ1RvQ2xhc3MoKTtcbiAgICB9XG59XG4iLCJjb25zdCBjb250YW50cyA9IHtcbiAgICBJTlZFUlRFRF9CQUNLR1JPVU5EX0NPTE9SOiAncmdiKDIwOSwyNTUsMjQwKSdcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29udGFudHNcbiIsImV4cG9ydCBlbnVtIEFkZENvbXBvbmVudEVudW0ge1xuICAgIGFkZElkRGVmaW5pdGlvbkNvbXBvbmVudCA9ICdhZGRJZERlZmluaXRpb25Db21wb25lbnQnLFxuICAgIGFkZENsYXNzTmFtZURlZmluaXRpb25Db21wb25lbnQgPSAnYWRkQ2xhc3NOYW1lRGVmaW5pdGlvbkNvbXBvbmVudCcsXG4gICAgYWRkTWFyZ2luU3R5bGVDb21wb25lbnQgPSAnYWRkTWFyZ2luU3R5bGVDb21wb25lbnQnLFxuICAgIGFkZFBhZGRpbmdTdHlsZUNvbXBvbmVudCA9ICdhZGRQYWRkaW5nU3R5bGVDb21wb25lbnQnLFxuICAgIGFkZFNpemVDb21wb25lbnRzID0gJ2FkZFNpemVDb21wb25lbnRzJyxcbiAgICBhZGRGb250Q29tcG9uZW5zID0gJ2FkZEZvbnRDb21wb25lbnMnLFxuICAgIGFkZEJhY2tncm91bmRTZXR0aW5nc0NvbXBvbmVudCA9ICdhZGRCYWNrZ3JvdW5kU2V0dGluZ3NDb21wb25lbnQnLFxuICAgIGFkZEJvcmRlclNldHRpbmdzQ29tcG9uZW50ID0gJ2FkZEJvcmRlclNldHRpbmdzQ29tcG9uZW50JyxcbiAgICBhZGRCb3hTaGFkb3dDb21wb25lbnQgPSAnYWRkQm94U2hhZG93Q29tcG9uZW50JyxcbiAgICBhZGREaXNwbGF5QXNDaGlsZENvbXBvbmVudCA9ICdhZGREaXNwbGF5QXNDaGlsZENvbXBvbmVudCcsXG4gICAgYWRkQWN0aW9uc0NvbXBvbmVudHMgPSAnYWRkQWN0aW9uc0NvbXBvbmVudHMnLFxuXG4gICAgYWRkSW5uZXJUZXh0Q2hhbmdlQ29tcG9uZW50ID0gJ2FkZElubmVyVGV4dENoYW5nZUNvbXBvbmVudCcsXG4gICAgYWRkRGlzcGxheUFzUGFyZW50Q29tcG9uZW50ID0gJ2FkZERpc3BsYXlBc1BhcmVudENvbXBvbmVudCcsXG4gICAgYWRkVXJsSW5wdXRDb21wb25lbnQgPSAnYWRkVXJsSW5wdXRDb21wb25lbnQnLFxuICAgIGFkZElucHV0VHlwZVNlbGVjdG9yQ29tcG9uZW50ID0gJ2FkZElucHV0VHlwZVNlbGVjdG9yQ29tcG9uZW50Jyxcbn1cbiIsImV4cG9ydCBlbnVtIEFsaWduRmxleENvbnRlbnRFbnVtIHtcbiAgICAnZmxleC1zdGFydCcgPSAnZmxleC1zdGFydCcsXG4gICAgJ2ZsZXgtZW5kJyA9ICdmbGV4LWVuZCcsXG4gICAgY2VudGVyID0gJ2NlbnRlcicsXG4gICAgJ3NwYWNlLWJldHdlZW4nID0gJ3NwYWNlLWJldHdlZW4nLFxuICAgICdzcGFjZS1hcm91bmQnID0gJ3NwYWNlLWFyb3VuZCcsXG4gICAgc3RyZXRjaCA9ICdzdHJldGNoJyxcbiAgICBub25lID0gJycsXG59XG4iLCJleHBvcnQgZW51bSBBbGlnbkZsZXhJdGVtc0VudW0ge1xuICAgICdmbGV4LXN0YXJ0JyA9ICdmbGV4LXN0YXJ0JyxcbiAgICAnZmxleC1lbmQnID0gJ2ZsZXgtZW5kJyxcbiAgICBjZW50ZXIgPSAnY2VudGVyJyxcbiAgICBiYXNlbGluZSA9ICdiYXNlbGluZScsXG4gICAgc3RyZXRjaCA9ICdzdHJldGNoJyxcbiAgICBub25lID0gJydcbn1cbiIsImV4cG9ydCBlbnVtIEFsaWduRmxleFNlbGZFbnVtIHtcbiAgICBhdXRvID0gJ2F1dG8nLFxuICAgICdmbGV4LXN0YXJ0JyA9ICdmbGV4LXN0YXJ0JyxcbiAgICAnZmxleC1lbmQnID0gJ2ZsZXgtZW5kJyxcbiAgICBjZW50ZXIgPSAnY2VudGVyJyxcbiAgICAnYmFzZWxpbmUnID0gJ2Jhc2VsaW5lJyxcbiAgICBzdHJldGNoID0gJ3N0cmV0Y2gnLFxuICAgIG5vbmUgPSAnJyxcbn1cbiIsImV4cG9ydCBlbnVtIEFsaWduR3JpZENvbnRlbnRFbnVtIHtcbiAgICBzdGFydCA9ICdzdGFydCcsXG4gICAgZW5kID0gJ2VuZCcsXG4gICAgY2VudGVyID0gJ2NlbnRlcicsXG4gICAgc3RyZXRjaCA9ICdzdHJldGNoJyxcbiAgICAnc3BhY2UtYmV0d2VlbicgPSAnc3BhY2UtYmV0d2VlbicsXG4gICAgJ3NwYWNlLWFyb3VuZCcgPSAnc3BhY2UtYXJvdW5kJyxcbiAgICAnc3BhY2UtZXZlbmx5JyA9ICdzcGFjZS1ldmVubHknLFxuICAgIG5vbmUgPSAnJ1xufVxuIiwiZXhwb3J0IGVudW0gQWxpZ25HcmlkSXRlbXNFbnVtIHtcbiAgICBzdGFydCA9ICdzdGFydCcsXG4gICAgZW5kID0gJ2VuZCcsXG4gICAgY2VudGVyID0gJ2NlbnRlcicsXG4gICAgc3RyZXRjaCA9ICdzdHJldGNoJyxcbiAgICBub25lID0gJydcbn1cbiIsImV4cG9ydCBlbnVtIEFsaWduR3JpZFNlbGZFbnVtIHtcbiAgICBzdGFydCA9ICdzdGFydCcsXG4gICAgZW5kID0gJ2VuZCcsXG4gICAgY2VudGVyID0gJ2NlbnRlcicsXG4gICAgc3RyZXRjaCA9ICdzdHJldGNoJyxcbiAgICBub25lID0gJydcbn1cbiIsImV4cG9ydCBlbnVtIEJvcmRlclN0eWxlRW51bSB7XG4gICAgbm9uZSA9ICdub25lJyxcbiAgICBoaWRkZW4gPSAnaGlkZGVuJyxcbiAgICBkb3R0ZWQgPSAnZG90dGVkJyxcbiAgICBkYXNoZWQgPSAnZGFzaGVkJyxcbiAgICBzb2xpZCA9ICdzb2xpZCcsXG4gICAgZG91YmxlID0gJ2RvdWJsZScsXG4gICAgZ3Jvb3ZlID0gJ2dyb292ZScsXG4gICAgcmlkZ2UgPSAncmlkZ2UnLFxuICAgIGluc2V0ID0gJ2luc2V0JyxcbiAgICBvdXRzZXQgPSAnb3V0c2V0Jyxcbn1cblxuXG5cbiIsImV4cG9ydCBlbnVtIERpc3BsYXlUeXBlc0VudW0ge1xuICAgIGZsZXggPSAnZmxleCcsXG4gICAgJ2lubGluZS1mbGV4JyA9ICdpbmxpbmUtZmxleCcsXG4gICAgZ3JpZCA9ICdncmlkJyxcbiAgICAnaW5saW5lLWdyaWQnID0gJ2lubGluZS1ncmlkJyxcbiAgICBibG9jayA9ICdibG9jaycsXG4gICAgaW5saW5lID0gJ2lubGluZScsXG4gICAgY29udGVudHMgPSAnY29udGVudHMnLFxuICAgIGluaGVyaXQgPSAnaW5oZXJpdCcsXG4gICAgaW5pdGlhbCA9ICdpbml0aWFsJyxcbiAgICByZXZlcnQgPSAncmV2ZXJ0JyxcbiAgICB1bnNldCA9ICd1bnNldCcsXG4gICAgbm9uZSA9ICcnXG59XG4iLCJleHBvcnQgZW51bSBFdmVudFR5cGVFbnVtIHtcbiAgICBpbnB1dCA9ICdpbnB1dCcsXG4gICAgY2hhbmdlID0gJ2NoYW5nZScsXG59XG4iLCJleHBvcnQgZW51bSBGbGV4RGlyZWN0aW9uRW51bSB7XG4gICAgcm93ID0gJ3JvdycsXG4gICAgJ3Jvdy1yZXZlcnNlJyA9ICdyb3ctcmV2ZXJzZScsXG4gICAgY29sdW1uID0gJ2NvbHVtbicsXG4gICAgJ2NvbHVtbi1yZXZlcnNlJyA9ICdjb2x1bW4tcmV2ZXJzZScsXG4gICAgbm9uZSA9ICcnXG59XG4iLCJleHBvcnQgZW51bSBGbGV4V3JhcEVudW0ge1xuICAgIG5vd3JhcCA9ICdub3dyYXAnLFxuICAgIHdyYXAgPSAnd3JhcCcsXG4gICAgJ3dyYXAtcmV2ZXJzZScgPSAnd3JhcC1yZXZlcnNlJyxcbiAgICBub25lID0gJydcbn1cbiIsImV4cG9ydCBlbnVtIEZvbnRTdHlsZXNFbnVtIHtcbiAgICAnbm9ybWFsJyA9ICdub3JtYWwnLFxuICAgICdpdGFsaWMnID0gJ2l0YWxpYycsXG4gICAgJ29ibGlxdWUnID0gJ29ibGlxdWUnLFxufVxuIiwiZXhwb3J0IGVudW0gRm9udFZhcmlhbnRFbnVtIHtcbiAgICAnbm9ybWFsJyA9ICdub3JtYWwnLFxuICAgICdzbWFsbC1jYXBzJyA9ICdzbWFsbC1jYXBzJyxcbiAgICAnYWxsLXNtYWxsLWNhcHMnID0gJ2FsbC1zbWFsbC1jYXBzJyxcbiAgICAncGV0aXRlLWNhcHMnID0gJ3BldGl0ZS1jYXBzJyxcbiAgICAnYWxsLXBldGl0ZS1jYXBzJyA9ICdhbGwtcGV0aXRlLWNhcHMnLFxuICAgICd1bmljYXNlJyA9ICd1bmljYXNlJyxcbiAgICAndGl0bGluZy1jYXBzJyA9ICd0aXRsaW5nLWNhcHMnLFxuICAgICdpbmhlcml0JyA9ICdpbmhlcml0JyxcbiAgICAnaW5pdGlhbCcgPSAnaW5pdGlhbCcsXG4gICAgJ3JldmVydCcgPSAncmV2ZXJ0JyxcbiAgICAncmV2ZXJ0LWxheWVyJyA9ICdyZXZlcnQtbGF5ZXInLFxuICAgICd1bnNldCcgPSAndW5zZXQnLFxufVxuIiwiZXhwb3J0IGVudW0gRm9udFdlaWdodEVudW0ge1xuICAgICdsaWdodGVyJyA9ICdsaWdodGVyJyxcbiAgICAnbm9ybWFsJyA9ICdub3JtYWwnLFxuICAgICdib2xkJyA9ICdib2xkJyxcbiAgICAnYm9sZGVyJyA9ICdib2xkZXInLFxuICAgICdzMTAwJyA9ICcxMDAnLFxuICAgICdzMjAwJyA9ICcyMDAnLFxuICAgICdzMzAwJyA9ICczMDAnLFxuICAgICdzNDAwJyA9ICc0MDAnLFxuICAgICdzNTAwJyA9ICc1MDAnLFxuICAgICdzNjAwJyA9ICc2MDAnLFxuICAgICdzNzAwJyA9ICc3MDAnLFxuICAgICdzODAwJyA9ICc4MDAnLFxuICAgICdzOTAwJyA9ICc5MDAnLFxuICAgICdpbmhlcml0JyA9ICdpbmhlcml0JyxcbiAgICAnaW5pdGlhbCcgPSAnaW5pdGlhbCcsXG4gICAgJ3JldmVydCcgPSAncmV2ZXJ0JyxcbiAgICAncmV2ZXJ0LWxheWVyJyA9ICdyZXZlcnQtbGF5ZXInLFxuICAgICd1bnNldCcgPSAndW5zZXQnLFxufVxuIiwiZXhwb3J0IGVudW0gRm9udHNFbnVtIHtcbiAgICAnY3Vyc2l2ZScgPSAnY3Vyc2l2ZScsXG4gICAgJ21vbm9zcGFjZScgPSAnbW9ub3NwYWNlJyxcbiAgICAnc2VyaWYnID0gJ3NlcmlmJyxcbiAgICAnc2Fucy1zZXJpZicgPSAnc2Fucy1zZXJpZicsXG4gICAgJ2ZhbnRhc3knID0gJ2ZhbnRhc3knLFxuICAgICdkZWZhdWx0JyA9ICdkZWZhdWx0JyxcbiAgICAnQXJpYWwnID0gJ0FyaWFsJyxcbiAgICAnQXJpYWwgQmxhY2snID0gJ0FyaWFsIEJsYWNrJyxcbiAgICAnQXJpYWwgTmFycm93JyA9ICdBcmlhbCBOYXJyb3cnLFxuICAgICdBcmlhbCBSb3VuZGVkIE1UIEJvbGQnID0gJ0FyaWFsIFJvdW5kZWQgTVQgQm9sZCcsXG4gICAgJ0Jvb2ttYW4gT2xkIFN0eWxlJyA9ICdCb29rbWFuIE9sZCBTdHlsZScsXG4gICAgJ0JyYWRsZXkgSGFuZCBJVEMnID0gJ0JyYWRsZXkgSGFuZCBJVEMnLFxuICAgICdDZW50dXJ5JyA9ICdDZW50dXJ5JyxcbiAgICAnQ2VudHVyeSBHb3RoaWMnID0gJ0NlbnR1cnkgR290aGljJyxcbiAgICAnQ29taWMgU2FucyBNUycgPSAnQ29taWMgU2FucyBNUycsXG4gICAgJ0NvdXJpZXInID0gJ0NvdXJpZXInLFxuICAgICdDb3VyaWVyIE5ldycgPSAnQ291cmllciBOZXcnLFxuICAgICdHZW9yZ2lhJyA9ICdHZW9yZ2lhJyxcbiAgICAnR2VudGl1bScgPSAnR2VudGl1bScsXG4gICAgJ0ltcGFjdCcgPSAnSW1wYWN0JyxcbiAgICAnS2luZycgPSAnS2luZycsXG4gICAgJ0x1Y2lkYSBDb25zb2xlJyA9ICdMdWNpZGEgQ29uc29sZScsXG4gICAgJ0xhbGl0JyA9ICdMYWxpdCcsXG4gICAgJ01vZGVuYScgPSAnTW9kZW5hJyxcbiAgICAnTW9ub3R5cGUgQ29yc2l2YScgPSAnTW9ub3R5cGUgQ29yc2l2YScsXG4gICAgJ1BhcHlydXMnID0gJ1BhcHlydXMnLFxuICAgICdUYWhvbWEnID0gJ1RhaG9tYScsXG4gICAgJ1RlWCcgPSAnVGVYJyxcbiAgICAnVGltZXMnID0gJ1RpbWVzJyxcbiAgICAnVGltZXMgTmV3IFJvbWFuJyA9ICdUaW1lcyBOZXcgUm9tYW4nLFxuICAgICdUcmVidWNoZXQgTVMnID0gJ1RyZWJ1Y2hldCBNUycsXG4gICAgJ1ZlcmRhbmEnID0gJ1ZlcmRhbmEnLFxuICAgICdWZXJvbmEnID0gJ1Zlcm9uYScsXG59XG4iLCJleHBvcnQgZW51bSBHZW5lcmFsUHNldWRvY2xhc3NFbnVtIHtcbiAgICBmb2N1cyA9ICdmb2N1cycsXG4gICAgaG92ZXIgPSAnaG92ZXInLFxuICAgIGFjdGl2ZSA9ICdhY3RpdmUnLFxuICAgIG5vbmUgPSAnbm9uZSdcbn1cbiIsImV4cG9ydCBlbnVtIEdyaWRBdXRvRmxvd0VudW0ge1xuICAgIHJvdyA9ICdyb3cnLFxuICAgIGNvbHVtbiA9ICdjb2x1bW4nLFxuICAgICdyb3ctZGVuc2UnID0gJ3Jvdy1kZW5zZScsXG4gICAgJ2NvbHVtbi1kZW5zZScgPSAnY29sdW1uLWRlbnNlJyxcbiAgICBub25lID0gJycsXG59XG4iLCJleHBvcnQgZW51bSBJbnB1dFR5cGVFbnVtIHtcbiAgICB0ZXh0ID0gJ3RleHQnLFxuICAgIG51bWJlciA9ICdudW1iZXInLFxuICAgIGNoZWNrYm94ID0gJ2NoZWNrYm94JyxcbiAgICBidXR0b24gPSAnYnV0dG9uJyxcbiAgICBjb2xvciA9ICdjb2xvcicsXG4gICAgZGF0ZSA9ICdkYXRlJyxcbiAgICBkYXRldGltZSA9ICdkYXRldGltZScsXG4gICAgJ2RhdGV0aW1lLWxvY2FsJyA9ICdkYXRldGltZS1sb2NhbCcsXG4gICAgZW1haWwgPSAnZW1haWwnLFxuICAgIGZpbGUgPSAnZmlsZScsXG4gICAgaGlkZGVuID0gJ2hpZGRlbicsXG4gICAgbW9udGggPSAnbW9udGgnLFxuICAgIHBhc3N3b3JkID0gJ3Bhc3N3b3JkJyxcbiAgICByYWRpbyA9ICdyYWRpbycsXG4gICAgcmFuZ2UgPSAncmFuZ2UnLFxuICAgIHJlc2V0ID0gJ3Jlc2V0JyxcbiAgICBzdWJtaXQgPSAnc3VibWl0JyxcbiAgICB0ZWwgPSAndGVsJyxcbiAgICB0aW1lID0gJ3RpbWUnLFxuICAgIHVybCA9ICd1cmwnLFxuICAgIHdlZWsgPSAnd2Vlaydcbn1cbiIsImV4cG9ydCBlbnVtIEp1c3RpZnlGbGV4Q29udGVudEVudW0ge1xuICAgICdmbGV4LXN0YXJ0JyA9ICdmbGV4LXN0YXJ0JyxcbiAgICAnZmxleC1lbmQnID0gJ2ZsZXgtZW5kJyxcbiAgICBjZW50ZXIgPSAnY2VudGVyJyxcbiAgICAnc3BhY2UtYmV0d2VlbicgPSAnc3BhY2UtYmV0d2VlbicsXG4gICAgJ3NwYWNlLWFyb3VuZCcgPSAnc3BhY2UtYXJvdW5kJyxcbiAgICBub25lID0gJydcbn1cbiIsImV4cG9ydCBlbnVtIEp1c3RpZnlHcmlkQ29udGVudEVudW0ge1xuICAgIHN0YXJ0ID0gJ3N0YXJ0JyxcbiAgICBlbmQgPSAnZW5kJyxcbiAgICBjZW50ZXIgPSAnY2VudGVyJyxcbiAgICBzdHJldGNoID0gJ3N0cmV0Y2gnLFxuICAgICdzcGFjZS1iZXR3ZWVuJyA9ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAnc3BhY2UtYXJvdW5kJyA9ICdzcGFjZS1hcm91bmQnLFxuICAgICdzcGFjZS1ldmVubHknID0gJ3NwYWNlLWV2ZW5seScsXG4gICAgbm9uZSA9ICcnXG59XG4iLCJleHBvcnQgZW51bSBKdXN0aWZ5R3JpZEl0ZW1zRW51bSB7XG4gICAgc3RhcnQgPSAnc3RhcnQnLFxuICAgIGVuZCA9ICdlbmQnLFxuICAgIGNlbnRlciA9ICdjZW50ZXInLFxuICAgIHN0cmV0Y2ggPSAnc3RyZXRjaCcsXG4gICAgbm9uZSA9ICcnXG59XG4iLCJleHBvcnQgZW51bSBKdXN0aWZ5R3JpZFNlbGZFbnVtIHtcbiAgICBzdGFydCA9ICdzdGFydCcsXG4gICAgZW5kID0gJ2VuZCcsXG4gICAgY2VudGVyID0gJ2NlbnRlcicsXG4gICAgc3RyZXRjaCA9ICdzdHJldGNoJyxcbiAgICBub25lID0gJydcbn1cbiIsImV4cG9ydCBlbnVtIFN0eWxlTmFtZUVudW0ge1xuICAgIG1hcmdpbiA9ICdtYXJnaW4nLFxuICAgIHBhZGRpbmcgPSAncGFkZGluZycsXG4gICAgZGlzcGxheSA9ICdkaXNwbGF5JyxcbiAgICAnZmxleC1kaXJlY3Rpb24nID0gJ2ZsZXgtZGlyZWN0aW9uJyxcbiAgICAnYWxpZ24taXRlbXMnID0gJ2FsaWduLWl0ZW1zJyxcbiAgICAnYWxpZ24tc2VsZicgPSAnYWxpZ24tc2VsZicsXG4gICAgJ2dyaWQtdGVtcGxhdGUtY29sdW1ucycgPSAnZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zJyxcbiAgICAnZ3JpZC10ZW1wbGF0ZS1yb3dzJyA9ICdncmlkLXRlbXBsYXRlLXJvd3MnLFxuICAgIGJvcmRlciA9ICdib3JkZXInLFxuICAgIHJlc2l6ZSA9ICdyZXNpemUnLFxuICAgIHdpZHRoID0gJ3dpdGR0aCcsXG4gICAgaGVpZ2h0ID0gJ2hlaWdodCcsXG4gICAgJ2ZvbnQtc2l6ZScgPSAnZm9udC1zaXplJyxcbn1cbiIsImV4cG9ydCBlbnVtIFRpdGxlVHlwZXNFbnVtIHtcbiAgICBIMSA9ICdIMScsXG4gICAgSDIgPSAnSDInLFxuICAgIEgzID0gJ0gzJyxcbiAgICBINCA9ICdINCcsXG4gICAgSDUgPSAnSDUnLFxuICAgIEg2ID0gJ0g2Jyxcbn1cbiIsImV4cG9ydCBlbnVtIFVuaXRzRW51bSB7XG4gICAgcHggPSAncHgnLFxuICAgIGVtID0gJ2VtJyxcbiAgICByZW0gPSAncmVtJyxcbiAgICB2dyA9ICd2dycsXG4gICAgdmggPSAndmgnLFxuICAgIHZtaW4gPSAndm1pbicsXG4gICAgdm1heCA9ICd2bWF4JyxcbiAgICAnJScgPSAnJScsXG4gICAgZXggPSAnZXgnLFxuICAgIGNoID0gJ2NoJyxcbiAgICBtbSA9ICdtbScsXG4gICAgY20gPSAnY20nLFxuICAgIGluID0gJ2luJyxcbiAgICBwdCA9ICdwdCcsXG4gICAgcGMgPSAncGMnLFxuICAgIGF1dG8gPSAnYXV0bydcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlZmluZUVsZW1lbnRJZChpbml0aWFsTmFtZTogc3RyaW5nLCBpbnN0YW5jZXM6IEhUTUxFbGVtZW50W10pOiBzdHJpbmcge1xuICAgIGNvbnN0IG5hbWVBbHJlYWR5RXhpc3RzID0gaW5zdGFuY2VzLmZpbmQoKGluc3RhbmNlKSA9PiBpbnN0YW5jZS5pZCA9PT0gaW5pdGlhbE5hbWUpID8gdHJ1ZSA6IGZhbHNlO1xuXG4gICAgaWYgKG5hbWVBbHJlYWR5RXhpc3RzKSB7XG4gICAgICAgIGFsZXJ0KCdJZCBuYW1lIGFscmVhZHkgZXhpc3RzIFxcblRoZSBuYW1lIGhhcyBub3QgYmVlbiB1cGRhdGVkJyk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSWQgbmFtZSBhbHJlYWR5IGV4aXN0cycpO1xuICAgIH1cblxuICAgIHJldHVybiBpbml0aWFsTmFtZTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlZmluZUVsZW1lbnROYW1lKGluaXRpYWxOYW1lOiBzdHJpbmcsIGluc3RhbmNlczogSFRNTEVsZW1lbnRbXSk6IHN0cmluZyB7XG4gICAgY29uc3QgbmFtZUFscmVhZHlFeGlzdHMgPSBpbnN0YW5jZXMuZmluZCgoaW5zdGFuY2UpID0+IGluc3RhbmNlWyduYW1lJ10gPT09IGluaXRpYWxOYW1lKSA/IHRydWUgOiBmYWxzZTtcblxuICAgIGlmIChuYW1lQWxyZWFkeUV4aXN0cykge1xuICAgICAgICBhbGVydCgnRWxlbWVudCBuYW1lIGFscmVhZHkgZXhpc3RzIFxcblRoZSBuYW1lIGhhcyBub3QgYmVlbiB1cGRhdGVkJyk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRWxlbWVudCBuYW1lIGFscmVhZHkgZXhpc3RzJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluaXRpYWxOYW1lO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZHJhZ1N0YXJ0V2l0aFRhcmdldE5vZGVOYW1lKGV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9wbGFpbicsIChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLm5vZGVOYW1lKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcnModGV4dDogc3RyaW5nLCBzcGxpdENoYXJhY3Rlcjogc3RyaW5nLCBqb2luQ2hhcmFjdGVyOiBzdHJpbmcpIHtcbiAgICBjb25zdCB3b3JkcyA9IHRleHQuc3BsaXQoc3BsaXRDaGFyYWN0ZXIpO1xuXG4gICAgcmV0dXJuIHdvcmRzLm1hcCgod29yZCkgPT4gYCR7d29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke3dvcmQuc2xpY2UoMSl9YCkuam9pbihqb2luQ2hhcmFjdGVyKVxufVxuIiwiaW1wb3J0IHsgVW5pdHNFbnVtIH0gZnJvbSAnLi4vZW51bXMvdW5pdHMuZW51bSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVuaXQodGV4dDogc3RyaW5nLCBkZWZhdWx0VW5pdDogVW5pdHNFbnVtID0gVW5pdHNFbnVtLnB4KSB7XG4gICAgdHJ5e1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSB0ZXh0Lm1hdGNoKC9bYS16JV0rJC9pKVxuICAgICAgICByZXR1cm4gdmFsdWVzID8gdmFsdWVzWzBdIDogZGVmYXVsdFVuaXQ7XG4gICAgfSBjYXRjaCB7XG4gICAgICAgIHJldHVybiAncHgnO1xuICAgIH1cblxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29sb3JUb0hleChjb2xvcjogc3RyaW5nKSB7XG4gIGlmKGNvbG9yID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gJyMwMDAwMDAnO1xuICB9XG5cbiAgaWYgKGNvbG9yLmluY2x1ZGVzKCdyZ2InKSkge1xuICAgIHJldHVybiByZ2JUb0hleChjb2xvcik7XG4gIH0gZWxzZSBpZiAoY29sb3IuaW5jbHVkZXMoJyMnKSkge1xuICAgIHJldHVybiBjb2xvcjtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBmb3VuZENvbG9yID0gY29sb3JWYWx1ZXMuZmluZCgoY29sKSA9PiBjb2wubmFtZS50b0xvd2VyQ2FzZSgpID09PSBjb2xvcik7XG5cbiAgICBpZighZm91bmRDb2xvcikge1xuICAgICAgcmV0dXJuICcjMDAwMDAwJztcbiAgICB9XG5cbiAgICByZXR1cm4gZm91bmRDb2xvci5oZXg7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmdiVG9IZXgocmdiOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBbciwgZywgYl0gPSByZ2IucmVwbGFjZSgvW15cXGQsXSsvZywgJycpLnNwbGl0KCcsJyk7XG4gICAgcmV0dXJuICcjJyArIGNvbXBvbmVudFRvSGV4KHIpICsgY29tcG9uZW50VG9IZXgoZykgKyBjb21wb25lbnRUb0hleChiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuICcjMDAwMDAwJztcbiAgfVxufVxuXG5mdW5jdGlvbiBjb21wb25lbnRUb0hleChjKSB7XG4gIGNvbnN0IGhleCA9IHBhcnNlSW50KGMpLnRvU3RyaW5nKDE2KTtcbiAgaWYgKGhleCA9PT0gJ05hTicpIHtcbiAgICByZXR1cm4gJzAwJztcbiAgfVxuICByZXR1cm4gaGV4Lmxlbmd0aCA9PT0gMSA/ICcwJyArIGhleCA6IGhleDtcbn1cblxuY29uc3QgY29sb3JWYWx1ZXMgPSBbXG4gIHsgaGV4OiAnI0YwRjhGRicsIG5hbWU6ICdBbGljZUJsdWUnIH0sXG4gIHsgaGV4OiAnI0ZBRUJENycsIG5hbWU6ICdBbnRpcXVlV2hpdGUnIH0sXG4gIHsgaGV4OiAnIzAwRkZGRicsIG5hbWU6ICdBcXVhJyB9LFxuICB7IGhleDogJyM3RkZGRDQnLCBuYW1lOiAnQXF1YW1hcmluZScgfSxcbiAgeyBoZXg6ICcjRjBGRkZGJywgbmFtZTogJ0F6dXJlJyB9LFxuICB7IGhleDogJyNGNUY1REMnLCBuYW1lOiAnQmVpZ2UnIH0sXG4gIHsgaGV4OiAnI0ZGRTRDNCcsIG5hbWU6ICdCaXNxdWUnIH0sXG4gIHsgaGV4OiAnIzAwMDAwMCcsIG5hbWU6ICdCbGFjaycgfSxcbiAgeyBoZXg6ICcjRkZFQkNEJywgbmFtZTogJ0JsYW5jaGVkQWxtb25kJyB9LFxuICB7IGhleDogJyMwMDAwRkYnLCBuYW1lOiAnQmx1ZScgfSxcbiAgeyBoZXg6ICcjOEEyQkUyJywgbmFtZTogJ0JsdWVWaW9sZXQnIH0sXG4gIHsgaGV4OiAnI0E1MkEyQScsIG5hbWU6ICdCcm93bicgfSxcbiAgeyBoZXg6ICcjREVCODg3JywgbmFtZTogJ0J1cmx5V29vZCcgfSxcbiAgeyBoZXg6ICcjNUY5RUEwJywgbmFtZTogJ0NhZGV0Qmx1ZScgfSxcbiAgeyBoZXg6ICcjN0ZGRjAwJywgbmFtZTogJ0NoYXJ0cmV1c2UnIH0sXG4gIHsgaGV4OiAnI0QyNjkxRScsIG5hbWU6ICdDaG9jb2xhdGUnIH0sXG4gIHsgaGV4OiAnI0ZGN0Y1MCcsIG5hbWU6ICdDb3JhbCcgfSxcbiAgeyBoZXg6ICcjNjQ5NUVEJywgbmFtZTogJ0Nvcm5mbG93ZXJCbHVlJyB9LFxuICB7IGhleDogJyNGRkY4REMnLCBuYW1lOiAnQ29ybnNpbGsnIH0sXG4gIHsgaGV4OiAnI0RDMTQzQycsIG5hbWU6ICdDcmltc29uJyB9LFxuICB7IGhleDogJyMwMEZGRkYnLCBuYW1lOiAnQ3lhbicgfSxcbiAgeyBoZXg6ICcjMDAwMDhCJywgbmFtZTogJ0RhcmtCbHVlJyB9LFxuICB7IGhleDogJyMwMDhCOEInLCBuYW1lOiAnRGFya0N5YW4nIH0sXG4gIHsgaGV4OiAnI0I4ODYwQicsIG5hbWU6ICdEYXJrR29sZGVuUm9kJyB9LFxuICB7IGhleDogJyNBOUE5QTknLCBuYW1lOiAnRGFya0dyYXknIH0sXG4gIHsgaGV4OiAnI0E5QTlBOScsIG5hbWU6ICdEYXJrR3JleScgfSxcbiAgeyBoZXg6ICcjMDA2NDAwJywgbmFtZTogJ0RhcmtHcmVlbicgfSxcbiAgeyBoZXg6ICcjQkRCNzZCJywgbmFtZTogJ0RhcmtLaGFraScgfSxcbiAgeyBoZXg6ICcjOEIwMDhCJywgbmFtZTogJ0RhcmtNYWdlbnRhJyB9LFxuICB7IGhleDogJyM1NTZCMkYnLCBuYW1lOiAnRGFya09saXZlR3JlZW4nIH0sXG4gIHsgaGV4OiAnI0ZGOEMwMCcsIG5hbWU6ICdEYXJrT3JhbmdlJyB9LFxuICB7IGhleDogJyM5OTMyQ0MnLCBuYW1lOiAnRGFya09yY2hpZCcgfSxcbiAgeyBoZXg6ICcjOEIwMDAwJywgbmFtZTogJ0RhcmtSZWQnIH0sXG4gIHsgaGV4OiAnI0U5OTY3QScsIG5hbWU6ICdEYXJrU2FsbW9uJyB9LFxuICB7IGhleDogJyM4RkJDOEYnLCBuYW1lOiAnRGFya1NlYUdyZWVuJyB9LFxuICB7IGhleDogJyM0ODNEOEInLCBuYW1lOiAnRGFya1NsYXRlQmx1ZScgfSxcbiAgeyBoZXg6ICcjMkY0RjRGJywgbmFtZTogJ0RhcmtTbGF0ZUdyYXknIH0sXG4gIHsgaGV4OiAnIzJGNEY0RicsIG5hbWU6ICdEYXJrU2xhdGVHcmV5JyB9LFxuICB7IGhleDogJyMwMENFRDEnLCBuYW1lOiAnRGFya1R1cnF1b2lzZScgfSxcbiAgeyBoZXg6ICcjOTQwMEQzJywgbmFtZTogJ0RhcmtWaW9sZXQnIH0sXG4gIHsgaGV4OiAnI0ZGMTQ5MycsIG5hbWU6ICdEZWVwUGluaycgfSxcbiAgeyBoZXg6ICcjMDBCRkZGJywgbmFtZTogJ0RlZXBTa3lCbHVlJyB9LFxuICB7IGhleDogJyM2OTY5NjknLCBuYW1lOiAnRGltR3JheScgfSxcbiAgeyBoZXg6ICcjNjk2OTY5JywgbmFtZTogJ0RpbUdyZXknIH0sXG4gIHsgaGV4OiAnIzFFOTBGRicsIG5hbWU6ICdEb2RnZXJCbHVlJyB9LFxuICB7IGhleDogJyNCMjIyMjInLCBuYW1lOiAnRmlyZUJyaWNrJyB9LFxuICB7IGhleDogJyNGRkZBRjAnLCBuYW1lOiAnRmxvcmFsV2hpdGUnIH0sXG4gIHsgaGV4OiAnIzIyOEIyMicsIG5hbWU6ICdGb3Jlc3RHcmVlbicgfSxcbiAgeyBoZXg6ICcjRkYwMEZGJywgbmFtZTogJ0Z1Y2hzaWEnIH0sXG4gIHsgaGV4OiAnI0RDRENEQycsIG5hbWU6ICdHYWluc2Jvcm8nIH0sXG4gIHsgaGV4OiAnI0Y4RjhGRicsIG5hbWU6ICdHaG9zdFdoaXRlJyB9LFxuICB7IGhleDogJyNGRkQ3MDAnLCBuYW1lOiAnR29sZCcgfSxcbiAgeyBoZXg6ICcjREFBNTIwJywgbmFtZTogJ0dvbGRlblJvZCcgfSxcbiAgeyBoZXg6ICcjODA4MDgwJywgbmFtZTogJ0dyYXknIH0sXG4gIHsgaGV4OiAnIzgwODA4MCcsIG5hbWU6ICdHcmV5JyB9LFxuICB7IGhleDogJyMwMDgwMDAnLCBuYW1lOiAnR3JlZW4nIH0sXG4gIHsgaGV4OiAnI0FERkYyRicsIG5hbWU6ICdHcmVlblllbGxvdycgfSxcbiAgeyBoZXg6ICcjRjBGRkYwJywgbmFtZTogJ0hvbmV5RGV3JyB9LFxuICB7IGhleDogJyNGRjY5QjQnLCBuYW1lOiAnSG90UGluaycgfSxcbiAgeyBoZXg6ICcjQ0Q1QzVDJywgbmFtZTogJ0luZGlhblJlZCcgfSxcbiAgeyBoZXg6ICcjNEIwMDgyJywgbmFtZTogJ0luZGlnbycgfSxcbiAgeyBoZXg6ICcjRkZGRkYwJywgbmFtZTogJ0l2b3J5JyB9LFxuICB7IGhleDogJyNGMEU2OEMnLCBuYW1lOiAnS2hha2knIH0sXG4gIHsgaGV4OiAnI0U2RTZGQScsIG5hbWU6ICdMYXZlbmRlcicgfSxcbiAgeyBoZXg6ICcjRkZGMEY1JywgbmFtZTogJ0xhdmVuZGVyQmx1c2gnIH0sXG4gIHsgaGV4OiAnIzdDRkMwMCcsIG5hbWU6ICdMYXduR3JlZW4nIH0sXG4gIHsgaGV4OiAnI0ZGRkFDRCcsIG5hbWU6ICdMZW1vbkNoaWZmb24nIH0sXG4gIHsgaGV4OiAnI0FERDhFNicsIG5hbWU6ICdMaWdodEJsdWUnIH0sXG4gIHsgaGV4OiAnI0YwODA4MCcsIG5hbWU6ICdMaWdodENvcmFsJyB9LFxuICB7IGhleDogJyNFMEZGRkYnLCBuYW1lOiAnTGlnaHRDeWFuJyB9LFxuICB7IGhleDogJyNGQUZBRDInLCBuYW1lOiAnTGlnaHRHb2xkZW5Sb2RZZWxsb3cnIH0sXG4gIHsgaGV4OiAnI0QzRDNEMycsIG5hbWU6ICdMaWdodEdyYXknIH0sXG4gIHsgaGV4OiAnI0QzRDNEMycsIG5hbWU6ICdMaWdodEdyZXknIH0sXG4gIHsgaGV4OiAnIzkwRUU5MCcsIG5hbWU6ICdMaWdodEdyZWVuJyB9LFxuICB7IGhleDogJyNGRkI2QzEnLCBuYW1lOiAnTGlnaHRQaW5rJyB9LFxuICB7IGhleDogJyNGRkEwN0EnLCBuYW1lOiAnTGlnaHRTYWxtb24nIH0sXG4gIHsgaGV4OiAnIzIwQjJBQScsIG5hbWU6ICdMaWdodFNlYUdyZWVuJyB9LFxuICB7IGhleDogJyM4N0NFRkEnLCBuYW1lOiAnTGlnaHRTa3lCbHVlJyB9LFxuICB7IGhleDogJyM3Nzg4OTknLCBuYW1lOiAnTGlnaHRTbGF0ZUdyYXknIH0sXG4gIHsgaGV4OiAnIzc3ODg5OScsIG5hbWU6ICdMaWdodFNsYXRlR3JleScgfSxcbiAgeyBoZXg6ICcjQjBDNERFJywgbmFtZTogJ0xpZ2h0U3RlZWxCbHVlJyB9LFxuICB7IGhleDogJyNGRkZGRTAnLCBuYW1lOiAnTGlnaHRZZWxsb3cnIH0sXG4gIHsgaGV4OiAnIzAwRkYwMCcsIG5hbWU6ICdMaW1lJyB9LFxuICB7IGhleDogJyMzMkNEMzInLCBuYW1lOiAnTGltZUdyZWVuJyB9LFxuICB7IGhleDogJyNGQUYwRTYnLCBuYW1lOiAnTGluZW4nIH0sXG4gIHsgaGV4OiAnI0ZGMDBGRicsIG5hbWU6ICdNYWdlbnRhJyB9LFxuICB7IGhleDogJyM4MDAwMDAnLCBuYW1lOiAnTWFyb29uJyB9LFxuICB7IGhleDogJyM2NkNEQUEnLCBuYW1lOiAnTWVkaXVtQXF1YU1hcmluZScgfSxcbiAgeyBoZXg6ICcjMDAwMENEJywgbmFtZTogJ01lZGl1bUJsdWUnIH0sXG4gIHsgaGV4OiAnI0JBNTVEMycsIG5hbWU6ICdNZWRpdW1PcmNoaWQnIH0sXG4gIHsgaGV4OiAnIzkzNzBEQicsIG5hbWU6ICdNZWRpdW1QdXJwbGUnIH0sXG4gIHsgaGV4OiAnIzNDQjM3MScsIG5hbWU6ICdNZWRpdW1TZWFHcmVlbicgfSxcbiAgeyBoZXg6ICcjN0I2OEVFJywgbmFtZTogJ01lZGl1bVNsYXRlQmx1ZScgfSxcbiAgeyBoZXg6ICcjMDBGQTlBJywgbmFtZTogJ01lZGl1bVNwcmluZ0dyZWVuJyB9LFxuICB7IGhleDogJyM0OEQxQ0MnLCBuYW1lOiAnTWVkaXVtVHVycXVvaXNlJyB9LFxuICB7IGhleDogJyNDNzE1ODUnLCBuYW1lOiAnTWVkaXVtVmlvbGV0UmVkJyB9LFxuICB7IGhleDogJyMxOTE5NzAnLCBuYW1lOiAnTWlkbmlnaHRCbHVlJyB9LFxuICB7IGhleDogJyNGNUZGRkEnLCBuYW1lOiAnTWludENyZWFtJyB9LFxuICB7IGhleDogJyNGRkU0RTEnLCBuYW1lOiAnTWlzdHlSb3NlJyB9LFxuICB7IGhleDogJyNGRkU0QjUnLCBuYW1lOiAnTW9jY2FzaW4nIH0sXG4gIHsgaGV4OiAnI0ZGREVBRCcsIG5hbWU6ICdOYXZham9XaGl0ZScgfSxcbiAgeyBoZXg6ICcjMDAwMDgwJywgbmFtZTogJ05hdnknIH0sXG4gIHsgaGV4OiAnI0ZERjVFNicsIG5hbWU6ICdPbGRMYWNlJyB9LFxuICB7IGhleDogJyM4MDgwMDAnLCBuYW1lOiAnT2xpdmUnIH0sXG4gIHsgaGV4OiAnIzZCOEUyMycsIG5hbWU6ICdPbGl2ZURyYWInIH0sXG4gIHsgaGV4OiAnI0ZGQTUwMCcsIG5hbWU6ICdPcmFuZ2UnIH0sXG4gIHsgaGV4OiAnI0ZGNDUwMCcsIG5hbWU6ICdPcmFuZ2VSZWQnIH0sXG4gIHsgaGV4OiAnI0RBNzBENicsIG5hbWU6ICdPcmNoaWQnIH0sXG4gIHsgaGV4OiAnI0VFRThBQScsIG5hbWU6ICdQYWxlR29sZGVuUm9kJyB9LFxuICB7IGhleDogJyM5OEZCOTgnLCBuYW1lOiAnUGFsZUdyZWVuJyB9LFxuICB7IGhleDogJyNBRkVFRUUnLCBuYW1lOiAnUGFsZVR1cnF1b2lzZScgfSxcbiAgeyBoZXg6ICcjREI3MDkzJywgbmFtZTogJ1BhbGVWaW9sZXRSZWQnIH0sXG4gIHsgaGV4OiAnI0ZGRUZENScsIG5hbWU6ICdQYXBheWFXaGlwJyB9LFxuICB7IGhleDogJyNGRkRBQjknLCBuYW1lOiAnUGVhY2hQdWZmJyB9LFxuICB7IGhleDogJyNDRDg1M0YnLCBuYW1lOiAnUGVydScgfSxcbiAgeyBoZXg6ICcjRkZDMENCJywgbmFtZTogJ1BpbmsnIH0sXG4gIHsgaGV4OiAnI0REQTBERCcsIG5hbWU6ICdQbHVtJyB9LFxuICB7IGhleDogJyNCMEUwRTYnLCBuYW1lOiAnUG93ZGVyQmx1ZScgfSxcbiAgeyBoZXg6ICcjODAwMDgwJywgbmFtZTogJ1B1cnBsZScgfSxcbiAgeyBoZXg6ICcjNjYzMzk5JywgbmFtZTogJ1JlYmVjY2FQdXJwbGUnIH0sXG4gIHsgaGV4OiAnI0ZGMDAwMCcsIG5hbWU6ICdSZWQnIH0sXG4gIHsgaGV4OiAnI0JDOEY4RicsIG5hbWU6ICdSb3N5QnJvd24nIH0sXG4gIHsgaGV4OiAnIzQxNjlFMScsIG5hbWU6ICdSb3lhbEJsdWUnIH0sXG4gIHsgaGV4OiAnIzhCNDUxMycsIG5hbWU6ICdTYWRkbGVCcm93bicgfSxcbiAgeyBoZXg6ICcjRkE4MDcyJywgbmFtZTogJ1NhbG1vbicgfSxcbiAgeyBoZXg6ICcjRjRBNDYwJywgbmFtZTogJ1NhbmR5QnJvd24nIH0sXG4gIHsgaGV4OiAnIzJFOEI1NycsIG5hbWU6ICdTZWFHcmVlbicgfSxcbiAgeyBoZXg6ICcjRkZGNUVFJywgbmFtZTogJ1NlYVNoZWxsJyB9LFxuICB7IGhleDogJyNBMDUyMkQnLCBuYW1lOiAnU2llbm5hJyB9LFxuICB7IGhleDogJyNDMEMwQzAnLCBuYW1lOiAnU2lsdmVyJyB9LFxuICB7IGhleDogJyM4N0NFRUInLCBuYW1lOiAnU2t5Qmx1ZScgfSxcbiAgeyBoZXg6ICcjNkE1QUNEJywgbmFtZTogJ1NsYXRlQmx1ZScgfSxcbiAgeyBoZXg6ICcjNzA4MDkwJywgbmFtZTogJ1NsYXRlR3JheScgfSxcbiAgeyBoZXg6ICcjNzA4MDkwJywgbmFtZTogJ1NsYXRlR3JleScgfSxcbiAgeyBoZXg6ICcjRkZGQUZBJywgbmFtZTogJ1Nub3cnIH0sXG4gIHsgaGV4OiAnIzAwRkY3RicsIG5hbWU6ICdTcHJpbmdHcmVlbicgfSxcbiAgeyBoZXg6ICcjNDY4MkI0JywgbmFtZTogJ1N0ZWVsQmx1ZScgfSxcbiAgeyBoZXg6ICcjRDJCNDhDJywgbmFtZTogJ1RhbicgfSxcbiAgeyBoZXg6ICcjMDA4MDgwJywgbmFtZTogJ1RlYWwnIH0sXG4gIHsgaGV4OiAnI0Q4QkZEOCcsIG5hbWU6ICdUaGlzdGxlJyB9LFxuICB7IGhleDogJyNGRjYzNDcnLCBuYW1lOiAnVG9tYXRvJyB9LFxuICB7IGhleDogJyM0MEUwRDAnLCBuYW1lOiAnVHVycXVvaXNlJyB9LFxuICB7IGhleDogJyNFRTgyRUUnLCBuYW1lOiAnVmlvbGV0JyB9LFxuICB7IGhleDogJyNGNURFQjMnLCBuYW1lOiAnV2hlYXQnIH0sXG4gIHsgaGV4OiAnI0ZGRkZGRicsIG5hbWU6ICdXaGl0ZScgfSxcbiAgeyBoZXg6ICcjRjVGNUY1JywgbmFtZTogJ1doaXRlU21va2UnIH0sXG4gIHsgaGV4OiAnI0ZGRkYwMCcsIG5hbWU6ICdZZWxsb3cnIH0sXG4gIHsgaGV4OiAnIzlBQ0QzMicsIG5hbWU6ICdZZWxsb3dHcmVlbicgfVxuXVxuIiwiaW1wb3J0IFJhd0J1aWxkZXIgZnJvbSAnLi9SYXdCdWlsZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW5jaG9yQnVpbGRlciBleHRlbmRzIFJhd0J1aWxkZXI8SFRNTEFuY2hvckVsZW1lbnQ+e1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignYScpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRIaXBlcmxpbmsoaGlwZXJsaW5rOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmhyZWYgPSBoaXBlcmxpbms7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cbiIsImltcG9ydCBSYXdCdWlsZGVyIGZyb20gJy4vUmF3QnVpbGRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbkJ1aWxkZXIgZXh0ZW5kcyBSYXdCdWlsZGVyPEhUTUxCdXR0b25FbGVtZW50PntcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ2J1dHRvbicpO1xuICAgIH1cbn1cbiIsImltcG9ydCBSYXdCdWlsZGVyIGZyb20gJy4vUmF3QnVpbGRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRhaW5lckJ1aWxkZXIgZXh0ZW5kcyBSYXdCdWlsZGVyPEhUTUxEaXZFbGVtZW50PntcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ2RpdicpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhcHBlbmRDaGlsZElmRGVmaW5lZChlbGVtZW50OiBIVE1MRWxlbWVudCl7XG4gICAgICAgIGlmKGVsZW1lbnQgIT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuIiwiaW1wb3J0IFJhd0J1aWxkZXIgZnJvbSAnLi9SYXdCdWlsZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybUJ1aWxkZXIgZXh0ZW5kcyBSYXdCdWlsZGVyPEhUTUxGb3JtRWxlbWVudD57XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdmb3JtJyk7XG4gICAgfVxuXG4gICAgcHVibGljIGFwcGVuZENoaWxkSWZEZWZpbmVkKGVsZW1lbnQ6IEhUTUxFbGVtZW50KXtcbiAgICAgICAgaWYoZWxlbWVudCAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG4iLCJpbXBvcnQgUmF3QnVpbGRlciBmcm9tICcuL1Jhd0J1aWxkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZUJ1aWxkZXIgZXh0ZW5kcyBSYXdCdWlsZGVyPEhUTUxJbWFnZUVsZW1lbnQ+e1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignaW1nJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFVybCh1cmw/OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnNyYyA9IHVybDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuIiwiaW1wb3J0IFJhd0J1aWxkZXIgZnJvbSAnLi9SYXdCdWlsZGVyJztcbmltcG9ydCB7IElucHV0VHlwZUVudW0gfSBmcm9tICcuLi9lbnVtcy9pbnB1dC10eXBlLmVudW0nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dEJ1aWxkZXIgZXh0ZW5kcyBSYXdCdWlsZGVyPEhUTUxJbnB1dEVsZW1lbnQ+e1xuICAgIGNvbnN0cnVjdG9yKHR5cGU6IElucHV0VHlwZUVudW0pIHtcbiAgICAgICAgc3VwZXIoJ2lucHV0JylcbiAgICAgICAgdGhpcy5lbGVtZW50LnR5cGUgPSB0eXBlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC52YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0VmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldE5hbWUobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5uYW1lID0gbmFtZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFBsYWNlaG9sZGVyKHBsYWNlaG9sZGVyOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBjaGVja2VkKGNoZWNrZWQgPSB0cnVlKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jaGVja2VkID0gY2hlY2tlZDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldE1heChtYXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLmVsZW1lbnQubWF4ID0gYCR7bWF4fWA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRNaW4obWluOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Lm1pbiA9IGAke21pbn1gO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG4iLCJpbXBvcnQgUmF3QnVpbGRlciBmcm9tICcuL1Jhd0J1aWxkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYWJlbEJ1aWxkZXIgZXh0ZW5kcyBSYXdCdWlsZGVyPEhUTUxMYWJlbEVsZW1lbnQ+e1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignbGFiZWwnKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUmF3QnVpbGRlciBmcm9tICcuL1Jhd0J1aWxkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0SXRlbUJ1aWxkZXIgZXh0ZW5kcyBSYXdCdWlsZGVyPEhUTUxMYWJlbEVsZW1lbnQ+e1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignbGknKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUmF3QnVpbGRlciBmcm9tICcuL1Jhd0J1aWxkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmRlcmVkTGlzdEJ1aWxkZXIgZXh0ZW5kcyBSYXdCdWlsZGVyPEhUTUxPTGlzdEVsZW1lbnQ+e1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignb2wnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXBwZW5kQ2hpbGRJZkRlZmluZWQoZWxlbWVudDogSFRNTEVsZW1lbnQpe1xuICAgICAgICBpZihlbGVtZW50ICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFN0eWxlTmFtZUVudW0gfSBmcm9tICcuLi9lbnVtcy9zdHlsZS1uYW1lLmVudW0nO1xuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgUmF3QnVpbGRlcjxUIGV4dGVuZHMgSFRNTEVsZW1lbnQ+e1xuICAgIHByb3RlY3RlZCBlbGVtZW50OiBUO1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRJZChpZCA6IHN0cmluZykge1xuICAgICAgICB0aGlzLmVsZW1lbnQuaWQgPSBpZDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldE5hbWUobmFtZSA6IHN0cmluZykge1xuICAgICAgICB0aGlzLmVsZW1lbnRbJ25hbWUnXSA9IG5hbWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRTdHlsZShzdHlsZU5hbWU6IFN0eWxlTmFtZUVudW0sIHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3N0eWxlTmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldElubmVyVGV4dCh0ZXh0OiBzdHJpbmcpe1xuICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJUZXh0ID0gdGV4dDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIGRyYWdnYWJsZShzZWxlY3RlZCA9IHRydWUpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmRyYWdnYWJsZSA9IHNlbGVjdGVkO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkQ3NzQ2xhc3NOYW1lKGNsYXNzTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRBbGxDaGlsZHMoKTogTm9kZVtdIHtcbiAgICAgICAgY29uc3QgY2hpbGROb2RlczogTm9kZVtdID0gW107XG5cbiAgICAgICAgdGhpcy5lbGVtZW50LmNoaWxkTm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICAgICAgY2hpbGROb2Rlcy5wdXNoKG5vZGUpXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIGNoaWxkTm9kZXM7XG4gICAgfVxuXG4gICAgcHVibGljIGZpbmRDaGlsZE5vZGVCeU5hbWUobmFtZTogc3RyaW5nKTogTm9kZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEFsbENoaWxkcygpLmZpbmQoKG5vZGUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBub2RlWyduYW1lJ10gPT09IG5hbWVcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwdWJsaWMgYXBwZW5kQ2hpbGQoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmVDaGlsZE5vZGUobm9kZTogTm9kZSkge1xuICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQ2hpbGQobm9kZSlcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZUNoaWxkTm9kZUJ5TmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVDaGlsZE5vZGUodGhpcy5maW5kQ2hpbGROb2RlQnlOYW1lKG5hbWUpKVxuICAgIH1cblxuICAgIHB1YmxpYyBtb292ZUNoaWxkVXBwZXJQb3NpdGlvbkJ5TmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3Qgbm9kZXNBcnJheSA9IHRoaXMuZ2V0QWxsQ2hpbGRzKCk7XG5cbiAgICAgICAgY29uc3QgaW5kZXhPZkNoaWxkID0gbm9kZXNBcnJheS5maW5kSW5kZXgoKG5vZGUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBub2RlWyduYW1lJ10gPT09IG5hbWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYoaW5kZXhPZkNoaWxkICE9PSAwKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtc1RvTW92ZSA9IG5vZGVzQXJyYXkuc2xpY2UoIC0gbm9kZXNBcnJheS5sZW5ndGggKyBpbmRleE9mQ2hpbGQgLSAxICk7XG5cbiAgICAgICAgICAgIGl0ZW1zVG9Nb3ZlLmZvckVhY2goKG5vZGUpID0+IHRoaXMuZWxlbWVudC5yZW1vdmVDaGlsZChub2RlKSk7XG5cbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChub2Rlc0FycmF5W2luZGV4T2ZDaGlsZF0pO1xuXG4gICAgICAgICAgICBpdGVtc1RvTW92ZS5zcGxpY2UoMSwgMSk7XG5cbiAgICAgICAgICAgIGl0ZW1zVG9Nb3ZlLmZvckVhY2goKG5vZGUpID0+IHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChub2RlKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgbW9vdmVDaGlsZExvd2VyUG9zaXRpb25CeU5hbWUobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IG5vZGVzQXJyYXkgPSB0aGlzLmdldEFsbENoaWxkcygpO1xuXG4gICAgICAgIGNvbnN0IGluZGV4T2ZDaGlsZCA9IG5vZGVzQXJyYXkuZmluZEluZGV4KChub2RlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZVsnbmFtZSddID09PSBuYW1lXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmKGluZGV4T2ZDaGlsZCAhPT0gbm9kZXNBcnJheS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtc1RvTW92ZSA9IG5vZGVzQXJyYXkuc2xpY2UoIC0gbm9kZXNBcnJheS5sZW5ndGggKyBpbmRleE9mQ2hpbGQgKTtcblxuICAgICAgICAgICAgaXRlbXNUb01vdmUuZm9yRWFjaCgobm9kZSkgPT4gdGhpcy5lbGVtZW50LnJlbW92ZUNoaWxkKG5vZGUpKTtcblxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRFbGVtZW50ID0gaXRlbXNUb01vdmUuc3BsaWNlKDAsIDEpWzBdO1xuXG4gICAgICAgICAgICBpdGVtc1RvTW92ZS5zcGxpY2UoMCArIDEsIDAsIHNlbGVjdGVkRWxlbWVudCk7XG5cbiAgICAgICAgICAgIGl0ZW1zVG9Nb3ZlLmZvckVhY2goKG5vZGUpID0+IHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChub2RlKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkRXZlbnRMaXN0ZW5lcih0eXBlOiBzdHJpbmcsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrKVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5lbGVtZW50WydkaXNhYmxlZCddID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGJ1aWxkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICAgIH1cbn1cbiIsImltcG9ydCBSYXdCdWlsZGVyIGZyb20gJy4vUmF3QnVpbGRlcic7XG5pbXBvcnQgQXJyYXlTZWxlY3RvckJvZHlJbnRlcmZhY2UgZnJvbSAnLi4vaW50ZXJmYWNlcy9zZWxlY3Rvci1mcm9tLWFycmF5LWJvZHkuaW50ZXJmYWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0b3JGcm9tQXJyYXlCdWlsZGVyIGV4dGVuZHMgUmF3QnVpbGRlcjxIVE1MU2VsZWN0RWxlbWVudD57XG4gICAgcHJpdmF0ZSBfb3B0aW9uczogQXJyYXlTZWxlY3RvckJvZHlJbnRlcmZhY2VbXTtcblxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IEFycmF5U2VsZWN0b3JCb2R5SW50ZXJmYWNlW10pIHtcbiAgICAgICAgc3VwZXIoJ3NlbGVjdCcpO1xuICAgICAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5hZGRPcHRpb25zKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRPcHRpb25zKCkge1xuICAgICAgICB0aGlzLl9vcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBuZXdPcHRpb24udGV4dCA9IG9wdGlvbi50ZXh0O1xuICAgICAgICAgICAgbmV3T3B0aW9uLnZhbHVlID0gb3B0aW9uLnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKG5ld09wdGlvbilcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIHNlbGVjdE9wdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGZvdW5kVmFsdWVJbmRleCA9IHRoaXMuX29wdGlvbnMuZmluZEluZGV4KChrZXkpID0+IGtleS52YWx1ZSA9PT0gdmFsdWUpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9IGZvdW5kVmFsdWVJbmRleDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCB2YWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC52YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHNlbGVjdGVkSW5kZXgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQuc2VsZWN0ZWRJbmRleDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHNlbGVjdGVkSW5kZXgoaW5kZXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgb3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5vcHRpb25zO1xuICAgIH1cbn1cbiIsImltcG9ydCBSYXdCdWlsZGVyIGZyb20gJy4vUmF3QnVpbGRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyIGV4dGVuZHMgUmF3QnVpbGRlcjxIVE1MU2VsZWN0RWxlbWVudD57XG4gICAgcHJpdmF0ZSBrZXlzOiBzdHJpbmdbXTtcbiAgICBwcml2YXRlIG9wdGlvbnM6IFJlY29yZDxzdHJpbmcsc3RyaW5nPjtcblxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IFJlY29yZDxzdHJpbmcsc3RyaW5nPikge1xuICAgICAgICBzdXBlcignc2VsZWN0Jyk7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIHRoaXMua2V5cyA9IE9iamVjdC5rZXlzKG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuYWRkT3B0aW9ucygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC52YWx1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZE9wdGlvbnMoKSB7XG4gICAgICAgIHRoaXMua2V5cy5mb3JFYWNoKChvcHRLZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgbmV3T3B0aW9uLnRleHQgPSBvcHRLZXk7XG4gICAgICAgICAgICBuZXdPcHRpb24udmFsdWUgPSB0aGlzLm9wdGlvbnNbb3B0S2V5XTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChuZXdPcHRpb24pXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZWxlY3RPcHRpb24ob3B0aW9uOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgZm91bmRWYWx1ZUluZGV4ID0gdGhpcy5rZXlzLmZpbmRJbmRleCgoa2V5KSA9PiB0aGlzLm9wdGlvbnNba2V5XSA9PT0gb3B0aW9uKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnNlbGVjdGVkSW5kZXggPSBmb3VuZFZhbHVlSW5kZXg7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cbiIsImltcG9ydCBDb250YWluZXJCdWlsZGVyIGZyb20gJy4vQ29udGFpbmVyQnVpbGRlcic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHlsZXNDb21wb25lbnRzQnVpbGRlciB7XG4gICAgcHVibGljIGh0bWxTdHlsZXNDb250YWluZXI6IEhUTUxEaXZFbGVtZW50ID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKS5idWlsZCgpO1xuICAgIHByaXZhdGUgYWN0aW9uc0NvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWN0aW9ucy1jb250YWluZXInKTtcblxuICAgIHB1YmxpYyBhcHBlbmRDaGlsZChlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuaHRtbFN0eWxlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYnVpbGQoKTogSFRNTERpdkVsZW1lbnQge1xuICAgICAgICB0aGlzLmFjdGlvbnNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHRoaXMuYWN0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmh0bWxTdHlsZXNDb250YWluZXIpO1xuICAgICAgICByZXR1cm4gdGhpcy5odG1sU3R5bGVzQ29udGFpbmVyO1xuICAgIH1cblxuICAgIHJlbW92ZSgpIHtcbiAgICAgICAgdGhpcy5hY3Rpb25zQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIH1cbn1cbiIsImltcG9ydCBSYXdCdWlsZGVyIGZyb20gJy4vUmF3QnVpbGRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYmxlQnVpbGRlciBleHRlbmRzIFJhd0J1aWxkZXI8SFRNTERpdkVsZW1lbnQ+e1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigndGFibGUnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXBwZW5kQ2hpbGRJZkRlZmluZWQoZWxlbWVudDogSFRNTEVsZW1lbnQpe1xuICAgICAgICBpZihlbGVtZW50ICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cbiIsImltcG9ydCBSYXdCdWlsZGVyIGZyb20gJy4vUmF3QnVpbGRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRhcmVhQnVpbGRlciBleHRlbmRzIFJhd0J1aWxkZXI8SFRNTFRleHRBcmVhRWxlbWVudD57XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCd0ZXh0YXJlYScpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRWYWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQudmFsdWU7XG4gICAgfVxufVxuIiwiaW1wb3J0IFJhd0J1aWxkZXIgZnJvbSAnLi9SYXdCdWlsZGVyJztcblxuaW1wb3J0IHsgVGl0bGVUeXBlc0VudW0gfSBmcm9tICcuLi9lbnVtcy90aXRsZS50eXBlcy5lbnVtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGl0bGVCdWlsZGVyIGV4dGVuZHMgUmF3QnVpbGRlcjxIVE1MVGl0bGVFbGVtZW50PntcbiAgICBjb25zdHJ1Y3Rvcih0eXBlOiBUaXRsZVR5cGVzRW51bSkge1xuICAgICAgICBzdXBlcih0eXBlKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUmF3QnVpbGRlciBmcm9tICcuL1Jhd0J1aWxkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVbm9kZXJlZExpc3RCdWlsZGVyIGV4dGVuZHMgUmF3QnVpbGRlcjxIVE1MVUxpc3RFbGVtZW50PntcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ3VsJyk7XG4gICAgfVxuXG4gICAgcHVibGljIGFwcGVuZENoaWxkSWZEZWZpbmVkKGVsZW1lbnQ6IEhUTUxFbGVtZW50KXtcbiAgICAgICAgaWYoZWxlbWVudCAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG4iLCJpbXBvcnQgQ2xhc3NDaGFuZ2VQdWJsaXNoZXJJbnRlcmZhY2UgZnJvbSAnLi4vaW50ZXJmYWNlcy9jbGFzcy1jaGFuZ2UtcHVibGlzaGVyLmludGVyZmFjZSc7XG5pbXBvcnQgQ2xhc3NDaGFuZ2VPYnNlcnZlckludGVyZmFjZSBmcm9tICcuLi9pbnRlcmZhY2VzL2NsYXNzLWNoYW5nZS1vYnNlcnZlci5pbnRlcmZhY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGFzc0NoYW5nZVB1Ymxpc2hlciBpbXBsZW1lbnRzIENsYXNzQ2hhbmdlUHVibGlzaGVySW50ZXJmYWNlIHtcbiAgICBwcml2YXRlIG9ic2VydmVyczogQ2xhc3NDaGFuZ2VPYnNlcnZlckludGVyZmFjZVtdID0gW107XG5cbiAgICBwdWJsaWMgYXR0YWNoKG9ic2VydmVyOiBDbGFzc0NoYW5nZU9ic2VydmVySW50ZXJmYWNlKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGlzRXhpc3QgPSB0aGlzLm9ic2VydmVycy5pbmNsdWRlcyhvYnNlcnZlcik7XG4gICAgICAgIGlmIChpc0V4aXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2coJ1N1YmplY3Q6IE9ic2VydmVyIGhhcyBiZWVuIGF0dGFjaGVkIGFscmVhZHkuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vYnNlcnZlcnMucHVzaChvYnNlcnZlcik7XG4gICAgfVxuXG4gICAgcHVibGljIGRldGFjaChvYnNlcnZlcjogQ2xhc3NDaGFuZ2VPYnNlcnZlckludGVyZmFjZSk6IHZvaWQge1xuICAgICAgICBjb25zdCBvYnNlcnZlckluZGV4ID0gdGhpcy5vYnNlcnZlcnMuaW5kZXhPZihvYnNlcnZlcik7XG4gICAgICAgIGlmIChvYnNlcnZlckluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKCdTdWJqZWN0OiBOb25leGlzdGVudCBvYnNlcnZlci4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9ic2VydmVycy5zcGxpY2Uob2JzZXJ2ZXJJbmRleCwgMSk7XG4gICAgfVxuXG4gICAgcHVibGljIG5vdGlmeUNsYXNzTmFtZShuYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgZm9yIChjb25zdCBvYnNlcnZlciBvZiB0aGlzLm9ic2VydmVycykge1xuICAgICAgICAgICAgb2JzZXJ2ZXIuY2xhc3NOYW1lVXBkYXRlZChuYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnRDaGFuZ2VPYnNlcnZlckludGVyZmFjZSBmcm9tICcuLi9pbnRlcmZhY2VzL2NvbXBvbmVudC1jaGFuZ2Utb2JzZXJ2ZXIuaW50ZXJmYWNlJztcbmltcG9ydCBDb21wb25lbnRDaGFuZ2VQdWJsaXNoZXJJbnRlcmZhY2UgZnJvbSAnLi4vaW50ZXJmYWNlcy9jb21wb25lbnQtY2hhbmdlLXB1Ymxpc2hlci5pbnRlcmZhY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnRDaGFuZ2VQdWJsaXNoZXIgaW1wbGVtZW50cyBDb21wb25lbnRDaGFuZ2VQdWJsaXNoZXJJbnRlcmZhY2Uge1xuICAgIHByaXZhdGUgb2JzZXJ2ZXJzOiBDb21wb25lbnRDaGFuZ2VPYnNlcnZlckludGVyZmFjZVtdID0gW107XG5cbiAgICBwdWJsaWMgYXR0YWNoKG9ic2VydmVyOiBDb21wb25lbnRDaGFuZ2VPYnNlcnZlckludGVyZmFjZSk6IHZvaWQge1xuICAgICAgICBjb25zdCBpc0V4aXN0ID0gdGhpcy5vYnNlcnZlcnMuaW5jbHVkZXMob2JzZXJ2ZXIpO1xuICAgICAgICBpZiAoaXNFeGlzdCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKCdTdWJqZWN0OiBPYnNlcnZlciBoYXMgYmVlbiBhdHRhY2hlZCBhbHJlYWR5LicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLnB1c2gob2JzZXJ2ZXIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZXRhY2gob2JzZXJ2ZXI6IENvbXBvbmVudENoYW5nZU9ic2VydmVySW50ZXJmYWNlKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG9ic2VydmVySW5kZXggPSB0aGlzLm9ic2VydmVycy5pbmRleE9mKG9ic2VydmVyKTtcbiAgICAgICAgaWYgKG9ic2VydmVySW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2coJ1N1YmplY3Q6IE5vbmV4aXN0ZW50IG9ic2VydmVyLicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLnNwbGljZShvYnNlcnZlckluZGV4LCAxKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbm90aWZ5Q29tcG9uZW50TmFtZShuYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgZm9yIChjb25zdCBvYnNlcnZlciBvZiB0aGlzLm9ic2VydmVycykge1xuICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcG9uZW50U2VsZWN0ZWQobmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgUmF3SFRNTENvbnBvbmVudCBmcm9tICcuLi9odG1sLWNvbXBvbmVudHMvUmF3SFRNTENvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENzc1N0eWxlU2hlZXQge1xuICAgIHByaXZhdGUgc3RhdGljIHN0eWxlU2hlZXQgPSBkb2N1bWVudC5zdHlsZVNoZWV0c1sxXTtcblxuICAgIC8qXG4gICAgQ1NTU3R5bGVTaGVldERvY3VtZW50YXRpb246XG4gICAgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0NTU1N0eWxlU2hlZXQvYWRkUnVsZVxuICAgICovXG5cbiAgICBzdGF0aWMgaW5pdCgpIHtcbiAgICAgICAgY29uc3QgcHJpbnRDc3NGaWxlQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmludC1jc3MtZmlsZScpO1xuICAgICAgICB0aGlzLnByaW50ID0gdGhpcy5wcmludC5iaW5kKHRoaXMpO1xuICAgICAgICBwcmludENzc0ZpbGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnByaW50KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcHJpbnQoKSB7XG4gICAgICAgIGxldCBjc3NGaWxlT3V0cHV0ID0gJyc7XG5cbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5zdHlsZVNoZWV0LmNzc1J1bGVzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBjc3NGaWxlT3V0cHV0ICs9IGAke3RoaXMuc3R5bGVTaGVldC5jc3NSdWxlc1twYXJzZUludChrZXkpXS5jc3NUZXh0fVxcblxcbmBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coY3NzRmlsZU91dHB1dCk7XG5cbiAgICAgICAgLy8gVE9ETzogdmVyIHNpIGhheSBxdWUgZWxpbWluYXIgYWxnbyBkZWwgYXBwLWNvbnRhaW5lci4uLiBhbGd1biBhdHJpYnV0by4uLlxuICAgIH1cblxuICAgIHN0YXRpYyBnZXRSdWxlKGlkOiBzdHJpbmcpOiBDU1NSdWxlIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmdldFJ1bGVJbmRleChpZCk7XG4gICAgICAgIHJldHVybiB0aGlzLnN0eWxlU2hlZXQuY3NzUnVsZXNbaW5kZXhdO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRSdWxlSW5kZXgoaWQ6IHN0cmluZyk6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQoT2JqZWN0LmtleXModGhpcy5zdHlsZVNoZWV0LmNzc1J1bGVzKS5maW5kKGtleSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLnN0eWxlU2hlZXQuY3NzUnVsZXNbcGFyc2VJbnQoa2V5KV1bJ3NlbGVjdG9yVGV4dCddXG4gICAgICAgICAgICByZXR1cm4gY2xhc3NOYW1lID09PSBgLiR7aWR9YFxuICAgICAgICB9KSlcblxuICAgICAgICBpZihpc05hTihpbmRleCkpe1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRSdWxlcyhpZDogc3RyaW5nKTogQ1NTUnVsZVtdIHtcbiAgICAgICAgY29uc3QgaW5kZXhlcyA9IHRoaXMuZ2V0UnVsZXNJbmRleGVzKGlkKTtcbiAgICAgICAgcmV0dXJuIGluZGV4ZXMubWFwKChpbmRleCkgPT4gdGhpcy5zdHlsZVNoZWV0LmNzc1J1bGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldEFsbFJ1bGVzKCk6IENTU1J1bGVbXSB7XG4gICAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMuc3R5bGVTaGVldC5jc3NSdWxlcyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFJ1bGVzSW5kZXhlcyhpZDogc3RyaW5nKTogbnVtYmVyW10ge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5zdHlsZVNoZWV0LmNzc1J1bGVzKVxuICAgICAgICAgICAgLmZpbHRlcihrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMuc3R5bGVTaGVldC5jc3NSdWxlc1twYXJzZUludChrZXkpXVsnc2VsZWN0b3JUZXh0J11cbiAgICAgICAgICAgICAgICByZXR1cm4gY2xhc3NOYW1lID09PSBgLiR7aWR9YCB8fCBjbGFzc05hbWUuaW5jbHVkZXMoYC4ke2lkfTpgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5tYXAoKGluZGV4KSA9PiBwYXJzZUludChpbmRleCkpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRSdWxlU3R5bGVzKGlkOiBzdHJpbmcpOiBDU1NTdHlsZURlY2xhcmF0aW9uIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmdldFJ1bGVJbmRleChpZCk7XG4gICAgICAgIGNvbnN0IHN0eWxlcyA9IHRoaXMuc3R5bGVTaGVldC5jc3NSdWxlc1tpbmRleF07XG4gICAgICAgIHJldHVybiBzdHlsZXMgPyBzdHlsZXNbJ3N0eWxlJ10gOiB7fTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVtb3ZlUnVsZShpZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRSdWxlSW5kZXgoaWQpO1xuICAgICAgICBsZXQgZXhpc3RzUnVsZUZvckFub3RoZXJDb21wb25lbnQgPSBmYWxzZTtcblxuICAgICAgICBSYXdIVE1MQ29ucG9uZW50Lmluc3RhbmNlcy5mb3JFYWNoKChpbnN0YW5jZSkgPT4ge1xuICAgICAgICAgICAgaWYoaW5zdGFuY2UuY2xhc3NMaXN0LmNvbnRhaW5zKGlkKSkge1xuICAgICAgICAgICAgICAgIGV4aXN0c1J1bGVGb3JBbm90aGVyQ29tcG9uZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBpZighZXhpc3RzUnVsZUZvckFub3RoZXJDb21wb25lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuc3R5bGVTaGVldC5kZWxldGVSdWxlKGluZGV4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyByZW1vdmVSdWxlQnlJbmRleChpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3R5bGVTaGVldC5kZWxldGVSdWxlKGluZGV4KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaW5zZXJ0UnVsZShydWxlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5zdHlsZVNoZWV0Lmluc2VydFJ1bGUocnVsZSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNoYW5nZVJ1bGVOYW1lKGN1cnJlbnRSdWxlOiBzdHJpbmcsIG5ld1J1bGVOYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFJ1bGVJbmRleCA9IHRoaXMuZ2V0UnVsZUluZGV4KGN1cnJlbnRSdWxlKTtcbiAgICAgICAgY29uc3QgbmV3UnVsZSA9IHRoaXMuc3R5bGVTaGVldC5jc3NSdWxlc1tjdXJyZW50UnVsZUluZGV4XS5jc3NUZXh0LnJlcGxhY2UoY3VycmVudFJ1bGUsIG5ld1J1bGVOYW1lKTtcbiAgICAgICAgdGhpcy5yZW1vdmVSdWxlQnlJbmRleChjdXJyZW50UnVsZUluZGV4KTtcbiAgICAgICAgdGhpcy5pbnNlcnRSdWxlKG5ld1J1bGUpO1xuICAgIH1cblxuICAgIHN0YXRpYyBkdXBsaWNhdGVSdWxlKHJ1bGVUb0R1cGxpY2F0ZTogc3RyaW5nLCBuZXdOYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgcnVsZVRvRHVwbGljYXRlSW5kZXggPSB0aGlzLmdldFJ1bGVJbmRleChydWxlVG9EdXBsaWNhdGUpO1xuICAgICAgICBjb25zdCBuZXdSdWxlID1cbiAgICAgICAgICAgIHRoaXMuc3R5bGVTaGVldC5jc3NSdWxlc1tydWxlVG9EdXBsaWNhdGVJbmRleF0uY3NzVGV4dC5yZXBsYWNlKHJ1bGVUb0R1cGxpY2F0ZSwgbmV3TmFtZSk7XG4gICAgICAgIHRoaXMuaW5zZXJ0UnVsZShuZXdSdWxlKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50Q2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2UgZnJvbSAnLi4vY29tbW9uL2ludGVyZmFjZXMvY29tcG9uZW50LWNoYW5nZS1vYnNlcnZlci5pbnRlcmZhY2UnO1xuXG5pbXBvcnQgQW5jaG9yQnVpbGRlciBmcm9tICcuLi9jb21tb24vbW9kZWxzL0FuY2hvckJ1aWxkZXInO1xuaW1wb3J0IFJhd0hUTUxDb25wb25lbnQgZnJvbSAnLi9SYXdIVE1MQ29tcG9uZW50JztcblxuaW1wb3J0IENzc1N0eWxlU2hlZXQgZnJvbSAnLi4vY3NzLXN0eWxlc2hlZXQvY3NzLXN0eWxlc2hlZXQnO1xuXG5pbXBvcnQgZGVmaW5lRWxlbWVudE5hbWUgZnJvbSAnLi4vY29tbW9uL2Z1bmN0aW9ucy9kZWZpbmUtZWxlbWVudC1uYW1lJztcbmltcG9ydCB7IEFkZENvbXBvbmVudEVudW0gfSBmcm9tICcuLi9jb21tb24vZW51bXMvYWRkLWNvbXBvbmVudC5lbnVtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW5jaG9yIGV4dGVuZHMgUmF3SFRNTENvbnBvbmVudCBpbXBsZW1lbnRzIENvbXBvbmVudENoYW5nZU9ic2VydmVySW50ZXJmYWNlIHtcbiAgICBwcml2YXRlIHN0YXRpYyBpdGVyYXRvciA9IDA7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGRlZmluZUVsZW1lbnROYW1lKGBhbmNob3Ike0FuY2hvci5pdGVyYXRvcisrfWAsIFJhd0hUTUxDb25wb25lbnQuaW5zdGFuY2VzKTtcblxuICAgICAgICBDc3NTdHlsZVNoZWV0Lmluc2VydFJ1bGUoYC4ke25hbWV9IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZVxuICAgICAgICB9YCk7XG5cbiAgICAgICAgY29uc3QgZWxlbWVudCA9IG5ldyBBbmNob3JCdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXROYW1lKG5hbWUpXG4gICAgICAgICAgICAuc2V0SWQobmFtZSlcbiAgICAgICAgICAgIC5hZGRDc3NDbGFzc05hbWUobmFtZSlcbiAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ05ldyBBbmNob3InKVxuICAgICAgICAgICAgLnNldEhpcGVybGluaygnJylcbiAgICAgICAgICAgIC5kcmFnZ2FibGUoKVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG5cbiAgICAgICAgc3VwZXIoZWxlbWVudCk7XG5cbiAgICAgICAgdGhpcy5vcGVuRWxlbWVudENvbmZpZ3MgPSB0aGlzLm9wZW5FbGVtZW50Q29uZmlncy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRyYWdMZWF2ZSA9IHRoaXMuZHJhZ0xlYXZlLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5fZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLmRyYWdTdGFydFdpdGhUYXJnZXRJZCk7XG4gICAgICAgIHRoaXMuX2RvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgdGhpcy5kcmFnTGVhdmUpO1xuXG4gICAgICAgIHRoaXMuX2RvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9wZW5FbGVtZW50Q29uZmlncyk7XG4gICAgfVxuXG4gICAgZ2V0IGRvbUVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kb21FbGVtZW50O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvcGVuRWxlbWVudENvbmZpZ3MoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdGhpcy5zZWxlY3RvclZhbHVlKCk7XG4gICAgICAgIHRoaXMuYnVpbGRFbGVtZW50Q29uZmlncygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb21wb25lbnRTZWxlY3RlZChjb21wb25lbnQpIHtcbiAgICAgICAgaWYoY29tcG9uZW50ID09PSB0aGlzLl9kb21FbGVtZW50WyduYW1lJ10pIHtcbiAgICAgICAgICAgIHRoaXMuYnVpbGRFbGVtZW50Q29uZmlncygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBidWlsZEVsZW1lbnRDb25maWdzKCkge1xuICAgICAgICB0aGlzLmluc2VydENvbXBvbmVudEFmdGVyKFxuICAgICAgICAgICAgQWRkQ29tcG9uZW50RW51bS5hZGRJbm5lclRleHRDaGFuZ2VDb21wb25lbnQsXG4gICAgICAgICAgICBBZGRDb21wb25lbnRFbnVtLmFkZENsYXNzTmFtZURlZmluaXRpb25Db21wb25lbnRcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBUT0RPOiBmYWx0YSBhZ3JlZ2FyIGxhIHVybCBkZWwgaHJlZiB5IHZlciBzaSBhbGdvIG1hc1xuXG4gICAgICAgIHRoaXMuYnVpbGRFbGVtZW50cygpO1xuICAgIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnRDaGFuZ2VPYnNlcnZlckludGVyZmFjZSBmcm9tICcuLi9jb21tb24vaW50ZXJmYWNlcy9jb21wb25lbnQtY2hhbmdlLW9ic2VydmVyLmludGVyZmFjZSc7XG5cbmltcG9ydCBCdXR0b25CdWlsZGVyIGZyb20gJy4uL2NvbW1vbi9tb2RlbHMvQnV0dG9uQnVpbGRlcic7XG5pbXBvcnQgUmF3SFRNTENvbnBvbmVudCBmcm9tICcuL1Jhd0hUTUxDb21wb25lbnQnO1xuXG5pbXBvcnQgQ3NzU3R5bGVTaGVldCBmcm9tICcuLi9jc3Mtc3R5bGVzaGVldC9jc3Mtc3R5bGVzaGVldCc7XG5cbmltcG9ydCBkZWZpbmVFbGVtZW50TmFtZSBmcm9tICcuLi9jb21tb24vZnVuY3Rpb25zL2RlZmluZS1lbGVtZW50LW5hbWUnO1xuaW1wb3J0IHsgQWRkQ29tcG9uZW50RW51bSB9IGZyb20gJy4uL2NvbW1vbi9lbnVtcy9hZGQtY29tcG9uZW50LmVudW0nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBSYXdIVE1MQ29ucG9uZW50IGltcGxlbWVudHMgQ29tcG9uZW50Q2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2Uge1xuICAgIHByaXZhdGUgc3RhdGljIGl0ZXJhdG9yID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBjb25zdCBuYW1lID0gZGVmaW5lRWxlbWVudE5hbWUoYGJ1dHRvbiR7QnV0dG9uLml0ZXJhdG9yKyt9YCwgUmF3SFRNTENvbnBvbmVudC5pbnN0YW5jZXMpO1xuXG4gICAgICAgIENzc1N0eWxlU2hlZXQuaW5zZXJ0UnVsZShgLiR7bmFtZX0ge1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjNENBRjUwO1xuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfWApO1xuXG4gICAgICAgIENzc1N0eWxlU2hlZXQuaW5zZXJ0UnVsZShgLiR7bmFtZX06aG92ZXIge29wYWNpdHk6IDAuNn1gKTtcblxuICAgICAgICBjb25zdCBlbGVtZW50ID0gbmV3IEJ1dHRvbkJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldE5hbWUobmFtZSlcbiAgICAgICAgICAgIC5zZXRJZChuYW1lKVxuICAgICAgICAgICAgLmFkZENzc0NsYXNzTmFtZShuYW1lKVxuICAgICAgICAgICAgLnNldElubmVyVGV4dCgnTmV3IEJ1dHRvbicpXG4gICAgICAgICAgICAuZHJhZ2dhYmxlKClcbiAgICAgICAgICAgIC5idWlsZCgpO1xuXG4gICAgICAgIHN1cGVyKGVsZW1lbnQpO1xuXG4gICAgICAgIHRoaXMub3BlbkVsZW1lbnRDb25maWdzID0gdGhpcy5vcGVuRWxlbWVudENvbmZpZ3MuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcmFnTGVhdmUgPSB0aGlzLmRyYWdMZWF2ZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuX2RvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5kcmFnU3RhcnRXaXRoVGFyZ2V0SWQpO1xuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIHRoaXMuZHJhZ0xlYXZlKTtcblxuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcGVuRWxlbWVudENvbmZpZ3MpO1xuICAgIH1cblxuICAgIGdldCBkb21FbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZG9tRWxlbWVudDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb3BlbkVsZW1lbnRDb25maWdzKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLnNlbGVjdG9yVmFsdWUoKTtcblxuXG4gICAgICAgIHRoaXMuYnVpbGRFbGVtZW50Q29uZmlncygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb21wb25lbnRTZWxlY3RlZChjb21wb25lbnQpIHtcbiAgICAgICAgaWYoY29tcG9uZW50ID09PSB0aGlzLl9kb21FbGVtZW50WyduYW1lJ10pIHtcbiAgICAgICAgICAgIHRoaXMuYnVpbGRFbGVtZW50Q29uZmlncygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBidWlsZEVsZW1lbnRDb25maWdzKCkge1xuICAgICAgICB0aGlzLmluc2VydENvbXBvbmVudEFmdGVyKFxuICAgICAgICAgICAgQWRkQ29tcG9uZW50RW51bS5hZGRJbm5lclRleHRDaGFuZ2VDb21wb25lbnQsXG4gICAgICAgICAgICBBZGRDb21wb25lbnRFbnVtLmFkZENsYXNzTmFtZURlZmluaXRpb25Db21wb25lbnRcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmluc2VydENvbXBvbmVudEJlZm9yZShcbiAgICAgICAgICAgIEFkZENvbXBvbmVudEVudW0uYWRkRGlzcGxheUFzUGFyZW50Q29tcG9uZW50LFxuICAgICAgICAgICAgQWRkQ29tcG9uZW50RW51bS5hZGREaXNwbGF5QXNDaGlsZENvbXBvbmVudFxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuYnVpbGRFbGVtZW50cygpO1xuICAgIH1cbn1cbiIsImltcG9ydCBDb250YWluZXJCdWlsZGVyIGZyb20gJy4uL2NvbW1vbi9tb2RlbHMvQ29udGFpbmVyQnVpbGRlcic7XG5pbXBvcnQgUmF3SFRNTENvbnBvbmVudCBmcm9tICcuL1Jhd0hUTUxDb21wb25lbnQnO1xuaW1wb3J0IFJhd0NvbnRhaW5lciBmcm9tICcuL1Jhd0NvbnRhaW5lcic7XG5cbmltcG9ydCBDc3NTdHlsZVNoZWV0IGZyb20gJy4uL2Nzcy1zdHlsZXNoZWV0L2Nzcy1zdHlsZXNoZWV0JztcbmltcG9ydCBjb25zdGFudHMgZnJvbSAnLi4vY29tbW9uL2NvbnN0YW50cy9jb25zdGFudHMnO1xuaW1wb3J0IGRlZmluZUVsZW1lbnROYW1lIGZyb20gJy4uL2NvbW1vbi9mdW5jdGlvbnMvZGVmaW5lLWVsZW1lbnQtbmFtZSc7XG5cbmltcG9ydCB7IERpc3BsYXlUeXBlc0VudW0gfSBmcm9tICcuLi9jb21tb24vZW51bXMvZGlzcGxheS10eXBlcy5lbnVtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGFpbmVyIGV4dGVuZHMgUmF3Q29udGFpbmVyIHtcbiAgICBwcml2YXRlIHN0YXRpYyBpdGVyYXRvciA9IDA7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGRlZmluZUVsZW1lbnROYW1lKGBjb250YWluZXIke0NvbnRhaW5lci5pdGVyYXRvcisrfWAsIFJhd0hUTUxDb25wb25lbnQuaW5zdGFuY2VzKTtcblxuICAgICAgICBDc3NTdHlsZVNoZWV0Lmluc2VydFJ1bGUoYC4ke25hbWV9IHtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiAke0Rpc3BsYXlUeXBlc0VudW0uZmxleH07XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwyNTUsMjU1KTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCByZ2IoMCwwLDApO1xuICAgICAgICB9YCk7XG5cbiAgICAgICAgQ3NzU3R5bGVTaGVldC5pbnNlcnRSdWxlKGAuJHtuYW1lfTpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbnN0YW50cy5JTlZFUlRFRF9CQUNLR1JPVU5EX0NPTE9SfTtcbiAgICAgICAgfWApO1xuXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0TmFtZShuYW1lKVxuICAgICAgICAgICAgLnNldElkKG5hbWUpXG4gICAgICAgICAgICAuYWRkQ3NzQ2xhc3NOYW1lKG5hbWUpXG4gICAgICAgICAgICAuZHJhZ2dhYmxlKClcbiAgICAgICAgICAgIC5idWlsZCgpO1xuXG4gICAgICAgIHN1cGVyKGVsZW1lbnQpO1xuICAgIH1cbn1cbiIsImltcG9ydCBGb3JtQnVpbGRlciBmcm9tICcuLi9jb21tb24vbW9kZWxzL0Zvcm1CdWlsZGVyJztcbmltcG9ydCBSYXdIVE1MQ29ucG9uZW50IGZyb20gJy4vUmF3SFRNTENvbXBvbmVudCc7XG5pbXBvcnQgUmF3Q29udGFpbmVyIGZyb20gJy4vUmF3Q29udGFpbmVyJztcblxuaW1wb3J0IENzc1N0eWxlU2hlZXQgZnJvbSAnLi4vY3NzLXN0eWxlc2hlZXQvY3NzLXN0eWxlc2hlZXQnO1xuaW1wb3J0IGNvbnN0YW50cyBmcm9tICcuLi9jb21tb24vY29uc3RhbnRzL2NvbnN0YW50cyc7XG5pbXBvcnQgZGVmaW5lRWxlbWVudE5hbWUgZnJvbSAnLi4vY29tbW9uL2Z1bmN0aW9ucy9kZWZpbmUtZWxlbWVudC1uYW1lJztcblxuaW1wb3J0IHsgRGlzcGxheVR5cGVzRW51bSB9IGZyb20gJy4uL2NvbW1vbi9lbnVtcy9kaXNwbGF5LXR5cGVzLmVudW0nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtIGV4dGVuZHMgUmF3Q29udGFpbmVyIHtcbiAgICBwcml2YXRlIHN0YXRpYyBpdGVyYXRvciA9IDA7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGRlZmluZUVsZW1lbnROYW1lKGBmb3JtJHtGb3JtLml0ZXJhdG9yKyt9YCwgUmF3SFRNTENvbnBvbmVudC5pbnN0YW5jZXMpO1xuXG4gICAgICAgIENzc1N0eWxlU2hlZXQuaW5zZXJ0UnVsZShgLiR7bmFtZX0ge1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6ICR7RGlzcGxheVR5cGVzRW51bS5mbGV4fTtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LDI1NSwyNTUpO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggZGFzaGVkIHJnYigwLDAsMCk7XG4gICAgICAgIH1gKTtcblxuICAgICAgICBDc3NTdHlsZVNoZWV0Lmluc2VydFJ1bGUoYC4ke25hbWV9OmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29uc3RhbnRzLklOVkVSVEVEX0JBQ0tHUk9VTkRfQ09MT1J9O1xuICAgICAgICB9YCk7XG5cbiAgICAgICAgY29uc3QgZWxlbWVudCA9IG5ldyBGb3JtQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0TmFtZShuYW1lKVxuICAgICAgICAgICAgLnNldElkKG5hbWUpXG4gICAgICAgICAgICAuYWRkQ3NzQ2xhc3NOYW1lKG5hbWUpXG4gICAgICAgICAgICAuZHJhZ2dhYmxlKClcbiAgICAgICAgICAgIC5idWlsZCgpO1xuXG4gICAgICAgIHN1cGVyKGVsZW1lbnQpO1xuXG4gICAgICAgIHRoaXMuX2RvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy5ldmVudFByZXZlbnREZWZhdWx0KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGV2ZW50UHJldmVudERlZmF1bHQoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50Q2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2UgZnJvbSAnLi4vY29tbW9uL2ludGVyZmFjZXMvY29tcG9uZW50LWNoYW5nZS1vYnNlcnZlci5pbnRlcmZhY2UnO1xuXG5pbXBvcnQgSW1hZ2VCdWlsZGVyIGZyb20gJy4uL2NvbW1vbi9tb2RlbHMvSW1hZ2VCdWlsZGVyJztcbmltcG9ydCBSYXdIVE1MQ29ucG9uZW50IGZyb20gJy4vUmF3SFRNTENvbXBvbmVudCc7XG5cbmltcG9ydCBDc3NTdHlsZVNoZWV0IGZyb20gJy4uL2Nzcy1zdHlsZXNoZWV0L2Nzcy1zdHlsZXNoZWV0JztcbmltcG9ydCBkZWZpbmVFbGVtZW50TmFtZSBmcm9tICcuLi9jb21tb24vZnVuY3Rpb25zL2RlZmluZS1lbGVtZW50LW5hbWUnO1xuaW1wb3J0IHsgQWRkQ29tcG9uZW50RW51bSB9IGZyb20gJy4uL2NvbW1vbi9lbnVtcy9hZGQtY29tcG9uZW50LmVudW0nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZSBleHRlbmRzIFJhd0hUTUxDb25wb25lbnQgaW1wbGVtZW50cyBDb21wb25lbnRDaGFuZ2VPYnNlcnZlckludGVyZmFjZSB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaXRlcmF0b3IgPSAwO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBkZWZpbmVFbGVtZW50TmFtZShgaW1hZ2Uke0ltYWdlLml0ZXJhdG9yKyt9YCwgUmF3SFRNTENvbnBvbmVudC5pbnN0YW5jZXMpO1xuXG4gICAgICAgIENzc1N0eWxlU2hlZXQuaW5zZXJ0UnVsZShgLiR7bmFtZX0ge1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsMjU1LDI1NSk7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBkYXNoZWQgcmdiKDAsMCwwKTtcbiAgICAgICAgfWApO1xuXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBuZXcgSW1hZ2VCdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXROYW1lKG5hbWUpXG4gICAgICAgICAgICAuc2V0SWQobmFtZSlcbiAgICAgICAgICAgIC5hZGRDc3NDbGFzc05hbWUobmFtZSlcbiAgICAgICAgICAgIC5zZXRVcmwoKVxuICAgICAgICAgICAgLmRyYWdnYWJsZSgpXG4gICAgICAgICAgICAuYnVpbGQoKTtcblxuICAgICAgICBzdXBlcihlbGVtZW50KTtcblxuICAgICAgICB0aGlzLm9wZW5FbGVtZW50Q29uZmlncyA9IHRoaXMub3BlbkVsZW1lbnRDb25maWdzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhZ0xlYXZlID0gdGhpcy5kcmFnTGVhdmUuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuZHJhZ1N0YXJ0V2l0aFRhcmdldElkKTtcbiAgICAgICAgdGhpcy5fZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCB0aGlzLmRyYWdMZWF2ZSk7XG5cbiAgICAgICAgdGhpcy5fZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3BlbkVsZW1lbnRDb25maWdzKTtcbiAgICB9XG5cbiAgICBnZXQgZG9tRWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RvbUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9wZW5FbGVtZW50Q29uZmlncyhldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5zZWxlY3RvclZhbHVlKCk7XG4gICAgICAgIHRoaXMuYnVpbGRFbGVtZW50Q29uZmlncygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb21wb25lbnRTZWxlY3RlZChjb21wb25lbnQpIHtcbiAgICAgICAgaWYgKGNvbXBvbmVudCA9PT0gdGhpcy5fZG9tRWxlbWVudFsnbmFtZSddKSB7XG4gICAgICAgICAgICB0aGlzLmJ1aWxkRWxlbWVudENvbmZpZ3MoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgYnVpbGRFbGVtZW50Q29uZmlncygpIHtcbiAgICAgICAgdGhpcy5pbnNlcnRDb21wb25lbnRBZnRlcihcbiAgICAgICAgICAgIEFkZENvbXBvbmVudEVudW0uYWRkVXJsSW5wdXRDb21wb25lbnQsXG4gICAgICAgICAgICBBZGRDb21wb25lbnRFbnVtLmFkZENsYXNzTmFtZURlZmluaXRpb25Db21wb25lbnRcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmJ1aWxkRWxlbWVudHMoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50Q2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2UgZnJvbSAnLi4vY29tbW9uL2ludGVyZmFjZXMvY29tcG9uZW50LWNoYW5nZS1vYnNlcnZlci5pbnRlcmZhY2UnO1xuXG5pbXBvcnQgSW5wdXRCdWlsZGVyIGZyb20gJy4uL2NvbW1vbi9tb2RlbHMvSW5wdXRCdWlsZGVyJztcbmltcG9ydCBSYXdIVE1MQ29ucG9uZW50IGZyb20gJy4vUmF3SFRNTENvbXBvbmVudCc7XG5cbmltcG9ydCBkZWZpbmVFbGVtZW50TmFtZSBmcm9tICcuLi9jb21tb24vZnVuY3Rpb25zL2RlZmluZS1lbGVtZW50LW5hbWUnO1xuXG5pbXBvcnQgQ3NzU3R5bGVTaGVldCBmcm9tICcuLi9jc3Mtc3R5bGVzaGVldC9jc3Mtc3R5bGVzaGVldCc7XG5cbmltcG9ydCB7IElucHV0VHlwZUVudW0gfSBmcm9tICcuLi9jb21tb24vZW51bXMvaW5wdXQtdHlwZS5lbnVtJztcbmltcG9ydCB7IEFkZENvbXBvbmVudEVudW0gfSBmcm9tICcuLi9jb21tb24vZW51bXMvYWRkLWNvbXBvbmVudC5lbnVtJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IGV4dGVuZHMgUmF3SFRNTENvbnBvbmVudCBpbXBsZW1lbnRzIENvbXBvbmVudENoYW5nZU9ic2VydmVySW50ZXJmYWNlIHtcbiAgICBwcml2YXRlIHN0YXRpYyBpdGVyYXRvciA9IDA7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGRlZmluZUVsZW1lbnROYW1lKGBpbnB1dCR7SW5wdXQuaXRlcmF0b3IrK31gLCBSYXdIVE1MQ29ucG9uZW50Lmluc3RhbmNlcyk7XG5cbiAgICAgICAgQ3NzU3R5bGVTaGVldC5pbnNlcnRSdWxlKGAuJHtuYW1lfSB7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDNweCAjZGRkO1xuICAgICAgICB9YCk7XG5cbiAgICAgICAgQ3NzU3R5bGVTaGVldC5pbnNlcnRSdWxlKGAuJHtuYW1lfTpob3ZlciB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgIH1gKTtcblxuICAgICAgICBjb25zdCBlbGVtZW50ID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLnRleHQpXG4gICAgICAgICAgICAuc2V0TmFtZShuYW1lKVxuICAgICAgICAgICAgLnNldElkKG5hbWUpXG4gICAgICAgICAgICAuYWRkQ3NzQ2xhc3NOYW1lKG5hbWUpXG4gICAgICAgICAgICAuZHJhZ2dhYmxlKClcbiAgICAgICAgICAgIC5idWlsZCgpO1xuXG4gICAgICAgIHN1cGVyKGVsZW1lbnQpO1xuXG4gICAgICAgIHRoaXMub3BlbkVsZW1lbnRDb25maWdzID0gdGhpcy5vcGVuRWxlbWVudENvbmZpZ3MuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcmFnTGVhdmUgPSB0aGlzLmRyYWdMZWF2ZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuX2RvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5kcmFnU3RhcnRXaXRoVGFyZ2V0SWQpO1xuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIHRoaXMuZHJhZ0xlYXZlKTtcblxuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcGVuRWxlbWVudENvbmZpZ3MpO1xuICAgIH1cblxuICAgIGdldCBkb21FbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZG9tRWxlbWVudDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb3BlbkVsZW1lbnRDb25maWdzKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLnNlbGVjdG9yVmFsdWUoKTtcbiAgICAgICAgdGhpcy5idWlsZEVsZW1lbnRDb25maWdzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbXBvbmVudFNlbGVjdGVkKGNvbXBvbmVudCkge1xuICAgICAgICBpZihjb21wb25lbnQgPT09IHRoaXMuX2RvbUVsZW1lbnRbJ25hbWUnXSkge1xuICAgICAgICAgICAgdGhpcy5idWlsZEVsZW1lbnRDb25maWdzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGJ1aWxkRWxlbWVudENvbmZpZ3MoKSB7XG4gICAgICAgIHRoaXMuaW5zZXJ0Q29tcG9uZW50QWZ0ZXIoXG4gICAgICAgICAgICBBZGRDb21wb25lbnRFbnVtLmFkZElucHV0VHlwZVNlbGVjdG9yQ29tcG9uZW50LFxuICAgICAgICAgICAgQWRkQ29tcG9uZW50RW51bS5hZGRDbGFzc05hbWVEZWZpbml0aW9uQ29tcG9uZW50XG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5idWlsZEVsZW1lbnRzKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudENoYW5nZU9ic2VydmVySW50ZXJmYWNlIGZyb20gJy4uL2NvbW1vbi9pbnRlcmZhY2VzL2NvbXBvbmVudC1jaGFuZ2Utb2JzZXJ2ZXIuaW50ZXJmYWNlJztcblxuaW1wb3J0IExhYmVsQnVpbGRlciBmcm9tICcuLi9jb21tb24vbW9kZWxzL0xhYmVsQnVpbGRlcic7XG5pbXBvcnQgUmF3SFRNTENvbnBvbmVudCBmcm9tICcuL1Jhd0hUTUxDb21wb25lbnQnO1xuXG5pbXBvcnQgQ3NzU3R5bGVTaGVldCBmcm9tICcuLi9jc3Mtc3R5bGVzaGVldC9jc3Mtc3R5bGVzaGVldCc7XG5cbmltcG9ydCBkZWZpbmVFbGVtZW50TmFtZSBmcm9tICcuLi9jb21tb24vZnVuY3Rpb25zL2RlZmluZS1lbGVtZW50LW5hbWUnO1xuaW1wb3J0IHsgQWRkQ29tcG9uZW50RW51bSB9IGZyb20gJy4uL2NvbW1vbi9lbnVtcy9hZGQtY29tcG9uZW50LmVudW0nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYWJlbCBleHRlbmRzIFJhd0hUTUxDb25wb25lbnQgaW1wbGVtZW50cyBDb21wb25lbnRDaGFuZ2VPYnNlcnZlckludGVyZmFjZSB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaXRlcmF0b3IgPSAwO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBkZWZpbmVFbGVtZW50TmFtZShgbGFiZWwke0xhYmVsLml0ZXJhdG9yKyt9YCwgUmF3SFRNTENvbnBvbmVudC5pbnN0YW5jZXMpO1xuXG4gICAgICAgIENzc1N0eWxlU2hlZXQuaW5zZXJ0UnVsZShgLiR7bmFtZX0ge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lXG4gICAgICAgIH1gKTtcblxuICAgICAgICBjb25zdCBlbGVtZW50ID0gbmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0TmFtZShuYW1lKVxuICAgICAgICAgICAgLnNldElkKG5hbWUpXG4gICAgICAgICAgICAuYWRkQ3NzQ2xhc3NOYW1lKG5hbWUpXG4gICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdOZXcgTGFiZWwnKVxuICAgICAgICAgICAgLmRyYWdnYWJsZSgpXG4gICAgICAgICAgICAuYnVpbGQoKTtcblxuICAgICAgICBzdXBlcihlbGVtZW50KTtcblxuICAgICAgICB0aGlzLm9wZW5FbGVtZW50Q29uZmlncyA9IHRoaXMub3BlbkVsZW1lbnRDb25maWdzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhZ0xlYXZlID0gdGhpcy5kcmFnTGVhdmUuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuZHJhZ1N0YXJ0V2l0aFRhcmdldElkKTtcbiAgICAgICAgdGhpcy5fZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCB0aGlzLmRyYWdMZWF2ZSk7XG5cbiAgICAgICAgdGhpcy5fZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3BlbkVsZW1lbnRDb25maWdzKTtcbiAgICB9XG5cbiAgICBnZXQgZG9tRWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RvbUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9wZW5FbGVtZW50Q29uZmlncyhldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5zZWxlY3RvclZhbHVlKCk7XG5cblxuICAgICAgICB0aGlzLmJ1aWxkRWxlbWVudENvbmZpZ3MoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29tcG9uZW50U2VsZWN0ZWQoY29tcG9uZW50KSB7XG4gICAgICAgIGlmKGNvbXBvbmVudCA9PT0gdGhpcy5fZG9tRWxlbWVudFsnbmFtZSddKSB7XG4gICAgICAgICAgICB0aGlzLmJ1aWxkRWxlbWVudENvbmZpZ3MoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgYnVpbGRFbGVtZW50Q29uZmlncygpIHtcbiAgICAgICAgdGhpcy5pbnNlcnRDb21wb25lbnRBZnRlcihcbiAgICAgICAgICAgIEFkZENvbXBvbmVudEVudW0uYWRkSW5uZXJUZXh0Q2hhbmdlQ29tcG9uZW50LFxuICAgICAgICAgICAgQWRkQ29tcG9uZW50RW51bS5hZGRDbGFzc05hbWVEZWZpbml0aW9uQ29tcG9uZW50XG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5idWlsZEVsZW1lbnRzKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudENoYW5nZU9ic2VydmVySW50ZXJmYWNlIGZyb20gJy4uL2NvbW1vbi9pbnRlcmZhY2VzL2NvbXBvbmVudC1jaGFuZ2Utb2JzZXJ2ZXIuaW50ZXJmYWNlJztcblxuaW1wb3J0IExpc3RJdGVtQnVpbGRlciBmcm9tICcuLi9jb21tb24vbW9kZWxzL0xpc3RJdGVtQnVpbGRlcic7XG5pbXBvcnQgUmF3SFRNTENvbnBvbmVudCBmcm9tICcuL1Jhd0hUTUxDb21wb25lbnQnO1xuXG5pbXBvcnQgQ3NzU3R5bGVTaGVldCBmcm9tICcuLi9jc3Mtc3R5bGVzaGVldC9jc3Mtc3R5bGVzaGVldCc7XG5cbmltcG9ydCBkZWZpbmVFbGVtZW50TmFtZSBmcm9tICcuLi9jb21tb24vZnVuY3Rpb25zL2RlZmluZS1lbGVtZW50LW5hbWUnO1xuaW1wb3J0IHsgQWRkQ29tcG9uZW50RW51bSB9IGZyb20gJy4uL2NvbW1vbi9lbnVtcy9hZGQtY29tcG9uZW50LmVudW0nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0SXRlbSBleHRlbmRzIFJhd0hUTUxDb25wb25lbnQgaW1wbGVtZW50cyBDb21wb25lbnRDaGFuZ2VPYnNlcnZlckludGVyZmFjZSB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaXRlcmF0b3IgPSAwO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBkZWZpbmVFbGVtZW50TmFtZShgbGlzdF9pdGVtJHtMaXN0SXRlbS5pdGVyYXRvcisrfWAsIFJhd0hUTUxDb25wb25lbnQuaW5zdGFuY2VzKTtcblxuICAgICAgICBDc3NTdHlsZVNoZWV0Lmluc2VydFJ1bGUoYC4ke25hbWV9IHt9YCk7XG5cbiAgICAgICAgY29uc3QgZWxlbWVudCA9IG5ldyBMaXN0SXRlbUJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldE5hbWUobmFtZSlcbiAgICAgICAgICAgIC5zZXRJZChuYW1lKVxuICAgICAgICAgICAgLmFkZENzc0NsYXNzTmFtZShuYW1lKVxuICAgICAgICAgICAgLnNldElubmVyVGV4dCgnTmV3IExpc3QgSXRlbScpXG4gICAgICAgICAgICAuZHJhZ2dhYmxlKClcbiAgICAgICAgICAgIC5idWlsZCgpO1xuXG4gICAgICAgIHN1cGVyKGVsZW1lbnQpO1xuXG4gICAgICAgIHRoaXMub3BlbkVsZW1lbnRDb25maWdzID0gdGhpcy5vcGVuRWxlbWVudENvbmZpZ3MuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcmFnTGVhdmUgPSB0aGlzLmRyYWdMZWF2ZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuX2RvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5kcmFnU3RhcnRXaXRoVGFyZ2V0SWQpO1xuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIHRoaXMuZHJhZ0xlYXZlKTtcblxuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcGVuRWxlbWVudENvbmZpZ3MpO1xuICAgIH1cblxuICAgIGdldCBkb21FbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZG9tRWxlbWVudDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb3BlbkVsZW1lbnRDb25maWdzKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLnNlbGVjdG9yVmFsdWUoKTtcblxuXG4gICAgICAgIHRoaXMuYnVpbGRFbGVtZW50Q29uZmlncygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb21wb25lbnRTZWxlY3RlZChjb21wb25lbnQpIHtcbiAgICAgICAgaWYoY29tcG9uZW50ID09PSB0aGlzLl9kb21FbGVtZW50WyduYW1lJ10pIHtcbiAgICAgICAgICAgIHRoaXMuYnVpbGRFbGVtZW50Q29uZmlncygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBidWlsZEVsZW1lbnRDb25maWdzKCkge1xuICAgICAgICB0aGlzLmluc2VydENvbXBvbmVudEFmdGVyKFxuICAgICAgICAgICAgQWRkQ29tcG9uZW50RW51bS5hZGRJbm5lclRleHRDaGFuZ2VDb21wb25lbnQsXG4gICAgICAgICAgICBBZGRDb21wb25lbnRFbnVtLmFkZENsYXNzTmFtZURlZmluaXRpb25Db21wb25lbnRcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmJ1aWxkRWxlbWVudHMoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgT3JkZXJlZExpc3RCdWlsZGVyIGZyb20gJy4uL2NvbW1vbi9tb2RlbHMvT3JkZXJlZExpc3RCdWlsZGVyJztcbmltcG9ydCBSYXdIVE1MQ29ucG9uZW50IGZyb20gJy4vUmF3SFRNTENvbXBvbmVudCc7XG5pbXBvcnQgUmF3Q29udGFpbmVyIGZyb20gJy4vUmF3Q29udGFpbmVyJztcblxuaW1wb3J0IENzc1N0eWxlU2hlZXQgZnJvbSAnLi4vY3NzLXN0eWxlc2hlZXQvY3NzLXN0eWxlc2hlZXQnO1xuaW1wb3J0IGNvbnN0YW50cyBmcm9tICcuLi9jb21tb24vY29uc3RhbnRzL2NvbnN0YW50cyc7XG5pbXBvcnQgZGVmaW5lRWxlbWVudE5hbWUgZnJvbSAnLi4vY29tbW9uL2Z1bmN0aW9ucy9kZWZpbmUtZWxlbWVudC1uYW1lJztcblxuaW1wb3J0IHsgRGlzcGxheVR5cGVzRW51bSB9IGZyb20gJy4uL2NvbW1vbi9lbnVtcy9kaXNwbGF5LXR5cGVzLmVudW0nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmRlcmVkTGlzdCBleHRlbmRzIFJhd0NvbnRhaW5lciB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaXRlcmF0b3IgPSAwO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBkZWZpbmVFbGVtZW50TmFtZShgb3JkZXJlZF9saXN0JHtPcmRlcmVkTGlzdC5pdGVyYXRvcisrfWAsIFJhd0hUTUxDb25wb25lbnQuaW5zdGFuY2VzKTtcblxuICAgICAgICBDc3NTdHlsZVNoZWV0Lmluc2VydFJ1bGUoYC4ke25hbWV9IHtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiAke0Rpc3BsYXlUeXBlc0VudW0uZmxleH07XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwyNTUsMjU1KTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCByZ2IoMCwwLDApO1xuICAgICAgICB9YCk7XG5cbiAgICAgICAgQ3NzU3R5bGVTaGVldC5pbnNlcnRSdWxlKGAuJHtuYW1lfTpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbnN0YW50cy5JTlZFUlRFRF9CQUNLR1JPVU5EX0NPTE9SfTtcbiAgICAgICAgfWApO1xuXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBuZXcgT3JkZXJlZExpc3RCdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXROYW1lKG5hbWUpXG4gICAgICAgICAgICAuc2V0SWQobmFtZSlcbiAgICAgICAgICAgIC5hZGRDc3NDbGFzc05hbWUobmFtZSlcbiAgICAgICAgICAgIC5kcmFnZ2FibGUoKVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG5cbiAgICAgICAgc3VwZXIoZWxlbWVudCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudENoYW5nZU9ic2VydmVySW50ZXJmYWNlIGZyb20gJy4uL2NvbW1vbi9pbnRlcmZhY2VzL2NvbXBvbmVudC1jaGFuZ2Utb2JzZXJ2ZXIuaW50ZXJmYWNlJztcblxuaW1wb3J0IFJhd0hUTUxDb25wb25lbnQgZnJvbSAnLi9SYXdIVE1MQ29tcG9uZW50JztcblxuaW1wb3J0IGNvbnN0YW50cyBmcm9tICcuLi9jb21tb24vY29uc3RhbnRzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBBZGRDb21wb25lbnRFbnVtIH0gZnJvbSAnLi4vY29tbW9uL2VudW1zL2FkZC1jb21wb25lbnQuZW51bSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhd0NvbnRhaW5lciBleHRlbmRzIFJhd0hUTUxDb25wb25lbnQgaW1wbGVtZW50cyBDb21wb25lbnRDaGFuZ2VPYnNlcnZlckludGVyZmFjZSB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgc3VwZXIoZWxlbWVudCk7XG5cbiAgICAgICAgdGhpcy5kcmFnRW50ZXIgPSB0aGlzLmRyYWdFbnRlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRyYWdMZWF2ZUZvclRoaXNFbGVtZW50ID0gdGhpcy5kcmFnTGVhdmVGb3JUaGlzRWxlbWVudC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRyb3AgPSB0aGlzLmRyb3AuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLm9wZW5FbGVtZW50Q29uZmlncyA9IHRoaXMub3BlbkVsZW1lbnRDb25maWdzLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5fZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLmRyYWdTdGFydFdpdGhUYXJnZXRJZCk7XG4gICAgICAgIHRoaXMuX2RvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgdGhpcy5kcmFnRW50ZXIpO1xuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIHRoaXMuZHJhZ0xlYXZlRm9yVGhpc0VsZW1lbnQpO1xuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLmRyb3ApO1xuXG4gICAgICAgIHRoaXMuX2RvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9wZW5FbGVtZW50Q29uZmlncyk7XG4gICAgfVxuXG4gICAgZ2V0IGRvbUVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kb21FbGVtZW50O1xuICAgIH1cblxuICAgIHByaXZhdGUgZHJhZ0VudGVyKGV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgdGhpcy5kb21FbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbnN0YW50cy5JTlZFUlRFRF9CQUNLR1JPVU5EX0NPTE9SO1xuICAgIH1cblxuICAgIHByaXZhdGUgZHJhZ0xlYXZlRm9yVGhpc0VsZW1lbnQoZXZlbnQ6IERyYWdFdmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICB0aGlzLmRvbUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyc7XG4gICAgICAgIHRoaXMuX2RvbUVsZW1lbnQuYXR0cmlidXRlcy5yZW1vdmVOYW1lZEl0ZW0oJ3N0eWxlJyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkcm9wKCkge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyc7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9wZW5FbGVtZW50Q29uZmlncyhldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5zZWxlY3RvclZhbHVlKCk7XG5cbiAgICAgICAgdGhpcy5idWlsZEVsZW1lbnRDb25maWdzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbXBvbmVudFNlbGVjdGVkKGNvbXBvbmVudCkge1xuICAgICAgICBpZihjb21wb25lbnQgPT09IHRoaXMuX2RvbUVsZW1lbnRbJ25hbWUnXSkge1xuICAgICAgICAgICAgdGhpcy5idWlsZEVsZW1lbnRDb25maWdzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGJ1aWxkRWxlbWVudENvbmZpZ3MoKSB7XG4gICAgICAgIHRoaXMuaW5zZXJ0Q29tcG9uZW50QmVmb3JlKFxuICAgICAgICAgICAgQWRkQ29tcG9uZW50RW51bS5hZGREaXNwbGF5QXNQYXJlbnRDb21wb25lbnQsXG4gICAgICAgICAgICBBZGRDb21wb25lbnRFbnVtLmFkZERpc3BsYXlBc0NoaWxkQ29tcG9uZW50XG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5hZGRDaGlsZENvbmZpZ3MoKTtcblxuICAgICAgICB0aGlzLmJ1aWxkRWxlbWVudHMoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYWRkQ2hpbGRDb25maWdzKCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxufVxuIiwiaW1wb3J0IENsYXNzQ2hhbmdlUHVibGlzaGVyIGZyb20gJy4uL2NvbW1vbi9wdWJsaXNoZXJzL0NsYXNzQ2hhbmdlUHVibGlzaGVyJztcbmltcG9ydCBDb21wb25lbnRDaGFuZ2VPYnNlcnZlckludGVyZmFjZSBmcm9tICcuLi9jb21tb24vaW50ZXJmYWNlcy9jb21wb25lbnQtY2hhbmdlLW9ic2VydmVyLmludGVyZmFjZSc7XG5cbmltcG9ydCBCdXR0b25CdWlsZGVyIGZyb20gJy4uL2NvbW1vbi9tb2RlbHMvQnV0dG9uQnVpbGRlcic7XG5pbXBvcnQgTGFiZWxCdWlsZGVyIGZyb20gJy4uL2NvbW1vbi9tb2RlbHMvTGFiZWxCdWlsZGVyJztcbmltcG9ydCBDb250YWluZXJCdWlsZGVyIGZyb20gJy4uL2NvbW1vbi9tb2RlbHMvQ29udGFpbmVyQnVpbGRlcic7XG5pbXBvcnQgU3R5bGVzQ29tcG9uZW50c0J1aWxkZXIgZnJvbSAnLi4vY29tbW9uL21vZGVscy9TdHlsZXNDb21wb25lbnRzQnVpbGRlcic7XG5cbmltcG9ydCBjb250YW50cyBmcm9tICcuLi9jb21tb24vY29uc3RhbnRzL2NvbnN0YW50cyc7XG5cbmltcG9ydCB7IElucHV0VHlwZUVudW0gfSBmcm9tICcuLi9jb21tb24vZW51bXMvaW5wdXQtdHlwZS5lbnVtJztcbmltcG9ydCB7IFN0eWxlTmFtZUVudW0gfSBmcm9tICcuLi9jb21tb24vZW51bXMvc3R5bGUtbmFtZS5lbnVtJztcbmltcG9ydCB7IERpc3BsYXlUeXBlc0VudW0gfSBmcm9tICcuLi9jb21tb24vZW51bXMvZGlzcGxheS10eXBlcy5lbnVtJztcbmltcG9ydCB7IEFkZENvbXBvbmVudEVudW0gfSBmcm9tICcuLi9jb21tb24vZW51bXMvYWRkLWNvbXBvbmVudC5lbnVtJztcblxuaW1wb3J0IERpc3BsYXlBc1BhcmVudENvbXBvbmVudCBmcm9tICcuLi9jb21tb24vY29tcG9uZW50cy9kaXNwbGF5LWFzLXBhcmVudC5jb21wb25lbnQnO1xuaW1wb3J0IEdlbmVyaWNQcmltYXJ5SW5wdXRDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudHMvZ2VuZXJpYy1wcmltYXJ5LWlucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgR2VuZXJpY1ByaW1hcnlTZWxlY3RvckNvbXBvbmVudCBmcm9tICcuLi9jb21tb24vY29tcG9uZW50cy9nZW5lcmljLXByaW1hcnktc2VsZWN0b3IuY29tcG9uZW50JztcbmltcG9ydCBJZERlZmluaXRpb25Db21wb25lbnQgZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudHMvaWQtZGVmaW5pdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IE1hcmdpbk9yUGFkZGluZ0NvbXBvbmVudCBmcm9tICcuLi9jb21tb24vY29tcG9uZW50cy9tYXJnaW4tb3ItcGFkZGluZy5jb21wb25lbnQnO1xuaW1wb3J0IERpc3BsYXlBc0NoaWxkQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnRzL2Rpc3BsYXktYXMtY2hpbGQuY29tcG9uZW50JztcbmltcG9ydCBCb3JkZXJDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudHMvYm9yZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgQmFja2dyb3VuZENvbXBvbmVudCBmcm9tICcuLi9jb21tb24vY29tcG9uZW50cy9iYWNrZ3JvdW5kLmNvbXBvbmVudCc7XG5pbXBvcnQgQm94U2hhZG93Q29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnRzL2JveC1zaGFkb3cuY29tcG9uZW50JztcbmltcG9ydCBDbGFzc01hbmFnZW1lbnRDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudHMvY2xhc3MtbWFuYWdlbWVudC5jb21wb25lbnQnO1xuaW1wb3J0IFNpemVzQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnRzL3NpemVzLmNvbXBvbmVudCc7XG5pbXBvcnQgRm9udENvbXBvbmVudCBmcm9tICcuLi9jb21tb24vY29tcG9uZW50cy9mb250LmNvbXBvbmVudHMnO1xuaW1wb3J0IFVybERlZmluaXRpb25Db21wb25lbnQgZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudHMvdXJsLWRlZmluaXRpb24tY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgUmF3SFRNTENvbnBvbmVudCBpbXBsZW1lbnRzIENvbXBvbmVudENoYW5nZU9ic2VydmVySW50ZXJmYWNlIHtcbiAgICBwcm90ZWN0ZWQgX2RvbUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICAgIHByb3RlY3RlZCBzdHlsZXNDb21wb25lbnRzOiBTdHlsZXNDb21wb25lbnRzQnVpbGRlcjtcblxuICAgIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2VzOiBIVE1MRWxlbWVudFtdID0gW107XG5cbiAgICBwcm90ZWN0ZWQgY2xhc3NDaGFuZ2VQdWJsaXNoZXI6IENsYXNzQ2hhbmdlUHVibGlzaGVyO1xuXG4gICAgcHJvdGVjdGVkIGl0ZW1zU2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlbGVjdC1pdGVtJyk7XG4gICAgcHJpdmF0ZSBvcHRpb25FbGVtZW50OiBIVE1MT3B0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXG4gICAgY29uc3RydWN0b3IoZG9tRWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5fZG9tRWxlbWVudCA9IGRvbUVsZW1lbnRcblxuICAgICAgICBSYXdIVE1MQ29ucG9uZW50Lmluc3RhbmNlcy5wdXNoKHRoaXMuX2RvbUVsZW1lbnQpO1xuXG4gICAgICAgIHRoaXMuY2xhc3NDaGFuZ2VQdWJsaXNoZXIgPSBuZXcgQ2xhc3NDaGFuZ2VQdWJsaXNoZXIoKTtcblxuICAgICAgICB0aGlzLm9wdGlvbkVsZW1lbnQudmFsdWUgPSB0aGlzLmRvbUVsZW1lbnQuaWQ7XG4gICAgICAgIHRoaXMub3B0aW9uRWxlbWVudC50ZXh0ID0gdGhpcy5kb21FbGVtZW50LmlkO1xuICAgICAgICB0aGlzLml0ZW1zU2VsZWN0b3IuYXBwZW5kQ2hpbGQodGhpcy5vcHRpb25FbGVtZW50KTtcblxuICAgICAgICB0aGlzLnJlbW92ZUVsZW1lbnQgPSB0aGlzLnJlbW92ZUVsZW1lbnQuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBnZXQgZG9tRWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RvbUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGRyYWdTdGFydFdpdGhUYXJnZXRJZChldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0L3BsYWluJywgKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCkuaWQpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhZGRJZERlZmluaXRpb25Db21wb25lbnQoKSB7XG4gICAgICAgIHJldHVybiBuZXcgSWREZWZpbml0aW9uQ29tcG9uZW50KHRoaXMuX2RvbUVsZW1lbnQpLmNvbXBvbmVudDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYWRkQ2xhc3NOYW1lRGVmaW5pdGlvbkNvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDbGFzc01hbmFnZW1lbnRDb21wb25lbnQodGhpcy5fZG9tRWxlbWVudCwgdGhpcy5jbGFzc0NoYW5nZVB1Ymxpc2hlcikuY29tcG9uZW50O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhZGRNYXJnaW5TdHlsZUNvbXBvbmVudCgpIHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbmV3IE1hcmdpbk9yUGFkZGluZ0NvbXBvbmVudCh0aGlzLl9kb21FbGVtZW50LCBTdHlsZU5hbWVFbnVtLm1hcmdpbik7XG4gICAgICAgIHRoaXMuY2xhc3NDaGFuZ2VQdWJsaXNoZXIuYXR0YWNoKGNvbXBvbmVudCk7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQuY29tcG9uZW50O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhZGRQYWRkaW5nU3R5bGVDb21wb25lbnQoKSB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBNYXJnaW5PclBhZGRpbmdDb21wb25lbnQodGhpcy5fZG9tRWxlbWVudCwgU3R5bGVOYW1lRW51bS5wYWRkaW5nKTtcbiAgICAgICAgdGhpcy5jbGFzc0NoYW5nZVB1Ymxpc2hlci5hdHRhY2goY29tcG9uZW50KTtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5jb21wb25lbnQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFkZElubmVyVGV4dENoYW5nZUNvbXBvbmVudCgpIHtcbiAgICAgICAgY29uc3QgY2FuQWRkVGV4dDogKCkgPT4gYm9vbGVhbiA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmKHRoaXMuZG9tRWxlbWVudC5pbm5lckhUTUwuaW5jbHVkZXMoJzwnKSkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdJbm5lckhUTUwgbXVzdCBiZSBlbXB0eScpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgR2VuZXJpY1ByaW1hcnlJbnB1dENvbXBvbmVudChcbiAgICAgICAgICAgICAgICB0aGlzLl9kb21FbGVtZW50LFxuICAgICAgICAgICAgICAgICdpbm5lclRleHQnLFxuICAgICAgICAgICAgICAgICdJbm5lciBUZXh0JyxcbiAgICAgICAgICAgICAgICBjYW5BZGRUZXh0XG4gICAgICAgICAgICApLmNvbXBvbmVudDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYWRkSW5wdXRUeXBlU2VsZWN0b3JDb21wb25lbnQoKSB7XG4gICAgICAgIHJldHVybiBuZXcgR2VuZXJpY1ByaW1hcnlTZWxlY3RvckNvbXBvbmVudChcbiAgICAgICAgICAgIHRoaXMuX2RvbUVsZW1lbnQsXG4gICAgICAgICAgICAndHlwZScsXG4gICAgICAgICAgICAnSW5wdXQgVHlwZSBTZWxlY3RvcicsXG4gICAgICAgICAgICBJbnB1dFR5cGVFbnVtXG4gICAgICAgICkuY29tcG9uZW50O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhZGRMYWJlbENvbXBvbmVudChsYWJlbDogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXRJbm5lclRleHQobGFiZWwpXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBhZGREaXNwbGF5QXNQYXJlbnRDb21wb25lbnQoKSB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBEaXNwbGF5QXNQYXJlbnRDb21wb25lbnQodGhpcy5fZG9tRWxlbWVudCk7XG4gICAgICAgIHRoaXMuY2xhc3NDaGFuZ2VQdWJsaXNoZXIuYXR0YWNoKGNvbXBvbmVudCk7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQuY29tcG9uZW50O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhZGREaXNwbGF5QXNDaGlsZENvbXBvbmVudCgpIHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbmV3IERpc3BsYXlBc0NoaWxkQ29tcG9uZW50KHRoaXMuX2RvbUVsZW1lbnQpO1xuICAgICAgICB0aGlzLmNsYXNzQ2hhbmdlUHVibGlzaGVyLmF0dGFjaChjb21wb25lbnQpO1xuICAgICAgICByZXR1cm4gY29tcG9uZW50LmNvbXBvbmVudDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYWRkQm9yZGVyU2V0dGluZ3NDb21wb25lbnQoKSB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBCb3JkZXJDb21wb25lbnQodGhpcy5fZG9tRWxlbWVudCk7XG4gICAgICAgIHRoaXMuY2xhc3NDaGFuZ2VQdWJsaXNoZXIuYXR0YWNoKGNvbXBvbmVudCk7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQuY29tcG9uZW50O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhZGRCYWNrZ3JvdW5kU2V0dGluZ3NDb21wb25lbnQoKSB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBCYWNrZ3JvdW5kQ29tcG9uZW50KHRoaXMuX2RvbUVsZW1lbnQpO1xuICAgICAgICB0aGlzLmNsYXNzQ2hhbmdlUHVibGlzaGVyLmF0dGFjaChjb21wb25lbnQpO1xuICAgICAgICByZXR1cm4gY29tcG9uZW50LmNvbXBvbmVudDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYWRkQm94U2hhZG93Q29tcG9uZW50KCkge1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgQm94U2hhZG93Q29tcG9uZW50KHRoaXMuX2RvbUVsZW1lbnQpO1xuICAgICAgICB0aGlzLmNsYXNzQ2hhbmdlUHVibGlzaGVyLmF0dGFjaChjb21wb25lbnQpO1xuICAgICAgICByZXR1cm4gY29tcG9uZW50LmNvbXBvbmVudDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYWRkU2l6ZUNvbXBvbmVudHMoKSB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBTaXplc0NvbXBvbmVudCh0aGlzLl9kb21FbGVtZW50KTtcbiAgICAgICAgdGhpcy5jbGFzc0NoYW5nZVB1Ymxpc2hlci5hdHRhY2goY29tcG9uZW50KTtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5jb21wb25lbnQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFkZEZvbnRDb21wb25lbnMoKSB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBGb250Q29tcG9uZW50KHRoaXMuX2RvbUVsZW1lbnQpO1xuICAgICAgICB0aGlzLmNsYXNzQ2hhbmdlUHVibGlzaGVyLmF0dGFjaChjb21wb25lbnQpO1xuICAgICAgICByZXR1cm4gY29tcG9uZW50LmNvbXBvbmVudDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYWRkVXJsSW5wdXRDb21wb25lbnQoKSB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBVcmxEZWZpbml0aW9uQ29tcG9uZW50KHRoaXMuX2RvbUVsZW1lbnQpO1xuICAgICAgICByZXR1cm4gY29tcG9uZW50LmNvbXBvbmVudDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYWRkQWN0aW9uc0NvbXBvbmVudHMoKSB7XG4gICAgICAgIHJldHVybiBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5ib3JkZXIsICcxcHggc29saWQgIzRDQUY1MCcpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5wYWRkaW5nLCAnM3B4JylcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnQXZhaWxhYmxlIEFjdGlvbnMnKVxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5hZGRSZW1vdmVFbGVtZW50Q29tcG9uZW50KCkpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRSZW1vdmVFbGVtZW50Q29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gbmV3IEJ1dHRvbkJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldElubmVyVGV4dCgnUmVtb3ZlIEVsZW1lbnQnKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yZW1vdmVFbGVtZW50KVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlbW92ZUVsZW1lbnQoKSB7XG4gICAgICAgIGlmIChjb25maXJtKCdBcmUgeW91IHN1cmUgdG8gcmVtb3ZlIHRoaXMgY29tcG9uZW50JykpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuX2RvbUVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZCh0aGlzLl9kb21FbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXMuc3R5bGVzQ29tcG9uZW50cy5yZW1vdmUoKTtcbiAgICAgICAgICAgIHRoaXMuaXRlbXNTZWxlY3Rvci5yZW1vdmVDaGlsZCh0aGlzLm9wdGlvbkVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGRyYWdMZWF2ZShldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBpZiAodGhpcy5fZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50LnRhZ05hbWUgPT09ICdESVYnKSB7XG4gICAgICAgICAgICB0aGlzLl9kb21FbGVtZW50LnBhcmVudEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29udGFudHMuSU5WRVJURURfQkFDS0dST1VORF9DT0xPUjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBzZWxlY3RvclZhbHVlKCkge1xuICAgICAgICBsZXQgdGhpc09wdGlvbkluZGV4OiBudW1iZXI7XG4gICAgICAgIHRoaXMuaXRlbXNTZWxlY3Rvci5jaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgKGNoaWxkIGFzIEhUTUxPcHRpb25FbGVtZW50KS52YWx1ZSA9PT0gdGhpcy5kb21FbGVtZW50LmlkID8gdGhpc09wdGlvbkluZGV4ID0gaW5kZXggOiB1bmRlZmluZWRcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5pdGVtc1NlbGVjdG9yLnNlbGVjdGVkSW5kZXggPSB0aGlzT3B0aW9uSW5kZXg7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbXBvbmVudFNlbGVjdGVkKGNvbXBvbmVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNvbW1vbkNvbXBvbmVudHM6IEFkZENvbXBvbmVudEVudW1bXSA9IFtcbiAgICAgICAgQWRkQ29tcG9uZW50RW51bS5hZGRJZERlZmluaXRpb25Db21wb25lbnQsXG4gICAgICAgIEFkZENvbXBvbmVudEVudW0uYWRkQ2xhc3NOYW1lRGVmaW5pdGlvbkNvbXBvbmVudCxcbiAgICAgICAgQWRkQ29tcG9uZW50RW51bS5hZGRNYXJnaW5TdHlsZUNvbXBvbmVudCxcbiAgICAgICAgQWRkQ29tcG9uZW50RW51bS5hZGRQYWRkaW5nU3R5bGVDb21wb25lbnQsXG4gICAgICAgIEFkZENvbXBvbmVudEVudW0uYWRkU2l6ZUNvbXBvbmVudHMsXG4gICAgICAgIEFkZENvbXBvbmVudEVudW0uYWRkRm9udENvbXBvbmVucyxcbiAgICAgICAgQWRkQ29tcG9uZW50RW51bS5hZGRCYWNrZ3JvdW5kU2V0dGluZ3NDb21wb25lbnQsXG4gICAgICAgIEFkZENvbXBvbmVudEVudW0uYWRkQm9yZGVyU2V0dGluZ3NDb21wb25lbnQsXG4gICAgICAgIEFkZENvbXBvbmVudEVudW0uYWRkQm94U2hhZG93Q29tcG9uZW50LFxuICAgICAgICBBZGRDb21wb25lbnRFbnVtLmFkZERpc3BsYXlBc0NoaWxkQ29tcG9uZW50LFxuICAgICAgICBBZGRDb21wb25lbnRFbnVtLmFkZEFjdGlvbnNDb21wb25lbnRzLFxuICAgIF1cblxuICAgIHByb3RlY3RlZCBpbnNlcnRDb21wb25lbnRCZWZvcmUoXG4gICAgICAgIGNvbXBvbmVudFRvSW5zZXJ0OiBBZGRDb21wb25lbnRFbnVtLFxuICAgICAgICByZWZlcmVuY2VDb21wb25lbnQ6IEFkZENvbXBvbmVudEVudW1cbiAgICApIHtcbiAgICAgICAgY29uc3QgYWxyZWFkeUV4aXN0cyA9IHRoaXMuY29tbW9uQ29tcG9uZW50cy5maW5kKChjb21wKSA9PiBjb21wID09PSBjb21wb25lbnRUb0luc2VydCk7XG5cbiAgICAgICAgaWYoYWxyZWFkeUV4aXN0cykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmNvbW1vbkNvbXBvbmVudHMuZmluZEluZGV4KChjb21wKSA9PiBjb21wID09PSByZWZlcmVuY2VDb21wb25lbnQpO1xuXG4gICAgICAgIHRoaXMuY29tbW9uQ29tcG9uZW50cy5zcGxpY2UoaW5kZXgsIDAsIGNvbXBvbmVudFRvSW5zZXJ0KVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBpbnNlcnRDb21wb25lbnRBZnRlcihcbiAgICAgICAgY29tcG9uZW50VG9JbnNlcnQ6IEFkZENvbXBvbmVudEVudW0sXG4gICAgICAgIHJlZmVyZW5jZUNvbXBvbmVudDogQWRkQ29tcG9uZW50RW51bVxuICAgICkge1xuICAgICAgICBjb25zdCBhbHJlYWR5RXhpc3RzID0gdGhpcy5jb21tb25Db21wb25lbnRzLmZpbmQoKGNvbXApID0+IGNvbXAgPT09IGNvbXBvbmVudFRvSW5zZXJ0KTtcblxuICAgICAgICBpZihhbHJlYWR5RXhpc3RzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuY29tbW9uQ29tcG9uZW50cy5maW5kSW5kZXgoKGNvbXApID0+IGNvbXAgPT09IHJlZmVyZW5jZUNvbXBvbmVudCk7XG4gICAgICAgIHRoaXMuY29tbW9uQ29tcG9uZW50cy5zcGxpY2UoaW5kZXggKyAxLCAwLCBjb21wb25lbnRUb0luc2VydClcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYnVpbGRFbGVtZW50cygpIHtcbiAgICAgICAgdGhpcy5zdHlsZXNDb21wb25lbnRzID0gbmV3IFN0eWxlc0NvbXBvbmVudHNCdWlsZGVyKClcblxuICAgICAgICB0aGlzLmNvbW1vbkNvbXBvbmVudHMuZm9yRWFjaCgoY29tcG9uZW50TmFtZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdHlsZXNDb21wb25lbnRzLmFwcGVuZENoaWxkKHRoaXNbY29tcG9uZW50TmFtZV0oKSlcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnN0eWxlc0NvbXBvbmVudHMuYnVpbGQoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgVGFibGVCdWlsZGVyIGZyb20gJy4uL2NvbW1vbi9tb2RlbHMvVGFibGVCdWlsZGVyJztcbmltcG9ydCBSYXdIVE1MQ29ucG9uZW50IGZyb20gJy4vUmF3SFRNTENvbXBvbmVudCc7XG5pbXBvcnQgUmF3Q29udGFpbmVyIGZyb20gJy4vUmF3Q29udGFpbmVyJztcblxuaW1wb3J0IENzc1N0eWxlU2hlZXQgZnJvbSAnLi4vY3NzLXN0eWxlc2hlZXQvY3NzLXN0eWxlc2hlZXQnO1xuaW1wb3J0IGNvbnN0YW50cyBmcm9tICcuLi9jb21tb24vY29uc3RhbnRzL2NvbnN0YW50cyc7XG5pbXBvcnQgZGVmaW5lRWxlbWVudE5hbWUgZnJvbSAnLi4vY29tbW9uL2Z1bmN0aW9ucy9kZWZpbmUtZWxlbWVudC1uYW1lJztcblxuaW1wb3J0IHsgRGlzcGxheVR5cGVzRW51bSB9IGZyb20gJy4uL2NvbW1vbi9lbnVtcy9kaXNwbGF5LXR5cGVzLmVudW0nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJsZSBleHRlbmRzIFJhd0NvbnRhaW5lciB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaXRlcmF0b3IgPSAwO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBkZWZpbmVFbGVtZW50TmFtZShgdGFibGUke1RhYmxlLml0ZXJhdG9yKyt9YCwgUmF3SFRNTENvbnBvbmVudC5pbnN0YW5jZXMpO1xuXG4gICAgICAgIENzc1N0eWxlU2hlZXQuaW5zZXJ0UnVsZShgLiR7bmFtZX0ge1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6ICR7RGlzcGxheVR5cGVzRW51bS5mbGV4fTtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LDI1NSwyNTUpO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggZGFzaGVkIHJnYigwLDAsMCk7XG4gICAgICAgIH1gKTtcblxuICAgICAgICBDc3NTdHlsZVNoZWV0Lmluc2VydFJ1bGUoYC4ke25hbWV9OmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29uc3RhbnRzLklOVkVSVEVEX0JBQ0tHUk9VTkRfQ09MT1J9O1xuICAgICAgICB9YCk7XG5cbiAgICAgICAgY29uc3QgZWxlbWVudCA9IG5ldyBUYWJsZUJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldE5hbWUobmFtZSlcbiAgICAgICAgICAgIC5zZXRJZChuYW1lKVxuICAgICAgICAgICAgLmFkZENzc0NsYXNzTmFtZShuYW1lKVxuICAgICAgICAgICAgLmRyYWdnYWJsZSgpXG4gICAgICAgICAgICAuYnVpbGQoKTtcblxuICAgICAgICBzdXBlcihlbGVtZW50KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50Q2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2UgZnJvbSAnLi4vY29tbW9uL2ludGVyZmFjZXMvY29tcG9uZW50LWNoYW5nZS1vYnNlcnZlci5pbnRlcmZhY2UnO1xuXG5pbXBvcnQgVGV4dEFyZWFCdWlsZGVyIGZyb20gJy4uL2NvbW1vbi9tb2RlbHMvVGV4dEFyZWFCdWlsZGVyJztcbmltcG9ydCBSYXdIVE1MQ29ucG9uZW50IGZyb20gJy4vUmF3SFRNTENvbXBvbmVudCc7XG5cbmltcG9ydCBkZWZpbmVFbGVtZW50TmFtZSBmcm9tICcuLi9jb21tb24vZnVuY3Rpb25zL2RlZmluZS1lbGVtZW50LW5hbWUnO1xuXG5pbXBvcnQgQ3NzU3R5bGVTaGVldCBmcm9tICcuLi9jc3Mtc3R5bGVzaGVldC9jc3Mtc3R5bGVzaGVldCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRBcmVhIGV4dGVuZHMgUmF3SFRNTENvbnBvbmVudCBpbXBsZW1lbnRzIENvbXBvbmVudENoYW5nZU9ic2VydmVySW50ZXJmYWNlIHtcbiAgICBwcml2YXRlIHN0YXRpYyBpdGVyYXRvciA9IDA7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGRlZmluZUVsZW1lbnROYW1lKGB0ZXh0X2FyZWEke1RleHRBcmVhLml0ZXJhdG9yKyt9YCwgUmF3SFRNTENvbnBvbmVudC5pbnN0YW5jZXMpO1xuXG4gICAgICAgIENzc1N0eWxlU2hlZXQuaW5zZXJ0UnVsZShgLiR7bmFtZX0ge1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzcHggI2RkZDtcbiAgICAgICAgfWApO1xuXG4gICAgICAgIENzc1N0eWxlU2hlZXQuaW5zZXJ0UnVsZShgLiR7bmFtZX06aG92ZXIge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAgICAgICB9YCk7XG5cbiAgICAgICAgY29uc3QgZWxlbWVudCA9IG5ldyBUZXh0QXJlYUJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldE5hbWUobmFtZSlcbiAgICAgICAgICAgIC5zZXRJZChuYW1lKVxuICAgICAgICAgICAgLmFkZENzc0NsYXNzTmFtZShuYW1lKVxuICAgICAgICAgICAgLmRyYWdnYWJsZSgpXG4gICAgICAgICAgICAuYnVpbGQoKTtcblxuICAgICAgICBzdXBlcihlbGVtZW50KTtcblxuICAgICAgICB0aGlzLm9wZW5FbGVtZW50Q29uZmlncyA9IHRoaXMub3BlbkVsZW1lbnRDb25maWdzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhZ0xlYXZlID0gdGhpcy5kcmFnTGVhdmUuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuZHJhZ1N0YXJ0V2l0aFRhcmdldElkKTtcbiAgICAgICAgdGhpcy5fZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCB0aGlzLmRyYWdMZWF2ZSk7XG5cbiAgICAgICAgdGhpcy5fZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3BlbkVsZW1lbnRDb25maWdzKTtcbiAgICB9XG5cbiAgICBnZXQgZG9tRWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RvbUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9wZW5FbGVtZW50Q29uZmlncyhldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5zZWxlY3RvclZhbHVlKCk7XG4gICAgICAgIHRoaXMuYnVpbGRFbGVtZW50Q29uZmlncygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb21wb25lbnRTZWxlY3RlZChjb21wb25lbnQpIHtcbiAgICAgICAgaWYoY29tcG9uZW50ID09PSB0aGlzLl9kb21FbGVtZW50WyduYW1lJ10pIHtcbiAgICAgICAgICAgIHRoaXMuYnVpbGRFbGVtZW50Q29uZmlncygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBidWlsZEVsZW1lbnRDb25maWdzKCkge1xuICAgICAgICB0aGlzLmJ1aWxkRWxlbWVudHMoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50Q2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2UgZnJvbSAnLi4vY29tbW9uL2ludGVyZmFjZXMvY29tcG9uZW50LWNoYW5nZS1vYnNlcnZlci5pbnRlcmZhY2UnO1xuXG5pbXBvcnQgVGl0bGVCdWlsZGVyIGZyb20gJy4uL2NvbW1vbi9tb2RlbHMvVGl0bGVCdWlsZGVyJztcbmltcG9ydCBSYXdIVE1MQ29ucG9uZW50IGZyb20gJy4vUmF3SFRNTENvbXBvbmVudCc7XG5cbmltcG9ydCBDc3NTdHlsZVNoZWV0IGZyb20gJy4uL2Nzcy1zdHlsZXNoZWV0L2Nzcy1zdHlsZXNoZWV0JztcblxuaW1wb3J0IGRlZmluZUVsZW1lbnROYW1lIGZyb20gJy4uL2NvbW1vbi9mdW5jdGlvbnMvZGVmaW5lLWVsZW1lbnQtbmFtZSc7XG5cbmltcG9ydCB7IFRpdGxlVHlwZXNFbnVtIH0gZnJvbSAnLi4vY29tbW9uL2VudW1zL3RpdGxlLnR5cGVzLmVudW0nO1xuaW1wb3J0IHsgQWRkQ29tcG9uZW50RW51bSB9IGZyb20gJy4uL2NvbW1vbi9lbnVtcy9hZGQtY29tcG9uZW50LmVudW0nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaXRsZSBleHRlbmRzIFJhd0hUTUxDb25wb25lbnQgaW1wbGVtZW50cyBDb21wb25lbnRDaGFuZ2VPYnNlcnZlckludGVyZmFjZSB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaXRlcmF0b3IgPSAwO1xuXG4gICAgY29uc3RydWN0b3IodHlwZTogVGl0bGVUeXBlc0VudW0pIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGRlZmluZUVsZW1lbnROYW1lKGB0aXRsZSR7VGl0bGUuaXRlcmF0b3IrK31gLCBSYXdIVE1MQ29ucG9uZW50Lmluc3RhbmNlcyk7XG5cbiAgICAgICAgQ3NzU3R5bGVTaGVldC5pbnNlcnRSdWxlKGAuJHtuYW1lfSB7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lXG4gICAgICAgIH1gKTtcblxuICAgICAgICBjb25zdCBlbGVtZW50ID0gbmV3IFRpdGxlQnVpbGRlcih0eXBlKVxuICAgICAgICAgICAgLnNldE5hbWUobmFtZSlcbiAgICAgICAgICAgIC5zZXRJZChuYW1lKVxuICAgICAgICAgICAgLmFkZENzc0NsYXNzTmFtZShuYW1lKVxuICAgICAgICAgICAgLnNldElubmVyVGV4dChgTmV3IFRpdGxlICR7dHlwZX1gKVxuICAgICAgICAgICAgLmRyYWdnYWJsZSgpXG4gICAgICAgICAgICAuYnVpbGQoKTtcblxuICAgICAgICBzdXBlcihlbGVtZW50KTtcblxuICAgICAgICB0aGlzLm9wZW5FbGVtZW50Q29uZmlncyA9IHRoaXMub3BlbkVsZW1lbnRDb25maWdzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhZ0xlYXZlID0gdGhpcy5kcmFnTGVhdmUuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuZHJhZ1N0YXJ0V2l0aFRhcmdldElkKTtcbiAgICAgICAgdGhpcy5fZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCB0aGlzLmRyYWdMZWF2ZSk7XG5cbiAgICAgICAgdGhpcy5fZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3BlbkVsZW1lbnRDb25maWdzKTtcbiAgICB9XG5cbiAgICBnZXQgZG9tRWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RvbUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9wZW5FbGVtZW50Q29uZmlncyhldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5zZWxlY3RvclZhbHVlKCk7XG5cblxuICAgICAgICB0aGlzLmJ1aWxkRWxlbWVudENvbmZpZ3MoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29tcG9uZW50U2VsZWN0ZWQoY29tcG9uZW50KSB7XG4gICAgICAgIGlmKGNvbXBvbmVudCA9PT0gdGhpcy5fZG9tRWxlbWVudFsnbmFtZSddKSB7XG4gICAgICAgICAgICB0aGlzLmJ1aWxkRWxlbWVudENvbmZpZ3MoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgYnVpbGRFbGVtZW50Q29uZmlncygpIHtcbiAgICAgICAgdGhpcy5pbnNlcnRDb21wb25lbnRBZnRlcihcbiAgICAgICAgICAgIEFkZENvbXBvbmVudEVudW0uYWRkSW5uZXJUZXh0Q2hhbmdlQ29tcG9uZW50LFxuICAgICAgICAgICAgQWRkQ29tcG9uZW50RW51bS5hZGRDbGFzc05hbWVEZWZpbml0aW9uQ29tcG9uZW50XG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5idWlsZEVsZW1lbnRzKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFVub3JkZXJlZExpc3RCdWlsZGVyIGZyb20gJy4uL2NvbW1vbi9tb2RlbHMvVW5vZGVyZWRMaXN0QnVpbGRlcic7XG5pbXBvcnQgUmF3SFRNTENvbnBvbmVudCBmcm9tICcuL1Jhd0hUTUxDb21wb25lbnQnO1xuaW1wb3J0IFJhd0NvbnRhaW5lciBmcm9tICcuL1Jhd0NvbnRhaW5lcic7XG5cbmltcG9ydCBDc3NTdHlsZVNoZWV0IGZyb20gJy4uL2Nzcy1zdHlsZXNoZWV0L2Nzcy1zdHlsZXNoZWV0JztcbmltcG9ydCBjb25zdGFudHMgZnJvbSAnLi4vY29tbW9uL2NvbnN0YW50cy9jb25zdGFudHMnO1xuaW1wb3J0IGRlZmluZUVsZW1lbnROYW1lIGZyb20gJy4uL2NvbW1vbi9mdW5jdGlvbnMvZGVmaW5lLWVsZW1lbnQtbmFtZSc7XG5cbmltcG9ydCB7IERpc3BsYXlUeXBlc0VudW0gfSBmcm9tICcuLi9jb21tb24vZW51bXMvZGlzcGxheS10eXBlcy5lbnVtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVW5vcmRlcmVkTGlzdCBleHRlbmRzIFJhd0NvbnRhaW5lciB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaXRlcmF0b3IgPSAwO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBkZWZpbmVFbGVtZW50TmFtZShgdW5vcmRlcmVkX2xpc3Qke1Vub3JkZXJlZExpc3QuaXRlcmF0b3IrK31gLCBSYXdIVE1MQ29ucG9uZW50Lmluc3RhbmNlcyk7XG5cbiAgICAgICAgQ3NzU3R5bGVTaGVldC5pbnNlcnRSdWxlKGAuJHtuYW1lfSB7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogJHtEaXNwbGF5VHlwZXNFbnVtLmZsZXh9O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsMjU1LDI1NSk7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBkYXNoZWQgcmdiKDAsMCwwKTtcbiAgICAgICAgfWApO1xuXG4gICAgICAgIENzc1N0eWxlU2hlZXQuaW5zZXJ0UnVsZShgLiR7bmFtZX06aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb25zdGFudHMuSU5WRVJURURfQkFDS0dST1VORF9DT0xPUn07XG4gICAgICAgIH1gKTtcblxuICAgICAgICBjb25zdCBlbGVtZW50ID0gbmV3IFVub3JkZXJlZExpc3RCdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXROYW1lKG5hbWUpXG4gICAgICAgICAgICAuc2V0SWQobmFtZSlcbiAgICAgICAgICAgIC5hZGRDc3NDbGFzc05hbWUobmFtZSlcbiAgICAgICAgICAgIC5kcmFnZ2FibGUoKVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG5cbiAgICAgICAgc3VwZXIoZWxlbWVudCk7XG4gICAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgaW5pdERyYWdnYWJsZUNvbXBvbmVudHMgZnJvbSAnLi9jb21wb25lbnRzL2FwcC1jb250YWluZXIvaW5pdC1kcmFnZ2FibGUtY29tcG9uZW50cyc7XG5pbXBvcnQgQ3NzU3R5bGVTaGVldCBmcm9tICcuL2NvbXBvbmVudHMvY3NzLXN0eWxlc2hlZXQvY3NzLXN0eWxlc2hlZXQnO1xuaW1wb3J0IEluaXRBcHBDb250YWluZXIgZnJvbSAnLi9jb21wb25lbnRzL2FwcC1jb250YWluZXIvaW5pdC1hcHAtY29udGFpbmVyJztcblxuaW5pdERyYWdnYWJsZUNvbXBvbmVudHMoKTtcbm5ldyBJbml0QXBwQ29udGFpbmVyKCk7XG5Dc3NTdHlsZVNoZWV0LmluaXQoKTtcblxuLy8gVE9ETzogZWwgbWV0b2RvIGluaXQgZGViZXJpYSBidXNjYXIgZWwgY3NzIGRlbCBsb2NhbHN0b3JhZ2UsIGRlYmVyaWFtb3MgaGFjZXIgbG8gbWlzbW8gY29uIGVsIEhUTUxcbi8vIERlYmVyaWFtb3MgdmVyIGNvbW8gYWxtYWNlbmFyIHkgZGVzaGFjZXIgY2FtYmlvcy4uLi5cblxuLy8gVE9ETzogYWNvbW9kYXIgZXN0cnVjdHVyYXMgY29uIHByZXR0aWVyIHkgdHNsaW50ZXIuIFNhbHRhciBsaW5lYSBjdWFuZG8gbXV5IGxhcmdhLlxuXG4vLyBUT0RPOiBoYXkgcXVlIG1ldGVybGUgZHJhZyBlbnRlciBhbCBhcHAtY29udGFpbmVyLWZpeGVkIHBhcmEgcXVlIGxlIHNhcXVlIGVsIGJhY2tncm91bmQgY29sb3IgYWwgYXBwLWNvbnRhaW5lci4uLlxuLy8gbyB2ZXIgcXVlIHBhc2EgY29uIGVsIGRyYWcgbGVhdmVcblxuLy8gVE9ETzogaW5zZXJ0YXIgcnVsZXMgcGFyYSBlbCBtZWRpYSBxdWVyeSA6IGh0dHBzOi8vZGF2aWR3YWxzaC5uYW1lL2FkZC1ydWxlcy1zdHlsZXNoZWV0c1xuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL0F0LXJ1bGVcblxuLy8gVE9ETzogcHJvYmFyIGV4cG9ydGFyIGNzcyB5IGh0bWwgeSB2ZXIgY29tbyBxdWVkYSBsYSBwYWdpbmEgZW4gbGEgcmVhbGlkYWQgKi9cbi8vIFRPRE86IGhhY2VyIGFuYWxpc2lzIGRlIHF1ZSBkZWJlcmlhbW9zIGV4cG9ydGFyIHJlYWxtZW50ZSBkZWwgaHRtbCAqL1xuXG4vLyBUT0RPOiBhcXVpIGZhbHRhIGxhIGFjY2lvbiBkZSBkdXBsaWNhciB1biBjb21wb25lbnRlLCBlcyBkZWNpciwgZGUgdW4gY29tcG9uZW50ZSBleGlzdGVudGUsIGR1cGxpY2FyIGxhIGNvbmZpZy4uLlxuLy8gc2ksIGVzIG5lY2VzYXJpbywgcG9ycXVlIGVzIG11Y2hvIG1hcyBmYWNpbCBxdWUgYXNpZ25hcmxlIGxhIGNsYXNlIGRlIG90cm8gY29tcG9uZW50ZS4uLlxuLy8gdmVyIGNvbW8gZHVwbGljYW1vcyBsYXMgY2xhc2VzLi4uIHNpIGxlIGFzaWduYW1vcyBsYXMgY2xhc2VzIGRlbCBvdHJvIGNvbXBvbmVudGU/Pz8sIGNvbW8gaGFjZW1vcyBjb24gc3UgY2xhc2U/Pz9cbi8vIHNpIGR1cGxpY2Ftb3MsIG5vIGNyZWFtb3MgY2xhc2UgcHJvcGlhLCBzb2xvIGFzaWduYW1vcyBsYXMgY2xhc2VzIGRlbCBvdHJvIGNvbXBvbmVudGUuLi5cblxuLy8gQWdyZWdhciBlbCBlbGVtZW50byBpbWcgeSBhIHN1IHZleiwgYWdyZWdhciBpbWFnZW5lcyBhbCBiYWNrZ3JvdW5kLi4uXG5cbi8vIFRPRE86IGZhbHRhIHRvZG8gbG8gcXVlIGVzIHBvc2l0aW9uLi4uIEFic29sdXRlLCByZWxhdGl2ZSwgZXRjLi4uIE5vIHJlY3VlcmRvIGJpZW4gY29tbyBlcyBlc28uLi5cbi8vIGluY2x1c28sIGVsIHogaW5kZXgsIHF1ZSBwb2RyaWEgZXN0YXIgZW4gZWwgbWlzbW8gY29tcG9uZW50ZS5cblxuXG4vLyBUT0RPOiB2ZXIgZm9ybWEgZGUgcmVtb3ZlciBlbCBib3JkZSBvcmlnaW5hbCBkZWwgaW5wdXQuIE5vIGVzIGxhIG1pc21hIHByb3BpZWRhZCBxdWUgZWwgYm9yZGVyLi4uXG4vLyBUT0RPOiBlbCBib3JkZXJib3ggZGVsIGlucHV0IHZpZW5lIGNvbW8gYWR2YW5jZWQuLi4gVmVyIHNpIHRlbmVtb3MgcXVlIGhhY2VybGUgYWxnb1xuXG4vLyBUT0RPOiBjdWFuZG8gY3JlbyB1biBub21icmUgZnV0dXJvLCB5IGp1c3RvIGNyZW8gdW4gZWxlbWVudG8gY29uIGVzZSBub21icmUgZnV0dXJvLCB0aXJhIGVycm9yLi4uXG4vLyBwb3IgZXNvIHlvIGxlIHBhc2FiYSBlbCBpdGVyYXRvci4uLiB2ZXIgY29tbyBzb2x1Y2lvbmFyLi4uXG5cbi8vIFRPRE86IGNvbiBlbCBpZCBoYWJyaWEgcXVlIHJlZW1wbGF6YXIgdG9kb3MgbG9zIGNhcmFjdGVyZXMgZXNwZWNpYWxlcyBwb3IgZ3Vpb25lcyBvIGFsZ28gYXNpLi4uXG5cbi8vIFRPRE86IGZhbHRhIHByb3BpZWRhZCBzY3JvbGxhYmxlIGVuIGRpdlxuXG4vLyBUT0RPOiBjdWFscXVpZXIgZWxlbWVudG8gZGViZSBwb2RlciBtb2RpZmljYXIgZWwgZGlzcGxheSBzZXR0aW5nc1xuXG4vLyBUT0RPOiBmYWx0YSBsYSBwcm9waWVkYWQgYmFja2dyb3VuZC1pbWFnZSBlbiBlbCBiYWNrZ3JvdW5kLWNvbG9yXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG4vLyBUT0RPOiBlbiBlbCBTZWxlY3QgSXRlbSBubyBzZSBlbmN1ZW50cmEgZWwgYXBwLWNvbnRhaW5lci4gRXMgcXVlIHBhcmEgcXVlIGVzdG8gZnVuY2lvbmUsIGVsIGFwcC1jb250YWluZXIgZGViZXJpYSBzZXIgY3JlYWRvIGNvbW8gdW4gbmV3IENvbnRhaW5lcigpO1xuXG4vLyBUT0RPOiBmYWx0YSB1biBib3RvbiBkZSBkZWxldGUgaW5pdGlhbCBwcm9wZXJ0aWVzLCBhc2kgc2FjYW1vcyBsb3MgYm9yZGVzIHkgZXNvIGEgdW4gZGl2LCBwb3IgZWplbXBsby4uLlxuXG4vKlxuVE9ETzogZmFsdGFuIGxvcyBzaWd1aWVudGVzIGNvbXBvbmVudGVzOlxuICAgIC0gVGFibGUsIHRyLCB0aCwgdGIsIHkgdmVyIHF1ZSBvdHJvcyBkZSB0YWJsYXMgLT4gUGFyYSBlc3RvIHRlbmRyZW1vcyBxdWUgaXIgYWdyZWdhbmRvIGVsZW1lbnRvcyBtZWRpYW50IEpTOlxuICAgICAgICAtIGNvbW8gc2VyLCBhZ3JlZ2FyIGVsIHRoLCBlbCB0YiBvIGVsIHRcblxuPHRhYmxlPlxuICA8dGhlYWQ+XG4gICAgPHRyPlxuICAgICAgPHRoPkhlYWRlciBjb250ZW50IDE8L3RoPlxuICAgICAgPHRoPkhlYWRlciBjb250ZW50IDI8L3RoPlxuICAgIDwvdHI+XG4gIDwvdGhlYWQ+XG4gIDx0Zm9vdD5cbiAgICA8dHI+XG4gICAgICA8dGQ+Rm9vdGVyIGNvbnRlbnQgMTwvdGQ+XG4gICAgICA8dGQ+Rm9vdGVyIGNvbnRlbnQgMjwvdGQ+XG4gICAgPC90cj5cbiAgPC90Zm9vdD5cbiAgPHRib2R5PlxuICAgIDx0cj5cbiAgICAgIDx0ZD5Cb2R5IGNvbnRlbnQgMTwvdGQ+XG4gICAgICA8dGQ+Qm9keSBjb250ZW50IDI8L3RkPlxuICAgIDwvdHI+XG4gIDwvdGJvZHk+XG48L3RhYmxlPlxuXG48dGFibGU+XG4gIDxjb2xncm91cCBzcGFuPVwiNFwiIGNsYXNzPVwiY29sdW1uc1wiPjwvY29sZ3JvdXA+XG4gIDx0cj5cbiAgICA8dGg+Q291bnRyaWVzPC90aD5cbiAgICA8dGg+Q2FwaXRhbHM8L3RoPlxuICAgIDx0aD5Qb3B1bGF0aW9uPC90aD5cbiAgICA8dGg+TGFuZ3VhZ2U8L3RoPlxuICA8L3RyPlxuICA8dHI+XG4gICAgPHRkPlVTQTwvdGQ+XG4gICAgPHRkPldhc2hpbmd0b24gRC5DLjwvdGQ+XG4gICAgPHRkPjMwOSBtaWxsaW9uPC90ZD5cbiAgICA8dGQ+RW5nbGlzaDwvdGQ+XG4gIDwvdHI+XG4gIDx0cj5cbiAgICA8dGQ+U3dlZGVuPC90ZD5cbiAgICA8dGQ+U3RvY2tob2xtPC90ZD5cbiAgICA8dGQ+OSBtaWxsaW9uPC90ZD5cbiAgICA8dGQ+U3dlZGlzaDwvdGQ+XG4gIDwvdHI+XG48L3RhYmxlPlxuXG48dGFibGU+XG4gIDxjYXB0aW9uPkF3ZXNvbWUgY2FwdGlvbjwvY2FwdGlvbj5cbiAgPHRyPlxuICAgIDx0ZD5Bd2Vzb21lIGRhdGE8L3RkPlxuICA8L3RyPlxuPC90YWJsZT5cblxuICAgIC0gaHlwZXJsaW5rIG8gYW5jaG9yIGVsZW1lbnQ6IGRlYmVtb3MgYWdyZWdhciBlbCBoaXBlcmxpbmsgeSBhbGd1bmFzIG90cmFzIGNvc2FzXG5cbiAgICAtIHRleHRhcmVhOiBkZWJlbW9zIHBvZGVyIG1vZGlmaWNhciBlbCByZWxsZW5vLCBwZXJvIGVuIHZleiBkZSBjb24gdW4gaW5wdXQsIGNvbiB1biB0ZXh0YXJlYVxuICAgIGRhciBlc3RpbG8gdGFtYmllbiBwYXJhIHF1ZSBubyBzZWEgZXN0aXJhYmxlIGVuIGVsIHNlbGVjdG9yIGFudGVzIGRlIGhhY2VyIGVsIGRyYWcgYW5kIGRyb3BcbiAgICB0YW1iaWVuIGRlYmUgcG9kZXIgc2VyIHNlbGVjY2lvbmFibGUgc2kgbGEgcXVlcmVzIGVzdGlyYWJsZSBvIG5vIGVuIGVsIGRvbVxuKi9cblxuLy8gVE9ETzogZmFsdGEgcG9zaWNpb24gYWJzb2x1dGEgbyByZWxhdGl2YSwgei1pbmRleFxuXG4vLyBUT0RPOiBlbCBjb2xvciB0YW1iaWVuIHBvZHJpYSBzZXIgZW4gZGVncmFkZSwgcGVybyBwb2RlbW9zIGRlamFyIHF1ZSBlc28gbG8gaGFnYW4gY29uIGxhIHJhd2NsYXNzXG5cbi8vIFRPRE86IHNpIHlvIGEgdW5hIGNsYXNlIGxlIGFncmVnbywgcG9yIGVqZW1wbG8gLnRhYmxlMD50ZCxcbi8vIG51bmNhIG1lIHRyYWUgZXNhIGNsYXNlIGNvbW8gcGFydGUgZGUgbGEgdGFibGUwIGVuIGVsIFJhdyBDbGFzcyBFZGl0b3Jcbi8vIG5pIGVuIGVsIENsYXNzZXMgTWFuYWdlbWVudCBTZWxlY3RvclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9