const registerBtn = document.
getElementById('register');
const container = document.
getElementById('container');

const loginBtn = document.
getElementById('login');

registerBtn.addEventListener('click',()=>
    {
        container.classList.add("active");
});
loginBtn.addEventListener('click' ,()=>
    {
        container.classList.remove("active");
    });


    let slideIndex = 1;
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
        setTimeout(showSlides, 5000); // Change image every 5 seconds
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


