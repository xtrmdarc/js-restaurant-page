import BurgMenu from './meat-burguer-menu-shadow.png';

const renderMenu = () => {
  const mainContent = document.querySelector('#main-section');
  mainContent.className = '';
  mainContent.classList.add('main-section');
  mainContent.classList.add('menu-page');

  const menu = document.querySelector('#main-info');
  menu.className = '';
  menu.classList.add('menu');
  menu.innerHTML = '';

  const menuInfo = document.createElement('div');
  menuInfo.classList.add('menu-info');
  menuInfo.innerHTML = `<h1>Beef burguer</h1>
  <p>Incredible Handmade burger.</p>
  <h2> <b>8 USD </b> </h2>
  <button> <b> ADD TO CART </b> </button>`;
  menu.appendChild(menuInfo);

  const displayPres = document.createElement('div');
  displayPres.classList.add('display-presentation');
  displayPres.innerHTML = `<img class="show-dish" src="${BurgMenu}" alt="" >
  <div class="next-prev">
    <span> &#9664; PREV  </span>
    <span>  NEXT &#9658;</span>
  </div>`;
  menu.appendChild(displayPres);

  const displayCat = document.createElement('div');
  displayCat.classList.add('display-category');
  displayCat.innerHTML = `<ul class="scroll-cat">
    <li> &uarr; </li>
    <li> PIZZA </li>
    <li class="active"> <b> BURGERS </b></li>
    <li> DESSERT </li>
    <li> &darr; </li>
  </ul>`;

  menu.appendChild(displayCat);
};

export default renderMenu;
