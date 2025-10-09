let n = 345,
  s = 0;
for (; n != 0; ) {
  s = s + (n % 10);
  n = parseInt(n / 10);
}
console.log(s);
