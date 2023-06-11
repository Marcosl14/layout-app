import DisplayComponent from '../common/components/display-as-parent.component';
import MarginOrPaddingComponent from '../common/components/margin-or-padding.component';
import StylesComponentsBuilder from '../common/models/StylesComponentsBuilder';
import RawHTMLConponent from '../html-components/RawHTMLComponent';
import BackgroundComponent from '../common/components/background.component';
import componentsIndex from './componentsIndex';
import constants from '../common/constants/constants';

import { StyleNameEnum } from '../common/enums/style-name.enum';
import CssStyleSheet from '../css-stylesheet/css-stylesheet';

import ComponentChangePublisher from '../common/publishers/ComponentChangePublisher';
import CreateNewHTMLComponentPublisher from '../common/publishers/CreateNewHTMLComponentPublisher';
import CreateNewHTMLComponentObserverInterface from '../common/interfaces/create-new-hmtl-component-observer.interface';
import prepareHTMLFileForOutput from '../common/functions/prepare-html-file';
import validateAndSave from '../common/functions/validate-and-save-loocalstorage';

export default class InitAppContainer implements CreateNewHTMLComponentObserverInterface {
    private createNewInstancePublisher: CreateNewHTMLComponentPublisher;

    private appContainer: HTMLDivElement;
    private appContainerClassName = 'body';
    private appContainerHeightInput: HTMLInputElement;
    private appContainerWidthInput: HTMLInputElement;
    protected stylesComponents: HTMLDivElement;

    protected backgroundColor: string;
    protected fatherBackgroundColor: string;

    private componentSelector: HTMLSelectElement = document.querySelector('#select-item');
    private versionLabel: HTMLLabelElement = document.querySelector('#version-label');

    private readHtmlInput: HTMLInputElement = document.querySelector('#html-file-input');
    private searchHtmlButton: HTMLButtonElement = document.querySelector('#search-html-file');

    private readCssInput: HTMLInputElement = document.querySelector('#css-file-input');
    private searchCssButton: HTMLButtonElement = document.querySelector('#search-css-file');

    private componentChangePublisher: ComponentChangePublisher;

    private printHtmlButton: HTMLButtonElement = document.querySelector('#print-html-file');

    private loadedProjectsSelector: HTMLSelectElement = document.querySelector('#proyect-names-selector');

    private projects: string[] = [];

    constructor(createNewInstancePublisher: CreateNewHTMLComponentPublisher) {
        this.createNewInstancePublisher = createNewInstancePublisher;

        this.appContainer = document.querySelector('#app-container');

        this.appContainerHeightInput = document.querySelector('#update-height');
        this.changeAppContainerHeight = this.changeAppContainerHeight.bind(this);
        this.appContainerHeightInput.value = `${parseInt(this.getCurrentHeight())}`;
        this.appContainerHeightInput.addEventListener('input', this.changeAppContainerHeight);

        this.appContainerWidthInput = document.querySelector('#update-width');
        this.changeAppContainerWidth = this.changeAppContainerWidth.bind(this);
        this.appContainerWidthInput.value = `${parseInt(this.getCurrentWidth())}`;
        this.appContainerWidthInput.addEventListener('input', this.changeAppContainerWidth);

        this.dragEnter = this.dragEnter.bind(this);
        this.dragOver = this.dragOver.bind(this);
        this.dragLeave = this.dragLeave.bind(this);
        this.drop = this.drop.bind(this);

        this.openElementConfigs = this.openElementConfigs.bind(this);
        this.changeSize = this.changeSize.bind(this);

        this.appContainer.addEventListener('dragenter', this.dragEnter);
        this.appContainer.addEventListener('dragover', this.dragOver);
        this.appContainer.addEventListener('dragleave', this.dragLeave);
        this.appContainer.addEventListener('drop', this.drop);

        this.appContainer.addEventListener('click', this.openElementConfigs);

        this.onResize(this.appContainer, this.changeSize);

        this.sendComponentName = this.sendComponentName.bind(this);
        this.componentChangePublisher = new ComponentChangePublisher();

        this.componentSelector.addEventListener('change', this.sendComponentName);

        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const packageVersion = require('../../../package.json').version;
        this.versionLabel.innerText = `Version: ${packageVersion}`;

        this.printHtmlButton.addEventListener('click', this.printHtmlFile);

        this.readHtmlFileAndInsert = this.readHtmlFileAndInsert.bind(this);
        this.readHtmlInput.addEventListener('change', this.readHtmlFileAndInsert)
        this.searchHtmlButton.addEventListener('click', () => {
            this.readHtmlInput.click();
        });

        this.readCssFileAndInsert = this.readCssFileAndInsert.bind(this);
        this.readCssInput.addEventListener('change', this.readCssFileAndInsert)
        this.searchCssButton.addEventListener('click', () => {
            this.readCssInput.click();
        });

        const createNewProyectButton: HTMLButtonElement = document.querySelector('#create-new-proyect-button');
        this.createProyect = this.createProyect.bind(this);
        createNewProyectButton.addEventListener('click', this.createProyect);

        const loadSavedProyectButton: HTMLButtonElement = document.querySelector('#load-saved-project-button');
        this.loadProyect = this.loadProyect.bind(this);
        loadSavedProyectButton.addEventListener('click', this.loadProyect);

        const removeSavedProyectButton: HTMLButtonElement = document.querySelector('#remove-saved-project-button');
        this.removeProyect = this.removeProyect.bind(this);
        removeSavedProyectButton.addEventListener('click', this.removeProyect);

        this.populateProyects();
    }

    private dragEnter(event: DragEvent) {
        event.preventDefault();
        this.backgroundColor = CssStyleSheet.getRuleStyles(this.appContainerClassName)['background-color'];
        this.appContainer.style.backgroundColor = constants.INVERTED_BACKGROUND_COLOR;
    }

    private dragOver(event: DragEvent) {
        event.preventDefault();
    }

    private dragLeave() {
        this.appContainer.style.backgroundColor = '';
        this.appContainer.attributes.removeNamedItem('style');
    }

    private drop(event: DragEvent) {
        this.appContainer.style.backgroundColor = '';

        const targetElement = event.target as HTMLElement;

        if (!componentsIndex(targetElement.nodeName).isContainer) {
            return;
        }

        if (targetElement.children.length === 0 && targetElement.innerText !== '') {
            alert('InnerText must be empty')
            return;
        }

        const elementType = event.dataTransfer.getData('text/plain');

        const newDomElement: RawHTMLConponent | undefined =
            componentsIndex(elementType).create(this.createNewInstancePublisher);

        const elementExists = newDomElement ? false : true;

        if (elementExists) {
            const draggable = document.getElementById(elementType);
            targetElement.appendChild(draggable);
            return;
        } else {
            this.componentChangePublisher.attach(newDomElement);
        }

        targetElement.appendChild(newDomElement.domElement);
    }

    private openElementConfigs(event: MouseEvent) {
        event.stopPropagation();

        this.stylesComponents = new StylesComponentsBuilder()
            .appendChild(new MarginOrPaddingComponent(
                this.appContainer,
                StyleNameEnum.margin).component)
            .appendChild(new MarginOrPaddingComponent(
                this.appContainer,
                StyleNameEnum.padding).component)
            .appendChild(new BackgroundComponent(this.appContainer).component)
            .appendChild(new DisplayComponent(this.appContainer).component)
            .build();
    }

    private onResize(dom_elem, callback) {
        const resizeObserver = new ResizeObserver(() => callback());
        resizeObserver.observe(dom_elem);
    }

    private changeSize() {
        const height = this.appContainer.style['height'];
        const width = this.appContainer.style['width'];

        if (height) {
            this.appContainerHeightInput.value = `${parseInt(height)}`;
            CssStyleSheet.getRuleStyles(this.appContainerClassName)['height'] = height;
            this.appContainer.style['height'] = '';
        }
        if (width) {
            this.appContainerWidthInput.value = `${parseInt(width)}`;
            CssStyleSheet.getRuleStyles(this.appContainerClassName)['width'] = width;
            this.appContainer.style['width'] = '';
        }
    }

    private changeAppContainerHeight() {
        CssStyleSheet.getRuleStyles(this.appContainerClassName)['height'] = `${this.appContainerHeightInput.value}px`
    }

    private changeAppContainerWidth() {
        CssStyleSheet.getRuleStyles(this.appContainerClassName)['width'] = `${this.appContainerWidthInput.value}px`
    }

    private getCurrentHeight() {
        return CssStyleSheet.getRuleStyles(this.appContainerClassName)['height']
    }

    private getCurrentWidth() {
        return CssStyleSheet.getRuleStyles(this.appContainerClassName)['width']
    }

    private printHtmlFile() {
        console.log(prepareHTMLFileForOutput());
    }

    private sendComponentName() {
        this.componentChangePublisher.notifyComponentName(this.componentSelector.value);
    }

    public createNewHTMLComponent(parentNode, elementType, quantity = 1) {
        for (let i = 0; i < quantity; i++) {
            const newDomElement = componentsIndex(elementType).create(this.createNewInstancePublisher, parentNode);

            this.componentChangePublisher.attach(newDomElement);
            parentNode.appendChild(newDomElement.domElement);
        }
    }

    public duplicateHTMLComponent(parentElement: HTMLElement, childToDuplicate: HTMLElement): HTMLElement {
        const newRawDomElement =
            componentsIndex(childToDuplicate.nodeName)
                .create(this.createNewInstancePublisher, parentElement);

        this.componentChangePublisher.attach(newRawDomElement);

        const newDomElement = newRawDomElement.domElement;

        parentElement.appendChild(newDomElement);

        while (newDomElement.classList.length > 0) {
            newDomElement.classList.remove(newDomElement.classList.item(0));
        }

        for (let index = 0; index < childToDuplicate.classList.length; index++) {
            newDomElement.classList.add(childToDuplicate.classList.item(index))
        }

        return newDomElement;
    }

    public duplicateHTMLComponentWithChildren(parentElement: HTMLElement, childToDuplicate: HTMLElement): HTMLElement {
        const newDomElement = this.duplicateHTMLComponent(parentElement, childToDuplicate);

        Array.from(childToDuplicate.children).forEach(child => {
            return this.duplicateHTMLComponentWithChildren(newDomElement, child as HTMLElement);
        });

        return newDomElement;
    }

    private readHtmlFileAndInsert() {
        const file = this.readHtmlInput.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            const content = e.target.result;
            this.insertHtmlElementsInAppContainer(content);
        };

        reader.readAsText(file);
    }

    private insertHtmlElementsInAppContainer (content) {
        const bodyContent = this.getBodyContent(content);

        const renderedElements = this.createElementsFromContent(bodyContent);

        renderedElements.forEach(element => {
            this.appContainer.appendChild(element);
        });
    }

    private getBodyContent(htmlContent) {
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(htmlContent, 'text/html');
        const bodyContent = htmlDoc.body;
        return bodyContent;
    }

    private createElementsFromContent(content) {
        const elements = [];

        for (let i = 0; i < content.childNodes.length; i++) {
            const node = content.childNodes[i];

            const elementType = node.nodeName;

            try {
                const element = componentsIndex(elementType).create(this.createNewInstancePublisher).domElement;

                if (element) {
                    const children = this.createElementsFromContent(node);

                    children.forEach(child => {
                        element.appendChild(child);
                    });

                    if (node.id) {
                        element.id = node.id;
                    }

                    const classList = node.classList;
                    if (classList.length > 0) {
                        classList.forEach(className => {
                            element.classList.add(className);
                        });
                    }

                    if (node.innerText !== '' && node.children.length === 0) {
                        element.innerText = node.innerText.trim();
                    }

                    elements.push(element);
                }
            } catch (err) {
                console.log(`Element Type Not Found: ${elementType}`)
            }
        }

        return elements;
    }

    private readCssFileAndInsert() {
        const cssFile = this.readCssInput.files[0];

        const reader = new FileReader();

        reader.onload = (e) => {
            const cssContent = e.target.result;
            this.parseCSS(cssContent);
        };

        reader.readAsText(cssFile);
    }

    private parseCSS(cssContent) {
        const regex = /([^{}]+)\{([^{}]+)}/g;
        let match;

        while ((match = regex.exec(cssContent)) !== null) {
            const ruleText = match[0].trim();
            const ruleId = match[1].replace('.', '').replace('#', '').trim();
            const existsRule = CssStyleSheet.getRule(ruleId) as CSSStyleRule;

            if (existsRule) {
                if (existsRule.selectorText === '.body') {
                    return;
                }
                CssStyleSheet.editRuleAtributes(ruleId, this.segregateteAtributes(match[2]));
            } else {
                CssStyleSheet.insertRule(ruleText);
            }
        }
    }

    private segregateteAtributes(ruleText: string): { key: string, val: string }[] {
        return ruleText
            .split(';')
            .map((att) => {
                const [key, val] = att.trim().split(':');
                return { key, val };
            })
            .filter((att) => att.key !== '' && att.key !== undefined);
    }

    private populateProyects() {
        const projectsArray = JSON.parse(localStorage.getItem('projects-layout-app'));

        if(projectsArray && projectsArray.length > 0){
            this.projects = projectsArray;

            const optionElement = document.createElement('option');
            optionElement.text = '';
            optionElement.value = '';
            this.loadedProjectsSelector.appendChild(optionElement);

            this.projects.forEach((proyectName) => {
                if(proyectName){
                    const optionElement = document.createElement('option');
                    optionElement.text = proyectName.replace('-layout-app', '');
                    optionElement.value = proyectName;
                    this.loadedProjectsSelector.appendChild(optionElement);
                }
            })
        }
    }

    private createProyect() {
        const createNewProyectInput: HTMLInputElement = document.querySelector('#create-new-proyect-input');
        const projectName = createNewProyectInput.value;
        const completeProyectName = `${projectName}-layout-app`;
        const { exists } = validateAndSave(completeProyectName);

        if(!exists) {
            this.projects.push(completeProyectName);
            localStorage.setItem('projects-layout-app', JSON.stringify(this.projects));

            const optionElement = document.createElement('option');
            optionElement.text = projectName;
            optionElement.value = completeProyectName;
            this.loadedProjectsSelector.appendChild(optionElement);

            createNewProyectInput.value = '';
        }
    }

    private loadProyect() {
        const proyectInfo = JSON.parse(localStorage.getItem(this.loadedProjectsSelector.value));

        localStorage.setItem('loaded-project-layout-app', this.loadedProjectsSelector.value);

        this.insertHtmlElementsInAppContainer(proyectInfo.html);
        this.parseCSS(proyectInfo.css)
    }

    private removeProyect() {
        if (confirm('Are you sure to remove this proyect')) {
            const index = this.projects.findIndex((projectName) => {
                return projectName === this.loadedProjectsSelector.value
            });
            this.projects.splice(index, 1);
            localStorage.setItem('projects-layout-app', JSON.stringify(this.projects));

            localStorage.removeItem(this.loadedProjectsSelector.value);

            this.loadedProjectsSelector.childNodes.forEach((option: HTMLOptionElement) => {
                if(option.value === this.loadedProjectsSelector.value) {
                    this.loadedProjectsSelector.removeChild(option);
                }
            });
        }
    }
}
