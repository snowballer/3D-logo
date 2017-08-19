var wrap = document.querySelector('.wrap-show');
var texts =['assets','scripts','images','styles'];
var n=0;
setInterval(()=>{
  wrap.className = 'wrap-show wrap-move';
  setTimeout(function () {
    n++;
    wrap.className = 'wrap-show';
    wrap.children[0].innerHTML = texts[n];
    if(n==texts.length-1){
      wrap.children[1].innerHTML = texts[0];
      n=-1;
    }else{
      wrap.children[1].innerHTML = texts[n+1];
    }
  }, 1000);
},5000)
