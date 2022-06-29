/*
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('.fade-in-animation');
  
      if (entry.isIntersecting) {
        square.classList.add('fade-in');
        return;
      }

      square.classList.remove('fade-in');
    });
  });
  
  observer.observe(document.querySelector('.fade-in-container')); */

  function reveal() {
    var reveals = document.querySelectorAll(".fade-in-container");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("fade-in");
        reveals[i].classList.remove("hide")
      } else {
        // reveals[i].classList.remove("fade-in");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);