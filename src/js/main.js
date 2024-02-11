import "toastify-js/src/toastify.css"
import { showErrorMessage, validateForm } from "./modules/form/form-validation";
import { submitForm } from "./modules/form/form-submition";
import { toast } from "./utils/toast";


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
        toast.success(response.message)
      } else if (response.status === "error") {
        displayErrorMessages(response.fields);
        toast.error('Failed to register')
      }
    } catch (error){
      console.error("Error:", error);
      toast.error("An error occurred during form submission")
    }
  }
});

function displayErrorMessages(fields) {
  Object.entries(fields).forEach(([fieldName, errorMessage]) => {
    const input = form.querySelector(`[name="${fieldName}"]`);
    showErrorMessage(input, errorMessage);
  });
}


