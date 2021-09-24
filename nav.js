const burger = document.querySelector(".hamburger")
const menu = document.querySelector(".nav__links--container")
const line = document.querySelector(".line")

burger.addEventListener("click", () => {
    menu.classList.toggle("show")
    line.classList.toggle("clicked")
})
