function reveal() {
  var reveals = document.querySelectorAll(".fade-in-container");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("fade-in");
      reveals[i].classList.remove("hide");
    } else {
    }
  }
}

function menuRotation() {
  if(menuIsDevelop){
    menuButton.classList.remove("rotate-menu-f");
    menuButton.classList.add("rotate-menu-b");
    popOutMenuLi();
    popOutMenuA();
    slideOutH1Title();
    menuIsDevelop = false;
  } else {
    menuButton.classList.remove("rotate-menu-b");
    menuButton.classList.add("rotate-menu-f");
    popInMenuLi();
    popInMenuA();
    slideInH1Title();
    menuIsDevelop = true;
  }
}

function popInMenuLi() {
  var menu_li = document.querySelectorAll(".nav-button");
  for(var i = 0; i < menu_li.length; i++){
    menu_li[i].classList.remove("menu-pop-out-li");
    menu_li[i].classList.add("menu-pop-in-li");
  }
}

function popOutMenuLi() {
  var menu_li = document.querySelectorAll(".nav-button");
  for(var i = 0; i < menu_li.length; i++){
    menu_li[i].classList.remove("menu-pop-in-li");
    menu_li[i].classList.add("menu-pop-out-li");
  }
}

function popInMenuA(){
  var menu_li_a = document.querySelectorAll(".nav-button a");
  for(var i = 0; i < menu_li_a.length; i++){
    menu_li_a[i].classList.remove("fade-out-menu-a");
    menu_li_a[i].classList.add("fade-in-menu-a");
  }
}

function popOutMenuA(){
  var menu_li_a = document.querySelectorAll(".nav-button a");
  for(var i = 0; i < menu_li_a.length; i++){
    menu_li_a[i].classList.remove("fade-in-menu-a");
    menu_li_a[i].classList.add("fade-out-menu-a");
  }
}

function slideInH1Title(){
  var h1Title = document.getElementById("header-title");
  h1Title.classList.remove("slideOutH1Title");
  h1Title.classList.add("slideInH1Title");
}

function slideOutH1Title(){
  var h1Title = document.getElementById("header-title");
  h1Title.classList.remove("slideInH1Title");
  h1Title.classList.add("slideOutH1Title");
}

function init(){
  window.addEventListener("scroll", reveal);
  menuButton = document.getElementById('menu-button');
  menuButton.addEventListener("click", menuRotation);
}
var menuButton = null;
var menuIsDevelop = false;
window.addEventListener("DOMContentLoaded", init);