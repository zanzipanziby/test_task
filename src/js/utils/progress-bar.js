const progressBar = document.querySelector(".progress-bar");


export const showProgressBar = () => {
  progressBar.style.width = "100%";
  progressBar.classList.add("view");
};


export const hideProgressBar = () => {
  progressBar.style.width = "0%";
  progressBar.classList.remove("view");
};



