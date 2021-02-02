// insert cards with background image
const cardsData = [
  { className: "card-", title: "Deep earth" },
  { className: "card-", title: "Night arcade" },
  { className: "card-", title: "Soccer team VR" },
  { className: "card-", title: "The grid" },
  { className: "card-", title: "From up above VR" },
  { className: "card-", title: "Pocket borealis" },
  { className: "card-", title: "The curiosity" },
  { className: "card-", title: "Make it fisheye" },
];

const cardWrapper = document.querySelector(".our-creations__cards-wrapper");

const cards = cardsData
  .map((card, i) => {
    return `<a href="#" class="our-creations__card our-creations__${
      card.className
    }${i + 1}">
            <span class="our-creations__card-title">${card.title}</span>
        </a>`;
  })
  .join("");

cardWrapper.insertAdjacentHTML("afterbegin", cards);

// mobile menu
const openBtn = document.querySelector(".navbar__nav-trigger--open");
const closeBtn = document.querySelector(".navbar__nav-trigger--close");
const navWrapper = document.querySelector(".navbar__nav-list-wrapper");
const navLinks = document.querySelectorAll(".navbar__nav-link");

const openMenu = () => {
  navWrapper.classList.add("active");
};

const closeMenu = () => {
  navWrapper.classList.remove("active");
};

openBtn.addEventListener("click", openMenu);

closeBtn.addEventListener("click", closeMenu);

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// animate navbar on page scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("navbar__scrolled", window.scrollY > 0);
});

// gsap animations
gsap.registerPlugin(ScrollTrigger);

const animElements = document.querySelectorAll(".scroll-animation-from-bottom");

animElements.forEach((element) => {
  gsap.fromTo(
    element.children,
    { y: "+=120", opacity: 0 },
    {
      y: 0,
      opacity: 1,
      stagger: 0.3,
      duration: 1,
      ease: "easeInOut",
      scrollTrigger: {
        trigger: element,
        start: "top 70%",
        // toggleActions: "play pause resume reset",
      },
    }
  );
});

const aboutWrapper = document.querySelector(".about__wrapper");

const leftEl = document.querySelector(".about__bg-img");
const rightEl = document.querySelector(".about__heading-container");

gsap.fromTo(
  leftEl,
  { x: "-600", opacity: 0 },
  {
    x: 0,
    opacity: 1,
    duration: 1,
    delay: 0.5,
    ease: "easeInOut",
    scrollTrigger: {
      trigger: aboutWrapper,
      start: "top 90%",
      // toggleActions: "play pause resume reset",
    },
  }
);

gsap.fromTo(
  rightEl,
  { x: "-600", opacity: 0 },
  {
    x: 0,
    opacity: 1,
    duration: 1,
    delay: 0.8,
    ease: "bounce.out",
    scrollTrigger: {
      trigger: aboutWrapper,
      start: "top 90%",
      // toggleActions: "play pause resume reset",
    },
  }
);

gsap.fromTo(
  ".header__heading",
  { opacity: 0, x: 600 },
  { opacity: 1, x: 0, ease: "power1.out", delay: 0.8, duration: 1 }
);

gsap.fromTo(".navbar", { opacity: 0 }, { opacity: 1, delay: 1, duration: 0.3 });
