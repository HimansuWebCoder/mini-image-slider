const forward = document.querySelector(".incre");
const backward = document.querySelector(".decre");
const para = document.querySelector("p");
const imgName = document.querySelector("h1");
const myImage = document.querySelector("#image");
const nav2 = document.querySelector("#nav2");
const nav1 = document.querySelector("#nav1");

<<<<<<< HEAD
import { fruits } from "./food.js";
=======
import { veg, nonVeg, fruits } from "./food.js";
>>>>>>> bc8bf1907aded6bade8407645c3c15bcd4ceb7f0
let i = 0;
myImage.src = fruits[i];
para.textContent = i;
imgName.textContent = fruits[i];

forward.addEventListener("pointerup", incre);
backward.addEventListener("pointerup", decre);

myImage.addEventListener("click", incre);

function incre() {
  if (i < fruits.length - 1) {
    i++;
    myImage.src = fruits[i];
    myImage.alt = fruits[i];
    para.textContent = i;
    imgName.textContent = fruits[i];
    nav2.style.backgroundColor = "white";
    nav1.style.background = "none";
  } else if (i <= fruits.length) {
    i = 0;
    myImage.src = fruits[i];
    imgName.textContent = fruits[i];
  }
}

function decre() {
  if (i > 0) {
    i--;
    myImage.src = fruits[i];
    imgName.textContent = fruits[i];
    nav2.style.background = "none"
    nav1.style.background = "white"
  } else if (i <= 0) {
    i = fruits.length - 1;
    myImage.src = fruits[i];
    imgName.textContent = fruits[i];
  }
}
