function sayhello() {
  console.log("hello world!");
}
sayhello();

function add(num1, num2) {
  console.log(num1 + num2);
}
add(2, 3);
function substract(num1, num2) {
  return num1 - num2;
  console.log("helo");
}

const resut = substract(10, 5);
console.log(resut);

//parameter and argument
function registorUser(user) {
  // if (!user) {
  //   user = "bot";
  // }

  return user + " is registered";
}
console.log(registorUser(" john"));

//rest parameter
function sum(...numbers) {
  let total = 0;

  for (const num of numbers) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2, 3));

//object as params
function loginUser(user) {
  return `the user ${user.name} with the id of ${user.id} is logged in`;
}
const user = {
  id: 1,
  name: "john",
};

console.log(loginUser(user));
console.log(
  loginUser({
    id: 2,
    name: "david",
  })
);

//array as params
function getrandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);

  const items = arr[randomIndex];

  console.log(items);
}

getrandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
