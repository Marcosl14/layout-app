import RawBuilder from './RawBuilder';

export default class ParagraphBuilder extends RawBuilder<HTMLParagraphElement>{
    constructor() {
        super('p');
    }
}
