const button = document.querySelector('button')
const popUpWrapper = document.querySelector('.popup-wrapper')

button.addEventListener('click', () => {
  popUpWrapper.style.display = 'block';
})

popUpWrapper.addEventListener('click', event => {
  const classListElement = event.target.classList[0];
  const classNames = ['popup-close','popup-wrapper','moreInfo']
  const includesClassNames = classNames.some(className => className === classListElement) 

  if(includesClassNames){
    popUpWrapper.style.display = 'none'
  }
})

