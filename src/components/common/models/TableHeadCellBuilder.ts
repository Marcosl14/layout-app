import RawBuilder from './RawBuilder';

export default class TableHeadCellBuilder extends RawBuilder<HTMLDivElement>{
    constructor() {
        super('th');
    }
}
