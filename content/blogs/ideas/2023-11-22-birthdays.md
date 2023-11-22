---
bannerTitle: blog - ideas
title: Birthdays
date: 2023-11-22
menu: ideas
weight: 7
---

I got curious about the differences between programming languages and decided to have a play.  

For a long time I've kept a little file of birthdays I want to remember. It's formatted like this:  

```
1948-01-01 Goober
1951-10-19 Spong
1952-06-30 Nyim
```

The dates are in 'yyyy-mm-dd' style.

How about I write a script to show the next birthday coming along? It means
that the dates are not sorted chronologically in the usual way. You'd have to
list them by month, then day and only then by year.

The next thing is that it shouldn't be a static list because it should change
depending on when it is viewed. The 'next birthday' depends on when in the year
the list is looked at.

If 'now' is currently 2030-02-01 say (ie. in February), then the list should be:

```
1952-06-30 Nyim
1951-10-19 Spong
1948-01-01 Goober
```

Next I added folks' ages and 'deathdays'. Some folks in my list had died so
their age would have to be calculated differently to those still happily alive.
I also added their 'next birthday' to make it clearer.

With a header my 'birthdayrem' (birthday reminder) script output eg:

```
> birthdayrem
yyyy-mm-dd       NAME  AGE-NOW     NEXT
---------------------------------------
1948-01-01     Goober       75       76
1952-06-30       Nyim       67        -
1951-10-19      Spong       72       73
```

## Multiple languages

After scripting all this in
[bash](https://github.com/psaikido/birthdayrem/blob/main/bash/birthdayrem) I
went on to code it in awk, lua, php, python, node & c -
[github](https://github.com/psaikido/birthdayrem).
