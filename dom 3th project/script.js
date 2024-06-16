var main = document.querySelector("#main");
var cr = document.querySelector(".curcor");

main.addEventListener("mousemove", function (dets) {
    cr.style.left = dets.x + "px"; 
     cr.style.top = dets.y + "px"; 
});