//check the three number is sorted or not
let [a, b, c] = [6, 4, 5];
if (a > b && a > c) {
  if (b > c) {
    console.log(c, b, a);
  } else {
    console.log(b, c, a);
  }
} else if (b > c) {
  if (a > c) {
    console.log(c, a, b);
  } else {
    console.log(a, c, b);
  }
} else {
  if (a > b) {
    console.log(b, a, c);
  } else {
    console.log(a, b, c);
  }
}
