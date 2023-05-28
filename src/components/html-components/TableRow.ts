import TableRowBuilder from '../common/models/TableRowBuilder';
import RawHTMLConponent from './RawHTMLComponent';
import RawContainer from './RawContainer';

import CreateNewHTMLComponentPublisher from '../common/publishers/CreateNewHTMLComponentPublisher';

import CssStyleSheet from '../css-stylesheet/css-stylesheet';
import constants from '../common/constants/constants';
import defineElementName from '../common/functions/define-element-name';

import { DisplayTypesEnum } from '../common/enums/display-types.enum';
import { AddComponentEnum } from '../common/enums/add-component.enum';

export default class TableRow extends RawContainer {
    private static iterator = 0;
    protected createNewHTMLComponentPublisher?: CreateNewHTMLComponentPublisher;

    constructor(createNewHTMLComponentPublisher: CreateNewHTMLComponentPublisher) {
        const name = defineElementName(`table_row${TableRow.iterator++}`, RawHTMLConponent.instances);

        CssStyleSheet.insertRule(`.${name} {
            padding: 10px;
            display: ${DisplayTypesEnum.flex};
            flex-direction: row;
            background-color: rgb(255,255,255);
            border: 1px dashed rgb(0,0,0);
        }`);

        CssStyleSheet.insertRule(`.${name}:hover {
            background-color: ${constants.INVERTED_BACKGROUND_COLOR};
        }`);

        const element = new TableRowBuilder()
            .setName(name)
            .setId(name)
            .addCssClassName(name)
            .draggable()
            .build();

        super(element, createNewHTMLComponentPublisher);
    }

    protected addChildConfigs() {
        this.insertComponentAfter(
            AddComponentEnum.addTableCellComponent,
            AddComponentEnum.addClassNameDefinitionComponent
        );
    }
}
