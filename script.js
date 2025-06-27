//Key-board event and key properties
const itemInput = document.getElementById("item-input");
// const onKeyPress = (e) => console.log("keypress");
// const onKeyUp = (e) => console.log("keyup");
const onKeyDown = (e) => {
  // key
  // if(e.key=="Enter"){
  //   alert('You Pressed Enter')
  // }

  // keyCode
  //https://keyjs.dev/#
  if (e.keyCode === 13) {
    alert("you pressed enter");
  }

  //code
  console.log(e.code);
  if (e.repeat) {
    console.log("You are Holding Down" + e.key);
  }
  // console.log("Shift:  " + e.shiftKey);
  // console.log("Control: " + e.ctrltKey);
  // console.log("Alt: " + e.altKey);

  if (e.shiftKey && e.key === "K") {
    console.log("You entered the shiftkey+k");
  }
};

// itemInput.addEventListener("keypress", onKeyPress);
itemInput.addEventListener("keydown", onKeyDown);
