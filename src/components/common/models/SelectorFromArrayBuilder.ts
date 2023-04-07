import RawBuilder from './RawBuilder';
import ArraySelectorBodyInterface from '../interfaces/selector-from-array-body.interface';

export default class SelectorFromArrayBuilder extends RawBuilder<HTMLSelectElement>{
    private _options: ArraySelectorBodyInterface[];

    constructor(options: ArraySelectorBodyInterface[]) {
        super('select');
        this._options = options;
        this.addOptions();
    }

    private addOptions() {
        this._options.forEach((option) => {
            const newOption = document.createElement('option');
            newOption.text = option.text;
            newOption.value = option.value;
            this.element.appendChild(newOption)
        })
        return this;
    }

    public selectOption(value: string) {
        const foundValueIndex = this._options.findIndex((key) => key.value === value);
        this.element.selectedIndex = foundValueIndex;
        return this;
    }

    public get value() {
        return this.element.value;
    }

    public get selectedIndex() {
        return this.element.selectedIndex;
    }

    public set selectedIndex(index: number) {
        this.element.selectedIndex = index;
    }

    public get options() {
        return this.element.options;
    }
}
