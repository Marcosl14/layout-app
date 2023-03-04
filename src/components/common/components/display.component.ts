import CssStyleSheet from '../../css-stylesheet/css-stylesheet';
import ContainerBuilder from '../models/ContainerBuilder';
import SelectorBuilder from '../models/SelectorBuilder';
import { DisplayTypesEnum } from '../enums/display-types.enum';
import { FlexDirectionEnum } from '../enums/flex-direction.enum';
import LabelBuilder from '../models/LabelBuilder';
import { StyleNameEnum } from '../enums/style-name.enum';


export default class DisplayComponent {
    private domElement: HTMLElement;
    private container: HTMLDivElement;
    private domElementStyleSheet;

    private displaySelector: HTMLSelectElement;
    private flexDirectionSelector: HTMLSelectElement;

    private flexContainer: ContainerBuilder;

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

    addComponentAccordingToSelector() {
        const currentProperties = this.getCurrentProperties('display');

        if (currentProperties === 'flex') {
            this.addFlexAsParentContainer();
            this.container.appendChild(this.flexContainer.build())
        } else if (currentProperties === 'grid') {
            try {
                // TODO: faltan propiedades del grid...
                this.container.removeChild(this.flexContainer.build());
            } catch {
                return;
            }
        } else {
            try {
                // TODO: remover tambien propiedades del grid...
                this.container.removeChild(this.flexContainer.build());
            } catch {
                return;
            }
        }

        if (this.domElement.id !== 'app-container') {
            if (CssStyleSheet.getRuleStyles(this.domElement.parentElement.id)['display'] === DisplayTypesEnum.flex) {
                // TODO: ver como hariamos si existen varias clases...
                // Quizas haya que implementar primero las clases...
                this.addFlexAsChildrenContainer();
            }
        }
    }

    addFlexAsParentContainer() {
        this.changeFlexDirection = this.changeFlexDirection.bind(this);

        this.flexDirectionSelector = new SelectorBuilder(FlexDirectionEnum)
            .selectOption(this.domElementStyleSheet['flex-direction'])
            .addEventListener('change', this.changeFlexDirection)
            .build()

        this.flexContainer = new ContainerBuilder()
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.border, '1px solid #4CAF50')
                .setStyle(StyleNameEnum.padding, '3px')
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(new ContainerBuilder()
                    .setStyle(StyleNameEnum.display, 'flex')
                    .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                    .appendChild(new LabelBuilder()
                        .setInnerText('Flex as Parent')
                        .build()
                    )
                    .build()
                )
                .appendChild(new ContainerBuilder()
                    .setStyle(StyleNameEnum.display, 'flex')
                    .setStyle(StyleNameEnum['flex-direction'], 'column')
                    .setStyle(StyleNameEnum['align-items'], 'stretch')
                    .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                    .appendChild(new LabelBuilder()
                        .setInnerText('Flex Direction')
                        .build()
                    )
                    .appendChild(this.flexDirectionSelector)
                    .build()
                )
                .build()
            )
    }

    changeFlexDirection() {
        this.domElementStyleSheet['flex-direction'] = this.flexDirectionSelector.value;
    }

    addFlexAsChildrenContainer() {
        this.container.appendChild(new ContainerBuilder()
            .setStyle(StyleNameEnum.border, '1px solid #4CAF50')
            .setStyle(StyleNameEnum.padding, '3px')
            .setStyle(StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new LabelBuilder()
                .setInnerText('Flex As Child')
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, 'flex')
                .setStyle(StyleNameEnum['flex-direction'], 'column')
                .setStyle(StyleNameEnum['align-items'], 'stretch')
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(new LabelBuilder()
                    .setInnerText('Flex')
                    .build()
                )
                // .appendChild(this.flexDirectionSelector)
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, 'flex')
                .setStyle(StyleNameEnum['flex-direction'], 'column')
                .setStyle(StyleNameEnum['align-items'], 'stretch')
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(new LabelBuilder()
                    .setInnerText('Flex Direction')
                    .build()
                )
                // .appendChild(this.flexDirectionSelector)
                .build()
            )
            .build()
        )
    }
}
