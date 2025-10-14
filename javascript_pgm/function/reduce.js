//calculate sum of array of element
let a = [1, 2, 3, 4, 5, 6, 6, 7, 8];
let s = a.reduce((pre, el) => pre + el);
console.log(s);

//find maximum element from array
let max = a.reduce((x, y) => (x > y ? x : y));
console.log(max);
