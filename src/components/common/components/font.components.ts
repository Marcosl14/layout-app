import ClassChangeObserverInterface from '../interfaces/class-change-observer.interface';

import ContainerBuilder from '../models/ContainerBuilder';
import InputBuilder from '../models/InputBuilder';
import LabelBuilder from '../models/LabelBuilder';
import SelectorFromEnumBuilder from '../models/SelectorFromEnumBuilder';
import ButtonBuilder from '../models/ButtonBuilder';

import CssStyleSheet from '../../css-stylesheet/css-stylesheet';
import getUnit from '../functions/get-css-unit';
import colorToHex from '../functions/rgb-to-hex';

import { InputTypeEnum } from '../enums/input-type.enum';
import { UnitsEnum } from '../enums/units.enum';
import { StyleNameEnum } from '../enums/style-name.enum';
import { DisplayTypesEnum } from '../enums/display-types.enum';
import { FontsEnum } from '../enums/fonts.enum';
import { FontStylesEnum } from '../enums/font-styles.enum';
import { FontWeightEnum } from '../enums/font-weight.enum';
import { FontVariantEnum } from '../enums/font-variant.enum';

// TODO: ver si se pueden agregar fuentes de Google, por ejemplo... como hacerlo...

export default class FontComponent implements ClassChangeObserverInterface {
    private domElement: HTMLElement;
    private container: HTMLDivElement;
    private domElementStyleSheet: CSSStyleDeclaration;

    private currentFontFamiliesArray: string[] = [];
    private fontSelector: HTMLSelectElement;
    private currentFontsElementsContainer: ContainerBuilder;
    private currentFontsContainer: ContainerBuilder;

    private fontSizeInput: HTMLInputElement;
    private fontUnitSelector: HTMLSelectElement;

    private fontStyleSelector: HTMLSelectElement;
    private fontWeightSelector: HTMLSelectElement;
    private fontVariantSelector: HTMLSelectElement;
    private fontColorInput: HTMLInputElement;

    constructor(domElement: HTMLElement) {
        this.domElement = domElement;
        this.domElementStyleSheet = CssStyleSheet.getRuleStyles(this.domElement.classList[0]);
        this.addComponents();
    }

    get component() {
        return this.container;
    }

    private addComponents() {
        this.addFont = this.addFont.bind(this);
        this.removeFont = this.removeFont.bind(this);
        this.moveFontToTheFront = this.moveFontToTheFront.bind(this);
        this.moveFontBehind = this.moveFontBehind.bind(this);

        this.updateFontSize = this.updateFontSize.bind(this);
        this.updateFontStyle = this.updateFontStyle.bind(this);
        this.updateFontWeight = this.updateFontWeight.bind(this);
        this.updateFontVarian = this.updateFontVarian.bind(this);
        this.updateFontColor = this.updateFontColor.bind(this);

        this.buildAllComponents();
        this.setInitialValuesAccordingToClass();

        const addFontButton = new ButtonBuilder()
            .setInnerText('Add')
            .addEventListener('click', this.addFont)
            .build()

        const fontFamilyComponentsContainer = new ContainerBuilder()
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .appendChild(new LabelBuilder()
                    .setInnerText('Add Font Family')
                    .build()
                )
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(this.fontSelector)
                .appendChild(addFontButton)
                .build()
            )
            .build()

        this.currentFontsContainer = this.currentFontsComponentsContainer();

        const fontSizeContainer = new ContainerBuilder()
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .appendChild(new LabelBuilder()
                    .setInnerText('Font Size')
                    .build()
                )
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(this.fontSizeInput)
                .appendChild(this.fontUnitSelector)
                .build()
            )
            .build()

        const fontStyleContainer = new ContainerBuilder()
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .appendChild(new LabelBuilder()
                    .setInnerText('Font Style')
                    .build()
                )
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(this.fontStyleSelector)
                .build()
            )
            .build()

        const fontWeightContainer = new ContainerBuilder()
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .appendChild(new LabelBuilder()
                    .setInnerText('Font Weight')
                    .build()
                )
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(this.fontWeightSelector)
                .build()
            )
            .build()

        const fontVariantContainer = new ContainerBuilder()
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .appendChild(new LabelBuilder()
                    .setInnerText('Font Variant')
                    .build()
                )
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(this.fontVariantSelector)
                .build()
            )
            .build()

        const fontColorContainer = new ContainerBuilder()
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .appendChild(new LabelBuilder()
                    .setInnerText('Font Color')
                    .build()
                )
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(this.fontColorInput)
                .build()
            )
            .build()

        this.container = new ContainerBuilder()
            .setStyle(StyleNameEnum.border, '1px solid #4CAF50')
            .setStyle(StyleNameEnum.padding, '3px')
            .setStyle(StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new LabelBuilder()
                .setInnerText('Font')
                .build()
            )
            .appendChild(fontFamilyComponentsContainer)
            .appendChildIfDefined(this.currentFontsContainer.build())
            .appendChild(fontSizeContainer)
            .appendChild(fontStyleContainer)
            .appendChild(fontWeightContainer)
            .appendChild(fontVariantContainer)
            .appendChild(fontColorContainer)
            .build()
    }

    private buildAllComponents() {
        this.fontSelector = new SelectorFromEnumBuilder(FontsEnum)
            .selectOption(FontsEnum.Default)
            .build();

        this.currentFontsElementsContainer = new ContainerBuilder();

        this.fontSizeInput = new InputBuilder(InputTypeEnum.number)
            .setMin(0)
            .addEventListener('input', this.updateFontSize)
            .build();

        this.fontUnitSelector = new SelectorFromEnumBuilder(UnitsEnum)
            .addEventListener('change', this.updateFontSize)
            .build();

        this.fontStyleSelector = new SelectorFromEnumBuilder(FontStylesEnum)
            .addEventListener('change', this.updateFontStyle)
            .build();

        this.fontWeightSelector = new SelectorFromEnumBuilder(FontWeightEnum)
            .addEventListener('change', this.updateFontWeight)
            .build();

        this.fontVariantSelector = new SelectorFromEnumBuilder(FontVariantEnum)
            .addEventListener('change', this.updateFontVarian)
            .build();

        this.fontColorInput = new InputBuilder(InputTypeEnum.color)
            .addEventListener('input', this.updateFontColor)
            .build()
    }

    private setInitialValuesAccordingToClass() {
        this.setFontFamilyValueAccordingToClass();
        this.fillContainerAccordingToInitialValues();

        this.setFontSizeValueAccordingToClass();
        this.setFontStyleValueAccordingToClass();
        this.setFontWeightValueAccordingToClass();
        this.setFontVariantValueAccordingToClass();
        this.setFontColorValueAccordingToClass();
    }

    private setFontFamilyValueAccordingToClass() {
        const fonts = this.domElementStyleSheet['font-family'];
        if (fonts) {
            this.currentFontFamiliesArray = fonts.split(', ');
        }
    }

    private fillContainerAccordingToInitialValues() {
        if (this.currentFontFamiliesArray) {
            this.currentFontFamiliesArray.forEach((font) => {
                this.currentFontsElementsContainer.appendChild(this.fontFamilyComponent(font.trim()));
            })
        }
    }

    private setFontSizeValueAccordingToClass() {
        const fontSize = this.domElementStyleSheet['font-size'];
        this.fontSizeInput.value = `${parseInt(fontSize) || 1}`;
        this.fontUnitSelector.value = getUnit(fontSize, UnitsEnum.em);
    }

    private setFontStyleValueAccordingToClass() {
        const fontStyle = this.domElementStyleSheet['font-style'];
        this.fontStyleSelector.value = fontStyle === '' ? 'normal' : fontStyle;
    }

    private setFontWeightValueAccordingToClass() {
        const fontWeight = this.domElementStyleSheet['font-weight'];
        this.fontWeightSelector.value = fontWeight === '' ? 'normal' : fontWeight;
    }

    private setFontVariantValueAccordingToClass() {
        const fontVariant = this.domElementStyleSheet['font-variant'];
        this.fontVariantSelector.value = fontVariant === '' ? 'normal' : fontVariant;
    }

    private setFontColorValueAccordingToClass() {
        const fontColor = this.domElementStyleSheet['color'];
        this.fontColorInput.value = colorToHex(fontColor);
    }

    private fontFamilyComponent(font: string): HTMLDivElement {
        return new ContainerBuilder()
            .setName(font)
            .setStyle(StyleNameEnum.display, DisplayTypesEnum.grid)
            .setStyle(StyleNameEnum['grid-template-columns'], '2fr 1fr 1fr 1fr')
            .appendChild(new LabelBuilder()
                .setInnerText(font)
                .build()
            )
            .appendChild(new ButtonBuilder()
                .setInnerText('Remove')
                .setName(font)
                .addEventListener('click', this.removeFont)
                .build()
            )
            .appendChild(new ButtonBuilder()
                .setInnerText('↑')
                .setName(font)
                .addEventListener('click', this.moveFontToTheFront)
                .build()
            )
            .appendChild(new ButtonBuilder()
                .setInnerText('↓')
                .setName(font)
                .addEventListener('click', this.moveFontBehind)
                .build()
            )
            .build()
    }

    private currentFontsComponentsContainer() {
        const container = new ContainerBuilder()
                .appendChild(new ContainerBuilder()
                    .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                    .appendChild(new LabelBuilder()
                        .setInnerText('Current Component Fonts')
                        .build()
                    )
                    .build()
                )
                .appendChild(new ContainerBuilder()
                    .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                    .appendChild(this.currentFontsElementsContainer.build())
                    .build()
                )

        if(this.currentFontFamiliesArray.length > 0){
            container.setStyle(StyleNameEnum.display, 'block')
        } else {
            container.setStyle(StyleNameEnum.display, 'none')
        }

        return container;
    }

    private addFont() {
        if(!this.currentFontFamiliesArray.includes(this.fontSelector.value)) {
            this.currentFontFamiliesArray.push(this.fontSelector.value)

            this.domElementStyleSheet['font-family'] = this.currentFontFamiliesArray.join(', ');

            this.currentFontsElementsContainer.appendChild(this.fontFamilyComponent(this.fontSelector.value));

            this.currentFontsContainer.setStyle(StyleNameEnum.display, 'block');
        }
    }

    private removeFont(event: MouseEvent) {
        const fontName = event.target['name'];

        const fontIndex = this.currentFontFamiliesArray.findIndex((font) => font === fontName);

        this.currentFontFamiliesArray.splice(fontIndex, 1);

        this.domElementStyleSheet['font-family'] = this.currentFontFamiliesArray.join(', ');

        this.currentFontsElementsContainer.removeChildNodeByName(fontName);

        if(this.currentFontsElementsContainer.getAllChilds().length === 0) {
            this.currentFontsContainer.setStyle(StyleNameEnum.display, 'none')
        }
    }

    private moveFontToTheFront(event: MouseEvent) {
        const fontName = event.target['name'];

        const fontIndex = this.currentFontFamiliesArray.findIndex((font) => font === fontName);

        const selectedElement = this.currentFontFamiliesArray.splice(fontIndex, 1)[0];

        this.currentFontFamiliesArray.splice(fontIndex - 1, 0, selectedElement);

        this.domElementStyleSheet['font-family'] = this.currentFontFamiliesArray.map((font) => font).join(', ');

        this.currentFontsElementsContainer.mooveChildUpperPositionByName(fontName);
    }

    private moveFontBehind(event: MouseEvent) {
        const fontName = event.target['name'];

        const fontIndex = this.currentFontFamiliesArray.findIndex((font) => font === fontName);

        const selectedElement = this.currentFontFamiliesArray.splice(fontIndex, 1)[0];

        this.currentFontFamiliesArray.splice(fontIndex + 1, 0, selectedElement);

        this.domElementStyleSheet['font-family'] = this.currentFontFamiliesArray.map((font) => font).join(', ');

        this.currentFontsElementsContainer.mooveChildLowerPositionByName(fontName);
    }

    private updateFontSize() {
        this.domElementStyleSheet['font-size'] = `${this.fontSizeInput.value}${this.fontUnitSelector.value}`
    }

    private updateFontStyle() {
        this.domElementStyleSheet['font-style'] = this.fontStyleSelector.value;
    }

    private updateFontWeight() {
        this.domElementStyleSheet['font-weight'] = this.fontWeightSelector.value;
    }

    private updateFontVarian() {
        this.domElementStyleSheet['font-variant'] = this.fontVariantSelector.value;
    }

    private updateFontColor() {
        this.domElementStyleSheet['color'] = this.fontColorInput.value;
    }

    public classNameUpdated(name: string) {
        this.domElementStyleSheet = CssStyleSheet.getRuleStyles(name);
        this.setInitialValuesAccordingToClass();
    }
}
