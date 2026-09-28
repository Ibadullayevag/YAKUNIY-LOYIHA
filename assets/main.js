const track = document.querySelector(".cars");
const prevBtn = document.getElementById("left");
const nextBtn = document.getElementById("right");
const card = document.querySelectorAll(".car1");

const cardLength = card.length;

let currentIndex = 0;

nextBtn.addEventListener("click", () => {
  if (currentIndex < cardLength - 2) {
    currentIndex++;
    updateCarousel();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

function updateCarousel() {
  const cardWidth = card[0].offsetWidth;
  const gap = 20;
  const moveAmount = -currentIndex * (cardWidth + gap);
  track.style.transform = `translateX(${moveAmount}px)`;
}