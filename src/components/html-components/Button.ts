export default class Button {
    private static iterator = 0;
    public domElement: HTMLButtonElement;

    constructor() {
        this.domElement = document.createElement('button');
        // TODO cambiar por clases css
        this.domElement.innerHTML = 'nuevo boton';
        this.domElement.style.margin = '5px';
        this.domElement.id = 'button' + Button.iterator++;

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