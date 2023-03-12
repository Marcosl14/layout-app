import ContainerBuilder from '../models/ContainerBuilder';
import LabelBuilder from '../models/LabelBuilder';

import CssStyleSheet from '../../css-stylesheet/css-stylesheet';

import { StyleNameEnum } from '../enums/style-name.enum';
import { EventTypeEnum } from '../enums/event-type.enum';
import { FlexDirectionEnum } from '../enums/flex-direction.enum';
import { DisplayTypesEnum } from '../enums/display-types.enum';
import { AlignFlexItemsEnum } from '../enums/align-flex-items.enum';

export default class GenericCssPropertyMutatorComponent {
    private domElement: HTMLElement;
    private container: HTMLDivElement;
    private domElementStyleSheet: CSSStyleDeclaration;

    private label: string;
    private style: string;
    private changeElement: HTMLElement;
    private eventType: EventTypeEnum;


    constructor(domElement: HTMLElement, style: string, label: string, changeElement: HTMLElement, eventType: EventTypeEnum) {
        this.domElement = domElement;
        this.style = style;
        this.label = label;
        this.domElementStyleSheet = CssStyleSheet.getRuleStyles(this.domElement.id);
        this.changeElement = changeElement;
        this.eventType = eventType;
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

    private updateProperty() {
        this.domElementStyleSheet[this.style] = this.changeElement['value'];
    }
}
