import RawHTMLConponent from './RawHTMLComponent';

import { TitleTypesEnum } from '../common/enums/title.types.enum';

import Button from './Button';
import Input from './Input';
import Container from './Container';
import Label from './Label';
import Title from './Title';
import Image from './Image';
import Form from './Form';

function componentsIndex(index) {
    const componentsIndex = {
        'DIV': () : RawHTMLConponent => new Container(),
        'FORM': () : RawHTMLConponent => new Form(),
        'BUTTON': () : RawHTMLConponent => new Button(),
        'INPUT': () : RawHTMLConponent => new Input(),
        'LABEL': () : RawHTMLConponent => new Label(),
        'H1': () : RawHTMLConponent => new Title(TitleTypesEnum.H1),
        'H2': () : RawHTMLConponent => new Title(TitleTypesEnum.H2),
        'H3': () : RawHTMLConponent => new Title(TitleTypesEnum.H3),
        'H4': () : RawHTMLConponent => new Title(TitleTypesEnum.H4),
        'H5': () : RawHTMLConponent => new Title(TitleTypesEnum.H5),
        'H6': () : RawHTMLConponent => new Title(TitleTypesEnum.H6),
        'IMG': () : RawHTMLConponent => new Image(),
        'default': () : undefined  => undefined,
    }

    return componentsIndex[index] || componentsIndex['default'];
}

export default componentsIndex;
