import ContainerBuilder from '../models/ContainerBuilder';
import InputBuilder from '../models/InputBuilder';
import LabelBuilder from '../models/LabelBuilder';
import SelectorBuilder from '../models/SelectorBuilder';
import { InputTypeEnum } from '../enums/input-type.enum';
import CssStyleSheet from '../../css-stylesheet/css-stylesheet';
import { BorderStyleEnum } from '../enums/border-style.enum';
import { UnitsEnum } from '../enums/units.enum';
import { StyleNameEnum } from '../enums/style-name.enum';

export default class BorderComponent {
    private domElement: HTMLElement;
    private container: HTMLDivElement;

    private topBorderColorInput: HTMLInputElement;
    private rightBorderColorInput: HTMLInputElement;
    private bottomBorderColorInput: HTMLInputElement;
    private leftBorderColorInput: HTMLInputElement;

    private topStyleSelector: HTMLSelectElement;
    private rightStyleSelector: HTMLSelectElement;
    private bottomStyleSelector: HTMLSelectElement;
    private leftStyleSelector: HTMLSelectElement;

    private topBorderWidthInput: HTMLInputElement;
    private rightBorderWidthInput: HTMLInputElement;
    private bottomBorderWidthInput: HTMLInputElement;
    private leftBorderWidthInput: HTMLInputElement;

    private topBorderWidthUnitSelector: HTMLSelectElement;
    private rightBorderWidthUnitSelector: HTMLSelectElement;
    private bottomBorderWidthUnitSelector: HTMLSelectElement;
    private leftBorderWidthUnitSelector: HTMLSelectElement;

    private selectAllCheckBox: HTMLInputElement;

    constructor(domElement: HTMLElement) {
        this.domElement = domElement;
        this.addComponents();
    }

    get component() {
        return this.container;
    }

    private addComponents() {
        this.updateBorderStyleProperty = this.updateBorderStyleProperty.bind(this);
        this.updateBorderColor = this.updateBorderColor.bind(this);
        this.updateBorderWidth = this.updateBorderWidth.bind(this);

        this.selectAllCheckBox = new InputBuilder(InputTypeEnum.checkbox)
            .checked()
            .addEventListener('change', this.updateBorderStyleProperty)
            .addEventListener('change', this.updateBorderColor)
            .addEventListener('change', this.updateBorderWidth)
            .build()

        const selectAllContainer = new ContainerBuilder()
            .appendChild(new LabelBuilder()
                .setInnerText('Select All')
                .build()
            )
            .appendChild(this.selectAllCheckBox)
            .build()

        this.buildColorInputs();

        this.buildStyleSelectors();

        this.buildBorderWidthInpus();

        this.buildBorderWidthUnitsSelectors();

        const topContainer = new ContainerBuilder()
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, 'flex')
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(new LabelBuilder()
                    .setInnerText('Top')
                    .build()
                )
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, 'flex')
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(this.topBorderColorInput)
                .appendChild(this.topStyleSelector)
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, 'flex')
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(this.topBorderWidthInput)
                .appendChild(this.topBorderWidthUnitSelector)
                .build()
            )
            .build()

        const rightContainer = new ContainerBuilder()
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, 'flex')
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(new LabelBuilder()
                    .setInnerText('Right')
                    .build()
                )
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, 'flex')
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(this.rightBorderColorInput)
                .appendChild(this.rightStyleSelector)
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, 'flex')
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(this.rightBorderWidthInput)
                .appendChild(this.rightBorderWidthUnitSelector)
                .build()
            )
            .build()

        const bottomContainer = new ContainerBuilder()
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, 'flex')
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(new LabelBuilder()
                    .setInnerText('Bottom')
                    .build()
                )
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, 'flex')
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(this.bottomBorderColorInput)
                .appendChild(this.bottomStyleSelector)
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, 'flex')
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(this.bottomBorderWidthInput)
                .appendChild(this.bottomBorderWidthUnitSelector)
                .build()
            )
            .build()

        const leftContainer = new ContainerBuilder()
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, 'flex')
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(new LabelBuilder()
                    .setInnerText('Left')
                    .build()
                )
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, 'flex')
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(this.leftBorderColorInput)
                .appendChild(this.leftStyleSelector)
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, 'flex')
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(this.leftBorderWidthInput)
                .appendChild(this.leftBorderWidthUnitSelector)
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

    private buildColorInputs() {
        const [top, right, bottom, left] = this.getCurrentBorderColor();

        this.topBorderColorInput = new InputBuilder(InputTypeEnum.color)
            .setValue(top)
            .addEventListener('input', this.updateBorderColor)
            .build();
        this.rightBorderColorInput = new InputBuilder(InputTypeEnum.color)
            .setValue(right)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('input', this.updateBorderColor)
            .build();
        this.bottomBorderColorInput = new InputBuilder(InputTypeEnum.color)
            .setValue(bottom)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('input', this.updateBorderColor)
            .build();
        this.leftBorderColorInput = new InputBuilder(InputTypeEnum.color)
            .setValue(left)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('input', this.updateBorderColor)
            .build();
    }

    private buildStyleSelectors() {
        const [top, right, bottom, left] = this.getCurrentBorderStyle();

        this.topStyleSelector = new SelectorBuilder(BorderStyleEnum)
            .selectOption(top)
            .addEventListener('change', this.updateBorderStyleProperty)
            .build()
        this.rightStyleSelector = new SelectorBuilder(BorderStyleEnum)
            .selectOption(right)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('change', this.updateBorderStyleProperty)
            .build()
        this.bottomStyleSelector = new SelectorBuilder(BorderStyleEnum)
            .selectOption(bottom)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('change', this.updateBorderStyleProperty)
            .build()
        this.leftStyleSelector = new SelectorBuilder(BorderStyleEnum)
            .selectOption(left)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('change', this.updateBorderStyleProperty)
            .build()
    }

    private buildBorderWidthInpus() {
        const [top, right, bottom, left] = this.getCurrentBorderWidth();

        this.topBorderWidthInput = new InputBuilder(InputTypeEnum.number)
            .setValue(`${parseInt(top)}`)
            .addEventListener('input', this.updateBorderWidth)
            .build();
        this.rightBorderWidthInput = new InputBuilder(InputTypeEnum.number)
            .setValue(`${parseInt(right)}`)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('change', this.updateBorderWidth)
            .build()
        this.bottomBorderWidthInput = new InputBuilder(InputTypeEnum.number)
            .setValue(`${parseInt(bottom)}`)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('change', this.updateBorderWidth)
            .build()
        this.leftBorderWidthInput = new InputBuilder(InputTypeEnum.number)
            .setValue(`${parseInt(left)}`)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('change', this.updateBorderWidth)
            .build()
    }

    private buildBorderWidthUnitsSelectors() {
        const [top, right, bottom, left] = this.getCurrentBorderWidth();

        console.log(this.getCurrentBorderWidth())

        this.topBorderWidthUnitSelector = new SelectorBuilder(UnitsEnum)
            .selectOption(this.getUnit(top))
            .addEventListener('change', this.updateBorderWidth)
            .build()
        this.rightBorderWidthUnitSelector = new SelectorBuilder(UnitsEnum)
            .selectOption(this.getUnit(right))
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('change', this.updateBorderWidth)
            .build()
        this.bottomBorderWidthUnitSelector = new SelectorBuilder(UnitsEnum)
            .selectOption(this.getUnit(bottom))
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('change', this.updateBorderWidth)
            .build()
        this.leftBorderWidthUnitSelector = new SelectorBuilder(UnitsEnum)
            .selectOption(this.getUnit(left))
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('change', this.updateBorderWidth)
            .build()
    }

    private updateBorderStyleProperty() {
        // TODO si el border style es none, deberia eliminar los border-colors y el border-width
        let [top, right, bottom, left] = this.getCurrentBorderStyle();

        if(this.selectAllCheckBox.checked){
            this.rightStyleSelector.disabled = true;
            this.bottomStyleSelector.disabled = true;
            this.leftStyleSelector.disabled = true;

            top = this.topStyleSelector.value;
            right = top;
            bottom = top;
            left = top;

            this.rightStyleSelector.value = this.topStyleSelector.value;
            this.bottomStyleSelector.value = this.topStyleSelector.value;
            this.leftStyleSelector.value = this.topStyleSelector.value;
        } else {
            this.rightStyleSelector.disabled = false;
            this.bottomStyleSelector.disabled = false;
            this.leftStyleSelector.disabled = false;

            top = this.topStyleSelector.value;
            right = this.rightStyleSelector.value;
            bottom = this.bottomStyleSelector.value;
            left = this.leftStyleSelector.value;
        }

        CssStyleSheet.getRuleStyles(this.domElement.id)['border-style'] = [top, right, bottom, left].join(' ')
    }

    private updateBorderColor() {
        let [top, right, bottom, left] = this.getCurrentBorderColor();

        if(this.selectAllCheckBox.checked){
            this.rightBorderColorInput.disabled = true;
            this.bottomBorderColorInput.disabled = true;
            this.leftBorderColorInput.disabled = true;

            top = this.topBorderColorInput.value;
            right = top;
            bottom = top;
            left = top;

            this.rightBorderColorInput.value = this.topBorderColorInput.value;
            this.bottomBorderColorInput.value = this.topBorderColorInput.value;
            this.leftBorderColorInput.value = this.topBorderColorInput.value;
        } else {
            this.rightBorderColorInput.disabled = false;
            this.bottomBorderColorInput.disabled = false;
            this.leftBorderColorInput.disabled = false;

            top = this.topBorderColorInput.value;
            right = this.rightBorderColorInput.value;
            bottom = this.bottomBorderColorInput.value;
            left = this.leftBorderColorInput.value;
        }

        CssStyleSheet.getRuleStyles(this.domElement.id)['border-color'] = [top, right, bottom, left].join(' ')
    }

    private updateBorderWidth() {
        let [top, right, bottom, left] = this.getCurrentBorderWidth();

        if(this.selectAllCheckBox.checked){
            this.rightBorderWidthInput.disabled = true;
            this.bottomBorderWidthInput.disabled = true;
            this.leftBorderWidthInput.disabled = true;

            this.rightBorderWidthUnitSelector.disabled = true;
            this.bottomBorderWidthUnitSelector.disabled = true;
            this.leftBorderWidthUnitSelector.disabled = true;

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
            this.rightBorderWidthInput.disabled = false;
            this.bottomBorderWidthInput.disabled = false;
            this.leftBorderWidthInput.disabled = false;

            this.rightBorderWidthUnitSelector.disabled = false;
            this.bottomBorderWidthUnitSelector.disabled = false;
            this.leftBorderWidthUnitSelector.disabled = false;

            top = `${this.topBorderWidthInput.value}${this.topBorderWidthUnitSelector.value}`;
            right = `${this.rightBorderWidthInput.value}${this.rightBorderWidthUnitSelector.value}`;
            bottom = `${this.bottomBorderWidthInput.value}${this.bottomBorderWidthUnitSelector.value}`;
            left = `${this.leftBorderWidthInput.value}${this.leftBorderWidthUnitSelector.value}`;
        }
        CssStyleSheet.getRuleStyles(this.domElement.id)['border-width'] = [top, right, bottom, left].join(' ')
    }

    private getCurrentBorderStyle(): string[] {
        const top = CssStyleSheet.getRuleStyles(this.domElement.id)['border-top-style'];
        const right = CssStyleSheet.getRuleStyles(this.domElement.id)['border-right-style'];
        const bottom = CssStyleSheet.getRuleStyles(this.domElement.id)['border-bottom-style'];
        const left = CssStyleSheet.getRuleStyles(this.domElement.id)['border-left-style'];

        return [top,right,bottom,left];
    }

    private getCurrentBorderColor(): string[] {
        const top = CssStyleSheet.getRuleStyles(this.domElement.id)['border-top-color'];
        const right = CssStyleSheet.getRuleStyles(this.domElement.id)['border-right-color'];
        const bottom = CssStyleSheet.getRuleStyles(this.domElement.id)['border-bottom-color'];
        const left = CssStyleSheet.getRuleStyles(this.domElement.id)['border-left-color'];

        return [this.rgbToHex(top),this.rgbToHex(right),this.rgbToHex(bottom),this.rgbToHex(left)];
    }

    private getCurrentBorderWidth(): string[] {
        const top = CssStyleSheet.getRuleStyles(this.domElement.id)['border-top-width'];
        const right = CssStyleSheet.getRuleStyles(this.domElement.id)['border-right-width'];
        const bottom = CssStyleSheet.getRuleStyles(this.domElement.id)['border-bottom-width'];
        const left = CssStyleSheet.getRuleStyles(this.domElement.id)['border-left-width'];

        return [top,right,bottom,left];
    }

    private rgbToHex(text: string) {
        const [r,g,b] = text.replace(/[^\d,]+/g, '').split(',');
        return '#' + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
    }

    private componentToHex(c) {
        const hex = parseInt(c).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }

    private getUnit(text: string) {
        const values = text.match(/[a-z]+$/i)
        return values ? values[0] : '';
    }
}
