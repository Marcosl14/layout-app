import ArraySelectorBodyInterface from '../interfaces/selector-from-array-body.interface';
import ClassChangePublisher from '../publishers/ClassChangePublisher';

import ContainerBuilder from '../models/ContainerBuilder';
import LabelBuilder from '../models/LabelBuilder';
import SelectorFromArrayBuilder from '../models/SelectorFromArrayBuilder';

import { StyleNameEnum } from '../enums/style-name.enum';
import { DisplayTypesEnum } from '../enums/display-types.enum';
import { FlexDirectionEnum } from '../enums/flex-direction.enum';


export default class ClassManagementComponent {
    private container: HTMLDivElement;
    private domElement: HTMLElement;

    private classNames: ArraySelectorBodyInterface[];
    private classesSelector: HTMLSelectElement;
    private initialClassName: string;

    private publisher: ClassChangePublisher;

    constructor(
        domElement: HTMLElement,
        classNames: ArraySelectorBodyInterface[],
        initialClassName: string,
        publisher: ClassChangePublisher
    ) {
        this.publisher = publisher;
        this.classNames = classNames;
        this.initialClassName = initialClassName;
        this.domElement = domElement;
        this.addComponents();
    }

    get component() {
        return this.container;
    }

    private addComponents() {
        this.updateProperty = this.updateProperty.bind(this);


        this.classesSelector = new SelectorFromArrayBuilder(this.classNames)
            .selectOption(this.initialClassName)
            .addEventListener('change', this.updateProperty)
            .build()

        const elementsContainer = new ContainerBuilder()
            .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
            .setStyle(StyleNameEnum['flex-direction'], FlexDirectionEnum.column)
            .setStyle(StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new LabelBuilder()
                .setInnerText('Selected Class')
                .build()
            )
            .appendChild(this.classesSelector)
            .build()

        this.container = new ContainerBuilder()
            .setStyle(StyleNameEnum.border, '1px solid #4CAF50')
            .setStyle(StyleNameEnum.padding, '3px')
            .setStyle(StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new LabelBuilder()
                .setInnerText('Classes Management')
                .build()
            )
            .appendChild(elementsContainer)
            .build()
    }

    private updateProperty(event: any) {
        this.publisher.notifyClassName(this.classesSelector.value)
    }
}
