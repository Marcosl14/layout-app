import RawBuilder from './RawBuilder';

export default class ListItemBuilder extends RawBuilder<HTMLLIElement>{
    constructor() {
        super('li');
    }
}
