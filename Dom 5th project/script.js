var arr = [
    {
        dp: "https://images.unsplash.com/photo-1550916828-d3c29adfa2ff?w=500&auto=format & fit=crop& q=60 & ixlib=rb - 4.0.3 & ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGluc3RhJTIwZHB8ZW58MHx8MHx8fDA % 3D",
        story: "https://images.unsplash.com/photo-1611784728730-dc5291db9ee4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8"
    },
    {
        dp: "https://plus.unsplash.com/premium_photo-1664102191724-97e85d71a61a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym95fGVufDB8fDB8fHww",
        story: "https://plus.unsplash.com/premium_photo-1664102191725-eef23e373cd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wzfHx8ZW58MHx8fHx8"
    },
    {
        dp: "https://images.unsplash.com/photo-1523304108042-8ac30850c748?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1513807016779-d51c0c026263?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D"
    },
    {
        dp: "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?q=80& w=1472& auto=format& fit=crop & ixlib=rb - 4.0.3 & ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA % 3D % 3D",
        story: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
    },
    // new
     {
        dp: "https://images.unsplash.com/photo-1523304108042-8ac30850c748?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1513807016779-d51c0c026263?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D"
    },
    {
        dp: "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?q=80& w=1472& auto=format& fit=crop & ixlib=rb - 4.0.3 & ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA % 3D % 3D",
        story: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
    },
];

var storiyan = document.querySelector("#storiyan")

var clutter = ""

arr.forEach(function (elem, idx) {
    clutter += `<div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
    </div>`
});

storiyan.innerHTML = clutter;

storiyan.addEventListener("click", function (dets) {
   
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(function() {
         document.querySelector("#full-screen").style.display = "none"
    }, 3000)
});