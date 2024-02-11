import { showErrorMessage, validateForm } from "./modules/form/form-validation";
import { submitForm } from "./modules/form/form-submition";
const form = document.getElementById("contact-form");



form.addEventListener("submit", async (event) => {
  console.log("Form submit handler called");
  event.preventDefault()

  if (validateForm(form)) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await submitForm(data)
      if (response.status === "success") {
        form.reset();
        displaySuccessMessage(response.message);
      } else if (response.status === "error") {
        displayErrorMessages(response.fields);
      }
    } catch (error){
      console.error("Error:", error);
      displayErrorMessage("An error occurred during form submission.");
    }
  }
});

function displayErrorMessages(fields) {
  Object.entries(fields).forEach(([fieldName, errorMessage]) => {
    const input = form.querySelector(`[name="${fieldName}"]`);
    showErrorMessage(input, errorMessage);
  });
}

function displaySuccessMessage(message) {
  const successMessage = document.createElement("div");
  successMessage.classList.add("success-message");
  successMessage.textContent = message;

  form.appendChild(successMessage);
}

function displayErrorMessage(message) {
  const errorMessage = document.createElement("div");
  errorMessage.classList.add("error-message");
  errorMessage.textContent = message;

  form.appendChild(errorMessage);
}