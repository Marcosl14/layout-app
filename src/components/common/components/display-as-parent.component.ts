import CssStyleSheet from '../../css-stylesheet/css-stylesheet';

import ContainerBuilder from '../models/ContainerBuilder';
import SelectorBuilder from '../models/SelectorBuilder';
import LabelBuilder from '../models/LabelBuilder';
import InputBuilder from '../models/InputBuilder';
import TextareaBuilder from '../models/TextareaBuilder';

import InputAndUnitsSelectorComponent from './input-with-units-selector.component';
import GenericCssPropertyMutatorComponent from './generic-css-property-mutator.component';

import { DisplayTypesEnum } from '../enums/display-types.enum';
import { FlexDirectionEnum } from '../enums/flex-direction.enum';
import { StyleNameEnum } from '../enums/style-name.enum';
import { FlexWrapEnum } from '../enums/flex-wrap.enum';
import { AlignFlexItemsEnum } from '../enums/align-flex-items.enum';
import { JustifyFlexContentEnum } from '../enums/justify-flex-content.enum';
import { AlignFlexContentEnum } from '../enums/align-flex-content.enum';
import { InputTypeEnum } from '../enums/input-type.enum';
import { EventTypeEnum } from '../enums/event-type.enum';
import { JustifyGridItemsEnum } from '../enums/justify-grid-items.enum';
import { AlignGridItemsEnum } from '../enums/align-grid-items.enum';
import { JustifyGridContentEnum } from '../enums/justify-grid-content.enum';
import { AlignGridContentEnum } from '../enums/align-grid-content.enum';
import { GridAutoFlowEnum } from '../enums/grid-auto-flow.enum';


export default class DisplayAsParentComponent {
    private domElement: HTMLElement;
    private container: HTMLDivElement;
    private domElementStyleSheet: CSSStyleDeclaration;

    private displaySelector: HTMLSelectElement;

    private flexContainerAsParent: ContainerBuilder;
    private gridContainerAsParent: ContainerBuilder;

    constructor(domElement: HTMLElement) {
        this.domElement = domElement;
        this.domElementStyleSheet = CssStyleSheet.getRuleStyles(this.domElement.id);
        this.addComponents();
    }

    // TODO: deberia agregar algo mas de flex???. Grid esta completo, pero se puede mejorar...

    // TODO: ver si el grid lo podemos hacer mas user friendly
    // https://css-tricks.com/snippets/css/complete-guide-grid/#prop-align-items
    // https://css-tricks.com/almanac/properties/g/grid-auto-columns/

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
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .setStyle(StyleNameEnum['flex-direction'], FlexDirectionEnum.column)
                .setStyle(StyleNameEnum['align-items'], AlignFlexItemsEnum.stretch)
                .setStyle(StyleNameEnum.border, '1px solid #4CAF50')
                .setStyle(StyleNameEnum.padding, '3px')
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

        if (currentProperties === DisplayTypesEnum.flex || currentProperties === DisplayTypesEnum['inline-flex']) {
            try {
                this.container.appendChild(this.flexContainerAsParent.build());
            } catch (err) {
                this.flexContainerAsParent = this.createFlexAsParentContainer();
                this.container.appendChild(this.flexContainerAsParent.build());
            } finally {
                this.resetGrid();
            }
        } else if (currentProperties === DisplayTypesEnum.grid || currentProperties === DisplayTypesEnum['inline-grid']) {
            try {
                this.container.appendChild(this.gridContainerAsParent.build());
            } catch (err) {
                this.gridContainerAsParent = this.createGridAsParentContainer();
                this.container.appendChild(this.gridContainerAsParent.build());
            } finally {
                this.resetFlex();
            }
        } else {
            this.resetFlex();
            this.resetGrid();
        }
    }

    private createFlexAsParentContainer() {
        const flexDirectionSelector = new SelectorBuilder(FlexDirectionEnum)
            .selectOption(this.domElementStyleSheet['flex-direction'] || '')
            .build()

        const flexWrapSelector = new SelectorBuilder(FlexWrapEnum)
            .selectOption(this.domElementStyleSheet['flex-wrap'] || '')
            .build()

        const alignItemsSelector = new SelectorBuilder(AlignFlexItemsEnum)
            .selectOption(this.domElementStyleSheet['align-items'] || '')
            .build()

        const justifyContentSelector = new SelectorBuilder(JustifyFlexContentEnum)
            .selectOption(this.domElementStyleSheet['justify-content'] || '')
            .build()

        const alignContentSelector = new SelectorBuilder(AlignFlexContentEnum)
            .selectOption(this.domElementStyleSheet['align-content'] || '')
            .build()

        return new ContainerBuilder()
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.border, '1px solid #4CAF50')
                .setStyle(StyleNameEnum.padding, '3px')
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(new ContainerBuilder()
                    .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                    .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                    .appendChild(new LabelBuilder()
                        .setInnerText('Display Flex as Parent')
                        .build()
                    )
                    .build()
                )
                .appendChild(new GenericCssPropertyMutatorComponent(this.domElement, 'flex-direction', 'Flex Direction', flexDirectionSelector, EventTypeEnum.change).component)
                .appendChild(new GenericCssPropertyMutatorComponent(this.domElement, 'flex-wrap', 'Flex Wrap', flexWrapSelector, EventTypeEnum.change).component)
                .appendChild(new GenericCssPropertyMutatorComponent(this.domElement, 'align-items', 'Align Items', alignItemsSelector, EventTypeEnum.change).component)
                .appendChild(new GenericCssPropertyMutatorComponent(this.domElement, 'justify-content', 'Justify Content', justifyContentSelector, EventTypeEnum.change).component)
                .appendChild(new GenericCssPropertyMutatorComponent(this.domElement, 'align-content', 'Align Content', alignContentSelector, EventTypeEnum.change).component)
                .build()
            )
    }

    private createGridAsParentContainer() {
        const gridTemplateColumnsInput = new InputBuilder(InputTypeEnum.text)
            .setValue(this.domElementStyleSheet['grid-template-columns'] || '')
            .build()

        const gridTemplateRowsInput = new InputBuilder(InputTypeEnum.text)
            .setValue(this.domElementStyleSheet['grid-template-rows'] || '')
            .build()

        const gridAutoColumnsInput = new InputBuilder(InputTypeEnum.text)
            .setValue(this.domElementStyleSheet['grid-auto-columns'] || '')
            .build()

        const gridAutoRowsInput = new InputBuilder(InputTypeEnum.text)
            .setValue(this.domElementStyleSheet['grid-auto-rows'] || '')
            .build()

        const gridTemplateAreasTextarea = new TextareaBuilder()
            .setStyle(StyleNameEnum.resize, 'vertical')
            .setValue(this.domElementStyleSheet['grid-template-areas'] || '')
            .build()

        const gridJustifyItemsSelector = new SelectorBuilder(JustifyGridItemsEnum)
            .selectOption(this.domElementStyleSheet['justify-items'] || '')
            .build()

        const gridAlignItemsSelector = new SelectorBuilder(AlignGridItemsEnum)
            .selectOption(this.domElementStyleSheet['align-items'] || '')
            .build()

        const gridJustifyContentSelector = new SelectorBuilder(JustifyGridContentEnum)
            .selectOption(this.domElementStyleSheet['justify-content'] || '')
            .build()

        const gridAlignContentSelector = new SelectorBuilder(AlignGridContentEnum)
            .selectOption(this.domElementStyleSheet['align-content'] || '')
            .build()

        const gridAutoFlowSelector = new SelectorBuilder(GridAutoFlowEnum)
            .selectOption(this.domElementStyleSheet['grid-auto-flow'] || '')
            .build()

        return new ContainerBuilder()
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.border, '1px solid #4CAF50')
                .setStyle(StyleNameEnum.padding, '3px')
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(new ContainerBuilder()
                    .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                    .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                    .appendChild(new LabelBuilder()
                        .setInnerText('Display Grid as Parent')
                        .build()
                    )
                    .build()
                )
                .appendChild(new GenericCssPropertyMutatorComponent(this.domElement, 'grid-template-columns', 'Grid Template Columns', gridTemplateColumnsInput, EventTypeEnum.input).component)
                .appendChild(new GenericCssPropertyMutatorComponent(this.domElement, 'grid-template-rows', 'Grid Template Rows', gridTemplateRowsInput, EventTypeEnum.input).component)
                .appendChild(new GenericCssPropertyMutatorComponent(this.domElement, 'grid-auto-columns', 'Grid Auto Columns', gridAutoColumnsInput, EventTypeEnum.input).component)
                .appendChild(new GenericCssPropertyMutatorComponent(this.domElement, 'grid-auto-rows', 'Grid Auto Rows', gridAutoRowsInput, EventTypeEnum.input).component)
                .appendChild(new GenericCssPropertyMutatorComponent(this.domElement, 'grid-template-areas', 'Grid Template Areas', gridTemplateAreasTextarea, EventTypeEnum.input).component)
                .appendChild(new GenericCssPropertyMutatorComponent(this.domElement, 'justify-items', 'Grid Justify Items', gridJustifyItemsSelector, EventTypeEnum.change).component)
                .appendChild(new GenericCssPropertyMutatorComponent(this.domElement, 'align-items', 'Grid Align Items', gridAlignItemsSelector, EventTypeEnum.change).component)
                .appendChild(new GenericCssPropertyMutatorComponent(this.domElement, 'justify-content', 'Grid Justify Content', gridJustifyContentSelector, EventTypeEnum.change).component)
                .appendChild(new GenericCssPropertyMutatorComponent(this.domElement, 'align-content', 'Grid Align Content', gridAlignContentSelector, EventTypeEnum.change).component)
                .appendChild(new GenericCssPropertyMutatorComponent(this.domElement, 'grid-auto-flow', 'Grid Auto Flow', gridAutoFlowSelector, EventTypeEnum.change).component)
                .appendChild(new InputAndUnitsSelectorComponent(this.domElement, 'column-gap', 'Grid Column Gap').component)
                .appendChild(new InputAndUnitsSelectorComponent(this.domElement, 'row-gap', 'Grid Row Gap').component)
                .build()
            )
    }

    private resetFlex() {
        try {
            this.container.removeChild(this.flexContainerAsParent.build());
        } catch (err) {
            undefined;
        } finally {
            this.domElementStyleSheet['flex-direction'] = '';
            this.domElementStyleSheet['flex-wrap'] = '';
            this.domElementStyleSheet['align-items'] = '';
            this.domElementStyleSheet['justify-content'] = '';
            this.domElementStyleSheet['align-content'] = '';

            this.domElement.childNodes.forEach((child) => {
                CssStyleSheet.getRuleStyles(child['id'])['align-self'] = '';
                CssStyleSheet.getRuleStyles(child['id'])['flex-grow'] = '';
                CssStyleSheet.getRuleStyles(child['id'])['flex-shrink'] = '';
                CssStyleSheet.getRuleStyles(child['id'])['flex-basis'] = '';
            })
        }
    }

    private resetGrid() {
        try {
            this.container.removeChild(this.gridContainerAsParent.build());
        } catch (err) {
            undefined;
        } finally {
            this.domElementStyleSheet['grid-template-columns'] = '';
            this.domElementStyleSheet['grid-template-rows'] = '';
            this.domElementStyleSheet['grid-auto-columns'] = '';
            this.domElementStyleSheet['grid-auto-rows'] = '';
            this.domElementStyleSheet['grid-template-areas'] = '';
            this.domElementStyleSheet['justify-items'] = '';
            this.domElementStyleSheet['align-items'] = '';
            this.domElementStyleSheet['justify-content'] = '';
            this.domElementStyleSheet['align-content'] = '';
            this.domElementStyleSheet['grid-auto-flow'] = '';
            this.domElementStyleSheet['column-gap'] = '';
            this.domElementStyleSheet['row-gap'] = '';

            this.domElement.childNodes.forEach((child) => {
                CssStyleSheet.getRuleStyles(child['id'])['grid-column-start'] = '';
                CssStyleSheet.getRuleStyles(child['id'])['grid-column-end'] = '';
                CssStyleSheet.getRuleStyles(child['id'])['grid-row-start'] = '';
                CssStyleSheet.getRuleStyles(child['id'])['grid-row-end'] = '';
                CssStyleSheet.getRuleStyles(child['id'])['justify-self'] = '';
                CssStyleSheet.getRuleStyles(child['id'])['align-self'] = '';
            })
        }
    }
}
