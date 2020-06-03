const renderHome = () => {
  const content = document.querySelector('#content');

  const mainContent = document.querySelector('#main-section');
  mainContent.className = '';
  mainContent.classList.add('main-section');

  const mainInfo = document.querySelector('#main-info');
  mainInfo.className = '';
  mainInfo.classList.add('main-info');
  mainInfo.innerHTML = ` <h1>CRAZY DELICIOUS BURGERS</h1>
  <p>Handmade burgers will make re think the concept of how a burger shoud test like</p>`;

  if (!document.querySelector('#features')) {
    const featuresSection = document.createElement('section');
    featuresSection.id = 'features';
    featuresSection.classList.add('features');
    featuresSection.innerHTML = `
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
    content.appendChild(featuresSection);
  }
};

export default renderHome;