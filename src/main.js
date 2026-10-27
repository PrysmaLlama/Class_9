import './style.css'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const boite = document.querySelector(".boite");

const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".boite",
    start: "top bottom",
    end: "bottom center",

    scrub: true,

    markers: true,

    
  }
});

gsap.from(".boite", {
  y: 250, 

  

  duration: 1,
  ease: "power4.inOut",


  stagger: {
    each: 0.08,
    from: 0,
  },

  opacity: 0,





});