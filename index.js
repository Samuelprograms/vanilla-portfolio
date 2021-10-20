const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const scroller = document.querySelector(".first_row");
const bannerBackground = document.querySelector(".banner_background");

for (let index = 0; index < 5; index++) {
  const newImage = document.createElement("div");
  newImage.classList.add("first_row__image", "hover");
  newImage.innerHTML = `
  <img src="/assets/imagework.png" alt="work${index}" />
  <div class="auxiliar_text">
  <h2>LOREM IPSUM</h2>
  <p>READ M</p>ORE
  </div>
  `;
  scroller.appendChild(newImage);
}

const revealSkillsTitle = () => {
  const imageToReveal = document.querySelector(".image-reveal");
  const elementPosition = imageToReveal.getBoundingClientRect().top;
  const screenHeight = window.innerHeight / 1.7;
  if (screenHeight > elementPosition) {
    imageToReveal.classList.add("reveal");
  } else {
    imageToReveal.classList.remove("reveal");
  }
};
const mobileMenu = () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
};
const closeMenu = () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
};
hamburger.addEventListener("click", mobileMenu);
window.addEventListener("scroll", revealSkillsTitle);
navLink.forEach((n) => n.addEventListener("click", closeMenu));
