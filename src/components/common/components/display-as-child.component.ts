import CssStyleSheet from '../../css-stylesheet/css-stylesheet';
import ContainerBuilder from '../models/ContainerBuilder';
import SelectorBuilder from '../models/SelectorBuilder';
import InputBuilder from '../models/InputBuilder';
import LabelBuilder from '../models/LabelBuilder';

import { DisplayTypesEnum } from '../enums/display-types.enum';
import { StyleNameEnum } from '../enums/style-name.enum';
import { AlignSelfEnum } from '../enums/align-self.enum';
import { InputTypeEnum } from '../enums/input-type.enum';


export default class DisplayAsChildComponent {
    private domElement: HTMLElement;
    private container: HTMLDivElement;
    private domElementStyleSheet;

    private alignSelfSelector: HTMLSelectElement;
    private flexGrowInput: HTMLInputElement;
    private flexShrinkInput: HTMLInputElement;
    private flexBasisInput: HTMLInputElement;

    private flexContainerAsChildren: ContainerBuilder;

    constructor(domElement: HTMLElement) {
        this.domElement = domElement;
        this.domElementStyleSheet = CssStyleSheet.getRuleStyles(this.domElement.id);
        this.addComponents();
    }

    get component() {
        return this.container;
    }

    private addComponents() {
        this.container = new ContainerBuilder()
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, 'flex')
                .setStyle(StyleNameEnum['flex-direction'], 'column')
                .setStyle(StyleNameEnum['align-items'], 'stretch')
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .build()
            )
            .build();

        if (this.domElement.id !== 'app-container') {
            if (CssStyleSheet.getRuleStyles(this.domElement.parentElement.id)['display'] === DisplayTypesEnum.flex) {
                // TODO: ver como hariamos si existen varias clases...
                // Quizas haya que implementar primero las clases...
                this.addFlexAsChildrenContainer();
                this.container.appendChild(this.flexContainerAsChildren.build());
            }
        }
    }

    private addFlexAsChildrenContainer() {
        this.changeAlignSelf = this.changeAlignSelf.bind(this);
        this.changeFlexGrow = this.changeFlexGrow.bind(this);
        this.changeFlexShrink = this.changeFlexShrink.bind(this);
        this.changeFlexBasis = this.changeFlexBasis.bind(this);

        this.alignSelfSelector = new SelectorBuilder(AlignSelfEnum)
            .selectOption(this.domElementStyleSheet['align-self'])
            .addEventListener('change', this.changeAlignSelf)
            .build()

        this.flexGrowInput = new InputBuilder(InputTypeEnum.number)
            .setValue(`${parseInt(this.domElementStyleSheet['flex-grow'])}`)
            .setMax(1000)
            .setMin(0)
            .addEventListener('input', this.changeFlexGrow)
            .build();

        this.flexShrinkInput = new InputBuilder(InputTypeEnum.number)
            .setValue(`${parseInt(this.domElementStyleSheet['flex-shrink'])}`)
            .setMax(1000)
            .setMin(0)
            .addEventListener('input', this.changeFlexShrink)
            .build();

        this.flexBasisInput = new InputBuilder(InputTypeEnum.number)
            .setValue(`${parseInt(this.domElementStyleSheet['flex-basis'])}`)
            .setMax(1000)
            .setMin(0)
            .addEventListener('input', this.changeFlexBasis)
            .build();

        this.flexContainerAsChildren = new ContainerBuilder()
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.border, '1px solid #4CAF50')
                .setStyle(StyleNameEnum.padding, '3px')
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(new ContainerBuilder()
                    .setStyle(StyleNameEnum.display, 'flex')
                    .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                    .appendChild(new LabelBuilder()
                        .setInnerText('Display Flex as Child')
                        .build()
                    )
                    .build()
                )
                .appendChild(this.buildGenericSelectorContainer('Align Self', this.alignSelfSelector))
                .appendChild(this.buildGenericInputContainer('Flex Grow', this.flexGrowInput))
                .appendChild(this.buildGenericInputContainer('Flex Shrink', this.flexShrinkInput))
                .appendChild(this.buildGenericInputContainer('Flex Basis (%)', this.flexBasisInput))
                .build()
            )
    }

    private changeAlignSelf() {
        this.domElementStyleSheet['align-self'] = this.alignSelfSelector.value;
    }

    private changeFlexGrow() {
        this.domElementStyleSheet['flex-grow'] = this.flexGrowInput.value;
    }

    private changeFlexShrink() {
        this.domElementStyleSheet['flex-shrink'] = this.flexShrinkInput.value;
    }

    private changeFlexBasis() {
        this.domElementStyleSheet['flex-basis'] = `${this.flexBasisInput.value}%`;
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

    private buildGenericInputContainer(label: string, input: HTMLInputElement) {
        return new ContainerBuilder()
            .setStyle(StyleNameEnum.display, 'flex')
            .setStyle(StyleNameEnum['flex-direction'], 'column')
            .setStyle(StyleNameEnum['align-items'], 'stretch')
            .setStyle(StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new LabelBuilder()
                .setInnerText(label)
                .build()
            )
            .appendChild(input)
            .build()
    }
}
