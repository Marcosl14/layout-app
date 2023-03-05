import CssStyleSheet from '../../css-stylesheet/css-stylesheet';
import ContainerBuilder from '../models/ContainerBuilder';
import SelectorBuilder from '../models/SelectorBuilder';
import LabelBuilder from '../models/LabelBuilder';

import { DisplayTypesEnum } from '../enums/display-types.enum';
import { FlexDirectionEnum } from '../enums/flex-direction.enum';
import { StyleNameEnum } from '../enums/style-name.enum';
import { FlexWrapEnum } from '../enums/flex-wrap.enum';
import { AlignItemsEnum } from '../enums/align-items.enum';
import { JustifyContentEnum } from '../enums/justify-content.enum';
import { AlignContentEnum } from '../enums/align-content.enum';


export default class DisplayAsParentComponent {
    private domElement: HTMLElement;
    private container: HTMLDivElement;
    private domElementStyleSheet;

    private displaySelector: HTMLSelectElement;
    private flexDirectionSelector: HTMLSelectElement;
    private flexWrapSelector: HTMLSelectElement;
    private alignItemsSelector: HTMLSelectElement;
    private justifyContentSelector: HTMLSelectElement;
    private alignContentSelector: HTMLSelectElement;

    private flexContainerAsParent: ContainerBuilder;

    constructor(domElement: HTMLElement) {
        this.domElement = domElement;
        this.domElementStyleSheet = CssStyleSheet.getRuleStyles(this.domElement.id);
        this.addComponents();
    }

    get component() {
        return this.container;
    }

    private addComponents() {
        this.updateProperty = this.updateProperty.bind(this);

        this.displaySelector = new SelectorBuilder(DisplayTypesEnum)
            .selectOption(this.getCurrentProperties('display'))
            .addEventListener('change', this.updateProperty)
            .build()

        this.container = new ContainerBuilder()
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, 'flex')
                .setStyle(StyleNameEnum['flex-direction'], 'column')
                .setStyle(StyleNameEnum['align-items'], 'stretch')
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(new LabelBuilder()
                    .setInnerText('Display Settings')
                    .build()
                )
                .appendChild(this.displaySelector)
                .build()
            )
            .build();

        this.addComponentAccordingToSelector();
    }

    private updateProperty() {
        this.domElementStyleSheet['display'] = this.displaySelector.value;

        this.addComponentAccordingToSelector();
    }

    private getCurrentProperties(property: string): string {
        return this.domElementStyleSheet[property];
    }

    private addComponentAccordingToSelector() {
        const currentProperties = this.getCurrentProperties('display');
                // TODO: ver como hariamos si existen varias clases...
                // Quizas haya que implementar primero las clases...

        if (currentProperties === 'flex') {
            this.addFlexAsParentContainer();
            this.container.appendChild(this.flexContainerAsParent.build())
        } else if (currentProperties === 'grid') {
            try {
                // TODO: faltan propiedades del grid...
                // TODO: eliminar del css todo lo que sea del flex...
                this.container.removeChild(this.flexContainerAsParent.build());

                this.domElementStyleSheet['flex-direction'] = '';
                this.domElementStyleSheet['flex-wrap'] = '';
                this.domElementStyleSheet['align-items'] = '';
                this.domElementStyleSheet['justify-content'] = '';
                this.domElementStyleSheet['align-content'] = '';

                this.domElement.childNodes.forEach((child) => {
                    CssStyleSheet.getRuleStyles(child['id'])['align-self'] = '';
                    // TODO aca faltan propiedades para borrar en los hijos!!!!
                })
            } catch {
                return;
            }
        } else {
            try {
                // TODO: remover tambien propiedades del grid...
                // TODO: eliminar del css todo lo que sea del flex...
                this.container.removeChild(this.flexContainerAsParent.build());
            } catch {
                return;
            }
        }
    }

    private addFlexAsParentContainer() {
        this.changeFlexDirection = this.changeFlexDirection.bind(this);

        this.changeFlexWrap = this.changeFlexWrap.bind(this);

        this.changeAlignItems = this.changeAlignItems.bind(this);

        this.changeJustifyContent = this.changeJustifyContent.bind(this);

        this.changeAlignContent = this.changeAlignContent.bind(this);

        this.flexDirectionSelector = new SelectorBuilder(FlexDirectionEnum)
            .selectOption(this.domElementStyleSheet['flex-direction'])
            .addEventListener('change', this.changeFlexDirection)
            .build()

        this.flexWrapSelector = new SelectorBuilder(FlexWrapEnum)
            .selectOption(this.domElementStyleSheet['flex-wrap'])
            .addEventListener('change', this.changeFlexWrap)
            .build()

        this.alignItemsSelector = new SelectorBuilder(AlignItemsEnum)
            .selectOption(this.domElementStyleSheet['align-items'])
            .addEventListener('change', this.changeAlignItems)
            .build()

        this.justifyContentSelector = new SelectorBuilder(JustifyContentEnum)
            .selectOption(this.domElementStyleSheet['justify-content'])
            .addEventListener('change', this.changeJustifyContent)
            .build()

        this.alignContentSelector = new SelectorBuilder(AlignContentEnum)
            .selectOption(this.domElementStyleSheet['align-content'])
            .addEventListener('change', this.changeAlignContent)
            .build()

        this.flexContainerAsParent = new ContainerBuilder()
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.border, '1px solid #4CAF50')
                .setStyle(StyleNameEnum.padding, '3px')
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(new ContainerBuilder()
                    .setStyle(StyleNameEnum.display, 'flex')
                    .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                    .appendChild(new LabelBuilder()
                        .setInnerText('Display Flex as Parent')
                        .build()
                    )
                    .build()
                )
                .appendChild(this.buildGenericSelectorContainer('Flex Direction', this.flexDirectionSelector))
                .appendChild(this.buildGenericSelectorContainer('Flex Wrap', this.flexWrapSelector))
                .appendChild(this.buildGenericSelectorContainer('Align Items', this.alignItemsSelector))
                .appendChild(this.buildGenericSelectorContainer('Justify Content', this.justifyContentSelector))
                .appendChild(this.buildGenericSelectorContainer('Align Content', this.alignContentSelector))
                .build()
            )
    }

    private changeFlexDirection() {
        this.domElementStyleSheet['flex-direction'] = this.flexDirectionSelector.value;
    }

    private changeFlexWrap() {
        this.domElementStyleSheet['flex-wrap'] = this.flexWrapSelector.value;
    }

    private changeAlignItems() {
        this.domElementStyleSheet['align-items'] = this.alignItemsSelector.value;
    }

    private changeJustifyContent() {
        this.domElementStyleSheet['justify-content'] = this.justifyContentSelector.value;
    }

    private changeAlignContent() {
        this.domElementStyleSheet['align-content'] = this.alignContentSelector.value;
    }

    private buildGenericSelectorContainer(label: string, selector: HTMLSelectElement) {
        return new ContainerBuilder()
            .setStyle(StyleNameEnum.display, 'flex')
            .setStyle(StyleNameEnum['flex-direction'], 'column')
            .setStyle(StyleNameEnum['align-items'], 'stretch')
            .setStyle(StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new LabelBuilder()
                .setInnerText(label)
                .build()
            )
            .appendChild(selector)
            .build()
    }
}
