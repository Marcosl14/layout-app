import dragStartWithTargetId from '../common/functions/drag-star-with-target-id';
import InputBuilder from '../common/models/InputBuilder';
import defineElementId from '../common/functions/define-element-id';
import { InputTypeEnum } from '../common/enums/input-type.enum';
import RawHTMLConponent from './RawHTMLComponent';

export default class Input extends RawHTMLConponent {
    private static iterator = 0;
    private static instances: HTMLInputElement[] = [];

    constructor() {
        const {idName, iterator} = defineElementId('input', Input.instances, Input.iterator);
        Input.iterator = iterator;

        const element = new InputBuilder(InputTypeEnum.text)
            .setStyle('margin', '5px 5px 5px 5px')
            .setStyle('padding', '5px 5px 5px 5px')
            .setId(idName)
            .addEventListener('dragstart', dragStartWithTargetId)
            .draggable()
            .build();

        super(element);

        element.addEventListener('click', this.openElementConfigs);

        Input.instances.push(element);
    }
}
