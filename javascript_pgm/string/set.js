let a = [2, 4, 6, 4, 3, 4, 5];
let s = new Set(a);
console.log(s);
console.log(new Array(...s));
console.log([...s]);
s.add(7);
console.log(s);
s.delete(2);
console.log(s);
