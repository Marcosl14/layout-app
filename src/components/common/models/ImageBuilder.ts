import RawBuilder from './RawBuilder';

export default class ImageBuilder extends RawBuilder<HTMLImageElement>{
    constructor() {
        super('img');
    }

    public setUrl(url?: string) {
        this.element.src = url;
        return this;
    }
}
