import TableFootBuilder from '../common/models/TableFootBuilder';
import RawHTMLConponent from './RawHTMLComponent';
import RawContainer from './RawContainer';

import CreateNewHTMLComponentPublisher from '../common/publishers/CreateNewHTMLComponentPublisher';

import CssStyleSheet from '../css-stylesheet/css-stylesheet';
import constants from '../common/constants/constants';
import defineElementName from '../common/functions/define-element-name';

import { AddComponentEnum } from '../common/enums/add-component.enum';

export default class TableFoot extends RawContainer {
    private static iterator = 0;
    protected createNewHTMLComponentPublisher?: CreateNewHTMLComponentPublisher;

    constructor(createNewHTMLComponentPublisher: CreateNewHTMLComponentPublisher) {
        const name = defineElementName(`table_foot${TableFoot.iterator++}`, RawHTMLConponent.instances);

        CssStyleSheet.insertRule(`.${name} {
            padding: 10px;
            background-color: rgb(255,255,255);
            border: 1px dashed rgb(0,0,0);
        }`);

        CssStyleSheet.insertRule(`.${name}:hover {
            background-color: ${constants.INVERTED_BACKGROUND_COLOR};
        }`);

        const element = new TableFootBuilder()
            .setName(name)
            .setId(name)
            .addCssClassName(name)
            .draggable()
            .build();

        super(element, createNewHTMLComponentPublisher);
    }

    protected addChildConfigs() {
        this.insertComponentAfter(
            AddComponentEnum.addTableRowComponent,
            AddComponentEnum.addClassNameDefinitionComponent
        );
    }
}
