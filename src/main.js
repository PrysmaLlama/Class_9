import './style.css'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const boite = document.querySelector(".boite");


gsap.from(".boite", {
  y: 250, 

  

  duration: 1,
  ease: "power4.inOut",


  stagger: {
    each: 0.08,
    from: 0,
  },

  opacity: 0,

scrollTrigger: {
    trigger: ".boite",
    start: "top bottom",
    end: "bottom center",

    

    markers: true,

    
  }



});