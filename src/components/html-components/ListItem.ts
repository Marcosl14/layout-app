import ComponentChangeObserverInterface from '../common/interfaces/component-change-observer.interface';

import ListItemBuilder from '../common/models/ListItemBuilder';
import RawHTMLConponent from './RawHTMLComponent';

import defineElementName from '../common/functions/define-element-name';
import { AddComponentEnum } from '../common/enums/add-component.enum';

export default class ListItem extends RawHTMLConponent implements ComponentChangeObserverInterface {
    private static iterator = 0;

    constructor(createNewHTMLComponentPublisher) {
        const {name, iterator} = defineElementName({
            prefix: 'list_item',
            iterator: ListItem.iterator,
            instances: RawHTMLConponent.instances,
        });

        ListItem.iterator = iterator;

        const element = new ListItemBuilder()
            .setName(name)
            .setId(name)
            .setInnerText('New List Item')
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
