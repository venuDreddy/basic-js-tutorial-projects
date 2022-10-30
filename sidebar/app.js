const toggleBtn = document.querySelector(".sidebar-toggle");
const sideBar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");

toggleBtn.addEventListener("click", function (e) {
  sideBar.classList.toggle("show-sidebar");
});
closeBtn.addEventListener("click", function (e) {
  sideBar.classList.remove("show-sidebar");
});
