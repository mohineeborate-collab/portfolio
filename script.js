/* THEME SWITCH */
const themeSelect=document.getElementById("theme-select");

function applyTheme(theme){
document.body.classList.remove("dark","tech");
if(theme!=="light"){
document.body.classList.add(theme);
}
localStorage.setItem("theme",theme);
}

themeSelect.addEventListener("change",()=>{
applyTheme(themeSelect.value);
});

const savedTheme=localStorage.getItem("theme")||"light";
themeSelect.value=savedTheme;
applyTheme(savedTheme);

/* TYPING EFFECT */
const textArray=[
"Registered Pharmacist 💊",
"B.Sc Computer Science Student 💻",
"Tech + Healthcare Enthusiast 🚀"
];

let typing=document.querySelector(".typing");
let textIndex=0,charIndex=0;

function type(){
if(charIndex<textArray[textIndex].length){
typing.textContent+=textArray[textIndex][charIndex];
charIndex++;
setTimeout(type,80);
}else{
setTimeout(erase,1500);
}
}

function erase(){
if(charIndex>0){
typing.textContent=textArray[textIndex].substring(0,charIndex-1);
charIndex--;
setTimeout(erase,50);
}else{
textIndex=(textIndex+1)%textArray.length;
setTimeout(type,500);
}
}

type();

/* SCROLL REVEAL */
function reveal(){
document.querySelectorAll(".reveal").forEach(el=>{
if(el.getBoundingClientRect().top<window.innerHeight-100){
el.classList.add("active");
}
});
}
window.addEventListener("scroll",reveal);

/* PARTICLES */
particlesJS("particles-js",{
particles:{
number:{value:80},
size:{value:3},
move:{speed:2},
line_linked:{enable:true}
}
});
/* ===== ACTIVE NAVIGATION HIGHLIGHT ===== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });
});
/* ============================= */
/* ACTIVE NAVIGATION FIX FINAL  */
/* ============================= */

document.addEventListener("DOMContentLoaded", function () {

  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  window.addEventListener("scroll", function () {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });

});