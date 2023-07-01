import CreateNewHTMLComponentPublisher from '../common/publishers/CreateNewHTMLComponentPublisher';

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

export default class ComponentFactory {
    private index: string;

    constructor(index: string) {
        this.index = index;
    }

    public create(
        createNewHTMLComponentPublisher?: CreateNewHTMLComponentPublisher,
        parentNode?: HTMLElement
    ): RawHTMLConponent | undefined {
        return this.search(createNewHTMLComponentPublisher, parentNode).create;
    }

    public get isContainer(): boolean {
        return this.search().isContainer;
    }

    private search(
        createNewHTMLComponentPublisher?: CreateNewHTMLComponentPublisher,
        parentNode?: HTMLElement
    ): {create: RawHTMLConponent, isContainer: boolean} {
        switch (this.index) {
            case 'DIV':
                return {
                    create: new Container(createNewHTMLComponentPublisher),
                    isContainer: true,
                };
            case 'HEADER':
                return {
                    create: new Header(createNewHTMLComponentPublisher),
                    isContainer: true,
                };
            case 'NAV':
                return {
                    create: new Navigation(createNewHTMLComponentPublisher),
                    isContainer: true,
                };
            case 'MAIN':
                return {
                    create: new Main(createNewHTMLComponentPublisher),
                    isContainer: true,
                };
            case 'ASIDE':
                return {
                    create: new Aside(createNewHTMLComponentPublisher),
                    isContainer: true,
                };
            case 'FOOTER':
                return {
                    create: new Footer(createNewHTMLComponentPublisher),
                    isContainer: true,
                };
            case 'FORM':
                return {
                    create: new Form(createNewHTMLComponentPublisher),
                    isContainer: true,
                };
            case 'BUTTON':
                return {
                    create: new Button(createNewHTMLComponentPublisher),
                    isContainer: true,
                };
            case 'INPUT':
                return {
                    create: new Input(createNewHTMLComponentPublisher),
                    isContainer: false,
                };
            case 'SELECT':
                return {
                    create: new Select(createNewHTMLComponentPublisher),
                    isContainer: false,
                };
            case 'OPTION':
                return {
                    create: new Option(createNewHTMLComponentPublisher),
                    isContainer: false,
                };
            case 'LABEL':
                return {
                    create: new Label(createNewHTMLComponentPublisher),
                    isContainer: false,
                };
            case 'P':
                return {
                    create: new Paragraph(createNewHTMLComponentPublisher),
                    isContainer: false,
                };
            case 'H1':
                return {
                    create: new Title(TitleTypesEnum.H1, createNewHTMLComponentPublisher),
                    isContainer: false,
                };
            case 'H2':
                return {
                    create: new Title(TitleTypesEnum.H2, createNewHTMLComponentPublisher),
                    isContainer: false,
                };
            case 'H3':
                return {
                    create: new Title(TitleTypesEnum.H3, createNewHTMLComponentPublisher),
                    isContainer: false,
                };
            case 'H4':
                return {
                    create: new Title(TitleTypesEnum.H4, createNewHTMLComponentPublisher),
                    isContainer: false,
                };
            case 'H5':
                return {
                    create: new Title(TitleTypesEnum.H5, createNewHTMLComponentPublisher),
                    isContainer: false,
                };
            case 'H6':
                return {
                    create: new Title(TitleTypesEnum.H6, createNewHTMLComponentPublisher),
                    isContainer: false,
                };
            case 'IMG':
                return {
                    create: new Image(createNewHTMLComponentPublisher),
                    isContainer: false,
                };
            case 'OL':
                return {
                    create: new OrderedList(createNewHTMLComponentPublisher),
                    isContainer: true,
                };
            case 'UL':
                return {
                    create: new UnorderedList(createNewHTMLComponentPublisher),
                    isContainer: true,
                };
            case 'LI':
                return {
                    create: new ListItem(createNewHTMLComponentPublisher),
                    isContainer: true,
                };
            case 'A':
                return {
                    create: new Anchor(createNewHTMLComponentPublisher),
                    isContainer: true,
                };
            case 'TEXTAREA':
                return {
                    create: new TextArea(createNewHTMLComponentPublisher),
                    isContainer: true,
                };
            case 'TABLE':
                return {
                    create: new Table(createNewHTMLComponentPublisher),
                    isContainer: true,
                };
            case 'THEAD':
                return {
                    create: new TableHead(createNewHTMLComponentPublisher),
                    isContainer: true,
                };
            case 'TBODY':
                return {
                    create: new TableBody(createNewHTMLComponentPublisher),
                    isContainer: true,
                };
            case 'TFOOT':
                return {
                    create: new TableFoot(createNewHTMLComponentPublisher),
                    isContainer: true,
                };
            case 'TR':
                return {
                    create: new TableRow(createNewHTMLComponentPublisher, parentNode),
                    isContainer: true,
                };
            case 'TD':
                return {
                    create: new TableCell(createNewHTMLComponentPublisher),
                    isContainer: true,
                };
            case 'TH':
                return {
                    create: new TableHeadCell(createNewHTMLComponentPublisher),
                    isContainer: true,
                };
            case 'default':
                return {
                    create: undefined,
                    isContainer: false,
                };
        }
    }
}
