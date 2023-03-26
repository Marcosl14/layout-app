import ArraySelectorBodyInterface from '../interfaces/selector-from-array-body.interface';

import ClassChangePublisher from '../publishers/ClassChangePublisher';

import CssStyleSheet from '../../css-stylesheet/css-stylesheet';

import ContainerBuilder from '../models/ContainerBuilder';
import LabelBuilder from '../models/LabelBuilder';
import SelectorFromArrayBuilder from '../models/SelectorFromArrayBuilder';
import InputBuilder from '../models/InputBuilder';
import ButtonBuilder from '../models/ButtonBuilder';
import SelectorFromEnumBuilder from '../models/SelectorFromEnumBuilder';

import { StyleNameEnum } from '../enums/style-name.enum';
import { DisplayTypesEnum } from '../enums/display-types.enum';
import { FlexDirectionEnum } from '../enums/flex-direction.enum';
import { InputTypeEnum } from '../enums/input-type.enum';
import { GeneralPseudoclassEnum } from '../enums/general-pseudoclass.enum';


// TODO: ver estilos especificos para los ancor elements (links):
// https://www.aprenderaprogramar.com/index.php?option=com_content&view=article&id=752:pseudoclases-css-link-visited-focus-hover-y-active-estilos-y-efectos-en-links-propiedad-outline-cu01047d&catid=75&Itemid=203

// TODO: falta el append class. Es decir, tomar la clase de otro componente...
// TODO: falta el delete class from component. Es decir, eliminar una clase del componente seleccionado...
// TODO: falta el delete class definetly. Es decir, eliminar una clase del CSS. Esto deberia eliminarla de todos los componentes que la utilizan...
// TODO: falta el duplicate class from component. Es decir, crear una nueva clase tomando como template una ya existente...


export default class ClassManagementComponent {
    private container: HTMLDivElement;
    private domElement: HTMLElement;

    private classNames: ArraySelectorBodyInterface[];
    private classesSelector: HTMLSelectElement;
    private initialClassName: string;

    private newClassNameInput: HTMLInputElement;
    private newPseudoclassSelector: HTMLSelectElement;

    private publisher: ClassChangePublisher;

    constructor(
        domElement: HTMLElement,
        initialClassName: string,
        publisher: ClassChangePublisher
    ) {
        this.publisher = publisher;
        this.initialClassName = initialClassName;
        this.domElement = domElement;
        this.populateClassesList();
        this.addComponents();
    }

    get component() {
        return this.container;
    }

    private populateClassesList() {
        const classNames = []

        this.domElement.classList.forEach((classElementName) => {
            const rules = CssStyleSheet.getRules(classElementName);

            rules.forEach((rule) => {
                const ruleName = rule['selectorText']
                let value: string;
                if(ruleName[0] === '.' || ruleName[0] === '#') {
                    value = ruleName.substring(1)
                }

                classNames.push({
                    text: ruleName,
                    value,
                })
            })
        });

        this.classNames = classNames;
    }

    private addComponents() {
        this.updateClassName = this.updateClassName.bind(this);
        this.createNewClassName = this.createNewClassName.bind(this);

        this.classesSelector = new SelectorFromArrayBuilder(this.classNames)
            .selectOption(this.initialClassName)
            .addEventListener('change', this.updateClassName)
            .build()

        this.newClassNameInput = new InputBuilder(InputTypeEnum.text)
            .addEventListener('keyup', this.createNewClassName)
            .build()

        this.newPseudoclassSelector = new SelectorFromEnumBuilder(GeneralPseudoclassEnum)
            .selectOption(GeneralPseudoclassEnum.none)
            .build()

        const selectedClassContainer = new ContainerBuilder()
            .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
            .setStyle(StyleNameEnum['flex-direction'], FlexDirectionEnum.column)
            .setStyle(StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new LabelBuilder()
                .setInnerText('Selected Class')
                .build()
            )
            .appendChild(this.classesSelector)
            .build()

        const newClassContainer = new ContainerBuilder()
            .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
            .setStyle(StyleNameEnum['flex-direction'], FlexDirectionEnum.column)
            .setStyle(StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new LabelBuilder()
                .setInnerText('Create New Class Name')
                .build()
            )
            .appendChild(new ContainerBuilder()
                .appendChild(this.newClassNameInput)
                .appendChild(this.newPseudoclassSelector)
                .appendChild(new ButtonBuilder()
                    .setInnerText('Create')
                    .addEventListener('click', this.createNewClassName)
                    .build()
                )
                .build()
            )
            .build()

        this.container = new ContainerBuilder()
            .setStyle(StyleNameEnum.border, '1px solid #4CAF50')
            .setStyle(StyleNameEnum.padding, '3px')
            .setStyle(StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new LabelBuilder()
                .setInnerText('Classes Management')
                .build()
            )
            .appendChild(selectedClassContainer)
            .appendChild(newClassContainer)
            .build()
    }

    private updateClassName() {
        this.publisher.notifyClassName(this.classesSelector.value);
    }

    private createNewClassName(event: any) {
        if ( event.type === 'click' || event.key === 'Enter' || event.keyCode === 13 ) {
            const className: string = this.newClassNameInput.value;
            const pseudoclass = this.newPseudoclassSelector.value;
            const completeCssName: string = this.newClassNameInput.value + (pseudoclass !== '' ? `:${pseudoclass}` : '');

            try {
                if(!isNaN(parseInt(className[0]))) {
                    throw new Error('Class name must start with a letter');
                }

                const foundBaseRule = CssStyleSheet.getRuleIndex(className);
                const foundRuleWithPseudoclass = CssStyleSheet.getRuleIndex(completeCssName);

                let classNameNotFoundForThisElement = true;
                this.domElement.classList.forEach((cn) => {
                    if(cn === className) {
                        classNameNotFoundForThisElement = false;
                    }
                })

                if(foundBaseRule >= 0) {
                    if(classNameNotFoundForThisElement){
                        throw new Error('Class name already exists for another element');
                    } else {
                        if(foundRuleWithPseudoclass >= 0) {
                            throw new Error('Class name already exists');
                        }
                    }
                }

                this.domElement.classList.add(className);
                CssStyleSheet.insertRule(`.${completeCssName} {}`);

                const newOption = document.createElement('option');
                newOption.text = `.${completeCssName}`;
                newOption.value = completeCssName;

                this.classesSelector.appendChild(newOption);

                let index = 0;
                this.classesSelector.childNodes.forEach((child: HTMLOptionElement, i) => {
                    if(child.value === newOption.value){
                        index = i;
                    }
                });

                this.newClassNameInput.value = '';
                this.classesSelector.selectedIndex = index;
                this.updateClassName();
            } catch (error) {
                alert(error.message);
            }
        }
    }
}
