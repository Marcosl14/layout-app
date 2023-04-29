import { StyleNameEnum } from '../enums/style-name.enum';
export default abstract class RawBuilder<T extends HTMLElement>{
    protected element: T;

    constructor(element) {
        this.element = document.createElement(element);
    }

    public setId(id : string) {
        this.element.id = id;
        return this;
    }

    public setName(name : string) {
        this.element['name'] = name;
        return this;
    }

    public setStyle(styleName: StyleNameEnum, value: string) {
        this.element.style[styleName] = value;
        return this;
    }

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

    public getAllChilds(): Node[] {
        const childNodes: Node[] = [];

        this.element.childNodes.forEach((node) => {
            childNodes.push(node)
        })

        return childNodes;
    }

    public findChildNodeByName(name: string): Node {
        return this.getAllChilds().find((node) => {
            return node['name'] === name
        })
    }

    public appendChild(element: HTMLElement) {
        this.element.appendChild(element)
        return this;
    }

    public removeChildNode(node: Node) {
        this.element.removeChild(node)
        return this;
    }

    public removeChildNodeByName(name: string) {
        this.removeChildNode(this.findChildNodeByName(name))
    }

    public mooveChildUpperPositionByName(name: string) {
        const nodesArray = this.getAllChilds();

        const indexOfChild = nodesArray.findIndex((node) => {
            return node['name'] === name
        });

        if(indexOfChild !== 0) {
            const itemsToMove = nodesArray.slice( - nodesArray.length + indexOfChild - 1 );

            itemsToMove.forEach((node) => this.element.removeChild(node));

            this.element.appendChild(nodesArray[indexOfChild]);

            itemsToMove.splice(1, 1);

            itemsToMove.forEach((node) => this.element.appendChild(node));
        }
    }

    public mooveChildLowerPositionByName(name: string) {
        const nodesArray = this.getAllChilds();

        const indexOfChild = nodesArray.findIndex((node) => {
            return node['name'] === name
        });

        if(indexOfChild !== nodesArray.length - 1) {
            const itemsToMove = nodesArray.slice( - nodesArray.length + indexOfChild );

            itemsToMove.forEach((node) => this.element.removeChild(node));

            const selectedElement = itemsToMove.splice(0, 1)[0];

            itemsToMove.splice(0 + 1, 0, selectedElement);

            itemsToMove.forEach((node) => this.element.appendChild(node));
        }
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
