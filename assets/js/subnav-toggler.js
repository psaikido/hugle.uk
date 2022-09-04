---

---

$('.subnavbar > .toggler').click(function () {
    if ($('.subnavbar ul').is(':visible')) {
        hide(this);
    } else {
        show(this);
    }

    return false;
})

function hide (elem) {
    $('.subnavbar').find('ul').fadeOut();
    $(elem).attr('class', 'toggler not-showing');
}

function show (elem) {
    $('.subnavbar').find('ul').fadeIn();
    $(elem).attr('class', 'toggler is-showing');
}
