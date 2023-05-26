import ComponentChangeObserverInterface from '../common/interfaces/component-change-observer.interface';

import TitleBuilder from '../common/models/TitleBuilder';
import RawHTMLConponent from './RawHTMLComponent';

import CssStyleSheet from '../css-stylesheet/css-stylesheet';

import defineElementName from '../common/functions/define-element-name';

import { TitleTypesEnum } from '../common/enums/title.types.enum';
import { AddComponent } from '../common/enums/add-component.enum';

export default class Title extends RawHTMLConponent implements ComponentChangeObserverInterface {
    private static iterator = 0;

    constructor(type: TitleTypesEnum) {
        const name = defineElementName(`title${Title.iterator++}`, RawHTMLConponent.instances);

        CssStyleSheet.insertRule(`.${name} {
            margin: 10px;
            padding: 10px;
            display: inline
        }`);

        const element = new TitleBuilder(type)
            .setName(name)
            .setId(name)
            .addCssClassName(name)
            .setInnerText(`New Title ${type}`)
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
            AddComponent.addInnerTextChangeComponent,
            AddComponent.addClassNameDefinitionComponent
        );

        this.buildElements();
    }
}
