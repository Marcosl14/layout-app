import RawBuilder from './RawBuilder';

export default class MainBuilder extends RawBuilder<HTMLDivElement>{
    constructor() {
        super('main');
    }
}
