//loop through an array
//for ... of loop
const items = ["book", "table", "chair", "kite"];
const users = [{ name: "Brad" }, { name: "david" }, { name: "sam" }];

// for(const item of items){
//   console.log(item);
// }

for (const user of users) {
  console.log(user.name);
}

//loop over string
const str = "Hello World!";
for (const ch of str) {
  console.log(ch);
}

//loop over map
const map = new Map();
map.set("name", "john");
map.set("age", 18);
for (const [k,v] of map){
  console.log(k,v  );
}


//for...in loop
const clrobj={
  cololr1:'red',
  cololr2:'black',
  cololr3:'blue',
}

for( const key in clrobj){
  console.log(key,clrobj[key]);
}

colorarr=['yellow','Blue','Black','red'];
for( const key in colorarr){
  console.log(colorarr[key]);
}