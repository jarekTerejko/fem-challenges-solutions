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
