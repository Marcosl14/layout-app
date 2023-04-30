import RawBuilder from './RawBuilder';

import { TitleTypesEnum } from '../enums/title.types.enum';

export default class TitleBuilder extends RawBuilder<HTMLButtonElement>{
    constructor(type: TitleTypesEnum) {
        super(type);
    }
}
