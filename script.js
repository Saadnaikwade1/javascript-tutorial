// /* Array Basics*/
// let x;
// //array literal
// const numbers = [1, 2, 3, 4, 5];
// //array constructor
// const fruits = new Array("apple", "banana", "cherry");
// x = numbers[0];
// x = numbers[1] + numbers[2];
// x = `my favarate fruit is ${fruits[1]}`;

// x = numbers.length;
// fruits[2] = "pear";
// x = fruits;
// // fruits.length=2
// fruits[3] = "stawberry";
// fruits[fruits.length] = "mosambi";
// fruits[fruits.length] = "blue beryy";
// console.log(x);

// //array methods
// const arr = [34, 55, 32, 53, 54, 90];
// arr.push(100);
// arr.pop();
// arr.unshift(99);
// arr.shift();
// arr.reverse();
// x = arr.includes(34);
// x = arr.indexOf(340); //if not present it will give return -1
// // x=arr.slice(1,4)
// // x=arr.splice(1,4)
// x = arr.splice(1, 4).reverse().toString().charAt(0);
// // console.log(x);

//nesting,concatinating,spread oprator
let x;
const fruits = ["apple", "pear", "orange"];
const berries = ["stawberry", "blueberry", "rasberry"];
// fruits.push(berries);
// x = fruits[3][1];
const allFruits = [fruits, berries];
x = allFruits[1][0];

//concating arr
x = fruits.concat(berries);

//spred oprator(...)
x = [...fruits, ...berries];

// //array flatten
// // const arr = [1, 2, [3, 4], 5, [6, 7], 8, 9];
// x = arr.flat();

// //static method on array object
// x = Array.isArray('hello');
// x=Array.from('12345')

// const a=1;
// const b=2;
// const c=3;
// x=Array.of(a,b,c);

// console.log(x);

// challenge1

const arr = [1,2,3,4,5];
arr.push(6);
arr.unshift(0);
arr.reverse()
console.log(arr);