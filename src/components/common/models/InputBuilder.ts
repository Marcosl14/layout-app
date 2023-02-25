import { InputType } from '../types/input.type';
import RawBuilder from './RawBuilder';

export default class InputBuilder extends RawBuilder<HTMLInputElement>{
    constructor(type: InputType) {
        super('input')
        this.element.type = type;
    }

    public checked(checked = true) {
        this.element.checked = checked;
        return this;
    }
}
