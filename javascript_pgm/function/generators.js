// Generators= to generate a sequence of values
function* fun(n) {
  for (let i = 1; i <= n; i++) {
    yield i;
  }
}
console.log([...fun(5)]);
