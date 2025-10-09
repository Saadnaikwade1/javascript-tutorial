//find prime number form m to n
let m = 5,
  n = 33;
for (let i = m; i <= n; i++) {
  f = true;
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      f = false;
    }
  }
  if (f) {
    console.log(i);
  }
}
