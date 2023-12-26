const inp = $("#txt");
inp.css('font-family', 'Noto Sans Shavian');
inp.css('font-size', '3rem');
inp.css('padding-left', '20px');

const dict = [];
dict[1] = {shv: "𐑐", name: "peep", kbd: ";"};
dict[2] = {shv: "𐑚", name: "bib", kbd: "shift+;"};
dict[3] = {shv: "𐑑", name: "tot", kbd: "j"};
dict[4] = {shv: "𐑛", name: "dead", kbd: "shift+j"};
 
var rnd = getRndInteger(1, 5);

function reset(rnd) {
	$('.shavian .display .shv').html(dict[rnd].shv);
	$('.shavian .display .info .name').html(dict[rnd].name);
	$('.shavian .display .info .kbd').html(dict[rnd].kbd);
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

inp.keypress(function (e) {
    if(e.which === 13 && !e.shiftKey) {
        e.preventDefault();
		const res = $('#result');

		if (dict[rnd].shv == inp.val()) {
			res.html('yay');
		} else {
			res.html(':(');
		}

		inp.val('');
		rnd = getRndInteger(1, 5);
		reset(rnd);
    }
});

reset(rnd);
