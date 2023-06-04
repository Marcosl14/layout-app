import RawBuilder from './RawBuilder';

export default class TableRowBuilder extends RawBuilder<HTMLDivElement>{
    constructor() {
        super('tr');
    }
}
