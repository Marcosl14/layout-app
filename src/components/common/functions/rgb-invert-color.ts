export default function invertColor(rgb: string) {
    const [ri,gi,bi] = rgb.replace(/[^\d,]+/g, '').split(',');

    const r = 255 - parseInt(ri);
    const g = 255 - parseInt(gi);
    const b = 255 - parseInt(bi);

    return `rgb(${r > 150 ? r : 150},${g > 150 ? g : 150},${b > 150 ? b : 150})`;
}
