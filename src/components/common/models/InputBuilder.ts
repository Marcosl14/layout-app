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

    public checked(checked = true) {
        this.element.checked = checked;
        return this;
    }
}
