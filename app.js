const button = document.querySelector('button')
const popUpWrapper = document.querySelector('.popup-wrapper')

button.addEventListener('click', () => {
  popUpWrapper.style.display = 'block';
})

popUpWrapper.addEventListener('click', event => {
  const classListElement = event.target.classList
  console.log(classListElement);
})

