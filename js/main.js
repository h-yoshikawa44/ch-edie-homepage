import '../css/style.css';
import 'focus-visible';
import 'wicg-inert';

const contents = document.getElementById('contents');
const menu = document.getElementById('menu');

/**
 * メニューを開く
 */
const openMenu = () => {
  menu.classList.add('menu--open');
  contents.setAttribute('inert', true);
  document.body.classList.add('overflow-hidden');
};

/**
 * メニューを閉じる
 */
const closeMenu = () => {
  menu.classList.remove('menu--open');
  contents.removeAttribute('inert', false);
  document.body.classList.remove('overflow-hidden');
};

window.addEventListener('DOMContentLoaded', () => {
  // ページ内リンクスクロール
  const anchorLinks = document.querySelectorAll(
    'nav#top-header-nav a[href^="#"], nav#footer-nav a[href^="#"]',
  );
  const anchorLinkList = Array.prototype.slice.call(anchorLinks);

  anchorLinkList.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.hash;
      const targetElement = document.querySelector(targetId);
      const targetOffsetTop =
        window.pageYOffset + targetElement.getBoundingClientRect().top;
      window.scrollTo({
        top: targetOffsetTop,
        behavior: 'smooth',
      });
    });
  });

  // メール送信フォーム（ダミー）
  const emailForms = document.querySelectorAll('form.js-join-form');
  const emailFormList = Array.prototype.slice.call(emailForms);

  emailFormList.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('メール送信（実際に送信はしていません）');
    });
  });

  // メニュー開閉
  const menuOpenBtn = document.getElementById('open-menu-btn');
  menuOpenBtn.addEventListener('click', openMenu);

  const menuCloseBtn = document.getElementById('close-menu-btn');
  menuCloseBtn.addEventListener('click', closeMenu);

  // メニューナビゲーションリンク
  const menuLinks = document.querySelectorAll('nav#menu-nav a[href^="#"]');
  const menuLinkList = Array.prototype.slice.call(menuLinks);

  menuLinkList.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
});

window.addEventListener('load', () => {
  document
    .getElementsByClassName('js-preload')[0]
    .classList.remove('js-preload');
});
