import RawBuilder from './RawBuilder';
import { InputTypeEnum } from '../enums/input-type.enum';

export default class InputBuilder extends RawBuilder<HTMLInputElement>{
    constructor(type: InputTypeEnum) {
        super('input')
        this.element.type = type;
    }

    public setValue(value: string) {
        this.element.value = value;
        return this;
    }

    public setName(name: string) {
        this.element.name = name;
        return this;
    }

    public checked(checked = true) {
        this.element.checked = checked;
        return this;
    }

    public setMax(max: number) {
        this.element.max = `${max}`;
        return this;
    }

    public setMin(min: number) {
        this.element.min = `${min}`;
        return this;
    }
}
