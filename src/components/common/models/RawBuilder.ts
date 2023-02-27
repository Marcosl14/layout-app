import { StyleNameType } from '../types/styles-names.type';

export default abstract class RawBuilder<T extends HTMLElement>{
    protected element: T;

    constructor(element) {
        this.element = document.createElement(element);
    }

    public setId(id : string) {
        this.element.id = id;
        return this;
    }

    public setStyle(styleName: StyleNameType, value: string) {
        this.element.style[styleName] = value;
        return this;
    } // TODO comentar y ver que se rompe, ya que no manejaremos styles in-line

    public setInnerText(text: string){
        this.element.innerText = text;
        return this;
    }

    public draggable(selected = true) {
        this.element.draggable = selected;
        return this;
    }

    public addCssClassName(className: string) {
        this.element.classList.add(className);
        return this;
    }

    public addEventListener(type: string, callback) {
        this.element.addEventListener(type, callback)
        return this;
    }

    public disabled(value: boolean) {
        this.element['disabled'] = value;
        return this;
    }

    build() {
        return this.element;
    }
}
