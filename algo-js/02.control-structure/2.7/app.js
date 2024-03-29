(() => {
    let n = parseInt(prompt("Enter a number"))
    let sum;
    for (let i = 0; i < n; i++) {
        let number = parseInt(prompt("Enter a number to add"))
        let temp = number;
        sum = temp + number;
    }
    console.log(sum);
})();
