const errorMessage = document.querySelector('#email__error-message');
const emailInput = document.querySelector('#email__address');
const submitBtn = document.querySelector('#subscribe');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const emailAddress = emailInput.value;

  const isValidEmail = validateEmail(emailAddress);

  if (isValidEmail) {
    errorMessage.style.display = 'none';
    localStorage.setItem('email', emailAddress); // Store the email address in local storage
    window.location.href = './thanks.html';
  } else {
    errorMessage.style.display = 'block';
    emailInput.style.border = '1px solid red';
  }
});

function validateEmail(email) {
  const regex = new RegExp(/^[\w.-]+@[\w.-]+\.\w+$/);
  return regex.test(email);
}
