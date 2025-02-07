const darkColorsArr = [
    "#2C3E50", "#34495E", "#2C2C2C", "#616A6B", "#4A235A", "#2F4F4F", "#0E4B5A", "#36454F", "#2C3E50", "#800020",
    "#1C1C1C", "#3D3D3D", "#4B0082", "#5C4033", "#3F2929", "#8B0000", "#3C3C3C", "#4B3D31", "#2F2F2F", "#3E2723",
    "#2E2E2E", "#212121", "#1F1F1F", "#191919", "#4A4A4A", "#333333", "#1D1D1D", "#2B2B2B", "#202020", "#101010",
    "#4B0082", "#3A3A3A", "#2E3A4D", "#2F4F4F", "#2B1A1A", "#3A3A3A", "#4F4F4F", "#555555", "#3C3C3C", "#2F4F4F",
    "#1A1A1A", "#3B3B3B", "#2E2E2E", "#4A4A4A", "#5A4E4A", "#3F3F3F", "#2C3E50", "#4E4E4E", "#2A2A2A", "#1F1F1F",
    "#3C3A3A", "#2A2D2D", "#4B5D5D", "#3D3D3D", "#6A6A6A", "#3E3E3E", "#5F5F5F", "#2C2C2C", "#2E2E2E", "#1A1A1A",
    "#4A4A4A", "#7D7D7D", "#2D2D2D", "#1B1B1B", "#3D2B2B", "#2F3F4F", "#2C4A4A", "#3E3E3E", "#3B3C3C", "#2D2D2D",
    "#1C1C1C", "#5A5A5A", "#3D3D3D", "#4F4F4F", "#4A4B4B", "#2E2E2E", "#7A7A7A", "#3C3C3C", "#1E1E1E", "#4D4D4D",
    "#2B2B2B", "#3C3C3F", "#4B4B4B", "#2F2F2F", "#3B3B3B", "#5C5C5C", "#1A1A1A", "#2D2D2D", "#4E4E4E", "#2C2C2C",
];

function getRandomIndex() {
    const randomIndex = Math.floor(darkColorsArr.length * Math.random());
    return randomIndex;
}

const body = document.querySelector("body");
const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");

function changeBackgroundColor() {
    const color = darkColorsArr[getRandomIndex()];

    bgHexCodeSpanElement.innerText = color;
    body.style.backgroundColor = color;
}

const btn = document.querySelector("#btn");

btn.onclick = changeBackgroundColor;