import RawBuilder from './RawBuilder';

export default class AnchorBuilder extends RawBuilder<HTMLAnchorElement>{
    constructor() {
        super('a');
    }

    public setHiperlink(hiperlink: string) {
        this.element.href = hiperlink;
        return this;
    }
}
