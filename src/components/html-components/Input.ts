import ComponentChangeObserverInterface from '../common/interfaces/component-change-observer.interface';

import InputBuilder from '../common/models/InputBuilder';
import RawHTMLConponent from './RawHTMLComponent';

import defineElementName from '../common/functions/define-element-name';

import CssStyleSheet from '../css-stylesheet/css-stylesheet';

import { InputTypeEnum } from '../common/enums/input-type.enum';
import { AddComponentEnum } from '../common/enums/add-component.enum';
export default class Input extends RawHTMLConponent implements ComponentChangeObserverInterface {
    private static iterator = 0;

    constructor(createNewHTMLComponentPublisher) {
        const {name, iterator} = defineElementName({
            prefix: 'input',
            iterator: Input.iterator,
            instances: RawHTMLConponent.instances,
        });

        Input.iterator = iterator;

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

        const element = new InputBuilder(InputTypeEnum.text)
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
        this.insertComponentAfter(
            AddComponentEnum.addInputTypeSelectorComponent,
            AddComponentEnum.addClassNameDefinitionComponent
        );

        this.buildElements();
    }
}
