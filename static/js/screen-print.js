/* screen print a poem - overlay version */
$('#screen-print-overlay').click(function () {
    $('.poem').addClass('screen-print-overlay');
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

/* screen print a poem - side by side version */
$('#screen-print').click(function () {
    $('.poem').addClass('screen-print');
    screenPrintHideElements();

    var imgSrc = $('.poem-image img').attr('src');
    $('.main').css('position', 'relative');
    $('.main').css('isolation', 'isolate');
    var $mainHeight = $('.poem-text').height();
    $('.main').css('height', $mainHeight + 90);
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
    $('.poem-wrap').css('position', 'relative');
    $('.poem-wrap').css('inset', '0');
    $('.screen-print-tools').css('position', 'absolute');
}

