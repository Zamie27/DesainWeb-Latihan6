// scroll  Image
const imageSlider = document.querySelector(".image-slider");
const images = document.querySelectorAll(".image-slider img");
let currentIndex = 0;

function slideLeft() {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlider();
}
function slideRight() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlider();
}
function updateSlider() {
  const translateX = -currentIndex * 300;
  imageSlider.style.transform = `translateX(${translateX}px)`;
}

const leftArrow = document.createElement("a");
leftArrow.textContent = "";
leftArrow.addEventListener("click", slideLeft);

const rightArrow = document.createElement("a");
rightArrow.textContent = "";
rightArrow.addEventListener("click", slideRight);

imageSlider.insertAdjacentElement("beforebegin", leftArrow);
imageSlider.insertAdjacentElement("afterend", rightArrow);

setInterval(slideLeft, 3000);
