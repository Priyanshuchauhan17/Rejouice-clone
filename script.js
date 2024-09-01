gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

function curserEffect() {
    var page1Contant = document.querySelector("#page1-contant")
    var cursor = document.querySelector("#curser")
    page1Contant.addEventListener("mousemove", function (dets) {
   gsap.to(cursor,{
       x: dets.x,
       y: dets.y,
   })
    })
   page1Contant.addEventListener("mouseenter",function(){
       gsap.to(cursor,{
           scale:1,
           opacity:1
       })
   })
   page1Contant.addEventListener("mouseleave",function(){
       gsap.to(cursor,{
           scale:0,
           opacity: 0
       })
   })
   
}
curserEffect();
document.querySelector("#element-h1")
document.querySelector("#page2")
function page2animation() {
    gsap.from("#element-h1",{
        y:120,
        stagger:0.25,
        duraction:1,
        ScrollTrigger:{
            trigger:"#page2",
            scroller:"main",
        start: "top 40%",
        end: "top 37%",
        scrub:2
    }
    })
    
}
page2animation()

// function curserEffect1() {
//     var page5Contant = document.querySelector("#page5")
//     var cursorL = document.querySelector("#curser1")
//     page5Contant.addEventListener("mousemove", function (aayu) {
// gsap.to(cursorL,{
//        x: aayu.x,
//        y: aayu.y,
//    })
//     })
//    page5Contant.addEventListener("mouseenter",function(){
//     gsap.to(cursorL,{
//            scale:1,
//            opacity:1
//        })
//    })
//    page5Contant.addEventListener("mouseleave",function(){
//     gsap.to(cursorL,{
//            scale:0,
//            opacity: 0
//        })
//    })
   
// }
// curserEffect1();

var newCurser =  document.querySelector("#page5")
var curser2 =  document.querySelector("#curser1")
newCurser.addEventListener("mousemove",function (babe) {
   curser2.style.left = babe.x+"px"
   curser2.style.top = babe.y+"px"
   newCurser.addEventListener("mouseenter",function () {
    curser2,{
        scale :1,
        opacity:1
    }
   })
   newCurser.addEventListener("mouseleave",function () {
    curser2,{
        scale:0,
         opacity: 0
    }
   })
})
function swiperanimanation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 10000,
            disableOnInteraction: false,
          },
      });
    
}
swiperanimanation()
 var tl = gsap.timeline()

 tl.from("#loader h3 ",{
    x:40,
    opacity:0,
    duration:1,
    stagger : 0.1
 })
 tl.to("#loader h3",{
    opacity:0,
    x:-40,
    duration:1,
    stagger:0.1
 })
 tl.to("#loader",{
opacity:0
 })
 tl.from("#page1-contant h1 span",{
    y:100,
    opacity:0,
    stagger:0.2,
    duration:0.5,
    delay:-0.5
         })
 tl.to("#loader",{
   display:"none"
     })

