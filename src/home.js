import LogoImg from './diego_kings_logo.png';

const renderHome = () => {
  const content = document.querySelector('#content');

  const main_content = document.querySelector('#main-section');
  main_content.className = '';
  main_content.classList.add('main-section');

  const main_info = document.querySelector('#main-info');
  main_info.className = '';
  main_info.classList.add('main-info');
  main_info.innerHTML = ` <h1>CRAZY DELICIOUS BURGERS</h1>
  <p>Handmade burgers will make re think the concept of how a burger shoud test like</p>`;
  
  if(!document.querySelector('#features'))
  {
    const features_section = document.createElement('section');
    features_section.id = 'features';
    features_section.classList.add('features');
    features_section.innerHTML = `
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
      </div>`;
    content.appendChild(features_section);
  }
  
}

export default renderHome;