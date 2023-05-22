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
        if (targetElement.nodeName !== 'DIV') {
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
// TODO: falta el delete class definetly. Es decir, eliminar una clase del CSS.
// Esto deberia eliminarla de todos los componentes que la utilizan...
// TODO: mejorar estilos de los botones, input, etc...
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
        // TODO: falta terminar este metodo... No se si sera tan facil....
        // TODO: quizas aqui deberiamos mostrar todos los atributos que tiene este metodo
        // TODO: los valores de la ventana no se van actualizando a medida que se agregan cosas a esa clase, quizas necesitamos un observer, que seria un verdadero quilombassssoooooo...
        console.log(this.rawClassTextEditor.getValue());
        return;
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
    function GenericPrimaryInputComponent(domElement, style, label) {
        this.domElement = domElement;
        this.label = label;
        this.style = style;
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
            this.domElement[this.style] = this.propertyValueInput.value;
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
/* harmony export */   "AlignFlexContentEnum": () => (/* binding */ AlignFlexContentEnum)
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
/* harmony export */   "AlignFlexItemsEnum": () => (/* binding */ AlignFlexItemsEnum)
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
/* harmony export */   "AlignFlexSelfEnum": () => (/* binding */ AlignFlexSelfEnum)
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
/* harmony export */   "AlignGridContentEnum": () => (/* binding */ AlignGridContentEnum)
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
/* harmony export */   "AlignGridItemsEnum": () => (/* binding */ AlignGridItemsEnum)
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
/* harmony export */   "AlignGridSelfEnum": () => (/* binding */ AlignGridSelfEnum)
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
/* harmony export */   "BorderStyleEnum": () => (/* binding */ BorderStyleEnum)
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
/* harmony export */   "DisplayTypesEnum": () => (/* binding */ DisplayTypesEnum)
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
/* harmony export */   "EventTypeEnum": () => (/* binding */ EventTypeEnum)
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
/* harmony export */   "FlexDirectionEnum": () => (/* binding */ FlexDirectionEnum)
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
/* harmony export */   "FlexWrapEnum": () => (/* binding */ FlexWrapEnum)
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
/* harmony export */   "FontStylesEnum": () => (/* binding */ FontStylesEnum)
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
/* harmony export */   "FontVariantEnum": () => (/* binding */ FontVariantEnum)
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
/* harmony export */   "FontWeightEnum": () => (/* binding */ FontWeightEnum)
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
/* harmony export */   "FontsEnum": () => (/* binding */ FontsEnum)
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
/* harmony export */   "GeneralPseudoclassEnum": () => (/* binding */ GeneralPseudoclassEnum)
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
/* harmony export */   "GridAutoFlowEnum": () => (/* binding */ GridAutoFlowEnum)
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
/* harmony export */   "InputTypeEnum": () => (/* binding */ InputTypeEnum)
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
/* harmony export */   "JustifyFlexContentEnum": () => (/* binding */ JustifyFlexContentEnum)
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
/* harmony export */   "JustifyGridContentEnum": () => (/* binding */ JustifyGridContentEnum)
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
/* harmony export */   "JustifyGridItemsEnum": () => (/* binding */ JustifyGridItemsEnum)
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
/* harmony export */   "JustifyGridSelfEnum": () => (/* binding */ JustifyGridSelfEnum)
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
/* harmony export */   "StyleNameEnum": () => (/* binding */ StyleNameEnum)
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
/* harmony export */   "TitleTypesEnum": () => (/* binding */ TitleTypesEnum)
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
/* harmony export */   "UnitsEnum": () => (/* binding */ UnitsEnum)
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
        var foundColor = colorValues.find(function (col) { return col.name === color; });
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
        var cssFileOutput = '';
        Object.keys(CssStyleSheet.styleSheet.cssRules).forEach(function (key) {
            cssFileOutput += "".concat(CssStyleSheet.styleSheet.cssRules[parseInt(key)].cssText, "\n\n");
        });
        console.log(cssFileOutput);
        // TODO: ver si hay que eliminar algo del app-container... algun atributo...
    };
    CssStyleSheet.getRule = function (id) {
        var index = this.getRuleIndex(id);
        return CssStyleSheet.styleSheet.cssRules[index];
    };
    CssStyleSheet.getRuleIndex = function (id) {
        var index = parseInt(Object.keys(CssStyleSheet.styleSheet.cssRules).find(function (key) {
            var className = CssStyleSheet.styleSheet.cssRules[parseInt(key)]['selectorText'];
            return className === ".".concat(id);
        }));
        if (isNaN(index)) {
            return -1;
        }
        return index;
    };
    CssStyleSheet.getRules = function (id) {
        var indexes = this.getRulesIndexes(id);
        return indexes.map(function (index) { return CssStyleSheet.styleSheet.cssRules[index]; });
    };
    CssStyleSheet.getAllRules = function () {
        return Object.values(CssStyleSheet.styleSheet.cssRules);
    };
    CssStyleSheet.getRulesIndexes = function (id) {
        return Object.keys(CssStyleSheet.styleSheet.cssRules)
            .filter(function (key) {
            var className = CssStyleSheet.styleSheet.cssRules[parseInt(key)]['selectorText'];
            return className === ".".concat(id) || className.includes(".".concat(id, ":"));
        })
            .map(function (index) { return parseInt(index); });
    };
    CssStyleSheet.getRuleStyles = function (id) {
        var index = this.getRuleIndex(id);
        var styles = CssStyleSheet.styleSheet.cssRules[index];
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
            CssStyleSheet.styleSheet.deleteRule(index);
        }
    };
    CssStyleSheet.removeRuleByIndex = function (index) {
        CssStyleSheet.styleSheet.deleteRule(index);
    };
    CssStyleSheet.insertRule = function (rule) {
        CssStyleSheet.styleSheet.insertRule(rule);
    };
    CssStyleSheet.changeRuleName = function (currentRule, newRuleName) {
        var currentRuleIndex = this.getRuleIndex(currentRule);
        var newRule = CssStyleSheet.styleSheet.cssRules[currentRuleIndex].cssText.replace(currentRule, newRuleName);
        this.removeRuleByIndex(currentRuleIndex);
        this.insertRule(newRule);
    };
    CssStyleSheet.duplicateRule = function (ruleToDuplicate, newName) {
        var ruleToDuplicateIndex = this.getRuleIndex(ruleToDuplicate);
        var newRule = CssStyleSheet.styleSheet.cssRules[ruleToDuplicateIndex].cssText.replace(ruleToDuplicate, newName);
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
        this.insertComponentAfter('addInnerTextChangeComponent', 'addClassNameDefinitionComponent');
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
        this.insertComponentBefore('addDisplayAsParentComponent', 'addDisplayAsChildComponent');
        this.buildElements();
    };
    Container.iterator = 0;
    return Container;
}(_RawHTMLComponent__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);


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
        this.insertComponentAfter('addUrlInputComponent', 'addClassNameDefinitionComponent');
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
        this.insertComponentAfter('addInputTypeSelectorComponent', 'addClassNameDefinitionComponent');
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
        this.insertComponentAfter('addInnerTextChangeComponent', 'addClassNameDefinitionComponent');
        // this.insertComponentBefore('addDisplayAsParentComponent', 'addDisplayAsChildComponent');
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






















var RawHTMLConponent = /** @class */ (function () {
    function RawHTMLConponent(domElement) {
        this.itemsSelector = document.querySelector('#select-item');
        this.optionElement = document.createElement('option');
        this.commonComponents = [
            'addIdDefinitionComponent',
            'addClassNameDefinitionComponent',
            'addMarginStyleComponent',
            'addPaddingStyleComponent',
            'addSizeComponents',
            'addFontComponens',
            'addBackgroundSettingsComponent',
            'addBorderSettingsComponent',
            'addBoxShadowComponent',
            'addDisplayAsChildComponent',
            'addActionsComponents',
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
        return new _common_components_generic_primary_input_component__WEBPACK_IMPORTED_MODULE_10__["default"](this._domElement, 'innerText', 'Inner Text').component;
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
        this.insertComponentAfter('addInnerTextChangeComponent', 'addClassNameDefinitionComponent');
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







function componentsIndex(index) {
    var componentsIndex = {
        'BUTTON': function () { return new _Button__WEBPACK_IMPORTED_MODULE_1__["default"](); },
        'INPUT': function () { return new _Input__WEBPACK_IMPORTED_MODULE_2__["default"](); },
        'DIV': function () { return new _Container__WEBPACK_IMPORTED_MODULE_3__["default"](); },
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
// TODO: agregar clase a mano mediante un textarea
// TODO: en el Select Item no se encuentra el app-container. Es que para que esto funcione, el app-container deberia ser creado como un new Container();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUUsV0FBVyxFQUFFO0lBQ3JDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO0lBQ3RDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0lBQ3JDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO0lBQ2pDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7SUFDMUMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7SUFDcEMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUU7SUFDbkMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7SUFDaEMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7SUFDcEMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7SUFDcEMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUU7SUFDekMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7SUFDcEMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7SUFDcEMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7SUFDckMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7SUFDckMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUU7SUFDdkMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTtJQUMxQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTtJQUN0QyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTtJQUN0QyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtJQUNuQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTtJQUN0QyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRTtJQUN4QyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRTtJQUN6QyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRTtJQUN6QyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRTtJQUN6QyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRTtJQUN6QyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTtJQUN0QyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtJQUNwQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRTtJQUN2QyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtJQUNuQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtJQUNuQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTtJQUN0QyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtJQUNyQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRTtJQUN2QyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRTtJQUN2QyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtJQUNuQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtJQUNyQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTtJQUN0QyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtJQUNoQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtJQUNyQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtJQUNoQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtJQUNoQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtJQUNqQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRTtJQUN2QyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtJQUNwQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtJQUNuQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtJQUNyQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTtJQUNsQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtJQUNqQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtJQUNqQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtJQUNwQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRTtJQUN6QyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtJQUNyQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVB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QVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO0lBQ2hDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO0lBQ25DLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO0lBQ2pDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0lBQ3JDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO0lBQ2xDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0lBQ3JDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO0lBQ2xDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFO0lBQ3pDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0lBQ3JDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFO0lBQ3pDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFO0lBQ3pDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO0lBQ3RDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0lBQ3JDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO0lBQ2hDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO0lBQ2hDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO0lBQ2hDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO0lBQ3RDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO0lBQ2xDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFO0lBQ3pDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO0lBQy9CLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0lBQ3JDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0lBQ3JDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO0lBQ3ZDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO0lBQ2xDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO0lBQ3RDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO0lBQ3BDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO0lBQ3BDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO0lBQ2xDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO0lBQ2xDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO0lBQ25DLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0lBQ3JDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0lBQ3JDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0lBQ3JDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO0lBQ2hDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO0lBQ3ZDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVB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cEUsbUVBQW1FO0FBRW5FLGtEQUFrRDtBQUVsRCx3SkFBd0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvYXBwLWNvbnRhaW5lci9pbml0LWFwcC1jb250YWluZXIudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9jb21wb25lbnRzL2JhY2tncm91bmQuY29tcG9uZW50LnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vY29tcG9uZW50cy9ib3JkZXIuY29tcG9uZW50LnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vY29tcG9uZW50cy9ib3gtc2hhZG93LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2NvbXBvbmVudHMvY2xhc3MtbWFuYWdlbWVudC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9jb21wb25lbnRzL2Rpc3BsYXktYXMtY2hpbGQuY29tcG9uZW50LnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vY29tcG9uZW50cy9kaXNwbGF5LWFzLXBhcmVudC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9jb21wb25lbnRzL2ZvbnQuY29tcG9uZW50cy50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2NvbXBvbmVudHMvZ2VuZXJpYy1jc3MtcHJvcGVydHktbXV0YXRvci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9jb21wb25lbnRzL2dlbmVyaWMtcHJpbWFyeS1pbnB1dC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9jb21wb25lbnRzL2dlbmVyaWMtcHJpbWFyeS1zZWxlY3Rvci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9jb21wb25lbnRzL2lkLWRlZmluaXRpb24uY29tcG9uZW50LnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vY29tcG9uZW50cy9pbnB1dC13aXRoLXVuaXRzLXNlbGVjdG9yLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2NvbXBvbmVudHMvbWFyZ2luLW9yLXBhZGRpbmcuY29tcG9uZW50LnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vY29tcG9uZW50cy9zaXplcy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9jb21wb25lbnRzL3VybC1kZWZpbml0aW9uLWNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2NvbnN0YW50cy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9lbnVtcy9hbGlnbi1mbGV4LWNvbnRlbnQuZW51bS50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2VudW1zL2FsaWduLWZsZXgtaXRlbXMuZW51bS50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2VudW1zL2FsaWduLWZsZXgtc2VsZi5lbnVtLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vZW51bXMvYWxpZ24tZ3JpZC1jb250ZW50LmVudW0udHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9lbnVtcy9hbGlnbi1ncmlkLWl0ZW1zLmVudW0udHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9lbnVtcy9hbGlnbi1ncmlkLXNlbGYuZW51bS50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2VudW1zL2JvcmRlci1zdHlsZS5lbnVtLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vZW51bXMvZGlzcGxheS10eXBlcy5lbnVtLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vZW51bXMvZXZlbnQtdHlwZS5lbnVtLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vZW51bXMvZmxleC1kaXJlY3Rpb24uZW51bS50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2VudW1zL2ZsZXgtd3JhcC5lbnVtLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vZW51bXMvZm9udC1zdHlsZXMuZW51bS50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2VudW1zL2ZvbnQtdmFyaWFudC5lbnVtLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vZW51bXMvZm9udC13ZWlnaHQuZW51bS50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2VudW1zL2ZvbnRzLmVudW0udHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9lbnVtcy9nZW5lcmFsLXBzZXVkb2NsYXNzLmVudW0udHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9lbnVtcy9ncmlkLWF1dG8tZmxvdy5lbnVtLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vZW51bXMvaW5wdXQtdHlwZS5lbnVtLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vZW51bXMvanVzdGlmeS1mbGV4LWNvbnRlbnQuZW51bS50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2VudW1zL2p1c3RpZnktZ3JpZC1jb250ZW50LmVudW0udHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9lbnVtcy9qdXN0aWZ5LWdyaWQtaXRlbXMuZW51bS50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2VudW1zL2p1c3RpZnktZ3JpZC1zZWxmLmVudW0udHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9lbnVtcy9zdHlsZS1uYW1lLmVudW0udHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9lbnVtcy90aXRsZS50eXBlcy5lbnVtLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vZW51bXMvdW5pdHMuZW51bS50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2Z1bmN0aW9ucy9kZWZpbmUtZWxlbWVudC1pZC50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2Z1bmN0aW9ucy9kZWZpbmUtZWxlbWVudC1uYW1lLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vZnVuY3Rpb25zL2RyYWctc3RhcnQtd2l0aC10YXJnZXQtbm9kZV9uYW1lLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vZnVuY3Rpb25zL2ZpcnN0LWxldHRlcnMtY2FwaXRhbGl6ZWQudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9mdW5jdGlvbnMvZ2V0LWNzcy11bml0LnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vZnVuY3Rpb25zL3JnYi10by1oZXgudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9tb2RlbHMvQnV0dG9uQnVpbGRlci50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL21vZGVscy9Db250YWluZXJCdWlsZGVyLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vbW9kZWxzL0ltYWdlQnVpbGRlci50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL21vZGVscy9JbnB1dEJ1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9tb2RlbHMvTGFiZWxCdWlsZGVyLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vbW9kZWxzL1Jhd0J1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9tb2RlbHMvU2VsZWN0b3JGcm9tQXJyYXlCdWlsZGVyLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vbW9kZWxzL1NlbGVjdG9yRnJvbUVudW1CdWlsZGVyLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vbW9kZWxzL1N0eWxlc0NvbXBvbmVudHNCdWlsZGVyLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vbW9kZWxzL1RleHRhcmVhQnVpbGRlci50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL21vZGVscy9UaXRsZUJ1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9wdWJsaXNoZXJzL0NsYXNzQ2hhbmdlUHVibGlzaGVyLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vcHVibGlzaGVycy9Db21wb25lbnRDaGFuZ2VQdWJsaXNoZXIudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbXBvbmVudHMtY29udGFpbmVyL2luaXQtZHJhZ2dhYmxlLWNvbXBvbmVudHMudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2Nzcy1zdHlsZXNoZWV0L2Nzcy1zdHlsZXNoZWV0LnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9odG1sLWNvbXBvbmVudHMvQnV0dG9uLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9odG1sLWNvbXBvbmVudHMvQ29udGFpbmVyLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9odG1sLWNvbXBvbmVudHMvSW1hZ2UudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2h0bWwtY29tcG9uZW50cy9JbnB1dC50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvaHRtbC1jb21wb25lbnRzL0xhYmVsLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9odG1sLWNvbXBvbmVudHMvUmF3SFRNTENvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvaHRtbC1jb21wb25lbnRzL1RpdGxlLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9odG1sLWNvbXBvbmVudHMvY29tcG9uZW50c0luZGV4LnRzIiwid2VicGFjazovL2xheW91dC1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xheW91dC1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEaXNwbGF5Q29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnRzL2Rpc3BsYXktYXMtcGFyZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgTWFyZ2luT3JQYWRkaW5nQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnRzL21hcmdpbi1vci1wYWRkaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgU3R5bGVzQ29tcG9uZW50c0J1aWxkZXIgZnJvbSAnLi4vY29tbW9uL21vZGVscy9TdHlsZXNDb21wb25lbnRzQnVpbGRlcic7XG5pbXBvcnQgUmF3SFRNTENvbnBvbmVudCBmcm9tICcuLi9odG1sLWNvbXBvbmVudHMvUmF3SFRNTENvbXBvbmVudCc7XG5pbXBvcnQgQmFja2dyb3VuZENvbXBvbmVudCBmcm9tICcuLi9jb21tb24vY29tcG9uZW50cy9iYWNrZ3JvdW5kLmNvbXBvbmVudCc7XG5pbXBvcnQgY29tcG9uZW50c0luZGV4IGZyb20gJy4uL2h0bWwtY29tcG9uZW50cy9jb21wb25lbnRzSW5kZXgnO1xuaW1wb3J0IGNvbnN0YW50cyBmcm9tICcuLi9jb21tb24vY29uc3RhbnRzL2NvbnN0YW50cyc7XG5cbmltcG9ydCB7IFN0eWxlTmFtZUVudW0gfSBmcm9tICcuLi9jb21tb24vZW51bXMvc3R5bGUtbmFtZS5lbnVtJztcbmltcG9ydCBDc3NTdHlsZVNoZWV0IGZyb20gJy4uL2Nzcy1zdHlsZXNoZWV0L2Nzcy1zdHlsZXNoZWV0JztcblxuaW1wb3J0IENvbXBvbmVudENoYW5nZVB1Ymxpc2hlciBmcm9tICcuLi9jb21tb24vcHVibGlzaGVycy9Db21wb25lbnRDaGFuZ2VQdWJsaXNoZXInO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluaXRBcHBDb250YWluZXIge1xuICAgIHByaXZhdGUgYXBwQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcbiAgICBwcml2YXRlIGFwcENvbnRhaW5lckNsYXNzTmFtZSA9ICdib2R5JztcbiAgICBwcml2YXRlIGFwcENvbnRhaW5lckhlaWdodElucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHByaXZhdGUgYXBwQ29udGFpbmVyV2lkdGhJbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgICBwcm90ZWN0ZWQgc3R5bGVzQ29tcG9uZW50czogSFRNTERpdkVsZW1lbnQ7XG5cbiAgICBwcm90ZWN0ZWQgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIGZhdGhlckJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xuXG4gICAgcHJpdmF0ZSBjb21wb25lbnRTZWxlY3RvcjogSFRNTFNlbGVjdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0LWl0ZW0nKTtcbiAgICBwcml2YXRlIGNvbXBvbmVudENoYW5nZVB1Ymxpc2hlcjogQ29tcG9uZW50Q2hhbmdlUHVibGlzaGVyO1xuXG4gICAgcHJpdmF0ZSBwcmludEh0bWxCdXR0b246IEhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW50LWh0bWwtZmlsZScpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYXBwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcC1jb250YWluZXInKTtcblxuICAgICAgICB0aGlzLmFwcENvbnRhaW5lckhlaWdodElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VwZGF0ZS1oZWlnaHQnKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VBcHBDb250YWluZXJIZWlnaHQgPSB0aGlzLmNoYW5nZUFwcENvbnRhaW5lckhlaWdodC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFwcENvbnRhaW5lckhlaWdodElucHV0LnZhbHVlID0gYCR7cGFyc2VJbnQodGhpcy5nZXRDdXJyZW50SGVpZ2h0KCkpfWA7XG4gICAgICAgIHRoaXMuYXBwQ29udGFpbmVySGVpZ2h0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLmNoYW5nZUFwcENvbnRhaW5lckhlaWdodCk7XG5cbiAgICAgICAgdGhpcy5hcHBDb250YWluZXJXaWR0aElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VwZGF0ZS13aWR0aCcpO1xuICAgICAgICB0aGlzLmNoYW5nZUFwcENvbnRhaW5lcldpZHRoID0gdGhpcy5jaGFuZ2VBcHBDb250YWluZXJXaWR0aC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFwcENvbnRhaW5lcldpZHRoSW5wdXQudmFsdWUgPSBgJHtwYXJzZUludCh0aGlzLmdldEN1cnJlbnRXaWR0aCgpKX1gO1xuICAgICAgICB0aGlzLmFwcENvbnRhaW5lcldpZHRoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLmNoYW5nZUFwcENvbnRhaW5lcldpZHRoKTtcblxuICAgICAgICB0aGlzLmRyYWdFbnRlciA9IHRoaXMuZHJhZ0VudGVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhZ092ZXIgPSB0aGlzLmRyYWdPdmVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhZ0xlYXZlID0gdGhpcy5kcmFnTGVhdmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcm9wID0gdGhpcy5kcm9wLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5vcGVuRWxlbWVudENvbmZpZ3MgPSB0aGlzLm9wZW5FbGVtZW50Q29uZmlncy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNoYW5nZVNpemUgPSB0aGlzLmNoYW5nZVNpemUuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmFwcENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCB0aGlzLmRyYWdFbnRlcik7XG4gICAgICAgIHRoaXMuYXBwQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5kcmFnT3Zlcik7XG4gICAgICAgIHRoaXMuYXBwQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIHRoaXMuZHJhZ0xlYXZlKTtcbiAgICAgICAgdGhpcy5hcHBDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuZHJvcCk7XG5cbiAgICAgICAgdGhpcy5hcHBDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9wZW5FbGVtZW50Q29uZmlncyk7XG5cbiAgICAgICAgdGhpcy5vblJlc2l6ZSh0aGlzLmFwcENvbnRhaW5lciwgdGhpcy5jaGFuZ2VTaXplKTtcblxuICAgICAgICB0aGlzLnNlbmRDb21wb25lbnROYW1lID0gdGhpcy5zZW5kQ29tcG9uZW50TmFtZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudENoYW5nZVB1Ymxpc2hlciA9IG5ldyBDb21wb25lbnRDaGFuZ2VQdWJsaXNoZXIoKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnNlbmRDb21wb25lbnROYW1lKTtcblxuICAgICAgICB0aGlzLnByaW50SHRtbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucHJpbnRIdG1sRmlsZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkcmFnRW50ZXIoZXZlbnQ6IERyYWdFdmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9IENzc1N0eWxlU2hlZXQuZ2V0UnVsZVN0eWxlcyh0aGlzLmFwcENvbnRhaW5lckNsYXNzTmFtZSlbJ2JhY2tncm91bmQtY29sb3InXTtcbiAgICAgICAgdGhpcy5hcHBDb250YWluZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29uc3RhbnRzLklOVkVSVEVEX0JBQ0tHUk9VTkRfQ09MT1I7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkcmFnT3ZlcihldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkcmFnTGVhdmUoKSB7XG4gICAgICAgIHRoaXMuYXBwQ29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcnO1xuICAgICAgICB0aGlzLmFwcENvbnRhaW5lci5hdHRyaWJ1dGVzLnJlbW92ZU5hbWVkSXRlbSgnc3R5bGUnKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRyb3AoZXZlbnQ6IERyYWdFdmVudCkge1xuICAgICAgICB0aGlzLmFwcENvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJztcblxuICAgICAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICAgIGlmICh0YXJnZXRFbGVtZW50Lm5vZGVOYW1lICE9PSAnRElWJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZWxlbWVudFR5cGUgPSBldmVudC5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgndGV4dC9wbGFpbicpO1xuXG4gICAgICAgIGNvbnN0IG5ld0RvbUVsZW1lbnQ6IFJhd0hUTUxDb25wb25lbnQgfCB1bmRlZmluZWQgPSBjb21wb25lbnRzSW5kZXgoZWxlbWVudFR5cGUpKCk7XG5cbiAgICAgICAgY29uc3QgZWxlbWVudEV4aXN0cyA9IG5ld0RvbUVsZW1lbnQgPyBmYWxzZSA6IHRydWU7XG5cbiAgICAgICAgaWYgKGVsZW1lbnRFeGlzdHMpIHtcbiAgICAgICAgICAgIGNvbnN0IGRyYWdnYWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRUeXBlKTtcbiAgICAgICAgICAgIHRhcmdldEVsZW1lbnQuYXBwZW5kQ2hpbGQoZHJhZ2dhYmxlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50Q2hhbmdlUHVibGlzaGVyLmF0dGFjaChuZXdEb21FbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRhcmdldEVsZW1lbnQuYXBwZW5kQ2hpbGQobmV3RG9tRWxlbWVudC5kb21FbGVtZW50KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9wZW5FbGVtZW50Q29uZmlncyhldmVudDogTW91c2VFdmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICB0aGlzLnN0eWxlc0NvbXBvbmVudHMgPSBuZXcgU3R5bGVzQ29tcG9uZW50c0J1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBNYXJnaW5PclBhZGRpbmdDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBDb250YWluZXIsXG4gICAgICAgICAgICAgICAgU3R5bGVOYW1lRW51bS5tYXJnaW4pLmNvbXBvbmVudClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTWFyZ2luT3JQYWRkaW5nQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgIHRoaXMuYXBwQ29udGFpbmVyLFxuICAgICAgICAgICAgICAgIFN0eWxlTmFtZUVudW0ucGFkZGluZykuY29tcG9uZW50KVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBCYWNrZ3JvdW5kQ29tcG9uZW50KHRoaXMuYXBwQ29udGFpbmVyKS5jb21wb25lbnQpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IERpc3BsYXlDb21wb25lbnQodGhpcy5hcHBDb250YWluZXIpLmNvbXBvbmVudClcbiAgICAgICAgICAgIC5idWlsZCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25SZXNpemUoZG9tX2VsZW0sIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IHJlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKCgpID0+IGNhbGxiYWNrKCkpO1xuICAgICAgICByZXNpemVPYnNlcnZlci5vYnNlcnZlKGRvbV9lbGVtKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNoYW5nZVNpemUoKSB7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuYXBwQ29udGFpbmVyLnN0eWxlWydoZWlnaHQnXTtcbiAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLmFwcENvbnRhaW5lci5zdHlsZVsnd2lkdGgnXTtcblxuICAgICAgICBpZiAoaGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLmFwcENvbnRhaW5lckhlaWdodElucHV0LnZhbHVlID0gYCR7cGFyc2VJbnQoaGVpZ2h0KX1gO1xuICAgICAgICAgICAgQ3NzU3R5bGVTaGVldC5nZXRSdWxlU3R5bGVzKHRoaXMuYXBwQ29udGFpbmVyQ2xhc3NOYW1lKVsnaGVpZ2h0J10gPSBoZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLmFwcENvbnRhaW5lci5zdHlsZVsnaGVpZ2h0J10gPSAnJztcbiAgICAgICAgfVxuICAgICAgICBpZiAod2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMuYXBwQ29udGFpbmVyV2lkdGhJbnB1dC52YWx1ZSA9IGAke3BhcnNlSW50KHdpZHRoKX1gO1xuICAgICAgICAgICAgQ3NzU3R5bGVTaGVldC5nZXRSdWxlU3R5bGVzKHRoaXMuYXBwQ29udGFpbmVyQ2xhc3NOYW1lKVsnd2lkdGgnXSA9IHdpZHRoO1xuICAgICAgICAgICAgdGhpcy5hcHBDb250YWluZXIuc3R5bGVbJ3dpZHRoJ10gPSAnJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgY2hhbmdlQXBwQ29udGFpbmVySGVpZ2h0KCkge1xuICAgICAgICBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXModGhpcy5hcHBDb250YWluZXJDbGFzc05hbWUpWydoZWlnaHQnXSA9IGAke3RoaXMuYXBwQ29udGFpbmVySGVpZ2h0SW5wdXQudmFsdWV9cHhgXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjaGFuZ2VBcHBDb250YWluZXJXaWR0aCgpIHtcbiAgICAgICAgQ3NzU3R5bGVTaGVldC5nZXRSdWxlU3R5bGVzKHRoaXMuYXBwQ29udGFpbmVyQ2xhc3NOYW1lKVsnd2lkdGgnXSA9IGAke3RoaXMuYXBwQ29udGFpbmVyV2lkdGhJbnB1dC52YWx1ZX1weGBcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEN1cnJlbnRIZWlnaHQoKSB7XG4gICAgICAgIHJldHVybiBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXModGhpcy5hcHBDb250YWluZXJDbGFzc05hbWUpWydoZWlnaHQnXVxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0Q3VycmVudFdpZHRoKCkge1xuICAgICAgICByZXR1cm4gQ3NzU3R5bGVTaGVldC5nZXRSdWxlU3R5bGVzKHRoaXMuYXBwQ29udGFpbmVyQ2xhc3NOYW1lKVsnd2lkdGgnXVxuICAgIH1cblxuICAgIHByaXZhdGUgcHJpbnRIdG1sRmlsZSgpIHtcbiAgICAgICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAtY29udGFpbmVyJykuaW5uZXJIVE1MO1xuICAgICAgICBjb25zdCByZW1vdmVEcmFnZ2FibGVSZWdFeCA9IG5ldyBSZWdFeHAoJyBkcmFnZ2FibGU9XCJ0cnVlXCInLCAnZycpO1xuICAgICAgICBtYWluQ29udGFpbmVyLnJlcGxhY2UocmVtb3ZlRHJhZ2dhYmxlUmVnRXgsICcnKTtcblxuICAgICAgICAvLyBUT0RPOiB2ZXIgc2kgZGViZXJpYSBpciBkZXNwbGVnYW5kbyBlbCBhcmJvbCBkZSBlbGVtZW50b3MgSFRNTCBlIGlyIGFybWFuZG8gZWwgaHRtbCBhcXVpLlxuICAgICAgICAvLyBUT0RPOiB2ZXIgc2kgZXMgbmVjZXNhcmlvIGJvcnJhciBlbCBzdHlsZSB5IGxvIHF1ZSBoYXlhIGRlbnRyby4uLi5cbiAgICAgICAgLy8gVE9ETzogZWxpbWluYXIgZWwgZHJhZ2dhYmxlXG5cbiAgICAgICAgY29uc3Qgb3V0cHV0SHRtbCA9IGBcbiAgICAgICAgPCFET0NUWVBFIGh0bWw+XG4gICAgICAgIDxodG1sIGxhbmc9XCJlblwiPlxuICAgICAgICA8aGVhZD5cbiAgICAgICAgICAgIDxtZXRhIGNoYXJzZXQ9XCJVVEYtOFwiPlxuICAgICAgICAgICAgPG1ldGEgaHR0cC1lcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCI+XG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiPlxuICAgICAgICAgICAgPHRpdGxlPkRvY3VtZW50PC90aXRsZT5cbiAgICAgICAgPC9oZWFkPlxuICAgICAgICA8Ym9keSBpZD1cImFwcC1jb250YWluZXJcIiBjbGFzcz1cImJvZHlcIj5cbiAgICAgICAgICAgICR7bWFpbkNvbnRhaW5lcn1cbiAgICAgICAgPC9ib2R5PlxuICAgICAgICA8L2h0bWw+YFxuXG4gICAgICAgIGNvbnNvbGUubG9nKG91dHB1dEh0bWwpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2VuZENvbXBvbmVudE5hbWUoKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50Q2hhbmdlUHVibGlzaGVyLm5vdGlmeUNvbXBvbmVudE5hbWUodGhpcy5jb21wb25lbnRTZWxlY3Rvci52YWx1ZSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IENsYXNzQ2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2UgZnJvbSAnLi4vaW50ZXJmYWNlcy9jbGFzcy1jaGFuZ2Utb2JzZXJ2ZXIuaW50ZXJmYWNlJztcblxuaW1wb3J0IENvbnRhaW5lckJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0NvbnRhaW5lckJ1aWxkZXInO1xuaW1wb3J0IElucHV0QnVpbGRlciBmcm9tICcuLi9tb2RlbHMvSW5wdXRCdWlsZGVyJztcbmltcG9ydCBMYWJlbEJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0xhYmVsQnVpbGRlcic7XG5pbXBvcnQgQnV0dG9uQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvQnV0dG9uQnVpbGRlcic7XG5cbmltcG9ydCBDc3NTdHlsZVNoZWV0IGZyb20gJy4uLy4uL2Nzcy1zdHlsZXNoZWV0L2Nzcy1zdHlsZXNoZWV0JztcbmltcG9ydCBjb2xvclRvSGV4IGZyb20gJy4uL2Z1bmN0aW9ucy9yZ2ItdG8taGV4JztcblxuaW1wb3J0IHsgSW5wdXRUeXBlRW51bSB9IGZyb20gJy4uL2VudW1zL2lucHV0LXR5cGUuZW51bSc7XG5pbXBvcnQgeyBTdHlsZU5hbWVFbnVtIH0gZnJvbSAnLi4vZW51bXMvc3R5bGUtbmFtZS5lbnVtJztcbmltcG9ydCB7IERpc3BsYXlUeXBlc0VudW0gfSBmcm9tICcuLi9lbnVtcy9kaXNwbGF5LXR5cGVzLmVudW0nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYWNrZ3JvdW5kQ29tcG9uZW50IGltcGxlbWVudHMgQ2xhc3NDaGFuZ2VPYnNlcnZlckludGVyZmFjZXtcbiAgICBwcml2YXRlIGRvbUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcbiAgICBwcml2YXRlIGRvbUVsZW1lbnRTdHlsZVNoZWV0OiBDU1NTdHlsZURlY2xhcmF0aW9uO1xuXG4gICAgcHJpdmF0ZSBjb2xvcklucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHByaXZhdGUgb3BhY2l0eVNsaWRlcjogSFRNTElucHV0RWxlbWVudDtcbiAgICBwcml2YXRlIG9wYWNpdHlWYWx1ZTogSFRNTExhYmVsRWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKGRvbUVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQgPSBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXModGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdFswXSk7XG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50cygpO1xuICAgIH1cblxuICAgIGdldCBjb21wb25lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZENvbXBvbmVudHMoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlQ29sb3IgPSB0aGlzLnVwZGF0ZUNvbG9yLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlT3BhY2l0eSA9IHRoaXMudXBkYXRlT3BhY2l0eS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuY29sb3JJbnB1dCA9IG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS5jb2xvcilcbiAgICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLmdldEN1cnJlbnRDb2xvcigpKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy51cGRhdGVDb2xvcilcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgY29uc3QgcmVtb3ZlQ29sb3IgPSBuZXcgQnV0dG9uQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdSZW1vdmUgQ29sb3InKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy51cGRhdGVDb2xvcilcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgdGhpcy5vcGFjaXR5U2xpZGVyID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLnJhbmdlKVxuICAgICAgICAgICAgLnNldFZhbHVlKHRoaXMuZ2V0Q3VycmVudE9wYWNpdHkoKSlcbiAgICAgICAgICAgIC5zZXRNaW4oMClcbiAgICAgICAgICAgIC5zZXRNYXgoMTAwKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy51cGRhdGVPcGFjaXR5KVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICB0aGlzLm9wYWNpdHlWYWx1ZSA9IG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldElubmVyVGV4dChgJHt0aGlzLmdldEN1cnJlbnRPcGFjaXR5KCl9JWApXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIGNvbnN0IGJhY2tncm91bmRDb21wb25lbnRzID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0NvbG9yIC8gT3BhY2l0eScpXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmNvbG9ySW5wdXQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMub3BhY2l0eVNsaWRlcilcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5vcGFjaXR5VmFsdWUpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHJlbW92ZUNvbG9yKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uYm9yZGVyLCAnMXB4IHNvbGlkICM0Q0FGNTAnKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ucGFkZGluZywgJzNweCcpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0JhY2tncm91bmQnKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQoYmFja2dyb3VuZENvbXBvbmVudHMpXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0Q3VycmVudENvbG9yKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBjb2xvclRvSGV4KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2JhY2tncm91bmQtY29sb3InXSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRDdXJyZW50T3BhY2l0eSgpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBvcGFjaXR5ID0gcGFyc2VGbG9hdCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydvcGFjaXR5J10pICogMTAwO1xuICAgICAgICByZXR1cm4gaXNOYU4ob3BhY2l0eSkgPyAnMTAwJyA6IE1hdGgucm91bmQob3BhY2l0eSkudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUNvbG9yKGV2ZW50OiBFdmVudCkge1xuICAgICAgICBpZiAoIGV2ZW50LnR5cGUgPT09ICdjbGljaycpe1xuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYmFja2dyb3VuZC1jb2xvciddID0gJyc7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydiYWNrZ3JvdW5kLWNvbG9yJ10gPSB0aGlzLmNvbG9ySW5wdXQudmFsdWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVPcGFjaXR5KCkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHBhcnNlSW50KHRoaXMub3BhY2l0eVNsaWRlci52YWx1ZSlcbiAgICAgICAgY29uc3QgcGVyY2VudGFnZSA9IHZhbHVlIC8gMTAwO1xuICAgICAgICBpZih2YWx1ZSA+PSAxMDApIHtcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ29wYWNpdHknXSA9ICcnXG4gICAgICAgICAgICB0aGlzLm9wYWNpdHlWYWx1ZS5pbm5lclRleHQgPSAnMTAwJSc7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnb3BhY2l0eSddID0gYCR7cGVyY2VudGFnZX1gO1xuICAgICAgICB0aGlzLm9wYWNpdHlWYWx1ZS5pbm5lclRleHQgPSBgJHt2YWx1ZX0lYDtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xhc3NOYW1lVXBkYXRlZChuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCA9IENzc1N0eWxlU2hlZXQuZ2V0UnVsZVN0eWxlcyhuYW1lKTtcbiAgICAgICAgdGhpcy5jb2xvcklucHV0LnZhbHVlID0gdGhpcy5nZXRDdXJyZW50Q29sb3IoKTtcbiAgICAgICAgdGhpcy5vcGFjaXR5U2xpZGVyLnZhbHVlID0gdGhpcy5nZXRDdXJyZW50T3BhY2l0eSgpO1xuICAgICAgICB0aGlzLm9wYWNpdHlWYWx1ZS5pbm5lclRleHQgPSBgJHt0aGlzLm9wYWNpdHlTbGlkZXIudmFsdWV9JWA7XG4gICAgfVxufVxuIiwiaW1wb3J0IENsYXNzQ2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2UgZnJvbSAnLi4vaW50ZXJmYWNlcy9jbGFzcy1jaGFuZ2Utb2JzZXJ2ZXIuaW50ZXJmYWNlJztcblxuaW1wb3J0IENvbnRhaW5lckJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0NvbnRhaW5lckJ1aWxkZXInO1xuaW1wb3J0IElucHV0QnVpbGRlciBmcm9tICcuLi9tb2RlbHMvSW5wdXRCdWlsZGVyJztcbmltcG9ydCBMYWJlbEJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0xhYmVsQnVpbGRlcic7XG5pbXBvcnQgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL1NlbGVjdG9yRnJvbUVudW1CdWlsZGVyJztcblxuaW1wb3J0IENzc1N0eWxlU2hlZXQgZnJvbSAnLi4vLi4vY3NzLXN0eWxlc2hlZXQvY3NzLXN0eWxlc2hlZXQnO1xuaW1wb3J0IGNvbG9yVG9IZXggZnJvbSAnLi4vZnVuY3Rpb25zL3JnYi10by1oZXgnO1xuaW1wb3J0IGdldFVuaXQgZnJvbSAnLi4vZnVuY3Rpb25zL2dldC1jc3MtdW5pdCc7XG5cbmltcG9ydCB7IElucHV0VHlwZUVudW0gfSBmcm9tICcuLi9lbnVtcy9pbnB1dC10eXBlLmVudW0nO1xuaW1wb3J0IHsgQm9yZGVyU3R5bGVFbnVtIH0gZnJvbSAnLi4vZW51bXMvYm9yZGVyLXN0eWxlLmVudW0nO1xuaW1wb3J0IHsgVW5pdHNFbnVtIH0gZnJvbSAnLi4vZW51bXMvdW5pdHMuZW51bSc7XG5pbXBvcnQgeyBTdHlsZU5hbWVFbnVtIH0gZnJvbSAnLi4vZW51bXMvc3R5bGUtbmFtZS5lbnVtJztcbmltcG9ydCB7IERpc3BsYXlUeXBlc0VudW0gfSBmcm9tICcuLi9lbnVtcy9kaXNwbGF5LXR5cGVzLmVudW0nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb3JkZXJDb21wb25lbnQgaW1wbGVtZW50cyBDbGFzc0NoYW5nZU9ic2VydmVySW50ZXJmYWNlIHtcbiAgICBwcml2YXRlIGRvbUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcbiAgICBwcml2YXRlIGRvbUVsZW1lbnRTdHlsZVNoZWV0OiBDU1NTdHlsZURlY2xhcmF0aW9uO1xuXG4gICAgcHJpdmF0ZSB0b3BCb3JkZXJDb2xvcklucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHByaXZhdGUgcmlnaHRCb3JkZXJDb2xvcklucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHByaXZhdGUgYm90dG9tQm9yZGVyQ29sb3JJbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgICBwcml2YXRlIGxlZnRCb3JkZXJDb2xvcklucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSB0b3BCb3JkZXJTdHlsZVNlbGVjdG9yOiBIVE1MU2VsZWN0RWxlbWVudDtcbiAgICBwcml2YXRlIHJpZ2h0Qm9yZGVyU3R5bGVTZWxlY3RvcjogSFRNTFNlbGVjdEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBib3R0b21Cb3JkZXJTdHlsZVNlbGVjdG9yOiBIVE1MU2VsZWN0RWxlbWVudDtcbiAgICBwcml2YXRlIGxlZnRCb3JkZXJTdHlsZVNlbGVjdG9yOiBIVE1MU2VsZWN0RWxlbWVudDtcblxuICAgIHByaXZhdGUgdG9wQm9yZGVyV2lkdGhJbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgICBwcml2YXRlIHJpZ2h0Qm9yZGVyV2lkdGhJbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgICBwcml2YXRlIGJvdHRvbUJvcmRlcldpZHRoSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBsZWZ0Qm9yZGVyV2lkdGhJbnB1dDogSFRNTElucHV0RWxlbWVudDtcblxuICAgIHByaXZhdGUgdG9wQm9yZGVyV2lkdGhVbml0U2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIHByaXZhdGUgcmlnaHRCb3JkZXJXaWR0aFVuaXRTZWxlY3RvcjogSFRNTFNlbGVjdEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBib3R0b21Cb3JkZXJXaWR0aFVuaXRTZWxlY3RvcjogSFRNTFNlbGVjdEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBsZWZ0Qm9yZGVyV2lkdGhVbml0U2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSB0b3BCb3JkZXJSYWRpdXNJbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgICBwcml2YXRlIHJpZ2h0Qm9yZGVyUmFkaXVzSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBib3R0b21Cb3JkZXJSYWRpdXNJbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgICBwcml2YXRlIGxlZnRCb3JkZXJSYWRpdXNJbnB1dDogSFRNTElucHV0RWxlbWVudDtcblxuICAgIHByaXZhdGUgdG9wQm9yZGVyUmFkaXVzVW5pdFNlbGVjdG9yOiBIVE1MU2VsZWN0RWxlbWVudDtcbiAgICBwcml2YXRlIHJpZ2h0Qm9yZGVyUmFkaXVzVW5pdFNlbGVjdG9yOiBIVE1MU2VsZWN0RWxlbWVudDtcbiAgICBwcml2YXRlIGJvdHRvbUJvcmRlclJhZGl1c1VuaXRTZWxlY3RvcjogSFRNTFNlbGVjdEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBsZWZ0Qm9yZGVyUmFkaXVzVW5pdFNlbGVjdG9yOiBIVE1MU2VsZWN0RWxlbWVudDtcblxuICAgIHByaXZhdGUgc2VsZWN0QWxsQ2hlY2tCb3g6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihkb21FbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0ID0gQ3NzU3R5bGVTaGVldC5nZXRSdWxlU3R5bGVzKHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3RbMF0pO1xuICAgICAgICB0aGlzLmFkZENvbXBvbmVudHMoKTtcbiAgICB9XG5cbiAgICBnZXQgY29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRDb21wb25lbnRzKCkge1xuICAgICAgICB0aGlzLmNoYW5nZUNvbXBvbmVudHNTdGF0dXMgPSB0aGlzLmNoYW5nZUNvbXBvbmVudHNTdGF0dXMuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZUJvcmRlclN0eWxlUHJvcGVydHkgPSB0aGlzLnVwZGF0ZUJvcmRlclN0eWxlUHJvcGVydHkuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGVCb3JkZXJDb2xvciA9IHRoaXMudXBkYXRlQm9yZGVyQ29sb3IuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGVCb3JkZXJXaWR0aCA9IHRoaXMudXBkYXRlQm9yZGVyV2lkdGguYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGVCb3JkZXJSYWRpdXMgPSB0aGlzLnVwZGF0ZUJvcmRlclJhZGl1cy5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuc2VsZWN0QWxsQ2hlY2tCb3ggPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0uY2hlY2tib3gpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5jaGFuZ2VDb21wb25lbnRzU3RhdHVzKVxuICAgICAgICAgICAgLmNoZWNrZWQodGhpcy51bmlmaWVkQm9yZGVyUHJvcGVydGllcygpKVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICBjb25zdCBzZWxlY3RBbGxDb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnU2VsZWN0IEFsbCcpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLnNlbGVjdEFsbENoZWNrQm94KVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuXG4gICAgICAgIHRoaXMuYnVpbGRBbGxDb21wb25lbnRzKCk7XG4gICAgICAgIHRoaXMuc2V0Qm9yZGVyVmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpO1xuXG4gICAgICAgIGNvbnN0IHRvcENvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdUb3AgQm9yZGVyIENvbG9yIC8gU3R5bGUnKVxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy50b3BCb3JkZXJDb2xvcklucHV0KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLnRvcEJvcmRlclN0eWxlU2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdUb3AgQm9yZGVyIFdpZHRoJylcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMudG9wQm9yZGVyV2lkdGhJbnB1dClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy50b3BCb3JkZXJXaWR0aFVuaXRTZWxlY3RvcilcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ1RvcCBCb3JkZXIgUmFkaXVzJylcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMudG9wQm9yZGVyUmFkaXVzSW5wdXQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMudG9wQm9yZGVyUmFkaXVzVW5pdFNlbGVjdG9yKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIGNvbnN0IHJpZ2h0Q29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ1JpZ2h0IEJvcmRlciBDb2xvciAvIFN0eWxlJylcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMucmlnaHRCb3JkZXJDb2xvcklucHV0KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLnJpZ2h0Qm9yZGVyU3R5bGVTZWxlY3RvcilcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ1JpZ2h0IEJvcmRlciBXaWR0aCcpXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLnJpZ2h0Qm9yZGVyV2lkdGhJbnB1dClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5yaWdodEJvcmRlcldpZHRoVW5pdFNlbGVjdG9yKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnUmlnaHQgQm9yZGVyIFJhZGl1cycpXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLnJpZ2h0Qm9yZGVyUmFkaXVzSW5wdXQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMucmlnaHRCb3JkZXJSYWRpdXNVbml0U2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgY29uc3QgYm90dG9tQ29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0JvdHRvbSBCb3JkZXIgQ29sb3IgLyBTdHlsZScpXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmJvdHRvbUJvcmRlckNvbG9ySW5wdXQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuYm90dG9tQm9yZGVyU3R5bGVTZWxlY3RvcilcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0JvdHRvbSBCb3JkZXIgV2lkdGgnKVxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5ib3R0b21Cb3JkZXJXaWR0aElucHV0KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmJvdHRvbUJvcmRlcldpZHRoVW5pdFNlbGVjdG9yKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnQm90dG9tIEJvcmRlciBSYWRpdXMnKVxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5ib3R0b21Cb3JkZXJSYWRpdXNJbnB1dClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5ib3R0b21Cb3JkZXJSYWRpdXNVbml0U2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgY29uc3QgbGVmdENvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdMZWZ0IEJvcmRlciBDb2xvciAvIFN0eWxlJylcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMubGVmdEJvcmRlckNvbG9ySW5wdXQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMubGVmdEJvcmRlclN0eWxlU2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdMZWZ0IEJvcmRlciBXaWR0aCcpXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmxlZnRCb3JkZXJXaWR0aElucHV0KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmxlZnRCb3JkZXJXaWR0aFVuaXRTZWxlY3RvcilcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0xlZnQgQm9yZGVyIFJhZGl1cycpXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmxlZnRCb3JkZXJSYWRpdXNJbnB1dClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5sZWZ0Qm9yZGVyUmFkaXVzVW5pdFNlbGVjdG9yKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIGNvbnN0IGlucHV0VmFsdWVzQ29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRvcENvbnRhaW5lcilcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChyaWdodENvbnRhaW5lcilcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChib3R0b21Db250YWluZXIpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobGVmdENvbnRhaW5lcilcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5ib3JkZXIsICcxcHggc29saWQgIzRDQUY1MCcpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5wYWRkaW5nLCAnM3B4JylcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnQm9yZGVyIFR5cGUgU2VsZWN0b3InKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQoc2VsZWN0QWxsQ29udGFpbmVyKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKGlucHV0VmFsdWVzQ29udGFpbmVyKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICB9XG5cbiAgICBwcml2YXRlIGJ1aWxkQWxsQ29tcG9uZW50cygpIHtcbiAgICAgICAgdGhpcy5idWlsZENvbG9ySW5wdXRzKCk7XG4gICAgICAgIHRoaXMuYnVpbGRTdHlsZVNlbGVjdG9ycygpO1xuICAgICAgICB0aGlzLmJ1aWxkQm9yZGVyV2lkdGhJbnB1dHMoKTtcbiAgICAgICAgdGhpcy5idWlsZEJvcmRlcldpZHRoVW5pdHNTZWxlY3RvcnMoKTtcbiAgICAgICAgdGhpcy5idWlsZEJvcmRlclJhZGl1c0lucHV0cygpXG4gICAgICAgIHRoaXMuYnVpbGRCb3JkZXJSYWRpdXNVbml0c1NlbGVjdG9ycygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYnVpbGRDb2xvcklucHV0cygpIHtcbiAgICAgICAgdGhpcy50b3BCb3JkZXJDb2xvcklucHV0ID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLmNvbG9yKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy51cGRhdGVCb3JkZXJDb2xvcilcbiAgICAgICAgICAgIC5idWlsZCgpO1xuICAgICAgICB0aGlzLnJpZ2h0Qm9yZGVyQ29sb3JJbnB1dCA9IG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS5jb2xvcilcbiAgICAgICAgICAgIC5kaXNhYmxlZCh0aGlzLnNlbGVjdEFsbENoZWNrQm94LmNoZWNrZWQpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLnVwZGF0ZUJvcmRlckNvbG9yKVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG4gICAgICAgIHRoaXMuYm90dG9tQm9yZGVyQ29sb3JJbnB1dCA9IG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS5jb2xvcilcbiAgICAgICAgICAgIC5kaXNhYmxlZCh0aGlzLnNlbGVjdEFsbENoZWNrQm94LmNoZWNrZWQpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLnVwZGF0ZUJvcmRlckNvbG9yKVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG4gICAgICAgIHRoaXMubGVmdEJvcmRlckNvbG9ySW5wdXQgPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0uY29sb3IpXG4gICAgICAgICAgICAuZGlzYWJsZWQodGhpcy5zZWxlY3RBbGxDaGVja0JveC5jaGVja2VkKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy51cGRhdGVCb3JkZXJDb2xvcilcbiAgICAgICAgICAgIC5idWlsZCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYnVpbGRTdHlsZVNlbGVjdG9ycygpIHtcbiAgICAgICAgdGhpcy50b3BCb3JkZXJTdHlsZVNlbGVjdG9yID0gbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKEJvcmRlclN0eWxlRW51bSlcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnVwZGF0ZUJvcmRlclN0eWxlUHJvcGVydHkpXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICB0aGlzLnJpZ2h0Qm9yZGVyU3R5bGVTZWxlY3RvciA9IG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihCb3JkZXJTdHlsZUVudW0pXG4gICAgICAgICAgICAuZGlzYWJsZWQodGhpcy5zZWxlY3RBbGxDaGVja0JveC5jaGVja2VkKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudXBkYXRlQm9yZGVyU3R5bGVQcm9wZXJ0eSlcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgIHRoaXMuYm90dG9tQm9yZGVyU3R5bGVTZWxlY3RvciA9IG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihCb3JkZXJTdHlsZUVudW0pXG4gICAgICAgICAgICAuZGlzYWJsZWQodGhpcy5zZWxlY3RBbGxDaGVja0JveC5jaGVja2VkKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudXBkYXRlQm9yZGVyU3R5bGVQcm9wZXJ0eSlcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgIHRoaXMubGVmdEJvcmRlclN0eWxlU2VsZWN0b3IgPSBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIoQm9yZGVyU3R5bGVFbnVtKVxuICAgICAgICAgICAgLmRpc2FibGVkKHRoaXMuc2VsZWN0QWxsQ2hlY2tCb3guY2hlY2tlZClcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnVwZGF0ZUJvcmRlclN0eWxlUHJvcGVydHkpXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgIH1cblxuICAgIHByaXZhdGUgYnVpbGRCb3JkZXJXaWR0aElucHV0cygpIHtcbiAgICAgICAgdGhpcy50b3BCb3JkZXJXaWR0aElucHV0ID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLm51bWJlcilcbiAgICAgICAgICAgIC5zZXRNaW4oMClcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMudXBkYXRlQm9yZGVyV2lkdGgpXG4gICAgICAgICAgICAuYnVpbGQoKTtcbiAgICAgICAgdGhpcy5yaWdodEJvcmRlcldpZHRoSW5wdXQgPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0ubnVtYmVyKVxuICAgICAgICAgICAgLnNldE1pbigwKVxuICAgICAgICAgICAgLmRpc2FibGVkKHRoaXMuc2VsZWN0QWxsQ2hlY2tCb3guY2hlY2tlZClcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnVwZGF0ZUJvcmRlcldpZHRoKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgdGhpcy5ib3R0b21Cb3JkZXJXaWR0aElucHV0ID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLm51bWJlcilcbiAgICAgICAgICAgIC5zZXRNaW4oMClcbiAgICAgICAgICAgIC5kaXNhYmxlZCh0aGlzLnNlbGVjdEFsbENoZWNrQm94LmNoZWNrZWQpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVCb3JkZXJXaWR0aClcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgIHRoaXMubGVmdEJvcmRlcldpZHRoSW5wdXQgPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0ubnVtYmVyKVxuICAgICAgICAgICAgLnNldE1pbigwKVxuICAgICAgICAgICAgLmRpc2FibGVkKHRoaXMuc2VsZWN0QWxsQ2hlY2tCb3guY2hlY2tlZClcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnVwZGF0ZUJvcmRlcldpZHRoKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICB9XG5cbiAgICBwcml2YXRlIGJ1aWxkQm9yZGVyV2lkdGhVbml0c1NlbGVjdG9ycygpIHtcbiAgICAgICAgdGhpcy50b3BCb3JkZXJXaWR0aFVuaXRTZWxlY3RvciA9IG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihVbml0c0VudW0pXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVCb3JkZXJXaWR0aClcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgIHRoaXMucmlnaHRCb3JkZXJXaWR0aFVuaXRTZWxlY3RvciA9IG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihVbml0c0VudW0pXG4gICAgICAgICAgICAuZGlzYWJsZWQodGhpcy5zZWxlY3RBbGxDaGVja0JveC5jaGVja2VkKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudXBkYXRlQm9yZGVyV2lkdGgpXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICB0aGlzLmJvdHRvbUJvcmRlcldpZHRoVW5pdFNlbGVjdG9yID0gbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKFVuaXRzRW51bSlcbiAgICAgICAgICAgIC5kaXNhYmxlZCh0aGlzLnNlbGVjdEFsbENoZWNrQm94LmNoZWNrZWQpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVCb3JkZXJXaWR0aClcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgIHRoaXMubGVmdEJvcmRlcldpZHRoVW5pdFNlbGVjdG9yID0gbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKFVuaXRzRW51bSlcbiAgICAgICAgICAgIC5kaXNhYmxlZCh0aGlzLnNlbGVjdEFsbENoZWNrQm94LmNoZWNrZWQpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVCb3JkZXJXaWR0aClcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBidWlsZEJvcmRlclJhZGl1c0lucHV0cygpIHtcbiAgICAgICAgdGhpcy50b3BCb3JkZXJSYWRpdXNJbnB1dCA9IG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS5udW1iZXIpXG4gICAgICAgICAgICAuc2V0TWluKDApXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLnVwZGF0ZUJvcmRlclJhZGl1cylcbiAgICAgICAgICAgIC5idWlsZCgpO1xuICAgICAgICB0aGlzLnJpZ2h0Qm9yZGVyUmFkaXVzSW5wdXQgPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0ubnVtYmVyKVxuICAgICAgICAgICAgLnNldE1pbigwKVxuICAgICAgICAgICAgLmRpc2FibGVkKHRoaXMuc2VsZWN0QWxsQ2hlY2tCb3guY2hlY2tlZClcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnVwZGF0ZUJvcmRlclJhZGl1cylcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgIHRoaXMuYm90dG9tQm9yZGVyUmFkaXVzSW5wdXQgPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0ubnVtYmVyKVxuICAgICAgICAgICAgLnNldE1pbigwKVxuICAgICAgICAgICAgLmRpc2FibGVkKHRoaXMuc2VsZWN0QWxsQ2hlY2tCb3guY2hlY2tlZClcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnVwZGF0ZUJvcmRlclJhZGl1cylcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgIHRoaXMubGVmdEJvcmRlclJhZGl1c0lucHV0ID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLm51bWJlcilcbiAgICAgICAgICAgIC5zZXRNaW4oMClcbiAgICAgICAgICAgIC5kaXNhYmxlZCh0aGlzLnNlbGVjdEFsbENoZWNrQm94LmNoZWNrZWQpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVCb3JkZXJSYWRpdXMpXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgIH1cblxuICAgIHByaXZhdGUgYnVpbGRCb3JkZXJSYWRpdXNVbml0c1NlbGVjdG9ycygpIHtcbiAgICAgICAgdGhpcy50b3BCb3JkZXJSYWRpdXNVbml0U2VsZWN0b3IgPSBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIoVW5pdHNFbnVtKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudXBkYXRlQm9yZGVyUmFkaXVzKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgdGhpcy5yaWdodEJvcmRlclJhZGl1c1VuaXRTZWxlY3RvciA9IG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihVbml0c0VudW0pXG4gICAgICAgICAgICAuZGlzYWJsZWQodGhpcy5zZWxlY3RBbGxDaGVja0JveC5jaGVja2VkKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudXBkYXRlQm9yZGVyUmFkaXVzKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgdGhpcy5ib3R0b21Cb3JkZXJSYWRpdXNVbml0U2VsZWN0b3IgPSBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIoVW5pdHNFbnVtKVxuICAgICAgICAgICAgLmRpc2FibGVkKHRoaXMuc2VsZWN0QWxsQ2hlY2tCb3guY2hlY2tlZClcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnVwZGF0ZUJvcmRlclJhZGl1cylcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgIHRoaXMubGVmdEJvcmRlclJhZGl1c1VuaXRTZWxlY3RvciA9IG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihVbml0c0VudW0pXG4gICAgICAgICAgICAuZGlzYWJsZWQodGhpcy5zZWxlY3RBbGxDaGVja0JveC5jaGVja2VkKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudXBkYXRlQm9yZGVyUmFkaXVzKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICB9XG5cbiAgICBwcml2YXRlIGNoYW5nZUNvbXBvbmVudHNTdGF0dXMgKCkge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RBbGxDaGVja0JveC5jaGVja2VkKSB7XG4gICAgICAgICAgICB0aGlzLnJpZ2h0Qm9yZGVyU3R5bGVTZWxlY3Rvci5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbUJvcmRlclN0eWxlU2VsZWN0b3IuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5sZWZ0Qm9yZGVyU3R5bGVTZWxlY3Rvci5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIHRoaXMucmlnaHRCb3JkZXJDb2xvcklucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tQm9yZGVyQ29sb3JJbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmxlZnRCb3JkZXJDb2xvcklucHV0LmRpc2FibGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgdGhpcy5yaWdodEJvcmRlcldpZHRoSW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5ib3R0b21Cb3JkZXJXaWR0aElucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubGVmdEJvcmRlcldpZHRoSW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICB0aGlzLnJpZ2h0Qm9yZGVyV2lkdGhVbml0U2VsZWN0b3IuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5ib3R0b21Cb3JkZXJXaWR0aFVuaXRTZWxlY3Rvci5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmxlZnRCb3JkZXJXaWR0aFVuaXRTZWxlY3Rvci5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIHRoaXMucmlnaHRCb3JkZXJSYWRpdXNJbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbUJvcmRlclJhZGl1c0lucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubGVmdEJvcmRlclJhZGl1c0lucHV0LmRpc2FibGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgdGhpcy5yaWdodEJvcmRlclJhZGl1c1VuaXRTZWxlY3Rvci5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbUJvcmRlclJhZGl1c1VuaXRTZWxlY3Rvci5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmxlZnRCb3JkZXJSYWRpdXNVbml0U2VsZWN0b3IuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yaWdodEJvcmRlclN0eWxlU2VsZWN0b3IuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tQm9yZGVyU3R5bGVTZWxlY3Rvci5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5sZWZ0Qm9yZGVyU3R5bGVTZWxlY3Rvci5kaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICB0aGlzLnJpZ2h0Qm9yZGVyQ29sb3JJbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5ib3R0b21Cb3JkZXJDb2xvcklucHV0LmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmxlZnRCb3JkZXJDb2xvcklucHV0LmRpc2FibGVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIHRoaXMucmlnaHRCb3JkZXJXaWR0aElucHV0LmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbUJvcmRlcldpZHRoSW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubGVmdEJvcmRlcldpZHRoSW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgdGhpcy5yaWdodEJvcmRlcldpZHRoVW5pdFNlbGVjdG9yLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbUJvcmRlcldpZHRoVW5pdFNlbGVjdG9yLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmxlZnRCb3JkZXJXaWR0aFVuaXRTZWxlY3Rvci5kaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICB0aGlzLnJpZ2h0Qm9yZGVyUmFkaXVzSW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tQm9yZGVyUmFkaXVzSW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubGVmdEJvcmRlclJhZGl1c0lucHV0LmRpc2FibGVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIHRoaXMucmlnaHRCb3JkZXJSYWRpdXNVbml0U2VsZWN0b3IuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tQm9yZGVyUmFkaXVzVW5pdFNlbGVjdG9yLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmxlZnRCb3JkZXJSYWRpdXNVbml0U2VsZWN0b3IuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc2V0Qm9yZGVyVmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpIHtcbiAgICAgICAgdGhpcy5zZXRCb3JkZXJDb2xvclZhbHVlc0FjY29yZGluZ1RvQ2xhc3MoKTtcbiAgICAgICAgdGhpcy5zZXRCb3JkZXJTdHlsZVZhbHVlc0FjY29yZGluZ1RvQ2xhc3MoKTtcbiAgICAgICAgdGhpcy5zZXRCb3JkZXJXaWR0aFZhbHVlc0FjY29yZGluZ1RvQ2xhc3MoKTtcbiAgICAgICAgdGhpcy5zZXRCb3JkZXJSYWRpdXNWYWx1ZXNBY2NvcmRpbmdUb0NsYXNzKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRCb3JkZXJDb2xvclZhbHVlc0FjY29yZGluZ1RvQ2xhc3MoKSB7XG4gICAgICAgIGNvbnN0IHt0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnR9ID0gdGhpcy5nZXRDdXJyZW50Qm9yZGVyQ29sb3IoKTtcbiAgICAgICAgdGhpcy50b3BCb3JkZXJDb2xvcklucHV0LnZhbHVlID0gdG9wO1xuICAgICAgICB0aGlzLnJpZ2h0Qm9yZGVyQ29sb3JJbnB1dC52YWx1ZSA9IHJpZ2h0O1xuICAgICAgICB0aGlzLmJvdHRvbUJvcmRlckNvbG9ySW5wdXQudmFsdWUgPSBib3R0b207XG4gICAgICAgIHRoaXMubGVmdEJvcmRlckNvbG9ySW5wdXQudmFsdWUgPSBsZWZ0O1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0Qm9yZGVyU3R5bGVWYWx1ZXNBY2NvcmRpbmdUb0NsYXNzKCkge1xuICAgICAgICBjb25zdCB7dG9wLCByaWdodCwgYm90dG9tLCBsZWZ0fSA9IHRoaXMuZ2V0Q3VycmVudEJvcmRlclN0eWxlKCk7XG4gICAgICAgIHRoaXMudG9wQm9yZGVyU3R5bGVTZWxlY3Rvci52YWx1ZSA9IHRvcDtcbiAgICAgICAgdGhpcy5yaWdodEJvcmRlclN0eWxlU2VsZWN0b3IudmFsdWUgPSByaWdodDtcbiAgICAgICAgdGhpcy5ib3R0b21Cb3JkZXJTdHlsZVNlbGVjdG9yLnZhbHVlID0gYm90dG9tO1xuICAgICAgICB0aGlzLmxlZnRCb3JkZXJTdHlsZVNlbGVjdG9yLnZhbHVlID0gbGVmdDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEJvcmRlcldpZHRoVmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpIHtcbiAgICAgICAgY29uc3Qge3RvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdH0gPSB0aGlzLmdldEN1cnJlbnRCb3JkZXJXaWR0aCgpO1xuICAgICAgICB0aGlzLnRvcEJvcmRlcldpZHRoSW5wdXQudmFsdWUgPSBgJHtwYXJzZUludCh0b3ApfWA7XG4gICAgICAgIHRoaXMucmlnaHRCb3JkZXJXaWR0aElucHV0LnZhbHVlID0gYCR7cGFyc2VJbnQocmlnaHQpfWA7XG4gICAgICAgIHRoaXMuYm90dG9tQm9yZGVyV2lkdGhJbnB1dC52YWx1ZSA9IGAke3BhcnNlSW50KGJvdHRvbSl9YDtcbiAgICAgICAgdGhpcy5sZWZ0Qm9yZGVyV2lkdGhJbnB1dC52YWx1ZSA9IGAke3BhcnNlSW50KGxlZnQpfWA7XG5cbiAgICAgICAgdGhpcy50b3BCb3JkZXJXaWR0aFVuaXRTZWxlY3Rvci52YWx1ZSA9IGdldFVuaXQodG9wKTtcbiAgICAgICAgdGhpcy5yaWdodEJvcmRlcldpZHRoVW5pdFNlbGVjdG9yLnZhbHVlID0gZ2V0VW5pdChyaWdodCk7XG4gICAgICAgIHRoaXMuYm90dG9tQm9yZGVyV2lkdGhVbml0U2VsZWN0b3IudmFsdWUgPSBnZXRVbml0KGJvdHRvbSk7XG4gICAgICAgIHRoaXMubGVmdEJvcmRlcldpZHRoVW5pdFNlbGVjdG9yLnZhbHVlID0gZ2V0VW5pdChsZWZ0KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEJvcmRlclJhZGl1c1ZhbHVlc0FjY29yZGluZ1RvQ2xhc3MoKSB7XG4gICAgICAgIGNvbnN0IHt0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnR9ID0gdGhpcy5nZXRDdXJyZW50Qm9yZGVyUmFkaXVzKCk7XG4gICAgICAgIHRoaXMudG9wQm9yZGVyUmFkaXVzSW5wdXQudmFsdWUgPSBgJHtwYXJzZUludCh0b3ApfWA7XG4gICAgICAgIHRoaXMucmlnaHRCb3JkZXJSYWRpdXNJbnB1dC52YWx1ZSA9IGAke3BhcnNlSW50KHJpZ2h0KX1gO1xuICAgICAgICB0aGlzLmJvdHRvbUJvcmRlclJhZGl1c0lucHV0LnZhbHVlID0gYCR7cGFyc2VJbnQoYm90dG9tKX1gO1xuICAgICAgICB0aGlzLmxlZnRCb3JkZXJSYWRpdXNJbnB1dC52YWx1ZSA9IGAke3BhcnNlSW50KGxlZnQpfWA7XG5cbiAgICAgICAgdGhpcy50b3BCb3JkZXJSYWRpdXNVbml0U2VsZWN0b3IudmFsdWUgPSBnZXRVbml0KHRvcCk7XG4gICAgICAgIHRoaXMucmlnaHRCb3JkZXJSYWRpdXNVbml0U2VsZWN0b3IudmFsdWUgPSBnZXRVbml0KHJpZ2h0KTtcbiAgICAgICAgdGhpcy5ib3R0b21Cb3JkZXJSYWRpdXNVbml0U2VsZWN0b3IudmFsdWUgPSBnZXRVbml0KGJvdHRvbSk7XG4gICAgICAgIHRoaXMubGVmdEJvcmRlclJhZGl1c1VuaXRTZWxlY3Rvci52YWx1ZSA9IGdldFVuaXQobGVmdCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVCb3JkZXJTdHlsZVByb3BlcnR5KCkge1xuICAgICAgICBsZXQge3RvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdH0gPSB0aGlzLmdldEN1cnJlbnRCb3JkZXJTdHlsZSgpO1xuXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdEFsbENoZWNrQm94LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIHRvcCA9IHRoaXMudG9wQm9yZGVyU3R5bGVTZWxlY3Rvci52YWx1ZTtcbiAgICAgICAgICAgIHJpZ2h0ID0gdG9wO1xuICAgICAgICAgICAgYm90dG9tID0gdG9wO1xuICAgICAgICAgICAgbGVmdCA9IHRvcDtcblxuICAgICAgICAgICAgdGhpcy5yaWdodEJvcmRlclN0eWxlU2VsZWN0b3IudmFsdWUgPSB0aGlzLnRvcEJvcmRlclN0eWxlU2VsZWN0b3IudmFsdWU7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbUJvcmRlclN0eWxlU2VsZWN0b3IudmFsdWUgPSB0aGlzLnRvcEJvcmRlclN0eWxlU2VsZWN0b3IudmFsdWU7XG4gICAgICAgICAgICB0aGlzLmxlZnRCb3JkZXJTdHlsZVNlbGVjdG9yLnZhbHVlID0gdGhpcy50b3BCb3JkZXJTdHlsZVNlbGVjdG9yLnZhbHVlO1xuXG4gICAgICAgICAgICBpZih0b3AgPT09IEJvcmRlclN0eWxlRW51bS5ub25lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldEJvcmRlclByb3BlcnR5KCdib3JkZXItc3R5bGUnLCAnYWxsJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldEJvcmRlclByb3BlcnR5KCdib3JkZXItY29sb3InLCAnYWxsJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldEJvcmRlclByb3BlcnR5KCdib3JkZXItd2lkdGgnLCAnYWxsJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldEJvcmRlclByb3BlcnR5KCdib3JkZXItcmFkaXVzJywgJ2FsbCcpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRCb3JkZXJQcm9wZXJ0eSgnYm9yZGVyLWltYWdlJywgJ2FsbCcpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRvcCA9IHRoaXMudG9wQm9yZGVyU3R5bGVTZWxlY3Rvci52YWx1ZTtcbiAgICAgICAgICAgIHJpZ2h0ID0gdGhpcy5yaWdodEJvcmRlclN0eWxlU2VsZWN0b3IudmFsdWU7XG4gICAgICAgICAgICBib3R0b20gPSB0aGlzLmJvdHRvbUJvcmRlclN0eWxlU2VsZWN0b3IudmFsdWU7XG4gICAgICAgICAgICBsZWZ0ID0gdGhpcy5sZWZ0Qm9yZGVyU3R5bGVTZWxlY3Rvci52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2JvcmRlci1zdHlsZSddID0gW3RvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdF0uam9pbignICcpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXNldEJvcmRlclByb3BlcnR5KFxuICAgICAgICBwcm9wZXJ0eTogJ2JvcmRlci1zdHlsZScgfCAnYm9yZGVyLWNvbG9yJyB8ICdib3JkZXItd2lkdGgnIHwgJ2JvcmRlci1yYWRpdXMnIHwgJ2JvcmRlci1pbWFnZScsXG4gICAgICAgIHBvc2l0aW9uOiAndG9wJyB8ICdyaWdodCcgfCAnYm90dG9tJyB8ICdsZWZ0JyB8ICdhbGwnXG4gICAgKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gcG9zaXRpb24gPT09ICdhbGwnID8gcHJvcGVydHkgOiBgJHtwcm9wZXJ0eX0tJHtwb3NpdGlvbn1gO1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0W3N0eWxlXSA9ICcnO1xuXG4gICAgICAgIGlmKHByb3BlcnR5ID09PSAnYm9yZGVyLXN0eWxlJykge1xuICAgICAgICAgICAgdGhpcy5zZXRCb3JkZXJTdHlsZVZhbHVlc0FjY29yZGluZ1RvQ2xhc3MoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHByb3BlcnR5ID09PSAnYm9yZGVyLWNvbG9yJykge1xuICAgICAgICAgICAgdGhpcy5zZXRCb3JkZXJDb2xvclZhbHVlc0FjY29yZGluZ1RvQ2xhc3MoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHByb3BlcnR5ID09PSAnYm9yZGVyLXdpZHRoJykge1xuICAgICAgICAgICAgdGhpcy5zZXRCb3JkZXJXaWR0aFZhbHVlc0FjY29yZGluZ1RvQ2xhc3MoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHByb3BlcnR5ID09PSAnYm9yZGVyLXJhZGl1cycpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Qm9yZGVyUmFkaXVzVmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVCb3JkZXJDb2xvcigpIHtcbiAgICAgICAgbGV0IHt0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnR9ID0gdGhpcy5nZXRDdXJyZW50Qm9yZGVyQ29sb3IoKTtcblxuICAgICAgICBpZiAodGhpcy5zZWxlY3RBbGxDaGVja0JveC5jaGVja2VkKSB7XG4gICAgICAgICAgICB0b3AgPSB0aGlzLnRvcEJvcmRlckNvbG9ySW5wdXQudmFsdWU7XG4gICAgICAgICAgICByaWdodCA9IHRvcDtcbiAgICAgICAgICAgIGJvdHRvbSA9IHRvcDtcbiAgICAgICAgICAgIGxlZnQgPSB0b3A7XG5cbiAgICAgICAgICAgIHRoaXMucmlnaHRCb3JkZXJDb2xvcklucHV0LnZhbHVlID0gdGhpcy50b3BCb3JkZXJDb2xvcklucHV0LnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ib3R0b21Cb3JkZXJDb2xvcklucHV0LnZhbHVlID0gdGhpcy50b3BCb3JkZXJDb2xvcklucHV0LnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5sZWZ0Qm9yZGVyQ29sb3JJbnB1dC52YWx1ZSA9IHRoaXMudG9wQm9yZGVyQ29sb3JJbnB1dC52YWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRvcCA9IHRoaXMudG9wQm9yZGVyQ29sb3JJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIHJpZ2h0ID0gdGhpcy5yaWdodEJvcmRlckNvbG9ySW5wdXQudmFsdWU7XG4gICAgICAgICAgICBib3R0b20gPSB0aGlzLmJvdHRvbUJvcmRlckNvbG9ySW5wdXQudmFsdWU7XG4gICAgICAgICAgICBsZWZ0ID0gdGhpcy5sZWZ0Qm9yZGVyQ29sb3JJbnB1dC52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2JvcmRlci1jb2xvciddID0gW3RvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdF0uam9pbignICcpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVCb3JkZXJXaWR0aCgpIHtcbiAgICAgICAgbGV0IHt0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnR9ID0gdGhpcy5nZXRDdXJyZW50Qm9yZGVyV2lkdGgoKTtcblxuICAgICAgICBpZiAodGhpcy5zZWxlY3RBbGxDaGVja0JveC5jaGVja2VkKSB7XG4gICAgICAgICAgICBpZihwYXJzZUludCh0aGlzLnRvcEJvcmRlcldpZHRoSW5wdXQudmFsdWUpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldEJvcmRlclByb3BlcnR5KCdib3JkZXItd2lkdGgnLCAnYWxsJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0b3AgPSBgJHt0aGlzLnRvcEJvcmRlcldpZHRoSW5wdXQudmFsdWV9JHt0aGlzLnRvcEJvcmRlcldpZHRoVW5pdFNlbGVjdG9yLnZhbHVlfWA7XG4gICAgICAgICAgICByaWdodCA9IHRvcDtcbiAgICAgICAgICAgIGJvdHRvbSA9IHRvcDtcbiAgICAgICAgICAgIGxlZnQgPSB0b3A7XG5cbiAgICAgICAgICAgIHRoaXMucmlnaHRCb3JkZXJXaWR0aElucHV0LnZhbHVlID0gdGhpcy50b3BCb3JkZXJXaWR0aElucHV0LnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ib3R0b21Cb3JkZXJXaWR0aElucHV0LnZhbHVlID0gdGhpcy50b3BCb3JkZXJXaWR0aElucHV0LnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5sZWZ0Qm9yZGVyV2lkdGhJbnB1dC52YWx1ZSA9IHRoaXMudG9wQm9yZGVyV2lkdGhJbnB1dC52YWx1ZTtcblxuICAgICAgICAgICAgdGhpcy5yaWdodEJvcmRlcldpZHRoVW5pdFNlbGVjdG9yLnZhbHVlID0gdGhpcy50b3BCb3JkZXJXaWR0aFVuaXRTZWxlY3Rvci52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tQm9yZGVyV2lkdGhVbml0U2VsZWN0b3IudmFsdWUgPSB0aGlzLnRvcEJvcmRlcldpZHRoVW5pdFNlbGVjdG9yLnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5sZWZ0Qm9yZGVyV2lkdGhVbml0U2VsZWN0b3IudmFsdWUgPSB0aGlzLnRvcEJvcmRlcldpZHRoVW5pdFNlbGVjdG9yLnZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG9wID0gYCR7dGhpcy50b3BCb3JkZXJXaWR0aElucHV0LnZhbHVlfSR7dGhpcy50b3BCb3JkZXJXaWR0aFVuaXRTZWxlY3Rvci52YWx1ZX1gO1xuICAgICAgICAgICAgcmlnaHQgPSBgJHt0aGlzLnJpZ2h0Qm9yZGVyV2lkdGhJbnB1dC52YWx1ZX0ke3RoaXMucmlnaHRCb3JkZXJXaWR0aFVuaXRTZWxlY3Rvci52YWx1ZX1gO1xuICAgICAgICAgICAgYm90dG9tID0gYCR7dGhpcy5ib3R0b21Cb3JkZXJXaWR0aElucHV0LnZhbHVlfSR7dGhpcy5ib3R0b21Cb3JkZXJXaWR0aFVuaXRTZWxlY3Rvci52YWx1ZX1gO1xuICAgICAgICAgICAgbGVmdCA9IGAke3RoaXMubGVmdEJvcmRlcldpZHRoSW5wdXQudmFsdWV9JHt0aGlzLmxlZnRCb3JkZXJXaWR0aFVuaXRTZWxlY3Rvci52YWx1ZX1gO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2JvcmRlci13aWR0aCddID0gW3RvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdF0uam9pbignICcpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVCb3JkZXJSYWRpdXMoKSB7XG4gICAgICAgIGxldCB7dG9wLCByaWdodCwgYm90dG9tLCBsZWZ0fSA9IHRoaXMuZ2V0Q3VycmVudEJvcmRlclJhZGl1cygpO1xuXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdEFsbENoZWNrQm94LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGlmKHBhcnNlSW50KHRoaXMudG9wQm9yZGVyUmFkaXVzSW5wdXQudmFsdWUpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldEJvcmRlclByb3BlcnR5KCdib3JkZXItcmFkaXVzJywgJ2FsbCcpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdG9wID0gYCR7dGhpcy50b3BCb3JkZXJSYWRpdXNJbnB1dC52YWx1ZX0ke3RoaXMudG9wQm9yZGVyUmFkaXVzVW5pdFNlbGVjdG9yLnZhbHVlfWA7XG4gICAgICAgICAgICByaWdodCA9IHRvcDtcbiAgICAgICAgICAgIGJvdHRvbSA9IHRvcDtcbiAgICAgICAgICAgIGxlZnQgPSB0b3A7XG5cbiAgICAgICAgICAgIHRoaXMucmlnaHRCb3JkZXJSYWRpdXNJbnB1dC52YWx1ZSA9IHRoaXMudG9wQm9yZGVyUmFkaXVzSW5wdXQudmFsdWU7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbUJvcmRlclJhZGl1c0lucHV0LnZhbHVlID0gdGhpcy50b3BCb3JkZXJSYWRpdXNJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMubGVmdEJvcmRlclJhZGl1c0lucHV0LnZhbHVlID0gdGhpcy50b3BCb3JkZXJSYWRpdXNJbnB1dC52YWx1ZTtcblxuICAgICAgICAgICAgdGhpcy5yaWdodEJvcmRlclJhZGl1c1VuaXRTZWxlY3Rvci52YWx1ZSA9IHRoaXMudG9wQm9yZGVyUmFkaXVzVW5pdFNlbGVjdG9yLnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ib3R0b21Cb3JkZXJSYWRpdXNVbml0U2VsZWN0b3IudmFsdWUgPSB0aGlzLnRvcEJvcmRlclJhZGl1c1VuaXRTZWxlY3Rvci52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMubGVmdEJvcmRlclJhZGl1c1VuaXRTZWxlY3Rvci52YWx1ZSA9IHRoaXMudG9wQm9yZGVyUmFkaXVzVW5pdFNlbGVjdG9yLnZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG9wID0gYCR7dGhpcy50b3BCb3JkZXJSYWRpdXNJbnB1dC52YWx1ZX0ke3RoaXMudG9wQm9yZGVyUmFkaXVzVW5pdFNlbGVjdG9yLnZhbHVlfWA7XG4gICAgICAgICAgICByaWdodCA9IGAke3RoaXMucmlnaHRCb3JkZXJSYWRpdXNJbnB1dC52YWx1ZX0ke3RoaXMucmlnaHRCb3JkZXJSYWRpdXNVbml0U2VsZWN0b3IudmFsdWV9YDtcbiAgICAgICAgICAgIGJvdHRvbSA9IGAke3RoaXMuYm90dG9tQm9yZGVyUmFkaXVzSW5wdXQudmFsdWV9JHt0aGlzLmJvdHRvbUJvcmRlclJhZGl1c1VuaXRTZWxlY3Rvci52YWx1ZX1gO1xuICAgICAgICAgICAgbGVmdCA9IGAke3RoaXMubGVmdEJvcmRlclJhZGl1c0lucHV0LnZhbHVlfSR7dGhpcy5sZWZ0Qm9yZGVyUmFkaXVzVW5pdFNlbGVjdG9yLnZhbHVlfWA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYm9yZGVyLXJhZGl1cyddID0gW3RvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdF0uam9pbignICcpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1bmlmaWVkQm9yZGVyUHJvcGVydGllcygpIDogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGFsbEVxdWFsID0gW107XG4gICAgICAgIGFsbEVxdWFsLnB1c2godGhpcy5nZXRDdXJyZW50Qm9yZGVyU3R5bGUoKS5hbGxFcXVhbClcbiAgICAgICAgYWxsRXF1YWwucHVzaCh0aGlzLmdldEN1cnJlbnRCb3JkZXJDb2xvcigpLmFsbEVxdWFsKVxuICAgICAgICBhbGxFcXVhbC5wdXNoKHRoaXMuZ2V0Q3VycmVudEJvcmRlclJhZGl1cygpLmFsbEVxdWFsKVxuICAgICAgICBhbGxFcXVhbC5wdXNoKHRoaXMuZ2V0Q3VycmVudEJvcmRlclN0eWxlKCkuYWxsRXF1YWwpXG4gICAgICAgIGFsbEVxdWFsLnB1c2godGhpcy5nZXRDdXJyZW50Qm9yZGVyV2lkdGgoKS5hbGxFcXVhbClcblxuICAgICAgICBpZihhbGxFcXVhbC5maW5kKChlbCkgPT4gZWwgPT09IGZhbHNlKSA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEN1cnJlbnRCb3JkZXJTdHlsZSgpOiBTdHlsZXNSZXR1cm5PYmplY3RJbnRlcmZhY2Uge1xuICAgICAgICBjb25zdCB0b3AgPSB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydib3JkZXItdG9wLXN0eWxlJ107XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYm9yZGVyLXJpZ2h0LXN0eWxlJ107XG4gICAgICAgIGNvbnN0IGJvdHRvbSA9IHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2JvcmRlci1ib3R0b20tc3R5bGUnXTtcbiAgICAgICAgY29uc3QgbGVmdCA9IHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2JvcmRlci1sZWZ0LXN0eWxlJ107XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRvcDogdG9wID8gdG9wIDogJ25vbmUnLFxuICAgICAgICAgICAgcmlnaHQ6IHJpZ2h0ID8gcmlnaHQgOiAnbm9uZScsXG4gICAgICAgICAgICBib3R0b206IGJvdHRvbSA/IGJvdHRvbSA6ICdub25lJyxcbiAgICAgICAgICAgIGxlZnQ6IGxlZnQgPyBsZWZ0IDogJ25vbmUnLFxuICAgICAgICAgICAgYWxsRXF1YWw6IHRvcCA9PT0gcmlnaHQgJiYgdG9wID09PSBib3R0b20gJiYgdG9wID09PSBsZWZ0LFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0Q3VycmVudEJvcmRlckNvbG9yKCk6IFN0eWxlc1JldHVybk9iamVjdEludGVyZmFjZSB7XG4gICAgICAgIGNvbnN0IHRvcCA9IHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2JvcmRlci10b3AtY29sb3InXTtcbiAgICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydib3JkZXItcmlnaHQtY29sb3InXTtcbiAgICAgICAgY29uc3QgYm90dG9tID0gdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYm9yZGVyLWJvdHRvbS1jb2xvciddO1xuICAgICAgICBjb25zdCBsZWZ0ID0gdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYm9yZGVyLWxlZnQtY29sb3InXTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdG9wOiBjb2xvclRvSGV4KHRvcCksXG4gICAgICAgICAgICByaWdodDogY29sb3JUb0hleChyaWdodCksXG4gICAgICAgICAgICBib3R0b206IGNvbG9yVG9IZXgoYm90dG9tKSxcbiAgICAgICAgICAgIGxlZnQ6IGNvbG9yVG9IZXgobGVmdCksXG4gICAgICAgICAgICBhbGxFcXVhbDogdG9wID09PSByaWdodCAmJiB0b3AgPT09IGJvdHRvbSAmJiB0b3AgPT09IGxlZnQsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRDdXJyZW50Qm9yZGVyV2lkdGgoKTogU3R5bGVzUmV0dXJuT2JqZWN0SW50ZXJmYWNlIHtcbiAgICAgICAgY29uc3QgdG9wID0gdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYm9yZGVyLXRvcC13aWR0aCddO1xuICAgICAgICBjb25zdCByaWdodCA9IHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2JvcmRlci1yaWdodC13aWR0aCddO1xuICAgICAgICBjb25zdCBib3R0b20gPSB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydib3JkZXItYm90dG9tLXdpZHRoJ107XG4gICAgICAgIGNvbnN0IGxlZnQgPSB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydib3JkZXItbGVmdC13aWR0aCddO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0b3A6IHRvcCA/IHRvcCA6ICcwcHgnLFxuICAgICAgICAgICAgcmlnaHQ6IHJpZ2h0ID8gcmlnaHQgOiAnMHB4JyxcbiAgICAgICAgICAgIGJvdHRvbTogYm90dG9tID8gYm90dG9tIDogJzBweCcsXG4gICAgICAgICAgICBsZWZ0OiBsZWZ0ID8gbGVmdCA6ICcwcHgnLFxuICAgICAgICAgICAgYWxsRXF1YWw6IHRvcCA9PT0gcmlnaHQgJiYgdG9wID09PSBib3R0b20gJiYgdG9wID09PSBsZWZ0LFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0Q3VycmVudEJvcmRlclJhZGl1cygpOiBTdHlsZXNSZXR1cm5PYmplY3RJbnRlcmZhY2Uge1xuICAgICAgICBjb25zdCB0b3AgPSB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydib3JkZXItdG9wLWxlZnQtcmFkaXVzJ107XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMnXTtcbiAgICAgICAgY29uc3QgYm90dG9tID0gdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMnXTtcbiAgICAgICAgY29uc3QgbGVmdCA9IHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMnXTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdG9wOiB0b3AgPyB0b3AgOiAnMHB4JyxcbiAgICAgICAgICAgIHJpZ2h0OiByaWdodCA/IHJpZ2h0IDogJzBweCcsXG4gICAgICAgICAgICBib3R0b206IGJvdHRvbSA/IGJvdHRvbSA6ICcwcHgnLFxuICAgICAgICAgICAgbGVmdDogbGVmdCA/IGxlZnQgOiAnMHB4JyxcbiAgICAgICAgICAgIGFsbEVxdWFsOiB0b3AgPT09IHJpZ2h0ICYmIHRvcCA9PT0gYm90dG9tICYmIHRvcCA9PT0gbGVmdCxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xhc3NOYW1lVXBkYXRlZChuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCA9IENzc1N0eWxlU2hlZXQuZ2V0UnVsZVN0eWxlcyhuYW1lKTtcbiAgICAgICAgdGhpcy5zZWxlY3RBbGxDaGVja0JveC5jaGVja2VkID0gdGhpcy51bmlmaWVkQm9yZGVyUHJvcGVydGllcygpO1xuICAgICAgICB0aGlzLmNoYW5nZUNvbXBvbmVudHNTdGF0dXMoKTtcbiAgICAgICAgdGhpcy5zZXRCb3JkZXJWYWx1ZXNBY2NvcmRpbmdUb0NsYXNzKCk7XG4gICAgfVxufVxuXG5pbnRlcmZhY2UgU3R5bGVzUmV0dXJuT2JqZWN0SW50ZXJmYWNlIHtcbiAgICB0b3A6IHN0cmluZyxcbiAgICByaWdodDogc3RyaW5nLFxuICAgIGJvdHRvbTogc3RyaW5nLFxuICAgIGxlZnQ6IHN0cmluZyxcbiAgICBhbGxFcXVhbDogYm9vbGVhbixcbn1cbiIsImltcG9ydCBDbGFzc0NoYW5nZU9ic2VydmVySW50ZXJmYWNlIGZyb20gJy4uL2ludGVyZmFjZXMvY2xhc3MtY2hhbmdlLW9ic2VydmVyLmludGVyZmFjZSc7XG5cbmltcG9ydCBDb250YWluZXJCdWlsZGVyIGZyb20gJy4uL21vZGVscy9Db250YWluZXJCdWlsZGVyJztcbmltcG9ydCBTZWxlY3RvckZyb21FbnVtQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXInO1xuaW1wb3J0IExhYmVsQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvTGFiZWxCdWlsZGVyJztcbmltcG9ydCBJbnB1dEJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0lucHV0QnVpbGRlcic7XG5cbmltcG9ydCBDc3NTdHlsZVNoZWV0IGZyb20gJy4uLy4uL2Nzcy1zdHlsZXNoZWV0L2Nzcy1zdHlsZXNoZWV0JztcbmltcG9ydCBnZXRVbml0IGZyb20gJy4uL2Z1bmN0aW9ucy9nZXQtY3NzLXVuaXQnO1xuaW1wb3J0IGNvbG9yVG9IZXggZnJvbSAnLi4vZnVuY3Rpb25zL3JnYi10by1oZXgnO1xuaW1wb3J0IFRleHRhcmVhQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvVGV4dGFyZWFCdWlsZGVyJztcblxuaW1wb3J0IHsgU3R5bGVOYW1lRW51bSB9IGZyb20gJy4uL2VudW1zL3N0eWxlLW5hbWUuZW51bSc7XG5pbXBvcnQgeyBJbnB1dFR5cGVFbnVtIH0gZnJvbSAnLi4vZW51bXMvaW5wdXQtdHlwZS5lbnVtJztcbmltcG9ydCB7IFVuaXRzRW51bSB9IGZyb20gJy4uL2VudW1zL3VuaXRzLmVudW0nO1xuaW1wb3J0IHsgQWxpZ25GbGV4SXRlbXNFbnVtIH0gZnJvbSAnLi4vZW51bXMvYWxpZ24tZmxleC1pdGVtcy5lbnVtJztcbmltcG9ydCB7IEZsZXhEaXJlY3Rpb25FbnVtIH0gZnJvbSAnLi4vZW51bXMvZmxleC1kaXJlY3Rpb24uZW51bSc7XG5pbXBvcnQgeyBEaXNwbGF5VHlwZXNFbnVtIH0gZnJvbSAnLi4vZW51bXMvZGlzcGxheS10eXBlcy5lbnVtJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb3hTaGFkb3dDb21wb25lbnQgaW1wbGVtZW50cyBDbGFzc0NoYW5nZU9ic2VydmVySW50ZXJmYWNlIHtcbiAgICBwcml2YXRlIGRvbUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcbiAgICBwcml2YXRlIGNvbXBvbmVudHNDb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgc2hhZG93Qm94VHlwZUNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBkb21FbGVtZW50U3R5bGVTaGVldDogQ1NTU3R5bGVEZWNsYXJhdGlvbjtcblxuICAgIHByaXZhdGUgc2ltcGxlQm94U2hhZG93Q2hlY2tib3g6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBhZHZhbmNlZEJveFNoYWRvd0NoZWNrYm94OiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSBjb2xvckluc2V0Q29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcbiAgICBwcml2YXRlIGNvbG9ySW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBpbnNldFNlbGVjdG9yOiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSBob3Jpem9udGFsT2Zmc2V0Q29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcbiAgICBwcml2YXRlIGhvcml6b250YWxPZmZzZXRJbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgICBwcml2YXRlIGhvcml6b250YWxPZmZzZXRVbml0U2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSB2ZXJ0aWNhbE9mZnNldENvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSB2ZXJ0aWNhbE9mZnNldElucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHByaXZhdGUgdmVydGljYWxPZmZzZXRVbml0U2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSBibHVyUmFkaXVzQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcbiAgICBwcml2YXRlIGJsdXJSYWRpdXNJbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgICBwcml2YXRlIGJsdXJSYWRpdXNVbml0U2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSBzcHJlYWRSYWRpdXNDb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgc3ByZWFkUmFkaXVzSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBzcHJlYWRSYWRpdXNVbml0U2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSBhZHZhbmNlZEVuYWJsZWQgPSBmYWxzZTtcblxuICAgIHByaXZhdGUgYWR2YW5jZWRTaGFkb3dCb3hUZXh0QXJlYTogSFRNTFRleHRBcmVhRWxlbWVudDtcbiAgICBwcml2YXRlIGFkdmFuY2VkU2hhZG93Qm94Q29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcblxuXG4gICAgY29uc3RydWN0b3IoZG9tRWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCA9IENzc1N0eWxlU2hlZXQuZ2V0UnVsZVN0eWxlcyh0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0WzBdKTtcbiAgICAgICAgdGhpcy5nZXRJbml0aWFsVmFsdWVzKCk7XG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50cygpO1xuICAgICAgICB0aGlzLnNldEJveFNoYWRvd1ZhbHVlc0FjY29yZGluZ1RvQ2xhc3MoKTtcbiAgICB9XG5cbiAgICBnZXQgY29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRDb21wb25lbnRzKCkge1xuICAgICAgICB0aGlzLmJ1aWxkU2hhZG93Qm94VHlwZUNvbnRhaW5lcigpO1xuICAgICAgICB0aGlzLmJ1aWxkQmFzaWNTaGFkb3dCb3hDb250YWluZXJzKCk7XG4gICAgICAgIHRoaXMuYnVpbGRBZHZhbmNlZFNoYWRvd0JveENvbnRhaW5lcigpO1xuICAgICAgICB0aGlzLmJ1aWxkQ29tcG9uZW50c0NvbnRhaW5lcigpO1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuY29tcG9uZW50c0NvbnRhaW5lcilcbiAgICAgICAgICAgIC5idWlsZCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYnVpbGRTaGFkb3dCb3hUeXBlQ29udGFpbmVyKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZUJveFNoYWRvd1R5cGUgPSB0aGlzLnVwZGF0ZUJveFNoYWRvd1R5cGUuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnNpbXBsZUJveFNoYWRvd0NoZWNrYm94ID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLnJhZGlvKVxuICAgICAgICAgICAgLnNldE5hbWUoJ3NoYWRvd1R5cGUnKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudXBkYXRlQm94U2hhZG93VHlwZSlcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgdGhpcy5hZHZhbmNlZEJveFNoYWRvd0NoZWNrYm94ID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLnJhZGlvKVxuICAgICAgICAgICAgLnNldE5hbWUoJ3NoYWRvd1R5cGUnKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudXBkYXRlQm94U2hhZG93VHlwZSlcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgaWYgKHRoaXMuYWR2YW5jZWRFbmFibGVkKSB7XG4gICAgICAgICAgICB0aGlzLmFkdmFuY2VkQm94U2hhZG93Q2hlY2tib3guY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNpbXBsZUJveFNoYWRvd0NoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zaGFkb3dCb3hUeXBlQ29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW1bJ2ZsZXgtZGlyZWN0aW9uJ10sIEZsZXhEaXJlY3Rpb25FbnVtLmNvbHVtbilcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydhbGlnbi1pdGVtcyddLCBBbGlnbkZsZXhJdGVtc0VudW0uc3RyZXRjaClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnU2ltcGxlIG9yIEFkdmFuY2VkIFNoYWRvdyBCb3gnKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnU2ltcGxlIC0+JylcbiAgICAgICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDNweCAwcHggMjBweCcpXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLnNpbXBsZUJveFNoYWRvd0NoZWNrYm94KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnQWR2YW5jZWQgLT4nKVxuICAgICAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggM3B4IDBweCAyMHB4JylcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuYWR2YW5jZWRCb3hTaGFkb3dDaGVja2JveClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICB9XG5cbiAgICBwcml2YXRlIGJ1aWxkQmFzaWNTaGFkb3dCb3hDb250YWluZXJzKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZUJhc2ljUHJvcGVydHkgPSB0aGlzLnVwZGF0ZUJhc2ljUHJvcGVydHkuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmNvbG9ySW5wdXQgPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0uY29sb3IpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLnVwZGF0ZUJhc2ljUHJvcGVydHkpXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIHRoaXMuaW5zZXRTZWxlY3RvciA9IG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS5jaGVja2JveClcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMudXBkYXRlQmFzaWNQcm9wZXJ0eSlcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgdGhpcy5ob3Jpem9udGFsT2Zmc2V0SW5wdXQgPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0ubnVtYmVyKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy51cGRhdGVCYXNpY1Byb3BlcnR5KVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICB0aGlzLmhvcml6b250YWxPZmZzZXRVbml0U2VsZWN0b3IgPSBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIoVW5pdHNFbnVtKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudXBkYXRlQmFzaWNQcm9wZXJ0eSlcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgdGhpcy52ZXJ0aWNhbE9mZnNldElucHV0ID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLm51bWJlcilcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMudXBkYXRlQmFzaWNQcm9wZXJ0eSlcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgdGhpcy52ZXJ0aWNhbE9mZnNldFVuaXRTZWxlY3RvciA9IG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihVbml0c0VudW0pXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVCYXNpY1Byb3BlcnR5KVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICB0aGlzLmJsdXJSYWRpdXNJbnB1dCA9IG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS5udW1iZXIpXG4gICAgICAgICAgICAuc2V0TWluKDApXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLnVwZGF0ZUJhc2ljUHJvcGVydHkpXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIHRoaXMuYmx1clJhZGl1c1VuaXRTZWxlY3RvciA9IG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihVbml0c0VudW0pXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVCYXNpY1Byb3BlcnR5KVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICB0aGlzLnNwcmVhZFJhZGl1c0lucHV0ID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLm51bWJlcilcbiAgICAgICAgICAgIC5zZXRNaW4oMClcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMudXBkYXRlQmFzaWNQcm9wZXJ0eSlcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgdGhpcy5zcHJlYWRSYWRpdXNVbml0U2VsZWN0b3IgPSBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIoVW5pdHNFbnVtKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudXBkYXRlQmFzaWNQcm9wZXJ0eSlcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgdGhpcy5jb2xvckluc2V0Q29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW1bJ2ZsZXgtZGlyZWN0aW9uJ10sIEZsZXhEaXJlY3Rpb25FbnVtLmNvbHVtbilcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydhbGlnbi1pdGVtcyddLCBBbGlnbkZsZXhJdGVtc0VudW0uc3RyZXRjaClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnSG9yaXpvbnRhbCBPZmZzZXQnKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmNvbG9ySW5wdXQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdJbnNldCAtPicpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAzcHggMHB4IDIwcHgnKVxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5pbnNldFNlbGVjdG9yKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIHRoaXMuaG9yaXpvbnRhbE9mZnNldENvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydmbGV4LWRpcmVjdGlvbiddLCBGbGV4RGlyZWN0aW9uRW51bS5jb2x1bW4pXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnYWxpZ24taXRlbXMnXSwgQWxpZ25GbGV4SXRlbXNFbnVtLnN0cmV0Y2gpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0hvcml6b250YWwgT2Zmc2V0JylcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5ob3Jpem9udGFsT2Zmc2V0SW5wdXQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuaG9yaXpvbnRhbE9mZnNldFVuaXRTZWxlY3RvcilcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICB0aGlzLnZlcnRpY2FsT2Zmc2V0Q29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW1bJ2ZsZXgtZGlyZWN0aW9uJ10sIEZsZXhEaXJlY3Rpb25FbnVtLmNvbHVtbilcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydhbGlnbi1pdGVtcyddLCBBbGlnbkZsZXhJdGVtc0VudW0uc3RyZXRjaClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnVmVydGljYWwgT2Zmc2V0JylcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy52ZXJ0aWNhbE9mZnNldElucHV0KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLnZlcnRpY2FsT2Zmc2V0VW5pdFNlbGVjdG9yKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIHRoaXMuYmx1clJhZGl1c0NvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydmbGV4LWRpcmVjdGlvbiddLCBGbGV4RGlyZWN0aW9uRW51bS5jb2x1bW4pXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnYWxpZ24taXRlbXMnXSwgQWxpZ25GbGV4SXRlbXNFbnVtLnN0cmV0Y2gpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0JsdXIgUmFkaXVzJylcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5ibHVyUmFkaXVzSW5wdXQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuYmx1clJhZGl1c1VuaXRTZWxlY3RvcilcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICB0aGlzLnNwcmVhZFJhZGl1c0NvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydmbGV4LWRpcmVjdGlvbiddLCBGbGV4RGlyZWN0aW9uRW51bS5jb2x1bW4pXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnYWxpZ24taXRlbXMnXSwgQWxpZ25GbGV4SXRlbXNFbnVtLnN0cmV0Y2gpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ1NwcmVhZCBSYWRpdXMnKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLnNwcmVhZFJhZGl1c0lucHV0KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLnNwcmVhZFJhZGl1c1VuaXRTZWxlY3RvcilcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICB9XG5cbiAgICBwcml2YXRlIGJ1aWxkQ29tcG9uZW50c0NvbnRhaW5lcigpIHtcbiAgICAgICAgaWYgKHRoaXMuYWR2YW5jZWRFbmFibGVkKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNDb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydmbGV4LWRpcmVjdGlvbiddLCBGbGV4RGlyZWN0aW9uRW51bS5jb2x1bW4pXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW1bJ2FsaWduLWl0ZW1zJ10sIEFsaWduRmxleEl0ZW1zRW51bS5zdHJldGNoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmJvcmRlciwgJzFweCBzb2xpZCAjNENBRjUwJylcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5wYWRkaW5nLCAnM3B4JylcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnQm94IFNoYWRvdycpXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLnNoYWRvd0JveFR5cGVDb250YWluZXIpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuYWR2YW5jZWRTaGFkb3dCb3hDb250YWluZXIpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c0NvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW1bJ2ZsZXgtZGlyZWN0aW9uJ10sIEZsZXhEaXJlY3Rpb25FbnVtLmNvbHVtbilcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnYWxpZ24taXRlbXMnXSwgQWxpZ25GbGV4SXRlbXNFbnVtLnN0cmV0Y2gpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uYm9yZGVyLCAnMXB4IHNvbGlkICM0Q0FGNTAnKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLnBhZGRpbmcsICczcHgnKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdCb3ggU2hhZG93JylcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuc2hhZG93Qm94VHlwZUNvbnRhaW5lcilcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5jb2xvckluc2V0Q29udGFpbmVyKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmhvcml6b250YWxPZmZzZXRDb250YWluZXIpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMudmVydGljYWxPZmZzZXRDb250YWluZXIpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuYmx1clJhZGl1c0NvbnRhaW5lcilcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5zcHJlYWRSYWRpdXNDb250YWluZXIpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgYnVpbGRBZHZhbmNlZFNoYWRvd0JveENvbnRhaW5lcigpIHtcbiAgICAgICAgdGhpcy51cGRhdGVBZHZhbmNlZFByb3BlcnR5ID0gdGhpcy51cGRhdGVBZHZhbmNlZFByb3BlcnR5LmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5hZHZhbmNlZFNoYWRvd0JveFRleHRBcmVhID0gbmV3IFRleHRhcmVhQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5yZXNpemUsICd2ZXJ0aWNhbCcpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLnVwZGF0ZUFkdmFuY2VkUHJvcGVydHkpXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIHRoaXMuYWR2YW5jZWRTaGFkb3dCb3hDb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnZmxleC1kaXJlY3Rpb24nXSwgRmxleERpcmVjdGlvbkVudW0uY29sdW1uKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW1bJ2FsaWduLWl0ZW1zJ10sIEFsaWduRmxleEl0ZW1zRW51bS5zdHJldGNoKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdBZHZhbmNlZCBCb3ggU2hhZG93JylcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW1bJ2ZsZXgtZGlyZWN0aW9uJ10sIEZsZXhEaXJlY3Rpb25FbnVtLmNvbHVtbilcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnYWxpZ24taXRlbXMnXSwgQWxpZ25GbGV4SXRlbXNFbnVtLnN0cmV0Y2gpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuYWR2YW5jZWRTaGFkb3dCb3hUZXh0QXJlYSlcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEJveFNoYWRvd1ZhbHVlc0FjY29yZGluZ1RvQ2xhc3MoKSB7XG4gICAgICAgIGNvbnN0IGluaXRpYWxWYWx1ZXMgPSB0aGlzLmdldEluaXRpYWxWYWx1ZXMoKTtcblxuICAgICAgICBpZiAoaW5pdGlhbFZhbHVlcy5pbnNldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmluc2V0U2VsZWN0b3IuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbG9ySW5wdXQudmFsdWUgPSBjb2xvclRvSGV4KGluaXRpYWxWYWx1ZXMuY29sb3IpO1xuICAgICAgICB0aGlzLmhvcml6b250YWxPZmZzZXRJbnB1dC52YWx1ZSA9IGAke3BhcnNlSW50KGluaXRpYWxWYWx1ZXMuaG9yaXpvbnRhbE9mZnNldCkgfHwgMH1gO1xuICAgICAgICB0aGlzLmhvcml6b250YWxPZmZzZXRVbml0U2VsZWN0b3IudmFsdWUgPSBnZXRVbml0KGluaXRpYWxWYWx1ZXMuaG9yaXpvbnRhbE9mZnNldCk7XG4gICAgICAgIHRoaXMudmVydGljYWxPZmZzZXRJbnB1dC52YWx1ZSA9IGAke3BhcnNlSW50KGluaXRpYWxWYWx1ZXMudmVydGljYWxPZmZzZXQpIHx8IDB9YDtcbiAgICAgICAgdGhpcy52ZXJ0aWNhbE9mZnNldFVuaXRTZWxlY3Rvci52YWx1ZSA9IGdldFVuaXQoaW5pdGlhbFZhbHVlcy52ZXJ0aWNhbE9mZnNldCk7XG4gICAgICAgIHRoaXMuYmx1clJhZGl1c0lucHV0LnZhbHVlID0gYCR7cGFyc2VJbnQoaW5pdGlhbFZhbHVlcy5ibHVyUmFkaXVzKSB8fCAwfWA7XG4gICAgICAgIHRoaXMuYmx1clJhZGl1c1VuaXRTZWxlY3Rvci52YWx1ZSA9IGdldFVuaXQoaW5pdGlhbFZhbHVlcy5ibHVyUmFkaXVzKTtcbiAgICAgICAgdGhpcy5zcHJlYWRSYWRpdXNJbnB1dC52YWx1ZSA9IGAke3BhcnNlSW50KGluaXRpYWxWYWx1ZXMuc3ByZWFkUmFkaXVzKSB8fCAwfWA7XG4gICAgICAgIHRoaXMuc3ByZWFkUmFkaXVzVW5pdFNlbGVjdG9yLnZhbHVlID0gZ2V0VW5pdChpbml0aWFsVmFsdWVzLnNwcmVhZFJhZGl1cyk7XG5cbiAgICAgICAgdGhpcy5hZHZhbmNlZFNoYWRvd0JveFRleHRBcmVhLnZhbHVlID0gdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYm94LXNoYWRvdyddO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlQmFzaWNQcm9wZXJ0eSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaG9yaXpvbnRhbE9mZnNldElucHV0LnZhbHVlID09PSAnMCdcbiAgICAgICAgICAgICYmIHRoaXMudmVydGljYWxPZmZzZXRJbnB1dC52YWx1ZSA9PT0gJzAnXG4gICAgICAgICAgICAmJiB0aGlzLmJsdXJSYWRpdXNJbnB1dC52YWx1ZSA9PT0gJzAnXG4gICAgICAgICAgICAmJiB0aGlzLnNwcmVhZFJhZGl1c0lucHV0LnZhbHVlID09PSAnMCdcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydib3gtc2hhZG93J10gPSAnJztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGluc2V0ID0gdGhpcy5pbnNldFNlbGVjdG9yLmNoZWNrZWQgPyAnaW5zZXQnIDogJyc7XG4gICAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5jb2xvcklucHV0LnZhbHVlO1xuICAgICAgICBjb25zdCBob3Jpem9udGFsT2Zmc2V0ID0gdGhpcy5ob3Jpem9udGFsT2Zmc2V0SW5wdXQudmFsdWUgKyB0aGlzLmhvcml6b250YWxPZmZzZXRVbml0U2VsZWN0b3IudmFsdWU7XG4gICAgICAgIGNvbnN0IHZlcnRpY2FsT2Zmc2V0ID0gdGhpcy52ZXJ0aWNhbE9mZnNldElucHV0LnZhbHVlICsgdGhpcy52ZXJ0aWNhbE9mZnNldFVuaXRTZWxlY3Rvci52YWx1ZTtcbiAgICAgICAgY29uc3QgYmx1clJhZGl1cyA9IHRoaXMuYmx1clJhZGl1c0lucHV0LnZhbHVlICsgdGhpcy5ibHVyUmFkaXVzVW5pdFNlbGVjdG9yLnZhbHVlO1xuICAgICAgICBjb25zdCBzcHJlYWRSYWRpdXMgPSB0aGlzLnNwcmVhZFJhZGl1c0lucHV0LnZhbHVlICsgdGhpcy5zcHJlYWRSYWRpdXNVbml0U2VsZWN0b3IudmFsdWU7XG5cbiAgICAgICAgY29uc3QgYm94U2hhZG93VmFsdWUgPSBgJHtob3Jpem9udGFsT2Zmc2V0fSAke3ZlcnRpY2FsT2Zmc2V0fSAke2JsdXJSYWRpdXN9ICR7c3ByZWFkUmFkaXVzfSAke2NvbG9yfSAke2luc2V0fWBcblxuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydib3gtc2hhZG93J10gPSBib3hTaGFkb3dWYWx1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUFkdmFuY2VkUHJvcGVydHkoKSB7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2JveC1zaGFkb3cnXSA9IHRoaXMuYWR2YW5jZWRTaGFkb3dCb3hUZXh0QXJlYS52YWx1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUJveFNoYWRvd1R5cGUoKSB7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2JveC1zaGFkb3cnXSA9ICcnO1xuXG4gICAgICAgIGlmICh0aGlzLmFkdmFuY2VkQm94U2hhZG93Q2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuY29sb3JJbnNldENvbnRhaW5lcik7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNDb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5ob3Jpem9udGFsT2Zmc2V0Q29udGFpbmVyKTtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c0NvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLnZlcnRpY2FsT2Zmc2V0Q29udGFpbmVyKTtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c0NvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLmJsdXJSYWRpdXNDb250YWluZXIpO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuc3ByZWFkUmFkaXVzQ29udGFpbmVyKTtcblxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuYWR2YW5jZWRTaGFkb3dCb3hDb250YWluZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuYWR2YW5jZWRTaGFkb3dCb3hDb250YWluZXIpO1xuXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb2xvckluc2V0Q29udGFpbmVyKTtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmhvcml6b250YWxPZmZzZXRDb250YWluZXIpO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudmVydGljYWxPZmZzZXRDb250YWluZXIpO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuYmx1clJhZGl1c0NvbnRhaW5lcik7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5zcHJlYWRSYWRpdXNDb250YWluZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRJbml0aWFsVmFsdWVzKCkge1xuICAgICAgICBsZXQgYm94U2hhZG93U3RyaW5nID0gdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYm94LXNoYWRvdyddO1xuXG4gICAgICAgIGxldCBjb2xvciwgaW5zZXQ7XG4gICAgICAgIGxldCBzaXplc0FyciA9IFtdO1xuXG4gICAgICAgIGlmIChib3hTaGFkb3dTdHJpbmcpIHtcbiAgICAgICAgICAgIGlmIChib3hTaGFkb3dTdHJpbmcuc3BsaXQoJywnKS5maWx0ZXIoKGVsZSkgPT4gZWxlLmluY2x1ZGVzKCdyZ2InKSkubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWR2YW5jZWRFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGJveFNoYWRvd1N0cmluZy5zcGxpdCgnLCcpLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZHZhbmNlZEVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGJveFNoYWRvd1N0cmluZy5pbmNsdWRlcygncmdiJykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbml0aWFsSW5kZXhPZlJHQiA9IGJveFNoYWRvd1N0cmluZy5pbmRleE9mKCdyZ2InKTtcbiAgICAgICAgICAgICAgICBjb25zdCBmaW5hbEluZGV4T2ZSR0IgPSBib3hTaGFkb3dTdHJpbmcuaW5kZXhPZignKScpXG5cbiAgICAgICAgICAgICAgICBjb2xvciA9IGJveFNoYWRvd1N0cmluZy5zbGljZShpbml0aWFsSW5kZXhPZlJHQiwgZmluYWxJbmRleE9mUkdCICsgMSlcblxuICAgICAgICAgICAgICAgIGJveFNoYWRvd1N0cmluZyA9IGJveFNoYWRvd1N0cmluZy5yZXBsYWNlKGNvbG9yLCAnJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGJveFNoYWRvd0FyciA9IGJveFNoYWRvd1N0cmluZy5zcGxpdCgnICcpO1xuXG4gICAgICAgICAgICBpbnNldCA9IGJveFNoYWRvd0Fyci5maW5kKChlbGUpID0+IGVsZSA9PT0gJ2luc2V0JylcblxuICAgICAgICAgICAgc2l6ZXNBcnIgPSBib3hTaGFkb3dBcnIuZmlsdGVyKChlbGUpID0+ICFpc05hTihwYXJzZUludChlbGUpKSk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgIGluc2V0LFxuICAgICAgICAgICAgaG9yaXpvbnRhbE9mZnNldDogc2l6ZXNBcnJbMF0sXG4gICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldDogc2l6ZXNBcnJbMV0sXG4gICAgICAgICAgICBibHVyUmFkaXVzOiBzaXplc0FyclsyXSxcbiAgICAgICAgICAgIHNwcmVhZFJhZGl1czogc2l6ZXNBcnJbM10sXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgY2xhc3NOYW1lVXBkYXRlZChuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCA9IENzc1N0eWxlU2hlZXQuZ2V0UnVsZVN0eWxlcyhuYW1lKTtcbiAgICAgICAgdGhpcy5nZXRJbml0aWFsVmFsdWVzKCk7XG4gICAgICAgIHRoaXMuc2V0Qm94U2hhZG93VmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpO1xuICAgIH1cbn1cbiIsImltcG9ydCBBcnJheVNlbGVjdG9yQm9keUludGVyZmFjZSBmcm9tICcuLi9pbnRlcmZhY2VzL3NlbGVjdG9yLWZyb20tYXJyYXktYm9keS5pbnRlcmZhY2UnO1xuXG5pbXBvcnQgQ2xhc3NDaGFuZ2VQdWJsaXNoZXIgZnJvbSAnLi4vcHVibGlzaGVycy9DbGFzc0NoYW5nZVB1Ymxpc2hlcic7XG5pbXBvcnQgQ3NzU3R5bGVTaGVldCBmcm9tICcuLi8uLi9jc3Mtc3R5bGVzaGVldC9jc3Mtc3R5bGVzaGVldCc7XG5pbXBvcnQgUmF3SFRNTENvbnBvbmVudCBmcm9tICcuLi8uLi9odG1sLWNvbXBvbmVudHMvUmF3SFRNTENvbXBvbmVudCc7XG5cbmltcG9ydCBDb250YWluZXJCdWlsZGVyIGZyb20gJy4uL21vZGVscy9Db250YWluZXJCdWlsZGVyJztcbmltcG9ydCBMYWJlbEJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0xhYmVsQnVpbGRlcic7XG5pbXBvcnQgU2VsZWN0b3JGcm9tQXJyYXlCdWlsZGVyIGZyb20gJy4uL21vZGVscy9TZWxlY3RvckZyb21BcnJheUJ1aWxkZXInO1xuaW1wb3J0IElucHV0QnVpbGRlciBmcm9tICcuLi9tb2RlbHMvSW5wdXRCdWlsZGVyJztcbmltcG9ydCBCdXR0b25CdWlsZGVyIGZyb20gJy4uL21vZGVscy9CdXR0b25CdWlsZGVyJztcbmltcG9ydCBTZWxlY3RvckZyb21FbnVtQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXInO1xuaW1wb3J0IFRleHRhcmVhQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvVGV4dGFyZWFCdWlsZGVyJztcblxuaW1wb3J0IHsgU3R5bGVOYW1lRW51bSB9IGZyb20gJy4uL2VudW1zL3N0eWxlLW5hbWUuZW51bSc7XG5pbXBvcnQgeyBEaXNwbGF5VHlwZXNFbnVtIH0gZnJvbSAnLi4vZW51bXMvZGlzcGxheS10eXBlcy5lbnVtJztcbmltcG9ydCB7IEZsZXhEaXJlY3Rpb25FbnVtIH0gZnJvbSAnLi4vZW51bXMvZmxleC1kaXJlY3Rpb24uZW51bSc7XG5pbXBvcnQgeyBJbnB1dFR5cGVFbnVtIH0gZnJvbSAnLi4vZW51bXMvaW5wdXQtdHlwZS5lbnVtJztcbmltcG9ydCB7IEdlbmVyYWxQc2V1ZG9jbGFzc0VudW0gfSBmcm9tICcuLi9lbnVtcy9nZW5lcmFsLXBzZXVkb2NsYXNzLmVudW0nO1xuXG4vLyBUT0RPOiB2ZXIgZXN0aWxvcyBlc3BlY2lmaWNvcyBwYXJhIGxvcyBhbmNvciBlbGVtZW50cyAobGlua3MpOlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cbi8vIGh0dHBzOi8vd3d3LmFwcmVuZGVyYXByb2dyYW1hci5jb20vaW5kZXgucGhwP29wdGlvbj1jb21fY29udGVudCZ2aWV3PWFydGljbGUmaWQ9NzUyOnBzZXVkb2NsYXNlcy1jc3MtbGluay12aXNpdGVkLWZvY3VzLWhvdmVyLXktYWN0aXZlLWVzdGlsb3MteS1lZmVjdG9zLWVuLWxpbmtzLXByb3BpZWRhZC1vdXRsaW5lLWN1MDEwNDdkJmNhdGlkPTc1Jkl0ZW1pZD0yMDNcblxuLy8gVE9ETzogZmFsdGEgZWwgZGVsZXRlIGNsYXNzIGRlZmluZXRseS4gRXMgZGVjaXIsIGVsaW1pbmFyIHVuYSBjbGFzZSBkZWwgQ1NTLlxuLy8gRXN0byBkZWJlcmlhIGVsaW1pbmFybGEgZGUgdG9kb3MgbG9zIGNvbXBvbmVudGVzIHF1ZSBsYSB1dGlsaXphbi4uLlxuXG4vLyBUT0RPOiBtZWpvcmFyIGVzdGlsb3MgZGUgbG9zIGJvdG9uZXMsIGlucHV0LCBldGMuLi5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xhc3NNYW5hZ2VtZW50Q29tcG9uZW50IHtcbiAgICBwcml2YXRlIGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBkb21FbGVtZW50OiBIVE1MRWxlbWVudDtcblxuICAgIHByaXZhdGUgY2xhc3NOYW1lczogQXJyYXlTZWxlY3RvckJvZHlJbnRlcmZhY2VbXTtcbiAgICBwcml2YXRlIGFwcGVuZGFibGVDbGFzc05hbWVzOiBBcnJheVNlbGVjdG9yQm9keUludGVyZmFjZVtdO1xuICAgIHByaXZhdGUgY2xhc3Nlc1NlbGVjdG9yOiBIVE1MU2VsZWN0RWxlbWVudDtcbiAgICBwcml2YXRlIGluaXRpYWxDbGFzc05hbWU6IHN0cmluZztcblxuICAgIHByaXZhdGUgbmV3Q2xhc3NOYW1lSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBuZXdQc2V1ZG9jbGFzc1NlbGVjdG9yOiBIVE1MU2VsZWN0RWxlbWVudDtcbiAgICBwcml2YXRlIGR1cGxpY2FibGVDbGFzc1NlbGVjdG9yOiBIVE1MU2VsZWN0RWxlbWVudDtcbiAgICBwcml2YXRlIGFwcGVuZENsYXNzU2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIHByaXZhdGUgcmVuYW1lQ2xhc3NJbnB1dDogSFRNTElucHV0RWxlbWVudDtcblxuICAgIHByaXZhdGUgZHVwbGljYWJsZUNsYXNzTmFtZXM6IEFycmF5U2VsZWN0b3JCb2R5SW50ZXJmYWNlW107XG4gICAgcHJpdmF0ZSBuZXdEdXBsaWNhZGVkQ2xhc3NOYW1lSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBkdXBsaWNhdGVQc2V1ZG9jbGFzc1NlbGVjdG9yOiBIVE1MU2VsZWN0RWxlbWVudDtcblxuICAgIHByaXZhdGUgY2xhc3Nlc1NlbGVjdG9yQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcbiAgICBwcml2YXRlIGFwcGVuZENsYXNzQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcblxuICAgIHByaXZhdGUgcmF3Q2xhc3NUZXh0RWRpdG9yOiBUZXh0YXJlYUJ1aWxkZXI7XG5cbiAgICBwcml2YXRlIHB1Ymxpc2hlcjogQ2xhc3NDaGFuZ2VQdWJsaXNoZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgZG9tRWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgICAgIHB1Ymxpc2hlcjogQ2xhc3NDaGFuZ2VQdWJsaXNoZXJcbiAgICApIHtcbiAgICAgICAgdGhpcy5wdWJsaXNoZXIgPSBwdWJsaXNoZXI7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuaW5pdGlhbENsYXNzTmFtZSA9IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3RbMF07XG4gICAgICAgIHRoaXMucG9wdWxhdGVDbGFzc2VzTGlzdCgpO1xuICAgICAgICB0aGlzLnBvcHVsYXRlQXBwZW5kYWJsZUNsYXNzTGlzdCgpO1xuICAgICAgICB0aGlzLnBvcHVsYXRlRHVwbGljYWJsZUNsYXNzTGlzdCgpO1xuXG4gICAgICAgIHRoaXMuYnVpbGRSYXdDbGFzc1RleHRFZGl0b3IoKTtcbiAgICAgICAgdGhpcy5wb3B1bGF0ZVJhd0NsYXNzVGV4dEVkaXRvcih0aGlzLmluaXRpYWxDbGFzc05hbWUpO1xuXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50cygpO1xuICAgIH1cblxuICAgIGdldCBjb21wb25lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGJ1aWxkUmF3Q2xhc3NUZXh0RWRpdG9yKCkge1xuICAgICAgICB0aGlzLnJhd0NsYXNzVGV4dEVkaXRvciA9IG5ldyBUZXh0YXJlYUJ1aWxkZXIoKVxuICAgIH1cblxuICAgIHByaXZhdGUgcG9wdWxhdGVSYXdDbGFzc1RleHRFZGl0b3IoY2xhc3NOYW1lKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IENzc1N0eWxlU2hlZXQuZ2V0UnVsZXMoY2xhc3NOYW1lKS5tYXAoKHJ1bGUpID0+IHJ1bGUuY3NzVGV4dCkuam9pbignXFxuJyk7XG5cbiAgICAgICAgbGV0IG1vZGlmaWVkVmFsdWVzID0gJyc7XG5cbiAgICAgICAgZm9yIChjb25zdCBjaGFyIG9mIHZhbHVlcykge1xuICAgICAgICAgICAgaWYgKGNoYXIgPT09ICd7JyB8fCBjaGFyID09PSAnOycgfHwgY2hhciA9PT0gJ30nKSB7XG4gICAgICAgICAgICAgICAgbW9kaWZpZWRWYWx1ZXMgKz0gYCR7Y2hhcn1cXG4gYDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbW9kaWZpZWRWYWx1ZXMgKz0gY2hhcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmF3Q2xhc3NUZXh0RWRpdG9yXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5oZWlnaHQsICcxMDBweCcpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnZm9udC1zaXplJ10sICcxMHB4JylcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydyZXNpemUnXSwgJ3ZlcnRpY2FsJylcbiAgICAgICAgICAgIC5zZXRWYWx1ZShtb2RpZmllZFZhbHVlcylcbiAgICB9XG5cbiAgICBwcml2YXRlIHBvcHVsYXRlQ2xhc3Nlc0xpc3QoKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBbXVxuXG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuZm9yRWFjaCgoY2xhc3NFbGVtZW50TmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcnVsZXMgPSBDc3NTdHlsZVNoZWV0LmdldFJ1bGVzKGNsYXNzRWxlbWVudE5hbWUpO1xuXG4gICAgICAgICAgICBydWxlcy5mb3JFYWNoKChydWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBydWxlWydzZWxlY3RvclRleHQnXVxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGlmIChydWxlTmFtZVswXSA9PT0gJy4nIHx8IHJ1bGVOYW1lWzBdID09PSAnIycpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBydWxlTmFtZS5zdWJzdHJpbmcoMSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjbGFzc05hbWVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBydWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwb3B1bGF0ZUR1cGxpY2FibGVDbGFzc0xpc3QoKSB7XG4gICAgICAgIGNvbnN0IGR1cGxpY2FibGVDbGFzc05hbWVzID0gW11cblxuICAgICAgICBjb25zdCBydWxlcyA9IENzc1N0eWxlU2hlZXQuZ2V0QWxsUnVsZXMoKTtcblxuICAgICAgICBydWxlcy5mb3JFYWNoKChydWxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGVbJ3NlbGVjdG9yVGV4dCddXG4gICAgICAgICAgICBsZXQgdmFsdWU6IHN0cmluZztcbiAgICAgICAgICAgIGlmIChydWxlTmFtZVswXSA9PT0gJy4nIHx8IHJ1bGVOYW1lWzBdID09PSAnIycpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHJ1bGVOYW1lLnN1YnN0cmluZygxKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodmFsdWUgIT09ICdib2R5Jykge1xuICAgICAgICAgICAgICAgIGR1cGxpY2FibGVDbGFzc05hbWVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBydWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmR1cGxpY2FibGVDbGFzc05hbWVzID0gZHVwbGljYWJsZUNsYXNzTmFtZXM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwb3B1bGF0ZUFwcGVuZGFibGVDbGFzc0xpc3QoKSB7XG4gICAgICAgIGNvbnN0IGFwcGVuZGFibGVDbGFzc05hbWVzID0gW11cblxuICAgICAgICBjb25zdCBydWxlcyA9IENzc1N0eWxlU2hlZXQuZ2V0QWxsUnVsZXMoKTtcblxuICAgICAgICBydWxlcy5mb3JFYWNoKChydWxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGVbJ3NlbGVjdG9yVGV4dCddXG4gICAgICAgICAgICBsZXQgdmFsdWU6IHN0cmluZztcbiAgICAgICAgICAgIGlmIChydWxlTmFtZVswXSA9PT0gJy4nIHx8IHJ1bGVOYW1lWzBdID09PSAnIycpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHJ1bGVOYW1lLnN1YnN0cmluZygxKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodmFsdWUgIT09ICdib2R5JyAmJiAhdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBhcHBlbmRhYmxlQ2xhc3NOYW1lcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogcnVsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5hcHBlbmRhYmxlQ2xhc3NOYW1lcyA9IGFwcGVuZGFibGVDbGFzc05hbWVzO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkQ29tcG9uZW50cygpIHtcbiAgICAgICAgdGhpcy51cGRhdGVDbGFzc05hbWUgPSB0aGlzLnVwZGF0ZUNsYXNzTmFtZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNyZWF0ZU5ld0NsYXNzTmFtZSA9IHRoaXMuY3JlYXRlTmV3Q2xhc3NOYW1lLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVtb3ZlQ2xhc3MgPSB0aGlzLnJlbW92ZUNsYXNzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY2hhbmdlQ2xhc3NOYW1lID0gdGhpcy5jaGFuZ2VDbGFzc05hbWUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hcHBlbmRDbGFzcyA9IHRoaXMuYXBwZW5kQ2xhc3MuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kdXBsaWNhdGVDbGFzcyA9IHRoaXMuZHVwbGljYXRlQ2xhc3MuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VGdWxsQ2xhc3MgPSB0aGlzLmNoYW5nZUZ1bGxDbGFzcy5iaW5kKHRoaXMpO1xuXG4gICAgICAgIC8vIENsYXNzIHNlbGVjdG9yIGFuZCByZW1vdmUgY2xhc3NcbiAgICAgICAgdGhpcy5jbGFzc2VzU2VsZWN0b3IgPSBuZXcgU2VsZWN0b3JGcm9tQXJyYXlCdWlsZGVyKHRoaXMuY2xhc3NOYW1lcylcbiAgICAgICAgICAgIC5zZWxlY3RPcHRpb24odGhpcy5pbml0aWFsQ2xhc3NOYW1lKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudXBkYXRlQ2xhc3NOYW1lKVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICBjb25zdCByZW1vdmVDbGFzc0J1dHRvbiA9IG5ldyBCdXR0b25CdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ1JlbW92ZScpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJlbW92ZUNsYXNzKVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG5cbiAgICAgICAgdGhpcy5jbGFzc2VzU2VsZWN0b3JDb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnZmxleC1kaXJlY3Rpb24nXSwgRmxleERpcmVjdGlvbkVudW0uY29sdW1uKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuY2xhc3Nlc1NlbGVjdG9yKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChyZW1vdmVDbGFzc0J1dHRvbilcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG5cbiAgICAgICAgLy8gUmVuYW1lIENsYXNzXG4gICAgICAgIHRoaXMucmVuYW1lQ2xhc3NJbnB1dCA9IG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS50ZXh0KVxuICAgICAgICAgICAgLnNldFBsYWNlaG9sZGVyKCdOZXcgY2xhc3MgbmFtZScpXG4gICAgICAgICAgICAuYnVpbGQoKTtcblxuICAgICAgICBjb25zdCByZW5hbWVDbGFzc0J1dHRvbiA9IG5ldyBCdXR0b25CdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0NoYW5nZScpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNoYW5nZUNsYXNzTmFtZSlcbiAgICAgICAgICAgIC5idWlsZCgpO1xuXG4gICAgICAgIGNvbnN0IHJlbmFtZUNsYXNzQ29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW1bJ2ZsZXgtZGlyZWN0aW9uJ10sIEZsZXhEaXJlY3Rpb25FbnVtLmNvbHVtbilcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnQ2hhbmdlIENsYXNzIE5hbWUnKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnZmxleC1kaXJlY3Rpb24nXSwgRmxleERpcmVjdGlvbkVudW0ucm93KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLnJlbmFtZUNsYXNzSW5wdXQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHJlbmFtZUNsYXNzQnV0dG9uKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYnVpbGQoKTtcblxuICAgICAgICAvLyBDcmVhdGUgQ2xhc3NcbiAgICAgICAgdGhpcy5uZXdDbGFzc05hbWVJbnB1dCA9IG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS50ZXh0KVxuICAgICAgICAgICAgLnNldFBsYWNlaG9sZGVyKCdDbGFzcyBuYW1lJylcbiAgICAgICAgICAgIC5idWlsZCgpO1xuXG4gICAgICAgIHRoaXMubmV3UHNldWRvY2xhc3NTZWxlY3RvciA9IG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihHZW5lcmFsUHNldWRvY2xhc3NFbnVtKVxuICAgICAgICAgICAgLnNlbGVjdE9wdGlvbihHZW5lcmFsUHNldWRvY2xhc3NFbnVtLm5vbmUpXG4gICAgICAgICAgICAuYnVpbGQoKTtcblxuICAgICAgICBjb25zdCBjcmVhdGVDbGFzc0J1dHRvbiA9IG5ldyBCdXR0b25CdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0NyZWF0ZScpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNyZWF0ZU5ld0NsYXNzTmFtZSlcbiAgICAgICAgICAgIC5idWlsZCgpO1xuXG4gICAgICAgIGNvbnN0IG5ld0NsYXNzQ29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW1bJ2ZsZXgtZGlyZWN0aW9uJ10sIEZsZXhEaXJlY3Rpb25FbnVtLmNvbHVtbilcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnQ3JlYXRlIE5ldyBDbGFzcycpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMubmV3Q2xhc3NOYW1lSW5wdXQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMubmV3UHNldWRvY2xhc3NTZWxlY3RvcilcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQoY3JlYXRlQ2xhc3NCdXR0b24pXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpO1xuXG4gICAgICAgIC8vIER1cGxpY2F0ZSBjbGFzc1xuICAgICAgICB0aGlzLmR1cGxpY2FibGVDbGFzc1NlbGVjdG9yID0gbmV3IFNlbGVjdG9yRnJvbUFycmF5QnVpbGRlcih0aGlzLmR1cGxpY2FibGVDbGFzc05hbWVzKVxuICAgICAgICAgICAgLnNlbGVjdE9wdGlvbih0aGlzLmR1cGxpY2FibGVDbGFzc05hbWVzWzBdLnZhbHVlKVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICB0aGlzLm5ld0R1cGxpY2FkZWRDbGFzc05hbWVJbnB1dCA9IG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS50ZXh0KVxuICAgICAgICAgICAgLnNldFBsYWNlaG9sZGVyKCdEdXBsaWNhdGVkIGNsYXNzIG5hbWUnKVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG5cbiAgICAgICAgY29uc3QgZHVwbGljYXRlQ2xhc3NCdXR0b24gPSBuZXcgQnV0dG9uQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdEdXBsaWNhdGUnKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5kdXBsaWNhdGVDbGFzcylcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgdGhpcy5kdXBsaWNhdGVQc2V1ZG9jbGFzc1NlbGVjdG9yID0gbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKEdlbmVyYWxQc2V1ZG9jbGFzc0VudW0pXG4gICAgICAgICAgICAuc2VsZWN0T3B0aW9uKEdlbmVyYWxQc2V1ZG9jbGFzc0VudW0ubm9uZSlcbiAgICAgICAgICAgIC5idWlsZCgpO1xuXG4gICAgICAgIGNvbnN0IGR1cGxpY2F0ZUNsYXNzQ29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW1bJ2ZsZXgtZGlyZWN0aW9uJ10sIEZsZXhEaXJlY3Rpb25FbnVtLmNvbHVtbilcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnRHVwbGljYXRlIENsYXNzJylcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgICAgIG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnZmxleC1kaXJlY3Rpb24nXSwgRmxleERpcmVjdGlvbkVudW0ucm93KVxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5kdXBsaWNhYmxlQ2xhc3NTZWxlY3RvcilcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuZHVwbGljYXRlUHNldWRvY2xhc3NTZWxlY3RvcilcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChcbiAgICAgICAgICAgICAgICBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW1bJ2ZsZXgtZGlyZWN0aW9uJ10sIEZsZXhEaXJlY3Rpb25FbnVtLnJvdylcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMubmV3RHVwbGljYWRlZENsYXNzTmFtZUlucHV0KVxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQoZHVwbGljYXRlQ2xhc3NCdXR0b24pXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIC8vIEFwcGVuZCBjbGFzc1xuICAgICAgICBpZiAodGhpcy5hcHBlbmRhYmxlQ2xhc3NOYW1lcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmFwcGVuZENsYXNzU2VsZWN0b3IgPSBuZXcgU2VsZWN0b3JGcm9tQXJyYXlCdWlsZGVyKHRoaXMuYXBwZW5kYWJsZUNsYXNzTmFtZXMpXG4gICAgICAgICAgICAgICAgLnNlbGVjdE9wdGlvbih0aGlzLmFwcGVuZGFibGVDbGFzc05hbWVzWzBdLnZhbHVlKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgICAgIGNvbnN0IGFwcGVuZENsYXNzQnV0dG9uID0gbmV3IEJ1dHRvbkJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0FwcGVuZCcpXG4gICAgICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5hcHBlbmRDbGFzcylcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgICAgICB0aGlzLmFwcGVuZENsYXNzQ29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnZmxleC1kaXJlY3Rpb24nXSwgRmxleERpcmVjdGlvbkVudW0uY29sdW1uKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdBcHBlbmQgQ2xhc3MnKVxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICAgICAgICAgIG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydmbGV4LWRpcmVjdGlvbiddLCBGbGV4RGlyZWN0aW9uRW51bS5yb3cpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5hcHBlbmRDbGFzc1NlbGVjdG9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKGFwcGVuZENsYXNzQnV0dG9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEVkaXQgZnVsbCBjbGFzc1xuICAgICAgICBjb25zdCByYXdDbGFzc0NoYW5nZUJ1dHRvbiA9IG5ldyBCdXR0b25CdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0NoYW5nZSBSYXcgQ2xhc3MnKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jaGFuZ2VGdWxsQ2xhc3MpXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIGNvbnN0IHJhd0NsYXNzRWRpdG9yID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW1bJ2ZsZXgtZGlyZWN0aW9uJ10sIEZsZXhEaXJlY3Rpb25FbnVtLmNvbHVtbilcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnUmF3IENsYXNzIEVkaXRvcicpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChcbiAgICAgICAgICAgICAgICBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW1bJ2ZsZXgtZGlyZWN0aW9uJ10sIEZsZXhEaXJlY3Rpb25FbnVtLmNvbHVtbilcbiAgICAgICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ud2lkdGgsICcxMDAlJylcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydmbGV4LWRpcmVjdGlvbiddLCBGbGV4RGlyZWN0aW9uRW51bS5jb2x1bW4pXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS53aWR0aCwgJzEwMCUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMucmF3Q2xhc3NUZXh0RWRpdG9yLmJ1aWxkKCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQocmF3Q2xhc3NDaGFuZ2VCdXR0b24pXG4gICAgICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIC8vIE1haW4gY29udGFpbmVyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uYm9yZGVyLCAnMXB4IHNvbGlkICM0Q0FGNTAnKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ucGFkZGluZywgJzNweCcpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0NsYXNzZXMgTWFuYWdlbWVudCcpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmNsYXNzZXNTZWxlY3RvckNvbnRhaW5lcilcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChyZW5hbWVDbGFzc0NvbnRhaW5lcilcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXdDbGFzc0NvbnRhaW5lcilcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChkdXBsaWNhdGVDbGFzc0NvbnRhaW5lcilcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZElmRGVmaW5lZCh0aGlzLmFwcGVuZENsYXNzQ29udGFpbmVyKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKHJhd0NsYXNzRWRpdG9yKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUNsYXNzTmFtZSgpIHtcbiAgICAgICAgdGhpcy5wb3B1bGF0ZVJhd0NsYXNzVGV4dEVkaXRvcih0aGlzLmNsYXNzZXNTZWxlY3Rvci52YWx1ZSk7XG4gICAgICAgIHRoaXMucHVibGlzaGVyLm5vdGlmeUNsYXNzTmFtZSh0aGlzLmNsYXNzZXNTZWxlY3Rvci52YWx1ZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVOZXdDbGFzc05hbWUoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBjbGFzc05hbWU6IHN0cmluZyA9IHRoaXMubmV3Q2xhc3NOYW1lSW5wdXQudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBwc2V1ZG9jbGFzcyA9IHRoaXMubmV3UHNldWRvY2xhc3NTZWxlY3Rvci52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBsZXRlQ3NzTmFtZTogc3RyaW5nID1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgKyAocHNldWRvY2xhc3MgIT09ICcnICYmIHBzZXVkb2NsYXNzICE9PSAnbm9uZScgPyBgOiR7cHNldWRvY2xhc3N9YCA6ICcnKTtcblxuICAgICAgICAgICAgaWYgKGNsYXNzTmFtZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NsYXNzIG5hbWUgY2FuIG5vdCBiZSBhbiBlbXB0eSBzdHJpbmcnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGFzc05hbWVbMF0pKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2xhc3MgbmFtZSBtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXInKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgZm91bmRCYXNlUnVsZSA9IENzc1N0eWxlU2hlZXQuZ2V0UnVsZUluZGV4KGNsYXNzTmFtZSk7XG4gICAgICAgICAgICBjb25zdCBmb3VuZFJ1bGVXaXRoUHNldWRvY2xhc3MgPSBDc3NTdHlsZVNoZWV0LmdldFJ1bGVJbmRleChjb21wbGV0ZUNzc05hbWUpO1xuXG4gICAgICAgICAgICBsZXQgY2xhc3NOYW1lTm90Rm91bmRGb3JUaGlzRWxlbWVudCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmZvckVhY2goKGNuKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNuID09PSBjbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lTm90Rm91bmRGb3JUaGlzRWxlbWVudCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGlmIChmb3VuZEJhc2VSdWxlID49IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoY2xhc3NOYW1lTm90Rm91bmRGb3JUaGlzRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NsYXNzIG5hbWUgYWxyZWFkeSBleGlzdHMgZm9yIGFub3RoZXIgZWxlbWVudCcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmb3VuZFJ1bGVXaXRoUHNldWRvY2xhc3MgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDbGFzcyBuYW1lIGFscmVhZHkgZXhpc3RzJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgICAgICBDc3NTdHlsZVNoZWV0Lmluc2VydFJ1bGUoYC4ke2NvbXBsZXRlQ3NzTmFtZX0ge31gKTtcblxuICAgICAgICAgICAgY29uc3QgbmV3T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBuZXdPcHRpb24udGV4dCA9IGAuJHtjb21wbGV0ZUNzc05hbWV9YDtcbiAgICAgICAgICAgIG5ld09wdGlvbi52YWx1ZSA9IGNvbXBsZXRlQ3NzTmFtZTtcblxuICAgICAgICAgICAgdGhpcy5jbGFzc2VzU2VsZWN0b3IuYXBwZW5kQ2hpbGQobmV3T3B0aW9uKTtcblxuICAgICAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgICAgIHRoaXMuY2xhc3Nlc1NlbGVjdG9yLmNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGQ6IEhUTUxPcHRpb25FbGVtZW50LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLnZhbHVlID09PSBuZXdPcHRpb24udmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLm5ld0NsYXNzTmFtZUlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICB0aGlzLmNsYXNzZXNTZWxlY3Rvci5zZWxlY3RlZEluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNsYXNzTmFtZSgpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgYWxlcnQoZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbW92ZUNsYXNzKCkge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShgJHt0aGlzLmNsYXNzZXNTZWxlY3Rvci52YWx1ZX1gKTtcbiAgICAgICAgQ3NzU3R5bGVTaGVldC5yZW1vdmVSdWxlKGAke3RoaXMuY2xhc3Nlc1NlbGVjdG9yLnZhbHVlfWApO1xuICAgICAgICB0aGlzLmNsYXNzZXNTZWxlY3Rvci5vcHRpb25zLnJlbW92ZSh0aGlzLmNsYXNzZXNTZWxlY3Rvci5zZWxlY3RlZEluZGV4KTtcblxuICAgICAgICBpZiAodGhpcy5jbGFzc2VzU2VsZWN0b3Iub3B0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuY2xhc3Nlc1NlbGVjdG9yQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGNoYW5nZUNsYXNzTmFtZSgpIHtcbiAgICAgICAgUmF3SFRNTENvbnBvbmVudC5pbnN0YW5jZXMuZm9yRWFjaCgoaW5zdGFuY2UpID0+IHtcbiAgICAgICAgICAgIGluc3RhbmNlLmNsYXNzTGlzdC5yZXBsYWNlKHRoaXMuY2xhc3Nlc1NlbGVjdG9yLnZhbHVlLCB0aGlzLnJlbmFtZUNsYXNzSW5wdXQudmFsdWUpO1xuICAgICAgICB9KVxuXG4gICAgICAgIENzc1N0eWxlU2hlZXQuY2hhbmdlUnVsZU5hbWUodGhpcy5jbGFzc2VzU2VsZWN0b3IudmFsdWUsIHRoaXMucmVuYW1lQ2xhc3NJbnB1dC52YWx1ZSk7XG4gICAgICAgIHRoaXMucG9wdWxhdGVDbGFzc2VzTGlzdCgpO1xuICAgICAgICB0aGlzLmNsYXNzZXNTZWxlY3Rvci5yZW1vdmUodGhpcy5jbGFzc2VzU2VsZWN0b3Iuc2VsZWN0ZWRJbmRleCk7XG5cbiAgICAgICAgdGhpcy5hcHBlbmROZXdPcHRpb25FbGVtZW50KHRoaXMucmVuYW1lQ2xhc3NJbnB1dC52YWx1ZSwgdGhpcy5jbGFzc2VzU2VsZWN0b3IpO1xuXG4gICAgICAgIHRoaXMucmVuYW1lQ2xhc3NJbnB1dC52YWx1ZSA9ICcnO1xuXG4gICAgICAgIHRoaXMucG9wdWxhdGVSYXdDbGFzc1RleHRFZGl0b3IodGhpcy5jbGFzc2VzU2VsZWN0b3IudmFsdWUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXBwZW5kQ2xhc3MoKSB7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuYXBwZW5kQ2xhc3NTZWxlY3Rvci52YWx1ZSk7XG5cbiAgICAgICAgdGhpcy5hcHBlbmROZXdPcHRpb25FbGVtZW50KHRoaXMuYXBwZW5kQ2xhc3NTZWxlY3Rvci52YWx1ZSwgdGhpcy5jbGFzc2VzU2VsZWN0b3IpO1xuXG4gICAgICAgIHRoaXMuYXBwZW5kQ2xhc3NTZWxlY3Rvci5vcHRpb25zLnJlbW92ZSh0aGlzLmFwcGVuZENsYXNzU2VsZWN0b3Iuc2VsZWN0ZWRJbmRleCk7XG5cbiAgICAgICAgaWYgKHRoaXMuYXBwZW5kQ2xhc3NTZWxlY3Rvci5vcHRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5hcHBlbmRDbGFzc0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wb3B1bGF0ZVJhd0NsYXNzVGV4dEVkaXRvcih0aGlzLmNsYXNzZXNTZWxlY3Rvci52YWx1ZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhcHBlbmROZXdPcHRpb25FbGVtZW50KG9wdGlvblZhbHVlOiBzdHJpbmcsIHNlbGVjdG9yOiBIVE1MU2VsZWN0RWxlbWVudCkge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gb3B0aW9uVmFsdWU7XG4gICAgICAgIG9wdGlvbi50ZXh0ID0gYC4ke29wdGlvblZhbHVlfWA7XG5cbiAgICAgICAgc2VsZWN0b3IuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgc2VsZWN0b3Iuc2VsZWN0ZWRJbmRleCA9IHNlbGVjdG9yLm9wdGlvbnMubGVuZ3RoIC0gMTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGR1cGxpY2F0ZUNsYXNzKCkge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLm5ld0R1cGxpY2FkZWRDbGFzc05hbWVJbnB1dC52YWx1ZSk7XG5cbiAgICAgICAgbGV0IG5ld0NsYXNzTmFtZTtcbiAgICAgICAgaWYgKHRoaXMuZHVwbGljYXRlUHNldWRvY2xhc3NTZWxlY3Rvci52YWx1ZSAhPT0gJ25vbmUnKSB7XG4gICAgICAgICAgICBuZXdDbGFzc05hbWUgPSBgJHt0aGlzLm5ld0R1cGxpY2FkZWRDbGFzc05hbWVJbnB1dC52YWx1ZX06JHt0aGlzLmR1cGxpY2F0ZVBzZXVkb2NsYXNzU2VsZWN0b3IudmFsdWV9YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld0NsYXNzTmFtZSA9IGAke3RoaXMubmV3RHVwbGljYWRlZENsYXNzTmFtZUlucHV0LnZhbHVlfWA7XG4gICAgICAgIH1cblxuICAgICAgICBDc3NTdHlsZVNoZWV0LmR1cGxpY2F0ZVJ1bGUodGhpcy5kdXBsaWNhYmxlQ2xhc3NTZWxlY3Rvci52YWx1ZSwgbmV3Q2xhc3NOYW1lKTtcblxuICAgICAgICB0aGlzLmFwcGVuZE5ld09wdGlvbkVsZW1lbnQobmV3Q2xhc3NOYW1lLCB0aGlzLmNsYXNzZXNTZWxlY3Rvcik7XG4gICAgICAgIHRoaXMuYXBwZW5kTmV3T3B0aW9uRWxlbWVudChuZXdDbGFzc05hbWUsIHRoaXMuZHVwbGljYWJsZUNsYXNzU2VsZWN0b3IpO1xuXG4gICAgICAgIHRoaXMubmV3RHVwbGljYWRlZENsYXNzTmFtZUlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgIHRoaXMuZHVwbGljYXRlUHNldWRvY2xhc3NTZWxlY3Rvci52YWx1ZSA9IEdlbmVyYWxQc2V1ZG9jbGFzc0VudW0ubm9uZTtcblxuICAgICAgICB0aGlzLnBvcHVsYXRlUmF3Q2xhc3NUZXh0RWRpdG9yKHRoaXMuY2xhc3Nlc1NlbGVjdG9yLnZhbHVlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNoYW5nZUZ1bGxDbGFzcygpIHtcbiAgICAgICAgLy8gVE9ETzogZmFsdGEgdGVybWluYXIgZXN0ZSBtZXRvZG8uLi4gTm8gc2Ugc2kgc2VyYSB0YW4gZmFjaWwuLi4uXG4gICAgICAgIC8vIFRPRE86IHF1aXphcyBhcXVpIGRlYmVyaWFtb3MgbW9zdHJhciB0b2RvcyBsb3MgYXRyaWJ1dG9zIHF1ZSB0aWVuZSBlc3RlIG1ldG9kb1xuXG4gICAgICAgIC8vIFRPRE86IGxvcyB2YWxvcmVzIGRlIGxhIHZlbnRhbmEgbm8gc2UgdmFuIGFjdHVhbGl6YW5kbyBhIG1lZGlkYSBxdWUgc2UgYWdyZWdhbiBjb3NhcyBhIGVzYSBjbGFzZSwgcXVpemFzIG5lY2VzaXRhbW9zIHVuIG9ic2VydmVyLCBxdWUgc2VyaWEgdW4gdmVyZGFkZXJvIHF1aWxvbWJhc3Nzc29vb29vby4uLlxuXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmF3Q2xhc3NUZXh0RWRpdG9yLmdldFZhbHVlKCkpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxufVxuIiwiaW1wb3J0IENsYXNzQ2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2UgZnJvbSAnLi4vaW50ZXJmYWNlcy9jbGFzcy1jaGFuZ2Utb2JzZXJ2ZXIuaW50ZXJmYWNlJztcblxuaW1wb3J0IENzc1N0eWxlU2hlZXQgZnJvbSAnLi4vLi4vY3NzLXN0eWxlc2hlZXQvY3NzLXN0eWxlc2hlZXQnO1xuXG5pbXBvcnQgQ29udGFpbmVyQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvQ29udGFpbmVyQnVpbGRlcic7XG5pbXBvcnQgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL1NlbGVjdG9yRnJvbUVudW1CdWlsZGVyJztcbmltcG9ydCBJbnB1dEJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0lucHV0QnVpbGRlcic7XG5pbXBvcnQgTGFiZWxCdWlsZGVyIGZyb20gJy4uL21vZGVscy9MYWJlbEJ1aWxkZXInO1xuXG5pbXBvcnQgR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudCBmcm9tICcuL2dlbmVyaWMtY3NzLXByb3BlcnR5LW11dGF0b3IuY29tcG9uZW50JztcblxuaW1wb3J0IHsgRGlzcGxheVR5cGVzRW51bSB9IGZyb20gJy4uL2VudW1zL2Rpc3BsYXktdHlwZXMuZW51bSc7XG5pbXBvcnQgeyBTdHlsZU5hbWVFbnVtIH0gZnJvbSAnLi4vZW51bXMvc3R5bGUtbmFtZS5lbnVtJztcbmltcG9ydCB7IEFsaWduRmxleFNlbGZFbnVtIH0gZnJvbSAnLi4vZW51bXMvYWxpZ24tZmxleC1zZWxmLmVudW0nO1xuaW1wb3J0IHsgSW5wdXRUeXBlRW51bSB9IGZyb20gJy4uL2VudW1zL2lucHV0LXR5cGUuZW51bSc7XG5pbXBvcnQgeyBFdmVudFR5cGVFbnVtIH0gZnJvbSAnLi4vZW51bXMvZXZlbnQtdHlwZS5lbnVtJztcbmltcG9ydCB7IEp1c3RpZnlHcmlkU2VsZkVudW0gfSBmcm9tICcuLi9lbnVtcy9qdXN0aWZ5LWdyaWQtc2VsZi5lbnVtJztcbmltcG9ydCB7IEFsaWduR3JpZFNlbGZFbnVtIH0gZnJvbSAnLi4vZW51bXMvYWxpZ24tZ3JpZC1zZWxmLmVudW0nO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3BsYXlBc0NoaWxkQ29tcG9uZW50IGltcGxlbWVudHMgQ2xhc3NDaGFuZ2VPYnNlcnZlckludGVyZmFjZSB7XG4gICAgcHJpdmF0ZSBkb21FbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBkb21FbGVtZW50U3R5bGVTaGVldDogQ1NTU3R5bGVEZWNsYXJhdGlvbjtcblxuICAgIHByaXZhdGUgZmxleENvbnRhaW5lckFzQ2hpbGRyZW46IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgYWxpZ25TZWxmU2VsZWN0b3I6IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBmbGV4R3Jvd0lucHV0OiBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50O1xuICAgIHByaXZhdGUgZmxleFNocmlua0lucHV0OiBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50O1xuICAgIHByaXZhdGUgZmxleEJhc2lzSW5wdXQ6IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQ7XG5cbiAgICBwcml2YXRlIGdyaWRDb250YWluZXJBc0NoaWxkcmVuOiBIVE1MRGl2RWxlbWVudDtcbiAgICBwcml2YXRlIGdyaWRDb2x1bW5TdGFydElucHV0OiBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50O1xuICAgIHByaXZhdGUgZ3JpZENvbHVtbkVuZElucHV0OiBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50O1xuICAgIHByaXZhdGUgZ3JpZFJvd1N0YXJ0SW5wdXQ6IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBncmlkUm93RW5kSW5wdXQ6IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBncmlkSnVzdGlmeVNlbGY6IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBncmlkQWxpZ25TZWxmOiBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50O1xuXG4gICAgY29uc3RydWN0b3IoZG9tRWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCA9IENzc1N0eWxlU2hlZXQuZ2V0UnVsZVN0eWxlcyh0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0WzBdKTtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKCkuYnVpbGQoKTtcblxuICAgICAgICB0aGlzLmZsZXhDb250YWluZXJBc0NoaWxkcmVuID0gdGhpcy5jcmVhdGVGbGV4QXNDaGlsZHJlbkNvbnRhaW5lcigpO1xuICAgICAgICB0aGlzLmdyaWRDb250YWluZXJBc0NoaWxkcmVuID0gdGhpcy5jcmVhdGVHcmlkQXNDaGlsZHJlbkNvbnRhaW5lcigpO1xuICAgICAgICB0aGlzLnNldENvbXBvbmVudEFjY29yZGluZ1RvU2VsZWN0b3IoKTtcbiAgICB9XG5cbiAgICBnZXQgY29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRDb21wb25lbnRBY2NvcmRpbmdUb1NlbGVjdG9yKCkge1xuICAgICAgICBpZiAodGhpcy5kb21FbGVtZW50LmlkICE9PSAnYXBwLWNvbnRhaW5lcicpIHtcbiAgICAgICAgICAgIC8vIE5PVEU6IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvbUVsZW1lbnQpIHJldHVybiB0aGUgYWN0aXZlIHN0eWxlIG9mIHRoYXQgZG9tIGVsZW1lbnQuXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50UHJvcGVydGllcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50KVsnZGlzcGxheSddXG5cbiAgICAgICAgICAgIGlmIChjdXJyZW50UHJvcGVydGllcyA9PT0gRGlzcGxheVR5cGVzRW51bS5mbGV4IHx8IGN1cnJlbnRQcm9wZXJ0aWVzID09PSBEaXNwbGF5VHlwZXNFbnVtWydpbmxpbmUtZmxleCddKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldEdyaWQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUZsZXhDb21wb25lbnRzU3R5bGVTaGVldCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RmxleEFzQ2hpbGRyZW5Jbml0aWFsVmFsdWVzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5mbGV4Q29udGFpbmVyQXNDaGlsZHJlbik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9wZXJ0aWVzID09PSBEaXNwbGF5VHlwZXNFbnVtLmdyaWRcbiAgICAgICAgICAgICAgICB8fCBjdXJyZW50UHJvcGVydGllcyA9PT0gRGlzcGxheVR5cGVzRW51bVsnaW5saW5lLWdyaWQnXVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldEZsZXgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUdyaWRDb21wb25lbnRzU3R5bGVTaGVldCgpO1xuICAgICAgICAgICAgdGhpcy5zZXRHcmlkQXNDaGlsZHJlbkluaXRpYWxWYWx1ZXMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmdyaWRDb250YWluZXJBc0NoaWxkcmVuKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldEZsZXgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0R3JpZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVGbGV4QXNDaGlsZHJlbkNvbnRhaW5lcigpIHtcbiAgICAgICAgdGhpcy5hbGlnblNlbGZTZWxlY3RvciA9IG5ldyBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50KFxuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCxcbiAgICAgICAgICAgICdhbGlnbi1zZWxmJyxcbiAgICAgICAgICAgICdBbGlnbiBTZWxmJyxcbiAgICAgICAgICAgIG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihBbGlnbkZsZXhTZWxmRW51bSlcbiAgICAgICAgICAgICAgICAuYnVpbGQoKSxcbiAgICAgICAgICAgIEV2ZW50VHlwZUVudW0uY2hhbmdlXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5mbGV4R3Jvd0lucHV0ID0gbmV3IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQoXG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0LFxuICAgICAgICAgICAgJ2ZsZXgtZ3JvdycsXG4gICAgICAgICAgICAnRmxleCBHcm93JyxcbiAgICAgICAgICAgIG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS5udW1iZXIpXG4gICAgICAgICAgICAgICAgLnNldE1heCgxMDAwKVxuICAgICAgICAgICAgICAgIC5zZXRNaW4oMClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKSxcbiAgICAgICAgICAgIEV2ZW50VHlwZUVudW0uaW5wdXRcbiAgICAgICAgKS5zZXRaZXJvVmFsdWUoMClcblxuICAgICAgICB0aGlzLmZsZXhTaHJpbmtJbnB1dCA9IG5ldyBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50KFxuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCxcbiAgICAgICAgICAgICdmbGV4LXNocmluaycsXG4gICAgICAgICAgICAnRmxleCBTaHJpbmsnLFxuICAgICAgICAgICAgbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLm51bWJlcilcbiAgICAgICAgICAgICAgICAuc2V0TWF4KDEwMDApXG4gICAgICAgICAgICAgICAgLnNldE1pbigwKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpLFxuICAgICAgICAgICAgRXZlbnRUeXBlRW51bS5pbnB1dFxuICAgICAgICApLnNldFplcm9WYWx1ZSgwKVxuXG5cbiAgICAgICAgdGhpcy5mbGV4QmFzaXNJbnB1dCA9IG5ldyBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50KFxuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCxcbiAgICAgICAgICAgICdmbGV4LWJhc2lzJyxcbiAgICAgICAgICAgICdGbGV4IEJhc2lzKCUpJyxcbiAgICAgICAgICAgIG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS5udW1iZXIpXG4gICAgICAgICAgICAgICAgLnNldE1heCgxMDAwKVxuICAgICAgICAgICAgICAgIC5zZXRNaW4oMClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKSxcbiAgICAgICAgICAgIEV2ZW50VHlwZUVudW0uaW5wdXQsXG4gICAgICAgICAgICAnJSdcbiAgICAgICAgKS5zZXRaZXJvVmFsdWUoMClcblxuICAgICAgICByZXR1cm4gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5ib3JkZXIsICcxcHggc29saWQgIzRDQUY1MCcpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ucGFkZGluZywgJzNweCcpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0Rpc3BsYXkgRmxleCBhcyBDaGlsZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmFsaWduU2VsZlNlbGVjdG9yLmNvbXBvbmVudClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5mbGV4R3Jvd0lucHV0LmNvbXBvbmVudClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5mbGV4U2hyaW5rSW5wdXQuY29tcG9uZW50KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmZsZXhCYXNpc0lucHV0LmNvbXBvbmVudClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEZsZXhBc0NoaWxkcmVuSW5pdGlhbFZhbHVlcygpIHtcbiAgICAgICAgdGhpcy5hbGlnblNlbGZTZWxlY3Rvci5zZXRWYWx1ZSh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydhbGlnbi1zZWxmJ10gfHwgJycpO1xuICAgICAgICB0aGlzLmZsZXhHcm93SW5wdXQuc2V0VmFsdWUoYCR7cGFyc2VJbnQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZmxleC1ncm93J10pIHx8IDB9YCk7XG4gICAgICAgIHRoaXMuZmxleFNocmlua0lucHV0LnNldFZhbHVlKGAke3BhcnNlSW50KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2ZsZXgtc2hyaW5rJ10pIHx8IDB9YCk7XG4gICAgICAgIHRoaXMuZmxleEJhc2lzSW5wdXQuc2V0VmFsdWUoYCR7cGFyc2VJbnQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZmxleC1iYXNpcyddKSB8fCAwfWApO1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlR3JpZEFzQ2hpbGRyZW5Db250YWluZXIoKSB7XG4gICAgICAgIHRoaXMuZ3JpZENvbHVtblN0YXJ0SW5wdXQgPSBuZXcgR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudChcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQsXG4gICAgICAgICAgICAnZ3JpZC1jb2x1bW4tc3RhcnQnLFxuICAgICAgICAgICAgJ0dyaWQgQ29sdW1uIFN0YXJ0JyxcbiAgICAgICAgICAgIG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS50ZXh0KS5idWlsZCgpLFxuICAgICAgICAgICAgRXZlbnRUeXBlRW51bS5pbnB1dFxuICAgICAgICApXG5cbiAgICAgICAgdGhpcy5ncmlkQ29sdW1uRW5kSW5wdXQgPSBuZXcgR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudChcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQsXG4gICAgICAgICAgICAnZ3JpZC1jb2x1bW4tZW5kJyxcbiAgICAgICAgICAgICdHcmlkIENvbHVtbiBFbmQnLFxuICAgICAgICAgICAgbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLnRleHQpLmJ1aWxkKCksXG4gICAgICAgICAgICBFdmVudFR5cGVFbnVtLmlucHV0XG4gICAgICAgIClcblxuICAgICAgICB0aGlzLmdyaWRSb3dTdGFydElucHV0ID0gbmV3IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQoXG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0LFxuICAgICAgICAgICAgJ2dyaWQtcm93LXN0YXJ0JyxcbiAgICAgICAgICAgICdHcmlkIFJvdyBTdGFydCcsXG4gICAgICAgICAgICBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0udGV4dCkuYnVpbGQoKSxcbiAgICAgICAgICAgIEV2ZW50VHlwZUVudW0uaW5wdXRcbiAgICAgICAgKVxuXG4gICAgICAgIHRoaXMuZ3JpZFJvd0VuZElucHV0ID0gbmV3IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQoXG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0LFxuICAgICAgICAgICAgJ2dyaWQtcm93LWVuZCcsXG4gICAgICAgICAgICAnR3JpZCBSb3cgRW5kJyxcbiAgICAgICAgICAgIG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS50ZXh0KS5idWlsZCgpLFxuICAgICAgICAgICAgRXZlbnRUeXBlRW51bS5pbnB1dFxuICAgICAgICApXG5cbiAgICAgICAgdGhpcy5ncmlkSnVzdGlmeVNlbGYgPSBuZXcgR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudChcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQsXG4gICAgICAgICAgICAnanVzdGlmeS1zZWxmJyxcbiAgICAgICAgICAgICdHcmlkIEp1c3RpZnkgU2VsZicsXG4gICAgICAgICAgICBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIoSnVzdGlmeUdyaWRTZWxmRW51bSkuYnVpbGQoKSxcbiAgICAgICAgICAgIEV2ZW50VHlwZUVudW0uY2hhbmdlXG4gICAgICAgIClcblxuICAgICAgICB0aGlzLmdyaWRBbGlnblNlbGYgPSBuZXcgR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudChcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQsXG4gICAgICAgICAgICAnYWxpZ24tc2VsZicsXG4gICAgICAgICAgICAnR3JpZCBBbGlnbiBTZWxmJyxcbiAgICAgICAgICAgIG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihBbGlnbkdyaWRTZWxmRW51bSkuYnVpbGQoKSxcbiAgICAgICAgICAgIEV2ZW50VHlwZUVudW0uY2hhbmdlXG4gICAgICAgIClcblxuICAgICAgICByZXR1cm4gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5ib3JkZXIsICcxcHggc29saWQgIzRDQUY1MCcpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ucGFkZGluZywgJzNweCcpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0Rpc3BsYXkgR3JpZCBhcyBDaGlsZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmdyaWRDb2x1bW5TdGFydElucHV0LmNvbXBvbmVudClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5ncmlkQ29sdW1uRW5kSW5wdXQuY29tcG9uZW50KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmdyaWRSb3dTdGFydElucHV0LmNvbXBvbmVudClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5ncmlkUm93RW5kSW5wdXQuY29tcG9uZW50KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmdyaWRKdXN0aWZ5U2VsZi5jb21wb25lbnQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuZ3JpZEFsaWduU2VsZi5jb21wb25lbnQpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRHcmlkQXNDaGlsZHJlbkluaXRpYWxWYWx1ZXMoKSB7XG4gICAgICAgIHRoaXMuZ3JpZENvbHVtblN0YXJ0SW5wdXQuc2V0VmFsdWUodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZ3JpZC1jb2x1bW4tc3RhcnQnXSB8fCAnJyk7XG4gICAgICAgIHRoaXMuZ3JpZENvbHVtbkVuZElucHV0LnNldFZhbHVlKHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2dyaWQtY29sdW1uLWVuZCddIHx8ICcnKTtcbiAgICAgICAgdGhpcy5ncmlkUm93U3RhcnRJbnB1dC5zZXRWYWx1ZSh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydncmlkLXJvdy1zdGFydCddIHx8ICcnKTtcbiAgICAgICAgdGhpcy5ncmlkUm93RW5kSW5wdXQuc2V0VmFsdWUodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZ3JpZC1yb3ctZW5kJ10gfHwgJycpO1xuICAgICAgICB0aGlzLmdyaWRKdXN0aWZ5U2VsZi5zZXRWYWx1ZSh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydqdXN0aWZ5LXNlbGYnXSB8fCAnJyk7XG4gICAgICAgIHRoaXMuZ3JpZEFsaWduU2VsZi5zZXRWYWx1ZSh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydhbGlnbi1zZWxmJ10gfHwgJycpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVzZXRGbGV4KCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5mbGV4Q29udGFpbmVyQXNDaGlsZHJlbik7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXNldEdyaWQoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLmdyaWRDb250YWluZXJBc0NoaWxkcmVuKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgY2xhc3NOYW1lVXBkYXRlZChuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCA9IENzc1N0eWxlU2hlZXQuZ2V0UnVsZVN0eWxlcyhuYW1lKTtcbiAgICAgICAgdGhpcy5zZXRDb21wb25lbnRBY2NvcmRpbmdUb1NlbGVjdG9yKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVGbGV4Q29tcG9uZW50c1N0eWxlU2hlZXQoKSB7XG4gICAgICAgIHRoaXMuYWxpZ25TZWxmU2VsZWN0b3IudXBkYXRlU3R5bGVTaGVldCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0KTtcbiAgICAgICAgdGhpcy5mbGV4R3Jvd0lucHV0LnVwZGF0ZVN0eWxlU2hlZXQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCk7XG4gICAgICAgIHRoaXMuZmxleFNocmlua0lucHV0LnVwZGF0ZVN0eWxlU2hlZXQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCk7XG4gICAgICAgIHRoaXMuZmxleEJhc2lzSW5wdXQudXBkYXRlU3R5bGVTaGVldCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUdyaWRDb21wb25lbnRzU3R5bGVTaGVldCgpIHtcbiAgICAgICAgdGhpcy5ncmlkQ29sdW1uU3RhcnRJbnB1dC51cGRhdGVTdHlsZVNoZWV0KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQpO1xuICAgICAgICB0aGlzLmdyaWRDb2x1bW5FbmRJbnB1dC51cGRhdGVTdHlsZVNoZWV0KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQpO1xuICAgICAgICB0aGlzLmdyaWRSb3dTdGFydElucHV0LnVwZGF0ZVN0eWxlU2hlZXQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCk7XG4gICAgICAgIHRoaXMuZ3JpZFJvd0VuZElucHV0LnVwZGF0ZVN0eWxlU2hlZXQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCk7XG4gICAgICAgIHRoaXMuZ3JpZEp1c3RpZnlTZWxmLnVwZGF0ZVN0eWxlU2hlZXQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCk7XG4gICAgICAgIHRoaXMuZ3JpZEFsaWduU2VsZi51cGRhdGVTdHlsZVNoZWV0KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQpO1xuICAgIH1cbn1cbiIsImltcG9ydCBDbGFzc0NoYW5nZU9ic2VydmVySW50ZXJmYWNlIGZyb20gJy4uL2ludGVyZmFjZXMvY2xhc3MtY2hhbmdlLW9ic2VydmVyLmludGVyZmFjZSc7XG5cbmltcG9ydCBDc3NTdHlsZVNoZWV0IGZyb20gJy4uLy4uL2Nzcy1zdHlsZXNoZWV0L2Nzcy1zdHlsZXNoZWV0JztcblxuaW1wb3J0IENvbnRhaW5lckJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0NvbnRhaW5lckJ1aWxkZXInO1xuaW1wb3J0IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyIGZyb20gJy4uL21vZGVscy9TZWxlY3RvckZyb21FbnVtQnVpbGRlcic7XG5pbXBvcnQgTGFiZWxCdWlsZGVyIGZyb20gJy4uL21vZGVscy9MYWJlbEJ1aWxkZXInO1xuaW1wb3J0IElucHV0QnVpbGRlciBmcm9tICcuLi9tb2RlbHMvSW5wdXRCdWlsZGVyJztcbmltcG9ydCBUZXh0YXJlYUJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL1RleHRhcmVhQnVpbGRlcic7XG5cbmltcG9ydCBJbnB1dEFuZFVuaXRzU2VsZWN0b3JDb21wb25lbnQgZnJvbSAnLi9pbnB1dC13aXRoLXVuaXRzLXNlbGVjdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudCBmcm9tICcuL2dlbmVyaWMtY3NzLXByb3BlcnR5LW11dGF0b3IuY29tcG9uZW50JztcblxuaW1wb3J0IHsgRGlzcGxheVR5cGVzRW51bSB9IGZyb20gJy4uL2VudW1zL2Rpc3BsYXktdHlwZXMuZW51bSc7XG5pbXBvcnQgeyBGbGV4RGlyZWN0aW9uRW51bSB9IGZyb20gJy4uL2VudW1zL2ZsZXgtZGlyZWN0aW9uLmVudW0nO1xuaW1wb3J0IHsgU3R5bGVOYW1lRW51bSB9IGZyb20gJy4uL2VudW1zL3N0eWxlLW5hbWUuZW51bSc7XG5pbXBvcnQgeyBGbGV4V3JhcEVudW0gfSBmcm9tICcuLi9lbnVtcy9mbGV4LXdyYXAuZW51bSc7XG5pbXBvcnQgeyBBbGlnbkZsZXhJdGVtc0VudW0gfSBmcm9tICcuLi9lbnVtcy9hbGlnbi1mbGV4LWl0ZW1zLmVudW0nO1xuaW1wb3J0IHsgSnVzdGlmeUZsZXhDb250ZW50RW51bSB9IGZyb20gJy4uL2VudW1zL2p1c3RpZnktZmxleC1jb250ZW50LmVudW0nO1xuaW1wb3J0IHsgQWxpZ25GbGV4Q29udGVudEVudW0gfSBmcm9tICcuLi9lbnVtcy9hbGlnbi1mbGV4LWNvbnRlbnQuZW51bSc7XG5pbXBvcnQgeyBJbnB1dFR5cGVFbnVtIH0gZnJvbSAnLi4vZW51bXMvaW5wdXQtdHlwZS5lbnVtJztcbmltcG9ydCB7IEV2ZW50VHlwZUVudW0gfSBmcm9tICcuLi9lbnVtcy9ldmVudC10eXBlLmVudW0nO1xuaW1wb3J0IHsgSnVzdGlmeUdyaWRJdGVtc0VudW0gfSBmcm9tICcuLi9lbnVtcy9qdXN0aWZ5LWdyaWQtaXRlbXMuZW51bSc7XG5pbXBvcnQgeyBBbGlnbkdyaWRJdGVtc0VudW0gfSBmcm9tICcuLi9lbnVtcy9hbGlnbi1ncmlkLWl0ZW1zLmVudW0nO1xuaW1wb3J0IHsgSnVzdGlmeUdyaWRDb250ZW50RW51bSB9IGZyb20gJy4uL2VudW1zL2p1c3RpZnktZ3JpZC1jb250ZW50LmVudW0nO1xuaW1wb3J0IHsgQWxpZ25HcmlkQ29udGVudEVudW0gfSBmcm9tICcuLi9lbnVtcy9hbGlnbi1ncmlkLWNvbnRlbnQuZW51bSc7XG5pbXBvcnQgeyBHcmlkQXV0b0Zsb3dFbnVtIH0gZnJvbSAnLi4vZW51bXMvZ3JpZC1hdXRvLWZsb3cuZW51bSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzcGxheUFzUGFyZW50Q29tcG9uZW50IGltcGxlbWVudHMgQ2xhc3NDaGFuZ2VPYnNlcnZlckludGVyZmFjZSB7XG4gICAgcHJpdmF0ZSBkb21FbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBkb21FbGVtZW50U3R5bGVTaGVldDogQ1NTU3R5bGVEZWNsYXJhdGlvbjtcblxuICAgIHByaXZhdGUgZGlzcGxheVNlbGVjdG9yOiBIVE1MU2VsZWN0RWxlbWVudDtcblxuICAgIHByaXZhdGUgZmxleENvbnRhaW5lckFzUGFyZW50OiBDb250YWluZXJCdWlsZGVyO1xuICAgIHByaXZhdGUgZmxleERpcmVjdGlvblNlbGVjdG9yOiBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50O1xuICAgIHByaXZhdGUgZmxleFdyYXBTZWxlY3RvcjogR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudDtcbiAgICBwcml2YXRlIGFsaWduSXRlbXNTZWxlY3RvcjogR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudDtcbiAgICBwcml2YXRlIGp1c3RpZnlDb250ZW50U2VsZWN0b3I6IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBhbGlnbkNvbnRlbnRTZWxlY3RvcjogR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudDtcblxuICAgIHByaXZhdGUgZ3JpZENvbnRhaW5lckFzUGFyZW50OiBDb250YWluZXJCdWlsZGVyO1xuICAgIHByaXZhdGUgZ3JpZFRlbXBsYXRlQ29sdW1uc0lucHV0OiBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50O1xuICAgIHByaXZhdGUgZ3JpZFRlbXBsYXRlUm93c0lucHV0OiBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50O1xuICAgIHByaXZhdGUgZ3JpZEF1dG9Db2x1bW5zSW5wdXQ6IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBncmlkQXV0b1Jvd3NJbnB1dDogR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudDtcbiAgICBwcml2YXRlIGdyaWRUZW1wbGF0ZUFyZWFzVGV4dGFyZWE6IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBncmlkSnVzdGlmeUl0ZW1zU2VsZWN0b3I6IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBncmlkQWxpZ25JdGVtc1NlbGVjdG9yOiBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50O1xuICAgIHByaXZhdGUgZ3JpZEp1c3RpZnlDb250ZW50U2VsZWN0b3I6IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBncmlkQWxpZ25Db250ZW50U2VsZWN0b3I6IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBncmlkQXV0b0Zsb3dTZWxlY3RvcjogR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudDtcbiAgICBwcml2YXRlIGdyaWRDb2x1bW5HYXBJbnB1dDogSW5wdXRBbmRVbml0c1NlbGVjdG9yQ29tcG9uZW50O1xuICAgIHByaXZhdGUgZ3JpZFJvd0dhcElucHV0OiBJbnB1dEFuZFVuaXRzU2VsZWN0b3JDb21wb25lbnQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihkb21FbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0ID0gQ3NzU3R5bGVTaGVldC5nZXRSdWxlU3R5bGVzKHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3RbMF0pO1xuICAgICAgICB0aGlzLmFkZENvbXBvbmVudHMoKTtcbiAgICB9XG5cbiAgICBnZXQgY29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRDb21wb25lbnRzKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVByb3BlcnR5ID0gdGhpcy51cGRhdGVQcm9wZXJ0eS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuZGlzcGxheVNlbGVjdG9yID0gbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKERpc3BsYXlUeXBlc0VudW0pXG4gICAgICAgICAgICAuc2VsZWN0T3B0aW9uKHRoaXMuZ2V0Q3VycmVudFByb3BlcnRpZXMoJ2Rpc3BsYXknKSlcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnVwZGF0ZVByb3BlcnR5KVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydmbGV4LWRpcmVjdGlvbiddLCBGbGV4RGlyZWN0aW9uRW51bS5jb2x1bW4pXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW1bJ2FsaWduLWl0ZW1zJ10sIEFsaWduRmxleEl0ZW1zRW51bS5zdHJldGNoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmJvcmRlciwgJzFweCBzb2xpZCAjNENBRjUwJylcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5wYWRkaW5nLCAnM3B4JylcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnRGlzcGxheSBTZXR0aW5ncycpXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmRpc3BsYXlTZWxlY3RvcilcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG5cbiAgICAgICAgdGhpcy5mbGV4Q29udGFpbmVyQXNQYXJlbnQgPSB0aGlzLmNyZWF0ZUZsZXhBc1BhcmVudENvbnRhaW5lcigpO1xuICAgICAgICB0aGlzLmdyaWRDb250YWluZXJBc1BhcmVudCA9IHRoaXMuY3JlYXRlR3JpZEFzUGFyZW50Q29udGFpbmVyKCk7XG4gICAgICAgIHRoaXMuc2V0Q29tcG9uZW50QWNjb3JkaW5nVG9TZWxlY3RvcigpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlUHJvcGVydHkoKSB7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2Rpc3BsYXknXSA9IHRoaXMuZGlzcGxheVNlbGVjdG9yLnZhbHVlO1xuICAgICAgICB0aGlzLnNldENvbXBvbmVudEFjY29yZGluZ1RvU2VsZWN0b3IodHJ1ZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRDdXJyZW50UHJvcGVydGllcyhwcm9wZXJ0eTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbcHJvcGVydHldO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0Q29tcG9uZW50QWNjb3JkaW5nVG9TZWxlY3RvcihyZXNldD86IGJvb2xlYW4pIHtcbiAgICAgICAgY29uc3QgY3VycmVudFByb3BlcnRpZXMgPSB0aGlzLmdldEN1cnJlbnRQcm9wZXJ0aWVzKCdkaXNwbGF5Jyk7XG5cbiAgICAgICAgaWYgKGN1cnJlbnRQcm9wZXJ0aWVzID09PSBEaXNwbGF5VHlwZXNFbnVtLmZsZXggfHwgY3VycmVudFByb3BlcnRpZXMgPT09IERpc3BsYXlUeXBlc0VudW1bJ2lubGluZS1mbGV4J10pIHtcbiAgICAgICAgICAgIGlmKHJlc2V0KXtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0R3JpZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy51cGRhdGVGbGV4Q29tcG9uZW50c1N0eWxlU2hlZXQoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0RmxleEFzUGFyZW50SW5pdGlhbFZhbHVlcygpO1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5mbGV4Q29udGFpbmVyQXNQYXJlbnQuYnVpbGQoKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICBjdXJyZW50UHJvcGVydGllcyA9PT0gRGlzcGxheVR5cGVzRW51bS5ncmlkXG4gICAgICAgICAgICB8fCBjdXJyZW50UHJvcGVydGllcyA9PT0gRGlzcGxheVR5cGVzRW51bVsnaW5saW5lLWdyaWQnXVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGlmKHJlc2V0KXtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0RmxleCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy51cGRhdGVHcmlkQ29tcG9uZW50c1N0eWxlU2hlZXQoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0R3JpZEFzUGFyZW50SW5pdGlhbFZhbHVlcygpO1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5ncmlkQ29udGFpbmVyQXNQYXJlbnQuYnVpbGQoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0RmxleCgpO1xuICAgICAgICAgICAgdGhpcy5yZXNldEdyaWQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlRmxleEFzUGFyZW50Q29udGFpbmVyKCkge1xuICAgICAgICB0aGlzLmZsZXhEaXJlY3Rpb25TZWxlY3RvciA9IG5ldyBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQsXG4gICAgICAgICAgICAnZmxleC1kaXJlY3Rpb24nLFxuICAgICAgICAgICAgJ0ZsZXggRGlyZWN0aW9uJyxcbiAgICAgICAgICAgIG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihGbGV4RGlyZWN0aW9uRW51bSkuYnVpbGQoKSxcbiAgICAgICAgICAgIEV2ZW50VHlwZUVudW0uY2hhbmdlXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5mbGV4V3JhcFNlbGVjdG9yID0gbmV3IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCxcbiAgICAgICAgICAgICdmbGV4LXdyYXAnLFxuICAgICAgICAgICAgJ0ZsZXggV3JhcCcsXG4gICAgICAgICAgICBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIoRmxleFdyYXBFbnVtKS5idWlsZCgpLFxuICAgICAgICAgICAgRXZlbnRUeXBlRW51bS5jaGFuZ2VcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmFsaWduSXRlbXNTZWxlY3RvciA9IG5ldyBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQsXG4gICAgICAgICAgICAnYWxpZ24taXRlbXMnLFxuICAgICAgICAgICAgJ0FsaWduIEl0ZW1zJyxcbiAgICAgICAgICAgIG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihBbGlnbkZsZXhJdGVtc0VudW0pLmJ1aWxkKCksXG4gICAgICAgICAgICBFdmVudFR5cGVFbnVtLmNoYW5nZVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuanVzdGlmeUNvbnRlbnRTZWxlY3RvciA9IG5ldyBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQsXG4gICAgICAgICAgICAnanVzdGlmeS1jb250ZW50JyxcbiAgICAgICAgICAgICdKdXN0aWZ5IENvbnRlbnQnLFxuICAgICAgICAgICAgbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKEp1c3RpZnlGbGV4Q29udGVudEVudW0pLmJ1aWxkKCksXG4gICAgICAgICAgICBFdmVudFR5cGVFbnVtLmNoYW5nZVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuYWxpZ25Db250ZW50U2VsZWN0b3IgPSBuZXcgR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0LFxuICAgICAgICAgICAgJ2FsaWduLWNvbnRlbnQnLFxuICAgICAgICAgICAgJ0FsaWduIENvbnRlbnQnLFxuICAgICAgICAgICAgbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKEFsaWduRmxleENvbnRlbnRFbnVtKS5idWlsZCgpLFxuICAgICAgICAgICAgRXZlbnRUeXBlRW51bS5jaGFuZ2VcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5ib3JkZXIsICcxcHggc29saWQgIzRDQUY1MCcpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ucGFkZGluZywgJzNweCcpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0Rpc3BsYXkgRmxleCBhcyBQYXJlbnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5mbGV4RGlyZWN0aW9uU2VsZWN0b3IuY29tcG9uZW50KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmZsZXhXcmFwU2VsZWN0b3IuY29tcG9uZW50KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmFsaWduSXRlbXNTZWxlY3Rvci5jb21wb25lbnQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuanVzdGlmeUNvbnRlbnRTZWxlY3Rvci5jb21wb25lbnQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuYWxpZ25Db250ZW50U2VsZWN0b3IuY29tcG9uZW50KVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRGbGV4QXNQYXJlbnRJbml0aWFsVmFsdWVzKCkge1xuICAgICAgICB0aGlzLmZsZXhEaXJlY3Rpb25TZWxlY3Rvci5zZXRWYWx1ZSh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydmbGV4LWRpcmVjdGlvbiddIHx8ICcnKTtcbiAgICAgICAgdGhpcy5mbGV4V3JhcFNlbGVjdG9yLnNldFZhbHVlKHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2ZsZXgtd3JhcCddIHx8ICcnKTtcbiAgICAgICAgdGhpcy5hbGlnbkl0ZW1zU2VsZWN0b3Iuc2V0VmFsdWUodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYWxpZ24taXRlbXMnXSB8fCAnJyk7XG4gICAgICAgIHRoaXMuanVzdGlmeUNvbnRlbnRTZWxlY3Rvci5zZXRWYWx1ZSh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydqdXN0aWZ5LWNvbnRlbnQnXSB8fCAnJyk7XG4gICAgICAgIHRoaXMuYWxpZ25Db250ZW50U2VsZWN0b3Iuc2V0VmFsdWUodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYWxpZ24tY29udGVudCddIHx8ICcnKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZUdyaWRBc1BhcmVudENvbnRhaW5lcigpIHtcbiAgICAgICAgdGhpcy5ncmlkVGVtcGxhdGVDb2x1bW5zSW5wdXQgPSBuZXcgR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0LFxuICAgICAgICAgICAgJ2dyaWQtdGVtcGxhdGUtY29sdW1ucycsXG4gICAgICAgICAgICAnR3JpZCBUZW1wbGF0ZSBDb2x1bW5zJyxcbiAgICAgICAgICAgIG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS50ZXh0KS5idWlsZCgpLFxuICAgICAgICAgICAgRXZlbnRUeXBlRW51bS5pbnB1dCk7XG5cbiAgICAgICAgdGhpcy5ncmlkVGVtcGxhdGVSb3dzSW5wdXQgPSBuZXcgR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0LFxuICAgICAgICAgICAgJ2dyaWQtdGVtcGxhdGUtcm93cycsXG4gICAgICAgICAgICAnR3JpZCBUZW1wbGF0ZSBSb3dzJyxcbiAgICAgICAgICAgIG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS50ZXh0KS5idWlsZCgpLFxuICAgICAgICAgICAgRXZlbnRUeXBlRW51bS5pbnB1dCk7XG5cbiAgICAgICAgdGhpcy5ncmlkQXV0b0NvbHVtbnNJbnB1dCA9IG5ldyBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQsXG4gICAgICAgICAgICAnZ3JpZC1hdXRvLWNvbHVtbnMnLFxuICAgICAgICAgICAgJ0dyaWQgQXV0byBDb2x1bW5zJyxcbiAgICAgICAgICAgIG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS50ZXh0KS5idWlsZCgpLFxuICAgICAgICAgICAgRXZlbnRUeXBlRW51bS5pbnB1dCk7XG5cbiAgICAgICAgdGhpcy5ncmlkQXV0b1Jvd3NJbnB1dCA9IG5ldyBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQsXG4gICAgICAgICAgICAnZ3JpZC1hdXRvLXJvd3MnLFxuICAgICAgICAgICAgJ0dyaWQgQXV0byBSb3dzJyxcbiAgICAgICAgICAgIG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS50ZXh0KS5idWlsZCgpLFxuICAgICAgICAgICAgRXZlbnRUeXBlRW51bS5pbnB1dCk7XG5cbiAgICAgICAgdGhpcy5ncmlkVGVtcGxhdGVBcmVhc1RleHRhcmVhID0gbmV3IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCxcbiAgICAgICAgICAgICdncmlkLXRlbXBsYXRlLWFyZWFzJyxcbiAgICAgICAgICAgICdHcmlkIFRlbXBsYXRlIEFyZWFzJyxcbiAgICAgICAgICAgIG5ldyBUZXh0YXJlYUJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLnJlc2l6ZSwgJ3ZlcnRpY2FsJylcbiAgICAgICAgICAgICAgICAuYnVpbGQoKSxcbiAgICAgICAgICAgIEV2ZW50VHlwZUVudW0uaW5wdXQpO1xuXG4gICAgICAgIHRoaXMuZ3JpZEp1c3RpZnlJdGVtc1NlbGVjdG9yID0gbmV3IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCxcbiAgICAgICAgICAgICdqdXN0aWZ5LWl0ZW1zJyxcbiAgICAgICAgICAgICdHcmlkIEp1c3RpZnkgSXRlbXMnLFxuICAgICAgICAgICAgbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKEp1c3RpZnlHcmlkSXRlbXNFbnVtKS5idWlsZCgpLFxuICAgICAgICAgICAgRXZlbnRUeXBlRW51bS5jaGFuZ2UpO1xuXG4gICAgICAgIHRoaXMuZ3JpZEFsaWduSXRlbXNTZWxlY3RvciA9IG5ldyBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQsXG4gICAgICAgICAgICAnYWxpZ24taXRlbXMnLFxuICAgICAgICAgICAgJ0dyaWQgQWxpZ24gSXRlbXMnLFxuICAgICAgICAgICAgbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKEFsaWduR3JpZEl0ZW1zRW51bSkuYnVpbGQoKSxcbiAgICAgICAgICAgIEV2ZW50VHlwZUVudW0uY2hhbmdlKTtcblxuICAgICAgICB0aGlzLmdyaWRKdXN0aWZ5Q29udGVudFNlbGVjdG9yID0gbmV3IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCxcbiAgICAgICAgICAgICdqdXN0aWZ5LWNvbnRlbnQnLFxuICAgICAgICAgICAgJ0dyaWQgSnVzdGlmeSBDb250ZW50JyxcbiAgICAgICAgICAgIG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihKdXN0aWZ5R3JpZENvbnRlbnRFbnVtKS5idWlsZCgpLFxuICAgICAgICAgICAgRXZlbnRUeXBlRW51bS5jaGFuZ2UpO1xuXG4gICAgICAgIHRoaXMuZ3JpZEFsaWduQ29udGVudFNlbGVjdG9yID0gbmV3IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCxcbiAgICAgICAgICAgICdhbGlnbi1jb250ZW50JyxcbiAgICAgICAgICAgICdHcmlkIEFsaWduIENvbnRlbnQnLFxuICAgICAgICAgICAgbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKEFsaWduR3JpZENvbnRlbnRFbnVtKS5idWlsZCgpLFxuICAgICAgICAgICAgRXZlbnRUeXBlRW51bS5jaGFuZ2UpO1xuXG4gICAgICAgIHRoaXMuZ3JpZEF1dG9GbG93U2VsZWN0b3IgPSBuZXcgR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0LFxuICAgICAgICAgICAgJ2dyaWQtYXV0by1mbG93JyxcbiAgICAgICAgICAgICdHcmlkIEF1dG8gRmxvdycsXG4gICAgICAgICAgICBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIoR3JpZEF1dG9GbG93RW51bSkuYnVpbGQoKSxcbiAgICAgICAgICAgIEV2ZW50VHlwZUVudW0uY2hhbmdlKTtcblxuICAgICAgICB0aGlzLmdyaWRDb2x1bW5HYXBJbnB1dCA9IG5ldyBJbnB1dEFuZFVuaXRzU2VsZWN0b3JDb21wb25lbnQoXG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0LFxuICAgICAgICAgICAgJ2NvbHVtbi1nYXAnLFxuICAgICAgICAgICAgJ0dyaWQgQ29sdW1uIEdhcCdcbiAgICAgICAgKVxuICAgICAgICAgICAgLnNldE1pblZhbHVlKDApXG4gICAgICAgICAgICAuc2V0WmVyb1ZhbHVlKDApXG5cbiAgICAgICAgdGhpcy5ncmlkUm93R2FwSW5wdXQgPSBuZXcgSW5wdXRBbmRVbml0c1NlbGVjdG9yQ29tcG9uZW50KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQsICdyb3ctZ2FwJywgJ0dyaWQgUm93IEdhcCcpXG4gICAgICAgICAgICAuc2V0TWluVmFsdWUoMClcbiAgICAgICAgICAgIC5zZXRaZXJvVmFsdWUoMClcblxuICAgICAgICByZXR1cm4gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5ib3JkZXIsICcxcHggc29saWQgIzRDQUY1MCcpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ucGFkZGluZywgJzNweCcpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0Rpc3BsYXkgR3JpZCBhcyBQYXJlbnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5ncmlkVGVtcGxhdGVDb2x1bW5zSW5wdXQuY29tcG9uZW50KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmdyaWRUZW1wbGF0ZVJvd3NJbnB1dC5jb21wb25lbnQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuZ3JpZEF1dG9Db2x1bW5zSW5wdXQuY29tcG9uZW50KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmdyaWRBdXRvUm93c0lucHV0LmNvbXBvbmVudClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5ncmlkVGVtcGxhdGVBcmVhc1RleHRhcmVhLmNvbXBvbmVudClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5ncmlkSnVzdGlmeUl0ZW1zU2VsZWN0b3IuY29tcG9uZW50KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmdyaWRBbGlnbkl0ZW1zU2VsZWN0b3IuY29tcG9uZW50KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmdyaWRKdXN0aWZ5Q29udGVudFNlbGVjdG9yLmNvbXBvbmVudClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5ncmlkQWxpZ25Db250ZW50U2VsZWN0b3IuY29tcG9uZW50KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmdyaWRBdXRvRmxvd1NlbGVjdG9yLmNvbXBvbmVudClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5ncmlkQ29sdW1uR2FwSW5wdXQuY29tcG9uZW50KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmdyaWRSb3dHYXBJbnB1dC5jb21wb25lbnQpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEdyaWRBc1BhcmVudEluaXRpYWxWYWx1ZXMoKSB7XG4gICAgICAgIHRoaXMuZ3JpZFRlbXBsYXRlQ29sdW1uc0lucHV0LnNldFZhbHVlKHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2dyaWQtdGVtcGxhdGUtY29sdW1ucyddIHx8ICcnKTtcbiAgICAgICAgdGhpcy5ncmlkVGVtcGxhdGVSb3dzSW5wdXQuc2V0VmFsdWUodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZ3JpZC10ZW1wbGF0ZS1yb3dzJ10gfHwgJycpO1xuICAgICAgICB0aGlzLmdyaWRBdXRvQ29sdW1uc0lucHV0LnNldFZhbHVlKHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2dyaWQtYXV0by1jb2x1bW5zJ10gfHwgJycpO1xuICAgICAgICB0aGlzLmdyaWRBdXRvUm93c0lucHV0LnNldFZhbHVlKHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2dyaWQtYXV0by1yb3dzJ10gfHwgJycpO1xuICAgICAgICB0aGlzLmdyaWRUZW1wbGF0ZUFyZWFzVGV4dGFyZWEuc2V0VmFsdWUodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZ3JpZC10ZW1wbGF0ZS1hcmVhcyddIHx8ICcnKTtcbiAgICAgICAgdGhpcy5ncmlkSnVzdGlmeUl0ZW1zU2VsZWN0b3Iuc2V0VmFsdWUodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnanVzdGlmeS1pdGVtcyddIHx8ICcnKTtcbiAgICAgICAgdGhpcy5ncmlkQWxpZ25JdGVtc1NlbGVjdG9yLnNldFZhbHVlKHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2FsaWduLWl0ZW1zJ10gfHwgJycpO1xuICAgICAgICB0aGlzLmdyaWRKdXN0aWZ5Q29udGVudFNlbGVjdG9yLnNldFZhbHVlKHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2p1c3RpZnktY29udGVudCddIHx8ICcnKTtcbiAgICAgICAgdGhpcy5ncmlkQWxpZ25Db250ZW50U2VsZWN0b3Iuc2V0VmFsdWUodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYWxpZ24tY29udGVudCddIHx8ICcnKTtcbiAgICAgICAgdGhpcy5ncmlkQXV0b0Zsb3dTZWxlY3Rvci5zZXRWYWx1ZSh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydncmlkLWF1dG8tZmxvdyddIHx8ICcnKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlc2V0RmxleCgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuZmxleENvbnRhaW5lckFzUGFyZW50LmJ1aWxkKCkpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHVuZGVmaW5lZDtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2ZsZXgtZGlyZWN0aW9uJ10gPSAnJztcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2ZsZXgtd3JhcCddID0gJyc7XG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydhbGlnbi1pdGVtcyddID0gJyc7XG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydqdXN0aWZ5LWNvbnRlbnQnXSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYWxpZ24tY29udGVudCddID0gJyc7XG5cbiAgICAgICAgICAgIC8vIE5PVEU6IGRlY2lzaW9uOiBkZWxldGUgb25seSBjaGlsZHJlbiBzdHlsZXMgZm9yIGNsYXNzZXMgbmFtZWQgYXMgdGhlIGNvbXBvbmVudCBpZC5cbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5jaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgQ3NzU3R5bGVTaGVldC5nZXRSdWxlU3R5bGVzKGNoaWxkWyduYW1lJ10pWydhbGlnbi1zZWxmJ10gPSAnJztcbiAgICAgICAgICAgICAgICBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXMoY2hpbGRbJ25hbWUnXSlbJ2ZsZXgtZ3JvdyddID0gJyc7XG4gICAgICAgICAgICAgICAgQ3NzU3R5bGVTaGVldC5nZXRSdWxlU3R5bGVzKGNoaWxkWyduYW1lJ10pWydmbGV4LXNocmluayddID0gJyc7XG4gICAgICAgICAgICAgICAgQ3NzU3R5bGVTaGVldC5nZXRSdWxlU3R5bGVzKGNoaWxkWyduYW1lJ10pWydmbGV4LWJhc2lzJ10gPSAnJztcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHJlc2V0R3JpZCgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuZ3JpZENvbnRhaW5lckFzUGFyZW50LmJ1aWxkKCkpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHVuZGVmaW5lZDtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2dyaWQtdGVtcGxhdGUtY29sdW1ucyddID0gJyc7XG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydncmlkLXRlbXBsYXRlLXJvd3MnXSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZ3JpZC1hdXRvLWNvbHVtbnMnXSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZ3JpZC1hdXRvLXJvd3MnXSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZ3JpZC10ZW1wbGF0ZS1hcmVhcyddID0gJyc7XG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydqdXN0aWZ5LWl0ZW1zJ10gPSAnJztcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2dyaWQtYXV0by1mbG93J10gPSAnJztcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2NvbHVtbi1nYXAnXSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsncm93LWdhcCddID0gJyc7XG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydhbGlnbi1pdGVtcyddID0gJyc7XG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydqdXN0aWZ5LWNvbnRlbnQnXSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYWxpZ24tY29udGVudCddID0gJyc7XG5cbiAgICAgICAgICAgIC8vIE5PVEU6IGRlY2lzaW9uOiBkZWxldGUgb25seSBjaGlsZHJlbiBzdHlsZXMgZm9yIGNsYXNzZXMgbmFtZWQgYXMgdGhlIGNvbXBvbmVudCBpZC5cbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5jaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgQ3NzU3R5bGVTaGVldC5nZXRSdWxlU3R5bGVzKGNoaWxkWyduYW1lJ10pWydncmlkLWNvbHVtbi1zdGFydCddID0gJyc7XG4gICAgICAgICAgICAgICAgQ3NzU3R5bGVTaGVldC5nZXRSdWxlU3R5bGVzKGNoaWxkWyduYW1lJ10pWydncmlkLWNvbHVtbi1lbmQnXSA9ICcnO1xuICAgICAgICAgICAgICAgIENzc1N0eWxlU2hlZXQuZ2V0UnVsZVN0eWxlcyhjaGlsZFsnbmFtZSddKVsnZ3JpZC1yb3ctc3RhcnQnXSA9ICcnO1xuICAgICAgICAgICAgICAgIENzc1N0eWxlU2hlZXQuZ2V0UnVsZVN0eWxlcyhjaGlsZFsnbmFtZSddKVsnZ3JpZC1yb3ctZW5kJ10gPSAnJztcbiAgICAgICAgICAgICAgICBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXMoY2hpbGRbJ25hbWUnXSlbJ2p1c3RpZnktc2VsZiddID0gJyc7XG4gICAgICAgICAgICAgICAgQ3NzU3R5bGVTaGVldC5nZXRSdWxlU3R5bGVzKGNoaWxkWyduYW1lJ10pWydhbGlnbi1zZWxmJ10gPSAnJztcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgY2xhc3NOYW1lVXBkYXRlZChuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCA9IENzc1N0eWxlU2hlZXQuZ2V0UnVsZVN0eWxlcyhuYW1lKTtcblxuICAgICAgICBjb25zdCBjdXJyZW50UHJvcGVydGllcyA9IHRoaXMuZ2V0Q3VycmVudFByb3BlcnRpZXMoJ2Rpc3BsYXknKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5U2VsZWN0b3IudmFsdWUgPSBjdXJyZW50UHJvcGVydGllcztcblxuICAgICAgICB0aGlzLnNldENvbXBvbmVudEFjY29yZGluZ1RvU2VsZWN0b3IodHJ1ZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVGbGV4Q29tcG9uZW50c1N0eWxlU2hlZXQoKSB7XG4gICAgICAgIHRoaXMuZmxleERpcmVjdGlvblNlbGVjdG9yLnVwZGF0ZVN0eWxlU2hlZXQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCk7XG4gICAgICAgIHRoaXMuZmxleFdyYXBTZWxlY3Rvci51cGRhdGVTdHlsZVNoZWV0KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQpO1xuICAgICAgICB0aGlzLmFsaWduSXRlbXNTZWxlY3Rvci51cGRhdGVTdHlsZVNoZWV0KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQpO1xuICAgICAgICB0aGlzLmp1c3RpZnlDb250ZW50U2VsZWN0b3IudXBkYXRlU3R5bGVTaGVldCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0KTtcbiAgICAgICAgdGhpcy5hbGlnbkNvbnRlbnRTZWxlY3Rvci51cGRhdGVTdHlsZVNoZWV0KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlR3JpZENvbXBvbmVudHNTdHlsZVNoZWV0KCkge1xuICAgICAgICB0aGlzLmdyaWRUZW1wbGF0ZUNvbHVtbnNJbnB1dC51cGRhdGVTdHlsZVNoZWV0KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQpO1xuICAgICAgICB0aGlzLmdyaWRUZW1wbGF0ZVJvd3NJbnB1dC51cGRhdGVTdHlsZVNoZWV0KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQpO1xuICAgICAgICB0aGlzLmdyaWRBdXRvQ29sdW1uc0lucHV0LnVwZGF0ZVN0eWxlU2hlZXQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCk7XG4gICAgICAgIHRoaXMuZ3JpZEF1dG9Sb3dzSW5wdXQudXBkYXRlU3R5bGVTaGVldCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0KTtcbiAgICAgICAgdGhpcy5ncmlkVGVtcGxhdGVBcmVhc1RleHRhcmVhLnVwZGF0ZVN0eWxlU2hlZXQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCk7XG4gICAgICAgIHRoaXMuZ3JpZEp1c3RpZnlJdGVtc1NlbGVjdG9yLnVwZGF0ZVN0eWxlU2hlZXQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCk7XG4gICAgICAgIHRoaXMuZ3JpZEFsaWduSXRlbXNTZWxlY3Rvci51cGRhdGVTdHlsZVNoZWV0KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQpO1xuICAgICAgICB0aGlzLmdyaWRKdXN0aWZ5Q29udGVudFNlbGVjdG9yLnVwZGF0ZVN0eWxlU2hlZXQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCk7XG4gICAgICAgIHRoaXMuZ3JpZEFsaWduQ29udGVudFNlbGVjdG9yLnVwZGF0ZVN0eWxlU2hlZXQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCk7XG4gICAgICAgIHRoaXMuZ3JpZEF1dG9GbG93U2VsZWN0b3IudXBkYXRlU3R5bGVTaGVldCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0KTtcbiAgICAgICAgdGhpcy5ncmlkQ29sdW1uR2FwSW5wdXQudXBkYXRlU3R5bGVTaGVldCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0KTtcbiAgICAgICAgdGhpcy5ncmlkUm93R2FwSW5wdXQudXBkYXRlU3R5bGVTaGVldCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ2xhc3NDaGFuZ2VPYnNlcnZlckludGVyZmFjZSBmcm9tICcuLi9pbnRlcmZhY2VzL2NsYXNzLWNoYW5nZS1vYnNlcnZlci5pbnRlcmZhY2UnO1xuXG5pbXBvcnQgQ29udGFpbmVyQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvQ29udGFpbmVyQnVpbGRlcic7XG5pbXBvcnQgSW5wdXRCdWlsZGVyIGZyb20gJy4uL21vZGVscy9JbnB1dEJ1aWxkZXInO1xuaW1wb3J0IExhYmVsQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvTGFiZWxCdWlsZGVyJztcbmltcG9ydCBTZWxlY3RvckZyb21FbnVtQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXInO1xuaW1wb3J0IEJ1dHRvbkJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0J1dHRvbkJ1aWxkZXInO1xuXG5pbXBvcnQgQ3NzU3R5bGVTaGVldCBmcm9tICcuLi8uLi9jc3Mtc3R5bGVzaGVldC9jc3Mtc3R5bGVzaGVldCc7XG5pbXBvcnQgZ2V0VW5pdCBmcm9tICcuLi9mdW5jdGlvbnMvZ2V0LWNzcy11bml0JztcbmltcG9ydCBjb2xvclRvSGV4IGZyb20gJy4uL2Z1bmN0aW9ucy9yZ2ItdG8taGV4JztcblxuaW1wb3J0IHsgSW5wdXRUeXBlRW51bSB9IGZyb20gJy4uL2VudW1zL2lucHV0LXR5cGUuZW51bSc7XG5pbXBvcnQgeyBVbml0c0VudW0gfSBmcm9tICcuLi9lbnVtcy91bml0cy5lbnVtJztcbmltcG9ydCB7IFN0eWxlTmFtZUVudW0gfSBmcm9tICcuLi9lbnVtcy9zdHlsZS1uYW1lLmVudW0nO1xuaW1wb3J0IHsgRGlzcGxheVR5cGVzRW51bSB9IGZyb20gJy4uL2VudW1zL2Rpc3BsYXktdHlwZXMuZW51bSc7XG5pbXBvcnQgeyBGb250c0VudW0gfSBmcm9tICcuLi9lbnVtcy9mb250cy5lbnVtJztcbmltcG9ydCB7IEZvbnRTdHlsZXNFbnVtIH0gZnJvbSAnLi4vZW51bXMvZm9udC1zdHlsZXMuZW51bSc7XG5pbXBvcnQgeyBGb250V2VpZ2h0RW51bSB9IGZyb20gJy4uL2VudW1zL2ZvbnQtd2VpZ2h0LmVudW0nO1xuaW1wb3J0IHsgRm9udFZhcmlhbnRFbnVtIH0gZnJvbSAnLi4vZW51bXMvZm9udC12YXJpYW50LmVudW0nO1xuXG4vLyBUT0RPOiBoYWNlciBtYXMgYmVsbG8gZWwgY29udGVuZWRvciBkZSB0b2RhcyBsYXMgZnVlbnRlcyBxdWUgdGllbmUgZWwgZWxlbWVudG9cbi8vIFRPRE86IHZlciBzaSBzZSBwdWVkZW4gYWdyZWdhciBmdWVudGVzIGRlIEdvb2dsZSwgcG9yIGVqZW1wbG8uLi4gY29tbyBoYWNlcmxvLi4uXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvbnRDb21wb25lbnQgaW1wbGVtZW50cyBDbGFzc0NoYW5nZU9ic2VydmVySW50ZXJmYWNlIHtcbiAgICBwcml2YXRlIGRvbUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcbiAgICBwcml2YXRlIGRvbUVsZW1lbnRTdHlsZVNoZWV0OiBDU1NTdHlsZURlY2xhcmF0aW9uO1xuXG4gICAgcHJpdmF0ZSBjdXJyZW50Rm9udEZhbWlsaWVzQXJyYXk6IHN0cmluZ1tdID0gW107XG4gICAgcHJpdmF0ZSBmb250U2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIHByaXZhdGUgY3VycmVudEZvbnRzRWxlbWVudHNDb250YWluZXI6IENvbnRhaW5lckJ1aWxkZXI7XG4gICAgcHJpdmF0ZSBjdXJyZW50Rm9udHNDb250YWluZXI6IENvbnRhaW5lckJ1aWxkZXI7XG5cbiAgICBwcml2YXRlIGZvbnRTaXplSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBmb250VW5pdFNlbGVjdG9yOiBIVE1MU2VsZWN0RWxlbWVudDtcblxuICAgIHByaXZhdGUgZm9udFN0eWxlU2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIHByaXZhdGUgZm9udFdlaWdodFNlbGVjdG9yOiBIVE1MU2VsZWN0RWxlbWVudDtcbiAgICBwcml2YXRlIGZvbnRWYXJpYW50U2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIHByaXZhdGUgZm9udENvbG9ySW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihkb21FbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0ID0gQ3NzU3R5bGVTaGVldC5nZXRSdWxlU3R5bGVzKHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3RbMF0pO1xuICAgICAgICB0aGlzLmFkZENvbXBvbmVudHMoKTtcbiAgICB9XG5cbiAgICBnZXQgY29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRDb21wb25lbnRzKCkge1xuICAgICAgICB0aGlzLmFkZEZvbnQgPSB0aGlzLmFkZEZvbnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW1vdmVGb250ID0gdGhpcy5yZW1vdmVGb250LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubW92ZUZvbnRUb1RoZUZyb250ID0gdGhpcy5tb3ZlRm9udFRvVGhlRnJvbnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5tb3ZlRm9udEJlaGluZCA9IHRoaXMubW92ZUZvbnRCZWhpbmQuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZUZvbnRTaXplID0gdGhpcy51cGRhdGVGb250U2l6ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZUZvbnRTdHlsZSA9IHRoaXMudXBkYXRlRm9udFN0eWxlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlRm9udFdlaWdodCA9IHRoaXMudXBkYXRlRm9udFdlaWdodC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZUZvbnRWYXJpYW4gPSB0aGlzLnVwZGF0ZUZvbnRWYXJpYW4uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGVGb250Q29sb3IgPSB0aGlzLnVwZGF0ZUZvbnRDb2xvci5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuYnVpbGRBbGxDb21wb25lbnRzKCk7XG4gICAgICAgIHRoaXMuc2V0SW5pdGlhbFZhbHVlc0FjY29yZGluZ1RvQ2xhc3MoKTtcblxuICAgICAgICBjb25zdCBhZGRGb250QnV0dG9uID0gbmV3IEJ1dHRvbkJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldElubmVyVGV4dCgnQWRkJylcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYWRkRm9udClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgY29uc3QgZm9udEZhbWlseUNvbXBvbmVudHNDb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0FkZCBGb250IEZhbWlseScpXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmZvbnRTZWxlY3RvcilcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQoYWRkRm9udEJ1dHRvbilcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICB0aGlzLmN1cnJlbnRGb250c0NvbnRhaW5lciA9IHRoaXMuY3VycmVudEZvbnRzQ29tcG9uZW50c0NvbnRhaW5lcigpO1xuXG4gICAgICAgIGNvbnN0IGZvbnRTaXplQ29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdGb250IFNpemUnKVxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5mb250U2l6ZUlucHV0KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmZvbnRVbml0U2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgY29uc3QgZm9udFN0eWxlQ29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdGb250IFN0eWxlJylcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuZm9udFN0eWxlU2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgY29uc3QgZm9udFdlaWdodENvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnRm9udCBXZWlnaHQnKVxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5mb250V2VpZ2h0U2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgY29uc3QgZm9udFZhcmlhbnRDb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0ZvbnQgVmFyaWFudCcpXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmZvbnRWYXJpYW50U2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgY29uc3QgZm9udENvbG9yQ29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdGb250IENvbG9yJylcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuZm9udENvbG9ySW5wdXQpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5ib3JkZXIsICcxcHggc29saWQgIzRDQUY1MCcpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5wYWRkaW5nLCAnM3B4JylcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnRm9udCcpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChmb250RmFtaWx5Q29tcG9uZW50c0NvbnRhaW5lcilcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZElmRGVmaW5lZCh0aGlzLmN1cnJlbnRGb250c0NvbnRhaW5lci5idWlsZCgpKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKGZvbnRTaXplQ29udGFpbmVyKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKGZvbnRTdHlsZUNvbnRhaW5lcilcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChmb250V2VpZ2h0Q29udGFpbmVyKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKGZvbnRWYXJpYW50Q29udGFpbmVyKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKGZvbnRDb2xvckNvbnRhaW5lcilcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBidWlsZEFsbENvbXBvbmVudHMoKSB7XG4gICAgICAgIHRoaXMuZm9udFNlbGVjdG9yID0gbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKEZvbnRzRW51bSlcbiAgICAgICAgICAgIC5zZWxlY3RPcHRpb24oRm9udHNFbnVtLmRlZmF1bHQpXG4gICAgICAgICAgICAuYnVpbGQoKTtcblxuICAgICAgICB0aGlzLmN1cnJlbnRGb250c0VsZW1lbnRzQ29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKTtcblxuICAgICAgICB0aGlzLmZvbnRTaXplSW5wdXQgPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0ubnVtYmVyKVxuICAgICAgICAgICAgLnNldE1pbigwKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy51cGRhdGVGb250U2l6ZSlcbiAgICAgICAgICAgIC5idWlsZCgpO1xuXG4gICAgICAgIHRoaXMuZm9udFVuaXRTZWxlY3RvciA9IG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihVbml0c0VudW0pXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVGb250U2l6ZSlcbiAgICAgICAgICAgIC5idWlsZCgpO1xuXG4gICAgICAgIHRoaXMuZm9udFN0eWxlU2VsZWN0b3IgPSBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIoRm9udFN0eWxlc0VudW0pXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVGb250U3R5bGUpXG4gICAgICAgICAgICAuYnVpbGQoKTtcblxuICAgICAgICB0aGlzLmZvbnRXZWlnaHRTZWxlY3RvciA9IG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihGb250V2VpZ2h0RW51bSlcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnVwZGF0ZUZvbnRXZWlnaHQpXG4gICAgICAgICAgICAuYnVpbGQoKTtcblxuICAgICAgICB0aGlzLmZvbnRWYXJpYW50U2VsZWN0b3IgPSBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIoRm9udFZhcmlhbnRFbnVtKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudXBkYXRlRm9udFZhcmlhbilcbiAgICAgICAgICAgIC5idWlsZCgpO1xuXG4gICAgICAgIHRoaXMuZm9udENvbG9ySW5wdXQgPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0uY29sb3IpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLnVwZGF0ZUZvbnRDb2xvcilcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRJbml0aWFsVmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpIHtcbiAgICAgICAgdGhpcy5zZXRGb250RmFtaWx5VmFsdWVBY2NvcmRpbmdUb0NsYXNzKCk7XG4gICAgICAgIHRoaXMuZmlsbENvbnRhaW5lckFjY29yZGluZ1RvSW5pdGlhbFZhbHVlcygpO1xuXG4gICAgICAgIHRoaXMuc2V0Rm9udFNpemVWYWx1ZUFjY29yZGluZ1RvQ2xhc3MoKTtcbiAgICAgICAgdGhpcy5zZXRGb250U3R5bGVWYWx1ZUFjY29yZGluZ1RvQ2xhc3MoKTtcbiAgICAgICAgdGhpcy5zZXRGb250V2VpZ2h0VmFsdWVBY2NvcmRpbmdUb0NsYXNzKCk7XG4gICAgICAgIHRoaXMuc2V0Rm9udFZhcmlhbnRWYWx1ZUFjY29yZGluZ1RvQ2xhc3MoKTtcbiAgICAgICAgdGhpcy5zZXRGb250Q29sb3JWYWx1ZUFjY29yZGluZ1RvQ2xhc3MoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEZvbnRGYW1pbHlWYWx1ZUFjY29yZGluZ1RvQ2xhc3MoKSB7XG4gICAgICAgIGNvbnN0IGZvbnRzID0gdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZm9udC1mYW1pbHknXTtcbiAgICAgICAgaWYgKGZvbnRzKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRGb250RmFtaWxpZXNBcnJheSA9IGZvbnRzLnNwbGl0KCcsICcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmaWxsQ29udGFpbmVyQWNjb3JkaW5nVG9Jbml0aWFsVmFsdWVzKCkge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50Rm9udEZhbWlsaWVzQXJyYXkpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEZvbnRGYW1pbGllc0FycmF5LmZvckVhY2goKGZvbnQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRGb250c0VsZW1lbnRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZm9udEZhbWlseUNvbXBvbmVudChmb250LnRyaW0oKSkpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc2V0Rm9udFNpemVWYWx1ZUFjY29yZGluZ1RvQ2xhc3MoKSB7XG4gICAgICAgIGNvbnN0IGZvbnRTaXplID0gdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZm9udC1zaXplJ107XG4gICAgICAgIHRoaXMuZm9udFNpemVJbnB1dC52YWx1ZSA9IGAke3BhcnNlSW50KGZvbnRTaXplKSB8fCAxfWA7XG4gICAgICAgIHRoaXMuZm9udFVuaXRTZWxlY3Rvci52YWx1ZSA9IGdldFVuaXQoZm9udFNpemUsIFVuaXRzRW51bS5lbSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRGb250U3R5bGVWYWx1ZUFjY29yZGluZ1RvQ2xhc3MoKSB7XG4gICAgICAgIGNvbnN0IGZvbnRTdHlsZSA9IHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2ZvbnQtc3R5bGUnXTtcbiAgICAgICAgdGhpcy5mb250U3R5bGVTZWxlY3Rvci52YWx1ZSA9IGZvbnRTdHlsZSA9PT0gJycgPyAnbm9ybWFsJyA6IGZvbnRTdHlsZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEZvbnRXZWlnaHRWYWx1ZUFjY29yZGluZ1RvQ2xhc3MoKSB7XG4gICAgICAgIGNvbnN0IGZvbnRXZWlnaHQgPSB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydmb250LXdlaWdodCddO1xuICAgICAgICB0aGlzLmZvbnRXZWlnaHRTZWxlY3Rvci52YWx1ZSA9IGZvbnRXZWlnaHQgPT09ICcnID8gJ25vcm1hbCcgOiBmb250V2VpZ2h0O1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0Rm9udFZhcmlhbnRWYWx1ZUFjY29yZGluZ1RvQ2xhc3MoKSB7XG4gICAgICAgIGNvbnN0IGZvbnRWYXJpYW50ID0gdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZm9udC12YXJpYW50J107XG4gICAgICAgIHRoaXMuZm9udFZhcmlhbnRTZWxlY3Rvci52YWx1ZSA9IGZvbnRWYXJpYW50ID09PSAnJyA/ICdub3JtYWwnIDogZm9udFZhcmlhbnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRGb250Q29sb3JWYWx1ZUFjY29yZGluZ1RvQ2xhc3MoKSB7XG4gICAgICAgIGNvbnN0IGZvbnRDb2xvciA9IHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2NvbG9yJ107XG4gICAgICAgIHRoaXMuZm9udENvbG9ySW5wdXQudmFsdWUgPSBjb2xvclRvSGV4KGZvbnRDb2xvcik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmb250RmFtaWx5Q29tcG9uZW50KGZvbnQ6IHN0cmluZyk6IEhUTUxEaXZFbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXROYW1lKGZvbnQpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmdyaWQpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zJ10sICcyZnIgMWZyIDFmciAxZnInKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoZm9udClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBCdXR0b25CdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdSZW1vdmUnKVxuICAgICAgICAgICAgICAgIC5zZXROYW1lKGZvbnQpXG4gICAgICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yZW1vdmVGb250KVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IEJ1dHRvbkJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ+KGkScpXG4gICAgICAgICAgICAgICAgLnNldE5hbWUoZm9udClcbiAgICAgICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm1vdmVGb250VG9UaGVGcm9udClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBCdXR0b25CdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCfihpMnKVxuICAgICAgICAgICAgICAgIC5zZXROYW1lKGZvbnQpXG4gICAgICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5tb3ZlRm9udEJlaGluZClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICB9XG5cbiAgICBwcml2YXRlIGN1cnJlbnRGb250c0NvbXBvbmVudHNDb250YWluZXIoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0N1cnJlbnQgQ29tcG9uZW50IEZvbnRzJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuY3VycmVudEZvbnRzRWxlbWVudHNDb250YWluZXIuYnVpbGQoKSlcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICApXG5cbiAgICAgICAgaWYodGhpcy5jdXJyZW50Rm9udEZhbWlsaWVzQXJyYXkubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICBjb250YWluZXIuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCAnYmxvY2snKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29udGFpbmVyLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgJ25vbmUnKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZEZvbnQoKSB7XG4gICAgICAgIGlmKCF0aGlzLmN1cnJlbnRGb250RmFtaWxpZXNBcnJheS5pbmNsdWRlcyh0aGlzLmZvbnRTZWxlY3Rvci52YWx1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEZvbnRGYW1pbGllc0FycmF5LnB1c2godGhpcy5mb250U2VsZWN0b3IudmFsdWUpXG5cbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2ZvbnQtZmFtaWx5J10gPSB0aGlzLmN1cnJlbnRGb250RmFtaWxpZXNBcnJheS5qb2luKCcsICcpO1xuXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRGb250c0VsZW1lbnRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZm9udEZhbWlseUNvbXBvbmVudCh0aGlzLmZvbnRTZWxlY3Rvci52YWx1ZSkpO1xuXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRGb250c0NvbnRhaW5lci5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksICdibG9jaycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW1vdmVGb250KGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGZvbnROYW1lID0gZXZlbnQudGFyZ2V0WyduYW1lJ107XG5cbiAgICAgICAgY29uc3QgZm9udEluZGV4ID0gdGhpcy5jdXJyZW50Rm9udEZhbWlsaWVzQXJyYXkuZmluZEluZGV4KChmb250KSA9PiBmb250ID09PSBmb250TmFtZSk7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50Rm9udEZhbWlsaWVzQXJyYXkuc3BsaWNlKGZvbnRJbmRleCwgMSk7XG5cbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZm9udC1mYW1pbHknXSA9IHRoaXMuY3VycmVudEZvbnRGYW1pbGllc0FycmF5LmpvaW4oJywgJyk7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50Rm9udHNFbGVtZW50c0NvbnRhaW5lci5yZW1vdmVDaGlsZE5vZGVCeU5hbWUoZm9udE5hbWUpO1xuXG4gICAgICAgIGlmKHRoaXMuY3VycmVudEZvbnRzRWxlbWVudHNDb250YWluZXIuZ2V0QWxsQ2hpbGRzKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRGb250c0NvbnRhaW5lci5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksICdub25lJylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgbW92ZUZvbnRUb1RoZUZyb250KGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGZvbnROYW1lID0gZXZlbnQudGFyZ2V0WyduYW1lJ107XG5cbiAgICAgICAgY29uc3QgZm9udEluZGV4ID0gdGhpcy5jdXJyZW50Rm9udEZhbWlsaWVzQXJyYXkuZmluZEluZGV4KChmb250KSA9PiBmb250ID09PSBmb250TmFtZSk7XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRFbGVtZW50ID0gdGhpcy5jdXJyZW50Rm9udEZhbWlsaWVzQXJyYXkuc3BsaWNlKGZvbnRJbmRleCwgMSlbMF07XG5cbiAgICAgICAgdGhpcy5jdXJyZW50Rm9udEZhbWlsaWVzQXJyYXkuc3BsaWNlKGZvbnRJbmRleCAtIDEsIDAsIHNlbGVjdGVkRWxlbWVudCk7XG5cbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZm9udC1mYW1pbHknXSA9IHRoaXMuY3VycmVudEZvbnRGYW1pbGllc0FycmF5Lm1hcCgoZm9udCkgPT4gZm9udCkuam9pbignLCAnKTtcblxuICAgICAgICB0aGlzLmN1cnJlbnRGb250c0VsZW1lbnRzQ29udGFpbmVyLm1vb3ZlQ2hpbGRVcHBlclBvc2l0aW9uQnlOYW1lKGZvbnROYW1lKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG1vdmVGb250QmVoaW5kKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGZvbnROYW1lID0gZXZlbnQudGFyZ2V0WyduYW1lJ107XG5cbiAgICAgICAgY29uc3QgZm9udEluZGV4ID0gdGhpcy5jdXJyZW50Rm9udEZhbWlsaWVzQXJyYXkuZmluZEluZGV4KChmb250KSA9PiBmb250ID09PSBmb250TmFtZSk7XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRFbGVtZW50ID0gdGhpcy5jdXJyZW50Rm9udEZhbWlsaWVzQXJyYXkuc3BsaWNlKGZvbnRJbmRleCwgMSlbMF07XG5cbiAgICAgICAgdGhpcy5jdXJyZW50Rm9udEZhbWlsaWVzQXJyYXkuc3BsaWNlKGZvbnRJbmRleCArIDEsIDAsIHNlbGVjdGVkRWxlbWVudCk7XG5cbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZm9udC1mYW1pbHknXSA9IHRoaXMuY3VycmVudEZvbnRGYW1pbGllc0FycmF5Lm1hcCgoZm9udCkgPT4gZm9udCkuam9pbignLCAnKTtcblxuICAgICAgICB0aGlzLmN1cnJlbnRGb250c0VsZW1lbnRzQ29udGFpbmVyLm1vb3ZlQ2hpbGRMb3dlclBvc2l0aW9uQnlOYW1lKGZvbnROYW1lKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUZvbnRTaXplKCkge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydmb250LXNpemUnXSA9IGAke3RoaXMuZm9udFNpemVJbnB1dC52YWx1ZX0ke3RoaXMuZm9udFVuaXRTZWxlY3Rvci52YWx1ZX1gXG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVGb250U3R5bGUoKSB7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2ZvbnQtc3R5bGUnXSA9IHRoaXMuZm9udFN0eWxlU2VsZWN0b3IudmFsdWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVGb250V2VpZ2h0KCkge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydmb250LXdlaWdodCddID0gdGhpcy5mb250V2VpZ2h0U2VsZWN0b3IudmFsdWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVGb250VmFyaWFuKCkge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydmb250LXZhcmlhbnQnXSA9IHRoaXMuZm9udFZhcmlhbnRTZWxlY3Rvci52YWx1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUZvbnRDb2xvcigpIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnY29sb3InXSA9IHRoaXMuZm9udENvbG9ySW5wdXQudmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGNsYXNzTmFtZVVwZGF0ZWQobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQgPSBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXMobmFtZSk7XG4gICAgICAgIHRoaXMuc2V0SW5pdGlhbFZhbHVlc0FjY29yZGluZ1RvQ2xhc3MoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29udGFpbmVyQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvQ29udGFpbmVyQnVpbGRlcic7XG5pbXBvcnQgTGFiZWxCdWlsZGVyIGZyb20gJy4uL21vZGVscy9MYWJlbEJ1aWxkZXInO1xuXG5pbXBvcnQgeyBTdHlsZU5hbWVFbnVtIH0gZnJvbSAnLi4vZW51bXMvc3R5bGUtbmFtZS5lbnVtJztcbmltcG9ydCB7IEV2ZW50VHlwZUVudW0gfSBmcm9tICcuLi9lbnVtcy9ldmVudC10eXBlLmVudW0nO1xuaW1wb3J0IHsgRmxleERpcmVjdGlvbkVudW0gfSBmcm9tICcuLi9lbnVtcy9mbGV4LWRpcmVjdGlvbi5lbnVtJztcbmltcG9ydCB7IERpc3BsYXlUeXBlc0VudW0gfSBmcm9tICcuLi9lbnVtcy9kaXNwbGF5LXR5cGVzLmVudW0nO1xuaW1wb3J0IHsgQWxpZ25GbGV4SXRlbXNFbnVtIH0gZnJvbSAnLi4vZW51bXMvYWxpZ24tZmxleC1pdGVtcy5lbnVtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBjb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgZG9tRWxlbWVudFN0eWxlU2hlZXQ6IENTU1N0eWxlRGVjbGFyYXRpb247XG5cbiAgICBwcml2YXRlIGxhYmVsOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBzdHlsZTogc3RyaW5nO1xuICAgIHByaXZhdGUgY2hhbmdlRWxlbWVudDogSFRNTElucHV0RWxlbWVudCB8IEhUTUxTZWxlY3RFbGVtZW50IHwgSFRNTFRleHRBcmVhRWxlbWVudDtcbiAgICBwcml2YXRlIGV2ZW50VHlwZTogRXZlbnRUeXBlRW51bTtcbiAgICBwcml2YXRlIHVuaXQ6IHN0cmluZztcblxuICAgIHByaXZhdGUgemVyb1ZhbHVlOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgZG9tRWxlbWVudFN0eWxlU2hlZXQ6IENTU1N0eWxlRGVjbGFyYXRpb24sXG4gICAgICAgIHN0eWxlOiBzdHJpbmcsXG4gICAgICAgIGxhYmVsOiBzdHJpbmcsXG4gICAgICAgIGNoYW5nZUVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MU2VsZWN0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnQsXG4gICAgICAgIGV2ZW50VHlwZTogRXZlbnRUeXBlRW51bSxcbiAgICAgICAgdW5pdCA9ICcnLFxuICAgICkge1xuICAgICAgICB0aGlzLnN0eWxlID0gc3R5bGU7XG4gICAgICAgIHRoaXMubGFiZWwgPSBsYWJlbDtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCA9IGRvbUVsZW1lbnRTdHlsZVNoZWV0O1xuICAgICAgICB0aGlzLmNoYW5nZUVsZW1lbnQgPSBjaGFuZ2VFbGVtZW50O1xuICAgICAgICB0aGlzLmV2ZW50VHlwZSA9IGV2ZW50VHlwZTtcbiAgICAgICAgdGhpcy51bml0ID0gdW5pdDtcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnRzKCk7XG4gICAgfVxuXG4gICAgZ2V0IGNvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkQ29tcG9uZW50cygpIHtcbiAgICAgICAgdGhpcy51cGRhdGVQcm9wZXJ0eSA9IHRoaXMudXBkYXRlUHJvcGVydHkuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmNoYW5nZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmV2ZW50VHlwZSwgdGhpcy51cGRhdGVQcm9wZXJ0eSlcblxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydmbGV4LWRpcmVjdGlvbiddLCBGbGV4RGlyZWN0aW9uRW51bS5jb2x1bW4pXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnYWxpZ24taXRlbXMnXSwgQWxpZ25GbGV4SXRlbXNFbnVtLnN0cmV0Y2gpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQodGhpcy5sYWJlbClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuY2hhbmdlRWxlbWVudClcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgfVxuXG4gICAgcHVibGljIHNldFZhbHVlKHZhbHVlID0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VFbGVtZW50LnZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZVN0eWxlU2hlZXQoZG9tRWxlbWVudFN0eWxlU2hlZXQ6IENTU1N0eWxlRGVjbGFyYXRpb24pIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCA9IGRvbUVsZW1lbnRTdHlsZVNoZWV0O1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlUHJvcGVydHkoKSB7XG4gICAgICAgIGlmKHBhcnNlSW50KHRoaXMuY2hhbmdlRWxlbWVudC52YWx1ZSkgPT09IHRoaXMuemVyb1ZhbHVlKXtcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbdGhpcy5zdHlsZV0gPSAnJztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0W3RoaXMuc3R5bGVdID0gdGhpcy5jaGFuZ2VFbGVtZW50LnZhbHVlICsgdGhpcy51bml0O1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRaZXJvVmFsdWUodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLnplcm9WYWx1ZSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29udGFpbmVyQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvQ29udGFpbmVyQnVpbGRlcic7XG5pbXBvcnQgSW5wdXRCdWlsZGVyIGZyb20gJy4uL21vZGVscy9JbnB1dEJ1aWxkZXInO1xuaW1wb3J0IExhYmVsQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvTGFiZWxCdWlsZGVyJztcbmltcG9ydCBCdXR0b25CdWlsZGVyIGZyb20gJy4uL21vZGVscy9CdXR0b25CdWlsZGVyJztcblxuaW1wb3J0IHsgU3R5bGVOYW1lRW51bSB9IGZyb20gJy4uL2VudW1zL3N0eWxlLW5hbWUuZW51bSc7XG5pbXBvcnQgeyBJbnB1dFR5cGVFbnVtIH0gZnJvbSAnLi4vZW51bXMvaW5wdXQtdHlwZS5lbnVtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2VuZXJpY1ByaW1hcnlJbnB1dENvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBkb21FbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBsYWJlbDogc3RyaW5nO1xuICAgIHByaXZhdGUgc3R5bGU6IHN0cmluZztcblxuICAgIHByaXZhdGUgcHJvcGVydHlWYWx1ZUlucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IoZG9tRWxlbWVudDogSFRNTEVsZW1lbnQsIHN0eWxlOiBzdHJpbmcsIGxhYmVsOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgICAgICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICAgICAgICB0aGlzLnN0eWxlID0gc3R5bGU7XG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50cygpO1xuICAgIH1cblxuICAgIGdldCBjb21wb25lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZENvbXBvbmVudHMoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlUHJvcGVydHkgPSB0aGlzLnVwZGF0ZVByb3BlcnR5LmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5wcm9wZXJ0eVZhbHVlSW5wdXQgPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0udGV4dClcbiAgICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLmRvbUVsZW1lbnRbdGhpcy5zdHlsZV0pXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLnVwZGF0ZVByb3BlcnR5KVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICBjb25zdCBlbGVtZW50c0NvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLnByb3BlcnR5VmFsdWVJbnB1dClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChcbiAgICAgICAgICAgICAgICBuZXcgQnV0dG9uQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0NoYW5nZScpXG4gICAgICAgICAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudXBkYXRlUHJvcGVydHkpXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uYm9yZGVyLCAnMXB4IHNvbGlkICM0Q0FGNTAnKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ucGFkZGluZywgJzNweCcpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQodGhpcy5sYWJlbClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKGVsZW1lbnRzQ29udGFpbmVyKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZVByb3BlcnR5KGV2ZW50OiBNb3VzZUV2ZW50IHwgS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAoIGV2ZW50LnR5cGUgPT09ICdjbGljaydcbiAgICAgICAgICAgIHx8IChldmVudCBhcyBLZXlib2FyZEV2ZW50KS5rZXkgPT09ICdFbnRlcidcbiAgICAgICAgICAgIHx8IChldmVudCBhcyBLZXlib2FyZEV2ZW50KS5jb2RlID09PSAnMTMnXG4gICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50W3RoaXMuc3R5bGVdID0gdGhpcy5wcm9wZXJ0eVZhbHVlSW5wdXQudmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgQ29udGFpbmVyQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvQ29udGFpbmVyQnVpbGRlcic7XG5pbXBvcnQgTGFiZWxCdWlsZGVyIGZyb20gJy4uL21vZGVscy9MYWJlbEJ1aWxkZXInO1xuaW1wb3J0IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyIGZyb20gJy4uL21vZGVscy9TZWxlY3RvckZyb21FbnVtQnVpbGRlcic7XG5cbmltcG9ydCB7IFN0eWxlTmFtZUVudW0gfSBmcm9tICcuLi9lbnVtcy9zdHlsZS1uYW1lLmVudW0nO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2VuZXJpY1ByaW1hcnlTZWxlY3RvckNvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBkb21FbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBsYWJlbDogc3RyaW5nO1xuICAgIHByaXZhdGUgYXRyaWJ1dGVUb01vZGlmeTogc3RyaW5nO1xuICAgIHByaXZhdGUgb3B0aW9uczogUmVjb3JkPHN0cmluZyxzdHJpbmc+O1xuICAgIHByaXZhdGUgcHJvcGVydHlTZWxlY3RvcjogSFRNTFNlbGVjdEVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihkb21FbGVtZW50OiBIVE1MRWxlbWVudCwgYXRyaWJ1dGVUb01vZGlmeTogc3RyaW5nLCBsYWJlbDogc3RyaW5nLCBvcHRpb25zOiBSZWNvcmQ8c3RyaW5nLHN0cmluZz4pIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgICAgICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICAgICAgICB0aGlzLmF0cmlidXRlVG9Nb2RpZnkgPSBhdHJpYnV0ZVRvTW9kaWZ5O1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB0aGlzLmFkZENvbXBvbmVudHMoKTtcbiAgICB9XG5cbiAgICBnZXQgY29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRDb21wb25lbnRzKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVByb3BlcnR5ID0gdGhpcy51cGRhdGVQcm9wZXJ0eS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMucHJvcGVydHlTZWxlY3RvciA9IG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcih0aGlzLm9wdGlvbnMpXG4gICAgICAgICAgICAuc2VsZWN0T3B0aW9uKHRoaXMuZG9tRWxlbWVudFt0aGlzLmF0cmlidXRlVG9Nb2RpZnldKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudXBkYXRlUHJvcGVydHkpXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIGNvbnN0IGVsZW1lbnRzQ29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMucHJvcGVydHlTZWxlY3RvcilcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5ib3JkZXIsICcxcHggc29saWQgIzRDQUY1MCcpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5wYWRkaW5nLCAnM3B4JylcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCh0aGlzLmxhYmVsKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQoZWxlbWVudHNDb250YWluZXIpXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlUHJvcGVydHkoKSB7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFt0aGlzLmF0cmlidXRlVG9Nb2RpZnldID0gdGhpcy5wcm9wZXJ0eVNlbGVjdG9yLnZhbHVlO1xuICAgIH1cbn1cbiIsImltcG9ydCBDb250YWluZXJCdWlsZGVyIGZyb20gJy4uL21vZGVscy9Db250YWluZXJCdWlsZGVyJztcbmltcG9ydCBJbnB1dEJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0lucHV0QnVpbGRlcic7XG5pbXBvcnQgTGFiZWxCdWlsZGVyIGZyb20gJy4uL21vZGVscy9MYWJlbEJ1aWxkZXInO1xuaW1wb3J0IEJ1dHRvbkJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0J1dHRvbkJ1aWxkZXInO1xuaW1wb3J0IFJhd0hUTUxDb25wb25lbnQgZnJvbSAnLi4vLi4vaHRtbC1jb21wb25lbnRzL1Jhd0hUTUxDb21wb25lbnQnO1xuXG5pbXBvcnQgZGVmaW5lRWxlbWVudElkIGZyb20gJy4uL2Z1bmN0aW9ucy9kZWZpbmUtZWxlbWVudC1pZCc7XG5cbmltcG9ydCB7IFN0eWxlTmFtZUVudW0gfSBmcm9tICcuLi9lbnVtcy9zdHlsZS1uYW1lLmVudW0nO1xuaW1wb3J0IHsgSW5wdXRUeXBlRW51bSB9IGZyb20gJy4uL2VudW1zL2lucHV0LXR5cGUuZW51bSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElkRGVmaW5pdGlvbkNvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBkb21FbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2VzOiBIVE1MRWxlbWVudFtdO1xuXG4gICAgcHJpdmF0ZSBwcm9wZXJ0eVZhbHVlSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihkb21FbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgICAgICAvLyBUT0RPOiBzaSBsYSBjbGFzZSBzb2xvIGxhIHV0aWxpemEgZXNlIHVuaWNvIGNvbXBvbmVudGUsXG4gICAgICAgIC8vIHF1aXphcyBlbCBub21icmUgZGUgbGEgY2xhc2UgY3NzIGRlYmVyaWEgaXIgY29uICMgeSBubyBjb24gcHVudG8uLi5cblxuICAgICAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICAgICAgICBJZERlZmluaXRpb25Db21wb25lbnQuaW5zdGFuY2VzID0gUmF3SFRNTENvbnBvbmVudC5pbnN0YW5jZXM7XG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50cygpO1xuICAgIH1cblxuICAgIGdldCBjb21wb25lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZENvbXBvbmVudHMoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlUHJvcGVydHkgPSB0aGlzLnVwZGF0ZVByb3BlcnR5LmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5wcm9wZXJ0eVZhbHVlSW5wdXQgPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0udGV4dClcbiAgICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLmRvbUVsZW1lbnQuaWQpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLnVwZGF0ZVByb3BlcnR5KVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICBjb25zdCBlbGVtZW50c0NvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLnByb3BlcnR5VmFsdWVJbnB1dClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChcbiAgICAgICAgICAgICAgICBuZXcgQnV0dG9uQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0NoYW5nZScpXG4gICAgICAgICAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudXBkYXRlUHJvcGVydHkpXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uYm9yZGVyLCAnMXB4IHNvbGlkICM0Q0FGNTAnKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ucGFkZGluZywgJzNweCcpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0lkIERlZmluaXRpb24nKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQoZWxlbWVudHNDb250YWluZXIpXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlUHJvcGVydHkoZXZlbnQ6IE1vdXNlRXZlbnQgfCBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGlmICggdGhpcy5wcm9wZXJ0eVZhbHVlSW5wdXQudmFsdWUgIT09IHRoaXMuZG9tRWxlbWVudC5pZFxuICAgICAgICAgICAgJiYgKCBldmVudC50eXBlID09PSAnY2xpY2snXG4gICAgICAgICAgICB8fCAoZXZlbnQgYXMgS2V5Ym9hcmRFdmVudCkua2V5ID09PSAnRW50ZXInXG4gICAgICAgICAgICB8fCAoZXZlbnQgYXMgS2V5Ym9hcmRFdmVudCkuY29kZSA9PT0gJzEzJ1xuICAgICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSBkZWZpbmVFbGVtZW50SWQodGhpcy5wcm9wZXJ0eVZhbHVlSW5wdXQudmFsdWUsIElkRGVmaW5pdGlvbkNvbXBvbmVudC5pbnN0YW5jZXMpO1xuXG4gICAgICAgICAgICAgICAgaWYoaWQgPT09ICcnKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQuaWQgPSBpZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BlcnR5VmFsdWVJbnB1dC52YWx1ZSA9IHRoaXMuZG9tRWxlbWVudC5pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBDb250YWluZXJCdWlsZGVyIGZyb20gJy4uL21vZGVscy9Db250YWluZXJCdWlsZGVyJztcbmltcG9ydCBMYWJlbEJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0xhYmVsQnVpbGRlcic7XG5pbXBvcnQgSW5wdXRCdWlsZGVyIGZyb20gJy4uL21vZGVscy9JbnB1dEJ1aWxkZXInO1xuaW1wb3J0IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyIGZyb20gJy4uL21vZGVscy9TZWxlY3RvckZyb21FbnVtQnVpbGRlcic7XG5cbmltcG9ydCBnZXRVbml0IGZyb20gJy4uL2Z1bmN0aW9ucy9nZXQtY3NzLXVuaXQnO1xuXG5pbXBvcnQgeyBTdHlsZU5hbWVFbnVtIH0gZnJvbSAnLi4vZW51bXMvc3R5bGUtbmFtZS5lbnVtJztcbmltcG9ydCB7IElucHV0VHlwZUVudW0gfSBmcm9tICcuLi9lbnVtcy9pbnB1dC10eXBlLmVudW0nO1xuaW1wb3J0IHsgVW5pdHNFbnVtIH0gZnJvbSAnLi4vZW51bXMvdW5pdHMuZW51bSc7XG5pbXBvcnQgeyBEaXNwbGF5VHlwZXNFbnVtIH0gZnJvbSAnLi4vZW51bXMvZGlzcGxheS10eXBlcy5lbnVtJztcbmltcG9ydCB7IEZsZXhEaXJlY3Rpb25FbnVtIH0gZnJvbSAnLi4vZW51bXMvZmxleC1kaXJlY3Rpb24uZW51bSc7XG5pbXBvcnQgeyBBbGlnbkZsZXhJdGVtc0VudW0gfSBmcm9tICcuLi9lbnVtcy9hbGlnbi1mbGV4LWl0ZW1zLmVudW0nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dEFuZFVuaXRzU2VsZWN0b3JDb21wb25lbnQge1xuICAgIHByaXZhdGUgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcbiAgICBwcml2YXRlIGRvbUVsZW1lbnRTdHlsZVNoZWV0OiBDU1NTdHlsZURlY2xhcmF0aW9uO1xuXG4gICAgcHJpdmF0ZSBsYWJlbDogc3RyaW5nO1xuICAgIHByaXZhdGUgc3R5bGU6IHN0cmluZztcblxuICAgIHByaXZhdGUgcHJvcGVydHlWYWx1ZUlucHV0OiBJbnB1dEJ1aWxkZXI7XG4gICAgcHJpdmF0ZSB1bml0c1NlbGVjdG9ySW5wdXQ6IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyO1xuXG4gICAgcHJpdmF0ZSB6ZXJvVmFsdWU6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRvbUVsZW1lbnRTdHlsZVNoZWV0OiBDU1NTdHlsZURlY2xhcmF0aW9uLCBzdHlsZTogc3RyaW5nLCBsYWJlbDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc3R5bGUgPSBzdHlsZTtcbiAgICAgICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0ID0gZG9tRWxlbWVudFN0eWxlU2hlZXQ7XG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50cygpO1xuICAgICAgICB0aGlzLnNldEluaXRpYWxWYWx1ZXMoKTtcbiAgICB9XG5cbiAgICBnZXQgY29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRDb21wb25lbnRzKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVByb3BlcnR5ID0gdGhpcy51cGRhdGVQcm9wZXJ0eS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMudW5pdHNTZWxlY3RvcklucHV0ID0gbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKFVuaXRzRW51bSlcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnVwZGF0ZVByb3BlcnR5KVxuXG4gICAgICAgIHRoaXMucHJvcGVydHlWYWx1ZUlucHV0ID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLm51bWJlcilcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMudXBkYXRlUHJvcGVydHkpXG5cbiAgICAgICAgY29uc3QgaW5uZXJDb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5wcm9wZXJ0eVZhbHVlSW5wdXQuYnVpbGQoKSlcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLnVuaXRzU2VsZWN0b3JJbnB1dC5idWlsZCgpKVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydmbGV4LWRpcmVjdGlvbiddLCBGbGV4RGlyZWN0aW9uRW51bS5jb2x1bW4pXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnYWxpZ24taXRlbXMnXSwgQWxpZ25GbGV4SXRlbXNFbnVtLnN0cmV0Y2gpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQodGhpcy5sYWJlbClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKGlubmVyQ29udGFpbmVyKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEluaXRpYWxWYWx1ZXMoKSB7XG4gICAgICAgIHRoaXMucHJvcGVydHlWYWx1ZUlucHV0LnNldFZhbHVlKGAke3BhcnNlSW50KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbdGhpcy5zdHlsZV0pIHx8IDB9YClcbiAgICAgICAgdGhpcy51bml0c1NlbGVjdG9ySW5wdXQuc2VsZWN0T3B0aW9uKGdldFVuaXQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFt0aGlzLnN0eWxlXSkpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVQcm9wZXJ0eSgpIHtcbiAgICAgICAgaWYocGFyc2VJbnQodGhpcy5wcm9wZXJ0eVZhbHVlSW5wdXQuZ2V0VmFsdWUoKSkgPT09IHRoaXMuemVyb1ZhbHVlKXtcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbdGhpcy5zdHlsZV0gPSAnJztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0W3RoaXMuc3R5bGVdID1cbiAgICAgICAgICAgIGAke3RoaXMucHJvcGVydHlWYWx1ZUlucHV0LmdldFZhbHVlKCl9JHt0aGlzLnVuaXRzU2VsZWN0b3JJbnB1dC5nZXRWYWx1ZSgpfWBcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlU3R5bGVTaGVldChkb21FbGVtZW50U3R5bGVTaGVldDogQ1NTU3R5bGVEZWNsYXJhdGlvbikge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0ID0gZG9tRWxlbWVudFN0eWxlU2hlZXQ7XG4gICAgICAgIHRoaXMuc2V0SW5pdGlhbFZhbHVlcygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRNaW5WYWx1ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMucHJvcGVydHlWYWx1ZUlucHV0LnNldE1pbih2YWx1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRaZXJvVmFsdWUodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLnplcm9WYWx1ZSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG4iLCJpbXBvcnQgQ2xhc3NDaGFuZ2VPYnNlcnZlckludGVyZmFjZSBmcm9tICcuLi9pbnRlcmZhY2VzL2NsYXNzLWNoYW5nZS1vYnNlcnZlci5pbnRlcmZhY2UnO1xuXG5pbXBvcnQgQ29udGFpbmVyQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvQ29udGFpbmVyQnVpbGRlcic7XG5pbXBvcnQgSW5wdXRCdWlsZGVyIGZyb20gJy4uL21vZGVscy9JbnB1dEJ1aWxkZXInO1xuaW1wb3J0IExhYmVsQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvTGFiZWxCdWlsZGVyJztcbmltcG9ydCBTZWxlY3RvckZyb21FbnVtQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXInO1xuXG5pbXBvcnQgeyBJbnB1dFR5cGVFbnVtIH0gZnJvbSAnLi4vZW51bXMvaW5wdXQtdHlwZS5lbnVtJztcbmltcG9ydCB7IFVuaXRzRW51bSB9IGZyb20gJy4uL2VudW1zL3VuaXRzLmVudW0nO1xuaW1wb3J0IHsgU3R5bGVOYW1lRW51bSB9IGZyb20gJy4uL2VudW1zL3N0eWxlLW5hbWUuZW51bSc7XG5cbmltcG9ydCBDc3NTdHlsZVNoZWV0IGZyb20gJy4uLy4uL2Nzcy1zdHlsZXNoZWV0L2Nzcy1zdHlsZXNoZWV0JztcblxuaW1wb3J0IGNhcGl0YWxpemVGaXJzdExldHRlcnMgZnJvbSAnLi4vZnVuY3Rpb25zL2ZpcnN0LWxldHRlcnMtY2FwaXRhbGl6ZWQnO1xuaW1wb3J0IGdldFVuaXQgZnJvbSAnLi4vZnVuY3Rpb25zL2dldC1jc3MtdW5pdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcmdpbk9yUGFkZGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIENsYXNzQ2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2Uge1xuICAgIHByaXZhdGUgdHlwZTtcbiAgICBwcml2YXRlIGRvbUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcbiAgICBwcml2YXRlIGRvbUVsZW1lbnRTdHlsZVNoZWV0OiBDU1NTdHlsZURlY2xhcmF0aW9uO1xuXG4gICAgcHJpdmF0ZSB0b3BQcm9wZXJ0eVZhbHVlSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSByaWd0aFByb3BlcnR5VmFsdWVJbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgICBwcml2YXRlIGJvdHRvbVByb3BlcnR5VmFsdWVJbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgICBwcml2YXRlIGxlZnRQcm9wZXJ0eVZhbHVlSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIHRvcFVuaXRTZWxlY3RvcjogSFRNTFNlbGVjdEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSByaWdodFVuaXRTZWxlY3RvcjogSFRNTFNlbGVjdEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBib3R0b21Vbml0U2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIHByaXZhdGUgbGVmdFVuaXRTZWxlY3RvcjogSFRNTFNlbGVjdEVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIHNlbGVjdEFsbENoZWNrQm94OiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IoZG9tRWxlbWVudDogSFRNTEVsZW1lbnQsIHR5cGU6ICdtYXJnaW4nIHwgJ3BhZGRpbmcnLCApIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCA9IENzc1N0eWxlU2hlZXQuZ2V0UnVsZVN0eWxlcyh0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0WzBdKVxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudHMoKTtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZXNBY2NvcmRpbmdUb0NsYXNzKCk7XG4gICAgICAgIHRoaXMudXBkYXRlUHJvcGVydHkoKVxuICAgIH1cblxuICAgIGdldCBjb21wb25lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZENvbXBvbmVudHMoKSB7XG4gICAgICAgIC8vIFRPRE86IGZhbHRhIGFncmVnYXIgZWwgIWltcG9ydGFudCB5IHF1aXphcyBsb3MgaW5oZXJpdCB5IG5vIHNlIHNpIGhhYnJhIG1hcyBwcm9waWVkYWRlc1xuICAgICAgICAvLyBxdWl6YXMgdG9kbyBlc28gZGViYSBlc3RhciBlbiBlbCBzZWxlY3RvciBkZSBsYSB1bmlkYWQuLi5cblxuICAgICAgICB0aGlzLnVwZGF0ZVByb3BlcnR5ID0gdGhpcy51cGRhdGVQcm9wZXJ0eS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuc2VsZWN0QWxsQ2hlY2tCb3ggPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0uY2hlY2tib3gpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVQcm9wZXJ0eSlcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgY29uc3Qgc2VsZWN0QWxsQ29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ1NlbGVjdCBBbGwnKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5zZWxlY3RBbGxDaGVja0JveClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgdGhpcy50b3BQcm9wZXJ0eVZhbHVlSW5wdXQgPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0ubnVtYmVyKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy51cGRhdGVQcm9wZXJ0eSlcbiAgICAgICAgICAgIC5idWlsZCgpO1xuICAgICAgICB0aGlzLnJpZ3RoUHJvcGVydHlWYWx1ZUlucHV0ID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLm51bWJlcilcbiAgICAgICAgICAgIC5kaXNhYmxlZCh0aGlzLnNlbGVjdEFsbENoZWNrQm94LmNoZWNrZWQpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLnVwZGF0ZVByb3BlcnR5KVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG4gICAgICAgIHRoaXMuYm90dG9tUHJvcGVydHlWYWx1ZUlucHV0ID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLm51bWJlcilcbiAgICAgICAgICAgIC5kaXNhYmxlZCh0aGlzLnNlbGVjdEFsbENoZWNrQm94LmNoZWNrZWQpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLnVwZGF0ZVByb3BlcnR5KVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG4gICAgICAgIHRoaXMubGVmdFByb3BlcnR5VmFsdWVJbnB1dCA9IG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS5udW1iZXIpXG4gICAgICAgICAgICAuZGlzYWJsZWQodGhpcy5zZWxlY3RBbGxDaGVja0JveC5jaGVja2VkKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy51cGRhdGVQcm9wZXJ0eSlcbiAgICAgICAgICAgIC5idWlsZCgpO1xuXG4gICAgICAgIHRoaXMudG9wVW5pdFNlbGVjdG9yID0gbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKFVuaXRzRW51bSlcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnVwZGF0ZVByb3BlcnR5KVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgdGhpcy5ib3R0b21Vbml0U2VsZWN0b3IgPSBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIoVW5pdHNFbnVtKVxuICAgICAgICAgICAgLmRpc2FibGVkKHRoaXMuc2VsZWN0QWxsQ2hlY2tCb3guY2hlY2tlZClcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnVwZGF0ZVByb3BlcnR5KVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgdGhpcy5yaWdodFVuaXRTZWxlY3RvciA9IG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihVbml0c0VudW0pXG4gICAgICAgICAgICAuZGlzYWJsZWQodGhpcy5zZWxlY3RBbGxDaGVja0JveC5jaGVja2VkKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudXBkYXRlUHJvcGVydHkpXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICB0aGlzLmxlZnRVbml0U2VsZWN0b3IgPSBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIoVW5pdHNFbnVtKVxuICAgICAgICAgICAgLmRpc2FibGVkKHRoaXMuc2VsZWN0QWxsQ2hlY2tCb3guY2hlY2tlZClcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnVwZGF0ZVByb3BlcnR5KVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICBjb25zdCB0b3BDb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnVCcpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLnRvcFByb3BlcnR5VmFsdWVJbnB1dClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLnRvcFVuaXRTZWxlY3RvcilcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgY29uc3QgcmlnaHRDb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnUicpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLnJpZ3RoUHJvcGVydHlWYWx1ZUlucHV0KVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMucmlnaHRVbml0U2VsZWN0b3IpXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIGNvbnN0IGJvdHRvbUNvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdCJylcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuYm90dG9tUHJvcGVydHlWYWx1ZUlucHV0KVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuYm90dG9tVW5pdFNlbGVjdG9yKVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICBjb25zdCBsZWZ0Q29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0wnKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5sZWZ0UHJvcGVydHlWYWx1ZUlucHV0KVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMubGVmdFVuaXRTZWxlY3RvcilcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgY29uc3QgaW5wdXRWYWx1ZXNDb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQodG9wQ29udGFpbmVyKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKHJpZ2h0Q29udGFpbmVyKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKGJvdHRvbUNvbnRhaW5lcilcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChsZWZ0Q29udGFpbmVyKVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmJvcmRlciwgJzFweCBzb2xpZCAjNENBRjUwJylcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLnBhZGRpbmcsICczcHgnKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KGAke2NhcGl0YWxpemVGaXJzdExldHRlcnModGhpcy50eXBlLCAnICcsICcgJyl9IFNlbGVjdG9yYClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKHNlbGVjdEFsbENvbnRhaW5lcilcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChpbnB1dFZhbHVlc0NvbnRhaW5lcilcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVQcm9wZXJ0eSgpIHtcbiAgICAgICAgbGV0IHt0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnR9ID0gdGhpcy5nZXRDdXJyZW50UHJvcGVydGllcygpO1xuXG4gICAgICAgIGlmKHRoaXMuc2VsZWN0QWxsQ2hlY2tCb3guY2hlY2tlZCl7XG4gICAgICAgICAgICB0aGlzLnJpZ3RoUHJvcGVydHlWYWx1ZUlucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tUHJvcGVydHlWYWx1ZUlucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubGVmdFByb3BlcnR5VmFsdWVJbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnJpZ2h0VW5pdFNlbGVjdG9yLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tVW5pdFNlbGVjdG9yLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubGVmdFVuaXRTZWxlY3Rvci5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmKHRoaXMudG9wVW5pdFNlbGVjdG9yLnZhbHVlID09PSBVbml0c0VudW0uYXV0byl7XG4gICAgICAgICAgICAgICAgdG9wID0gJ2F1dG8nO1xuICAgICAgICAgICAgICAgIHJpZ2h0ID0gJ2F1dG8nO1xuICAgICAgICAgICAgICAgIGJvdHRvbSA9ICdhdXRvJztcbiAgICAgICAgICAgICAgICBsZWZ0ID0gJ2F1dG8nO1xuXG4gICAgICAgICAgICAgICAgdGhpcy50b3BQcm9wZXJ0eVZhbHVlSW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMucmlndGhQcm9wZXJ0eVZhbHVlSW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuYm90dG9tUHJvcGVydHlWYWx1ZUlucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnRQcm9wZXJ0eVZhbHVlSW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5yaWdodFVuaXRTZWxlY3Rvci52YWx1ZSA9IHRoaXMudG9wVW5pdFNlbGVjdG9yLnZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuYm90dG9tVW5pdFNlbGVjdG9yLnZhbHVlID0gdGhpcy50b3BVbml0U2VsZWN0b3IudmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5sZWZ0VW5pdFNlbGVjdG9yLnZhbHVlID0gdGhpcy50b3BVbml0U2VsZWN0b3IudmFsdWU7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnRvcFByb3BlcnR5VmFsdWVJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgIHRoaXMucmlndGhQcm9wZXJ0eVZhbHVlSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICB0aGlzLmJvdHRvbVByb3BlcnR5VmFsdWVJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgIHRoaXMubGVmdFByb3BlcnR5VmFsdWVJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRvcFByb3BlcnR5VmFsdWVJbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRvcCA9IGAke3RoaXMudG9wUHJvcGVydHlWYWx1ZUlucHV0LnZhbHVlfSR7dGhpcy50b3BVbml0U2VsZWN0b3IudmFsdWV9YDtcbiAgICAgICAgICAgICAgICByaWdodCA9IGAke3RoaXMudG9wUHJvcGVydHlWYWx1ZUlucHV0LnZhbHVlfSR7dGhpcy50b3BVbml0U2VsZWN0b3IudmFsdWV9YDtcbiAgICAgICAgICAgICAgICBib3R0b20gPSBgJHt0aGlzLnRvcFByb3BlcnR5VmFsdWVJbnB1dC52YWx1ZX0ke3RoaXMudG9wVW5pdFNlbGVjdG9yLnZhbHVlfWA7XG4gICAgICAgICAgICAgICAgbGVmdCA9IGAke3RoaXMudG9wUHJvcGVydHlWYWx1ZUlucHV0LnZhbHVlfSR7dGhpcy50b3BVbml0U2VsZWN0b3IudmFsdWV9YDtcblxuICAgICAgICAgICAgICAgIHRoaXMucmlndGhQcm9wZXJ0eVZhbHVlSW5wdXQudmFsdWUgPSB0aGlzLnRvcFByb3BlcnR5VmFsdWVJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmJvdHRvbVByb3BlcnR5VmFsdWVJbnB1dC52YWx1ZSA9IHRoaXMudG9wUHJvcGVydHlWYWx1ZUlucHV0LnZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMubGVmdFByb3BlcnR5VmFsdWVJbnB1dC52YWx1ZSA9IHRoaXMudG9wUHJvcGVydHlWYWx1ZUlucHV0LnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgaWYocGFyc2VJbnQodGhpcy50b3BQcm9wZXJ0eVZhbHVlSW5wdXQudmFsdWUpID09PSAwKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFt0aGlzLnR5cGVdID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJpZ2h0VW5pdFNlbGVjdG9yLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbVVuaXRTZWxlY3Rvci5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5sZWZ0VW5pdFNlbGVjdG9yLmRpc2FibGVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmKHRoaXMudG9wVW5pdFNlbGVjdG9yLnZhbHVlID09PSBVbml0c0VudW0uYXV0byl7XG4gICAgICAgICAgICAgICAgdG9wID0gJ2F1dG8nO1xuICAgICAgICAgICAgICAgIHRoaXMudG9wUHJvcGVydHlWYWx1ZUlucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b3BQcm9wZXJ0eVZhbHVlSW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0b3AgPSBgJHt0aGlzLnRvcFByb3BlcnR5VmFsdWVJbnB1dC52YWx1ZX0ke3RoaXMudG9wVW5pdFNlbGVjdG9yLnZhbHVlfWA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHRoaXMucmlnaHRVbml0U2VsZWN0b3IudmFsdWUgPT09IFVuaXRzRW51bS5hdXRvKXtcbiAgICAgICAgICAgICAgICByaWdodCA9ICdhdXRvJztcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ3RoUHJvcGVydHlWYWx1ZUlucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yaWd0aFByb3BlcnR5VmFsdWVJbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJpZ2h0ID0gYCR7dGhpcy5yaWd0aFByb3BlcnR5VmFsdWVJbnB1dC52YWx1ZX0ke3RoaXMucmlnaHRVbml0U2VsZWN0b3IudmFsdWV9YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYodGhpcy5ib3R0b21Vbml0U2VsZWN0b3IudmFsdWUgPT09IFVuaXRzRW51bS5hdXRvKXtcbiAgICAgICAgICAgICAgICBib3R0b20gPSAnYXV0byc7XG4gICAgICAgICAgICAgICAgdGhpcy5ib3R0b21Qcm9wZXJ0eVZhbHVlSW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvdHRvbVByb3BlcnR5VmFsdWVJbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJvdHRvbSA9IGAke3RoaXMuYm90dG9tUHJvcGVydHlWYWx1ZUlucHV0LnZhbHVlfSR7dGhpcy5ib3R0b21Vbml0U2VsZWN0b3IudmFsdWV9YDtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZih0aGlzLmxlZnRVbml0U2VsZWN0b3IudmFsdWUgPT09IFVuaXRzRW51bS5hdXRvKXtcbiAgICAgICAgICAgICAgICBsZWZ0ID0gJ2F1dG8nO1xuICAgICAgICAgICAgICAgIHRoaXMubGVmdFByb3BlcnR5VmFsdWVJbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubGVmdFByb3BlcnR5VmFsdWVJbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGxlZnQgPSBgJHt0aGlzLmxlZnRQcm9wZXJ0eVZhbHVlSW5wdXQudmFsdWV9JHt0aGlzLmxlZnRVbml0U2VsZWN0b3IudmFsdWV9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbdGhpcy50eXBlXSA9IFt0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnRdLmpvaW4oJyAnKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldFZhbHVlc0FjY29yZGluZ1RvQ2xhc3MoKSB7XG4gICAgICAgIGNvbnN0IHt0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnQsIGFsbEVxdWFsfSA9IHRoaXMuZ2V0Q3VycmVudFByb3BlcnRpZXMoKTtcblxuICAgICAgICB0aGlzLnNlbGVjdEFsbENoZWNrQm94LmNoZWNrZWQgPSBhbGxFcXVhbDtcblxuICAgICAgICB0aGlzLnRvcFByb3BlcnR5VmFsdWVJbnB1dC52YWx1ZSA9IGAke3BhcnNlSW50KHRvcCl9YDtcbiAgICAgICAgdGhpcy5yaWd0aFByb3BlcnR5VmFsdWVJbnB1dC52YWx1ZSA9IGAke3BhcnNlSW50KHJpZ2h0KX1gO1xuICAgICAgICB0aGlzLmJvdHRvbVByb3BlcnR5VmFsdWVJbnB1dC52YWx1ZSA9IGAke3BhcnNlSW50KGJvdHRvbSl9YDtcbiAgICAgICAgdGhpcy5sZWZ0UHJvcGVydHlWYWx1ZUlucHV0LnZhbHVlID0gYCR7cGFyc2VJbnQobGVmdCl9YDtcblxuICAgICAgICB0aGlzLnRvcFVuaXRTZWxlY3Rvci52YWx1ZSA9IGdldFVuaXQodG9wKTtcbiAgICAgICAgdGhpcy5ib3R0b21Vbml0U2VsZWN0b3IudmFsdWUgPSBnZXRVbml0KGJvdHRvbSk7XG4gICAgICAgIHRoaXMucmlnaHRVbml0U2VsZWN0b3IudmFsdWUgPSBnZXRVbml0KHJpZ2h0KTtcbiAgICAgICAgdGhpcy5sZWZ0VW5pdFNlbGVjdG9yLnZhbHVlID0gZ2V0VW5pdChsZWZ0KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEN1cnJlbnRQcm9wZXJ0aWVzKCk6IFN0eWxlc1JldHVybk9iamVjdEludGVyZmFjZSB7XG4gICAgICAgIGNvbnN0IHRvcCA9IHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbYCR7dGhpcy50eXBlfS10b3BgXTtcbiAgICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0W2Ake3RoaXMudHlwZX0tcmlnaHRgXTtcbiAgICAgICAgY29uc3QgYm90dG9tID0gdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFtgJHt0aGlzLnR5cGV9LWJvdHRvbWBdO1xuICAgICAgICBjb25zdCBsZWZ0ID0gdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFtgJHt0aGlzLnR5cGV9LWxlZnRgXTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdG9wOiB0b3AgPyB0b3AgOiAnMHB4JyxcbiAgICAgICAgICAgIHJpZ2h0OiByaWdodCA/IHJpZ2h0IDogJzBweCcsXG4gICAgICAgICAgICBib3R0b206IGJvdHRvbSA/IGJvdHRvbSA6ICcwcHgnLFxuICAgICAgICAgICAgbGVmdDogbGVmdCA/IGxlZnQgOiAnMHB4JyxcbiAgICAgICAgICAgIGFsbEVxdWFsOiB0b3AgPT09IHJpZ2h0ICYmIHRvcCA9PT0gYm90dG9tICYmIHRvcCA9PT0gbGVmdCxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xhc3NOYW1lVXBkYXRlZChuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCA9IENzc1N0eWxlU2hlZXQuZ2V0UnVsZVN0eWxlcyhuYW1lKTtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZXNBY2NvcmRpbmdUb0NsYXNzKCk7XG4gICAgICAgIHRoaXMudXBkYXRlUHJvcGVydHkoKTtcbiAgICB9XG59XG5cbmludGVyZmFjZSBTdHlsZXNSZXR1cm5PYmplY3RJbnRlcmZhY2Uge1xuICAgIHRvcDogc3RyaW5nLFxuICAgIHJpZ2h0OiBzdHJpbmcsXG4gICAgYm90dG9tOiBzdHJpbmcsXG4gICAgbGVmdDogc3RyaW5nLFxuICAgIGFsbEVxdWFsOiBib29sZWFuLFxufVxuIiwiaW1wb3J0IENsYXNzQ2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2UgZnJvbSAnLi4vaW50ZXJmYWNlcy9jbGFzcy1jaGFuZ2Utb2JzZXJ2ZXIuaW50ZXJmYWNlJztcblxuaW1wb3J0IENvbnRhaW5lckJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0NvbnRhaW5lckJ1aWxkZXInO1xuaW1wb3J0IElucHV0QnVpbGRlciBmcm9tICcuLi9tb2RlbHMvSW5wdXRCdWlsZGVyJztcbmltcG9ydCBMYWJlbEJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0xhYmVsQnVpbGRlcic7XG5pbXBvcnQgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL1NlbGVjdG9yRnJvbUVudW1CdWlsZGVyJztcblxuaW1wb3J0IENzc1N0eWxlU2hlZXQgZnJvbSAnLi4vLi4vY3NzLXN0eWxlc2hlZXQvY3NzLXN0eWxlc2hlZXQnO1xuaW1wb3J0IGdldFVuaXQgZnJvbSAnLi4vZnVuY3Rpb25zL2dldC1jc3MtdW5pdCc7XG5cbmltcG9ydCB7IElucHV0VHlwZUVudW0gfSBmcm9tICcuLi9lbnVtcy9pbnB1dC10eXBlLmVudW0nO1xuaW1wb3J0IHsgVW5pdHNFbnVtIH0gZnJvbSAnLi4vZW51bXMvdW5pdHMuZW51bSc7XG5pbXBvcnQgeyBTdHlsZU5hbWVFbnVtIH0gZnJvbSAnLi4vZW51bXMvc3R5bGUtbmFtZS5lbnVtJztcbmltcG9ydCB7IERpc3BsYXlUeXBlc0VudW0gfSBmcm9tICcuLi9lbnVtcy9kaXNwbGF5LXR5cGVzLmVudW0nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaXplc0NvbXBvbmVudCBpbXBsZW1lbnRzIENsYXNzQ2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2Uge1xuICAgIHByaXZhdGUgZG9tRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBjb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgZG9tRWxlbWVudFN0eWxlU2hlZXQ6IENTU1N0eWxlRGVjbGFyYXRpb247XG5cbiAgICBwcml2YXRlIHdpZHRoU2l6ZUlucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHByaXZhdGUgd2lkdGhVbml0U2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSBoZWlnaHRTaXplSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBoZWlnaHRTaXplU2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IoZG9tRWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCA9IENzc1N0eWxlU2hlZXQuZ2V0UnVsZVN0eWxlcyh0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0WzBdKTtcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnRzKCk7XG4gICAgfVxuXG4gICAgZ2V0IGNvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkQ29tcG9uZW50cygpIHtcbiAgICAgICAgdGhpcy51cGRhdGVXaWR0aCA9IHRoaXMudXBkYXRlV2lkdGguYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGVIZWlnaHQgPSB0aGlzLnVwZGF0ZUhlaWdodC5iaW5kKHRoaXMpO1xuXG5cbiAgICAgICAgdGhpcy5idWlsZEFsbENvbXBvbmVudHMoKTtcbiAgICAgICAgdGhpcy5zZXRJbml0aWFsVmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpO1xuXG4gICAgICAgIGNvbnN0IHdpZHRoQ29tcG9uZW50c0NvbnRhaW5lciA9IHRoaXMuYnVpbGRTaXplQ29udGFpbmVyKFxuICAgICAgICAgICAgJ1dpZHRoJyxcbiAgICAgICAgICAgIHRoaXMud2lkdGhTaXplSW5wdXQsXG4gICAgICAgICAgICB0aGlzLndpZHRoVW5pdFNlbGVjdG9yXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgaGVpZ2h0Q29tcG9uZW50c0NvbnRhaW5lciA9IHRoaXMuYnVpbGRTaXplQ29udGFpbmVyKFxuICAgICAgICAgICAgJ0hlaWdodCcsXG4gICAgICAgICAgICB0aGlzLmhlaWdodFNpemVJbnB1dCxcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0U2l6ZVNlbGVjdG9yXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5ib3JkZXIsICcxcHggc29saWQgIzRDQUY1MCcpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5wYWRkaW5nLCAnM3B4JylcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnU2l6ZXMnKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQod2lkdGhDb21wb25lbnRzQ29udGFpbmVyKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKGhlaWdodENvbXBvbmVudHNDb250YWluZXIpXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgIH1cblxuICAgIHByaXZhdGUgYnVpbGRTaXplQ29udGFpbmVyKFxuICAgICAgICBsYWJlbDogc3RyaW5nLFxuICAgICAgICBpbnB1dENvbXBvbmVudDogSFRNTElucHV0RWxlbWVudCxcbiAgICAgICAgc2VsZWN0b3JDb21wb25lbnQ6IEhUTUxTZWxlY3RFbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQobGFiZWwpXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChpbnB1dENvbXBvbmVudClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQoc2VsZWN0b3JDb21wb25lbnQpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBidWlsZEFsbENvbXBvbmVudHMoKSB7XG4gICAgICAgIHRoaXMud2lkdGhTaXplSW5wdXQgPSB0aGlzLmJ1aWxkSW5wdXQoSW5wdXRUeXBlRW51bS5udW1iZXIsIHRoaXMudXBkYXRlV2lkdGgpO1xuICAgICAgICB0aGlzLmhlaWdodFNpemVJbnB1dCA9IHRoaXMuYnVpbGRJbnB1dChJbnB1dFR5cGVFbnVtLm51bWJlciwgdGhpcy51cGRhdGVIZWlnaHQpO1xuXG4gICAgICAgIHRoaXMud2lkdGhVbml0U2VsZWN0b3IgPSB0aGlzLmJ1aWxkU2VsZWN0b3IodGhpcy51cGRhdGVXaWR0aCk7XG4gICAgICAgIHRoaXMuaGVpZ2h0U2l6ZVNlbGVjdG9yID0gdGhpcy5idWlsZFNlbGVjdG9yKHRoaXMudXBkYXRlSGVpZ2h0KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEluaXRpYWxWYWx1ZXNBY2NvcmRpbmdUb0NsYXNzKCkge1xuICAgICAgICB0aGlzLnNldFdpZHRoVmFsdWVBY2NvcmRpbmdUb0NsYXNzKCk7XG4gICAgICAgIHRoaXMuc2V0SGVpZ2h0VmFsdWVBY2NvcmRpbmdUb0NsYXNzKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRXaWR0aFZhbHVlQWNjb3JkaW5nVG9DbGFzcygpIHtcbiAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wyd3aWR0aCddO1xuICAgICAgICB0aGlzLndpZHRoU2l6ZUlucHV0LnZhbHVlID0gYCR7cGFyc2VJbnQod2lkdGgpIHx8IDB9YDtcbiAgICAgICAgdGhpcy53aWR0aFVuaXRTZWxlY3Rvci52YWx1ZSA9IGdldFVuaXQod2lkdGgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0SGVpZ2h0VmFsdWVBY2NvcmRpbmdUb0NsYXNzKCkge1xuICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydoZWlnaHQnXTtcbiAgICAgICAgdGhpcy5oZWlnaHRTaXplSW5wdXQudmFsdWUgPSBgJHtwYXJzZUludChoZWlnaHQpIHx8IDB9YDtcbiAgICAgICAgdGhpcy5oZWlnaHRTaXplU2VsZWN0b3IudmFsdWUgPSBnZXRVbml0KGhlaWdodCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBidWlsZElucHV0KElucHV0VHlwZUVudW06IElucHV0VHlwZUVudW0sIGNhbGxiYWNrOiB7KCk6IHZvaWR9KSB7XG4gICAgICAgIHJldHVybiBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0pXG4gICAgICAgICAgICAuc2V0TWluKDApXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBjYWxsYmFjaylcbiAgICAgICAgICAgIC5idWlsZCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYnVpbGRTZWxlY3RvcihjYWxsYmFjazogeygpOiB2b2lkfSkge1xuICAgICAgICByZXR1cm4gbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKFVuaXRzRW51bSlcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjYWxsYmFjaylcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVXaWR0aCgpIHtcbiAgICAgICAgaWYodGhpcy53aWR0aFNpemVJbnB1dC52YWx1ZSA9PT0gJzAnKXtcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQucmVtb3ZlUHJvcGVydHkoJ3dpZHRoJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnd2lkdGgnXSA9IGAke3RoaXMud2lkdGhTaXplSW5wdXQudmFsdWV9JHt0aGlzLndpZHRoVW5pdFNlbGVjdG9yLnZhbHVlfWA7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVIZWlnaHQoKSB7XG4gICAgICAgIGlmKHRoaXMuaGVpZ2h0U2l6ZUlucHV0LnZhbHVlID09PSAnMCcpe1xuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldC5yZW1vdmVQcm9wZXJ0eSgnaGVpZ2h0Jyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnaGVpZ2h0J10gPSBgJHt0aGlzLmhlaWdodFNpemVJbnB1dC52YWx1ZX0ke3RoaXMuaGVpZ2h0U2l6ZVNlbGVjdG9yLnZhbHVlfWA7XG4gICAgfVxuXG4gICAgcHVibGljIGNsYXNzTmFtZVVwZGF0ZWQobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQgPSBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXMobmFtZSk7XG4gICAgICAgIHRoaXMuc2V0SW5pdGlhbFZhbHVlc0FjY29yZGluZ1RvQ2xhc3MoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ3NzU3R5bGVTaGVldCBmcm9tICcuLi8uLi9jc3Mtc3R5bGVzaGVldC9jc3Mtc3R5bGVzaGVldCc7XG5pbXBvcnQgQ2xhc3NDaGFuZ2VPYnNlcnZlckludGVyZmFjZSBmcm9tICcuLi9pbnRlcmZhY2VzL2NsYXNzLWNoYW5nZS1vYnNlcnZlci5pbnRlcmZhY2UnO1xuXG5pbXBvcnQgQnV0dG9uQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvQnV0dG9uQnVpbGRlcic7XG5pbXBvcnQgQ29udGFpbmVyQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvQ29udGFpbmVyQnVpbGRlcic7XG5pbXBvcnQgSW5wdXRCdWlsZGVyIGZyb20gJy4uL21vZGVscy9JbnB1dEJ1aWxkZXInO1xuaW1wb3J0IExhYmVsQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvTGFiZWxCdWlsZGVyJztcblxuaW1wb3J0IHsgSW5wdXRUeXBlRW51bSB9IGZyb20gJy4uL2VudW1zL2lucHV0LXR5cGUuZW51bSc7XG5pbXBvcnQgeyBTdHlsZU5hbWVFbnVtIH0gZnJvbSAnLi4vZW51bXMvc3R5bGUtbmFtZS5lbnVtJztcbmltcG9ydCB7IERpc3BsYXlUeXBlc0VudW0gfSBmcm9tICcuLi9lbnVtcy9kaXNwbGF5LXR5cGVzLmVudW0nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVcmxEZWZpbml0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgQ2xhc3NDaGFuZ2VPYnNlcnZlckludGVyZmFjZSB7XG4gICAgcHJpdmF0ZSBkb21FbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBkb21FbGVtZW50U3R5bGVTaGVldDogQ1NTU3R5bGVEZWNsYXJhdGlvbjtcblxuICAgIHByaXZhdGUgdXJsSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihkb21FbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0ID0gQ3NzU3R5bGVTaGVldC5nZXRSdWxlU3R5bGVzKHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3RbMF0pO1xuICAgICAgICB0aGlzLmFkZENvbXBvbmVudHMoKTtcbiAgICB9XG5cbiAgICBnZXQgY3VycmVudFVybCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudFsnc3JjJ107XG4gICAgfVxuXG4gICAgc2V0TmV3VXJsKHVybD86IHN0cmluZykge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRbJ3NyYyddID0gdXJsO1xuICAgIH1cblxuICAgIGdldCBjb21wb25lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZENvbXBvbmVudHMoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlVXJsID0gdGhpcy51cGRhdGVVcmwuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmJ1aWxkQWxsQ29tcG9uZW50cygpO1xuICAgICAgICB0aGlzLnNldEluaXRpYWxWYWx1ZXNBY2NvcmRpbmdUb0NsYXNzKCk7XG5cbiAgICAgICAgY29uc3QgYWNjZXB0QnV0dG9uID0gbmV3IEJ1dHRvbkJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy51cGRhdGVVcmwpXG4gICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdBc3NpZ24nKVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICBjb25zdCB1cmxDb21wb25lbnRzQ29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdBc3NpZ24gVXJsJylcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMudXJsSW5wdXQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKGFjY2VwdEJ1dHRvbilcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmJvcmRlciwgJzFweCBzb2xpZCAjNENBRjUwJylcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLnBhZGRpbmcsICczcHgnKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdJbWFnZSBQcm9wZXJ0aWVzJylcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKHVybENvbXBvbmVudHNDb250YWluZXIpXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgIH1cblxuICAgIHByaXZhdGUgYnVpbGRBbGxDb21wb25lbnRzKCkge1xuICAgICAgICB0aGlzLmJ1aWxkVXJsQ29tcG9uZW50cygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYnVpbGRVcmxDb21wb25lbnRzKCkge1xuICAgICAgICB0aGlzLnVybElucHV0ID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLnVybCkuYnVpbGQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEluaXRpYWxWYWx1ZXNBY2NvcmRpbmdUb0NsYXNzKCkge1xuICAgICAgICB0aGlzLnNldFVybEluaXRpYWxWYWx1ZXNBY2NvcmRpbmdUb0NsYXNzKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRVcmxJbml0aWFsVmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpIHtcbiAgICAgICAgdGhpcy51cmxJbnB1dC52YWx1ZSA9IHRoaXMuY3VycmVudFVybDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZVVybCgpIHtcbiAgICAgICAgaWYodGhpcy51cmxJbnB1dC52YWx1ZSA9PT0gJycpe1xuICAgICAgICAgICAgdGhpcy5zZXROZXdVcmwoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldE5ld1VybCh0aGlzLnVybElucHV0LnZhbHVlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xhc3NOYW1lVXBkYXRlZChuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCA9IENzc1N0eWxlU2hlZXQuZ2V0UnVsZVN0eWxlcyhuYW1lKTtcbiAgICAgICAgdGhpcy5zZXRJbml0aWFsVmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpO1xuICAgIH1cbn1cbiIsImNvbnN0IGNvbnRhbnRzID0ge1xuICAgIElOVkVSVEVEX0JBQ0tHUk9VTkRfQ09MT1I6ICdyZ2IoMjA5LDI1NSwyNDAnXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhbnRzXG4iLCJleHBvcnQgZW51bSBBbGlnbkZsZXhDb250ZW50RW51bSB7XG4gICAgJ2ZsZXgtc3RhcnQnID0gJ2ZsZXgtc3RhcnQnLFxuICAgICdmbGV4LWVuZCcgPSAnZmxleC1lbmQnLFxuICAgIGNlbnRlciA9ICdjZW50ZXInLFxuICAgICdzcGFjZS1iZXR3ZWVuJyA9ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAnc3BhY2UtYXJvdW5kJyA9ICdzcGFjZS1hcm91bmQnLFxuICAgIHN0cmV0Y2ggPSAnc3RyZXRjaCcsXG4gICAgbm9uZSA9ICcnLFxufVxuIiwiZXhwb3J0IGVudW0gQWxpZ25GbGV4SXRlbXNFbnVtIHtcbiAgICAnZmxleC1zdGFydCcgPSAnZmxleC1zdGFydCcsXG4gICAgJ2ZsZXgtZW5kJyA9ICdmbGV4LWVuZCcsXG4gICAgY2VudGVyID0gJ2NlbnRlcicsXG4gICAgYmFzZWxpbmUgPSAnYmFzZWxpbmUnLFxuICAgIHN0cmV0Y2ggPSAnc3RyZXRjaCcsXG4gICAgbm9uZSA9ICcnXG59XG4iLCJleHBvcnQgZW51bSBBbGlnbkZsZXhTZWxmRW51bSB7XG4gICAgYXV0byA9ICdhdXRvJyxcbiAgICAnZmxleC1zdGFydCcgPSAnZmxleC1zdGFydCcsXG4gICAgJ2ZsZXgtZW5kJyA9ICdmbGV4LWVuZCcsXG4gICAgY2VudGVyID0gJ2NlbnRlcicsXG4gICAgJ2Jhc2VsaW5lJyA9ICdiYXNlbGluZScsXG4gICAgc3RyZXRjaCA9ICdzdHJldGNoJyxcbiAgICBub25lID0gJycsXG59XG4iLCJleHBvcnQgZW51bSBBbGlnbkdyaWRDb250ZW50RW51bSB7XG4gICAgc3RhcnQgPSAnc3RhcnQnLFxuICAgIGVuZCA9ICdlbmQnLFxuICAgIGNlbnRlciA9ICdjZW50ZXInLFxuICAgIHN0cmV0Y2ggPSAnc3RyZXRjaCcsXG4gICAgJ3NwYWNlLWJldHdlZW4nID0gJ3NwYWNlLWJldHdlZW4nLFxuICAgICdzcGFjZS1hcm91bmQnID0gJ3NwYWNlLWFyb3VuZCcsXG4gICAgJ3NwYWNlLWV2ZW5seScgPSAnc3BhY2UtZXZlbmx5JyxcbiAgICBub25lID0gJydcbn1cbiIsImV4cG9ydCBlbnVtIEFsaWduR3JpZEl0ZW1zRW51bSB7XG4gICAgc3RhcnQgPSAnc3RhcnQnLFxuICAgIGVuZCA9ICdlbmQnLFxuICAgIGNlbnRlciA9ICdjZW50ZXInLFxuICAgIHN0cmV0Y2ggPSAnc3RyZXRjaCcsXG4gICAgbm9uZSA9ICcnXG59XG4iLCJleHBvcnQgZW51bSBBbGlnbkdyaWRTZWxmRW51bSB7XG4gICAgc3RhcnQgPSAnc3RhcnQnLFxuICAgIGVuZCA9ICdlbmQnLFxuICAgIGNlbnRlciA9ICdjZW50ZXInLFxuICAgIHN0cmV0Y2ggPSAnc3RyZXRjaCcsXG4gICAgbm9uZSA9ICcnXG59XG4iLCJleHBvcnQgZW51bSBCb3JkZXJTdHlsZUVudW0ge1xuICAgIG5vbmUgPSAnbm9uZScsXG4gICAgaGlkZGVuID0gJ2hpZGRlbicsXG4gICAgZG90dGVkID0gJ2RvdHRlZCcsXG4gICAgZGFzaGVkID0gJ2Rhc2hlZCcsXG4gICAgc29saWQgPSAnc29saWQnLFxuICAgIGRvdWJsZSA9ICdkb3VibGUnLFxuICAgIGdyb292ZSA9ICdncm9vdmUnLFxuICAgIHJpZGdlID0gJ3JpZGdlJyxcbiAgICBpbnNldCA9ICdpbnNldCcsXG4gICAgb3V0c2V0ID0gJ291dHNldCcsXG59XG5cblxuXG4iLCJleHBvcnQgZW51bSBEaXNwbGF5VHlwZXNFbnVtIHtcbiAgICBmbGV4ID0gJ2ZsZXgnLFxuICAgICdpbmxpbmUtZmxleCcgPSAnaW5saW5lLWZsZXgnLFxuICAgIGdyaWQgPSAnZ3JpZCcsXG4gICAgJ2lubGluZS1ncmlkJyA9ICdpbmxpbmUtZ3JpZCcsXG4gICAgYmxvY2sgPSAnYmxvY2snLFxuICAgIGlubGluZSA9ICdpbmxpbmUnLFxuICAgIGNvbnRlbnRzID0gJ2NvbnRlbnRzJyxcbiAgICBpbmhlcml0ID0gJ2luaGVyaXQnLFxuICAgIGluaXRpYWwgPSAnaW5pdGlhbCcsXG4gICAgcmV2ZXJ0ID0gJ3JldmVydCcsXG4gICAgdW5zZXQgPSAndW5zZXQnLFxuICAgIG5vbmUgPSAnJ1xufVxuIiwiZXhwb3J0IGVudW0gRXZlbnRUeXBlRW51bSB7XG4gICAgaW5wdXQgPSAnaW5wdXQnLFxuICAgIGNoYW5nZSA9ICdjaGFuZ2UnLFxufVxuIiwiZXhwb3J0IGVudW0gRmxleERpcmVjdGlvbkVudW0ge1xuICAgIHJvdyA9ICdyb3cnLFxuICAgICdyb3ctcmV2ZXJzZScgPSAncm93LXJldmVyc2UnLFxuICAgIGNvbHVtbiA9ICdjb2x1bW4nLFxuICAgICdjb2x1bW4tcmV2ZXJzZScgPSAnY29sdW1uLXJldmVyc2UnLFxuICAgIG5vbmUgPSAnJ1xufVxuIiwiZXhwb3J0IGVudW0gRmxleFdyYXBFbnVtIHtcbiAgICBub3dyYXAgPSAnbm93cmFwJyxcbiAgICB3cmFwID0gJ3dyYXAnLFxuICAgICd3cmFwLXJldmVyc2UnID0gJ3dyYXAtcmV2ZXJzZScsXG4gICAgbm9uZSA9ICcnXG59XG4iLCJleHBvcnQgZW51bSBGb250U3R5bGVzRW51bSB7XG4gICAgJ25vcm1hbCcgPSAnbm9ybWFsJyxcbiAgICAnaXRhbGljJyA9ICdpdGFsaWMnLFxuICAgICdvYmxpcXVlJyA9ICdvYmxpcXVlJyxcbn1cbiIsImV4cG9ydCBlbnVtIEZvbnRWYXJpYW50RW51bSB7XG4gICAgJ25vcm1hbCcgPSAnbm9ybWFsJyxcbiAgICAnc21hbGwtY2FwcycgPSAnc21hbGwtY2FwcycsXG4gICAgJ2FsbC1zbWFsbC1jYXBzJyA9ICdhbGwtc21hbGwtY2FwcycsXG4gICAgJ3BldGl0ZS1jYXBzJyA9ICdwZXRpdGUtY2FwcycsXG4gICAgJ2FsbC1wZXRpdGUtY2FwcycgPSAnYWxsLXBldGl0ZS1jYXBzJyxcbiAgICAndW5pY2FzZScgPSAndW5pY2FzZScsXG4gICAgJ3RpdGxpbmctY2FwcycgPSAndGl0bGluZy1jYXBzJyxcbiAgICAnaW5oZXJpdCcgPSAnaW5oZXJpdCcsXG4gICAgJ2luaXRpYWwnID0gJ2luaXRpYWwnLFxuICAgICdyZXZlcnQnID0gJ3JldmVydCcsXG4gICAgJ3JldmVydC1sYXllcicgPSAncmV2ZXJ0LWxheWVyJyxcbiAgICAndW5zZXQnID0gJ3Vuc2V0Jyxcbn1cbiIsImV4cG9ydCBlbnVtIEZvbnRXZWlnaHRFbnVtIHtcbiAgICAnbGlnaHRlcicgPSAnbGlnaHRlcicsXG4gICAgJ25vcm1hbCcgPSAnbm9ybWFsJyxcbiAgICAnYm9sZCcgPSAnYm9sZCcsXG4gICAgJ2JvbGRlcicgPSAnYm9sZGVyJyxcbiAgICAnczEwMCcgPSAnMTAwJyxcbiAgICAnczIwMCcgPSAnMjAwJyxcbiAgICAnczMwMCcgPSAnMzAwJyxcbiAgICAnczQwMCcgPSAnNDAwJyxcbiAgICAnczUwMCcgPSAnNTAwJyxcbiAgICAnczYwMCcgPSAnNjAwJyxcbiAgICAnczcwMCcgPSAnNzAwJyxcbiAgICAnczgwMCcgPSAnODAwJyxcbiAgICAnczkwMCcgPSAnOTAwJyxcbiAgICAnaW5oZXJpdCcgPSAnaW5oZXJpdCcsXG4gICAgJ2luaXRpYWwnID0gJ2luaXRpYWwnLFxuICAgICdyZXZlcnQnID0gJ3JldmVydCcsXG4gICAgJ3JldmVydC1sYXllcicgPSAncmV2ZXJ0LWxheWVyJyxcbiAgICAndW5zZXQnID0gJ3Vuc2V0Jyxcbn1cbiIsImV4cG9ydCBlbnVtIEZvbnRzRW51bSB7XG4gICAgJ2N1cnNpdmUnID0gJ2N1cnNpdmUnLFxuICAgICdtb25vc3BhY2UnID0gJ21vbm9zcGFjZScsXG4gICAgJ3NlcmlmJyA9ICdzZXJpZicsXG4gICAgJ3NhbnMtc2VyaWYnID0gJ3NhbnMtc2VyaWYnLFxuICAgICdmYW50YXN5JyA9ICdmYW50YXN5JyxcbiAgICAnZGVmYXVsdCcgPSAnZGVmYXVsdCcsXG4gICAgJ0FyaWFsJyA9ICdBcmlhbCcsXG4gICAgJ0FyaWFsIEJsYWNrJyA9ICdBcmlhbCBCbGFjaycsXG4gICAgJ0FyaWFsIE5hcnJvdycgPSAnQXJpYWwgTmFycm93JyxcbiAgICAnQXJpYWwgUm91bmRlZCBNVCBCb2xkJyA9ICdBcmlhbCBSb3VuZGVkIE1UIEJvbGQnLFxuICAgICdCb29rbWFuIE9sZCBTdHlsZScgPSAnQm9va21hbiBPbGQgU3R5bGUnLFxuICAgICdCcmFkbGV5IEhhbmQgSVRDJyA9ICdCcmFkbGV5IEhhbmQgSVRDJyxcbiAgICAnQ2VudHVyeScgPSAnQ2VudHVyeScsXG4gICAgJ0NlbnR1cnkgR290aGljJyA9ICdDZW50dXJ5IEdvdGhpYycsXG4gICAgJ0NvbWljIFNhbnMgTVMnID0gJ0NvbWljIFNhbnMgTVMnLFxuICAgICdDb3VyaWVyJyA9ICdDb3VyaWVyJyxcbiAgICAnQ291cmllciBOZXcnID0gJ0NvdXJpZXIgTmV3JyxcbiAgICAnR2VvcmdpYScgPSAnR2VvcmdpYScsXG4gICAgJ0dlbnRpdW0nID0gJ0dlbnRpdW0nLFxuICAgICdJbXBhY3QnID0gJ0ltcGFjdCcsXG4gICAgJ0tpbmcnID0gJ0tpbmcnLFxuICAgICdMdWNpZGEgQ29uc29sZScgPSAnTHVjaWRhIENvbnNvbGUnLFxuICAgICdMYWxpdCcgPSAnTGFsaXQnLFxuICAgICdNb2RlbmEnID0gJ01vZGVuYScsXG4gICAgJ01vbm90eXBlIENvcnNpdmEnID0gJ01vbm90eXBlIENvcnNpdmEnLFxuICAgICdQYXB5cnVzJyA9ICdQYXB5cnVzJyxcbiAgICAnVGFob21hJyA9ICdUYWhvbWEnLFxuICAgICdUZVgnID0gJ1RlWCcsXG4gICAgJ1RpbWVzJyA9ICdUaW1lcycsXG4gICAgJ1RpbWVzIE5ldyBSb21hbicgPSAnVGltZXMgTmV3IFJvbWFuJyxcbiAgICAnVHJlYnVjaGV0IE1TJyA9ICdUcmVidWNoZXQgTVMnLFxuICAgICdWZXJkYW5hJyA9ICdWZXJkYW5hJyxcbiAgICAnVmVyb25hJyA9ICdWZXJvbmEnLFxufVxuIiwiZXhwb3J0IGVudW0gR2VuZXJhbFBzZXVkb2NsYXNzRW51bSB7XG4gICAgZm9jdXMgPSAnZm9jdXMnLFxuICAgIGhvdmVyID0gJ2hvdmVyJyxcbiAgICBhY3RpdmUgPSAnYWN0aXZlJyxcbiAgICBub25lID0gJ25vbmUnXG59XG4iLCJleHBvcnQgZW51bSBHcmlkQXV0b0Zsb3dFbnVtIHtcbiAgICByb3cgPSAncm93JyxcbiAgICBjb2x1bW4gPSAnY29sdW1uJyxcbiAgICAncm93LWRlbnNlJyA9ICdyb3ctZGVuc2UnLFxuICAgICdjb2x1bW4tZGVuc2UnID0gJ2NvbHVtbi1kZW5zZScsXG4gICAgbm9uZSA9ICcnLFxufVxuIiwiZXhwb3J0IGVudW0gSW5wdXRUeXBlRW51bSB7XG4gICAgdGV4dCA9ICd0ZXh0JyxcbiAgICBudW1iZXIgPSAnbnVtYmVyJyxcbiAgICBjaGVja2JveCA9ICdjaGVja2JveCcsXG4gICAgYnV0dG9uID0gJ2J1dHRvbicsXG4gICAgY29sb3IgPSAnY29sb3InLFxuICAgIGRhdGUgPSAnZGF0ZScsXG4gICAgZGF0ZXRpbWUgPSAnZGF0ZXRpbWUnLFxuICAgICdkYXRldGltZS1sb2NhbCcgPSAnZGF0ZXRpbWUtbG9jYWwnLFxuICAgIGVtYWlsID0gJ2VtYWlsJyxcbiAgICBmaWxlID0gJ2ZpbGUnLFxuICAgIGhpZGRlbiA9ICdoaWRkZW4nLFxuICAgIG1vbnRoID0gJ21vbnRoJyxcbiAgICBwYXNzd29yZCA9ICdwYXNzd29yZCcsXG4gICAgcmFkaW8gPSAncmFkaW8nLFxuICAgIHJhbmdlID0gJ3JhbmdlJyxcbiAgICByZXNldCA9ICdyZXNldCcsXG4gICAgc3VibWl0ID0gJ3N1Ym1pdCcsXG4gICAgdGVsID0gJ3RlbCcsXG4gICAgdGltZSA9ICd0aW1lJyxcbiAgICB1cmwgPSAndXJsJyxcbiAgICB3ZWVrID0gJ3dlZWsnXG59XG4iLCJleHBvcnQgZW51bSBKdXN0aWZ5RmxleENvbnRlbnRFbnVtIHtcbiAgICAnZmxleC1zdGFydCcgPSAnZmxleC1zdGFydCcsXG4gICAgJ2ZsZXgtZW5kJyA9ICdmbGV4LWVuZCcsXG4gICAgY2VudGVyID0gJ2NlbnRlcicsXG4gICAgJ3NwYWNlLWJldHdlZW4nID0gJ3NwYWNlLWJldHdlZW4nLFxuICAgICdzcGFjZS1hcm91bmQnID0gJ3NwYWNlLWFyb3VuZCcsXG4gICAgbm9uZSA9ICcnXG59XG4iLCJleHBvcnQgZW51bSBKdXN0aWZ5R3JpZENvbnRlbnRFbnVtIHtcbiAgICBzdGFydCA9ICdzdGFydCcsXG4gICAgZW5kID0gJ2VuZCcsXG4gICAgY2VudGVyID0gJ2NlbnRlcicsXG4gICAgc3RyZXRjaCA9ICdzdHJldGNoJyxcbiAgICAnc3BhY2UtYmV0d2VlbicgPSAnc3BhY2UtYmV0d2VlbicsXG4gICAgJ3NwYWNlLWFyb3VuZCcgPSAnc3BhY2UtYXJvdW5kJyxcbiAgICAnc3BhY2UtZXZlbmx5JyA9ICdzcGFjZS1ldmVubHknLFxuICAgIG5vbmUgPSAnJ1xufVxuIiwiZXhwb3J0IGVudW0gSnVzdGlmeUdyaWRJdGVtc0VudW0ge1xuICAgIHN0YXJ0ID0gJ3N0YXJ0JyxcbiAgICBlbmQgPSAnZW5kJyxcbiAgICBjZW50ZXIgPSAnY2VudGVyJyxcbiAgICBzdHJldGNoID0gJ3N0cmV0Y2gnLFxuICAgIG5vbmUgPSAnJ1xufVxuIiwiZXhwb3J0IGVudW0gSnVzdGlmeUdyaWRTZWxmRW51bSB7XG4gICAgc3RhcnQgPSAnc3RhcnQnLFxuICAgIGVuZCA9ICdlbmQnLFxuICAgIGNlbnRlciA9ICdjZW50ZXInLFxuICAgIHN0cmV0Y2ggPSAnc3RyZXRjaCcsXG4gICAgbm9uZSA9ICcnXG59XG4iLCJleHBvcnQgZW51bSBTdHlsZU5hbWVFbnVtIHtcbiAgICBtYXJnaW4gPSAnbWFyZ2luJyxcbiAgICBwYWRkaW5nID0gJ3BhZGRpbmcnLFxuICAgIGRpc3BsYXkgPSAnZGlzcGxheScsXG4gICAgJ2ZsZXgtZGlyZWN0aW9uJyA9ICdmbGV4LWRpcmVjdGlvbicsXG4gICAgJ2FsaWduLWl0ZW1zJyA9ICdhbGlnbi1pdGVtcycsXG4gICAgJ2FsaWduLXNlbGYnID0gJ2FsaWduLXNlbGYnLFxuICAgICdncmlkLXRlbXBsYXRlLWNvbHVtbnMnID0gJ2dyaWQtdGVtcGxhdGUtY29sdW1ucycsXG4gICAgJ2dyaWQtdGVtcGxhdGUtcm93cycgPSAnZ3JpZC10ZW1wbGF0ZS1yb3dzJyxcbiAgICBib3JkZXIgPSAnYm9yZGVyJyxcbiAgICByZXNpemUgPSAncmVzaXplJyxcbiAgICB3aWR0aCA9ICd3aXRkdGgnLFxuICAgIGhlaWdodCA9ICdoZWlnaHQnLFxuICAgICdmb250LXNpemUnID0gJ2ZvbnQtc2l6ZScsXG59XG4iLCJleHBvcnQgZW51bSBUaXRsZVR5cGVzRW51bSB7XG4gICAgSDEgPSAnSDEnLFxuICAgIEgyID0gJ0gyJyxcbiAgICBIMyA9ICdIMycsXG4gICAgSDQgPSAnSDQnLFxuICAgIEg1ID0gJ0g1JyxcbiAgICBINiA9ICdINicsXG59XG4iLCJleHBvcnQgZW51bSBVbml0c0VudW0ge1xuICAgIHB4ID0gJ3B4JyxcbiAgICBlbSA9ICdlbScsXG4gICAgcmVtID0gJ3JlbScsXG4gICAgdncgPSAndncnLFxuICAgIHZoID0gJ3ZoJyxcbiAgICB2bWluID0gJ3ZtaW4nLFxuICAgIHZtYXggPSAndm1heCcsXG4gICAgJyUnID0gJyUnLFxuICAgIGV4ID0gJ2V4JyxcbiAgICBjaCA9ICdjaCcsXG4gICAgbW0gPSAnbW0nLFxuICAgIGNtID0gJ2NtJyxcbiAgICBpbiA9ICdpbicsXG4gICAgcHQgPSAncHQnLFxuICAgIHBjID0gJ3BjJyxcbiAgICBhdXRvID0gJ2F1dG8nXG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWZpbmVFbGVtZW50SWQoaW5pdGlhbE5hbWU6IHN0cmluZywgaW5zdGFuY2VzOiBIVE1MRWxlbWVudFtdKTogc3RyaW5nIHtcbiAgICBjb25zdCBuYW1lQWxyZWFkeUV4aXN0cyA9IGluc3RhbmNlcy5maW5kKChpbnN0YW5jZSkgPT4gaW5zdGFuY2UuaWQgPT09IGluaXRpYWxOYW1lKSA/IHRydWUgOiBmYWxzZTtcblxuICAgIGlmIChuYW1lQWxyZWFkeUV4aXN0cykge1xuICAgICAgICBhbGVydCgnSWQgbmFtZSBhbHJlYWR5IGV4aXN0cyBcXG5UaGUgbmFtZSBoYXMgbm90IGJlZW4gdXBkYXRlZCcpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0lkIG5hbWUgYWxyZWFkeSBleGlzdHMnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5pdGlhbE5hbWU7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWZpbmVFbGVtZW50TmFtZShpbml0aWFsTmFtZTogc3RyaW5nLCBpbnN0YW5jZXM6IEhUTUxFbGVtZW50W10pOiBzdHJpbmcge1xuICAgIGNvbnN0IG5hbWVBbHJlYWR5RXhpc3RzID0gaW5zdGFuY2VzLmZpbmQoKGluc3RhbmNlKSA9PiBpbnN0YW5jZVsnbmFtZSddID09PSBpbml0aWFsTmFtZSkgPyB0cnVlIDogZmFsc2U7XG5cbiAgICBpZiAobmFtZUFscmVhZHlFeGlzdHMpIHtcbiAgICAgICAgYWxlcnQoJ0VsZW1lbnQgbmFtZSBhbHJlYWR5IGV4aXN0cyBcXG5UaGUgbmFtZSBoYXMgbm90IGJlZW4gdXBkYXRlZCcpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VsZW1lbnQgbmFtZSBhbHJlYWR5IGV4aXN0cycpO1xuICAgIH1cblxuICAgIHJldHVybiBpbml0aWFsTmFtZTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRyYWdTdGFydFdpdGhUYXJnZXROb2RlTmFtZShlOiBEcmFnRXZlbnQpIHtcbiAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0L3BsYWluJywgKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5ub2RlTmFtZSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXJzKHRleHQ6IHN0cmluZywgc3BsaXRDaGFyYWN0ZXI6IHN0cmluZywgam9pbkNoYXJhY3Rlcjogc3RyaW5nKSB7XG4gICAgY29uc3Qgd29yZHMgPSB0ZXh0LnNwbGl0KHNwbGl0Q2hhcmFjdGVyKTtcblxuICAgIHJldHVybiB3b3Jkcy5tYXAoKHdvcmQpID0+IGAke3dvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHt3b3JkLnNsaWNlKDEpfWApLmpvaW4oam9pbkNoYXJhY3Rlcilcbn1cbiIsImltcG9ydCB7IFVuaXRzRW51bSB9IGZyb20gJy4uL2VudW1zL3VuaXRzLmVudW0nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVbml0KHRleHQ6IHN0cmluZywgZGVmYXVsdFVuaXQ6IFVuaXRzRW51bSA9IFVuaXRzRW51bS5weCkge1xuICAgIHRyeXtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gdGV4dC5tYXRjaCgvW2EteiVdKyQvaSlcbiAgICAgICAgcmV0dXJuIHZhbHVlcyA/IHZhbHVlc1swXSA6IGRlZmF1bHRVbml0O1xuICAgIH0gY2F0Y2gge1xuICAgICAgICByZXR1cm4gJ3B4JztcbiAgICB9XG5cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbG9yVG9IZXgoY29sb3I6IHN0cmluZykge1xuICBpZihjb2xvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuICcjMDAwMDAwJztcbiAgfVxuXG4gIGlmIChjb2xvci5pbmNsdWRlcygncmdiJykpIHtcbiAgICByZXR1cm4gcmdiVG9IZXgoY29sb3IpO1xuICB9IGVsc2UgaWYgKGNvbG9yLmluY2x1ZGVzKCcjJykpIHtcbiAgICByZXR1cm4gY29sb3I7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZm91bmRDb2xvciA9IGNvbG9yVmFsdWVzLmZpbmQoKGNvbCkgPT4gY29sLm5hbWUgPT09IGNvbG9yKTtcblxuICAgIGlmKCFmb3VuZENvbG9yKSB7XG4gICAgICByZXR1cm4gJyMwMDAwMDAnO1xuICAgIH1cblxuICAgIHJldHVybiBmb3VuZENvbG9yLmhleDtcbiAgfVxufVxuXG5mdW5jdGlvbiByZ2JUb0hleChyZ2I6IHN0cmluZykge1xuICB0cnkge1xuICAgIGNvbnN0IFtyLCBnLCBiXSA9IHJnYi5yZXBsYWNlKC9bXlxcZCxdKy9nLCAnJykuc3BsaXQoJywnKTtcbiAgICByZXR1cm4gJyMnICsgY29tcG9uZW50VG9IZXgocikgKyBjb21wb25lbnRUb0hleChnKSArIGNvbXBvbmVudFRvSGV4KGIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gJyMwMDAwMDAnO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFRvSGV4KGMpIHtcbiAgY29uc3QgaGV4ID0gcGFyc2VJbnQoYykudG9TdHJpbmcoMTYpO1xuICBpZiAoaGV4ID09PSAnTmFOJykge1xuICAgIHJldHVybiAnMDAnO1xuICB9XG4gIHJldHVybiBoZXgubGVuZ3RoID09PSAxID8gJzAnICsgaGV4IDogaGV4O1xufVxuXG5jb25zdCBjb2xvclZhbHVlcyA9IFtcbiAgeyBoZXg6ICcjRjBGOEZGJywgbmFtZTogJ0FsaWNlQmx1ZScgfSxcbiAgeyBoZXg6ICcjRkFFQkQ3JywgbmFtZTogJ0FudGlxdWVXaGl0ZScgfSxcbiAgeyBoZXg6ICcjMDBGRkZGJywgbmFtZTogJ0FxdWEnIH0sXG4gIHsgaGV4OiAnIzdGRkZENCcsIG5hbWU6ICdBcXVhbWFyaW5lJyB9LFxuICB7IGhleDogJyNGMEZGRkYnLCBuYW1lOiAnQXp1cmUnIH0sXG4gIHsgaGV4OiAnI0Y1RjVEQycsIG5hbWU6ICdCZWlnZScgfSxcbiAgeyBoZXg6ICcjRkZFNEM0JywgbmFtZTogJ0Jpc3F1ZScgfSxcbiAgeyBoZXg6ICcjMDAwMDAwJywgbmFtZTogJ0JsYWNrJyB9LFxuICB7IGhleDogJyNGRkVCQ0QnLCBuYW1lOiAnQmxhbmNoZWRBbG1vbmQnIH0sXG4gIHsgaGV4OiAnIzAwMDBGRicsIG5hbWU6ICdCbHVlJyB9LFxuICB7IGhleDogJyM4QTJCRTInLCBuYW1lOiAnQmx1ZVZpb2xldCcgfSxcbiAgeyBoZXg6ICcjQTUyQTJBJywgbmFtZTogJ0Jyb3duJyB9LFxuICB7IGhleDogJyNERUI4ODcnLCBuYW1lOiAnQnVybHlXb29kJyB9LFxuICB7IGhleDogJyM1RjlFQTAnLCBuYW1lOiAnQ2FkZXRCbHVlJyB9LFxuICB7IGhleDogJyM3RkZGMDAnLCBuYW1lOiAnQ2hhcnRyZXVzZScgfSxcbiAgeyBoZXg6ICcjRDI2OTFFJywgbmFtZTogJ0Nob2NvbGF0ZScgfSxcbiAgeyBoZXg6ICcjRkY3RjUwJywgbmFtZTogJ0NvcmFsJyB9LFxuICB7IGhleDogJyM2NDk1RUQnLCBuYW1lOiAnQ29ybmZsb3dlckJsdWUnIH0sXG4gIHsgaGV4OiAnI0ZGRjhEQycsIG5hbWU6ICdDb3Juc2lsaycgfSxcbiAgeyBoZXg6ICcjREMxNDNDJywgbmFtZTogJ0NyaW1zb24nIH0sXG4gIHsgaGV4OiAnIzAwRkZGRicsIG5hbWU6ICdDeWFuJyB9LFxuICB7IGhleDogJyMwMDAwOEInLCBuYW1lOiAnRGFya0JsdWUnIH0sXG4gIHsgaGV4OiAnIzAwOEI4QicsIG5hbWU6ICdEYXJrQ3lhbicgfSxcbiAgeyBoZXg6ICcjQjg4NjBCJywgbmFtZTogJ0RhcmtHb2xkZW5Sb2QnIH0sXG4gIHsgaGV4OiAnI0E5QTlBOScsIG5hbWU6ICdEYXJrR3JheScgfSxcbiAgeyBoZXg6ICcjQTlBOUE5JywgbmFtZTogJ0RhcmtHcmV5JyB9LFxuICB7IGhleDogJyMwMDY0MDAnLCBuYW1lOiAnRGFya0dyZWVuJyB9LFxuICB7IGhleDogJyNCREI3NkInLCBuYW1lOiAnRGFya0toYWtpJyB9LFxuICB7IGhleDogJyM4QjAwOEInLCBuYW1lOiAnRGFya01hZ2VudGEnIH0sXG4gIHsgaGV4OiAnIzU1NkIyRicsIG5hbWU6ICdEYXJrT2xpdmVHcmVlbicgfSxcbiAgeyBoZXg6ICcjRkY4QzAwJywgbmFtZTogJ0RhcmtPcmFuZ2UnIH0sXG4gIHsgaGV4OiAnIzk5MzJDQycsIG5hbWU6ICdEYXJrT3JjaGlkJyB9LFxuICB7IGhleDogJyM4QjAwMDAnLCBuYW1lOiAnRGFya1JlZCcgfSxcbiAgeyBoZXg6ICcjRTk5NjdBJywgbmFtZTogJ0RhcmtTYWxtb24nIH0sXG4gIHsgaGV4OiAnIzhGQkM4RicsIG5hbWU6ICdEYXJrU2VhR3JlZW4nIH0sXG4gIHsgaGV4OiAnIzQ4M0Q4QicsIG5hbWU6ICdEYXJrU2xhdGVCbHVlJyB9LFxuICB7IGhleDogJyMyRjRGNEYnLCBuYW1lOiAnRGFya1NsYXRlR3JheScgfSxcbiAgeyBoZXg6ICcjMkY0RjRGJywgbmFtZTogJ0RhcmtTbGF0ZUdyZXknIH0sXG4gIHsgaGV4OiAnIzAwQ0VEMScsIG5hbWU6ICdEYXJrVHVycXVvaXNlJyB9LFxuICB7IGhleDogJyM5NDAwRDMnLCBuYW1lOiAnRGFya1Zpb2xldCcgfSxcbiAgeyBoZXg6ICcjRkYxNDkzJywgbmFtZTogJ0RlZXBQaW5rJyB9LFxuICB7IGhleDogJyMwMEJGRkYnLCBuYW1lOiAnRGVlcFNreUJsdWUnIH0sXG4gIHsgaGV4OiAnIzY5Njk2OScsIG5hbWU6ICdEaW1HcmF5JyB9LFxuICB7IGhleDogJyM2OTY5NjknLCBuYW1lOiAnRGltR3JleScgfSxcbiAgeyBoZXg6ICcjMUU5MEZGJywgbmFtZTogJ0RvZGdlckJsdWUnIH0sXG4gIHsgaGV4OiAnI0IyMjIyMicsIG5hbWU6ICdGaXJlQnJpY2snIH0sXG4gIHsgaGV4OiAnI0ZGRkFGMCcsIG5hbWU6ICdGbG9yYWxXaGl0ZScgfSxcbiAgeyBoZXg6ICcjMjI4QjIyJywgbmFtZTogJ0ZvcmVzdEdyZWVuJyB9LFxuICB7IGhleDogJyNGRjAwRkYnLCBuYW1lOiAnRnVjaHNpYScgfSxcbiAgeyBoZXg6ICcjRENEQ0RDJywgbmFtZTogJ0dhaW5zYm9ybycgfSxcbiAgeyBoZXg6ICcjRjhGOEZGJywgbmFtZTogJ0dob3N0V2hpdGUnIH0sXG4gIHsgaGV4OiAnI0ZGRDcwMCcsIG5hbWU6ICdHb2xkJyB9LFxuICB7IGhleDogJyNEQUE1MjAnLCBuYW1lOiAnR29sZGVuUm9kJyB9LFxuICB7IGhleDogJyM4MDgwODAnLCBuYW1lOiAnR3JheScgfSxcbiAgeyBoZXg6ICcjODA4MDgwJywgbmFtZTogJ0dyZXknIH0sXG4gIHsgaGV4OiAnIzAwODAwMCcsIG5hbWU6ICdHcmVlbicgfSxcbiAgeyBoZXg6ICcjQURGRjJGJywgbmFtZTogJ0dyZWVuWWVsbG93JyB9LFxuICB7IGhleDogJyNGMEZGRjAnLCBuYW1lOiAnSG9uZXlEZXcnIH0sXG4gIHsgaGV4OiAnI0ZGNjlCNCcsIG5hbWU6ICdIb3RQaW5rJyB9LFxuICB7IGhleDogJyNDRDVDNUMnLCBuYW1lOiAnSW5kaWFuUmVkJyB9LFxuICB7IGhleDogJyM0QjAwODInLCBuYW1lOiAnSW5kaWdvJyB9LFxuICB7IGhleDogJyNGRkZGRjAnLCBuYW1lOiAnSXZvcnknIH0sXG4gIHsgaGV4OiAnI0YwRTY4QycsIG5hbWU6ICdLaGFraScgfSxcbiAgeyBoZXg6ICcjRTZFNkZBJywgbmFtZTogJ0xhdmVuZGVyJyB9LFxuICB7IGhleDogJyNGRkYwRjUnLCBuYW1lOiAnTGF2ZW5kZXJCbHVzaCcgfSxcbiAgeyBoZXg6ICcjN0NGQzAwJywgbmFtZTogJ0xhd25HcmVlbicgfSxcbiAgeyBoZXg6ICcjRkZGQUNEJywgbmFtZTogJ0xlbW9uQ2hpZmZvbicgfSxcbiAgeyBoZXg6ICcjQUREOEU2JywgbmFtZTogJ0xpZ2h0Qmx1ZScgfSxcbiAgeyBoZXg6ICcjRjA4MDgwJywgbmFtZTogJ0xpZ2h0Q29yYWwnIH0sXG4gIHsgaGV4OiAnI0UwRkZGRicsIG5hbWU6ICdMaWdodEN5YW4nIH0sXG4gIHsgaGV4OiAnI0ZBRkFEMicsIG5hbWU6ICdMaWdodEdvbGRlblJvZFllbGxvdycgfSxcbiAgeyBoZXg6ICcjRDNEM0QzJywgbmFtZTogJ0xpZ2h0R3JheScgfSxcbiAgeyBoZXg6ICcjRDNEM0QzJywgbmFtZTogJ0xpZ2h0R3JleScgfSxcbiAgeyBoZXg6ICcjOTBFRTkwJywgbmFtZTogJ0xpZ2h0R3JlZW4nIH0sXG4gIHsgaGV4OiAnI0ZGQjZDMScsIG5hbWU6ICdMaWdodFBpbmsnIH0sXG4gIHsgaGV4OiAnI0ZGQTA3QScsIG5hbWU6ICdMaWdodFNhbG1vbicgfSxcbiAgeyBoZXg6ICcjMjBCMkFBJywgbmFtZTogJ0xpZ2h0U2VhR3JlZW4nIH0sXG4gIHsgaGV4OiAnIzg3Q0VGQScsIG5hbWU6ICdMaWdodFNreUJsdWUnIH0sXG4gIHsgaGV4OiAnIzc3ODg5OScsIG5hbWU6ICdMaWdodFNsYXRlR3JheScgfSxcbiAgeyBoZXg6ICcjNzc4ODk5JywgbmFtZTogJ0xpZ2h0U2xhdGVHcmV5JyB9LFxuICB7IGhleDogJyNCMEM0REUnLCBuYW1lOiAnTGlnaHRTdGVlbEJsdWUnIH0sXG4gIHsgaGV4OiAnI0ZGRkZFMCcsIG5hbWU6ICdMaWdodFllbGxvdycgfSxcbiAgeyBoZXg6ICcjMDBGRjAwJywgbmFtZTogJ0xpbWUnIH0sXG4gIHsgaGV4OiAnIzMyQ0QzMicsIG5hbWU6ICdMaW1lR3JlZW4nIH0sXG4gIHsgaGV4OiAnI0ZBRjBFNicsIG5hbWU6ICdMaW5lbicgfSxcbiAgeyBoZXg6ICcjRkYwMEZGJywgbmFtZTogJ01hZ2VudGEnIH0sXG4gIHsgaGV4OiAnIzgwMDAwMCcsIG5hbWU6ICdNYXJvb24nIH0sXG4gIHsgaGV4OiAnIzY2Q0RBQScsIG5hbWU6ICdNZWRpdW1BcXVhTWFyaW5lJyB9LFxuICB7IGhleDogJyMwMDAwQ0QnLCBuYW1lOiAnTWVkaXVtQmx1ZScgfSxcbiAgeyBoZXg6ICcjQkE1NUQzJywgbmFtZTogJ01lZGl1bU9yY2hpZCcgfSxcbiAgeyBoZXg6ICcjOTM3MERCJywgbmFtZTogJ01lZGl1bVB1cnBsZScgfSxcbiAgeyBoZXg6ICcjM0NCMzcxJywgbmFtZTogJ01lZGl1bVNlYUdyZWVuJyB9LFxuICB7IGhleDogJyM3QjY4RUUnLCBuYW1lOiAnTWVkaXVtU2xhdGVCbHVlJyB9LFxuICB7IGhleDogJyMwMEZBOUEnLCBuYW1lOiAnTWVkaXVtU3ByaW5nR3JlZW4nIH0sXG4gIHsgaGV4OiAnIzQ4RDFDQycsIG5hbWU6ICdNZWRpdW1UdXJxdW9pc2UnIH0sXG4gIHsgaGV4OiAnI0M3MTU4NScsIG5hbWU6ICdNZWRpdW1WaW9sZXRSZWQnIH0sXG4gIHsgaGV4OiAnIzE5MTk3MCcsIG5hbWU6ICdNaWRuaWdodEJsdWUnIH0sXG4gIHsgaGV4OiAnI0Y1RkZGQScsIG5hbWU6ICdNaW50Q3JlYW0nIH0sXG4gIHsgaGV4OiAnI0ZGRTRFMScsIG5hbWU6ICdNaXN0eVJvc2UnIH0sXG4gIHsgaGV4OiAnI0ZGRTRCNScsIG5hbWU6ICdNb2NjYXNpbicgfSxcbiAgeyBoZXg6ICcjRkZERUFEJywgbmFtZTogJ05hdmFqb1doaXRlJyB9LFxuICB7IGhleDogJyMwMDAwODAnLCBuYW1lOiAnTmF2eScgfSxcbiAgeyBoZXg6ICcjRkRGNUU2JywgbmFtZTogJ09sZExhY2UnIH0sXG4gIHsgaGV4OiAnIzgwODAwMCcsIG5hbWU6ICdPbGl2ZScgfSxcbiAgeyBoZXg6ICcjNkI4RTIzJywgbmFtZTogJ09saXZlRHJhYicgfSxcbiAgeyBoZXg6ICcjRkZBNTAwJywgbmFtZTogJ09yYW5nZScgfSxcbiAgeyBoZXg6ICcjRkY0NTAwJywgbmFtZTogJ09yYW5nZVJlZCcgfSxcbiAgeyBoZXg6ICcjREE3MEQ2JywgbmFtZTogJ09yY2hpZCcgfSxcbiAgeyBoZXg6ICcjRUVFOEFBJywgbmFtZTogJ1BhbGVHb2xkZW5Sb2QnIH0sXG4gIHsgaGV4OiAnIzk4RkI5OCcsIG5hbWU6ICdQYWxlR3JlZW4nIH0sXG4gIHsgaGV4OiAnI0FGRUVFRScsIG5hbWU6ICdQYWxlVHVycXVvaXNlJyB9LFxuICB7IGhleDogJyNEQjcwOTMnLCBuYW1lOiAnUGFsZVZpb2xldFJlZCcgfSxcbiAgeyBoZXg6ICcjRkZFRkQ1JywgbmFtZTogJ1BhcGF5YVdoaXAnIH0sXG4gIHsgaGV4OiAnI0ZGREFCOScsIG5hbWU6ICdQZWFjaFB1ZmYnIH0sXG4gIHsgaGV4OiAnI0NEODUzRicsIG5hbWU6ICdQZXJ1JyB9LFxuICB7IGhleDogJyNGRkMwQ0InLCBuYW1lOiAnUGluaycgfSxcbiAgeyBoZXg6ICcjRERBMEREJywgbmFtZTogJ1BsdW0nIH0sXG4gIHsgaGV4OiAnI0IwRTBFNicsIG5hbWU6ICdQb3dkZXJCbHVlJyB9LFxuICB7IGhleDogJyM4MDAwODAnLCBuYW1lOiAnUHVycGxlJyB9LFxuICB7IGhleDogJyM2NjMzOTknLCBuYW1lOiAnUmViZWNjYVB1cnBsZScgfSxcbiAgeyBoZXg6ICcjRkYwMDAwJywgbmFtZTogJ1JlZCcgfSxcbiAgeyBoZXg6ICcjQkM4RjhGJywgbmFtZTogJ1Jvc3lCcm93bicgfSxcbiAgeyBoZXg6ICcjNDE2OUUxJywgbmFtZTogJ1JveWFsQmx1ZScgfSxcbiAgeyBoZXg6ICcjOEI0NTEzJywgbmFtZTogJ1NhZGRsZUJyb3duJyB9LFxuICB7IGhleDogJyNGQTgwNzInLCBuYW1lOiAnU2FsbW9uJyB9LFxuICB7IGhleDogJyNGNEE0NjAnLCBuYW1lOiAnU2FuZHlCcm93bicgfSxcbiAgeyBoZXg6ICcjMkU4QjU3JywgbmFtZTogJ1NlYUdyZWVuJyB9LFxuICB7IGhleDogJyNGRkY1RUUnLCBuYW1lOiAnU2VhU2hlbGwnIH0sXG4gIHsgaGV4OiAnI0EwNTIyRCcsIG5hbWU6ICdTaWVubmEnIH0sXG4gIHsgaGV4OiAnI0MwQzBDMCcsIG5hbWU6ICdTaWx2ZXInIH0sXG4gIHsgaGV4OiAnIzg3Q0VFQicsIG5hbWU6ICdTa3lCbHVlJyB9LFxuICB7IGhleDogJyM2QTVBQ0QnLCBuYW1lOiAnU2xhdGVCbHVlJyB9LFxuICB7IGhleDogJyM3MDgwOTAnLCBuYW1lOiAnU2xhdGVHcmF5JyB9LFxuICB7IGhleDogJyM3MDgwOTAnLCBuYW1lOiAnU2xhdGVHcmV5JyB9LFxuICB7IGhleDogJyNGRkZBRkEnLCBuYW1lOiAnU25vdycgfSxcbiAgeyBoZXg6ICcjMDBGRjdGJywgbmFtZTogJ1NwcmluZ0dyZWVuJyB9LFxuICB7IGhleDogJyM0NjgyQjQnLCBuYW1lOiAnU3RlZWxCbHVlJyB9LFxuICB7IGhleDogJyNEMkI0OEMnLCBuYW1lOiAnVGFuJyB9LFxuICB7IGhleDogJyMwMDgwODAnLCBuYW1lOiAnVGVhbCcgfSxcbiAgeyBoZXg6ICcjRDhCRkQ4JywgbmFtZTogJ1RoaXN0bGUnIH0sXG4gIHsgaGV4OiAnI0ZGNjM0NycsIG5hbWU6ICdUb21hdG8nIH0sXG4gIHsgaGV4OiAnIzQwRTBEMCcsIG5hbWU6ICdUdXJxdW9pc2UnIH0sXG4gIHsgaGV4OiAnI0VFODJFRScsIG5hbWU6ICdWaW9sZXQnIH0sXG4gIHsgaGV4OiAnI0Y1REVCMycsIG5hbWU6ICdXaGVhdCcgfSxcbiAgeyBoZXg6ICcjRkZGRkZGJywgbmFtZTogJ1doaXRlJyB9LFxuICB7IGhleDogJyNGNUY1RjUnLCBuYW1lOiAnV2hpdGVTbW9rZScgfSxcbiAgeyBoZXg6ICcjRkZGRjAwJywgbmFtZTogJ1llbGxvdycgfSxcbiAgeyBoZXg6ICcjOUFDRDMyJywgbmFtZTogJ1llbGxvd0dyZWVuJyB9XG5dXG4iLCJpbXBvcnQgUmF3QnVpbGRlciBmcm9tICcuL1Jhd0J1aWxkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b25CdWlsZGVyIGV4dGVuZHMgUmF3QnVpbGRlcjxIVE1MQnV0dG9uRWxlbWVudD57XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdidXR0b24nKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUmF3QnVpbGRlciBmcm9tICcuL1Jhd0J1aWxkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWluZXJCdWlsZGVyIGV4dGVuZHMgUmF3QnVpbGRlcjxIVE1MRGl2RWxlbWVudD57XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdkaXYnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXBwZW5kQ2hpbGRJZkRlZmluZWQoZWxlbWVudDogSFRNTEVsZW1lbnQpe1xuICAgICAgICBpZihlbGVtZW50ICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cbiIsImltcG9ydCBSYXdCdWlsZGVyIGZyb20gJy4vUmF3QnVpbGRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlQnVpbGRlciBleHRlbmRzIFJhd0J1aWxkZXI8SFRNTEltYWdlRWxlbWVudD57XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdpbWcnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0VXJsKHVybD86IHN0cmluZykge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3JjID0gdXJsO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG4iLCJpbXBvcnQgUmF3QnVpbGRlciBmcm9tICcuL1Jhd0J1aWxkZXInO1xuaW1wb3J0IHsgSW5wdXRUeXBlRW51bSB9IGZyb20gJy4uL2VudW1zL2lucHV0LXR5cGUuZW51bSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0QnVpbGRlciBleHRlbmRzIFJhd0J1aWxkZXI8SFRNTElucHV0RWxlbWVudD57XG4gICAgY29uc3RydWN0b3IodHlwZTogSW5wdXRUeXBlRW51bSkge1xuICAgICAgICBzdXBlcignaW5wdXQnKVxuICAgICAgICB0aGlzLmVsZW1lbnQudHlwZSA9IHR5cGU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LnZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRWYWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0TmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Lm5hbWUgPSBuYW1lO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0UGxhY2Vob2xkZXIocGxhY2Vob2xkZXI6IHN0cmluZykge1xuICAgICAgICB0aGlzLmVsZW1lbnQucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIGNoZWNrZWQoY2hlY2tlZCA9IHRydWUpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmNoZWNrZWQgPSBjaGVja2VkO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0TWF4KG1heDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5tYXggPSBgJHttYXh9YDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldE1pbihtaW46IG51bWJlcikge1xuICAgICAgICB0aGlzLmVsZW1lbnQubWluID0gYCR7bWlufWA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cbiIsImltcG9ydCBSYXdCdWlsZGVyIGZyb20gJy4vUmF3QnVpbGRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhYmVsQnVpbGRlciBleHRlbmRzIFJhd0J1aWxkZXI8SFRNTExhYmVsRWxlbWVudD57XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdsYWJlbCcpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFN0eWxlTmFtZUVudW0gfSBmcm9tICcuLi9lbnVtcy9zdHlsZS1uYW1lLmVudW0nO1xuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgUmF3QnVpbGRlcjxUIGV4dGVuZHMgSFRNTEVsZW1lbnQ+e1xuICAgIHByb3RlY3RlZCBlbGVtZW50OiBUO1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRJZChpZCA6IHN0cmluZykge1xuICAgICAgICB0aGlzLmVsZW1lbnQuaWQgPSBpZDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldE5hbWUobmFtZSA6IHN0cmluZykge1xuICAgICAgICB0aGlzLmVsZW1lbnRbJ25hbWUnXSA9IG5hbWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRTdHlsZShzdHlsZU5hbWU6IFN0eWxlTmFtZUVudW0sIHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3N0eWxlTmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldElubmVyVGV4dCh0ZXh0OiBzdHJpbmcpe1xuICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJUZXh0ID0gdGV4dDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIGRyYWdnYWJsZShzZWxlY3RlZCA9IHRydWUpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmRyYWdnYWJsZSA9IHNlbGVjdGVkO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkQ3NzQ2xhc3NOYW1lKGNsYXNzTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRBbGxDaGlsZHMoKTogTm9kZVtdIHtcbiAgICAgICAgY29uc3QgY2hpbGROb2RlczogTm9kZVtdID0gW107XG5cbiAgICAgICAgdGhpcy5lbGVtZW50LmNoaWxkTm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICAgICAgY2hpbGROb2Rlcy5wdXNoKG5vZGUpXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIGNoaWxkTm9kZXM7XG4gICAgfVxuXG4gICAgcHVibGljIGZpbmRDaGlsZE5vZGVCeU5hbWUobmFtZTogc3RyaW5nKTogTm9kZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEFsbENoaWxkcygpLmZpbmQoKG5vZGUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBub2RlWyduYW1lJ10gPT09IG5hbWVcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwdWJsaWMgYXBwZW5kQ2hpbGQoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmVDaGlsZE5vZGUobm9kZTogTm9kZSkge1xuICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQ2hpbGQobm9kZSlcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZUNoaWxkTm9kZUJ5TmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVDaGlsZE5vZGUodGhpcy5maW5kQ2hpbGROb2RlQnlOYW1lKG5hbWUpKVxuICAgIH1cblxuICAgIHB1YmxpYyBtb292ZUNoaWxkVXBwZXJQb3NpdGlvbkJ5TmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3Qgbm9kZXNBcnJheSA9IHRoaXMuZ2V0QWxsQ2hpbGRzKCk7XG5cbiAgICAgICAgY29uc3QgaW5kZXhPZkNoaWxkID0gbm9kZXNBcnJheS5maW5kSW5kZXgoKG5vZGUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBub2RlWyduYW1lJ10gPT09IG5hbWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYoaW5kZXhPZkNoaWxkICE9PSAwKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtc1RvTW92ZSA9IG5vZGVzQXJyYXkuc2xpY2UoIC0gbm9kZXNBcnJheS5sZW5ndGggKyBpbmRleE9mQ2hpbGQgLSAxICk7XG5cbiAgICAgICAgICAgIGl0ZW1zVG9Nb3ZlLmZvckVhY2goKG5vZGUpID0+IHRoaXMuZWxlbWVudC5yZW1vdmVDaGlsZChub2RlKSk7XG5cbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChub2Rlc0FycmF5W2luZGV4T2ZDaGlsZF0pO1xuXG4gICAgICAgICAgICBpdGVtc1RvTW92ZS5zcGxpY2UoMSwgMSk7XG5cbiAgICAgICAgICAgIGl0ZW1zVG9Nb3ZlLmZvckVhY2goKG5vZGUpID0+IHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChub2RlKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgbW9vdmVDaGlsZExvd2VyUG9zaXRpb25CeU5hbWUobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IG5vZGVzQXJyYXkgPSB0aGlzLmdldEFsbENoaWxkcygpO1xuXG4gICAgICAgIGNvbnN0IGluZGV4T2ZDaGlsZCA9IG5vZGVzQXJyYXkuZmluZEluZGV4KChub2RlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZVsnbmFtZSddID09PSBuYW1lXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmKGluZGV4T2ZDaGlsZCAhPT0gbm9kZXNBcnJheS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtc1RvTW92ZSA9IG5vZGVzQXJyYXkuc2xpY2UoIC0gbm9kZXNBcnJheS5sZW5ndGggKyBpbmRleE9mQ2hpbGQgKTtcblxuICAgICAgICAgICAgaXRlbXNUb01vdmUuZm9yRWFjaCgobm9kZSkgPT4gdGhpcy5lbGVtZW50LnJlbW92ZUNoaWxkKG5vZGUpKTtcblxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRFbGVtZW50ID0gaXRlbXNUb01vdmUuc3BsaWNlKDAsIDEpWzBdO1xuXG4gICAgICAgICAgICBpdGVtc1RvTW92ZS5zcGxpY2UoMCArIDEsIDAsIHNlbGVjdGVkRWxlbWVudCk7XG5cbiAgICAgICAgICAgIGl0ZW1zVG9Nb3ZlLmZvckVhY2goKG5vZGUpID0+IHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChub2RlKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkRXZlbnRMaXN0ZW5lcih0eXBlOiBzdHJpbmcsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrKVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5lbGVtZW50WydkaXNhYmxlZCddID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGJ1aWxkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICAgIH1cbn1cbiIsImltcG9ydCBSYXdCdWlsZGVyIGZyb20gJy4vUmF3QnVpbGRlcic7XG5pbXBvcnQgQXJyYXlTZWxlY3RvckJvZHlJbnRlcmZhY2UgZnJvbSAnLi4vaW50ZXJmYWNlcy9zZWxlY3Rvci1mcm9tLWFycmF5LWJvZHkuaW50ZXJmYWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0b3JGcm9tQXJyYXlCdWlsZGVyIGV4dGVuZHMgUmF3QnVpbGRlcjxIVE1MU2VsZWN0RWxlbWVudD57XG4gICAgcHJpdmF0ZSBfb3B0aW9uczogQXJyYXlTZWxlY3RvckJvZHlJbnRlcmZhY2VbXTtcblxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IEFycmF5U2VsZWN0b3JCb2R5SW50ZXJmYWNlW10pIHtcbiAgICAgICAgc3VwZXIoJ3NlbGVjdCcpO1xuICAgICAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5hZGRPcHRpb25zKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRPcHRpb25zKCkge1xuICAgICAgICB0aGlzLl9vcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBuZXdPcHRpb24udGV4dCA9IG9wdGlvbi50ZXh0O1xuICAgICAgICAgICAgbmV3T3B0aW9uLnZhbHVlID0gb3B0aW9uLnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKG5ld09wdGlvbilcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIHNlbGVjdE9wdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGZvdW5kVmFsdWVJbmRleCA9IHRoaXMuX29wdGlvbnMuZmluZEluZGV4KChrZXkpID0+IGtleS52YWx1ZSA9PT0gdmFsdWUpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9IGZvdW5kVmFsdWVJbmRleDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCB2YWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC52YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHNlbGVjdGVkSW5kZXgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQuc2VsZWN0ZWRJbmRleDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHNlbGVjdGVkSW5kZXgoaW5kZXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgb3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5vcHRpb25zO1xuICAgIH1cbn1cbiIsImltcG9ydCBSYXdCdWlsZGVyIGZyb20gJy4vUmF3QnVpbGRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyIGV4dGVuZHMgUmF3QnVpbGRlcjxIVE1MU2VsZWN0RWxlbWVudD57XG4gICAgcHJpdmF0ZSBrZXlzOiBzdHJpbmdbXTtcbiAgICBwcml2YXRlIG9wdGlvbnM6IFJlY29yZDxzdHJpbmcsc3RyaW5nPjtcblxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IFJlY29yZDxzdHJpbmcsc3RyaW5nPikge1xuICAgICAgICBzdXBlcignc2VsZWN0Jyk7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIHRoaXMua2V5cyA9IE9iamVjdC5rZXlzKG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuYWRkT3B0aW9ucygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC52YWx1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZE9wdGlvbnMoKSB7XG4gICAgICAgIHRoaXMua2V5cy5mb3JFYWNoKChvcHRLZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgbmV3T3B0aW9uLnRleHQgPSBvcHRLZXk7XG4gICAgICAgICAgICBuZXdPcHRpb24udmFsdWUgPSB0aGlzLm9wdGlvbnNbb3B0S2V5XTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChuZXdPcHRpb24pXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZWxlY3RPcHRpb24ob3B0aW9uOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgZm91bmRWYWx1ZUluZGV4ID0gdGhpcy5rZXlzLmZpbmRJbmRleCgoa2V5KSA9PiB0aGlzLm9wdGlvbnNba2V5XSA9PT0gb3B0aW9uKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnNlbGVjdGVkSW5kZXggPSBmb3VuZFZhbHVlSW5kZXg7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cbiIsImltcG9ydCBDb250YWluZXJCdWlsZGVyIGZyb20gJy4vQ29udGFpbmVyQnVpbGRlcic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHlsZXNDb21wb25lbnRzQnVpbGRlciB7XG4gICAgcHVibGljIGh0bWxTdHlsZXNDb250YWluZXI6IEhUTUxEaXZFbGVtZW50ID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKS5idWlsZCgpO1xuICAgIHByaXZhdGUgYWN0aW9uc0NvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWN0aW9ucy1jb250YWluZXInKTtcblxuICAgIHB1YmxpYyBhcHBlbmRDaGlsZChlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuaHRtbFN0eWxlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYnVpbGQoKTogSFRNTERpdkVsZW1lbnQge1xuICAgICAgICB0aGlzLmFjdGlvbnNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHRoaXMuYWN0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmh0bWxTdHlsZXNDb250YWluZXIpO1xuICAgICAgICByZXR1cm4gdGhpcy5odG1sU3R5bGVzQ29udGFpbmVyO1xuICAgIH1cblxuICAgIHJlbW92ZSgpIHtcbiAgICAgICAgdGhpcy5hY3Rpb25zQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIH1cbn1cbiIsImltcG9ydCBSYXdCdWlsZGVyIGZyb20gJy4vUmF3QnVpbGRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRhcmVhQnVpbGRlciBleHRlbmRzIFJhd0J1aWxkZXI8SFRNTFRleHRBcmVhRWxlbWVudD57XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCd0ZXh0YXJlYScpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRWYWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQudmFsdWU7XG4gICAgfVxufVxuIiwiaW1wb3J0IFJhd0J1aWxkZXIgZnJvbSAnLi9SYXdCdWlsZGVyJztcblxuaW1wb3J0IHsgVGl0bGVUeXBlc0VudW0gfSBmcm9tICcuLi9lbnVtcy90aXRsZS50eXBlcy5lbnVtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGl0bGVCdWlsZGVyIGV4dGVuZHMgUmF3QnVpbGRlcjxIVE1MQnV0dG9uRWxlbWVudD57XG4gICAgY29uc3RydWN0b3IodHlwZTogVGl0bGVUeXBlc0VudW0pIHtcbiAgICAgICAgc3VwZXIodHlwZSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IENsYXNzQ2hhbmdlUHVibGlzaGVySW50ZXJmYWNlIGZyb20gJy4uL2ludGVyZmFjZXMvY2xhc3MtY2hhbmdlLXB1Ymxpc2hlci5pbnRlcmZhY2UnO1xuaW1wb3J0IENsYXNzQ2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2UgZnJvbSAnLi4vaW50ZXJmYWNlcy9jbGFzcy1jaGFuZ2Utb2JzZXJ2ZXIuaW50ZXJmYWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xhc3NDaGFuZ2VQdWJsaXNoZXIgaW1wbGVtZW50cyBDbGFzc0NoYW5nZVB1Ymxpc2hlckludGVyZmFjZSB7XG4gICAgcHJpdmF0ZSBvYnNlcnZlcnM6IENsYXNzQ2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2VbXSA9IFtdO1xuXG4gICAgcHVibGljIGF0dGFjaChvYnNlcnZlcjogQ2xhc3NDaGFuZ2VPYnNlcnZlckludGVyZmFjZSk6IHZvaWQge1xuICAgICAgICBjb25zdCBpc0V4aXN0ID0gdGhpcy5vYnNlcnZlcnMuaW5jbHVkZXMob2JzZXJ2ZXIpO1xuICAgICAgICBpZiAoaXNFeGlzdCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKCdTdWJqZWN0OiBPYnNlcnZlciBoYXMgYmVlbiBhdHRhY2hlZCBhbHJlYWR5LicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLnB1c2gob2JzZXJ2ZXIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZXRhY2gob2JzZXJ2ZXI6IENsYXNzQ2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2UpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXJJbmRleCA9IHRoaXMub2JzZXJ2ZXJzLmluZGV4T2Yob2JzZXJ2ZXIpO1xuICAgICAgICBpZiAob2JzZXJ2ZXJJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmxvZygnU3ViamVjdDogTm9uZXhpc3RlbnQgb2JzZXJ2ZXIuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vYnNlcnZlcnMuc3BsaWNlKG9ic2VydmVySW5kZXgsIDEpO1xuICAgIH1cblxuICAgIHB1YmxpYyBub3RpZnlDbGFzc05hbWUobmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGZvciAoY29uc3Qgb2JzZXJ2ZXIgb2YgdGhpcy5vYnNlcnZlcnMpIHtcbiAgICAgICAgICAgIG9ic2VydmVyLmNsYXNzTmFtZVVwZGF0ZWQobmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50Q2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2UgZnJvbSAnLi4vaW50ZXJmYWNlcy9jb21wb25lbnQtY2hhbmdlLW9ic2VydmVyLmludGVyZmFjZSc7XG5pbXBvcnQgQ29tcG9uZW50Q2hhbmdlUHVibGlzaGVySW50ZXJmYWNlIGZyb20gJy4uL2ludGVyZmFjZXMvY29tcG9uZW50LWNoYW5nZS1wdWJsaXNoZXIuaW50ZXJmYWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50Q2hhbmdlUHVibGlzaGVyIGltcGxlbWVudHMgQ29tcG9uZW50Q2hhbmdlUHVibGlzaGVySW50ZXJmYWNlIHtcbiAgICBwcml2YXRlIG9ic2VydmVyczogQ29tcG9uZW50Q2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2VbXSA9IFtdO1xuXG4gICAgcHVibGljIGF0dGFjaChvYnNlcnZlcjogQ29tcG9uZW50Q2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2UpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaXNFeGlzdCA9IHRoaXMub2JzZXJ2ZXJzLmluY2x1ZGVzKG9ic2VydmVyKTtcbiAgICAgICAgaWYgKGlzRXhpc3QpIHtcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmxvZygnU3ViamVjdDogT2JzZXJ2ZXIgaGFzIGJlZW4gYXR0YWNoZWQgYWxyZWFkeS4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9ic2VydmVycy5wdXNoKG9ic2VydmVyKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGV0YWNoKG9ic2VydmVyOiBDb21wb25lbnRDaGFuZ2VPYnNlcnZlckludGVyZmFjZSk6IHZvaWQge1xuICAgICAgICBjb25zdCBvYnNlcnZlckluZGV4ID0gdGhpcy5vYnNlcnZlcnMuaW5kZXhPZihvYnNlcnZlcik7XG4gICAgICAgIGlmIChvYnNlcnZlckluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKCdTdWJqZWN0OiBOb25leGlzdGVudCBvYnNlcnZlci4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9ic2VydmVycy5zcGxpY2Uob2JzZXJ2ZXJJbmRleCwgMSk7XG4gICAgfVxuXG4gICAgcHVibGljIG5vdGlmeUNvbXBvbmVudE5hbWUobmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGZvciAoY29uc3Qgb2JzZXJ2ZXIgb2YgdGhpcy5vYnNlcnZlcnMpIHtcbiAgICAgICAgICAgIG9ic2VydmVyLmNvbXBvbmVudFNlbGVjdGVkKG5hbWUpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IGRyYWdTdGFydFdpdGhUYXJnZXROb2RlTmFtZSBmcm9tICcuLi9jb21tb24vZnVuY3Rpb25zL2RyYWctc3RhcnQtd2l0aC10YXJnZXQtbm9kZV9uYW1lJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdERyYWdnYWJsZUNvbXBvbmVudHMoKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZG9tLWVsZW1lbnQnKTtcblxuICAgIGRvbUVsZW1lbnRzLmZvckVhY2goKGRvbUVsZW1lbnQpID0+IHtcbiAgICAgICAgZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBkcmFnU3RhcnRXaXRoVGFyZ2V0Tm9kZU5hbWUpO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IFJhd0hUTUxDb25wb25lbnQgZnJvbSAnLi4vaHRtbC1jb21wb25lbnRzL1Jhd0hUTUxDb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDc3NTdHlsZVNoZWV0IHtcbiAgICBwcml2YXRlIHN0YXRpYyBzdHlsZVNoZWV0ID0gZG9jdW1lbnQuc3R5bGVTaGVldHNbMV07XG5cbiAgICAvKlxuICAgIENTU1N0eWxlU2hlZXREb2N1bWVudGF0aW9uOlxuICAgIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DU1NTdHlsZVNoZWV0L2FkZFJ1bGVcbiAgICAqL1xuXG4gICAgc3RhdGljIGluaXQoKSB7XG4gICAgICAgIGNvbnN0IHByaW50Q3NzRmlsZUJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpbnQtY3NzLWZpbGUnKTtcbiAgICAgICAgdGhpcy5wcmludCA9IHRoaXMucHJpbnQuYmluZCh0aGlzKTtcbiAgICAgICAgcHJpbnRDc3NGaWxlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5wcmludCk7XG4gICAgfVxuXG4gICAgc3RhdGljIHByaW50KCkge1xuICAgICAgICBsZXQgY3NzRmlsZU91dHB1dCA9ICcnO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKENzc1N0eWxlU2hlZXQuc3R5bGVTaGVldC5jc3NSdWxlcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgY3NzRmlsZU91dHB1dCArPSBgJHtDc3NTdHlsZVNoZWV0LnN0eWxlU2hlZXQuY3NzUnVsZXNbcGFyc2VJbnQoa2V5KV0uY3NzVGV4dH1cXG5cXG5gXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGNzc0ZpbGVPdXRwdXQpO1xuXG4gICAgICAgIC8vIFRPRE86IHZlciBzaSBoYXkgcXVlIGVsaW1pbmFyIGFsZ28gZGVsIGFwcC1jb250YWluZXIuLi4gYWxndW4gYXRyaWJ1dG8uLi5cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0UnVsZShpZDogc3RyaW5nKTogQ1NTUnVsZSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRSdWxlSW5kZXgoaWQpO1xuICAgICAgICByZXR1cm4gQ3NzU3R5bGVTaGVldC5zdHlsZVNoZWV0LmNzc1J1bGVzW2luZGV4XTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0UnVsZUluZGV4KGlkOiBzdHJpbmcpOiBudW1iZXIge1xuICAgICAgICBjb25zdCBpbmRleCA9IHBhcnNlSW50KE9iamVjdC5rZXlzKENzc1N0eWxlU2hlZXQuc3R5bGVTaGVldC5jc3NSdWxlcykuZmluZChrZXkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gQ3NzU3R5bGVTaGVldC5zdHlsZVNoZWV0LmNzc1J1bGVzW3BhcnNlSW50KGtleSldWydzZWxlY3RvclRleHQnXVxuICAgICAgICAgICAgcmV0dXJuIGNsYXNzTmFtZSA9PT0gYC4ke2lkfWBcbiAgICAgICAgfSkpXG5cbiAgICAgICAgaWYoaXNOYU4oaW5kZXgpKXtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0UnVsZXMoaWQ6IHN0cmluZyk6IENTU1J1bGVbXSB7XG4gICAgICAgIGNvbnN0IGluZGV4ZXMgPSB0aGlzLmdldFJ1bGVzSW5kZXhlcyhpZCk7XG4gICAgICAgIHJldHVybiBpbmRleGVzLm1hcCgoaW5kZXgpID0+IENzc1N0eWxlU2hlZXQuc3R5bGVTaGVldC5jc3NSdWxlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRBbGxSdWxlcygpOiBDU1NSdWxlW10ge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhDc3NTdHlsZVNoZWV0LnN0eWxlU2hlZXQuY3NzUnVsZXMpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRSdWxlc0luZGV4ZXMoaWQ6IHN0cmluZyk6IG51bWJlcltdIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKENzc1N0eWxlU2hlZXQuc3R5bGVTaGVldC5jc3NSdWxlcylcbiAgICAgICAgICAgIC5maWx0ZXIoa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBDc3NTdHlsZVNoZWV0LnN0eWxlU2hlZXQuY3NzUnVsZXNbcGFyc2VJbnQoa2V5KV1bJ3NlbGVjdG9yVGV4dCddXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNsYXNzTmFtZSA9PT0gYC4ke2lkfWAgfHwgY2xhc3NOYW1lLmluY2x1ZGVzKGAuJHtpZH06YClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAubWFwKChpbmRleCkgPT4gcGFyc2VJbnQoaW5kZXgpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0UnVsZVN0eWxlcyhpZDogc3RyaW5nKTogQ1NTU3R5bGVEZWNsYXJhdGlvbiB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRSdWxlSW5kZXgoaWQpO1xuICAgICAgICBjb25zdCBzdHlsZXMgPSBDc3NTdHlsZVNoZWV0LnN0eWxlU2hlZXQuY3NzUnVsZXNbaW5kZXhdO1xuICAgICAgICByZXR1cm4gc3R5bGVzID8gc3R5bGVzWydzdHlsZSddIDoge307XG4gICAgfVxuXG4gICAgc3RhdGljIHJlbW92ZVJ1bGUoaWQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0UnVsZUluZGV4KGlkKTtcbiAgICAgICAgbGV0IGV4aXN0c1J1bGVGb3JBbm90aGVyQ29tcG9uZW50ID0gZmFsc2U7XG5cbiAgICAgICAgUmF3SFRNTENvbnBvbmVudC5pbnN0YW5jZXMuZm9yRWFjaCgoaW5zdGFuY2UpID0+IHtcbiAgICAgICAgICAgIGlmKGluc3RhbmNlLmNsYXNzTGlzdC5jb250YWlucyhpZCkpIHtcbiAgICAgICAgICAgICAgICBleGlzdHNSdWxlRm9yQW5vdGhlckNvbXBvbmVudCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYoIWV4aXN0c1J1bGVGb3JBbm90aGVyQ29tcG9uZW50KSB7XG4gICAgICAgICAgICBDc3NTdHlsZVNoZWV0LnN0eWxlU2hlZXQuZGVsZXRlUnVsZShpbmRleCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgcmVtb3ZlUnVsZUJ5SW5kZXgoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBDc3NTdHlsZVNoZWV0LnN0eWxlU2hlZXQuZGVsZXRlUnVsZShpbmRleCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGluc2VydFJ1bGUocnVsZTogc3RyaW5nKSB7XG4gICAgICAgIENzc1N0eWxlU2hlZXQuc3R5bGVTaGVldC5pbnNlcnRSdWxlKHJ1bGUpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjaGFuZ2VSdWxlTmFtZShjdXJyZW50UnVsZTogc3RyaW5nLCBuZXdSdWxlTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRSdWxlSW5kZXggPSB0aGlzLmdldFJ1bGVJbmRleChjdXJyZW50UnVsZSk7XG4gICAgICAgIGNvbnN0IG5ld1J1bGUgPSBDc3NTdHlsZVNoZWV0LnN0eWxlU2hlZXQuY3NzUnVsZXNbY3VycmVudFJ1bGVJbmRleF0uY3NzVGV4dC5yZXBsYWNlKGN1cnJlbnRSdWxlLCBuZXdSdWxlTmFtZSk7XG4gICAgICAgIHRoaXMucmVtb3ZlUnVsZUJ5SW5kZXgoY3VycmVudFJ1bGVJbmRleCk7XG4gICAgICAgIHRoaXMuaW5zZXJ0UnVsZShuZXdSdWxlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZHVwbGljYXRlUnVsZShydWxlVG9EdXBsaWNhdGU6IHN0cmluZywgbmV3TmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHJ1bGVUb0R1cGxpY2F0ZUluZGV4ID0gdGhpcy5nZXRSdWxlSW5kZXgocnVsZVRvRHVwbGljYXRlKTtcbiAgICAgICAgY29uc3QgbmV3UnVsZSA9XG4gICAgICAgICAgICBDc3NTdHlsZVNoZWV0LnN0eWxlU2hlZXQuY3NzUnVsZXNbcnVsZVRvRHVwbGljYXRlSW5kZXhdLmNzc1RleHQucmVwbGFjZShydWxlVG9EdXBsaWNhdGUsIG5ld05hbWUpO1xuICAgICAgICB0aGlzLmluc2VydFJ1bGUobmV3UnVsZSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudENoYW5nZU9ic2VydmVySW50ZXJmYWNlIGZyb20gJy4uL2NvbW1vbi9pbnRlcmZhY2VzL2NvbXBvbmVudC1jaGFuZ2Utb2JzZXJ2ZXIuaW50ZXJmYWNlJztcblxuaW1wb3J0IEJ1dHRvbkJ1aWxkZXIgZnJvbSAnLi4vY29tbW9uL21vZGVscy9CdXR0b25CdWlsZGVyJztcbmltcG9ydCBSYXdIVE1MQ29ucG9uZW50IGZyb20gJy4vUmF3SFRNTENvbXBvbmVudCc7XG5cbmltcG9ydCBDc3NTdHlsZVNoZWV0IGZyb20gJy4uL2Nzcy1zdHlsZXNoZWV0L2Nzcy1zdHlsZXNoZWV0JztcblxuaW1wb3J0IGRlZmluZUVsZW1lbnROYW1lIGZyb20gJy4uL2NvbW1vbi9mdW5jdGlvbnMvZGVmaW5lLWVsZW1lbnQtbmFtZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIFJhd0hUTUxDb25wb25lbnQgaW1wbGVtZW50cyBDb21wb25lbnRDaGFuZ2VPYnNlcnZlckludGVyZmFjZSB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaXRlcmF0b3IgPSAwO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBkZWZpbmVFbGVtZW50TmFtZShgYnV0dG9uJHtCdXR0b24uaXRlcmF0b3IrK31gLCBSYXdIVE1MQ29ucG9uZW50Lmluc3RhbmNlcyk7XG5cbiAgICAgICAgQ3NzU3R5bGVTaGVldC5pbnNlcnRSdWxlKGAuJHtuYW1lfSB7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICM0Q0FGNTA7XG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9YCk7XG5cbiAgICAgICAgQ3NzU3R5bGVTaGVldC5pbnNlcnRSdWxlKGAuJHtuYW1lfTpob3ZlciB7b3BhY2l0eTogMC42fWApO1xuXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBuZXcgQnV0dG9uQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0TmFtZShuYW1lKVxuICAgICAgICAgICAgLnNldElkKG5hbWUpXG4gICAgICAgICAgICAuYWRkQ3NzQ2xhc3NOYW1lKG5hbWUpXG4gICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdOZXcgQnV0dG9uJylcbiAgICAgICAgICAgIC5kcmFnZ2FibGUoKVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG5cbiAgICAgICAgc3VwZXIoZWxlbWVudCk7XG5cbiAgICAgICAgdGhpcy5vcGVuRWxlbWVudENvbmZpZ3MgPSB0aGlzLm9wZW5FbGVtZW50Q29uZmlncy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRyYWdMZWF2ZSA9IHRoaXMuZHJhZ0xlYXZlLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5fZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLmRyYWdTdGFydFdpdGhUYXJnZXRJZCk7XG4gICAgICAgIHRoaXMuX2RvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgdGhpcy5kcmFnTGVhdmUpO1xuXG4gICAgICAgIHRoaXMuX2RvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9wZW5FbGVtZW50Q29uZmlncyk7XG4gICAgfVxuXG4gICAgZ2V0IGRvbUVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kb21FbGVtZW50O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvcGVuRWxlbWVudENvbmZpZ3MoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMuc2VsZWN0b3JWYWx1ZSgpO1xuXG5cbiAgICAgICAgdGhpcy5idWlsZEVsZW1lbnRDb25maWdzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbXBvbmVudFNlbGVjdGVkKGNvbXBvbmVudCkge1xuICAgICAgICBpZihjb21wb25lbnQgPT09IHRoaXMuX2RvbUVsZW1lbnRbJ25hbWUnXSkge1xuICAgICAgICAgICAgdGhpcy5idWlsZEVsZW1lbnRDb25maWdzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGJ1aWxkRWxlbWVudENvbmZpZ3MoKSB7XG4gICAgICAgIHRoaXMuaW5zZXJ0Q29tcG9uZW50QWZ0ZXIoJ2FkZElubmVyVGV4dENoYW5nZUNvbXBvbmVudCcsICdhZGRDbGFzc05hbWVEZWZpbml0aW9uQ29tcG9uZW50Jyk7XG4gICAgICAgIHRoaXMuYnVpbGRFbGVtZW50cygpO1xuICAgIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnRDaGFuZ2VPYnNlcnZlckludGVyZmFjZSBmcm9tICcuLi9jb21tb24vaW50ZXJmYWNlcy9jb21wb25lbnQtY2hhbmdlLW9ic2VydmVyLmludGVyZmFjZSc7XG5cbmltcG9ydCBDb250YWluZXJCdWlsZGVyIGZyb20gJy4uL2NvbW1vbi9tb2RlbHMvQ29udGFpbmVyQnVpbGRlcic7XG5pbXBvcnQgUmF3SFRNTENvbnBvbmVudCBmcm9tICcuL1Jhd0hUTUxDb21wb25lbnQnO1xuXG5pbXBvcnQgQ3NzU3R5bGVTaGVldCBmcm9tICcuLi9jc3Mtc3R5bGVzaGVldC9jc3Mtc3R5bGVzaGVldCc7XG5pbXBvcnQgY29uc3RhbnRzIGZyb20gJy4uL2NvbW1vbi9jb25zdGFudHMvY29uc3RhbnRzJztcbmltcG9ydCBkZWZpbmVFbGVtZW50TmFtZSBmcm9tICcuLi9jb21tb24vZnVuY3Rpb25zL2RlZmluZS1lbGVtZW50LW5hbWUnO1xuXG5pbXBvcnQgeyBEaXNwbGF5VHlwZXNFbnVtIH0gZnJvbSAnLi4vY29tbW9uL2VudW1zL2Rpc3BsYXktdHlwZXMuZW51bSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRhaW5lciBleHRlbmRzIFJhd0hUTUxDb25wb25lbnQgaW1wbGVtZW50cyBDb21wb25lbnRDaGFuZ2VPYnNlcnZlckludGVyZmFjZSB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaXRlcmF0b3IgPSAwO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBkZWZpbmVFbGVtZW50TmFtZShgY29udGFpbmVyJHtDb250YWluZXIuaXRlcmF0b3IrK31gLCBSYXdIVE1MQ29ucG9uZW50Lmluc3RhbmNlcyk7XG5cbiAgICAgICAgQ3NzU3R5bGVTaGVldC5pbnNlcnRSdWxlKGAuJHtuYW1lfSB7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogJHtEaXNwbGF5VHlwZXNFbnVtLmZsZXh9O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsMjU1LDI1NSk7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBkYXNoZWQgcmdiKDAsMCwwKTtcbiAgICAgICAgfWApO1xuXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0TmFtZShuYW1lKVxuICAgICAgICAgICAgLnNldElkKG5hbWUpXG4gICAgICAgICAgICAuYWRkQ3NzQ2xhc3NOYW1lKG5hbWUpXG4gICAgICAgICAgICAuZHJhZ2dhYmxlKClcbiAgICAgICAgICAgIC5idWlsZCgpO1xuXG4gICAgICAgIHN1cGVyKGVsZW1lbnQpO1xuXG4gICAgICAgIHRoaXMuZHJhZ0VudGVyID0gdGhpcy5kcmFnRW50ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcmFnTGVhdmVGb3JUaGlzRWxlbWVudCA9IHRoaXMuZHJhZ0xlYXZlRm9yVGhpc0VsZW1lbnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcm9wID0gdGhpcy5kcm9wLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5tb3VzZU92ZXIgPSB0aGlzLm1vdXNlT3Zlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm1vdXNlTGVhdmUgPSB0aGlzLm1vdXNlTGVhdmUuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLm9wZW5FbGVtZW50Q29uZmlncyA9IHRoaXMub3BlbkVsZW1lbnRDb25maWdzLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5fZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLmRyYWdTdGFydFdpdGhUYXJnZXRJZCk7XG4gICAgICAgIHRoaXMuX2RvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgdGhpcy5kcmFnRW50ZXIpO1xuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIHRoaXMuZHJhZ0xlYXZlRm9yVGhpc0VsZW1lbnQpO1xuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLmRyb3ApO1xuXG4gICAgICAgIHRoaXMuX2RvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHRoaXMubW91c2VPdmVyKTtcbiAgICAgICAgdGhpcy5fZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5tb3VzZUxlYXZlKTtcblxuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcGVuRWxlbWVudENvbmZpZ3MpO1xuICAgIH1cblxuICAgIGdldCBkb21FbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZG9tRWxlbWVudDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRyYWdFbnRlcihldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb25zdGFudHMuSU5WRVJURURfQkFDS0dST1VORF9DT0xPUjtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50LnBhcmVudEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyc7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkcmFnTGVhdmVGb3JUaGlzRWxlbWVudChldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJztcbiAgICAgICAgdGhpcy5fZG9tRWxlbWVudC5hdHRyaWJ1dGVzLnJlbW92ZU5hbWVkSXRlbSgnc3R5bGUnKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRyb3AoKSB7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJztcbiAgICAgICAgdGhpcy5kb21FbGVtZW50LnBhcmVudEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29uc3RhbnRzLklOVkVSVEVEX0JBQ0tHUk9VTkRfQ09MT1I7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBob3ZlckV4aXN0cygpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IGhvdmVyRXhpc3RzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2RvbUVsZW1lbnQuY2xhc3NMaXN0LmZvckVhY2goKGNsYXNzbmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBpZiAoQ3NzU3R5bGVTaGVldC5nZXRSdWxlSW5kZXgoYCR7Y2xhc3NuYW1lfTpob3ZlcmApICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGhvdmVyRXhpc3RzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGhvdmVyRXhpc3RzO1xuICAgIH1cblxuICAgIHByaXZhdGUgbW91c2VPdmVyKCkge1xuICAgICAgICBpZiAoIXRoaXMuaG92ZXJFeGlzdHMoKSkge1xuICAgICAgICAgICAgdGhpcy5fZG9tRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb25zdGFudHMuSU5WRVJURURfQkFDS0dST1VORF9DT0xPUjtcbiAgICAgICAgICAgIHRoaXMuX2RvbUVsZW1lbnQucGFyZW50RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgbW91c2VMZWF2ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmhvdmVyRXhpc3RzKCkpIHtcbiAgICAgICAgICAgIHRoaXMuX2RvbUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyc7XG4gICAgICAgICAgICB0aGlzLl9kb21FbGVtZW50LnBhcmVudEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29uc3RhbnRzLklOVkVSVEVEX0JBQ0tHUk9VTkRfQ09MT1I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb3BlbkVsZW1lbnRDb25maWdzKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLnNlbGVjdG9yVmFsdWUoKTtcblxuICAgICAgICB0aGlzLmJ1aWxkRWxlbWVudENvbmZpZ3MoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29tcG9uZW50U2VsZWN0ZWQoY29tcG9uZW50KSB7XG4gICAgICAgIGlmKGNvbXBvbmVudCA9PT0gdGhpcy5fZG9tRWxlbWVudFsnbmFtZSddKSB7XG4gICAgICAgICAgICB0aGlzLmJ1aWxkRWxlbWVudENvbmZpZ3MoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgYnVpbGRFbGVtZW50Q29uZmlncygpIHtcbiAgICAgICAgdGhpcy5pbnNlcnRDb21wb25lbnRCZWZvcmUoJ2FkZERpc3BsYXlBc1BhcmVudENvbXBvbmVudCcsICdhZGREaXNwbGF5QXNDaGlsZENvbXBvbmVudCcpO1xuICAgICAgICB0aGlzLmJ1aWxkRWxlbWVudHMoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50Q2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2UgZnJvbSAnLi4vY29tbW9uL2ludGVyZmFjZXMvY29tcG9uZW50LWNoYW5nZS1vYnNlcnZlci5pbnRlcmZhY2UnO1xuXG5pbXBvcnQgSW1hZ2VCdWlsZGVyIGZyb20gJy4uL2NvbW1vbi9tb2RlbHMvSW1hZ2VCdWlsZGVyJztcbmltcG9ydCBSYXdIVE1MQ29ucG9uZW50IGZyb20gJy4vUmF3SFRNTENvbXBvbmVudCc7XG5cbmltcG9ydCBDc3NTdHlsZVNoZWV0IGZyb20gJy4uL2Nzcy1zdHlsZXNoZWV0L2Nzcy1zdHlsZXNoZWV0JztcbmltcG9ydCBkZWZpbmVFbGVtZW50TmFtZSBmcm9tICcuLi9jb21tb24vZnVuY3Rpb25zL2RlZmluZS1lbGVtZW50LW5hbWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZSBleHRlbmRzIFJhd0hUTUxDb25wb25lbnQgaW1wbGVtZW50cyBDb21wb25lbnRDaGFuZ2VPYnNlcnZlckludGVyZmFjZSB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaXRlcmF0b3IgPSAwO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBkZWZpbmVFbGVtZW50TmFtZShgaW1hZ2Uke0ltYWdlLml0ZXJhdG9yKyt9YCwgUmF3SFRNTENvbnBvbmVudC5pbnN0YW5jZXMpO1xuXG4gICAgICAgIENzc1N0eWxlU2hlZXQuaW5zZXJ0UnVsZShgLiR7bmFtZX0ge1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsMjU1LDI1NSk7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBkYXNoZWQgcmdiKDAsMCwwKTtcbiAgICAgICAgfWApO1xuXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBuZXcgSW1hZ2VCdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXROYW1lKG5hbWUpXG4gICAgICAgICAgICAuc2V0SWQobmFtZSlcbiAgICAgICAgICAgIC5hZGRDc3NDbGFzc05hbWUobmFtZSlcbiAgICAgICAgICAgIC5zZXRVcmwoKVxuICAgICAgICAgICAgLmRyYWdnYWJsZSgpXG4gICAgICAgICAgICAuYnVpbGQoKTtcblxuICAgICAgICBzdXBlcihlbGVtZW50KTtcblxuICAgICAgICB0aGlzLm9wZW5FbGVtZW50Q29uZmlncyA9IHRoaXMub3BlbkVsZW1lbnRDb25maWdzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhZ0xlYXZlID0gdGhpcy5kcmFnTGVhdmUuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuZHJhZ1N0YXJ0V2l0aFRhcmdldElkKTtcbiAgICAgICAgdGhpcy5fZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCB0aGlzLmRyYWdMZWF2ZSk7XG5cbiAgICAgICAgdGhpcy5fZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3BlbkVsZW1lbnRDb25maWdzKTtcbiAgICB9XG5cbiAgICBnZXQgZG9tRWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RvbUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9wZW5FbGVtZW50Q29uZmlncyhldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5zZWxlY3RvclZhbHVlKCk7XG4gICAgICAgIHRoaXMuYnVpbGRFbGVtZW50Q29uZmlncygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb21wb25lbnRTZWxlY3RlZChjb21wb25lbnQpIHtcbiAgICAgICAgaWYgKGNvbXBvbmVudCA9PT0gdGhpcy5fZG9tRWxlbWVudFsnbmFtZSddKSB7XG4gICAgICAgICAgICB0aGlzLmJ1aWxkRWxlbWVudENvbmZpZ3MoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgYnVpbGRFbGVtZW50Q29uZmlncygpIHtcbiAgICAgICAgdGhpcy5pbnNlcnRDb21wb25lbnRBZnRlcignYWRkVXJsSW5wdXRDb21wb25lbnQnLCAnYWRkQ2xhc3NOYW1lRGVmaW5pdGlvbkNvbXBvbmVudCcpO1xuICAgICAgICB0aGlzLmJ1aWxkRWxlbWVudHMoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50Q2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2UgZnJvbSAnLi4vY29tbW9uL2ludGVyZmFjZXMvY29tcG9uZW50LWNoYW5nZS1vYnNlcnZlci5pbnRlcmZhY2UnO1xuXG5pbXBvcnQgSW5wdXRCdWlsZGVyIGZyb20gJy4uL2NvbW1vbi9tb2RlbHMvSW5wdXRCdWlsZGVyJztcbmltcG9ydCBSYXdIVE1MQ29ucG9uZW50IGZyb20gJy4vUmF3SFRNTENvbXBvbmVudCc7XG5cbmltcG9ydCBkZWZpbmVFbGVtZW50TmFtZSBmcm9tICcuLi9jb21tb24vZnVuY3Rpb25zL2RlZmluZS1lbGVtZW50LW5hbWUnO1xuXG5pbXBvcnQgQ3NzU3R5bGVTaGVldCBmcm9tICcuLi9jc3Mtc3R5bGVzaGVldC9jc3Mtc3R5bGVzaGVldCc7XG5cbmltcG9ydCB7IElucHV0VHlwZUVudW0gfSBmcm9tICcuLi9jb21tb24vZW51bXMvaW5wdXQtdHlwZS5lbnVtJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IGV4dGVuZHMgUmF3SFRNTENvbnBvbmVudCBpbXBsZW1lbnRzIENvbXBvbmVudENoYW5nZU9ic2VydmVySW50ZXJmYWNlIHtcbiAgICBwcml2YXRlIHN0YXRpYyBpdGVyYXRvciA9IDA7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGRlZmluZUVsZW1lbnROYW1lKGBpbnB1dCR7SW5wdXQuaXRlcmF0b3IrK31gLCBSYXdIVE1MQ29ucG9uZW50Lmluc3RhbmNlcyk7XG5cbiAgICAgICAgQ3NzU3R5bGVTaGVldC5pbnNlcnRSdWxlKGAuJHtuYW1lfSB7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDNweCAjZGRkO1xuICAgICAgICB9YCk7XG5cbiAgICAgICAgQ3NzU3R5bGVTaGVldC5pbnNlcnRSdWxlKGAuJHtuYW1lfTpob3ZlciB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgIH1gKTtcblxuICAgICAgICBjb25zdCBlbGVtZW50ID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLnRleHQpXG4gICAgICAgICAgICAuc2V0TmFtZShuYW1lKVxuICAgICAgICAgICAgLnNldElkKG5hbWUpXG4gICAgICAgICAgICAuYWRkQ3NzQ2xhc3NOYW1lKG5hbWUpXG4gICAgICAgICAgICAuZHJhZ2dhYmxlKClcbiAgICAgICAgICAgIC5idWlsZCgpO1xuXG4gICAgICAgIHN1cGVyKGVsZW1lbnQpO1xuXG4gICAgICAgIHRoaXMub3BlbkVsZW1lbnRDb25maWdzID0gdGhpcy5vcGVuRWxlbWVudENvbmZpZ3MuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcmFnTGVhdmUgPSB0aGlzLmRyYWdMZWF2ZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuX2RvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5kcmFnU3RhcnRXaXRoVGFyZ2V0SWQpO1xuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIHRoaXMuZHJhZ0xlYXZlKTtcblxuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcGVuRWxlbWVudENvbmZpZ3MpO1xuICAgIH1cblxuICAgIGdldCBkb21FbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZG9tRWxlbWVudDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb3BlbkVsZW1lbnRDb25maWdzKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLnNlbGVjdG9yVmFsdWUoKTtcbiAgICAgICAgdGhpcy5idWlsZEVsZW1lbnRDb25maWdzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbXBvbmVudFNlbGVjdGVkKGNvbXBvbmVudCkge1xuICAgICAgICBpZihjb21wb25lbnQgPT09IHRoaXMuX2RvbUVsZW1lbnRbJ25hbWUnXSkge1xuICAgICAgICAgICAgdGhpcy5idWlsZEVsZW1lbnRDb25maWdzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGJ1aWxkRWxlbWVudENvbmZpZ3MoKSB7XG4gICAgICAgIHRoaXMuaW5zZXJ0Q29tcG9uZW50QWZ0ZXIoJ2FkZElucHV0VHlwZVNlbGVjdG9yQ29tcG9uZW50JywgJ2FkZENsYXNzTmFtZURlZmluaXRpb25Db21wb25lbnQnKTtcbiAgICAgICAgdGhpcy5idWlsZEVsZW1lbnRzKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudENoYW5nZU9ic2VydmVySW50ZXJmYWNlIGZyb20gJy4uL2NvbW1vbi9pbnRlcmZhY2VzL2NvbXBvbmVudC1jaGFuZ2Utb2JzZXJ2ZXIuaW50ZXJmYWNlJztcblxuaW1wb3J0IExhYmVsQnVpbGRlciBmcm9tICcuLi9jb21tb24vbW9kZWxzL0xhYmVsQnVpbGRlcic7XG5pbXBvcnQgUmF3SFRNTENvbnBvbmVudCBmcm9tICcuL1Jhd0hUTUxDb21wb25lbnQnO1xuXG5pbXBvcnQgQ3NzU3R5bGVTaGVldCBmcm9tICcuLi9jc3Mtc3R5bGVzaGVldC9jc3Mtc3R5bGVzaGVldCc7XG5cbmltcG9ydCBkZWZpbmVFbGVtZW50TmFtZSBmcm9tICcuLi9jb21tb24vZnVuY3Rpb25zL2RlZmluZS1lbGVtZW50LW5hbWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYWJlbCBleHRlbmRzIFJhd0hUTUxDb25wb25lbnQgaW1wbGVtZW50cyBDb21wb25lbnRDaGFuZ2VPYnNlcnZlckludGVyZmFjZSB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaXRlcmF0b3IgPSAwO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBkZWZpbmVFbGVtZW50TmFtZShgbGFiZWwke0xhYmVsLml0ZXJhdG9yKyt9YCwgUmF3SFRNTENvbnBvbmVudC5pbnN0YW5jZXMpO1xuXG4gICAgICAgIENzc1N0eWxlU2hlZXQuaW5zZXJ0UnVsZShgLiR7bmFtZX0ge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lXG4gICAgICAgIH1gKTtcblxuICAgICAgICBjb25zdCBlbGVtZW50ID0gbmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0TmFtZShuYW1lKVxuICAgICAgICAgICAgLnNldElkKG5hbWUpXG4gICAgICAgICAgICAuYWRkQ3NzQ2xhc3NOYW1lKG5hbWUpXG4gICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdOZXcgTGFiZWwnKVxuICAgICAgICAgICAgLmRyYWdnYWJsZSgpXG4gICAgICAgICAgICAuYnVpbGQoKTtcblxuICAgICAgICBzdXBlcihlbGVtZW50KTtcblxuICAgICAgICB0aGlzLm9wZW5FbGVtZW50Q29uZmlncyA9IHRoaXMub3BlbkVsZW1lbnRDb25maWdzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhZ0xlYXZlID0gdGhpcy5kcmFnTGVhdmUuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuZHJhZ1N0YXJ0V2l0aFRhcmdldElkKTtcbiAgICAgICAgdGhpcy5fZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCB0aGlzLmRyYWdMZWF2ZSk7XG5cbiAgICAgICAgdGhpcy5fZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3BlbkVsZW1lbnRDb25maWdzKTtcbiAgICB9XG5cbiAgICBnZXQgZG9tRWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RvbUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9wZW5FbGVtZW50Q29uZmlncyhldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5zZWxlY3RvclZhbHVlKCk7XG5cblxuICAgICAgICB0aGlzLmJ1aWxkRWxlbWVudENvbmZpZ3MoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29tcG9uZW50U2VsZWN0ZWQoY29tcG9uZW50KSB7XG4gICAgICAgIGlmKGNvbXBvbmVudCA9PT0gdGhpcy5fZG9tRWxlbWVudFsnbmFtZSddKSB7XG4gICAgICAgICAgICB0aGlzLmJ1aWxkRWxlbWVudENvbmZpZ3MoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgYnVpbGRFbGVtZW50Q29uZmlncygpIHtcbiAgICAgICAgdGhpcy5pbnNlcnRDb21wb25lbnRBZnRlcignYWRkSW5uZXJUZXh0Q2hhbmdlQ29tcG9uZW50JywgJ2FkZENsYXNzTmFtZURlZmluaXRpb25Db21wb25lbnQnKTtcbiAgICAgICAgLy8gdGhpcy5pbnNlcnRDb21wb25lbnRCZWZvcmUoJ2FkZERpc3BsYXlBc1BhcmVudENvbXBvbmVudCcsICdhZGREaXNwbGF5QXNDaGlsZENvbXBvbmVudCcpO1xuICAgICAgICB0aGlzLmJ1aWxkRWxlbWVudHMoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ2xhc3NDaGFuZ2VQdWJsaXNoZXIgZnJvbSAnLi4vY29tbW9uL3B1Ymxpc2hlcnMvQ2xhc3NDaGFuZ2VQdWJsaXNoZXInO1xuaW1wb3J0IENvbXBvbmVudENoYW5nZU9ic2VydmVySW50ZXJmYWNlIGZyb20gJy4uL2NvbW1vbi9pbnRlcmZhY2VzL2NvbXBvbmVudC1jaGFuZ2Utb2JzZXJ2ZXIuaW50ZXJmYWNlJztcblxuaW1wb3J0IEJ1dHRvbkJ1aWxkZXIgZnJvbSAnLi4vY29tbW9uL21vZGVscy9CdXR0b25CdWlsZGVyJztcbmltcG9ydCBMYWJlbEJ1aWxkZXIgZnJvbSAnLi4vY29tbW9uL21vZGVscy9MYWJlbEJ1aWxkZXInO1xuaW1wb3J0IENvbnRhaW5lckJ1aWxkZXIgZnJvbSAnLi4vY29tbW9uL21vZGVscy9Db250YWluZXJCdWlsZGVyJztcbmltcG9ydCBTdHlsZXNDb21wb25lbnRzQnVpbGRlciBmcm9tICcuLi9jb21tb24vbW9kZWxzL1N0eWxlc0NvbXBvbmVudHNCdWlsZGVyJztcblxuaW1wb3J0IGNvbnRhbnRzIGZyb20gJy4uL2NvbW1vbi9jb25zdGFudHMvY29uc3RhbnRzJztcblxuaW1wb3J0IHsgSW5wdXRUeXBlRW51bSB9IGZyb20gJy4uL2NvbW1vbi9lbnVtcy9pbnB1dC10eXBlLmVudW0nO1xuaW1wb3J0IHsgU3R5bGVOYW1lRW51bSB9IGZyb20gJy4uL2NvbW1vbi9lbnVtcy9zdHlsZS1uYW1lLmVudW0nO1xuaW1wb3J0IHsgRGlzcGxheVR5cGVzRW51bSB9IGZyb20gJy4uL2NvbW1vbi9lbnVtcy9kaXNwbGF5LXR5cGVzLmVudW0nO1xuXG5pbXBvcnQgRGlzcGxheUFzUGFyZW50Q29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnRzL2Rpc3BsYXktYXMtcGFyZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgR2VuZXJpY1ByaW1hcnlJbnB1dENvbXBvbmVudCBmcm9tICcuLi9jb21tb24vY29tcG9uZW50cy9nZW5lcmljLXByaW1hcnktaW5wdXQuY29tcG9uZW50JztcbmltcG9ydCBHZW5lcmljUHJpbWFyeVNlbGVjdG9yQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnRzL2dlbmVyaWMtcHJpbWFyeS1zZWxlY3Rvci5jb21wb25lbnQnO1xuaW1wb3J0IElkRGVmaW5pdGlvbkNvbXBvbmVudCBmcm9tICcuLi9jb21tb24vY29tcG9uZW50cy9pZC1kZWZpbml0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgTWFyZ2luT3JQYWRkaW5nQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnRzL21hcmdpbi1vci1wYWRkaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgRGlzcGxheUFzQ2hpbGRDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudHMvZGlzcGxheS1hcy1jaGlsZC5jb21wb25lbnQnO1xuaW1wb3J0IEJvcmRlckNvbXBvbmVudCBmcm9tICcuLi9jb21tb24vY29tcG9uZW50cy9ib3JkZXIuY29tcG9uZW50JztcbmltcG9ydCBCYWNrZ3JvdW5kQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnRzL2JhY2tncm91bmQuY29tcG9uZW50JztcbmltcG9ydCBCb3hTaGFkb3dDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudHMvYm94LXNoYWRvdy5jb21wb25lbnQnO1xuaW1wb3J0IENsYXNzTWFuYWdlbWVudENvbXBvbmVudCBmcm9tICcuLi9jb21tb24vY29tcG9uZW50cy9jbGFzcy1tYW5hZ2VtZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgU2l6ZXNDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudHMvc2l6ZXMuY29tcG9uZW50JztcbmltcG9ydCBGb250Q29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnRzL2ZvbnQuY29tcG9uZW50cyc7XG5pbXBvcnQgVXJsRGVmaW5pdGlvbkNvbXBvbmVudCBmcm9tICcuLi9jb21tb24vY29tcG9uZW50cy91cmwtZGVmaW5pdGlvbi1jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBSYXdIVE1MQ29ucG9uZW50IGltcGxlbWVudHMgQ29tcG9uZW50Q2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2Uge1xuICAgIHByb3RlY3RlZCBfZG9tRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gICAgcHJvdGVjdGVkIHN0eWxlc0NvbXBvbmVudHM6IFN0eWxlc0NvbXBvbmVudHNCdWlsZGVyO1xuXG4gICAgcHVibGljIHN0YXRpYyBpbnN0YW5jZXM6IEhUTUxFbGVtZW50W10gPSBbXTtcblxuICAgIHByb3RlY3RlZCBjbGFzc0NoYW5nZVB1Ymxpc2hlcjogQ2xhc3NDaGFuZ2VQdWJsaXNoZXI7XG5cbiAgICBwcm90ZWN0ZWQgaXRlbXNTZWxlY3RvcjogSFRNTFNlbGVjdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0LWl0ZW0nKTtcbiAgICBwcml2YXRlIG9wdGlvbkVsZW1lbnQ6IEhUTUxPcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5cbiAgICBjb25zdHJ1Y3Rvcihkb21FbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgICAgICB0aGlzLl9kb21FbGVtZW50ID0gZG9tRWxlbWVudFxuXG4gICAgICAgIFJhd0hUTUxDb25wb25lbnQuaW5zdGFuY2VzLnB1c2godGhpcy5fZG9tRWxlbWVudCk7XG5cbiAgICAgICAgdGhpcy5jbGFzc0NoYW5nZVB1Ymxpc2hlciA9IG5ldyBDbGFzc0NoYW5nZVB1Ymxpc2hlcigpO1xuXG4gICAgICAgIHRoaXMub3B0aW9uRWxlbWVudC52YWx1ZSA9IHRoaXMuZG9tRWxlbWVudC5pZDtcbiAgICAgICAgdGhpcy5vcHRpb25FbGVtZW50LnRleHQgPSB0aGlzLmRvbUVsZW1lbnQuaWQ7XG4gICAgICAgIHRoaXMuaXRlbXNTZWxlY3Rvci5hcHBlbmRDaGlsZCh0aGlzLm9wdGlvbkVsZW1lbnQpO1xuXG4gICAgICAgIHRoaXMucmVtb3ZlRWxlbWVudCA9IHRoaXMucmVtb3ZlRWxlbWVudC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGdldCBkb21FbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZG9tRWxlbWVudDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZHJhZ1N0YXJ0V2l0aFRhcmdldElkKGV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQvcGxhaW4nLCAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5pZCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFkZElkRGVmaW5pdGlvbkNvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBJZERlZmluaXRpb25Db21wb25lbnQodGhpcy5fZG9tRWxlbWVudCkuY29tcG9uZW50O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhZGRDbGFzc05hbWVEZWZpbml0aW9uQ29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gbmV3IENsYXNzTWFuYWdlbWVudENvbXBvbmVudCh0aGlzLl9kb21FbGVtZW50LCB0aGlzLmNsYXNzQ2hhbmdlUHVibGlzaGVyKS5jb21wb25lbnQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFkZE1hcmdpblN0eWxlQ29tcG9uZW50KCkge1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgTWFyZ2luT3JQYWRkaW5nQ29tcG9uZW50KHRoaXMuX2RvbUVsZW1lbnQsIFN0eWxlTmFtZUVudW0ubWFyZ2luKTtcbiAgICAgICAgdGhpcy5jbGFzc0NoYW5nZVB1Ymxpc2hlci5hdHRhY2goY29tcG9uZW50KTtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5jb21wb25lbnQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFkZFBhZGRpbmdTdHlsZUNvbXBvbmVudCgpIHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbmV3IE1hcmdpbk9yUGFkZGluZ0NvbXBvbmVudCh0aGlzLl9kb21FbGVtZW50LCBTdHlsZU5hbWVFbnVtLnBhZGRpbmcpO1xuICAgICAgICB0aGlzLmNsYXNzQ2hhbmdlUHVibGlzaGVyLmF0dGFjaChjb21wb25lbnQpO1xuICAgICAgICByZXR1cm4gY29tcG9uZW50LmNvbXBvbmVudDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYWRkSW5uZXJUZXh0Q2hhbmdlQ29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gbmV3IEdlbmVyaWNQcmltYXJ5SW5wdXRDb21wb25lbnQodGhpcy5fZG9tRWxlbWVudCwgJ2lubmVyVGV4dCcsICdJbm5lciBUZXh0JykuY29tcG9uZW50O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhZGRJbnB1dFR5cGVTZWxlY3RvckNvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBHZW5lcmljUHJpbWFyeVNlbGVjdG9yQ29tcG9uZW50KFxuICAgICAgICAgICAgdGhpcy5fZG9tRWxlbWVudCxcbiAgICAgICAgICAgICd0eXBlJyxcbiAgICAgICAgICAgICdJbnB1dCBUeXBlIFNlbGVjdG9yJyxcbiAgICAgICAgICAgIElucHV0VHlwZUVudW1cbiAgICAgICAgKS5jb21wb25lbnQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFkZExhYmVsQ29tcG9uZW50KGxhYmVsOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldElubmVyVGV4dChsYWJlbClcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFkZERpc3BsYXlBc1BhcmVudENvbXBvbmVudCgpIHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbmV3IERpc3BsYXlBc1BhcmVudENvbXBvbmVudCh0aGlzLl9kb21FbGVtZW50KTtcbiAgICAgICAgdGhpcy5jbGFzc0NoYW5nZVB1Ymxpc2hlci5hdHRhY2goY29tcG9uZW50KTtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5jb21wb25lbnQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFkZERpc3BsYXlBc0NoaWxkQ29tcG9uZW50KCkge1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgRGlzcGxheUFzQ2hpbGRDb21wb25lbnQodGhpcy5fZG9tRWxlbWVudCk7XG4gICAgICAgIHRoaXMuY2xhc3NDaGFuZ2VQdWJsaXNoZXIuYXR0YWNoKGNvbXBvbmVudCk7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQuY29tcG9uZW50O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhZGRCb3JkZXJTZXR0aW5nc0NvbXBvbmVudCgpIHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbmV3IEJvcmRlckNvbXBvbmVudCh0aGlzLl9kb21FbGVtZW50KTtcbiAgICAgICAgdGhpcy5jbGFzc0NoYW5nZVB1Ymxpc2hlci5hdHRhY2goY29tcG9uZW50KTtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5jb21wb25lbnQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFkZEJhY2tncm91bmRTZXR0aW5nc0NvbXBvbmVudCgpIHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbmV3IEJhY2tncm91bmRDb21wb25lbnQodGhpcy5fZG9tRWxlbWVudCk7XG4gICAgICAgIHRoaXMuY2xhc3NDaGFuZ2VQdWJsaXNoZXIuYXR0YWNoKGNvbXBvbmVudCk7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQuY29tcG9uZW50O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhZGRCb3hTaGFkb3dDb21wb25lbnQoKSB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBCb3hTaGFkb3dDb21wb25lbnQodGhpcy5fZG9tRWxlbWVudCk7XG4gICAgICAgIHRoaXMuY2xhc3NDaGFuZ2VQdWJsaXNoZXIuYXR0YWNoKGNvbXBvbmVudCk7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQuY29tcG9uZW50O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhZGRTaXplQ29tcG9uZW50cygpIHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbmV3IFNpemVzQ29tcG9uZW50KHRoaXMuX2RvbUVsZW1lbnQpO1xuICAgICAgICB0aGlzLmNsYXNzQ2hhbmdlUHVibGlzaGVyLmF0dGFjaChjb21wb25lbnQpO1xuICAgICAgICByZXR1cm4gY29tcG9uZW50LmNvbXBvbmVudDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYWRkRm9udENvbXBvbmVucygpIHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbmV3IEZvbnRDb21wb25lbnQodGhpcy5fZG9tRWxlbWVudCk7XG4gICAgICAgIHRoaXMuY2xhc3NDaGFuZ2VQdWJsaXNoZXIuYXR0YWNoKGNvbXBvbmVudCk7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQuY29tcG9uZW50O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhZGRVcmxJbnB1dENvbXBvbmVudCgpIHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbmV3IFVybERlZmluaXRpb25Db21wb25lbnQodGhpcy5fZG9tRWxlbWVudCk7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQuY29tcG9uZW50O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhZGRBY3Rpb25zQ29tcG9uZW50cygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmJvcmRlciwgJzFweCBzb2xpZCAjNENBRjUwJylcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLnBhZGRpbmcsICczcHgnKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdBdmFpbGFibGUgQWN0aW9ucycpXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmFkZFJlbW92ZUVsZW1lbnRDb21wb25lbnQoKSlcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZFJlbW92ZUVsZW1lbnRDb21wb25lbnQoKSB7XG4gICAgICAgIHJldHVybiBuZXcgQnV0dG9uQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdSZW1vdmUgRWxlbWVudCcpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJlbW92ZUVsZW1lbnQpXG4gICAgICAgICAgICAuYnVpbGQoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVtb3ZlRWxlbWVudCgpIHtcbiAgICAgICAgaWYgKGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB0byByZW1vdmUgdGhpcyBjb21wb25lbnQnKSkge1xuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5fZG9tRWxlbWVudC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHRoaXMuX2RvbUVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpcy5zdHlsZXNDb21wb25lbnRzLnJlbW92ZSgpO1xuICAgICAgICAgICAgdGhpcy5pdGVtc1NlbGVjdG9yLnJlbW92ZUNoaWxkKHRoaXMub3B0aW9uRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZHJhZ0xlYXZlKGV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGlmICh0aGlzLl9kb21FbGVtZW50LnBhcmVudEVsZW1lbnQudGFnTmFtZSA9PT0gJ0RJVicpIHtcbiAgICAgICAgICAgIHRoaXMuX2RvbUVsZW1lbnQucGFyZW50RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb250YW50cy5JTlZFUlRFRF9CQUNLR1JPVU5EX0NPTE9SO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNlbGVjdG9yVmFsdWUoKSB7XG4gICAgICAgIGxldCB0aGlzT3B0aW9uSW5kZXg6IG51bWJlcjtcbiAgICAgICAgdGhpcy5pdGVtc1NlbGVjdG9yLmNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAoY2hpbGQgYXMgSFRNTE9wdGlvbkVsZW1lbnQpLnZhbHVlID09PSB0aGlzLmRvbUVsZW1lbnQuaWQgPyB0aGlzT3B0aW9uSW5kZXggPSBpbmRleCA6IHVuZGVmaW5lZFxuICAgICAgICB9KVxuICAgICAgICB0aGlzLml0ZW1zU2VsZWN0b3Iuc2VsZWN0ZWRJbmRleCA9IHRoaXNPcHRpb25JbmRleDtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29tcG9uZW50U2VsZWN0ZWQoY29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY29tbW9uQ29tcG9uZW50czogc3RyaW5nW10gPSBbXG4gICAgICAgICdhZGRJZERlZmluaXRpb25Db21wb25lbnQnLFxuICAgICAgICAnYWRkQ2xhc3NOYW1lRGVmaW5pdGlvbkNvbXBvbmVudCcsXG4gICAgICAgICdhZGRNYXJnaW5TdHlsZUNvbXBvbmVudCcsXG4gICAgICAgICdhZGRQYWRkaW5nU3R5bGVDb21wb25lbnQnLFxuICAgICAgICAnYWRkU2l6ZUNvbXBvbmVudHMnLFxuICAgICAgICAnYWRkRm9udENvbXBvbmVucycsXG4gICAgICAgICdhZGRCYWNrZ3JvdW5kU2V0dGluZ3NDb21wb25lbnQnLFxuICAgICAgICAnYWRkQm9yZGVyU2V0dGluZ3NDb21wb25lbnQnLFxuICAgICAgICAnYWRkQm94U2hhZG93Q29tcG9uZW50JyxcbiAgICAgICAgJ2FkZERpc3BsYXlBc0NoaWxkQ29tcG9uZW50JyxcbiAgICAgICAgJ2FkZEFjdGlvbnNDb21wb25lbnRzJyxcbiAgICBdXG5cbiAgICBwcm90ZWN0ZWQgaW5zZXJ0Q29tcG9uZW50QmVmb3JlKFxuICAgICAgICBjb21wb25lbnRUb0luc2VydDogc3RyaW5nLFxuICAgICAgICByZWZlcmVuY2VDb21wb25lbnQ6IHN0cmluZ1xuICAgICkge1xuICAgICAgICBjb25zdCBhbHJlYWR5RXhpc3RzID0gdGhpcy5jb21tb25Db21wb25lbnRzLmZpbmQoKGNvbXApID0+IGNvbXAgPT09IGNvbXBvbmVudFRvSW5zZXJ0KTtcblxuICAgICAgICBpZihhbHJlYWR5RXhpc3RzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuY29tbW9uQ29tcG9uZW50cy5maW5kSW5kZXgoKGNvbXApID0+IGNvbXAgPT09IHJlZmVyZW5jZUNvbXBvbmVudCk7XG5cbiAgICAgICAgdGhpcy5jb21tb25Db21wb25lbnRzLnNwbGljZShpbmRleCwgMCwgY29tcG9uZW50VG9JbnNlcnQpXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGluc2VydENvbXBvbmVudEFmdGVyKFxuICAgICAgICBjb21wb25lbnRUb0luc2VydDogc3RyaW5nLFxuICAgICAgICByZWZlcmVuY2VDb21wb25lbnQ6IHN0cmluZ1xuICAgICkge1xuICAgICAgICBjb25zdCBhbHJlYWR5RXhpc3RzID0gdGhpcy5jb21tb25Db21wb25lbnRzLmZpbmQoKGNvbXApID0+IGNvbXAgPT09IGNvbXBvbmVudFRvSW5zZXJ0KTtcblxuICAgICAgICBpZihhbHJlYWR5RXhpc3RzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuY29tbW9uQ29tcG9uZW50cy5maW5kSW5kZXgoKGNvbXApID0+IGNvbXAgPT09IHJlZmVyZW5jZUNvbXBvbmVudCk7XG4gICAgICAgIHRoaXMuY29tbW9uQ29tcG9uZW50cy5zcGxpY2UoaW5kZXggKyAxLCAwLCBjb21wb25lbnRUb0luc2VydClcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYnVpbGRFbGVtZW50cygpIHtcbiAgICAgICAgdGhpcy5zdHlsZXNDb21wb25lbnRzID0gbmV3IFN0eWxlc0NvbXBvbmVudHNCdWlsZGVyKClcblxuICAgICAgICB0aGlzLmNvbW1vbkNvbXBvbmVudHMuZm9yRWFjaCgoY29tcG9uZW50TmFtZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdHlsZXNDb21wb25lbnRzLmFwcGVuZENoaWxkKHRoaXNbY29tcG9uZW50TmFtZV0oKSlcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnN0eWxlc0NvbXBvbmVudHMuYnVpbGQoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50Q2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2UgZnJvbSAnLi4vY29tbW9uL2ludGVyZmFjZXMvY29tcG9uZW50LWNoYW5nZS1vYnNlcnZlci5pbnRlcmZhY2UnO1xuXG5pbXBvcnQgVGl0bGVCdWlsZGVyIGZyb20gJy4uL2NvbW1vbi9tb2RlbHMvVGl0bGVCdWlsZGVyJztcbmltcG9ydCBSYXdIVE1MQ29ucG9uZW50IGZyb20gJy4vUmF3SFRNTENvbXBvbmVudCc7XG5cbmltcG9ydCBDc3NTdHlsZVNoZWV0IGZyb20gJy4uL2Nzcy1zdHlsZXNoZWV0L2Nzcy1zdHlsZXNoZWV0JztcblxuaW1wb3J0IGRlZmluZUVsZW1lbnROYW1lIGZyb20gJy4uL2NvbW1vbi9mdW5jdGlvbnMvZGVmaW5lLWVsZW1lbnQtbmFtZSc7XG5cbmltcG9ydCB7IFRpdGxlVHlwZXNFbnVtIH0gZnJvbSAnLi4vY29tbW9uL2VudW1zL3RpdGxlLnR5cGVzLmVudW0nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaXRsZSBleHRlbmRzIFJhd0hUTUxDb25wb25lbnQgaW1wbGVtZW50cyBDb21wb25lbnRDaGFuZ2VPYnNlcnZlckludGVyZmFjZSB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaXRlcmF0b3IgPSAwO1xuXG4gICAgY29uc3RydWN0b3IodHlwZTogVGl0bGVUeXBlc0VudW0pIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGRlZmluZUVsZW1lbnROYW1lKGB0aXRsZSR7VGl0bGUuaXRlcmF0b3IrK31gLCBSYXdIVE1MQ29ucG9uZW50Lmluc3RhbmNlcyk7XG5cbiAgICAgICAgQ3NzU3R5bGVTaGVldC5pbnNlcnRSdWxlKGAuJHtuYW1lfSB7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lXG4gICAgICAgIH1gKTtcblxuICAgICAgICBjb25zdCBlbGVtZW50ID0gbmV3IFRpdGxlQnVpbGRlcih0eXBlKVxuICAgICAgICAgICAgLnNldE5hbWUobmFtZSlcbiAgICAgICAgICAgIC5zZXRJZChuYW1lKVxuICAgICAgICAgICAgLmFkZENzc0NsYXNzTmFtZShuYW1lKVxuICAgICAgICAgICAgLnNldElubmVyVGV4dChgTmV3IFRpdGxlICR7dHlwZX1gKVxuICAgICAgICAgICAgLmRyYWdnYWJsZSgpXG4gICAgICAgICAgICAuYnVpbGQoKTtcblxuICAgICAgICBzdXBlcihlbGVtZW50KTtcblxuICAgICAgICB0aGlzLm9wZW5FbGVtZW50Q29uZmlncyA9IHRoaXMub3BlbkVsZW1lbnRDb25maWdzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhZ0xlYXZlID0gdGhpcy5kcmFnTGVhdmUuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuZHJhZ1N0YXJ0V2l0aFRhcmdldElkKTtcbiAgICAgICAgdGhpcy5fZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCB0aGlzLmRyYWdMZWF2ZSk7XG5cbiAgICAgICAgdGhpcy5fZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3BlbkVsZW1lbnRDb25maWdzKTtcbiAgICB9XG5cbiAgICBnZXQgZG9tRWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RvbUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9wZW5FbGVtZW50Q29uZmlncyhldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5zZWxlY3RvclZhbHVlKCk7XG5cblxuICAgICAgICB0aGlzLmJ1aWxkRWxlbWVudENvbmZpZ3MoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29tcG9uZW50U2VsZWN0ZWQoY29tcG9uZW50KSB7XG4gICAgICAgIGlmKGNvbXBvbmVudCA9PT0gdGhpcy5fZG9tRWxlbWVudFsnbmFtZSddKSB7XG4gICAgICAgICAgICB0aGlzLmJ1aWxkRWxlbWVudENvbmZpZ3MoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgYnVpbGRFbGVtZW50Q29uZmlncygpIHtcbiAgICAgICAgdGhpcy5pbnNlcnRDb21wb25lbnRBZnRlcignYWRkSW5uZXJUZXh0Q2hhbmdlQ29tcG9uZW50JywgJ2FkZENsYXNzTmFtZURlZmluaXRpb25Db21wb25lbnQnKTtcbiAgICAgICAgdGhpcy5idWlsZEVsZW1lbnRzKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFJhd0hUTUxDb25wb25lbnQgZnJvbSAnLi9SYXdIVE1MQ29tcG9uZW50JztcblxuaW1wb3J0IHsgVGl0bGVUeXBlc0VudW0gfSBmcm9tICcuLi9jb21tb24vZW51bXMvdGl0bGUudHlwZXMuZW51bSc7XG5cbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nO1xuaW1wb3J0IElucHV0IGZyb20gJy4vSW5wdXQnO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuL0NvbnRhaW5lcic7XG5pbXBvcnQgTGFiZWwgZnJvbSAnLi9MYWJlbCc7XG5pbXBvcnQgVGl0bGUgZnJvbSAnLi9UaXRsZSc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi9JbWFnZSc7XG5cbmZ1bmN0aW9uIGNvbXBvbmVudHNJbmRleChpbmRleCkge1xuICAgIGNvbnN0IGNvbXBvbmVudHNJbmRleCA9IHtcbiAgICAgICAgJ0JVVFRPTic6ICgpIDogUmF3SFRNTENvbnBvbmVudCA9PiBuZXcgQnV0dG9uKCksXG4gICAgICAgICdJTlBVVCc6ICgpIDogUmF3SFRNTENvbnBvbmVudCA9PiBuZXcgSW5wdXQoKSxcbiAgICAgICAgJ0RJVic6ICgpIDogUmF3SFRNTENvbnBvbmVudCA9PiBuZXcgQ29udGFpbmVyKCksXG4gICAgICAgICdMQUJFTCc6ICgpIDogUmF3SFRNTENvbnBvbmVudCA9PiBuZXcgTGFiZWwoKSxcbiAgICAgICAgJ0gxJzogKCkgOiBSYXdIVE1MQ29ucG9uZW50ID0+IG5ldyBUaXRsZShUaXRsZVR5cGVzRW51bS5IMSksXG4gICAgICAgICdIMic6ICgpIDogUmF3SFRNTENvbnBvbmVudCA9PiBuZXcgVGl0bGUoVGl0bGVUeXBlc0VudW0uSDIpLFxuICAgICAgICAnSDMnOiAoKSA6IFJhd0hUTUxDb25wb25lbnQgPT4gbmV3IFRpdGxlKFRpdGxlVHlwZXNFbnVtLkgzKSxcbiAgICAgICAgJ0g0JzogKCkgOiBSYXdIVE1MQ29ucG9uZW50ID0+IG5ldyBUaXRsZShUaXRsZVR5cGVzRW51bS5INCksXG4gICAgICAgICdINSc6ICgpIDogUmF3SFRNTENvbnBvbmVudCA9PiBuZXcgVGl0bGUoVGl0bGVUeXBlc0VudW0uSDUpLFxuICAgICAgICAnSDYnOiAoKSA6IFJhd0hUTUxDb25wb25lbnQgPT4gbmV3IFRpdGxlKFRpdGxlVHlwZXNFbnVtLkg2KSxcbiAgICAgICAgJ0lNRyc6ICgpIDogUmF3SFRNTENvbnBvbmVudCA9PiBuZXcgSW1hZ2UoKSxcbiAgICAgICAgJ2RlZmF1bHQnOiAoKSA6IHVuZGVmaW5lZCAgPT4gdW5kZWZpbmVkLFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRzSW5kZXhbaW5kZXhdIHx8IGNvbXBvbmVudHNJbmRleFsnZGVmYXVsdCddO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnRzSW5kZXg7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBpbml0RHJhZ2dhYmxlQ29tcG9uZW50cyBmcm9tICcuL2NvbXBvbmVudHMvY29tcG9uZW50cy1jb250YWluZXIvaW5pdC1kcmFnZ2FibGUtY29tcG9uZW50cyc7XG5pbXBvcnQgQ3NzU3R5bGVTaGVldCBmcm9tICcuL2NvbXBvbmVudHMvY3NzLXN0eWxlc2hlZXQvY3NzLXN0eWxlc2hlZXQnO1xuaW1wb3J0IEluaXRBcHBDb250YWluZXIgZnJvbSAnLi9jb21wb25lbnRzL2FwcC1jb250YWluZXIvaW5pdC1hcHAtY29udGFpbmVyJztcblxuaW5pdERyYWdnYWJsZUNvbXBvbmVudHMoKTtcbm5ldyBJbml0QXBwQ29udGFpbmVyKCk7XG5Dc3NTdHlsZVNoZWV0LmluaXQoKTtcblxuLy8gVE9ETzogZWwgbWV0b2RvIGluaXQgZGViZXJpYSBidXNjYXIgZWwgY3NzIGRlbCBsb2NhbHN0b3JhZ2UsIGRlYmVyaWFtb3MgaGFjZXIgbG8gbWlzbW8gY29uIGVsIEhUTUxcbi8vIERlYmVyaWFtb3MgdmVyIGNvbW8gYWxtYWNlbmFyIHkgZGVzaGFjZXIgY2FtYmlvcy4uLi5cblxuLy8gVE9ETzogYWNvbW9kYXIgZXN0cnVjdHVyYXMgY29uIHByZXR0aWVyIHkgdHNsaW50ZXIuIFNhbHRhciBsaW5lYSBjdWFuZG8gbXV5IGxhcmdhLlxuXG4vLyBUT0RPOiBoYXkgcXVlIG1ldGVybGUgZHJhZyBlbnRlciBhbCBhcHAtY29udGFpbmVyLWZpeGVkIHBhcmEgcXVlIGxlIHNhcXVlIGVsIGJhY2tncm91bmQgY29sb3IgYWwgYXBwLWNvbnRhaW5lci4uLlxuLy8gbyB2ZXIgcXVlIHBhc2EgY29uIGVsIGRyYWcgbGVhdmVcblxuLy8gVE9ETzogaW5zZXJ0YXIgcnVsZXMgcGFyYSBlbCBtZWRpYSBxdWVyeSA6IGh0dHBzOi8vZGF2aWR3YWxzaC5uYW1lL2FkZC1ydWxlcy1zdHlsZXNoZWV0c1xuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL0F0LXJ1bGVcblxuLy8gVE9ETzogcHJvYmFyIGV4cG9ydGFyIGNzcyB5IGh0bWwgeSB2ZXIgY29tbyBxdWVkYSBsYSBwYWdpbmEgZW4gbGEgcmVhbGlkYWQgKi9cbi8vIFRPRE86IGhhY2VyIGFuYWxpc2lzIGRlIHF1ZSBkZWJlcmlhbW9zIGV4cG9ydGFyIHJlYWxtZW50ZSBkZWwgaHRtbCAqL1xuXG4vLyBUT0RPOiBhcXVpIGZhbHRhIGxhIGFjY2lvbiBkZSBkdXBsaWNhciB1biBjb21wb25lbnRlLCBlcyBkZWNpciwgZGUgdW4gY29tcG9uZW50ZSBleGlzdGVudGUsIGR1cGxpY2FyIGxhIGNvbmZpZy4uLlxuLy8gc2ksIGVzIG5lY2VzYXJpbywgcG9ycXVlIGVzIG11Y2hvIG1hcyBmYWNpbCBxdWUgYXNpZ25hcmxlIGxhIGNsYXNlIGRlIG90cm8gY29tcG9uZW50ZS4uLlxuLy8gdmVyIGNvbW8gZHVwbGljYW1vcyBsYXMgY2xhc2VzLi4uIHNpIGxlIGFzaWduYW1vcyBsYXMgY2xhc2VzIGRlbCBvdHJvIGNvbXBvbmVudGU/Pz8sIGNvbW8gaGFjZW1vcyBjb24gc3UgY2xhc2U/Pz9cbi8vIHNpIGR1cGxpY2Ftb3MsIG5vIGNyZWFtb3MgY2xhc2UgcHJvcGlhLCBzb2xvIGFzaWduYW1vcyBsYXMgY2xhc2VzIGRlbCBvdHJvIGNvbXBvbmVudGUuLi5cblxuLy8gQWdyZWdhciBlbCBlbGVtZW50byBpbWcgeSBhIHN1IHZleiwgYWdyZWdhciBpbWFnZW5lcyBhbCBiYWNrZ3JvdW5kLi4uXG5cbi8vIFRPRE86IGZhbHRhIHRvZG8gbG8gcXVlIGVzIHBvc2l0aW9uLi4uIEFic29sdXRlLCByZWxhdGl2ZSwgZXRjLi4uIE5vIHJlY3VlcmRvIGJpZW4gY29tbyBlcyBlc28uLi5cbi8vIGluY2x1c28sIGVsIHogaW5kZXgsIHF1ZSBwb2RyaWEgZXN0YXIgZW4gZWwgbWlzbW8gY29tcG9uZW50ZS5cblxuXG4vLyBUT0RPOiB2ZXIgZm9ybWEgZGUgcmVtb3ZlciBlbCBib3JkZSBvcmlnaW5hbCBkZWwgaW5wdXQuIE5vIGVzIGxhIG1pc21hIHByb3BpZWRhZCBxdWUgZWwgYm9yZGVyLi4uXG4vLyBUT0RPOiBlbCBib3JkZXJib3ggZGVsIGlucHV0IHZpZW5lIGNvbW8gYWR2YW5jZWQuLi4gVmVyIHNpIHRlbmVtb3MgcXVlIGhhY2VybGUgYWxnb1xuXG4vLyBUT0RPOiBjdWFuZG8gY3JlbyB1biBub21icmUgZnV0dXJvLCB5IGp1c3RvIGNyZW8gdW4gZWxlbWVudG8gY29uIGVzZSBub21icmUgZnV0dXJvLCB0aXJhIGVycm9yLi4uXG4vLyBwb3IgZXNvIHlvIGxlIHBhc2FiYSBlbCBpdGVyYXRvci4uLiB2ZXIgY29tbyBzb2x1Y2lvbmFyLi4uXG5cbi8vIFRPRE86IGNvbiBlbCBpZCBoYWJyaWEgcXVlIHJlZW1wbGF6YXIgdG9kb3MgbG9zIGNhcmFjdGVyZXMgZXNwZWNpYWxlcyBwb3IgZ3Vpb25lcyBvIGFsZ28gYXNpLi4uXG5cbi8vIFRPRE86IGZhbHRhIHByb3BpZWRhZCBzY3JvbGxhYmxlIGVuIGRpdlxuXG4vLyBUT0RPOiBjdWFscXVpZXIgZWxlbWVudG8gZGViZSBwb2RlciBtb2RpZmljYXIgZWwgZGlzcGxheSBzZXR0aW5nc1xuXG4vLyBUT0RPOiBmYWx0YSBsYSBwcm9waWVkYWQgYmFja2dyb3VuZC1pbWFnZSBlbiBlbCBiYWNrZ3JvdW5kLWNvbG9yXG5cbi8vIFRPRE86IGFncmVnYXIgY2xhc2UgYSBtYW5vIG1lZGlhbnRlIHVuIHRleHRhcmVhXG5cbi8vIFRPRE86IGVuIGVsIFNlbGVjdCBJdGVtIG5vIHNlIGVuY3VlbnRyYSBlbCBhcHAtY29udGFpbmVyLiBFcyBxdWUgcGFyYSBxdWUgZXN0byBmdW5jaW9uZSwgZWwgYXBwLWNvbnRhaW5lciBkZWJlcmlhIHNlciBjcmVhZG8gY29tbyB1biBuZXcgQ29udGFpbmVyKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=