import ComponentChangeObserverInterface from '../common/interfaces/component-change-observer.interface';

import ContainerBuilder from '../common/models/ContainerBuilder';
import StylesComponentsBuilder from '../common/models/StylesComponentsBuilder';
import RawHTMLConponent from './RawHTMLComponent';

import CssStyleSheet from '../css-stylesheet/css-stylesheet';
import constants from '../common/constants/constants';
import defineElementName from '../common/functions/define-element-name';

import { DisplayTypesEnum } from '../common/enums/display-types.enum';

export default class Container extends RawHTMLConponent implements ComponentChangeObserverInterface {
    private static iterator = 0;

    // TODO: falta propiedad scrollable

    constructor() {
        const name = defineElementName(`container${Container.iterator++}`, RawHTMLConponent.instances);

        CssStyleSheet.insertRule(`.${name} {
            margin: 10px;
            padding: 10px;
            display: ${DisplayTypesEnum.flex};
            flex-direction: column;
            background-color: rgb(255,255,255);
            border: 1px dashed rgb(0,0,0);
        }`);

        const element = new ContainerBuilder()
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
            this._domElement.attributes.removeNamedItem('style');
        }
    }

    protected openElementConfigs(event) {
        event.stopPropagation();
        this.selectorValue();

        // TODO: falta todo lo que es position... Absolute, relative, etc... No recuerdo bien como es eso...
        // incluso, el z index, que podria estar en el mismo componente.

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
