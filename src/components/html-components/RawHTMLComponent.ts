import ClassChangePublisher from '../common/publishers/ClassChangePublisher';
import ComponentChangeObserverInterface from '../common/interfaces/component-change-observer.interface';

import ButtonBuilder from '../common/models/ButtonBuilder';
import LabelBuilder from '../common/models/LabelBuilder';
import ContainerBuilder from '../common/models/ContainerBuilder';
import StylesComponentsBuilder from '../common/models/StylesComponentsBuilder';

import contants from '../common/constants/constants';

import { InputTypeEnum } from '../common/enums/input-type.enum';
import { StyleNameEnum } from '../common/enums/style-name.enum';
import { DisplayTypesEnum } from '../common/enums/display-types.enum';

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
import SizesComponent from '../common/components/sizes.component';
import FontComponent from '../common/components/font.components';
import UrlDefinitionComponent from '../common/components/url-definition-component';

export default abstract class RawHTMLConponent implements ComponentChangeObserverInterface {
    protected _domElement: HTMLElement;
    protected stylesComponents: StylesComponentsBuilder;

    public static instances: HTMLElement[] = [];

    protected classChangePublisher: ClassChangePublisher;

    protected itemsSelector: HTMLSelectElement = document.querySelector('#select-item');
    private optionElement: HTMLOptionElement = document.createElement('option');

    constructor(domElement: HTMLElement) {
        this._domElement = domElement

        RawHTMLConponent.instances.push(this._domElement);

        this.classChangePublisher = new ClassChangePublisher();

        this.optionElement.value = this.domElement.id;
        this.optionElement.text = this.domElement.id;
        this.itemsSelector.appendChild(this.optionElement);

        this.removeElement = this.removeElement.bind(this);
    }

    get domElement() {
        return this._domElement;
    }

    protected dragStartWithTargetId(event: DragEvent) {
        event.dataTransfer.setData('text/plain', (event.target as HTMLElement).id);
    }

    protected addIdDefinitionComponent() {
        return new IdDefinitionComponent(this._domElement).component;
    }

    protected addClassNameDefinitionComponent() {
        return new ClassManagementComponent(this._domElement, this.classChangePublisher).component;
    }

    protected addMarginStyleComponent() {
        const component = new MarginOrPaddingComponent(this._domElement, StyleNameEnum.margin);
        this.classChangePublisher.attach(component);
        return component.component;
    }

    protected addPaddingStyleComponent() {
        const component = new MarginOrPaddingComponent(this._domElement, StyleNameEnum.padding);
        this.classChangePublisher.attach(component);
        return component.component;
    }

    protected addInnerTextChangeComponent() {
        return new GenericPrimaryInputComponent(this._domElement, 'innerText', 'Inner Text').component;
    }

    protected addInputTypeSelectorComponent() {
        return new GenericPrimarySelectorComponent(
            this._domElement,
            'type',
            'Input Type Selector',
            InputTypeEnum
        ).component;
    }

    protected addLabelComponent(label: string) {
        return new LabelBuilder()
            .setInnerText(label)
            .build()
    }

    protected addDisplayAsParentComponent() {
        const component = new DisplayAsParentComponent(this._domElement);
        this.classChangePublisher.attach(component);
        return component.component;
    }

    protected addDisplayAsChildComponent() {
        const component = new DisplayAsChildComponent(this._domElement);
        this.classChangePublisher.attach(component);
        return component.component;
    }

    protected addBorderSettingsComponent() {
        const component = new BorderComponent(this._domElement);
        this.classChangePublisher.attach(component);
        return component.component;
    }

    protected addBackgroundSettingsComponent() {
        const component = new BackgroundComponent(this._domElement);
        this.classChangePublisher.attach(component);
        return component.component;
    }

    protected addBoxShadowComponent() {
        const component = new BoxShadowComponent(this._domElement);
        this.classChangePublisher.attach(component);
        return component.component;
    }

    protected addSizeComponents() {
        const component = new SizesComponent(this._domElement);
        this.classChangePublisher.attach(component);
        return component.component;
    }

    protected addFontComponens() {
        const component = new FontComponent(this._domElement);
        this.classChangePublisher.attach(component);
        return component.component;
    }

    protected addUrlInputComponent() {
        const component = new UrlDefinitionComponent(this._domElement);
        return component.component;
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

    protected removeElement() {
        if (confirm('Are you sure to remove this component')) {
            const parent = this._domElement.parentNode;
            parent.removeChild(this._domElement);
            this.stylesComponents.remove();
            this.itemsSelector.removeChild(this.optionElement);
        }
    }

    protected dragLeave(event: DragEvent) {
        event.stopPropagation();
        if (this._domElement.parentElement.tagName === 'DIV') {
            this._domElement.parentElement.style.backgroundColor = contants.INVERTED_BACKGROUND_COLOR;
        }
    }

    protected selectorValue() {
        let thisOptionIndex: number;
        this.itemsSelector.childNodes.forEach((child, index) => {
            (child as HTMLOptionElement).value === this.domElement.id ? thisOptionIndex = index : undefined
        })
        this.itemsSelector.selectedIndex = thisOptionIndex;
    }

    public componentSelected(component) {
        return;
    }

    protected commonComponents: string[] = [
        'addIdDefinitionComponent',
        'addClassNameDefinitionComponent',
        'addMarginStyleComponent',
        'addPaddingStyleComponent',
        'addSizeComponents',
        'addFontComponens',
        'addBackgroundSettingsComponent',
        'addBorderSettingsComponent',
        'addBoxShadowComponent',
        'addDisplayAsChildComponent',
        'addActionsComponents',
    ]

    protected insertComponentBefore(
        componentToInsert: string,
        referenceComponent: string
    ) {
        const alreadyExists = this.commonComponents.find((comp) => comp === componentToInsert);

        if(alreadyExists) {
            return;
        }

        const index = this.commonComponents.findIndex((comp) => comp === referenceComponent);

        this.commonComponents.splice(index, 0, componentToInsert)
    }

    protected insertComponentAfter(
        componentToInsert: string,
        referenceComponent: string
    ) {
        const alreadyExists = this.commonComponents.find((comp) => comp === componentToInsert);

        if(alreadyExists) {
            return;
        }

        const index = this.commonComponents.findIndex((comp) => comp === referenceComponent);
        this.commonComponents.splice(index + 1, 0, componentToInsert)
    }

    protected buildElements() {
        this.stylesComponents = new StylesComponentsBuilder()

        this.commonComponents.forEach((componentName) => {
            this.stylesComponents.appendChild(this[componentName]())
        })

        this.stylesComponents.build();
    }
}
