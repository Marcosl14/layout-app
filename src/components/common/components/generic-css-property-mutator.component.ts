import ContainerBuilder from '../models/ContainerBuilder';
import LabelBuilder from '../models/LabelBuilder';

import { StyleNameEnum } from '../enums/style-name.enum';
import { EventTypeEnum } from '../enums/event-type.enum';
import { FlexDirectionEnum } from '../enums/flex-direction.enum';
import { DisplayTypesEnum } from '../enums/display-types.enum';
import { AlignFlexItemsEnum } from '../enums/align-flex-items.enum';

export default class GenericCssPropertyMutatorComponent {
    private container: HTMLDivElement;
    private domElementStyleSheet: CSSStyleDeclaration | object;

    private label: string;
    private style: string;
    private changeElement: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    private eventType: EventTypeEnum;
    private unit: string;

    private zeroValue: number;

    constructor(
        domElementStyleSheet: CSSStyleDeclaration | object,
        style: string,
        label: string,
        changeElement: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement,
        eventType: EventTypeEnum,
        unit = '',
    ) {
        this.style = style;
        this.label = label;
        this.domElementStyleSheet = domElementStyleSheet;
        this.changeElement = changeElement;
        this.eventType = eventType;
        this.unit = unit;
        this.addComponents();
    }

    get component() {
        return this.container;
    }

    private addComponents() {
        this.updateProperty = this.updateProperty.bind(this);

        this.changeElement.addEventListener(this.eventType, this.updateProperty)

        this.container = new ContainerBuilder()
            .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
            .setStyle(StyleNameEnum['flex-direction'], FlexDirectionEnum.column)
            .setStyle(StyleNameEnum['align-items'], AlignFlexItemsEnum.stretch)
            .setStyle(StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new LabelBuilder()
                .setInnerText(this.label)
                .build()
            )
            .appendChild(this.changeElement)
            .build()
    }

    public setValue(value = 'string') {
        this.changeElement.value = value;
    }

    public updateStyleSheet(domElementStyleSheet: CSSStyleDeclaration | object) {
        this.domElementStyleSheet = domElementStyleSheet;
    }

    private updateProperty() {
        if(parseInt(this.changeElement.value) === this.zeroValue){
            this.domElementStyleSheet[this.style] = '';
            return;
        }
        this.domElementStyleSheet[this.style] = this.changeElement.value + this.unit;
    }

    public setZeroValue(value: number) {
        this.zeroValue = value;
        return this;
    }
}
