//Event Bubbling
const button = document.querySelector("form button");
const div = document.querySelector("form:nth-child(2)");
const form = document.querySelector("form");

button.addEventListener("click", (e) => {
  alert("The button was clicked");
  e.stopPropagation();
});

div.addEventListener("click", () => {
  alert("The div was clicked");
});

form.addEventListener("click", () => {
  alert("Form was clicked");
});
document.body.addEventListener('click',()=>{
    alert('The body was clicked')
})