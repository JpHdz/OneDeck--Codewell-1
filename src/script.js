"use strict";

const btnMenu = document.querySelector(".menu-btn");
const header = document.querySelector(".header");

btnMenu.addEventListener("click", () => {
  btnMenu.classList.toggle("menu-open");
  header.classList.toggle("nav-open");
});
