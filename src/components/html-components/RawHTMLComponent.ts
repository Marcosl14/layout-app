import StylesComponentsBuilder from '../common/models/StylesComponentsBuilder';
import MarginOrPaddingComponent from '../common/components/margin-or-padding.component';
import IdDefinitionComponent from '../common/components/id-definition.component';

export default abstract class RawHTMLConponent {
    protected _domElement: HTMLElement;
    protected stylesComponents: StylesComponentsBuilder;
    protected static instances: HTMLElement[] = [];

    constructor(domElement: HTMLElement) {
        this._domElement = domElement

        this.stylesComponents = new StylesComponentsBuilder()
        .appendChild(new IdDefinitionComponent(this._domElement, RawHTMLConponent.instances).component)
        .appendChild(new MarginOrPaddingComponent('margin', this._domElement).component)
        .appendChild(new MarginOrPaddingComponent('padding', this._domElement).component);

        this.openElementConfigs = this.openElementConfigs.bind(this);

        RawHTMLConponent.instances.push(this._domElement);
    }

    get domElement() {
        return this._domElement;
    }

    protected openElementConfigs(event) {
        event.stopPropagation();
        this.stylesComponents.build()
    }
}
