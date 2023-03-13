import ContainerBuilder from '../models/ContainerBuilder';
import LabelBuilder from '../models/LabelBuilder';
import InputBuilder from '../models/InputBuilder';
import SelectorFromEnumBuilder from '../models/SelectorFromEnumBuilder';

import CssStyleSheet from '../../css-stylesheet/css-stylesheet';
import getUnit from '../functions/get-css-unit';

import { StyleNameEnum } from '../enums/style-name.enum';
import { InputTypeEnum } from '../enums/input-type.enum';
import { UnitsEnum } from '../enums/units.enum';
import { DisplayTypesEnum } from '../enums/display-types.enum';
import { FlexDirectionEnum } from '../enums/flex-direction.enum';
import { AlignFlexItemsEnum } from '../enums/align-flex-items.enum';

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

        this.unitsSelectorInput = new SelectorFromEnumBuilder(UnitsEnum)
            .selectOption(getUnit(this.domElementStyleSheet[this.style]))
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
            .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
            .setStyle(StyleNameEnum['flex-direction'], FlexDirectionEnum.column)
            .setStyle(StyleNameEnum['align-items'], AlignFlexItemsEnum.stretch)
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
}
