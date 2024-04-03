/*
Given an age in seconds, calculate how old someone would be on

Mercury: orbital period 0.2408467 Earth years
Venus: orbital period 0.61519726 Earth years
Earth: orbital period 1.0 Earth years, 365.25 Earth days, or 31557600 seconds
Mars: orbital period 1.8808158 Earth years
Jupiter: orbital period 11.862615 Earth years
So if you were told someone were 1,000,000,000 seconds old, you should be able to say that they're 31.69 Earth-years old.

The task
Create a function space age that takes two arguments, a number of seconds and a planet that can either be : Mercury, Venus, Earth, Mars or Jupiter. The function should return your space age on that planet.

spaceAge(365.25 * 24 * 60 * 60, 'Earth') // returns 1
*/




function spaceAge(timeInSeconde, planet) {
    let age;
    const earthYear = 365.25;
    const mercuryYear = earthYear*0.2408467;
    const venusYear = earthYear*0.61519726;
    const marsYear = earthYear*1.8808158;
    const jupiterYear = earthYear*11.862615;
       
    switch (planet) {
        case 'earth':
            age = timeInSeconde/60/60/24/earthYear
            break;
        case 'mercury':
            age = timeInSeconde/60/60/24/mercuryYear
            break;
        case 'venus':
            age = timeInSeconde/60/60/24/venusYear
            break;
        case 'mars':
            age = timeInSeconde/60/60/24/marsYear
            break;
        case 'jupiter':
            age = timeInSeconde/60/60/24/jupiterYear
            break;
        default:
            console.log("Tu n'as pas fourni une bonne planète");
            break;
    }
    return age

    // if (planet=='earth') {
    //     age = timeInSeconde/60/60/24/earthYear
    // }
    // else if (planet == 'venus') {
    //     age = timeInSeconde/60/60/24/venusYear
    // }
    // else if (planet == 'mercury') {
    //     age = timeInSeconde/60/60/24/mercuryYear
    // }
    // else if (planet == 'mars') {
    //     age = timeInSeconde/60/60/24/marsYear
    // }
    // else if (planet == 'jupiter') {
    //     age = timeInSeconde/60/60/24/jupiterYear
    // }
    // return age
    //FONCTIONNE AUSSI
}

let timeInSeconde = parseInt(prompt("Quel âge a tu en seconde ?"))
let planet = prompt("Quel planète habites-tu ?").toLowerCase()

console.log(spaceAge(timeInSeconde, planet));

switch (key) {
    case value:
        
        break;

    default:
        break;
}