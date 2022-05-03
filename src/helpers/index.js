export const randomColor = (min, max) => {
    const red = Math.round(Math.random() * (max - min) + min);
    const green = Math.round(Math.random() * (max - min) + min);
    const blue = Math.round(Math.random() * (max - min) + min);
    return `rgb(${red}, ${green}, ${blue})`;
}