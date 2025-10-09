//Binary Search
let a = [2, 4, 5, 37, 43, 67, 98];
let lw = 0,
  up = a.length - 1;
let t = 5;
while (lw <= up) {
  let m = parseInt((lw + up) / 2);
  if (a[m] === t) {
    console.log(m);
    break;
  } else if (t > a[m]) {
    lw = m + 1;
  } else {
    up = m - 1;
  }
}
if (lw > up) {
  console.log(-1);
}
