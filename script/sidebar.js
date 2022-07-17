var shown = 0;

function toggleSidebar() {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  const navBreakers = document.querySelectorAll('.nav-links hr');
  const alpha = document.querySelector('.alpha');

  // Toggle Navigation
  nav.classList.toggle('nav-default');
  nav.classList.toggle('nav-active');
  alpha.classList.toggle('alpha-default');
  alpha.classList.toggle('alpha-active');

  if(shown == 0) {
    // Disable Scrolling
    document.body.style.overflow = 'hidden';
    document.querySelector('html').scrollTop = window.scrollY;

    shown = 1;
  } else {
    // Enable Scrolling
    document.body.style.overflow = null;

    shown = 0;
  }

  // Animate Link
  navLinks.forEach((link, index) => {
    if(link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navLinkFade 100ms ease forwards`;
    }

    link.addEventListener('click', () => {
      toggleSidebar();
    });
  });

  // Animate Breakers
  navBreakers.forEach((breaker, index) => {
    if(breaker.style.animation) {
      breaker.style.animation = '';
    } else {
      breaker.style.animation = `navLinkFade 100ms ease forwards`;
    }
  });

  // Change Burger
  //burger.classList.toggle('close');
}

const navSlide = () => {
  const burger = document.querySelector('.burger');

  burger.addEventListener('click', toggleSidebar);
}

navSlide();

window.onresize = function() {
  const nav = document.querySelector('.nav-links');

  if(nav.classList.contains("nav-active")) {
    toggleSidebar();
  }
};
