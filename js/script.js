window.onload = () =>{
    document.addEventListener('scroll',function(){              //script used to make the menu bar appear/disappear
        if(window.scrollY > "1"){                               // using the event listener to monitorize continually the
            var menu = document.getElementsByClassName("navbar"); //scrolling value.
            var menulist = document.getElementsByClassName("navbar__menu");
            menu[0].classList.add("changes");
            menulist[0].classList.add("change");

        }else{  
            var menu = document.getElementsByClassName("navbar changes");
            var menulist = document.getElementsByClassName("navbar__menu change");
            menu[0].classList.remove("changes");
            menulist[0].classList.remove("change");
        }
    });
}
