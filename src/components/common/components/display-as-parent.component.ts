import ClassChangeObserverInterface from '../interfaces/class-change-observer.interface';

import CssStyleSheet from '../../css-stylesheet/css-stylesheet';

import ContainerBuilder from '../models/ContainerBuilder';
import SelectorFromEnumBuilder from '../models/SelectorFromEnumBuilder';
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


export default class DisplayAsParentComponent implements ClassChangeObserverInterface {
    private domElement: HTMLElement;
    private container: HTMLDivElement;
    private domElementStyleSheet: CSSStyleDeclaration;

    private displaySelector: HTMLSelectElement;

    private flexContainerAsParent: ContainerBuilder;
    private flexDirectionSelector: GenericCssPropertyMutatorComponent;
    private flexWrapSelector: GenericCssPropertyMutatorComponent;
    private alignItemsSelector: GenericCssPropertyMutatorComponent;
    private justifyContentSelector: GenericCssPropertyMutatorComponent;
    private alignContentSelector: GenericCssPropertyMutatorComponent;

    private gridContainerAsParent: ContainerBuilder;
    private gridTemplateColumnsInput: GenericCssPropertyMutatorComponent;
    private gridTemplateRowsInput: GenericCssPropertyMutatorComponent;
    private gridAutoColumnsInput: GenericCssPropertyMutatorComponent;
    private gridAutoRowsInput: GenericCssPropertyMutatorComponent;
    private gridTemplateAreasTextarea: GenericCssPropertyMutatorComponent;
    private gridJustifyItemsSelector: GenericCssPropertyMutatorComponent;
    private gridAlignItemsSelector: GenericCssPropertyMutatorComponent;
    private gridJustifyContentSelector: GenericCssPropertyMutatorComponent;
    private gridAlignContentSelector: GenericCssPropertyMutatorComponent;
    private gridAutoFlowSelector: GenericCssPropertyMutatorComponent;
    private gridColumnGapInput: InputAndUnitsSelectorComponent;
    private gridRowGapInput: InputAndUnitsSelectorComponent;

    constructor(domElement: HTMLElement) {
        this.domElement = domElement;
        this.domElementStyleSheet = CssStyleSheet.getRuleStyles(this.domElement.classList[0]);
        this.addComponents();
    }

    get component() {
        return this.container;
    }

    private addComponents() {
        this.updateProperty = this.updateProperty.bind(this);

        this.displaySelector = new SelectorFromEnumBuilder(DisplayTypesEnum)
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

        this.flexContainerAsParent = this.createFlexAsParentContainer();
        this.gridContainerAsParent = this.createGridAsParentContainer();
        this.setComponentAccordingToSelector();
    }

    private updateProperty() {
        this.domElementStyleSheet['display'] = this.displaySelector.value;
        this.setComponentAccordingToSelector(true);
    }

    private getCurrentProperties(property: string): string {
        return this.domElementStyleSheet[property];
    }

    private setComponentAccordingToSelector(reset?: boolean) {
        const currentProperties = this.getCurrentProperties('display');

        if (currentProperties === DisplayTypesEnum.flex || currentProperties === DisplayTypesEnum['inline-flex']) {
            if(reset){
                this.resetGrid();
            }
            this.updateFlexComponentsStyleSheet();
            this.setFlexAsParentInitialValues();
            this.container.appendChild(this.flexContainerAsParent.build());
        } else if (
            currentProperties === DisplayTypesEnum.grid
            || currentProperties === DisplayTypesEnum['inline-grid']
        ) {
            if(reset){
                this.resetFlex();
            }
            this.updateGridComponentsStyleSheet();
            this.setGridAsParentInitialValues();
            this.container.appendChild(this.gridContainerAsParent.build());
        } else {
            this.resetFlex();
            this.resetGrid();
        }
    }

    private createFlexAsParentContainer() {
        this.flexDirectionSelector = new GenericCssPropertyMutatorComponent(this.domElementStyleSheet,
            'flex-direction',
            'Flex Direction',
            new SelectorFromEnumBuilder(FlexDirectionEnum).build(),
            EventTypeEnum.change
        );

        this.flexWrapSelector = new GenericCssPropertyMutatorComponent(this.domElementStyleSheet,
            'flex-wrap',
            'Flex Wrap',
            new SelectorFromEnumBuilder(FlexWrapEnum).build(),
            EventTypeEnum.change
        );

        this.alignItemsSelector = new GenericCssPropertyMutatorComponent(this.domElementStyleSheet,
            'align-items',
            'Align Items',
            new SelectorFromEnumBuilder(AlignFlexItemsEnum).build(),
            EventTypeEnum.change
        );

        this.justifyContentSelector = new GenericCssPropertyMutatorComponent(this.domElementStyleSheet,
            'justify-content',
            'Justify Content',
            new SelectorFromEnumBuilder(JustifyFlexContentEnum).build(),
            EventTypeEnum.change
        );

        this.alignContentSelector = new GenericCssPropertyMutatorComponent(this.domElementStyleSheet,
            'align-content',
            'Align Content',
            new SelectorFromEnumBuilder(AlignFlexContentEnum).build(),
            EventTypeEnum.change
        );

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
                .appendChild(this.flexDirectionSelector.component)
                .appendChild(this.flexWrapSelector.component)
                .appendChild(this.alignItemsSelector.component)
                .appendChild(this.justifyContentSelector.component)
                .appendChild(this.alignContentSelector.component)
                .build()
            )
    }

    private setFlexAsParentInitialValues() {
        this.flexDirectionSelector.setValue(this.domElementStyleSheet['flex-direction'] || '');
        this.flexWrapSelector.setValue(this.domElementStyleSheet['flex-wrap'] || '');
        this.alignItemsSelector.setValue(this.domElementStyleSheet['align-items'] || '');
        this.justifyContentSelector.setValue(this.domElementStyleSheet['justify-content'] || '');
        this.alignContentSelector.setValue(this.domElementStyleSheet['align-content'] || '');
    }

    private createGridAsParentContainer() {
        this.gridTemplateColumnsInput = new GenericCssPropertyMutatorComponent(this.domElementStyleSheet,
            'grid-template-columns',
            'Grid Template Columns',
            new InputBuilder(InputTypeEnum.text).build(),
            EventTypeEnum.input);

        this.gridTemplateRowsInput = new GenericCssPropertyMutatorComponent(this.domElementStyleSheet,
            'grid-template-rows',
            'Grid Template Rows',
            new InputBuilder(InputTypeEnum.text).build(),
            EventTypeEnum.input);

        this.gridAutoColumnsInput = new GenericCssPropertyMutatorComponent(this.domElementStyleSheet,
            'grid-auto-columns',
            'Grid Auto Columns',
            new InputBuilder(InputTypeEnum.text).build(),
            EventTypeEnum.input);

        this.gridAutoRowsInput = new GenericCssPropertyMutatorComponent(this.domElementStyleSheet,
            'grid-auto-rows',
            'Grid Auto Rows',
            new InputBuilder(InputTypeEnum.text).build(),
            EventTypeEnum.input);

        this.gridTemplateAreasTextarea = new GenericCssPropertyMutatorComponent(this.domElementStyleSheet,
            'grid-template-areas',
            'Grid Template Areas',
            new TextareaBuilder()
                .setStyle(StyleNameEnum.resize, 'vertical')
                .build(),
            EventTypeEnum.input);

        this.gridJustifyItemsSelector = new GenericCssPropertyMutatorComponent(this.domElementStyleSheet,
            'justify-items',
            'Grid Justify Items',
            new SelectorFromEnumBuilder(JustifyGridItemsEnum).build(),
            EventTypeEnum.change);

        this.gridAlignItemsSelector = new GenericCssPropertyMutatorComponent(this.domElementStyleSheet,
            'align-items',
            'Grid Align Items',
            new SelectorFromEnumBuilder(AlignGridItemsEnum).build(),
            EventTypeEnum.change);

        this.gridJustifyContentSelector = new GenericCssPropertyMutatorComponent(this.domElementStyleSheet,
            'justify-content',
            'Grid Justify Content',
            new SelectorFromEnumBuilder(JustifyGridContentEnum).build(),
            EventTypeEnum.change);

        this.gridAlignContentSelector = new GenericCssPropertyMutatorComponent(this.domElementStyleSheet,
            'align-content',
            'Grid Align Content',
            new SelectorFromEnumBuilder(AlignGridContentEnum).build(),
            EventTypeEnum.change);

        this.gridAutoFlowSelector = new GenericCssPropertyMutatorComponent(this.domElementStyleSheet,
            'grid-auto-flow',
            'Grid Auto Flow',
            new SelectorFromEnumBuilder(GridAutoFlowEnum).build(),
            EventTypeEnum.change);

        this.gridColumnGapInput = new InputAndUnitsSelectorComponent(
            this.domElementStyleSheet,
            'column-gap',
            'Grid Column Gap'
        )
            .setMinValue(0)
            .setZeroValue(0)

        this.gridRowGapInput = new InputAndUnitsSelectorComponent(this.domElementStyleSheet, 'row-gap', 'Grid Row Gap')
            .setMinValue(0)
            .setZeroValue(0)

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
                .appendChild(this.gridTemplateColumnsInput.component)
                .appendChild(this.gridTemplateRowsInput.component)
                .appendChild(this.gridAutoColumnsInput.component)
                .appendChild(this.gridAutoRowsInput.component)
                .appendChild(this.gridTemplateAreasTextarea.component)
                .appendChild(this.gridJustifyItemsSelector.component)
                .appendChild(this.gridAlignItemsSelector.component)
                .appendChild(this.gridJustifyContentSelector.component)
                .appendChild(this.gridAlignContentSelector.component)
                .appendChild(this.gridAutoFlowSelector.component)
                .appendChild(this.gridColumnGapInput.component)
                .appendChild(this.gridRowGapInput.component)
                .build()
            )
    }

    private setGridAsParentInitialValues() {
        this.gridTemplateColumnsInput.setValue(this.domElementStyleSheet['grid-template-columns'] || '');
        this.gridTemplateRowsInput.setValue(this.domElementStyleSheet['grid-template-rows'] || '');
        this.gridAutoColumnsInput.setValue(this.domElementStyleSheet['grid-auto-columns'] || '');
        this.gridAutoRowsInput.setValue(this.domElementStyleSheet['grid-auto-rows'] || '');
        this.gridTemplateAreasTextarea.setValue(this.domElementStyleSheet['grid-template-areas'] || '');
        this.gridJustifyItemsSelector.setValue(this.domElementStyleSheet['justify-items'] || '');
        this.gridAlignItemsSelector.setValue(this.domElementStyleSheet['align-items'] || '');
        this.gridJustifyContentSelector.setValue(this.domElementStyleSheet['justify-content'] || '');
        this.gridAlignContentSelector.setValue(this.domElementStyleSheet['align-content'] || '');
        this.gridAutoFlowSelector.setValue(this.domElementStyleSheet['grid-auto-flow'] || '');
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

            // NOTE: decision: delete only children styles for classes named as the component id.
            this.domElement.childNodes.forEach((child) => {
                CssStyleSheet.getRuleStyles(child['name'])['align-self'] = '';
                CssStyleSheet.getRuleStyles(child['name'])['flex-grow'] = '';
                CssStyleSheet.getRuleStyles(child['name'])['flex-shrink'] = '';
                CssStyleSheet.getRuleStyles(child['name'])['flex-basis'] = '';
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
            this.domElementStyleSheet['grid-auto-flow'] = '';
            this.domElementStyleSheet['column-gap'] = '';
            this.domElementStyleSheet['row-gap'] = '';
            this.domElementStyleSheet['align-items'] = '';
            this.domElementStyleSheet['justify-content'] = '';
            this.domElementStyleSheet['align-content'] = '';

            // NOTE: decision: delete only children styles for classes named as the component id.
            this.domElement.childNodes.forEach((child) => {
                CssStyleSheet.getRuleStyles(child['name'])['grid-column-start'] = '';
                CssStyleSheet.getRuleStyles(child['name'])['grid-column-end'] = '';
                CssStyleSheet.getRuleStyles(child['name'])['grid-row-start'] = '';
                CssStyleSheet.getRuleStyles(child['name'])['grid-row-end'] = '';
                CssStyleSheet.getRuleStyles(child['name'])['justify-self'] = '';
                CssStyleSheet.getRuleStyles(child['name'])['align-self'] = '';
            })
        }
    }

    public classNameUpdated(name: string) {
        this.domElementStyleSheet = CssStyleSheet.getRuleStyles(name);

        const currentProperties = this.getCurrentProperties('display');
        this.displaySelector.value = currentProperties;

        this.setComponentAccordingToSelector(true);
    }

    private updateFlexComponentsStyleSheet() {
        this.flexDirectionSelector.updateStyleSheet(this.domElementStyleSheet);
        this.flexWrapSelector.updateStyleSheet(this.domElementStyleSheet);
        this.alignItemsSelector.updateStyleSheet(this.domElementStyleSheet);
        this.justifyContentSelector.updateStyleSheet(this.domElementStyleSheet);
        this.alignContentSelector.updateStyleSheet(this.domElementStyleSheet);
    }

    private updateGridComponentsStyleSheet() {
        this.gridTemplateColumnsInput.updateStyleSheet(this.domElementStyleSheet);
        this.gridTemplateRowsInput.updateStyleSheet(this.domElementStyleSheet);
        this.gridAutoColumnsInput.updateStyleSheet(this.domElementStyleSheet);
        this.gridAutoRowsInput.updateStyleSheet(this.domElementStyleSheet);
        this.gridTemplateAreasTextarea.updateStyleSheet(this.domElementStyleSheet);
        this.gridJustifyItemsSelector.updateStyleSheet(this.domElementStyleSheet);
        this.gridAlignItemsSelector.updateStyleSheet(this.domElementStyleSheet);
        this.gridJustifyContentSelector.updateStyleSheet(this.domElementStyleSheet);
        this.gridAlignContentSelector.updateStyleSheet(this.domElementStyleSheet);
        this.gridAutoFlowSelector.updateStyleSheet(this.domElementStyleSheet);
        this.gridColumnGapInput.updateStyleSheet(this.domElementStyleSheet);
        this.gridRowGapInput.updateStyleSheet(this.domElementStyleSheet);
    }
}
