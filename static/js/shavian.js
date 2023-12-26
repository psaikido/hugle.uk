const inp = $("#txt");
inp.css('font-family', 'Noto Sans Shavian');
inp.css('font-size', '3rem');
inp.css('padding-left', '20px');

const dict = [];
dict[1] = {shv: "𐑐", name: "peep", kbd: ";"};
dict[2] = {shv: "𐑚", name: "bib", kbd: "shift+;"};
dict[3] = {shv: "𐑑", name: "tot", kbd: "j"};
dict[4] = {shv: "𐑛", name: "dead", kbd: "shift+j"};
dict[5] = {shv: "𐑒", name: "kick", kbd: "l"};
dict[6] = {shv: "𐑜", name: "gag", kbd: "shift+l"};
dict[7] = {shv: "𐑓", name: "fee", kbd: "shift+u"};
dict[8] = {shv: "𐑝", name: "vow", kbd: "u"};
dict[9] = {shv: "𐑔", name: "thigh", kbd: "shift+o"};
dict[10] = {shv: "𐑞", name: "they", kbd: "o"};
 
const min = 1;
const max = 10;
var rnd = getRndInteger(min, max);
var lastRnd = rnd;

function reset(rnd) {
	$('.shavian .display .shv').html(dict[rnd].shv);
	$('.shavian .display .info .name').html(dict[rnd].name);
	$('.shavian .display .info .kbd').html(dict[rnd].kbd);
}

function getRndInteger(min, max) {
	lastRnd = rnd;
	let r = Math.floor(Math.random() * (max - min) ) + min;
	if (r != lastRnd) {
		return r;
	} else {
		return Math.floor(Math.random() * (max - min) ) + min;
	}
}

inp.keypress(function (e) {
    if(e.which === 13 && !e.shiftKey) {
        e.preventDefault();
		const res = $('#result');

		if (dict[rnd].shv == inp.val()) {
			res.html('yay');
			inp.val('');
			rnd = getRndInteger(min, max);
			reset(rnd);
		} else {
			inp.val('');
			res.html(':(');
		}
    }
});

reset(rnd);
