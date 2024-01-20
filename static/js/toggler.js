/* main hamburger nav show */
$('.main-nav > .toggler').click(function () {
	const iw = window.innerWidth;

	if (iw < 900) {
		show($('.sidebar-menu.little'));
	} else {
		/* work out how wide the desktop menu should be */
		const nav = $('.main-nav').width();
		const heading = $('heading').width();
		const search = $('.search').width();

		/* take off the left margin from the overall width */
		const sidebarWidth = (nav + heading + search - 15) + 'px';
		$('.sidebar-menu.big').width(sidebarWidth);
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
	$('.search button').css('background-image', 'none');
	$('.search button').css('box-shadow', 'none');
	show($('.pagefind-ui')); 
	$('.pagefind-ui__search-input')
		.focus()
		.val('');
	$('.pagefind-ui__search-clear').text('');
})

/* youtube lists */
$('h4.toggler').click(function () {
	$(this).next('ul.showhide').toggle();
})

/* desktop nav show/hide main categories by icon */
$('ul.nests .level1-parent').click(function () {
	$('.level1-parent-heading').removeClass('active');
	$(this).find('.level1-parent-heading').addClass('active');

	/* get the class name of the clicked heading and use it
	 * as the id of the 'dropdown-big' */
	const target = $(this).find('a').attr('class');

	$('ul.level1-parent-dropdown-big').css('display', 'none');
	$('#' + target).css('display', 'block');

	/* place the dropdown-big centrally */
	const currentWidth = $('#' + target).width();
	/* it's 'about' half to account for the variable width of the solos to its left */
	const aboutHalf = (currentWidth / 2) + 100;
	$('#' + target).css('left', 'calc(50% - ' + aboutHalf + 'px)');
})

$('#shavian-btn').click(function () {
    /* turn off extraneous elements */
    $('.subnavbar').toggle();
    $('.poem-wrap .poem-written-date').toggle();
    $('.poem-wrap .poem-graphics').toggle();
    $('.poem-wrap .poem-image').toggle();
    $('#formatting-tools').toggle();
    $('.grid-wrap').css('grid-template-columns', 'unset');
    $('.grid-wrap .main').css('max-width', 'auto');
    $('.grid-wrap .main').css('min-width', '100ch');

    $('.poem-text .latin').css('float', 'left');
    $('.poem-text .latin').css('width', '49%');
    $('.poem-text .middle-strip').css('width', '80%');
    $('.shavian-title')
		.css('display', 'block')
		.css('position', 'absolute')
		.css('right', '50px')
		.css('top', '0');
    $('.poem-text .shavian').css('float', 'left');
    $('.poem-text .shavian').css('width', '49%');
    $('.poem-text .shavian').toggle();
	$('#shavian-btn').css('display', 'none');
	$('#just-latin-btn').css('display', 'block');
})

$('#just-latin-btn').click(function () {
    /* turn off extraneous elements */
    $('.subnavbar').toggle();
    $('.poem-wrap .poem-written-date').toggle();
    $('.poem-wrap .poem-graphics').toggle();
    $('.poem-wrap .poem-image').toggle();
    $('#formatting-tools').toggle();
    $('.grid-wrap .main').css('max-width', '75ch');
    $('.grid-wrap .main').css('min-width', '75ch');

    $('.poem-text .latin').css('float', 'none');
    $('.poem-text .latin').css('width', 'auto');
    $('.poem-text .middle-strip').css('width', '55%');
    $('.shavian-title')
		.css('display', 'none');
    $('.poem-text .shavian').css('display', 'none');
	$('#shavian-btn').css('display', 'block');
	$('#just-latin-btn').css('display', 'none');
})

function hide (elem) {
	$(elem).fadeOut();
}

function show (elem) {
	$(elem).fadeIn(350);
}

