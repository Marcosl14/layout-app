import Button from './Button';
import Input from './Input';
import Container from './Container';
import RawHTMLConponent from './RawHTMLComponent';

function componentsIndex(index) {
    const componentsIndex = {
        'BUTTON': () : RawHTMLConponent => new Button(),
        'INPUT': () : RawHTMLConponent => new Input(),
        'DIV': () : RawHTMLConponent => new Container(),
        'default': () : undefined  => undefined,
    }

    return componentsIndex[index] || componentsIndex['default'];
}

export default componentsIndex;
