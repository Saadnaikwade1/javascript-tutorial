//Extract all even nos from the given array
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let r = a.filter((el) => el % 2 == 0);
console.log(r);

// extract perfect square of given no
let r1 = a.filter((el) => {
  sqrt_el = parseInt(el ** 0.5);
  return sqrt_el * sqrt_el == el;
});
console.log(r1);
