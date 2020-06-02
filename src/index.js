import './styles.css';
import renderHome from './home.js';
import renderMenu from './menu.js';
import renderContact from './contact';
import renderLayout from './layout';

renderLayout({renderHome, renderMenu, renderContact});
renderHome();