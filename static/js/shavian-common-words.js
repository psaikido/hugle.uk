const inp = $("#txt");
inp.css('font-family', 'Noto Sans Shavian');
inp.css('font-size', '3rem');
inp.css('text-align', 'center');

const dict_words = [];
dict_words[1] = {lat: "a", shv: "𐑩", shv2: "" };
dict_words[2] = {lat: "about", shv: "𐑩𐑚𐑬𐑑", shv2: "" };
dict_words[3] = {lat: "after", shv: "𐑭𐑓𐑑𐑼", shv2: "" };
dict_words[4] = {lat: "again", shv: "𐑩𐑜𐑱𐑯", shv2: "" };
dict_words[5] = {lat: "against", shv: "𐑩𐑜𐑱𐑯𐑕𐑑", shv2: "" };
dict_words[6] = {lat: "all", shv: "𐑷𐑤", shv2: "" };
dict_words[7] = {lat: "already", shv: "𐑷𐑤𐑮𐑧𐑛𐑦", shv2: "" };
dict_words[8] = {lat: "although", shv: "𐑷𐑤𐑞𐑴", shv2: "" };
dict_words[9] = {lat: "also", shv: "𐑷𐑤𐑕𐑴", shv2: "" };
dict_words[10] = {lat: "always", shv: "𐑷𐑤𐑢𐑱𐑟", shv2: "" };
dict_words[11] = {lat: "am", shv: "𐑨𐑥", shv2: "" };
dict_words[12] = {lat: "an", shv: "𐑩𐑯", shv2: "" };
dict_words[13] = {lat: "and", shv: "𐑯", shv2: "" };
dict_words[14] = {lat: "any", shv: "𐑧𐑯𐑦", shv2: "" };
dict_words[15] = {lat: "are", shv: "𐑸", shv2: "" };
dict_words[16] = {lat: "as", shv: "𐑨𐑟", shv2: "" };
dict_words[17] = {lat: "at", shv: "𐑨𐑑", shv2: "" };
dict_words[18] = {lat: "away", shv: "𐑩𐑢𐑱", shv2: "" };
dict_words[19] = {lat: "be", shv: "𐑚𐑰", shv2: "" };
dict_words[20] = {lat: "because", shv: "𐑚𐑦𐑒𐑪𐑟", shv2: "" };
dict_words[21] = {lat: "been", shv: "𐑚𐑰𐑯", shv2: "" };
dict_words[22] = {lat: "before", shv: "𐑚𐑦𐑓𐑹", shv2: "" };
dict_words[23] = {lat: "between", shv: "𐑚𐑦𐑑𐑢𐑰𐑯", shv2: "" };
dict_words[24] = {lat: "business", shv: "𐑚𐑦𐑟𐑯𐑩𐑕", shv2: "" };
dict_words[25] = {lat: "but", shv: "𐑚𐑳𐑑", shv2: "" };
dict_words[26] = {lat: "by", shv: "𐑚𐑲", shv2: "" };
dict_words[27] = {lat: "came", shv: "𐑒𐑱𐑥", shv2: "" };
dict_words[28] = {lat: "can", shv: "𐑒𐑨𐑯", shv2: "" };
dict_words[29] = {lat: "cannot", shv: "𐑒𐑨𐑯𐑪𐑑", shv2: "" };
dict_words[30] = {lat: "can't", shv: "𐑒𐑭𐑯𐑑", shv2: "" };
dict_words[31] = {lat: "come", shv: "𐑒𐑳𐑥", shv2: "" };
dict_words[32] = {lat: "cordially", shv: "𐑒𐑹𐑛𐑾𐑤𐑦", shv2: "" };
dict_words[33] = {lat: "could", shv: "𐑒𐑫𐑛", shv2: "" };
dict_words[34] = {lat: "day", shv: "𐑛𐑱", shv2: "" };
dict_words[35] = {lat: "dear", shv: "𐑛𐑽", shv2: "" };
dict_words[36] = {lat: "did", shv: "𐑛𐑦𐑛", shv2: "" };
dict_words[37] = {lat: "didn’t", shv: "𐑛𐑦𐑛𐑩𐑯𐑑", shv2: "" };
dict_words[38] = {lat: "do", shv: "𐑛𐑵", shv2: "" };
dict_words[39] = {lat: "does", shv: "𐑛𐑳𐑟", shv2: "" };
dict_words[40] = {lat: "done", shv: "𐑛𐑳𐑯", shv2: "" };
dict_words[41] = {lat: "don’t", shv: "𐑛𐑴𐑯𐑑", shv2: "" };
dict_words[42] = {lat: "down", shv: "𐑛𐑬𐑯", shv2: "" };
dict_words[43] = {lat: "during", shv: "𐑛𐑘𐑫𐑼𐑦𐑙", shv2: "" };
dict_words[44] = {lat: "each", shv: "𐑰𐑗", shv2: "" };
dict_words[45] = {lat: "either", shv: "𐑲𐑞𐑼", shv2: "" };
dict_words[46] = {lat: "enough", shv: "𐑦𐑯𐑳𐑓", shv2: "" };
dict_words[47] = {lat: "ever", shv: "𐑧𐑝𐑼", shv2: "" };
dict_words[48] = {lat: "every", shv: "𐑧𐑝𐑮𐑦", shv2: "" };
dict_words[49] = {lat: "faithfully", shv: "𐑓𐑱𐑔𐑓𐑩𐑤𐑦", shv2: "" };
dict_words[50] = {lat: "far", shv: "𐑓𐑸", shv2: "" };
dict_words[51] = {lat: "few", shv: "𐑓𐑿", shv2: "" };
dict_words[52] = {lat: "first", shv: "𐑓𐑻𐑕𐑑", shv2: "" };
dict_words[53] = {lat: "for", shv: "𐑓𐑹", shv2: "[𐑓]" };
dict_words[54] = {lat: "from", shv: "𐑓𐑮𐑪𐑥", shv2: "" };
dict_words[55] = {lat: "give", shv: "𐑜𐑦𐑝", shv2: "" };
dict_words[56] = {lat: "go", shv: "𐑜𐑴", shv2: "" };
dict_words[57] = {lat: "good", shv: "𐑜𐑫𐑛", shv2: "" };
dict_words[58] = {lat: "got", shv: "𐑜𐑪𐑑", shv2: "" };
dict_words[59] = {lat: "great", shv: "𐑜𐑮𐑱𐑑", shv2: "" };
dict_words[60] = {lat: "had", shv: "𐑣𐑨𐑛", shv2: "" };
dict_words[61] = {lat: "has", shv: "𐑣𐑨𐑟", shv2: "" };
dict_words[62] = {lat: "have", shv: "𐑣𐑨𐑝", shv2: "" };
dict_words[63] = {lat: "he", shv: "𐑣𐑰", shv2: "" };
dict_words[64] = {lat: "her", shv: "𐑣𐑻", shv2: "" };
dict_words[65] = {lat: "here", shv: "𐑣𐑽", shv2: "" };
dict_words[66] = {lat: "him", shv: "𐑣𐑦𐑥", shv2: "" };
dict_words[67] = {lat: "his", shv: "𐑣𐑦𐑟", shv2: "" };
dict_words[68] = {lat: "how", shv: "𐑣𐑬", shv2: "" };
dict_words[69] = {lat: "I", shv: "𐑲", shv2: "" };
dict_words[70] = {lat: "if", shv: "𐑦𐑓", shv2: "" };
dict_words[71] = {lat: "in", shv: "𐑦𐑯", shv2: "" };
dict_words[72] = {lat: "into", shv: "𐑦𐑯𐑑𐑵", shv2: "" };
dict_words[73] = {lat: "is", shv: "𐑦𐑟", shv2: "" };
dict_words[74] = {lat: "it", shv: "𐑦𐑑", shv2: "" };
dict_words[75] = {lat: "just", shv: "𐑡𐑳𐑕𐑑", shv2: "" };
dict_words[76] = {lat: "knew", shv: "𐑯𐑿", shv2: "" };
dict_words[77] = {lat: "know", shv: "𐑯𐑴", shv2: "" };
dict_words[78] = {lat: "large", shv: "𐑤𐑸𐑡", shv2: "" };
dict_words[79] = {lat: "last", shv: "𐑤𐑭𐑕𐑑", shv2: "" };
dict_words[80] = {lat: "like", shv: "𐑤𐑲𐑒", shv2: "" };
dict_words[81] = {lat: "little", shv: "𐑤𐑦𐑑𐑩𐑤", shv2: "" };
dict_words[82] = {lat: "long", shv: "𐑤𐑪𐑙", shv2: "" };
dict_words[83] = {lat: "look", shv: "𐑤𐑫𐑒", shv2: "" };
dict_words[84] = {lat: "lost", shv: "𐑤𐑪𐑕𐑑", shv2: "" };
dict_words[85] = {lat: "love", shv: "𐑤𐑳𐑝", shv2: "" };
dict_words[86] = {lat: "made", shv: "𐑥𐑱𐑛", shv2: "" };
dict_words[87] = {lat: "make", shv: "𐑥𐑱𐑒", shv2: "" };
dict_words[88] = {lat: "man", shv: "𐑥𐑨𐑯", shv2: "" };
dict_words[89] = {lat: "many", shv: "𐑥𐑧𐑯𐑦", shv2: "" };
dict_words[90] = {lat: "may", shv: "𐑥𐑱", shv2: "" };
dict_words[91] = {lat: "me", shv: "𐑥𐑰", shv2: "" };
dict_words[92] = {lat: "men", shv: "𐑥𐑧𐑯", shv2: "" };
dict_words[93] = {lat: "might", shv: "𐑥𐑲𐑑", shv2: "" };
dict_words[94] = {lat: "money", shv: "𐑥𐑳𐑯𐑦", shv2: "" };
dict_words[95] = {lat: "more", shv: "𐑥𐑹", shv2: "" };
dict_words[96] = {lat: "most", shv: "𐑥𐑴𐑕𐑑", shv2: "" };
dict_words[97] = {lat: "much", shv: "𐑥𐑳𐑗", shv2: "" };
dict_words[98] = {lat: "must", shv: "𐑥𐑳𐑕𐑑", shv2: "" };
dict_words[99] = {lat: "my", shv: "𐑥𐑲", shv2: "" };
dict_words[100] = {lat: "near", shv: "𐑯𐑽", shv2: "" };
dict_words[101] = {lat: "never", shv: "𐑯𐑧𐑝𐑼", shv2: "" };
dict_words[102] = {lat: "new", shv: "𐑯𐑿", shv2: "" };
dict_words[103] = {lat: "next", shv: "𐑯𐑧𐑒𐑕𐑑", shv2: "" };
dict_words[104] = {lat: "no", shv: "𐑯𐑴", shv2: "" };
dict_words[105] = {lat: "none", shv: "𐑯𐑳𐑯", shv2: "" };
dict_words[106] = {lat: "not", shv: "𐑯𐑪𐑑", shv2: "" };
dict_words[107] = {lat: "nothing", shv: "𐑯𐑳𐑔𐑦𐑙", shv2: "" };
dict_words[108] = {lat: "now", shv: "𐑯𐑬", shv2: "" };
dict_words[109] = {lat: "of", shv: "𐑝", shv2: "" };
dict_words[110] = {lat: "off", shv: "𐑪𐑓", shv2: "" };
dict_words[111] = {lat: "often", shv: "𐑪𐑓𐑩𐑯", shv2: "" };
dict_words[112] = {lat: "old", shv: "𐑴𐑤𐑛", shv2: "" };
dict_words[113] = {lat: "on", shv: "𐑪𐑯", shv2: "" };
dict_words[114] = {lat: "once", shv: "𐑢𐑳𐑯𐑕", shv2: "" };
dict_words[115] = {lat: "one", shv: "𐑢𐑳𐑯", shv2: "" };
dict_words[116] = {lat: "only", shv: "𐑴𐑯𐑤𐑦", shv2: "" };
dict_words[117] = {lat: "or", shv: "𐑹", shv2: "" };
dict_words[118] = {lat: "other", shv: "𐑳𐑞𐑼", shv2: "" };
dict_words[119] = {lat: "our", shv: "𐑬𐑼", shv2: "" };
dict_words[120] = {lat: "over", shv: "𐑴𐑝𐑼", shv2: "" };
dict_words[121] = {lat: "out", shv: "𐑬𐑑", shv2: "" };
dict_words[122] = {lat: "own", shv: "𐑴𐑯", shv2: "" };
dict_words[123] = {lat: "part", shv: "𐑐𐑸𐑑", shv2: "" };
dict_words[124] = {lat: "pass", shv: "𐑐𐑭𐑕", shv2: "" };
dict_words[125] = {lat: "past", shv: "𐑐𐑭𐑕𐑑", shv2: "" };
dict_words[126] = {lat: "people", shv: "𐑐𐑰𐑐𐑩𐑤", shv2: "" };
dict_words[127] = {lat: "please", shv: "𐑐𐑤𐑰𐑟", shv2: "" };
dict_words[128] = {lat: "pleasure", shv: "𐑐𐑤𐑧𐑠𐑼", shv2: "" };
dict_words[129] = {lat: "possible", shv: "𐑐𐑪𐑕𐑩𐑚𐑩𐑤", shv2: "" };
dict_words[130] = {lat: "question", shv: "𐑒𐑢𐑧𐑕𐑗𐑩𐑯", shv2: "" };
dict_words[131] = {lat: "quite", shv: "𐑒𐑢𐑲𐑑", shv2: "" };
dict_words[132] = {lat: "rather", shv: "𐑮𐑭𐑞𐑼", shv2: "" };
dict_words[133] = {lat: "reach", shv: "𐑮𐑰𐑗", shv2: "" };
dict_words[134] = {lat: "read", shv: "𐑮𐑰𐑛", shv2: "" };
dict_words[135] = {lat: "really", shv: "𐑮𐑾𐑤𐑦", shv2: "" };
dict_words[136] = {lat: "right", shv: "𐑮𐑲𐑑", shv2: "" };
dict_words[137] = {lat: "said", shv: "𐑕𐑧𐑛", shv2: "" };
dict_words[138] = {lat: "same", shv: "𐑕𐑱𐑥", shv2: "" };
dict_words[139] = {lat: "say", shv: "𐑕𐑱", shv2: "" };
dict_words[140] = {lat: "says", shv: "𐑕𐑧𐑟", shv2: "" };
dict_words[141] = {lat: "shall", shv: "𐑖𐑨𐑤", shv2: "" };
dict_words[142] = {lat: "shan’t", shv: "𐑖𐑭𐑯𐑑", shv2: "" };
dict_words[143] = {lat: "Shavian", shv: "·𐑖𐑱𐑝𐑾𐑯", shv2: "" };
dict_words[144] = {lat: "she", shv: "𐑖𐑰", shv2: "" };
dict_words[145] = {lat: "should", shv: "𐑖𐑫𐑛", shv2: "" };
dict_words[146] = {lat: "sincerely", shv: "𐑕𐑦𐑯𐑕𐑽𐑤𐑦", shv2: "" };
dict_words[147] = {lat: "so", shv: "𐑕𐑴", shv2: "" };
dict_words[148] = {lat: "some", shv: "𐑕𐑳𐑥", shv2: "" };
dict_words[149] = {lat: "something", shv: "𐑕𐑳𐑥𐑔𐑦𐑙", shv2: "" };
dict_words[150] = {lat: "still", shv: "𐑕𐑑𐑦𐑤", shv2: "" };
dict_words[151] = {lat: "such", shv: "𐑕𐑳𐑗", shv2: "" };
dict_words[152] = {lat: "sure", shv: "𐑖𐑫𐑼", shv2: "" };
dict_words[153] = {lat: "take", shv: "𐑑𐑱𐑒", shv2: "" };
dict_words[154] = {lat: "talk", shv: "𐑑𐑷𐑒", shv2: "" };
dict_words[155] = {lat: "than", shv: "𐑞𐑨𐑯", shv2: "" };
dict_words[156] = {lat: "thank", shv: "𐑔𐑨𐑙𐑒", shv2: "" };
dict_words[157] = {lat: "that", shv: "𐑞𐑨𐑑", shv2: "" };
dict_words[158] = {lat: "the", shv: "𐑞", shv2: "" };
dict_words[159] = {lat: "their", shv: "𐑞𐑺", shv2: "" };
dict_words[160] = {lat: "them", shv: "𐑞𐑧𐑥", shv2: "" };
dict_words[161] = {lat: "then", shv: "𐑞𐑧𐑯", shv2: "" };
dict_words[162] = {lat: "there", shv: "𐑞𐑺", shv2: "" };
dict_words[163] = {lat: "these", shv: "𐑞𐑰𐑟", shv2: "" };
dict_words[164] = {lat: "they", shv: "𐑞𐑱", shv2: "" };
dict_words[165] = {lat: "thing", shv: "𐑔𐑦𐑙", shv2: "" };
dict_words[166] = {lat: "think", shv: "𐑔𐑦𐑙𐑒", shv2: "" };
dict_words[167] = {lat: "this", shv: "𐑞𐑦𐑕", shv2: "" };
dict_words[168] = {lat: "those", shv: "𐑞𐑴𐑟", shv2: "" };
dict_words[169] = {lat: "thought", shv: "𐑔𐑷𐑑", shv2: "" };
dict_words[170] = {lat: "three", shv: "𐑔𐑮𐑰", shv2: "" };
dict_words[171] = {lat: "through", shv: "𐑔𐑮𐑵", shv2: "" };
dict_words[172] = {lat: "time", shv: "𐑑𐑲𐑥", shv2: "" };
dict_words[173] = {lat: "to", shv: "𐑑", shv2: "" };
dict_words[174] = {lat: "today", shv: "𐑑𐑩𐑛𐑱", shv2: "" };
dict_words[175] = {lat: "together", shv: "𐑑𐑩𐑜𐑧𐑞𐑼", shv2: "" };
dict_words[176] = {lat: "too", shv: "𐑑𐑵", shv2: "" };
dict_words[177] = {lat: "two", shv: "𐑑𐑵", shv2: "" };
dict_words[178] = {lat: "truly", shv: "𐑑𐑮𐑵𐑤𐑦", shv2: "" };
dict_words[179] = {lat: "under", shv: "𐑳𐑯𐑛𐑼", shv2: "" };
dict_words[180] = {lat: "unless", shv: "𐑩𐑯𐑤𐑧𐑕", shv2: "" };
dict_words[181] = {lat: "until", shv: "𐑩𐑯𐑑𐑦𐑤", shv2: "" };
dict_words[182] = {lat: "up", shv: "𐑳𐑐", shv2: "" };
dict_words[183] = {lat: "us", shv: "𐑳𐑕", shv2: "" };
dict_words[184] = {lat: "use", shv: "𐑿𐑟", shv2: "" };
dict_words[185] = {lat: "used", shv: "𐑿𐑟𐑛", shv2: "" };
dict_words[186] = {lat: "used", shv: "to", shv2: "𐑿𐑕𐑑" };
dict_words[187] = {lat: "usual", shv: "𐑿𐑠𐑫𐑩𐑤", shv2: "" };
dict_words[188] = {lat: "vary", shv: "𐑝𐑺𐑦", shv2: "" };
dict_words[189] = {lat: "very", shv: "𐑝𐑧𐑮𐑦", shv2: "" };
dict_words[190] = {lat: "want", shv: "𐑢𐑪𐑯𐑑", shv2: "" };
dict_words[191] = {lat: "war", shv: "𐑢𐑹", shv2: "" };
dict_words[192] = {lat: "was", shv: "𐑢𐑪𐑟", shv2: "" };
dict_words[193] = {lat: "wasn’t", shv: "𐑢𐑪𐑟𐑩𐑯𐑑", shv2: "" };
dict_words[194] = {lat: "way", shv: "𐑢𐑱", shv2: "" };
dict_words[195] = {lat: "we", shv: "𐑢𐑰", shv2: "" };
dict_words[196] = {lat: "well", shv: "𐑢𐑧𐑤", shv2: "" };
dict_words[197] = {lat: "went", shv: "𐑢𐑧𐑯𐑑", shv2: "" };
dict_words[198] = {lat: "were", shv: "𐑢𐑻", shv2: "" };
dict_words[199] = {lat: "what", shv: "[𐑣]𐑢𐑪𐑑", shv2: "" };
dict_words[200] = {lat: "where", shv: "[𐑣]𐑢𐑺", shv2: "" };
dict_words[201] = {lat: "which", shv: "[𐑣]𐑢𐑦𐑗", shv2: "" };
dict_words[202] = {lat: "while", shv: "[𐑣]𐑢𐑲𐑤", shv2: "" };
dict_words[203] = {lat: "who", shv: "𐑣𐑵", shv2: "" };
dict_words[204] = {lat: "whole", shv: "𐑣𐑴𐑤", shv2: "" };
dict_words[205] = {lat: "whose", shv: "𐑣𐑵𐑟", shv2: "" };
dict_words[206] = {lat: "why", shv: "[𐑣]𐑢𐑲", shv2: "" };
dict_words[207] = {lat: "when", shv: "[𐑣]𐑢𐑧𐑯", shv2: "" };
dict_words[208] = {lat: "will", shv: "𐑢𐑦𐑤", shv2: "" };
dict_words[209] = {lat: "with", shv: "𐑢𐑦𐑞", shv2: "" };
dict_words[210] = {lat: "woman", shv: "𐑢𐑫𐑥𐑩𐑯", shv2: "" };
dict_words[211] = {lat: "women", shv: "𐑢𐑦𐑥𐑦𐑯", shv2: "" };
dict_words[212] = {lat: "word", shv: "𐑢𐑻𐑛", shv2: "" };
dict_words[213] = {lat: "work", shv: "𐑢𐑻𐑒", shv2: "" };
dict_words[214] = {lat: "world", shv: "𐑢𐑻𐑤𐑛", shv2: "" };
dict_words[215] = {lat: "would", shv: "𐑢𐑫𐑛", shv2: "" };
dict_words[216] = {lat: "write", shv: "𐑮𐑲𐑑", shv2: "" };
dict_words[217] = {lat: "written", shv: "𐑮𐑦𐑑𐑩𐑯", shv2: "" };
dict_words[218] = {lat: "wrong", shv: "𐑮𐑪𐑙", shv2: "" };
dict_words[219] = {lat: "year", shv: "𐑘𐑽", shv2: "" };
dict_words[220] = {lat: "yesterday", shv: "𐑘𐑧𐑕𐑑𐑼𐑛𐑱", shv2: "" };
dict_words[221] = {lat: "yet", shv: "𐑘𐑧𐑑", shv2: "" };
dict_words[222] = {lat: "you", shv: "𐑿", shv2: "" };
dict_words[223] = {lat: "young", shv: "𐑘𐑳𐑙", shv2: "" };
dict_words[224] = {lat: "your", shv: "𐑘𐑫𐑼", shv2: "" };

function getRandomInteger() {
	return Math.round(Math.random() * 224);
}

function reset(rnd) {
	$('.shavian .word-display').html(dict_words[rnd].shv);
}

inp.keypress(function (e) {
    if(e.which === 13 && !e.shiftKey) {
        e.preventDefault();
		const res = $('#result');

		if (dict_words[rnd].shv == inp.val()) {
			res.html(dict_words[rnd].lat);
			inp.val('');
			res.addClass('good');
			setTimeout(function() {
				res.removeClass('good');
				res.html(' - ');
			}, 1000);

			rnd = getRandomInteger();
			reset(rnd);
		} else {
			inp.val('');
			res.html(dict_words[rnd].lat);
			res.addClass('bad');
			setTimeout(function() {
				res.removeClass('bad');
				res.html(' - ');
			}, 1000);

		}
    }
});

var rnd = getRandomInteger();
reset(rnd);
