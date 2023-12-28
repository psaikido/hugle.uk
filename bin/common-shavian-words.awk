#!/usr/bin/awk -f

BEGIN {
	FS="[[:blank:]]|,";
	count = 1;
	print "const dict_words = [];"
}
{ 
	printf("dict_words[%d] = {lat: \"%s\", shv: \"%s\", shv2: \"%s\" };\n", count, $1, $2, $3) 
	count = count + 1;
}
