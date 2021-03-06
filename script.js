const popup = document.querySelector(".popup");
const overlay = document.querySelector(".overlay");
const btnClosePopup = document.querySelector(".close-popup");
const btnsOpenPopup = document.querySelectorAll(".show-popup");

const openPopup = function () {
  popup.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closePopup = function () {
  popup.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenPopup.length; i++)
  btnsOpenPopup[i].addEventListener("click", openPopup);

btnClosePopup.addEventListener("click", closePopup);
overlay.addEventListener("click", closePopup);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !popup.classList.contains("hidden")) {
    closePopup();
  }
});

const bingBong = document.querySelector(".bingBong");
const overlayBong = document.querySelector(".overlay");
const btnCloseBingBong = document.querySelector(".close-bingBong");
const btnOpenBingBong = document.querySelector(".show-bingBong");

const openBingBong = function () {
  bingBong.classList.remove("hidden");
  popup.classList.add("hidden");
  overlay.classList.remove("hidden");
};

const closeBingBong = function () {
  bingBong.classList.add("hidden");
  popup.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

btnOpenBingBong.addEventListener("click", openBingBong);

btnCloseBingBong.addEventListener("click", closeBingBong);
overlayBong.addEventListener("click", closeBingBong);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !bingBong.classList.contains("hidden")) {
    closeBingBong();
  }
});

function updateDate() {
  var today = new Date();

  var date =
    today.getMonth() + 1 + "-" + today.getDate() + "-" + today.getFullYear();

  document.getElementById("date").innerHTML = date;

  setTimeout(updateClock, 100);
}
updateDate();

function updateClock() {
  var timer = new Date(),
    time =
      timer.getHours() +
      ":" +
      ("0" + timer.getMinutes()).slice(-2) +
      ":" +
      ("0" + timer.getSeconds()).slice(-2);

  document.getElementById("time").innerHTML = time;

  setTimeout(updateClock, 1000);
}
updateClock();
