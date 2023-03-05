import ContainerBuilder from '../models/ContainerBuilder';
import InputBuilder from '../models/InputBuilder';
import LabelBuilder from '../models/LabelBuilder';
import CssStyleSheet from '../../css-stylesheet/css-stylesheet';
import { InputTypeEnum } from '../enums/input-type.enum';
import { StyleNameEnum } from '../enums/style-name.enum';
import rgbToHex from '../functions/rgb-to-hex';

export default class BackgroundComponent {
    private domElement: HTMLElement;
    private container: HTMLDivElement;

    private colorInput: HTMLInputElement;
    private opacitySlider: HTMLInputElement;

    private opacityValue: HTMLLabelElement;

    constructor(domElement: HTMLElement) {
        this.domElement = domElement;
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
                .setStyle(StyleNameEnum.display, 'flex')
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(new LabelBuilder()
                    .setInnerText('Background')
                    .build()
                )
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, 'flex')
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
                .setInnerText('Border Type Selector')
                .build()
            )
            .appendChild(backgroundComponents)
            .build()
    }

    private getCurrentColor(): string {
        return rgbToHex(CssStyleSheet.getRuleStyles(this.domElement.id)['background-color']);
    }

    private getCurrentOpacity(): string {
        const opacity = parseFloat(CssStyleSheet.getRuleStyles(this.domElement.id)['opacity']) * 100;
        return isNaN(opacity) ? '100' : Math.round(opacity).toString();
    }

    private updateColor() {
        CssStyleSheet.getRuleStyles(this.domElement.id)['background-color'] = this.colorInput.value;
    }

    private updateOpacity() {
        CssStyleSheet.getRuleStyles(this.domElement.id)['opacity'] = `${parseInt(this.opacitySlider.value) / 100}`;
        this.opacityValue.innerText = `${this.getCurrentOpacity()}%`;
    }
}
