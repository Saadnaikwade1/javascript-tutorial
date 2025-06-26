const logo = document.querySelector("img");

const onclick = () => console.log("click event");
const onDoubleclick = () => {
  if (document.body.style.backgroundColor !== "purple") {
    document.body.style.backgroundColor = "purple";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
};
const onRightClick = () => console.log("right click event");
const onMouseDown = () => console.log("mouse down event");
const onMouseUp = () => console.log("mouse up event");
const onMouseWheel = () => console.log("mouse wheel event");
const onMouseover=()=> console.log('on Mouse over');
const onMouseOut=()=> console.log('on Mouse Out');
const onDragStart=()=>console.log('drag start event');
const onDrag=()=>console.log('drag event');
const onDragEnd=()=>console.log('drag end event');

//event listener
logo.addEventListener("click", onclick);
logo.addEventListener("dblclick", onDoubleclick);
logo.addEventListener("contextmenu", onRightClick);
logo.addEventListener("mousedown", onMouseDown);
logo.addEventListener("mouseup", onMouseUp);
logo.addEventListener("wheel", onMouseWheel);
logo.addEventListener("mouseover",onMouseover);
logo.addEventListener("mouseout",onMouseOut);
logo.addEventListener("dragstart",onDragStart);
logo.addEventListener("drag",onDrag)
logo.addEventListener("dragend",onDragEnd)
