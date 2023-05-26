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
/* harmony export */   AddComponent: () => (/* binding */ AddComponent)
/* harmony export */ });
var AddComponent;
(function (AddComponent) {
    AddComponent["addIdDefinitionComponent"] = "addIdDefinitionComponent";
    AddComponent["addClassNameDefinitionComponent"] = "addClassNameDefinitionComponent";
    AddComponent["addMarginStyleComponent"] = "addMarginStyleComponent";
    AddComponent["addPaddingStyleComponent"] = "addPaddingStyleComponent";
    AddComponent["addSizeComponents"] = "addSizeComponents";
    AddComponent["addFontComponens"] = "addFontComponens";
    AddComponent["addBackgroundSettingsComponent"] = "addBackgroundSettingsComponent";
    AddComponent["addBorderSettingsComponent"] = "addBorderSettingsComponent";
    AddComponent["addBoxShadowComponent"] = "addBoxShadowComponent";
    AddComponent["addDisplayAsChildComponent"] = "addDisplayAsChildComponent";
    AddComponent["addActionsComponents"] = "addActionsComponents";
    AddComponent["addInnerTextChangeComponent"] = "addInnerTextChangeComponent";
    AddComponent["addDisplayAsParentComponent"] = "addDisplayAsParentComponent";
    AddComponent["addUrlInputComponent"] = "addUrlInputComponent";
    AddComponent["addInputTypeSelectorComponent"] = "addInputTypeSelectorComponent";
})(AddComponent || (AddComponent = {}));


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

/***/ "./src/components/components-container/init-draggable-components.ts":
/*!**************************************************************************!*\
  !*** ./src/components/components-container/init-draggable-components.ts ***!
  \**************************************************************************/
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
        this.insertComponentAfter(_common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_4__.AddComponent.addInnerTextChangeComponent, _common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_4__.AddComponent.addClassNameDefinitionComponent);
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
        this.insertComponentAfter(_common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_4__.AddComponent.addInnerTextChangeComponent, _common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_4__.AddComponent.addClassNameDefinitionComponent);
        this.insertComponentBefore(_common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_4__.AddComponent.addDisplayAsParentComponent, _common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_4__.AddComponent.addDisplayAsChildComponent);
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
        this.insertComponentAfter(_common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_4__.AddComponent.addUrlInputComponent, _common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_4__.AddComponent.addClassNameDefinitionComponent);
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
        this.insertComponentAfter(_common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_5__.AddComponent.addInputTypeSelectorComponent, _common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_5__.AddComponent.addClassNameDefinitionComponent);
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
        this.insertComponentAfter(_common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_4__.AddComponent.addInnerTextChangeComponent, _common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_4__.AddComponent.addClassNameDefinitionComponent);
        this.buildElements();
    };
    Label.iterator = 0;
    return Label;
}(_RawHTMLComponent__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Label);


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
        this.insertComponentBefore(_common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_2__.AddComponent.addDisplayAsParentComponent, _common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_2__.AddComponent.addDisplayAsChildComponent);
        this.buildElements();
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
/* harmony import */ var _common_components_display_as_parent_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/components/display-as-parent.component */ "./src/components/common/components/display-as-parent.component.ts");
/* harmony import */ var _common_components_generic_primary_input_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/components/generic-primary-input.component */ "./src/components/common/components/generic-primary-input.component.ts");
/* harmony import */ var _common_components_generic_primary_selector_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/components/generic-primary-selector.component */ "./src/components/common/components/generic-primary-selector.component.ts");
/* harmony import */ var _common_components_id_definition_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/components/id-definition.component */ "./src/components/common/components/id-definition.component.ts");
/* harmony import */ var _common_components_margin_or_padding_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/components/margin-or-padding.component */ "./src/components/common/components/margin-or-padding.component.ts");
/* harmony import */ var _common_components_display_as_child_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/components/display-as-child.component */ "./src/components/common/components/display-as-child.component.ts");
/* harmony import */ var _common_components_border_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/components/border.component */ "./src/components/common/components/border.component.ts");
/* harmony import */ var _common_components_background_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common/components/background.component */ "./src/components/common/components/background.component.ts");
/* harmony import */ var _common_components_box_shadow_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../common/components/box-shadow.component */ "./src/components/common/components/box-shadow.component.ts");
/* harmony import */ var _common_components_class_management_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../common/components/class-management.component */ "./src/components/common/components/class-management.component.ts");
/* harmony import */ var _common_components_sizes_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../common/components/sizes.component */ "./src/components/common/components/sizes.component.ts");
/* harmony import */ var _common_components_font_components__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../common/components/font.components */ "./src/components/common/components/font.components.ts");
/* harmony import */ var _common_components_url_definition_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../common/components/url-definition-component */ "./src/components/common/components/url-definition-component.ts");
/* harmony import */ var _common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../common/enums/add-component.enum */ "./src/components/common/enums/add-component.enum.ts");























var RawHTMLConponent = /** @class */ (function () {
    function RawHTMLConponent(domElement) {
        this.itemsSelector = document.querySelector('#select-item');
        this.optionElement = document.createElement('option');
        this.commonComponents = [
            _common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_22__.AddComponent.addIdDefinitionComponent,
            _common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_22__.AddComponent.addClassNameDefinitionComponent,
            _common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_22__.AddComponent.addMarginStyleComponent,
            _common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_22__.AddComponent.addPaddingStyleComponent,
            _common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_22__.AddComponent.addSizeComponents,
            _common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_22__.AddComponent.addFontComponens,
            _common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_22__.AddComponent.addBackgroundSettingsComponent,
            _common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_22__.AddComponent.addBorderSettingsComponent,
            _common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_22__.AddComponent.addBoxShadowComponent,
            _common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_22__.AddComponent.addDisplayAsChildComponent,
            _common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_22__.AddComponent.addActionsComponents,
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
        return new _common_components_id_definition_component__WEBPACK_IMPORTED_MODULE_12__["default"](this._domElement).component;
    };
    RawHTMLConponent.prototype.addClassNameDefinitionComponent = function () {
        return new _common_components_class_management_component__WEBPACK_IMPORTED_MODULE_18__["default"](this._domElement, this.classChangePublisher).component;
    };
    RawHTMLConponent.prototype.addMarginStyleComponent = function () {
        var component = new _common_components_margin_or_padding_component__WEBPACK_IMPORTED_MODULE_13__["default"](this._domElement, _common_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_7__.StyleNameEnum.margin);
        this.classChangePublisher.attach(component);
        return component.component;
    };
    RawHTMLConponent.prototype.addPaddingStyleComponent = function () {
        var component = new _common_components_margin_or_padding_component__WEBPACK_IMPORTED_MODULE_13__["default"](this._domElement, _common_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_7__.StyleNameEnum.padding);
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
        return new _common_components_generic_primary_input_component__WEBPACK_IMPORTED_MODULE_10__["default"](this._domElement, 'innerText', 'Inner Text', canAddText).component;
    };
    RawHTMLConponent.prototype.addInputTypeSelectorComponent = function () {
        return new _common_components_generic_primary_selector_component__WEBPACK_IMPORTED_MODULE_11__["default"](this._domElement, 'type', 'Input Type Selector', _common_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_6__.InputTypeEnum).component;
    };
    RawHTMLConponent.prototype.addLabelComponent = function (label) {
        return new _common_models_LabelBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setInnerText(label)
            .build();
    };
    RawHTMLConponent.prototype.addDisplayAsParentComponent = function () {
        var component = new _common_components_display_as_parent_component__WEBPACK_IMPORTED_MODULE_9__["default"](this._domElement);
        this.classChangePublisher.attach(component);
        return component.component;
    };
    RawHTMLConponent.prototype.addDisplayAsChildComponent = function () {
        var component = new _common_components_display_as_child_component__WEBPACK_IMPORTED_MODULE_14__["default"](this._domElement);
        this.classChangePublisher.attach(component);
        return component.component;
    };
    RawHTMLConponent.prototype.addBorderSettingsComponent = function () {
        var component = new _common_components_border_component__WEBPACK_IMPORTED_MODULE_15__["default"](this._domElement);
        this.classChangePublisher.attach(component);
        return component.component;
    };
    RawHTMLConponent.prototype.addBackgroundSettingsComponent = function () {
        var component = new _common_components_background_component__WEBPACK_IMPORTED_MODULE_16__["default"](this._domElement);
        this.classChangePublisher.attach(component);
        return component.component;
    };
    RawHTMLConponent.prototype.addBoxShadowComponent = function () {
        var component = new _common_components_box_shadow_component__WEBPACK_IMPORTED_MODULE_17__["default"](this._domElement);
        this.classChangePublisher.attach(component);
        return component.component;
    };
    RawHTMLConponent.prototype.addSizeComponents = function () {
        var component = new _common_components_sizes_component__WEBPACK_IMPORTED_MODULE_19__["default"](this._domElement);
        this.classChangePublisher.attach(component);
        return component.component;
    };
    RawHTMLConponent.prototype.addFontComponens = function () {
        var component = new _common_components_font_components__WEBPACK_IMPORTED_MODULE_20__["default"](this._domElement);
        this.classChangePublisher.attach(component);
        return component.component;
    };
    RawHTMLConponent.prototype.addUrlInputComponent = function () {
        var component = new _common_components_url_definition_component__WEBPACK_IMPORTED_MODULE_21__["default"](this._domElement);
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
        this.insertComponentAfter(_common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_4__.AddComponent.addInnerTextChangeComponent, _common_enums_add_component_enum__WEBPACK_IMPORTED_MODULE_4__.AddComponent.addClassNameDefinitionComponent);
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

module.exports = JSON.parse('{"name":"layout-app","version":"1.0.0-3","repository":{"url":"git+https://github.com/Marcosl14/layout-app.git"},"description":"","main":"index.js","scripts":{"build":"webpack","start":"webpack --watch","lint":"eslint src/**/*.ts","lint-fix":"eslint src/**/*.ts --fix","predeploy":"npm run build","deploy":"gh-pages -d dist"},"author":"","license":"ISC","devDependencies":{"@typescript-eslint/eslint-plugin":"^5.53.0","@typescript-eslint/parser":"^5.53.0","eslint":"^8.34.0","gh-pages":"^5.0.0","husky":"^8.0.3","lint-staged":"^13.2.0","ts-loader":"^9.4.2","typescript":"^5.0.4","webpack":"^5.75.0","webpack-cli":"^5.0.1","webpack-dev-server":"^4.11.1"}}');

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
/* harmony import */ var _components_components_container_init_draggable_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/components-container/init-draggable-components */ "./src/components/components-container/init-draggable-components.ts");
/* harmony import */ var _components_css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/css-stylesheet/css-stylesheet */ "./src/components/css-stylesheet/css-stylesheet.ts");
/* harmony import */ var _components_app_container_init_app_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/app-container/init-app-container */ "./src/components/app-container/init-app-container.ts");



(0,_components_components_container_init_draggable_components__WEBPACK_IMPORTED_MODULE_0__["default"])();
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



    - ol y ul, y li:
aqui debemos agregar los li a mano, y asignar el tipo de icono;

    - hyperlink o anchor element: debemos agregar el hiperlink y algunas otras cosas

    - textarea: debemos poder modificar el relleno, pero en vez de con un input, con un textarea
    dar estilo tambien para que no sea estirable en el selector antes de hacer el drag and drop
    tambien debe poder ser seleccionable si la queres estirable o no en el dom
*/
// TODO: falta posicion absoluta o relativa, z-index

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO0lBQ3RDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO0lBQ25DLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO0lBQ3RDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFO0lBQ3hDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFO0lBQ3pDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFO0lBQ3pDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFO0lBQ3pDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFO0lBQ3pDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO0lBQ3RDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO0lBQ3BDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO0lBQ3ZDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO0lBQ25DLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO0lBQ25DLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO0lBQ3RDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0lBQ3JDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO0lBQ3ZDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO0lBQ3ZDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO0lBQ25DLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0lBQ3JDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO0lBQ3RDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO0lBQ2hDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0lBQ3JDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO0lBQ2hDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO0lBQ2hDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO0lBQ2pDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO0lBQ3ZDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO0lBQ3BDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO0lBQ25DLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0lBQ3JDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO0lBQ2xDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO0lBQ2pDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO0lBQ2pDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO0lBQ3BDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFO0lBQ3pDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0lBQ3JDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJ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QUFFLElBQUksRUFBRSxNQUFNLEVBQUU7SUFDaEMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUU7SUFDbkMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7SUFDakMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7SUFDckMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7SUFDbEMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7SUFDckMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7SUFDbEMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUU7SUFDekMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7SUFDckMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUU7SUFDekMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUU7SUFDekMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUU7SUFDdEMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7SUFDckMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7SUFDaEMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7SUFDaEMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7SUFDaEMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUU7SUFDdEMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7SUFDbEMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUU7SUFDekMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7SUFDL0IsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7SUFDckMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7SUFDckMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUU7SUFDdkMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7SUFDbEMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUU7SUFDdEMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7SUFDcEMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7SUFDcEMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7SUFDbEMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7SUFDbEMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUU7SUFDbkMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7SUFDckMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7SUFDckMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7SUFDckMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7SUFDaEMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUU7SUFDdkMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxX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O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOa0c7QUFDM0I7QUFDTTtBQUU3RSxzR0FBdUIsRUFBRSxDQUFDO0FBQzFCLElBQUksb0ZBQWdCLEVBQUUsQ0FBQztBQUN2QixzRkFBa0IsRUFBRSxDQUFDO0FBRXJCLHFHQUFxRztBQUNyRyx1REFBdUQ7QUFFdkQscUZBQXFGO0FBRXJGLG9IQUFvSDtBQUNwSCxtQ0FBbUM7QUFFbkMsMkZBQTJGO0FBQzNGLDJEQUEyRDtBQUUzRCxnRkFBZ0Y7QUFDaEYsd0VBQXdFO0FBRXhFLG9IQUFvSDtBQUNwSCwyRkFBMkY7QUFDM0Ysb0hBQW9IO0FBQ3BILDJGQUEyRjtBQUUzRix3RUFBd0U7QUFFeEUsb0dBQW9HO0FBQ3BHLGdFQUFnRTtBQUdoRSxvR0FBb0c7QUFDcEcsc0ZBQXNGO0FBRXRGLG9HQUFvRztBQUNwRyw2REFBNkQ7QUFFN0Qsa0dBQWtHO0FBRWxHLDBDQUEwQztBQUUxQyxvRUFBb0U7QUFFcEUsbUVBQW1FO0FBRW5FLG1DQUFtQztBQUNuQyx3SkFBd0o7QUFFeEosMkdBQTJHO0FBRTNHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWlFRTtBQUVGLG9EQUFvRCIsInNvdXJjZXMiOlsid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9hcHAtY29udGFpbmVyL2NvbXBvbmVudHNJbmRleC50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvYXBwLWNvbnRhaW5lci9pbml0LWFwcC1jb250YWluZXIudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9jb21wb25lbnRzL2JhY2tncm91bmQuY29tcG9uZW50LnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vY29tcG9uZW50cy9ib3JkZXIuY29tcG9uZW50LnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vY29tcG9uZW50cy9ib3gtc2hhZG93LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2NvbXBvbmVudHMvY2xhc3MtbWFuYWdlbWVudC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9jb21wb25lbnRzL2Rpc3BsYXktYXMtY2hpbGQuY29tcG9uZW50LnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vY29tcG9uZW50cy9kaXNwbGF5LWFzLXBhcmVudC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9jb21wb25lbnRzL2ZvbnQuY29tcG9uZW50cy50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2NvbXBvbmVudHMvZ2VuZXJpYy1jc3MtcHJvcGVydHktbXV0YXRvci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9jb21wb25lbnRzL2dlbmVyaWMtcHJpbWFyeS1pbnB1dC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9jb21wb25lbnRzL2dlbmVyaWMtcHJpbWFyeS1zZWxlY3Rvci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9jb21wb25lbnRzL2lkLWRlZmluaXRpb24uY29tcG9uZW50LnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vY29tcG9uZW50cy9pbnB1dC13aXRoLXVuaXRzLXNlbGVjdG9yLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2NvbXBvbmVudHMvbWFyZ2luLW9yLXBhZGRpbmcuY29tcG9uZW50LnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vY29tcG9uZW50cy9zaXplcy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9jb21wb25lbnRzL3VybC1kZWZpbml0aW9uLWNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2NvbnN0YW50cy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9lbnVtcy9hZGQtY29tcG9uZW50LmVudW0udHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9lbnVtcy9hbGlnbi1mbGV4LWNvbnRlbnQuZW51bS50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2VudW1zL2FsaWduLWZsZXgtaXRlbXMuZW51bS50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2VudW1zL2FsaWduLWZsZXgtc2VsZi5lbnVtLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vZW51bXMvYWxpZ24tZ3JpZC1jb250ZW50LmVudW0udHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9lbnVtcy9hbGlnbi1ncmlkLWl0ZW1zLmVudW0udHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9lbnVtcy9hbGlnbi1ncmlkLXNlbGYuZW51bS50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2VudW1zL2JvcmRlci1zdHlsZS5lbnVtLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vZW51bXMvZGlzcGxheS10eXBlcy5lbnVtLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vZW51bXMvZXZlbnQtdHlwZS5lbnVtLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vZW51bXMvZmxleC1kaXJlY3Rpb24uZW51bS50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2VudW1zL2ZsZXgtd3JhcC5lbnVtLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vZW51bXMvZm9udC1zdHlsZXMuZW51bS50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2VudW1zL2ZvbnQtdmFyaWFudC5lbnVtLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vZW51bXMvZm9udC13ZWlnaHQuZW51bS50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2VudW1zL2ZvbnRzLmVudW0udHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9lbnVtcy9nZW5lcmFsLXBzZXVkb2NsYXNzLmVudW0udHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9lbnVtcy9ncmlkLWF1dG8tZmxvdy5lbnVtLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vZW51bXMvaW5wdXQtdHlwZS5lbnVtLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vZW51bXMvanVzdGlmeS1mbGV4LWNvbnRlbnQuZW51bS50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2VudW1zL2p1c3RpZnktZ3JpZC1jb250ZW50LmVudW0udHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9lbnVtcy9qdXN0aWZ5LWdyaWQtaXRlbXMuZW51bS50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2VudW1zL2p1c3RpZnktZ3JpZC1zZWxmLmVudW0udHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9lbnVtcy9zdHlsZS1uYW1lLmVudW0udHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9lbnVtcy90aXRsZS50eXBlcy5lbnVtLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vZW51bXMvdW5pdHMuZW51bS50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2Z1bmN0aW9ucy9kZWZpbmUtZWxlbWVudC1pZC50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2Z1bmN0aW9ucy9kZWZpbmUtZWxlbWVudC1uYW1lLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vZnVuY3Rpb25zL2RyYWctc3RhcnQtd2l0aC10YXJnZXQtbm9kZV9uYW1lLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vZnVuY3Rpb25zL2ZpcnN0LWxldHRlcnMtY2FwaXRhbGl6ZWQudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9mdW5jdGlvbnMvZ2V0LWNzcy11bml0LnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vZnVuY3Rpb25zL3JnYi10by1oZXgudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9tb2RlbHMvQW5jaG9yQnVpbGRlci50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL21vZGVscy9CdXR0b25CdWlsZGVyLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vbW9kZWxzL0NvbnRhaW5lckJ1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9tb2RlbHMvRm9ybUJ1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9tb2RlbHMvSW1hZ2VCdWlsZGVyLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vbW9kZWxzL0lucHV0QnVpbGRlci50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL21vZGVscy9MYWJlbEJ1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9tb2RlbHMvT3JkZXJlZExpc3RCdWlsZGVyLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vbW9kZWxzL1Jhd0J1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9tb2RlbHMvU2VsZWN0b3JGcm9tQXJyYXlCdWlsZGVyLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vbW9kZWxzL1NlbGVjdG9yRnJvbUVudW1CdWlsZGVyLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vbW9kZWxzL1N0eWxlc0NvbXBvbmVudHNCdWlsZGVyLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vbW9kZWxzL1RhYmxlQnVpbGRlci50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL21vZGVscy9UZXh0QXJlYUJ1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9tb2RlbHMvVGl0bGVCdWlsZGVyLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vbW9kZWxzL1Vub2RlcmVkTGlzdEJ1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9wdWJsaXNoZXJzL0NsYXNzQ2hhbmdlUHVibGlzaGVyLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vcHVibGlzaGVycy9Db21wb25lbnRDaGFuZ2VQdWJsaXNoZXIudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbXBvbmVudHMtY29udGFpbmVyL2luaXQtZHJhZ2dhYmxlLWNvbXBvbmVudHMudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2Nzcy1zdHlsZXNoZWV0L2Nzcy1zdHlsZXNoZWV0LnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9odG1sLWNvbXBvbmVudHMvQW5jaG9yLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9odG1sLWNvbXBvbmVudHMvQnV0dG9uLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9odG1sLWNvbXBvbmVudHMvQ29udGFpbmVyLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9odG1sLWNvbXBvbmVudHMvRm9ybS50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvaHRtbC1jb21wb25lbnRzL0ltYWdlLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9odG1sLWNvbXBvbmVudHMvSW5wdXQudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2h0bWwtY29tcG9uZW50cy9MYWJlbC50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvaHRtbC1jb21wb25lbnRzL09yZGVyZWRMaXN0LnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9odG1sLWNvbXBvbmVudHMvUmF3Q29udGFpbmVyLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9odG1sLWNvbXBvbmVudHMvUmF3SFRNTENvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvaHRtbC1jb21wb25lbnRzL1RhYmxlLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9odG1sLWNvbXBvbmVudHMvVGV4dEFyZWEudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2h0bWwtY29tcG9uZW50cy9UaXRsZS50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvaHRtbC1jb21wb25lbnRzL1Vub3JkZXJlZExpc3QudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50SW5kZXggfSBmcm9tICcuLi9jb21tb24vaW50ZXJmYWNlcy9jb21wb25lbnQtaW5kZXguaW50ZXJmYWNlJztcbmltcG9ydCBSYXdIVE1MQ29ucG9uZW50IGZyb20gJy4uL2h0bWwtY29tcG9uZW50cy9SYXdIVE1MQ29tcG9uZW50JztcblxuaW1wb3J0IHsgVGl0bGVUeXBlc0VudW0gfSBmcm9tICcuLi9jb21tb24vZW51bXMvdGl0bGUudHlwZXMuZW51bSc7XG5cbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vaHRtbC1jb21wb25lbnRzL0J1dHRvbic7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vaHRtbC1jb21wb25lbnRzL0lucHV0JztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vaHRtbC1jb21wb25lbnRzL0NvbnRhaW5lcic7XG5pbXBvcnQgTGFiZWwgZnJvbSAnLi4vaHRtbC1jb21wb25lbnRzL0xhYmVsJztcbmltcG9ydCBUaXRsZSBmcm9tICcuLi9odG1sLWNvbXBvbmVudHMvVGl0bGUnO1xuaW1wb3J0IEltYWdlIGZyb20gJy4uL2h0bWwtY29tcG9uZW50cy9JbWFnZSc7XG5pbXBvcnQgRm9ybSBmcm9tICcuLi9odG1sLWNvbXBvbmVudHMvRm9ybSc7XG5pbXBvcnQgT3JkZXJlZExpc3QgZnJvbSAnLi4vaHRtbC1jb21wb25lbnRzL09yZGVyZWRMaXN0JztcbmltcG9ydCBVbm9yZGVyZWRMaXN0IGZyb20gJy4uL2h0bWwtY29tcG9uZW50cy9Vbm9yZGVyZWRMaXN0JztcbmltcG9ydCBUYWJsZSBmcm9tICcuLi9odG1sLWNvbXBvbmVudHMvVGFibGUnO1xuaW1wb3J0IEFuY2hvciBmcm9tICcuLi9odG1sLWNvbXBvbmVudHMvQW5jaG9yJztcbmltcG9ydCBUZXh0QXJlYSBmcm9tICcuLi9odG1sLWNvbXBvbmVudHMvVGV4dEFyZWEnO1xuXG5mdW5jdGlvbiBjb21wb25lbnRzSW5kZXgoaW5kZXgpIHtcbiAgICBjb25zdCBjb21wb25lbnRzSW5kZXggOiBDb21wb25lbnRJbmRleCA9IHtcbiAgICAgICAgJ0RJVic6IHtcbiAgICAgICAgICAgIGNyZWF0ZTogKCkgOiBSYXdIVE1MQ29ucG9uZW50ID0+IG5ldyBDb250YWluZXIoKSxcbiAgICAgICAgICAgIGlzQ29udGFpbmVyOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICAnRk9STSc6IHtcbiAgICAgICAgICAgIGNyZWF0ZTogKCkgOiBSYXdIVE1MQ29ucG9uZW50ID0+IG5ldyBGb3JtKCksXG4gICAgICAgICAgICBpc0NvbnRhaW5lcjogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgJ0JVVFRPTic6IHtcbiAgICAgICAgICAgIGNyZWF0ZTogKCkgOiBSYXdIVE1MQ29ucG9uZW50ID0+IG5ldyBCdXR0b24oKSxcbiAgICAgICAgICAgIGlzQ29udGFpbmVyOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICAnSU5QVVQnOiB7XG4gICAgICAgICAgICBjcmVhdGU6ICgpIDogUmF3SFRNTENvbnBvbmVudCA9PiBuZXcgSW5wdXQoKSxcbiAgICAgICAgICAgIGlzQ29udGFpbmVyOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgJ0xBQkVMJzoge1xuICAgICAgICAgICAgY3JlYXRlOiAoKSA6IFJhd0hUTUxDb25wb25lbnQgPT4gbmV3IExhYmVsKCksXG4gICAgICAgICAgICBpc0NvbnRhaW5lcjogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgICdIMSc6IHtcbiAgICAgICAgICAgIGNyZWF0ZTogKCkgOiBSYXdIVE1MQ29ucG9uZW50ID0+IG5ldyBUaXRsZShUaXRsZVR5cGVzRW51bS5IMSksXG4gICAgICAgICAgICBpc0NvbnRhaW5lcjogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgICdIMic6IHtcbiAgICAgICAgICAgIGNyZWF0ZTogKCkgOiBSYXdIVE1MQ29ucG9uZW50ID0+IG5ldyBUaXRsZShUaXRsZVR5cGVzRW51bS5IMiksXG4gICAgICAgICAgICBpc0NvbnRhaW5lcjogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgICdIMyc6IHtcbiAgICAgICAgICAgIGNyZWF0ZTogKCkgOiBSYXdIVE1MQ29ucG9uZW50ID0+IG5ldyBUaXRsZShUaXRsZVR5cGVzRW51bS5IMyksXG4gICAgICAgICAgICBpc0NvbnRhaW5lcjogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgICdINCc6IHtcbiAgICAgICAgICAgIGNyZWF0ZTogKCkgOiBSYXdIVE1MQ29ucG9uZW50ID0+IG5ldyBUaXRsZShUaXRsZVR5cGVzRW51bS5INCksXG4gICAgICAgICAgICBpc0NvbnRhaW5lcjogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgICdINSc6IHtcbiAgICAgICAgICAgIGNyZWF0ZTogKCkgOiBSYXdIVE1MQ29ucG9uZW50ID0+IG5ldyBUaXRsZShUaXRsZVR5cGVzRW51bS5INSksXG4gICAgICAgICAgICBpc0NvbnRhaW5lcjogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgICdINic6IHtcbiAgICAgICAgICAgIGNyZWF0ZTogKCkgOiBSYXdIVE1MQ29ucG9uZW50ID0+IG5ldyBUaXRsZShUaXRsZVR5cGVzRW51bS5INiksXG4gICAgICAgICAgICBpc0NvbnRhaW5lcjogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgICdJTUcnOiB7XG4gICAgICAgICAgICBjcmVhdGU6ICgpIDogUmF3SFRNTENvbnBvbmVudCA9PiBuZXcgSW1hZ2UoKSxcbiAgICAgICAgICAgIGlzQ29udGFpbmVyOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgJ09MJzoge1xuICAgICAgICAgICAgY3JlYXRlOiAoKSA6IFJhd0hUTUxDb25wb25lbnQgPT4gbmV3IE9yZGVyZWRMaXN0KCksXG4gICAgICAgICAgICBpc0NvbnRhaW5lcjogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgJ1VMJzoge1xuICAgICAgICAgICAgY3JlYXRlOiAoKSA6IFJhd0hUTUxDb25wb25lbnQgPT4gbmV3IFVub3JkZXJlZExpc3QoKSxcbiAgICAgICAgICAgIGlzQ29udGFpbmVyOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICAnQSc6IHtcbiAgICAgICAgICAgIGNyZWF0ZTogKCkgOiBSYXdIVE1MQ29ucG9uZW50ID0+IG5ldyBBbmNob3IoKSxcbiAgICAgICAgICAgIGlzQ29udGFpbmVyOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICAnVEVYVEFSRUEnOiB7XG4gICAgICAgICAgICBjcmVhdGU6ICgpIDogUmF3SFRNTENvbnBvbmVudCA9PiBuZXcgVGV4dEFyZWEoKSxcbiAgICAgICAgICAgIGlzQ29udGFpbmVyOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICAnVEFCTEUnOiB7XG4gICAgICAgICAgICBjcmVhdGU6ICgpIDogUmF3SFRNTENvbnBvbmVudCA9PiBuZXcgVGFibGUoKSxcbiAgICAgICAgICAgIGlzQ29udGFpbmVyOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICAnZGVmYXVsdCc6IHtcbiAgICAgICAgICAgIGNyZWF0ZTogKCkgOiB1bmRlZmluZWQgID0+IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGlzQ29udGFpbmVyOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50c0luZGV4W2luZGV4XSB8fCBjb21wb25lbnRzSW5kZXhbJ2RlZmF1bHQnXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50c0luZGV4O1xuIiwiaW1wb3J0IERpc3BsYXlDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudHMvZGlzcGxheS1hcy1wYXJlbnQuY29tcG9uZW50JztcbmltcG9ydCBNYXJnaW5PclBhZGRpbmdDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudHMvbWFyZ2luLW9yLXBhZGRpbmcuY29tcG9uZW50JztcbmltcG9ydCBTdHlsZXNDb21wb25lbnRzQnVpbGRlciBmcm9tICcuLi9jb21tb24vbW9kZWxzL1N0eWxlc0NvbXBvbmVudHNCdWlsZGVyJztcbmltcG9ydCBSYXdIVE1MQ29ucG9uZW50IGZyb20gJy4uL2h0bWwtY29tcG9uZW50cy9SYXdIVE1MQ29tcG9uZW50JztcbmltcG9ydCBCYWNrZ3JvdW5kQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnRzL2JhY2tncm91bmQuY29tcG9uZW50JztcbmltcG9ydCBjb21wb25lbnRzSW5kZXggZnJvbSAnLi9jb21wb25lbnRzSW5kZXgnO1xuaW1wb3J0IGNvbnN0YW50cyBmcm9tICcuLi9jb21tb24vY29uc3RhbnRzL2NvbnN0YW50cyc7XG5cbmltcG9ydCB7IFN0eWxlTmFtZUVudW0gfSBmcm9tICcuLi9jb21tb24vZW51bXMvc3R5bGUtbmFtZS5lbnVtJztcbmltcG9ydCBDc3NTdHlsZVNoZWV0IGZyb20gJy4uL2Nzcy1zdHlsZXNoZWV0L2Nzcy1zdHlsZXNoZWV0JztcblxuaW1wb3J0IENvbXBvbmVudENoYW5nZVB1Ymxpc2hlciBmcm9tICcuLi9jb21tb24vcHVibGlzaGVycy9Db21wb25lbnRDaGFuZ2VQdWJsaXNoZXInO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluaXRBcHBDb250YWluZXIge1xuICAgIHByaXZhdGUgYXBwQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcbiAgICBwcml2YXRlIGFwcENvbnRhaW5lckNsYXNzTmFtZSA9ICdib2R5JztcbiAgICBwcml2YXRlIGFwcENvbnRhaW5lckhlaWdodElucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHByaXZhdGUgYXBwQ29udGFpbmVyV2lkdGhJbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgICBwcm90ZWN0ZWQgc3R5bGVzQ29tcG9uZW50czogSFRNTERpdkVsZW1lbnQ7XG5cbiAgICBwcm90ZWN0ZWQgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIGZhdGhlckJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xuXG4gICAgcHJpdmF0ZSBjb21wb25lbnRTZWxlY3RvcjogSFRNTFNlbGVjdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0LWl0ZW0nKTtcbiAgICBwcml2YXRlIHZlcnNpb25MYWJlbDogSFRNTExhYmVsRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN2ZXJzaW9uLWxhYmVsJyk7XG5cbiAgICBwcml2YXRlIGNvbXBvbmVudENoYW5nZVB1Ymxpc2hlcjogQ29tcG9uZW50Q2hhbmdlUHVibGlzaGVyO1xuXG4gICAgcHJpdmF0ZSBwcmludEh0bWxCdXR0b246IEhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW50LWh0bWwtZmlsZScpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYXBwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcC1jb250YWluZXInKTtcblxuICAgICAgICB0aGlzLmFwcENvbnRhaW5lckhlaWdodElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VwZGF0ZS1oZWlnaHQnKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VBcHBDb250YWluZXJIZWlnaHQgPSB0aGlzLmNoYW5nZUFwcENvbnRhaW5lckhlaWdodC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFwcENvbnRhaW5lckhlaWdodElucHV0LnZhbHVlID0gYCR7cGFyc2VJbnQodGhpcy5nZXRDdXJyZW50SGVpZ2h0KCkpfWA7XG4gICAgICAgIHRoaXMuYXBwQ29udGFpbmVySGVpZ2h0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLmNoYW5nZUFwcENvbnRhaW5lckhlaWdodCk7XG5cbiAgICAgICAgdGhpcy5hcHBDb250YWluZXJXaWR0aElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VwZGF0ZS13aWR0aCcpO1xuICAgICAgICB0aGlzLmNoYW5nZUFwcENvbnRhaW5lcldpZHRoID0gdGhpcy5jaGFuZ2VBcHBDb250YWluZXJXaWR0aC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFwcENvbnRhaW5lcldpZHRoSW5wdXQudmFsdWUgPSBgJHtwYXJzZUludCh0aGlzLmdldEN1cnJlbnRXaWR0aCgpKX1gO1xuICAgICAgICB0aGlzLmFwcENvbnRhaW5lcldpZHRoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLmNoYW5nZUFwcENvbnRhaW5lcldpZHRoKTtcblxuICAgICAgICB0aGlzLmRyYWdFbnRlciA9IHRoaXMuZHJhZ0VudGVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhZ092ZXIgPSB0aGlzLmRyYWdPdmVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhZ0xlYXZlID0gdGhpcy5kcmFnTGVhdmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcm9wID0gdGhpcy5kcm9wLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5vcGVuRWxlbWVudENvbmZpZ3MgPSB0aGlzLm9wZW5FbGVtZW50Q29uZmlncy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNoYW5nZVNpemUgPSB0aGlzLmNoYW5nZVNpemUuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmFwcENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCB0aGlzLmRyYWdFbnRlcik7XG4gICAgICAgIHRoaXMuYXBwQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5kcmFnT3Zlcik7XG4gICAgICAgIHRoaXMuYXBwQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIHRoaXMuZHJhZ0xlYXZlKTtcbiAgICAgICAgdGhpcy5hcHBDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuZHJvcCk7XG5cbiAgICAgICAgdGhpcy5hcHBDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9wZW5FbGVtZW50Q29uZmlncyk7XG5cbiAgICAgICAgdGhpcy5vblJlc2l6ZSh0aGlzLmFwcENvbnRhaW5lciwgdGhpcy5jaGFuZ2VTaXplKTtcblxuICAgICAgICB0aGlzLnNlbmRDb21wb25lbnROYW1lID0gdGhpcy5zZW5kQ29tcG9uZW50TmFtZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudENoYW5nZVB1Ymxpc2hlciA9IG5ldyBDb21wb25lbnRDaGFuZ2VQdWJsaXNoZXIoKTtcblxuICAgICAgICB0aGlzLmNvbXBvbmVudFNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuc2VuZENvbXBvbmVudE5hbWUpO1xuXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdmFyLXJlcXVpcmVzXG4gICAgICAgIGNvbnN0IHBhY2thZ2VWZXJzaW9uID0gcmVxdWlyZSgnLi4vLi4vLi4vcGFja2FnZS5qc29uJykudmVyc2lvbjtcbiAgICAgICAgdGhpcy52ZXJzaW9uTGFiZWwuaW5uZXJUZXh0ID0gYFZlcnNpb246ICR7cGFja2FnZVZlcnNpb259YDtcblxuICAgICAgICB0aGlzLnByaW50SHRtbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucHJpbnRIdG1sRmlsZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkcmFnRW50ZXIoZXZlbnQ6IERyYWdFdmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9IENzc1N0eWxlU2hlZXQuZ2V0UnVsZVN0eWxlcyh0aGlzLmFwcENvbnRhaW5lckNsYXNzTmFtZSlbJ2JhY2tncm91bmQtY29sb3InXTtcbiAgICAgICAgdGhpcy5hcHBDb250YWluZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29uc3RhbnRzLklOVkVSVEVEX0JBQ0tHUk9VTkRfQ09MT1I7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkcmFnT3ZlcihldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkcmFnTGVhdmUoKSB7XG4gICAgICAgIHRoaXMuYXBwQ29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcnO1xuICAgICAgICB0aGlzLmFwcENvbnRhaW5lci5hdHRyaWJ1dGVzLnJlbW92ZU5hbWVkSXRlbSgnc3R5bGUnKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRyb3AoZXZlbnQ6IERyYWdFdmVudCkge1xuICAgICAgICB0aGlzLmFwcENvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJztcblxuICAgICAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICAgIGlmICghY29tcG9uZW50c0luZGV4KHRhcmdldEVsZW1lbnQubm9kZU5hbWUpLmlzQ29udGFpbmVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZih0YXJnZXRFbGVtZW50LmNoaWxkcmVuLmxlbmd0aCA9PT0gMCAmJiB0YXJnZXRFbGVtZW50LmlubmVyVGV4dCAhPT0gJycpe1xuICAgICAgICAgICAgYWxlcnQoJ0lubmVyVGV4dCBtdXN0IGJlIGVtcHR5JylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGVsZW1lbnRUeXBlID0gZXZlbnQuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQvcGxhaW4nKTtcblxuICAgICAgICBjb25zdCBuZXdEb21FbGVtZW50OiBSYXdIVE1MQ29ucG9uZW50IHwgdW5kZWZpbmVkID0gY29tcG9uZW50c0luZGV4KGVsZW1lbnRUeXBlKS5jcmVhdGUoKTtcblxuICAgICAgICBjb25zdCBlbGVtZW50RXhpc3RzID0gbmV3RG9tRWxlbWVudCA/IGZhbHNlIDogdHJ1ZTtcblxuICAgICAgICBpZiAoZWxlbWVudEV4aXN0cykge1xuICAgICAgICAgICAgY29uc3QgZHJhZ2dhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudFR5cGUpO1xuICAgICAgICAgICAgdGFyZ2V0RWxlbWVudC5hcHBlbmRDaGlsZChkcmFnZ2FibGUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRDaGFuZ2VQdWJsaXNoZXIuYXR0YWNoKG5ld0RvbUVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGFyZ2V0RWxlbWVudC5hcHBlbmRDaGlsZChuZXdEb21FbGVtZW50LmRvbUVsZW1lbnQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb3BlbkVsZW1lbnRDb25maWdzKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIHRoaXMuc3R5bGVzQ29tcG9uZW50cyA9IG5ldyBTdHlsZXNDb21wb25lbnRzQnVpbGRlcigpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IE1hcmdpbk9yUGFkZGluZ0NvbXBvbmVudChcbiAgICAgICAgICAgICAgICB0aGlzLmFwcENvbnRhaW5lcixcbiAgICAgICAgICAgICAgICBTdHlsZU5hbWVFbnVtLm1hcmdpbikuY29tcG9uZW50KVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBNYXJnaW5PclBhZGRpbmdDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBDb250YWluZXIsXG4gICAgICAgICAgICAgICAgU3R5bGVOYW1lRW51bS5wYWRkaW5nKS5jb21wb25lbnQpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IEJhY2tncm91bmRDb21wb25lbnQodGhpcy5hcHBDb250YWluZXIpLmNvbXBvbmVudClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgRGlzcGxheUNvbXBvbmVudCh0aGlzLmFwcENvbnRhaW5lcikuY29tcG9uZW50KVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblJlc2l6ZShkb21fZWxlbSwgY2FsbGJhY2spIHtcbiAgICAgICAgY29uc3QgcmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKCkgPT4gY2FsbGJhY2soKSk7XG4gICAgICAgIHJlc2l6ZU9ic2VydmVyLm9ic2VydmUoZG9tX2VsZW0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2hhbmdlU2l6ZSgpIHtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5hcHBDb250YWluZXIuc3R5bGVbJ2hlaWdodCddO1xuICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMuYXBwQ29udGFpbmVyLnN0eWxlWyd3aWR0aCddO1xuXG4gICAgICAgIGlmIChoZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMuYXBwQ29udGFpbmVySGVpZ2h0SW5wdXQudmFsdWUgPSBgJHtwYXJzZUludChoZWlnaHQpfWA7XG4gICAgICAgICAgICBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXModGhpcy5hcHBDb250YWluZXJDbGFzc05hbWUpWydoZWlnaHQnXSA9IGhlaWdodDtcbiAgICAgICAgICAgIHRoaXMuYXBwQ29udGFpbmVyLnN0eWxlWydoZWlnaHQnXSA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGlmICh3aWR0aCkge1xuICAgICAgICAgICAgdGhpcy5hcHBDb250YWluZXJXaWR0aElucHV0LnZhbHVlID0gYCR7cGFyc2VJbnQod2lkdGgpfWA7XG4gICAgICAgICAgICBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXModGhpcy5hcHBDb250YWluZXJDbGFzc05hbWUpWyd3aWR0aCddID0gd2lkdGg7XG4gICAgICAgICAgICB0aGlzLmFwcENvbnRhaW5lci5zdHlsZVsnd2lkdGgnXSA9ICcnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjaGFuZ2VBcHBDb250YWluZXJIZWlnaHQoKSB7XG4gICAgICAgIENzc1N0eWxlU2hlZXQuZ2V0UnVsZVN0eWxlcyh0aGlzLmFwcENvbnRhaW5lckNsYXNzTmFtZSlbJ2hlaWdodCddID0gYCR7dGhpcy5hcHBDb250YWluZXJIZWlnaHRJbnB1dC52YWx1ZX1weGBcbiAgICB9XG5cbiAgICBwcml2YXRlIGNoYW5nZUFwcENvbnRhaW5lcldpZHRoKCkge1xuICAgICAgICBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXModGhpcy5hcHBDb250YWluZXJDbGFzc05hbWUpWyd3aWR0aCddID0gYCR7dGhpcy5hcHBDb250YWluZXJXaWR0aElucHV0LnZhbHVlfXB4YFxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0Q3VycmVudEhlaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIENzc1N0eWxlU2hlZXQuZ2V0UnVsZVN0eWxlcyh0aGlzLmFwcENvbnRhaW5lckNsYXNzTmFtZSlbJ2hlaWdodCddXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRDdXJyZW50V2lkdGgoKSB7XG4gICAgICAgIHJldHVybiBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXModGhpcy5hcHBDb250YWluZXJDbGFzc05hbWUpWyd3aWR0aCddXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwcmludEh0bWxGaWxlKCkge1xuICAgICAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcC1jb250YWluZXInKS5pbm5lckhUTUw7XG4gICAgICAgIGNvbnN0IHJlbW92ZURyYWdnYWJsZVJlZ0V4ID0gbmV3IFJlZ0V4cCgnIGRyYWdnYWJsZT1cInRydWVcIicsICdnJyk7XG4gICAgICAgIG1haW5Db250YWluZXIucmVwbGFjZShyZW1vdmVEcmFnZ2FibGVSZWdFeCwgJycpO1xuXG4gICAgICAgIC8vIFRPRE86IHZlciBzaSBkZWJlcmlhIGlyIGRlc3BsZWdhbmRvIGVsIGFyYm9sIGRlIGVsZW1lbnRvcyBIVE1MIGUgaXIgYXJtYW5kbyBlbCBodG1sIGFxdWkuXG4gICAgICAgIC8vIFRPRE86IHZlciBzaSBlcyBuZWNlc2FyaW8gYm9ycmFyIGVsIHN0eWxlIHkgbG8gcXVlIGhheWEgZGVudHJvLi4uLlxuICAgICAgICAvLyBUT0RPOiBlbGltaW5hciBlbCBkcmFnZ2FibGVcblxuICAgICAgICBjb25zdCBvdXRwdXRIdG1sID0gYFxuICAgICAgICA8IURPQ1RZUEUgaHRtbD5cbiAgICAgICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICAgIDxoZWFkPlxuICAgICAgICAgICAgPG1ldGEgY2hhcnNldD1cIlVURi04XCI+XG4gICAgICAgICAgICA8bWV0YSBodHRwLWVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIj5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCI+XG4gICAgICAgICAgICA8dGl0bGU+RG9jdW1lbnQ8L3RpdGxlPlxuICAgICAgICA8L2hlYWQ+XG4gICAgICAgIDxib2R5IGlkPVwiYXBwLWNvbnRhaW5lclwiIGNsYXNzPVwiYm9keVwiPlxuICAgICAgICAgICAgJHttYWluQ29udGFpbmVyfVxuICAgICAgICA8L2JvZHk+XG4gICAgICAgIDwvaHRtbD5gXG5cbiAgICAgICAgY29uc29sZS5sb2cob3V0cHV0SHRtbCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZW5kQ29tcG9uZW50TmFtZSgpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnRDaGFuZ2VQdWJsaXNoZXIubm90aWZ5Q29tcG9uZW50TmFtZSh0aGlzLmNvbXBvbmVudFNlbGVjdG9yLnZhbHVlKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ2xhc3NDaGFuZ2VPYnNlcnZlckludGVyZmFjZSBmcm9tICcuLi9pbnRlcmZhY2VzL2NsYXNzLWNoYW5nZS1vYnNlcnZlci5pbnRlcmZhY2UnO1xuXG5pbXBvcnQgQ29udGFpbmVyQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvQ29udGFpbmVyQnVpbGRlcic7XG5pbXBvcnQgSW5wdXRCdWlsZGVyIGZyb20gJy4uL21vZGVscy9JbnB1dEJ1aWxkZXInO1xuaW1wb3J0IExhYmVsQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvTGFiZWxCdWlsZGVyJztcbmltcG9ydCBCdXR0b25CdWlsZGVyIGZyb20gJy4uL21vZGVscy9CdXR0b25CdWlsZGVyJztcblxuaW1wb3J0IENzc1N0eWxlU2hlZXQgZnJvbSAnLi4vLi4vY3NzLXN0eWxlc2hlZXQvY3NzLXN0eWxlc2hlZXQnO1xuaW1wb3J0IGNvbG9yVG9IZXggZnJvbSAnLi4vZnVuY3Rpb25zL3JnYi10by1oZXgnO1xuXG5pbXBvcnQgeyBJbnB1dFR5cGVFbnVtIH0gZnJvbSAnLi4vZW51bXMvaW5wdXQtdHlwZS5lbnVtJztcbmltcG9ydCB7IFN0eWxlTmFtZUVudW0gfSBmcm9tICcuLi9lbnVtcy9zdHlsZS1uYW1lLmVudW0nO1xuaW1wb3J0IHsgRGlzcGxheVR5cGVzRW51bSB9IGZyb20gJy4uL2VudW1zL2Rpc3BsYXktdHlwZXMuZW51bSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhY2tncm91bmRDb21wb25lbnQgaW1wbGVtZW50cyBDbGFzc0NoYW5nZU9ic2VydmVySW50ZXJmYWNle1xuICAgIHByaXZhdGUgZG9tRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBjb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgZG9tRWxlbWVudFN0eWxlU2hlZXQ6IENTU1N0eWxlRGVjbGFyYXRpb247XG5cbiAgICBwcml2YXRlIGNvbG9ySW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBvcGFjaXR5U2xpZGVyOiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHByaXZhdGUgb3BhY2l0eVZhbHVlOiBIVE1MTGFiZWxFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IoZG9tRWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCA9IENzc1N0eWxlU2hlZXQuZ2V0UnVsZVN0eWxlcyh0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0WzBdKTtcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnRzKCk7XG4gICAgfVxuXG4gICAgZ2V0IGNvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkQ29tcG9uZW50cygpIHtcbiAgICAgICAgdGhpcy51cGRhdGVDb2xvciA9IHRoaXMudXBkYXRlQ29sb3IuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGVPcGFjaXR5ID0gdGhpcy51cGRhdGVPcGFjaXR5LmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5jb2xvcklucHV0ID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLmNvbG9yKVxuICAgICAgICAgICAgLnNldFZhbHVlKHRoaXMuZ2V0Q3VycmVudENvbG9yKCkpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLnVwZGF0ZUNvbG9yKVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICBjb25zdCByZW1vdmVDb2xvciA9IG5ldyBCdXR0b25CdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ1JlbW92ZSBDb2xvcicpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnVwZGF0ZUNvbG9yKVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICB0aGlzLm9wYWNpdHlTbGlkZXIgPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0ucmFuZ2UpXG4gICAgICAgICAgICAuc2V0VmFsdWUodGhpcy5nZXRDdXJyZW50T3BhY2l0eSgpKVxuICAgICAgICAgICAgLnNldE1pbigwKVxuICAgICAgICAgICAgLnNldE1heCgxMDApXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLnVwZGF0ZU9wYWNpdHkpXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIHRoaXMub3BhY2l0eVZhbHVlID0gbmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0SW5uZXJUZXh0KGAke3RoaXMuZ2V0Q3VycmVudE9wYWNpdHkoKX0lYClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgY29uc3QgYmFja2dyb3VuZENvbXBvbmVudHMgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnQ29sb3IgLyBPcGFjaXR5JylcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuY29sb3JJbnB1dClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5vcGFjaXR5U2xpZGVyKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLm9wYWNpdHlWYWx1ZSlcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQocmVtb3ZlQ29sb3IpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5ib3JkZXIsICcxcHggc29saWQgIzRDQUY1MCcpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5wYWRkaW5nLCAnM3B4JylcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnQmFja2dyb3VuZCcpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kQ29tcG9uZW50cylcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRDdXJyZW50Q29sb3IoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGNvbG9yVG9IZXgodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYmFja2dyb3VuZC1jb2xvciddKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEN1cnJlbnRPcGFjaXR5KCk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IG9wYWNpdHkgPSBwYXJzZUZsb2F0KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ29wYWNpdHknXSkgKiAxMDA7XG4gICAgICAgIHJldHVybiBpc05hTihvcGFjaXR5KSA/ICcxMDAnIDogTWF0aC5yb3VuZChvcGFjaXR5KS50b1N0cmluZygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlQ29sb3IoZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgIGlmICggZXZlbnQudHlwZSA9PT0gJ2NsaWNrJyl7XG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydiYWNrZ3JvdW5kLWNvbG9yJ10gPSAnJztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2JhY2tncm91bmQtY29sb3InXSA9IHRoaXMuY29sb3JJbnB1dC52YWx1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZU9wYWNpdHkoKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcGFyc2VJbnQodGhpcy5vcGFjaXR5U2xpZGVyLnZhbHVlKVxuICAgICAgICBjb25zdCBwZXJjZW50YWdlID0gdmFsdWUgLyAxMDA7XG4gICAgICAgIGlmKHZhbHVlID49IDEwMCkge1xuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnb3BhY2l0eSddID0gJydcbiAgICAgICAgICAgIHRoaXMub3BhY2l0eVZhbHVlLmlubmVyVGV4dCA9ICcxMDAlJztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydvcGFjaXR5J10gPSBgJHtwZXJjZW50YWdlfWA7XG4gICAgICAgIHRoaXMub3BhY2l0eVZhbHVlLmlubmVyVGV4dCA9IGAke3ZhbHVlfSVgO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGFzc05hbWVVcGRhdGVkKG5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0ID0gQ3NzU3R5bGVTaGVldC5nZXRSdWxlU3R5bGVzKG5hbWUpO1xuICAgICAgICB0aGlzLmNvbG9ySW5wdXQudmFsdWUgPSB0aGlzLmdldEN1cnJlbnRDb2xvcigpO1xuICAgICAgICB0aGlzLm9wYWNpdHlTbGlkZXIudmFsdWUgPSB0aGlzLmdldEN1cnJlbnRPcGFjaXR5KCk7XG4gICAgICAgIHRoaXMub3BhY2l0eVZhbHVlLmlubmVyVGV4dCA9IGAke3RoaXMub3BhY2l0eVNsaWRlci52YWx1ZX0lYDtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ2xhc3NDaGFuZ2VPYnNlcnZlckludGVyZmFjZSBmcm9tICcuLi9pbnRlcmZhY2VzL2NsYXNzLWNoYW5nZS1vYnNlcnZlci5pbnRlcmZhY2UnO1xuXG5pbXBvcnQgQ29udGFpbmVyQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvQ29udGFpbmVyQnVpbGRlcic7XG5pbXBvcnQgSW5wdXRCdWlsZGVyIGZyb20gJy4uL21vZGVscy9JbnB1dEJ1aWxkZXInO1xuaW1wb3J0IExhYmVsQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvTGFiZWxCdWlsZGVyJztcbmltcG9ydCBTZWxlY3RvckZyb21FbnVtQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXInO1xuXG5pbXBvcnQgQ3NzU3R5bGVTaGVldCBmcm9tICcuLi8uLi9jc3Mtc3R5bGVzaGVldC9jc3Mtc3R5bGVzaGVldCc7XG5pbXBvcnQgY29sb3JUb0hleCBmcm9tICcuLi9mdW5jdGlvbnMvcmdiLXRvLWhleCc7XG5pbXBvcnQgZ2V0VW5pdCBmcm9tICcuLi9mdW5jdGlvbnMvZ2V0LWNzcy11bml0JztcblxuaW1wb3J0IHsgSW5wdXRUeXBlRW51bSB9IGZyb20gJy4uL2VudW1zL2lucHV0LXR5cGUuZW51bSc7XG5pbXBvcnQgeyBCb3JkZXJTdHlsZUVudW0gfSBmcm9tICcuLi9lbnVtcy9ib3JkZXItc3R5bGUuZW51bSc7XG5pbXBvcnQgeyBVbml0c0VudW0gfSBmcm9tICcuLi9lbnVtcy91bml0cy5lbnVtJztcbmltcG9ydCB7IFN0eWxlTmFtZUVudW0gfSBmcm9tICcuLi9lbnVtcy9zdHlsZS1uYW1lLmVudW0nO1xuaW1wb3J0IHsgRGlzcGxheVR5cGVzRW51bSB9IGZyb20gJy4uL2VudW1zL2Rpc3BsYXktdHlwZXMuZW51bSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvcmRlckNvbXBvbmVudCBpbXBsZW1lbnRzIENsYXNzQ2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2Uge1xuICAgIHByaXZhdGUgZG9tRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBjb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgZG9tRWxlbWVudFN0eWxlU2hlZXQ6IENTU1N0eWxlRGVjbGFyYXRpb247XG5cbiAgICBwcml2YXRlIHRvcEJvcmRlckNvbG9ySW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSByaWdodEJvcmRlckNvbG9ySW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBib3R0b21Cb3JkZXJDb2xvcklucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHByaXZhdGUgbGVmdEJvcmRlckNvbG9ySW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIHRvcEJvcmRlclN0eWxlU2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIHByaXZhdGUgcmlnaHRCb3JkZXJTdHlsZVNlbGVjdG9yOiBIVE1MU2VsZWN0RWxlbWVudDtcbiAgICBwcml2YXRlIGJvdHRvbUJvcmRlclN0eWxlU2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIHByaXZhdGUgbGVmdEJvcmRlclN0eWxlU2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSB0b3BCb3JkZXJXaWR0aElucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHByaXZhdGUgcmlnaHRCb3JkZXJXaWR0aElucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHByaXZhdGUgYm90dG9tQm9yZGVyV2lkdGhJbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgICBwcml2YXRlIGxlZnRCb3JkZXJXaWR0aElucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSB0b3BCb3JkZXJXaWR0aFVuaXRTZWxlY3RvcjogSFRNTFNlbGVjdEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSByaWdodEJvcmRlcldpZHRoVW5pdFNlbGVjdG9yOiBIVE1MU2VsZWN0RWxlbWVudDtcbiAgICBwcml2YXRlIGJvdHRvbUJvcmRlcldpZHRoVW5pdFNlbGVjdG9yOiBIVE1MU2VsZWN0RWxlbWVudDtcbiAgICBwcml2YXRlIGxlZnRCb3JkZXJXaWR0aFVuaXRTZWxlY3RvcjogSFRNTFNlbGVjdEVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIHRvcEJvcmRlclJhZGl1c0lucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHByaXZhdGUgcmlnaHRCb3JkZXJSYWRpdXNJbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgICBwcml2YXRlIGJvdHRvbUJvcmRlclJhZGl1c0lucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHByaXZhdGUgbGVmdEJvcmRlclJhZGl1c0lucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSB0b3BCb3JkZXJSYWRpdXNVbml0U2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIHByaXZhdGUgcmlnaHRCb3JkZXJSYWRpdXNVbml0U2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIHByaXZhdGUgYm90dG9tQm9yZGVyUmFkaXVzVW5pdFNlbGVjdG9yOiBIVE1MU2VsZWN0RWxlbWVudDtcbiAgICBwcml2YXRlIGxlZnRCb3JkZXJSYWRpdXNVbml0U2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSBzZWxlY3RBbGxDaGVja0JveDogSFRNTElucHV0RWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKGRvbUVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQgPSBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXModGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdFswXSk7XG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50cygpO1xuICAgIH1cblxuICAgIGdldCBjb21wb25lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZENvbXBvbmVudHMoKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlQ29tcG9uZW50c1N0YXR1cyA9IHRoaXMuY2hhbmdlQ29tcG9uZW50c1N0YXR1cy5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlQm9yZGVyU3R5bGVQcm9wZXJ0eSA9IHRoaXMudXBkYXRlQm9yZGVyU3R5bGVQcm9wZXJ0eS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZUJvcmRlckNvbG9yID0gdGhpcy51cGRhdGVCb3JkZXJDb2xvci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZUJvcmRlcldpZHRoID0gdGhpcy51cGRhdGVCb3JkZXJXaWR0aC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZUJvcmRlclJhZGl1cyA9IHRoaXMudXBkYXRlQm9yZGVyUmFkaXVzLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5zZWxlY3RBbGxDaGVja0JveCA9IG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS5jaGVja2JveClcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmNoYW5nZUNvbXBvbmVudHNTdGF0dXMpXG4gICAgICAgICAgICAuY2hlY2tlZCh0aGlzLnVuaWZpZWRCb3JkZXJQcm9wZXJ0aWVzKCkpXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIGNvbnN0IHNlbGVjdEFsbENvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdTZWxlY3QgQWxsJylcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuc2VsZWN0QWxsQ2hlY2tCb3gpXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG5cbiAgICAgICAgdGhpcy5idWlsZEFsbENvbXBvbmVudHMoKTtcbiAgICAgICAgdGhpcy5zZXRCb3JkZXJWYWx1ZXNBY2NvcmRpbmdUb0NsYXNzKCk7XG5cbiAgICAgICAgY29uc3QgdG9wQ29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ1RvcCBCb3JkZXIgQ29sb3IgLyBTdHlsZScpXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLnRvcEJvcmRlckNvbG9ySW5wdXQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMudG9wQm9yZGVyU3R5bGVTZWxlY3RvcilcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ1RvcCBCb3JkZXIgV2lkdGgnKVxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy50b3BCb3JkZXJXaWR0aElucHV0KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLnRvcEJvcmRlcldpZHRoVW5pdFNlbGVjdG9yKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnVG9wIEJvcmRlciBSYWRpdXMnKVxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy50b3BCb3JkZXJSYWRpdXNJbnB1dClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy50b3BCb3JkZXJSYWRpdXNVbml0U2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgY29uc3QgcmlnaHRDb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnUmlnaHQgQm9yZGVyIENvbG9yIC8gU3R5bGUnKVxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5yaWdodEJvcmRlckNvbG9ySW5wdXQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMucmlnaHRCb3JkZXJTdHlsZVNlbGVjdG9yKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnUmlnaHQgQm9yZGVyIFdpZHRoJylcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMucmlnaHRCb3JkZXJXaWR0aElucHV0KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLnJpZ2h0Qm9yZGVyV2lkdGhVbml0U2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdSaWdodCBCb3JkZXIgUmFkaXVzJylcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMucmlnaHRCb3JkZXJSYWRpdXNJbnB1dClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5yaWdodEJvcmRlclJhZGl1c1VuaXRTZWxlY3RvcilcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICBjb25zdCBib3R0b21Db250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnQm90dG9tIEJvcmRlciBDb2xvciAvIFN0eWxlJylcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuYm90dG9tQm9yZGVyQ29sb3JJbnB1dClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5ib3R0b21Cb3JkZXJTdHlsZVNlbGVjdG9yKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnQm90dG9tIEJvcmRlciBXaWR0aCcpXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmJvdHRvbUJvcmRlcldpZHRoSW5wdXQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuYm90dG9tQm9yZGVyV2lkdGhVbml0U2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdCb3R0b20gQm9yZGVyIFJhZGl1cycpXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmJvdHRvbUJvcmRlclJhZGl1c0lucHV0KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmJvdHRvbUJvcmRlclJhZGl1c1VuaXRTZWxlY3RvcilcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICBjb25zdCBsZWZ0Q29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0xlZnQgQm9yZGVyIENvbG9yIC8gU3R5bGUnKVxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5sZWZ0Qm9yZGVyQ29sb3JJbnB1dClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5sZWZ0Qm9yZGVyU3R5bGVTZWxlY3RvcilcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0xlZnQgQm9yZGVyIFdpZHRoJylcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMubGVmdEJvcmRlcldpZHRoSW5wdXQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMubGVmdEJvcmRlcldpZHRoVW5pdFNlbGVjdG9yKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnTGVmdCBCb3JkZXIgUmFkaXVzJylcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMubGVmdEJvcmRlclJhZGl1c0lucHV0KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmxlZnRCb3JkZXJSYWRpdXNVbml0U2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgY29uc3QgaW5wdXRWYWx1ZXNDb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQodG9wQ29udGFpbmVyKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKHJpZ2h0Q29udGFpbmVyKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKGJvdHRvbUNvbnRhaW5lcilcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChsZWZ0Q29udGFpbmVyKVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmJvcmRlciwgJzFweCBzb2xpZCAjNENBRjUwJylcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLnBhZGRpbmcsICczcHgnKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdCb3JkZXIgVHlwZSBTZWxlY3RvcicpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChzZWxlY3RBbGxDb250YWluZXIpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQoaW5wdXRWYWx1ZXNDb250YWluZXIpXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgIH1cblxuICAgIHByaXZhdGUgYnVpbGRBbGxDb21wb25lbnRzKCkge1xuICAgICAgICB0aGlzLmJ1aWxkQ29sb3JJbnB1dHMoKTtcbiAgICAgICAgdGhpcy5idWlsZFN0eWxlU2VsZWN0b3JzKCk7XG4gICAgICAgIHRoaXMuYnVpbGRCb3JkZXJXaWR0aElucHV0cygpO1xuICAgICAgICB0aGlzLmJ1aWxkQm9yZGVyV2lkdGhVbml0c1NlbGVjdG9ycygpO1xuICAgICAgICB0aGlzLmJ1aWxkQm9yZGVyUmFkaXVzSW5wdXRzKClcbiAgICAgICAgdGhpcy5idWlsZEJvcmRlclJhZGl1c1VuaXRzU2VsZWN0b3JzKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBidWlsZENvbG9ySW5wdXRzKCkge1xuICAgICAgICB0aGlzLnRvcEJvcmRlckNvbG9ySW5wdXQgPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0uY29sb3IpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLnVwZGF0ZUJvcmRlckNvbG9yKVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG4gICAgICAgIHRoaXMucmlnaHRCb3JkZXJDb2xvcklucHV0ID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLmNvbG9yKVxuICAgICAgICAgICAgLmRpc2FibGVkKHRoaXMuc2VsZWN0QWxsQ2hlY2tCb3guY2hlY2tlZClcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMudXBkYXRlQm9yZGVyQ29sb3IpXG4gICAgICAgICAgICAuYnVpbGQoKTtcbiAgICAgICAgdGhpcy5ib3R0b21Cb3JkZXJDb2xvcklucHV0ID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLmNvbG9yKVxuICAgICAgICAgICAgLmRpc2FibGVkKHRoaXMuc2VsZWN0QWxsQ2hlY2tCb3guY2hlY2tlZClcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMudXBkYXRlQm9yZGVyQ29sb3IpXG4gICAgICAgICAgICAuYnVpbGQoKTtcbiAgICAgICAgdGhpcy5sZWZ0Qm9yZGVyQ29sb3JJbnB1dCA9IG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS5jb2xvcilcbiAgICAgICAgICAgIC5kaXNhYmxlZCh0aGlzLnNlbGVjdEFsbENoZWNrQm94LmNoZWNrZWQpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLnVwZGF0ZUJvcmRlckNvbG9yKVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBidWlsZFN0eWxlU2VsZWN0b3JzKCkge1xuICAgICAgICB0aGlzLnRvcEJvcmRlclN0eWxlU2VsZWN0b3IgPSBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIoQm9yZGVyU3R5bGVFbnVtKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudXBkYXRlQm9yZGVyU3R5bGVQcm9wZXJ0eSlcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgIHRoaXMucmlnaHRCb3JkZXJTdHlsZVNlbGVjdG9yID0gbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKEJvcmRlclN0eWxlRW51bSlcbiAgICAgICAgICAgIC5kaXNhYmxlZCh0aGlzLnNlbGVjdEFsbENoZWNrQm94LmNoZWNrZWQpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVCb3JkZXJTdHlsZVByb3BlcnR5KVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgdGhpcy5ib3R0b21Cb3JkZXJTdHlsZVNlbGVjdG9yID0gbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKEJvcmRlclN0eWxlRW51bSlcbiAgICAgICAgICAgIC5kaXNhYmxlZCh0aGlzLnNlbGVjdEFsbENoZWNrQm94LmNoZWNrZWQpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVCb3JkZXJTdHlsZVByb3BlcnR5KVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgdGhpcy5sZWZ0Qm9yZGVyU3R5bGVTZWxlY3RvciA9IG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihCb3JkZXJTdHlsZUVudW0pXG4gICAgICAgICAgICAuZGlzYWJsZWQodGhpcy5zZWxlY3RBbGxDaGVja0JveC5jaGVja2VkKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudXBkYXRlQm9yZGVyU3R5bGVQcm9wZXJ0eSlcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBidWlsZEJvcmRlcldpZHRoSW5wdXRzKCkge1xuICAgICAgICB0aGlzLnRvcEJvcmRlcldpZHRoSW5wdXQgPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0ubnVtYmVyKVxuICAgICAgICAgICAgLnNldE1pbigwKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy51cGRhdGVCb3JkZXJXaWR0aClcbiAgICAgICAgICAgIC5idWlsZCgpO1xuICAgICAgICB0aGlzLnJpZ2h0Qm9yZGVyV2lkdGhJbnB1dCA9IG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS5udW1iZXIpXG4gICAgICAgICAgICAuc2V0TWluKDApXG4gICAgICAgICAgICAuZGlzYWJsZWQodGhpcy5zZWxlY3RBbGxDaGVja0JveC5jaGVja2VkKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudXBkYXRlQm9yZGVyV2lkdGgpXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICB0aGlzLmJvdHRvbUJvcmRlcldpZHRoSW5wdXQgPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0ubnVtYmVyKVxuICAgICAgICAgICAgLnNldE1pbigwKVxuICAgICAgICAgICAgLmRpc2FibGVkKHRoaXMuc2VsZWN0QWxsQ2hlY2tCb3guY2hlY2tlZClcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnVwZGF0ZUJvcmRlcldpZHRoKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgdGhpcy5sZWZ0Qm9yZGVyV2lkdGhJbnB1dCA9IG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS5udW1iZXIpXG4gICAgICAgICAgICAuc2V0TWluKDApXG4gICAgICAgICAgICAuZGlzYWJsZWQodGhpcy5zZWxlY3RBbGxDaGVja0JveC5jaGVja2VkKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudXBkYXRlQm9yZGVyV2lkdGgpXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgIH1cblxuICAgIHByaXZhdGUgYnVpbGRCb3JkZXJXaWR0aFVuaXRzU2VsZWN0b3JzKCkge1xuICAgICAgICB0aGlzLnRvcEJvcmRlcldpZHRoVW5pdFNlbGVjdG9yID0gbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKFVuaXRzRW51bSlcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnVwZGF0ZUJvcmRlcldpZHRoKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgdGhpcy5yaWdodEJvcmRlcldpZHRoVW5pdFNlbGVjdG9yID0gbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKFVuaXRzRW51bSlcbiAgICAgICAgICAgIC5kaXNhYmxlZCh0aGlzLnNlbGVjdEFsbENoZWNrQm94LmNoZWNrZWQpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVCb3JkZXJXaWR0aClcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgIHRoaXMuYm90dG9tQm9yZGVyV2lkdGhVbml0U2VsZWN0b3IgPSBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIoVW5pdHNFbnVtKVxuICAgICAgICAgICAgLmRpc2FibGVkKHRoaXMuc2VsZWN0QWxsQ2hlY2tCb3guY2hlY2tlZClcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnVwZGF0ZUJvcmRlcldpZHRoKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgdGhpcy5sZWZ0Qm9yZGVyV2lkdGhVbml0U2VsZWN0b3IgPSBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIoVW5pdHNFbnVtKVxuICAgICAgICAgICAgLmRpc2FibGVkKHRoaXMuc2VsZWN0QWxsQ2hlY2tCb3guY2hlY2tlZClcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnVwZGF0ZUJvcmRlcldpZHRoKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICB9XG5cbiAgICBwcml2YXRlIGJ1aWxkQm9yZGVyUmFkaXVzSW5wdXRzKCkge1xuICAgICAgICB0aGlzLnRvcEJvcmRlclJhZGl1c0lucHV0ID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLm51bWJlcilcbiAgICAgICAgICAgIC5zZXRNaW4oMClcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMudXBkYXRlQm9yZGVyUmFkaXVzKVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG4gICAgICAgIHRoaXMucmlnaHRCb3JkZXJSYWRpdXNJbnB1dCA9IG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS5udW1iZXIpXG4gICAgICAgICAgICAuc2V0TWluKDApXG4gICAgICAgICAgICAuZGlzYWJsZWQodGhpcy5zZWxlY3RBbGxDaGVja0JveC5jaGVja2VkKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudXBkYXRlQm9yZGVyUmFkaXVzKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgdGhpcy5ib3R0b21Cb3JkZXJSYWRpdXNJbnB1dCA9IG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS5udW1iZXIpXG4gICAgICAgICAgICAuc2V0TWluKDApXG4gICAgICAgICAgICAuZGlzYWJsZWQodGhpcy5zZWxlY3RBbGxDaGVja0JveC5jaGVja2VkKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudXBkYXRlQm9yZGVyUmFkaXVzKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgdGhpcy5sZWZ0Qm9yZGVyUmFkaXVzSW5wdXQgPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0ubnVtYmVyKVxuICAgICAgICAgICAgLnNldE1pbigwKVxuICAgICAgICAgICAgLmRpc2FibGVkKHRoaXMuc2VsZWN0QWxsQ2hlY2tCb3guY2hlY2tlZClcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnVwZGF0ZUJvcmRlclJhZGl1cylcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBidWlsZEJvcmRlclJhZGl1c1VuaXRzU2VsZWN0b3JzKCkge1xuICAgICAgICB0aGlzLnRvcEJvcmRlclJhZGl1c1VuaXRTZWxlY3RvciA9IG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihVbml0c0VudW0pXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVCb3JkZXJSYWRpdXMpXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICB0aGlzLnJpZ2h0Qm9yZGVyUmFkaXVzVW5pdFNlbGVjdG9yID0gbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKFVuaXRzRW51bSlcbiAgICAgICAgICAgIC5kaXNhYmxlZCh0aGlzLnNlbGVjdEFsbENoZWNrQm94LmNoZWNrZWQpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVCb3JkZXJSYWRpdXMpXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICB0aGlzLmJvdHRvbUJvcmRlclJhZGl1c1VuaXRTZWxlY3RvciA9IG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihVbml0c0VudW0pXG4gICAgICAgICAgICAuZGlzYWJsZWQodGhpcy5zZWxlY3RBbGxDaGVja0JveC5jaGVja2VkKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudXBkYXRlQm9yZGVyUmFkaXVzKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgdGhpcy5sZWZ0Qm9yZGVyUmFkaXVzVW5pdFNlbGVjdG9yID0gbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKFVuaXRzRW51bSlcbiAgICAgICAgICAgIC5kaXNhYmxlZCh0aGlzLnNlbGVjdEFsbENoZWNrQm94LmNoZWNrZWQpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVCb3JkZXJSYWRpdXMpXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgIH1cblxuICAgIHByaXZhdGUgY2hhbmdlQ29tcG9uZW50c1N0YXR1cyAoKSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdEFsbENoZWNrQm94LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmlnaHRCb3JkZXJTdHlsZVNlbGVjdG9yLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tQm9yZGVyU3R5bGVTZWxlY3Rvci5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmxlZnRCb3JkZXJTdHlsZVNlbGVjdG9yLmRpc2FibGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgdGhpcy5yaWdodEJvcmRlckNvbG9ySW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5ib3R0b21Cb3JkZXJDb2xvcklucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubGVmdEJvcmRlckNvbG9ySW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICB0aGlzLnJpZ2h0Qm9yZGVyV2lkdGhJbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbUJvcmRlcldpZHRoSW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5sZWZ0Qm9yZGVyV2lkdGhJbnB1dC5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIHRoaXMucmlnaHRCb3JkZXJXaWR0aFVuaXRTZWxlY3Rvci5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbUJvcmRlcldpZHRoVW5pdFNlbGVjdG9yLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubGVmdEJvcmRlcldpZHRoVW5pdFNlbGVjdG9yLmRpc2FibGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgdGhpcy5yaWdodEJvcmRlclJhZGl1c0lucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tQm9yZGVyUmFkaXVzSW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5sZWZ0Qm9yZGVyUmFkaXVzSW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICB0aGlzLnJpZ2h0Qm9yZGVyUmFkaXVzVW5pdFNlbGVjdG9yLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tQm9yZGVyUmFkaXVzVW5pdFNlbGVjdG9yLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubGVmdEJvcmRlclJhZGl1c1VuaXRTZWxlY3Rvci5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJpZ2h0Qm9yZGVyU3R5bGVTZWxlY3Rvci5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5ib3R0b21Cb3JkZXJTdHlsZVNlbGVjdG9yLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmxlZnRCb3JkZXJTdHlsZVNlbGVjdG9yLmRpc2FibGVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIHRoaXMucmlnaHRCb3JkZXJDb2xvcklucHV0LmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbUJvcmRlckNvbG9ySW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubGVmdEJvcmRlckNvbG9ySW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgdGhpcy5yaWdodEJvcmRlcldpZHRoSW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tQm9yZGVyV2lkdGhJbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5sZWZ0Qm9yZGVyV2lkdGhJbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICB0aGlzLnJpZ2h0Qm9yZGVyV2lkdGhVbml0U2VsZWN0b3IuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tQm9yZGVyV2lkdGhVbml0U2VsZWN0b3IuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubGVmdEJvcmRlcldpZHRoVW5pdFNlbGVjdG9yLmRpc2FibGVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIHRoaXMucmlnaHRCb3JkZXJSYWRpdXNJbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5ib3R0b21Cb3JkZXJSYWRpdXNJbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5sZWZ0Qm9yZGVyUmFkaXVzSW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgdGhpcy5yaWdodEJvcmRlclJhZGl1c1VuaXRTZWxlY3Rvci5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5ib3R0b21Cb3JkZXJSYWRpdXNVbml0U2VsZWN0b3IuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubGVmdEJvcmRlclJhZGl1c1VuaXRTZWxlY3Rvci5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRCb3JkZXJWYWx1ZXNBY2NvcmRpbmdUb0NsYXNzKCkge1xuICAgICAgICB0aGlzLnNldEJvcmRlckNvbG9yVmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpO1xuICAgICAgICB0aGlzLnNldEJvcmRlclN0eWxlVmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpO1xuICAgICAgICB0aGlzLnNldEJvcmRlcldpZHRoVmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpO1xuICAgICAgICB0aGlzLnNldEJvcmRlclJhZGl1c1ZhbHVlc0FjY29yZGluZ1RvQ2xhc3MoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEJvcmRlckNvbG9yVmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpIHtcbiAgICAgICAgY29uc3Qge3RvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdH0gPSB0aGlzLmdldEN1cnJlbnRCb3JkZXJDb2xvcigpO1xuICAgICAgICB0aGlzLnRvcEJvcmRlckNvbG9ySW5wdXQudmFsdWUgPSB0b3A7XG4gICAgICAgIHRoaXMucmlnaHRCb3JkZXJDb2xvcklucHV0LnZhbHVlID0gcmlnaHQ7XG4gICAgICAgIHRoaXMuYm90dG9tQm9yZGVyQ29sb3JJbnB1dC52YWx1ZSA9IGJvdHRvbTtcbiAgICAgICAgdGhpcy5sZWZ0Qm9yZGVyQ29sb3JJbnB1dC52YWx1ZSA9IGxlZnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRCb3JkZXJTdHlsZVZhbHVlc0FjY29yZGluZ1RvQ2xhc3MoKSB7XG4gICAgICAgIGNvbnN0IHt0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnR9ID0gdGhpcy5nZXRDdXJyZW50Qm9yZGVyU3R5bGUoKTtcbiAgICAgICAgdGhpcy50b3BCb3JkZXJTdHlsZVNlbGVjdG9yLnZhbHVlID0gdG9wO1xuICAgICAgICB0aGlzLnJpZ2h0Qm9yZGVyU3R5bGVTZWxlY3Rvci52YWx1ZSA9IHJpZ2h0O1xuICAgICAgICB0aGlzLmJvdHRvbUJvcmRlclN0eWxlU2VsZWN0b3IudmFsdWUgPSBib3R0b207XG4gICAgICAgIHRoaXMubGVmdEJvcmRlclN0eWxlU2VsZWN0b3IudmFsdWUgPSBsZWZ0O1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0Qm9yZGVyV2lkdGhWYWx1ZXNBY2NvcmRpbmdUb0NsYXNzKCkge1xuICAgICAgICBjb25zdCB7dG9wLCByaWdodCwgYm90dG9tLCBsZWZ0fSA9IHRoaXMuZ2V0Q3VycmVudEJvcmRlcldpZHRoKCk7XG4gICAgICAgIHRoaXMudG9wQm9yZGVyV2lkdGhJbnB1dC52YWx1ZSA9IGAke3BhcnNlSW50KHRvcCl9YDtcbiAgICAgICAgdGhpcy5yaWdodEJvcmRlcldpZHRoSW5wdXQudmFsdWUgPSBgJHtwYXJzZUludChyaWdodCl9YDtcbiAgICAgICAgdGhpcy5ib3R0b21Cb3JkZXJXaWR0aElucHV0LnZhbHVlID0gYCR7cGFyc2VJbnQoYm90dG9tKX1gO1xuICAgICAgICB0aGlzLmxlZnRCb3JkZXJXaWR0aElucHV0LnZhbHVlID0gYCR7cGFyc2VJbnQobGVmdCl9YDtcblxuICAgICAgICB0aGlzLnRvcEJvcmRlcldpZHRoVW5pdFNlbGVjdG9yLnZhbHVlID0gZ2V0VW5pdCh0b3ApO1xuICAgICAgICB0aGlzLnJpZ2h0Qm9yZGVyV2lkdGhVbml0U2VsZWN0b3IudmFsdWUgPSBnZXRVbml0KHJpZ2h0KTtcbiAgICAgICAgdGhpcy5ib3R0b21Cb3JkZXJXaWR0aFVuaXRTZWxlY3Rvci52YWx1ZSA9IGdldFVuaXQoYm90dG9tKTtcbiAgICAgICAgdGhpcy5sZWZ0Qm9yZGVyV2lkdGhVbml0U2VsZWN0b3IudmFsdWUgPSBnZXRVbml0KGxlZnQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0Qm9yZGVyUmFkaXVzVmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpIHtcbiAgICAgICAgY29uc3Qge3RvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdH0gPSB0aGlzLmdldEN1cnJlbnRCb3JkZXJSYWRpdXMoKTtcbiAgICAgICAgdGhpcy50b3BCb3JkZXJSYWRpdXNJbnB1dC52YWx1ZSA9IGAke3BhcnNlSW50KHRvcCl9YDtcbiAgICAgICAgdGhpcy5yaWdodEJvcmRlclJhZGl1c0lucHV0LnZhbHVlID0gYCR7cGFyc2VJbnQocmlnaHQpfWA7XG4gICAgICAgIHRoaXMuYm90dG9tQm9yZGVyUmFkaXVzSW5wdXQudmFsdWUgPSBgJHtwYXJzZUludChib3R0b20pfWA7XG4gICAgICAgIHRoaXMubGVmdEJvcmRlclJhZGl1c0lucHV0LnZhbHVlID0gYCR7cGFyc2VJbnQobGVmdCl9YDtcblxuICAgICAgICB0aGlzLnRvcEJvcmRlclJhZGl1c1VuaXRTZWxlY3Rvci52YWx1ZSA9IGdldFVuaXQodG9wKTtcbiAgICAgICAgdGhpcy5yaWdodEJvcmRlclJhZGl1c1VuaXRTZWxlY3Rvci52YWx1ZSA9IGdldFVuaXQocmlnaHQpO1xuICAgICAgICB0aGlzLmJvdHRvbUJvcmRlclJhZGl1c1VuaXRTZWxlY3Rvci52YWx1ZSA9IGdldFVuaXQoYm90dG9tKTtcbiAgICAgICAgdGhpcy5sZWZ0Qm9yZGVyUmFkaXVzVW5pdFNlbGVjdG9yLnZhbHVlID0gZ2V0VW5pdChsZWZ0KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUJvcmRlclN0eWxlUHJvcGVydHkoKSB7XG4gICAgICAgIGxldCB7dG9wLCByaWdodCwgYm90dG9tLCBsZWZ0fSA9IHRoaXMuZ2V0Q3VycmVudEJvcmRlclN0eWxlKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0QWxsQ2hlY2tCb3guY2hlY2tlZCkge1xuICAgICAgICAgICAgdG9wID0gdGhpcy50b3BCb3JkZXJTdHlsZVNlbGVjdG9yLnZhbHVlO1xuICAgICAgICAgICAgcmlnaHQgPSB0b3A7XG4gICAgICAgICAgICBib3R0b20gPSB0b3A7XG4gICAgICAgICAgICBsZWZ0ID0gdG9wO1xuXG4gICAgICAgICAgICB0aGlzLnJpZ2h0Qm9yZGVyU3R5bGVTZWxlY3Rvci52YWx1ZSA9IHRoaXMudG9wQm9yZGVyU3R5bGVTZWxlY3Rvci52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tQm9yZGVyU3R5bGVTZWxlY3Rvci52YWx1ZSA9IHRoaXMudG9wQm9yZGVyU3R5bGVTZWxlY3Rvci52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMubGVmdEJvcmRlclN0eWxlU2VsZWN0b3IudmFsdWUgPSB0aGlzLnRvcEJvcmRlclN0eWxlU2VsZWN0b3IudmFsdWU7XG5cbiAgICAgICAgICAgIGlmKHRvcCA9PT0gQm9yZGVyU3R5bGVFbnVtLm5vbmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0Qm9yZGVyUHJvcGVydHkoJ2JvcmRlci1zdHlsZScsICdhbGwnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0Qm9yZGVyUHJvcGVydHkoJ2JvcmRlci1jb2xvcicsICdhbGwnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0Qm9yZGVyUHJvcGVydHkoJ2JvcmRlci13aWR0aCcsICdhbGwnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0Qm9yZGVyUHJvcGVydHkoJ2JvcmRlci1yYWRpdXMnLCAnYWxsJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldEJvcmRlclByb3BlcnR5KCdib3JkZXItaW1hZ2UnLCAnYWxsJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG9wID0gdGhpcy50b3BCb3JkZXJTdHlsZVNlbGVjdG9yLnZhbHVlO1xuICAgICAgICAgICAgcmlnaHQgPSB0aGlzLnJpZ2h0Qm9yZGVyU3R5bGVTZWxlY3Rvci52YWx1ZTtcbiAgICAgICAgICAgIGJvdHRvbSA9IHRoaXMuYm90dG9tQm9yZGVyU3R5bGVTZWxlY3Rvci52YWx1ZTtcbiAgICAgICAgICAgIGxlZnQgPSB0aGlzLmxlZnRCb3JkZXJTdHlsZVNlbGVjdG9yLnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYm9yZGVyLXN0eWxlJ10gPSBbdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0XS5qb2luKCcgJylcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlc2V0Qm9yZGVyUHJvcGVydHkoXG4gICAgICAgIHByb3BlcnR5OiAnYm9yZGVyLXN0eWxlJyB8ICdib3JkZXItY29sb3InIHwgJ2JvcmRlci13aWR0aCcgfCAnYm9yZGVyLXJhZGl1cycgfCAnYm9yZGVyLWltYWdlJyxcbiAgICAgICAgcG9zaXRpb246ICd0b3AnIHwgJ3JpZ2h0JyB8ICdib3R0b20nIHwgJ2xlZnQnIHwgJ2FsbCdcbiAgICApIHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBwb3NpdGlvbiA9PT0gJ2FsbCcgPyBwcm9wZXJ0eSA6IGAke3Byb3BlcnR5fS0ke3Bvc2l0aW9ufWA7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbc3R5bGVdID0gJyc7XG5cbiAgICAgICAgaWYocHJvcGVydHkgPT09ICdib3JkZXItc3R5bGUnKSB7XG4gICAgICAgICAgICB0aGlzLnNldEJvcmRlclN0eWxlVmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYocHJvcGVydHkgPT09ICdib3JkZXItY29sb3InKSB7XG4gICAgICAgICAgICB0aGlzLnNldEJvcmRlckNvbG9yVmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYocHJvcGVydHkgPT09ICdib3JkZXItd2lkdGgnKSB7XG4gICAgICAgICAgICB0aGlzLnNldEJvcmRlcldpZHRoVmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYocHJvcGVydHkgPT09ICdib3JkZXItcmFkaXVzJykge1xuICAgICAgICAgICAgdGhpcy5zZXRCb3JkZXJSYWRpdXNWYWx1ZXNBY2NvcmRpbmdUb0NsYXNzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUJvcmRlckNvbG9yKCkge1xuICAgICAgICBsZXQge3RvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdH0gPSB0aGlzLmdldEN1cnJlbnRCb3JkZXJDb2xvcigpO1xuXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdEFsbENoZWNrQm94LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIHRvcCA9IHRoaXMudG9wQm9yZGVyQ29sb3JJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIHJpZ2h0ID0gdG9wO1xuICAgICAgICAgICAgYm90dG9tID0gdG9wO1xuICAgICAgICAgICAgbGVmdCA9IHRvcDtcblxuICAgICAgICAgICAgdGhpcy5yaWdodEJvcmRlckNvbG9ySW5wdXQudmFsdWUgPSB0aGlzLnRvcEJvcmRlckNvbG9ySW5wdXQudmFsdWU7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbUJvcmRlckNvbG9ySW5wdXQudmFsdWUgPSB0aGlzLnRvcEJvcmRlckNvbG9ySW5wdXQudmFsdWU7XG4gICAgICAgICAgICB0aGlzLmxlZnRCb3JkZXJDb2xvcklucHV0LnZhbHVlID0gdGhpcy50b3BCb3JkZXJDb2xvcklucHV0LnZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG9wID0gdGhpcy50b3BCb3JkZXJDb2xvcklucHV0LnZhbHVlO1xuICAgICAgICAgICAgcmlnaHQgPSB0aGlzLnJpZ2h0Qm9yZGVyQ29sb3JJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIGJvdHRvbSA9IHRoaXMuYm90dG9tQm9yZGVyQ29sb3JJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIGxlZnQgPSB0aGlzLmxlZnRCb3JkZXJDb2xvcklucHV0LnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYm9yZGVyLWNvbG9yJ10gPSBbdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0XS5qb2luKCcgJylcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUJvcmRlcldpZHRoKCkge1xuICAgICAgICBsZXQge3RvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdH0gPSB0aGlzLmdldEN1cnJlbnRCb3JkZXJXaWR0aCgpO1xuXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdEFsbENoZWNrQm94LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGlmKHBhcnNlSW50KHRoaXMudG9wQm9yZGVyV2lkdGhJbnB1dC52YWx1ZSkgPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0Qm9yZGVyUHJvcGVydHkoJ2JvcmRlci13aWR0aCcsICdhbGwnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRvcCA9IGAke3RoaXMudG9wQm9yZGVyV2lkdGhJbnB1dC52YWx1ZX0ke3RoaXMudG9wQm9yZGVyV2lkdGhVbml0U2VsZWN0b3IudmFsdWV9YDtcbiAgICAgICAgICAgIHJpZ2h0ID0gdG9wO1xuICAgICAgICAgICAgYm90dG9tID0gdG9wO1xuICAgICAgICAgICAgbGVmdCA9IHRvcDtcblxuICAgICAgICAgICAgdGhpcy5yaWdodEJvcmRlcldpZHRoSW5wdXQudmFsdWUgPSB0aGlzLnRvcEJvcmRlcldpZHRoSW5wdXQudmFsdWU7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbUJvcmRlcldpZHRoSW5wdXQudmFsdWUgPSB0aGlzLnRvcEJvcmRlcldpZHRoSW5wdXQudmFsdWU7XG4gICAgICAgICAgICB0aGlzLmxlZnRCb3JkZXJXaWR0aElucHV0LnZhbHVlID0gdGhpcy50b3BCb3JkZXJXaWR0aElucHV0LnZhbHVlO1xuXG4gICAgICAgICAgICB0aGlzLnJpZ2h0Qm9yZGVyV2lkdGhVbml0U2VsZWN0b3IudmFsdWUgPSB0aGlzLnRvcEJvcmRlcldpZHRoVW5pdFNlbGVjdG9yLnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ib3R0b21Cb3JkZXJXaWR0aFVuaXRTZWxlY3Rvci52YWx1ZSA9IHRoaXMudG9wQm9yZGVyV2lkdGhVbml0U2VsZWN0b3IudmFsdWU7XG4gICAgICAgICAgICB0aGlzLmxlZnRCb3JkZXJXaWR0aFVuaXRTZWxlY3Rvci52YWx1ZSA9IHRoaXMudG9wQm9yZGVyV2lkdGhVbml0U2VsZWN0b3IudmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0b3AgPSBgJHt0aGlzLnRvcEJvcmRlcldpZHRoSW5wdXQudmFsdWV9JHt0aGlzLnRvcEJvcmRlcldpZHRoVW5pdFNlbGVjdG9yLnZhbHVlfWA7XG4gICAgICAgICAgICByaWdodCA9IGAke3RoaXMucmlnaHRCb3JkZXJXaWR0aElucHV0LnZhbHVlfSR7dGhpcy5yaWdodEJvcmRlcldpZHRoVW5pdFNlbGVjdG9yLnZhbHVlfWA7XG4gICAgICAgICAgICBib3R0b20gPSBgJHt0aGlzLmJvdHRvbUJvcmRlcldpZHRoSW5wdXQudmFsdWV9JHt0aGlzLmJvdHRvbUJvcmRlcldpZHRoVW5pdFNlbGVjdG9yLnZhbHVlfWA7XG4gICAgICAgICAgICBsZWZ0ID0gYCR7dGhpcy5sZWZ0Qm9yZGVyV2lkdGhJbnB1dC52YWx1ZX0ke3RoaXMubGVmdEJvcmRlcldpZHRoVW5pdFNlbGVjdG9yLnZhbHVlfWA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYm9yZGVyLXdpZHRoJ10gPSBbdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0XS5qb2luKCcgJylcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUJvcmRlclJhZGl1cygpIHtcbiAgICAgICAgbGV0IHt0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnR9ID0gdGhpcy5nZXRDdXJyZW50Qm9yZGVyUmFkaXVzKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0QWxsQ2hlY2tCb3guY2hlY2tlZCkge1xuICAgICAgICAgICAgaWYocGFyc2VJbnQodGhpcy50b3BCb3JkZXJSYWRpdXNJbnB1dC52YWx1ZSkgPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0Qm9yZGVyUHJvcGVydHkoJ2JvcmRlci1yYWRpdXMnLCAnYWxsJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0b3AgPSBgJHt0aGlzLnRvcEJvcmRlclJhZGl1c0lucHV0LnZhbHVlfSR7dGhpcy50b3BCb3JkZXJSYWRpdXNVbml0U2VsZWN0b3IudmFsdWV9YDtcbiAgICAgICAgICAgIHJpZ2h0ID0gdG9wO1xuICAgICAgICAgICAgYm90dG9tID0gdG9wO1xuICAgICAgICAgICAgbGVmdCA9IHRvcDtcblxuICAgICAgICAgICAgdGhpcy5yaWdodEJvcmRlclJhZGl1c0lucHV0LnZhbHVlID0gdGhpcy50b3BCb3JkZXJSYWRpdXNJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tQm9yZGVyUmFkaXVzSW5wdXQudmFsdWUgPSB0aGlzLnRvcEJvcmRlclJhZGl1c0lucHV0LnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5sZWZ0Qm9yZGVyUmFkaXVzSW5wdXQudmFsdWUgPSB0aGlzLnRvcEJvcmRlclJhZGl1c0lucHV0LnZhbHVlO1xuXG4gICAgICAgICAgICB0aGlzLnJpZ2h0Qm9yZGVyUmFkaXVzVW5pdFNlbGVjdG9yLnZhbHVlID0gdGhpcy50b3BCb3JkZXJSYWRpdXNVbml0U2VsZWN0b3IudmFsdWU7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbUJvcmRlclJhZGl1c1VuaXRTZWxlY3Rvci52YWx1ZSA9IHRoaXMudG9wQm9yZGVyUmFkaXVzVW5pdFNlbGVjdG9yLnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5sZWZ0Qm9yZGVyUmFkaXVzVW5pdFNlbGVjdG9yLnZhbHVlID0gdGhpcy50b3BCb3JkZXJSYWRpdXNVbml0U2VsZWN0b3IudmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0b3AgPSBgJHt0aGlzLnRvcEJvcmRlclJhZGl1c0lucHV0LnZhbHVlfSR7dGhpcy50b3BCb3JkZXJSYWRpdXNVbml0U2VsZWN0b3IudmFsdWV9YDtcbiAgICAgICAgICAgIHJpZ2h0ID0gYCR7dGhpcy5yaWdodEJvcmRlclJhZGl1c0lucHV0LnZhbHVlfSR7dGhpcy5yaWdodEJvcmRlclJhZGl1c1VuaXRTZWxlY3Rvci52YWx1ZX1gO1xuICAgICAgICAgICAgYm90dG9tID0gYCR7dGhpcy5ib3R0b21Cb3JkZXJSYWRpdXNJbnB1dC52YWx1ZX0ke3RoaXMuYm90dG9tQm9yZGVyUmFkaXVzVW5pdFNlbGVjdG9yLnZhbHVlfWA7XG4gICAgICAgICAgICBsZWZ0ID0gYCR7dGhpcy5sZWZ0Qm9yZGVyUmFkaXVzSW5wdXQudmFsdWV9JHt0aGlzLmxlZnRCb3JkZXJSYWRpdXNVbml0U2VsZWN0b3IudmFsdWV9YDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydib3JkZXItcmFkaXVzJ10gPSBbdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0XS5qb2luKCcgJylcbiAgICB9XG5cbiAgICBwcml2YXRlIHVuaWZpZWRCb3JkZXJQcm9wZXJ0aWVzKCkgOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgYWxsRXF1YWwgPSBbXTtcbiAgICAgICAgYWxsRXF1YWwucHVzaCh0aGlzLmdldEN1cnJlbnRCb3JkZXJTdHlsZSgpLmFsbEVxdWFsKVxuICAgICAgICBhbGxFcXVhbC5wdXNoKHRoaXMuZ2V0Q3VycmVudEJvcmRlckNvbG9yKCkuYWxsRXF1YWwpXG4gICAgICAgIGFsbEVxdWFsLnB1c2godGhpcy5nZXRDdXJyZW50Qm9yZGVyUmFkaXVzKCkuYWxsRXF1YWwpXG4gICAgICAgIGFsbEVxdWFsLnB1c2godGhpcy5nZXRDdXJyZW50Qm9yZGVyU3R5bGUoKS5hbGxFcXVhbClcbiAgICAgICAgYWxsRXF1YWwucHVzaCh0aGlzLmdldEN1cnJlbnRCb3JkZXJXaWR0aCgpLmFsbEVxdWFsKVxuXG4gICAgICAgIGlmKGFsbEVxdWFsLmZpbmQoKGVsKSA9PiBlbCA9PT0gZmFsc2UpID09PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0Q3VycmVudEJvcmRlclN0eWxlKCk6IFN0eWxlc1JldHVybk9iamVjdEludGVyZmFjZSB7XG4gICAgICAgIGNvbnN0IHRvcCA9IHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2JvcmRlci10b3Atc3R5bGUnXTtcbiAgICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydib3JkZXItcmlnaHQtc3R5bGUnXTtcbiAgICAgICAgY29uc3QgYm90dG9tID0gdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYm9yZGVyLWJvdHRvbS1zdHlsZSddO1xuICAgICAgICBjb25zdCBsZWZ0ID0gdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYm9yZGVyLWxlZnQtc3R5bGUnXTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdG9wOiB0b3AgPyB0b3AgOiAnbm9uZScsXG4gICAgICAgICAgICByaWdodDogcmlnaHQgPyByaWdodCA6ICdub25lJyxcbiAgICAgICAgICAgIGJvdHRvbTogYm90dG9tID8gYm90dG9tIDogJ25vbmUnLFxuICAgICAgICAgICAgbGVmdDogbGVmdCA/IGxlZnQgOiAnbm9uZScsXG4gICAgICAgICAgICBhbGxFcXVhbDogdG9wID09PSByaWdodCAmJiB0b3AgPT09IGJvdHRvbSAmJiB0b3AgPT09IGxlZnQsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRDdXJyZW50Qm9yZGVyQ29sb3IoKTogU3R5bGVzUmV0dXJuT2JqZWN0SW50ZXJmYWNlIHtcbiAgICAgICAgY29uc3QgdG9wID0gdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYm9yZGVyLXRvcC1jb2xvciddO1xuICAgICAgICBjb25zdCByaWdodCA9IHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2JvcmRlci1yaWdodC1jb2xvciddO1xuICAgICAgICBjb25zdCBib3R0b20gPSB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydib3JkZXItYm90dG9tLWNvbG9yJ107XG4gICAgICAgIGNvbnN0IGxlZnQgPSB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydib3JkZXItbGVmdC1jb2xvciddO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0b3A6IGNvbG9yVG9IZXgodG9wKSxcbiAgICAgICAgICAgIHJpZ2h0OiBjb2xvclRvSGV4KHJpZ2h0KSxcbiAgICAgICAgICAgIGJvdHRvbTogY29sb3JUb0hleChib3R0b20pLFxuICAgICAgICAgICAgbGVmdDogY29sb3JUb0hleChsZWZ0KSxcbiAgICAgICAgICAgIGFsbEVxdWFsOiB0b3AgPT09IHJpZ2h0ICYmIHRvcCA9PT0gYm90dG9tICYmIHRvcCA9PT0gbGVmdCxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEN1cnJlbnRCb3JkZXJXaWR0aCgpOiBTdHlsZXNSZXR1cm5PYmplY3RJbnRlcmZhY2Uge1xuICAgICAgICBjb25zdCB0b3AgPSB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydib3JkZXItdG9wLXdpZHRoJ107XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYm9yZGVyLXJpZ2h0LXdpZHRoJ107XG4gICAgICAgIGNvbnN0IGJvdHRvbSA9IHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2JvcmRlci1ib3R0b20td2lkdGgnXTtcbiAgICAgICAgY29uc3QgbGVmdCA9IHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2JvcmRlci1sZWZ0LXdpZHRoJ107XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRvcDogdG9wID8gdG9wIDogJzBweCcsXG4gICAgICAgICAgICByaWdodDogcmlnaHQgPyByaWdodCA6ICcwcHgnLFxuICAgICAgICAgICAgYm90dG9tOiBib3R0b20gPyBib3R0b20gOiAnMHB4JyxcbiAgICAgICAgICAgIGxlZnQ6IGxlZnQgPyBsZWZ0IDogJzBweCcsXG4gICAgICAgICAgICBhbGxFcXVhbDogdG9wID09PSByaWdodCAmJiB0b3AgPT09IGJvdHRvbSAmJiB0b3AgPT09IGxlZnQsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRDdXJyZW50Qm9yZGVyUmFkaXVzKCk6IFN0eWxlc1JldHVybk9iamVjdEludGVyZmFjZSB7XG4gICAgICAgIGNvbnN0IHRvcCA9IHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2JvcmRlci10b3AtbGVmdC1yYWRpdXMnXTtcbiAgICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydib3JkZXItdG9wLXJpZ2h0LXJhZGl1cyddO1xuICAgICAgICBjb25zdCBib3R0b20gPSB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cyddO1xuICAgICAgICBjb25zdCBsZWZ0ID0gdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cyddO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0b3A6IHRvcCA/IHRvcCA6ICcwcHgnLFxuICAgICAgICAgICAgcmlnaHQ6IHJpZ2h0ID8gcmlnaHQgOiAnMHB4JyxcbiAgICAgICAgICAgIGJvdHRvbTogYm90dG9tID8gYm90dG9tIDogJzBweCcsXG4gICAgICAgICAgICBsZWZ0OiBsZWZ0ID8gbGVmdCA6ICcwcHgnLFxuICAgICAgICAgICAgYWxsRXF1YWw6IHRvcCA9PT0gcmlnaHQgJiYgdG9wID09PSBib3R0b20gJiYgdG9wID09PSBsZWZ0LFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGFzc05hbWVVcGRhdGVkKG5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0ID0gQ3NzU3R5bGVTaGVldC5nZXRSdWxlU3R5bGVzKG5hbWUpO1xuICAgICAgICB0aGlzLnNlbGVjdEFsbENoZWNrQm94LmNoZWNrZWQgPSB0aGlzLnVuaWZpZWRCb3JkZXJQcm9wZXJ0aWVzKCk7XG4gICAgICAgIHRoaXMuY2hhbmdlQ29tcG9uZW50c1N0YXR1cygpO1xuICAgICAgICB0aGlzLnNldEJvcmRlclZhbHVlc0FjY29yZGluZ1RvQ2xhc3MoKTtcbiAgICB9XG59XG5cbmludGVyZmFjZSBTdHlsZXNSZXR1cm5PYmplY3RJbnRlcmZhY2Uge1xuICAgIHRvcDogc3RyaW5nLFxuICAgIHJpZ2h0OiBzdHJpbmcsXG4gICAgYm90dG9tOiBzdHJpbmcsXG4gICAgbGVmdDogc3RyaW5nLFxuICAgIGFsbEVxdWFsOiBib29sZWFuLFxufVxuIiwiaW1wb3J0IENsYXNzQ2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2UgZnJvbSAnLi4vaW50ZXJmYWNlcy9jbGFzcy1jaGFuZ2Utb2JzZXJ2ZXIuaW50ZXJmYWNlJztcblxuaW1wb3J0IENvbnRhaW5lckJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0NvbnRhaW5lckJ1aWxkZXInO1xuaW1wb3J0IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyIGZyb20gJy4uL21vZGVscy9TZWxlY3RvckZyb21FbnVtQnVpbGRlcic7XG5pbXBvcnQgTGFiZWxCdWlsZGVyIGZyb20gJy4uL21vZGVscy9MYWJlbEJ1aWxkZXInO1xuaW1wb3J0IElucHV0QnVpbGRlciBmcm9tICcuLi9tb2RlbHMvSW5wdXRCdWlsZGVyJztcblxuaW1wb3J0IENzc1N0eWxlU2hlZXQgZnJvbSAnLi4vLi4vY3NzLXN0eWxlc2hlZXQvY3NzLXN0eWxlc2hlZXQnO1xuaW1wb3J0IGdldFVuaXQgZnJvbSAnLi4vZnVuY3Rpb25zL2dldC1jc3MtdW5pdCc7XG5pbXBvcnQgY29sb3JUb0hleCBmcm9tICcuLi9mdW5jdGlvbnMvcmdiLXRvLWhleCc7XG5pbXBvcnQgVGV4dGFyZWFCdWlsZGVyIGZyb20gJy4uL21vZGVscy9UZXh0QXJlYUJ1aWxkZXInO1xuXG5pbXBvcnQgeyBTdHlsZU5hbWVFbnVtIH0gZnJvbSAnLi4vZW51bXMvc3R5bGUtbmFtZS5lbnVtJztcbmltcG9ydCB7IElucHV0VHlwZUVudW0gfSBmcm9tICcuLi9lbnVtcy9pbnB1dC10eXBlLmVudW0nO1xuaW1wb3J0IHsgVW5pdHNFbnVtIH0gZnJvbSAnLi4vZW51bXMvdW5pdHMuZW51bSc7XG5pbXBvcnQgeyBBbGlnbkZsZXhJdGVtc0VudW0gfSBmcm9tICcuLi9lbnVtcy9hbGlnbi1mbGV4LWl0ZW1zLmVudW0nO1xuaW1wb3J0IHsgRmxleERpcmVjdGlvbkVudW0gfSBmcm9tICcuLi9lbnVtcy9mbGV4LWRpcmVjdGlvbi5lbnVtJztcbmltcG9ydCB7IERpc3BsYXlUeXBlc0VudW0gfSBmcm9tICcuLi9lbnVtcy9kaXNwbGF5LXR5cGVzLmVudW0nO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJveFNoYWRvd0NvbXBvbmVudCBpbXBsZW1lbnRzIENsYXNzQ2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2Uge1xuICAgIHByaXZhdGUgZG9tRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBjb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgY29tcG9uZW50c0NvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBzaGFkb3dCb3hUeXBlQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcbiAgICBwcml2YXRlIGRvbUVsZW1lbnRTdHlsZVNoZWV0OiBDU1NTdHlsZURlY2xhcmF0aW9uO1xuXG4gICAgcHJpdmF0ZSBzaW1wbGVCb3hTaGFkb3dDaGVja2JveDogSFRNTElucHV0RWxlbWVudDtcbiAgICBwcml2YXRlIGFkdmFuY2VkQm94U2hhZG93Q2hlY2tib3g6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIGNvbG9ySW5zZXRDb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgY29sb3JJbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgICBwcml2YXRlIGluc2V0U2VsZWN0b3I6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIGhvcml6b250YWxPZmZzZXRDb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgaG9yaXpvbnRhbE9mZnNldElucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHByaXZhdGUgaG9yaXpvbnRhbE9mZnNldFVuaXRTZWxlY3RvcjogSFRNTFNlbGVjdEVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIHZlcnRpY2FsT2Zmc2V0Q29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcbiAgICBwcml2YXRlIHZlcnRpY2FsT2Zmc2V0SW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSB2ZXJ0aWNhbE9mZnNldFVuaXRTZWxlY3RvcjogSFRNTFNlbGVjdEVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIGJsdXJSYWRpdXNDb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgYmx1clJhZGl1c0lucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHByaXZhdGUgYmx1clJhZGl1c1VuaXRTZWxlY3RvcjogSFRNTFNlbGVjdEVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIHNwcmVhZFJhZGl1c0NvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBzcHJlYWRSYWRpdXNJbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgICBwcml2YXRlIHNwcmVhZFJhZGl1c1VuaXRTZWxlY3RvcjogSFRNTFNlbGVjdEVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIGFkdmFuY2VkRW5hYmxlZCA9IGZhbHNlO1xuXG4gICAgcHJpdmF0ZSBhZHZhbmNlZFNoYWRvd0JveFRleHRBcmVhOiBIVE1MVGV4dEFyZWFFbGVtZW50O1xuICAgIHByaXZhdGUgYWR2YW5jZWRTaGFkb3dCb3hDb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihkb21FbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0ID0gQ3NzU3R5bGVTaGVldC5nZXRSdWxlU3R5bGVzKHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3RbMF0pO1xuICAgICAgICB0aGlzLmdldEluaXRpYWxWYWx1ZXMoKTtcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnRzKCk7XG4gICAgICAgIHRoaXMuc2V0Qm94U2hhZG93VmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpO1xuICAgIH1cblxuICAgIGdldCBjb21wb25lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZENvbXBvbmVudHMoKSB7XG4gICAgICAgIHRoaXMuYnVpbGRTaGFkb3dCb3hUeXBlQ29udGFpbmVyKCk7XG4gICAgICAgIHRoaXMuYnVpbGRCYXNpY1NoYWRvd0JveENvbnRhaW5lcnMoKTtcbiAgICAgICAgdGhpcy5idWlsZEFkdmFuY2VkU2hhZG93Qm94Q29udGFpbmVyKCk7XG4gICAgICAgIHRoaXMuYnVpbGRDb21wb25lbnRzQ29udGFpbmVyKCk7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5jb21wb25lbnRzQ29udGFpbmVyKVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBidWlsZFNoYWRvd0JveFR5cGVDb250YWluZXIoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlQm94U2hhZG93VHlwZSA9IHRoaXMudXBkYXRlQm94U2hhZG93VHlwZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuc2ltcGxlQm94U2hhZG93Q2hlY2tib3ggPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0ucmFkaW8pXG4gICAgICAgICAgICAuc2V0TmFtZSgnc2hhZG93VHlwZScpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVCb3hTaGFkb3dUeXBlKVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICB0aGlzLmFkdmFuY2VkQm94U2hhZG93Q2hlY2tib3ggPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0ucmFkaW8pXG4gICAgICAgICAgICAuc2V0TmFtZSgnc2hhZG93VHlwZScpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVCb3hTaGFkb3dUeXBlKVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICBpZiAodGhpcy5hZHZhbmNlZEVuYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZWRCb3hTaGFkb3dDaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2ltcGxlQm94U2hhZG93Q2hlY2tib3guY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNoYWRvd0JveFR5cGVDb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnZmxleC1kaXJlY3Rpb24nXSwgRmxleERpcmVjdGlvbkVudW0uY29sdW1uKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW1bJ2FsaWduLWl0ZW1zJ10sIEFsaWduRmxleEl0ZW1zRW51bS5zdHJldGNoKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdTaW1wbGUgb3IgQWR2YW5jZWQgU2hhZG93IEJveCcpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdTaW1wbGUgLT4nKVxuICAgICAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggM3B4IDBweCAyMHB4JylcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuc2ltcGxlQm94U2hhZG93Q2hlY2tib3gpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdBZHZhbmNlZCAtPicpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAzcHggMHB4IDIwcHgnKVxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5hZHZhbmNlZEJveFNoYWRvd0NoZWNrYm94KVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgIH1cblxuICAgIHByaXZhdGUgYnVpbGRCYXNpY1NoYWRvd0JveENvbnRhaW5lcnMoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlQmFzaWNQcm9wZXJ0eSA9IHRoaXMudXBkYXRlQmFzaWNQcm9wZXJ0eS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuY29sb3JJbnB1dCA9IG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS5jb2xvcilcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMudXBkYXRlQmFzaWNQcm9wZXJ0eSlcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgdGhpcy5pbnNldFNlbGVjdG9yID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLmNoZWNrYm94KVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy51cGRhdGVCYXNpY1Byb3BlcnR5KVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICB0aGlzLmhvcml6b250YWxPZmZzZXRJbnB1dCA9IG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS5udW1iZXIpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLnVwZGF0ZUJhc2ljUHJvcGVydHkpXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIHRoaXMuaG9yaXpvbnRhbE9mZnNldFVuaXRTZWxlY3RvciA9IG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihVbml0c0VudW0pXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVCYXNpY1Byb3BlcnR5KVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICB0aGlzLnZlcnRpY2FsT2Zmc2V0SW5wdXQgPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0ubnVtYmVyKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy51cGRhdGVCYXNpY1Byb3BlcnR5KVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICB0aGlzLnZlcnRpY2FsT2Zmc2V0VW5pdFNlbGVjdG9yID0gbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKFVuaXRzRW51bSlcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnVwZGF0ZUJhc2ljUHJvcGVydHkpXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIHRoaXMuYmx1clJhZGl1c0lucHV0ID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLm51bWJlcilcbiAgICAgICAgICAgIC5zZXRNaW4oMClcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMudXBkYXRlQmFzaWNQcm9wZXJ0eSlcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgdGhpcy5ibHVyUmFkaXVzVW5pdFNlbGVjdG9yID0gbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKFVuaXRzRW51bSlcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnVwZGF0ZUJhc2ljUHJvcGVydHkpXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIHRoaXMuc3ByZWFkUmFkaXVzSW5wdXQgPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0ubnVtYmVyKVxuICAgICAgICAgICAgLnNldE1pbigwKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy51cGRhdGVCYXNpY1Byb3BlcnR5KVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICB0aGlzLnNwcmVhZFJhZGl1c1VuaXRTZWxlY3RvciA9IG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihVbml0c0VudW0pXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVCYXNpY1Byb3BlcnR5KVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICB0aGlzLmNvbG9ySW5zZXRDb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnZmxleC1kaXJlY3Rpb24nXSwgRmxleERpcmVjdGlvbkVudW0uY29sdW1uKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW1bJ2FsaWduLWl0ZW1zJ10sIEFsaWduRmxleEl0ZW1zRW51bS5zdHJldGNoKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdIb3Jpem9udGFsIE9mZnNldCcpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuY29sb3JJbnB1dClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0luc2V0IC0+JylcbiAgICAgICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDNweCAwcHggMjBweCcpXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmluc2V0U2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgdGhpcy5ob3Jpem9udGFsT2Zmc2V0Q29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW1bJ2ZsZXgtZGlyZWN0aW9uJ10sIEZsZXhEaXJlY3Rpb25FbnVtLmNvbHVtbilcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydhbGlnbi1pdGVtcyddLCBBbGlnbkZsZXhJdGVtc0VudW0uc3RyZXRjaClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnSG9yaXpvbnRhbCBPZmZzZXQnKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmhvcml6b250YWxPZmZzZXRJbnB1dClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5ob3Jpem9udGFsT2Zmc2V0VW5pdFNlbGVjdG9yKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIHRoaXMudmVydGljYWxPZmZzZXRDb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnZmxleC1kaXJlY3Rpb24nXSwgRmxleERpcmVjdGlvbkVudW0uY29sdW1uKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW1bJ2FsaWduLWl0ZW1zJ10sIEFsaWduRmxleEl0ZW1zRW51bS5zdHJldGNoKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdWZXJ0aWNhbCBPZmZzZXQnKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLnZlcnRpY2FsT2Zmc2V0SW5wdXQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMudmVydGljYWxPZmZzZXRVbml0U2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgdGhpcy5ibHVyUmFkaXVzQ29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW1bJ2ZsZXgtZGlyZWN0aW9uJ10sIEZsZXhEaXJlY3Rpb25FbnVtLmNvbHVtbilcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydhbGlnbi1pdGVtcyddLCBBbGlnbkZsZXhJdGVtc0VudW0uc3RyZXRjaClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnQmx1ciBSYWRpdXMnKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmJsdXJSYWRpdXNJbnB1dClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5ibHVyUmFkaXVzVW5pdFNlbGVjdG9yKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIHRoaXMuc3ByZWFkUmFkaXVzQ29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW1bJ2ZsZXgtZGlyZWN0aW9uJ10sIEZsZXhEaXJlY3Rpb25FbnVtLmNvbHVtbilcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydhbGlnbi1pdGVtcyddLCBBbGlnbkZsZXhJdGVtc0VudW0uc3RyZXRjaClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnU3ByZWFkIFJhZGl1cycpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuc3ByZWFkUmFkaXVzSW5wdXQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuc3ByZWFkUmFkaXVzVW5pdFNlbGVjdG9yKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgIH1cblxuICAgIHByaXZhdGUgYnVpbGRDb21wb25lbnRzQ29udGFpbmVyKCkge1xuICAgICAgICBpZiAodGhpcy5hZHZhbmNlZEVuYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c0NvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW1bJ2ZsZXgtZGlyZWN0aW9uJ10sIEZsZXhEaXJlY3Rpb25FbnVtLmNvbHVtbilcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnYWxpZ24taXRlbXMnXSwgQWxpZ25GbGV4SXRlbXNFbnVtLnN0cmV0Y2gpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uYm9yZGVyLCAnMXB4IHNvbGlkICM0Q0FGNTAnKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLnBhZGRpbmcsICczcHgnKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdCb3ggU2hhZG93JylcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuc2hhZG93Qm94VHlwZUNvbnRhaW5lcilcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5hZHZhbmNlZFNoYWRvd0JveENvbnRhaW5lcilcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzQ29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnZmxleC1kaXJlY3Rpb24nXSwgRmxleERpcmVjdGlvbkVudW0uY29sdW1uKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydhbGlnbi1pdGVtcyddLCBBbGlnbkZsZXhJdGVtc0VudW0uc3RyZXRjaClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5ib3JkZXIsICcxcHggc29saWQgIzRDQUY1MCcpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ucGFkZGluZywgJzNweCcpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0JveCBTaGFkb3cnKVxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5zaGFkb3dCb3hUeXBlQ29udGFpbmVyKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmNvbG9ySW5zZXRDb250YWluZXIpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuaG9yaXpvbnRhbE9mZnNldENvbnRhaW5lcilcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy52ZXJ0aWNhbE9mZnNldENvbnRhaW5lcilcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5ibHVyUmFkaXVzQ29udGFpbmVyKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLnNwcmVhZFJhZGl1c0NvbnRhaW5lcilcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBidWlsZEFkdmFuY2VkU2hhZG93Qm94Q29udGFpbmVyKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZUFkdmFuY2VkUHJvcGVydHkgPSB0aGlzLnVwZGF0ZUFkdmFuY2VkUHJvcGVydHkuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmFkdmFuY2VkU2hhZG93Qm94VGV4dEFyZWEgPSBuZXcgVGV4dGFyZWFCdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLnJlc2l6ZSwgJ3ZlcnRpY2FsJylcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMudXBkYXRlQWR2YW5jZWRQcm9wZXJ0eSlcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgdGhpcy5hZHZhbmNlZFNoYWRvd0JveENvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydmbGV4LWRpcmVjdGlvbiddLCBGbGV4RGlyZWN0aW9uRW51bS5jb2x1bW4pXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnYWxpZ24taXRlbXMnXSwgQWxpZ25GbGV4SXRlbXNFbnVtLnN0cmV0Y2gpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0FkdmFuY2VkIEJveCBTaGFkb3cnKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnZmxleC1kaXJlY3Rpb24nXSwgRmxleERpcmVjdGlvbkVudW0uY29sdW1uKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydhbGlnbi1pdGVtcyddLCBBbGlnbkZsZXhJdGVtc0VudW0uc3RyZXRjaClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5hZHZhbmNlZFNoYWRvd0JveFRleHRBcmVhKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgIH1cblxuICAgIHByaXZhdGUgc2V0Qm94U2hhZG93VmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpIHtcbiAgICAgICAgY29uc3QgaW5pdGlhbFZhbHVlcyA9IHRoaXMuZ2V0SW5pdGlhbFZhbHVlcygpO1xuXG4gICAgICAgIGlmIChpbml0aWFsVmFsdWVzLmluc2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zZXRTZWxlY3Rvci5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29sb3JJbnB1dC52YWx1ZSA9IGNvbG9yVG9IZXgoaW5pdGlhbFZhbHVlcy5jb2xvcik7XG4gICAgICAgIHRoaXMuaG9yaXpvbnRhbE9mZnNldElucHV0LnZhbHVlID0gYCR7cGFyc2VJbnQoaW5pdGlhbFZhbHVlcy5ob3Jpem9udGFsT2Zmc2V0KSB8fCAwfWA7XG4gICAgICAgIHRoaXMuaG9yaXpvbnRhbE9mZnNldFVuaXRTZWxlY3Rvci52YWx1ZSA9IGdldFVuaXQoaW5pdGlhbFZhbHVlcy5ob3Jpem9udGFsT2Zmc2V0KTtcbiAgICAgICAgdGhpcy52ZXJ0aWNhbE9mZnNldElucHV0LnZhbHVlID0gYCR7cGFyc2VJbnQoaW5pdGlhbFZhbHVlcy52ZXJ0aWNhbE9mZnNldCkgfHwgMH1gO1xuICAgICAgICB0aGlzLnZlcnRpY2FsT2Zmc2V0VW5pdFNlbGVjdG9yLnZhbHVlID0gZ2V0VW5pdChpbml0aWFsVmFsdWVzLnZlcnRpY2FsT2Zmc2V0KTtcbiAgICAgICAgdGhpcy5ibHVyUmFkaXVzSW5wdXQudmFsdWUgPSBgJHtwYXJzZUludChpbml0aWFsVmFsdWVzLmJsdXJSYWRpdXMpIHx8IDB9YDtcbiAgICAgICAgdGhpcy5ibHVyUmFkaXVzVW5pdFNlbGVjdG9yLnZhbHVlID0gZ2V0VW5pdChpbml0aWFsVmFsdWVzLmJsdXJSYWRpdXMpO1xuICAgICAgICB0aGlzLnNwcmVhZFJhZGl1c0lucHV0LnZhbHVlID0gYCR7cGFyc2VJbnQoaW5pdGlhbFZhbHVlcy5zcHJlYWRSYWRpdXMpIHx8IDB9YDtcbiAgICAgICAgdGhpcy5zcHJlYWRSYWRpdXNVbml0U2VsZWN0b3IudmFsdWUgPSBnZXRVbml0KGluaXRpYWxWYWx1ZXMuc3ByZWFkUmFkaXVzKTtcblxuICAgICAgICB0aGlzLmFkdmFuY2VkU2hhZG93Qm94VGV4dEFyZWEudmFsdWUgPSB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydib3gtc2hhZG93J107XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVCYXNpY1Byb3BlcnR5KCkge1xuICAgICAgICBpZiAodGhpcy5ob3Jpem9udGFsT2Zmc2V0SW5wdXQudmFsdWUgPT09ICcwJ1xuICAgICAgICAgICAgJiYgdGhpcy52ZXJ0aWNhbE9mZnNldElucHV0LnZhbHVlID09PSAnMCdcbiAgICAgICAgICAgICYmIHRoaXMuYmx1clJhZGl1c0lucHV0LnZhbHVlID09PSAnMCdcbiAgICAgICAgICAgICYmIHRoaXMuc3ByZWFkUmFkaXVzSW5wdXQudmFsdWUgPT09ICcwJ1xuICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2JveC1zaGFkb3cnXSA9ICcnO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaW5zZXQgPSB0aGlzLmluc2V0U2VsZWN0b3IuY2hlY2tlZCA/ICdpbnNldCcgOiAnJztcbiAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmNvbG9ySW5wdXQudmFsdWU7XG4gICAgICAgIGNvbnN0IGhvcml6b250YWxPZmZzZXQgPSB0aGlzLmhvcml6b250YWxPZmZzZXRJbnB1dC52YWx1ZSArIHRoaXMuaG9yaXpvbnRhbE9mZnNldFVuaXRTZWxlY3Rvci52YWx1ZTtcbiAgICAgICAgY29uc3QgdmVydGljYWxPZmZzZXQgPSB0aGlzLnZlcnRpY2FsT2Zmc2V0SW5wdXQudmFsdWUgKyB0aGlzLnZlcnRpY2FsT2Zmc2V0VW5pdFNlbGVjdG9yLnZhbHVlO1xuICAgICAgICBjb25zdCBibHVyUmFkaXVzID0gdGhpcy5ibHVyUmFkaXVzSW5wdXQudmFsdWUgKyB0aGlzLmJsdXJSYWRpdXNVbml0U2VsZWN0b3IudmFsdWU7XG4gICAgICAgIGNvbnN0IHNwcmVhZFJhZGl1cyA9IHRoaXMuc3ByZWFkUmFkaXVzSW5wdXQudmFsdWUgKyB0aGlzLnNwcmVhZFJhZGl1c1VuaXRTZWxlY3Rvci52YWx1ZTtcblxuICAgICAgICBjb25zdCBib3hTaGFkb3dWYWx1ZSA9IGAke2hvcml6b250YWxPZmZzZXR9ICR7dmVydGljYWxPZmZzZXR9ICR7Ymx1clJhZGl1c30gJHtzcHJlYWRSYWRpdXN9ICR7Y29sb3J9ICR7aW5zZXR9YFxuXG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2JveC1zaGFkb3cnXSA9IGJveFNoYWRvd1ZhbHVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlQWR2YW5jZWRQcm9wZXJ0eSgpIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYm94LXNoYWRvdyddID0gdGhpcy5hZHZhbmNlZFNoYWRvd0JveFRleHRBcmVhLnZhbHVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlQm94U2hhZG93VHlwZSgpIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYm94LXNoYWRvdyddID0gJyc7XG5cbiAgICAgICAgaWYgKHRoaXMuYWR2YW5jZWRCb3hTaGFkb3dDaGVja2JveC5jaGVja2VkKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNDb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5jb2xvckluc2V0Q29udGFpbmVyKTtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c0NvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLmhvcml6b250YWxPZmZzZXRDb250YWluZXIpO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMudmVydGljYWxPZmZzZXRDb250YWluZXIpO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuYmx1clJhZGl1c0NvbnRhaW5lcik7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNDb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5zcHJlYWRSYWRpdXNDb250YWluZXIpO1xuXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5hZHZhbmNlZFNoYWRvd0JveENvbnRhaW5lcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNDb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5hZHZhbmNlZFNoYWRvd0JveENvbnRhaW5lcik7XG5cbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbG9ySW5zZXRDb250YWluZXIpO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaG9yaXpvbnRhbE9mZnNldENvbnRhaW5lcik7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy52ZXJ0aWNhbE9mZnNldENvbnRhaW5lcik7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5ibHVyUmFkaXVzQ29udGFpbmVyKTtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnNwcmVhZFJhZGl1c0NvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEluaXRpYWxWYWx1ZXMoKSB7XG4gICAgICAgIGxldCBib3hTaGFkb3dTdHJpbmcgPSB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydib3gtc2hhZG93J107XG5cbiAgICAgICAgbGV0IGNvbG9yLCBpbnNldDtcbiAgICAgICAgbGV0IHNpemVzQXJyID0gW107XG5cbiAgICAgICAgaWYgKGJveFNoYWRvd1N0cmluZykge1xuICAgICAgICAgICAgaWYgKGJveFNoYWRvd1N0cmluZy5zcGxpdCgnLCcpLmZpbHRlcigoZWxlKSA9PiBlbGUuaW5jbHVkZXMoJ3JnYicpKS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZHZhbmNlZEVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoYm94U2hhZG93U3RyaW5nLnNwbGl0KCcsJykubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkdmFuY2VkRW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYm94U2hhZG93U3RyaW5nLmluY2x1ZGVzKCdyZ2InKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluaXRpYWxJbmRleE9mUkdCID0gYm94U2hhZG93U3RyaW5nLmluZGV4T2YoJ3JnYicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpbmFsSW5kZXhPZlJHQiA9IGJveFNoYWRvd1N0cmluZy5pbmRleE9mKCcpJylcblxuICAgICAgICAgICAgICAgIGNvbG9yID0gYm94U2hhZG93U3RyaW5nLnNsaWNlKGluaXRpYWxJbmRleE9mUkdCLCBmaW5hbEluZGV4T2ZSR0IgKyAxKVxuXG4gICAgICAgICAgICAgICAgYm94U2hhZG93U3RyaW5nID0gYm94U2hhZG93U3RyaW5nLnJlcGxhY2UoY29sb3IsICcnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgYm94U2hhZG93QXJyID0gYm94U2hhZG93U3RyaW5nLnNwbGl0KCcgJyk7XG5cbiAgICAgICAgICAgIGluc2V0ID0gYm94U2hhZG93QXJyLmZpbmQoKGVsZSkgPT4gZWxlID09PSAnaW5zZXQnKVxuXG4gICAgICAgICAgICBzaXplc0FyciA9IGJveFNoYWRvd0Fyci5maWx0ZXIoKGVsZSkgPT4gIWlzTmFOKHBhcnNlSW50KGVsZSkpKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgaW5zZXQsXG4gICAgICAgICAgICBob3Jpem9udGFsT2Zmc2V0OiBzaXplc0FyclswXSxcbiAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0OiBzaXplc0FyclsxXSxcbiAgICAgICAgICAgIGJsdXJSYWRpdXM6IHNpemVzQXJyWzJdLFxuICAgICAgICAgICAgc3ByZWFkUmFkaXVzOiBzaXplc0FyclszXSxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBjbGFzc05hbWVVcGRhdGVkKG5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0ID0gQ3NzU3R5bGVTaGVldC5nZXRSdWxlU3R5bGVzKG5hbWUpO1xuICAgICAgICB0aGlzLmdldEluaXRpYWxWYWx1ZXMoKTtcbiAgICAgICAgdGhpcy5zZXRCb3hTaGFkb3dWYWx1ZXNBY2NvcmRpbmdUb0NsYXNzKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IEFycmF5U2VsZWN0b3JCb2R5SW50ZXJmYWNlIGZyb20gJy4uL2ludGVyZmFjZXMvc2VsZWN0b3ItZnJvbS1hcnJheS1ib2R5LmludGVyZmFjZSc7XG5cbmltcG9ydCBDbGFzc0NoYW5nZVB1Ymxpc2hlciBmcm9tICcuLi9wdWJsaXNoZXJzL0NsYXNzQ2hhbmdlUHVibGlzaGVyJztcbmltcG9ydCBDc3NTdHlsZVNoZWV0IGZyb20gJy4uLy4uL2Nzcy1zdHlsZXNoZWV0L2Nzcy1zdHlsZXNoZWV0JztcbmltcG9ydCBSYXdIVE1MQ29ucG9uZW50IGZyb20gJy4uLy4uL2h0bWwtY29tcG9uZW50cy9SYXdIVE1MQ29tcG9uZW50JztcblxuaW1wb3J0IENvbnRhaW5lckJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0NvbnRhaW5lckJ1aWxkZXInO1xuaW1wb3J0IExhYmVsQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvTGFiZWxCdWlsZGVyJztcbmltcG9ydCBTZWxlY3RvckZyb21BcnJheUJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL1NlbGVjdG9yRnJvbUFycmF5QnVpbGRlcic7XG5pbXBvcnQgSW5wdXRCdWlsZGVyIGZyb20gJy4uL21vZGVscy9JbnB1dEJ1aWxkZXInO1xuaW1wb3J0IEJ1dHRvbkJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0J1dHRvbkJ1aWxkZXInO1xuaW1wb3J0IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyIGZyb20gJy4uL21vZGVscy9TZWxlY3RvckZyb21FbnVtQnVpbGRlcic7XG5pbXBvcnQgVGV4dGFyZWFCdWlsZGVyIGZyb20gJy4uL21vZGVscy9UZXh0QXJlYUJ1aWxkZXInO1xuXG5pbXBvcnQgeyBTdHlsZU5hbWVFbnVtIH0gZnJvbSAnLi4vZW51bXMvc3R5bGUtbmFtZS5lbnVtJztcbmltcG9ydCB7IERpc3BsYXlUeXBlc0VudW0gfSBmcm9tICcuLi9lbnVtcy9kaXNwbGF5LXR5cGVzLmVudW0nO1xuaW1wb3J0IHsgRmxleERpcmVjdGlvbkVudW0gfSBmcm9tICcuLi9lbnVtcy9mbGV4LWRpcmVjdGlvbi5lbnVtJztcbmltcG9ydCB7IElucHV0VHlwZUVudW0gfSBmcm9tICcuLi9lbnVtcy9pbnB1dC10eXBlLmVudW0nO1xuaW1wb3J0IHsgR2VuZXJhbFBzZXVkb2NsYXNzRW51bSB9IGZyb20gJy4uL2VudW1zL2dlbmVyYWwtcHNldWRvY2xhc3MuZW51bSc7XG5cbi8vIFRPRE86IHZlciBlc3RpbG9zIGVzcGVjaWZpY29zIHBhcmEgbG9zIGFuY29yIGVsZW1lbnRzIChsaW5rcyk6XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuLy8gaHR0cHM6Ly93d3cuYXByZW5kZXJhcHJvZ3JhbWFyLmNvbS9pbmRleC5waHA/b3B0aW9uPWNvbV9jb250ZW50JnZpZXc9YXJ0aWNsZSZpZD03NTI6cHNldWRvY2xhc2VzLWNzcy1saW5rLXZpc2l0ZWQtZm9jdXMtaG92ZXIteS1hY3RpdmUtZXN0aWxvcy15LWVmZWN0b3MtZW4tbGlua3MtcHJvcGllZGFkLW91dGxpbmUtY3UwMTA0N2QmY2F0aWQ9NzUmSXRlbWlkPTIwM1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGFzc01hbmFnZW1lbnRDb21wb25lbnQge1xuICAgIHByaXZhdGUgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcbiAgICBwcml2YXRlIGRvbUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSBjbGFzc05hbWVzOiBBcnJheVNlbGVjdG9yQm9keUludGVyZmFjZVtdO1xuICAgIHByaXZhdGUgYXBwZW5kYWJsZUNsYXNzTmFtZXM6IEFycmF5U2VsZWN0b3JCb2R5SW50ZXJmYWNlW107XG4gICAgcHJpdmF0ZSBjbGFzc2VzU2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIHByaXZhdGUgaW5pdGlhbENsYXNzTmFtZTogc3RyaW5nO1xuXG4gICAgcHJpdmF0ZSBuZXdDbGFzc05hbWVJbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgICBwcml2YXRlIG5ld1BzZXVkb2NsYXNzU2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIHByaXZhdGUgZHVwbGljYWJsZUNsYXNzU2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIHByaXZhdGUgYXBwZW5kQ2xhc3NTZWxlY3RvcjogSFRNTFNlbGVjdEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSByZW5hbWVDbGFzc0lucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSBkdXBsaWNhYmxlQ2xhc3NOYW1lczogQXJyYXlTZWxlY3RvckJvZHlJbnRlcmZhY2VbXTtcbiAgICBwcml2YXRlIG5ld0R1cGxpY2FkZWRDbGFzc05hbWVJbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgICBwcml2YXRlIGR1cGxpY2F0ZVBzZXVkb2NsYXNzU2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSBjbGFzc2VzU2VsZWN0b3JDb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgYXBwZW5kQ2xhc3NDb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSByYXdDbGFzc1RleHRFZGl0b3I6IFRleHRhcmVhQnVpbGRlcjtcblxuICAgIHByaXZhdGUgcHVibGlzaGVyOiBDbGFzc0NoYW5nZVB1Ymxpc2hlcjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBkb21FbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgICAgICAgcHVibGlzaGVyOiBDbGFzc0NoYW5nZVB1Ymxpc2hlclxuICAgICkge1xuICAgICAgICB0aGlzLnB1Ymxpc2hlciA9IHB1Ymxpc2hlcjtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgICAgICAgdGhpcy5pbml0aWFsQ2xhc3NOYW1lID0gdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdFswXTtcbiAgICAgICAgdGhpcy5wb3B1bGF0ZUNsYXNzZXNMaXN0KCk7XG4gICAgICAgIHRoaXMucG9wdWxhdGVBcHBlbmRhYmxlQ2xhc3NMaXN0KCk7XG4gICAgICAgIHRoaXMucG9wdWxhdGVEdXBsaWNhYmxlQ2xhc3NMaXN0KCk7XG5cbiAgICAgICAgdGhpcy5idWlsZFJhd0NsYXNzVGV4dEVkaXRvcigpO1xuICAgICAgICB0aGlzLnBvcHVsYXRlUmF3Q2xhc3NUZXh0RWRpdG9yKHRoaXMuaW5pdGlhbENsYXNzTmFtZSk7XG5cbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnRzKCk7XG4gICAgfVxuXG4gICAgZ2V0IGNvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xuICAgIH1cblxuICAgIHByaXZhdGUgYnVpbGRSYXdDbGFzc1RleHRFZGl0b3IoKSB7XG4gICAgICAgIHRoaXMucmF3Q2xhc3NUZXh0RWRpdG9yID0gbmV3IFRleHRhcmVhQnVpbGRlcigpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwb3B1bGF0ZVJhd0NsYXNzVGV4dEVkaXRvcihjbGFzc05hbWUpIHtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gQ3NzU3R5bGVTaGVldC5nZXRSdWxlcyhjbGFzc05hbWUpLm1hcCgocnVsZSkgPT4gcnVsZS5jc3NUZXh0KS5qb2luKCdcXG4nKTtcblxuICAgICAgICBsZXQgbW9kaWZpZWRWYWx1ZXMgPSAnJztcblxuICAgICAgICBmb3IgKGNvbnN0IGNoYXIgb2YgdmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAoY2hhciA9PT0gJ3snIHx8IGNoYXIgPT09ICc7JyB8fCBjaGFyID09PSAnfScpIHtcbiAgICAgICAgICAgICAgICBtb2RpZmllZFZhbHVlcyArPSBgJHtjaGFyfVxcbiBgO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtb2RpZmllZFZhbHVlcyArPSBjaGFyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yYXdDbGFzc1RleHRFZGl0b3JcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmhlaWdodCwgJzEwMHB4JylcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydmb250LXNpemUnXSwgJzEwcHgnKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW1bJ3Jlc2l6ZSddLCAndmVydGljYWwnKVxuICAgICAgICAgICAgLnNldFZhbHVlKG1vZGlmaWVkVmFsdWVzKVxuICAgIH1cblxuICAgIHByaXZhdGUgcG9wdWxhdGVDbGFzc2VzTGlzdCgpIHtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lcyA9IFtdXG5cbiAgICAgICAgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5mb3JFYWNoKChjbGFzc0VsZW1lbnROYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBydWxlcyA9IENzc1N0eWxlU2hlZXQuZ2V0UnVsZXMoY2xhc3NFbGVtZW50TmFtZSk7XG5cbiAgICAgICAgICAgIHJ1bGVzLmZvckVhY2goKHJ1bGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGVbJ3NlbGVjdG9yVGV4dCddXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgaWYgKHJ1bGVOYW1lWzBdID09PSAnLicgfHwgcnVsZU5hbWVbMF0gPT09ICcjJykge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHJ1bGVOYW1lLnN1YnN0cmluZygxKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHJ1bGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcbiAgICB9XG5cbiAgICBwcml2YXRlIHBvcHVsYXRlRHVwbGljYWJsZUNsYXNzTGlzdCgpIHtcbiAgICAgICAgY29uc3QgZHVwbGljYWJsZUNsYXNzTmFtZXMgPSBbXVxuXG4gICAgICAgIGNvbnN0IHJ1bGVzID0gQ3NzU3R5bGVTaGVldC5nZXRBbGxSdWxlcygpO1xuXG4gICAgICAgIHJ1bGVzLmZvckVhY2goKHJ1bGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZVsnc2VsZWN0b3JUZXh0J11cbiAgICAgICAgICAgIGxldCB2YWx1ZTogc3RyaW5nO1xuICAgICAgICAgICAgaWYgKHJ1bGVOYW1lWzBdID09PSAnLicgfHwgcnVsZU5hbWVbMF0gPT09ICcjJykge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gcnVsZU5hbWUuc3Vic3RyaW5nKDEpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gJ2JvZHknKSB7XG4gICAgICAgICAgICAgICAgZHVwbGljYWJsZUNsYXNzTmFtZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHJ1bGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuZHVwbGljYWJsZUNsYXNzTmFtZXMgPSBkdXBsaWNhYmxlQ2xhc3NOYW1lcztcbiAgICB9XG5cbiAgICBwcml2YXRlIHBvcHVsYXRlQXBwZW5kYWJsZUNsYXNzTGlzdCgpIHtcbiAgICAgICAgY29uc3QgYXBwZW5kYWJsZUNsYXNzTmFtZXMgPSBbXVxuXG4gICAgICAgIGNvbnN0IHJ1bGVzID0gQ3NzU3R5bGVTaGVldC5nZXRBbGxSdWxlcygpO1xuXG4gICAgICAgIHJ1bGVzLmZvckVhY2goKHJ1bGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZVsnc2VsZWN0b3JUZXh0J11cbiAgICAgICAgICAgIGxldCB2YWx1ZTogc3RyaW5nO1xuICAgICAgICAgICAgaWYgKHJ1bGVOYW1lWzBdID09PSAnLicgfHwgcnVsZU5hbWVbMF0gPT09ICcjJykge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gcnVsZU5hbWUuc3Vic3RyaW5nKDEpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gJ2JvZHknICYmICF0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGFwcGVuZGFibGVDbGFzc05hbWVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBydWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmFwcGVuZGFibGVDbGFzc05hbWVzID0gYXBwZW5kYWJsZUNsYXNzTmFtZXM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRDb21wb25lbnRzKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZUNsYXNzTmFtZSA9IHRoaXMudXBkYXRlQ2xhc3NOYW1lLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY3JlYXRlTmV3Q2xhc3NOYW1lID0gdGhpcy5jcmVhdGVOZXdDbGFzc05hbWUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW1vdmVDbGFzcyA9IHRoaXMucmVtb3ZlQ2xhc3MuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VDbGFzc05hbWUgPSB0aGlzLmNoYW5nZUNsYXNzTmFtZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFwcGVuZENsYXNzID0gdGhpcy5hcHBlbmRDbGFzcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmR1cGxpY2F0ZUNsYXNzID0gdGhpcy5kdXBsaWNhdGVDbGFzcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNoYW5nZUZ1bGxDbGFzcyA9IHRoaXMuY2hhbmdlRnVsbENsYXNzLmJpbmQodGhpcyk7XG5cbiAgICAgICAgLy8gQ2xhc3Mgc2VsZWN0b3IgYW5kIHJlbW92ZSBjbGFzc1xuICAgICAgICB0aGlzLmNsYXNzZXNTZWxlY3RvciA9IG5ldyBTZWxlY3RvckZyb21BcnJheUJ1aWxkZXIodGhpcy5jbGFzc05hbWVzKVxuICAgICAgICAgICAgLnNlbGVjdE9wdGlvbih0aGlzLmluaXRpYWxDbGFzc05hbWUpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVDbGFzc05hbWUpXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIGNvbnN0IHJlbW92ZUNsYXNzQnV0dG9uID0gbmV3IEJ1dHRvbkJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldElubmVyVGV4dCgnUmVtb3ZlJylcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucmVtb3ZlQ2xhc3MpXG4gICAgICAgICAgICAuYnVpbGQoKTtcblxuICAgICAgICB0aGlzLmNsYXNzZXNTZWxlY3RvckNvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydmbGV4LWRpcmVjdGlvbiddLCBGbGV4RGlyZWN0aW9uRW51bS5jb2x1bW4pXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5jbGFzc2VzU2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHJlbW92ZUNsYXNzQnV0dG9uKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYnVpbGQoKTtcblxuICAgICAgICAvLyBSZW5hbWUgQ2xhc3NcbiAgICAgICAgdGhpcy5yZW5hbWVDbGFzc0lucHV0ID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLnRleHQpXG4gICAgICAgICAgICAuc2V0UGxhY2Vob2xkZXIoJ05ldyBjbGFzcyBuYW1lJylcbiAgICAgICAgICAgIC5idWlsZCgpO1xuXG4gICAgICAgIGNvbnN0IHJlbmFtZUNsYXNzQnV0dG9uID0gbmV3IEJ1dHRvbkJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldElubmVyVGV4dCgnQ2hhbmdlJylcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2hhbmdlQ2xhc3NOYW1lKVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG5cbiAgICAgICAgY29uc3QgcmVuYW1lQ2xhc3NDb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnZmxleC1kaXJlY3Rpb24nXSwgRmxleERpcmVjdGlvbkVudW0uY29sdW1uKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdDaGFuZ2UgQ2xhc3MgTmFtZScpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydmbGV4LWRpcmVjdGlvbiddLCBGbGV4RGlyZWN0aW9uRW51bS5yb3cpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMucmVuYW1lQ2xhc3NJbnB1dClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQocmVuYW1lQ2xhc3NCdXR0b24pXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBDbGFzc1xuICAgICAgICB0aGlzLm5ld0NsYXNzTmFtZUlucHV0ID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLnRleHQpXG4gICAgICAgICAgICAuc2V0UGxhY2Vob2xkZXIoJ0NsYXNzIG5hbWUnKVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG5cbiAgICAgICAgdGhpcy5uZXdQc2V1ZG9jbGFzc1NlbGVjdG9yID0gbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKEdlbmVyYWxQc2V1ZG9jbGFzc0VudW0pXG4gICAgICAgICAgICAuc2VsZWN0T3B0aW9uKEdlbmVyYWxQc2V1ZG9jbGFzc0VudW0ubm9uZSlcbiAgICAgICAgICAgIC5idWlsZCgpO1xuXG4gICAgICAgIGNvbnN0IGNyZWF0ZUNsYXNzQnV0dG9uID0gbmV3IEJ1dHRvbkJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldElubmVyVGV4dCgnQ3JlYXRlJylcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY3JlYXRlTmV3Q2xhc3NOYW1lKVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG5cbiAgICAgICAgY29uc3QgbmV3Q2xhc3NDb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnZmxleC1kaXJlY3Rpb24nXSwgRmxleERpcmVjdGlvbkVudW0uY29sdW1uKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdDcmVhdGUgTmV3IENsYXNzJylcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5uZXdDbGFzc05hbWVJbnB1dClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5uZXdQc2V1ZG9jbGFzc1NlbGVjdG9yKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChjcmVhdGVDbGFzc0J1dHRvbilcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG5cbiAgICAgICAgLy8gRHVwbGljYXRlIGNsYXNzXG4gICAgICAgIHRoaXMuZHVwbGljYWJsZUNsYXNzU2VsZWN0b3IgPSBuZXcgU2VsZWN0b3JGcm9tQXJyYXlCdWlsZGVyKHRoaXMuZHVwbGljYWJsZUNsYXNzTmFtZXMpXG4gICAgICAgICAgICAuc2VsZWN0T3B0aW9uKHRoaXMuZHVwbGljYWJsZUNsYXNzTmFtZXNbMF0udmFsdWUpXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIHRoaXMubmV3RHVwbGljYWRlZENsYXNzTmFtZUlucHV0ID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLnRleHQpXG4gICAgICAgICAgICAuc2V0UGxhY2Vob2xkZXIoJ0R1cGxpY2F0ZWQgY2xhc3MgbmFtZScpXG4gICAgICAgICAgICAuYnVpbGQoKTtcblxuICAgICAgICBjb25zdCBkdXBsaWNhdGVDbGFzc0J1dHRvbiA9IG5ldyBCdXR0b25CdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0R1cGxpY2F0ZScpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmR1cGxpY2F0ZUNsYXNzKVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICB0aGlzLmR1cGxpY2F0ZVBzZXVkb2NsYXNzU2VsZWN0b3IgPSBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIoR2VuZXJhbFBzZXVkb2NsYXNzRW51bSlcbiAgICAgICAgICAgIC5zZWxlY3RPcHRpb24oR2VuZXJhbFBzZXVkb2NsYXNzRW51bS5ub25lKVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG5cbiAgICAgICAgY29uc3QgZHVwbGljYXRlQ2xhc3NDb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnZmxleC1kaXJlY3Rpb24nXSwgRmxleERpcmVjdGlvbkVudW0uY29sdW1uKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdEdXBsaWNhdGUgQ2xhc3MnKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICAgICAgbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydmbGV4LWRpcmVjdGlvbiddLCBGbGV4RGlyZWN0aW9uRW51bS5yb3cpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmR1cGxpY2FibGVDbGFzc1NlbGVjdG9yKVxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5kdXBsaWNhdGVQc2V1ZG9jbGFzc1NlbGVjdG9yKVxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgICAgIG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnZmxleC1kaXJlY3Rpb24nXSwgRmxleERpcmVjdGlvbkVudW0ucm93KVxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5uZXdEdXBsaWNhZGVkQ2xhc3NOYW1lSW5wdXQpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChkdXBsaWNhdGVDbGFzc0J1dHRvbilcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgLy8gQXBwZW5kIGNsYXNzXG4gICAgICAgIGlmICh0aGlzLmFwcGVuZGFibGVDbGFzc05hbWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuYXBwZW5kQ2xhc3NTZWxlY3RvciA9IG5ldyBTZWxlY3RvckZyb21BcnJheUJ1aWxkZXIodGhpcy5hcHBlbmRhYmxlQ2xhc3NOYW1lcylcbiAgICAgICAgICAgICAgICAuc2VsZWN0T3B0aW9uKHRoaXMuYXBwZW5kYWJsZUNsYXNzTmFtZXNbMF0udmFsdWUpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICAgICAgY29uc3QgYXBwZW5kQ2xhc3NCdXR0b24gPSBuZXcgQnV0dG9uQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnQXBwZW5kJylcbiAgICAgICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmFwcGVuZENsYXNzKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgICAgIHRoaXMuYXBwZW5kQ2xhc3NDb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydmbGV4LWRpcmVjdGlvbiddLCBGbGV4RGlyZWN0aW9uRW51bS5jb2x1bW4pXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0FwcGVuZCBDbGFzcycpXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChcbiAgICAgICAgICAgICAgICAgICAgbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW1bJ2ZsZXgtZGlyZWN0aW9uJ10sIEZsZXhEaXJlY3Rpb25FbnVtLnJvdylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmFwcGVuZENsYXNzU2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQoYXBwZW5kQ2xhc3NCdXR0b24pXG4gICAgICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gRWRpdCBmdWxsIGNsYXNzXG4gICAgICAgIGNvbnN0IHJhd0NsYXNzQ2hhbmdlQnV0dG9uID0gbmV3IEJ1dHRvbkJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldElubmVyVGV4dCgnQ2hhbmdlIFJhdyBDbGFzcycpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNoYW5nZUZ1bGxDbGFzcylcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgY29uc3QgcmF3Q2xhc3NFZGl0b3IgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnZmxleC1kaXJlY3Rpb24nXSwgRmxleERpcmVjdGlvbkVudW0uY29sdW1uKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdSYXcgQ2xhc3MgRWRpdG9yJylcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgICAgIG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnZmxleC1kaXJlY3Rpb24nXSwgRmxleERpcmVjdGlvbkVudW0uY29sdW1uKVxuICAgICAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS53aWR0aCwgJzEwMCUnKVxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW1bJ2ZsZXgtZGlyZWN0aW9uJ10sIEZsZXhEaXJlY3Rpb25FbnVtLmNvbHVtbilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLndpZHRoLCAnMTAwJScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5yYXdDbGFzc1RleHRFZGl0b3IuYnVpbGQoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChyYXdDbGFzc0NoYW5nZUJ1dHRvbilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgLy8gTWFpbiBjb250YWluZXJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5ib3JkZXIsICcxcHggc29saWQgIzRDQUY1MCcpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5wYWRkaW5nLCAnM3B4JylcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnQ2xhc3NlcyBNYW5hZ2VtZW50JylcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuY2xhc3Nlc1NlbGVjdG9yQ29udGFpbmVyKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKHJlbmFtZUNsYXNzQ29udGFpbmVyKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ld0NsYXNzQ29udGFpbmVyKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKGR1cGxpY2F0ZUNsYXNzQ29udGFpbmVyKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkSWZEZWZpbmVkKHRoaXMuYXBwZW5kQ2xhc3NDb250YWluZXIpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQocmF3Q2xhc3NFZGl0b3IpXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlQ2xhc3NOYW1lKCkge1xuICAgICAgICB0aGlzLnBvcHVsYXRlUmF3Q2xhc3NUZXh0RWRpdG9yKHRoaXMuY2xhc3Nlc1NlbGVjdG9yLnZhbHVlKTtcbiAgICAgICAgdGhpcy5wdWJsaXNoZXIubm90aWZ5Q2xhc3NOYW1lKHRoaXMuY2xhc3Nlc1NlbGVjdG9yLnZhbHVlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZU5ld0NsYXNzTmFtZSgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZTogc3RyaW5nID0gdGhpcy5uZXdDbGFzc05hbWVJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHBzZXVkb2NsYXNzID0gdGhpcy5uZXdQc2V1ZG9jbGFzc1NlbGVjdG9yLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgY29tcGxldGVDc3NOYW1lOiBzdHJpbmcgPVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSArIChwc2V1ZG9jbGFzcyAhPT0gJycgJiYgcHNldWRvY2xhc3MgIT09ICdub25lJyA/IGA6JHtwc2V1ZG9jbGFzc31gIDogJycpO1xuXG4gICAgICAgICAgICBpZiAoY2xhc3NOYW1lID09PSAnJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2xhc3MgbmFtZSBjYW4gbm90IGJlIGFuIGVtcHR5IHN0cmluZycpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsYXNzTmFtZVswXSkpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDbGFzcyBuYW1lIG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlcicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBmb3VuZEJhc2VSdWxlID0gQ3NzU3R5bGVTaGVldC5nZXRSdWxlSW5kZXgoY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IGZvdW5kUnVsZVdpdGhQc2V1ZG9jbGFzcyA9IENzc1N0eWxlU2hlZXQuZ2V0UnVsZUluZGV4KGNvbXBsZXRlQ3NzTmFtZSk7XG5cbiAgICAgICAgICAgIGxldCBjbGFzc05hbWVOb3RGb3VuZEZvclRoaXNFbGVtZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuZm9yRWFjaCgoY24pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY24gPT09IGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWVOb3RGb3VuZEZvclRoaXNFbGVtZW50ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgaWYgKGZvdW5kQmFzZVJ1bGUgPj0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChjbGFzc05hbWVOb3RGb3VuZEZvclRoaXNFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2xhc3MgbmFtZSBhbHJlYWR5IGV4aXN0cyBmb3IgYW5vdGhlciBlbGVtZW50Jyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZvdW5kUnVsZVdpdGhQc2V1ZG9jbGFzcyA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NsYXNzIG5hbWUgYWxyZWFkeSBleGlzdHMnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIENzc1N0eWxlU2hlZXQuaW5zZXJ0UnVsZShgLiR7Y29tcGxldGVDc3NOYW1lfSB7fWApO1xuXG4gICAgICAgICAgICBjb25zdCBuZXdPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIG5ld09wdGlvbi50ZXh0ID0gYC4ke2NvbXBsZXRlQ3NzTmFtZX1gO1xuICAgICAgICAgICAgbmV3T3B0aW9uLnZhbHVlID0gY29tcGxldGVDc3NOYW1lO1xuXG4gICAgICAgICAgICB0aGlzLmNsYXNzZXNTZWxlY3Rvci5hcHBlbmRDaGlsZChuZXdPcHRpb24pO1xuXG4gICAgICAgICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgICAgICAgdGhpcy5jbGFzc2VzU2VsZWN0b3IuY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZDogSFRNTE9wdGlvbkVsZW1lbnQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQudmFsdWUgPT09IG5ld09wdGlvbi52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMubmV3Q2xhc3NOYW1lSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgIHRoaXMuY2xhc3Nlc1NlbGVjdG9yLnNlbGVjdGVkSW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2xhc3NOYW1lKCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBhbGVydChlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgcmVtb3ZlQ2xhc3MoKSB7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGAke3RoaXMuY2xhc3Nlc1NlbGVjdG9yLnZhbHVlfWApO1xuICAgICAgICBDc3NTdHlsZVNoZWV0LnJlbW92ZVJ1bGUoYCR7dGhpcy5jbGFzc2VzU2VsZWN0b3IudmFsdWV9YCk7XG4gICAgICAgIHRoaXMuY2xhc3Nlc1NlbGVjdG9yLm9wdGlvbnMucmVtb3ZlKHRoaXMuY2xhc3Nlc1NlbGVjdG9yLnNlbGVjdGVkSW5kZXgpO1xuXG4gICAgICAgIGlmICh0aGlzLmNsYXNzZXNTZWxlY3Rvci5vcHRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5jbGFzc2VzU2VsZWN0b3JDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgY2hhbmdlQ2xhc3NOYW1lKCkge1xuICAgICAgICBSYXdIVE1MQ29ucG9uZW50Lmluc3RhbmNlcy5mb3JFYWNoKChpbnN0YW5jZSkgPT4ge1xuICAgICAgICAgICAgaW5zdGFuY2UuY2xhc3NMaXN0LnJlcGxhY2UodGhpcy5jbGFzc2VzU2VsZWN0b3IudmFsdWUsIHRoaXMucmVuYW1lQ2xhc3NJbnB1dC52YWx1ZSk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgQ3NzU3R5bGVTaGVldC5jaGFuZ2VSdWxlTmFtZSh0aGlzLmNsYXNzZXNTZWxlY3Rvci52YWx1ZSwgdGhpcy5yZW5hbWVDbGFzc0lucHV0LnZhbHVlKTtcbiAgICAgICAgdGhpcy5wb3B1bGF0ZUNsYXNzZXNMaXN0KCk7XG4gICAgICAgIHRoaXMuY2xhc3Nlc1NlbGVjdG9yLnJlbW92ZSh0aGlzLmNsYXNzZXNTZWxlY3Rvci5zZWxlY3RlZEluZGV4KTtcblxuICAgICAgICB0aGlzLmFwcGVuZE5ld09wdGlvbkVsZW1lbnQodGhpcy5yZW5hbWVDbGFzc0lucHV0LnZhbHVlLCB0aGlzLmNsYXNzZXNTZWxlY3Rvcik7XG5cbiAgICAgICAgdGhpcy5yZW5hbWVDbGFzc0lucHV0LnZhbHVlID0gJyc7XG5cbiAgICAgICAgdGhpcy5wb3B1bGF0ZVJhd0NsYXNzVGV4dEVkaXRvcih0aGlzLmNsYXNzZXNTZWxlY3Rvci52YWx1ZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhcHBlbmRDbGFzcygpIHtcblxuICAgICAgICAvLyBUT0RPOiBzZSBtdWVzdHJhIGxhIGNsYXNlIC5pbnB1dDA6aG92ZXIgcGFyYSBlbCBpbnB1dDAsIHkgbm8gZGViZXJpYS4uLi5cbiAgICAgICAgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5hcHBlbmRDbGFzc1NlbGVjdG9yLnZhbHVlKTtcblxuICAgICAgICB0aGlzLmFwcGVuZE5ld09wdGlvbkVsZW1lbnQodGhpcy5hcHBlbmRDbGFzc1NlbGVjdG9yLnZhbHVlLCB0aGlzLmNsYXNzZXNTZWxlY3Rvcik7XG5cbiAgICAgICAgdGhpcy5hcHBlbmRDbGFzc1NlbGVjdG9yLm9wdGlvbnMucmVtb3ZlKHRoaXMuYXBwZW5kQ2xhc3NTZWxlY3Rvci5zZWxlY3RlZEluZGV4KTtcblxuICAgICAgICBpZiAodGhpcy5hcHBlbmRDbGFzc1NlbGVjdG9yLm9wdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmFwcGVuZENsYXNzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBvcHVsYXRlUmF3Q2xhc3NUZXh0RWRpdG9yKHRoaXMuY2xhc3Nlc1NlbGVjdG9yLnZhbHVlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFwcGVuZE5ld09wdGlvbkVsZW1lbnQob3B0aW9uVmFsdWU6IHN0cmluZywgc2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24udmFsdWUgPSBvcHRpb25WYWx1ZTtcbiAgICAgICAgb3B0aW9uLnRleHQgPSBgLiR7b3B0aW9uVmFsdWV9YDtcblxuICAgICAgICBzZWxlY3Rvci5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICBzZWxlY3Rvci5zZWxlY3RlZEluZGV4ID0gc2VsZWN0b3Iub3B0aW9ucy5sZW5ndGggLSAxO1xuICAgIH1cblxuICAgIHByaXZhdGUgZHVwbGljYXRlQ2xhc3MoKSB7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMubmV3RHVwbGljYWRlZENsYXNzTmFtZUlucHV0LnZhbHVlKTtcblxuICAgICAgICBsZXQgbmV3Q2xhc3NOYW1lO1xuICAgICAgICBpZiAodGhpcy5kdXBsaWNhdGVQc2V1ZG9jbGFzc1NlbGVjdG9yLnZhbHVlICE9PSAnbm9uZScpIHtcbiAgICAgICAgICAgIG5ld0NsYXNzTmFtZSA9IGAke3RoaXMubmV3RHVwbGljYWRlZENsYXNzTmFtZUlucHV0LnZhbHVlfToke3RoaXMuZHVwbGljYXRlUHNldWRvY2xhc3NTZWxlY3Rvci52YWx1ZX1gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3Q2xhc3NOYW1lID0gYCR7dGhpcy5uZXdEdXBsaWNhZGVkQ2xhc3NOYW1lSW5wdXQudmFsdWV9YDtcbiAgICAgICAgfVxuXG4gICAgICAgIENzc1N0eWxlU2hlZXQuZHVwbGljYXRlUnVsZSh0aGlzLmR1cGxpY2FibGVDbGFzc1NlbGVjdG9yLnZhbHVlLCBuZXdDbGFzc05hbWUpO1xuXG4gICAgICAgIHRoaXMuYXBwZW5kTmV3T3B0aW9uRWxlbWVudChuZXdDbGFzc05hbWUsIHRoaXMuY2xhc3Nlc1NlbGVjdG9yKTtcbiAgICAgICAgdGhpcy5hcHBlbmROZXdPcHRpb25FbGVtZW50KG5ld0NsYXNzTmFtZSwgdGhpcy5kdXBsaWNhYmxlQ2xhc3NTZWxlY3Rvcik7XG5cbiAgICAgICAgdGhpcy5uZXdEdXBsaWNhZGVkQ2xhc3NOYW1lSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgdGhpcy5kdXBsaWNhdGVQc2V1ZG9jbGFzc1NlbGVjdG9yLnZhbHVlID0gR2VuZXJhbFBzZXVkb2NsYXNzRW51bS5ub25lO1xuXG4gICAgICAgIHRoaXMucG9wdWxhdGVSYXdDbGFzc1RleHRFZGl0b3IodGhpcy5jbGFzc2VzU2VsZWN0b3IudmFsdWUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2hhbmdlRnVsbENsYXNzKCkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuICAgICAgICAvLyBUT0RPOiBsb3MgdmFsb3JlcyBkZSBsYSB2ZW50YW5hIG5vIHNlIHZhbiBhY3R1YWxpemFuZG8gYSBtZWRpZGEgcXVlIHNlIGFncmVnYW4gY29zYXMgYSBlc2EgY2xhc2UsIHF1aXphcyBuZWNlc2l0YW1vcyB1biBvYnNlcnZlciwgcXVlIHNlcmlhIHVuIHZlcmRhZGVybyBxdWlsb21iYXNzc3Nvb29vb28uLi5cblxuICAgICAgICBjb25zdCBpbnB1dCA9IHRoaXMucmF3Q2xhc3NUZXh0RWRpdG9yLmdldFZhbHVlKCk7XG4gICAgICAgIGNvbnN0IHJlZ2V4ID0gL1xcLihbXFxzXFxTXSo/KVxccypcXHsoW1xcc1xcU10qPylcXH0vZztcblxuICAgICAgICBjb25zdCByZXN1bHQ6IHsgbmFtZTogc3RyaW5nLCB2YWx1ZXM6IHN0cmluZ1tdLCByYXc6IHN0cmluZyB9W10gPSBbXTtcblxuICAgICAgICBsZXQgbWF0Y2g7XG4gICAgICAgIHdoaWxlICgobWF0Y2ggPSByZWdleC5leGVjKGlucHV0KSkpIHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBtYXRjaFsxXS50cmltKCk7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IG1hdGNoWzJdLnRyaW0oKTtcblxuICAgICAgICAgICAgY29uc3QgdmFsdWVzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgICAgICAgICB2YWx1ZS5zcGxpdCgnOycpLmZvckVhY2goKHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRyaW1lZFZhbHVlID0gdmFsLnRyaW0oKTtcblxuICAgICAgICAgICAgICAgIGlmKHRyaW1lZFZhbHVlICE9PSAnJyl7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlcy5wdXNoKHRyaW1lZFZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICByZXN1bHQucHVzaCh7IG5hbWUsIHZhbHVlcywgcmF3OiBtYXRjaFswXX0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0LmZvckVhY2goKHJ1bGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVTdHlsZXMgPSBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXMocnVsZS5uYW1lKTtcblxuICAgICAgICAgICAgaWYoT2JqZWN0LmtleXMocnVsZVN0eWxlcykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHJ1bGUudmFsdWVzLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleVZhbHVlcyA9IHZhbHVlLnNwbGl0KCc6JykubWFwKCh2YWwpID0+IHZhbC5yZXBsYWNlKCc7JywnJykudHJpbSgpKVxuICAgICAgICAgICAgICAgICAgICBydWxlU3R5bGVzW2tleVZhbHVlc1swXV0gPSBrZXlWYWx1ZXNbMV07XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgQ3NzU3R5bGVTaGVldC5pbnNlcnRSdWxlKHJ1bGUucmF3KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQocnVsZS5uYW1lKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgbmV3T3B0aW9uLnRleHQgPSBgLiR7cnVsZS5uYW1lfWA7XG4gICAgICAgICAgICAgICAgICAgIG5ld09wdGlvbi52YWx1ZSA9IHJ1bGUubmFtZTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsYXNzZXNTZWxlY3Rvci5hcHBlbmRDaGlsZChuZXdPcHRpb24pO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xhc3Nlc1NlbGVjdG9yLmNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGQ6IEhUTUxPcHRpb25FbGVtZW50LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGQudmFsdWUgPT09IG5ld09wdGlvbi52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGFzc2VzU2VsZWN0b3Iuc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNsYXNzTmFtZSgpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IENsYXNzQ2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2UgZnJvbSAnLi4vaW50ZXJmYWNlcy9jbGFzcy1jaGFuZ2Utb2JzZXJ2ZXIuaW50ZXJmYWNlJztcblxuaW1wb3J0IENzc1N0eWxlU2hlZXQgZnJvbSAnLi4vLi4vY3NzLXN0eWxlc2hlZXQvY3NzLXN0eWxlc2hlZXQnO1xuXG5pbXBvcnQgQ29udGFpbmVyQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvQ29udGFpbmVyQnVpbGRlcic7XG5pbXBvcnQgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL1NlbGVjdG9yRnJvbUVudW1CdWlsZGVyJztcbmltcG9ydCBJbnB1dEJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0lucHV0QnVpbGRlcic7XG5pbXBvcnQgTGFiZWxCdWlsZGVyIGZyb20gJy4uL21vZGVscy9MYWJlbEJ1aWxkZXInO1xuXG5pbXBvcnQgR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudCBmcm9tICcuL2dlbmVyaWMtY3NzLXByb3BlcnR5LW11dGF0b3IuY29tcG9uZW50JztcblxuaW1wb3J0IHsgRGlzcGxheVR5cGVzRW51bSB9IGZyb20gJy4uL2VudW1zL2Rpc3BsYXktdHlwZXMuZW51bSc7XG5pbXBvcnQgeyBTdHlsZU5hbWVFbnVtIH0gZnJvbSAnLi4vZW51bXMvc3R5bGUtbmFtZS5lbnVtJztcbmltcG9ydCB7IEFsaWduRmxleFNlbGZFbnVtIH0gZnJvbSAnLi4vZW51bXMvYWxpZ24tZmxleC1zZWxmLmVudW0nO1xuaW1wb3J0IHsgSW5wdXRUeXBlRW51bSB9IGZyb20gJy4uL2VudW1zL2lucHV0LXR5cGUuZW51bSc7XG5pbXBvcnQgeyBFdmVudFR5cGVFbnVtIH0gZnJvbSAnLi4vZW51bXMvZXZlbnQtdHlwZS5lbnVtJztcbmltcG9ydCB7IEp1c3RpZnlHcmlkU2VsZkVudW0gfSBmcm9tICcuLi9lbnVtcy9qdXN0aWZ5LWdyaWQtc2VsZi5lbnVtJztcbmltcG9ydCB7IEFsaWduR3JpZFNlbGZFbnVtIH0gZnJvbSAnLi4vZW51bXMvYWxpZ24tZ3JpZC1zZWxmLmVudW0nO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3BsYXlBc0NoaWxkQ29tcG9uZW50IGltcGxlbWVudHMgQ2xhc3NDaGFuZ2VPYnNlcnZlckludGVyZmFjZSB7XG4gICAgcHJpdmF0ZSBkb21FbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBkb21FbGVtZW50U3R5bGVTaGVldDogQ1NTU3R5bGVEZWNsYXJhdGlvbjtcblxuICAgIHByaXZhdGUgZmxleENvbnRhaW5lckFzQ2hpbGRyZW46IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgYWxpZ25TZWxmU2VsZWN0b3I6IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBmbGV4R3Jvd0lucHV0OiBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50O1xuICAgIHByaXZhdGUgZmxleFNocmlua0lucHV0OiBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50O1xuICAgIHByaXZhdGUgZmxleEJhc2lzSW5wdXQ6IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQ7XG5cbiAgICBwcml2YXRlIGdyaWRDb250YWluZXJBc0NoaWxkcmVuOiBIVE1MRGl2RWxlbWVudDtcbiAgICBwcml2YXRlIGdyaWRDb2x1bW5TdGFydElucHV0OiBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50O1xuICAgIHByaXZhdGUgZ3JpZENvbHVtbkVuZElucHV0OiBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50O1xuICAgIHByaXZhdGUgZ3JpZFJvd1N0YXJ0SW5wdXQ6IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBncmlkUm93RW5kSW5wdXQ6IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBncmlkSnVzdGlmeVNlbGY6IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBncmlkQWxpZ25TZWxmOiBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50O1xuXG4gICAgY29uc3RydWN0b3IoZG9tRWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCA9IENzc1N0eWxlU2hlZXQuZ2V0UnVsZVN0eWxlcyh0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0WzBdKTtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKCkuYnVpbGQoKTtcblxuICAgICAgICB0aGlzLmZsZXhDb250YWluZXJBc0NoaWxkcmVuID0gdGhpcy5jcmVhdGVGbGV4QXNDaGlsZHJlbkNvbnRhaW5lcigpO1xuICAgICAgICB0aGlzLmdyaWRDb250YWluZXJBc0NoaWxkcmVuID0gdGhpcy5jcmVhdGVHcmlkQXNDaGlsZHJlbkNvbnRhaW5lcigpO1xuICAgICAgICB0aGlzLnNldENvbXBvbmVudEFjY29yZGluZ1RvU2VsZWN0b3IoKTtcbiAgICB9XG5cbiAgICBnZXQgY29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRDb21wb25lbnRBY2NvcmRpbmdUb1NlbGVjdG9yKCkge1xuICAgICAgICBpZiAodGhpcy5kb21FbGVtZW50LmlkICE9PSAnYXBwLWNvbnRhaW5lcicpIHtcbiAgICAgICAgICAgIC8vIE5PVEU6IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvbUVsZW1lbnQpIHJldHVybiB0aGUgYWN0aXZlIHN0eWxlIG9mIHRoYXQgZG9tIGVsZW1lbnQuXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50UHJvcGVydGllcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50KVsnZGlzcGxheSddXG5cbiAgICAgICAgICAgIGlmIChjdXJyZW50UHJvcGVydGllcyA9PT0gRGlzcGxheVR5cGVzRW51bS5mbGV4IHx8IGN1cnJlbnRQcm9wZXJ0aWVzID09PSBEaXNwbGF5VHlwZXNFbnVtWydpbmxpbmUtZmxleCddKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldEdyaWQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUZsZXhDb21wb25lbnRzU3R5bGVTaGVldCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RmxleEFzQ2hpbGRyZW5Jbml0aWFsVmFsdWVzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5mbGV4Q29udGFpbmVyQXNDaGlsZHJlbik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9wZXJ0aWVzID09PSBEaXNwbGF5VHlwZXNFbnVtLmdyaWRcbiAgICAgICAgICAgICAgICB8fCBjdXJyZW50UHJvcGVydGllcyA9PT0gRGlzcGxheVR5cGVzRW51bVsnaW5saW5lLWdyaWQnXVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldEZsZXgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUdyaWRDb21wb25lbnRzU3R5bGVTaGVldCgpO1xuICAgICAgICAgICAgdGhpcy5zZXRHcmlkQXNDaGlsZHJlbkluaXRpYWxWYWx1ZXMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmdyaWRDb250YWluZXJBc0NoaWxkcmVuKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldEZsZXgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0R3JpZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVGbGV4QXNDaGlsZHJlbkNvbnRhaW5lcigpIHtcbiAgICAgICAgdGhpcy5hbGlnblNlbGZTZWxlY3RvciA9IG5ldyBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50KFxuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCxcbiAgICAgICAgICAgICdhbGlnbi1zZWxmJyxcbiAgICAgICAgICAgICdBbGlnbiBTZWxmJyxcbiAgICAgICAgICAgIG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihBbGlnbkZsZXhTZWxmRW51bSlcbiAgICAgICAgICAgICAgICAuYnVpbGQoKSxcbiAgICAgICAgICAgIEV2ZW50VHlwZUVudW0uY2hhbmdlXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5mbGV4R3Jvd0lucHV0ID0gbmV3IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQoXG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0LFxuICAgICAgICAgICAgJ2ZsZXgtZ3JvdycsXG4gICAgICAgICAgICAnRmxleCBHcm93JyxcbiAgICAgICAgICAgIG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS5udW1iZXIpXG4gICAgICAgICAgICAgICAgLnNldE1heCgxMDAwKVxuICAgICAgICAgICAgICAgIC5zZXRNaW4oMClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKSxcbiAgICAgICAgICAgIEV2ZW50VHlwZUVudW0uaW5wdXRcbiAgICAgICAgKS5zZXRaZXJvVmFsdWUoMClcblxuICAgICAgICB0aGlzLmZsZXhTaHJpbmtJbnB1dCA9IG5ldyBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50KFxuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCxcbiAgICAgICAgICAgICdmbGV4LXNocmluaycsXG4gICAgICAgICAgICAnRmxleCBTaHJpbmsnLFxuICAgICAgICAgICAgbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLm51bWJlcilcbiAgICAgICAgICAgICAgICAuc2V0TWF4KDEwMDApXG4gICAgICAgICAgICAgICAgLnNldE1pbigwKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpLFxuICAgICAgICAgICAgRXZlbnRUeXBlRW51bS5pbnB1dFxuICAgICAgICApLnNldFplcm9WYWx1ZSgwKVxuXG5cbiAgICAgICAgdGhpcy5mbGV4QmFzaXNJbnB1dCA9IG5ldyBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50KFxuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCxcbiAgICAgICAgICAgICdmbGV4LWJhc2lzJyxcbiAgICAgICAgICAgICdGbGV4IEJhc2lzKCUpJyxcbiAgICAgICAgICAgIG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS5udW1iZXIpXG4gICAgICAgICAgICAgICAgLnNldE1heCgxMDAwKVxuICAgICAgICAgICAgICAgIC5zZXRNaW4oMClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKSxcbiAgICAgICAgICAgIEV2ZW50VHlwZUVudW0uaW5wdXQsXG4gICAgICAgICAgICAnJSdcbiAgICAgICAgKS5zZXRaZXJvVmFsdWUoMClcblxuICAgICAgICByZXR1cm4gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5ib3JkZXIsICcxcHggc29saWQgIzRDQUY1MCcpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ucGFkZGluZywgJzNweCcpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0Rpc3BsYXkgRmxleCBhcyBDaGlsZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmFsaWduU2VsZlNlbGVjdG9yLmNvbXBvbmVudClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5mbGV4R3Jvd0lucHV0LmNvbXBvbmVudClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5mbGV4U2hyaW5rSW5wdXQuY29tcG9uZW50KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmZsZXhCYXNpc0lucHV0LmNvbXBvbmVudClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEZsZXhBc0NoaWxkcmVuSW5pdGlhbFZhbHVlcygpIHtcbiAgICAgICAgdGhpcy5hbGlnblNlbGZTZWxlY3Rvci5zZXRWYWx1ZSh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydhbGlnbi1zZWxmJ10gfHwgJycpO1xuICAgICAgICB0aGlzLmZsZXhHcm93SW5wdXQuc2V0VmFsdWUoYCR7cGFyc2VJbnQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZmxleC1ncm93J10pIHx8IDB9YCk7XG4gICAgICAgIHRoaXMuZmxleFNocmlua0lucHV0LnNldFZhbHVlKGAke3BhcnNlSW50KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2ZsZXgtc2hyaW5rJ10pIHx8IDB9YCk7XG4gICAgICAgIHRoaXMuZmxleEJhc2lzSW5wdXQuc2V0VmFsdWUoYCR7cGFyc2VJbnQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZmxleC1iYXNpcyddKSB8fCAwfWApO1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlR3JpZEFzQ2hpbGRyZW5Db250YWluZXIoKSB7XG4gICAgICAgIHRoaXMuZ3JpZENvbHVtblN0YXJ0SW5wdXQgPSBuZXcgR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudChcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQsXG4gICAgICAgICAgICAnZ3JpZC1jb2x1bW4tc3RhcnQnLFxuICAgICAgICAgICAgJ0dyaWQgQ29sdW1uIFN0YXJ0JyxcbiAgICAgICAgICAgIG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS50ZXh0KS5idWlsZCgpLFxuICAgICAgICAgICAgRXZlbnRUeXBlRW51bS5pbnB1dFxuICAgICAgICApXG5cbiAgICAgICAgdGhpcy5ncmlkQ29sdW1uRW5kSW5wdXQgPSBuZXcgR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudChcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQsXG4gICAgICAgICAgICAnZ3JpZC1jb2x1bW4tZW5kJyxcbiAgICAgICAgICAgICdHcmlkIENvbHVtbiBFbmQnLFxuICAgICAgICAgICAgbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLnRleHQpLmJ1aWxkKCksXG4gICAgICAgICAgICBFdmVudFR5cGVFbnVtLmlucHV0XG4gICAgICAgIClcblxuICAgICAgICB0aGlzLmdyaWRSb3dTdGFydElucHV0ID0gbmV3IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQoXG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0LFxuICAgICAgICAgICAgJ2dyaWQtcm93LXN0YXJ0JyxcbiAgICAgICAgICAgICdHcmlkIFJvdyBTdGFydCcsXG4gICAgICAgICAgICBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0udGV4dCkuYnVpbGQoKSxcbiAgICAgICAgICAgIEV2ZW50VHlwZUVudW0uaW5wdXRcbiAgICAgICAgKVxuXG4gICAgICAgIHRoaXMuZ3JpZFJvd0VuZElucHV0ID0gbmV3IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQoXG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0LFxuICAgICAgICAgICAgJ2dyaWQtcm93LWVuZCcsXG4gICAgICAgICAgICAnR3JpZCBSb3cgRW5kJyxcbiAgICAgICAgICAgIG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS50ZXh0KS5idWlsZCgpLFxuICAgICAgICAgICAgRXZlbnRUeXBlRW51bS5pbnB1dFxuICAgICAgICApXG5cbiAgICAgICAgdGhpcy5ncmlkSnVzdGlmeVNlbGYgPSBuZXcgR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudChcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQsXG4gICAgICAgICAgICAnanVzdGlmeS1zZWxmJyxcbiAgICAgICAgICAgICdHcmlkIEp1c3RpZnkgU2VsZicsXG4gICAgICAgICAgICBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIoSnVzdGlmeUdyaWRTZWxmRW51bSkuYnVpbGQoKSxcbiAgICAgICAgICAgIEV2ZW50VHlwZUVudW0uY2hhbmdlXG4gICAgICAgIClcblxuICAgICAgICB0aGlzLmdyaWRBbGlnblNlbGYgPSBuZXcgR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudChcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQsXG4gICAgICAgICAgICAnYWxpZ24tc2VsZicsXG4gICAgICAgICAgICAnR3JpZCBBbGlnbiBTZWxmJyxcbiAgICAgICAgICAgIG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihBbGlnbkdyaWRTZWxmRW51bSkuYnVpbGQoKSxcbiAgICAgICAgICAgIEV2ZW50VHlwZUVudW0uY2hhbmdlXG4gICAgICAgIClcblxuICAgICAgICByZXR1cm4gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5ib3JkZXIsICcxcHggc29saWQgIzRDQUY1MCcpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ucGFkZGluZywgJzNweCcpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0Rpc3BsYXkgR3JpZCBhcyBDaGlsZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmdyaWRDb2x1bW5TdGFydElucHV0LmNvbXBvbmVudClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5ncmlkQ29sdW1uRW5kSW5wdXQuY29tcG9uZW50KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmdyaWRSb3dTdGFydElucHV0LmNvbXBvbmVudClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5ncmlkUm93RW5kSW5wdXQuY29tcG9uZW50KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmdyaWRKdXN0aWZ5U2VsZi5jb21wb25lbnQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuZ3JpZEFsaWduU2VsZi5jb21wb25lbnQpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRHcmlkQXNDaGlsZHJlbkluaXRpYWxWYWx1ZXMoKSB7XG4gICAgICAgIHRoaXMuZ3JpZENvbHVtblN0YXJ0SW5wdXQuc2V0VmFsdWUodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZ3JpZC1jb2x1bW4tc3RhcnQnXSB8fCAnJyk7XG4gICAgICAgIHRoaXMuZ3JpZENvbHVtbkVuZElucHV0LnNldFZhbHVlKHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2dyaWQtY29sdW1uLWVuZCddIHx8ICcnKTtcbiAgICAgICAgdGhpcy5ncmlkUm93U3RhcnRJbnB1dC5zZXRWYWx1ZSh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydncmlkLXJvdy1zdGFydCddIHx8ICcnKTtcbiAgICAgICAgdGhpcy5ncmlkUm93RW5kSW5wdXQuc2V0VmFsdWUodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZ3JpZC1yb3ctZW5kJ10gfHwgJycpO1xuICAgICAgICB0aGlzLmdyaWRKdXN0aWZ5U2VsZi5zZXRWYWx1ZSh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydqdXN0aWZ5LXNlbGYnXSB8fCAnJyk7XG4gICAgICAgIHRoaXMuZ3JpZEFsaWduU2VsZi5zZXRWYWx1ZSh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydhbGlnbi1zZWxmJ10gfHwgJycpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVzZXRGbGV4KCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5mbGV4Q29udGFpbmVyQXNDaGlsZHJlbik7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXNldEdyaWQoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLmdyaWRDb250YWluZXJBc0NoaWxkcmVuKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgY2xhc3NOYW1lVXBkYXRlZChuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCA9IENzc1N0eWxlU2hlZXQuZ2V0UnVsZVN0eWxlcyhuYW1lKTtcbiAgICAgICAgdGhpcy5zZXRDb21wb25lbnRBY2NvcmRpbmdUb1NlbGVjdG9yKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVGbGV4Q29tcG9uZW50c1N0eWxlU2hlZXQoKSB7XG4gICAgICAgIHRoaXMuYWxpZ25TZWxmU2VsZWN0b3IudXBkYXRlU3R5bGVTaGVldCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0KTtcbiAgICAgICAgdGhpcy5mbGV4R3Jvd0lucHV0LnVwZGF0ZVN0eWxlU2hlZXQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCk7XG4gICAgICAgIHRoaXMuZmxleFNocmlua0lucHV0LnVwZGF0ZVN0eWxlU2hlZXQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCk7XG4gICAgICAgIHRoaXMuZmxleEJhc2lzSW5wdXQudXBkYXRlU3R5bGVTaGVldCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUdyaWRDb21wb25lbnRzU3R5bGVTaGVldCgpIHtcbiAgICAgICAgdGhpcy5ncmlkQ29sdW1uU3RhcnRJbnB1dC51cGRhdGVTdHlsZVNoZWV0KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQpO1xuICAgICAgICB0aGlzLmdyaWRDb2x1bW5FbmRJbnB1dC51cGRhdGVTdHlsZVNoZWV0KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQpO1xuICAgICAgICB0aGlzLmdyaWRSb3dTdGFydElucHV0LnVwZGF0ZVN0eWxlU2hlZXQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCk7XG4gICAgICAgIHRoaXMuZ3JpZFJvd0VuZElucHV0LnVwZGF0ZVN0eWxlU2hlZXQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCk7XG4gICAgICAgIHRoaXMuZ3JpZEp1c3RpZnlTZWxmLnVwZGF0ZVN0eWxlU2hlZXQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCk7XG4gICAgICAgIHRoaXMuZ3JpZEFsaWduU2VsZi51cGRhdGVTdHlsZVNoZWV0KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQpO1xuICAgIH1cbn1cbiIsImltcG9ydCBDbGFzc0NoYW5nZU9ic2VydmVySW50ZXJmYWNlIGZyb20gJy4uL2ludGVyZmFjZXMvY2xhc3MtY2hhbmdlLW9ic2VydmVyLmludGVyZmFjZSc7XG5cbmltcG9ydCBDc3NTdHlsZVNoZWV0IGZyb20gJy4uLy4uL2Nzcy1zdHlsZXNoZWV0L2Nzcy1zdHlsZXNoZWV0JztcblxuaW1wb3J0IENvbnRhaW5lckJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0NvbnRhaW5lckJ1aWxkZXInO1xuaW1wb3J0IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyIGZyb20gJy4uL21vZGVscy9TZWxlY3RvckZyb21FbnVtQnVpbGRlcic7XG5pbXBvcnQgTGFiZWxCdWlsZGVyIGZyb20gJy4uL21vZGVscy9MYWJlbEJ1aWxkZXInO1xuaW1wb3J0IElucHV0QnVpbGRlciBmcm9tICcuLi9tb2RlbHMvSW5wdXRCdWlsZGVyJztcbmltcG9ydCBUZXh0YXJlYUJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL1RleHRBcmVhQnVpbGRlcic7XG5cbmltcG9ydCBJbnB1dEFuZFVuaXRzU2VsZWN0b3JDb21wb25lbnQgZnJvbSAnLi9pbnB1dC13aXRoLXVuaXRzLXNlbGVjdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudCBmcm9tICcuL2dlbmVyaWMtY3NzLXByb3BlcnR5LW11dGF0b3IuY29tcG9uZW50JztcblxuaW1wb3J0IHsgRGlzcGxheVR5cGVzRW51bSB9IGZyb20gJy4uL2VudW1zL2Rpc3BsYXktdHlwZXMuZW51bSc7XG5pbXBvcnQgeyBGbGV4RGlyZWN0aW9uRW51bSB9IGZyb20gJy4uL2VudW1zL2ZsZXgtZGlyZWN0aW9uLmVudW0nO1xuaW1wb3J0IHsgU3R5bGVOYW1lRW51bSB9IGZyb20gJy4uL2VudW1zL3N0eWxlLW5hbWUuZW51bSc7XG5pbXBvcnQgeyBGbGV4V3JhcEVudW0gfSBmcm9tICcuLi9lbnVtcy9mbGV4LXdyYXAuZW51bSc7XG5pbXBvcnQgeyBBbGlnbkZsZXhJdGVtc0VudW0gfSBmcm9tICcuLi9lbnVtcy9hbGlnbi1mbGV4LWl0ZW1zLmVudW0nO1xuaW1wb3J0IHsgSnVzdGlmeUZsZXhDb250ZW50RW51bSB9IGZyb20gJy4uL2VudW1zL2p1c3RpZnktZmxleC1jb250ZW50LmVudW0nO1xuaW1wb3J0IHsgQWxpZ25GbGV4Q29udGVudEVudW0gfSBmcm9tICcuLi9lbnVtcy9hbGlnbi1mbGV4LWNvbnRlbnQuZW51bSc7XG5pbXBvcnQgeyBJbnB1dFR5cGVFbnVtIH0gZnJvbSAnLi4vZW51bXMvaW5wdXQtdHlwZS5lbnVtJztcbmltcG9ydCB7IEV2ZW50VHlwZUVudW0gfSBmcm9tICcuLi9lbnVtcy9ldmVudC10eXBlLmVudW0nO1xuaW1wb3J0IHsgSnVzdGlmeUdyaWRJdGVtc0VudW0gfSBmcm9tICcuLi9lbnVtcy9qdXN0aWZ5LWdyaWQtaXRlbXMuZW51bSc7XG5pbXBvcnQgeyBBbGlnbkdyaWRJdGVtc0VudW0gfSBmcm9tICcuLi9lbnVtcy9hbGlnbi1ncmlkLWl0ZW1zLmVudW0nO1xuaW1wb3J0IHsgSnVzdGlmeUdyaWRDb250ZW50RW51bSB9IGZyb20gJy4uL2VudW1zL2p1c3RpZnktZ3JpZC1jb250ZW50LmVudW0nO1xuaW1wb3J0IHsgQWxpZ25HcmlkQ29udGVudEVudW0gfSBmcm9tICcuLi9lbnVtcy9hbGlnbi1ncmlkLWNvbnRlbnQuZW51bSc7XG5pbXBvcnQgeyBHcmlkQXV0b0Zsb3dFbnVtIH0gZnJvbSAnLi4vZW51bXMvZ3JpZC1hdXRvLWZsb3cuZW51bSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzcGxheUFzUGFyZW50Q29tcG9uZW50IGltcGxlbWVudHMgQ2xhc3NDaGFuZ2VPYnNlcnZlckludGVyZmFjZSB7XG4gICAgcHJpdmF0ZSBkb21FbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBkb21FbGVtZW50U3R5bGVTaGVldDogQ1NTU3R5bGVEZWNsYXJhdGlvbjtcblxuICAgIHByaXZhdGUgZGlzcGxheVNlbGVjdG9yOiBIVE1MU2VsZWN0RWxlbWVudDtcblxuICAgIHByaXZhdGUgZmxleENvbnRhaW5lckFzUGFyZW50OiBDb250YWluZXJCdWlsZGVyO1xuICAgIHByaXZhdGUgZmxleERpcmVjdGlvblNlbGVjdG9yOiBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50O1xuICAgIHByaXZhdGUgZmxleFdyYXBTZWxlY3RvcjogR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudDtcbiAgICBwcml2YXRlIGFsaWduSXRlbXNTZWxlY3RvcjogR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudDtcbiAgICBwcml2YXRlIGp1c3RpZnlDb250ZW50U2VsZWN0b3I6IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBhbGlnbkNvbnRlbnRTZWxlY3RvcjogR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudDtcblxuICAgIHByaXZhdGUgZ3JpZENvbnRhaW5lckFzUGFyZW50OiBDb250YWluZXJCdWlsZGVyO1xuICAgIHByaXZhdGUgZ3JpZFRlbXBsYXRlQ29sdW1uc0lucHV0OiBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50O1xuICAgIHByaXZhdGUgZ3JpZFRlbXBsYXRlUm93c0lucHV0OiBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50O1xuICAgIHByaXZhdGUgZ3JpZEF1dG9Db2x1bW5zSW5wdXQ6IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBncmlkQXV0b1Jvd3NJbnB1dDogR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudDtcbiAgICBwcml2YXRlIGdyaWRUZW1wbGF0ZUFyZWFzVGV4dGFyZWE6IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBncmlkSnVzdGlmeUl0ZW1zU2VsZWN0b3I6IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBncmlkQWxpZ25JdGVtc1NlbGVjdG9yOiBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50O1xuICAgIHByaXZhdGUgZ3JpZEp1c3RpZnlDb250ZW50U2VsZWN0b3I6IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBncmlkQWxpZ25Db250ZW50U2VsZWN0b3I6IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBncmlkQXV0b0Zsb3dTZWxlY3RvcjogR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudDtcbiAgICBwcml2YXRlIGdyaWRDb2x1bW5HYXBJbnB1dDogSW5wdXRBbmRVbml0c1NlbGVjdG9yQ29tcG9uZW50O1xuICAgIHByaXZhdGUgZ3JpZFJvd0dhcElucHV0OiBJbnB1dEFuZFVuaXRzU2VsZWN0b3JDb21wb25lbnQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihkb21FbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0ID0gQ3NzU3R5bGVTaGVldC5nZXRSdWxlU3R5bGVzKHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3RbMF0pO1xuICAgICAgICB0aGlzLmFkZENvbXBvbmVudHMoKTtcbiAgICB9XG5cbiAgICBnZXQgY29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRDb21wb25lbnRzKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVByb3BlcnR5ID0gdGhpcy51cGRhdGVQcm9wZXJ0eS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuZGlzcGxheVNlbGVjdG9yID0gbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKERpc3BsYXlUeXBlc0VudW0pXG4gICAgICAgICAgICAuc2VsZWN0T3B0aW9uKHRoaXMuZ2V0Q3VycmVudFByb3BlcnRpZXMoJ2Rpc3BsYXknKSlcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnVwZGF0ZVByb3BlcnR5KVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydmbGV4LWRpcmVjdGlvbiddLCBGbGV4RGlyZWN0aW9uRW51bS5jb2x1bW4pXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW1bJ2FsaWduLWl0ZW1zJ10sIEFsaWduRmxleEl0ZW1zRW51bS5zdHJldGNoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmJvcmRlciwgJzFweCBzb2xpZCAjNENBRjUwJylcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5wYWRkaW5nLCAnM3B4JylcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnRGlzcGxheSBTZXR0aW5ncycpXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmRpc3BsYXlTZWxlY3RvcilcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG5cbiAgICAgICAgdGhpcy5mbGV4Q29udGFpbmVyQXNQYXJlbnQgPSB0aGlzLmNyZWF0ZUZsZXhBc1BhcmVudENvbnRhaW5lcigpO1xuICAgICAgICB0aGlzLmdyaWRDb250YWluZXJBc1BhcmVudCA9IHRoaXMuY3JlYXRlR3JpZEFzUGFyZW50Q29udGFpbmVyKCk7XG4gICAgICAgIHRoaXMuc2V0Q29tcG9uZW50QWNjb3JkaW5nVG9TZWxlY3RvcigpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlUHJvcGVydHkoKSB7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2Rpc3BsYXknXSA9IHRoaXMuZGlzcGxheVNlbGVjdG9yLnZhbHVlO1xuICAgICAgICB0aGlzLnNldENvbXBvbmVudEFjY29yZGluZ1RvU2VsZWN0b3IodHJ1ZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRDdXJyZW50UHJvcGVydGllcyhwcm9wZXJ0eTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbcHJvcGVydHldO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0Q29tcG9uZW50QWNjb3JkaW5nVG9TZWxlY3RvcihyZXNldD86IGJvb2xlYW4pIHtcbiAgICAgICAgY29uc3QgY3VycmVudFByb3BlcnRpZXMgPSB0aGlzLmdldEN1cnJlbnRQcm9wZXJ0aWVzKCdkaXNwbGF5Jyk7XG5cbiAgICAgICAgaWYgKGN1cnJlbnRQcm9wZXJ0aWVzID09PSBEaXNwbGF5VHlwZXNFbnVtLmZsZXggfHwgY3VycmVudFByb3BlcnRpZXMgPT09IERpc3BsYXlUeXBlc0VudW1bJ2lubGluZS1mbGV4J10pIHtcbiAgICAgICAgICAgIGlmKHJlc2V0KXtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0R3JpZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy51cGRhdGVGbGV4Q29tcG9uZW50c1N0eWxlU2hlZXQoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0RmxleEFzUGFyZW50SW5pdGlhbFZhbHVlcygpO1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5mbGV4Q29udGFpbmVyQXNQYXJlbnQuYnVpbGQoKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICBjdXJyZW50UHJvcGVydGllcyA9PT0gRGlzcGxheVR5cGVzRW51bS5ncmlkXG4gICAgICAgICAgICB8fCBjdXJyZW50UHJvcGVydGllcyA9PT0gRGlzcGxheVR5cGVzRW51bVsnaW5saW5lLWdyaWQnXVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGlmKHJlc2V0KXtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0RmxleCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy51cGRhdGVHcmlkQ29tcG9uZW50c1N0eWxlU2hlZXQoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0R3JpZEFzUGFyZW50SW5pdGlhbFZhbHVlcygpO1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5ncmlkQ29udGFpbmVyQXNQYXJlbnQuYnVpbGQoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0RmxleCgpO1xuICAgICAgICAgICAgdGhpcy5yZXNldEdyaWQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlRmxleEFzUGFyZW50Q29udGFpbmVyKCkge1xuICAgICAgICB0aGlzLmZsZXhEaXJlY3Rpb25TZWxlY3RvciA9IG5ldyBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQsXG4gICAgICAgICAgICAnZmxleC1kaXJlY3Rpb24nLFxuICAgICAgICAgICAgJ0ZsZXggRGlyZWN0aW9uJyxcbiAgICAgICAgICAgIG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihGbGV4RGlyZWN0aW9uRW51bSkuYnVpbGQoKSxcbiAgICAgICAgICAgIEV2ZW50VHlwZUVudW0uY2hhbmdlXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5mbGV4V3JhcFNlbGVjdG9yID0gbmV3IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCxcbiAgICAgICAgICAgICdmbGV4LXdyYXAnLFxuICAgICAgICAgICAgJ0ZsZXggV3JhcCcsXG4gICAgICAgICAgICBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIoRmxleFdyYXBFbnVtKS5idWlsZCgpLFxuICAgICAgICAgICAgRXZlbnRUeXBlRW51bS5jaGFuZ2VcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmFsaWduSXRlbXNTZWxlY3RvciA9IG5ldyBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQsXG4gICAgICAgICAgICAnYWxpZ24taXRlbXMnLFxuICAgICAgICAgICAgJ0FsaWduIEl0ZW1zJyxcbiAgICAgICAgICAgIG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihBbGlnbkZsZXhJdGVtc0VudW0pLmJ1aWxkKCksXG4gICAgICAgICAgICBFdmVudFR5cGVFbnVtLmNoYW5nZVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuanVzdGlmeUNvbnRlbnRTZWxlY3RvciA9IG5ldyBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQsXG4gICAgICAgICAgICAnanVzdGlmeS1jb250ZW50JyxcbiAgICAgICAgICAgICdKdXN0aWZ5IENvbnRlbnQnLFxuICAgICAgICAgICAgbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKEp1c3RpZnlGbGV4Q29udGVudEVudW0pLmJ1aWxkKCksXG4gICAgICAgICAgICBFdmVudFR5cGVFbnVtLmNoYW5nZVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuYWxpZ25Db250ZW50U2VsZWN0b3IgPSBuZXcgR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0LFxuICAgICAgICAgICAgJ2FsaWduLWNvbnRlbnQnLFxuICAgICAgICAgICAgJ0FsaWduIENvbnRlbnQnLFxuICAgICAgICAgICAgbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKEFsaWduRmxleENvbnRlbnRFbnVtKS5idWlsZCgpLFxuICAgICAgICAgICAgRXZlbnRUeXBlRW51bS5jaGFuZ2VcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5ib3JkZXIsICcxcHggc29saWQgIzRDQUY1MCcpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ucGFkZGluZywgJzNweCcpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0Rpc3BsYXkgRmxleCBhcyBQYXJlbnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5mbGV4RGlyZWN0aW9uU2VsZWN0b3IuY29tcG9uZW50KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmZsZXhXcmFwU2VsZWN0b3IuY29tcG9uZW50KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmFsaWduSXRlbXNTZWxlY3Rvci5jb21wb25lbnQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuanVzdGlmeUNvbnRlbnRTZWxlY3Rvci5jb21wb25lbnQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuYWxpZ25Db250ZW50U2VsZWN0b3IuY29tcG9uZW50KVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRGbGV4QXNQYXJlbnRJbml0aWFsVmFsdWVzKCkge1xuICAgICAgICB0aGlzLmZsZXhEaXJlY3Rpb25TZWxlY3Rvci5zZXRWYWx1ZSh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydmbGV4LWRpcmVjdGlvbiddIHx8ICcnKTtcbiAgICAgICAgdGhpcy5mbGV4V3JhcFNlbGVjdG9yLnNldFZhbHVlKHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2ZsZXgtd3JhcCddIHx8ICcnKTtcbiAgICAgICAgdGhpcy5hbGlnbkl0ZW1zU2VsZWN0b3Iuc2V0VmFsdWUodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYWxpZ24taXRlbXMnXSB8fCAnJyk7XG4gICAgICAgIHRoaXMuanVzdGlmeUNvbnRlbnRTZWxlY3Rvci5zZXRWYWx1ZSh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydqdXN0aWZ5LWNvbnRlbnQnXSB8fCAnJyk7XG4gICAgICAgIHRoaXMuYWxpZ25Db250ZW50U2VsZWN0b3Iuc2V0VmFsdWUodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYWxpZ24tY29udGVudCddIHx8ICcnKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZUdyaWRBc1BhcmVudENvbnRhaW5lcigpIHtcbiAgICAgICAgdGhpcy5ncmlkVGVtcGxhdGVDb2x1bW5zSW5wdXQgPSBuZXcgR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0LFxuICAgICAgICAgICAgJ2dyaWQtdGVtcGxhdGUtY29sdW1ucycsXG4gICAgICAgICAgICAnR3JpZCBUZW1wbGF0ZSBDb2x1bW5zJyxcbiAgICAgICAgICAgIG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS50ZXh0KS5idWlsZCgpLFxuICAgICAgICAgICAgRXZlbnRUeXBlRW51bS5pbnB1dCk7XG5cbiAgICAgICAgdGhpcy5ncmlkVGVtcGxhdGVSb3dzSW5wdXQgPSBuZXcgR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0LFxuICAgICAgICAgICAgJ2dyaWQtdGVtcGxhdGUtcm93cycsXG4gICAgICAgICAgICAnR3JpZCBUZW1wbGF0ZSBSb3dzJyxcbiAgICAgICAgICAgIG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS50ZXh0KS5idWlsZCgpLFxuICAgICAgICAgICAgRXZlbnRUeXBlRW51bS5pbnB1dCk7XG5cbiAgICAgICAgdGhpcy5ncmlkQXV0b0NvbHVtbnNJbnB1dCA9IG5ldyBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQsXG4gICAgICAgICAgICAnZ3JpZC1hdXRvLWNvbHVtbnMnLFxuICAgICAgICAgICAgJ0dyaWQgQXV0byBDb2x1bW5zJyxcbiAgICAgICAgICAgIG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS50ZXh0KS5idWlsZCgpLFxuICAgICAgICAgICAgRXZlbnRUeXBlRW51bS5pbnB1dCk7XG5cbiAgICAgICAgdGhpcy5ncmlkQXV0b1Jvd3NJbnB1dCA9IG5ldyBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQsXG4gICAgICAgICAgICAnZ3JpZC1hdXRvLXJvd3MnLFxuICAgICAgICAgICAgJ0dyaWQgQXV0byBSb3dzJyxcbiAgICAgICAgICAgIG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS50ZXh0KS5idWlsZCgpLFxuICAgICAgICAgICAgRXZlbnRUeXBlRW51bS5pbnB1dCk7XG5cbiAgICAgICAgdGhpcy5ncmlkVGVtcGxhdGVBcmVhc1RleHRhcmVhID0gbmV3IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCxcbiAgICAgICAgICAgICdncmlkLXRlbXBsYXRlLWFyZWFzJyxcbiAgICAgICAgICAgICdHcmlkIFRlbXBsYXRlIEFyZWFzJyxcbiAgICAgICAgICAgIG5ldyBUZXh0YXJlYUJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLnJlc2l6ZSwgJ3ZlcnRpY2FsJylcbiAgICAgICAgICAgICAgICAuYnVpbGQoKSxcbiAgICAgICAgICAgIEV2ZW50VHlwZUVudW0uaW5wdXQpO1xuXG4gICAgICAgIHRoaXMuZ3JpZEp1c3RpZnlJdGVtc1NlbGVjdG9yID0gbmV3IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCxcbiAgICAgICAgICAgICdqdXN0aWZ5LWl0ZW1zJyxcbiAgICAgICAgICAgICdHcmlkIEp1c3RpZnkgSXRlbXMnLFxuICAgICAgICAgICAgbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKEp1c3RpZnlHcmlkSXRlbXNFbnVtKS5idWlsZCgpLFxuICAgICAgICAgICAgRXZlbnRUeXBlRW51bS5jaGFuZ2UpO1xuXG4gICAgICAgIHRoaXMuZ3JpZEFsaWduSXRlbXNTZWxlY3RvciA9IG5ldyBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQsXG4gICAgICAgICAgICAnYWxpZ24taXRlbXMnLFxuICAgICAgICAgICAgJ0dyaWQgQWxpZ24gSXRlbXMnLFxuICAgICAgICAgICAgbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKEFsaWduR3JpZEl0ZW1zRW51bSkuYnVpbGQoKSxcbiAgICAgICAgICAgIEV2ZW50VHlwZUVudW0uY2hhbmdlKTtcblxuICAgICAgICB0aGlzLmdyaWRKdXN0aWZ5Q29udGVudFNlbGVjdG9yID0gbmV3IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCxcbiAgICAgICAgICAgICdqdXN0aWZ5LWNvbnRlbnQnLFxuICAgICAgICAgICAgJ0dyaWQgSnVzdGlmeSBDb250ZW50JyxcbiAgICAgICAgICAgIG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihKdXN0aWZ5R3JpZENvbnRlbnRFbnVtKS5idWlsZCgpLFxuICAgICAgICAgICAgRXZlbnRUeXBlRW51bS5jaGFuZ2UpO1xuXG4gICAgICAgIHRoaXMuZ3JpZEFsaWduQ29udGVudFNlbGVjdG9yID0gbmV3IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCxcbiAgICAgICAgICAgICdhbGlnbi1jb250ZW50JyxcbiAgICAgICAgICAgICdHcmlkIEFsaWduIENvbnRlbnQnLFxuICAgICAgICAgICAgbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKEFsaWduR3JpZENvbnRlbnRFbnVtKS5idWlsZCgpLFxuICAgICAgICAgICAgRXZlbnRUeXBlRW51bS5jaGFuZ2UpO1xuXG4gICAgICAgIHRoaXMuZ3JpZEF1dG9GbG93U2VsZWN0b3IgPSBuZXcgR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0LFxuICAgICAgICAgICAgJ2dyaWQtYXV0by1mbG93JyxcbiAgICAgICAgICAgICdHcmlkIEF1dG8gRmxvdycsXG4gICAgICAgICAgICBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIoR3JpZEF1dG9GbG93RW51bSkuYnVpbGQoKSxcbiAgICAgICAgICAgIEV2ZW50VHlwZUVudW0uY2hhbmdlKTtcblxuICAgICAgICB0aGlzLmdyaWRDb2x1bW5HYXBJbnB1dCA9IG5ldyBJbnB1dEFuZFVuaXRzU2VsZWN0b3JDb21wb25lbnQoXG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0LFxuICAgICAgICAgICAgJ2NvbHVtbi1nYXAnLFxuICAgICAgICAgICAgJ0dyaWQgQ29sdW1uIEdhcCdcbiAgICAgICAgKVxuICAgICAgICAgICAgLnNldE1pblZhbHVlKDApXG4gICAgICAgICAgICAuc2V0WmVyb1ZhbHVlKDApXG5cbiAgICAgICAgdGhpcy5ncmlkUm93R2FwSW5wdXQgPSBuZXcgSW5wdXRBbmRVbml0c1NlbGVjdG9yQ29tcG9uZW50KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQsICdyb3ctZ2FwJywgJ0dyaWQgUm93IEdhcCcpXG4gICAgICAgICAgICAuc2V0TWluVmFsdWUoMClcbiAgICAgICAgICAgIC5zZXRaZXJvVmFsdWUoMClcblxuICAgICAgICByZXR1cm4gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5ib3JkZXIsICcxcHggc29saWQgIzRDQUY1MCcpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ucGFkZGluZywgJzNweCcpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0Rpc3BsYXkgR3JpZCBhcyBQYXJlbnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5ncmlkVGVtcGxhdGVDb2x1bW5zSW5wdXQuY29tcG9uZW50KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmdyaWRUZW1wbGF0ZVJvd3NJbnB1dC5jb21wb25lbnQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuZ3JpZEF1dG9Db2x1bW5zSW5wdXQuY29tcG9uZW50KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmdyaWRBdXRvUm93c0lucHV0LmNvbXBvbmVudClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5ncmlkVGVtcGxhdGVBcmVhc1RleHRhcmVhLmNvbXBvbmVudClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5ncmlkSnVzdGlmeUl0ZW1zU2VsZWN0b3IuY29tcG9uZW50KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmdyaWRBbGlnbkl0ZW1zU2VsZWN0b3IuY29tcG9uZW50KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmdyaWRKdXN0aWZ5Q29udGVudFNlbGVjdG9yLmNvbXBvbmVudClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5ncmlkQWxpZ25Db250ZW50U2VsZWN0b3IuY29tcG9uZW50KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmdyaWRBdXRvRmxvd1NlbGVjdG9yLmNvbXBvbmVudClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5ncmlkQ29sdW1uR2FwSW5wdXQuY29tcG9uZW50KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmdyaWRSb3dHYXBJbnB1dC5jb21wb25lbnQpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEdyaWRBc1BhcmVudEluaXRpYWxWYWx1ZXMoKSB7XG4gICAgICAgIHRoaXMuZ3JpZFRlbXBsYXRlQ29sdW1uc0lucHV0LnNldFZhbHVlKHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2dyaWQtdGVtcGxhdGUtY29sdW1ucyddIHx8ICcnKTtcbiAgICAgICAgdGhpcy5ncmlkVGVtcGxhdGVSb3dzSW5wdXQuc2V0VmFsdWUodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZ3JpZC10ZW1wbGF0ZS1yb3dzJ10gfHwgJycpO1xuICAgICAgICB0aGlzLmdyaWRBdXRvQ29sdW1uc0lucHV0LnNldFZhbHVlKHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2dyaWQtYXV0by1jb2x1bW5zJ10gfHwgJycpO1xuICAgICAgICB0aGlzLmdyaWRBdXRvUm93c0lucHV0LnNldFZhbHVlKHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2dyaWQtYXV0by1yb3dzJ10gfHwgJycpO1xuICAgICAgICB0aGlzLmdyaWRUZW1wbGF0ZUFyZWFzVGV4dGFyZWEuc2V0VmFsdWUodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZ3JpZC10ZW1wbGF0ZS1hcmVhcyddIHx8ICcnKTtcbiAgICAgICAgdGhpcy5ncmlkSnVzdGlmeUl0ZW1zU2VsZWN0b3Iuc2V0VmFsdWUodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnanVzdGlmeS1pdGVtcyddIHx8ICcnKTtcbiAgICAgICAgdGhpcy5ncmlkQWxpZ25JdGVtc1NlbGVjdG9yLnNldFZhbHVlKHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2FsaWduLWl0ZW1zJ10gfHwgJycpO1xuICAgICAgICB0aGlzLmdyaWRKdXN0aWZ5Q29udGVudFNlbGVjdG9yLnNldFZhbHVlKHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2p1c3RpZnktY29udGVudCddIHx8ICcnKTtcbiAgICAgICAgdGhpcy5ncmlkQWxpZ25Db250ZW50U2VsZWN0b3Iuc2V0VmFsdWUodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYWxpZ24tY29udGVudCddIHx8ICcnKTtcbiAgICAgICAgdGhpcy5ncmlkQXV0b0Zsb3dTZWxlY3Rvci5zZXRWYWx1ZSh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydncmlkLWF1dG8tZmxvdyddIHx8ICcnKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlc2V0RmxleCgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuZmxleENvbnRhaW5lckFzUGFyZW50LmJ1aWxkKCkpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHVuZGVmaW5lZDtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2ZsZXgtZGlyZWN0aW9uJ10gPSAnJztcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2ZsZXgtd3JhcCddID0gJyc7XG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydhbGlnbi1pdGVtcyddID0gJyc7XG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydqdXN0aWZ5LWNvbnRlbnQnXSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYWxpZ24tY29udGVudCddID0gJyc7XG5cbiAgICAgICAgICAgIC8vIE5PVEU6IGRlY2lzaW9uOiBkZWxldGUgb25seSBjaGlsZHJlbiBzdHlsZXMgZm9yIGNsYXNzZXMgbmFtZWQgYXMgdGhlIGNvbXBvbmVudCBpZC5cbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5jaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgQ3NzU3R5bGVTaGVldC5nZXRSdWxlU3R5bGVzKGNoaWxkWyduYW1lJ10pWydhbGlnbi1zZWxmJ10gPSAnJztcbiAgICAgICAgICAgICAgICBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXMoY2hpbGRbJ25hbWUnXSlbJ2ZsZXgtZ3JvdyddID0gJyc7XG4gICAgICAgICAgICAgICAgQ3NzU3R5bGVTaGVldC5nZXRSdWxlU3R5bGVzKGNoaWxkWyduYW1lJ10pWydmbGV4LXNocmluayddID0gJyc7XG4gICAgICAgICAgICAgICAgQ3NzU3R5bGVTaGVldC5nZXRSdWxlU3R5bGVzKGNoaWxkWyduYW1lJ10pWydmbGV4LWJhc2lzJ10gPSAnJztcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHJlc2V0R3JpZCgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuZ3JpZENvbnRhaW5lckFzUGFyZW50LmJ1aWxkKCkpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHVuZGVmaW5lZDtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2dyaWQtdGVtcGxhdGUtY29sdW1ucyddID0gJyc7XG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydncmlkLXRlbXBsYXRlLXJvd3MnXSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZ3JpZC1hdXRvLWNvbHVtbnMnXSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZ3JpZC1hdXRvLXJvd3MnXSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZ3JpZC10ZW1wbGF0ZS1hcmVhcyddID0gJyc7XG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydqdXN0aWZ5LWl0ZW1zJ10gPSAnJztcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2dyaWQtYXV0by1mbG93J10gPSAnJztcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2NvbHVtbi1nYXAnXSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsncm93LWdhcCddID0gJyc7XG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydhbGlnbi1pdGVtcyddID0gJyc7XG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydqdXN0aWZ5LWNvbnRlbnQnXSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYWxpZ24tY29udGVudCddID0gJyc7XG5cbiAgICAgICAgICAgIC8vIE5PVEU6IGRlY2lzaW9uOiBkZWxldGUgb25seSBjaGlsZHJlbiBzdHlsZXMgZm9yIGNsYXNzZXMgbmFtZWQgYXMgdGhlIGNvbXBvbmVudCBpZC5cbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5jaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgQ3NzU3R5bGVTaGVldC5nZXRSdWxlU3R5bGVzKGNoaWxkWyduYW1lJ10pWydncmlkLWNvbHVtbi1zdGFydCddID0gJyc7XG4gICAgICAgICAgICAgICAgQ3NzU3R5bGVTaGVldC5nZXRSdWxlU3R5bGVzKGNoaWxkWyduYW1lJ10pWydncmlkLWNvbHVtbi1lbmQnXSA9ICcnO1xuICAgICAgICAgICAgICAgIENzc1N0eWxlU2hlZXQuZ2V0UnVsZVN0eWxlcyhjaGlsZFsnbmFtZSddKVsnZ3JpZC1yb3ctc3RhcnQnXSA9ICcnO1xuICAgICAgICAgICAgICAgIENzc1N0eWxlU2hlZXQuZ2V0UnVsZVN0eWxlcyhjaGlsZFsnbmFtZSddKVsnZ3JpZC1yb3ctZW5kJ10gPSAnJztcbiAgICAgICAgICAgICAgICBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXMoY2hpbGRbJ25hbWUnXSlbJ2p1c3RpZnktc2VsZiddID0gJyc7XG4gICAgICAgICAgICAgICAgQ3NzU3R5bGVTaGVldC5nZXRSdWxlU3R5bGVzKGNoaWxkWyduYW1lJ10pWydhbGlnbi1zZWxmJ10gPSAnJztcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgY2xhc3NOYW1lVXBkYXRlZChuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCA9IENzc1N0eWxlU2hlZXQuZ2V0UnVsZVN0eWxlcyhuYW1lKTtcblxuICAgICAgICBjb25zdCBjdXJyZW50UHJvcGVydGllcyA9IHRoaXMuZ2V0Q3VycmVudFByb3BlcnRpZXMoJ2Rpc3BsYXknKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5U2VsZWN0b3IudmFsdWUgPSBjdXJyZW50UHJvcGVydGllcztcblxuICAgICAgICB0aGlzLnNldENvbXBvbmVudEFjY29yZGluZ1RvU2VsZWN0b3IodHJ1ZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVGbGV4Q29tcG9uZW50c1N0eWxlU2hlZXQoKSB7XG4gICAgICAgIHRoaXMuZmxleERpcmVjdGlvblNlbGVjdG9yLnVwZGF0ZVN0eWxlU2hlZXQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCk7XG4gICAgICAgIHRoaXMuZmxleFdyYXBTZWxlY3Rvci51cGRhdGVTdHlsZVNoZWV0KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQpO1xuICAgICAgICB0aGlzLmFsaWduSXRlbXNTZWxlY3Rvci51cGRhdGVTdHlsZVNoZWV0KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQpO1xuICAgICAgICB0aGlzLmp1c3RpZnlDb250ZW50U2VsZWN0b3IudXBkYXRlU3R5bGVTaGVldCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0KTtcbiAgICAgICAgdGhpcy5hbGlnbkNvbnRlbnRTZWxlY3Rvci51cGRhdGVTdHlsZVNoZWV0KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlR3JpZENvbXBvbmVudHNTdHlsZVNoZWV0KCkge1xuICAgICAgICB0aGlzLmdyaWRUZW1wbGF0ZUNvbHVtbnNJbnB1dC51cGRhdGVTdHlsZVNoZWV0KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQpO1xuICAgICAgICB0aGlzLmdyaWRUZW1wbGF0ZVJvd3NJbnB1dC51cGRhdGVTdHlsZVNoZWV0KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQpO1xuICAgICAgICB0aGlzLmdyaWRBdXRvQ29sdW1uc0lucHV0LnVwZGF0ZVN0eWxlU2hlZXQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCk7XG4gICAgICAgIHRoaXMuZ3JpZEF1dG9Sb3dzSW5wdXQudXBkYXRlU3R5bGVTaGVldCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0KTtcbiAgICAgICAgdGhpcy5ncmlkVGVtcGxhdGVBcmVhc1RleHRhcmVhLnVwZGF0ZVN0eWxlU2hlZXQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCk7XG4gICAgICAgIHRoaXMuZ3JpZEp1c3RpZnlJdGVtc1NlbGVjdG9yLnVwZGF0ZVN0eWxlU2hlZXQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCk7XG4gICAgICAgIHRoaXMuZ3JpZEFsaWduSXRlbXNTZWxlY3Rvci51cGRhdGVTdHlsZVNoZWV0KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQpO1xuICAgICAgICB0aGlzLmdyaWRKdXN0aWZ5Q29udGVudFNlbGVjdG9yLnVwZGF0ZVN0eWxlU2hlZXQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCk7XG4gICAgICAgIHRoaXMuZ3JpZEFsaWduQ29udGVudFNlbGVjdG9yLnVwZGF0ZVN0eWxlU2hlZXQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCk7XG4gICAgICAgIHRoaXMuZ3JpZEF1dG9GbG93U2VsZWN0b3IudXBkYXRlU3R5bGVTaGVldCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0KTtcbiAgICAgICAgdGhpcy5ncmlkQ29sdW1uR2FwSW5wdXQudXBkYXRlU3R5bGVTaGVldCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0KTtcbiAgICAgICAgdGhpcy5ncmlkUm93R2FwSW5wdXQudXBkYXRlU3R5bGVTaGVldCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ2xhc3NDaGFuZ2VPYnNlcnZlckludGVyZmFjZSBmcm9tICcuLi9pbnRlcmZhY2VzL2NsYXNzLWNoYW5nZS1vYnNlcnZlci5pbnRlcmZhY2UnO1xuXG5pbXBvcnQgQ29udGFpbmVyQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvQ29udGFpbmVyQnVpbGRlcic7XG5pbXBvcnQgSW5wdXRCdWlsZGVyIGZyb20gJy4uL21vZGVscy9JbnB1dEJ1aWxkZXInO1xuaW1wb3J0IExhYmVsQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvTGFiZWxCdWlsZGVyJztcbmltcG9ydCBTZWxlY3RvckZyb21FbnVtQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXInO1xuaW1wb3J0IEJ1dHRvbkJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0J1dHRvbkJ1aWxkZXInO1xuXG5pbXBvcnQgQ3NzU3R5bGVTaGVldCBmcm9tICcuLi8uLi9jc3Mtc3R5bGVzaGVldC9jc3Mtc3R5bGVzaGVldCc7XG5pbXBvcnQgZ2V0VW5pdCBmcm9tICcuLi9mdW5jdGlvbnMvZ2V0LWNzcy11bml0JztcbmltcG9ydCBjb2xvclRvSGV4IGZyb20gJy4uL2Z1bmN0aW9ucy9yZ2ItdG8taGV4JztcblxuaW1wb3J0IHsgSW5wdXRUeXBlRW51bSB9IGZyb20gJy4uL2VudW1zL2lucHV0LXR5cGUuZW51bSc7XG5pbXBvcnQgeyBVbml0c0VudW0gfSBmcm9tICcuLi9lbnVtcy91bml0cy5lbnVtJztcbmltcG9ydCB7IFN0eWxlTmFtZUVudW0gfSBmcm9tICcuLi9lbnVtcy9zdHlsZS1uYW1lLmVudW0nO1xuaW1wb3J0IHsgRGlzcGxheVR5cGVzRW51bSB9IGZyb20gJy4uL2VudW1zL2Rpc3BsYXktdHlwZXMuZW51bSc7XG5pbXBvcnQgeyBGb250c0VudW0gfSBmcm9tICcuLi9lbnVtcy9mb250cy5lbnVtJztcbmltcG9ydCB7IEZvbnRTdHlsZXNFbnVtIH0gZnJvbSAnLi4vZW51bXMvZm9udC1zdHlsZXMuZW51bSc7XG5pbXBvcnQgeyBGb250V2VpZ2h0RW51bSB9IGZyb20gJy4uL2VudW1zL2ZvbnQtd2VpZ2h0LmVudW0nO1xuaW1wb3J0IHsgRm9udFZhcmlhbnRFbnVtIH0gZnJvbSAnLi4vZW51bXMvZm9udC12YXJpYW50LmVudW0nO1xuXG4vLyBUT0RPOiBoYWNlciBtYXMgYmVsbG8gZWwgY29udGVuZWRvciBkZSB0b2RhcyBsYXMgZnVlbnRlcyBxdWUgdGllbmUgZWwgZWxlbWVudG9cbi8vIFRPRE86IHZlciBzaSBzZSBwdWVkZW4gYWdyZWdhciBmdWVudGVzIGRlIEdvb2dsZSwgcG9yIGVqZW1wbG8uLi4gY29tbyBoYWNlcmxvLi4uXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvbnRDb21wb25lbnQgaW1wbGVtZW50cyBDbGFzc0NoYW5nZU9ic2VydmVySW50ZXJmYWNlIHtcbiAgICBwcml2YXRlIGRvbUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcbiAgICBwcml2YXRlIGRvbUVsZW1lbnRTdHlsZVNoZWV0OiBDU1NTdHlsZURlY2xhcmF0aW9uO1xuXG4gICAgcHJpdmF0ZSBjdXJyZW50Rm9udEZhbWlsaWVzQXJyYXk6IHN0cmluZ1tdID0gW107XG4gICAgcHJpdmF0ZSBmb250U2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIHByaXZhdGUgY3VycmVudEZvbnRzRWxlbWVudHNDb250YWluZXI6IENvbnRhaW5lckJ1aWxkZXI7XG4gICAgcHJpdmF0ZSBjdXJyZW50Rm9udHNDb250YWluZXI6IENvbnRhaW5lckJ1aWxkZXI7XG5cbiAgICBwcml2YXRlIGZvbnRTaXplSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBmb250VW5pdFNlbGVjdG9yOiBIVE1MU2VsZWN0RWxlbWVudDtcblxuICAgIHByaXZhdGUgZm9udFN0eWxlU2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIHByaXZhdGUgZm9udFdlaWdodFNlbGVjdG9yOiBIVE1MU2VsZWN0RWxlbWVudDtcbiAgICBwcml2YXRlIGZvbnRWYXJpYW50U2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIHByaXZhdGUgZm9udENvbG9ySW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihkb21FbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0ID0gQ3NzU3R5bGVTaGVldC5nZXRSdWxlU3R5bGVzKHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3RbMF0pO1xuICAgICAgICB0aGlzLmFkZENvbXBvbmVudHMoKTtcbiAgICB9XG5cbiAgICBnZXQgY29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRDb21wb25lbnRzKCkge1xuICAgICAgICB0aGlzLmFkZEZvbnQgPSB0aGlzLmFkZEZvbnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW1vdmVGb250ID0gdGhpcy5yZW1vdmVGb250LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubW92ZUZvbnRUb1RoZUZyb250ID0gdGhpcy5tb3ZlRm9udFRvVGhlRnJvbnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5tb3ZlRm9udEJlaGluZCA9IHRoaXMubW92ZUZvbnRCZWhpbmQuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZUZvbnRTaXplID0gdGhpcy51cGRhdGVGb250U2l6ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZUZvbnRTdHlsZSA9IHRoaXMudXBkYXRlRm9udFN0eWxlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlRm9udFdlaWdodCA9IHRoaXMudXBkYXRlRm9udFdlaWdodC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZUZvbnRWYXJpYW4gPSB0aGlzLnVwZGF0ZUZvbnRWYXJpYW4uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGVGb250Q29sb3IgPSB0aGlzLnVwZGF0ZUZvbnRDb2xvci5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuYnVpbGRBbGxDb21wb25lbnRzKCk7XG4gICAgICAgIHRoaXMuc2V0SW5pdGlhbFZhbHVlc0FjY29yZGluZ1RvQ2xhc3MoKTtcblxuICAgICAgICBjb25zdCBhZGRGb250QnV0dG9uID0gbmV3IEJ1dHRvbkJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldElubmVyVGV4dCgnQWRkJylcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYWRkRm9udClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgY29uc3QgZm9udEZhbWlseUNvbXBvbmVudHNDb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0FkZCBGb250IEZhbWlseScpXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmZvbnRTZWxlY3RvcilcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQoYWRkRm9udEJ1dHRvbilcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICB0aGlzLmN1cnJlbnRGb250c0NvbnRhaW5lciA9IHRoaXMuY3VycmVudEZvbnRzQ29tcG9uZW50c0NvbnRhaW5lcigpO1xuXG4gICAgICAgIGNvbnN0IGZvbnRTaXplQ29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdGb250IFNpemUnKVxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5mb250U2l6ZUlucHV0KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmZvbnRVbml0U2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgY29uc3QgZm9udFN0eWxlQ29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdGb250IFN0eWxlJylcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuZm9udFN0eWxlU2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgY29uc3QgZm9udFdlaWdodENvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnRm9udCBXZWlnaHQnKVxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5mb250V2VpZ2h0U2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgY29uc3QgZm9udFZhcmlhbnRDb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0ZvbnQgVmFyaWFudCcpXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmZvbnRWYXJpYW50U2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgY29uc3QgZm9udENvbG9yQ29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdGb250IENvbG9yJylcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuZm9udENvbG9ySW5wdXQpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5ib3JkZXIsICcxcHggc29saWQgIzRDQUY1MCcpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5wYWRkaW5nLCAnM3B4JylcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnRm9udCcpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChmb250RmFtaWx5Q29tcG9uZW50c0NvbnRhaW5lcilcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZElmRGVmaW5lZCh0aGlzLmN1cnJlbnRGb250c0NvbnRhaW5lci5idWlsZCgpKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKGZvbnRTaXplQ29udGFpbmVyKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKGZvbnRTdHlsZUNvbnRhaW5lcilcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChmb250V2VpZ2h0Q29udGFpbmVyKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKGZvbnRWYXJpYW50Q29udGFpbmVyKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKGZvbnRDb2xvckNvbnRhaW5lcilcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBidWlsZEFsbENvbXBvbmVudHMoKSB7XG4gICAgICAgIHRoaXMuZm9udFNlbGVjdG9yID0gbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKEZvbnRzRW51bSlcbiAgICAgICAgICAgIC5zZWxlY3RPcHRpb24oRm9udHNFbnVtLmRlZmF1bHQpXG4gICAgICAgICAgICAuYnVpbGQoKTtcblxuICAgICAgICB0aGlzLmN1cnJlbnRGb250c0VsZW1lbnRzQ29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKTtcblxuICAgICAgICB0aGlzLmZvbnRTaXplSW5wdXQgPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0ubnVtYmVyKVxuICAgICAgICAgICAgLnNldE1pbigwKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy51cGRhdGVGb250U2l6ZSlcbiAgICAgICAgICAgIC5idWlsZCgpO1xuXG4gICAgICAgIHRoaXMuZm9udFVuaXRTZWxlY3RvciA9IG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihVbml0c0VudW0pXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVGb250U2l6ZSlcbiAgICAgICAgICAgIC5idWlsZCgpO1xuXG4gICAgICAgIHRoaXMuZm9udFN0eWxlU2VsZWN0b3IgPSBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIoRm9udFN0eWxlc0VudW0pXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVGb250U3R5bGUpXG4gICAgICAgICAgICAuYnVpbGQoKTtcblxuICAgICAgICB0aGlzLmZvbnRXZWlnaHRTZWxlY3RvciA9IG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihGb250V2VpZ2h0RW51bSlcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnVwZGF0ZUZvbnRXZWlnaHQpXG4gICAgICAgICAgICAuYnVpbGQoKTtcblxuICAgICAgICB0aGlzLmZvbnRWYXJpYW50U2VsZWN0b3IgPSBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIoRm9udFZhcmlhbnRFbnVtKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudXBkYXRlRm9udFZhcmlhbilcbiAgICAgICAgICAgIC5idWlsZCgpO1xuXG4gICAgICAgIHRoaXMuZm9udENvbG9ySW5wdXQgPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0uY29sb3IpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLnVwZGF0ZUZvbnRDb2xvcilcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRJbml0aWFsVmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpIHtcbiAgICAgICAgdGhpcy5zZXRGb250RmFtaWx5VmFsdWVBY2NvcmRpbmdUb0NsYXNzKCk7XG4gICAgICAgIHRoaXMuZmlsbENvbnRhaW5lckFjY29yZGluZ1RvSW5pdGlhbFZhbHVlcygpO1xuXG4gICAgICAgIHRoaXMuc2V0Rm9udFNpemVWYWx1ZUFjY29yZGluZ1RvQ2xhc3MoKTtcbiAgICAgICAgdGhpcy5zZXRGb250U3R5bGVWYWx1ZUFjY29yZGluZ1RvQ2xhc3MoKTtcbiAgICAgICAgdGhpcy5zZXRGb250V2VpZ2h0VmFsdWVBY2NvcmRpbmdUb0NsYXNzKCk7XG4gICAgICAgIHRoaXMuc2V0Rm9udFZhcmlhbnRWYWx1ZUFjY29yZGluZ1RvQ2xhc3MoKTtcbiAgICAgICAgdGhpcy5zZXRGb250Q29sb3JWYWx1ZUFjY29yZGluZ1RvQ2xhc3MoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEZvbnRGYW1pbHlWYWx1ZUFjY29yZGluZ1RvQ2xhc3MoKSB7XG4gICAgICAgIGNvbnN0IGZvbnRzID0gdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZm9udC1mYW1pbHknXTtcbiAgICAgICAgaWYgKGZvbnRzKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRGb250RmFtaWxpZXNBcnJheSA9IGZvbnRzLnNwbGl0KCcsICcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmaWxsQ29udGFpbmVyQWNjb3JkaW5nVG9Jbml0aWFsVmFsdWVzKCkge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50Rm9udEZhbWlsaWVzQXJyYXkpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEZvbnRGYW1pbGllc0FycmF5LmZvckVhY2goKGZvbnQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRGb250c0VsZW1lbnRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZm9udEZhbWlseUNvbXBvbmVudChmb250LnRyaW0oKSkpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc2V0Rm9udFNpemVWYWx1ZUFjY29yZGluZ1RvQ2xhc3MoKSB7XG4gICAgICAgIGNvbnN0IGZvbnRTaXplID0gdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZm9udC1zaXplJ107XG4gICAgICAgIHRoaXMuZm9udFNpemVJbnB1dC52YWx1ZSA9IGAke3BhcnNlSW50KGZvbnRTaXplKSB8fCAxfWA7XG4gICAgICAgIHRoaXMuZm9udFVuaXRTZWxlY3Rvci52YWx1ZSA9IGdldFVuaXQoZm9udFNpemUsIFVuaXRzRW51bS5lbSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRGb250U3R5bGVWYWx1ZUFjY29yZGluZ1RvQ2xhc3MoKSB7XG4gICAgICAgIGNvbnN0IGZvbnRTdHlsZSA9IHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2ZvbnQtc3R5bGUnXTtcbiAgICAgICAgdGhpcy5mb250U3R5bGVTZWxlY3Rvci52YWx1ZSA9IGZvbnRTdHlsZSA9PT0gJycgPyAnbm9ybWFsJyA6IGZvbnRTdHlsZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEZvbnRXZWlnaHRWYWx1ZUFjY29yZGluZ1RvQ2xhc3MoKSB7XG4gICAgICAgIGNvbnN0IGZvbnRXZWlnaHQgPSB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydmb250LXdlaWdodCddO1xuICAgICAgICB0aGlzLmZvbnRXZWlnaHRTZWxlY3Rvci52YWx1ZSA9IGZvbnRXZWlnaHQgPT09ICcnID8gJ25vcm1hbCcgOiBmb250V2VpZ2h0O1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0Rm9udFZhcmlhbnRWYWx1ZUFjY29yZGluZ1RvQ2xhc3MoKSB7XG4gICAgICAgIGNvbnN0IGZvbnRWYXJpYW50ID0gdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZm9udC12YXJpYW50J107XG4gICAgICAgIHRoaXMuZm9udFZhcmlhbnRTZWxlY3Rvci52YWx1ZSA9IGZvbnRWYXJpYW50ID09PSAnJyA/ICdub3JtYWwnIDogZm9udFZhcmlhbnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRGb250Q29sb3JWYWx1ZUFjY29yZGluZ1RvQ2xhc3MoKSB7XG4gICAgICAgIGNvbnN0IGZvbnRDb2xvciA9IHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2NvbG9yJ107XG4gICAgICAgIHRoaXMuZm9udENvbG9ySW5wdXQudmFsdWUgPSBjb2xvclRvSGV4KGZvbnRDb2xvcik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmb250RmFtaWx5Q29tcG9uZW50KGZvbnQ6IHN0cmluZyk6IEhUTUxEaXZFbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXROYW1lKGZvbnQpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmdyaWQpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zJ10sICcyZnIgMWZyIDFmciAxZnInKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoZm9udClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBCdXR0b25CdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdSZW1vdmUnKVxuICAgICAgICAgICAgICAgIC5zZXROYW1lKGZvbnQpXG4gICAgICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yZW1vdmVGb250KVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IEJ1dHRvbkJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ+KGkScpXG4gICAgICAgICAgICAgICAgLnNldE5hbWUoZm9udClcbiAgICAgICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm1vdmVGb250VG9UaGVGcm9udClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBCdXR0b25CdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCfihpMnKVxuICAgICAgICAgICAgICAgIC5zZXROYW1lKGZvbnQpXG4gICAgICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5tb3ZlRm9udEJlaGluZClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICB9XG5cbiAgICBwcml2YXRlIGN1cnJlbnRGb250c0NvbXBvbmVudHNDb250YWluZXIoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0N1cnJlbnQgQ29tcG9uZW50IEZvbnRzJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuY3VycmVudEZvbnRzRWxlbWVudHNDb250YWluZXIuYnVpbGQoKSlcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICApXG5cbiAgICAgICAgaWYodGhpcy5jdXJyZW50Rm9udEZhbWlsaWVzQXJyYXkubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICBjb250YWluZXIuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCAnYmxvY2snKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29udGFpbmVyLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgJ25vbmUnKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZEZvbnQoKSB7XG4gICAgICAgIGlmKCF0aGlzLmN1cnJlbnRGb250RmFtaWxpZXNBcnJheS5pbmNsdWRlcyh0aGlzLmZvbnRTZWxlY3Rvci52YWx1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEZvbnRGYW1pbGllc0FycmF5LnB1c2godGhpcy5mb250U2VsZWN0b3IudmFsdWUpXG5cbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2ZvbnQtZmFtaWx5J10gPSB0aGlzLmN1cnJlbnRGb250RmFtaWxpZXNBcnJheS5qb2luKCcsICcpO1xuXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRGb250c0VsZW1lbnRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZm9udEZhbWlseUNvbXBvbmVudCh0aGlzLmZvbnRTZWxlY3Rvci52YWx1ZSkpO1xuXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRGb250c0NvbnRhaW5lci5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksICdibG9jaycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW1vdmVGb250KGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGZvbnROYW1lID0gZXZlbnQudGFyZ2V0WyduYW1lJ107XG5cbiAgICAgICAgY29uc3QgZm9udEluZGV4ID0gdGhpcy5jdXJyZW50Rm9udEZhbWlsaWVzQXJyYXkuZmluZEluZGV4KChmb250KSA9PiBmb250ID09PSBmb250TmFtZSk7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50Rm9udEZhbWlsaWVzQXJyYXkuc3BsaWNlKGZvbnRJbmRleCwgMSk7XG5cbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZm9udC1mYW1pbHknXSA9IHRoaXMuY3VycmVudEZvbnRGYW1pbGllc0FycmF5LmpvaW4oJywgJyk7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50Rm9udHNFbGVtZW50c0NvbnRhaW5lci5yZW1vdmVDaGlsZE5vZGVCeU5hbWUoZm9udE5hbWUpO1xuXG4gICAgICAgIGlmKHRoaXMuY3VycmVudEZvbnRzRWxlbWVudHNDb250YWluZXIuZ2V0QWxsQ2hpbGRzKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRGb250c0NvbnRhaW5lci5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksICdub25lJylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgbW92ZUZvbnRUb1RoZUZyb250KGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGZvbnROYW1lID0gZXZlbnQudGFyZ2V0WyduYW1lJ107XG5cbiAgICAgICAgY29uc3QgZm9udEluZGV4ID0gdGhpcy5jdXJyZW50Rm9udEZhbWlsaWVzQXJyYXkuZmluZEluZGV4KChmb250KSA9PiBmb250ID09PSBmb250TmFtZSk7XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRFbGVtZW50ID0gdGhpcy5jdXJyZW50Rm9udEZhbWlsaWVzQXJyYXkuc3BsaWNlKGZvbnRJbmRleCwgMSlbMF07XG5cbiAgICAgICAgdGhpcy5jdXJyZW50Rm9udEZhbWlsaWVzQXJyYXkuc3BsaWNlKGZvbnRJbmRleCAtIDEsIDAsIHNlbGVjdGVkRWxlbWVudCk7XG5cbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZm9udC1mYW1pbHknXSA9IHRoaXMuY3VycmVudEZvbnRGYW1pbGllc0FycmF5Lm1hcCgoZm9udCkgPT4gZm9udCkuam9pbignLCAnKTtcblxuICAgICAgICB0aGlzLmN1cnJlbnRGb250c0VsZW1lbnRzQ29udGFpbmVyLm1vb3ZlQ2hpbGRVcHBlclBvc2l0aW9uQnlOYW1lKGZvbnROYW1lKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG1vdmVGb250QmVoaW5kKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGZvbnROYW1lID0gZXZlbnQudGFyZ2V0WyduYW1lJ107XG5cbiAgICAgICAgY29uc3QgZm9udEluZGV4ID0gdGhpcy5jdXJyZW50Rm9udEZhbWlsaWVzQXJyYXkuZmluZEluZGV4KChmb250KSA9PiBmb250ID09PSBmb250TmFtZSk7XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRFbGVtZW50ID0gdGhpcy5jdXJyZW50Rm9udEZhbWlsaWVzQXJyYXkuc3BsaWNlKGZvbnRJbmRleCwgMSlbMF07XG5cbiAgICAgICAgdGhpcy5jdXJyZW50Rm9udEZhbWlsaWVzQXJyYXkuc3BsaWNlKGZvbnRJbmRleCArIDEsIDAsIHNlbGVjdGVkRWxlbWVudCk7XG5cbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZm9udC1mYW1pbHknXSA9IHRoaXMuY3VycmVudEZvbnRGYW1pbGllc0FycmF5Lm1hcCgoZm9udCkgPT4gZm9udCkuam9pbignLCAnKTtcblxuICAgICAgICB0aGlzLmN1cnJlbnRGb250c0VsZW1lbnRzQ29udGFpbmVyLm1vb3ZlQ2hpbGRMb3dlclBvc2l0aW9uQnlOYW1lKGZvbnROYW1lKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUZvbnRTaXplKCkge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydmb250LXNpemUnXSA9IGAke3RoaXMuZm9udFNpemVJbnB1dC52YWx1ZX0ke3RoaXMuZm9udFVuaXRTZWxlY3Rvci52YWx1ZX1gXG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVGb250U3R5bGUoKSB7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2ZvbnQtc3R5bGUnXSA9IHRoaXMuZm9udFN0eWxlU2VsZWN0b3IudmFsdWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVGb250V2VpZ2h0KCkge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydmb250LXdlaWdodCddID0gdGhpcy5mb250V2VpZ2h0U2VsZWN0b3IudmFsdWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVGb250VmFyaWFuKCkge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydmb250LXZhcmlhbnQnXSA9IHRoaXMuZm9udFZhcmlhbnRTZWxlY3Rvci52YWx1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUZvbnRDb2xvcigpIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnY29sb3InXSA9IHRoaXMuZm9udENvbG9ySW5wdXQudmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGNsYXNzTmFtZVVwZGF0ZWQobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQgPSBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXMobmFtZSk7XG4gICAgICAgIHRoaXMuc2V0SW5pdGlhbFZhbHVlc0FjY29yZGluZ1RvQ2xhc3MoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29udGFpbmVyQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvQ29udGFpbmVyQnVpbGRlcic7XG5pbXBvcnQgTGFiZWxCdWlsZGVyIGZyb20gJy4uL21vZGVscy9MYWJlbEJ1aWxkZXInO1xuXG5pbXBvcnQgeyBTdHlsZU5hbWVFbnVtIH0gZnJvbSAnLi4vZW51bXMvc3R5bGUtbmFtZS5lbnVtJztcbmltcG9ydCB7IEV2ZW50VHlwZUVudW0gfSBmcm9tICcuLi9lbnVtcy9ldmVudC10eXBlLmVudW0nO1xuaW1wb3J0IHsgRmxleERpcmVjdGlvbkVudW0gfSBmcm9tICcuLi9lbnVtcy9mbGV4LWRpcmVjdGlvbi5lbnVtJztcbmltcG9ydCB7IERpc3BsYXlUeXBlc0VudW0gfSBmcm9tICcuLi9lbnVtcy9kaXNwbGF5LXR5cGVzLmVudW0nO1xuaW1wb3J0IHsgQWxpZ25GbGV4SXRlbXNFbnVtIH0gZnJvbSAnLi4vZW51bXMvYWxpZ24tZmxleC1pdGVtcy5lbnVtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBjb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgZG9tRWxlbWVudFN0eWxlU2hlZXQ6IENTU1N0eWxlRGVjbGFyYXRpb247XG5cbiAgICBwcml2YXRlIGxhYmVsOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBzdHlsZTogc3RyaW5nO1xuICAgIHByaXZhdGUgY2hhbmdlRWxlbWVudDogSFRNTElucHV0RWxlbWVudCB8IEhUTUxTZWxlY3RFbGVtZW50IHwgSFRNTFRleHRBcmVhRWxlbWVudDtcbiAgICBwcml2YXRlIGV2ZW50VHlwZTogRXZlbnRUeXBlRW51bTtcbiAgICBwcml2YXRlIHVuaXQ6IHN0cmluZztcblxuICAgIHByaXZhdGUgemVyb1ZhbHVlOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgZG9tRWxlbWVudFN0eWxlU2hlZXQ6IENTU1N0eWxlRGVjbGFyYXRpb24sXG4gICAgICAgIHN0eWxlOiBzdHJpbmcsXG4gICAgICAgIGxhYmVsOiBzdHJpbmcsXG4gICAgICAgIGNoYW5nZUVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MU2VsZWN0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnQsXG4gICAgICAgIGV2ZW50VHlwZTogRXZlbnRUeXBlRW51bSxcbiAgICAgICAgdW5pdCA9ICcnLFxuICAgICkge1xuICAgICAgICB0aGlzLnN0eWxlID0gc3R5bGU7XG4gICAgICAgIHRoaXMubGFiZWwgPSBsYWJlbDtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCA9IGRvbUVsZW1lbnRTdHlsZVNoZWV0O1xuICAgICAgICB0aGlzLmNoYW5nZUVsZW1lbnQgPSBjaGFuZ2VFbGVtZW50O1xuICAgICAgICB0aGlzLmV2ZW50VHlwZSA9IGV2ZW50VHlwZTtcbiAgICAgICAgdGhpcy51bml0ID0gdW5pdDtcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnRzKCk7XG4gICAgfVxuXG4gICAgZ2V0IGNvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkQ29tcG9uZW50cygpIHtcbiAgICAgICAgdGhpcy51cGRhdGVQcm9wZXJ0eSA9IHRoaXMudXBkYXRlUHJvcGVydHkuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmNoYW5nZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmV2ZW50VHlwZSwgdGhpcy51cGRhdGVQcm9wZXJ0eSlcblxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydmbGV4LWRpcmVjdGlvbiddLCBGbGV4RGlyZWN0aW9uRW51bS5jb2x1bW4pXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnYWxpZ24taXRlbXMnXSwgQWxpZ25GbGV4SXRlbXNFbnVtLnN0cmV0Y2gpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQodGhpcy5sYWJlbClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuY2hhbmdlRWxlbWVudClcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgfVxuXG4gICAgcHVibGljIHNldFZhbHVlKHZhbHVlID0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VFbGVtZW50LnZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZVN0eWxlU2hlZXQoZG9tRWxlbWVudFN0eWxlU2hlZXQ6IENTU1N0eWxlRGVjbGFyYXRpb24pIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCA9IGRvbUVsZW1lbnRTdHlsZVNoZWV0O1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlUHJvcGVydHkoKSB7XG4gICAgICAgIGlmKHBhcnNlSW50KHRoaXMuY2hhbmdlRWxlbWVudC52YWx1ZSkgPT09IHRoaXMuemVyb1ZhbHVlKXtcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbdGhpcy5zdHlsZV0gPSAnJztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0W3RoaXMuc3R5bGVdID0gdGhpcy5jaGFuZ2VFbGVtZW50LnZhbHVlICsgdGhpcy51bml0O1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRaZXJvVmFsdWUodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLnplcm9WYWx1ZSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29udGFpbmVyQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvQ29udGFpbmVyQnVpbGRlcic7XG5pbXBvcnQgSW5wdXRCdWlsZGVyIGZyb20gJy4uL21vZGVscy9JbnB1dEJ1aWxkZXInO1xuaW1wb3J0IExhYmVsQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvTGFiZWxCdWlsZGVyJztcbmltcG9ydCBCdXR0b25CdWlsZGVyIGZyb20gJy4uL21vZGVscy9CdXR0b25CdWlsZGVyJztcblxuaW1wb3J0IHsgU3R5bGVOYW1lRW51bSB9IGZyb20gJy4uL2VudW1zL3N0eWxlLW5hbWUuZW51bSc7XG5pbXBvcnQgeyBJbnB1dFR5cGVFbnVtIH0gZnJvbSAnLi4vZW51bXMvaW5wdXQtdHlwZS5lbnVtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2VuZXJpY1ByaW1hcnlJbnB1dENvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBkb21FbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBsYWJlbDogc3RyaW5nO1xuICAgIHByaXZhdGUgc3R5bGU6IHN0cmluZztcblxuICAgIHByaXZhdGUgcHJvcGVydHlWYWx1ZUlucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSBjYWxsYmFjazogKCkgPT4gYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKGRvbUVsZW1lbnQ6IEhUTUxFbGVtZW50LCBzdHlsZTogc3RyaW5nLCBsYWJlbDogc3RyaW5nLCBjYWxsYmFjazogKCkgPT4gYm9vbGVhbikge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICAgICAgICB0aGlzLmxhYmVsID0gbGFiZWw7XG4gICAgICAgIHRoaXMuc3R5bGUgPSBzdHlsZTtcblxuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSB0aGlzLmNhbGxiYWNrLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnRzKCk7XG4gICAgfVxuXG4gICAgZ2V0IGNvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkQ29tcG9uZW50cygpIHtcbiAgICAgICAgdGhpcy51cGRhdGVQcm9wZXJ0eSA9IHRoaXMudXBkYXRlUHJvcGVydHkuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnByb3BlcnR5VmFsdWVJbnB1dCA9IG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS50ZXh0KVxuICAgICAgICAgICAgLnNldFZhbHVlKHRoaXMuZG9tRWxlbWVudFt0aGlzLnN0eWxlXSlcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMudXBkYXRlUHJvcGVydHkpXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIGNvbnN0IGVsZW1lbnRzQ29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMucHJvcGVydHlWYWx1ZUlucHV0KVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgICAgIG5ldyBCdXR0b25CdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnQ2hhbmdlJylcbiAgICAgICAgICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy51cGRhdGVQcm9wZXJ0eSlcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5ib3JkZXIsICcxcHggc29saWQgIzRDQUY1MCcpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5wYWRkaW5nLCAnM3B4JylcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCh0aGlzLmxhYmVsKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQoZWxlbWVudHNDb250YWluZXIpXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlUHJvcGVydHkoZXZlbnQ6IE1vdXNlRXZlbnQgfCBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGlmICggZXZlbnQudHlwZSA9PT0gJ2NsaWNrJ1xuICAgICAgICAgICAgfHwgKGV2ZW50IGFzIEtleWJvYXJkRXZlbnQpLmtleSA9PT0gJ0VudGVyJ1xuICAgICAgICAgICAgfHwgKGV2ZW50IGFzIEtleWJvYXJkRXZlbnQpLmNvZGUgPT09ICcxMydcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBpZih0aGlzLmNhbGxiYWNrKCkpe1xuICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFt0aGlzLnN0eWxlXSA9IHRoaXMucHJvcGVydHlWYWx1ZUlucHV0LnZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BlcnR5VmFsdWVJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IENvbnRhaW5lckJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0NvbnRhaW5lckJ1aWxkZXInO1xuaW1wb3J0IExhYmVsQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvTGFiZWxCdWlsZGVyJztcbmltcG9ydCBTZWxlY3RvckZyb21FbnVtQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXInO1xuXG5pbXBvcnQgeyBTdHlsZU5hbWVFbnVtIH0gZnJvbSAnLi4vZW51bXMvc3R5bGUtbmFtZS5lbnVtJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdlbmVyaWNQcmltYXJ5U2VsZWN0b3JDb21wb25lbnQge1xuICAgIHByaXZhdGUgZG9tRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBjb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgbGFiZWw6IHN0cmluZztcbiAgICBwcml2YXRlIGF0cmlidXRlVG9Nb2RpZnk6IHN0cmluZztcbiAgICBwcml2YXRlIG9wdGlvbnM6IFJlY29yZDxzdHJpbmcsc3RyaW5nPjtcbiAgICBwcml2YXRlIHByb3BlcnR5U2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IoZG9tRWxlbWVudDogSFRNTEVsZW1lbnQsIGF0cmlidXRlVG9Nb2RpZnk6IHN0cmluZywgbGFiZWw6IHN0cmluZywgb3B0aW9uczogUmVjb3JkPHN0cmluZyxzdHJpbmc+KSB7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gICAgICAgIHRoaXMubGFiZWwgPSBsYWJlbDtcbiAgICAgICAgdGhpcy5hdHJpYnV0ZVRvTW9kaWZ5ID0gYXRyaWJ1dGVUb01vZGlmeTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnRzKCk7XG4gICAgfVxuXG4gICAgZ2V0IGNvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkQ29tcG9uZW50cygpIHtcbiAgICAgICAgdGhpcy51cGRhdGVQcm9wZXJ0eSA9IHRoaXMudXBkYXRlUHJvcGVydHkuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnByb3BlcnR5U2VsZWN0b3IgPSBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIodGhpcy5vcHRpb25zKVxuICAgICAgICAgICAgLnNlbGVjdE9wdGlvbih0aGlzLmRvbUVsZW1lbnRbdGhpcy5hdHJpYnV0ZVRvTW9kaWZ5XSlcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnVwZGF0ZVByb3BlcnR5KVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICBjb25zdCBlbGVtZW50c0NvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLnByb3BlcnR5U2VsZWN0b3IpXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uYm9yZGVyLCAnMXB4IHNvbGlkICM0Q0FGNTAnKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ucGFkZGluZywgJzNweCcpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQodGhpcy5sYWJlbClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKGVsZW1lbnRzQ29udGFpbmVyKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZVByb3BlcnR5KCkge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRbdGhpcy5hdHJpYnV0ZVRvTW9kaWZ5XSA9IHRoaXMucHJvcGVydHlTZWxlY3Rvci52YWx1ZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29udGFpbmVyQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvQ29udGFpbmVyQnVpbGRlcic7XG5pbXBvcnQgSW5wdXRCdWlsZGVyIGZyb20gJy4uL21vZGVscy9JbnB1dEJ1aWxkZXInO1xuaW1wb3J0IExhYmVsQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvTGFiZWxCdWlsZGVyJztcbmltcG9ydCBCdXR0b25CdWlsZGVyIGZyb20gJy4uL21vZGVscy9CdXR0b25CdWlsZGVyJztcbmltcG9ydCBSYXdIVE1MQ29ucG9uZW50IGZyb20gJy4uLy4uL2h0bWwtY29tcG9uZW50cy9SYXdIVE1MQ29tcG9uZW50JztcblxuaW1wb3J0IGRlZmluZUVsZW1lbnRJZCBmcm9tICcuLi9mdW5jdGlvbnMvZGVmaW5lLWVsZW1lbnQtaWQnO1xuXG5pbXBvcnQgeyBTdHlsZU5hbWVFbnVtIH0gZnJvbSAnLi4vZW51bXMvc3R5bGUtbmFtZS5lbnVtJztcbmltcG9ydCB7IElucHV0VHlwZUVudW0gfSBmcm9tICcuLi9lbnVtcy9pbnB1dC10eXBlLmVudW0nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJZERlZmluaXRpb25Db21wb25lbnQge1xuICAgIHByaXZhdGUgZG9tRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBjb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlczogSFRNTEVsZW1lbnRbXTtcblxuICAgIHByaXZhdGUgcHJvcGVydHlWYWx1ZUlucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IoZG9tRWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgLy8gVE9ETzogc2kgbGEgY2xhc2Ugc29sbyBsYSB1dGlsaXphIGVzZSB1bmljbyBjb21wb25lbnRlLFxuICAgICAgICAvLyBxdWl6YXMgZWwgbm9tYnJlIGRlIGxhIGNsYXNlIGNzcyBkZWJlcmlhIGlyIGNvbiAjIHkgbm8gY29uIHB1bnRvLi4uXG5cbiAgICAgICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgICAgICAgSWREZWZpbml0aW9uQ29tcG9uZW50Lmluc3RhbmNlcyA9IFJhd0hUTUxDb25wb25lbnQuaW5zdGFuY2VzO1xuICAgICAgICB0aGlzLmFkZENvbXBvbmVudHMoKTtcbiAgICB9XG5cbiAgICBnZXQgY29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRDb21wb25lbnRzKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVByb3BlcnR5ID0gdGhpcy51cGRhdGVQcm9wZXJ0eS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMucHJvcGVydHlWYWx1ZUlucHV0ID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLnRleHQpXG4gICAgICAgICAgICAuc2V0VmFsdWUodGhpcy5kb21FbGVtZW50LmlkKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy51cGRhdGVQcm9wZXJ0eSlcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgY29uc3QgZWxlbWVudHNDb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5wcm9wZXJ0eVZhbHVlSW5wdXQpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICAgICAgbmV3IEJ1dHRvbkJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdDaGFuZ2UnKVxuICAgICAgICAgICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnVwZGF0ZVByb3BlcnR5KVxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmJvcmRlciwgJzFweCBzb2xpZCAjNENBRjUwJylcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLnBhZGRpbmcsICczcHgnKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdJZCBEZWZpbml0aW9uJylcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKGVsZW1lbnRzQ29udGFpbmVyKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZVByb3BlcnR5KGV2ZW50OiBNb3VzZUV2ZW50IHwgS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAoIHRoaXMucHJvcGVydHlWYWx1ZUlucHV0LnZhbHVlICE9PSB0aGlzLmRvbUVsZW1lbnQuaWRcbiAgICAgICAgICAgICYmICggZXZlbnQudHlwZSA9PT0gJ2NsaWNrJ1xuICAgICAgICAgICAgfHwgKGV2ZW50IGFzIEtleWJvYXJkRXZlbnQpLmtleSA9PT0gJ0VudGVyJ1xuICAgICAgICAgICAgfHwgKGV2ZW50IGFzIEtleWJvYXJkRXZlbnQpLmNvZGUgPT09ICcxMydcbiAgICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gZGVmaW5lRWxlbWVudElkKHRoaXMucHJvcGVydHlWYWx1ZUlucHV0LnZhbHVlLCBJZERlZmluaXRpb25Db21wb25lbnQuaW5zdGFuY2VzKTtcblxuICAgICAgICAgICAgICAgIGlmKGlkID09PSAnJyl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50LmlkID0gaWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wZXJ0eVZhbHVlSW5wdXQudmFsdWUgPSB0aGlzLmRvbUVsZW1lbnQuaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgQ29udGFpbmVyQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvQ29udGFpbmVyQnVpbGRlcic7XG5pbXBvcnQgTGFiZWxCdWlsZGVyIGZyb20gJy4uL21vZGVscy9MYWJlbEJ1aWxkZXInO1xuaW1wb3J0IElucHV0QnVpbGRlciBmcm9tICcuLi9tb2RlbHMvSW5wdXRCdWlsZGVyJztcbmltcG9ydCBTZWxlY3RvckZyb21FbnVtQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXInO1xuXG5pbXBvcnQgZ2V0VW5pdCBmcm9tICcuLi9mdW5jdGlvbnMvZ2V0LWNzcy11bml0JztcblxuaW1wb3J0IHsgU3R5bGVOYW1lRW51bSB9IGZyb20gJy4uL2VudW1zL3N0eWxlLW5hbWUuZW51bSc7XG5pbXBvcnQgeyBJbnB1dFR5cGVFbnVtIH0gZnJvbSAnLi4vZW51bXMvaW5wdXQtdHlwZS5lbnVtJztcbmltcG9ydCB7IFVuaXRzRW51bSB9IGZyb20gJy4uL2VudW1zL3VuaXRzLmVudW0nO1xuaW1wb3J0IHsgRGlzcGxheVR5cGVzRW51bSB9IGZyb20gJy4uL2VudW1zL2Rpc3BsYXktdHlwZXMuZW51bSc7XG5pbXBvcnQgeyBGbGV4RGlyZWN0aW9uRW51bSB9IGZyb20gJy4uL2VudW1zL2ZsZXgtZGlyZWN0aW9uLmVudW0nO1xuaW1wb3J0IHsgQWxpZ25GbGV4SXRlbXNFbnVtIH0gZnJvbSAnLi4vZW51bXMvYWxpZ24tZmxleC1pdGVtcy5lbnVtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXRBbmRVbml0c1NlbGVjdG9yQ29tcG9uZW50IHtcbiAgICBwcml2YXRlIGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBkb21FbGVtZW50U3R5bGVTaGVldDogQ1NTU3R5bGVEZWNsYXJhdGlvbjtcblxuICAgIHByaXZhdGUgbGFiZWw6IHN0cmluZztcbiAgICBwcml2YXRlIHN0eWxlOiBzdHJpbmc7XG5cbiAgICBwcml2YXRlIHByb3BlcnR5VmFsdWVJbnB1dDogSW5wdXRCdWlsZGVyO1xuICAgIHByaXZhdGUgdW5pdHNTZWxlY3RvcklucHV0OiBTZWxlY3RvckZyb21FbnVtQnVpbGRlcjtcblxuICAgIHByaXZhdGUgemVyb1ZhbHVlOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihkb21FbGVtZW50U3R5bGVTaGVldDogQ1NTU3R5bGVEZWNsYXJhdGlvbiwgc3R5bGU6IHN0cmluZywgbGFiZWw6IHN0cmluZykge1xuICAgICAgICB0aGlzLnN0eWxlID0gc3R5bGU7XG4gICAgICAgIHRoaXMubGFiZWwgPSBsYWJlbDtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCA9IGRvbUVsZW1lbnRTdHlsZVNoZWV0O1xuICAgICAgICB0aGlzLmFkZENvbXBvbmVudHMoKTtcbiAgICAgICAgdGhpcy5zZXRJbml0aWFsVmFsdWVzKCk7XG4gICAgfVxuXG4gICAgZ2V0IGNvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkQ29tcG9uZW50cygpIHtcbiAgICAgICAgdGhpcy51cGRhdGVQcm9wZXJ0eSA9IHRoaXMudXBkYXRlUHJvcGVydHkuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnVuaXRzU2VsZWN0b3JJbnB1dCA9IG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihVbml0c0VudW0pXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVQcm9wZXJ0eSlcblxuICAgICAgICB0aGlzLnByb3BlcnR5VmFsdWVJbnB1dCA9IG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS5udW1iZXIpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLnVwZGF0ZVByb3BlcnR5KVxuXG4gICAgICAgIGNvbnN0IGlubmVyQ29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMucHJvcGVydHlWYWx1ZUlucHV0LmJ1aWxkKCkpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy51bml0c1NlbGVjdG9ySW5wdXQuYnVpbGQoKSlcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnZmxleC1kaXJlY3Rpb24nXSwgRmxleERpcmVjdGlvbkVudW0uY29sdW1uKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW1bJ2FsaWduLWl0ZW1zJ10sIEFsaWduRmxleEl0ZW1zRW51bS5zdHJldGNoKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KHRoaXMubGFiZWwpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChpbm5lckNvbnRhaW5lcilcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRJbml0aWFsVmFsdWVzKCkge1xuICAgICAgICB0aGlzLnByb3BlcnR5VmFsdWVJbnB1dC5zZXRWYWx1ZShgJHtwYXJzZUludCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0W3RoaXMuc3R5bGVdKSB8fCAwfWApXG4gICAgICAgIHRoaXMudW5pdHNTZWxlY3RvcklucHV0LnNlbGVjdE9wdGlvbihnZXRVbml0KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbdGhpcy5zdHlsZV0pKVxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlUHJvcGVydHkoKSB7XG4gICAgICAgIGlmKHBhcnNlSW50KHRoaXMucHJvcGVydHlWYWx1ZUlucHV0LmdldFZhbHVlKCkpID09PSB0aGlzLnplcm9WYWx1ZSl7XG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0W3RoaXMuc3R5bGVdID0gJyc7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFt0aGlzLnN0eWxlXSA9XG4gICAgICAgICAgICBgJHt0aGlzLnByb3BlcnR5VmFsdWVJbnB1dC5nZXRWYWx1ZSgpfSR7dGhpcy51bml0c1NlbGVjdG9ySW5wdXQuZ2V0VmFsdWUoKX1gXG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZVN0eWxlU2hlZXQoZG9tRWxlbWVudFN0eWxlU2hlZXQ6IENTU1N0eWxlRGVjbGFyYXRpb24pIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCA9IGRvbUVsZW1lbnRTdHlsZVNoZWV0O1xuICAgICAgICB0aGlzLnNldEluaXRpYWxWYWx1ZXMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0TWluVmFsdWUodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLnByb3BlcnR5VmFsdWVJbnB1dC5zZXRNaW4odmFsdWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0WmVyb1ZhbHVlKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy56ZXJvVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuIiwiaW1wb3J0IENsYXNzQ2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2UgZnJvbSAnLi4vaW50ZXJmYWNlcy9jbGFzcy1jaGFuZ2Utb2JzZXJ2ZXIuaW50ZXJmYWNlJztcblxuaW1wb3J0IENvbnRhaW5lckJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0NvbnRhaW5lckJ1aWxkZXInO1xuaW1wb3J0IElucHV0QnVpbGRlciBmcm9tICcuLi9tb2RlbHMvSW5wdXRCdWlsZGVyJztcbmltcG9ydCBMYWJlbEJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0xhYmVsQnVpbGRlcic7XG5pbXBvcnQgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL1NlbGVjdG9yRnJvbUVudW1CdWlsZGVyJztcblxuaW1wb3J0IHsgSW5wdXRUeXBlRW51bSB9IGZyb20gJy4uL2VudW1zL2lucHV0LXR5cGUuZW51bSc7XG5pbXBvcnQgeyBVbml0c0VudW0gfSBmcm9tICcuLi9lbnVtcy91bml0cy5lbnVtJztcbmltcG9ydCB7IFN0eWxlTmFtZUVudW0gfSBmcm9tICcuLi9lbnVtcy9zdHlsZS1uYW1lLmVudW0nO1xuXG5pbXBvcnQgQ3NzU3R5bGVTaGVldCBmcm9tICcuLi8uLi9jc3Mtc3R5bGVzaGVldC9jc3Mtc3R5bGVzaGVldCc7XG5cbmltcG9ydCBjYXBpdGFsaXplRmlyc3RMZXR0ZXJzIGZyb20gJy4uL2Z1bmN0aW9ucy9maXJzdC1sZXR0ZXJzLWNhcGl0YWxpemVkJztcbmltcG9ydCBnZXRVbml0IGZyb20gJy4uL2Z1bmN0aW9ucy9nZXQtY3NzLXVuaXQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXJnaW5PclBhZGRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBDbGFzc0NoYW5nZU9ic2VydmVySW50ZXJmYWNlIHtcbiAgICBwcml2YXRlIHR5cGU7XG4gICAgcHJpdmF0ZSBkb21FbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBkb21FbGVtZW50U3R5bGVTaGVldDogQ1NTU3R5bGVEZWNsYXJhdGlvbjtcblxuICAgIHByaXZhdGUgdG9wUHJvcGVydHlWYWx1ZUlucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHByaXZhdGUgcmlndGhQcm9wZXJ0eVZhbHVlSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBib3R0b21Qcm9wZXJ0eVZhbHVlSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBsZWZ0UHJvcGVydHlWYWx1ZUlucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSB0b3BVbml0U2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIHByaXZhdGUgcmlnaHRVbml0U2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIHByaXZhdGUgYm90dG9tVW5pdFNlbGVjdG9yOiBIVE1MU2VsZWN0RWxlbWVudDtcbiAgICBwcml2YXRlIGxlZnRVbml0U2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSBzZWxlY3RBbGxDaGVja0JveDogSFRNTElucHV0RWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKGRvbUVsZW1lbnQ6IEhUTUxFbGVtZW50LCB0eXBlOiAnbWFyZ2luJyB8ICdwYWRkaW5nJywgKSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQgPSBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXModGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdFswXSlcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnRzKCk7XG4gICAgICAgIHRoaXMuc2V0VmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpO1xuICAgICAgICB0aGlzLnVwZGF0ZVByb3BlcnR5KClcbiAgICB9XG5cbiAgICBnZXQgY29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRDb21wb25lbnRzKCkge1xuICAgICAgICAvLyBUT0RPOiBmYWx0YSBhZ3JlZ2FyIGVsICFpbXBvcnRhbnQgeSBxdWl6YXMgbG9zIGluaGVyaXQgeSBubyBzZSBzaSBoYWJyYSBtYXMgcHJvcGllZGFkZXNcbiAgICAgICAgLy8gcXVpemFzIHRvZG8gZXNvIGRlYmEgZXN0YXIgZW4gZWwgc2VsZWN0b3IgZGUgbGEgdW5pZGFkLi4uXG5cbiAgICAgICAgdGhpcy51cGRhdGVQcm9wZXJ0eSA9IHRoaXMudXBkYXRlUHJvcGVydHkuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnNlbGVjdEFsbENoZWNrQm94ID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLmNoZWNrYm94KVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudXBkYXRlUHJvcGVydHkpXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIGNvbnN0IHNlbGVjdEFsbENvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdTZWxlY3QgQWxsJylcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuc2VsZWN0QWxsQ2hlY2tCb3gpXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIHRoaXMudG9wUHJvcGVydHlWYWx1ZUlucHV0ID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLm51bWJlcilcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMudXBkYXRlUHJvcGVydHkpXG4gICAgICAgICAgICAuYnVpbGQoKTtcbiAgICAgICAgdGhpcy5yaWd0aFByb3BlcnR5VmFsdWVJbnB1dCA9IG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS5udW1iZXIpXG4gICAgICAgICAgICAuZGlzYWJsZWQodGhpcy5zZWxlY3RBbGxDaGVja0JveC5jaGVja2VkKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy51cGRhdGVQcm9wZXJ0eSlcbiAgICAgICAgICAgIC5idWlsZCgpO1xuICAgICAgICB0aGlzLmJvdHRvbVByb3BlcnR5VmFsdWVJbnB1dCA9IG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS5udW1iZXIpXG4gICAgICAgICAgICAuZGlzYWJsZWQodGhpcy5zZWxlY3RBbGxDaGVja0JveC5jaGVja2VkKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy51cGRhdGVQcm9wZXJ0eSlcbiAgICAgICAgICAgIC5idWlsZCgpO1xuICAgICAgICB0aGlzLmxlZnRQcm9wZXJ0eVZhbHVlSW5wdXQgPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0ubnVtYmVyKVxuICAgICAgICAgICAgLmRpc2FibGVkKHRoaXMuc2VsZWN0QWxsQ2hlY2tCb3guY2hlY2tlZClcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMudXBkYXRlUHJvcGVydHkpXG4gICAgICAgICAgICAuYnVpbGQoKTtcblxuICAgICAgICB0aGlzLnRvcFVuaXRTZWxlY3RvciA9IG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihVbml0c0VudW0pXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVQcm9wZXJ0eSlcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgIHRoaXMuYm90dG9tVW5pdFNlbGVjdG9yID0gbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKFVuaXRzRW51bSlcbiAgICAgICAgICAgIC5kaXNhYmxlZCh0aGlzLnNlbGVjdEFsbENoZWNrQm94LmNoZWNrZWQpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVQcm9wZXJ0eSlcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgIHRoaXMucmlnaHRVbml0U2VsZWN0b3IgPSBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIoVW5pdHNFbnVtKVxuICAgICAgICAgICAgLmRpc2FibGVkKHRoaXMuc2VsZWN0QWxsQ2hlY2tCb3guY2hlY2tlZClcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnVwZGF0ZVByb3BlcnR5KVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgdGhpcy5sZWZ0VW5pdFNlbGVjdG9yID0gbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKFVuaXRzRW51bSlcbiAgICAgICAgICAgIC5kaXNhYmxlZCh0aGlzLnNlbGVjdEFsbENoZWNrQm94LmNoZWNrZWQpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVQcm9wZXJ0eSlcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgY29uc3QgdG9wQ29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ1QnKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy50b3BQcm9wZXJ0eVZhbHVlSW5wdXQpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy50b3BVbml0U2VsZWN0b3IpXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIGNvbnN0IHJpZ2h0Q29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ1InKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5yaWd0aFByb3BlcnR5VmFsdWVJbnB1dClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLnJpZ2h0VW5pdFNlbGVjdG9yKVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICBjb25zdCBib3R0b21Db250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnQicpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmJvdHRvbVByb3BlcnR5VmFsdWVJbnB1dClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmJvdHRvbVVuaXRTZWxlY3RvcilcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgY29uc3QgbGVmdENvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdMJylcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMubGVmdFByb3BlcnR5VmFsdWVJbnB1dClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmxlZnRVbml0U2VsZWN0b3IpXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIGNvbnN0IGlucHV0VmFsdWVzQ29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRvcENvbnRhaW5lcilcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChyaWdodENvbnRhaW5lcilcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChib3R0b21Db250YWluZXIpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobGVmdENvbnRhaW5lcilcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5ib3JkZXIsICcxcHggc29saWQgIzRDQUY1MCcpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5wYWRkaW5nLCAnM3B4JylcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldElubmVyVGV4dChgJHtjYXBpdGFsaXplRmlyc3RMZXR0ZXJzKHRoaXMudHlwZSwgJyAnLCAnICcpfSBTZWxlY3RvcmApXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChzZWxlY3RBbGxDb250YWluZXIpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQoaW5wdXRWYWx1ZXNDb250YWluZXIpXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlUHJvcGVydHkoKSB7XG4gICAgICAgIGxldCB7dG9wLCByaWdodCwgYm90dG9tLCBsZWZ0fSA9IHRoaXMuZ2V0Q3VycmVudFByb3BlcnRpZXMoKTtcblxuICAgICAgICBpZih0aGlzLnNlbGVjdEFsbENoZWNrQm94LmNoZWNrZWQpe1xuICAgICAgICAgICAgdGhpcy5yaWd0aFByb3BlcnR5VmFsdWVJbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbVByb3BlcnR5VmFsdWVJbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmxlZnRQcm9wZXJ0eVZhbHVlSW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5yaWdodFVuaXRTZWxlY3Rvci5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbVVuaXRTZWxlY3Rvci5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmxlZnRVbml0U2VsZWN0b3IuZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICBpZih0aGlzLnRvcFVuaXRTZWxlY3Rvci52YWx1ZSA9PT0gVW5pdHNFbnVtLmF1dG8pe1xuICAgICAgICAgICAgICAgIHRvcCA9ICdhdXRvJztcbiAgICAgICAgICAgICAgICByaWdodCA9ICdhdXRvJztcbiAgICAgICAgICAgICAgICBib3R0b20gPSAnYXV0byc7XG4gICAgICAgICAgICAgICAgbGVmdCA9ICdhdXRvJztcblxuICAgICAgICAgICAgICAgIHRoaXMudG9wUHJvcGVydHlWYWx1ZUlucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ3RoUHJvcGVydHlWYWx1ZUlucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmJvdHRvbVByb3BlcnR5VmFsdWVJbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5sZWZ0UHJvcGVydHlWYWx1ZUlucHV0LmRpc2FibGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHRoaXMucmlnaHRVbml0U2VsZWN0b3IudmFsdWUgPSB0aGlzLnRvcFVuaXRTZWxlY3Rvci52YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmJvdHRvbVVuaXRTZWxlY3Rvci52YWx1ZSA9IHRoaXMudG9wVW5pdFNlbGVjdG9yLnZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMubGVmdFVuaXRTZWxlY3Rvci52YWx1ZSA9IHRoaXMudG9wVW5pdFNlbGVjdG9yLnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy50b3BQcm9wZXJ0eVZhbHVlSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ3RoUHJvcGVydHlWYWx1ZUlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgdGhpcy5ib3R0b21Qcm9wZXJ0eVZhbHVlSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnRQcm9wZXJ0eVZhbHVlSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b3BQcm9wZXJ0eVZhbHVlSW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0b3AgPSBgJHt0aGlzLnRvcFByb3BlcnR5VmFsdWVJbnB1dC52YWx1ZX0ke3RoaXMudG9wVW5pdFNlbGVjdG9yLnZhbHVlfWA7XG4gICAgICAgICAgICAgICAgcmlnaHQgPSBgJHt0aGlzLnRvcFByb3BlcnR5VmFsdWVJbnB1dC52YWx1ZX0ke3RoaXMudG9wVW5pdFNlbGVjdG9yLnZhbHVlfWA7XG4gICAgICAgICAgICAgICAgYm90dG9tID0gYCR7dGhpcy50b3BQcm9wZXJ0eVZhbHVlSW5wdXQudmFsdWV9JHt0aGlzLnRvcFVuaXRTZWxlY3Rvci52YWx1ZX1gO1xuICAgICAgICAgICAgICAgIGxlZnQgPSBgJHt0aGlzLnRvcFByb3BlcnR5VmFsdWVJbnB1dC52YWx1ZX0ke3RoaXMudG9wVW5pdFNlbGVjdG9yLnZhbHVlfWA7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJpZ3RoUHJvcGVydHlWYWx1ZUlucHV0LnZhbHVlID0gdGhpcy50b3BQcm9wZXJ0eVZhbHVlSW5wdXQudmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5ib3R0b21Qcm9wZXJ0eVZhbHVlSW5wdXQudmFsdWUgPSB0aGlzLnRvcFByb3BlcnR5VmFsdWVJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnRQcm9wZXJ0eVZhbHVlSW5wdXQudmFsdWUgPSB0aGlzLnRvcFByb3BlcnR5VmFsdWVJbnB1dC52YWx1ZTtcblxuICAgICAgICAgICAgICAgIGlmKHBhcnNlSW50KHRoaXMudG9wUHJvcGVydHlWYWx1ZUlucHV0LnZhbHVlKSA9PT0gMCl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbdGhpcy50eXBlXSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yaWdodFVuaXRTZWxlY3Rvci5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5ib3R0b21Vbml0U2VsZWN0b3IuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubGVmdFVuaXRTZWxlY3Rvci5kaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZih0aGlzLnRvcFVuaXRTZWxlY3Rvci52YWx1ZSA9PT0gVW5pdHNFbnVtLmF1dG8pe1xuICAgICAgICAgICAgICAgIHRvcCA9ICdhdXRvJztcbiAgICAgICAgICAgICAgICB0aGlzLnRvcFByb3BlcnR5VmFsdWVJbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudG9wUHJvcGVydHlWYWx1ZUlucHV0LmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdG9wID0gYCR7dGhpcy50b3BQcm9wZXJ0eVZhbHVlSW5wdXQudmFsdWV9JHt0aGlzLnRvcFVuaXRTZWxlY3Rvci52YWx1ZX1gO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZih0aGlzLnJpZ2h0VW5pdFNlbGVjdG9yLnZhbHVlID09PSBVbml0c0VudW0uYXV0byl7XG4gICAgICAgICAgICAgICAgcmlnaHQgPSAnYXV0byc7XG4gICAgICAgICAgICAgICAgdGhpcy5yaWd0aFByb3BlcnR5VmFsdWVJbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucmlndGhQcm9wZXJ0eVZhbHVlSW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByaWdodCA9IGAke3RoaXMucmlndGhQcm9wZXJ0eVZhbHVlSW5wdXQudmFsdWV9JHt0aGlzLnJpZ2h0VW5pdFNlbGVjdG9yLnZhbHVlfWA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHRoaXMuYm90dG9tVW5pdFNlbGVjdG9yLnZhbHVlID09PSBVbml0c0VudW0uYXV0byl7XG4gICAgICAgICAgICAgICAgYm90dG9tID0gJ2F1dG8nO1xuICAgICAgICAgICAgICAgIHRoaXMuYm90dG9tUHJvcGVydHlWYWx1ZUlucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib3R0b21Qcm9wZXJ0eVZhbHVlSW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBib3R0b20gPSBgJHt0aGlzLmJvdHRvbVByb3BlcnR5VmFsdWVJbnB1dC52YWx1ZX0ke3RoaXMuYm90dG9tVW5pdFNlbGVjdG9yLnZhbHVlfWA7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYodGhpcy5sZWZ0VW5pdFNlbGVjdG9yLnZhbHVlID09PSBVbml0c0VudW0uYXV0byl7XG4gICAgICAgICAgICAgICAgbGVmdCA9ICdhdXRvJztcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnRQcm9wZXJ0eVZhbHVlSW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnRQcm9wZXJ0eVZhbHVlSW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBsZWZ0ID0gYCR7dGhpcy5sZWZ0UHJvcGVydHlWYWx1ZUlucHV0LnZhbHVlfSR7dGhpcy5sZWZ0VW5pdFNlbGVjdG9yLnZhbHVlfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0W3RoaXMudHlwZV0gPSBbdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0XS5qb2luKCcgJyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRWYWx1ZXNBY2NvcmRpbmdUb0NsYXNzKCkge1xuICAgICAgICBjb25zdCB7dG9wLCByaWdodCwgYm90dG9tLCBsZWZ0LCBhbGxFcXVhbH0gPSB0aGlzLmdldEN1cnJlbnRQcm9wZXJ0aWVzKCk7XG5cbiAgICAgICAgdGhpcy5zZWxlY3RBbGxDaGVja0JveC5jaGVja2VkID0gYWxsRXF1YWw7XG5cbiAgICAgICAgdGhpcy50b3BQcm9wZXJ0eVZhbHVlSW5wdXQudmFsdWUgPSBgJHtwYXJzZUludCh0b3ApfWA7XG4gICAgICAgIHRoaXMucmlndGhQcm9wZXJ0eVZhbHVlSW5wdXQudmFsdWUgPSBgJHtwYXJzZUludChyaWdodCl9YDtcbiAgICAgICAgdGhpcy5ib3R0b21Qcm9wZXJ0eVZhbHVlSW5wdXQudmFsdWUgPSBgJHtwYXJzZUludChib3R0b20pfWA7XG4gICAgICAgIHRoaXMubGVmdFByb3BlcnR5VmFsdWVJbnB1dC52YWx1ZSA9IGAke3BhcnNlSW50KGxlZnQpfWA7XG5cbiAgICAgICAgdGhpcy50b3BVbml0U2VsZWN0b3IudmFsdWUgPSBnZXRVbml0KHRvcCk7XG4gICAgICAgIHRoaXMuYm90dG9tVW5pdFNlbGVjdG9yLnZhbHVlID0gZ2V0VW5pdChib3R0b20pO1xuICAgICAgICB0aGlzLnJpZ2h0VW5pdFNlbGVjdG9yLnZhbHVlID0gZ2V0VW5pdChyaWdodCk7XG4gICAgICAgIHRoaXMubGVmdFVuaXRTZWxlY3Rvci52YWx1ZSA9IGdldFVuaXQobGVmdCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRDdXJyZW50UHJvcGVydGllcygpOiBTdHlsZXNSZXR1cm5PYmplY3RJbnRlcmZhY2Uge1xuICAgICAgICBjb25zdCB0b3AgPSB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0W2Ake3RoaXMudHlwZX0tdG9wYF07XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFtgJHt0aGlzLnR5cGV9LXJpZ2h0YF07XG4gICAgICAgIGNvbnN0IGJvdHRvbSA9IHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbYCR7dGhpcy50eXBlfS1ib3R0b21gXTtcbiAgICAgICAgY29uc3QgbGVmdCA9IHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbYCR7dGhpcy50eXBlfS1sZWZ0YF07XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRvcDogdG9wID8gdG9wIDogJzBweCcsXG4gICAgICAgICAgICByaWdodDogcmlnaHQgPyByaWdodCA6ICcwcHgnLFxuICAgICAgICAgICAgYm90dG9tOiBib3R0b20gPyBib3R0b20gOiAnMHB4JyxcbiAgICAgICAgICAgIGxlZnQ6IGxlZnQgPyBsZWZ0IDogJzBweCcsXG4gICAgICAgICAgICBhbGxFcXVhbDogdG9wID09PSByaWdodCAmJiB0b3AgPT09IGJvdHRvbSAmJiB0b3AgPT09IGxlZnQsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHVibGljIGNsYXNzTmFtZVVwZGF0ZWQobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQgPSBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXMobmFtZSk7XG4gICAgICAgIHRoaXMuc2V0VmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpO1xuICAgICAgICB0aGlzLnVwZGF0ZVByb3BlcnR5KCk7XG4gICAgfVxufVxuXG5pbnRlcmZhY2UgU3R5bGVzUmV0dXJuT2JqZWN0SW50ZXJmYWNlIHtcbiAgICB0b3A6IHN0cmluZyxcbiAgICByaWdodDogc3RyaW5nLFxuICAgIGJvdHRvbTogc3RyaW5nLFxuICAgIGxlZnQ6IHN0cmluZyxcbiAgICBhbGxFcXVhbDogYm9vbGVhbixcbn1cbiIsImltcG9ydCBDbGFzc0NoYW5nZU9ic2VydmVySW50ZXJmYWNlIGZyb20gJy4uL2ludGVyZmFjZXMvY2xhc3MtY2hhbmdlLW9ic2VydmVyLmludGVyZmFjZSc7XG5cbmltcG9ydCBDb250YWluZXJCdWlsZGVyIGZyb20gJy4uL21vZGVscy9Db250YWluZXJCdWlsZGVyJztcbmltcG9ydCBJbnB1dEJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0lucHV0QnVpbGRlcic7XG5pbXBvcnQgTGFiZWxCdWlsZGVyIGZyb20gJy4uL21vZGVscy9MYWJlbEJ1aWxkZXInO1xuaW1wb3J0IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyIGZyb20gJy4uL21vZGVscy9TZWxlY3RvckZyb21FbnVtQnVpbGRlcic7XG5cbmltcG9ydCBDc3NTdHlsZVNoZWV0IGZyb20gJy4uLy4uL2Nzcy1zdHlsZXNoZWV0L2Nzcy1zdHlsZXNoZWV0JztcbmltcG9ydCBnZXRVbml0IGZyb20gJy4uL2Z1bmN0aW9ucy9nZXQtY3NzLXVuaXQnO1xuXG5pbXBvcnQgeyBJbnB1dFR5cGVFbnVtIH0gZnJvbSAnLi4vZW51bXMvaW5wdXQtdHlwZS5lbnVtJztcbmltcG9ydCB7IFVuaXRzRW51bSB9IGZyb20gJy4uL2VudW1zL3VuaXRzLmVudW0nO1xuaW1wb3J0IHsgU3R5bGVOYW1lRW51bSB9IGZyb20gJy4uL2VudW1zL3N0eWxlLW5hbWUuZW51bSc7XG5pbXBvcnQgeyBEaXNwbGF5VHlwZXNFbnVtIH0gZnJvbSAnLi4vZW51bXMvZGlzcGxheS10eXBlcy5lbnVtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2l6ZXNDb21wb25lbnQgaW1wbGVtZW50cyBDbGFzc0NoYW5nZU9ic2VydmVySW50ZXJmYWNlIHtcbiAgICBwcml2YXRlIGRvbUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcbiAgICBwcml2YXRlIGRvbUVsZW1lbnRTdHlsZVNoZWV0OiBDU1NTdHlsZURlY2xhcmF0aW9uO1xuXG4gICAgcHJpdmF0ZSB3aWR0aFNpemVJbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgICBwcml2YXRlIHdpZHRoVW5pdFNlbGVjdG9yOiBIVE1MU2VsZWN0RWxlbWVudDtcblxuICAgIHByaXZhdGUgaGVpZ2h0U2l6ZUlucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHByaXZhdGUgaGVpZ2h0U2l6ZVNlbGVjdG9yOiBIVE1MU2VsZWN0RWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKGRvbUVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQgPSBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXModGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdFswXSk7XG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50cygpO1xuICAgIH1cblxuICAgIGdldCBjb21wb25lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZENvbXBvbmVudHMoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlV2lkdGggPSB0aGlzLnVwZGF0ZVdpZHRoLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlSGVpZ2h0ID0gdGhpcy51cGRhdGVIZWlnaHQuYmluZCh0aGlzKTtcblxuXG4gICAgICAgIHRoaXMuYnVpbGRBbGxDb21wb25lbnRzKCk7XG4gICAgICAgIHRoaXMuc2V0SW5pdGlhbFZhbHVlc0FjY29yZGluZ1RvQ2xhc3MoKTtcblxuICAgICAgICBjb25zdCB3aWR0aENvbXBvbmVudHNDb250YWluZXIgPSB0aGlzLmJ1aWxkU2l6ZUNvbnRhaW5lcihcbiAgICAgICAgICAgICdXaWR0aCcsXG4gICAgICAgICAgICB0aGlzLndpZHRoU2l6ZUlucHV0LFxuICAgICAgICAgICAgdGhpcy53aWR0aFVuaXRTZWxlY3RvclxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGhlaWdodENvbXBvbmVudHNDb250YWluZXIgPSB0aGlzLmJ1aWxkU2l6ZUNvbnRhaW5lcihcbiAgICAgICAgICAgICdIZWlnaHQnLFxuICAgICAgICAgICAgdGhpcy5oZWlnaHRTaXplSW5wdXQsXG4gICAgICAgICAgICB0aGlzLmhlaWdodFNpemVTZWxlY3RvclxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uYm9yZGVyLCAnMXB4IHNvbGlkICM0Q0FGNTAnKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ucGFkZGluZywgJzNweCcpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ1NpemVzJylcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKHdpZHRoQ29tcG9uZW50c0NvbnRhaW5lcilcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChoZWlnaHRDb21wb25lbnRzQ29udGFpbmVyKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICB9XG5cbiAgICBwcml2YXRlIGJ1aWxkU2l6ZUNvbnRhaW5lcihcbiAgICAgICAgbGFiZWw6IHN0cmluZyxcbiAgICAgICAgaW5wdXRDb21wb25lbnQ6IEhUTUxJbnB1dEVsZW1lbnQsXG4gICAgICAgIHNlbGVjdG9yQ29tcG9uZW50OiBIVE1MU2VsZWN0RWxlbWVudCkge1xuICAgICAgICByZXR1cm4gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KGxhYmVsKVxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQoaW5wdXRDb21wb25lbnQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHNlbGVjdG9yQ29tcG9uZW50KVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgIH1cblxuICAgIHByaXZhdGUgYnVpbGRBbGxDb21wb25lbnRzKCkge1xuICAgICAgICB0aGlzLndpZHRoU2l6ZUlucHV0ID0gdGhpcy5idWlsZElucHV0KElucHV0VHlwZUVudW0ubnVtYmVyLCB0aGlzLnVwZGF0ZVdpZHRoKTtcbiAgICAgICAgdGhpcy5oZWlnaHRTaXplSW5wdXQgPSB0aGlzLmJ1aWxkSW5wdXQoSW5wdXRUeXBlRW51bS5udW1iZXIsIHRoaXMudXBkYXRlSGVpZ2h0KTtcblxuICAgICAgICB0aGlzLndpZHRoVW5pdFNlbGVjdG9yID0gdGhpcy5idWlsZFNlbGVjdG9yKHRoaXMudXBkYXRlV2lkdGgpO1xuICAgICAgICB0aGlzLmhlaWdodFNpemVTZWxlY3RvciA9IHRoaXMuYnVpbGRTZWxlY3Rvcih0aGlzLnVwZGF0ZUhlaWdodCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRJbml0aWFsVmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpIHtcbiAgICAgICAgdGhpcy5zZXRXaWR0aFZhbHVlQWNjb3JkaW5nVG9DbGFzcygpO1xuICAgICAgICB0aGlzLnNldEhlaWdodFZhbHVlQWNjb3JkaW5nVG9DbGFzcygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0V2lkdGhWYWx1ZUFjY29yZGluZ1RvQ2xhc3MoKSB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnd2lkdGgnXTtcbiAgICAgICAgdGhpcy53aWR0aFNpemVJbnB1dC52YWx1ZSA9IGAke3BhcnNlSW50KHdpZHRoKSB8fCAwfWA7XG4gICAgICAgIHRoaXMud2lkdGhVbml0U2VsZWN0b3IudmFsdWUgPSBnZXRVbml0KHdpZHRoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEhlaWdodFZhbHVlQWNjb3JkaW5nVG9DbGFzcygpIHtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnaGVpZ2h0J107XG4gICAgICAgIHRoaXMuaGVpZ2h0U2l6ZUlucHV0LnZhbHVlID0gYCR7cGFyc2VJbnQoaGVpZ2h0KSB8fCAwfWA7XG4gICAgICAgIHRoaXMuaGVpZ2h0U2l6ZVNlbGVjdG9yLnZhbHVlID0gZ2V0VW5pdChoZWlnaHQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYnVpbGRJbnB1dChJbnB1dFR5cGVFbnVtOiBJbnB1dFR5cGVFbnVtLCBjYWxsYmFjazogeygpOiB2b2lkfSkge1xuICAgICAgICByZXR1cm4gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtKVxuICAgICAgICAgICAgLnNldE1pbigwKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgY2FsbGJhY2spXG4gICAgICAgICAgICAuYnVpbGQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGJ1aWxkU2VsZWN0b3IoY2FsbGJhY2s6IHsoKTogdm9pZH0pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihVbml0c0VudW0pXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgY2FsbGJhY2spXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlV2lkdGgoKSB7XG4gICAgICAgIGlmKHRoaXMud2lkdGhTaXplSW5wdXQudmFsdWUgPT09ICcwJyl7XG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0LnJlbW92ZVByb3BlcnR5KCd3aWR0aCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ3dpZHRoJ10gPSBgJHt0aGlzLndpZHRoU2l6ZUlucHV0LnZhbHVlfSR7dGhpcy53aWR0aFVuaXRTZWxlY3Rvci52YWx1ZX1gO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlSGVpZ2h0KCkge1xuICAgICAgICBpZih0aGlzLmhlaWdodFNpemVJbnB1dC52YWx1ZSA9PT0gJzAnKXtcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQucmVtb3ZlUHJvcGVydHkoJ2hlaWdodCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2hlaWdodCddID0gYCR7dGhpcy5oZWlnaHRTaXplSW5wdXQudmFsdWV9JHt0aGlzLmhlaWdodFNpemVTZWxlY3Rvci52YWx1ZX1gO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGFzc05hbWVVcGRhdGVkKG5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0ID0gQ3NzU3R5bGVTaGVldC5nZXRSdWxlU3R5bGVzKG5hbWUpO1xuICAgICAgICB0aGlzLnNldEluaXRpYWxWYWx1ZXNBY2NvcmRpbmdUb0NsYXNzKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IENzc1N0eWxlU2hlZXQgZnJvbSAnLi4vLi4vY3NzLXN0eWxlc2hlZXQvY3NzLXN0eWxlc2hlZXQnO1xuaW1wb3J0IENsYXNzQ2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2UgZnJvbSAnLi4vaW50ZXJmYWNlcy9jbGFzcy1jaGFuZ2Utb2JzZXJ2ZXIuaW50ZXJmYWNlJztcblxuaW1wb3J0IEJ1dHRvbkJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0J1dHRvbkJ1aWxkZXInO1xuaW1wb3J0IENvbnRhaW5lckJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0NvbnRhaW5lckJ1aWxkZXInO1xuaW1wb3J0IElucHV0QnVpbGRlciBmcm9tICcuLi9tb2RlbHMvSW5wdXRCdWlsZGVyJztcbmltcG9ydCBMYWJlbEJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0xhYmVsQnVpbGRlcic7XG5cbmltcG9ydCB7IElucHV0VHlwZUVudW0gfSBmcm9tICcuLi9lbnVtcy9pbnB1dC10eXBlLmVudW0nO1xuaW1wb3J0IHsgU3R5bGVOYW1lRW51bSB9IGZyb20gJy4uL2VudW1zL3N0eWxlLW5hbWUuZW51bSc7XG5pbXBvcnQgeyBEaXNwbGF5VHlwZXNFbnVtIH0gZnJvbSAnLi4vZW51bXMvZGlzcGxheS10eXBlcy5lbnVtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXJsRGVmaW5pdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIENsYXNzQ2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2Uge1xuICAgIHByaXZhdGUgZG9tRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBjb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgZG9tRWxlbWVudFN0eWxlU2hlZXQ6IENTU1N0eWxlRGVjbGFyYXRpb247XG5cbiAgICBwcml2YXRlIHVybElucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IoZG9tRWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCA9IENzc1N0eWxlU2hlZXQuZ2V0UnVsZVN0eWxlcyh0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0WzBdKTtcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnRzKCk7XG4gICAgfVxuXG4gICAgZ2V0IGN1cnJlbnRVcmwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnRbJ3NyYyddO1xuICAgIH1cblxuICAgIHNldE5ld1VybCh1cmw/OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50WydzcmMnXSA9IHVybDtcbiAgICB9XG5cbiAgICBnZXQgY29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRDb21wb25lbnRzKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVVybCA9IHRoaXMudXBkYXRlVXJsLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5idWlsZEFsbENvbXBvbmVudHMoKTtcbiAgICAgICAgdGhpcy5zZXRJbml0aWFsVmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpO1xuXG4gICAgICAgIGNvbnN0IGFjY2VwdEJ1dHRvbiA9IG5ldyBCdXR0b25CdWlsZGVyKClcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudXBkYXRlVXJsKVxuICAgICAgICAgICAgLnNldElubmVyVGV4dCgnQXNzaWduJylcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgY29uc3QgdXJsQ29tcG9uZW50c0NvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnQXNzaWduIFVybCcpXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLnVybElucHV0KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChhY2NlcHRCdXR0b24pXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5ib3JkZXIsICcxcHggc29saWQgIzRDQUY1MCcpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5wYWRkaW5nLCAnM3B4JylcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnSW1hZ2UgUHJvcGVydGllcycpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh1cmxDb21wb25lbnRzQ29udGFpbmVyKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICB9XG5cbiAgICBwcml2YXRlIGJ1aWxkQWxsQ29tcG9uZW50cygpIHtcbiAgICAgICAgdGhpcy5idWlsZFVybENvbXBvbmVudHMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGJ1aWxkVXJsQ29tcG9uZW50cygpIHtcbiAgICAgICAgdGhpcy51cmxJbnB1dCA9IG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS51cmwpLmJ1aWxkKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRJbml0aWFsVmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpIHtcbiAgICAgICAgdGhpcy5zZXRVcmxJbml0aWFsVmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0VXJsSW5pdGlhbFZhbHVlc0FjY29yZGluZ1RvQ2xhc3MoKSB7XG4gICAgICAgIHRoaXMudXJsSW5wdXQudmFsdWUgPSB0aGlzLmN1cnJlbnRVcmw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVVcmwoKSB7XG4gICAgICAgIGlmKHRoaXMudXJsSW5wdXQudmFsdWUgPT09ICcnKXtcbiAgICAgICAgICAgIHRoaXMuc2V0TmV3VXJsKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXROZXdVcmwodGhpcy51cmxJbnB1dC52YWx1ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNsYXNzTmFtZVVwZGF0ZWQobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQgPSBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXMobmFtZSk7XG4gICAgICAgIHRoaXMuc2V0SW5pdGlhbFZhbHVlc0FjY29yZGluZ1RvQ2xhc3MoKTtcbiAgICB9XG59XG4iLCJjb25zdCBjb250YW50cyA9IHtcbiAgICBJTlZFUlRFRF9CQUNLR1JPVU5EX0NPTE9SOiAncmdiKDIwOSwyNTUsMjQwKSdcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29udGFudHNcbiIsImV4cG9ydCBlbnVtIEFkZENvbXBvbmVudCB7XG4gICAgYWRkSWREZWZpbml0aW9uQ29tcG9uZW50ID0gJ2FkZElkRGVmaW5pdGlvbkNvbXBvbmVudCcsXG4gICAgYWRkQ2xhc3NOYW1lRGVmaW5pdGlvbkNvbXBvbmVudCA9ICdhZGRDbGFzc05hbWVEZWZpbml0aW9uQ29tcG9uZW50JyxcbiAgICBhZGRNYXJnaW5TdHlsZUNvbXBvbmVudCA9ICdhZGRNYXJnaW5TdHlsZUNvbXBvbmVudCcsXG4gICAgYWRkUGFkZGluZ1N0eWxlQ29tcG9uZW50ID0gJ2FkZFBhZGRpbmdTdHlsZUNvbXBvbmVudCcsXG4gICAgYWRkU2l6ZUNvbXBvbmVudHMgPSAnYWRkU2l6ZUNvbXBvbmVudHMnLFxuICAgIGFkZEZvbnRDb21wb25lbnMgPSAnYWRkRm9udENvbXBvbmVucycsXG4gICAgYWRkQmFja2dyb3VuZFNldHRpbmdzQ29tcG9uZW50ID0gJ2FkZEJhY2tncm91bmRTZXR0aW5nc0NvbXBvbmVudCcsXG4gICAgYWRkQm9yZGVyU2V0dGluZ3NDb21wb25lbnQgPSAnYWRkQm9yZGVyU2V0dGluZ3NDb21wb25lbnQnLFxuICAgIGFkZEJveFNoYWRvd0NvbXBvbmVudCA9ICdhZGRCb3hTaGFkb3dDb21wb25lbnQnLFxuICAgIGFkZERpc3BsYXlBc0NoaWxkQ29tcG9uZW50ID0gJ2FkZERpc3BsYXlBc0NoaWxkQ29tcG9uZW50JyxcbiAgICBhZGRBY3Rpb25zQ29tcG9uZW50cyA9ICdhZGRBY3Rpb25zQ29tcG9uZW50cycsXG5cbiAgICBhZGRJbm5lclRleHRDaGFuZ2VDb21wb25lbnQgPSAnYWRkSW5uZXJUZXh0Q2hhbmdlQ29tcG9uZW50JyxcbiAgICBhZGREaXNwbGF5QXNQYXJlbnRDb21wb25lbnQgPSAnYWRkRGlzcGxheUFzUGFyZW50Q29tcG9uZW50JyxcbiAgICBhZGRVcmxJbnB1dENvbXBvbmVudCA9ICdhZGRVcmxJbnB1dENvbXBvbmVudCcsXG4gICAgYWRkSW5wdXRUeXBlU2VsZWN0b3JDb21wb25lbnQgPSAnYWRkSW5wdXRUeXBlU2VsZWN0b3JDb21wb25lbnQnLFxufVxuIiwiZXhwb3J0IGVudW0gQWxpZ25GbGV4Q29udGVudEVudW0ge1xuICAgICdmbGV4LXN0YXJ0JyA9ICdmbGV4LXN0YXJ0JyxcbiAgICAnZmxleC1lbmQnID0gJ2ZsZXgtZW5kJyxcbiAgICBjZW50ZXIgPSAnY2VudGVyJyxcbiAgICAnc3BhY2UtYmV0d2VlbicgPSAnc3BhY2UtYmV0d2VlbicsXG4gICAgJ3NwYWNlLWFyb3VuZCcgPSAnc3BhY2UtYXJvdW5kJyxcbiAgICBzdHJldGNoID0gJ3N0cmV0Y2gnLFxuICAgIG5vbmUgPSAnJyxcbn1cbiIsImV4cG9ydCBlbnVtIEFsaWduRmxleEl0ZW1zRW51bSB7XG4gICAgJ2ZsZXgtc3RhcnQnID0gJ2ZsZXgtc3RhcnQnLFxuICAgICdmbGV4LWVuZCcgPSAnZmxleC1lbmQnLFxuICAgIGNlbnRlciA9ICdjZW50ZXInLFxuICAgIGJhc2VsaW5lID0gJ2Jhc2VsaW5lJyxcbiAgICBzdHJldGNoID0gJ3N0cmV0Y2gnLFxuICAgIG5vbmUgPSAnJ1xufVxuIiwiZXhwb3J0IGVudW0gQWxpZ25GbGV4U2VsZkVudW0ge1xuICAgIGF1dG8gPSAnYXV0bycsXG4gICAgJ2ZsZXgtc3RhcnQnID0gJ2ZsZXgtc3RhcnQnLFxuICAgICdmbGV4LWVuZCcgPSAnZmxleC1lbmQnLFxuICAgIGNlbnRlciA9ICdjZW50ZXInLFxuICAgICdiYXNlbGluZScgPSAnYmFzZWxpbmUnLFxuICAgIHN0cmV0Y2ggPSAnc3RyZXRjaCcsXG4gICAgbm9uZSA9ICcnLFxufVxuIiwiZXhwb3J0IGVudW0gQWxpZ25HcmlkQ29udGVudEVudW0ge1xuICAgIHN0YXJ0ID0gJ3N0YXJ0JyxcbiAgICBlbmQgPSAnZW5kJyxcbiAgICBjZW50ZXIgPSAnY2VudGVyJyxcbiAgICBzdHJldGNoID0gJ3N0cmV0Y2gnLFxuICAgICdzcGFjZS1iZXR3ZWVuJyA9ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAnc3BhY2UtYXJvdW5kJyA9ICdzcGFjZS1hcm91bmQnLFxuICAgICdzcGFjZS1ldmVubHknID0gJ3NwYWNlLWV2ZW5seScsXG4gICAgbm9uZSA9ICcnXG59XG4iLCJleHBvcnQgZW51bSBBbGlnbkdyaWRJdGVtc0VudW0ge1xuICAgIHN0YXJ0ID0gJ3N0YXJ0JyxcbiAgICBlbmQgPSAnZW5kJyxcbiAgICBjZW50ZXIgPSAnY2VudGVyJyxcbiAgICBzdHJldGNoID0gJ3N0cmV0Y2gnLFxuICAgIG5vbmUgPSAnJ1xufVxuIiwiZXhwb3J0IGVudW0gQWxpZ25HcmlkU2VsZkVudW0ge1xuICAgIHN0YXJ0ID0gJ3N0YXJ0JyxcbiAgICBlbmQgPSAnZW5kJyxcbiAgICBjZW50ZXIgPSAnY2VudGVyJyxcbiAgICBzdHJldGNoID0gJ3N0cmV0Y2gnLFxuICAgIG5vbmUgPSAnJ1xufVxuIiwiZXhwb3J0IGVudW0gQm9yZGVyU3R5bGVFbnVtIHtcbiAgICBub25lID0gJ25vbmUnLFxuICAgIGhpZGRlbiA9ICdoaWRkZW4nLFxuICAgIGRvdHRlZCA9ICdkb3R0ZWQnLFxuICAgIGRhc2hlZCA9ICdkYXNoZWQnLFxuICAgIHNvbGlkID0gJ3NvbGlkJyxcbiAgICBkb3VibGUgPSAnZG91YmxlJyxcbiAgICBncm9vdmUgPSAnZ3Jvb3ZlJyxcbiAgICByaWRnZSA9ICdyaWRnZScsXG4gICAgaW5zZXQgPSAnaW5zZXQnLFxuICAgIG91dHNldCA9ICdvdXRzZXQnLFxufVxuXG5cblxuIiwiZXhwb3J0IGVudW0gRGlzcGxheVR5cGVzRW51bSB7XG4gICAgZmxleCA9ICdmbGV4JyxcbiAgICAnaW5saW5lLWZsZXgnID0gJ2lubGluZS1mbGV4JyxcbiAgICBncmlkID0gJ2dyaWQnLFxuICAgICdpbmxpbmUtZ3JpZCcgPSAnaW5saW5lLWdyaWQnLFxuICAgIGJsb2NrID0gJ2Jsb2NrJyxcbiAgICBpbmxpbmUgPSAnaW5saW5lJyxcbiAgICBjb250ZW50cyA9ICdjb250ZW50cycsXG4gICAgaW5oZXJpdCA9ICdpbmhlcml0JyxcbiAgICBpbml0aWFsID0gJ2luaXRpYWwnLFxuICAgIHJldmVydCA9ICdyZXZlcnQnLFxuICAgIHVuc2V0ID0gJ3Vuc2V0JyxcbiAgICBub25lID0gJydcbn1cbiIsImV4cG9ydCBlbnVtIEV2ZW50VHlwZUVudW0ge1xuICAgIGlucHV0ID0gJ2lucHV0JyxcbiAgICBjaGFuZ2UgPSAnY2hhbmdlJyxcbn1cbiIsImV4cG9ydCBlbnVtIEZsZXhEaXJlY3Rpb25FbnVtIHtcbiAgICByb3cgPSAncm93JyxcbiAgICAncm93LXJldmVyc2UnID0gJ3Jvdy1yZXZlcnNlJyxcbiAgICBjb2x1bW4gPSAnY29sdW1uJyxcbiAgICAnY29sdW1uLXJldmVyc2UnID0gJ2NvbHVtbi1yZXZlcnNlJyxcbiAgICBub25lID0gJydcbn1cbiIsImV4cG9ydCBlbnVtIEZsZXhXcmFwRW51bSB7XG4gICAgbm93cmFwID0gJ25vd3JhcCcsXG4gICAgd3JhcCA9ICd3cmFwJyxcbiAgICAnd3JhcC1yZXZlcnNlJyA9ICd3cmFwLXJldmVyc2UnLFxuICAgIG5vbmUgPSAnJ1xufVxuIiwiZXhwb3J0IGVudW0gRm9udFN0eWxlc0VudW0ge1xuICAgICdub3JtYWwnID0gJ25vcm1hbCcsXG4gICAgJ2l0YWxpYycgPSAnaXRhbGljJyxcbiAgICAnb2JsaXF1ZScgPSAnb2JsaXF1ZScsXG59XG4iLCJleHBvcnQgZW51bSBGb250VmFyaWFudEVudW0ge1xuICAgICdub3JtYWwnID0gJ25vcm1hbCcsXG4gICAgJ3NtYWxsLWNhcHMnID0gJ3NtYWxsLWNhcHMnLFxuICAgICdhbGwtc21hbGwtY2FwcycgPSAnYWxsLXNtYWxsLWNhcHMnLFxuICAgICdwZXRpdGUtY2FwcycgPSAncGV0aXRlLWNhcHMnLFxuICAgICdhbGwtcGV0aXRlLWNhcHMnID0gJ2FsbC1wZXRpdGUtY2FwcycsXG4gICAgJ3VuaWNhc2UnID0gJ3VuaWNhc2UnLFxuICAgICd0aXRsaW5nLWNhcHMnID0gJ3RpdGxpbmctY2FwcycsXG4gICAgJ2luaGVyaXQnID0gJ2luaGVyaXQnLFxuICAgICdpbml0aWFsJyA9ICdpbml0aWFsJyxcbiAgICAncmV2ZXJ0JyA9ICdyZXZlcnQnLFxuICAgICdyZXZlcnQtbGF5ZXInID0gJ3JldmVydC1sYXllcicsXG4gICAgJ3Vuc2V0JyA9ICd1bnNldCcsXG59XG4iLCJleHBvcnQgZW51bSBGb250V2VpZ2h0RW51bSB7XG4gICAgJ2xpZ2h0ZXInID0gJ2xpZ2h0ZXInLFxuICAgICdub3JtYWwnID0gJ25vcm1hbCcsXG4gICAgJ2JvbGQnID0gJ2JvbGQnLFxuICAgICdib2xkZXInID0gJ2JvbGRlcicsXG4gICAgJ3MxMDAnID0gJzEwMCcsXG4gICAgJ3MyMDAnID0gJzIwMCcsXG4gICAgJ3MzMDAnID0gJzMwMCcsXG4gICAgJ3M0MDAnID0gJzQwMCcsXG4gICAgJ3M1MDAnID0gJzUwMCcsXG4gICAgJ3M2MDAnID0gJzYwMCcsXG4gICAgJ3M3MDAnID0gJzcwMCcsXG4gICAgJ3M4MDAnID0gJzgwMCcsXG4gICAgJ3M5MDAnID0gJzkwMCcsXG4gICAgJ2luaGVyaXQnID0gJ2luaGVyaXQnLFxuICAgICdpbml0aWFsJyA9ICdpbml0aWFsJyxcbiAgICAncmV2ZXJ0JyA9ICdyZXZlcnQnLFxuICAgICdyZXZlcnQtbGF5ZXInID0gJ3JldmVydC1sYXllcicsXG4gICAgJ3Vuc2V0JyA9ICd1bnNldCcsXG59XG4iLCJleHBvcnQgZW51bSBGb250c0VudW0ge1xuICAgICdjdXJzaXZlJyA9ICdjdXJzaXZlJyxcbiAgICAnbW9ub3NwYWNlJyA9ICdtb25vc3BhY2UnLFxuICAgICdzZXJpZicgPSAnc2VyaWYnLFxuICAgICdzYW5zLXNlcmlmJyA9ICdzYW5zLXNlcmlmJyxcbiAgICAnZmFudGFzeScgPSAnZmFudGFzeScsXG4gICAgJ2RlZmF1bHQnID0gJ2RlZmF1bHQnLFxuICAgICdBcmlhbCcgPSAnQXJpYWwnLFxuICAgICdBcmlhbCBCbGFjaycgPSAnQXJpYWwgQmxhY2snLFxuICAgICdBcmlhbCBOYXJyb3cnID0gJ0FyaWFsIE5hcnJvdycsXG4gICAgJ0FyaWFsIFJvdW5kZWQgTVQgQm9sZCcgPSAnQXJpYWwgUm91bmRlZCBNVCBCb2xkJyxcbiAgICAnQm9va21hbiBPbGQgU3R5bGUnID0gJ0Jvb2ttYW4gT2xkIFN0eWxlJyxcbiAgICAnQnJhZGxleSBIYW5kIElUQycgPSAnQnJhZGxleSBIYW5kIElUQycsXG4gICAgJ0NlbnR1cnknID0gJ0NlbnR1cnknLFxuICAgICdDZW50dXJ5IEdvdGhpYycgPSAnQ2VudHVyeSBHb3RoaWMnLFxuICAgICdDb21pYyBTYW5zIE1TJyA9ICdDb21pYyBTYW5zIE1TJyxcbiAgICAnQ291cmllcicgPSAnQ291cmllcicsXG4gICAgJ0NvdXJpZXIgTmV3JyA9ICdDb3VyaWVyIE5ldycsXG4gICAgJ0dlb3JnaWEnID0gJ0dlb3JnaWEnLFxuICAgICdHZW50aXVtJyA9ICdHZW50aXVtJyxcbiAgICAnSW1wYWN0JyA9ICdJbXBhY3QnLFxuICAgICdLaW5nJyA9ICdLaW5nJyxcbiAgICAnTHVjaWRhIENvbnNvbGUnID0gJ0x1Y2lkYSBDb25zb2xlJyxcbiAgICAnTGFsaXQnID0gJ0xhbGl0JyxcbiAgICAnTW9kZW5hJyA9ICdNb2RlbmEnLFxuICAgICdNb25vdHlwZSBDb3JzaXZhJyA9ICdNb25vdHlwZSBDb3JzaXZhJyxcbiAgICAnUGFweXJ1cycgPSAnUGFweXJ1cycsXG4gICAgJ1RhaG9tYScgPSAnVGFob21hJyxcbiAgICAnVGVYJyA9ICdUZVgnLFxuICAgICdUaW1lcycgPSAnVGltZXMnLFxuICAgICdUaW1lcyBOZXcgUm9tYW4nID0gJ1RpbWVzIE5ldyBSb21hbicsXG4gICAgJ1RyZWJ1Y2hldCBNUycgPSAnVHJlYnVjaGV0IE1TJyxcbiAgICAnVmVyZGFuYScgPSAnVmVyZGFuYScsXG4gICAgJ1Zlcm9uYScgPSAnVmVyb25hJyxcbn1cbiIsImV4cG9ydCBlbnVtIEdlbmVyYWxQc2V1ZG9jbGFzc0VudW0ge1xuICAgIGZvY3VzID0gJ2ZvY3VzJyxcbiAgICBob3ZlciA9ICdob3ZlcicsXG4gICAgYWN0aXZlID0gJ2FjdGl2ZScsXG4gICAgbm9uZSA9ICdub25lJ1xufVxuIiwiZXhwb3J0IGVudW0gR3JpZEF1dG9GbG93RW51bSB7XG4gICAgcm93ID0gJ3JvdycsXG4gICAgY29sdW1uID0gJ2NvbHVtbicsXG4gICAgJ3Jvdy1kZW5zZScgPSAncm93LWRlbnNlJyxcbiAgICAnY29sdW1uLWRlbnNlJyA9ICdjb2x1bW4tZGVuc2UnLFxuICAgIG5vbmUgPSAnJyxcbn1cbiIsImV4cG9ydCBlbnVtIElucHV0VHlwZUVudW0ge1xuICAgIHRleHQgPSAndGV4dCcsXG4gICAgbnVtYmVyID0gJ251bWJlcicsXG4gICAgY2hlY2tib3ggPSAnY2hlY2tib3gnLFxuICAgIGJ1dHRvbiA9ICdidXR0b24nLFxuICAgIGNvbG9yID0gJ2NvbG9yJyxcbiAgICBkYXRlID0gJ2RhdGUnLFxuICAgIGRhdGV0aW1lID0gJ2RhdGV0aW1lJyxcbiAgICAnZGF0ZXRpbWUtbG9jYWwnID0gJ2RhdGV0aW1lLWxvY2FsJyxcbiAgICBlbWFpbCA9ICdlbWFpbCcsXG4gICAgZmlsZSA9ICdmaWxlJyxcbiAgICBoaWRkZW4gPSAnaGlkZGVuJyxcbiAgICBtb250aCA9ICdtb250aCcsXG4gICAgcGFzc3dvcmQgPSAncGFzc3dvcmQnLFxuICAgIHJhZGlvID0gJ3JhZGlvJyxcbiAgICByYW5nZSA9ICdyYW5nZScsXG4gICAgcmVzZXQgPSAncmVzZXQnLFxuICAgIHN1Ym1pdCA9ICdzdWJtaXQnLFxuICAgIHRlbCA9ICd0ZWwnLFxuICAgIHRpbWUgPSAndGltZScsXG4gICAgdXJsID0gJ3VybCcsXG4gICAgd2VlayA9ICd3ZWVrJ1xufVxuIiwiZXhwb3J0IGVudW0gSnVzdGlmeUZsZXhDb250ZW50RW51bSB7XG4gICAgJ2ZsZXgtc3RhcnQnID0gJ2ZsZXgtc3RhcnQnLFxuICAgICdmbGV4LWVuZCcgPSAnZmxleC1lbmQnLFxuICAgIGNlbnRlciA9ICdjZW50ZXInLFxuICAgICdzcGFjZS1iZXR3ZWVuJyA9ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAnc3BhY2UtYXJvdW5kJyA9ICdzcGFjZS1hcm91bmQnLFxuICAgIG5vbmUgPSAnJ1xufVxuIiwiZXhwb3J0IGVudW0gSnVzdGlmeUdyaWRDb250ZW50RW51bSB7XG4gICAgc3RhcnQgPSAnc3RhcnQnLFxuICAgIGVuZCA9ICdlbmQnLFxuICAgIGNlbnRlciA9ICdjZW50ZXInLFxuICAgIHN0cmV0Y2ggPSAnc3RyZXRjaCcsXG4gICAgJ3NwYWNlLWJldHdlZW4nID0gJ3NwYWNlLWJldHdlZW4nLFxuICAgICdzcGFjZS1hcm91bmQnID0gJ3NwYWNlLWFyb3VuZCcsXG4gICAgJ3NwYWNlLWV2ZW5seScgPSAnc3BhY2UtZXZlbmx5JyxcbiAgICBub25lID0gJydcbn1cbiIsImV4cG9ydCBlbnVtIEp1c3RpZnlHcmlkSXRlbXNFbnVtIHtcbiAgICBzdGFydCA9ICdzdGFydCcsXG4gICAgZW5kID0gJ2VuZCcsXG4gICAgY2VudGVyID0gJ2NlbnRlcicsXG4gICAgc3RyZXRjaCA9ICdzdHJldGNoJyxcbiAgICBub25lID0gJydcbn1cbiIsImV4cG9ydCBlbnVtIEp1c3RpZnlHcmlkU2VsZkVudW0ge1xuICAgIHN0YXJ0ID0gJ3N0YXJ0JyxcbiAgICBlbmQgPSAnZW5kJyxcbiAgICBjZW50ZXIgPSAnY2VudGVyJyxcbiAgICBzdHJldGNoID0gJ3N0cmV0Y2gnLFxuICAgIG5vbmUgPSAnJ1xufVxuIiwiZXhwb3J0IGVudW0gU3R5bGVOYW1lRW51bSB7XG4gICAgbWFyZ2luID0gJ21hcmdpbicsXG4gICAgcGFkZGluZyA9ICdwYWRkaW5nJyxcbiAgICBkaXNwbGF5ID0gJ2Rpc3BsYXknLFxuICAgICdmbGV4LWRpcmVjdGlvbicgPSAnZmxleC1kaXJlY3Rpb24nLFxuICAgICdhbGlnbi1pdGVtcycgPSAnYWxpZ24taXRlbXMnLFxuICAgICdhbGlnbi1zZWxmJyA9ICdhbGlnbi1zZWxmJyxcbiAgICAnZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zJyA9ICdncmlkLXRlbXBsYXRlLWNvbHVtbnMnLFxuICAgICdncmlkLXRlbXBsYXRlLXJvd3MnID0gJ2dyaWQtdGVtcGxhdGUtcm93cycsXG4gICAgYm9yZGVyID0gJ2JvcmRlcicsXG4gICAgcmVzaXplID0gJ3Jlc2l6ZScsXG4gICAgd2lkdGggPSAnd2l0ZHRoJyxcbiAgICBoZWlnaHQgPSAnaGVpZ2h0JyxcbiAgICAnZm9udC1zaXplJyA9ICdmb250LXNpemUnLFxufVxuIiwiZXhwb3J0IGVudW0gVGl0bGVUeXBlc0VudW0ge1xuICAgIEgxID0gJ0gxJyxcbiAgICBIMiA9ICdIMicsXG4gICAgSDMgPSAnSDMnLFxuICAgIEg0ID0gJ0g0JyxcbiAgICBINSA9ICdINScsXG4gICAgSDYgPSAnSDYnLFxufVxuIiwiZXhwb3J0IGVudW0gVW5pdHNFbnVtIHtcbiAgICBweCA9ICdweCcsXG4gICAgZW0gPSAnZW0nLFxuICAgIHJlbSA9ICdyZW0nLFxuICAgIHZ3ID0gJ3Z3JyxcbiAgICB2aCA9ICd2aCcsXG4gICAgdm1pbiA9ICd2bWluJyxcbiAgICB2bWF4ID0gJ3ZtYXgnLFxuICAgICclJyA9ICclJyxcbiAgICBleCA9ICdleCcsXG4gICAgY2ggPSAnY2gnLFxuICAgIG1tID0gJ21tJyxcbiAgICBjbSA9ICdjbScsXG4gICAgaW4gPSAnaW4nLFxuICAgIHB0ID0gJ3B0JyxcbiAgICBwYyA9ICdwYycsXG4gICAgYXV0byA9ICdhdXRvJ1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVmaW5lRWxlbWVudElkKGluaXRpYWxOYW1lOiBzdHJpbmcsIGluc3RhbmNlczogSFRNTEVsZW1lbnRbXSk6IHN0cmluZyB7XG4gICAgY29uc3QgbmFtZUFscmVhZHlFeGlzdHMgPSBpbnN0YW5jZXMuZmluZCgoaW5zdGFuY2UpID0+IGluc3RhbmNlLmlkID09PSBpbml0aWFsTmFtZSkgPyB0cnVlIDogZmFsc2U7XG5cbiAgICBpZiAobmFtZUFscmVhZHlFeGlzdHMpIHtcbiAgICAgICAgYWxlcnQoJ0lkIG5hbWUgYWxyZWFkeSBleGlzdHMgXFxuVGhlIG5hbWUgaGFzIG5vdCBiZWVuIHVwZGF0ZWQnKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJZCBuYW1lIGFscmVhZHkgZXhpc3RzJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluaXRpYWxOYW1lO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVmaW5lRWxlbWVudE5hbWUoaW5pdGlhbE5hbWU6IHN0cmluZywgaW5zdGFuY2VzOiBIVE1MRWxlbWVudFtdKTogc3RyaW5nIHtcbiAgICBjb25zdCBuYW1lQWxyZWFkeUV4aXN0cyA9IGluc3RhbmNlcy5maW5kKChpbnN0YW5jZSkgPT4gaW5zdGFuY2VbJ25hbWUnXSA9PT0gaW5pdGlhbE5hbWUpID8gdHJ1ZSA6IGZhbHNlO1xuXG4gICAgaWYgKG5hbWVBbHJlYWR5RXhpc3RzKSB7XG4gICAgICAgIGFsZXJ0KCdFbGVtZW50IG5hbWUgYWxyZWFkeSBleGlzdHMgXFxuVGhlIG5hbWUgaGFzIG5vdCBiZWVuIHVwZGF0ZWQnKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFbGVtZW50IG5hbWUgYWxyZWFkeSBleGlzdHMnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5pdGlhbE5hbWU7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkcmFnU3RhcnRXaXRoVGFyZ2V0Tm9kZU5hbWUoZXZlbnQ6IERyYWdFdmVudCkge1xuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0L3BsYWluJywgKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCkubm9kZU5hbWUpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2FwaXRhbGl6ZUZpcnN0TGV0dGVycyh0ZXh0OiBzdHJpbmcsIHNwbGl0Q2hhcmFjdGVyOiBzdHJpbmcsIGpvaW5DaGFyYWN0ZXI6IHN0cmluZykge1xuICAgIGNvbnN0IHdvcmRzID0gdGV4dC5zcGxpdChzcGxpdENoYXJhY3Rlcik7XG5cbiAgICByZXR1cm4gd29yZHMubWFwKCh3b3JkKSA9PiBgJHt3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7d29yZC5zbGljZSgxKX1gKS5qb2luKGpvaW5DaGFyYWN0ZXIpXG59XG4iLCJpbXBvcnQgeyBVbml0c0VudW0gfSBmcm9tICcuLi9lbnVtcy91bml0cy5lbnVtJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VW5pdCh0ZXh0OiBzdHJpbmcsIGRlZmF1bHRVbml0OiBVbml0c0VudW0gPSBVbml0c0VudW0ucHgpIHtcbiAgICB0cnl7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IHRleHQubWF0Y2goL1thLXolXSskL2kpXG4gICAgICAgIHJldHVybiB2YWx1ZXMgPyB2YWx1ZXNbMF0gOiBkZWZhdWx0VW5pdDtcbiAgICB9IGNhdGNoIHtcbiAgICAgICAgcmV0dXJuICdweCc7XG4gICAgfVxuXG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb2xvclRvSGV4KGNvbG9yOiBzdHJpbmcpIHtcbiAgaWYoY29sb3IgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAnIzAwMDAwMCc7XG4gIH1cblxuICBpZiAoY29sb3IuaW5jbHVkZXMoJ3JnYicpKSB7XG4gICAgcmV0dXJuIHJnYlRvSGV4KGNvbG9yKTtcbiAgfSBlbHNlIGlmIChjb2xvci5pbmNsdWRlcygnIycpKSB7XG4gICAgcmV0dXJuIGNvbG9yO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGZvdW5kQ29sb3IgPSBjb2xvclZhbHVlcy5maW5kKChjb2wpID0+IGNvbC5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IGNvbG9yKTtcblxuICAgIGlmKCFmb3VuZENvbG9yKSB7XG4gICAgICByZXR1cm4gJyMwMDAwMDAnO1xuICAgIH1cblxuICAgIHJldHVybiBmb3VuZENvbG9yLmhleDtcbiAgfVxufVxuXG5mdW5jdGlvbiByZ2JUb0hleChyZ2I6IHN0cmluZykge1xuICB0cnkge1xuICAgIGNvbnN0IFtyLCBnLCBiXSA9IHJnYi5yZXBsYWNlKC9bXlxcZCxdKy9nLCAnJykuc3BsaXQoJywnKTtcbiAgICByZXR1cm4gJyMnICsgY29tcG9uZW50VG9IZXgocikgKyBjb21wb25lbnRUb0hleChnKSArIGNvbXBvbmVudFRvSGV4KGIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gJyMwMDAwMDAnO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFRvSGV4KGMpIHtcbiAgY29uc3QgaGV4ID0gcGFyc2VJbnQoYykudG9TdHJpbmcoMTYpO1xuICBpZiAoaGV4ID09PSAnTmFOJykge1xuICAgIHJldHVybiAnMDAnO1xuICB9XG4gIHJldHVybiBoZXgubGVuZ3RoID09PSAxID8gJzAnICsgaGV4IDogaGV4O1xufVxuXG5jb25zdCBjb2xvclZhbHVlcyA9IFtcbiAgeyBoZXg6ICcjRjBGOEZGJywgbmFtZTogJ0FsaWNlQmx1ZScgfSxcbiAgeyBoZXg6ICcjRkFFQkQ3JywgbmFtZTogJ0FudGlxdWVXaGl0ZScgfSxcbiAgeyBoZXg6ICcjMDBGRkZGJywgbmFtZTogJ0FxdWEnIH0sXG4gIHsgaGV4OiAnIzdGRkZENCcsIG5hbWU6ICdBcXVhbWFyaW5lJyB9LFxuICB7IGhleDogJyNGMEZGRkYnLCBuYW1lOiAnQXp1cmUnIH0sXG4gIHsgaGV4OiAnI0Y1RjVEQycsIG5hbWU6ICdCZWlnZScgfSxcbiAgeyBoZXg6ICcjRkZFNEM0JywgbmFtZTogJ0Jpc3F1ZScgfSxcbiAgeyBoZXg6ICcjMDAwMDAwJywgbmFtZTogJ0JsYWNrJyB9LFxuICB7IGhleDogJyNGRkVCQ0QnLCBuYW1lOiAnQmxhbmNoZWRBbG1vbmQnIH0sXG4gIHsgaGV4OiAnIzAwMDBGRicsIG5hbWU6ICdCbHVlJyB9LFxuICB7IGhleDogJyM4QTJCRTInLCBuYW1lOiAnQmx1ZVZpb2xldCcgfSxcbiAgeyBoZXg6ICcjQTUyQTJBJywgbmFtZTogJ0Jyb3duJyB9LFxuICB7IGhleDogJyNERUI4ODcnLCBuYW1lOiAnQnVybHlXb29kJyB9LFxuICB7IGhleDogJyM1RjlFQTAnLCBuYW1lOiAnQ2FkZXRCbHVlJyB9LFxuICB7IGhleDogJyM3RkZGMDAnLCBuYW1lOiAnQ2hhcnRyZXVzZScgfSxcbiAgeyBoZXg6ICcjRDI2OTFFJywgbmFtZTogJ0Nob2NvbGF0ZScgfSxcbiAgeyBoZXg6ICcjRkY3RjUwJywgbmFtZTogJ0NvcmFsJyB9LFxuICB7IGhleDogJyM2NDk1RUQnLCBuYW1lOiAnQ29ybmZsb3dlckJsdWUnIH0sXG4gIHsgaGV4OiAnI0ZGRjhEQycsIG5hbWU6ICdDb3Juc2lsaycgfSxcbiAgeyBoZXg6ICcjREMxNDNDJywgbmFtZTogJ0NyaW1zb24nIH0sXG4gIHsgaGV4OiAnIzAwRkZGRicsIG5hbWU6ICdDeWFuJyB9LFxuICB7IGhleDogJyMwMDAwOEInLCBuYW1lOiAnRGFya0JsdWUnIH0sXG4gIHsgaGV4OiAnIzAwOEI4QicsIG5hbWU6ICdEYXJrQ3lhbicgfSxcbiAgeyBoZXg6ICcjQjg4NjBCJywgbmFtZTogJ0RhcmtHb2xkZW5Sb2QnIH0sXG4gIHsgaGV4OiAnI0E5QTlBOScsIG5hbWU6ICdEYXJrR3JheScgfSxcbiAgeyBoZXg6ICcjQTlBOUE5JywgbmFtZTogJ0RhcmtHcmV5JyB9LFxuICB7IGhleDogJyMwMDY0MDAnLCBuYW1lOiAnRGFya0dyZWVuJyB9LFxuICB7IGhleDogJyNCREI3NkInLCBuYW1lOiAnRGFya0toYWtpJyB9LFxuICB7IGhleDogJyM4QjAwOEInLCBuYW1lOiAnRGFya01hZ2VudGEnIH0sXG4gIHsgaGV4OiAnIzU1NkIyRicsIG5hbWU6ICdEYXJrT2xpdmVHcmVlbicgfSxcbiAgeyBoZXg6ICcjRkY4QzAwJywgbmFtZTogJ0RhcmtPcmFuZ2UnIH0sXG4gIHsgaGV4OiAnIzk5MzJDQycsIG5hbWU6ICdEYXJrT3JjaGlkJyB9LFxuICB7IGhleDogJyM4QjAwMDAnLCBuYW1lOiAnRGFya1JlZCcgfSxcbiAgeyBoZXg6ICcjRTk5NjdBJywgbmFtZTogJ0RhcmtTYWxtb24nIH0sXG4gIHsgaGV4OiAnIzhGQkM4RicsIG5hbWU6ICdEYXJrU2VhR3JlZW4nIH0sXG4gIHsgaGV4OiAnIzQ4M0Q4QicsIG5hbWU6ICdEYXJrU2xhdGVCbHVlJyB9LFxuICB7IGhleDogJyMyRjRGNEYnLCBuYW1lOiAnRGFya1NsYXRlR3JheScgfSxcbiAgeyBoZXg6ICcjMkY0RjRGJywgbmFtZTogJ0RhcmtTbGF0ZUdyZXknIH0sXG4gIHsgaGV4OiAnIzAwQ0VEMScsIG5hbWU6ICdEYXJrVHVycXVvaXNlJyB9LFxuICB7IGhleDogJyM5NDAwRDMnLCBuYW1lOiAnRGFya1Zpb2xldCcgfSxcbiAgeyBoZXg6ICcjRkYxNDkzJywgbmFtZTogJ0RlZXBQaW5rJyB9LFxuICB7IGhleDogJyMwMEJGRkYnLCBuYW1lOiAnRGVlcFNreUJsdWUnIH0sXG4gIHsgaGV4OiAnIzY5Njk2OScsIG5hbWU6ICdEaW1HcmF5JyB9LFxuICB7IGhleDogJyM2OTY5NjknLCBuYW1lOiAnRGltR3JleScgfSxcbiAgeyBoZXg6ICcjMUU5MEZGJywgbmFtZTogJ0RvZGdlckJsdWUnIH0sXG4gIHsgaGV4OiAnI0IyMjIyMicsIG5hbWU6ICdGaXJlQnJpY2snIH0sXG4gIHsgaGV4OiAnI0ZGRkFGMCcsIG5hbWU6ICdGbG9yYWxXaGl0ZScgfSxcbiAgeyBoZXg6ICcjMjI4QjIyJywgbmFtZTogJ0ZvcmVzdEdyZWVuJyB9LFxuICB7IGhleDogJyNGRjAwRkYnLCBuYW1lOiAnRnVjaHNpYScgfSxcbiAgeyBoZXg6ICcjRENEQ0RDJywgbmFtZTogJ0dhaW5zYm9ybycgfSxcbiAgeyBoZXg6ICcjRjhGOEZGJywgbmFtZTogJ0dob3N0V2hpdGUnIH0sXG4gIHsgaGV4OiAnI0ZGRDcwMCcsIG5hbWU6ICdHb2xkJyB9LFxuICB7IGhleDogJyNEQUE1MjAnLCBuYW1lOiAnR29sZGVuUm9kJyB9LFxuICB7IGhleDogJyM4MDgwODAnLCBuYW1lOiAnR3JheScgfSxcbiAgeyBoZXg6ICcjODA4MDgwJywgbmFtZTogJ0dyZXknIH0sXG4gIHsgaGV4OiAnIzAwODAwMCcsIG5hbWU6ICdHcmVlbicgfSxcbiAgeyBoZXg6ICcjQURGRjJGJywgbmFtZTogJ0dyZWVuWWVsbG93JyB9LFxuICB7IGhleDogJyNGMEZGRjAnLCBuYW1lOiAnSG9uZXlEZXcnIH0sXG4gIHsgaGV4OiAnI0ZGNjlCNCcsIG5hbWU6ICdIb3RQaW5rJyB9LFxuICB7IGhleDogJyNDRDVDNUMnLCBuYW1lOiAnSW5kaWFuUmVkJyB9LFxuICB7IGhleDogJyM0QjAwODInLCBuYW1lOiAnSW5kaWdvJyB9LFxuICB7IGhleDogJyNGRkZGRjAnLCBuYW1lOiAnSXZvcnknIH0sXG4gIHsgaGV4OiAnI0YwRTY4QycsIG5hbWU6ICdLaGFraScgfSxcbiAgeyBoZXg6ICcjRTZFNkZBJywgbmFtZTogJ0xhdmVuZGVyJyB9LFxuICB7IGhleDogJyNGRkYwRjUnLCBuYW1lOiAnTGF2ZW5kZXJCbHVzaCcgfSxcbiAgeyBoZXg6ICcjN0NGQzAwJywgbmFtZTogJ0xhd25HcmVlbicgfSxcbiAgeyBoZXg6ICcjRkZGQUNEJywgbmFtZTogJ0xlbW9uQ2hpZmZvbicgfSxcbiAgeyBoZXg6ICcjQUREOEU2JywgbmFtZTogJ0xpZ2h0Qmx1ZScgfSxcbiAgeyBoZXg6ICcjRjA4MDgwJywgbmFtZTogJ0xpZ2h0Q29yYWwnIH0sXG4gIHsgaGV4OiAnI0UwRkZGRicsIG5hbWU6ICdMaWdodEN5YW4nIH0sXG4gIHsgaGV4OiAnI0ZBRkFEMicsIG5hbWU6ICdMaWdodEdvbGRlblJvZFllbGxvdycgfSxcbiAgeyBoZXg6ICcjRDNEM0QzJywgbmFtZTogJ0xpZ2h0R3JheScgfSxcbiAgeyBoZXg6ICcjRDNEM0QzJywgbmFtZTogJ0xpZ2h0R3JleScgfSxcbiAgeyBoZXg6ICcjOTBFRTkwJywgbmFtZTogJ0xpZ2h0R3JlZW4nIH0sXG4gIHsgaGV4OiAnI0ZGQjZDMScsIG5hbWU6ICdMaWdodFBpbmsnIH0sXG4gIHsgaGV4OiAnI0ZGQTA3QScsIG5hbWU6ICdMaWdodFNhbG1vbicgfSxcbiAgeyBoZXg6ICcjMjBCMkFBJywgbmFtZTogJ0xpZ2h0U2VhR3JlZW4nIH0sXG4gIHsgaGV4OiAnIzg3Q0VGQScsIG5hbWU6ICdMaWdodFNreUJsdWUnIH0sXG4gIHsgaGV4OiAnIzc3ODg5OScsIG5hbWU6ICdMaWdodFNsYXRlR3JheScgfSxcbiAgeyBoZXg6ICcjNzc4ODk5JywgbmFtZTogJ0xpZ2h0U2xhdGVHcmV5JyB9LFxuICB7IGhleDogJyNCMEM0REUnLCBuYW1lOiAnTGlnaHRTdGVlbEJsdWUnIH0sXG4gIHsgaGV4OiAnI0ZGRkZFMCcsIG5hbWU6ICdMaWdodFllbGxvdycgfSxcbiAgeyBoZXg6ICcjMDBGRjAwJywgbmFtZTogJ0xpbWUnIH0sXG4gIHsgaGV4OiAnIzMyQ0QzMicsIG5hbWU6ICdMaW1lR3JlZW4nIH0sXG4gIHsgaGV4OiAnI0ZBRjBFNicsIG5hbWU6ICdMaW5lbicgfSxcbiAgeyBoZXg6ICcjRkYwMEZGJywgbmFtZTogJ01hZ2VudGEnIH0sXG4gIHsgaGV4OiAnIzgwMDAwMCcsIG5hbWU6ICdNYXJvb24nIH0sXG4gIHsgaGV4OiAnIzY2Q0RBQScsIG5hbWU6ICdNZWRpdW1BcXVhTWFyaW5lJyB9LFxuICB7IGhleDogJyMwMDAwQ0QnLCBuYW1lOiAnTWVkaXVtQmx1ZScgfSxcbiAgeyBoZXg6ICcjQkE1NUQzJywgbmFtZTogJ01lZGl1bU9yY2hpZCcgfSxcbiAgeyBoZXg6ICcjOTM3MERCJywgbmFtZTogJ01lZGl1bVB1cnBsZScgfSxcbiAgeyBoZXg6ICcjM0NCMzcxJywgbmFtZTogJ01lZGl1bVNlYUdyZWVuJyB9LFxuICB7IGhleDogJyM3QjY4RUUnLCBuYW1lOiAnTWVkaXVtU2xhdGVCbHVlJyB9LFxuICB7IGhleDogJyMwMEZBOUEnLCBuYW1lOiAnTWVkaXVtU3ByaW5nR3JlZW4nIH0sXG4gIHsgaGV4OiAnIzQ4RDFDQycsIG5hbWU6ICdNZWRpdW1UdXJxdW9pc2UnIH0sXG4gIHsgaGV4OiAnI0M3MTU4NScsIG5hbWU6ICdNZWRpdW1WaW9sZXRSZWQnIH0sXG4gIHsgaGV4OiAnIzE5MTk3MCcsIG5hbWU6ICdNaWRuaWdodEJsdWUnIH0sXG4gIHsgaGV4OiAnI0Y1RkZGQScsIG5hbWU6ICdNaW50Q3JlYW0nIH0sXG4gIHsgaGV4OiAnI0ZGRTRFMScsIG5hbWU6ICdNaXN0eVJvc2UnIH0sXG4gIHsgaGV4OiAnI0ZGRTRCNScsIG5hbWU6ICdNb2NjYXNpbicgfSxcbiAgeyBoZXg6ICcjRkZERUFEJywgbmFtZTogJ05hdmFqb1doaXRlJyB9LFxuICB7IGhleDogJyMwMDAwODAnLCBuYW1lOiAnTmF2eScgfSxcbiAgeyBoZXg6ICcjRkRGNUU2JywgbmFtZTogJ09sZExhY2UnIH0sXG4gIHsgaGV4OiAnIzgwODAwMCcsIG5hbWU6ICdPbGl2ZScgfSxcbiAgeyBoZXg6ICcjNkI4RTIzJywgbmFtZTogJ09saXZlRHJhYicgfSxcbiAgeyBoZXg6ICcjRkZBNTAwJywgbmFtZTogJ09yYW5nZScgfSxcbiAgeyBoZXg6ICcjRkY0NTAwJywgbmFtZTogJ09yYW5nZVJlZCcgfSxcbiAgeyBoZXg6ICcjREE3MEQ2JywgbmFtZTogJ09yY2hpZCcgfSxcbiAgeyBoZXg6ICcjRUVFOEFBJywgbmFtZTogJ1BhbGVHb2xkZW5Sb2QnIH0sXG4gIHsgaGV4OiAnIzk4RkI5OCcsIG5hbWU6ICdQYWxlR3JlZW4nIH0sXG4gIHsgaGV4OiAnI0FGRUVFRScsIG5hbWU6ICdQYWxlVHVycXVvaXNlJyB9LFxuICB7IGhleDogJyNEQjcwOTMnLCBuYW1lOiAnUGFsZVZpb2xldFJlZCcgfSxcbiAgeyBoZXg6ICcjRkZFRkQ1JywgbmFtZTogJ1BhcGF5YVdoaXAnIH0sXG4gIHsgaGV4OiAnI0ZGREFCOScsIG5hbWU6ICdQZWFjaFB1ZmYnIH0sXG4gIHsgaGV4OiAnI0NEODUzRicsIG5hbWU6ICdQZXJ1JyB9LFxuICB7IGhleDogJyNGRkMwQ0InLCBuYW1lOiAnUGluaycgfSxcbiAgeyBoZXg6ICcjRERBMEREJywgbmFtZTogJ1BsdW0nIH0sXG4gIHsgaGV4OiAnI0IwRTBFNicsIG5hbWU6ICdQb3dkZXJCbHVlJyB9LFxuICB7IGhleDogJyM4MDAwODAnLCBuYW1lOiAnUHVycGxlJyB9LFxuICB7IGhleDogJyM2NjMzOTknLCBuYW1lOiAnUmViZWNjYVB1cnBsZScgfSxcbiAgeyBoZXg6ICcjRkYwMDAwJywgbmFtZTogJ1JlZCcgfSxcbiAgeyBoZXg6ICcjQkM4RjhGJywgbmFtZTogJ1Jvc3lCcm93bicgfSxcbiAgeyBoZXg6ICcjNDE2OUUxJywgbmFtZTogJ1JveWFsQmx1ZScgfSxcbiAgeyBoZXg6ICcjOEI0NTEzJywgbmFtZTogJ1NhZGRsZUJyb3duJyB9LFxuICB7IGhleDogJyNGQTgwNzInLCBuYW1lOiAnU2FsbW9uJyB9LFxuICB7IGhleDogJyNGNEE0NjAnLCBuYW1lOiAnU2FuZHlCcm93bicgfSxcbiAgeyBoZXg6ICcjMkU4QjU3JywgbmFtZTogJ1NlYUdyZWVuJyB9LFxuICB7IGhleDogJyNGRkY1RUUnLCBuYW1lOiAnU2VhU2hlbGwnIH0sXG4gIHsgaGV4OiAnI0EwNTIyRCcsIG5hbWU6ICdTaWVubmEnIH0sXG4gIHsgaGV4OiAnI0MwQzBDMCcsIG5hbWU6ICdTaWx2ZXInIH0sXG4gIHsgaGV4OiAnIzg3Q0VFQicsIG5hbWU6ICdTa3lCbHVlJyB9LFxuICB7IGhleDogJyM2QTVBQ0QnLCBuYW1lOiAnU2xhdGVCbHVlJyB9LFxuICB7IGhleDogJyM3MDgwOTAnLCBuYW1lOiAnU2xhdGVHcmF5JyB9LFxuICB7IGhleDogJyM3MDgwOTAnLCBuYW1lOiAnU2xhdGVHcmV5JyB9LFxuICB7IGhleDogJyNGRkZBRkEnLCBuYW1lOiAnU25vdycgfSxcbiAgeyBoZXg6ICcjMDBGRjdGJywgbmFtZTogJ1NwcmluZ0dyZWVuJyB9LFxuICB7IGhleDogJyM0NjgyQjQnLCBuYW1lOiAnU3RlZWxCbHVlJyB9LFxuICB7IGhleDogJyNEMkI0OEMnLCBuYW1lOiAnVGFuJyB9LFxuICB7IGhleDogJyMwMDgwODAnLCBuYW1lOiAnVGVhbCcgfSxcbiAgeyBoZXg6ICcjRDhCRkQ4JywgbmFtZTogJ1RoaXN0bGUnIH0sXG4gIHsgaGV4OiAnI0ZGNjM0NycsIG5hbWU6ICdUb21hdG8nIH0sXG4gIHsgaGV4OiAnIzQwRTBEMCcsIG5hbWU6ICdUdXJxdW9pc2UnIH0sXG4gIHsgaGV4OiAnI0VFODJFRScsIG5hbWU6ICdWaW9sZXQnIH0sXG4gIHsgaGV4OiAnI0Y1REVCMycsIG5hbWU6ICdXaGVhdCcgfSxcbiAgeyBoZXg6ICcjRkZGRkZGJywgbmFtZTogJ1doaXRlJyB9LFxuICB7IGhleDogJyNGNUY1RjUnLCBuYW1lOiAnV2hpdGVTbW9rZScgfSxcbiAgeyBoZXg6ICcjRkZGRjAwJywgbmFtZTogJ1llbGxvdycgfSxcbiAgeyBoZXg6ICcjOUFDRDMyJywgbmFtZTogJ1llbGxvd0dyZWVuJyB9XG5dXG4iLCJpbXBvcnQgUmF3QnVpbGRlciBmcm9tICcuL1Jhd0J1aWxkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbmNob3JCdWlsZGVyIGV4dGVuZHMgUmF3QnVpbGRlcjxIVE1MQW5jaG9yRWxlbWVudD57XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdhJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldEhpcGVybGluayhoaXBlcmxpbms6IHN0cmluZykge1xuICAgICAgICB0aGlzLmVsZW1lbnQuaHJlZiA9IGhpcGVybGluaztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuIiwiaW1wb3J0IFJhd0J1aWxkZXIgZnJvbSAnLi9SYXdCdWlsZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uQnVpbGRlciBleHRlbmRzIFJhd0J1aWxkZXI8SFRNTEJ1dHRvbkVsZW1lbnQ+e1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignYnV0dG9uJyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFJhd0J1aWxkZXIgZnJvbSAnLi9SYXdCdWlsZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGFpbmVyQnVpbGRlciBleHRlbmRzIFJhd0J1aWxkZXI8SFRNTERpdkVsZW1lbnQ+e1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignZGl2Jyk7XG4gICAgfVxuXG4gICAgcHVibGljIGFwcGVuZENoaWxkSWZEZWZpbmVkKGVsZW1lbnQ6IEhUTUxFbGVtZW50KXtcbiAgICAgICAgaWYoZWxlbWVudCAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG4iLCJpbXBvcnQgUmF3QnVpbGRlciBmcm9tICcuL1Jhd0J1aWxkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtQnVpbGRlciBleHRlbmRzIFJhd0J1aWxkZXI8SFRNTEZvcm1FbGVtZW50PntcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ2Zvcm0nKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXBwZW5kQ2hpbGRJZkRlZmluZWQoZWxlbWVudDogSFRNTEVsZW1lbnQpe1xuICAgICAgICBpZihlbGVtZW50ICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cbiIsImltcG9ydCBSYXdCdWlsZGVyIGZyb20gJy4vUmF3QnVpbGRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlQnVpbGRlciBleHRlbmRzIFJhd0J1aWxkZXI8SFRNTEltYWdlRWxlbWVudD57XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdpbWcnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0VXJsKHVybD86IHN0cmluZykge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3JjID0gdXJsO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG4iLCJpbXBvcnQgUmF3QnVpbGRlciBmcm9tICcuL1Jhd0J1aWxkZXInO1xuaW1wb3J0IHsgSW5wdXRUeXBlRW51bSB9IGZyb20gJy4uL2VudW1zL2lucHV0LXR5cGUuZW51bSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0QnVpbGRlciBleHRlbmRzIFJhd0J1aWxkZXI8SFRNTElucHV0RWxlbWVudD57XG4gICAgY29uc3RydWN0b3IodHlwZTogSW5wdXRUeXBlRW51bSkge1xuICAgICAgICBzdXBlcignaW5wdXQnKVxuICAgICAgICB0aGlzLmVsZW1lbnQudHlwZSA9IHR5cGU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LnZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRWYWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0TmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Lm5hbWUgPSBuYW1lO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0UGxhY2Vob2xkZXIocGxhY2Vob2xkZXI6IHN0cmluZykge1xuICAgICAgICB0aGlzLmVsZW1lbnQucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIGNoZWNrZWQoY2hlY2tlZCA9IHRydWUpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmNoZWNrZWQgPSBjaGVja2VkO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0TWF4KG1heDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5tYXggPSBgJHttYXh9YDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldE1pbihtaW46IG51bWJlcikge1xuICAgICAgICB0aGlzLmVsZW1lbnQubWluID0gYCR7bWlufWA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cbiIsImltcG9ydCBSYXdCdWlsZGVyIGZyb20gJy4vUmF3QnVpbGRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhYmVsQnVpbGRlciBleHRlbmRzIFJhd0J1aWxkZXI8SFRNTExhYmVsRWxlbWVudD57XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdsYWJlbCcpO1xuICAgIH1cbn1cbiIsImltcG9ydCBSYXdCdWlsZGVyIGZyb20gJy4vUmF3QnVpbGRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVyZWRMaXN0QnVpbGRlciBleHRlbmRzIFJhd0J1aWxkZXI8SFRNTE9MaXN0RWxlbWVudD57XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdvbCcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhcHBlbmRDaGlsZElmRGVmaW5lZChlbGVtZW50OiBIVE1MRWxlbWVudCl7XG4gICAgICAgIGlmKGVsZW1lbnQgIT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgU3R5bGVOYW1lRW51bSB9IGZyb20gJy4uL2VudW1zL3N0eWxlLW5hbWUuZW51bSc7XG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBSYXdCdWlsZGVyPFQgZXh0ZW5kcyBIVE1MRWxlbWVudD57XG4gICAgcHJvdGVjdGVkIGVsZW1lbnQ6IFQ7XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldElkKGlkIDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5pZCA9IGlkO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0TmFtZShuYW1lIDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudFsnbmFtZSddID0gbmFtZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFN0eWxlKHN0eWxlTmFtZTogU3R5bGVOYW1lRW51bSwgdmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbc3R5bGVOYW1lXSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0SW5uZXJUZXh0KHRleHQ6IHN0cmluZyl7XG4gICAgICAgIHRoaXMuZWxlbWVudC5pbm5lclRleHQgPSB0ZXh0O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgZHJhZ2dhYmxlKHNlbGVjdGVkID0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuZHJhZ2dhYmxlID0gc2VsZWN0ZWQ7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRDc3NDbGFzc05hbWUoY2xhc3NOYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEFsbENoaWxkcygpOiBOb2RlW10ge1xuICAgICAgICBjb25zdCBjaGlsZE5vZGVzOiBOb2RlW10gPSBbXTtcblxuICAgICAgICB0aGlzLmVsZW1lbnQuY2hpbGROb2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgICBjaGlsZE5vZGVzLnB1c2gobm9kZSlcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gY2hpbGROb2RlcztcbiAgICB9XG5cbiAgICBwdWJsaWMgZmluZENoaWxkTm9kZUJ5TmFtZShuYW1lOiBzdHJpbmcpOiBOb2RlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QWxsQ2hpbGRzKCkuZmluZCgobm9kZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGVbJ25hbWUnXSA9PT0gbmFtZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHB1YmxpYyBhcHBlbmRDaGlsZChlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZUNoaWxkTm9kZShub2RlOiBOb2RlKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVDaGlsZChub2RlKVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlQ2hpbGROb2RlQnlOYW1lKG5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLnJlbW92ZUNoaWxkTm9kZSh0aGlzLmZpbmRDaGlsZE5vZGVCeU5hbWUobmFtZSkpXG4gICAgfVxuXG4gICAgcHVibGljIG1vb3ZlQ2hpbGRVcHBlclBvc2l0aW9uQnlOYW1lKG5hbWU6IHN0cmluZykge1xuICAgICAgICBjb25zdCBub2Rlc0FycmF5ID0gdGhpcy5nZXRBbGxDaGlsZHMoKTtcblxuICAgICAgICBjb25zdCBpbmRleE9mQ2hpbGQgPSBub2Rlc0FycmF5LmZpbmRJbmRleCgobm9kZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGVbJ25hbWUnXSA9PT0gbmFtZVxuICAgICAgICB9KTtcblxuICAgICAgICBpZihpbmRleE9mQ2hpbGQgIT09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zVG9Nb3ZlID0gbm9kZXNBcnJheS5zbGljZSggLSBub2Rlc0FycmF5Lmxlbmd0aCArIGluZGV4T2ZDaGlsZCAtIDEgKTtcblxuICAgICAgICAgICAgaXRlbXNUb01vdmUuZm9yRWFjaCgobm9kZSkgPT4gdGhpcy5lbGVtZW50LnJlbW92ZUNoaWxkKG5vZGUpKTtcblxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKG5vZGVzQXJyYXlbaW5kZXhPZkNoaWxkXSk7XG5cbiAgICAgICAgICAgIGl0ZW1zVG9Nb3ZlLnNwbGljZSgxLCAxKTtcblxuICAgICAgICAgICAgaXRlbXNUb01vdmUuZm9yRWFjaCgobm9kZSkgPT4gdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKG5vZGUpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBtb292ZUNoaWxkTG93ZXJQb3NpdGlvbkJ5TmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3Qgbm9kZXNBcnJheSA9IHRoaXMuZ2V0QWxsQ2hpbGRzKCk7XG5cbiAgICAgICAgY29uc3QgaW5kZXhPZkNoaWxkID0gbm9kZXNBcnJheS5maW5kSW5kZXgoKG5vZGUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBub2RlWyduYW1lJ10gPT09IG5hbWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYoaW5kZXhPZkNoaWxkICE9PSBub2Rlc0FycmF5Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zVG9Nb3ZlID0gbm9kZXNBcnJheS5zbGljZSggLSBub2Rlc0FycmF5Lmxlbmd0aCArIGluZGV4T2ZDaGlsZCApO1xuXG4gICAgICAgICAgICBpdGVtc1RvTW92ZS5mb3JFYWNoKChub2RlKSA9PiB0aGlzLmVsZW1lbnQucmVtb3ZlQ2hpbGQobm9kZSkpO1xuXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZEVsZW1lbnQgPSBpdGVtc1RvTW92ZS5zcGxpY2UoMCwgMSlbMF07XG5cbiAgICAgICAgICAgIGl0ZW1zVG9Nb3ZlLnNwbGljZSgwICsgMSwgMCwgc2VsZWN0ZWRFbGVtZW50KTtcblxuICAgICAgICAgICAgaXRlbXNUb01vdmUuZm9yRWFjaCgobm9kZSkgPT4gdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKG5vZGUpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBhZGRFdmVudExpc3RlbmVyKHR5cGU6IHN0cmluZywgY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2spXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmVsZW1lbnRbJ2Rpc2FibGVkJ10gPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYnVpbGQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XG4gICAgfVxufVxuIiwiaW1wb3J0IFJhd0J1aWxkZXIgZnJvbSAnLi9SYXdCdWlsZGVyJztcbmltcG9ydCBBcnJheVNlbGVjdG9yQm9keUludGVyZmFjZSBmcm9tICcuLi9pbnRlcmZhY2VzL3NlbGVjdG9yLWZyb20tYXJyYXktYm9keS5pbnRlcmZhY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3RvckZyb21BcnJheUJ1aWxkZXIgZXh0ZW5kcyBSYXdCdWlsZGVyPEhUTUxTZWxlY3RFbGVtZW50PntcbiAgICBwcml2YXRlIF9vcHRpb25zOiBBcnJheVNlbGVjdG9yQm9keUludGVyZmFjZVtdO1xuXG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogQXJyYXlTZWxlY3RvckJvZHlJbnRlcmZhY2VbXSkge1xuICAgICAgICBzdXBlcignc2VsZWN0Jyk7XG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB0aGlzLmFkZE9wdGlvbnMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZE9wdGlvbnMoKSB7XG4gICAgICAgIHRoaXMuX29wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIG5ld09wdGlvbi50ZXh0ID0gb3B0aW9uLnRleHQ7XG4gICAgICAgICAgICBuZXdPcHRpb24udmFsdWUgPSBvcHRpb24udmFsdWU7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQobmV3T3B0aW9uKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2VsZWN0T3B0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgZm91bmRWYWx1ZUluZGV4ID0gdGhpcy5fb3B0aW9ucy5maW5kSW5kZXgoKGtleSkgPT4ga2V5LnZhbHVlID09PSB2YWx1ZSk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zZWxlY3RlZEluZGV4ID0gZm91bmRWYWx1ZUluZGV4O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LnZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgc2VsZWN0ZWRJbmRleCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5zZWxlY3RlZEluZGV4O1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgc2VsZWN0ZWRJbmRleChpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zZWxlY3RlZEluZGV4ID0gaW5kZXg7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBvcHRpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50Lm9wdGlvbnM7XG4gICAgfVxufVxuIiwiaW1wb3J0IFJhd0J1aWxkZXIgZnJvbSAnLi9SYXdCdWlsZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIgZXh0ZW5kcyBSYXdCdWlsZGVyPEhUTUxTZWxlY3RFbGVtZW50PntcbiAgICBwcml2YXRlIGtleXM6IHN0cmluZ1tdO1xuICAgIHByaXZhdGUgb3B0aW9uczogUmVjb3JkPHN0cmluZyxzdHJpbmc+O1xuXG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogUmVjb3JkPHN0cmluZyxzdHJpbmc+KSB7XG4gICAgICAgIHN1cGVyKCdzZWxlY3QnKTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5rZXlzID0gT2JqZWN0LmtleXMob3B0aW9ucyk7XG5cbiAgICAgICAgdGhpcy5hZGRPcHRpb25zKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LnZhbHVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkT3B0aW9ucygpIHtcbiAgICAgICAgdGhpcy5rZXlzLmZvckVhY2goKG9wdEtleSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBuZXdPcHRpb24udGV4dCA9IG9wdEtleTtcbiAgICAgICAgICAgIG5ld09wdGlvbi52YWx1ZSA9IHRoaXMub3B0aW9uc1tvcHRLZXldO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKG5ld09wdGlvbilcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIHNlbGVjdE9wdGlvbihvcHRpb246IHN0cmluZykge1xuICAgICAgICBjb25zdCBmb3VuZFZhbHVlSW5kZXggPSB0aGlzLmtleXMuZmluZEluZGV4KChrZXkpID0+IHRoaXMub3B0aW9uc1trZXldID09PSBvcHRpb24pO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9IGZvdW5kVmFsdWVJbmRleDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuIiwiaW1wb3J0IENvbnRhaW5lckJ1aWxkZXIgZnJvbSAnLi9Db250YWluZXJCdWlsZGVyJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0eWxlc0NvbXBvbmVudHNCdWlsZGVyIHtcbiAgICBwdWJsaWMgaHRtbFN0eWxlc0NvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpLmJ1aWxkKCk7XG4gICAgcHJpdmF0ZSBhY3Rpb25zQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhY3Rpb25zLWNvbnRhaW5lcicpO1xuXG4gICAgcHVibGljIGFwcGVuZENoaWxkKGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5odG1sU3R5bGVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBidWlsZCgpOiBIVE1MRGl2RWxlbWVudCB7XG4gICAgICAgIHRoaXMuYWN0aW9uc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgdGhpcy5hY3Rpb25zQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaHRtbFN0eWxlc0NvbnRhaW5lcik7XG4gICAgICAgIHJldHVybiB0aGlzLmh0bWxTdHlsZXNDb250YWluZXI7XG4gICAgfVxuXG4gICAgcmVtb3ZlKCkge1xuICAgICAgICB0aGlzLmFjdGlvbnNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxufVxuIiwiaW1wb3J0IFJhd0J1aWxkZXIgZnJvbSAnLi9SYXdCdWlsZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFibGVCdWlsZGVyIGV4dGVuZHMgUmF3QnVpbGRlcjxIVE1MRGl2RWxlbWVudD57XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCd0YWJsZScpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhcHBlbmRDaGlsZElmRGVmaW5lZChlbGVtZW50OiBIVE1MRWxlbWVudCl7XG4gICAgICAgIGlmKGVsZW1lbnQgIT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuIiwiaW1wb3J0IFJhd0J1aWxkZXIgZnJvbSAnLi9SYXdCdWlsZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dGFyZWFCdWlsZGVyIGV4dGVuZHMgUmF3QnVpbGRlcjxIVE1MVGV4dEFyZWFFbGVtZW50PntcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ3RleHRhcmVhJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC52YWx1ZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUmF3QnVpbGRlciBmcm9tICcuL1Jhd0J1aWxkZXInO1xuXG5pbXBvcnQgeyBUaXRsZVR5cGVzRW51bSB9IGZyb20gJy4uL2VudW1zL3RpdGxlLnR5cGVzLmVudW0nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaXRsZUJ1aWxkZXIgZXh0ZW5kcyBSYXdCdWlsZGVyPEhUTUxUaXRsZUVsZW1lbnQ+e1xuICAgIGNvbnN0cnVjdG9yKHR5cGU6IFRpdGxlVHlwZXNFbnVtKSB7XG4gICAgICAgIHN1cGVyKHR5cGUpO1xuICAgIH1cbn1cbiIsImltcG9ydCBSYXdCdWlsZGVyIGZyb20gJy4vUmF3QnVpbGRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVub2RlcmVkTGlzdEJ1aWxkZXIgZXh0ZW5kcyBSYXdCdWlsZGVyPEhUTUxVTGlzdEVsZW1lbnQ+e1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigndWwnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXBwZW5kQ2hpbGRJZkRlZmluZWQoZWxlbWVudDogSFRNTEVsZW1lbnQpe1xuICAgICAgICBpZihlbGVtZW50ICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cbiIsImltcG9ydCBDbGFzc0NoYW5nZVB1Ymxpc2hlckludGVyZmFjZSBmcm9tICcuLi9pbnRlcmZhY2VzL2NsYXNzLWNoYW5nZS1wdWJsaXNoZXIuaW50ZXJmYWNlJztcbmltcG9ydCBDbGFzc0NoYW5nZU9ic2VydmVySW50ZXJmYWNlIGZyb20gJy4uL2ludGVyZmFjZXMvY2xhc3MtY2hhbmdlLW9ic2VydmVyLmludGVyZmFjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsYXNzQ2hhbmdlUHVibGlzaGVyIGltcGxlbWVudHMgQ2xhc3NDaGFuZ2VQdWJsaXNoZXJJbnRlcmZhY2Uge1xuICAgIHByaXZhdGUgb2JzZXJ2ZXJzOiBDbGFzc0NoYW5nZU9ic2VydmVySW50ZXJmYWNlW10gPSBbXTtcblxuICAgIHB1YmxpYyBhdHRhY2gob2JzZXJ2ZXI6IENsYXNzQ2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2UpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaXNFeGlzdCA9IHRoaXMub2JzZXJ2ZXJzLmluY2x1ZGVzKG9ic2VydmVyKTtcbiAgICAgICAgaWYgKGlzRXhpc3QpIHtcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmxvZygnU3ViamVjdDogT2JzZXJ2ZXIgaGFzIGJlZW4gYXR0YWNoZWQgYWxyZWFkeS4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9ic2VydmVycy5wdXNoKG9ic2VydmVyKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGV0YWNoKG9ic2VydmVyOiBDbGFzc0NoYW5nZU9ic2VydmVySW50ZXJmYWNlKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG9ic2VydmVySW5kZXggPSB0aGlzLm9ic2VydmVycy5pbmRleE9mKG9ic2VydmVyKTtcbiAgICAgICAgaWYgKG9ic2VydmVySW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2coJ1N1YmplY3Q6IE5vbmV4aXN0ZW50IG9ic2VydmVyLicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLnNwbGljZShvYnNlcnZlckluZGV4LCAxKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbm90aWZ5Q2xhc3NOYW1lKG5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBmb3IgKGNvbnN0IG9ic2VydmVyIG9mIHRoaXMub2JzZXJ2ZXJzKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5jbGFzc05hbWVVcGRhdGVkKG5hbWUpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudENoYW5nZU9ic2VydmVySW50ZXJmYWNlIGZyb20gJy4uL2ludGVyZmFjZXMvY29tcG9uZW50LWNoYW5nZS1vYnNlcnZlci5pbnRlcmZhY2UnO1xuaW1wb3J0IENvbXBvbmVudENoYW5nZVB1Ymxpc2hlckludGVyZmFjZSBmcm9tICcuLi9pbnRlcmZhY2VzL2NvbXBvbmVudC1jaGFuZ2UtcHVibGlzaGVyLmludGVyZmFjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudENoYW5nZVB1Ymxpc2hlciBpbXBsZW1lbnRzIENvbXBvbmVudENoYW5nZVB1Ymxpc2hlckludGVyZmFjZSB7XG4gICAgcHJpdmF0ZSBvYnNlcnZlcnM6IENvbXBvbmVudENoYW5nZU9ic2VydmVySW50ZXJmYWNlW10gPSBbXTtcblxuICAgIHB1YmxpYyBhdHRhY2gob2JzZXJ2ZXI6IENvbXBvbmVudENoYW5nZU9ic2VydmVySW50ZXJmYWNlKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGlzRXhpc3QgPSB0aGlzLm9ic2VydmVycy5pbmNsdWRlcyhvYnNlcnZlcik7XG4gICAgICAgIGlmIChpc0V4aXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2coJ1N1YmplY3Q6IE9ic2VydmVyIGhhcyBiZWVuIGF0dGFjaGVkIGFscmVhZHkuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vYnNlcnZlcnMucHVzaChvYnNlcnZlcik7XG4gICAgfVxuXG4gICAgcHVibGljIGRldGFjaChvYnNlcnZlcjogQ29tcG9uZW50Q2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2UpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXJJbmRleCA9IHRoaXMub2JzZXJ2ZXJzLmluZGV4T2Yob2JzZXJ2ZXIpO1xuICAgICAgICBpZiAob2JzZXJ2ZXJJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmxvZygnU3ViamVjdDogTm9uZXhpc3RlbnQgb2JzZXJ2ZXIuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vYnNlcnZlcnMuc3BsaWNlKG9ic2VydmVySW5kZXgsIDEpO1xuICAgIH1cblxuICAgIHB1YmxpYyBub3RpZnlDb21wb25lbnROYW1lKG5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBmb3IgKGNvbnN0IG9ic2VydmVyIG9mIHRoaXMub2JzZXJ2ZXJzKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5jb21wb25lbnRTZWxlY3RlZChuYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBkcmFnU3RhcnRXaXRoVGFyZ2V0Tm9kZU5hbWUgZnJvbSAnLi4vY29tbW9uL2Z1bmN0aW9ucy9kcmFnLXN0YXJ0LXdpdGgtdGFyZ2V0LW5vZGVfbmFtZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXREcmFnZ2FibGVDb21wb25lbnRzKCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRvbS1lbGVtZW50Jyk7XG5cbiAgICBkb21FbGVtZW50cy5mb3JFYWNoKChkb21FbGVtZW50KSA9PiB7XG4gICAgICAgIGRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZHJhZ1N0YXJ0V2l0aFRhcmdldE5vZGVOYW1lKTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCBSYXdIVE1MQ29ucG9uZW50IGZyb20gJy4uL2h0bWwtY29tcG9uZW50cy9SYXdIVE1MQ29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3NzU3R5bGVTaGVldCB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgc3R5bGVTaGVldCA9IGRvY3VtZW50LnN0eWxlU2hlZXRzWzFdO1xuXG4gICAgLypcbiAgICBDU1NTdHlsZVNoZWV0RG9jdW1lbnRhdGlvbjpcbiAgICBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ1NTU3R5bGVTaGVldC9hZGRSdWxlXG4gICAgKi9cblxuICAgIHN0YXRpYyBpbml0KCkge1xuICAgICAgICBjb25zdCBwcmludENzc0ZpbGVCdXR0b246IEhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW50LWNzcy1maWxlJyk7XG4gICAgICAgIHRoaXMucHJpbnQgPSB0aGlzLnByaW50LmJpbmQodGhpcyk7XG4gICAgICAgIHByaW50Q3NzRmlsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucHJpbnQpO1xuICAgIH1cblxuICAgIHN0YXRpYyBwcmludCgpIHtcbiAgICAgICAgbGV0IGNzc0ZpbGVPdXRwdXQgPSAnJztcblxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnN0eWxlU2hlZXQuY3NzUnVsZXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGNzc0ZpbGVPdXRwdXQgKz0gYCR7dGhpcy5zdHlsZVNoZWV0LmNzc1J1bGVzW3BhcnNlSW50KGtleSldLmNzc1RleHR9XFxuXFxuYFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zb2xlLmxvZyhjc3NGaWxlT3V0cHV0KTtcblxuICAgICAgICAvLyBUT0RPOiB2ZXIgc2kgaGF5IHF1ZSBlbGltaW5hciBhbGdvIGRlbCBhcHAtY29udGFpbmVyLi4uIGFsZ3VuIGF0cmlidXRvLi4uXG4gICAgfVxuXG4gICAgc3RhdGljIGdldFJ1bGUoaWQ6IHN0cmluZyk6IENTU1J1bGUge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0UnVsZUluZGV4KGlkKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3R5bGVTaGVldC5jc3NSdWxlc1tpbmRleF07XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFJ1bGVJbmRleChpZDogc3RyaW5nKTogbnVtYmVyIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBwYXJzZUludChPYmplY3Qua2V5cyh0aGlzLnN0eWxlU2hlZXQuY3NzUnVsZXMpLmZpbmQoa2V5ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMuc3R5bGVTaGVldC5jc3NSdWxlc1twYXJzZUludChrZXkpXVsnc2VsZWN0b3JUZXh0J11cbiAgICAgICAgICAgIHJldHVybiBjbGFzc05hbWUgPT09IGAuJHtpZH1gXG4gICAgICAgIH0pKVxuXG4gICAgICAgIGlmKGlzTmFOKGluZGV4KSl7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFJ1bGVzKGlkOiBzdHJpbmcpOiBDU1NSdWxlW10ge1xuICAgICAgICBjb25zdCBpbmRleGVzID0gdGhpcy5nZXRSdWxlc0luZGV4ZXMoaWQpO1xuICAgICAgICByZXR1cm4gaW5kZXhlcy5tYXAoKGluZGV4KSA9PiB0aGlzLnN0eWxlU2hlZXQuY3NzUnVsZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0QWxsUnVsZXMoKTogQ1NTUnVsZVtdIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5zdHlsZVNoZWV0LmNzc1J1bGVzKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0UnVsZXNJbmRleGVzKGlkOiBzdHJpbmcpOiBudW1iZXJbXSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnN0eWxlU2hlZXQuY3NzUnVsZXMpXG4gICAgICAgICAgICAuZmlsdGVyKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy5zdHlsZVNoZWV0LmNzc1J1bGVzW3BhcnNlSW50KGtleSldWydzZWxlY3RvclRleHQnXVxuICAgICAgICAgICAgICAgIHJldHVybiBjbGFzc05hbWUgPT09IGAuJHtpZH1gIHx8IGNsYXNzTmFtZS5pbmNsdWRlcyhgLiR7aWR9OmApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm1hcCgoaW5kZXgpID0+IHBhcnNlSW50KGluZGV4KSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFJ1bGVTdHlsZXMoaWQ6IHN0cmluZyk6IENTU1N0eWxlRGVjbGFyYXRpb24ge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0UnVsZUluZGV4KGlkKTtcbiAgICAgICAgY29uc3Qgc3R5bGVzID0gdGhpcy5zdHlsZVNoZWV0LmNzc1J1bGVzW2luZGV4XTtcbiAgICAgICAgcmV0dXJuIHN0eWxlcyA/IHN0eWxlc1snc3R5bGUnXSA6IHt9O1xuICAgIH1cblxuICAgIHN0YXRpYyByZW1vdmVSdWxlKGlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmdldFJ1bGVJbmRleChpZCk7XG4gICAgICAgIGxldCBleGlzdHNSdWxlRm9yQW5vdGhlckNvbXBvbmVudCA9IGZhbHNlO1xuXG4gICAgICAgIFJhd0hUTUxDb25wb25lbnQuaW5zdGFuY2VzLmZvckVhY2goKGluc3RhbmNlKSA9PiB7XG4gICAgICAgICAgICBpZihpbnN0YW5jZS5jbGFzc0xpc3QuY29udGFpbnMoaWQpKSB7XG4gICAgICAgICAgICAgICAgZXhpc3RzUnVsZUZvckFub3RoZXJDb21wb25lbnQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGlmKCFleGlzdHNSdWxlRm9yQW5vdGhlckNvbXBvbmVudCkge1xuICAgICAgICAgICAgdGhpcy5zdHlsZVNoZWV0LmRlbGV0ZVJ1bGUoaW5kZXgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIHJlbW92ZVJ1bGVCeUluZGV4KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdHlsZVNoZWV0LmRlbGV0ZVJ1bGUoaW5kZXgpO1xuICAgIH1cblxuICAgIHN0YXRpYyBpbnNlcnRSdWxlKHJ1bGU6IHN0cmluZykge1xuICAgICAgICB0aGlzLnN0eWxlU2hlZXQuaW5zZXJ0UnVsZShydWxlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY2hhbmdlUnVsZU5hbWUoY3VycmVudFJ1bGU6IHN0cmluZywgbmV3UnVsZU5hbWU6IHN0cmluZykge1xuICAgICAgICBjb25zdCBjdXJyZW50UnVsZUluZGV4ID0gdGhpcy5nZXRSdWxlSW5kZXgoY3VycmVudFJ1bGUpO1xuICAgICAgICBjb25zdCBuZXdSdWxlID0gdGhpcy5zdHlsZVNoZWV0LmNzc1J1bGVzW2N1cnJlbnRSdWxlSW5kZXhdLmNzc1RleHQucmVwbGFjZShjdXJyZW50UnVsZSwgbmV3UnVsZU5hbWUpO1xuICAgICAgICB0aGlzLnJlbW92ZVJ1bGVCeUluZGV4KGN1cnJlbnRSdWxlSW5kZXgpO1xuICAgICAgICB0aGlzLmluc2VydFJ1bGUobmV3UnVsZSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGR1cGxpY2F0ZVJ1bGUocnVsZVRvRHVwbGljYXRlOiBzdHJpbmcsIG5ld05hbWU6IHN0cmluZykge1xuICAgICAgICBjb25zdCBydWxlVG9EdXBsaWNhdGVJbmRleCA9IHRoaXMuZ2V0UnVsZUluZGV4KHJ1bGVUb0R1cGxpY2F0ZSk7XG4gICAgICAgIGNvbnN0IG5ld1J1bGUgPVxuICAgICAgICAgICAgdGhpcy5zdHlsZVNoZWV0LmNzc1J1bGVzW3J1bGVUb0R1cGxpY2F0ZUluZGV4XS5jc3NUZXh0LnJlcGxhY2UocnVsZVRvRHVwbGljYXRlLCBuZXdOYW1lKTtcbiAgICAgICAgdGhpcy5pbnNlcnRSdWxlKG5ld1J1bGUpO1xuICAgIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnRDaGFuZ2VPYnNlcnZlckludGVyZmFjZSBmcm9tICcuLi9jb21tb24vaW50ZXJmYWNlcy9jb21wb25lbnQtY2hhbmdlLW9ic2VydmVyLmludGVyZmFjZSc7XG5cbmltcG9ydCBBbmNob3JCdWlsZGVyIGZyb20gJy4uL2NvbW1vbi9tb2RlbHMvQW5jaG9yQnVpbGRlcic7XG5pbXBvcnQgUmF3SFRNTENvbnBvbmVudCBmcm9tICcuL1Jhd0hUTUxDb21wb25lbnQnO1xuXG5pbXBvcnQgQ3NzU3R5bGVTaGVldCBmcm9tICcuLi9jc3Mtc3R5bGVzaGVldC9jc3Mtc3R5bGVzaGVldCc7XG5cbmltcG9ydCBkZWZpbmVFbGVtZW50TmFtZSBmcm9tICcuLi9jb21tb24vZnVuY3Rpb25zL2RlZmluZS1lbGVtZW50LW5hbWUnO1xuaW1wb3J0IHsgQWRkQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2VudW1zL2FkZC1jb21wb25lbnQuZW51bSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuY2hvciBleHRlbmRzIFJhd0hUTUxDb25wb25lbnQgaW1wbGVtZW50cyBDb21wb25lbnRDaGFuZ2VPYnNlcnZlckludGVyZmFjZSB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaXRlcmF0b3IgPSAwO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBkZWZpbmVFbGVtZW50TmFtZShgYW5jaG9yJHtBbmNob3IuaXRlcmF0b3IrK31gLCBSYXdIVE1MQ29ucG9uZW50Lmluc3RhbmNlcyk7XG5cbiAgICAgICAgQ3NzU3R5bGVTaGVldC5pbnNlcnRSdWxlKGAuJHtuYW1lfSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmVcbiAgICAgICAgfWApO1xuXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBuZXcgQW5jaG9yQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0TmFtZShuYW1lKVxuICAgICAgICAgICAgLnNldElkKG5hbWUpXG4gICAgICAgICAgICAuYWRkQ3NzQ2xhc3NOYW1lKG5hbWUpXG4gICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdOZXcgQW5jaG9yJylcbiAgICAgICAgICAgIC5zZXRIaXBlcmxpbmsoJycpXG4gICAgICAgICAgICAuZHJhZ2dhYmxlKClcbiAgICAgICAgICAgIC5idWlsZCgpO1xuXG4gICAgICAgIHN1cGVyKGVsZW1lbnQpO1xuXG4gICAgICAgIHRoaXMub3BlbkVsZW1lbnRDb25maWdzID0gdGhpcy5vcGVuRWxlbWVudENvbmZpZ3MuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcmFnTGVhdmUgPSB0aGlzLmRyYWdMZWF2ZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuX2RvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5kcmFnU3RhcnRXaXRoVGFyZ2V0SWQpO1xuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIHRoaXMuZHJhZ0xlYXZlKTtcblxuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcGVuRWxlbWVudENvbmZpZ3MpO1xuICAgIH1cblxuICAgIGdldCBkb21FbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZG9tRWxlbWVudDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb3BlbkVsZW1lbnRDb25maWdzKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHRoaXMuc2VsZWN0b3JWYWx1ZSgpO1xuICAgICAgICB0aGlzLmJ1aWxkRWxlbWVudENvbmZpZ3MoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29tcG9uZW50U2VsZWN0ZWQoY29tcG9uZW50KSB7XG4gICAgICAgIGlmKGNvbXBvbmVudCA9PT0gdGhpcy5fZG9tRWxlbWVudFsnbmFtZSddKSB7XG4gICAgICAgICAgICB0aGlzLmJ1aWxkRWxlbWVudENvbmZpZ3MoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgYnVpbGRFbGVtZW50Q29uZmlncygpIHtcbiAgICAgICAgdGhpcy5pbnNlcnRDb21wb25lbnRBZnRlcihcbiAgICAgICAgICAgIEFkZENvbXBvbmVudC5hZGRJbm5lclRleHRDaGFuZ2VDb21wb25lbnQsXG4gICAgICAgICAgICBBZGRDb21wb25lbnQuYWRkQ2xhc3NOYW1lRGVmaW5pdGlvbkNvbXBvbmVudFxuICAgICAgICApO1xuXG4gICAgICAgIC8vIFRPRE86IGZhbHRhIGFncmVnYXIgbGEgdXJsIGRlbCBocmVmIHkgdmVyIHNpIGFsZ28gbWFzXG5cbiAgICAgICAgdGhpcy5idWlsZEVsZW1lbnRzKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudENoYW5nZU9ic2VydmVySW50ZXJmYWNlIGZyb20gJy4uL2NvbW1vbi9pbnRlcmZhY2VzL2NvbXBvbmVudC1jaGFuZ2Utb2JzZXJ2ZXIuaW50ZXJmYWNlJztcblxuaW1wb3J0IEJ1dHRvbkJ1aWxkZXIgZnJvbSAnLi4vY29tbW9uL21vZGVscy9CdXR0b25CdWlsZGVyJztcbmltcG9ydCBSYXdIVE1MQ29ucG9uZW50IGZyb20gJy4vUmF3SFRNTENvbXBvbmVudCc7XG5cbmltcG9ydCBDc3NTdHlsZVNoZWV0IGZyb20gJy4uL2Nzcy1zdHlsZXNoZWV0L2Nzcy1zdHlsZXNoZWV0JztcblxuaW1wb3J0IGRlZmluZUVsZW1lbnROYW1lIGZyb20gJy4uL2NvbW1vbi9mdW5jdGlvbnMvZGVmaW5lLWVsZW1lbnQtbmFtZSc7XG5pbXBvcnQgeyBBZGRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vZW51bXMvYWRkLWNvbXBvbmVudC5lbnVtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgUmF3SFRNTENvbnBvbmVudCBpbXBsZW1lbnRzIENvbXBvbmVudENoYW5nZU9ic2VydmVySW50ZXJmYWNlIHtcbiAgICBwcml2YXRlIHN0YXRpYyBpdGVyYXRvciA9IDA7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGRlZmluZUVsZW1lbnROYW1lKGBidXR0b24ke0J1dHRvbi5pdGVyYXRvcisrfWAsIFJhd0hUTUxDb25wb25lbnQuaW5zdGFuY2VzKTtcblxuICAgICAgICBDc3NTdHlsZVNoZWV0Lmluc2VydFJ1bGUoYC4ke25hbWV9IHtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzRDQUY1MDtcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1gKTtcblxuICAgICAgICBDc3NTdHlsZVNoZWV0Lmluc2VydFJ1bGUoYC4ke25hbWV9OmhvdmVyIHtvcGFjaXR5OiAwLjZ9YCk7XG5cbiAgICAgICAgY29uc3QgZWxlbWVudCA9IG5ldyBCdXR0b25CdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXROYW1lKG5hbWUpXG4gICAgICAgICAgICAuc2V0SWQobmFtZSlcbiAgICAgICAgICAgIC5hZGRDc3NDbGFzc05hbWUobmFtZSlcbiAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ05ldyBCdXR0b24nKVxuICAgICAgICAgICAgLmRyYWdnYWJsZSgpXG4gICAgICAgICAgICAuYnVpbGQoKTtcblxuICAgICAgICBzdXBlcihlbGVtZW50KTtcblxuICAgICAgICB0aGlzLm9wZW5FbGVtZW50Q29uZmlncyA9IHRoaXMub3BlbkVsZW1lbnRDb25maWdzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhZ0xlYXZlID0gdGhpcy5kcmFnTGVhdmUuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuZHJhZ1N0YXJ0V2l0aFRhcmdldElkKTtcbiAgICAgICAgdGhpcy5fZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCB0aGlzLmRyYWdMZWF2ZSk7XG5cbiAgICAgICAgdGhpcy5fZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3BlbkVsZW1lbnRDb25maWdzKTtcbiAgICB9XG5cbiAgICBnZXQgZG9tRWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RvbUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9wZW5FbGVtZW50Q29uZmlncyhldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5zZWxlY3RvclZhbHVlKCk7XG5cblxuICAgICAgICB0aGlzLmJ1aWxkRWxlbWVudENvbmZpZ3MoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29tcG9uZW50U2VsZWN0ZWQoY29tcG9uZW50KSB7XG4gICAgICAgIGlmKGNvbXBvbmVudCA9PT0gdGhpcy5fZG9tRWxlbWVudFsnbmFtZSddKSB7XG4gICAgICAgICAgICB0aGlzLmJ1aWxkRWxlbWVudENvbmZpZ3MoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgYnVpbGRFbGVtZW50Q29uZmlncygpIHtcbiAgICAgICAgdGhpcy5pbnNlcnRDb21wb25lbnRBZnRlcihcbiAgICAgICAgICAgIEFkZENvbXBvbmVudC5hZGRJbm5lclRleHRDaGFuZ2VDb21wb25lbnQsXG4gICAgICAgICAgICBBZGRDb21wb25lbnQuYWRkQ2xhc3NOYW1lRGVmaW5pdGlvbkNvbXBvbmVudFxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuaW5zZXJ0Q29tcG9uZW50QmVmb3JlKFxuICAgICAgICAgICAgQWRkQ29tcG9uZW50LmFkZERpc3BsYXlBc1BhcmVudENvbXBvbmVudCxcbiAgICAgICAgICAgIEFkZENvbXBvbmVudC5hZGREaXNwbGF5QXNDaGlsZENvbXBvbmVudFxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuYnVpbGRFbGVtZW50cygpO1xuICAgIH1cbn1cbiIsImltcG9ydCBDb250YWluZXJCdWlsZGVyIGZyb20gJy4uL2NvbW1vbi9tb2RlbHMvQ29udGFpbmVyQnVpbGRlcic7XG5pbXBvcnQgUmF3SFRNTENvbnBvbmVudCBmcm9tICcuL1Jhd0hUTUxDb21wb25lbnQnO1xuaW1wb3J0IFJhd0NvbnRhaW5lciBmcm9tICcuL1Jhd0NvbnRhaW5lcic7XG5cbmltcG9ydCBDc3NTdHlsZVNoZWV0IGZyb20gJy4uL2Nzcy1zdHlsZXNoZWV0L2Nzcy1zdHlsZXNoZWV0JztcbmltcG9ydCBjb25zdGFudHMgZnJvbSAnLi4vY29tbW9uL2NvbnN0YW50cy9jb25zdGFudHMnO1xuaW1wb3J0IGRlZmluZUVsZW1lbnROYW1lIGZyb20gJy4uL2NvbW1vbi9mdW5jdGlvbnMvZGVmaW5lLWVsZW1lbnQtbmFtZSc7XG5cbmltcG9ydCB7IERpc3BsYXlUeXBlc0VudW0gfSBmcm9tICcuLi9jb21tb24vZW51bXMvZGlzcGxheS10eXBlcy5lbnVtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGFpbmVyIGV4dGVuZHMgUmF3Q29udGFpbmVyIHtcbiAgICBwcml2YXRlIHN0YXRpYyBpdGVyYXRvciA9IDA7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGRlZmluZUVsZW1lbnROYW1lKGBjb250YWluZXIke0NvbnRhaW5lci5pdGVyYXRvcisrfWAsIFJhd0hUTUxDb25wb25lbnQuaW5zdGFuY2VzKTtcblxuICAgICAgICBDc3NTdHlsZVNoZWV0Lmluc2VydFJ1bGUoYC4ke25hbWV9IHtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiAke0Rpc3BsYXlUeXBlc0VudW0uZmxleH07XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwyNTUsMjU1KTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCByZ2IoMCwwLDApO1xuICAgICAgICB9YCk7XG5cbiAgICAgICAgQ3NzU3R5bGVTaGVldC5pbnNlcnRSdWxlKGAuJHtuYW1lfTpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbnN0YW50cy5JTlZFUlRFRF9CQUNLR1JPVU5EX0NPTE9SfTtcbiAgICAgICAgfWApO1xuXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0TmFtZShuYW1lKVxuICAgICAgICAgICAgLnNldElkKG5hbWUpXG4gICAgICAgICAgICAuYWRkQ3NzQ2xhc3NOYW1lKG5hbWUpXG4gICAgICAgICAgICAuZHJhZ2dhYmxlKClcbiAgICAgICAgICAgIC5idWlsZCgpO1xuXG4gICAgICAgIHN1cGVyKGVsZW1lbnQpO1xuICAgIH1cbn1cbiIsImltcG9ydCBGb3JtQnVpbGRlciBmcm9tICcuLi9jb21tb24vbW9kZWxzL0Zvcm1CdWlsZGVyJztcbmltcG9ydCBSYXdIVE1MQ29ucG9uZW50IGZyb20gJy4vUmF3SFRNTENvbXBvbmVudCc7XG5pbXBvcnQgUmF3Q29udGFpbmVyIGZyb20gJy4vUmF3Q29udGFpbmVyJztcblxuaW1wb3J0IENzc1N0eWxlU2hlZXQgZnJvbSAnLi4vY3NzLXN0eWxlc2hlZXQvY3NzLXN0eWxlc2hlZXQnO1xuaW1wb3J0IGNvbnN0YW50cyBmcm9tICcuLi9jb21tb24vY29uc3RhbnRzL2NvbnN0YW50cyc7XG5pbXBvcnQgZGVmaW5lRWxlbWVudE5hbWUgZnJvbSAnLi4vY29tbW9uL2Z1bmN0aW9ucy9kZWZpbmUtZWxlbWVudC1uYW1lJztcblxuaW1wb3J0IHsgRGlzcGxheVR5cGVzRW51bSB9IGZyb20gJy4uL2NvbW1vbi9lbnVtcy9kaXNwbGF5LXR5cGVzLmVudW0nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtIGV4dGVuZHMgUmF3Q29udGFpbmVyIHtcbiAgICBwcml2YXRlIHN0YXRpYyBpdGVyYXRvciA9IDA7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGRlZmluZUVsZW1lbnROYW1lKGBmb3JtJHtGb3JtLml0ZXJhdG9yKyt9YCwgUmF3SFRNTENvbnBvbmVudC5pbnN0YW5jZXMpO1xuXG4gICAgICAgIENzc1N0eWxlU2hlZXQuaW5zZXJ0UnVsZShgLiR7bmFtZX0ge1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6ICR7RGlzcGxheVR5cGVzRW51bS5mbGV4fTtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LDI1NSwyNTUpO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggZGFzaGVkIHJnYigwLDAsMCk7XG4gICAgICAgIH1gKTtcblxuICAgICAgICBDc3NTdHlsZVNoZWV0Lmluc2VydFJ1bGUoYC4ke25hbWV9OmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29uc3RhbnRzLklOVkVSVEVEX0JBQ0tHUk9VTkRfQ09MT1J9O1xuICAgICAgICB9YCk7XG5cbiAgICAgICAgY29uc3QgZWxlbWVudCA9IG5ldyBGb3JtQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0TmFtZShuYW1lKVxuICAgICAgICAgICAgLnNldElkKG5hbWUpXG4gICAgICAgICAgICAuYWRkQ3NzQ2xhc3NOYW1lKG5hbWUpXG4gICAgICAgICAgICAuZHJhZ2dhYmxlKClcbiAgICAgICAgICAgIC5idWlsZCgpO1xuXG4gICAgICAgIHN1cGVyKGVsZW1lbnQpO1xuXG4gICAgICAgIHRoaXMuX2RvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy5ldmVudFByZXZlbnREZWZhdWx0KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGV2ZW50UHJldmVudERlZmF1bHQoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50Q2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2UgZnJvbSAnLi4vY29tbW9uL2ludGVyZmFjZXMvY29tcG9uZW50LWNoYW5nZS1vYnNlcnZlci5pbnRlcmZhY2UnO1xuXG5pbXBvcnQgSW1hZ2VCdWlsZGVyIGZyb20gJy4uL2NvbW1vbi9tb2RlbHMvSW1hZ2VCdWlsZGVyJztcbmltcG9ydCBSYXdIVE1MQ29ucG9uZW50IGZyb20gJy4vUmF3SFRNTENvbXBvbmVudCc7XG5cbmltcG9ydCBDc3NTdHlsZVNoZWV0IGZyb20gJy4uL2Nzcy1zdHlsZXNoZWV0L2Nzcy1zdHlsZXNoZWV0JztcbmltcG9ydCBkZWZpbmVFbGVtZW50TmFtZSBmcm9tICcuLi9jb21tb24vZnVuY3Rpb25zL2RlZmluZS1lbGVtZW50LW5hbWUnO1xuaW1wb3J0IHsgQWRkQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2VudW1zL2FkZC1jb21wb25lbnQuZW51bSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlIGV4dGVuZHMgUmF3SFRNTENvbnBvbmVudCBpbXBsZW1lbnRzIENvbXBvbmVudENoYW5nZU9ic2VydmVySW50ZXJmYWNlIHtcbiAgICBwcml2YXRlIHN0YXRpYyBpdGVyYXRvciA9IDA7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGRlZmluZUVsZW1lbnROYW1lKGBpbWFnZSR7SW1hZ2UuaXRlcmF0b3IrK31gLCBSYXdIVE1MQ29ucG9uZW50Lmluc3RhbmNlcyk7XG5cbiAgICAgICAgQ3NzU3R5bGVTaGVldC5pbnNlcnRSdWxlKGAuJHtuYW1lfSB7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwyNTUsMjU1KTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCByZ2IoMCwwLDApO1xuICAgICAgICB9YCk7XG5cbiAgICAgICAgY29uc3QgZWxlbWVudCA9IG5ldyBJbWFnZUJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldE5hbWUobmFtZSlcbiAgICAgICAgICAgIC5zZXRJZChuYW1lKVxuICAgICAgICAgICAgLmFkZENzc0NsYXNzTmFtZShuYW1lKVxuICAgICAgICAgICAgLnNldFVybCgpXG4gICAgICAgICAgICAuZHJhZ2dhYmxlKClcbiAgICAgICAgICAgIC5idWlsZCgpO1xuXG4gICAgICAgIHN1cGVyKGVsZW1lbnQpO1xuXG4gICAgICAgIHRoaXMub3BlbkVsZW1lbnRDb25maWdzID0gdGhpcy5vcGVuRWxlbWVudENvbmZpZ3MuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcmFnTGVhdmUgPSB0aGlzLmRyYWdMZWF2ZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuX2RvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5kcmFnU3RhcnRXaXRoVGFyZ2V0SWQpO1xuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIHRoaXMuZHJhZ0xlYXZlKTtcblxuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcGVuRWxlbWVudENvbmZpZ3MpO1xuICAgIH1cblxuICAgIGdldCBkb21FbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZG9tRWxlbWVudDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb3BlbkVsZW1lbnRDb25maWdzKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLnNlbGVjdG9yVmFsdWUoKTtcbiAgICAgICAgdGhpcy5idWlsZEVsZW1lbnRDb25maWdzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbXBvbmVudFNlbGVjdGVkKGNvbXBvbmVudCkge1xuICAgICAgICBpZiAoY29tcG9uZW50ID09PSB0aGlzLl9kb21FbGVtZW50WyduYW1lJ10pIHtcbiAgICAgICAgICAgIHRoaXMuYnVpbGRFbGVtZW50Q29uZmlncygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBidWlsZEVsZW1lbnRDb25maWdzKCkge1xuICAgICAgICB0aGlzLmluc2VydENvbXBvbmVudEFmdGVyKFxuICAgICAgICAgICAgQWRkQ29tcG9uZW50LmFkZFVybElucHV0Q29tcG9uZW50LFxuICAgICAgICAgICAgQWRkQ29tcG9uZW50LmFkZENsYXNzTmFtZURlZmluaXRpb25Db21wb25lbnRcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmJ1aWxkRWxlbWVudHMoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50Q2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2UgZnJvbSAnLi4vY29tbW9uL2ludGVyZmFjZXMvY29tcG9uZW50LWNoYW5nZS1vYnNlcnZlci5pbnRlcmZhY2UnO1xuXG5pbXBvcnQgSW5wdXRCdWlsZGVyIGZyb20gJy4uL2NvbW1vbi9tb2RlbHMvSW5wdXRCdWlsZGVyJztcbmltcG9ydCBSYXdIVE1MQ29ucG9uZW50IGZyb20gJy4vUmF3SFRNTENvbXBvbmVudCc7XG5cbmltcG9ydCBkZWZpbmVFbGVtZW50TmFtZSBmcm9tICcuLi9jb21tb24vZnVuY3Rpb25zL2RlZmluZS1lbGVtZW50LW5hbWUnO1xuXG5pbXBvcnQgQ3NzU3R5bGVTaGVldCBmcm9tICcuLi9jc3Mtc3R5bGVzaGVldC9jc3Mtc3R5bGVzaGVldCc7XG5cbmltcG9ydCB7IElucHV0VHlwZUVudW0gfSBmcm9tICcuLi9jb21tb24vZW51bXMvaW5wdXQtdHlwZS5lbnVtJztcbmltcG9ydCB7IEFkZENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9lbnVtcy9hZGQtY29tcG9uZW50LmVudW0nO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXQgZXh0ZW5kcyBSYXdIVE1MQ29ucG9uZW50IGltcGxlbWVudHMgQ29tcG9uZW50Q2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2Uge1xuICAgIHByaXZhdGUgc3RhdGljIGl0ZXJhdG9yID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBjb25zdCBuYW1lID0gZGVmaW5lRWxlbWVudE5hbWUoYGlucHV0JHtJbnB1dC5pdGVyYXRvcisrfWAsIFJhd0hUTUxDb25wb25lbnQuaW5zdGFuY2VzKTtcblxuICAgICAgICBDc3NTdHlsZVNoZWV0Lmluc2VydFJ1bGUoYC4ke25hbWV9IHtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggM3B4ICNkZGQ7XG4gICAgICAgIH1gKTtcblxuICAgICAgICBDc3NTdHlsZVNoZWV0Lmluc2VydFJ1bGUoYC4ke25hbWV9OmhvdmVyIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgfWApO1xuXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0udGV4dClcbiAgICAgICAgICAgIC5zZXROYW1lKG5hbWUpXG4gICAgICAgICAgICAuc2V0SWQobmFtZSlcbiAgICAgICAgICAgIC5hZGRDc3NDbGFzc05hbWUobmFtZSlcbiAgICAgICAgICAgIC5kcmFnZ2FibGUoKVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG5cbiAgICAgICAgc3VwZXIoZWxlbWVudCk7XG5cbiAgICAgICAgdGhpcy5vcGVuRWxlbWVudENvbmZpZ3MgPSB0aGlzLm9wZW5FbGVtZW50Q29uZmlncy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRyYWdMZWF2ZSA9IHRoaXMuZHJhZ0xlYXZlLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5fZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLmRyYWdTdGFydFdpdGhUYXJnZXRJZCk7XG4gICAgICAgIHRoaXMuX2RvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgdGhpcy5kcmFnTGVhdmUpO1xuXG4gICAgICAgIHRoaXMuX2RvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9wZW5FbGVtZW50Q29uZmlncyk7XG4gICAgfVxuXG4gICAgZ2V0IGRvbUVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kb21FbGVtZW50O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvcGVuRWxlbWVudENvbmZpZ3MoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMuc2VsZWN0b3JWYWx1ZSgpO1xuICAgICAgICB0aGlzLmJ1aWxkRWxlbWVudENvbmZpZ3MoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29tcG9uZW50U2VsZWN0ZWQoY29tcG9uZW50KSB7XG4gICAgICAgIGlmKGNvbXBvbmVudCA9PT0gdGhpcy5fZG9tRWxlbWVudFsnbmFtZSddKSB7XG4gICAgICAgICAgICB0aGlzLmJ1aWxkRWxlbWVudENvbmZpZ3MoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgYnVpbGRFbGVtZW50Q29uZmlncygpIHtcbiAgICAgICAgdGhpcy5pbnNlcnRDb21wb25lbnRBZnRlcihcbiAgICAgICAgICAgIEFkZENvbXBvbmVudC5hZGRJbnB1dFR5cGVTZWxlY3RvckNvbXBvbmVudCxcbiAgICAgICAgICAgIEFkZENvbXBvbmVudC5hZGRDbGFzc05hbWVEZWZpbml0aW9uQ29tcG9uZW50XG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5idWlsZEVsZW1lbnRzKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudENoYW5nZU9ic2VydmVySW50ZXJmYWNlIGZyb20gJy4uL2NvbW1vbi9pbnRlcmZhY2VzL2NvbXBvbmVudC1jaGFuZ2Utb2JzZXJ2ZXIuaW50ZXJmYWNlJztcblxuaW1wb3J0IExhYmVsQnVpbGRlciBmcm9tICcuLi9jb21tb24vbW9kZWxzL0xhYmVsQnVpbGRlcic7XG5pbXBvcnQgUmF3SFRNTENvbnBvbmVudCBmcm9tICcuL1Jhd0hUTUxDb21wb25lbnQnO1xuXG5pbXBvcnQgQ3NzU3R5bGVTaGVldCBmcm9tICcuLi9jc3Mtc3R5bGVzaGVldC9jc3Mtc3R5bGVzaGVldCc7XG5cbmltcG9ydCBkZWZpbmVFbGVtZW50TmFtZSBmcm9tICcuLi9jb21tb24vZnVuY3Rpb25zL2RlZmluZS1lbGVtZW50LW5hbWUnO1xuaW1wb3J0IHsgQWRkQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2VudW1zL2FkZC1jb21wb25lbnQuZW51bSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhYmVsIGV4dGVuZHMgUmF3SFRNTENvbnBvbmVudCBpbXBsZW1lbnRzIENvbXBvbmVudENoYW5nZU9ic2VydmVySW50ZXJmYWNlIHtcbiAgICBwcml2YXRlIHN0YXRpYyBpdGVyYXRvciA9IDA7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGRlZmluZUVsZW1lbnROYW1lKGBsYWJlbCR7TGFiZWwuaXRlcmF0b3IrK31gLCBSYXdIVE1MQ29ucG9uZW50Lmluc3RhbmNlcyk7XG5cbiAgICAgICAgQ3NzU3R5bGVTaGVldC5pbnNlcnRSdWxlKGAuJHtuYW1lfSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmVcbiAgICAgICAgfWApO1xuXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXROYW1lKG5hbWUpXG4gICAgICAgICAgICAuc2V0SWQobmFtZSlcbiAgICAgICAgICAgIC5hZGRDc3NDbGFzc05hbWUobmFtZSlcbiAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ05ldyBMYWJlbCcpXG4gICAgICAgICAgICAuZHJhZ2dhYmxlKClcbiAgICAgICAgICAgIC5idWlsZCgpO1xuXG4gICAgICAgIHN1cGVyKGVsZW1lbnQpO1xuXG4gICAgICAgIHRoaXMub3BlbkVsZW1lbnRDb25maWdzID0gdGhpcy5vcGVuRWxlbWVudENvbmZpZ3MuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcmFnTGVhdmUgPSB0aGlzLmRyYWdMZWF2ZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuX2RvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5kcmFnU3RhcnRXaXRoVGFyZ2V0SWQpO1xuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIHRoaXMuZHJhZ0xlYXZlKTtcblxuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcGVuRWxlbWVudENvbmZpZ3MpO1xuICAgIH1cblxuICAgIGdldCBkb21FbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZG9tRWxlbWVudDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb3BlbkVsZW1lbnRDb25maWdzKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLnNlbGVjdG9yVmFsdWUoKTtcblxuXG4gICAgICAgIHRoaXMuYnVpbGRFbGVtZW50Q29uZmlncygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb21wb25lbnRTZWxlY3RlZChjb21wb25lbnQpIHtcbiAgICAgICAgaWYoY29tcG9uZW50ID09PSB0aGlzLl9kb21FbGVtZW50WyduYW1lJ10pIHtcbiAgICAgICAgICAgIHRoaXMuYnVpbGRFbGVtZW50Q29uZmlncygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBidWlsZEVsZW1lbnRDb25maWdzKCkge1xuICAgICAgICB0aGlzLmluc2VydENvbXBvbmVudEFmdGVyKFxuICAgICAgICAgICAgQWRkQ29tcG9uZW50LmFkZElubmVyVGV4dENoYW5nZUNvbXBvbmVudCxcbiAgICAgICAgICAgIEFkZENvbXBvbmVudC5hZGRDbGFzc05hbWVEZWZpbml0aW9uQ29tcG9uZW50XG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5idWlsZEVsZW1lbnRzKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IE9yZGVyZWRMaXN0QnVpbGRlciBmcm9tICcuLi9jb21tb24vbW9kZWxzL09yZGVyZWRMaXN0QnVpbGRlcic7XG5pbXBvcnQgUmF3SFRNTENvbnBvbmVudCBmcm9tICcuL1Jhd0hUTUxDb21wb25lbnQnO1xuaW1wb3J0IFJhd0NvbnRhaW5lciBmcm9tICcuL1Jhd0NvbnRhaW5lcic7XG5cbmltcG9ydCBDc3NTdHlsZVNoZWV0IGZyb20gJy4uL2Nzcy1zdHlsZXNoZWV0L2Nzcy1zdHlsZXNoZWV0JztcbmltcG9ydCBjb25zdGFudHMgZnJvbSAnLi4vY29tbW9uL2NvbnN0YW50cy9jb25zdGFudHMnO1xuaW1wb3J0IGRlZmluZUVsZW1lbnROYW1lIGZyb20gJy4uL2NvbW1vbi9mdW5jdGlvbnMvZGVmaW5lLWVsZW1lbnQtbmFtZSc7XG5cbmltcG9ydCB7IERpc3BsYXlUeXBlc0VudW0gfSBmcm9tICcuLi9jb21tb24vZW51bXMvZGlzcGxheS10eXBlcy5lbnVtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXJlZExpc3QgZXh0ZW5kcyBSYXdDb250YWluZXIge1xuICAgIHByaXZhdGUgc3RhdGljIGl0ZXJhdG9yID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBjb25zdCBuYW1lID0gZGVmaW5lRWxlbWVudE5hbWUoYG9yZGVyZWRfbGlzdCR7T3JkZXJlZExpc3QuaXRlcmF0b3IrK31gLCBSYXdIVE1MQ29ucG9uZW50Lmluc3RhbmNlcyk7XG5cbiAgICAgICAgQ3NzU3R5bGVTaGVldC5pbnNlcnRSdWxlKGAuJHtuYW1lfSB7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogJHtEaXNwbGF5VHlwZXNFbnVtLmZsZXh9O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsMjU1LDI1NSk7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBkYXNoZWQgcmdiKDAsMCwwKTtcbiAgICAgICAgfWApO1xuXG4gICAgICAgIENzc1N0eWxlU2hlZXQuaW5zZXJ0UnVsZShgLiR7bmFtZX06aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb25zdGFudHMuSU5WRVJURURfQkFDS0dST1VORF9DT0xPUn07XG4gICAgICAgIH1gKTtcblxuICAgICAgICBjb25zdCBlbGVtZW50ID0gbmV3IE9yZGVyZWRMaXN0QnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0TmFtZShuYW1lKVxuICAgICAgICAgICAgLnNldElkKG5hbWUpXG4gICAgICAgICAgICAuYWRkQ3NzQ2xhc3NOYW1lKG5hbWUpXG4gICAgICAgICAgICAuZHJhZ2dhYmxlKClcbiAgICAgICAgICAgIC5idWlsZCgpO1xuXG4gICAgICAgIHN1cGVyKGVsZW1lbnQpO1xuICAgIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnRDaGFuZ2VPYnNlcnZlckludGVyZmFjZSBmcm9tICcuLi9jb21tb24vaW50ZXJmYWNlcy9jb21wb25lbnQtY2hhbmdlLW9ic2VydmVyLmludGVyZmFjZSc7XG5cbmltcG9ydCBSYXdIVE1MQ29ucG9uZW50IGZyb20gJy4vUmF3SFRNTENvbXBvbmVudCc7XG5cbmltcG9ydCBjb25zdGFudHMgZnJvbSAnLi4vY29tbW9uL2NvbnN0YW50cy9jb25zdGFudHMnO1xuaW1wb3J0IHsgQWRkQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2VudW1zL2FkZC1jb21wb25lbnQuZW51bSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhd0NvbnRhaW5lciBleHRlbmRzIFJhd0hUTUxDb25wb25lbnQgaW1wbGVtZW50cyBDb21wb25lbnRDaGFuZ2VPYnNlcnZlckludGVyZmFjZSB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgc3VwZXIoZWxlbWVudCk7XG5cbiAgICAgICAgdGhpcy5kcmFnRW50ZXIgPSB0aGlzLmRyYWdFbnRlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRyYWdMZWF2ZUZvclRoaXNFbGVtZW50ID0gdGhpcy5kcmFnTGVhdmVGb3JUaGlzRWxlbWVudC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRyb3AgPSB0aGlzLmRyb3AuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLm9wZW5FbGVtZW50Q29uZmlncyA9IHRoaXMub3BlbkVsZW1lbnRDb25maWdzLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5fZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLmRyYWdTdGFydFdpdGhUYXJnZXRJZCk7XG4gICAgICAgIHRoaXMuX2RvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgdGhpcy5kcmFnRW50ZXIpO1xuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIHRoaXMuZHJhZ0xlYXZlRm9yVGhpc0VsZW1lbnQpO1xuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLmRyb3ApO1xuXG4gICAgICAgIHRoaXMuX2RvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9wZW5FbGVtZW50Q29uZmlncyk7XG4gICAgfVxuXG4gICAgZ2V0IGRvbUVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kb21FbGVtZW50O1xuICAgIH1cblxuICAgIHByaXZhdGUgZHJhZ0VudGVyKGV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgdGhpcy5kb21FbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbnN0YW50cy5JTlZFUlRFRF9CQUNLR1JPVU5EX0NPTE9SO1xuICAgIH1cblxuICAgIHByaXZhdGUgZHJhZ0xlYXZlRm9yVGhpc0VsZW1lbnQoZXZlbnQ6IERyYWdFdmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICB0aGlzLmRvbUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyc7XG4gICAgICAgIHRoaXMuX2RvbUVsZW1lbnQuYXR0cmlidXRlcy5yZW1vdmVOYW1lZEl0ZW0oJ3N0eWxlJyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkcm9wKCkge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyc7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9wZW5FbGVtZW50Q29uZmlncyhldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5zZWxlY3RvclZhbHVlKCk7XG5cbiAgICAgICAgdGhpcy5idWlsZEVsZW1lbnRDb25maWdzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbXBvbmVudFNlbGVjdGVkKGNvbXBvbmVudCkge1xuICAgICAgICBpZihjb21wb25lbnQgPT09IHRoaXMuX2RvbUVsZW1lbnRbJ25hbWUnXSkge1xuICAgICAgICAgICAgdGhpcy5idWlsZEVsZW1lbnRDb25maWdzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGJ1aWxkRWxlbWVudENvbmZpZ3MoKSB7XG4gICAgICAgIHRoaXMuaW5zZXJ0Q29tcG9uZW50QmVmb3JlKFxuICAgICAgICAgICAgQWRkQ29tcG9uZW50LmFkZERpc3BsYXlBc1BhcmVudENvbXBvbmVudCxcbiAgICAgICAgICAgIEFkZENvbXBvbmVudC5hZGREaXNwbGF5QXNDaGlsZENvbXBvbmVudFxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuYnVpbGRFbGVtZW50cygpO1xuICAgIH1cbn1cbiIsImltcG9ydCBDbGFzc0NoYW5nZVB1Ymxpc2hlciBmcm9tICcuLi9jb21tb24vcHVibGlzaGVycy9DbGFzc0NoYW5nZVB1Ymxpc2hlcic7XG5pbXBvcnQgQ29tcG9uZW50Q2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2UgZnJvbSAnLi4vY29tbW9uL2ludGVyZmFjZXMvY29tcG9uZW50LWNoYW5nZS1vYnNlcnZlci5pbnRlcmZhY2UnO1xuXG5pbXBvcnQgQnV0dG9uQnVpbGRlciBmcm9tICcuLi9jb21tb24vbW9kZWxzL0J1dHRvbkJ1aWxkZXInO1xuaW1wb3J0IExhYmVsQnVpbGRlciBmcm9tICcuLi9jb21tb24vbW9kZWxzL0xhYmVsQnVpbGRlcic7XG5pbXBvcnQgQ29udGFpbmVyQnVpbGRlciBmcm9tICcuLi9jb21tb24vbW9kZWxzL0NvbnRhaW5lckJ1aWxkZXInO1xuaW1wb3J0IFN0eWxlc0NvbXBvbmVudHNCdWlsZGVyIGZyb20gJy4uL2NvbW1vbi9tb2RlbHMvU3R5bGVzQ29tcG9uZW50c0J1aWxkZXInO1xuXG5pbXBvcnQgY29udGFudHMgZnJvbSAnLi4vY29tbW9uL2NvbnN0YW50cy9jb25zdGFudHMnO1xuXG5pbXBvcnQgeyBJbnB1dFR5cGVFbnVtIH0gZnJvbSAnLi4vY29tbW9uL2VudW1zL2lucHV0LXR5cGUuZW51bSc7XG5pbXBvcnQgeyBTdHlsZU5hbWVFbnVtIH0gZnJvbSAnLi4vY29tbW9uL2VudW1zL3N0eWxlLW5hbWUuZW51bSc7XG5pbXBvcnQgeyBEaXNwbGF5VHlwZXNFbnVtIH0gZnJvbSAnLi4vY29tbW9uL2VudW1zL2Rpc3BsYXktdHlwZXMuZW51bSc7XG5cbmltcG9ydCBEaXNwbGF5QXNQYXJlbnRDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudHMvZGlzcGxheS1hcy1wYXJlbnQuY29tcG9uZW50JztcbmltcG9ydCBHZW5lcmljUHJpbWFyeUlucHV0Q29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnRzL2dlbmVyaWMtcHJpbWFyeS1pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IEdlbmVyaWNQcmltYXJ5U2VsZWN0b3JDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudHMvZ2VuZXJpYy1wcmltYXJ5LXNlbGVjdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgSWREZWZpbml0aW9uQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnRzL2lkLWRlZmluaXRpb24uY29tcG9uZW50JztcbmltcG9ydCBNYXJnaW5PclBhZGRpbmdDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudHMvbWFyZ2luLW9yLXBhZGRpbmcuY29tcG9uZW50JztcbmltcG9ydCBEaXNwbGF5QXNDaGlsZENvbXBvbmVudCBmcm9tICcuLi9jb21tb24vY29tcG9uZW50cy9kaXNwbGF5LWFzLWNoaWxkLmNvbXBvbmVudCc7XG5pbXBvcnQgQm9yZGVyQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnRzL2JvcmRlci5jb21wb25lbnQnO1xuaW1wb3J0IEJhY2tncm91bmRDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudHMvYmFja2dyb3VuZC5jb21wb25lbnQnO1xuaW1wb3J0IEJveFNoYWRvd0NvbXBvbmVudCBmcm9tICcuLi9jb21tb24vY29tcG9uZW50cy9ib3gtc2hhZG93LmNvbXBvbmVudCc7XG5pbXBvcnQgQ2xhc3NNYW5hZ2VtZW50Q29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnRzL2NsYXNzLW1hbmFnZW1lbnQuY29tcG9uZW50JztcbmltcG9ydCBTaXplc0NvbXBvbmVudCBmcm9tICcuLi9jb21tb24vY29tcG9uZW50cy9zaXplcy5jb21wb25lbnQnO1xuaW1wb3J0IEZvbnRDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudHMvZm9udC5jb21wb25lbnRzJztcbmltcG9ydCBVcmxEZWZpbml0aW9uQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnRzL3VybC1kZWZpbml0aW9uLWNvbXBvbmVudCc7XG5pbXBvcnQgeyBBZGRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vZW51bXMvYWRkLWNvbXBvbmVudC5lbnVtJztcblxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgUmF3SFRNTENvbnBvbmVudCBpbXBsZW1lbnRzIENvbXBvbmVudENoYW5nZU9ic2VydmVySW50ZXJmYWNlIHtcbiAgICBwcm90ZWN0ZWQgX2RvbUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICAgIHByb3RlY3RlZCBzdHlsZXNDb21wb25lbnRzOiBTdHlsZXNDb21wb25lbnRzQnVpbGRlcjtcblxuICAgIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2VzOiBIVE1MRWxlbWVudFtdID0gW107XG5cbiAgICBwcm90ZWN0ZWQgY2xhc3NDaGFuZ2VQdWJsaXNoZXI6IENsYXNzQ2hhbmdlUHVibGlzaGVyO1xuXG4gICAgcHJvdGVjdGVkIGl0ZW1zU2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlbGVjdC1pdGVtJyk7XG4gICAgcHJpdmF0ZSBvcHRpb25FbGVtZW50OiBIVE1MT3B0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXG4gICAgY29uc3RydWN0b3IoZG9tRWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5fZG9tRWxlbWVudCA9IGRvbUVsZW1lbnRcblxuICAgICAgICBSYXdIVE1MQ29ucG9uZW50Lmluc3RhbmNlcy5wdXNoKHRoaXMuX2RvbUVsZW1lbnQpO1xuXG4gICAgICAgIHRoaXMuY2xhc3NDaGFuZ2VQdWJsaXNoZXIgPSBuZXcgQ2xhc3NDaGFuZ2VQdWJsaXNoZXIoKTtcblxuICAgICAgICB0aGlzLm9wdGlvbkVsZW1lbnQudmFsdWUgPSB0aGlzLmRvbUVsZW1lbnQuaWQ7XG4gICAgICAgIHRoaXMub3B0aW9uRWxlbWVudC50ZXh0ID0gdGhpcy5kb21FbGVtZW50LmlkO1xuICAgICAgICB0aGlzLml0ZW1zU2VsZWN0b3IuYXBwZW5kQ2hpbGQodGhpcy5vcHRpb25FbGVtZW50KTtcblxuICAgICAgICB0aGlzLnJlbW92ZUVsZW1lbnQgPSB0aGlzLnJlbW92ZUVsZW1lbnQuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBnZXQgZG9tRWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RvbUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGRyYWdTdGFydFdpdGhUYXJnZXRJZChldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0L3BsYWluJywgKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCkuaWQpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhZGRJZERlZmluaXRpb25Db21wb25lbnQoKSB7XG4gICAgICAgIHJldHVybiBuZXcgSWREZWZpbml0aW9uQ29tcG9uZW50KHRoaXMuX2RvbUVsZW1lbnQpLmNvbXBvbmVudDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYWRkQ2xhc3NOYW1lRGVmaW5pdGlvbkNvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDbGFzc01hbmFnZW1lbnRDb21wb25lbnQodGhpcy5fZG9tRWxlbWVudCwgdGhpcy5jbGFzc0NoYW5nZVB1Ymxpc2hlcikuY29tcG9uZW50O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhZGRNYXJnaW5TdHlsZUNvbXBvbmVudCgpIHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbmV3IE1hcmdpbk9yUGFkZGluZ0NvbXBvbmVudCh0aGlzLl9kb21FbGVtZW50LCBTdHlsZU5hbWVFbnVtLm1hcmdpbik7XG4gICAgICAgIHRoaXMuY2xhc3NDaGFuZ2VQdWJsaXNoZXIuYXR0YWNoKGNvbXBvbmVudCk7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQuY29tcG9uZW50O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhZGRQYWRkaW5nU3R5bGVDb21wb25lbnQoKSB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBNYXJnaW5PclBhZGRpbmdDb21wb25lbnQodGhpcy5fZG9tRWxlbWVudCwgU3R5bGVOYW1lRW51bS5wYWRkaW5nKTtcbiAgICAgICAgdGhpcy5jbGFzc0NoYW5nZVB1Ymxpc2hlci5hdHRhY2goY29tcG9uZW50KTtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5jb21wb25lbnQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFkZElubmVyVGV4dENoYW5nZUNvbXBvbmVudCgpIHtcbiAgICAgICAgY29uc3QgY2FuQWRkVGV4dDogKCkgPT4gYm9vbGVhbiA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmKHRoaXMuZG9tRWxlbWVudC5pbm5lckhUTUwuaW5jbHVkZXMoJzwnKSkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdJbm5lckhUTUwgbXVzdCBiZSBlbXB0eScpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgR2VuZXJpY1ByaW1hcnlJbnB1dENvbXBvbmVudChcbiAgICAgICAgICAgICAgICB0aGlzLl9kb21FbGVtZW50LFxuICAgICAgICAgICAgICAgICdpbm5lclRleHQnLFxuICAgICAgICAgICAgICAgICdJbm5lciBUZXh0JyxcbiAgICAgICAgICAgICAgICBjYW5BZGRUZXh0XG4gICAgICAgICAgICApLmNvbXBvbmVudDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYWRkSW5wdXRUeXBlU2VsZWN0b3JDb21wb25lbnQoKSB7XG4gICAgICAgIHJldHVybiBuZXcgR2VuZXJpY1ByaW1hcnlTZWxlY3RvckNvbXBvbmVudChcbiAgICAgICAgICAgIHRoaXMuX2RvbUVsZW1lbnQsXG4gICAgICAgICAgICAndHlwZScsXG4gICAgICAgICAgICAnSW5wdXQgVHlwZSBTZWxlY3RvcicsXG4gICAgICAgICAgICBJbnB1dFR5cGVFbnVtXG4gICAgICAgICkuY29tcG9uZW50O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhZGRMYWJlbENvbXBvbmVudChsYWJlbDogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXRJbm5lclRleHQobGFiZWwpXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBhZGREaXNwbGF5QXNQYXJlbnRDb21wb25lbnQoKSB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBEaXNwbGF5QXNQYXJlbnRDb21wb25lbnQodGhpcy5fZG9tRWxlbWVudCk7XG4gICAgICAgIHRoaXMuY2xhc3NDaGFuZ2VQdWJsaXNoZXIuYXR0YWNoKGNvbXBvbmVudCk7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQuY29tcG9uZW50O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhZGREaXNwbGF5QXNDaGlsZENvbXBvbmVudCgpIHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbmV3IERpc3BsYXlBc0NoaWxkQ29tcG9uZW50KHRoaXMuX2RvbUVsZW1lbnQpO1xuICAgICAgICB0aGlzLmNsYXNzQ2hhbmdlUHVibGlzaGVyLmF0dGFjaChjb21wb25lbnQpO1xuICAgICAgICByZXR1cm4gY29tcG9uZW50LmNvbXBvbmVudDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYWRkQm9yZGVyU2V0dGluZ3NDb21wb25lbnQoKSB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBCb3JkZXJDb21wb25lbnQodGhpcy5fZG9tRWxlbWVudCk7XG4gICAgICAgIHRoaXMuY2xhc3NDaGFuZ2VQdWJsaXNoZXIuYXR0YWNoKGNvbXBvbmVudCk7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQuY29tcG9uZW50O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhZGRCYWNrZ3JvdW5kU2V0dGluZ3NDb21wb25lbnQoKSB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBCYWNrZ3JvdW5kQ29tcG9uZW50KHRoaXMuX2RvbUVsZW1lbnQpO1xuICAgICAgICB0aGlzLmNsYXNzQ2hhbmdlUHVibGlzaGVyLmF0dGFjaChjb21wb25lbnQpO1xuICAgICAgICByZXR1cm4gY29tcG9uZW50LmNvbXBvbmVudDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYWRkQm94U2hhZG93Q29tcG9uZW50KCkge1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgQm94U2hhZG93Q29tcG9uZW50KHRoaXMuX2RvbUVsZW1lbnQpO1xuICAgICAgICB0aGlzLmNsYXNzQ2hhbmdlUHVibGlzaGVyLmF0dGFjaChjb21wb25lbnQpO1xuICAgICAgICByZXR1cm4gY29tcG9uZW50LmNvbXBvbmVudDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYWRkU2l6ZUNvbXBvbmVudHMoKSB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBTaXplc0NvbXBvbmVudCh0aGlzLl9kb21FbGVtZW50KTtcbiAgICAgICAgdGhpcy5jbGFzc0NoYW5nZVB1Ymxpc2hlci5hdHRhY2goY29tcG9uZW50KTtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5jb21wb25lbnQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFkZEZvbnRDb21wb25lbnMoKSB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBGb250Q29tcG9uZW50KHRoaXMuX2RvbUVsZW1lbnQpO1xuICAgICAgICB0aGlzLmNsYXNzQ2hhbmdlUHVibGlzaGVyLmF0dGFjaChjb21wb25lbnQpO1xuICAgICAgICByZXR1cm4gY29tcG9uZW50LmNvbXBvbmVudDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYWRkVXJsSW5wdXRDb21wb25lbnQoKSB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBVcmxEZWZpbml0aW9uQ29tcG9uZW50KHRoaXMuX2RvbUVsZW1lbnQpO1xuICAgICAgICByZXR1cm4gY29tcG9uZW50LmNvbXBvbmVudDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYWRkQWN0aW9uc0NvbXBvbmVudHMoKSB7XG4gICAgICAgIHJldHVybiBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5ib3JkZXIsICcxcHggc29saWQgIzRDQUY1MCcpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5wYWRkaW5nLCAnM3B4JylcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnQXZhaWxhYmxlIEFjdGlvbnMnKVxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5hZGRSZW1vdmVFbGVtZW50Q29tcG9uZW50KCkpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRSZW1vdmVFbGVtZW50Q29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gbmV3IEJ1dHRvbkJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldElubmVyVGV4dCgnUmVtb3ZlIEVsZW1lbnQnKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yZW1vdmVFbGVtZW50KVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlbW92ZUVsZW1lbnQoKSB7XG4gICAgICAgIGlmIChjb25maXJtKCdBcmUgeW91IHN1cmUgdG8gcmVtb3ZlIHRoaXMgY29tcG9uZW50JykpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuX2RvbUVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZCh0aGlzLl9kb21FbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXMuc3R5bGVzQ29tcG9uZW50cy5yZW1vdmUoKTtcbiAgICAgICAgICAgIHRoaXMuaXRlbXNTZWxlY3Rvci5yZW1vdmVDaGlsZCh0aGlzLm9wdGlvbkVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGRyYWdMZWF2ZShldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBpZiAodGhpcy5fZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50LnRhZ05hbWUgPT09ICdESVYnKSB7XG4gICAgICAgICAgICB0aGlzLl9kb21FbGVtZW50LnBhcmVudEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29udGFudHMuSU5WRVJURURfQkFDS0dST1VORF9DT0xPUjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBzZWxlY3RvclZhbHVlKCkge1xuICAgICAgICBsZXQgdGhpc09wdGlvbkluZGV4OiBudW1iZXI7XG4gICAgICAgIHRoaXMuaXRlbXNTZWxlY3Rvci5jaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgKGNoaWxkIGFzIEhUTUxPcHRpb25FbGVtZW50KS52YWx1ZSA9PT0gdGhpcy5kb21FbGVtZW50LmlkID8gdGhpc09wdGlvbkluZGV4ID0gaW5kZXggOiB1bmRlZmluZWRcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5pdGVtc1NlbGVjdG9yLnNlbGVjdGVkSW5kZXggPSB0aGlzT3B0aW9uSW5kZXg7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbXBvbmVudFNlbGVjdGVkKGNvbXBvbmVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNvbW1vbkNvbXBvbmVudHM6IEFkZENvbXBvbmVudFtdID0gW1xuICAgICAgICBBZGRDb21wb25lbnQuYWRkSWREZWZpbml0aW9uQ29tcG9uZW50LFxuICAgICAgICBBZGRDb21wb25lbnQuYWRkQ2xhc3NOYW1lRGVmaW5pdGlvbkNvbXBvbmVudCxcbiAgICAgICAgQWRkQ29tcG9uZW50LmFkZE1hcmdpblN0eWxlQ29tcG9uZW50LFxuICAgICAgICBBZGRDb21wb25lbnQuYWRkUGFkZGluZ1N0eWxlQ29tcG9uZW50LFxuICAgICAgICBBZGRDb21wb25lbnQuYWRkU2l6ZUNvbXBvbmVudHMsXG4gICAgICAgIEFkZENvbXBvbmVudC5hZGRGb250Q29tcG9uZW5zLFxuICAgICAgICBBZGRDb21wb25lbnQuYWRkQmFja2dyb3VuZFNldHRpbmdzQ29tcG9uZW50LFxuICAgICAgICBBZGRDb21wb25lbnQuYWRkQm9yZGVyU2V0dGluZ3NDb21wb25lbnQsXG4gICAgICAgIEFkZENvbXBvbmVudC5hZGRCb3hTaGFkb3dDb21wb25lbnQsXG4gICAgICAgIEFkZENvbXBvbmVudC5hZGREaXNwbGF5QXNDaGlsZENvbXBvbmVudCxcbiAgICAgICAgQWRkQ29tcG9uZW50LmFkZEFjdGlvbnNDb21wb25lbnRzLFxuICAgIF1cblxuICAgIHByb3RlY3RlZCBpbnNlcnRDb21wb25lbnRCZWZvcmUoXG4gICAgICAgIGNvbXBvbmVudFRvSW5zZXJ0OiBBZGRDb21wb25lbnQsXG4gICAgICAgIHJlZmVyZW5jZUNvbXBvbmVudDogQWRkQ29tcG9uZW50XG4gICAgKSB7XG4gICAgICAgIGNvbnN0IGFscmVhZHlFeGlzdHMgPSB0aGlzLmNvbW1vbkNvbXBvbmVudHMuZmluZCgoY29tcCkgPT4gY29tcCA9PT0gY29tcG9uZW50VG9JbnNlcnQpO1xuXG4gICAgICAgIGlmKGFscmVhZHlFeGlzdHMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5jb21tb25Db21wb25lbnRzLmZpbmRJbmRleCgoY29tcCkgPT4gY29tcCA9PT0gcmVmZXJlbmNlQ29tcG9uZW50KTtcblxuICAgICAgICB0aGlzLmNvbW1vbkNvbXBvbmVudHMuc3BsaWNlKGluZGV4LCAwLCBjb21wb25lbnRUb0luc2VydClcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaW5zZXJ0Q29tcG9uZW50QWZ0ZXIoXG4gICAgICAgIGNvbXBvbmVudFRvSW5zZXJ0OiBBZGRDb21wb25lbnQsXG4gICAgICAgIHJlZmVyZW5jZUNvbXBvbmVudDogQWRkQ29tcG9uZW50XG4gICAgKSB7XG4gICAgICAgIGNvbnN0IGFscmVhZHlFeGlzdHMgPSB0aGlzLmNvbW1vbkNvbXBvbmVudHMuZmluZCgoY29tcCkgPT4gY29tcCA9PT0gY29tcG9uZW50VG9JbnNlcnQpO1xuXG4gICAgICAgIGlmKGFscmVhZHlFeGlzdHMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5jb21tb25Db21wb25lbnRzLmZpbmRJbmRleCgoY29tcCkgPT4gY29tcCA9PT0gcmVmZXJlbmNlQ29tcG9uZW50KTtcbiAgICAgICAgdGhpcy5jb21tb25Db21wb25lbnRzLnNwbGljZShpbmRleCArIDEsIDAsIGNvbXBvbmVudFRvSW5zZXJ0KVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBidWlsZEVsZW1lbnRzKCkge1xuICAgICAgICB0aGlzLnN0eWxlc0NvbXBvbmVudHMgPSBuZXcgU3R5bGVzQ29tcG9uZW50c0J1aWxkZXIoKVxuXG4gICAgICAgIHRoaXMuY29tbW9uQ29tcG9uZW50cy5mb3JFYWNoKChjb21wb25lbnROYW1lKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN0eWxlc0NvbXBvbmVudHMuYXBwZW5kQ2hpbGQodGhpc1tjb21wb25lbnROYW1lXSgpKVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuc3R5bGVzQ29tcG9uZW50cy5idWlsZCgpO1xuICAgIH1cbn1cbiIsImltcG9ydCBUYWJsZUJ1aWxkZXIgZnJvbSAnLi4vY29tbW9uL21vZGVscy9UYWJsZUJ1aWxkZXInO1xuaW1wb3J0IFJhd0hUTUxDb25wb25lbnQgZnJvbSAnLi9SYXdIVE1MQ29tcG9uZW50JztcbmltcG9ydCBSYXdDb250YWluZXIgZnJvbSAnLi9SYXdDb250YWluZXInO1xuXG5pbXBvcnQgQ3NzU3R5bGVTaGVldCBmcm9tICcuLi9jc3Mtc3R5bGVzaGVldC9jc3Mtc3R5bGVzaGVldCc7XG5pbXBvcnQgY29uc3RhbnRzIGZyb20gJy4uL2NvbW1vbi9jb25zdGFudHMvY29uc3RhbnRzJztcbmltcG9ydCBkZWZpbmVFbGVtZW50TmFtZSBmcm9tICcuLi9jb21tb24vZnVuY3Rpb25zL2RlZmluZS1lbGVtZW50LW5hbWUnO1xuXG5pbXBvcnQgeyBEaXNwbGF5VHlwZXNFbnVtIH0gZnJvbSAnLi4vY29tbW9uL2VudW1zL2Rpc3BsYXktdHlwZXMuZW51bSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYmxlIGV4dGVuZHMgUmF3Q29udGFpbmVyIHtcbiAgICBwcml2YXRlIHN0YXRpYyBpdGVyYXRvciA9IDA7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGRlZmluZUVsZW1lbnROYW1lKGB0YWJsZSR7VGFibGUuaXRlcmF0b3IrK31gLCBSYXdIVE1MQ29ucG9uZW50Lmluc3RhbmNlcyk7XG5cbiAgICAgICAgQ3NzU3R5bGVTaGVldC5pbnNlcnRSdWxlKGAuJHtuYW1lfSB7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogJHtEaXNwbGF5VHlwZXNFbnVtLmZsZXh9O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsMjU1LDI1NSk7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBkYXNoZWQgcmdiKDAsMCwwKTtcbiAgICAgICAgfWApO1xuXG4gICAgICAgIENzc1N0eWxlU2hlZXQuaW5zZXJ0UnVsZShgLiR7bmFtZX06aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb25zdGFudHMuSU5WRVJURURfQkFDS0dST1VORF9DT0xPUn07XG4gICAgICAgIH1gKTtcblxuICAgICAgICBjb25zdCBlbGVtZW50ID0gbmV3IFRhYmxlQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0TmFtZShuYW1lKVxuICAgICAgICAgICAgLnNldElkKG5hbWUpXG4gICAgICAgICAgICAuYWRkQ3NzQ2xhc3NOYW1lKG5hbWUpXG4gICAgICAgICAgICAuZHJhZ2dhYmxlKClcbiAgICAgICAgICAgIC5idWlsZCgpO1xuXG4gICAgICAgIHN1cGVyKGVsZW1lbnQpO1xuICAgIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnRDaGFuZ2VPYnNlcnZlckludGVyZmFjZSBmcm9tICcuLi9jb21tb24vaW50ZXJmYWNlcy9jb21wb25lbnQtY2hhbmdlLW9ic2VydmVyLmludGVyZmFjZSc7XG5cbmltcG9ydCBUZXh0QXJlYUJ1aWxkZXIgZnJvbSAnLi4vY29tbW9uL21vZGVscy9UZXh0QXJlYUJ1aWxkZXInO1xuaW1wb3J0IFJhd0hUTUxDb25wb25lbnQgZnJvbSAnLi9SYXdIVE1MQ29tcG9uZW50JztcblxuaW1wb3J0IGRlZmluZUVsZW1lbnROYW1lIGZyb20gJy4uL2NvbW1vbi9mdW5jdGlvbnMvZGVmaW5lLWVsZW1lbnQtbmFtZSc7XG5cbmltcG9ydCBDc3NTdHlsZVNoZWV0IGZyb20gJy4uL2Nzcy1zdHlsZXNoZWV0L2Nzcy1zdHlsZXNoZWV0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dEFyZWEgZXh0ZW5kcyBSYXdIVE1MQ29ucG9uZW50IGltcGxlbWVudHMgQ29tcG9uZW50Q2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2Uge1xuICAgIHByaXZhdGUgc3RhdGljIGl0ZXJhdG9yID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBjb25zdCBuYW1lID0gZGVmaW5lRWxlbWVudE5hbWUoYHRleHRfYXJlYSR7VGV4dEFyZWEuaXRlcmF0b3IrK31gLCBSYXdIVE1MQ29ucG9uZW50Lmluc3RhbmNlcyk7XG5cbiAgICAgICAgQ3NzU3R5bGVTaGVldC5pbnNlcnRSdWxlKGAuJHtuYW1lfSB7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDNweCAjZGRkO1xuICAgICAgICB9YCk7XG5cbiAgICAgICAgY29uc3QgZWxlbWVudCA9IG5ldyBUZXh0QXJlYUJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldE5hbWUobmFtZSlcbiAgICAgICAgICAgIC5zZXRJZChuYW1lKVxuICAgICAgICAgICAgLmFkZENzc0NsYXNzTmFtZShuYW1lKVxuICAgICAgICAgICAgLmRyYWdnYWJsZSgpXG4gICAgICAgICAgICAuYnVpbGQoKTtcblxuICAgICAgICBzdXBlcihlbGVtZW50KTtcblxuICAgICAgICB0aGlzLm9wZW5FbGVtZW50Q29uZmlncyA9IHRoaXMub3BlbkVsZW1lbnRDb25maWdzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhZ0xlYXZlID0gdGhpcy5kcmFnTGVhdmUuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuZHJhZ1N0YXJ0V2l0aFRhcmdldElkKTtcbiAgICAgICAgdGhpcy5fZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCB0aGlzLmRyYWdMZWF2ZSk7XG5cbiAgICAgICAgdGhpcy5fZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3BlbkVsZW1lbnRDb25maWdzKTtcbiAgICB9XG5cbiAgICBnZXQgZG9tRWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RvbUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9wZW5FbGVtZW50Q29uZmlncyhldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5zZWxlY3RvclZhbHVlKCk7XG4gICAgICAgIHRoaXMuYnVpbGRFbGVtZW50Q29uZmlncygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb21wb25lbnRTZWxlY3RlZChjb21wb25lbnQpIHtcbiAgICAgICAgaWYoY29tcG9uZW50ID09PSB0aGlzLl9kb21FbGVtZW50WyduYW1lJ10pIHtcbiAgICAgICAgICAgIHRoaXMuYnVpbGRFbGVtZW50Q29uZmlncygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBidWlsZEVsZW1lbnRDb25maWdzKCkge1xuICAgICAgICB0aGlzLmJ1aWxkRWxlbWVudHMoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50Q2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2UgZnJvbSAnLi4vY29tbW9uL2ludGVyZmFjZXMvY29tcG9uZW50LWNoYW5nZS1vYnNlcnZlci5pbnRlcmZhY2UnO1xuXG5pbXBvcnQgVGl0bGVCdWlsZGVyIGZyb20gJy4uL2NvbW1vbi9tb2RlbHMvVGl0bGVCdWlsZGVyJztcbmltcG9ydCBSYXdIVE1MQ29ucG9uZW50IGZyb20gJy4vUmF3SFRNTENvbXBvbmVudCc7XG5cbmltcG9ydCBDc3NTdHlsZVNoZWV0IGZyb20gJy4uL2Nzcy1zdHlsZXNoZWV0L2Nzcy1zdHlsZXNoZWV0JztcblxuaW1wb3J0IGRlZmluZUVsZW1lbnROYW1lIGZyb20gJy4uL2NvbW1vbi9mdW5jdGlvbnMvZGVmaW5lLWVsZW1lbnQtbmFtZSc7XG5cbmltcG9ydCB7IFRpdGxlVHlwZXNFbnVtIH0gZnJvbSAnLi4vY29tbW9uL2VudW1zL3RpdGxlLnR5cGVzLmVudW0nO1xuaW1wb3J0IHsgQWRkQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2VudW1zL2FkZC1jb21wb25lbnQuZW51bSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpdGxlIGV4dGVuZHMgUmF3SFRNTENvbnBvbmVudCBpbXBsZW1lbnRzIENvbXBvbmVudENoYW5nZU9ic2VydmVySW50ZXJmYWNlIHtcbiAgICBwcml2YXRlIHN0YXRpYyBpdGVyYXRvciA9IDA7XG5cbiAgICBjb25zdHJ1Y3Rvcih0eXBlOiBUaXRsZVR5cGVzRW51bSkge1xuICAgICAgICBjb25zdCBuYW1lID0gZGVmaW5lRWxlbWVudE5hbWUoYHRpdGxlJHtUaXRsZS5pdGVyYXRvcisrfWAsIFJhd0hUTUxDb25wb25lbnQuaW5zdGFuY2VzKTtcblxuICAgICAgICBDc3NTdHlsZVNoZWV0Lmluc2VydFJ1bGUoYC4ke25hbWV9IHtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmVcbiAgICAgICAgfWApO1xuXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBuZXcgVGl0bGVCdWlsZGVyKHR5cGUpXG4gICAgICAgICAgICAuc2V0TmFtZShuYW1lKVxuICAgICAgICAgICAgLnNldElkKG5hbWUpXG4gICAgICAgICAgICAuYWRkQ3NzQ2xhc3NOYW1lKG5hbWUpXG4gICAgICAgICAgICAuc2V0SW5uZXJUZXh0KGBOZXcgVGl0bGUgJHt0eXBlfWApXG4gICAgICAgICAgICAuZHJhZ2dhYmxlKClcbiAgICAgICAgICAgIC5idWlsZCgpO1xuXG4gICAgICAgIHN1cGVyKGVsZW1lbnQpO1xuXG4gICAgICAgIHRoaXMub3BlbkVsZW1lbnRDb25maWdzID0gdGhpcy5vcGVuRWxlbWVudENvbmZpZ3MuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcmFnTGVhdmUgPSB0aGlzLmRyYWdMZWF2ZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuX2RvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5kcmFnU3RhcnRXaXRoVGFyZ2V0SWQpO1xuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIHRoaXMuZHJhZ0xlYXZlKTtcblxuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcGVuRWxlbWVudENvbmZpZ3MpO1xuICAgIH1cblxuICAgIGdldCBkb21FbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZG9tRWxlbWVudDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb3BlbkVsZW1lbnRDb25maWdzKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLnNlbGVjdG9yVmFsdWUoKTtcblxuXG4gICAgICAgIHRoaXMuYnVpbGRFbGVtZW50Q29uZmlncygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb21wb25lbnRTZWxlY3RlZChjb21wb25lbnQpIHtcbiAgICAgICAgaWYoY29tcG9uZW50ID09PSB0aGlzLl9kb21FbGVtZW50WyduYW1lJ10pIHtcbiAgICAgICAgICAgIHRoaXMuYnVpbGRFbGVtZW50Q29uZmlncygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBidWlsZEVsZW1lbnRDb25maWdzKCkge1xuICAgICAgICB0aGlzLmluc2VydENvbXBvbmVudEFmdGVyKFxuICAgICAgICAgICAgQWRkQ29tcG9uZW50LmFkZElubmVyVGV4dENoYW5nZUNvbXBvbmVudCxcbiAgICAgICAgICAgIEFkZENvbXBvbmVudC5hZGRDbGFzc05hbWVEZWZpbml0aW9uQ29tcG9uZW50XG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5idWlsZEVsZW1lbnRzKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFVub3JkZXJlZExpc3RCdWlsZGVyIGZyb20gJy4uL2NvbW1vbi9tb2RlbHMvVW5vZGVyZWRMaXN0QnVpbGRlcic7XG5pbXBvcnQgUmF3SFRNTENvbnBvbmVudCBmcm9tICcuL1Jhd0hUTUxDb21wb25lbnQnO1xuaW1wb3J0IFJhd0NvbnRhaW5lciBmcm9tICcuL1Jhd0NvbnRhaW5lcic7XG5cbmltcG9ydCBDc3NTdHlsZVNoZWV0IGZyb20gJy4uL2Nzcy1zdHlsZXNoZWV0L2Nzcy1zdHlsZXNoZWV0JztcbmltcG9ydCBjb25zdGFudHMgZnJvbSAnLi4vY29tbW9uL2NvbnN0YW50cy9jb25zdGFudHMnO1xuaW1wb3J0IGRlZmluZUVsZW1lbnROYW1lIGZyb20gJy4uL2NvbW1vbi9mdW5jdGlvbnMvZGVmaW5lLWVsZW1lbnQtbmFtZSc7XG5cbmltcG9ydCB7IERpc3BsYXlUeXBlc0VudW0gfSBmcm9tICcuLi9jb21tb24vZW51bXMvZGlzcGxheS10eXBlcy5lbnVtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVW5vcmRlcmVkTGlzdCBleHRlbmRzIFJhd0NvbnRhaW5lciB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaXRlcmF0b3IgPSAwO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBkZWZpbmVFbGVtZW50TmFtZShgdW5vcmRlcmVkX2xpc3Qke1Vub3JkZXJlZExpc3QuaXRlcmF0b3IrK31gLCBSYXdIVE1MQ29ucG9uZW50Lmluc3RhbmNlcyk7XG5cbiAgICAgICAgQ3NzU3R5bGVTaGVldC5pbnNlcnRSdWxlKGAuJHtuYW1lfSB7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogJHtEaXNwbGF5VHlwZXNFbnVtLmZsZXh9O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsMjU1LDI1NSk7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBkYXNoZWQgcmdiKDAsMCwwKTtcbiAgICAgICAgfWApO1xuXG4gICAgICAgIENzc1N0eWxlU2hlZXQuaW5zZXJ0UnVsZShgLiR7bmFtZX06aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb25zdGFudHMuSU5WRVJURURfQkFDS0dST1VORF9DT0xPUn07XG4gICAgICAgIH1gKTtcblxuICAgICAgICBjb25zdCBlbGVtZW50ID0gbmV3IFVub3JkZXJlZExpc3RCdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXROYW1lKG5hbWUpXG4gICAgICAgICAgICAuc2V0SWQobmFtZSlcbiAgICAgICAgICAgIC5hZGRDc3NDbGFzc05hbWUobmFtZSlcbiAgICAgICAgICAgIC5kcmFnZ2FibGUoKVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG5cbiAgICAgICAgc3VwZXIoZWxlbWVudCk7XG4gICAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgaW5pdERyYWdnYWJsZUNvbXBvbmVudHMgZnJvbSAnLi9jb21wb25lbnRzL2NvbXBvbmVudHMtY29udGFpbmVyL2luaXQtZHJhZ2dhYmxlLWNvbXBvbmVudHMnO1xuaW1wb3J0IENzc1N0eWxlU2hlZXQgZnJvbSAnLi9jb21wb25lbnRzL2Nzcy1zdHlsZXNoZWV0L2Nzcy1zdHlsZXNoZWV0JztcbmltcG9ydCBJbml0QXBwQ29udGFpbmVyIGZyb20gJy4vY29tcG9uZW50cy9hcHAtY29udGFpbmVyL2luaXQtYXBwLWNvbnRhaW5lcic7XG5cbmluaXREcmFnZ2FibGVDb21wb25lbnRzKCk7XG5uZXcgSW5pdEFwcENvbnRhaW5lcigpO1xuQ3NzU3R5bGVTaGVldC5pbml0KCk7XG5cbi8vIFRPRE86IGVsIG1ldG9kbyBpbml0IGRlYmVyaWEgYnVzY2FyIGVsIGNzcyBkZWwgbG9jYWxzdG9yYWdlLCBkZWJlcmlhbW9zIGhhY2VyIGxvIG1pc21vIGNvbiBlbCBIVE1MXG4vLyBEZWJlcmlhbW9zIHZlciBjb21vIGFsbWFjZW5hciB5IGRlc2hhY2VyIGNhbWJpb3MuLi4uXG5cbi8vIFRPRE86IGFjb21vZGFyIGVzdHJ1Y3R1cmFzIGNvbiBwcmV0dGllciB5IHRzbGludGVyLiBTYWx0YXIgbGluZWEgY3VhbmRvIG11eSBsYXJnYS5cblxuLy8gVE9ETzogaGF5IHF1ZSBtZXRlcmxlIGRyYWcgZW50ZXIgYWwgYXBwLWNvbnRhaW5lci1maXhlZCBwYXJhIHF1ZSBsZSBzYXF1ZSBlbCBiYWNrZ3JvdW5kIGNvbG9yIGFsIGFwcC1jb250YWluZXIuLi5cbi8vIG8gdmVyIHF1ZSBwYXNhIGNvbiBlbCBkcmFnIGxlYXZlXG5cbi8vIFRPRE86IGluc2VydGFyIHJ1bGVzIHBhcmEgZWwgbWVkaWEgcXVlcnkgOiBodHRwczovL2Rhdmlkd2Fsc2gubmFtZS9hZGQtcnVsZXMtc3R5bGVzaGVldHNcbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9BdC1ydWxlXG5cbi8vIFRPRE86IHByb2JhciBleHBvcnRhciBjc3MgeSBodG1sIHkgdmVyIGNvbW8gcXVlZGEgbGEgcGFnaW5hIGVuIGxhIHJlYWxpZGFkICovXG4vLyBUT0RPOiBoYWNlciBhbmFsaXNpcyBkZSBxdWUgZGViZXJpYW1vcyBleHBvcnRhciByZWFsbWVudGUgZGVsIGh0bWwgKi9cblxuLy8gVE9ETzogYXF1aSBmYWx0YSBsYSBhY2Npb24gZGUgZHVwbGljYXIgdW4gY29tcG9uZW50ZSwgZXMgZGVjaXIsIGRlIHVuIGNvbXBvbmVudGUgZXhpc3RlbnRlLCBkdXBsaWNhciBsYSBjb25maWcuLi5cbi8vIHNpLCBlcyBuZWNlc2FyaW8sIHBvcnF1ZSBlcyBtdWNobyBtYXMgZmFjaWwgcXVlIGFzaWduYXJsZSBsYSBjbGFzZSBkZSBvdHJvIGNvbXBvbmVudGUuLi5cbi8vIHZlciBjb21vIGR1cGxpY2Ftb3MgbGFzIGNsYXNlcy4uLiBzaSBsZSBhc2lnbmFtb3MgbGFzIGNsYXNlcyBkZWwgb3RybyBjb21wb25lbnRlPz8/LCBjb21vIGhhY2Vtb3MgY29uIHN1IGNsYXNlPz8/XG4vLyBzaSBkdXBsaWNhbW9zLCBubyBjcmVhbW9zIGNsYXNlIHByb3BpYSwgc29sbyBhc2lnbmFtb3MgbGFzIGNsYXNlcyBkZWwgb3RybyBjb21wb25lbnRlLi4uXG5cbi8vIEFncmVnYXIgZWwgZWxlbWVudG8gaW1nIHkgYSBzdSB2ZXosIGFncmVnYXIgaW1hZ2VuZXMgYWwgYmFja2dyb3VuZC4uLlxuXG4vLyBUT0RPOiBmYWx0YSB0b2RvIGxvIHF1ZSBlcyBwb3NpdGlvbi4uLiBBYnNvbHV0ZSwgcmVsYXRpdmUsIGV0Yy4uLiBObyByZWN1ZXJkbyBiaWVuIGNvbW8gZXMgZXNvLi4uXG4vLyBpbmNsdXNvLCBlbCB6IGluZGV4LCBxdWUgcG9kcmlhIGVzdGFyIGVuIGVsIG1pc21vIGNvbXBvbmVudGUuXG5cblxuLy8gVE9ETzogdmVyIGZvcm1hIGRlIHJlbW92ZXIgZWwgYm9yZGUgb3JpZ2luYWwgZGVsIGlucHV0LiBObyBlcyBsYSBtaXNtYSBwcm9waWVkYWQgcXVlIGVsIGJvcmRlci4uLlxuLy8gVE9ETzogZWwgYm9yZGVyYm94IGRlbCBpbnB1dCB2aWVuZSBjb21vIGFkdmFuY2VkLi4uIFZlciBzaSB0ZW5lbW9zIHF1ZSBoYWNlcmxlIGFsZ29cblxuLy8gVE9ETzogY3VhbmRvIGNyZW8gdW4gbm9tYnJlIGZ1dHVybywgeSBqdXN0byBjcmVvIHVuIGVsZW1lbnRvIGNvbiBlc2Ugbm9tYnJlIGZ1dHVybywgdGlyYSBlcnJvci4uLlxuLy8gcG9yIGVzbyB5byBsZSBwYXNhYmEgZWwgaXRlcmF0b3IuLi4gdmVyIGNvbW8gc29sdWNpb25hci4uLlxuXG4vLyBUT0RPOiBjb24gZWwgaWQgaGFicmlhIHF1ZSByZWVtcGxhemFyIHRvZG9zIGxvcyBjYXJhY3RlcmVzIGVzcGVjaWFsZXMgcG9yIGd1aW9uZXMgbyBhbGdvIGFzaS4uLlxuXG4vLyBUT0RPOiBmYWx0YSBwcm9waWVkYWQgc2Nyb2xsYWJsZSBlbiBkaXZcblxuLy8gVE9ETzogY3VhbHF1aWVyIGVsZW1lbnRvIGRlYmUgcG9kZXIgbW9kaWZpY2FyIGVsIGRpc3BsYXkgc2V0dGluZ3NcblxuLy8gVE9ETzogZmFsdGEgbGEgcHJvcGllZGFkIGJhY2tncm91bmQtaW1hZ2UgZW4gZWwgYmFja2dyb3VuZC1jb2xvclxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuLy8gVE9ETzogZW4gZWwgU2VsZWN0IEl0ZW0gbm8gc2UgZW5jdWVudHJhIGVsIGFwcC1jb250YWluZXIuIEVzIHF1ZSBwYXJhIHF1ZSBlc3RvIGZ1bmNpb25lLCBlbCBhcHAtY29udGFpbmVyIGRlYmVyaWEgc2VyIGNyZWFkbyBjb21vIHVuIG5ldyBDb250YWluZXIoKTtcblxuLy8gVE9ETzogZmFsdGEgdW4gYm90b24gZGUgZGVsZXRlIGluaXRpYWwgcHJvcGVydGllcywgYXNpIHNhY2Ftb3MgbG9zIGJvcmRlcyB5IGVzbyBhIHVuIGRpdiwgcG9yIGVqZW1wbG8uLi5cblxuLypcblRPRE86IGZhbHRhbiBsb3Mgc2lndWllbnRlcyBjb21wb25lbnRlczpcbiAgICAtIFRhYmxlLCB0ciwgdGgsIHRiLCB5IHZlciBxdWUgb3Ryb3MgZGUgdGFibGFzIC0+IFBhcmEgZXN0byB0ZW5kcmVtb3MgcXVlIGlyIGFncmVnYW5kbyBlbGVtZW50b3MgbWVkaWFudCBKUzpcbiAgICAgICAgLSBjb21vIHNlciwgYWdyZWdhciBlbCB0aCwgZWwgdGIgbyBlbCB0XG5cbjx0YWJsZT5cbiAgPHRoZWFkPlxuICAgIDx0cj5cbiAgICAgIDx0aD5IZWFkZXIgY29udGVudCAxPC90aD5cbiAgICAgIDx0aD5IZWFkZXIgY29udGVudCAyPC90aD5cbiAgICA8L3RyPlxuICA8L3RoZWFkPlxuICA8dGZvb3Q+XG4gICAgPHRyPlxuICAgICAgPHRkPkZvb3RlciBjb250ZW50IDE8L3RkPlxuICAgICAgPHRkPkZvb3RlciBjb250ZW50IDI8L3RkPlxuICAgIDwvdHI+XG4gIDwvdGZvb3Q+XG4gIDx0Ym9keT5cbiAgICA8dHI+XG4gICAgICA8dGQ+Qm9keSBjb250ZW50IDE8L3RkPlxuICAgICAgPHRkPkJvZHkgY29udGVudCAyPC90ZD5cbiAgICA8L3RyPlxuICA8L3Rib2R5PlxuPC90YWJsZT5cblxuPHRhYmxlPlxuICA8Y29sZ3JvdXAgc3Bhbj1cIjRcIiBjbGFzcz1cImNvbHVtbnNcIj48L2NvbGdyb3VwPlxuICA8dHI+XG4gICAgPHRoPkNvdW50cmllczwvdGg+XG4gICAgPHRoPkNhcGl0YWxzPC90aD5cbiAgICA8dGg+UG9wdWxhdGlvbjwvdGg+XG4gICAgPHRoPkxhbmd1YWdlPC90aD5cbiAgPC90cj5cbiAgPHRyPlxuICAgIDx0ZD5VU0E8L3RkPlxuICAgIDx0ZD5XYXNoaW5ndG9uIEQuQy48L3RkPlxuICAgIDx0ZD4zMDkgbWlsbGlvbjwvdGQ+XG4gICAgPHRkPkVuZ2xpc2g8L3RkPlxuICA8L3RyPlxuICA8dHI+XG4gICAgPHRkPlN3ZWRlbjwvdGQ+XG4gICAgPHRkPlN0b2NraG9sbTwvdGQ+XG4gICAgPHRkPjkgbWlsbGlvbjwvdGQ+XG4gICAgPHRkPlN3ZWRpc2g8L3RkPlxuICA8L3RyPlxuPC90YWJsZT5cblxuPHRhYmxlPlxuICA8Y2FwdGlvbj5Bd2Vzb21lIGNhcHRpb248L2NhcHRpb24+XG4gIDx0cj5cbiAgICA8dGQ+QXdlc29tZSBkYXRhPC90ZD5cbiAgPC90cj5cbjwvdGFibGU+XG5cblxuXG4gICAgLSBvbCB5IHVsLCB5IGxpOlxuYXF1aSBkZWJlbW9zIGFncmVnYXIgbG9zIGxpIGEgbWFubywgeSBhc2lnbmFyIGVsIHRpcG8gZGUgaWNvbm87XG5cbiAgICAtIGh5cGVybGluayBvIGFuY2hvciBlbGVtZW50OiBkZWJlbW9zIGFncmVnYXIgZWwgaGlwZXJsaW5rIHkgYWxndW5hcyBvdHJhcyBjb3Nhc1xuXG4gICAgLSB0ZXh0YXJlYTogZGViZW1vcyBwb2RlciBtb2RpZmljYXIgZWwgcmVsbGVubywgcGVybyBlbiB2ZXogZGUgY29uIHVuIGlucHV0LCBjb24gdW4gdGV4dGFyZWFcbiAgICBkYXIgZXN0aWxvIHRhbWJpZW4gcGFyYSBxdWUgbm8gc2VhIGVzdGlyYWJsZSBlbiBlbCBzZWxlY3RvciBhbnRlcyBkZSBoYWNlciBlbCBkcmFnIGFuZCBkcm9wXG4gICAgdGFtYmllbiBkZWJlIHBvZGVyIHNlciBzZWxlY2Npb25hYmxlIHNpIGxhIHF1ZXJlcyBlc3RpcmFibGUgbyBubyBlbiBlbCBkb21cbiovXG5cbi8vIFRPRE86IGZhbHRhIHBvc2ljaW9uIGFic29sdXRhIG8gcmVsYXRpdmEsIHotaW5kZXhcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==