<!-- Slideshow Section -->
<div class="slideshow-container">
    <div class="mySlides fade">
        <img src="assets/images/sourdough-recipe.jpg" alt="Cookbook recipe for sourdough starter">
    </div>
    <!-- other slides here -->
</div>

<script>
// JavaScript code from earlier (showSlides and shuffleArray functions)
let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    let slidesArray = Array.from(slides); // Convert HTMLCollection to an array

    // Shuffle the slides array
    shuffleArray(slidesArray);

    // Hide all slides
    slidesArray.forEach(slide => {
        slide.style.display = "none";
    });

    slideIndex++;
    if (slideIndex > slidesArray.length) { slideIndex = 1 } // Loop to the first slide
    slidesArray[slideIndex - 1].style.display = "block"; // Show the current slide

    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

// Shuffle function to randomize the array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

// Initialize the slideshow
showSlides();
</script>
