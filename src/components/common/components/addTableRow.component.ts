import ContainerBuilder from '../models/ContainerBuilder';
import LabelBuilder from '../models/LabelBuilder';

import { StyleNameEnum } from '../enums/style-name.enum';
import ButtonBuilder from '../models/ButtonBuilder';
import CreateNewHTMLComponentPublisher from '../publishers/CreateNewHTMLComponentPublisher';

export default class AddTableRowComponent {
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
        this.addNewTableRow = this.addNewTableRow.bind(this);

        const createTableRowButton = new ButtonBuilder()
            .addEventListener('click', this.addNewTableRow)
            .setInnerText('Add Table Row')
            .build()

        this.container = new ContainerBuilder()
            .setStyle(StyleNameEnum.border, '1px solid #4CAF50')
            .setStyle(StyleNameEnum.padding, '3px')
            .setStyle(StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new LabelBuilder()
                .setInnerText('Add Table Row')
                .build()
            )
            .appendChild(new ContainerBuilder()
                .appendChild(createTableRowButton)
                .build()
            )
            .build()
    }

    private addNewTableRow() {
        this.createNewHTMLComponentPublisher.createNewHTMLComponent(this.domElement, 'TR');
    }
}
