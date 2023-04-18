
const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");


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
  const stepInput = Number(input.getAttribute("step"));
  const minInput = Number(input.getAttribute('min'))
  const maxInput = Number(input.getAttribute('max'))


  if (amount > maxInput || amount < minInput) {
    return
  }
  
    for (let i = 0;i < amount; i += stepInput
    ) {
      const box = document.createElement("div");
      box.style.width = `${boxSize}px`;
      box.style.height = `${boxSize}px`;
      box.style.backgroundColor =
    getRandomHexColor();
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
