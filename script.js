//if else ,nested
const d = new Date(10, 30, 25, 6, 0, 0);
const hours = d.getHours();

//if else
if (hours < 12) {
  console.log("Good Morning");
} else if (hours < 18) {
  console.log("good afternoon");
} else {
  console.log("Good Night");
}

//Nested if else
if (hours < 12) {
  console.log("Good Morning");
  if (hours === 6) {
    console.log("wake-up!");
  }
} else if (hours < 18) {
  console.log("good afternoon");
} else {
  console.log("Good Night");
  if (hours >= 20) {
    console.log("zzz");
  }
}

if (hours>=7 && hours <15){
  console.log('Its Work Time');
}
if(hours===6 || hours===20){
  console.log('brush your teeth!');
}