// Боковое меню
const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      menuLink = document.querySelectorAll('.menu__link'),
      overlay = document.querySelector('.menu__overlay'),
      closeElm = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeElm.addEventListener('click', () => {
    menu.classList.remove('active');
    document.body.style.overflow = '';
});

overlay.addEventListener('click', () => {
    menu.classList.remove('active');
    document.body.style.overflow = '';

});

menuLink.forEach(i => {
    i.addEventListener('click', () => {
     menu.classList.remove('active');
     document.body.style.overflow = '';

    });
});

window.addEventListener("keydown", (e) => {
    if (e.key == 'Escape') {
        menu.classList.remove('active');
        document.body.style.overflow = '';
    }
});
 
// progress

const counters = document.querySelectorAll('.skill__progress-counter'),
      lines = document.querySelectorAll('.skill__progress-line span');

counters.forEach((item, i) => {
    lines[i].style.width = item.textContent;
});

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (const smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', (e) => {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};
