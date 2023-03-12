import ButtonBuilder from '../common/models/ButtonBuilder';
import LabelBuilder from '../common/models/LabelBuilder';
import ContainerBuilder from '../common/models/ContainerBuilder';

import DisplayAsParentComponent from '../common/components/display-as-parent.component';
import GenericPrimaryInputComponent from '../common/components/generic-primary-input.component';
import GenericPrimarySelectorComponent from '../common/components/generic-primary-selector.component';
import IdDefinitionComponent from '../common/components/id-definition.component';
import MarginOrPaddingComponent from '../common/components/margin-or-padding.component';
import DisplayAsChildComponent from '../common/components/display-as-child.component';
import BorderComponent from '../common/components/border.component';
import BackgroundComponent from '../common/components/background.component';
import BoxShadowComponent from '../common/components/box-shadow.component';

import contants from '../common/constants/constants';

import { InputTypeEnum } from '../common/enums/input-type.enum';
import { StyleNameEnum } from '../common/enums/style-name.enum';
import { DisplayTypesEnum } from '../common/enums/display-types.enum';

export default abstract class RawHTMLConponent {
    protected _domElement: HTMLElement;
    protected stylesComponents: HTMLDivElement;
    public static instances: HTMLElement[] = [];

    constructor(domElement: HTMLElement) {
        this._domElement = domElement

        RawHTMLConponent.instances.push(this._domElement);

        this.removeElement = this.removeElement.bind(this);
    }

    get domElement() {
        return this._domElement;
    }

    protected dragStartWithTargetId(event: any) {
        event.dataTransfer.setData('text/plain', event.target.id);
    }

    protected removeElement() {
        if (confirm('Are you sure to remove this component')) {
            const parent = this._domElement.parentNode;
            parent.removeChild(this._domElement);
            this.stylesComponents.remove();
        }
    }

    protected addIdDefinitionComponent() {
        return new IdDefinitionComponent(this._domElement).component;
    }

    protected addMarginStyleComponent() {
        return new MarginOrPaddingComponent(this._domElement, StyleNameEnum.margin).component;
    }

    protected addPaddingStyleComponent() {
        return new MarginOrPaddingComponent(this._domElement, StyleNameEnum.padding).component;
    }

    protected addInnerTextChangeComponent() {
        return new GenericPrimaryInputComponent(this._domElement, 'innerText', 'Inner Text').component;
    }

    protected addActionsComponents() {
        return new ContainerBuilder()
            .setStyle(StyleNameEnum.border, '1px solid #4CAF50')
            .setStyle(StyleNameEnum.padding, '3px')
            .setStyle(StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(new LabelBuilder()
                    .setInnerText('Available Actions')
                    .build()
                )
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(this.addRemoveElementComponent())
                .build()
            )
            .build()
    }

    private addRemoveElementComponent() {
        return new ButtonBuilder()
            .setInnerText('Remove Element')
            .addEventListener('click', this.removeElement)
            .build();
    }

    protected addInputTypeSelectorComponent() {
        return new GenericPrimarySelectorComponent(this._domElement, 'type', 'Input Type Selector', InputTypeEnum).component;
    }

    protected addLabelComponent(label: string) {
        return new LabelBuilder()
            .setInnerText(label)
            .build()
    }

    protected addDisplayAsParentComponent() {
        return new DisplayAsParentComponent(this._domElement).component;
    }

    protected addDisplayAsChildComponent() {
        return new DisplayAsChildComponent(this._domElement).component;
    }

    protected addBorderSettingsComponent() {
        return new BorderComponent(this._domElement).component;
    }

    protected addBackgroundSettingsComponent() {
        return new BackgroundComponent(this._domElement).component;
    }

    protected addBoxShadowComponent() {
        return new BoxShadowComponent(this._domElement).component;
    }


    protected dragLeave(event: any) {
        event.stopPropagation();
        if(this._domElement.parentElement.tagName === 'DIV') {
            this._domElement.parentElement.style.backgroundColor = contants.INVERTED_BACKGROUND_COLOR;
        }
    }
}
