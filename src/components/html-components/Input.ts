import dragStartWithTargetId from '../common/functions/drag-star-with-target-id';

export default class TextInput {
    private static iterator = 0;
    private _domElement: HTMLInputElement;

    constructor() {
        this._domElement = document.createElement('input');
        this._domElement.type = 'text';
        this._domElement.style['margin'] = '5px';
        this._domElement.id = 'input' + TextInput.iterator++;

        this._domElement.draggable = true;
        this._domElement.addEventListener('dragstart', dragStartWithTargetId);
    
        this.openElementConfigs = this.openElementConfigs.bind(this);
        this._domElement.addEventListener('click', this.openElementConfigs);
    }

    get domElement(){
        return this._domElement;
    }
    
    private openElementConfigs() {
        // console.log(e.target.nodeName);
        // console.log(e.target.id);
    
        // e.target.parentNode.removeChild(e.target);
    }
}