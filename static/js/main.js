const nav = document.querySelector('.navbar__mobile')
const navLinks = document.querySelector('.navbar__links')

nav.addEventListener('click', (event) => {
  navLinks.classList.toggle('active')
})