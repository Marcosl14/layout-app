export default function rgbToHex(rgb: string) {
    try {
        const [r,g,b] = rgb.replace(/[^\d,]+/g, '').split(',');
        return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
    } catch (err) {
        return '#000000';
    }
}

function componentToHex(c) {
    const hex = parseInt(c).toString(16);
    if(hex === 'NaN') {
        return '00';
    }
    return hex.length === 1 ? '0' + hex : hex;
}
