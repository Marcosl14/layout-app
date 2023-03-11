import CssStyleSheet from '../../css-stylesheet/css-stylesheet';
import ContainerBuilder from '../models/ContainerBuilder';
import SelectorBuilder from '../models/SelectorBuilder';
import InputBuilder from '../models/InputBuilder';
import LabelBuilder from '../models/LabelBuilder';

import { DisplayTypesEnum } from '../enums/display-types.enum';
import { StyleNameEnum } from '../enums/style-name.enum';
import { AlignFlexSelfEnum } from '../enums/align-flex-self.enum';
import { InputTypeEnum } from '../enums/input-type.enum';
import GenericCssPropertyMutatorComponent from './generic-css-property-mutator.component';
import { EventTypeEnum } from '../enums/event-type.enum';
import { JustifyGridSelfEnum } from '../enums/justify-grid-self.enum';
import { AlignGridSelfEnum } from '../enums/align-grid-self.enum';


export default class DisplayAsChildComponent {
    private domElement: HTMLElement;
    private container: HTMLDivElement;
    private domElementStyleSheet: CSSStyleDeclaration;

    private flexContainerAsChildren: ContainerBuilder;
    private gridContainerAsChildren: ContainerBuilder;

    constructor(domElement: HTMLElement) {
        this.domElement = domElement;
        this.domElementStyleSheet = CssStyleSheet.getRuleStyles(this.domElement.id);
        this.addComponents();
    }

    get component() {
        return this.container;
    }

    // TODO: deberia agregar algo mas de flex???. Grid esta completo, pero se puede mejorar...

    // TODO: ver si el grid lo podemos hacer mas user friendly
    // https://css-tricks.com/snippets/css/complete-guide-grid/#prop-align-items
    // https://css-tricks.com/almanac/properties/g/grid-auto-columns/

    private addComponents() {
        this.container = new ContainerBuilder()
            .build();

        if (this.domElement.id !== 'app-container') {
            const currentProperties = CssStyleSheet.getRuleStyles(this.domElement.parentElement.id)['display']

            if (currentProperties === DisplayTypesEnum.flex || currentProperties === DisplayTypesEnum['inline-flex']) {
                try {
                    this.container.appendChild(this.flexContainerAsChildren.build());
                } catch (err) {
                    this.flexContainerAsChildren = this.createFlexAsChildrenContainer();
                    this.container.appendChild(this.flexContainerAsChildren.build());
                } finally {
                    this.resetGrid();
                }
            } else if (currentProperties === DisplayTypesEnum.grid || currentProperties === DisplayTypesEnum['inline-grid']) {
                try {
                    this.container.appendChild(this.gridContainerAsChildren.build());
                } catch (err) {
                    this.gridContainerAsChildren = this.createGridAsChildrenContainer();
                    this.container.appendChild(this.gridContainerAsChildren.build());
                } finally {
                    this.resetFlex();
                }
            } else {
                this.resetFlex();
                this.resetGrid();
            }
        }
    }

    private createFlexAsChildrenContainer() {
        const alignSelfSelector = new SelectorBuilder(AlignFlexSelfEnum)
            .selectOption(this.domElementStyleSheet['align-self'] || '')
            .build()

        const flexGrowInput = new InputBuilder(InputTypeEnum.number)
            .setValue(`${parseInt(this.domElementStyleSheet['flex-grow']) || 0}`)
            .setMax(1000)
            .setMin(0)
            .build();

        const flexShrinkInput = new InputBuilder(InputTypeEnum.number)
            .setValue(`${parseInt(this.domElementStyleSheet['flex-shrink']) || 0}`)
            .setMax(1000)
            .setMin(0)
            .build();

        const flexBasisInput = new InputBuilder(InputTypeEnum.number)
            .setValue(`${parseInt(this.domElementStyleSheet['flex-basis']) || 0}`)
            .setMax(1000)
            .setMin(0)
            .build();

        return new ContainerBuilder()
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
                .appendChild(new GenericCssPropertyMutatorComponent(this.domElement, 'align-self', 'Align Self', alignSelfSelector, EventTypeEnum.change).component)
                .appendChild(new GenericCssPropertyMutatorComponent(this.domElement, 'flex-grow', 'Flex Grow', flexGrowInput, EventTypeEnum.input).component)
                .appendChild(new GenericCssPropertyMutatorComponent(this.domElement, 'flex-shrink', 'Flex Shrink', flexShrinkInput, EventTypeEnum.input).component)
                .appendChild(new GenericCssPropertyMutatorComponent(this.domElement, 'flex-basis', 'Flex Basis (%)', flexBasisInput, EventTypeEnum.input).component)
                .build()
            )
    }

    private createGridAsChildrenContainer() {
        const gridColumnStartInput = new InputBuilder(InputTypeEnum.text)
            .setValue(this.domElementStyleSheet['grid-column-start'] || '')
            .build()

        const gridColumnEndInput = new InputBuilder(InputTypeEnum.text)
            .setValue(this.domElementStyleSheet['grid-column-end'] || '')
            .build()

        const gridRowStartInput = new InputBuilder(InputTypeEnum.text)
            .setValue(this.domElementStyleSheet['grid-row-start'] || '')
            .build()

        const gridRowEndInput = new InputBuilder(InputTypeEnum.text)
            .setValue(this.domElementStyleSheet['grid-row-end'] || '')
            .build()

        const gridJustifySelf = new SelectorBuilder(JustifyGridSelfEnum)
            .selectOption(this.domElementStyleSheet['justify-self'] || '')
            .build()

        const gridAlignSelf = new SelectorBuilder(AlignGridSelfEnum)
            .selectOption(this.domElementStyleSheet['align-self'] || '')
            .build()

        return new ContainerBuilder()
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.border, '1px solid #4CAF50')
                .setStyle(StyleNameEnum.padding, '3px')
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(new ContainerBuilder()
                    .setStyle(StyleNameEnum.display, 'flex')
                    .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                    .appendChild(new LabelBuilder()
                        .setInnerText('Display Grid as Parent')
                        .build()
                    )
                    .build()
                )
                .appendChild(new GenericCssPropertyMutatorComponent(this.domElement, 'grid-column-start', 'Grid Column Start', gridColumnStartInput, EventTypeEnum.input).component)
                .appendChild(new GenericCssPropertyMutatorComponent(this.domElement, 'grid-column-end', 'Grid Column End', gridColumnEndInput, EventTypeEnum.input).component)
                .appendChild(new GenericCssPropertyMutatorComponent(this.domElement, 'grid-row-start', 'Grid Row Start', gridRowStartInput, EventTypeEnum.input).component)
                .appendChild(new GenericCssPropertyMutatorComponent(this.domElement, 'grid-row-end', 'Grid Row End', gridRowEndInput, EventTypeEnum.input).component)
                .appendChild(new GenericCssPropertyMutatorComponent(this.domElement, 'justify-self', 'Grid Justify Self', gridJustifySelf, EventTypeEnum.change).component)
                .appendChild(new GenericCssPropertyMutatorComponent(this.domElement, 'align-self', 'Grid Align Self', gridAlignSelf, EventTypeEnum.change).component)
                .build()
            )
    }

    private resetFlex() {
        try {
            this.container.removeChild(this.flexContainerAsChildren.build());
        } catch (err) {
            undefined;
        }
    }

    private resetGrid() {
        try {
            this.container.removeChild(this.gridContainerAsChildren.build());
        } catch (err) {
            undefined;
        }
    }
}
