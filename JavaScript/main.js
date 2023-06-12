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

function ComClick(event) {
  const com = event.target
  com.classList.toggle('now')
  com.classList.toggle('finish')
  if (com.classList.contains('finish')) {
    com.style.textDecoration = 'line-through'
    console.log('에러 체크 완')
  } else {
    com.style.textDecoration = 'none'
    console.log('에러 왜지')
  }
}
