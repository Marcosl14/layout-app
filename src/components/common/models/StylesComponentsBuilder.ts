export default class StylesComponentsBuilder {
    public htmlStylesContainer: HTMLDivElement;

    constructor() {
        const actionsContainer: HTMLDivElement = document.querySelector('#actions-container');
        actionsContainer.innerHTML = '';
        this.htmlStylesContainer = actionsContainer;
    }

    public appendChild(element) {
        this.htmlStylesContainer.appendChild(element);
        return this;
    }

    build(): HTMLDivElement {
        return this.htmlStylesContainer;
    }
}
