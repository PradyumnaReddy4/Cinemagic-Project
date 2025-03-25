document.addEventListener("DOMContentLoaded", function () {
    // Handle Trailer Button Click
    const trailerBtn = document.querySelector(".trailer-btn");
    if (trailerBtn) {
        trailerBtn.addEventListener("click", function () {
            const trailerUrl = trailerBtn.getAttribute("data-trailer");
            if (trailerUrl) {
                window.open(trailerUrl, "_blank"); // Open trailer in a new tab
            } else {
                console.error("Trailer URL not found!");
            }
        });
    }

    // Handle Book Now Button Click
    const bookBtn = document.querySelector(".book-btn");
    if (bookBtn) {
        bookBtn.addEventListener("click", function () {
            alert("Redirecting to booking page...");
            window.location.href = "booking.html"; // Redirect to booking page
        });
    }
});