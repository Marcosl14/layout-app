export default class Input {
    private static iterator = 0;
    public domElement: HTMLInputElement;

    constructor() {
        this.domElement = document.createElement('input');
        // TODO cambiar por clases css
        this.domElement.type = 'text';
        this.domElement.style.margin = '5px';
        this.domElement.id = 'input' + Input.iterator++;

        this.domElement.draggable = true;
        this.domElement.addEventListener('dragstart', this.dragStart);
    
        this.domElement.addEventListener('click', this.openElementConfigs);
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