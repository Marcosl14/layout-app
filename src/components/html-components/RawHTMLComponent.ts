import StylesComponentsBuilder from '../common/models/StylesComponentsBuilder';
import MarginOrPaddingComponent from '../common/components/margin-or-padding.component';
import IdDefinitionComponent from '../common/components/id-definition.component';

export default abstract class RawHTMLConponent {
    protected _domElement: HTMLElement;

    constructor(domElement: HTMLElement) {
        this._domElement = domElement

        this.openElementConfigs = this.openElementConfigs.bind(this);
    }

    get domElement() {
        return this._domElement;
    }

    protected openElementConfigs(event) {

        event.stopPropagation();

        // TODO la creacion de estos componentes las deberia hacer el constructor, y devolverlas aca... asi las clases hijas puede agregar otros elementos.
        // El problema es que se los asignamos de manera temprana al contenedor '#actions-container', quizas falte un metodo para asignarlo...
        new StylesComponentsBuilder()
            .appendChild(new IdDefinitionComponent(this._domElement).component)
            .appendChild(new MarginOrPaddingComponent('margin', this._domElement).component)
            .appendChild(new MarginOrPaddingComponent('padding', this._domElement).component)
            .build()
    }
}
