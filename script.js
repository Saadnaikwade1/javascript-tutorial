//working with style and classes
const text = document.querySelector(".card");
const itemlist = document.querySelector(".item-list");
const item = itemlist.querySelectorAll("li");
function run() {
  //classname
  // console.log(itemlist.className);
  // text.className = "card dark";

  //classList
  // console.log(itemlist.classList);

  itemlist.classList.forEach((c)=> console.log(c))
  // text.classList.add('dark')
  // text.classList.remove('card')
  // text.classList.toggle('hidden')
  text.classList.replace('card','dark')

  //change style
  // itemlist.style.lineHeight='3'

  item.forEach((item,index)=>{
    item.style.color='red'
    if(index==2){
      item.style.color='green'
    }
  })
}

document.querySelector("button").onclick = run;
