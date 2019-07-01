class UI {

    constructor() {}

    subMenuNavigation(e) {
        e.preventDefault();

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
        content.classList.remove('lateral-ease-outro');
        content.classList.add('lateral-ease-intro');
        setTimeout(function(){ content.style.display = 'block';}, 400);

    }

    setDivHeight() {
        if (window.innerWidth > 885) {
            const newHeight = window.innerHeight - document.getElementById('form-creator').offsetTop + 'px';
            document.getElementById('form-creator').style.height = newHeight;
        }
    }
}