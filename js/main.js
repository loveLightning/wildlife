const arrowNext = document.querySelector(".articles__next-img");
const arrowPrev = document.querySelector(".articles__prev-img");
const articlesCarousel = document.querySelector(".articles__carousel");
const headerMainBtn = document.querySelector(".header__main-btn");
const headerModalWrapper = document.querySelector(".header__modal-wrapper");
const headerModal = document.querySelector(".header__modal");
const Headerclose = document.querySelector(".header__close");
const headerModalSahdow = document.querySelector(".header__modal-shadow");
const body = document.querySelector("body");
const formDonate = document.querySelector(".header__form-donate");
const carouselCard = document.querySelector(
  ".articles__carousel-item"
).offsetWidth;
const menuLink = document.querySelector(".header__menu-links");
const menuWrapper = document.querySelector(".header__menu-wrapper");
const headerBurger = document.querySelector(".header__burger");
const burderLine = document.querySelectorAll(".header__burder-line");
const headerItem = document.querySelectorAll('.header__item');

let offset = 0;

arrowPrev.addEventListener("click", () => {
  offset = offset + carouselCard + 60;
  if (offset > 1080) {
    offset = 0;
  }
  articlesCarousel.style.left = -offset + "px";
});

arrowNext.addEventListener("click", () => {
  offset = offset - 360;
  if (offset < 0) {
    offset = 1080;
  }
  articlesCarousel.style.left = -offset + "px";
});

const closeModal = (e) => {
  e.preventDefault();
  headerModalWrapper.classList.remove("header__modal-wrapper_active");
  headerModalSahdow.classList.remove("header__modal-shadow_active");
  body.style.overflow = "auto";
};

const showModal = () => {
  headerModalWrapper.classList.add("header__modal-wrapper_active");
  headerModalSahdow.classList.add("header__modal-shadow_active");
  body.style.overflow = "hidden";

  window.addEventListener("click", (e) => {
    if (e.target == headerModalSahdow) {
      closeModal(e);
    }
  });
};

headerMainBtn.addEventListener("click", () => {
  showModal();
});

Headerclose.addEventListener("click", (e) => {
  closeModal(e);
});

formDonate.addEventListener("submit", (e) => {
  closeModal(e);
});

const handlerBurger = () => {
  menuWrapper.classList.toggle("header__menu-wrapper_active");
  menuLink.classList.toggle("header__menu-links_active");
  burderLine[0].classList.toggle("header__burder-line_first");
  burderLine[1].classList.toggle("header__burder-line_second");
  burderLine[2].classList.toggle("header__burder-line_third");
  body.classList.toggle('body_active')
}

headerBurger.addEventListener("click", () => {
  handlerBurger();
});


headerItem.forEach(item => {
    item.addEventListener('click', () => {
      if (menuLink.classList.contains('header__menu-links_active')) {
        handlerBurger();
      }
    })
})