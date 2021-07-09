const next = document.querySelector('a.coreSpriteRightPaginationArrow');
var counter = 0;

function likepost () {
    const botaoLike = document.querySelector('article > div.eo2As > section.ltpMr.Slqrh > span.fr66n > button');

    if(botaoLike) {
    botaoLike.click();
    counter++;
    console.log(`Voce curtiu ${counter} posts!`);
    }
    
    next.click();
       
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

(function loop () {
    setTimeout(() => {
    likepost();
    loop();
    }, getRandomInt(5000, 15000));


}());