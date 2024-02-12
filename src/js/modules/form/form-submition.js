import { hideProgressBar, showProgressBar } from "../../utils/progress-bar";
import { showErrorMessage, validateForm } from "./form-validation";
import { toast } from "../../utils/toast";

//const baseUrl = "http://localhost:9090";

export const submitForm = async (formData) => {
  return (await fetch(`/api/registration`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  })).json();

};

const displayErrorMessages = (fields) => {
  Object.entries(fields).forEach(([fieldName, errorMessage]) => {
    const input = form.querySelector(`[name="${fieldName}"]`);
    showErrorMessage(input, errorMessage);
  });
};

const form = document.getElementById("contact-form");
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  showProgressBar();



  if (validateForm(form)) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await submitForm(data);
      if (response.status === "success") {
        form.reset();
        toast.success(response.message);
      } else if (response.status === "error") {
        displayErrorMessages(response.fields);
        toast.error("Failed to register");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred during form submission");
    } finally {
      hideProgressBar();
    }
  } else {
    hideProgressBar()
  }
});

