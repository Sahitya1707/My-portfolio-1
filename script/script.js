'use strict';

const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.close');
const ulBar = document.querySelector('.hig-class');
const navBar = document.querySelector('.nav-bar');
menu.addEventListener('click', function () {
  menu.classList.toggle('v-clas');
  closeMenu.classList.toggle('closeBtn');
  ulBar.classList.toggle('v-class');
  navBar.classList.toggle('h-nav');
});

const body = document.querySelector('body');
const sun = document.querySelector('.fa-sun-o');
const moon = document.querySelector('.fa-moon-o');
sun.addEventListener('click', function () {
  body.style.transition = '1s';
  body.classList.toggle('whiteMode');
  moon.classList.toggle('dis--opaN');
  // moon.classList.add('dis--opa');
  sun.classList.toggle('dis--opaN');
});

// moon.addEventListener('click', function () {
//   body.style.transition = '1s';
//   body.classList.remove('whiteMode');
//   moon.classList.add('dis--opaN');
//   sun.classList.remove('dis--opaN');
// });
// moon.addEventListener('click', function () {});

// const darkBtn = document.querySelector('.darkBtn');
// const linkWhite = document.querySelector('a');

// darkBtn.addEventListener('click', function () {
//   darkBtn.classList.toggle('active');

//   body.classList.toggle('darkMode');
// });
// // for active
// const ul = document.querySelector('.ul');
// const li = document.querySelector('.li');

// li.forEach(el => {
//   el.addEventListener('click', function () {
//     ul.querySelector('.active').classList('active');
//     el.classList.add('active');
//   });
// });

// this is for the form
// var form = document.getElementById('my-form');

// async function handleSubmit(event) {
//   event.preventDefault();
//   var status = document.getElementById('status');
//   var data = new FormData(event.target);
//   fetch(event.target.action, {
//     method: form.method,
//     body: data,
//     headers: {
//       Accept: 'application/json',
//     },
//   })
//     .then(response => {
//       if (response.ok) {
//         status.classList.add('success');
//         status.innerHTML = 'Thanks';
//         form.reset();
//       } else {
//         response.json().then(data => {
//           if (Object.hasOwn(data, 'errors')) {
//             status.innerHTML = data['errors']

//               .map(error => error['message'])
//               .join(', ');
//           } else {
//             status.classList.add('error');
//             status.innerHTML = 'Oops! There was a problem submitting your form';
//           }
//         });
//       }
//     })
//     .catch(error => {
//       status.innerHTML = 'Oops! There was a problem submitting your form';
//     });
// }
// form.addEventListener('submit', handleSubmit);
