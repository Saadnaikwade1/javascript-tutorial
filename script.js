//truthy and falsy
const x = "false";
if (x) {
  console.log("this is truthy");
} else {
  console.log("this is falsy");
}

// Truthy and falsy conveats
const children = 3;
if (!isNaN(children)) {
  console.log(`You have ${children} children`);
} else {
  console.log("please enter no of children");
}

// checking for empty Array
const post = ["post one"];
if (post.length > 0) {
  console.log("List posts");
} else {
  console.log("No post to list");
}

//Checking for Empty object
const user = { name: "Brad" };
if (Object.keys(user).length > 0) {
  console.log("LIST USER ");
} else {
  console.log("no list user");
}

// loose Equality(==)
console.log(false === 0);
console.log("" === 0);
console.log(null === undefined);

//logical oprator
const posts = ["post one", "post two"];
post.length > 0 && console.log(posts[0]);

// ||- will return first truthy value or last value
let b;
b = 10 || 20;
b = 0 || 20;
b = null || 0 || undefined;
console.log(b);

// ?? - will returns right side oprand when left side is null or undefined
let c;
c = 10 ?? 20;
console.log(c);

//Logical assignment oprator
// ||= returns right side value only left side is falsy
let a = null;
// if (!a) {
//   a = 10;
// }

// a=a||10;
a ||= 10;
console.log(a);

// &&= assings right side value if left side is truthy value

let bb = 10;
if (b) {
  bb = 20;
}

bb = bb && 20;
// bb &&= 20
console.log(bb);

// ??=  assings right side value if left side is null or undefined

let z = undefined;
// if (z===null || z=== undefined){
//   z=20;
// }

// z= z?? 30
z ??= 30;
console.log(z);

//Ternary oprator
const age = 20;
1;
age >= 18 ? console.log("You can vote!") : console.log("you can`t vote");

//assignig  condinal value to variable
const canVote = age >= 18 ? "You can vote!" : "you can`t vote";
console.log(canVote);

//multiple statement
const auth = false;
// let redirect;

// if(auth){
//   alert('Welcome to the dashboard')
//   redirect='/dashboard';
// }else{
//   alert("Access Denide");
//   redirect='/Login'

// }
const redirect=auth? (alert('Welcome to Dashboard'),'/dashboard'):
(alert('Access denide'),'/Login')
console.log(redirect);
