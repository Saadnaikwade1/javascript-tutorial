//events
const clearbtn = document.querySelector("#clear");

function onclear() {
  const itemlist = document.querySelector("ul");
  const items = itemlist.querySelectorAll("li");

  // items.forEach((item) => item.remove());////deleting the element
  // itemlist.innerHTML=''
  while (itemlist.firstChild) {
    itemlist.removeChild(itemlist.firstChild);
  }
}

// //javascript event listeners
// clearbtn.onclick = function () {
//   alert("clear Items");
// };
// clearbtn.onclick = function () {
//   console.log('clear items');
// };

//addeventlistner()
// clearbtn.addEventListener("click", () => alert("clear Items"));
// clearbtn.addEventListener("click", () => console.log("clear Items"));
////hear we can handle both alert and console

clearbtn.addEventListener("click", onclear); //hear we use onclear as fun^

// setTimeout(()=>clearbtn.removeEventListener('click',onclear), 5000);
//after 5 sec the timout the clear button get disabled

// setTimeout(() => clearbtn.click(), 5000);
//hear after 5 sec the the clear btn alert come
