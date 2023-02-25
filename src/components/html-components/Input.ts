import dragStartWithTargetId from '../common/functions/drag-star-with-target-id';
import StylesBuilder from '../common/models/StylesBuilder.class';
import InputBuilder from '../common/models/InputBuilder';
import defineElementId from '../common/functions/define-element-id';

export default class Input {
    private static iterator = 0;
    private _domElement: HTMLInputElement;
    private static instances: HTMLInputElement[] = [];

    constructor() {
        const {idName, iterator} = defineElementId('input', Input.instances, Input.iterator);
        Input.iterator = iterator;

        this.openElementConfigs = this.openElementConfigs.bind(this);

        this._domElement = new InputBuilder('text')
            .setStyle('margin', '5px 5px 5px 5px')
            .setStyle('padding', '5px 5px 5px 5px')
            .setId(idName)
            .addEventListener('dragstart', dragStartWithTargetId)
            .addEventListener('click', this.openElementConfigs)
            .draggable()
            .build();

        Input.instances.push(this._domElement);
    }

    get domElement(){
        return this._domElement;
    }

    private openElementConfigs(event) {
        event.stopPropagation();

        // TODO falta agregar un selector del tipo!
        // Seguramente el tipo no deba ser un tipo, sino que un enum
        new StylesBuilder(this._domElement)
        .addMarginSelector()
        .addPaddingSelector()
        .build()
    }
}
