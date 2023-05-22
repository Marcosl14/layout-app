import DisplayComponent from '../common/components/display-as-parent.component';
import MarginOrPaddingComponent from '../common/components/margin-or-padding.component';
import StylesComponentsBuilder from '../common/models/StylesComponentsBuilder';
import RawHTMLConponent from '../html-components/RawHTMLComponent';
import BackgroundComponent from '../common/components/background.component';
import componentsIndex from '../html-components/componentsIndex';
import constants from '../common/constants/constants';

import { StyleNameEnum } from '../common/enums/style-name.enum';
import CssStyleSheet from '../css-stylesheet/css-stylesheet';

import ComponentChangePublisher from '../common/publishers/ComponentChangePublisher';


export default class InitAppContainer {
    private appContainer: HTMLDivElement;
    private appContainerClassName = 'body';
    private appContainerHeightInput: HTMLInputElement;
    private appContainerWidthInput: HTMLInputElement;
    protected stylesComponents: HTMLDivElement;

    protected backgroundColor: string;
    protected fatherBackgroundColor: string;

    private componentSelector: HTMLSelectElement = document.querySelector('#select-item');
    private versionLabel: HTMLLabelElement = document.querySelector('#version-label');

    private componentChangePublisher: ComponentChangePublisher;

    private printHtmlButton: HTMLButtonElement = document.querySelector('#print-html-file');

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

        this.sendComponentName = this.sendComponentName.bind(this);
        this.componentChangePublisher = new ComponentChangePublisher();

        this.componentSelector.addEventListener('change', this.sendComponentName);

        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const packageVersion = require('../../../package.json').version;
        this.versionLabel.innerText = `Version: ${packageVersion}`;

        this.printHtmlButton.addEventListener('click', this.printHtmlFile);
    }

    private dragEnter(event: DragEvent) {
        event.preventDefault();
        this.backgroundColor = CssStyleSheet.getRuleStyles(this.appContainerClassName)['background-color'];
        this.appContainer.style.backgroundColor = constants.INVERTED_BACKGROUND_COLOR;
    }

    private dragOver(event: DragEvent) {
        event.preventDefault();
    }

    private dragLeave() {
        this.appContainer.style.backgroundColor = '';
        this.appContainer.attributes.removeNamedItem('style');
    }

    private drop(event: DragEvent) {
        this.appContainer.style.backgroundColor = '';

        const targetElement = event.target as HTMLElement;

        if (targetElement.nodeName !== 'DIV') {
            return;
        }

        const elementType = event.dataTransfer.getData('text/plain');

        const newDomElement: RawHTMLConponent | undefined = componentsIndex(elementType)();

        const elementExists = newDomElement ? false : true;

        if (elementExists) {
            const draggable = document.getElementById(elementType);
            targetElement.appendChild(draggable);
            return;
        } else {
            this.componentChangePublisher.attach(newDomElement);
        }

        targetElement.appendChild(newDomElement.domElement);
    }

    private openElementConfigs(event: MouseEvent) {
        event.stopPropagation();

        this.stylesComponents = new StylesComponentsBuilder()
            .appendChild(new MarginOrPaddingComponent(
                this.appContainer,
                StyleNameEnum.margin).component)
            .appendChild(new MarginOrPaddingComponent(
                this.appContainer,
                StyleNameEnum.padding).component)
            .appendChild(new BackgroundComponent(this.appContainer).component)
            .appendChild(new DisplayComponent(this.appContainer).component)
            .build();
    }

    private onResize(dom_elem, callback) {
        const resizeObserver = new ResizeObserver(() => callback());
        resizeObserver.observe(dom_elem);
    }

    private changeSize() {
        const height = this.appContainer.style['height'];
        const width = this.appContainer.style['width'];

        if (height) {
            this.appContainerHeightInput.value = `${parseInt(height)}`;
            CssStyleSheet.getRuleStyles(this.appContainerClassName)['height'] = height;
            this.appContainer.style['height'] = '';
        }
        if (width) {
            this.appContainerWidthInput.value = `${parseInt(width)}`;
            CssStyleSheet.getRuleStyles(this.appContainerClassName)['width'] = width;
            this.appContainer.style['width'] = '';
        }
    }

    private changeAppContainerHeight() {
        CssStyleSheet.getRuleStyles(this.appContainerClassName)['height'] = `${this.appContainerHeightInput.value}px`
    }

    private changeAppContainerWidth() {
        CssStyleSheet.getRuleStyles(this.appContainerClassName)['width'] = `${this.appContainerWidthInput.value}px`
    }

    private getCurrentHeight() {
        return CssStyleSheet.getRuleStyles(this.appContainerClassName)['height']
    }

    private getCurrentWidth() {
        return CssStyleSheet.getRuleStyles(this.appContainerClassName)['width']
    }

    private printHtmlFile() {
        const mainContainer = document.querySelector('#app-container').innerHTML;
        const removeDraggableRegEx = new RegExp(' draggable="true"', 'g');
        mainContainer.replace(removeDraggableRegEx, '');

        // TODO: ver si deberia ir desplegando el arbol de elementos HTML e ir armando el html aqui.
        // TODO: ver si es necesario borrar el style y lo que haya dentro....
        // TODO: eliminar el draggable

        const outputHtml = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body id="app-container" class="body">
            ${mainContainer}
        </body>
        </html>`

        console.log(outputHtml);
    }

    private sendComponentName() {
        this.componentChangePublisher.notifyComponentName(this.componentSelector.value);
    }
}
