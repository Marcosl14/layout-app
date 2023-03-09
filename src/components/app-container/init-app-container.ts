import DisplayComponent from '../common/components/display-as-parent.component';
import MarginOrPaddingComponent from '../common/components/margin-or-padding.component';
import StylesComponentsBuilder from '../common/models/StylesComponentsBuilder';
import componentsIndex from '../html-components/componentsIndex';

import { StyleNameEnum } from '../common/enums/style-name.enum';
import CssStyleSheet from '../css-stylesheet/css-stylesheet';
import BackgroundComponent from '../common/components/background.component';

export default class InitAppContainer {
    private appContainer: HTMLDivElement;
    private appContainerHeightInput: HTMLInputElement;
    private appContainerWidthInput: HTMLInputElement;
    protected stylesComponents: HTMLDivElement;

    protected backgroundColor: string;
    protected opositeBackgroundColor: string;

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

        this.openElementConfigs = this.openElementConfigs.bind(this);
        this.dragEnter = this.dragEnter.bind(this);
        this.dragOver = this.dragOver.bind(this);
        this.dragLeave = this.dragLeave.bind(this);
        this.drop = this.drop.bind(this);

        this.appContainer.addEventListener('dragenter', this.dragEnter);
        this.appContainer.addEventListener('dragover', this.dragOver);
        this.appContainer.addEventListener('dragleave', this.dragLeave);
        this.appContainer.addEventListener('drop', this.drop);
        this.appContainer.addEventListener('click', this.openElementConfigs);
    }

    private dragEnter(event: any) {
        event.preventDefault();
        this.appContainer.classList.add('drag-enter-app');
        this.appContainer.classList.remove('drag-leave-app');
    }

    private dragOver(event: any) {
        event.preventDefault();
        this.appContainer.classList.add('drag-enter-app');
        this.appContainer.classList.remove('drag-leave-app');
    }

    private dragLeave() {
        this.appContainer.classList.add('drag-leave-app');
        this.appContainer.classList.remove('drag-enter-app');
    }

    private drop(event: any) {
        this.appContainer.classList.add('drag-leave-app');
        this.appContainer.classList.remove('drag-enter-app');

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
            .appendChild(new MarginOrPaddingComponent(this.appContainer, StyleNameEnum.padding).component)
            .appendChild(new BackgroundComponent(this.appContainer).component)
            .appendChild(new DisplayComponent(this.appContainer).component)
            .build();
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
