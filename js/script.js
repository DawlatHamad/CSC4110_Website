/* toggle icon navbar */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* Scroll Sections Active Link */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });

    /* Sticky Navbar */

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /* remove toggle icon and navbar when click navbar link (scroll) */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

/* Scroll Reveal */
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, project1-img, project2-img, project-img', { origin: 'bottom' });

/* Typed js */
const typed = new Typed('.multiple-text', {
    strings: ['DNR ^100', 'Do Not Resuscitate ^100'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop:true
});