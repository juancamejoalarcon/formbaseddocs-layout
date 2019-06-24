// Modal 
var modal = document.querySelector(".modal-privacy");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button-privacy");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);