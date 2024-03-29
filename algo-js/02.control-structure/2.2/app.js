(() => {
    let min= new Number(prompt("Enter a min"));
    let max = new Number(prompt("Enter a max"));
    let current = new Number(prompt("Enter your current number"))
    if (current<max || current>min) {
        console.log(`Your current number is ${current}`);
    }
    if (min>max) {
        throw new Error (`Min (${min}) is bigger than your max (${max})`);
    }
})();
