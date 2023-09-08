const crs=document.querySelector(".crs");
const main=document.querySelector("#main");

main.addEventListener("mousemove",function(e){
    crs.style.left=e.x+"px";
    crs.style.top=e.y+"px";
})