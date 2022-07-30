// Nav Menu Animation
const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");

hamburger.addEventListener("click", () => {
  mobileNav.classList.toggle("nav-appear");
  hamburger.classList.toggle("toggle");
  document.body.classList.toggle("no-scroll");
});

// Gsap Animation
const tl = gsap.timeline({ duration: 0.5, ease: "Power2" });
gsap.registerPlugin(ScrollTrigger);

tl.from(".navbar", {
  y: "-200%",
}).from(".intro", {
  scale: 0,
  opacity: 0,
});

// About Section GSAP
const aboutContents = document.querySelectorAll(".about-content");
aboutContents.forEach((content) => {
  const anim = gsap.from(content, {
    x: -100,
    y: 100,
    opacity: 0,
    duration: 0.5,
  });

  ScrollTrigger.create({
    trigger: content,
    animation: anim,
  });
});

gsap.from(".products-heading", {
  x: 100,
  y: 100,
  duration: 0.5,

  scrollTrigger: {
    trigger: ".products-heading",
  },
});

// Products Section GSAP
const productCards = document.querySelectorAll(".product-card");
productCards.forEach((card) => {
  const anim = gsap.from(card, {
    x: 100,
    y: 100,
    opacity: 0,
    duration: 0.5,
  });

  ScrollTrigger.create({
    trigger: card,
    animation: anim,
  });
});

// Contact Section GSAP
gsap.from(".contact-form", {
  x: -100,
  y: 100,
  duration: 0.5,

  scrollTrigger: {
    trigger: ".contact-form",
  },
});

// Smooth Scroll Animation
const smoothScroll = (target, duration) => {
  var target = document.querySelector(target);
  let targetPosition = target.getBoundingClientRect().top;
  let startPosition = window.pageYOffset;
  let distance = targetPosition - startPosition;
  startTime = null;

  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    let timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  const ease = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  requestAnimationFrame(animation);
};

const aboutLink = document.querySelector(".about-link");
const productsLink = document.querySelector(".products-link");
const contactLink = document.querySelector(".contact-link");
const mobileAboutLink = document.querySelector(".mobile-about-link");
const mobileProductsLink = document.querySelector(".mobile-products-link");
const mobileContactLink = document.querySelector(".mobile-contact-link");

aboutLink.addEventListener("click", () => {
  smoothScroll("#aboutSection", 500);
});
productsLink.addEventListener("click", () => {
  smoothScroll("#productsSection", 1000);
});
contactLink.addEventListener("click", () => {
  smoothScroll("#contactSection", 1000);
});
mobileAboutLink.addEventListener("click", () => {
  document.body.classList.remove("no-scroll");
  mobileNav.classList.remove("nav-appear");
  hamburger.classList.remove("toggle");
  smoothScroll("#aboutSection", 500);
});
mobileProductsLink.addEventListener("click", () => {
  document.body.classList.remove("no-scroll");
  mobileNav.classList.remove("nav-appear");
  hamburger.classList.remove("toggle");
  smoothScroll("#productsSection", 1000);
});
mobileContactLink.addEventListener("click", () => {
  document.body.classList.remove("no-scroll");
  mobileNav.classList.remove("nav-appear");
  hamburger.classList.remove("toggle");
  smoothScroll("#contactSection", 1000);
});

// Contact Form Handling
const contactForm = document.querySelector(".contact-form");
const nameInputErrorMsg = document.querySelector(".name-error-msg");
const emailInputErrorMsg = document.querySelector(".email-error-msg");
const msgInputErrorMsg = document.querySelector(".msg-error-msg");
const nameInput = document.querySelector(".name-input");
const emailInput = document.querySelector(".email-input");
const msgInput = document.querySelector(".message-input");

const formSubmitHandler = () => {
  if (nameInput.value === "") {
    nameInputErrorMsg.classList.remove("msg-hidden");
    return;
  }

  if (emailInput.value === "") {
    emailInputErrorMsg.classList.remove("msg-hidden");
    return;
  }

  if (msgInput.value === "") {
    msgInputErrorMsg.classList.remove("msg-hidden");
    return;
  }

  alert("Message Sent");
  nameInput.value = "";
  emailInput.value = "";
  msgInput.value = "";
  nameInputErrorMsg.classList.add("msg-hidden");
  emailInputErrorMsg.classList.add("msg-hidden");
  msgInputErrorMsg.classList.add("msg-hidden");
};

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  formSubmitHandler();
});
