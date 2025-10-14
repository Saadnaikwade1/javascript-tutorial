const users = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", age: 25 },
  { id: 2, name: "Bob Smith", email: "bob@example.com", age: 30 },
  { id: 3, name: "Charlie Brown", email: "charlie@example.com", age: 28 },
  { id: 4, name: "Diana Prince", email: "diana@example.com", age: 32 },
];

for (let obj of users) {
  console.log(obj);
}
console.log("------------------------");
for (let obj of users) {
  if (obj.age > 30) {
    console.log(obj);
  }
}

//TO know pn in obj
let obj = { id: 4, name: "Diana Prince", email: "diana@example.com", age: 32 };
console.log("name" in obj);
console.log("id" in obj);
// console.log(object);
