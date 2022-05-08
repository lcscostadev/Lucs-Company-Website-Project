
// navbar scroll
const navbar = document.querySelector('.navbar');
// hamburger 
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu ul li');
// highlight nav scroll


openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

menu_items.forEach(item => {
    item.addEventListener('click', function () {
        close();
    })
})

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close() {
    mainMenu.style.top = '-100%';
}

// SESSÃO PARA ALTERAR SESSÕES NO SCROLL

window.addEventListener('scroll', fixedNav);

function fixedNav() {
    if (window.scrollY > navbar.offsetHeight + 1) {
        // se o scroll vertical for maior que o offset da altura da navbar + 150 então adicione a class active
        navbar.classList.add('active');
    } else {
        navbar.classList.remove('active');
    }

}


const toTop = document.querySelector('.to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        toTop.classList.add('active');
    } else {
        toTop.classList.remove('active');

    }
})

ScrollReveal({
    reset: true,
    distance: '50px',
    duration: 400,
    delay: 200
});

ScrollReveal().reveal('.hero-container, .services-container, .testimonials-container, .footer-container', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.trusting-memorial, .about-container, .contact-container', { delay: 500, origin: 'bottom' });

