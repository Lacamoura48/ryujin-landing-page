// import simpleParallax from 'simple-parallax-js'
const heroImage = document.getElementById("hero-image")
particlesJS.load('particles-js', 'assets/particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
  });
  const revealOptions = {
    distance: '0',
    opacity: 0,
    origin: 'bottom',
    duration: 2800,
    scale: 0.95
};
  const test = {
    distance: '0',
    opacity: 0,
    origin: 'bottom',
    duration: 2800,
    scaleX: 0
};
ScrollReveal().reveal('.fade-reveal-fast', {...revealOptions, duration: 1500});
ScrollReveal().reveal('.fade-reveal', revealOptions);
ScrollReveal().reveal('.fade-reveal-d1', {...revealOptions, delay: 250});
ScrollReveal().reveal('.fade-reveal-d2', {...revealOptions, delay: 500});
ScrollReveal().reveal('.hellowo', test);

let menuState = false
const menu = document.querySelector(".navlinks-mobile")
function toggleMenu(){
  if(!menuState){
    menu.style.transform = "translateX(0)"
    menuState = true;
  }else{
    menu.style.transform = "translateX(100%)"
    menuState = false;
  }
}