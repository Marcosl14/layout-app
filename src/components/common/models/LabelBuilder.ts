import RawBuilder from './RawBuilder';

export default class LabelBuilder extends RawBuilder<HTMLLabelElement>{
    constructor() {
        super('label');
    }
}
