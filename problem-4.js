/**
 * Define a base class Shape with a method draw. Create two subclasses Circle and Rectangle that override the draw method. Demonstrate polymorphism using instances of these classes
 */
class Shape{
    constructor (shapeName){
        this.shapeName = shapeName;
    }
    draw(){
        console.log("dwaing shape is :", this.shapeName);
    }
}
class Circle extends Shape{
constructor(shapeName, radius) {
    super(shapeName)
    this.radius= radius;
}
draw(){
    console.log("dwaing shape is :", this.shapeName);
}

}

class Rectangle extends Shape{
    constructor(shapeName, height, width){
        super(shapeName);
        this.height= height;
        this.width= width;
    }
    draw(){
        console.log("dwaing shape is :", this.shapeName);
    }
}

const shape1= new Shape("Circle", 5)
const shape2 = new Shape("Rectangle", 8, 8)
shape1.draw()
shape2.draw()