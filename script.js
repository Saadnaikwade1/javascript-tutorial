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

// const myString = 'developer';
// //solution 1
// let myNewString=myString.charAt(0).toUpperCase()+myString.substring(1)
// // let myNewString=myString.charAt(0).toUpperCase()+myString.substring(1)
// //solution 2
// myNewString=myString[0].toUpperCase()+myString.substring(1)
// //solution 3
// myNewString=`${myString[0].toUpperCase()}${myString.slice(1)}`
// console.log(myNewString);

//number
// let x = 5;
// const num = new Number(5.44);
// x = num.toString();
// x = num.toString().length;
// x = num.toFixed(2);
// x = num.toPrecision(3);
// x = num.toExponential(2);
// x = num.valueOf();
// x = Number.isInteger(num);
// x = Number.isNaN(num);
// x = Number.isFinite(num);
// x = num.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
// x=Number.MAX_VALUE
// x=Number.MIN_VALUE

// console.log(x);

// let x ;
// x=Math.sqrt(64);
// x=Math.pow(2, 3);
// x=Math.abs(-5);
// x=Math.round(4.7);
// x=Math.ceil(4.7);
// x=Math.floor(4.7);
// x=Math.min(2, 3, 4, 5, 6);
// x=Math.max(2, 3, 4, 5, 6);
// x=Math.random();
// x=Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
// console.log(x);

// //challenge
// const x=Math.floor(Math.random() * 100) + 1;
// const y=Math.floor(Math.random() * 50) + 1;
// sumOutput=`${x} + ${y} = ${x+y}`;
// differenceOutput=`${x} - ${y} = ${x-y}`;
// productOutput=`${x} * ${y} = ${x*y}`;
// quotientOutput=`${x} / ${y} = ${x/y}`;
// rmOutput=`${x} % ${y} = ${x%y}`;
// console.log(sumOutput);
// console.log(differenceOutput);
// console.log(productOutput);
// console.log(quotientOutput);
// console.log(rmOutput);

// // Date and Time
// let d;
// d = new Date();
// d = Date.toString();
// // d = new Date('2023-10-01');
// // d = new Date('2023-10-01T12:00:00');
// d = new Date("2023-10-01T12:00:00Z"); // UTC time
// d = new Date();
// d = d.getTime();
// d = d.valueOf(); // Get the current month (0-11)
// d=Math.floor(Date.now()/ 1000)// Get the number of days since January 1, 1970
// console.log(d);

//date mehtods
let x;
let d = new Date();
x = d.toString();
x = d.getTime();
x = d.getFullYear(); // Get the current year
x = d.getDate(); // Get the current day of the month (1-31)
x = d.getMonth() + 1; // Get the current month (1-12)
x = d.getMonth(); // Get the current month (0-11)
x = d.getDay(); // Get the current day of the week (0-6, where 0 is Sunday)
x = d.getHours(); // Get the current hour (0-23)
x = d.getMinutes(); // Get the current minutes (0-59)
x = d.getSeconds(); // Get the current seconds (0-59)
x = d.getMilliseconds(); // Get the current milliseconds (0-999)
x = d.getTimezoneOffset(); // Get the time zone offset in minutes
x = d.getUTCFullYear(); // Get the current year in UTC
x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`; // Format date as YYYY-MM-DD
x = Intl.DateTimeFormat("en-US").format(d);
x = Intl.DateTimeFormat("en-GB").format(d);
x = Intl.DateTimeFormat("default", { month: "long" }).format(d);
x = d.toLocaleDateString("default", {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric",
  hour:"numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  });

console.log(x);
