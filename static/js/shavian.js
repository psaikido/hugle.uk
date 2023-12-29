const inp = $("#txt");
inp.css('font-family', 'Noto Sans Shavian');
inp.css('font-size', '3rem');
inp.css('text-align', 'center');

const dict = [];
dict[1] =  {shv: "𐑐", name: "peep", kbd: ";"};
dict[2] =  {shv: "𐑚", name: "bib", kbd: "shift+;"};
dict[3] =  {shv: "𐑑", name: "tot", kbd: "j"};
dict[4] =  {shv: "𐑛", name: "dead", kbd: "shift+j"};
dict[5] =  {shv: "𐑒", name: "kick", kbd: "l"};
dict[6] =  {shv: "𐑜", name: "gag", kbd: "shift+l"};
dict[7] =  {shv: "𐑓", name: "fee", kbd: "shift+u"};
dict[8] =  {shv: "𐑝", name: "vow", kbd: "u"};
dict[9] =  {shv: "𐑔", name: "thigh", kbd: "shift+o"};
dict[10] = {shv: "𐑞", name: "they", kbd: "o"};
dict[11] = {shv: "𐑕", name: "so", kbd: "k"};
dict[12] = {shv: "𐑟", name: "zoo", kbd: "shift+k"};
dict[13] = {shv: "𐑖", name: "sure", kbd: "h"};
dict[14] = {shv: "𐑠", name: "measure", kbd: "shift+h"};
dict[15] = {shv: "𐑗", name: "church", kbd: "m"};
dict[16] = {shv: "𐑡", name: "judge", kbd: "shift+m"};
dict[17] = {shv: "𐑘", name: "yea", kbd: "shift+i"};
dict[18] = {shv: "𐑢", name: "woe", kbd: "i"};
dict[19] = {shv: "𐑙", name: "hung", kbd: "shift+p"};
dict[20] = {shv: "𐑣", name: "haha", kbd: "p"};
dict[21] = {shv: "𐑤", name: "loll", kbd: "a"};
dict[22] = {shv: "𐑮", name: "roar", kbd: "shift+a"};
dict[23] = {shv: "𐑥", name: "mime", kbd: "shift+f"};
dict[24] = {shv: "𐑯", name: "nun", kbd: "f"};
dict[25] = {shv: "𐑦", name: "if", kbd: "s"};
dict[26] = {shv: "𐑰", name: "eat", kbd: "shift+s"};
dict[27] = {shv: "𐑧", name: "egg", kbd: "w"};
dict[28] = {shv: "𐑱", name: "age", kbd: "shift+w"};
dict[29] = {shv: "𐑨", name: "ash", kbd: "e"};
dict[30] = {shv: "𐑲", name: "ice", kbd: "shift+e"};
dict[31] = {shv: "𐑩", name: "ado", kbd: "d"};
dict[32] = {shv: "𐑳", name: "up", kbd: "x"};
dict[33] = {shv: "𐑪", name: "on", kbd: "z"};
dict[34] = {shv: "𐑴", name: "oak", kbd: "v"};
dict[35] = {shv: "𐑫", name: "wool", kbd: "shift+v"};
dict[36] = {shv: "𐑵", name: "ooze", kbd: "q"};
dict[37] = {shv: "𐑬", name: "out", kbd: "t"};
dict[38] = {shv: "𐑶", name: "oil", kbd: "shift+t"};
dict[39] = {shv: "𐑭", name: "ah", kbd: "r"};
dict[40] = {shv: "𐑷", name: "awe", kbd: "g"};
dict[41] = {shv: "𐑸", name: "are", kbd: "shift+r"};
dict[42] = {shv: "𐑹", name: "or", kbd: "shift+g"};
dict[43] = {shv: "𐑺", name: "air", kbd: "shift+z"};
dict[44] = {shv: "𐑻", name: "err", kbd: "shift+x"};
dict[45] = {shv: "𐑼", name: "array", kbd: "c"};
dict[46] = {shv: "𐑽", name: "ear", kbd: "shift+c"};
dict[47] = {shv: "𐑾", name: "ian", kbd: "shift+d"};
dict[48] = {shv: "𐑿", name: "yew", kbd: "shift+q"};

const dict_all = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48];
const dict_first_ten = [1,2,3,4,5,6,7,8,9,10];
const dict_second_ten = [11,12,13,14,15,16,17,18,19,20];
const dict_third_ten = [21,22,23,24,25,26,27,28,29,30];
const dict_fourth_ten = [31,32,33,34,35,36,37,38,39,40];
const dict_compounds = [41,42,43,44,45,46,47,48];
const dict_tall = [1,3,5,7,9,11,13,15,17,19];
const dict_deep = [2,4,6,8,10,12,14,16,18,20];
const dict_short = [21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40];
const dict_consonants = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const dict_vowels = [21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48];

window.rnd; 

function reset(chosenSubset, rnd) {
	window.rnd = getRndInteger(chosenSubset);

	$('.shavian .display .shv').html(dict[chosenSubset[window.rnd]].shv);
	$('.shavian .display .info .name').html(dict[chosenSubset[window.rnd]].name);
	$('.shavian .display .info .kbd').html(dict[chosenSubset[window.rnd]].kbd);
}

function getRndInteger(chosenSubset) {
	const min = 0;
	const max = chosenSubset.length - 1;

	return Math.round(Math.random() * (max - min) + min);
}

function selectSubset() {
	const selBox = $('#subset');
	var optionSelected = selBox.find("option:selected");
	var idx  = optionSelected.val();

	if (idx == 1) {
		chosenSubset = dict_first_ten;
	} else if (idx == 2) {
		chosenSubset = dict_second_ten;
	} else if (idx == 3) {
		chosenSubset = dict_third_ten;
	} else if (idx == 4) {
		chosenSubset = dict_fourth_ten;
	} else if (idx == 5) {
		chosenSubset = dict_compounds;
	} else if (idx == 6) {
		chosenSubset = dict_tall;
	} else if (idx == 7) {
		chosenSubset = dict_deep;
	} else if (idx == 8) {
		chosenSubset = dict_short;
	} else if (idx == 9) {
		chosenSubset = dict_consonants;
	} else if (idx == 10) {
		chosenSubset = dict_vowels;
	} else if (idx == 11) {
		chosenSubset = dict_all;
	} else  {
		chosenSubset = dict_all;
	}

	const tarLtrDisplay = $('.targetLetters');
	tarLtrDisplay.html('');

	var tmp = '';
	for (var i = 0; i < chosenSubset.length; i++) {
		var item = dict[chosenSubset[i]];
		tmp += item.shv + ' <i>' + item.name + '</i> ' + item.kbd + '<br />';
	}

	tarLtrDisplay.html(tmp);
	reset(chosenSubset);
}

inp.keypress(function (e) {
	if (typeof(chosenSubset) == "undefined") {
		alert('please choose a subset');
		return;
	}

    if(e.which === 13 && !e.shiftKey) {
        e.preventDefault();
		const res = $('#result');
		const target = $('.shavian .display .shv').html().trim();
		const answer = inp.val().trim();

		// $('#debug').html('chrnd: ' + target + ' ' + answer);
		if (answer === target) {
			res.html('yay');
			res.addClass('good');
			setTimeout(function() {
				res.removeClass('good');
				res.html(' - ');
			}, 1000);

			inp.val('');
			reset(chosenSubset);
		} else {
			res.html(dict[chosenSubset[window.rnd]].kbd);
			res.addClass('bad');
			setTimeout(function() {
				res.removeClass('bad');
				res.html(' - ');
			}, 1000);
			inp.val('');
		}
    }
});

$('#kbdPrompt').click(function() {
	var disp =  $('.kbd').toggle();
});
