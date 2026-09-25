const cars = document.querySelector(".cars");
const left = document.querySelector("#left");
const right = document.querySelector("#right");

right.onclick = function () {
    cars.scrollLeft += cars.clientWidth;
};

left.onclick = function () {
    cars.scrollLeft -= cars.clientWidth;
};