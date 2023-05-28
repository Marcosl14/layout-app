import RawBuilder from './RawBuilder';

export default class TableHeadBuilder extends RawBuilder<HTMLDivElement>{
    constructor() {
        super('thead');
    }
}
