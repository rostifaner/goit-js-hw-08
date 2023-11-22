import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const emailArea = document.querySelector('input');
const messageArea = document.querySelector('textarea');
const submitBtn = document.querySelector('button');
emailArea.addEventListener('input', throttle(savedForm, 500));
messageArea.addEventListener('input', throttle(savedForm, 500));
submitBtn.addEventListener('click', handleSubmit);
form.style.margin = 'auto';

function savedForm() {
  const formValue = {
    email: emailArea.value,
    message: messageArea.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formValue));
}

if (localStorage.getItem('feedback-form-state')) {
  const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
  emailArea.value = savedData.email;
  messageArea.value = savedData.message;
}

function handleSubmit(event) {
  event.preventDefault();
  const getValue = {
    email: emailArea.value,
    message: messageArea.value,
  };
  if (getValue.email === '' || getValue.message === '') {
    alert('Email and message fields must be filled');
  } else {
    localStorage.removeItem('feedback-form-state');
    form.reset();
    console.log(getValue);
  }
}
