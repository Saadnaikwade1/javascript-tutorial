function Rectangle(name, height, width) {
  (this.name = name), (this.height = height), (this.width = width);
}

Rectangle.prototype.area = function () {
  return this.height * this.width;
};
Rectangle.prototype.perimeter = function () {
  return 2 * (this.height + this.width);
};

Rectangle.prototype.isSquare = function () {
  return this.width === this.height;
};
Rectangle.prototype.name = function (newName) {
  return (this.name = newName);
};

const rect1 = new Rectangle("rectangle 1", 10, 20);
const rect2 = new Rectangle("rectangle 2", 20, 20);
console.log(rect1);
console.log(rect1.area());
console.log(rect1.perimeter());
console.log(rect1.isSquare());
console.log(rect1.name);