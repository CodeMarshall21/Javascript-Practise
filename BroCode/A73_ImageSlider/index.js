// IMAGE SLIDER

const slider = document.querySelectorAll(".slides img");
const totalSlides = slider.length;
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
    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
    showSlide(slideIndex);
}

function nextSlide(){
    slideIndex = (slideIndex + 1) % totalSlides;
    showSlide(slideIndex);
}