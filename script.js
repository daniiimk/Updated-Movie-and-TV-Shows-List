let header = document.querySelector('header');
let video = document.querySelectorAll('video');

window.addEventListener('scroll', () => {
  header.classList.toggle('shadow', window.scrollY > 2);
  video(stop);
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

var swiper = new Swiper('.home', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// Swiper
var swiper = new Swiper('.coming-container', {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 55000999999999999999990,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    568: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    968: {
      slidesPerView: 5,
    },
    1168: {
      slidesPerView: 6,
    },
    1368: {
      slidesPerView: 6,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Scroll to top on refresh
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
