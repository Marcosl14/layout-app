import ContainerBuilder from '../models/ContainerBuilder';
import InputBuilder from '../models/InputBuilder';
import LabelBuilder from '../models/LabelBuilder';
import SelectorBuilder from '../models/SelectorBuilder';
import { InputTypeEnum } from '../enums/input-type.enum';
import { UnitsEnum } from '../enums/units.enum';
import capitalizeFirstLetters from '../functions/first-letters-capitalized';

export default class MarginOrPaddingComponent {
    private type;
    private domElement: HTMLElement;
    private container: HTMLDivElement;

    private propertyValueInput: HTMLInputElement;
    private topPropertyCheckbox: HTMLInputElement = new InputBuilder(InputTypeEnum.checkbox)
        .checked()
        .build();
    private bottomPropertyCheckbox: HTMLInputElement = new InputBuilder(InputTypeEnum.checkbox)
        .checked()
        .build();
    private rightPropertyCheckbox: HTMLInputElement = new InputBuilder(InputTypeEnum.checkbox)
        .checked()
        .build();
    private leftPropertyCheckbox: HTMLInputElement = new InputBuilder(InputTypeEnum.checkbox)
        .checked()
        .build();
    private topUnitSelector: HTMLSelectElement;
    private bottomUnitSelector: HTMLSelectElement;
    private rightUnitSelector: HTMLSelectElement;
    private leftUnitSelector: HTMLSelectElement;

    constructor(type: 'margin' | 'padding', domElement: HTMLElement) {
        this.type = type;
        this.domElement = domElement;
        this.addComponents();
    }

    get component() {
        return this.container;
    }

    private addComponents() {
        const properties = this.domElement.style[this.type].split(' ');
        const [top, right, bottom, left] = this.getCurrentProperties(properties);

        // Falta agregar un boton auto, que disabled los selectores y asigne solo ese valor.

        this.topUnitSelector = new SelectorBuilder(UnitsEnum)
            .selectOption(this.getUnit(top))
            .build()
        this.bottomUnitSelector = new SelectorBuilder(UnitsEnum)
            .selectOption(this.getUnit(bottom))
            .build()
        this.rightUnitSelector = new SelectorBuilder(UnitsEnum)
            .selectOption(this.getUnit(right))
            .build()
        this.leftUnitSelector = new SelectorBuilder(UnitsEnum)
            .selectOption(this.getUnit(left))
            .build()

        const topContainer = new ContainerBuilder()
            .appendChild(new LabelBuilder()
                .setInnerText('T')
                .build()
            )
            .appendChild(this.topPropertyCheckbox)
            .appendChild(this.topUnitSelector)
            .build()

        const rightContainer = new ContainerBuilder()
            .appendChild(new LabelBuilder()
                .setInnerText('R')
                .build()
            )
            .appendChild(this.rightPropertyCheckbox)
            .appendChild(this.rightUnitSelector)
            .build()

        const bottomContainer = new ContainerBuilder()
            .appendChild(new LabelBuilder()
                .setInnerText('B')
                .build()
            )
            .appendChild(this.bottomPropertyCheckbox)
            .appendChild(this.bottomUnitSelector)
            .build()

        const leftContainer = new ContainerBuilder()
            .appendChild(new LabelBuilder()
                .setInnerText('L')
                .build()
            )
            .appendChild(this.leftPropertyCheckbox)
            .appendChild(this.leftUnitSelector)
            .build()

        const checkBoxContainer = new ContainerBuilder()
            .appendChild(topContainer)
            .appendChild(rightContainer)
            .appendChild(bottomContainer)
            .appendChild(leftContainer)
            .build()

        this.updateProperty = this.updateProperty.bind(this);
        this.propertyValueInput = new InputBuilder(InputTypeEnum.number)
            .setValue(`${parseInt(this.domElement.style[this.type])}`)
            .addEventListener('input', this.updateProperty)
            .build();

        this.container = new ContainerBuilder()
            .appendChild(new LabelBuilder()
                .setInnerText(`${capitalizeFirstLetters(this.type)} Selector`) // TODO la primer letra en mayusculas
                .build()
            )
            .appendChild(checkBoxContainer)
            .appendChild(this.propertyValueInput)
            .build()
    }

    private updateProperty() {
        const properties = this.domElement.style[this.type].split(' ');
        let [top, right, bottom, left] = this.getCurrentProperties(properties);

        if (this.topPropertyCheckbox.checked) {
            top = `${this.propertyValueInput.value}${this.topUnitSelector.value}`;
        }
        if (this.bottomPropertyCheckbox.checked) {
            bottom = `${this.propertyValueInput.value}${this.bottomUnitSelector.value}`;
        }
        if (this.rightPropertyCheckbox.checked) {
            right = `${this.propertyValueInput.value}${this.rightUnitSelector.value}`;
        }
        if (this.leftPropertyCheckbox.checked) {
            left = `${this.propertyValueInput.value}${this.leftUnitSelector.value}`;
        }

        this.domElement.style[this.type] = [top, right, bottom, left].join(' ');
    }

    private getCurrentProperties(properties: string[]): string[] {
        let top, right, bottom, left;

        if (properties.length === 1) {
            top = properties[0];
            right = properties[0];
            bottom = properties[0];
            left = properties[0];
        }

        if (properties.length === 2) {
            top = properties[0];
            right = properties[1];
            bottom = properties[0];
            left = properties[1];
        }

        if (properties.length === 3) {
            top = properties[0];
            right = properties[1];
            bottom = properties[2];
            left = properties[1];
        }

        if (properties.length === 4) {
            top = properties[0];
            right = properties[1];
            bottom = properties[2];
            left = properties[3];
        }

        return [top, right, bottom, left];
    }

    private getUnit(text: string){
        return text.match(/[a-z]+$/i)[0];
    }
}
