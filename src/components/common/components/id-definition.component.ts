import ContainerBuilder from '../models/ContainerBuilder';
import LabelBuilder from '../models/LabelBuilder';

export default class IdDefinitionComponent {
    private type;
    private domElement;
    private container: HTMLDivElement;

    constructor(domElement: HTMLElement) {
        this.domElement = domElement;
        this.addComponents();
    }

    get component() {
        return this.container;
    }

    addComponents() {
        this.container = new ContainerBuilder()
            .appendChild(new LabelBuilder()
                .setInnerText('Id Definition')
                .build()
            )
            .build()
    }
}
