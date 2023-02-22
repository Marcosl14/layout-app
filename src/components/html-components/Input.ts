import dragStartWithTargetId from '../common/functions/drag-star-with-target-id';

export default class Input {
    private static iterator = 0;
    private _domElement: HTMLInputElement;

    constructor() {
        this._domElement = document.createElement('input');
        // TODO cambiar por clases css
        this._domElement.type = 'text';
        this._domElement.style.margin = '5px';
        this._domElement.id = 'input' + Input.iterator++;

        this._domElement.draggable = true;
        this._domElement.addEventListener('dragstart', dragStartWithTargetId);
    
        this._domElement.addEventListener('click', this.openElementConfigs);
    }

    get domElement(){
        return this._domElement;
    }
    
    private openElementConfigs(e: any) {
        console.log(e.target.nodeName);
        console.log(e.target.id);
    
        e.target.parentNode.removeChild(e.target);
    }
}