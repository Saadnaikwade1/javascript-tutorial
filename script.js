// const user='john'
// console.log(user);
// the above variable is declared in the others.js

//let use fe
(function () {
  const user = "jhon";
  console.log(user);
  const hello = () => console.log("hello from the IIFE");
  hello();
})();

//adding parameters to fe
(function (name) {
  console.log("hello " + name);
})("saad");

(function hello() {
  console.log("hello");
})();

