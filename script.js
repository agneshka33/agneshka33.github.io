new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
          return `<button class="btn btn_round ${className}" aria-label="Переключение слайда"></button>`
      }
  },
});

let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.tabs__item');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

  tabsBtn.forEach(function(btn){ btn.classList.remove('tabs-nav__btn--active')});
  e.currentTarget.classList.add('tabs-nav__btn--active');

  tabsItem.forEach(function(element){ element.classList.remove('tabs__item--active')});
  document.querySelector(`[data-target="${path}"]`).classList.add('tabs__item--active');
  });
});

(() => {
  new Accordion(".js-accordion-container");
})();

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.header__nav__link')

burger.addEventListener('click',

  function() {
    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');
  })

menuLinks.forEach(function(el){
  el.addEventListener('click', function(){

    burger.classList.remove('bureger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');
  })

})

document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById('open-search-form').addEventListener('click', (e) =>{
    document.getElementById('search-form').classList.add('search-form_show')
  })
  document.getElementById('search-form-close').addEventListener('click', (e) =>{
    document.getElementById('search-form').classList.remove('search-form_show')
})
  document.getElementById('search-form').addEventListener('submit', (e) =>{
    e.preventDefault()
    })
})

