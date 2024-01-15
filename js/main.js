const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
};

/* swiper */

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: false,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

/* menu */

const header__burger = document.getElementById('header-burger');
const menu__main = document.getElementById('menu-main');
const menu__exit = document.getElementById('menu-exit')

header__burger.addEventListener('click', () => {
  menu__main.classList.toggle('active')
});

menu__exit.addEventListener('click', () => {
  menu__main.classList.remove('active')
});

/* search */

const btn__search = document.getElementById('btn-search');
const header__search = document.querySelector('.header__search');

btn__search.addEventListener('click', () => {
  header__search.classList.toggle('header--active')
})

/* about */

const btn_about = document.getElementById('btn-about');

btn_about.addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('header-about').classList.toggle('header__about--active');
});

/* catalog */

const btn__catalog = document.getElementById('btn-catalog');

btn__catalog.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.header__catalog').classList.toggle('header__catalog--active');
})

/* profile */

const btn__profile = document.getElementById('btn-profile');
const profile = document.querySelector('.modal-overlay');
const body = document.body;

btn__profile.addEventListener('click', (e) => {
  e._isClick = true;
  document.querySelector('.modal-overlay').classList.toggle('modal-overlay--visible')
});

document.querySelector('.header__authorization').addEventListener('click', function(e) {
  e._isClick = true;
});

body.addEventListener('click', function(e) {
 if (e._isClick == true) return;
 document.querySelector('.modal-overlay').classList.remove('modal-overlay--visible')
});

