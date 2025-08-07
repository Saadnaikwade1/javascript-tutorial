function shape(name) {
  this.name = name;
}

shape.prototype.logName=function(){
  console.log(`shapeName:${this.name}`);
}

//inherits shape prototypes
Rectangle.prototype=Object.create(shape.prototype);


function Rectangle(name, height, width) {
  shape.call(this, name);
  this.height = height;
  this.width = width;
}

function Circle(name, radius) {
  shape.call(this, name);
  this.radius = radius;
}
//inherits shape prototypes
Circle.prototype=Object.create(shape.prototype);

//set constroctor prototype
Rectangle.prototype.constructor=Rectangle;
Circle.prototype.constructor=Circle;

const rect = new Rectangle("rect 1", 10, 20);
const cir= new Circle('circle1',2);

console.log(rect);
console.log(cir);

rect.logName();
cir.logName();