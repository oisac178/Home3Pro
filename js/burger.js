//window.addEventListener('DOMContentLoaded', function() {
//  document.querySelector('#burger').addEventListener('click', function() {
//        document.querySelector('.menu').classList.toggle('menu--open')
//    })
//  })

  var tl = gsap.timeline({paused:true});

  tl.from(".menu__top", {
    opacity: 0, y:-100, duration: 0.5});
  tl.fromTo(".menu",
    {delay: 0.4, opacity: 0, y:100, display: "none"},
    {opacity: 1, y:0, ease: "circle", duration: 2, display: "block"});

  tl.to(".menu__nav", {
      opacity: 0});
  tl.to(".social", {
    opacity: 0});
  tl.to(".menu__right", {
    opacity: 0});

  burger.onclick = function() {tl.play();}
