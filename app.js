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
    images.forEach((img) => {
        switch (currentIndex) {
            case 0:
                img.style.transform = 'translateX(0%)'
                break;
             case 1:
                img.style.transform = 'translateX(-100%)'
                break;
             case 2:
                img.style.transform = 'translateX(-200%)'
                break;
            default:
                break;
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
