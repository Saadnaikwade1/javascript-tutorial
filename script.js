//object literal
const person = {
  name: "john Deo",
  age: 30,
  isAdmin: true,
  adress: {
    street: "123 main",
    city: "baston",
    state: "MA",
  },
  hobbies: ["music", "sports"],
};

let x;
x = person.name;
x = person["age"];
x = person.adress.city;
x = person.hobbies;

person.name = "jane doe";
person["isAdmin"] = false;

delete person.age;
person.haschildren = true;

person.greet = function () {
  console.log(`Hello, My name is ${this.name}`);
};
person.greet();
const person2 = {
  "first name": "Brad",
  "last name": "Traversy",
};

x = person2["first name"];
console.log(x);

//spred and method of object
let y;
const todo = new Object();
todo.id = 1;
todo.name = "butter milk";
todo.complited = false;

//nested object litrral
const person3 = {
  adress: {
    coord: {
      lat: -4.2323,
      lang: 2.34,
    },
  },
};
y = person3.adress.coord.lang;

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { ...obj1, ...obj2 };
const obj4 = Object.assign({}, obj1, obj2);
y = obj4;

const todos = [
  { id: 1, name: "Buy Milk" },
  { id: 2, name: "Pickup kids from school" },
  { id: 3, name: "out of trash" },
];
y = todos[0].name;
y = Object.keys(todo);
y = Object.keys(todo).length;
y=Object.values(todo);
y=Object.entries(todo);
y=Object.hasOwn('age')

console.log(y);
