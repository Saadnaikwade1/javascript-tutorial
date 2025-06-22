//dom- node relation
let output;
const parent = document.querySelector(".parent");
output = parent.childNodes;
output = parent.childNodes[0].textContent; //white space
output = parent.childNodes[0].nodeName;
output = parent.childNodes[3].textContent;
output = parent.childNodes[3].outerHTML;

output = parent.childNodes[3].innerText = "child One";
output = parent.childNodes[5].style.color = "red";

output = parent.firstChild;
output = parent.lasttChild;

parent.lastChild.textContent = "hello";

//parent node
const child = document.querySelector(".child");
output = child.parentNode;
output = child.parentElement;
child.parentNode.style.backgroundColor = "#ccc";
child.parentNode.style.padding = "10px";

//sibling
const secondItem = document.querySelector(".child:nth-child(2)");
output=secondItem;
output=secondItem.nextSibling;
output=secondItem.previousSibling;
console.log(output);
