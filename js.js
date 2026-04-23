function hiddenHamburguer(){
    
    var btn = document.getElementById("btn-show")
    var nav = document.getElementsByClassName("nav-bar")
    if (nav[0].classList.contains("active")) {
        btn.innerText = "≡"
    }else{
        btn.innerText = "x"
    }
    nav[0].classList.toggle("active")
} 

