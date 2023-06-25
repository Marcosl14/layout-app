import ContainerBuilder from '../models/ContainerBuilder';
import LabelBuilder from '../models/LabelBuilder';

import ButtonBuilder from '../models/ButtonBuilder';
import CreateNewHTMLComponentPublisher from '../publishers/CreateNewHTMLComponentPublisher';

export default class AddOptionComponent {
    private domElement: HTMLSelectElement;
    private container: HTMLDivElement;
    private createNewHTMLComponentPublisher: CreateNewHTMLComponentPublisher;

    constructor(domElement: HTMLElement, createNewHTMLComponentPublisher: CreateNewHTMLComponentPublisher) {
        this.createNewHTMLComponentPublisher = createNewHTMLComponentPublisher;
        this.domElement = domElement as HTMLSelectElement;

        this.selectedOption = this.selectedOption.bind(this);
        this.domElement.addEventListener('change', this.selectedOption)

        this.addComponents();
    }

    get component() {
        return this.container;
    }

    private addComponents() {
        this.addNewOption = this.addNewOption.bind(this);

        const createOptionRowButton = new ButtonBuilder()
            .addEventListener('click', this.addNewOption)
            .setInnerText('Add Option')
            .build()

        this.container = new ContainerBuilder()
            .appendChild(new LabelBuilder()
                .setInnerText('Add Option')
                .build()
            )
            .appendChild(new ContainerBuilder()
                .appendChild(createOptionRowButton)
                .build()
            )
            .build()
    }

    private addNewOption() {
        this.createNewHTMLComponentPublisher.createNewHTMLComponent(this.domElement, 'OPTION');

    }
    private selectedOption() {
        const index = this.domElement.selectedIndex;
        (this.domElement.children[index] as HTMLOptionElement).click();
    }
}
