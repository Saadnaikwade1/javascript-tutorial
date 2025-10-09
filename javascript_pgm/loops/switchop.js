//arithmetic operation using switch
let a = 5,
  b = 8,
  ch = "-";
switch (ch) {
  case "+":
    console.log(a + b);
    break;
  case "-":
    console.log(a - b);
    break;
  case "*":
    console.log(a * b);
    break;
  case "/":
    console.log(a / b);
    break;
  case "%":
    console.log(a % b);
    break;

  default:
    console.log("NOT a opreation");
    break;
}
