/*
| x1 - x2 | + | z1 - z2 |

Design a function manhattan that takes 4 arguments streetA & avenueA (the starting point in terms of street and avenue), streetB & streetB (the ending point in terms of street and avenue) and computes the number of blocks between two points.
// going from 1st street/1st avenue to 2nd street/2nd avenue
manhattan(1, 1, 2, 2); // returns 2

manhattan(1, 1, 1, 1); // return 0

manhattan(5, 4, 3, 2); // returns 4
*/


function manhattan(x1,z1,x2,z2) {
    let lenght= Math.abs(x1 - x2) + Math.abs(z1 - z2)
    return lenght
}

console.log(manhattan(1,1,2,2));