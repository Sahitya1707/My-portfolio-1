'use strict';

const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.close');
const ulBar = document.querySelector('.hig-class');
const navBar = document.querySelector('.nav-bar');
menu.addEventListener('click', function () {
  menu.classList.toggle('v-class');
  closeMenu.classList.toggle('closeBtn');
  ulBar.classList.toggle('v-class');
  navBar.classList.toggle('h-nav');
});
