import TableRowBuilder from '../common/models/TableRowBuilder';
import RawHTMLConponent from './RawHTMLComponent';
import RawContainer from './RawContainer';

import CreateNewHTMLComponentPublisher from '../common/publishers/CreateNewHTMLComponentPublisher';

import defineElementName from '../common/functions/define-element-name';

import { AddComponentEnum } from '../common/enums/add-component.enum';

export default class TableRow extends RawContainer {
    private static iterator = 0;
    protected createNewHTMLComponentPublisher?: CreateNewHTMLComponentPublisher;

    constructor(createNewHTMLComponentPublisher: CreateNewHTMLComponentPublisher, parentNode: HTMLElement) {
        const {name, iterator} = defineElementName({
            prefix: 'table_row',
            iterator: TableRow.iterator,
            instances: RawHTMLConponent.instances,
        });

        TableRow.iterator = iterator;

        const element = new TableRowBuilder()
            .setName(name)
            .setId(name)
            .draggable()
            .build();

        super(element, createNewHTMLComponentPublisher);

        if(parentNode.nodeName === 'THEAD'){
            this.createNewHTMLComponentPublisher.createNewHTMLComponent(this.domElement, 'TH', 3);
        } else {
            this.createNewHTMLComponentPublisher.createNewHTMLComponent(this.domElement, 'TD', 3);
        }
    }

    protected addChildConfigs() {
        this.insertComponentAfter(
            AddComponentEnum.addTableCellComponent,
            AddComponentEnum.addClassNameDefinitionComponent
        );
    }
}
