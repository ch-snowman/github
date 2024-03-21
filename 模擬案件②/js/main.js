var mySwiper = new Swiper ('.customer-voice-slick', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides : true,
  pagination: '.swiper-pagination',
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  breakpoints: {
    767: {
      slidesPerView: 1,
      spaceBetween: 0
    }
  }
})