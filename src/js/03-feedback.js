import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
form.style.margin = 'auto';
const inputArea = document.querySelector('input');
const textArea = document.querySelector('textarea');
inputArea.addEventListener('input', throttle(savedForm, 500));
textArea.addEventListener('input', throttle(savedForm, 500));
function savedForm() {
  const formValue = {
    email: inputArea.value,
    message: textArea.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formValue));
}
if (localStorage.getItem('feedback-form-state')) {
  const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
  inputArea.value = savedData.email;
  textArea.value = savedData.message;
}
const submitBtn = document.querySelector('button');
submitBtn.addEventListener('click', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const getValue = {
    email: inputArea.value,
    message: textArea.value,
  };

  localStorage.removeItem('feedback-form-state');
  inputArea.value = '';
  textArea.value = '';
  console.log(getValue);
}
