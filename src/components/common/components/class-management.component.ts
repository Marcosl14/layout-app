import ArraySelectorBodyInterface from '../interfaces/selector-from-array-body.interface';

import ClassChangePublisher from '../publishers/ClassChangePublisher';
import CssStyleSheet from '../../css-stylesheet/css-stylesheet';
import RawHTMLConponent from '../../html-components/RawHTMLComponent';

import ContainerBuilder from '../models/ContainerBuilder';
import LabelBuilder from '../models/LabelBuilder';
import SelectorFromArrayBuilder from '../models/SelectorFromArrayBuilder';
import InputBuilder from '../models/InputBuilder';
import ButtonBuilder from '../models/ButtonBuilder';
import SelectorFromEnumBuilder from '../models/SelectorFromEnumBuilder';
import TextareaBuilder from '../models/TextareaBuilder';

import { StyleNameEnum } from '../enums/style-name.enum';
import { DisplayTypesEnum } from '../enums/display-types.enum';
import { FlexDirectionEnum } from '../enums/flex-direction.enum';
import { InputTypeEnum } from '../enums/input-type.enum';
import { GeneralPseudoclassEnum } from '../enums/general-pseudoclass.enum';

// TODO: ver estilos especificos para los ancor elements (links):
// eslint-disable-next-line max-len
// https://www.aprenderaprogramar.com/index.php?option=com_content&view=article&id=752:pseudoclases-css-link-visited-focus-hover-y-active-estilos-y-efectos-en-links-propiedad-outline-cu01047d&catid=75&Itemid=203

export default class ClassManagementComponent {
    private container: HTMLDivElement;
    private domElement: HTMLElement;

    private classNames: ArraySelectorBodyInterface[];
    private appendableClassNames: ArraySelectorBodyInterface[];
    private classesSelector: HTMLSelectElement;
    private initialClassName: string;

    private newClassNameInput: HTMLInputElement;
    private newPseudoclassSelector: HTMLSelectElement;
    private duplicableClassSelector: HTMLSelectElement;
    private appendClassSelector: HTMLSelectElement;
    private renameClassInput: HTMLInputElement;

    private duplicableClassNames: ArraySelectorBodyInterface[];
    private newDuplicadedClassNameInput: HTMLInputElement;
    private duplicatePseudoclassSelector: HTMLSelectElement;

    private classesSelectorContainer: HTMLDivElement;
    private appendClassContainer: HTMLDivElement;

    private rawClassTextEditor: TextareaBuilder;

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
        this.populateDuplicableClassList();

        this.buildRawClassTextEditor();
        this.populateRawClassTextEditor(this.initialClassName);

        this.addComponents();
    }

    get component() {
        return this.container;
    }

    private buildRawClassTextEditor() {
        this.rawClassTextEditor = new TextareaBuilder()
    }

    private populateRawClassTextEditor(className) {
        const values = CssStyleSheet.getRules(className).map((rule) => rule.cssText).join('\n');

        let modifiedValues = '';

        for (const char of values) {
            if (char === '{' || char === ';' || char === '}') {
                modifiedValues += `${char}\n `;
            } else {
                modifiedValues += char;
            }
        }

        this.rawClassTextEditor
            .setStyle(StyleNameEnum.height, '100px')
            .setStyle(StyleNameEnum['font-size'], '10px')
            .setStyle(StyleNameEnum['resize'], 'vertical')
            .setValue(modifiedValues)
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

    private populateDuplicableClassList() {
        const duplicableClassNames = []

        const rules = CssStyleSheet.getAllRules();

        rules.forEach((rule) => {
            const ruleName = rule['selectorText']
            let value: string;
            if (ruleName[0] === '.' || ruleName[0] === '#') {
                value = ruleName.substring(1)
            }

            if (value !== 'body') {
                duplicableClassNames.push({
                    text: ruleName,
                    value,
                })
            }
        })

        this.duplicableClassNames = duplicableClassNames;
    }

    private populateAppendableClassList() {
        const appendableClassNames = []

        const rules = CssStyleSheet.getAllRules();

        rules.forEach((rule) => {
            const ruleName = rule['selectorText']
            let value: string;
            if (ruleName[0] === '.' || ruleName[0] === '#') {
                value = ruleName.substring(1)
            }

            if (value !== 'body' && !this.domElement.classList.contains(value)) {
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
        this.duplicateClass = this.duplicateClass.bind(this);
        this.changeFullClass = this.changeFullClass.bind(this);

        // Class selector and remove class
        this.classesSelector = new SelectorFromArrayBuilder(this.classNames)
            .selectOption(this.initialClassName)
            .addEventListener('change', this.updateClassName)
            .build()

        const removeClassButton = new ButtonBuilder()
            .setInnerText('Remove')
            .addEventListener('click', this.removeClass)
            .build();

        this.classesSelectorContainer = new ContainerBuilder()
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
            .setPlaceholder('New class name')
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
            .setPlaceholder('Class name')
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

        // Duplicate class
        this.duplicableClassSelector = new SelectorFromArrayBuilder(this.duplicableClassNames)
            .selectOption(this.duplicableClassNames[0].value)
            .build()

        this.newDuplicadedClassNameInput = new InputBuilder(InputTypeEnum.text)
            .setPlaceholder('Duplicated class name')
            .build();

        const duplicateClassButton = new ButtonBuilder()
            .setInnerText('Duplicate')
            .addEventListener('click', this.duplicateClass)
            .build()

        this.duplicatePseudoclassSelector = new SelectorFromEnumBuilder(GeneralPseudoclassEnum)
            .selectOption(GeneralPseudoclassEnum.none)
            .build();

        const duplicateClassContainer = new ContainerBuilder()
            .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
            .setStyle(StyleNameEnum['flex-direction'], FlexDirectionEnum.column)
            .setStyle(StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new LabelBuilder()
                .setInnerText('Duplicate Class')
                .build()
            )
            .appendChild(
                new ContainerBuilder()
                    .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                    .setStyle(StyleNameEnum['flex-direction'], FlexDirectionEnum.row)
                    .appendChild(this.duplicableClassSelector)
                    .appendChild(this.duplicatePseudoclassSelector)
                    .build()
            )
            .appendChild(
                new ContainerBuilder()
                    .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                    .setStyle(StyleNameEnum['flex-direction'], FlexDirectionEnum.row)
                    .appendChild(this.newDuplicadedClassNameInput)
                    .appendChild(duplicateClassButton)
                    .build()
            )
            .build()

        // Append class
        if (this.appendableClassNames.length > 0) {
            this.appendClassSelector = new SelectorFromArrayBuilder(this.appendableClassNames)
                .selectOption(this.appendableClassNames[0].value)
                .build()

            const appendClassButton = new ButtonBuilder()
                .setInnerText('Append')
                .addEventListener('click', this.appendClass)
                .build()

            this.appendClassContainer = new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .setStyle(StyleNameEnum['flex-direction'], FlexDirectionEnum.column)
                .setStyle(StyleNameEnum.margin, '0px 0px 10px')
                .appendChild(new LabelBuilder()
                    .setInnerText('Append Class')
                    .build()
                )
                .appendChild(
                    new ContainerBuilder()
                        .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                        .setStyle(StyleNameEnum['flex-direction'], FlexDirectionEnum.row)
                        .appendChild(this.appendClassSelector)
                        .appendChild(appendClassButton)
                        .build()
                )
                .build()
        }

        // Edit full class
        const rawClassChangeButton = new ButtonBuilder()
            .setInnerText('Change Raw Class')
            .addEventListener('click', this.changeFullClass)
            .build()

        const rawClassEditor = new ContainerBuilder()
            .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
            .setStyle(StyleNameEnum['flex-direction'], FlexDirectionEnum.column)
            .setStyle(StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new LabelBuilder()
                .setInnerText('Raw Class Editor')
                .build()
            )
            .appendChild(
                new ContainerBuilder()
                    .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                    .setStyle(StyleNameEnum['flex-direction'], FlexDirectionEnum.column)
                    .setStyle(StyleNameEnum.width, '100%')
                    .appendChild(new ContainerBuilder()
                        .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                        .setStyle(StyleNameEnum['flex-direction'], FlexDirectionEnum.column)
                        .setStyle(StyleNameEnum.width, '100%')
                        .appendChild(this.rawClassTextEditor.build())
                        .build()
                    )
                    .appendChild(new ContainerBuilder()
                        .appendChild(rawClassChangeButton)
                        .build()
                    )
                    .build()
            )
            .build()

        // Main container
        this.container = new ContainerBuilder()
            .setStyle(StyleNameEnum.border, '1px solid #4CAF50')
            .setStyle(StyleNameEnum.padding, '3px')
            .setStyle(StyleNameEnum.margin, '0px 0px 10px')
            .appendChild(new LabelBuilder()
                .setInnerText('Classes Management')
                .build()
            )
            .appendChild(this.classesSelectorContainer)
            .appendChild(renameClassContainer)
            .appendChild(newClassContainer)
            .appendChild(duplicateClassContainer)
            .appendChildIfDefined(this.appendClassContainer)
            .appendChild(rawClassEditor)
            .build()
    }

    private updateClassName() {
        this.populateRawClassTextEditor(this.classesSelector.value);
        this.publisher.notifyClassName(this.classesSelector.value);
    }

    private createNewClassName() {
        try {
            const className: string = this.newClassNameInput.value;
            const pseudoclass = this.newPseudoclassSelector.value;
            const completeCssName: string =
                className + (pseudoclass !== '' && pseudoclass !== 'none' ? `:${pseudoclass}` : '');

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

        if (this.classesSelector.options.length === 0) {
            this.classesSelectorContainer.style.display = 'none';
        }

        if (this.domElement.classList.value === '') {
            this.domElement.removeAttribute('class');
        }
    }

    private changeClassName() {
        RawHTMLConponent.instances.forEach((instance) => {
            instance.classList.replace(this.classesSelector.value, this.renameClassInput.value);
        })

        CssStyleSheet.changeRuleName(this.classesSelector.value, this.renameClassInput.value);
        this.populateClassesList();
        this.classesSelector.remove(this.classesSelector.selectedIndex);

        this.appendNewOptionElement(this.renameClassInput.value, this.classesSelector);

        this.renameClassInput.value = '';

        this.populateRawClassTextEditor(this.classesSelector.value);
    }

    private appendClass() {

        // TODO: se muestra la clase .input0:hover para el input0, y no deberia....
        this.domElement.classList.add(this.appendClassSelector.value);

        this.appendNewOptionElement(this.appendClassSelector.value, this.classesSelector);

        this.appendClassSelector.options.remove(this.appendClassSelector.selectedIndex);

        if (this.appendClassSelector.options.length === 0) {
            this.appendClassContainer.style.display = 'none';
        }

        this.populateRawClassTextEditor(this.classesSelector.value);
    }

    private appendNewOptionElement(optionValue: string, selector: HTMLSelectElement) {
        const option = document.createElement('option');
        option.value = optionValue;
        option.text = `.${optionValue}`;

        selector.appendChild(option);
        selector.selectedIndex = selector.options.length - 1;
    }

    private duplicateClass() {
        this.domElement.classList.add(this.newDuplicadedClassNameInput.value);

        let newClassName;
        if (this.duplicatePseudoclassSelector.value !== 'none') {
            newClassName = `${this.newDuplicadedClassNameInput.value}:${this.duplicatePseudoclassSelector.value}`;
        } else {
            newClassName = `${this.newDuplicadedClassNameInput.value}`;
        }

        CssStyleSheet.duplicateRule(this.duplicableClassSelector.value, newClassName);

        this.appendNewOptionElement(newClassName, this.classesSelector);
        this.appendNewOptionElement(newClassName, this.duplicableClassSelector);

        this.newDuplicadedClassNameInput.value = '';
        this.duplicatePseudoclassSelector.value = GeneralPseudoclassEnum.none;

        this.populateRawClassTextEditor(this.classesSelector.value);
    }

    private changeFullClass() {
        // eslint-disable-next-line max-len
        // TODO: los valores de la ventana no se van actualizando a medida que se agregan cosas a esa clase, quizas necesitamos un observer, que seria un verdadero quilombassssoooooo...

        const input = this.rawClassTextEditor.getValue();
        const regex = /\.([\s\S]*?)\s*\{([\s\S]*?)\}/g;

        const result: { name: string, values: string[], raw: string }[] = [];

        let match;
        while ((match = regex.exec(input))) {
            const name = match[1].trim();
            const value = match[2].trim();

            const values: string[] = [];

            value.split(';').forEach((val) => {
                const trimedValue = val.trim();

                if(trimedValue !== ''){
                    values.push(trimedValue);
                }
            })

            result.push({ name, values, raw: match[0]});
        }

        result.forEach((rule) => {
            const ruleStyles = CssStyleSheet.getRuleStyles(rule.name);

            if(Object.keys(ruleStyles).length > 0) {
                rule.values.forEach((value) => {
                    const keyValues = value.split(':').map((val) => val.replace(';','').trim())
                    ruleStyles[keyValues[0]] = keyValues[1];
                })
            } else {
                try {
                    CssStyleSheet.insertRule(rule.raw);
                    this.domElement.classList.add(rule.name);

                    const newOption = document.createElement('option');
                    newOption.text = `.${rule.name}`;
                    newOption.value = rule.name;

                    this.classesSelector.appendChild(newOption);

                    let index = 0;
                    this.classesSelector.childNodes.forEach((child: HTMLOptionElement, i) => {
                        if (child.value === newOption.value) {
                            index = i;
                        }
                    });

                    this.classesSelector.selectedIndex = index;
                    this.updateClassName();
                } catch (error) {
                    alert(error.message);
                }
            }
        });
    }
}
