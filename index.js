const ptext = document.querySelector("p");

const changeColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
  ptext.innerText = `color : rgb(${r},${g},${b})`;
};
