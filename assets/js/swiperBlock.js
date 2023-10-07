const swiper = new Swiper('.swiper-container',{
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    initialSlide: 2,
    loop: true,
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
    mousewheel: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    slidesPerView: 'auto',
    centered: true,
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