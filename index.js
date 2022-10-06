const button = document.getElementById("submit-button");

button.addEventListener("click", (e) => {
    e.preventDefault();
   
    const reservationForm = document.getElementById("reservation-form")
    const contactForm = document.getElementById("contact-form");

    if (contactForm.style.display === "none") {
    // 👇️ this SHOWS the form
    contactForm.style.display = "block";
    reservationForm.style.display = "none";
    } else {
    // 👇️ this HIDES the form
    contactForm.style.display = "none";
    reservationForm.style.display = "block";
    }
});
