import ComponentChangeObserverInterface from '../common/interfaces/component-change-observer.interface';

import FormBuilder from '../common/models/FormBuilder';
import RawHTMLConponent from './RawHTMLComponent';

import CssStyleSheet from '../css-stylesheet/css-stylesheet';
import constants from '../common/constants/constants';
import defineElementName from '../common/functions/define-element-name';

import { DisplayTypesEnum } from '../common/enums/display-types.enum';
import { AddComponent } from '../common/enums/components.enum';

export default class Form extends RawHTMLConponent implements ComponentChangeObserverInterface {
    private static iterator = 0;

    constructor() {
        const name = defineElementName(`form${Form.iterator++}`, RawHTMLConponent.instances);

        CssStyleSheet.insertRule(`.${name} {
            margin: 10px;
            padding: 10px;
            display: ${DisplayTypesEnum.flex};
            flex-direction: column;
            background-color: rgb(255,255,255);
            border: 1px dashed rgb(0,0,0);
        }`);

        const element = new FormBuilder()
            .setName(name)
            .setId(name)
            .addCssClassName(name)
            .draggable()
            .build();

        super(element);

        this.dragEnter = this.dragEnter.bind(this);
        this.dragLeaveForThisElement = this.dragLeaveForThisElement.bind(this);
        this.drop = this.drop.bind(this);

        this.mouseOver = this.mouseOver.bind(this);
        this.mouseLeave = this.mouseLeave.bind(this);

        this.openElementConfigs = this.openElementConfigs.bind(this);

        this._domElement.addEventListener('dragstart', this.dragStartWithTargetId);
        this._domElement.addEventListener('dragenter', this.dragEnter);
        this._domElement.addEventListener('dragleave', this.dragLeaveForThisElement);
        this._domElement.addEventListener('drop', this.drop);

        this._domElement.addEventListener('mouseenter', this.mouseOver);
        this._domElement.addEventListener('mouseleave', this.mouseLeave);

        this._domElement.addEventListener('click', this.openElementConfigs);
        this._domElement.addEventListener('submit', this.openElementConfigs);
    }

    get domElement() {
        return this._domElement;
    }

    private dragEnter(event: DragEvent) {
        event.stopPropagation();

        this.domElement.style.backgroundColor = constants.INVERTED_BACKGROUND_COLOR;
        this.domElement.parentElement.style.backgroundColor = '';
    }

    private dragLeaveForThisElement(event: DragEvent) {
        event.stopPropagation();

        this.domElement.style.backgroundColor = '';
        this._domElement.attributes.removeNamedItem('style');
    }

    private drop() {
        this.domElement.style.backgroundColor = '';
        this.domElement.parentElement.style.backgroundColor = constants.INVERTED_BACKGROUND_COLOR;
    }

    private hoverExists(): boolean {
        let hoverExists = false;
        this._domElement.classList.forEach((classname: string) => {
            if (CssStyleSheet.getRuleIndex(`${classname}:hover`) !== -1) {
                hoverExists = true;
            }
        })
        return hoverExists;
    }

    private mouseOver() {
        if (!this.hoverExists()) {
            this._domElement.style.backgroundColor = constants.INVERTED_BACKGROUND_COLOR;
            this._domElement.parentElement.style.backgroundColor = '';
        }
    }

    private mouseLeave() {
        if (!this.hoverExists()) {
            this._domElement.style.backgroundColor = '';
            this._domElement.parentElement.style.backgroundColor = constants.INVERTED_BACKGROUND_COLOR;
        }
    }

    protected openElementConfigs(event) {
        event.preventDefault();
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
        this.insertComponentBefore(
            AddComponent.addDisplayAsParentComponent,
            AddComponent.addDisplayAsChildComponent
        );

        this.buildElements();
    }
}
