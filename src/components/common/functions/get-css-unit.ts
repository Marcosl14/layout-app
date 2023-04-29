import { UnitsEnum } from '../enums/units.enum';

export default function getUnit(text: string, defaultUnit: UnitsEnum = UnitsEnum.px) {
    try{
        const values = text.match(/[a-z]+$/i)
        return values ? values[0] : defaultUnit;
    } catch {
        return 'px';
    }

}
