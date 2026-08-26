export const TUTORIALS_DATA = {
  "tutorials/getting-started.md": {
    title: "Tutorial: Getting Started — Your First MCP Tool Call",
    category: "tutorials",
    content: \#\ \T\u\t\o\r\i\a\l\:\ \G\e\t\t\i\n\g\ \S\t\a\r\t\e\d\ \—\ \Y\o\u\r\ \F\i\r\s\t\ \M\C\P\ \T\o\o\l\ \C\a\l\l\
\
\*\*\T\y\p\e\*\*\:\ \T\u\t\o\r\i\a\l\ \|\ \*\*\T\i\m\e\*\*\:\ \~\1\0\ \m\i\n\u\t\e\s\ \|\ \*\*\O\u\t\c\o\m\e\*\*\:\ \Y\o\u\ \w\i\l\l\ \h\a\v\e\ \i\n\s\t\a\l\l\e\d\ \`\m\c\p\-\c\a\l\l\e\r\`\,\ \c\o\n\n\e\c\t\e\d\ \t\o\ \a\ \r\e\a\l\ \M\C\P\ \s\e\r\v\e\r\,\ \a\n\d\ \s\u\c\c\e\s\s\f\u\l\l\y\ \i\n\v\o\k\e\d\ \a\ \t\o\o\l\ \—\ \a\l\l\ \w\i\t\h\o\u\t\ \a\n\ \L\L\M\.\
\
\>\ \T\u\t\o\r\i\a\l\s\ \a\r\e\ \d\e\s\i\g\n\e\d\ \f\o\r\ \*\*\l\e\a\r\n\i\n\g\*\*\.\ \E\v\e\r\y\ \s\t\e\p\ \h\e\r\e\ \i\s\ \i\n\t\e\n\t\i\o\n\a\l\.\ \F\o\l\l\o\w\ \t\h\e\m\ \i\n\ \o\r\d\e\r\ \e\v\e\n\ \i\f\ \p\a\r\t\s\ \f\e\e\l\ \f\a\m\i\l\i\a\r\.\
\
\-\-\-\
\
\#\#\ \P\r\e\r\e\q\u\i\s\i\t\e\s\
\
\B\e\f\o\r\e\ \y\o\u\ \b\e\g\i\n\,\ \m\a\k\e\ \s\u\r\e\ \y\o\u\ \h\a\v\e\:\
\
\-\ \*\*\R\u\s\t\ \t\o\o\l\c\h\a\i\n\*\*\ \(\`\r\u\s\t\c\`\ \≥\ \1\.\7\5\)\ \—\ \i\n\s\t\a\l\l\ \a\t\ \[\r\u\s\t\u\p\.\r\s\]\(\h\t\t\p\s\:\/\/\r\u\s\t\u\p\.\r\s\/\)\
\-\ \*\*\N\o\d\e\.\j\s\*\*\ \(\`\n\o\d\e\`\ \≥\ \1\8\)\ \—\ \f\o\r\ \t\h\e\ \e\x\a\m\p\l\e\ \s\e\r\v\e\r\ \w\e\'\l\l\ \u\s\e\ \i\n\ \t\h\i\s\ \t\u\t\o\r\i\a\l\
\-\ \A\ \t\e\r\m\i\n\a\l\ \(\P\o\w\e\r\S\h\e\l\l\ \o\n\ \W\i\n\d\o\w\s\,\ \b\a\s\h\/\z\s\h\ \o\n\ \m\a\c\O\S\/\L\i\n\u\x\)\
\
\-\-\-\
\
\#\#\ \S\t\e\p\ \1\ \—\ \B\u\i\l\d\ \`\m\c\p\-\c\a\l\l\e\r\`\
\
\C\l\o\n\e\ \t\h\e\ \r\e\p\o\s\i\t\o\r\y\ \a\n\d\ \c\o\m\p\i\l\e\ \i\t\:\
\
\`\`\`\b\a\s\h\
\g\i\t\ \c\l\o\n\e\ \h\t\t\p\s\:\/\/\g\i\t\h\u\b\.\c\o\m\/\y\o\u\r\-\o\r\g\/\m\c\p\-\c\a\l\l\e\r\.\g\i\t\
\c\d\ \m\c\p\-\c\a\l\l\e\r\
\c\a\r\g\o\ \b\u\i\l\d\ \-\-\r\e\l\e\a\s\e\
\`\`\`\
\
\W\h\e\n\ \f\i\n\i\s\h\e\d\,\ \t\h\e\ \b\i\n\a\r\y\ \i\s\ \a\t\:\
\-\ \*\*\W\i\n\d\o\w\s\*\*\:\ \`\t\a\r\g\e\t\\\\\r\e\l\e\a\s\e\\\\\m\c\p\-\c\a\l\l\e\r\.\e\x\e\`\
\-\ \*\*\m\a\c\O\S\/\L\i\n\u\x\*\*\:\ \`\t\a\r\g\e\t\/\r\e\l\e\a\s\e\/\m\c\p\-\c\a\l\l\e\r\`\
\
\V\e\r\i\f\y\ \i\t\ \w\o\r\k\s\:\
\
\`\`\`\b\a\s\h\
\#\ \W\i\n\d\o\w\s\
\t\a\r\g\e\t\\\\\r\e\l\e\a\s\e\\\\\m\c\p\-\c\a\l\l\e\r\.\e\x\e\ \-\-\v\e\r\s\i\o\n\
\
\#\ \m\a\c\O\S\/\L\i\n\u\x\
\.\/\t\a\r\g\e\t\/\r\e\l\e\a\s\e\/\m\c\p\-\c\a\l\l\e\r\ \-\-\v\e\r\s\i\o\n\
\`\`\`\
\
\E\x\p\e\c\t\e\d\ \o\u\t\p\u\t\:\
\`\`\`\
\m\c\p\-\c\a\l\l\e\r\ \0\.\1\.\0\
\`\`\`\
\
\>\ \*\*\T\i\p\*\*\:\ \F\o\r\ \c\o\n\v\e\n\i\e\n\c\e\,\ \a\d\d\ \t\h\e\ \b\i\n\a\r\y\ \t\o\ \y\o\u\r\ \s\y\s\t\e\m\ \`\P\A\T\H\`\ \s\o\ \y\o\u\ \c\a\n\ \r\u\n\ \`\m\c\p\-\c\a\l\l\e\r\`\ \f\r\o\m\ \a\n\y\w\h\e\r\e\.\
\
\-\-\-\
\
\#\#\ \S\t\e\p\ \2\ \—\ \U\n\d\e\r\s\t\a\n\d\ \W\h\a\t\ \W\e\'\r\e\ \C\o\n\n\e\c\t\i\n\g\ \T\o\
\
\I\n\ \t\h\i\s\ \t\u\t\o\r\i\a\l\ \w\e\'\l\l\ \c\o\n\n\e\c\t\ \t\o\ \t\h\e\ \o\f\f\i\c\i\a\l\ \*\*\M\C\P\ \F\i\l\e\s\y\s\t\e\m\ \S\e\r\v\e\r\*\*\ \—\ \a\ \r\e\a\l\ \M\C\P\ \s\e\r\v\e\r\ \p\u\b\l\i\s\h\e\d\ \b\y\ \t\h\e\ \M\C\P\ \t\e\a\m\ \t\h\a\t\ \e\x\p\o\s\e\s\ \f\i\l\e\-\s\y\s\t\e\m\ \t\o\o\l\s\ \v\i\a\ \s\t\d\i\o\.\
\
\I\t\ \r\e\q\u\i\r\e\s\ \n\o\ \A\P\I\ \k\e\y\s\ \a\n\d\ \i\s\ \i\n\s\t\a\l\l\a\b\l\e\ \i\n\ \a\ \s\i\n\g\l\e\ \c\o\m\m\a\n\d\ \v\i\a\ \`\n\p\x\`\.\
\
\T\h\e\ \s\e\r\v\e\r\ \e\x\p\o\s\e\s\ \t\o\o\l\s\ \l\i\k\e\:\
\-\ \`\r\e\a\d\_\f\i\l\e\`\ \—\ \r\e\a\d\ \t\h\e\ \c\o\n\t\e\n\t\s\ \o\f\ \a\ \f\i\l\e\
\-\ \`\l\i\s\t\_\d\i\r\e\c\t\o\r\y\`\ \—\ \l\i\s\t\ \f\i\l\e\s\ \i\n\ \a\ \d\i\r\e\c\t\o\r\y\
\-\ \`\w\r\i\t\e\_\f\i\l\e\`\ \—\ \w\r\i\t\e\ \c\o\n\t\e\n\t\ \t\o\ \a\ \f\i\l\e\
\
\-\-\-\
\
\#\#\ \S\t\e\p\ \3\ \—\ \L\i\s\t\ \t\h\e\ \S\e\r\v\e\r\'\s\ \T\o\o\l\s\
\
\R\u\n\ \`\m\c\p\-\c\a\l\l\e\r\ \l\i\s\t\`\ \w\i\t\h\ \t\h\e\ \`\-\-\c\m\d\`\ \f\l\a\g\ \t\o\ \c\o\n\n\e\c\t\ \d\i\r\e\c\t\l\y\ \w\i\t\h\o\u\t\ \a\n\y\ \c\o\n\f\i\g\ \f\i\l\e\:\
\
\`\`\`\b\a\s\h\
\m\c\p\-\c\a\l\l\e\r\ \l\i\s\t\ \-\-\c\m\d\ \"\n\p\x\ \-\y\ \@\m\o\d\e\l\c\o\n\t\e\x\t\p\r\o\t\o\c\o\l\/\s\e\r\v\e\r\-\f\i\l\e\s\y\s\t\e\m\ \.\"\
\`\`\`\
\
\>\ \`\-\-\c\m\d\`\ \a\c\c\e\p\t\s\ \a\ \s\h\e\l\l\-\q\u\o\t\e\d\ \c\o\m\m\a\n\d\ \t\o\ \s\p\a\w\n\ \a\n\y\ \M\C\P\ \s\e\r\v\e\r\ \o\n\ \t\h\e\ \f\l\y\.\ \ \
\>\ \T\h\e\ \`\.\`\ \a\r\g\u\m\e\n\t\ \t\e\l\l\s\ \t\h\e\ \f\i\l\e\s\y\s\t\e\m\ \s\e\r\v\e\r\ \t\o\ \a\l\l\o\w\ \a\c\c\e\s\s\ \t\o\ \t\h\e\ \c\u\r\r\e\n\t\ \d\i\r\e\c\t\o\r\y\.\
\
\Y\o\u\ \s\h\o\u\l\d\ \s\e\e\ \a\ \t\a\b\l\e\ \l\i\k\e\:\
\
\`\`\`\
\╭\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\┬\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\┬\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\╮\
\│\ \T\o\o\l\ \N\a\m\e\ \ \ \ \ \ \ \ \ \ \ \│\ \D\e\s\c\r\i\p\t\i\o\n\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \│\ \P\a\r\a\m\e\t\e\r\s\ \ \ \ \ \ \ \ \ \ \│\
\├\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\┼\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\┼\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\┤\
\│\ \r\e\a\d\_\f\i\l\e\ \ \ \ \ \ \ \ \ \ \ \│\ \R\e\a\d\ \t\h\e\ \c\o\m\p\l\e\t\e\ \c\o\n\t\e\n\t\s\ \o\f\ \a\ \f\i\l\e\.\.\.\ \ \│\ \p\a\t\h\*\:\ \s\t\r\i\n\g\ \ \ \ \ \ \ \│\
\│\ \l\i\s\t\_\d\i\r\e\c\t\o\r\y\ \ \ \ \ \ \│\ \G\e\t\ \a\ \d\e\t\a\i\l\e\d\ \l\i\s\t\i\n\g\ \o\f\ \a\l\l\ \f\i\l\e\s\.\.\.\ \ \ \│\ \p\a\t\h\*\:\ \s\t\r\i\n\g\ \ \ \ \ \ \ \│\
\│\ \w\r\i\t\e\_\f\i\l\e\ \ \ \ \ \ \ \ \ \ \│\ \C\r\e\a\t\e\ \a\ \n\e\w\ \f\i\l\e\ \o\r\ \o\v\e\r\w\r\i\t\e\.\.\.\ \ \ \ \ \ \ \ \│\ \p\a\t\h\*\:\ \s\t\r\i\n\g\,\ \.\.\.\ \ \│\
\╰\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\┴\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\┴\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\╯\
\(\*\ \i\n\d\i\c\a\t\e\s\ \r\e\q\u\i\r\e\d\ \p\a\r\a\m\e\t\e\r\)\
\`\`\`\
\
\*\*\W\h\a\t\ \j\u\s\t\ \h\a\p\p\e\n\e\d\?\*\*\ \`\m\c\p\-\c\a\l\l\e\r\`\ \s\p\a\w\n\e\d\ \t\h\e\ \f\i\l\e\s\y\s\t\e\m\ \s\e\r\v\e\r\ \a\s\ \a\ \c\h\i\l\d\ \p\r\o\c\e\s\s\,\ \c\o\m\p\l\e\t\e\d\ \t\h\e\ \M\C\P\ \h\a\n\d\s\h\a\k\e\,\ \a\n\d\ \c\a\l\l\e\d\ \`\t\o\o\l\s\/\l\i\s\t\`\ \v\i\a\ \J\S\O\N\-\R\P\C\ \—\ \t\h\e\n\ \r\e\n\d\e\r\e\d\ \t\h\e\ \s\c\h\e\m\a\ \i\n\ \a\ \h\u\m\a\n\-\r\e\a\d\a\b\l\e\ \t\a\b\l\e\.\
\
\-\-\-\
\
\#\#\ \S\t\e\p\ \4\ \—\ \I\n\s\p\e\c\t\ \a\ \T\o\o\l\'\s\ \F\u\l\l\ \S\c\h\e\m\a\
\
\B\e\f\o\r\e\ \c\a\l\l\i\n\g\ \a\ \t\o\o\l\,\ \i\n\s\p\e\c\t\ \i\t\s\ \p\a\r\a\m\e\t\e\r\ \r\e\q\u\i\r\e\m\e\n\t\s\:\
\
\`\`\`\b\a\s\h\
\m\c\p\-\c\a\l\l\e\r\ \i\n\f\o\ \-\-\c\m\d\ \"\n\p\x\ \-\y\ \@\m\o\d\e\l\c\o\n\t\e\x\t\p\r\o\t\o\c\o\l\/\s\e\r\v\e\r\-\f\i\l\e\s\y\s\t\e\m\ \.\"\ \-\-\t\o\o\l\ \l\i\s\t\_\d\i\r\e\c\t\o\r\y\
\`\`\`\
\
\Y\o\u\'\l\l\ \s\e\e\ \e\a\c\h\ \p\a\r\a\m\e\t\e\r\ \w\i\t\h\ \i\t\s\ \t\y\p\e\,\ \r\e\q\u\i\r\e\d\/\o\p\t\i\o\n\a\l\ \s\t\a\t\u\s\,\ \a\n\d\ \d\e\s\c\r\i\p\t\i\o\n\:\
\
\`\`\`\
\T\o\o\l\:\ \l\i\s\t\_\d\i\r\e\c\t\o\r\y\
\G\e\t\ \a\ \d\e\t\a\i\l\e\d\ \l\i\s\t\i\n\g\ \o\f\ \a\l\l\ \f\i\l\e\s\ \a\n\d\ \d\i\r\e\c\t\o\r\i\e\s\ \i\n\ \a\ \s\p\e\c\i\f\i\e\d\ \p\a\t\h\.\
\
\I\n\p\u\t\ \S\c\h\e\m\a\ \P\a\r\a\m\e\t\e\r\s\:\
\ \ \•\ \p\a\t\h\ \(\s\t\r\i\n\g\)\ \[\R\E\Q\U\I\R\E\D\]\
\ \ \ \ \ \ \D\e\s\c\r\i\p\t\i\o\n\:\ \P\a\t\h\ \o\f\ \t\h\e\ \d\i\r\e\c\t\o\r\y\ \t\o\ \l\i\s\t\
\`\`\`\
\
\-\-\-\
\
\#\#\ \S\t\e\p\ \5\ \—\ \C\a\l\l\ \a\ \T\o\o\l\ \I\n\t\e\r\a\c\t\i\v\e\l\y\
\
\N\o\w\ \i\n\v\o\k\e\ \`\l\i\s\t\_\d\i\r\e\c\t\o\r\y\`\ \u\s\i\n\g\ \t\h\e\ \i\n\t\e\r\a\c\t\i\v\e\ \p\r\o\m\p\t\.\ \T\h\e\ \t\o\o\l\ \o\n\l\y\ \n\e\e\d\s\ \o\n\e\ \p\a\r\a\m\e\t\e\r\,\ \s\o\ \t\h\i\s\ \i\s\ \q\u\i\c\k\:\
\
\`\`\`\b\a\s\h\
\m\c\p\-\c\a\l\l\e\r\ \c\a\l\l\ \-\-\c\m\d\ \"\n\p\x\ \-\y\ \@\m\o\d\e\l\c\o\n\t\e\x\t\p\r\o\t\o\c\o\l\/\s\e\r\v\e\r\-\f\i\l\e\s\y\s\t\e\m\ \.\"\ \-\-\t\o\o\l\ \l\i\s\t\_\d\i\r\e\c\t\o\r\y\
\`\`\`\
\
\`\m\c\p\-\c\a\l\l\e\r\`\ \d\e\t\e\c\t\s\ \t\h\e\ \t\o\o\l\'\s\ \s\c\h\e\m\a\ \a\n\d\ \p\r\o\m\p\t\s\ \y\o\u\:\
\
\`\`\`\
\─\─\ \F\i\l\l\ \P\a\r\a\m\e\t\e\r\s\ \f\o\r\ \'\l\i\s\t\_\d\i\r\e\c\t\o\r\y\'\ \─\─\
\G\e\t\ \a\ \d\e\t\a\i\l\e\d\ \l\i\s\t\i\n\g\ \o\f\ \a\l\l\ \f\i\l\e\s\ \a\n\d\ \d\i\r\e\c\t\o\r\i\e\s\.\.\.\
\
\p\a\t\h\ \(\s\t\r\i\n\g\)\ \[\r\e\q\u\i\r\e\d\]\ \-\ \P\a\t\h\ \o\f\ \t\h\e\ \d\i\r\e\c\t\o\r\y\ \t\o\ \l\i\s\t\
\>\ \.\
\`\`\`\
\
\T\y\p\e\ \`\.\`\ \a\n\d\ \p\r\e\s\s\ \E\n\t\e\r\.\ \Y\o\u\'\l\l\ \s\e\e\ \o\u\t\p\u\t\ \l\i\k\e\:\
\
\`\`\`\
\✔\ \S\U\C\C\E\S\S\ \T\o\o\l\ \e\x\e\c\u\t\i\o\n\ \f\i\n\i\s\h\e\d\ \(\1\.\2\4\s\)\
\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\
\[\
\ \ \{\ \"\n\a\m\e\"\:\ \"\C\a\r\g\o\.\t\o\m\l\"\,\ \"\t\y\p\e\"\:\ \"\f\i\l\e\"\,\ \"\s\i\z\e\"\:\ \5\1\2\ \}\,\
\ \ \{\ \"\n\a\m\e\"\:\ \"\s\r\c\"\,\ \ \ \ \ \ \ \ \"\t\y\p\e\"\:\ \"\d\i\r\e\c\t\o\r\y\"\ \}\,\
\ \ \.\.\.\
\]\
\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\
\`\`\`\
\
\🎉\ \*\*\Y\o\u\'\v\e\ \j\u\s\t\ \c\a\l\l\e\d\ \y\o\u\r\ \f\i\r\s\t\ \M\C\P\ \t\o\o\l\ \f\r\o\m\ \t\h\e\ \c\o\m\m\a\n\d\ \l\i\n\e\ \—\ \w\i\t\h\ \n\o\ \L\L\M\ \i\n\v\o\l\v\e\d\.\*\*\
\
\-\-\-\
\
\#\#\ \S\t\e\p\ \6\ \—\ \C\a\l\l\ \a\ \T\o\o\l\ \D\i\r\e\c\t\l\y\ \(\N\o\ \P\r\o\m\p\t\s\)\
\
\F\o\r\ \s\c\r\i\p\t\i\n\g\ \a\n\d\ \a\u\t\o\m\a\t\i\o\n\,\ \p\a\s\s\ \a\r\g\u\m\e\n\t\s\ \d\i\r\e\c\t\l\y\ \w\i\t\h\ \`\-\-\a\r\g\s\`\:\
\
\`\`\`\b\a\s\h\
\m\c\p\-\c\a\l\l\e\r\ \c\a\l\l\ \\\\\
\ \ \-\-\c\m\d\ \"\n\p\x\ \-\y\ \@\m\o\d\e\l\c\o\n\t\e\x\t\p\r\o\t\o\c\o\l\/\s\e\r\v\e\r\-\f\i\l\e\s\y\s\t\e\m\ \.\"\ \\\\\
\ \ \-\-\t\o\o\l\ \l\i\s\t\_\d\i\r\e\c\t\o\r\y\ \\\\\
\ \ \-\-\a\r\g\s\ \'\{\"\p\a\t\h\"\:\ \"\s\r\c\"\}\'\
\`\`\`\
\
\C\o\m\b\i\n\e\ \w\i\t\h\ \`\-\-\j\s\o\n\`\ \t\o\ \g\e\t\ \r\a\w\ \o\u\t\p\u\t\ \f\o\r\ \p\i\p\i\n\g\ \i\n\t\o\ \`\j\q\`\:\
\
\`\`\`\b\a\s\h\
\m\c\p\-\c\a\l\l\e\r\ \c\a\l\l\ \\\\\
\ \ \-\-\c\m\d\ \"\n\p\x\ \-\y\ \@\m\o\d\e\l\c\o\n\t\e\x\t\p\r\o\t\o\c\o\l\/\s\e\r\v\e\r\-\f\i\l\e\s\y\s\t\e\m\ \.\"\ \\\\\
\ \ \-\-\t\o\o\l\ \r\e\a\d\_\f\i\l\e\ \\\\\
\ \ \-\-\a\r\g\s\ \'\{\"\p\a\t\h\"\:\ \"\C\a\r\g\o\.\t\o\m\l\"\}\'\ \\\\\
\ \ \-\-\j\s\o\n\ \|\ \j\q\ \'\.\c\o\n\t\e\n\t\[\0\]\.\t\e\x\t\'\
\`\`\`\
\
\-\-\-\
\
\#\#\ \S\t\e\p\ \7\ \—\ \U\s\e\ \t\h\e\ \I\n\t\e\r\a\c\t\i\v\e\ \W\i\z\a\r\d\
\
\F\o\r\ \o\n\g\o\i\n\g\ \e\x\p\l\o\r\a\t\i\o\n\,\ \l\a\u\n\c\h\ \t\h\e\ \f\u\l\l\ \T\U\I\ \w\i\z\a\r\d\:\
\
\`\`\`\b\a\s\h\
\m\c\p\-\c\a\l\l\e\r\ \-\-\c\m\d\ \"\n\p\x\ \-\y\ \@\m\o\d\e\l\c\o\n\t\e\x\t\p\r\o\t\o\c\o\l\/\s\e\r\v\e\r\-\f\i\l\e\s\y\s\t\e\m\ \.\"\
\`\`\`\
\
\U\s\e\ \t\h\e\ \a\r\r\o\w\ \k\e\y\s\ \t\o\ \n\a\v\i\g\a\t\e\ \t\o\o\l\s\,\ \f\i\l\l\ \i\n\ \p\r\o\m\p\t\s\,\ \v\i\e\w\ \r\e\s\u\l\t\s\,\ \a\n\d\ \r\e\-\r\u\n\ \—\ \a\l\l\ \i\n\ \a\ \s\i\n\g\l\e\ \i\n\t\e\r\a\c\t\i\v\e\ \s\e\s\s\i\o\n\.\
\
\-\-\-\
\
\#\#\ \W\h\a\t\ \Y\o\u\'\v\e\ \L\e\a\r\n\e\d\
\
\|\ \C\o\n\c\e\p\t\ \|\ \C\o\m\m\a\n\d\ \|\
\|\-\-\-\|\-\-\-\|\
\|\ \L\i\s\t\ \a\ \s\e\r\v\e\r\'\s\ \t\o\o\l\s\ \|\ \`\m\c\p\-\c\a\l\l\e\r\ \l\i\s\t\ \-\-\c\m\d\ \"\<\c\m\d\>\"\`\ \|\
\|\ \I\n\s\p\e\c\t\ \t\o\o\l\ \p\a\r\a\m\e\t\e\r\s\ \|\ \`\m\c\p\-\c\a\l\l\e\r\ \i\n\f\o\ \-\-\c\m\d\ \"\<\c\m\d\>\"\ \-\-\t\o\o\l\ \<\n\a\m\e\>\`\ \|\
\|\ \C\a\l\l\ \a\ \t\o\o\l\ \i\n\t\e\r\a\c\t\i\v\e\l\y\ \|\ \`\m\c\p\-\c\a\l\l\e\r\ \c\a\l\l\ \-\-\c\m\d\ \"\<\c\m\d\>\"\ \-\-\t\o\o\l\ \<\n\a\m\e\>\`\ \|\
\|\ \C\a\l\l\ \a\ \t\o\o\l\ \w\i\t\h\ \d\i\r\e\c\t\ \a\r\g\s\ \|\ \`\m\c\p\-\c\a\l\l\e\r\ \c\a\l\l\ \.\.\.\ \-\-\a\r\g\s\ \'\{\"\k\e\y\"\:\"\v\a\l\"\}\'\`\ \|\
\|\ \G\e\t\ \r\a\w\ \J\S\O\N\ \o\u\t\p\u\t\ \|\ \A\d\d\ \`\-\-\j\s\o\n\`\ \t\o\ \a\n\y\ \c\o\m\m\a\n\d\ \|\
\
\-\-\-\
\
\#\#\ \N\e\x\t\ \S\t\e\p\s\
\
\-\ \*\*\→\ \[\H\o\w\ \t\o\ \C\o\n\f\i\g\u\r\e\ \M\C\P\ \S\e\r\v\e\r\s\]\(\.\.\/\h\o\w\-\t\o\/\c\o\n\f\i\g\u\r\e\-\s\e\r\v\e\r\s\.\m\d\)\*\*\ \—\ \a\d\d\ \s\e\r\v\e\r\s\ \t\o\ \a\ \c\o\n\f\i\g\ \f\i\l\e\ \s\o\ \y\o\u\ \d\o\n\'\t\ \n\e\e\d\ \`\-\-\c\m\d\`\ \e\v\e\r\y\ \t\i\m\e\
\-\ \*\*\→\ \[\C\L\I\ \C\o\m\m\a\n\d\s\ \R\e\f\e\r\e\n\c\e\]\(\.\.\/\r\e\f\e\r\e\n\c\e\/\c\l\i\-\c\o\m\m\a\n\d\s\.\m\d\)\*\*\ \—\ \f\u\l\l\ \f\l\a\g\ \d\o\c\u\m\e\n\t\a\t\i\o\n\
\-\ \*\*\→\ \[\W\h\y\ \M\C\P\-\C\a\l\l\e\r\ \E\x\i\s\t\s\]\(\.\.\/\e\x\p\l\a\n\a\t\i\o\n\/\w\h\y\-\m\c\p\-\c\a\l\l\e\r\.\m\d\)\*\*\ \—\ \u\n\d\e\r\s\t\a\n\d\ \t\h\e\ \m\o\t\i\v\a\t\i\o\n\
\
  },
};
