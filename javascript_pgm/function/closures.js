//Closure function- outer fun data can be accible to its nested function so nested function is closure for outerfunction.
function fun() {
  let c = 0;
  function counter() {
    c++;
    console.log(c);
  }
  return counter;
}

let inc = fun();
inc();
inc();
inc();
inc();
