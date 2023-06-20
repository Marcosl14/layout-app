import ClassChangeObserverInterface from '../interfaces/class-change-observer.interface';

import ContainerBuilder from '../models/ContainerBuilder';
import InputBuilder from '../models/InputBuilder';
import LabelBuilder from '../models/LabelBuilder';
import SelectorFromEnumBuilder from '../models/SelectorFromEnumBuilder';

import CssStyleSheet from '../../css-stylesheet/css-stylesheet';
import colorToHex from '../functions/rgb-to-hex';
import getUnit from '../functions/get-css-unit';

import { InputTypeEnum } from '../enums/input-type.enum';
import { BorderStyleEnum } from '../enums/border-style.enum';
import { UnitsEnum } from '../enums/units.enum';
import { StyleNameEnum } from '../enums/style-name.enum';
import { DisplayTypesEnum } from '../enums/display-types.enum';

export default class BorderComponent implements ClassChangeObserverInterface {
    private domElement: HTMLElement;
    private container: HTMLDivElement;
    private domElementStyleSheet: CSSStyleDeclaration | object;

    private topBorderColorInput: HTMLInputElement;
    private rightBorderColorInput: HTMLInputElement;
    private bottomBorderColorInput: HTMLInputElement;
    private leftBorderColorInput: HTMLInputElement;

    private topBorderStyleSelector: HTMLSelectElement;
    private rightBorderStyleSelector: HTMLSelectElement;
    private bottomBorderStyleSelector: HTMLSelectElement;
    private leftBorderStyleSelector: HTMLSelectElement;

    private topBorderWidthInput: HTMLInputElement;
    private rightBorderWidthInput: HTMLInputElement;
    private bottomBorderWidthInput: HTMLInputElement;
    private leftBorderWidthInput: HTMLInputElement;

    private topBorderWidthUnitSelector: HTMLSelectElement;
    private rightBorderWidthUnitSelector: HTMLSelectElement;
    private bottomBorderWidthUnitSelector: HTMLSelectElement;
    private leftBorderWidthUnitSelector: HTMLSelectElement;

    private topBorderRadiusInput: HTMLInputElement;
    private rightBorderRadiusInput: HTMLInputElement;
    private bottomBorderRadiusInput: HTMLInputElement;
    private leftBorderRadiusInput: HTMLInputElement;

    private topBorderRadiusUnitSelector: HTMLSelectElement;
    private rightBorderRadiusUnitSelector: HTMLSelectElement;
    private bottomBorderRadiusUnitSelector: HTMLSelectElement;
    private leftBorderRadiusUnitSelector: HTMLSelectElement;

    private selectAllCheckBox: HTMLInputElement;

    constructor(domElement: HTMLElement) {
        this.domElement = domElement;
        this.domElementStyleSheet = CssStyleSheet.getRuleStyles(this.domElement.classList[0]);
        this.addComponents();
    }

    get component() {
        return this.container;
    }

    private addComponents() {
        this.changeComponentsStatus = this.changeComponentsStatus.bind(this);

        this.updateBorderStyleProperty = this.updateBorderStyleProperty.bind(this);
        this.updateBorderColor = this.updateBorderColor.bind(this);
        this.updateBorderWidth = this.updateBorderWidth.bind(this);
        this.updateBorderRadius = this.updateBorderRadius.bind(this);

        this.selectAllCheckBox = new InputBuilder(InputTypeEnum.checkbox)
            .addEventListener('change', this.changeComponentsStatus)
            .checked(this.unifiedBorderProperties())
            .build()

        const selectAllContainer = new ContainerBuilder()
            .appendChild(new LabelBuilder()
                .setInnerText('Select All')
                .build()
            )
            .appendChild(this.selectAllCheckBox)
            .build()


        this.buildAllComponents();
        this.setBorderValuesAccordingToClass();

        const topContainer = new ContainerBuilder()
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(new LabelBuilder()
                    .setInnerText('Top Border Color / Style')
                    .build()
                )
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(this.topBorderColorInput)
                .appendChild(this.topBorderStyleSelector)
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(new LabelBuilder()
                    .setInnerText('Top Border Width')
                    .build()
                )
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(this.topBorderWidthInput)
                .appendChild(this.topBorderWidthUnitSelector)
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(new LabelBuilder()
                    .setInnerText('Top Border Radius')
                    .build()
                )
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(this.topBorderRadiusInput)
                .appendChild(this.topBorderRadiusUnitSelector)
                .build()
            )
            .build()

        const rightContainer = new ContainerBuilder()
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(new LabelBuilder()
                    .setInnerText('Right Border Color / Style')
                    .build()
                )
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(this.rightBorderColorInput)
                .appendChild(this.rightBorderStyleSelector)
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(new LabelBuilder()
                    .setInnerText('Right Border Width')
                    .build()
                )
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(this.rightBorderWidthInput)
                .appendChild(this.rightBorderWidthUnitSelector)
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(new LabelBuilder()
                    .setInnerText('Right Border Radius')
                    .build()
                )
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(this.rightBorderRadiusInput)
                .appendChild(this.rightBorderRadiusUnitSelector)
                .build()
            )
            .build()

        const bottomContainer = new ContainerBuilder()
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(new LabelBuilder()
                    .setInnerText('Bottom Border Color / Style')
                    .build()
                )
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(this.bottomBorderColorInput)
                .appendChild(this.bottomBorderStyleSelector)
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(new LabelBuilder()
                    .setInnerText('Bottom Border Width')
                    .build()
                )
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(this.bottomBorderWidthInput)
                .appendChild(this.bottomBorderWidthUnitSelector)
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(new LabelBuilder()
                    .setInnerText('Bottom Border Radius')
                    .build()
                )
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(this.bottomBorderRadiusInput)
                .appendChild(this.bottomBorderRadiusUnitSelector)
                .build()
            )
            .build()

        const leftContainer = new ContainerBuilder()
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(new LabelBuilder()
                    .setInnerText('Left Border Color / Style')
                    .build()
                )
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(this.leftBorderColorInput)
                .appendChild(this.leftBorderStyleSelector)
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(new LabelBuilder()
                    .setInnerText('Left Border Width')
                    .build()
                )
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(this.leftBorderWidthInput)
                .appendChild(this.leftBorderWidthUnitSelector)
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(new LabelBuilder()
                    .setInnerText('Left Border Radius')
                    .build()
                )
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(this.leftBorderRadiusInput)
                .appendChild(this.leftBorderRadiusUnitSelector)
                .build()
            )
            .build()

        const inputValuesContainer = new ContainerBuilder()
            .appendChild(topContainer)
            .appendChild(rightContainer)
            .appendChild(bottomContainer)
            .appendChild(leftContainer)
            .build()

        this.container = new ContainerBuilder()
            .setStyle(StyleNameEnum.border, '1px solid #4CAF50')
            .setStyle(StyleNameEnum.padding, '3px')
            .setStyle(StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new LabelBuilder()
                .setInnerText('Border Type Selector')
                .build()
            )
            .appendChild(selectAllContainer)
            .appendChild(inputValuesContainer)
            .build()
    }

    private buildAllComponents() {
        this.buildColorInputs();
        this.buildStyleSelectors();
        this.buildBorderWidthInputs();
        this.buildBorderWidthUnitsSelectors();
        this.buildBorderRadiusInputs()
        this.buildBorderRadiusUnitsSelectors();
    }

    private buildColorInputs() {
        this.topBorderColorInput = new InputBuilder(InputTypeEnum.color)
            .addEventListener('input', this.updateBorderColor)
            .build();
        this.rightBorderColorInput = new InputBuilder(InputTypeEnum.color)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('input', this.updateBorderColor)
            .build();
        this.bottomBorderColorInput = new InputBuilder(InputTypeEnum.color)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('input', this.updateBorderColor)
            .build();
        this.leftBorderColorInput = new InputBuilder(InputTypeEnum.color)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('input', this.updateBorderColor)
            .build();
    }

    private buildStyleSelectors() {
        this.topBorderStyleSelector = new SelectorFromEnumBuilder(BorderStyleEnum)
            .addEventListener('change', this.updateBorderStyleProperty)
            .build()
        this.rightBorderStyleSelector = new SelectorFromEnumBuilder(BorderStyleEnum)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('change', this.updateBorderStyleProperty)
            .build()
        this.bottomBorderStyleSelector = new SelectorFromEnumBuilder(BorderStyleEnum)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('change', this.updateBorderStyleProperty)
            .build()
        this.leftBorderStyleSelector = new SelectorFromEnumBuilder(BorderStyleEnum)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('change', this.updateBorderStyleProperty)
            .build()
    }

    private buildBorderWidthInputs() {
        this.topBorderWidthInput = new InputBuilder(InputTypeEnum.number)
            .setMin(0)
            .addEventListener('input', this.updateBorderWidth)
            .build();
        this.rightBorderWidthInput = new InputBuilder(InputTypeEnum.number)
            .setMin(0)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('change', this.updateBorderWidth)
            .build()
        this.bottomBorderWidthInput = new InputBuilder(InputTypeEnum.number)
            .setMin(0)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('change', this.updateBorderWidth)
            .build()
        this.leftBorderWidthInput = new InputBuilder(InputTypeEnum.number)
            .setMin(0)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('change', this.updateBorderWidth)
            .build()
    }

    private buildBorderWidthUnitsSelectors() {
        this.topBorderWidthUnitSelector = new SelectorFromEnumBuilder(UnitsEnum)
            .addEventListener('change', this.updateBorderWidth)
            .build()
        this.rightBorderWidthUnitSelector = new SelectorFromEnumBuilder(UnitsEnum)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('change', this.updateBorderWidth)
            .build()
        this.bottomBorderWidthUnitSelector = new SelectorFromEnumBuilder(UnitsEnum)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('change', this.updateBorderWidth)
            .build()
        this.leftBorderWidthUnitSelector = new SelectorFromEnumBuilder(UnitsEnum)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('change', this.updateBorderWidth)
            .build()
    }

    private buildBorderRadiusInputs() {
        this.topBorderRadiusInput = new InputBuilder(InputTypeEnum.number)
            .setMin(0)
            .addEventListener('input', this.updateBorderRadius)
            .build();
        this.rightBorderRadiusInput = new InputBuilder(InputTypeEnum.number)
            .setMin(0)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('change', this.updateBorderRadius)
            .build()
        this.bottomBorderRadiusInput = new InputBuilder(InputTypeEnum.number)
            .setMin(0)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('change', this.updateBorderRadius)
            .build()
        this.leftBorderRadiusInput = new InputBuilder(InputTypeEnum.number)
            .setMin(0)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('change', this.updateBorderRadius)
            .build()
    }

    private buildBorderRadiusUnitsSelectors() {
        this.topBorderRadiusUnitSelector = new SelectorFromEnumBuilder(UnitsEnum)
            .addEventListener('change', this.updateBorderRadius)
            .build()
        this.rightBorderRadiusUnitSelector = new SelectorFromEnumBuilder(UnitsEnum)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('change', this.updateBorderRadius)
            .build()
        this.bottomBorderRadiusUnitSelector = new SelectorFromEnumBuilder(UnitsEnum)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('change', this.updateBorderRadius)
            .build()
        this.leftBorderRadiusUnitSelector = new SelectorFromEnumBuilder(UnitsEnum)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('change', this.updateBorderRadius)
            .build()
    }

    private changeComponentsStatus () {
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
        } else {
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
    }

    private setBorderValuesAccordingToClass() {
        this.setBorderColorValuesAccordingToClass();
        this.setBorderStyleValuesAccordingToClass();
        this.setBorderWidthValuesAccordingToClass();
        this.setBorderRadiusValuesAccordingToClass();
    }

    private setBorderColorValuesAccordingToClass() {
        const {top, right, bottom, left} = this.getCurrentBorderColor();
        this.topBorderColorInput.value = top;
        this.rightBorderColorInput.value = right;
        this.bottomBorderColorInput.value = bottom;
        this.leftBorderColorInput.value = left;
    }

    private setBorderStyleValuesAccordingToClass() {
        const {top, right, bottom, left} = this.getCurrentBorderStyle();
        this.topBorderStyleSelector.value = top;
        this.rightBorderStyleSelector.value = right;
        this.bottomBorderStyleSelector.value = bottom;
        this.leftBorderStyleSelector.value = left;
    }

    private setBorderWidthValuesAccordingToClass() {
        const {top, right, bottom, left} = this.getCurrentBorderWidth();
        this.topBorderWidthInput.value = `${parseInt(top)}`;
        this.rightBorderWidthInput.value = `${parseInt(right)}`;
        this.bottomBorderWidthInput.value = `${parseInt(bottom)}`;
        this.leftBorderWidthInput.value = `${parseInt(left)}`;

        this.topBorderWidthUnitSelector.value = getUnit(top);
        this.rightBorderWidthUnitSelector.value = getUnit(right);
        this.bottomBorderWidthUnitSelector.value = getUnit(bottom);
        this.leftBorderWidthUnitSelector.value = getUnit(left);
    }

    private setBorderRadiusValuesAccordingToClass() {
        const {top, right, bottom, left} = this.getCurrentBorderRadius();
        this.topBorderRadiusInput.value = `${parseInt(top)}`;
        this.rightBorderRadiusInput.value = `${parseInt(right)}`;
        this.bottomBorderRadiusInput.value = `${parseInt(bottom)}`;
        this.leftBorderRadiusInput.value = `${parseInt(left)}`;

        this.topBorderRadiusUnitSelector.value = getUnit(top);
        this.rightBorderRadiusUnitSelector.value = getUnit(right);
        this.bottomBorderRadiusUnitSelector.value = getUnit(bottom);
        this.leftBorderRadiusUnitSelector.value = getUnit(left);
    }

    private updateBorderStyleProperty() {
        let {top, right, bottom, left} = this.getCurrentBorderStyle();

        if (this.selectAllCheckBox.checked) {
            top = this.topBorderStyleSelector.value;
            right = top;
            bottom = top;
            left = top;

            this.rightBorderStyleSelector.value = this.topBorderStyleSelector.value;
            this.bottomBorderStyleSelector.value = this.topBorderStyleSelector.value;
            this.leftBorderStyleSelector.value = this.topBorderStyleSelector.value;
        } else {
            top = this.topBorderStyleSelector.value;
            right = this.rightBorderStyleSelector.value;
            bottom = this.bottomBorderStyleSelector.value;
            left = this.leftBorderStyleSelector.value;
        }

        this.domElementStyleSheet['border-style'] = [top, right, bottom, left].join(' ')
    }

    private resetBorderProperty(
        property: 'border-style' | 'border-color' | 'border-width' | 'border-radius' | 'border-image',
        position: 'top' | 'right' | 'bottom' | 'left' | 'all'
    ) {
        const style = position === 'all' ? property : `${property}-${position}`;
        this.domElementStyleSheet[style] = '';

        if(property === 'border-style') {
            this.setBorderStyleValuesAccordingToClass();
        }

        if(property === 'border-color') {
            this.setBorderColorValuesAccordingToClass();
        }

        if(property === 'border-width') {
            this.setBorderWidthValuesAccordingToClass();
        }

        if(property === 'border-radius') {
            this.setBorderRadiusValuesAccordingToClass();
        }
    }

    private updateBorderColor() {
        let {top, right, bottom, left} = this.getCurrentBorderColor();

        if (this.selectAllCheckBox.checked) {
            top = this.topBorderColorInput.value;
            right = top;
            bottom = top;
            left = top;

            this.rightBorderColorInput.value = this.topBorderColorInput.value;
            this.bottomBorderColorInput.value = this.topBorderColorInput.value;
            this.leftBorderColorInput.value = this.topBorderColorInput.value;
        } else {
            top = this.topBorderColorInput.value;
            right = this.rightBorderColorInput.value;
            bottom = this.bottomBorderColorInput.value;
            left = this.leftBorderColorInput.value;
        }

        this.domElementStyleSheet['border-color'] = [top, right, bottom, left].join(' ')
    }

    private updateBorderWidth() {
        let {top, right, bottom, left} = this.getCurrentBorderWidth();

        if (this.selectAllCheckBox.checked) {
            if(parseInt(this.topBorderWidthInput.value) === 0) {
                this.resetBorderProperty('border-width', 'all');
                return;
            }

            top = `${this.topBorderWidthInput.value}${this.topBorderWidthUnitSelector.value}`;
            right = top;
            bottom = top;
            left = top;

            this.rightBorderWidthInput.value = this.topBorderWidthInput.value;
            this.bottomBorderWidthInput.value = this.topBorderWidthInput.value;
            this.leftBorderWidthInput.value = this.topBorderWidthInput.value;

            this.rightBorderWidthUnitSelector.value = this.topBorderWidthUnitSelector.value;
            this.bottomBorderWidthUnitSelector.value = this.topBorderWidthUnitSelector.value;
            this.leftBorderWidthUnitSelector.value = this.topBorderWidthUnitSelector.value;
        } else {
            top = `${this.topBorderWidthInput.value}${this.topBorderWidthUnitSelector.value}`;
            right = `${this.rightBorderWidthInput.value}${this.rightBorderWidthUnitSelector.value}`;
            bottom = `${this.bottomBorderWidthInput.value}${this.bottomBorderWidthUnitSelector.value}`;
            left = `${this.leftBorderWidthInput.value}${this.leftBorderWidthUnitSelector.value}`;
        }
        this.domElementStyleSheet['border-width'] = [top, right, bottom, left].join(' ')
    }

    private updateBorderRadius() {
        let {top, right, bottom, left} = this.getCurrentBorderRadius();

        if (this.selectAllCheckBox.checked) {
            if(parseInt(this.topBorderRadiusInput.value) === 0) {
                this.resetBorderProperty('border-radius', 'all');
                return;
            }

            top = `${this.topBorderRadiusInput.value}${this.topBorderRadiusUnitSelector.value}`;
            right = top;
            bottom = top;
            left = top;

            this.rightBorderRadiusInput.value = this.topBorderRadiusInput.value;
            this.bottomBorderRadiusInput.value = this.topBorderRadiusInput.value;
            this.leftBorderRadiusInput.value = this.topBorderRadiusInput.value;

            this.rightBorderRadiusUnitSelector.value = this.topBorderRadiusUnitSelector.value;
            this.bottomBorderRadiusUnitSelector.value = this.topBorderRadiusUnitSelector.value;
            this.leftBorderRadiusUnitSelector.value = this.topBorderRadiusUnitSelector.value;
        } else {
            top = `${this.topBorderRadiusInput.value}${this.topBorderRadiusUnitSelector.value}`;
            right = `${this.rightBorderRadiusInput.value}${this.rightBorderRadiusUnitSelector.value}`;
            bottom = `${this.bottomBorderRadiusInput.value}${this.bottomBorderRadiusUnitSelector.value}`;
            left = `${this.leftBorderRadiusInput.value}${this.leftBorderRadiusUnitSelector.value}`;
        }
        this.domElementStyleSheet['border-radius'] = [top, right, bottom, left].join(' ')
    }

    private unifiedBorderProperties() : boolean {
        const allEqual = [];
        allEqual.push(this.getCurrentBorderStyle().allEqual)
        allEqual.push(this.getCurrentBorderColor().allEqual)
        allEqual.push(this.getCurrentBorderRadius().allEqual)
        allEqual.push(this.getCurrentBorderStyle().allEqual)
        allEqual.push(this.getCurrentBorderWidth().allEqual)

        if(allEqual.find((el) => el === false) === undefined){
            return true;
        }
        return false;
    }

    private getCurrentBorderStyle(): StylesReturnObjectInterface {
        const top = this.domElementStyleSheet['border-top-style'];
        const right = this.domElementStyleSheet['border-right-style'];
        const bottom = this.domElementStyleSheet['border-bottom-style'];
        const left = this.domElementStyleSheet['border-left-style'];

        return {
            top: top ? top : 'none',
            right: right ? right : 'none',
            bottom: bottom ? bottom : 'none',
            left: left ? left : 'none',
            allEqual: top === right && top === bottom && top === left,
        };
    }

    private getCurrentBorderColor(): StylesReturnObjectInterface {
        const top = this.domElementStyleSheet['border-top-color'];
        const right = this.domElementStyleSheet['border-right-color'];
        const bottom = this.domElementStyleSheet['border-bottom-color'];
        const left = this.domElementStyleSheet['border-left-color'];

        return {
            top: colorToHex(top),
            right: colorToHex(right),
            bottom: colorToHex(bottom),
            left: colorToHex(left),
            allEqual: top === right && top === bottom && top === left,
        };
    }

    private getCurrentBorderWidth(): StylesReturnObjectInterface {
        const top = this.domElementStyleSheet['border-top-width'];
        const right = this.domElementStyleSheet['border-right-width'];
        const bottom = this.domElementStyleSheet['border-bottom-width'];
        const left = this.domElementStyleSheet['border-left-width'];

        return {
            top: top ? top : '0px',
            right: right ? right : '0px',
            bottom: bottom ? bottom : '0px',
            left: left ? left : '0px',
            allEqual: top === right && top === bottom && top === left,
        };
    }

    private getCurrentBorderRadius(): StylesReturnObjectInterface {
        const top = this.domElementStyleSheet['border-top-left-radius'];
        const right = this.domElementStyleSheet['border-top-right-radius'];
        const bottom = this.domElementStyleSheet['border-bottom-right-radius'];
        const left = this.domElementStyleSheet['border-bottom-left-radius'];

        return {
            top: top ? top : '0px',
            right: right ? right : '0px',
            bottom: bottom ? bottom : '0px',
            left: left ? left : '0px',
            allEqual: top === right && top === bottom && top === left,
        };
    }

    public classNameUpdated(name: string) {
        this.domElementStyleSheet = CssStyleSheet.getRuleStyles(name);
        this.selectAllCheckBox.checked = this.unifiedBorderProperties();
        this.changeComponentsStatus();
        this.setBorderValuesAccordingToClass();
    }
}

interface StylesReturnObjectInterface {
    top: string,
    right: string,
    bottom: string,
    left: string,
    allEqual: boolean,
}
