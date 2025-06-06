// IMAGE SLIDER

const slider = document.querySelectorAll(".slides img");

let intervalID = null;
let slideIndex = 0;

//initializeSlider()

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    slider[slideIndex].classList.add("displaySlide");
    intervalID = setInterval(nextSlide,3000);
}

function showSlide(slideIndex){
    console.log(slideIndex);
    slider.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slider[slideIndex].classList.add("displaySlide")
}

function prevSlide(){
    clearInterval(intervalID);
    console.log(`Slider stopped`)
    slideIndex = (slideIndex - 1 + 3) % 3;
    showSlide(Math.abs(slideIndex % 3));
}

function nextSlide(){
    slideIndex = (slideIndex + 1) % 3;
    showSlide(slideIndex % 3);
}