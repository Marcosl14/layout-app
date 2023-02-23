import Button from "./Button";
import TextInput from './Input';
import Container from './Container';

function componentsIndex(index) {
    const componentsIndex = {
        'BUTTON': () => new Button().domElement,
        'INPUT': () => new TextInput().domElement,
        'DIV': () => new Container().domElement,
        'default': () => undefined,
    }

    return componentsIndex[index] || componentsIndex['default'];
}

export default componentsIndex;
