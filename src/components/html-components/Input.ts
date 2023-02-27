import InputBuilder from '../common/models/InputBuilder';
import defineElementId from '../common/functions/define-element-id';
import { InputTypeEnum } from '../common/enums/input-type.enum';
import RawHTMLConponent from './RawHTMLComponent';
import IdDefinitionComponent from '../common/components/id-definition.component';
import MarginOrPaddingComponent from '../common/components/margin-or-padding.component';
import CssStyleSheet from '../css-stylesheet/css-stylesheet';

export default class Input extends RawHTMLConponent {
    private static iterator = 0;

    constructor() {
        const id = defineElementId(`input${Input.iterator++}`, RawHTMLConponent.instances);

        CssStyleSheet.styleSheet.insertRule(`.${id} {
            margin: 5px;
            padding: 5px;
        }`);

        const element = new InputBuilder(InputTypeEnum.text)
            .addCssClassName(id)
            .setId(id)
            .draggable()
            .build();

        super(element);

        this.buildStylesComponents();

        element.addEventListener('dragstart', this.dragStartWithTargetId);
        element.addEventListener('click', this.openElementConfigs);
    }

    private buildStylesComponents() {
        this.stylesComponents
            .appendChild(new IdDefinitionComponent(this._domElement, RawHTMLConponent.instances).component)
            .appendChild(new MarginOrPaddingComponent('margin', this._domElement).component)
            .appendChild(new MarginOrPaddingComponent('padding', this._domElement).component)
    }

    get domElement() {
        return this._domElement;
    }
}
