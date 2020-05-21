// back to top js
function isHidden() {
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  if (scrollTop > 0) {
     document.querySelector(".back-to-top").className = "back-to-top";
  } else {
    document.querySelector(".back-to-top").className = "back-to-top hidden";
  }
}

const backToTop = () => {
  let scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop,
    delay = 10,
    time = 200;
  let step = Math.ceil(scrollTop * delay / time);
  let timer = setInterval(() => {
    scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop - step <= 0) {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      clearInterval(timer);
    } else {
      document.documentElement.scrollTop = scrollTop - step;
      document.body.scrollTop = scrollTop - step;
    }
  }, delay);
}

document.addEventListener("scroll", isHidden, false);
document.querySelector(".back-to-top").addEventListener("click", backToTop, false);
