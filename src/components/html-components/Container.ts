export default class Container {
    private static iterator = 0;
    public domElement: HTMLDivElement;

    constructor() {
        this.domElement = document.createElement('div');

        this.domElement.classList.add('drag-leave');
        this.domElement.classList.add('app-component-container');
        this.domElement.id = 'container' + Container.iterator++;

        this.dragEnter = this.dragEnter.bind(this);
        this.dragOver = this.dragOver.bind(this);
        this.dragLeave = this.dragLeave.bind(this);
        this.drop = this.drop.bind(this);

        this.domElement.addEventListener('dragenter', this.dragEnter);
        this.domElement.addEventListener('dragover', this.dragOver);
        this.domElement.addEventListener('dragleave', this.dragLeave);
        this.domElement.addEventListener('drop', this.drop);

        this.domElement.draggable = true;
        this.domElement.addEventListener('dragstart', this.dragStart);
    
        this.domElement.addEventListener('click', this.openElementConfigs);
    }

    private dragEnter(e: any) {
        e.preventDefault();
        this.domElement.classList.remove('drag-leave');
        this.domElement.classList.add('drag-enter');
    }
    
    private dragOver(e: any) {
        e.preventDefault();
        this.domElement.classList.remove('drag-leave');
        this.domElement.classList.add('drag-enter');
    }
    
    private dragLeave() {
        this.domElement.classList.remove('drag-enter');
        this.domElement.classList.add('drag-leave');
    }
    
    private drop() {
        this.domElement.classList.remove('drag-enter');
        this.domElement.classList.add('drag-leave');
    }

    private dragStart(e: any) {
        e.dataTransfer.setData('text/plain', e.target.id);
    }
    
    private openElementConfigs(e: any) {
        console.log(e.target.nodeName);
        console.log(e.target.id);
    
        e.target.parentNode.removeChild(e.target);
    }
}