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

// projects
const projectsData = [
  {
    id: 1,
    name: 'Project 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.',
    image: 'assets/Snapshoot-Portfolio.png',
    liveLink: 'https://www.google.com',
    githubLink: 'https://www.google.com',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 2,
    name: 'Project 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.',
    image: 'assets/Snapshoot-Portfolio.png',
    liveLink: 'https://www.google.com',
    githubLink: 'https://www.google.com',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 3,
    name: 'Project 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.',
    image: 'assets/Snapshoot-Portfolio.png',
    liveLink: 'https://www.google.com',
    githubLink: 'https://www.google.com',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 4,
    name: 'Project 4',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.',
    image: 'assets/Snapshoot-Portfolio.png',
    liveLink: 'https://www.google.com',
    githubLink: 'https://www.google.com',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 5,
    name: 'Project 5',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.',
    image: 'assets/Snapshoot-Portfolio.png',
    liveLink: 'https://www.google.com',
    githubLink: 'https://www.google.com',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 6,
    name: 'Project 6',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.',
    image: 'assets/Snapshoot-Portfolio.png',
    liveLink: 'https://www.google.com',
    githubLink: 'https://www.google.com',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
];
