//min,max of an array
let a = [3, 54, 24, 5, 74, 9, 5, 43];
let min = (max = a[0]);
for (let el of a) {
  if (el > max) max = el;
  if (el < min) min = el;
}
console.log(`the min value is ${min}, max value is ${max}`);

// solution:2 Using the math module
console.log(Math.max(...a), Math.min(...a));
