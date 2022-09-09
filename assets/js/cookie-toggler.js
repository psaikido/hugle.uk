const cookieTheme = getCookie('theme');

if (cookieTheme != ''){
    $('html').addClass(cookieTheme);
}


$("button.theme-toggle").click(function(e){
    e.preventDefault();

    if ($('html').hasClass('light')){
        $('html').removeClass('light');
        $('html').removeClass('print');

        eraseCookie('theme');
    } else {
        $('html').removeClass('print');
        $('html').addClass('light');

        createCookie('theme', 'light', 7);
    }
})

$("button.print").click(function(e){
    e.preventDefault();

    $('html').removeClass('dark');
    $('html').removeClass('light');
    $('html').addClass('print');

    createCookie('theme', 'print', 7);
})
