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

// onToggle = () => {
//     // e.preventDefault(); 
//     const x = document.getElementById("navMenu");

//     if (x.className === "navigation") {
//         x.className += "responsive";
//     } else {
//         x.className = "navigation";
//     }
// }

// function onToggle() {
//     const x = document.getElementById("navMenu");

//     if (x.className === "navigation") {
//         x.className += "responsive";
//     } else {
//         x.className = "navigation";
//     }
// }

onSubmit = () => {
    alert("Thank you! Your reservation was submitted.")
}
