var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".slider-button--next",
    prevEl: ".slider-button--prev",
  },

  // Перелистывание с клавиатуры
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
