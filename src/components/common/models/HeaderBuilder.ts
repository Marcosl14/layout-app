import RawBuilder from './RawBuilder';

export default class HeaderBuilder extends RawBuilder<HTMLDivElement>{
    constructor() {
        super('header');
    }
}
