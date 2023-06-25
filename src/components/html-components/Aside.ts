import AsideBuilder from '../common/models/AsideBuilder';
import RawHTMLConponent from './RawHTMLComponent';
import RawContainer from './RawContainer';

import CssStyleSheet from '../css-stylesheet/css-stylesheet';
import constants from '../common/constants/constants';
import defineElementName from '../common/functions/define-element-name';

import { DisplayTypesEnum } from '../common/enums/display-types.enum';

export default class Aside extends RawContainer {
    private static iterator = 0;

    constructor(createNewHTMLComponentPublisher) {
        const {name, iterator} = defineElementName({
            prefix: 'aside',
            iterator: Aside.iterator,
            instances: RawHTMLConponent.instances,
        });

        Aside.iterator = iterator;

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

        const element = new AsideBuilder()
            .setName(name)
            .setId(name)
            .addCssClassName(name)
            .draggable()
            .build();

        super(element, createNewHTMLComponentPublisher);
    }
}
