import dragStartWithTargetId from '../common/functions/drag-star-with-target-id';
import InputBuilder from '../common/models/InputBuilder';
import defineElementId from '../common/functions/define-element-id';
import { InputTypeEnum } from '../common/enums/input-type.enum';
import RawHTMLConponent from './RawHTMLComponent';
import IdDefinitionComponent from '../common/components/id-definition.component';
import MarginOrPaddingComponent from '../common/components/margin-or-padding.component';

export default class Input extends RawHTMLConponent {
    private static iterator = 0;

    constructor() {
        const element = new InputBuilder(InputTypeEnum.text)
            .setStyle('margin', '5px 5px 5px 5px')
            .setStyle('padding', '5px 5px 5px 5px')
            .setId(defineElementId(`input${Input.iterator++}`, RawHTMLConponent.instances))
            .addEventListener('dragstart', dragStartWithTargetId)
            .draggable()
            .build();

        super(element);

        this.buildStylesCompnents();

        element.addEventListener('click', this.openElementConfigs);
    }

    private buildStylesCompnents() {
        this.stylesComponents
            .appendChild(new IdDefinitionComponent(this._domElement, RawHTMLConponent.instances).component)
            .appendChild(new MarginOrPaddingComponent('margin', this._domElement).component)
            .appendChild(new MarginOrPaddingComponent('padding', this._domElement).component)
    }

    get domElement() {
        return this._domElement;
    }
}
