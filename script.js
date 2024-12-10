// Slideshow functionality
let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // Hide all slides
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }  // Loop to the first slide
    slides[slideIndex - 1].style.display = "block";  // Show the current slide
    setTimeout(showSlides, 3000);  // Change slide every 3 seconds
}

// Initialize the slideshow
showSlides();