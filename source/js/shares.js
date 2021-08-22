let shareIcon = document.querySelector('#share-icon')
let shareContent = document.querySelector('.share-content')
shareIcon.addEventListener("click", openOrHideShareContent, false)

function openOrHideShareContent() {
  let isHidden = shareContent.classList.contains('hidden')
  if (isHidden) {
    shareContent.classList.remove('hidden')
  } else {
    shareContent.classList.add('hidden')
  }
}
