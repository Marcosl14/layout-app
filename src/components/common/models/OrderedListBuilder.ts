import RawBuilder from './RawBuilder';

export default class OrderedListBuilder extends RawBuilder<HTMLOListElement>{
    constructor() {
        super('ol');
    }

    public appendChildIfDefined(element: HTMLElement){
        if(element !== undefined){
            this.element.appendChild(element);
        }
        return this;
    }
}
