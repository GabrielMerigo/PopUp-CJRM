const button = document.querySelector('button')
const popUpWrapper = document.querySelector('.popup-wrapper')
const btnClose = document.querySelector('.popup-close')


button.addEventListener('click', () => {
  popUpWrapper.style.display = 'block';
})

popUpWrapper.addEventListener('click', () => {
  popUpWrapper.style.display = 'none'
})

