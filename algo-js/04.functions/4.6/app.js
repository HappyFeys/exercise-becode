function factorial(a) {
    let f = 1
    for (let i = a; i > 1; i--) {
        f = f *i;
    }
    return f;
}

// Un factoriel est le produit de tout les nombres le précédent
// exemple : 5! = 5*4*3*2*1 = 120

factorial(5)

function factor(n){
    if (n===1) {
        return 1;
    }
    return n * factor(n-1);
}

