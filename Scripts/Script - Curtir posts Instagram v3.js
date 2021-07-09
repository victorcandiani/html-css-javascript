let likes = 0;
let intervaloTempo = 15000;

function curtirClick() {
  intervaloTempo = 10000;
  intervaloTempo += Math.floor(Math.random() * 20000);
  intervaloCurtir = Math.floor(Math.random() * 3000 + 2000);
  intervaloAvancar = Math.floor(Math.random() * 4000 + 5001);
  intervaloTotal = Math.floor(intervaloTempo + intervaloCurtir + intervaloAvancar)
  
  const curtir = document.querySelector('article > div.eo2As > section.ltpMr.Slqrh > span.fr66n > button');
  const avancar = document.querySelector('a.coreSpriteRightPaginationArrow');

  console.log(`Intervalo tempo = ${Math.round(intervaloTempo / 1000)}s, Intervalo Curtir = ${Math.round(intervaloCurtir / 1000)}s, Intervalo avançar = ${Math.round(intervaloAvancar / 1000)}s,`)

  console.log(`Intervalo total = ${Math.round(intervaloTotal / 1000)}s`)
  
  setTimeout (() => {
      curtir.click();
      likes++;
      console.log(`Voce curtiu ${likes} posts!`);
  }, intervaloCurtir)
  
  setTimeout(() => {
      avancar.click();
  }, intervaloAvancar);
  
}

  var novaDiv = document.createElement('div');
  var novoBtn1 = document.createElement('button');
  var novoLbl1 = document.createTextNode("Começar a Curtir");
  var novoBtn2 = document.createElement('button');
  var novoLbl2 = document.createTextNode("Parar de Curtir");
  var janelaInsta = document.querySelector('.PdwC2');

  janelaInsta.appendChild(novaDiv);
  novaDiv.classList.add('minhadiv');

  document.querySelector('.minhadiv').appendChild(novoBtn1);
  novoBtn1.appendChild(novoLbl1);
  novoBtn1.classList.add('meubotao');
   
  novoBtn1.addEventListener('click', teste)

  document.querySelector('.minhadiv').appendChild(novoBtn2);
  novoBtn2.appendChild(novoLbl2);
  novoBtn2.classList.add('meubotao');

  var minhaDiv = document.querySelector('.minhadiv'); 

  minhaDiv.style.display = "flex"
  minhaDiv.style.flexDirection = "row"
  minhaDiv.style.padding = "10px"
  
  var meubotao = document.querySelectorAll('.meubotao')
  
  meubotao[0].style.backgroundColor = "#8e8e8e"
  meubotao[0].style.color = "#000000"
  meubotao[0].style.border = "none"
  meubotao[0].style.padding = "10px 40px"
  meubotao[0].style.cursor = "pointer"

  meubotao[1].style.backgroundColor = "#8e8e8e"
  meubotao[1].style.color = "#000000"
  meubotao[1].style.border = "none"
  meubotao[1].style.padding = "10px 40px"
  meubotao[1].style.cursor = "pointer"
  meubotao[1].style.marginLeft = "10px"

  function teste() {
    var myInterval = setInterval(curtirClick, intervaloTempo);
    novoBtn2.addEventListener('click', clearInterval(myInterval)) ;
  }