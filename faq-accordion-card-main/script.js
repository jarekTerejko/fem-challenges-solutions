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
      setTimeout(() => {
        question.classList.add("open");
        question.nextElementSibling.classList.add("active");
      }, 300);
    }
  });
});
