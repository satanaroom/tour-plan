$(document).ready(function () {
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

  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var targetModal = $(this).attr("data-href");
    $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
  // Обработка форм
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
        },
        phone: {
          required: "Please input your phone",
        },
        email: {
          required: "We need your email address to contact you",
        },
      },
    });
  });
  $(".special").validate({
    errorClass: "invalid",
    errorElement: "em",
    messages: {
      name: "Please specify your name",
      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com",
      },
    },
  });
});
