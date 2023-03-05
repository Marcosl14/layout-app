export default function rgbToHex(text: string) {
    const [r,g,b] = text.replace(/[^\d,]+/g, '').split(',');
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function componentToHex(c) {
    const hex = parseInt(c).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
}
