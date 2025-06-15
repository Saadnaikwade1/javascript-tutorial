// function add() {
//   return a + b;
// }

//arrow  function syntax
const add = (a, b) => {
  return a + b;
};

// implicit function
const substract = (a, b) => a - b;

//can leave of () when single params
const double = (a) => a * 2;

// returning an object
const createobj = () => ({
  name: "Brad",
});

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (n) {
  console.log(n);
});

//arrow function in callback
numbers.forEach((n) => console.log(n));

console.log(add(4, 5));
console.log(substract(10, 5));
console.log(double(10));
console.log(createobj());
