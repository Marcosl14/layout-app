import ContainerBuilder from '../common/models/ContainerBuilder';
import defineElementId from '../common/functions/define-element-id';
import RawHTMLConponent from './RawHTMLComponent';
import IdDefinitionComponent from '../common/components/id-definition.component';
import MarginOrPaddingComponent from '../common/components/margin-or-padding.component';
import CssStyleSheet from '../css-stylesheet/css-stylesheet';
import DisplayComponent from '../common/components/display.component';

export default class Container extends RawHTMLConponent {
    private static iterator = 0;

    constructor() {
        const id = defineElementId(`container${Container.iterator++}`, RawHTMLConponent.instances);

        CssStyleSheet.styleSheet.insertRule(`.${id} {
            margin: 10px;
            padding: 10px;
            display: flex;
            flex-direction: column;
        }`);

        const element = new ContainerBuilder()
            .addCssClassName(id)
            .addCssClassName('drag-leave')
            .setId(id)
            .draggable()
            .build();

        super(element);

        this.buildStylesComponents();

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

    private buildStylesComponents() {
        this.stylesComponents
            .appendChild(new IdDefinitionComponent(this._domElement).component)
            .appendChild(new MarginOrPaddingComponent(this._domElement, 'margin').component)
            .appendChild(new MarginOrPaddingComponent(this._domElement, 'padding').component)
            .appendChild(new DisplayComponent(this._domElement).component)
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

    // TODO falta un mouse over para que cuando pasemos por encima del contenedor, sepamos que contenedor es.
    // Y obvio que falta el mouse leave...
}
