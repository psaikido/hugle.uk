$('#formatting-tools').click(function () {
    screenPrintHideElements();
    $('.poem').addClass('poem-tool-default');
    $('.screen-print-tools').css('width', '100%');
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

$('#col-narrow').click(function () {
    $('.grid-wrap')
        .css('grid-template-columns', '0 600px 0');

    $('.main')
        .css('max-width', 'unset');
})

$('#col-regular').click(function () {
    $('.grid-wrap')
        .css('grid-template-columns', '0 800px 0');

    $('.main')
        .css('max-width', 'unset');
})

$('#col-wide').click(function () {
    $('.grid-wrap')
        .css('grid-template-columns', '0 1400px 0');

    $('.main')
        .css('max-width', 'unset');
})

$('#set-flex').click(function () {
    $('.poem-text')
        .css('display', 'flex');
})

$('#bkg-contain').click(function () {
    setBkg();

    $('.main')
        .css('background-size', 'contain');
})

$('#bkg-cover').click(function () {
    setBkg();

    $('.main')
        .css('background-size', 'cover');
})

$('#bkg-unset').click(function () {
    $('.poem .poem-image').css('display', 'block');
    $('.main').css('background-image', 'none');
})

$('#bkg-overlay-hl').click(function () {
    setBkg();

    $('.poem')
        .removeClass('bkg-overlay-unset')
        .addClass('bkg-overlay');

    $('.poem-text')
        .css('mix-blend-mode', 'hard-light');
})

$('#bkg-overlay-screen').click(function () {
    setBkg();

    $('.poem')
        .removeClass('bkg-overlay-unset')
        .addClass('bkg-overlay');

    $('.poem-text')
        .css('mix-blend-mode', 'screen');
})

$('#bkg-overlay-multiply').click(function () {
    setBkg();

    $('.poem')
        .removeClass('bkg-overlay-unset')
        .addClass('bkg-overlay');

    $('.poem-text')
        .css('mix-blend-mode', 'multiply');
})

$('#bkg-overlay-unset').click(function () {
    $('.poem')
        .removeClass('bkg-overlay')
        .addClass('bkg-overlay-unset');
})

$('#bkg-overlay-move').click(function () {
    $('.poem-title').draggable();
    $('.poem-text').draggable();
})

$('#overlay-light-on-dark').click(function () {
    $('.poem-text')
        .removeClass('d-on-l')
        .addClass('l-on-d');
})

$('#overlay-dark-on-light').click(function () {
    $('.poem-text')
        .removeClass('l-on-d')
        .addClass('d-on-l');
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
        .css('z-index', '0');
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
    $('.poem-wrap .page-footer').css('display', 'none');
    $('.poem-wrap .poem-written-date').css('display', 'none');
    $('.poem-wrap .poem-graphics').css('display', 'none');
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

