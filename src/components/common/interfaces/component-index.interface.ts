import RawHTMLComponent from '../../html-components/RawHTMLComponent';
import CreateNewHTMLComponentPublisher from '../publishers/CreateNewHTMLComponentPublisher';

export interface ComponentIndex {
    [tag: string]: {
        create: (createNewHTMLComponentPublisher?: CreateNewHTMLComponentPublisher) => RawHTMLComponent;
        isContainer: boolean;
    };
}
