let add = document.querySelector("#btn");
let change = document.querySelector(".change");
let check = true;
add.addEventListener("click", function () {
    if (check== true) {
    change.style. color = "green";
    change.innerHTML = "Friend"; 
    btn.innerHTML = "Remove";     
    check = false;    
    } else {
     change.style. color = "red";
     change.innerHTML = "Stranger";
     btn.innerHTML = "Add Friends";
     check = true;
 }

});

