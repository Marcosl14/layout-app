import RawBuilder from './RawBuilder';

export default class TableBuilder extends RawBuilder<HTMLDivElement>{
    constructor() {
        super('table');
    }

    public appendChildIfDefined(element: HTMLElement){
        if(element !== undefined){
            this.element.appendChild(element);
        }
        return this;
    }
}
