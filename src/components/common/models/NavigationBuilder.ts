import RawBuilder from './RawBuilder';

export default class NavigationBuilder extends RawBuilder<HTMLDivElement>{
    constructor() {
        super('nav');
    }
}
