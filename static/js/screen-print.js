/* screen print a poem - side by side version */
$('#screen-print').click(function () {
    $('.poem').addClass('screen-print');
    $('.poem').removeClass('screen-print-overlay');
    screenPrintHideElements();

    var imgSrc = $('.poem-image img').attr('src');
    $('.main').css('position', 'relative');
    $('.main').css('isolation', 'isolate');
    var $mainHeight = $('.poem-text').height();
    $('.main').css('height', $mainHeight + 90);
})

/* screen print a poem - overlay version */
$('#screen-print-overlay').click(function () {
    $('.poem').addClass('screen-print-overlay');
    $('.poem').removeClass('screen-print');
    screenPrintHideElements();

    /* get the main image and set it as the background */
    $('.poem .poem-image').css('display', 'none');
    var img = getImage($('.poem-image img'));
    
    /*$('.main').css('width', '600px');*/
    $('.main').css('background-image', 'url(' + img.src + ')');
    $('.main').css('position', 'relative');
    $('.main').css('isolation', 'isolate');
    $('.main').css('background-repeat', 'no-repeat');
    $('.main').css('background-size', 'cover');
    /*$('.main').css('height', $mainHeight + 90);*/
})

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
    $('footer').css('display', 'none');
    /*
    $('.poem-wrap').css('position', 'relative');
    $('.poem-wrap').css('inset', '0');
    */
    $('.screen-print-tools').css('position', 'absolute');
    $('.screen-print-tools').css('left', '-197px');
    $('.screen-print-tools').css('top', '3px');
    $('.screen-print-tools').css('display', 'grid');
    $('.screen-print-tools .tools').css('display', 'block');
    $('body').css('position', 'relative');
    $('grid-wrap').css('grid-template-columns', 'unset');
    $('grid-wrap main').css('grid-area', 'unset');
    $('.poem-wrap').css('inset', '0');
    $('.poem-wrap').css('width', '100%');
    $('.poem-wrap').css('height', '100%');
}

