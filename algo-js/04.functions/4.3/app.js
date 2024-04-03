function rand10() {
    return Math.floor((Math.random()* 10)+1)
}

console.log(rand10());

let array = [];
function multiRand(n) {
    for (let i = 0; i < n; i++) {
        array.push(rand10())
    }
    return array
}

let n = prompt("Veuillez entrer le nombre de random que vous voulez :")
multiRand(n)
console.log(array);

// La fonction multiRand va prendre un nombre en paramètre. Nous allons boucler n fois afin de push a chaque fois notre nombre random dans un tableau.