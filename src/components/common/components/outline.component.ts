import ClassChangeObserverInterface from '../interfaces/class-change-observer.interface';

import ContainerBuilder from '../models/ContainerBuilder';
import InputBuilder from '../models/InputBuilder';
import LabelBuilder from '../models/LabelBuilder';
import SelectorFromEnumBuilder from '../models/SelectorFromEnumBuilder';

import CssStyleSheet from '../../css-stylesheet/css-stylesheet';
import getUnit from '../functions/get-css-unit';
import colorToHex from '../functions/rgb-to-hex';

import { InputTypeEnum } from '../enums/input-type.enum';
import { UnitsEnum } from '../enums/units.enum';
import { StyleNameEnum } from '../enums/style-name.enum';
import { DisplayTypesEnum } from '../enums/display-types.enum';
import { OutlineStyleEnum } from '../enums/outline-style.enum';

export default class OutlineComponent implements ClassChangeObserverInterface {
    private domElement: HTMLElement;
    private container: HTMLDivElement;
    private domElementStyleSheet: CSSStyleDeclaration | object;

    private outlineSyleSelector: SelectorFromEnumBuilder;

    private outlineWidthInput: InputBuilder;
    private outlineWidthUnitSelector: SelectorFromEnumBuilder;

    private outlineColorInput: InputBuilder;

    private outlineOffsetInput: InputBuilder;
    private outlineOffsetUnitSelector: SelectorFromEnumBuilder;

    constructor(domElement: HTMLElement) {
        this.domElement = domElement;
        this.domElementStyleSheet = CssStyleSheet.getRuleStyles(this.domElement.classList[0]);
        this.addComponents();
    }

    get component() {
        return this.container;
    }

    private addComponents() {
        this.updateOutlineWidth = this.updateOutlineWidth.bind(this);
        this.updateOutlineStyle = this.updateOutlineStyle.bind(this);
        this.updateOutlineColor = this.updateOutlineColor.bind(this);
        this.updateOutlineOffset = this.updateOutlineOffset.bind(this);

        this.buildAllComponents();
        this.setInitialValuesAccordingToClass();

        const outlineStyleContainer = new ContainerBuilder()
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .appendChild(new LabelBuilder()
                    .setInnerText('Outline Style')
                    .build()
                )
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .appendChild(this.outlineSyleSelector.build())
                .build()
            )
            .build()

        const outlineWidthContainer = new ContainerBuilder()
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .appendChild(new LabelBuilder()
                    .setInnerText('Outline Width')
                    .build()
                )
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .appendChild(this.outlineWidthInput.build())
                .appendChild(this.outlineWidthUnitSelector.build())
                .build()
            )
            .build()

        const outlineColorContainer = new ContainerBuilder()
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .appendChild(new LabelBuilder()
                    .setInnerText('Outline Color')
                    .build()
                )
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .appendChild(this.outlineColorInput.build())
                .build()
            )
            .build()

        const outlineOffsetContainer = new ContainerBuilder()
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .appendChild(new LabelBuilder()
                    .setInnerText('Outline Offset')
                    .build()
                )
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .appendChild(this.outlineOffsetInput.build())
                .appendChild(this.outlineOffsetUnitSelector.build())
                .build()
            )
            .build()

        this.container = new ContainerBuilder()
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .appendChild(new LabelBuilder()
                    .setInnerText('Outline')
                    .build()
                )
                .build()
            )
            .appendChild(outlineStyleContainer)
            .appendChild(outlineWidthContainer)
            .appendChild(outlineColorContainer)
            .appendChild(outlineOffsetContainer)
            .build()
    }

    private buildAllComponents() {
        this.outlineSyleSelector = new SelectorFromEnumBuilder(OutlineStyleEnum)
            .addEventListener('change', this.updateOutlineStyle)

        this.outlineWidthInput = new InputBuilder(InputTypeEnum.number)
            .setMin(0)
            .addEventListener('input', this.updateOutlineWidth)

        this.outlineWidthUnitSelector = new SelectorFromEnumBuilder(UnitsEnum)
            .addEventListener('change', this.updateOutlineWidth)

        this.outlineColorInput = new InputBuilder(InputTypeEnum.color)
            .addEventListener('input', this.updateOutlineColor)

        this.outlineOffsetInput = new InputBuilder(InputTypeEnum.number)
            .setMin(0)
            .addEventListener('input', this.updateOutlineOffset)

        this.outlineOffsetUnitSelector = new SelectorFromEnumBuilder(UnitsEnum)
            .addEventListener('change', this.updateOutlineOffset)
    }

    private setInitialValuesAccordingToClass() {
        this.setOutlineStyleInitialValue();
        this.setOutlineWidthInitialValue();
        this.setOutlineColorInitialValue();
        this.setOutlineOffsetInitialValue();
    }

    private setOutlineWidthInitialValue() {
        const width = this.domElementStyleSheet['outline-width'];
        this.outlineWidthInput.setValue(`${parseInt(width) || 0}`);
        this.outlineWidthUnitSelector.setValue(getUnit(width));
    }

    private setOutlineStyleInitialValue() {
        const style = this.domElementStyleSheet['outline-style'];
        this.outlineSyleSelector.setValue(style !== '' ? style : OutlineStyleEnum.none);
    }

    private setOutlineColorInitialValue() {
        this.outlineColorInput.setValue(colorToHex(this.domElementStyleSheet['outline-color']));
    }

    private setOutlineOffsetInitialValue() {
        const offset = this.domElementStyleSheet['outline-offset'];
        this.outlineOffsetInput.setValue(`${parseInt(offset) || 0}`);
        this.outlineOffsetUnitSelector.setValue(getUnit(offset));
    }

    private updateOutlineStyle() {
        this.domElementStyleSheet['outline-style'] = this.outlineSyleSelector.getValue();
        this.setInitialValuesAccordingToClass();
    }

    private updateOutlineWidth() {
        if ((this.outlineWidthInput.getValue() === '0') && this.domElementStyleSheet instanceof CSSStyleDeclaration) {
            this.domElementStyleSheet.removeProperty('outline-width');
            return;
        }
        this.domElementStyleSheet['outline-width'] =
            `${this.outlineWidthInput.getValue()}${this.outlineWidthUnitSelector.getValue()}`;
    }

    private updateOutlineColor() {
        this.domElementStyleSheet['outline-color'] = this.outlineColorInput.getValue();
    }

    private updateOutlineOffset() {
        if ((this.outlineOffsetInput.getValue() === '0') && this.domElementStyleSheet instanceof CSSStyleDeclaration) {
            this.domElementStyleSheet.removeProperty('outline-offset');
            return;
        }
        this.domElementStyleSheet['outline-offset'] =
            `${this.outlineOffsetInput.getValue()}${this.outlineWidthUnitSelector.getValue()}`;
    }

    public classNameUpdated(name: string) {
        this.domElementStyleSheet = CssStyleSheet.getRuleStyles(name);
        this.setInitialValuesAccordingToClass();
    }
}
