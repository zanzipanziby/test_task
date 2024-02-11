export function validateForm(form) {
  const inputs = form.querySelectorAll("input, textarea");

  let isValid = true;

  // Скрывает все сообщения об ошибках перед повторной валидацией
  inputs.forEach((input) => {
    hideErrorMessage(input);
  });

  inputs.forEach((input) => {
    if (input.getAttribute("name") === "name") {
      if (input.value.length < 3) {
        isValid = false;
        showErrorMessage(input, "Please enter at least 3 characters for the name.");
      }
    }

    if (input.getAttribute("name") === "email") {
      const emailRegex = /\S+@\S+\.\S+/;
      if (!emailRegex.test(input.value)) {
        isValid = false;
        showErrorMessage(input, "Please enter a valid email address.");
      }
    }



    if (input.tagName === "TEXTAREA") {
      if (input.value.trim() === "") {
        isValid = false;
        showErrorMessage(input, "Please enter a message.");
      }
    }
  });

  return isValid;
}


export function showErrorMessage(input, message) {
  const errorContainer = document.createElement("div");
  errorContainer.classList.add("error-message");
  errorContainer.textContent = message;

  input.classList.add("error");
  input.parentNode.appendChild(errorContainer);

}

export function hideErrorMessage(input) {
  const errorContainer = input.parentNode.querySelector(".error-message");

  if (errorContainer) {
    input.classList.remove("error");
    errorContainer.remove();
  }
}
