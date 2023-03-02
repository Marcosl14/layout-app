import StylesComponentsBuilder from '../common/models/StylesComponentsBuilder';
import ButtonBuilder from '../common/models/ButtonBuilder';

export default abstract class RawHTMLConponent {
    protected _domElement: HTMLElement;
    protected stylesComponents: StylesComponentsBuilder;
    public static instances: HTMLElement[] = [];

    constructor(domElement: HTMLElement) {
        this._domElement = domElement

        this.stylesComponents = new StylesComponentsBuilder()

        this.removeElement = this.removeElement.bind(this);

        const removeButton = new ButtonBuilder()
        .setInnerText('Remove Element')
        .addEventListener('click', this.removeElement)
        .build()

        this.stylesComponents.appendChild(removeButton);

        this.openElementConfigs = this.openElementConfigs.bind(this);

        RawHTMLConponent.instances.push(this._domElement);

    }

    get domElement() {
        return this._domElement;
    }

    protected openElementConfigs(event) {
        event.stopPropagation();

        this.stylesComponents.build() // TODO: yo tendria que crear todos los elementos en este momento!!!!
    }

    protected dragStartWithTargetId(event: any) {
        event.dataTransfer.setData('text/plain', event.target.id);
    }

    private removeElement() {
        if(confirm('Are you sure to remove this component')){
            const parent = this._domElement.parentNode;
            parent.removeChild(this._domElement);
            this.stylesComponents.remove();
        }
    }
}
