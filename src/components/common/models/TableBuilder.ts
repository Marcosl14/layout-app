import RawBuilder from './RawBuilder';

export default class TableBuilder extends RawBuilder<HTMLDivElement>{
    constructor() {
        super('table');
    }
}
