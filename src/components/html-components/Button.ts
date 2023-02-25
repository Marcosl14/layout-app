import dragStartWithTargetId from '../common/functions/drag-star-with-target-id';
import StylesBuilder from '../common/models/StylesBuilder.class';

export default class Button {
    private static iterator = 0;
    private _domElement: HTMLButtonElement;
    private static instances: HTMLButtonElement[] = new Array;

    constructor() {
        this._domElement = document.createElement('button');

        this._domElement.innerHTML = 'New button';
        this._domElement.style['margin'] = '5px 5px 5px 5px';
        this._domElement.style['padding'] = '5px 5px 5px 5px';
        this._domElement.id = this.setId('button', Button.iterator);

        this._domElement.draggable = true;
        this._domElement.addEventListener('dragstart', dragStartWithTargetId);

        this.openElementConfigs = this.openElementConfigs.bind(this);
        this._domElement.addEventListener('click', this.openElementConfigs);

        Button.instances.push(this._domElement);
    }

    private setId(initialName: string, increaser?: number) {
        let name = initialName + (increaser >= 0 ? increaser : '');

        while (true) {
            const nameAlreadyExists = Button.instances.find((instance) => instance.id === name) ? true : false;

            if (nameAlreadyExists) {
                name = initialName + Button.iterator++;
                alert(`Name already exists \n\t Name updated automatically to: ${name}`)
                // TODO la logica no es de lo mejor, ya que asigna un valor en base al valir actual del Button.iterator...
                // quizas deberiamos agregar una variable let que se inicialice en 0, solo para los casos que no tienen increaser...???
            } else {
                Button.iterator++;
                break;
            }
        }

        return name;
    }

    get domElement() {
        return this._domElement;
    }

    private openElementConfigs() {
        new StylesBuilder(this._domElement)
            .addMarginSelector()
            .addPaddingSelector()
            .build()
    }
}