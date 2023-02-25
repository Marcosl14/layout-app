export default class LabelBuilder{
    private label: HTMLLabelElement;

    constructor() {
        this.label = document.createElement('label');
    }

    public setId(id : string) {
        this.label.id = id;
        return this;
    }

    public setInnerText(text: string){
        this.label.innerText = text;
        return this;
    }

    build(){
        return this.label;
    }
}