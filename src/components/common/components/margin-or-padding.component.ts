import ContainerBuilder from '../models/ContainerBuilder';
import InputBuilder from '../models/InputBuilder';
import LabelBuilder from '../models/LabelBuilder';
import SelectorBuilder from '../models/SelectorBuilder';
import { InputTypeEnum } from '../enums/input-type.enum';
import { UnitsEnum } from '../enums/units.enum';
import capitalizeFirstLetters from '../functions/first-letters-capitalized';
import CssStyleSheet from '../../css-stylesheet/css-stylesheet';
import { StyleNameEnum } from '../enums/style-name.enum';

export default class MarginOrPaddingComponent {
    private type;
    private domElement: HTMLElement;
    private container: HTMLDivElement;

    private topPropertyValueInput: HTMLInputElement;
    private rigthPropertyValueInput: HTMLInputElement;
    private bottomPropertyValueInput: HTMLInputElement;
    private leftPropertyValueInput: HTMLInputElement;

    private topUnitSelector: HTMLSelectElement;
    private rightUnitSelector: HTMLSelectElement;
    private bottomUnitSelector: HTMLSelectElement;
    private leftUnitSelector: HTMLSelectElement;

    private selectAllCheckBox: HTMLInputElement;

    constructor(domElement: HTMLElement, type: 'margin' | 'padding', ) {
        this.type = type;
        this.domElement = domElement;
        this.addComponents();
    }

    get component() {
        return this.container;
    }

    private addComponents() {
        // TODO: deberiamos buscar en todas las clases que tenga asignadas ese elemento, y ver en cual esta el margen?
        // O no estaria mal pensar en solo modificar la clase que a el le corresponde...???
        // no deberiamos modificar una clase generada en otro lado?????

        // habria que hacer componentes en base a cada clase que tenga definida un componente???
        // y agregar componentes con un selector??????

        // TODO: falta agregar el !important y quizas los inherit y no se si habra mas propiedades
        this.updateProperty = this.updateProperty.bind(this);

        this.selectAllCheckBox = new InputBuilder(InputTypeEnum.checkbox)
            .checked()
            .addEventListener('change', this.updateProperty)
            .build()

        const selectAllContainer = new ContainerBuilder()
            .appendChild(new LabelBuilder()
                .setInnerText('Select All')
                .build()
            )
            .appendChild(this.selectAllCheckBox)
            .build()

        const [top, right, bottom, left] = this.getCurrentProperties();

        this.topPropertyValueInput = new InputBuilder(InputTypeEnum.number)
            .setValue(`${parseInt(top)}`)
            .addEventListener('input', this.updateProperty)
            .build();
        this.rigthPropertyValueInput = new InputBuilder(InputTypeEnum.number)
            .setValue(`${parseInt(right)}`)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('input', this.updateProperty)
            .build();
        this.bottomPropertyValueInput = new InputBuilder(InputTypeEnum.number)
            .setValue(`${parseInt(bottom)}`)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('input', this.updateProperty)
            .build();
        this.leftPropertyValueInput = new InputBuilder(InputTypeEnum.number)
            .setValue(`${parseInt(left)}`)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('input', this.updateProperty)
            .build();

        this.topUnitSelector = new SelectorBuilder(UnitsEnum)
            .selectOption(this.getUnit(top))
            .addEventListener('change', this.updateProperty)
            .build()
        this.bottomUnitSelector = new SelectorBuilder(UnitsEnum)
            .selectOption(this.getUnit(bottom))
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('change', this.updateProperty)
            .build()
        this.rightUnitSelector = new SelectorBuilder(UnitsEnum)
            .selectOption(this.getUnit(right))
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('change', this.updateProperty)
            .build()
        this.leftUnitSelector = new SelectorBuilder(UnitsEnum)
            .selectOption(this.getUnit(left))
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('change', this.updateProperty)
            .build()

        const topContainer = new ContainerBuilder()
            .appendChild(new LabelBuilder()
                .setInnerText('T')
                .build()
            )
            .appendChild(this.topPropertyValueInput)
            .appendChild(this.topUnitSelector)
            .build()

        const rightContainer = new ContainerBuilder()
            .appendChild(new LabelBuilder()
                .setInnerText('R')
                .build()
            )
            .appendChild(this.rigthPropertyValueInput)
            .appendChild(this.rightUnitSelector)
            .build()

        const bottomContainer = new ContainerBuilder()
            .appendChild(new LabelBuilder()
                .setInnerText('B')
                .build()
            )
            .appendChild(this.bottomPropertyValueInput)
            .appendChild(this.bottomUnitSelector)
            .build()

        const leftContainer = new ContainerBuilder()
            .appendChild(new LabelBuilder()
                .setInnerText('L')
                .build()
            )
            .appendChild(this.leftPropertyValueInput)
            .appendChild(this.leftUnitSelector)
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
                .setInnerText(`${capitalizeFirstLetters(this.type)} Selector`)
                .build()
            )
            .appendChild(selectAllContainer)
            .appendChild(inputValuesContainer)
            .build()
    }

    private updateProperty() {
        let [top, right, bottom, left] = this.getCurrentProperties();

        if(this.selectAllCheckBox.checked){
            this.rigthPropertyValueInput.disabled = true;
            this.bottomPropertyValueInput.disabled = true;
            this.leftPropertyValueInput.disabled = true;
            this.rightUnitSelector.disabled = true;
            this.bottomUnitSelector.disabled = true;
            this.leftUnitSelector.disabled = true;

            if(this.topUnitSelector.value === UnitsEnum.auto){
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
            } else {
                this.topPropertyValueInput.disabled = false;
                top = `${this.topPropertyValueInput.value}${this.topUnitSelector.value}`;
                right = `${this.topPropertyValueInput.value}${this.topUnitSelector.value}`;
                bottom = `${this.topPropertyValueInput.value}${this.topUnitSelector.value}`;
                left = `${this.topPropertyValueInput.value}${this.topUnitSelector.value}`;

                this.rigthPropertyValueInput.value = this.topPropertyValueInput.value;
                this.bottomPropertyValueInput.value = this.topPropertyValueInput.value;
                this.leftPropertyValueInput.value = this.topPropertyValueInput.value;
            }
        } else {
            this.rightUnitSelector.disabled = false;
            this.bottomUnitSelector.disabled = false;
            this.leftUnitSelector.disabled = false;

            if(this.topUnitSelector.value === UnitsEnum.auto){
                top = 'auto';
                this.topPropertyValueInput.disabled = true;
            } else {
                this.topPropertyValueInput.disabled = false;
                top = `${this.topPropertyValueInput.value}${this.topUnitSelector.value}`;
            }

            if(this.rightUnitSelector.value === UnitsEnum.auto){
                right = 'auto';
                this.rigthPropertyValueInput.disabled = true;
            } else {
                this.rigthPropertyValueInput.disabled = false;
                right = `${this.rigthPropertyValueInput.value}${this.rightUnitSelector.value}`;
            }

            if(this.bottomUnitSelector.value === UnitsEnum.auto){
                bottom = 'auto';
                this.bottomPropertyValueInput.disabled = true;
            } else {
                this.bottomPropertyValueInput.disabled = false;
                bottom = `${this.bottomPropertyValueInput.value}${this.bottomUnitSelector.value}`;

            }

            if(this.leftUnitSelector.value === UnitsEnum.auto){
                left = 'auto';
                this.leftPropertyValueInput.disabled = true;
            } else {
                this.leftPropertyValueInput.disabled = false;
                left = `${this.leftPropertyValueInput.value}${this.leftUnitSelector.value}`;
            }
        }

        CssStyleSheet.getRuleStyles(this.domElement.id)[this.type] = [top, right, bottom, left].join(' ')
    }

    private getCurrentProperties(): string[] {
        const properties: string[] = CssStyleSheet.getRuleStyles(this.domElement.id)[this.type].split(' ')
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

        return [top ? top : '0px', right ? right : '0px', bottom ? bottom : '0px', left ? left : '0px'];
    }

    private getUnit(text: string) {
        return text.match(/[a-z]+$/i)[0];
    }
}
