// Toogle Mobile Menu javascript

const menu = document.querySelector('.mobileMenu');

const mobileMenu = document.querySelector('.menu-mobile');

const toggleMenu = () => {
  mobileMenu.classList.toggle('showMenu');
};

menu.addEventListener('click', () => toggleMenu());

mobileMenu.addEventListener('click', () => toggleMenu());
