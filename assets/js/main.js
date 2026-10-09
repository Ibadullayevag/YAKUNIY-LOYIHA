const signInBtn = document.getElementById("signInBtn");
const modal = document.getElementById("modal");
 const close = document.getElementById("close");
const track = document.querySelector(".cars");
const prevBtn = document.getElementById("left");
const nextBtn = document.getElementById("right");
const card = document.querySelectorAll(".car1");
const commentTrack = document.querySelector(".comments");
const commentPrevBtn = document.getElementById("comment-left");
const commentNextBtn = document.getElementById("comment-right");
const comments = document.querySelectorAll(".comment");
const up = document.querySelector(".up");
const darkButton = document.querySelector(".darkmode button");

const cardLength = card.length;
signInBtn.onclick = function ()
 { modal.style.display = "flex"; };
  close.onclick = function () { modal.style.display = "none"; };
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



const commentLength = comments.length;

let commentIndex = 0;

commentNextBtn.addEventListener("click", () => {
  if (commentIndex < commentLength - 2) {
    commentIndex++;
    updateComments();
  }
});

commentPrevBtn.addEventListener("click", () => {
  if (commentIndex > 0) {
    commentIndex--;
    updateComments();
  }
});

function updateComments() {
  const commentWidth = comments[0].offsetWidth;
  const gap = 16;
  const moveAmount = -commentIndex * (commentWidth + gap);
  commentTrack.style.transform = `translateX(${moveAmount}px)`;
}


//up//
up.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};


darkButton.onclick = function () {
    document.body.classList.toggle("dark");
};




signBtn.addEventListener("click", () => {
    signKatta.classList.toggle("active");
});

signClose.addEventListener("click", () => {
    signKatta.classList.remove("active");
});

