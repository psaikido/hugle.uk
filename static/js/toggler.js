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

/* show/hide subnavigation links */
$('aside.subnav2 > section button.toggler').click(function () {
    $(this).siblings('ul').toggle();
    return false;
})

/* desktop toggle search field */
$('.search button').click(function () {
    hide($(this));
    show($('.pagefind-ui')); 
    $('.pagefind-ui__search-input')
        .focus()
        .val('');
})

/* screen print a poem */
$('#screen-print').click(function () {
    $('.poem').addClass('display-card');

    /* turn off extraneous elements */
    $('.main-nav').css('display', 'none');
    $('heading').css('display', 'none');
    $('.search').css('display', 'none');
    $('.subnavbar').css('display', 'none');
    $('.poem .page-footer').css('display', 'none');
    $('.poem .poem-image').css('display', 'none');
    $('.poem .poem-written-date').css('display', 'none');
    $('#screen-print').css('display', 'none');
    $('footer').css('display', 'none');

    /* get the main image and set it as the background */
    var img = $('.poem-image img').attr('src');
    $('.main').css('background-image', 'url(' + img + ')');
    $('.main').css('position', 'relative');
    $('.main').css('isolation', 'isolate');
    $('.main').css('background-repeat', 'no-repeat');
    $('.main').css('background-size', 'contain');
    var $mainHeight = $('.poem-text').height();
    $('.main').css('height', $mainHeight + 90);
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
