//logic and control flow
if (true) {
  console.log("This is true");
}
if (false) {
  console.log("this is not a true");
}
const x = 10;
const y = 5;

if (x > y) {
  console.log(`${x} is greaterthan ${y}`);
}

if (x===y){
  console.log(`${x} is equals to ${y}`);
}
else{
console.log(`${x} is not equals to ${y}`);
}

if(x!=y){
  const z=20;
  console.log(`${z} is ${z}`);
}

//shorthand for if 
if(x>y) console.log('x > y'),
console.log(`${x} is big`);

else console.log('x is < y');