import ComponentChangeObserverInterface from '../common/interfaces/component-change-observer.interface';

import OptionBuilder from '../common/models/OptionBuilder';
import RawHTMLConponent from './RawHTMLComponent';

import defineElementName from '../common/functions/define-element-name';
import { AddComponentEnum } from '../common/enums/add-component.enum';
import CreateNewHTMLComponentPublisher from '../common/publishers/CreateNewHTMLComponentPublisher';

export default class Option extends RawHTMLConponent implements ComponentChangeObserverInterface {
    private static iterator = 0;

    constructor(createNewHTMLComponentPublisher: CreateNewHTMLComponentPublisher) {
        const name = defineElementName(`option${Option.iterator++}`, RawHTMLConponent.instances);

        const element = new OptionBuilder()
            .setName(name)
            .setId(name)
            .setText('New Option')
            .setValue('New Option')
            .draggable()
            .build();

        super(element, createNewHTMLComponentPublisher);

        this.openElementConfigs = this.openElementConfigs.bind(this);
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
            AddComponentEnum.addTextAndValueChangeComponent,
            AddComponentEnum.addClassNameDefinitionComponent
        );

        // TODO falta poder modificar los values y los texts desde aca...

        this.buildElements();
    }
}
