const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
// let endDate = new Date(2022, 8, 23, -2, 1);
let endDate = new Date(tempYear, tempMonth, tempDay + 11, 12, 30);

const year = endDate.getFullYear();
const day = endDate.getDate();
const month = months[endDate.getMonth()];
const weekday = weekdays[endDate.getDay()];
const hours = endDate.getHours();
const minutes = endDate.getMinutes();
giveaway.innerHTML = `giveaway ends on ${weekday},${day} ${month} ${year} ${hours}:${minutes}am`;

const futureTime = endDate.getTime();
function getRemainingTime() {
  const currentTime = new Date().getTime();
  const timeDiff = futureTime - currentTime;
  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;
  const oneSec = 1000;

  // calculate
  let days = timeDiff / oneDay;
  days = Math.floor(days);
  let hours = (timeDiff % oneDay) / oneHour;
  hours = Math.floor(hours);
  let minutes = Math.floor((timeDiff % oneHour) / oneMin);
  let secs = Math.floor((timeDiff % oneMin) / oneSec);
  let values = [days, hours, minutes, secs];
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }
  items.forEach(function (item, index) {
    item.textContent = format(values[index]);
  });
  if (timeDiff < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry,this giveaway has expired</h4>`;
  }
}
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
