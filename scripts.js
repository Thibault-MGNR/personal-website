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
    menuIsDevelop = false;
  } else {
    menuButton.classList.remove("rotate-menu-b");
    menuButton.classList.add("rotate-menu-f");
    menuIsDevelop = true;
  }
}

function init(){
  window.addEventListener("scroll", reveal);
  menuButton = document.getElementById('menu-button');
  menuButton.addEventListener("click", menuRotation);
}

var menuButton = null;
var menuIsDevelop = false;
window.addEventListener("DOMContentLoaded", init);