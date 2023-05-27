import RawBuilder from './RawBuilder';

export default class ListItemBuilder extends RawBuilder<HTMLLabelElement>{
    constructor() {
        super('li');
    }
}
