import ClassChangeObserverInterface from '../interfaces/class-change-observer.interface';

import ContainerBuilder from '../models/ContainerBuilder';
import InputBuilder from '../models/InputBuilder';
import LabelBuilder from '../models/LabelBuilder';

import CssStyleSheet from '../../css-stylesheet/css-stylesheet';
import rgbToHex from '../functions/rgb-to-hex';

import { InputTypeEnum } from '../enums/input-type.enum';
import { StyleNameEnum } from '../enums/style-name.enum';
import { DisplayTypesEnum } from '../enums/display-types.enum';

export default class BackgroundComponent implements ClassChangeObserverInterface{
    private domElement: HTMLElement;
    private container: HTMLDivElement;
    private domElementStyleSheet: CSSStyleDeclaration;

    private colorInput: HTMLInputElement;
    private opacitySlider: HTMLInputElement;
    private opacityValue: HTMLLabelElement;

    constructor(domElement: HTMLElement, initialClassName: string) {
        this.domElement = domElement;
        this.domElementStyleSheet = CssStyleSheet.getRuleStyles(initialClassName);
        this.addComponents();
    }

    get component() {
        return this.container;
    }

    private addComponents() {
        this.updateColor = this.updateColor.bind(this);
        this.updateOpacity = this.updateOpacity.bind(this);

        this.colorInput = new InputBuilder(InputTypeEnum.color)
            .setValue(this.getCurrentColor())
            .addEventListener('input', this.updateColor)
            .build()

        this.opacitySlider = new InputBuilder(InputTypeEnum.range)
            .setValue(this.getCurrentOpacity())
            .setMin(0)
            .setMax(100)
            .addEventListener('input', this.updateOpacity)
            .build()

        this.opacityValue = new LabelBuilder()
            .setInnerText(`${this.getCurrentOpacity()}%`)
            .build()

        const backgroundComponents = new ContainerBuilder()
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(new LabelBuilder()
                    .setInnerText('Color / Opacity')
                    .build()
                )
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(this.colorInput)
                .appendChild(this.opacitySlider)
                .appendChild(this.opacityValue)
                .build()
            )
            .build()

        this.container = new ContainerBuilder()
            .setStyle(StyleNameEnum.border, '1px solid #4CAF50')
            .setStyle(StyleNameEnum.padding, '3px')
            .setStyle(StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new LabelBuilder()
                .setInnerText('Background')
                .build()
            )
            .appendChild(backgroundComponents)
            .build()
    }

    private getCurrentColor(): string {
        return rgbToHex(this.domElementStyleSheet['background-color']);
    }

    private getCurrentOpacity(): string {
        const opacity = parseFloat(this.domElementStyleSheet['opacity']) * 100;
        return isNaN(opacity) ? '100' : Math.round(opacity).toString();
    }

    private updateColor() {
        this.domElementStyleSheet['background-color'] = this.colorInput.value;
    }

    private updateOpacity() {
        const value = parseInt(this.opacitySlider.value)
        const percentage = value / 100;
        if(value >= 100) {
            this.domElementStyleSheet['opacity'] = ''
            this.opacityValue.innerText = '100%';
            return;
        }
        this.domElementStyleSheet['opacity'] = `${percentage}`;
        this.opacityValue.innerText = `${value}%`;
    }

    public classNameUpdated(name: string) {
        this.domElementStyleSheet = CssStyleSheet.getRuleStyles(name);
        this.colorInput.value = this.getCurrentColor();
        this.opacitySlider.value = this.getCurrentOpacity();
        this.opacityValue.innerText = `${this.opacitySlider.value}%`;
    }
}
