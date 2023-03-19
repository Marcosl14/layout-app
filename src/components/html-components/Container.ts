import ContainerBuilder from '../common/models/ContainerBuilder';
import StylesComponentsBuilder from '../common/models/StylesComponentsBuilder';

import RawHTMLConponent from './RawHTMLComponent';

import CssStyleSheet from '../css-stylesheet/css-stylesheet';
import constants from '../common/constants/constants';
import defineElementId from '../common/functions/define-element-id';

import { DisplayTypesEnum } from '../common/enums/display-types.enum';

export default class Container extends RawHTMLConponent {
    private static iterator = 0;

    // TODO falta propiedad scrollable

    constructor() {
        const id = defineElementId(`container${Container.iterator++}`, RawHTMLConponent.instances);

        CssStyleSheet.insertRule(`.${id} {
            margin: 10px;
            padding: 10px;
            display: ${DisplayTypesEnum.flex};
            flex-direction: column;
            background-color: rgb(255,255,255);
            border: 1px dashed rgb(0,0,0);
        }`);

        const element = new ContainerBuilder()
            .addCssClassName(id)
            .setId(id)
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
    }

    get domElement(){
        return this._domElement;
    }

    private dragEnter(event: any) {
        event.stopPropagation();

        this.domElement.style.backgroundColor = constants.INVERTED_BACKGROUND_COLOR;
        this.domElement.parentElement.style.backgroundColor = '';
    }

    private dragLeaveForThisElement(event: any) {
        event.stopPropagation();

        this.domElement.style.backgroundColor = '';
    }

    private drop() {
        this.domElement.style.backgroundColor = '';
        this.domElement.parentElement.style.backgroundColor = constants.INVERTED_BACKGROUND_COLOR;
    }

    private mouseOver() {
        this._domElement.style.backgroundColor = constants.INVERTED_BACKGROUND_COLOR;
        this._domElement.parentElement.style.backgroundColor = '';
    }

    private mouseLeave() {
        this._domElement.style.backgroundColor = '';
        this._domElement.parentElement.style.backgroundColor = constants.INVERTED_BACKGROUND_COLOR;
    }

    protected openElementConfigs(event) {
        event.stopPropagation();

        // TODO: falta todo lo que es position... Absolute, relative, etc... No recuerdo bien como es eso...
        // inluso, el z index, que podria estar en el mismo componente.

        this.stylesComponents = new StylesComponentsBuilder()
            .appendChild(this.addIdDefinitionComponent())
            .appendChild(this.addClassNameDefinitionComponent())
            .appendChild(this.addMarginStyleComponent())
            .appendChild(this.addPaddingStyleComponent())
            .appendChild(this.addBackgroundSettingsComponent())
            .appendChild(this.addBorderSettingsComponent())
            .appendChild(this.addBoxShadowComponent())
            .appendChild(this.addDisplayAsParentComponent())
            .appendChild(this.addDisplayAsChildComponent())
            .appendChild(this.addActionsComponents())
            .build();
    }
}
