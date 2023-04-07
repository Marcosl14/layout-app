import RawBuilder from './RawBuilder';

export default class ContainerBuilder extends RawBuilder<HTMLDivElement>{
    constructor() {
        super('div');
    }

    public appendChild(element: HTMLElement){
        this.element.appendChild(element);
        return this;
    }

    public appendChildIfDefined(element: HTMLElement){
        if(element !== undefined){
            this.element.appendChild(element);
        }
        return this;
    }
}
