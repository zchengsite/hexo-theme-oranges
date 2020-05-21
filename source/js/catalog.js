// catalog js
var catalog = null;
var catalogTopHeight = null;
function handleScoll() {
  catalog = document.getElementById("catalog");
  catalogTopHeight = catalog.offsetTop;
}

function changePos() {
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  if (scrollTop > catalogTopHeight - 20) {
    catalog.style = "position: fixed; top: 20px;"
  } else {
    catalog.style = "position: absolute; top: calc(290px + 88px + 30px)"
  }
}

function isActiveCat() {
  // 可宽限高度值
  let offsetHeight = 20

  // 当前页面滚动位置距页面顶部的高度值
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop

  // 页面所有标题列表
  let headerLinkList = document.getElementsByClassName("headerlink")

  // 页面所有目录列表
  let catLinkList = document.getElementsByClassName("toc-link")

  for(let i = 0; i < catLinkList.length; i++) {
    let currentTopCat = headerLinkList[i].offsetTop - offsetHeight
    let nextTopCat = i + 1 === headerLinkList.length ?
        Infinity : headerLinkList[i+1].offsetTop - offsetHeight

    if (scrollTop >= currentTopCat && scrollTop < nextTopCat) {
      catLinkList[i].className = "toc-link active"
    } else {
      catLinkList[i].className = "toc-link"
    }
  }
}

handleScoll();
isActiveCat();
document.addEventListener("scroll", changePos, false);
document.addEventListener("scroll", isActiveCat, false);
