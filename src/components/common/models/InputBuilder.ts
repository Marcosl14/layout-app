export default class InputBuilder{
    private input: HTMLInputElement;

    constructor(type: 'text' | 'number' | 'checkbox') {
        this.input = document.createElement('input');
        this.input.type = type;
    }

    public setId(id : string) {
        this.input.id = id;
        return this;
    }

    public setChecked(checked: boolean) {
        this.input.checked = checked;
        return this;
    }

    build() {
        return this.input;
    }
}