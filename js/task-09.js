

const body = document.body;
const colorSpan = document.querySelector('.color');
const btnColor = document.querySelector('.change-color');

  btnColor.addEventListener("click", () => {
    const color = getRandomHexColor();
    
  colorSpan.textContent = color;
  body.style.backgroundColor = color;
}
);





function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
