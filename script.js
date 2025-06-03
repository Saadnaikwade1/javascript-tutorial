//destructuring and Naming
const firstName = "John";
const lastName = "Deo";
const age = 30;

const person = {
  firstName,
  lastName,
  age,
};

console.log(person.firstName);

//destructuring
const todo = {
  id: 1,
  title: "Out of trash",
  user: {
    name: "john",
  },
};
const {
  id: todoId, //renaming
  title,
  user: { name }, //destructuring
} = todo;
console.log(todoId);

//destucture arrays
const numbers = [33, 34, 54, 56, 23, 67];
const [first, second, ...rest] = numbers;
console.log(first,second,rest);