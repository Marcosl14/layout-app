import RawBuilder from './RawBuilder';

export default class UnoderedListBuilder extends RawBuilder<HTMLUListElement>{
    constructor() {
        super('ul');
    }

    public appendChildIfDefined(element: HTMLElement){
        if(element !== undefined){
            this.element.appendChild(element);
        }
        return this;
    }
}
