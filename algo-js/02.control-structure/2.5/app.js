(() => {
    let number;
    while (true) {
        number = new Number(prompt("What is your favorite number ?"));
        if (number==42){
            break;
        }
        else console.log("Are you sure ?");
    }
})();

