const swiper = new Swiper('.swiper-container',{
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    initialSlide: 2,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 3,
      slideShadows: false
    },
    keyboard: {
      enabled: true
    },
    mousewheel: {
      thresholdDelta: 70
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    slidesPerView: 3,
    // breakpoints: {
    //   640: {
    //     slidesPerView: 2
    //   },
    //   768: {
    //     slidesPerView: 1
    //   },
    //   1024: {
    //     slidesPerView: 2
    //   },
    //   1560: {
    //     slidesPerView: 3
    //   }
    // }
  });