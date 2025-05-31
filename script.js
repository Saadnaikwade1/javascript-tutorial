// // value are stored on the stack
// const name='jhon'
// let age=20

// //refferece value are stored on the heap
// const person={
//     name:'Brad',
//     age:24
// }

// let newName=name
// let newperson=person
// newName='johnathan'
// console.log(name,newName);
// console.log(person, newperson);

// let ammount ='hello'
// ammount=parseInt(ammount)
// console.log(ammount,typeof ammount);
// let x;
// const name='john';
// const age=31;
// x='hello my name is '+name+' and I am '+age +' Years Old'

// //template litral
// x=`hello my name is ${name} and I am ${age} Years Old`
// console.log(x);
// let x;
// const s = new String("hello world");
// x = s.toLowerCase();
// x = s.toUpperCase();
// x = s.charAt(1);
// // x = s.indexOf("o");
// // x = s.substring(0, 4);
// // x = "     hello world";
// // x = x.trimStart();
// // x = s.replace("world", "john");
// // x = s.includes("helli");
// // x = s.valueOf();
// // x=s.split("")
// console.log(x);

const myString = 'developer';
//solution 1
let myNewString=myString.charAt(0).toUpperCase()+myString.substring(1)
// let myNewString=myString.charAt(0).toUpperCase()+myString.substring(1)
//solution 2
myNewString=myString[0].toUpperCase()+myString.substring(1)
//solution 3
myNewString=`${myString[0].toUpperCase()}${myString.slice(1)}`
console.log(myNewString);

