import CreateNewHTMLComponentObserverInterface from './create-new-hmtl-component-observer.interface';

export default interface CreateNewHTMLComponentPublisherInterface {
    attach(observer: CreateNewHTMLComponentObserverInterface): void;
    detach(observer: CreateNewHTMLComponentObserverInterface): void;
    createNewHTMLComponent(domElement: HTMLElement, elementType: string): void;
}
