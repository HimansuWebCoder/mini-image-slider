const forward = document.querySelector(".incre");
const backward = document.querySelector(".decre");
const para = document.querySelector("p");
const imgName = document.querySelector("h1");
const myImage = document.querySelector("img");

import { veg, nonVeg, fruits } from "/food.js";
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
  } else if (i <= 0) {
    i = fruits.length - 1;
    myImage.src = fruits[i];
    imgName.textContent = fruits[i];
  }
}
