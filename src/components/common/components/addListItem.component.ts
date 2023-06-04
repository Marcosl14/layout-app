import ContainerBuilder from '../models/ContainerBuilder';
import LabelBuilder from '../models/LabelBuilder';

import { StyleNameEnum } from '../enums/style-name.enum';
import ButtonBuilder from '../models/ButtonBuilder';
import CreateNewHTMLComponentPublisher from '../publishers/CreateNewHTMLComponentPublisher';

export default class AddListItemComponent {
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
        this.addNewListItem = this.addNewListItem.bind(this);

        const createListItemButton = new ButtonBuilder()
            .addEventListener('click', this.addNewListItem)
            .setInnerText('Add')
            .build()

        this.container = new ContainerBuilder()
            .setStyle(StyleNameEnum.border, '1px solid #4CAF50')
            .setStyle(StyleNameEnum.padding, '3px')
            .setStyle(StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new LabelBuilder()
                .setInnerText('Add New List Item')
                .build()
            )
            .appendChild(new ContainerBuilder()
                .appendChild(createListItemButton)
                .build()
            )
            .build()
    }

    private addNewListItem() {
        this.createNewHTMLComponentPublisher.createNewHTMLComponent(this.domElement, 'LI');
    }
}
