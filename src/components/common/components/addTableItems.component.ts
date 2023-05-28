import ContainerBuilder from '../models/ContainerBuilder';
import LabelBuilder from '../models/LabelBuilder';

import { StyleNameEnum } from '../enums/style-name.enum';
import ButtonBuilder from '../models/ButtonBuilder';
import CreateNewHTMLComponentPublisher from '../publishers/CreateNewHTMLComponentPublisher';

export default class AddTableItemsComponent {
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
        this.addNewTableHead = this.addNewTableHead.bind(this);
        this.addNewTableBody = this.addNewTableBody.bind(this);
        this.addNewTableFoot = this.addNewTableFoot.bind(this);

        const createTableHeadButton = new ButtonBuilder()
            .addEventListener('click', this.addNewTableHead)
            .setInnerText('Add Table Head')
            .build()

        const createTableBodyButton = new ButtonBuilder()
            .addEventListener('click', this.addNewTableBody)
            .setInnerText('Add Table Body')
            .build()

        const createTableFootButton = new ButtonBuilder()
            .addEventListener('click', this.addNewTableFoot)
            .setInnerText('Add Table Foot')
            .build()


        this.container = new ContainerBuilder()
            .setStyle(StyleNameEnum.border, '1px solid #4CAF50')
            .setStyle(StyleNameEnum.padding, '3px')
            .setStyle(StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new LabelBuilder()
                .setInnerText('Add Table Components')
                .build()
            )
            .appendChild(new ContainerBuilder()
                .appendChild(createTableHeadButton)
                .build()
            )
            .appendChild(new ContainerBuilder()
                .appendChild(createTableBodyButton)
                .build()
            )
            .appendChild(new ContainerBuilder()
                .appendChild(createTableFootButton)
                .build()
            )
            .build()
    }

    private addNewTableHead() {
        this.createNewHTMLComponentPublisher.createNewHTMLComponent(this.domElement, 'THEAD');
    }

    private addNewTableBody() {
        this.createNewHTMLComponentPublisher.createNewHTMLComponent(this.domElement, 'TBODY');
    }

    private addNewTableFoot() {
        this.createNewHTMLComponentPublisher.createNewHTMLComponent(this.domElement, 'TFOOT');
    }
}
