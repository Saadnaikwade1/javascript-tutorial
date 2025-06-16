// how the call stack works
//Hear one push and one out 
// function first(){
//   console.log('first...');
// }
// function second(){
//   console.log('second...');
// }
// function third(){
//   console.log('third...');
// }

// first();
// second();
// third();

// how the call stack works
//last in first out LIFO

function first(){
  console.log('first...');
  second();
}
function second(){
  console.log('second...');
  third();
}
function third(){
  console.log('third...');
}

first();

