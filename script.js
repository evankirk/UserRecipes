let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all images
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1; // If we reach the end, start over
    }

    slides[slideIndex - 1].style.display = "block"; // Show current slide
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

showSlides(); // Start the slideshow when the page loads
