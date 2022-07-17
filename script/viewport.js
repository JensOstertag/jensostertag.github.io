function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.bottom >= 10 &&
    rect.right >= 10 &&
    rect.top <= (window.innerHeight - 10 || document.documentElement.clientHeight - 10) &&
    rect.left <= (window.innerWidth - 10 || document.documentElement.clientWidth - 10)
  );
}

var animation = document.querySelectorAll(".viewport-animation");

function viewport() {
  var hidden = document.querySelectorAll(".viewport-animation.viewport-animation-hidden");
  var elementsToShow = [];

  for(var i = 0; i < hidden.length; i++) {
    if(isInViewport(hidden[i])) {
      elementsToShow.push(hidden[i]);
    }
  }

  for(var i = 0; i < elementsToShow.length; i++) {
    setTimeout(function() {
      var element = elementsToShow.shift();
      element.classList.add("viewport-animation-shown");
      element.classList.remove("viewport-animation-hidden");
    }, 100 * i + 100);
  }
}

function init() {
  for(var i = 0; i < animation.length; i++) {
    if(!(isInViewport(animation[i]))) {
      animation[i].classList.add("viewport-animation-hidden");
    }
  }
}

window.addEventListener("load", init);
window.addEventListener("load", viewport);
window.addEventListener("scroll", viewport);
