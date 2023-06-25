import TableHeadBuilder from '../common/models/TableHeadBuilder';
import RawHTMLConponent from './RawHTMLComponent';
import RawContainer from './RawContainer';

import CreateNewHTMLComponentPublisher from '../common/publishers/CreateNewHTMLComponentPublisher';

import defineElementName from '../common/functions/define-element-name';

import { AddComponentEnum } from '../common/enums/add-component.enum';

export default class TableHead extends RawContainer {
    private static iterator = 0;
    protected createNewHTMLComponentPublisher?: CreateNewHTMLComponentPublisher;

    constructor(createNewHTMLComponentPublisher: CreateNewHTMLComponentPublisher) {
        const {name, iterator} = defineElementName({
            prefix: 'table_head',
            iterator: TableHead.iterator,
            instances: RawHTMLConponent.instances,
        });

        TableHead.iterator = iterator;

        const element = new TableHeadBuilder()
            .setName(name)
            .setId(name)
            .draggable()
            .build();

        super(element, createNewHTMLComponentPublisher);

        this.createNewHTMLComponentPublisher.createNewHTMLComponent(this.domElement, 'TR');
    }

    protected addChildConfigs() {
        this.insertComponentAfter(
            AddComponentEnum.addTableRowComponent,
            AddComponentEnum.addClassNameDefinitionComponent
        );
    }
}
