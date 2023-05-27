import ComponentChangeObserverInterface from '../common/interfaces/component-change-observer.interface';

import RawHTMLConponent from './RawHTMLComponent';

import constants from '../common/constants/constants';
import { AddComponentEnum } from '../common/enums/add-component.enum';

export default class RawContainer extends RawHTMLConponent implements ComponentChangeObserverInterface {
    constructor(element: HTMLElement) {
        super(element);

        this.dragEnter = this.dragEnter.bind(this);
        this.dragLeaveForThisElement = this.dragLeaveForThisElement.bind(this);
        this.drop = this.drop.bind(this);

        this.openElementConfigs = this.openElementConfigs.bind(this);

        this._domElement.addEventListener('dragstart', this.dragStartWithTargetId);
        this._domElement.addEventListener('dragenter', this.dragEnter);
        this._domElement.addEventListener('dragleave', this.dragLeaveForThisElement);
        this._domElement.addEventListener('drop', this.drop);

        this._domElement.addEventListener('click', this.openElementConfigs);
    }

    get domElement() {
        return this._domElement;
    }

    private dragEnter(event: DragEvent) {
        event.stopPropagation();

        this.domElement.style.backgroundColor = constants.INVERTED_BACKGROUND_COLOR;
    }

    private dragLeaveForThisElement(event: DragEvent) {
        event.stopPropagation();

        this.domElement.style.backgroundColor = '';
        this._domElement.attributes.removeNamedItem('style');
    }

    private drop() {
        this.domElement.style.backgroundColor = '';
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
        this.insertComponentBefore(
            AddComponentEnum.addDisplayAsParentComponent,
            AddComponentEnum.addDisplayAsChildComponent
        );

        this.addChildConfigs();

        this.buildElements();
    }

    protected addChildConfigs() {
        return;
    }
}
