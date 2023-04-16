import ComponentChangeObserverInterface from './component-change-observer.interface';

export default interface ComponentChangePublisherInterface {
    attach(observer: ComponentChangeObserverInterface): void;
    detach(observer: ComponentChangeObserverInterface): void;
    notifyComponentName(name: string): void;
}
