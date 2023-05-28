import TableHeadCellBuilder from '../common/models/TableHeadCellBuilder';
import RawHTMLConponent from './RawHTMLComponent';
import RawContainer from './RawContainer';

import CssStyleSheet from '../css-stylesheet/css-stylesheet';
import constants from '../common/constants/constants';
import defineElementName from '../common/functions/define-element-name';

import { AddComponentEnum } from '../common/enums/add-component.enum';

export default class TableHeadCell extends RawContainer {
    private static iterator = 0;
    constructor() {
        const name = defineElementName(`table_head_cell${TableHeadCell.iterator++}`, RawHTMLConponent.instances);

        CssStyleSheet.insertRule(`.${name} {
            padding: 10px;
            background-color: rgb(255,255,255);
            border: 1px dashed rgb(0,0,0);
        }`);

        CssStyleSheet.insertRule(`.${name}:hover {
            background-color: ${constants.INVERTED_BACKGROUND_COLOR};
        }`);

        const element = new TableHeadCellBuilder()
            .setName(name)
            .setId(name)
            .addCssClassName(name)
            .draggable()
            .build();

        super(element);
    }

    protected addChildConfigs() {
        this.insertComponentAfter(
            AddComponentEnum.addInnerTextChangeComponent,
            AddComponentEnum.addClassNameDefinitionComponent
        );
    }
}
