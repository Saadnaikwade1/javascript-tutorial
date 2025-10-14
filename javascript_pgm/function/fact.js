function fact(n) {
  let f = 1;
  for (let i = 1; i <= n; i++) {
    f = f * i;
  }
  return f;
}
console.log(fact(5));

//function expresion
let fact1 = function (n) {
  let f1 = 1;
  for (let i = 1; i <= n; i++) {
    f1 = f1 * i;
  }
  return f1;
};
console.log(fact1(4));

// arrow function
let fact2 = (n) => {
  let f2 = 1;
  for (let i = 1; i <= n; i++) {
    f2 = f2 * i;
  }
  return f2;
};
console.log(fact2(3));

//add
let add = (x, y) => x + y;
console.log(add(2, 2));
