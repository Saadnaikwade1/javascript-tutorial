function gcd(a, b) {
  if (b == 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}
let a = [8, 4, 5];
console.log(gcd(...a));
