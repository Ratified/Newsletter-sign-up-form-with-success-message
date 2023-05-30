const emailAddress = document.getElementById('email__address');
const errorMessage = document.getElementById('email__error-message');
const emailDisplayed = document.getElementById('display-email')

emailAddress.addEventListener('click', e => {
    e.preventDefault();
    if(!validateEmail(emailAddress.value) || emailAddress.value === null){
        errorMessage.style.display = 'block';
        emailAddress.style.border = '1px solid red';
    }
    if(validateEmail(emailAddress.value)){
        errorMessage.style.display = 'none';
        emailAddress.style.border = '1px solid black';

        emailDisplayed.textContent = emailAddress;
    }
})


function validateEmail(email) {
    // Regular expression pattern for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }