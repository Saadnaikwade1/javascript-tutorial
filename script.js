// Calculator Challenge
function calculator(num1, num2, oprator) {
  let result;
  switch (oprator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      result='Invalid Operator';
  }
  console.log(result);
  return result;
}
calculator(2,3,'&');