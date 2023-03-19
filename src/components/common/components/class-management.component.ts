import ArraySelectorBodyInterface from '../interfaces/selector-from-array-body.interface';

import ClassChangePublisher from '../publishers/ClassChangePublisher';

import CssStyleSheet from '../../css-stylesheet/css-stylesheet';

import ContainerBuilder from '../models/ContainerBuilder';
import LabelBuilder from '../models/LabelBuilder';
import SelectorFromArrayBuilder from '../models/SelectorFromArrayBuilder';
import InputBuilder from '../models/InputBuilder';
import ButtonBuilder from '../models/ButtonBuilder';

import { StyleNameEnum } from '../enums/style-name.enum';
import { DisplayTypesEnum } from '../enums/display-types.enum';
import { FlexDirectionEnum } from '../enums/flex-direction.enum';
import { InputTypeEnum } from '../enums/input-type.enum';


// TODO: y si agregamos un selector al lado de la creacion de una nueva clase, donde podamos elegir entre :hover, etc???.
// o lo dejamos sujeto a que manden lo que quiera... es que mandando lo que quiera, no funca, porque agrega :hover al nombre de la clase del elemento html
// deberiamos crear otro input que sea un insert decorator, o un selector, o ver que otras opciones tenemos.

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

        this.domElement.classList.forEach((c, index) => {
            classNames.push({
                text: c,
                value: c,
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
            const newClassName: string = this.newClassNameInput.value;

            try {
                if(!isNaN(parseInt(newClassName[0]))) {
                    throw new Error('Class name must start with a letter');
                }
                if(!isNaN(CssStyleSheet.getRuleIndex(newClassName))) {
                    throw new Error('Class name already exists');
                }

                this.domElement.classList.add(newClassName);
                CssStyleSheet.insertRule(`.${newClassName} {}`);

                const newOption = document.createElement('option');
                newOption.text = newClassName;
                newOption.value = newClassName;

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
