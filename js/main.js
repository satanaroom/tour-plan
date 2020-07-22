var hotelSlider = new Swiper(".hotel-slider", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".hotel-slider__button--next",
    prevEl: ".hotel-slider__button--prev",
  },

  // Перелистывание с клавиатуры
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

var reviewsSlider = new Swiper(".reviews-slider", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".reviews-slider__button--next",
    prevEl: ".reviews-slider__button--prev",
  },

  // Перелистывание с клавиатуры
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [37.58903142, 126.93428341],
    zoom: 12,
  });
  (myGeoObject = new ymaps.GeoObject(
    {
      geometry: {
        type: "Point",
        coordinates: [37.58903142, 126.93428341],
      },
      properties: {
        iconContent: "Grand Hilton Hotel",
        hintContent: "Grand Hilton Hotel",
      },
    },
    {
      preset: "islands#blackStretchyIcon",
      draggable: true,
    }
  )),
    myMap.geoObjects.add(myGeoObject);
}
