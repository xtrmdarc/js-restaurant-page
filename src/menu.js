import BurgMenu from './meat-burguer-menu-shadow.png';

const renderMenu = () => {
  const content = document.querySelector('#content');

  const main_content = document.querySelector('#main-section');
  main_content.className = '';
  main_content.classList.add('main-section');
  main_content.classList.add('menu-page');

  const menu = document.querySelector('#main-info');
  menu.className = '';
  menu.classList.add('menu');
  menu.innerHTML = '';

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
  <li class="active"> <b> BURGERS </b></li>
  <li> DESSERT </li>
  <li> &darr; </li>
</ul>`;
  menu.appendChild(display_cat);
  
}

export default renderMenu;