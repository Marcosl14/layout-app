import ContainerBuilder from '../models/ContainerBuilder';
import LabelBuilder from '../models/LabelBuilder';
import SelectorFromEnumBuilder from '../models/SelectorFromEnumBuilder';

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

        this.propertySelector = new SelectorFromEnumBuilder(this.options)
            .selectOption(this.domElement[this.atributeToModify])
            .addEventListener('change', this.updateProperty)
            .build()

        const elementsContainer = new ContainerBuilder()
            .appendChild(this.propertySelector)
            .build()

        this.container = new ContainerBuilder()
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
