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