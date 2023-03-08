// Toogle Mobile Menu javascript
const menuBtn = document.querySelector('.menu-button');
const btnCloseNav = document.querySelector('.btn-close-nav');
const headerNavMobile = document.querySelector('.mobile-navigation');
const navigationLinks = document.querySelector('.navigation-links');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.add('hide');
  headerNavMobile.classList.remove('hide');
});

btnCloseNav.addEventListener('click', () => {
  menuBtn.classList.remove('hide');
  headerNavMobile.classList.add('hide');
});

navigationLinks.addEventListener('click', (event) => {
  if (event.target.matches('.port-link, .abt-link, .contact-link')) {
    headerNavMobile.classList.add('hide');
    menuBtn.classList.remove('hide');
  }
});