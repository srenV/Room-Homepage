const backButton = document.getElementById('backButton')
const forwardButton = document.getElementById('forwardButton')
const menuButton = document.getElementById('menuButton')
const closeButton = document.getElementById('closeButton')
const navWrapper = document.getElementById('navWrapper')

const items = document.querySelectorAll('.item')
const images = document.querySelectorAll('.image')

let currentIndex = 0

backButton.addEventListener('click', () =>{
    currentIndex = (currentIndex - 1 + images.length) % images.length
    updateSection()
})

forwardButton.addEventListener('click', () =>{
    currentIndex = (currentIndex + 1) % images.length
    updateSection()
})

function updateSection() {
    images.forEach((img, index) => {
        if (index === currentIndex) {
            img.style.display = 'block'
        } else {
            img.style.display = 'none'
        }
    })

    items.forEach((itm, index) => {
        if (index === currentIndex) {
            itm.style.display = 'block'
        } else {
            itm.style.display = 'none'
        }
    })
}

menuButton.addEventListener('click', () => {
    navWrapper.classList.add('active')
})

closeButton.addEventListener('click', () => {
    navWrapper.classList.remove('active')
})
