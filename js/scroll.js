let scrollTop = document.querySelector('.scroll-top')

window.addEventListener('scroll' , function(e){
   scrollTop.style.transform = `rotate(${+window.pageYOffset + "deg"})`
})