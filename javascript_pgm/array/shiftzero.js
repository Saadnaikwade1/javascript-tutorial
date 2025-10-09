//shift all zeros at end..
a = [2, 3, 0, 9, 0, 7, 0, 6, 9];
for (let i = 0, j = 0; i < a.length; i++) {
  if (a[i] != 0) {
    let x = a.splice(i, 1); //get element
    a.splice(j, 0, x[0]); //append at jth position
    j++;
  }
}
console.log(a);
