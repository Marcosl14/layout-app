export default class StylesBuilder{
    public htmlStyles: HTMLDivElement;
    private domElement: HTMLElement;

    constructor(domElement: HTMLElement, actionsContainer: HTMLDivElement) {
        this.domElement = domElement;
        this.htmlStyles = actionsContainer;
    }

    private newMarginSelector: HTMLInputElement;
    addMarginSelector() {
        const label = document.createElement('label');
        label.innerText = 'Margin Selector';

        this.newMarginSelector = document.createElement('input');
        this.newMarginSelector.type = 'number';
        this.newMarginSelector.value = `${parseInt(this.domElement.style['margin'])}`;

        this.updateMargin = this.updateMargin.bind(this);
        this.newMarginSelector.addEventListener('input', this.updateMargin);

        this.append(label);
        this.append(this.newMarginSelector);
        return this;
    }
    private updateMargin() {
        this.domElement.style['margin'] = `${this.newMarginSelector.value}px`
    }

    private newPaddingSelector: HTMLInputElement;
    addPaddinSelector() {
        const label = document.createElement('label');
        label.innerText = 'Padding Selector';

        this.newPaddingSelector = document.createElement('input');
        this.newPaddingSelector.type = 'number';
        this.newPaddingSelector.value = `${parseInt(this.domElement.style['padding'])}`;

        this.updatePadding = this.updatePadding.bind(this);
        this.newPaddingSelector.addEventListener('input', this.updatePadding);

        this.append(label);
        this.append(this.newPaddingSelector);
        return this;
    }
    private updatePadding() {
        this.domElement.style['padding'] = `${this.newPaddingSelector.value}px`
    }

    build(): HTMLDivElement {
        return this.htmlStyles;
    }

    private append(element){
        this.htmlStyles.appendChild(element);
    }
}