import ContainerBuilder from '../common/models/ContainerBuilder';
import defineElementId from '../common/functions/define-element-id';
import RawHTMLConponent from './RawHTMLComponent';
import CssStyleSheet from '../css-stylesheet/css-stylesheet';
import StylesComponentsBuilder from '../common/models/StylesComponentsBuilder';

import { DisplayTypesEnum } from '../common/enums/display-types.enum';
import constants from '../common/constants/constants';

export default class Container extends RawHTMLConponent {
    private static iterator = 0;

    private backgroundColor: string;
    private fatherBackgroundColor: string;

    // TODO falta propiedad scrollable

    constructor() {
        const id = defineElementId(`container${Container.iterator++}`, RawHTMLConponent.instances);

        CssStyleSheet.styleSheet.insertRule(`.${id} {
            margin: 10px;
            padding: 10px;
            display: ${DisplayTypesEnum.flex};
            flex-direction: column;
            background-color: rgb(255,255,255);
            border: 1px dashed black;
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

        this.backgroundColor = CssStyleSheet.getRuleStyles(this.domElement.id)['background-color'];
        this.fatherBackgroundColor = CssStyleSheet.getRuleStyles(this.domElement.parentElement.id)['background-color'];
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
        this.backgroundColor = CssStyleSheet.getRuleStyles(this.domElement.id)['background-color'];
        this.fatherBackgroundColor = CssStyleSheet.getRuleStyles(this.domElement.parentElement.id)['background-color'];
        this._domElement.style.backgroundColor = constants.INVERTED_BACKGROUND_COLOR;
        this._domElement.parentElement.style.backgroundColor = '';
    }

    private mouseLeave() {
        this._domElement.style.backgroundColor = '';
        this._domElement.parentElement.style.backgroundColor = constants.INVERTED_BACKGROUND_COLOR;
    }

    protected openElementConfigs(event) {
        event.stopPropagation();

        this.stylesComponents = new StylesComponentsBuilder()
            .appendChild(this.addIdDefinitionComponent())
            .appendChild(this.addMarginStyleComponent())
            .appendChild(this.addPaddingStyleComponent())
            .appendChild(this.addBackgroundSettingsComponent())
            .appendChild(this.addBorderSettingsComponent())
            .appendChild(this.addDisplayAsParentComponent())
            .appendChild(this.addDisplayAsChildComponent())
            .appendChild(this.addActionsComponents())
            .build();
    }
}
