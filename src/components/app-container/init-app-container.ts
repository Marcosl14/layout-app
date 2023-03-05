import DisplayComponent from '../common/components/display-as-parent.component';
import MarginOrPaddingComponent from '../common/components/margin-or-padding.component';
import StylesComponentsBuilder from '../common/models/StylesComponentsBuilder';
import componentsIndex from '../html-components/componentsIndex';

import { StyleNameEnum } from '../common/enums/style-name.enum';

export default class InitAppContainer {
    private appContainer: HTMLDivElement;
    protected stylesComponents: HTMLDivElement;

    constructor() {
        this.appContainer = document.querySelector('#app-container');

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
            .appendChild(new DisplayComponent(this.appContainer).component)
            .build();
    }
}
