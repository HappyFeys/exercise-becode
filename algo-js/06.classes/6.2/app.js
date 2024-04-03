/*
Create a class name Rectangle with attributes topLeftXPos, topLeftYPos, width and length. Add a method named collides(otherRectangle) that returns true only if the current rectangle collides with otherRectangle.

Test the collides(otherRectangle) method by using multiple test cases.
*/

class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length){
        this.topLeftXPos = topLeftXPos
        this.topLeftYPos = topLeftYPos
        this.width = width
        this.length = length
    }
}

let rectangle1 = new Rectangle(10,10,2,2)
let rectangle2 = new Rectangle(5,2,7,1)




function collides(rectangle,otherRectangle) {
    if (rectangle.topLeftXPos < otherRectangle.topLeftXPos+otherRectangle.width &&
        rectangle.topLeftXPos+rectangle.width > otherRectangle.topLeftXPos &&
        rectangle.topLeftYPos < otherRectangle.topLeftYPos+otherRectangle.length &&
        rectangle.topLeftYPos + rectangle.length > otherRectangle.topLeftYPos) {
        return true
    }
}

if (collides(rectangle1, rectangle2)) {
    console.log("les rectangles sont en collisions");
}
else{
    console.log("les rectangles ne sont pas en collisions");
}