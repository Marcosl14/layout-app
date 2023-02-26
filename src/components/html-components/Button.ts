import dragStartWithTargetId from '../common/functions/drag-star-with-target-id';
import defineElementId from '../common/functions/define-element-id';
import ButtonBuilder from '../common/models/ButtonBuilder';
import RawHTMLConponent from './RawHTMLComponent';
import GenericInputComponent from '../common/components/generic-input.component';
import IdDefinitionComponent from '../common/components/id-definition.component';
import MarginOrPaddingComponent from '../common/components/margin-or-padding.component';

export default class Button extends RawHTMLConponent {
    private static iterator = 0;

    constructor() {
        // TODO cuando creo un nombre futuro, y justo creo un elemento con ese nombre futuro, tira error... por eso yo le pasaba el iterator... ver como solucionar...

        const element = new ButtonBuilder()
            .setStyle('margin', '5px 5px 5px 5px')
            .setStyle('padding', '5px 5px 5px 5px')
            .setId(defineElementId(`button${Button.iterator++}`, RawHTMLConponent.instances))
            .setInnerText('New Button')
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
            .appendChild(new GenericInputComponent(this._domElement, 'innerText', 'Inner Text').component)
            .appendChild(new MarginOrPaddingComponent('margin', this._domElement).component)
            .appendChild(new MarginOrPaddingComponent('padding', this._domElement).component)
    }

    get domElement() {
        return this._domElement;
    }
}
