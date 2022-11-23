"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const elementsCount = document.querySelector('input[type="number"]');
const boxedArea = document.querySelector("#boxes");

function createBoxes(ammount) {
  ammount = elementsCount.value;
  for (let i = 0; i < ammount; i++) {
    boxedArea.insertAdjacentHTML(
      "beforeend",
      `<div style='background-color: ${getRandomHexColor()}; width: ${
        30 + i * 10
      }px; height: ${30 + i * 10}px'></div>`
    );
  }
}

function destroyBoxes() {
  while (boxedArea.hasChildNodes()) {
    boxedArea.removeChild(boxedArea.firstChild);
  }
}

createButton.addEventListener("click", createBoxes);

destroyButton.addEventListener("click", destroyBoxes);
