let learner = [
    "Adrien",
    "Adrien1",
    "Angel",
    "Arnaud",
    "Denis",
    "Dorian",
    "Dylan",
    "Dzheylyan",
    "Giovanni",
    "Isabelle",
    "Jessica",
    "Julie",
    "Justine1",
    "Justine",
    "Ludovic",
    "Lyne",
    "M.Jordan",
    "Manu-cj",
    "Maryam",
    "Mohamed",
    "Nataliia",
    "Zahra",
    "Caroline",
    "Stacy",
    "Iliess",
    "Nathanael",
    "Tom",
    "Youris"];

let arrayEmpty = [];

function pickLearner(inputAr, n) {
    for (let i = 0; i < n; i++) {
        arrayEmpty.push(inputAr[rand28()]);
    }
}

function rand28(){
    return Math.floor(Math.random()*28)
}

pickLearner(learner,3)

console.log(arrayEmpty);
