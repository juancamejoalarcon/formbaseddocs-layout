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