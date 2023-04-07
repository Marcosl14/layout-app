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
// eslint-disable-next-line max-len
// https://www.aprenderaprogramar.com/index.php?option=com_content&view=article&id=752:pseudoclases-css-link-visited-focus-hover-y-active-estilos-y-efectos-en-links-propiedad-outline-cu01047d&catid=75&Itemid=203

// TODO: falta el delete class definetly. Es decir, eliminar una clase del CSS.
// Esto deberia eliminarla de todos los componentes que la utilizan...

// TODO: falta el duplicate class from component.
// Es decir, crear una nueva clase tomando como template una ya existente...

// TODO: falta el rename class, y esa clase deberia renombrarse en todos los hijos que la tengan incluida...

// TODO: mejorar estilos de los botones, input, etc...

export default class ClassManagementComponent {
    private container: HTMLDivElement;
    private domElement: HTMLElement;

    private classNames: ArraySelectorBodyInterface[];
    private appendableClassNames: ArraySelectorBodyInterface[];
    private classesSelector: HTMLSelectElement;
    private initialClassName: string;

    private newClassNameInput: HTMLInputElement;
    private newPseudoclassSelector: HTMLSelectElement;
    private appendClassSelector: HTMLSelectElement;
    private renameClassInput: HTMLInputElement;

    private publisher: ClassChangePublisher;

    constructor(
        domElement: HTMLElement,
        publisher: ClassChangePublisher
    ) {
        this.publisher = publisher;
        this.domElement = domElement;
        this.initialClassName = this.domElement.classList[0];
        this.populateClassesList();
        this.populateAppendableClassList();
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
                if (ruleName[0] === '.' || ruleName[0] === '#') {
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

    private populateAppendableClassList() {
        const appendableClassNames = []

        const rules = CssStyleSheet.getAllRules();

        // TODO: adjuntamos las clases que tienen el this.domElement.name o solo las clases creadas a mano???

        rules.forEach((rule) => {
            const ruleName = rule['selectorText']
            let value: string;
            if (ruleName[0] === '.' || ruleName[0] === '#') {
                value = ruleName.substring(1)
            }

            if (value !== 'app-container' && !this.domElement.classList.contains(value)) {
                appendableClassNames.push({
                    text: ruleName,
                    value,
                })
            }
        })

        this.appendableClassNames = appendableClassNames;
    }

    private addComponents() {
        this.updateClassName = this.updateClassName.bind(this);
        this.createNewClassName = this.createNewClassName.bind(this);
        this.removeClass = this.removeClass.bind(this);
        this.changeClassName = this.changeClassName.bind(this);
        this.appendClass = this.appendClass.bind(this);

        // Class selector and remove class
        this.classesSelector = new SelectorFromArrayBuilder(this.classNames)
            .selectOption(this.initialClassName)
            .addEventListener('change', this.updateClassName)
            .build()

        const removeClassButton = new ButtonBuilder()
            .setInnerText('Remove Class')
            .addEventListener('click', this.removeClass)
            .build();

        const selectedClassContainer = new ContainerBuilder()
            .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
            .setStyle(StyleNameEnum['flex-direction'], FlexDirectionEnum.column)
            .setStyle(StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new ContainerBuilder()
                .appendChild(this.classesSelector)
                .appendChild(removeClassButton)
                .build()
            )
            .build();

        // Rename Class
        this.renameClassInput = new InputBuilder(InputTypeEnum.text)
            .build();

        const renameClassButton = new ButtonBuilder()
            .setInnerText('Change')
            .addEventListener('click', this.changeClassName)
            .build();

        const renameClassContainer = new ContainerBuilder()
            .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
            .setStyle(StyleNameEnum['flex-direction'], FlexDirectionEnum.column)
            .setStyle(StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new LabelBuilder()
                .setInnerText('Change Class Name')
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .setStyle(StyleNameEnum['flex-direction'], FlexDirectionEnum.row)
                .appendChild(this.renameClassInput)
                .appendChild(renameClassButton)
                .build()
            )
            .build();

        // Create Class
        this.newClassNameInput = new InputBuilder(InputTypeEnum.text)
            .build();

        this.newPseudoclassSelector = new SelectorFromEnumBuilder(GeneralPseudoclassEnum)
            .selectOption(GeneralPseudoclassEnum.none)
            .build();

        const createClassButton = new ButtonBuilder()
            .setInnerText('Create')
            .addEventListener('click', this.createNewClassName)
            .build();

        const newClassContainer = new ContainerBuilder()
            .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
            .setStyle(StyleNameEnum['flex-direction'], FlexDirectionEnum.column)
            .setStyle(StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new LabelBuilder()
                .setInnerText('Create New Class')
                .build()
            )
            .appendChild(new ContainerBuilder()
                .appendChild(this.newClassNameInput)
                .appendChild(this.newPseudoclassSelector)
                .appendChild(createClassButton)
                .build()
            )
            .build();

        // Append class
        let appendClassContainer: HTMLDivElement;
        if (this.appendableClassNames.length > 0) {
            this.appendClassSelector = new SelectorFromArrayBuilder(this.appendableClassNames)
                .selectOption(this.appendableClassNames[0].value)
                .build()

            const appendClassButton = new ButtonBuilder()
                .setInnerText('Append Class')
                .addEventListener('click', this.appendClass)
                .build()

            appendClassContainer = new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .setStyle(StyleNameEnum['flex-direction'], FlexDirectionEnum.column)
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(new LabelBuilder()
                    .setInnerText('Append Class Name')
                    .build()
                )
                .appendChild(new ContainerBuilder()
                    .appendChild(this.appendClassSelector)
                    .build()
                )
                .appendChild(new ContainerBuilder()
                    .appendChild(appendClassButton)
                    .build()
                )
                .build()
        }

        // Main container
        this.container = new ContainerBuilder()
            .setStyle(StyleNameEnum.border, '1px solid #4CAF50')
            .setStyle(StyleNameEnum.padding, '3px')
            .setStyle(StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new LabelBuilder()
                .setInnerText('Classes Management')
                .build()
            )
            .appendChild(selectedClassContainer)
            .appendChild(renameClassContainer)
            .appendChild(newClassContainer)
            .appendChildIfDefined(appendClassContainer)
            .build()
    }

    private updateClassName() {
        this.publisher.notifyClassName(this.classesSelector.value);
    }

    private createNewClassName() {
        const className: string = this.newClassNameInput.value;
        const pseudoclass = this.newPseudoclassSelector.value;
        const completeCssName: string = this.newClassNameInput.value + (pseudoclass !== '' ? `:${pseudoclass}` : '');

        try {
            if (className === '') {
                throw new Error('Class name can not be an empty string');
            }

            if (!isNaN(parseInt(className[0]))) {
                throw new Error('Class name must start with a letter');
            }

            const foundBaseRule = CssStyleSheet.getRuleIndex(className);
            const foundRuleWithPseudoclass = CssStyleSheet.getRuleIndex(completeCssName);

            let classNameNotFoundForThisElement = true;
            this.domElement.classList.forEach((cn) => {
                if (cn === className) {
                    classNameNotFoundForThisElement = false;
                }
            })

            if (foundBaseRule >= 0) {
                if (classNameNotFoundForThisElement) {
                    throw new Error('Class name already exists for another element');
                } else {
                    if (foundRuleWithPseudoclass >= 0) {
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
                if (child.value === newOption.value) {
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

    private removeClass() {
        this.domElement.classList.remove(`${this.classesSelector.value}`);
        CssStyleSheet.removeRule(`${this.classesSelector.value}`);
        this.classesSelector.options.remove(this.classesSelector.selectedIndex);

        if (this.domElement.classList.value === '') {
            this.domElement.removeAttribute('class');
        }
    }

    private changeClassName() {
        this.domElement.classList.replace(this.classesSelector.value, this.renameClassInput.value);
        CssStyleSheet.changeRuleName(this.classesSelector.value, this.renameClassInput.value);
        this.populateClassesList();
        this.classesSelector.remove(this.classesSelector.selectedIndex);

        const option = document.createElement('option');
        option.value = this.renameClassInput.value;
        option.text = `.${this.renameClassInput.value}`;

        this.classesSelector.appendChild(option);

        this.classesSelector.selectedIndex = this.classesSelector.options.length - 1;

        this.renameClassInput.value = '';
    }

    private appendClass() {
        this.domElement.classList.add(this.appendClassSelector.value);
        this.appendClassSelector.options.remove(this.appendClassSelector.selectedIndex);

        // TODO: si el selector queda vacio, entonces hay que eliminarlo...
    }
}
