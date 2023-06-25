import RawBuilder from './RawBuilder';

export default class OptionBuilder extends RawBuilder<HTMLOptionElement>{
    constructor() {
        super('option');
    }

    public getValue(){
        return this.element.value;
    }

    public getText(){
        return this.element.text;
    }

    public setValue(value: string){
        this.element.value = value;
        return this;
    }

    public setText(text: string){
        this.element.text = text;
        return this;
    }
}
