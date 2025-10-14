//Double every element in given array
a = [1, 2, 3, 4, 5, 6];
// let r = a.map((el) => el * 2);
// console.log(r);

//double even index posion
let r1 = a.map((el, index) => {
  if (index % 2 == 0) {
    return el * 2;
  } else {
    return el;
  }
});
a;
console.log(r1);
