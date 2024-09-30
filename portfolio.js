var icon = document.getElementById("dark-mode");

icon.onclick = function(){
    document.body.classList.toggle("mode-change");
    if(document.body.classList.contains("mode-change")){
        icon.src = "mode images/sun.png";
    }
    else{
        icon.src = "mode images/moon.png";
    }
}

