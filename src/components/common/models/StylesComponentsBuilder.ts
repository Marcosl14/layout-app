import ContainerBuilder from './ContainerBuilder';
export default class StylesComponentsBuilder {
    public htmlStylesContainer: HTMLDivElement = new ContainerBuilder().build();
    private actionsContainer: HTMLDivElement = document.querySelector('#actions-container');

    public appendChild(element) {
        this.htmlStylesContainer.appendChild(element);
        return this;
    }

    build(): HTMLDivElement {
        this.actionsContainer.innerHTML = '';
        this.actionsContainer.appendChild(this.htmlStylesContainer);
        return this.htmlStylesContainer;
    }

    remove() {
        this.actionsContainer.innerHTML = '';
    }
}
