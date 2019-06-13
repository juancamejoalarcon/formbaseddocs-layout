
document.addEventListener("DOMContentLoaded", setDivHeight);
window.addEventListener("resize", setDivHeight);


function setDivHeight() {
    if (window.innerWidth > 885) {
        const newHeight = window.innerHeight - document.getElementById('form-creator').offsetTop + 'px';
        const newHeightForEditor = window.innerHeight - (document.querySelector('.toolbar-fill-form').offsetTop + document.querySelector('.toolbar-fill-form').offsetHeight) + 'px';

        // .ql-toolbar ql-snow
        document.getElementById('form-creator').style.height = newHeight;
        // document.getElementById('information').style.height = newHeight;
        document.getElementById('editor').style.height = newHeightForEditor;
    }
}

function showMenu() {
    const tooltip = document.querySelector('#form-creator .form-creator-container .fields-area .tooltip .add-question-menu');
    tooltip.style.display = 'block';
    tooltip.classList.add("smooth-intro");
}

function showMenu2() {
    const tooltip = document.querySelector('.form-creator .form-creator-container .fields-area .tooltip .add-question-menu2');
    tooltip.style.display = 'block';
    tooltip.classList.add("smooth-intro");
}


// Quill




// Modal indications
var modalIndications = document.querySelector(".modal-indications");
var triggerIndications = document.querySelector(".trigger-indications");
var closeButtonIndications = document.querySelector(".close-button-indications");

function toggleModalIndications() {
    modalIndications.classList.toggle("show-modal");
}

function windowOnClickIndications(event) {
    if (event.target === modal) {
        toggleModal();
    }
}


triggerIndications.addEventListener("click", toggleModalIndications);
closeButtonIndications.addEventListener("click", toggleModalIndications);
window.addEventListener("click", windowOnClickIndications);

// UI

const menu = document.querySelector('.sub-menu-nav'),
    menuLinks = document.querySelectorAll('.sub-menu-button'),
    contentSection = document.querySelector('.container'),
    contentDivs = document.querySelectorAll('.content');

menu.addEventListener('click', function(e){

    e.preventDefault();
    if (e.target.tagName === 'A') {
        if (!e.target.classList.contains('current')) {
            // Remove class current from menu buttons
            menuLinks.forEach((button) => {
                button.parentElement.classList.remove('current');
            });
            e.target.parentElement.classList.add('current');
            const target = e.target.getAttribute('href');
            contentSection.classList.add("animation-outro");
            contentSection.classList.remove("animation-intro");
            setTimeout(function(){ 
                contentDivs.forEach((div) => {
                
                    if (div.id === target) {
                        div.style.display = 'flex';
                    } else {
                        div.style.display = 'none';
                    }
                });
                contentSection.classList.add("animation-intro");
                contentSection.classList.remove("animation-outro");
            }, 400);
        }
    }
});

