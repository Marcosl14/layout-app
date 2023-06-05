import TableBodyBuilder from '../common/models/TableBodyBuilder';
import RawHTMLConponent from './RawHTMLComponent';
import RawContainer from './RawContainer';

import CreateNewHTMLComponentPublisher from '../common/publishers/CreateNewHTMLComponentPublisher';

import defineElementName from '../common/functions/define-element-name';

import { AddComponentEnum } from '../common/enums/add-component.enum';

export default class TableBody extends RawContainer {
    private static iterator = 0;
    protected createNewHTMLComponentPublisher?: CreateNewHTMLComponentPublisher;

    constructor(createNewHTMLComponentPublisher: CreateNewHTMLComponentPublisher) {
        const name = defineElementName(`table_body${TableBody.iterator++}`, RawHTMLConponent.instances);

        const element = new TableBodyBuilder()
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
