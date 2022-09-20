---

---

$('.main-nav > .toggler').click(function () {
    const iw = window.innerWidth;
    if (iw < 900) {
        show($('.sidebar-menu.little'));
    } else {
        show($('.sidebar-menu.big'));
    }
})

$('.sidebar-menu button.heading.top').click(function() {
    hide($('.sidebar-menu'));
})

$('ul.little .level1-parent .heading').click(function () {
    $(this).siblings('ul.level1-parent-dropdown').fadeToggle();
})

$('ul.nests .level1-parent .icon').click(function () {
    nestParent(this);
})

$('ul.nests .level1-parent .heading').click(function () {
    nestParent(this);
})

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

$('.search button').click(function () {
    hide($(this));
    show($('#search-form')); 
    $('#search-form #search-term').focus();
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
