let likes = 0;
let intervaloTempo = 15000;
const curtir = document.querySelector('article > div.eo2As > section.ltpMr.Slqrh > span.fr66n > button');
const avancar = document.querySelector('a.coreSpriteRightPaginationArrow');

function curtirClick() {
    intervaloTempo = 10000;
    intervaloTempo += Math.floor(Math.random() * 20000);
    intervaloCurtir = Math.floor(Math.random() * 3000 + 2000);
    intervaloAvancar = Math.floor(Math.random() * 4000 + 5001);
    intervaloTotal = Math.floor(intervaloTempo + intervaloCurtir + intervaloAvancar)
    
    console.log(`Intervalo total = ${Math.round(intervaloTotal / 1000)}s`)

        setTimeout (() => {
            console.log(`Intervalo tempo = ${Math.round(intervaloTempo / 1000)}s, Intervalo Curtir = ${Math.round(intervaloCurtir / 1000)}s, Intervalo avançar = ${Math.round(intervaloAvancar / 1000)}s,`)
            curtir.click();
            likes++;
            console.log(`Voce curtiu ${likes} posts!`);
        }, intervaloCurtir)
    
        setTimeout(() => {
            avancar.click();
        }, intervaloAvancar);

}

setInterval (curtirClick, intervaloTempo);