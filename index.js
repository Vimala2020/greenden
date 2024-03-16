var sidenav= document.getElementById("sidenav")
var menuicon=document.getElementById("menuicon")
var closenav=document.getElementById("closenav")

menuicon.addEventListener("click",function(){
    sidenav.style.left=-80%
})
closenav.addEventListener("click", function(){
sidenav.style.left= -20%
})