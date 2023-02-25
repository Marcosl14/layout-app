import dragStartWithTargetId from '../common/functions/drag-star-with-target-id';
import ContainerBuilder from '../common/models/ContainerBuilder';
import defineElementId from '../common/functions/define-element-id';
import RawHTMLConponent from './RawHTMLComponent';

export default class Container extends RawHTMLConponent {
    private static iterator = 0;
    private static instances: HTMLDivElement[] = [];

    constructor() {
        const {idName, iterator} = defineElementId('container', Container.instances, Container.iterator);
        Container.iterator = iterator;

        const element = new ContainerBuilder()
            .setStyle('margin', '5px 5px 5px 5px')
            .setStyle('padding', '5px 5px 5px 5px')
            .addCssClassName('drag-leave')
            .setId(idName)
            .addEventListener('dragstart', dragStartWithTargetId)
            .draggable()
            .build();

        super(element);

        this.dragEnter = this.dragEnter.bind(this);
        this.dragOver = this.dragOver.bind(this);
        this.dragLeave = this.dragLeave.bind(this);
        this.drop = this.drop.bind(this);

        element.addEventListener('dragenter', this.dragEnter)
        element.addEventListener('dragover', this.dragOver)
        element.addEventListener('dragleave', this.dragLeave)
        element.addEventListener('drop', this.drop)
        element.addEventListener('click', this.openElementConfigs);

        // TODO how to add specific components to specific elements
        // this.stylesComponents.appendChild(new MarginOrPaddingComponent('padding', this._domElement).component)

        Container.instances.push(element);
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
}
