const button = document.getElementById("submit-button");

button.addEventListener("click", (e) => {
    e.preventDefault();
   
    const reservationForm = document.getElementById("reservation-form")
    const contactForm = document.getElementById("contact-form");

    if (contactForm.style.display === "none") {
    // shows form
    contactForm.style.display = "block";
    reservationForm.style.display = "none";
    } else {
    // hides form
    contactForm.style.display = "none";
    reservationForm.style.display = "block";
    }
});
