import DisplayComponent from '../common/components/display-as-parent.component';
import MarginOrPaddingComponent from '../common/components/margin-or-padding.component';
import StylesComponentsBuilder from '../common/models/StylesComponentsBuilder';
import componentsIndex from '../html-components/componentsIndex';

import { StyleNameEnum } from '../common/enums/style-name.enum';
import CssStyleSheet from '../css-stylesheet/css-stylesheet';
import BackgroundComponent from '../common/components/background.component';
import constants from '../common/constants/constants';

export default class InitAppContainer {
    private appContainer: HTMLDivElement;
    private appContainerHeightInput: HTMLInputElement;
    private appContainerWidthInput: HTMLInputElement;
    protected stylesComponents: HTMLDivElement;

    protected backgroundColor: string;
    protected fatherBackgroundColor: string;

    // TODO falta propiedad scrollable

    constructor() {
        this.appContainer = document.querySelector('#app-container');

        this.appContainerHeightInput = document.querySelector('#update-height');
        this.changeAppContainerHeight = this.changeAppContainerHeight.bind(this);
        this.appContainerHeightInput.value = `${parseInt(this.getCurrentHeight())}`;
        this.appContainerHeightInput.addEventListener('input', this.changeAppContainerHeight);

        this.appContainerWidthInput = document.querySelector('#update-width');
        this.changeAppContainerWidth = this.changeAppContainerWidth.bind(this);
        this.appContainerWidthInput.value = `${parseInt(this.getCurrentWidth())}`;
        this.appContainerWidthInput.addEventListener('input', this.changeAppContainerWidth);

        this.dragEnter = this.dragEnter.bind(this);
        this.dragOver = this.dragOver.bind(this);
        this.dragLeave = this.dragLeave.bind(this);
        this.drop = this.drop.bind(this);

        this.openElementConfigs = this.openElementConfigs.bind(this);
        this.changeSize = this.changeSize.bind(this);

        this.appContainer.addEventListener('dragenter', this.dragEnter);
        this.appContainer.addEventListener('dragover', this.dragOver);
        this.appContainer.addEventListener('dragleave', this.dragLeave);
        this.appContainer.addEventListener('drop', this.drop);

        this.appContainer.addEventListener('click', this.openElementConfigs);

        this.onResize(this.appContainer, this.changeSize);
    }

    private dragEnter(event: any) {
        event.preventDefault();
        this.backgroundColor = CssStyleSheet.getRuleStyles(this.appContainer.id)['background-color'];
        this.appContainer.style.backgroundColor = constants.INVERTED_BACKGROUND_COLOR;
    }

    private dragOver(event: any) {
        event.preventDefault();
    }

    private dragLeave() {
        this.appContainer.style.backgroundColor = '';
    }

    private drop(event: any) {
        this.appContainer.style.backgroundColor = '';

        if (event.target.nodeName !== 'DIV') {
            return;
        }

        const tipoDeElemento = event.dataTransfer.getData('text/plain');

        const newDomElement: HTMLElement = componentsIndex(tipoDeElemento)();

        const elementExists = newDomElement ? false : true;

        if (elementExists) {
            const draggable = document.getElementById(tipoDeElemento);
            event.target.appendChild(draggable);
            return;
        }

        event.target.appendChild(newDomElement);
    }

    private openElementConfigs(event) {
        event.stopPropagation();

        this.stylesComponents = new StylesComponentsBuilder()
            .appendChild(new MarginOrPaddingComponent(this.appContainer, this.appContainer.id, StyleNameEnum.margin).component)
            .appendChild(new MarginOrPaddingComponent(this.appContainer, this.appContainer.id, StyleNameEnum.padding).component)
            .appendChild(new BackgroundComponent(this.appContainer, this.appContainer.id).component)
            .appendChild(new DisplayComponent(this.appContainer, this.appContainer.id).component)
            .build();
    }

    private onResize(dom_elem, callback) {
        const resizeObserver = new ResizeObserver(() => callback() );
        resizeObserver.observe(dom_elem);
    }

    private changeSize() {
        const height = this.appContainer.style['height'];
        const width = this.appContainer.style['width'];

        if(height) {
            this.appContainerHeightInput.value = `${parseInt(height)}`;
            CssStyleSheet.getRuleStyles(this.appContainer.id)['height'] = height;
            this.appContainer.style['height'] = '';
        }
        if(width) {
            this.appContainerWidthInput.value = `${parseInt(width)}`;
            CssStyleSheet.getRuleStyles(this.appContainer.id)['width'] = width;
            this.appContainer.style['width'] = '';
        }
    }

    private changeAppContainerHeight() {
        CssStyleSheet.getRuleStyles(this.appContainer.id)['height'] = `${this.appContainerHeightInput.value}px`
    }

    private changeAppContainerWidth() {
        CssStyleSheet.getRuleStyles(this.appContainer.id)['width'] = `${this.appContainerWidthInput.value}px`
    }

    private getCurrentHeight() {
        return CssStyleSheet.getRuleStyles(this.appContainer.id)['height']
    }

    private getCurrentWidth() {
        return CssStyleSheet.getRuleStyles(this.appContainer.id)['width']
    }
}
