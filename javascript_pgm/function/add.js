function add(x, y) {
  return x + y;
}
console.log(add(2, 3));

//IIFE
console.log(
  (function (x, y) {
    return x + y;
  })(3, 3)
);

// IIFE -arrow
console.log(
  ((x, y) => {
    return x + y;
  })(5, 5)
);
