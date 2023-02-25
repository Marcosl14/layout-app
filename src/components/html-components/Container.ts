import dragStartWithTargetId from '../common/functions/drag-star-with-target-id';
import StylesBuilder from '../common/models/StylesBuilder.class';

export default class Container {
    private static iterator = 0;
    private _domElement: HTMLDivElement;

    constructor() {
        this._domElement = document.createElement('div');

        this._domElement.classList.add('drag-leave');
        this._domElement.style['margin'] = '5px 5px 5px 5px';
        this._domElement.style['padding'] = '5px 5px 5px 5px';
        this._domElement.id = 'container' + Container.iterator++;

        this.dragEnter = this.dragEnter.bind(this);
        this.dragOver = this.dragOver.bind(this);
        this.dragLeave = this.dragLeave.bind(this);
        this.drop = this.drop.bind(this);

        this._domElement.addEventListener('dragenter', this.dragEnter);
        this._domElement.addEventListener('dragover', this.dragOver);
        this._domElement.addEventListener('dragleave', this.dragLeave);
        this._domElement.addEventListener('drop', this.drop);

        this._domElement.draggable = true;
        this._domElement.addEventListener('dragstart', dragStartWithTargetId);
    
        this.openElementConfigs = this.openElementConfigs.bind(this);
        this._domElement.addEventListener('click', this.openElementConfigs);
    }

    get domElement(){
        return this._domElement;
    }

    private dragEnter() {
        this._domElement.classList.remove('drag-leave');
        this._domElement.classList.add('drag-enter');
    }
    
    private dragOver() {
        this._domElement.classList.remove('drag-leave');
        this._domElement.classList.add('drag-enter');
    }
    
    private dragLeave() {
        this._domElement.classList.remove('drag-enter');
        this._domElement.classList.add('drag-leave');
    }
    
    private drop() {
        this._domElement.classList.remove('drag-enter');
        this._domElement.classList.add('drag-leave');
    }
    
    private openElementConfigs() {
        new StylesBuilder(this._domElement)
        .addMarginSelector()
        .addPaddingSelector()
        .build()
    }
}