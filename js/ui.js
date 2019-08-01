class UI {

    constructor() {}

    subMenuNavigation(e) {
        e.preventDefault();
        if (e.target.nodeName === 'LI') {
            document.querySelectorAll('.sub-menu__nav__button').forEach((button) => {
                if (button.classList.contains('sub-menu__nav__button--current')) {
                    const content = document.querySelector('#' + button.getAttribute('data-toogle'));
                    content.classList.add('lateral-ease-outro');
                    content.classList.remove('lateral-ease-intro');
                    setTimeout(function(){ content.style.display = 'none';}, 400); 
                }
                button.classList.remove('sub-menu__nav__button--current');
            });
    
            e.target.classList.add('sub-menu__nav__button--current');
            const content = document.querySelector('#' + e.target.getAttribute('data-toogle'));
            window.location.href = '#' + e.target.getAttribute('data-toogle');
            content.classList.remove('lateral-ease-outro');
            content.classList.add('lateral-ease-intro');
            setTimeout(function(){ content.style.display = 'block';}, 400);
        }

    }

    setDivHeight() {
        if (window.innerWidth > 885) {
            const newHeight = window.innerHeight - document.getElementById('form-creator').offsetTop + 'px';
            document.getElementById('form-creator').style.height = newHeight;
            // Remove listener to re-enable scroll
            window.removeEventListener('scroll', this.noScroll);
            document.body.style.overflow = 'visible';
            for (let i = 0; i < document.getElementsByClassName('button-filled--preview-document').length; i++ ) { 
                document.getElementsByClassName('button-filled--preview-document')[i].hidden = true
            }
            if (document.getElementById('scrollToTop')) {
                document.getElementById('scrollToTop').style.display = 'none';
            }
        } else {
            const newHeight = window.innerHeight - document.getElementById('form-creator').offsetTop + 'px';
            document.getElementById('form-creator').style.height = '100%';
            document.getElementById('fields-area').style.height = newHeight;
            document.getElementById('text-area').style.height = window.innerHeight + 'px';
            // add listener to disable scroll
            window.addEventListener('scroll', this.noScroll);
            document.body.style.overflow = 'hidden';
            for (let i = 0; i < document.getElementsByClassName('button-filled--preview-document').length; i++ ) { 
                document.getElementsByClassName('button-filled--preview-document')[i].hidden = false;
            }

        }
    }

    noScroll() {
        if (scrollPosition === 'top') {
            window.scrollTo(0, 0);
            document.getElementById('scrollToTop').style.display = 'none';
        } else {
            window.scrollTo(0, document.body.scrollHeight);
        }
    }
}

// Modal 
var modal;
var trigger;

function setModal() {
    // Modal 
    modal = document.querySelector(".modal");
    trigger = document.querySelector(".trigger");
    trigger.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);
}


function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}