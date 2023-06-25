import ClassChangePublisher from '../common/publishers/ClassChangePublisher';
import CreateNewHTMLComponentPublisher from '../common/publishers/CreateNewHTMLComponentPublisher';
import ComponentChangeObserverInterface from '../common/interfaces/component-change-observer.interface';
import UndoRemoveModuleSingleton from '../common/singletons/undo-remove.module';

import ButtonBuilder from '../common/models/ButtonBuilder';
import LabelBuilder from '../common/models/LabelBuilder';
import ContainerBuilder from '../common/models/ContainerBuilder';
import StylesComponentsBuilder from '../common/models/StylesComponentsBuilder';

import contants from '../common/constants/constants';

import { InputTypeEnum } from '../common/enums/input-type.enum';
import { StyleNameEnum } from '../common/enums/style-name.enum';
import { DisplayTypesEnum } from '../common/enums/display-types.enum';
import { AddComponentEnum } from '../common/enums/add-component.enum';

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
import AddListItemComponent from '../common/components/addListItem.component';
import AddTableItemsComponent from '../common/components/addTableItems.component';
import AddTableRowComponent from '../common/components/addTableRow.component';
import AddTableCellComponent from '../common/components/addTableCell.component';
import PositionComponent from '../common/components/position.component';
import validateAndSave from '../common/functions/validate-and-save-loocalstorage';
import AddOptionComponent from '../common/components/addOption.component';
import OutlineComponent from '../common/components/outline.component';

export default abstract class RawHTMLConponent implements ComponentChangeObserverInterface {
    protected _domElement: HTMLElement;
    protected stylesComponents: StylesComponentsBuilder;

    public static instances: HTMLElement[] = [];

    protected classChangePublisher: ClassChangePublisher;
    protected createNewHTMLComponentPublisher?: CreateNewHTMLComponentPublisher;

    protected itemsSelector: HTMLSelectElement = document.querySelector('#select-item');
    private optionElement: HTMLOptionElement = document.createElement('option');

    constructor(domElement: HTMLElement, createNewHTMLComponentPublisher?: CreateNewHTMLComponentPublisher ) {
        this._domElement = domElement

        RawHTMLConponent.instances.push(this._domElement);

        this.classChangePublisher = new ClassChangePublisher();
        this.createNewHTMLComponentPublisher = createNewHTMLComponentPublisher;

        this.optionElement.value = this.domElement.id;
        this.optionElement.text = this.domElement.id;
        this.itemsSelector.appendChild(this.optionElement);

        this.removeElement = this.removeElement.bind(this);
        this.duplicateElementComponent = this.duplicateElementComponent.bind(this);
        this.duplicateElementWithChildren = this.duplicateElementWithChildren.bind(this);
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
        const canAddText: () => boolean = () => {
            if(this.domElement.innerHTML.includes('<')) {
                alert('InnerHTML must be empty')
                return false;
            }

            return true;
        }

        return new GenericPrimaryInputComponent(
                this._domElement,
                'innerText',
                'Inner Text',
                canAddText
            ).component;
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

    protected addPositionComponent() {
        const component = new PositionComponent(this._domElement);
        this.classChangePublisher.attach(component);
        return component.component;
    }

    protected addBorderSettingsComponent() {
        const component = new BorderComponent(this._domElement);
        this.classChangePublisher.attach(component);
        return component.component;
    }

    protected addOutlineComponents() {
        const component = new OutlineComponent(this._domElement);
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

    protected addListItemComponent() {
        const component = new AddListItemComponent(this._domElement, this.createNewHTMLComponentPublisher);
        return component.component;
    }

    protected addTableItemsComponent() {
        const component = new AddTableItemsComponent(this._domElement, this.createNewHTMLComponentPublisher);
        return component.component;
    }

    protected addTableRowComponent() {
        const component = new AddTableRowComponent(this._domElement, this.createNewHTMLComponentPublisher);
        return component.component;
    }

    protected addTableCellComponent() {
        const component = new AddTableCellComponent(this._domElement, this.createNewHTMLComponentPublisher);
        return component.component;
    }

    protected addOptionComponent() {
        const component = new AddOptionComponent(this._domElement, this.createNewHTMLComponentPublisher);
        return component.component;
    }

    protected addTextAndValueChangeComponent() {
        const textInput = new GenericPrimaryInputComponent(
                this._domElement,
                'text',
                'Text',
                () => true,
            ).component;

        const valueInput = new GenericPrimaryInputComponent(
                this._domElement,
                'value',
                'Value',
                () => true,
            ).component;

        return new ContainerBuilder()
            .appendChild(textInput)
            .appendChild(valueInput)
            .build();
    }

    protected addActionsComponents() {
        return new ContainerBuilder()
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .appendChild(new LabelBuilder()
                    .setInnerText('Available Actions')
                    .build()
                )
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .appendChild(this.addDuplicateElementComponent())
                .appendChild(this.addDuplicateElementWithChildrensComponent())
                .appendChild(this.addRemoveElementComponent())
                .build()
            )
            .build()
    }

    private addDuplicateElementComponent() {
        return new ButtonBuilder()
            .setInnerText('Duplicate Element')
            .addEventListener('click', this.duplicateElementComponent)
            .build();
    }

    private addDuplicateElementWithChildrensComponent() {
        return new ButtonBuilder()
            .setInnerText('Duplicate Element With Children')
            .addEventListener('click', this.duplicateElementWithChildren)
            .build();
    }

    private addRemoveElementComponent() {
        return new ButtonBuilder()
            .setInnerText('Remove Element')
            .addEventListener('click', this.removeElement)
            .build();
    }

    protected duplicateElementComponent() {
        this.createNewHTMLComponentPublisher.duplicateHTMLComponent(
            this.domElement.parentElement,
            this.domElement,
        );
    }

    protected duplicateElementWithChildren() {
        this.createNewHTMLComponentPublisher.duplicateHTMLComponentWithChildren(
            this.domElement.parentElement,
            this.domElement,
        );
    }

    protected removeElement() {
        if (confirm('Are you sure to remove this component')) {
            const parent = this._domElement.parentNode;
            parent.removeChild(this._domElement);

            const undoList = UndoRemoveModuleSingleton.getInstance();
            undoList.addChange({parentElement: parent, childElement: this._domElement })

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

    protected commonComponents: AddComponentEnum[] = [
        AddComponentEnum.addIdDefinitionComponent,
        AddComponentEnum.addClassNameDefinitionComponent,
        AddComponentEnum.addMarginStyleComponent,
        AddComponentEnum.addPaddingStyleComponent,
        AddComponentEnum.addSizeComponents,
        AddComponentEnum.addFontComponens,
        AddComponentEnum.addBackgroundSettingsComponent,
        AddComponentEnum.addBorderSettingsComponent,
        AddComponentEnum.addOutlineComponents,
        AddComponentEnum.addBoxShadowComponent,
        AddComponentEnum.addDisplayAsChildComponent,
        AddComponentEnum.addPositionComponent,
        AddComponentEnum.addActionsComponents,
    ]

    protected insertComponentBefore(
        componentToInsert: AddComponentEnum,
        referenceComponent: AddComponentEnum
    ) {
        const alreadyExists = this.commonComponents.find((comp) => comp === componentToInsert);

        if(alreadyExists) {
            return;
        }

        const index = this.commonComponents.findIndex((comp) => comp === referenceComponent);

        this.commonComponents.splice(index, 0, componentToInsert)
    }

    protected insertComponentAfter(
        componentToInsert: AddComponentEnum,
        referenceComponent: AddComponentEnum
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

        const loadedProjectsSelector: HTMLSelectElement = document.querySelector('#project-names-selector');

        const loadedProject = localStorage.getItem('loaded-project-layout-app');

        if(loadedProject === loadedProjectsSelector.value){
            validateAndSave(loadedProjectsSelector.value);
        }
    }
}
