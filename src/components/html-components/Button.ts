import dragStartWithTargetId from '../common/functions/drag-star-with-target-id';
import StylesBuilder from '../common/models/StylesBuilder.class';
import defineElementId from '../common/functions/define-element-id';
import ButtonBuilder from '../common/models/ButtonBuilder';

export default class Button {
    private static iterator = 0;
    private _domElement: HTMLButtonElement;
    private static instances: HTMLButtonElement[] = [];

    constructor() {
        const {idName, iterator} = defineElementId('button', Button.instances, Button.iterator);
        Button.iterator = iterator;

        this.openElementConfigs = this.openElementConfigs.bind(this);

        this._domElement = new ButtonBuilder()
            .setStyle('margin', '5px 5px 5px 5px')
            .setStyle('padding', '5px 5px 5px 5px')
            .setId(idName)
            .setInnerText('New Button')
            .addEventListener('dragstart', dragStartWithTargetId)
            .addEventListener('click', this.openElementConfigs)
            .draggable()
            .build();

            Button.instances.push(this._domElement);
    }

    get domElement() {
        return this._domElement;
    }

    private openElementConfigs(event) {
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

        event.stopPropagation();

        new StylesBuilder(this._domElement)
            .addMarginSelector()
            .addPaddingSelector()
            .build()
    }

    // private pepe1: HTMLInputElement;
    // private pepe2: HTMLInputElement;
    // private acceptButtonActions: HTMLButtonElement;

    // updatePepe() {
    //     this._domElement.style['margin'] = `${this.pepe2.value}px`;
    // }

    // updateStyles() {
    //     const {idName} = defineElementId(`${this.pepe1.value}`,Button.instances);
    //     this._domElement.id = idName;
    //     this.pepe1.value = idName;
    // }
}
