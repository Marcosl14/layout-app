import ComponentChangeObserverInterface from '../common/interfaces/component-change-observer.interface';

import TableHeadCellBuilder from '../common/models/TableHeadCellBuilder';
import RawHTMLConponent from './RawHTMLComponent';

import CssStyleSheet from '../css-stylesheet/css-stylesheet';

import constants from '../common/constants/constants';

import defineElementName from '../common/functions/define-element-name';
import { AddComponentEnum } from '../common/enums/add-component.enum';

export default class TableHeadCell extends RawHTMLConponent implements ComponentChangeObserverInterface {
    private static iterator = 0;

    constructor(createNewHTMLComponentPublisher) {
        const {name, iterator} = defineElementName({
            prefix: 'table_head_cell',
            iterator: TableHeadCell.iterator,
            instances: RawHTMLConponent.instances,
        });

        TableHeadCell.iterator = iterator;

        CssStyleSheet.insertRule(`.${name} {
            margin: 10px;
            background-color: rgb(255,255,255);
            border: 1px dashed rgb(0,0,0);
        }`);

        CssStyleSheet.insertRule(`.${name}:hover {
            background-color: ${constants.INVERTED_BACKGROUND_COLOR};
        }`);

        const element = new TableHeadCellBuilder()
            .setName(name)
            .setId(name)
            .setInnerText('New Head Cell Item')
            .addCssClassName(name)
            .draggable()
            .build();

        super(element, createNewHTMLComponentPublisher);

        this.openElementConfigs = this.openElementConfigs.bind(this);
        this.dragLeave = this.dragLeave.bind(this);

        this._domElement.addEventListener('dragstart', this.dragStartWithTargetId);
        this._domElement.addEventListener('dragleave', this.dragLeave);

        this._domElement.addEventListener('click', this.openElementConfigs);
    }

    get domElement() {
        return this._domElement;
    }

    protected openElementConfigs(event) {
        event.stopPropagation();
        this.selectorValue();


        this.buildElementConfigs();
    }

    public componentSelected(component) {
        if(component === this._domElement['name']) {
            this.buildElementConfigs();
        }
    }

    private buildElementConfigs() {
        this.insertComponentAfter(
            AddComponentEnum.addInnerTextChangeComponent,
            AddComponentEnum.addClassNameDefinitionComponent
        );

        this.buildElements();
    }
}
