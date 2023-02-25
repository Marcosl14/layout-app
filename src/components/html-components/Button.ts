import dragStartWithTargetId from '../common/functions/drag-star-with-target-id';
import defineElementId from '../common/functions/define-element-id';
import ButtonBuilder from '../common/models/ButtonBuilder';
import RawHTMLConponent from './RawHTMLComponent';

export default class Button extends RawHTMLConponent {
    private static iterator = 0;
    private static instances: HTMLButtonElement[] = [];

    constructor() {
        const {idName, iterator} = defineElementId('button', Button.instances, Button.iterator);
        Button.iterator = iterator;

        const element = new ButtonBuilder()
            .setStyle('margin', '5px 5px 5px 5px')
            .setStyle('padding', '5px 5px 5px 5px')
            .setId(idName)
            .setInnerText('New Button')
            .addEventListener('dragstart', dragStartWithTargetId)
            .draggable()
            .build();

        super(element);

        element.addEventListener('click', this.openElementConfigs);

        Button.instances.push(element);
    }

    get domElement() {
        return this._domElement;
    }
}
