import RawHTMLComponent from '../../html-components/RawHTMLComponent';

export interface ComponentIndex {
    [tag: string]: {
        create: () => RawHTMLComponent;
        isContainer: boolean;
    };
}
