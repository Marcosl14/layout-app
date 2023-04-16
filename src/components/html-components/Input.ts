import ComponentChangeObserverInterface from '../common/interfaces/component-change-observer.interface';

import InputBuilder from '../common/models/InputBuilder';
import StylesComponentsBuilder from '../common/models/StylesComponentsBuilder';
import RawHTMLConponent from './RawHTMLComponent';

import defineElementName from '../common/functions/define-element-name';

import CssStyleSheet from '../css-stylesheet/css-stylesheet';

import { InputTypeEnum } from '../common/enums/input-type.enum';
export default class Input extends RawHTMLConponent implements ComponentChangeObserverInterface {
    private static iterator = 0;

    constructor() {
        const name = defineElementName(`input${Input.iterator++}`, RawHTMLConponent.instances);

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

        // TODO: ver forma de remover el borde original del input. No es la misma propiedad que el border...

        this.buildElementConfigs();
    }

    public componentSelected(component) {
        if(component === this._domElement['name']) {
            this.buildElementConfigs();
        }
    }

    private buildElementConfigs() {
        this.stylesComponents = new StylesComponentsBuilder()
            .appendChild(this.addIdDefinitionComponent())
            .appendChild(this.addClassNameDefinitionComponent())
            .appendChild(this.addInputTypeSelectorComponent())
            .appendChild(this.addMarginStyleComponent())
            .appendChild(this.addPaddingStyleComponent())
            .appendChild(this.addBackgroundSettingsComponent())
            .appendChild(this.addBorderSettingsComponent())
            .appendChild(this.addBoxShadowComponent())
            .appendChild(this.addDisplayAsChildComponent())
            .appendChild(this.addActionsComponents())
            .build();
    }
}
