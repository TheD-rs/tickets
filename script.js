const minus = document.querySelector('.minus'),
  plus = document.querySelector('.plus'),
  priceNum = document.querySelector('.price__num'),
  inputNum = document.querySelector('.num');

plus.addEventListener('click', () => {
  inputNum.value++
  if (inputNum.value > 20) {
    return inputNum.value = 20
  }
  priceNum.textContent = 200 * inputNum.value
})

minus.addEventListener('click', () => {
  inputNum.value--;
  if (inputNum.value < 0) {
    return inputNum.value = 0
  }
  priceNum.textContent = 200 * inputNum.value
})

