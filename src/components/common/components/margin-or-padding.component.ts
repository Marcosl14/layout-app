import ClassChangeObserverInterface from '../interfaces/class-change-observer.interface';

import ContainerBuilder from '../models/ContainerBuilder';
import InputBuilder from '../models/InputBuilder';
import LabelBuilder from '../models/LabelBuilder';
import SelectorFromEnumBuilder from '../models/SelectorFromEnumBuilder';

import { InputTypeEnum } from '../enums/input-type.enum';
import { UnitsEnum } from '../enums/units.enum';
import { StyleNameEnum } from '../enums/style-name.enum';

import CssStyleSheet from '../../css-stylesheet/css-stylesheet';

import capitalizeFirstLetters from '../functions/first-letters-capitalized';
import getUnit from '../functions/get-css-unit';

export default class MarginOrPaddingComponent implements ClassChangeObserverInterface {
    private type;
    private domElement: HTMLElement;
    private container: HTMLDivElement;
    private domElementStyleSheet: CSSStyleDeclaration;

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
        this.domElementStyleSheet = CssStyleSheet.getRuleStyles(this.domElement.classList[0])
        this.addComponents();
        this.setValuesAccordingToClass();
        this.updateProperty()
    }

    get component() {
        return this.container;
    }

    private addComponents() {
        // TODO: falta agregar el !important y quizas los inherit y no se si habra mas propiedades
        // quizas todo eso deba estar en el selector de la unidad...

        this.updateProperty = this.updateProperty.bind(this);

        this.selectAllCheckBox = new InputBuilder(InputTypeEnum.checkbox)
            .addEventListener('change', this.updateProperty)
            .build()

        const selectAllContainer = new ContainerBuilder()
            .appendChild(new LabelBuilder()
                .setInnerText('Select All')
                .build()
            )
            .appendChild(this.selectAllCheckBox)
            .build()

        this.topPropertyValueInput = new InputBuilder(InputTypeEnum.number)
            .addEventListener('input', this.updateProperty)
            .build();
        this.rigthPropertyValueInput = new InputBuilder(InputTypeEnum.number)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('input', this.updateProperty)
            .build();
        this.bottomPropertyValueInput = new InputBuilder(InputTypeEnum.number)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('input', this.updateProperty)
            .build();
        this.leftPropertyValueInput = new InputBuilder(InputTypeEnum.number)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('input', this.updateProperty)
            .build();

        this.topUnitSelector = new SelectorFromEnumBuilder(UnitsEnum)
            .addEventListener('change', this.updateProperty)
            .build()
        this.bottomUnitSelector = new SelectorFromEnumBuilder(UnitsEnum)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('change', this.updateProperty)
            .build()
        this.rightUnitSelector = new SelectorFromEnumBuilder(UnitsEnum)
            .disabled(this.selectAllCheckBox.checked)
            .addEventListener('change', this.updateProperty)
            .build()
        this.leftUnitSelector = new SelectorFromEnumBuilder(UnitsEnum)
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
                .setInnerText(`${capitalizeFirstLetters(this.type, ' ', ' ')} Selector`)
                .build()
            )
            .appendChild(selectAllContainer)
            .appendChild(inputValuesContainer)
            .build()
    }

    private updateProperty() {
        let {top, right, bottom, left} = this.getCurrentProperties();

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

                this.topPropertyValueInput.value = '';
                this.rigthPropertyValueInput.value = '';
                this.bottomPropertyValueInput.value = '';
                this.leftPropertyValueInput.value = '';
            } else {
                this.topPropertyValueInput.disabled = false;
                top = `${this.topPropertyValueInput.value}${this.topUnitSelector.value}`;
                right = `${this.topPropertyValueInput.value}${this.topUnitSelector.value}`;
                bottom = `${this.topPropertyValueInput.value}${this.topUnitSelector.value}`;
                left = `${this.topPropertyValueInput.value}${this.topUnitSelector.value}`;

                this.rigthPropertyValueInput.value = this.topPropertyValueInput.value;
                this.bottomPropertyValueInput.value = this.topPropertyValueInput.value;
                this.leftPropertyValueInput.value = this.topPropertyValueInput.value;

                if(parseInt(this.topPropertyValueInput.value) === 0){
                    this.domElementStyleSheet[this.type] = '';
                    return;
                }
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

        this.domElementStyleSheet[this.type] = [top, right, bottom, left].join(' ');
    }

    private setValuesAccordingToClass() {
        const {top, right, bottom, left, allEqual} = this.getCurrentProperties();

        this.selectAllCheckBox.checked = allEqual;

        this.topPropertyValueInput.value = `${parseInt(top)}`;
        this.rigthPropertyValueInput.value = `${parseInt(right)}`;
        this.bottomPropertyValueInput.value = `${parseInt(bottom)}`;
        this.leftPropertyValueInput.value = `${parseInt(left)}`;

        this.topUnitSelector.value = getUnit(top);
        this.bottomUnitSelector.value = getUnit(bottom);
        this.rightUnitSelector.value = getUnit(right);
        this.leftUnitSelector.value = getUnit(left);
    }

    private getCurrentProperties(): StylesReturnObjectInterface {
        const top = this.domElementStyleSheet[`${this.type}-top`];
        const right = this.domElementStyleSheet[`${this.type}-right`];
        const bottom = this.domElementStyleSheet[`${this.type}-bottom`];
        const left = this.domElementStyleSheet[`${this.type}-left`];

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
        this.setValuesAccordingToClass();
        this.updateProperty();
    }
}

interface StylesReturnObjectInterface {
    top: string,
    right: string,
    bottom: string,
    left: string,
    allEqual: boolean,
}
