import CssStyleSheet from '../../css-stylesheet/css-stylesheet';
import ClassChangeObserverInterface from '../interfaces/class-change-observer.interface';

import ButtonBuilder from '../models/ButtonBuilder';
import ContainerBuilder from '../models/ContainerBuilder';
import InputBuilder from '../models/InputBuilder';
import LabelBuilder from '../models/LabelBuilder';

import { InputTypeEnum } from '../enums/input-type.enum';
import { StyleNameEnum } from '../enums/style-name.enum';
import { DisplayTypesEnum } from '../enums/display-types.enum';

export default class UrlDefinitionComponent implements ClassChangeObserverInterface {
    private domElement: HTMLElement;
    private container: HTMLDivElement;
    private domElementStyleSheet: CSSStyleDeclaration | object | object;

    private urlInput: HTMLInputElement;

    constructor(domElement: HTMLElement) {
        this.domElement = domElement;
        this.domElementStyleSheet = CssStyleSheet.getRuleStyles(this.domElement.classList[0]);
        this.addComponents();
    }

    get currentUrl() {
        return this.domElement['src'];
    }

    setNewUrl(url?: string) {
        this.domElement['src'] = url;
    }

    get component() {
        return this.container;
    }

    private addComponents() {
        this.updateUrl = this.updateUrl.bind(this);

        this.buildAllComponents();
        this.setInitialValuesAccordingToClass();

        const acceptButton = new ButtonBuilder()
            .addEventListener('click', this.updateUrl)
            .setInnerText('Assign')
            .build()

        const urlComponentsContainer = new ContainerBuilder()
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .appendChild(new LabelBuilder()
                    .setInnerText('Assign Url')
                    .build()
                )
                .build()
            )
            .appendChild(new ContainerBuilder()
                .setStyle(StyleNameEnum.display, DisplayTypesEnum.flex)
                .appendChild(this.urlInput)
                .appendChild(acceptButton)
                .build()
            )
            .build()

        this.container = new ContainerBuilder()
            .appendChild(new LabelBuilder()
                .setInnerText('Image Properties')
                .build()
            )
            .appendChild(urlComponentsContainer)
            .build()
    }

    private buildAllComponents() {
        this.buildUrlComponents();
    }

    private buildUrlComponents() {
        this.urlInput = new InputBuilder(InputTypeEnum.url).build();
    }

    private setInitialValuesAccordingToClass() {
        this.setUrlInitialValuesAccordingToClass();
    }

    private setUrlInitialValuesAccordingToClass() {
        this.urlInput.value = this.currentUrl;
    }

    private updateUrl() {
        if(this.urlInput.value === ''){
            this.setNewUrl();
            return;
        }
        this.setNewUrl(this.urlInput.value);
    }

    public classNameUpdated(name: string) {
        this.domElementStyleSheet = CssStyleSheet.getRuleStyles(name);
        this.setInitialValuesAccordingToClass();
    }
}
