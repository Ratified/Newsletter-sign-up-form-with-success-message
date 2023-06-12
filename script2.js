var emailSpan = document.getElementById("display-email");
var storedEmail = localStorage.getItem('email'); // Retrieve the email address from local storage

if (storedEmail) {
  emailSpan.textContent = storedEmail;
}
