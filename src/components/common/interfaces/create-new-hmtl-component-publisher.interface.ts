import CreateNewHTMLComponentObserverInterface from './create-new-hmtl-component-observer.interface';

export default interface CreateNewHTMLComponentPublisherInterface {
    attach(observer: CreateNewHTMLComponentObserverInterface): void;
    detach(observer: CreateNewHTMLComponentObserverInterface): void;
    createNewHTMLComponent(parentElement: HTMLElement, childElementNodeName: string): void;
    duplicateHTMLComponentWithChildren(parentElement: HTMLElement, childToDuplicate: HTMLElement);
    duplicateHTMLComponent(parentElement: HTMLElement, childToDuplicate: HTMLElement);
}
