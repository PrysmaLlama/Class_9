import './style.css'
import {gsap} from 'gsap'

const sectionIntro = document.querySelector(".sectionIntro");

const timeline = gsap.timeline(
  
)

gsap.from(".sectionIntro", {
  x: -250,
  duration: .15,
});

gsap.from(".button", {
  x: 50,
  duration: 0.25,
})