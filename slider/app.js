const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const btnContainer = document.querySelector(".btn-container");
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

// one way slider
let counter = 0;
prevBtn.remove();
prevFlag = false;
nextFlag = true;

nextBtn.addEventListener("click", function (btn) {
  counter++;
  if (counter > slides.length - 2) {
    slides[counter].style.transform = `translateX(-${counter * 100}%)`;

    nextBtn.style.display = "none";
  } else {
    if (prevFlag === false) {
      const prevBtn = document.createElement("button");
      prevBtn.innerHTML = `prev`;
      prevBtn.classList.add("prevBtn");
      btnContainer.prepend(prevBtn);
      prevFlag = true;
      prevBtn.addEventListener("click", function (btn) {
        if (counter === 1) {
          slides[counter].style.transform = `translateX(${counter * 100}%)`;
          counter--;
          prevBtn.remove();
          prevFlag = false;
        } else {
          counter--;

          nextBtn.style.display = "inline";
          slides[counter + 1].style.transform = `translateX(${counter * 100}%)`;
        }
      });
    }
    slides[counter].style.transform = `translateX(-${counter * 100}%)`;
  }
});

// two way slider

// let counter = 0;
// nextBtn.addEventListener("click", function (btn) {
//   counter++;
//   if (counter > slides.length - 1) {
//     counter = 0;
//     slides.forEach(function (slide, index) {
//       if (index !== counter) {
//         slide.style.transform = `translateX(-${0}%)`;
//       }
//     });
//     slides[counter].style.transform = `translateX(-${counter * 100}%)`;
//   } else {
//     slides[counter].style.transform = `translateX(-${counter * 100}%)`;
//   }
// });
// prevBtn.addEventListener("click", function (btn) {
//   if (counter === 0) {
//     counter = slides.length - 1;
//     slides.forEach(function (slide, index) {
//       slide.style.transform = `translateX(-${index * 100}%)`;
//     });
//   } else {
//     counter--;
//     slides[counter + 1].style.transform = `translateX(${counter * 100}%)`;
//   }
// });
