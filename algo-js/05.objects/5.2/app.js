/*
Create a function named randomizeCast(tvSerie) that will take as argument the data structure you defined in the previous exercise and return a list of the same cast but in a random order.

Create a program that will use randomizeCast(tvSerie) and askTvSerie() to ask the user about a TV serie then display a randomized list of the previous cast that will form the new cast of your next serie.
*/

let mySerie = {
    name : "",
    production : "",
    members : [],
}
let n;
function askTvSerie(mySerie) {
    mySerie.name = prompt("Quel est le nom de ta série préférée ?");
    mySerie.production = prompt(`Connais-tu l'année de production ?`);
    n = prompt("Combien d'acteur principaux y a-t-il ?");
    for (let i = 0; i < n; i++) {
       mySerie.members[i] = prompt(`Entre le nom de l'acteur :`)
    }
    return mySerie
}


function randomizeCast(tvSerie) {
    for (let i = 0; i < n; i++) {
        tvSerie.members[i] = tvSerie.members[Math.floor(Math.random()*n)]
    }
}

randomizeCast(askTvSerie(mySerie))

console.log(mySerie);
