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
    private domElementStyleSheet: CSSStyleDeclaration;

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

    constructor(domElement: HTMLElement, initialClassName: string) {
        this.domElement = domElement;
        this.domElementStyleSheet = CssStyleSheet.getRuleStyles(initialClassName);
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
            // TODO: esto deberia buscar en todas las clases del elemento padre, y ver cual es el estilo que realmente tiene aplicado...

            if (currentProperties === DisplayTypesEnum.flex || currentProperties === DisplayTypesEnum['inline-flex']) {
                    this.flexContainerAsChildren = this.createFlexAsChildrenContainer();
                    this.setFlexAsChildrenInitialValues();
                    this.container.appendChild(this.flexContainerAsChildren);
                    this.resetGrid();
            } else if (currentProperties === DisplayTypesEnum.grid || currentProperties === DisplayTypesEnum['inline-grid']) {
                    this.gridContainerAsChildren = this.createGridAsChildrenContainer();
                    this.setGridAsChildrenInitialValues();
                    this.container.appendChild(this.gridContainerAsChildren);
                    this.resetFlex();
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
        );

        this.flexShrinkInput = new GenericCssPropertyMutatorComponent(
            this.domElementStyleSheet,
            'flex-shrink',
            'Flex Shrink',
            new InputBuilder(InputTypeEnum.number)
                .setMax(1000)
                .setMin(0)
                .build(),
            EventTypeEnum.input
        );

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
                .setStyle(StyleNameEnum.border, '1px solid #4CAF50')
                .setStyle(StyleNameEnum.padding, '3px')
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(new ContainerBuilder()
                    .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                    .setStyle(StyleNameEnum.margin, '0px 0px 10px')
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

        // TODO: este if deberia ser unico, porque es la repeticion del de arriba.
        if (this.domElement.id !== 'app-container') {
            const currentProperties = CssStyleSheet.getRuleStyles(this.domElement.parentElement.id)['display']

            if (currentProperties === DisplayTypesEnum.flex || currentProperties === DisplayTypesEnum['inline-flex']) {
                this.alignSelfSelector.updateStyleSheet(this.domElementStyleSheet);
                this.flexGrowInput.updateStyleSheet(this.domElementStyleSheet);
                this.flexShrinkInput.updateStyleSheet(this.domElementStyleSheet);
                this.flexBasisInput.updateStyleSheet(this.domElementStyleSheet);

                this.setFlexAsChildrenInitialValues();
                this.resetGrid();
            } else if (currentProperties === DisplayTypesEnum.grid || currentProperties === DisplayTypesEnum['inline-grid']) {
                this.gridColumnStartInput.updateStyleSheet(this.domElementStyleSheet);
                this.gridColumnEndInput.updateStyleSheet(this.domElementStyleSheet);
                this.gridRowStartInput.updateStyleSheet(this.domElementStyleSheet);
                this.gridRowEndInput.updateStyleSheet(this.domElementStyleSheet);
                this.gridJustifySelf.updateStyleSheet(this.domElementStyleSheet);
                this.gridAlignSelf.updateStyleSheet(this.domElementStyleSheet);

                this.setGridAsChildrenInitialValues();
                this.resetFlex();
            } else {
                this.resetFlex();
                this.resetGrid()
            }
        }
        // TODO: si flex grow === 0 => eliminar prop
        // TODO: si flex shrink === 0 => eliminar prop
        // TODO: si flex basis === 0 => eliminar prop => ver porque no se muestra en % y si en px...
    }
}
