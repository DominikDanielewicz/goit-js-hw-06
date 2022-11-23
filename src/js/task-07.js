"use strict";

const inputRange = document.querySelector("#font-size-control");
const textArea = document.querySelector("#text");

inputRange.addEventListener("input", (event) => {
  textArea.style.fontSize = event.currentTarget.value + "px";
});
