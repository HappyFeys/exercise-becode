function rand10() {
    return Math.floor((Math.random()* 10)+1)
}

console.log(rand10());

// La fonction rand10 va nous retourner un nombre aléatoire entre 1 et 10. 
// Math.floor renvoie le plus grand entier qui est inférieur ou égal à x.
// Math.random() lui va nous générer un nombre aléatoire entre 0 et 1. En faisant x10, nous générons un nombre entre 0 et 9. En rajoutant le +1, on va de 1 à 10.