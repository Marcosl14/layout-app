import ContainerBuilder from '../models/ContainerBuilder';
import InputBuilder from '../models/InputBuilder';
import LabelBuilder from '../models/LabelBuilder';
import ButtonBuilder from '../models/ButtonBuilder';
import RawHTMLConponent from '../../html-components/RawHTMLComponent';

import defineElementId from '../functions/define-element-id';

import { StyleNameEnum } from '../enums/style-name.enum';
import { InputTypeEnum } from '../enums/input-type.enum';

export default class IdDefinitionComponent {
    private domElement: HTMLElement;
    private container: HTMLDivElement;
    private static instances: HTMLElement[];

    private propertyValueInput: HTMLInputElement;

    constructor(domElement: HTMLElement) {
        // TODO: si el id es '', entonces deberiamos eliminar dicha propiedad del elemento...
        // TODO: ver si es necesario almacenar un id como propiedad...
        // TODO: si la clase solo la utiliza ese unico componente, quizas el nombre de la clase css deberia ir con # y no con punto...

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
            .setStyle(StyleNameEnum.border, '1px solid #4CAF50')
            .setStyle(StyleNameEnum.padding, '3px')
            .setStyle(StyleNameEnum.margin, '0px 0px 10px')
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
