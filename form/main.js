// 1. Get references to elements
const form = document.getElementById("ageForm");
const ageInput = document.getElementById("age");
const message = document.getElementById("message");

// 2. Add an event listener to the form
form.addEventListener("submit", function(event) {
  event.preventDefault(); // stop the form from refreshing the page

  
  const age = parseInt(ageInput.value);

  // 4. Validation logic
  if (age >= 18) {
    message.style.color = "green"; // success message in green
    message.textContent = "✅ You are eligible!";
  } else {
    message.style.color = "red"; // error message in red
    message.textContent = " You are not eligible. Must be 18 or older.";
  }
});
