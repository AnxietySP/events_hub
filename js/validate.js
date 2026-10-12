// validate.js — handles form checks
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("regForm");
  const successMsg = document.getElementById("form-success");

  // 1. Clear / Reset Confirmation Popup
  const clearBtn = document.getElementById("clear-btn");
  if (clearBtn) {
    clearBtn.addEventListener("click", (event) => {
      const userConfirmed = confirm("Clear the whole form?");
      if (!userConfirmed) {
        event.preventDefault(); // Stops form from clearing if Cancel is clicked
      }
    });
  }

  // 2. Form Submission Validation
  if (form) {
    form.addEventListener("submit", (event) => {
      let valid = true;
      if (successMsg) successMsg.textContent = "";

      // Full name check
      const fullname = document.getElementById("fullname");
      const fullnameError = document.getElementById("fullnameError");
      if (fullname && fullname.value.trim() === "") {
        if (fullnameError) fullnameError.textContent = "Full name is required.";
        valid = false;
      } else if (fullnameError) {
        fullnameError.textContent = "";
      }

      // Email check
      const email = document.getElementById("email");
      const emailError = document.getElementById("emailError");
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email && !emailPattern.test(email.value.trim())) {
        if (emailError) emailError.textContent = "Enter a valid email address.";
        valid = false;
      } else if (emailError) {
        emailError.textContent = "";
      }

      // Phone check (8 digits)
      const phone = document.getElementById("phone");
      const phoneError = document.getElementById("phoneError");
      const phonePattern = /^[0-9]{8}$/;
      if (phone && !phonePattern.test(phone.value.trim())) {
        if (phoneError) phoneError.textContent = "Phone number must be 8 digits.";
        valid = false;
      } else if (phoneError) {
        phoneError.textContent = "";
      }

      // Event check
      const eventId = document.getElementById("event_id");
      const eventError = document.getElementById("eventError");
      if (eventId && eventId.value === "") {
        if (eventError) eventError.textContent = "Please choose an event.";
        valid = false;
      } else if (eventError) {
        eventError.textContent = "";
      }

      // Food preference check (radio buttons)
      const food = document.querySelector('input[name="food"]:checked');
      const foodError = document.getElementById("foodError");
      if (food === null) {
        if (foodError) foodError.textContent = "Please select a food preference.";
        valid = false;
      } else if (foodError) {
        foodError.textContent = "";
      }

      // Remarks check (optional, max 200 characters)
      const remarks = document.getElementById("remarks");
      const remarksError = document.getElementById("remarksError");
      if (remarks && remarks.value.length > 200) {
        if (remarksError) remarksError.textContent = "Remarks must be 200 characters or fewer.";
        valid = false;
      } else if (remarksError) {
        remarksError.textContent = "";
      }

      // ID card check (must be an image)
      const idCard = document.getElementById("id_card");
      const idCardError = document.getElementById("idCardError");
      if (idCard && idCard.files.length === 0) {
        if (idCardError) idCardError.textContent = "Please upload your student ID card.";
        valid = false;
      } else if (idCard && !idCard.files[0].type.startsWith("image/")) {
        if (idCardError) idCardError.textContent = "File must be an image.";
        valid = false;
      } else if (idCardError) {
        idCardError.textContent = "";
      }

      // Stop the form from submitting if anything failed
      if (!valid) {
        event.preventDefault();
      } else {
        event.preventDefault(); // No server backend yet
        if (successMsg) successMsg.textContent = "Registration submitted successfully!";
        form.reset();
      }
    });

    // Clear all error messages when the form is reset
    form.addEventListener("reset", () => {
      document.querySelectorAll(".error, [id$='Error']").forEach((span) => {
        span.textContent = "";
      });
      if (successMsg) successMsg.textContent = "";
    });
  }
});

console.log("validate.js is working!");