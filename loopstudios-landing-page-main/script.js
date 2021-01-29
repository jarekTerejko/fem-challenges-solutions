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
            <span class="our-creations__card-title" >${card.title}</span>
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
