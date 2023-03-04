import InputBuilder from '../common/models/InputBuilder';
import defineElementId from '../common/functions/define-element-id';
import RawHTMLConponent from './RawHTMLComponent';
import CssStyleSheet from '../css-stylesheet/css-stylesheet';
import StylesComponentsBuilder from '../common/models/StylesComponentsBuilder';

import { InputTypeEnum } from '../common/enums/input-type.enum';

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
            .setId(id)
            .addCssClassName(id)
            .draggable()
            .build();

        super(element);

        this.openElementConfigs = this.openElementConfigs.bind(this);

        element.addEventListener('dragstart', this.dragStartWithTargetId);
        element.addEventListener('click', this.openElementConfigs);
    }

    get domElement() {
        return this._domElement;
    }

    protected openElementConfigs(event) {
        event.stopPropagation();

        this.stylesComponents = new StylesComponentsBuilder()
            .appendChild(this.addIdDefinitionComponent())
            .appendChild(this.addInputTypeSelectorComponent())
            .appendChild(this.addMarginStyleComponent())
            .appendChild(this.addPaddingStyleComponent())
            .appendChild(this.addRemoveElementComponent())
            .build();
    }
}
