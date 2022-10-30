const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
btn.addEventListener("click", function (e) {
  // let colorValue = `#${getRandomNumber()}${getRandomNumber()}${getRandomNumber()}${getRandomNumber()}${getRandomNumber()}${getRandomNumber()}`;
  document.body.style.backgroundColor = `${randomHexValue()}`;
  color.textContent = `${randomHexValue()}`;
});
function randomHexValue() {
  let value, i;
  value = "#";
  for (i = 0; i < 6; i++) {
    value += hex[getRandomNumber()];
  }

  return value;
}
function getRandomNumber() {
  let sum;
  sum = Math.floor(Math.random() * hex.length);
  return sum;
}
