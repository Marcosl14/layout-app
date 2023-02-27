import RawBuilder from './RawBuilder';

export default class SelectorBuilder extends RawBuilder<HTMLSelectElement>{
    private keys: string[];
    private options: Record<string,string>;

    constructor(options: Record<string,string>) {
        super('select');
        this.options = options;
        this.keys = Object.keys(options);

        this.addOptions();
    }

    private addOptions() {
        this.keys.forEach((optKey) => {
            const newOption = document.createElement('option');
            newOption.text = optKey;
            newOption.value = this.options[optKey];
            this.element.appendChild(newOption)
        })
        return this;
    }

    public selectOptions(option: string) {
        const foundValueIndex = this.keys.findIndex((key) => this.options[key] === option);
        this.element.selectedIndex = foundValueIndex;
        return this;
    }
}
