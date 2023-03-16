// Toogle Mobile Menu javascript
const menuBtn = document.querySelector('.menu-button');
const btnCloseNav = document.querySelector('.btn-close-nav');
const headerNavMobile = document.querySelector('.mobile-navigation');
// const navigationLinks = document.querySelector('.navigation-links');
const arrayBtnPopup = document.querySelectorAll('.btn-popup');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.add('hide');
  headerNavMobile.classList.remove('hide');
});

btnCloseNav.addEventListener('click', () => {
  menuBtn.classList.remove('hide');
  headerNavMobile.classList.add('hide');
});

// navigationLinks.addEventListener('click', (event) => {
//   if (event.target.matches('.port-link, .abt-link, .contact-link')) {
//     headerNavMobile.classList.add('hide');
//     menuBtn.classList.remove('hide');
//   }
// });

// const form = document.querySelector('.form-input');
// const [fullName, firstName, lastName, email, textArea] = form.elements;

const dataCards = [
  {
    id: 0,
    url: './assets/Snapshot-Portfolio.png',
    title: 'Project-1',
    description: ' Lorem ipsum dolor sit amet,.',
    tecnologies: {
      tech1: 'React',
      tech2: 'css',
      tech3: 'JavaScript',
      tech4: 'html',
    },
    linkVersion: 'https://www.google.com/',
    linkSource: 'https://github.com/dagmawiii03',
  },
  {
    id: 1,
    url: './assets/Snapshot-Portfolio.png',
    title: 'Project-2',
    description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, 
    nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl,
     eget aliquam nunc nisl eget nunc.`,
    tecnologies: {
      tech1: 'HTML',
      tech2: 'CSS',
      tech3: 'Javasctipt',
    },
    linkVersion: 'https://www.google.com/',
    linkSource: 'https://github.com/dagmawiii03',
  },
  {
    id: 2,
    url: './assets/Snapshot-Portfolio.png',
    title: 'Project-3',
    description: 'Lorem ipsum dolor .',
    tecnologies: {
      tech1: 'HTML',
      tech2: 'CSS',
      tech3: 'Javasctipt',
    },
    linkVersion: 'https://www.google.com/',
    linkSource: 'https://github.com/dagmawiii03',
  },
  {
    id: 3,
    url: './assets/Snapshot-Portfolio.png',
    title: 'Project-4',
    description: ' Lorem ipsum dolor sit amet, consectetur .',
    tecnologies: {
      tech1: 'HTML',
      tech2: 'CSS',
      tech3: 'Javasctipt',
    },
    linkVersion: 'https://www.google.com',
    linkSource: 'https://github.com/dagmawiii03',
  },
  {
    id: 4,
    url: './assets/Snapshot-Portfolio.png',
    title: 'Project-5',
    description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, 
    nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl,
     eget aliquam nunc nisl eget nunc.`,
    tecnologies: {
      tech1: 'HTML',
      tech2: 'CSS',
      tech3: 'Javasctipt',
    },
    linkVersion: 'https://www.google.com',
    linkSource: 'https://github.com/hendridg/',
  },
  {
    id: 5,
    url: './assets/Snapshot-Portfolio.png.jpg',
    title: 'Project-6',
    description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, 
    nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl,
     eget aliquam nunc nisl eget nunc.`,
    tecnologies: {
      tech1: 'HTML',
      tech2: 'CSS',
      tech3: 'Javasctipt',
    },
    linkVersion: 'https://www.google.com/',
    linkSource: 'https://github.com/dagmawiii03',
  },
];

const cardWorkDetailsMobile = (index) => `
  <article class="card-work-details-mobile">
          <button type="button" class="btn-close-details">
              <img src="./assets/Icon-Cancel.svg" alt="cancel icon">
          </button>
          <div class="card-image-details-mobile">
              <img src=${dataCards[index].url} alt="a guy with a backpack in mountain">
          </div>
          <div class="title-btn">
          <h2 class="card-title-mobile">
              ${dataCards[index].title}
          </h2>
          <div>
          <div class="card-button-mobile">
                  <a href=${dataCards[index].linkVersion} class="btn-card-details-mobile">
                  See Live
                  <img src="./assets/see_live_icon.svg" alt="see live icon">
                  </a>
                  <a href=${dataCards[index].linkSource} class="btn-card-details-mobile">
                  See Sources
                  <img src="./assets/github_white.svg" alt="see github icon">
                  </a>
          </div>
          </div>
          </div>
          <ul class="card-tags-mobile">
              <li class="tag-mobile">${dataCards[index].tecnologies.tech1}</li>
              <li class="tag-mobile">${dataCards[index].tecnologies.tech2}</li>
              <li class="tag-mobile">${dataCards[index].tecnologies.tech3}</li>
          </ul>
          <p class="card-paragraph-mobile">
            ${dataCards[index].description}
          </p>
          <script src="index.js"></script>
  </article>
  `;

// eslint-disable-next-line no-plusplus
for (let i = 0; i < arrayBtnPopup.length; i++) {
  arrayBtnPopup[i].addEventListener('click', () => {
    const cardWork = document.createElement('div');
    cardWork.innerHTML = cardWorkDetailsMobile(i);
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.appendChild(cardWork);
    document.body.appendChild(modal);
    const btnCloseDetailsMobile = document.querySelector('.btn-close-details');
    btnCloseDetailsMobile.addEventListener('click', async () => {
      document.body.removeChild(modal);
    });
  });
}

const form = document.querySelector('.form-input');
const emailInput = document.querySelector('input[name="email"]'); 
form.addEventListener('submit', function(event) {
  // Check if email is in lowercase
  if (emailInput.value === emailInput.value.toLowerCase()) {
    return true;
  } else {
    // Email is not in lowercase, prevent form submission and show error message
    event.preventDefault();
    const errorText = document.createElement('span');
    errorText.innerHTML = 'Email Address should be written in lower case';
    errorText.style.color = 'red';
    emailInput.parentNode.appendChild(errorText);
    return false;
  }
});
