const decrease = document.querySelector(".decrease");
const increase = document.querySelector(".increase");
const reset = document.querySelector(".reset");
const value = document.querySelector("#value");
let counter = 0;
decrease.addEventListener("click", function (e) {
  counter -= 1;
  value.textContent = `${counter}`;
  if (counter > 0) {
    value.style.color = "green";
  } else if (counter < 0) {
    value.style.color = "red";
  } else {
    value.style.color = "black";
  }
});
increase.addEventListener("click", function (e) {
  counter += 1;
  value.textContent = `${counter}`;
  if (counter > 0) {
    value.style.color = "green";
  } else if (counter < 0) {
    value.style.color = "red";
  } else {
    value.style.color = "black";
  }
});
reset.addEventListener("click", function (e) {
  counter = 0;
  value.textContent = `${counter}`;
  value.style.color = "black";
});
