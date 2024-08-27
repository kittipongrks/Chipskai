
window.onload = function() {
    showSlides();
}

let slideIndex = 0;
    showSlides();


function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";   
}
    
function plusSlides(n) {
    slideIndex += n;
    if (slideIndex < 1) {
        slideIndex = document.getElementsByClassName("slides").length;
    } else if (slideIndex > document.getElementsByClassName("slides").length) {
        slideIndex = 1;
    }
    showCurrentSlide();
}
    
function showCurrentSlide() {
    let i;
    let slides = document.getElementsByClassName("slides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
}