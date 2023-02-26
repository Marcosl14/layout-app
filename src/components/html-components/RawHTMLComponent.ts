import StylesComponentsBuilder from '../common/models/StylesComponentsBuilder';

export default abstract class RawHTMLConponent {
    protected _domElement: HTMLElement;
    protected stylesComponents: StylesComponentsBuilder;
    protected static instances: HTMLElement[] = [];

    constructor(domElement: HTMLElement) {
        this._domElement = domElement

        this.stylesComponents = new StylesComponentsBuilder()

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
