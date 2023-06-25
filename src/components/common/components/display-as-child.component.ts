import ClassChangeObserverInterface from '../interfaces/class-change-observer.interface';

import CssStyleSheet from '../../css-stylesheet/css-stylesheet';

import ContainerBuilder from '../models/ContainerBuilder';
import SelectorFromEnumBuilder from '../models/SelectorFromEnumBuilder';
import InputBuilder from '../models/InputBuilder';
import LabelBuilder from '../models/LabelBuilder';

import GenericCssPropertyMutatorComponent from './generic-css-property-mutator.component';

import { DisplayTypesEnum } from '../enums/display-types.enum';
import { StyleNameEnum } from '../enums/style-name.enum';
import { AlignFlexSelfEnum } from '../enums/align-flex-self.enum';
import { InputTypeEnum } from '../enums/input-type.enum';
import { EventTypeEnum } from '../enums/event-type.enum';
import { JustifyGridSelfEnum } from '../enums/justify-grid-self.enum';
import { AlignGridSelfEnum } from '../enums/align-grid-self.enum';


export default class DisplayAsChildComponent implements ClassChangeObserverInterface {
    private domElement: HTMLElement;
    private container: HTMLDivElement;
    private domElementStyleSheet: CSSStyleDeclaration | object;

    private flexContainerAsChildren: HTMLDivElement;
    private alignSelfSelector: GenericCssPropertyMutatorComponent;
    private flexGrowInput: GenericCssPropertyMutatorComponent;
    private flexShrinkInput: GenericCssPropertyMutatorComponent;
    private flexBasisInput: GenericCssPropertyMutatorComponent;

    private gridContainerAsChildren: HTMLDivElement;
    private gridColumnStartInput: GenericCssPropertyMutatorComponent;
    private gridColumnEndInput: GenericCssPropertyMutatorComponent;
    private gridRowStartInput: GenericCssPropertyMutatorComponent;
    private gridRowEndInput: GenericCssPropertyMutatorComponent;
    private gridJustifySelf: GenericCssPropertyMutatorComponent;
    private gridAlignSelf: GenericCssPropertyMutatorComponent;

    constructor(domElement: HTMLElement) {
        this.domElement = domElement;
        this.domElementStyleSheet = CssStyleSheet.getRuleStyles(this.domElement.classList[0]);

        this.container = new ContainerBuilder().build();

        this.flexContainerAsChildren = this.createFlexAsChildrenContainer();
        this.gridContainerAsChildren = this.createGridAsChildrenContainer();
        this.setComponentAccordingToSelector();
    }

    get component() {
        return this.container;
    }

    private setComponentAccordingToSelector() {
        if (this.domElement.id !== 'app-container') {
            // NOTE: window.getComputedStyle(domElement) return the active style of that dom element.
            const currentProperties = window.getComputedStyle(this.domElement.parentElement)['display']

            if (currentProperties === DisplayTypesEnum.flex || currentProperties === DisplayTypesEnum['inline-flex']) {
                this.resetGrid();
                this.updateFlexComponentsStyleSheet();
                this.setFlexAsChildrenInitialValues();
                this.container.appendChild(this.flexContainerAsChildren);
            } else if (
                currentProperties === DisplayTypesEnum.grid
                || currentProperties === DisplayTypesEnum['inline-grid']
            ) {
                this.resetFlex();
                this.updateGridComponentsStyleSheet();
            this.setGridAsChildrenInitialValues();
                this.container.appendChild(this.gridContainerAsChildren);
            } else {
                this.resetFlex();
                this.resetGrid();
            }
        }
    }

    private createFlexAsChildrenContainer() {
        this.alignSelfSelector = new GenericCssPropertyMutatorComponent(
            this.domElementStyleSheet,
            'align-self',
            'Align Self',
            new SelectorFromEnumBuilder(AlignFlexSelfEnum)
                .build(),
            EventTypeEnum.change
        );

        this.flexGrowInput = new GenericCssPropertyMutatorComponent(
            this.domElementStyleSheet,
            'flex-grow',
            'Flex Grow',
            new InputBuilder(InputTypeEnum.number)
                .setMax(1000)
                .setMin(0)
                .build(),
            EventTypeEnum.input
        ).setZeroValue(0)

        this.flexShrinkInput = new GenericCssPropertyMutatorComponent(
            this.domElementStyleSheet,
            'flex-shrink',
            'Flex Shrink',
            new InputBuilder(InputTypeEnum.number)
                .setMax(1000)
                .setMin(0)
                .build(),
            EventTypeEnum.input
        ).setZeroValue(0)


        this.flexBasisInput = new GenericCssPropertyMutatorComponent(
            this.domElementStyleSheet,
            'flex-basis',
            'Flex Basis(%)',
            new InputBuilder(InputTypeEnum.number)
                .setMax(1000)
                .setMin(0)
                .build(),
            EventTypeEnum.input,
            '%'
        ).setZeroValue(0)

        return new ContainerBuilder()
            .appendChild(new ContainerBuilder()
                .appendChild(new ContainerBuilder()
                    .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                    .appendChild(new LabelBuilder()
                        .setInnerText('Display Flex as Child')
                        .build()
                    )
                    .build()
                )
                .appendChild(this.alignSelfSelector.component)
                .appendChild(this.flexGrowInput.component)
                .appendChild(this.flexShrinkInput.component)
                .appendChild(this.flexBasisInput.component)
                .build()
            )
            .build()
    }

    private setFlexAsChildrenInitialValues() {
        this.alignSelfSelector.setValue(this.domElementStyleSheet['align-self'] || '');
        this.flexGrowInput.setValue(`${parseInt(this.domElementStyleSheet['flex-grow']) || 0}`);
        this.flexShrinkInput.setValue(`${parseInt(this.domElementStyleSheet['flex-shrink']) || 0}`);
        this.flexBasisInput.setValue(`${parseInt(this.domElementStyleSheet['flex-basis']) || 0}`);
    }

    private createGridAsChildrenContainer() {
        this.gridColumnStartInput = new GenericCssPropertyMutatorComponent(
            this.domElementStyleSheet,
            'grid-column-start',
            'Grid Column Start',
            new InputBuilder(InputTypeEnum.text).build(),
            EventTypeEnum.input
        )

        this.gridColumnEndInput = new GenericCssPropertyMutatorComponent(
            this.domElementStyleSheet,
            'grid-column-end',
            'Grid Column End',
            new InputBuilder(InputTypeEnum.text).build(),
            EventTypeEnum.input
        )

        this.gridRowStartInput = new GenericCssPropertyMutatorComponent(
            this.domElementStyleSheet,
            'grid-row-start',
            'Grid Row Start',
            new InputBuilder(InputTypeEnum.text).build(),
            EventTypeEnum.input
        )

        this.gridRowEndInput = new GenericCssPropertyMutatorComponent(
            this.domElementStyleSheet,
            'grid-row-end',
            'Grid Row End',
            new InputBuilder(InputTypeEnum.text).build(),
            EventTypeEnum.input
        )

        this.gridJustifySelf = new GenericCssPropertyMutatorComponent(
            this.domElementStyleSheet,
            'justify-self',
            'Grid Justify Self',
            new SelectorFromEnumBuilder(JustifyGridSelfEnum).build(),
            EventTypeEnum.change
        )

        this.gridAlignSelf = new GenericCssPropertyMutatorComponent(
            this.domElementStyleSheet,
            'align-self',
            'Grid Align Self',
            new SelectorFromEnumBuilder(AlignGridSelfEnum).build(),
            EventTypeEnum.change
        )

        return new ContainerBuilder()
            .appendChild(new ContainerBuilder()
                .appendChild(new ContainerBuilder()
                    .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                    .appendChild(new LabelBuilder()
                        .setInnerText('Display Grid as Child')
                        .build()
                    )
                    .build()
                )
                .appendChild(this.gridColumnStartInput.component)
                .appendChild(this.gridColumnEndInput.component)
                .appendChild(this.gridRowStartInput.component)
                .appendChild(this.gridRowEndInput.component)
                .appendChild(this.gridJustifySelf.component)
                .appendChild(this.gridAlignSelf.component)
                .build()
            )
            .build()
    }

    private setGridAsChildrenInitialValues() {
        this.gridColumnStartInput.setValue(this.domElementStyleSheet['grid-column-start'] || '');
        this.gridColumnEndInput.setValue(this.domElementStyleSheet['grid-column-end'] || '');
        this.gridRowStartInput.setValue(this.domElementStyleSheet['grid-row-start'] || '');
        this.gridRowEndInput.setValue(this.domElementStyleSheet['grid-row-end'] || '');
        this.gridJustifySelf.setValue(this.domElementStyleSheet['justify-self'] || '');
        this.gridAlignSelf.setValue(this.domElementStyleSheet['align-self'] || '');
    }

    private resetFlex() {
        try {
            this.container.removeChild(this.flexContainerAsChildren);
        } catch (err) {
            undefined;
        }
    }

    private resetGrid() {
        try {
            this.container.removeChild(this.gridContainerAsChildren);
        } catch (err) {
            undefined;
        }
    }

    public classNameUpdated(name: string) {
        this.domElementStyleSheet = CssStyleSheet.getRuleStyles(name);
        this.setComponentAccordingToSelector();
    }

    private updateFlexComponentsStyleSheet() {
        this.alignSelfSelector.updateStyleSheet(this.domElementStyleSheet);
        this.flexGrowInput.updateStyleSheet(this.domElementStyleSheet);
        this.flexShrinkInput.updateStyleSheet(this.domElementStyleSheet);
        this.flexBasisInput.updateStyleSheet(this.domElementStyleSheet);
    }

    private updateGridComponentsStyleSheet() {
        this.gridColumnStartInput.updateStyleSheet(this.domElementStyleSheet);
        this.gridColumnEndInput.updateStyleSheet(this.domElementStyleSheet);
        this.gridRowStartInput.updateStyleSheet(this.domElementStyleSheet);
        this.gridRowEndInput.updateStyleSheet(this.domElementStyleSheet);
        this.gridJustifySelf.updateStyleSheet(this.domElementStyleSheet);
        this.gridAlignSelf.updateStyleSheet(this.domElementStyleSheet);
    }
}
