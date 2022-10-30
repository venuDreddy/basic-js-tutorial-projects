const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
// To change color in a random way
btn.addEventListener("click", function (e) {
  let randomNumber;
  // randomNumber = Math.floor((Math.random() * 10) / 3);
  randomNumber = getRandomNumber();
  color.textContent = `${colors[randomNumber]}`;
  document.body.style.backgroundColor = `${colors[randomNumber]}`;
});
function getRandomNumber() {
  let number;
  number = Math.floor((Math.random() * 10) / 3);
  return number;
}
// To rotate  color in a closed loop
// let counter = 0;
// btn.addEventListener("click", function (e) {
//   if (counter > 3) {
//     counter = 0;
//   }
//   color.textContent = `${colors[counter]}`;
//   document.body.style.backgroundColor = `${colors[counter]}`;
//   counter += 1;
// });
