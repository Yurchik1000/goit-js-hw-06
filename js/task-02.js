const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.getElementById('ingredients');

// for (const ingradient of ingredients) {
// const liEl = document.createElement('li')
//   liEl.textContent = ingradient;
//   liEl.classList.add('item');
//   ulEl.appendChild(liEl);
// }
// document.body.prepend(ulEl);

const liEl = ingredients.map((ingredient) => `<li class="item">${ingredient}</li>`
).join('');

ulEl.innerHTML = liEl;
console.log(ulEl);