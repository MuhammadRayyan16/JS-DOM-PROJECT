var con = document.querySelector(".container");
var like = document.querySelector("i");

con.addEventListener("dblclick", function () {
    like.style.color = "red";
    like.style.transform = "translate(-50% , -50%) scale(1)";
    like.style.opacity = "4";
    setTimeout(() => {
    like.style.transform = "translate(-50% , -50%) scale(1.3)";
    like.style.opacity = "0"; 
    },1500);
})