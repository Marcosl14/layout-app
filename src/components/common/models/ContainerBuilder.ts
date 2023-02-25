export default class ContainerBuilder{
    private container: HTMLDivElement;

    constructor() {
        this.container = document.createElement('div');
    }

    public setId(id : string) {
        this.container.id = id;
        return this;
    }

    public appendChild(element: HTMLElement){
        this.container.appendChild(element);
        return this;
    }

    build() {
        return this.container;
    }
}