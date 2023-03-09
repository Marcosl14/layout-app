export default function rgbToHex(rgb: string) {
    const [r,g,b] = rgb.replace(/[^\d,]+/g, '').split(',');
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function componentToHex(c) {
    const hex = parseInt(c).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
}
