"use strict";
const headerMenu = document.querySelector(".header__menu");
const headerMenuBtn = document.querySelector("#icon-open");
const headerMenuBackground = document.querySelector(
  ".header__menu__background"
);
const closeHeaderMenuBtn = document.querySelector("#icon-close");
headerMenuBtn.addEventListener("click", function () {
  headerMenuBackground.style.transition =
    "all 1s cubic-bezier(0.65, 0, 0.35, 1)";
  headerMenuBackground.classList.add("header__menu__scale");
  headerMenu.style.opacity = 1;
  headerMenu.style.width = "100%";
});
closeHeaderMenuBtn.addEventListener("click", function () {
  headerMenuBackground.classList.remove("header__menu__scale");
  headerMenu.style.opacity = 0;
  headerMenu.style.width = 0;
});
