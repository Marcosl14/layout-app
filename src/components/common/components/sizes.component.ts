import ClassChangeObserverInterface from '../interfaces/class-change-observer.interface';

import ContainerBuilder from '../models/ContainerBuilder';
import InputBuilder from '../models/InputBuilder';
import LabelBuilder from '../models/LabelBuilder';
import SelectorFromEnumBuilder from '../models/SelectorFromEnumBuilder';

import CssStyleSheet from '../../css-stylesheet/css-stylesheet';
import getUnit from '../functions/get-css-unit';

import { InputTypeEnum } from '../enums/input-type.enum';
import { UnitsEnum } from '../enums/units.enum';
import { StyleNameEnum } from '../enums/style-name.enum';
import { DisplayTypesEnum } from '../enums/display-types.enum';

export default class SizesComponent implements ClassChangeObserverInterface {
    private domElement: HTMLElement;
    private container: HTMLDivElement;
    private domElementStyleSheet: CSSStyleDeclaration | object;

    private widthSizeInput: HTMLInputElement;
    private widthUnitSelector: HTMLSelectElement;

    private heightSizeInput: HTMLInputElement;
    private heightSizeSelector: HTMLSelectElement;

    constructor(domElement: HTMLElement) {
        this.domElement = domElement;
        this.domElementStyleSheet = CssStyleSheet.getRuleStyles(this.domElement.classList[0]);
        this.addComponents();
    }

    get component() {
        return this.container;
    }

    private addComponents() {
        this.updateWidth = this.updateWidth.bind(this);
        this.updateHeight = this.updateHeight.bind(this);


        this.buildAllComponents();
        this.setInitialValuesAccordingToClass();

        const widthComponentsContainer = this.buildSizeContainer(
            'Width',
            this.widthSizeInput,
            this.widthUnitSelector
        );

        const heightComponentsContainer = this.buildSizeContainer(
            'Height',
            this.heightSizeInput,
            this.heightSizeSelector
        );

        this.container = new ContainerBuilder()
            .setStyle(StyleNameEnum.border, '1px solid #4CAF50')
            .setStyle(StyleNameEnum.padding, '3px')
            .setStyle(StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new LabelBuilder()
                .setInnerText('Sizes')
                .build()
            )
            .appendChild(widthComponentsContainer)
            .appendChild(heightComponentsContainer)
            .build()
    }

    private buildSizeContainer(
        label: string,
        inputComponent: HTMLInputElement,
        selectorComponent: HTMLSelectElement) {
        return new ContainerBuilder()
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .appendChild(new LabelBuilder()
                    .setInnerText(label)
                    .build()
                )
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(inputComponent)
                .appendChild(selectorComponent)
                .build()
            )
            .build()
    }

    private buildAllComponents() {
        this.widthSizeInput = this.buildInput(InputTypeEnum.number, this.updateWidth);
        this.heightSizeInput = this.buildInput(InputTypeEnum.number, this.updateHeight);

        this.widthUnitSelector = this.buildSelector(this.updateWidth);
        this.heightSizeSelector = this.buildSelector(this.updateHeight);
    }

    private setInitialValuesAccordingToClass() {
        this.setWidthValueAccordingToClass();
        this.setHeightValueAccordingToClass();
    }

    private setWidthValueAccordingToClass() {
        const width = this.domElementStyleSheet['width'];
        this.widthSizeInput.value = `${parseInt(width) || 0}`;
        this.widthUnitSelector.value = getUnit(width);
    }

    private setHeightValueAccordingToClass() {
        const height = this.domElementStyleSheet['height'];
        this.heightSizeInput.value = `${parseInt(height) || 0}`;
        this.heightSizeSelector.value = getUnit(height);
    }

    private buildInput(InputTypeEnum: InputTypeEnum, callback: {(): void}) {
        return new InputBuilder(InputTypeEnum)
            .setMin(0)
            .addEventListener('input', callback)
            .build();
    }

    private buildSelector(callback: {(): void}) {
        return new SelectorFromEnumBuilder(UnitsEnum)
            .addEventListener('change', callback)
            .build()
    }

    private updateWidth() {
        if(this.widthSizeInput.value === '0' && this.domElementStyleSheet instanceof CSSStyleDeclaration){
            this.domElementStyleSheet.removeProperty('width');
            return;
        }
        this.domElementStyleSheet['width'] = `${this.widthSizeInput.value}${this.widthUnitSelector.value}`;
    }

    private updateHeight() {
        if(this.heightSizeInput.value === '0' && this.domElementStyleSheet instanceof CSSStyleDeclaration){
            this.domElementStyleSheet.removeProperty('height');
            return;
        }
        this.domElementStyleSheet['height'] = `${this.heightSizeInput.value}${this.heightSizeSelector.value}`;
    }

    public classNameUpdated(name: string) {
        this.domElementStyleSheet = CssStyleSheet.getRuleStyles(name);
        this.setInitialValuesAccordingToClass();
    }
}
