const {toggleButton,surpriseImage,resizeButton,colorInput,body} = {
    toggleButton: document.querySelector("#toggleButton"),
    surpriseImage: document.querySelector("#surpriseImage"),
    resizeButton: document.querySelector("#resizeButton"),
    colorInput: document.querySelector("#colorInput"),
    body: document.querySelector("body")
}

// Todas las funciones usan funciones flecha, que es lo que se espera del ejercicio


const toggleImageDisplay = () => {
    surpriseImage.style.display = surpriseImage.style.display === 'none' ? 'block' : 'none';
};


const toggleImageSize = () => {
    surpriseImage.style.width = surpriseImage.style.width === '150px' ? '300px' : '150px';
};


const applyBackgroundColor = (color) => {
    body.style.backgroundColor = color;
};


// Event listener simplificado usando funciones flecha
const addEventListeners = () => {
    toggleButton.addEventListener("click", toggleImageDisplay);
    resizeButton.addEventListener("click", toggleImageSize);
    colorInput.addEventListener("input", () => applyBackgroundColor(colorInput.value));
};


document.addEventListener("DOMContentLoaded", addEventListeners);
