"use strict";

const menuBar = document.querySelector(".toggle--menu");
const lists = document.getElementsByTagName("ul")[0];
const buttons = document.querySelector(".button-div");
const navbar = document.getElementsByTagName("nav")[0];
const logoImage = document.querySelector(".logo--img");

const menuDropdown = function () {
  const conditions = menuBar.getAttribute("aria-disabled");

  if (conditions === "true") {
    menuBar.setAttribute("aria-disabled", false);

    navbar.setAttribute("data-visible", true);

    lists.setAttribute("data-visible", true);
    buttons.setAttribute("data-visible", true);
    logoImage.setAttribute("data-visible", true);
    console.log(conditions);
  } else if (conditions === "false") {
    menuBar.setAttribute("aria-disabled", true);

    navbar.setAttribute("data-visible", false);

    lists.setAttribute("data-visible", false);
    buttons.setAttribute("data-visible", false);
    logoImage.setAttribute("data-visible", false);
    console.log(conditions);
  }
};

menuBar.addEventListener("click", menuDropdown);
