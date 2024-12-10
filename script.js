let slideIndex = 0;
let slidesArray = [];

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    console.log(slides); // Logs all slide elements to the console
    
    // Convert HTMLCollection to an array
    slidesArray = Array.from(slides);
    
    // Shuffle the slides array
    shuffleSlides(slidesArray);
    
    // Hide all slides initially
    for (let i = 0; i < slidesArray.length; i++) {
        slidesArray[i].style.display = "none";
    }
    
    slideIndex++;
    if (slideIndex > slidesArray.length) { slideIndex = 1; } // Loop to the first slide
    
    // Show the current slide
    slidesArray[slideIndex - 1].style.display = "block"; 
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

// Shuffle the slides randomly
function shuffleSlides(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

// Initialize the slideshow
showSlides();
