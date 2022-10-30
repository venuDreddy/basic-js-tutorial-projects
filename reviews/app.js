// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    // img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    img: "review-photo1.webp",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    // img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    img: "review-photo2.jpeg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "Connie Blaze",
    job: "intern",
    // img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    img: "review-photo3.webp",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    // img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    img: "review-photo4.jpeg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];
// selecting items
const img = document.getElementById("person-img");
const job = document.getElementById("job");
const info = document.getElementById("info");
const author = document.getElementById("author");
// selecting buttons
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");
// experimenting
let count = 0;
prevBtn.addEventListener("click", function (e) {
  if (count === 0) {
    count = reviews.length - 1;
  } else {
    count--;
  }
  img.setAttribute("src", reviews[count].img);
  job.textContent = reviews[count].job;
  author.textContent = reviews[count].name;
  info.textContent = reviews[count].text;
});
nextBtn.addEventListener("click", function (e) {
  if (count === reviews.length - 1) {
    count = 0;
  } else {
    count++;
  }
  img.setAttribute("src", reviews[count].img);
  job.textContent = reviews[count].job;
  author.textContent = reviews[count].name;
  info.textContent = reviews[count].text;
});
// random review
function getRandomNumber() {
  let value = Math.floor(Math.random() * reviews.length);
  return value;
}
let prevValue = count;
randomBtn.addEventListener("click", function (e) {
  count = getRandomNumber();
  while (prevValue === count) {
    count = getRandomNumber();
  }
  img.setAttribute("src", reviews[count].img);
  job.textContent = reviews[count].job;
  author.textContent = reviews[count].name;
  info.textContent = reviews[count].text;
  prevValue = count;
});
window.addEventListener("DOMContentLoaded", function () {
  img.setAttribute("src", reviews[count].img);
  job.textContent = reviews[count].job;
  author.textContent = reviews[count].name;
  info.textContent = reviews[count].text;
});
