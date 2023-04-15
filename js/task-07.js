
const refs = {
  input: document.getElementById("font-size-control"),
  span: document.getElementById('text')
};

refs.input.addEventListener('input', (event) => {
  const fontSize = event.currentTarget.value;
  refs.span.style.fontSize = `${fontSize}px`;
})

console.log(refs);



