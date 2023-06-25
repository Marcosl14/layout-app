import UnorderedListBuilder from '../common/models/UnoderedListBuilder';
import RawHTMLConponent from './RawHTMLComponent';
import RawContainer from './RawContainer';

import CreateNewHTMLComponentPublisher from '../common/publishers/CreateNewHTMLComponentPublisher';

import CssStyleSheet from '../css-stylesheet/css-stylesheet';
import constants from '../common/constants/constants';
import defineElementName from '../common/functions/define-element-name';

import { AddComponentEnum } from '../common/enums/add-component.enum';

export default class UnorderedList extends RawContainer {
    private static iterator = 0;
    protected createNewHTMLComponentPublisher?: CreateNewHTMLComponentPublisher;

    constructor(createNewHTMLComponentPublisher: CreateNewHTMLComponentPublisher) {
        const {name, iterator} = defineElementName({
            prefix: 'unordered_list',
            iterator: UnorderedList.iterator,
            instances: RawHTMLConponent.instances,
        });

        UnorderedList.iterator = iterator;

        CssStyleSheet.insertRule(`.${name} {
            padding: 30px;
            background-color: rgb(255,255,255);
            border: 1px dashed rgb(0,0,0);
        }`);

        CssStyleSheet.insertRule(`.${name}:hover {
            background-color: ${constants.INVERTED_BACKGROUND_COLOR};
        }`);

        const element = new UnorderedListBuilder()
            .setName(name)
            .setId(name)
            .addCssClassName(name)
            .draggable()
            .build();

        super(element, createNewHTMLComponentPublisher);
    }

    protected addChildConfigs() {
        this.insertComponentAfter(
            AddComponentEnum.addListItemComponent,
            AddComponentEnum.addClassNameDefinitionComponent
        );
    }
}
