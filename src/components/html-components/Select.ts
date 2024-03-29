import ComponentChangeObserverInterface from '../common/interfaces/component-change-observer.interface';

import SelectorFromArrayBuilder from '../common/models/SelectorFromArrayBuilder';

import RawHTMLConponent from './RawHTMLComponent';

import defineElementName from '../common/functions/define-element-name';

import CssStyleSheet from '../css-stylesheet/css-stylesheet';
import CreateNewHTMLComponentPublisher from '../common/publishers/CreateNewHTMLComponentPublisher';
import { AddComponentEnum } from '../common/enums/add-component.enum';

export default class Select extends RawHTMLConponent implements ComponentChangeObserverInterface {
    private static iterator = 0;
    protected createNewHTMLComponentPublisher?: CreateNewHTMLComponentPublisher;

    constructor(createNewHTMLComponentPublisher: CreateNewHTMLComponentPublisher) {
        const {name, iterator} = defineElementName({
            prefix: 'select',
            iterator: Select.iterator,
            instances: RawHTMLConponent.instances,
        });

        Select.iterator = iterator;

        CssStyleSheet.insertRule(`.${name} {
            margin: 10px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-shadow: inset 0 1px 3px #ddd;
        }`);

        CssStyleSheet.insertRule(`.${name}:hover {
            border: 1px solid red;
        }`);

        const element = new SelectorFromArrayBuilder([])
            .setName(name)
            .setId(name)
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
        event.preventDefault();

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
            AddComponentEnum.addOptionComponent,
            AddComponentEnum.addClassNameDefinitionComponent
        );

        this.buildElements();
    }
}
