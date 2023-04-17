
const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");
// console.log(inputStep);

createBtn.addEventListener("click", () => {
 const amount = input.value;
 createBoxes(amount);
});

destroyBtn.addEventListener(
 "click",
 destroyBoxes
);

function createBoxes(amount) {
 const boxes = [];
  let boxSize = 30;
const step = input.getAttribute("step");
  

 for (let i = 0; i < amount; i += Number(step) {
  const box = document.createElement("div");
  box.style.width = `${boxSize}px`;
  box.style.height = `${boxSize}px`;
  box.style.backgroundColor = getRandomHexColor();
  boxes.push(box);
  boxSize += 10;
 }

 boxesContainer.append(...boxes);
}

function destroyBoxes() {
 boxesContainer.innerHTML = "";
 input.value = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
