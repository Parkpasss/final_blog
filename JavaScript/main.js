const complete = document.querySelectorAll('.complete')
const $now = document.getElementsByClassName('now')
const current = document.getElementById('current')
const imgs = document.querySelectorAll('.imgs img')

complete.forEach((complete) => complete.addEventListener('click', ComClick))
imgs.forEach((img) => img.addEventListener('click', imgClick))

function imgClick(e) {
  imgs.forEach((img) => (img.style.opacity = 1))
  current.src = e.target.src
  current.classList.add('fade-in')
  setTimeout(() => current.classList.remove('fade-in'), 500)
  e.target.style.opacity = 0.4
}

function ComClick(e) {
  const com = e.target
  com.classList.toggle('now')
  com.classList.toggle('finish')

  if (com.classList.contains('finish')) {
    com.style.textDecorationLine = 'line-through'
  } else {
    com.style.textDecorationLine = 'none'
  }
}

//자바스크립트.html 전용

const $form = document.querySelector('#form')
const $tbody = document.querySelector('#table tbody')
$form.addEventListener('submit', make)

function make(event) {
  event.preventDefault()
  const row = parseInt(event.target.row.value)
  const cell = parseInt(event.target.cell.value)
  $tbody.innerHTML = ''

  for (let i = 0; i < row; i++) {
    const newrow = document.createElement('tr')

    for (let j = 0; j < cell; j++) {
      const newcell = document.createElement('td')
      const input = document.createElement('input')
      input.style.width = '100px'
      input.style.height = '50px'
      input.style.margin = '7px 12px'
      newcell.appendChild(input)
      newrow.appendChild(newcell)
    }

    $tbody.appendChild(newrow)
  }

  $form.removeEventListener('submit', make)
  $form.addEventListener('submit', goTable)
}

function goTable(event) {
  event.preventDefault()
  const $inputs = document.querySelectorAll('#table tbody input')

  for (let i = 0; i < $inputs.length; i++) {
    const name = $inputs[i].value
    $inputs[i].parentNode.textContent = name
    $inputs[i].classList.add('name')
  }

  $form.removeEventListener('submit', goTable)
  $form.addEventListener('submit', make)
}

const $dark_btn = document.querySelector('.dark_btn')
$dark_btn.addEventListener('click', DarkCheck)

const $dark_p = document.querySelector('.dark_p')
const $nav = document.querySelector('nav')
const $back = document.querySelector('body')
var isDarkMode = false

function upDark() {
  isDarkMode = true
  $nav.style.backgroundColor = '#7b4b4b'
  $back.style.backgroundColor = '#644343'
  $back.style.color = 'white'
  $dark_p.style.color = 'white'
}

function downDark() {
  isDarkMode = false
  $nav.style.backgroundColor = '#fddeda'
  $back.style.backgroundColor = 'white'
  $back.style.color = 'black'
  $dark_p.style.color = 'black'
}

function DarkCheck() {
  if (isDarkMode) {
    downDark()
  } else {
    upDark()
  }
}
