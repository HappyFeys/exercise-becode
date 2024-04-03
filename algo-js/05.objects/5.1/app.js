/* Create a function named askTvSerie() that will ask the user for the following data about its favorite TV serie:

Name
Production year
Names of the cast members (there can be as much as the user want)
That function must gather all the data in a single object and return it. The data structure must be elegant.

Create a program that use that function to generate a TV serie object and display it to the user in JSON format. */

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
}

askTvSerie(mySerie);
console.log(`Ta série préférée est ${mySerie.name}, produite en ${mySerie.production}. Il y a ${n} acteur(s) principal(aux) : ${mySerie.members}`)