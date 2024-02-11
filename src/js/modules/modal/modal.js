const openModalButton = document.getElementById('open-modal');
const closeModalButton = document.getElementById('close-modal');
const modalContainer = document.querySelector('.modal-container');
const body = document.querySelector('body');


openModalButton.addEventListener('click', () => {
  document.body.style.paddingRight = window.innerWidth - document.body.offsetWidth + 'px'
  modalContainer.classList.add('open');
  body.classList.add('modal-open');
});

closeModalButton.addEventListener('click', () => {
  document.body.style.paddingRight = "0"
  modalContainer.classList.remove('open');
  body.classList.remove('modal-open');
});