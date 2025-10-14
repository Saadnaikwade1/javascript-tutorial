//adding existing property to the object
let emp = { id: 101, name: "amar", age: 22 };
emp.sal = 12000;
emp["place"] = "hyd";
// console.log(emp);
emp = { ...emp, dept: "it" };
// console.log(emp);
let x = "email";
let v = "abc@gamil.com";
emp = { ...emp, [x]: v };
// console.log(emp);

//deleting the property from the object
// delete emp.name;
// console.log(emp);

console.log(Object.keys(emp));
console.log(Object.values(emp));
console.log(Object.entries(emp));
