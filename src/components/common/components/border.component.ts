import ContainerBuilder from '../models/ContainerBuilder';
import InputBuilder from '../models/InputBuilder';
import LabelBuilder from '../models/LabelBuilder';
import SelectorBuilder from '../models/SelectorBuilder';
import { InputTypeEnum } from '../enums/input-type.enum';
import CssStyleSheet from '../../css-stylesheet/css-stylesheet';
import { BorderStyleEnum } from '../enums/border-style.enum';
import { UnitsEnum } from '../enums/units.enum';
import { StyleNameEnum } from '../enums/style-name.enum';
import rgbToHex from '../functions/rgb-to-hex';

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
        this.addComponents();

        // TODO: falta el border-shadow
    }

    get component() {
        return this.container;
    }

    private addComponents() {
        this.updateBorderStyleProperty = this.updateBorderStyleProperty.bind(this);
        this.updateBorderColor = this.updateBorderColor.bind(this);
        this.updateBorderWidth = this.updateBorderWidth.bind(this);
        this.updateBorderRadius = this.updateBorderRadius.bind(this);

        this.selectAllCheckBox = new InputBuilder(InputTypeEnum.checkbox)
            .checked()
            .addEventListener('change', this.updateBorderStyleProperty)
            .addEventListener('change', this.updateBorderColor)
            .addEventListener('change', this.updateBorderWidth)
            .addEventListener('change', this.updateBorderRadius)
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
        this.buildBorderWidthInputs();
        this.buildBorderWidthUnitsSelectors();
        this.buildBorderRadiusInputs()
        this.buildBorderRadiusUnitsSelectors();

        const topContainer = new ContainerBuilder()
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, 'flex')
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(new LabelBuilder()
                    .setInnerText('Top Border Color / Style')
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
                .appendChild(new LabelBuilder()
                    .setInnerText('Top Border Width')
                    .build()
                )
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, 'flex')
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(this.topBorderWidthInput)
                .appendChild(this.topBorderWidthUnitSelector)
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, 'flex')
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(new LabelBuilder()
                    .setInnerText('Top Border Radius')
                    .build()
                )
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, 'flex')
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(this.topBorderRadiusInput)
                .appendChild(this.topBorderRadiusUnitSelector)
                .build()
            )
            .build()

        const rightContainer = new ContainerBuilder()
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, 'flex')
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(new LabelBuilder()
                    .setInnerText('Right Border Color / Style')
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
                .appendChild(new LabelBuilder()
                    .setInnerText('Right Border Width')
                    .build()
                )
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, 'flex')
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(this.rightBorderWidthInput)
                .appendChild(this.rightBorderWidthUnitSelector)
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, 'flex')
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(new LabelBuilder()
                    .setInnerText('Right Border Radius')
                    .build()
                )
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, 'flex')
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(this.rightBorderRadiusInput)
                .appendChild(this.rightBorderRadiusUnitSelector)
                .build()
            )
            .build()

        const bottomContainer = new ContainerBuilder()
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, 'flex')
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(new LabelBuilder()
                    .setInnerText('Bottom Border Color / Style')
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
                .appendChild(new LabelBuilder()
                    .setInnerText('Bottom Border Width')
                    .build()
                )
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, 'flex')
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(this.bottomBorderWidthInput)
                .appendChild(this.bottomBorderWidthUnitSelector)
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, 'flex')
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(new LabelBuilder()
                    .setInnerText('Bottom Border Radius')
                    .build()
                )
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, 'flex')
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(this.bottomBorderRadiusInput)
                .appendChild(this.bottomBorderRadiusUnitSelector)
                .build()
            )
            .build()

        const leftContainer = new ContainerBuilder()
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, 'flex')
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(new LabelBuilder()
                    .setInnerText('Left Border Color / Style')
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
                .appendChild(new LabelBuilder()
                    .setInnerText('Left Border Width')
                    .build()
                )
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, 'flex')
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(this.leftBorderWidthInput)
                .appendChild(this.leftBorderWidthUnitSelector)
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, 'flex')
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(new LabelBuilder()
                    .setInnerText('Left Border Radius')
                    .build()
                )
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, 'flex')
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

    private buildBorderWidthInputs() {
        const [top, right, bottom, left] = this.getCurrentBorderWidth();

        this.topBorderWidthInput = new InputBuilder(InputTypeEnum.number)
            .setValue(`${parseInt(top)}`)
            .setMin(0)
            .addEventListener('input', this.updateBorderWidth)
            .build();
        this.rightBorderWidthInput = new InputBuilder(InputTypeEnum.number)
            .setValue(`${parseInt(right)}`)
            .setMin(0)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('change', this.updateBorderWidth)
            .build()
        this.bottomBorderWidthInput = new InputBuilder(InputTypeEnum.number)
            .setValue(`${parseInt(bottom)}`)
            .setMin(0)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('change', this.updateBorderWidth)
            .build()
        this.leftBorderWidthInput = new InputBuilder(InputTypeEnum.number)
            .setValue(`${parseInt(left)}`)
            .setMin(0)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('change', this.updateBorderWidth)
            .build()
    }

    private buildBorderWidthUnitsSelectors() {
        const [top, right, bottom, left] = this.getCurrentBorderWidth();

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

    private buildBorderRadiusInputs() {
        const [top, right, bottom, left] = this.getCurrentBorderRadius();

        this.topBorderRadiusInput = new InputBuilder(InputTypeEnum.number)
            .setValue(`${parseInt(top)}`)
            .setMin(0)
            .addEventListener('input', this.updateBorderRadius)
            .build();
        this.rightBorderRadiusInput = new InputBuilder(InputTypeEnum.number)
            .setValue(`${parseInt(right)}`)
            .setMin(0)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('change', this.updateBorderRadius)
            .build()
        this.bottomBorderRadiusInput = new InputBuilder(InputTypeEnum.number)
            .setValue(`${parseInt(bottom)}`)
            .setMin(0)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('change', this.updateBorderRadius)
            .build()
        this.leftBorderRadiusInput = new InputBuilder(InputTypeEnum.number)
            .setValue(`${parseInt(left)}`)
            .setMin(0)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('change', this.updateBorderRadius)
            .build()
    }

    private buildBorderRadiusUnitsSelectors() {
        const [top, right, bottom, left] = this.getCurrentBorderRadius();

        this.topBorderRadiusUnitSelector = new SelectorBuilder(UnitsEnum)
            .selectOption(this.getUnit(top))
            .addEventListener('change', this.updateBorderRadius)
            .build()
        this.rightBorderRadiusUnitSelector = new SelectorBuilder(UnitsEnum)
            .selectOption(this.getUnit(right))
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('change', this.updateBorderRadius)
            .build()
        this.bottomBorderRadiusUnitSelector = new SelectorBuilder(UnitsEnum)
            .selectOption(this.getUnit(bottom))
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('change', this.updateBorderRadius)
            .build()
        this.leftBorderRadiusUnitSelector = new SelectorBuilder(UnitsEnum)
            .selectOption(this.getUnit(left))
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('change', this.updateBorderRadius)
            .build()
    }

    private updateBorderStyleProperty() {
        // TODO si el border style es none, deberia eliminar los border-colors y el border-width
        let [top, right, bottom, left] = this.getCurrentBorderStyle();

        if (this.selectAllCheckBox.checked) {
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

        if (this.selectAllCheckBox.checked) {
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

        if (this.selectAllCheckBox.checked) {
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

    private updateBorderRadius() {
        let [top, right, bottom, left] = this.getCurrentBorderRadius();

        if (this.selectAllCheckBox.checked) {
            this.rightBorderRadiusInput.disabled = true;
            this.bottomBorderRadiusInput.disabled = true;
            this.leftBorderRadiusInput.disabled = true;

            this.rightBorderRadiusUnitSelector.disabled = true;
            this.bottomBorderRadiusUnitSelector.disabled = true;
            this.leftBorderRadiusUnitSelector.disabled = true;

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
            this.rightBorderRadiusInput.disabled = false;
            this.bottomBorderRadiusInput.disabled = false;
            this.leftBorderRadiusInput.disabled = false;

            this.rightBorderRadiusUnitSelector.disabled = false;
            this.bottomBorderRadiusUnitSelector.disabled = false;
            this.leftBorderRadiusUnitSelector.disabled = false;

            top = `${this.topBorderRadiusInput.value}${this.topBorderRadiusUnitSelector.value}`;
            right = `${this.rightBorderRadiusInput.value}${this.rightBorderRadiusUnitSelector.value}`;
            bottom = `${this.bottomBorderRadiusInput.value}${this.bottomBorderRadiusUnitSelector.value}`;
            left = `${this.leftBorderRadiusInput.value}${this.leftBorderRadiusUnitSelector.value}`;
        }
        CssStyleSheet.getRuleStyles(this.domElement.id)['border-radius'] = [top, right, bottom, left].join(' ')
    }

    private getCurrentBorderStyle(): string[] {
        const top = CssStyleSheet.getRuleStyles(this.domElement.id)['border-top-style'];
        const right = CssStyleSheet.getRuleStyles(this.domElement.id)['border-right-style'];
        const bottom = CssStyleSheet.getRuleStyles(this.domElement.id)['border-bottom-style'];
        const left = CssStyleSheet.getRuleStyles(this.domElement.id)['border-left-style'];

        return [top ? top : 'none', right ? right : 'none', bottom ? bottom : 'none', left ? left : 'none'];
    }

    private getCurrentBorderColor(): string[] {
        const top = CssStyleSheet.getRuleStyles(this.domElement.id)['border-top-color'];
        const right = CssStyleSheet.getRuleStyles(this.domElement.id)['border-right-color'];
        const bottom = CssStyleSheet.getRuleStyles(this.domElement.id)['border-bottom-color'];
        const left = CssStyleSheet.getRuleStyles(this.domElement.id)['border-left-color'];

        return [rgbToHex(top), rgbToHex(right), rgbToHex(bottom), rgbToHex(left)];
    }

    private getCurrentBorderWidth(): string[] {
        const top = CssStyleSheet.getRuleStyles(this.domElement.id)['border-top-width'];
        const right = CssStyleSheet.getRuleStyles(this.domElement.id)['border-right-width'];
        const bottom = CssStyleSheet.getRuleStyles(this.domElement.id)['border-bottom-width'];
        const left = CssStyleSheet.getRuleStyles(this.domElement.id)['border-left-width'];

        return [top ? top : '0px', right ? right : '0px', bottom ? bottom : '0px', left ? left : '0px'];
    }

    private getCurrentBorderRadius(): string[] {
        const top = CssStyleSheet.getRuleStyles(this.domElement.id)['border-top-left-radius'];
        const right = CssStyleSheet.getRuleStyles(this.domElement.id)['border-top-right-radius'];
        const bottom = CssStyleSheet.getRuleStyles(this.domElement.id)['border-bottom-right-radius'];
        const left = CssStyleSheet.getRuleStyles(this.domElement.id)['border-bottom-left-radius'];

        return [top ? top : '0px', right ? right : '0px', bottom ? bottom : '0px', left ? left : '0px'];
    }

    private getUnit(text: string) {
        const values = text.match(/[a-z]+$/i)
        return values ? values[0] : '';
    }
}
