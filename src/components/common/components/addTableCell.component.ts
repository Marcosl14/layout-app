import ContainerBuilder from '../models/ContainerBuilder';
import LabelBuilder from '../models/LabelBuilder';

import ButtonBuilder from '../models/ButtonBuilder';
import CreateNewHTMLComponentPublisher from '../publishers/CreateNewHTMLComponentPublisher';

export default class AddTableCellComponent {
    private domElement: HTMLElement;
    private container: HTMLDivElement;
    private createNewHTMLComponentPublisher: CreateNewHTMLComponentPublisher;

    constructor(domElement: HTMLElement, createNewHTMLComponentPublisher: CreateNewHTMLComponentPublisher) {
        this.createNewHTMLComponentPublisher = createNewHTMLComponentPublisher;
        this.domElement = domElement;
        this.addComponents();
    }

    get component() {
        return this.container;
    }

    private addComponents() {
        this.addNewTableCell = this.addNewTableCell.bind(this);

        const createTableRowButton = new ButtonBuilder()
            .addEventListener('click', this.addNewTableCell)
            .setInnerText('Add Table Cell')
            .build()

        this.container = new ContainerBuilder()
            .appendChild(new LabelBuilder()
                .setInnerText('Add Table Cell')
                .build()
            )
            .appendChild(new ContainerBuilder()
                .appendChild(createTableRowButton)
                .build()
            )
            .build()
    }

    private addNewTableCell() {
        if(this.domElement.parentNode.nodeName === 'THEAD'){
            this.createNewHTMLComponentPublisher.createNewHTMLComponent(this.domElement, 'TH');
        } else {
            this.createNewHTMLComponentPublisher.createNewHTMLComponent(this.domElement, 'TD');
        }
    }
}
