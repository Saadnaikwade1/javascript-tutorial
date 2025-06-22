let output;
//get child element
const parent = document.querySelector(".parent");
output = parent.children;

output = parent.children[1];
output = parent.children[1].innerText;
output = parent.children[1].className;
output = parent.children[1].nodeName;
parent.children[1].innerText = "child two";
parent.children[1].style.color = "red";

parent.firstElementChild.innerText = "Child one";
parent.lastElementChild.innerText = "child three";

//get parent element from child
const child = document.querySelector(".child");
output = child.parentElement;
child.parentElement.style.border = "1px solid #ccc";
child.parentElement.style.padding = "10px";

//sibling element
const secondItem = document.querySelector(".child:nth-child(2)");
output = secondItem;
output = secondItem.nextElementSibling;
secondItem.nextElementSibling.style.color = "orange";
secondItem.previousElementSibling.style.color="green"
console.log(output);
