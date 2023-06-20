import FormBuilder from '../common/models/FormBuilder';
import RawHTMLConponent from './RawHTMLComponent';
import RawContainer from './RawContainer';

import CssStyleSheet from '../css-stylesheet/css-stylesheet';
import constants from '../common/constants/constants';
import defineElementName from '../common/functions/define-element-name';

import { DisplayTypesEnum } from '../common/enums/display-types.enum';

export default class Form extends RawContainer {
    private static iterator = 0;

    constructor(createNewHTMLComponentPublisher) {
        const {name, iterator} = defineElementName({
            prefix: 'form',
            iterator: Form.iterator,
            instances: RawHTMLConponent.instances,
        });

        Form.iterator = iterator;

        CssStyleSheet.insertRule(`.${name} {
            margin: 10px;
            padding: 10px;
            display: ${DisplayTypesEnum.flex};
            flex-direction: column;
            background-color: rgb(255,255,255);
            border: 1px dashed rgb(0,0,0);
        }`);

        CssStyleSheet.insertRule(`.${name}:hover {
            background-color: ${constants.INVERTED_BACKGROUND_COLOR};
        }`);

        const element = new FormBuilder()
            .setName(name)
            .setId(name)
            .addCssClassName(name)
            .draggable()
            .build();

        super(element, createNewHTMLComponentPublisher);

        this._domElement.addEventListener('submit', this.eventPreventDefault);
    }

    private eventPreventDefault(event) {
        event.preventDefault();
    }
}
