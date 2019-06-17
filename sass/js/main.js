
document.addEventListener("DOMContentLoaded", setDivHeight);
window.addEventListener("resize", setDivHeight);
document.querySelector('#add-question-button').addEventListener('click', showMenu);
document.querySelector('#add-question-button2').addEventListener('click', showMenu2);
document.querySelector('#right-button-menu').addEventListener('click', showMenu3);

function setDivHeight() {
    if (window.innerWidth > 885) {
        const newHeight = window.innerHeight - document.getElementById('form-creator').offsetTop + 'px';
        const newHeightForEditor = window.innerHeight - (document.querySelector('.ql-toolbar').offsetTop + document.querySelector('.ql-toolbar').offsetHeight) + 'px';
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

function showMenu3() {
    console.log('prueba');
    const tooltip = document.querySelector('.form-creator .form-creator-container .fields-area .fields-container .field .field-content .tooltip .right-button-menu');
    console.log(tooltip);
    tooltip.style.display = 'block';
    tooltip.classList.add("smooth-intro");
}

// Quill


// Add fonts to whitelist
let Font = Quill.import('formats/font');
Font.whitelist = ['roboto', 'times-new-roman', 'arial', 'lato', 'montserrat'];
Quill.register(Font, true);

var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
  
    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction
  
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
    [{ 'color': ['black', 'grey', '#556270', '#4ECDC4', '#C44D58', '#FF6B6B', '#C7F464'] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': ['', 'roboto', 'times-new-roman', 'arial', 'lato', 'montserrat'] }],
    [{ 'align': [] }],
  
    ['clean']                                         // remove formatting button
  ];

var quill = new Quill('#editor', {
    modules: {
        toolbar: toolbarOptions
      },
    theme: 'snow'
  });

  console.log(quill);

var quill2 = new Quill('#editor2', {
    modules: {
        toolbar: toolbarOptions
      },
    theme: 'snow'
  });


// Modal 
var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

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

// Modal Conditional
var modal = document.querySelector(".modal-conditional");
var trigger = document.querySelector(".trigger-coditional");
var closeButton = document.querySelector(".close-button-conditional");

function toggleModalConditional() {
    modal.classList.toggle("show-modal");
}

function windowOnClickConditional(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

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

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

trigger.addEventListener("click", toggleModalConditional);
closeButton.addEventListener("click", toggleModalConditional);
window.addEventListener("click", windowOnClickConditional);

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


// Drag and drop

// List with handle
Sortable.create(listWithHandle, {
    handle: '.dragAndDropBotton',
    scrollSensitivity: 200,
    scroll: true,
    bubbleScroll: true,
    ghostClass: 'ghost',
    animation: 300,
    swapThreshold: 1,
    fallbackTolerance: 40,
    easing: "cubic-bezier(1, 0, 0, 1)",
    dragClass: "sortable-drag"
  });

// Full screen
const el = document.getElementById('editor-container');

document.querySelector('#expand-editor-button .icon').addEventListener('click', () => {
	if (screenfull.enabled) {
		screenfull.request(el);
	}
});