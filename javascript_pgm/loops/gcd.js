// gcd of two number
let a = 50,
  b = 15;
while (b != 0) {
  let r = a % b;
  a = b;
  b = r;
}
console.log(a);
