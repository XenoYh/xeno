'use strict';

///////////////////////////////////////
const allButtons = document.getElementsByTagName('button');
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');

///////////////////////////////////////
// Modal window
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};



const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

///////////////////////////////////////
// smooth scroll
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log('in relative to the viewport', s1coords);

  console.log(e.target.getBoundingClientRect());

  // console.log('Current Scroll (X/Y)', window.pageXOffset, window.pageYOffset)
  console.log('Current Scroll (X/Y)', window.scrollX, window.scrollY);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // scrolling
  // window.scrollTo(s1coords.left + window.scrollX, s1coords.top + window.scrollY);
  // window.scrollTo({
  //   left: s1coords.left + window.scrollX,
  //   top: s1coords.top + window.scrollY,
  //   behavior: 'smooth'
  // })

  // modern way of scrolling
  section1.scrollIntoView({ behavior: 'smooth' });
});

// Page Navigation

// document.querySelectorAll('.nav__link').forEach(function(el){
//   el.addEventListener('click', function(e){
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     // if(e.target.contains('nav__link'))
//     document.querySelector(id).scrollIntoView({behavior: 'smooth'})
//   })
// })
// using event delegation approach
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  // matching strategy
  // console.log(e.target)
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

///////////////////////////////////////
// Tabbed Component

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(e.target, clicked);

  // Guard Clause
  if (!clicked) return;

  // Remove Active Classes
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  tabsContent.forEach(content =>
    content.classList.remove('operations__content--active')
  );

  // Activate Tabs
  clicked.classList.add('operations__tab--active');

  // Activate Content
  console.log(clicked.dataset.tab);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//////////////////////////////////////////////////////////
// Menu fade animation
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    console.log(link);
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
// passing "arguments" into handlers
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

//////////////////////////////////////////////////////////
// sticky navigation
// const initialCoords = section1.getBoundingClientRect();

// window.addEventListener('scroll', function(){
//   // console.log(window.scrollY);
//   if(window.scrollY > initialCoords.top)
//   nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// })

//using the intersection observer API
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

//////////////////////////////////////////////////////////
// reveal section
const reveal = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(reveal, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(section => {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden')
});

//////////////////////////////////////////////////////////
// lazy-loading images;

const imgTargets = document.querySelectorAll('img[data-src]');
const loadImg = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry.target)
  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

//////////////////////////////////////////////////////////
// slider
const slider = function (){
  
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotContainer = document.querySelector('.dots');

// functions
const createDots = function () {
  slides.forEach((_, i) => {
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide='${i}'></button>`
    );
  });
};

const activateDots = function (slide) {
  document.querySelectorAll('.dots__dot').forEach(dot => {
    dot.classList.remove('dots__dot--active');
  });
  document
    .querySelector(`.dots__dot[data-slide = '${slide}']`)
    .classList.add('dots__dot--active');
};

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };
  
  let curSlide = 0;
  let maxSlide = slides.length;
  
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    
    goToSlide(curSlide);
    activateDots(curSlide);
  };
  
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    
    goToSlide(curSlide);
    activateDots(curSlide);
  };
  
  const init = function (){
    goToSlide(0);
    createDots();
    activateDots(0);
}
init();

// event handlers
dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains(`dots__dot`)) {
    const slide = e.target.dataset.slide;
    goToSlide(slide);
    activateDots(slide);
  }
});

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

document.addEventListener('keydown', function (e) {
  // console.log(e)
  if (e.key === 'ArrowLeft') prevSlide();
  e.key === 'ArrowRight' && nextSlide();
});
}
slider();
//////////////////////////////////////////////////////////
// LECTURES

// selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

// const header = document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('.btn'));

//Creating and inserting elements
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookie for improved functionality and analytics'
message.innerHTML =
  'We use cookie for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));
header.before(message);
header.after(message);

// Delete Element
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // old ways
    // message.parentElement.removeChild(message);
    // new way
    message.remove();
  });

// Style
message.style.backgroundColor = '#37383d';
message.style.width = '120%';
message.style.height = '43.6667px';
console.log(message.style.height);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);
console.log(message.style.height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';
console.log(getComputedStyle(message).height);

document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attribute
const logo = document.querySelector('.nav__logo');
console.log(logo.src);
console.log(logo.alt);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

// Non-standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// data attribute
console.log(logo.dataset.versionNumber);

// classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c');

// // Events and events handling
// const h1 = document.querySelector('h1');

// const alertH1 = function(){
//   alert(`addEventListener: Great, you are reading the header`);
//   // h1.removeEventListener('mouseenter', alertH1)
// }

// h1.addEventListener('mouseenter', alertH1);

//   setTimeout((e)=> h1.removeEventListener('mouseenter', alertH1), 3000);

// Event Propagation (Bubbling phase)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function(e){
//   this.style.backgroundColor = randomColor();
//   console.log(`LINK`, e.target, e.currentTarget);
//   console.log(e.currentTarget === this);

//   // stop propagation
//   // e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function(e){
//   this.style.backgroundColor = randomColor();
//   console.log(`CONTAINER`, e.target, e.currentTarget);
//   console.log(e.currentTarget === this);
// });

// document.querySelector('.nav').addEventListener('click', function(e){
//   this.style.backgroundColor = randomColor();
//   console.log(`NAV`, e.target, e.currentTarget);
//   console.log(e.currentTarget === this);
// });

// Dom Transversing
const h1 = document.querySelector('h1');

// Going Downwards: Child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
console.log((h1.firstElementChild.style.color = 'white'));
console.log((h1.lastElementChild.style.color = 'orangered'));

//Going Upwards: Parent
console.log(h1.parentNode);
console.log(h1.parentElement);

// h1.closest('header').style.background = `var(--gradient-secondary)`;
// h1.closest('h1').style.background = `var(--gradient-primary)`;

// Going sideways
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function(el){
//   if(el !== h1) el.style.transform = 'scale(0.5)'
// });

/// lifeCycle DOM
document.addEventListener('DOMContentLoaded', function(e){
  console.log('HTML parsed and DOM tree loaded', e)
});

window.addEventListener('load', function(e){
  console.log('page fully loaded', e)
});

// window.addEventListener('beforeunload', function(e){
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = '';
// });

