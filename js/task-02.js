const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.getElementById('ingredients');

const liElements = ingredients.map((ingredient) => {
let liEl = document.createElement('li')
  liEl.textContent = ingredient;
  liEl.classList.add('item');
  return liEl;
  // ulEl.appendChild(liEl);
})
ulEl.append(...liElements);
console.log(ulEl);
// document.body.prepend(ulEl);





// const liEl = ingredients.map((ingredient) => `<li class="item">${ingredient}</li>`
// ).join('');

// ulEl.innerHTML = liEl;
// console.log(ulEl);