//for loop
//for([initilise]; [condition]; [increcrement])

// for (i = 0; i <= 10; i++) {
//   if (i == 7) {
//     console.log("7 is MY lucky number");
//   } else {
//     console.log(i);
//   }
// }

// for (let i = 0; i <= 10; i++) {
//   console.log("Number", i);
//   for (let j = 1; j < 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// //loop through an array
// const names = ["Brad", "david", "sam", "john", "kiran"];
// for (let i = 0; i < names.length; i++) {
//   if (names[i] == "kiran") {
//     console.log(names[i] + " is best");
//   } else {
//     console.log(names[i]);
//   }
// }

//break
// for(let i = 0; i<20; i++){
//   if (i==15){
//     console.log('Breaking...');
//     break
//   }
//   console.log(i);
// }

//continue
// for (let i = 0; i <= 10; i++) {
//   if (i === 8) {
//     console.log("Skiping...8");
//     continue;
//   }

//   console.log(i);
// }

//while loop
// let i = 0;
// while (i <= 15) {
//   console.log("Number " + i);
//   i++;
// }

//loop over array
// const arr = [10, 20, 30, 40, 50, 80];
// let i=0;
// while (i < arr.length) {
//   console.log(arr[i]);
//   i++;
// }

//nesting while loop
// let i = 1;
// while (i <= 5) {
//   console.log("number " + i);
//   let j = 1;
//   while (j <= 5) {
//     console.log(`${i} * ${j} = ${i * j}`);
//     j++;
//   }
//   i++;
// }

//do-while loop
let i = 21;

do {
  console.log("Number " + i);
  i++;
} while (i <= 20);
 
