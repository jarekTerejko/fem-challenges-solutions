const gridItems = document.querySelectorAll(".testimonials__item");

const showItems = () => {
  for (let index = 0; index < gridItems.length; index++) {
    gridItems[0].classList.add("show-top");
    gridItems[1].classList.add("show-top");
    gridItems[2].classList.add("show-bottom");
    gridItems[3].classList.add("show-bottom");
    gridItems[4].classList.add("show-bottom");
  }
};

window.addEventListener("load", showItems);
