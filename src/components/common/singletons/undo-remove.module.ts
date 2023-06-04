export default class UndoRemoveModuleSingleton {
    private static instance: UndoRemoveModuleSingleton;
    private changesHistory: RemoveModuleInterface[] = [];
    private undoRemoveItemContainer: HTMLDivElement = document.querySelector('#undo-remove-item-container');
    private undoRemoveItemButton: HTMLButtonElement = document.querySelector('#undo-remove-item-button');
    private itemsSelector: HTMLSelectElement = document.querySelector('#select-item');

    private constructor() {
        this.getLastChange = this.getLastChange.bind(this);
        this.undoRemoveItemButton.addEventListener('click', this.getLastChange);
    }

    public static getInstance(): UndoRemoveModuleSingleton {
        if (!this.instance) {

            this.instance = new UndoRemoveModuleSingleton();
        }

        return this.instance;
    }

    public addChange(change: RemoveModuleInterface) {
        this.changesHistory.push(change);

        if(this.changesHistory.length > 0) {
            this.undoRemoveItemContainer.style.display = 'flex';
        }
    }

    public getLastChange() {
        const elements = this.changesHistory.pop();
        elements.parentElement.appendChild(elements.childElement);

        if(this.changesHistory.length === 0) {
            this.undoRemoveItemContainer.style.display = 'none';
        }

        const optionElement: HTMLOptionElement = document.createElement('option');
        optionElement.value = elements.childElement.id;
        optionElement.text = elements.childElement.id;
        this.itemsSelector.appendChild(optionElement);
    }
}

interface RemoveModuleInterface {parentElement: ParentNode, childElement: HTMLElement}
