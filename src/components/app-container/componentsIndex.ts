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
import Paragraph from '../html-components/Paragraph';
import Header from '../html-components/Header';
import Navigation from '../html-components/Navigation';
import Main from '../html-components/Main';
import Aside from '../html-components/Aside';
import Footer from '../html-components/Footer';
import Select from '../html-components/Select';
import Option from '../html-components/Option';

function componentsIndex(index) {
    const componentsIndex: ComponentIndex = {
        'DIV': {
            create: (createNewHTMLComponentPublisher): RawHTMLConponent => {
                return new Container(createNewHTMLComponentPublisher);
            },
            isContainer: true,
        },
        'HEADER': {
            create: (createNewHTMLComponentPublisher): RawHTMLConponent => {
                return new Header(createNewHTMLComponentPublisher);
            },
            isContainer: true,
        },
        'NAV': {
            create: (createNewHTMLComponentPublisher): RawHTMLConponent => {
                return new Navigation(createNewHTMLComponentPublisher);
            },
            isContainer: true,
        },
        'MAIN': {
            create: (createNewHTMLComponentPublisher): RawHTMLConponent => {
                return new Main(createNewHTMLComponentPublisher);
            },
            isContainer: true,
        },
        'ASIDE': {
            create: (createNewHTMLComponentPublisher): RawHTMLConponent => {
                return new Aside(createNewHTMLComponentPublisher);
            },
            isContainer: true,
        },
        'FOOTER': {
            create: (createNewHTMLComponentPublisher): RawHTMLConponent => {
                return new Footer(createNewHTMLComponentPublisher);
            },
            isContainer: true,
        },
        'FORM': {
            create: (createNewHTMLComponentPublisher): RawHTMLConponent => {
                return new Form(createNewHTMLComponentPublisher);
            },
            isContainer: true,
        },
        'BUTTON': {
            create: (createNewHTMLComponentPublisher): RawHTMLConponent => {
                return new Button(createNewHTMLComponentPublisher);
            },
            isContainer: true,
        },
        'INPUT': {
            create: (createNewHTMLComponentPublisher): RawHTMLConponent => {
                return new Input(createNewHTMLComponentPublisher);
            },
            isContainer: false,
        },
        'SELECT': {
            create: (createNewHTMLComponentPublisher): RawHTMLConponent => {
                return new Select(createNewHTMLComponentPublisher);
            },
            isContainer: false,
        },
        'OPTION': {
            create: (createNewHTMLComponentPublisher): RawHTMLConponent => {
                return new Option(createNewHTMLComponentPublisher);
            },
            isContainer: false,
        },
        'LABEL': {
            create: (createNewHTMLComponentPublisher): RawHTMLConponent => {
                return new Label(createNewHTMLComponentPublisher);
            },
            isContainer: false,
        },
        'P': {
            create: (createNewHTMLComponentPublisher): RawHTMLConponent => {
                return new Paragraph(createNewHTMLComponentPublisher);
            },
            isContainer: false,
        },
        'H1': {
            create: (createNewHTMLComponentPublisher): RawHTMLConponent => {
                return new Title(TitleTypesEnum.H1, createNewHTMLComponentPublisher);
            },
            isContainer: false,
        },
        'H2': {
            create: (createNewHTMLComponentPublisher): RawHTMLConponent => {
                return new Title(TitleTypesEnum.H2, createNewHTMLComponentPublisher);
            },
            isContainer: false,
        },
        'H3': {
            create: (createNewHTMLComponentPublisher): RawHTMLConponent => {
                return new Title(TitleTypesEnum.H3, createNewHTMLComponentPublisher);
            },
            isContainer: false,
        },
        'H4': {
            create: (createNewHTMLComponentPublisher): RawHTMLConponent => {
                return new Title(TitleTypesEnum.H4, createNewHTMLComponentPublisher)
            },
            isContainer: false,
        },
        'H5': {
            create: (createNewHTMLComponentPublisher): RawHTMLConponent => {
                return new Title(TitleTypesEnum.H5, createNewHTMLComponentPublisher);
            },
            isContainer: false,
        },
        'H6': {
            create: (createNewHTMLComponentPublisher): RawHTMLConponent => {
                return new Title(TitleTypesEnum.H6, createNewHTMLComponentPublisher);
            },
            isContainer: false,
        },
        'IMG': {
            create: (createNewHTMLComponentPublisher): RawHTMLConponent => {
                return new Image(createNewHTMLComponentPublisher);
            },
            isContainer: false,
        },
        'OL': {
            create: (createNewHTMLComponentPublisher): RawHTMLConponent => {
                return new OrderedList(createNewHTMLComponentPublisher);
            },
            isContainer: true,
        },
        'UL': {
            create: (createNewHTMLComponentPublisher): RawHTMLConponent => {
                return new UnorderedList(createNewHTMLComponentPublisher);
            },
            isContainer: true,
        },
        'LI': {
            create: (createNewHTMLComponentPublisher): RawHTMLConponent => {
                return new ListItem(createNewHTMLComponentPublisher);
            },
            isContainer: true,
        },
        'A': {
            create: (createNewHTMLComponentPublisher): RawHTMLConponent => {
                return new Anchor(createNewHTMLComponentPublisher);
            },
            isContainer: true,
        },
        'TEXTAREA': {
            create: (createNewHTMLComponentPublisher): RawHTMLConponent => {
                return new TextArea(createNewHTMLComponentPublisher);
            },
            isContainer: true,
        },
        'TABLE': {
            create: (createNewHTMLComponentPublisher): RawHTMLConponent => {
                return new Table(createNewHTMLComponentPublisher);
            },
            isContainer: true,
        },
        'THEAD': {
            create: (createNewHTMLComponentPublisher): RawHTMLConponent => {
                return new TableHead(createNewHTMLComponentPublisher);
            },
            isContainer: true,
        },
        'TBODY': {
            create: (createNewHTMLComponentPublisher): RawHTMLConponent => {
                return new TableBody(createNewHTMLComponentPublisher);
            },
            isContainer: true,
        },
        'TFOOT': {
            create: (createNewHTMLComponentPublisher): RawHTMLConponent => {
                return new TableFoot(createNewHTMLComponentPublisher);
            },
            isContainer: true,
        },
        'TR': {
            create: (createNewHTMLComponentPublisher, parentNode): RawHTMLConponent => {
                return new TableRow(createNewHTMLComponentPublisher, parentNode);
            },
            isContainer: true,
        },
        'TD': {
            create: (createNewHTMLComponentPublisher): RawHTMLConponent => {
                return new TableCell(createNewHTMLComponentPublisher);
            },
            isContainer: true,
        },
        'TH': {
            create: (createNewHTMLComponentPublisher): RawHTMLConponent => {
                return new TableHeadCell(createNewHTMLComponentPublisher);
            },
            isContainer: true,
        },
        'default': {
            create: (): undefined => undefined,
            isContainer: false,
        },
    }

    return componentsIndex[index] || componentsIndex['default'];
}

export default componentsIndex;
