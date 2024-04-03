function calcDistance (x1, y1, x2, y2) {
    return Math.sqrt((Math.pow((x2-x1),2))+(Math.pow((y2-y1),2)))
}

console.log(calcDistance(1,1,2,2));

// la fonction calcDistance prend 4 paramètres qui correspondent aux coordonées des points A et B.
// Celle-ci retourne la racine carré de la somme des différences des points au carré.