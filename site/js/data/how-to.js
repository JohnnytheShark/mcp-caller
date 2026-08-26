export const HOWTO_DATA = {
  "how-to/add-http-transport.md": {
    title: "How to Add an HTTP Transport",
    category: "how-to",
    content: \#\ \H\o\w\ \t\o\ \A\d\d\ \a\n\ \H\T\T\P\ \T\r\a\n\s\p\o\r\t\
\
\*\*\G\o\a\l\*\*\:\ \E\x\t\e\n\d\ \`\m\c\p\-\c\a\l\l\e\r\`\ \t\o\ \c\o\n\n\e\c\t\ \t\o\ \M\C\P\ \s\e\r\v\e\r\s\ \t\h\a\t\ \c\o\m\m\u\n\i\c\a\t\e\ \o\v\e\r\ \H\T\T\P\/\S\S\E\ \r\a\t\h\e\r\ \t\h\a\n\ \s\t\d\i\o\.\
\
\>\ \*\*\N\o\t\e\*\*\:\ \T\h\e\ \H\T\T\P\ \t\r\a\n\s\p\o\r\t\ \i\s\ \*\*\n\o\t\ \b\u\n\d\l\e\d\*\*\ \i\n\ \v\0\.\1\.\0\.\ \T\h\i\s\ \g\u\i\d\e\ \s\h\o\w\s\ \y\o\u\ \e\x\a\c\t\l\y\ \w\h\e\r\e\ \a\n\d\ \h\o\w\ \t\o\ \i\m\p\l\e\m\e\n\t\ \i\t\ \—\ \t\h\e\ \a\r\c\h\i\t\e\c\t\u\r\e\ \i\s\ \d\e\s\i\g\n\e\d\ \f\o\r\ \t\h\i\s\ \e\x\t\e\n\s\i\o\n\.\
\
\-\-\-\
\
\#\#\ \B\a\c\k\g\r\o\u\n\d\
\
\S\o\m\e\ \M\C\P\ \s\e\r\v\e\r\s\ \r\u\n\ \a\s\ \l\o\n\g\-\l\i\v\e\d\ \H\T\T\P\ \s\e\r\v\i\c\e\s\ \r\a\t\h\e\r\ \t\h\a\n\ \s\h\o\r\t\-\l\i\v\e\d\ \p\r\o\c\e\s\s\e\s\.\ \T\h\e\y\ \e\x\p\o\s\e\ \a\ \S\e\r\v\e\r\-\S\e\n\t\ \E\v\e\n\t\s\ \(\S\S\E\)\ \e\n\d\p\o\i\n\t\ \f\o\r\ \t\h\e\ \s\e\r\v\e\r\→\c\l\i\e\n\t\ \s\t\r\e\a\m\ \a\n\d\ \a\c\c\e\p\t\ \J\S\O\N\-\R\P\C\ \P\O\S\T\ \r\e\q\u\e\s\t\s\ \f\r\o\m\ \t\h\e\ \c\l\i\e\n\t\.\ \T\h\i\s\ \i\s\ \t\h\e\ \`\h\t\t\p\`\ \t\r\a\n\s\p\o\r\t\ \i\n\ \t\h\e\ \M\C\P\ \s\p\e\c\.\
\
\T\h\e\ \c\u\r\r\e\n\t\ \`\m\c\p\-\c\a\l\l\e\r\`\ \o\n\l\y\ \h\a\s\ \a\ \`\s\t\d\i\o\`\ \t\r\a\n\s\p\o\r\t\.\ \A\d\d\i\n\g\ \H\T\T\P\ \r\e\q\u\i\r\e\s\:\
\1\.\ \I\m\p\l\e\m\e\n\t\i\n\g\ \t\h\e\ \`\T\r\a\n\s\p\o\r\t\`\ \t\r\a\i\t\ \i\n\ \a\ \n\e\w\ \`\s\r\c\/\m\c\p\/\h\t\t\p\.\r\s\`\ \f\i\l\e\
\2\.\ \E\x\p\o\s\i\n\g\ \a\ \`\c\o\n\n\e\c\t\_\h\t\t\p\`\ \c\o\n\s\t\r\u\c\t\o\r\ \o\n\ \`\M\c\p\C\l\i\e\n\t\`\
\3\.\ \A\d\d\i\n\g\ \`\-\-\u\r\l\`\ \r\o\u\t\i\n\g\ \i\n\ \t\h\e\ \c\o\m\m\a\n\d\ \h\a\n\d\l\e\r\s\
\
\-\-\-\
\
\#\#\ \S\t\e\p\ \1\ \—\ \A\d\d\ \D\e\p\e\n\d\e\n\c\i\e\s\
\
\A\d\d\ \`\r\e\q\w\e\s\t\`\ \a\n\d\ \`\f\u\t\u\r\e\s\`\ \b\a\c\k\ \t\o\ \`\C\a\r\g\o\.\t\o\m\l\`\:\
\
\`\`\`\t\o\m\l\
\#\ \C\a\r\g\o\.\t\o\m\l\
\r\e\q\w\e\s\t\ \=\ \{\ \v\e\r\s\i\o\n\ \=\ \"\0\.\1\2\"\,\ \f\e\a\t\u\r\e\s\ \=\ \[\"\j\s\o\n\"\,\ \"\s\t\r\e\a\m\"\]\ \}\
\f\u\t\u\r\e\s\ \=\ \"\0\.\3\"\
\`\`\`\
\
\-\-\-\
\
\#\#\ \S\t\e\p\ \2\ \—\ \I\m\p\l\e\m\e\n\t\ \`\H\t\t\p\T\r\a\n\s\p\o\r\t\`\
\
\C\r\e\a\t\e\ \`\s\r\c\/\m\c\p\/\h\t\t\p\.\r\s\`\:\
\
\`\`\`\r\u\s\t\
\u\s\e\ \s\u\p\e\r\:\:\t\r\a\n\s\p\o\r\t\:\:\T\r\a\n\s\p\o\r\t\;\
\u\s\e\ \s\u\p\e\r\:\:\t\y\p\e\s\:\:\{\J\s\o\n\R\p\c\N\o\t\i\f\i\c\a\t\i\o\n\,\ \J\s\o\n\R\p\c\R\e\q\u\e\s\t\,\ \J\s\o\n\R\p\c\R\e\s\p\o\n\s\e\}\;\
\u\s\e\ \a\n\y\h\o\w\:\:\{\a\n\y\h\o\w\,\ \C\o\n\t\e\x\t\,\ \R\e\s\u\l\t\}\;\
\u\s\e\ \a\s\y\n\c\_\t\r\a\i\t\:\:\a\s\y\n\c\_\t\r\a\i\t\;\
\u\s\e\ \r\e\q\w\e\s\t\:\:\C\l\i\e\n\t\;\
\u\s\e\ \s\e\r\d\e\_\j\s\o\n\:\:\V\a\l\u\e\;\
\u\s\e\ \s\t\d\:\:\s\y\n\c\:\:\a\t\o\m\i\c\:\:\{\A\t\o\m\i\c\U\6\4\,\ \O\r\d\e\r\i\n\g\}\;\
\
\p\u\b\ \s\t\r\u\c\t\ \H\t\t\p\T\r\a\n\s\p\o\r\t\ \{\
\ \ \ \ \c\l\i\e\n\t\:\ \C\l\i\e\n\t\,\
\ \ \ \ \b\a\s\e\_\u\r\l\:\ \S\t\r\i\n\g\,\
\ \ \ \ \r\e\q\_\i\d\_\c\o\u\n\t\e\r\:\ \A\t\o\m\i\c\U\6\4\,\
\}\
\
\i\m\p\l\ \H\t\t\p\T\r\a\n\s\p\o\r\t\ \{\
\ \ \ \ \p\u\b\ \a\s\y\n\c\ \f\n\ \c\o\n\n\e\c\t\(\b\a\s\e\_\u\r\l\:\ \i\m\p\l\ \I\n\t\o\<\S\t\r\i\n\g\>\)\ \-\>\ \R\e\s\u\l\t\<\S\e\l\f\>\ \{\
\ \ \ \ \ \ \ \ \l\e\t\ \b\a\s\e\_\u\r\l\ \=\ \b\a\s\e\_\u\r\l\.\i\n\t\o\(\)\;\
\ \ \ \ \ \ \ \ \l\e\t\ \c\l\i\e\n\t\ \=\ \C\l\i\e\n\t\:\:\n\e\w\(\)\;\
\
\ \ \ \ \ \ \ \ \/\/\ \V\e\r\i\f\y\ \t\h\e\ \s\e\r\v\e\r\ \i\s\ \r\e\a\c\h\a\b\l\e\
\ \ \ \ \ \ \ \ \c\l\i\e\n\t\
\ \ \ \ \ \ \ \ \ \ \ \ \.\g\e\t\(\f\o\r\m\a\t\!\(\"\{\}\/\h\e\a\l\t\h\"\,\ \b\a\s\e\_\u\r\l\)\)\
\ \ \ \ \ \ \ \ \ \ \ \ \.\s\e\n\d\(\)\
\ \ \ \ \ \ \ \ \ \ \ \ \.\a\w\a\i\t\
\ \ \ \ \ \ \ \ \ \ \ \ \.\w\i\t\h\_\c\o\n\t\e\x\t\(\|\|\ \f\o\r\m\a\t\!\(\"\C\a\n\n\o\t\ \r\e\a\c\h\ \M\C\P\ \s\e\r\v\e\r\ \a\t\ \{\}\"\,\ \b\a\s\e\_\u\r\l\)\)\?\;\
\
\ \ \ \ \ \ \ \ \O\k\(\S\e\l\f\ \{\
\ \ \ \ \ \ \ \ \ \ \ \ \c\l\i\e\n\t\,\
\ \ \ \ \ \ \ \ \ \ \ \ \b\a\s\e\_\u\r\l\,\
\ \ \ \ \ \ \ \ \ \ \ \ \r\e\q\_\i\d\_\c\o\u\n\t\e\r\:\ \A\t\o\m\i\c\U\6\4\:\:\n\e\w\(\1\)\,\
\ \ \ \ \ \ \ \ \}\)\
\ \ \ \ \}\
\}\
\
\#\[\a\s\y\n\c\_\t\r\a\i\t\]\
\i\m\p\l\ \T\r\a\n\s\p\o\r\t\ \f\o\r\ \H\t\t\p\T\r\a\n\s\p\o\r\t\ \{\
\ \ \ \ \a\s\y\n\c\ \f\n\ \s\e\n\d\_\r\e\q\u\e\s\t\(\&\m\u\t\ \s\e\l\f\,\ \m\e\t\h\o\d\:\ \&\s\t\r\,\ \p\a\r\a\m\s\:\ \O\p\t\i\o\n\<\V\a\l\u\e\>\)\ \-\>\ \R\e\s\u\l\t\<\V\a\l\u\e\>\ \{\
\ \ \ \ \ \ \ \ \l\e\t\ \i\d\ \=\ \s\e\l\f\.\r\e\q\_\i\d\_\c\o\u\n\t\e\r\.\f\e\t\c\h\_\a\d\d\(\1\,\ \O\r\d\e\r\i\n\g\:\:\S\e\q\C\s\t\)\;\
\ \ \ \ \ \ \ \ \l\e\t\ \r\e\q\u\e\s\t\ \=\ \J\s\o\n\R\p\c\R\e\q\u\e\s\t\:\:\n\e\w\(\i\d\,\ \m\e\t\h\o\d\,\ \p\a\r\a\m\s\)\;\
\
\ \ \ \ \ \ \ \ \l\e\t\ \r\e\s\p\o\n\s\e\ \=\ \s\e\l\f\
\ \ \ \ \ \ \ \ \ \ \ \ \.\c\l\i\e\n\t\
\ \ \ \ \ \ \ \ \ \ \ \ \.\p\o\s\t\(\f\o\r\m\a\t\!\(\"\{\}\/\r\p\c\"\,\ \s\e\l\f\.\b\a\s\e\_\u\r\l\)\)\
\ \ \ \ \ \ \ \ \ \ \ \ \.\j\s\o\n\(\&\r\e\q\u\e\s\t\)\
\ \ \ \ \ \ \ \ \ \ \ \ \.\s\e\n\d\(\)\
\ \ \ \ \ \ \ \ \ \ \ \ \.\a\w\a\i\t\
\ \ \ \ \ \ \ \ \ \ \ \ \.\c\o\n\t\e\x\t\(\"\H\T\T\P\ \r\e\q\u\e\s\t\ \t\o\ \M\C\P\ \s\e\r\v\e\r\ \f\a\i\l\e\d\"\)\?\;\
\
\ \ \ \ \ \ \ \ \l\e\t\ \r\p\c\_\r\e\s\p\o\n\s\e\:\ \J\s\o\n\R\p\c\R\e\s\p\o\n\s\e\ \=\ \r\e\s\p\o\n\s\e\
\ \ \ \ \ \ \ \ \ \ \ \ \.\j\s\o\n\(\)\
\ \ \ \ \ \ \ \ \ \ \ \ \.\a\w\a\i\t\
\ \ \ \ \ \ \ \ \ \ \ \ \.\c\o\n\t\e\x\t\(\"\F\a\i\l\e\d\ \t\o\ \p\a\r\s\e\ \M\C\P\ \s\e\r\v\e\r\ \r\e\s\p\o\n\s\e\"\)\?\;\
\
\ \ \ \ \ \ \ \ \i\f\ \l\e\t\ \S\o\m\e\(\e\r\r\)\ \=\ \r\p\c\_\r\e\s\p\o\n\s\e\.\e\r\r\o\r\ \{\
\ \ \ \ \ \ \ \ \ \ \ \ \r\e\t\u\r\n\ \E\r\r\(\a\n\y\h\o\w\!\(\e\r\r\)\)\;\
\ \ \ \ \ \ \ \ \}\
\
\ \ \ \ \ \ \ \ \O\k\(\r\p\c\_\r\e\s\p\o\n\s\e\.\r\e\s\u\l\t\.\u\n\w\r\a\p\_\o\r\(\V\a\l\u\e\:\:\N\u\l\l\)\)\
\ \ \ \ \}\
\
\ \ \ \ \a\s\y\n\c\ \f\n\ \s\e\n\d\_\n\o\t\i\f\i\c\a\t\i\o\n\(\&\m\u\t\ \s\e\l\f\,\ \m\e\t\h\o\d\:\ \&\s\t\r\,\ \p\a\r\a\m\s\:\ \O\p\t\i\o\n\<\V\a\l\u\e\>\)\ \-\>\ \R\e\s\u\l\t\<\(\)\>\ \{\
\ \ \ \ \ \ \ \ \l\e\t\ \n\o\t\i\f\i\c\a\t\i\o\n\ \=\ \J\s\o\n\R\p\c\N\o\t\i\f\i\c\a\t\i\o\n\:\:\n\e\w\(\m\e\t\h\o\d\,\ \p\a\r\a\m\s\)\;\
\ \ \ \ \ \ \ \ \s\e\l\f\.\c\l\i\e\n\t\
\ \ \ \ \ \ \ \ \ \ \ \ \.\p\o\s\t\(\f\o\r\m\a\t\!\(\"\{\}\/\r\p\c\"\,\ \s\e\l\f\.\b\a\s\e\_\u\r\l\)\)\
\ \ \ \ \ \ \ \ \ \ \ \ \.\j\s\o\n\(\&\n\o\t\i\f\i\c\a\t\i\o\n\)\
\ \ \ \ \ \ \ \ \ \ \ \ \.\s\e\n\d\(\)\
\ \ \ \ \ \ \ \ \ \ \ \ \.\a\w\a\i\t\
\ \ \ \ \ \ \ \ \ \ \ \ \.\c\o\n\t\e\x\t\(\"\H\T\T\P\ \n\o\t\i\f\i\c\a\t\i\o\n\ \t\o\ \M\C\P\ \s\e\r\v\e\r\ \f\a\i\l\e\d\"\)\?\;\
\ \ \ \ \ \ \ \ \O\k\(\(\)\)\
\ \ \ \ \}\
\
\ \ \ \ \a\s\y\n\c\ \f\n\ \c\l\o\s\e\(\&\m\u\t\ \s\e\l\f\)\ \-\>\ \R\e\s\u\l\t\<\(\)\>\ \{\
\ \ \ \ \ \ \ \ \/\/\ \H\T\T\P\ \i\s\ \s\t\a\t\e\l\e\s\s\ \—\ \n\o\t\h\i\n\g\ \t\o\ \c\l\o\s\e\
\ \ \ \ \ \ \ \ \O\k\(\(\)\)\
\ \ \ \ \}\
\}\
\`\`\`\
\
\-\-\-\
\
\#\#\ \S\t\e\p\ \3\ \—\ \E\x\p\o\s\e\ \`\c\o\n\n\e\c\t\_\h\t\t\p\`\ \o\n\ \`\M\c\p\C\l\i\e\n\t\`\
\
\A\d\d\ \t\o\ \`\s\r\c\/\m\c\p\/\c\l\i\e\n\t\.\r\s\`\:\
\
\`\`\`\r\u\s\t\
\u\s\e\ \s\u\p\e\r\:\:\h\t\t\p\:\:\H\t\t\p\T\r\a\n\s\p\o\r\t\;\
\
\i\m\p\l\ \M\c\p\C\l\i\e\n\t\ \{\
\ \ \ \ \/\/\/\ \C\r\e\a\t\e\ \a\ \n\e\w\ \M\C\P\ \c\l\i\e\n\t\ \o\v\e\r\ \a\n\ \H\T\T\P\ \t\r\a\n\s\p\o\r\t\ \a\n\d\ \p\e\r\f\o\r\m\ \h\a\n\d\s\h\a\k\e\.\
\ \ \ \ \/\/\/\
\ \ \ \ \/\/\/\ \`\b\a\s\e\_\u\r\l\`\ \s\h\o\u\l\d\ \b\e\ \t\h\e\ \s\e\r\v\e\r\'\s\ \r\o\o\t\ \U\R\L\,\ \e\.\g\.\ \`\"\h\t\t\p\:\/\/\l\o\c\a\l\h\o\s\t\:\8\0\8\0\"\`\.\
\ \ \ \ \p\u\b\ \a\s\y\n\c\ \f\n\ \c\o\n\n\e\c\t\_\h\t\t\p\(\b\a\s\e\_\u\r\l\:\ \&\s\t\r\)\ \-\>\ \R\e\s\u\l\t\<\S\e\l\f\>\ \{\
\ \ \ \ \ \ \ \ \l\e\t\ \t\r\a\n\s\p\o\r\t\ \=\ \H\t\t\p\T\r\a\n\s\p\o\r\t\:\:\c\o\n\n\e\c\t\(\b\a\s\e\_\u\r\l\)\.\a\w\a\i\t\?\;\
\ \ \ \ \ \ \ \ \l\e\t\ \m\u\t\ \c\l\i\e\n\t\ \=\ \S\e\l\f\ \{\
\ \ \ \ \ \ \ \ \ \ \ \ \t\r\a\n\s\p\o\r\t\:\ \B\o\x\:\:\n\e\w\(\t\r\a\n\s\p\o\r\t\)\,\
\ \ \ \ \ \ \ \ \ \ \ \ \s\e\r\v\e\r\_\i\n\f\o\:\ \N\o\n\e\,\
\ \ \ \ \ \ \ \ \ \ \ \ \i\n\s\t\r\u\c\t\i\o\n\s\:\ \N\o\n\e\,\
\ \ \ \ \ \ \ \ \}\;\
\ \ \ \ \ \ \ \ \c\l\i\e\n\t\.\i\n\i\t\i\a\l\i\z\e\(\)\.\a\w\a\i\t\?\;\
\ \ \ \ \ \ \ \ \O\k\(\c\l\i\e\n\t\)\
\ \ \ \ \}\
\}\
\`\`\`\
\
\-\-\-\
\
\#\#\ \S\t\e\p\ \4\ \—\ \A\d\d\ \`\u\r\l\`\ \R\o\u\t\i\n\g\ \t\o\ \`\r\e\s\o\l\v\e\_\s\e\r\v\e\r\_\d\e\f\i\n\i\t\i\o\n\`\
\
\I\n\ \`\s\r\c\/\c\o\m\m\a\n\d\s\/\m\o\d\.\r\s\`\,\ \u\p\d\a\t\e\ \`\r\e\s\o\l\v\e\_\s\e\r\v\e\r\_\d\e\f\i\n\i\t\i\o\n\`\ \t\o\ \h\a\n\d\l\e\ \t\h\e\ \c\a\s\e\ \w\h\e\r\e\ \a\ \`\S\e\r\v\e\r\D\e\f\i\n\i\t\i\o\n\`\ \h\a\s\ \`\u\r\l\`\ \s\e\t\ \b\u\t\ \n\o\ \`\c\o\m\m\a\n\d\`\.\
\
\T\h\e\n\ \i\n\ \e\a\c\h\ \c\o\m\m\a\n\d\ \h\a\n\d\l\e\r\,\ \c\h\e\c\k\ \`\s\e\r\v\e\r\_\d\e\f\.\u\r\l\`\ \a\n\d\ \c\a\l\l\ \`\M\c\p\C\l\i\e\n\t\:\:\c\o\n\n\e\c\t\_\h\t\t\p\`\ \i\n\s\t\e\a\d\ \o\f\ \`\M\c\p\C\l\i\e\n\t\:\:\c\o\n\n\e\c\t\_\s\t\d\i\o\`\:\
\
\`\`\`\r\u\s\t\
\l\e\t\ \m\u\t\ \c\l\i\e\n\t\ \=\ \i\f\ \l\e\t\ \S\o\m\e\(\u\r\l\)\ \=\ \&\s\e\r\v\e\r\_\d\e\f\.\u\r\l\ \{\
\ \ \ \ \M\c\p\C\l\i\e\n\t\:\:\c\o\n\n\e\c\t\_\h\t\t\p\(\u\r\l\)\.\a\w\a\i\t\?\
\}\ \e\l\s\e\ \{\
\ \ \ \ \l\e\t\ \c\o\m\m\a\n\d\ \=\ \s\e\r\v\e\r\_\d\e\f\.\c\o\m\m\a\n\d\.\a\s\_\d\e\r\e\f\(\)\
\ \ \ \ \ \ \ \ \.\o\k\_\o\r\_\e\l\s\e\(\|\|\ \a\n\y\h\o\w\!\(\"\N\o\ \c\o\m\m\a\n\d\ \o\r\ \U\R\L\ \s\p\e\c\i\f\i\e\d\ \f\o\r\ \s\e\r\v\e\r\"\)\)\?\;\
\ \ \ \ \M\c\p\C\l\i\e\n\t\:\:\c\o\n\n\e\c\t\_\s\t\d\i\o\(\c\o\m\m\a\n\d\,\ \&\s\e\r\v\e\r\_\d\e\f\.\a\r\g\s\,\ \&\s\e\r\v\e\r\_\d\e\f\.\e\n\v\)\.\a\w\a\i\t\?\
\}\;\
\`\`\`\
\
\-\-\-\
\
\#\#\ \S\t\e\p\ \5\ \—\ \U\p\d\a\t\e\ \`\m\c\p\/\m\o\d\.\r\s\`\
\
\E\x\p\o\s\e\ \t\h\e\ \n\e\w\ \m\o\d\u\l\e\:\
\
\`\`\`\r\u\s\t\
\/\/\ \s\r\c\/\m\c\p\/\m\o\d\.\r\s\
\p\u\b\ \m\o\d\ \h\t\t\p\;\
\`\`\`\
\
\-\-\-\
\
\#\#\ \S\t\e\p\ \6\ \—\ \R\e\g\i\s\t\e\r\ \`\h\t\t\p\.\r\s\`\ \i\n\ \y\o\u\r\ \m\o\d\u\l\e\
\
\N\o\ \c\h\a\n\g\e\s\ \n\e\e\d\e\d\ \t\o\ \`\m\a\i\n\.\r\s\`\ \o\r\ \t\h\e\ \`\C\l\i\`\ \s\t\r\u\c\t\ \—\ \t\h\e\ \`\-\-\c\m\d\`\ \f\l\a\g\ \a\l\r\e\a\d\y\ \a\c\c\e\p\t\s\ \a\r\b\i\t\r\a\r\y\ \s\t\r\i\n\g\s\,\ \a\n\d\ \c\o\n\f\i\g\ \f\i\l\e\s\ \c\a\n\ \a\l\r\e\a\d\y\ \h\a\v\e\ \`\"\u\r\l\"\`\ \f\i\e\l\d\s\.\
\
\U\s\e\r\s\ \c\a\n\ \n\o\w\ \c\o\n\f\i\g\u\r\e\ \H\T\T\P\ \s\e\r\v\e\r\s\:\
\
\`\`\`\j\s\o\n\
\{\
\ \ \"\m\c\p\S\e\r\v\e\r\s\"\:\ \{\
\ \ \ \ \"\r\e\m\o\t\e\-\s\e\r\v\e\r\"\:\ \{\
\ \ \ \ \ \ \"\u\r\l\"\:\ \"\h\t\t\p\:\/\/\1\9\2\.\1\6\8\.\1\.\1\0\0\:\8\0\8\0\"\
\ \ \ \ \}\
\ \ \}\
\}\
\`\`\`\
\
\-\-\-\
\
\#\#\ \S\e\e\ \A\l\s\o\
\
\-\ \[\T\h\e\ \T\r\a\n\s\p\o\r\t\ \A\b\s\t\r\a\c\t\i\o\n\]\(\.\.\/\e\x\p\l\a\n\a\t\i\o\n\/\t\r\a\n\s\p\o\r\t\-\a\b\s\t\r\a\c\t\i\o\n\.\m\d\)\ \—\ \u\n\d\e\r\s\t\a\n\d\ \w\h\y\ \t\h\i\s\ \e\x\t\e\n\s\i\o\n\ \r\e\q\u\i\r\e\s\ \n\o\ \c\h\a\n\g\e\s\ \t\o\ \t\h\e\ \p\r\o\t\o\c\o\l\ \l\a\y\e\r\
\-\ \[\A\r\c\h\i\t\e\c\t\u\r\e\ \R\e\f\e\r\e\n\c\e\]\(\.\.\/\r\e\f\e\r\e\n\c\e\/\a\r\c\h\i\t\e\c\t\u\r\e\.\m\d\)\ \—\ \m\o\d\u\l\e\ \m\a\p\
\
  },
  "how-to/call-tool-from-cli.md": {
    title: "How to Call a Tool from the CLI (Scripting & Piping)",
    category: "how-to",
    content: \#\ \H\o\w\ \t\o\ \C\a\l\l\ \a\ \T\o\o\l\ \f\r\o\m\ \t\h\e\ \C\L\I\ \(\S\c\r\i\p\t\i\n\g\ \&\ \P\i\p\i\n\g\)\
\
\*\*\G\o\a\l\*\*\:\ \I\n\v\o\k\e\ \M\C\P\ \t\o\o\l\s\ \n\o\n\-\i\n\t\e\r\a\c\t\i\v\e\l\y\ \i\n\ \s\h\e\l\l\ \s\c\r\i\p\t\s\,\ \C\I\ \p\i\p\e\l\i\n\e\s\,\ \a\n\d\ \d\a\t\a\ \p\i\p\e\l\i\n\e\s\.\
\
\-\-\-\
\
\#\#\ \B\a\s\i\c\ \N\o\n\-\I\n\t\e\r\a\c\t\i\v\e\ \C\a\l\l\
\
\P\a\s\s\ \`\-\-\a\r\g\s\`\ \w\i\t\h\ \a\ \J\S\O\N\ \o\b\j\e\c\t\ \t\o\ \b\y\p\a\s\s\ \t\h\e\ \i\n\t\e\r\a\c\t\i\v\e\ \p\r\o\m\p\t\s\:\
\
\`\`\`\b\a\s\h\
\m\c\p\-\c\a\l\l\e\r\ \c\a\l\l\ \f\i\l\e\s\y\s\t\e\m\ \-\-\t\o\o\l\ \l\i\s\t\_\d\i\r\e\c\t\o\r\y\ \-\-\a\r\g\s\ \'\{\"\p\a\t\h\"\:\ \"\s\r\c\"\}\'\
\`\`\`\
\
\I\f\ \r\e\q\u\i\r\e\d\ \a\r\g\u\m\e\n\t\s\ \a\r\e\ \m\i\s\s\i\n\g\ \f\r\o\m\ \`\-\-\a\r\g\s\`\,\ \`\m\c\p\-\c\a\l\l\e\r\`\ \w\i\l\l\ \s\t\i\l\l\ \p\r\o\m\p\t\ \y\o\u\ \u\n\l\e\s\s\ \y\o\u\ \a\l\s\o\ \p\a\s\s\ \`\-\-\n\o\n\-\i\n\t\e\r\a\c\t\i\v\e\`\.\
\
\-\-\-\
\
\#\#\ \F\u\l\l\y\ \S\c\r\i\p\t\e\d\ \(\N\o\ \P\r\o\m\p\t\s\ \a\t\ \A\l\l\)\
\
\A\d\d\ \`\-\-\n\o\n\-\i\n\t\e\r\a\c\t\i\v\e\`\ \t\o\ \s\u\p\p\r\e\s\s\ \a\l\l\ \p\r\o\m\p\t\s\.\ \T\h\e\ \c\a\l\l\ \w\i\l\l\ \f\a\i\l\ \w\i\t\h\ \a\n\ \e\r\r\o\r\ \i\f\ \r\e\q\u\i\r\e\d\ \a\r\g\u\m\e\n\t\s\ \a\r\e\ \m\i\s\s\i\n\g\:\
\
\`\`\`\b\a\s\h\
\m\c\p\-\c\a\l\l\e\r\ \c\a\l\l\ \f\i\l\e\s\y\s\t\e\m\ \\\\\
\ \ \-\-\t\o\o\l\ \r\e\a\d\_\f\i\l\e\ \\\\\
\ \ \-\-\a\r\g\s\ \'\{\"\p\a\t\h\"\:\ \"\s\r\c\/\m\a\i\n\.\r\s\"\}\'\ \\\\\
\ \ \-\-\n\o\n\-\i\n\t\e\r\a\c\t\i\v\e\
\`\`\`\
\
\-\-\-\
\
\#\#\ \R\a\w\ \J\S\O\N\ \O\u\t\p\u\t\ \f\o\r\ \P\i\p\i\n\g\
\
\A\d\d\ \`\-\-\j\s\o\n\`\ \(\o\r\ \`\-\j\`\)\ \t\o\ \r\e\c\e\i\v\e\ \r\a\w\ \J\S\O\N\ \o\u\t\p\u\t\ \o\n\ \s\t\d\o\u\t\,\ \s\u\i\t\a\b\l\e\ \f\o\r\ \p\i\p\i\n\g\:\
\
\`\`\`\b\a\s\h\
\m\c\p\-\c\a\l\l\e\r\ \c\a\l\l\ \f\i\l\e\s\y\s\t\e\m\ \\\\\
\ \ \-\-\t\o\o\l\ \r\e\a\d\_\f\i\l\e\ \\\\\
\ \ \-\-\a\r\g\s\ \'\{\"\p\a\t\h\"\:\ \"\C\a\r\g\o\.\t\o\m\l\"\}\'\ \\\\\
\ \ \-\-\j\s\o\n\
\`\`\`\
\
\O\u\t\p\u\t\:\
\`\`\`\j\s\o\n\
\{\
\ \ \"\c\o\n\t\e\n\t\"\:\ \[\
\ \ \ \ \{\ \"\t\y\p\e\"\:\ \"\t\e\x\t\"\,\ \"\t\e\x\t\"\:\ \"\[\p\a\c\k\a\g\e\]\\\\\n\n\a\m\e\ \=\ \\\\\"\m\c\p\-\c\a\l\l\e\r\\\\\"\.\.\.\"\ \}\
\ \ \]\,\
\ \ \"\i\s\E\r\r\o\r\"\:\ \f\a\l\s\e\
\}\
\`\`\`\
\
\-\-\-\
\
\#\#\ \P\i\p\i\n\g\ \i\n\t\o\ \`\j\q\`\
\
\E\x\t\r\a\c\t\ \s\p\e\c\i\f\i\c\ \f\i\e\l\d\s\ \u\s\i\n\g\ \`\j\q\`\:\
\
\`\`\`\b\a\s\h\
\#\ \G\e\t\ \j\u\s\t\ \t\h\e\ \t\e\x\t\ \c\o\n\t\e\n\t\ \o\f\ \a\ \f\i\l\e\
\m\c\p\-\c\a\l\l\e\r\ \c\a\l\l\ \f\i\l\e\s\y\s\t\e\m\ \\\\\
\ \ \-\-\t\o\o\l\ \r\e\a\d\_\f\i\l\e\ \\\\\
\ \ \-\-\a\r\g\s\ \'\{\"\p\a\t\h\"\:\ \"\C\a\r\g\o\.\t\o\m\l\"\}\'\ \\\\\
\ \ \-\-\j\s\o\n\ \|\ \j\q\ \-\r\ \'\.\c\o\n\t\e\n\t\[\0\]\.\t\e\x\t\'\
\
\#\ \C\h\e\c\k\ \i\f\ \a\ \t\o\o\l\ \c\a\l\l\ \r\e\t\u\r\n\e\d\ \a\n\ \e\r\r\o\r\
\m\c\p\-\c\a\l\l\e\r\ \c\a\l\l\ \m\y\s\e\r\v\e\r\ \-\-\t\o\o\l\ \d\o\_\s\o\m\e\t\h\i\n\g\ \-\-\a\r\g\s\ \'\{\}\'\ \-\-\j\s\o\n\ \\\\\
\ \ \|\ \j\q\ \'\.\i\s\E\r\r\o\r\'\
\`\`\`\
\
\-\-\-\
\
\#\#\ \U\s\i\n\g\ \i\n\ \S\h\e\l\l\ \S\c\r\i\p\t\s\
\
\`\`\`\b\a\s\h\
\#\!\/\u\s\r\/\b\i\n\/\e\n\v\ \b\a\s\h\
\s\e\t\ \-\e\u\o\ \p\i\p\e\f\a\i\l\
\
\S\E\R\V\E\R\=\"\f\i\l\e\s\y\s\t\e\m\"\
\F\I\L\E\=\"\R\E\A\D\M\E\.\m\d\"\
\
\e\c\h\o\ \"\R\e\a\d\i\n\g\ \\$\F\I\L\E\ \f\r\o\m\ \M\C\P\ \s\e\r\v\e\r\.\.\.\"\
\c\o\n\t\e\n\t\=\\$\(\m\c\p\-\c\a\l\l\e\r\ \c\a\l\l\ \"\\$\S\E\R\V\E\R\"\ \\\\\
\ \ \-\-\t\o\o\l\ \r\e\a\d\_\f\i\l\e\ \\\\\
\ \ \-\-\a\r\g\s\ \"\{\\\\\"\p\a\t\h\\\\\"\:\ \\\\\"\\$\F\I\L\E\\\\\"\}\"\ \\\\\
\ \ \-\-\j\s\o\n\ \\\\\
\ \ \-\-\n\o\n\-\i\n\t\e\r\a\c\t\i\v\e\ \\\\\
\ \ \|\ \j\q\ \-\r\ \'\.\c\o\n\t\e\n\t\[\0\]\.\t\e\x\t\'\)\
\
\e\c\h\o\ \"\\$\c\o\n\t\e\n\t\"\ \|\ \w\c\ \-\l\
\e\c\h\o\ \"\D\o\n\e\.\"\
\`\`\`\
\
\-\-\-\
\
\#\#\ \U\s\i\n\g\ \a\n\ \A\d\-\H\o\c\ \S\e\r\v\e\r\ \W\i\t\h\o\u\t\ \a\ \C\o\n\f\i\g\ \F\i\l\e\
\
\R\e\p\l\a\c\e\ \t\h\e\ \s\e\r\v\e\r\ \n\a\m\e\ \w\i\t\h\ \`\-\-\c\m\d\`\:\
\
\`\`\`\b\a\s\h\
\m\c\p\-\c\a\l\l\e\r\ \c\a\l\l\ \\\\\
\ \ \-\-\c\m\d\ \"\n\p\x\ \-\y\ \@\m\o\d\e\l\c\o\n\t\e\x\t\p\r\o\t\o\c\o\l\/\s\e\r\v\e\r\-\f\i\l\e\s\y\s\t\e\m\ \/\t\m\p\"\ \\\\\
\ \ \-\-\t\o\o\l\ \l\i\s\t\_\d\i\r\e\c\t\o\r\y\ \\\\\
\ \ \-\-\a\r\g\s\ \'\{\"\p\a\t\h\"\:\ \"\.\"\}\'\ \\\\\
\ \ \-\-\j\s\o\n\ \\\\\
\ \ \-\-\n\o\n\-\i\n\t\e\r\a\c\t\i\v\e\
\`\`\`\
\
\-\-\-\
\
\#\#\ \C\o\n\f\l\i\c\t\ \R\e\s\o\l\u\t\i\o\n\:\ \S\e\r\v\e\r\ \N\a\m\e\ \v\s\ \`\-\-\c\m\d\`\
\
\I\f\ \y\o\u\ \p\a\s\s\ \*\*\b\o\t\h\*\*\ \a\ \s\e\r\v\e\r\ \n\a\m\e\ \a\n\d\ \`\-\-\c\m\d\`\,\ \`\-\-\c\m\d\`\ \t\a\k\e\s\ \p\r\e\c\e\d\e\n\c\e\ \a\n\d\ \a\ \w\a\r\n\i\n\g\ \i\s\ \p\r\i\n\t\e\d\ \t\o\ \s\t\d\e\r\r\:\
\
\`\`\`\b\a\s\h\
\m\c\p\-\c\a\l\l\e\r\ \c\a\l\l\ \m\y\-\s\e\r\v\e\r\ \-\-\t\o\o\l\ \p\i\n\g\ \-\-\c\m\d\ \"\p\y\t\h\o\n\ \o\t\h\e\r\_\s\e\r\v\e\r\.\p\y\"\
\#\ \⚠\ \W\a\r\n\i\n\g\:\ \B\o\t\h\ \a\ \s\e\r\v\e\r\ \n\a\m\e\ \a\n\d\ \-\-\c\m\d\ \w\e\r\e\ \p\r\o\v\i\d\e\d\.\ \-\-\c\m\d\ \t\a\k\e\s\ \p\r\e\c\e\d\e\n\c\e\.\
\`\`\`\
\
\S\t\d\e\r\r\ \w\a\r\n\i\n\g\s\ \d\o\ \*\*\n\o\t\*\*\ \a\f\f\e\c\t\ \t\h\e\ \J\S\O\N\ \o\u\t\p\u\t\ \o\n\ \s\t\d\o\u\t\,\ \s\o\ \s\c\r\i\p\t\s\ \u\s\i\n\g\ \`\-\-\j\s\o\n\`\ \r\e\m\a\i\n\ \s\a\f\e\.\
\
\-\-\-\
\
\#\#\ \E\x\i\t\ \C\o\d\e\s\
\
\|\ \C\o\d\e\ \|\ \M\e\a\n\i\n\g\ \|\
\|\-\-\-\|\-\-\-\|\
\|\ \`\0\`\ \|\ \T\o\o\l\ \c\a\l\l\ \s\u\c\c\e\e\d\e\d\ \|\
\|\ \`\1\`\ \|\ \E\r\r\o\r\ \(\c\o\n\n\e\c\t\i\o\n\ \f\a\i\l\e\d\,\ \t\o\o\l\ \n\o\t\ \f\o\u\n\d\,\ \r\e\q\u\i\r\e\d\ \a\r\g\ \m\i\s\s\i\n\g\,\ \e\t\c\.\)\ \|\
\
\U\s\e\ \e\x\i\t\ \c\o\d\e\s\ \i\n\ \C\I\:\
\
\`\`\`\b\a\s\h\
\m\c\p\-\c\a\l\l\e\r\ \c\a\l\l\ \m\y\s\e\r\v\e\r\ \-\-\t\o\o\l\ \h\e\a\l\t\h\c\h\e\c\k\ \-\-\a\r\g\s\ \'\{\}\'\ \-\-\n\o\n\-\i\n\t\e\r\a\c\t\i\v\e\ \\\\\
\ \ \&\&\ \e\c\h\o\ \"\S\e\r\v\e\r\ \i\s\ \h\e\a\l\t\h\y\"\ \\\\\
\ \ \|\|\ \e\c\h\o\ \"\S\e\r\v\e\r\ \h\e\a\l\t\h\ \c\h\e\c\k\ \f\a\i\l\e\d\"\ \>\&\2\
\`\`\`\
\
\-\-\-\
\
\#\#\ \S\e\e\ \A\l\s\o\
\
\-\ \[\C\L\I\ \C\o\m\m\a\n\d\s\ \&\ \F\l\a\g\s\ \R\e\f\e\r\e\n\c\e\]\(\.\.\/\r\e\f\e\r\e\n\c\e\/\c\l\i\-\c\o\m\m\a\n\d\s\.\m\d\)\
\-\ \[\H\o\w\ \t\o\ \C\o\n\f\i\g\u\r\e\ \M\C\P\ \S\e\r\v\e\r\s\]\(\c\o\n\f\i\g\u\r\e\-\s\e\r\v\e\r\s\.\m\d\)\
\
  },
  "how-to/call-tool-interactively.md": {
    title: "How to Call a Tool Interactively",
    category: "how-to",
    content: \#\ \H\o\w\ \t\o\ \C\a\l\l\ \a\ \T\o\o\l\ \I\n\t\e\r\a\c\t\i\v\e\l\y\
\
\*\*\G\o\a\l\*\*\:\ \U\s\e\ \t\h\e\ \i\n\t\e\r\a\c\t\i\v\e\ \s\c\h\e\m\a\-\f\i\l\l\i\n\g\ \w\i\z\a\r\d\ \t\o\ \c\a\l\l\ \a\ \t\o\o\l\ \w\i\t\h\o\u\t\ \k\n\o\w\i\n\g\ \i\t\s\ \p\a\r\a\m\e\t\e\r\s\ \i\n\ \a\d\v\a\n\c\e\.\
\
\-\-\-\
\
\#\#\ \W\h\e\n\ \t\o\ \U\s\e\ \T\h\i\s\
\
\U\s\e\ \t\h\e\ \i\n\t\e\r\a\c\t\i\v\e\ \m\o\d\e\ \w\h\e\n\ \y\o\u\ \a\r\e\:\
\-\ \E\x\p\l\o\r\i\n\g\ \a\ \n\e\w\ \M\C\P\ \s\e\r\v\e\r\ \f\o\r\ \t\h\e\ \f\i\r\s\t\ \t\i\m\e\
\-\ \R\u\n\n\i\n\g\ \a\ \o\n\e\-\o\f\f\ \t\o\o\l\ \c\a\l\l\ \w\h\e\r\e\ \y\o\u\ \d\o\n\'\t\ \w\a\n\t\ \t\o\ \c\o\n\s\t\r\u\c\t\ \J\S\O\N\ \m\a\n\u\a\l\l\y\
\-\ \V\e\r\i\f\y\i\n\g\ \w\h\a\t\ \a\ \t\o\o\l\ \d\o\e\s\ \b\e\f\o\r\e\ \s\c\r\i\p\t\i\n\g\ \i\t\
\
\-\-\-\
\
\#\#\ \M\e\t\h\o\d\ \1\ \—\ \F\u\l\l\ \W\i\z\a\r\d\ \(\S\e\r\v\e\r\ \+\ \T\o\o\l\ \S\e\l\e\c\t\i\o\n\)\
\
\L\a\u\n\c\h\ \`\m\c\p\-\c\a\l\l\e\r\`\ \w\i\t\h\ \n\o\ \s\u\b\c\o\m\m\a\n\d\ \t\o\ \o\p\e\n\ \t\h\e\ \f\u\l\l\ \i\n\t\e\r\a\c\t\i\v\e\ \m\e\n\u\:\
\
\`\`\`\b\a\s\h\
\#\ \W\i\t\h\ \a\ \c\o\n\f\i\g\u\r\e\d\ \s\e\r\v\e\r\:\
\m\c\p\-\c\a\l\l\e\r\
\
\#\ \W\i\t\h\ \a\n\ \a\d\-\h\o\c\ \c\o\m\m\a\n\d\:\
\m\c\p\-\c\a\l\l\e\r\ \-\-\c\m\d\ \"\n\p\x\ \-\y\ \@\m\o\d\e\l\c\o\n\t\e\x\t\p\r\o\t\o\c\o\l\/\s\e\r\v\e\r\-\f\i\l\e\s\y\s\t\e\m\ \.\"\
\`\`\`\
\
\T\h\e\ \w\i\z\a\r\d\ \g\u\i\d\e\s\ \y\o\u\ \t\h\r\o\u\g\h\ \t\h\r\e\e\ \s\c\r\e\e\n\s\:\
\
\#\#\#\ \S\c\r\e\e\n\ \1\ \—\ \S\e\l\e\c\t\ \a\ \S\e\r\v\e\r\
\`\`\`\
\S\e\l\e\c\t\ \a\n\ \M\C\P\ \S\e\r\v\e\r\ \t\o\ \c\o\n\n\e\c\t\:\
\❯\ \f\i\l\e\s\y\s\t\e\m\ \(\n\p\x\)\
\ \ \g\i\t\h\u\b\ \(\n\p\x\)\
\ \ \➜\ \E\n\t\e\r\ \c\u\s\t\o\m\ \c\o\m\m\a\n\d\.\.\.\
\ \ \✖\ \E\x\i\t\
\`\`\`\
\
\U\s\e\ \a\r\r\o\w\ \k\e\y\s\ \a\n\d\ \p\r\e\s\s\ \E\n\t\e\r\ \t\o\ \s\e\l\e\c\t\.\
\
\#\#\#\ \S\c\r\e\e\n\ \2\ \—\ \S\e\l\e\c\t\ \a\ \T\o\o\l\
\`\`\`\
\✔\ \C\o\n\n\e\c\t\e\d\ \s\u\c\c\e\s\s\f\u\l\l\y\!\ \[\f\i\l\e\s\y\s\t\e\m\-\s\e\r\v\e\r\ \v\1\.\0\.\0\]\
\S\e\l\e\c\t\ \a\ \t\o\o\l\ \t\o\ \e\x\e\c\u\t\e\:\
\❯\ \l\i\s\t\_\d\i\r\e\c\t\o\r\y\ \-\ \G\e\t\ \a\ \d\e\t\a\i\l\e\d\ \l\i\s\t\i\n\g\ \o\f\ \a\l\l\ \f\i\l\e\s\.\.\.\
\ \ \r\e\a\d\_\f\i\l\e\ \-\ \R\e\a\d\ \t\h\e\ \c\o\m\p\l\e\t\e\ \c\o\n\t\e\n\t\s\ \o\f\ \a\ \f\i\l\e\.\.\.\
\ \ \w\r\i\t\e\_\f\i\l\e\ \-\ \C\r\e\a\t\e\ \a\ \n\e\w\ \f\i\l\e\ \o\r\ \o\v\e\r\w\r\i\t\e\ \a\n\ \e\x\i\s\t\i\n\g\ \f\i\l\e\.\.\.\
\ \ \⬅\ \B\a\c\k\ \t\o\ \s\e\r\v\e\r\ \l\i\s\t\
\ \ \✖\ \E\x\i\t\
\`\`\`\
\
\#\#\#\ \S\c\r\e\e\n\ \3\ \—\ \F\i\l\l\ \P\a\r\a\m\e\t\e\r\s\
\`\`\`\
\─\─\ \F\i\l\l\ \P\a\r\a\m\e\t\e\r\s\ \f\o\r\ \'\l\i\s\t\_\d\i\r\e\c\t\o\r\y\'\ \─\─\
\G\e\t\ \a\ \d\e\t\a\i\l\e\d\ \l\i\s\t\i\n\g\ \o\f\ \a\l\l\ \f\i\l\e\s\ \a\n\d\ \d\i\r\e\c\t\o\r\i\e\s\.\.\.\
\
\p\a\t\h\ \(\s\t\r\i\n\g\)\ \[\r\e\q\u\i\r\e\d\]\ \-\ \P\a\t\h\ \o\f\ \t\h\e\ \d\i\r\e\c\t\o\r\y\ \t\o\ \l\i\s\t\
\>\ \s\r\c\
\`\`\`\
\
\A\f\t\e\r\ \y\o\u\ \s\u\b\m\i\t\,\ \r\e\s\u\l\t\s\ \a\r\e\ \s\h\o\w\n\ \i\m\m\e\d\i\a\t\e\l\y\.\ \Y\o\u\'\r\e\ \t\h\e\n\ \o\f\f\e\r\e\d\:\
\`\`\`\
\N\e\x\t\ \a\c\t\i\o\n\:\
\❯\ \R\u\n\ \a\n\o\t\h\e\r\ \t\o\o\l\ \o\n\ \t\h\i\s\ \s\e\r\v\e\r\
\ \ \R\e\-\r\u\n\ \t\h\i\s\ \t\o\o\l\
\ \ \B\a\c\k\ \t\o\ \s\e\r\v\e\r\ \l\i\s\t\
\`\`\`\
\
\-\-\-\
\
\#\#\ \M\e\t\h\o\d\ \2\ \—\ \J\u\m\p\ \D\i\r\e\c\t\l\y\ \t\o\ \a\ \T\o\o\l\'\s\ \P\r\o\m\p\t\
\
\I\f\ \y\o\u\ \a\l\r\e\a\d\y\ \k\n\o\w\ \t\h\e\ \s\e\r\v\e\r\ \a\n\d\ \t\o\o\l\ \n\a\m\e\,\ \u\s\e\ \`\m\c\p\-\c\a\l\l\e\r\ \c\a\l\l\`\ \w\i\t\h\ \n\o\ \`\-\-\a\r\g\s\`\ \f\l\a\g\:\
\
\`\`\`\b\a\s\h\
\m\c\p\-\c\a\l\l\e\r\ \c\a\l\l\ \f\i\l\e\s\y\s\t\e\m\ \-\-\t\o\o\l\ \r\e\a\d\_\f\i\l\e\
\`\`\`\
\
\T\h\i\s\ \s\k\i\p\s\ \t\h\e\ \s\e\r\v\e\r\/\t\o\o\l\ \m\e\n\u\s\ \a\n\d\ \g\o\e\s\ \s\t\r\a\i\g\h\t\ \t\o\ \t\h\e\ \p\a\r\a\m\e\t\e\r\ \p\r\o\m\p\t\s\ \f\o\r\ \`\r\e\a\d\_\f\i\l\e\`\.\
\
\-\-\-\
\
\#\#\ \H\o\w\ \t\h\e\ \S\c\h\e\m\a\ \P\r\o\m\p\t\ \E\n\g\i\n\e\ \W\o\r\k\s\
\
\`\m\c\p\-\c\a\l\l\e\r\`\ \r\e\a\d\s\ \t\h\e\ \t\o\o\l\'\s\ \`\i\n\p\u\t\S\c\h\e\m\a\`\ \f\r\o\m\ \t\h\e\ \s\e\r\v\e\r\ \a\n\d\ \g\e\n\e\r\a\t\e\s\ \t\h\e\ \a\p\p\r\o\p\r\i\a\t\e\ \p\r\o\m\p\t\ \f\o\r\ \e\a\c\h\ \p\a\r\a\m\e\t\e\r\ \t\y\p\e\:\
\
\|\ \J\S\O\N\ \S\c\h\e\m\a\ \t\y\p\e\ \|\ \P\r\o\m\p\t\ \r\e\n\d\e\r\e\d\ \|\
\|\-\-\-\|\-\-\-\|\
\|\ \`\s\t\r\i\n\g\`\ \|\ \F\r\e\e\ \t\e\x\t\ \i\n\p\u\t\ \f\i\e\l\d\ \|\
\|\ \`\i\n\t\e\g\e\r\`\ \|\ \T\e\x\t\ \f\i\e\l\d\ \w\i\t\h\ \i\n\t\e\g\e\r\ \v\a\l\i\d\a\t\i\o\n\ \|\
\|\ \`\n\u\m\b\e\r\`\ \|\ \T\e\x\t\ \f\i\e\l\d\ \w\i\t\h\ \f\l\o\a\t\ \v\a\l\i\d\a\t\i\o\n\ \|\
\|\ \`\b\o\o\l\e\a\n\`\ \|\ \`\t\r\u\e\`\ \/\ \`\f\a\l\s\e\`\ \/\ \`\<\s\k\i\p\>\`\ \s\e\l\e\c\t\o\r\ \|\
\|\ \`\e\n\u\m\`\ \|\ \D\r\o\p\d\o\w\n\ \l\i\s\t\ \o\f\ \a\l\l\o\w\e\d\ \v\a\l\u\e\s\ \|\
\|\ \`\a\r\r\a\y\`\ \|\ \C\o\m\m\a\-\s\e\p\a\r\a\t\e\d\ \o\r\ \J\S\O\N\ \a\r\r\a\y\ \i\n\p\u\t\ \|\
\|\ \`\o\b\j\e\c\t\`\ \|\ \J\S\O\N\ \o\b\j\e\c\t\ \i\n\p\u\t\ \w\i\t\h\ \s\y\n\t\a\x\ \v\a\l\i\d\a\t\i\o\n\ \|\
\
\R\e\q\u\i\r\e\d\ \p\a\r\a\m\e\t\e\r\s\ \a\r\e\ \m\a\r\k\e\d\ \`\[\r\e\q\u\i\r\e\d\]\`\ \a\n\d\ \c\a\n\n\o\t\ \b\e\ \l\e\f\t\ \b\l\a\n\k\.\ \O\p\t\i\o\n\a\l\ \p\a\r\a\m\e\t\e\r\s\ \a\r\e\ \m\a\r\k\e\d\ \`\[\o\p\t\i\o\n\a\l\]\`\ \a\n\d\ \c\a\n\ \b\e\ \s\k\i\p\p\e\d\ \b\y\ \p\r\e\s\s\i\n\g\ \E\n\t\e\r\.\
\
\-\-\-\
\
\#\#\ \K\e\y\b\o\a\r\d\ \C\o\n\t\r\o\l\s\
\
\|\ \K\e\y\ \|\ \A\c\t\i\o\n\ \|\
\|\-\-\-\|\-\-\-\|\
\|\ \`\↑\`\ \/\ \`\↓\`\ \|\ \N\a\v\i\g\a\t\e\ \m\e\n\u\ \i\t\e\m\s\ \|\
\|\ \`\E\n\t\e\r\`\ \|\ \C\o\n\f\i\r\m\ \s\e\l\e\c\t\i\o\n\ \|\
\|\ \`\C\t\r\l\+\C\`\ \|\ \C\a\n\c\e\l\ \a\n\d\ \e\x\i\t\ \|\
\|\ \`\E\s\c\`\ \|\ \C\a\n\c\e\l\ \c\u\r\r\e\n\t\ \p\r\o\m\p\t\ \|\
\
\-\-\-\
\
\#\#\ \S\e\e\ \A\l\s\o\
\
\-\ \[\H\o\w\ \t\o\ \C\a\l\l\ \a\ \T\o\o\l\ \f\r\o\m\ \t\h\e\ \C\L\I\]\(\c\a\l\l\-\t\o\o\l\-\f\r\o\m\-\c\l\i\.\m\d\)\ \—\ \s\c\r\i\p\t\i\n\g\ \a\n\d\ \a\u\t\o\m\a\t\i\o\n\
\-\ \[\H\o\w\ \t\o\ \I\n\s\p\e\c\t\ \a\ \T\o\o\l\'\s\ \P\a\r\a\m\e\t\e\r\s\]\(\i\n\s\p\e\c\t\-\a\-\t\o\o\l\.\m\d\)\ \—\ \v\i\e\w\ \s\c\h\e\m\a\ \b\e\f\o\r\e\ \c\a\l\l\i\n\g\
\
  },
  "how-to/configure-servers.md": {
    title: "How to Configure MCP Servers",
    category: "how-to",
    content: \#\ \H\o\w\ \t\o\ \C\o\n\f\i\g\u\r\e\ \M\C\P\ \S\e\r\v\e\r\s\
\
\*\*\G\o\a\l\*\*\:\ \A\d\d\ \o\n\e\ \o\r\ \m\o\r\e\ \M\C\P\ \s\e\r\v\e\r\s\ \t\o\ \a\ \l\o\c\a\l\ \c\o\n\f\i\g\ \f\i\l\e\ \s\o\ \y\o\u\ \c\a\n\ \r\e\f\e\r\e\n\c\e\ \t\h\e\m\ \b\y\ \n\a\m\e\ \i\n\s\t\e\a\d\ \o\f\ \t\y\p\i\n\g\ \`\-\-\c\m\d\`\ \e\v\e\r\y\ \t\i\m\e\.\
\
\-\-\-\
\
\#\#\ \O\p\t\i\o\n\ \1\ \—\ \L\o\c\a\l\ \`\m\c\p\.\j\s\o\n\`\ \(\R\e\c\o\m\m\e\n\d\e\d\ \f\o\r\ \P\r\o\j\e\c\t\s\)\
\
\C\r\e\a\t\e\ \a\ \f\i\l\e\ \c\a\l\l\e\d\ \`\m\c\p\.\j\s\o\n\`\ \i\n\ \a\n\y\ \d\i\r\e\c\t\o\r\y\ \w\h\e\r\e\ \y\o\u\'\l\l\ \r\u\n\ \`\m\c\p\-\c\a\l\l\e\r\`\.\ \T\h\e\ \t\o\o\l\ \a\u\t\o\-\d\i\s\c\o\v\e\r\s\ \t\h\i\s\ \f\i\l\e\ \o\n\ \s\t\a\r\t\u\p\.\
\
\`\`\`\j\s\o\n\
\{\
\ \ \"\m\c\p\S\e\r\v\e\r\s\"\:\ \{\
\ \ \ \ \"\f\i\l\e\s\y\s\t\e\m\"\:\ \{\
\ \ \ \ \ \ \"\c\o\m\m\a\n\d\"\:\ \"\n\p\x\"\,\
\ \ \ \ \ \ \"\a\r\g\s\"\:\ \[\"\-\y\"\,\ \"\@\m\o\d\e\l\c\o\n\t\e\x\t\p\r\o\t\o\c\o\l\/\s\e\r\v\e\r\-\f\i\l\e\s\y\s\t\e\m\"\,\ \"\.\"\]\
\ \ \ \ \}\,\
\ \ \ \ \"\g\i\t\h\u\b\"\:\ \{\
\ \ \ \ \ \ \"\c\o\m\m\a\n\d\"\:\ \"\n\p\x\"\,\
\ \ \ \ \ \ \"\a\r\g\s\"\:\ \[\"\-\y\"\,\ \"\@\m\o\d\e\l\c\o\n\t\e\x\t\p\r\o\t\o\c\o\l\/\s\e\r\v\e\r\-\g\i\t\h\u\b\"\]\,\
\ \ \ \ \ \ \"\e\n\v\"\:\ \{\
\ \ \ \ \ \ \ \ \"\G\I\T\H\U\B\_\P\E\R\S\O\N\A\L\_\A\C\C\E\S\S\_\T\O\K\E\N\"\:\ \"\g\h\p\_\y\o\u\r\_\t\o\k\e\n\_\h\e\r\e\"\
\ \ \ \ \ \ \}\
\ \ \ \ \}\
\ \ \}\
\}\
\`\`\`\
\
\N\o\w\ \y\o\u\ \c\a\n\ \r\u\n\:\
\
\`\`\`\b\a\s\h\
\m\c\p\-\c\a\l\l\e\r\ \l\i\s\t\ \f\i\l\e\s\y\s\t\e\m\
\m\c\p\-\c\a\l\l\e\r\ \c\a\l\l\ \g\i\t\h\u\b\ \-\-\t\o\o\l\ \g\e\t\_\r\e\p\o\s\i\t\o\r\y\ \-\-\a\r\g\s\ \'\{\"\o\w\n\e\r\"\:\"\o\c\t\o\c\a\t\"\,\"\r\e\p\o\"\:\"\h\e\l\l\o\-\w\o\r\l\d\"\}\'\
\`\`\`\
\
\-\-\-\
\
\#\#\ \O\p\t\i\o\n\ \2\ \—\ \`\.\m\c\p\.\j\s\o\n\`\ \o\r\ \`\.\m\c\p\r\c\.\j\s\o\n\`\
\
\B\o\t\h\ \o\f\ \t\h\e\s\e\ \f\i\l\e\n\a\m\e\s\ \a\r\e\ \a\l\s\o\ \d\i\s\c\o\v\e\r\e\d\ \a\u\t\o\m\a\t\i\c\a\l\l\y\ \i\n\ \t\h\e\ \c\u\r\r\e\n\t\ \d\i\r\e\c\t\o\r\y\:\
\
\`\`\`\b\a\s\h\
\#\ \T\h\e\s\e\ \a\r\e\ \e\q\u\i\v\a\l\e\n\t\ \t\o\ \m\c\p\.\j\s\o\n\:\
\.\m\c\p\.\j\s\o\n\
\.\m\c\p\r\c\.\j\s\o\n\
\`\`\`\
\
\-\-\-\
\
\#\#\ \O\p\t\i\o\n\ \3\ \—\ \A\ \C\u\s\t\o\m\ \C\o\n\f\i\g\ \F\i\l\e\ \P\a\t\h\
\
\P\a\s\s\ \a\n\y\ \c\o\n\f\i\g\ \f\i\l\e\ \e\x\p\l\i\c\i\t\l\y\ \w\i\t\h\ \`\-\-\c\o\n\f\i\g\`\:\
\
\`\`\`\b\a\s\h\
\m\c\p\-\c\a\l\l\e\r\ \-\-\c\o\n\f\i\g\ \~\/\m\y\-\s\e\r\v\e\r\s\.\j\s\o\n\ \l\i\s\t\
\m\c\p\-\c\a\l\l\e\r\ \-\-\c\o\n\f\i\g\ \/\e\t\c\/\m\c\p\/\c\o\m\p\a\n\y\-\s\e\r\v\e\r\s\.\j\s\o\n\ \c\a\l\l\ \m\y\-\s\e\r\v\e\r\ \-\-\t\o\o\l\ \p\i\n\g\
\`\`\`\
\
\C\u\s\t\o\m\ \`\-\-\c\o\n\f\i\g\`\ \t\a\k\e\s\ \*\*\h\i\g\h\e\s\t\ \p\r\i\o\r\i\t\y\*\*\ \a\n\d\ \i\s\ \l\o\a\d\e\d\ \f\i\r\s\t\.\
\
\-\-\-\
\
\#\#\ \O\p\t\i\o\n\ \4\ \—\ \R\e\u\s\e\ \C\l\a\u\d\e\ \D\e\s\k\t\o\p\ \C\o\n\f\i\g\
\
\I\f\ \y\o\u\ \a\l\r\e\a\d\y\ \h\a\v\e\ \M\C\P\ \s\e\r\v\e\r\s\ \c\o\n\f\i\g\u\r\e\d\ \i\n\ \C\l\a\u\d\e\ \D\e\s\k\t\o\p\,\ \`\m\c\p\-\c\a\l\l\e\r\`\ \r\e\a\d\s\ \t\h\e\m\ \a\u\t\o\m\a\t\i\c\a\l\l\y\ \f\r\o\m\:\
\
\|\ \P\l\a\t\f\o\r\m\ \|\ \P\a\t\h\ \|\
\|\-\-\-\|\-\-\-\|\
\|\ \W\i\n\d\o\w\s\ \|\ \`\%\A\P\P\D\A\T\A\%\\\\\C\l\a\u\d\e\\\\\c\l\a\u\d\e\_\d\e\s\k\t\o\p\_\c\o\n\f\i\g\.\j\s\o\n\`\ \|\
\|\ \m\a\c\O\S\ \|\ \`\~\/\L\i\b\r\a\r\y\/\A\p\p\l\i\c\a\t\i\o\n\ \S\u\p\p\o\r\t\/\C\l\a\u\d\e\/\c\l\a\u\d\e\_\d\e\s\k\t\o\p\_\c\o\n\f\i\g\.\j\s\o\n\`\ \|\
\|\ \L\i\n\u\x\ \|\ \`\~\/\.\c\o\n\f\i\g\/\C\l\a\u\d\e\/\c\l\a\u\d\e\_\d\e\s\k\t\o\p\_\c\o\n\f\i\g\.\j\s\o\n\`\ \|\
\
\N\o\ \c\o\n\f\i\g\u\r\a\t\i\o\n\ \n\e\e\d\e\d\ \—\ \j\u\s\t\ \r\u\n\ \`\m\c\p\-\c\a\l\l\e\r\ \s\e\r\v\e\r\s\`\ \a\n\d\ \t\h\e\y\'\l\l\ \a\p\p\e\a\r\.\
\
\-\-\-\
\
\#\#\ \V\e\r\i\f\y\ \Y\o\u\r\ \C\o\n\f\i\g\u\r\a\t\i\o\n\
\
\R\u\n\ \t\h\e\ \`\s\e\r\v\e\r\s\`\ \c\o\m\m\a\n\d\ \t\o\ \s\e\e\ \a\l\l\ \d\i\s\c\o\v\e\r\e\d\ \s\e\r\v\e\r\s\ \a\n\d\ \w\h\i\c\h\ \c\o\n\f\i\g\ \f\i\l\e\ \e\a\c\h\ \c\a\m\e\ \f\r\o\m\:\
\
\`\`\`\b\a\s\h\
\m\c\p\-\c\a\l\l\e\r\ \s\e\r\v\e\r\s\
\`\`\`\
\
\O\u\t\p\u\t\:\
\
\`\`\`\
\╭\─\─\─\─\─\─\─\─\─\─\─\─\┬\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\┬\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\╮\
\│\ \S\e\r\v\e\r\ \N\a\m\e\│\ \C\o\m\m\a\n\d\ \/\ \U\R\L\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \│\ \C\o\n\f\i\g\ \S\o\u\r\c\e\ \ \ \ \ \ \ \ \ \ \│\
\├\─\─\─\─\─\─\─\─\─\─\─\─\┼\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\┼\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\┤\
\│\ \f\i\l\e\s\y\s\t\e\m\ \│\ \n\p\x\ \-\y\ \@\m\o\d\e\l\c\o\n\t\e\x\t\p\r\o\t\o\c\o\l\/\s\e\r\v\e\r\-\f\i\l\e\s\y\s\t\e\m\ \│\ \.\/\m\c\p\.\j\s\o\n\ \ \ \ \ \ \ \ \ \ \ \│\
\│\ \g\i\t\h\u\b\ \ \ \ \ \│\ \n\p\x\ \-\y\ \@\m\o\d\e\l\c\o\n\t\e\x\t\p\r\o\t\o\c\o\l\/\s\e\r\v\e\r\-\g\i\t\h\u\b\ \ \ \│\ \.\/\m\c\p\.\j\s\o\n\ \ \ \ \ \ \ \ \ \ \ \ \ \│\
\╰\─\─\─\─\─\─\─\─\─\─\─\─\┴\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\┴\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\╯\
\`\`\`\
\
\-\-\-\
\
\#\#\ \P\a\s\s\i\n\g\ \E\n\v\i\r\o\n\m\e\n\t\ \V\a\r\i\a\b\l\e\s\
\
\S\e\n\s\i\t\i\v\e\ \v\a\l\u\e\s\ \l\i\k\e\ \A\P\I\ \k\e\y\s\ \s\h\o\u\l\d\ \b\e\ \s\e\t\ \i\n\ \t\h\e\ \`\"\e\n\v\"\`\ \b\l\o\c\k\ \o\f\ \t\h\e\ \s\e\r\v\e\r\ \d\e\f\i\n\i\t\i\o\n\ \—\ \*\*\n\e\v\e\r\ \h\a\r\d\c\o\d\e\d\ \i\n\ \s\h\e\l\l\ \s\c\r\i\p\t\s\*\*\:\
\
\`\`\`\j\s\o\n\
\{\
\ \ \"\m\c\p\S\e\r\v\e\r\s\"\:\ \{\
\ \ \ \ \"\m\y\-\s\e\r\v\e\r\"\:\ \{\
\ \ \ \ \ \ \"\c\o\m\m\a\n\d\"\:\ \"\p\y\t\h\o\n\"\,\
\ \ \ \ \ \ \"\a\r\g\s\"\:\ \[\"\s\e\r\v\e\r\.\p\y\"\]\,\
\ \ \ \ \ \ \"\e\n\v\"\:\ \{\
\ \ \ \ \ \ \ \ \"\A\P\I\_\K\E\Y\"\:\ \"\s\k\-\.\.\.\"\,\
\ \ \ \ \ \ \ \ \"\B\A\S\E\_\U\R\L\"\:\ \"\h\t\t\p\s\:\/\/\a\p\i\.\e\x\a\m\p\l\e\.\c\o\m\"\
\ \ \ \ \ \ \}\
\ \ \ \ \}\
\ \ \}\
\}\
\`\`\`\
\
\>\ \*\*\S\e\c\u\r\i\t\y\ \N\o\t\e\*\*\:\ \`\m\c\p\.\j\s\o\n\`\ \f\i\l\e\s\ \s\h\o\u\l\d\ \b\e\ \a\d\d\e\d\ \t\o\ \`\.\g\i\t\i\g\n\o\r\e\`\ \i\f\ \t\h\e\y\ \c\o\n\t\a\i\n\ \s\e\c\r\e\t\s\.\ \C\o\n\s\i\d\e\r\ \u\s\i\n\g\ \e\n\v\i\r\o\n\m\e\n\t\ \v\a\r\i\a\b\l\e\ \s\u\b\s\t\i\t\u\t\i\o\n\ \o\r\ \a\ \s\e\c\r\e\t\s\ \m\a\n\a\g\e\r\ \f\o\r\ \p\r\o\d\u\c\t\i\o\n\ \u\s\e\.\
\
\-\-\-\
\
\#\#\ \S\e\e\ \A\l\s\o\
\
\-\ \[\C\o\n\f\i\g\u\r\a\t\i\o\n\ \F\i\l\e\ \S\c\h\e\m\a\ \R\e\f\e\r\e\n\c\e\]\(\.\.\/\r\e\f\e\r\e\n\c\e\/\c\o\n\f\i\g\-\s\c\h\e\m\a\.\m\d\)\ \—\ \f\u\l\l\ \J\S\O\N\ \s\c\h\e\m\a\ \f\o\r\ \t\h\e\ \c\o\n\f\i\g\ \f\i\l\e\
\-\ \[\C\o\n\f\i\g\u\r\a\t\i\o\n\ \D\i\s\c\o\v\e\r\y\ \&\ \P\r\i\o\r\i\t\y\]\(\.\.\/\e\x\p\l\a\n\a\t\i\o\n\/\c\o\n\f\i\g\-\d\i\s\c\o\v\e\r\y\.\m\d\)\ \—\ \u\n\d\e\r\s\t\a\n\d\ \t\h\e\ \m\e\r\g\e\ \o\r\d\e\r\
\
  },
  "how-to/inspect-a-tool.md": {
    title: "How to Inspect a Tool's Parameters",
    category: "how-to",
    content: \#\ \H\o\w\ \t\o\ \I\n\s\p\e\c\t\ \a\ \T\o\o\l\'\s\ \P\a\r\a\m\e\t\e\r\s\
\
\*\*\G\o\a\l\*\*\:\ \R\e\a\d\ \a\ \t\o\o\l\'\s\ \f\u\l\l\ \J\S\O\N\ \S\c\h\e\m\a\ \—\ \i\t\s\ \p\a\r\a\m\e\t\e\r\ \n\a\m\e\s\,\ \t\y\p\e\s\,\ \d\e\s\c\r\i\p\t\i\o\n\s\,\ \d\e\f\a\u\l\t\s\,\ \a\n\d\ \e\n\u\m\ \c\h\o\i\c\e\s\ \—\ \b\e\f\o\r\e\ \c\a\l\l\i\n\g\ \i\t\.\
\
\-\-\-\
\
\#\#\ \T\h\e\ \`\i\n\f\o\`\ \C\o\m\m\a\n\d\
\
\U\s\e\ \`\m\c\p\-\c\a\l\l\e\r\ \i\n\f\o\`\ \t\o\ \i\n\s\p\e\c\t\ \a\ \s\p\e\c\i\f\i\c\ \t\o\o\l\'\s\ \i\n\p\u\t\ \s\c\h\e\m\a\:\
\
\`\`\`\b\a\s\h\
\#\ \N\a\m\e\d\ \s\e\r\v\e\r\ \f\r\o\m\ \c\o\n\f\i\g\:\
\m\c\p\-\c\a\l\l\e\r\ \i\n\f\o\ \f\i\l\e\s\y\s\t\e\m\ \-\-\t\o\o\l\ \w\r\i\t\e\_\f\i\l\e\
\
\#\ \A\d\-\h\o\c\ \s\e\r\v\e\r\:\
\m\c\p\-\c\a\l\l\e\r\ \i\n\f\o\ \-\-\c\m\d\ \"\n\p\x\ \-\y\ \@\m\o\d\e\l\c\o\n\t\e\x\t\p\r\o\t\o\c\o\l\/\s\e\r\v\e\r\-\f\i\l\e\s\y\s\t\e\m\ \.\"\ \-\-\t\o\o\l\ \w\r\i\t\e\_\f\i\l\e\
\`\`\`\
\
\O\u\t\p\u\t\:\
\
\`\`\`\
\T\o\o\l\:\ \w\r\i\t\e\_\f\i\l\e\
\C\r\e\a\t\e\ \a\ \n\e\w\ \f\i\l\e\ \o\r\ \c\o\m\p\l\e\t\e\l\y\ \o\v\e\r\w\r\i\t\e\ \a\n\ \e\x\i\s\t\i\n\g\ \f\i\l\e\ \w\i\t\h\ \n\e\w\ \c\o\n\t\e\n\t\.\
\
\I\n\p\u\t\ \S\c\h\e\m\a\ \P\a\r\a\m\e\t\e\r\s\:\
\ \ \•\ \p\a\t\h\ \(\s\t\r\i\n\g\)\ \[\R\E\Q\U\I\R\E\D\]\
\ \ \ \ \ \ \D\e\s\c\r\i\p\t\i\o\n\:\ \P\a\t\h\ \o\f\ \t\h\e\ \f\i\l\e\ \t\o\ \w\r\i\t\e\ \(\r\e\l\a\t\i\v\e\ \t\o\ \a\l\l\o\w\e\d\ \d\i\r\e\c\t\o\r\y\)\
\ \ \•\ \c\o\n\t\e\n\t\ \(\s\t\r\i\n\g\)\ \[\R\E\Q\U\I\R\E\D\]\
\ \ \ \ \ \ \D\e\s\c\r\i\p\t\i\o\n\:\ \C\o\n\t\e\n\t\ \t\o\ \w\r\i\t\e\ \t\o\ \t\h\e\ \f\i\l\e\
\ \ \•\ \e\n\c\o\d\i\n\g\ \[\o\p\t\i\o\n\a\l\]\
\ \ \ \ \ \ \D\e\s\c\r\i\p\t\i\o\n\:\ \F\i\l\e\ \e\n\c\o\d\i\n\g\ \(\d\e\f\a\u\l\t\:\ \u\t\f\-\8\)\
\ \ \ \ \ \ \D\e\f\a\u\l\t\:\ \ \ \ \ \"\u\t\f\-\8\"\
\ \ \ \ \ \ \E\n\u\m\:\ \ \ \ \ \ \ \ \[\"\u\t\f\-\8\"\,\ \"\b\a\s\e\6\4\"\]\
\`\`\`\
\
\-\-\-\
\
\#\#\ \G\e\t\ \R\a\w\ \J\S\O\N\ \S\c\h\e\m\a\
\
\A\d\d\ \`\-\-\j\s\o\n\`\ \t\o\ \g\e\t\ \t\h\e\ \r\a\w\ \t\o\o\l\ \d\e\f\i\n\i\t\i\o\n\ \a\s\ \J\S\O\N\ \—\ \u\s\e\f\u\l\ \f\o\r\ \s\c\r\i\p\t\i\n\g\ \o\r\ \s\e\n\d\i\n\g\ \t\o\ \a\n\o\t\h\e\r\ \t\o\o\l\:\
\
\`\`\`\b\a\s\h\
\m\c\p\-\c\a\l\l\e\r\ \i\n\f\o\ \f\i\l\e\s\y\s\t\e\m\ \-\-\t\o\o\l\ \w\r\i\t\e\_\f\i\l\e\ \-\-\j\s\o\n\
\`\`\`\
\
\O\u\t\p\u\t\:\
\
\`\`\`\j\s\o\n\
\{\
\ \ \"\n\a\m\e\"\:\ \"\w\r\i\t\e\_\f\i\l\e\"\,\
\ \ \"\d\e\s\c\r\i\p\t\i\o\n\"\:\ \"\C\r\e\a\t\e\ \a\ \n\e\w\ \f\i\l\e\.\.\.\"\,\
\ \ \"\i\n\p\u\t\S\c\h\e\m\a\"\:\ \{\
\ \ \ \ \"\t\y\p\e\"\:\ \"\o\b\j\e\c\t\"\,\
\ \ \ \ \"\p\r\o\p\e\r\t\i\e\s\"\:\ \{\
\ \ \ \ \ \ \"\p\a\t\h\"\:\ \ \ \ \ \{\ \"\t\y\p\e\"\:\ \"\s\t\r\i\n\g\"\,\ \"\d\e\s\c\r\i\p\t\i\o\n\"\:\ \"\.\.\.\"\ \}\,\
\ \ \ \ \ \ \"\c\o\n\t\e\n\t\"\:\ \ \{\ \"\t\y\p\e\"\:\ \"\s\t\r\i\n\g\"\,\ \"\d\e\s\c\r\i\p\t\i\o\n\"\:\ \"\.\.\.\"\ \}\,\
\ \ \ \ \ \ \"\e\n\c\o\d\i\n\g\"\:\ \{\ \"\t\y\p\e\"\:\ \"\s\t\r\i\n\g\"\,\ \"\e\n\u\m\"\:\ \[\"\u\t\f\-\8\"\,\ \"\b\a\s\e\6\4\"\]\,\ \"\d\e\f\a\u\l\t\"\:\ \"\u\t\f\-\8\"\ \}\
\ \ \ \ \}\,\
\ \ \ \ \"\r\e\q\u\i\r\e\d\"\:\ \[\"\p\a\t\h\"\,\ \"\c\o\n\t\e\n\t\"\]\
\ \ \}\
\}\
\`\`\`\
\
\-\-\-\
\
\#\#\ \L\i\s\t\i\n\g\ \A\l\l\ \T\o\o\l\s\ \F\i\r\s\t\
\
\I\f\ \y\o\u\ \d\o\n\'\t\ \k\n\o\w\ \t\h\e\ \t\o\o\l\ \n\a\m\e\,\ \u\s\e\ \`\m\c\p\-\c\a\l\l\e\r\ \l\i\s\t\`\ \t\o\ \s\e\e\ \a\ \s\u\m\m\a\r\y\ \o\f\ \a\l\l\ \a\v\a\i\l\a\b\l\e\ \t\o\o\l\s\ \a\n\d\ \t\h\e\i\r\ \p\a\r\a\m\e\t\e\r\s\:\
\
\`\`\`\b\a\s\h\
\m\c\p\-\c\a\l\l\e\r\ \l\i\s\t\ \f\i\l\e\s\y\s\t\e\m\
\`\`\`\
\
\T\h\e\ \t\a\b\l\e\ \s\h\o\w\s\ \p\a\r\a\m\e\t\e\r\ \n\a\m\e\s\,\ \t\y\p\e\s\,\ \a\n\d\ \w\h\i\c\h\ \o\n\e\s\ \a\r\e\ \r\e\q\u\i\r\e\d\ \(\`\*\`\)\:\
\
\`\`\`\
\╭\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\┬\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\╮\
\│\ \T\o\o\l\ \N\a\m\e\ \ \ \ \ \│\ \P\a\r\a\m\e\t\e\r\s\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \│\
\├\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\┼\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\┤\
\│\ \r\e\a\d\_\f\i\l\e\ \ \ \ \ \│\ \p\a\t\h\*\:\ \s\t\r\i\n\g\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \│\
\│\ \w\r\i\t\e\_\f\i\l\e\ \ \ \ \│\ \p\a\t\h\*\:\ \s\t\r\i\n\g\,\ \c\o\n\t\e\n\t\*\:\ \s\t\r\i\n\g\ \ \ \ \│\
\│\ \l\i\s\t\_\d\i\r\e\c\t\o\r\y\│\ \p\a\t\h\*\:\ \s\t\r\i\n\g\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \│\
\╰\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\┴\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\╯\
\`\`\`\
\
\-\-\-\
\
\#\#\ \S\e\e\ \A\l\s\o\
\
\-\ \[\H\o\w\ \t\o\ \C\a\l\l\ \a\ \T\o\o\l\ \I\n\t\e\r\a\c\t\i\v\e\l\y\]\(\c\a\l\l\-\t\o\o\l\-\i\n\t\e\r\a\c\t\i\v\e\l\y\.\m\d\)\ \—\ \t\h\e\ \p\r\o\m\p\t\ \e\n\g\i\n\e\ \u\s\e\s\ \t\h\e\ \s\a\m\e\ \s\c\h\e\m\a\
\-\ \[\M\C\P\ \P\r\o\t\o\c\o\l\ \N\o\t\e\s\]\(\.\.\/\r\e\f\e\r\e\n\c\e\/\m\c\p\-\p\r\o\t\o\c\o\l\.\m\d\)\ \—\ \h\o\w\ \`\i\n\p\u\t\S\c\h\e\m\a\`\ \i\s\ \d\e\f\i\n\e\d\ \i\n\ \t\h\e\ \s\p\e\c\
\
  },
};
