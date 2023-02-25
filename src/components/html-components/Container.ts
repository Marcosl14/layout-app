import dragStartWithTargetId from '../common/functions/drag-star-with-target-id';
import ContainerBuilder from '../common/models/ContainerBuilder';
import StylesBuilder from '../common/models/StylesBuilder.class';
import defineElementId from '../common/functions/define-element-id';

export default class Container {
    private static iterator = 0;
    private _domElement: HTMLDivElement;
    private static instances: HTMLDivElement[] = [];

    constructor() {
        const {idName, iterator} = defineElementId('container', Container.instances, Container.iterator);
        Container.iterator = iterator;

        this.dragEnter = this.dragEnter.bind(this);
        this.dragOver = this.dragOver.bind(this);
        this.dragLeave = this.dragLeave.bind(this);
        this.drop = this.drop.bind(this);
        this.openElementConfigs = this.openElementConfigs.bind(this);

        this._domElement = new ContainerBuilder()
            .setStyle('margin', '5px 5px 5px 5px')
            .setStyle('padding', '5px 5px 5px 5px')
            .addCssClassName('drag-leave')
            .setId(idName)
            .addEventListener('dragenter', this.dragEnter)
            .addEventListener('dragover', this.dragOver)
            .addEventListener('dragleave', this.dragLeave)
            .addEventListener('drop', this.drop)
            .addEventListener('dragstart', dragStartWithTargetId)
            .addEventListener('click', this.openElementConfigs)
            .draggable()
            .build();

        Container.instances.push(this._domElement);
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

    private openElementConfigs(event) {
        event.stopPropagation();

        new StylesBuilder(this._domElement)
        .addMarginSelector()
        .addPaddingSelector()
        .build()
    }
}
