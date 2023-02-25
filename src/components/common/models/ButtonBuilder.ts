import RawBuilder from './RawBuilder';

export default class ButtonBuilder extends RawBuilder<HTMLButtonElement>{
    constructor() {
        super('button');
    }
}
