import defineElementId from '../common/functions/define-element-id';
import ButtonBuilder from '../common/models/ButtonBuilder';
import RawHTMLConponent from './RawHTMLComponent';
import GenericPrimaryInputComponent from '../common/components/generic-primary-input.component';
import IdDefinitionComponent from '../common/components/id-definition.component';
import MarginOrPaddingComponent from '../common/components/margin-or-padding.component';
import CssStyleSheet from '../css-stylesheet/css-stylesheet';

export default class Button extends RawHTMLConponent {
    private static iterator = 0;

    constructor() {
        // TODO cuando creo un nombre futuro, y justo creo un elemento con ese nombre futuro, tira error... por eso yo le pasaba el iterator... ver como solucionar...

        const id = defineElementId(`button${Button.iterator++}`, RawHTMLConponent.instances);

        // TODO habria que reemplazar todos los caracteres especiales por guiones o algo asi...

        CssStyleSheet.styleSheet.insertRule(`.${id} {
            margin: 10px;
            padding: 10px;
            background-color: #4CAF50;
            border: 1px solid #4CAF50;
            color: #FFFFFF;
            text-align: center;
        }`);

        CssStyleSheet.styleSheet.insertRule(`.${id}:hover {opacity: 0.6}`);

        const element = new ButtonBuilder()
            .setId(id)
            .addCssClassName(id)
            .setInnerText('New Button')
            .draggable()
            .build();

        super(element);

        this.buildStylesComponents();

        element.addEventListener('dragstart', this.dragStartWithTargetId);
        element.addEventListener('click', this.openElementConfigs);
    }

    private buildStylesComponents() {
        this.stylesComponents
            .appendChild(new IdDefinitionComponent(this._domElement).component)
            .appendChild(new GenericPrimaryInputComponent(this._domElement, 'innerText', 'Inner Text').component)
            .appendChild(new MarginOrPaddingComponent(this._domElement, 'margin').component)
            .appendChild(new MarginOrPaddingComponent(this._domElement, 'padding').component)
    }

    get domElement() {
        return this._domElement;
    }
}
