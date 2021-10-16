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
});