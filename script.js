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
const user = { name:'Brad'};
if (Object.keys(user).length > 0) {
  console.log("LIST USER ");
} else {
  console.log("no list user");
}

// loose Equality(==)
console.log(false === 0);
console.log('' === 0);
console.log(null === undefined);
