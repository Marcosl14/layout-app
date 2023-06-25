import ComponentChangeObserverInterface from '../common/interfaces/component-change-observer.interface';

import ParagraphBuilder from '../common/models/ParagraphBuilder';
import RawHTMLConponent from './RawHTMLComponent';

import CssStyleSheet from '../css-stylesheet/css-stylesheet';

import defineElementName from '../common/functions/define-element-name';
import { AddComponentEnum } from '../common/enums/add-component.enum';

export default class Paragraph extends RawHTMLConponent implements ComponentChangeObserverInterface {
    private static iterator = 0;

    constructor(createNewHTMLComponentPublisher) {
        const {name, iterator} = defineElementName({
            prefix: 'paragraph',
            iterator: Paragraph.iterator,
            instances: RawHTMLConponent.instances,
        });

        Paragraph.iterator = iterator;

        CssStyleSheet.insertRule(`.${name} {
            display: inline
        }`);

        const element = new ParagraphBuilder()
            .setName(name)
            .setId(name)
            .addCssClassName(name)
            .setInnerText('New Paragraph')
            .draggable()
            .build();

        super(element, createNewHTMLComponentPublisher);

        this.openElementConfigs = this.openElementConfigs.bind(this);
        this.dragLeave = this.dragLeave.bind(this);

        this._domElement.addEventListener('dragstart', this.dragStartWithTargetId);
        this._domElement.addEventListener('dragleave', this.dragLeave);

        this._domElement.addEventListener('click', this.openElementConfigs);
    }

    get domElement() {
        return this._domElement;
    }

    protected openElementConfigs(event) {
        event.stopPropagation();
        this.selectorValue();


        this.buildElementConfigs();
    }

    public componentSelected(component) {
        if(component === this._domElement['name']) {
            this.buildElementConfigs();
        }
    }

    private buildElementConfigs() {
        this.insertComponentAfter(
            AddComponentEnum.addInnerTextChangeComponent,
            AddComponentEnum.addClassNameDefinitionComponent
        );

        this.buildElements();
    }
}
