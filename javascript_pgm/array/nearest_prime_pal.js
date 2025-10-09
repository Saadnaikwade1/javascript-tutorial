let n = 12;
t = n - 1;
while (true) {
    // upside checkes..
  let f = true;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      f = false;
      break;
    }
  }
  if (f) {
    let m = n;
    let rev = 0;
    while (m > 0) {
      rev = rev * 10 + parseInt(m % 10);
      m = parseInt(m / 10);
    }

    if (rev === n) {
      console.log("prime pal no:", n);
      break;
    } else {
      n++;
    }
  } else {
    n++;
  }
  // --lower side checks..
  let f2 = true;
  for (let i = 2; i < t; i++) {
    if (t % i === 0) {
      f2 = false;
      break;
    }
  }
  if (f2) {
    let m = t;
    let rev = 0;
    while (m > 0) {
      rev = rev * 10 + parseInt(m % 10);
      m = parseInt(m / 10);
    }

    if (rev === t) {
      console.log("prime pal no:", t);
      break;
    } else {
      t--;
    }
  } else {
    t--;
  }
}
