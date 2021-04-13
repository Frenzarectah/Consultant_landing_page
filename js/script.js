window.onload = () =>{
    document.addEventListener('scroll',function(){              //script used to make the menu bar appear/disappear
        if(window.scrollY > "1"){                               // using the event listener to monitorize continually the
            var menu = document.getElementsByClassName("menu"); //scrolling value.
            menu[0].classList.add("opacity");
        }else{  
            var menu = document.getElementsByClassName("menu opacity");
            menu[0].classList.remove("opacity");}
    });
}
