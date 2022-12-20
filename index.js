const bodyEl=document.querySelector("body");

bodyEl.addEventListener("mousemove",(event)=>{
    const XPostion=event.offsetX;
    const YPostion=event.offsetY;
    const spanEl=document.createElement("span");
    spanEl.style.left =XPostion + "px";
    spanEl.style.top =YPostion + "px";
    const size=Math.random()*100;
    spanEl.style.width=size +"px";
    spanEl.style.height=size +"px";
    bodyEl.appendChild(spanEl);
    setTimeout(()=>{
        spanEl.remove();
    },3000)
});
