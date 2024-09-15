function moveRandomEl(elm) {
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";  // random top position
    elm.style.left = Math.floor(Math.random() * 90 + 5) + "%"; // random left position
}

const moveRandom = document.querySelector("#move-random");

moveRandom.addEventListener("mouseenter", function(e) {
    moveRandomEl(e.target);  // correctly call moveRandomEl and pass the element
});
