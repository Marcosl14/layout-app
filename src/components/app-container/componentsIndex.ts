import { ComponentIndex } from '../common/interfaces/component-index.interface';
import RawHTMLConponent from '../html-components/RawHTMLComponent';

import { TitleTypesEnum } from '../common/enums/title.types.enum';

import Button from '../html-components/Button';
import Input from '../html-components/Input';
import Container from '../html-components/Container';
import Label from '../html-components/Label';
import Title from '../html-components/Title';
import Image from '../html-components/Image';
import Form from '../html-components/Form';
import OrderedList from '../html-components/OrderedList';
import UnorderedList from '../html-components/UnorderedList';
import Table from '../html-components/Table';
import Anchor from '../html-components/Anchor';
import TextArea from '../html-components/TextArea';
import ListItem from '../html-components/ListItem';

function componentsIndex(index) {
    const componentsIndex : ComponentIndex = {
        'DIV': {
            create: () : RawHTMLConponent => new Container(),
            isContainer: true,
        },
        'FORM': {
            create: () : RawHTMLConponent => new Form(),
            isContainer: true,
        },
        'BUTTON': {
            create: () : RawHTMLConponent => new Button(),
            isContainer: true,
        },
        'INPUT': {
            create: () : RawHTMLConponent => new Input(),
            isContainer: false,
        },
        'LABEL': {
            create: () : RawHTMLConponent => new Label(),
            isContainer: false,
        },
        'H1': {
            create: () : RawHTMLConponent => new Title(TitleTypesEnum.H1),
            isContainer: false,
        },
        'H2': {
            create: () : RawHTMLConponent => new Title(TitleTypesEnum.H2),
            isContainer: false,
        },
        'H3': {
            create: () : RawHTMLConponent => new Title(TitleTypesEnum.H3),
            isContainer: false,
        },
        'H4': {
            create: () : RawHTMLConponent => new Title(TitleTypesEnum.H4),
            isContainer: false,
        },
        'H5': {
            create: () : RawHTMLConponent => new Title(TitleTypesEnum.H5),
            isContainer: false,
        },
        'H6': {
            create: () : RawHTMLConponent => new Title(TitleTypesEnum.H6),
            isContainer: false,
        },
        'IMG': {
            create: () : RawHTMLConponent => new Image(),
            isContainer: false,
        },
        'OL': {
            create: () : RawHTMLConponent => new OrderedList(),
            isContainer: true,
        },
        'UL': {
            create: () : RawHTMLConponent => new UnorderedList(),
            isContainer: true,
        },
        'LI': {
            create: () : RawHTMLConponent => new ListItem(),
            isContainer: true,
        },
        'A': {
            create: () : RawHTMLConponent => new Anchor(),
            isContainer: true,
        },
        'TEXTAREA': {
            create: () : RawHTMLConponent => new TextArea(),
            isContainer: true,
        },
        'TABLE': {
            create: () : RawHTMLConponent => new Table(),
            isContainer: true,
        },
        'default': {
            create: () : undefined  => undefined,
            isContainer: false,
        },
    }

    return componentsIndex[index] || componentsIndex['default'];
}

export default componentsIndex;
