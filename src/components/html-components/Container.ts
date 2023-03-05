import ContainerBuilder from '../common/models/ContainerBuilder';
import defineElementId from '../common/functions/define-element-id';
import RawHTMLConponent from './RawHTMLComponent';
import CssStyleSheet from '../css-stylesheet/css-stylesheet';
import StylesComponentsBuilder from '../common/models/StylesComponentsBuilder';

import { DisplayTypesEnum } from '../common/enums/display-types.enum';

export default class Container extends RawHTMLConponent {
    private static iterator = 0;

    constructor() {
        const id = defineElementId(`container${Container.iterator++}`, RawHTMLConponent.instances);

        // las clases drag leave y drag enter deberian ser modificadas dinamicamente cuando asignamos un nuevo estilo al borde...
        // creo que habria que asignarlas con un color opuesto al que tiene actualmente el borde o el background...

        /* el border en el css es de desarrollo. Luego eliminar */
        CssStyleSheet.styleSheet.insertRule(`.${id} {
            margin: 10px;
            padding: 10px;
            display: ${DisplayTypesEnum.flex};
            flex-direction: column;
        }`);

        const element = new ContainerBuilder()
            .addCssClassName(id)
            .addCssClassName('drag-leave')
            .setId(id)
            .draggable()
            .build();

        super(element);

        this.openElementConfigs = this.openElementConfigs.bind(this);
        this.dragEnter = this.dragEnter.bind(this);
        this.dragOver = this.dragOver.bind(this);
        this.dragLeave = this.dragLeave.bind(this);
        this.drop = this.drop.bind(this);

        element.addEventListener('dragstart', this.dragStartWithTargetId);
        element.addEventListener('dragenter', this.dragEnter)
        element.addEventListener('dragover', this.dragOver)
        element.addEventListener('dragleave', this.dragLeave)
        element.addEventListener('drop', this.drop)
        element.addEventListener('click', this.openElementConfigs);
    }

    get domElement(){
        return this._domElement;
    }

    private dragEnter(event: any) {
        event.preventDefault();
        event.stopPropagation();
        this._domElement.classList.remove('drag-leave');
        this._domElement.classList.add('drag-enter');
    }

    private dragOver(event: any) {
        event.preventDefault();
        event.stopPropagation();
        this._domElement.classList.remove('drag-leave');
        this._domElement.classList.add('drag-enter');
    }

    private dragLeave(event: any) {
        event.preventDefault();
        event.stopPropagation();
        this._domElement.classList.remove('drag-enter');
        this._domElement.classList.add('drag-leave');
    }

    private drop() {
        this._domElement.classList.remove('drag-enter');
        this._domElement.classList.add('drag-leave');
    }

    protected openElementConfigs(event) {
        event.stopPropagation();

        // TODO creo que vamos a tener que hacer un index y que un selector despliegue estos componentes uno por uno, porque va a ser larguisima la lista de posibles modificaciones

        this.stylesComponents = new StylesComponentsBuilder()
            .appendChild(this.addIdDefinitionComponent())
            .appendChild(this.addMarginStyleComponent())
            .appendChild(this.addPaddingStyleComponent())
            .appendChild(this.addBackgroundSettingsComponent())
            .appendChild(this.addBorderSettingsComponent())
            .appendChild(this.addDisplayAsParentComponent())
            .appendChild(this.addDisplayAsChildComponent())
            .appendChild(this.addActionsComponents())
            .build();
    }

    // TODO falta un mouse over para que cuando pasemos por encima del contenedor, sepamos que contenedor es.
    // Y obvio que falta el mouse leave...
}
