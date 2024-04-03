/*
If price or moneyHanded are not numbers or not positive, the function should return an empty array
If moneyHanded is lower than price, the function should return an empty array
The function should return the exact change, no more, no less
The function should return the least amount of bills and coins.

// An item costs 12,30€ 
// We hand a 50€ bill
const change1 = computeChange(12.3, 50)

// Should return 37,70€
// 1x20, 1x10, 1x5, 1x2, 1x0.5, 1x0.2
console.log(change1) // [20, 10, 5, 2, 0.5, 0.2]


const change2 = computeChange(17.41, 20)
console.log(change2) // [2, 0.5, 0.05, 0.02, 0.02]
*/

let arrChange = [];
const euro = [500,200,100,50,20,10,5,2,1,0.5,0.2,0.1,0.05,0.02,0.01]

function computeChange(price, moneyHanded){
    if (price<0 || moneyHanded<0 || moneyHanded<price) {
        return arrChange = [];
    }
    let changeToReturn =  moneyHanded - price;
    for (let i = 0; i < euro.length; i++) {
      while (changeToReturn-euro[i]>0) {
        changeToReturn-=euro[i]
        arrChange.push(euro[i])
      }
    }
    return arrChange
  }

  console.log(computeChange(12.30,50));