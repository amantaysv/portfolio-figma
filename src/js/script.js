const burger = document.querySelector('.burger')
const navbar = document.querySelector('.navbar-nav')
const overlay = document.querySelector('.overlay')

burger.addEventListener('click', () => {
  navbar.classList.toggle('active')
  burger.classList.toggle('active')
  overlay.classList.toggle('active')
})