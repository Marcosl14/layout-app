import ClassChangeObserverInterface from './class-change-observer.interface';

export default interface ClassChangePublisherInterface {
    attach(observer: ClassChangeObserverInterface): void;
    detach(observer: ClassChangeObserverInterface): void;
    notifyClassName(name: string): void;
}
