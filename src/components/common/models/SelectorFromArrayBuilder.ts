import RawBuilder from './RawBuilder';
import ArraySelectorBodyInterface from '../interfaces/selector-from-array-body.interface';

export default class SelectorFromArrayBuilder extends RawBuilder<HTMLSelectElement>{
    private options: ArraySelectorBodyInterface[];

    constructor(options: ArraySelectorBodyInterface[]) {
        super('select');
        this.options = options;
        this.addOptions();
    }

    private addOptions() {
        this.options.forEach((option) => {
            const newOption = document.createElement('option');
            newOption.text = option.text;
            newOption.value = option.value;
            this.element.appendChild(newOption)
        })
        return this;
    }

    public selectOption(value: string) {
        const foundValueIndex = this.options.findIndex((key) => key.value === value);
        this.element.selectedIndex = foundValueIndex;
        return this;
    }
}
