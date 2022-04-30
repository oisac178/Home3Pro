//window.addEventListener('DOMContentLoaded', function() {
//  document.querySelector('#burger').addEventListener('click', function() {
//        document.querySelector('.menu').classList.toggle('menu--open')
//    })
//  })
gsap.to(".menu__nav", {
  opacity: 0});
gsap.to(".social", {
  opacity: 0});
gsap.to(".menu__right", {
  opacity: 0});
gsap.to(".close", {
  opacity: 0});

  var tl = gsap.timeline({paused:true});

  tl.from(".menu__top", {
    opacity: 0, y:-200, duration: 0.5, ease: "power3.in"}, '-=0.2');
  tl.fromTo(".menu",
    {display: "none"},
    {duration: 1.5, display: "block"}, '-=0.8');

   tl.fromTo(".menu__header",
    {opacity: 0, y:100},
    {opacity: 1, y:0, ease: "circle", duration: 1.2}, '-=0.5');


  burger.onclick = function() {tl.play();}
