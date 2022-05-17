const mySwiper = document.querySelector('.swiper');

const swiper = new Swiper(mySwiper, {
    slidesPerView: 3,
    spaceBetween: 0,
    loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });

