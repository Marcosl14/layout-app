import RawBuilder from './RawBuilder';

export default class FormBuilder extends RawBuilder<HTMLFormElement>{
    constructor() {
        super('form');
    }

    public appendChildIfDefined(element: HTMLElement){
        if(element !== undefined){
            this.element.appendChild(element);
        }
        return this;
    }
}
