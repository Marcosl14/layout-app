import ComponentChangeObserverInterface from '../common/interfaces/component-change-observer.interface';

import ButtonBuilder from '../common/models/ButtonBuilder';
import RawHTMLConponent from './RawHTMLComponent';

import CssStyleSheet from '../css-stylesheet/css-stylesheet';

import defineElementName from '../common/functions/define-element-name';
import { AddComponentEnum } from '../common/enums/add-component.enum';

export default class Button extends RawHTMLConponent implements ComponentChangeObserverInterface {
    private static iterator = 0;

    constructor() {
        const name = defineElementName(`button${Button.iterator++}`, RawHTMLConponent.instances);

        CssStyleSheet.insertRule(`.${name} {
            margin: 10px;
            padding: 10px;
            background-color: #4CAF50;
            border-style: solid;
            border-color: #4CAF50;
            border-width: 1px;
            color: #FFFFFF;
            text-align: center;
        }`);

        CssStyleSheet.insertRule(`.${name}:hover {opacity: 0.6}`);

        const element = new ButtonBuilder()
            .setName(name)
            .setId(name)
            .addCssClassName(name)
            .setInnerText('New Button')
            .draggable()
            .build();

        super(element);

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

        this.insertComponentBefore(
            AddComponentEnum.addDisplayAsParentComponent,
            AddComponentEnum.addDisplayAsChildComponent
        );

        this.buildElements();
    }
}
