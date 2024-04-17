// Synchronizes the active class of the navbar links on header and footer with the sections of the page
document.addEventListener("DOMContentLoaded", function () {
  const navbarLinks = document.querySelectorAll(".navbar a");

  navbarLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navbarLinks.forEach(function (link) {
        link.classList.remove("active");
      });
      const linkId = this.id.replace("-footer", "");
      const elementsWithLinkId = document.querySelectorAll(`[id*="${linkId}"]`);
      elementsWithLinkId.forEach(function (element) {
        element.classList.add("active");
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const logos = document.querySelectorAll(".logo");
  const navbarLinks = document.querySelectorAll(".navbar a");

  logos.forEach(function (logo) {
    logo.addEventListener("click", function () {
      navbarLinks.forEach(function (link) {
        link.classList.remove("active");
      });
      const homeLinks = document.querySelectorAll(`[id*="home-link"]`);
      homeLinks.forEach(function (link) {
        link.classList.add("active");
      });
    });
  });
});

// Makes the header sticky when the footer is not visible
window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  const footer = document.getElementById("footer");
  const headerStickyClass = "header-sticky";

  if (!isFooterVisible(footer)) {
    header.classList.remove(headerStickyClass);
  } else {
    header.classList.add(headerStickyClass);
  }
});

function isFooterVisible(footer) {
  const footerRect = footer.getBoundingClientRect();
  return footerRect.top > window.innerHeight - 100;
}

// Hamburger menu
let openHam = document.querySelector("#openHam");
let closeHam = document.querySelector("#closeHam");
let dropdownMenu = document.querySelector("#dropdown-menu");
let dropdownMenuItems = document
  .querySelector("#dropdown-menu")
  .querySelectorAll("a");

window.addEventListener("load", function () {
  closeHam.style.display = "none";
  openHam.style.display = "block";
});

const hamburgerEvent = (navigation, close, open) => {
  dropdownMenu.style.display = navigation;
  closeHam.style.display = close;
  openHam.style.display = open;
};

openHam.addEventListener("click", () =>
  hamburgerEvent("flex", "block", "none")
);
closeHam.addEventListener("click", () =>
  hamburgerEvent("none", "none", "block")
);

dropdownMenuItems.forEach(function (item) {
  item.addEventListener("click", function () {
    hamburgerEvent("none", "none", "block");
  });
});
