const switchHandle = document.querySelector('#switch-color-scheme')
const html = document.documentElement

const switchMode = () => {
    const attr = html.getAttribute('color-mode')
    const colorMode = 'light'
    if (attr === 'light') {
        html.setAttribute('color-mode', 'dark')
        colorMode = 'dark'
    } else {
        html.setAttribute('color-mode', 'light')
        colorMode = 'light'
    }
    localStorage.setItem('color-mode', colorMode)
}

switchHandle.addEventListener('click', switchMode, false)

const onloadColor = () => {
    const colorMode = localStorage.getItem('color-mode')
    if (colorMode) {
        html.setAttribute('color-mode', colorMode)
    }
}

onloadColor()
