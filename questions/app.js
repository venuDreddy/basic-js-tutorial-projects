// traversing the dom

const btns = document.querySelectorAll(".question-btn");
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    let element = e.currentTarget;
    while (element.classList.contains("question") === false) {
      element = element.parentElement;
    }
    if (element.classList.contains("show-text")) {
      element.classList.remove("show-text");
    } else {
      btns.forEach(function (item) {
        let element = item;
        while (element.classList.contains("question") === false) {
          element = element.parentElement;
        }
        element.classList.remove("show-text");
      });

      element.classList.add("show-text");
    }
  });
});
