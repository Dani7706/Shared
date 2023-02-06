"use strict";
const filterBtn = document.querySelector("#filter");
const filterMenu = document.querySelector("#filter-menu");
const sortBtn = document.querySelector("#sort");
const sortMenu = document.querySelector("#sort-menu");
function open(btn, menu) {
  btn.addEventListener("click", function () {
    btn.style.boxShadow = "none";
    btn.style.borderBottomLeftRadius = 0;
    btn.style.borderBottomRightRadius = 0;
    menu.classList.toggle("hidden");
  });
}
open(filterBtn, filterMenu);
console.log(sortBtn);
console.log(sortMenu);
open(sortBtn, sortMenu);
