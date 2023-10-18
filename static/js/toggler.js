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
$('ul.nests .level1-parent-heading').click(function () {
	$('ul.nests .level1-parent-heading.active').removeClass('active');
	$(this).toggleClass('active');
})

function hide (elem) {
	$(elem).fadeOut();
}

function show (elem) {
	$(elem).fadeIn(350);
}

