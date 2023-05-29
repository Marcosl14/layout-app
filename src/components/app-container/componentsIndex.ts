import { ComponentIndex } from '../common/interfaces/component-index.interface';

import { TitleTypesEnum } from '../common/enums/title.types.enum';

import RawHTMLConponent from '../html-components/RawHTMLComponent';
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
import TableHead from '../html-components/TableHead';
import TableBody from '../html-components/TableBody';
import TableFoot from '../html-components/TableFoot';
import TableRow from '../html-components/TableRow';
import TableCell from '../html-components/TableCell';
import TableHeadCell from '../html-components/TableHeadCell';

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
            create: (createNewHTMLComponentPublisher) : RawHTMLConponent => {
                return new OrderedList(createNewHTMLComponentPublisher);
            },
            isContainer: true,
        },
        'UL': {
            create: (createNewHTMLComponentPublisher) : RawHTMLConponent => {
                return new UnorderedList(createNewHTMLComponentPublisher)
            },
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
            create: (createNewHTMLComponentPublisher) : RawHTMLConponent => {
                return new Table(createNewHTMLComponentPublisher)
            },
            isContainer: true,
        },
        'THEAD': {
            create: (createNewHTMLComponentPublisher) : RawHTMLConponent => {
                return new TableHead(createNewHTMLComponentPublisher)
            },
            isContainer: true,
        },
        'TBODY': {
            create: (createNewHTMLComponentPublisher) : RawHTMLConponent => {
                return new TableBody(createNewHTMLComponentPublisher)
            },
            isContainer: true,
        },
        'TFOOT': {
            create: (createNewHTMLComponentPublisher) : RawHTMLConponent => {
                return new TableFoot(createNewHTMLComponentPublisher)
            },
            isContainer: true,
        },
        'TR': {
            create: (createNewHTMLComponentPublisher, parentNode) : RawHTMLConponent => {
                return new TableRow(createNewHTMLComponentPublisher, parentNode)
            },
            isContainer: true,
        },
        'TD': {
            create: () : RawHTMLConponent => new TableCell(),
            isContainer: true,
        },
        'TH': {
            create: () : RawHTMLConponent => new TableHeadCell(),
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
