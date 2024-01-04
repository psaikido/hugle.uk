const inp = $("#txt");
inp.css('font-family', 'Noto Sans Shavian');
inp.css('font-size', '3rem');
inp.css('text-align', 'center');

// Keyboard layouts:
// Shaw Imperial = kbd1
// Shaw QWERTY = kbd2
// Iskury = kbd3
// Shaw 2-Layer = kbd4
const dict = [];
dict[1] =  {shv: "𐑐", name: "peep",		kbd1: "h", 		 kbd2: "", kbd3: "", kbd4: ";"};
dict[2] =  {shv: "𐑚", name: "bib", 		kbd1: "b", 		 kbd2: "", kbd3: "", kbd4: "shift+;"};
dict[3] =  {shv: "𐑑", name: "tot", 		kbd1: "k", 		 kbd2: "", kbd3: "", kbd4: "j"};
dict[4] =  {shv: "𐑛", name: "dead", 	kbd1: "'", 		 kbd2: "", kbd3: "", kbd4: "shift+j"};
dict[5] =  {shv: "𐑒", name: "kick", 	kbd1: "p", 		 kbd2: "", kbd3: "", kbd4: "l"};
dict[6] =  {shv: "𐑜", name: "gag", 		kbd1: "4", 		 kbd2: "", kbd3: "", kbd4: "shift+l"};
dict[7] =  {shv: "𐑓", name: "fee", 		kbd1: "y", 		 kbd2: "", kbd3: "", kbd4: "shift+u"};
dict[8] =  {shv: "𐑝", name: "vow", 		kbd1: "n", 		 kbd2: "", kbd3: "", kbd4: "u"};
dict[9] =  {shv: "𐑔", name: "thigh", 	kbd1: "0", 		 kbd2: "", kbd3: "", kbd4: "shift+o"};
dict[10] = {shv: "𐑞", name: "they", 	kbd1: "u", 		 kbd2: "", kbd3: "", kbd4: "o"};
dict[11] = {shv: "𐑕", name: "so", 		kbd1: ";", 		 kbd2: "", kbd3: "", kbd4: "k"};
dict[12] = {shv: "𐑟", name: "zoo", 		kbd1: "m", 		 kbd2: "", kbd3: "", kbd4: "shift+k"};
dict[13] = {shv: "𐑖", name: "sure", 	kbd1: "5", 		 kbd2: "", kbd3: "", kbd4: "h"};
dict[14] = {shv: "𐑠", name: "measure",  kbd1: "\\",		 kbd2: "", kbd3: "", kbd4: "shift+h"};
dict[15] = {shv: "𐑗", name: "church", 	kbd1: "6", 		 kbd2: "", kbd3: "", kbd4: "m"};
dict[16] = {shv: "𐑡", name: "judge", 	kbd1: "9", 		 kbd2: "", kbd3: "", kbd4: "shift+m"};
dict[17] = {shv: "𐑘", name: "yea", 		kbd1: "8", 		 kbd2: "", kbd3: "", kbd4: "shift+i"};
dict[18] = {shv: "𐑢", name: "woe", 		kbd1: "[", 		 kbd2: "", kbd3: "", kbd4: "i"};
dict[19] = {shv: "𐑙", name: "hung",		kbd1: "7", 		 kbd2: "", kbd3: "", kbd4: "shift+p"};
dict[20] = {shv: "𐑣", name: "haha", 	kbd1: "]", 		 kbd2: "", kbd3: "", kbd4: "p"};
dict[21] = {shv: "𐑤", name: "loll", 	kbd1: "i", 		 kbd2: "", kbd3: "", kbd4: "a"};
dict[22] = {shv: "𐑮", name: "roar", 	kbd1: "l", 		 kbd2: "", kbd3: "", kbd4: "shift+a"};
dict[23] = {shv: "𐑥", name: "mime", 	kbd1: "o", 		 kbd2: "", kbd3: "", kbd4: "shift+f"};
dict[24] = {shv: "𐑯", name: "nun", 		kbd1: "j", 		 kbd2: "", kbd3: "", kbd4: "f"};
dict[25] = {shv: "𐑦", name: "if", 		kbd1: "d", 		 kbd2: "", kbd3: "", kbd4: "s"};
dict[26] = {shv: "𐑰", name: "eat", 		kbd1: "v",   	 kbd2: "", kbd3: "", kbd4: "shift+s"};
dict[27] = {shv: "𐑧", name: "egg", 		kbd1: "g", 		 kbd2: "", kbd3: "", kbd4: "w"};
dict[28] = {shv: "𐑱", name: "age", 		kbd1: "r", 		 kbd2: "", kbd3: "", kbd4: "shift+w"};
dict[29] = {shv: "𐑨", name: "ash", 		kbd1: "s", 		 kbd2: "", kbd3: "", kbd4: "e"};
dict[30] = {shv: "𐑲", name: "ice", 		kbd1: "x", 		 kbd2: "", kbd3: "", kbd4: "shift+e"};
dict[31] = {shv: "𐑩", name: "ado", 		kbd1: "r", 		 kbd2: "", kbd3: "", kbd4: "d"};
dict[32] = {shv: "𐑳", name: "up", 		kbd1: "t", 		 kbd2: "", kbd3: "", kbd4: "x"};
dict[33] = {shv: "𐑪", name: "on", 		kbd1: "a", 		 kbd2: "", kbd3: "", kbd4: "z"};
dict[34] = {shv: "𐑴", name: "oak", 		kbd1: "c", 		 kbd2: "", kbd3: "", kbd4: "v"};
dict[35] = {shv: "𐑫", name: "wool", 	kbd1: "3", 		 kbd2: "", kbd3: "", kbd4: "shift+v"};
dict[36] = {shv: "𐑵", name: "ooze", 	kbd1: "e", 		 kbd2: "", kbd3: "", kbd4: "q"};
dict[37] = {shv: "𐑬", name: "out", 		kbd1: "2", 		 kbd2: "", kbd3: "", kbd4: "t"};
dict[38] = {shv: "𐑶", name: "oil", 		kbd1: "1", 		 kbd2: "", kbd3: "", kbd4: "shift+t"};
dict[39] = {shv: "𐑭", name: "ah", 		kbd1: "q", 		 kbd2: "", kbd3: "", kbd4: "r"};
dict[40] = {shv: "𐑷", name: "awe", 		kbd1: "w", 		 kbd2: "", kbd3: "", kbd4: "g"};
dict[41] = {shv: "𐑸", name: "are", 		kbd1: "shift+q", kbd2: "", kbd3: "", kbd4: "shift+r"};
dict[42] = {shv: "𐑹", name: "or", 		kbd1: "shift+w", kbd2: "", kbd3: "", kbd4: "shift+g"};
dict[43] = {shv: "𐑺", name: "air", 		kbd1: "shift+r", kbd2: "", kbd3: "", kbd4: "shift+z"};
dict[44] = {shv: "𐑻", name: "err", 		kbd1: "shift+t", kbd2: "", kbd3: "", kbd4: "shift+x"};
dict[45] = {shv: "𐑼", name: "array", 	kbd1: "shift+f", kbd2: "", kbd3: "", kbd4: "c"};
dict[46] = {shv: "𐑽", name: "ear", 		kbd1: "shift+z", kbd2: "", kbd3: "", kbd4: "shift+c"};
dict[47] = {shv: "𐑾", name: "ian", 		kbd1: "z", 		 kbd2: "", kbd3: "", kbd4: "shift+d"};
dict[48] = {shv: "𐑿", name: "yew", 		kbd1: "shift+e", kbd2: "", kbd3: "", kbd4: "shift+q"};

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
window.layout;

function reset(chosenSubset, rnd) {
	window.rnd = getRndInteger(chosenSubset);

	$('.shavian .display .shv').html(dict[chosenSubset[window.rnd]].shv);
	$('.shavian .display .info .name').html(dict[chosenSubset[window.rnd]].name);
	$('.shavian .display .info .kbd4').html(dict[chosenSubset[window.rnd]].kbd);
}

function getRndInteger(chosenSubset) {
	const min = 0;
	const max = chosenSubset.length - 1;

	return Math.round(Math.random() * (max - min) + min);
}

function set() {
	var subset = selectSubset();

	if (typeof(subset) == "undefined") {
		alert("please choose a subset");
		return;
	}

	var layout = selectLayout();

	if (typeof(layout) == "undefined") {
		alert("please choose a keyboard layout");
		return;
	}

	const tarLtrDisplay = $('.targetLetters');
	tarLtrDisplay.html('');

	var tmp = '';
	for (var i = 0; i < chosenSubset.length; i++) {
		var item = dict[chosenSubset[i]];
		var kbdField;

		switch (window.layout) {
			case '1':
				kbdField = item.kbd1;
			break;

			case '2':
				kbdField = item.kbd2;
			break;

			case '3':
				kbdField = item.kbd3;
			break;

			case '4':
				kbdField = item.kbd4;
			break;

			default:
				kbdField = item.kbd4;
		}

		tmp += item.shv + ' <i>' + item.name + '</i> ' + kbdField + '<br />';
	}

	tarLtrDisplay.html(tmp);
	reset(chosenSubset);
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

	return chosenSubset;
}

function selectLayout() {
	const layoutBox = $('#layout');
	var optionSelected = layoutBox.find("option:selected");
	var idx  = optionSelected.val();
	window.layout = idx;
	return window.layout;
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
			res.html(dict[chosenSubset[window.rnd]].kbd4);
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
