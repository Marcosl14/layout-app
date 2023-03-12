export default function getUnit(text: string) {
    try{
        const values = text.match(/[a-z]+$/i)
        return values ? values[0] : 'px';
    } catch {
        return 'px';
    }

}
