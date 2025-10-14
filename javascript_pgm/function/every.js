//check the given array contain all the element are +ve or not
let a = [5, 4, 2, 6, 3, -4];
let r = a.every((el) => el > 0);
console.log(r);

// check the array contain all the element are increasing order or not
let a1 = [1, 2, 3, 4, 5, 6, 37, 8];
let r1 = a1.every((el, ind, arr) => {
  if (ind != arr.length - 1) {
    return el <= arr[ind + 1];
  }
  return true;
});
console.log(`element in increasing order:${r1}`);

// let a1 = [1, 2, 3, 4, 5, 6, 7, 8];

// let r1 = a1.every((el, ind, arr) => ind === 0 || el >= arr[ind - 1]);

// console.log(`element in increasing order: ${r1}`);
