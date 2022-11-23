"use strict";

const validatedInput = document.querySelector("#validation-input");

validatedInput.addEventListener("change", validateInput);

function validateInput() {
  if (
    validatedInput.value.length < validatedInput.getAttribute("data-length")
  ) {
    validatedInput.classList.remove("valid");
    validatedInput.classList.add("invalid");
  } else {
    validatedInput.classList.remove("invalid");
    validatedInput.classList.add("valid");
  }
}
