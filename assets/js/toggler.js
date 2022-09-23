---

---

/* main hamburger nav show */
$('.main-nav > .toggler').click(function () {
    const iw = window.innerWidth;
    if (iw < 900) {
        show($('.sidebar-menu.little'));
    } else {
        show($('.sidebar-menu.big'));
    }
})

/* main nav hide */
$('.sidebar-menu button.heading.top').click(function() {
    hide($('.sidebar-menu'));
})

/* mobile nav show/hide main categories  */
$('ul.little .level1-parent .heading').click(function () {
    $(this).siblings('ul.level1-parent-dropdown').fadeToggle();
})

/* desktop nav show/hide main categories by icon */
$('ul.nests .level1-parent .icon').click(function () {
    nestParent(this);
})

/* desktop nav show/hide main categories by text */
$('ul.nests .level1-parent .heading').click(function () {
    nestParent(this);
})

/* show/hide subnavigation links */
$('.subnavbar > .toggler').click(function () {
    if ($('.subnavbar ul').is(':visible')) {
        hide($('.subnavbar ul'));
        $(this).addClass('is-hiding');
        $(this).removeClass('is-showing');
    } else {
        show($('.subnavbar ul'));
        $(this).addClass('is-showing');
        $(this).removeClass('is-hiding');
    }

    return false;
})

/* desktop toggle search field */
$('.search button').click(function () {
    hide($(this));
    show($('#search-form')); 
    $('#search-form #search-term').focus();
    $('#search-form #search-term').val('');
})

function nestParent(elem) {
    $('ul.level1-parent-dropdown-big').fadeOut();
    $(elem).siblings('ul.level1-parent-dropdown-big').fadeToggle();

    $('ul.nests > li').removeClass('active');
    $(elem).parent().toggleClass('active');
}

function hide (elem) {
    $(elem).fadeOut();
}

function show (elem) {
    $(elem).fadeIn(350);
}
