$('#formatting-tools').click(function () {
    screenPrintHideElements();
    $('.poem')
        .addClass('poem-tool-default');
})

$('#col-left').click(function () {
    $('.poem')
        .removeClass('poem-centre poem-right poem-flex')
        .addClass('poem-left');
})

$('#col-centre').click(function () {
    $('.poem')
        .removeClass('poem-left poem-right poem-flex')
        .addClass('poem-centre');
})

$('#col-right').click(function () {
    $('.poem')
        .removeClass('poem-left poem-centre poem-flex')
        .addClass('poem-right');
})

$('#col-flex').click(function () {
    $('.poem')
        .removeClass('poem-left poem-centre poem-right')
        .addClass('poem-flex');
})

$('#col-wide').click(function () {
    $('.grid-wrap')
        .css('grid-template-columns', '0 1400px 0');

    $('.main')
        .css('max-width', 'unset');
})

$('#cols').click(function () {
    $('.poem')
        .addClass('screen-print')
        .removeClass('screen-print-overlay');

    screenPrintHideElements();

    var $mainHeight = $('.poem-text').height();
    $('.main').css('background-image', 'none')
        .css('position', 'relative')
        .css('isolation', 'isolate')
        .css('height', $mainHeight + 90);

    $('.poem-image').css('position', 'absolute')
        .css('display', 'block')
        .css('top', '60px')
        .css('right', '5px')
        .css('width', '47%');
})

$('#set-flex').click(function () {
    $('.poem-text')
        .css('display', 'flex');
})

/* screen print a poem - overlay version */
$('#overlay').click(function () {
    $('.poem')
        .addClass('screen-print-overlay')
        .removeClass('screen-print');

    screenPrintHideElements();
    setBkg();
})

$('#bkg-contain').click(function () {
    $('.main')
        .css('background-size', 'contain');
})

$('#bkg-cover').click(function () {
    $('.main')
        .css('background-size', 'cover');
})

function setBkg() {
    /* get the main image and set it as the background */
    $('.poem .poem-image').css('display', 'none');
    var img = getImage($('.poem-image img'));
    
    $('.main')
        .css('background-image', 'url(' + img.src + ')')
        .css('position', 'relative')
        .css('isolation', 'isolate')
        .css('background-repeat', 'no-repeat')
        .css('background-size', 'cover');
}

function getImage($img) {
    const image = new Image();
    image.src = $img.attr('src');
    return image;
}

function screenPrintHideElements() {
    /* turn off extraneous elements */
    $('.main-nav').css('display', 'none');
    $('heading').css('display', 'none');
    $('.search').css('display', 'none');
    $('.subnavbar').css('display', 'none');
    $('.poem .page-footer').css('display', 'none');
    $('.poem .poem-written-date').css('display', 'none');
    $('#formatting-tools').css('display', 'none');
    $('footer').css('display', 'none');
    $('.screen-print-tools .tools').css('display', 'block');
    $('body').css('position', 'relative');
    $('grid-wrap').css('grid-template-columns', 'unset');
    $('grid-wrap main').css('grid-area', 'unset');
    $('.poem-wrap')
        .css('inset', '0')
        .css('width', '100%')
        .css('height', '100%');
}

