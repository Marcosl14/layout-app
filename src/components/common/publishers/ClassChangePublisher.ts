import ClassChangePublisherInterface from '../interfaces/class-change-publisher.interface';
import ClassChangeObserverInterface from '../interfaces/class-change-observer.interface';

export default class ClassChangePublisher implements ClassChangePublisherInterface {
    private observers: ClassChangeObserverInterface[] = [];

    public attach(observer: ClassChangeObserverInterface): void {
        const isExist = this.observers.includes(observer);
        if (isExist) {
            return console.log('Subject: Observer has been attached already.');
        }
        this.observers.push(observer);
    }

    public detach(observer: ClassChangeObserverInterface): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log('Subject: Nonexistent observer.');
        }
        this.observers.splice(observerIndex, 1);
    }

    public notifyClassName(name: string): void {
        for (const observer of this.observers) {
            observer.classNameUpdated(name);
        }
    }
}
