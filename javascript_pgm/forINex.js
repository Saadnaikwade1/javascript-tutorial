let a = [3, 4, 3, 7, 9, 5];
for (let i in a) {
  console.log(a[i]);
}
let obj = { name: "sam", age: 20 };
for (let p in obj) {
  console.log(`${p}=>${obj[p]}`);
}
console.log("=====================");
for (let el of a) {
  console.log(el);
}
