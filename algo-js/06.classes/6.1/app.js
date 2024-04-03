/*
Create a class named Circle with attributes xPos, yPos and radius. Add a method named move(xOffset, yOffset) that will adjust the position of the circle. Add a getter accessor named surface that will return the surface of the circle.

Test its method and accessors by modifying the values and checking if everything is consistent.
*/

class Circle{
    constructor(xPos,yPos, radius){
        this.xPos = xPos
        this.yPos = yPos
        this.radius = radius
    }
    get surface(){
        return Math.pow(this.radius,2)*3.14
    }
    moove(xOffSet, yOffSet){
        this.xPos+=xOffSet;
        this.yPos+=yOffSet;
        return [this.xPos, this.yPos]
    }
}

let circle1 = new Circle(1,1,5)
console.log(circle1.moove(4,2));
console.log(circle1.surface);

