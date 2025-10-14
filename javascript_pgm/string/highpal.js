//find highest pallindromic substring
let s = "abbcaacbbd";
function revstr(s) {
  let r = "";
  for (let i = 0; i < s.length; i++) {
    r = s[i] + r;
  }
  return r;
}

for (let k = s.length; k >= 1; k--) {
  for (let i = 0; i <= s.length - k; i++) {
    let sub = s.slice(i, i + k);
    if (sub == revstr(sub)) {
      console.log(sub);
      k = 0;
      break;
    }
  }
}
