import ContainerBuilder from './ContainerBuilder';
import InputBuilder from './InputBuilder';
import LabelBuilder from './LabelBuilder';
export default class StylesBuilder {
    public htmlStyles: HTMLDivElement;
    private domElement: HTMLElement;

    constructor(domElement: HTMLElement) {
        this.domElement = domElement;

        const actionsContainer: HTMLDivElement = document.querySelector('#actions-container');
        actionsContainer.innerHTML = '';

        this.htmlStyles = actionsContainer;
    }

    // TODO: Margin y Padding selector deberian ser individuales para arriba, abajo costados o general...
    // Quizas con un select o checkboxes, lo podriamos lograr...

    private newMarginSelector: HTMLInputElement;
    private marginTopCheckbox: HTMLInputElement = new InputBuilder('checkbox')
        .setChecked(true)
        .build();
    private marginBottomCheckbox: HTMLInputElement = new InputBuilder('checkbox')
        .setChecked(true)
        .build();
    private marginRightCheckbox: HTMLInputElement = new InputBuilder('checkbox')
        .setChecked(true)
        .build();
    private marginLeftCheckbox: HTMLInputElement = new InputBuilder('checkbox')
        .setChecked(true)
        .build();
    addMarginSelector() {
        const label = document.createElement('label');
        label.innerText = 'Margin Selector';

        // TODO: para crear elementos necesitamos un builder generico de elementos con toooodooooos los metodos
        // TODO: para generar cada elemento en particular necesitamos un calse particular
        // O quizas necesitemos un builder para cada elemento.......

        const checkBoxContainer = new ContainerBuilder()
            .appendChild(new LabelBuilder()
                .setInnerText('T')
                .build()
            )
            .appendChild(this.marginTopCheckbox)
            .appendChild(new LabelBuilder()
                .setInnerText('B')
                .build()
            )
            .appendChild(this.marginBottomCheckbox)
            .appendChild(new LabelBuilder()
                .setInnerText('L')
                .build()
            )
            .appendChild(this.marginRightCheckbox)
            .appendChild(new LabelBuilder()
                .setInnerText('R')
                .build()
            )
            .appendChild(this.marginLeftCheckbox)
            .build()

        this.newMarginSelector = document.createElement('input');
        this.newMarginSelector.type = 'number';
        this.newMarginSelector.value = `${parseInt(this.domElement.style['margin'])}`;

        this.updateMargin = this.updateMargin.bind(this);
        this.newMarginSelector.addEventListener('input', this.updateMargin);

        this.append(label);
        this.append(checkBoxContainer);
        this.append(this.newMarginSelector);
        return this;
    }
    private updateMargin() {
        // TODO: los margenes pueden ser en px, em o auto....
        const margins = this.domElement.style['margin'].split(' ');        
        let [top,right,bottom,left] = this.getCurrentMarginsPaddingProperties(margins);

        if(this.marginTopCheckbox.checked){
            top = `${this.newMarginSelector.value}px`;
        }
        if(this.marginBottomCheckbox.checked){
            bottom = `${this.newMarginSelector.value}px`;
        }
        if(this.marginRightCheckbox.checked){
            right = `${this.newMarginSelector.value}px`;
        }
        if(this.marginLeftCheckbox.checked){
            left = `${this.newMarginSelector.value}px`;
        }

        this.domElement.style['margin'] = [top,right,bottom,left].join(' ');
    }

    private newPaddingSelector: HTMLInputElement;
    addPaddingSelector() {
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

    private append(element) {
        this.htmlStyles.appendChild(element);
    }

    private getCurrentMarginsPaddingProperties(properties: string[]): string[]{
        let top,right,bottom,left;

        if(properties.length === 1) {
            top = properties[0];
            right = properties[0];
            bottom = properties[0];
            left = properties[0];
        }

        if(properties.length === 2) {
            top = properties[0];
            right = properties[1];
            bottom = properties[0];
            left = properties[1];
        }

        if(properties.length === 3) {
            top = properties[0];
            right = properties[1];
            bottom = properties[2];
            left = properties[1];
        }

        if(properties.length === 4) {
            top = properties[0];
            right = properties[1];
            bottom = properties[2];
            left = properties[3];
        }

        return [top,right,bottom,left];
    }
}