function calcSurface(a, b){
    return a*b
}

let width = parseInt(prompt("Veuillez entrer une largeur en cm à ce rectangle :"));
let length = parseInt(prompt("Maintenant, veuillez entrer une longueur en cm :"));

console.log(`La surface du rectangle est de : ${calcSurface(width,length)} cm²`);

// La fonction calcSurface prend en paramètre la longueur et la largeur et nous retourne la surface du rectangle

