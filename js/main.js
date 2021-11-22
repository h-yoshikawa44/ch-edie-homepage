import '../css/style.css';
import 'focus-visible';
import 'wicg-inert';

const contents = document.getElementById('contents');
document.body.classList;

const menuOpenBtn = document.getElementById('open-menu-btn');
menuOpenBtn.addEventListener('click', () => {
  document.getElementById('menu').classList.add('menu__open');
  contents.setAttribute('inert', true);
  document.body.classList.add('overflow-hidden');
});

const menuCloseBtn = document.getElementById('close-menu-btn');
menuCloseBtn.addEventListener('click', () => {
  document.getElementById('menu').classList.remove('menu__open');
  contents.removeAttribute('inert', false);
  document.body.classList.remove('overflow-hidden');
});
