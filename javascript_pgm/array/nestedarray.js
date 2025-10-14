//nested array
let a = [
  [3, 4, 5],
  [3, 9, 12, 8, 7],
  [8, 9, 2],
];
console.log(a.length);
console.log(a.flat().length);

// for (let i = 0; i < a.length; i++) {
//   for (let j = 0; j < a[i].length; j++) {
//     console.log(a[i][j]);
//   }
// }

// for (let i in a) {
//   for (let j in a[i]) {
//     console.log(a[i][j]);
//   }
// }

for (let row of a) {
  for (let el of row) {
    console.log(el);
  }
}
