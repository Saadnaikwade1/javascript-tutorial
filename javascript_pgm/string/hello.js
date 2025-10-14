let s = "hello to all";
console.log(s.length);

// for (let i = 0; i < s.length; i++) {
//   //   console.log(s[i]);
//   //   console.log(s.charAt(i));
//   //   console.log(s.at(i));
//   console.log(s.codePointAt(i));
// }

//to given string into tokans
console.log(s.split());
console.log(s.split(""));
console.log(s.split(" "));
console.log(s.split(" ", 2));
s = "13-4-2020";
console.log(s.split("-"));

//searching a substring
s = "hello to all";
console.log(s.includes("to"));
console.log(s.indexOf("ll"));
console.log(s.indexOf("ll", 5));
console.log(s.lastIndexOf("ll"));

console.log(s.toUpperCase());
console.log(s.toLowerCase());

//for replace substring
console.log(s.replace("ll", "aa"));
console.log(s.replaceAll("ll", "aa"));

//template string
let a = 5,
  b = 23;
console.log(`the sum of ${a}, ${b} is ${a + b}`);

//extract substring
console.log(s.slice(2));
console.log(s.substring(2, 7));
