import LogoImg from './diego_kings_logo.png';

const renderLayout = ({renderHome, renderMenu, renderContact}) => {

  const content = document.querySelector('#content');
  const main_content = document.createElement('div');
  main_content.id = 'main-section';
  main_content.classList.add('main-section');
  content.appendChild(main_content);

  const header = document.createElement('header');
  main_content.appendChild(header);
  
  const nav = document.createElement('nav');
  header.appendChild(nav);
  
  const logo_wrapper = document.createElement('div');
  logo_wrapper.classList.add('logo-wrapper');
  nav.appendChild(logo_wrapper);
  
  const logo_img = document.createElement('img');
  logo_img.src = LogoImg;
  logo_img.classList.add('logo');
  logo_wrapper.appendChild(logo_img);
  
  const nav_wrapper = document.createElement('div');
  nav_wrapper.classList.add('nav-wrapper');
  nav.appendChild(nav_wrapper);

  const left_nav = document.createElement('div');
  left_nav.classList.add('left-nav');
  nav_wrapper.appendChild(left_nav);
  
  const ul = document.createElement('ul');
  left_nav.appendChild(ul);
  
  const li_home = document.createElement('li');
  li_home.classList.add('menu-item');
  li_home.textContent = 'Home';
  ul.appendChild(li_home);
  
  const li_menu = document.createElement('li');
  li_menu.classList.add('menu-item');
  li_menu.textContent = 'Food Menu';
  ul.appendChild(li_menu);
  
  const li_contact = document.createElement('li');
  li_contact.classList.add('menu-item');
  li_contact.textContent = 'Contact';
  ul.appendChild(li_contact);
  
  const right_nav = document.createElement('div');
  right_nav.classList.add('right-nav');
  nav_wrapper.appendChild(right_nav);
  
  const ul_r = document.createElement('ul_r');
  right_nav.appendChild(ul_r);
  
  const li_account = document.createElement('li');
  li_account.classList.add('menu-item');
  li_account.textContent = 'My Account';
  ul_r.appendChild(li_account);
  
  const li_search = document.createElement('li');
  li_search.classList.add('menu-item');
  li_search.textContent = 'Search';
  ul_r.appendChild(li_search);

  const main_info = document.createElement('div');
  main_info.id = 'main-info';
  main_content.appendChild(main_info);

  function clearFooter() {
    if(document.querySelector('#features'))
    {
      document.querySelector('#features').remove();
    }
  }

  logo_img.addEventListener('click', () => {
    renderHome();
  });

  li_home.addEventListener('click', () => {
    renderHome();
  });

  li_menu.addEventListener('click', () => {
    clearFooter();
    renderMenu();
  }); 

  li_contact.addEventListener('click', () => {
    clearFooter();
    renderContact();
  }); 

  
}

export default renderLayout;