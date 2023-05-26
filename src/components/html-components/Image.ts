import ComponentChangeObserverInterface from '../common/interfaces/component-change-observer.interface';

import ImageBuilder from '../common/models/ImageBuilder';
import RawHTMLConponent from './RawHTMLComponent';

import CssStyleSheet from '../css-stylesheet/css-stylesheet';
import defineElementName from '../common/functions/define-element-name';
import { AddComponent } from '../common/enums/add-component.enum';

export default class Image extends RawHTMLConponent implements ComponentChangeObserverInterface {
    private static iterator = 0;

    constructor() {
        const name = defineElementName(`image${Image.iterator++}`, RawHTMLConponent.instances);

        CssStyleSheet.insertRule(`.${name} {
            margin: 10px;
            padding: 10px;
            background-color: rgb(255,255,255);
            border: 1px dashed rgb(0,0,0);
        }`);

        const element = new ImageBuilder()
            .setName(name)
            .setId(name)
            .addCssClassName(name)
            .setUrl()
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
        if (component === this._domElement['name']) {
            this.buildElementConfigs();
        }
    }

    private buildElementConfigs() {
        this.insertComponentAfter(
            AddComponent.addUrlInputComponent,
            AddComponent.addClassNameDefinitionComponent
        );

        this.buildElements();
    }
}
