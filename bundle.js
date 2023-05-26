/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/* harmony import */ var _html_components_componentsIndex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../html-components/componentsIndex */ "./src/components/html-components/componentsIndex.ts");
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
        if (targetElement.nodeName !== 'DIV'
            && targetElement.nodeName !== 'BUTTON'
            && targetElement.nodeName !== 'FORM') {
            return;
        }
        if (targetElement.children.length === 0 && targetElement.innerText !== '') {
            alert('InnerText must be empty');
            return;
        }
        var elementType = event.dataTransfer.getData('text/plain');
        var newDomElement = (0,_html_components_componentsIndex__WEBPACK_IMPORTED_MODULE_4__["default"])(elementType)();
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
/* harmony import */ var _models_TextareaBuilder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/TextareaBuilder */ "./src/components/common/models/TextareaBuilder.ts");
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
        this.advancedShadowBoxTextArea = new _models_TextareaBuilder__WEBPACK_IMPORTED_MODULE_7__["default"]()
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
/* harmony import */ var _models_TextareaBuilder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/TextareaBuilder */ "./src/components/common/models/TextareaBuilder.ts");
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
        this.rawClassTextEditor = new _models_TextareaBuilder__WEBPACK_IMPORTED_MODULE_8__["default"]();
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
/* harmony import */ var _models_TextareaBuilder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/TextareaBuilder */ "./src/components/common/models/TextareaBuilder.ts");
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
        this.gridTemplateAreasTextarea = new _generic_css_property_mutator_component__WEBPACK_IMPORTED_MODULE_7__["default"](this.domElementStyleSheet, 'grid-template-areas', 'Grid Template Areas', new _models_TextareaBuilder__WEBPACK_IMPORTED_MODULE_5__["default"]()
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
    INVERTED_BACKGROUND_COLOR: 'rgb(209,255,240'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contants);


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

/***/ "./src/components/common/enums/components.enum.ts":
/*!********************************************************!*\
  !*** ./src/components/common/enums/components.enum.ts ***!
  \********************************************************/
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
function dragStartWithTargetNodeName(e) {
    e.dataTransfer.setData('text/plain', e.target.nodeName);
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

/***/ "./src/components/common/models/TextareaBuilder.ts":
/*!*********************************************************!*\
  !*** ./src/components/common/models/TextareaBuilder.ts ***!
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
/* harmony import */ var _common_enums_components_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/enums/components.enum */ "./src/components/common/enums/components.enum.ts");
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
        this.insertComponentAfter(_common_enums_components_enum__WEBPACK_IMPORTED_MODULE_4__.AddComponent.addInnerTextChangeComponent, _common_enums_components_enum__WEBPACK_IMPORTED_MODULE_4__.AddComponent.addClassNameDefinitionComponent);
        this.insertComponentBefore(_common_enums_components_enum__WEBPACK_IMPORTED_MODULE_4__.AddComponent.addDisplayAsParentComponent, _common_enums_components_enum__WEBPACK_IMPORTED_MODULE_4__.AddComponent.addDisplayAsChildComponent);
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
/* harmony import */ var _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css-stylesheet/css-stylesheet */ "./src/components/css-stylesheet/css-stylesheet.ts");
/* harmony import */ var _common_constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/constants/constants */ "./src/components/common/constants/constants.ts");
/* harmony import */ var _common_functions_define_element_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/functions/define-element-name */ "./src/components/common/functions/define-element-name.ts");
/* harmony import */ var _common_enums_display_types_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/enums/display-types.enum */ "./src/components/common/enums/display-types.enum.ts");
/* harmony import */ var _common_enums_components_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/enums/components.enum */ "./src/components/common/enums/components.enum.ts");
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
        var _this = this;
        var name = (0,_common_functions_define_element_name__WEBPACK_IMPORTED_MODULE_4__["default"])("container".concat(Container.iterator++), _RawHTMLComponent__WEBPACK_IMPORTED_MODULE_1__["default"].instances);
        _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_2__["default"].insertRule(".".concat(name, " {\n            margin: 10px;\n            padding: 10px;\n            display: ").concat(_common_enums_display_types_enum__WEBPACK_IMPORTED_MODULE_5__.DisplayTypesEnum.flex, ";\n            flex-direction: column;\n            background-color: rgb(255,255,255);\n            border: 1px dashed rgb(0,0,0);\n        }"));
        var element = new _common_models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setName(name)
            .setId(name)
            .addCssClassName(name)
            .draggable()
            .build();
        _this = _super.call(this, element) || this;
        _this.dragEnter = _this.dragEnter.bind(_this);
        _this.dragLeaveForThisElement = _this.dragLeaveForThisElement.bind(_this);
        _this.drop = _this.drop.bind(_this);
        _this.mouseOver = _this.mouseOver.bind(_this);
        _this.mouseLeave = _this.mouseLeave.bind(_this);
        _this.openElementConfigs = _this.openElementConfigs.bind(_this);
        _this._domElement.addEventListener('dragstart', _this.dragStartWithTargetId);
        _this._domElement.addEventListener('dragenter', _this.dragEnter);
        _this._domElement.addEventListener('dragleave', _this.dragLeaveForThisElement);
        _this._domElement.addEventListener('drop', _this.drop);
        _this._domElement.addEventListener('mouseenter', _this.mouseOver);
        _this._domElement.addEventListener('mouseleave', _this.mouseLeave);
        _this._domElement.addEventListener('click', _this.openElementConfigs);
        return _this;
    }
    Object.defineProperty(Container.prototype, "domElement", {
        get: function () {
            return this._domElement;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.dragEnter = function (event) {
        event.stopPropagation();
        this.domElement.style.backgroundColor = _common_constants_constants__WEBPACK_IMPORTED_MODULE_3__["default"].INVERTED_BACKGROUND_COLOR;
        this.domElement.parentElement.style.backgroundColor = '';
    };
    Container.prototype.dragLeaveForThisElement = function (event) {
        event.stopPropagation();
        this.domElement.style.backgroundColor = '';
        this._domElement.attributes.removeNamedItem('style');
    };
    Container.prototype.drop = function () {
        this.domElement.style.backgroundColor = '';
        this.domElement.parentElement.style.backgroundColor = _common_constants_constants__WEBPACK_IMPORTED_MODULE_3__["default"].INVERTED_BACKGROUND_COLOR;
    };
    Container.prototype.hoverExists = function () {
        var hoverExists = false;
        this._domElement.classList.forEach(function (classname) {
            if (_css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_2__["default"].getRuleIndex("".concat(classname, ":hover")) !== -1) {
                hoverExists = true;
            }
        });
        return hoverExists;
    };
    Container.prototype.mouseOver = function () {
        if (!this.hoverExists()) {
            this._domElement.style.backgroundColor = _common_constants_constants__WEBPACK_IMPORTED_MODULE_3__["default"].INVERTED_BACKGROUND_COLOR;
            this._domElement.parentElement.style.backgroundColor = '';
        }
    };
    Container.prototype.mouseLeave = function () {
        if (!this.hoverExists()) {
            this._domElement.style.backgroundColor = '';
            this._domElement.parentElement.style.backgroundColor = _common_constants_constants__WEBPACK_IMPORTED_MODULE_3__["default"].INVERTED_BACKGROUND_COLOR;
        }
    };
    Container.prototype.openElementConfigs = function (event) {
        event.stopPropagation();
        this.selectorValue();
        this.buildElementConfigs();
    };
    Container.prototype.componentSelected = function (component) {
        if (component === this._domElement['name']) {
            this.buildElementConfigs();
        }
    };
    Container.prototype.buildElementConfigs = function () {
        this.insertComponentBefore(_common_enums_components_enum__WEBPACK_IMPORTED_MODULE_6__.AddComponent.addDisplayAsParentComponent, _common_enums_components_enum__WEBPACK_IMPORTED_MODULE_6__.AddComponent.addDisplayAsChildComponent);
        this.buildElements();
    };
    Container.iterator = 0;
    return Container;
}(_RawHTMLComponent__WEBPACK_IMPORTED_MODULE_1__["default"]));
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
/* harmony import */ var _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css-stylesheet/css-stylesheet */ "./src/components/css-stylesheet/css-stylesheet.ts");
/* harmony import */ var _common_constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/constants/constants */ "./src/components/common/constants/constants.ts");
/* harmony import */ var _common_functions_define_element_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/functions/define-element-name */ "./src/components/common/functions/define-element-name.ts");
/* harmony import */ var _common_enums_display_types_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/enums/display-types.enum */ "./src/components/common/enums/display-types.enum.ts");
/* harmony import */ var _common_enums_components_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/enums/components.enum */ "./src/components/common/enums/components.enum.ts");
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
        var name = (0,_common_functions_define_element_name__WEBPACK_IMPORTED_MODULE_4__["default"])("form".concat(Form.iterator++), _RawHTMLComponent__WEBPACK_IMPORTED_MODULE_1__["default"].instances);
        _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_2__["default"].insertRule(".".concat(name, " {\n            margin: 10px;\n            padding: 10px;\n            display: ").concat(_common_enums_display_types_enum__WEBPACK_IMPORTED_MODULE_5__.DisplayTypesEnum.flex, ";\n            flex-direction: column;\n            background-color: rgb(255,255,255);\n            border: 1px dashed rgb(0,0,0);\n        }"));
        var element = new _common_models_FormBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setName(name)
            .setId(name)
            .addCssClassName(name)
            .draggable()
            .build();
        _this = _super.call(this, element) || this;
        _this.dragEnter = _this.dragEnter.bind(_this);
        _this.dragLeaveForThisElement = _this.dragLeaveForThisElement.bind(_this);
        _this.drop = _this.drop.bind(_this);
        _this.mouseOver = _this.mouseOver.bind(_this);
        _this.mouseLeave = _this.mouseLeave.bind(_this);
        _this.openElementConfigs = _this.openElementConfigs.bind(_this);
        _this._domElement.addEventListener('dragstart', _this.dragStartWithTargetId);
        _this._domElement.addEventListener('dragenter', _this.dragEnter);
        _this._domElement.addEventListener('dragleave', _this.dragLeaveForThisElement);
        _this._domElement.addEventListener('drop', _this.drop);
        _this._domElement.addEventListener('mouseenter', _this.mouseOver);
        _this._domElement.addEventListener('mouseleave', _this.mouseLeave);
        _this._domElement.addEventListener('click', _this.openElementConfigs);
        _this._domElement.addEventListener('submit', _this.openElementConfigs);
        return _this;
    }
    Object.defineProperty(Form.prototype, "domElement", {
        get: function () {
            return this._domElement;
        },
        enumerable: false,
        configurable: true
    });
    Form.prototype.dragEnter = function (event) {
        event.stopPropagation();
        this.domElement.style.backgroundColor = _common_constants_constants__WEBPACK_IMPORTED_MODULE_3__["default"].INVERTED_BACKGROUND_COLOR;
        this.domElement.parentElement.style.backgroundColor = '';
    };
    Form.prototype.dragLeaveForThisElement = function (event) {
        event.stopPropagation();
        this.domElement.style.backgroundColor = '';
        this._domElement.attributes.removeNamedItem('style');
    };
    Form.prototype.drop = function () {
        this.domElement.style.backgroundColor = '';
        this.domElement.parentElement.style.backgroundColor = _common_constants_constants__WEBPACK_IMPORTED_MODULE_3__["default"].INVERTED_BACKGROUND_COLOR;
    };
    Form.prototype.hoverExists = function () {
        var hoverExists = false;
        this._domElement.classList.forEach(function (classname) {
            if (_css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_2__["default"].getRuleIndex("".concat(classname, ":hover")) !== -1) {
                hoverExists = true;
            }
        });
        return hoverExists;
    };
    Form.prototype.mouseOver = function () {
        if (!this.hoverExists()) {
            this._domElement.style.backgroundColor = _common_constants_constants__WEBPACK_IMPORTED_MODULE_3__["default"].INVERTED_BACKGROUND_COLOR;
            this._domElement.parentElement.style.backgroundColor = '';
        }
    };
    Form.prototype.mouseLeave = function () {
        if (!this.hoverExists()) {
            this._domElement.style.backgroundColor = '';
            this._domElement.parentElement.style.backgroundColor = _common_constants_constants__WEBPACK_IMPORTED_MODULE_3__["default"].INVERTED_BACKGROUND_COLOR;
        }
    };
    Form.prototype.openElementConfigs = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.selectorValue();
        this.buildElementConfigs();
    };
    Form.prototype.componentSelected = function (component) {
        if (component === this._domElement['name']) {
            this.buildElementConfigs();
        }
    };
    Form.prototype.buildElementConfigs = function () {
        this.insertComponentBefore(_common_enums_components_enum__WEBPACK_IMPORTED_MODULE_6__.AddComponent.addDisplayAsParentComponent, _common_enums_components_enum__WEBPACK_IMPORTED_MODULE_6__.AddComponent.addDisplayAsChildComponent);
        this.buildElements();
    };
    Form.iterator = 0;
    return Form;
}(_RawHTMLComponent__WEBPACK_IMPORTED_MODULE_1__["default"]));
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
/* harmony import */ var _common_enums_components_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/enums/components.enum */ "./src/components/common/enums/components.enum.ts");
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
        this.insertComponentAfter(_common_enums_components_enum__WEBPACK_IMPORTED_MODULE_4__.AddComponent.addUrlInputComponent, _common_enums_components_enum__WEBPACK_IMPORTED_MODULE_4__.AddComponent.addClassNameDefinitionComponent);
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
/* harmony import */ var _common_enums_components_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/enums/components.enum */ "./src/components/common/enums/components.enum.ts");
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
        this.insertComponentAfter(_common_enums_components_enum__WEBPACK_IMPORTED_MODULE_5__.AddComponent.addInputTypeSelectorComponent, _common_enums_components_enum__WEBPACK_IMPORTED_MODULE_5__.AddComponent.addClassNameDefinitionComponent);
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
/* harmony import */ var _common_enums_components_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/enums/components.enum */ "./src/components/common/enums/components.enum.ts");
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
        this.insertComponentAfter(_common_enums_components_enum__WEBPACK_IMPORTED_MODULE_4__.AddComponent.addInnerTextChangeComponent, _common_enums_components_enum__WEBPACK_IMPORTED_MODULE_4__.AddComponent.addClassNameDefinitionComponent);
        this.buildElements();
    };
    Label.iterator = 0;
    return Label;
}(_RawHTMLComponent__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Label);


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
/* harmony import */ var _common_enums_components_enum__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../common/enums/components.enum */ "./src/components/common/enums/components.enum.ts");























var RawHTMLConponent = /** @class */ (function () {
    function RawHTMLConponent(domElement) {
        this.itemsSelector = document.querySelector('#select-item');
        this.optionElement = document.createElement('option');
        this.commonComponents = [
            _common_enums_components_enum__WEBPACK_IMPORTED_MODULE_22__.AddComponent.addIdDefinitionComponent,
            _common_enums_components_enum__WEBPACK_IMPORTED_MODULE_22__.AddComponent.addClassNameDefinitionComponent,
            _common_enums_components_enum__WEBPACK_IMPORTED_MODULE_22__.AddComponent.addMarginStyleComponent,
            _common_enums_components_enum__WEBPACK_IMPORTED_MODULE_22__.AddComponent.addPaddingStyleComponent,
            _common_enums_components_enum__WEBPACK_IMPORTED_MODULE_22__.AddComponent.addSizeComponents,
            _common_enums_components_enum__WEBPACK_IMPORTED_MODULE_22__.AddComponent.addFontComponens,
            _common_enums_components_enum__WEBPACK_IMPORTED_MODULE_22__.AddComponent.addBackgroundSettingsComponent,
            _common_enums_components_enum__WEBPACK_IMPORTED_MODULE_22__.AddComponent.addBorderSettingsComponent,
            _common_enums_components_enum__WEBPACK_IMPORTED_MODULE_22__.AddComponent.addBoxShadowComponent,
            _common_enums_components_enum__WEBPACK_IMPORTED_MODULE_22__.AddComponent.addDisplayAsChildComponent,
            _common_enums_components_enum__WEBPACK_IMPORTED_MODULE_22__.AddComponent.addActionsComponents,
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
/* harmony import */ var _common_enums_components_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/enums/components.enum */ "./src/components/common/enums/components.enum.ts");
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
        this.insertComponentAfter(_common_enums_components_enum__WEBPACK_IMPORTED_MODULE_4__.AddComponent.addInnerTextChangeComponent, _common_enums_components_enum__WEBPACK_IMPORTED_MODULE_4__.AddComponent.addClassNameDefinitionComponent);
        this.buildElements();
    };
    Title.iterator = 0;
    return Title;
}(_RawHTMLComponent__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);


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
/* harmony import */ var _common_enums_title_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/enums/title.types.enum */ "./src/components/common/enums/title.types.enum.ts");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ "./src/components/html-components/Button.ts");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Input */ "./src/components/html-components/Input.ts");
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Container */ "./src/components/html-components/Container.ts");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Label */ "./src/components/html-components/Label.ts");
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Title */ "./src/components/html-components/Title.ts");
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Image */ "./src/components/html-components/Image.ts");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Form */ "./src/components/html-components/Form.ts");








function componentsIndex(index) {
    var componentsIndex = {
        'DIV': function () { return new _Container__WEBPACK_IMPORTED_MODULE_3__["default"](); },
        'FORM': function () { return new _Form__WEBPACK_IMPORTED_MODULE_7__["default"](); },
        'BUTTON': function () { return new _Button__WEBPACK_IMPORTED_MODULE_1__["default"](); },
        'INPUT': function () { return new _Input__WEBPACK_IMPORTED_MODULE_2__["default"](); },
        'LABEL': function () { return new _Label__WEBPACK_IMPORTED_MODULE_4__["default"](); },
        'H1': function () { return new _Title__WEBPACK_IMPORTED_MODULE_5__["default"](_common_enums_title_types_enum__WEBPACK_IMPORTED_MODULE_0__.TitleTypesEnum.H1); },
        'H2': function () { return new _Title__WEBPACK_IMPORTED_MODULE_5__["default"](_common_enums_title_types_enum__WEBPACK_IMPORTED_MODULE_0__.TitleTypesEnum.H2); },
        'H3': function () { return new _Title__WEBPACK_IMPORTED_MODULE_5__["default"](_common_enums_title_types_enum__WEBPACK_IMPORTED_MODULE_0__.TitleTypesEnum.H3); },
        'H4': function () { return new _Title__WEBPACK_IMPORTED_MODULE_5__["default"](_common_enums_title_types_enum__WEBPACK_IMPORTED_MODULE_0__.TitleTypesEnum.H4); },
        'H5': function () { return new _Title__WEBPACK_IMPORTED_MODULE_5__["default"](_common_enums_title_types_enum__WEBPACK_IMPORTED_MODULE_0__.TitleTypesEnum.H5); },
        'H6': function () { return new _Title__WEBPACK_IMPORTED_MODULE_5__["default"](_common_enums_title_types_enum__WEBPACK_IMPORTED_MODULE_0__.TitleTypesEnum.H6); },
        'IMG': function () { return new _Image__WEBPACK_IMPORTED_MODULE_6__["default"](); },
        'default': function () { return undefined; },
    };
    return componentsIndex[index] || componentsIndex['default'];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (componentsIndex);


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
// TODO: ver porque a un boton cuando le meto un DIV dentro, toma el style del DIV.
// TODO: agregar HEADER, BODY, FOOTER, ASIDE, ver cuales mas se necesitan

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7QUFDNUMsQ0FBQztBQUVELElBQU0sV0FBVyxHQUFHO0lBQ2xCLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0lBQ3JDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFO0lBQ3hDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO0lBQ2hDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO0lBQ3RDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO0lBQ2pDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO0lBQ2pDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO0lBQ2xDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO0lBQ2pDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7SUFDMUMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7SUFDaEMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUU7SUFDdEMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7SUFDakMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7SUFDckMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7SUFDckMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUU7SUFDdEMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7SUFDckMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7SUFDakMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTtJQUMxQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtJQUNwQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtJQUNuQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtJQUNoQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtJQUNwQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtJQUNwQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRTtJQUN6QyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtJQUNwQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtJQUNwQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtJQUNyQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtJQUNyQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRTtJQUN2QyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFO0lBQzFDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO0lBQ3RDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO0lBQ3RDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO0lBQ25DLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO0lBQ3RDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFO0lBQ3hDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFO0lBQ3pDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFO0lBQ3pDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFO0lBQ3pDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFO0lBQ3pDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO0lBQ3RDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO0lBQ3BDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO0lBQ3ZDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO0lBQ25DLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO0lBQ25DLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO0lBQ3RDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0lBQ3JDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO0lBQ3ZDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO0lBQ3ZDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO0lBQ25DLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0lBQ3JDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO0lBQ3RDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO0lBQ2hDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0lBQ3JDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO0lBQ2hDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO0lBQ2hDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO0lBQ2pDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO0lBQ3ZDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO0lBQ3BDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO0lBQ25DLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0lBQ3JDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO0lBQ2xDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO0lBQ2pDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO0lBQ2pDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO0lBQ3BDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFO0lBQ3pDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0lBQ3JDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFO0lBQ3hDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0lBQ3JDLEVBQUUsR0FBRyxFQUFFLFNB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QUUsU0FBUyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7SUFDakMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7SUFDckMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7SUFDbEMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7SUFDckMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7SUFDbEMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUU7SUFDekMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7SUFDckMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUU7SUFDekMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUU7SUFDekMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUU7SUFDdEMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7SUFDckMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7SUFDaEMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7SUFDaEMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7SUFDaEMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUU7SUFDdEMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7SUFDbEMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUU7SUFDekMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7SUFDL0IsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7SUFDckMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7SUFDckMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUU7SUFDdkMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7SUFDbEMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUU7SUFDdEMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7SUFDcEMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7SUFDcEMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7SUFDbEMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7SUFDbEMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUU7SUFDbkMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7SUFDckMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7SUFDckMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7SUFDckMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7SUFDaEMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUU7SUFDdkMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7SUFDckMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7SUFDL0IsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElB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LHdFQUF3RTtBQUV4RSxvSEFBb0g7QUFDcEgsMkZBQTJGO0FBQzNGLG9IQUFvSDtBQUNwSCwyRkFBMkY7QUFFM0Ysd0VBQXdFO0FBRXhFLG9HQUFvRztBQUNwRyxnRUFBZ0U7QUFHaEUsb0dBQW9HO0FBQ3BHLHNGQUFzRjtBQUV0RixvR0FBb0c7QUFDcEcsNkRBQTZEO0FBRTdELGtHQUFrRztBQUVsRywwQ0FBMEM7QUFFMUMsb0VBQW9FO0FBRXBFLG1FQUFtRTtBQUVuRSxtQ0FBbUM7QUFDbkMsd0pBQXdKO0FBRXhKLDJHQUEyRztBQUUzRyxtRkFBbUY7QUFFbkYseUVBQXlFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2FwcC1jb250YWluZXIvaW5pdC1hcHAtY29udGFpbmVyLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vY29tcG9uZW50cy9iYWNrZ3JvdW5kLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2NvbXBvbmVudHMvYm9yZGVyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2NvbXBvbmVudHMvYm94LXNoYWRvdy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9jb21wb25lbnRzL2NsYXNzLW1hbmFnZW1lbnQuY29tcG9uZW50LnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vY29tcG9uZW50cy9kaXNwbGF5LWFzLWNoaWxkLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2NvbXBvbmVudHMvZGlzcGxheS1hcy1wYXJlbnQuY29tcG9uZW50LnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vY29tcG9uZW50cy9mb250LmNvbXBvbmVudHMudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9jb21wb25lbnRzL2dlbmVyaWMtY3NzLXByb3BlcnR5LW11dGF0b3IuY29tcG9uZW50LnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vY29tcG9uZW50cy9nZW5lcmljLXByaW1hcnktaW5wdXQuY29tcG9uZW50LnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vY29tcG9uZW50cy9nZW5lcmljLXByaW1hcnktc2VsZWN0b3IuY29tcG9uZW50LnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vY29tcG9uZW50cy9pZC1kZWZpbml0aW9uLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2NvbXBvbmVudHMvaW5wdXQtd2l0aC11bml0cy1zZWxlY3Rvci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9jb21wb25lbnRzL21hcmdpbi1vci1wYWRkaW5nLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2NvbXBvbmVudHMvc2l6ZXMuY29tcG9uZW50LnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vY29tcG9uZW50cy91cmwtZGVmaW5pdGlvbi1jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9jb25zdGFudHMvY29uc3RhbnRzLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vZW51bXMvYWxpZ24tZmxleC1jb250ZW50LmVudW0udHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9lbnVtcy9hbGlnbi1mbGV4LWl0ZW1zLmVudW0udHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9lbnVtcy9hbGlnbi1mbGV4LXNlbGYuZW51bS50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2VudW1zL2FsaWduLWdyaWQtY29udGVudC5lbnVtLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vZW51bXMvYWxpZ24tZ3JpZC1pdGVtcy5lbnVtLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vZW51bXMvYWxpZ24tZ3JpZC1zZWxmLmVudW0udHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9lbnVtcy9ib3JkZXItc3R5bGUuZW51bS50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2VudW1zL2NvbXBvbmVudHMuZW51bS50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2VudW1zL2Rpc3BsYXktdHlwZXMuZW51bS50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2VudW1zL2V2ZW50LXR5cGUuZW51bS50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2VudW1zL2ZsZXgtZGlyZWN0aW9uLmVudW0udHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9lbnVtcy9mbGV4LXdyYXAuZW51bS50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2VudW1zL2ZvbnQtc3R5bGVzLmVudW0udHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9lbnVtcy9mb250LXZhcmlhbnQuZW51bS50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2VudW1zL2ZvbnQtd2VpZ2h0LmVudW0udHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9lbnVtcy9mb250cy5lbnVtLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vZW51bXMvZ2VuZXJhbC1wc2V1ZG9jbGFzcy5lbnVtLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vZW51bXMvZ3JpZC1hdXRvLWZsb3cuZW51bS50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2VudW1zL2lucHV0LXR5cGUuZW51bS50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2VudW1zL2p1c3RpZnktZmxleC1jb250ZW50LmVudW0udHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9lbnVtcy9qdXN0aWZ5LWdyaWQtY29udGVudC5lbnVtLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vZW51bXMvanVzdGlmeS1ncmlkLWl0ZW1zLmVudW0udHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9lbnVtcy9qdXN0aWZ5LWdyaWQtc2VsZi5lbnVtLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vZW51bXMvc3R5bGUtbmFtZS5lbnVtLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vZW51bXMvdGl0bGUudHlwZXMuZW51bS50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2VudW1zL3VuaXRzLmVudW0udHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9mdW5jdGlvbnMvZGVmaW5lLWVsZW1lbnQtaWQudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9mdW5jdGlvbnMvZGVmaW5lLWVsZW1lbnQtbmFtZS50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2Z1bmN0aW9ucy9kcmFnLXN0YXJ0LXdpdGgtdGFyZ2V0LW5vZGVfbmFtZS50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2Z1bmN0aW9ucy9maXJzdC1sZXR0ZXJzLWNhcGl0YWxpemVkLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vZnVuY3Rpb25zL2dldC1jc3MtdW5pdC50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2Z1bmN0aW9ucy9yZ2ItdG8taGV4LnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vbW9kZWxzL0J1dHRvbkJ1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9tb2RlbHMvQ29udGFpbmVyQnVpbGRlci50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL21vZGVscy9Gb3JtQnVpbGRlci50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL21vZGVscy9JbWFnZUJ1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9tb2RlbHMvSW5wdXRCdWlsZGVyLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vbW9kZWxzL0xhYmVsQnVpbGRlci50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL21vZGVscy9SYXdCdWlsZGVyLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vbW9kZWxzL1NlbGVjdG9yRnJvbUFycmF5QnVpbGRlci50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL21vZGVscy9TZWxlY3RvckZyb21FbnVtQnVpbGRlci50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL21vZGVscy9TdHlsZXNDb21wb25lbnRzQnVpbGRlci50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL21vZGVscy9UZXh0YXJlYUJ1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9tb2RlbHMvVGl0bGVCdWlsZGVyLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vcHVibGlzaGVycy9DbGFzc0NoYW5nZVB1Ymxpc2hlci50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL3B1Ymxpc2hlcnMvQ29tcG9uZW50Q2hhbmdlUHVibGlzaGVyLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21wb25lbnRzLWNvbnRhaW5lci9pbml0LWRyYWdnYWJsZS1jb21wb25lbnRzLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jc3Mtc3R5bGVzaGVldC9jc3Mtc3R5bGVzaGVldC50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvaHRtbC1jb21wb25lbnRzL0J1dHRvbi50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvaHRtbC1jb21wb25lbnRzL0NvbnRhaW5lci50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvaHRtbC1jb21wb25lbnRzL0Zvcm0udHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2h0bWwtY29tcG9uZW50cy9JbWFnZS50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvaHRtbC1jb21wb25lbnRzL0lucHV0LnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9odG1sLWNvbXBvbmVudHMvTGFiZWwudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2h0bWwtY29tcG9uZW50cy9SYXdIVE1MQ29tcG9uZW50LnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9odG1sLWNvbXBvbmVudHMvVGl0bGUudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2h0bWwtY29tcG9uZW50cy9jb21wb25lbnRzSW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERpc3BsYXlDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudHMvZGlzcGxheS1hcy1wYXJlbnQuY29tcG9uZW50JztcbmltcG9ydCBNYXJnaW5PclBhZGRpbmdDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudHMvbWFyZ2luLW9yLXBhZGRpbmcuY29tcG9uZW50JztcbmltcG9ydCBTdHlsZXNDb21wb25lbnRzQnVpbGRlciBmcm9tICcuLi9jb21tb24vbW9kZWxzL1N0eWxlc0NvbXBvbmVudHNCdWlsZGVyJztcbmltcG9ydCBSYXdIVE1MQ29ucG9uZW50IGZyb20gJy4uL2h0bWwtY29tcG9uZW50cy9SYXdIVE1MQ29tcG9uZW50JztcbmltcG9ydCBCYWNrZ3JvdW5kQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnRzL2JhY2tncm91bmQuY29tcG9uZW50JztcbmltcG9ydCBjb21wb25lbnRzSW5kZXggZnJvbSAnLi4vaHRtbC1jb21wb25lbnRzL2NvbXBvbmVudHNJbmRleCc7XG5pbXBvcnQgY29uc3RhbnRzIGZyb20gJy4uL2NvbW1vbi9jb25zdGFudHMvY29uc3RhbnRzJztcblxuaW1wb3J0IHsgU3R5bGVOYW1lRW51bSB9IGZyb20gJy4uL2NvbW1vbi9lbnVtcy9zdHlsZS1uYW1lLmVudW0nO1xuaW1wb3J0IENzc1N0eWxlU2hlZXQgZnJvbSAnLi4vY3NzLXN0eWxlc2hlZXQvY3NzLXN0eWxlc2hlZXQnO1xuXG5pbXBvcnQgQ29tcG9uZW50Q2hhbmdlUHVibGlzaGVyIGZyb20gJy4uL2NvbW1vbi9wdWJsaXNoZXJzL0NvbXBvbmVudENoYW5nZVB1Ymxpc2hlcic7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5pdEFwcENvbnRhaW5lciB7XG4gICAgcHJpdmF0ZSBhcHBDb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgYXBwQ29udGFpbmVyQ2xhc3NOYW1lID0gJ2JvZHknO1xuICAgIHByaXZhdGUgYXBwQ29udGFpbmVySGVpZ2h0SW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBhcHBDb250YWluZXJXaWR0aElucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHByb3RlY3RlZCBzdHlsZXNDb21wb25lbnRzOiBIVE1MRGl2RWxlbWVudDtcblxuICAgIHByb3RlY3RlZCBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgZmF0aGVyQmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XG5cbiAgICBwcml2YXRlIGNvbXBvbmVudFNlbGVjdG9yOiBIVE1MU2VsZWN0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3QtaXRlbScpO1xuICAgIHByaXZhdGUgdmVyc2lvbkxhYmVsOiBIVE1MTGFiZWxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ZlcnNpb24tbGFiZWwnKTtcblxuICAgIHByaXZhdGUgY29tcG9uZW50Q2hhbmdlUHVibGlzaGVyOiBDb21wb25lbnRDaGFuZ2VQdWJsaXNoZXI7XG5cbiAgICBwcml2YXRlIHByaW50SHRtbEJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpbnQtaHRtbC1maWxlJyk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hcHBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIHRoaXMuYXBwQ29udGFpbmVySGVpZ2h0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXBkYXRlLWhlaWdodCcpO1xuICAgICAgICB0aGlzLmNoYW5nZUFwcENvbnRhaW5lckhlaWdodCA9IHRoaXMuY2hhbmdlQXBwQ29udGFpbmVySGVpZ2h0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYXBwQ29udGFpbmVySGVpZ2h0SW5wdXQudmFsdWUgPSBgJHtwYXJzZUludCh0aGlzLmdldEN1cnJlbnRIZWlnaHQoKSl9YDtcbiAgICAgICAgdGhpcy5hcHBDb250YWluZXJIZWlnaHRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMuY2hhbmdlQXBwQ29udGFpbmVySGVpZ2h0KTtcblxuICAgICAgICB0aGlzLmFwcENvbnRhaW5lcldpZHRoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXBkYXRlLXdpZHRoJyk7XG4gICAgICAgIHRoaXMuY2hhbmdlQXBwQ29udGFpbmVyV2lkdGggPSB0aGlzLmNoYW5nZUFwcENvbnRhaW5lcldpZHRoLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYXBwQ29udGFpbmVyV2lkdGhJbnB1dC52YWx1ZSA9IGAke3BhcnNlSW50KHRoaXMuZ2V0Q3VycmVudFdpZHRoKCkpfWA7XG4gICAgICAgIHRoaXMuYXBwQ29udGFpbmVyV2lkdGhJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMuY2hhbmdlQXBwQ29udGFpbmVyV2lkdGgpO1xuXG4gICAgICAgIHRoaXMuZHJhZ0VudGVyID0gdGhpcy5kcmFnRW50ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcmFnT3ZlciA9IHRoaXMuZHJhZ092ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcmFnTGVhdmUgPSB0aGlzLmRyYWdMZWF2ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRyb3AgPSB0aGlzLmRyb3AuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLm9wZW5FbGVtZW50Q29uZmlncyA9IHRoaXMub3BlbkVsZW1lbnRDb25maWdzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY2hhbmdlU2l6ZSA9IHRoaXMuY2hhbmdlU2l6ZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuYXBwQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIHRoaXMuZHJhZ0VudGVyKTtcbiAgICAgICAgdGhpcy5hcHBDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLmRyYWdPdmVyKTtcbiAgICAgICAgdGhpcy5hcHBDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgdGhpcy5kcmFnTGVhdmUpO1xuICAgICAgICB0aGlzLmFwcENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5kcm9wKTtcblxuICAgICAgICB0aGlzLmFwcENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3BlbkVsZW1lbnRDb25maWdzKTtcblxuICAgICAgICB0aGlzLm9uUmVzaXplKHRoaXMuYXBwQ29udGFpbmVyLCB0aGlzLmNoYW5nZVNpemUpO1xuXG4gICAgICAgIHRoaXMuc2VuZENvbXBvbmVudE5hbWUgPSB0aGlzLnNlbmRDb21wb25lbnROYW1lLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50Q2hhbmdlUHVibGlzaGVyID0gbmV3IENvbXBvbmVudENoYW5nZVB1Ymxpc2hlcigpO1xuXG4gICAgICAgIHRoaXMuY29tcG9uZW50U2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5zZW5kQ29tcG9uZW50TmFtZSk7XG5cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby12YXItcmVxdWlyZXNcbiAgICAgICAgY29uc3QgcGFja2FnZVZlcnNpb24gPSByZXF1aXJlKCcuLi8uLi8uLi9wYWNrYWdlLmpzb24nKS52ZXJzaW9uO1xuICAgICAgICB0aGlzLnZlcnNpb25MYWJlbC5pbm5lclRleHQgPSBgVmVyc2lvbjogJHtwYWNrYWdlVmVyc2lvbn1gO1xuXG4gICAgICAgIHRoaXMucHJpbnRIdG1sQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5wcmludEh0bWxGaWxlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRyYWdFbnRlcihldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gQ3NzU3R5bGVTaGVldC5nZXRSdWxlU3R5bGVzKHRoaXMuYXBwQ29udGFpbmVyQ2xhc3NOYW1lKVsnYmFja2dyb3VuZC1jb2xvciddO1xuICAgICAgICB0aGlzLmFwcENvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb25zdGFudHMuSU5WRVJURURfQkFDS0dST1VORF9DT0xPUjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRyYWdPdmVyKGV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRyYWdMZWF2ZSgpIHtcbiAgICAgICAgdGhpcy5hcHBDb250YWluZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyc7XG4gICAgICAgIHRoaXMuYXBwQ29udGFpbmVyLmF0dHJpYnV0ZXMucmVtb3ZlTmFtZWRJdGVtKCdzdHlsZScpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZHJvcChldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgICAgIHRoaXMuYXBwQ29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcnO1xuXG4gICAgICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKHRhcmdldEVsZW1lbnQubm9kZU5hbWUgIT09ICdESVYnXG4gICAgICAgICAgICAmJiB0YXJnZXRFbGVtZW50Lm5vZGVOYW1lICE9PSAnQlVUVE9OJ1xuICAgICAgICAgICAgJiYgdGFyZ2V0RWxlbWVudC5ub2RlTmFtZSAhPT0gJ0ZPUk0nXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGFyZ2V0RWxlbWVudC5jaGlsZHJlbi5sZW5ndGggPT09IDAgJiYgdGFyZ2V0RWxlbWVudC5pbm5lclRleHQgIT09ICcnKXtcbiAgICAgICAgICAgIGFsZXJ0KCdJbm5lclRleHQgbXVzdCBiZSBlbXB0eScpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlbGVtZW50VHlwZSA9IGV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKCd0ZXh0L3BsYWluJyk7XG5cbiAgICAgICAgY29uc3QgbmV3RG9tRWxlbWVudDogUmF3SFRNTENvbnBvbmVudCB8IHVuZGVmaW5lZCA9IGNvbXBvbmVudHNJbmRleChlbGVtZW50VHlwZSkoKTtcblxuICAgICAgICBjb25zdCBlbGVtZW50RXhpc3RzID0gbmV3RG9tRWxlbWVudCA/IGZhbHNlIDogdHJ1ZTtcblxuICAgICAgICBpZiAoZWxlbWVudEV4aXN0cykge1xuICAgICAgICAgICAgY29uc3QgZHJhZ2dhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudFR5cGUpO1xuICAgICAgICAgICAgdGFyZ2V0RWxlbWVudC5hcHBlbmRDaGlsZChkcmFnZ2FibGUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRDaGFuZ2VQdWJsaXNoZXIuYXR0YWNoKG5ld0RvbUVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGFyZ2V0RWxlbWVudC5hcHBlbmRDaGlsZChuZXdEb21FbGVtZW50LmRvbUVsZW1lbnQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb3BlbkVsZW1lbnRDb25maWdzKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIHRoaXMuc3R5bGVzQ29tcG9uZW50cyA9IG5ldyBTdHlsZXNDb21wb25lbnRzQnVpbGRlcigpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IE1hcmdpbk9yUGFkZGluZ0NvbXBvbmVudChcbiAgICAgICAgICAgICAgICB0aGlzLmFwcENvbnRhaW5lcixcbiAgICAgICAgICAgICAgICBTdHlsZU5hbWVFbnVtLm1hcmdpbikuY29tcG9uZW50KVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBNYXJnaW5PclBhZGRpbmdDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBDb250YWluZXIsXG4gICAgICAgICAgICAgICAgU3R5bGVOYW1lRW51bS5wYWRkaW5nKS5jb21wb25lbnQpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IEJhY2tncm91bmRDb21wb25lbnQodGhpcy5hcHBDb250YWluZXIpLmNvbXBvbmVudClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgRGlzcGxheUNvbXBvbmVudCh0aGlzLmFwcENvbnRhaW5lcikuY29tcG9uZW50KVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblJlc2l6ZShkb21fZWxlbSwgY2FsbGJhY2spIHtcbiAgICAgICAgY29uc3QgcmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKCkgPT4gY2FsbGJhY2soKSk7XG4gICAgICAgIHJlc2l6ZU9ic2VydmVyLm9ic2VydmUoZG9tX2VsZW0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2hhbmdlU2l6ZSgpIHtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5hcHBDb250YWluZXIuc3R5bGVbJ2hlaWdodCddO1xuICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMuYXBwQ29udGFpbmVyLnN0eWxlWyd3aWR0aCddO1xuXG4gICAgICAgIGlmIChoZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMuYXBwQ29udGFpbmVySGVpZ2h0SW5wdXQudmFsdWUgPSBgJHtwYXJzZUludChoZWlnaHQpfWA7XG4gICAgICAgICAgICBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXModGhpcy5hcHBDb250YWluZXJDbGFzc05hbWUpWydoZWlnaHQnXSA9IGhlaWdodDtcbiAgICAgICAgICAgIHRoaXMuYXBwQ29udGFpbmVyLnN0eWxlWydoZWlnaHQnXSA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGlmICh3aWR0aCkge1xuICAgICAgICAgICAgdGhpcy5hcHBDb250YWluZXJXaWR0aElucHV0LnZhbHVlID0gYCR7cGFyc2VJbnQod2lkdGgpfWA7XG4gICAgICAgICAgICBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXModGhpcy5hcHBDb250YWluZXJDbGFzc05hbWUpWyd3aWR0aCddID0gd2lkdGg7XG4gICAgICAgICAgICB0aGlzLmFwcENvbnRhaW5lci5zdHlsZVsnd2lkdGgnXSA9ICcnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjaGFuZ2VBcHBDb250YWluZXJIZWlnaHQoKSB7XG4gICAgICAgIENzc1N0eWxlU2hlZXQuZ2V0UnVsZVN0eWxlcyh0aGlzLmFwcENvbnRhaW5lckNsYXNzTmFtZSlbJ2hlaWdodCddID0gYCR7dGhpcy5hcHBDb250YWluZXJIZWlnaHRJbnB1dC52YWx1ZX1weGBcbiAgICB9XG5cbiAgICBwcml2YXRlIGNoYW5nZUFwcENvbnRhaW5lcldpZHRoKCkge1xuICAgICAgICBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXModGhpcy5hcHBDb250YWluZXJDbGFzc05hbWUpWyd3aWR0aCddID0gYCR7dGhpcy5hcHBDb250YWluZXJXaWR0aElucHV0LnZhbHVlfXB4YFxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0Q3VycmVudEhlaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIENzc1N0eWxlU2hlZXQuZ2V0UnVsZVN0eWxlcyh0aGlzLmFwcENvbnRhaW5lckNsYXNzTmFtZSlbJ2hlaWdodCddXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRDdXJyZW50V2lkdGgoKSB7XG4gICAgICAgIHJldHVybiBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXModGhpcy5hcHBDb250YWluZXJDbGFzc05hbWUpWyd3aWR0aCddXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwcmludEh0bWxGaWxlKCkge1xuICAgICAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcC1jb250YWluZXInKS5pbm5lckhUTUw7XG4gICAgICAgIGNvbnN0IHJlbW92ZURyYWdnYWJsZVJlZ0V4ID0gbmV3IFJlZ0V4cCgnIGRyYWdnYWJsZT1cInRydWVcIicsICdnJyk7XG4gICAgICAgIG1haW5Db250YWluZXIucmVwbGFjZShyZW1vdmVEcmFnZ2FibGVSZWdFeCwgJycpO1xuXG4gICAgICAgIC8vIFRPRE86IHZlciBzaSBkZWJlcmlhIGlyIGRlc3BsZWdhbmRvIGVsIGFyYm9sIGRlIGVsZW1lbnRvcyBIVE1MIGUgaXIgYXJtYW5kbyBlbCBodG1sIGFxdWkuXG4gICAgICAgIC8vIFRPRE86IHZlciBzaSBlcyBuZWNlc2FyaW8gYm9ycmFyIGVsIHN0eWxlIHkgbG8gcXVlIGhheWEgZGVudHJvLi4uLlxuICAgICAgICAvLyBUT0RPOiBlbGltaW5hciBlbCBkcmFnZ2FibGVcblxuICAgICAgICBjb25zdCBvdXRwdXRIdG1sID0gYFxuICAgICAgICA8IURPQ1RZUEUgaHRtbD5cbiAgICAgICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICAgIDxoZWFkPlxuICAgICAgICAgICAgPG1ldGEgY2hhcnNldD1cIlVURi04XCI+XG4gICAgICAgICAgICA8bWV0YSBodHRwLWVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIj5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCI+XG4gICAgICAgICAgICA8dGl0bGU+RG9jdW1lbnQ8L3RpdGxlPlxuICAgICAgICA8L2hlYWQ+XG4gICAgICAgIDxib2R5IGlkPVwiYXBwLWNvbnRhaW5lclwiIGNsYXNzPVwiYm9keVwiPlxuICAgICAgICAgICAgJHttYWluQ29udGFpbmVyfVxuICAgICAgICA8L2JvZHk+XG4gICAgICAgIDwvaHRtbD5gXG5cbiAgICAgICAgY29uc29sZS5sb2cob3V0cHV0SHRtbCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZW5kQ29tcG9uZW50TmFtZSgpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnRDaGFuZ2VQdWJsaXNoZXIubm90aWZ5Q29tcG9uZW50TmFtZSh0aGlzLmNvbXBvbmVudFNlbGVjdG9yLnZhbHVlKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ2xhc3NDaGFuZ2VPYnNlcnZlckludGVyZmFjZSBmcm9tICcuLi9pbnRlcmZhY2VzL2NsYXNzLWNoYW5nZS1vYnNlcnZlci5pbnRlcmZhY2UnO1xuXG5pbXBvcnQgQ29udGFpbmVyQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvQ29udGFpbmVyQnVpbGRlcic7XG5pbXBvcnQgSW5wdXRCdWlsZGVyIGZyb20gJy4uL21vZGVscy9JbnB1dEJ1aWxkZXInO1xuaW1wb3J0IExhYmVsQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvTGFiZWxCdWlsZGVyJztcbmltcG9ydCBCdXR0b25CdWlsZGVyIGZyb20gJy4uL21vZGVscy9CdXR0b25CdWlsZGVyJztcblxuaW1wb3J0IENzc1N0eWxlU2hlZXQgZnJvbSAnLi4vLi4vY3NzLXN0eWxlc2hlZXQvY3NzLXN0eWxlc2hlZXQnO1xuaW1wb3J0IGNvbG9yVG9IZXggZnJvbSAnLi4vZnVuY3Rpb25zL3JnYi10by1oZXgnO1xuXG5pbXBvcnQgeyBJbnB1dFR5cGVFbnVtIH0gZnJvbSAnLi4vZW51bXMvaW5wdXQtdHlwZS5lbnVtJztcbmltcG9ydCB7IFN0eWxlTmFtZUVudW0gfSBmcm9tICcuLi9lbnVtcy9zdHlsZS1uYW1lLmVudW0nO1xuaW1wb3J0IHsgRGlzcGxheVR5cGVzRW51bSB9IGZyb20gJy4uL2VudW1zL2Rpc3BsYXktdHlwZXMuZW51bSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhY2tncm91bmRDb21wb25lbnQgaW1wbGVtZW50cyBDbGFzc0NoYW5nZU9ic2VydmVySW50ZXJmYWNle1xuICAgIHByaXZhdGUgZG9tRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBjb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgZG9tRWxlbWVudFN0eWxlU2hlZXQ6IENTU1N0eWxlRGVjbGFyYXRpb247XG5cbiAgICBwcml2YXRlIGNvbG9ySW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBvcGFjaXR5U2xpZGVyOiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHByaXZhdGUgb3BhY2l0eVZhbHVlOiBIVE1MTGFiZWxFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IoZG9tRWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCA9IENzc1N0eWxlU2hlZXQuZ2V0UnVsZVN0eWxlcyh0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0WzBdKTtcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnRzKCk7XG4gICAgfVxuXG4gICAgZ2V0IGNvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkQ29tcG9uZW50cygpIHtcbiAgICAgICAgdGhpcy51cGRhdGVDb2xvciA9IHRoaXMudXBkYXRlQ29sb3IuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGVPcGFjaXR5ID0gdGhpcy51cGRhdGVPcGFjaXR5LmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5jb2xvcklucHV0ID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLmNvbG9yKVxuICAgICAgICAgICAgLnNldFZhbHVlKHRoaXMuZ2V0Q3VycmVudENvbG9yKCkpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLnVwZGF0ZUNvbG9yKVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICBjb25zdCByZW1vdmVDb2xvciA9IG5ldyBCdXR0b25CdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ1JlbW92ZSBDb2xvcicpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnVwZGF0ZUNvbG9yKVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICB0aGlzLm9wYWNpdHlTbGlkZXIgPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0ucmFuZ2UpXG4gICAgICAgICAgICAuc2V0VmFsdWUodGhpcy5nZXRDdXJyZW50T3BhY2l0eSgpKVxuICAgICAgICAgICAgLnNldE1pbigwKVxuICAgICAgICAgICAgLnNldE1heCgxMDApXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLnVwZGF0ZU9wYWNpdHkpXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIHRoaXMub3BhY2l0eVZhbHVlID0gbmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0SW5uZXJUZXh0KGAke3RoaXMuZ2V0Q3VycmVudE9wYWNpdHkoKX0lYClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgY29uc3QgYmFja2dyb3VuZENvbXBvbmVudHMgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnQ29sb3IgLyBPcGFjaXR5JylcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuY29sb3JJbnB1dClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5vcGFjaXR5U2xpZGVyKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLm9wYWNpdHlWYWx1ZSlcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQocmVtb3ZlQ29sb3IpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5ib3JkZXIsICcxcHggc29saWQgIzRDQUY1MCcpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5wYWRkaW5nLCAnM3B4JylcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnQmFja2dyb3VuZCcpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kQ29tcG9uZW50cylcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRDdXJyZW50Q29sb3IoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGNvbG9yVG9IZXgodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYmFja2dyb3VuZC1jb2xvciddKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEN1cnJlbnRPcGFjaXR5KCk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IG9wYWNpdHkgPSBwYXJzZUZsb2F0KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ29wYWNpdHknXSkgKiAxMDA7XG4gICAgICAgIHJldHVybiBpc05hTihvcGFjaXR5KSA/ICcxMDAnIDogTWF0aC5yb3VuZChvcGFjaXR5KS50b1N0cmluZygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlQ29sb3IoZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgIGlmICggZXZlbnQudHlwZSA9PT0gJ2NsaWNrJyl7XG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydiYWNrZ3JvdW5kLWNvbG9yJ10gPSAnJztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2JhY2tncm91bmQtY29sb3InXSA9IHRoaXMuY29sb3JJbnB1dC52YWx1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZU9wYWNpdHkoKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcGFyc2VJbnQodGhpcy5vcGFjaXR5U2xpZGVyLnZhbHVlKVxuICAgICAgICBjb25zdCBwZXJjZW50YWdlID0gdmFsdWUgLyAxMDA7XG4gICAgICAgIGlmKHZhbHVlID49IDEwMCkge1xuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnb3BhY2l0eSddID0gJydcbiAgICAgICAgICAgIHRoaXMub3BhY2l0eVZhbHVlLmlubmVyVGV4dCA9ICcxMDAlJztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydvcGFjaXR5J10gPSBgJHtwZXJjZW50YWdlfWA7XG4gICAgICAgIHRoaXMub3BhY2l0eVZhbHVlLmlubmVyVGV4dCA9IGAke3ZhbHVlfSVgO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGFzc05hbWVVcGRhdGVkKG5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0ID0gQ3NzU3R5bGVTaGVldC5nZXRSdWxlU3R5bGVzKG5hbWUpO1xuICAgICAgICB0aGlzLmNvbG9ySW5wdXQudmFsdWUgPSB0aGlzLmdldEN1cnJlbnRDb2xvcigpO1xuICAgICAgICB0aGlzLm9wYWNpdHlTbGlkZXIudmFsdWUgPSB0aGlzLmdldEN1cnJlbnRPcGFjaXR5KCk7XG4gICAgICAgIHRoaXMub3BhY2l0eVZhbHVlLmlubmVyVGV4dCA9IGAke3RoaXMub3BhY2l0eVNsaWRlci52YWx1ZX0lYDtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ2xhc3NDaGFuZ2VPYnNlcnZlckludGVyZmFjZSBmcm9tICcuLi9pbnRlcmZhY2VzL2NsYXNzLWNoYW5nZS1vYnNlcnZlci5pbnRlcmZhY2UnO1xuXG5pbXBvcnQgQ29udGFpbmVyQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvQ29udGFpbmVyQnVpbGRlcic7XG5pbXBvcnQgSW5wdXRCdWlsZGVyIGZyb20gJy4uL21vZGVscy9JbnB1dEJ1aWxkZXInO1xuaW1wb3J0IExhYmVsQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvTGFiZWxCdWlsZGVyJztcbmltcG9ydCBTZWxlY3RvckZyb21FbnVtQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXInO1xuXG5pbXBvcnQgQ3NzU3R5bGVTaGVldCBmcm9tICcuLi8uLi9jc3Mtc3R5bGVzaGVldC9jc3Mtc3R5bGVzaGVldCc7XG5pbXBvcnQgY29sb3JUb0hleCBmcm9tICcuLi9mdW5jdGlvbnMvcmdiLXRvLWhleCc7XG5pbXBvcnQgZ2V0VW5pdCBmcm9tICcuLi9mdW5jdGlvbnMvZ2V0LWNzcy11bml0JztcblxuaW1wb3J0IHsgSW5wdXRUeXBlRW51bSB9IGZyb20gJy4uL2VudW1zL2lucHV0LXR5cGUuZW51bSc7XG5pbXBvcnQgeyBCb3JkZXJTdHlsZUVudW0gfSBmcm9tICcuLi9lbnVtcy9ib3JkZXItc3R5bGUuZW51bSc7XG5pbXBvcnQgeyBVbml0c0VudW0gfSBmcm9tICcuLi9lbnVtcy91bml0cy5lbnVtJztcbmltcG9ydCB7IFN0eWxlTmFtZUVudW0gfSBmcm9tICcuLi9lbnVtcy9zdHlsZS1uYW1lLmVudW0nO1xuaW1wb3J0IHsgRGlzcGxheVR5cGVzRW51bSB9IGZyb20gJy4uL2VudW1zL2Rpc3BsYXktdHlwZXMuZW51bSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvcmRlckNvbXBvbmVudCBpbXBsZW1lbnRzIENsYXNzQ2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2Uge1xuICAgIHByaXZhdGUgZG9tRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBjb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgZG9tRWxlbWVudFN0eWxlU2hlZXQ6IENTU1N0eWxlRGVjbGFyYXRpb247XG5cbiAgICBwcml2YXRlIHRvcEJvcmRlckNvbG9ySW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSByaWdodEJvcmRlckNvbG9ySW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBib3R0b21Cb3JkZXJDb2xvcklucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHByaXZhdGUgbGVmdEJvcmRlckNvbG9ySW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIHRvcEJvcmRlclN0eWxlU2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIHByaXZhdGUgcmlnaHRCb3JkZXJTdHlsZVNlbGVjdG9yOiBIVE1MU2VsZWN0RWxlbWVudDtcbiAgICBwcml2YXRlIGJvdHRvbUJvcmRlclN0eWxlU2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIHByaXZhdGUgbGVmdEJvcmRlclN0eWxlU2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSB0b3BCb3JkZXJXaWR0aElucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHByaXZhdGUgcmlnaHRCb3JkZXJXaWR0aElucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHByaXZhdGUgYm90dG9tQm9yZGVyV2lkdGhJbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgICBwcml2YXRlIGxlZnRCb3JkZXJXaWR0aElucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSB0b3BCb3JkZXJXaWR0aFVuaXRTZWxlY3RvcjogSFRNTFNlbGVjdEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSByaWdodEJvcmRlcldpZHRoVW5pdFNlbGVjdG9yOiBIVE1MU2VsZWN0RWxlbWVudDtcbiAgICBwcml2YXRlIGJvdHRvbUJvcmRlcldpZHRoVW5pdFNlbGVjdG9yOiBIVE1MU2VsZWN0RWxlbWVudDtcbiAgICBwcml2YXRlIGxlZnRCb3JkZXJXaWR0aFVuaXRTZWxlY3RvcjogSFRNTFNlbGVjdEVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIHRvcEJvcmRlclJhZGl1c0lucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHByaXZhdGUgcmlnaHRCb3JkZXJSYWRpdXNJbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgICBwcml2YXRlIGJvdHRvbUJvcmRlclJhZGl1c0lucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHByaXZhdGUgbGVmdEJvcmRlclJhZGl1c0lucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSB0b3BCb3JkZXJSYWRpdXNVbml0U2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIHByaXZhdGUgcmlnaHRCb3JkZXJSYWRpdXNVbml0U2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIHByaXZhdGUgYm90dG9tQm9yZGVyUmFkaXVzVW5pdFNlbGVjdG9yOiBIVE1MU2VsZWN0RWxlbWVudDtcbiAgICBwcml2YXRlIGxlZnRCb3JkZXJSYWRpdXNVbml0U2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSBzZWxlY3RBbGxDaGVja0JveDogSFRNTElucHV0RWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKGRvbUVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQgPSBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXModGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdFswXSk7XG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50cygpO1xuICAgIH1cblxuICAgIGdldCBjb21wb25lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZENvbXBvbmVudHMoKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlQ29tcG9uZW50c1N0YXR1cyA9IHRoaXMuY2hhbmdlQ29tcG9uZW50c1N0YXR1cy5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlQm9yZGVyU3R5bGVQcm9wZXJ0eSA9IHRoaXMudXBkYXRlQm9yZGVyU3R5bGVQcm9wZXJ0eS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZUJvcmRlckNvbG9yID0gdGhpcy51cGRhdGVCb3JkZXJDb2xvci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZUJvcmRlcldpZHRoID0gdGhpcy51cGRhdGVCb3JkZXJXaWR0aC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZUJvcmRlclJhZGl1cyA9IHRoaXMudXBkYXRlQm9yZGVyUmFkaXVzLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5zZWxlY3RBbGxDaGVja0JveCA9IG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS5jaGVja2JveClcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmNoYW5nZUNvbXBvbmVudHNTdGF0dXMpXG4gICAgICAgICAgICAuY2hlY2tlZCh0aGlzLnVuaWZpZWRCb3JkZXJQcm9wZXJ0aWVzKCkpXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIGNvbnN0IHNlbGVjdEFsbENvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdTZWxlY3QgQWxsJylcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuc2VsZWN0QWxsQ2hlY2tCb3gpXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG5cbiAgICAgICAgdGhpcy5idWlsZEFsbENvbXBvbmVudHMoKTtcbiAgICAgICAgdGhpcy5zZXRCb3JkZXJWYWx1ZXNBY2NvcmRpbmdUb0NsYXNzKCk7XG5cbiAgICAgICAgY29uc3QgdG9wQ29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ1RvcCBCb3JkZXIgQ29sb3IgLyBTdHlsZScpXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLnRvcEJvcmRlckNvbG9ySW5wdXQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMudG9wQm9yZGVyU3R5bGVTZWxlY3RvcilcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ1RvcCBCb3JkZXIgV2lkdGgnKVxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy50b3BCb3JkZXJXaWR0aElucHV0KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLnRvcEJvcmRlcldpZHRoVW5pdFNlbGVjdG9yKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnVG9wIEJvcmRlciBSYWRpdXMnKVxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy50b3BCb3JkZXJSYWRpdXNJbnB1dClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy50b3BCb3JkZXJSYWRpdXNVbml0U2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgY29uc3QgcmlnaHRDb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnUmlnaHQgQm9yZGVyIENvbG9yIC8gU3R5bGUnKVxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5yaWdodEJvcmRlckNvbG9ySW5wdXQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMucmlnaHRCb3JkZXJTdHlsZVNlbGVjdG9yKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnUmlnaHQgQm9yZGVyIFdpZHRoJylcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMucmlnaHRCb3JkZXJXaWR0aElucHV0KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLnJpZ2h0Qm9yZGVyV2lkdGhVbml0U2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdSaWdodCBCb3JkZXIgUmFkaXVzJylcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMucmlnaHRCb3JkZXJSYWRpdXNJbnB1dClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5yaWdodEJvcmRlclJhZGl1c1VuaXRTZWxlY3RvcilcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICBjb25zdCBib3R0b21Db250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnQm90dG9tIEJvcmRlciBDb2xvciAvIFN0eWxlJylcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuYm90dG9tQm9yZGVyQ29sb3JJbnB1dClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5ib3R0b21Cb3JkZXJTdHlsZVNlbGVjdG9yKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnQm90dG9tIEJvcmRlciBXaWR0aCcpXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmJvdHRvbUJvcmRlcldpZHRoSW5wdXQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuYm90dG9tQm9yZGVyV2lkdGhVbml0U2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdCb3R0b20gQm9yZGVyIFJhZGl1cycpXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmJvdHRvbUJvcmRlclJhZGl1c0lucHV0KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmJvdHRvbUJvcmRlclJhZGl1c1VuaXRTZWxlY3RvcilcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICBjb25zdCBsZWZ0Q29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0xlZnQgQm9yZGVyIENvbG9yIC8gU3R5bGUnKVxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5sZWZ0Qm9yZGVyQ29sb3JJbnB1dClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5sZWZ0Qm9yZGVyU3R5bGVTZWxlY3RvcilcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0xlZnQgQm9yZGVyIFdpZHRoJylcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMubGVmdEJvcmRlcldpZHRoSW5wdXQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMubGVmdEJvcmRlcldpZHRoVW5pdFNlbGVjdG9yKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnTGVmdCBCb3JkZXIgUmFkaXVzJylcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMubGVmdEJvcmRlclJhZGl1c0lucHV0KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmxlZnRCb3JkZXJSYWRpdXNVbml0U2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgY29uc3QgaW5wdXRWYWx1ZXNDb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQodG9wQ29udGFpbmVyKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKHJpZ2h0Q29udGFpbmVyKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKGJvdHRvbUNvbnRhaW5lcilcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChsZWZ0Q29udGFpbmVyKVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmJvcmRlciwgJzFweCBzb2xpZCAjNENBRjUwJylcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLnBhZGRpbmcsICczcHgnKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdCb3JkZXIgVHlwZSBTZWxlY3RvcicpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChzZWxlY3RBbGxDb250YWluZXIpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQoaW5wdXRWYWx1ZXNDb250YWluZXIpXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgIH1cblxuICAgIHByaXZhdGUgYnVpbGRBbGxDb21wb25lbnRzKCkge1xuICAgICAgICB0aGlzLmJ1aWxkQ29sb3JJbnB1dHMoKTtcbiAgICAgICAgdGhpcy5idWlsZFN0eWxlU2VsZWN0b3JzKCk7XG4gICAgICAgIHRoaXMuYnVpbGRCb3JkZXJXaWR0aElucHV0cygpO1xuICAgICAgICB0aGlzLmJ1aWxkQm9yZGVyV2lkdGhVbml0c1NlbGVjdG9ycygpO1xuICAgICAgICB0aGlzLmJ1aWxkQm9yZGVyUmFkaXVzSW5wdXRzKClcbiAgICAgICAgdGhpcy5idWlsZEJvcmRlclJhZGl1c1VuaXRzU2VsZWN0b3JzKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBidWlsZENvbG9ySW5wdXRzKCkge1xuICAgICAgICB0aGlzLnRvcEJvcmRlckNvbG9ySW5wdXQgPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0uY29sb3IpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLnVwZGF0ZUJvcmRlckNvbG9yKVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG4gICAgICAgIHRoaXMucmlnaHRCb3JkZXJDb2xvcklucHV0ID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLmNvbG9yKVxuICAgICAgICAgICAgLmRpc2FibGVkKHRoaXMuc2VsZWN0QWxsQ2hlY2tCb3guY2hlY2tlZClcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMudXBkYXRlQm9yZGVyQ29sb3IpXG4gICAgICAgICAgICAuYnVpbGQoKTtcbiAgICAgICAgdGhpcy5ib3R0b21Cb3JkZXJDb2xvcklucHV0ID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLmNvbG9yKVxuICAgICAgICAgICAgLmRpc2FibGVkKHRoaXMuc2VsZWN0QWxsQ2hlY2tCb3guY2hlY2tlZClcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMudXBkYXRlQm9yZGVyQ29sb3IpXG4gICAgICAgICAgICAuYnVpbGQoKTtcbiAgICAgICAgdGhpcy5sZWZ0Qm9yZGVyQ29sb3JJbnB1dCA9IG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS5jb2xvcilcbiAgICAgICAgICAgIC5kaXNhYmxlZCh0aGlzLnNlbGVjdEFsbENoZWNrQm94LmNoZWNrZWQpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLnVwZGF0ZUJvcmRlckNvbG9yKVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBidWlsZFN0eWxlU2VsZWN0b3JzKCkge1xuICAgICAgICB0aGlzLnRvcEJvcmRlclN0eWxlU2VsZWN0b3IgPSBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIoQm9yZGVyU3R5bGVFbnVtKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudXBkYXRlQm9yZGVyU3R5bGVQcm9wZXJ0eSlcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgIHRoaXMucmlnaHRCb3JkZXJTdHlsZVNlbGVjdG9yID0gbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKEJvcmRlclN0eWxlRW51bSlcbiAgICAgICAgICAgIC5kaXNhYmxlZCh0aGlzLnNlbGVjdEFsbENoZWNrQm94LmNoZWNrZWQpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVCb3JkZXJTdHlsZVByb3BlcnR5KVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgdGhpcy5ib3R0b21Cb3JkZXJTdHlsZVNlbGVjdG9yID0gbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKEJvcmRlclN0eWxlRW51bSlcbiAgICAgICAgICAgIC5kaXNhYmxlZCh0aGlzLnNlbGVjdEFsbENoZWNrQm94LmNoZWNrZWQpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVCb3JkZXJTdHlsZVByb3BlcnR5KVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgdGhpcy5sZWZ0Qm9yZGVyU3R5bGVTZWxlY3RvciA9IG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihCb3JkZXJTdHlsZUVudW0pXG4gICAgICAgICAgICAuZGlzYWJsZWQodGhpcy5zZWxlY3RBbGxDaGVja0JveC5jaGVja2VkKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudXBkYXRlQm9yZGVyU3R5bGVQcm9wZXJ0eSlcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBidWlsZEJvcmRlcldpZHRoSW5wdXRzKCkge1xuICAgICAgICB0aGlzLnRvcEJvcmRlcldpZHRoSW5wdXQgPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0ubnVtYmVyKVxuICAgICAgICAgICAgLnNldE1pbigwKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy51cGRhdGVCb3JkZXJXaWR0aClcbiAgICAgICAgICAgIC5idWlsZCgpO1xuICAgICAgICB0aGlzLnJpZ2h0Qm9yZGVyV2lkdGhJbnB1dCA9IG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS5udW1iZXIpXG4gICAgICAgICAgICAuc2V0TWluKDApXG4gICAgICAgICAgICAuZGlzYWJsZWQodGhpcy5zZWxlY3RBbGxDaGVja0JveC5jaGVja2VkKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudXBkYXRlQm9yZGVyV2lkdGgpXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICB0aGlzLmJvdHRvbUJvcmRlcldpZHRoSW5wdXQgPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0ubnVtYmVyKVxuICAgICAgICAgICAgLnNldE1pbigwKVxuICAgICAgICAgICAgLmRpc2FibGVkKHRoaXMuc2VsZWN0QWxsQ2hlY2tCb3guY2hlY2tlZClcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnVwZGF0ZUJvcmRlcldpZHRoKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgdGhpcy5sZWZ0Qm9yZGVyV2lkdGhJbnB1dCA9IG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS5udW1iZXIpXG4gICAgICAgICAgICAuc2V0TWluKDApXG4gICAgICAgICAgICAuZGlzYWJsZWQodGhpcy5zZWxlY3RBbGxDaGVja0JveC5jaGVja2VkKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudXBkYXRlQm9yZGVyV2lkdGgpXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgIH1cblxuICAgIHByaXZhdGUgYnVpbGRCb3JkZXJXaWR0aFVuaXRzU2VsZWN0b3JzKCkge1xuICAgICAgICB0aGlzLnRvcEJvcmRlcldpZHRoVW5pdFNlbGVjdG9yID0gbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKFVuaXRzRW51bSlcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnVwZGF0ZUJvcmRlcldpZHRoKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgdGhpcy5yaWdodEJvcmRlcldpZHRoVW5pdFNlbGVjdG9yID0gbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKFVuaXRzRW51bSlcbiAgICAgICAgICAgIC5kaXNhYmxlZCh0aGlzLnNlbGVjdEFsbENoZWNrQm94LmNoZWNrZWQpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVCb3JkZXJXaWR0aClcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgIHRoaXMuYm90dG9tQm9yZGVyV2lkdGhVbml0U2VsZWN0b3IgPSBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIoVW5pdHNFbnVtKVxuICAgICAgICAgICAgLmRpc2FibGVkKHRoaXMuc2VsZWN0QWxsQ2hlY2tCb3guY2hlY2tlZClcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnVwZGF0ZUJvcmRlcldpZHRoKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgdGhpcy5sZWZ0Qm9yZGVyV2lkdGhVbml0U2VsZWN0b3IgPSBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIoVW5pdHNFbnVtKVxuICAgICAgICAgICAgLmRpc2FibGVkKHRoaXMuc2VsZWN0QWxsQ2hlY2tCb3guY2hlY2tlZClcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnVwZGF0ZUJvcmRlcldpZHRoKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICB9XG5cbiAgICBwcml2YXRlIGJ1aWxkQm9yZGVyUmFkaXVzSW5wdXRzKCkge1xuICAgICAgICB0aGlzLnRvcEJvcmRlclJhZGl1c0lucHV0ID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLm51bWJlcilcbiAgICAgICAgICAgIC5zZXRNaW4oMClcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMudXBkYXRlQm9yZGVyUmFkaXVzKVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG4gICAgICAgIHRoaXMucmlnaHRCb3JkZXJSYWRpdXNJbnB1dCA9IG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS5udW1iZXIpXG4gICAgICAgICAgICAuc2V0TWluKDApXG4gICAgICAgICAgICAuZGlzYWJsZWQodGhpcy5zZWxlY3RBbGxDaGVja0JveC5jaGVja2VkKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudXBkYXRlQm9yZGVyUmFkaXVzKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgdGhpcy5ib3R0b21Cb3JkZXJSYWRpdXNJbnB1dCA9IG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS5udW1iZXIpXG4gICAgICAgICAgICAuc2V0TWluKDApXG4gICAgICAgICAgICAuZGlzYWJsZWQodGhpcy5zZWxlY3RBbGxDaGVja0JveC5jaGVja2VkKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudXBkYXRlQm9yZGVyUmFkaXVzKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgdGhpcy5sZWZ0Qm9yZGVyUmFkaXVzSW5wdXQgPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0ubnVtYmVyKVxuICAgICAgICAgICAgLnNldE1pbigwKVxuICAgICAgICAgICAgLmRpc2FibGVkKHRoaXMuc2VsZWN0QWxsQ2hlY2tCb3guY2hlY2tlZClcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnVwZGF0ZUJvcmRlclJhZGl1cylcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBidWlsZEJvcmRlclJhZGl1c1VuaXRzU2VsZWN0b3JzKCkge1xuICAgICAgICB0aGlzLnRvcEJvcmRlclJhZGl1c1VuaXRTZWxlY3RvciA9IG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihVbml0c0VudW0pXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVCb3JkZXJSYWRpdXMpXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICB0aGlzLnJpZ2h0Qm9yZGVyUmFkaXVzVW5pdFNlbGVjdG9yID0gbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKFVuaXRzRW51bSlcbiAgICAgICAgICAgIC5kaXNhYmxlZCh0aGlzLnNlbGVjdEFsbENoZWNrQm94LmNoZWNrZWQpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVCb3JkZXJSYWRpdXMpXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICB0aGlzLmJvdHRvbUJvcmRlclJhZGl1c1VuaXRTZWxlY3RvciA9IG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihVbml0c0VudW0pXG4gICAgICAgICAgICAuZGlzYWJsZWQodGhpcy5zZWxlY3RBbGxDaGVja0JveC5jaGVja2VkKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudXBkYXRlQm9yZGVyUmFkaXVzKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgdGhpcy5sZWZ0Qm9yZGVyUmFkaXVzVW5pdFNlbGVjdG9yID0gbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKFVuaXRzRW51bSlcbiAgICAgICAgICAgIC5kaXNhYmxlZCh0aGlzLnNlbGVjdEFsbENoZWNrQm94LmNoZWNrZWQpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVCb3JkZXJSYWRpdXMpXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgIH1cblxuICAgIHByaXZhdGUgY2hhbmdlQ29tcG9uZW50c1N0YXR1cyAoKSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdEFsbENoZWNrQm94LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmlnaHRCb3JkZXJTdHlsZVNlbGVjdG9yLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tQm9yZGVyU3R5bGVTZWxlY3Rvci5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmxlZnRCb3JkZXJTdHlsZVNlbGVjdG9yLmRpc2FibGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgdGhpcy5yaWdodEJvcmRlckNvbG9ySW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5ib3R0b21Cb3JkZXJDb2xvcklucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubGVmdEJvcmRlckNvbG9ySW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICB0aGlzLnJpZ2h0Qm9yZGVyV2lkdGhJbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbUJvcmRlcldpZHRoSW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5sZWZ0Qm9yZGVyV2lkdGhJbnB1dC5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIHRoaXMucmlnaHRCb3JkZXJXaWR0aFVuaXRTZWxlY3Rvci5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbUJvcmRlcldpZHRoVW5pdFNlbGVjdG9yLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubGVmdEJvcmRlcldpZHRoVW5pdFNlbGVjdG9yLmRpc2FibGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgdGhpcy5yaWdodEJvcmRlclJhZGl1c0lucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tQm9yZGVyUmFkaXVzSW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5sZWZ0Qm9yZGVyUmFkaXVzSW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICB0aGlzLnJpZ2h0Qm9yZGVyUmFkaXVzVW5pdFNlbGVjdG9yLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tQm9yZGVyUmFkaXVzVW5pdFNlbGVjdG9yLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubGVmdEJvcmRlclJhZGl1c1VuaXRTZWxlY3Rvci5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJpZ2h0Qm9yZGVyU3R5bGVTZWxlY3Rvci5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5ib3R0b21Cb3JkZXJTdHlsZVNlbGVjdG9yLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmxlZnRCb3JkZXJTdHlsZVNlbGVjdG9yLmRpc2FibGVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIHRoaXMucmlnaHRCb3JkZXJDb2xvcklucHV0LmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbUJvcmRlckNvbG9ySW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubGVmdEJvcmRlckNvbG9ySW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgdGhpcy5yaWdodEJvcmRlcldpZHRoSW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tQm9yZGVyV2lkdGhJbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5sZWZ0Qm9yZGVyV2lkdGhJbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICB0aGlzLnJpZ2h0Qm9yZGVyV2lkdGhVbml0U2VsZWN0b3IuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tQm9yZGVyV2lkdGhVbml0U2VsZWN0b3IuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubGVmdEJvcmRlcldpZHRoVW5pdFNlbGVjdG9yLmRpc2FibGVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIHRoaXMucmlnaHRCb3JkZXJSYWRpdXNJbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5ib3R0b21Cb3JkZXJSYWRpdXNJbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5sZWZ0Qm9yZGVyUmFkaXVzSW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgdGhpcy5yaWdodEJvcmRlclJhZGl1c1VuaXRTZWxlY3Rvci5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5ib3R0b21Cb3JkZXJSYWRpdXNVbml0U2VsZWN0b3IuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubGVmdEJvcmRlclJhZGl1c1VuaXRTZWxlY3Rvci5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRCb3JkZXJWYWx1ZXNBY2NvcmRpbmdUb0NsYXNzKCkge1xuICAgICAgICB0aGlzLnNldEJvcmRlckNvbG9yVmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpO1xuICAgICAgICB0aGlzLnNldEJvcmRlclN0eWxlVmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpO1xuICAgICAgICB0aGlzLnNldEJvcmRlcldpZHRoVmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpO1xuICAgICAgICB0aGlzLnNldEJvcmRlclJhZGl1c1ZhbHVlc0FjY29yZGluZ1RvQ2xhc3MoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEJvcmRlckNvbG9yVmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpIHtcbiAgICAgICAgY29uc3Qge3RvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdH0gPSB0aGlzLmdldEN1cnJlbnRCb3JkZXJDb2xvcigpO1xuICAgICAgICB0aGlzLnRvcEJvcmRlckNvbG9ySW5wdXQudmFsdWUgPSB0b3A7XG4gICAgICAgIHRoaXMucmlnaHRCb3JkZXJDb2xvcklucHV0LnZhbHVlID0gcmlnaHQ7XG4gICAgICAgIHRoaXMuYm90dG9tQm9yZGVyQ29sb3JJbnB1dC52YWx1ZSA9IGJvdHRvbTtcbiAgICAgICAgdGhpcy5sZWZ0Qm9yZGVyQ29sb3JJbnB1dC52YWx1ZSA9IGxlZnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRCb3JkZXJTdHlsZVZhbHVlc0FjY29yZGluZ1RvQ2xhc3MoKSB7XG4gICAgICAgIGNvbnN0IHt0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnR9ID0gdGhpcy5nZXRDdXJyZW50Qm9yZGVyU3R5bGUoKTtcbiAgICAgICAgdGhpcy50b3BCb3JkZXJTdHlsZVNlbGVjdG9yLnZhbHVlID0gdG9wO1xuICAgICAgICB0aGlzLnJpZ2h0Qm9yZGVyU3R5bGVTZWxlY3Rvci52YWx1ZSA9IHJpZ2h0O1xuICAgICAgICB0aGlzLmJvdHRvbUJvcmRlclN0eWxlU2VsZWN0b3IudmFsdWUgPSBib3R0b207XG4gICAgICAgIHRoaXMubGVmdEJvcmRlclN0eWxlU2VsZWN0b3IudmFsdWUgPSBsZWZ0O1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0Qm9yZGVyV2lkdGhWYWx1ZXNBY2NvcmRpbmdUb0NsYXNzKCkge1xuICAgICAgICBjb25zdCB7dG9wLCByaWdodCwgYm90dG9tLCBsZWZ0fSA9IHRoaXMuZ2V0Q3VycmVudEJvcmRlcldpZHRoKCk7XG4gICAgICAgIHRoaXMudG9wQm9yZGVyV2lkdGhJbnB1dC52YWx1ZSA9IGAke3BhcnNlSW50KHRvcCl9YDtcbiAgICAgICAgdGhpcy5yaWdodEJvcmRlcldpZHRoSW5wdXQudmFsdWUgPSBgJHtwYXJzZUludChyaWdodCl9YDtcbiAgICAgICAgdGhpcy5ib3R0b21Cb3JkZXJXaWR0aElucHV0LnZhbHVlID0gYCR7cGFyc2VJbnQoYm90dG9tKX1gO1xuICAgICAgICB0aGlzLmxlZnRCb3JkZXJXaWR0aElucHV0LnZhbHVlID0gYCR7cGFyc2VJbnQobGVmdCl9YDtcblxuICAgICAgICB0aGlzLnRvcEJvcmRlcldpZHRoVW5pdFNlbGVjdG9yLnZhbHVlID0gZ2V0VW5pdCh0b3ApO1xuICAgICAgICB0aGlzLnJpZ2h0Qm9yZGVyV2lkdGhVbml0U2VsZWN0b3IudmFsdWUgPSBnZXRVbml0KHJpZ2h0KTtcbiAgICAgICAgdGhpcy5ib3R0b21Cb3JkZXJXaWR0aFVuaXRTZWxlY3Rvci52YWx1ZSA9IGdldFVuaXQoYm90dG9tKTtcbiAgICAgICAgdGhpcy5sZWZ0Qm9yZGVyV2lkdGhVbml0U2VsZWN0b3IudmFsdWUgPSBnZXRVbml0KGxlZnQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0Qm9yZGVyUmFkaXVzVmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpIHtcbiAgICAgICAgY29uc3Qge3RvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdH0gPSB0aGlzLmdldEN1cnJlbnRCb3JkZXJSYWRpdXMoKTtcbiAgICAgICAgdGhpcy50b3BCb3JkZXJSYWRpdXNJbnB1dC52YWx1ZSA9IGAke3BhcnNlSW50KHRvcCl9YDtcbiAgICAgICAgdGhpcy5yaWdodEJvcmRlclJhZGl1c0lucHV0LnZhbHVlID0gYCR7cGFyc2VJbnQocmlnaHQpfWA7XG4gICAgICAgIHRoaXMuYm90dG9tQm9yZGVyUmFkaXVzSW5wdXQudmFsdWUgPSBgJHtwYXJzZUludChib3R0b20pfWA7XG4gICAgICAgIHRoaXMubGVmdEJvcmRlclJhZGl1c0lucHV0LnZhbHVlID0gYCR7cGFyc2VJbnQobGVmdCl9YDtcblxuICAgICAgICB0aGlzLnRvcEJvcmRlclJhZGl1c1VuaXRTZWxlY3Rvci52YWx1ZSA9IGdldFVuaXQodG9wKTtcbiAgICAgICAgdGhpcy5yaWdodEJvcmRlclJhZGl1c1VuaXRTZWxlY3Rvci52YWx1ZSA9IGdldFVuaXQocmlnaHQpO1xuICAgICAgICB0aGlzLmJvdHRvbUJvcmRlclJhZGl1c1VuaXRTZWxlY3Rvci52YWx1ZSA9IGdldFVuaXQoYm90dG9tKTtcbiAgICAgICAgdGhpcy5sZWZ0Qm9yZGVyUmFkaXVzVW5pdFNlbGVjdG9yLnZhbHVlID0gZ2V0VW5pdChsZWZ0KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUJvcmRlclN0eWxlUHJvcGVydHkoKSB7XG4gICAgICAgIGxldCB7dG9wLCByaWdodCwgYm90dG9tLCBsZWZ0fSA9IHRoaXMuZ2V0Q3VycmVudEJvcmRlclN0eWxlKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0QWxsQ2hlY2tCb3guY2hlY2tlZCkge1xuICAgICAgICAgICAgdG9wID0gdGhpcy50b3BCb3JkZXJTdHlsZVNlbGVjdG9yLnZhbHVlO1xuICAgICAgICAgICAgcmlnaHQgPSB0b3A7XG4gICAgICAgICAgICBib3R0b20gPSB0b3A7XG4gICAgICAgICAgICBsZWZ0ID0gdG9wO1xuXG4gICAgICAgICAgICB0aGlzLnJpZ2h0Qm9yZGVyU3R5bGVTZWxlY3Rvci52YWx1ZSA9IHRoaXMudG9wQm9yZGVyU3R5bGVTZWxlY3Rvci52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tQm9yZGVyU3R5bGVTZWxlY3Rvci52YWx1ZSA9IHRoaXMudG9wQm9yZGVyU3R5bGVTZWxlY3Rvci52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMubGVmdEJvcmRlclN0eWxlU2VsZWN0b3IudmFsdWUgPSB0aGlzLnRvcEJvcmRlclN0eWxlU2VsZWN0b3IudmFsdWU7XG5cbiAgICAgICAgICAgIGlmKHRvcCA9PT0gQm9yZGVyU3R5bGVFbnVtLm5vbmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0Qm9yZGVyUHJvcGVydHkoJ2JvcmRlci1zdHlsZScsICdhbGwnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0Qm9yZGVyUHJvcGVydHkoJ2JvcmRlci1jb2xvcicsICdhbGwnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0Qm9yZGVyUHJvcGVydHkoJ2JvcmRlci13aWR0aCcsICdhbGwnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0Qm9yZGVyUHJvcGVydHkoJ2JvcmRlci1yYWRpdXMnLCAnYWxsJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldEJvcmRlclByb3BlcnR5KCdib3JkZXItaW1hZ2UnLCAnYWxsJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG9wID0gdGhpcy50b3BCb3JkZXJTdHlsZVNlbGVjdG9yLnZhbHVlO1xuICAgICAgICAgICAgcmlnaHQgPSB0aGlzLnJpZ2h0Qm9yZGVyU3R5bGVTZWxlY3Rvci52YWx1ZTtcbiAgICAgICAgICAgIGJvdHRvbSA9IHRoaXMuYm90dG9tQm9yZGVyU3R5bGVTZWxlY3Rvci52YWx1ZTtcbiAgICAgICAgICAgIGxlZnQgPSB0aGlzLmxlZnRCb3JkZXJTdHlsZVNlbGVjdG9yLnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYm9yZGVyLXN0eWxlJ10gPSBbdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0XS5qb2luKCcgJylcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlc2V0Qm9yZGVyUHJvcGVydHkoXG4gICAgICAgIHByb3BlcnR5OiAnYm9yZGVyLXN0eWxlJyB8ICdib3JkZXItY29sb3InIHwgJ2JvcmRlci13aWR0aCcgfCAnYm9yZGVyLXJhZGl1cycgfCAnYm9yZGVyLWltYWdlJyxcbiAgICAgICAgcG9zaXRpb246ICd0b3AnIHwgJ3JpZ2h0JyB8ICdib3R0b20nIHwgJ2xlZnQnIHwgJ2FsbCdcbiAgICApIHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBwb3NpdGlvbiA9PT0gJ2FsbCcgPyBwcm9wZXJ0eSA6IGAke3Byb3BlcnR5fS0ke3Bvc2l0aW9ufWA7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbc3R5bGVdID0gJyc7XG5cbiAgICAgICAgaWYocHJvcGVydHkgPT09ICdib3JkZXItc3R5bGUnKSB7XG4gICAgICAgICAgICB0aGlzLnNldEJvcmRlclN0eWxlVmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYocHJvcGVydHkgPT09ICdib3JkZXItY29sb3InKSB7XG4gICAgICAgICAgICB0aGlzLnNldEJvcmRlckNvbG9yVmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYocHJvcGVydHkgPT09ICdib3JkZXItd2lkdGgnKSB7XG4gICAgICAgICAgICB0aGlzLnNldEJvcmRlcldpZHRoVmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYocHJvcGVydHkgPT09ICdib3JkZXItcmFkaXVzJykge1xuICAgICAgICAgICAgdGhpcy5zZXRCb3JkZXJSYWRpdXNWYWx1ZXNBY2NvcmRpbmdUb0NsYXNzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUJvcmRlckNvbG9yKCkge1xuICAgICAgICBsZXQge3RvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdH0gPSB0aGlzLmdldEN1cnJlbnRCb3JkZXJDb2xvcigpO1xuXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdEFsbENoZWNrQm94LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIHRvcCA9IHRoaXMudG9wQm9yZGVyQ29sb3JJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIHJpZ2h0ID0gdG9wO1xuICAgICAgICAgICAgYm90dG9tID0gdG9wO1xuICAgICAgICAgICAgbGVmdCA9IHRvcDtcblxuICAgICAgICAgICAgdGhpcy5yaWdodEJvcmRlckNvbG9ySW5wdXQudmFsdWUgPSB0aGlzLnRvcEJvcmRlckNvbG9ySW5wdXQudmFsdWU7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbUJvcmRlckNvbG9ySW5wdXQudmFsdWUgPSB0aGlzLnRvcEJvcmRlckNvbG9ySW5wdXQudmFsdWU7XG4gICAgICAgICAgICB0aGlzLmxlZnRCb3JkZXJDb2xvcklucHV0LnZhbHVlID0gdGhpcy50b3BCb3JkZXJDb2xvcklucHV0LnZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG9wID0gdGhpcy50b3BCb3JkZXJDb2xvcklucHV0LnZhbHVlO1xuICAgICAgICAgICAgcmlnaHQgPSB0aGlzLnJpZ2h0Qm9yZGVyQ29sb3JJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIGJvdHRvbSA9IHRoaXMuYm90dG9tQm9yZGVyQ29sb3JJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIGxlZnQgPSB0aGlzLmxlZnRCb3JkZXJDb2xvcklucHV0LnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYm9yZGVyLWNvbG9yJ10gPSBbdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0XS5qb2luKCcgJylcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUJvcmRlcldpZHRoKCkge1xuICAgICAgICBsZXQge3RvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdH0gPSB0aGlzLmdldEN1cnJlbnRCb3JkZXJXaWR0aCgpO1xuXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdEFsbENoZWNrQm94LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGlmKHBhcnNlSW50KHRoaXMudG9wQm9yZGVyV2lkdGhJbnB1dC52YWx1ZSkgPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0Qm9yZGVyUHJvcGVydHkoJ2JvcmRlci13aWR0aCcsICdhbGwnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRvcCA9IGAke3RoaXMudG9wQm9yZGVyV2lkdGhJbnB1dC52YWx1ZX0ke3RoaXMudG9wQm9yZGVyV2lkdGhVbml0U2VsZWN0b3IudmFsdWV9YDtcbiAgICAgICAgICAgIHJpZ2h0ID0gdG9wO1xuICAgICAgICAgICAgYm90dG9tID0gdG9wO1xuICAgICAgICAgICAgbGVmdCA9IHRvcDtcblxuICAgICAgICAgICAgdGhpcy5yaWdodEJvcmRlcldpZHRoSW5wdXQudmFsdWUgPSB0aGlzLnRvcEJvcmRlcldpZHRoSW5wdXQudmFsdWU7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbUJvcmRlcldpZHRoSW5wdXQudmFsdWUgPSB0aGlzLnRvcEJvcmRlcldpZHRoSW5wdXQudmFsdWU7XG4gICAgICAgICAgICB0aGlzLmxlZnRCb3JkZXJXaWR0aElucHV0LnZhbHVlID0gdGhpcy50b3BCb3JkZXJXaWR0aElucHV0LnZhbHVlO1xuXG4gICAgICAgICAgICB0aGlzLnJpZ2h0Qm9yZGVyV2lkdGhVbml0U2VsZWN0b3IudmFsdWUgPSB0aGlzLnRvcEJvcmRlcldpZHRoVW5pdFNlbGVjdG9yLnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ib3R0b21Cb3JkZXJXaWR0aFVuaXRTZWxlY3Rvci52YWx1ZSA9IHRoaXMudG9wQm9yZGVyV2lkdGhVbml0U2VsZWN0b3IudmFsdWU7XG4gICAgICAgICAgICB0aGlzLmxlZnRCb3JkZXJXaWR0aFVuaXRTZWxlY3Rvci52YWx1ZSA9IHRoaXMudG9wQm9yZGVyV2lkdGhVbml0U2VsZWN0b3IudmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0b3AgPSBgJHt0aGlzLnRvcEJvcmRlcldpZHRoSW5wdXQudmFsdWV9JHt0aGlzLnRvcEJvcmRlcldpZHRoVW5pdFNlbGVjdG9yLnZhbHVlfWA7XG4gICAgICAgICAgICByaWdodCA9IGAke3RoaXMucmlnaHRCb3JkZXJXaWR0aElucHV0LnZhbHVlfSR7dGhpcy5yaWdodEJvcmRlcldpZHRoVW5pdFNlbGVjdG9yLnZhbHVlfWA7XG4gICAgICAgICAgICBib3R0b20gPSBgJHt0aGlzLmJvdHRvbUJvcmRlcldpZHRoSW5wdXQudmFsdWV9JHt0aGlzLmJvdHRvbUJvcmRlcldpZHRoVW5pdFNlbGVjdG9yLnZhbHVlfWA7XG4gICAgICAgICAgICBsZWZ0ID0gYCR7dGhpcy5sZWZ0Qm9yZGVyV2lkdGhJbnB1dC52YWx1ZX0ke3RoaXMubGVmdEJvcmRlcldpZHRoVW5pdFNlbGVjdG9yLnZhbHVlfWA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYm9yZGVyLXdpZHRoJ10gPSBbdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0XS5qb2luKCcgJylcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUJvcmRlclJhZGl1cygpIHtcbiAgICAgICAgbGV0IHt0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnR9ID0gdGhpcy5nZXRDdXJyZW50Qm9yZGVyUmFkaXVzKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0QWxsQ2hlY2tCb3guY2hlY2tlZCkge1xuICAgICAgICAgICAgaWYocGFyc2VJbnQodGhpcy50b3BCb3JkZXJSYWRpdXNJbnB1dC52YWx1ZSkgPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0Qm9yZGVyUHJvcGVydHkoJ2JvcmRlci1yYWRpdXMnLCAnYWxsJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0b3AgPSBgJHt0aGlzLnRvcEJvcmRlclJhZGl1c0lucHV0LnZhbHVlfSR7dGhpcy50b3BCb3JkZXJSYWRpdXNVbml0U2VsZWN0b3IudmFsdWV9YDtcbiAgICAgICAgICAgIHJpZ2h0ID0gdG9wO1xuICAgICAgICAgICAgYm90dG9tID0gdG9wO1xuICAgICAgICAgICAgbGVmdCA9IHRvcDtcblxuICAgICAgICAgICAgdGhpcy5yaWdodEJvcmRlclJhZGl1c0lucHV0LnZhbHVlID0gdGhpcy50b3BCb3JkZXJSYWRpdXNJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tQm9yZGVyUmFkaXVzSW5wdXQudmFsdWUgPSB0aGlzLnRvcEJvcmRlclJhZGl1c0lucHV0LnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5sZWZ0Qm9yZGVyUmFkaXVzSW5wdXQudmFsdWUgPSB0aGlzLnRvcEJvcmRlclJhZGl1c0lucHV0LnZhbHVlO1xuXG4gICAgICAgICAgICB0aGlzLnJpZ2h0Qm9yZGVyUmFkaXVzVW5pdFNlbGVjdG9yLnZhbHVlID0gdGhpcy50b3BCb3JkZXJSYWRpdXNVbml0U2VsZWN0b3IudmFsdWU7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbUJvcmRlclJhZGl1c1VuaXRTZWxlY3Rvci52YWx1ZSA9IHRoaXMudG9wQm9yZGVyUmFkaXVzVW5pdFNlbGVjdG9yLnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5sZWZ0Qm9yZGVyUmFkaXVzVW5pdFNlbGVjdG9yLnZhbHVlID0gdGhpcy50b3BCb3JkZXJSYWRpdXNVbml0U2VsZWN0b3IudmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0b3AgPSBgJHt0aGlzLnRvcEJvcmRlclJhZGl1c0lucHV0LnZhbHVlfSR7dGhpcy50b3BCb3JkZXJSYWRpdXNVbml0U2VsZWN0b3IudmFsdWV9YDtcbiAgICAgICAgICAgIHJpZ2h0ID0gYCR7dGhpcy5yaWdodEJvcmRlclJhZGl1c0lucHV0LnZhbHVlfSR7dGhpcy5yaWdodEJvcmRlclJhZGl1c1VuaXRTZWxlY3Rvci52YWx1ZX1gO1xuICAgICAgICAgICAgYm90dG9tID0gYCR7dGhpcy5ib3R0b21Cb3JkZXJSYWRpdXNJbnB1dC52YWx1ZX0ke3RoaXMuYm90dG9tQm9yZGVyUmFkaXVzVW5pdFNlbGVjdG9yLnZhbHVlfWA7XG4gICAgICAgICAgICBsZWZ0ID0gYCR7dGhpcy5sZWZ0Qm9yZGVyUmFkaXVzSW5wdXQudmFsdWV9JHt0aGlzLmxlZnRCb3JkZXJSYWRpdXNVbml0U2VsZWN0b3IudmFsdWV9YDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydib3JkZXItcmFkaXVzJ10gPSBbdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0XS5qb2luKCcgJylcbiAgICB9XG5cbiAgICBwcml2YXRlIHVuaWZpZWRCb3JkZXJQcm9wZXJ0aWVzKCkgOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgYWxsRXF1YWwgPSBbXTtcbiAgICAgICAgYWxsRXF1YWwucHVzaCh0aGlzLmdldEN1cnJlbnRCb3JkZXJTdHlsZSgpLmFsbEVxdWFsKVxuICAgICAgICBhbGxFcXVhbC5wdXNoKHRoaXMuZ2V0Q3VycmVudEJvcmRlckNvbG9yKCkuYWxsRXF1YWwpXG4gICAgICAgIGFsbEVxdWFsLnB1c2godGhpcy5nZXRDdXJyZW50Qm9yZGVyUmFkaXVzKCkuYWxsRXF1YWwpXG4gICAgICAgIGFsbEVxdWFsLnB1c2godGhpcy5nZXRDdXJyZW50Qm9yZGVyU3R5bGUoKS5hbGxFcXVhbClcbiAgICAgICAgYWxsRXF1YWwucHVzaCh0aGlzLmdldEN1cnJlbnRCb3JkZXJXaWR0aCgpLmFsbEVxdWFsKVxuXG4gICAgICAgIGlmKGFsbEVxdWFsLmZpbmQoKGVsKSA9PiBlbCA9PT0gZmFsc2UpID09PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0Q3VycmVudEJvcmRlclN0eWxlKCk6IFN0eWxlc1JldHVybk9iamVjdEludGVyZmFjZSB7XG4gICAgICAgIGNvbnN0IHRvcCA9IHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2JvcmRlci10b3Atc3R5bGUnXTtcbiAgICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydib3JkZXItcmlnaHQtc3R5bGUnXTtcbiAgICAgICAgY29uc3QgYm90dG9tID0gdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYm9yZGVyLWJvdHRvbS1zdHlsZSddO1xuICAgICAgICBjb25zdCBsZWZ0ID0gdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYm9yZGVyLWxlZnQtc3R5bGUnXTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdG9wOiB0b3AgPyB0b3AgOiAnbm9uZScsXG4gICAgICAgICAgICByaWdodDogcmlnaHQgPyByaWdodCA6ICdub25lJyxcbiAgICAgICAgICAgIGJvdHRvbTogYm90dG9tID8gYm90dG9tIDogJ25vbmUnLFxuICAgICAgICAgICAgbGVmdDogbGVmdCA/IGxlZnQgOiAnbm9uZScsXG4gICAgICAgICAgICBhbGxFcXVhbDogdG9wID09PSByaWdodCAmJiB0b3AgPT09IGJvdHRvbSAmJiB0b3AgPT09IGxlZnQsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRDdXJyZW50Qm9yZGVyQ29sb3IoKTogU3R5bGVzUmV0dXJuT2JqZWN0SW50ZXJmYWNlIHtcbiAgICAgICAgY29uc3QgdG9wID0gdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYm9yZGVyLXRvcC1jb2xvciddO1xuICAgICAgICBjb25zdCByaWdodCA9IHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2JvcmRlci1yaWdodC1jb2xvciddO1xuICAgICAgICBjb25zdCBib3R0b20gPSB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydib3JkZXItYm90dG9tLWNvbG9yJ107XG4gICAgICAgIGNvbnN0IGxlZnQgPSB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydib3JkZXItbGVmdC1jb2xvciddO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0b3A6IGNvbG9yVG9IZXgodG9wKSxcbiAgICAgICAgICAgIHJpZ2h0OiBjb2xvclRvSGV4KHJpZ2h0KSxcbiAgICAgICAgICAgIGJvdHRvbTogY29sb3JUb0hleChib3R0b20pLFxuICAgICAgICAgICAgbGVmdDogY29sb3JUb0hleChsZWZ0KSxcbiAgICAgICAgICAgIGFsbEVxdWFsOiB0b3AgPT09IHJpZ2h0ICYmIHRvcCA9PT0gYm90dG9tICYmIHRvcCA9PT0gbGVmdCxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEN1cnJlbnRCb3JkZXJXaWR0aCgpOiBTdHlsZXNSZXR1cm5PYmplY3RJbnRlcmZhY2Uge1xuICAgICAgICBjb25zdCB0b3AgPSB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydib3JkZXItdG9wLXdpZHRoJ107XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYm9yZGVyLXJpZ2h0LXdpZHRoJ107XG4gICAgICAgIGNvbnN0IGJvdHRvbSA9IHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2JvcmRlci1ib3R0b20td2lkdGgnXTtcbiAgICAgICAgY29uc3QgbGVmdCA9IHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2JvcmRlci1sZWZ0LXdpZHRoJ107XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRvcDogdG9wID8gdG9wIDogJzBweCcsXG4gICAgICAgICAgICByaWdodDogcmlnaHQgPyByaWdodCA6ICcwcHgnLFxuICAgICAgICAgICAgYm90dG9tOiBib3R0b20gPyBib3R0b20gOiAnMHB4JyxcbiAgICAgICAgICAgIGxlZnQ6IGxlZnQgPyBsZWZ0IDogJzBweCcsXG4gICAgICAgICAgICBhbGxFcXVhbDogdG9wID09PSByaWdodCAmJiB0b3AgPT09IGJvdHRvbSAmJiB0b3AgPT09IGxlZnQsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRDdXJyZW50Qm9yZGVyUmFkaXVzKCk6IFN0eWxlc1JldHVybk9iamVjdEludGVyZmFjZSB7XG4gICAgICAgIGNvbnN0IHRvcCA9IHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2JvcmRlci10b3AtbGVmdC1yYWRpdXMnXTtcbiAgICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydib3JkZXItdG9wLXJpZ2h0LXJhZGl1cyddO1xuICAgICAgICBjb25zdCBib3R0b20gPSB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cyddO1xuICAgICAgICBjb25zdCBsZWZ0ID0gdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cyddO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0b3A6IHRvcCA/IHRvcCA6ICcwcHgnLFxuICAgICAgICAgICAgcmlnaHQ6IHJpZ2h0ID8gcmlnaHQgOiAnMHB4JyxcbiAgICAgICAgICAgIGJvdHRvbTogYm90dG9tID8gYm90dG9tIDogJzBweCcsXG4gICAgICAgICAgICBsZWZ0OiBsZWZ0ID8gbGVmdCA6ICcwcHgnLFxuICAgICAgICAgICAgYWxsRXF1YWw6IHRvcCA9PT0gcmlnaHQgJiYgdG9wID09PSBib3R0b20gJiYgdG9wID09PSBsZWZ0LFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGFzc05hbWVVcGRhdGVkKG5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0ID0gQ3NzU3R5bGVTaGVldC5nZXRSdWxlU3R5bGVzKG5hbWUpO1xuICAgICAgICB0aGlzLnNlbGVjdEFsbENoZWNrQm94LmNoZWNrZWQgPSB0aGlzLnVuaWZpZWRCb3JkZXJQcm9wZXJ0aWVzKCk7XG4gICAgICAgIHRoaXMuY2hhbmdlQ29tcG9uZW50c1N0YXR1cygpO1xuICAgICAgICB0aGlzLnNldEJvcmRlclZhbHVlc0FjY29yZGluZ1RvQ2xhc3MoKTtcbiAgICB9XG59XG5cbmludGVyZmFjZSBTdHlsZXNSZXR1cm5PYmplY3RJbnRlcmZhY2Uge1xuICAgIHRvcDogc3RyaW5nLFxuICAgIHJpZ2h0OiBzdHJpbmcsXG4gICAgYm90dG9tOiBzdHJpbmcsXG4gICAgbGVmdDogc3RyaW5nLFxuICAgIGFsbEVxdWFsOiBib29sZWFuLFxufVxuIiwiaW1wb3J0IENsYXNzQ2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2UgZnJvbSAnLi4vaW50ZXJmYWNlcy9jbGFzcy1jaGFuZ2Utb2JzZXJ2ZXIuaW50ZXJmYWNlJztcblxuaW1wb3J0IENvbnRhaW5lckJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0NvbnRhaW5lckJ1aWxkZXInO1xuaW1wb3J0IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyIGZyb20gJy4uL21vZGVscy9TZWxlY3RvckZyb21FbnVtQnVpbGRlcic7XG5pbXBvcnQgTGFiZWxCdWlsZGVyIGZyb20gJy4uL21vZGVscy9MYWJlbEJ1aWxkZXInO1xuaW1wb3J0IElucHV0QnVpbGRlciBmcm9tICcuLi9tb2RlbHMvSW5wdXRCdWlsZGVyJztcblxuaW1wb3J0IENzc1N0eWxlU2hlZXQgZnJvbSAnLi4vLi4vY3NzLXN0eWxlc2hlZXQvY3NzLXN0eWxlc2hlZXQnO1xuaW1wb3J0IGdldFVuaXQgZnJvbSAnLi4vZnVuY3Rpb25zL2dldC1jc3MtdW5pdCc7XG5pbXBvcnQgY29sb3JUb0hleCBmcm9tICcuLi9mdW5jdGlvbnMvcmdiLXRvLWhleCc7XG5pbXBvcnQgVGV4dGFyZWFCdWlsZGVyIGZyb20gJy4uL21vZGVscy9UZXh0YXJlYUJ1aWxkZXInO1xuXG5pbXBvcnQgeyBTdHlsZU5hbWVFbnVtIH0gZnJvbSAnLi4vZW51bXMvc3R5bGUtbmFtZS5lbnVtJztcbmltcG9ydCB7IElucHV0VHlwZUVudW0gfSBmcm9tICcuLi9lbnVtcy9pbnB1dC10eXBlLmVudW0nO1xuaW1wb3J0IHsgVW5pdHNFbnVtIH0gZnJvbSAnLi4vZW51bXMvdW5pdHMuZW51bSc7XG5pbXBvcnQgeyBBbGlnbkZsZXhJdGVtc0VudW0gfSBmcm9tICcuLi9lbnVtcy9hbGlnbi1mbGV4LWl0ZW1zLmVudW0nO1xuaW1wb3J0IHsgRmxleERpcmVjdGlvbkVudW0gfSBmcm9tICcuLi9lbnVtcy9mbGV4LWRpcmVjdGlvbi5lbnVtJztcbmltcG9ydCB7IERpc3BsYXlUeXBlc0VudW0gfSBmcm9tICcuLi9lbnVtcy9kaXNwbGF5LXR5cGVzLmVudW0nO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJveFNoYWRvd0NvbXBvbmVudCBpbXBsZW1lbnRzIENsYXNzQ2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2Uge1xuICAgIHByaXZhdGUgZG9tRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBjb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgY29tcG9uZW50c0NvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBzaGFkb3dCb3hUeXBlQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcbiAgICBwcml2YXRlIGRvbUVsZW1lbnRTdHlsZVNoZWV0OiBDU1NTdHlsZURlY2xhcmF0aW9uO1xuXG4gICAgcHJpdmF0ZSBzaW1wbGVCb3hTaGFkb3dDaGVja2JveDogSFRNTElucHV0RWxlbWVudDtcbiAgICBwcml2YXRlIGFkdmFuY2VkQm94U2hhZG93Q2hlY2tib3g6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIGNvbG9ySW5zZXRDb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgY29sb3JJbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgICBwcml2YXRlIGluc2V0U2VsZWN0b3I6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIGhvcml6b250YWxPZmZzZXRDb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgaG9yaXpvbnRhbE9mZnNldElucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHByaXZhdGUgaG9yaXpvbnRhbE9mZnNldFVuaXRTZWxlY3RvcjogSFRNTFNlbGVjdEVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIHZlcnRpY2FsT2Zmc2V0Q29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcbiAgICBwcml2YXRlIHZlcnRpY2FsT2Zmc2V0SW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSB2ZXJ0aWNhbE9mZnNldFVuaXRTZWxlY3RvcjogSFRNTFNlbGVjdEVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIGJsdXJSYWRpdXNDb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgYmx1clJhZGl1c0lucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHByaXZhdGUgYmx1clJhZGl1c1VuaXRTZWxlY3RvcjogSFRNTFNlbGVjdEVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIHNwcmVhZFJhZGl1c0NvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBzcHJlYWRSYWRpdXNJbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgICBwcml2YXRlIHNwcmVhZFJhZGl1c1VuaXRTZWxlY3RvcjogSFRNTFNlbGVjdEVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIGFkdmFuY2VkRW5hYmxlZCA9IGZhbHNlO1xuXG4gICAgcHJpdmF0ZSBhZHZhbmNlZFNoYWRvd0JveFRleHRBcmVhOiBIVE1MVGV4dEFyZWFFbGVtZW50O1xuICAgIHByaXZhdGUgYWR2YW5jZWRTaGFkb3dCb3hDb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihkb21FbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0ID0gQ3NzU3R5bGVTaGVldC5nZXRSdWxlU3R5bGVzKHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3RbMF0pO1xuICAgICAgICB0aGlzLmdldEluaXRpYWxWYWx1ZXMoKTtcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnRzKCk7XG4gICAgICAgIHRoaXMuc2V0Qm94U2hhZG93VmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpO1xuICAgIH1cblxuICAgIGdldCBjb21wb25lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZENvbXBvbmVudHMoKSB7XG4gICAgICAgIHRoaXMuYnVpbGRTaGFkb3dCb3hUeXBlQ29udGFpbmVyKCk7XG4gICAgICAgIHRoaXMuYnVpbGRCYXNpY1NoYWRvd0JveENvbnRhaW5lcnMoKTtcbiAgICAgICAgdGhpcy5idWlsZEFkdmFuY2VkU2hhZG93Qm94Q29udGFpbmVyKCk7XG4gICAgICAgIHRoaXMuYnVpbGRDb21wb25lbnRzQ29udGFpbmVyKCk7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5jb21wb25lbnRzQ29udGFpbmVyKVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBidWlsZFNoYWRvd0JveFR5cGVDb250YWluZXIoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlQm94U2hhZG93VHlwZSA9IHRoaXMudXBkYXRlQm94U2hhZG93VHlwZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuc2ltcGxlQm94U2hhZG93Q2hlY2tib3ggPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0ucmFkaW8pXG4gICAgICAgICAgICAuc2V0TmFtZSgnc2hhZG93VHlwZScpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVCb3hTaGFkb3dUeXBlKVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICB0aGlzLmFkdmFuY2VkQm94U2hhZG93Q2hlY2tib3ggPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0ucmFkaW8pXG4gICAgICAgICAgICAuc2V0TmFtZSgnc2hhZG93VHlwZScpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVCb3hTaGFkb3dUeXBlKVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICBpZiAodGhpcy5hZHZhbmNlZEVuYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZWRCb3hTaGFkb3dDaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2ltcGxlQm94U2hhZG93Q2hlY2tib3guY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNoYWRvd0JveFR5cGVDb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnZmxleC1kaXJlY3Rpb24nXSwgRmxleERpcmVjdGlvbkVudW0uY29sdW1uKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW1bJ2FsaWduLWl0ZW1zJ10sIEFsaWduRmxleEl0ZW1zRW51bS5zdHJldGNoKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdTaW1wbGUgb3IgQWR2YW5jZWQgU2hhZG93IEJveCcpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdTaW1wbGUgLT4nKVxuICAgICAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggM3B4IDBweCAyMHB4JylcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuc2ltcGxlQm94U2hhZG93Q2hlY2tib3gpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdBZHZhbmNlZCAtPicpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAzcHggMHB4IDIwcHgnKVxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5hZHZhbmNlZEJveFNoYWRvd0NoZWNrYm94KVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgIH1cblxuICAgIHByaXZhdGUgYnVpbGRCYXNpY1NoYWRvd0JveENvbnRhaW5lcnMoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlQmFzaWNQcm9wZXJ0eSA9IHRoaXMudXBkYXRlQmFzaWNQcm9wZXJ0eS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuY29sb3JJbnB1dCA9IG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS5jb2xvcilcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMudXBkYXRlQmFzaWNQcm9wZXJ0eSlcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgdGhpcy5pbnNldFNlbGVjdG9yID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLmNoZWNrYm94KVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy51cGRhdGVCYXNpY1Byb3BlcnR5KVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICB0aGlzLmhvcml6b250YWxPZmZzZXRJbnB1dCA9IG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS5udW1iZXIpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLnVwZGF0ZUJhc2ljUHJvcGVydHkpXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIHRoaXMuaG9yaXpvbnRhbE9mZnNldFVuaXRTZWxlY3RvciA9IG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihVbml0c0VudW0pXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVCYXNpY1Byb3BlcnR5KVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICB0aGlzLnZlcnRpY2FsT2Zmc2V0SW5wdXQgPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0ubnVtYmVyKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy51cGRhdGVCYXNpY1Byb3BlcnR5KVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICB0aGlzLnZlcnRpY2FsT2Zmc2V0VW5pdFNlbGVjdG9yID0gbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKFVuaXRzRW51bSlcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnVwZGF0ZUJhc2ljUHJvcGVydHkpXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIHRoaXMuYmx1clJhZGl1c0lucHV0ID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLm51bWJlcilcbiAgICAgICAgICAgIC5zZXRNaW4oMClcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMudXBkYXRlQmFzaWNQcm9wZXJ0eSlcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgdGhpcy5ibHVyUmFkaXVzVW5pdFNlbGVjdG9yID0gbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKFVuaXRzRW51bSlcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnVwZGF0ZUJhc2ljUHJvcGVydHkpXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIHRoaXMuc3ByZWFkUmFkaXVzSW5wdXQgPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0ubnVtYmVyKVxuICAgICAgICAgICAgLnNldE1pbigwKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy51cGRhdGVCYXNpY1Byb3BlcnR5KVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICB0aGlzLnNwcmVhZFJhZGl1c1VuaXRTZWxlY3RvciA9IG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihVbml0c0VudW0pXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVCYXNpY1Byb3BlcnR5KVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICB0aGlzLmNvbG9ySW5zZXRDb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnZmxleC1kaXJlY3Rpb24nXSwgRmxleERpcmVjdGlvbkVudW0uY29sdW1uKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW1bJ2FsaWduLWl0ZW1zJ10sIEFsaWduRmxleEl0ZW1zRW51bS5zdHJldGNoKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdIb3Jpem9udGFsIE9mZnNldCcpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuY29sb3JJbnB1dClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0luc2V0IC0+JylcbiAgICAgICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDNweCAwcHggMjBweCcpXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmluc2V0U2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgdGhpcy5ob3Jpem9udGFsT2Zmc2V0Q29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW1bJ2ZsZXgtZGlyZWN0aW9uJ10sIEZsZXhEaXJlY3Rpb25FbnVtLmNvbHVtbilcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydhbGlnbi1pdGVtcyddLCBBbGlnbkZsZXhJdGVtc0VudW0uc3RyZXRjaClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnSG9yaXpvbnRhbCBPZmZzZXQnKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmhvcml6b250YWxPZmZzZXRJbnB1dClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5ob3Jpem9udGFsT2Zmc2V0VW5pdFNlbGVjdG9yKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIHRoaXMudmVydGljYWxPZmZzZXRDb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnZmxleC1kaXJlY3Rpb24nXSwgRmxleERpcmVjdGlvbkVudW0uY29sdW1uKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW1bJ2FsaWduLWl0ZW1zJ10sIEFsaWduRmxleEl0ZW1zRW51bS5zdHJldGNoKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdWZXJ0aWNhbCBPZmZzZXQnKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLnZlcnRpY2FsT2Zmc2V0SW5wdXQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMudmVydGljYWxPZmZzZXRVbml0U2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgdGhpcy5ibHVyUmFkaXVzQ29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW1bJ2ZsZXgtZGlyZWN0aW9uJ10sIEZsZXhEaXJlY3Rpb25FbnVtLmNvbHVtbilcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydhbGlnbi1pdGVtcyddLCBBbGlnbkZsZXhJdGVtc0VudW0uc3RyZXRjaClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnQmx1ciBSYWRpdXMnKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmJsdXJSYWRpdXNJbnB1dClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5ibHVyUmFkaXVzVW5pdFNlbGVjdG9yKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIHRoaXMuc3ByZWFkUmFkaXVzQ29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW1bJ2ZsZXgtZGlyZWN0aW9uJ10sIEZsZXhEaXJlY3Rpb25FbnVtLmNvbHVtbilcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydhbGlnbi1pdGVtcyddLCBBbGlnbkZsZXhJdGVtc0VudW0uc3RyZXRjaClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnU3ByZWFkIFJhZGl1cycpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuc3ByZWFkUmFkaXVzSW5wdXQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuc3ByZWFkUmFkaXVzVW5pdFNlbGVjdG9yKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgIH1cblxuICAgIHByaXZhdGUgYnVpbGRDb21wb25lbnRzQ29udGFpbmVyKCkge1xuICAgICAgICBpZiAodGhpcy5hZHZhbmNlZEVuYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c0NvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW1bJ2ZsZXgtZGlyZWN0aW9uJ10sIEZsZXhEaXJlY3Rpb25FbnVtLmNvbHVtbilcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnYWxpZ24taXRlbXMnXSwgQWxpZ25GbGV4SXRlbXNFbnVtLnN0cmV0Y2gpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uYm9yZGVyLCAnMXB4IHNvbGlkICM0Q0FGNTAnKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLnBhZGRpbmcsICczcHgnKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdCb3ggU2hhZG93JylcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuc2hhZG93Qm94VHlwZUNvbnRhaW5lcilcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5hZHZhbmNlZFNoYWRvd0JveENvbnRhaW5lcilcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzQ29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnZmxleC1kaXJlY3Rpb24nXSwgRmxleERpcmVjdGlvbkVudW0uY29sdW1uKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydhbGlnbi1pdGVtcyddLCBBbGlnbkZsZXhJdGVtc0VudW0uc3RyZXRjaClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5ib3JkZXIsICcxcHggc29saWQgIzRDQUY1MCcpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ucGFkZGluZywgJzNweCcpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0JveCBTaGFkb3cnKVxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5zaGFkb3dCb3hUeXBlQ29udGFpbmVyKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmNvbG9ySW5zZXRDb250YWluZXIpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuaG9yaXpvbnRhbE9mZnNldENvbnRhaW5lcilcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy52ZXJ0aWNhbE9mZnNldENvbnRhaW5lcilcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5ibHVyUmFkaXVzQ29udGFpbmVyKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLnNwcmVhZFJhZGl1c0NvbnRhaW5lcilcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBidWlsZEFkdmFuY2VkU2hhZG93Qm94Q29udGFpbmVyKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZUFkdmFuY2VkUHJvcGVydHkgPSB0aGlzLnVwZGF0ZUFkdmFuY2VkUHJvcGVydHkuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmFkdmFuY2VkU2hhZG93Qm94VGV4dEFyZWEgPSBuZXcgVGV4dGFyZWFCdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLnJlc2l6ZSwgJ3ZlcnRpY2FsJylcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMudXBkYXRlQWR2YW5jZWRQcm9wZXJ0eSlcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgdGhpcy5hZHZhbmNlZFNoYWRvd0JveENvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydmbGV4LWRpcmVjdGlvbiddLCBGbGV4RGlyZWN0aW9uRW51bS5jb2x1bW4pXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnYWxpZ24taXRlbXMnXSwgQWxpZ25GbGV4SXRlbXNFbnVtLnN0cmV0Y2gpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0FkdmFuY2VkIEJveCBTaGFkb3cnKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnZmxleC1kaXJlY3Rpb24nXSwgRmxleERpcmVjdGlvbkVudW0uY29sdW1uKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydhbGlnbi1pdGVtcyddLCBBbGlnbkZsZXhJdGVtc0VudW0uc3RyZXRjaClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5hZHZhbmNlZFNoYWRvd0JveFRleHRBcmVhKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgIH1cblxuICAgIHByaXZhdGUgc2V0Qm94U2hhZG93VmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpIHtcbiAgICAgICAgY29uc3QgaW5pdGlhbFZhbHVlcyA9IHRoaXMuZ2V0SW5pdGlhbFZhbHVlcygpO1xuXG4gICAgICAgIGlmIChpbml0aWFsVmFsdWVzLmluc2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zZXRTZWxlY3Rvci5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29sb3JJbnB1dC52YWx1ZSA9IGNvbG9yVG9IZXgoaW5pdGlhbFZhbHVlcy5jb2xvcik7XG4gICAgICAgIHRoaXMuaG9yaXpvbnRhbE9mZnNldElucHV0LnZhbHVlID0gYCR7cGFyc2VJbnQoaW5pdGlhbFZhbHVlcy5ob3Jpem9udGFsT2Zmc2V0KSB8fCAwfWA7XG4gICAgICAgIHRoaXMuaG9yaXpvbnRhbE9mZnNldFVuaXRTZWxlY3Rvci52YWx1ZSA9IGdldFVuaXQoaW5pdGlhbFZhbHVlcy5ob3Jpem9udGFsT2Zmc2V0KTtcbiAgICAgICAgdGhpcy52ZXJ0aWNhbE9mZnNldElucHV0LnZhbHVlID0gYCR7cGFyc2VJbnQoaW5pdGlhbFZhbHVlcy52ZXJ0aWNhbE9mZnNldCkgfHwgMH1gO1xuICAgICAgICB0aGlzLnZlcnRpY2FsT2Zmc2V0VW5pdFNlbGVjdG9yLnZhbHVlID0gZ2V0VW5pdChpbml0aWFsVmFsdWVzLnZlcnRpY2FsT2Zmc2V0KTtcbiAgICAgICAgdGhpcy5ibHVyUmFkaXVzSW5wdXQudmFsdWUgPSBgJHtwYXJzZUludChpbml0aWFsVmFsdWVzLmJsdXJSYWRpdXMpIHx8IDB9YDtcbiAgICAgICAgdGhpcy5ibHVyUmFkaXVzVW5pdFNlbGVjdG9yLnZhbHVlID0gZ2V0VW5pdChpbml0aWFsVmFsdWVzLmJsdXJSYWRpdXMpO1xuICAgICAgICB0aGlzLnNwcmVhZFJhZGl1c0lucHV0LnZhbHVlID0gYCR7cGFyc2VJbnQoaW5pdGlhbFZhbHVlcy5zcHJlYWRSYWRpdXMpIHx8IDB9YDtcbiAgICAgICAgdGhpcy5zcHJlYWRSYWRpdXNVbml0U2VsZWN0b3IudmFsdWUgPSBnZXRVbml0KGluaXRpYWxWYWx1ZXMuc3ByZWFkUmFkaXVzKTtcblxuICAgICAgICB0aGlzLmFkdmFuY2VkU2hhZG93Qm94VGV4dEFyZWEudmFsdWUgPSB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydib3gtc2hhZG93J107XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVCYXNpY1Byb3BlcnR5KCkge1xuICAgICAgICBpZiAodGhpcy5ob3Jpem9udGFsT2Zmc2V0SW5wdXQudmFsdWUgPT09ICcwJ1xuICAgICAgICAgICAgJiYgdGhpcy52ZXJ0aWNhbE9mZnNldElucHV0LnZhbHVlID09PSAnMCdcbiAgICAgICAgICAgICYmIHRoaXMuYmx1clJhZGl1c0lucHV0LnZhbHVlID09PSAnMCdcbiAgICAgICAgICAgICYmIHRoaXMuc3ByZWFkUmFkaXVzSW5wdXQudmFsdWUgPT09ICcwJ1xuICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2JveC1zaGFkb3cnXSA9ICcnO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaW5zZXQgPSB0aGlzLmluc2V0U2VsZWN0b3IuY2hlY2tlZCA/ICdpbnNldCcgOiAnJztcbiAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmNvbG9ySW5wdXQudmFsdWU7XG4gICAgICAgIGNvbnN0IGhvcml6b250YWxPZmZzZXQgPSB0aGlzLmhvcml6b250YWxPZmZzZXRJbnB1dC52YWx1ZSArIHRoaXMuaG9yaXpvbnRhbE9mZnNldFVuaXRTZWxlY3Rvci52YWx1ZTtcbiAgICAgICAgY29uc3QgdmVydGljYWxPZmZzZXQgPSB0aGlzLnZlcnRpY2FsT2Zmc2V0SW5wdXQudmFsdWUgKyB0aGlzLnZlcnRpY2FsT2Zmc2V0VW5pdFNlbGVjdG9yLnZhbHVlO1xuICAgICAgICBjb25zdCBibHVyUmFkaXVzID0gdGhpcy5ibHVyUmFkaXVzSW5wdXQudmFsdWUgKyB0aGlzLmJsdXJSYWRpdXNVbml0U2VsZWN0b3IudmFsdWU7XG4gICAgICAgIGNvbnN0IHNwcmVhZFJhZGl1cyA9IHRoaXMuc3ByZWFkUmFkaXVzSW5wdXQudmFsdWUgKyB0aGlzLnNwcmVhZFJhZGl1c1VuaXRTZWxlY3Rvci52YWx1ZTtcblxuICAgICAgICBjb25zdCBib3hTaGFkb3dWYWx1ZSA9IGAke2hvcml6b250YWxPZmZzZXR9ICR7dmVydGljYWxPZmZzZXR9ICR7Ymx1clJhZGl1c30gJHtzcHJlYWRSYWRpdXN9ICR7Y29sb3J9ICR7aW5zZXR9YFxuXG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2JveC1zaGFkb3cnXSA9IGJveFNoYWRvd1ZhbHVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlQWR2YW5jZWRQcm9wZXJ0eSgpIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYm94LXNoYWRvdyddID0gdGhpcy5hZHZhbmNlZFNoYWRvd0JveFRleHRBcmVhLnZhbHVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlQm94U2hhZG93VHlwZSgpIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYm94LXNoYWRvdyddID0gJyc7XG5cbiAgICAgICAgaWYgKHRoaXMuYWR2YW5jZWRCb3hTaGFkb3dDaGVja2JveC5jaGVja2VkKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNDb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5jb2xvckluc2V0Q29udGFpbmVyKTtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c0NvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLmhvcml6b250YWxPZmZzZXRDb250YWluZXIpO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMudmVydGljYWxPZmZzZXRDb250YWluZXIpO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuYmx1clJhZGl1c0NvbnRhaW5lcik7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNDb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5zcHJlYWRSYWRpdXNDb250YWluZXIpO1xuXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5hZHZhbmNlZFNoYWRvd0JveENvbnRhaW5lcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNDb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5hZHZhbmNlZFNoYWRvd0JveENvbnRhaW5lcik7XG5cbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbG9ySW5zZXRDb250YWluZXIpO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaG9yaXpvbnRhbE9mZnNldENvbnRhaW5lcik7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy52ZXJ0aWNhbE9mZnNldENvbnRhaW5lcik7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5ibHVyUmFkaXVzQ29udGFpbmVyKTtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnNwcmVhZFJhZGl1c0NvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEluaXRpYWxWYWx1ZXMoKSB7XG4gICAgICAgIGxldCBib3hTaGFkb3dTdHJpbmcgPSB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydib3gtc2hhZG93J107XG5cbiAgICAgICAgbGV0IGNvbG9yLCBpbnNldDtcbiAgICAgICAgbGV0IHNpemVzQXJyID0gW107XG5cbiAgICAgICAgaWYgKGJveFNoYWRvd1N0cmluZykge1xuICAgICAgICAgICAgaWYgKGJveFNoYWRvd1N0cmluZy5zcGxpdCgnLCcpLmZpbHRlcigoZWxlKSA9PiBlbGUuaW5jbHVkZXMoJ3JnYicpKS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZHZhbmNlZEVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoYm94U2hhZG93U3RyaW5nLnNwbGl0KCcsJykubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkdmFuY2VkRW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYm94U2hhZG93U3RyaW5nLmluY2x1ZGVzKCdyZ2InKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluaXRpYWxJbmRleE9mUkdCID0gYm94U2hhZG93U3RyaW5nLmluZGV4T2YoJ3JnYicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpbmFsSW5kZXhPZlJHQiA9IGJveFNoYWRvd1N0cmluZy5pbmRleE9mKCcpJylcblxuICAgICAgICAgICAgICAgIGNvbG9yID0gYm94U2hhZG93U3RyaW5nLnNsaWNlKGluaXRpYWxJbmRleE9mUkdCLCBmaW5hbEluZGV4T2ZSR0IgKyAxKVxuXG4gICAgICAgICAgICAgICAgYm94U2hhZG93U3RyaW5nID0gYm94U2hhZG93U3RyaW5nLnJlcGxhY2UoY29sb3IsICcnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgYm94U2hhZG93QXJyID0gYm94U2hhZG93U3RyaW5nLnNwbGl0KCcgJyk7XG5cbiAgICAgICAgICAgIGluc2V0ID0gYm94U2hhZG93QXJyLmZpbmQoKGVsZSkgPT4gZWxlID09PSAnaW5zZXQnKVxuXG4gICAgICAgICAgICBzaXplc0FyciA9IGJveFNoYWRvd0Fyci5maWx0ZXIoKGVsZSkgPT4gIWlzTmFOKHBhcnNlSW50KGVsZSkpKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgaW5zZXQsXG4gICAgICAgICAgICBob3Jpem9udGFsT2Zmc2V0OiBzaXplc0FyclswXSxcbiAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0OiBzaXplc0FyclsxXSxcbiAgICAgICAgICAgIGJsdXJSYWRpdXM6IHNpemVzQXJyWzJdLFxuICAgICAgICAgICAgc3ByZWFkUmFkaXVzOiBzaXplc0FyclszXSxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBjbGFzc05hbWVVcGRhdGVkKG5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0ID0gQ3NzU3R5bGVTaGVldC5nZXRSdWxlU3R5bGVzKG5hbWUpO1xuICAgICAgICB0aGlzLmdldEluaXRpYWxWYWx1ZXMoKTtcbiAgICAgICAgdGhpcy5zZXRCb3hTaGFkb3dWYWx1ZXNBY2NvcmRpbmdUb0NsYXNzKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IEFycmF5U2VsZWN0b3JCb2R5SW50ZXJmYWNlIGZyb20gJy4uL2ludGVyZmFjZXMvc2VsZWN0b3ItZnJvbS1hcnJheS1ib2R5LmludGVyZmFjZSc7XG5cbmltcG9ydCBDbGFzc0NoYW5nZVB1Ymxpc2hlciBmcm9tICcuLi9wdWJsaXNoZXJzL0NsYXNzQ2hhbmdlUHVibGlzaGVyJztcbmltcG9ydCBDc3NTdHlsZVNoZWV0IGZyb20gJy4uLy4uL2Nzcy1zdHlsZXNoZWV0L2Nzcy1zdHlsZXNoZWV0JztcbmltcG9ydCBSYXdIVE1MQ29ucG9uZW50IGZyb20gJy4uLy4uL2h0bWwtY29tcG9uZW50cy9SYXdIVE1MQ29tcG9uZW50JztcblxuaW1wb3J0IENvbnRhaW5lckJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0NvbnRhaW5lckJ1aWxkZXInO1xuaW1wb3J0IExhYmVsQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvTGFiZWxCdWlsZGVyJztcbmltcG9ydCBTZWxlY3RvckZyb21BcnJheUJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL1NlbGVjdG9yRnJvbUFycmF5QnVpbGRlcic7XG5pbXBvcnQgSW5wdXRCdWlsZGVyIGZyb20gJy4uL21vZGVscy9JbnB1dEJ1aWxkZXInO1xuaW1wb3J0IEJ1dHRvbkJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0J1dHRvbkJ1aWxkZXInO1xuaW1wb3J0IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyIGZyb20gJy4uL21vZGVscy9TZWxlY3RvckZyb21FbnVtQnVpbGRlcic7XG5pbXBvcnQgVGV4dGFyZWFCdWlsZGVyIGZyb20gJy4uL21vZGVscy9UZXh0YXJlYUJ1aWxkZXInO1xuXG5pbXBvcnQgeyBTdHlsZU5hbWVFbnVtIH0gZnJvbSAnLi4vZW51bXMvc3R5bGUtbmFtZS5lbnVtJztcbmltcG9ydCB7IERpc3BsYXlUeXBlc0VudW0gfSBmcm9tICcuLi9lbnVtcy9kaXNwbGF5LXR5cGVzLmVudW0nO1xuaW1wb3J0IHsgRmxleERpcmVjdGlvbkVudW0gfSBmcm9tICcuLi9lbnVtcy9mbGV4LWRpcmVjdGlvbi5lbnVtJztcbmltcG9ydCB7IElucHV0VHlwZUVudW0gfSBmcm9tICcuLi9lbnVtcy9pbnB1dC10eXBlLmVudW0nO1xuaW1wb3J0IHsgR2VuZXJhbFBzZXVkb2NsYXNzRW51bSB9IGZyb20gJy4uL2VudW1zL2dlbmVyYWwtcHNldWRvY2xhc3MuZW51bSc7XG5cbi8vIFRPRE86IHZlciBlc3RpbG9zIGVzcGVjaWZpY29zIHBhcmEgbG9zIGFuY29yIGVsZW1lbnRzIChsaW5rcyk6XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuLy8gaHR0cHM6Ly93d3cuYXByZW5kZXJhcHJvZ3JhbWFyLmNvbS9pbmRleC5waHA/b3B0aW9uPWNvbV9jb250ZW50JnZpZXc9YXJ0aWNsZSZpZD03NTI6cHNldWRvY2xhc2VzLWNzcy1saW5rLXZpc2l0ZWQtZm9jdXMtaG92ZXIteS1hY3RpdmUtZXN0aWxvcy15LWVmZWN0b3MtZW4tbGlua3MtcHJvcGllZGFkLW91dGxpbmUtY3UwMTA0N2QmY2F0aWQ9NzUmSXRlbWlkPTIwM1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGFzc01hbmFnZW1lbnRDb21wb25lbnQge1xuICAgIHByaXZhdGUgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcbiAgICBwcml2YXRlIGRvbUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSBjbGFzc05hbWVzOiBBcnJheVNlbGVjdG9yQm9keUludGVyZmFjZVtdO1xuICAgIHByaXZhdGUgYXBwZW5kYWJsZUNsYXNzTmFtZXM6IEFycmF5U2VsZWN0b3JCb2R5SW50ZXJmYWNlW107XG4gICAgcHJpdmF0ZSBjbGFzc2VzU2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIHByaXZhdGUgaW5pdGlhbENsYXNzTmFtZTogc3RyaW5nO1xuXG4gICAgcHJpdmF0ZSBuZXdDbGFzc05hbWVJbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgICBwcml2YXRlIG5ld1BzZXVkb2NsYXNzU2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIHByaXZhdGUgZHVwbGljYWJsZUNsYXNzU2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIHByaXZhdGUgYXBwZW5kQ2xhc3NTZWxlY3RvcjogSFRNTFNlbGVjdEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSByZW5hbWVDbGFzc0lucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSBkdXBsaWNhYmxlQ2xhc3NOYW1lczogQXJyYXlTZWxlY3RvckJvZHlJbnRlcmZhY2VbXTtcbiAgICBwcml2YXRlIG5ld0R1cGxpY2FkZWRDbGFzc05hbWVJbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgICBwcml2YXRlIGR1cGxpY2F0ZVBzZXVkb2NsYXNzU2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSBjbGFzc2VzU2VsZWN0b3JDb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgYXBwZW5kQ2xhc3NDb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSByYXdDbGFzc1RleHRFZGl0b3I6IFRleHRhcmVhQnVpbGRlcjtcblxuICAgIHByaXZhdGUgcHVibGlzaGVyOiBDbGFzc0NoYW5nZVB1Ymxpc2hlcjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBkb21FbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgICAgICAgcHVibGlzaGVyOiBDbGFzc0NoYW5nZVB1Ymxpc2hlclxuICAgICkge1xuICAgICAgICB0aGlzLnB1Ymxpc2hlciA9IHB1Ymxpc2hlcjtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgICAgICAgdGhpcy5pbml0aWFsQ2xhc3NOYW1lID0gdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdFswXTtcbiAgICAgICAgdGhpcy5wb3B1bGF0ZUNsYXNzZXNMaXN0KCk7XG4gICAgICAgIHRoaXMucG9wdWxhdGVBcHBlbmRhYmxlQ2xhc3NMaXN0KCk7XG4gICAgICAgIHRoaXMucG9wdWxhdGVEdXBsaWNhYmxlQ2xhc3NMaXN0KCk7XG5cbiAgICAgICAgdGhpcy5idWlsZFJhd0NsYXNzVGV4dEVkaXRvcigpO1xuICAgICAgICB0aGlzLnBvcHVsYXRlUmF3Q2xhc3NUZXh0RWRpdG9yKHRoaXMuaW5pdGlhbENsYXNzTmFtZSk7XG5cbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnRzKCk7XG4gICAgfVxuXG4gICAgZ2V0IGNvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xuICAgIH1cblxuICAgIHByaXZhdGUgYnVpbGRSYXdDbGFzc1RleHRFZGl0b3IoKSB7XG4gICAgICAgIHRoaXMucmF3Q2xhc3NUZXh0RWRpdG9yID0gbmV3IFRleHRhcmVhQnVpbGRlcigpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwb3B1bGF0ZVJhd0NsYXNzVGV4dEVkaXRvcihjbGFzc05hbWUpIHtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gQ3NzU3R5bGVTaGVldC5nZXRSdWxlcyhjbGFzc05hbWUpLm1hcCgocnVsZSkgPT4gcnVsZS5jc3NUZXh0KS5qb2luKCdcXG4nKTtcblxuICAgICAgICBsZXQgbW9kaWZpZWRWYWx1ZXMgPSAnJztcblxuICAgICAgICBmb3IgKGNvbnN0IGNoYXIgb2YgdmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAoY2hhciA9PT0gJ3snIHx8IGNoYXIgPT09ICc7JyB8fCBjaGFyID09PSAnfScpIHtcbiAgICAgICAgICAgICAgICBtb2RpZmllZFZhbHVlcyArPSBgJHtjaGFyfVxcbiBgO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtb2RpZmllZFZhbHVlcyArPSBjaGFyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yYXdDbGFzc1RleHRFZGl0b3JcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmhlaWdodCwgJzEwMHB4JylcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydmb250LXNpemUnXSwgJzEwcHgnKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW1bJ3Jlc2l6ZSddLCAndmVydGljYWwnKVxuICAgICAgICAgICAgLnNldFZhbHVlKG1vZGlmaWVkVmFsdWVzKVxuICAgIH1cblxuICAgIHByaXZhdGUgcG9wdWxhdGVDbGFzc2VzTGlzdCgpIHtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lcyA9IFtdXG5cbiAgICAgICAgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5mb3JFYWNoKChjbGFzc0VsZW1lbnROYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBydWxlcyA9IENzc1N0eWxlU2hlZXQuZ2V0UnVsZXMoY2xhc3NFbGVtZW50TmFtZSk7XG5cbiAgICAgICAgICAgIHJ1bGVzLmZvckVhY2goKHJ1bGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGVbJ3NlbGVjdG9yVGV4dCddXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgaWYgKHJ1bGVOYW1lWzBdID09PSAnLicgfHwgcnVsZU5hbWVbMF0gPT09ICcjJykge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHJ1bGVOYW1lLnN1YnN0cmluZygxKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHJ1bGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcbiAgICB9XG5cbiAgICBwcml2YXRlIHBvcHVsYXRlRHVwbGljYWJsZUNsYXNzTGlzdCgpIHtcbiAgICAgICAgY29uc3QgZHVwbGljYWJsZUNsYXNzTmFtZXMgPSBbXVxuXG4gICAgICAgIGNvbnN0IHJ1bGVzID0gQ3NzU3R5bGVTaGVldC5nZXRBbGxSdWxlcygpO1xuXG4gICAgICAgIHJ1bGVzLmZvckVhY2goKHJ1bGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZVsnc2VsZWN0b3JUZXh0J11cbiAgICAgICAgICAgIGxldCB2YWx1ZTogc3RyaW5nO1xuICAgICAgICAgICAgaWYgKHJ1bGVOYW1lWzBdID09PSAnLicgfHwgcnVsZU5hbWVbMF0gPT09ICcjJykge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gcnVsZU5hbWUuc3Vic3RyaW5nKDEpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gJ2JvZHknKSB7XG4gICAgICAgICAgICAgICAgZHVwbGljYWJsZUNsYXNzTmFtZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHJ1bGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuZHVwbGljYWJsZUNsYXNzTmFtZXMgPSBkdXBsaWNhYmxlQ2xhc3NOYW1lcztcbiAgICB9XG5cbiAgICBwcml2YXRlIHBvcHVsYXRlQXBwZW5kYWJsZUNsYXNzTGlzdCgpIHtcbiAgICAgICAgY29uc3QgYXBwZW5kYWJsZUNsYXNzTmFtZXMgPSBbXVxuXG4gICAgICAgIGNvbnN0IHJ1bGVzID0gQ3NzU3R5bGVTaGVldC5nZXRBbGxSdWxlcygpO1xuXG4gICAgICAgIHJ1bGVzLmZvckVhY2goKHJ1bGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZVsnc2VsZWN0b3JUZXh0J11cbiAgICAgICAgICAgIGxldCB2YWx1ZTogc3RyaW5nO1xuICAgICAgICAgICAgaWYgKHJ1bGVOYW1lWzBdID09PSAnLicgfHwgcnVsZU5hbWVbMF0gPT09ICcjJykge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gcnVsZU5hbWUuc3Vic3RyaW5nKDEpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gJ2JvZHknICYmICF0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGFwcGVuZGFibGVDbGFzc05hbWVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBydWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmFwcGVuZGFibGVDbGFzc05hbWVzID0gYXBwZW5kYWJsZUNsYXNzTmFtZXM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRDb21wb25lbnRzKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZUNsYXNzTmFtZSA9IHRoaXMudXBkYXRlQ2xhc3NOYW1lLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY3JlYXRlTmV3Q2xhc3NOYW1lID0gdGhpcy5jcmVhdGVOZXdDbGFzc05hbWUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW1vdmVDbGFzcyA9IHRoaXMucmVtb3ZlQ2xhc3MuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VDbGFzc05hbWUgPSB0aGlzLmNoYW5nZUNsYXNzTmFtZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFwcGVuZENsYXNzID0gdGhpcy5hcHBlbmRDbGFzcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmR1cGxpY2F0ZUNsYXNzID0gdGhpcy5kdXBsaWNhdGVDbGFzcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNoYW5nZUZ1bGxDbGFzcyA9IHRoaXMuY2hhbmdlRnVsbENsYXNzLmJpbmQodGhpcyk7XG5cbiAgICAgICAgLy8gQ2xhc3Mgc2VsZWN0b3IgYW5kIHJlbW92ZSBjbGFzc1xuICAgICAgICB0aGlzLmNsYXNzZXNTZWxlY3RvciA9IG5ldyBTZWxlY3RvckZyb21BcnJheUJ1aWxkZXIodGhpcy5jbGFzc05hbWVzKVxuICAgICAgICAgICAgLnNlbGVjdE9wdGlvbih0aGlzLmluaXRpYWxDbGFzc05hbWUpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVDbGFzc05hbWUpXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIGNvbnN0IHJlbW92ZUNsYXNzQnV0dG9uID0gbmV3IEJ1dHRvbkJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldElubmVyVGV4dCgnUmVtb3ZlJylcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucmVtb3ZlQ2xhc3MpXG4gICAgICAgICAgICAuYnVpbGQoKTtcblxuICAgICAgICB0aGlzLmNsYXNzZXNTZWxlY3RvckNvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydmbGV4LWRpcmVjdGlvbiddLCBGbGV4RGlyZWN0aW9uRW51bS5jb2x1bW4pXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5jbGFzc2VzU2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHJlbW92ZUNsYXNzQnV0dG9uKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYnVpbGQoKTtcblxuICAgICAgICAvLyBSZW5hbWUgQ2xhc3NcbiAgICAgICAgdGhpcy5yZW5hbWVDbGFzc0lucHV0ID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLnRleHQpXG4gICAgICAgICAgICAuc2V0UGxhY2Vob2xkZXIoJ05ldyBjbGFzcyBuYW1lJylcbiAgICAgICAgICAgIC5idWlsZCgpO1xuXG4gICAgICAgIGNvbnN0IHJlbmFtZUNsYXNzQnV0dG9uID0gbmV3IEJ1dHRvbkJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldElubmVyVGV4dCgnQ2hhbmdlJylcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2hhbmdlQ2xhc3NOYW1lKVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG5cbiAgICAgICAgY29uc3QgcmVuYW1lQ2xhc3NDb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnZmxleC1kaXJlY3Rpb24nXSwgRmxleERpcmVjdGlvbkVudW0uY29sdW1uKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdDaGFuZ2UgQ2xhc3MgTmFtZScpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydmbGV4LWRpcmVjdGlvbiddLCBGbGV4RGlyZWN0aW9uRW51bS5yb3cpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMucmVuYW1lQ2xhc3NJbnB1dClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQocmVuYW1lQ2xhc3NCdXR0b24pXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBDbGFzc1xuICAgICAgICB0aGlzLm5ld0NsYXNzTmFtZUlucHV0ID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLnRleHQpXG4gICAgICAgICAgICAuc2V0UGxhY2Vob2xkZXIoJ0NsYXNzIG5hbWUnKVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG5cbiAgICAgICAgdGhpcy5uZXdQc2V1ZG9jbGFzc1NlbGVjdG9yID0gbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKEdlbmVyYWxQc2V1ZG9jbGFzc0VudW0pXG4gICAgICAgICAgICAuc2VsZWN0T3B0aW9uKEdlbmVyYWxQc2V1ZG9jbGFzc0VudW0ubm9uZSlcbiAgICAgICAgICAgIC5idWlsZCgpO1xuXG4gICAgICAgIGNvbnN0IGNyZWF0ZUNsYXNzQnV0dG9uID0gbmV3IEJ1dHRvbkJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldElubmVyVGV4dCgnQ3JlYXRlJylcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY3JlYXRlTmV3Q2xhc3NOYW1lKVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG5cbiAgICAgICAgY29uc3QgbmV3Q2xhc3NDb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnZmxleC1kaXJlY3Rpb24nXSwgRmxleERpcmVjdGlvbkVudW0uY29sdW1uKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdDcmVhdGUgTmV3IENsYXNzJylcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5uZXdDbGFzc05hbWVJbnB1dClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5uZXdQc2V1ZG9jbGFzc1NlbGVjdG9yKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChjcmVhdGVDbGFzc0J1dHRvbilcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG5cbiAgICAgICAgLy8gRHVwbGljYXRlIGNsYXNzXG4gICAgICAgIHRoaXMuZHVwbGljYWJsZUNsYXNzU2VsZWN0b3IgPSBuZXcgU2VsZWN0b3JGcm9tQXJyYXlCdWlsZGVyKHRoaXMuZHVwbGljYWJsZUNsYXNzTmFtZXMpXG4gICAgICAgICAgICAuc2VsZWN0T3B0aW9uKHRoaXMuZHVwbGljYWJsZUNsYXNzTmFtZXNbMF0udmFsdWUpXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIHRoaXMubmV3RHVwbGljYWRlZENsYXNzTmFtZUlucHV0ID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLnRleHQpXG4gICAgICAgICAgICAuc2V0UGxhY2Vob2xkZXIoJ0R1cGxpY2F0ZWQgY2xhc3MgbmFtZScpXG4gICAgICAgICAgICAuYnVpbGQoKTtcblxuICAgICAgICBjb25zdCBkdXBsaWNhdGVDbGFzc0J1dHRvbiA9IG5ldyBCdXR0b25CdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0R1cGxpY2F0ZScpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmR1cGxpY2F0ZUNsYXNzKVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICB0aGlzLmR1cGxpY2F0ZVBzZXVkb2NsYXNzU2VsZWN0b3IgPSBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIoR2VuZXJhbFBzZXVkb2NsYXNzRW51bSlcbiAgICAgICAgICAgIC5zZWxlY3RPcHRpb24oR2VuZXJhbFBzZXVkb2NsYXNzRW51bS5ub25lKVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG5cbiAgICAgICAgY29uc3QgZHVwbGljYXRlQ2xhc3NDb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnZmxleC1kaXJlY3Rpb24nXSwgRmxleERpcmVjdGlvbkVudW0uY29sdW1uKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdEdXBsaWNhdGUgQ2xhc3MnKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICAgICAgbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydmbGV4LWRpcmVjdGlvbiddLCBGbGV4RGlyZWN0aW9uRW51bS5yb3cpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmR1cGxpY2FibGVDbGFzc1NlbGVjdG9yKVxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5kdXBsaWNhdGVQc2V1ZG9jbGFzc1NlbGVjdG9yKVxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgICAgIG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnZmxleC1kaXJlY3Rpb24nXSwgRmxleERpcmVjdGlvbkVudW0ucm93KVxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5uZXdEdXBsaWNhZGVkQ2xhc3NOYW1lSW5wdXQpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChkdXBsaWNhdGVDbGFzc0J1dHRvbilcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgLy8gQXBwZW5kIGNsYXNzXG4gICAgICAgIGlmICh0aGlzLmFwcGVuZGFibGVDbGFzc05hbWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuYXBwZW5kQ2xhc3NTZWxlY3RvciA9IG5ldyBTZWxlY3RvckZyb21BcnJheUJ1aWxkZXIodGhpcy5hcHBlbmRhYmxlQ2xhc3NOYW1lcylcbiAgICAgICAgICAgICAgICAuc2VsZWN0T3B0aW9uKHRoaXMuYXBwZW5kYWJsZUNsYXNzTmFtZXNbMF0udmFsdWUpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICAgICAgY29uc3QgYXBwZW5kQ2xhc3NCdXR0b24gPSBuZXcgQnV0dG9uQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnQXBwZW5kJylcbiAgICAgICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmFwcGVuZENsYXNzKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgICAgIHRoaXMuYXBwZW5kQ2xhc3NDb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydmbGV4LWRpcmVjdGlvbiddLCBGbGV4RGlyZWN0aW9uRW51bS5jb2x1bW4pXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0FwcGVuZCBDbGFzcycpXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChcbiAgICAgICAgICAgICAgICAgICAgbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW1bJ2ZsZXgtZGlyZWN0aW9uJ10sIEZsZXhEaXJlY3Rpb25FbnVtLnJvdylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmFwcGVuZENsYXNzU2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQoYXBwZW5kQ2xhc3NCdXR0b24pXG4gICAgICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gRWRpdCBmdWxsIGNsYXNzXG4gICAgICAgIGNvbnN0IHJhd0NsYXNzQ2hhbmdlQnV0dG9uID0gbmV3IEJ1dHRvbkJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldElubmVyVGV4dCgnQ2hhbmdlIFJhdyBDbGFzcycpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNoYW5nZUZ1bGxDbGFzcylcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgY29uc3QgcmF3Q2xhc3NFZGl0b3IgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnZmxleC1kaXJlY3Rpb24nXSwgRmxleERpcmVjdGlvbkVudW0uY29sdW1uKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdSYXcgQ2xhc3MgRWRpdG9yJylcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgICAgIG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnZmxleC1kaXJlY3Rpb24nXSwgRmxleERpcmVjdGlvbkVudW0uY29sdW1uKVxuICAgICAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS53aWR0aCwgJzEwMCUnKVxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW1bJ2ZsZXgtZGlyZWN0aW9uJ10sIEZsZXhEaXJlY3Rpb25FbnVtLmNvbHVtbilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLndpZHRoLCAnMTAwJScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5yYXdDbGFzc1RleHRFZGl0b3IuYnVpbGQoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChyYXdDbGFzc0NoYW5nZUJ1dHRvbilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgLy8gTWFpbiBjb250YWluZXJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5ib3JkZXIsICcxcHggc29saWQgIzRDQUY1MCcpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5wYWRkaW5nLCAnM3B4JylcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnQ2xhc3NlcyBNYW5hZ2VtZW50JylcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuY2xhc3Nlc1NlbGVjdG9yQ29udGFpbmVyKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKHJlbmFtZUNsYXNzQ29udGFpbmVyKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ld0NsYXNzQ29udGFpbmVyKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKGR1cGxpY2F0ZUNsYXNzQ29udGFpbmVyKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkSWZEZWZpbmVkKHRoaXMuYXBwZW5kQ2xhc3NDb250YWluZXIpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQocmF3Q2xhc3NFZGl0b3IpXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlQ2xhc3NOYW1lKCkge1xuICAgICAgICB0aGlzLnBvcHVsYXRlUmF3Q2xhc3NUZXh0RWRpdG9yKHRoaXMuY2xhc3Nlc1NlbGVjdG9yLnZhbHVlKTtcbiAgICAgICAgdGhpcy5wdWJsaXNoZXIubm90aWZ5Q2xhc3NOYW1lKHRoaXMuY2xhc3Nlc1NlbGVjdG9yLnZhbHVlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZU5ld0NsYXNzTmFtZSgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZTogc3RyaW5nID0gdGhpcy5uZXdDbGFzc05hbWVJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHBzZXVkb2NsYXNzID0gdGhpcy5uZXdQc2V1ZG9jbGFzc1NlbGVjdG9yLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgY29tcGxldGVDc3NOYW1lOiBzdHJpbmcgPVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSArIChwc2V1ZG9jbGFzcyAhPT0gJycgJiYgcHNldWRvY2xhc3MgIT09ICdub25lJyA/IGA6JHtwc2V1ZG9jbGFzc31gIDogJycpO1xuXG4gICAgICAgICAgICBpZiAoY2xhc3NOYW1lID09PSAnJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2xhc3MgbmFtZSBjYW4gbm90IGJlIGFuIGVtcHR5IHN0cmluZycpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsYXNzTmFtZVswXSkpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDbGFzcyBuYW1lIG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlcicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBmb3VuZEJhc2VSdWxlID0gQ3NzU3R5bGVTaGVldC5nZXRSdWxlSW5kZXgoY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IGZvdW5kUnVsZVdpdGhQc2V1ZG9jbGFzcyA9IENzc1N0eWxlU2hlZXQuZ2V0UnVsZUluZGV4KGNvbXBsZXRlQ3NzTmFtZSk7XG5cbiAgICAgICAgICAgIGxldCBjbGFzc05hbWVOb3RGb3VuZEZvclRoaXNFbGVtZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuZm9yRWFjaCgoY24pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY24gPT09IGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWVOb3RGb3VuZEZvclRoaXNFbGVtZW50ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgaWYgKGZvdW5kQmFzZVJ1bGUgPj0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChjbGFzc05hbWVOb3RGb3VuZEZvclRoaXNFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2xhc3MgbmFtZSBhbHJlYWR5IGV4aXN0cyBmb3IgYW5vdGhlciBlbGVtZW50Jyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZvdW5kUnVsZVdpdGhQc2V1ZG9jbGFzcyA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NsYXNzIG5hbWUgYWxyZWFkeSBleGlzdHMnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIENzc1N0eWxlU2hlZXQuaW5zZXJ0UnVsZShgLiR7Y29tcGxldGVDc3NOYW1lfSB7fWApO1xuXG4gICAgICAgICAgICBjb25zdCBuZXdPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIG5ld09wdGlvbi50ZXh0ID0gYC4ke2NvbXBsZXRlQ3NzTmFtZX1gO1xuICAgICAgICAgICAgbmV3T3B0aW9uLnZhbHVlID0gY29tcGxldGVDc3NOYW1lO1xuXG4gICAgICAgICAgICB0aGlzLmNsYXNzZXNTZWxlY3Rvci5hcHBlbmRDaGlsZChuZXdPcHRpb24pO1xuXG4gICAgICAgICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgICAgICAgdGhpcy5jbGFzc2VzU2VsZWN0b3IuY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZDogSFRNTE9wdGlvbkVsZW1lbnQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQudmFsdWUgPT09IG5ld09wdGlvbi52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMubmV3Q2xhc3NOYW1lSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgIHRoaXMuY2xhc3Nlc1NlbGVjdG9yLnNlbGVjdGVkSW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2xhc3NOYW1lKCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBhbGVydChlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgcmVtb3ZlQ2xhc3MoKSB7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGAke3RoaXMuY2xhc3Nlc1NlbGVjdG9yLnZhbHVlfWApO1xuICAgICAgICBDc3NTdHlsZVNoZWV0LnJlbW92ZVJ1bGUoYCR7dGhpcy5jbGFzc2VzU2VsZWN0b3IudmFsdWV9YCk7XG4gICAgICAgIHRoaXMuY2xhc3Nlc1NlbGVjdG9yLm9wdGlvbnMucmVtb3ZlKHRoaXMuY2xhc3Nlc1NlbGVjdG9yLnNlbGVjdGVkSW5kZXgpO1xuXG4gICAgICAgIGlmICh0aGlzLmNsYXNzZXNTZWxlY3Rvci5vcHRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5jbGFzc2VzU2VsZWN0b3JDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgY2hhbmdlQ2xhc3NOYW1lKCkge1xuICAgICAgICBSYXdIVE1MQ29ucG9uZW50Lmluc3RhbmNlcy5mb3JFYWNoKChpbnN0YW5jZSkgPT4ge1xuICAgICAgICAgICAgaW5zdGFuY2UuY2xhc3NMaXN0LnJlcGxhY2UodGhpcy5jbGFzc2VzU2VsZWN0b3IudmFsdWUsIHRoaXMucmVuYW1lQ2xhc3NJbnB1dC52YWx1ZSk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgQ3NzU3R5bGVTaGVldC5jaGFuZ2VSdWxlTmFtZSh0aGlzLmNsYXNzZXNTZWxlY3Rvci52YWx1ZSwgdGhpcy5yZW5hbWVDbGFzc0lucHV0LnZhbHVlKTtcbiAgICAgICAgdGhpcy5wb3B1bGF0ZUNsYXNzZXNMaXN0KCk7XG4gICAgICAgIHRoaXMuY2xhc3Nlc1NlbGVjdG9yLnJlbW92ZSh0aGlzLmNsYXNzZXNTZWxlY3Rvci5zZWxlY3RlZEluZGV4KTtcblxuICAgICAgICB0aGlzLmFwcGVuZE5ld09wdGlvbkVsZW1lbnQodGhpcy5yZW5hbWVDbGFzc0lucHV0LnZhbHVlLCB0aGlzLmNsYXNzZXNTZWxlY3Rvcik7XG5cbiAgICAgICAgdGhpcy5yZW5hbWVDbGFzc0lucHV0LnZhbHVlID0gJyc7XG5cbiAgICAgICAgdGhpcy5wb3B1bGF0ZVJhd0NsYXNzVGV4dEVkaXRvcih0aGlzLmNsYXNzZXNTZWxlY3Rvci52YWx1ZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhcHBlbmRDbGFzcygpIHtcblxuICAgICAgICAvLyBUT0RPOiBzZSBtdWVzdHJhIGxhIGNsYXNlIC5pbnB1dDA6aG92ZXIgcGFyYSBlbCBpbnB1dDAsIHkgbm8gZGViZXJpYS4uLi5cbiAgICAgICAgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5hcHBlbmRDbGFzc1NlbGVjdG9yLnZhbHVlKTtcblxuICAgICAgICB0aGlzLmFwcGVuZE5ld09wdGlvbkVsZW1lbnQodGhpcy5hcHBlbmRDbGFzc1NlbGVjdG9yLnZhbHVlLCB0aGlzLmNsYXNzZXNTZWxlY3Rvcik7XG5cbiAgICAgICAgdGhpcy5hcHBlbmRDbGFzc1NlbGVjdG9yLm9wdGlvbnMucmVtb3ZlKHRoaXMuYXBwZW5kQ2xhc3NTZWxlY3Rvci5zZWxlY3RlZEluZGV4KTtcblxuICAgICAgICBpZiAodGhpcy5hcHBlbmRDbGFzc1NlbGVjdG9yLm9wdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmFwcGVuZENsYXNzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBvcHVsYXRlUmF3Q2xhc3NUZXh0RWRpdG9yKHRoaXMuY2xhc3Nlc1NlbGVjdG9yLnZhbHVlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFwcGVuZE5ld09wdGlvbkVsZW1lbnQob3B0aW9uVmFsdWU6IHN0cmluZywgc2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24udmFsdWUgPSBvcHRpb25WYWx1ZTtcbiAgICAgICAgb3B0aW9uLnRleHQgPSBgLiR7b3B0aW9uVmFsdWV9YDtcblxuICAgICAgICBzZWxlY3Rvci5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICBzZWxlY3Rvci5zZWxlY3RlZEluZGV4ID0gc2VsZWN0b3Iub3B0aW9ucy5sZW5ndGggLSAxO1xuICAgIH1cblxuICAgIHByaXZhdGUgZHVwbGljYXRlQ2xhc3MoKSB7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMubmV3RHVwbGljYWRlZENsYXNzTmFtZUlucHV0LnZhbHVlKTtcblxuICAgICAgICBsZXQgbmV3Q2xhc3NOYW1lO1xuICAgICAgICBpZiAodGhpcy5kdXBsaWNhdGVQc2V1ZG9jbGFzc1NlbGVjdG9yLnZhbHVlICE9PSAnbm9uZScpIHtcbiAgICAgICAgICAgIG5ld0NsYXNzTmFtZSA9IGAke3RoaXMubmV3RHVwbGljYWRlZENsYXNzTmFtZUlucHV0LnZhbHVlfToke3RoaXMuZHVwbGljYXRlUHNldWRvY2xhc3NTZWxlY3Rvci52YWx1ZX1gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3Q2xhc3NOYW1lID0gYCR7dGhpcy5uZXdEdXBsaWNhZGVkQ2xhc3NOYW1lSW5wdXQudmFsdWV9YDtcbiAgICAgICAgfVxuXG4gICAgICAgIENzc1N0eWxlU2hlZXQuZHVwbGljYXRlUnVsZSh0aGlzLmR1cGxpY2FibGVDbGFzc1NlbGVjdG9yLnZhbHVlLCBuZXdDbGFzc05hbWUpO1xuXG4gICAgICAgIHRoaXMuYXBwZW5kTmV3T3B0aW9uRWxlbWVudChuZXdDbGFzc05hbWUsIHRoaXMuY2xhc3Nlc1NlbGVjdG9yKTtcbiAgICAgICAgdGhpcy5hcHBlbmROZXdPcHRpb25FbGVtZW50KG5ld0NsYXNzTmFtZSwgdGhpcy5kdXBsaWNhYmxlQ2xhc3NTZWxlY3Rvcik7XG5cbiAgICAgICAgdGhpcy5uZXdEdXBsaWNhZGVkQ2xhc3NOYW1lSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgdGhpcy5kdXBsaWNhdGVQc2V1ZG9jbGFzc1NlbGVjdG9yLnZhbHVlID0gR2VuZXJhbFBzZXVkb2NsYXNzRW51bS5ub25lO1xuXG4gICAgICAgIHRoaXMucG9wdWxhdGVSYXdDbGFzc1RleHRFZGl0b3IodGhpcy5jbGFzc2VzU2VsZWN0b3IudmFsdWUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2hhbmdlRnVsbENsYXNzKCkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuICAgICAgICAvLyBUT0RPOiBsb3MgdmFsb3JlcyBkZSBsYSB2ZW50YW5hIG5vIHNlIHZhbiBhY3R1YWxpemFuZG8gYSBtZWRpZGEgcXVlIHNlIGFncmVnYW4gY29zYXMgYSBlc2EgY2xhc2UsIHF1aXphcyBuZWNlc2l0YW1vcyB1biBvYnNlcnZlciwgcXVlIHNlcmlhIHVuIHZlcmRhZGVybyBxdWlsb21iYXNzc3Nvb29vb28uLi5cblxuICAgICAgICBjb25zdCBpbnB1dCA9IHRoaXMucmF3Q2xhc3NUZXh0RWRpdG9yLmdldFZhbHVlKCk7XG4gICAgICAgIGNvbnN0IHJlZ2V4ID0gL1xcLihbXFxzXFxTXSo/KVxccypcXHsoW1xcc1xcU10qPylcXH0vZztcblxuICAgICAgICBjb25zdCByZXN1bHQ6IHsgbmFtZTogc3RyaW5nLCB2YWx1ZXM6IHN0cmluZ1tdLCByYXc6IHN0cmluZyB9W10gPSBbXTtcblxuICAgICAgICBsZXQgbWF0Y2g7XG4gICAgICAgIHdoaWxlICgobWF0Y2ggPSByZWdleC5leGVjKGlucHV0KSkpIHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBtYXRjaFsxXS50cmltKCk7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IG1hdGNoWzJdLnRyaW0oKTtcblxuICAgICAgICAgICAgY29uc3QgdmFsdWVzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgICAgICAgICB2YWx1ZS5zcGxpdCgnOycpLmZvckVhY2goKHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRyaW1lZFZhbHVlID0gdmFsLnRyaW0oKTtcblxuICAgICAgICAgICAgICAgIGlmKHRyaW1lZFZhbHVlICE9PSAnJyl7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlcy5wdXNoKHRyaW1lZFZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICByZXN1bHQucHVzaCh7IG5hbWUsIHZhbHVlcywgcmF3OiBtYXRjaFswXX0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0LmZvckVhY2goKHJ1bGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVTdHlsZXMgPSBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXMocnVsZS5uYW1lKTtcblxuICAgICAgICAgICAgaWYoT2JqZWN0LmtleXMocnVsZVN0eWxlcykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHJ1bGUudmFsdWVzLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleVZhbHVlcyA9IHZhbHVlLnNwbGl0KCc6JykubWFwKCh2YWwpID0+IHZhbC5yZXBsYWNlKCc7JywnJykudHJpbSgpKVxuICAgICAgICAgICAgICAgICAgICBydWxlU3R5bGVzW2tleVZhbHVlc1swXV0gPSBrZXlWYWx1ZXNbMV07XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgQ3NzU3R5bGVTaGVldC5pbnNlcnRSdWxlKHJ1bGUucmF3KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQocnVsZS5uYW1lKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgbmV3T3B0aW9uLnRleHQgPSBgLiR7cnVsZS5uYW1lfWA7XG4gICAgICAgICAgICAgICAgICAgIG5ld09wdGlvbi52YWx1ZSA9IHJ1bGUubmFtZTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsYXNzZXNTZWxlY3Rvci5hcHBlbmRDaGlsZChuZXdPcHRpb24pO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xhc3Nlc1NlbGVjdG9yLmNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGQ6IEhUTUxPcHRpb25FbGVtZW50LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGQudmFsdWUgPT09IG5ld09wdGlvbi52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGFzc2VzU2VsZWN0b3Iuc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNsYXNzTmFtZSgpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IENsYXNzQ2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2UgZnJvbSAnLi4vaW50ZXJmYWNlcy9jbGFzcy1jaGFuZ2Utb2JzZXJ2ZXIuaW50ZXJmYWNlJztcblxuaW1wb3J0IENzc1N0eWxlU2hlZXQgZnJvbSAnLi4vLi4vY3NzLXN0eWxlc2hlZXQvY3NzLXN0eWxlc2hlZXQnO1xuXG5pbXBvcnQgQ29udGFpbmVyQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvQ29udGFpbmVyQnVpbGRlcic7XG5pbXBvcnQgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL1NlbGVjdG9yRnJvbUVudW1CdWlsZGVyJztcbmltcG9ydCBJbnB1dEJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0lucHV0QnVpbGRlcic7XG5pbXBvcnQgTGFiZWxCdWlsZGVyIGZyb20gJy4uL21vZGVscy9MYWJlbEJ1aWxkZXInO1xuXG5pbXBvcnQgR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudCBmcm9tICcuL2dlbmVyaWMtY3NzLXByb3BlcnR5LW11dGF0b3IuY29tcG9uZW50JztcblxuaW1wb3J0IHsgRGlzcGxheVR5cGVzRW51bSB9IGZyb20gJy4uL2VudW1zL2Rpc3BsYXktdHlwZXMuZW51bSc7XG5pbXBvcnQgeyBTdHlsZU5hbWVFbnVtIH0gZnJvbSAnLi4vZW51bXMvc3R5bGUtbmFtZS5lbnVtJztcbmltcG9ydCB7IEFsaWduRmxleFNlbGZFbnVtIH0gZnJvbSAnLi4vZW51bXMvYWxpZ24tZmxleC1zZWxmLmVudW0nO1xuaW1wb3J0IHsgSW5wdXRUeXBlRW51bSB9IGZyb20gJy4uL2VudW1zL2lucHV0LXR5cGUuZW51bSc7XG5pbXBvcnQgeyBFdmVudFR5cGVFbnVtIH0gZnJvbSAnLi4vZW51bXMvZXZlbnQtdHlwZS5lbnVtJztcbmltcG9ydCB7IEp1c3RpZnlHcmlkU2VsZkVudW0gfSBmcm9tICcuLi9lbnVtcy9qdXN0aWZ5LWdyaWQtc2VsZi5lbnVtJztcbmltcG9ydCB7IEFsaWduR3JpZFNlbGZFbnVtIH0gZnJvbSAnLi4vZW51bXMvYWxpZ24tZ3JpZC1zZWxmLmVudW0nO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3BsYXlBc0NoaWxkQ29tcG9uZW50IGltcGxlbWVudHMgQ2xhc3NDaGFuZ2VPYnNlcnZlckludGVyZmFjZSB7XG4gICAgcHJpdmF0ZSBkb21FbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBkb21FbGVtZW50U3R5bGVTaGVldDogQ1NTU3R5bGVEZWNsYXJhdGlvbjtcblxuICAgIHByaXZhdGUgZmxleENvbnRhaW5lckFzQ2hpbGRyZW46IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgYWxpZ25TZWxmU2VsZWN0b3I6IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBmbGV4R3Jvd0lucHV0OiBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50O1xuICAgIHByaXZhdGUgZmxleFNocmlua0lucHV0OiBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50O1xuICAgIHByaXZhdGUgZmxleEJhc2lzSW5wdXQ6IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQ7XG5cbiAgICBwcml2YXRlIGdyaWRDb250YWluZXJBc0NoaWxkcmVuOiBIVE1MRGl2RWxlbWVudDtcbiAgICBwcml2YXRlIGdyaWRDb2x1bW5TdGFydElucHV0OiBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50O1xuICAgIHByaXZhdGUgZ3JpZENvbHVtbkVuZElucHV0OiBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50O1xuICAgIHByaXZhdGUgZ3JpZFJvd1N0YXJ0SW5wdXQ6IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBncmlkUm93RW5kSW5wdXQ6IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBncmlkSnVzdGlmeVNlbGY6IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBncmlkQWxpZ25TZWxmOiBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50O1xuXG4gICAgY29uc3RydWN0b3IoZG9tRWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCA9IENzc1N0eWxlU2hlZXQuZ2V0UnVsZVN0eWxlcyh0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0WzBdKTtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKCkuYnVpbGQoKTtcblxuICAgICAgICB0aGlzLmZsZXhDb250YWluZXJBc0NoaWxkcmVuID0gdGhpcy5jcmVhdGVGbGV4QXNDaGlsZHJlbkNvbnRhaW5lcigpO1xuICAgICAgICB0aGlzLmdyaWRDb250YWluZXJBc0NoaWxkcmVuID0gdGhpcy5jcmVhdGVHcmlkQXNDaGlsZHJlbkNvbnRhaW5lcigpO1xuICAgICAgICB0aGlzLnNldENvbXBvbmVudEFjY29yZGluZ1RvU2VsZWN0b3IoKTtcbiAgICB9XG5cbiAgICBnZXQgY29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRDb21wb25lbnRBY2NvcmRpbmdUb1NlbGVjdG9yKCkge1xuICAgICAgICBpZiAodGhpcy5kb21FbGVtZW50LmlkICE9PSAnYXBwLWNvbnRhaW5lcicpIHtcbiAgICAgICAgICAgIC8vIE5PVEU6IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvbUVsZW1lbnQpIHJldHVybiB0aGUgYWN0aXZlIHN0eWxlIG9mIHRoYXQgZG9tIGVsZW1lbnQuXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50UHJvcGVydGllcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50KVsnZGlzcGxheSddXG5cbiAgICAgICAgICAgIGlmIChjdXJyZW50UHJvcGVydGllcyA9PT0gRGlzcGxheVR5cGVzRW51bS5mbGV4IHx8IGN1cnJlbnRQcm9wZXJ0aWVzID09PSBEaXNwbGF5VHlwZXNFbnVtWydpbmxpbmUtZmxleCddKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldEdyaWQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUZsZXhDb21wb25lbnRzU3R5bGVTaGVldCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RmxleEFzQ2hpbGRyZW5Jbml0aWFsVmFsdWVzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5mbGV4Q29udGFpbmVyQXNDaGlsZHJlbik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9wZXJ0aWVzID09PSBEaXNwbGF5VHlwZXNFbnVtLmdyaWRcbiAgICAgICAgICAgICAgICB8fCBjdXJyZW50UHJvcGVydGllcyA9PT0gRGlzcGxheVR5cGVzRW51bVsnaW5saW5lLWdyaWQnXVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldEZsZXgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUdyaWRDb21wb25lbnRzU3R5bGVTaGVldCgpO1xuICAgICAgICAgICAgdGhpcy5zZXRHcmlkQXNDaGlsZHJlbkluaXRpYWxWYWx1ZXMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmdyaWRDb250YWluZXJBc0NoaWxkcmVuKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldEZsZXgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0R3JpZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVGbGV4QXNDaGlsZHJlbkNvbnRhaW5lcigpIHtcbiAgICAgICAgdGhpcy5hbGlnblNlbGZTZWxlY3RvciA9IG5ldyBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50KFxuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCxcbiAgICAgICAgICAgICdhbGlnbi1zZWxmJyxcbiAgICAgICAgICAgICdBbGlnbiBTZWxmJyxcbiAgICAgICAgICAgIG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihBbGlnbkZsZXhTZWxmRW51bSlcbiAgICAgICAgICAgICAgICAuYnVpbGQoKSxcbiAgICAgICAgICAgIEV2ZW50VHlwZUVudW0uY2hhbmdlXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5mbGV4R3Jvd0lucHV0ID0gbmV3IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQoXG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0LFxuICAgICAgICAgICAgJ2ZsZXgtZ3JvdycsXG4gICAgICAgICAgICAnRmxleCBHcm93JyxcbiAgICAgICAgICAgIG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS5udW1iZXIpXG4gICAgICAgICAgICAgICAgLnNldE1heCgxMDAwKVxuICAgICAgICAgICAgICAgIC5zZXRNaW4oMClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKSxcbiAgICAgICAgICAgIEV2ZW50VHlwZUVudW0uaW5wdXRcbiAgICAgICAgKS5zZXRaZXJvVmFsdWUoMClcblxuICAgICAgICB0aGlzLmZsZXhTaHJpbmtJbnB1dCA9IG5ldyBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50KFxuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCxcbiAgICAgICAgICAgICdmbGV4LXNocmluaycsXG4gICAgICAgICAgICAnRmxleCBTaHJpbmsnLFxuICAgICAgICAgICAgbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLm51bWJlcilcbiAgICAgICAgICAgICAgICAuc2V0TWF4KDEwMDApXG4gICAgICAgICAgICAgICAgLnNldE1pbigwKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpLFxuICAgICAgICAgICAgRXZlbnRUeXBlRW51bS5pbnB1dFxuICAgICAgICApLnNldFplcm9WYWx1ZSgwKVxuXG5cbiAgICAgICAgdGhpcy5mbGV4QmFzaXNJbnB1dCA9IG5ldyBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50KFxuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCxcbiAgICAgICAgICAgICdmbGV4LWJhc2lzJyxcbiAgICAgICAgICAgICdGbGV4IEJhc2lzKCUpJyxcbiAgICAgICAgICAgIG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS5udW1iZXIpXG4gICAgICAgICAgICAgICAgLnNldE1heCgxMDAwKVxuICAgICAgICAgICAgICAgIC5zZXRNaW4oMClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKSxcbiAgICAgICAgICAgIEV2ZW50VHlwZUVudW0uaW5wdXQsXG4gICAgICAgICAgICAnJSdcbiAgICAgICAgKS5zZXRaZXJvVmFsdWUoMClcblxuICAgICAgICByZXR1cm4gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5ib3JkZXIsICcxcHggc29saWQgIzRDQUY1MCcpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ucGFkZGluZywgJzNweCcpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0Rpc3BsYXkgRmxleCBhcyBDaGlsZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmFsaWduU2VsZlNlbGVjdG9yLmNvbXBvbmVudClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5mbGV4R3Jvd0lucHV0LmNvbXBvbmVudClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5mbGV4U2hyaW5rSW5wdXQuY29tcG9uZW50KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmZsZXhCYXNpc0lucHV0LmNvbXBvbmVudClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEZsZXhBc0NoaWxkcmVuSW5pdGlhbFZhbHVlcygpIHtcbiAgICAgICAgdGhpcy5hbGlnblNlbGZTZWxlY3Rvci5zZXRWYWx1ZSh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydhbGlnbi1zZWxmJ10gfHwgJycpO1xuICAgICAgICB0aGlzLmZsZXhHcm93SW5wdXQuc2V0VmFsdWUoYCR7cGFyc2VJbnQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZmxleC1ncm93J10pIHx8IDB9YCk7XG4gICAgICAgIHRoaXMuZmxleFNocmlua0lucHV0LnNldFZhbHVlKGAke3BhcnNlSW50KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2ZsZXgtc2hyaW5rJ10pIHx8IDB9YCk7XG4gICAgICAgIHRoaXMuZmxleEJhc2lzSW5wdXQuc2V0VmFsdWUoYCR7cGFyc2VJbnQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZmxleC1iYXNpcyddKSB8fCAwfWApO1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlR3JpZEFzQ2hpbGRyZW5Db250YWluZXIoKSB7XG4gICAgICAgIHRoaXMuZ3JpZENvbHVtblN0YXJ0SW5wdXQgPSBuZXcgR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudChcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQsXG4gICAgICAgICAgICAnZ3JpZC1jb2x1bW4tc3RhcnQnLFxuICAgICAgICAgICAgJ0dyaWQgQ29sdW1uIFN0YXJ0JyxcbiAgICAgICAgICAgIG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS50ZXh0KS5idWlsZCgpLFxuICAgICAgICAgICAgRXZlbnRUeXBlRW51bS5pbnB1dFxuICAgICAgICApXG5cbiAgICAgICAgdGhpcy5ncmlkQ29sdW1uRW5kSW5wdXQgPSBuZXcgR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudChcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQsXG4gICAgICAgICAgICAnZ3JpZC1jb2x1bW4tZW5kJyxcbiAgICAgICAgICAgICdHcmlkIENvbHVtbiBFbmQnLFxuICAgICAgICAgICAgbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLnRleHQpLmJ1aWxkKCksXG4gICAgICAgICAgICBFdmVudFR5cGVFbnVtLmlucHV0XG4gICAgICAgIClcblxuICAgICAgICB0aGlzLmdyaWRSb3dTdGFydElucHV0ID0gbmV3IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQoXG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0LFxuICAgICAgICAgICAgJ2dyaWQtcm93LXN0YXJ0JyxcbiAgICAgICAgICAgICdHcmlkIFJvdyBTdGFydCcsXG4gICAgICAgICAgICBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0udGV4dCkuYnVpbGQoKSxcbiAgICAgICAgICAgIEV2ZW50VHlwZUVudW0uaW5wdXRcbiAgICAgICAgKVxuXG4gICAgICAgIHRoaXMuZ3JpZFJvd0VuZElucHV0ID0gbmV3IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQoXG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0LFxuICAgICAgICAgICAgJ2dyaWQtcm93LWVuZCcsXG4gICAgICAgICAgICAnR3JpZCBSb3cgRW5kJyxcbiAgICAgICAgICAgIG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS50ZXh0KS5idWlsZCgpLFxuICAgICAgICAgICAgRXZlbnRUeXBlRW51bS5pbnB1dFxuICAgICAgICApXG5cbiAgICAgICAgdGhpcy5ncmlkSnVzdGlmeVNlbGYgPSBuZXcgR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudChcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQsXG4gICAgICAgICAgICAnanVzdGlmeS1zZWxmJyxcbiAgICAgICAgICAgICdHcmlkIEp1c3RpZnkgU2VsZicsXG4gICAgICAgICAgICBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIoSnVzdGlmeUdyaWRTZWxmRW51bSkuYnVpbGQoKSxcbiAgICAgICAgICAgIEV2ZW50VHlwZUVudW0uY2hhbmdlXG4gICAgICAgIClcblxuICAgICAgICB0aGlzLmdyaWRBbGlnblNlbGYgPSBuZXcgR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudChcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQsXG4gICAgICAgICAgICAnYWxpZ24tc2VsZicsXG4gICAgICAgICAgICAnR3JpZCBBbGlnbiBTZWxmJyxcbiAgICAgICAgICAgIG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihBbGlnbkdyaWRTZWxmRW51bSkuYnVpbGQoKSxcbiAgICAgICAgICAgIEV2ZW50VHlwZUVudW0uY2hhbmdlXG4gICAgICAgIClcblxuICAgICAgICByZXR1cm4gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5ib3JkZXIsICcxcHggc29saWQgIzRDQUY1MCcpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ucGFkZGluZywgJzNweCcpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0Rpc3BsYXkgR3JpZCBhcyBDaGlsZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmdyaWRDb2x1bW5TdGFydElucHV0LmNvbXBvbmVudClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5ncmlkQ29sdW1uRW5kSW5wdXQuY29tcG9uZW50KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmdyaWRSb3dTdGFydElucHV0LmNvbXBvbmVudClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5ncmlkUm93RW5kSW5wdXQuY29tcG9uZW50KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmdyaWRKdXN0aWZ5U2VsZi5jb21wb25lbnQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuZ3JpZEFsaWduU2VsZi5jb21wb25lbnQpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRHcmlkQXNDaGlsZHJlbkluaXRpYWxWYWx1ZXMoKSB7XG4gICAgICAgIHRoaXMuZ3JpZENvbHVtblN0YXJ0SW5wdXQuc2V0VmFsdWUodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZ3JpZC1jb2x1bW4tc3RhcnQnXSB8fCAnJyk7XG4gICAgICAgIHRoaXMuZ3JpZENvbHVtbkVuZElucHV0LnNldFZhbHVlKHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2dyaWQtY29sdW1uLWVuZCddIHx8ICcnKTtcbiAgICAgICAgdGhpcy5ncmlkUm93U3RhcnRJbnB1dC5zZXRWYWx1ZSh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydncmlkLXJvdy1zdGFydCddIHx8ICcnKTtcbiAgICAgICAgdGhpcy5ncmlkUm93RW5kSW5wdXQuc2V0VmFsdWUodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZ3JpZC1yb3ctZW5kJ10gfHwgJycpO1xuICAgICAgICB0aGlzLmdyaWRKdXN0aWZ5U2VsZi5zZXRWYWx1ZSh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydqdXN0aWZ5LXNlbGYnXSB8fCAnJyk7XG4gICAgICAgIHRoaXMuZ3JpZEFsaWduU2VsZi5zZXRWYWx1ZSh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydhbGlnbi1zZWxmJ10gfHwgJycpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVzZXRGbGV4KCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5mbGV4Q29udGFpbmVyQXNDaGlsZHJlbik7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXNldEdyaWQoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLmdyaWRDb250YWluZXJBc0NoaWxkcmVuKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgY2xhc3NOYW1lVXBkYXRlZChuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCA9IENzc1N0eWxlU2hlZXQuZ2V0UnVsZVN0eWxlcyhuYW1lKTtcbiAgICAgICAgdGhpcy5zZXRDb21wb25lbnRBY2NvcmRpbmdUb1NlbGVjdG9yKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVGbGV4Q29tcG9uZW50c1N0eWxlU2hlZXQoKSB7XG4gICAgICAgIHRoaXMuYWxpZ25TZWxmU2VsZWN0b3IudXBkYXRlU3R5bGVTaGVldCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0KTtcbiAgICAgICAgdGhpcy5mbGV4R3Jvd0lucHV0LnVwZGF0ZVN0eWxlU2hlZXQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCk7XG4gICAgICAgIHRoaXMuZmxleFNocmlua0lucHV0LnVwZGF0ZVN0eWxlU2hlZXQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCk7XG4gICAgICAgIHRoaXMuZmxleEJhc2lzSW5wdXQudXBkYXRlU3R5bGVTaGVldCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUdyaWRDb21wb25lbnRzU3R5bGVTaGVldCgpIHtcbiAgICAgICAgdGhpcy5ncmlkQ29sdW1uU3RhcnRJbnB1dC51cGRhdGVTdHlsZVNoZWV0KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQpO1xuICAgICAgICB0aGlzLmdyaWRDb2x1bW5FbmRJbnB1dC51cGRhdGVTdHlsZVNoZWV0KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQpO1xuICAgICAgICB0aGlzLmdyaWRSb3dTdGFydElucHV0LnVwZGF0ZVN0eWxlU2hlZXQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCk7XG4gICAgICAgIHRoaXMuZ3JpZFJvd0VuZElucHV0LnVwZGF0ZVN0eWxlU2hlZXQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCk7XG4gICAgICAgIHRoaXMuZ3JpZEp1c3RpZnlTZWxmLnVwZGF0ZVN0eWxlU2hlZXQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCk7XG4gICAgICAgIHRoaXMuZ3JpZEFsaWduU2VsZi51cGRhdGVTdHlsZVNoZWV0KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQpO1xuICAgIH1cbn1cbiIsImltcG9ydCBDbGFzc0NoYW5nZU9ic2VydmVySW50ZXJmYWNlIGZyb20gJy4uL2ludGVyZmFjZXMvY2xhc3MtY2hhbmdlLW9ic2VydmVyLmludGVyZmFjZSc7XG5cbmltcG9ydCBDc3NTdHlsZVNoZWV0IGZyb20gJy4uLy4uL2Nzcy1zdHlsZXNoZWV0L2Nzcy1zdHlsZXNoZWV0JztcblxuaW1wb3J0IENvbnRhaW5lckJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0NvbnRhaW5lckJ1aWxkZXInO1xuaW1wb3J0IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyIGZyb20gJy4uL21vZGVscy9TZWxlY3RvckZyb21FbnVtQnVpbGRlcic7XG5pbXBvcnQgTGFiZWxCdWlsZGVyIGZyb20gJy4uL21vZGVscy9MYWJlbEJ1aWxkZXInO1xuaW1wb3J0IElucHV0QnVpbGRlciBmcm9tICcuLi9tb2RlbHMvSW5wdXRCdWlsZGVyJztcbmltcG9ydCBUZXh0YXJlYUJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL1RleHRhcmVhQnVpbGRlcic7XG5cbmltcG9ydCBJbnB1dEFuZFVuaXRzU2VsZWN0b3JDb21wb25lbnQgZnJvbSAnLi9pbnB1dC13aXRoLXVuaXRzLXNlbGVjdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudCBmcm9tICcuL2dlbmVyaWMtY3NzLXByb3BlcnR5LW11dGF0b3IuY29tcG9uZW50JztcblxuaW1wb3J0IHsgRGlzcGxheVR5cGVzRW51bSB9IGZyb20gJy4uL2VudW1zL2Rpc3BsYXktdHlwZXMuZW51bSc7XG5pbXBvcnQgeyBGbGV4RGlyZWN0aW9uRW51bSB9IGZyb20gJy4uL2VudW1zL2ZsZXgtZGlyZWN0aW9uLmVudW0nO1xuaW1wb3J0IHsgU3R5bGVOYW1lRW51bSB9IGZyb20gJy4uL2VudW1zL3N0eWxlLW5hbWUuZW51bSc7XG5pbXBvcnQgeyBGbGV4V3JhcEVudW0gfSBmcm9tICcuLi9lbnVtcy9mbGV4LXdyYXAuZW51bSc7XG5pbXBvcnQgeyBBbGlnbkZsZXhJdGVtc0VudW0gfSBmcm9tICcuLi9lbnVtcy9hbGlnbi1mbGV4LWl0ZW1zLmVudW0nO1xuaW1wb3J0IHsgSnVzdGlmeUZsZXhDb250ZW50RW51bSB9IGZyb20gJy4uL2VudW1zL2p1c3RpZnktZmxleC1jb250ZW50LmVudW0nO1xuaW1wb3J0IHsgQWxpZ25GbGV4Q29udGVudEVudW0gfSBmcm9tICcuLi9lbnVtcy9hbGlnbi1mbGV4LWNvbnRlbnQuZW51bSc7XG5pbXBvcnQgeyBJbnB1dFR5cGVFbnVtIH0gZnJvbSAnLi4vZW51bXMvaW5wdXQtdHlwZS5lbnVtJztcbmltcG9ydCB7IEV2ZW50VHlwZUVudW0gfSBmcm9tICcuLi9lbnVtcy9ldmVudC10eXBlLmVudW0nO1xuaW1wb3J0IHsgSnVzdGlmeUdyaWRJdGVtc0VudW0gfSBmcm9tICcuLi9lbnVtcy9qdXN0aWZ5LWdyaWQtaXRlbXMuZW51bSc7XG5pbXBvcnQgeyBBbGlnbkdyaWRJdGVtc0VudW0gfSBmcm9tICcuLi9lbnVtcy9hbGlnbi1ncmlkLWl0ZW1zLmVudW0nO1xuaW1wb3J0IHsgSnVzdGlmeUdyaWRDb250ZW50RW51bSB9IGZyb20gJy4uL2VudW1zL2p1c3RpZnktZ3JpZC1jb250ZW50LmVudW0nO1xuaW1wb3J0IHsgQWxpZ25HcmlkQ29udGVudEVudW0gfSBmcm9tICcuLi9lbnVtcy9hbGlnbi1ncmlkLWNvbnRlbnQuZW51bSc7XG5pbXBvcnQgeyBHcmlkQXV0b0Zsb3dFbnVtIH0gZnJvbSAnLi4vZW51bXMvZ3JpZC1hdXRvLWZsb3cuZW51bSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzcGxheUFzUGFyZW50Q29tcG9uZW50IGltcGxlbWVudHMgQ2xhc3NDaGFuZ2VPYnNlcnZlckludGVyZmFjZSB7XG4gICAgcHJpdmF0ZSBkb21FbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBkb21FbGVtZW50U3R5bGVTaGVldDogQ1NTU3R5bGVEZWNsYXJhdGlvbjtcblxuICAgIHByaXZhdGUgZGlzcGxheVNlbGVjdG9yOiBIVE1MU2VsZWN0RWxlbWVudDtcblxuICAgIHByaXZhdGUgZmxleENvbnRhaW5lckFzUGFyZW50OiBDb250YWluZXJCdWlsZGVyO1xuICAgIHByaXZhdGUgZmxleERpcmVjdGlvblNlbGVjdG9yOiBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50O1xuICAgIHByaXZhdGUgZmxleFdyYXBTZWxlY3RvcjogR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudDtcbiAgICBwcml2YXRlIGFsaWduSXRlbXNTZWxlY3RvcjogR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudDtcbiAgICBwcml2YXRlIGp1c3RpZnlDb250ZW50U2VsZWN0b3I6IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBhbGlnbkNvbnRlbnRTZWxlY3RvcjogR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudDtcblxuICAgIHByaXZhdGUgZ3JpZENvbnRhaW5lckFzUGFyZW50OiBDb250YWluZXJCdWlsZGVyO1xuICAgIHByaXZhdGUgZ3JpZFRlbXBsYXRlQ29sdW1uc0lucHV0OiBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50O1xuICAgIHByaXZhdGUgZ3JpZFRlbXBsYXRlUm93c0lucHV0OiBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50O1xuICAgIHByaXZhdGUgZ3JpZEF1dG9Db2x1bW5zSW5wdXQ6IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBncmlkQXV0b1Jvd3NJbnB1dDogR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudDtcbiAgICBwcml2YXRlIGdyaWRUZW1wbGF0ZUFyZWFzVGV4dGFyZWE6IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBncmlkSnVzdGlmeUl0ZW1zU2VsZWN0b3I6IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBncmlkQWxpZ25JdGVtc1NlbGVjdG9yOiBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50O1xuICAgIHByaXZhdGUgZ3JpZEp1c3RpZnlDb250ZW50U2VsZWN0b3I6IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBncmlkQWxpZ25Db250ZW50U2VsZWN0b3I6IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBncmlkQXV0b0Zsb3dTZWxlY3RvcjogR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudDtcbiAgICBwcml2YXRlIGdyaWRDb2x1bW5HYXBJbnB1dDogSW5wdXRBbmRVbml0c1NlbGVjdG9yQ29tcG9uZW50O1xuICAgIHByaXZhdGUgZ3JpZFJvd0dhcElucHV0OiBJbnB1dEFuZFVuaXRzU2VsZWN0b3JDb21wb25lbnQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihkb21FbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0ID0gQ3NzU3R5bGVTaGVldC5nZXRSdWxlU3R5bGVzKHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3RbMF0pO1xuICAgICAgICB0aGlzLmFkZENvbXBvbmVudHMoKTtcbiAgICB9XG5cbiAgICBnZXQgY29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRDb21wb25lbnRzKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVByb3BlcnR5ID0gdGhpcy51cGRhdGVQcm9wZXJ0eS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuZGlzcGxheVNlbGVjdG9yID0gbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKERpc3BsYXlUeXBlc0VudW0pXG4gICAgICAgICAgICAuc2VsZWN0T3B0aW9uKHRoaXMuZ2V0Q3VycmVudFByb3BlcnRpZXMoJ2Rpc3BsYXknKSlcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnVwZGF0ZVByb3BlcnR5KVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydmbGV4LWRpcmVjdGlvbiddLCBGbGV4RGlyZWN0aW9uRW51bS5jb2x1bW4pXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW1bJ2FsaWduLWl0ZW1zJ10sIEFsaWduRmxleEl0ZW1zRW51bS5zdHJldGNoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmJvcmRlciwgJzFweCBzb2xpZCAjNENBRjUwJylcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5wYWRkaW5nLCAnM3B4JylcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnRGlzcGxheSBTZXR0aW5ncycpXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmRpc3BsYXlTZWxlY3RvcilcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG5cbiAgICAgICAgdGhpcy5mbGV4Q29udGFpbmVyQXNQYXJlbnQgPSB0aGlzLmNyZWF0ZUZsZXhBc1BhcmVudENvbnRhaW5lcigpO1xuICAgICAgICB0aGlzLmdyaWRDb250YWluZXJBc1BhcmVudCA9IHRoaXMuY3JlYXRlR3JpZEFzUGFyZW50Q29udGFpbmVyKCk7XG4gICAgICAgIHRoaXMuc2V0Q29tcG9uZW50QWNjb3JkaW5nVG9TZWxlY3RvcigpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlUHJvcGVydHkoKSB7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2Rpc3BsYXknXSA9IHRoaXMuZGlzcGxheVNlbGVjdG9yLnZhbHVlO1xuICAgICAgICB0aGlzLnNldENvbXBvbmVudEFjY29yZGluZ1RvU2VsZWN0b3IodHJ1ZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRDdXJyZW50UHJvcGVydGllcyhwcm9wZXJ0eTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbcHJvcGVydHldO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0Q29tcG9uZW50QWNjb3JkaW5nVG9TZWxlY3RvcihyZXNldD86IGJvb2xlYW4pIHtcbiAgICAgICAgY29uc3QgY3VycmVudFByb3BlcnRpZXMgPSB0aGlzLmdldEN1cnJlbnRQcm9wZXJ0aWVzKCdkaXNwbGF5Jyk7XG5cbiAgICAgICAgaWYgKGN1cnJlbnRQcm9wZXJ0aWVzID09PSBEaXNwbGF5VHlwZXNFbnVtLmZsZXggfHwgY3VycmVudFByb3BlcnRpZXMgPT09IERpc3BsYXlUeXBlc0VudW1bJ2lubGluZS1mbGV4J10pIHtcbiAgICAgICAgICAgIGlmKHJlc2V0KXtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0R3JpZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy51cGRhdGVGbGV4Q29tcG9uZW50c1N0eWxlU2hlZXQoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0RmxleEFzUGFyZW50SW5pdGlhbFZhbHVlcygpO1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5mbGV4Q29udGFpbmVyQXNQYXJlbnQuYnVpbGQoKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICBjdXJyZW50UHJvcGVydGllcyA9PT0gRGlzcGxheVR5cGVzRW51bS5ncmlkXG4gICAgICAgICAgICB8fCBjdXJyZW50UHJvcGVydGllcyA9PT0gRGlzcGxheVR5cGVzRW51bVsnaW5saW5lLWdyaWQnXVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGlmKHJlc2V0KXtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0RmxleCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy51cGRhdGVHcmlkQ29tcG9uZW50c1N0eWxlU2hlZXQoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0R3JpZEFzUGFyZW50SW5pdGlhbFZhbHVlcygpO1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5ncmlkQ29udGFpbmVyQXNQYXJlbnQuYnVpbGQoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0RmxleCgpO1xuICAgICAgICAgICAgdGhpcy5yZXNldEdyaWQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlRmxleEFzUGFyZW50Q29udGFpbmVyKCkge1xuICAgICAgICB0aGlzLmZsZXhEaXJlY3Rpb25TZWxlY3RvciA9IG5ldyBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQsXG4gICAgICAgICAgICAnZmxleC1kaXJlY3Rpb24nLFxuICAgICAgICAgICAgJ0ZsZXggRGlyZWN0aW9uJyxcbiAgICAgICAgICAgIG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihGbGV4RGlyZWN0aW9uRW51bSkuYnVpbGQoKSxcbiAgICAgICAgICAgIEV2ZW50VHlwZUVudW0uY2hhbmdlXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5mbGV4V3JhcFNlbGVjdG9yID0gbmV3IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCxcbiAgICAgICAgICAgICdmbGV4LXdyYXAnLFxuICAgICAgICAgICAgJ0ZsZXggV3JhcCcsXG4gICAgICAgICAgICBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIoRmxleFdyYXBFbnVtKS5idWlsZCgpLFxuICAgICAgICAgICAgRXZlbnRUeXBlRW51bS5jaGFuZ2VcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmFsaWduSXRlbXNTZWxlY3RvciA9IG5ldyBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQsXG4gICAgICAgICAgICAnYWxpZ24taXRlbXMnLFxuICAgICAgICAgICAgJ0FsaWduIEl0ZW1zJyxcbiAgICAgICAgICAgIG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihBbGlnbkZsZXhJdGVtc0VudW0pLmJ1aWxkKCksXG4gICAgICAgICAgICBFdmVudFR5cGVFbnVtLmNoYW5nZVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuanVzdGlmeUNvbnRlbnRTZWxlY3RvciA9IG5ldyBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQsXG4gICAgICAgICAgICAnanVzdGlmeS1jb250ZW50JyxcbiAgICAgICAgICAgICdKdXN0aWZ5IENvbnRlbnQnLFxuICAgICAgICAgICAgbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKEp1c3RpZnlGbGV4Q29udGVudEVudW0pLmJ1aWxkKCksXG4gICAgICAgICAgICBFdmVudFR5cGVFbnVtLmNoYW5nZVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuYWxpZ25Db250ZW50U2VsZWN0b3IgPSBuZXcgR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0LFxuICAgICAgICAgICAgJ2FsaWduLWNvbnRlbnQnLFxuICAgICAgICAgICAgJ0FsaWduIENvbnRlbnQnLFxuICAgICAgICAgICAgbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKEFsaWduRmxleENvbnRlbnRFbnVtKS5idWlsZCgpLFxuICAgICAgICAgICAgRXZlbnRUeXBlRW51bS5jaGFuZ2VcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5ib3JkZXIsICcxcHggc29saWQgIzRDQUY1MCcpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ucGFkZGluZywgJzNweCcpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0Rpc3BsYXkgRmxleCBhcyBQYXJlbnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5mbGV4RGlyZWN0aW9uU2VsZWN0b3IuY29tcG9uZW50KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmZsZXhXcmFwU2VsZWN0b3IuY29tcG9uZW50KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmFsaWduSXRlbXNTZWxlY3Rvci5jb21wb25lbnQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuanVzdGlmeUNvbnRlbnRTZWxlY3Rvci5jb21wb25lbnQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuYWxpZ25Db250ZW50U2VsZWN0b3IuY29tcG9uZW50KVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRGbGV4QXNQYXJlbnRJbml0aWFsVmFsdWVzKCkge1xuICAgICAgICB0aGlzLmZsZXhEaXJlY3Rpb25TZWxlY3Rvci5zZXRWYWx1ZSh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydmbGV4LWRpcmVjdGlvbiddIHx8ICcnKTtcbiAgICAgICAgdGhpcy5mbGV4V3JhcFNlbGVjdG9yLnNldFZhbHVlKHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2ZsZXgtd3JhcCddIHx8ICcnKTtcbiAgICAgICAgdGhpcy5hbGlnbkl0ZW1zU2VsZWN0b3Iuc2V0VmFsdWUodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYWxpZ24taXRlbXMnXSB8fCAnJyk7XG4gICAgICAgIHRoaXMuanVzdGlmeUNvbnRlbnRTZWxlY3Rvci5zZXRWYWx1ZSh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydqdXN0aWZ5LWNvbnRlbnQnXSB8fCAnJyk7XG4gICAgICAgIHRoaXMuYWxpZ25Db250ZW50U2VsZWN0b3Iuc2V0VmFsdWUodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYWxpZ24tY29udGVudCddIHx8ICcnKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZUdyaWRBc1BhcmVudENvbnRhaW5lcigpIHtcbiAgICAgICAgdGhpcy5ncmlkVGVtcGxhdGVDb2x1bW5zSW5wdXQgPSBuZXcgR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0LFxuICAgICAgICAgICAgJ2dyaWQtdGVtcGxhdGUtY29sdW1ucycsXG4gICAgICAgICAgICAnR3JpZCBUZW1wbGF0ZSBDb2x1bW5zJyxcbiAgICAgICAgICAgIG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS50ZXh0KS5idWlsZCgpLFxuICAgICAgICAgICAgRXZlbnRUeXBlRW51bS5pbnB1dCk7XG5cbiAgICAgICAgdGhpcy5ncmlkVGVtcGxhdGVSb3dzSW5wdXQgPSBuZXcgR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0LFxuICAgICAgICAgICAgJ2dyaWQtdGVtcGxhdGUtcm93cycsXG4gICAgICAgICAgICAnR3JpZCBUZW1wbGF0ZSBSb3dzJyxcbiAgICAgICAgICAgIG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS50ZXh0KS5idWlsZCgpLFxuICAgICAgICAgICAgRXZlbnRUeXBlRW51bS5pbnB1dCk7XG5cbiAgICAgICAgdGhpcy5ncmlkQXV0b0NvbHVtbnNJbnB1dCA9IG5ldyBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQsXG4gICAgICAgICAgICAnZ3JpZC1hdXRvLWNvbHVtbnMnLFxuICAgICAgICAgICAgJ0dyaWQgQXV0byBDb2x1bW5zJyxcbiAgICAgICAgICAgIG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS50ZXh0KS5idWlsZCgpLFxuICAgICAgICAgICAgRXZlbnRUeXBlRW51bS5pbnB1dCk7XG5cbiAgICAgICAgdGhpcy5ncmlkQXV0b1Jvd3NJbnB1dCA9IG5ldyBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQsXG4gICAgICAgICAgICAnZ3JpZC1hdXRvLXJvd3MnLFxuICAgICAgICAgICAgJ0dyaWQgQXV0byBSb3dzJyxcbiAgICAgICAgICAgIG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS50ZXh0KS5idWlsZCgpLFxuICAgICAgICAgICAgRXZlbnRUeXBlRW51bS5pbnB1dCk7XG5cbiAgICAgICAgdGhpcy5ncmlkVGVtcGxhdGVBcmVhc1RleHRhcmVhID0gbmV3IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCxcbiAgICAgICAgICAgICdncmlkLXRlbXBsYXRlLWFyZWFzJyxcbiAgICAgICAgICAgICdHcmlkIFRlbXBsYXRlIEFyZWFzJyxcbiAgICAgICAgICAgIG5ldyBUZXh0YXJlYUJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLnJlc2l6ZSwgJ3ZlcnRpY2FsJylcbiAgICAgICAgICAgICAgICAuYnVpbGQoKSxcbiAgICAgICAgICAgIEV2ZW50VHlwZUVudW0uaW5wdXQpO1xuXG4gICAgICAgIHRoaXMuZ3JpZEp1c3RpZnlJdGVtc1NlbGVjdG9yID0gbmV3IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCxcbiAgICAgICAgICAgICdqdXN0aWZ5LWl0ZW1zJyxcbiAgICAgICAgICAgICdHcmlkIEp1c3RpZnkgSXRlbXMnLFxuICAgICAgICAgICAgbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKEp1c3RpZnlHcmlkSXRlbXNFbnVtKS5idWlsZCgpLFxuICAgICAgICAgICAgRXZlbnRUeXBlRW51bS5jaGFuZ2UpO1xuXG4gICAgICAgIHRoaXMuZ3JpZEFsaWduSXRlbXNTZWxlY3RvciA9IG5ldyBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQsXG4gICAgICAgICAgICAnYWxpZ24taXRlbXMnLFxuICAgICAgICAgICAgJ0dyaWQgQWxpZ24gSXRlbXMnLFxuICAgICAgICAgICAgbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKEFsaWduR3JpZEl0ZW1zRW51bSkuYnVpbGQoKSxcbiAgICAgICAgICAgIEV2ZW50VHlwZUVudW0uY2hhbmdlKTtcblxuICAgICAgICB0aGlzLmdyaWRKdXN0aWZ5Q29udGVudFNlbGVjdG9yID0gbmV3IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCxcbiAgICAgICAgICAgICdqdXN0aWZ5LWNvbnRlbnQnLFxuICAgICAgICAgICAgJ0dyaWQgSnVzdGlmeSBDb250ZW50JyxcbiAgICAgICAgICAgIG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihKdXN0aWZ5R3JpZENvbnRlbnRFbnVtKS5idWlsZCgpLFxuICAgICAgICAgICAgRXZlbnRUeXBlRW51bS5jaGFuZ2UpO1xuXG4gICAgICAgIHRoaXMuZ3JpZEFsaWduQ29udGVudFNlbGVjdG9yID0gbmV3IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCxcbiAgICAgICAgICAgICdhbGlnbi1jb250ZW50JyxcbiAgICAgICAgICAgICdHcmlkIEFsaWduIENvbnRlbnQnLFxuICAgICAgICAgICAgbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKEFsaWduR3JpZENvbnRlbnRFbnVtKS5idWlsZCgpLFxuICAgICAgICAgICAgRXZlbnRUeXBlRW51bS5jaGFuZ2UpO1xuXG4gICAgICAgIHRoaXMuZ3JpZEF1dG9GbG93U2VsZWN0b3IgPSBuZXcgR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0LFxuICAgICAgICAgICAgJ2dyaWQtYXV0by1mbG93JyxcbiAgICAgICAgICAgICdHcmlkIEF1dG8gRmxvdycsXG4gICAgICAgICAgICBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIoR3JpZEF1dG9GbG93RW51bSkuYnVpbGQoKSxcbiAgICAgICAgICAgIEV2ZW50VHlwZUVudW0uY2hhbmdlKTtcblxuICAgICAgICB0aGlzLmdyaWRDb2x1bW5HYXBJbnB1dCA9IG5ldyBJbnB1dEFuZFVuaXRzU2VsZWN0b3JDb21wb25lbnQoXG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0LFxuICAgICAgICAgICAgJ2NvbHVtbi1nYXAnLFxuICAgICAgICAgICAgJ0dyaWQgQ29sdW1uIEdhcCdcbiAgICAgICAgKVxuICAgICAgICAgICAgLnNldE1pblZhbHVlKDApXG4gICAgICAgICAgICAuc2V0WmVyb1ZhbHVlKDApXG5cbiAgICAgICAgdGhpcy5ncmlkUm93R2FwSW5wdXQgPSBuZXcgSW5wdXRBbmRVbml0c1NlbGVjdG9yQ29tcG9uZW50KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQsICdyb3ctZ2FwJywgJ0dyaWQgUm93IEdhcCcpXG4gICAgICAgICAgICAuc2V0TWluVmFsdWUoMClcbiAgICAgICAgICAgIC5zZXRaZXJvVmFsdWUoMClcblxuICAgICAgICByZXR1cm4gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5ib3JkZXIsICcxcHggc29saWQgIzRDQUY1MCcpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ucGFkZGluZywgJzNweCcpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0Rpc3BsYXkgR3JpZCBhcyBQYXJlbnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5ncmlkVGVtcGxhdGVDb2x1bW5zSW5wdXQuY29tcG9uZW50KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmdyaWRUZW1wbGF0ZVJvd3NJbnB1dC5jb21wb25lbnQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuZ3JpZEF1dG9Db2x1bW5zSW5wdXQuY29tcG9uZW50KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmdyaWRBdXRvUm93c0lucHV0LmNvbXBvbmVudClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5ncmlkVGVtcGxhdGVBcmVhc1RleHRhcmVhLmNvbXBvbmVudClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5ncmlkSnVzdGlmeUl0ZW1zU2VsZWN0b3IuY29tcG9uZW50KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmdyaWRBbGlnbkl0ZW1zU2VsZWN0b3IuY29tcG9uZW50KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmdyaWRKdXN0aWZ5Q29udGVudFNlbGVjdG9yLmNvbXBvbmVudClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5ncmlkQWxpZ25Db250ZW50U2VsZWN0b3IuY29tcG9uZW50KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmdyaWRBdXRvRmxvd1NlbGVjdG9yLmNvbXBvbmVudClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5ncmlkQ29sdW1uR2FwSW5wdXQuY29tcG9uZW50KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmdyaWRSb3dHYXBJbnB1dC5jb21wb25lbnQpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEdyaWRBc1BhcmVudEluaXRpYWxWYWx1ZXMoKSB7XG4gICAgICAgIHRoaXMuZ3JpZFRlbXBsYXRlQ29sdW1uc0lucHV0LnNldFZhbHVlKHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2dyaWQtdGVtcGxhdGUtY29sdW1ucyddIHx8ICcnKTtcbiAgICAgICAgdGhpcy5ncmlkVGVtcGxhdGVSb3dzSW5wdXQuc2V0VmFsdWUodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZ3JpZC10ZW1wbGF0ZS1yb3dzJ10gfHwgJycpO1xuICAgICAgICB0aGlzLmdyaWRBdXRvQ29sdW1uc0lucHV0LnNldFZhbHVlKHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2dyaWQtYXV0by1jb2x1bW5zJ10gfHwgJycpO1xuICAgICAgICB0aGlzLmdyaWRBdXRvUm93c0lucHV0LnNldFZhbHVlKHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2dyaWQtYXV0by1yb3dzJ10gfHwgJycpO1xuICAgICAgICB0aGlzLmdyaWRUZW1wbGF0ZUFyZWFzVGV4dGFyZWEuc2V0VmFsdWUodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZ3JpZC10ZW1wbGF0ZS1hcmVhcyddIHx8ICcnKTtcbiAgICAgICAgdGhpcy5ncmlkSnVzdGlmeUl0ZW1zU2VsZWN0b3Iuc2V0VmFsdWUodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnanVzdGlmeS1pdGVtcyddIHx8ICcnKTtcbiAgICAgICAgdGhpcy5ncmlkQWxpZ25JdGVtc1NlbGVjdG9yLnNldFZhbHVlKHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2FsaWduLWl0ZW1zJ10gfHwgJycpO1xuICAgICAgICB0aGlzLmdyaWRKdXN0aWZ5Q29udGVudFNlbGVjdG9yLnNldFZhbHVlKHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2p1c3RpZnktY29udGVudCddIHx8ICcnKTtcbiAgICAgICAgdGhpcy5ncmlkQWxpZ25Db250ZW50U2VsZWN0b3Iuc2V0VmFsdWUodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYWxpZ24tY29udGVudCddIHx8ICcnKTtcbiAgICAgICAgdGhpcy5ncmlkQXV0b0Zsb3dTZWxlY3Rvci5zZXRWYWx1ZSh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydncmlkLWF1dG8tZmxvdyddIHx8ICcnKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlc2V0RmxleCgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuZmxleENvbnRhaW5lckFzUGFyZW50LmJ1aWxkKCkpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHVuZGVmaW5lZDtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2ZsZXgtZGlyZWN0aW9uJ10gPSAnJztcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2ZsZXgtd3JhcCddID0gJyc7XG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydhbGlnbi1pdGVtcyddID0gJyc7XG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydqdXN0aWZ5LWNvbnRlbnQnXSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYWxpZ24tY29udGVudCddID0gJyc7XG5cbiAgICAgICAgICAgIC8vIE5PVEU6IGRlY2lzaW9uOiBkZWxldGUgb25seSBjaGlsZHJlbiBzdHlsZXMgZm9yIGNsYXNzZXMgbmFtZWQgYXMgdGhlIGNvbXBvbmVudCBpZC5cbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5jaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgQ3NzU3R5bGVTaGVldC5nZXRSdWxlU3R5bGVzKGNoaWxkWyduYW1lJ10pWydhbGlnbi1zZWxmJ10gPSAnJztcbiAgICAgICAgICAgICAgICBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXMoY2hpbGRbJ25hbWUnXSlbJ2ZsZXgtZ3JvdyddID0gJyc7XG4gICAgICAgICAgICAgICAgQ3NzU3R5bGVTaGVldC5nZXRSdWxlU3R5bGVzKGNoaWxkWyduYW1lJ10pWydmbGV4LXNocmluayddID0gJyc7XG4gICAgICAgICAgICAgICAgQ3NzU3R5bGVTaGVldC5nZXRSdWxlU3R5bGVzKGNoaWxkWyduYW1lJ10pWydmbGV4LWJhc2lzJ10gPSAnJztcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHJlc2V0R3JpZCgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuZ3JpZENvbnRhaW5lckFzUGFyZW50LmJ1aWxkKCkpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHVuZGVmaW5lZDtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2dyaWQtdGVtcGxhdGUtY29sdW1ucyddID0gJyc7XG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydncmlkLXRlbXBsYXRlLXJvd3MnXSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZ3JpZC1hdXRvLWNvbHVtbnMnXSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZ3JpZC1hdXRvLXJvd3MnXSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZ3JpZC10ZW1wbGF0ZS1hcmVhcyddID0gJyc7XG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydqdXN0aWZ5LWl0ZW1zJ10gPSAnJztcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2dyaWQtYXV0by1mbG93J10gPSAnJztcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2NvbHVtbi1nYXAnXSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsncm93LWdhcCddID0gJyc7XG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydhbGlnbi1pdGVtcyddID0gJyc7XG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydqdXN0aWZ5LWNvbnRlbnQnXSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYWxpZ24tY29udGVudCddID0gJyc7XG5cbiAgICAgICAgICAgIC8vIE5PVEU6IGRlY2lzaW9uOiBkZWxldGUgb25seSBjaGlsZHJlbiBzdHlsZXMgZm9yIGNsYXNzZXMgbmFtZWQgYXMgdGhlIGNvbXBvbmVudCBpZC5cbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5jaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgQ3NzU3R5bGVTaGVldC5nZXRSdWxlU3R5bGVzKGNoaWxkWyduYW1lJ10pWydncmlkLWNvbHVtbi1zdGFydCddID0gJyc7XG4gICAgICAgICAgICAgICAgQ3NzU3R5bGVTaGVldC5nZXRSdWxlU3R5bGVzKGNoaWxkWyduYW1lJ10pWydncmlkLWNvbHVtbi1lbmQnXSA9ICcnO1xuICAgICAgICAgICAgICAgIENzc1N0eWxlU2hlZXQuZ2V0UnVsZVN0eWxlcyhjaGlsZFsnbmFtZSddKVsnZ3JpZC1yb3ctc3RhcnQnXSA9ICcnO1xuICAgICAgICAgICAgICAgIENzc1N0eWxlU2hlZXQuZ2V0UnVsZVN0eWxlcyhjaGlsZFsnbmFtZSddKVsnZ3JpZC1yb3ctZW5kJ10gPSAnJztcbiAgICAgICAgICAgICAgICBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXMoY2hpbGRbJ25hbWUnXSlbJ2p1c3RpZnktc2VsZiddID0gJyc7XG4gICAgICAgICAgICAgICAgQ3NzU3R5bGVTaGVldC5nZXRSdWxlU3R5bGVzKGNoaWxkWyduYW1lJ10pWydhbGlnbi1zZWxmJ10gPSAnJztcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgY2xhc3NOYW1lVXBkYXRlZChuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCA9IENzc1N0eWxlU2hlZXQuZ2V0UnVsZVN0eWxlcyhuYW1lKTtcblxuICAgICAgICBjb25zdCBjdXJyZW50UHJvcGVydGllcyA9IHRoaXMuZ2V0Q3VycmVudFByb3BlcnRpZXMoJ2Rpc3BsYXknKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5U2VsZWN0b3IudmFsdWUgPSBjdXJyZW50UHJvcGVydGllcztcblxuICAgICAgICB0aGlzLnNldENvbXBvbmVudEFjY29yZGluZ1RvU2VsZWN0b3IodHJ1ZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVGbGV4Q29tcG9uZW50c1N0eWxlU2hlZXQoKSB7XG4gICAgICAgIHRoaXMuZmxleERpcmVjdGlvblNlbGVjdG9yLnVwZGF0ZVN0eWxlU2hlZXQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCk7XG4gICAgICAgIHRoaXMuZmxleFdyYXBTZWxlY3Rvci51cGRhdGVTdHlsZVNoZWV0KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQpO1xuICAgICAgICB0aGlzLmFsaWduSXRlbXNTZWxlY3Rvci51cGRhdGVTdHlsZVNoZWV0KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQpO1xuICAgICAgICB0aGlzLmp1c3RpZnlDb250ZW50U2VsZWN0b3IudXBkYXRlU3R5bGVTaGVldCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0KTtcbiAgICAgICAgdGhpcy5hbGlnbkNvbnRlbnRTZWxlY3Rvci51cGRhdGVTdHlsZVNoZWV0KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlR3JpZENvbXBvbmVudHNTdHlsZVNoZWV0KCkge1xuICAgICAgICB0aGlzLmdyaWRUZW1wbGF0ZUNvbHVtbnNJbnB1dC51cGRhdGVTdHlsZVNoZWV0KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQpO1xuICAgICAgICB0aGlzLmdyaWRUZW1wbGF0ZVJvd3NJbnB1dC51cGRhdGVTdHlsZVNoZWV0KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQpO1xuICAgICAgICB0aGlzLmdyaWRBdXRvQ29sdW1uc0lucHV0LnVwZGF0ZVN0eWxlU2hlZXQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCk7XG4gICAgICAgIHRoaXMuZ3JpZEF1dG9Sb3dzSW5wdXQudXBkYXRlU3R5bGVTaGVldCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0KTtcbiAgICAgICAgdGhpcy5ncmlkVGVtcGxhdGVBcmVhc1RleHRhcmVhLnVwZGF0ZVN0eWxlU2hlZXQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCk7XG4gICAgICAgIHRoaXMuZ3JpZEp1c3RpZnlJdGVtc1NlbGVjdG9yLnVwZGF0ZVN0eWxlU2hlZXQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCk7XG4gICAgICAgIHRoaXMuZ3JpZEFsaWduSXRlbXNTZWxlY3Rvci51cGRhdGVTdHlsZVNoZWV0KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQpO1xuICAgICAgICB0aGlzLmdyaWRKdXN0aWZ5Q29udGVudFNlbGVjdG9yLnVwZGF0ZVN0eWxlU2hlZXQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCk7XG4gICAgICAgIHRoaXMuZ3JpZEFsaWduQ29udGVudFNlbGVjdG9yLnVwZGF0ZVN0eWxlU2hlZXQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCk7XG4gICAgICAgIHRoaXMuZ3JpZEF1dG9GbG93U2VsZWN0b3IudXBkYXRlU3R5bGVTaGVldCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0KTtcbiAgICAgICAgdGhpcy5ncmlkQ29sdW1uR2FwSW5wdXQudXBkYXRlU3R5bGVTaGVldCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0KTtcbiAgICAgICAgdGhpcy5ncmlkUm93R2FwSW5wdXQudXBkYXRlU3R5bGVTaGVldCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ2xhc3NDaGFuZ2VPYnNlcnZlckludGVyZmFjZSBmcm9tICcuLi9pbnRlcmZhY2VzL2NsYXNzLWNoYW5nZS1vYnNlcnZlci5pbnRlcmZhY2UnO1xuXG5pbXBvcnQgQ29udGFpbmVyQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvQ29udGFpbmVyQnVpbGRlcic7XG5pbXBvcnQgSW5wdXRCdWlsZGVyIGZyb20gJy4uL21vZGVscy9JbnB1dEJ1aWxkZXInO1xuaW1wb3J0IExhYmVsQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvTGFiZWxCdWlsZGVyJztcbmltcG9ydCBTZWxlY3RvckZyb21FbnVtQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXInO1xuaW1wb3J0IEJ1dHRvbkJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0J1dHRvbkJ1aWxkZXInO1xuXG5pbXBvcnQgQ3NzU3R5bGVTaGVldCBmcm9tICcuLi8uLi9jc3Mtc3R5bGVzaGVldC9jc3Mtc3R5bGVzaGVldCc7XG5pbXBvcnQgZ2V0VW5pdCBmcm9tICcuLi9mdW5jdGlvbnMvZ2V0LWNzcy11bml0JztcbmltcG9ydCBjb2xvclRvSGV4IGZyb20gJy4uL2Z1bmN0aW9ucy9yZ2ItdG8taGV4JztcblxuaW1wb3J0IHsgSW5wdXRUeXBlRW51bSB9IGZyb20gJy4uL2VudW1zL2lucHV0LXR5cGUuZW51bSc7XG5pbXBvcnQgeyBVbml0c0VudW0gfSBmcm9tICcuLi9lbnVtcy91bml0cy5lbnVtJztcbmltcG9ydCB7IFN0eWxlTmFtZUVudW0gfSBmcm9tICcuLi9lbnVtcy9zdHlsZS1uYW1lLmVudW0nO1xuaW1wb3J0IHsgRGlzcGxheVR5cGVzRW51bSB9IGZyb20gJy4uL2VudW1zL2Rpc3BsYXktdHlwZXMuZW51bSc7XG5pbXBvcnQgeyBGb250c0VudW0gfSBmcm9tICcuLi9lbnVtcy9mb250cy5lbnVtJztcbmltcG9ydCB7IEZvbnRTdHlsZXNFbnVtIH0gZnJvbSAnLi4vZW51bXMvZm9udC1zdHlsZXMuZW51bSc7XG5pbXBvcnQgeyBGb250V2VpZ2h0RW51bSB9IGZyb20gJy4uL2VudW1zL2ZvbnQtd2VpZ2h0LmVudW0nO1xuaW1wb3J0IHsgRm9udFZhcmlhbnRFbnVtIH0gZnJvbSAnLi4vZW51bXMvZm9udC12YXJpYW50LmVudW0nO1xuXG4vLyBUT0RPOiBoYWNlciBtYXMgYmVsbG8gZWwgY29udGVuZWRvciBkZSB0b2RhcyBsYXMgZnVlbnRlcyBxdWUgdGllbmUgZWwgZWxlbWVudG9cbi8vIFRPRE86IHZlciBzaSBzZSBwdWVkZW4gYWdyZWdhciBmdWVudGVzIGRlIEdvb2dsZSwgcG9yIGVqZW1wbG8uLi4gY29tbyBoYWNlcmxvLi4uXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvbnRDb21wb25lbnQgaW1wbGVtZW50cyBDbGFzc0NoYW5nZU9ic2VydmVySW50ZXJmYWNlIHtcbiAgICBwcml2YXRlIGRvbUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcbiAgICBwcml2YXRlIGRvbUVsZW1lbnRTdHlsZVNoZWV0OiBDU1NTdHlsZURlY2xhcmF0aW9uO1xuXG4gICAgcHJpdmF0ZSBjdXJyZW50Rm9udEZhbWlsaWVzQXJyYXk6IHN0cmluZ1tdID0gW107XG4gICAgcHJpdmF0ZSBmb250U2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIHByaXZhdGUgY3VycmVudEZvbnRzRWxlbWVudHNDb250YWluZXI6IENvbnRhaW5lckJ1aWxkZXI7XG4gICAgcHJpdmF0ZSBjdXJyZW50Rm9udHNDb250YWluZXI6IENvbnRhaW5lckJ1aWxkZXI7XG5cbiAgICBwcml2YXRlIGZvbnRTaXplSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBmb250VW5pdFNlbGVjdG9yOiBIVE1MU2VsZWN0RWxlbWVudDtcblxuICAgIHByaXZhdGUgZm9udFN0eWxlU2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIHByaXZhdGUgZm9udFdlaWdodFNlbGVjdG9yOiBIVE1MU2VsZWN0RWxlbWVudDtcbiAgICBwcml2YXRlIGZvbnRWYXJpYW50U2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIHByaXZhdGUgZm9udENvbG9ySW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihkb21FbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0ID0gQ3NzU3R5bGVTaGVldC5nZXRSdWxlU3R5bGVzKHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3RbMF0pO1xuICAgICAgICB0aGlzLmFkZENvbXBvbmVudHMoKTtcbiAgICB9XG5cbiAgICBnZXQgY29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRDb21wb25lbnRzKCkge1xuICAgICAgICB0aGlzLmFkZEZvbnQgPSB0aGlzLmFkZEZvbnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW1vdmVGb250ID0gdGhpcy5yZW1vdmVGb250LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubW92ZUZvbnRUb1RoZUZyb250ID0gdGhpcy5tb3ZlRm9udFRvVGhlRnJvbnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5tb3ZlRm9udEJlaGluZCA9IHRoaXMubW92ZUZvbnRCZWhpbmQuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZUZvbnRTaXplID0gdGhpcy51cGRhdGVGb250U2l6ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZUZvbnRTdHlsZSA9IHRoaXMudXBkYXRlRm9udFN0eWxlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlRm9udFdlaWdodCA9IHRoaXMudXBkYXRlRm9udFdlaWdodC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZUZvbnRWYXJpYW4gPSB0aGlzLnVwZGF0ZUZvbnRWYXJpYW4uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGVGb250Q29sb3IgPSB0aGlzLnVwZGF0ZUZvbnRDb2xvci5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuYnVpbGRBbGxDb21wb25lbnRzKCk7XG4gICAgICAgIHRoaXMuc2V0SW5pdGlhbFZhbHVlc0FjY29yZGluZ1RvQ2xhc3MoKTtcblxuICAgICAgICBjb25zdCBhZGRGb250QnV0dG9uID0gbmV3IEJ1dHRvbkJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldElubmVyVGV4dCgnQWRkJylcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYWRkRm9udClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgY29uc3QgZm9udEZhbWlseUNvbXBvbmVudHNDb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0FkZCBGb250IEZhbWlseScpXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmZvbnRTZWxlY3RvcilcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQoYWRkRm9udEJ1dHRvbilcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICB0aGlzLmN1cnJlbnRGb250c0NvbnRhaW5lciA9IHRoaXMuY3VycmVudEZvbnRzQ29tcG9uZW50c0NvbnRhaW5lcigpO1xuXG4gICAgICAgIGNvbnN0IGZvbnRTaXplQ29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdGb250IFNpemUnKVxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5mb250U2l6ZUlucHV0KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmZvbnRVbml0U2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgY29uc3QgZm9udFN0eWxlQ29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdGb250IFN0eWxlJylcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuZm9udFN0eWxlU2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgY29uc3QgZm9udFdlaWdodENvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnRm9udCBXZWlnaHQnKVxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5mb250V2VpZ2h0U2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgY29uc3QgZm9udFZhcmlhbnRDb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0ZvbnQgVmFyaWFudCcpXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmZvbnRWYXJpYW50U2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgY29uc3QgZm9udENvbG9yQ29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdGb250IENvbG9yJylcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuZm9udENvbG9ySW5wdXQpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5ib3JkZXIsICcxcHggc29saWQgIzRDQUY1MCcpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5wYWRkaW5nLCAnM3B4JylcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnRm9udCcpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChmb250RmFtaWx5Q29tcG9uZW50c0NvbnRhaW5lcilcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZElmRGVmaW5lZCh0aGlzLmN1cnJlbnRGb250c0NvbnRhaW5lci5idWlsZCgpKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKGZvbnRTaXplQ29udGFpbmVyKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKGZvbnRTdHlsZUNvbnRhaW5lcilcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChmb250V2VpZ2h0Q29udGFpbmVyKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKGZvbnRWYXJpYW50Q29udGFpbmVyKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKGZvbnRDb2xvckNvbnRhaW5lcilcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBidWlsZEFsbENvbXBvbmVudHMoKSB7XG4gICAgICAgIHRoaXMuZm9udFNlbGVjdG9yID0gbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKEZvbnRzRW51bSlcbiAgICAgICAgICAgIC5zZWxlY3RPcHRpb24oRm9udHNFbnVtLmRlZmF1bHQpXG4gICAgICAgICAgICAuYnVpbGQoKTtcblxuICAgICAgICB0aGlzLmN1cnJlbnRGb250c0VsZW1lbnRzQ29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKTtcblxuICAgICAgICB0aGlzLmZvbnRTaXplSW5wdXQgPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0ubnVtYmVyKVxuICAgICAgICAgICAgLnNldE1pbigwKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy51cGRhdGVGb250U2l6ZSlcbiAgICAgICAgICAgIC5idWlsZCgpO1xuXG4gICAgICAgIHRoaXMuZm9udFVuaXRTZWxlY3RvciA9IG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihVbml0c0VudW0pXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVGb250U2l6ZSlcbiAgICAgICAgICAgIC5idWlsZCgpO1xuXG4gICAgICAgIHRoaXMuZm9udFN0eWxlU2VsZWN0b3IgPSBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIoRm9udFN0eWxlc0VudW0pXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVGb250U3R5bGUpXG4gICAgICAgICAgICAuYnVpbGQoKTtcblxuICAgICAgICB0aGlzLmZvbnRXZWlnaHRTZWxlY3RvciA9IG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihGb250V2VpZ2h0RW51bSlcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnVwZGF0ZUZvbnRXZWlnaHQpXG4gICAgICAgICAgICAuYnVpbGQoKTtcblxuICAgICAgICB0aGlzLmZvbnRWYXJpYW50U2VsZWN0b3IgPSBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIoRm9udFZhcmlhbnRFbnVtKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudXBkYXRlRm9udFZhcmlhbilcbiAgICAgICAgICAgIC5idWlsZCgpO1xuXG4gICAgICAgIHRoaXMuZm9udENvbG9ySW5wdXQgPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0uY29sb3IpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLnVwZGF0ZUZvbnRDb2xvcilcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRJbml0aWFsVmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpIHtcbiAgICAgICAgdGhpcy5zZXRGb250RmFtaWx5VmFsdWVBY2NvcmRpbmdUb0NsYXNzKCk7XG4gICAgICAgIHRoaXMuZmlsbENvbnRhaW5lckFjY29yZGluZ1RvSW5pdGlhbFZhbHVlcygpO1xuXG4gICAgICAgIHRoaXMuc2V0Rm9udFNpemVWYWx1ZUFjY29yZGluZ1RvQ2xhc3MoKTtcbiAgICAgICAgdGhpcy5zZXRGb250U3R5bGVWYWx1ZUFjY29yZGluZ1RvQ2xhc3MoKTtcbiAgICAgICAgdGhpcy5zZXRGb250V2VpZ2h0VmFsdWVBY2NvcmRpbmdUb0NsYXNzKCk7XG4gICAgICAgIHRoaXMuc2V0Rm9udFZhcmlhbnRWYWx1ZUFjY29yZGluZ1RvQ2xhc3MoKTtcbiAgICAgICAgdGhpcy5zZXRGb250Q29sb3JWYWx1ZUFjY29yZGluZ1RvQ2xhc3MoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEZvbnRGYW1pbHlWYWx1ZUFjY29yZGluZ1RvQ2xhc3MoKSB7XG4gICAgICAgIGNvbnN0IGZvbnRzID0gdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZm9udC1mYW1pbHknXTtcbiAgICAgICAgaWYgKGZvbnRzKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRGb250RmFtaWxpZXNBcnJheSA9IGZvbnRzLnNwbGl0KCcsICcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmaWxsQ29udGFpbmVyQWNjb3JkaW5nVG9Jbml0aWFsVmFsdWVzKCkge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50Rm9udEZhbWlsaWVzQXJyYXkpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEZvbnRGYW1pbGllc0FycmF5LmZvckVhY2goKGZvbnQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRGb250c0VsZW1lbnRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZm9udEZhbWlseUNvbXBvbmVudChmb250LnRyaW0oKSkpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc2V0Rm9udFNpemVWYWx1ZUFjY29yZGluZ1RvQ2xhc3MoKSB7XG4gICAgICAgIGNvbnN0IGZvbnRTaXplID0gdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZm9udC1zaXplJ107XG4gICAgICAgIHRoaXMuZm9udFNpemVJbnB1dC52YWx1ZSA9IGAke3BhcnNlSW50KGZvbnRTaXplKSB8fCAxfWA7XG4gICAgICAgIHRoaXMuZm9udFVuaXRTZWxlY3Rvci52YWx1ZSA9IGdldFVuaXQoZm9udFNpemUsIFVuaXRzRW51bS5lbSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRGb250U3R5bGVWYWx1ZUFjY29yZGluZ1RvQ2xhc3MoKSB7XG4gICAgICAgIGNvbnN0IGZvbnRTdHlsZSA9IHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2ZvbnQtc3R5bGUnXTtcbiAgICAgICAgdGhpcy5mb250U3R5bGVTZWxlY3Rvci52YWx1ZSA9IGZvbnRTdHlsZSA9PT0gJycgPyAnbm9ybWFsJyA6IGZvbnRTdHlsZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEZvbnRXZWlnaHRWYWx1ZUFjY29yZGluZ1RvQ2xhc3MoKSB7XG4gICAgICAgIGNvbnN0IGZvbnRXZWlnaHQgPSB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydmb250LXdlaWdodCddO1xuICAgICAgICB0aGlzLmZvbnRXZWlnaHRTZWxlY3Rvci52YWx1ZSA9IGZvbnRXZWlnaHQgPT09ICcnID8gJ25vcm1hbCcgOiBmb250V2VpZ2h0O1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0Rm9udFZhcmlhbnRWYWx1ZUFjY29yZGluZ1RvQ2xhc3MoKSB7XG4gICAgICAgIGNvbnN0IGZvbnRWYXJpYW50ID0gdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZm9udC12YXJpYW50J107XG4gICAgICAgIHRoaXMuZm9udFZhcmlhbnRTZWxlY3Rvci52YWx1ZSA9IGZvbnRWYXJpYW50ID09PSAnJyA/ICdub3JtYWwnIDogZm9udFZhcmlhbnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRGb250Q29sb3JWYWx1ZUFjY29yZGluZ1RvQ2xhc3MoKSB7XG4gICAgICAgIGNvbnN0IGZvbnRDb2xvciA9IHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2NvbG9yJ107XG4gICAgICAgIHRoaXMuZm9udENvbG9ySW5wdXQudmFsdWUgPSBjb2xvclRvSGV4KGZvbnRDb2xvcik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmb250RmFtaWx5Q29tcG9uZW50KGZvbnQ6IHN0cmluZyk6IEhUTUxEaXZFbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXROYW1lKGZvbnQpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmdyaWQpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zJ10sICcyZnIgMWZyIDFmciAxZnInKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoZm9udClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBCdXR0b25CdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdSZW1vdmUnKVxuICAgICAgICAgICAgICAgIC5zZXROYW1lKGZvbnQpXG4gICAgICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yZW1vdmVGb250KVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IEJ1dHRvbkJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ+KGkScpXG4gICAgICAgICAgICAgICAgLnNldE5hbWUoZm9udClcbiAgICAgICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm1vdmVGb250VG9UaGVGcm9udClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBCdXR0b25CdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCfihpMnKVxuICAgICAgICAgICAgICAgIC5zZXROYW1lKGZvbnQpXG4gICAgICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5tb3ZlRm9udEJlaGluZClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICB9XG5cbiAgICBwcml2YXRlIGN1cnJlbnRGb250c0NvbXBvbmVudHNDb250YWluZXIoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0N1cnJlbnQgQ29tcG9uZW50IEZvbnRzJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuY3VycmVudEZvbnRzRWxlbWVudHNDb250YWluZXIuYnVpbGQoKSlcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICApXG5cbiAgICAgICAgaWYodGhpcy5jdXJyZW50Rm9udEZhbWlsaWVzQXJyYXkubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICBjb250YWluZXIuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCAnYmxvY2snKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29udGFpbmVyLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgJ25vbmUnKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZEZvbnQoKSB7XG4gICAgICAgIGlmKCF0aGlzLmN1cnJlbnRGb250RmFtaWxpZXNBcnJheS5pbmNsdWRlcyh0aGlzLmZvbnRTZWxlY3Rvci52YWx1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEZvbnRGYW1pbGllc0FycmF5LnB1c2godGhpcy5mb250U2VsZWN0b3IudmFsdWUpXG5cbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2ZvbnQtZmFtaWx5J10gPSB0aGlzLmN1cnJlbnRGb250RmFtaWxpZXNBcnJheS5qb2luKCcsICcpO1xuXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRGb250c0VsZW1lbnRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZm9udEZhbWlseUNvbXBvbmVudCh0aGlzLmZvbnRTZWxlY3Rvci52YWx1ZSkpO1xuXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRGb250c0NvbnRhaW5lci5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksICdibG9jaycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW1vdmVGb250KGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGZvbnROYW1lID0gZXZlbnQudGFyZ2V0WyduYW1lJ107XG5cbiAgICAgICAgY29uc3QgZm9udEluZGV4ID0gdGhpcy5jdXJyZW50Rm9udEZhbWlsaWVzQXJyYXkuZmluZEluZGV4KChmb250KSA9PiBmb250ID09PSBmb250TmFtZSk7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50Rm9udEZhbWlsaWVzQXJyYXkuc3BsaWNlKGZvbnRJbmRleCwgMSk7XG5cbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZm9udC1mYW1pbHknXSA9IHRoaXMuY3VycmVudEZvbnRGYW1pbGllc0FycmF5LmpvaW4oJywgJyk7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50Rm9udHNFbGVtZW50c0NvbnRhaW5lci5yZW1vdmVDaGlsZE5vZGVCeU5hbWUoZm9udE5hbWUpO1xuXG4gICAgICAgIGlmKHRoaXMuY3VycmVudEZvbnRzRWxlbWVudHNDb250YWluZXIuZ2V0QWxsQ2hpbGRzKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRGb250c0NvbnRhaW5lci5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksICdub25lJylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgbW92ZUZvbnRUb1RoZUZyb250KGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGZvbnROYW1lID0gZXZlbnQudGFyZ2V0WyduYW1lJ107XG5cbiAgICAgICAgY29uc3QgZm9udEluZGV4ID0gdGhpcy5jdXJyZW50Rm9udEZhbWlsaWVzQXJyYXkuZmluZEluZGV4KChmb250KSA9PiBmb250ID09PSBmb250TmFtZSk7XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRFbGVtZW50ID0gdGhpcy5jdXJyZW50Rm9udEZhbWlsaWVzQXJyYXkuc3BsaWNlKGZvbnRJbmRleCwgMSlbMF07XG5cbiAgICAgICAgdGhpcy5jdXJyZW50Rm9udEZhbWlsaWVzQXJyYXkuc3BsaWNlKGZvbnRJbmRleCAtIDEsIDAsIHNlbGVjdGVkRWxlbWVudCk7XG5cbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZm9udC1mYW1pbHknXSA9IHRoaXMuY3VycmVudEZvbnRGYW1pbGllc0FycmF5Lm1hcCgoZm9udCkgPT4gZm9udCkuam9pbignLCAnKTtcblxuICAgICAgICB0aGlzLmN1cnJlbnRGb250c0VsZW1lbnRzQ29udGFpbmVyLm1vb3ZlQ2hpbGRVcHBlclBvc2l0aW9uQnlOYW1lKGZvbnROYW1lKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG1vdmVGb250QmVoaW5kKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGZvbnROYW1lID0gZXZlbnQudGFyZ2V0WyduYW1lJ107XG5cbiAgICAgICAgY29uc3QgZm9udEluZGV4ID0gdGhpcy5jdXJyZW50Rm9udEZhbWlsaWVzQXJyYXkuZmluZEluZGV4KChmb250KSA9PiBmb250ID09PSBmb250TmFtZSk7XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRFbGVtZW50ID0gdGhpcy5jdXJyZW50Rm9udEZhbWlsaWVzQXJyYXkuc3BsaWNlKGZvbnRJbmRleCwgMSlbMF07XG5cbiAgICAgICAgdGhpcy5jdXJyZW50Rm9udEZhbWlsaWVzQXJyYXkuc3BsaWNlKGZvbnRJbmRleCArIDEsIDAsIHNlbGVjdGVkRWxlbWVudCk7XG5cbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZm9udC1mYW1pbHknXSA9IHRoaXMuY3VycmVudEZvbnRGYW1pbGllc0FycmF5Lm1hcCgoZm9udCkgPT4gZm9udCkuam9pbignLCAnKTtcblxuICAgICAgICB0aGlzLmN1cnJlbnRGb250c0VsZW1lbnRzQ29udGFpbmVyLm1vb3ZlQ2hpbGRMb3dlclBvc2l0aW9uQnlOYW1lKGZvbnROYW1lKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUZvbnRTaXplKCkge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydmb250LXNpemUnXSA9IGAke3RoaXMuZm9udFNpemVJbnB1dC52YWx1ZX0ke3RoaXMuZm9udFVuaXRTZWxlY3Rvci52YWx1ZX1gXG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVGb250U3R5bGUoKSB7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2ZvbnQtc3R5bGUnXSA9IHRoaXMuZm9udFN0eWxlU2VsZWN0b3IudmFsdWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVGb250V2VpZ2h0KCkge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydmb250LXdlaWdodCddID0gdGhpcy5mb250V2VpZ2h0U2VsZWN0b3IudmFsdWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVGb250VmFyaWFuKCkge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydmb250LXZhcmlhbnQnXSA9IHRoaXMuZm9udFZhcmlhbnRTZWxlY3Rvci52YWx1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUZvbnRDb2xvcigpIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnY29sb3InXSA9IHRoaXMuZm9udENvbG9ySW5wdXQudmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGNsYXNzTmFtZVVwZGF0ZWQobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQgPSBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXMobmFtZSk7XG4gICAgICAgIHRoaXMuc2V0SW5pdGlhbFZhbHVlc0FjY29yZGluZ1RvQ2xhc3MoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29udGFpbmVyQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvQ29udGFpbmVyQnVpbGRlcic7XG5pbXBvcnQgTGFiZWxCdWlsZGVyIGZyb20gJy4uL21vZGVscy9MYWJlbEJ1aWxkZXInO1xuXG5pbXBvcnQgeyBTdHlsZU5hbWVFbnVtIH0gZnJvbSAnLi4vZW51bXMvc3R5bGUtbmFtZS5lbnVtJztcbmltcG9ydCB7IEV2ZW50VHlwZUVudW0gfSBmcm9tICcuLi9lbnVtcy9ldmVudC10eXBlLmVudW0nO1xuaW1wb3J0IHsgRmxleERpcmVjdGlvbkVudW0gfSBmcm9tICcuLi9lbnVtcy9mbGV4LWRpcmVjdGlvbi5lbnVtJztcbmltcG9ydCB7IERpc3BsYXlUeXBlc0VudW0gfSBmcm9tICcuLi9lbnVtcy9kaXNwbGF5LXR5cGVzLmVudW0nO1xuaW1wb3J0IHsgQWxpZ25GbGV4SXRlbXNFbnVtIH0gZnJvbSAnLi4vZW51bXMvYWxpZ24tZmxleC1pdGVtcy5lbnVtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBjb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgZG9tRWxlbWVudFN0eWxlU2hlZXQ6IENTU1N0eWxlRGVjbGFyYXRpb247XG5cbiAgICBwcml2YXRlIGxhYmVsOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBzdHlsZTogc3RyaW5nO1xuICAgIHByaXZhdGUgY2hhbmdlRWxlbWVudDogSFRNTElucHV0RWxlbWVudCB8IEhUTUxTZWxlY3RFbGVtZW50IHwgSFRNTFRleHRBcmVhRWxlbWVudDtcbiAgICBwcml2YXRlIGV2ZW50VHlwZTogRXZlbnRUeXBlRW51bTtcbiAgICBwcml2YXRlIHVuaXQ6IHN0cmluZztcblxuICAgIHByaXZhdGUgemVyb1ZhbHVlOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgZG9tRWxlbWVudFN0eWxlU2hlZXQ6IENTU1N0eWxlRGVjbGFyYXRpb24sXG4gICAgICAgIHN0eWxlOiBzdHJpbmcsXG4gICAgICAgIGxhYmVsOiBzdHJpbmcsXG4gICAgICAgIGNoYW5nZUVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MU2VsZWN0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnQsXG4gICAgICAgIGV2ZW50VHlwZTogRXZlbnRUeXBlRW51bSxcbiAgICAgICAgdW5pdCA9ICcnLFxuICAgICkge1xuICAgICAgICB0aGlzLnN0eWxlID0gc3R5bGU7XG4gICAgICAgIHRoaXMubGFiZWwgPSBsYWJlbDtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCA9IGRvbUVsZW1lbnRTdHlsZVNoZWV0O1xuICAgICAgICB0aGlzLmNoYW5nZUVsZW1lbnQgPSBjaGFuZ2VFbGVtZW50O1xuICAgICAgICB0aGlzLmV2ZW50VHlwZSA9IGV2ZW50VHlwZTtcbiAgICAgICAgdGhpcy51bml0ID0gdW5pdDtcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnRzKCk7XG4gICAgfVxuXG4gICAgZ2V0IGNvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkQ29tcG9uZW50cygpIHtcbiAgICAgICAgdGhpcy51cGRhdGVQcm9wZXJ0eSA9IHRoaXMudXBkYXRlUHJvcGVydHkuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmNoYW5nZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmV2ZW50VHlwZSwgdGhpcy51cGRhdGVQcm9wZXJ0eSlcblxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydmbGV4LWRpcmVjdGlvbiddLCBGbGV4RGlyZWN0aW9uRW51bS5jb2x1bW4pXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnYWxpZ24taXRlbXMnXSwgQWxpZ25GbGV4SXRlbXNFbnVtLnN0cmV0Y2gpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQodGhpcy5sYWJlbClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuY2hhbmdlRWxlbWVudClcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgfVxuXG4gICAgcHVibGljIHNldFZhbHVlKHZhbHVlID0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VFbGVtZW50LnZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZVN0eWxlU2hlZXQoZG9tRWxlbWVudFN0eWxlU2hlZXQ6IENTU1N0eWxlRGVjbGFyYXRpb24pIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCA9IGRvbUVsZW1lbnRTdHlsZVNoZWV0O1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlUHJvcGVydHkoKSB7XG4gICAgICAgIGlmKHBhcnNlSW50KHRoaXMuY2hhbmdlRWxlbWVudC52YWx1ZSkgPT09IHRoaXMuemVyb1ZhbHVlKXtcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbdGhpcy5zdHlsZV0gPSAnJztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0W3RoaXMuc3R5bGVdID0gdGhpcy5jaGFuZ2VFbGVtZW50LnZhbHVlICsgdGhpcy51bml0O1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRaZXJvVmFsdWUodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLnplcm9WYWx1ZSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29udGFpbmVyQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvQ29udGFpbmVyQnVpbGRlcic7XG5pbXBvcnQgSW5wdXRCdWlsZGVyIGZyb20gJy4uL21vZGVscy9JbnB1dEJ1aWxkZXInO1xuaW1wb3J0IExhYmVsQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvTGFiZWxCdWlsZGVyJztcbmltcG9ydCBCdXR0b25CdWlsZGVyIGZyb20gJy4uL21vZGVscy9CdXR0b25CdWlsZGVyJztcblxuaW1wb3J0IHsgU3R5bGVOYW1lRW51bSB9IGZyb20gJy4uL2VudW1zL3N0eWxlLW5hbWUuZW51bSc7XG5pbXBvcnQgeyBJbnB1dFR5cGVFbnVtIH0gZnJvbSAnLi4vZW51bXMvaW5wdXQtdHlwZS5lbnVtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2VuZXJpY1ByaW1hcnlJbnB1dENvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBkb21FbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBsYWJlbDogc3RyaW5nO1xuICAgIHByaXZhdGUgc3R5bGU6IHN0cmluZztcblxuICAgIHByaXZhdGUgcHJvcGVydHlWYWx1ZUlucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSBjYWxsYmFjazogKCkgPT4gYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKGRvbUVsZW1lbnQ6IEhUTUxFbGVtZW50LCBzdHlsZTogc3RyaW5nLCBsYWJlbDogc3RyaW5nLCBjYWxsYmFjazogKCkgPT4gYm9vbGVhbikge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICAgICAgICB0aGlzLmxhYmVsID0gbGFiZWw7XG4gICAgICAgIHRoaXMuc3R5bGUgPSBzdHlsZTtcblxuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSB0aGlzLmNhbGxiYWNrLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnRzKCk7XG4gICAgfVxuXG4gICAgZ2V0IGNvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkQ29tcG9uZW50cygpIHtcbiAgICAgICAgdGhpcy51cGRhdGVQcm9wZXJ0eSA9IHRoaXMudXBkYXRlUHJvcGVydHkuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnByb3BlcnR5VmFsdWVJbnB1dCA9IG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS50ZXh0KVxuICAgICAgICAgICAgLnNldFZhbHVlKHRoaXMuZG9tRWxlbWVudFt0aGlzLnN0eWxlXSlcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMudXBkYXRlUHJvcGVydHkpXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIGNvbnN0IGVsZW1lbnRzQ29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMucHJvcGVydHlWYWx1ZUlucHV0KVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgICAgIG5ldyBCdXR0b25CdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnQ2hhbmdlJylcbiAgICAgICAgICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy51cGRhdGVQcm9wZXJ0eSlcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5ib3JkZXIsICcxcHggc29saWQgIzRDQUY1MCcpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5wYWRkaW5nLCAnM3B4JylcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCh0aGlzLmxhYmVsKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQoZWxlbWVudHNDb250YWluZXIpXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlUHJvcGVydHkoZXZlbnQ6IE1vdXNlRXZlbnQgfCBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGlmICggZXZlbnQudHlwZSA9PT0gJ2NsaWNrJ1xuICAgICAgICAgICAgfHwgKGV2ZW50IGFzIEtleWJvYXJkRXZlbnQpLmtleSA9PT0gJ0VudGVyJ1xuICAgICAgICAgICAgfHwgKGV2ZW50IGFzIEtleWJvYXJkRXZlbnQpLmNvZGUgPT09ICcxMydcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBpZih0aGlzLmNhbGxiYWNrKCkpe1xuICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFt0aGlzLnN0eWxlXSA9IHRoaXMucHJvcGVydHlWYWx1ZUlucHV0LnZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BlcnR5VmFsdWVJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IENvbnRhaW5lckJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0NvbnRhaW5lckJ1aWxkZXInO1xuaW1wb3J0IExhYmVsQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvTGFiZWxCdWlsZGVyJztcbmltcG9ydCBTZWxlY3RvckZyb21FbnVtQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXInO1xuXG5pbXBvcnQgeyBTdHlsZU5hbWVFbnVtIH0gZnJvbSAnLi4vZW51bXMvc3R5bGUtbmFtZS5lbnVtJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdlbmVyaWNQcmltYXJ5U2VsZWN0b3JDb21wb25lbnQge1xuICAgIHByaXZhdGUgZG9tRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBjb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgbGFiZWw6IHN0cmluZztcbiAgICBwcml2YXRlIGF0cmlidXRlVG9Nb2RpZnk6IHN0cmluZztcbiAgICBwcml2YXRlIG9wdGlvbnM6IFJlY29yZDxzdHJpbmcsc3RyaW5nPjtcbiAgICBwcml2YXRlIHByb3BlcnR5U2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IoZG9tRWxlbWVudDogSFRNTEVsZW1lbnQsIGF0cmlidXRlVG9Nb2RpZnk6IHN0cmluZywgbGFiZWw6IHN0cmluZywgb3B0aW9uczogUmVjb3JkPHN0cmluZyxzdHJpbmc+KSB7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gICAgICAgIHRoaXMubGFiZWwgPSBsYWJlbDtcbiAgICAgICAgdGhpcy5hdHJpYnV0ZVRvTW9kaWZ5ID0gYXRyaWJ1dGVUb01vZGlmeTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnRzKCk7XG4gICAgfVxuXG4gICAgZ2V0IGNvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkQ29tcG9uZW50cygpIHtcbiAgICAgICAgdGhpcy51cGRhdGVQcm9wZXJ0eSA9IHRoaXMudXBkYXRlUHJvcGVydHkuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnByb3BlcnR5U2VsZWN0b3IgPSBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIodGhpcy5vcHRpb25zKVxuICAgICAgICAgICAgLnNlbGVjdE9wdGlvbih0aGlzLmRvbUVsZW1lbnRbdGhpcy5hdHJpYnV0ZVRvTW9kaWZ5XSlcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnVwZGF0ZVByb3BlcnR5KVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICBjb25zdCBlbGVtZW50c0NvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLnByb3BlcnR5U2VsZWN0b3IpXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uYm9yZGVyLCAnMXB4IHNvbGlkICM0Q0FGNTAnKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ucGFkZGluZywgJzNweCcpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQodGhpcy5sYWJlbClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKGVsZW1lbnRzQ29udGFpbmVyKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZVByb3BlcnR5KCkge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRbdGhpcy5hdHJpYnV0ZVRvTW9kaWZ5XSA9IHRoaXMucHJvcGVydHlTZWxlY3Rvci52YWx1ZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29udGFpbmVyQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvQ29udGFpbmVyQnVpbGRlcic7XG5pbXBvcnQgSW5wdXRCdWlsZGVyIGZyb20gJy4uL21vZGVscy9JbnB1dEJ1aWxkZXInO1xuaW1wb3J0IExhYmVsQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvTGFiZWxCdWlsZGVyJztcbmltcG9ydCBCdXR0b25CdWlsZGVyIGZyb20gJy4uL21vZGVscy9CdXR0b25CdWlsZGVyJztcbmltcG9ydCBSYXdIVE1MQ29ucG9uZW50IGZyb20gJy4uLy4uL2h0bWwtY29tcG9uZW50cy9SYXdIVE1MQ29tcG9uZW50JztcblxuaW1wb3J0IGRlZmluZUVsZW1lbnRJZCBmcm9tICcuLi9mdW5jdGlvbnMvZGVmaW5lLWVsZW1lbnQtaWQnO1xuXG5pbXBvcnQgeyBTdHlsZU5hbWVFbnVtIH0gZnJvbSAnLi4vZW51bXMvc3R5bGUtbmFtZS5lbnVtJztcbmltcG9ydCB7IElucHV0VHlwZUVudW0gfSBmcm9tICcuLi9lbnVtcy9pbnB1dC10eXBlLmVudW0nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJZERlZmluaXRpb25Db21wb25lbnQge1xuICAgIHByaXZhdGUgZG9tRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBjb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlczogSFRNTEVsZW1lbnRbXTtcblxuICAgIHByaXZhdGUgcHJvcGVydHlWYWx1ZUlucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IoZG9tRWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgLy8gVE9ETzogc2kgbGEgY2xhc2Ugc29sbyBsYSB1dGlsaXphIGVzZSB1bmljbyBjb21wb25lbnRlLFxuICAgICAgICAvLyBxdWl6YXMgZWwgbm9tYnJlIGRlIGxhIGNsYXNlIGNzcyBkZWJlcmlhIGlyIGNvbiAjIHkgbm8gY29uIHB1bnRvLi4uXG5cbiAgICAgICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgICAgICAgSWREZWZpbml0aW9uQ29tcG9uZW50Lmluc3RhbmNlcyA9IFJhd0hUTUxDb25wb25lbnQuaW5zdGFuY2VzO1xuICAgICAgICB0aGlzLmFkZENvbXBvbmVudHMoKTtcbiAgICB9XG5cbiAgICBnZXQgY29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRDb21wb25lbnRzKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVByb3BlcnR5ID0gdGhpcy51cGRhdGVQcm9wZXJ0eS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMucHJvcGVydHlWYWx1ZUlucHV0ID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLnRleHQpXG4gICAgICAgICAgICAuc2V0VmFsdWUodGhpcy5kb21FbGVtZW50LmlkKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy51cGRhdGVQcm9wZXJ0eSlcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgY29uc3QgZWxlbWVudHNDb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5wcm9wZXJ0eVZhbHVlSW5wdXQpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICAgICAgbmV3IEJ1dHRvbkJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdDaGFuZ2UnKVxuICAgICAgICAgICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnVwZGF0ZVByb3BlcnR5KVxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmJvcmRlciwgJzFweCBzb2xpZCAjNENBRjUwJylcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLnBhZGRpbmcsICczcHgnKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdJZCBEZWZpbml0aW9uJylcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKGVsZW1lbnRzQ29udGFpbmVyKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZVByb3BlcnR5KGV2ZW50OiBNb3VzZUV2ZW50IHwgS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAoIHRoaXMucHJvcGVydHlWYWx1ZUlucHV0LnZhbHVlICE9PSB0aGlzLmRvbUVsZW1lbnQuaWRcbiAgICAgICAgICAgICYmICggZXZlbnQudHlwZSA9PT0gJ2NsaWNrJ1xuICAgICAgICAgICAgfHwgKGV2ZW50IGFzIEtleWJvYXJkRXZlbnQpLmtleSA9PT0gJ0VudGVyJ1xuICAgICAgICAgICAgfHwgKGV2ZW50IGFzIEtleWJvYXJkRXZlbnQpLmNvZGUgPT09ICcxMydcbiAgICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gZGVmaW5lRWxlbWVudElkKHRoaXMucHJvcGVydHlWYWx1ZUlucHV0LnZhbHVlLCBJZERlZmluaXRpb25Db21wb25lbnQuaW5zdGFuY2VzKTtcblxuICAgICAgICAgICAgICAgIGlmKGlkID09PSAnJyl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50LmlkID0gaWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wZXJ0eVZhbHVlSW5wdXQudmFsdWUgPSB0aGlzLmRvbUVsZW1lbnQuaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgQ29udGFpbmVyQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvQ29udGFpbmVyQnVpbGRlcic7XG5pbXBvcnQgTGFiZWxCdWlsZGVyIGZyb20gJy4uL21vZGVscy9MYWJlbEJ1aWxkZXInO1xuaW1wb3J0IElucHV0QnVpbGRlciBmcm9tICcuLi9tb2RlbHMvSW5wdXRCdWlsZGVyJztcbmltcG9ydCBTZWxlY3RvckZyb21FbnVtQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXInO1xuXG5pbXBvcnQgZ2V0VW5pdCBmcm9tICcuLi9mdW5jdGlvbnMvZ2V0LWNzcy11bml0JztcblxuaW1wb3J0IHsgU3R5bGVOYW1lRW51bSB9IGZyb20gJy4uL2VudW1zL3N0eWxlLW5hbWUuZW51bSc7XG5pbXBvcnQgeyBJbnB1dFR5cGVFbnVtIH0gZnJvbSAnLi4vZW51bXMvaW5wdXQtdHlwZS5lbnVtJztcbmltcG9ydCB7IFVuaXRzRW51bSB9IGZyb20gJy4uL2VudW1zL3VuaXRzLmVudW0nO1xuaW1wb3J0IHsgRGlzcGxheVR5cGVzRW51bSB9IGZyb20gJy4uL2VudW1zL2Rpc3BsYXktdHlwZXMuZW51bSc7XG5pbXBvcnQgeyBGbGV4RGlyZWN0aW9uRW51bSB9IGZyb20gJy4uL2VudW1zL2ZsZXgtZGlyZWN0aW9uLmVudW0nO1xuaW1wb3J0IHsgQWxpZ25GbGV4SXRlbXNFbnVtIH0gZnJvbSAnLi4vZW51bXMvYWxpZ24tZmxleC1pdGVtcy5lbnVtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXRBbmRVbml0c1NlbGVjdG9yQ29tcG9uZW50IHtcbiAgICBwcml2YXRlIGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBkb21FbGVtZW50U3R5bGVTaGVldDogQ1NTU3R5bGVEZWNsYXJhdGlvbjtcblxuICAgIHByaXZhdGUgbGFiZWw6IHN0cmluZztcbiAgICBwcml2YXRlIHN0eWxlOiBzdHJpbmc7XG5cbiAgICBwcml2YXRlIHByb3BlcnR5VmFsdWVJbnB1dDogSW5wdXRCdWlsZGVyO1xuICAgIHByaXZhdGUgdW5pdHNTZWxlY3RvcklucHV0OiBTZWxlY3RvckZyb21FbnVtQnVpbGRlcjtcblxuICAgIHByaXZhdGUgemVyb1ZhbHVlOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihkb21FbGVtZW50U3R5bGVTaGVldDogQ1NTU3R5bGVEZWNsYXJhdGlvbiwgc3R5bGU6IHN0cmluZywgbGFiZWw6IHN0cmluZykge1xuICAgICAgICB0aGlzLnN0eWxlID0gc3R5bGU7XG4gICAgICAgIHRoaXMubGFiZWwgPSBsYWJlbDtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCA9IGRvbUVsZW1lbnRTdHlsZVNoZWV0O1xuICAgICAgICB0aGlzLmFkZENvbXBvbmVudHMoKTtcbiAgICAgICAgdGhpcy5zZXRJbml0aWFsVmFsdWVzKCk7XG4gICAgfVxuXG4gICAgZ2V0IGNvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkQ29tcG9uZW50cygpIHtcbiAgICAgICAgdGhpcy51cGRhdGVQcm9wZXJ0eSA9IHRoaXMudXBkYXRlUHJvcGVydHkuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnVuaXRzU2VsZWN0b3JJbnB1dCA9IG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihVbml0c0VudW0pXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVQcm9wZXJ0eSlcblxuICAgICAgICB0aGlzLnByb3BlcnR5VmFsdWVJbnB1dCA9IG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS5udW1iZXIpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLnVwZGF0ZVByb3BlcnR5KVxuXG4gICAgICAgIGNvbnN0IGlubmVyQ29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMucHJvcGVydHlWYWx1ZUlucHV0LmJ1aWxkKCkpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy51bml0c1NlbGVjdG9ySW5wdXQuYnVpbGQoKSlcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnZmxleC1kaXJlY3Rpb24nXSwgRmxleERpcmVjdGlvbkVudW0uY29sdW1uKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW1bJ2FsaWduLWl0ZW1zJ10sIEFsaWduRmxleEl0ZW1zRW51bS5zdHJldGNoKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KHRoaXMubGFiZWwpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChpbm5lckNvbnRhaW5lcilcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRJbml0aWFsVmFsdWVzKCkge1xuICAgICAgICB0aGlzLnByb3BlcnR5VmFsdWVJbnB1dC5zZXRWYWx1ZShgJHtwYXJzZUludCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0W3RoaXMuc3R5bGVdKSB8fCAwfWApXG4gICAgICAgIHRoaXMudW5pdHNTZWxlY3RvcklucHV0LnNlbGVjdE9wdGlvbihnZXRVbml0KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbdGhpcy5zdHlsZV0pKVxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlUHJvcGVydHkoKSB7XG4gICAgICAgIGlmKHBhcnNlSW50KHRoaXMucHJvcGVydHlWYWx1ZUlucHV0LmdldFZhbHVlKCkpID09PSB0aGlzLnplcm9WYWx1ZSl7XG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0W3RoaXMuc3R5bGVdID0gJyc7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFt0aGlzLnN0eWxlXSA9XG4gICAgICAgICAgICBgJHt0aGlzLnByb3BlcnR5VmFsdWVJbnB1dC5nZXRWYWx1ZSgpfSR7dGhpcy51bml0c1NlbGVjdG9ySW5wdXQuZ2V0VmFsdWUoKX1gXG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZVN0eWxlU2hlZXQoZG9tRWxlbWVudFN0eWxlU2hlZXQ6IENTU1N0eWxlRGVjbGFyYXRpb24pIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCA9IGRvbUVsZW1lbnRTdHlsZVNoZWV0O1xuICAgICAgICB0aGlzLnNldEluaXRpYWxWYWx1ZXMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0TWluVmFsdWUodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLnByb3BlcnR5VmFsdWVJbnB1dC5zZXRNaW4odmFsdWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0WmVyb1ZhbHVlKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy56ZXJvVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuIiwiaW1wb3J0IENsYXNzQ2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2UgZnJvbSAnLi4vaW50ZXJmYWNlcy9jbGFzcy1jaGFuZ2Utb2JzZXJ2ZXIuaW50ZXJmYWNlJztcblxuaW1wb3J0IENvbnRhaW5lckJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0NvbnRhaW5lckJ1aWxkZXInO1xuaW1wb3J0IElucHV0QnVpbGRlciBmcm9tICcuLi9tb2RlbHMvSW5wdXRCdWlsZGVyJztcbmltcG9ydCBMYWJlbEJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0xhYmVsQnVpbGRlcic7XG5pbXBvcnQgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL1NlbGVjdG9yRnJvbUVudW1CdWlsZGVyJztcblxuaW1wb3J0IHsgSW5wdXRUeXBlRW51bSB9IGZyb20gJy4uL2VudW1zL2lucHV0LXR5cGUuZW51bSc7XG5pbXBvcnQgeyBVbml0c0VudW0gfSBmcm9tICcuLi9lbnVtcy91bml0cy5lbnVtJztcbmltcG9ydCB7IFN0eWxlTmFtZUVudW0gfSBmcm9tICcuLi9lbnVtcy9zdHlsZS1uYW1lLmVudW0nO1xuXG5pbXBvcnQgQ3NzU3R5bGVTaGVldCBmcm9tICcuLi8uLi9jc3Mtc3R5bGVzaGVldC9jc3Mtc3R5bGVzaGVldCc7XG5cbmltcG9ydCBjYXBpdGFsaXplRmlyc3RMZXR0ZXJzIGZyb20gJy4uL2Z1bmN0aW9ucy9maXJzdC1sZXR0ZXJzLWNhcGl0YWxpemVkJztcbmltcG9ydCBnZXRVbml0IGZyb20gJy4uL2Z1bmN0aW9ucy9nZXQtY3NzLXVuaXQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXJnaW5PclBhZGRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBDbGFzc0NoYW5nZU9ic2VydmVySW50ZXJmYWNlIHtcbiAgICBwcml2YXRlIHR5cGU7XG4gICAgcHJpdmF0ZSBkb21FbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBkb21FbGVtZW50U3R5bGVTaGVldDogQ1NTU3R5bGVEZWNsYXJhdGlvbjtcblxuICAgIHByaXZhdGUgdG9wUHJvcGVydHlWYWx1ZUlucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHByaXZhdGUgcmlndGhQcm9wZXJ0eVZhbHVlSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBib3R0b21Qcm9wZXJ0eVZhbHVlSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBsZWZ0UHJvcGVydHlWYWx1ZUlucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSB0b3BVbml0U2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIHByaXZhdGUgcmlnaHRVbml0U2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIHByaXZhdGUgYm90dG9tVW5pdFNlbGVjdG9yOiBIVE1MU2VsZWN0RWxlbWVudDtcbiAgICBwcml2YXRlIGxlZnRVbml0U2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSBzZWxlY3RBbGxDaGVja0JveDogSFRNTElucHV0RWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKGRvbUVsZW1lbnQ6IEhUTUxFbGVtZW50LCB0eXBlOiAnbWFyZ2luJyB8ICdwYWRkaW5nJywgKSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQgPSBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXModGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdFswXSlcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnRzKCk7XG4gICAgICAgIHRoaXMuc2V0VmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpO1xuICAgICAgICB0aGlzLnVwZGF0ZVByb3BlcnR5KClcbiAgICB9XG5cbiAgICBnZXQgY29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRDb21wb25lbnRzKCkge1xuICAgICAgICAvLyBUT0RPOiBmYWx0YSBhZ3JlZ2FyIGVsICFpbXBvcnRhbnQgeSBxdWl6YXMgbG9zIGluaGVyaXQgeSBubyBzZSBzaSBoYWJyYSBtYXMgcHJvcGllZGFkZXNcbiAgICAgICAgLy8gcXVpemFzIHRvZG8gZXNvIGRlYmEgZXN0YXIgZW4gZWwgc2VsZWN0b3IgZGUgbGEgdW5pZGFkLi4uXG5cbiAgICAgICAgdGhpcy51cGRhdGVQcm9wZXJ0eSA9IHRoaXMudXBkYXRlUHJvcGVydHkuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnNlbGVjdEFsbENoZWNrQm94ID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLmNoZWNrYm94KVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudXBkYXRlUHJvcGVydHkpXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIGNvbnN0IHNlbGVjdEFsbENvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdTZWxlY3QgQWxsJylcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuc2VsZWN0QWxsQ2hlY2tCb3gpXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIHRoaXMudG9wUHJvcGVydHlWYWx1ZUlucHV0ID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLm51bWJlcilcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMudXBkYXRlUHJvcGVydHkpXG4gICAgICAgICAgICAuYnVpbGQoKTtcbiAgICAgICAgdGhpcy5yaWd0aFByb3BlcnR5VmFsdWVJbnB1dCA9IG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS5udW1iZXIpXG4gICAgICAgICAgICAuZGlzYWJsZWQodGhpcy5zZWxlY3RBbGxDaGVja0JveC5jaGVja2VkKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy51cGRhdGVQcm9wZXJ0eSlcbiAgICAgICAgICAgIC5idWlsZCgpO1xuICAgICAgICB0aGlzLmJvdHRvbVByb3BlcnR5VmFsdWVJbnB1dCA9IG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS5udW1iZXIpXG4gICAgICAgICAgICAuZGlzYWJsZWQodGhpcy5zZWxlY3RBbGxDaGVja0JveC5jaGVja2VkKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy51cGRhdGVQcm9wZXJ0eSlcbiAgICAgICAgICAgIC5idWlsZCgpO1xuICAgICAgICB0aGlzLmxlZnRQcm9wZXJ0eVZhbHVlSW5wdXQgPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0ubnVtYmVyKVxuICAgICAgICAgICAgLmRpc2FibGVkKHRoaXMuc2VsZWN0QWxsQ2hlY2tCb3guY2hlY2tlZClcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMudXBkYXRlUHJvcGVydHkpXG4gICAgICAgICAgICAuYnVpbGQoKTtcblxuICAgICAgICB0aGlzLnRvcFVuaXRTZWxlY3RvciA9IG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihVbml0c0VudW0pXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVQcm9wZXJ0eSlcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgIHRoaXMuYm90dG9tVW5pdFNlbGVjdG9yID0gbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKFVuaXRzRW51bSlcbiAgICAgICAgICAgIC5kaXNhYmxlZCh0aGlzLnNlbGVjdEFsbENoZWNrQm94LmNoZWNrZWQpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVQcm9wZXJ0eSlcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgIHRoaXMucmlnaHRVbml0U2VsZWN0b3IgPSBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIoVW5pdHNFbnVtKVxuICAgICAgICAgICAgLmRpc2FibGVkKHRoaXMuc2VsZWN0QWxsQ2hlY2tCb3guY2hlY2tlZClcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnVwZGF0ZVByb3BlcnR5KVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgdGhpcy5sZWZ0VW5pdFNlbGVjdG9yID0gbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKFVuaXRzRW51bSlcbiAgICAgICAgICAgIC5kaXNhYmxlZCh0aGlzLnNlbGVjdEFsbENoZWNrQm94LmNoZWNrZWQpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVQcm9wZXJ0eSlcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgY29uc3QgdG9wQ29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ1QnKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy50b3BQcm9wZXJ0eVZhbHVlSW5wdXQpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy50b3BVbml0U2VsZWN0b3IpXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIGNvbnN0IHJpZ2h0Q29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ1InKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5yaWd0aFByb3BlcnR5VmFsdWVJbnB1dClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLnJpZ2h0VW5pdFNlbGVjdG9yKVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICBjb25zdCBib3R0b21Db250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnQicpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmJvdHRvbVByb3BlcnR5VmFsdWVJbnB1dClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmJvdHRvbVVuaXRTZWxlY3RvcilcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgY29uc3QgbGVmdENvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdMJylcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMubGVmdFByb3BlcnR5VmFsdWVJbnB1dClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmxlZnRVbml0U2VsZWN0b3IpXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIGNvbnN0IGlucHV0VmFsdWVzQ29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRvcENvbnRhaW5lcilcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChyaWdodENvbnRhaW5lcilcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChib3R0b21Db250YWluZXIpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobGVmdENvbnRhaW5lcilcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5ib3JkZXIsICcxcHggc29saWQgIzRDQUY1MCcpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5wYWRkaW5nLCAnM3B4JylcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldElubmVyVGV4dChgJHtjYXBpdGFsaXplRmlyc3RMZXR0ZXJzKHRoaXMudHlwZSwgJyAnLCAnICcpfSBTZWxlY3RvcmApXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChzZWxlY3RBbGxDb250YWluZXIpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQoaW5wdXRWYWx1ZXNDb250YWluZXIpXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlUHJvcGVydHkoKSB7XG4gICAgICAgIGxldCB7dG9wLCByaWdodCwgYm90dG9tLCBsZWZ0fSA9IHRoaXMuZ2V0Q3VycmVudFByb3BlcnRpZXMoKTtcblxuICAgICAgICBpZih0aGlzLnNlbGVjdEFsbENoZWNrQm94LmNoZWNrZWQpe1xuICAgICAgICAgICAgdGhpcy5yaWd0aFByb3BlcnR5VmFsdWVJbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbVByb3BlcnR5VmFsdWVJbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmxlZnRQcm9wZXJ0eVZhbHVlSW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5yaWdodFVuaXRTZWxlY3Rvci5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbVVuaXRTZWxlY3Rvci5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmxlZnRVbml0U2VsZWN0b3IuZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICBpZih0aGlzLnRvcFVuaXRTZWxlY3Rvci52YWx1ZSA9PT0gVW5pdHNFbnVtLmF1dG8pe1xuICAgICAgICAgICAgICAgIHRvcCA9ICdhdXRvJztcbiAgICAgICAgICAgICAgICByaWdodCA9ICdhdXRvJztcbiAgICAgICAgICAgICAgICBib3R0b20gPSAnYXV0byc7XG4gICAgICAgICAgICAgICAgbGVmdCA9ICdhdXRvJztcblxuICAgICAgICAgICAgICAgIHRoaXMudG9wUHJvcGVydHlWYWx1ZUlucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ3RoUHJvcGVydHlWYWx1ZUlucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmJvdHRvbVByb3BlcnR5VmFsdWVJbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5sZWZ0UHJvcGVydHlWYWx1ZUlucHV0LmRpc2FibGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHRoaXMucmlnaHRVbml0U2VsZWN0b3IudmFsdWUgPSB0aGlzLnRvcFVuaXRTZWxlY3Rvci52YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmJvdHRvbVVuaXRTZWxlY3Rvci52YWx1ZSA9IHRoaXMudG9wVW5pdFNlbGVjdG9yLnZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMubGVmdFVuaXRTZWxlY3Rvci52YWx1ZSA9IHRoaXMudG9wVW5pdFNlbGVjdG9yLnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy50b3BQcm9wZXJ0eVZhbHVlSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ3RoUHJvcGVydHlWYWx1ZUlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgdGhpcy5ib3R0b21Qcm9wZXJ0eVZhbHVlSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnRQcm9wZXJ0eVZhbHVlSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b3BQcm9wZXJ0eVZhbHVlSW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0b3AgPSBgJHt0aGlzLnRvcFByb3BlcnR5VmFsdWVJbnB1dC52YWx1ZX0ke3RoaXMudG9wVW5pdFNlbGVjdG9yLnZhbHVlfWA7XG4gICAgICAgICAgICAgICAgcmlnaHQgPSBgJHt0aGlzLnRvcFByb3BlcnR5VmFsdWVJbnB1dC52YWx1ZX0ke3RoaXMudG9wVW5pdFNlbGVjdG9yLnZhbHVlfWA7XG4gICAgICAgICAgICAgICAgYm90dG9tID0gYCR7dGhpcy50b3BQcm9wZXJ0eVZhbHVlSW5wdXQudmFsdWV9JHt0aGlzLnRvcFVuaXRTZWxlY3Rvci52YWx1ZX1gO1xuICAgICAgICAgICAgICAgIGxlZnQgPSBgJHt0aGlzLnRvcFByb3BlcnR5VmFsdWVJbnB1dC52YWx1ZX0ke3RoaXMudG9wVW5pdFNlbGVjdG9yLnZhbHVlfWA7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJpZ3RoUHJvcGVydHlWYWx1ZUlucHV0LnZhbHVlID0gdGhpcy50b3BQcm9wZXJ0eVZhbHVlSW5wdXQudmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5ib3R0b21Qcm9wZXJ0eVZhbHVlSW5wdXQudmFsdWUgPSB0aGlzLnRvcFByb3BlcnR5VmFsdWVJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnRQcm9wZXJ0eVZhbHVlSW5wdXQudmFsdWUgPSB0aGlzLnRvcFByb3BlcnR5VmFsdWVJbnB1dC52YWx1ZTtcblxuICAgICAgICAgICAgICAgIGlmKHBhcnNlSW50KHRoaXMudG9wUHJvcGVydHlWYWx1ZUlucHV0LnZhbHVlKSA9PT0gMCl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbdGhpcy50eXBlXSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yaWdodFVuaXRTZWxlY3Rvci5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5ib3R0b21Vbml0U2VsZWN0b3IuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubGVmdFVuaXRTZWxlY3Rvci5kaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZih0aGlzLnRvcFVuaXRTZWxlY3Rvci52YWx1ZSA9PT0gVW5pdHNFbnVtLmF1dG8pe1xuICAgICAgICAgICAgICAgIHRvcCA9ICdhdXRvJztcbiAgICAgICAgICAgICAgICB0aGlzLnRvcFByb3BlcnR5VmFsdWVJbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudG9wUHJvcGVydHlWYWx1ZUlucHV0LmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdG9wID0gYCR7dGhpcy50b3BQcm9wZXJ0eVZhbHVlSW5wdXQudmFsdWV9JHt0aGlzLnRvcFVuaXRTZWxlY3Rvci52YWx1ZX1gO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZih0aGlzLnJpZ2h0VW5pdFNlbGVjdG9yLnZhbHVlID09PSBVbml0c0VudW0uYXV0byl7XG4gICAgICAgICAgICAgICAgcmlnaHQgPSAnYXV0byc7XG4gICAgICAgICAgICAgICAgdGhpcy5yaWd0aFByb3BlcnR5VmFsdWVJbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucmlndGhQcm9wZXJ0eVZhbHVlSW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByaWdodCA9IGAke3RoaXMucmlndGhQcm9wZXJ0eVZhbHVlSW5wdXQudmFsdWV9JHt0aGlzLnJpZ2h0VW5pdFNlbGVjdG9yLnZhbHVlfWA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHRoaXMuYm90dG9tVW5pdFNlbGVjdG9yLnZhbHVlID09PSBVbml0c0VudW0uYXV0byl7XG4gICAgICAgICAgICAgICAgYm90dG9tID0gJ2F1dG8nO1xuICAgICAgICAgICAgICAgIHRoaXMuYm90dG9tUHJvcGVydHlWYWx1ZUlucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib3R0b21Qcm9wZXJ0eVZhbHVlSW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBib3R0b20gPSBgJHt0aGlzLmJvdHRvbVByb3BlcnR5VmFsdWVJbnB1dC52YWx1ZX0ke3RoaXMuYm90dG9tVW5pdFNlbGVjdG9yLnZhbHVlfWA7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYodGhpcy5sZWZ0VW5pdFNlbGVjdG9yLnZhbHVlID09PSBVbml0c0VudW0uYXV0byl7XG4gICAgICAgICAgICAgICAgbGVmdCA9ICdhdXRvJztcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnRQcm9wZXJ0eVZhbHVlSW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnRQcm9wZXJ0eVZhbHVlSW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBsZWZ0ID0gYCR7dGhpcy5sZWZ0UHJvcGVydHlWYWx1ZUlucHV0LnZhbHVlfSR7dGhpcy5sZWZ0VW5pdFNlbGVjdG9yLnZhbHVlfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0W3RoaXMudHlwZV0gPSBbdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0XS5qb2luKCcgJyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRWYWx1ZXNBY2NvcmRpbmdUb0NsYXNzKCkge1xuICAgICAgICBjb25zdCB7dG9wLCByaWdodCwgYm90dG9tLCBsZWZ0LCBhbGxFcXVhbH0gPSB0aGlzLmdldEN1cnJlbnRQcm9wZXJ0aWVzKCk7XG5cbiAgICAgICAgdGhpcy5zZWxlY3RBbGxDaGVja0JveC5jaGVja2VkID0gYWxsRXF1YWw7XG5cbiAgICAgICAgdGhpcy50b3BQcm9wZXJ0eVZhbHVlSW5wdXQudmFsdWUgPSBgJHtwYXJzZUludCh0b3ApfWA7XG4gICAgICAgIHRoaXMucmlndGhQcm9wZXJ0eVZhbHVlSW5wdXQudmFsdWUgPSBgJHtwYXJzZUludChyaWdodCl9YDtcbiAgICAgICAgdGhpcy5ib3R0b21Qcm9wZXJ0eVZhbHVlSW5wdXQudmFsdWUgPSBgJHtwYXJzZUludChib3R0b20pfWA7XG4gICAgICAgIHRoaXMubGVmdFByb3BlcnR5VmFsdWVJbnB1dC52YWx1ZSA9IGAke3BhcnNlSW50KGxlZnQpfWA7XG5cbiAgICAgICAgdGhpcy50b3BVbml0U2VsZWN0b3IudmFsdWUgPSBnZXRVbml0KHRvcCk7XG4gICAgICAgIHRoaXMuYm90dG9tVW5pdFNlbGVjdG9yLnZhbHVlID0gZ2V0VW5pdChib3R0b20pO1xuICAgICAgICB0aGlzLnJpZ2h0VW5pdFNlbGVjdG9yLnZhbHVlID0gZ2V0VW5pdChyaWdodCk7XG4gICAgICAgIHRoaXMubGVmdFVuaXRTZWxlY3Rvci52YWx1ZSA9IGdldFVuaXQobGVmdCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRDdXJyZW50UHJvcGVydGllcygpOiBTdHlsZXNSZXR1cm5PYmplY3RJbnRlcmZhY2Uge1xuICAgICAgICBjb25zdCB0b3AgPSB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0W2Ake3RoaXMudHlwZX0tdG9wYF07XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFtgJHt0aGlzLnR5cGV9LXJpZ2h0YF07XG4gICAgICAgIGNvbnN0IGJvdHRvbSA9IHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbYCR7dGhpcy50eXBlfS1ib3R0b21gXTtcbiAgICAgICAgY29uc3QgbGVmdCA9IHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbYCR7dGhpcy50eXBlfS1sZWZ0YF07XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRvcDogdG9wID8gdG9wIDogJzBweCcsXG4gICAgICAgICAgICByaWdodDogcmlnaHQgPyByaWdodCA6ICcwcHgnLFxuICAgICAgICAgICAgYm90dG9tOiBib3R0b20gPyBib3R0b20gOiAnMHB4JyxcbiAgICAgICAgICAgIGxlZnQ6IGxlZnQgPyBsZWZ0IDogJzBweCcsXG4gICAgICAgICAgICBhbGxFcXVhbDogdG9wID09PSByaWdodCAmJiB0b3AgPT09IGJvdHRvbSAmJiB0b3AgPT09IGxlZnQsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHVibGljIGNsYXNzTmFtZVVwZGF0ZWQobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQgPSBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXMobmFtZSk7XG4gICAgICAgIHRoaXMuc2V0VmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpO1xuICAgICAgICB0aGlzLnVwZGF0ZVByb3BlcnR5KCk7XG4gICAgfVxufVxuXG5pbnRlcmZhY2UgU3R5bGVzUmV0dXJuT2JqZWN0SW50ZXJmYWNlIHtcbiAgICB0b3A6IHN0cmluZyxcbiAgICByaWdodDogc3RyaW5nLFxuICAgIGJvdHRvbTogc3RyaW5nLFxuICAgIGxlZnQ6IHN0cmluZyxcbiAgICBhbGxFcXVhbDogYm9vbGVhbixcbn1cbiIsImltcG9ydCBDbGFzc0NoYW5nZU9ic2VydmVySW50ZXJmYWNlIGZyb20gJy4uL2ludGVyZmFjZXMvY2xhc3MtY2hhbmdlLW9ic2VydmVyLmludGVyZmFjZSc7XG5cbmltcG9ydCBDb250YWluZXJCdWlsZGVyIGZyb20gJy4uL21vZGVscy9Db250YWluZXJCdWlsZGVyJztcbmltcG9ydCBJbnB1dEJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0lucHV0QnVpbGRlcic7XG5pbXBvcnQgTGFiZWxCdWlsZGVyIGZyb20gJy4uL21vZGVscy9MYWJlbEJ1aWxkZXInO1xuaW1wb3J0IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyIGZyb20gJy4uL21vZGVscy9TZWxlY3RvckZyb21FbnVtQnVpbGRlcic7XG5cbmltcG9ydCBDc3NTdHlsZVNoZWV0IGZyb20gJy4uLy4uL2Nzcy1zdHlsZXNoZWV0L2Nzcy1zdHlsZXNoZWV0JztcbmltcG9ydCBnZXRVbml0IGZyb20gJy4uL2Z1bmN0aW9ucy9nZXQtY3NzLXVuaXQnO1xuXG5pbXBvcnQgeyBJbnB1dFR5cGVFbnVtIH0gZnJvbSAnLi4vZW51bXMvaW5wdXQtdHlwZS5lbnVtJztcbmltcG9ydCB7IFVuaXRzRW51bSB9IGZyb20gJy4uL2VudW1zL3VuaXRzLmVudW0nO1xuaW1wb3J0IHsgU3R5bGVOYW1lRW51bSB9IGZyb20gJy4uL2VudW1zL3N0eWxlLW5hbWUuZW51bSc7XG5pbXBvcnQgeyBEaXNwbGF5VHlwZXNFbnVtIH0gZnJvbSAnLi4vZW51bXMvZGlzcGxheS10eXBlcy5lbnVtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2l6ZXNDb21wb25lbnQgaW1wbGVtZW50cyBDbGFzc0NoYW5nZU9ic2VydmVySW50ZXJmYWNlIHtcbiAgICBwcml2YXRlIGRvbUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcbiAgICBwcml2YXRlIGRvbUVsZW1lbnRTdHlsZVNoZWV0OiBDU1NTdHlsZURlY2xhcmF0aW9uO1xuXG4gICAgcHJpdmF0ZSB3aWR0aFNpemVJbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgICBwcml2YXRlIHdpZHRoVW5pdFNlbGVjdG9yOiBIVE1MU2VsZWN0RWxlbWVudDtcblxuICAgIHByaXZhdGUgaGVpZ2h0U2l6ZUlucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHByaXZhdGUgaGVpZ2h0U2l6ZVNlbGVjdG9yOiBIVE1MU2VsZWN0RWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKGRvbUVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQgPSBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXModGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdFswXSk7XG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50cygpO1xuICAgIH1cblxuICAgIGdldCBjb21wb25lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZENvbXBvbmVudHMoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlV2lkdGggPSB0aGlzLnVwZGF0ZVdpZHRoLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlSGVpZ2h0ID0gdGhpcy51cGRhdGVIZWlnaHQuYmluZCh0aGlzKTtcblxuXG4gICAgICAgIHRoaXMuYnVpbGRBbGxDb21wb25lbnRzKCk7XG4gICAgICAgIHRoaXMuc2V0SW5pdGlhbFZhbHVlc0FjY29yZGluZ1RvQ2xhc3MoKTtcblxuICAgICAgICBjb25zdCB3aWR0aENvbXBvbmVudHNDb250YWluZXIgPSB0aGlzLmJ1aWxkU2l6ZUNvbnRhaW5lcihcbiAgICAgICAgICAgICdXaWR0aCcsXG4gICAgICAgICAgICB0aGlzLndpZHRoU2l6ZUlucHV0LFxuICAgICAgICAgICAgdGhpcy53aWR0aFVuaXRTZWxlY3RvclxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGhlaWdodENvbXBvbmVudHNDb250YWluZXIgPSB0aGlzLmJ1aWxkU2l6ZUNvbnRhaW5lcihcbiAgICAgICAgICAgICdIZWlnaHQnLFxuICAgICAgICAgICAgdGhpcy5oZWlnaHRTaXplSW5wdXQsXG4gICAgICAgICAgICB0aGlzLmhlaWdodFNpemVTZWxlY3RvclxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uYm9yZGVyLCAnMXB4IHNvbGlkICM0Q0FGNTAnKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ucGFkZGluZywgJzNweCcpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ1NpemVzJylcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKHdpZHRoQ29tcG9uZW50c0NvbnRhaW5lcilcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChoZWlnaHRDb21wb25lbnRzQ29udGFpbmVyKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICB9XG5cbiAgICBwcml2YXRlIGJ1aWxkU2l6ZUNvbnRhaW5lcihcbiAgICAgICAgbGFiZWw6IHN0cmluZyxcbiAgICAgICAgaW5wdXRDb21wb25lbnQ6IEhUTUxJbnB1dEVsZW1lbnQsXG4gICAgICAgIHNlbGVjdG9yQ29tcG9uZW50OiBIVE1MU2VsZWN0RWxlbWVudCkge1xuICAgICAgICByZXR1cm4gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KGxhYmVsKVxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQoaW5wdXRDb21wb25lbnQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHNlbGVjdG9yQ29tcG9uZW50KVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgIH1cblxuICAgIHByaXZhdGUgYnVpbGRBbGxDb21wb25lbnRzKCkge1xuICAgICAgICB0aGlzLndpZHRoU2l6ZUlucHV0ID0gdGhpcy5idWlsZElucHV0KElucHV0VHlwZUVudW0ubnVtYmVyLCB0aGlzLnVwZGF0ZVdpZHRoKTtcbiAgICAgICAgdGhpcy5oZWlnaHRTaXplSW5wdXQgPSB0aGlzLmJ1aWxkSW5wdXQoSW5wdXRUeXBlRW51bS5udW1iZXIsIHRoaXMudXBkYXRlSGVpZ2h0KTtcblxuICAgICAgICB0aGlzLndpZHRoVW5pdFNlbGVjdG9yID0gdGhpcy5idWlsZFNlbGVjdG9yKHRoaXMudXBkYXRlV2lkdGgpO1xuICAgICAgICB0aGlzLmhlaWdodFNpemVTZWxlY3RvciA9IHRoaXMuYnVpbGRTZWxlY3Rvcih0aGlzLnVwZGF0ZUhlaWdodCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRJbml0aWFsVmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpIHtcbiAgICAgICAgdGhpcy5zZXRXaWR0aFZhbHVlQWNjb3JkaW5nVG9DbGFzcygpO1xuICAgICAgICB0aGlzLnNldEhlaWdodFZhbHVlQWNjb3JkaW5nVG9DbGFzcygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0V2lkdGhWYWx1ZUFjY29yZGluZ1RvQ2xhc3MoKSB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnd2lkdGgnXTtcbiAgICAgICAgdGhpcy53aWR0aFNpemVJbnB1dC52YWx1ZSA9IGAke3BhcnNlSW50KHdpZHRoKSB8fCAwfWA7XG4gICAgICAgIHRoaXMud2lkdGhVbml0U2VsZWN0b3IudmFsdWUgPSBnZXRVbml0KHdpZHRoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEhlaWdodFZhbHVlQWNjb3JkaW5nVG9DbGFzcygpIHtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnaGVpZ2h0J107XG4gICAgICAgIHRoaXMuaGVpZ2h0U2l6ZUlucHV0LnZhbHVlID0gYCR7cGFyc2VJbnQoaGVpZ2h0KSB8fCAwfWA7XG4gICAgICAgIHRoaXMuaGVpZ2h0U2l6ZVNlbGVjdG9yLnZhbHVlID0gZ2V0VW5pdChoZWlnaHQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYnVpbGRJbnB1dChJbnB1dFR5cGVFbnVtOiBJbnB1dFR5cGVFbnVtLCBjYWxsYmFjazogeygpOiB2b2lkfSkge1xuICAgICAgICByZXR1cm4gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtKVxuICAgICAgICAgICAgLnNldE1pbigwKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgY2FsbGJhY2spXG4gICAgICAgICAgICAuYnVpbGQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGJ1aWxkU2VsZWN0b3IoY2FsbGJhY2s6IHsoKTogdm9pZH0pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihVbml0c0VudW0pXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgY2FsbGJhY2spXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlV2lkdGgoKSB7XG4gICAgICAgIGlmKHRoaXMud2lkdGhTaXplSW5wdXQudmFsdWUgPT09ICcwJyl7XG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0LnJlbW92ZVByb3BlcnR5KCd3aWR0aCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ3dpZHRoJ10gPSBgJHt0aGlzLndpZHRoU2l6ZUlucHV0LnZhbHVlfSR7dGhpcy53aWR0aFVuaXRTZWxlY3Rvci52YWx1ZX1gO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlSGVpZ2h0KCkge1xuICAgICAgICBpZih0aGlzLmhlaWdodFNpemVJbnB1dC52YWx1ZSA9PT0gJzAnKXtcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQucmVtb3ZlUHJvcGVydHkoJ2hlaWdodCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2hlaWdodCddID0gYCR7dGhpcy5oZWlnaHRTaXplSW5wdXQudmFsdWV9JHt0aGlzLmhlaWdodFNpemVTZWxlY3Rvci52YWx1ZX1gO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGFzc05hbWVVcGRhdGVkKG5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0ID0gQ3NzU3R5bGVTaGVldC5nZXRSdWxlU3R5bGVzKG5hbWUpO1xuICAgICAgICB0aGlzLnNldEluaXRpYWxWYWx1ZXNBY2NvcmRpbmdUb0NsYXNzKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IENzc1N0eWxlU2hlZXQgZnJvbSAnLi4vLi4vY3NzLXN0eWxlc2hlZXQvY3NzLXN0eWxlc2hlZXQnO1xuaW1wb3J0IENsYXNzQ2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2UgZnJvbSAnLi4vaW50ZXJmYWNlcy9jbGFzcy1jaGFuZ2Utb2JzZXJ2ZXIuaW50ZXJmYWNlJztcblxuaW1wb3J0IEJ1dHRvbkJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0J1dHRvbkJ1aWxkZXInO1xuaW1wb3J0IENvbnRhaW5lckJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0NvbnRhaW5lckJ1aWxkZXInO1xuaW1wb3J0IElucHV0QnVpbGRlciBmcm9tICcuLi9tb2RlbHMvSW5wdXRCdWlsZGVyJztcbmltcG9ydCBMYWJlbEJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0xhYmVsQnVpbGRlcic7XG5cbmltcG9ydCB7IElucHV0VHlwZUVudW0gfSBmcm9tICcuLi9lbnVtcy9pbnB1dC10eXBlLmVudW0nO1xuaW1wb3J0IHsgU3R5bGVOYW1lRW51bSB9IGZyb20gJy4uL2VudW1zL3N0eWxlLW5hbWUuZW51bSc7XG5pbXBvcnQgeyBEaXNwbGF5VHlwZXNFbnVtIH0gZnJvbSAnLi4vZW51bXMvZGlzcGxheS10eXBlcy5lbnVtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXJsRGVmaW5pdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIENsYXNzQ2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2Uge1xuICAgIHByaXZhdGUgZG9tRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBjb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgZG9tRWxlbWVudFN0eWxlU2hlZXQ6IENTU1N0eWxlRGVjbGFyYXRpb247XG5cbiAgICBwcml2YXRlIHVybElucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IoZG9tRWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCA9IENzc1N0eWxlU2hlZXQuZ2V0UnVsZVN0eWxlcyh0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0WzBdKTtcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnRzKCk7XG4gICAgfVxuXG4gICAgZ2V0IGN1cnJlbnRVcmwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnRbJ3NyYyddO1xuICAgIH1cblxuICAgIHNldE5ld1VybCh1cmw/OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50WydzcmMnXSA9IHVybDtcbiAgICB9XG5cbiAgICBnZXQgY29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRDb21wb25lbnRzKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVVybCA9IHRoaXMudXBkYXRlVXJsLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5idWlsZEFsbENvbXBvbmVudHMoKTtcbiAgICAgICAgdGhpcy5zZXRJbml0aWFsVmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpO1xuXG4gICAgICAgIGNvbnN0IGFjY2VwdEJ1dHRvbiA9IG5ldyBCdXR0b25CdWlsZGVyKClcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudXBkYXRlVXJsKVxuICAgICAgICAgICAgLnNldElubmVyVGV4dCgnQXNzaWduJylcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgY29uc3QgdXJsQ29tcG9uZW50c0NvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnQXNzaWduIFVybCcpXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLnVybElucHV0KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChhY2NlcHRCdXR0b24pXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5ib3JkZXIsICcxcHggc29saWQgIzRDQUY1MCcpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5wYWRkaW5nLCAnM3B4JylcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnSW1hZ2UgUHJvcGVydGllcycpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh1cmxDb21wb25lbnRzQ29udGFpbmVyKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICB9XG5cbiAgICBwcml2YXRlIGJ1aWxkQWxsQ29tcG9uZW50cygpIHtcbiAgICAgICAgdGhpcy5idWlsZFVybENvbXBvbmVudHMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGJ1aWxkVXJsQ29tcG9uZW50cygpIHtcbiAgICAgICAgdGhpcy51cmxJbnB1dCA9IG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS51cmwpLmJ1aWxkKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRJbml0aWFsVmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpIHtcbiAgICAgICAgdGhpcy5zZXRVcmxJbml0aWFsVmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0VXJsSW5pdGlhbFZhbHVlc0FjY29yZGluZ1RvQ2xhc3MoKSB7XG4gICAgICAgIHRoaXMudXJsSW5wdXQudmFsdWUgPSB0aGlzLmN1cnJlbnRVcmw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVVcmwoKSB7XG4gICAgICAgIGlmKHRoaXMudXJsSW5wdXQudmFsdWUgPT09ICcnKXtcbiAgICAgICAgICAgIHRoaXMuc2V0TmV3VXJsKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXROZXdVcmwodGhpcy51cmxJbnB1dC52YWx1ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNsYXNzTmFtZVVwZGF0ZWQobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQgPSBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXMobmFtZSk7XG4gICAgICAgIHRoaXMuc2V0SW5pdGlhbFZhbHVlc0FjY29yZGluZ1RvQ2xhc3MoKTtcbiAgICB9XG59XG4iLCJjb25zdCBjb250YW50cyA9IHtcbiAgICBJTlZFUlRFRF9CQUNLR1JPVU5EX0NPTE9SOiAncmdiKDIwOSwyNTUsMjQwJ1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb250YW50c1xuIiwiZXhwb3J0IGVudW0gQWxpZ25GbGV4Q29udGVudEVudW0ge1xuICAgICdmbGV4LXN0YXJ0JyA9ICdmbGV4LXN0YXJ0JyxcbiAgICAnZmxleC1lbmQnID0gJ2ZsZXgtZW5kJyxcbiAgICBjZW50ZXIgPSAnY2VudGVyJyxcbiAgICAnc3BhY2UtYmV0d2VlbicgPSAnc3BhY2UtYmV0d2VlbicsXG4gICAgJ3NwYWNlLWFyb3VuZCcgPSAnc3BhY2UtYXJvdW5kJyxcbiAgICBzdHJldGNoID0gJ3N0cmV0Y2gnLFxuICAgIG5vbmUgPSAnJyxcbn1cbiIsImV4cG9ydCBlbnVtIEFsaWduRmxleEl0ZW1zRW51bSB7XG4gICAgJ2ZsZXgtc3RhcnQnID0gJ2ZsZXgtc3RhcnQnLFxuICAgICdmbGV4LWVuZCcgPSAnZmxleC1lbmQnLFxuICAgIGNlbnRlciA9ICdjZW50ZXInLFxuICAgIGJhc2VsaW5lID0gJ2Jhc2VsaW5lJyxcbiAgICBzdHJldGNoID0gJ3N0cmV0Y2gnLFxuICAgIG5vbmUgPSAnJ1xufVxuIiwiZXhwb3J0IGVudW0gQWxpZ25GbGV4U2VsZkVudW0ge1xuICAgIGF1dG8gPSAnYXV0bycsXG4gICAgJ2ZsZXgtc3RhcnQnID0gJ2ZsZXgtc3RhcnQnLFxuICAgICdmbGV4LWVuZCcgPSAnZmxleC1lbmQnLFxuICAgIGNlbnRlciA9ICdjZW50ZXInLFxuICAgICdiYXNlbGluZScgPSAnYmFzZWxpbmUnLFxuICAgIHN0cmV0Y2ggPSAnc3RyZXRjaCcsXG4gICAgbm9uZSA9ICcnLFxufVxuIiwiZXhwb3J0IGVudW0gQWxpZ25HcmlkQ29udGVudEVudW0ge1xuICAgIHN0YXJ0ID0gJ3N0YXJ0JyxcbiAgICBlbmQgPSAnZW5kJyxcbiAgICBjZW50ZXIgPSAnY2VudGVyJyxcbiAgICBzdHJldGNoID0gJ3N0cmV0Y2gnLFxuICAgICdzcGFjZS1iZXR3ZWVuJyA9ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAnc3BhY2UtYXJvdW5kJyA9ICdzcGFjZS1hcm91bmQnLFxuICAgICdzcGFjZS1ldmVubHknID0gJ3NwYWNlLWV2ZW5seScsXG4gICAgbm9uZSA9ICcnXG59XG4iLCJleHBvcnQgZW51bSBBbGlnbkdyaWRJdGVtc0VudW0ge1xuICAgIHN0YXJ0ID0gJ3N0YXJ0JyxcbiAgICBlbmQgPSAnZW5kJyxcbiAgICBjZW50ZXIgPSAnY2VudGVyJyxcbiAgICBzdHJldGNoID0gJ3N0cmV0Y2gnLFxuICAgIG5vbmUgPSAnJ1xufVxuIiwiZXhwb3J0IGVudW0gQWxpZ25HcmlkU2VsZkVudW0ge1xuICAgIHN0YXJ0ID0gJ3N0YXJ0JyxcbiAgICBlbmQgPSAnZW5kJyxcbiAgICBjZW50ZXIgPSAnY2VudGVyJyxcbiAgICBzdHJldGNoID0gJ3N0cmV0Y2gnLFxuICAgIG5vbmUgPSAnJ1xufVxuIiwiZXhwb3J0IGVudW0gQm9yZGVyU3R5bGVFbnVtIHtcbiAgICBub25lID0gJ25vbmUnLFxuICAgIGhpZGRlbiA9ICdoaWRkZW4nLFxuICAgIGRvdHRlZCA9ICdkb3R0ZWQnLFxuICAgIGRhc2hlZCA9ICdkYXNoZWQnLFxuICAgIHNvbGlkID0gJ3NvbGlkJyxcbiAgICBkb3VibGUgPSAnZG91YmxlJyxcbiAgICBncm9vdmUgPSAnZ3Jvb3ZlJyxcbiAgICByaWRnZSA9ICdyaWRnZScsXG4gICAgaW5zZXQgPSAnaW5zZXQnLFxuICAgIG91dHNldCA9ICdvdXRzZXQnLFxufVxuXG5cblxuIiwiZXhwb3J0IGVudW0gQWRkQ29tcG9uZW50IHtcbiAgICBhZGRJZERlZmluaXRpb25Db21wb25lbnQgPSAnYWRkSWREZWZpbml0aW9uQ29tcG9uZW50JyxcbiAgICBhZGRDbGFzc05hbWVEZWZpbml0aW9uQ29tcG9uZW50ID0gJ2FkZENsYXNzTmFtZURlZmluaXRpb25Db21wb25lbnQnLFxuICAgIGFkZE1hcmdpblN0eWxlQ29tcG9uZW50ID0gJ2FkZE1hcmdpblN0eWxlQ29tcG9uZW50JyxcbiAgICBhZGRQYWRkaW5nU3R5bGVDb21wb25lbnQgPSAnYWRkUGFkZGluZ1N0eWxlQ29tcG9uZW50JyxcbiAgICBhZGRTaXplQ29tcG9uZW50cyA9ICdhZGRTaXplQ29tcG9uZW50cycsXG4gICAgYWRkRm9udENvbXBvbmVucyA9ICdhZGRGb250Q29tcG9uZW5zJyxcbiAgICBhZGRCYWNrZ3JvdW5kU2V0dGluZ3NDb21wb25lbnQgPSAnYWRkQmFja2dyb3VuZFNldHRpbmdzQ29tcG9uZW50JyxcbiAgICBhZGRCb3JkZXJTZXR0aW5nc0NvbXBvbmVudCA9ICdhZGRCb3JkZXJTZXR0aW5nc0NvbXBvbmVudCcsXG4gICAgYWRkQm94U2hhZG93Q29tcG9uZW50ID0gJ2FkZEJveFNoYWRvd0NvbXBvbmVudCcsXG4gICAgYWRkRGlzcGxheUFzQ2hpbGRDb21wb25lbnQgPSAnYWRkRGlzcGxheUFzQ2hpbGRDb21wb25lbnQnLFxuICAgIGFkZEFjdGlvbnNDb21wb25lbnRzID0gJ2FkZEFjdGlvbnNDb21wb25lbnRzJyxcblxuICAgIGFkZElubmVyVGV4dENoYW5nZUNvbXBvbmVudCA9ICdhZGRJbm5lclRleHRDaGFuZ2VDb21wb25lbnQnLFxuICAgIGFkZERpc3BsYXlBc1BhcmVudENvbXBvbmVudCA9ICdhZGREaXNwbGF5QXNQYXJlbnRDb21wb25lbnQnLFxuICAgIGFkZFVybElucHV0Q29tcG9uZW50ID0gJ2FkZFVybElucHV0Q29tcG9uZW50JyxcbiAgICBhZGRJbnB1dFR5cGVTZWxlY3RvckNvbXBvbmVudCA9ICdhZGRJbnB1dFR5cGVTZWxlY3RvckNvbXBvbmVudCcsXG59XG4iLCJleHBvcnQgZW51bSBEaXNwbGF5VHlwZXNFbnVtIHtcbiAgICBmbGV4ID0gJ2ZsZXgnLFxuICAgICdpbmxpbmUtZmxleCcgPSAnaW5saW5lLWZsZXgnLFxuICAgIGdyaWQgPSAnZ3JpZCcsXG4gICAgJ2lubGluZS1ncmlkJyA9ICdpbmxpbmUtZ3JpZCcsXG4gICAgYmxvY2sgPSAnYmxvY2snLFxuICAgIGlubGluZSA9ICdpbmxpbmUnLFxuICAgIGNvbnRlbnRzID0gJ2NvbnRlbnRzJyxcbiAgICBpbmhlcml0ID0gJ2luaGVyaXQnLFxuICAgIGluaXRpYWwgPSAnaW5pdGlhbCcsXG4gICAgcmV2ZXJ0ID0gJ3JldmVydCcsXG4gICAgdW5zZXQgPSAndW5zZXQnLFxuICAgIG5vbmUgPSAnJ1xufVxuIiwiZXhwb3J0IGVudW0gRXZlbnRUeXBlRW51bSB7XG4gICAgaW5wdXQgPSAnaW5wdXQnLFxuICAgIGNoYW5nZSA9ICdjaGFuZ2UnLFxufVxuIiwiZXhwb3J0IGVudW0gRmxleERpcmVjdGlvbkVudW0ge1xuICAgIHJvdyA9ICdyb3cnLFxuICAgICdyb3ctcmV2ZXJzZScgPSAncm93LXJldmVyc2UnLFxuICAgIGNvbHVtbiA9ICdjb2x1bW4nLFxuICAgICdjb2x1bW4tcmV2ZXJzZScgPSAnY29sdW1uLXJldmVyc2UnLFxuICAgIG5vbmUgPSAnJ1xufVxuIiwiZXhwb3J0IGVudW0gRmxleFdyYXBFbnVtIHtcbiAgICBub3dyYXAgPSAnbm93cmFwJyxcbiAgICB3cmFwID0gJ3dyYXAnLFxuICAgICd3cmFwLXJldmVyc2UnID0gJ3dyYXAtcmV2ZXJzZScsXG4gICAgbm9uZSA9ICcnXG59XG4iLCJleHBvcnQgZW51bSBGb250U3R5bGVzRW51bSB7XG4gICAgJ25vcm1hbCcgPSAnbm9ybWFsJyxcbiAgICAnaXRhbGljJyA9ICdpdGFsaWMnLFxuICAgICdvYmxpcXVlJyA9ICdvYmxpcXVlJyxcbn1cbiIsImV4cG9ydCBlbnVtIEZvbnRWYXJpYW50RW51bSB7XG4gICAgJ25vcm1hbCcgPSAnbm9ybWFsJyxcbiAgICAnc21hbGwtY2FwcycgPSAnc21hbGwtY2FwcycsXG4gICAgJ2FsbC1zbWFsbC1jYXBzJyA9ICdhbGwtc21hbGwtY2FwcycsXG4gICAgJ3BldGl0ZS1jYXBzJyA9ICdwZXRpdGUtY2FwcycsXG4gICAgJ2FsbC1wZXRpdGUtY2FwcycgPSAnYWxsLXBldGl0ZS1jYXBzJyxcbiAgICAndW5pY2FzZScgPSAndW5pY2FzZScsXG4gICAgJ3RpdGxpbmctY2FwcycgPSAndGl0bGluZy1jYXBzJyxcbiAgICAnaW5oZXJpdCcgPSAnaW5oZXJpdCcsXG4gICAgJ2luaXRpYWwnID0gJ2luaXRpYWwnLFxuICAgICdyZXZlcnQnID0gJ3JldmVydCcsXG4gICAgJ3JldmVydC1sYXllcicgPSAncmV2ZXJ0LWxheWVyJyxcbiAgICAndW5zZXQnID0gJ3Vuc2V0Jyxcbn1cbiIsImV4cG9ydCBlbnVtIEZvbnRXZWlnaHRFbnVtIHtcbiAgICAnbGlnaHRlcicgPSAnbGlnaHRlcicsXG4gICAgJ25vcm1hbCcgPSAnbm9ybWFsJyxcbiAgICAnYm9sZCcgPSAnYm9sZCcsXG4gICAgJ2JvbGRlcicgPSAnYm9sZGVyJyxcbiAgICAnczEwMCcgPSAnMTAwJyxcbiAgICAnczIwMCcgPSAnMjAwJyxcbiAgICAnczMwMCcgPSAnMzAwJyxcbiAgICAnczQwMCcgPSAnNDAwJyxcbiAgICAnczUwMCcgPSAnNTAwJyxcbiAgICAnczYwMCcgPSAnNjAwJyxcbiAgICAnczcwMCcgPSAnNzAwJyxcbiAgICAnczgwMCcgPSAnODAwJyxcbiAgICAnczkwMCcgPSAnOTAwJyxcbiAgICAnaW5oZXJpdCcgPSAnaW5oZXJpdCcsXG4gICAgJ2luaXRpYWwnID0gJ2luaXRpYWwnLFxuICAgICdyZXZlcnQnID0gJ3JldmVydCcsXG4gICAgJ3JldmVydC1sYXllcicgPSAncmV2ZXJ0LWxheWVyJyxcbiAgICAndW5zZXQnID0gJ3Vuc2V0Jyxcbn1cbiIsImV4cG9ydCBlbnVtIEZvbnRzRW51bSB7XG4gICAgJ2N1cnNpdmUnID0gJ2N1cnNpdmUnLFxuICAgICdtb25vc3BhY2UnID0gJ21vbm9zcGFjZScsXG4gICAgJ3NlcmlmJyA9ICdzZXJpZicsXG4gICAgJ3NhbnMtc2VyaWYnID0gJ3NhbnMtc2VyaWYnLFxuICAgICdmYW50YXN5JyA9ICdmYW50YXN5JyxcbiAgICAnZGVmYXVsdCcgPSAnZGVmYXVsdCcsXG4gICAgJ0FyaWFsJyA9ICdBcmlhbCcsXG4gICAgJ0FyaWFsIEJsYWNrJyA9ICdBcmlhbCBCbGFjaycsXG4gICAgJ0FyaWFsIE5hcnJvdycgPSAnQXJpYWwgTmFycm93JyxcbiAgICAnQXJpYWwgUm91bmRlZCBNVCBCb2xkJyA9ICdBcmlhbCBSb3VuZGVkIE1UIEJvbGQnLFxuICAgICdCb29rbWFuIE9sZCBTdHlsZScgPSAnQm9va21hbiBPbGQgU3R5bGUnLFxuICAgICdCcmFkbGV5IEhhbmQgSVRDJyA9ICdCcmFkbGV5IEhhbmQgSVRDJyxcbiAgICAnQ2VudHVyeScgPSAnQ2VudHVyeScsXG4gICAgJ0NlbnR1cnkgR290aGljJyA9ICdDZW50dXJ5IEdvdGhpYycsXG4gICAgJ0NvbWljIFNhbnMgTVMnID0gJ0NvbWljIFNhbnMgTVMnLFxuICAgICdDb3VyaWVyJyA9ICdDb3VyaWVyJyxcbiAgICAnQ291cmllciBOZXcnID0gJ0NvdXJpZXIgTmV3JyxcbiAgICAnR2VvcmdpYScgPSAnR2VvcmdpYScsXG4gICAgJ0dlbnRpdW0nID0gJ0dlbnRpdW0nLFxuICAgICdJbXBhY3QnID0gJ0ltcGFjdCcsXG4gICAgJ0tpbmcnID0gJ0tpbmcnLFxuICAgICdMdWNpZGEgQ29uc29sZScgPSAnTHVjaWRhIENvbnNvbGUnLFxuICAgICdMYWxpdCcgPSAnTGFsaXQnLFxuICAgICdNb2RlbmEnID0gJ01vZGVuYScsXG4gICAgJ01vbm90eXBlIENvcnNpdmEnID0gJ01vbm90eXBlIENvcnNpdmEnLFxuICAgICdQYXB5cnVzJyA9ICdQYXB5cnVzJyxcbiAgICAnVGFob21hJyA9ICdUYWhvbWEnLFxuICAgICdUZVgnID0gJ1RlWCcsXG4gICAgJ1RpbWVzJyA9ICdUaW1lcycsXG4gICAgJ1RpbWVzIE5ldyBSb21hbicgPSAnVGltZXMgTmV3IFJvbWFuJyxcbiAgICAnVHJlYnVjaGV0IE1TJyA9ICdUcmVidWNoZXQgTVMnLFxuICAgICdWZXJkYW5hJyA9ICdWZXJkYW5hJyxcbiAgICAnVmVyb25hJyA9ICdWZXJvbmEnLFxufVxuIiwiZXhwb3J0IGVudW0gR2VuZXJhbFBzZXVkb2NsYXNzRW51bSB7XG4gICAgZm9jdXMgPSAnZm9jdXMnLFxuICAgIGhvdmVyID0gJ2hvdmVyJyxcbiAgICBhY3RpdmUgPSAnYWN0aXZlJyxcbiAgICBub25lID0gJ25vbmUnXG59XG4iLCJleHBvcnQgZW51bSBHcmlkQXV0b0Zsb3dFbnVtIHtcbiAgICByb3cgPSAncm93JyxcbiAgICBjb2x1bW4gPSAnY29sdW1uJyxcbiAgICAncm93LWRlbnNlJyA9ICdyb3ctZGVuc2UnLFxuICAgICdjb2x1bW4tZGVuc2UnID0gJ2NvbHVtbi1kZW5zZScsXG4gICAgbm9uZSA9ICcnLFxufVxuIiwiZXhwb3J0IGVudW0gSW5wdXRUeXBlRW51bSB7XG4gICAgdGV4dCA9ICd0ZXh0JyxcbiAgICBudW1iZXIgPSAnbnVtYmVyJyxcbiAgICBjaGVja2JveCA9ICdjaGVja2JveCcsXG4gICAgYnV0dG9uID0gJ2J1dHRvbicsXG4gICAgY29sb3IgPSAnY29sb3InLFxuICAgIGRhdGUgPSAnZGF0ZScsXG4gICAgZGF0ZXRpbWUgPSAnZGF0ZXRpbWUnLFxuICAgICdkYXRldGltZS1sb2NhbCcgPSAnZGF0ZXRpbWUtbG9jYWwnLFxuICAgIGVtYWlsID0gJ2VtYWlsJyxcbiAgICBmaWxlID0gJ2ZpbGUnLFxuICAgIGhpZGRlbiA9ICdoaWRkZW4nLFxuICAgIG1vbnRoID0gJ21vbnRoJyxcbiAgICBwYXNzd29yZCA9ICdwYXNzd29yZCcsXG4gICAgcmFkaW8gPSAncmFkaW8nLFxuICAgIHJhbmdlID0gJ3JhbmdlJyxcbiAgICByZXNldCA9ICdyZXNldCcsXG4gICAgc3VibWl0ID0gJ3N1Ym1pdCcsXG4gICAgdGVsID0gJ3RlbCcsXG4gICAgdGltZSA9ICd0aW1lJyxcbiAgICB1cmwgPSAndXJsJyxcbiAgICB3ZWVrID0gJ3dlZWsnXG59XG4iLCJleHBvcnQgZW51bSBKdXN0aWZ5RmxleENvbnRlbnRFbnVtIHtcbiAgICAnZmxleC1zdGFydCcgPSAnZmxleC1zdGFydCcsXG4gICAgJ2ZsZXgtZW5kJyA9ICdmbGV4LWVuZCcsXG4gICAgY2VudGVyID0gJ2NlbnRlcicsXG4gICAgJ3NwYWNlLWJldHdlZW4nID0gJ3NwYWNlLWJldHdlZW4nLFxuICAgICdzcGFjZS1hcm91bmQnID0gJ3NwYWNlLWFyb3VuZCcsXG4gICAgbm9uZSA9ICcnXG59XG4iLCJleHBvcnQgZW51bSBKdXN0aWZ5R3JpZENvbnRlbnRFbnVtIHtcbiAgICBzdGFydCA9ICdzdGFydCcsXG4gICAgZW5kID0gJ2VuZCcsXG4gICAgY2VudGVyID0gJ2NlbnRlcicsXG4gICAgc3RyZXRjaCA9ICdzdHJldGNoJyxcbiAgICAnc3BhY2UtYmV0d2VlbicgPSAnc3BhY2UtYmV0d2VlbicsXG4gICAgJ3NwYWNlLWFyb3VuZCcgPSAnc3BhY2UtYXJvdW5kJyxcbiAgICAnc3BhY2UtZXZlbmx5JyA9ICdzcGFjZS1ldmVubHknLFxuICAgIG5vbmUgPSAnJ1xufVxuIiwiZXhwb3J0IGVudW0gSnVzdGlmeUdyaWRJdGVtc0VudW0ge1xuICAgIHN0YXJ0ID0gJ3N0YXJ0JyxcbiAgICBlbmQgPSAnZW5kJyxcbiAgICBjZW50ZXIgPSAnY2VudGVyJyxcbiAgICBzdHJldGNoID0gJ3N0cmV0Y2gnLFxuICAgIG5vbmUgPSAnJ1xufVxuIiwiZXhwb3J0IGVudW0gSnVzdGlmeUdyaWRTZWxmRW51bSB7XG4gICAgc3RhcnQgPSAnc3RhcnQnLFxuICAgIGVuZCA9ICdlbmQnLFxuICAgIGNlbnRlciA9ICdjZW50ZXInLFxuICAgIHN0cmV0Y2ggPSAnc3RyZXRjaCcsXG4gICAgbm9uZSA9ICcnXG59XG4iLCJleHBvcnQgZW51bSBTdHlsZU5hbWVFbnVtIHtcbiAgICBtYXJnaW4gPSAnbWFyZ2luJyxcbiAgICBwYWRkaW5nID0gJ3BhZGRpbmcnLFxuICAgIGRpc3BsYXkgPSAnZGlzcGxheScsXG4gICAgJ2ZsZXgtZGlyZWN0aW9uJyA9ICdmbGV4LWRpcmVjdGlvbicsXG4gICAgJ2FsaWduLWl0ZW1zJyA9ICdhbGlnbi1pdGVtcycsXG4gICAgJ2FsaWduLXNlbGYnID0gJ2FsaWduLXNlbGYnLFxuICAgICdncmlkLXRlbXBsYXRlLWNvbHVtbnMnID0gJ2dyaWQtdGVtcGxhdGUtY29sdW1ucycsXG4gICAgJ2dyaWQtdGVtcGxhdGUtcm93cycgPSAnZ3JpZC10ZW1wbGF0ZS1yb3dzJyxcbiAgICBib3JkZXIgPSAnYm9yZGVyJyxcbiAgICByZXNpemUgPSAncmVzaXplJyxcbiAgICB3aWR0aCA9ICd3aXRkdGgnLFxuICAgIGhlaWdodCA9ICdoZWlnaHQnLFxuICAgICdmb250LXNpemUnID0gJ2ZvbnQtc2l6ZScsXG59XG4iLCJleHBvcnQgZW51bSBUaXRsZVR5cGVzRW51bSB7XG4gICAgSDEgPSAnSDEnLFxuICAgIEgyID0gJ0gyJyxcbiAgICBIMyA9ICdIMycsXG4gICAgSDQgPSAnSDQnLFxuICAgIEg1ID0gJ0g1JyxcbiAgICBINiA9ICdINicsXG59XG4iLCJleHBvcnQgZW51bSBVbml0c0VudW0ge1xuICAgIHB4ID0gJ3B4JyxcbiAgICBlbSA9ICdlbScsXG4gICAgcmVtID0gJ3JlbScsXG4gICAgdncgPSAndncnLFxuICAgIHZoID0gJ3ZoJyxcbiAgICB2bWluID0gJ3ZtaW4nLFxuICAgIHZtYXggPSAndm1heCcsXG4gICAgJyUnID0gJyUnLFxuICAgIGV4ID0gJ2V4JyxcbiAgICBjaCA9ICdjaCcsXG4gICAgbW0gPSAnbW0nLFxuICAgIGNtID0gJ2NtJyxcbiAgICBpbiA9ICdpbicsXG4gICAgcHQgPSAncHQnLFxuICAgIHBjID0gJ3BjJyxcbiAgICBhdXRvID0gJ2F1dG8nXG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWZpbmVFbGVtZW50SWQoaW5pdGlhbE5hbWU6IHN0cmluZywgaW5zdGFuY2VzOiBIVE1MRWxlbWVudFtdKTogc3RyaW5nIHtcbiAgICBjb25zdCBuYW1lQWxyZWFkeUV4aXN0cyA9IGluc3RhbmNlcy5maW5kKChpbnN0YW5jZSkgPT4gaW5zdGFuY2UuaWQgPT09IGluaXRpYWxOYW1lKSA/IHRydWUgOiBmYWxzZTtcblxuICAgIGlmIChuYW1lQWxyZWFkeUV4aXN0cykge1xuICAgICAgICBhbGVydCgnSWQgbmFtZSBhbHJlYWR5IGV4aXN0cyBcXG5UaGUgbmFtZSBoYXMgbm90IGJlZW4gdXBkYXRlZCcpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0lkIG5hbWUgYWxyZWFkeSBleGlzdHMnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5pdGlhbE5hbWU7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWZpbmVFbGVtZW50TmFtZShpbml0aWFsTmFtZTogc3RyaW5nLCBpbnN0YW5jZXM6IEhUTUxFbGVtZW50W10pOiBzdHJpbmcge1xuICAgIGNvbnN0IG5hbWVBbHJlYWR5RXhpc3RzID0gaW5zdGFuY2VzLmZpbmQoKGluc3RhbmNlKSA9PiBpbnN0YW5jZVsnbmFtZSddID09PSBpbml0aWFsTmFtZSkgPyB0cnVlIDogZmFsc2U7XG5cbiAgICBpZiAobmFtZUFscmVhZHlFeGlzdHMpIHtcbiAgICAgICAgYWxlcnQoJ0VsZW1lbnQgbmFtZSBhbHJlYWR5IGV4aXN0cyBcXG5UaGUgbmFtZSBoYXMgbm90IGJlZW4gdXBkYXRlZCcpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VsZW1lbnQgbmFtZSBhbHJlYWR5IGV4aXN0cycpO1xuICAgIH1cblxuICAgIHJldHVybiBpbml0aWFsTmFtZTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRyYWdTdGFydFdpdGhUYXJnZXROb2RlTmFtZShlOiBEcmFnRXZlbnQpIHtcbiAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0L3BsYWluJywgKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5ub2RlTmFtZSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXJzKHRleHQ6IHN0cmluZywgc3BsaXRDaGFyYWN0ZXI6IHN0cmluZywgam9pbkNoYXJhY3Rlcjogc3RyaW5nKSB7XG4gICAgY29uc3Qgd29yZHMgPSB0ZXh0LnNwbGl0KHNwbGl0Q2hhcmFjdGVyKTtcblxuICAgIHJldHVybiB3b3Jkcy5tYXAoKHdvcmQpID0+IGAke3dvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHt3b3JkLnNsaWNlKDEpfWApLmpvaW4oam9pbkNoYXJhY3Rlcilcbn1cbiIsImltcG9ydCB7IFVuaXRzRW51bSB9IGZyb20gJy4uL2VudW1zL3VuaXRzLmVudW0nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVbml0KHRleHQ6IHN0cmluZywgZGVmYXVsdFVuaXQ6IFVuaXRzRW51bSA9IFVuaXRzRW51bS5weCkge1xuICAgIHRyeXtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gdGV4dC5tYXRjaCgvW2EteiVdKyQvaSlcbiAgICAgICAgcmV0dXJuIHZhbHVlcyA/IHZhbHVlc1swXSA6IGRlZmF1bHRVbml0O1xuICAgIH0gY2F0Y2gge1xuICAgICAgICByZXR1cm4gJ3B4JztcbiAgICB9XG5cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbG9yVG9IZXgoY29sb3I6IHN0cmluZykge1xuICBpZihjb2xvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuICcjMDAwMDAwJztcbiAgfVxuXG4gIGlmIChjb2xvci5pbmNsdWRlcygncmdiJykpIHtcbiAgICByZXR1cm4gcmdiVG9IZXgoY29sb3IpO1xuICB9IGVsc2UgaWYgKGNvbG9yLmluY2x1ZGVzKCcjJykpIHtcbiAgICByZXR1cm4gY29sb3I7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZm91bmRDb2xvciA9IGNvbG9yVmFsdWVzLmZpbmQoKGNvbCkgPT4gY29sLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gY29sb3IpO1xuXG4gICAgaWYoIWZvdW5kQ29sb3IpIHtcbiAgICAgIHJldHVybiAnIzAwMDAwMCc7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvdW5kQ29sb3IuaGV4O1xuICB9XG59XG5cbmZ1bmN0aW9uIHJnYlRvSGV4KHJnYjogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgW3IsIGcsIGJdID0gcmdiLnJlcGxhY2UoL1teXFxkLF0rL2csICcnKS5zcGxpdCgnLCcpO1xuICAgIHJldHVybiAnIycgKyBjb21wb25lbnRUb0hleChyKSArIGNvbXBvbmVudFRvSGV4KGcpICsgY29tcG9uZW50VG9IZXgoYik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiAnIzAwMDAwMCc7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29tcG9uZW50VG9IZXgoYykge1xuICBjb25zdCBoZXggPSBwYXJzZUludChjKS50b1N0cmluZygxNik7XG4gIGlmIChoZXggPT09ICdOYU4nKSB7XG4gICAgcmV0dXJuICcwMCc7XG4gIH1cbiAgcmV0dXJuIGhleC5sZW5ndGggPT09IDEgPyAnMCcgKyBoZXggOiBoZXg7XG59XG5cbmNvbnN0IGNvbG9yVmFsdWVzID0gW1xuICB7IGhleDogJyNGMEY4RkYnLCBuYW1lOiAnQWxpY2VCbHVlJyB9LFxuICB7IGhleDogJyNGQUVCRDcnLCBuYW1lOiAnQW50aXF1ZVdoaXRlJyB9LFxuICB7IGhleDogJyMwMEZGRkYnLCBuYW1lOiAnQXF1YScgfSxcbiAgeyBoZXg6ICcjN0ZGRkQ0JywgbmFtZTogJ0FxdWFtYXJpbmUnIH0sXG4gIHsgaGV4OiAnI0YwRkZGRicsIG5hbWU6ICdBenVyZScgfSxcbiAgeyBoZXg6ICcjRjVGNURDJywgbmFtZTogJ0JlaWdlJyB9LFxuICB7IGhleDogJyNGRkU0QzQnLCBuYW1lOiAnQmlzcXVlJyB9LFxuICB7IGhleDogJyMwMDAwMDAnLCBuYW1lOiAnQmxhY2snIH0sXG4gIHsgaGV4OiAnI0ZGRUJDRCcsIG5hbWU6ICdCbGFuY2hlZEFsbW9uZCcgfSxcbiAgeyBoZXg6ICcjMDAwMEZGJywgbmFtZTogJ0JsdWUnIH0sXG4gIHsgaGV4OiAnIzhBMkJFMicsIG5hbWU6ICdCbHVlVmlvbGV0JyB9LFxuICB7IGhleDogJyNBNTJBMkEnLCBuYW1lOiAnQnJvd24nIH0sXG4gIHsgaGV4OiAnI0RFQjg4NycsIG5hbWU6ICdCdXJseVdvb2QnIH0sXG4gIHsgaGV4OiAnIzVGOUVBMCcsIG5hbWU6ICdDYWRldEJsdWUnIH0sXG4gIHsgaGV4OiAnIzdGRkYwMCcsIG5hbWU6ICdDaGFydHJldXNlJyB9LFxuICB7IGhleDogJyNEMjY5MUUnLCBuYW1lOiAnQ2hvY29sYXRlJyB9LFxuICB7IGhleDogJyNGRjdGNTAnLCBuYW1lOiAnQ29yYWwnIH0sXG4gIHsgaGV4OiAnIzY0OTVFRCcsIG5hbWU6ICdDb3JuZmxvd2VyQmx1ZScgfSxcbiAgeyBoZXg6ICcjRkZGOERDJywgbmFtZTogJ0Nvcm5zaWxrJyB9LFxuICB7IGhleDogJyNEQzE0M0MnLCBuYW1lOiAnQ3JpbXNvbicgfSxcbiAgeyBoZXg6ICcjMDBGRkZGJywgbmFtZTogJ0N5YW4nIH0sXG4gIHsgaGV4OiAnIzAwMDA4QicsIG5hbWU6ICdEYXJrQmx1ZScgfSxcbiAgeyBoZXg6ICcjMDA4QjhCJywgbmFtZTogJ0RhcmtDeWFuJyB9LFxuICB7IGhleDogJyNCODg2MEInLCBuYW1lOiAnRGFya0dvbGRlblJvZCcgfSxcbiAgeyBoZXg6ICcjQTlBOUE5JywgbmFtZTogJ0RhcmtHcmF5JyB9LFxuICB7IGhleDogJyNBOUE5QTknLCBuYW1lOiAnRGFya0dyZXknIH0sXG4gIHsgaGV4OiAnIzAwNjQwMCcsIG5hbWU6ICdEYXJrR3JlZW4nIH0sXG4gIHsgaGV4OiAnI0JEQjc2QicsIG5hbWU6ICdEYXJrS2hha2knIH0sXG4gIHsgaGV4OiAnIzhCMDA4QicsIG5hbWU6ICdEYXJrTWFnZW50YScgfSxcbiAgeyBoZXg6ICcjNTU2QjJGJywgbmFtZTogJ0RhcmtPbGl2ZUdyZWVuJyB9LFxuICB7IGhleDogJyNGRjhDMDAnLCBuYW1lOiAnRGFya09yYW5nZScgfSxcbiAgeyBoZXg6ICcjOTkzMkNDJywgbmFtZTogJ0RhcmtPcmNoaWQnIH0sXG4gIHsgaGV4OiAnIzhCMDAwMCcsIG5hbWU6ICdEYXJrUmVkJyB9LFxuICB7IGhleDogJyNFOTk2N0EnLCBuYW1lOiAnRGFya1NhbG1vbicgfSxcbiAgeyBoZXg6ICcjOEZCQzhGJywgbmFtZTogJ0RhcmtTZWFHcmVlbicgfSxcbiAgeyBoZXg6ICcjNDgzRDhCJywgbmFtZTogJ0RhcmtTbGF0ZUJsdWUnIH0sXG4gIHsgaGV4OiAnIzJGNEY0RicsIG5hbWU6ICdEYXJrU2xhdGVHcmF5JyB9LFxuICB7IGhleDogJyMyRjRGNEYnLCBuYW1lOiAnRGFya1NsYXRlR3JleScgfSxcbiAgeyBoZXg6ICcjMDBDRUQxJywgbmFtZTogJ0RhcmtUdXJxdW9pc2UnIH0sXG4gIHsgaGV4OiAnIzk0MDBEMycsIG5hbWU6ICdEYXJrVmlvbGV0JyB9LFxuICB7IGhleDogJyNGRjE0OTMnLCBuYW1lOiAnRGVlcFBpbmsnIH0sXG4gIHsgaGV4OiAnIzAwQkZGRicsIG5hbWU6ICdEZWVwU2t5Qmx1ZScgfSxcbiAgeyBoZXg6ICcjNjk2OTY5JywgbmFtZTogJ0RpbUdyYXknIH0sXG4gIHsgaGV4OiAnIzY5Njk2OScsIG5hbWU6ICdEaW1HcmV5JyB9LFxuICB7IGhleDogJyMxRTkwRkYnLCBuYW1lOiAnRG9kZ2VyQmx1ZScgfSxcbiAgeyBoZXg6ICcjQjIyMjIyJywgbmFtZTogJ0ZpcmVCcmljaycgfSxcbiAgeyBoZXg6ICcjRkZGQUYwJywgbmFtZTogJ0Zsb3JhbFdoaXRlJyB9LFxuICB7IGhleDogJyMyMjhCMjInLCBuYW1lOiAnRm9yZXN0R3JlZW4nIH0sXG4gIHsgaGV4OiAnI0ZGMDBGRicsIG5hbWU6ICdGdWNoc2lhJyB9LFxuICB7IGhleDogJyNEQ0RDREMnLCBuYW1lOiAnR2FpbnNib3JvJyB9LFxuICB7IGhleDogJyNGOEY4RkYnLCBuYW1lOiAnR2hvc3RXaGl0ZScgfSxcbiAgeyBoZXg6ICcjRkZENzAwJywgbmFtZTogJ0dvbGQnIH0sXG4gIHsgaGV4OiAnI0RBQTUyMCcsIG5hbWU6ICdHb2xkZW5Sb2QnIH0sXG4gIHsgaGV4OiAnIzgwODA4MCcsIG5hbWU6ICdHcmF5JyB9LFxuICB7IGhleDogJyM4MDgwODAnLCBuYW1lOiAnR3JleScgfSxcbiAgeyBoZXg6ICcjMDA4MDAwJywgbmFtZTogJ0dyZWVuJyB9LFxuICB7IGhleDogJyNBREZGMkYnLCBuYW1lOiAnR3JlZW5ZZWxsb3cnIH0sXG4gIHsgaGV4OiAnI0YwRkZGMCcsIG5hbWU6ICdIb25leURldycgfSxcbiAgeyBoZXg6ICcjRkY2OUI0JywgbmFtZTogJ0hvdFBpbmsnIH0sXG4gIHsgaGV4OiAnI0NENUM1QycsIG5hbWU6ICdJbmRpYW5SZWQnIH0sXG4gIHsgaGV4OiAnIzRCMDA4MicsIG5hbWU6ICdJbmRpZ28nIH0sXG4gIHsgaGV4OiAnI0ZGRkZGMCcsIG5hbWU6ICdJdm9yeScgfSxcbiAgeyBoZXg6ICcjRjBFNjhDJywgbmFtZTogJ0toYWtpJyB9LFxuICB7IGhleDogJyNFNkU2RkEnLCBuYW1lOiAnTGF2ZW5kZXInIH0sXG4gIHsgaGV4OiAnI0ZGRjBGNScsIG5hbWU6ICdMYXZlbmRlckJsdXNoJyB9LFxuICB7IGhleDogJyM3Q0ZDMDAnLCBuYW1lOiAnTGF3bkdyZWVuJyB9LFxuICB7IGhleDogJyNGRkZBQ0QnLCBuYW1lOiAnTGVtb25DaGlmZm9uJyB9LFxuICB7IGhleDogJyNBREQ4RTYnLCBuYW1lOiAnTGlnaHRCbHVlJyB9LFxuICB7IGhleDogJyNGMDgwODAnLCBuYW1lOiAnTGlnaHRDb3JhbCcgfSxcbiAgeyBoZXg6ICcjRTBGRkZGJywgbmFtZTogJ0xpZ2h0Q3lhbicgfSxcbiAgeyBoZXg6ICcjRkFGQUQyJywgbmFtZTogJ0xpZ2h0R29sZGVuUm9kWWVsbG93JyB9LFxuICB7IGhleDogJyNEM0QzRDMnLCBuYW1lOiAnTGlnaHRHcmF5JyB9LFxuICB7IGhleDogJyNEM0QzRDMnLCBuYW1lOiAnTGlnaHRHcmV5JyB9LFxuICB7IGhleDogJyM5MEVFOTAnLCBuYW1lOiAnTGlnaHRHcmVlbicgfSxcbiAgeyBoZXg6ICcjRkZCNkMxJywgbmFtZTogJ0xpZ2h0UGluaycgfSxcbiAgeyBoZXg6ICcjRkZBMDdBJywgbmFtZTogJ0xpZ2h0U2FsbW9uJyB9LFxuICB7IGhleDogJyMyMEIyQUEnLCBuYW1lOiAnTGlnaHRTZWFHcmVlbicgfSxcbiAgeyBoZXg6ICcjODdDRUZBJywgbmFtZTogJ0xpZ2h0U2t5Qmx1ZScgfSxcbiAgeyBoZXg6ICcjNzc4ODk5JywgbmFtZTogJ0xpZ2h0U2xhdGVHcmF5JyB9LFxuICB7IGhleDogJyM3Nzg4OTknLCBuYW1lOiAnTGlnaHRTbGF0ZUdyZXknIH0sXG4gIHsgaGV4OiAnI0IwQzRERScsIG5hbWU6ICdMaWdodFN0ZWVsQmx1ZScgfSxcbiAgeyBoZXg6ICcjRkZGRkUwJywgbmFtZTogJ0xpZ2h0WWVsbG93JyB9LFxuICB7IGhleDogJyMwMEZGMDAnLCBuYW1lOiAnTGltZScgfSxcbiAgeyBoZXg6ICcjMzJDRDMyJywgbmFtZTogJ0xpbWVHcmVlbicgfSxcbiAgeyBoZXg6ICcjRkFGMEU2JywgbmFtZTogJ0xpbmVuJyB9LFxuICB7IGhleDogJyNGRjAwRkYnLCBuYW1lOiAnTWFnZW50YScgfSxcbiAgeyBoZXg6ICcjODAwMDAwJywgbmFtZTogJ01hcm9vbicgfSxcbiAgeyBoZXg6ICcjNjZDREFBJywgbmFtZTogJ01lZGl1bUFxdWFNYXJpbmUnIH0sXG4gIHsgaGV4OiAnIzAwMDBDRCcsIG5hbWU6ICdNZWRpdW1CbHVlJyB9LFxuICB7IGhleDogJyNCQTU1RDMnLCBuYW1lOiAnTWVkaXVtT3JjaGlkJyB9LFxuICB7IGhleDogJyM5MzcwREInLCBuYW1lOiAnTWVkaXVtUHVycGxlJyB9LFxuICB7IGhleDogJyMzQ0IzNzEnLCBuYW1lOiAnTWVkaXVtU2VhR3JlZW4nIH0sXG4gIHsgaGV4OiAnIzdCNjhFRScsIG5hbWU6ICdNZWRpdW1TbGF0ZUJsdWUnIH0sXG4gIHsgaGV4OiAnIzAwRkE5QScsIG5hbWU6ICdNZWRpdW1TcHJpbmdHcmVlbicgfSxcbiAgeyBoZXg6ICcjNDhEMUNDJywgbmFtZTogJ01lZGl1bVR1cnF1b2lzZScgfSxcbiAgeyBoZXg6ICcjQzcxNTg1JywgbmFtZTogJ01lZGl1bVZpb2xldFJlZCcgfSxcbiAgeyBoZXg6ICcjMTkxOTcwJywgbmFtZTogJ01pZG5pZ2h0Qmx1ZScgfSxcbiAgeyBoZXg6ICcjRjVGRkZBJywgbmFtZTogJ01pbnRDcmVhbScgfSxcbiAgeyBoZXg6ICcjRkZFNEUxJywgbmFtZTogJ01pc3R5Um9zZScgfSxcbiAgeyBoZXg6ICcjRkZFNEI1JywgbmFtZTogJ01vY2Nhc2luJyB9LFxuICB7IGhleDogJyNGRkRFQUQnLCBuYW1lOiAnTmF2YWpvV2hpdGUnIH0sXG4gIHsgaGV4OiAnIzAwMDA4MCcsIG5hbWU6ICdOYXZ5JyB9LFxuICB7IGhleDogJyNGREY1RTYnLCBuYW1lOiAnT2xkTGFjZScgfSxcbiAgeyBoZXg6ICcjODA4MDAwJywgbmFtZTogJ09saXZlJyB9LFxuICB7IGhleDogJyM2QjhFMjMnLCBuYW1lOiAnT2xpdmVEcmFiJyB9LFxuICB7IGhleDogJyNGRkE1MDAnLCBuYW1lOiAnT3JhbmdlJyB9LFxuICB7IGhleDogJyNGRjQ1MDAnLCBuYW1lOiAnT3JhbmdlUmVkJyB9LFxuICB7IGhleDogJyNEQTcwRDYnLCBuYW1lOiAnT3JjaGlkJyB9LFxuICB7IGhleDogJyNFRUU4QUEnLCBuYW1lOiAnUGFsZUdvbGRlblJvZCcgfSxcbiAgeyBoZXg6ICcjOThGQjk4JywgbmFtZTogJ1BhbGVHcmVlbicgfSxcbiAgeyBoZXg6ICcjQUZFRUVFJywgbmFtZTogJ1BhbGVUdXJxdW9pc2UnIH0sXG4gIHsgaGV4OiAnI0RCNzA5MycsIG5hbWU6ICdQYWxlVmlvbGV0UmVkJyB9LFxuICB7IGhleDogJyNGRkVGRDUnLCBuYW1lOiAnUGFwYXlhV2hpcCcgfSxcbiAgeyBoZXg6ICcjRkZEQUI5JywgbmFtZTogJ1BlYWNoUHVmZicgfSxcbiAgeyBoZXg6ICcjQ0Q4NTNGJywgbmFtZTogJ1BlcnUnIH0sXG4gIHsgaGV4OiAnI0ZGQzBDQicsIG5hbWU6ICdQaW5rJyB9LFxuICB7IGhleDogJyNEREEwREQnLCBuYW1lOiAnUGx1bScgfSxcbiAgeyBoZXg6ICcjQjBFMEU2JywgbmFtZTogJ1Bvd2RlckJsdWUnIH0sXG4gIHsgaGV4OiAnIzgwMDA4MCcsIG5hbWU6ICdQdXJwbGUnIH0sXG4gIHsgaGV4OiAnIzY2MzM5OScsIG5hbWU6ICdSZWJlY2NhUHVycGxlJyB9LFxuICB7IGhleDogJyNGRjAwMDAnLCBuYW1lOiAnUmVkJyB9LFxuICB7IGhleDogJyNCQzhGOEYnLCBuYW1lOiAnUm9zeUJyb3duJyB9LFxuICB7IGhleDogJyM0MTY5RTEnLCBuYW1lOiAnUm95YWxCbHVlJyB9LFxuICB7IGhleDogJyM4QjQ1MTMnLCBuYW1lOiAnU2FkZGxlQnJvd24nIH0sXG4gIHsgaGV4OiAnI0ZBODA3MicsIG5hbWU6ICdTYWxtb24nIH0sXG4gIHsgaGV4OiAnI0Y0QTQ2MCcsIG5hbWU6ICdTYW5keUJyb3duJyB9LFxuICB7IGhleDogJyMyRThCNTcnLCBuYW1lOiAnU2VhR3JlZW4nIH0sXG4gIHsgaGV4OiAnI0ZGRjVFRScsIG5hbWU6ICdTZWFTaGVsbCcgfSxcbiAgeyBoZXg6ICcjQTA1MjJEJywgbmFtZTogJ1NpZW5uYScgfSxcbiAgeyBoZXg6ICcjQzBDMEMwJywgbmFtZTogJ1NpbHZlcicgfSxcbiAgeyBoZXg6ICcjODdDRUVCJywgbmFtZTogJ1NreUJsdWUnIH0sXG4gIHsgaGV4OiAnIzZBNUFDRCcsIG5hbWU6ICdTbGF0ZUJsdWUnIH0sXG4gIHsgaGV4OiAnIzcwODA5MCcsIG5hbWU6ICdTbGF0ZUdyYXknIH0sXG4gIHsgaGV4OiAnIzcwODA5MCcsIG5hbWU6ICdTbGF0ZUdyZXknIH0sXG4gIHsgaGV4OiAnI0ZGRkFGQScsIG5hbWU6ICdTbm93JyB9LFxuICB7IGhleDogJyMwMEZGN0YnLCBuYW1lOiAnU3ByaW5nR3JlZW4nIH0sXG4gIHsgaGV4OiAnIzQ2ODJCNCcsIG5hbWU6ICdTdGVlbEJsdWUnIH0sXG4gIHsgaGV4OiAnI0QyQjQ4QycsIG5hbWU6ICdUYW4nIH0sXG4gIHsgaGV4OiAnIzAwODA4MCcsIG5hbWU6ICdUZWFsJyB9LFxuICB7IGhleDogJyNEOEJGRDgnLCBuYW1lOiAnVGhpc3RsZScgfSxcbiAgeyBoZXg6ICcjRkY2MzQ3JywgbmFtZTogJ1RvbWF0bycgfSxcbiAgeyBoZXg6ICcjNDBFMEQwJywgbmFtZTogJ1R1cnF1b2lzZScgfSxcbiAgeyBoZXg6ICcjRUU4MkVFJywgbmFtZTogJ1Zpb2xldCcgfSxcbiAgeyBoZXg6ICcjRjVERUIzJywgbmFtZTogJ1doZWF0JyB9LFxuICB7IGhleDogJyNGRkZGRkYnLCBuYW1lOiAnV2hpdGUnIH0sXG4gIHsgaGV4OiAnI0Y1RjVGNScsIG5hbWU6ICdXaGl0ZVNtb2tlJyB9LFxuICB7IGhleDogJyNGRkZGMDAnLCBuYW1lOiAnWWVsbG93JyB9LFxuICB7IGhleDogJyM5QUNEMzInLCBuYW1lOiAnWWVsbG93R3JlZW4nIH1cbl1cbiIsImltcG9ydCBSYXdCdWlsZGVyIGZyb20gJy4vUmF3QnVpbGRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbkJ1aWxkZXIgZXh0ZW5kcyBSYXdCdWlsZGVyPEhUTUxCdXR0b25FbGVtZW50PntcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ2J1dHRvbicpO1xuICAgIH1cbn1cbiIsImltcG9ydCBSYXdCdWlsZGVyIGZyb20gJy4vUmF3QnVpbGRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRhaW5lckJ1aWxkZXIgZXh0ZW5kcyBSYXdCdWlsZGVyPEhUTUxEaXZFbGVtZW50PntcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ2RpdicpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhcHBlbmRDaGlsZElmRGVmaW5lZChlbGVtZW50OiBIVE1MRWxlbWVudCl7XG4gICAgICAgIGlmKGVsZW1lbnQgIT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuIiwiaW1wb3J0IFJhd0J1aWxkZXIgZnJvbSAnLi9SYXdCdWlsZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybUJ1aWxkZXIgZXh0ZW5kcyBSYXdCdWlsZGVyPEhUTUxEaXZFbGVtZW50PntcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ2Zvcm0nKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXBwZW5kQ2hpbGRJZkRlZmluZWQoZWxlbWVudDogSFRNTEVsZW1lbnQpe1xuICAgICAgICBpZihlbGVtZW50ICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cbiIsImltcG9ydCBSYXdCdWlsZGVyIGZyb20gJy4vUmF3QnVpbGRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlQnVpbGRlciBleHRlbmRzIFJhd0J1aWxkZXI8SFRNTEltYWdlRWxlbWVudD57XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdpbWcnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0VXJsKHVybD86IHN0cmluZykge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3JjID0gdXJsO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG4iLCJpbXBvcnQgUmF3QnVpbGRlciBmcm9tICcuL1Jhd0J1aWxkZXInO1xuaW1wb3J0IHsgSW5wdXRUeXBlRW51bSB9IGZyb20gJy4uL2VudW1zL2lucHV0LXR5cGUuZW51bSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0QnVpbGRlciBleHRlbmRzIFJhd0J1aWxkZXI8SFRNTElucHV0RWxlbWVudD57XG4gICAgY29uc3RydWN0b3IodHlwZTogSW5wdXRUeXBlRW51bSkge1xuICAgICAgICBzdXBlcignaW5wdXQnKVxuICAgICAgICB0aGlzLmVsZW1lbnQudHlwZSA9IHR5cGU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LnZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRWYWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0TmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Lm5hbWUgPSBuYW1lO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0UGxhY2Vob2xkZXIocGxhY2Vob2xkZXI6IHN0cmluZykge1xuICAgICAgICB0aGlzLmVsZW1lbnQucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIGNoZWNrZWQoY2hlY2tlZCA9IHRydWUpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmNoZWNrZWQgPSBjaGVja2VkO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0TWF4KG1heDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5tYXggPSBgJHttYXh9YDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldE1pbihtaW46IG51bWJlcikge1xuICAgICAgICB0aGlzLmVsZW1lbnQubWluID0gYCR7bWlufWA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cbiIsImltcG9ydCBSYXdCdWlsZGVyIGZyb20gJy4vUmF3QnVpbGRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhYmVsQnVpbGRlciBleHRlbmRzIFJhd0J1aWxkZXI8SFRNTExhYmVsRWxlbWVudD57XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdsYWJlbCcpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFN0eWxlTmFtZUVudW0gfSBmcm9tICcuLi9lbnVtcy9zdHlsZS1uYW1lLmVudW0nO1xuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgUmF3QnVpbGRlcjxUIGV4dGVuZHMgSFRNTEVsZW1lbnQ+e1xuICAgIHByb3RlY3RlZCBlbGVtZW50OiBUO1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRJZChpZCA6IHN0cmluZykge1xuICAgICAgICB0aGlzLmVsZW1lbnQuaWQgPSBpZDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldE5hbWUobmFtZSA6IHN0cmluZykge1xuICAgICAgICB0aGlzLmVsZW1lbnRbJ25hbWUnXSA9IG5hbWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRTdHlsZShzdHlsZU5hbWU6IFN0eWxlTmFtZUVudW0sIHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3N0eWxlTmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldElubmVyVGV4dCh0ZXh0OiBzdHJpbmcpe1xuICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJUZXh0ID0gdGV4dDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIGRyYWdnYWJsZShzZWxlY3RlZCA9IHRydWUpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmRyYWdnYWJsZSA9IHNlbGVjdGVkO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkQ3NzQ2xhc3NOYW1lKGNsYXNzTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRBbGxDaGlsZHMoKTogTm9kZVtdIHtcbiAgICAgICAgY29uc3QgY2hpbGROb2RlczogTm9kZVtdID0gW107XG5cbiAgICAgICAgdGhpcy5lbGVtZW50LmNoaWxkTm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICAgICAgY2hpbGROb2Rlcy5wdXNoKG5vZGUpXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIGNoaWxkTm9kZXM7XG4gICAgfVxuXG4gICAgcHVibGljIGZpbmRDaGlsZE5vZGVCeU5hbWUobmFtZTogc3RyaW5nKTogTm9kZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEFsbENoaWxkcygpLmZpbmQoKG5vZGUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBub2RlWyduYW1lJ10gPT09IG5hbWVcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwdWJsaWMgYXBwZW5kQ2hpbGQoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmVDaGlsZE5vZGUobm9kZTogTm9kZSkge1xuICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQ2hpbGQobm9kZSlcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZUNoaWxkTm9kZUJ5TmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVDaGlsZE5vZGUodGhpcy5maW5kQ2hpbGROb2RlQnlOYW1lKG5hbWUpKVxuICAgIH1cblxuICAgIHB1YmxpYyBtb292ZUNoaWxkVXBwZXJQb3NpdGlvbkJ5TmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3Qgbm9kZXNBcnJheSA9IHRoaXMuZ2V0QWxsQ2hpbGRzKCk7XG5cbiAgICAgICAgY29uc3QgaW5kZXhPZkNoaWxkID0gbm9kZXNBcnJheS5maW5kSW5kZXgoKG5vZGUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBub2RlWyduYW1lJ10gPT09IG5hbWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYoaW5kZXhPZkNoaWxkICE9PSAwKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtc1RvTW92ZSA9IG5vZGVzQXJyYXkuc2xpY2UoIC0gbm9kZXNBcnJheS5sZW5ndGggKyBpbmRleE9mQ2hpbGQgLSAxICk7XG5cbiAgICAgICAgICAgIGl0ZW1zVG9Nb3ZlLmZvckVhY2goKG5vZGUpID0+IHRoaXMuZWxlbWVudC5yZW1vdmVDaGlsZChub2RlKSk7XG5cbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChub2Rlc0FycmF5W2luZGV4T2ZDaGlsZF0pO1xuXG4gICAgICAgICAgICBpdGVtc1RvTW92ZS5zcGxpY2UoMSwgMSk7XG5cbiAgICAgICAgICAgIGl0ZW1zVG9Nb3ZlLmZvckVhY2goKG5vZGUpID0+IHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChub2RlKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgbW9vdmVDaGlsZExvd2VyUG9zaXRpb25CeU5hbWUobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IG5vZGVzQXJyYXkgPSB0aGlzLmdldEFsbENoaWxkcygpO1xuXG4gICAgICAgIGNvbnN0IGluZGV4T2ZDaGlsZCA9IG5vZGVzQXJyYXkuZmluZEluZGV4KChub2RlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZVsnbmFtZSddID09PSBuYW1lXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmKGluZGV4T2ZDaGlsZCAhPT0gbm9kZXNBcnJheS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtc1RvTW92ZSA9IG5vZGVzQXJyYXkuc2xpY2UoIC0gbm9kZXNBcnJheS5sZW5ndGggKyBpbmRleE9mQ2hpbGQgKTtcblxuICAgICAgICAgICAgaXRlbXNUb01vdmUuZm9yRWFjaCgobm9kZSkgPT4gdGhpcy5lbGVtZW50LnJlbW92ZUNoaWxkKG5vZGUpKTtcblxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRFbGVtZW50ID0gaXRlbXNUb01vdmUuc3BsaWNlKDAsIDEpWzBdO1xuXG4gICAgICAgICAgICBpdGVtc1RvTW92ZS5zcGxpY2UoMCArIDEsIDAsIHNlbGVjdGVkRWxlbWVudCk7XG5cbiAgICAgICAgICAgIGl0ZW1zVG9Nb3ZlLmZvckVhY2goKG5vZGUpID0+IHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChub2RlKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkRXZlbnRMaXN0ZW5lcih0eXBlOiBzdHJpbmcsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrKVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5lbGVtZW50WydkaXNhYmxlZCddID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGJ1aWxkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICAgIH1cbn1cbiIsImltcG9ydCBSYXdCdWlsZGVyIGZyb20gJy4vUmF3QnVpbGRlcic7XG5pbXBvcnQgQXJyYXlTZWxlY3RvckJvZHlJbnRlcmZhY2UgZnJvbSAnLi4vaW50ZXJmYWNlcy9zZWxlY3Rvci1mcm9tLWFycmF5LWJvZHkuaW50ZXJmYWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0b3JGcm9tQXJyYXlCdWlsZGVyIGV4dGVuZHMgUmF3QnVpbGRlcjxIVE1MU2VsZWN0RWxlbWVudD57XG4gICAgcHJpdmF0ZSBfb3B0aW9uczogQXJyYXlTZWxlY3RvckJvZHlJbnRlcmZhY2VbXTtcblxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IEFycmF5U2VsZWN0b3JCb2R5SW50ZXJmYWNlW10pIHtcbiAgICAgICAgc3VwZXIoJ3NlbGVjdCcpO1xuICAgICAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5hZGRPcHRpb25zKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRPcHRpb25zKCkge1xuICAgICAgICB0aGlzLl9vcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBuZXdPcHRpb24udGV4dCA9IG9wdGlvbi50ZXh0O1xuICAgICAgICAgICAgbmV3T3B0aW9uLnZhbHVlID0gb3B0aW9uLnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKG5ld09wdGlvbilcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIHNlbGVjdE9wdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGZvdW5kVmFsdWVJbmRleCA9IHRoaXMuX29wdGlvbnMuZmluZEluZGV4KChrZXkpID0+IGtleS52YWx1ZSA9PT0gdmFsdWUpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9IGZvdW5kVmFsdWVJbmRleDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCB2YWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC52YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHNlbGVjdGVkSW5kZXgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQuc2VsZWN0ZWRJbmRleDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHNlbGVjdGVkSW5kZXgoaW5kZXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgb3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5vcHRpb25zO1xuICAgIH1cbn1cbiIsImltcG9ydCBSYXdCdWlsZGVyIGZyb20gJy4vUmF3QnVpbGRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyIGV4dGVuZHMgUmF3QnVpbGRlcjxIVE1MU2VsZWN0RWxlbWVudD57XG4gICAgcHJpdmF0ZSBrZXlzOiBzdHJpbmdbXTtcbiAgICBwcml2YXRlIG9wdGlvbnM6IFJlY29yZDxzdHJpbmcsc3RyaW5nPjtcblxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IFJlY29yZDxzdHJpbmcsc3RyaW5nPikge1xuICAgICAgICBzdXBlcignc2VsZWN0Jyk7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIHRoaXMua2V5cyA9IE9iamVjdC5rZXlzKG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuYWRkT3B0aW9ucygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC52YWx1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZE9wdGlvbnMoKSB7XG4gICAgICAgIHRoaXMua2V5cy5mb3JFYWNoKChvcHRLZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgbmV3T3B0aW9uLnRleHQgPSBvcHRLZXk7XG4gICAgICAgICAgICBuZXdPcHRpb24udmFsdWUgPSB0aGlzLm9wdGlvbnNbb3B0S2V5XTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChuZXdPcHRpb24pXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZWxlY3RPcHRpb24ob3B0aW9uOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgZm91bmRWYWx1ZUluZGV4ID0gdGhpcy5rZXlzLmZpbmRJbmRleCgoa2V5KSA9PiB0aGlzLm9wdGlvbnNba2V5XSA9PT0gb3B0aW9uKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnNlbGVjdGVkSW5kZXggPSBmb3VuZFZhbHVlSW5kZXg7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cbiIsImltcG9ydCBDb250YWluZXJCdWlsZGVyIGZyb20gJy4vQ29udGFpbmVyQnVpbGRlcic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHlsZXNDb21wb25lbnRzQnVpbGRlciB7XG4gICAgcHVibGljIGh0bWxTdHlsZXNDb250YWluZXI6IEhUTUxEaXZFbGVtZW50ID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKS5idWlsZCgpO1xuICAgIHByaXZhdGUgYWN0aW9uc0NvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWN0aW9ucy1jb250YWluZXInKTtcblxuICAgIHB1YmxpYyBhcHBlbmRDaGlsZChlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuaHRtbFN0eWxlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYnVpbGQoKTogSFRNTERpdkVsZW1lbnQge1xuICAgICAgICB0aGlzLmFjdGlvbnNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHRoaXMuYWN0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmh0bWxTdHlsZXNDb250YWluZXIpO1xuICAgICAgICByZXR1cm4gdGhpcy5odG1sU3R5bGVzQ29udGFpbmVyO1xuICAgIH1cblxuICAgIHJlbW92ZSgpIHtcbiAgICAgICAgdGhpcy5hY3Rpb25zQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIH1cbn1cbiIsImltcG9ydCBSYXdCdWlsZGVyIGZyb20gJy4vUmF3QnVpbGRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRhcmVhQnVpbGRlciBleHRlbmRzIFJhd0J1aWxkZXI8SFRNTFRleHRBcmVhRWxlbWVudD57XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCd0ZXh0YXJlYScpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRWYWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQudmFsdWU7XG4gICAgfVxufVxuIiwiaW1wb3J0IFJhd0J1aWxkZXIgZnJvbSAnLi9SYXdCdWlsZGVyJztcblxuaW1wb3J0IHsgVGl0bGVUeXBlc0VudW0gfSBmcm9tICcuLi9lbnVtcy90aXRsZS50eXBlcy5lbnVtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGl0bGVCdWlsZGVyIGV4dGVuZHMgUmF3QnVpbGRlcjxIVE1MQnV0dG9uRWxlbWVudD57XG4gICAgY29uc3RydWN0b3IodHlwZTogVGl0bGVUeXBlc0VudW0pIHtcbiAgICAgICAgc3VwZXIodHlwZSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IENsYXNzQ2hhbmdlUHVibGlzaGVySW50ZXJmYWNlIGZyb20gJy4uL2ludGVyZmFjZXMvY2xhc3MtY2hhbmdlLXB1Ymxpc2hlci5pbnRlcmZhY2UnO1xuaW1wb3J0IENsYXNzQ2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2UgZnJvbSAnLi4vaW50ZXJmYWNlcy9jbGFzcy1jaGFuZ2Utb2JzZXJ2ZXIuaW50ZXJmYWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xhc3NDaGFuZ2VQdWJsaXNoZXIgaW1wbGVtZW50cyBDbGFzc0NoYW5nZVB1Ymxpc2hlckludGVyZmFjZSB7XG4gICAgcHJpdmF0ZSBvYnNlcnZlcnM6IENsYXNzQ2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2VbXSA9IFtdO1xuXG4gICAgcHVibGljIGF0dGFjaChvYnNlcnZlcjogQ2xhc3NDaGFuZ2VPYnNlcnZlckludGVyZmFjZSk6IHZvaWQge1xuICAgICAgICBjb25zdCBpc0V4aXN0ID0gdGhpcy5vYnNlcnZlcnMuaW5jbHVkZXMob2JzZXJ2ZXIpO1xuICAgICAgICBpZiAoaXNFeGlzdCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKCdTdWJqZWN0OiBPYnNlcnZlciBoYXMgYmVlbiBhdHRhY2hlZCBhbHJlYWR5LicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLnB1c2gob2JzZXJ2ZXIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZXRhY2gob2JzZXJ2ZXI6IENsYXNzQ2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2UpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXJJbmRleCA9IHRoaXMub2JzZXJ2ZXJzLmluZGV4T2Yob2JzZXJ2ZXIpO1xuICAgICAgICBpZiAob2JzZXJ2ZXJJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmxvZygnU3ViamVjdDogTm9uZXhpc3RlbnQgb2JzZXJ2ZXIuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vYnNlcnZlcnMuc3BsaWNlKG9ic2VydmVySW5kZXgsIDEpO1xuICAgIH1cblxuICAgIHB1YmxpYyBub3RpZnlDbGFzc05hbWUobmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGZvciAoY29uc3Qgb2JzZXJ2ZXIgb2YgdGhpcy5vYnNlcnZlcnMpIHtcbiAgICAgICAgICAgIG9ic2VydmVyLmNsYXNzTmFtZVVwZGF0ZWQobmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50Q2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2UgZnJvbSAnLi4vaW50ZXJmYWNlcy9jb21wb25lbnQtY2hhbmdlLW9ic2VydmVyLmludGVyZmFjZSc7XG5pbXBvcnQgQ29tcG9uZW50Q2hhbmdlUHVibGlzaGVySW50ZXJmYWNlIGZyb20gJy4uL2ludGVyZmFjZXMvY29tcG9uZW50LWNoYW5nZS1wdWJsaXNoZXIuaW50ZXJmYWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50Q2hhbmdlUHVibGlzaGVyIGltcGxlbWVudHMgQ29tcG9uZW50Q2hhbmdlUHVibGlzaGVySW50ZXJmYWNlIHtcbiAgICBwcml2YXRlIG9ic2VydmVyczogQ29tcG9uZW50Q2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2VbXSA9IFtdO1xuXG4gICAgcHVibGljIGF0dGFjaChvYnNlcnZlcjogQ29tcG9uZW50Q2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2UpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaXNFeGlzdCA9IHRoaXMub2JzZXJ2ZXJzLmluY2x1ZGVzKG9ic2VydmVyKTtcbiAgICAgICAgaWYgKGlzRXhpc3QpIHtcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmxvZygnU3ViamVjdDogT2JzZXJ2ZXIgaGFzIGJlZW4gYXR0YWNoZWQgYWxyZWFkeS4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9ic2VydmVycy5wdXNoKG9ic2VydmVyKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGV0YWNoKG9ic2VydmVyOiBDb21wb25lbnRDaGFuZ2VPYnNlcnZlckludGVyZmFjZSk6IHZvaWQge1xuICAgICAgICBjb25zdCBvYnNlcnZlckluZGV4ID0gdGhpcy5vYnNlcnZlcnMuaW5kZXhPZihvYnNlcnZlcik7XG4gICAgICAgIGlmIChvYnNlcnZlckluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKCdTdWJqZWN0OiBOb25leGlzdGVudCBvYnNlcnZlci4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9ic2VydmVycy5zcGxpY2Uob2JzZXJ2ZXJJbmRleCwgMSk7XG4gICAgfVxuXG4gICAgcHVibGljIG5vdGlmeUNvbXBvbmVudE5hbWUobmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGZvciAoY29uc3Qgb2JzZXJ2ZXIgb2YgdGhpcy5vYnNlcnZlcnMpIHtcbiAgICAgICAgICAgIG9ic2VydmVyLmNvbXBvbmVudFNlbGVjdGVkKG5hbWUpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IGRyYWdTdGFydFdpdGhUYXJnZXROb2RlTmFtZSBmcm9tICcuLi9jb21tb24vZnVuY3Rpb25zL2RyYWctc3RhcnQtd2l0aC10YXJnZXQtbm9kZV9uYW1lJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdERyYWdnYWJsZUNvbXBvbmVudHMoKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZG9tLWVsZW1lbnQnKTtcblxuICAgIGRvbUVsZW1lbnRzLmZvckVhY2goKGRvbUVsZW1lbnQpID0+IHtcbiAgICAgICAgZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBkcmFnU3RhcnRXaXRoVGFyZ2V0Tm9kZU5hbWUpO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IFJhd0hUTUxDb25wb25lbnQgZnJvbSAnLi4vaHRtbC1jb21wb25lbnRzL1Jhd0hUTUxDb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDc3NTdHlsZVNoZWV0IHtcbiAgICBwcml2YXRlIHN0YXRpYyBzdHlsZVNoZWV0ID0gZG9jdW1lbnQuc3R5bGVTaGVldHNbMV07XG5cbiAgICAvKlxuICAgIENTU1N0eWxlU2hlZXREb2N1bWVudGF0aW9uOlxuICAgIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DU1NTdHlsZVNoZWV0L2FkZFJ1bGVcbiAgICAqL1xuXG4gICAgc3RhdGljIGluaXQoKSB7XG4gICAgICAgIGNvbnN0IHByaW50Q3NzRmlsZUJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpbnQtY3NzLWZpbGUnKTtcbiAgICAgICAgdGhpcy5wcmludCA9IHRoaXMucHJpbnQuYmluZCh0aGlzKTtcbiAgICAgICAgcHJpbnRDc3NGaWxlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5wcmludCk7XG4gICAgfVxuXG4gICAgc3RhdGljIHByaW50KCkge1xuICAgICAgICBsZXQgY3NzRmlsZU91dHB1dCA9ICcnO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuc3R5bGVTaGVldC5jc3NSdWxlcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgY3NzRmlsZU91dHB1dCArPSBgJHt0aGlzLnN0eWxlU2hlZXQuY3NzUnVsZXNbcGFyc2VJbnQoa2V5KV0uY3NzVGV4dH1cXG5cXG5gXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGNzc0ZpbGVPdXRwdXQpO1xuXG4gICAgICAgIC8vIFRPRE86IHZlciBzaSBoYXkgcXVlIGVsaW1pbmFyIGFsZ28gZGVsIGFwcC1jb250YWluZXIuLi4gYWxndW4gYXRyaWJ1dG8uLi5cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0UnVsZShpZDogc3RyaW5nKTogQ1NTUnVsZSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRSdWxlSW5kZXgoaWQpO1xuICAgICAgICByZXR1cm4gdGhpcy5zdHlsZVNoZWV0LmNzc1J1bGVzW2luZGV4XTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0UnVsZUluZGV4KGlkOiBzdHJpbmcpOiBudW1iZXIge1xuICAgICAgICBjb25zdCBpbmRleCA9IHBhcnNlSW50KE9iamVjdC5rZXlzKHRoaXMuc3R5bGVTaGVldC5jc3NSdWxlcykuZmluZChrZXkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy5zdHlsZVNoZWV0LmNzc1J1bGVzW3BhcnNlSW50KGtleSldWydzZWxlY3RvclRleHQnXVxuICAgICAgICAgICAgcmV0dXJuIGNsYXNzTmFtZSA9PT0gYC4ke2lkfWBcbiAgICAgICAgfSkpXG5cbiAgICAgICAgaWYoaXNOYU4oaW5kZXgpKXtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0UnVsZXMoaWQ6IHN0cmluZyk6IENTU1J1bGVbXSB7XG4gICAgICAgIGNvbnN0IGluZGV4ZXMgPSB0aGlzLmdldFJ1bGVzSW5kZXhlcyhpZCk7XG4gICAgICAgIHJldHVybiBpbmRleGVzLm1hcCgoaW5kZXgpID0+IHRoaXMuc3R5bGVTaGVldC5jc3NSdWxlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRBbGxSdWxlcygpOiBDU1NSdWxlW10ge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzLnN0eWxlU2hlZXQuY3NzUnVsZXMpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRSdWxlc0luZGV4ZXMoaWQ6IHN0cmluZyk6IG51bWJlcltdIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuc3R5bGVTaGVldC5jc3NSdWxlcylcbiAgICAgICAgICAgIC5maWx0ZXIoa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLnN0eWxlU2hlZXQuY3NzUnVsZXNbcGFyc2VJbnQoa2V5KV1bJ3NlbGVjdG9yVGV4dCddXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNsYXNzTmFtZSA9PT0gYC4ke2lkfWAgfHwgY2xhc3NOYW1lLmluY2x1ZGVzKGAuJHtpZH06YClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAubWFwKChpbmRleCkgPT4gcGFyc2VJbnQoaW5kZXgpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0UnVsZVN0eWxlcyhpZDogc3RyaW5nKTogQ1NTU3R5bGVEZWNsYXJhdGlvbiB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRSdWxlSW5kZXgoaWQpO1xuICAgICAgICBjb25zdCBzdHlsZXMgPSB0aGlzLnN0eWxlU2hlZXQuY3NzUnVsZXNbaW5kZXhdO1xuICAgICAgICByZXR1cm4gc3R5bGVzID8gc3R5bGVzWydzdHlsZSddIDoge307XG4gICAgfVxuXG4gICAgc3RhdGljIHJlbW92ZVJ1bGUoaWQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0UnVsZUluZGV4KGlkKTtcbiAgICAgICAgbGV0IGV4aXN0c1J1bGVGb3JBbm90aGVyQ29tcG9uZW50ID0gZmFsc2U7XG5cbiAgICAgICAgUmF3SFRNTENvbnBvbmVudC5pbnN0YW5jZXMuZm9yRWFjaCgoaW5zdGFuY2UpID0+IHtcbiAgICAgICAgICAgIGlmKGluc3RhbmNlLmNsYXNzTGlzdC5jb250YWlucyhpZCkpIHtcbiAgICAgICAgICAgICAgICBleGlzdHNSdWxlRm9yQW5vdGhlckNvbXBvbmVudCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYoIWV4aXN0c1J1bGVGb3JBbm90aGVyQ29tcG9uZW50KSB7XG4gICAgICAgICAgICB0aGlzLnN0eWxlU2hlZXQuZGVsZXRlUnVsZShpbmRleCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgcmVtb3ZlUnVsZUJ5SW5kZXgoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLnN0eWxlU2hlZXQuZGVsZXRlUnVsZShpbmRleCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGluc2VydFJ1bGUocnVsZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc3R5bGVTaGVldC5pbnNlcnRSdWxlKHJ1bGUpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjaGFuZ2VSdWxlTmFtZShjdXJyZW50UnVsZTogc3RyaW5nLCBuZXdSdWxlTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRSdWxlSW5kZXggPSB0aGlzLmdldFJ1bGVJbmRleChjdXJyZW50UnVsZSk7XG4gICAgICAgIGNvbnN0IG5ld1J1bGUgPSB0aGlzLnN0eWxlU2hlZXQuY3NzUnVsZXNbY3VycmVudFJ1bGVJbmRleF0uY3NzVGV4dC5yZXBsYWNlKGN1cnJlbnRSdWxlLCBuZXdSdWxlTmFtZSk7XG4gICAgICAgIHRoaXMucmVtb3ZlUnVsZUJ5SW5kZXgoY3VycmVudFJ1bGVJbmRleCk7XG4gICAgICAgIHRoaXMuaW5zZXJ0UnVsZShuZXdSdWxlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZHVwbGljYXRlUnVsZShydWxlVG9EdXBsaWNhdGU6IHN0cmluZywgbmV3TmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHJ1bGVUb0R1cGxpY2F0ZUluZGV4ID0gdGhpcy5nZXRSdWxlSW5kZXgocnVsZVRvRHVwbGljYXRlKTtcbiAgICAgICAgY29uc3QgbmV3UnVsZSA9XG4gICAgICAgICAgICB0aGlzLnN0eWxlU2hlZXQuY3NzUnVsZXNbcnVsZVRvRHVwbGljYXRlSW5kZXhdLmNzc1RleHQucmVwbGFjZShydWxlVG9EdXBsaWNhdGUsIG5ld05hbWUpO1xuICAgICAgICB0aGlzLmluc2VydFJ1bGUobmV3UnVsZSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudENoYW5nZU9ic2VydmVySW50ZXJmYWNlIGZyb20gJy4uL2NvbW1vbi9pbnRlcmZhY2VzL2NvbXBvbmVudC1jaGFuZ2Utb2JzZXJ2ZXIuaW50ZXJmYWNlJztcblxuaW1wb3J0IEJ1dHRvbkJ1aWxkZXIgZnJvbSAnLi4vY29tbW9uL21vZGVscy9CdXR0b25CdWlsZGVyJztcbmltcG9ydCBSYXdIVE1MQ29ucG9uZW50IGZyb20gJy4vUmF3SFRNTENvbXBvbmVudCc7XG5cbmltcG9ydCBDc3NTdHlsZVNoZWV0IGZyb20gJy4uL2Nzcy1zdHlsZXNoZWV0L2Nzcy1zdHlsZXNoZWV0JztcblxuaW1wb3J0IGRlZmluZUVsZW1lbnROYW1lIGZyb20gJy4uL2NvbW1vbi9mdW5jdGlvbnMvZGVmaW5lLWVsZW1lbnQtbmFtZSc7XG5pbXBvcnQgeyBBZGRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vZW51bXMvY29tcG9uZW50cy5lbnVtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgUmF3SFRNTENvbnBvbmVudCBpbXBsZW1lbnRzIENvbXBvbmVudENoYW5nZU9ic2VydmVySW50ZXJmYWNlIHtcbiAgICBwcml2YXRlIHN0YXRpYyBpdGVyYXRvciA9IDA7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGRlZmluZUVsZW1lbnROYW1lKGBidXR0b24ke0J1dHRvbi5pdGVyYXRvcisrfWAsIFJhd0hUTUxDb25wb25lbnQuaW5zdGFuY2VzKTtcblxuICAgICAgICBDc3NTdHlsZVNoZWV0Lmluc2VydFJ1bGUoYC4ke25hbWV9IHtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzRDQUY1MDtcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1gKTtcblxuICAgICAgICBDc3NTdHlsZVNoZWV0Lmluc2VydFJ1bGUoYC4ke25hbWV9OmhvdmVyIHtvcGFjaXR5OiAwLjZ9YCk7XG5cbiAgICAgICAgY29uc3QgZWxlbWVudCA9IG5ldyBCdXR0b25CdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXROYW1lKG5hbWUpXG4gICAgICAgICAgICAuc2V0SWQobmFtZSlcbiAgICAgICAgICAgIC5hZGRDc3NDbGFzc05hbWUobmFtZSlcbiAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ05ldyBCdXR0b24nKVxuICAgICAgICAgICAgLmRyYWdnYWJsZSgpXG4gICAgICAgICAgICAuYnVpbGQoKTtcblxuICAgICAgICBzdXBlcihlbGVtZW50KTtcblxuICAgICAgICB0aGlzLm9wZW5FbGVtZW50Q29uZmlncyA9IHRoaXMub3BlbkVsZW1lbnRDb25maWdzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhZ0xlYXZlID0gdGhpcy5kcmFnTGVhdmUuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuZHJhZ1N0YXJ0V2l0aFRhcmdldElkKTtcbiAgICAgICAgdGhpcy5fZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCB0aGlzLmRyYWdMZWF2ZSk7XG5cbiAgICAgICAgdGhpcy5fZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3BlbkVsZW1lbnRDb25maWdzKTtcbiAgICB9XG5cbiAgICBnZXQgZG9tRWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RvbUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9wZW5FbGVtZW50Q29uZmlncyhldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5zZWxlY3RvclZhbHVlKCk7XG5cblxuICAgICAgICB0aGlzLmJ1aWxkRWxlbWVudENvbmZpZ3MoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29tcG9uZW50U2VsZWN0ZWQoY29tcG9uZW50KSB7XG4gICAgICAgIGlmKGNvbXBvbmVudCA9PT0gdGhpcy5fZG9tRWxlbWVudFsnbmFtZSddKSB7XG4gICAgICAgICAgICB0aGlzLmJ1aWxkRWxlbWVudENvbmZpZ3MoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgYnVpbGRFbGVtZW50Q29uZmlncygpIHtcbiAgICAgICAgdGhpcy5pbnNlcnRDb21wb25lbnRBZnRlcihcbiAgICAgICAgICAgIEFkZENvbXBvbmVudC5hZGRJbm5lclRleHRDaGFuZ2VDb21wb25lbnQsXG4gICAgICAgICAgICBBZGRDb21wb25lbnQuYWRkQ2xhc3NOYW1lRGVmaW5pdGlvbkNvbXBvbmVudFxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuaW5zZXJ0Q29tcG9uZW50QmVmb3JlKFxuICAgICAgICAgICAgQWRkQ29tcG9uZW50LmFkZERpc3BsYXlBc1BhcmVudENvbXBvbmVudCxcbiAgICAgICAgICAgIEFkZENvbXBvbmVudC5hZGREaXNwbGF5QXNDaGlsZENvbXBvbmVudFxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuYnVpbGRFbGVtZW50cygpO1xuICAgIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnRDaGFuZ2VPYnNlcnZlckludGVyZmFjZSBmcm9tICcuLi9jb21tb24vaW50ZXJmYWNlcy9jb21wb25lbnQtY2hhbmdlLW9ic2VydmVyLmludGVyZmFjZSc7XG5cbmltcG9ydCBDb250YWluZXJCdWlsZGVyIGZyb20gJy4uL2NvbW1vbi9tb2RlbHMvQ29udGFpbmVyQnVpbGRlcic7XG5pbXBvcnQgUmF3SFRNTENvbnBvbmVudCBmcm9tICcuL1Jhd0hUTUxDb21wb25lbnQnO1xuXG5pbXBvcnQgQ3NzU3R5bGVTaGVldCBmcm9tICcuLi9jc3Mtc3R5bGVzaGVldC9jc3Mtc3R5bGVzaGVldCc7XG5pbXBvcnQgY29uc3RhbnRzIGZyb20gJy4uL2NvbW1vbi9jb25zdGFudHMvY29uc3RhbnRzJztcbmltcG9ydCBkZWZpbmVFbGVtZW50TmFtZSBmcm9tICcuLi9jb21tb24vZnVuY3Rpb25zL2RlZmluZS1lbGVtZW50LW5hbWUnO1xuXG5pbXBvcnQgeyBEaXNwbGF5VHlwZXNFbnVtIH0gZnJvbSAnLi4vY29tbW9uL2VudW1zL2Rpc3BsYXktdHlwZXMuZW51bSc7XG5pbXBvcnQgeyBBZGRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vZW51bXMvY29tcG9uZW50cy5lbnVtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGFpbmVyIGV4dGVuZHMgUmF3SFRNTENvbnBvbmVudCBpbXBsZW1lbnRzIENvbXBvbmVudENoYW5nZU9ic2VydmVySW50ZXJmYWNlIHtcbiAgICBwcml2YXRlIHN0YXRpYyBpdGVyYXRvciA9IDA7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGRlZmluZUVsZW1lbnROYW1lKGBjb250YWluZXIke0NvbnRhaW5lci5pdGVyYXRvcisrfWAsIFJhd0hUTUxDb25wb25lbnQuaW5zdGFuY2VzKTtcblxuICAgICAgICBDc3NTdHlsZVNoZWV0Lmluc2VydFJ1bGUoYC4ke25hbWV9IHtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiAke0Rpc3BsYXlUeXBlc0VudW0uZmxleH07XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwyNTUsMjU1KTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCByZ2IoMCwwLDApO1xuICAgICAgICB9YCk7XG5cbiAgICAgICAgY29uc3QgZWxlbWVudCA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXROYW1lKG5hbWUpXG4gICAgICAgICAgICAuc2V0SWQobmFtZSlcbiAgICAgICAgICAgIC5hZGRDc3NDbGFzc05hbWUobmFtZSlcbiAgICAgICAgICAgIC5kcmFnZ2FibGUoKVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG5cbiAgICAgICAgc3VwZXIoZWxlbWVudCk7XG5cbiAgICAgICAgdGhpcy5kcmFnRW50ZXIgPSB0aGlzLmRyYWdFbnRlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRyYWdMZWF2ZUZvclRoaXNFbGVtZW50ID0gdGhpcy5kcmFnTGVhdmVGb3JUaGlzRWxlbWVudC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRyb3AgPSB0aGlzLmRyb3AuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLm1vdXNlT3ZlciA9IHRoaXMubW91c2VPdmVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubW91c2VMZWF2ZSA9IHRoaXMubW91c2VMZWF2ZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMub3BlbkVsZW1lbnRDb25maWdzID0gdGhpcy5vcGVuRWxlbWVudENvbmZpZ3MuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuZHJhZ1N0YXJ0V2l0aFRhcmdldElkKTtcbiAgICAgICAgdGhpcy5fZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCB0aGlzLmRyYWdFbnRlcik7XG4gICAgICAgIHRoaXMuX2RvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgdGhpcy5kcmFnTGVhdmVGb3JUaGlzRWxlbWVudCk7XG4gICAgICAgIHRoaXMuX2RvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuZHJvcCk7XG5cbiAgICAgICAgdGhpcy5fZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgdGhpcy5tb3VzZU92ZXIpO1xuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLm1vdXNlTGVhdmUpO1xuXG4gICAgICAgIHRoaXMuX2RvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9wZW5FbGVtZW50Q29uZmlncyk7XG4gICAgfVxuXG4gICAgZ2V0IGRvbUVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kb21FbGVtZW50O1xuICAgIH1cblxuICAgIHByaXZhdGUgZHJhZ0VudGVyKGV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgdGhpcy5kb21FbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbnN0YW50cy5JTlZFUlRFRF9CQUNLR1JPVU5EX0NPTE9SO1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnQucGFyZW50RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJztcbiAgICB9XG5cbiAgICBwcml2YXRlIGRyYWdMZWF2ZUZvclRoaXNFbGVtZW50KGV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgdGhpcy5kb21FbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcnO1xuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmF0dHJpYnV0ZXMucmVtb3ZlTmFtZWRJdGVtKCdzdHlsZScpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZHJvcCgpIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcnO1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnQucGFyZW50RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb25zdGFudHMuSU5WRVJURURfQkFDS0dST1VORF9DT0xPUjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhvdmVyRXhpc3RzKCk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgaG92ZXJFeGlzdHMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fZG9tRWxlbWVudC5jbGFzc0xpc3QuZm9yRWFjaCgoY2xhc3NuYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIGlmIChDc3NTdHlsZVNoZWV0LmdldFJ1bGVJbmRleChgJHtjbGFzc25hbWV9OmhvdmVyYCkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgaG92ZXJFeGlzdHMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gaG92ZXJFeGlzdHM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBtb3VzZU92ZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5ob3ZlckV4aXN0cygpKSB7XG4gICAgICAgICAgICB0aGlzLl9kb21FbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbnN0YW50cy5JTlZFUlRFRF9CQUNLR1JPVU5EX0NPTE9SO1xuICAgICAgICAgICAgdGhpcy5fZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBtb3VzZUxlYXZlKCkge1xuICAgICAgICBpZiAoIXRoaXMuaG92ZXJFeGlzdHMoKSkge1xuICAgICAgICAgICAgdGhpcy5fZG9tRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJztcbiAgICAgICAgICAgIHRoaXMuX2RvbUVsZW1lbnQucGFyZW50RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb25zdGFudHMuSU5WRVJURURfQkFDS0dST1VORF9DT0xPUjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBvcGVuRWxlbWVudENvbmZpZ3MoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMuc2VsZWN0b3JWYWx1ZSgpO1xuXG4gICAgICAgIHRoaXMuYnVpbGRFbGVtZW50Q29uZmlncygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb21wb25lbnRTZWxlY3RlZChjb21wb25lbnQpIHtcbiAgICAgICAgaWYoY29tcG9uZW50ID09PSB0aGlzLl9kb21FbGVtZW50WyduYW1lJ10pIHtcbiAgICAgICAgICAgIHRoaXMuYnVpbGRFbGVtZW50Q29uZmlncygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBidWlsZEVsZW1lbnRDb25maWdzKCkge1xuICAgICAgICB0aGlzLmluc2VydENvbXBvbmVudEJlZm9yZShcbiAgICAgICAgICAgIEFkZENvbXBvbmVudC5hZGREaXNwbGF5QXNQYXJlbnRDb21wb25lbnQsXG4gICAgICAgICAgICBBZGRDb21wb25lbnQuYWRkRGlzcGxheUFzQ2hpbGRDb21wb25lbnRcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmJ1aWxkRWxlbWVudHMoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50Q2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2UgZnJvbSAnLi4vY29tbW9uL2ludGVyZmFjZXMvY29tcG9uZW50LWNoYW5nZS1vYnNlcnZlci5pbnRlcmZhY2UnO1xuXG5pbXBvcnQgRm9ybUJ1aWxkZXIgZnJvbSAnLi4vY29tbW9uL21vZGVscy9Gb3JtQnVpbGRlcic7XG5pbXBvcnQgUmF3SFRNTENvbnBvbmVudCBmcm9tICcuL1Jhd0hUTUxDb21wb25lbnQnO1xuXG5pbXBvcnQgQ3NzU3R5bGVTaGVldCBmcm9tICcuLi9jc3Mtc3R5bGVzaGVldC9jc3Mtc3R5bGVzaGVldCc7XG5pbXBvcnQgY29uc3RhbnRzIGZyb20gJy4uL2NvbW1vbi9jb25zdGFudHMvY29uc3RhbnRzJztcbmltcG9ydCBkZWZpbmVFbGVtZW50TmFtZSBmcm9tICcuLi9jb21tb24vZnVuY3Rpb25zL2RlZmluZS1lbGVtZW50LW5hbWUnO1xuXG5pbXBvcnQgeyBEaXNwbGF5VHlwZXNFbnVtIH0gZnJvbSAnLi4vY29tbW9uL2VudW1zL2Rpc3BsYXktdHlwZXMuZW51bSc7XG5pbXBvcnQgeyBBZGRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vZW51bXMvY29tcG9uZW50cy5lbnVtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybSBleHRlbmRzIFJhd0hUTUxDb25wb25lbnQgaW1wbGVtZW50cyBDb21wb25lbnRDaGFuZ2VPYnNlcnZlckludGVyZmFjZSB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaXRlcmF0b3IgPSAwO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBkZWZpbmVFbGVtZW50TmFtZShgZm9ybSR7Rm9ybS5pdGVyYXRvcisrfWAsIFJhd0hUTUxDb25wb25lbnQuaW5zdGFuY2VzKTtcblxuICAgICAgICBDc3NTdHlsZVNoZWV0Lmluc2VydFJ1bGUoYC4ke25hbWV9IHtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiAke0Rpc3BsYXlUeXBlc0VudW0uZmxleH07XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwyNTUsMjU1KTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCByZ2IoMCwwLDApO1xuICAgICAgICB9YCk7XG5cbiAgICAgICAgY29uc3QgZWxlbWVudCA9IG5ldyBGb3JtQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0TmFtZShuYW1lKVxuICAgICAgICAgICAgLnNldElkKG5hbWUpXG4gICAgICAgICAgICAuYWRkQ3NzQ2xhc3NOYW1lKG5hbWUpXG4gICAgICAgICAgICAuZHJhZ2dhYmxlKClcbiAgICAgICAgICAgIC5idWlsZCgpO1xuXG4gICAgICAgIHN1cGVyKGVsZW1lbnQpO1xuXG4gICAgICAgIHRoaXMuZHJhZ0VudGVyID0gdGhpcy5kcmFnRW50ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcmFnTGVhdmVGb3JUaGlzRWxlbWVudCA9IHRoaXMuZHJhZ0xlYXZlRm9yVGhpc0VsZW1lbnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcm9wID0gdGhpcy5kcm9wLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5tb3VzZU92ZXIgPSB0aGlzLm1vdXNlT3Zlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm1vdXNlTGVhdmUgPSB0aGlzLm1vdXNlTGVhdmUuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLm9wZW5FbGVtZW50Q29uZmlncyA9IHRoaXMub3BlbkVsZW1lbnRDb25maWdzLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5fZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLmRyYWdTdGFydFdpdGhUYXJnZXRJZCk7XG4gICAgICAgIHRoaXMuX2RvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgdGhpcy5kcmFnRW50ZXIpO1xuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIHRoaXMuZHJhZ0xlYXZlRm9yVGhpc0VsZW1lbnQpO1xuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLmRyb3ApO1xuXG4gICAgICAgIHRoaXMuX2RvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHRoaXMubW91c2VPdmVyKTtcbiAgICAgICAgdGhpcy5fZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5tb3VzZUxlYXZlKTtcblxuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcGVuRWxlbWVudENvbmZpZ3MpO1xuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMub3BlbkVsZW1lbnRDb25maWdzKTtcbiAgICB9XG5cbiAgICBnZXQgZG9tRWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RvbUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkcmFnRW50ZXIoZXZlbnQ6IERyYWdFdmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICB0aGlzLmRvbUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29uc3RhbnRzLklOVkVSVEVEX0JBQ0tHUk9VTkRfQ09MT1I7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcnO1xuICAgIH1cblxuICAgIHByaXZhdGUgZHJhZ0xlYXZlRm9yVGhpc0VsZW1lbnQoZXZlbnQ6IERyYWdFdmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICB0aGlzLmRvbUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyc7XG4gICAgICAgIHRoaXMuX2RvbUVsZW1lbnQuYXR0cmlidXRlcy5yZW1vdmVOYW1lZEl0ZW0oJ3N0eWxlJyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkcm9wKCkge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyc7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbnN0YW50cy5JTlZFUlRFRF9CQUNLR1JPVU5EX0NPTE9SO1xuICAgIH1cblxuICAgIHByaXZhdGUgaG92ZXJFeGlzdHMoKTogYm9vbGVhbiB7XG4gICAgICAgIGxldCBob3ZlckV4aXN0cyA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmNsYXNzTGlzdC5mb3JFYWNoKChjbGFzc25hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgaWYgKENzc1N0eWxlU2hlZXQuZ2V0UnVsZUluZGV4KGAke2NsYXNzbmFtZX06aG92ZXJgKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBob3ZlckV4aXN0cyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBob3ZlckV4aXN0cztcbiAgICB9XG5cbiAgICBwcml2YXRlIG1vdXNlT3ZlcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmhvdmVyRXhpc3RzKCkpIHtcbiAgICAgICAgICAgIHRoaXMuX2RvbUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29uc3RhbnRzLklOVkVSVEVEX0JBQ0tHUk9VTkRfQ09MT1I7XG4gICAgICAgICAgICB0aGlzLl9kb21FbGVtZW50LnBhcmVudEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG1vdXNlTGVhdmUoKSB7XG4gICAgICAgIGlmICghdGhpcy5ob3ZlckV4aXN0cygpKSB7XG4gICAgICAgICAgICB0aGlzLl9kb21FbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcnO1xuICAgICAgICAgICAgdGhpcy5fZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbnN0YW50cy5JTlZFUlRFRF9CQUNLR1JPVU5EX0NPTE9SO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9wZW5FbGVtZW50Q29uZmlncyhldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5zZWxlY3RvclZhbHVlKCk7XG5cbiAgICAgICAgdGhpcy5idWlsZEVsZW1lbnRDb25maWdzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbXBvbmVudFNlbGVjdGVkKGNvbXBvbmVudCkge1xuICAgICAgICBpZihjb21wb25lbnQgPT09IHRoaXMuX2RvbUVsZW1lbnRbJ25hbWUnXSkge1xuICAgICAgICAgICAgdGhpcy5idWlsZEVsZW1lbnRDb25maWdzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGJ1aWxkRWxlbWVudENvbmZpZ3MoKSB7XG4gICAgICAgIHRoaXMuaW5zZXJ0Q29tcG9uZW50QmVmb3JlKFxuICAgICAgICAgICAgQWRkQ29tcG9uZW50LmFkZERpc3BsYXlBc1BhcmVudENvbXBvbmVudCxcbiAgICAgICAgICAgIEFkZENvbXBvbmVudC5hZGREaXNwbGF5QXNDaGlsZENvbXBvbmVudFxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuYnVpbGRFbGVtZW50cygpO1xuICAgIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnRDaGFuZ2VPYnNlcnZlckludGVyZmFjZSBmcm9tICcuLi9jb21tb24vaW50ZXJmYWNlcy9jb21wb25lbnQtY2hhbmdlLW9ic2VydmVyLmludGVyZmFjZSc7XG5cbmltcG9ydCBJbWFnZUJ1aWxkZXIgZnJvbSAnLi4vY29tbW9uL21vZGVscy9JbWFnZUJ1aWxkZXInO1xuaW1wb3J0IFJhd0hUTUxDb25wb25lbnQgZnJvbSAnLi9SYXdIVE1MQ29tcG9uZW50JztcblxuaW1wb3J0IENzc1N0eWxlU2hlZXQgZnJvbSAnLi4vY3NzLXN0eWxlc2hlZXQvY3NzLXN0eWxlc2hlZXQnO1xuaW1wb3J0IGRlZmluZUVsZW1lbnROYW1lIGZyb20gJy4uL2NvbW1vbi9mdW5jdGlvbnMvZGVmaW5lLWVsZW1lbnQtbmFtZSc7XG5pbXBvcnQgeyBBZGRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vZW51bXMvY29tcG9uZW50cy5lbnVtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2UgZXh0ZW5kcyBSYXdIVE1MQ29ucG9uZW50IGltcGxlbWVudHMgQ29tcG9uZW50Q2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2Uge1xuICAgIHByaXZhdGUgc3RhdGljIGl0ZXJhdG9yID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBjb25zdCBuYW1lID0gZGVmaW5lRWxlbWVudE5hbWUoYGltYWdlJHtJbWFnZS5pdGVyYXRvcisrfWAsIFJhd0hUTUxDb25wb25lbnQuaW5zdGFuY2VzKTtcblxuICAgICAgICBDc3NTdHlsZVNoZWV0Lmluc2VydFJ1bGUoYC4ke25hbWV9IHtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LDI1NSwyNTUpO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggZGFzaGVkIHJnYigwLDAsMCk7XG4gICAgICAgIH1gKTtcblxuICAgICAgICBjb25zdCBlbGVtZW50ID0gbmV3IEltYWdlQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0TmFtZShuYW1lKVxuICAgICAgICAgICAgLnNldElkKG5hbWUpXG4gICAgICAgICAgICAuYWRkQ3NzQ2xhc3NOYW1lKG5hbWUpXG4gICAgICAgICAgICAuc2V0VXJsKClcbiAgICAgICAgICAgIC5kcmFnZ2FibGUoKVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG5cbiAgICAgICAgc3VwZXIoZWxlbWVudCk7XG5cbiAgICAgICAgdGhpcy5vcGVuRWxlbWVudENvbmZpZ3MgPSB0aGlzLm9wZW5FbGVtZW50Q29uZmlncy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRyYWdMZWF2ZSA9IHRoaXMuZHJhZ0xlYXZlLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5fZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLmRyYWdTdGFydFdpdGhUYXJnZXRJZCk7XG4gICAgICAgIHRoaXMuX2RvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgdGhpcy5kcmFnTGVhdmUpO1xuXG4gICAgICAgIHRoaXMuX2RvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9wZW5FbGVtZW50Q29uZmlncyk7XG4gICAgfVxuXG4gICAgZ2V0IGRvbUVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kb21FbGVtZW50O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvcGVuRWxlbWVudENvbmZpZ3MoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMuc2VsZWN0b3JWYWx1ZSgpO1xuICAgICAgICB0aGlzLmJ1aWxkRWxlbWVudENvbmZpZ3MoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29tcG9uZW50U2VsZWN0ZWQoY29tcG9uZW50KSB7XG4gICAgICAgIGlmIChjb21wb25lbnQgPT09IHRoaXMuX2RvbUVsZW1lbnRbJ25hbWUnXSkge1xuICAgICAgICAgICAgdGhpcy5idWlsZEVsZW1lbnRDb25maWdzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGJ1aWxkRWxlbWVudENvbmZpZ3MoKSB7XG4gICAgICAgIHRoaXMuaW5zZXJ0Q29tcG9uZW50QWZ0ZXIoXG4gICAgICAgICAgICBBZGRDb21wb25lbnQuYWRkVXJsSW5wdXRDb21wb25lbnQsXG4gICAgICAgICAgICBBZGRDb21wb25lbnQuYWRkQ2xhc3NOYW1lRGVmaW5pdGlvbkNvbXBvbmVudFxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuYnVpbGRFbGVtZW50cygpO1xuICAgIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnRDaGFuZ2VPYnNlcnZlckludGVyZmFjZSBmcm9tICcuLi9jb21tb24vaW50ZXJmYWNlcy9jb21wb25lbnQtY2hhbmdlLW9ic2VydmVyLmludGVyZmFjZSc7XG5cbmltcG9ydCBJbnB1dEJ1aWxkZXIgZnJvbSAnLi4vY29tbW9uL21vZGVscy9JbnB1dEJ1aWxkZXInO1xuaW1wb3J0IFJhd0hUTUxDb25wb25lbnQgZnJvbSAnLi9SYXdIVE1MQ29tcG9uZW50JztcblxuaW1wb3J0IGRlZmluZUVsZW1lbnROYW1lIGZyb20gJy4uL2NvbW1vbi9mdW5jdGlvbnMvZGVmaW5lLWVsZW1lbnQtbmFtZSc7XG5cbmltcG9ydCBDc3NTdHlsZVNoZWV0IGZyb20gJy4uL2Nzcy1zdHlsZXNoZWV0L2Nzcy1zdHlsZXNoZWV0JztcblxuaW1wb3J0IHsgSW5wdXRUeXBlRW51bSB9IGZyb20gJy4uL2NvbW1vbi9lbnVtcy9pbnB1dC10eXBlLmVudW0nO1xuaW1wb3J0IHsgQWRkQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2VudW1zL2NvbXBvbmVudHMuZW51bSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dCBleHRlbmRzIFJhd0hUTUxDb25wb25lbnQgaW1wbGVtZW50cyBDb21wb25lbnRDaGFuZ2VPYnNlcnZlckludGVyZmFjZSB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaXRlcmF0b3IgPSAwO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBkZWZpbmVFbGVtZW50TmFtZShgaW5wdXQke0lucHV0Lml0ZXJhdG9yKyt9YCwgUmF3SFRNTENvbnBvbmVudC5pbnN0YW5jZXMpO1xuXG4gICAgICAgIENzc1N0eWxlU2hlZXQuaW5zZXJ0UnVsZShgLiR7bmFtZX0ge1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzcHggI2RkZDtcbiAgICAgICAgfWApO1xuXG4gICAgICAgIENzc1N0eWxlU2hlZXQuaW5zZXJ0UnVsZShgLiR7bmFtZX06aG92ZXIge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAgICAgICB9YCk7XG5cbiAgICAgICAgY29uc3QgZWxlbWVudCA9IG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS50ZXh0KVxuICAgICAgICAgICAgLnNldE5hbWUobmFtZSlcbiAgICAgICAgICAgIC5zZXRJZChuYW1lKVxuICAgICAgICAgICAgLmFkZENzc0NsYXNzTmFtZShuYW1lKVxuICAgICAgICAgICAgLmRyYWdnYWJsZSgpXG4gICAgICAgICAgICAuYnVpbGQoKTtcblxuICAgICAgICBzdXBlcihlbGVtZW50KTtcblxuICAgICAgICB0aGlzLm9wZW5FbGVtZW50Q29uZmlncyA9IHRoaXMub3BlbkVsZW1lbnRDb25maWdzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhZ0xlYXZlID0gdGhpcy5kcmFnTGVhdmUuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuZHJhZ1N0YXJ0V2l0aFRhcmdldElkKTtcbiAgICAgICAgdGhpcy5fZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCB0aGlzLmRyYWdMZWF2ZSk7XG5cbiAgICAgICAgdGhpcy5fZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3BlbkVsZW1lbnRDb25maWdzKTtcbiAgICB9XG5cbiAgICBnZXQgZG9tRWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RvbUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9wZW5FbGVtZW50Q29uZmlncyhldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5zZWxlY3RvclZhbHVlKCk7XG4gICAgICAgIHRoaXMuYnVpbGRFbGVtZW50Q29uZmlncygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb21wb25lbnRTZWxlY3RlZChjb21wb25lbnQpIHtcbiAgICAgICAgaWYoY29tcG9uZW50ID09PSB0aGlzLl9kb21FbGVtZW50WyduYW1lJ10pIHtcbiAgICAgICAgICAgIHRoaXMuYnVpbGRFbGVtZW50Q29uZmlncygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBidWlsZEVsZW1lbnRDb25maWdzKCkge1xuICAgICAgICB0aGlzLmluc2VydENvbXBvbmVudEFmdGVyKFxuICAgICAgICAgICAgQWRkQ29tcG9uZW50LmFkZElucHV0VHlwZVNlbGVjdG9yQ29tcG9uZW50LFxuICAgICAgICAgICAgQWRkQ29tcG9uZW50LmFkZENsYXNzTmFtZURlZmluaXRpb25Db21wb25lbnRcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmJ1aWxkRWxlbWVudHMoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50Q2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2UgZnJvbSAnLi4vY29tbW9uL2ludGVyZmFjZXMvY29tcG9uZW50LWNoYW5nZS1vYnNlcnZlci5pbnRlcmZhY2UnO1xuXG5pbXBvcnQgTGFiZWxCdWlsZGVyIGZyb20gJy4uL2NvbW1vbi9tb2RlbHMvTGFiZWxCdWlsZGVyJztcbmltcG9ydCBSYXdIVE1MQ29ucG9uZW50IGZyb20gJy4vUmF3SFRNTENvbXBvbmVudCc7XG5cbmltcG9ydCBDc3NTdHlsZVNoZWV0IGZyb20gJy4uL2Nzcy1zdHlsZXNoZWV0L2Nzcy1zdHlsZXNoZWV0JztcblxuaW1wb3J0IGRlZmluZUVsZW1lbnROYW1lIGZyb20gJy4uL2NvbW1vbi9mdW5jdGlvbnMvZGVmaW5lLWVsZW1lbnQtbmFtZSc7XG5pbXBvcnQgeyBBZGRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vZW51bXMvY29tcG9uZW50cy5lbnVtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGFiZWwgZXh0ZW5kcyBSYXdIVE1MQ29ucG9uZW50IGltcGxlbWVudHMgQ29tcG9uZW50Q2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2Uge1xuICAgIHByaXZhdGUgc3RhdGljIGl0ZXJhdG9yID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBjb25zdCBuYW1lID0gZGVmaW5lRWxlbWVudE5hbWUoYGxhYmVsJHtMYWJlbC5pdGVyYXRvcisrfWAsIFJhd0hUTUxDb25wb25lbnQuaW5zdGFuY2VzKTtcblxuICAgICAgICBDc3NTdHlsZVNoZWV0Lmluc2VydFJ1bGUoYC4ke25hbWV9IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZVxuICAgICAgICB9YCk7XG5cbiAgICAgICAgY29uc3QgZWxlbWVudCA9IG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldE5hbWUobmFtZSlcbiAgICAgICAgICAgIC5zZXRJZChuYW1lKVxuICAgICAgICAgICAgLmFkZENzc0NsYXNzTmFtZShuYW1lKVxuICAgICAgICAgICAgLnNldElubmVyVGV4dCgnTmV3IExhYmVsJylcbiAgICAgICAgICAgIC5kcmFnZ2FibGUoKVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG5cbiAgICAgICAgc3VwZXIoZWxlbWVudCk7XG5cbiAgICAgICAgdGhpcy5vcGVuRWxlbWVudENvbmZpZ3MgPSB0aGlzLm9wZW5FbGVtZW50Q29uZmlncy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRyYWdMZWF2ZSA9IHRoaXMuZHJhZ0xlYXZlLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5fZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLmRyYWdTdGFydFdpdGhUYXJnZXRJZCk7XG4gICAgICAgIHRoaXMuX2RvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgdGhpcy5kcmFnTGVhdmUpO1xuXG4gICAgICAgIHRoaXMuX2RvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9wZW5FbGVtZW50Q29uZmlncyk7XG4gICAgfVxuXG4gICAgZ2V0IGRvbUVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kb21FbGVtZW50O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvcGVuRWxlbWVudENvbmZpZ3MoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMuc2VsZWN0b3JWYWx1ZSgpO1xuXG5cbiAgICAgICAgdGhpcy5idWlsZEVsZW1lbnRDb25maWdzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbXBvbmVudFNlbGVjdGVkKGNvbXBvbmVudCkge1xuICAgICAgICBpZihjb21wb25lbnQgPT09IHRoaXMuX2RvbUVsZW1lbnRbJ25hbWUnXSkge1xuICAgICAgICAgICAgdGhpcy5idWlsZEVsZW1lbnRDb25maWdzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGJ1aWxkRWxlbWVudENvbmZpZ3MoKSB7XG4gICAgICAgIHRoaXMuaW5zZXJ0Q29tcG9uZW50QWZ0ZXIoXG4gICAgICAgICAgICBBZGRDb21wb25lbnQuYWRkSW5uZXJUZXh0Q2hhbmdlQ29tcG9uZW50LFxuICAgICAgICAgICAgQWRkQ29tcG9uZW50LmFkZENsYXNzTmFtZURlZmluaXRpb25Db21wb25lbnRcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmJ1aWxkRWxlbWVudHMoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ2xhc3NDaGFuZ2VQdWJsaXNoZXIgZnJvbSAnLi4vY29tbW9uL3B1Ymxpc2hlcnMvQ2xhc3NDaGFuZ2VQdWJsaXNoZXInO1xuaW1wb3J0IENvbXBvbmVudENoYW5nZU9ic2VydmVySW50ZXJmYWNlIGZyb20gJy4uL2NvbW1vbi9pbnRlcmZhY2VzL2NvbXBvbmVudC1jaGFuZ2Utb2JzZXJ2ZXIuaW50ZXJmYWNlJztcblxuaW1wb3J0IEJ1dHRvbkJ1aWxkZXIgZnJvbSAnLi4vY29tbW9uL21vZGVscy9CdXR0b25CdWlsZGVyJztcbmltcG9ydCBMYWJlbEJ1aWxkZXIgZnJvbSAnLi4vY29tbW9uL21vZGVscy9MYWJlbEJ1aWxkZXInO1xuaW1wb3J0IENvbnRhaW5lckJ1aWxkZXIgZnJvbSAnLi4vY29tbW9uL21vZGVscy9Db250YWluZXJCdWlsZGVyJztcbmltcG9ydCBTdHlsZXNDb21wb25lbnRzQnVpbGRlciBmcm9tICcuLi9jb21tb24vbW9kZWxzL1N0eWxlc0NvbXBvbmVudHNCdWlsZGVyJztcblxuaW1wb3J0IGNvbnRhbnRzIGZyb20gJy4uL2NvbW1vbi9jb25zdGFudHMvY29uc3RhbnRzJztcblxuaW1wb3J0IHsgSW5wdXRUeXBlRW51bSB9IGZyb20gJy4uL2NvbW1vbi9lbnVtcy9pbnB1dC10eXBlLmVudW0nO1xuaW1wb3J0IHsgU3R5bGVOYW1lRW51bSB9IGZyb20gJy4uL2NvbW1vbi9lbnVtcy9zdHlsZS1uYW1lLmVudW0nO1xuaW1wb3J0IHsgRGlzcGxheVR5cGVzRW51bSB9IGZyb20gJy4uL2NvbW1vbi9lbnVtcy9kaXNwbGF5LXR5cGVzLmVudW0nO1xuXG5pbXBvcnQgRGlzcGxheUFzUGFyZW50Q29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnRzL2Rpc3BsYXktYXMtcGFyZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgR2VuZXJpY1ByaW1hcnlJbnB1dENvbXBvbmVudCBmcm9tICcuLi9jb21tb24vY29tcG9uZW50cy9nZW5lcmljLXByaW1hcnktaW5wdXQuY29tcG9uZW50JztcbmltcG9ydCBHZW5lcmljUHJpbWFyeVNlbGVjdG9yQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnRzL2dlbmVyaWMtcHJpbWFyeS1zZWxlY3Rvci5jb21wb25lbnQnO1xuaW1wb3J0IElkRGVmaW5pdGlvbkNvbXBvbmVudCBmcm9tICcuLi9jb21tb24vY29tcG9uZW50cy9pZC1kZWZpbml0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgTWFyZ2luT3JQYWRkaW5nQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnRzL21hcmdpbi1vci1wYWRkaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgRGlzcGxheUFzQ2hpbGRDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudHMvZGlzcGxheS1hcy1jaGlsZC5jb21wb25lbnQnO1xuaW1wb3J0IEJvcmRlckNvbXBvbmVudCBmcm9tICcuLi9jb21tb24vY29tcG9uZW50cy9ib3JkZXIuY29tcG9uZW50JztcbmltcG9ydCBCYWNrZ3JvdW5kQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnRzL2JhY2tncm91bmQuY29tcG9uZW50JztcbmltcG9ydCBCb3hTaGFkb3dDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudHMvYm94LXNoYWRvdy5jb21wb25lbnQnO1xuaW1wb3J0IENsYXNzTWFuYWdlbWVudENvbXBvbmVudCBmcm9tICcuLi9jb21tb24vY29tcG9uZW50cy9jbGFzcy1tYW5hZ2VtZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgU2l6ZXNDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudHMvc2l6ZXMuY29tcG9uZW50JztcbmltcG9ydCBGb250Q29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnRzL2ZvbnQuY29tcG9uZW50cyc7XG5pbXBvcnQgVXJsRGVmaW5pdGlvbkNvbXBvbmVudCBmcm9tICcuLi9jb21tb24vY29tcG9uZW50cy91cmwtZGVmaW5pdGlvbi1jb21wb25lbnQnO1xuaW1wb3J0IHsgQWRkQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2VudW1zL2NvbXBvbmVudHMuZW51bSc7XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFJhd0hUTUxDb25wb25lbnQgaW1wbGVtZW50cyBDb21wb25lbnRDaGFuZ2VPYnNlcnZlckludGVyZmFjZSB7XG4gICAgcHJvdGVjdGVkIF9kb21FbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICBwcm90ZWN0ZWQgc3R5bGVzQ29tcG9uZW50czogU3R5bGVzQ29tcG9uZW50c0J1aWxkZXI7XG5cbiAgICBwdWJsaWMgc3RhdGljIGluc3RhbmNlczogSFRNTEVsZW1lbnRbXSA9IFtdO1xuXG4gICAgcHJvdGVjdGVkIGNsYXNzQ2hhbmdlUHVibGlzaGVyOiBDbGFzc0NoYW5nZVB1Ymxpc2hlcjtcblxuICAgIHByb3RlY3RlZCBpdGVtc1NlbGVjdG9yOiBIVE1MU2VsZWN0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3QtaXRlbScpO1xuICAgIHByaXZhdGUgb3B0aW9uRWxlbWVudDogSFRNTE9wdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcblxuICAgIGNvbnN0cnVjdG9yKGRvbUVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuX2RvbUVsZW1lbnQgPSBkb21FbGVtZW50XG5cbiAgICAgICAgUmF3SFRNTENvbnBvbmVudC5pbnN0YW5jZXMucHVzaCh0aGlzLl9kb21FbGVtZW50KTtcblxuICAgICAgICB0aGlzLmNsYXNzQ2hhbmdlUHVibGlzaGVyID0gbmV3IENsYXNzQ2hhbmdlUHVibGlzaGVyKCk7XG5cbiAgICAgICAgdGhpcy5vcHRpb25FbGVtZW50LnZhbHVlID0gdGhpcy5kb21FbGVtZW50LmlkO1xuICAgICAgICB0aGlzLm9wdGlvbkVsZW1lbnQudGV4dCA9IHRoaXMuZG9tRWxlbWVudC5pZDtcbiAgICAgICAgdGhpcy5pdGVtc1NlbGVjdG9yLmFwcGVuZENoaWxkKHRoaXMub3B0aW9uRWxlbWVudCk7XG5cbiAgICAgICAgdGhpcy5yZW1vdmVFbGVtZW50ID0gdGhpcy5yZW1vdmVFbGVtZW50LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZ2V0IGRvbUVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kb21FbGVtZW50O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBkcmFnU3RhcnRXaXRoVGFyZ2V0SWQoZXZlbnQ6IERyYWdFdmVudCkge1xuICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9wbGFpbicsIChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmlkKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYWRkSWREZWZpbml0aW9uQ29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gbmV3IElkRGVmaW5pdGlvbkNvbXBvbmVudCh0aGlzLl9kb21FbGVtZW50KS5jb21wb25lbnQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFkZENsYXNzTmFtZURlZmluaXRpb25Db21wb25lbnQoKSB7XG4gICAgICAgIHJldHVybiBuZXcgQ2xhc3NNYW5hZ2VtZW50Q29tcG9uZW50KHRoaXMuX2RvbUVsZW1lbnQsIHRoaXMuY2xhc3NDaGFuZ2VQdWJsaXNoZXIpLmNvbXBvbmVudDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYWRkTWFyZ2luU3R5bGVDb21wb25lbnQoKSB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBNYXJnaW5PclBhZGRpbmdDb21wb25lbnQodGhpcy5fZG9tRWxlbWVudCwgU3R5bGVOYW1lRW51bS5tYXJnaW4pO1xuICAgICAgICB0aGlzLmNsYXNzQ2hhbmdlUHVibGlzaGVyLmF0dGFjaChjb21wb25lbnQpO1xuICAgICAgICByZXR1cm4gY29tcG9uZW50LmNvbXBvbmVudDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYWRkUGFkZGluZ1N0eWxlQ29tcG9uZW50KCkge1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgTWFyZ2luT3JQYWRkaW5nQ29tcG9uZW50KHRoaXMuX2RvbUVsZW1lbnQsIFN0eWxlTmFtZUVudW0ucGFkZGluZyk7XG4gICAgICAgIHRoaXMuY2xhc3NDaGFuZ2VQdWJsaXNoZXIuYXR0YWNoKGNvbXBvbmVudCk7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQuY29tcG9uZW50O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhZGRJbm5lclRleHRDaGFuZ2VDb21wb25lbnQoKSB7XG4gICAgICAgIGNvbnN0IGNhbkFkZFRleHQ6ICgpID0+IGJvb2xlYW4gPSAoKSA9PiB7XG4gICAgICAgICAgICBpZih0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MLmluY2x1ZGVzKCc8JykpIHtcbiAgICAgICAgICAgICAgICBhbGVydCgnSW5uZXJIVE1MIG11c3QgYmUgZW1wdHknKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IEdlbmVyaWNQcmltYXJ5SW5wdXRDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgdGhpcy5fZG9tRWxlbWVudCxcbiAgICAgICAgICAgICAgICAnaW5uZXJUZXh0JyxcbiAgICAgICAgICAgICAgICAnSW5uZXIgVGV4dCcsXG4gICAgICAgICAgICAgICAgY2FuQWRkVGV4dFxuICAgICAgICAgICAgKS5jb21wb25lbnQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFkZElucHV0VHlwZVNlbGVjdG9yQ29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gbmV3IEdlbmVyaWNQcmltYXJ5U2VsZWN0b3JDb21wb25lbnQoXG4gICAgICAgICAgICB0aGlzLl9kb21FbGVtZW50LFxuICAgICAgICAgICAgJ3R5cGUnLFxuICAgICAgICAgICAgJ0lucHV0IFR5cGUgU2VsZWN0b3InLFxuICAgICAgICAgICAgSW5wdXRUeXBlRW51bVxuICAgICAgICApLmNvbXBvbmVudDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYWRkTGFiZWxDb21wb25lbnQobGFiZWw6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gbmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0SW5uZXJUZXh0KGxhYmVsKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYWRkRGlzcGxheUFzUGFyZW50Q29tcG9uZW50KCkge1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgRGlzcGxheUFzUGFyZW50Q29tcG9uZW50KHRoaXMuX2RvbUVsZW1lbnQpO1xuICAgICAgICB0aGlzLmNsYXNzQ2hhbmdlUHVibGlzaGVyLmF0dGFjaChjb21wb25lbnQpO1xuICAgICAgICByZXR1cm4gY29tcG9uZW50LmNvbXBvbmVudDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYWRkRGlzcGxheUFzQ2hpbGRDb21wb25lbnQoKSB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBEaXNwbGF5QXNDaGlsZENvbXBvbmVudCh0aGlzLl9kb21FbGVtZW50KTtcbiAgICAgICAgdGhpcy5jbGFzc0NoYW5nZVB1Ymxpc2hlci5hdHRhY2goY29tcG9uZW50KTtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5jb21wb25lbnQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFkZEJvcmRlclNldHRpbmdzQ29tcG9uZW50KCkge1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgQm9yZGVyQ29tcG9uZW50KHRoaXMuX2RvbUVsZW1lbnQpO1xuICAgICAgICB0aGlzLmNsYXNzQ2hhbmdlUHVibGlzaGVyLmF0dGFjaChjb21wb25lbnQpO1xuICAgICAgICByZXR1cm4gY29tcG9uZW50LmNvbXBvbmVudDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYWRkQmFja2dyb3VuZFNldHRpbmdzQ29tcG9uZW50KCkge1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgQmFja2dyb3VuZENvbXBvbmVudCh0aGlzLl9kb21FbGVtZW50KTtcbiAgICAgICAgdGhpcy5jbGFzc0NoYW5nZVB1Ymxpc2hlci5hdHRhY2goY29tcG9uZW50KTtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5jb21wb25lbnQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFkZEJveFNoYWRvd0NvbXBvbmVudCgpIHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbmV3IEJveFNoYWRvd0NvbXBvbmVudCh0aGlzLl9kb21FbGVtZW50KTtcbiAgICAgICAgdGhpcy5jbGFzc0NoYW5nZVB1Ymxpc2hlci5hdHRhY2goY29tcG9uZW50KTtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5jb21wb25lbnQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFkZFNpemVDb21wb25lbnRzKCkge1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgU2l6ZXNDb21wb25lbnQodGhpcy5fZG9tRWxlbWVudCk7XG4gICAgICAgIHRoaXMuY2xhc3NDaGFuZ2VQdWJsaXNoZXIuYXR0YWNoKGNvbXBvbmVudCk7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQuY29tcG9uZW50O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhZGRGb250Q29tcG9uZW5zKCkge1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgRm9udENvbXBvbmVudCh0aGlzLl9kb21FbGVtZW50KTtcbiAgICAgICAgdGhpcy5jbGFzc0NoYW5nZVB1Ymxpc2hlci5hdHRhY2goY29tcG9uZW50KTtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5jb21wb25lbnQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFkZFVybElucHV0Q29tcG9uZW50KCkge1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgVXJsRGVmaW5pdGlvbkNvbXBvbmVudCh0aGlzLl9kb21FbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5jb21wb25lbnQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFkZEFjdGlvbnNDb21wb25lbnRzKCkge1xuICAgICAgICByZXR1cm4gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uYm9yZGVyLCAnMXB4IHNvbGlkICM0Q0FGNTAnKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ucGFkZGluZywgJzNweCcpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0F2YWlsYWJsZSBBY3Rpb25zJylcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuYWRkUmVtb3ZlRWxlbWVudENvbXBvbmVudCgpKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgIH1cblxuICAgIHByaXZhdGUgYWRkUmVtb3ZlRWxlbWVudENvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBCdXR0b25CdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ1JlbW92ZSBFbGVtZW50JylcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucmVtb3ZlRWxlbWVudClcbiAgICAgICAgICAgIC5idWlsZCgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCByZW1vdmVFbGVtZW50KCkge1xuICAgICAgICBpZiAoY29uZmlybSgnQXJlIHlvdSBzdXJlIHRvIHJlbW92ZSB0aGlzIGNvbXBvbmVudCcpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLl9kb21FbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQodGhpcy5fZG9tRWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzLnN0eWxlc0NvbXBvbmVudHMucmVtb3ZlKCk7XG4gICAgICAgICAgICB0aGlzLml0ZW1zU2VsZWN0b3IucmVtb3ZlQ2hpbGQodGhpcy5vcHRpb25FbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBkcmFnTGVhdmUoZXZlbnQ6IERyYWdFdmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgaWYgKHRoaXMuX2RvbUVsZW1lbnQucGFyZW50RWxlbWVudC50YWdOYW1lID09PSAnRElWJykge1xuICAgICAgICAgICAgdGhpcy5fZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbnRhbnRzLklOVkVSVEVEX0JBQ0tHUk9VTkRfQ09MT1I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2VsZWN0b3JWYWx1ZSgpIHtcbiAgICAgICAgbGV0IHRoaXNPcHRpb25JbmRleDogbnVtYmVyO1xuICAgICAgICB0aGlzLml0ZW1zU2VsZWN0b3IuY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIChjaGlsZCBhcyBIVE1MT3B0aW9uRWxlbWVudCkudmFsdWUgPT09IHRoaXMuZG9tRWxlbWVudC5pZCA/IHRoaXNPcHRpb25JbmRleCA9IGluZGV4IDogdW5kZWZpbmVkXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuaXRlbXNTZWxlY3Rvci5zZWxlY3RlZEluZGV4ID0gdGhpc09wdGlvbkluZGV4O1xuICAgIH1cblxuICAgIHB1YmxpYyBjb21wb25lbnRTZWxlY3RlZChjb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjb21tb25Db21wb25lbnRzOiBBZGRDb21wb25lbnRbXSA9IFtcbiAgICAgICAgQWRkQ29tcG9uZW50LmFkZElkRGVmaW5pdGlvbkNvbXBvbmVudCxcbiAgICAgICAgQWRkQ29tcG9uZW50LmFkZENsYXNzTmFtZURlZmluaXRpb25Db21wb25lbnQsXG4gICAgICAgIEFkZENvbXBvbmVudC5hZGRNYXJnaW5TdHlsZUNvbXBvbmVudCxcbiAgICAgICAgQWRkQ29tcG9uZW50LmFkZFBhZGRpbmdTdHlsZUNvbXBvbmVudCxcbiAgICAgICAgQWRkQ29tcG9uZW50LmFkZFNpemVDb21wb25lbnRzLFxuICAgICAgICBBZGRDb21wb25lbnQuYWRkRm9udENvbXBvbmVucyxcbiAgICAgICAgQWRkQ29tcG9uZW50LmFkZEJhY2tncm91bmRTZXR0aW5nc0NvbXBvbmVudCxcbiAgICAgICAgQWRkQ29tcG9uZW50LmFkZEJvcmRlclNldHRpbmdzQ29tcG9uZW50LFxuICAgICAgICBBZGRDb21wb25lbnQuYWRkQm94U2hhZG93Q29tcG9uZW50LFxuICAgICAgICBBZGRDb21wb25lbnQuYWRkRGlzcGxheUFzQ2hpbGRDb21wb25lbnQsXG4gICAgICAgIEFkZENvbXBvbmVudC5hZGRBY3Rpb25zQ29tcG9uZW50cyxcbiAgICBdXG5cbiAgICBwcm90ZWN0ZWQgaW5zZXJ0Q29tcG9uZW50QmVmb3JlKFxuICAgICAgICBjb21wb25lbnRUb0luc2VydDogQWRkQ29tcG9uZW50LFxuICAgICAgICByZWZlcmVuY2VDb21wb25lbnQ6IEFkZENvbXBvbmVudFxuICAgICkge1xuICAgICAgICBjb25zdCBhbHJlYWR5RXhpc3RzID0gdGhpcy5jb21tb25Db21wb25lbnRzLmZpbmQoKGNvbXApID0+IGNvbXAgPT09IGNvbXBvbmVudFRvSW5zZXJ0KTtcblxuICAgICAgICBpZihhbHJlYWR5RXhpc3RzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuY29tbW9uQ29tcG9uZW50cy5maW5kSW5kZXgoKGNvbXApID0+IGNvbXAgPT09IHJlZmVyZW5jZUNvbXBvbmVudCk7XG5cbiAgICAgICAgdGhpcy5jb21tb25Db21wb25lbnRzLnNwbGljZShpbmRleCwgMCwgY29tcG9uZW50VG9JbnNlcnQpXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGluc2VydENvbXBvbmVudEFmdGVyKFxuICAgICAgICBjb21wb25lbnRUb0luc2VydDogQWRkQ29tcG9uZW50LFxuICAgICAgICByZWZlcmVuY2VDb21wb25lbnQ6IEFkZENvbXBvbmVudFxuICAgICkge1xuICAgICAgICBjb25zdCBhbHJlYWR5RXhpc3RzID0gdGhpcy5jb21tb25Db21wb25lbnRzLmZpbmQoKGNvbXApID0+IGNvbXAgPT09IGNvbXBvbmVudFRvSW5zZXJ0KTtcblxuICAgICAgICBpZihhbHJlYWR5RXhpc3RzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuY29tbW9uQ29tcG9uZW50cy5maW5kSW5kZXgoKGNvbXApID0+IGNvbXAgPT09IHJlZmVyZW5jZUNvbXBvbmVudCk7XG4gICAgICAgIHRoaXMuY29tbW9uQ29tcG9uZW50cy5zcGxpY2UoaW5kZXggKyAxLCAwLCBjb21wb25lbnRUb0luc2VydClcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYnVpbGRFbGVtZW50cygpIHtcbiAgICAgICAgdGhpcy5zdHlsZXNDb21wb25lbnRzID0gbmV3IFN0eWxlc0NvbXBvbmVudHNCdWlsZGVyKClcblxuICAgICAgICB0aGlzLmNvbW1vbkNvbXBvbmVudHMuZm9yRWFjaCgoY29tcG9uZW50TmFtZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdHlsZXNDb21wb25lbnRzLmFwcGVuZENoaWxkKHRoaXNbY29tcG9uZW50TmFtZV0oKSlcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnN0eWxlc0NvbXBvbmVudHMuYnVpbGQoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50Q2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2UgZnJvbSAnLi4vY29tbW9uL2ludGVyZmFjZXMvY29tcG9uZW50LWNoYW5nZS1vYnNlcnZlci5pbnRlcmZhY2UnO1xuXG5pbXBvcnQgVGl0bGVCdWlsZGVyIGZyb20gJy4uL2NvbW1vbi9tb2RlbHMvVGl0bGVCdWlsZGVyJztcbmltcG9ydCBSYXdIVE1MQ29ucG9uZW50IGZyb20gJy4vUmF3SFRNTENvbXBvbmVudCc7XG5cbmltcG9ydCBDc3NTdHlsZVNoZWV0IGZyb20gJy4uL2Nzcy1zdHlsZXNoZWV0L2Nzcy1zdHlsZXNoZWV0JztcblxuaW1wb3J0IGRlZmluZUVsZW1lbnROYW1lIGZyb20gJy4uL2NvbW1vbi9mdW5jdGlvbnMvZGVmaW5lLWVsZW1lbnQtbmFtZSc7XG5cbmltcG9ydCB7IFRpdGxlVHlwZXNFbnVtIH0gZnJvbSAnLi4vY29tbW9uL2VudW1zL3RpdGxlLnR5cGVzLmVudW0nO1xuaW1wb3J0IHsgQWRkQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2VudW1zL2NvbXBvbmVudHMuZW51bSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpdGxlIGV4dGVuZHMgUmF3SFRNTENvbnBvbmVudCBpbXBsZW1lbnRzIENvbXBvbmVudENoYW5nZU9ic2VydmVySW50ZXJmYWNlIHtcbiAgICBwcml2YXRlIHN0YXRpYyBpdGVyYXRvciA9IDA7XG5cbiAgICBjb25zdHJ1Y3Rvcih0eXBlOiBUaXRsZVR5cGVzRW51bSkge1xuICAgICAgICBjb25zdCBuYW1lID0gZGVmaW5lRWxlbWVudE5hbWUoYHRpdGxlJHtUaXRsZS5pdGVyYXRvcisrfWAsIFJhd0hUTUxDb25wb25lbnQuaW5zdGFuY2VzKTtcblxuICAgICAgICBDc3NTdHlsZVNoZWV0Lmluc2VydFJ1bGUoYC4ke25hbWV9IHtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmVcbiAgICAgICAgfWApO1xuXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBuZXcgVGl0bGVCdWlsZGVyKHR5cGUpXG4gICAgICAgICAgICAuc2V0TmFtZShuYW1lKVxuICAgICAgICAgICAgLnNldElkKG5hbWUpXG4gICAgICAgICAgICAuYWRkQ3NzQ2xhc3NOYW1lKG5hbWUpXG4gICAgICAgICAgICAuc2V0SW5uZXJUZXh0KGBOZXcgVGl0bGUgJHt0eXBlfWApXG4gICAgICAgICAgICAuZHJhZ2dhYmxlKClcbiAgICAgICAgICAgIC5idWlsZCgpO1xuXG4gICAgICAgIHN1cGVyKGVsZW1lbnQpO1xuXG4gICAgICAgIHRoaXMub3BlbkVsZW1lbnRDb25maWdzID0gdGhpcy5vcGVuRWxlbWVudENvbmZpZ3MuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcmFnTGVhdmUgPSB0aGlzLmRyYWdMZWF2ZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuX2RvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5kcmFnU3RhcnRXaXRoVGFyZ2V0SWQpO1xuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIHRoaXMuZHJhZ0xlYXZlKTtcblxuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcGVuRWxlbWVudENvbmZpZ3MpO1xuICAgIH1cblxuICAgIGdldCBkb21FbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZG9tRWxlbWVudDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb3BlbkVsZW1lbnRDb25maWdzKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLnNlbGVjdG9yVmFsdWUoKTtcblxuXG4gICAgICAgIHRoaXMuYnVpbGRFbGVtZW50Q29uZmlncygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb21wb25lbnRTZWxlY3RlZChjb21wb25lbnQpIHtcbiAgICAgICAgaWYoY29tcG9uZW50ID09PSB0aGlzLl9kb21FbGVtZW50WyduYW1lJ10pIHtcbiAgICAgICAgICAgIHRoaXMuYnVpbGRFbGVtZW50Q29uZmlncygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBidWlsZEVsZW1lbnRDb25maWdzKCkge1xuICAgICAgICB0aGlzLmluc2VydENvbXBvbmVudEFmdGVyKFxuICAgICAgICAgICAgQWRkQ29tcG9uZW50LmFkZElubmVyVGV4dENoYW5nZUNvbXBvbmVudCxcbiAgICAgICAgICAgIEFkZENvbXBvbmVudC5hZGRDbGFzc05hbWVEZWZpbml0aW9uQ29tcG9uZW50XG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5idWlsZEVsZW1lbnRzKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFJhd0hUTUxDb25wb25lbnQgZnJvbSAnLi9SYXdIVE1MQ29tcG9uZW50JztcblxuaW1wb3J0IHsgVGl0bGVUeXBlc0VudW0gfSBmcm9tICcuLi9jb21tb24vZW51bXMvdGl0bGUudHlwZXMuZW51bSc7XG5cbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nO1xuaW1wb3J0IElucHV0IGZyb20gJy4vSW5wdXQnO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuL0NvbnRhaW5lcic7XG5pbXBvcnQgTGFiZWwgZnJvbSAnLi9MYWJlbCc7XG5pbXBvcnQgVGl0bGUgZnJvbSAnLi9UaXRsZSc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi9JbWFnZSc7XG5pbXBvcnQgRm9ybSBmcm9tICcuL0Zvcm0nO1xuXG5mdW5jdGlvbiBjb21wb25lbnRzSW5kZXgoaW5kZXgpIHtcbiAgICBjb25zdCBjb21wb25lbnRzSW5kZXggPSB7XG4gICAgICAgICdESVYnOiAoKSA6IFJhd0hUTUxDb25wb25lbnQgPT4gbmV3IENvbnRhaW5lcigpLFxuICAgICAgICAnRk9STSc6ICgpIDogUmF3SFRNTENvbnBvbmVudCA9PiBuZXcgRm9ybSgpLFxuICAgICAgICAnQlVUVE9OJzogKCkgOiBSYXdIVE1MQ29ucG9uZW50ID0+IG5ldyBCdXR0b24oKSxcbiAgICAgICAgJ0lOUFVUJzogKCkgOiBSYXdIVE1MQ29ucG9uZW50ID0+IG5ldyBJbnB1dCgpLFxuICAgICAgICAnTEFCRUwnOiAoKSA6IFJhd0hUTUxDb25wb25lbnQgPT4gbmV3IExhYmVsKCksXG4gICAgICAgICdIMSc6ICgpIDogUmF3SFRNTENvbnBvbmVudCA9PiBuZXcgVGl0bGUoVGl0bGVUeXBlc0VudW0uSDEpLFxuICAgICAgICAnSDInOiAoKSA6IFJhd0hUTUxDb25wb25lbnQgPT4gbmV3IFRpdGxlKFRpdGxlVHlwZXNFbnVtLkgyKSxcbiAgICAgICAgJ0gzJzogKCkgOiBSYXdIVE1MQ29ucG9uZW50ID0+IG5ldyBUaXRsZShUaXRsZVR5cGVzRW51bS5IMyksXG4gICAgICAgICdINCc6ICgpIDogUmF3SFRNTENvbnBvbmVudCA9PiBuZXcgVGl0bGUoVGl0bGVUeXBlc0VudW0uSDQpLFxuICAgICAgICAnSDUnOiAoKSA6IFJhd0hUTUxDb25wb25lbnQgPT4gbmV3IFRpdGxlKFRpdGxlVHlwZXNFbnVtLkg1KSxcbiAgICAgICAgJ0g2JzogKCkgOiBSYXdIVE1MQ29ucG9uZW50ID0+IG5ldyBUaXRsZShUaXRsZVR5cGVzRW51bS5INiksXG4gICAgICAgICdJTUcnOiAoKSA6IFJhd0hUTUxDb25wb25lbnQgPT4gbmV3IEltYWdlKCksXG4gICAgICAgICdkZWZhdWx0JzogKCkgOiB1bmRlZmluZWQgID0+IHVuZGVmaW5lZCxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50c0luZGV4W2luZGV4XSB8fCBjb21wb25lbnRzSW5kZXhbJ2RlZmF1bHQnXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50c0luZGV4O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgaW5pdERyYWdnYWJsZUNvbXBvbmVudHMgZnJvbSAnLi9jb21wb25lbnRzL2NvbXBvbmVudHMtY29udGFpbmVyL2luaXQtZHJhZ2dhYmxlLWNvbXBvbmVudHMnO1xuaW1wb3J0IENzc1N0eWxlU2hlZXQgZnJvbSAnLi9jb21wb25lbnRzL2Nzcy1zdHlsZXNoZWV0L2Nzcy1zdHlsZXNoZWV0JztcbmltcG9ydCBJbml0QXBwQ29udGFpbmVyIGZyb20gJy4vY29tcG9uZW50cy9hcHAtY29udGFpbmVyL2luaXQtYXBwLWNvbnRhaW5lcic7XG5cbmluaXREcmFnZ2FibGVDb21wb25lbnRzKCk7XG5uZXcgSW5pdEFwcENvbnRhaW5lcigpO1xuQ3NzU3R5bGVTaGVldC5pbml0KCk7XG5cbi8vIFRPRE86IGVsIG1ldG9kbyBpbml0IGRlYmVyaWEgYnVzY2FyIGVsIGNzcyBkZWwgbG9jYWxzdG9yYWdlLCBkZWJlcmlhbW9zIGhhY2VyIGxvIG1pc21vIGNvbiBlbCBIVE1MXG4vLyBEZWJlcmlhbW9zIHZlciBjb21vIGFsbWFjZW5hciB5IGRlc2hhY2VyIGNhbWJpb3MuLi4uXG5cbi8vIFRPRE86IGFjb21vZGFyIGVzdHJ1Y3R1cmFzIGNvbiBwcmV0dGllciB5IHRzbGludGVyLiBTYWx0YXIgbGluZWEgY3VhbmRvIG11eSBsYXJnYS5cblxuLy8gVE9ETzogaGF5IHF1ZSBtZXRlcmxlIGRyYWcgZW50ZXIgYWwgYXBwLWNvbnRhaW5lci1maXhlZCBwYXJhIHF1ZSBsZSBzYXF1ZSBlbCBiYWNrZ3JvdW5kIGNvbG9yIGFsIGFwcC1jb250YWluZXIuLi5cbi8vIG8gdmVyIHF1ZSBwYXNhIGNvbiBlbCBkcmFnIGxlYXZlXG5cbi8vIFRPRE86IGluc2VydGFyIHJ1bGVzIHBhcmEgZWwgbWVkaWEgcXVlcnkgOiBodHRwczovL2Rhdmlkd2Fsc2gubmFtZS9hZGQtcnVsZXMtc3R5bGVzaGVldHNcbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9BdC1ydWxlXG5cbi8vIFRPRE86IHByb2JhciBleHBvcnRhciBjc3MgeSBodG1sIHkgdmVyIGNvbW8gcXVlZGEgbGEgcGFnaW5hIGVuIGxhIHJlYWxpZGFkICovXG4vLyBUT0RPOiBoYWNlciBhbmFsaXNpcyBkZSBxdWUgZGViZXJpYW1vcyBleHBvcnRhciByZWFsbWVudGUgZGVsIGh0bWwgKi9cblxuLy8gVE9ETzogYXF1aSBmYWx0YSBsYSBhY2Npb24gZGUgZHVwbGljYXIgdW4gY29tcG9uZW50ZSwgZXMgZGVjaXIsIGRlIHVuIGNvbXBvbmVudGUgZXhpc3RlbnRlLCBkdXBsaWNhciBsYSBjb25maWcuLi5cbi8vIHNpLCBlcyBuZWNlc2FyaW8sIHBvcnF1ZSBlcyBtdWNobyBtYXMgZmFjaWwgcXVlIGFzaWduYXJsZSBsYSBjbGFzZSBkZSBvdHJvIGNvbXBvbmVudGUuLi5cbi8vIHZlciBjb21vIGR1cGxpY2Ftb3MgbGFzIGNsYXNlcy4uLiBzaSBsZSBhc2lnbmFtb3MgbGFzIGNsYXNlcyBkZWwgb3RybyBjb21wb25lbnRlPz8/LCBjb21vIGhhY2Vtb3MgY29uIHN1IGNsYXNlPz8/XG4vLyBzaSBkdXBsaWNhbW9zLCBubyBjcmVhbW9zIGNsYXNlIHByb3BpYSwgc29sbyBhc2lnbmFtb3MgbGFzIGNsYXNlcyBkZWwgb3RybyBjb21wb25lbnRlLi4uXG5cbi8vIEFncmVnYXIgZWwgZWxlbWVudG8gaW1nIHkgYSBzdSB2ZXosIGFncmVnYXIgaW1hZ2VuZXMgYWwgYmFja2dyb3VuZC4uLlxuXG4vLyBUT0RPOiBmYWx0YSB0b2RvIGxvIHF1ZSBlcyBwb3NpdGlvbi4uLiBBYnNvbHV0ZSwgcmVsYXRpdmUsIGV0Yy4uLiBObyByZWN1ZXJkbyBiaWVuIGNvbW8gZXMgZXNvLi4uXG4vLyBpbmNsdXNvLCBlbCB6IGluZGV4LCBxdWUgcG9kcmlhIGVzdGFyIGVuIGVsIG1pc21vIGNvbXBvbmVudGUuXG5cblxuLy8gVE9ETzogdmVyIGZvcm1hIGRlIHJlbW92ZXIgZWwgYm9yZGUgb3JpZ2luYWwgZGVsIGlucHV0LiBObyBlcyBsYSBtaXNtYSBwcm9waWVkYWQgcXVlIGVsIGJvcmRlci4uLlxuLy8gVE9ETzogZWwgYm9yZGVyYm94IGRlbCBpbnB1dCB2aWVuZSBjb21vIGFkdmFuY2VkLi4uIFZlciBzaSB0ZW5lbW9zIHF1ZSBoYWNlcmxlIGFsZ29cblxuLy8gVE9ETzogY3VhbmRvIGNyZW8gdW4gbm9tYnJlIGZ1dHVybywgeSBqdXN0byBjcmVvIHVuIGVsZW1lbnRvIGNvbiBlc2Ugbm9tYnJlIGZ1dHVybywgdGlyYSBlcnJvci4uLlxuLy8gcG9yIGVzbyB5byBsZSBwYXNhYmEgZWwgaXRlcmF0b3IuLi4gdmVyIGNvbW8gc29sdWNpb25hci4uLlxuXG4vLyBUT0RPOiBjb24gZWwgaWQgaGFicmlhIHF1ZSByZWVtcGxhemFyIHRvZG9zIGxvcyBjYXJhY3RlcmVzIGVzcGVjaWFsZXMgcG9yIGd1aW9uZXMgbyBhbGdvIGFzaS4uLlxuXG4vLyBUT0RPOiBmYWx0YSBwcm9waWVkYWQgc2Nyb2xsYWJsZSBlbiBkaXZcblxuLy8gVE9ETzogY3VhbHF1aWVyIGVsZW1lbnRvIGRlYmUgcG9kZXIgbW9kaWZpY2FyIGVsIGRpc3BsYXkgc2V0dGluZ3NcblxuLy8gVE9ETzogZmFsdGEgbGEgcHJvcGllZGFkIGJhY2tncm91bmQtaW1hZ2UgZW4gZWwgYmFja2dyb3VuZC1jb2xvclxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuLy8gVE9ETzogZW4gZWwgU2VsZWN0IEl0ZW0gbm8gc2UgZW5jdWVudHJhIGVsIGFwcC1jb250YWluZXIuIEVzIHF1ZSBwYXJhIHF1ZSBlc3RvIGZ1bmNpb25lLCBlbCBhcHAtY29udGFpbmVyIGRlYmVyaWEgc2VyIGNyZWFkbyBjb21vIHVuIG5ldyBDb250YWluZXIoKTtcblxuLy8gVE9ETzogZmFsdGEgdW4gYm90b24gZGUgZGVsZXRlIGluaXRpYWwgcHJvcGVydGllcywgYXNpIHNhY2Ftb3MgbG9zIGJvcmRlcyB5IGVzbyBhIHVuIGRpdiwgcG9yIGVqZW1wbG8uLi5cblxuLy8gVE9ETzogdmVyIHBvcnF1ZSBhIHVuIGJvdG9uIGN1YW5kbyBsZSBtZXRvIHVuIERJViBkZW50cm8sIHRvbWEgZWwgc3R5bGUgZGVsIERJVi5cblxuLy8gVE9ETzogYWdyZWdhciBIRUFERVIsIEJPRFksIEZPT1RFUiwgQVNJREUsIHZlciBjdWFsZXMgbWFzIHNlIG5lY2VzaXRhblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9