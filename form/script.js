function validateForm(event) {
  event.preventDefault();

  const emailInput = document.getElementById("email");
  const emailValue = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailValue)) {
    alert("Please enter a valid email address.");
    return;
  }

  const passwordInput = document.getElementById("password");
  const passwordValue = passwordInput.value.trim();
  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/;

  if (!passwordRegex.test(passwordValue)) {
    alert(
      "Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one digit, and one special character."
    );
    return;
  }

  alert("Registration successful! Redirecting to confirmation page.");
  window.location.href = "confirmation.html";
}
