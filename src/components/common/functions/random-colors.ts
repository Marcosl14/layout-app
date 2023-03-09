export default function randomColor() {
    const max = 230;
    const min = 150;

    const r = Math.ceil(Math.random() * (max - min) + min);
    const g = Math.ceil(Math.random() * (max - min) + min);
    const b = Math.ceil(Math.random() * (max - min) + min);


    return `rgb(${r},${g},${b})`;
}
