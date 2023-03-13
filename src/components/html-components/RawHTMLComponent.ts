import ArraySelectorBodyInterface from '../common/interfaces/selector-from-array-body.interface';

import ClassChangePublisher from '../common/publishers/ClassChangePublisher';

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
import ClassManagementComponent from '../common/components/class-management.component';

import contants from '../common/constants/constants';

import { InputTypeEnum } from '../common/enums/input-type.enum';
import { StyleNameEnum } from '../common/enums/style-name.enum';
import { DisplayTypesEnum } from '../common/enums/display-types.enum';

export default abstract class RawHTMLConponent {
    protected _domElement: HTMLElement;
    protected stylesComponents: HTMLDivElement;

    public static instances: HTMLElement[] = [];
    private classNames: ArraySelectorBodyInterface[];
    private initialClassName: string;

    protected publisher: ClassChangePublisher;

    constructor(domElement: HTMLElement) {
        this._domElement = domElement

        RawHTMLConponent.instances.push(this._domElement);

        this.populateClassesList();

        this.publisher = new ClassChangePublisher();

        this.removeElement = this.removeElement.bind(this);
    }

    get domElement() {
        return this._domElement;
    }

    private populateClassesList() {
        const classNames = []

        this.domElement.classList.forEach((c, index) => {
            classNames.push({
                text: c,
                value: c,
            })
        });

        this.classNames = classNames;

        this.initialClassName = this.classNames[0].value
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

    protected addClassNameDefinitionComponent() {
        return new ClassManagementComponent(this._domElement ,this.classNames, this.initialClassName, this.publisher).component;
    }

    protected addMarginStyleComponent() {
        const component = new MarginOrPaddingComponent(this._domElement, this.initialClassName, StyleNameEnum.margin);
        this.publisher.attach(component);
        return component.component;
    }

    protected addPaddingStyleComponent() {
        const component = new MarginOrPaddingComponent(this._domElement, this.initialClassName, StyleNameEnum.padding);
        this.publisher.attach(component);
        return component.component;
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
        const component = new DisplayAsParentComponent(this._domElement, this.initialClassName);
        this.publisher.attach(component);
        return component.component;
    }

    protected addDisplayAsChildComponent() {
        const component = new DisplayAsChildComponent(this._domElement, this.initialClassName);
        this.publisher.attach(component);
        return component.component;
    }

    protected addBorderSettingsComponent() {
        const component = new BorderComponent(this._domElement, this.initialClassName);
        this.publisher.attach(component);
        return component.component;
    }

    protected addBackgroundSettingsComponent() {
        const component = new BackgroundComponent(this._domElement, this.initialClassName);
        this.publisher.attach(component);
        return component.component;
    }

    protected addBoxShadowComponent() {
        const component = new BoxShadowComponent(this._domElement, this.initialClassName);
        this.publisher.attach(component);
        return component.component;
    }


    protected dragLeave(event: any) {
        event.stopPropagation();
        if(this._domElement.parentElement.tagName === 'DIV') {
            this._domElement.parentElement.style.backgroundColor = contants.INVERTED_BACKGROUND_COLOR;
        }
    }
}
