var slideIndex = 1;
$(document).ready(function () {
    showSlides(slideIndex);
})

function incrementSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function setSlide(s) {
    turnOnSlideshow();
    findSlide(s);
}

function turnOnSlideshow() {
    var slideshow = document.getElementsByClassName('slideshow-column');
    for(i = 0; i < slideshow.length; i++){
        slideshow[i].style.display = "block";
    }
    console.log(slideshow.length);
}

function findSlide(s) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" dot-active", "");
    }
    var slide = document.getElementById(s);
    slide.style.display = "block";
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    console.log("Slide index = " + slideIndex);

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" dot-active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " dot-active";
}