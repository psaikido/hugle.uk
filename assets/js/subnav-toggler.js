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
    $(elem).html('show index');

    $('.subnavbar')
        .attr('class', 'subnavbar toggler hide');

    $('.subnavbar').find('ul').hide();

    $(elem)
        .attr('class', 'subnavbar toggler hide');
}

function show (elem) {
    $(elem).html('hide index');

    $('.subnavbar')
        .attr('class', 'subnavbar toggler show');

    $('.subnavbar').find('ul').show();

    $(elem)
        .attr('class', 'subnavbar toggler show');
}
