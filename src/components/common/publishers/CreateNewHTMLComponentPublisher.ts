import CreateNewHTMLComponentPublisherInterface from '../interfaces/create-new-hmtl-component-publisher.interface';
import CreateNewHTMLComponentObserverInterface from '../interfaces/create-new-hmtl-component-observer.interface';

export default class CreateNewHTMLComponentPublisher implements CreateNewHTMLComponentPublisherInterface {
    private observers: CreateNewHTMLComponentObserverInterface[] = [];

    public attach(observer: CreateNewHTMLComponentObserverInterface): void {
        const isExist = this.observers.includes(observer);
        if (isExist) {
            return console.log('Subject: Observer has been attached already.');
        }
        this.observers.push(observer);
    }

    public detach(observer: CreateNewHTMLComponentObserverInterface): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log('Subject: Nonexistent observer.');
        }
        this.observers.splice(observerIndex, 1);
    }

    public createNewHTMLComponent(
        parentElement: HTMLElement,
        childElementNodeName: 'LI' | 'THEAD' | 'TBODY' | 'TFOOT' | 'TR' | 'TD' | 'TH',
        quantity?: number,
    ): void {
        for (const observer of this.observers) {
            observer.createNewHTMLComponent(parentElement, childElementNodeName, quantity);
        }
    }

    public duplicateHTMLComponentWithChildren(
        parentElement: HTMLElement,
        childToDuplicate: HTMLElement
    ): void {
        for (const observer of this.observers) {
            observer.duplicateHTMLComponentWithChildren(parentElement, childToDuplicate);
        }
    }

    public duplicateHTMLComponent(
        parentElement: HTMLElement,
        childToDuplicate: HTMLElement
    ): void {
        for (const observer of this.observers) {
            observer.duplicateHTMLComponent(parentElement, childToDuplicate);
        }
    }
}
