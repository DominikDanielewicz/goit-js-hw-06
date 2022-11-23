"use strict";

const form = document.querySelector(".login-form");
const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input[type="password"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (emailInput.value === "" || passwordInput.value === "") {
    alert(
      `Wszytskie pola muszą być uzupełnione! Sprawdź je ponownie przed wysłaniem.`
    );
  } else {
    const {
      elements: { email, password },
    } = event.currentTarget;

    console.log(`Email: ${email.value}, Password: ${password.value}`);
  }

  event.currentTarget.reset();
});
