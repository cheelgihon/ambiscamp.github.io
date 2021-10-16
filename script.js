<<<<<<< HEAD
// nav animation
const nav = document.querySelector('nav')
const navHide = document.querySelector('.hide-nav')
const navTransparent = document.querySelector('.nav-transparent')

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY
    const width = window.innerWidth
    if (scrolled >= 20 ) {
        navHide.classList.add('position-fixed')
        navHide.style.top = '0';
        navHide.style.transition = '.5s';
        navTransparent.style.transition = '.5s';
    } else {
        navHide.style.top = '-75px';
        navTransparent.style.display = 'block';
        navHide.style.transition = '.5s';
        navTransparent.style.transition = '.5s';
        navHide.classList.remove('fixed-top')
        navTransparent.classList.add('fixed-top')
    }
=======
// nav animation
const nav = document.querySelector('nav')
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY
    const width = window.innerWidth
    if (scrolled >= 60 && width > 999 ) {
        nav.style.backgroundColor = 'white';
        nav.style.transition = '.5s';
    } else if (width > 999) {
        nav.style.backgroundColor = 'transparent';
        nav.style.transition = '.5s';
    }
>>>>>>> 595522587859b7e9784efaacf33c4071d2523115
});