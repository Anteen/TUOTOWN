// OPEN MENU 

const navMenu = document.querySelector (".open-menu");
const navOverlay = document.querySelector (".nav-overlay");
const navButton = document.querySelector (".menu__burger");
const navBackButton = document.querySelector (".open-menu__comeback-button");
const body = document.querySelector ("body");


  
navButton.addEventListener("click",  function() {
    navMenu.classList.add("activated")
    navOverlay.classList.add("nav-overlay-open")
    body.classList.add("lock")

});
navBackButton.addEventListener("click", function() {
    navMenu.classList.remove("activated")
    navOverlay.classList.remove("nav-overlay-open")
    body.classList.remove("lock")
});
navOverlay.addEventListener("click", function() {
    navMenu.classList.remove("activated")
    navOverlay.classList.remove("nav-overlay-open")
    body.classList.remove("lock")

});

// SEARCH

const searchMenu = document.querySelector (".menu__last-li-search");
const searchButton = document.querySelector (".menu__search");
const searchReset = document.querySelector (".menu__search-reset");
const searchInput = document.querySelector (".menu__search-input-field");
const searchInputWrapper = document.querySelector (".menu__search-wrapper");
const searchContainer = document.querySelector(".menu__last-li-search")
const menuFirstButton = document.querySelector(".menu__first-li-search")
const menuSecondButtons = document.querySelector(".menu__second-li-search")

searchButton.addEventListener("click",  function(e) {
  e.stopPropagation();
  navOverlay.classList.add("nav-overlay_activated")
  searchMenu.classList.add("search-menu_activated")
  searchReset.classList.add("searchReset_activated")
  searchInput.classList.add("menu__search-input-field_activated")
  searchInputWrapper.classList.add("menu__search-wrapper_activated")
  searchContainer.classList.add("menu__last-li-search_activated")
  menuFirstButton.classList.add("menu__first-li-search_activated")
  menuSecondButtons.classList.add("menu__second-li-search_activated")
});

navOverlay.addEventListener("click",  function() {
  navOverlay.classList.remove("nav-overlay_activated")
  searchMenu.classList.remove("search-menu_activated")
  searchReset.classList.remove("searchReset_activated")
  searchInput.classList.remove("menu__search-input-field_activated")
  searchInputWrapper.classList.remove("menu__search-wrapper_activated")
  searchContainer.classList.remove("menu__last-li-search_activated")
  menuFirstButton.classList.remove("menu__first-li-search_activated")
  menuSecondButtons.classList.remove("menu__second-li-search_activated")
});

// ACCORDION 

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}