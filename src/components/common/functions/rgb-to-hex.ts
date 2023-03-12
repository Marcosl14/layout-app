export default function rgbToHex(rgb: string) {
    try {
        const [r,g,b] = rgb.replace(/[^\d,]+/g, '').split(',');
        return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
    } catch (err) {
        return '';
    }

}

function componentToHex(c) {
    const hex = parseInt(c).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
}
