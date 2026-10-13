
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('nav');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let current = 'home';
    sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 150) current = sec.id;
    });
    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });

    
    menuIcon.classList.remove('fa-times');
    navbar.classList.remove('active');
});


navLinks.forEach(link => link.addEventListener('click', () => {
    menuIcon.classList.remove('fa-times');
    navbar.classList.remove('active');
}));

const words = ['Software Developer', 'Web Developer', 'UI/UX Designer', 'Front-End Developer', 'Back-End Developer'];
const target = document.querySelector('.typing-text span');
let w = 0, c = 0, deleting = false;

function type() {
    const word = words[w];
    target.textContent = word.substring(0, c);

    if (!deleting && c < word.length) { c++; setTimeout(type, 100); }
    else if (!deleting) { deleting = true; setTimeout(type, 1200); }
    else if (c > 0) { c--; setTimeout(type, 50); }
    else { deleting = false; w = (w + 1) % words.length; setTimeout(type, 300); }
}
type();