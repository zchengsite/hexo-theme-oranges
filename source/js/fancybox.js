// fancybox js
let fancyTimer = setInterval(function(){
  if(!window.$){
    return;
  }
  $(document).ready(function() {
    $(".markdown-body img").each(function () {
      if($(this).parent().get(0).tagName.toLowerCase() === "a") {
        return;
      }
      // $(this).attr("data-fancybox", "gallery"); // if you add 'data-fancybox', img will display after showed
      var element = document.createElement("a");
      $(element).attr("data-fancybox", "gallery");
      $(element).attr("href", $(this).attr("src"));
      $(this).wrap(element);
    });

    clearInterval(fancyTimer);
  });
}, 10);
