import RawBuilder from './RawBuilder';

export default class TextareaBuilder extends RawBuilder<HTMLTextAreaElement>{
    constructor() {
        super('textarea');
    }

    public setValue(value: string) {
        this.element.value = value;
        return this;
    }

    public getValue() {
        return this.element.value;
    }
}
