import './styles.css';
import renderHome from './home';
import renderMenu from './menu';
import renderContact from './contact';
import renderLayout from './layout';

renderLayout({ renderHome, renderMenu, renderContact });
renderHome();