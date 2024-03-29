(() => {
    let array1 = [1, 2, 3, 4, 5];
    let array2 = [];
    for (let elem of array1) {
        array2.push(elem)
    }
    console.log(array2);
})();

(() => {
    let array1 = [1, 2, 3, 4, 5];
    let array2 = Array.from(array1);
    
    console.log(array2);
})();