"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorButton = document.querySelector(".change-color");
const colorValue = document.querySelector(".color");
const bodyArea = document.body;

changeColorButton.addEventListener("click", () => {
  colorValue.textContent = getRandomHexColor();
  bodyArea.style.backgroundColor = colorValue.textContent;
});
