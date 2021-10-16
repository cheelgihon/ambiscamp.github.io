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
});