import ContainerBuilder from '../models/ContainerBuilder';
import InputBuilder from '../models/InputBuilder';
import LabelBuilder from '../models/LabelBuilder';
import ButtonBuilder from '../models/ButtonBuilder';

import { InputTypeEnum } from '../enums/input-type.enum';

export default class GenericPrimaryInputComponent {
    private domElement: HTMLElement;
    private container: HTMLDivElement;
    private label: string;
    private style: string;

    private propertyValueInput: HTMLInputElement;

    private callback: () => boolean;

    constructor(domElement: HTMLElement, style: string, label: string, callback: () => boolean) {
        this.domElement = domElement;
        this.label = label;
        this.style = style;

        this.callback = callback;
        this.callback = this.callback.bind(this);

        this.addComponents();
    }

    get component() {
        return this.container;
    }

    private addComponents() {
        this.updateProperty = this.updateProperty.bind(this);

        this.propertyValueInput = new InputBuilder(InputTypeEnum.text)
            .setValue(this.domElement[this.style])
            .addEventListener('keyup', this.updateProperty)
            .build()

        const elementsContainer = new ContainerBuilder()
            .appendChild(this.propertyValueInput)
            .appendChild(
                new ButtonBuilder()
                    .setInnerText('Change')
                    .addEventListener('click', this.updateProperty)
                    .build()
            )
            .build()

        this.container = new ContainerBuilder()
            .appendChild(new LabelBuilder()
                .setInnerText(this.label)
                .build()
            )
            .appendChild(elementsContainer)
            .build()
    }

    private updateProperty(event: MouseEvent | KeyboardEvent) {
        if ( event.type === 'click'
            || (event as KeyboardEvent).key === 'Enter'
            || (event as KeyboardEvent).code === '13'
        ) {
            if(this.callback()){
                this.domElement[this.style] = this.propertyValueInput.value;
            } else {
                this.propertyValueInput.value = '';
            }
        }
    }
}
