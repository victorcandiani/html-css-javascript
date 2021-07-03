const mudar = document.querySelector("#botao");
const texto = document.querySelector("#texto");
const body = document.body;

mudar.addEventListener('click', mudarBg)

function numeroAleatorio() {
  return Math.floor(Math.random() * 256);
}

function mudarBg() {
  const red = numeroAleatorio();
  const green = numeroAleatorio();
  const blue = numeroAleatorio();

  const textoRGB = `rgb(${red}, ${green}, ${blue})`;

  body.style.background = textoRGB;
  texto.innerHTML = `RGB (${red}, ${green}, ${blue})`;
}