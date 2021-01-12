var slider = document.querySelector(".slider");
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");

prev.addEventListener("click", Slide);
next.addEventListener("click", Slide);

// counter
var counter = 0;
// size
// var size = 

checkBtn();

function Slide(e) {
    if (e.target.classList.contains("next")) {
        counter++;
        slider.style.transform = `translateX(-${counter * 390}px)`;
    } else {
        counter--;
        slider.style.transform = `translateX(-${counter * 390}px)`;
    }

    checkBtn();
}

function checkBtn() {
    if (counter < 8) {
        next.style.display = "block";
    } else {
        next.style.display = "none";
    }
    
    if (counter > 0) {
        prev.style.display = "block";
    } else {
        prev.style.display = "none";
    }
}