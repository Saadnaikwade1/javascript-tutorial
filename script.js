//Dom selecotors--single elements

console.log(document.getElementById("app-title"));
console.log(document.getElementById("app-title").id);
console.log(document.getElementById("app-title").className);
console.log(document.getElementById("app-title").getAttribute("id"));

// set attribute
document.getElementById("app-title").title = "shopping list";
document.getElementById("app-title").setAttribute("class", "title");

// if we want to use var to store the above and use varible
const title = document.getElementById("app-title");

// get or change content
console.log(title.textContent);
title.textContent = "hello word";
title.innerText = "hello again";
title.innerHTML = "<strong>Shopping List</strong>";

// change style
title.style.color = "red";
title.style.backgroundColor = "black";
title.style.padding = "10px";
title.style.borderRadius = "10px";

// document.querySelector()
console.log(document.querySelector("h1"));
console.log(document.querySelector("#app-title"));
console.log(document.querySelector(".container"));
console.log(document.querySelector('input[type="text"]'));
console.log(document.querySelector("li:nth-child(2)").innerText);

const seconditem = document.querySelector("li:nth-child(2)");
seconditem.innerText='apple juice'
seconditem.style.color='red'

//use this method on other element
const list=document.querySelector('ul')
console.log(list);
const firstitem=list.querySelector('li')
firstitem.style.color='blue'

