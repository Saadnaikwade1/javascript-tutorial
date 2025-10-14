let ipr = document.querySelector("input");
let s = "";
let cal = (ch) => {
  if (ch == "AC") {
    s = "";
    ipr.value = s;
  } else if (ch == "DEL") {
    s = s.slice(0, s.length - 1);
    ipr.value = s;
  } else if (ch == "=") {
    ipr.value = eval(s);
    s = "";
  } else {
    s = s + ch;
    ipr.value = s;
  }
};
