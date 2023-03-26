import ContainerBuilder from '../models/ContainerBuilder';
import LabelBuilder from '../models/LabelBuilder';
import InputBuilder from '../models/InputBuilder';
import SelectorFromEnumBuilder from '../models/SelectorFromEnumBuilder';

import getUnit from '../functions/get-css-unit';

import { StyleNameEnum } from '../enums/style-name.enum';
import { InputTypeEnum } from '../enums/input-type.enum';
import { UnitsEnum } from '../enums/units.enum';
import { DisplayTypesEnum } from '../enums/display-types.enum';
import { FlexDirectionEnum } from '../enums/flex-direction.enum';
import { AlignFlexItemsEnum } from '../enums/align-flex-items.enum';

export default class InputAndUnitsSelectorComponent {
    private container: HTMLDivElement;
    private domElementStyleSheet: CSSStyleDeclaration;

    private label: string;
    private style: string;

    private propertyValueInput: InputBuilder;
    private unitsSelectorInput: SelectorFromEnumBuilder;

    private zeroValue: number;

    constructor(domElementStyleSheet: CSSStyleDeclaration, style: string, label: string) {
        this.style = style;
        this.label = label;
        this.domElementStyleSheet = domElementStyleSheet;
        this.addComponents();
        this.setInitialValues();
    }

    get component() {
        return this.container;
    }

    private addComponents() {
        this.updateProperty = this.updateProperty.bind(this);

        this.unitsSelectorInput = new SelectorFromEnumBuilder(UnitsEnum)
            .addEventListener('change', this.updateProperty)

        this.propertyValueInput = new InputBuilder(InputTypeEnum.number)
            .addEventListener('input', this.updateProperty)

        const innerContainer = new ContainerBuilder()
            .appendChild(this.propertyValueInput.build())
            .appendChild(this.unitsSelectorInput.build())
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

    private setInitialValues() {
        this.propertyValueInput.setValue(`${parseInt(this.domElementStyleSheet[this.style]) || 0}`)
        this.unitsSelectorInput.selectOption(getUnit(this.domElementStyleSheet[this.style]))
    }

    private updateProperty() {
        if(parseInt(this.propertyValueInput.getValue()) === this.zeroValue){
            this.domElementStyleSheet[this.style] = '';
            return;
        }
        this.domElementStyleSheet[this.style] =
            `${this.propertyValueInput.getValue()}${this.unitsSelectorInput.getValue()}`
    }

    public updateStyleSheet(domElementStyleSheet: CSSStyleDeclaration) {
        this.domElementStyleSheet = domElementStyleSheet;
        this.setInitialValues();
    }

    public setMinValue(value: number) {
        this.propertyValueInput.setMin(value);
        return this;
    }

    public setZeroValue(value: number) {
        this.zeroValue = value;
        return this;
    }
}
