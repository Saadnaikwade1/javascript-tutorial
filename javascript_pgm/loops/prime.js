let n = 10,
  f = true;
if (n <= 1) {
  f = false;
} else {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      f = false;
    }
  }
}
if (f) {
  console.log("prime");
} else {
  console.log("not prime");
}
