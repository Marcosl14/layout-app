export default interface CreateNewHTMLComponentObserverInterface {
    createNewHTMLComponent(parentElement: HTMLElement, childElementNodeName: string, quantity?: number): void;
    duplicateHTMLComponentWithChildren(parentElement: HTMLElement, childToDuplicate: HTMLElement): void;
    duplicateHTMLComponent(parentElement: HTMLElement, childToDuplicate: HTMLElement): void;
}
