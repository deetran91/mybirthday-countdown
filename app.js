let countDownDate = new Date("jun 9, 2022 00:00:00").getTime();

function countDown() {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  let second = 1000;
  let minute = second * 1000;
  let hour = minute * 60;
  let day = hour * 24;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("day").innerText = days;
  document.getElementById("hour").innerText = hours;
  document.getElementById("minute").innerText = minutes;
  document.getElementById("second").innerText = seconds;
}

setInterval(function () {
  countDown();
}, 1000);
