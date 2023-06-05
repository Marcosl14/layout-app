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
import { PositionTypesEnum } from '../enums/position.enum';
import { FlexDirectionEnum } from '../enums/flex-direction.enum';
import { AlignFlexItemsEnum } from '../enums/align-flex-items.enum';

export default class PositionComponent implements ClassChangeObserverInterface {
    private domElement: HTMLElement;
    private container: HTMLDivElement;
    private domElementStyleSheet: CSSStyleDeclaration | object;

    private positionSelector: SelectorFromEnumBuilder;

    private topPositionInput: InputBuilder;
    private topPositionSelector: SelectorFromEnumBuilder;

    private rightPositionInput: InputBuilder;
    private rightPositionSelector: SelectorFromEnumBuilder;

    private bottomPositionInput: InputBuilder;
    private bottomPositionSelector: SelectorFromEnumBuilder;

    private leftPositionInput: InputBuilder;
    private leftPositionSelector: SelectorFromEnumBuilder;

    private zIndexInput: InputBuilder;

    constructor(domElement: HTMLElement) {
        this.domElement = domElement;
        this.domElementStyleSheet = CssStyleSheet.getRuleStyles(this.domElement.classList[0]);
        this.addComponents();
    }

    get component() {
        return this.container;
    }

    private addComponents() {
        this.setPosition = this.setPosition.bind(this);
        this.setTopValue = this.setTopValue.bind(this);
        this.setRightValue = this.setRightValue.bind(this);
        this.setBottomValue = this.setBottomValue.bind(this);
        this.setLeftValue = this.setLeftValue.bind(this);
        this.setZindexValue = this.setZindexValue.bind(this);

        this.buildAllComponents();
        this.setInitialValuesAccordingToClass();

        const positionTypeSelectorContainer = new ContainerBuilder()
            .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
            .setStyle(StyleNameEnum['flex-direction'], FlexDirectionEnum.column)
            .setStyle(StyleNameEnum['align-items'], AlignFlexItemsEnum.stretch)
            .setStyle(StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new LabelBuilder()
                .setInnerText('Position Type')
                .build()
            )
            .appendChild(this.positionSelector.build())
            .build()

        const positionTopValueContainer = new ContainerBuilder()
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .appendChild(new LabelBuilder()
                    .setInnerText('Top Position Value')
                    .build()
                )
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(this.topPositionInput.build())
                .appendChild(this.topPositionSelector.build())
                .build()
            )
            .build()

        const positionRightValueContainer = new ContainerBuilder()
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .appendChild(new LabelBuilder()
                    .setInnerText('Right Position Value')
                    .build()
                )
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(this.rightPositionInput.build())
                .appendChild(this.rightPositionSelector.build())
                .build()
            )
            .build()

        const positionBottomValueContainer = new ContainerBuilder()
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .appendChild(new LabelBuilder()
                    .setInnerText('Bottom Position Value')
                    .build()
                )
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(this.bottomPositionInput.build())
                .appendChild(this.bottomPositionSelector.build())
                .build()
            )
            .build()

        const positionLeftValueContainer = new ContainerBuilder()
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .appendChild(new LabelBuilder()
                    .setInnerText('Left Position Value')
                    .build()
                )
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(this.leftPositionInput.build())
                .appendChild(this.leftPositionSelector.build())
                .build()
            )
            .build()

        const zIndexValueContainer = new ContainerBuilder()
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .appendChild(new LabelBuilder()
                    .setInnerText('Z Index Value')
                    .build()
                )
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(this.zIndexInput.build())
                .build()
            )
            .build()

        this.container = new ContainerBuilder()
            .setStyle(StyleNameEnum.border, '1px solid #4CAF50')
            .setStyle(StyleNameEnum.padding, '3px')
            .setStyle(StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(new LabelBuilder()
                    .setInnerText('Position')
                    .build()
                )
                .build()
            )
            .appendChild(positionTypeSelectorContainer)
            .appendChild(positionTopValueContainer)
            .appendChild(positionRightValueContainer)
            .appendChild(positionBottomValueContainer)
            .appendChild(positionLeftValueContainer)
            .appendChild(zIndexValueContainer)
            .build()
    }

    private buildAllComponents() {
        this.positionSelector = new SelectorFromEnumBuilder(PositionTypesEnum)
            .addEventListener('change', this.setPosition);

        this.topPositionInput = new InputBuilder(InputTypeEnum.number)
            .setMin(0)
            .addEventListener('input', this.setTopValue)

        this.topPositionSelector = new SelectorFromEnumBuilder(UnitsEnum)
            .addEventListener('change', this.setTopValue)


        this.rightPositionInput = new InputBuilder(InputTypeEnum.number)
            .setMin(0)
            .addEventListener('input', this.setRightValue)

        this.rightPositionSelector = new SelectorFromEnumBuilder(UnitsEnum)
            .addEventListener('change', this.setRightValue)


        this.bottomPositionInput = new InputBuilder(InputTypeEnum.number)
            .setMin(0)
            .addEventListener('input', this.setBottomValue)

        this.bottomPositionSelector = new SelectorFromEnumBuilder(UnitsEnum)
            .addEventListener('change', this.setBottomValue)


        this.leftPositionInput = new InputBuilder(InputTypeEnum.number)
            .setMin(0)
            .addEventListener('input', this.setLeftValue)

        this.leftPositionSelector = new SelectorFromEnumBuilder(UnitsEnum)
            .addEventListener('change', this.setLeftValue)

        this.zIndexInput = new InputBuilder(InputTypeEnum.number)
            .addEventListener('input', this.setZindexValue)
    }

    private setInitialValuesAccordingToClass() {
        this.positionSelector.selectOption(this.domElementStyleSheet['position'] || 'none');

        const top = this.domElementStyleSheet['top'];
        this.topPositionInput.setValue(`${parseInt(top) || 0}`);
        this.topPositionSelector.setValue(getUnit(top));

        const right = this.domElementStyleSheet['right'];
        this.rightPositionInput.setValue(`${parseInt(right) || 0}`);
        this.rightPositionSelector.setValue(getUnit(right));

        const bottom = this.domElementStyleSheet['bottom'];
        this.bottomPositionInput.setValue(`${parseInt(bottom) || 0}`);
        this.bottomPositionSelector.setValue(getUnit(bottom));

        const left = this.domElementStyleSheet['left'];
        this.leftPositionInput.setValue(`${parseInt(left) || 0}`);
        this.leftPositionSelector.setValue(getUnit(left));

        this.zIndexInput.setValue(this.domElementStyleSheet['z-index'] || 0);
    }

    private setPosition() {
        if((this.positionSelector.getValue() === 'none') && this.domElementStyleSheet instanceof CSSStyleDeclaration){
            this.domElementStyleSheet.removeProperty('position');
            this.domElementStyleSheet.removeProperty('top');
            this.domElementStyleSheet.removeProperty('bottom');
            this.domElementStyleSheet.removeProperty('right');
            this.domElementStyleSheet.removeProperty('left');
            return;
        }
        this.domElementStyleSheet['position'] = this.positionSelector.getValue();
    }

    private setTopValue() {
        if((this.topPositionInput.getValue() === '0') && this.domElementStyleSheet instanceof CSSStyleDeclaration){
            this.domElementStyleSheet.removeProperty('top');
            return;
        }
        this.domElementStyleSheet['top'] =
            `${this.topPositionInput.getValue()}${this.topPositionSelector.getValue()}`;
    }

    private setRightValue() {
        if((this.rightPositionInput.getValue() === '0') && this.domElementStyleSheet instanceof CSSStyleDeclaration){
            this.domElementStyleSheet.removeProperty('right');
            return;
        }
        this.domElementStyleSheet['right'] =
            `${this.rightPositionInput.getValue()}${this.rightPositionSelector.getValue()}`;
    }

    private setBottomValue() {
        if((this.topPositionInput.getValue() === '0') && this.domElementStyleSheet instanceof CSSStyleDeclaration){
            this.domElementStyleSheet.removeProperty('bottom');
            return;
        }
        this.domElementStyleSheet['bottom'] =
            `${this.bottomPositionInput.getValue()}${this.bottomPositionSelector.getValue()}`;
    }

    private setLeftValue() {
        if((this.leftPositionInput.getValue() === '0') && this.domElementStyleSheet instanceof CSSStyleDeclaration){
            this.domElementStyleSheet.removeProperty('left');
            return;
        }
        this.domElementStyleSheet['left'] =
            `${this.leftPositionInput.getValue()}${this.leftPositionSelector.getValue()}`;
    }

    private setZindexValue() {
        if((this.zIndexInput.getValue() === '0') && this.domElementStyleSheet instanceof CSSStyleDeclaration){
            this.domElementStyleSheet.removeProperty('z-index');
            return;
        }
        this.domElementStyleSheet['z-index'] = this.zIndexInput.getValue();
    }

    public classNameUpdated(name: string) {
        this.domElementStyleSheet = CssStyleSheet.getRuleStyles(name);
        this.setInitialValuesAccordingToClass();
    }
}
