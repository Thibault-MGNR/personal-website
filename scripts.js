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
  console.log("click");
  menuButton.classList.remove("rotate");
  window.requestAnimationFrame(function(time) {
    window.requestAnimationFrame(function(time) {
      if(menuButtonHover == true){
        menuButton.classList.add("rotate");
      }
    });
  });
}

function init(){
  window.addEventListener("scroll", reveal);
  menuButton = document.getElementById('menu-button');
  menuButton.addEventListener("click", menuRotation);
  menuButton.addEventListener("mouseenter", function(event){
    menuButtonHover = true;
  });

  menuButton.addEventListener("mouseleave", function(event){
    menuButtonHover = false;
  });
}

var menuButton = null;
var menuButtonHover = false;
window.addEventListener("DOMContentLoaded", init);