// colorscheme.js
let switchHandle = document.querySelector('#switch-color-scheme')
let themeIcon = document.querySelector('#theme-icon')
var html = document.documentElement

const switchMode = () => {
    let attr = html.getAttribute('color-mode')
    let colorMode = 'light'
    if (attr === 'light') {
        html.setAttribute('color-mode', 'dark')
        themeIcon.classList = 'iconfont icon-sun'
        colorMode = 'dark'
    } else {
        html.setAttribute('color-mode', 'light')
        themeIcon.classList = 'iconfont icon-moon'
        colorMode = 'light'
    }
    localStorage.setItem('color-mode', colorMode)
}

switchHandle.addEventListener('click', switchMode, false)

const currColorMode = localStorage.getItem('color-mode')
if (currColorMode === 'light') {
    themeIcon.classList = 'iconfont icon-moon'
} else {
    themeIcon.classList = 'iconfont icon-sun'
}
