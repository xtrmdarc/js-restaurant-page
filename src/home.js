import LogoImg from './diego_kings_logo.png';

export const renderHome = () => {
  const content = document.querySelector('#content');

  const main_content = document.createElement('div');
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
  
  const main_info = document.createElement('div');
  main_info.classList.add('main-info');
  main_info.innerHTML = ` <h1>CRAZY DELICIOUS BURGERS</h1>
  <p>Handmade burgers will make re think the concept of how a burger shoud test like</p>`;
  main_content.appendChild(main_info);
  
  const features_section = document.createElement('div');
  features_section.innerHTML = `<section class="features">
    <div class="feature">
      <h3 class="feature-title">fast delivery</h3>
      <p class="description">Everything you order on Diego's Kings will be quickly delivered!</p>
    </div>
    <div class="feature">
      <h3 class="feature-title">fresh food</h3>
      <p class="description">We use the best ingredients to cook the best freshfood for you</p>
    </div>
    <div class="feature">
      <h3 class="feature-title">food variety</h3>
      <p class="description">In our menu you'll find a wide variety of Pizza, Crisped and Dessert</p>
    </div>
  </section>`;
  
  content.appendChild(features_section);
}
