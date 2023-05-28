import RawBuilder from './RawBuilder';

export default class TableCellBuilder extends RawBuilder<HTMLDivElement>{
    constructor() {
        super('td');
    }
}
