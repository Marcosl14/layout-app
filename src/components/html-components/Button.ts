import ButtonBuilder from '../common/models/ButtonBuilder';
import StylesComponentsBuilder from '../common/models/StylesComponentsBuilder';

import RawHTMLConponent from './RawHTMLComponent';

import CssStyleSheet from '../css-stylesheet/css-stylesheet';
import defineElementId from '../common/functions/define-element-id';

export default class Button extends RawHTMLConponent {
    private static iterator = 0;

    constructor() {
        // TODO cuando creo un nombre futuro, y justo creo un elemento con ese nombre futuro, tira error... por eso yo le pasaba el iterator... ver como solucionar...

        const id = defineElementId(`button${Button.iterator++}`, RawHTMLConponent.instances);

        // TODO habria que reemplazar todos los caracteres especiales por guiones o algo asi...

        CssStyleSheet.styleSheet.insertRule(`.${id} {
            margin: 10px;
            padding: 10px;
            background-color: #4CAF50;
            border-style: solid;
            border-color: #4CAF50;
            border-width: 1px;
            color: #FFFFFF;
            text-align: center;
        }`);

        CssStyleSheet.styleSheet.insertRule(`.${id}:hover {opacity: 0.6}`);

        const element = new ButtonBuilder()
            .setId(id)
            .addCssClassName(id)
            .setInnerText('New Button')
            .draggable()
            .build();

        super(element);

        this.openElementConfigs = this.openElementConfigs.bind(this);
        this.dragLeave = this.dragLeave.bind(this);

        this._domElement.addEventListener('dragstart', this.dragStartWithTargetId);
        this._domElement.addEventListener('click', this.openElementConfigs);
        this._domElement.addEventListener('dragleave', this.dragLeave);
    }

    get domElement() {
        return this._domElement;
    }

    protected openElementConfigs(event) {
        event.stopPropagation();

        this.stylesComponents = new StylesComponentsBuilder()
            .appendChild(this.addIdDefinitionComponent())
            .appendChild(this.addClassNameDefinitionComponent())
            .appendChild(this.addInnerTextChangeComponent())
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
