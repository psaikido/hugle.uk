if (getCookie("theme") == "light"){
    $('html').addClass("light");
    toggleMenu('light');
}


function toggleMenu(state) {
    if (state === 'light') {
        $('nav').addClass("navbar-light");
        $('nav').removeClass("navbar-dark");
    } else {
        $('nav').addClass("navbar-dark");
        $('nav').removeClass("navbar-light");
    }
}

$(".theme-toggle").click(function(e){
    e.preventDefault();
    $('html').toggleClass("light");

    if ($('html').hasClass("light")){
        document.cookie = "theme=light;path=/";
        toggleMenu('light');
    } else {
        document.cookie = "theme=dark;path=/";
        toggleMenu('dark');
    }
})
