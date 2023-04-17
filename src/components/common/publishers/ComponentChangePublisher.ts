import ComponentChangeObserverInterface from '../interfaces/component-change-observer.interface';
import ComponentChangePublisherInterface from '../interfaces/component-change-publisher.interface';

export default class ComponentChangePublisher implements ComponentChangePublisherInterface {
    private observers: ComponentChangeObserverInterface[] = [];

    public attach(observer: ComponentChangeObserverInterface): void {
        const isExist = this.observers.includes(observer);
        if (isExist) {
            return console.log('Subject: Observer has been attached already.');
        }
        this.observers.push(observer);
    }

    public detach(observer: ComponentChangeObserverInterface): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log('Subject: Nonexistent observer.');
        }
        this.observers.splice(observerIndex, 1);
    }

    public notifyComponentName(name: string): void {
        for (const observer of this.observers) {
            observer.componentSelected(name);
        }
    }
}
