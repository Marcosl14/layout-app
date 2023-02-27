import InputBuilder from '../common/models/InputBuilder';
import defineElementId from '../common/functions/define-element-id';
import { InputTypeEnum } from '../common/enums/input-type.enum';
import RawHTMLConponent from './RawHTMLComponent';
import IdDefinitionComponent from '../common/components/id-definition.component';
import MarginOrPaddingComponent from '../common/components/margin-or-padding.component';
import CssStyleSheet from '../css-stylesheet/css-stylesheet';
import GenericPrimarySelectorComponent from '../common/components/generic-primary-selector.component';

export default class Input extends RawHTMLConponent {
    private static iterator = 0;

    constructor() {
        const id = defineElementId(`input${Input.iterator++}`, RawHTMLConponent.instances);

        CssStyleSheet.styleSheet.insertRule(`.${id} {
            margin: 10px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-shadow: inset 0 1px 3px #ddd;
        }`);

        CssStyleSheet.styleSheet.insertRule(`.${id}:hover {
            border: 1px solid red;
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
            .appendChild(new GenericPrimarySelectorComponent(this._domElement, 'type', 'Input Type Selector', InputTypeEnum).component)
    }

    get domElement() {
        return this._domElement;
    }
}
