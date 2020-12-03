import menuTemplate from '../templates/menu.hbs';
import menuItems from '../menu.json';

const markup = menuTemplate(menuItems);
const container = document.querySelector('.js-menu');
container.innerHTML = markup;
