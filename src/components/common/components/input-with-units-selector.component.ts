import ContainerBuilder from '../models/ContainerBuilder';
import LabelBuilder from '../models/LabelBuilder';
import InputBuilder from '../models/InputBuilder';
import SelectorBuilder from '../models/SelectorBuilder';

import { StyleNameEnum } from '../enums/style-name.enum';
import { InputTypeEnum } from '../enums/input-type.enum';
import { UnitsEnum } from '../enums/units.enum';
import CssStyleSheet from '../../css-stylesheet/css-stylesheet';

export default class InputAndUnitsSelectorComponent {
    private domElement: HTMLElement;
    private container: HTMLDivElement;
    private domElementStyleSheet: CSSStyleDeclaration;

    private label: string;
    private style: string;

    private propertyValueInput: HTMLInputElement;
    private unitsSelectorInput: HTMLSelectElement;


    constructor(domElement: HTMLElement, style: string, label: string) {
        this.domElement = domElement;
        this.style = style;
        this.label = label;
        this.domElementStyleSheet = CssStyleSheet.getRuleStyles(this.domElement.id);
        this.addComponents();
    }

    get component() {
        return this.container;
    }

    private addComponents() {
        this.updateProperty = this.updateProperty.bind(this);

        this.unitsSelectorInput = new SelectorBuilder(UnitsEnum)
            .selectOption(this.getUnit(this.domElementStyleSheet[this.style]))
            .addEventListener('change', this.updateProperty)
            .build()

        this.propertyValueInput = new InputBuilder(InputTypeEnum.number)
            .setValue(`${parseInt(this.domElementStyleSheet[this.style]) || 0}`)
            .addEventListener('input', this.updateProperty)
            .build()

        const innerContainer = new ContainerBuilder()
            .appendChild(this.propertyValueInput)
            .appendChild(this.unitsSelectorInput)
            .build()

        this.container = new ContainerBuilder()
            .setStyle(StyleNameEnum.display, 'flex')
            .setStyle(StyleNameEnum['flex-direction'], 'column')
            .setStyle(StyleNameEnum['align-items'], 'stretch')
            .setStyle(StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new LabelBuilder()
                .setInnerText(this.label)
                .build()
            )
            .appendChild(innerContainer)
            .build()
    }

    private updateProperty() {
        this.domElementStyleSheet[this.style] = `${this.propertyValueInput.value}${this.unitsSelectorInput.value}`
    }

    private getUnit(text: string) {
        const values = text.match(/[a-z]+$/i)
        return values ? values[0] : 'px';
    }
}
