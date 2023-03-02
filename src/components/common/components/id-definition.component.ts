import { InputTypeEnum } from '../enums/input-type.enum';
import defineElementId from '../functions/define-element-id';
import ContainerBuilder from '../models/ContainerBuilder';
import InputBuilder from '../models/InputBuilder';
import LabelBuilder from '../models/LabelBuilder';
import ButtonBuilder from '../models/ButtonBuilder';
import RawHTMLConponent from '../../html-components/RawHTMLComponent';

export default class IdDefinitionComponent {
    private domElement: HTMLElement;
    private container: HTMLDivElement;
    private static instances: HTMLElement[];

    private propertyValueInput: HTMLInputElement;

    constructor(domElement: HTMLElement) {
        this.domElement = domElement;
        IdDefinitionComponent.instances = RawHTMLConponent.instances;
        this.addComponents();
    }

    get component() {
        return this.container;
    }

    private addComponents() {
        this.updateProperty = this.updateProperty.bind(this);

        this.propertyValueInput = new InputBuilder(InputTypeEnum.text)
            .setValue(this.domElement.id)
            .addEventListener('keyup', this.updateProperty)
            .build()

        const elementsContainer = new ContainerBuilder()
            .appendChild(this.propertyValueInput)
            .appendChild(
                new ButtonBuilder()
                    .setInnerText('Change')
                    .addEventListener('click', this.updateProperty)
                    .build()
            )
            .build()

        this.container = new ContainerBuilder()
            .appendChild(new LabelBuilder()
                .setInnerText('Id Definition')
                .build()
            )
            .appendChild(elementsContainer)
            .build()
    }

    private updateProperty(event: any) {
        if ( this.propertyValueInput.value !== this.domElement.id
            && ( event.type === 'click' || event.key === 'Enter' || event.keyCode === 13 )
        ) {
            try {
                this.domElement.id = defineElementId(this.propertyValueInput.value, IdDefinitionComponent.instances);
            } catch {
                this.propertyValueInput.value = this.domElement.id;
            }
        }
    }
}
