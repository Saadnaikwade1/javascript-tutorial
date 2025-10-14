// hof-Higher order funtion
let area_cir = (r) => 3.14 * r * r;
let area_sqr = (r) => r * r;
let vol_cube = (c) => c ** 3;

let a = [1, 2, 3, 4, 5];
function hof(arr, fun) {
  let r = [];
  for (let s of arr) {
    r.push(fun(s));
  }
  console.log(r);
}

hof(a, area_cir);
hof(a, area_sqr);
hof(a, vol_cube);
