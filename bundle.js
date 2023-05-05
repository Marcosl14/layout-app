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
        this.appContainer.attributes.removeNamedItem('style'); // TODO: algo de esto falla
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
        if (boxShadowString.split(',').filter(function (ele) { return ele.includes('rgb'); }).length > 1) {
            this.advancedEnabled = true;
        }
        else {
            if (boxShadowString.split(',').length > 1) {
                this.advancedEnabled = true;
            }
        }
        var color;
        if (boxShadowString.includes('rgb')) {
            var initialIndexOfRGB = boxShadowString.indexOf('rgb');
            var finalIndexOfRGB = boxShadowString.indexOf(')');
            color = boxShadowString.slice(initialIndexOfRGB, finalIndexOfRGB + 1);
            boxShadowString = boxShadowString.replace(color, '');
        }
        var boxShadowArr = boxShadowString.split(' ');
        var sizesArr = boxShadowArr.filter(function (ele) { return !isNaN(parseInt(ele)); });
        var inset = boxShadowArr.find(function (ele) { return ele === 'inset'; });
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
/* harmony import */ var _enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../enums/style-name.enum */ "./src/components/common/enums/style-name.enum.ts");
/* harmony import */ var _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../enums/display-types.enum */ "./src/components/common/enums/display-types.enum.ts");
/* harmony import */ var _enums_flex_direction_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../enums/flex-direction.enum */ "./src/components/common/enums/flex-direction.enum.ts");
/* harmony import */ var _enums_input_type_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../enums/input-type.enum */ "./src/components/common/enums/input-type.enum.ts");
/* harmony import */ var _enums_general_pseudoclass_enum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../enums/general-pseudoclass.enum */ "./src/components/common/enums/general-pseudoclass.enum.ts");













// TODO: ver estilos especificos para los ancor elements (links):
// eslint-disable-next-line max-len
// https://www.aprenderaprogramar.com/index.php?option=com_content&view=article&id=752:pseudoclases-css-link-visited-focus-hover-y-active-estilos-y-efectos-en-links-propiedad-outline-cu01047d&catid=75&Itemid=203
// TODO: falta el delete class definetly. Es decir, eliminar una clase del CSS.
// Esto deberia eliminarla de todos los componentes que la utilizan...
// TODO: mejorar estilos de los botones, input, etc...
// TODO: el duplicate class tambien deberia tener el newPseudoclassSelector...
var ClassManagementComponent = /** @class */ (function () {
    function ClassManagementComponent(domElement, publisher) {
        this.publisher = publisher;
        this.domElement = domElement;
        this.initialClassName = this.domElement.classList[0];
        this.populateClassesList();
        this.populateAppendableClassList();
        this.populateDuplicableClassList();
        this.addComponents();
    }
    Object.defineProperty(ClassManagementComponent.prototype, "component", {
        get: function () {
            return this.container;
        },
        enumerable: false,
        configurable: true
    });
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
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_9__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum["flex-direction"], _enums_flex_direction_enum__WEBPACK_IMPORTED_MODULE_10__.FlexDirectionEnum.column)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .appendChild(this.classesSelector)
            .appendChild(removeClassButton)
            .build())
            .build();
        // Rename Class
        this.renameClassInput = new _models_InputBuilder__WEBPACK_IMPORTED_MODULE_5__["default"](_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_11__.InputTypeEnum.text)
            .setPlaceholder('New class name')
            .build();
        var renameClassButton = new _models_ButtonBuilder__WEBPACK_IMPORTED_MODULE_6__["default"]()
            .setInnerText('Change')
            .addEventListener('click', this.changeClassName)
            .build();
        var renameClassContainer = new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_9__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum["flex-direction"], _enums_flex_direction_enum__WEBPACK_IMPORTED_MODULE_10__.FlexDirectionEnum.column)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_3__["default"]()
            .setInnerText('Change Class Name')
            .build())
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_9__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum["flex-direction"], _enums_flex_direction_enum__WEBPACK_IMPORTED_MODULE_10__.FlexDirectionEnum.row)
            .appendChild(this.renameClassInput)
            .appendChild(renameClassButton)
            .build())
            .build();
        // Create Class
        this.newClassNameInput = new _models_InputBuilder__WEBPACK_IMPORTED_MODULE_5__["default"](_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_11__.InputTypeEnum.text)
            .setPlaceholder('Class name')
            .build();
        this.newPseudoclassSelector = new _models_SelectorFromEnumBuilder__WEBPACK_IMPORTED_MODULE_7__["default"](_enums_general_pseudoclass_enum__WEBPACK_IMPORTED_MODULE_12__.GeneralPseudoclassEnum)
            .selectOption(_enums_general_pseudoclass_enum__WEBPACK_IMPORTED_MODULE_12__.GeneralPseudoclassEnum.none)
            .build();
        var createClassButton = new _models_ButtonBuilder__WEBPACK_IMPORTED_MODULE_6__["default"]()
            .setInnerText('Create')
            .addEventListener('click', this.createNewClassName)
            .build();
        var newClassContainer = new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_9__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum["flex-direction"], _enums_flex_direction_enum__WEBPACK_IMPORTED_MODULE_10__.FlexDirectionEnum.column)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum.margin, '0px 0px 10px')
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
        this.newDuplicadedClassNameInput = new _models_InputBuilder__WEBPACK_IMPORTED_MODULE_5__["default"](_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_11__.InputTypeEnum.text)
            .setPlaceholder('Duplicated class name')
            .build();
        var duplicateClassButton = new _models_ButtonBuilder__WEBPACK_IMPORTED_MODULE_6__["default"]()
            .setInnerText('Duplicate')
            .addEventListener('click', this.duplicateClass)
            .build();
        this.duplicatePseudoclassSelector = new _models_SelectorFromEnumBuilder__WEBPACK_IMPORTED_MODULE_7__["default"](_enums_general_pseudoclass_enum__WEBPACK_IMPORTED_MODULE_12__.GeneralPseudoclassEnum)
            .selectOption(_enums_general_pseudoclass_enum__WEBPACK_IMPORTED_MODULE_12__.GeneralPseudoclassEnum.none)
            .build();
        var duplicateClassContainer = new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_9__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum["flex-direction"], _enums_flex_direction_enum__WEBPACK_IMPORTED_MODULE_10__.FlexDirectionEnum.column)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_3__["default"]()
            .setInnerText('Duplicate Class')
            .build())
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_9__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum["flex-direction"], _enums_flex_direction_enum__WEBPACK_IMPORTED_MODULE_10__.FlexDirectionEnum.row)
            .appendChild(this.duplicableClassSelector)
            .appendChild(this.duplicatePseudoclassSelector)
            .build())
            .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_9__.DisplayTypesEnum.flex)
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum["flex-direction"], _enums_flex_direction_enum__WEBPACK_IMPORTED_MODULE_10__.FlexDirectionEnum.row)
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
                .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_9__.DisplayTypesEnum.flex)
                .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum["flex-direction"], _enums_flex_direction_enum__WEBPACK_IMPORTED_MODULE_10__.FlexDirectionEnum.column)
                .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_3__["default"]()
                .setInnerText('Append Class')
                .build())
                .appendChild(new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
                .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum.display, _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_9__.DisplayTypesEnum.flex)
                .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum["flex-direction"], _enums_flex_direction_enum__WEBPACK_IMPORTED_MODULE_10__.FlexDirectionEnum.row)
                .appendChild(this.appendClassSelector)
                .appendChild(appendClassButton)
                .build())
                .build();
        }
        // Main container
        this.container = new _models_ContainerBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum.border, '1px solid #4CAF50')
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum.padding, '3px')
            .setStyle(_enums_style_name_enum__WEBPACK_IMPORTED_MODULE_8__.StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new _models_LabelBuilder__WEBPACK_IMPORTED_MODULE_3__["default"]()
            .setInnerText('Classes Management')
            .build())
            .appendChild(this.classesSelectorContainer)
            .appendChild(renameClassContainer)
            .appendChild(newClassContainer)
            .appendChild(duplicateClassContainer)
            .appendChildIfDefined(this.appendClassContainer)
            .build();
    };
    ClassManagementComponent.prototype.updateClassName = function () {
        this.publisher.notifyClassName(this.classesSelector.value);
    };
    ClassManagementComponent.prototype.createNewClassName = function () {
        var className = this.newClassNameInput.value;
        var pseudoclass = this.newPseudoclassSelector.value;
        var completeCssName = this.newClassNameInput.value + (pseudoclass !== '' ? ":".concat(pseudoclass) : '');
        try {
            if (className === '') {
                throw new Error('Class name can not be an empty string');
            }
            if (!isNaN(parseInt(className[0]))) {
                throw new Error('Class name must start with a letter');
            }
            var foundBaseRule = _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_0__["default"].getRuleIndex(className);
            var foundRuleWithPseudoclass = _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_0__["default"].getRuleIndex(completeCssName);
            var classNameNotFoundForThisElement_1 = true;
            this.domElement.classList.forEach(function (cn) {
                if (cn === className) {
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
            this.domElement.classList.add(className);
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
    };
    ClassManagementComponent.prototype.appendClass = function () {
        this.domElement.classList.add(this.appendClassSelector.value);
        this.appendNewOptionElement(this.appendClassSelector.value, this.classesSelector);
        this.appendClassSelector.options.remove(this.appendClassSelector.selectedIndex);
        if (this.appendClassSelector.options.length === 0) {
            this.appendClassContainer.style.display = 'none';
        }
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
        var newClassName = "".concat(this.newDuplicadedClassNameInput.value, ":").concat(this.duplicatePseudoclassSelector.value);
        _css_stylesheet_css_stylesheet__WEBPACK_IMPORTED_MODULE_0__["default"].duplicateRule(this.duplicableClassSelector.value, newClassName);
        this.appendNewOptionElement(newClassName, this.classesSelector);
        this.appendNewOptionElement(newClassName, this.duplicableClassSelector);
        this.newDuplicadedClassNameInput.value = '';
        this.duplicatePseudoclassSelector.value = _enums_general_pseudoclass_enum__WEBPACK_IMPORTED_MODULE_12__.GeneralPseudoclassEnum.none;
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
        this.setComponentAccordingToSelector();
    };
    DisplayAsParentComponent.prototype.getCurrentProperties = function (property) {
        return this.domElementStyleSheet[property];
    };
    DisplayAsParentComponent.prototype.setComponentAccordingToSelector = function () {
        var currentProperties = this.getCurrentProperties('display');
        if (currentProperties === _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_8__.DisplayTypesEnum.flex || currentProperties === _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_8__.DisplayTypesEnum["inline-flex"]) {
            this.resetGrid();
            this.updateFlexComponentsStyleSheet();
            this.setFlexAsParentInitialValues();
            this.container.appendChild(this.flexContainerAsParent.build());
        }
        else if (currentProperties === _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_8__.DisplayTypesEnum.grid
            || currentProperties === _enums_display_types_enum__WEBPACK_IMPORTED_MODULE_8__.DisplayTypesEnum["inline-grid"]) {
            this.resetFlex();
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
            this.domElementStyleSheet['align-items'] = '';
            this.domElementStyleSheet['justify-content'] = '';
            this.domElementStyleSheet['align-content'] = '';
            this.domElementStyleSheet['grid-auto-flow'] = '';
            this.domElementStyleSheet['column-gap'] = '';
            this.domElementStyleSheet['row-gap'] = '';
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
        this.setComponentAccordingToSelector();
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
            .appendChild(acceptButton)
            .appendChild(this.urlInput)
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
    GeneralPseudoclassEnum["none"] = "";
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
        var values = text.match(/[a-z]+$/i);
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
        return CssStyleSheet.styleSheet.cssRules[index]['style'];
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
        this._domElement.attributes.removeNamedItem('style'); // TODO: algo de esto falla
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
            this._domElement.attributes.removeNamedItem('style'); // TODO: algo de esto falla
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
// TODO: falta la propiedad background-image
// TODO: agregar imagenes
// TODO: agregar clase a mano mediante un textarea

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxFQUFFLGdCQUFnQixFQUFFO0lBQzFDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO0lBQ2hDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO0lBQ3RDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO0lBQ2pDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0lBQ3JDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0lBQ3JDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO0lBQ3RDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0lBQ3JDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO0lBQ2pDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7SUFDMUMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7SUFDcEMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUU7SUFDbkMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7SUFDaEMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7SUFDcEMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7SUFDcEMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUU7SUFDekMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7SUFDcEMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7SUFDcEMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7SUFDckMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7SUFDckMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUU7SUFDdkMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTtJQUMxQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTtJQUN0QyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTtJQUN0QyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtJQUNuQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTtJQUN0QyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRTtJQUN4QyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRTtJQUN6QyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRTtJQUN6QyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRTtJQUN6QyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRTtJQUN6QyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTtJQUN0QyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtJQUNwQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRTtJQUN2QyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtJQUNuQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtJQUNuQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTtJQUN0QyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtJQUNyQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRTtJQUN2QyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRTtJQUN2QyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtJQUNuQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtJQUNyQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTtJQUN0QyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtJQUNoQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtJQUNyQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtJQUNoQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtJQUNoQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtJQUNqQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRTtJQUN2QyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtJQUNwQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtJQUNuQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtJQUNyQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTtJQUNsQyxFQUFFLEdBQUcsRUFBRSxTQUFT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LFNBQVMsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFO0lBQ3hDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0lBQ3JDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0lBQ3JDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO0lBQ3BDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO0lBQ3ZDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO0lBQ2hDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO0lBQ25DLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO0lBQ2pDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0lBQ3JDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO0lBQ2xDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0lBQ3JDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO0lBQ2xDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFO0lBQ3pDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0lBQ3JDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFO0lBQ3pDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFO0lBQ3pDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO0lBQ3RDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0lBQ3JDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO0lBQ2hDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO0lBQ2hDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO0lBQ2hDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO0lBQ3RDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO0lBQ2xDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFO0lBQ3pDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO0lBQy9CLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0lBQ3JDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0lBQ3JDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO0lBQ3ZDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO0lBQ2xDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO0lBQ3RDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO0lBQ3BDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO0lBQ3BDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO0lBQ2xDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO0lBQ2xDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO0lBQ25DLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0lBQ3JDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0lBQ3JDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0lBQ3JDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO0lBQ2hDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO0lBQ3ZDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0lBQ3JDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO0lBQy9CLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO0lBQ2hDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO0lBQ25DLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO0lBQ2xDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0lBQ3JDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO0lBQ2xDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO0lBQ2pDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO0lBQ2pDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO0lBQ3RDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO0lBQ2xDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO0NBQ3hDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUxxQztBQUV0QztJQUEyQyxpQ0FBNkI7SUFDcEU7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Z0ZBQWdGO0FBQ2hGLHdFQUF3RTtBQUV4RSxvSEFBb0g7QUFDcEgsMkZBQTJGO0FBQzNGLG9IQUFvSDtBQUNwSCwyRkFBMkY7QUFFM0Ysd0VBQXdFO0FBRXhFLG9HQUFvRztBQUNwRyxnRUFBZ0U7QUFHaEUsb0dBQW9HO0FBQ3BHLHNGQUFzRjtBQUV0RixvR0FBb0c7QUFDcEcsNkRBQTZEO0FBRTdELGtHQUFrRztBQUVsRywwQ0FBMEM7QUFFMUMsb0VBQW9FO0FBRXBFLDRDQUE0QztBQUU1Qyx5QkFBeUI7QUFFekIsa0RBQWtEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2FwcC1jb250YWluZXIvaW5pdC1hcHAtY29udGFpbmVyLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vY29tcG9uZW50cy9iYWNrZ3JvdW5kLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2NvbXBvbmVudHMvYm9yZGVyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2NvbXBvbmVudHMvYm94LXNoYWRvdy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9jb21wb25lbnRzL2NsYXNzLW1hbmFnZW1lbnQuY29tcG9uZW50LnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vY29tcG9uZW50cy9kaXNwbGF5LWFzLWNoaWxkLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2NvbXBvbmVudHMvZGlzcGxheS1hcy1wYXJlbnQuY29tcG9uZW50LnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vY29tcG9uZW50cy9mb250LmNvbXBvbmVudHMudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9jb21wb25lbnRzL2dlbmVyaWMtY3NzLXByb3BlcnR5LW11dGF0b3IuY29tcG9uZW50LnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vY29tcG9uZW50cy9nZW5lcmljLXByaW1hcnktaW5wdXQuY29tcG9uZW50LnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vY29tcG9uZW50cy9nZW5lcmljLXByaW1hcnktc2VsZWN0b3IuY29tcG9uZW50LnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vY29tcG9uZW50cy9pZC1kZWZpbml0aW9uLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2NvbXBvbmVudHMvaW5wdXQtd2l0aC11bml0cy1zZWxlY3Rvci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9jb21wb25lbnRzL21hcmdpbi1vci1wYWRkaW5nLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2NvbXBvbmVudHMvc2l6ZXMuY29tcG9uZW50LnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vY29tcG9uZW50cy91cmwtZGVmaW5pdGlvbi1jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9jb25zdGFudHMvY29uc3RhbnRzLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vZW51bXMvYWxpZ24tZmxleC1jb250ZW50LmVudW0udHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9lbnVtcy9hbGlnbi1mbGV4LWl0ZW1zLmVudW0udHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9lbnVtcy9hbGlnbi1mbGV4LXNlbGYuZW51bS50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2VudW1zL2FsaWduLWdyaWQtY29udGVudC5lbnVtLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vZW51bXMvYWxpZ24tZ3JpZC1pdGVtcy5lbnVtLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vZW51bXMvYWxpZ24tZ3JpZC1zZWxmLmVudW0udHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9lbnVtcy9ib3JkZXItc3R5bGUuZW51bS50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2VudW1zL2Rpc3BsYXktdHlwZXMuZW51bS50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2VudW1zL2V2ZW50LXR5cGUuZW51bS50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2VudW1zL2ZsZXgtZGlyZWN0aW9uLmVudW0udHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9lbnVtcy9mbGV4LXdyYXAuZW51bS50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2VudW1zL2ZvbnQtc3R5bGVzLmVudW0udHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9lbnVtcy9mb250LXZhcmlhbnQuZW51bS50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2VudW1zL2ZvbnQtd2VpZ2h0LmVudW0udHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9lbnVtcy9mb250cy5lbnVtLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vZW51bXMvZ2VuZXJhbC1wc2V1ZG9jbGFzcy5lbnVtLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vZW51bXMvZ3JpZC1hdXRvLWZsb3cuZW51bS50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2VudW1zL2lucHV0LXR5cGUuZW51bS50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2VudW1zL2p1c3RpZnktZmxleC1jb250ZW50LmVudW0udHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9lbnVtcy9qdXN0aWZ5LWdyaWQtY29udGVudC5lbnVtLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vZW51bXMvanVzdGlmeS1ncmlkLWl0ZW1zLmVudW0udHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9lbnVtcy9qdXN0aWZ5LWdyaWQtc2VsZi5lbnVtLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vZW51bXMvc3R5bGUtbmFtZS5lbnVtLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vZW51bXMvdGl0bGUudHlwZXMuZW51bS50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2VudW1zL3VuaXRzLmVudW0udHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9mdW5jdGlvbnMvZGVmaW5lLWVsZW1lbnQtaWQudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9mdW5jdGlvbnMvZGVmaW5lLWVsZW1lbnQtbmFtZS50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2Z1bmN0aW9ucy9kcmFnLXN0YXJ0LXdpdGgtdGFyZ2V0LW5vZGVfbmFtZS50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2Z1bmN0aW9ucy9maXJzdC1sZXR0ZXJzLWNhcGl0YWxpemVkLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vZnVuY3Rpb25zL2dldC1jc3MtdW5pdC50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2Z1bmN0aW9ucy9yZ2ItdG8taGV4LnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vbW9kZWxzL0J1dHRvbkJ1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9tb2RlbHMvQ29udGFpbmVyQnVpbGRlci50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL21vZGVscy9JbWFnZUJ1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9tb2RlbHMvSW5wdXRCdWlsZGVyLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vbW9kZWxzL0xhYmVsQnVpbGRlci50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL21vZGVscy9SYXdCdWlsZGVyLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vbW9kZWxzL1NlbGVjdG9yRnJvbUFycmF5QnVpbGRlci50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL21vZGVscy9TZWxlY3RvckZyb21FbnVtQnVpbGRlci50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL21vZGVscy9TdHlsZXNDb21wb25lbnRzQnVpbGRlci50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL21vZGVscy9UZXh0YXJlYUJ1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9tb2RlbHMvVGl0bGVCdWlsZGVyLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21tb24vcHVibGlzaGVycy9DbGFzc0NoYW5nZVB1Ymxpc2hlci50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL3B1Ymxpc2hlcnMvQ29tcG9uZW50Q2hhbmdlUHVibGlzaGVyLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jb21wb25lbnRzLWNvbnRhaW5lci9pbml0LWRyYWdnYWJsZS1jb21wb25lbnRzLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9jc3Mtc3R5bGVzaGVldC9jc3Mtc3R5bGVzaGVldC50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvaHRtbC1jb21wb25lbnRzL0J1dHRvbi50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvaHRtbC1jb21wb25lbnRzL0NvbnRhaW5lci50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvaHRtbC1jb21wb25lbnRzL0ltYWdlLnRzIiwid2VicGFjazovL2xheW91dC1hcHAvLi9zcmMvY29tcG9uZW50cy9odG1sLWNvbXBvbmVudHMvSW5wdXQudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2h0bWwtY29tcG9uZW50cy9MYWJlbC50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvaHRtbC1jb21wb25lbnRzL1Jhd0hUTUxDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9jb21wb25lbnRzL2h0bWwtY29tcG9uZW50cy9UaXRsZS50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwLy4vc3JjL2NvbXBvbmVudHMvaHRtbC1jb21wb25lbnRzL2NvbXBvbmVudHNJbmRleC50cyIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xheW91dC1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2xheW91dC1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9sYXlvdXQtYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGF5b3V0LWFwcC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGlzcGxheUNvbXBvbmVudCBmcm9tICcuLi9jb21tb24vY29tcG9uZW50cy9kaXNwbGF5LWFzLXBhcmVudC5jb21wb25lbnQnO1xuaW1wb3J0IE1hcmdpbk9yUGFkZGluZ0NvbXBvbmVudCBmcm9tICcuLi9jb21tb24vY29tcG9uZW50cy9tYXJnaW4tb3ItcGFkZGluZy5jb21wb25lbnQnO1xuaW1wb3J0IFN0eWxlc0NvbXBvbmVudHNCdWlsZGVyIGZyb20gJy4uL2NvbW1vbi9tb2RlbHMvU3R5bGVzQ29tcG9uZW50c0J1aWxkZXInO1xuaW1wb3J0IFJhd0hUTUxDb25wb25lbnQgZnJvbSAnLi4vaHRtbC1jb21wb25lbnRzL1Jhd0hUTUxDb21wb25lbnQnO1xuaW1wb3J0IEJhY2tncm91bmRDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudHMvYmFja2dyb3VuZC5jb21wb25lbnQnO1xuaW1wb3J0IGNvbXBvbmVudHNJbmRleCBmcm9tICcuLi9odG1sLWNvbXBvbmVudHMvY29tcG9uZW50c0luZGV4JztcbmltcG9ydCBjb25zdGFudHMgZnJvbSAnLi4vY29tbW9uL2NvbnN0YW50cy9jb25zdGFudHMnO1xuXG5pbXBvcnQgeyBTdHlsZU5hbWVFbnVtIH0gZnJvbSAnLi4vY29tbW9uL2VudW1zL3N0eWxlLW5hbWUuZW51bSc7XG5pbXBvcnQgQ3NzU3R5bGVTaGVldCBmcm9tICcuLi9jc3Mtc3R5bGVzaGVldC9jc3Mtc3R5bGVzaGVldCc7XG5cbmltcG9ydCBDb21wb25lbnRDaGFuZ2VQdWJsaXNoZXIgZnJvbSAnLi4vY29tbW9uL3B1Ymxpc2hlcnMvQ29tcG9uZW50Q2hhbmdlUHVibGlzaGVyJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbml0QXBwQ29udGFpbmVyIHtcbiAgICBwcml2YXRlIGFwcENvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBhcHBDb250YWluZXJDbGFzc05hbWUgPSAnYm9keSc7XG4gICAgcHJpdmF0ZSBhcHBDb250YWluZXJIZWlnaHRJbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgICBwcml2YXRlIGFwcENvbnRhaW5lcldpZHRoSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHJvdGVjdGVkIHN0eWxlc0NvbXBvbmVudHM6IEhUTUxEaXZFbGVtZW50O1xuXG4gICAgcHJvdGVjdGVkIGJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBmYXRoZXJCYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcblxuICAgIHByaXZhdGUgY29tcG9uZW50U2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlbGVjdC1pdGVtJyk7XG4gICAgcHJpdmF0ZSBjb21wb25lbnRDaGFuZ2VQdWJsaXNoZXI6IENvbXBvbmVudENoYW5nZVB1Ymxpc2hlcjtcblxuICAgIHByaXZhdGUgcHJpbnRIdG1sQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmludC1odG1sLWZpbGUnKTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmFwcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAtY29udGFpbmVyJyk7XG5cbiAgICAgICAgdGhpcy5hcHBDb250YWluZXJIZWlnaHRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1cGRhdGUtaGVpZ2h0Jyk7XG4gICAgICAgIHRoaXMuY2hhbmdlQXBwQ29udGFpbmVySGVpZ2h0ID0gdGhpcy5jaGFuZ2VBcHBDb250YWluZXJIZWlnaHQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hcHBDb250YWluZXJIZWlnaHRJbnB1dC52YWx1ZSA9IGAke3BhcnNlSW50KHRoaXMuZ2V0Q3VycmVudEhlaWdodCgpKX1gO1xuICAgICAgICB0aGlzLmFwcENvbnRhaW5lckhlaWdodElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy5jaGFuZ2VBcHBDb250YWluZXJIZWlnaHQpO1xuXG4gICAgICAgIHRoaXMuYXBwQ29udGFpbmVyV2lkdGhJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1cGRhdGUtd2lkdGgnKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VBcHBDb250YWluZXJXaWR0aCA9IHRoaXMuY2hhbmdlQXBwQ29udGFpbmVyV2lkdGguYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hcHBDb250YWluZXJXaWR0aElucHV0LnZhbHVlID0gYCR7cGFyc2VJbnQodGhpcy5nZXRDdXJyZW50V2lkdGgoKSl9YDtcbiAgICAgICAgdGhpcy5hcHBDb250YWluZXJXaWR0aElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy5jaGFuZ2VBcHBDb250YWluZXJXaWR0aCk7XG5cbiAgICAgICAgdGhpcy5kcmFnRW50ZXIgPSB0aGlzLmRyYWdFbnRlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRyYWdPdmVyID0gdGhpcy5kcmFnT3Zlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRyYWdMZWF2ZSA9IHRoaXMuZHJhZ0xlYXZlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJvcCA9IHRoaXMuZHJvcC5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMub3BlbkVsZW1lbnRDb25maWdzID0gdGhpcy5vcGVuRWxlbWVudENvbmZpZ3MuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VTaXplID0gdGhpcy5jaGFuZ2VTaXplLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5hcHBDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgdGhpcy5kcmFnRW50ZXIpO1xuICAgICAgICB0aGlzLmFwcENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuZHJhZ092ZXIpO1xuICAgICAgICB0aGlzLmFwcENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCB0aGlzLmRyYWdMZWF2ZSk7XG4gICAgICAgIHRoaXMuYXBwQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLmRyb3ApO1xuXG4gICAgICAgIHRoaXMuYXBwQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcGVuRWxlbWVudENvbmZpZ3MpO1xuXG4gICAgICAgIHRoaXMub25SZXNpemUodGhpcy5hcHBDb250YWluZXIsIHRoaXMuY2hhbmdlU2l6ZSk7XG5cbiAgICAgICAgdGhpcy5zZW5kQ29tcG9uZW50TmFtZSA9IHRoaXMuc2VuZENvbXBvbmVudE5hbWUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRDaGFuZ2VQdWJsaXNoZXIgPSBuZXcgQ29tcG9uZW50Q2hhbmdlUHVibGlzaGVyKCk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50U2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5zZW5kQ29tcG9uZW50TmFtZSk7XG5cbiAgICAgICAgdGhpcy5wcmludEh0bWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnByaW50SHRtbEZpbGUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZHJhZ0VudGVyKGV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPSBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXModGhpcy5hcHBDb250YWluZXJDbGFzc05hbWUpWydiYWNrZ3JvdW5kLWNvbG9yJ107XG4gICAgICAgIHRoaXMuYXBwQ29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbnN0YW50cy5JTlZFUlRFRF9CQUNLR1JPVU5EX0NPTE9SO1xuICAgIH1cblxuICAgIHByaXZhdGUgZHJhZ092ZXIoZXZlbnQ6IERyYWdFdmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZHJhZ0xlYXZlKCkge1xuICAgICAgICB0aGlzLmFwcENvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJztcbiAgICAgICAgdGhpcy5hcHBDb250YWluZXIuYXR0cmlidXRlcy5yZW1vdmVOYW1lZEl0ZW0oJ3N0eWxlJyk7IC8vIFRPRE86IGFsZ28gZGUgZXN0byBmYWxsYVxuICAgIH1cblxuICAgIHByaXZhdGUgZHJvcChldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgICAgIHRoaXMuYXBwQ29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcnO1xuXG4gICAgICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKHRhcmdldEVsZW1lbnQubm9kZU5hbWUgIT09ICdESVYnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlbGVtZW50VHlwZSA9IGV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKCd0ZXh0L3BsYWluJyk7XG5cbiAgICAgICAgY29uc3QgbmV3RG9tRWxlbWVudDogUmF3SFRNTENvbnBvbmVudCB8IHVuZGVmaW5lZCA9IGNvbXBvbmVudHNJbmRleChlbGVtZW50VHlwZSkoKTtcblxuICAgICAgICBjb25zdCBlbGVtZW50RXhpc3RzID0gbmV3RG9tRWxlbWVudCA/IGZhbHNlIDogdHJ1ZTtcblxuICAgICAgICBpZiAoZWxlbWVudEV4aXN0cykge1xuICAgICAgICAgICAgY29uc3QgZHJhZ2dhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudFR5cGUpO1xuICAgICAgICAgICAgdGFyZ2V0RWxlbWVudC5hcHBlbmRDaGlsZChkcmFnZ2FibGUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRDaGFuZ2VQdWJsaXNoZXIuYXR0YWNoKG5ld0RvbUVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGFyZ2V0RWxlbWVudC5hcHBlbmRDaGlsZChuZXdEb21FbGVtZW50LmRvbUVsZW1lbnQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb3BlbkVsZW1lbnRDb25maWdzKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIHRoaXMuc3R5bGVzQ29tcG9uZW50cyA9IG5ldyBTdHlsZXNDb21wb25lbnRzQnVpbGRlcigpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IE1hcmdpbk9yUGFkZGluZ0NvbXBvbmVudChcbiAgICAgICAgICAgICAgICB0aGlzLmFwcENvbnRhaW5lcixcbiAgICAgICAgICAgICAgICBTdHlsZU5hbWVFbnVtLm1hcmdpbikuY29tcG9uZW50KVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBNYXJnaW5PclBhZGRpbmdDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBDb250YWluZXIsXG4gICAgICAgICAgICAgICAgU3R5bGVOYW1lRW51bS5wYWRkaW5nKS5jb21wb25lbnQpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IEJhY2tncm91bmRDb21wb25lbnQodGhpcy5hcHBDb250YWluZXIpLmNvbXBvbmVudClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgRGlzcGxheUNvbXBvbmVudCh0aGlzLmFwcENvbnRhaW5lcikuY29tcG9uZW50KVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblJlc2l6ZShkb21fZWxlbSwgY2FsbGJhY2spIHtcbiAgICAgICAgY29uc3QgcmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKCkgPT4gY2FsbGJhY2soKSk7XG4gICAgICAgIHJlc2l6ZU9ic2VydmVyLm9ic2VydmUoZG9tX2VsZW0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2hhbmdlU2l6ZSgpIHtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5hcHBDb250YWluZXIuc3R5bGVbJ2hlaWdodCddO1xuICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMuYXBwQ29udGFpbmVyLnN0eWxlWyd3aWR0aCddO1xuXG4gICAgICAgIGlmIChoZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMuYXBwQ29udGFpbmVySGVpZ2h0SW5wdXQudmFsdWUgPSBgJHtwYXJzZUludChoZWlnaHQpfWA7XG4gICAgICAgICAgICBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXModGhpcy5hcHBDb250YWluZXJDbGFzc05hbWUpWydoZWlnaHQnXSA9IGhlaWdodDtcbiAgICAgICAgICAgIHRoaXMuYXBwQ29udGFpbmVyLnN0eWxlWydoZWlnaHQnXSA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGlmICh3aWR0aCkge1xuICAgICAgICAgICAgdGhpcy5hcHBDb250YWluZXJXaWR0aElucHV0LnZhbHVlID0gYCR7cGFyc2VJbnQod2lkdGgpfWA7XG4gICAgICAgICAgICBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXModGhpcy5hcHBDb250YWluZXJDbGFzc05hbWUpWyd3aWR0aCddID0gd2lkdGg7XG4gICAgICAgICAgICB0aGlzLmFwcENvbnRhaW5lci5zdHlsZVsnd2lkdGgnXSA9ICcnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjaGFuZ2VBcHBDb250YWluZXJIZWlnaHQoKSB7XG4gICAgICAgIENzc1N0eWxlU2hlZXQuZ2V0UnVsZVN0eWxlcyh0aGlzLmFwcENvbnRhaW5lckNsYXNzTmFtZSlbJ2hlaWdodCddID0gYCR7dGhpcy5hcHBDb250YWluZXJIZWlnaHRJbnB1dC52YWx1ZX1weGBcbiAgICB9XG5cbiAgICBwcml2YXRlIGNoYW5nZUFwcENvbnRhaW5lcldpZHRoKCkge1xuICAgICAgICBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXModGhpcy5hcHBDb250YWluZXJDbGFzc05hbWUpWyd3aWR0aCddID0gYCR7dGhpcy5hcHBDb250YWluZXJXaWR0aElucHV0LnZhbHVlfXB4YFxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0Q3VycmVudEhlaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIENzc1N0eWxlU2hlZXQuZ2V0UnVsZVN0eWxlcyh0aGlzLmFwcENvbnRhaW5lckNsYXNzTmFtZSlbJ2hlaWdodCddXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRDdXJyZW50V2lkdGgoKSB7XG4gICAgICAgIHJldHVybiBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXModGhpcy5hcHBDb250YWluZXJDbGFzc05hbWUpWyd3aWR0aCddXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwcmludEh0bWxGaWxlKCkge1xuICAgICAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcC1jb250YWluZXInKS5pbm5lckhUTUw7XG4gICAgICAgIGNvbnN0IHJlbW92ZURyYWdnYWJsZVJlZ0V4ID0gbmV3IFJlZ0V4cCgnIGRyYWdnYWJsZT1cInRydWVcIicsICdnJyk7XG4gICAgICAgIG1haW5Db250YWluZXIucmVwbGFjZShyZW1vdmVEcmFnZ2FibGVSZWdFeCwgJycpO1xuXG4gICAgICAgIC8vIFRPRE86IHZlciBzaSBkZWJlcmlhIGlyIGRlc3BsZWdhbmRvIGVsIGFyYm9sIGRlIGVsZW1lbnRvcyBIVE1MIGUgaXIgYXJtYW5kbyBlbCBodG1sIGFxdWkuXG4gICAgICAgIC8vIFRPRE86IHZlciBzaSBlcyBuZWNlc2FyaW8gYm9ycmFyIGVsIHN0eWxlIHkgbG8gcXVlIGhheWEgZGVudHJvLi4uLlxuXG4gICAgICAgIGNvbnN0IG91dHB1dEh0bWwgPSBgXG4gICAgICAgIDwhRE9DVFlQRSBodG1sPlxuICAgICAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgICAgPGhlYWQ+XG4gICAgICAgICAgICA8bWV0YSBjaGFyc2V0PVwiVVRGLThcIj5cbiAgICAgICAgICAgIDxtZXRhIGh0dHAtZXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiSUU9ZWRnZVwiPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIj5cbiAgICAgICAgICAgIDx0aXRsZT5Eb2N1bWVudDwvdGl0bGU+XG4gICAgICAgIDwvaGVhZD5cbiAgICAgICAgPGJvZHkgaWQ9XCJhcHAtY29udGFpbmVyXCIgY2xhc3M9XCJib2R5XCI+XG4gICAgICAgICAgICAke21haW5Db250YWluZXJ9XG4gICAgICAgIDwvYm9keT5cbiAgICAgICAgPC9odG1sPmBcblxuICAgICAgICBjb25zb2xlLmxvZyhvdXRwdXRIdG1sKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNlbmRDb21wb25lbnROYW1lKCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudENoYW5nZVB1Ymxpc2hlci5ub3RpZnlDb21wb25lbnROYW1lKHRoaXMuY29tcG9uZW50U2VsZWN0b3IudmFsdWUpO1xuICAgIH1cbn1cbiIsImltcG9ydCBDbGFzc0NoYW5nZU9ic2VydmVySW50ZXJmYWNlIGZyb20gJy4uL2ludGVyZmFjZXMvY2xhc3MtY2hhbmdlLW9ic2VydmVyLmludGVyZmFjZSc7XG5cbmltcG9ydCBDb250YWluZXJCdWlsZGVyIGZyb20gJy4uL21vZGVscy9Db250YWluZXJCdWlsZGVyJztcbmltcG9ydCBJbnB1dEJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0lucHV0QnVpbGRlcic7XG5pbXBvcnQgTGFiZWxCdWlsZGVyIGZyb20gJy4uL21vZGVscy9MYWJlbEJ1aWxkZXInO1xuaW1wb3J0IEJ1dHRvbkJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0J1dHRvbkJ1aWxkZXInO1xuXG5pbXBvcnQgQ3NzU3R5bGVTaGVldCBmcm9tICcuLi8uLi9jc3Mtc3R5bGVzaGVldC9jc3Mtc3R5bGVzaGVldCc7XG5pbXBvcnQgY29sb3JUb0hleCBmcm9tICcuLi9mdW5jdGlvbnMvcmdiLXRvLWhleCc7XG5cbmltcG9ydCB7IElucHV0VHlwZUVudW0gfSBmcm9tICcuLi9lbnVtcy9pbnB1dC10eXBlLmVudW0nO1xuaW1wb3J0IHsgU3R5bGVOYW1lRW51bSB9IGZyb20gJy4uL2VudW1zL3N0eWxlLW5hbWUuZW51bSc7XG5pbXBvcnQgeyBEaXNwbGF5VHlwZXNFbnVtIH0gZnJvbSAnLi4vZW51bXMvZGlzcGxheS10eXBlcy5lbnVtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFja2dyb3VuZENvbXBvbmVudCBpbXBsZW1lbnRzIENsYXNzQ2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2V7XG4gICAgcHJpdmF0ZSBkb21FbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBkb21FbGVtZW50U3R5bGVTaGVldDogQ1NTU3R5bGVEZWNsYXJhdGlvbjtcblxuICAgIHByaXZhdGUgY29sb3JJbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgICBwcml2YXRlIG9wYWNpdHlTbGlkZXI6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBvcGFjaXR5VmFsdWU6IEhUTUxMYWJlbEVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihkb21FbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0ID0gQ3NzU3R5bGVTaGVldC5nZXRSdWxlU3R5bGVzKHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3RbMF0pO1xuICAgICAgICB0aGlzLmFkZENvbXBvbmVudHMoKTtcbiAgICB9XG5cbiAgICBnZXQgY29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRDb21wb25lbnRzKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbG9yID0gdGhpcy51cGRhdGVDb2xvci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZU9wYWNpdHkgPSB0aGlzLnVwZGF0ZU9wYWNpdHkuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmNvbG9ySW5wdXQgPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0uY29sb3IpXG4gICAgICAgICAgICAuc2V0VmFsdWUodGhpcy5nZXRDdXJyZW50Q29sb3IoKSlcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMudXBkYXRlQ29sb3IpXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIGNvbnN0IHJlbW92ZUNvbG9yID0gbmV3IEJ1dHRvbkJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldElubmVyVGV4dCgnUmVtb3ZlIENvbG9yJylcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudXBkYXRlQ29sb3IpXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIHRoaXMub3BhY2l0eVNsaWRlciA9IG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS5yYW5nZSlcbiAgICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLmdldEN1cnJlbnRPcGFjaXR5KCkpXG4gICAgICAgICAgICAuc2V0TWluKDApXG4gICAgICAgICAgICAuc2V0TWF4KDEwMClcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMudXBkYXRlT3BhY2l0eSlcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgdGhpcy5vcGFjaXR5VmFsdWUgPSBuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXRJbm5lclRleHQoYCR7dGhpcy5nZXRDdXJyZW50T3BhY2l0eSgpfSVgKVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICBjb25zdCBiYWNrZ3JvdW5kQ29tcG9uZW50cyA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdDb2xvciAvIE9wYWNpdHknKVxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5jb2xvcklucHV0KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLm9wYWNpdHlTbGlkZXIpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMub3BhY2l0eVZhbHVlKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChyZW1vdmVDb2xvcilcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmJvcmRlciwgJzFweCBzb2xpZCAjNENBRjUwJylcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLnBhZGRpbmcsICczcHgnKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdCYWNrZ3JvdW5kJylcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKGJhY2tncm91bmRDb21wb25lbnRzKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEN1cnJlbnRDb2xvcigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gY29sb3JUb0hleCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydiYWNrZ3JvdW5kLWNvbG9yJ10pO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0Q3VycmVudE9wYWNpdHkoKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3Qgb3BhY2l0eSA9IHBhcnNlRmxvYXQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnb3BhY2l0eSddKSAqIDEwMDtcbiAgICAgICAgcmV0dXJuIGlzTmFOKG9wYWNpdHkpID8gJzEwMCcgOiBNYXRoLnJvdW5kKG9wYWNpdHkpLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVDb2xvcihldmVudDogRXZlbnQpIHtcbiAgICAgICAgaWYgKCBldmVudC50eXBlID09PSAnY2xpY2snKXtcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2JhY2tncm91bmQtY29sb3InXSA9ICcnO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYmFja2dyb3VuZC1jb2xvciddID0gdGhpcy5jb2xvcklucHV0LnZhbHVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlT3BhY2l0eSgpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBwYXJzZUludCh0aGlzLm9wYWNpdHlTbGlkZXIudmFsdWUpXG4gICAgICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSB2YWx1ZSAvIDEwMDtcbiAgICAgICAgaWYodmFsdWUgPj0gMTAwKSB7XG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydvcGFjaXR5J10gPSAnJ1xuICAgICAgICAgICAgdGhpcy5vcGFjaXR5VmFsdWUuaW5uZXJUZXh0ID0gJzEwMCUnO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ29wYWNpdHknXSA9IGAke3BlcmNlbnRhZ2V9YDtcbiAgICAgICAgdGhpcy5vcGFjaXR5VmFsdWUuaW5uZXJUZXh0ID0gYCR7dmFsdWV9JWA7XG4gICAgfVxuXG4gICAgcHVibGljIGNsYXNzTmFtZVVwZGF0ZWQobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQgPSBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXMobmFtZSk7XG4gICAgICAgIHRoaXMuY29sb3JJbnB1dC52YWx1ZSA9IHRoaXMuZ2V0Q3VycmVudENvbG9yKCk7XG4gICAgICAgIHRoaXMub3BhY2l0eVNsaWRlci52YWx1ZSA9IHRoaXMuZ2V0Q3VycmVudE9wYWNpdHkoKTtcbiAgICAgICAgdGhpcy5vcGFjaXR5VmFsdWUuaW5uZXJUZXh0ID0gYCR7dGhpcy5vcGFjaXR5U2xpZGVyLnZhbHVlfSVgO1xuICAgIH1cbn1cbiIsImltcG9ydCBDbGFzc0NoYW5nZU9ic2VydmVySW50ZXJmYWNlIGZyb20gJy4uL2ludGVyZmFjZXMvY2xhc3MtY2hhbmdlLW9ic2VydmVyLmludGVyZmFjZSc7XG5cbmltcG9ydCBDb250YWluZXJCdWlsZGVyIGZyb20gJy4uL21vZGVscy9Db250YWluZXJCdWlsZGVyJztcbmltcG9ydCBJbnB1dEJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0lucHV0QnVpbGRlcic7XG5pbXBvcnQgTGFiZWxCdWlsZGVyIGZyb20gJy4uL21vZGVscy9MYWJlbEJ1aWxkZXInO1xuaW1wb3J0IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyIGZyb20gJy4uL21vZGVscy9TZWxlY3RvckZyb21FbnVtQnVpbGRlcic7XG5cbmltcG9ydCBDc3NTdHlsZVNoZWV0IGZyb20gJy4uLy4uL2Nzcy1zdHlsZXNoZWV0L2Nzcy1zdHlsZXNoZWV0JztcbmltcG9ydCBjb2xvclRvSGV4IGZyb20gJy4uL2Z1bmN0aW9ucy9yZ2ItdG8taGV4JztcbmltcG9ydCBnZXRVbml0IGZyb20gJy4uL2Z1bmN0aW9ucy9nZXQtY3NzLXVuaXQnO1xuXG5pbXBvcnQgeyBJbnB1dFR5cGVFbnVtIH0gZnJvbSAnLi4vZW51bXMvaW5wdXQtdHlwZS5lbnVtJztcbmltcG9ydCB7IEJvcmRlclN0eWxlRW51bSB9IGZyb20gJy4uL2VudW1zL2JvcmRlci1zdHlsZS5lbnVtJztcbmltcG9ydCB7IFVuaXRzRW51bSB9IGZyb20gJy4uL2VudW1zL3VuaXRzLmVudW0nO1xuaW1wb3J0IHsgU3R5bGVOYW1lRW51bSB9IGZyb20gJy4uL2VudW1zL3N0eWxlLW5hbWUuZW51bSc7XG5pbXBvcnQgeyBEaXNwbGF5VHlwZXNFbnVtIH0gZnJvbSAnLi4vZW51bXMvZGlzcGxheS10eXBlcy5lbnVtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9yZGVyQ29tcG9uZW50IGltcGxlbWVudHMgQ2xhc3NDaGFuZ2VPYnNlcnZlckludGVyZmFjZSB7XG4gICAgcHJpdmF0ZSBkb21FbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBkb21FbGVtZW50U3R5bGVTaGVldDogQ1NTU3R5bGVEZWNsYXJhdGlvbjtcblxuICAgIHByaXZhdGUgdG9wQm9yZGVyQ29sb3JJbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgICBwcml2YXRlIHJpZ2h0Qm9yZGVyQ29sb3JJbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgICBwcml2YXRlIGJvdHRvbUJvcmRlckNvbG9ySW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBsZWZ0Qm9yZGVyQ29sb3JJbnB1dDogSFRNTElucHV0RWxlbWVudDtcblxuICAgIHByaXZhdGUgdG9wQm9yZGVyU3R5bGVTZWxlY3RvcjogSFRNTFNlbGVjdEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSByaWdodEJvcmRlclN0eWxlU2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIHByaXZhdGUgYm90dG9tQm9yZGVyU3R5bGVTZWxlY3RvcjogSFRNTFNlbGVjdEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBsZWZ0Qm9yZGVyU3R5bGVTZWxlY3RvcjogSFRNTFNlbGVjdEVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIHRvcEJvcmRlcldpZHRoSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSByaWdodEJvcmRlcldpZHRoSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBib3R0b21Cb3JkZXJXaWR0aElucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHByaXZhdGUgbGVmdEJvcmRlcldpZHRoSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIHRvcEJvcmRlcldpZHRoVW5pdFNlbGVjdG9yOiBIVE1MU2VsZWN0RWxlbWVudDtcbiAgICBwcml2YXRlIHJpZ2h0Qm9yZGVyV2lkdGhVbml0U2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIHByaXZhdGUgYm90dG9tQm9yZGVyV2lkdGhVbml0U2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIHByaXZhdGUgbGVmdEJvcmRlcldpZHRoVW5pdFNlbGVjdG9yOiBIVE1MU2VsZWN0RWxlbWVudDtcblxuICAgIHByaXZhdGUgdG9wQm9yZGVyUmFkaXVzSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSByaWdodEJvcmRlclJhZGl1c0lucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHByaXZhdGUgYm90dG9tQm9yZGVyUmFkaXVzSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBsZWZ0Qm9yZGVyUmFkaXVzSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIHRvcEJvcmRlclJhZGl1c1VuaXRTZWxlY3RvcjogSFRNTFNlbGVjdEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSByaWdodEJvcmRlclJhZGl1c1VuaXRTZWxlY3RvcjogSFRNTFNlbGVjdEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBib3R0b21Cb3JkZXJSYWRpdXNVbml0U2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIHByaXZhdGUgbGVmdEJvcmRlclJhZGl1c1VuaXRTZWxlY3RvcjogSFRNTFNlbGVjdEVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIHNlbGVjdEFsbENoZWNrQm94OiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IoZG9tRWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCA9IENzc1N0eWxlU2hlZXQuZ2V0UnVsZVN0eWxlcyh0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0WzBdKTtcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnRzKCk7XG4gICAgfVxuXG4gICAgZ2V0IGNvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkQ29tcG9uZW50cygpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VDb21wb25lbnRzU3RhdHVzID0gdGhpcy5jaGFuZ2VDb21wb25lbnRzU3RhdHVzLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy51cGRhdGVCb3JkZXJTdHlsZVByb3BlcnR5ID0gdGhpcy51cGRhdGVCb3JkZXJTdHlsZVByb3BlcnR5LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlQm9yZGVyQ29sb3IgPSB0aGlzLnVwZGF0ZUJvcmRlckNvbG9yLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlQm9yZGVyV2lkdGggPSB0aGlzLnVwZGF0ZUJvcmRlcldpZHRoLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlQm9yZGVyUmFkaXVzID0gdGhpcy51cGRhdGVCb3JkZXJSYWRpdXMuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnNlbGVjdEFsbENoZWNrQm94ID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLmNoZWNrYm94KVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuY2hhbmdlQ29tcG9uZW50c1N0YXR1cylcbiAgICAgICAgICAgIC5jaGVja2VkKHRoaXMudW5pZmllZEJvcmRlclByb3BlcnRpZXMoKSlcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgY29uc3Qgc2VsZWN0QWxsQ29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ1NlbGVjdCBBbGwnKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5zZWxlY3RBbGxDaGVja0JveClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cblxuICAgICAgICB0aGlzLmJ1aWxkQWxsQ29tcG9uZW50cygpO1xuICAgICAgICB0aGlzLnNldEJvcmRlclZhbHVlc0FjY29yZGluZ1RvQ2xhc3MoKTtcblxuICAgICAgICBjb25zdCB0b3BDb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnVG9wIEJvcmRlciBDb2xvciAvIFN0eWxlJylcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMudG9wQm9yZGVyQ29sb3JJbnB1dClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy50b3BCb3JkZXJTdHlsZVNlbGVjdG9yKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnVG9wIEJvcmRlciBXaWR0aCcpXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLnRvcEJvcmRlcldpZHRoSW5wdXQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMudG9wQm9yZGVyV2lkdGhVbml0U2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdUb3AgQm9yZGVyIFJhZGl1cycpXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLnRvcEJvcmRlclJhZGl1c0lucHV0KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLnRvcEJvcmRlclJhZGl1c1VuaXRTZWxlY3RvcilcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICBjb25zdCByaWdodENvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdSaWdodCBCb3JkZXIgQ29sb3IgLyBTdHlsZScpXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLnJpZ2h0Qm9yZGVyQ29sb3JJbnB1dClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5yaWdodEJvcmRlclN0eWxlU2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdSaWdodCBCb3JkZXIgV2lkdGgnKVxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5yaWdodEJvcmRlcldpZHRoSW5wdXQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMucmlnaHRCb3JkZXJXaWR0aFVuaXRTZWxlY3RvcilcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ1JpZ2h0IEJvcmRlciBSYWRpdXMnKVxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5yaWdodEJvcmRlclJhZGl1c0lucHV0KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLnJpZ2h0Qm9yZGVyUmFkaXVzVW5pdFNlbGVjdG9yKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIGNvbnN0IGJvdHRvbUNvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdCb3R0b20gQm9yZGVyIENvbG9yIC8gU3R5bGUnKVxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5ib3R0b21Cb3JkZXJDb2xvcklucHV0KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmJvdHRvbUJvcmRlclN0eWxlU2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdCb3R0b20gQm9yZGVyIFdpZHRoJylcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuYm90dG9tQm9yZGVyV2lkdGhJbnB1dClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5ib3R0b21Cb3JkZXJXaWR0aFVuaXRTZWxlY3RvcilcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0JvdHRvbSBCb3JkZXIgUmFkaXVzJylcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuYm90dG9tQm9yZGVyUmFkaXVzSW5wdXQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuYm90dG9tQm9yZGVyUmFkaXVzVW5pdFNlbGVjdG9yKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIGNvbnN0IGxlZnRDb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnTGVmdCBCb3JkZXIgQ29sb3IgLyBTdHlsZScpXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmxlZnRCb3JkZXJDb2xvcklucHV0KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmxlZnRCb3JkZXJTdHlsZVNlbGVjdG9yKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnTGVmdCBCb3JkZXIgV2lkdGgnKVxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5sZWZ0Qm9yZGVyV2lkdGhJbnB1dClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5sZWZ0Qm9yZGVyV2lkdGhVbml0U2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdMZWZ0IEJvcmRlciBSYWRpdXMnKVxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5sZWZ0Qm9yZGVyUmFkaXVzSW5wdXQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMubGVmdEJvcmRlclJhZGl1c1VuaXRTZWxlY3RvcilcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICBjb25zdCBpbnB1dFZhbHVlc0NvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0b3BDb250YWluZXIpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQocmlnaHRDb250YWluZXIpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQoYm90dG9tQ29udGFpbmVyKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKGxlZnRDb250YWluZXIpXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uYm9yZGVyLCAnMXB4IHNvbGlkICM0Q0FGNTAnKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ucGFkZGluZywgJzNweCcpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0JvcmRlciBUeXBlIFNlbGVjdG9yJylcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKHNlbGVjdEFsbENvbnRhaW5lcilcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChpbnB1dFZhbHVlc0NvbnRhaW5lcilcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBidWlsZEFsbENvbXBvbmVudHMoKSB7XG4gICAgICAgIHRoaXMuYnVpbGRDb2xvcklucHV0cygpO1xuICAgICAgICB0aGlzLmJ1aWxkU3R5bGVTZWxlY3RvcnMoKTtcbiAgICAgICAgdGhpcy5idWlsZEJvcmRlcldpZHRoSW5wdXRzKCk7XG4gICAgICAgIHRoaXMuYnVpbGRCb3JkZXJXaWR0aFVuaXRzU2VsZWN0b3JzKCk7XG4gICAgICAgIHRoaXMuYnVpbGRCb3JkZXJSYWRpdXNJbnB1dHMoKVxuICAgICAgICB0aGlzLmJ1aWxkQm9yZGVyUmFkaXVzVW5pdHNTZWxlY3RvcnMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGJ1aWxkQ29sb3JJbnB1dHMoKSB7XG4gICAgICAgIHRoaXMudG9wQm9yZGVyQ29sb3JJbnB1dCA9IG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS5jb2xvcilcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMudXBkYXRlQm9yZGVyQ29sb3IpXG4gICAgICAgICAgICAuYnVpbGQoKTtcbiAgICAgICAgdGhpcy5yaWdodEJvcmRlckNvbG9ySW5wdXQgPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0uY29sb3IpXG4gICAgICAgICAgICAuZGlzYWJsZWQodGhpcy5zZWxlY3RBbGxDaGVja0JveC5jaGVja2VkKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy51cGRhdGVCb3JkZXJDb2xvcilcbiAgICAgICAgICAgIC5idWlsZCgpO1xuICAgICAgICB0aGlzLmJvdHRvbUJvcmRlckNvbG9ySW5wdXQgPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0uY29sb3IpXG4gICAgICAgICAgICAuZGlzYWJsZWQodGhpcy5zZWxlY3RBbGxDaGVja0JveC5jaGVja2VkKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy51cGRhdGVCb3JkZXJDb2xvcilcbiAgICAgICAgICAgIC5idWlsZCgpO1xuICAgICAgICB0aGlzLmxlZnRCb3JkZXJDb2xvcklucHV0ID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLmNvbG9yKVxuICAgICAgICAgICAgLmRpc2FibGVkKHRoaXMuc2VsZWN0QWxsQ2hlY2tCb3guY2hlY2tlZClcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMudXBkYXRlQm9yZGVyQ29sb3IpXG4gICAgICAgICAgICAuYnVpbGQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGJ1aWxkU3R5bGVTZWxlY3RvcnMoKSB7XG4gICAgICAgIHRoaXMudG9wQm9yZGVyU3R5bGVTZWxlY3RvciA9IG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihCb3JkZXJTdHlsZUVudW0pXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVCb3JkZXJTdHlsZVByb3BlcnR5KVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgdGhpcy5yaWdodEJvcmRlclN0eWxlU2VsZWN0b3IgPSBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIoQm9yZGVyU3R5bGVFbnVtKVxuICAgICAgICAgICAgLmRpc2FibGVkKHRoaXMuc2VsZWN0QWxsQ2hlY2tCb3guY2hlY2tlZClcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnVwZGF0ZUJvcmRlclN0eWxlUHJvcGVydHkpXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICB0aGlzLmJvdHRvbUJvcmRlclN0eWxlU2VsZWN0b3IgPSBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIoQm9yZGVyU3R5bGVFbnVtKVxuICAgICAgICAgICAgLmRpc2FibGVkKHRoaXMuc2VsZWN0QWxsQ2hlY2tCb3guY2hlY2tlZClcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnVwZGF0ZUJvcmRlclN0eWxlUHJvcGVydHkpXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICB0aGlzLmxlZnRCb3JkZXJTdHlsZVNlbGVjdG9yID0gbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKEJvcmRlclN0eWxlRW51bSlcbiAgICAgICAgICAgIC5kaXNhYmxlZCh0aGlzLnNlbGVjdEFsbENoZWNrQm94LmNoZWNrZWQpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVCb3JkZXJTdHlsZVByb3BlcnR5KVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICB9XG5cbiAgICBwcml2YXRlIGJ1aWxkQm9yZGVyV2lkdGhJbnB1dHMoKSB7XG4gICAgICAgIHRoaXMudG9wQm9yZGVyV2lkdGhJbnB1dCA9IG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS5udW1iZXIpXG4gICAgICAgICAgICAuc2V0TWluKDApXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLnVwZGF0ZUJvcmRlcldpZHRoKVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG4gICAgICAgIHRoaXMucmlnaHRCb3JkZXJXaWR0aElucHV0ID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLm51bWJlcilcbiAgICAgICAgICAgIC5zZXRNaW4oMClcbiAgICAgICAgICAgIC5kaXNhYmxlZCh0aGlzLnNlbGVjdEFsbENoZWNrQm94LmNoZWNrZWQpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVCb3JkZXJXaWR0aClcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgIHRoaXMuYm90dG9tQm9yZGVyV2lkdGhJbnB1dCA9IG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS5udW1iZXIpXG4gICAgICAgICAgICAuc2V0TWluKDApXG4gICAgICAgICAgICAuZGlzYWJsZWQodGhpcy5zZWxlY3RBbGxDaGVja0JveC5jaGVja2VkKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudXBkYXRlQm9yZGVyV2lkdGgpXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICB0aGlzLmxlZnRCb3JkZXJXaWR0aElucHV0ID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLm51bWJlcilcbiAgICAgICAgICAgIC5zZXRNaW4oMClcbiAgICAgICAgICAgIC5kaXNhYmxlZCh0aGlzLnNlbGVjdEFsbENoZWNrQm94LmNoZWNrZWQpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVCb3JkZXJXaWR0aClcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBidWlsZEJvcmRlcldpZHRoVW5pdHNTZWxlY3RvcnMoKSB7XG4gICAgICAgIHRoaXMudG9wQm9yZGVyV2lkdGhVbml0U2VsZWN0b3IgPSBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIoVW5pdHNFbnVtKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudXBkYXRlQm9yZGVyV2lkdGgpXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICB0aGlzLnJpZ2h0Qm9yZGVyV2lkdGhVbml0U2VsZWN0b3IgPSBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIoVW5pdHNFbnVtKVxuICAgICAgICAgICAgLmRpc2FibGVkKHRoaXMuc2VsZWN0QWxsQ2hlY2tCb3guY2hlY2tlZClcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnVwZGF0ZUJvcmRlcldpZHRoKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgdGhpcy5ib3R0b21Cb3JkZXJXaWR0aFVuaXRTZWxlY3RvciA9IG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihVbml0c0VudW0pXG4gICAgICAgICAgICAuZGlzYWJsZWQodGhpcy5zZWxlY3RBbGxDaGVja0JveC5jaGVja2VkKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudXBkYXRlQm9yZGVyV2lkdGgpXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICB0aGlzLmxlZnRCb3JkZXJXaWR0aFVuaXRTZWxlY3RvciA9IG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihVbml0c0VudW0pXG4gICAgICAgICAgICAuZGlzYWJsZWQodGhpcy5zZWxlY3RBbGxDaGVja0JveC5jaGVja2VkKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudXBkYXRlQm9yZGVyV2lkdGgpXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgIH1cblxuICAgIHByaXZhdGUgYnVpbGRCb3JkZXJSYWRpdXNJbnB1dHMoKSB7XG4gICAgICAgIHRoaXMudG9wQm9yZGVyUmFkaXVzSW5wdXQgPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0ubnVtYmVyKVxuICAgICAgICAgICAgLnNldE1pbigwKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy51cGRhdGVCb3JkZXJSYWRpdXMpXG4gICAgICAgICAgICAuYnVpbGQoKTtcbiAgICAgICAgdGhpcy5yaWdodEJvcmRlclJhZGl1c0lucHV0ID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLm51bWJlcilcbiAgICAgICAgICAgIC5zZXRNaW4oMClcbiAgICAgICAgICAgIC5kaXNhYmxlZCh0aGlzLnNlbGVjdEFsbENoZWNrQm94LmNoZWNrZWQpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVCb3JkZXJSYWRpdXMpXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICB0aGlzLmJvdHRvbUJvcmRlclJhZGl1c0lucHV0ID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLm51bWJlcilcbiAgICAgICAgICAgIC5zZXRNaW4oMClcbiAgICAgICAgICAgIC5kaXNhYmxlZCh0aGlzLnNlbGVjdEFsbENoZWNrQm94LmNoZWNrZWQpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVCb3JkZXJSYWRpdXMpXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICB0aGlzLmxlZnRCb3JkZXJSYWRpdXNJbnB1dCA9IG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS5udW1iZXIpXG4gICAgICAgICAgICAuc2V0TWluKDApXG4gICAgICAgICAgICAuZGlzYWJsZWQodGhpcy5zZWxlY3RBbGxDaGVja0JveC5jaGVja2VkKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudXBkYXRlQm9yZGVyUmFkaXVzKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICB9XG5cbiAgICBwcml2YXRlIGJ1aWxkQm9yZGVyUmFkaXVzVW5pdHNTZWxlY3RvcnMoKSB7XG4gICAgICAgIHRoaXMudG9wQm9yZGVyUmFkaXVzVW5pdFNlbGVjdG9yID0gbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKFVuaXRzRW51bSlcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnVwZGF0ZUJvcmRlclJhZGl1cylcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgIHRoaXMucmlnaHRCb3JkZXJSYWRpdXNVbml0U2VsZWN0b3IgPSBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIoVW5pdHNFbnVtKVxuICAgICAgICAgICAgLmRpc2FibGVkKHRoaXMuc2VsZWN0QWxsQ2hlY2tCb3guY2hlY2tlZClcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnVwZGF0ZUJvcmRlclJhZGl1cylcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgIHRoaXMuYm90dG9tQm9yZGVyUmFkaXVzVW5pdFNlbGVjdG9yID0gbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKFVuaXRzRW51bSlcbiAgICAgICAgICAgIC5kaXNhYmxlZCh0aGlzLnNlbGVjdEFsbENoZWNrQm94LmNoZWNrZWQpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVCb3JkZXJSYWRpdXMpXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICB0aGlzLmxlZnRCb3JkZXJSYWRpdXNVbml0U2VsZWN0b3IgPSBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIoVW5pdHNFbnVtKVxuICAgICAgICAgICAgLmRpc2FibGVkKHRoaXMuc2VsZWN0QWxsQ2hlY2tCb3guY2hlY2tlZClcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnVwZGF0ZUJvcmRlclJhZGl1cylcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjaGFuZ2VDb21wb25lbnRzU3RhdHVzICgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0QWxsQ2hlY2tCb3guY2hlY2tlZCkge1xuICAgICAgICAgICAgdGhpcy5yaWdodEJvcmRlclN0eWxlU2VsZWN0b3IuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5ib3R0b21Cb3JkZXJTdHlsZVNlbGVjdG9yLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubGVmdEJvcmRlclN0eWxlU2VsZWN0b3IuZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICB0aGlzLnJpZ2h0Qm9yZGVyQ29sb3JJbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbUJvcmRlckNvbG9ySW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5sZWZ0Qm9yZGVyQ29sb3JJbnB1dC5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIHRoaXMucmlnaHRCb3JkZXJXaWR0aElucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tQm9yZGVyV2lkdGhJbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmxlZnRCb3JkZXJXaWR0aElucHV0LmRpc2FibGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgdGhpcy5yaWdodEJvcmRlcldpZHRoVW5pdFNlbGVjdG9yLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tQm9yZGVyV2lkdGhVbml0U2VsZWN0b3IuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5sZWZ0Qm9yZGVyV2lkdGhVbml0U2VsZWN0b3IuZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICB0aGlzLnJpZ2h0Qm9yZGVyUmFkaXVzSW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5ib3R0b21Cb3JkZXJSYWRpdXNJbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmxlZnRCb3JkZXJSYWRpdXNJbnB1dC5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIHRoaXMucmlnaHRCb3JkZXJSYWRpdXNVbml0U2VsZWN0b3IuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5ib3R0b21Cb3JkZXJSYWRpdXNVbml0U2VsZWN0b3IuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5sZWZ0Qm9yZGVyUmFkaXVzVW5pdFNlbGVjdG9yLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmlnaHRCb3JkZXJTdHlsZVNlbGVjdG9yLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbUJvcmRlclN0eWxlU2VsZWN0b3IuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubGVmdEJvcmRlclN0eWxlU2VsZWN0b3IuZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgdGhpcy5yaWdodEJvcmRlckNvbG9ySW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tQm9yZGVyQ29sb3JJbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5sZWZ0Qm9yZGVyQ29sb3JJbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICB0aGlzLnJpZ2h0Qm9yZGVyV2lkdGhJbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5ib3R0b21Cb3JkZXJXaWR0aElucHV0LmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmxlZnRCb3JkZXJXaWR0aElucHV0LmRpc2FibGVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIHRoaXMucmlnaHRCb3JkZXJXaWR0aFVuaXRTZWxlY3Rvci5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5ib3R0b21Cb3JkZXJXaWR0aFVuaXRTZWxlY3Rvci5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5sZWZ0Qm9yZGVyV2lkdGhVbml0U2VsZWN0b3IuZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgdGhpcy5yaWdodEJvcmRlclJhZGl1c0lucHV0LmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbUJvcmRlclJhZGl1c0lucHV0LmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmxlZnRCb3JkZXJSYWRpdXNJbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICB0aGlzLnJpZ2h0Qm9yZGVyUmFkaXVzVW5pdFNlbGVjdG9yLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbUJvcmRlclJhZGl1c1VuaXRTZWxlY3Rvci5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5sZWZ0Qm9yZGVyUmFkaXVzVW5pdFNlbGVjdG9yLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEJvcmRlclZhbHVlc0FjY29yZGluZ1RvQ2xhc3MoKSB7XG4gICAgICAgIHRoaXMuc2V0Qm9yZGVyQ29sb3JWYWx1ZXNBY2NvcmRpbmdUb0NsYXNzKCk7XG4gICAgICAgIHRoaXMuc2V0Qm9yZGVyU3R5bGVWYWx1ZXNBY2NvcmRpbmdUb0NsYXNzKCk7XG4gICAgICAgIHRoaXMuc2V0Qm9yZGVyV2lkdGhWYWx1ZXNBY2NvcmRpbmdUb0NsYXNzKCk7XG4gICAgICAgIHRoaXMuc2V0Qm9yZGVyUmFkaXVzVmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0Qm9yZGVyQ29sb3JWYWx1ZXNBY2NvcmRpbmdUb0NsYXNzKCkge1xuICAgICAgICBjb25zdCB7dG9wLCByaWdodCwgYm90dG9tLCBsZWZ0fSA9IHRoaXMuZ2V0Q3VycmVudEJvcmRlckNvbG9yKCk7XG4gICAgICAgIHRoaXMudG9wQm9yZGVyQ29sb3JJbnB1dC52YWx1ZSA9IHRvcDtcbiAgICAgICAgdGhpcy5yaWdodEJvcmRlckNvbG9ySW5wdXQudmFsdWUgPSByaWdodDtcbiAgICAgICAgdGhpcy5ib3R0b21Cb3JkZXJDb2xvcklucHV0LnZhbHVlID0gYm90dG9tO1xuICAgICAgICB0aGlzLmxlZnRCb3JkZXJDb2xvcklucHV0LnZhbHVlID0gbGVmdDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEJvcmRlclN0eWxlVmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpIHtcbiAgICAgICAgY29uc3Qge3RvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdH0gPSB0aGlzLmdldEN1cnJlbnRCb3JkZXJTdHlsZSgpO1xuICAgICAgICB0aGlzLnRvcEJvcmRlclN0eWxlU2VsZWN0b3IudmFsdWUgPSB0b3A7XG4gICAgICAgIHRoaXMucmlnaHRCb3JkZXJTdHlsZVNlbGVjdG9yLnZhbHVlID0gcmlnaHQ7XG4gICAgICAgIHRoaXMuYm90dG9tQm9yZGVyU3R5bGVTZWxlY3Rvci52YWx1ZSA9IGJvdHRvbTtcbiAgICAgICAgdGhpcy5sZWZ0Qm9yZGVyU3R5bGVTZWxlY3Rvci52YWx1ZSA9IGxlZnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRCb3JkZXJXaWR0aFZhbHVlc0FjY29yZGluZ1RvQ2xhc3MoKSB7XG4gICAgICAgIGNvbnN0IHt0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnR9ID0gdGhpcy5nZXRDdXJyZW50Qm9yZGVyV2lkdGgoKTtcbiAgICAgICAgdGhpcy50b3BCb3JkZXJXaWR0aElucHV0LnZhbHVlID0gYCR7cGFyc2VJbnQodG9wKX1gO1xuICAgICAgICB0aGlzLnJpZ2h0Qm9yZGVyV2lkdGhJbnB1dC52YWx1ZSA9IGAke3BhcnNlSW50KHJpZ2h0KX1gO1xuICAgICAgICB0aGlzLmJvdHRvbUJvcmRlcldpZHRoSW5wdXQudmFsdWUgPSBgJHtwYXJzZUludChib3R0b20pfWA7XG4gICAgICAgIHRoaXMubGVmdEJvcmRlcldpZHRoSW5wdXQudmFsdWUgPSBgJHtwYXJzZUludChsZWZ0KX1gO1xuXG4gICAgICAgIHRoaXMudG9wQm9yZGVyV2lkdGhVbml0U2VsZWN0b3IudmFsdWUgPSBnZXRVbml0KHRvcCk7XG4gICAgICAgIHRoaXMucmlnaHRCb3JkZXJXaWR0aFVuaXRTZWxlY3Rvci52YWx1ZSA9IGdldFVuaXQocmlnaHQpO1xuICAgICAgICB0aGlzLmJvdHRvbUJvcmRlcldpZHRoVW5pdFNlbGVjdG9yLnZhbHVlID0gZ2V0VW5pdChib3R0b20pO1xuICAgICAgICB0aGlzLmxlZnRCb3JkZXJXaWR0aFVuaXRTZWxlY3Rvci52YWx1ZSA9IGdldFVuaXQobGVmdCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRCb3JkZXJSYWRpdXNWYWx1ZXNBY2NvcmRpbmdUb0NsYXNzKCkge1xuICAgICAgICBjb25zdCB7dG9wLCByaWdodCwgYm90dG9tLCBsZWZ0fSA9IHRoaXMuZ2V0Q3VycmVudEJvcmRlclJhZGl1cygpO1xuICAgICAgICB0aGlzLnRvcEJvcmRlclJhZGl1c0lucHV0LnZhbHVlID0gYCR7cGFyc2VJbnQodG9wKX1gO1xuICAgICAgICB0aGlzLnJpZ2h0Qm9yZGVyUmFkaXVzSW5wdXQudmFsdWUgPSBgJHtwYXJzZUludChyaWdodCl9YDtcbiAgICAgICAgdGhpcy5ib3R0b21Cb3JkZXJSYWRpdXNJbnB1dC52YWx1ZSA9IGAke3BhcnNlSW50KGJvdHRvbSl9YDtcbiAgICAgICAgdGhpcy5sZWZ0Qm9yZGVyUmFkaXVzSW5wdXQudmFsdWUgPSBgJHtwYXJzZUludChsZWZ0KX1gO1xuXG4gICAgICAgIHRoaXMudG9wQm9yZGVyUmFkaXVzVW5pdFNlbGVjdG9yLnZhbHVlID0gZ2V0VW5pdCh0b3ApO1xuICAgICAgICB0aGlzLnJpZ2h0Qm9yZGVyUmFkaXVzVW5pdFNlbGVjdG9yLnZhbHVlID0gZ2V0VW5pdChyaWdodCk7XG4gICAgICAgIHRoaXMuYm90dG9tQm9yZGVyUmFkaXVzVW5pdFNlbGVjdG9yLnZhbHVlID0gZ2V0VW5pdChib3R0b20pO1xuICAgICAgICB0aGlzLmxlZnRCb3JkZXJSYWRpdXNVbml0U2VsZWN0b3IudmFsdWUgPSBnZXRVbml0KGxlZnQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlQm9yZGVyU3R5bGVQcm9wZXJ0eSgpIHtcbiAgICAgICAgbGV0IHt0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnR9ID0gdGhpcy5nZXRDdXJyZW50Qm9yZGVyU3R5bGUoKTtcblxuICAgICAgICBpZiAodGhpcy5zZWxlY3RBbGxDaGVja0JveC5jaGVja2VkKSB7XG4gICAgICAgICAgICB0b3AgPSB0aGlzLnRvcEJvcmRlclN0eWxlU2VsZWN0b3IudmFsdWU7XG4gICAgICAgICAgICByaWdodCA9IHRvcDtcbiAgICAgICAgICAgIGJvdHRvbSA9IHRvcDtcbiAgICAgICAgICAgIGxlZnQgPSB0b3A7XG5cbiAgICAgICAgICAgIHRoaXMucmlnaHRCb3JkZXJTdHlsZVNlbGVjdG9yLnZhbHVlID0gdGhpcy50b3BCb3JkZXJTdHlsZVNlbGVjdG9yLnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ib3R0b21Cb3JkZXJTdHlsZVNlbGVjdG9yLnZhbHVlID0gdGhpcy50b3BCb3JkZXJTdHlsZVNlbGVjdG9yLnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5sZWZ0Qm9yZGVyU3R5bGVTZWxlY3Rvci52YWx1ZSA9IHRoaXMudG9wQm9yZGVyU3R5bGVTZWxlY3Rvci52YWx1ZTtcblxuICAgICAgICAgICAgaWYodG9wID09PSBCb3JkZXJTdHlsZUVudW0ubm9uZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRCb3JkZXJQcm9wZXJ0eSgnYm9yZGVyLXN0eWxlJywgJ2FsbCcpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRCb3JkZXJQcm9wZXJ0eSgnYm9yZGVyLWNvbG9yJywgJ2FsbCcpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRCb3JkZXJQcm9wZXJ0eSgnYm9yZGVyLXdpZHRoJywgJ2FsbCcpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRCb3JkZXJQcm9wZXJ0eSgnYm9yZGVyLXJhZGl1cycsICdhbGwnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0Qm9yZGVyUHJvcGVydHkoJ2JvcmRlci1pbWFnZScsICdhbGwnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0b3AgPSB0aGlzLnRvcEJvcmRlclN0eWxlU2VsZWN0b3IudmFsdWU7XG4gICAgICAgICAgICByaWdodCA9IHRoaXMucmlnaHRCb3JkZXJTdHlsZVNlbGVjdG9yLnZhbHVlO1xuICAgICAgICAgICAgYm90dG9tID0gdGhpcy5ib3R0b21Cb3JkZXJTdHlsZVNlbGVjdG9yLnZhbHVlO1xuICAgICAgICAgICAgbGVmdCA9IHRoaXMubGVmdEJvcmRlclN0eWxlU2VsZWN0b3IudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydib3JkZXItc3R5bGUnXSA9IFt0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnRdLmpvaW4oJyAnKVxuICAgIH1cblxuICAgIHByaXZhdGUgcmVzZXRCb3JkZXJQcm9wZXJ0eShcbiAgICAgICAgcHJvcGVydHk6ICdib3JkZXItc3R5bGUnIHwgJ2JvcmRlci1jb2xvcicgfCAnYm9yZGVyLXdpZHRoJyB8ICdib3JkZXItcmFkaXVzJyB8ICdib3JkZXItaW1hZ2UnLFxuICAgICAgICBwb3NpdGlvbjogJ3RvcCcgfCAncmlnaHQnIHwgJ2JvdHRvbScgfCAnbGVmdCcgfCAnYWxsJ1xuICAgICkge1xuICAgICAgICBjb25zdCBzdHlsZSA9IHBvc2l0aW9uID09PSAnYWxsJyA/IHByb3BlcnR5IDogYCR7cHJvcGVydHl9LSR7cG9zaXRpb259YDtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFtzdHlsZV0gPSAnJztcblxuICAgICAgICBpZihwcm9wZXJ0eSA9PT0gJ2JvcmRlci1zdHlsZScpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Qm9yZGVyU3R5bGVWYWx1ZXNBY2NvcmRpbmdUb0NsYXNzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZihwcm9wZXJ0eSA9PT0gJ2JvcmRlci1jb2xvcicpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Qm9yZGVyQ29sb3JWYWx1ZXNBY2NvcmRpbmdUb0NsYXNzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZihwcm9wZXJ0eSA9PT0gJ2JvcmRlci13aWR0aCcpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Qm9yZGVyV2lkdGhWYWx1ZXNBY2NvcmRpbmdUb0NsYXNzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZihwcm9wZXJ0eSA9PT0gJ2JvcmRlci1yYWRpdXMnKSB7XG4gICAgICAgICAgICB0aGlzLnNldEJvcmRlclJhZGl1c1ZhbHVlc0FjY29yZGluZ1RvQ2xhc3MoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlQm9yZGVyQ29sb3IoKSB7XG4gICAgICAgIGxldCB7dG9wLCByaWdodCwgYm90dG9tLCBsZWZ0fSA9IHRoaXMuZ2V0Q3VycmVudEJvcmRlckNvbG9yKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0QWxsQ2hlY2tCb3guY2hlY2tlZCkge1xuICAgICAgICAgICAgdG9wID0gdGhpcy50b3BCb3JkZXJDb2xvcklucHV0LnZhbHVlO1xuICAgICAgICAgICAgcmlnaHQgPSB0b3A7XG4gICAgICAgICAgICBib3R0b20gPSB0b3A7XG4gICAgICAgICAgICBsZWZ0ID0gdG9wO1xuXG4gICAgICAgICAgICB0aGlzLnJpZ2h0Qm9yZGVyQ29sb3JJbnB1dC52YWx1ZSA9IHRoaXMudG9wQm9yZGVyQ29sb3JJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tQm9yZGVyQ29sb3JJbnB1dC52YWx1ZSA9IHRoaXMudG9wQm9yZGVyQ29sb3JJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMubGVmdEJvcmRlckNvbG9ySW5wdXQudmFsdWUgPSB0aGlzLnRvcEJvcmRlckNvbG9ySW5wdXQudmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0b3AgPSB0aGlzLnRvcEJvcmRlckNvbG9ySW5wdXQudmFsdWU7XG4gICAgICAgICAgICByaWdodCA9IHRoaXMucmlnaHRCb3JkZXJDb2xvcklucHV0LnZhbHVlO1xuICAgICAgICAgICAgYm90dG9tID0gdGhpcy5ib3R0b21Cb3JkZXJDb2xvcklucHV0LnZhbHVlO1xuICAgICAgICAgICAgbGVmdCA9IHRoaXMubGVmdEJvcmRlckNvbG9ySW5wdXQudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydib3JkZXItY29sb3InXSA9IFt0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnRdLmpvaW4oJyAnKVxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlQm9yZGVyV2lkdGgoKSB7XG4gICAgICAgIGxldCB7dG9wLCByaWdodCwgYm90dG9tLCBsZWZ0fSA9IHRoaXMuZ2V0Q3VycmVudEJvcmRlcldpZHRoKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0QWxsQ2hlY2tCb3guY2hlY2tlZCkge1xuICAgICAgICAgICAgaWYocGFyc2VJbnQodGhpcy50b3BCb3JkZXJXaWR0aElucHV0LnZhbHVlKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRCb3JkZXJQcm9wZXJ0eSgnYm9yZGVyLXdpZHRoJywgJ2FsbCcpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdG9wID0gYCR7dGhpcy50b3BCb3JkZXJXaWR0aElucHV0LnZhbHVlfSR7dGhpcy50b3BCb3JkZXJXaWR0aFVuaXRTZWxlY3Rvci52YWx1ZX1gO1xuICAgICAgICAgICAgcmlnaHQgPSB0b3A7XG4gICAgICAgICAgICBib3R0b20gPSB0b3A7XG4gICAgICAgICAgICBsZWZ0ID0gdG9wO1xuXG4gICAgICAgICAgICB0aGlzLnJpZ2h0Qm9yZGVyV2lkdGhJbnB1dC52YWx1ZSA9IHRoaXMudG9wQm9yZGVyV2lkdGhJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tQm9yZGVyV2lkdGhJbnB1dC52YWx1ZSA9IHRoaXMudG9wQm9yZGVyV2lkdGhJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMubGVmdEJvcmRlcldpZHRoSW5wdXQudmFsdWUgPSB0aGlzLnRvcEJvcmRlcldpZHRoSW5wdXQudmFsdWU7XG5cbiAgICAgICAgICAgIHRoaXMucmlnaHRCb3JkZXJXaWR0aFVuaXRTZWxlY3Rvci52YWx1ZSA9IHRoaXMudG9wQm9yZGVyV2lkdGhVbml0U2VsZWN0b3IudmFsdWU7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbUJvcmRlcldpZHRoVW5pdFNlbGVjdG9yLnZhbHVlID0gdGhpcy50b3BCb3JkZXJXaWR0aFVuaXRTZWxlY3Rvci52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMubGVmdEJvcmRlcldpZHRoVW5pdFNlbGVjdG9yLnZhbHVlID0gdGhpcy50b3BCb3JkZXJXaWR0aFVuaXRTZWxlY3Rvci52YWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRvcCA9IGAke3RoaXMudG9wQm9yZGVyV2lkdGhJbnB1dC52YWx1ZX0ke3RoaXMudG9wQm9yZGVyV2lkdGhVbml0U2VsZWN0b3IudmFsdWV9YDtcbiAgICAgICAgICAgIHJpZ2h0ID0gYCR7dGhpcy5yaWdodEJvcmRlcldpZHRoSW5wdXQudmFsdWV9JHt0aGlzLnJpZ2h0Qm9yZGVyV2lkdGhVbml0U2VsZWN0b3IudmFsdWV9YDtcbiAgICAgICAgICAgIGJvdHRvbSA9IGAke3RoaXMuYm90dG9tQm9yZGVyV2lkdGhJbnB1dC52YWx1ZX0ke3RoaXMuYm90dG9tQm9yZGVyV2lkdGhVbml0U2VsZWN0b3IudmFsdWV9YDtcbiAgICAgICAgICAgIGxlZnQgPSBgJHt0aGlzLmxlZnRCb3JkZXJXaWR0aElucHV0LnZhbHVlfSR7dGhpcy5sZWZ0Qm9yZGVyV2lkdGhVbml0U2VsZWN0b3IudmFsdWV9YDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydib3JkZXItd2lkdGgnXSA9IFt0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnRdLmpvaW4oJyAnKVxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlQm9yZGVyUmFkaXVzKCkge1xuICAgICAgICBsZXQge3RvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdH0gPSB0aGlzLmdldEN1cnJlbnRCb3JkZXJSYWRpdXMoKTtcblxuICAgICAgICBpZiAodGhpcy5zZWxlY3RBbGxDaGVja0JveC5jaGVja2VkKSB7XG4gICAgICAgICAgICBpZihwYXJzZUludCh0aGlzLnRvcEJvcmRlclJhZGl1c0lucHV0LnZhbHVlKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRCb3JkZXJQcm9wZXJ0eSgnYm9yZGVyLXJhZGl1cycsICdhbGwnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRvcCA9IGAke3RoaXMudG9wQm9yZGVyUmFkaXVzSW5wdXQudmFsdWV9JHt0aGlzLnRvcEJvcmRlclJhZGl1c1VuaXRTZWxlY3Rvci52YWx1ZX1gO1xuICAgICAgICAgICAgcmlnaHQgPSB0b3A7XG4gICAgICAgICAgICBib3R0b20gPSB0b3A7XG4gICAgICAgICAgICBsZWZ0ID0gdG9wO1xuXG4gICAgICAgICAgICB0aGlzLnJpZ2h0Qm9yZGVyUmFkaXVzSW5wdXQudmFsdWUgPSB0aGlzLnRvcEJvcmRlclJhZGl1c0lucHV0LnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ib3R0b21Cb3JkZXJSYWRpdXNJbnB1dC52YWx1ZSA9IHRoaXMudG9wQm9yZGVyUmFkaXVzSW5wdXQudmFsdWU7XG4gICAgICAgICAgICB0aGlzLmxlZnRCb3JkZXJSYWRpdXNJbnB1dC52YWx1ZSA9IHRoaXMudG9wQm9yZGVyUmFkaXVzSW5wdXQudmFsdWU7XG5cbiAgICAgICAgICAgIHRoaXMucmlnaHRCb3JkZXJSYWRpdXNVbml0U2VsZWN0b3IudmFsdWUgPSB0aGlzLnRvcEJvcmRlclJhZGl1c1VuaXRTZWxlY3Rvci52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tQm9yZGVyUmFkaXVzVW5pdFNlbGVjdG9yLnZhbHVlID0gdGhpcy50b3BCb3JkZXJSYWRpdXNVbml0U2VsZWN0b3IudmFsdWU7XG4gICAgICAgICAgICB0aGlzLmxlZnRCb3JkZXJSYWRpdXNVbml0U2VsZWN0b3IudmFsdWUgPSB0aGlzLnRvcEJvcmRlclJhZGl1c1VuaXRTZWxlY3Rvci52YWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRvcCA9IGAke3RoaXMudG9wQm9yZGVyUmFkaXVzSW5wdXQudmFsdWV9JHt0aGlzLnRvcEJvcmRlclJhZGl1c1VuaXRTZWxlY3Rvci52YWx1ZX1gO1xuICAgICAgICAgICAgcmlnaHQgPSBgJHt0aGlzLnJpZ2h0Qm9yZGVyUmFkaXVzSW5wdXQudmFsdWV9JHt0aGlzLnJpZ2h0Qm9yZGVyUmFkaXVzVW5pdFNlbGVjdG9yLnZhbHVlfWA7XG4gICAgICAgICAgICBib3R0b20gPSBgJHt0aGlzLmJvdHRvbUJvcmRlclJhZGl1c0lucHV0LnZhbHVlfSR7dGhpcy5ib3R0b21Cb3JkZXJSYWRpdXNVbml0U2VsZWN0b3IudmFsdWV9YDtcbiAgICAgICAgICAgIGxlZnQgPSBgJHt0aGlzLmxlZnRCb3JkZXJSYWRpdXNJbnB1dC52YWx1ZX0ke3RoaXMubGVmdEJvcmRlclJhZGl1c1VuaXRTZWxlY3Rvci52YWx1ZX1gO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2JvcmRlci1yYWRpdXMnXSA9IFt0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnRdLmpvaW4oJyAnKVxuICAgIH1cblxuICAgIHByaXZhdGUgdW5pZmllZEJvcmRlclByb3BlcnRpZXMoKSA6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBhbGxFcXVhbCA9IFtdO1xuICAgICAgICBhbGxFcXVhbC5wdXNoKHRoaXMuZ2V0Q3VycmVudEJvcmRlclN0eWxlKCkuYWxsRXF1YWwpXG4gICAgICAgIGFsbEVxdWFsLnB1c2godGhpcy5nZXRDdXJyZW50Qm9yZGVyQ29sb3IoKS5hbGxFcXVhbClcbiAgICAgICAgYWxsRXF1YWwucHVzaCh0aGlzLmdldEN1cnJlbnRCb3JkZXJSYWRpdXMoKS5hbGxFcXVhbClcbiAgICAgICAgYWxsRXF1YWwucHVzaCh0aGlzLmdldEN1cnJlbnRCb3JkZXJTdHlsZSgpLmFsbEVxdWFsKVxuICAgICAgICBhbGxFcXVhbC5wdXNoKHRoaXMuZ2V0Q3VycmVudEJvcmRlcldpZHRoKCkuYWxsRXF1YWwpXG5cbiAgICAgICAgaWYoYWxsRXF1YWwuZmluZCgoZWwpID0+IGVsID09PSBmYWxzZSkgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRDdXJyZW50Qm9yZGVyU3R5bGUoKTogU3R5bGVzUmV0dXJuT2JqZWN0SW50ZXJmYWNlIHtcbiAgICAgICAgY29uc3QgdG9wID0gdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYm9yZGVyLXRvcC1zdHlsZSddO1xuICAgICAgICBjb25zdCByaWdodCA9IHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2JvcmRlci1yaWdodC1zdHlsZSddO1xuICAgICAgICBjb25zdCBib3R0b20gPSB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydib3JkZXItYm90dG9tLXN0eWxlJ107XG4gICAgICAgIGNvbnN0IGxlZnQgPSB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydib3JkZXItbGVmdC1zdHlsZSddO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0b3A6IHRvcCA/IHRvcCA6ICdub25lJyxcbiAgICAgICAgICAgIHJpZ2h0OiByaWdodCA/IHJpZ2h0IDogJ25vbmUnLFxuICAgICAgICAgICAgYm90dG9tOiBib3R0b20gPyBib3R0b20gOiAnbm9uZScsXG4gICAgICAgICAgICBsZWZ0OiBsZWZ0ID8gbGVmdCA6ICdub25lJyxcbiAgICAgICAgICAgIGFsbEVxdWFsOiB0b3AgPT09IHJpZ2h0ICYmIHRvcCA9PT0gYm90dG9tICYmIHRvcCA9PT0gbGVmdCxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEN1cnJlbnRCb3JkZXJDb2xvcigpOiBTdHlsZXNSZXR1cm5PYmplY3RJbnRlcmZhY2Uge1xuICAgICAgICBjb25zdCB0b3AgPSB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydib3JkZXItdG9wLWNvbG9yJ107XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYm9yZGVyLXJpZ2h0LWNvbG9yJ107XG4gICAgICAgIGNvbnN0IGJvdHRvbSA9IHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2JvcmRlci1ib3R0b20tY29sb3InXTtcbiAgICAgICAgY29uc3QgbGVmdCA9IHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2JvcmRlci1sZWZ0LWNvbG9yJ107XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRvcDogY29sb3JUb0hleCh0b3ApLFxuICAgICAgICAgICAgcmlnaHQ6IGNvbG9yVG9IZXgocmlnaHQpLFxuICAgICAgICAgICAgYm90dG9tOiBjb2xvclRvSGV4KGJvdHRvbSksXG4gICAgICAgICAgICBsZWZ0OiBjb2xvclRvSGV4KGxlZnQpLFxuICAgICAgICAgICAgYWxsRXF1YWw6IHRvcCA9PT0gcmlnaHQgJiYgdG9wID09PSBib3R0b20gJiYgdG9wID09PSBsZWZ0LFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0Q3VycmVudEJvcmRlcldpZHRoKCk6IFN0eWxlc1JldHVybk9iamVjdEludGVyZmFjZSB7XG4gICAgICAgIGNvbnN0IHRvcCA9IHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2JvcmRlci10b3Atd2lkdGgnXTtcbiAgICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydib3JkZXItcmlnaHQtd2lkdGgnXTtcbiAgICAgICAgY29uc3QgYm90dG9tID0gdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYm9yZGVyLWJvdHRvbS13aWR0aCddO1xuICAgICAgICBjb25zdCBsZWZ0ID0gdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYm9yZGVyLWxlZnQtd2lkdGgnXTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdG9wOiB0b3AgPyB0b3AgOiAnMHB4JyxcbiAgICAgICAgICAgIHJpZ2h0OiByaWdodCA/IHJpZ2h0IDogJzBweCcsXG4gICAgICAgICAgICBib3R0b206IGJvdHRvbSA/IGJvdHRvbSA6ICcwcHgnLFxuICAgICAgICAgICAgbGVmdDogbGVmdCA/IGxlZnQgOiAnMHB4JyxcbiAgICAgICAgICAgIGFsbEVxdWFsOiB0b3AgPT09IHJpZ2h0ICYmIHRvcCA9PT0gYm90dG9tICYmIHRvcCA9PT0gbGVmdCxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEN1cnJlbnRCb3JkZXJSYWRpdXMoKTogU3R5bGVzUmV0dXJuT2JqZWN0SW50ZXJmYWNlIHtcbiAgICAgICAgY29uc3QgdG9wID0gdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cyddO1xuICAgICAgICBjb25zdCByaWdodCA9IHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2JvcmRlci10b3AtcmlnaHQtcmFkaXVzJ107XG4gICAgICAgIGNvbnN0IGJvdHRvbSA9IHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzJ107XG4gICAgICAgIGNvbnN0IGxlZnQgPSB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzJ107XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRvcDogdG9wID8gdG9wIDogJzBweCcsXG4gICAgICAgICAgICByaWdodDogcmlnaHQgPyByaWdodCA6ICcwcHgnLFxuICAgICAgICAgICAgYm90dG9tOiBib3R0b20gPyBib3R0b20gOiAnMHB4JyxcbiAgICAgICAgICAgIGxlZnQ6IGxlZnQgPyBsZWZ0IDogJzBweCcsXG4gICAgICAgICAgICBhbGxFcXVhbDogdG9wID09PSByaWdodCAmJiB0b3AgPT09IGJvdHRvbSAmJiB0b3AgPT09IGxlZnQsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHVibGljIGNsYXNzTmFtZVVwZGF0ZWQobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQgPSBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXMobmFtZSk7XG4gICAgICAgIHRoaXMuc2VsZWN0QWxsQ2hlY2tCb3guY2hlY2tlZCA9IHRoaXMudW5pZmllZEJvcmRlclByb3BlcnRpZXMoKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VDb21wb25lbnRzU3RhdHVzKCk7XG4gICAgICAgIHRoaXMuc2V0Qm9yZGVyVmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpO1xuICAgIH1cbn1cblxuaW50ZXJmYWNlIFN0eWxlc1JldHVybk9iamVjdEludGVyZmFjZSB7XG4gICAgdG9wOiBzdHJpbmcsXG4gICAgcmlnaHQ6IHN0cmluZyxcbiAgICBib3R0b206IHN0cmluZyxcbiAgICBsZWZ0OiBzdHJpbmcsXG4gICAgYWxsRXF1YWw6IGJvb2xlYW4sXG59XG4iLCJpbXBvcnQgQ2xhc3NDaGFuZ2VPYnNlcnZlckludGVyZmFjZSBmcm9tICcuLi9pbnRlcmZhY2VzL2NsYXNzLWNoYW5nZS1vYnNlcnZlci5pbnRlcmZhY2UnO1xuXG5pbXBvcnQgQ29udGFpbmVyQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvQ29udGFpbmVyQnVpbGRlcic7XG5pbXBvcnQgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL1NlbGVjdG9yRnJvbUVudW1CdWlsZGVyJztcbmltcG9ydCBMYWJlbEJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0xhYmVsQnVpbGRlcic7XG5pbXBvcnQgSW5wdXRCdWlsZGVyIGZyb20gJy4uL21vZGVscy9JbnB1dEJ1aWxkZXInO1xuXG5pbXBvcnQgQ3NzU3R5bGVTaGVldCBmcm9tICcuLi8uLi9jc3Mtc3R5bGVzaGVldC9jc3Mtc3R5bGVzaGVldCc7XG5pbXBvcnQgZ2V0VW5pdCBmcm9tICcuLi9mdW5jdGlvbnMvZ2V0LWNzcy11bml0JztcbmltcG9ydCBjb2xvclRvSGV4IGZyb20gJy4uL2Z1bmN0aW9ucy9yZ2ItdG8taGV4JztcbmltcG9ydCBUZXh0YXJlYUJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL1RleHRhcmVhQnVpbGRlcic7XG5cbmltcG9ydCB7IFN0eWxlTmFtZUVudW0gfSBmcm9tICcuLi9lbnVtcy9zdHlsZS1uYW1lLmVudW0nO1xuaW1wb3J0IHsgSW5wdXRUeXBlRW51bSB9IGZyb20gJy4uL2VudW1zL2lucHV0LXR5cGUuZW51bSc7XG5pbXBvcnQgeyBVbml0c0VudW0gfSBmcm9tICcuLi9lbnVtcy91bml0cy5lbnVtJztcbmltcG9ydCB7IEFsaWduRmxleEl0ZW1zRW51bSB9IGZyb20gJy4uL2VudW1zL2FsaWduLWZsZXgtaXRlbXMuZW51bSc7XG5pbXBvcnQgeyBGbGV4RGlyZWN0aW9uRW51bSB9IGZyb20gJy4uL2VudW1zL2ZsZXgtZGlyZWN0aW9uLmVudW0nO1xuaW1wb3J0IHsgRGlzcGxheVR5cGVzRW51bSB9IGZyb20gJy4uL2VudW1zL2Rpc3BsYXktdHlwZXMuZW51bSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm94U2hhZG93Q29tcG9uZW50IGltcGxlbWVudHMgQ2xhc3NDaGFuZ2VPYnNlcnZlckludGVyZmFjZSB7XG4gICAgcHJpdmF0ZSBkb21FbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBjb21wb25lbnRzQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcbiAgICBwcml2YXRlIHNoYWRvd0JveFR5cGVDb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgZG9tRWxlbWVudFN0eWxlU2hlZXQ6IENTU1N0eWxlRGVjbGFyYXRpb247XG5cbiAgICBwcml2YXRlIHNpbXBsZUJveFNoYWRvd0NoZWNrYm94OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHByaXZhdGUgYWR2YW5jZWRCb3hTaGFkb3dDaGVja2JveDogSFRNTElucHV0RWxlbWVudDtcblxuICAgIHByaXZhdGUgY29sb3JJbnNldENvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBjb2xvcklucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHByaXZhdGUgaW5zZXRTZWxlY3RvcjogSFRNTElucHV0RWxlbWVudDtcblxuICAgIHByaXZhdGUgaG9yaXpvbnRhbE9mZnNldENvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBob3Jpem9udGFsT2Zmc2V0SW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBob3Jpem9udGFsT2Zmc2V0VW5pdFNlbGVjdG9yOiBIVE1MU2VsZWN0RWxlbWVudDtcblxuICAgIHByaXZhdGUgdmVydGljYWxPZmZzZXRDb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgdmVydGljYWxPZmZzZXRJbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgICBwcml2YXRlIHZlcnRpY2FsT2Zmc2V0VW5pdFNlbGVjdG9yOiBIVE1MU2VsZWN0RWxlbWVudDtcblxuICAgIHByaXZhdGUgYmx1clJhZGl1c0NvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBibHVyUmFkaXVzSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBibHVyUmFkaXVzVW5pdFNlbGVjdG9yOiBIVE1MU2VsZWN0RWxlbWVudDtcblxuICAgIHByaXZhdGUgc3ByZWFkUmFkaXVzQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcbiAgICBwcml2YXRlIHNwcmVhZFJhZGl1c0lucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHByaXZhdGUgc3ByZWFkUmFkaXVzVW5pdFNlbGVjdG9yOiBIVE1MU2VsZWN0RWxlbWVudDtcblxuICAgIHByaXZhdGUgYWR2YW5jZWRFbmFibGVkID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIGFkdmFuY2VkU2hhZG93Qm94VGV4dEFyZWE6IEhUTUxUZXh0QXJlYUVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBhZHZhbmNlZFNoYWRvd0JveENvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG5cblxuICAgIGNvbnN0cnVjdG9yKGRvbUVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQgPSBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXModGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdFswXSk7XG4gICAgICAgIHRoaXMuZ2V0SW5pdGlhbFZhbHVlcygpO1xuICAgICAgICB0aGlzLmFkZENvbXBvbmVudHMoKTtcbiAgICAgICAgdGhpcy5zZXRCb3hTaGFkb3dWYWx1ZXNBY2NvcmRpbmdUb0NsYXNzKCk7XG4gICAgfVxuXG4gICAgZ2V0IGNvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkQ29tcG9uZW50cygpIHtcbiAgICAgICAgdGhpcy5idWlsZFNoYWRvd0JveFR5cGVDb250YWluZXIoKTtcbiAgICAgICAgdGhpcy5idWlsZEJhc2ljU2hhZG93Qm94Q29udGFpbmVycygpO1xuICAgICAgICB0aGlzLmJ1aWxkQWR2YW5jZWRTaGFkb3dCb3hDb250YWluZXIoKTtcbiAgICAgICAgdGhpcy5idWlsZENvbXBvbmVudHNDb250YWluZXIoKTtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmNvbXBvbmVudHNDb250YWluZXIpXG4gICAgICAgICAgICAuYnVpbGQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGJ1aWxkU2hhZG93Qm94VHlwZUNvbnRhaW5lcigpIHtcbiAgICAgICAgdGhpcy51cGRhdGVCb3hTaGFkb3dUeXBlID0gdGhpcy51cGRhdGVCb3hTaGFkb3dUeXBlLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5zaW1wbGVCb3hTaGFkb3dDaGVja2JveCA9IG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS5yYWRpbylcbiAgICAgICAgICAgIC5zZXROYW1lKCdzaGFkb3dUeXBlJylcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnVwZGF0ZUJveFNoYWRvd1R5cGUpXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIHRoaXMuYWR2YW5jZWRCb3hTaGFkb3dDaGVja2JveCA9IG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS5yYWRpbylcbiAgICAgICAgICAgIC5zZXROYW1lKCdzaGFkb3dUeXBlJylcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnVwZGF0ZUJveFNoYWRvd1R5cGUpXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIGlmKHRoaXMuYWR2YW5jZWRFbmFibGVkKSB7XG4gICAgICAgICAgICB0aGlzLmFkdmFuY2VkQm94U2hhZG93Q2hlY2tib3guY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNpbXBsZUJveFNoYWRvd0NoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zaGFkb3dCb3hUeXBlQ29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW1bJ2ZsZXgtZGlyZWN0aW9uJ10sIEZsZXhEaXJlY3Rpb25FbnVtLmNvbHVtbilcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydhbGlnbi1pdGVtcyddLCBBbGlnbkZsZXhJdGVtc0VudW0uc3RyZXRjaClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnU2ltcGxlIG9yIEFkdmFuY2VkIFNoYWRvdyBCb3gnKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnU2ltcGxlIC0+JylcbiAgICAgICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDNweCAwcHggMjBweCcpXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLnNpbXBsZUJveFNoYWRvd0NoZWNrYm94KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnQWR2YW5jZWQgLT4nKVxuICAgICAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggM3B4IDBweCAyMHB4JylcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuYWR2YW5jZWRCb3hTaGFkb3dDaGVja2JveClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICB9XG5cbiAgICBwcml2YXRlIGJ1aWxkQmFzaWNTaGFkb3dCb3hDb250YWluZXJzKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZUJhc2ljUHJvcGVydHkgPSB0aGlzLnVwZGF0ZUJhc2ljUHJvcGVydHkuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmNvbG9ySW5wdXQgPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0uY29sb3IpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLnVwZGF0ZUJhc2ljUHJvcGVydHkpXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIHRoaXMuaW5zZXRTZWxlY3RvciA9IG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS5jaGVja2JveClcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMudXBkYXRlQmFzaWNQcm9wZXJ0eSlcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgdGhpcy5ob3Jpem9udGFsT2Zmc2V0SW5wdXQgPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0ubnVtYmVyKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy51cGRhdGVCYXNpY1Byb3BlcnR5KVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICB0aGlzLmhvcml6b250YWxPZmZzZXRVbml0U2VsZWN0b3IgPSBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIoVW5pdHNFbnVtKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudXBkYXRlQmFzaWNQcm9wZXJ0eSlcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgdGhpcy52ZXJ0aWNhbE9mZnNldElucHV0ID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLm51bWJlcilcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMudXBkYXRlQmFzaWNQcm9wZXJ0eSlcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgdGhpcy52ZXJ0aWNhbE9mZnNldFVuaXRTZWxlY3RvciA9IG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihVbml0c0VudW0pXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVCYXNpY1Byb3BlcnR5KVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICB0aGlzLmJsdXJSYWRpdXNJbnB1dCA9IG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS5udW1iZXIpXG4gICAgICAgICAgICAuc2V0TWluKDApXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLnVwZGF0ZUJhc2ljUHJvcGVydHkpXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIHRoaXMuYmx1clJhZGl1c1VuaXRTZWxlY3RvciA9IG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihVbml0c0VudW0pXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVCYXNpY1Byb3BlcnR5KVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICB0aGlzLnNwcmVhZFJhZGl1c0lucHV0ID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLm51bWJlcilcbiAgICAgICAgICAgIC5zZXRNaW4oMClcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMudXBkYXRlQmFzaWNQcm9wZXJ0eSlcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgdGhpcy5zcHJlYWRSYWRpdXNVbml0U2VsZWN0b3IgPSBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIoVW5pdHNFbnVtKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudXBkYXRlQmFzaWNQcm9wZXJ0eSlcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgdGhpcy5jb2xvckluc2V0Q29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW1bJ2ZsZXgtZGlyZWN0aW9uJ10sIEZsZXhEaXJlY3Rpb25FbnVtLmNvbHVtbilcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydhbGlnbi1pdGVtcyddLCBBbGlnbkZsZXhJdGVtc0VudW0uc3RyZXRjaClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnSG9yaXpvbnRhbCBPZmZzZXQnKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmNvbG9ySW5wdXQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdJbnNldCAtPicpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAzcHggMHB4IDIwcHgnKVxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5pbnNldFNlbGVjdG9yKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIHRoaXMuaG9yaXpvbnRhbE9mZnNldENvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydmbGV4LWRpcmVjdGlvbiddLCBGbGV4RGlyZWN0aW9uRW51bS5jb2x1bW4pXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnYWxpZ24taXRlbXMnXSwgQWxpZ25GbGV4SXRlbXNFbnVtLnN0cmV0Y2gpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0hvcml6b250YWwgT2Zmc2V0JylcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5ob3Jpem9udGFsT2Zmc2V0SW5wdXQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuaG9yaXpvbnRhbE9mZnNldFVuaXRTZWxlY3RvcilcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICB0aGlzLnZlcnRpY2FsT2Zmc2V0Q29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW1bJ2ZsZXgtZGlyZWN0aW9uJ10sIEZsZXhEaXJlY3Rpb25FbnVtLmNvbHVtbilcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydhbGlnbi1pdGVtcyddLCBBbGlnbkZsZXhJdGVtc0VudW0uc3RyZXRjaClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnVmVydGljYWwgT2Zmc2V0JylcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy52ZXJ0aWNhbE9mZnNldElucHV0KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLnZlcnRpY2FsT2Zmc2V0VW5pdFNlbGVjdG9yKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIHRoaXMuYmx1clJhZGl1c0NvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydmbGV4LWRpcmVjdGlvbiddLCBGbGV4RGlyZWN0aW9uRW51bS5jb2x1bW4pXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnYWxpZ24taXRlbXMnXSwgQWxpZ25GbGV4SXRlbXNFbnVtLnN0cmV0Y2gpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0JsdXIgUmFkaXVzJylcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5ibHVyUmFkaXVzSW5wdXQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuYmx1clJhZGl1c1VuaXRTZWxlY3RvcilcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICB0aGlzLnNwcmVhZFJhZGl1c0NvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydmbGV4LWRpcmVjdGlvbiddLCBGbGV4RGlyZWN0aW9uRW51bS5jb2x1bW4pXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnYWxpZ24taXRlbXMnXSwgQWxpZ25GbGV4SXRlbXNFbnVtLnN0cmV0Y2gpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ1NwcmVhZCBSYWRpdXMnKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLnNwcmVhZFJhZGl1c0lucHV0KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLnNwcmVhZFJhZGl1c1VuaXRTZWxlY3RvcilcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICB9XG5cbiAgICBwcml2YXRlIGJ1aWxkQ29tcG9uZW50c0NvbnRhaW5lcigpIHtcbiAgICAgICAgaWYodGhpcy5hZHZhbmNlZEVuYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c0NvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydmbGV4LWRpcmVjdGlvbiddLCBGbGV4RGlyZWN0aW9uRW51bS5jb2x1bW4pXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnYWxpZ24taXRlbXMnXSwgQWxpZ25GbGV4SXRlbXNFbnVtLnN0cmV0Y2gpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5ib3JkZXIsICcxcHggc29saWQgIzRDQUY1MCcpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5wYWRkaW5nLCAnM3B4JylcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnQm94IFNoYWRvdycpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLnNoYWRvd0JveFR5cGVDb250YWluZXIpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5hZHZhbmNlZFNoYWRvd0JveENvbnRhaW5lcilcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNDb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnZmxleC1kaXJlY3Rpb24nXSwgRmxleERpcmVjdGlvbkVudW0uY29sdW1uKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW1bJ2FsaWduLWl0ZW1zJ10sIEFsaWduRmxleEl0ZW1zRW51bS5zdHJldGNoKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uYm9yZGVyLCAnMXB4IHNvbGlkICM0Q0FGNTAnKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ucGFkZGluZywgJzNweCcpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0JveCBTaGFkb3cnKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5zaGFkb3dCb3hUeXBlQ29udGFpbmVyKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuY29sb3JJbnNldENvbnRhaW5lcilcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmhvcml6b250YWxPZmZzZXRDb250YWluZXIpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy52ZXJ0aWNhbE9mZnNldENvbnRhaW5lcilcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmJsdXJSYWRpdXNDb250YWluZXIpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5zcHJlYWRSYWRpdXNDb250YWluZXIpXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBidWlsZEFkdmFuY2VkU2hhZG93Qm94Q29udGFpbmVyKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZUFkdmFuY2VkUHJvcGVydHkgPSB0aGlzLnVwZGF0ZUFkdmFuY2VkUHJvcGVydHkuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmFkdmFuY2VkU2hhZG93Qm94VGV4dEFyZWEgPSBuZXcgVGV4dGFyZWFCdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLnJlc2l6ZSwgJ3ZlcnRpY2FsJylcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMudXBkYXRlQWR2YW5jZWRQcm9wZXJ0eSlcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgdGhpcy5hZHZhbmNlZFNoYWRvd0JveENvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydmbGV4LWRpcmVjdGlvbiddLCBGbGV4RGlyZWN0aW9uRW51bS5jb2x1bW4pXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnYWxpZ24taXRlbXMnXSwgQWxpZ25GbGV4SXRlbXNFbnVtLnN0cmV0Y2gpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0FkdmFuY2VkIEJveCBTaGFkb3cnKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnZmxleC1kaXJlY3Rpb24nXSwgRmxleERpcmVjdGlvbkVudW0uY29sdW1uKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydhbGlnbi1pdGVtcyddLCBBbGlnbkZsZXhJdGVtc0VudW0uc3RyZXRjaClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5hZHZhbmNlZFNoYWRvd0JveFRleHRBcmVhKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgIH1cblxuICAgIHByaXZhdGUgc2V0Qm94U2hhZG93VmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpIHtcbiAgICAgICAgY29uc3QgaW5pdGlhbFZhbHVlcyA9IHRoaXMuZ2V0SW5pdGlhbFZhbHVlcygpO1xuXG4gICAgICAgIGlmIChpbml0aWFsVmFsdWVzLmluc2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zZXRTZWxlY3Rvci5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29sb3JJbnB1dC52YWx1ZSA9IGNvbG9yVG9IZXgoaW5pdGlhbFZhbHVlcy5jb2xvcik7XG4gICAgICAgIHRoaXMuaG9yaXpvbnRhbE9mZnNldElucHV0LnZhbHVlID0gYCR7cGFyc2VJbnQoaW5pdGlhbFZhbHVlcy5ob3Jpem9udGFsT2Zmc2V0KSB8fCAwfWA7XG4gICAgICAgIHRoaXMuaG9yaXpvbnRhbE9mZnNldFVuaXRTZWxlY3Rvci52YWx1ZSA9IGdldFVuaXQoaW5pdGlhbFZhbHVlcy5ob3Jpem9udGFsT2Zmc2V0KTtcbiAgICAgICAgdGhpcy52ZXJ0aWNhbE9mZnNldElucHV0LnZhbHVlID0gYCR7cGFyc2VJbnQoaW5pdGlhbFZhbHVlcy52ZXJ0aWNhbE9mZnNldCkgfHwgMH1gO1xuICAgICAgICB0aGlzLnZlcnRpY2FsT2Zmc2V0VW5pdFNlbGVjdG9yLnZhbHVlID0gZ2V0VW5pdChpbml0aWFsVmFsdWVzLnZlcnRpY2FsT2Zmc2V0KTtcbiAgICAgICAgdGhpcy5ibHVyUmFkaXVzSW5wdXQudmFsdWUgPSBgJHtwYXJzZUludChpbml0aWFsVmFsdWVzLmJsdXJSYWRpdXMpIHx8IDB9YDtcbiAgICAgICAgdGhpcy5ibHVyUmFkaXVzVW5pdFNlbGVjdG9yLnZhbHVlID0gZ2V0VW5pdChpbml0aWFsVmFsdWVzLmJsdXJSYWRpdXMpO1xuICAgICAgICB0aGlzLnNwcmVhZFJhZGl1c0lucHV0LnZhbHVlID0gYCR7cGFyc2VJbnQoaW5pdGlhbFZhbHVlcy5zcHJlYWRSYWRpdXMpIHx8IDB9YDtcbiAgICAgICAgdGhpcy5zcHJlYWRSYWRpdXNVbml0U2VsZWN0b3IudmFsdWUgPSBnZXRVbml0KGluaXRpYWxWYWx1ZXMuc3ByZWFkUmFkaXVzKTtcblxuICAgICAgICB0aGlzLmFkdmFuY2VkU2hhZG93Qm94VGV4dEFyZWEudmFsdWUgPSB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydib3gtc2hhZG93J107XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVCYXNpY1Byb3BlcnR5KCkge1xuICAgICAgICBpZiAodGhpcy5ob3Jpem9udGFsT2Zmc2V0SW5wdXQudmFsdWUgPT09ICcwJ1xuICAgICAgICAgICAgJiYgdGhpcy52ZXJ0aWNhbE9mZnNldElucHV0LnZhbHVlID09PSAnMCdcbiAgICAgICAgICAgICYmIHRoaXMuYmx1clJhZGl1c0lucHV0LnZhbHVlID09PSAnMCdcbiAgICAgICAgICAgICYmIHRoaXMuc3ByZWFkUmFkaXVzSW5wdXQudmFsdWUgPT09ICcwJ1xuICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2JveC1zaGFkb3cnXSA9ICcnO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaW5zZXQgPSB0aGlzLmluc2V0U2VsZWN0b3IuY2hlY2tlZCA/ICdpbnNldCcgOiAnJztcbiAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmNvbG9ySW5wdXQudmFsdWU7XG4gICAgICAgIGNvbnN0IGhvcml6b250YWxPZmZzZXQgPSB0aGlzLmhvcml6b250YWxPZmZzZXRJbnB1dC52YWx1ZSArIHRoaXMuaG9yaXpvbnRhbE9mZnNldFVuaXRTZWxlY3Rvci52YWx1ZTtcbiAgICAgICAgY29uc3QgdmVydGljYWxPZmZzZXQgPSB0aGlzLnZlcnRpY2FsT2Zmc2V0SW5wdXQudmFsdWUgKyB0aGlzLnZlcnRpY2FsT2Zmc2V0VW5pdFNlbGVjdG9yLnZhbHVlO1xuICAgICAgICBjb25zdCBibHVyUmFkaXVzID0gdGhpcy5ibHVyUmFkaXVzSW5wdXQudmFsdWUgKyB0aGlzLmJsdXJSYWRpdXNVbml0U2VsZWN0b3IudmFsdWU7XG4gICAgICAgIGNvbnN0IHNwcmVhZFJhZGl1cyA9IHRoaXMuc3ByZWFkUmFkaXVzSW5wdXQudmFsdWUgKyB0aGlzLnNwcmVhZFJhZGl1c1VuaXRTZWxlY3Rvci52YWx1ZTtcblxuICAgICAgICBjb25zdCBib3hTaGFkb3dWYWx1ZSA9IGAke2hvcml6b250YWxPZmZzZXR9ICR7dmVydGljYWxPZmZzZXR9ICR7Ymx1clJhZGl1c30gJHtzcHJlYWRSYWRpdXN9ICR7Y29sb3J9ICR7aW5zZXR9YFxuXG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2JveC1zaGFkb3cnXSA9IGJveFNoYWRvd1ZhbHVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlQWR2YW5jZWRQcm9wZXJ0eSgpIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYm94LXNoYWRvdyddID0gdGhpcy5hZHZhbmNlZFNoYWRvd0JveFRleHRBcmVhLnZhbHVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlQm94U2hhZG93VHlwZSgpIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYm94LXNoYWRvdyddID0gJyc7XG5cbiAgICAgICAgaWYgKHRoaXMuYWR2YW5jZWRCb3hTaGFkb3dDaGVja2JveC5jaGVja2VkKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNDb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5jb2xvckluc2V0Q29udGFpbmVyKTtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c0NvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLmhvcml6b250YWxPZmZzZXRDb250YWluZXIpO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMudmVydGljYWxPZmZzZXRDb250YWluZXIpO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuYmx1clJhZGl1c0NvbnRhaW5lcik7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNDb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5zcHJlYWRSYWRpdXNDb250YWluZXIpO1xuXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5hZHZhbmNlZFNoYWRvd0JveENvbnRhaW5lcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNDb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5hZHZhbmNlZFNoYWRvd0JveENvbnRhaW5lcik7XG5cbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbG9ySW5zZXRDb250YWluZXIpO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaG9yaXpvbnRhbE9mZnNldENvbnRhaW5lcik7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy52ZXJ0aWNhbE9mZnNldENvbnRhaW5lcik7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5ibHVyUmFkaXVzQ29udGFpbmVyKTtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnNwcmVhZFJhZGl1c0NvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEluaXRpYWxWYWx1ZXMoKSB7XG4gICAgICAgIGxldCBib3hTaGFkb3dTdHJpbmcgPSB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydib3gtc2hhZG93J107XG5cbiAgICAgICAgaWYoYm94U2hhZG93U3RyaW5nLnNwbGl0KCcsJykuZmlsdGVyKChlbGUpID0+IGVsZS5pbmNsdWRlcygncmdiJykpLmxlbmd0aCA+IDEpe1xuICAgICAgICAgICAgdGhpcy5hZHZhbmNlZEVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYoYm94U2hhZG93U3RyaW5nLnNwbGl0KCcsJykubGVuZ3RoID4gMSl7XG4gICAgICAgICAgICAgICAgdGhpcy5hZHZhbmNlZEVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNvbG9yO1xuXG4gICAgICAgIGlmIChib3hTaGFkb3dTdHJpbmcuaW5jbHVkZXMoJ3JnYicpKSB7XG4gICAgICAgICAgICBjb25zdCBpbml0aWFsSW5kZXhPZlJHQiA9IGJveFNoYWRvd1N0cmluZy5pbmRleE9mKCdyZ2InKTtcbiAgICAgICAgICAgIGNvbnN0IGZpbmFsSW5kZXhPZlJHQiA9IGJveFNoYWRvd1N0cmluZy5pbmRleE9mKCcpJylcblxuICAgICAgICAgICAgY29sb3IgPSBib3hTaGFkb3dTdHJpbmcuc2xpY2UoaW5pdGlhbEluZGV4T2ZSR0IsIGZpbmFsSW5kZXhPZlJHQiArIDEpXG5cbiAgICAgICAgICAgIGJveFNoYWRvd1N0cmluZyA9IGJveFNoYWRvd1N0cmluZy5yZXBsYWNlKGNvbG9yLCAnJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBib3hTaGFkb3dBcnIgPSBib3hTaGFkb3dTdHJpbmcuc3BsaXQoJyAnKTtcblxuICAgICAgICBjb25zdCBzaXplc0FyciA9IGJveFNoYWRvd0Fyci5maWx0ZXIoKGVsZSkgPT4gIWlzTmFOKHBhcnNlSW50KGVsZSkpKTtcblxuICAgICAgICBjb25zdCBpbnNldCA9IGJveFNoYWRvd0Fyci5maW5kKChlbGUpID0+IGVsZSA9PT0gJ2luc2V0JylcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29sb3IsXG4gICAgICAgICAgICBpbnNldCxcbiAgICAgICAgICAgIGhvcml6b250YWxPZmZzZXQ6IHNpemVzQXJyWzBdLFxuICAgICAgICAgICAgdmVydGljYWxPZmZzZXQ6IHNpemVzQXJyWzFdLFxuICAgICAgICAgICAgYmx1clJhZGl1czogc2l6ZXNBcnJbMl0sXG4gICAgICAgICAgICBzcHJlYWRSYWRpdXM6IHNpemVzQXJyWzNdLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGNsYXNzTmFtZVVwZGF0ZWQobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQgPSBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXMobmFtZSk7XG4gICAgICAgIHRoaXMuZ2V0SW5pdGlhbFZhbHVlcygpO1xuICAgICAgICB0aGlzLnNldEJveFNoYWRvd1ZhbHVlc0FjY29yZGluZ1RvQ2xhc3MoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQXJyYXlTZWxlY3RvckJvZHlJbnRlcmZhY2UgZnJvbSAnLi4vaW50ZXJmYWNlcy9zZWxlY3Rvci1mcm9tLWFycmF5LWJvZHkuaW50ZXJmYWNlJztcblxuaW1wb3J0IENsYXNzQ2hhbmdlUHVibGlzaGVyIGZyb20gJy4uL3B1Ymxpc2hlcnMvQ2xhc3NDaGFuZ2VQdWJsaXNoZXInO1xuaW1wb3J0IENzc1N0eWxlU2hlZXQgZnJvbSAnLi4vLi4vY3NzLXN0eWxlc2hlZXQvY3NzLXN0eWxlc2hlZXQnO1xuaW1wb3J0IFJhd0hUTUxDb25wb25lbnQgZnJvbSAnLi4vLi4vaHRtbC1jb21wb25lbnRzL1Jhd0hUTUxDb21wb25lbnQnO1xuXG5pbXBvcnQgQ29udGFpbmVyQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvQ29udGFpbmVyQnVpbGRlcic7XG5pbXBvcnQgTGFiZWxCdWlsZGVyIGZyb20gJy4uL21vZGVscy9MYWJlbEJ1aWxkZXInO1xuaW1wb3J0IFNlbGVjdG9yRnJvbUFycmF5QnVpbGRlciBmcm9tICcuLi9tb2RlbHMvU2VsZWN0b3JGcm9tQXJyYXlCdWlsZGVyJztcbmltcG9ydCBJbnB1dEJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0lucHV0QnVpbGRlcic7XG5pbXBvcnQgQnV0dG9uQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvQnV0dG9uQnVpbGRlcic7XG5pbXBvcnQgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL1NlbGVjdG9yRnJvbUVudW1CdWlsZGVyJztcblxuaW1wb3J0IHsgU3R5bGVOYW1lRW51bSB9IGZyb20gJy4uL2VudW1zL3N0eWxlLW5hbWUuZW51bSc7XG5pbXBvcnQgeyBEaXNwbGF5VHlwZXNFbnVtIH0gZnJvbSAnLi4vZW51bXMvZGlzcGxheS10eXBlcy5lbnVtJztcbmltcG9ydCB7IEZsZXhEaXJlY3Rpb25FbnVtIH0gZnJvbSAnLi4vZW51bXMvZmxleC1kaXJlY3Rpb24uZW51bSc7XG5pbXBvcnQgeyBJbnB1dFR5cGVFbnVtIH0gZnJvbSAnLi4vZW51bXMvaW5wdXQtdHlwZS5lbnVtJztcbmltcG9ydCB7IEdlbmVyYWxQc2V1ZG9jbGFzc0VudW0gfSBmcm9tICcuLi9lbnVtcy9nZW5lcmFsLXBzZXVkb2NsYXNzLmVudW0nO1xuXG4vLyBUT0RPOiB2ZXIgZXN0aWxvcyBlc3BlY2lmaWNvcyBwYXJhIGxvcyBhbmNvciBlbGVtZW50cyAobGlua3MpOlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cbi8vIGh0dHBzOi8vd3d3LmFwcmVuZGVyYXByb2dyYW1hci5jb20vaW5kZXgucGhwP29wdGlvbj1jb21fY29udGVudCZ2aWV3PWFydGljbGUmaWQ9NzUyOnBzZXVkb2NsYXNlcy1jc3MtbGluay12aXNpdGVkLWZvY3VzLWhvdmVyLXktYWN0aXZlLWVzdGlsb3MteS1lZmVjdG9zLWVuLWxpbmtzLXByb3BpZWRhZC1vdXRsaW5lLWN1MDEwNDdkJmNhdGlkPTc1Jkl0ZW1pZD0yMDNcblxuLy8gVE9ETzogZmFsdGEgZWwgZGVsZXRlIGNsYXNzIGRlZmluZXRseS4gRXMgZGVjaXIsIGVsaW1pbmFyIHVuYSBjbGFzZSBkZWwgQ1NTLlxuLy8gRXN0byBkZWJlcmlhIGVsaW1pbmFybGEgZGUgdG9kb3MgbG9zIGNvbXBvbmVudGVzIHF1ZSBsYSB1dGlsaXphbi4uLlxuXG4vLyBUT0RPOiBtZWpvcmFyIGVzdGlsb3MgZGUgbG9zIGJvdG9uZXMsIGlucHV0LCBldGMuLi5cblxuLy8gVE9ETzogZWwgZHVwbGljYXRlIGNsYXNzIHRhbWJpZW4gZGViZXJpYSB0ZW5lciBlbCBuZXdQc2V1ZG9jbGFzc1NlbGVjdG9yLi4uXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsYXNzTWFuYWdlbWVudENvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBjb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgZG9tRWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIGNsYXNzTmFtZXM6IEFycmF5U2VsZWN0b3JCb2R5SW50ZXJmYWNlW107XG4gICAgcHJpdmF0ZSBhcHBlbmRhYmxlQ2xhc3NOYW1lczogQXJyYXlTZWxlY3RvckJvZHlJbnRlcmZhY2VbXTtcbiAgICBwcml2YXRlIGNsYXNzZXNTZWxlY3RvcjogSFRNTFNlbGVjdEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBpbml0aWFsQ2xhc3NOYW1lOiBzdHJpbmc7XG5cbiAgICBwcml2YXRlIG5ld0NsYXNzTmFtZUlucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHByaXZhdGUgbmV3UHNldWRvY2xhc3NTZWxlY3RvcjogSFRNTFNlbGVjdEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBkdXBsaWNhYmxlQ2xhc3NTZWxlY3RvcjogSFRNTFNlbGVjdEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBhcHBlbmRDbGFzc1NlbGVjdG9yOiBIVE1MU2VsZWN0RWxlbWVudDtcbiAgICBwcml2YXRlIHJlbmFtZUNsYXNzSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIGR1cGxpY2FibGVDbGFzc05hbWVzOiBBcnJheVNlbGVjdG9yQm9keUludGVyZmFjZVtdO1xuICAgIHByaXZhdGUgbmV3RHVwbGljYWRlZENsYXNzTmFtZUlucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHByaXZhdGUgZHVwbGljYXRlUHNldWRvY2xhc3NTZWxlY3RvcjogSFRNTFNlbGVjdEVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIGNsYXNzZXNTZWxlY3RvckNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBhcHBlbmRDbGFzc0NvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIHB1Ymxpc2hlcjogQ2xhc3NDaGFuZ2VQdWJsaXNoZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgZG9tRWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgICAgIHB1Ymxpc2hlcjogQ2xhc3NDaGFuZ2VQdWJsaXNoZXJcbiAgICApIHtcbiAgICAgICAgdGhpcy5wdWJsaXNoZXIgPSBwdWJsaXNoZXI7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuaW5pdGlhbENsYXNzTmFtZSA9IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3RbMF07XG4gICAgICAgIHRoaXMucG9wdWxhdGVDbGFzc2VzTGlzdCgpO1xuICAgICAgICB0aGlzLnBvcHVsYXRlQXBwZW5kYWJsZUNsYXNzTGlzdCgpO1xuICAgICAgICB0aGlzLnBvcHVsYXRlRHVwbGljYWJsZUNsYXNzTGlzdCgpO1xuICAgICAgICB0aGlzLmFkZENvbXBvbmVudHMoKTtcbiAgICB9XG5cbiAgICBnZXQgY29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwb3B1bGF0ZUNsYXNzZXNMaXN0KCkge1xuICAgICAgICBjb25zdCBjbGFzc05hbWVzID0gW11cblxuICAgICAgICB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmZvckVhY2goKGNsYXNzRWxlbWVudE5hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVzID0gQ3NzU3R5bGVTaGVldC5nZXRSdWxlcyhjbGFzc0VsZW1lbnROYW1lKTtcblxuICAgICAgICAgICAgcnVsZXMuZm9yRWFjaCgocnVsZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZVsnc2VsZWN0b3JUZXh0J11cbiAgICAgICAgICAgICAgICBsZXQgdmFsdWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICBpZiAocnVsZU5hbWVbMF0gPT09ICcuJyB8fCBydWxlTmFtZVswXSA9PT0gJyMnKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gcnVsZU5hbWUuc3Vic3RyaW5nKDEpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogcnVsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuICAgIH1cblxuICAgIHByaXZhdGUgcG9wdWxhdGVEdXBsaWNhYmxlQ2xhc3NMaXN0KCkge1xuICAgICAgICBjb25zdCBkdXBsaWNhYmxlQ2xhc3NOYW1lcyA9IFtdXG5cbiAgICAgICAgY29uc3QgcnVsZXMgPSBDc3NTdHlsZVNoZWV0LmdldEFsbFJ1bGVzKCk7XG5cbiAgICAgICAgcnVsZXMuZm9yRWFjaCgocnVsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBydWxlWydzZWxlY3RvclRleHQnXVxuICAgICAgICAgICAgbGV0IHZhbHVlOiBzdHJpbmc7XG4gICAgICAgICAgICBpZiAocnVsZU5hbWVbMF0gPT09ICcuJyB8fCBydWxlTmFtZVswXSA9PT0gJyMnKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBydWxlTmFtZS5zdWJzdHJpbmcoMSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSAnYm9keScpIHtcbiAgICAgICAgICAgICAgICBkdXBsaWNhYmxlQ2xhc3NOYW1lcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogcnVsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5kdXBsaWNhYmxlQ2xhc3NOYW1lcyA9IGR1cGxpY2FibGVDbGFzc05hbWVzO1xuICAgIH1cblxuICAgIHByaXZhdGUgcG9wdWxhdGVBcHBlbmRhYmxlQ2xhc3NMaXN0KCkge1xuICAgICAgICBjb25zdCBhcHBlbmRhYmxlQ2xhc3NOYW1lcyA9IFtdXG5cbiAgICAgICAgY29uc3QgcnVsZXMgPSBDc3NTdHlsZVNoZWV0LmdldEFsbFJ1bGVzKCk7XG5cbiAgICAgICAgcnVsZXMuZm9yRWFjaCgocnVsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBydWxlWydzZWxlY3RvclRleHQnXVxuICAgICAgICAgICAgbGV0IHZhbHVlOiBzdHJpbmc7XG4gICAgICAgICAgICBpZiAocnVsZU5hbWVbMF0gPT09ICcuJyB8fCBydWxlTmFtZVswXSA9PT0gJyMnKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBydWxlTmFtZS5zdWJzdHJpbmcoMSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSAnYm9keScgJiYgIXRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnModmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgYXBwZW5kYWJsZUNsYXNzTmFtZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHJ1bGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuYXBwZW5kYWJsZUNsYXNzTmFtZXMgPSBhcHBlbmRhYmxlQ2xhc3NOYW1lcztcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZENvbXBvbmVudHMoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlQ2xhc3NOYW1lID0gdGhpcy51cGRhdGVDbGFzc05hbWUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jcmVhdGVOZXdDbGFzc05hbWUgPSB0aGlzLmNyZWF0ZU5ld0NsYXNzTmFtZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlbW92ZUNsYXNzID0gdGhpcy5yZW1vdmVDbGFzcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNoYW5nZUNsYXNzTmFtZSA9IHRoaXMuY2hhbmdlQ2xhc3NOYW1lLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYXBwZW5kQ2xhc3MgPSB0aGlzLmFwcGVuZENsYXNzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHVwbGljYXRlQ2xhc3MgPSB0aGlzLmR1cGxpY2F0ZUNsYXNzLmJpbmQodGhpcyk7XG5cbiAgICAgICAgLy8gQ2xhc3Mgc2VsZWN0b3IgYW5kIHJlbW92ZSBjbGFzc1xuICAgICAgICB0aGlzLmNsYXNzZXNTZWxlY3RvciA9IG5ldyBTZWxlY3RvckZyb21BcnJheUJ1aWxkZXIodGhpcy5jbGFzc05hbWVzKVxuICAgICAgICAgICAgLnNlbGVjdE9wdGlvbih0aGlzLmluaXRpYWxDbGFzc05hbWUpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVDbGFzc05hbWUpXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIGNvbnN0IHJlbW92ZUNsYXNzQnV0dG9uID0gbmV3IEJ1dHRvbkJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldElubmVyVGV4dCgnUmVtb3ZlJylcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucmVtb3ZlQ2xhc3MpXG4gICAgICAgICAgICAuYnVpbGQoKTtcblxuICAgICAgICB0aGlzLmNsYXNzZXNTZWxlY3RvckNvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydmbGV4LWRpcmVjdGlvbiddLCBGbGV4RGlyZWN0aW9uRW51bS5jb2x1bW4pXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5jbGFzc2VzU2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHJlbW92ZUNsYXNzQnV0dG9uKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYnVpbGQoKTtcblxuICAgICAgICAvLyBSZW5hbWUgQ2xhc3NcbiAgICAgICAgdGhpcy5yZW5hbWVDbGFzc0lucHV0ID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLnRleHQpXG4gICAgICAgICAgICAuc2V0UGxhY2Vob2xkZXIoJ05ldyBjbGFzcyBuYW1lJylcbiAgICAgICAgICAgIC5idWlsZCgpO1xuXG4gICAgICAgIGNvbnN0IHJlbmFtZUNsYXNzQnV0dG9uID0gbmV3IEJ1dHRvbkJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldElubmVyVGV4dCgnQ2hhbmdlJylcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2hhbmdlQ2xhc3NOYW1lKVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG5cbiAgICAgICAgY29uc3QgcmVuYW1lQ2xhc3NDb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnZmxleC1kaXJlY3Rpb24nXSwgRmxleERpcmVjdGlvbkVudW0uY29sdW1uKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdDaGFuZ2UgQ2xhc3MgTmFtZScpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydmbGV4LWRpcmVjdGlvbiddLCBGbGV4RGlyZWN0aW9uRW51bS5yb3cpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMucmVuYW1lQ2xhc3NJbnB1dClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQocmVuYW1lQ2xhc3NCdXR0b24pXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBDbGFzc1xuICAgICAgICB0aGlzLm5ld0NsYXNzTmFtZUlucHV0ID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLnRleHQpXG4gICAgICAgICAgICAuc2V0UGxhY2Vob2xkZXIoJ0NsYXNzIG5hbWUnKVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG5cbiAgICAgICAgdGhpcy5uZXdQc2V1ZG9jbGFzc1NlbGVjdG9yID0gbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKEdlbmVyYWxQc2V1ZG9jbGFzc0VudW0pXG4gICAgICAgICAgICAuc2VsZWN0T3B0aW9uKEdlbmVyYWxQc2V1ZG9jbGFzc0VudW0ubm9uZSlcbiAgICAgICAgICAgIC5idWlsZCgpO1xuXG4gICAgICAgIGNvbnN0IGNyZWF0ZUNsYXNzQnV0dG9uID0gbmV3IEJ1dHRvbkJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldElubmVyVGV4dCgnQ3JlYXRlJylcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY3JlYXRlTmV3Q2xhc3NOYW1lKVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG5cbiAgICAgICAgY29uc3QgbmV3Q2xhc3NDb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnZmxleC1kaXJlY3Rpb24nXSwgRmxleERpcmVjdGlvbkVudW0uY29sdW1uKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdDcmVhdGUgTmV3IENsYXNzJylcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5uZXdDbGFzc05hbWVJbnB1dClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5uZXdQc2V1ZG9jbGFzc1NlbGVjdG9yKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChjcmVhdGVDbGFzc0J1dHRvbilcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG5cbiAgICAgICAgLy8gRHVwbGljYXRlIGNsYXNzXG4gICAgICAgIHRoaXMuZHVwbGljYWJsZUNsYXNzU2VsZWN0b3IgPSBuZXcgU2VsZWN0b3JGcm9tQXJyYXlCdWlsZGVyKHRoaXMuZHVwbGljYWJsZUNsYXNzTmFtZXMpXG4gICAgICAgICAgICAuc2VsZWN0T3B0aW9uKHRoaXMuZHVwbGljYWJsZUNsYXNzTmFtZXNbMF0udmFsdWUpXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIHRoaXMubmV3RHVwbGljYWRlZENsYXNzTmFtZUlucHV0ID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLnRleHQpXG4gICAgICAgICAgICAuc2V0UGxhY2Vob2xkZXIoJ0R1cGxpY2F0ZWQgY2xhc3MgbmFtZScpXG4gICAgICAgICAgICAuYnVpbGQoKTtcblxuICAgICAgICBjb25zdCBkdXBsaWNhdGVDbGFzc0J1dHRvbiA9IG5ldyBCdXR0b25CdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0R1cGxpY2F0ZScpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmR1cGxpY2F0ZUNsYXNzKVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICB0aGlzLmR1cGxpY2F0ZVBzZXVkb2NsYXNzU2VsZWN0b3IgPSBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIoR2VuZXJhbFBzZXVkb2NsYXNzRW51bSlcbiAgICAgICAgICAgIC5zZWxlY3RPcHRpb24oR2VuZXJhbFBzZXVkb2NsYXNzRW51bS5ub25lKVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG5cbiAgICAgICAgY29uc3QgZHVwbGljYXRlQ2xhc3NDb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnZmxleC1kaXJlY3Rpb24nXSwgRmxleERpcmVjdGlvbkVudW0uY29sdW1uKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdEdXBsaWNhdGUgQ2xhc3MnKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICAgICAgbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydmbGV4LWRpcmVjdGlvbiddLCBGbGV4RGlyZWN0aW9uRW51bS5yb3cpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmR1cGxpY2FibGVDbGFzc1NlbGVjdG9yKVxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5kdXBsaWNhdGVQc2V1ZG9jbGFzc1NlbGVjdG9yKVxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgICAgIG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnZmxleC1kaXJlY3Rpb24nXSwgRmxleERpcmVjdGlvbkVudW0ucm93KVxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5uZXdEdXBsaWNhZGVkQ2xhc3NOYW1lSW5wdXQpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChkdXBsaWNhdGVDbGFzc0J1dHRvbilcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgLy8gQXBwZW5kIGNsYXNzXG4gICAgICAgIGlmICh0aGlzLmFwcGVuZGFibGVDbGFzc05hbWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuYXBwZW5kQ2xhc3NTZWxlY3RvciA9IG5ldyBTZWxlY3RvckZyb21BcnJheUJ1aWxkZXIodGhpcy5hcHBlbmRhYmxlQ2xhc3NOYW1lcylcbiAgICAgICAgICAgICAgICAuc2VsZWN0T3B0aW9uKHRoaXMuYXBwZW5kYWJsZUNsYXNzTmFtZXNbMF0udmFsdWUpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICAgICAgY29uc3QgYXBwZW5kQ2xhc3NCdXR0b24gPSBuZXcgQnV0dG9uQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnQXBwZW5kJylcbiAgICAgICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmFwcGVuZENsYXNzKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgICAgIHRoaXMuYXBwZW5kQ2xhc3NDb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydmbGV4LWRpcmVjdGlvbiddLCBGbGV4RGlyZWN0aW9uRW51bS5jb2x1bW4pXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0FwcGVuZCBDbGFzcycpXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChcbiAgICAgICAgICAgICAgICAgICAgbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW1bJ2ZsZXgtZGlyZWN0aW9uJ10sIEZsZXhEaXJlY3Rpb25FbnVtLnJvdylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmFwcGVuZENsYXNzU2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQoYXBwZW5kQ2xhc3NCdXR0b24pXG4gICAgICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gTWFpbiBjb250YWluZXJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5ib3JkZXIsICcxcHggc29saWQgIzRDQUY1MCcpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5wYWRkaW5nLCAnM3B4JylcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnQ2xhc3NlcyBNYW5hZ2VtZW50JylcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuY2xhc3Nlc1NlbGVjdG9yQ29udGFpbmVyKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKHJlbmFtZUNsYXNzQ29udGFpbmVyKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ld0NsYXNzQ29udGFpbmVyKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKGR1cGxpY2F0ZUNsYXNzQ29udGFpbmVyKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkSWZEZWZpbmVkKHRoaXMuYXBwZW5kQ2xhc3NDb250YWluZXIpXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlQ2xhc3NOYW1lKCkge1xuICAgICAgICB0aGlzLnB1Ymxpc2hlci5ub3RpZnlDbGFzc05hbWUodGhpcy5jbGFzc2VzU2VsZWN0b3IudmFsdWUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlTmV3Q2xhc3NOYW1lKCkge1xuICAgICAgICBjb25zdCBjbGFzc05hbWU6IHN0cmluZyA9IHRoaXMubmV3Q2xhc3NOYW1lSW5wdXQudmFsdWU7XG4gICAgICAgIGNvbnN0IHBzZXVkb2NsYXNzID0gdGhpcy5uZXdQc2V1ZG9jbGFzc1NlbGVjdG9yLnZhbHVlO1xuICAgICAgICBjb25zdCBjb21wbGV0ZUNzc05hbWU6IHN0cmluZyA9IHRoaXMubmV3Q2xhc3NOYW1lSW5wdXQudmFsdWUgKyAocHNldWRvY2xhc3MgIT09ICcnID8gYDoke3BzZXVkb2NsYXNzfWAgOiAnJyk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChjbGFzc05hbWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDbGFzcyBuYW1lIGNhbiBub3QgYmUgYW4gZW1wdHkgc3RyaW5nJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xhc3NOYW1lWzBdKSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NsYXNzIG5hbWUgbXVzdCBzdGFydCB3aXRoIGEgbGV0dGVyJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGZvdW5kQmFzZVJ1bGUgPSBDc3NTdHlsZVNoZWV0LmdldFJ1bGVJbmRleChjbGFzc05hbWUpO1xuICAgICAgICAgICAgY29uc3QgZm91bmRSdWxlV2l0aFBzZXVkb2NsYXNzID0gQ3NzU3R5bGVTaGVldC5nZXRSdWxlSW5kZXgoY29tcGxldGVDc3NOYW1lKTtcblxuICAgICAgICAgICAgbGV0IGNsYXNzTmFtZU5vdEZvdW5kRm9yVGhpc0VsZW1lbnQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5mb3JFYWNoKChjbikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjbiA9PT0gY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZU5vdEZvdW5kRm9yVGhpc0VsZW1lbnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBpZiAoZm91bmRCYXNlUnVsZSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNsYXNzTmFtZU5vdEZvdW5kRm9yVGhpc0VsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDbGFzcyBuYW1lIGFscmVhZHkgZXhpc3RzIGZvciBhbm90aGVyIGVsZW1lbnQnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZm91bmRSdWxlV2l0aFBzZXVkb2NsYXNzID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2xhc3MgbmFtZSBhbHJlYWR5IGV4aXN0cycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgICAgICAgQ3NzU3R5bGVTaGVldC5pbnNlcnRSdWxlKGAuJHtjb21wbGV0ZUNzc05hbWV9IHt9YCk7XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgbmV3T3B0aW9uLnRleHQgPSBgLiR7Y29tcGxldGVDc3NOYW1lfWA7XG4gICAgICAgICAgICBuZXdPcHRpb24udmFsdWUgPSBjb21wbGV0ZUNzc05hbWU7XG5cbiAgICAgICAgICAgIHRoaXMuY2xhc3Nlc1NlbGVjdG9yLmFwcGVuZENoaWxkKG5ld09wdGlvbik7XG5cbiAgICAgICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgICAgICB0aGlzLmNsYXNzZXNTZWxlY3Rvci5jaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkOiBIVE1MT3B0aW9uRWxlbWVudCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZC52YWx1ZSA9PT0gbmV3T3B0aW9uLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5uZXdDbGFzc05hbWVJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5jbGFzc2VzU2VsZWN0b3Iuc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgdGhpcy51cGRhdGVDbGFzc05hbWUoKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGFsZXJ0KGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW1vdmVDbGFzcygpIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoYCR7dGhpcy5jbGFzc2VzU2VsZWN0b3IudmFsdWV9YCk7XG4gICAgICAgIENzc1N0eWxlU2hlZXQucmVtb3ZlUnVsZShgJHt0aGlzLmNsYXNzZXNTZWxlY3Rvci52YWx1ZX1gKTtcbiAgICAgICAgdGhpcy5jbGFzc2VzU2VsZWN0b3Iub3B0aW9ucy5yZW1vdmUodGhpcy5jbGFzc2VzU2VsZWN0b3Iuc2VsZWN0ZWRJbmRleCk7XG5cbiAgICAgICAgaWYodGhpcy5jbGFzc2VzU2VsZWN0b3Iub3B0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuY2xhc3Nlc1NlbGVjdG9yQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGNoYW5nZUNsYXNzTmFtZSgpIHtcbiAgICAgICAgUmF3SFRNTENvbnBvbmVudC5pbnN0YW5jZXMuZm9yRWFjaCgoaW5zdGFuY2UpID0+IHtcbiAgICAgICAgICAgIGluc3RhbmNlLmNsYXNzTGlzdC5yZXBsYWNlKHRoaXMuY2xhc3Nlc1NlbGVjdG9yLnZhbHVlLCB0aGlzLnJlbmFtZUNsYXNzSW5wdXQudmFsdWUpO1xuICAgICAgICB9KVxuXG4gICAgICAgIENzc1N0eWxlU2hlZXQuY2hhbmdlUnVsZU5hbWUodGhpcy5jbGFzc2VzU2VsZWN0b3IudmFsdWUsIHRoaXMucmVuYW1lQ2xhc3NJbnB1dC52YWx1ZSk7XG4gICAgICAgIHRoaXMucG9wdWxhdGVDbGFzc2VzTGlzdCgpO1xuICAgICAgICB0aGlzLmNsYXNzZXNTZWxlY3Rvci5yZW1vdmUodGhpcy5jbGFzc2VzU2VsZWN0b3Iuc2VsZWN0ZWRJbmRleCk7XG5cbiAgICAgICAgdGhpcy5hcHBlbmROZXdPcHRpb25FbGVtZW50KHRoaXMucmVuYW1lQ2xhc3NJbnB1dC52YWx1ZSwgdGhpcy5jbGFzc2VzU2VsZWN0b3IpO1xuXG4gICAgICAgIHRoaXMucmVuYW1lQ2xhc3NJbnB1dC52YWx1ZSA9ICcnO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXBwZW5kQ2xhc3MoKSB7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuYXBwZW5kQ2xhc3NTZWxlY3Rvci52YWx1ZSk7XG5cbiAgICAgICAgdGhpcy5hcHBlbmROZXdPcHRpb25FbGVtZW50KHRoaXMuYXBwZW5kQ2xhc3NTZWxlY3Rvci52YWx1ZSwgdGhpcy5jbGFzc2VzU2VsZWN0b3IpO1xuXG4gICAgICAgIHRoaXMuYXBwZW5kQ2xhc3NTZWxlY3Rvci5vcHRpb25zLnJlbW92ZSh0aGlzLmFwcGVuZENsYXNzU2VsZWN0b3Iuc2VsZWN0ZWRJbmRleCk7XG5cbiAgICAgICAgaWYodGhpcy5hcHBlbmRDbGFzc1NlbGVjdG9yLm9wdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmFwcGVuZENsYXNzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGFwcGVuZE5ld09wdGlvbkVsZW1lbnQob3B0aW9uVmFsdWU6IHN0cmluZywgc2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24udmFsdWUgPSBvcHRpb25WYWx1ZTtcbiAgICAgICAgb3B0aW9uLnRleHQgPSBgLiR7b3B0aW9uVmFsdWV9YDtcblxuICAgICAgICBzZWxlY3Rvci5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICBzZWxlY3Rvci5zZWxlY3RlZEluZGV4ID0gc2VsZWN0b3Iub3B0aW9ucy5sZW5ndGggLSAxO1xuICAgIH1cblxuICAgIHByaXZhdGUgZHVwbGljYXRlQ2xhc3MoKSB7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMubmV3RHVwbGljYWRlZENsYXNzTmFtZUlucHV0LnZhbHVlKTtcblxuICAgICAgICBjb25zdCBuZXdDbGFzc05hbWUgPSBgJHt0aGlzLm5ld0R1cGxpY2FkZWRDbGFzc05hbWVJbnB1dC52YWx1ZX06JHt0aGlzLmR1cGxpY2F0ZVBzZXVkb2NsYXNzU2VsZWN0b3IudmFsdWV9YDtcblxuICAgICAgICBDc3NTdHlsZVNoZWV0LmR1cGxpY2F0ZVJ1bGUodGhpcy5kdXBsaWNhYmxlQ2xhc3NTZWxlY3Rvci52YWx1ZSwgbmV3Q2xhc3NOYW1lKTtcblxuICAgICAgICB0aGlzLmFwcGVuZE5ld09wdGlvbkVsZW1lbnQobmV3Q2xhc3NOYW1lLCB0aGlzLmNsYXNzZXNTZWxlY3Rvcik7XG4gICAgICAgIHRoaXMuYXBwZW5kTmV3T3B0aW9uRWxlbWVudChuZXdDbGFzc05hbWUsIHRoaXMuZHVwbGljYWJsZUNsYXNzU2VsZWN0b3IpO1xuXG4gICAgICAgIHRoaXMubmV3RHVwbGljYWRlZENsYXNzTmFtZUlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgIHRoaXMuZHVwbGljYXRlUHNldWRvY2xhc3NTZWxlY3Rvci52YWx1ZSA9IEdlbmVyYWxQc2V1ZG9jbGFzc0VudW0ubm9uZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ2xhc3NDaGFuZ2VPYnNlcnZlckludGVyZmFjZSBmcm9tICcuLi9pbnRlcmZhY2VzL2NsYXNzLWNoYW5nZS1vYnNlcnZlci5pbnRlcmZhY2UnO1xuXG5pbXBvcnQgQ3NzU3R5bGVTaGVldCBmcm9tICcuLi8uLi9jc3Mtc3R5bGVzaGVldC9jc3Mtc3R5bGVzaGVldCc7XG5cbmltcG9ydCBDb250YWluZXJCdWlsZGVyIGZyb20gJy4uL21vZGVscy9Db250YWluZXJCdWlsZGVyJztcbmltcG9ydCBTZWxlY3RvckZyb21FbnVtQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXInO1xuaW1wb3J0IElucHV0QnVpbGRlciBmcm9tICcuLi9tb2RlbHMvSW5wdXRCdWlsZGVyJztcbmltcG9ydCBMYWJlbEJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0xhYmVsQnVpbGRlcic7XG5cbmltcG9ydCBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50IGZyb20gJy4vZ2VuZXJpYy1jc3MtcHJvcGVydHktbXV0YXRvci5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBEaXNwbGF5VHlwZXNFbnVtIH0gZnJvbSAnLi4vZW51bXMvZGlzcGxheS10eXBlcy5lbnVtJztcbmltcG9ydCB7IFN0eWxlTmFtZUVudW0gfSBmcm9tICcuLi9lbnVtcy9zdHlsZS1uYW1lLmVudW0nO1xuaW1wb3J0IHsgQWxpZ25GbGV4U2VsZkVudW0gfSBmcm9tICcuLi9lbnVtcy9hbGlnbi1mbGV4LXNlbGYuZW51bSc7XG5pbXBvcnQgeyBJbnB1dFR5cGVFbnVtIH0gZnJvbSAnLi4vZW51bXMvaW5wdXQtdHlwZS5lbnVtJztcbmltcG9ydCB7IEV2ZW50VHlwZUVudW0gfSBmcm9tICcuLi9lbnVtcy9ldmVudC10eXBlLmVudW0nO1xuaW1wb3J0IHsgSnVzdGlmeUdyaWRTZWxmRW51bSB9IGZyb20gJy4uL2VudW1zL2p1c3RpZnktZ3JpZC1zZWxmLmVudW0nO1xuaW1wb3J0IHsgQWxpZ25HcmlkU2VsZkVudW0gfSBmcm9tICcuLi9lbnVtcy9hbGlnbi1ncmlkLXNlbGYuZW51bSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzcGxheUFzQ2hpbGRDb21wb25lbnQgaW1wbGVtZW50cyBDbGFzc0NoYW5nZU9ic2VydmVySW50ZXJmYWNlIHtcbiAgICBwcml2YXRlIGRvbUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcbiAgICBwcml2YXRlIGRvbUVsZW1lbnRTdHlsZVNoZWV0OiBDU1NTdHlsZURlY2xhcmF0aW9uO1xuXG4gICAgcHJpdmF0ZSBmbGV4Q29udGFpbmVyQXNDaGlsZHJlbjogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBhbGlnblNlbGZTZWxlY3RvcjogR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudDtcbiAgICBwcml2YXRlIGZsZXhHcm93SW5wdXQ6IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBmbGV4U2hyaW5rSW5wdXQ6IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBmbGV4QmFzaXNJbnB1dDogR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudDtcblxuICAgIHByaXZhdGUgZ3JpZENvbnRhaW5lckFzQ2hpbGRyZW46IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgZ3JpZENvbHVtblN0YXJ0SW5wdXQ6IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBncmlkQ29sdW1uRW5kSW5wdXQ6IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBncmlkUm93U3RhcnRJbnB1dDogR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudDtcbiAgICBwcml2YXRlIGdyaWRSb3dFbmRJbnB1dDogR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudDtcbiAgICBwcml2YXRlIGdyaWRKdXN0aWZ5U2VsZjogR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudDtcbiAgICBwcml2YXRlIGdyaWRBbGlnblNlbGY6IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihkb21FbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0ID0gQ3NzU3R5bGVTaGVldC5nZXRSdWxlU3R5bGVzKHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3RbMF0pO1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKS5idWlsZCgpO1xuXG4gICAgICAgIHRoaXMuZmxleENvbnRhaW5lckFzQ2hpbGRyZW4gPSB0aGlzLmNyZWF0ZUZsZXhBc0NoaWxkcmVuQ29udGFpbmVyKCk7XG4gICAgICAgIHRoaXMuZ3JpZENvbnRhaW5lckFzQ2hpbGRyZW4gPSB0aGlzLmNyZWF0ZUdyaWRBc0NoaWxkcmVuQ29udGFpbmVyKCk7XG4gICAgICAgIHRoaXMuc2V0Q29tcG9uZW50QWNjb3JkaW5nVG9TZWxlY3RvcigpO1xuICAgIH1cblxuICAgIGdldCBjb21wb25lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldENvbXBvbmVudEFjY29yZGluZ1RvU2VsZWN0b3IoKSB7XG4gICAgICAgIGlmICh0aGlzLmRvbUVsZW1lbnQuaWQgIT09ICdhcHAtY29udGFpbmVyJykge1xuICAgICAgICAgICAgLy8gTk9URTogd2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9tRWxlbWVudCkgcmV0dXJuIHRoZSBhY3RpdmUgc3R5bGUgb2YgdGhhdCBkb20gZWxlbWVudC5cbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQcm9wZXJ0aWVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5kb21FbGVtZW50LnBhcmVudEVsZW1lbnQpWydkaXNwbGF5J11cblxuICAgICAgICAgICAgaWYgKGN1cnJlbnRQcm9wZXJ0aWVzID09PSBEaXNwbGF5VHlwZXNFbnVtLmZsZXggfHwgY3VycmVudFByb3BlcnRpZXMgPT09IERpc3BsYXlUeXBlc0VudW1bJ2lubGluZS1mbGV4J10pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0R3JpZCgpO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRmxleENvbXBvbmVudHNTdHlsZVNoZWV0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRGbGV4QXNDaGlsZHJlbkluaXRpYWxWYWx1ZXMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmZsZXhDb250YWluZXJBc0NoaWxkcmVuKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgY3VycmVudFByb3BlcnRpZXMgPT09IERpc3BsYXlUeXBlc0VudW0uZ3JpZFxuICAgICAgICAgICAgICAgIHx8IGN1cnJlbnRQcm9wZXJ0aWVzID09PSBEaXNwbGF5VHlwZXNFbnVtWydpbmxpbmUtZ3JpZCddXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0RmxleCgpO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlR3JpZENvbXBvbmVudHNTdHlsZVNoZWV0KCk7XG4gICAgICAgICAgICB0aGlzLnNldEdyaWRBc0NoaWxkcmVuSW5pdGlhbFZhbHVlcygpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZ3JpZENvbnRhaW5lckFzQ2hpbGRyZW4pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0RmxleCgpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRHcmlkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZUZsZXhBc0NoaWxkcmVuQ29udGFpbmVyKCkge1xuICAgICAgICB0aGlzLmFsaWduU2VsZlNlbGVjdG9yID0gbmV3IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQoXG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0LFxuICAgICAgICAgICAgJ2FsaWduLXNlbGYnLFxuICAgICAgICAgICAgJ0FsaWduIFNlbGYnLFxuICAgICAgICAgICAgbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKEFsaWduRmxleFNlbGZFbnVtKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpLFxuICAgICAgICAgICAgRXZlbnRUeXBlRW51bS5jaGFuZ2VcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmZsZXhHcm93SW5wdXQgPSBuZXcgR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudChcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQsXG4gICAgICAgICAgICAnZmxleC1ncm93JyxcbiAgICAgICAgICAgICdGbGV4IEdyb3cnLFxuICAgICAgICAgICAgbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLm51bWJlcilcbiAgICAgICAgICAgICAgICAuc2V0TWF4KDEwMDApXG4gICAgICAgICAgICAgICAgLnNldE1pbigwKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpLFxuICAgICAgICAgICAgRXZlbnRUeXBlRW51bS5pbnB1dFxuICAgICAgICApLnNldFplcm9WYWx1ZSgwKVxuXG4gICAgICAgIHRoaXMuZmxleFNocmlua0lucHV0ID0gbmV3IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQoXG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0LFxuICAgICAgICAgICAgJ2ZsZXgtc2hyaW5rJyxcbiAgICAgICAgICAgICdGbGV4IFNocmluaycsXG4gICAgICAgICAgICBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0ubnVtYmVyKVxuICAgICAgICAgICAgICAgIC5zZXRNYXgoMTAwMClcbiAgICAgICAgICAgICAgICAuc2V0TWluKDApXG4gICAgICAgICAgICAgICAgLmJ1aWxkKCksXG4gICAgICAgICAgICBFdmVudFR5cGVFbnVtLmlucHV0XG4gICAgICAgICkuc2V0WmVyb1ZhbHVlKDApXG5cblxuICAgICAgICB0aGlzLmZsZXhCYXNpc0lucHV0ID0gbmV3IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQoXG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0LFxuICAgICAgICAgICAgJ2ZsZXgtYmFzaXMnLFxuICAgICAgICAgICAgJ0ZsZXggQmFzaXMoJSknLFxuICAgICAgICAgICAgbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLm51bWJlcilcbiAgICAgICAgICAgICAgICAuc2V0TWF4KDEwMDApXG4gICAgICAgICAgICAgICAgLnNldE1pbigwKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpLFxuICAgICAgICAgICAgRXZlbnRUeXBlRW51bS5pbnB1dCxcbiAgICAgICAgICAgICclJ1xuICAgICAgICApLnNldFplcm9WYWx1ZSgwKVxuXG4gICAgICAgIHJldHVybiBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmJvcmRlciwgJzFweCBzb2xpZCAjNENBRjUwJylcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5wYWRkaW5nLCAnM3B4JylcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnRGlzcGxheSBGbGV4IGFzIENoaWxkJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuYWxpZ25TZWxmU2VsZWN0b3IuY29tcG9uZW50KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmZsZXhHcm93SW5wdXQuY29tcG9uZW50KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmZsZXhTaHJpbmtJbnB1dC5jb21wb25lbnQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuZmxleEJhc2lzSW5wdXQuY29tcG9uZW50KVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgIH1cblxuICAgIHByaXZhdGUgc2V0RmxleEFzQ2hpbGRyZW5Jbml0aWFsVmFsdWVzKCkge1xuICAgICAgICB0aGlzLmFsaWduU2VsZlNlbGVjdG9yLnNldFZhbHVlKHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2FsaWduLXNlbGYnXSB8fCAnJyk7XG4gICAgICAgIHRoaXMuZmxleEdyb3dJbnB1dC5zZXRWYWx1ZShgJHtwYXJzZUludCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydmbGV4LWdyb3cnXSkgfHwgMH1gKTtcbiAgICAgICAgdGhpcy5mbGV4U2hyaW5rSW5wdXQuc2V0VmFsdWUoYCR7cGFyc2VJbnQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZmxleC1zaHJpbmsnXSkgfHwgMH1gKTtcbiAgICAgICAgdGhpcy5mbGV4QmFzaXNJbnB1dC5zZXRWYWx1ZShgJHtwYXJzZUludCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydmbGV4LWJhc2lzJ10pIHx8IDB9YCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVHcmlkQXNDaGlsZHJlbkNvbnRhaW5lcigpIHtcbiAgICAgICAgdGhpcy5ncmlkQ29sdW1uU3RhcnRJbnB1dCA9IG5ldyBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50KFxuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCxcbiAgICAgICAgICAgICdncmlkLWNvbHVtbi1zdGFydCcsXG4gICAgICAgICAgICAnR3JpZCBDb2x1bW4gU3RhcnQnLFxuICAgICAgICAgICAgbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLnRleHQpLmJ1aWxkKCksXG4gICAgICAgICAgICBFdmVudFR5cGVFbnVtLmlucHV0XG4gICAgICAgIClcblxuICAgICAgICB0aGlzLmdyaWRDb2x1bW5FbmRJbnB1dCA9IG5ldyBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50KFxuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCxcbiAgICAgICAgICAgICdncmlkLWNvbHVtbi1lbmQnLFxuICAgICAgICAgICAgJ0dyaWQgQ29sdW1uIEVuZCcsXG4gICAgICAgICAgICBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0udGV4dCkuYnVpbGQoKSxcbiAgICAgICAgICAgIEV2ZW50VHlwZUVudW0uaW5wdXRcbiAgICAgICAgKVxuXG4gICAgICAgIHRoaXMuZ3JpZFJvd1N0YXJ0SW5wdXQgPSBuZXcgR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudChcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQsXG4gICAgICAgICAgICAnZ3JpZC1yb3ctc3RhcnQnLFxuICAgICAgICAgICAgJ0dyaWQgUm93IFN0YXJ0JyxcbiAgICAgICAgICAgIG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS50ZXh0KS5idWlsZCgpLFxuICAgICAgICAgICAgRXZlbnRUeXBlRW51bS5pbnB1dFxuICAgICAgICApXG5cbiAgICAgICAgdGhpcy5ncmlkUm93RW5kSW5wdXQgPSBuZXcgR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudChcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQsXG4gICAgICAgICAgICAnZ3JpZC1yb3ctZW5kJyxcbiAgICAgICAgICAgICdHcmlkIFJvdyBFbmQnLFxuICAgICAgICAgICAgbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLnRleHQpLmJ1aWxkKCksXG4gICAgICAgICAgICBFdmVudFR5cGVFbnVtLmlucHV0XG4gICAgICAgIClcblxuICAgICAgICB0aGlzLmdyaWRKdXN0aWZ5U2VsZiA9IG5ldyBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50KFxuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCxcbiAgICAgICAgICAgICdqdXN0aWZ5LXNlbGYnLFxuICAgICAgICAgICAgJ0dyaWQgSnVzdGlmeSBTZWxmJyxcbiAgICAgICAgICAgIG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihKdXN0aWZ5R3JpZFNlbGZFbnVtKS5idWlsZCgpLFxuICAgICAgICAgICAgRXZlbnRUeXBlRW51bS5jaGFuZ2VcbiAgICAgICAgKVxuXG4gICAgICAgIHRoaXMuZ3JpZEFsaWduU2VsZiA9IG5ldyBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50KFxuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCxcbiAgICAgICAgICAgICdhbGlnbi1zZWxmJyxcbiAgICAgICAgICAgICdHcmlkIEFsaWduIFNlbGYnLFxuICAgICAgICAgICAgbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKEFsaWduR3JpZFNlbGZFbnVtKS5idWlsZCgpLFxuICAgICAgICAgICAgRXZlbnRUeXBlRW51bS5jaGFuZ2VcbiAgICAgICAgKVxuXG4gICAgICAgIHJldHVybiBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmJvcmRlciwgJzFweCBzb2xpZCAjNENBRjUwJylcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5wYWRkaW5nLCAnM3B4JylcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnRGlzcGxheSBHcmlkIGFzIENoaWxkJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuZ3JpZENvbHVtblN0YXJ0SW5wdXQuY29tcG9uZW50KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmdyaWRDb2x1bW5FbmRJbnB1dC5jb21wb25lbnQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuZ3JpZFJvd1N0YXJ0SW5wdXQuY29tcG9uZW50KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmdyaWRSb3dFbmRJbnB1dC5jb21wb25lbnQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuZ3JpZEp1c3RpZnlTZWxmLmNvbXBvbmVudClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5ncmlkQWxpZ25TZWxmLmNvbXBvbmVudClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEdyaWRBc0NoaWxkcmVuSW5pdGlhbFZhbHVlcygpIHtcbiAgICAgICAgdGhpcy5ncmlkQ29sdW1uU3RhcnRJbnB1dC5zZXRWYWx1ZSh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydncmlkLWNvbHVtbi1zdGFydCddIHx8ICcnKTtcbiAgICAgICAgdGhpcy5ncmlkQ29sdW1uRW5kSW5wdXQuc2V0VmFsdWUodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZ3JpZC1jb2x1bW4tZW5kJ10gfHwgJycpO1xuICAgICAgICB0aGlzLmdyaWRSb3dTdGFydElucHV0LnNldFZhbHVlKHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2dyaWQtcm93LXN0YXJ0J10gfHwgJycpO1xuICAgICAgICB0aGlzLmdyaWRSb3dFbmRJbnB1dC5zZXRWYWx1ZSh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydncmlkLXJvdy1lbmQnXSB8fCAnJyk7XG4gICAgICAgIHRoaXMuZ3JpZEp1c3RpZnlTZWxmLnNldFZhbHVlKHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2p1c3RpZnktc2VsZiddIHx8ICcnKTtcbiAgICAgICAgdGhpcy5ncmlkQWxpZ25TZWxmLnNldFZhbHVlKHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2FsaWduLXNlbGYnXSB8fCAnJyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXNldEZsZXgoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLmZsZXhDb250YWluZXJBc0NoaWxkcmVuKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHJlc2V0R3JpZCgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuZ3JpZENvbnRhaW5lckFzQ2hpbGRyZW4pO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBjbGFzc05hbWVVcGRhdGVkKG5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0ID0gQ3NzU3R5bGVTaGVldC5nZXRSdWxlU3R5bGVzKG5hbWUpO1xuICAgICAgICB0aGlzLnNldENvbXBvbmVudEFjY29yZGluZ1RvU2VsZWN0b3IoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUZsZXhDb21wb25lbnRzU3R5bGVTaGVldCgpIHtcbiAgICAgICAgdGhpcy5hbGlnblNlbGZTZWxlY3Rvci51cGRhdGVTdHlsZVNoZWV0KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQpO1xuICAgICAgICB0aGlzLmZsZXhHcm93SW5wdXQudXBkYXRlU3R5bGVTaGVldCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0KTtcbiAgICAgICAgdGhpcy5mbGV4U2hyaW5rSW5wdXQudXBkYXRlU3R5bGVTaGVldCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0KTtcbiAgICAgICAgdGhpcy5mbGV4QmFzaXNJbnB1dC51cGRhdGVTdHlsZVNoZWV0KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlR3JpZENvbXBvbmVudHNTdHlsZVNoZWV0KCkge1xuICAgICAgICB0aGlzLmdyaWRDb2x1bW5TdGFydElucHV0LnVwZGF0ZVN0eWxlU2hlZXQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCk7XG4gICAgICAgIHRoaXMuZ3JpZENvbHVtbkVuZElucHV0LnVwZGF0ZVN0eWxlU2hlZXQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCk7XG4gICAgICAgIHRoaXMuZ3JpZFJvd1N0YXJ0SW5wdXQudXBkYXRlU3R5bGVTaGVldCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0KTtcbiAgICAgICAgdGhpcy5ncmlkUm93RW5kSW5wdXQudXBkYXRlU3R5bGVTaGVldCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0KTtcbiAgICAgICAgdGhpcy5ncmlkSnVzdGlmeVNlbGYudXBkYXRlU3R5bGVTaGVldCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0KTtcbiAgICAgICAgdGhpcy5ncmlkQWxpZ25TZWxmLnVwZGF0ZVN0eWxlU2hlZXQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IENsYXNzQ2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2UgZnJvbSAnLi4vaW50ZXJmYWNlcy9jbGFzcy1jaGFuZ2Utb2JzZXJ2ZXIuaW50ZXJmYWNlJztcblxuaW1wb3J0IENzc1N0eWxlU2hlZXQgZnJvbSAnLi4vLi4vY3NzLXN0eWxlc2hlZXQvY3NzLXN0eWxlc2hlZXQnO1xuXG5pbXBvcnQgQ29udGFpbmVyQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvQ29udGFpbmVyQnVpbGRlcic7XG5pbXBvcnQgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL1NlbGVjdG9yRnJvbUVudW1CdWlsZGVyJztcbmltcG9ydCBMYWJlbEJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0xhYmVsQnVpbGRlcic7XG5pbXBvcnQgSW5wdXRCdWlsZGVyIGZyb20gJy4uL21vZGVscy9JbnB1dEJ1aWxkZXInO1xuaW1wb3J0IFRleHRhcmVhQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvVGV4dGFyZWFCdWlsZGVyJztcblxuaW1wb3J0IElucHV0QW5kVW5pdHNTZWxlY3RvckNvbXBvbmVudCBmcm9tICcuL2lucHV0LXdpdGgtdW5pdHMtc2VsZWN0b3IuY29tcG9uZW50JztcbmltcG9ydCBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50IGZyb20gJy4vZ2VuZXJpYy1jc3MtcHJvcGVydHktbXV0YXRvci5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBEaXNwbGF5VHlwZXNFbnVtIH0gZnJvbSAnLi4vZW51bXMvZGlzcGxheS10eXBlcy5lbnVtJztcbmltcG9ydCB7IEZsZXhEaXJlY3Rpb25FbnVtIH0gZnJvbSAnLi4vZW51bXMvZmxleC1kaXJlY3Rpb24uZW51bSc7XG5pbXBvcnQgeyBTdHlsZU5hbWVFbnVtIH0gZnJvbSAnLi4vZW51bXMvc3R5bGUtbmFtZS5lbnVtJztcbmltcG9ydCB7IEZsZXhXcmFwRW51bSB9IGZyb20gJy4uL2VudW1zL2ZsZXgtd3JhcC5lbnVtJztcbmltcG9ydCB7IEFsaWduRmxleEl0ZW1zRW51bSB9IGZyb20gJy4uL2VudW1zL2FsaWduLWZsZXgtaXRlbXMuZW51bSc7XG5pbXBvcnQgeyBKdXN0aWZ5RmxleENvbnRlbnRFbnVtIH0gZnJvbSAnLi4vZW51bXMvanVzdGlmeS1mbGV4LWNvbnRlbnQuZW51bSc7XG5pbXBvcnQgeyBBbGlnbkZsZXhDb250ZW50RW51bSB9IGZyb20gJy4uL2VudW1zL2FsaWduLWZsZXgtY29udGVudC5lbnVtJztcbmltcG9ydCB7IElucHV0VHlwZUVudW0gfSBmcm9tICcuLi9lbnVtcy9pbnB1dC10eXBlLmVudW0nO1xuaW1wb3J0IHsgRXZlbnRUeXBlRW51bSB9IGZyb20gJy4uL2VudW1zL2V2ZW50LXR5cGUuZW51bSc7XG5pbXBvcnQgeyBKdXN0aWZ5R3JpZEl0ZW1zRW51bSB9IGZyb20gJy4uL2VudW1zL2p1c3RpZnktZ3JpZC1pdGVtcy5lbnVtJztcbmltcG9ydCB7IEFsaWduR3JpZEl0ZW1zRW51bSB9IGZyb20gJy4uL2VudW1zL2FsaWduLWdyaWQtaXRlbXMuZW51bSc7XG5pbXBvcnQgeyBKdXN0aWZ5R3JpZENvbnRlbnRFbnVtIH0gZnJvbSAnLi4vZW51bXMvanVzdGlmeS1ncmlkLWNvbnRlbnQuZW51bSc7XG5pbXBvcnQgeyBBbGlnbkdyaWRDb250ZW50RW51bSB9IGZyb20gJy4uL2VudW1zL2FsaWduLWdyaWQtY29udGVudC5lbnVtJztcbmltcG9ydCB7IEdyaWRBdXRvRmxvd0VudW0gfSBmcm9tICcuLi9lbnVtcy9ncmlkLWF1dG8tZmxvdy5lbnVtJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNwbGF5QXNQYXJlbnRDb21wb25lbnQgaW1wbGVtZW50cyBDbGFzc0NoYW5nZU9ic2VydmVySW50ZXJmYWNlIHtcbiAgICBwcml2YXRlIGRvbUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcbiAgICBwcml2YXRlIGRvbUVsZW1lbnRTdHlsZVNoZWV0OiBDU1NTdHlsZURlY2xhcmF0aW9uO1xuXG4gICAgcHJpdmF0ZSBkaXNwbGF5U2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSBmbGV4Q29udGFpbmVyQXNQYXJlbnQ6IENvbnRhaW5lckJ1aWxkZXI7XG4gICAgcHJpdmF0ZSBmbGV4RGlyZWN0aW9uU2VsZWN0b3I6IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBmbGV4V3JhcFNlbGVjdG9yOiBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50O1xuICAgIHByaXZhdGUgYWxpZ25JdGVtc1NlbGVjdG9yOiBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50O1xuICAgIHByaXZhdGUganVzdGlmeUNvbnRlbnRTZWxlY3RvcjogR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudDtcbiAgICBwcml2YXRlIGFsaWduQ29udGVudFNlbGVjdG9yOiBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50O1xuXG4gICAgcHJpdmF0ZSBncmlkQ29udGFpbmVyQXNQYXJlbnQ6IENvbnRhaW5lckJ1aWxkZXI7XG4gICAgcHJpdmF0ZSBncmlkVGVtcGxhdGVDb2x1bW5zSW5wdXQ6IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBncmlkVGVtcGxhdGVSb3dzSW5wdXQ6IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBncmlkQXV0b0NvbHVtbnNJbnB1dDogR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudDtcbiAgICBwcml2YXRlIGdyaWRBdXRvUm93c0lucHV0OiBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50O1xuICAgIHByaXZhdGUgZ3JpZFRlbXBsYXRlQXJlYXNUZXh0YXJlYTogR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudDtcbiAgICBwcml2YXRlIGdyaWRKdXN0aWZ5SXRlbXNTZWxlY3RvcjogR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudDtcbiAgICBwcml2YXRlIGdyaWRBbGlnbkl0ZW1zU2VsZWN0b3I6IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBncmlkSnVzdGlmeUNvbnRlbnRTZWxlY3RvcjogR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudDtcbiAgICBwcml2YXRlIGdyaWRBbGlnbkNvbnRlbnRTZWxlY3RvcjogR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudDtcbiAgICBwcml2YXRlIGdyaWRBdXRvRmxvd1NlbGVjdG9yOiBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50O1xuICAgIHByaXZhdGUgZ3JpZENvbHVtbkdhcElucHV0OiBJbnB1dEFuZFVuaXRzU2VsZWN0b3JDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBncmlkUm93R2FwSW5wdXQ6IElucHV0QW5kVW5pdHNTZWxlY3RvckNvbXBvbmVudDtcblxuICAgIGNvbnN0cnVjdG9yKGRvbUVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQgPSBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXModGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdFswXSk7XG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50cygpO1xuICAgIH1cblxuICAgIGdldCBjb21wb25lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZENvbXBvbmVudHMoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlUHJvcGVydHkgPSB0aGlzLnVwZGF0ZVByb3BlcnR5LmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5kaXNwbGF5U2VsZWN0b3IgPSBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIoRGlzcGxheVR5cGVzRW51bSlcbiAgICAgICAgICAgIC5zZWxlY3RPcHRpb24odGhpcy5nZXRDdXJyZW50UHJvcGVydGllcygnZGlzcGxheScpKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudXBkYXRlUHJvcGVydHkpXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW1bJ2ZsZXgtZGlyZWN0aW9uJ10sIEZsZXhEaXJlY3Rpb25FbnVtLmNvbHVtbilcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnYWxpZ24taXRlbXMnXSwgQWxpZ25GbGV4SXRlbXNFbnVtLnN0cmV0Y2gpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uYm9yZGVyLCAnMXB4IHNvbGlkICM0Q0FGNTAnKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLnBhZGRpbmcsICczcHgnKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdEaXNwbGF5IFNldHRpbmdzJylcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuZGlzcGxheVNlbGVjdG9yKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYnVpbGQoKTtcblxuICAgICAgICB0aGlzLmZsZXhDb250YWluZXJBc1BhcmVudCA9IHRoaXMuY3JlYXRlRmxleEFzUGFyZW50Q29udGFpbmVyKCk7XG4gICAgICAgIHRoaXMuZ3JpZENvbnRhaW5lckFzUGFyZW50ID0gdGhpcy5jcmVhdGVHcmlkQXNQYXJlbnRDb250YWluZXIoKTtcbiAgICAgICAgdGhpcy5zZXRDb21wb25lbnRBY2NvcmRpbmdUb1NlbGVjdG9yKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVQcm9wZXJ0eSgpIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZGlzcGxheSddID0gdGhpcy5kaXNwbGF5U2VsZWN0b3IudmFsdWU7XG4gICAgICAgIHRoaXMuc2V0Q29tcG9uZW50QWNjb3JkaW5nVG9TZWxlY3RvcigpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0Q3VycmVudFByb3BlcnRpZXMocHJvcGVydHk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0W3Byb3BlcnR5XTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldENvbXBvbmVudEFjY29yZGluZ1RvU2VsZWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9wZXJ0aWVzID0gdGhpcy5nZXRDdXJyZW50UHJvcGVydGllcygnZGlzcGxheScpO1xuXG4gICAgICAgIGlmIChjdXJyZW50UHJvcGVydGllcyA9PT0gRGlzcGxheVR5cGVzRW51bS5mbGV4IHx8IGN1cnJlbnRQcm9wZXJ0aWVzID09PSBEaXNwbGF5VHlwZXNFbnVtWydpbmxpbmUtZmxleCddKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0R3JpZCgpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVGbGV4Q29tcG9uZW50c1N0eWxlU2hlZXQoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0RmxleEFzUGFyZW50SW5pdGlhbFZhbHVlcygpO1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5mbGV4Q29udGFpbmVyQXNQYXJlbnQuYnVpbGQoKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICBjdXJyZW50UHJvcGVydGllcyA9PT0gRGlzcGxheVR5cGVzRW51bS5ncmlkXG4gICAgICAgICAgICB8fCBjdXJyZW50UHJvcGVydGllcyA9PT0gRGlzcGxheVR5cGVzRW51bVsnaW5saW5lLWdyaWQnXVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRGbGV4KCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUdyaWRDb21wb25lbnRzU3R5bGVTaGVldCgpO1xuICAgICAgICAgICAgdGhpcy5zZXRHcmlkQXNQYXJlbnRJbml0aWFsVmFsdWVzKCk7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmdyaWRDb250YWluZXJBc1BhcmVudC5idWlsZCgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRGbGV4KCk7XG4gICAgICAgICAgICB0aGlzLnJlc2V0R3JpZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVGbGV4QXNQYXJlbnRDb250YWluZXIoKSB7XG4gICAgICAgIHRoaXMuZmxleERpcmVjdGlvblNlbGVjdG9yID0gbmV3IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCxcbiAgICAgICAgICAgICdmbGV4LWRpcmVjdGlvbicsXG4gICAgICAgICAgICAnRmxleCBEaXJlY3Rpb24nLFxuICAgICAgICAgICAgbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKEZsZXhEaXJlY3Rpb25FbnVtKS5idWlsZCgpLFxuICAgICAgICAgICAgRXZlbnRUeXBlRW51bS5jaGFuZ2VcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmZsZXhXcmFwU2VsZWN0b3IgPSBuZXcgR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0LFxuICAgICAgICAgICAgJ2ZsZXgtd3JhcCcsXG4gICAgICAgICAgICAnRmxleCBXcmFwJyxcbiAgICAgICAgICAgIG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihGbGV4V3JhcEVudW0pLmJ1aWxkKCksXG4gICAgICAgICAgICBFdmVudFR5cGVFbnVtLmNoYW5nZVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuYWxpZ25JdGVtc1NlbGVjdG9yID0gbmV3IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCxcbiAgICAgICAgICAgICdhbGlnbi1pdGVtcycsXG4gICAgICAgICAgICAnQWxpZ24gSXRlbXMnLFxuICAgICAgICAgICAgbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKEFsaWduRmxleEl0ZW1zRW51bSkuYnVpbGQoKSxcbiAgICAgICAgICAgIEV2ZW50VHlwZUVudW0uY2hhbmdlXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5qdXN0aWZ5Q29udGVudFNlbGVjdG9yID0gbmV3IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCxcbiAgICAgICAgICAgICdqdXN0aWZ5LWNvbnRlbnQnLFxuICAgICAgICAgICAgJ0p1c3RpZnkgQ29udGVudCcsXG4gICAgICAgICAgICBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIoSnVzdGlmeUZsZXhDb250ZW50RW51bSkuYnVpbGQoKSxcbiAgICAgICAgICAgIEV2ZW50VHlwZUVudW0uY2hhbmdlXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5hbGlnbkNvbnRlbnRTZWxlY3RvciA9IG5ldyBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQsXG4gICAgICAgICAgICAnYWxpZ24tY29udGVudCcsXG4gICAgICAgICAgICAnQWxpZ24gQ29udGVudCcsXG4gICAgICAgICAgICBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIoQWxpZ25GbGV4Q29udGVudEVudW0pLmJ1aWxkKCksXG4gICAgICAgICAgICBFdmVudFR5cGVFbnVtLmNoYW5nZVxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmJvcmRlciwgJzFweCBzb2xpZCAjNENBRjUwJylcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5wYWRkaW5nLCAnM3B4JylcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnRGlzcGxheSBGbGV4IGFzIFBhcmVudCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmZsZXhEaXJlY3Rpb25TZWxlY3Rvci5jb21wb25lbnQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuZmxleFdyYXBTZWxlY3Rvci5jb21wb25lbnQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuYWxpZ25JdGVtc1NlbGVjdG9yLmNvbXBvbmVudClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5qdXN0aWZ5Q29udGVudFNlbGVjdG9yLmNvbXBvbmVudClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5hbGlnbkNvbnRlbnRTZWxlY3Rvci5jb21wb25lbnQpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEZsZXhBc1BhcmVudEluaXRpYWxWYWx1ZXMoKSB7XG4gICAgICAgIHRoaXMuZmxleERpcmVjdGlvblNlbGVjdG9yLnNldFZhbHVlKHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2ZsZXgtZGlyZWN0aW9uJ10gfHwgJycpO1xuICAgICAgICB0aGlzLmZsZXhXcmFwU2VsZWN0b3Iuc2V0VmFsdWUodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZmxleC13cmFwJ10gfHwgJycpO1xuICAgICAgICB0aGlzLmFsaWduSXRlbXNTZWxlY3Rvci5zZXRWYWx1ZSh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydhbGlnbi1pdGVtcyddIHx8ICcnKTtcbiAgICAgICAgdGhpcy5qdXN0aWZ5Q29udGVudFNlbGVjdG9yLnNldFZhbHVlKHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2p1c3RpZnktY29udGVudCddIHx8ICcnKTtcbiAgICAgICAgdGhpcy5hbGlnbkNvbnRlbnRTZWxlY3Rvci5zZXRWYWx1ZSh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydhbGlnbi1jb250ZW50J10gfHwgJycpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlR3JpZEFzUGFyZW50Q29udGFpbmVyKCkge1xuICAgICAgICB0aGlzLmdyaWRUZW1wbGF0ZUNvbHVtbnNJbnB1dCA9IG5ldyBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQsXG4gICAgICAgICAgICAnZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zJyxcbiAgICAgICAgICAgICdHcmlkIFRlbXBsYXRlIENvbHVtbnMnLFxuICAgICAgICAgICAgbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLnRleHQpLmJ1aWxkKCksXG4gICAgICAgICAgICBFdmVudFR5cGVFbnVtLmlucHV0KTtcblxuICAgICAgICB0aGlzLmdyaWRUZW1wbGF0ZVJvd3NJbnB1dCA9IG5ldyBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQsXG4gICAgICAgICAgICAnZ3JpZC10ZW1wbGF0ZS1yb3dzJyxcbiAgICAgICAgICAgICdHcmlkIFRlbXBsYXRlIFJvd3MnLFxuICAgICAgICAgICAgbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLnRleHQpLmJ1aWxkKCksXG4gICAgICAgICAgICBFdmVudFR5cGVFbnVtLmlucHV0KTtcblxuICAgICAgICB0aGlzLmdyaWRBdXRvQ29sdW1uc0lucHV0ID0gbmV3IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCxcbiAgICAgICAgICAgICdncmlkLWF1dG8tY29sdW1ucycsXG4gICAgICAgICAgICAnR3JpZCBBdXRvIENvbHVtbnMnLFxuICAgICAgICAgICAgbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLnRleHQpLmJ1aWxkKCksXG4gICAgICAgICAgICBFdmVudFR5cGVFbnVtLmlucHV0KTtcblxuICAgICAgICB0aGlzLmdyaWRBdXRvUm93c0lucHV0ID0gbmV3IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCxcbiAgICAgICAgICAgICdncmlkLWF1dG8tcm93cycsXG4gICAgICAgICAgICAnR3JpZCBBdXRvIFJvd3MnLFxuICAgICAgICAgICAgbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLnRleHQpLmJ1aWxkKCksXG4gICAgICAgICAgICBFdmVudFR5cGVFbnVtLmlucHV0KTtcblxuICAgICAgICB0aGlzLmdyaWRUZW1wbGF0ZUFyZWFzVGV4dGFyZWEgPSBuZXcgR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0LFxuICAgICAgICAgICAgJ2dyaWQtdGVtcGxhdGUtYXJlYXMnLFxuICAgICAgICAgICAgJ0dyaWQgVGVtcGxhdGUgQXJlYXMnLFxuICAgICAgICAgICAgbmV3IFRleHRhcmVhQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ucmVzaXplLCAndmVydGljYWwnKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpLFxuICAgICAgICAgICAgRXZlbnRUeXBlRW51bS5pbnB1dCk7XG5cbiAgICAgICAgdGhpcy5ncmlkSnVzdGlmeUl0ZW1zU2VsZWN0b3IgPSBuZXcgR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0LFxuICAgICAgICAgICAgJ2p1c3RpZnktaXRlbXMnLFxuICAgICAgICAgICAgJ0dyaWQgSnVzdGlmeSBJdGVtcycsXG4gICAgICAgICAgICBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIoSnVzdGlmeUdyaWRJdGVtc0VudW0pLmJ1aWxkKCksXG4gICAgICAgICAgICBFdmVudFR5cGVFbnVtLmNoYW5nZSk7XG5cbiAgICAgICAgdGhpcy5ncmlkQWxpZ25JdGVtc1NlbGVjdG9yID0gbmV3IEdlbmVyaWNDc3NQcm9wZXJ0eU11dGF0b3JDb21wb25lbnQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCxcbiAgICAgICAgICAgICdhbGlnbi1pdGVtcycsXG4gICAgICAgICAgICAnR3JpZCBBbGlnbiBJdGVtcycsXG4gICAgICAgICAgICBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIoQWxpZ25HcmlkSXRlbXNFbnVtKS5idWlsZCgpLFxuICAgICAgICAgICAgRXZlbnRUeXBlRW51bS5jaGFuZ2UpO1xuXG4gICAgICAgIHRoaXMuZ3JpZEp1c3RpZnlDb250ZW50U2VsZWN0b3IgPSBuZXcgR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0LFxuICAgICAgICAgICAgJ2p1c3RpZnktY29udGVudCcsXG4gICAgICAgICAgICAnR3JpZCBKdXN0aWZ5IENvbnRlbnQnLFxuICAgICAgICAgICAgbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKEp1c3RpZnlHcmlkQ29udGVudEVudW0pLmJ1aWxkKCksXG4gICAgICAgICAgICBFdmVudFR5cGVFbnVtLmNoYW5nZSk7XG5cbiAgICAgICAgdGhpcy5ncmlkQWxpZ25Db250ZW50U2VsZWN0b3IgPSBuZXcgR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0LFxuICAgICAgICAgICAgJ2FsaWduLWNvbnRlbnQnLFxuICAgICAgICAgICAgJ0dyaWQgQWxpZ24gQ29udGVudCcsXG4gICAgICAgICAgICBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIoQWxpZ25HcmlkQ29udGVudEVudW0pLmJ1aWxkKCksXG4gICAgICAgICAgICBFdmVudFR5cGVFbnVtLmNoYW5nZSk7XG5cbiAgICAgICAgdGhpcy5ncmlkQXV0b0Zsb3dTZWxlY3RvciA9IG5ldyBHZW5lcmljQ3NzUHJvcGVydHlNdXRhdG9yQ29tcG9uZW50KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQsXG4gICAgICAgICAgICAnZ3JpZC1hdXRvLWZsb3cnLFxuICAgICAgICAgICAgJ0dyaWQgQXV0byBGbG93JyxcbiAgICAgICAgICAgIG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihHcmlkQXV0b0Zsb3dFbnVtKS5idWlsZCgpLFxuICAgICAgICAgICAgRXZlbnRUeXBlRW51bS5jaGFuZ2UpO1xuXG4gICAgICAgIHRoaXMuZ3JpZENvbHVtbkdhcElucHV0ID0gbmV3IElucHV0QW5kVW5pdHNTZWxlY3RvckNvbXBvbmVudChcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQsXG4gICAgICAgICAgICAnY29sdW1uLWdhcCcsXG4gICAgICAgICAgICAnR3JpZCBDb2x1bW4gR2FwJ1xuICAgICAgICApXG4gICAgICAgICAgICAuc2V0TWluVmFsdWUoMClcbiAgICAgICAgICAgIC5zZXRaZXJvVmFsdWUoMClcblxuICAgICAgICB0aGlzLmdyaWRSb3dHYXBJbnB1dCA9IG5ldyBJbnB1dEFuZFVuaXRzU2VsZWN0b3JDb21wb25lbnQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCwgJ3Jvdy1nYXAnLCAnR3JpZCBSb3cgR2FwJylcbiAgICAgICAgICAgIC5zZXRNaW5WYWx1ZSgwKVxuICAgICAgICAgICAgLnNldFplcm9WYWx1ZSgwKVxuXG4gICAgICAgIHJldHVybiBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmJvcmRlciwgJzFweCBzb2xpZCAjNENBRjUwJylcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5wYWRkaW5nLCAnM3B4JylcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnRGlzcGxheSBHcmlkIGFzIFBhcmVudCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmdyaWRUZW1wbGF0ZUNvbHVtbnNJbnB1dC5jb21wb25lbnQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuZ3JpZFRlbXBsYXRlUm93c0lucHV0LmNvbXBvbmVudClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5ncmlkQXV0b0NvbHVtbnNJbnB1dC5jb21wb25lbnQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuZ3JpZEF1dG9Sb3dzSW5wdXQuY29tcG9uZW50KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmdyaWRUZW1wbGF0ZUFyZWFzVGV4dGFyZWEuY29tcG9uZW50KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmdyaWRKdXN0aWZ5SXRlbXNTZWxlY3Rvci5jb21wb25lbnQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuZ3JpZEFsaWduSXRlbXNTZWxlY3Rvci5jb21wb25lbnQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuZ3JpZEp1c3RpZnlDb250ZW50U2VsZWN0b3IuY29tcG9uZW50KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmdyaWRBbGlnbkNvbnRlbnRTZWxlY3Rvci5jb21wb25lbnQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuZ3JpZEF1dG9GbG93U2VsZWN0b3IuY29tcG9uZW50KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmdyaWRDb2x1bW5HYXBJbnB1dC5jb21wb25lbnQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuZ3JpZFJvd0dhcElucHV0LmNvbXBvbmVudClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgIH1cblxuICAgIHByaXZhdGUgc2V0R3JpZEFzUGFyZW50SW5pdGlhbFZhbHVlcygpIHtcbiAgICAgICAgdGhpcy5ncmlkVGVtcGxhdGVDb2x1bW5zSW5wdXQuc2V0VmFsdWUodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zJ10gfHwgJycpO1xuICAgICAgICB0aGlzLmdyaWRUZW1wbGF0ZVJvd3NJbnB1dC5zZXRWYWx1ZSh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydncmlkLXRlbXBsYXRlLXJvd3MnXSB8fCAnJyk7XG4gICAgICAgIHRoaXMuZ3JpZEF1dG9Db2x1bW5zSW5wdXQuc2V0VmFsdWUodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZ3JpZC1hdXRvLWNvbHVtbnMnXSB8fCAnJyk7XG4gICAgICAgIHRoaXMuZ3JpZEF1dG9Sb3dzSW5wdXQuc2V0VmFsdWUodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZ3JpZC1hdXRvLXJvd3MnXSB8fCAnJyk7XG4gICAgICAgIHRoaXMuZ3JpZFRlbXBsYXRlQXJlYXNUZXh0YXJlYS5zZXRWYWx1ZSh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydncmlkLXRlbXBsYXRlLWFyZWFzJ10gfHwgJycpO1xuICAgICAgICB0aGlzLmdyaWRKdXN0aWZ5SXRlbXNTZWxlY3Rvci5zZXRWYWx1ZSh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydqdXN0aWZ5LWl0ZW1zJ10gfHwgJycpO1xuICAgICAgICB0aGlzLmdyaWRBbGlnbkl0ZW1zU2VsZWN0b3Iuc2V0VmFsdWUodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYWxpZ24taXRlbXMnXSB8fCAnJyk7XG4gICAgICAgIHRoaXMuZ3JpZEp1c3RpZnlDb250ZW50U2VsZWN0b3Iuc2V0VmFsdWUodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnanVzdGlmeS1jb250ZW50J10gfHwgJycpO1xuICAgICAgICB0aGlzLmdyaWRBbGlnbkNvbnRlbnRTZWxlY3Rvci5zZXRWYWx1ZSh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydhbGlnbi1jb250ZW50J10gfHwgJycpO1xuICAgICAgICB0aGlzLmdyaWRBdXRvRmxvd1NlbGVjdG9yLnNldFZhbHVlKHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2dyaWQtYXV0by1mbG93J10gfHwgJycpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVzZXRGbGV4KCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5mbGV4Q29udGFpbmVyQXNQYXJlbnQuYnVpbGQoKSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdW5kZWZpbmVkO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZmxleC1kaXJlY3Rpb24nXSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZmxleC13cmFwJ10gPSAnJztcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2FsaWduLWl0ZW1zJ10gPSAnJztcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2p1c3RpZnktY29udGVudCddID0gJyc7XG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydhbGlnbi1jb250ZW50J10gPSAnJztcblxuICAgICAgICAgICAgLy8gTk9URTogZGVjaXNpb246IGRlbGV0ZSBvbmx5IGNoaWxkcmVuIHN0eWxlcyBmb3IgY2xhc3NlcyBuYW1lZCBhcyB0aGUgY29tcG9uZW50IGlkLlxuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50LmNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgICAgICAgICBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXMoY2hpbGRbJ25hbWUnXSlbJ2FsaWduLXNlbGYnXSA9ICcnO1xuICAgICAgICAgICAgICAgIENzc1N0eWxlU2hlZXQuZ2V0UnVsZVN0eWxlcyhjaGlsZFsnbmFtZSddKVsnZmxleC1ncm93J10gPSAnJztcbiAgICAgICAgICAgICAgICBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXMoY2hpbGRbJ25hbWUnXSlbJ2ZsZXgtc2hyaW5rJ10gPSAnJztcbiAgICAgICAgICAgICAgICBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXMoY2hpbGRbJ25hbWUnXSlbJ2ZsZXgtYmFzaXMnXSA9ICcnO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgcmVzZXRHcmlkKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5ncmlkQ29udGFpbmVyQXNQYXJlbnQuYnVpbGQoKSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdW5kZWZpbmVkO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zJ10gPSAnJztcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2dyaWQtdGVtcGxhdGUtcm93cyddID0gJyc7XG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydncmlkLWF1dG8tY29sdW1ucyddID0gJyc7XG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydncmlkLWF1dG8tcm93cyddID0gJyc7XG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydncmlkLXRlbXBsYXRlLWFyZWFzJ10gPSAnJztcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2p1c3RpZnktaXRlbXMnXSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnYWxpZ24taXRlbXMnXSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnanVzdGlmeS1jb250ZW50J10gPSAnJztcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2FsaWduLWNvbnRlbnQnXSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZ3JpZC1hdXRvLWZsb3cnXSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnY29sdW1uLWdhcCddID0gJyc7XG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydyb3ctZ2FwJ10gPSAnJztcblxuXG4gICAgICAgICAgICAvLyBOT1RFOiBkZWNpc2lvbjogZGVsZXRlIG9ubHkgY2hpbGRyZW4gc3R5bGVzIGZvciBjbGFzc2VzIG5hbWVkIGFzIHRoZSBjb21wb25lbnQgaWQuXG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQuY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICAgICAgICAgIENzc1N0eWxlU2hlZXQuZ2V0UnVsZVN0eWxlcyhjaGlsZFsnbmFtZSddKVsnZ3JpZC1jb2x1bW4tc3RhcnQnXSA9ICcnO1xuICAgICAgICAgICAgICAgIENzc1N0eWxlU2hlZXQuZ2V0UnVsZVN0eWxlcyhjaGlsZFsnbmFtZSddKVsnZ3JpZC1jb2x1bW4tZW5kJ10gPSAnJztcbiAgICAgICAgICAgICAgICBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXMoY2hpbGRbJ25hbWUnXSlbJ2dyaWQtcm93LXN0YXJ0J10gPSAnJztcbiAgICAgICAgICAgICAgICBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXMoY2hpbGRbJ25hbWUnXSlbJ2dyaWQtcm93LWVuZCddID0gJyc7XG4gICAgICAgICAgICAgICAgQ3NzU3R5bGVTaGVldC5nZXRSdWxlU3R5bGVzKGNoaWxkWyduYW1lJ10pWydqdXN0aWZ5LXNlbGYnXSA9ICcnO1xuICAgICAgICAgICAgICAgIENzc1N0eWxlU2hlZXQuZ2V0UnVsZVN0eWxlcyhjaGlsZFsnbmFtZSddKVsnYWxpZ24tc2VsZiddID0gJyc7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGNsYXNzTmFtZVVwZGF0ZWQobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQgPSBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXMobmFtZSk7XG5cbiAgICAgICAgY29uc3QgY3VycmVudFByb3BlcnRpZXMgPSB0aGlzLmdldEN1cnJlbnRQcm9wZXJ0aWVzKCdkaXNwbGF5Jyk7XG4gICAgICAgIHRoaXMuZGlzcGxheVNlbGVjdG9yLnZhbHVlID0gY3VycmVudFByb3BlcnRpZXM7XG5cbiAgICAgICAgdGhpcy5zZXRDb21wb25lbnRBY2NvcmRpbmdUb1NlbGVjdG9yKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVGbGV4Q29tcG9uZW50c1N0eWxlU2hlZXQoKSB7XG4gICAgICAgIHRoaXMuZmxleERpcmVjdGlvblNlbGVjdG9yLnVwZGF0ZVN0eWxlU2hlZXQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCk7XG4gICAgICAgIHRoaXMuZmxleFdyYXBTZWxlY3Rvci51cGRhdGVTdHlsZVNoZWV0KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQpO1xuICAgICAgICB0aGlzLmFsaWduSXRlbXNTZWxlY3Rvci51cGRhdGVTdHlsZVNoZWV0KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQpO1xuICAgICAgICB0aGlzLmp1c3RpZnlDb250ZW50U2VsZWN0b3IudXBkYXRlU3R5bGVTaGVldCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0KTtcbiAgICAgICAgdGhpcy5hbGlnbkNvbnRlbnRTZWxlY3Rvci51cGRhdGVTdHlsZVNoZWV0KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlR3JpZENvbXBvbmVudHNTdHlsZVNoZWV0KCkge1xuICAgICAgICB0aGlzLmdyaWRUZW1wbGF0ZUNvbHVtbnNJbnB1dC51cGRhdGVTdHlsZVNoZWV0KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQpO1xuICAgICAgICB0aGlzLmdyaWRUZW1wbGF0ZVJvd3NJbnB1dC51cGRhdGVTdHlsZVNoZWV0KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQpO1xuICAgICAgICB0aGlzLmdyaWRBdXRvQ29sdW1uc0lucHV0LnVwZGF0ZVN0eWxlU2hlZXQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCk7XG4gICAgICAgIHRoaXMuZ3JpZEF1dG9Sb3dzSW5wdXQudXBkYXRlU3R5bGVTaGVldCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0KTtcbiAgICAgICAgdGhpcy5ncmlkVGVtcGxhdGVBcmVhc1RleHRhcmVhLnVwZGF0ZVN0eWxlU2hlZXQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCk7XG4gICAgICAgIHRoaXMuZ3JpZEp1c3RpZnlJdGVtc1NlbGVjdG9yLnVwZGF0ZVN0eWxlU2hlZXQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCk7XG4gICAgICAgIHRoaXMuZ3JpZEFsaWduSXRlbXNTZWxlY3Rvci51cGRhdGVTdHlsZVNoZWV0KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQpO1xuICAgICAgICB0aGlzLmdyaWRKdXN0aWZ5Q29udGVudFNlbGVjdG9yLnVwZGF0ZVN0eWxlU2hlZXQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCk7XG4gICAgICAgIHRoaXMuZ3JpZEFsaWduQ29udGVudFNlbGVjdG9yLnVwZGF0ZVN0eWxlU2hlZXQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCk7XG4gICAgICAgIHRoaXMuZ3JpZEF1dG9GbG93U2VsZWN0b3IudXBkYXRlU3R5bGVTaGVldCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0KTtcbiAgICAgICAgdGhpcy5ncmlkQ29sdW1uR2FwSW5wdXQudXBkYXRlU3R5bGVTaGVldCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0KTtcbiAgICAgICAgdGhpcy5ncmlkUm93R2FwSW5wdXQudXBkYXRlU3R5bGVTaGVldCh0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ2xhc3NDaGFuZ2VPYnNlcnZlckludGVyZmFjZSBmcm9tICcuLi9pbnRlcmZhY2VzL2NsYXNzLWNoYW5nZS1vYnNlcnZlci5pbnRlcmZhY2UnO1xuXG5pbXBvcnQgQ29udGFpbmVyQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvQ29udGFpbmVyQnVpbGRlcic7XG5pbXBvcnQgSW5wdXRCdWlsZGVyIGZyb20gJy4uL21vZGVscy9JbnB1dEJ1aWxkZXInO1xuaW1wb3J0IExhYmVsQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvTGFiZWxCdWlsZGVyJztcbmltcG9ydCBTZWxlY3RvckZyb21FbnVtQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXInO1xuaW1wb3J0IEJ1dHRvbkJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0J1dHRvbkJ1aWxkZXInO1xuXG5pbXBvcnQgQ3NzU3R5bGVTaGVldCBmcm9tICcuLi8uLi9jc3Mtc3R5bGVzaGVldC9jc3Mtc3R5bGVzaGVldCc7XG5pbXBvcnQgZ2V0VW5pdCBmcm9tICcuLi9mdW5jdGlvbnMvZ2V0LWNzcy11bml0JztcbmltcG9ydCBjb2xvclRvSGV4IGZyb20gJy4uL2Z1bmN0aW9ucy9yZ2ItdG8taGV4JztcblxuaW1wb3J0IHsgSW5wdXRUeXBlRW51bSB9IGZyb20gJy4uL2VudW1zL2lucHV0LXR5cGUuZW51bSc7XG5pbXBvcnQgeyBVbml0c0VudW0gfSBmcm9tICcuLi9lbnVtcy91bml0cy5lbnVtJztcbmltcG9ydCB7IFN0eWxlTmFtZUVudW0gfSBmcm9tICcuLi9lbnVtcy9zdHlsZS1uYW1lLmVudW0nO1xuaW1wb3J0IHsgRGlzcGxheVR5cGVzRW51bSB9IGZyb20gJy4uL2VudW1zL2Rpc3BsYXktdHlwZXMuZW51bSc7XG5pbXBvcnQgeyBGb250c0VudW0gfSBmcm9tICcuLi9lbnVtcy9mb250cy5lbnVtJztcbmltcG9ydCB7IEZvbnRTdHlsZXNFbnVtIH0gZnJvbSAnLi4vZW51bXMvZm9udC1zdHlsZXMuZW51bSc7XG5pbXBvcnQgeyBGb250V2VpZ2h0RW51bSB9IGZyb20gJy4uL2VudW1zL2ZvbnQtd2VpZ2h0LmVudW0nO1xuaW1wb3J0IHsgRm9udFZhcmlhbnRFbnVtIH0gZnJvbSAnLi4vZW51bXMvZm9udC12YXJpYW50LmVudW0nO1xuXG4vLyBUT0RPOiBoYWNlciBtYXMgYmVsbG8gZWwgY29udGVuZWRvciBkZSB0b2RhcyBsYXMgZnVlbnRlcyBxdWUgdGllbmUgZWwgZWxlbWVudG9cbi8vIFRPRE86IHZlciBzaSBzZSBwdWVkZW4gYWdyZWdhciBmdWVudGVzIGRlIEdvb2dsZSwgcG9yIGVqZW1wbG8uLi4gY29tbyBoYWNlcmxvLi4uXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvbnRDb21wb25lbnQgaW1wbGVtZW50cyBDbGFzc0NoYW5nZU9ic2VydmVySW50ZXJmYWNlIHtcbiAgICBwcml2YXRlIGRvbUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcbiAgICBwcml2YXRlIGRvbUVsZW1lbnRTdHlsZVNoZWV0OiBDU1NTdHlsZURlY2xhcmF0aW9uO1xuXG4gICAgcHJpdmF0ZSBjdXJyZW50Rm9udEZhbWlsaWVzQXJyYXk6IHN0cmluZ1tdID0gW107XG4gICAgcHJpdmF0ZSBmb250U2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIHByaXZhdGUgY3VycmVudEZvbnRzRWxlbWVudHNDb250YWluZXI6IENvbnRhaW5lckJ1aWxkZXI7XG4gICAgcHJpdmF0ZSBjdXJyZW50Rm9udHNDb250YWluZXI6IENvbnRhaW5lckJ1aWxkZXI7XG5cbiAgICBwcml2YXRlIGZvbnRTaXplSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBmb250VW5pdFNlbGVjdG9yOiBIVE1MU2VsZWN0RWxlbWVudDtcblxuICAgIHByaXZhdGUgZm9udFN0eWxlU2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIHByaXZhdGUgZm9udFdlaWdodFNlbGVjdG9yOiBIVE1MU2VsZWN0RWxlbWVudDtcbiAgICBwcml2YXRlIGZvbnRWYXJpYW50U2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIHByaXZhdGUgZm9udENvbG9ySW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihkb21FbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0ID0gQ3NzU3R5bGVTaGVldC5nZXRSdWxlU3R5bGVzKHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3RbMF0pO1xuICAgICAgICB0aGlzLmFkZENvbXBvbmVudHMoKTtcbiAgICB9XG5cbiAgICBnZXQgY29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRDb21wb25lbnRzKCkge1xuICAgICAgICB0aGlzLmFkZEZvbnQgPSB0aGlzLmFkZEZvbnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW1vdmVGb250ID0gdGhpcy5yZW1vdmVGb250LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubW92ZUZvbnRUb1RoZUZyb250ID0gdGhpcy5tb3ZlRm9udFRvVGhlRnJvbnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5tb3ZlRm9udEJlaGluZCA9IHRoaXMubW92ZUZvbnRCZWhpbmQuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZUZvbnRTaXplID0gdGhpcy51cGRhdGVGb250U2l6ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZUZvbnRTdHlsZSA9IHRoaXMudXBkYXRlRm9udFN0eWxlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlRm9udFdlaWdodCA9IHRoaXMudXBkYXRlRm9udFdlaWdodC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZUZvbnRWYXJpYW4gPSB0aGlzLnVwZGF0ZUZvbnRWYXJpYW4uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGVGb250Q29sb3IgPSB0aGlzLnVwZGF0ZUZvbnRDb2xvci5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuYnVpbGRBbGxDb21wb25lbnRzKCk7XG4gICAgICAgIHRoaXMuc2V0SW5pdGlhbFZhbHVlc0FjY29yZGluZ1RvQ2xhc3MoKTtcblxuICAgICAgICBjb25zdCBhZGRGb250QnV0dG9uID0gbmV3IEJ1dHRvbkJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldElubmVyVGV4dCgnQWRkJylcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYWRkRm9udClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgY29uc3QgZm9udEZhbWlseUNvbXBvbmVudHNDb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0FkZCBGb250IEZhbWlseScpXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmZvbnRTZWxlY3RvcilcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQoYWRkRm9udEJ1dHRvbilcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICB0aGlzLmN1cnJlbnRGb250c0NvbnRhaW5lciA9IHRoaXMuY3VycmVudEZvbnRzQ29tcG9uZW50c0NvbnRhaW5lcigpO1xuXG4gICAgICAgIGNvbnN0IGZvbnRTaXplQ29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdGb250IFNpemUnKVxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5mb250U2l6ZUlucHV0KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmZvbnRVbml0U2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgY29uc3QgZm9udFN0eWxlQ29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdGb250IFN0eWxlJylcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuZm9udFN0eWxlU2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgY29uc3QgZm9udFdlaWdodENvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnRm9udCBXZWlnaHQnKVxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5mb250V2VpZ2h0U2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgY29uc3QgZm9udFZhcmlhbnRDb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0ZvbnQgVmFyaWFudCcpXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmZvbnRWYXJpYW50U2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgY29uc3QgZm9udENvbG9yQ29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdGb250IENvbG9yJylcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuZm9udENvbG9ySW5wdXQpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5ib3JkZXIsICcxcHggc29saWQgIzRDQUY1MCcpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5wYWRkaW5nLCAnM3B4JylcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnRm9udCcpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChmb250RmFtaWx5Q29tcG9uZW50c0NvbnRhaW5lcilcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZElmRGVmaW5lZCh0aGlzLmN1cnJlbnRGb250c0NvbnRhaW5lci5idWlsZCgpKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKGZvbnRTaXplQ29udGFpbmVyKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKGZvbnRTdHlsZUNvbnRhaW5lcilcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChmb250V2VpZ2h0Q29udGFpbmVyKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKGZvbnRWYXJpYW50Q29udGFpbmVyKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKGZvbnRDb2xvckNvbnRhaW5lcilcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBidWlsZEFsbENvbXBvbmVudHMoKSB7XG4gICAgICAgIHRoaXMuZm9udFNlbGVjdG9yID0gbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKEZvbnRzRW51bSlcbiAgICAgICAgICAgIC5zZWxlY3RPcHRpb24oRm9udHNFbnVtLmRlZmF1bHQpXG4gICAgICAgICAgICAuYnVpbGQoKTtcblxuICAgICAgICB0aGlzLmN1cnJlbnRGb250c0VsZW1lbnRzQ29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKTtcblxuICAgICAgICB0aGlzLmZvbnRTaXplSW5wdXQgPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0ubnVtYmVyKVxuICAgICAgICAgICAgLnNldE1pbigwKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy51cGRhdGVGb250U2l6ZSlcbiAgICAgICAgICAgIC5idWlsZCgpO1xuXG4gICAgICAgIHRoaXMuZm9udFVuaXRTZWxlY3RvciA9IG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihVbml0c0VudW0pXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVGb250U2l6ZSlcbiAgICAgICAgICAgIC5idWlsZCgpO1xuXG4gICAgICAgIHRoaXMuZm9udFN0eWxlU2VsZWN0b3IgPSBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIoRm9udFN0eWxlc0VudW0pXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVGb250U3R5bGUpXG4gICAgICAgICAgICAuYnVpbGQoKTtcblxuICAgICAgICB0aGlzLmZvbnRXZWlnaHRTZWxlY3RvciA9IG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihGb250V2VpZ2h0RW51bSlcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnVwZGF0ZUZvbnRXZWlnaHQpXG4gICAgICAgICAgICAuYnVpbGQoKTtcblxuICAgICAgICB0aGlzLmZvbnRWYXJpYW50U2VsZWN0b3IgPSBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIoRm9udFZhcmlhbnRFbnVtKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudXBkYXRlRm9udFZhcmlhbilcbiAgICAgICAgICAgIC5idWlsZCgpO1xuXG4gICAgICAgIHRoaXMuZm9udENvbG9ySW5wdXQgPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0uY29sb3IpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLnVwZGF0ZUZvbnRDb2xvcilcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRJbml0aWFsVmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpIHtcbiAgICAgICAgdGhpcy5zZXRGb250RmFtaWx5VmFsdWVBY2NvcmRpbmdUb0NsYXNzKCk7XG4gICAgICAgIHRoaXMuZmlsbENvbnRhaW5lckFjY29yZGluZ1RvSW5pdGlhbFZhbHVlcygpO1xuXG4gICAgICAgIHRoaXMuc2V0Rm9udFNpemVWYWx1ZUFjY29yZGluZ1RvQ2xhc3MoKTtcbiAgICAgICAgdGhpcy5zZXRGb250U3R5bGVWYWx1ZUFjY29yZGluZ1RvQ2xhc3MoKTtcbiAgICAgICAgdGhpcy5zZXRGb250V2VpZ2h0VmFsdWVBY2NvcmRpbmdUb0NsYXNzKCk7XG4gICAgICAgIHRoaXMuc2V0Rm9udFZhcmlhbnRWYWx1ZUFjY29yZGluZ1RvQ2xhc3MoKTtcbiAgICAgICAgdGhpcy5zZXRGb250Q29sb3JWYWx1ZUFjY29yZGluZ1RvQ2xhc3MoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEZvbnRGYW1pbHlWYWx1ZUFjY29yZGluZ1RvQ2xhc3MoKSB7XG4gICAgICAgIGNvbnN0IGZvbnRzID0gdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZm9udC1mYW1pbHknXTtcbiAgICAgICAgaWYgKGZvbnRzKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRGb250RmFtaWxpZXNBcnJheSA9IGZvbnRzLnNwbGl0KCcsICcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmaWxsQ29udGFpbmVyQWNjb3JkaW5nVG9Jbml0aWFsVmFsdWVzKCkge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50Rm9udEZhbWlsaWVzQXJyYXkpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEZvbnRGYW1pbGllc0FycmF5LmZvckVhY2goKGZvbnQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRGb250c0VsZW1lbnRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZm9udEZhbWlseUNvbXBvbmVudChmb250LnRyaW0oKSkpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc2V0Rm9udFNpemVWYWx1ZUFjY29yZGluZ1RvQ2xhc3MoKSB7XG4gICAgICAgIGNvbnN0IGZvbnRTaXplID0gdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZm9udC1zaXplJ107XG4gICAgICAgIHRoaXMuZm9udFNpemVJbnB1dC52YWx1ZSA9IGAke3BhcnNlSW50KGZvbnRTaXplKSB8fCAxfWA7XG4gICAgICAgIHRoaXMuZm9udFVuaXRTZWxlY3Rvci52YWx1ZSA9IGdldFVuaXQoZm9udFNpemUsIFVuaXRzRW51bS5lbSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRGb250U3R5bGVWYWx1ZUFjY29yZGluZ1RvQ2xhc3MoKSB7XG4gICAgICAgIGNvbnN0IGZvbnRTdHlsZSA9IHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2ZvbnQtc3R5bGUnXTtcbiAgICAgICAgdGhpcy5mb250U3R5bGVTZWxlY3Rvci52YWx1ZSA9IGZvbnRTdHlsZSA9PT0gJycgPyAnbm9ybWFsJyA6IGZvbnRTdHlsZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEZvbnRXZWlnaHRWYWx1ZUFjY29yZGluZ1RvQ2xhc3MoKSB7XG4gICAgICAgIGNvbnN0IGZvbnRXZWlnaHQgPSB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydmb250LXdlaWdodCddO1xuICAgICAgICB0aGlzLmZvbnRXZWlnaHRTZWxlY3Rvci52YWx1ZSA9IGZvbnRXZWlnaHQgPT09ICcnID8gJ25vcm1hbCcgOiBmb250V2VpZ2h0O1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0Rm9udFZhcmlhbnRWYWx1ZUFjY29yZGluZ1RvQ2xhc3MoKSB7XG4gICAgICAgIGNvbnN0IGZvbnRWYXJpYW50ID0gdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZm9udC12YXJpYW50J107XG4gICAgICAgIHRoaXMuZm9udFZhcmlhbnRTZWxlY3Rvci52YWx1ZSA9IGZvbnRWYXJpYW50ID09PSAnJyA/ICdub3JtYWwnIDogZm9udFZhcmlhbnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRGb250Q29sb3JWYWx1ZUFjY29yZGluZ1RvQ2xhc3MoKSB7XG4gICAgICAgIGNvbnN0IGZvbnRDb2xvciA9IHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2NvbG9yJ107XG4gICAgICAgIHRoaXMuZm9udENvbG9ySW5wdXQudmFsdWUgPSBjb2xvclRvSGV4KGZvbnRDb2xvcik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmb250RmFtaWx5Q29tcG9uZW50KGZvbnQ6IHN0cmluZyk6IEhUTUxEaXZFbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXROYW1lKGZvbnQpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmdyaWQpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zJ10sICcyZnIgMWZyIDFmciAxZnInKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoZm9udClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBCdXR0b25CdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdSZW1vdmUnKVxuICAgICAgICAgICAgICAgIC5zZXROYW1lKGZvbnQpXG4gICAgICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yZW1vdmVGb250KVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IEJ1dHRvbkJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ+KGkScpXG4gICAgICAgICAgICAgICAgLnNldE5hbWUoZm9udClcbiAgICAgICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm1vdmVGb250VG9UaGVGcm9udClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBCdXR0b25CdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCfihpMnKVxuICAgICAgICAgICAgICAgIC5zZXROYW1lKGZvbnQpXG4gICAgICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5tb3ZlRm9udEJlaGluZClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICB9XG5cbiAgICBwcml2YXRlIGN1cnJlbnRGb250c0NvbXBvbmVudHNDb250YWluZXIoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0N1cnJlbnQgQ29tcG9uZW50IEZvbnRzJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuY3VycmVudEZvbnRzRWxlbWVudHNDb250YWluZXIuYnVpbGQoKSlcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICApXG5cbiAgICAgICAgaWYodGhpcy5jdXJyZW50Rm9udEZhbWlsaWVzQXJyYXkubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICBjb250YWluZXIuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCAnYmxvY2snKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29udGFpbmVyLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgJ25vbmUnKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZEZvbnQoKSB7XG4gICAgICAgIGlmKCF0aGlzLmN1cnJlbnRGb250RmFtaWxpZXNBcnJheS5pbmNsdWRlcyh0aGlzLmZvbnRTZWxlY3Rvci52YWx1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEZvbnRGYW1pbGllc0FycmF5LnB1c2godGhpcy5mb250U2VsZWN0b3IudmFsdWUpXG5cbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2ZvbnQtZmFtaWx5J10gPSB0aGlzLmN1cnJlbnRGb250RmFtaWxpZXNBcnJheS5qb2luKCcsICcpO1xuXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRGb250c0VsZW1lbnRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZm9udEZhbWlseUNvbXBvbmVudCh0aGlzLmZvbnRTZWxlY3Rvci52YWx1ZSkpO1xuXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRGb250c0NvbnRhaW5lci5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksICdibG9jaycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW1vdmVGb250KGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGZvbnROYW1lID0gZXZlbnQudGFyZ2V0WyduYW1lJ107XG5cbiAgICAgICAgY29uc3QgZm9udEluZGV4ID0gdGhpcy5jdXJyZW50Rm9udEZhbWlsaWVzQXJyYXkuZmluZEluZGV4KChmb250KSA9PiBmb250ID09PSBmb250TmFtZSk7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50Rm9udEZhbWlsaWVzQXJyYXkuc3BsaWNlKGZvbnRJbmRleCwgMSk7XG5cbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZm9udC1mYW1pbHknXSA9IHRoaXMuY3VycmVudEZvbnRGYW1pbGllc0FycmF5LmpvaW4oJywgJyk7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50Rm9udHNFbGVtZW50c0NvbnRhaW5lci5yZW1vdmVDaGlsZE5vZGVCeU5hbWUoZm9udE5hbWUpO1xuXG4gICAgICAgIGlmKHRoaXMuY3VycmVudEZvbnRzRWxlbWVudHNDb250YWluZXIuZ2V0QWxsQ2hpbGRzKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRGb250c0NvbnRhaW5lci5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksICdub25lJylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgbW92ZUZvbnRUb1RoZUZyb250KGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGZvbnROYW1lID0gZXZlbnQudGFyZ2V0WyduYW1lJ107XG5cbiAgICAgICAgY29uc3QgZm9udEluZGV4ID0gdGhpcy5jdXJyZW50Rm9udEZhbWlsaWVzQXJyYXkuZmluZEluZGV4KChmb250KSA9PiBmb250ID09PSBmb250TmFtZSk7XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRFbGVtZW50ID0gdGhpcy5jdXJyZW50Rm9udEZhbWlsaWVzQXJyYXkuc3BsaWNlKGZvbnRJbmRleCwgMSlbMF07XG5cbiAgICAgICAgdGhpcy5jdXJyZW50Rm9udEZhbWlsaWVzQXJyYXkuc3BsaWNlKGZvbnRJbmRleCAtIDEsIDAsIHNlbGVjdGVkRWxlbWVudCk7XG5cbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZm9udC1mYW1pbHknXSA9IHRoaXMuY3VycmVudEZvbnRGYW1pbGllc0FycmF5Lm1hcCgoZm9udCkgPT4gZm9udCkuam9pbignLCAnKTtcblxuICAgICAgICB0aGlzLmN1cnJlbnRGb250c0VsZW1lbnRzQ29udGFpbmVyLm1vb3ZlQ2hpbGRVcHBlclBvc2l0aW9uQnlOYW1lKGZvbnROYW1lKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG1vdmVGb250QmVoaW5kKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGZvbnROYW1lID0gZXZlbnQudGFyZ2V0WyduYW1lJ107XG5cbiAgICAgICAgY29uc3QgZm9udEluZGV4ID0gdGhpcy5jdXJyZW50Rm9udEZhbWlsaWVzQXJyYXkuZmluZEluZGV4KChmb250KSA9PiBmb250ID09PSBmb250TmFtZSk7XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRFbGVtZW50ID0gdGhpcy5jdXJyZW50Rm9udEZhbWlsaWVzQXJyYXkuc3BsaWNlKGZvbnRJbmRleCwgMSlbMF07XG5cbiAgICAgICAgdGhpcy5jdXJyZW50Rm9udEZhbWlsaWVzQXJyYXkuc3BsaWNlKGZvbnRJbmRleCArIDEsIDAsIHNlbGVjdGVkRWxlbWVudCk7XG5cbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnZm9udC1mYW1pbHknXSA9IHRoaXMuY3VycmVudEZvbnRGYW1pbGllc0FycmF5Lm1hcCgoZm9udCkgPT4gZm9udCkuam9pbignLCAnKTtcblxuICAgICAgICB0aGlzLmN1cnJlbnRGb250c0VsZW1lbnRzQ29udGFpbmVyLm1vb3ZlQ2hpbGRMb3dlclBvc2l0aW9uQnlOYW1lKGZvbnROYW1lKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUZvbnRTaXplKCkge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydmb250LXNpemUnXSA9IGAke3RoaXMuZm9udFNpemVJbnB1dC52YWx1ZX0ke3RoaXMuZm9udFVuaXRTZWxlY3Rvci52YWx1ZX1gXG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVGb250U3R5bGUoKSB7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbJ2ZvbnQtc3R5bGUnXSA9IHRoaXMuZm9udFN0eWxlU2VsZWN0b3IudmFsdWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVGb250V2VpZ2h0KCkge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydmb250LXdlaWdodCddID0gdGhpcy5mb250V2VpZ2h0U2VsZWN0b3IudmFsdWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVGb250VmFyaWFuKCkge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wydmb250LXZhcmlhbnQnXSA9IHRoaXMuZm9udFZhcmlhbnRTZWxlY3Rvci52YWx1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUZvbnRDb2xvcigpIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnY29sb3InXSA9IHRoaXMuZm9udENvbG9ySW5wdXQudmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGNsYXNzTmFtZVVwZGF0ZWQobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQgPSBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXMobmFtZSk7XG4gICAgICAgIHRoaXMuc2V0SW5pdGlhbFZhbHVlc0FjY29yZGluZ1RvQ2xhc3MoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29udGFpbmVyQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvQ29udGFpbmVyQnVpbGRlcic7XG5pbXBvcnQgTGFiZWxCdWlsZGVyIGZyb20gJy4uL21vZGVscy9MYWJlbEJ1aWxkZXInO1xuXG5pbXBvcnQgeyBTdHlsZU5hbWVFbnVtIH0gZnJvbSAnLi4vZW51bXMvc3R5bGUtbmFtZS5lbnVtJztcbmltcG9ydCB7IEV2ZW50VHlwZUVudW0gfSBmcm9tICcuLi9lbnVtcy9ldmVudC10eXBlLmVudW0nO1xuaW1wb3J0IHsgRmxleERpcmVjdGlvbkVudW0gfSBmcm9tICcuLi9lbnVtcy9mbGV4LWRpcmVjdGlvbi5lbnVtJztcbmltcG9ydCB7IERpc3BsYXlUeXBlc0VudW0gfSBmcm9tICcuLi9lbnVtcy9kaXNwbGF5LXR5cGVzLmVudW0nO1xuaW1wb3J0IHsgQWxpZ25GbGV4SXRlbXNFbnVtIH0gZnJvbSAnLi4vZW51bXMvYWxpZ24tZmxleC1pdGVtcy5lbnVtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2VuZXJpY0Nzc1Byb3BlcnR5TXV0YXRvckNvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBjb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgZG9tRWxlbWVudFN0eWxlU2hlZXQ6IENTU1N0eWxlRGVjbGFyYXRpb247XG5cbiAgICBwcml2YXRlIGxhYmVsOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBzdHlsZTogc3RyaW5nO1xuICAgIHByaXZhdGUgY2hhbmdlRWxlbWVudDogSFRNTElucHV0RWxlbWVudCB8IEhUTUxTZWxlY3RFbGVtZW50IHwgSFRNTFRleHRBcmVhRWxlbWVudDtcbiAgICBwcml2YXRlIGV2ZW50VHlwZTogRXZlbnRUeXBlRW51bTtcbiAgICBwcml2YXRlIHVuaXQ6IHN0cmluZztcblxuICAgIHByaXZhdGUgemVyb1ZhbHVlOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgZG9tRWxlbWVudFN0eWxlU2hlZXQ6IENTU1N0eWxlRGVjbGFyYXRpb24sXG4gICAgICAgIHN0eWxlOiBzdHJpbmcsXG4gICAgICAgIGxhYmVsOiBzdHJpbmcsXG4gICAgICAgIGNoYW5nZUVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MU2VsZWN0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnQsXG4gICAgICAgIGV2ZW50VHlwZTogRXZlbnRUeXBlRW51bSxcbiAgICAgICAgdW5pdCA9ICcnLFxuICAgICkge1xuICAgICAgICB0aGlzLnN0eWxlID0gc3R5bGU7XG4gICAgICAgIHRoaXMubGFiZWwgPSBsYWJlbDtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCA9IGRvbUVsZW1lbnRTdHlsZVNoZWV0O1xuICAgICAgICB0aGlzLmNoYW5nZUVsZW1lbnQgPSBjaGFuZ2VFbGVtZW50O1xuICAgICAgICB0aGlzLmV2ZW50VHlwZSA9IGV2ZW50VHlwZTtcbiAgICAgICAgdGhpcy51bml0ID0gdW5pdDtcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnRzKCk7XG4gICAgfVxuXG4gICAgZ2V0IGNvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkQ29tcG9uZW50cygpIHtcbiAgICAgICAgdGhpcy51cGRhdGVQcm9wZXJ0eSA9IHRoaXMudXBkYXRlUHJvcGVydHkuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmNoYW5nZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmV2ZW50VHlwZSwgdGhpcy51cGRhdGVQcm9wZXJ0eSlcblxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydmbGV4LWRpcmVjdGlvbiddLCBGbGV4RGlyZWN0aW9uRW51bS5jb2x1bW4pXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnYWxpZ24taXRlbXMnXSwgQWxpZ25GbGV4SXRlbXNFbnVtLnN0cmV0Y2gpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQodGhpcy5sYWJlbClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuY2hhbmdlRWxlbWVudClcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgfVxuXG4gICAgcHVibGljIHNldFZhbHVlKHZhbHVlID0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VFbGVtZW50LnZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZVN0eWxlU2hlZXQoZG9tRWxlbWVudFN0eWxlU2hlZXQ6IENTU1N0eWxlRGVjbGFyYXRpb24pIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCA9IGRvbUVsZW1lbnRTdHlsZVNoZWV0O1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlUHJvcGVydHkoKSB7XG4gICAgICAgIGlmKHBhcnNlSW50KHRoaXMuY2hhbmdlRWxlbWVudC52YWx1ZSkgPT09IHRoaXMuemVyb1ZhbHVlKXtcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbdGhpcy5zdHlsZV0gPSAnJztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0W3RoaXMuc3R5bGVdID0gdGhpcy5jaGFuZ2VFbGVtZW50LnZhbHVlICsgdGhpcy51bml0O1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRaZXJvVmFsdWUodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLnplcm9WYWx1ZSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29udGFpbmVyQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvQ29udGFpbmVyQnVpbGRlcic7XG5pbXBvcnQgSW5wdXRCdWlsZGVyIGZyb20gJy4uL21vZGVscy9JbnB1dEJ1aWxkZXInO1xuaW1wb3J0IExhYmVsQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvTGFiZWxCdWlsZGVyJztcbmltcG9ydCBCdXR0b25CdWlsZGVyIGZyb20gJy4uL21vZGVscy9CdXR0b25CdWlsZGVyJztcblxuaW1wb3J0IHsgU3R5bGVOYW1lRW51bSB9IGZyb20gJy4uL2VudW1zL3N0eWxlLW5hbWUuZW51bSc7XG5pbXBvcnQgeyBJbnB1dFR5cGVFbnVtIH0gZnJvbSAnLi4vZW51bXMvaW5wdXQtdHlwZS5lbnVtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2VuZXJpY1ByaW1hcnlJbnB1dENvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBkb21FbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBsYWJlbDogc3RyaW5nO1xuICAgIHByaXZhdGUgc3R5bGU6IHN0cmluZztcblxuICAgIHByaXZhdGUgcHJvcGVydHlWYWx1ZUlucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IoZG9tRWxlbWVudDogSFRNTEVsZW1lbnQsIHN0eWxlOiBzdHJpbmcsIGxhYmVsOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgICAgICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICAgICAgICB0aGlzLnN0eWxlID0gc3R5bGU7XG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50cygpO1xuICAgIH1cblxuICAgIGdldCBjb21wb25lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZENvbXBvbmVudHMoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlUHJvcGVydHkgPSB0aGlzLnVwZGF0ZVByb3BlcnR5LmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5wcm9wZXJ0eVZhbHVlSW5wdXQgPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0udGV4dClcbiAgICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLmRvbUVsZW1lbnRbdGhpcy5zdHlsZV0pXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLnVwZGF0ZVByb3BlcnR5KVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICBjb25zdCBlbGVtZW50c0NvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLnByb3BlcnR5VmFsdWVJbnB1dClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChcbiAgICAgICAgICAgICAgICBuZXcgQnV0dG9uQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0NoYW5nZScpXG4gICAgICAgICAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudXBkYXRlUHJvcGVydHkpXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uYm9yZGVyLCAnMXB4IHNvbGlkICM0Q0FGNTAnKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ucGFkZGluZywgJzNweCcpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQodGhpcy5sYWJlbClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKGVsZW1lbnRzQ29udGFpbmVyKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZVByb3BlcnR5KGV2ZW50OiBNb3VzZUV2ZW50IHwgS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAoIGV2ZW50LnR5cGUgPT09ICdjbGljaydcbiAgICAgICAgICAgIHx8IChldmVudCBhcyBLZXlib2FyZEV2ZW50KS5rZXkgPT09ICdFbnRlcidcbiAgICAgICAgICAgIHx8IChldmVudCBhcyBLZXlib2FyZEV2ZW50KS5jb2RlID09PSAnMTMnXG4gICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50W3RoaXMuc3R5bGVdID0gdGhpcy5wcm9wZXJ0eVZhbHVlSW5wdXQudmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgQ29udGFpbmVyQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvQ29udGFpbmVyQnVpbGRlcic7XG5pbXBvcnQgTGFiZWxCdWlsZGVyIGZyb20gJy4uL21vZGVscy9MYWJlbEJ1aWxkZXInO1xuaW1wb3J0IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyIGZyb20gJy4uL21vZGVscy9TZWxlY3RvckZyb21FbnVtQnVpbGRlcic7XG5cbmltcG9ydCB7IFN0eWxlTmFtZUVudW0gfSBmcm9tICcuLi9lbnVtcy9zdHlsZS1uYW1lLmVudW0nO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2VuZXJpY1ByaW1hcnlTZWxlY3RvckNvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBkb21FbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBsYWJlbDogc3RyaW5nO1xuICAgIHByaXZhdGUgYXRyaWJ1dGVUb01vZGlmeTogc3RyaW5nO1xuICAgIHByaXZhdGUgb3B0aW9uczogUmVjb3JkPHN0cmluZyxzdHJpbmc+O1xuICAgIHByaXZhdGUgcHJvcGVydHlTZWxlY3RvcjogSFRNTFNlbGVjdEVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihkb21FbGVtZW50OiBIVE1MRWxlbWVudCwgYXRyaWJ1dGVUb01vZGlmeTogc3RyaW5nLCBsYWJlbDogc3RyaW5nLCBvcHRpb25zOiBSZWNvcmQ8c3RyaW5nLHN0cmluZz4pIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgICAgICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICAgICAgICB0aGlzLmF0cmlidXRlVG9Nb2RpZnkgPSBhdHJpYnV0ZVRvTW9kaWZ5O1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB0aGlzLmFkZENvbXBvbmVudHMoKTtcbiAgICB9XG5cbiAgICBnZXQgY29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRDb21wb25lbnRzKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVByb3BlcnR5ID0gdGhpcy51cGRhdGVQcm9wZXJ0eS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMucHJvcGVydHlTZWxlY3RvciA9IG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcih0aGlzLm9wdGlvbnMpXG4gICAgICAgICAgICAuc2VsZWN0T3B0aW9uKHRoaXMuZG9tRWxlbWVudFt0aGlzLmF0cmlidXRlVG9Nb2RpZnldKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudXBkYXRlUHJvcGVydHkpXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIGNvbnN0IGVsZW1lbnRzQ29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMucHJvcGVydHlTZWxlY3RvcilcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5ib3JkZXIsICcxcHggc29saWQgIzRDQUY1MCcpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5wYWRkaW5nLCAnM3B4JylcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCh0aGlzLmxhYmVsKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQoZWxlbWVudHNDb250YWluZXIpXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlUHJvcGVydHkoKSB7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFt0aGlzLmF0cmlidXRlVG9Nb2RpZnldID0gdGhpcy5wcm9wZXJ0eVNlbGVjdG9yLnZhbHVlO1xuICAgIH1cbn1cbiIsImltcG9ydCBDb250YWluZXJCdWlsZGVyIGZyb20gJy4uL21vZGVscy9Db250YWluZXJCdWlsZGVyJztcbmltcG9ydCBJbnB1dEJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0lucHV0QnVpbGRlcic7XG5pbXBvcnQgTGFiZWxCdWlsZGVyIGZyb20gJy4uL21vZGVscy9MYWJlbEJ1aWxkZXInO1xuaW1wb3J0IEJ1dHRvbkJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0J1dHRvbkJ1aWxkZXInO1xuaW1wb3J0IFJhd0hUTUxDb25wb25lbnQgZnJvbSAnLi4vLi4vaHRtbC1jb21wb25lbnRzL1Jhd0hUTUxDb21wb25lbnQnO1xuXG5pbXBvcnQgZGVmaW5lRWxlbWVudElkIGZyb20gJy4uL2Z1bmN0aW9ucy9kZWZpbmUtZWxlbWVudC1pZCc7XG5cbmltcG9ydCB7IFN0eWxlTmFtZUVudW0gfSBmcm9tICcuLi9lbnVtcy9zdHlsZS1uYW1lLmVudW0nO1xuaW1wb3J0IHsgSW5wdXRUeXBlRW51bSB9IGZyb20gJy4uL2VudW1zL2lucHV0LXR5cGUuZW51bSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElkRGVmaW5pdGlvbkNvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBkb21FbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2VzOiBIVE1MRWxlbWVudFtdO1xuXG4gICAgcHJpdmF0ZSBwcm9wZXJ0eVZhbHVlSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihkb21FbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgICAgICAvLyBUT0RPOiBzaSBsYSBjbGFzZSBzb2xvIGxhIHV0aWxpemEgZXNlIHVuaWNvIGNvbXBvbmVudGUsXG4gICAgICAgIC8vIHF1aXphcyBlbCBub21icmUgZGUgbGEgY2xhc2UgY3NzIGRlYmVyaWEgaXIgY29uICMgeSBubyBjb24gcHVudG8uLi5cblxuICAgICAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICAgICAgICBJZERlZmluaXRpb25Db21wb25lbnQuaW5zdGFuY2VzID0gUmF3SFRNTENvbnBvbmVudC5pbnN0YW5jZXM7XG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50cygpO1xuICAgIH1cblxuICAgIGdldCBjb21wb25lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZENvbXBvbmVudHMoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlUHJvcGVydHkgPSB0aGlzLnVwZGF0ZVByb3BlcnR5LmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5wcm9wZXJ0eVZhbHVlSW5wdXQgPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0udGV4dClcbiAgICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLmRvbUVsZW1lbnQuaWQpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLnVwZGF0ZVByb3BlcnR5KVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICBjb25zdCBlbGVtZW50c0NvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLnByb3BlcnR5VmFsdWVJbnB1dClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChcbiAgICAgICAgICAgICAgICBuZXcgQnV0dG9uQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0NoYW5nZScpXG4gICAgICAgICAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudXBkYXRlUHJvcGVydHkpXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uYm9yZGVyLCAnMXB4IHNvbGlkICM0Q0FGNTAnKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ucGFkZGluZywgJzNweCcpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0lkIERlZmluaXRpb24nKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQoZWxlbWVudHNDb250YWluZXIpXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlUHJvcGVydHkoZXZlbnQ6IE1vdXNlRXZlbnQgfCBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGlmICggdGhpcy5wcm9wZXJ0eVZhbHVlSW5wdXQudmFsdWUgIT09IHRoaXMuZG9tRWxlbWVudC5pZFxuICAgICAgICAgICAgJiYgKCBldmVudC50eXBlID09PSAnY2xpY2snXG4gICAgICAgICAgICB8fCAoZXZlbnQgYXMgS2V5Ym9hcmRFdmVudCkua2V5ID09PSAnRW50ZXInXG4gICAgICAgICAgICB8fCAoZXZlbnQgYXMgS2V5Ym9hcmRFdmVudCkuY29kZSA9PT0gJzEzJ1xuICAgICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSBkZWZpbmVFbGVtZW50SWQodGhpcy5wcm9wZXJ0eVZhbHVlSW5wdXQudmFsdWUsIElkRGVmaW5pdGlvbkNvbXBvbmVudC5pbnN0YW5jZXMpO1xuXG4gICAgICAgICAgICAgICAgaWYoaWQgPT09ICcnKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQuaWQgPSBpZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BlcnR5VmFsdWVJbnB1dC52YWx1ZSA9IHRoaXMuZG9tRWxlbWVudC5pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBDb250YWluZXJCdWlsZGVyIGZyb20gJy4uL21vZGVscy9Db250YWluZXJCdWlsZGVyJztcbmltcG9ydCBMYWJlbEJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0xhYmVsQnVpbGRlcic7XG5pbXBvcnQgSW5wdXRCdWlsZGVyIGZyb20gJy4uL21vZGVscy9JbnB1dEJ1aWxkZXInO1xuaW1wb3J0IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyIGZyb20gJy4uL21vZGVscy9TZWxlY3RvckZyb21FbnVtQnVpbGRlcic7XG5cbmltcG9ydCBnZXRVbml0IGZyb20gJy4uL2Z1bmN0aW9ucy9nZXQtY3NzLXVuaXQnO1xuXG5pbXBvcnQgeyBTdHlsZU5hbWVFbnVtIH0gZnJvbSAnLi4vZW51bXMvc3R5bGUtbmFtZS5lbnVtJztcbmltcG9ydCB7IElucHV0VHlwZUVudW0gfSBmcm9tICcuLi9lbnVtcy9pbnB1dC10eXBlLmVudW0nO1xuaW1wb3J0IHsgVW5pdHNFbnVtIH0gZnJvbSAnLi4vZW51bXMvdW5pdHMuZW51bSc7XG5pbXBvcnQgeyBEaXNwbGF5VHlwZXNFbnVtIH0gZnJvbSAnLi4vZW51bXMvZGlzcGxheS10eXBlcy5lbnVtJztcbmltcG9ydCB7IEZsZXhEaXJlY3Rpb25FbnVtIH0gZnJvbSAnLi4vZW51bXMvZmxleC1kaXJlY3Rpb24uZW51bSc7XG5pbXBvcnQgeyBBbGlnbkZsZXhJdGVtc0VudW0gfSBmcm9tICcuLi9lbnVtcy9hbGlnbi1mbGV4LWl0ZW1zLmVudW0nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dEFuZFVuaXRzU2VsZWN0b3JDb21wb25lbnQge1xuICAgIHByaXZhdGUgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcbiAgICBwcml2YXRlIGRvbUVsZW1lbnRTdHlsZVNoZWV0OiBDU1NTdHlsZURlY2xhcmF0aW9uO1xuXG4gICAgcHJpdmF0ZSBsYWJlbDogc3RyaW5nO1xuICAgIHByaXZhdGUgc3R5bGU6IHN0cmluZztcblxuICAgIHByaXZhdGUgcHJvcGVydHlWYWx1ZUlucHV0OiBJbnB1dEJ1aWxkZXI7XG4gICAgcHJpdmF0ZSB1bml0c1NlbGVjdG9ySW5wdXQ6IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyO1xuXG4gICAgcHJpdmF0ZSB6ZXJvVmFsdWU6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRvbUVsZW1lbnRTdHlsZVNoZWV0OiBDU1NTdHlsZURlY2xhcmF0aW9uLCBzdHlsZTogc3RyaW5nLCBsYWJlbDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc3R5bGUgPSBzdHlsZTtcbiAgICAgICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0ID0gZG9tRWxlbWVudFN0eWxlU2hlZXQ7XG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50cygpO1xuICAgICAgICB0aGlzLnNldEluaXRpYWxWYWx1ZXMoKTtcbiAgICB9XG5cbiAgICBnZXQgY29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRDb21wb25lbnRzKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVByb3BlcnR5ID0gdGhpcy51cGRhdGVQcm9wZXJ0eS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMudW5pdHNTZWxlY3RvcklucHV0ID0gbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKFVuaXRzRW51bSlcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnVwZGF0ZVByb3BlcnR5KVxuXG4gICAgICAgIHRoaXMucHJvcGVydHlWYWx1ZUlucHV0ID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLm51bWJlcilcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMudXBkYXRlUHJvcGVydHkpXG5cbiAgICAgICAgY29uc3QgaW5uZXJDb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5wcm9wZXJ0eVZhbHVlSW5wdXQuYnVpbGQoKSlcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLnVuaXRzU2VsZWN0b3JJbnB1dC5idWlsZCgpKVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtWydmbGV4LWRpcmVjdGlvbiddLCBGbGV4RGlyZWN0aW9uRW51bS5jb2x1bW4pXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bVsnYWxpZ24taXRlbXMnXSwgQWxpZ25GbGV4SXRlbXNFbnVtLnN0cmV0Y2gpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQodGhpcy5sYWJlbClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKGlubmVyQ29udGFpbmVyKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEluaXRpYWxWYWx1ZXMoKSB7XG4gICAgICAgIHRoaXMucHJvcGVydHlWYWx1ZUlucHV0LnNldFZhbHVlKGAke3BhcnNlSW50KHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbdGhpcy5zdHlsZV0pIHx8IDB9YClcbiAgICAgICAgdGhpcy51bml0c1NlbGVjdG9ySW5wdXQuc2VsZWN0T3B0aW9uKGdldFVuaXQodGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFt0aGlzLnN0eWxlXSkpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVQcm9wZXJ0eSgpIHtcbiAgICAgICAgaWYocGFyc2VJbnQodGhpcy5wcm9wZXJ0eVZhbHVlSW5wdXQuZ2V0VmFsdWUoKSkgPT09IHRoaXMuemVyb1ZhbHVlKXtcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbdGhpcy5zdHlsZV0gPSAnJztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0W3RoaXMuc3R5bGVdID1cbiAgICAgICAgICAgIGAke3RoaXMucHJvcGVydHlWYWx1ZUlucHV0LmdldFZhbHVlKCl9JHt0aGlzLnVuaXRzU2VsZWN0b3JJbnB1dC5nZXRWYWx1ZSgpfWBcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlU3R5bGVTaGVldChkb21FbGVtZW50U3R5bGVTaGVldDogQ1NTU3R5bGVEZWNsYXJhdGlvbikge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0ID0gZG9tRWxlbWVudFN0eWxlU2hlZXQ7XG4gICAgICAgIHRoaXMuc2V0SW5pdGlhbFZhbHVlcygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRNaW5WYWx1ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMucHJvcGVydHlWYWx1ZUlucHV0LnNldE1pbih2YWx1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRaZXJvVmFsdWUodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLnplcm9WYWx1ZSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG4iLCJpbXBvcnQgQ2xhc3NDaGFuZ2VPYnNlcnZlckludGVyZmFjZSBmcm9tICcuLi9pbnRlcmZhY2VzL2NsYXNzLWNoYW5nZS1vYnNlcnZlci5pbnRlcmZhY2UnO1xuXG5pbXBvcnQgQ29udGFpbmVyQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvQ29udGFpbmVyQnVpbGRlcic7XG5pbXBvcnQgSW5wdXRCdWlsZGVyIGZyb20gJy4uL21vZGVscy9JbnB1dEJ1aWxkZXInO1xuaW1wb3J0IExhYmVsQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvTGFiZWxCdWlsZGVyJztcbmltcG9ydCBTZWxlY3RvckZyb21FbnVtQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXInO1xuXG5pbXBvcnQgeyBJbnB1dFR5cGVFbnVtIH0gZnJvbSAnLi4vZW51bXMvaW5wdXQtdHlwZS5lbnVtJztcbmltcG9ydCB7IFVuaXRzRW51bSB9IGZyb20gJy4uL2VudW1zL3VuaXRzLmVudW0nO1xuaW1wb3J0IHsgU3R5bGVOYW1lRW51bSB9IGZyb20gJy4uL2VudW1zL3N0eWxlLW5hbWUuZW51bSc7XG5cbmltcG9ydCBDc3NTdHlsZVNoZWV0IGZyb20gJy4uLy4uL2Nzcy1zdHlsZXNoZWV0L2Nzcy1zdHlsZXNoZWV0JztcblxuaW1wb3J0IGNhcGl0YWxpemVGaXJzdExldHRlcnMgZnJvbSAnLi4vZnVuY3Rpb25zL2ZpcnN0LWxldHRlcnMtY2FwaXRhbGl6ZWQnO1xuaW1wb3J0IGdldFVuaXQgZnJvbSAnLi4vZnVuY3Rpb25zL2dldC1jc3MtdW5pdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcmdpbk9yUGFkZGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIENsYXNzQ2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2Uge1xuICAgIHByaXZhdGUgdHlwZTtcbiAgICBwcml2YXRlIGRvbUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcbiAgICBwcml2YXRlIGRvbUVsZW1lbnRTdHlsZVNoZWV0OiBDU1NTdHlsZURlY2xhcmF0aW9uO1xuXG4gICAgcHJpdmF0ZSB0b3BQcm9wZXJ0eVZhbHVlSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSByaWd0aFByb3BlcnR5VmFsdWVJbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgICBwcml2YXRlIGJvdHRvbVByb3BlcnR5VmFsdWVJbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgICBwcml2YXRlIGxlZnRQcm9wZXJ0eVZhbHVlSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIHRvcFVuaXRTZWxlY3RvcjogSFRNTFNlbGVjdEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSByaWdodFVuaXRTZWxlY3RvcjogSFRNTFNlbGVjdEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBib3R0b21Vbml0U2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIHByaXZhdGUgbGVmdFVuaXRTZWxlY3RvcjogSFRNTFNlbGVjdEVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIHNlbGVjdEFsbENoZWNrQm94OiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IoZG9tRWxlbWVudDogSFRNTEVsZW1lbnQsIHR5cGU6ICdtYXJnaW4nIHwgJ3BhZGRpbmcnLCApIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCA9IENzc1N0eWxlU2hlZXQuZ2V0UnVsZVN0eWxlcyh0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0WzBdKVxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudHMoKTtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZXNBY2NvcmRpbmdUb0NsYXNzKCk7XG4gICAgICAgIHRoaXMudXBkYXRlUHJvcGVydHkoKVxuICAgIH1cblxuICAgIGdldCBjb21wb25lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZENvbXBvbmVudHMoKSB7XG4gICAgICAgIC8vIFRPRE86IGZhbHRhIGFncmVnYXIgZWwgIWltcG9ydGFudCB5IHF1aXphcyBsb3MgaW5oZXJpdCB5IG5vIHNlIHNpIGhhYnJhIG1hcyBwcm9waWVkYWRlc1xuICAgICAgICAvLyBxdWl6YXMgdG9kbyBlc28gZGViYSBlc3RhciBlbiBlbCBzZWxlY3RvciBkZSBsYSB1bmlkYWQuLi5cblxuICAgICAgICB0aGlzLnVwZGF0ZVByb3BlcnR5ID0gdGhpcy51cGRhdGVQcm9wZXJ0eS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuc2VsZWN0QWxsQ2hlY2tCb3ggPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0uY2hlY2tib3gpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGVQcm9wZXJ0eSlcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgY29uc3Qgc2VsZWN0QWxsQ29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ1NlbGVjdCBBbGwnKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5zZWxlY3RBbGxDaGVja0JveClcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgdGhpcy50b3BQcm9wZXJ0eVZhbHVlSW5wdXQgPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0ubnVtYmVyKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy51cGRhdGVQcm9wZXJ0eSlcbiAgICAgICAgICAgIC5idWlsZCgpO1xuICAgICAgICB0aGlzLnJpZ3RoUHJvcGVydHlWYWx1ZUlucHV0ID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLm51bWJlcilcbiAgICAgICAgICAgIC5kaXNhYmxlZCh0aGlzLnNlbGVjdEFsbENoZWNrQm94LmNoZWNrZWQpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLnVwZGF0ZVByb3BlcnR5KVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG4gICAgICAgIHRoaXMuYm90dG9tUHJvcGVydHlWYWx1ZUlucHV0ID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLm51bWJlcilcbiAgICAgICAgICAgIC5kaXNhYmxlZCh0aGlzLnNlbGVjdEFsbENoZWNrQm94LmNoZWNrZWQpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLnVwZGF0ZVByb3BlcnR5KVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG4gICAgICAgIHRoaXMubGVmdFByb3BlcnR5VmFsdWVJbnB1dCA9IG5ldyBJbnB1dEJ1aWxkZXIoSW5wdXRUeXBlRW51bS5udW1iZXIpXG4gICAgICAgICAgICAuZGlzYWJsZWQodGhpcy5zZWxlY3RBbGxDaGVja0JveC5jaGVja2VkKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy51cGRhdGVQcm9wZXJ0eSlcbiAgICAgICAgICAgIC5idWlsZCgpO1xuXG4gICAgICAgIHRoaXMudG9wVW5pdFNlbGVjdG9yID0gbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKFVuaXRzRW51bSlcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnVwZGF0ZVByb3BlcnR5KVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgdGhpcy5ib3R0b21Vbml0U2VsZWN0b3IgPSBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIoVW5pdHNFbnVtKVxuICAgICAgICAgICAgLmRpc2FibGVkKHRoaXMuc2VsZWN0QWxsQ2hlY2tCb3guY2hlY2tlZClcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnVwZGF0ZVByb3BlcnR5KVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgdGhpcy5yaWdodFVuaXRTZWxlY3RvciA9IG5ldyBTZWxlY3RvckZyb21FbnVtQnVpbGRlcihVbml0c0VudW0pXG4gICAgICAgICAgICAuZGlzYWJsZWQodGhpcy5zZWxlY3RBbGxDaGVja0JveC5jaGVja2VkKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudXBkYXRlUHJvcGVydHkpXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICB0aGlzLmxlZnRVbml0U2VsZWN0b3IgPSBuZXcgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIoVW5pdHNFbnVtKVxuICAgICAgICAgICAgLmRpc2FibGVkKHRoaXMuc2VsZWN0QWxsQ2hlY2tCb3guY2hlY2tlZClcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnVwZGF0ZVByb3BlcnR5KVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICBjb25zdCB0b3BDb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnVCcpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLnRvcFByb3BlcnR5VmFsdWVJbnB1dClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLnRvcFVuaXRTZWxlY3RvcilcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgY29uc3QgcmlnaHRDb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnUicpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLnJpZ3RoUHJvcGVydHlWYWx1ZUlucHV0KVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMucmlnaHRVbml0U2VsZWN0b3IpXG4gICAgICAgICAgICAuYnVpbGQoKVxuXG4gICAgICAgIGNvbnN0IGJvdHRvbUNvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdCJylcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuYm90dG9tUHJvcGVydHlWYWx1ZUlucHV0KVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuYm90dG9tVW5pdFNlbGVjdG9yKVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICBjb25zdCBsZWZ0Q29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0wnKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5sZWZ0UHJvcGVydHlWYWx1ZUlucHV0KVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMubGVmdFVuaXRTZWxlY3RvcilcbiAgICAgICAgICAgIC5idWlsZCgpXG5cbiAgICAgICAgY29uc3QgaW5wdXRWYWx1ZXNDb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQodG9wQ29udGFpbmVyKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKHJpZ2h0Q29udGFpbmVyKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKGJvdHRvbUNvbnRhaW5lcilcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChsZWZ0Q29udGFpbmVyKVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmJvcmRlciwgJzFweCBzb2xpZCAjNENBRjUwJylcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLnBhZGRpbmcsICczcHgnKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KGAke2NhcGl0YWxpemVGaXJzdExldHRlcnModGhpcy50eXBlLCAnICcsICcgJyl9IFNlbGVjdG9yYClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKHNlbGVjdEFsbENvbnRhaW5lcilcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChpbnB1dFZhbHVlc0NvbnRhaW5lcilcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVQcm9wZXJ0eSgpIHtcbiAgICAgICAgbGV0IHt0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnR9ID0gdGhpcy5nZXRDdXJyZW50UHJvcGVydGllcygpO1xuXG4gICAgICAgIGlmKHRoaXMuc2VsZWN0QWxsQ2hlY2tCb3guY2hlY2tlZCl7XG4gICAgICAgICAgICB0aGlzLnJpZ3RoUHJvcGVydHlWYWx1ZUlucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tUHJvcGVydHlWYWx1ZUlucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubGVmdFByb3BlcnR5VmFsdWVJbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnJpZ2h0VW5pdFNlbGVjdG9yLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tVW5pdFNlbGVjdG9yLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubGVmdFVuaXRTZWxlY3Rvci5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmKHRoaXMudG9wVW5pdFNlbGVjdG9yLnZhbHVlID09PSBVbml0c0VudW0uYXV0byl7XG4gICAgICAgICAgICAgICAgdG9wID0gJ2F1dG8nO1xuICAgICAgICAgICAgICAgIHJpZ2h0ID0gJ2F1dG8nO1xuICAgICAgICAgICAgICAgIGJvdHRvbSA9ICdhdXRvJztcbiAgICAgICAgICAgICAgICBsZWZ0ID0gJ2F1dG8nO1xuXG4gICAgICAgICAgICAgICAgdGhpcy50b3BQcm9wZXJ0eVZhbHVlSW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMucmlndGhQcm9wZXJ0eVZhbHVlSW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuYm90dG9tUHJvcGVydHlWYWx1ZUlucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnRQcm9wZXJ0eVZhbHVlSW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5yaWdodFVuaXRTZWxlY3Rvci52YWx1ZSA9IHRoaXMudG9wVW5pdFNlbGVjdG9yLnZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuYm90dG9tVW5pdFNlbGVjdG9yLnZhbHVlID0gdGhpcy50b3BVbml0U2VsZWN0b3IudmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5sZWZ0VW5pdFNlbGVjdG9yLnZhbHVlID0gdGhpcy50b3BVbml0U2VsZWN0b3IudmFsdWU7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnRvcFByb3BlcnR5VmFsdWVJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgIHRoaXMucmlndGhQcm9wZXJ0eVZhbHVlSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICB0aGlzLmJvdHRvbVByb3BlcnR5VmFsdWVJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgIHRoaXMubGVmdFByb3BlcnR5VmFsdWVJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRvcFByb3BlcnR5VmFsdWVJbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRvcCA9IGAke3RoaXMudG9wUHJvcGVydHlWYWx1ZUlucHV0LnZhbHVlfSR7dGhpcy50b3BVbml0U2VsZWN0b3IudmFsdWV9YDtcbiAgICAgICAgICAgICAgICByaWdodCA9IGAke3RoaXMudG9wUHJvcGVydHlWYWx1ZUlucHV0LnZhbHVlfSR7dGhpcy50b3BVbml0U2VsZWN0b3IudmFsdWV9YDtcbiAgICAgICAgICAgICAgICBib3R0b20gPSBgJHt0aGlzLnRvcFByb3BlcnR5VmFsdWVJbnB1dC52YWx1ZX0ke3RoaXMudG9wVW5pdFNlbGVjdG9yLnZhbHVlfWA7XG4gICAgICAgICAgICAgICAgbGVmdCA9IGAke3RoaXMudG9wUHJvcGVydHlWYWx1ZUlucHV0LnZhbHVlfSR7dGhpcy50b3BVbml0U2VsZWN0b3IudmFsdWV9YDtcblxuICAgICAgICAgICAgICAgIHRoaXMucmlndGhQcm9wZXJ0eVZhbHVlSW5wdXQudmFsdWUgPSB0aGlzLnRvcFByb3BlcnR5VmFsdWVJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmJvdHRvbVByb3BlcnR5VmFsdWVJbnB1dC52YWx1ZSA9IHRoaXMudG9wUHJvcGVydHlWYWx1ZUlucHV0LnZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMubGVmdFByb3BlcnR5VmFsdWVJbnB1dC52YWx1ZSA9IHRoaXMudG9wUHJvcGVydHlWYWx1ZUlucHV0LnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgaWYocGFyc2VJbnQodGhpcy50b3BQcm9wZXJ0eVZhbHVlSW5wdXQudmFsdWUpID09PSAwKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFt0aGlzLnR5cGVdID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJpZ2h0VW5pdFNlbGVjdG9yLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbVVuaXRTZWxlY3Rvci5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5sZWZ0VW5pdFNlbGVjdG9yLmRpc2FibGVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmKHRoaXMudG9wVW5pdFNlbGVjdG9yLnZhbHVlID09PSBVbml0c0VudW0uYXV0byl7XG4gICAgICAgICAgICAgICAgdG9wID0gJ2F1dG8nO1xuICAgICAgICAgICAgICAgIHRoaXMudG9wUHJvcGVydHlWYWx1ZUlucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b3BQcm9wZXJ0eVZhbHVlSW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0b3AgPSBgJHt0aGlzLnRvcFByb3BlcnR5VmFsdWVJbnB1dC52YWx1ZX0ke3RoaXMudG9wVW5pdFNlbGVjdG9yLnZhbHVlfWA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHRoaXMucmlnaHRVbml0U2VsZWN0b3IudmFsdWUgPT09IFVuaXRzRW51bS5hdXRvKXtcbiAgICAgICAgICAgICAgICByaWdodCA9ICdhdXRvJztcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ3RoUHJvcGVydHlWYWx1ZUlucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yaWd0aFByb3BlcnR5VmFsdWVJbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJpZ2h0ID0gYCR7dGhpcy5yaWd0aFByb3BlcnR5VmFsdWVJbnB1dC52YWx1ZX0ke3RoaXMucmlnaHRVbml0U2VsZWN0b3IudmFsdWV9YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYodGhpcy5ib3R0b21Vbml0U2VsZWN0b3IudmFsdWUgPT09IFVuaXRzRW51bS5hdXRvKXtcbiAgICAgICAgICAgICAgICBib3R0b20gPSAnYXV0byc7XG4gICAgICAgICAgICAgICAgdGhpcy5ib3R0b21Qcm9wZXJ0eVZhbHVlSW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvdHRvbVByb3BlcnR5VmFsdWVJbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJvdHRvbSA9IGAke3RoaXMuYm90dG9tUHJvcGVydHlWYWx1ZUlucHV0LnZhbHVlfSR7dGhpcy5ib3R0b21Vbml0U2VsZWN0b3IudmFsdWV9YDtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZih0aGlzLmxlZnRVbml0U2VsZWN0b3IudmFsdWUgPT09IFVuaXRzRW51bS5hdXRvKXtcbiAgICAgICAgICAgICAgICBsZWZ0ID0gJ2F1dG8nO1xuICAgICAgICAgICAgICAgIHRoaXMubGVmdFByb3BlcnR5VmFsdWVJbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubGVmdFByb3BlcnR5VmFsdWVJbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGxlZnQgPSBgJHt0aGlzLmxlZnRQcm9wZXJ0eVZhbHVlSW5wdXQudmFsdWV9JHt0aGlzLmxlZnRVbml0U2VsZWN0b3IudmFsdWV9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbdGhpcy50eXBlXSA9IFt0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnRdLmpvaW4oJyAnKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldFZhbHVlc0FjY29yZGluZ1RvQ2xhc3MoKSB7XG4gICAgICAgIGNvbnN0IHt0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnQsIGFsbEVxdWFsfSA9IHRoaXMuZ2V0Q3VycmVudFByb3BlcnRpZXMoKTtcblxuICAgICAgICB0aGlzLnNlbGVjdEFsbENoZWNrQm94LmNoZWNrZWQgPSBhbGxFcXVhbDtcblxuICAgICAgICB0aGlzLnRvcFByb3BlcnR5VmFsdWVJbnB1dC52YWx1ZSA9IGAke3BhcnNlSW50KHRvcCl9YDtcbiAgICAgICAgdGhpcy5yaWd0aFByb3BlcnR5VmFsdWVJbnB1dC52YWx1ZSA9IGAke3BhcnNlSW50KHJpZ2h0KX1gO1xuICAgICAgICB0aGlzLmJvdHRvbVByb3BlcnR5VmFsdWVJbnB1dC52YWx1ZSA9IGAke3BhcnNlSW50KGJvdHRvbSl9YDtcbiAgICAgICAgdGhpcy5sZWZ0UHJvcGVydHlWYWx1ZUlucHV0LnZhbHVlID0gYCR7cGFyc2VJbnQobGVmdCl9YDtcblxuICAgICAgICB0aGlzLnRvcFVuaXRTZWxlY3Rvci52YWx1ZSA9IGdldFVuaXQodG9wKTtcbiAgICAgICAgdGhpcy5ib3R0b21Vbml0U2VsZWN0b3IudmFsdWUgPSBnZXRVbml0KGJvdHRvbSk7XG4gICAgICAgIHRoaXMucmlnaHRVbml0U2VsZWN0b3IudmFsdWUgPSBnZXRVbml0KHJpZ2h0KTtcbiAgICAgICAgdGhpcy5sZWZ0VW5pdFNlbGVjdG9yLnZhbHVlID0gZ2V0VW5pdChsZWZ0KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEN1cnJlbnRQcm9wZXJ0aWVzKCk6IFN0eWxlc1JldHVybk9iamVjdEludGVyZmFjZSB7XG4gICAgICAgIGNvbnN0IHRvcCA9IHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXRbYCR7dGhpcy50eXBlfS10b3BgXTtcbiAgICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0W2Ake3RoaXMudHlwZX0tcmlnaHRgXTtcbiAgICAgICAgY29uc3QgYm90dG9tID0gdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFtgJHt0aGlzLnR5cGV9LWJvdHRvbWBdO1xuICAgICAgICBjb25zdCBsZWZ0ID0gdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFtgJHt0aGlzLnR5cGV9LWxlZnRgXTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdG9wOiB0b3AgPyB0b3AgOiAnMHB4JyxcbiAgICAgICAgICAgIHJpZ2h0OiByaWdodCA/IHJpZ2h0IDogJzBweCcsXG4gICAgICAgICAgICBib3R0b206IGJvdHRvbSA/IGJvdHRvbSA6ICcwcHgnLFxuICAgICAgICAgICAgbGVmdDogbGVmdCA/IGxlZnQgOiAnMHB4JyxcbiAgICAgICAgICAgIGFsbEVxdWFsOiB0b3AgPT09IHJpZ2h0ICYmIHRvcCA9PT0gYm90dG9tICYmIHRvcCA9PT0gbGVmdCxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xhc3NOYW1lVXBkYXRlZChuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCA9IENzc1N0eWxlU2hlZXQuZ2V0UnVsZVN0eWxlcyhuYW1lKTtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZXNBY2NvcmRpbmdUb0NsYXNzKCk7XG4gICAgICAgIHRoaXMudXBkYXRlUHJvcGVydHkoKTtcbiAgICB9XG59XG5cbmludGVyZmFjZSBTdHlsZXNSZXR1cm5PYmplY3RJbnRlcmZhY2Uge1xuICAgIHRvcDogc3RyaW5nLFxuICAgIHJpZ2h0OiBzdHJpbmcsXG4gICAgYm90dG9tOiBzdHJpbmcsXG4gICAgbGVmdDogc3RyaW5nLFxuICAgIGFsbEVxdWFsOiBib29sZWFuLFxufVxuIiwiaW1wb3J0IENsYXNzQ2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2UgZnJvbSAnLi4vaW50ZXJmYWNlcy9jbGFzcy1jaGFuZ2Utb2JzZXJ2ZXIuaW50ZXJmYWNlJztcblxuaW1wb3J0IENvbnRhaW5lckJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0NvbnRhaW5lckJ1aWxkZXInO1xuaW1wb3J0IElucHV0QnVpbGRlciBmcm9tICcuLi9tb2RlbHMvSW5wdXRCdWlsZGVyJztcbmltcG9ydCBMYWJlbEJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL0xhYmVsQnVpbGRlcic7XG5pbXBvcnQgU2VsZWN0b3JGcm9tRW51bUJ1aWxkZXIgZnJvbSAnLi4vbW9kZWxzL1NlbGVjdG9yRnJvbUVudW1CdWlsZGVyJztcblxuaW1wb3J0IENzc1N0eWxlU2hlZXQgZnJvbSAnLi4vLi4vY3NzLXN0eWxlc2hlZXQvY3NzLXN0eWxlc2hlZXQnO1xuaW1wb3J0IGdldFVuaXQgZnJvbSAnLi4vZnVuY3Rpb25zL2dldC1jc3MtdW5pdCc7XG5cbmltcG9ydCB7IElucHV0VHlwZUVudW0gfSBmcm9tICcuLi9lbnVtcy9pbnB1dC10eXBlLmVudW0nO1xuaW1wb3J0IHsgVW5pdHNFbnVtIH0gZnJvbSAnLi4vZW51bXMvdW5pdHMuZW51bSc7XG5pbXBvcnQgeyBTdHlsZU5hbWVFbnVtIH0gZnJvbSAnLi4vZW51bXMvc3R5bGUtbmFtZS5lbnVtJztcbmltcG9ydCB7IERpc3BsYXlUeXBlc0VudW0gfSBmcm9tICcuLi9lbnVtcy9kaXNwbGF5LXR5cGVzLmVudW0nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaXplc0NvbXBvbmVudCBpbXBsZW1lbnRzIENsYXNzQ2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2Uge1xuICAgIHByaXZhdGUgZG9tRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBjb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgZG9tRWxlbWVudFN0eWxlU2hlZXQ6IENTU1N0eWxlRGVjbGFyYXRpb247XG5cbiAgICBwcml2YXRlIHdpZHRoU2l6ZUlucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHByaXZhdGUgd2lkdGhVbml0U2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSBoZWlnaHRTaXplSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBoZWlnaHRTaXplU2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IoZG9tRWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCA9IENzc1N0eWxlU2hlZXQuZ2V0UnVsZVN0eWxlcyh0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0WzBdKTtcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnRzKCk7XG4gICAgfVxuXG4gICAgZ2V0IGNvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkQ29tcG9uZW50cygpIHtcbiAgICAgICAgdGhpcy51cGRhdGVXaWR0aCA9IHRoaXMudXBkYXRlV2lkdGguYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGVIZWlnaHQgPSB0aGlzLnVwZGF0ZUhlaWdodC5iaW5kKHRoaXMpO1xuXG5cbiAgICAgICAgdGhpcy5idWlsZEFsbENvbXBvbmVudHMoKTtcbiAgICAgICAgdGhpcy5zZXRJbml0aWFsVmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpO1xuXG4gICAgICAgIGNvbnN0IHdpZHRoQ29tcG9uZW50c0NvbnRhaW5lciA9IHRoaXMuYnVpbGRTaXplQ29udGFpbmVyKFxuICAgICAgICAgICAgJ1dpZHRoJyxcbiAgICAgICAgICAgIHRoaXMud2lkdGhTaXplSW5wdXQsXG4gICAgICAgICAgICB0aGlzLndpZHRoVW5pdFNlbGVjdG9yXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgaGVpZ2h0Q29tcG9uZW50c0NvbnRhaW5lciA9IHRoaXMuYnVpbGRTaXplQ29udGFpbmVyKFxuICAgICAgICAgICAgJ0hlaWdodCcsXG4gICAgICAgICAgICB0aGlzLmhlaWdodFNpemVJbnB1dCxcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0U2l6ZVNlbGVjdG9yXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5ib3JkZXIsICcxcHggc29saWQgIzRDQUY1MCcpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5wYWRkaW5nLCAnM3B4JylcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldElubmVyVGV4dCgnU2l6ZXMnKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQod2lkdGhDb21wb25lbnRzQ29udGFpbmVyKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKGhlaWdodENvbXBvbmVudHNDb250YWluZXIpXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgIH1cblxuICAgIHByaXZhdGUgYnVpbGRTaXplQ29udGFpbmVyKFxuICAgICAgICBsYWJlbDogc3RyaW5nLFxuICAgICAgICBpbnB1dENvbXBvbmVudDogSFRNTElucHV0RWxlbWVudCxcbiAgICAgICAgc2VsZWN0b3JDb21wb25lbnQ6IEhUTUxTZWxlY3RFbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQobGFiZWwpXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmRpc3BsYXksIERpc3BsYXlUeXBlc0VudW0uZmxleClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChpbnB1dENvbXBvbmVudClcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQoc2VsZWN0b3JDb21wb25lbnQpXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBidWlsZEFsbENvbXBvbmVudHMoKSB7XG4gICAgICAgIHRoaXMud2lkdGhTaXplSW5wdXQgPSB0aGlzLmJ1aWxkSW5wdXQoSW5wdXRUeXBlRW51bS5udW1iZXIsIHRoaXMudXBkYXRlV2lkdGgpO1xuICAgICAgICB0aGlzLmhlaWdodFNpemVJbnB1dCA9IHRoaXMuYnVpbGRJbnB1dChJbnB1dFR5cGVFbnVtLm51bWJlciwgdGhpcy51cGRhdGVIZWlnaHQpO1xuXG4gICAgICAgIHRoaXMud2lkdGhVbml0U2VsZWN0b3IgPSB0aGlzLmJ1aWxkU2VsZWN0b3IodGhpcy51cGRhdGVXaWR0aCk7XG4gICAgICAgIHRoaXMuaGVpZ2h0U2l6ZVNlbGVjdG9yID0gdGhpcy5idWlsZFNlbGVjdG9yKHRoaXMudXBkYXRlSGVpZ2h0KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEluaXRpYWxWYWx1ZXNBY2NvcmRpbmdUb0NsYXNzKCkge1xuICAgICAgICB0aGlzLnNldFdpZHRoVmFsdWVBY2NvcmRpbmdUb0NsYXNzKCk7XG4gICAgICAgIHRoaXMuc2V0SGVpZ2h0VmFsdWVBY2NvcmRpbmdUb0NsYXNzKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRXaWR0aFZhbHVlQWNjb3JkaW5nVG9DbGFzcygpIHtcbiAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0Wyd3aWR0aCddO1xuICAgICAgICB0aGlzLndpZHRoU2l6ZUlucHV0LnZhbHVlID0gYCR7cGFyc2VJbnQod2lkdGgpIHx8IDB9YDtcbiAgICAgICAgdGhpcy53aWR0aFVuaXRTZWxlY3Rvci52YWx1ZSA9IGdldFVuaXQod2lkdGgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0SGVpZ2h0VmFsdWVBY2NvcmRpbmdUb0NsYXNzKCkge1xuICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0WydoZWlnaHQnXTtcbiAgICAgICAgdGhpcy5oZWlnaHRTaXplSW5wdXQudmFsdWUgPSBgJHtwYXJzZUludChoZWlnaHQpIHx8IDB9YDtcbiAgICAgICAgdGhpcy5oZWlnaHRTaXplU2VsZWN0b3IudmFsdWUgPSBnZXRVbml0KGhlaWdodCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBidWlsZElucHV0KElucHV0VHlwZUVudW06IElucHV0VHlwZUVudW0sIGNhbGxiYWNrOiB7KCk6IHZvaWR9KSB7XG4gICAgICAgIHJldHVybiBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0pXG4gICAgICAgICAgICAuc2V0TWluKDApXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBjYWxsYmFjaylcbiAgICAgICAgICAgIC5idWlsZCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYnVpbGRTZWxlY3RvcihjYWxsYmFjazogeygpOiB2b2lkfSkge1xuICAgICAgICByZXR1cm4gbmV3IFNlbGVjdG9yRnJvbUVudW1CdWlsZGVyKFVuaXRzRW51bSlcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjYWxsYmFjaylcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVXaWR0aCgpIHtcbiAgICAgICAgaWYodGhpcy53aWR0aFNpemVJbnB1dC52YWx1ZSA9PT0gJzAnKXtcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQucmVtb3ZlUHJvcGVydHkoJ3dpZHRoJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnd2lkdGgnXSA9IGAke3RoaXMud2lkdGhTaXplSW5wdXQudmFsdWV9JHt0aGlzLndpZHRoVW5pdFNlbGVjdG9yLnZhbHVlfWA7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVIZWlnaHQoKSB7XG4gICAgICAgIGlmKHRoaXMuaGVpZ2h0U2l6ZUlucHV0LnZhbHVlID09PSAnMCcpe1xuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldC5yZW1vdmVQcm9wZXJ0eSgnaGVpZ2h0Jyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldFsnaGVpZ2h0J10gPSBgJHt0aGlzLmhlaWdodFNpemVJbnB1dC52YWx1ZX0ke3RoaXMuaGVpZ2h0U2l6ZVNlbGVjdG9yLnZhbHVlfWA7XG4gICAgfVxuXG4gICAgcHVibGljIGNsYXNzTmFtZVVwZGF0ZWQobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFN0eWxlU2hlZXQgPSBDc3NTdHlsZVNoZWV0LmdldFJ1bGVTdHlsZXMobmFtZSk7XG4gICAgICAgIHRoaXMuc2V0SW5pdGlhbFZhbHVlc0FjY29yZGluZ1RvQ2xhc3MoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ3NzU3R5bGVTaGVldCBmcm9tICcuLi8uLi9jc3Mtc3R5bGVzaGVldC9jc3Mtc3R5bGVzaGVldCc7XG5pbXBvcnQgQ2xhc3NDaGFuZ2VPYnNlcnZlckludGVyZmFjZSBmcm9tICcuLi9pbnRlcmZhY2VzL2NsYXNzLWNoYW5nZS1vYnNlcnZlci5pbnRlcmZhY2UnO1xuXG5pbXBvcnQgQnV0dG9uQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvQnV0dG9uQnVpbGRlcic7XG5pbXBvcnQgQ29udGFpbmVyQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvQ29udGFpbmVyQnVpbGRlcic7XG5pbXBvcnQgSW5wdXRCdWlsZGVyIGZyb20gJy4uL21vZGVscy9JbnB1dEJ1aWxkZXInO1xuaW1wb3J0IExhYmVsQnVpbGRlciBmcm9tICcuLi9tb2RlbHMvTGFiZWxCdWlsZGVyJztcblxuaW1wb3J0IHsgSW5wdXRUeXBlRW51bSB9IGZyb20gJy4uL2VudW1zL2lucHV0LXR5cGUuZW51bSc7XG5pbXBvcnQgeyBTdHlsZU5hbWVFbnVtIH0gZnJvbSAnLi4vZW51bXMvc3R5bGUtbmFtZS5lbnVtJztcbmltcG9ydCB7IERpc3BsYXlUeXBlc0VudW0gfSBmcm9tICcuLi9lbnVtcy9kaXNwbGF5LXR5cGVzLmVudW0nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVcmxEZWZpbml0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgQ2xhc3NDaGFuZ2VPYnNlcnZlckludGVyZmFjZSB7XG4gICAgcHJpdmF0ZSBkb21FbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBkb21FbGVtZW50U3R5bGVTaGVldDogQ1NTU3R5bGVEZWNsYXJhdGlvbjtcblxuICAgIHByaXZhdGUgdXJsSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihkb21FbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRTdHlsZVNoZWV0ID0gQ3NzU3R5bGVTaGVldC5nZXRSdWxlU3R5bGVzKHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3RbMF0pO1xuICAgICAgICB0aGlzLmFkZENvbXBvbmVudHMoKTtcbiAgICB9XG5cbiAgICBnZXQgY3VycmVudFVybCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudFsnc3JjJ107XG4gICAgfVxuXG4gICAgc2V0TmV3VXJsKHVybD86IHN0cmluZykge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRbJ3NyYyddID0gdXJsO1xuICAgIH1cblxuICAgIGdldCBjb21wb25lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZENvbXBvbmVudHMoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlVXJsID0gdGhpcy51cGRhdGVVcmwuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmJ1aWxkQWxsQ29tcG9uZW50cygpO1xuICAgICAgICB0aGlzLnNldEluaXRpYWxWYWx1ZXNBY2NvcmRpbmdUb0NsYXNzKCk7XG5cbiAgICAgICAgY29uc3QgYWNjZXB0QnV0dG9uID0gbmV3IEJ1dHRvbkJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy51cGRhdGVVcmwpXG4gICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdBc3NpZ24nKVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICBjb25zdCB1cmxDb21wb25lbnRzQ29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBMYWJlbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdBc3NpZ24gVXJsJylcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKGFjY2VwdEJ1dHRvbilcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy51cmxJbnB1dClcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmJ1aWxkKClcblxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLmJvcmRlciwgJzFweCBzb2xpZCAjNENBRjUwJylcbiAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLnBhZGRpbmcsICczcHgnKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0SW5uZXJUZXh0KCdJbWFnZSBQcm9wZXJ0aWVzJylcbiAgICAgICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKHVybENvbXBvbmVudHNDb250YWluZXIpXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgIH1cblxuICAgIHByaXZhdGUgYnVpbGRBbGxDb21wb25lbnRzKCkge1xuICAgICAgICB0aGlzLmJ1aWxkVXJsQ29tcG9uZW50cygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYnVpbGRVcmxDb21wb25lbnRzKCkge1xuICAgICAgICB0aGlzLnVybElucHV0ID0gbmV3IElucHV0QnVpbGRlcihJbnB1dFR5cGVFbnVtLnVybCkuYnVpbGQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEluaXRpYWxWYWx1ZXNBY2NvcmRpbmdUb0NsYXNzKCkge1xuICAgICAgICB0aGlzLnNldFVybEluaXRpYWxWYWx1ZXNBY2NvcmRpbmdUb0NsYXNzKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRVcmxJbml0aWFsVmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpIHtcbiAgICAgICAgdGhpcy51cmxJbnB1dC52YWx1ZSA9IHRoaXMuY3VycmVudFVybDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZVVybCgpIHtcbiAgICAgICAgaWYodGhpcy51cmxJbnB1dC52YWx1ZSA9PT0gJycpe1xuICAgICAgICAgICAgdGhpcy5zZXROZXdVcmwoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldE5ld1VybCh0aGlzLnVybElucHV0LnZhbHVlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xhc3NOYW1lVXBkYXRlZChuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50U3R5bGVTaGVldCA9IENzc1N0eWxlU2hlZXQuZ2V0UnVsZVN0eWxlcyhuYW1lKTtcbiAgICAgICAgdGhpcy5zZXRJbml0aWFsVmFsdWVzQWNjb3JkaW5nVG9DbGFzcygpO1xuICAgIH1cbn1cbiIsImNvbnN0IGNvbnRhbnRzID0ge1xuICAgIElOVkVSVEVEX0JBQ0tHUk9VTkRfQ09MT1I6ICdyZ2IoMjA5LDI1NSwyNDAnXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhbnRzXG4iLCJleHBvcnQgZW51bSBBbGlnbkZsZXhDb250ZW50RW51bSB7XG4gICAgJ2ZsZXgtc3RhcnQnID0gJ2ZsZXgtc3RhcnQnLFxuICAgICdmbGV4LWVuZCcgPSAnZmxleC1lbmQnLFxuICAgIGNlbnRlciA9ICdjZW50ZXInLFxuICAgICdzcGFjZS1iZXR3ZWVuJyA9ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAnc3BhY2UtYXJvdW5kJyA9ICdzcGFjZS1hcm91bmQnLFxuICAgIHN0cmV0Y2ggPSAnc3RyZXRjaCcsXG4gICAgbm9uZSA9ICcnLFxufVxuIiwiZXhwb3J0IGVudW0gQWxpZ25GbGV4SXRlbXNFbnVtIHtcbiAgICAnZmxleC1zdGFydCcgPSAnZmxleC1zdGFydCcsXG4gICAgJ2ZsZXgtZW5kJyA9ICdmbGV4LWVuZCcsXG4gICAgY2VudGVyID0gJ2NlbnRlcicsXG4gICAgYmFzZWxpbmUgPSAnYmFzZWxpbmUnLFxuICAgIHN0cmV0Y2ggPSAnc3RyZXRjaCcsXG4gICAgbm9uZSA9ICcnXG59XG4iLCJleHBvcnQgZW51bSBBbGlnbkZsZXhTZWxmRW51bSB7XG4gICAgYXV0byA9ICdhdXRvJyxcbiAgICAnZmxleC1zdGFydCcgPSAnZmxleC1zdGFydCcsXG4gICAgJ2ZsZXgtZW5kJyA9ICdmbGV4LWVuZCcsXG4gICAgY2VudGVyID0gJ2NlbnRlcicsXG4gICAgJ2Jhc2VsaW5lJyA9ICdiYXNlbGluZScsXG4gICAgc3RyZXRjaCA9ICdzdHJldGNoJyxcbiAgICBub25lID0gJycsXG59XG4iLCJleHBvcnQgZW51bSBBbGlnbkdyaWRDb250ZW50RW51bSB7XG4gICAgc3RhcnQgPSAnc3RhcnQnLFxuICAgIGVuZCA9ICdlbmQnLFxuICAgIGNlbnRlciA9ICdjZW50ZXInLFxuICAgIHN0cmV0Y2ggPSAnc3RyZXRjaCcsXG4gICAgJ3NwYWNlLWJldHdlZW4nID0gJ3NwYWNlLWJldHdlZW4nLFxuICAgICdzcGFjZS1hcm91bmQnID0gJ3NwYWNlLWFyb3VuZCcsXG4gICAgJ3NwYWNlLWV2ZW5seScgPSAnc3BhY2UtZXZlbmx5JyxcbiAgICBub25lID0gJydcbn1cbiIsImV4cG9ydCBlbnVtIEFsaWduR3JpZEl0ZW1zRW51bSB7XG4gICAgc3RhcnQgPSAnc3RhcnQnLFxuICAgIGVuZCA9ICdlbmQnLFxuICAgIGNlbnRlciA9ICdjZW50ZXInLFxuICAgIHN0cmV0Y2ggPSAnc3RyZXRjaCcsXG4gICAgbm9uZSA9ICcnXG59XG4iLCJleHBvcnQgZW51bSBBbGlnbkdyaWRTZWxmRW51bSB7XG4gICAgc3RhcnQgPSAnc3RhcnQnLFxuICAgIGVuZCA9ICdlbmQnLFxuICAgIGNlbnRlciA9ICdjZW50ZXInLFxuICAgIHN0cmV0Y2ggPSAnc3RyZXRjaCcsXG4gICAgbm9uZSA9ICcnXG59XG4iLCJleHBvcnQgZW51bSBCb3JkZXJTdHlsZUVudW0ge1xuICAgIG5vbmUgPSAnbm9uZScsXG4gICAgaGlkZGVuID0gJ2hpZGRlbicsXG4gICAgZG90dGVkID0gJ2RvdHRlZCcsXG4gICAgZGFzaGVkID0gJ2Rhc2hlZCcsXG4gICAgc29saWQgPSAnc29saWQnLFxuICAgIGRvdWJsZSA9ICdkb3VibGUnLFxuICAgIGdyb292ZSA9ICdncm9vdmUnLFxuICAgIHJpZGdlID0gJ3JpZGdlJyxcbiAgICBpbnNldCA9ICdpbnNldCcsXG4gICAgb3V0c2V0ID0gJ291dHNldCcsXG59XG5cblxuXG4iLCJleHBvcnQgZW51bSBEaXNwbGF5VHlwZXNFbnVtIHtcbiAgICBmbGV4ID0gJ2ZsZXgnLFxuICAgICdpbmxpbmUtZmxleCcgPSAnaW5saW5lLWZsZXgnLFxuICAgIGdyaWQgPSAnZ3JpZCcsXG4gICAgJ2lubGluZS1ncmlkJyA9ICdpbmxpbmUtZ3JpZCcsXG4gICAgYmxvY2sgPSAnYmxvY2snLFxuICAgIGlubGluZSA9ICdpbmxpbmUnLFxuICAgIGNvbnRlbnRzID0gJ2NvbnRlbnRzJyxcbiAgICBpbmhlcml0ID0gJ2luaGVyaXQnLFxuICAgIGluaXRpYWwgPSAnaW5pdGlhbCcsXG4gICAgcmV2ZXJ0ID0gJ3JldmVydCcsXG4gICAgdW5zZXQgPSAndW5zZXQnLFxuICAgIG5vbmUgPSAnJ1xufVxuIiwiZXhwb3J0IGVudW0gRXZlbnRUeXBlRW51bSB7XG4gICAgaW5wdXQgPSAnaW5wdXQnLFxuICAgIGNoYW5nZSA9ICdjaGFuZ2UnLFxufVxuIiwiZXhwb3J0IGVudW0gRmxleERpcmVjdGlvbkVudW0ge1xuICAgIHJvdyA9ICdyb3cnLFxuICAgICdyb3ctcmV2ZXJzZScgPSAncm93LXJldmVyc2UnLFxuICAgIGNvbHVtbiA9ICdjb2x1bW4nLFxuICAgICdjb2x1bW4tcmV2ZXJzZScgPSAnY29sdW1uLXJldmVyc2UnLFxuICAgIG5vbmUgPSAnJ1xufVxuIiwiZXhwb3J0IGVudW0gRmxleFdyYXBFbnVtIHtcbiAgICBub3dyYXAgPSAnbm93cmFwJyxcbiAgICB3cmFwID0gJ3dyYXAnLFxuICAgICd3cmFwLXJldmVyc2UnID0gJ3dyYXAtcmV2ZXJzZScsXG4gICAgbm9uZSA9ICcnXG59XG4iLCJleHBvcnQgZW51bSBGb250U3R5bGVzRW51bSB7XG4gICAgJ25vcm1hbCcgPSAnbm9ybWFsJyxcbiAgICAnaXRhbGljJyA9ICdpdGFsaWMnLFxuICAgICdvYmxpcXVlJyA9ICdvYmxpcXVlJyxcbn1cbiIsImV4cG9ydCBlbnVtIEZvbnRWYXJpYW50RW51bSB7XG4gICAgJ25vcm1hbCcgPSAnbm9ybWFsJyxcbiAgICAnc21hbGwtY2FwcycgPSAnc21hbGwtY2FwcycsXG4gICAgJ2FsbC1zbWFsbC1jYXBzJyA9ICdhbGwtc21hbGwtY2FwcycsXG4gICAgJ3BldGl0ZS1jYXBzJyA9ICdwZXRpdGUtY2FwcycsXG4gICAgJ2FsbC1wZXRpdGUtY2FwcycgPSAnYWxsLXBldGl0ZS1jYXBzJyxcbiAgICAndW5pY2FzZScgPSAndW5pY2FzZScsXG4gICAgJ3RpdGxpbmctY2FwcycgPSAndGl0bGluZy1jYXBzJyxcbiAgICAnaW5oZXJpdCcgPSAnaW5oZXJpdCcsXG4gICAgJ2luaXRpYWwnID0gJ2luaXRpYWwnLFxuICAgICdyZXZlcnQnID0gJ3JldmVydCcsXG4gICAgJ3JldmVydC1sYXllcicgPSAncmV2ZXJ0LWxheWVyJyxcbiAgICAndW5zZXQnID0gJ3Vuc2V0Jyxcbn1cbiIsImV4cG9ydCBlbnVtIEZvbnRXZWlnaHRFbnVtIHtcbiAgICAnbGlnaHRlcicgPSAnbGlnaHRlcicsXG4gICAgJ25vcm1hbCcgPSAnbm9ybWFsJyxcbiAgICAnYm9sZCcgPSAnYm9sZCcsXG4gICAgJ2JvbGRlcicgPSAnYm9sZGVyJyxcbiAgICAnczEwMCcgPSAnMTAwJyxcbiAgICAnczIwMCcgPSAnMjAwJyxcbiAgICAnczMwMCcgPSAnMzAwJyxcbiAgICAnczQwMCcgPSAnNDAwJyxcbiAgICAnczUwMCcgPSAnNTAwJyxcbiAgICAnczYwMCcgPSAnNjAwJyxcbiAgICAnczcwMCcgPSAnNzAwJyxcbiAgICAnczgwMCcgPSAnODAwJyxcbiAgICAnczkwMCcgPSAnOTAwJyxcbiAgICAnaW5oZXJpdCcgPSAnaW5oZXJpdCcsXG4gICAgJ2luaXRpYWwnID0gJ2luaXRpYWwnLFxuICAgICdyZXZlcnQnID0gJ3JldmVydCcsXG4gICAgJ3JldmVydC1sYXllcicgPSAncmV2ZXJ0LWxheWVyJyxcbiAgICAndW5zZXQnID0gJ3Vuc2V0Jyxcbn1cbiIsImV4cG9ydCBlbnVtIEZvbnRzRW51bSB7XG4gICAgJ2N1cnNpdmUnID0gJ2N1cnNpdmUnLFxuICAgICdtb25vc3BhY2UnID0gJ21vbm9zcGFjZScsXG4gICAgJ3NlcmlmJyA9ICdzZXJpZicsXG4gICAgJ3NhbnMtc2VyaWYnID0gJ3NhbnMtc2VyaWYnLFxuICAgICdmYW50YXN5JyA9ICdmYW50YXN5JyxcbiAgICAnZGVmYXVsdCcgPSAnZGVmYXVsdCcsXG4gICAgJ0FyaWFsJyA9ICdBcmlhbCcsXG4gICAgJ0FyaWFsIEJsYWNrJyA9ICdBcmlhbCBCbGFjaycsXG4gICAgJ0FyaWFsIE5hcnJvdycgPSAnQXJpYWwgTmFycm93JyxcbiAgICAnQXJpYWwgUm91bmRlZCBNVCBCb2xkJyA9ICdBcmlhbCBSb3VuZGVkIE1UIEJvbGQnLFxuICAgICdCb29rbWFuIE9sZCBTdHlsZScgPSAnQm9va21hbiBPbGQgU3R5bGUnLFxuICAgICdCcmFkbGV5IEhhbmQgSVRDJyA9ICdCcmFkbGV5IEhhbmQgSVRDJyxcbiAgICAnQ2VudHVyeScgPSAnQ2VudHVyeScsXG4gICAgJ0NlbnR1cnkgR290aGljJyA9ICdDZW50dXJ5IEdvdGhpYycsXG4gICAgJ0NvbWljIFNhbnMgTVMnID0gJ0NvbWljIFNhbnMgTVMnLFxuICAgICdDb3VyaWVyJyA9ICdDb3VyaWVyJyxcbiAgICAnQ291cmllciBOZXcnID0gJ0NvdXJpZXIgTmV3JyxcbiAgICAnR2VvcmdpYScgPSAnR2VvcmdpYScsXG4gICAgJ0dlbnRpdW0nID0gJ0dlbnRpdW0nLFxuICAgICdJbXBhY3QnID0gJ0ltcGFjdCcsXG4gICAgJ0tpbmcnID0gJ0tpbmcnLFxuICAgICdMdWNpZGEgQ29uc29sZScgPSAnTHVjaWRhIENvbnNvbGUnLFxuICAgICdMYWxpdCcgPSAnTGFsaXQnLFxuICAgICdNb2RlbmEnID0gJ01vZGVuYScsXG4gICAgJ01vbm90eXBlIENvcnNpdmEnID0gJ01vbm90eXBlIENvcnNpdmEnLFxuICAgICdQYXB5cnVzJyA9ICdQYXB5cnVzJyxcbiAgICAnVGFob21hJyA9ICdUYWhvbWEnLFxuICAgICdUZVgnID0gJ1RlWCcsXG4gICAgJ1RpbWVzJyA9ICdUaW1lcycsXG4gICAgJ1RpbWVzIE5ldyBSb21hbicgPSAnVGltZXMgTmV3IFJvbWFuJyxcbiAgICAnVHJlYnVjaGV0IE1TJyA9ICdUcmVidWNoZXQgTVMnLFxuICAgICdWZXJkYW5hJyA9ICdWZXJkYW5hJyxcbiAgICAnVmVyb25hJyA9ICdWZXJvbmEnLFxufVxuIiwiZXhwb3J0IGVudW0gR2VuZXJhbFBzZXVkb2NsYXNzRW51bSB7XG4gICAgZm9jdXMgPSAnZm9jdXMnLFxuICAgIGhvdmVyID0gJ2hvdmVyJyxcbiAgICBhY3RpdmUgPSAnYWN0aXZlJyxcbiAgICBub25lID0gJydcbn1cbiIsImV4cG9ydCBlbnVtIEdyaWRBdXRvRmxvd0VudW0ge1xuICAgIHJvdyA9ICdyb3cnLFxuICAgIGNvbHVtbiA9ICdjb2x1bW4nLFxuICAgICdyb3ctZGVuc2UnID0gJ3Jvdy1kZW5zZScsXG4gICAgJ2NvbHVtbi1kZW5zZScgPSAnY29sdW1uLWRlbnNlJyxcbiAgICBub25lID0gJycsXG59XG4iLCJleHBvcnQgZW51bSBJbnB1dFR5cGVFbnVtIHtcbiAgICB0ZXh0ID0gJ3RleHQnLFxuICAgIG51bWJlciA9ICdudW1iZXInLFxuICAgIGNoZWNrYm94ID0gJ2NoZWNrYm94JyxcbiAgICBidXR0b24gPSAnYnV0dG9uJyxcbiAgICBjb2xvciA9ICdjb2xvcicsXG4gICAgZGF0ZSA9ICdkYXRlJyxcbiAgICBkYXRldGltZSA9ICdkYXRldGltZScsXG4gICAgJ2RhdGV0aW1lLWxvY2FsJyA9ICdkYXRldGltZS1sb2NhbCcsXG4gICAgZW1haWwgPSAnZW1haWwnLFxuICAgIGZpbGUgPSAnZmlsZScsXG4gICAgaGlkZGVuID0gJ2hpZGRlbicsXG4gICAgbW9udGggPSAnbW9udGgnLFxuICAgIHBhc3N3b3JkID0gJ3Bhc3N3b3JkJyxcbiAgICByYWRpbyA9ICdyYWRpbycsXG4gICAgcmFuZ2UgPSAncmFuZ2UnLFxuICAgIHJlc2V0ID0gJ3Jlc2V0JyxcbiAgICBzdWJtaXQgPSAnc3VibWl0JyxcbiAgICB0ZWwgPSAndGVsJyxcbiAgICB0aW1lID0gJ3RpbWUnLFxuICAgIHVybCA9ICd1cmwnLFxuICAgIHdlZWsgPSAnd2Vlaydcbn1cbiIsImV4cG9ydCBlbnVtIEp1c3RpZnlGbGV4Q29udGVudEVudW0ge1xuICAgICdmbGV4LXN0YXJ0JyA9ICdmbGV4LXN0YXJ0JyxcbiAgICAnZmxleC1lbmQnID0gJ2ZsZXgtZW5kJyxcbiAgICBjZW50ZXIgPSAnY2VudGVyJyxcbiAgICAnc3BhY2UtYmV0d2VlbicgPSAnc3BhY2UtYmV0d2VlbicsXG4gICAgJ3NwYWNlLWFyb3VuZCcgPSAnc3BhY2UtYXJvdW5kJyxcbiAgICBub25lID0gJydcbn1cbiIsImV4cG9ydCBlbnVtIEp1c3RpZnlHcmlkQ29udGVudEVudW0ge1xuICAgIHN0YXJ0ID0gJ3N0YXJ0JyxcbiAgICBlbmQgPSAnZW5kJyxcbiAgICBjZW50ZXIgPSAnY2VudGVyJyxcbiAgICBzdHJldGNoID0gJ3N0cmV0Y2gnLFxuICAgICdzcGFjZS1iZXR3ZWVuJyA9ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAnc3BhY2UtYXJvdW5kJyA9ICdzcGFjZS1hcm91bmQnLFxuICAgICdzcGFjZS1ldmVubHknID0gJ3NwYWNlLWV2ZW5seScsXG4gICAgbm9uZSA9ICcnXG59XG4iLCJleHBvcnQgZW51bSBKdXN0aWZ5R3JpZEl0ZW1zRW51bSB7XG4gICAgc3RhcnQgPSAnc3RhcnQnLFxuICAgIGVuZCA9ICdlbmQnLFxuICAgIGNlbnRlciA9ICdjZW50ZXInLFxuICAgIHN0cmV0Y2ggPSAnc3RyZXRjaCcsXG4gICAgbm9uZSA9ICcnXG59XG4iLCJleHBvcnQgZW51bSBKdXN0aWZ5R3JpZFNlbGZFbnVtIHtcbiAgICBzdGFydCA9ICdzdGFydCcsXG4gICAgZW5kID0gJ2VuZCcsXG4gICAgY2VudGVyID0gJ2NlbnRlcicsXG4gICAgc3RyZXRjaCA9ICdzdHJldGNoJyxcbiAgICBub25lID0gJydcbn1cbiIsImV4cG9ydCBlbnVtIFN0eWxlTmFtZUVudW0ge1xuICAgIG1hcmdpbiA9ICdtYXJnaW4nLFxuICAgIHBhZGRpbmcgPSAncGFkZGluZycsXG4gICAgZGlzcGxheSA9ICdkaXNwbGF5JyxcbiAgICAnZmxleC1kaXJlY3Rpb24nID0gJ2ZsZXgtZGlyZWN0aW9uJyxcbiAgICAnYWxpZ24taXRlbXMnID0gJ2FsaWduLWl0ZW1zJyxcbiAgICAnYWxpZ24tc2VsZicgPSAnYWxpZ24tc2VsZicsXG4gICAgJ2dyaWQtdGVtcGxhdGUtY29sdW1ucycgPSAnZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zJyxcbiAgICAnZ3JpZC10ZW1wbGF0ZS1yb3dzJyA9ICdncmlkLXRlbXBsYXRlLXJvd3MnLFxuICAgIGJvcmRlcj0gJ2JvcmRlcicsXG4gICAgcmVzaXplPSAncmVzaXplJyxcbn1cbiIsImV4cG9ydCBlbnVtIFRpdGxlVHlwZXNFbnVtIHtcbiAgICBIMSA9ICdIMScsXG4gICAgSDIgPSAnSDInLFxuICAgIEgzID0gJ0gzJyxcbiAgICBINCA9ICdINCcsXG4gICAgSDUgPSAnSDUnLFxuICAgIEg2ID0gJ0g2Jyxcbn1cbiIsImV4cG9ydCBlbnVtIFVuaXRzRW51bSB7XG4gICAgcHggPSAncHgnLFxuICAgIGVtID0gJ2VtJyxcbiAgICByZW0gPSAncmVtJyxcbiAgICB2dyA9ICd2dycsXG4gICAgdmggPSAndmgnLFxuICAgIHZtaW4gPSAndm1pbicsXG4gICAgdm1heCA9ICd2bWF4JyxcbiAgICAnJScgPSAnJScsXG4gICAgZXggPSAnZXgnLFxuICAgIGNoID0gJ2NoJyxcbiAgICBtbSA9ICdtbScsXG4gICAgY20gPSAnY20nLFxuICAgIGluID0gJ2luJyxcbiAgICBwdCA9ICdwdCcsXG4gICAgcGMgPSAncGMnLFxuICAgIGF1dG8gPSAnYXV0bydcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlZmluZUVsZW1lbnRJZChpbml0aWFsTmFtZTogc3RyaW5nLCBpbnN0YW5jZXM6IEhUTUxFbGVtZW50W10pOiBzdHJpbmcge1xuICAgIGNvbnN0IG5hbWVBbHJlYWR5RXhpc3RzID0gaW5zdGFuY2VzLmZpbmQoKGluc3RhbmNlKSA9PiBpbnN0YW5jZS5pZCA9PT0gaW5pdGlhbE5hbWUpID8gdHJ1ZSA6IGZhbHNlO1xuXG4gICAgaWYgKG5hbWVBbHJlYWR5RXhpc3RzKSB7XG4gICAgICAgIGFsZXJ0KCdJZCBuYW1lIGFscmVhZHkgZXhpc3RzIFxcblRoZSBuYW1lIGhhcyBub3QgYmVlbiB1cGRhdGVkJyk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSWQgbmFtZSBhbHJlYWR5IGV4aXN0cycpO1xuICAgIH1cblxuICAgIHJldHVybiBpbml0aWFsTmFtZTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlZmluZUVsZW1lbnROYW1lKGluaXRpYWxOYW1lOiBzdHJpbmcsIGluc3RhbmNlczogSFRNTEVsZW1lbnRbXSk6IHN0cmluZyB7XG4gICAgY29uc3QgbmFtZUFscmVhZHlFeGlzdHMgPSBpbnN0YW5jZXMuZmluZCgoaW5zdGFuY2UpID0+IGluc3RhbmNlWyduYW1lJ10gPT09IGluaXRpYWxOYW1lKSA/IHRydWUgOiBmYWxzZTtcblxuICAgIGlmIChuYW1lQWxyZWFkeUV4aXN0cykge1xuICAgICAgICBhbGVydCgnRWxlbWVudCBuYW1lIGFscmVhZHkgZXhpc3RzIFxcblRoZSBuYW1lIGhhcyBub3QgYmVlbiB1cGRhdGVkJyk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRWxlbWVudCBuYW1lIGFscmVhZHkgZXhpc3RzJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluaXRpYWxOYW1lO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZHJhZ1N0YXJ0V2l0aFRhcmdldE5vZGVOYW1lKGU6IERyYWdFdmVudCkge1xuICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQvcGxhaW4nLCAoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLm5vZGVOYW1lKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcnModGV4dDogc3RyaW5nLCBzcGxpdENoYXJhY3Rlcjogc3RyaW5nLCBqb2luQ2hhcmFjdGVyOiBzdHJpbmcpIHtcbiAgICBjb25zdCB3b3JkcyA9IHRleHQuc3BsaXQoc3BsaXRDaGFyYWN0ZXIpO1xuXG4gICAgcmV0dXJuIHdvcmRzLm1hcCgod29yZCkgPT4gYCR7d29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke3dvcmQuc2xpY2UoMSl9YCkuam9pbihqb2luQ2hhcmFjdGVyKVxufVxuIiwiaW1wb3J0IHsgVW5pdHNFbnVtIH0gZnJvbSAnLi4vZW51bXMvdW5pdHMuZW51bSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVuaXQodGV4dDogc3RyaW5nLCBkZWZhdWx0VW5pdDogVW5pdHNFbnVtID0gVW5pdHNFbnVtLnB4KSB7XG4gICAgdHJ5e1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSB0ZXh0Lm1hdGNoKC9bYS16XSskL2kpXG4gICAgICAgIHJldHVybiB2YWx1ZXMgPyB2YWx1ZXNbMF0gOiBkZWZhdWx0VW5pdDtcbiAgICB9IGNhdGNoIHtcbiAgICAgICAgcmV0dXJuICdweCc7XG4gICAgfVxuXG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb2xvclRvSGV4KGNvbG9yOiBzdHJpbmcpIHtcbiAgaWYoY29sb3IgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAnIzAwMDAwMCc7XG4gIH1cblxuICBpZiAoY29sb3IuaW5jbHVkZXMoJ3JnYicpKSB7XG4gICAgcmV0dXJuIHJnYlRvSGV4KGNvbG9yKTtcbiAgfSBlbHNlIGlmIChjb2xvci5pbmNsdWRlcygnIycpKSB7XG4gICAgcmV0dXJuIGNvbG9yO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGZvdW5kQ29sb3IgPSBjb2xvclZhbHVlcy5maW5kKChjb2wpID0+IGNvbC5uYW1lID09PSBjb2xvcik7XG5cbiAgICBpZighZm91bmRDb2xvcikge1xuICAgICAgcmV0dXJuICcjMDAwMDAwJztcbiAgICB9XG5cbiAgICByZXR1cm4gZm91bmRDb2xvci5oZXg7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmdiVG9IZXgocmdiOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBbciwgZywgYl0gPSByZ2IucmVwbGFjZSgvW15cXGQsXSsvZywgJycpLnNwbGl0KCcsJyk7XG4gICAgcmV0dXJuICcjJyArIGNvbXBvbmVudFRvSGV4KHIpICsgY29tcG9uZW50VG9IZXgoZykgKyBjb21wb25lbnRUb0hleChiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuICcjMDAwMDAwJztcbiAgfVxufVxuXG5mdW5jdGlvbiBjb21wb25lbnRUb0hleChjKSB7XG4gIGNvbnN0IGhleCA9IHBhcnNlSW50KGMpLnRvU3RyaW5nKDE2KTtcbiAgaWYgKGhleCA9PT0gJ05hTicpIHtcbiAgICByZXR1cm4gJzAwJztcbiAgfVxuICByZXR1cm4gaGV4Lmxlbmd0aCA9PT0gMSA/ICcwJyArIGhleCA6IGhleDtcbn1cblxuY29uc3QgY29sb3JWYWx1ZXMgPSBbXG4gIHsgaGV4OiAnI0YwRjhGRicsIG5hbWU6ICdBbGljZUJsdWUnIH0sXG4gIHsgaGV4OiAnI0ZBRUJENycsIG5hbWU6ICdBbnRpcXVlV2hpdGUnIH0sXG4gIHsgaGV4OiAnIzAwRkZGRicsIG5hbWU6ICdBcXVhJyB9LFxuICB7IGhleDogJyM3RkZGRDQnLCBuYW1lOiAnQXF1YW1hcmluZScgfSxcbiAgeyBoZXg6ICcjRjBGRkZGJywgbmFtZTogJ0F6dXJlJyB9LFxuICB7IGhleDogJyNGNUY1REMnLCBuYW1lOiAnQmVpZ2UnIH0sXG4gIHsgaGV4OiAnI0ZGRTRDNCcsIG5hbWU6ICdCaXNxdWUnIH0sXG4gIHsgaGV4OiAnIzAwMDAwMCcsIG5hbWU6ICdCbGFjaycgfSxcbiAgeyBoZXg6ICcjRkZFQkNEJywgbmFtZTogJ0JsYW5jaGVkQWxtb25kJyB9LFxuICB7IGhleDogJyMwMDAwRkYnLCBuYW1lOiAnQmx1ZScgfSxcbiAgeyBoZXg6ICcjOEEyQkUyJywgbmFtZTogJ0JsdWVWaW9sZXQnIH0sXG4gIHsgaGV4OiAnI0E1MkEyQScsIG5hbWU6ICdCcm93bicgfSxcbiAgeyBoZXg6ICcjREVCODg3JywgbmFtZTogJ0J1cmx5V29vZCcgfSxcbiAgeyBoZXg6ICcjNUY5RUEwJywgbmFtZTogJ0NhZGV0Qmx1ZScgfSxcbiAgeyBoZXg6ICcjN0ZGRjAwJywgbmFtZTogJ0NoYXJ0cmV1c2UnIH0sXG4gIHsgaGV4OiAnI0QyNjkxRScsIG5hbWU6ICdDaG9jb2xhdGUnIH0sXG4gIHsgaGV4OiAnI0ZGN0Y1MCcsIG5hbWU6ICdDb3JhbCcgfSxcbiAgeyBoZXg6ICcjNjQ5NUVEJywgbmFtZTogJ0Nvcm5mbG93ZXJCbHVlJyB9LFxuICB7IGhleDogJyNGRkY4REMnLCBuYW1lOiAnQ29ybnNpbGsnIH0sXG4gIHsgaGV4OiAnI0RDMTQzQycsIG5hbWU6ICdDcmltc29uJyB9LFxuICB7IGhleDogJyMwMEZGRkYnLCBuYW1lOiAnQ3lhbicgfSxcbiAgeyBoZXg6ICcjMDAwMDhCJywgbmFtZTogJ0RhcmtCbHVlJyB9LFxuICB7IGhleDogJyMwMDhCOEInLCBuYW1lOiAnRGFya0N5YW4nIH0sXG4gIHsgaGV4OiAnI0I4ODYwQicsIG5hbWU6ICdEYXJrR29sZGVuUm9kJyB9LFxuICB7IGhleDogJyNBOUE5QTknLCBuYW1lOiAnRGFya0dyYXknIH0sXG4gIHsgaGV4OiAnI0E5QTlBOScsIG5hbWU6ICdEYXJrR3JleScgfSxcbiAgeyBoZXg6ICcjMDA2NDAwJywgbmFtZTogJ0RhcmtHcmVlbicgfSxcbiAgeyBoZXg6ICcjQkRCNzZCJywgbmFtZTogJ0RhcmtLaGFraScgfSxcbiAgeyBoZXg6ICcjOEIwMDhCJywgbmFtZTogJ0RhcmtNYWdlbnRhJyB9LFxuICB7IGhleDogJyM1NTZCMkYnLCBuYW1lOiAnRGFya09saXZlR3JlZW4nIH0sXG4gIHsgaGV4OiAnI0ZGOEMwMCcsIG5hbWU6ICdEYXJrT3JhbmdlJyB9LFxuICB7IGhleDogJyM5OTMyQ0MnLCBuYW1lOiAnRGFya09yY2hpZCcgfSxcbiAgeyBoZXg6ICcjOEIwMDAwJywgbmFtZTogJ0RhcmtSZWQnIH0sXG4gIHsgaGV4OiAnI0U5OTY3QScsIG5hbWU6ICdEYXJrU2FsbW9uJyB9LFxuICB7IGhleDogJyM4RkJDOEYnLCBuYW1lOiAnRGFya1NlYUdyZWVuJyB9LFxuICB7IGhleDogJyM0ODNEOEInLCBuYW1lOiAnRGFya1NsYXRlQmx1ZScgfSxcbiAgeyBoZXg6ICcjMkY0RjRGJywgbmFtZTogJ0RhcmtTbGF0ZUdyYXknIH0sXG4gIHsgaGV4OiAnIzJGNEY0RicsIG5hbWU6ICdEYXJrU2xhdGVHcmV5JyB9LFxuICB7IGhleDogJyMwMENFRDEnLCBuYW1lOiAnRGFya1R1cnF1b2lzZScgfSxcbiAgeyBoZXg6ICcjOTQwMEQzJywgbmFtZTogJ0RhcmtWaW9sZXQnIH0sXG4gIHsgaGV4OiAnI0ZGMTQ5MycsIG5hbWU6ICdEZWVwUGluaycgfSxcbiAgeyBoZXg6ICcjMDBCRkZGJywgbmFtZTogJ0RlZXBTa3lCbHVlJyB9LFxuICB7IGhleDogJyM2OTY5NjknLCBuYW1lOiAnRGltR3JheScgfSxcbiAgeyBoZXg6ICcjNjk2OTY5JywgbmFtZTogJ0RpbUdyZXknIH0sXG4gIHsgaGV4OiAnIzFFOTBGRicsIG5hbWU6ICdEb2RnZXJCbHVlJyB9LFxuICB7IGhleDogJyNCMjIyMjInLCBuYW1lOiAnRmlyZUJyaWNrJyB9LFxuICB7IGhleDogJyNGRkZBRjAnLCBuYW1lOiAnRmxvcmFsV2hpdGUnIH0sXG4gIHsgaGV4OiAnIzIyOEIyMicsIG5hbWU6ICdGb3Jlc3RHcmVlbicgfSxcbiAgeyBoZXg6ICcjRkYwMEZGJywgbmFtZTogJ0Z1Y2hzaWEnIH0sXG4gIHsgaGV4OiAnI0RDRENEQycsIG5hbWU6ICdHYWluc2Jvcm8nIH0sXG4gIHsgaGV4OiAnI0Y4RjhGRicsIG5hbWU6ICdHaG9zdFdoaXRlJyB9LFxuICB7IGhleDogJyNGRkQ3MDAnLCBuYW1lOiAnR29sZCcgfSxcbiAgeyBoZXg6ICcjREFBNTIwJywgbmFtZTogJ0dvbGRlblJvZCcgfSxcbiAgeyBoZXg6ICcjODA4MDgwJywgbmFtZTogJ0dyYXknIH0sXG4gIHsgaGV4OiAnIzgwODA4MCcsIG5hbWU6ICdHcmV5JyB9LFxuICB7IGhleDogJyMwMDgwMDAnLCBuYW1lOiAnR3JlZW4nIH0sXG4gIHsgaGV4OiAnI0FERkYyRicsIG5hbWU6ICdHcmVlblllbGxvdycgfSxcbiAgeyBoZXg6ICcjRjBGRkYwJywgbmFtZTogJ0hvbmV5RGV3JyB9LFxuICB7IGhleDogJyNGRjY5QjQnLCBuYW1lOiAnSG90UGluaycgfSxcbiAgeyBoZXg6ICcjQ0Q1QzVDJywgbmFtZTogJ0luZGlhblJlZCcgfSxcbiAgeyBoZXg6ICcjNEIwMDgyJywgbmFtZTogJ0luZGlnbycgfSxcbiAgeyBoZXg6ICcjRkZGRkYwJywgbmFtZTogJ0l2b3J5JyB9LFxuICB7IGhleDogJyNGMEU2OEMnLCBuYW1lOiAnS2hha2knIH0sXG4gIHsgaGV4OiAnI0U2RTZGQScsIG5hbWU6ICdMYXZlbmRlcicgfSxcbiAgeyBoZXg6ICcjRkZGMEY1JywgbmFtZTogJ0xhdmVuZGVyQmx1c2gnIH0sXG4gIHsgaGV4OiAnIzdDRkMwMCcsIG5hbWU6ICdMYXduR3JlZW4nIH0sXG4gIHsgaGV4OiAnI0ZGRkFDRCcsIG5hbWU6ICdMZW1vbkNoaWZmb24nIH0sXG4gIHsgaGV4OiAnI0FERDhFNicsIG5hbWU6ICdMaWdodEJsdWUnIH0sXG4gIHsgaGV4OiAnI0YwODA4MCcsIG5hbWU6ICdMaWdodENvcmFsJyB9LFxuICB7IGhleDogJyNFMEZGRkYnLCBuYW1lOiAnTGlnaHRDeWFuJyB9LFxuICB7IGhleDogJyNGQUZBRDInLCBuYW1lOiAnTGlnaHRHb2xkZW5Sb2RZZWxsb3cnIH0sXG4gIHsgaGV4OiAnI0QzRDNEMycsIG5hbWU6ICdMaWdodEdyYXknIH0sXG4gIHsgaGV4OiAnI0QzRDNEMycsIG5hbWU6ICdMaWdodEdyZXknIH0sXG4gIHsgaGV4OiAnIzkwRUU5MCcsIG5hbWU6ICdMaWdodEdyZWVuJyB9LFxuICB7IGhleDogJyNGRkI2QzEnLCBuYW1lOiAnTGlnaHRQaW5rJyB9LFxuICB7IGhleDogJyNGRkEwN0EnLCBuYW1lOiAnTGlnaHRTYWxtb24nIH0sXG4gIHsgaGV4OiAnIzIwQjJBQScsIG5hbWU6ICdMaWdodFNlYUdyZWVuJyB9LFxuICB7IGhleDogJyM4N0NFRkEnLCBuYW1lOiAnTGlnaHRTa3lCbHVlJyB9LFxuICB7IGhleDogJyM3Nzg4OTknLCBuYW1lOiAnTGlnaHRTbGF0ZUdyYXknIH0sXG4gIHsgaGV4OiAnIzc3ODg5OScsIG5hbWU6ICdMaWdodFNsYXRlR3JleScgfSxcbiAgeyBoZXg6ICcjQjBDNERFJywgbmFtZTogJ0xpZ2h0U3RlZWxCbHVlJyB9LFxuICB7IGhleDogJyNGRkZGRTAnLCBuYW1lOiAnTGlnaHRZZWxsb3cnIH0sXG4gIHsgaGV4OiAnIzAwRkYwMCcsIG5hbWU6ICdMaW1lJyB9LFxuICB7IGhleDogJyMzMkNEMzInLCBuYW1lOiAnTGltZUdyZWVuJyB9LFxuICB7IGhleDogJyNGQUYwRTYnLCBuYW1lOiAnTGluZW4nIH0sXG4gIHsgaGV4OiAnI0ZGMDBGRicsIG5hbWU6ICdNYWdlbnRhJyB9LFxuICB7IGhleDogJyM4MDAwMDAnLCBuYW1lOiAnTWFyb29uJyB9LFxuICB7IGhleDogJyM2NkNEQUEnLCBuYW1lOiAnTWVkaXVtQXF1YU1hcmluZScgfSxcbiAgeyBoZXg6ICcjMDAwMENEJywgbmFtZTogJ01lZGl1bUJsdWUnIH0sXG4gIHsgaGV4OiAnI0JBNTVEMycsIG5hbWU6ICdNZWRpdW1PcmNoaWQnIH0sXG4gIHsgaGV4OiAnIzkzNzBEQicsIG5hbWU6ICdNZWRpdW1QdXJwbGUnIH0sXG4gIHsgaGV4OiAnIzNDQjM3MScsIG5hbWU6ICdNZWRpdW1TZWFHcmVlbicgfSxcbiAgeyBoZXg6ICcjN0I2OEVFJywgbmFtZTogJ01lZGl1bVNsYXRlQmx1ZScgfSxcbiAgeyBoZXg6ICcjMDBGQTlBJywgbmFtZTogJ01lZGl1bVNwcmluZ0dyZWVuJyB9LFxuICB7IGhleDogJyM0OEQxQ0MnLCBuYW1lOiAnTWVkaXVtVHVycXVvaXNlJyB9LFxuICB7IGhleDogJyNDNzE1ODUnLCBuYW1lOiAnTWVkaXVtVmlvbGV0UmVkJyB9LFxuICB7IGhleDogJyMxOTE5NzAnLCBuYW1lOiAnTWlkbmlnaHRCbHVlJyB9LFxuICB7IGhleDogJyNGNUZGRkEnLCBuYW1lOiAnTWludENyZWFtJyB9LFxuICB7IGhleDogJyNGRkU0RTEnLCBuYW1lOiAnTWlzdHlSb3NlJyB9LFxuICB7IGhleDogJyNGRkU0QjUnLCBuYW1lOiAnTW9jY2FzaW4nIH0sXG4gIHsgaGV4OiAnI0ZGREVBRCcsIG5hbWU6ICdOYXZham9XaGl0ZScgfSxcbiAgeyBoZXg6ICcjMDAwMDgwJywgbmFtZTogJ05hdnknIH0sXG4gIHsgaGV4OiAnI0ZERjVFNicsIG5hbWU6ICdPbGRMYWNlJyB9LFxuICB7IGhleDogJyM4MDgwMDAnLCBuYW1lOiAnT2xpdmUnIH0sXG4gIHsgaGV4OiAnIzZCOEUyMycsIG5hbWU6ICdPbGl2ZURyYWInIH0sXG4gIHsgaGV4OiAnI0ZGQTUwMCcsIG5hbWU6ICdPcmFuZ2UnIH0sXG4gIHsgaGV4OiAnI0ZGNDUwMCcsIG5hbWU6ICdPcmFuZ2VSZWQnIH0sXG4gIHsgaGV4OiAnI0RBNzBENicsIG5hbWU6ICdPcmNoaWQnIH0sXG4gIHsgaGV4OiAnI0VFRThBQScsIG5hbWU6ICdQYWxlR29sZGVuUm9kJyB9LFxuICB7IGhleDogJyM5OEZCOTgnLCBuYW1lOiAnUGFsZUdyZWVuJyB9LFxuICB7IGhleDogJyNBRkVFRUUnLCBuYW1lOiAnUGFsZVR1cnF1b2lzZScgfSxcbiAgeyBoZXg6ICcjREI3MDkzJywgbmFtZTogJ1BhbGVWaW9sZXRSZWQnIH0sXG4gIHsgaGV4OiAnI0ZGRUZENScsIG5hbWU6ICdQYXBheWFXaGlwJyB9LFxuICB7IGhleDogJyNGRkRBQjknLCBuYW1lOiAnUGVhY2hQdWZmJyB9LFxuICB7IGhleDogJyNDRDg1M0YnLCBuYW1lOiAnUGVydScgfSxcbiAgeyBoZXg6ICcjRkZDMENCJywgbmFtZTogJ1BpbmsnIH0sXG4gIHsgaGV4OiAnI0REQTBERCcsIG5hbWU6ICdQbHVtJyB9LFxuICB7IGhleDogJyNCMEUwRTYnLCBuYW1lOiAnUG93ZGVyQmx1ZScgfSxcbiAgeyBoZXg6ICcjODAwMDgwJywgbmFtZTogJ1B1cnBsZScgfSxcbiAgeyBoZXg6ICcjNjYzMzk5JywgbmFtZTogJ1JlYmVjY2FQdXJwbGUnIH0sXG4gIHsgaGV4OiAnI0ZGMDAwMCcsIG5hbWU6ICdSZWQnIH0sXG4gIHsgaGV4OiAnI0JDOEY4RicsIG5hbWU6ICdSb3N5QnJvd24nIH0sXG4gIHsgaGV4OiAnIzQxNjlFMScsIG5hbWU6ICdSb3lhbEJsdWUnIH0sXG4gIHsgaGV4OiAnIzhCNDUxMycsIG5hbWU6ICdTYWRkbGVCcm93bicgfSxcbiAgeyBoZXg6ICcjRkE4MDcyJywgbmFtZTogJ1NhbG1vbicgfSxcbiAgeyBoZXg6ICcjRjRBNDYwJywgbmFtZTogJ1NhbmR5QnJvd24nIH0sXG4gIHsgaGV4OiAnIzJFOEI1NycsIG5hbWU6ICdTZWFHcmVlbicgfSxcbiAgeyBoZXg6ICcjRkZGNUVFJywgbmFtZTogJ1NlYVNoZWxsJyB9LFxuICB7IGhleDogJyNBMDUyMkQnLCBuYW1lOiAnU2llbm5hJyB9LFxuICB7IGhleDogJyNDMEMwQzAnLCBuYW1lOiAnU2lsdmVyJyB9LFxuICB7IGhleDogJyM4N0NFRUInLCBuYW1lOiAnU2t5Qmx1ZScgfSxcbiAgeyBoZXg6ICcjNkE1QUNEJywgbmFtZTogJ1NsYXRlQmx1ZScgfSxcbiAgeyBoZXg6ICcjNzA4MDkwJywgbmFtZTogJ1NsYXRlR3JheScgfSxcbiAgeyBoZXg6ICcjNzA4MDkwJywgbmFtZTogJ1NsYXRlR3JleScgfSxcbiAgeyBoZXg6ICcjRkZGQUZBJywgbmFtZTogJ1Nub3cnIH0sXG4gIHsgaGV4OiAnIzAwRkY3RicsIG5hbWU6ICdTcHJpbmdHcmVlbicgfSxcbiAgeyBoZXg6ICcjNDY4MkI0JywgbmFtZTogJ1N0ZWVsQmx1ZScgfSxcbiAgeyBoZXg6ICcjRDJCNDhDJywgbmFtZTogJ1RhbicgfSxcbiAgeyBoZXg6ICcjMDA4MDgwJywgbmFtZTogJ1RlYWwnIH0sXG4gIHsgaGV4OiAnI0Q4QkZEOCcsIG5hbWU6ICdUaGlzdGxlJyB9LFxuICB7IGhleDogJyNGRjYzNDcnLCBuYW1lOiAnVG9tYXRvJyB9LFxuICB7IGhleDogJyM0MEUwRDAnLCBuYW1lOiAnVHVycXVvaXNlJyB9LFxuICB7IGhleDogJyNFRTgyRUUnLCBuYW1lOiAnVmlvbGV0JyB9LFxuICB7IGhleDogJyNGNURFQjMnLCBuYW1lOiAnV2hlYXQnIH0sXG4gIHsgaGV4OiAnI0ZGRkZGRicsIG5hbWU6ICdXaGl0ZScgfSxcbiAgeyBoZXg6ICcjRjVGNUY1JywgbmFtZTogJ1doaXRlU21va2UnIH0sXG4gIHsgaGV4OiAnI0ZGRkYwMCcsIG5hbWU6ICdZZWxsb3cnIH0sXG4gIHsgaGV4OiAnIzlBQ0QzMicsIG5hbWU6ICdZZWxsb3dHcmVlbicgfVxuXVxuIiwiaW1wb3J0IFJhd0J1aWxkZXIgZnJvbSAnLi9SYXdCdWlsZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uQnVpbGRlciBleHRlbmRzIFJhd0J1aWxkZXI8SFRNTEJ1dHRvbkVsZW1lbnQ+e1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignYnV0dG9uJyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFJhd0J1aWxkZXIgZnJvbSAnLi9SYXdCdWlsZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGFpbmVyQnVpbGRlciBleHRlbmRzIFJhd0J1aWxkZXI8SFRNTERpdkVsZW1lbnQ+e1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignZGl2Jyk7XG4gICAgfVxuXG4gICAgcHVibGljIGFwcGVuZENoaWxkSWZEZWZpbmVkKGVsZW1lbnQ6IEhUTUxFbGVtZW50KXtcbiAgICAgICAgaWYoZWxlbWVudCAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG4iLCJpbXBvcnQgUmF3QnVpbGRlciBmcm9tICcuL1Jhd0J1aWxkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZUJ1aWxkZXIgZXh0ZW5kcyBSYXdCdWlsZGVyPEhUTUxJbWFnZUVsZW1lbnQ+e1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignaW1nJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFVybCh1cmw/OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnNyYyA9IHVybDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuIiwiaW1wb3J0IFJhd0J1aWxkZXIgZnJvbSAnLi9SYXdCdWlsZGVyJztcbmltcG9ydCB7IElucHV0VHlwZUVudW0gfSBmcm9tICcuLi9lbnVtcy9pbnB1dC10eXBlLmVudW0nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dEJ1aWxkZXIgZXh0ZW5kcyBSYXdCdWlsZGVyPEhUTUxJbnB1dEVsZW1lbnQ+e1xuICAgIGNvbnN0cnVjdG9yKHR5cGU6IElucHV0VHlwZUVudW0pIHtcbiAgICAgICAgc3VwZXIoJ2lucHV0JylcbiAgICAgICAgdGhpcy5lbGVtZW50LnR5cGUgPSB0eXBlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC52YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0VmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldE5hbWUobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5uYW1lID0gbmFtZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFBsYWNlaG9sZGVyKHBsYWNlaG9sZGVyOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBjaGVja2VkKGNoZWNrZWQgPSB0cnVlKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jaGVja2VkID0gY2hlY2tlZDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldE1heChtYXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLmVsZW1lbnQubWF4ID0gYCR7bWF4fWA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRNaW4obWluOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Lm1pbiA9IGAke21pbn1gO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG4iLCJpbXBvcnQgUmF3QnVpbGRlciBmcm9tICcuL1Jhd0J1aWxkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYWJlbEJ1aWxkZXIgZXh0ZW5kcyBSYXdCdWlsZGVyPEhUTUxMYWJlbEVsZW1lbnQ+e1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignbGFiZWwnKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBTdHlsZU5hbWVFbnVtIH0gZnJvbSAnLi4vZW51bXMvc3R5bGUtbmFtZS5lbnVtJztcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFJhd0J1aWxkZXI8VCBleHRlbmRzIEhUTUxFbGVtZW50PntcbiAgICBwcm90ZWN0ZWQgZWxlbWVudDogVDtcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0SWQoaWQgOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmlkID0gaWQ7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXROYW1lKG5hbWUgOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50WyduYW1lJ10gPSBuYW1lO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0U3R5bGUoc3R5bGVOYW1lOiBTdHlsZU5hbWVFbnVtLCB2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZVtzdHlsZU5hbWVdID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRJbm5lclRleHQodGV4dDogc3RyaW5nKXtcbiAgICAgICAgdGhpcy5lbGVtZW50LmlubmVyVGV4dCA9IHRleHQ7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBkcmFnZ2FibGUoc2VsZWN0ZWQgPSB0cnVlKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5kcmFnZ2FibGUgPSBzZWxlY3RlZDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZENzc0NsYXNzTmFtZShjbGFzc05hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0QWxsQ2hpbGRzKCk6IE5vZGVbXSB7XG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZXM6IE5vZGVbXSA9IFtdO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudC5jaGlsZE5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgICAgIGNoaWxkTm9kZXMucHVzaChub2RlKVxuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiBjaGlsZE5vZGVzO1xuICAgIH1cblxuICAgIHB1YmxpYyBmaW5kQ2hpbGROb2RlQnlOYW1lKG5hbWU6IHN0cmluZyk6IE5vZGUge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBbGxDaGlsZHMoKS5maW5kKChub2RlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZVsnbmFtZSddID09PSBuYW1lXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHVibGljIGFwcGVuZENoaWxkKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlQ2hpbGROb2RlKG5vZGU6IE5vZGUpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUNoaWxkKG5vZGUpXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmVDaGlsZE5vZGVCeU5hbWUobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQ2hpbGROb2RlKHRoaXMuZmluZENoaWxkTm9kZUJ5TmFtZShuYW1lKSlcbiAgICB9XG5cbiAgICBwdWJsaWMgbW9vdmVDaGlsZFVwcGVyUG9zaXRpb25CeU5hbWUobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IG5vZGVzQXJyYXkgPSB0aGlzLmdldEFsbENoaWxkcygpO1xuXG4gICAgICAgIGNvbnN0IGluZGV4T2ZDaGlsZCA9IG5vZGVzQXJyYXkuZmluZEluZGV4KChub2RlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZVsnbmFtZSddID09PSBuYW1lXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmKGluZGV4T2ZDaGlsZCAhPT0gMCkge1xuICAgICAgICAgICAgY29uc3QgaXRlbXNUb01vdmUgPSBub2Rlc0FycmF5LnNsaWNlKCAtIG5vZGVzQXJyYXkubGVuZ3RoICsgaW5kZXhPZkNoaWxkIC0gMSApO1xuXG4gICAgICAgICAgICBpdGVtc1RvTW92ZS5mb3JFYWNoKChub2RlKSA9PiB0aGlzLmVsZW1lbnQucmVtb3ZlQ2hpbGQobm9kZSkpO1xuXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQobm9kZXNBcnJheVtpbmRleE9mQ2hpbGRdKTtcblxuICAgICAgICAgICAgaXRlbXNUb01vdmUuc3BsaWNlKDEsIDEpO1xuXG4gICAgICAgICAgICBpdGVtc1RvTW92ZS5mb3JFYWNoKChub2RlKSA9PiB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQobm9kZSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG1vb3ZlQ2hpbGRMb3dlclBvc2l0aW9uQnlOYW1lKG5hbWU6IHN0cmluZykge1xuICAgICAgICBjb25zdCBub2Rlc0FycmF5ID0gdGhpcy5nZXRBbGxDaGlsZHMoKTtcblxuICAgICAgICBjb25zdCBpbmRleE9mQ2hpbGQgPSBub2Rlc0FycmF5LmZpbmRJbmRleCgobm9kZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGVbJ25hbWUnXSA9PT0gbmFtZVxuICAgICAgICB9KTtcblxuICAgICAgICBpZihpbmRleE9mQ2hpbGQgIT09IG5vZGVzQXJyYXkubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgY29uc3QgaXRlbXNUb01vdmUgPSBub2Rlc0FycmF5LnNsaWNlKCAtIG5vZGVzQXJyYXkubGVuZ3RoICsgaW5kZXhPZkNoaWxkICk7XG5cbiAgICAgICAgICAgIGl0ZW1zVG9Nb3ZlLmZvckVhY2goKG5vZGUpID0+IHRoaXMuZWxlbWVudC5yZW1vdmVDaGlsZChub2RlKSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkRWxlbWVudCA9IGl0ZW1zVG9Nb3ZlLnNwbGljZSgwLCAxKVswXTtcblxuICAgICAgICAgICAgaXRlbXNUb01vdmUuc3BsaWNlKDAgKyAxLCAwLCBzZWxlY3RlZEVsZW1lbnQpO1xuXG4gICAgICAgICAgICBpdGVtc1RvTW92ZS5mb3JFYWNoKChub2RlKSA9PiB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQobm9kZSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGFkZEV2ZW50TGlzdGVuZXIodHlwZTogc3RyaW5nLCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjaylcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudFsnZGlzYWJsZWQnXSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBidWlsZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgICB9XG59XG4iLCJpbXBvcnQgUmF3QnVpbGRlciBmcm9tICcuL1Jhd0J1aWxkZXInO1xuaW1wb3J0IEFycmF5U2VsZWN0b3JCb2R5SW50ZXJmYWNlIGZyb20gJy4uL2ludGVyZmFjZXMvc2VsZWN0b3ItZnJvbS1hcnJheS1ib2R5LmludGVyZmFjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdG9yRnJvbUFycmF5QnVpbGRlciBleHRlbmRzIFJhd0J1aWxkZXI8SFRNTFNlbGVjdEVsZW1lbnQ+e1xuICAgIHByaXZhdGUgX29wdGlvbnM6IEFycmF5U2VsZWN0b3JCb2R5SW50ZXJmYWNlW107XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBBcnJheVNlbGVjdG9yQm9keUludGVyZmFjZVtdKSB7XG4gICAgICAgIHN1cGVyKCdzZWxlY3QnKTtcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIHRoaXMuYWRkT3B0aW9ucygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkT3B0aW9ucygpIHtcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgbmV3T3B0aW9uLnRleHQgPSBvcHRpb24udGV4dDtcbiAgICAgICAgICAgIG5ld09wdGlvbi52YWx1ZSA9IG9wdGlvbi52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChuZXdPcHRpb24pXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZWxlY3RPcHRpb24odmFsdWU6IHN0cmluZykge1xuICAgICAgICBjb25zdCBmb3VuZFZhbHVlSW5kZXggPSB0aGlzLl9vcHRpb25zLmZpbmRJbmRleCgoa2V5KSA9PiBrZXkudmFsdWUgPT09IHZhbHVlKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnNlbGVjdGVkSW5kZXggPSBmb3VuZFZhbHVlSW5kZXg7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgdmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQudmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBzZWxlY3RlZEluZGV4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LnNlbGVjdGVkSW5kZXg7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBzZWxlY3RlZEluZGV4KGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnNlbGVjdGVkSW5kZXggPSBpbmRleDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IG9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQub3B0aW9ucztcbiAgICB9XG59XG4iLCJpbXBvcnQgUmF3QnVpbGRlciBmcm9tICcuL1Jhd0J1aWxkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3RvckZyb21FbnVtQnVpbGRlciBleHRlbmRzIFJhd0J1aWxkZXI8SFRNTFNlbGVjdEVsZW1lbnQ+e1xuICAgIHByaXZhdGUga2V5czogc3RyaW5nW107XG4gICAgcHJpdmF0ZSBvcHRpb25zOiBSZWNvcmQ8c3RyaW5nLHN0cmluZz47XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBSZWNvcmQ8c3RyaW5nLHN0cmluZz4pIHtcbiAgICAgICAgc3VwZXIoJ3NlbGVjdCcpO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB0aGlzLmtleXMgPSBPYmplY3Qua2V5cyhvcHRpb25zKTtcblxuICAgICAgICB0aGlzLmFkZE9wdGlvbnMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQudmFsdWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRPcHRpb25zKCkge1xuICAgICAgICB0aGlzLmtleXMuZm9yRWFjaCgob3B0S2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIG5ld09wdGlvbi50ZXh0ID0gb3B0S2V5O1xuICAgICAgICAgICAgbmV3T3B0aW9uLnZhbHVlID0gdGhpcy5vcHRpb25zW29wdEtleV07XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQobmV3T3B0aW9uKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2VsZWN0T3B0aW9uKG9wdGlvbjogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGZvdW5kVmFsdWVJbmRleCA9IHRoaXMua2V5cy5maW5kSW5kZXgoKGtleSkgPT4gdGhpcy5vcHRpb25zW2tleV0gPT09IG9wdGlvbik7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zZWxlY3RlZEluZGV4ID0gZm91bmRWYWx1ZUluZGV4O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29udGFpbmVyQnVpbGRlciBmcm9tICcuL0NvbnRhaW5lckJ1aWxkZXInO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3R5bGVzQ29tcG9uZW50c0J1aWxkZXIge1xuICAgIHB1YmxpYyBodG1sU3R5bGVzQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCA9IG5ldyBDb250YWluZXJCdWlsZGVyKCkuYnVpbGQoKTtcbiAgICBwcml2YXRlIGFjdGlvbnNDb250YWluZXI6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FjdGlvbnMtY29udGFpbmVyJyk7XG5cbiAgICBwdWJsaWMgYXBwZW5kQ2hpbGQoZWxlbWVudCkge1xuICAgICAgICB0aGlzLmh0bWxTdHlsZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGJ1aWxkKCk6IEhUTUxEaXZFbGVtZW50IHtcbiAgICAgICAgdGhpcy5hY3Rpb25zQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB0aGlzLmFjdGlvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5odG1sU3R5bGVzQ29udGFpbmVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHRtbFN0eWxlc0NvbnRhaW5lcjtcbiAgICB9XG5cbiAgICByZW1vdmUoKSB7XG4gICAgICAgIHRoaXMuYWN0aW9uc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICB9XG59XG4iLCJpbXBvcnQgUmF3QnVpbGRlciBmcm9tICcuL1Jhd0J1aWxkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0YXJlYUJ1aWxkZXIgZXh0ZW5kcyBSYXdCdWlsZGVyPEhUTUxUZXh0QXJlYUVsZW1lbnQ+e1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigndGV4dGFyZWEnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0VmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuIiwiaW1wb3J0IFJhd0J1aWxkZXIgZnJvbSAnLi9SYXdCdWlsZGVyJztcblxuaW1wb3J0IHsgVGl0bGVUeXBlc0VudW0gfSBmcm9tICcuLi9lbnVtcy90aXRsZS50eXBlcy5lbnVtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGl0bGVCdWlsZGVyIGV4dGVuZHMgUmF3QnVpbGRlcjxIVE1MQnV0dG9uRWxlbWVudD57XG4gICAgY29uc3RydWN0b3IodHlwZTogVGl0bGVUeXBlc0VudW0pIHtcbiAgICAgICAgc3VwZXIodHlwZSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IENsYXNzQ2hhbmdlUHVibGlzaGVySW50ZXJmYWNlIGZyb20gJy4uL2ludGVyZmFjZXMvY2xhc3MtY2hhbmdlLXB1Ymxpc2hlci5pbnRlcmZhY2UnO1xuaW1wb3J0IENsYXNzQ2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2UgZnJvbSAnLi4vaW50ZXJmYWNlcy9jbGFzcy1jaGFuZ2Utb2JzZXJ2ZXIuaW50ZXJmYWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xhc3NDaGFuZ2VQdWJsaXNoZXIgaW1wbGVtZW50cyBDbGFzc0NoYW5nZVB1Ymxpc2hlckludGVyZmFjZSB7XG4gICAgcHJpdmF0ZSBvYnNlcnZlcnM6IENsYXNzQ2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2VbXSA9IFtdO1xuXG4gICAgcHVibGljIGF0dGFjaChvYnNlcnZlcjogQ2xhc3NDaGFuZ2VPYnNlcnZlckludGVyZmFjZSk6IHZvaWQge1xuICAgICAgICBjb25zdCBpc0V4aXN0ID0gdGhpcy5vYnNlcnZlcnMuaW5jbHVkZXMob2JzZXJ2ZXIpO1xuICAgICAgICBpZiAoaXNFeGlzdCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKCdTdWJqZWN0OiBPYnNlcnZlciBoYXMgYmVlbiBhdHRhY2hlZCBhbHJlYWR5LicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLnB1c2gob2JzZXJ2ZXIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZXRhY2gob2JzZXJ2ZXI6IENsYXNzQ2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2UpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXJJbmRleCA9IHRoaXMub2JzZXJ2ZXJzLmluZGV4T2Yob2JzZXJ2ZXIpO1xuICAgICAgICBpZiAob2JzZXJ2ZXJJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmxvZygnU3ViamVjdDogTm9uZXhpc3RlbnQgb2JzZXJ2ZXIuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vYnNlcnZlcnMuc3BsaWNlKG9ic2VydmVySW5kZXgsIDEpO1xuICAgIH1cblxuICAgIHB1YmxpYyBub3RpZnlDbGFzc05hbWUobmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGZvciAoY29uc3Qgb2JzZXJ2ZXIgb2YgdGhpcy5vYnNlcnZlcnMpIHtcbiAgICAgICAgICAgIG9ic2VydmVyLmNsYXNzTmFtZVVwZGF0ZWQobmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50Q2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2UgZnJvbSAnLi4vaW50ZXJmYWNlcy9jb21wb25lbnQtY2hhbmdlLW9ic2VydmVyLmludGVyZmFjZSc7XG5pbXBvcnQgQ29tcG9uZW50Q2hhbmdlUHVibGlzaGVySW50ZXJmYWNlIGZyb20gJy4uL2ludGVyZmFjZXMvY29tcG9uZW50LWNoYW5nZS1wdWJsaXNoZXIuaW50ZXJmYWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50Q2hhbmdlUHVibGlzaGVyIGltcGxlbWVudHMgQ29tcG9uZW50Q2hhbmdlUHVibGlzaGVySW50ZXJmYWNlIHtcbiAgICBwcml2YXRlIG9ic2VydmVyczogQ29tcG9uZW50Q2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2VbXSA9IFtdO1xuXG4gICAgcHVibGljIGF0dGFjaChvYnNlcnZlcjogQ29tcG9uZW50Q2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2UpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaXNFeGlzdCA9IHRoaXMub2JzZXJ2ZXJzLmluY2x1ZGVzKG9ic2VydmVyKTtcbiAgICAgICAgaWYgKGlzRXhpc3QpIHtcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmxvZygnU3ViamVjdDogT2JzZXJ2ZXIgaGFzIGJlZW4gYXR0YWNoZWQgYWxyZWFkeS4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9ic2VydmVycy5wdXNoKG9ic2VydmVyKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGV0YWNoKG9ic2VydmVyOiBDb21wb25lbnRDaGFuZ2VPYnNlcnZlckludGVyZmFjZSk6IHZvaWQge1xuICAgICAgICBjb25zdCBvYnNlcnZlckluZGV4ID0gdGhpcy5vYnNlcnZlcnMuaW5kZXhPZihvYnNlcnZlcik7XG4gICAgICAgIGlmIChvYnNlcnZlckluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKCdTdWJqZWN0OiBOb25leGlzdGVudCBvYnNlcnZlci4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9ic2VydmVycy5zcGxpY2Uob2JzZXJ2ZXJJbmRleCwgMSk7XG4gICAgfVxuXG4gICAgcHVibGljIG5vdGlmeUNvbXBvbmVudE5hbWUobmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGZvciAoY29uc3Qgb2JzZXJ2ZXIgb2YgdGhpcy5vYnNlcnZlcnMpIHtcbiAgICAgICAgICAgIG9ic2VydmVyLmNvbXBvbmVudFNlbGVjdGVkKG5hbWUpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IGRyYWdTdGFydFdpdGhUYXJnZXROb2RlTmFtZSBmcm9tICcuLi9jb21tb24vZnVuY3Rpb25zL2RyYWctc3RhcnQtd2l0aC10YXJnZXQtbm9kZV9uYW1lJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdERyYWdnYWJsZUNvbXBvbmVudHMoKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZG9tLWVsZW1lbnQnKTtcblxuICAgIGRvbUVsZW1lbnRzLmZvckVhY2goKGRvbUVsZW1lbnQpID0+IHtcbiAgICAgICAgZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBkcmFnU3RhcnRXaXRoVGFyZ2V0Tm9kZU5hbWUpO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IFJhd0hUTUxDb25wb25lbnQgZnJvbSAnLi4vaHRtbC1jb21wb25lbnRzL1Jhd0hUTUxDb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDc3NTdHlsZVNoZWV0IHtcbiAgICBwcml2YXRlIHN0YXRpYyBzdHlsZVNoZWV0ID0gZG9jdW1lbnQuc3R5bGVTaGVldHNbMV07XG5cbiAgICAvKlxuICAgIENTU1N0eWxlU2hlZXREb2N1bWVudGF0aW9uOlxuICAgIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DU1NTdHlsZVNoZWV0L2FkZFJ1bGVcbiAgICAqL1xuXG4gICAgc3RhdGljIGluaXQoKSB7XG4gICAgICAgIGNvbnN0IHByaW50Q3NzRmlsZUJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpbnQtY3NzLWZpbGUnKTtcbiAgICAgICAgdGhpcy5wcmludCA9IHRoaXMucHJpbnQuYmluZCh0aGlzKTtcbiAgICAgICAgcHJpbnRDc3NGaWxlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5wcmludCk7XG4gICAgfVxuXG4gICAgc3RhdGljIHByaW50KCkge1xuICAgICAgICBsZXQgY3NzRmlsZU91dHB1dCA9ICcnO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKENzc1N0eWxlU2hlZXQuc3R5bGVTaGVldC5jc3NSdWxlcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgY3NzRmlsZU91dHB1dCArPSBgJHtDc3NTdHlsZVNoZWV0LnN0eWxlU2hlZXQuY3NzUnVsZXNbcGFyc2VJbnQoa2V5KV0uY3NzVGV4dH1cXG5cXG5gXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGNzc0ZpbGVPdXRwdXQpO1xuXG4gICAgICAgIC8vIFRPRE86IHZlciBzaSBoYXkgcXVlIGVsaW1pbmFyIGFsZ28gZGVsIGFwcC1jb250YWluZXIuLi4gYWxndW4gYXRyaWJ1dG8uLi5cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0UnVsZShpZDogc3RyaW5nKTogQ1NTUnVsZSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRSdWxlSW5kZXgoaWQpO1xuICAgICAgICByZXR1cm4gQ3NzU3R5bGVTaGVldC5zdHlsZVNoZWV0LmNzc1J1bGVzW2luZGV4XTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0UnVsZUluZGV4KGlkOiBzdHJpbmcpOiBudW1iZXIge1xuICAgICAgICBjb25zdCBpbmRleCA9IHBhcnNlSW50KE9iamVjdC5rZXlzKENzc1N0eWxlU2hlZXQuc3R5bGVTaGVldC5jc3NSdWxlcykuZmluZChrZXkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gQ3NzU3R5bGVTaGVldC5zdHlsZVNoZWV0LmNzc1J1bGVzW3BhcnNlSW50KGtleSldWydzZWxlY3RvclRleHQnXVxuICAgICAgICAgICAgcmV0dXJuIGNsYXNzTmFtZSA9PT0gYC4ke2lkfWBcbiAgICAgICAgfSkpXG5cbiAgICAgICAgaWYoaXNOYU4oaW5kZXgpKXtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0UnVsZXMoaWQ6IHN0cmluZyk6IENTU1J1bGVbXSB7XG4gICAgICAgIGNvbnN0IGluZGV4ZXMgPSB0aGlzLmdldFJ1bGVzSW5kZXhlcyhpZCk7XG4gICAgICAgIHJldHVybiBpbmRleGVzLm1hcCgoaW5kZXgpID0+IENzc1N0eWxlU2hlZXQuc3R5bGVTaGVldC5jc3NSdWxlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRBbGxSdWxlcygpOiBDU1NSdWxlW10ge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhDc3NTdHlsZVNoZWV0LnN0eWxlU2hlZXQuY3NzUnVsZXMpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRSdWxlc0luZGV4ZXMoaWQ6IHN0cmluZyk6IG51bWJlcltdIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKENzc1N0eWxlU2hlZXQuc3R5bGVTaGVldC5jc3NSdWxlcylcbiAgICAgICAgICAgIC5maWx0ZXIoa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBDc3NTdHlsZVNoZWV0LnN0eWxlU2hlZXQuY3NzUnVsZXNbcGFyc2VJbnQoa2V5KV1bJ3NlbGVjdG9yVGV4dCddXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNsYXNzTmFtZSA9PT0gYC4ke2lkfWAgfHwgY2xhc3NOYW1lLmluY2x1ZGVzKGAuJHtpZH06YClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAubWFwKChpbmRleCkgPT4gcGFyc2VJbnQoaW5kZXgpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0UnVsZVN0eWxlcyhpZDogc3RyaW5nKTogQ1NTU3R5bGVEZWNsYXJhdGlvbiB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRSdWxlSW5kZXgoaWQpO1xuICAgICAgICByZXR1cm4gQ3NzU3R5bGVTaGVldC5zdHlsZVNoZWV0LmNzc1J1bGVzW2luZGV4XVsnc3R5bGUnXTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVtb3ZlUnVsZShpZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRSdWxlSW5kZXgoaWQpO1xuICAgICAgICBsZXQgZXhpc3RzUnVsZUZvckFub3RoZXJDb21wb25lbnQgPSBmYWxzZTtcblxuICAgICAgICBSYXdIVE1MQ29ucG9uZW50Lmluc3RhbmNlcy5mb3JFYWNoKChpbnN0YW5jZSkgPT4ge1xuICAgICAgICAgICAgaWYoaW5zdGFuY2UuY2xhc3NMaXN0LmNvbnRhaW5zKGlkKSkge1xuICAgICAgICAgICAgICAgIGV4aXN0c1J1bGVGb3JBbm90aGVyQ29tcG9uZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBpZighZXhpc3RzUnVsZUZvckFub3RoZXJDb21wb25lbnQpIHtcbiAgICAgICAgICAgIENzc1N0eWxlU2hlZXQuc3R5bGVTaGVldC5kZWxldGVSdWxlKGluZGV4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyByZW1vdmVSdWxlQnlJbmRleChpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIENzc1N0eWxlU2hlZXQuc3R5bGVTaGVldC5kZWxldGVSdWxlKGluZGV4KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaW5zZXJ0UnVsZShydWxlOiBzdHJpbmcpIHtcbiAgICAgICAgQ3NzU3R5bGVTaGVldC5zdHlsZVNoZWV0Lmluc2VydFJ1bGUocnVsZSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNoYW5nZVJ1bGVOYW1lKGN1cnJlbnRSdWxlOiBzdHJpbmcsIG5ld1J1bGVOYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFJ1bGVJbmRleCA9IHRoaXMuZ2V0UnVsZUluZGV4KGN1cnJlbnRSdWxlKTtcbiAgICAgICAgY29uc3QgbmV3UnVsZSA9IENzc1N0eWxlU2hlZXQuc3R5bGVTaGVldC5jc3NSdWxlc1tjdXJyZW50UnVsZUluZGV4XS5jc3NUZXh0LnJlcGxhY2UoY3VycmVudFJ1bGUsIG5ld1J1bGVOYW1lKTtcbiAgICAgICAgdGhpcy5yZW1vdmVSdWxlQnlJbmRleChjdXJyZW50UnVsZUluZGV4KTtcbiAgICAgICAgdGhpcy5pbnNlcnRSdWxlKG5ld1J1bGUpO1xuICAgIH1cblxuICAgIHN0YXRpYyBkdXBsaWNhdGVSdWxlKHJ1bGVUb0R1cGxpY2F0ZTogc3RyaW5nLCBuZXdOYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgcnVsZVRvRHVwbGljYXRlSW5kZXggPSB0aGlzLmdldFJ1bGVJbmRleChydWxlVG9EdXBsaWNhdGUpO1xuICAgICAgICBjb25zdCBuZXdSdWxlID1cbiAgICAgICAgICAgIENzc1N0eWxlU2hlZXQuc3R5bGVTaGVldC5jc3NSdWxlc1tydWxlVG9EdXBsaWNhdGVJbmRleF0uY3NzVGV4dC5yZXBsYWNlKHJ1bGVUb0R1cGxpY2F0ZSwgbmV3TmFtZSk7XG4gICAgICAgIHRoaXMuaW5zZXJ0UnVsZShuZXdSdWxlKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50Q2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2UgZnJvbSAnLi4vY29tbW9uL2ludGVyZmFjZXMvY29tcG9uZW50LWNoYW5nZS1vYnNlcnZlci5pbnRlcmZhY2UnO1xuXG5pbXBvcnQgQnV0dG9uQnVpbGRlciBmcm9tICcuLi9jb21tb24vbW9kZWxzL0J1dHRvbkJ1aWxkZXInO1xuaW1wb3J0IFJhd0hUTUxDb25wb25lbnQgZnJvbSAnLi9SYXdIVE1MQ29tcG9uZW50JztcblxuaW1wb3J0IENzc1N0eWxlU2hlZXQgZnJvbSAnLi4vY3NzLXN0eWxlc2hlZXQvY3NzLXN0eWxlc2hlZXQnO1xuXG5pbXBvcnQgZGVmaW5lRWxlbWVudE5hbWUgZnJvbSAnLi4vY29tbW9uL2Z1bmN0aW9ucy9kZWZpbmUtZWxlbWVudC1uYW1lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgUmF3SFRNTENvbnBvbmVudCBpbXBsZW1lbnRzIENvbXBvbmVudENoYW5nZU9ic2VydmVySW50ZXJmYWNlIHtcbiAgICBwcml2YXRlIHN0YXRpYyBpdGVyYXRvciA9IDA7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGRlZmluZUVsZW1lbnROYW1lKGBidXR0b24ke0J1dHRvbi5pdGVyYXRvcisrfWAsIFJhd0hUTUxDb25wb25lbnQuaW5zdGFuY2VzKTtcblxuICAgICAgICBDc3NTdHlsZVNoZWV0Lmluc2VydFJ1bGUoYC4ke25hbWV9IHtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzRDQUY1MDtcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1gKTtcblxuICAgICAgICBDc3NTdHlsZVNoZWV0Lmluc2VydFJ1bGUoYC4ke25hbWV9OmhvdmVyIHtvcGFjaXR5OiAwLjZ9YCk7XG5cbiAgICAgICAgY29uc3QgZWxlbWVudCA9IG5ldyBCdXR0b25CdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXROYW1lKG5hbWUpXG4gICAgICAgICAgICAuc2V0SWQobmFtZSlcbiAgICAgICAgICAgIC5hZGRDc3NDbGFzc05hbWUobmFtZSlcbiAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ05ldyBCdXR0b24nKVxuICAgICAgICAgICAgLmRyYWdnYWJsZSgpXG4gICAgICAgICAgICAuYnVpbGQoKTtcblxuICAgICAgICBzdXBlcihlbGVtZW50KTtcblxuICAgICAgICB0aGlzLm9wZW5FbGVtZW50Q29uZmlncyA9IHRoaXMub3BlbkVsZW1lbnRDb25maWdzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhZ0xlYXZlID0gdGhpcy5kcmFnTGVhdmUuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuZHJhZ1N0YXJ0V2l0aFRhcmdldElkKTtcbiAgICAgICAgdGhpcy5fZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCB0aGlzLmRyYWdMZWF2ZSk7XG5cbiAgICAgICAgdGhpcy5fZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3BlbkVsZW1lbnRDb25maWdzKTtcbiAgICB9XG5cbiAgICBnZXQgZG9tRWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RvbUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9wZW5FbGVtZW50Q29uZmlncyhldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5zZWxlY3RvclZhbHVlKCk7XG5cblxuICAgICAgICB0aGlzLmJ1aWxkRWxlbWVudENvbmZpZ3MoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29tcG9uZW50U2VsZWN0ZWQoY29tcG9uZW50KSB7XG4gICAgICAgIGlmKGNvbXBvbmVudCA9PT0gdGhpcy5fZG9tRWxlbWVudFsnbmFtZSddKSB7XG4gICAgICAgICAgICB0aGlzLmJ1aWxkRWxlbWVudENvbmZpZ3MoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgYnVpbGRFbGVtZW50Q29uZmlncygpIHtcbiAgICAgICAgdGhpcy5pbnNlcnRDb21wb25lbnRBZnRlcignYWRkSW5uZXJUZXh0Q2hhbmdlQ29tcG9uZW50JywgJ2FkZENsYXNzTmFtZURlZmluaXRpb25Db21wb25lbnQnKTtcbiAgICAgICAgdGhpcy5idWlsZEVsZW1lbnRzKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudENoYW5nZU9ic2VydmVySW50ZXJmYWNlIGZyb20gJy4uL2NvbW1vbi9pbnRlcmZhY2VzL2NvbXBvbmVudC1jaGFuZ2Utb2JzZXJ2ZXIuaW50ZXJmYWNlJztcblxuaW1wb3J0IENvbnRhaW5lckJ1aWxkZXIgZnJvbSAnLi4vY29tbW9uL21vZGVscy9Db250YWluZXJCdWlsZGVyJztcbmltcG9ydCBSYXdIVE1MQ29ucG9uZW50IGZyb20gJy4vUmF3SFRNTENvbXBvbmVudCc7XG5cbmltcG9ydCBDc3NTdHlsZVNoZWV0IGZyb20gJy4uL2Nzcy1zdHlsZXNoZWV0L2Nzcy1zdHlsZXNoZWV0JztcbmltcG9ydCBjb25zdGFudHMgZnJvbSAnLi4vY29tbW9uL2NvbnN0YW50cy9jb25zdGFudHMnO1xuaW1wb3J0IGRlZmluZUVsZW1lbnROYW1lIGZyb20gJy4uL2NvbW1vbi9mdW5jdGlvbnMvZGVmaW5lLWVsZW1lbnQtbmFtZSc7XG5cbmltcG9ydCB7IERpc3BsYXlUeXBlc0VudW0gfSBmcm9tICcuLi9jb21tb24vZW51bXMvZGlzcGxheS10eXBlcy5lbnVtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGFpbmVyIGV4dGVuZHMgUmF3SFRNTENvbnBvbmVudCBpbXBsZW1lbnRzIENvbXBvbmVudENoYW5nZU9ic2VydmVySW50ZXJmYWNlIHtcbiAgICBwcml2YXRlIHN0YXRpYyBpdGVyYXRvciA9IDA7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGRlZmluZUVsZW1lbnROYW1lKGBjb250YWluZXIke0NvbnRhaW5lci5pdGVyYXRvcisrfWAsIFJhd0hUTUxDb25wb25lbnQuaW5zdGFuY2VzKTtcblxuICAgICAgICBDc3NTdHlsZVNoZWV0Lmluc2VydFJ1bGUoYC4ke25hbWV9IHtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiAke0Rpc3BsYXlUeXBlc0VudW0uZmxleH07XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwyNTUsMjU1KTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCByZ2IoMCwwLDApO1xuICAgICAgICB9YCk7XG5cbiAgICAgICAgY29uc3QgZWxlbWVudCA9IG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXROYW1lKG5hbWUpXG4gICAgICAgICAgICAuc2V0SWQobmFtZSlcbiAgICAgICAgICAgIC5hZGRDc3NDbGFzc05hbWUobmFtZSlcbiAgICAgICAgICAgIC5kcmFnZ2FibGUoKVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG5cbiAgICAgICAgc3VwZXIoZWxlbWVudCk7XG5cbiAgICAgICAgdGhpcy5kcmFnRW50ZXIgPSB0aGlzLmRyYWdFbnRlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRyYWdMZWF2ZUZvclRoaXNFbGVtZW50ID0gdGhpcy5kcmFnTGVhdmVGb3JUaGlzRWxlbWVudC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRyb3AgPSB0aGlzLmRyb3AuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLm1vdXNlT3ZlciA9IHRoaXMubW91c2VPdmVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubW91c2VMZWF2ZSA9IHRoaXMubW91c2VMZWF2ZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMub3BlbkVsZW1lbnRDb25maWdzID0gdGhpcy5vcGVuRWxlbWVudENvbmZpZ3MuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuZHJhZ1N0YXJ0V2l0aFRhcmdldElkKTtcbiAgICAgICAgdGhpcy5fZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCB0aGlzLmRyYWdFbnRlcik7XG4gICAgICAgIHRoaXMuX2RvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgdGhpcy5kcmFnTGVhdmVGb3JUaGlzRWxlbWVudCk7XG4gICAgICAgIHRoaXMuX2RvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuZHJvcCk7XG5cbiAgICAgICAgdGhpcy5fZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgdGhpcy5tb3VzZU92ZXIpO1xuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLm1vdXNlTGVhdmUpO1xuXG4gICAgICAgIHRoaXMuX2RvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9wZW5FbGVtZW50Q29uZmlncyk7XG4gICAgfVxuXG4gICAgZ2V0IGRvbUVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kb21FbGVtZW50O1xuICAgIH1cblxuICAgIHByaXZhdGUgZHJhZ0VudGVyKGV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgdGhpcy5kb21FbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbnN0YW50cy5JTlZFUlRFRF9CQUNLR1JPVU5EX0NPTE9SO1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnQucGFyZW50RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJztcbiAgICB9XG5cbiAgICBwcml2YXRlIGRyYWdMZWF2ZUZvclRoaXNFbGVtZW50KGV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgdGhpcy5kb21FbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcnO1xuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmF0dHJpYnV0ZXMucmVtb3ZlTmFtZWRJdGVtKCdzdHlsZScpOyAvLyBUT0RPOiBhbGdvIGRlIGVzdG8gZmFsbGFcbiAgICB9XG5cbiAgICBwcml2YXRlIGRyb3AoKSB7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJztcbiAgICAgICAgdGhpcy5kb21FbGVtZW50LnBhcmVudEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29uc3RhbnRzLklOVkVSVEVEX0JBQ0tHUk9VTkRfQ09MT1I7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBob3ZlckV4aXN0cygpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IGhvdmVyRXhpc3RzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2RvbUVsZW1lbnQuY2xhc3NMaXN0LmZvckVhY2goKGNsYXNzbmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBpZiAoQ3NzU3R5bGVTaGVldC5nZXRSdWxlSW5kZXgoYCR7Y2xhc3NuYW1lfTpob3ZlcmApICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGhvdmVyRXhpc3RzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGhvdmVyRXhpc3RzO1xuICAgIH1cblxuICAgIHByaXZhdGUgbW91c2VPdmVyKCkge1xuICAgICAgICBpZiAoIXRoaXMuaG92ZXJFeGlzdHMoKSkge1xuICAgICAgICAgICAgdGhpcy5fZG9tRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb25zdGFudHMuSU5WRVJURURfQkFDS0dST1VORF9DT0xPUjtcbiAgICAgICAgICAgIHRoaXMuX2RvbUVsZW1lbnQucGFyZW50RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgbW91c2VMZWF2ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmhvdmVyRXhpc3RzKCkpIHtcbiAgICAgICAgICAgIHRoaXMuX2RvbUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyc7XG4gICAgICAgICAgICB0aGlzLl9kb21FbGVtZW50LnBhcmVudEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29uc3RhbnRzLklOVkVSVEVEX0JBQ0tHUk9VTkRfQ09MT1I7XG4gICAgICAgICAgICB0aGlzLl9kb21FbGVtZW50LmF0dHJpYnV0ZXMucmVtb3ZlTmFtZWRJdGVtKCdzdHlsZScpOyAvLyBUT0RPOiBhbGdvIGRlIGVzdG8gZmFsbGFcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBvcGVuRWxlbWVudENvbmZpZ3MoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMuc2VsZWN0b3JWYWx1ZSgpO1xuXG4gICAgICAgIHRoaXMuYnVpbGRFbGVtZW50Q29uZmlncygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb21wb25lbnRTZWxlY3RlZChjb21wb25lbnQpIHtcbiAgICAgICAgaWYoY29tcG9uZW50ID09PSB0aGlzLl9kb21FbGVtZW50WyduYW1lJ10pIHtcbiAgICAgICAgICAgIHRoaXMuYnVpbGRFbGVtZW50Q29uZmlncygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBidWlsZEVsZW1lbnRDb25maWdzKCkge1xuICAgICAgICB0aGlzLmluc2VydENvbXBvbmVudEJlZm9yZSgnYWRkRGlzcGxheUFzUGFyZW50Q29tcG9uZW50JywgJ2FkZERpc3BsYXlBc0NoaWxkQ29tcG9uZW50Jyk7XG4gICAgICAgIHRoaXMuYnVpbGRFbGVtZW50cygpO1xuICAgIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnRDaGFuZ2VPYnNlcnZlckludGVyZmFjZSBmcm9tICcuLi9jb21tb24vaW50ZXJmYWNlcy9jb21wb25lbnQtY2hhbmdlLW9ic2VydmVyLmludGVyZmFjZSc7XG5cbmltcG9ydCBJbWFnZUJ1aWxkZXIgZnJvbSAnLi4vY29tbW9uL21vZGVscy9JbWFnZUJ1aWxkZXInO1xuaW1wb3J0IFJhd0hUTUxDb25wb25lbnQgZnJvbSAnLi9SYXdIVE1MQ29tcG9uZW50JztcblxuaW1wb3J0IENzc1N0eWxlU2hlZXQgZnJvbSAnLi4vY3NzLXN0eWxlc2hlZXQvY3NzLXN0eWxlc2hlZXQnO1xuaW1wb3J0IGRlZmluZUVsZW1lbnROYW1lIGZyb20gJy4uL2NvbW1vbi9mdW5jdGlvbnMvZGVmaW5lLWVsZW1lbnQtbmFtZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlIGV4dGVuZHMgUmF3SFRNTENvbnBvbmVudCBpbXBsZW1lbnRzIENvbXBvbmVudENoYW5nZU9ic2VydmVySW50ZXJmYWNlIHtcbiAgICBwcml2YXRlIHN0YXRpYyBpdGVyYXRvciA9IDA7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGRlZmluZUVsZW1lbnROYW1lKGBpbWFnZSR7SW1hZ2UuaXRlcmF0b3IrK31gLCBSYXdIVE1MQ29ucG9uZW50Lmluc3RhbmNlcyk7XG5cbiAgICAgICAgQ3NzU3R5bGVTaGVldC5pbnNlcnRSdWxlKGAuJHtuYW1lfSB7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwyNTUsMjU1KTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCByZ2IoMCwwLDApO1xuICAgICAgICB9YCk7XG5cbiAgICAgICAgY29uc3QgZWxlbWVudCA9IG5ldyBJbWFnZUJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldE5hbWUobmFtZSlcbiAgICAgICAgICAgIC5zZXRJZChuYW1lKVxuICAgICAgICAgICAgLmFkZENzc0NsYXNzTmFtZShuYW1lKVxuICAgICAgICAgICAgLnNldFVybCgpXG4gICAgICAgICAgICAuZHJhZ2dhYmxlKClcbiAgICAgICAgICAgIC5idWlsZCgpO1xuXG4gICAgICAgIHN1cGVyKGVsZW1lbnQpO1xuXG4gICAgICAgIHRoaXMub3BlbkVsZW1lbnRDb25maWdzID0gdGhpcy5vcGVuRWxlbWVudENvbmZpZ3MuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcmFnTGVhdmUgPSB0aGlzLmRyYWdMZWF2ZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuX2RvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5kcmFnU3RhcnRXaXRoVGFyZ2V0SWQpO1xuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIHRoaXMuZHJhZ0xlYXZlKTtcblxuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcGVuRWxlbWVudENvbmZpZ3MpO1xuICAgIH1cblxuICAgIGdldCBkb21FbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZG9tRWxlbWVudDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb3BlbkVsZW1lbnRDb25maWdzKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLnNlbGVjdG9yVmFsdWUoKTtcbiAgICAgICAgdGhpcy5idWlsZEVsZW1lbnRDb25maWdzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbXBvbmVudFNlbGVjdGVkKGNvbXBvbmVudCkge1xuICAgICAgICBpZiAoY29tcG9uZW50ID09PSB0aGlzLl9kb21FbGVtZW50WyduYW1lJ10pIHtcbiAgICAgICAgICAgIHRoaXMuYnVpbGRFbGVtZW50Q29uZmlncygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBidWlsZEVsZW1lbnRDb25maWdzKCkge1xuICAgICAgICB0aGlzLmluc2VydENvbXBvbmVudEFmdGVyKCdhZGRVcmxJbnB1dENvbXBvbmVudCcsICdhZGRDbGFzc05hbWVEZWZpbml0aW9uQ29tcG9uZW50Jyk7XG4gICAgICAgIHRoaXMuYnVpbGRFbGVtZW50cygpO1xuICAgIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnRDaGFuZ2VPYnNlcnZlckludGVyZmFjZSBmcm9tICcuLi9jb21tb24vaW50ZXJmYWNlcy9jb21wb25lbnQtY2hhbmdlLW9ic2VydmVyLmludGVyZmFjZSc7XG5cbmltcG9ydCBJbnB1dEJ1aWxkZXIgZnJvbSAnLi4vY29tbW9uL21vZGVscy9JbnB1dEJ1aWxkZXInO1xuaW1wb3J0IFJhd0hUTUxDb25wb25lbnQgZnJvbSAnLi9SYXdIVE1MQ29tcG9uZW50JztcblxuaW1wb3J0IGRlZmluZUVsZW1lbnROYW1lIGZyb20gJy4uL2NvbW1vbi9mdW5jdGlvbnMvZGVmaW5lLWVsZW1lbnQtbmFtZSc7XG5cbmltcG9ydCBDc3NTdHlsZVNoZWV0IGZyb20gJy4uL2Nzcy1zdHlsZXNoZWV0L2Nzcy1zdHlsZXNoZWV0JztcblxuaW1wb3J0IHsgSW5wdXRUeXBlRW51bSB9IGZyb20gJy4uL2NvbW1vbi9lbnVtcy9pbnB1dC10eXBlLmVudW0nO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXQgZXh0ZW5kcyBSYXdIVE1MQ29ucG9uZW50IGltcGxlbWVudHMgQ29tcG9uZW50Q2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2Uge1xuICAgIHByaXZhdGUgc3RhdGljIGl0ZXJhdG9yID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBjb25zdCBuYW1lID0gZGVmaW5lRWxlbWVudE5hbWUoYGlucHV0JHtJbnB1dC5pdGVyYXRvcisrfWAsIFJhd0hUTUxDb25wb25lbnQuaW5zdGFuY2VzKTtcblxuICAgICAgICBDc3NTdHlsZVNoZWV0Lmluc2VydFJ1bGUoYC4ke25hbWV9IHtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggM3B4ICNkZGQ7XG4gICAgICAgIH1gKTtcblxuICAgICAgICBDc3NTdHlsZVNoZWV0Lmluc2VydFJ1bGUoYC4ke25hbWV9OmhvdmVyIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgfWApO1xuXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBuZXcgSW5wdXRCdWlsZGVyKElucHV0VHlwZUVudW0udGV4dClcbiAgICAgICAgICAgIC5zZXROYW1lKG5hbWUpXG4gICAgICAgICAgICAuc2V0SWQobmFtZSlcbiAgICAgICAgICAgIC5hZGRDc3NDbGFzc05hbWUobmFtZSlcbiAgICAgICAgICAgIC5kcmFnZ2FibGUoKVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG5cbiAgICAgICAgc3VwZXIoZWxlbWVudCk7XG5cbiAgICAgICAgdGhpcy5vcGVuRWxlbWVudENvbmZpZ3MgPSB0aGlzLm9wZW5FbGVtZW50Q29uZmlncy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRyYWdMZWF2ZSA9IHRoaXMuZHJhZ0xlYXZlLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5fZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLmRyYWdTdGFydFdpdGhUYXJnZXRJZCk7XG4gICAgICAgIHRoaXMuX2RvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgdGhpcy5kcmFnTGVhdmUpO1xuXG4gICAgICAgIHRoaXMuX2RvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9wZW5FbGVtZW50Q29uZmlncyk7XG4gICAgfVxuXG4gICAgZ2V0IGRvbUVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kb21FbGVtZW50O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvcGVuRWxlbWVudENvbmZpZ3MoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMuc2VsZWN0b3JWYWx1ZSgpO1xuICAgICAgICB0aGlzLmJ1aWxkRWxlbWVudENvbmZpZ3MoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29tcG9uZW50U2VsZWN0ZWQoY29tcG9uZW50KSB7XG4gICAgICAgIGlmKGNvbXBvbmVudCA9PT0gdGhpcy5fZG9tRWxlbWVudFsnbmFtZSddKSB7XG4gICAgICAgICAgICB0aGlzLmJ1aWxkRWxlbWVudENvbmZpZ3MoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgYnVpbGRFbGVtZW50Q29uZmlncygpIHtcbiAgICAgICAgdGhpcy5pbnNlcnRDb21wb25lbnRBZnRlcignYWRkSW5wdXRUeXBlU2VsZWN0b3JDb21wb25lbnQnLCAnYWRkQ2xhc3NOYW1lRGVmaW5pdGlvbkNvbXBvbmVudCcpO1xuICAgICAgICB0aGlzLmJ1aWxkRWxlbWVudHMoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50Q2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2UgZnJvbSAnLi4vY29tbW9uL2ludGVyZmFjZXMvY29tcG9uZW50LWNoYW5nZS1vYnNlcnZlci5pbnRlcmZhY2UnO1xuXG5pbXBvcnQgTGFiZWxCdWlsZGVyIGZyb20gJy4uL2NvbW1vbi9tb2RlbHMvTGFiZWxCdWlsZGVyJztcbmltcG9ydCBSYXdIVE1MQ29ucG9uZW50IGZyb20gJy4vUmF3SFRNTENvbXBvbmVudCc7XG5cbmltcG9ydCBDc3NTdHlsZVNoZWV0IGZyb20gJy4uL2Nzcy1zdHlsZXNoZWV0L2Nzcy1zdHlsZXNoZWV0JztcblxuaW1wb3J0IGRlZmluZUVsZW1lbnROYW1lIGZyb20gJy4uL2NvbW1vbi9mdW5jdGlvbnMvZGVmaW5lLWVsZW1lbnQtbmFtZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhYmVsIGV4dGVuZHMgUmF3SFRNTENvbnBvbmVudCBpbXBsZW1lbnRzIENvbXBvbmVudENoYW5nZU9ic2VydmVySW50ZXJmYWNlIHtcbiAgICBwcml2YXRlIHN0YXRpYyBpdGVyYXRvciA9IDA7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGRlZmluZUVsZW1lbnROYW1lKGBsYWJlbCR7TGFiZWwuaXRlcmF0b3IrK31gLCBSYXdIVE1MQ29ucG9uZW50Lmluc3RhbmNlcyk7XG5cbiAgICAgICAgQ3NzU3R5bGVTaGVldC5pbnNlcnRSdWxlKGAuJHtuYW1lfSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmVcbiAgICAgICAgfWApO1xuXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBuZXcgTGFiZWxCdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXROYW1lKG5hbWUpXG4gICAgICAgICAgICAuc2V0SWQobmFtZSlcbiAgICAgICAgICAgIC5hZGRDc3NDbGFzc05hbWUobmFtZSlcbiAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ05ldyBMYWJlbCcpXG4gICAgICAgICAgICAuZHJhZ2dhYmxlKClcbiAgICAgICAgICAgIC5idWlsZCgpO1xuXG4gICAgICAgIHN1cGVyKGVsZW1lbnQpO1xuXG4gICAgICAgIHRoaXMub3BlbkVsZW1lbnRDb25maWdzID0gdGhpcy5vcGVuRWxlbWVudENvbmZpZ3MuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcmFnTGVhdmUgPSB0aGlzLmRyYWdMZWF2ZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuX2RvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5kcmFnU3RhcnRXaXRoVGFyZ2V0SWQpO1xuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIHRoaXMuZHJhZ0xlYXZlKTtcblxuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcGVuRWxlbWVudENvbmZpZ3MpO1xuICAgIH1cblxuICAgIGdldCBkb21FbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZG9tRWxlbWVudDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb3BlbkVsZW1lbnRDb25maWdzKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLnNlbGVjdG9yVmFsdWUoKTtcblxuXG4gICAgICAgIHRoaXMuYnVpbGRFbGVtZW50Q29uZmlncygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb21wb25lbnRTZWxlY3RlZChjb21wb25lbnQpIHtcbiAgICAgICAgaWYoY29tcG9uZW50ID09PSB0aGlzLl9kb21FbGVtZW50WyduYW1lJ10pIHtcbiAgICAgICAgICAgIHRoaXMuYnVpbGRFbGVtZW50Q29uZmlncygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBidWlsZEVsZW1lbnRDb25maWdzKCkge1xuICAgICAgICB0aGlzLmluc2VydENvbXBvbmVudEFmdGVyKCdhZGRJbm5lclRleHRDaGFuZ2VDb21wb25lbnQnLCAnYWRkQ2xhc3NOYW1lRGVmaW5pdGlvbkNvbXBvbmVudCcpO1xuICAgICAgICAvLyB0aGlzLmluc2VydENvbXBvbmVudEJlZm9yZSgnYWRkRGlzcGxheUFzUGFyZW50Q29tcG9uZW50JywgJ2FkZERpc3BsYXlBc0NoaWxkQ29tcG9uZW50Jyk7XG4gICAgICAgIHRoaXMuYnVpbGRFbGVtZW50cygpO1xuICAgIH1cbn1cbiIsImltcG9ydCBDbGFzc0NoYW5nZVB1Ymxpc2hlciBmcm9tICcuLi9jb21tb24vcHVibGlzaGVycy9DbGFzc0NoYW5nZVB1Ymxpc2hlcic7XG5pbXBvcnQgQ29tcG9uZW50Q2hhbmdlT2JzZXJ2ZXJJbnRlcmZhY2UgZnJvbSAnLi4vY29tbW9uL2ludGVyZmFjZXMvY29tcG9uZW50LWNoYW5nZS1vYnNlcnZlci5pbnRlcmZhY2UnO1xuXG5pbXBvcnQgQnV0dG9uQnVpbGRlciBmcm9tICcuLi9jb21tb24vbW9kZWxzL0J1dHRvbkJ1aWxkZXInO1xuaW1wb3J0IExhYmVsQnVpbGRlciBmcm9tICcuLi9jb21tb24vbW9kZWxzL0xhYmVsQnVpbGRlcic7XG5pbXBvcnQgQ29udGFpbmVyQnVpbGRlciBmcm9tICcuLi9jb21tb24vbW9kZWxzL0NvbnRhaW5lckJ1aWxkZXInO1xuaW1wb3J0IFN0eWxlc0NvbXBvbmVudHNCdWlsZGVyIGZyb20gJy4uL2NvbW1vbi9tb2RlbHMvU3R5bGVzQ29tcG9uZW50c0J1aWxkZXInO1xuXG5pbXBvcnQgY29udGFudHMgZnJvbSAnLi4vY29tbW9uL2NvbnN0YW50cy9jb25zdGFudHMnO1xuXG5pbXBvcnQgeyBJbnB1dFR5cGVFbnVtIH0gZnJvbSAnLi4vY29tbW9uL2VudW1zL2lucHV0LXR5cGUuZW51bSc7XG5pbXBvcnQgeyBTdHlsZU5hbWVFbnVtIH0gZnJvbSAnLi4vY29tbW9uL2VudW1zL3N0eWxlLW5hbWUuZW51bSc7XG5pbXBvcnQgeyBEaXNwbGF5VHlwZXNFbnVtIH0gZnJvbSAnLi4vY29tbW9uL2VudW1zL2Rpc3BsYXktdHlwZXMuZW51bSc7XG5cbmltcG9ydCBEaXNwbGF5QXNQYXJlbnRDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudHMvZGlzcGxheS1hcy1wYXJlbnQuY29tcG9uZW50JztcbmltcG9ydCBHZW5lcmljUHJpbWFyeUlucHV0Q29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnRzL2dlbmVyaWMtcHJpbWFyeS1pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IEdlbmVyaWNQcmltYXJ5U2VsZWN0b3JDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudHMvZ2VuZXJpYy1wcmltYXJ5LXNlbGVjdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgSWREZWZpbml0aW9uQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnRzL2lkLWRlZmluaXRpb24uY29tcG9uZW50JztcbmltcG9ydCBNYXJnaW5PclBhZGRpbmdDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudHMvbWFyZ2luLW9yLXBhZGRpbmcuY29tcG9uZW50JztcbmltcG9ydCBEaXNwbGF5QXNDaGlsZENvbXBvbmVudCBmcm9tICcuLi9jb21tb24vY29tcG9uZW50cy9kaXNwbGF5LWFzLWNoaWxkLmNvbXBvbmVudCc7XG5pbXBvcnQgQm9yZGVyQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnRzL2JvcmRlci5jb21wb25lbnQnO1xuaW1wb3J0IEJhY2tncm91bmRDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudHMvYmFja2dyb3VuZC5jb21wb25lbnQnO1xuaW1wb3J0IEJveFNoYWRvd0NvbXBvbmVudCBmcm9tICcuLi9jb21tb24vY29tcG9uZW50cy9ib3gtc2hhZG93LmNvbXBvbmVudCc7XG5pbXBvcnQgQ2xhc3NNYW5hZ2VtZW50Q29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnRzL2NsYXNzLW1hbmFnZW1lbnQuY29tcG9uZW50JztcbmltcG9ydCBTaXplc0NvbXBvbmVudCBmcm9tICcuLi9jb21tb24vY29tcG9uZW50cy9zaXplcy5jb21wb25lbnQnO1xuaW1wb3J0IEZvbnRDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudHMvZm9udC5jb21wb25lbnRzJztcbmltcG9ydCBVcmxEZWZpbml0aW9uQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnRzL3VybC1kZWZpbml0aW9uLWNvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFJhd0hUTUxDb25wb25lbnQgaW1wbGVtZW50cyBDb21wb25lbnRDaGFuZ2VPYnNlcnZlckludGVyZmFjZSB7XG4gICAgcHJvdGVjdGVkIF9kb21FbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICBwcm90ZWN0ZWQgc3R5bGVzQ29tcG9uZW50czogU3R5bGVzQ29tcG9uZW50c0J1aWxkZXI7XG5cbiAgICBwdWJsaWMgc3RhdGljIGluc3RhbmNlczogSFRNTEVsZW1lbnRbXSA9IFtdO1xuXG4gICAgcHJvdGVjdGVkIGNsYXNzQ2hhbmdlUHVibGlzaGVyOiBDbGFzc0NoYW5nZVB1Ymxpc2hlcjtcblxuICAgIHByb3RlY3RlZCBpdGVtc1NlbGVjdG9yOiBIVE1MU2VsZWN0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3QtaXRlbScpO1xuICAgIHByaXZhdGUgb3B0aW9uRWxlbWVudDogSFRNTE9wdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcblxuICAgIGNvbnN0cnVjdG9yKGRvbUVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuX2RvbUVsZW1lbnQgPSBkb21FbGVtZW50XG5cbiAgICAgICAgUmF3SFRNTENvbnBvbmVudC5pbnN0YW5jZXMucHVzaCh0aGlzLl9kb21FbGVtZW50KTtcblxuICAgICAgICB0aGlzLmNsYXNzQ2hhbmdlUHVibGlzaGVyID0gbmV3IENsYXNzQ2hhbmdlUHVibGlzaGVyKCk7XG5cbiAgICAgICAgdGhpcy5vcHRpb25FbGVtZW50LnZhbHVlID0gdGhpcy5kb21FbGVtZW50LmlkO1xuICAgICAgICB0aGlzLm9wdGlvbkVsZW1lbnQudGV4dCA9IHRoaXMuZG9tRWxlbWVudC5pZDtcbiAgICAgICAgdGhpcy5pdGVtc1NlbGVjdG9yLmFwcGVuZENoaWxkKHRoaXMub3B0aW9uRWxlbWVudCk7XG5cbiAgICAgICAgdGhpcy5yZW1vdmVFbGVtZW50ID0gdGhpcy5yZW1vdmVFbGVtZW50LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZ2V0IGRvbUVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kb21FbGVtZW50O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBkcmFnU3RhcnRXaXRoVGFyZ2V0SWQoZXZlbnQ6IERyYWdFdmVudCkge1xuICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9wbGFpbicsIChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmlkKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYWRkSWREZWZpbml0aW9uQ29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gbmV3IElkRGVmaW5pdGlvbkNvbXBvbmVudCh0aGlzLl9kb21FbGVtZW50KS5jb21wb25lbnQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFkZENsYXNzTmFtZURlZmluaXRpb25Db21wb25lbnQoKSB7XG4gICAgICAgIHJldHVybiBuZXcgQ2xhc3NNYW5hZ2VtZW50Q29tcG9uZW50KHRoaXMuX2RvbUVsZW1lbnQsIHRoaXMuY2xhc3NDaGFuZ2VQdWJsaXNoZXIpLmNvbXBvbmVudDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYWRkTWFyZ2luU3R5bGVDb21wb25lbnQoKSB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBNYXJnaW5PclBhZGRpbmdDb21wb25lbnQodGhpcy5fZG9tRWxlbWVudCwgU3R5bGVOYW1lRW51bS5tYXJnaW4pO1xuICAgICAgICB0aGlzLmNsYXNzQ2hhbmdlUHVibGlzaGVyLmF0dGFjaChjb21wb25lbnQpO1xuICAgICAgICByZXR1cm4gY29tcG9uZW50LmNvbXBvbmVudDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYWRkUGFkZGluZ1N0eWxlQ29tcG9uZW50KCkge1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgTWFyZ2luT3JQYWRkaW5nQ29tcG9uZW50KHRoaXMuX2RvbUVsZW1lbnQsIFN0eWxlTmFtZUVudW0ucGFkZGluZyk7XG4gICAgICAgIHRoaXMuY2xhc3NDaGFuZ2VQdWJsaXNoZXIuYXR0YWNoKGNvbXBvbmVudCk7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQuY29tcG9uZW50O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhZGRJbm5lclRleHRDaGFuZ2VDb21wb25lbnQoKSB7XG4gICAgICAgIHJldHVybiBuZXcgR2VuZXJpY1ByaW1hcnlJbnB1dENvbXBvbmVudCh0aGlzLl9kb21FbGVtZW50LCAnaW5uZXJUZXh0JywgJ0lubmVyIFRleHQnKS5jb21wb25lbnQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFkZElucHV0VHlwZVNlbGVjdG9yQ29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gbmV3IEdlbmVyaWNQcmltYXJ5U2VsZWN0b3JDb21wb25lbnQoXG4gICAgICAgICAgICB0aGlzLl9kb21FbGVtZW50LFxuICAgICAgICAgICAgJ3R5cGUnLFxuICAgICAgICAgICAgJ0lucHV0IFR5cGUgU2VsZWN0b3InLFxuICAgICAgICAgICAgSW5wdXRUeXBlRW51bVxuICAgICAgICApLmNvbXBvbmVudDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYWRkTGFiZWxDb21wb25lbnQobGFiZWw6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gbmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAuc2V0SW5uZXJUZXh0KGxhYmVsKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYWRkRGlzcGxheUFzUGFyZW50Q29tcG9uZW50KCkge1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgRGlzcGxheUFzUGFyZW50Q29tcG9uZW50KHRoaXMuX2RvbUVsZW1lbnQpO1xuICAgICAgICB0aGlzLmNsYXNzQ2hhbmdlUHVibGlzaGVyLmF0dGFjaChjb21wb25lbnQpO1xuICAgICAgICByZXR1cm4gY29tcG9uZW50LmNvbXBvbmVudDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYWRkRGlzcGxheUFzQ2hpbGRDb21wb25lbnQoKSB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBEaXNwbGF5QXNDaGlsZENvbXBvbmVudCh0aGlzLl9kb21FbGVtZW50KTtcbiAgICAgICAgdGhpcy5jbGFzc0NoYW5nZVB1Ymxpc2hlci5hdHRhY2goY29tcG9uZW50KTtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5jb21wb25lbnQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFkZEJvcmRlclNldHRpbmdzQ29tcG9uZW50KCkge1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgQm9yZGVyQ29tcG9uZW50KHRoaXMuX2RvbUVsZW1lbnQpO1xuICAgICAgICB0aGlzLmNsYXNzQ2hhbmdlUHVibGlzaGVyLmF0dGFjaChjb21wb25lbnQpO1xuICAgICAgICByZXR1cm4gY29tcG9uZW50LmNvbXBvbmVudDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYWRkQmFja2dyb3VuZFNldHRpbmdzQ29tcG9uZW50KCkge1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgQmFja2dyb3VuZENvbXBvbmVudCh0aGlzLl9kb21FbGVtZW50KTtcbiAgICAgICAgdGhpcy5jbGFzc0NoYW5nZVB1Ymxpc2hlci5hdHRhY2goY29tcG9uZW50KTtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5jb21wb25lbnQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFkZEJveFNoYWRvd0NvbXBvbmVudCgpIHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbmV3IEJveFNoYWRvd0NvbXBvbmVudCh0aGlzLl9kb21FbGVtZW50KTtcbiAgICAgICAgdGhpcy5jbGFzc0NoYW5nZVB1Ymxpc2hlci5hdHRhY2goY29tcG9uZW50KTtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5jb21wb25lbnQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFkZFNpemVDb21wb25lbnRzKCkge1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgU2l6ZXNDb21wb25lbnQodGhpcy5fZG9tRWxlbWVudCk7XG4gICAgICAgIHRoaXMuY2xhc3NDaGFuZ2VQdWJsaXNoZXIuYXR0YWNoKGNvbXBvbmVudCk7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQuY29tcG9uZW50O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhZGRGb250Q29tcG9uZW5zKCkge1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgRm9udENvbXBvbmVudCh0aGlzLl9kb21FbGVtZW50KTtcbiAgICAgICAgdGhpcy5jbGFzc0NoYW5nZVB1Ymxpc2hlci5hdHRhY2goY29tcG9uZW50KTtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5jb21wb25lbnQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFkZFVybElucHV0Q29tcG9uZW50KCkge1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgVXJsRGVmaW5pdGlvbkNvbXBvbmVudCh0aGlzLl9kb21FbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5jb21wb25lbnQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFkZEFjdGlvbnNDb21wb25lbnRzKCkge1xuICAgICAgICByZXR1cm4gbmV3IENvbnRhaW5lckJ1aWxkZXIoKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uYm9yZGVyLCAnMXB4IHNvbGlkICM0Q0FGNTAnKVxuICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ucGFkZGluZywgJzNweCcpXG4gICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5tYXJnaW4sICcwcHggMHB4IDEwcHgnKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKG5ldyBDb250YWluZXJCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2V0U3R5bGUoU3R5bGVOYW1lRW51bS5kaXNwbGF5LCBEaXNwbGF5VHlwZXNFbnVtLmZsZXgpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0ubWFyZ2luLCAnMHB4IDBweCAxMHB4JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQobmV3IExhYmVsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ0F2YWlsYWJsZSBBY3Rpb25zJylcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZChuZXcgQ29udGFpbmVyQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNldFN0eWxlKFN0eWxlTmFtZUVudW0uZGlzcGxheSwgRGlzcGxheVR5cGVzRW51bS5mbGV4KVxuICAgICAgICAgICAgICAgIC5zZXRTdHlsZShTdHlsZU5hbWVFbnVtLm1hcmdpbiwgJzBweCAwcHggMTBweCcpXG4gICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuYWRkUmVtb3ZlRWxlbWVudENvbXBvbmVudCgpKVxuICAgICAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgIH1cblxuICAgIHByaXZhdGUgYWRkUmVtb3ZlRWxlbWVudENvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBCdXR0b25CdWlsZGVyKClcbiAgICAgICAgICAgIC5zZXRJbm5lclRleHQoJ1JlbW92ZSBFbGVtZW50JylcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucmVtb3ZlRWxlbWVudClcbiAgICAgICAgICAgIC5idWlsZCgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCByZW1vdmVFbGVtZW50KCkge1xuICAgICAgICBpZiAoY29uZmlybSgnQXJlIHlvdSBzdXJlIHRvIHJlbW92ZSB0aGlzIGNvbXBvbmVudCcpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLl9kb21FbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQodGhpcy5fZG9tRWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzLnN0eWxlc0NvbXBvbmVudHMucmVtb3ZlKCk7XG4gICAgICAgICAgICB0aGlzLml0ZW1zU2VsZWN0b3IucmVtb3ZlQ2hpbGQodGhpcy5vcHRpb25FbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBkcmFnTGVhdmUoZXZlbnQ6IERyYWdFdmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgaWYgKHRoaXMuX2RvbUVsZW1lbnQucGFyZW50RWxlbWVudC50YWdOYW1lID09PSAnRElWJykge1xuICAgICAgICAgICAgdGhpcy5fZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbnRhbnRzLklOVkVSVEVEX0JBQ0tHUk9VTkRfQ09MT1I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2VsZWN0b3JWYWx1ZSgpIHtcbiAgICAgICAgbGV0IHRoaXNPcHRpb25JbmRleDogbnVtYmVyO1xuICAgICAgICB0aGlzLml0ZW1zU2VsZWN0b3IuY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIChjaGlsZCBhcyBIVE1MT3B0aW9uRWxlbWVudCkudmFsdWUgPT09IHRoaXMuZG9tRWxlbWVudC5pZCA/IHRoaXNPcHRpb25JbmRleCA9IGluZGV4IDogdW5kZWZpbmVkXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuaXRlbXNTZWxlY3Rvci5zZWxlY3RlZEluZGV4ID0gdGhpc09wdGlvbkluZGV4O1xuICAgIH1cblxuICAgIHB1YmxpYyBjb21wb25lbnRTZWxlY3RlZChjb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjb21tb25Db21wb25lbnRzOiBzdHJpbmdbXSA9IFtcbiAgICAgICAgJ2FkZElkRGVmaW5pdGlvbkNvbXBvbmVudCcsXG4gICAgICAgICdhZGRDbGFzc05hbWVEZWZpbml0aW9uQ29tcG9uZW50JyxcbiAgICAgICAgJ2FkZE1hcmdpblN0eWxlQ29tcG9uZW50JyxcbiAgICAgICAgJ2FkZFBhZGRpbmdTdHlsZUNvbXBvbmVudCcsXG4gICAgICAgICdhZGRTaXplQ29tcG9uZW50cycsXG4gICAgICAgICdhZGRGb250Q29tcG9uZW5zJyxcbiAgICAgICAgJ2FkZEJhY2tncm91bmRTZXR0aW5nc0NvbXBvbmVudCcsXG4gICAgICAgICdhZGRCb3JkZXJTZXR0aW5nc0NvbXBvbmVudCcsXG4gICAgICAgICdhZGRCb3hTaGFkb3dDb21wb25lbnQnLFxuICAgICAgICAnYWRkRGlzcGxheUFzQ2hpbGRDb21wb25lbnQnLFxuICAgICAgICAnYWRkQWN0aW9uc0NvbXBvbmVudHMnLFxuICAgIF1cblxuICAgIHByb3RlY3RlZCBpbnNlcnRDb21wb25lbnRCZWZvcmUoXG4gICAgICAgIGNvbXBvbmVudFRvSW5zZXJ0OiBzdHJpbmcsXG4gICAgICAgIHJlZmVyZW5jZUNvbXBvbmVudDogc3RyaW5nXG4gICAgKSB7XG4gICAgICAgIGNvbnN0IGFscmVhZHlFeGlzdHMgPSB0aGlzLmNvbW1vbkNvbXBvbmVudHMuZmluZCgoY29tcCkgPT4gY29tcCA9PT0gY29tcG9uZW50VG9JbnNlcnQpO1xuXG4gICAgICAgIGlmKGFscmVhZHlFeGlzdHMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5jb21tb25Db21wb25lbnRzLmZpbmRJbmRleCgoY29tcCkgPT4gY29tcCA9PT0gcmVmZXJlbmNlQ29tcG9uZW50KTtcblxuICAgICAgICB0aGlzLmNvbW1vbkNvbXBvbmVudHMuc3BsaWNlKGluZGV4LCAwLCBjb21wb25lbnRUb0luc2VydClcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaW5zZXJ0Q29tcG9uZW50QWZ0ZXIoXG4gICAgICAgIGNvbXBvbmVudFRvSW5zZXJ0OiBzdHJpbmcsXG4gICAgICAgIHJlZmVyZW5jZUNvbXBvbmVudDogc3RyaW5nXG4gICAgKSB7XG4gICAgICAgIGNvbnN0IGFscmVhZHlFeGlzdHMgPSB0aGlzLmNvbW1vbkNvbXBvbmVudHMuZmluZCgoY29tcCkgPT4gY29tcCA9PT0gY29tcG9uZW50VG9JbnNlcnQpO1xuXG4gICAgICAgIGlmKGFscmVhZHlFeGlzdHMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5jb21tb25Db21wb25lbnRzLmZpbmRJbmRleCgoY29tcCkgPT4gY29tcCA9PT0gcmVmZXJlbmNlQ29tcG9uZW50KTtcbiAgICAgICAgdGhpcy5jb21tb25Db21wb25lbnRzLnNwbGljZShpbmRleCArIDEsIDAsIGNvbXBvbmVudFRvSW5zZXJ0KVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBidWlsZEVsZW1lbnRzKCkge1xuICAgICAgICB0aGlzLnN0eWxlc0NvbXBvbmVudHMgPSBuZXcgU3R5bGVzQ29tcG9uZW50c0J1aWxkZXIoKVxuXG4gICAgICAgIHRoaXMuY29tbW9uQ29tcG9uZW50cy5mb3JFYWNoKChjb21wb25lbnROYW1lKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN0eWxlc0NvbXBvbmVudHMuYXBwZW5kQ2hpbGQodGhpc1tjb21wb25lbnROYW1lXSgpKVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuc3R5bGVzQ29tcG9uZW50cy5idWlsZCgpO1xuICAgIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnRDaGFuZ2VPYnNlcnZlckludGVyZmFjZSBmcm9tICcuLi9jb21tb24vaW50ZXJmYWNlcy9jb21wb25lbnQtY2hhbmdlLW9ic2VydmVyLmludGVyZmFjZSc7XG5cbmltcG9ydCBUaXRsZUJ1aWxkZXIgZnJvbSAnLi4vY29tbW9uL21vZGVscy9UaXRsZUJ1aWxkZXInO1xuaW1wb3J0IFJhd0hUTUxDb25wb25lbnQgZnJvbSAnLi9SYXdIVE1MQ29tcG9uZW50JztcblxuaW1wb3J0IENzc1N0eWxlU2hlZXQgZnJvbSAnLi4vY3NzLXN0eWxlc2hlZXQvY3NzLXN0eWxlc2hlZXQnO1xuXG5pbXBvcnQgZGVmaW5lRWxlbWVudE5hbWUgZnJvbSAnLi4vY29tbW9uL2Z1bmN0aW9ucy9kZWZpbmUtZWxlbWVudC1uYW1lJztcblxuaW1wb3J0IHsgVGl0bGVUeXBlc0VudW0gfSBmcm9tICcuLi9jb21tb24vZW51bXMvdGl0bGUudHlwZXMuZW51bSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpdGxlIGV4dGVuZHMgUmF3SFRNTENvbnBvbmVudCBpbXBsZW1lbnRzIENvbXBvbmVudENoYW5nZU9ic2VydmVySW50ZXJmYWNlIHtcbiAgICBwcml2YXRlIHN0YXRpYyBpdGVyYXRvciA9IDA7XG5cbiAgICBjb25zdHJ1Y3Rvcih0eXBlOiBUaXRsZVR5cGVzRW51bSkge1xuICAgICAgICBjb25zdCBuYW1lID0gZGVmaW5lRWxlbWVudE5hbWUoYHRpdGxlJHtUaXRsZS5pdGVyYXRvcisrfWAsIFJhd0hUTUxDb25wb25lbnQuaW5zdGFuY2VzKTtcblxuICAgICAgICBDc3NTdHlsZVNoZWV0Lmluc2VydFJ1bGUoYC4ke25hbWV9IHtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmVcbiAgICAgICAgfWApO1xuXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBuZXcgVGl0bGVCdWlsZGVyKHR5cGUpXG4gICAgICAgICAgICAuc2V0TmFtZShuYW1lKVxuICAgICAgICAgICAgLnNldElkKG5hbWUpXG4gICAgICAgICAgICAuYWRkQ3NzQ2xhc3NOYW1lKG5hbWUpXG4gICAgICAgICAgICAuc2V0SW5uZXJUZXh0KGBOZXcgVGl0bGUgJHt0eXBlfWApXG4gICAgICAgICAgICAuZHJhZ2dhYmxlKClcbiAgICAgICAgICAgIC5idWlsZCgpO1xuXG4gICAgICAgIHN1cGVyKGVsZW1lbnQpO1xuXG4gICAgICAgIHRoaXMub3BlbkVsZW1lbnRDb25maWdzID0gdGhpcy5vcGVuRWxlbWVudENvbmZpZ3MuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcmFnTGVhdmUgPSB0aGlzLmRyYWdMZWF2ZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuX2RvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5kcmFnU3RhcnRXaXRoVGFyZ2V0SWQpO1xuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIHRoaXMuZHJhZ0xlYXZlKTtcblxuICAgICAgICB0aGlzLl9kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcGVuRWxlbWVudENvbmZpZ3MpO1xuICAgIH1cblxuICAgIGdldCBkb21FbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZG9tRWxlbWVudDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb3BlbkVsZW1lbnRDb25maWdzKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLnNlbGVjdG9yVmFsdWUoKTtcblxuXG4gICAgICAgIHRoaXMuYnVpbGRFbGVtZW50Q29uZmlncygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb21wb25lbnRTZWxlY3RlZChjb21wb25lbnQpIHtcbiAgICAgICAgaWYoY29tcG9uZW50ID09PSB0aGlzLl9kb21FbGVtZW50WyduYW1lJ10pIHtcbiAgICAgICAgICAgIHRoaXMuYnVpbGRFbGVtZW50Q29uZmlncygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBidWlsZEVsZW1lbnRDb25maWdzKCkge1xuICAgICAgICB0aGlzLmluc2VydENvbXBvbmVudEFmdGVyKCdhZGRJbm5lclRleHRDaGFuZ2VDb21wb25lbnQnLCAnYWRkQ2xhc3NOYW1lRGVmaW5pdGlvbkNvbXBvbmVudCcpO1xuICAgICAgICB0aGlzLmJ1aWxkRWxlbWVudHMoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUmF3SFRNTENvbnBvbmVudCBmcm9tICcuL1Jhd0hUTUxDb21wb25lbnQnO1xuXG5pbXBvcnQgeyBUaXRsZVR5cGVzRW51bSB9IGZyb20gJy4uL2NvbW1vbi9lbnVtcy90aXRsZS50eXBlcy5lbnVtJztcblxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbic7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9JbnB1dCc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4vQ29udGFpbmVyJztcbmltcG9ydCBMYWJlbCBmcm9tICcuL0xhYmVsJztcbmltcG9ydCBUaXRsZSBmcm9tICcuL1RpdGxlJztcbmltcG9ydCBJbWFnZSBmcm9tICcuL0ltYWdlJztcblxuZnVuY3Rpb24gY29tcG9uZW50c0luZGV4KGluZGV4KSB7XG4gICAgY29uc3QgY29tcG9uZW50c0luZGV4ID0ge1xuICAgICAgICAnQlVUVE9OJzogKCkgOiBSYXdIVE1MQ29ucG9uZW50ID0+IG5ldyBCdXR0b24oKSxcbiAgICAgICAgJ0lOUFVUJzogKCkgOiBSYXdIVE1MQ29ucG9uZW50ID0+IG5ldyBJbnB1dCgpLFxuICAgICAgICAnRElWJzogKCkgOiBSYXdIVE1MQ29ucG9uZW50ID0+IG5ldyBDb250YWluZXIoKSxcbiAgICAgICAgJ0xBQkVMJzogKCkgOiBSYXdIVE1MQ29ucG9uZW50ID0+IG5ldyBMYWJlbCgpLFxuICAgICAgICAnSDEnOiAoKSA6IFJhd0hUTUxDb25wb25lbnQgPT4gbmV3IFRpdGxlKFRpdGxlVHlwZXNFbnVtLkgxKSxcbiAgICAgICAgJ0gyJzogKCkgOiBSYXdIVE1MQ29ucG9uZW50ID0+IG5ldyBUaXRsZShUaXRsZVR5cGVzRW51bS5IMiksXG4gICAgICAgICdIMyc6ICgpIDogUmF3SFRNTENvbnBvbmVudCA9PiBuZXcgVGl0bGUoVGl0bGVUeXBlc0VudW0uSDMpLFxuICAgICAgICAnSDQnOiAoKSA6IFJhd0hUTUxDb25wb25lbnQgPT4gbmV3IFRpdGxlKFRpdGxlVHlwZXNFbnVtLkg0KSxcbiAgICAgICAgJ0g1JzogKCkgOiBSYXdIVE1MQ29ucG9uZW50ID0+IG5ldyBUaXRsZShUaXRsZVR5cGVzRW51bS5INSksXG4gICAgICAgICdINic6ICgpIDogUmF3SFRNTENvbnBvbmVudCA9PiBuZXcgVGl0bGUoVGl0bGVUeXBlc0VudW0uSDYpLFxuICAgICAgICAnSU1HJzogKCkgOiBSYXdIVE1MQ29ucG9uZW50ID0+IG5ldyBJbWFnZSgpLFxuICAgICAgICAnZGVmYXVsdCc6ICgpIDogdW5kZWZpbmVkICA9PiB1bmRlZmluZWQsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudHNJbmRleFtpbmRleF0gfHwgY29tcG9uZW50c0luZGV4WydkZWZhdWx0J107XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudHNJbmRleDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGluaXREcmFnZ2FibGVDb21wb25lbnRzIGZyb20gJy4vY29tcG9uZW50cy9jb21wb25lbnRzLWNvbnRhaW5lci9pbml0LWRyYWdnYWJsZS1jb21wb25lbnRzJztcbmltcG9ydCBDc3NTdHlsZVNoZWV0IGZyb20gJy4vY29tcG9uZW50cy9jc3Mtc3R5bGVzaGVldC9jc3Mtc3R5bGVzaGVldCc7XG5pbXBvcnQgSW5pdEFwcENvbnRhaW5lciBmcm9tICcuL2NvbXBvbmVudHMvYXBwLWNvbnRhaW5lci9pbml0LWFwcC1jb250YWluZXInO1xuXG5pbml0RHJhZ2dhYmxlQ29tcG9uZW50cygpO1xubmV3IEluaXRBcHBDb250YWluZXIoKTtcbkNzc1N0eWxlU2hlZXQuaW5pdCgpO1xuXG4vLyBUT0RPOiBlbCBtZXRvZG8gaW5pdCBkZWJlcmlhIGJ1c2NhciBlbCBjc3MgZGVsIGxvY2Fsc3RvcmFnZSwgZGViZXJpYW1vcyBoYWNlciBsbyBtaXNtbyBjb24gZWwgSFRNTFxuLy8gRGViZXJpYW1vcyB2ZXIgY29tbyBhbG1hY2VuYXIgeSBkZXNoYWNlciBjYW1iaW9zLi4uLlxuXG4vLyBUT0RPOiBhY29tb2RhciBlc3RydWN0dXJhcyBjb24gcHJldHRpZXIgeSB0c2xpbnRlci4gU2FsdGFyIGxpbmVhIGN1YW5kbyBtdXkgbGFyZ2EuXG5cbi8vIFRPRE86IGhheSBxdWUgbWV0ZXJsZSBkcmFnIGVudGVyIGFsIGFwcC1jb250YWluZXItZml4ZWQgcGFyYSBxdWUgbGUgc2FxdWUgZWwgYmFja2dyb3VuZCBjb2xvciBhbCBhcHAtY29udGFpbmVyLi4uXG4vLyBvIHZlciBxdWUgcGFzYSBjb24gZWwgZHJhZyBsZWF2ZVxuXG4vLyBUT0RPOiBpbnNlcnRhciBydWxlcyBwYXJhIGVsIG1lZGlhIHF1ZXJ5IDogaHR0cHM6Ly9kYXZpZHdhbHNoLm5hbWUvYWRkLXJ1bGVzLXN0eWxlc2hlZXRzXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvQXQtcnVsZVxuXG4vLyBUT0RPOiBwcm9iYXIgZXhwb3J0YXIgY3NzIHkgaHRtbCB5IHZlciBjb21vIHF1ZWRhIGxhIHBhZ2luYSBlbiBsYSByZWFsaWRhZCAqL1xuLy8gVE9ETzogaGFjZXIgYW5hbGlzaXMgZGUgcXVlIGRlYmVyaWFtb3MgZXhwb3J0YXIgcmVhbG1lbnRlIGRlbCBodG1sICovXG5cbi8vIFRPRE86IGFxdWkgZmFsdGEgbGEgYWNjaW9uIGRlIGR1cGxpY2FyIHVuIGNvbXBvbmVudGUsIGVzIGRlY2lyLCBkZSB1biBjb21wb25lbnRlIGV4aXN0ZW50ZSwgZHVwbGljYXIgbGEgY29uZmlnLi4uXG4vLyBzaSwgZXMgbmVjZXNhcmlvLCBwb3JxdWUgZXMgbXVjaG8gbWFzIGZhY2lsIHF1ZSBhc2lnbmFybGUgbGEgY2xhc2UgZGUgb3RybyBjb21wb25lbnRlLi4uXG4vLyB2ZXIgY29tbyBkdXBsaWNhbW9zIGxhcyBjbGFzZXMuLi4gc2kgbGUgYXNpZ25hbW9zIGxhcyBjbGFzZXMgZGVsIG90cm8gY29tcG9uZW50ZT8/PywgY29tbyBoYWNlbW9zIGNvbiBzdSBjbGFzZT8/P1xuLy8gc2kgZHVwbGljYW1vcywgbm8gY3JlYW1vcyBjbGFzZSBwcm9waWEsIHNvbG8gYXNpZ25hbW9zIGxhcyBjbGFzZXMgZGVsIG90cm8gY29tcG9uZW50ZS4uLlxuXG4vLyBBZ3JlZ2FyIGVsIGVsZW1lbnRvIGltZyB5IGEgc3UgdmV6LCBhZ3JlZ2FyIGltYWdlbmVzIGFsIGJhY2tncm91bmQuLi5cblxuLy8gVE9ETzogZmFsdGEgdG9kbyBsbyBxdWUgZXMgcG9zaXRpb24uLi4gQWJzb2x1dGUsIHJlbGF0aXZlLCBldGMuLi4gTm8gcmVjdWVyZG8gYmllbiBjb21vIGVzIGVzby4uLlxuLy8gaW5jbHVzbywgZWwgeiBpbmRleCwgcXVlIHBvZHJpYSBlc3RhciBlbiBlbCBtaXNtbyBjb21wb25lbnRlLlxuXG5cbi8vIFRPRE86IHZlciBmb3JtYSBkZSByZW1vdmVyIGVsIGJvcmRlIG9yaWdpbmFsIGRlbCBpbnB1dC4gTm8gZXMgbGEgbWlzbWEgcHJvcGllZGFkIHF1ZSBlbCBib3JkZXIuLi5cbi8vIFRPRE86IGVsIGJvcmRlcmJveCBkZWwgaW5wdXQgdmllbmUgY29tbyBhZHZhbmNlZC4uLiBWZXIgc2kgdGVuZW1vcyBxdWUgaGFjZXJsZSBhbGdvXG5cbi8vIFRPRE86IGN1YW5kbyBjcmVvIHVuIG5vbWJyZSBmdXR1cm8sIHkganVzdG8gY3JlbyB1biBlbGVtZW50byBjb24gZXNlIG5vbWJyZSBmdXR1cm8sIHRpcmEgZXJyb3IuLi5cbi8vIHBvciBlc28geW8gbGUgcGFzYWJhIGVsIGl0ZXJhdG9yLi4uIHZlciBjb21vIHNvbHVjaW9uYXIuLi5cblxuLy8gVE9ETzogY29uIGVsIGlkIGhhYnJpYSBxdWUgcmVlbXBsYXphciB0b2RvcyBsb3MgY2FyYWN0ZXJlcyBlc3BlY2lhbGVzIHBvciBndWlvbmVzIG8gYWxnbyBhc2kuLi5cblxuLy8gVE9ETzogZmFsdGEgcHJvcGllZGFkIHNjcm9sbGFibGUgZW4gZGl2XG5cbi8vIFRPRE86IGN1YWxxdWllciBlbGVtZW50byBkZWJlIHBvZGVyIG1vZGlmaWNhciBlbCBkaXNwbGF5IHNldHRpbmdzXG5cbi8vIFRPRE86IGZhbHRhIGxhIHByb3BpZWRhZCBiYWNrZ3JvdW5kLWltYWdlXG5cbi8vIFRPRE86IGFncmVnYXIgaW1hZ2VuZXNcblxuLy8gVE9ETzogYWdyZWdhciBjbGFzZSBhIG1hbm8gbWVkaWFudGUgdW4gdGV4dGFyZWEiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=