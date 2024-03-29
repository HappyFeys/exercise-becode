(() => {
    let number = 0
    while (number<=100) {
        if(number%2===0){
        console.log(number);
        }
        number++
    }
})();

////////

(() => {
    for (let number = 1; number <=100; number++) {
        if (number%2===0) {
            console.log(number);
        }
    }
})();