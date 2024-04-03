/* 

Create a program that will re-use the Rectangle class you created previously. It should generate 1000 random instances of Rectangle with random positions and sizes. Then it will display all colliding rectangles amongst those that were generated that way.

*/

class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length){
        this.topLeftXPos = topLeftXPos
        this.topLeftYPos = topLeftYPos
        this.width = width
        this.length = length
    }
}

function collides(rectangle,otherRectangle) {
    if (rectangle.topLeftXPos < otherRectangle.topLeftXPos+otherRectangle.width &&
        rectangle.topLeftXPos+rectangle.width > otherRectangle.topLeftXPos &&
        rectangle.topLeftYPos < otherRectangle.topLeftYPos+otherRectangle.length &&
        rectangle.topLeftYPos + rectangle.length > otherRectangle.topLeftYPos) {
        return true
    }
}

let arrRect = [];

function generateRectangle() {
    for (let i = 0; i < 1000; i++) {
        let rectangle = new Rectangle(Math.floor(Math.random()*100), Math.floor(Math.random()*100), Math.floor((Math.random()*100)+1), Math.floor((Math.random()*100)+1));
        arrRect.push(rectangle)
    }
}

generateRectangle()
console.log(arrRect);

for (let i = 0; i < arrRect.length; i++) {
    for (let j = i + 1; j < arrRect.length; j++) {
        if (collides(arrRect[i], arrRect[j])) {
            console.log(`Collision entre le rectangle ${i} et le rectangle ${j}`);
        }
    }
    
}
