import BurgMenu from './meat-burguer-menu.png';

const renderMenu = () => {
  const content = document.querySelector('#content');
  const menu_section = document.createElement('div');
  menu_section.classList.add('menu-section');
  content.appendChild(menu_section);
  
  const main_content = document.createElement('div');
  main_content.classList.add('main-section');
  menu_section.appendChild(main_content);
  
  const header = document.createElement('header');
  main_content.appendChild(header);
  
  const nav = document.createElement('nav');
  header.appendChild(nav);
  
  const logo_wrapper = document.createElement('div');
  logo_wrapper.classList.add('logo-wrapper');
  nav.appendChild(logo_wrapper);
  
  // const logo_img = document.createElement('img');
  // logo_img.src = LogoImg;
  // logo_img.classList.add('logo');
  // logo_wrapper.appendChild(logo_img);
  
  const nav_wrapper = document.createElement('div');
  nav_wrapper.classList.add('nav-wrapper');
  nav.appendChild(nav_wrapper);
  //--
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
  
  //-- 
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
  
  const menu = document.createElement('div');
  menu.classList.add('menu');
  main_content.appendChild(menu);

  const menu_info = document.createElement('div');
  menu_info.classList.add('menu-info');
  menu_info.innerHTML = `<h1>Beef burguer</h1>
  <p>Incredible Handmade burger.</p>
  <h2> <b>8 USD </b> </h2>
  <button> <b> ADD TO CART </b> </button>`;
  menu.appendChild(menu_info);

  const display_pres = document.createElement('div');
  display_pres.classList.add('display-presentation');
  display_pres.innerHTML = `<img class="show-dish" src="${BurgMenu}" alt="" >
  <div class="next-prev">
    <span> &#9664; PREV  </span>
    <span>  NEXT &#9658;</span>
  </div>`;
  menu.appendChild(display_pres);

  const display_cat = document.createElement('div');
  display_cat.classList.add('display-category');
  display_cat.innerHTML = `<ul class="scroll-cat">
  <li> &uarr; </li>
  <li> PIZZA </li>
  <li> <b> BURGERS </b></li>
  <li> DESSERT </li>
  <li> &darr; </li>
</ul>`;
  menu.appendChild(display_cat);
  
}

export default renderMenu;