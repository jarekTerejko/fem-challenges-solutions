// show or hide answer after clicking on question
const questionBtns = document.querySelectorAll(".faq__question");

questionBtns.forEach((question) => {
  question.addEventListener("click", () => {
    if (question.classList.contains("open")) {
      question.classList.remove("open");
      question.nextElementSibling.classList.remove("active");
    } else {
      questionBtns.forEach((question) => {
        question.classList.remove("open");
        question.nextElementSibling.classList.remove("active");
      });
      question.classList.add("open");
      question.nextElementSibling.classList.add("active");
    }
  });
});

// check window width and choose the right img 
const photo = document.querySelector(".faq__photo");

const checkWindowWidth = () => {
  if (window.innerWidth < 1015) {
    console.log(photo);
    photo.src = "./images/illustration-woman-online-mobile.svg";
  } else {
    photo.src = "./images/illustration-woman-online-desktop.svg";
  }
};

checkWindowWidth();

window.addEventListener("resize", checkWindowWidth);

window.addEventListener("load", () => {
  document.querySelector(".faq").classList.add("show");
});
