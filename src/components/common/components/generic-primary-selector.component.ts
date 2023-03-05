import { StyleNameEnum } from '../enums/style-name.enum';
import ContainerBuilder from '../models/ContainerBuilder';
import LabelBuilder from '../models/LabelBuilder';
import SelectorBuilder from '../models/SelectorBuilder';

export default class GenericPrimarySelectorComponent {
    private domElement: HTMLElement;
    private container: HTMLDivElement;
    private label: string;
    private atributeToModify: string;
    private options: Record<string,string>;
    private propertySelector: HTMLSelectElement;

    constructor(domElement: HTMLElement, atributeToModify: string, label: string, options: Record<string,string>) {
        this.domElement = domElement;
        this.label = label;
        this.atributeToModify = atributeToModify;
        this.options = options;
        this.addComponents();
    }

    get component() {
        return this.container;
    }

    private addComponents() {
        this.updateProperty = this.updateProperty.bind(this);

        this.propertySelector = new SelectorBuilder(this.options)
            .selectOption(this.domElement[this.atributeToModify])
            .addEventListener('change', this.updateProperty)
            .build()

        const elementsContainer = new ContainerBuilder()
            .appendChild(this.propertySelector)
            .build()

        this.container = new ContainerBuilder()
            .setStyle(StyleNameEnum.border, '1px solid #4CAF50')
            .setStyle(StyleNameEnum.padding, '3px')
            .setStyle(StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new LabelBuilder()
                .setInnerText(this.label)
                .build()
            )
            .appendChild(elementsContainer)
            .build()
    }

    private updateProperty() {
        this.domElement[this.atributeToModify] = this.propertySelector.value;
    }
}
