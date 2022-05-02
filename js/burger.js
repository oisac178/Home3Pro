//window.addEventListener('DOMContentLoaded', function() {
//  document.querySelector('#burger').addEventListener('click', function() {
//        document.querySelector('.menu').classList.toggle('menu--open')
//    })
//  })

  var tl = gsap.timeline({paused:true});

  tl.from(".menu__top", {
    opacity: 0, y:-200, duration: 0.9, ease: "power3.in"}, '-=0.2');
  tl.from(".close", {
    opacity: 0, duration: 0.2}, '-=0.5');
  tl.fromTo(".menu",
    {opacity: 0, display: "none"},
    {opacity: 1, ease: "circle", duration: 1.5, display: "block"}, '-=0.8');
  tl.fromTo(".menu__nav",
    {opacity: 0, y:30},
    {opacity: 1, y:0, ease: "circle", duration: 0.5}, '-=0.5');
  tl.fromTo(".social",
    {opacity: 0, y:20},
    {opacity: 1, y:0, ease: "circle", duration: 0.6}, '-=0.1');
  tl.fromTo(".menu__right",
    {opacity: 0, y:20},
    {opacity: 1, y:0, ease: "circle", duration: 0.6}, '-=0.6');

  burger.onclick = function() {tl.play();}
  close_burger.onclick = function() {tl.reverse();}
