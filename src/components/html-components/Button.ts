import dragStartWithTargetId from '../common/functions/drag-star-with-target-id';
import StylesBuilder from '../common/models/StylesBuilder.class';

export default class Button {
    private static iterator = 0;
    private _domElement: HTMLButtonElement;
    private static instances: HTMLButtonElement[] = new Array;

    constructor() {
        this._domElement = document.createElement('button');

        this._domElement.innerHTML = 'New button';
        this._domElement.style['margin'] = '5px';
        this._domElement.style['padding'] = '5px';
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
        // console.log(e.target.nodeName);
        // console.log(e.target.id);

        // const actionsContainer = document.querySelector('#actions-container');
        // actionsContainer.innerHTML = `
        // <div style='display: flex; flex-direction: column; padding: 5px'>
        //     <h2> Actions </h2>
        //     <label> Id </label>
        //     <input id="pepe1" type="text" value=${this._domElement.id}>

        //     <label> Margin </label>
        //     <input id="pepe2" type="number" min="0" value="${parseInt(this._domElement.style['margin'])}">

        //     <button id="accept_button_actions">Aceptar Cambios</button>
        // </div>
        // `

        // this.pepe1 = document.querySelector('#pepe1');

        // this.pepe2 = document.querySelector('#pepe2');
        // this.updatePepe = this.updatePepe.bind(this);
        // this.pepe2.addEventListener('input', this.updatePepe);

        // this.acceptButtonActions = document.querySelector('#accept_button_actions');
        // this.updateStyles = this.updateStyles.bind(this);
        // this.acceptButtonActions.addEventListener('click', this.updateStyles)

        const actionsContainer : HTMLDivElement = document.querySelector('#actions-container')
        actionsContainer.innerHTML = '';

        new StylesBuilder(this._domElement, actionsContainer)
            .addMarginSelector()
            .addPaddinSelector()
            .build()
    }

    // private pepe1: HTMLInputElement;
    // private pepe2: HTMLInputElement;
    // private acceptButtonActions: HTMLButtonElement;

    // updatePepe() {
    //     this._domElement.style['margin'] = `${this.pepe2.value}px`;
    // }

    // updateStyles() {
    //     this._domElement.id = this.setId(`${this.pepe1.value}`);
    // }
}