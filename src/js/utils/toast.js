import Toastify from "toastify-js";
import "toastify-js/src/toastify.css"


export const toast = {
  success(text) {
    Toastify({
      text: text,
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #5DD721, #94DA72)"
      }
      //onClick: function(){} // Callback after click
    }).showToast();
  },
  error(text) {
    Toastify({
      text: text,
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #C51E1B, #D26967)"
      }
      //onClick: function(){} // Callback after click
    }).showToast();
  }
};