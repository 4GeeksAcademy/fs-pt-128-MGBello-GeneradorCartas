const generateNewCard = (() => {
  const stickValue = ['♥', '♦', '♠', '♣']
  const letterValue = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 'J', 'Q', 'K']
  let automaticStick = Math.floor(Math.random() * stickValue.length)
  let automaticSelection = Math.floor(Math.random() * letterValue.length)
  const above = document.getElementById("stick-above")
  const below = document.getElementById("stick-below")
  const number = document.getElementById("number")
  const color = (stickValue[automaticStick] === '♥' || stickValue[automaticStick] === '♦') ? 'red' : 'black'
  const width = document.querySelector('#width')
  const height = document.querySelector('#height')
  const card = document.querySelector('.card')
  const visibility = () => {
    if (width.value == 0 || height.value == 0) {
      card.style.display = 'none';
      above.style.display = 'none'
      below.style.display = 'none'
      number.style.display = 'none'
    } else {
      card.style.display = 'block';
      above.style.display = 'flex'
      below.style.display = 'flex'
      number.style.display = 'flex'
    }
  }
  width.addEventListener('input', () => {
    card.style.width = width.value + 'px'
    visibility()
  })
  height.addEventListener('input', () => {
    card.style.height = height.value + 'px'
    visibility()
  })
  above.innerHTML = `<span class="above-adjustement" style="color: ${color}">${stickValue[automaticStick]}</span>`
  below.innerHTML = `<span class="below-adjustement" style="color: ${color}">${stickValue[automaticStick]}</span>`
  number.innerHTML = `<p class="number-center" style="color: ${color}">${letterValue[automaticSelection]}</p>`
})
const width = document.querySelector('#width')
window.onload = generateNewCard

const btn = document.getElementById("myBtn");
btn.addEventListener('click', generateNewCard)

setInterval(generateNewCard, 10000);

