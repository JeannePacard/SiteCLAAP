var modal = document.querySelector(".team-resume");
var trigger = document.querySelector(".team-photo");
var closeButton = document.querySelector(".team-resume-close");

function toggleModal() {
  modal.classList.toggle("opened");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
