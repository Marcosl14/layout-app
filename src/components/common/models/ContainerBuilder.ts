import RawBuilder from './RawBuilder';

export default class ContainerBuilder extends RawBuilder<HTMLDivElement>{
    constructor() {
        super('div');
    }

    public appendChild(element: HTMLElement){
        this.element.appendChild(element);
        return this;
    }
}
