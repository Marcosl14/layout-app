import ClassChangeObserverInterface from '../interfaces/class-change-observer.interface';

import ContainerBuilder from '../models/ContainerBuilder';
import SelectorFromEnumBuilder from '../models/SelectorFromEnumBuilder';
import LabelBuilder from '../models/LabelBuilder';
import InputBuilder from '../models/InputBuilder';

import CssStyleSheet from '../../css-stylesheet/css-stylesheet';
import getUnit from '../functions/get-css-unit';
import colorToHex from '../functions/rgb-to-hex';
import TextareaBuilder from '../models/TextareaBuilder';

import { StyleNameEnum } from '../enums/style-name.enum';
import { InputTypeEnum } from '../enums/input-type.enum';
import { UnitsEnum } from '../enums/units.enum';
import { AlignFlexItemsEnum } from '../enums/align-flex-items.enum';
import { FlexDirectionEnum } from '../enums/flex-direction.enum';
import { DisplayTypesEnum } from '../enums/display-types.enum';
import ButtonBuilder from '../models/ButtonBuilder';


export default class BoxShadowComponent implements ClassChangeObserverInterface {
    private domElement: HTMLElement;
    private container: HTMLDivElement;
    private componentsContainer: HTMLDivElement;
    private shadowBoxTypeContainer: HTMLDivElement;
    private domElementStyleSheet: CSSStyleDeclaration | object;

    private simpleBoxShadowCheckbox: HTMLInputElement;
    private advancedBoxShadowCheckbox: HTMLInputElement;

    private colorInsetContainer: HTMLDivElement;
    private colorInput: HTMLInputElement;
    private insetSelector: HTMLInputElement;

    private horizontalOffsetContainer: HTMLDivElement;
    private horizontalOffsetInput: HTMLInputElement;
    private horizontalOffsetUnitSelector: HTMLSelectElement;

    private verticalOffsetContainer: HTMLDivElement;
    private verticalOffsetInput: HTMLInputElement;
    private verticalOffsetUnitSelector: HTMLSelectElement;

    private blurRadiusContainer: HTMLDivElement;
    private blurRadiusInput: HTMLInputElement;
    private blurRadiusUnitSelector: HTMLSelectElement;

    private spreadRadiusContainer: HTMLDivElement;
    private spreadRadiusInput: HTMLInputElement;
    private spreadRadiusUnitSelector: HTMLSelectElement;

    private advancedEnabled = false;

    private advancedShadowBoxTextArea: HTMLTextAreaElement;
    private advancedShadowBoxContainer: HTMLDivElement;


    constructor(domElement: HTMLElement) {
        this.domElement = domElement;
        this.domElementStyleSheet = CssStyleSheet.getRuleStyles(this.domElement.classList[0]);
        this.getInitialValues();
        this.addComponents();
        this.setBoxShadowValuesAccordingToClass();
    }

    get component() {
        return this.container;
    }

    private addComponents() {
        this.buildShadowBoxTypeContainer();
        this.buildBasicShadowBoxContainers();
        this.buildAdvancedShadowBoxContainer();
        this.buildComponentsContainer();

        this.container = new ContainerBuilder()
            .appendChild(this.componentsContainer)
            .build();
    }

    private buildShadowBoxTypeContainer() {
        this.updateBoxShadowType = this.updateBoxShadowType.bind(this);

        this.simpleBoxShadowCheckbox = new InputBuilder(InputTypeEnum.radio)
            .setName('shadowType')
            .addEventListener('change', this.updateBoxShadowType)
            .build()

        this.advancedBoxShadowCheckbox = new InputBuilder(InputTypeEnum.radio)
            .setName('shadowType')
            .addEventListener('change', this.updateBoxShadowType)
            .build()

        if (this.advancedEnabled) {
            this.advancedBoxShadowCheckbox.checked = true;
        } else {
            this.simpleBoxShadowCheckbox.checked = true;
        }

        this.shadowBoxTypeContainer = new ContainerBuilder()
            .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
            .setStyle(StyleNameEnum['flex-direction'], FlexDirectionEnum.column)
            .setStyle(StyleNameEnum['align-items'], AlignFlexItemsEnum.stretch)
            .setStyle(StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new LabelBuilder()
                .setInnerText('Simple or Advanced Shadow Box')
                .build()
            )
            .appendChild(new ContainerBuilder()
                .appendChild(new LabelBuilder()
                    .setInnerText('Simple ->')
                    .setStyle(StyleNameEnum.margin, '0px 3px 0px 20px')
                    .build()
                )
                .appendChild(this.simpleBoxShadowCheckbox)
                .appendChild(new LabelBuilder()
                    .setInnerText('Advanced ->')
                    .setStyle(StyleNameEnum.margin, '0px 3px 0px 20px')
                    .build()
                )
                .appendChild(this.advancedBoxShadowCheckbox)
                .build()
            )
            .build()
    }

    private buildBasicShadowBoxContainers() {
        this.updateBasicProperty = this.updateBasicProperty.bind(this);

        this.colorInput = new InputBuilder(InputTypeEnum.color)
            .addEventListener('input', this.updateBasicProperty)
            .build()

        this.insetSelector = new InputBuilder(InputTypeEnum.checkbox)
            .addEventListener('input', this.updateBasicProperty)
            .build()

        this.horizontalOffsetInput = new InputBuilder(InputTypeEnum.number)
            .addEventListener('input', this.updateBasicProperty)
            .build()

        this.horizontalOffsetUnitSelector = new SelectorFromEnumBuilder(UnitsEnum)
            .addEventListener('change', this.updateBasicProperty)
            .build()

        this.verticalOffsetInput = new InputBuilder(InputTypeEnum.number)
            .addEventListener('input', this.updateBasicProperty)
            .build()

        this.verticalOffsetUnitSelector = new SelectorFromEnumBuilder(UnitsEnum)
            .addEventListener('change', this.updateBasicProperty)
            .build()

        this.blurRadiusInput = new InputBuilder(InputTypeEnum.number)
            .setMin(0)
            .addEventListener('input', this.updateBasicProperty)
            .build()

        this.blurRadiusUnitSelector = new SelectorFromEnumBuilder(UnitsEnum)
            .addEventListener('change', this.updateBasicProperty)
            .build()

        this.spreadRadiusInput = new InputBuilder(InputTypeEnum.number)
            .setMin(0)
            .addEventListener('input', this.updateBasicProperty)
            .build()

        this.spreadRadiusUnitSelector = new SelectorFromEnumBuilder(UnitsEnum)
            .addEventListener('change', this.updateBasicProperty)
            .build()

        this.colorInsetContainer = new ContainerBuilder()
            .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
            .setStyle(StyleNameEnum['flex-direction'], FlexDirectionEnum.column)
            .setStyle(StyleNameEnum['align-items'], AlignFlexItemsEnum.stretch)
            .setStyle(StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new LabelBuilder()
                .setInnerText('Horizontal Offset')
                .build()
            )
            .appendChild(new ContainerBuilder()
                .appendChild(this.colorInput)
                .appendChild(new LabelBuilder()
                    .setInnerText('Inset ->')
                    .setStyle(StyleNameEnum.margin, '0px 3px 0px 20px')
                    .build()
                )
                .appendChild(this.insetSelector)
                .build()
            )
            .build()

        this.horizontalOffsetContainer = new ContainerBuilder()
            .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
            .setStyle(StyleNameEnum['flex-direction'], FlexDirectionEnum.column)
            .setStyle(StyleNameEnum['align-items'], AlignFlexItemsEnum.stretch)
            .setStyle(StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new LabelBuilder()
                .setInnerText('Horizontal Offset')
                .build()
            )
            .appendChild(new ContainerBuilder()
                .appendChild(this.horizontalOffsetInput)
                .appendChild(this.horizontalOffsetUnitSelector)
                .build()
            )
            .build()

        this.verticalOffsetContainer = new ContainerBuilder()
            .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
            .setStyle(StyleNameEnum['flex-direction'], FlexDirectionEnum.column)
            .setStyle(StyleNameEnum['align-items'], AlignFlexItemsEnum.stretch)
            .setStyle(StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new LabelBuilder()
                .setInnerText('Vertical Offset')
                .build()
            )
            .appendChild(new ContainerBuilder()
                .appendChild(this.verticalOffsetInput)
                .appendChild(this.verticalOffsetUnitSelector)
                .build()
            )
            .build()

        this.blurRadiusContainer = new ContainerBuilder()
            .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
            .setStyle(StyleNameEnum['flex-direction'], FlexDirectionEnum.column)
            .setStyle(StyleNameEnum['align-items'], AlignFlexItemsEnum.stretch)
            .setStyle(StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new LabelBuilder()
                .setInnerText('Blur Radius')
                .build()
            )
            .appendChild(new ContainerBuilder()
                .appendChild(this.blurRadiusInput)
                .appendChild(this.blurRadiusUnitSelector)
                .build()
            )
            .build()

        this.spreadRadiusContainer = new ContainerBuilder()
            .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
            .setStyle(StyleNameEnum['flex-direction'], FlexDirectionEnum.column)
            .setStyle(StyleNameEnum['align-items'], AlignFlexItemsEnum.stretch)
            .setStyle(StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new LabelBuilder()
                .setInnerText('Spread Radius')
                .build()
            )
            .appendChild(new ContainerBuilder()
                .appendChild(this.spreadRadiusInput)
                .appendChild(this.spreadRadiusUnitSelector)
                .build()
            )
            .build()
    }

    private buildComponentsContainer() {
        if (this.advancedEnabled) {
            this.componentsContainer = new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .setStyle(StyleNameEnum['flex-direction'], FlexDirectionEnum.column)
                .setStyle(StyleNameEnum['align-items'], AlignFlexItemsEnum.stretch)
                .appendChild(new LabelBuilder()
                    .setInnerText('Box Shadow')
                    .build()
                )
                .appendChild(this.shadowBoxTypeContainer)
                .appendChild(this.advancedShadowBoxContainer)
                .build()
        } else {
            this.componentsContainer = new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .setStyle(StyleNameEnum['flex-direction'], FlexDirectionEnum.column)
                .setStyle(StyleNameEnum['align-items'], AlignFlexItemsEnum.stretch)
                .appendChild(new LabelBuilder()
                    .setInnerText('Box Shadow')
                    .build()
                )
                .appendChild(this.shadowBoxTypeContainer)
                .appendChild(this.colorInsetContainer)
                .appendChild(this.horizontalOffsetContainer)
                .appendChild(this.verticalOffsetContainer)
                .appendChild(this.blurRadiusContainer)
                .appendChild(this.spreadRadiusContainer)
                .build()
        }
    }

    private buildAdvancedShadowBoxContainer() {
        this.updateAdvancedProperty = this.updateAdvancedProperty.bind(this);

        const advancedBoxShadowAcceptButton = new ButtonBuilder()
            .addEventListener('click', this.updateAdvancedProperty)
            .setInnerText('Accept')
            .build()

        this.advancedShadowBoxTextArea = new TextareaBuilder()
            .setStyle(StyleNameEnum.resize, 'vertical')
            .setStyle(StyleNameEnum.height, '100px')
            .setStyle(StyleNameEnum['font-size'], '10px')
            .build()

        this.advancedShadowBoxContainer = new ContainerBuilder()
            .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
            .setStyle(StyleNameEnum['flex-direction'], FlexDirectionEnum.column)
            .setStyle(StyleNameEnum['align-items'], AlignFlexItemsEnum.stretch)
            .setStyle(StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new LabelBuilder()
                .setInnerText('Advanced Box Shadow')
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .setStyle(StyleNameEnum['flex-direction'], FlexDirectionEnum.column)
                .setStyle(StyleNameEnum['align-items'], AlignFlexItemsEnum.stretch)
                .appendChild(this.advancedShadowBoxTextArea)
                .appendChild(advancedBoxShadowAcceptButton)
                .build()
            )
            .build()
    }

    private setBoxShadowValuesAccordingToClass() {
        const initialValues = this.getInitialValues();

        if (initialValues.inset !== undefined) {
            this.insetSelector.checked = true;
        }

        this.colorInput.value = colorToHex(initialValues.color);
        this.horizontalOffsetInput.value = `${parseInt(initialValues.horizontalOffset) || 0}`;
        this.horizontalOffsetUnitSelector.value = getUnit(initialValues.horizontalOffset);
        this.verticalOffsetInput.value = `${parseInt(initialValues.verticalOffset) || 0}`;
        this.verticalOffsetUnitSelector.value = getUnit(initialValues.verticalOffset);
        this.blurRadiusInput.value = `${parseInt(initialValues.blurRadius) || 0}`;
        this.blurRadiusUnitSelector.value = getUnit(initialValues.blurRadius);
        this.spreadRadiusInput.value = `${parseInt(initialValues.spreadRadius) || 0}`;
        this.spreadRadiusUnitSelector.value = getUnit(initialValues.spreadRadius);

        this.advancedShadowBoxTextArea.value = this.getBoxShadowValues().join(',\n');
    }

    private updateBasicProperty() {
        if (this.horizontalOffsetInput.value === '0'
            && this.verticalOffsetInput.value === '0'
            && this.blurRadiusInput.value === '0'
            && this.spreadRadiusInput.value === '0'
        ) {
            this.domElementStyleSheet['box-shadow'] = '';
            return;
        }

        const inset = this.insetSelector.checked ? 'inset' : '';
        const color = this.colorInput.value;
        const horizontalOffset = this.horizontalOffsetInput.value + this.horizontalOffsetUnitSelector.value;
        const verticalOffset = this.verticalOffsetInput.value + this.verticalOffsetUnitSelector.value;
        const blurRadius = this.blurRadiusInput.value + this.blurRadiusUnitSelector.value;
        const spreadRadius = this.spreadRadiusInput.value + this.spreadRadiusUnitSelector.value;

        const boxShadowValue = `${horizontalOffset} ${verticalOffset} ${blurRadius} ${spreadRadius} ${color} ${inset}`

        this.domElementStyleSheet['box-shadow'] = boxShadowValue;
    }

    private updateAdvancedProperty() {
        this.domElementStyleSheet['box-shadow'] = this.advancedShadowBoxTextArea.value;
    }

    private updateBoxShadowType() {
        this.domElementStyleSheet['box-shadow'] = '';

        if (this.advancedBoxShadowCheckbox.checked) {
            this.componentsContainer.removeChild(this.colorInsetContainer);
            this.componentsContainer.removeChild(this.horizontalOffsetContainer);
            this.componentsContainer.removeChild(this.verticalOffsetContainer);
            this.componentsContainer.removeChild(this.blurRadiusContainer);
            this.componentsContainer.removeChild(this.spreadRadiusContainer);

            this.componentsContainer.appendChild(this.advancedShadowBoxContainer);
        } else {
            this.componentsContainer.removeChild(this.advancedShadowBoxContainer);

            this.componentsContainer.appendChild(this.colorInsetContainer);
            this.componentsContainer.appendChild(this.horizontalOffsetContainer);
            this.componentsContainer.appendChild(this.verticalOffsetContainer);
            this.componentsContainer.appendChild(this.blurRadiusContainer);
            this.componentsContainer.appendChild(this.spreadRadiusContainer);
        }
    }

    private getInitialValues() {
        const boxShadowValues = this.getBoxShadowValues();

        let color;
        let sizesArr = [];

        if (boxShadowValues.length > 1) {
            this.advancedEnabled = true;
        }

        if (boxShadowValues[0].includes('rgb')) {
            const initialIndexOfRGB = boxShadowValues[0].indexOf('rgb');
            const finalIndexOfRGB = boxShadowValues[0].indexOf(')')

            color = boxShadowValues[0].slice(initialIndexOfRGB, finalIndexOfRGB + 1)

            boxShadowValues[0] = boxShadowValues[0].replace(color, '');
        }

        const boxShadowArr = boxShadowValues[0].split(' ');

        const inset = boxShadowArr.find((ele) => ele === 'inset')

        sizesArr = boxShadowArr.filter((ele) => !isNaN(parseInt(ele)));

        return {
            color,
            inset,
            horizontalOffset: sizesArr[0],
            verticalOffset: sizesArr[1],
            blurRadius: sizesArr[2],
            spreadRadius: sizesArr[3],
        }
    }

    private getBoxShadowValues(): string[] {
        const boxShadowString = this.domElementStyleSheet['box-shadow'];

        if(boxShadowString){
            // REGEX: To obtain multiple box shadow styles separated by a comma. Without taking care of rgb( , , )
            const regex = /([^,(]+?\([^)]+\)[^,]*|[^,]+)/g;

            return boxShadowString
                .match(regex)
                .map(el => el.trim())
                .filter(el => el !== '' || el !== null || el !== undefined);
        }

        return [''];
    }

    public classNameUpdated(name: string) {
        this.domElementStyleSheet = CssStyleSheet.getRuleStyles(name);
        this.getInitialValues();
        this.setBoxShadowValuesAccordingToClass();
    }
}
