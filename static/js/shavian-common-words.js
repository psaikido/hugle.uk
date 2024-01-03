const inp = $("#txt");
inp.css('font-family', 'Noto Sans Shavian');
inp.css('font-size', '3rem');
inp.css('text-align', 'center');

const dict_words = [];
dict_words[1] = {eng: "a", shv: "𐑩", shv2: "" };
dict_words[2] = {eng: "about", shv: "𐑩𐑚𐑬𐑑", shv2: "" };
dict_words[3] = {eng: "after", shv: "𐑭𐑓𐑑𐑼", shv2: "" };
dict_words[4] = {eng: "again", shv: "𐑩𐑜𐑱𐑯", shv2: "" };
dict_words[5] = {eng: "against", shv: "𐑩𐑜𐑱𐑯𐑕𐑑", shv2: "" };
dict_words[6] = {eng: "all", shv: "𐑷𐑤", shv2: "" };
dict_words[7] = {eng: "already", shv: "𐑷𐑤𐑮𐑧𐑛𐑦", shv2: "" };
dict_words[8] = {eng: "although", shv: "𐑷𐑤𐑞𐑴", shv2: "" };
dict_words[9] = {eng: "also", shv: "𐑷𐑤𐑕𐑴", shv2: "" };
dict_words[10] = {eng: "always", shv: "𐑷𐑤𐑢𐑱𐑟", shv2: "" };
dict_words[11] = {eng: "am", shv: "𐑨𐑥", shv2: "" };
dict_words[12] = {eng: "an", shv: "𐑩𐑯", shv2: "" };
dict_words[13] = {eng: "and", shv: "𐑯", shv2: "" };
dict_words[14] = {eng: "any", shv: "𐑧𐑯𐑦", shv2: "" };
dict_words[15] = {eng: "are", shv: "𐑸", shv2: "" };
dict_words[16] = {eng: "as", shv: "𐑨𐑟", shv2: "" };
dict_words[17] = {eng: "at", shv: "𐑨𐑑", shv2: "" };
dict_words[18] = {eng: "away", shv: "𐑩𐑢𐑱", shv2: "" };
dict_words[19] = {eng: "be", shv: "𐑚𐑰", shv2: "" };
dict_words[20] = {eng: "because", shv: "𐑚𐑦𐑒𐑪𐑟", shv2: "" };
dict_words[21] = {eng: "been", shv: "𐑚𐑰𐑯", shv2: "" };
dict_words[22] = {eng: "before", shv: "𐑚𐑦𐑓𐑹", shv2: "" };
dict_words[23] = {eng: "between", shv: "𐑚𐑦𐑑𐑢𐑰𐑯", shv2: "" };
dict_words[24] = {eng: "business", shv: "𐑚𐑦𐑟𐑯𐑩𐑕", shv2: "" };
dict_words[25] = {eng: "but", shv: "𐑚𐑳𐑑", shv2: "" };
dict_words[26] = {eng: "by", shv: "𐑚𐑲", shv2: "" };
dict_words[27] = {eng: "came", shv: "𐑒𐑱𐑥", shv2: "" };
dict_words[28] = {eng: "can", shv: "𐑒𐑨𐑯", shv2: "" };
dict_words[29] = {eng: "cannot", shv: "𐑒𐑨𐑯𐑪𐑑", shv2: "" };
dict_words[30] = {eng: "can't", shv: "𐑒𐑭𐑯𐑑", shv2: "" };
dict_words[31] = {eng: "come", shv: "𐑒𐑳𐑥", shv2: "" };
dict_words[32] = {eng: "cordially", shv: "𐑒𐑹𐑛𐑾𐑤𐑦", shv2: "" };
dict_words[33] = {eng: "could", shv: "𐑒𐑫𐑛", shv2: "" };
dict_words[34] = {eng: "day", shv: "𐑛𐑱", shv2: "" };
dict_words[35] = {eng: "dear", shv: "𐑛𐑽", shv2: "" };
dict_words[36] = {eng: "did", shv: "𐑛𐑦𐑛", shv2: "" };
dict_words[37] = {eng: "didn't", shv: "𐑛𐑦𐑛𐑩𐑯𐑑", shv2: "" };
dict_words[38] = {eng: "do", shv: "𐑛𐑵", shv2: "" };
dict_words[39] = {eng: "does", shv: "𐑛𐑳𐑟", shv2: "" };
dict_words[40] = {eng: "done", shv: "𐑛𐑳𐑯", shv2: "" };
dict_words[41] = {eng: "don't", shv: "𐑛𐑴𐑯𐑑", shv2: "" };
dict_words[42] = {eng: "down", shv: "𐑛𐑬𐑯", shv2: "" };
dict_words[43] = {eng: "during", shv: "𐑛𐑘𐑫𐑼𐑦𐑙", shv2: "" };
dict_words[44] = {eng: "each", shv: "𐑰𐑗", shv2: "" };
dict_words[45] = {eng: "either", shv: "𐑲𐑞𐑼", shv2: "" };
dict_words[46] = {eng: "enough", shv: "𐑦𐑯𐑳𐑓", shv2: "" };
dict_words[47] = {eng: "ever", shv: "𐑧𐑝𐑼", shv2: "" };
dict_words[48] = {eng: "every", shv: "𐑧𐑝𐑮𐑦", shv2: "" };
dict_words[49] = {eng: "faithfully", shv: "𐑓𐑱𐑔𐑓𐑩𐑤𐑦", shv2: "" };
dict_words[50] = {eng: "far", shv: "𐑓𐑸", shv2: "" };
dict_words[51] = {eng: "few", shv: "𐑓𐑿", shv2: "" };
dict_words[52] = {eng: "first", shv: "𐑓𐑻𐑕𐑑", shv2: "" };
dict_words[53] = {eng: "for", shv: "𐑓𐑹", shv2: "𐑓" };
dict_words[54] = {eng: "from", shv: "𐑓𐑮𐑪𐑥", shv2: "" };
dict_words[55] = {eng: "give", shv: "𐑜𐑦𐑝", shv2: "" };
dict_words[56] = {eng: "go", shv: "𐑜𐑴", shv2: "" };
dict_words[57] = {eng: "good", shv: "𐑜𐑫𐑛", shv2: "" };
dict_words[58] = {eng: "got", shv: "𐑜𐑪𐑑", shv2: "" };
dict_words[59] = {eng: "great", shv: "𐑜𐑮𐑱𐑑", shv2: "" };
dict_words[60] = {eng: "had", shv: "𐑣𐑨𐑛", shv2: "" };
dict_words[61] = {eng: "has", shv: "𐑣𐑨𐑟", shv2: "" };
dict_words[62] = {eng: "have", shv: "𐑣𐑨𐑝", shv2: "" };
dict_words[63] = {eng: "he", shv: "𐑣𐑰", shv2: "" };
dict_words[64] = {eng: "her", shv: "𐑣𐑻", shv2: "" };
dict_words[65] = {eng: "here", shv: "𐑣𐑽", shv2: "" };
dict_words[66] = {eng: "him", shv: "𐑣𐑦𐑥", shv2: "" };
dict_words[67] = {eng: "his", shv: "𐑣𐑦𐑟", shv2: "" };
dict_words[68] = {eng: "how", shv: "𐑣𐑬", shv2: "" };
dict_words[69] = {eng: "I", shv: "𐑲", shv2: "" };
dict_words[70] = {eng: "if", shv: "𐑦𐑓", shv2: "" };
dict_words[71] = {eng: "in", shv: "𐑦𐑯", shv2: "" };
dict_words[72] = {eng: "into", shv: "𐑦𐑯𐑑𐑵", shv2: "" };
dict_words[73] = {eng: "is", shv: "𐑦𐑟", shv2: "" };
dict_words[74] = {eng: "it", shv: "𐑦𐑑", shv2: "" };
dict_words[75] = {eng: "just", shv: "𐑡𐑳𐑕𐑑", shv2: "" };
dict_words[76] = {eng: "knew", shv: "𐑯𐑿", shv2: "" };
dict_words[77] = {eng: "know", shv: "𐑯𐑴", shv2: "" };
dict_words[78] = {eng: "large", shv: "𐑤𐑸𐑡", shv2: "" };
dict_words[79] = {eng: "last", shv: "𐑤𐑭𐑕𐑑", shv2: "" };
dict_words[80] = {eng: "like", shv: "𐑤𐑲𐑒", shv2: "" };
dict_words[81] = {eng: "little", shv: "𐑤𐑦𐑑𐑩𐑤", shv2: "" };
dict_words[82] = {eng: "long", shv: "𐑤𐑪𐑙", shv2: "" };
dict_words[83] = {eng: "look", shv: "𐑤𐑫𐑒", shv2: "" };
dict_words[84] = {eng: "lost", shv: "𐑤𐑪𐑕𐑑", shv2: "" };
dict_words[85] = {eng: "love", shv: "𐑤𐑳𐑝", shv2: "" };
dict_words[86] = {eng: "made", shv: "𐑥𐑱𐑛", shv2: "" };
dict_words[87] = {eng: "make", shv: "𐑥𐑱𐑒", shv2: "" };
dict_words[88] = {eng: "man", shv: "𐑥𐑨𐑯", shv2: "" };
dict_words[89] = {eng: "many", shv: "𐑥𐑧𐑯𐑦", shv2: "" };
dict_words[90] = {eng: "may", shv: "𐑥𐑱", shv2: "" };
dict_words[91] = {eng: "me", shv: "𐑥𐑰", shv2: "" };
dict_words[92] = {eng: "men", shv: "𐑥𐑧𐑯", shv2: "" };
dict_words[93] = {eng: "might", shv: "𐑥𐑲𐑑", shv2: "" };
dict_words[94] = {eng: "money", shv: "𐑥𐑳𐑯𐑦", shv2: "" };
dict_words[95] = {eng: "more", shv: "𐑥𐑹", shv2: "" };
dict_words[96] = {eng: "most", shv: "𐑥𐑴𐑕𐑑", shv2: "" };
dict_words[97] = {eng: "much", shv: "𐑥𐑳𐑗", shv2: "" };
dict_words[98] = {eng: "must", shv: "𐑥𐑳𐑕𐑑", shv2: "" };
dict_words[99] = {eng: "my", shv: "𐑥𐑲", shv2: "" };
dict_words[100] = {eng: "near", shv: "𐑯𐑽", shv2: "" };
dict_words[101] = {eng: "never", shv: "𐑯𐑧𐑝𐑼", shv2: "" };
dict_words[102] = {eng: "new", shv: "𐑯𐑿", shv2: "" };
dict_words[103] = {eng: "next", shv: "𐑯𐑧𐑒𐑕𐑑", shv2: "" };
dict_words[104] = {eng: "no", shv: "𐑯𐑴", shv2: "" };
dict_words[105] = {eng: "none", shv: "𐑯𐑳𐑯", shv2: "" };
dict_words[106] = {eng: "not", shv: "𐑯𐑪𐑑", shv2: "" };
dict_words[107] = {eng: "nothing", shv: "𐑯𐑳𐑔𐑦𐑙", shv2: "" };
dict_words[108] = {eng: "now", shv: "𐑯𐑬", shv2: "" };
dict_words[109] = {eng: "of", shv: "𐑝", shv2: "" };
dict_words[110] = {eng: "off", shv: "𐑪𐑓", shv2: "" };
dict_words[111] = {eng: "often", shv: "𐑪𐑓𐑩𐑯", shv2: "" };
dict_words[112] = {eng: "old", shv: "𐑴𐑤𐑛", shv2: "" };
dict_words[113] = {eng: "on", shv: "𐑪𐑯", shv2: "" };
dict_words[114] = {eng: "once", shv: "𐑢𐑳𐑯𐑕", shv2: "" };
dict_words[115] = {eng: "one", shv: "𐑢𐑳𐑯", shv2: "" };
dict_words[116] = {eng: "only", shv: "𐑴𐑯𐑤𐑦", shv2: "" };
dict_words[117] = {eng: "or", shv: "𐑹", shv2: "" };
dict_words[118] = {eng: "other", shv: "𐑳𐑞𐑼", shv2: "" };
dict_words[119] = {eng: "our", shv: "𐑬𐑼", shv2: "" };
dict_words[120] = {eng: "over", shv: "𐑴𐑝𐑼", shv2: "" };
dict_words[121] = {eng: "out", shv: "𐑬𐑑", shv2: "" };
dict_words[122] = {eng: "own", shv: "𐑴𐑯", shv2: "" };
dict_words[123] = {eng: "part", shv: "𐑐𐑸𐑑", shv2: "" };
dict_words[124] = {eng: "pass", shv: "𐑐𐑭𐑕", shv2: "" };
dict_words[125] = {eng: "past", shv: "𐑐𐑭𐑕𐑑", shv2: "" };
dict_words[126] = {eng: "people", shv: "𐑐𐑰𐑐𐑩𐑤", shv2: "" };
dict_words[127] = {eng: "please", shv: "𐑐𐑤𐑰𐑟", shv2: "" };
dict_words[128] = {eng: "pleasure", shv: "𐑐𐑤𐑧𐑠𐑼", shv2: "" };
dict_words[129] = {eng: "possible", shv: "𐑐𐑪𐑕𐑩𐑚𐑩𐑤", shv2: "" };
dict_words[130] = {eng: "question", shv: "𐑒𐑢𐑧𐑕𐑗𐑩𐑯", shv2: "" };
dict_words[131] = {eng: "quite", shv: "𐑒𐑢𐑲𐑑", shv2: "" };
dict_words[132] = {eng: "rather", shv: "𐑮𐑭𐑞𐑼", shv2: "" };
dict_words[133] = {eng: "reach", shv: "𐑮𐑰𐑗", shv2: "" };
dict_words[134] = {eng: "read", shv: "𐑮𐑰𐑛", shv2: "" };
dict_words[135] = {eng: "really", shv: "𐑮𐑾𐑤𐑦", shv2: "" };
dict_words[136] = {eng: "right", shv: "𐑮𐑲𐑑", shv2: "" };
dict_words[137] = {eng: "said", shv: "𐑕𐑧𐑛", shv2: "" };
dict_words[138] = {eng: "same", shv: "𐑕𐑱𐑥", shv2: "" };
dict_words[139] = {eng: "say", shv: "𐑕𐑱", shv2: "" };
dict_words[140] = {eng: "says", shv: "𐑕𐑧𐑟", shv2: "" };
dict_words[141] = {eng: "shall", shv: "𐑖𐑨𐑤", shv2: "" };
dict_words[142] = {eng: "shan't", shv: "𐑖𐑭𐑯𐑑", shv2: "" };
dict_words[143] = {eng: "Shavian", shv: "·𐑖𐑱𐑝𐑾𐑯", shv2: "" };
dict_words[144] = {eng: "she", shv: "𐑖𐑰", shv2: "" };
dict_words[145] = {eng: "should", shv: "𐑖𐑫𐑛", shv2: "" };
dict_words[146] = {eng: "sincerely", shv: "𐑕𐑦𐑯𐑕𐑽𐑤𐑦", shv2: "" };
dict_words[147] = {eng: "so", shv: "𐑕𐑴", shv2: "" };
dict_words[148] = {eng: "some", shv: "𐑕𐑳𐑥", shv2: "" };
dict_words[149] = {eng: "something", shv: "𐑕𐑳𐑥𐑔𐑦𐑙", shv2: "" };
dict_words[150] = {eng: "still", shv: "𐑕𐑑𐑦𐑤", shv2: "" };
dict_words[151] = {eng: "such", shv: "𐑕𐑳𐑗", shv2: "" };
dict_words[152] = {eng: "sure", shv: "𐑖𐑫𐑼", shv2: "" };
dict_words[153] = {eng: "take", shv: "𐑑𐑱𐑒", shv2: "" };
dict_words[154] = {eng: "talk", shv: "𐑑𐑷𐑒", shv2: "" };
dict_words[155] = {eng: "than", shv: "𐑞𐑨𐑯", shv2: "" };
dict_words[156] = {eng: "thank", shv: "𐑔𐑨𐑙𐑒", shv2: "" };
dict_words[157] = {eng: "that", shv: "𐑞𐑨𐑑", shv2: "" };
dict_words[158] = {eng: "the", shv: "𐑞", shv2: "" };
dict_words[159] = {eng: "their", shv: "𐑞𐑺", shv2: "" };
dict_words[160] = {eng: "them", shv: "𐑞𐑧𐑥", shv2: "" };
dict_words[161] = {eng: "then", shv: "𐑞𐑧𐑯", shv2: "" };
dict_words[162] = {eng: "there", shv: "𐑞𐑺", shv2: "" };
dict_words[163] = {eng: "these", shv: "𐑞𐑰𐑟", shv2: "" };
dict_words[164] = {eng: "they", shv: "𐑞𐑱", shv2: "" };
dict_words[165] = {eng: "thing", shv: "𐑔𐑦𐑙", shv2: "" };
dict_words[166] = {eng: "think", shv: "𐑔𐑦𐑙𐑒", shv2: "" };
dict_words[167] = {eng: "this", shv: "𐑞𐑦𐑕", shv2: "" };
dict_words[168] = {eng: "those", shv: "𐑞𐑴𐑟", shv2: "" };
dict_words[169] = {eng: "thought", shv: "𐑔𐑷𐑑", shv2: "" };
dict_words[170] = {eng: "three", shv: "𐑔𐑮𐑰", shv2: "" };
dict_words[171] = {eng: "through", shv: "𐑔𐑮𐑵", shv2: "" };
dict_words[172] = {eng: "time", shv: "𐑑𐑲𐑥", shv2: "" };
dict_words[173] = {eng: "to", shv: "𐑑", shv2: "" };
dict_words[174] = {eng: "today", shv: "𐑑𐑩𐑛𐑱", shv2: "" };
dict_words[175] = {eng: "together", shv: "𐑑𐑩𐑜𐑧𐑞𐑼", shv2: "" };
dict_words[176] = {eng: "too", shv: "𐑑𐑵", shv2: "" };
dict_words[177] = {eng: "two", shv: "𐑑𐑵", shv2: "" };
dict_words[178] = {eng: "truly", shv: "𐑑𐑮𐑵𐑤𐑦", shv2: "" };
dict_words[179] = {eng: "under", shv: "𐑳𐑯𐑛𐑼", shv2: "" };
dict_words[180] = {eng: "unless", shv: "𐑩𐑯𐑤𐑧𐑕", shv2: "" };
dict_words[181] = {eng: "until", shv: "𐑩𐑯𐑑𐑦𐑤", shv2: "" };
dict_words[182] = {eng: "up", shv: "𐑳𐑐", shv2: "" };
dict_words[183] = {eng: "us", shv: "𐑳𐑕", shv2: "" };
dict_words[184] = {eng: "use", shv: "𐑿𐑟", shv2: "" };
dict_words[185] = {eng: "used", shv: "𐑿𐑟𐑛", shv2: "𐑿𐑕𐑑" };
dict_words[186] = {eng: "usual", shv: "𐑿𐑠𐑫𐑩𐑤", shv2: "" };
dict_words[187] = {eng: "vary", shv: "𐑝𐑺𐑦", shv2: "" };
dict_words[188] = {eng: "very", shv: "𐑝𐑧𐑮𐑦", shv2: "" };
dict_words[189] = {eng: "want", shv: "𐑢𐑪𐑯𐑑", shv2: "" };
dict_words[190] = {eng: "war", shv: "𐑢𐑹", shv2: "" };
dict_words[191] = {eng: "was", shv: "𐑢𐑪𐑟", shv2: "" };
dict_words[192] = {eng: "wasn't", shv: "𐑢𐑪𐑟𐑩𐑯𐑑", shv2: "" };
dict_words[193] = {eng: "way", shv: "𐑢𐑱", shv2: "" };
dict_words[194] = {eng: "we", shv: "𐑢𐑰", shv2: "" };
dict_words[195] = {eng: "well", shv: "𐑢𐑧𐑤", shv2: "" };
dict_words[196] = {eng: "went", shv: "𐑢𐑧𐑯𐑑", shv2: "" };
dict_words[197] = {eng: "were", shv: "𐑢𐑻", shv2: "" };
dict_words[198] = {eng: "what", shv: "[𐑣]𐑢𐑪𐑑", shv2: "" };
dict_words[199] = {eng: "where", shv: "[𐑣]𐑢𐑺", shv2: "" };
dict_words[200] = {eng: "which", shv: "[𐑣]𐑢𐑦𐑗", shv2: "" };
dict_words[201] = {eng: "while", shv: "[𐑣]𐑢𐑲𐑤", shv2: "" };
dict_words[202] = {eng: "who", shv: "𐑣𐑵", shv2: "" };
dict_words[203] = {eng: "whole", shv: "𐑣𐑴𐑤", shv2: "" };
dict_words[204] = {eng: "whose", shv: "𐑣𐑵𐑟", shv2: "" };
dict_words[205] = {eng: "why", shv: "[𐑣]𐑢𐑲", shv2: "" };
dict_words[206] = {eng: "when", shv: "[𐑣]𐑢𐑧𐑯", shv2: "" };
dict_words[207] = {eng: "will", shv: "𐑢𐑦𐑤", shv2: "" };
dict_words[208] = {eng: "with", shv: "𐑢𐑦𐑞", shv2: "" };
dict_words[209] = {eng: "woman", shv: "𐑢𐑫𐑥𐑩𐑯", shv2: "" };
dict_words[210] = {eng: "women", shv: "𐑢𐑦𐑥𐑦𐑯", shv2: "" };
dict_words[211] = {eng: "word", shv: "𐑢𐑻𐑛", shv2: "" };
dict_words[212] = {eng: "work", shv: "𐑢𐑻𐑒", shv2: "" };
dict_words[213] = {eng: "world", shv: "𐑢𐑻𐑤𐑛", shv2: "" };
dict_words[214] = {eng: "would", shv: "𐑢𐑫𐑛", shv2: "" };
dict_words[215] = {eng: "write", shv: "𐑮𐑲𐑑", shv2: "" };
dict_words[216] = {eng: "written", shv: "𐑮𐑦𐑑𐑩𐑯", shv2: "" };
dict_words[217] = {eng: "wrong", shv: "𐑮𐑪𐑙", shv2: "" };
dict_words[218] = {eng: "year", shv: "𐑘𐑽", shv2: "" };
dict_words[219] = {eng: "yesterday", shv: "𐑘𐑧𐑕𐑑𐑼𐑛𐑱", shv2: "" };
dict_words[220] = {eng: "yet", shv: "𐑘𐑧𐑑", shv2: "" };
dict_words[221] = {eng: "you", shv: "𐑿", shv2: "" };
dict_words[222] = {eng: "young", shv: "𐑘𐑳𐑙", shv2: "" };
dict_words[223] = {eng: "your", shv: "𐑘𐑫𐑼", shv2: "" };


window.rnd; 

function getRandomInteger() {
	return Math.round(Math.random() * 224);
}

function reset() {
	const subset = $('#subset');
	var wordDisplay;

	if (subset.val() == 1) {
		wordDisplay = dict_words[window.rnd].shv;
	} else if (subset.val() == 2) {
		wordDisplay = dict_words[window.rnd].shv;
	} else if (subset.val() == 3) {
		wordDisplay = dict_words[window.rnd].eng;
	} else {
		wordDisplay = dict_words[window.rnd].shv;
	}

	$('.shavian .word-display').html(wordDisplay);
}

function selectSubset() {
	window.rnd = getRandomInteger();
	reset();
}

$('#show').click(function() {
	const res = $('#result');
	res.html(dict_words[window.rnd].shv + ' ' + dict_words[window.rnd].eng);
});

inp.keypress(function (e) {
    if(e.which === 13 && !e.shiftKey) {
        e.preventDefault();
		const subset = $('#subset');
		const res = $('#result');
		const answer = inp.val().trim();

		if (subset.val() == 1) {
			wordDisplay = dict_words[window.rnd].shv;
			wordDisplay2 = dict_words[window.rnd].shv2;
		} else if (subset.val() == 2) {
			wordDisplay = dict_words[window.rnd].eng;
		} else if (subset.val() == 3) {
			wordDisplay = dict_words[window.rnd].shv;
		} else {
			wordDisplay = dict_words[window.rnd].shv;
			wordDisplay2 = dict_words[window.rnd].shv2;
		}

		$('#debug').html(wordDisplay + ' ' + answer);

		if ((wordDisplay === answer) || (wordDisplay2 === answer)) {
			res.html(answer);
			res.addClass('good');
			setTimeout(function() {
				res.removeClass('good');
				res.html(' - ');
				inp.val('');
			}, 1000);

			window.rnd = getRandomInteger();
			reset();
		} else {
			res.html(wordDisplay);
			res.addClass('bad');
			setTimeout(function() {
				res.removeClass('bad');
				res.html(' - ');
				inp.val('');
			}, 1000);
		}
    }
});
// don’t and don't
