import LogoImg from './diego_kings_logo.png';

const renderLayout = ({ renderHome, renderMenu, renderContact }) => {
  const content = document.querySelector('#content');
  const mainContent = document.createElement('div');
  mainContent.id = 'main-section';
  mainContent.classList.add('main-section');
  content.appendChild(mainContent);

  const header = document.createElement('header');
  mainContent.appendChild(header);

  const nav = document.createElement('nav');
  header.appendChild(nav);

  const logoWrapper = document.createElement('div');
  logoWrapper.classList.add('logo-wrapper');
  nav.appendChild(logoWrapper);

  const logoImg = document.createElement('img');
  logoImg.src = LogoImg;
  logoImg.classList.add('logo');
  logoWrapper.appendChild(logoImg);

  const navWrapper = document.createElement('div');
  navWrapper.classList.add('nav-wrapper');
  nav.appendChild(navWrapper);

  const leftNav = document.createElement('div');
  leftNav.classList.add('left-nav');
  navWrapper.appendChild(leftNav);

  const ul = document.createElement('ul');
  leftNav.appendChild(ul);

  const liHome = document.createElement('li');
  liHome.classList.add('menu-item');
  liHome.textContent = 'Home';
  ul.appendChild(liHome);

  const liMenu = document.createElement('li');
  liMenu.classList.add('menu-item');
  liMenu.textContent = 'Food Menu';
  ul.appendChild(liMenu);

  const liContact = document.createElement('li');
  liContact.classList.add('menu-item');
  liContact.textContent = 'Contact';
  ul.appendChild(liContact);

  const rightNav = document.createElement('div');
  rightNav.classList.add('right-nav');
  navWrapper.appendChild(rightNav);

  const ulR = document.createElement('ulR');
  rightNav.appendChild(ulR);

  const liAccount = document.createElement('li');
  liAccount.classList.add('menu-item');
  liAccount.textContent = 'My Account';
  ulR.appendChild(liAccount);

  const liSearch = document.createElement('li');
  liSearch.classList.add('menu-item');
  liSearch.textContent = 'Search';
  ulR.appendChild(liSearch);

  const mainInfo = document.createElement('div');
  mainInfo.id = 'main-info';
  mainContent.appendChild(mainInfo);

  function clearFooter() {
    if (document.querySelector('#features')) {
      document.querySelector('#features').remove();
    }
  }

  logoImg.addEventListener('click', () => {
    renderHome();
  });

  liHome.addEventListener('click', () => {
    renderHome();
  });

  liMenu.addEventListener('click', () => {
    clearFooter();
    renderMenu();
  });

  liContact.addEventListener('click', () => {
    clearFooter();
    renderContact();
  });
};

export default renderLayout;
