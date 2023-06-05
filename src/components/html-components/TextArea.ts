import ComponentChangeObserverInterface from '../common/interfaces/component-change-observer.interface';

import TextAreaBuilder from '../common/models/TextAreaBuilder';
import RawHTMLConponent from './RawHTMLComponent';

import defineElementName from '../common/functions/define-element-name';

import CssStyleSheet from '../css-stylesheet/css-stylesheet';

export default class TextArea extends RawHTMLConponent implements ComponentChangeObserverInterface {
    private static iterator = 0;

    constructor(createNewHTMLComponentPublisher) {
        const name = defineElementName(`text_area${TextArea.iterator++}`, RawHTMLConponent.instances);

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

        const element = new TextAreaBuilder()
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
        this.selectorValue();
        this.buildElementConfigs();
    }

    public componentSelected(component) {
        if(component === this._domElement['name']) {
            this.buildElementConfigs();
        }
    }

    private buildElementConfigs() {
        this.buildElements();
    }
}
