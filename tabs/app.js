const btns = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".content");
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const id = e.currentTarget.getAttribute("data-id");
    console.log(id);

    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    if (!e.currentTarget.classList.contains("active")) {
      e.currentTarget.classList.add("active");
    }

    contents.forEach(function (item) {
      const contentId = item.getAttribute("id");
      item.classList.remove("active");
      if (id === contentId) {
        item.classList.add("active");
      }
    });
  });
});
