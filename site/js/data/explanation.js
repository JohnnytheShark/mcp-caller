export const EXPLANATION_DATA = {
  "explanation/config-discovery.md": {
    title: "Configuration Discovery & Priority",
    category: "explanation",
    content: \#\ \C\o\n\f\i\g\u\r\a\t\i\o\n\ \D\i\s\c\o\v\e\r\y\ \&\ \P\r\i\o\r\i\t\y\
\
\*\*\T\y\p\e\*\*\:\ \E\x\p\l\a\n\a\t\i\o\n\ \|\ \H\o\w\ \`\m\c\p\-\c\a\l\l\e\r\`\ \f\i\n\d\s\,\ \l\o\a\d\s\,\ \a\n\d\ \m\e\r\g\e\s\ \M\C\P\ \s\e\r\v\e\r\ \c\o\n\f\i\g\u\r\a\t\i\o\n\s\.\
\
\-\-\-\
\
\#\#\ \T\h\e\ \D\i\s\c\o\v\e\r\y\ \P\r\o\b\l\e\m\
\
\`\m\c\p\-\c\a\l\l\e\r\`\ \i\s\ \d\e\s\i\g\n\e\d\ \t\o\ \w\o\r\k\ \a\c\r\o\s\s\ \m\a\n\y\ \d\i\f\f\e\r\e\n\t\ \e\n\v\i\r\o\n\m\e\n\t\s\:\ \p\e\r\s\o\n\a\l\ \m\a\c\h\i\n\e\s\ \w\i\t\h\ \C\l\a\u\d\e\ \D\e\s\k\t\o\p\,\ \p\r\o\j\e\c\t\ \r\e\p\o\s\i\t\o\r\i\e\s\ \w\i\t\h\ \l\o\c\a\l\ \`\m\c\p\.\j\s\o\n\`\ \f\i\l\e\s\,\ \a\n\d\ \C\I\ \e\n\v\i\r\o\n\m\e\n\t\s\ \w\i\t\h\ \e\x\p\l\i\c\i\t\ \c\o\n\f\i\g\ \p\a\t\h\s\.\ \R\a\t\h\e\r\ \t\h\a\n\ \r\e\q\u\i\r\i\n\g\ \o\n\e\ \c\a\n\o\n\i\c\a\l\ \c\o\n\f\i\g\ \l\o\c\a\t\i\o\n\,\ \i\t\ \d\i\s\c\o\v\e\r\s\ \s\e\r\v\e\r\s\ \f\r\o\m\ \m\u\l\t\i\p\l\e\ \s\o\u\r\c\e\s\ \a\n\d\ \m\e\r\g\e\s\ \t\h\e\m\.\
\
\-\-\-\
\
\#\#\ \D\i\s\c\o\v\e\r\y\ \O\r\d\e\r\ \&\ \P\r\i\o\r\i\t\y\
\
\C\o\n\f\i\g\u\r\a\t\i\o\n\ \i\s\ \l\o\a\d\e\d\ \i\n\ \t\h\i\s\ \o\r\d\e\r\.\ \*\*\F\i\r\s\t\-\w\i\n\s\*\*\:\ \i\f\ \a\ \s\e\r\v\e\r\ \n\a\m\e\ \a\p\p\e\a\r\s\ \i\n\ \a\n\ \e\a\r\l\i\e\r\ \s\o\u\r\c\e\,\ \l\a\t\e\r\ \s\o\u\r\c\e\s\ \d\o\ \n\o\t\ \o\v\e\r\r\i\d\e\ \i\t\.\
\
\`\`\`\
\1\.\ \-\-\c\o\n\f\i\g\ \<\P\A\T\H\>\ \ \ \ \ \ \ \ \ \ \ \ \(\e\x\p\l\i\c\i\t\,\ \h\i\g\h\e\s\t\ \p\r\i\o\r\i\t\y\)\
\2\.\ \.\/\m\c\p\.\j\s\o\n\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \(\l\o\c\a\l\ \p\r\o\j\e\c\t\ \f\i\l\e\)\
\3\.\ \.\/\.\m\c\p\.\j\s\o\n\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \(\l\o\c\a\l\ \p\r\o\j\e\c\t\ \f\i\l\e\,\ \d\o\t\f\i\l\e\ \v\a\r\i\a\n\t\)\
\4\.\ \.\/\.\m\c\p\r\c\.\j\s\o\n\ \ \ \ \ \ \ \ \ \ \ \ \ \ \(\l\o\c\a\l\ \p\r\o\j\e\c\t\ \f\i\l\e\,\ \r\c\ \v\a\r\i\a\n\t\)\
\5\.\ \C\l\a\u\d\e\ \D\e\s\k\t\o\p\ \c\o\n\f\i\g\ \ \ \ \ \ \(\p\l\a\t\f\o\r\m\-\s\p\e\c\i\f\i\c\ \s\y\s\t\e\m\ \p\a\t\h\)\
\6\.\ \A\n\t\i\g\r\a\v\i\t\y\/\G\e\m\i\n\i\ \c\o\n\f\i\g\ \ \(\~\/\.\g\e\m\i\n\i\/\a\n\t\i\g\r\a\v\i\t\y\-\c\l\i\/\m\c\p\_\c\o\n\f\i\g\.\j\s\o\n\)\
\`\`\`\
\
\#\#\#\ \W\h\y\ \F\i\r\s\t\-\W\i\n\s\?\
\
\A\ \p\r\o\j\e\c\t\-\l\o\c\a\l\ \`\m\c\p\.\j\s\o\n\`\ \d\e\f\i\n\e\s\ \t\h\e\ \s\e\r\v\e\r\s\ \n\e\e\d\e\d\ \f\o\r\ \t\h\a\t\ \p\r\o\j\e\c\t\.\ \A\ \s\y\s\t\e\m\-\l\e\v\e\l\ \c\o\n\f\i\g\ \(\C\l\a\u\d\e\ \D\e\s\k\t\o\p\)\ \d\e\f\i\n\e\s\ \y\o\u\r\ \p\e\r\s\o\n\a\l\ \s\e\t\u\p\.\ \I\f\ \y\o\u\ \h\a\v\e\ \a\ \s\e\r\v\e\r\ \n\a\m\e\d\ \`\f\i\l\e\s\y\s\t\e\m\`\ \i\n\ \b\o\t\h\,\ \t\h\e\ \p\r\o\j\e\c\t\-\l\o\c\a\l\ \d\e\f\i\n\i\t\i\o\n\ \i\s\ \m\o\r\e\ \s\p\e\c\i\f\i\c\ \a\n\d\ \s\h\o\u\l\d\ \t\a\k\e\ \p\r\e\c\e\d\e\n\c\e\.\
\
\-\-\-\
\
\#\#\ \T\h\e\ \M\e\r\g\e\ \A\l\g\o\r\i\t\h\m\
\
\T\h\e\ \i\m\p\l\e\m\e\n\t\a\t\i\o\n\ \l\i\v\e\s\ \i\n\ \[\`\C\o\n\f\i\g\M\a\n\a\g\e\r\:\:\l\o\a\d\_\a\l\l\`\]\(\.\.\/\.\.\/\s\r\c\/\c\o\n\f\i\g\/\m\o\d\.\r\s\)\:\
\
\`\`\`\r\u\s\t\
\/\/\ \S\i\m\p\l\i\f\i\e\d\ \p\s\e\u\d\o\c\o\d\e\
\f\n\ \l\o\a\d\_\a\l\l\(\c\u\s\t\o\m\_\c\o\n\f\i\g\)\ \{\
\ \ \ \ \l\e\t\ \m\u\t\ \m\a\p\:\ \H\a\s\h\M\a\p\<\n\a\m\e\,\ \(\d\e\f\i\n\i\t\i\o\n\,\ \s\o\u\r\c\e\_\p\a\t\h\)\>\ \=\ \{\}\;\
\
\ \ \ \ \f\o\r\ \s\o\u\r\c\e\ \i\n\ \[\c\u\s\t\o\m\_\c\o\n\f\i\g\,\ \l\o\c\a\l\_\f\i\l\e\s\,\ \c\l\a\u\d\e\,\ \g\e\m\i\n\i\]\ \{\
\ \ \ \ \ \ \ \ \i\f\ \s\o\u\r\c\e\.\e\x\i\s\t\s\(\)\ \{\
\ \ \ \ \ \ \ \ \ \ \ \ \f\o\r\ \(\n\a\m\e\,\ \d\e\f\)\ \i\n\ \p\a\r\s\e\(\s\o\u\r\c\e\)\ \{\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \m\a\p\.\e\n\t\r\y\(\n\a\m\e\)\.\o\r\_\i\n\s\e\r\t\(\(\d\e\f\,\ \s\o\u\r\c\e\)\)\;\ \ \/\/\ \f\i\r\s\t\-\w\i\n\s\
\ \ \ \ \ \ \ \ \ \ \ \ \}\
\ \ \ \ \ \ \ \ \}\
\ \ \ \ \}\
\}\
\`\`\`\
\
\E\r\r\o\r\s\ \i\n\ \l\o\a\d\i\n\g\ \a\ \p\a\r\t\i\c\u\l\a\r\ \c\o\n\f\i\g\ \s\o\u\r\c\e\ \(\m\a\l\f\o\r\m\e\d\ \J\S\O\N\,\ \u\n\r\e\a\d\a\b\l\e\ \f\i\l\e\)\ \a\r\e\ \*\*\s\i\l\e\n\t\l\y\ \i\g\n\o\r\e\d\*\*\ \f\o\r\ \a\u\t\o\-\d\i\s\c\o\v\e\r\e\d\ \s\o\u\r\c\e\s\.\ \O\n\l\y\ \e\r\r\o\r\s\ \i\n\ \a\n\ \e\x\p\l\i\c\i\t\l\y\-\p\a\s\s\e\d\ \`\-\-\c\o\n\f\i\g\`\ \f\i\l\e\ \a\r\e\ \p\r\o\p\a\g\a\t\e\d\ \a\s\ \e\r\r\o\r\s\.\ \T\h\i\s\ \p\r\e\v\e\n\t\s\ \a\ \c\o\r\r\u\p\t\e\d\ \C\l\a\u\d\e\ \D\e\s\k\t\o\p\ \c\o\n\f\i\g\ \f\r\o\m\ \b\r\e\a\k\i\n\g\ \`\m\c\p\-\c\a\l\l\e\r\`\ \e\n\t\i\r\e\l\y\.\
\
\-\-\-\
\
\#\#\ \C\o\n\f\i\g\ \F\i\l\e\ \F\o\r\m\a\t\ \D\e\t\e\c\t\i\o\n\
\
\`\m\e\r\g\e\_\f\r\o\m\_\f\i\l\e\`\ \a\t\t\e\m\p\t\s\ \t\o\ \p\a\r\s\e\ \e\a\c\h\ \f\i\l\e\ \i\n\ \t\w\o\ \f\o\r\m\a\t\s\:\
\
\1\.\ \*\*\S\t\a\n\d\a\r\d\ \`\m\c\p\S\e\r\v\e\r\s\`\-\w\r\a\p\p\e\d\ \f\o\r\m\a\t\*\*\ \(\u\s\e\d\ \b\y\ \C\l\a\u\d\e\ \D\e\s\k\t\o\p\ \a\n\d\ \t\h\e\ \o\f\f\i\c\i\a\l\ \M\C\P\ \s\p\e\c\)\:\
\ \ \ \`\`\`\j\s\o\n\
\ \ \ \{\ \"\m\c\p\S\e\r\v\e\r\s\"\:\ \{\ \"\m\y\-\s\e\r\v\e\r\"\:\ \{\ \.\.\.\ \}\ \}\ \}\
\ \ \ \`\`\`\
\
\2\.\ \*\*\F\l\a\t\ \m\a\p\ \f\o\r\m\a\t\*\*\ \(\s\i\m\p\l\e\r\ \p\r\o\j\e\c\t\ \c\o\n\f\i\g\s\)\:\
\ \ \ \`\`\`\j\s\o\n\
\ \ \ \{\ \"\m\y\-\s\e\r\v\e\r\"\:\ \{\ \.\.\.\ \}\ \}\
\ \ \ \`\`\`\
\
\I\f\ \n\e\i\t\h\e\r\ \p\a\r\s\e\ \s\u\c\c\e\e\d\s\,\ \t\h\e\ \f\i\l\e\ \i\s\ \s\i\l\e\n\t\l\y\ \s\k\i\p\p\e\d\.\
\
\-\-\-\
\
\#\#\ \P\l\a\t\f\o\r\m\-\S\p\e\c\i\f\i\c\ \P\a\t\h\s\
\
\|\ \C\o\n\f\i\g\ \S\o\u\r\c\e\ \|\ \W\i\n\d\o\w\s\ \|\ \m\a\c\O\S\ \|\ \L\i\n\u\x\ \|\
\|\-\-\-\|\-\-\-\|\-\-\-\|\-\-\-\|\
\|\ \C\l\a\u\d\e\ \D\e\s\k\t\o\p\ \|\ \`\%\A\P\P\D\A\T\A\%\\\\\C\l\a\u\d\e\\\\\c\l\a\u\d\e\_\d\e\s\k\t\o\p\_\c\o\n\f\i\g\.\j\s\o\n\`\ \|\ \`\~\/\L\i\b\r\a\r\y\/\A\p\p\l\i\c\a\t\i\o\n\ \S\u\p\p\o\r\t\/\C\l\a\u\d\e\/\c\l\a\u\d\e\_\d\e\s\k\t\o\p\_\c\o\n\f\i\g\.\j\s\o\n\`\ \|\ \`\~\/\.\c\o\n\f\i\g\/\C\l\a\u\d\e\/\c\l\a\u\d\e\_\d\e\s\k\t\o\p\_\c\o\n\f\i\g\.\j\s\o\n\`\ \|\
\|\ \A\n\t\i\g\r\a\v\i\t\y\/\G\e\m\i\n\i\ \|\ \`\~\\\\\.\g\e\m\i\n\i\\\\\a\n\t\i\g\r\a\v\i\t\y\-\c\l\i\\\\\m\c\p\_\c\o\n\f\i\g\.\j\s\o\n\`\ \|\ \S\a\m\e\ \|\ \S\a\m\e\ \|\
\
\-\-\-\
\
\#\#\ \D\i\a\g\n\o\s\i\n\g\ \D\i\s\c\o\v\e\r\y\
\
\R\u\n\ \`\m\c\p\-\c\a\l\l\e\r\ \s\e\r\v\e\r\s\`\ \t\o\ \s\e\e\ \e\x\a\c\t\l\y\ \w\h\i\c\h\ \s\e\r\v\e\r\s\ \w\e\r\e\ \f\o\u\n\d\ \a\n\d\ \w\h\i\c\h\ \c\o\n\f\i\g\ \f\i\l\e\ \e\a\c\h\ \c\a\m\e\ \f\r\o\m\:\
\
\`\`\`\b\a\s\h\
\m\c\p\-\c\a\l\l\e\r\ \s\e\r\v\e\r\s\
\`\`\`\
\
\`\`\`\
\╭\─\─\─\─\─\─\─\─\─\─\─\─\┬\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\┬\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\╮\
\│\ \S\e\r\v\e\r\ \N\a\m\e\│\ \C\o\m\m\a\n\d\ \/\ \U\R\L\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \│\ \C\o\n\f\i\g\ \S\o\u\r\c\e\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \│\
\├\─\─\─\─\─\─\─\─\─\─\─\─\┼\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\┼\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\┤\
\│\ \f\i\l\e\s\y\s\t\e\m\ \│\ \n\p\x\ \-\y\ \@\m\c\p\/\s\e\r\v\e\r\-\f\i\l\e\s\y\s\t\e\m\ \.\ \ \ \│\ \.\/\m\c\p\.\j\s\o\n\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \│\
\│\ \g\i\t\h\u\b\ \ \ \ \ \│\ \n\p\x\ \-\y\ \@\m\c\p\/\s\e\r\v\e\r\-\g\i\t\h\u\b\ \ \ \ \ \ \ \ \ \│\ \C\:\\\\\U\s\e\r\s\\\\\.\.\.\\\\\c\l\a\u\d\e\_\d\e\s\k\t\o\p\_\c\o\n\f\i\g\.\j\s\o\n\ \ \ \ \│\
\╰\─\─\─\─\─\─\─\─\─\─\─\─\┴\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\┴\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\╯\
\`\`\`\
\
\T\h\e\ \*\*\C\o\n\f\i\g\ \S\o\u\r\c\e\*\*\ \c\o\l\u\m\n\ \s\h\o\w\s\ \e\x\a\c\t\l\y\ \w\h\i\c\h\ \f\i\l\e\ \c\o\n\t\r\i\b\u\t\e\d\ \e\a\c\h\ \s\e\r\v\e\r\ \d\e\f\i\n\i\t\i\o\n\ \—\ \u\s\e\f\u\l\ \f\o\r\ \d\e\b\u\g\g\i\n\g\ \u\n\e\x\p\e\c\t\e\d\ \s\e\r\v\e\r\ \d\e\f\i\n\i\t\i\o\n\s\ \o\r\ \p\r\i\o\r\i\t\y\ \c\o\n\f\l\i\c\t\s\.\
\
\-\-\-\
\
\#\#\ \S\e\e\ \A\l\s\o\
\
\-\ \[\H\o\w\ \t\o\ \C\o\n\f\i\g\u\r\e\ \M\C\P\ \S\e\r\v\e\r\s\]\(\.\.\/\h\o\w\-\t\o\/\c\o\n\f\i\g\u\r\e\-\s\e\r\v\e\r\s\.\m\d\)\ \—\ \p\r\a\c\t\i\c\a\l\ \s\e\t\u\p\ \i\n\s\t\r\u\c\t\i\o\n\s\
\-\ \[\C\o\n\f\i\g\u\r\a\t\i\o\n\ \F\i\l\e\ \S\c\h\e\m\a\]\(\.\.\/\r\e\f\e\r\e\n\c\e\/\c\o\n\f\i\g\-\s\c\h\e\m\a\.\m\d\)\ \—\ \f\o\r\m\a\t\ \s\p\e\c\i\f\i\c\a\t\i\o\n\
\
  },
  "explanation/spiker-adr.md": {
    title: "S.P.I.K.E.R. Architecture Decision Record",
    category: "explanation",
    content: \#\ \S\.\P\.\I\.\K\.\E\.\R\.\ \A\r\c\h\i\t\e\c\t\u\r\e\ \D\e\c\i\s\i\o\n\ \R\e\c\o\r\d\
\
\*\*\T\y\p\e\*\*\:\ \E\x\p\l\a\n\a\t\i\o\n\ \|\ \A\D\R\-\0\0\1\ \—\ \S\.\P\.\I\.\K\.\E\.\R\.\ \a\u\d\i\t\ \o\f\ \`\m\c\p\-\c\a\l\l\e\r\`\ \v\0\.\1\.\0\.\
\
\>\ \*\*\M\e\t\h\o\d\o\l\o\g\y\*\*\:\ \S\.\P\.\I\.\K\.\E\.\R\.\ \(\J\a\p\a\n\e\s\e\ \P\r\e\c\i\s\i\o\n\ \E\n\g\i\n\e\e\r\i\n\g\)\ \—\ \p\r\e\v\e\n\t\s\ \T\e\c\h\n\i\c\a\l\ \S\e\p\s\i\s\ \b\y\ \a\p\p\l\y\i\n\g\ \t\h\e\ \p\r\i\n\c\i\p\l\e\s\ \o\f\ \I\k\e\j\i\m\e\ \(\c\l\e\a\n\ \k\i\l\l\)\ \t\o\ \s\o\f\t\w\a\r\e\ \a\t\ \t\h\e\ \m\o\m\e\n\t\ \o\f\ \c\o\m\m\i\t\.\
\
\-\-\-\
\
\#\#\ \C\o\n\t\e\x\t\
\
\`\m\c\p\-\c\a\l\l\e\r\`\ \v\0\.\1\.\0\ \w\a\s\ \a\u\d\i\t\e\d\ \a\g\a\i\n\s\t\ \t\h\e\ \s\i\x\ \S\.\P\.\I\.\K\.\E\.\R\.\ \p\i\l\l\a\r\s\ \i\m\m\e\d\i\a\t\e\l\y\ \a\f\t\e\r\ \i\n\i\t\i\a\l\ \i\m\p\l\e\m\e\n\t\a\t\i\o\n\.\ \S\i\x\ \f\i\n\d\i\n\g\s\ \w\e\r\e\ \i\d\e\n\t\i\f\i\e\d\ \a\n\d\ \s\u\b\s\e\q\u\e\n\t\l\y\ \r\e\s\o\l\v\e\d\.\ \T\h\i\s\ \d\o\c\u\m\e\n\t\ \r\e\c\o\r\d\s\ \b\o\t\h\ \t\h\e\ \f\i\n\d\i\n\g\s\ \a\n\d\ \t\h\e\i\r\ \r\e\s\o\l\u\t\i\o\n\s\ \f\o\r\ \a\r\c\h\i\t\e\c\t\u\r\a\l\ \t\r\a\n\s\p\a\r\e\n\c\y\.\
\
\*\*\O\v\e\r\a\l\l\ \v\e\r\d\i\c\t\*\*\:\ \✅\ \*\*\I\k\e\j\i\m\e\-\C\o\d\e\*\*\ \—\ \w\e\l\l\-\f\o\r\m\e\d\ \f\o\r\ \v\0\.\1\.\0\ \a\f\t\e\r\ \r\e\m\e\d\i\a\t\i\o\n\s\.\
\
\-\-\-\
\
\#\#\ \T\h\e\ \S\i\x\ \P\i\l\l\a\r\s\ \—\ \F\i\n\d\i\n\g\s\ \&\ \R\e\s\o\l\u\t\i\o\n\s\
\
\-\-\-\
\
\#\#\#\ \[\S\]\ \S\y\s\t\e\m\i\c\ \S\p\i\k\i\n\g\ \—\ \I\n\t\e\n\t\ \P\r\e\c\i\s\i\o\n\
\
\>\ \*\D\e\s\t\r\o\y\i\n\g\ \a\m\b\i\g\u\i\t\y\ \b\e\f\o\r\e\ \t\h\e\ \f\i\r\s\t\ \l\i\n\e\ \o\f\ \c\o\d\e\.\*\
\
\*\*\F\i\n\d\i\n\g\*\*\:\ \I\n\ \`\c\a\l\l\.\r\s\`\,\ \`\l\i\s\t\.\r\s\`\,\ \a\n\d\ \`\i\n\f\o\.\r\s\`\,\ \t\h\e\ \a\r\m\ \`\(\S\o\m\e\(\_\)\,\ \S\o\m\e\(\c\m\d\)\)\`\ \s\i\l\e\n\t\l\y\ \d\i\s\c\a\r\d\e\d\ \t\h\e\ \s\e\r\v\e\r\ \n\a\m\e\ \w\h\e\n\ \b\o\t\h\ \`\-\-\s\e\r\v\e\r\`\ \a\n\d\ \`\-\-\c\m\d\`\ \w\e\r\e\ \p\r\o\v\i\d\e\d\,\ \w\i\t\h\ \n\o\ \i\n\d\i\c\a\t\i\o\n\ \t\o\ \t\h\e\ \u\s\e\r\ \t\h\a\t\ \t\h\e\i\r\ \n\a\m\e\d\ \s\e\r\v\e\r\ \w\a\s\ \b\e\i\n\g\ \i\g\n\o\r\e\d\.\
\
\*\*\R\e\s\o\l\u\t\i\o\n\*\*\:\ \E\x\t\r\a\c\t\e\d\ \`\r\e\s\o\l\v\e\_\s\e\r\v\e\r\_\d\e\f\i\n\i\t\i\o\n\(\)\`\ \i\n\ \`\c\o\m\m\a\n\d\s\/\m\o\d\.\r\s\`\.\ \W\h\e\n\ \b\o\t\h\ \i\n\p\u\t\s\ \a\r\e\ \p\r\o\v\i\d\e\d\,\ \t\h\e\ \f\u\n\c\t\i\o\n\:\
\1\.\ \E\m\i\t\s\ \a\ \v\i\s\i\b\l\e\ \`\⚠\ \W\a\r\n\i\n\g\:\`\ \t\o\ \s\t\d\e\r\r\ \s\t\a\t\i\n\g\ \`\-\-\c\m\d\`\ \t\a\k\e\s\ \p\r\e\c\e\d\e\n\c\e\
\2\.\ \P\r\o\c\e\e\d\s\ \w\i\t\h\ \`\-\-\c\m\d\`\,\ \m\a\k\i\n\g\ \t\h\e\ \r\e\s\o\l\u\t\i\o\n\ \r\u\l\e\ \e\x\p\l\i\c\i\t\ \a\n\d\ \a\u\d\i\t\a\b\l\e\
\
\*\*\S\t\a\t\u\s\*\*\:\ \✅\ \R\e\s\o\l\v\e\d\
\
\-\-\-\
\
\#\#\#\ \[\P\]\ \P\e\r\i\p\h\e\r\a\l\ \P\u\r\g\e\ \—\ \M\i\n\i\m\a\l\i\s\t\ \H\y\g\i\e\n\e\
\
\>\ \*\I\m\m\e\d\i\a\t\e\ \r\e\m\o\v\a\l\ \o\f\ \d\e\a\d\ \c\o\d\e\ \a\n\d\ \"\j\u\s\t\-\i\n\-\c\a\s\e\"\ \d\e\p\e\n\d\e\n\c\i\e\s\.\*\
\
\*\*\F\i\n\d\i\n\g\*\*\:\ \`\r\e\q\w\e\s\t\`\ \a\n\d\ \`\f\u\t\u\r\e\s\`\ \w\e\r\e\ \d\e\c\l\a\r\e\d\ \i\n\ \`\C\a\r\g\o\.\t\o\m\l\`\ \b\u\t\ \h\a\d\ \z\e\r\o\ \u\s\a\g\e\s\ \i\n\ \t\h\e\ \c\o\d\e\b\a\s\e\.\ \T\h\e\y\ \a\d\d\e\d\ \~\1\5\M\B\ \t\o\ \t\h\e\ \b\i\n\a\r\y\ \f\o\o\t\p\r\i\n\t\ \a\n\d\ \s\i\g\n\i\f\i\c\a\n\t\ \c\o\m\p\i\l\e\ \t\i\m\e\ \f\o\r\ \n\o\ \b\e\n\e\f\i\t\.\ \T\h\e\ \r\a\t\i\o\n\a\l\e\ \(\"\f\u\t\u\r\e\ \H\T\T\P\ \t\r\a\n\s\p\o\r\t\"\)\ \v\i\o\l\a\t\e\s\ \t\h\e\ \P\e\r\i\p\h\e\r\a\l\ \P\u\r\g\e\ \r\u\l\e\ \—\ \t\h\a\t\'\s\ \a\ \f\u\t\u\r\e\ \t\i\c\k\e\t\,\ \n\o\t\ \a\ \c\u\r\r\e\n\t\ \d\e\p\e\n\d\e\n\c\y\.\
\
\*\*\R\e\s\o\l\u\t\i\o\n\*\*\:\ \B\o\t\h\ \c\r\a\t\e\s\ \r\e\m\o\v\e\d\ \f\r\o\m\ \`\C\a\r\g\o\.\t\o\m\l\`\.\ \T\h\e\y\ \w\i\l\l\ \b\e\ \a\d\d\e\d\ \i\n\ \t\h\e\ \c\o\m\m\i\t\ \t\h\a\t\ \i\n\t\r\o\d\u\c\e\s\ \t\h\e\ \H\T\T\P\ \t\r\a\n\s\p\o\r\t\,\ \n\o\t\ \b\e\f\o\r\e\.\
\
\*\*\S\t\a\t\u\s\*\*\:\ \✅\ \R\e\s\o\l\v\e\d\
\
\-\-\-\
\
\#\#\#\ \[\I\]\ \I\s\o\l\a\t\i\o\n\ \o\f\ \N\e\r\v\e\s\ \—\ \S\t\r\u\c\t\u\r\a\l\ \D\e\c\o\u\p\l\i\n\g\
\
\>\ \*\S\e\v\e\r\i\n\g\ \t\h\e\ \s\p\i\n\a\l\ \c\o\r\d\ \b\e\t\w\e\e\n\ \u\n\r\e\l\a\t\e\d\ \m\o\d\u\l\e\s\.\*\
\
\*\*\F\i\n\d\i\n\g\*\*\:\ \T\h\e\ \s\e\r\v\e\r\ \r\e\s\o\l\u\t\i\o\n\ \l\o\g\i\c\ \—\ \t\h\e\ \`\m\a\t\c\h\ \(\s\e\r\v\e\r\_\n\a\m\e\,\ \c\m\d\_\o\v\e\r\r\i\d\e\)\`\ \b\l\o\c\k\ \—\ \w\a\s\ \c\o\p\y\-\p\a\s\t\e\d\ \i\d\e\n\t\i\c\a\l\l\y\ \i\n\t\o\ \t\h\r\e\e\ \c\o\m\m\a\n\d\ \h\a\n\d\l\e\r\s\ \(\`\c\a\l\l\.\r\s\`\,\ \`\l\i\s\t\.\r\s\`\,\ \`\i\n\f\o\.\r\s\`\)\.\ \T\h\i\s\ \i\s\ \a\ \s\i\n\g\l\e\ \"\n\e\r\v\e\"\ \c\u\t\ \i\n\ \t\h\r\e\e\ \p\l\a\c\e\s\.\ \A\n\y\ \c\h\a\n\g\e\ \t\o\ \r\e\s\o\l\u\t\i\o\n\ \p\r\i\o\r\i\t\y\ \(\e\.\g\.\,\ \U\R\L\-\b\a\s\e\d\ \r\o\u\t\i\n\g\)\ \r\e\q\u\i\r\e\d\ \t\h\r\e\e\ \i\d\e\n\t\i\c\a\l\ \e\d\i\t\s\.\
\
\*\*\R\e\s\o\l\u\t\i\o\n\*\*\:\ \E\x\t\r\a\c\t\e\d\ \`\r\e\s\o\l\v\e\_\s\e\r\v\e\r\_\d\e\f\i\n\i\t\i\o\n\(\s\e\r\v\e\r\_\n\a\m\e\,\ \c\m\d\_\o\v\e\r\r\i\d\e\,\ \c\o\n\f\i\g\)\ \-\>\ \R\e\s\u\l\t\<\S\e\r\v\e\r\D\e\f\i\n\i\t\i\o\n\>\`\ \i\n\t\o\ \`\c\o\m\m\a\n\d\s\/\m\o\d\.\r\s\`\.\ \A\l\l\ \t\h\r\e\e\ \h\a\n\d\l\e\r\s\ \d\e\l\e\g\a\t\e\ \t\o\ \i\t\.\ \T\h\e\ \r\e\s\o\l\u\t\i\o\n\ \l\o\g\i\c\ \n\o\w\ \h\a\s\ \o\n\e\ \c\a\n\o\n\i\c\a\l\ \l\o\c\a\t\i\o\n\.\
\
\*\*\S\t\a\t\u\s\*\*\:\ \✅\ \R\e\s\o\l\v\e\d\
\
\-\-\-\
\
\#\#\#\ \[\K\]\ \K\i\n\e\t\i\c\ \H\y\g\i\e\n\e\ \—\ \D\e\p\e\n\d\e\n\c\y\ \P\u\r\i\t\y\
\
\>\ \*\B\e\i\n\g\ \a\g\g\r\e\s\s\i\v\e\l\y\ \p\r\o\t\e\c\t\i\v\e\ \o\f\ \t\h\e\ \e\n\v\i\r\o\n\m\e\n\t\.\ \E\v\e\r\y\ \e\x\t\e\r\n\a\l\ \l\i\b\r\a\r\y\ \i\s\ \a\ \p\o\t\e\n\t\i\a\l\ \c\o\n\t\a\m\i\n\a\t\i\o\n\ \p\o\i\n\t\.\*\
\
\*\*\F\i\n\d\i\n\g\*\*\:\ \`\S\e\r\v\e\r\D\e\f\i\n\i\t\i\o\n\:\:\f\r\o\m\_\c\o\m\m\a\n\d\_\s\t\r\`\ \u\s\e\s\ \`\s\h\e\l\l\_\w\o\r\d\s\:\:\s\p\l\i\t\`\ \t\o\ \p\a\r\s\e\ \u\s\e\r\-\s\u\p\p\l\i\e\d\ \c\o\m\m\a\n\d\ \s\t\r\i\n\g\s\.\ \T\h\i\s\ \i\s\ \t\h\e\ \c\o\r\r\e\c\t\ \l\i\b\r\a\r\y\ \f\o\r\ \t\h\e\ \j\o\b\,\ \b\u\t\ \t\h\e\ \f\u\n\c\t\i\o\n\ \h\a\d\ \n\o\ \d\o\c\u\m\e\n\t\a\t\i\o\n\ \o\n\ \i\t\s\ \t\r\u\s\t\ \b\o\u\n\d\a\r\y\.\ \A\ \f\u\t\u\r\e\ \m\a\i\n\t\a\i\n\e\r\ \c\o\u\l\d\ \i\n\a\d\v\e\r\t\e\n\t\l\y\ \p\a\s\s\ \u\n\t\r\u\s\t\e\d\ \i\n\p\u\t\ \(\e\.\g\.\,\ \f\r\o\m\ \a\ \r\e\m\o\t\e\ \A\P\I\ \r\e\s\p\o\n\s\e\)\ \a\n\d\ \c\r\e\a\t\e\ \a\n\ \a\r\b\i\t\r\a\r\y\ \c\o\m\m\a\n\d\ \e\x\e\c\u\t\i\o\n\ \v\u\l\n\e\r\a\b\i\l\i\t\y\.\
\
\*\*\R\e\s\o\l\u\t\i\o\n\*\*\:\ \A\d\d\e\d\ \a\ \`\/\/\/\ \T\r\u\s\t\ \B\o\u\n\d\a\r\y\`\ \d\o\c\ \c\o\m\m\e\n\t\ \t\o\ \`\f\r\o\m\_\c\o\m\m\a\n\d\_\s\t\r\`\ \e\x\p\l\i\c\i\t\l\y\ \s\t\a\t\i\n\g\ \t\h\a\t\ \o\n\l\y\ \t\r\u\s\t\e\d\ \o\p\e\r\a\t\o\r\ \i\n\p\u\t\ \(\c\o\n\f\i\g\ \f\i\l\e\s\,\ \C\L\I\ \f\l\a\g\s\)\ \s\h\o\u\l\d\ \b\e\ \p\a\s\s\e\d\,\ \a\n\d\ \t\h\a\t\ \u\n\t\r\u\s\t\e\d\ \r\e\m\o\t\e\ \s\t\r\i\n\g\s\ \m\u\s\t\ \n\e\v\e\r\ \b\e\ \p\a\s\s\e\d\.\
\
\*\*\S\t\a\t\u\s\*\*\:\ \✅\ \R\e\s\o\l\v\e\d\
\
\-\-\-\
\
\#\#\#\ \[\E\]\ \E\n\z\y\m\a\t\i\c\ \A\g\i\n\g\ \—\ \E\x\t\e\n\s\i\b\i\l\i\t\y\
\
\>\ \*\D\e\s\i\g\n\i\n\g\ \c\o\d\e\ \t\h\a\t\ \m\a\t\u\r\e\s\ \a\n\d\ \d\e\v\e\l\o\p\s\ \'\U\m\a\m\i\'\ \—\ \s\t\a\b\l\e\ \e\n\o\u\g\h\ \t\o\ \e\x\t\e\n\d\ \w\i\t\h\o\u\t\ \r\e\w\r\i\t\i\n\g\.\*\
\
\*\*\F\i\n\d\i\n\g\*\*\:\ \I\n\ \`\i\n\t\e\r\a\c\t\i\v\e\.\r\s\`\,\ \a\f\t\e\r\ \a\ \u\s\e\r\ \s\e\l\e\c\t\e\d\ \a\ \s\e\r\v\e\r\ \o\r\ \t\o\o\l\ \f\r\o\m\ \t\h\e\ \`\S\e\l\e\c\t\`\ \m\e\n\u\,\ \t\h\e\ \c\o\d\e\ \r\e\c\o\v\e\r\e\d\ \t\h\e\ \o\r\i\g\i\n\a\l\ \n\a\m\e\ \b\y\ \s\p\l\i\t\t\i\n\g\ \t\h\e\ \d\i\s\p\l\a\y\ \s\t\r\i\n\g\ \o\n\ \w\h\i\t\e\s\p\a\c\e\:\
\
\`\`\`\r\u\s\t\
\/\/\ \B\r\i\t\t\l\e\:\ \b\r\e\a\k\s\ \f\o\r\ \a\n\y\ \n\a\m\e\ \c\o\n\t\a\i\n\i\n\g\ \a\ \s\p\a\c\e\
\l\e\t\ \s\e\r\v\e\r\_\n\a\m\e\ \=\ \s\e\l\e\c\t\i\o\n\.\s\p\l\i\t\_\w\h\i\t\e\s\p\a\c\e\(\)\.\n\e\x\t\(\)\.\u\n\w\r\a\p\_\o\r\_\d\e\f\a\u\l\t\(\)\;\
\`\`\`\
\
\S\i\n\c\e\ \t\h\e\ \d\i\s\p\l\a\y\ \s\t\r\i\n\g\ \w\a\s\ \`\"\s\e\r\v\e\r\-\n\a\m\e\ \(\c\o\m\m\a\n\d\)\"\`\,\ \a\n\y\ \s\e\r\v\e\r\ \n\a\m\e\ \c\o\n\t\a\i\n\i\n\g\ \a\ \s\p\a\c\e\ \w\o\u\l\d\ \b\e\ \s\i\l\e\n\t\l\y\ \t\r\u\n\c\a\t\e\d\,\ \c\a\u\s\i\n\g\ \a\ \"\n\o\t\ \f\o\u\n\d\"\ \e\r\r\o\r\ \w\i\t\h\ \n\o\ \c\l\e\a\r\ \c\a\u\s\e\.\
\
\*\*\R\e\s\o\l\u\t\i\o\n\*\*\:\ \R\e\p\l\a\c\e\d\ \t\h\e\ \d\i\s\p\l\a\y\-\s\t\r\i\n\g\ \r\e\v\e\r\s\a\l\ \w\i\t\h\ \a\ \`\(\l\a\b\e\l\,\ \d\a\t\a\)\`\ \t\u\p\l\e\ \a\p\p\r\o\a\c\h\.\ \T\h\e\ \d\i\s\p\l\a\y\ \s\t\r\i\n\g\ \i\s\ \b\u\i\l\t\ \f\r\o\m\ \t\h\e\ \d\a\t\a\ \o\n\c\e\;\ \s\e\l\e\c\t\i\o\n\ \l\o\o\k\s\ \u\p\ \t\h\e\ \o\r\i\g\i\n\a\l\ \d\a\t\a\ \b\y\ \c\o\m\p\a\r\i\n\g\ \t\h\e\ \f\u\l\l\ \l\a\b\e\l\:\
\
\`\`\`\r\u\s\t\
\l\e\t\ \s\e\r\v\e\r\_\e\n\t\r\i\e\s\:\ \V\e\c\<\(\S\t\r\i\n\g\,\ \&\s\t\r\,\ \&\S\e\r\v\e\r\D\e\f\i\n\i\t\i\o\n\)\>\ \=\ \s\e\r\v\e\r\s\
\ \ \ \ \.\i\t\e\r\(\)\
\ \ \ \ \.\m\a\p\(\|\(\n\a\m\e\,\ \d\e\f\,\ \_\)\|\ \(\f\o\r\m\a\t\!\(\"\{\}\ \(\{\}\)\"\,\ \n\a\m\e\,\ \.\.\.\)\,\ \n\a\m\e\.\a\s\_\s\t\r\(\)\,\ \d\e\f\)\)\
\ \ \ \ \.\c\o\l\l\e\c\t\(\)\;\
\/\/\ \A\f\t\e\r\ \s\e\l\e\c\t\i\o\n\:\
\i\f\ \l\e\t\ \S\o\m\e\(\(\_\,\ \n\a\m\e\,\ \d\e\f\)\)\ \=\ \s\e\r\v\e\r\_\e\n\t\r\i\e\s\.\i\t\e\r\(\)\.\f\i\n\d\(\|\(\l\a\b\e\l\,\ \_\,\ \_\)\|\ \*\l\a\b\e\l\ \=\=\ \s\e\l\e\c\t\i\o\n\)\ \{\ \.\.\.\ \}\
\`\`\`\
\
\A\d\d\i\t\i\o\n\a\l\l\y\,\ \`\r\u\n\_\t\o\o\l\_\l\o\o\p\`\ \w\a\s\ \e\x\t\r\a\c\t\e\d\ \f\r\o\m\ \`\r\u\n\_\s\e\r\v\e\r\_\s\e\s\s\i\o\n\`\ \t\o\ \k\e\e\p\ \e\a\c\h\ \f\u\n\c\t\i\o\n\ \f\o\c\u\s\e\d\ \o\n\ \a\ \s\i\n\g\l\e\ \r\e\s\p\o\n\s\i\b\i\l\i\t\y\.\ \S\e\n\t\i\n\e\l\ \s\t\r\i\n\g\s\ \(\`\O\P\T\_\E\X\I\T\`\,\ \`\O\P\T\_\B\A\C\K\`\,\ \`\O\P\T\_\C\U\S\T\O\M\_\C\M\D\`\)\ \w\e\r\e\ \p\r\o\m\o\t\e\d\ \t\o\ \`\c\o\n\s\t\`\ \t\o\ \p\r\e\v\e\n\t\ \m\i\s\m\a\t\c\h\ \b\u\g\s\ \b\e\t\w\e\e\n\ \c\o\n\s\t\r\u\c\t\i\o\n\ \a\n\d\ \c\o\m\p\a\r\i\s\o\n\ \s\i\t\e\s\.\
\
\*\*\S\t\a\t\u\s\*\*\:\ \✅\ \R\e\s\o\l\v\e\d\
\
\-\-\-\
\
\#\#\#\ \[\R\]\ \R\i\g\o\r\o\u\s\ \R\e\f\i\n\e\m\e\n\t\ \—\ \Q\u\a\l\i\t\y\ \V\e\r\i\f\i\c\a\t\i\o\n\
\
\>\ \*\Z\e\r\o\-\S\i\g\n\a\l\ \T\e\s\t\i\n\g\:\ \t\e\s\t\s\ \m\u\s\t\ \f\a\i\l\ \l\o\u\d\l\y\ \a\n\d\ \p\a\s\s\ \s\i\l\e\n\t\l\y\.\*\
\
\*\*\F\i\n\d\i\n\g\*\*\:\ \T\h\e\ \c\o\d\e\b\a\s\e\ \h\a\d\ \z\e\r\o\ \t\e\s\t\s\.\ \T\h\e\ \J\S\O\N\-\R\P\C\ \s\e\r\d\e\ \r\o\u\n\d\-\t\r\i\p\s\ \—\ \t\h\e\ \f\o\u\n\d\a\t\i\o\n\a\l\ \c\o\r\r\e\c\t\n\e\s\s\ \g\u\a\r\a\n\t\e\e\ \o\f\ \t\h\e\ \e\n\t\i\r\e\ \p\r\o\t\o\c\o\l\ \l\a\y\e\r\ \—\ \w\e\r\e\ \c\o\m\p\l\e\t\e\l\y\ \u\n\v\e\r\i\f\i\e\d\.\
\
\*\*\R\e\s\o\l\u\t\i\o\n\*\*\:\ \A\d\d\e\d\ \2\0\ \u\n\i\t\ \t\e\s\t\s\ \a\c\r\o\s\s\ \t\w\o\ \m\o\d\u\l\e\s\:\
\
\*\*\`\s\r\c\/\m\c\p\/\t\y\p\e\s\.\r\s\`\*\*\ \(\1\3\ \t\e\s\t\s\)\:\
\-\ \`\J\s\o\n\R\p\c\R\e\q\u\e\s\t\`\ \s\e\r\i\a\l\i\z\a\t\i\o\n\:\ \v\e\r\s\i\o\n\,\ \p\a\r\a\m\s\ \o\m\i\s\s\i\o\n\,\ \m\e\t\h\o\d\ \r\o\u\n\d\-\t\r\i\p\
\-\ \`\J\s\o\n\R\p\c\N\o\t\i\f\i\c\a\t\i\o\n\`\:\ \n\o\ \i\d\ \f\i\e\l\d\
\-\ \`\J\s\o\n\R\p\c\R\e\s\p\o\n\s\e\`\:\ \r\e\s\u\l\t\ \a\n\d\ \e\r\r\o\r\ \d\e\s\e\r\i\a\l\i\z\a\t\i\o\n\
\-\ \`\T\o\o\l\`\:\ \f\u\l\l\ \M\C\P\ \f\o\r\m\a\t\ \d\e\s\e\r\i\a\l\i\z\a\t\i\o\n\,\ \n\o\-\p\a\r\a\m\e\t\e\r\ \d\e\f\a\u\l\t\s\
\-\ \`\P\r\o\p\e\r\t\y\S\c\h\e\m\a\`\:\ \e\n\u\m\ \v\a\l\u\e\ \d\e\s\e\r\i\a\l\i\z\a\t\i\o\n\
\-\ \`\C\o\n\t\e\n\t\B\l\o\c\k\`\:\ \t\e\x\t\ \r\o\u\n\d\-\t\r\i\p\,\ \u\n\k\n\o\w\n\ \t\y\p\e\ \g\r\a\c\e\f\u\l\ \h\a\n\d\l\i\n\g\
\
\*\*\`\s\r\c\/\c\o\n\f\i\g\/\m\o\d\e\l\s\.\r\s\`\*\*\ \(\7\ \t\e\s\t\s\)\:\
\-\ \`\f\r\o\m\_\c\o\m\m\a\n\d\_\s\t\r\`\:\ \s\i\m\p\l\e\ \c\o\m\m\a\n\d\,\ \m\u\l\t\i\p\l\e\ \a\r\g\s\,\ \q\u\o\t\e\d\ \p\a\t\h\s\ \w\i\t\h\ \s\p\a\c\e\s\,\ \e\m\p\t\y\ \i\n\p\u\t\ \e\r\r\o\r\,\ \w\h\i\t\e\s\p\a\c\e\-\o\n\l\y\ \e\r\r\o\r\
\-\ \`\M\c\p\C\o\n\f\i\g\`\:\ \s\t\a\n\d\a\r\d\ \f\o\r\m\a\t\ \d\e\s\e\r\i\a\l\i\z\a\t\i\o\n\,\ \m\i\s\s\i\n\g\-\k\e\y\ \d\e\f\a\u\l\t\s\
\-\ \`\S\e\r\v\e\r\D\e\f\i\n\i\t\i\o\n\`\:\ \o\p\t\i\o\n\a\l\ \f\i\e\l\d\ \d\e\f\a\u\l\t\i\n\g\
\
\A\l\l\ \2\0\ \t\e\s\t\s\ \p\a\s\s\.\ \`\c\a\r\g\o\ \t\e\s\t\`\ \e\x\i\t\s\ \w\i\t\h\ \c\o\d\e\ \0\.\
\
\*\*\S\t\a\t\u\s\*\*\:\ \✅\ \R\e\s\o\l\v\e\d\
\
\-\-\-\
\
\#\#\ \G\l\o\s\s\a\r\y\ \(\S\.\P\.\I\.\K\.\E\.\R\.\)\
\
\|\ \T\e\r\m\ \|\ \D\e\f\i\n\i\t\i\o\n\ \|\
\|\-\-\-\|\-\-\-\|\
\|\ \*\*\I\k\e\j\i\m\e\-\C\o\d\e\*\*\ \|\ \S\o\f\t\w\a\r\e\ \t\h\a\t\ \w\a\s\ \k\i\l\l\e\d\ \(\c\o\m\p\l\e\t\e\d\)\ \c\l\e\a\n\l\y\ \a\n\d\ \c\a\n\ \b\e\ \a\g\e\d\ \(\m\a\i\n\t\a\i\n\e\d\)\ \f\o\r\ \y\e\a\r\s\ \|\
\|\ \*\*\T\e\c\h\n\i\c\a\l\ \S\e\p\s\i\s\*\*\ \|\ \T\h\e\ \r\o\t\ \t\h\a\t\ \s\e\t\s\ \i\n\ \w\h\e\n\ \a\m\b\i\g\u\i\t\y\,\ \t\i\g\h\t\ \c\o\u\p\l\i\n\g\,\ \a\n\d\ \d\e\a\d\ \c\o\d\e\ \a\r\e\ \l\e\f\t\ \u\n\a\d\d\r\e\s\s\e\d\ \|\
\|\ \*\*\L\a\c\t\i\c\ \A\c\i\d\*\*\ \|\ \T\h\e\ \"\s\o\u\r\"\ \t\a\s\t\e\ \i\n\ \a\ \c\o\d\e\b\a\s\e\ \c\a\u\s\e\d\ \b\y\ \r\u\s\h\i\n\g\,\ \s\t\r\e\s\s\,\ \a\n\d\ \p\o\o\r\ \i\n\i\t\i\a\l\ \r\e\q\u\i\r\e\m\e\n\t\s\ \|\
\|\ \*\*\S\a\n\g\u\i\n\e\o\u\s\ \L\o\g\i\c\*\*\ \|\ \D\e\a\d\ \c\o\d\e\,\ \u\n\u\s\e\d\ \d\e\p\e\n\d\e\n\c\i\e\s\,\ \"\j\u\s\t\-\i\n\-\c\a\s\e\"\ \p\a\r\a\m\e\t\e\r\s\ \—\ \a\l\l\ \d\r\a\i\n\i\n\g\ \v\a\l\u\e\ \|\
\|\ \*\*\N\e\r\v\e\ \P\r\o\p\a\g\a\t\i\o\n\*\*\ \|\ \T\i\g\h\t\ \c\o\u\p\l\i\n\g\ \w\h\e\r\e\ \a\ \c\h\a\n\g\e\ \i\n\ \o\n\e\ \m\o\d\u\l\e\ \f\o\r\c\e\s\ \c\h\a\n\g\e\s\ \i\n\ \u\n\r\e\l\a\t\e\d\ \m\o\d\u\l\e\s\ \|\
\|\ \*\*\T\h\e\ \S\p\i\k\e\*\*\ \|\ \T\h\e\ \d\e\f\i\n\i\t\i\v\e\ \m\o\m\e\n\t\ \l\o\g\i\c\ \i\s\ \s\o\l\v\e\d\,\ \b\e\f\o\r\e\ \t\h\e\ \k\e\y\b\o\a\r\d\ \i\s\ \t\o\u\c\h\e\d\ \|\
\
\-\-\-\
\
\#\#\ \S\e\e\ \A\l\s\o\
\
\-\ \[\A\r\c\h\i\t\e\c\t\u\r\e\ \&\ \M\o\d\u\l\e\ \R\e\f\e\r\e\n\c\e\]\(\.\.\/\r\e\f\e\r\e\n\c\e\/\a\r\c\h\i\t\e\c\t\u\r\e\.\m\d\)\
\-\ \[\T\h\e\ \T\r\a\n\s\p\o\r\t\ \A\b\s\t\r\a\c\t\i\o\n\]\(\t\r\a\n\s\p\o\r\t\-\a\b\s\t\r\a\c\t\i\o\n\.\m\d\)\
\-\ \[\W\h\y\ \M\C\P\-\C\a\l\l\e\r\ \E\x\i\s\t\s\]\(\w\h\y\-\m\c\p\-\c\a\l\l\e\r\.\m\d\)\
\
  },
  "explanation/transport-abstraction.md": {
    title: "The Transport Abstraction",
    category: "explanation",
    content: \#\ \T\h\e\ \T\r\a\n\s\p\o\r\t\ \A\b\s\t\r\a\c\t\i\o\n\
\
\*\*\T\y\p\e\*\*\:\ \E\x\p\l\a\n\a\t\i\o\n\ \|\ \D\i\s\c\u\s\s\e\s\ \t\h\e\ \d\e\s\i\g\n\ \d\e\c\i\s\i\o\n\ \b\e\h\i\n\d\ \t\h\e\ \`\T\r\a\n\s\p\o\r\t\`\ \t\r\a\i\t\.\
\
\-\-\-\
\
\#\#\ \T\h\e\ \C\o\r\e\ \I\n\s\i\g\h\t\
\
\T\h\e\ \M\C\P\ \p\r\o\t\o\c\o\l\ \i\s\ \i\n\d\e\p\e\n\d\e\n\t\ \o\f\ \h\o\w\ \b\y\t\e\s\ \g\e\t\ \f\r\o\m\ \c\l\i\e\n\t\ \t\o\ \s\e\r\v\e\r\.\ \W\h\e\t\h\e\r\ \y\o\u\ \s\p\a\w\n\ \a\ \c\h\i\l\d\ \p\r\o\c\e\s\s\ \a\n\d\ \w\r\i\t\e\ \J\S\O\N\ \t\o\ \i\t\s\ \`\s\t\d\i\n\`\,\ \o\r\ \y\o\u\ \P\O\S\T\ \J\S\O\N\ \t\o\ \a\n\ \H\T\T\P\ \e\n\d\p\o\i\n\t\,\ \o\r\ \y\o\u\ \p\u\s\h\ \m\e\s\s\a\g\e\s\ \o\v\e\r\ \a\ \W\e\b\S\o\c\k\e\t\ \—\ \t\h\e\ \p\r\o\t\o\c\o\l\ \m\e\s\s\a\g\e\s\ \a\r\e\ \i\d\e\n\t\i\c\a\l\.\
\
\`\m\c\p\-\c\a\l\l\e\r\`\ \e\n\c\o\d\e\s\ \t\h\i\s\ \i\n\s\i\g\h\t\ \a\s\ \a\ \t\r\a\i\t\:\
\
\`\`\`\r\u\s\t\
\/\/\ \s\r\c\/\m\c\p\/\t\r\a\n\s\p\o\r\t\.\r\s\
\#\[\a\s\y\n\c\_\t\r\a\i\t\]\
\p\u\b\ \t\r\a\i\t\ \T\r\a\n\s\p\o\r\t\:\ \S\e\n\d\ \+\ \S\y\n\c\ \{\
\ \ \ \ \a\s\y\n\c\ \f\n\ \s\e\n\d\_\r\e\q\u\e\s\t\(\&\m\u\t\ \s\e\l\f\,\ \m\e\t\h\o\d\:\ \&\s\t\r\,\ \p\a\r\a\m\s\:\ \O\p\t\i\o\n\<\V\a\l\u\e\>\)\ \-\>\ \R\e\s\u\l\t\<\V\a\l\u\e\>\;\
\ \ \ \ \a\s\y\n\c\ \f\n\ \s\e\n\d\_\n\o\t\i\f\i\c\a\t\i\o\n\(\&\m\u\t\ \s\e\l\f\,\ \m\e\t\h\o\d\:\ \&\s\t\r\,\ \p\a\r\a\m\s\:\ \O\p\t\i\o\n\<\V\a\l\u\e\>\)\ \-\>\ \R\e\s\u\l\t\<\(\)\>\;\
\ \ \ \ \a\s\y\n\c\ \f\n\ \c\l\o\s\e\(\&\m\u\t\ \s\e\l\f\)\ \-\>\ \R\e\s\u\l\t\<\(\)\>\;\
\}\
\`\`\`\
\
\`\M\c\p\C\l\i\e\n\t\`\ \d\e\p\e\n\d\s\ \o\n\l\y\ \o\n\ \t\h\i\s\ \t\r\a\i\t\ \—\ \n\e\v\e\r\ \o\n\ \a\ \c\o\n\c\r\e\t\e\ \t\r\a\n\s\p\o\r\t\ \t\y\p\e\:\
\
\`\`\`\r\u\s\t\
\p\u\b\ \s\t\r\u\c\t\ \M\c\p\C\l\i\e\n\t\ \{\
\ \ \ \ \t\r\a\n\s\p\o\r\t\:\ \B\o\x\<\d\y\n\ \T\r\a\n\s\p\o\r\t\>\,\
\ \ \ \ \.\.\.\
\}\
\`\`\`\
\
\-\-\-\
\
\#\#\ \W\h\a\t\ \T\h\i\s\ \M\e\a\n\s\ \i\n\ \P\r\a\c\t\i\c\e\
\
\W\h\e\n\ \y\o\u\ \a\d\d\ \a\ \n\e\w\ \t\r\a\n\s\p\o\r\t\ \(\H\T\T\P\,\ \W\e\b\S\o\c\k\e\t\,\ \U\n\i\x\ \s\o\c\k\e\t\)\,\ \y\o\u\:\
\
\1\.\ \C\r\e\a\t\e\ \a\ \n\e\w\ \f\i\l\e\ \(\e\.\g\.\ \`\s\r\c\/\m\c\p\/\h\t\t\p\.\r\s\`\)\
\2\.\ \I\m\p\l\e\m\e\n\t\ \`\T\r\a\n\s\p\o\r\t\`\ \f\o\r\ \y\o\u\r\ \n\e\w\ \t\y\p\e\
\3\.\ \A\d\d\ \a\ \`\c\o\n\n\e\c\t\_\h\t\t\p\`\ \c\o\n\s\t\r\u\c\t\o\r\ \o\n\ \`\M\c\p\C\l\i\e\n\t\`\
\
\T\h\a\t\'\s\ \i\t\.\ \T\h\e\ \p\r\o\t\o\c\o\l\ \l\o\g\i\c\ \—\ \`\i\n\i\t\i\a\l\i\z\e\`\,\ \`\l\i\s\t\_\t\o\o\l\s\`\,\ \`\c\a\l\l\_\t\o\o\l\`\ \—\ \d\o\e\s\n\'\t\ \c\h\a\n\g\e\.\ \T\h\e\ \s\c\h\e\m\a\ \f\o\r\m\ \e\n\g\i\n\e\ \d\o\e\s\n\'\t\ \c\h\a\n\g\e\.\ \T\h\e\ \o\u\t\p\u\t\ \f\o\r\m\a\t\t\e\r\s\ \d\o\n\'\t\ \c\h\a\n\g\e\.\ \T\h\e\ \c\o\m\m\a\n\d\ \h\a\n\d\l\e\r\s\ \o\n\l\y\ \n\e\e\d\ \a\ \o\n\e\-\l\i\n\e\ \b\r\a\n\c\h\ \t\o\ \p\i\c\k\ \t\h\e\ \r\i\g\h\t\ \`\c\o\n\n\e\c\t\_\*\`\ \f\u\n\c\t\i\o\n\.\
\
\T\h\i\s\ \i\s\ \w\h\a\t\ \t\h\e\ \S\.\P\.\I\.\K\.\E\.\R\.\ \m\e\t\h\o\d\o\l\o\g\y\ \c\a\l\l\s\ \*\*\I\s\o\l\a\t\i\o\n\ \o\f\ \N\e\r\v\e\s\*\*\:\ \a\ \c\h\a\n\g\e\ \i\n\ \t\h\e\ \t\r\a\n\s\p\o\r\t\ \l\a\y\e\r\ \c\a\n\n\o\t\ \p\r\o\p\a\g\a\t\e\ \i\n\t\o\ \t\h\e\ \b\u\s\i\n\e\s\s\ \l\o\g\i\c\ \l\a\y\e\r\.\
\
\-\-\-\
\
\#\#\ \W\h\y\ \`\B\o\x\<\d\y\n\ \T\r\a\n\s\p\o\r\t\>\`\ \I\n\s\t\e\a\d\ \o\f\ \G\e\n\e\r\i\c\s\
\
\A\n\ \a\l\t\e\r\n\a\t\i\v\e\ \d\e\s\i\g\n\ \w\o\u\l\d\ \b\e\:\
\
\`\`\`\r\u\s\t\
\p\u\b\ \s\t\r\u\c\t\ \M\c\p\C\l\i\e\n\t\<\T\:\ \T\r\a\n\s\p\o\r\t\>\ \{\
\ \ \ \ \t\r\a\n\s\p\o\r\t\:\ \T\,\
\}\
\`\`\`\
\
\T\h\i\s\ \i\s\ \z\e\r\o\-\c\o\s\t\ \a\t\ \r\u\n\t\i\m\e\ \(\m\o\n\o\m\o\r\p\h\i\z\a\t\i\o\n\)\,\ \b\u\t\ \i\t\ \m\a\k\e\s\ \t\h\e\ \`\M\c\p\C\l\i\e\n\t\`\ \t\y\p\e\ \i\t\s\e\l\f\ \t\r\a\n\s\p\o\r\t\-\a\w\a\r\e\.\ \E\v\e\r\y\ \f\u\n\c\t\i\o\n\ \t\h\a\t\ \a\c\c\e\p\t\s\ \a\ \`\M\c\p\C\l\i\e\n\t\`\ \w\o\u\l\d\ \n\e\e\d\ \a\ \t\y\p\e\ \p\a\r\a\m\e\t\e\r\.\ \T\h\e\ \c\o\m\m\a\n\d\ \h\a\n\d\l\e\r\ \s\i\g\n\a\t\u\r\e\s\ \w\o\u\l\d\ \b\e\c\o\m\e\:\
\
\`\`\`\r\u\s\t\
\p\u\b\ \a\s\y\n\c\ \f\n\ \h\a\n\d\l\e\_\c\a\l\l\<\T\:\ \T\r\a\n\s\p\o\r\t\>\(\c\l\i\e\n\t\:\ \M\c\p\C\l\i\e\n\t\<\T\>\,\ \.\.\.\)\ \{\}\
\`\`\`\
\
\F\o\r\ \a\ \C\L\I\ \t\o\o\l\ \w\h\e\r\e\ \t\h\e\ \t\r\a\n\s\p\o\r\t\ \i\s\ \s\e\l\e\c\t\e\d\ \a\t\ \r\u\n\t\i\m\e\ \b\a\s\e\d\ \o\n\ \c\o\n\f\i\g\,\ \`\B\o\x\<\d\y\n\ \T\r\a\n\s\p\o\r\t\>\`\ \i\s\ \c\l\e\a\n\e\r\ \—\ \t\h\e\ \`\M\c\p\C\l\i\e\n\t\`\ \i\s\ \t\h\e\ \s\a\m\e\ \t\y\p\e\ \r\e\g\a\r\d\l\e\s\s\ \o\f\ \h\o\w\ \i\t\ \w\a\s\ \c\o\n\n\e\c\t\e\d\.\ \T\h\e\ \v\i\r\t\u\a\l\ \d\i\s\p\a\t\c\h\ \o\v\e\r\h\e\a\d\ \i\s\ \n\e\g\l\i\g\i\b\l\e\ \f\o\r\ \a\ \t\o\o\l\ \t\h\a\t\ \m\a\k\e\s\ \a\ \h\a\n\d\f\u\l\ \o\f\ \R\P\C\ \c\a\l\l\s\ \p\e\r\ \s\e\s\s\i\o\n\.\
\
\-\-\-\
\
\#\#\ \T\h\e\ \`\D\r\o\p\`\ \G\u\a\r\a\n\t\e\e\
\
\`\S\t\d\i\o\T\r\a\n\s\p\o\r\t\`\ \i\m\p\l\e\m\e\n\t\s\ \`\D\r\o\p\`\ \t\o\ \e\n\s\u\r\e\ \t\h\e\ \c\h\i\l\d\ \p\r\o\c\e\s\s\ \i\s\ \k\i\l\l\e\d\ \e\v\e\n\ \i\f\ \t\h\e\ \p\r\o\g\r\a\m\ \p\a\n\i\c\s\ \o\r\ \e\x\i\t\s\ \a\b\r\u\p\t\l\y\:\
\
\`\`\`\r\u\s\t\
\i\m\p\l\ \D\r\o\p\ \f\o\r\ \S\t\d\i\o\T\r\a\n\s\p\o\r\t\ \{\
\ \ \ \ \f\n\ \d\r\o\p\(\&\m\u\t\ \s\e\l\f\)\ \{\
\ \ \ \ \ \ \ \ \l\e\t\ \_\ \=\ \s\e\l\f\.\c\h\i\l\d\.\s\t\a\r\t\_\k\i\l\l\(\)\;\
\ \ \ \ \}\
\}\
\`\`\`\
\
\T\h\i\s\ \m\e\a\n\s\ \t\h\e\r\e\ \a\r\e\ \n\o\ \z\o\m\b\i\e\ \M\C\P\ \s\e\r\v\e\r\ \p\r\o\c\e\s\s\e\s\ \l\e\f\t\ \r\u\n\n\i\n\g\ \a\f\t\e\r\ \`\m\c\p\-\c\a\l\l\e\r\`\ \e\x\i\t\s\ \—\ \w\h\e\t\h\e\r\ \c\l\e\a\n\l\y\ \o\r\ \v\i\a\ \a\n\ \e\r\r\o\r\.\ \T\h\e\ \`\c\l\o\s\e\(\)\`\ \m\e\t\h\o\d\ \i\s\ \a\n\ \e\x\p\l\i\c\i\t\ \c\o\o\p\e\r\a\t\i\v\e\ \c\l\o\s\e\;\ \`\D\r\o\p\`\ \i\s\ \t\h\e\ \s\a\f\e\t\y\ \n\e\t\.\
\
\-\-\-\
\
\#\#\ \W\h\y\ \`\a\s\y\n\c\_\t\r\a\i\t\`\?\
\
\R\u\s\t\'\s\ \n\a\t\i\v\e\ \`\a\s\y\n\c\ \f\n\`\ \i\n\ \t\r\a\i\t\s\ \r\e\q\u\i\r\e\s\ \e\v\e\r\y\ \c\a\l\l\e\r\ \t\o\ \k\n\o\w\ \t\h\e\ \c\o\n\c\r\e\t\e\ \t\y\p\e\ \a\t\ \c\o\m\p\i\l\e\ \t\i\m\e\ \(\d\u\e\ \t\o\ \t\h\e\ \`\-\>\ \i\m\p\l\ \F\u\t\u\r\e\`\ \r\e\t\u\r\n\ \t\y\p\e\ \b\e\i\n\g\ \p\a\r\t\ \o\f\ \t\h\e\ \t\r\a\i\t\ \s\i\g\n\a\t\u\r\e\)\.\ \S\i\n\c\e\ \`\M\c\p\C\l\i\e\n\t\`\ \u\s\e\s\ \`\B\o\x\<\d\y\n\ \T\r\a\n\s\p\o\r\t\>\`\,\ \w\e\ \n\e\e\d\ \`\d\y\n\`\-\s\a\f\e\ \a\s\y\n\c\ \m\e\t\h\o\d\s\.\ \T\h\e\ \`\a\s\y\n\c\_\t\r\a\i\t\`\ \c\r\a\t\e\ \(\a\ \p\r\o\c\-\m\a\c\r\o\)\ \d\e\s\u\g\a\r\s\ \a\s\y\n\c\ \m\e\t\h\o\d\s\ \i\n\t\o\ \`\P\i\n\<\B\o\x\<\d\y\n\ \F\u\t\u\r\e\ \+\ \S\e\n\d\>\>\`\ \r\e\t\u\r\n\s\,\ \w\h\i\c\h\ \a\r\e\ \`\d\y\n\`\-\c\o\m\p\a\t\i\b\l\e\.\
\
\W\h\e\n\ \R\u\s\t\'\s\ \a\s\y\n\c\ \t\r\a\i\t\ \s\t\a\b\i\l\i\z\a\t\i\o\n\ \m\a\t\u\r\e\s\,\ \`\a\s\y\n\c\_\t\r\a\i\t\`\ \c\a\n\ \b\e\ \r\e\m\o\v\e\d\ \w\i\t\h\o\u\t\ \c\h\a\n\g\i\n\g\ \t\h\e\ \t\r\a\i\t\ \i\n\t\e\r\f\a\c\e\.\
\
\-\-\-\
\
\#\#\ \S\e\e\ \A\l\s\o\
\
\-\ \[\A\r\c\h\i\t\e\c\t\u\r\e\ \&\ \M\o\d\u\l\e\ \R\e\f\e\r\e\n\c\e\]\(\.\.\/\r\e\f\e\r\e\n\c\e\/\a\r\c\h\i\t\e\c\t\u\r\e\.\m\d\)\
\-\ \[\H\o\w\ \t\o\ \A\d\d\ \a\n\ \H\T\T\P\ \T\r\a\n\s\p\o\r\t\]\(\.\.\/\h\o\w\-\t\o\/\a\d\d\-\h\t\t\p\-\t\r\a\n\s\p\o\r\t\.\m\d\)\
\
  },
  "explanation/why-mcp-caller.md": {
    title: "Why MCP-Caller Exists",
    category: "explanation",
    content: \#\ \W\h\y\ \M\C\P\-\C\a\l\l\e\r\ \E\x\i\s\t\s\
\
\*\*\T\y\p\e\*\*\:\ \E\x\p\l\a\n\a\t\i\o\n\ \|\ \U\n\d\e\r\s\t\a\n\d\i\n\g\-\o\r\i\e\n\t\e\d\.\ \B\u\i\l\d\s\ \t\h\e\ \m\e\n\t\a\l\ \m\o\d\e\l\ \b\e\h\i\n\d\ \t\h\e\ \p\r\o\j\e\c\t\.\
\
\-\-\-\
\
\#\#\ \T\h\e\ \P\r\o\b\l\e\m\
\
\T\h\e\ \M\o\d\e\l\ \C\o\n\t\e\x\t\ \P\r\o\t\o\c\o\l\ \(\M\C\P\)\ \d\e\c\o\u\p\l\e\s\ \*\t\o\o\l\s\ \a\n\d\ \d\a\t\a\ \s\o\u\r\c\e\s\*\ \f\r\o\m\ \*\A\I\ \m\o\d\e\l\s\*\.\ \A\n\ \M\C\P\ \s\e\r\v\e\r\ \e\x\p\o\s\e\s\ \t\o\o\l\s\ \(\f\u\n\c\t\i\o\n\s\ \w\i\t\h\ \t\y\p\e\d\ \s\c\h\e\m\a\s\)\ \t\h\a\t\ \a\n\y\ \c\o\m\p\l\i\a\n\t\ \c\l\i\e\n\t\ \c\a\n\ \d\i\s\c\o\v\e\r\ \a\n\d\ \i\n\v\o\k\e\.\
\
\I\n\ \p\r\a\c\t\i\c\e\,\ \h\o\w\e\v\e\r\,\ \n\e\a\r\l\y\ \a\l\l\ \M\C\P\ \c\l\i\e\n\t\ \i\m\p\l\e\m\e\n\t\a\t\i\o\n\s\ \a\r\e\ \b\u\i\l\t\ \a\r\o\u\n\d\ \a\ \s\i\n\g\l\e\ \a\s\s\u\m\p\t\i\o\n\:\ \*\*\a\n\ \L\L\M\ \i\s\ \o\r\c\h\e\s\t\r\a\t\i\n\g\ \t\h\e\ \c\a\l\l\s\*\*\.\
\
\T\h\i\s\ \c\r\e\a\t\e\s\ \a\ \c\r\i\t\i\c\a\l\ \g\a\p\:\ \w\h\e\n\ \t\h\e\ \L\L\M\ \i\s\ \u\n\a\v\a\i\l\a\b\l\e\ \—\ \d\u\e\ \t\o\ \a\n\ \o\u\t\a\g\e\,\ \r\a\t\e\-\l\i\m\i\t\i\n\g\,\ \c\o\s\t\ \c\o\n\s\t\r\a\i\n\t\s\,\ \a\ \r\e\s\t\r\i\c\t\e\d\ \e\n\v\i\r\o\n\m\e\n\t\,\ \o\r\ \s\i\m\p\l\y\ \b\e\c\a\u\s\e\ \y\o\u\ \d\o\n\'\t\ \n\e\e\d\ \o\n\e\ \—\ \a\l\l\ \y\o\u\r\ \M\C\P\ \s\e\r\v\e\r\s\ \b\e\c\o\m\e\ \u\n\r\e\a\c\h\a\b\l\e\ \t\o\ \h\u\m\a\n\ \o\p\e\r\a\t\o\r\s\.\
\
\Y\o\u\r\ \f\i\l\e\s\y\s\t\e\m\ \s\e\r\v\e\r\,\ \y\o\u\r\ \G\i\t\H\u\b\ \i\n\t\e\g\r\a\t\i\o\n\,\ \y\o\u\r\ \d\a\t\a\b\a\s\e\ \q\u\e\r\y\ \t\o\o\l\ \—\ \a\l\l\ \o\f\ \t\h\e\m\ \e\x\p\o\s\e\ \w\e\l\l\-\d\e\f\i\n\e\d\,\ \m\a\c\h\i\n\e\-\r\e\a\d\a\b\l\e\ \i\n\t\e\r\f\a\c\e\s\.\ \N\o\n\e\ \o\f\ \t\h\e\m\ \*\r\e\q\u\i\r\e\*\ \a\n\ \L\L\M\ \t\o\ \f\u\n\c\t\i\o\n\.\ \T\h\e\ \L\L\M\ \i\s\ \j\u\s\t\ \a\ \r\o\u\t\e\r\.\
\
\-\-\-\
\
\#\#\ \T\h\e\ \A\n\a\l\o\g\y\:\ \c\u\r\l\
\
\`\c\u\r\l\`\ \e\x\i\s\t\s\ \b\e\c\a\u\s\e\ \H\T\T\P\ \i\s\ \a\ \u\s\e\f\u\l\ \p\r\o\t\o\c\o\l\ \t\h\a\t\ \h\u\m\a\n\s\ \a\n\d\ \s\c\r\i\p\t\s\ \n\e\e\d\ \t\o\ \s\p\e\a\k\ \d\i\r\e\c\t\l\y\ \—\ \n\o\t\ \j\u\s\t\ \b\r\o\w\s\e\r\s\ \a\n\d\ \a\p\p\l\i\c\a\t\i\o\n\s\.\
\
\`\m\c\p\-\c\a\l\l\e\r\`\ \e\x\i\s\t\s\ \f\o\r\ \t\h\e\ \s\a\m\e\ \r\e\a\s\o\n\.\ \M\C\P\ \i\s\ \a\ \u\s\e\f\u\l\ \p\r\o\t\o\c\o\l\.\ \T\h\e\ \`\t\o\o\l\s\/\c\a\l\l\`\ \R\P\C\ \i\s\ \a\s\ \s\t\r\a\i\g\h\t\f\o\r\w\a\r\d\ \a\s\ \a\n\ \H\T\T\P\ \P\O\S\T\.\ \T\h\e\r\e\'\s\ \n\o\ \r\e\a\s\o\n\ \a\ \h\u\m\a\n\ \s\h\o\u\l\d\n\'\t\ \b\e\ \a\b\l\e\ \t\o\:\
\
\1\.\ \C\o\n\n\e\c\t\ \t\o\ \a\n\y\ \M\C\P\ \s\e\r\v\e\r\
\2\.\ \D\i\s\c\o\v\e\r\ \w\h\a\t\ \t\o\o\l\s\ \i\t\ \o\f\f\e\r\s\
\3\.\ \F\i\l\l\ \i\n\ \t\h\e\ \p\a\r\a\m\e\t\e\r\s\
\4\.\ \E\x\e\c\u\t\e\ \t\h\e\ \c\a\l\l\
\
\.\.\.\w\i\t\h\o\u\t\ \a\n\ \L\L\M\ \i\n\ \t\h\e\ \l\o\o\p\.\
\
\-\-\-\
\
\#\#\ \W\h\a\t\ \`\m\c\p\-\c\a\l\l\e\r\`\ \I\s\ \N\o\t\
\
\I\t\ \i\s\ \*\*\n\o\t\*\*\ \a\n\ \L\L\M\ \r\e\p\l\a\c\e\m\e\n\t\.\ \I\t\ \d\o\e\s\ \n\o\t\ \r\e\a\s\o\n\ \a\b\o\u\t\ \w\h\i\c\h\ \t\o\o\l\ \t\o\ \c\a\l\l\,\ \c\h\a\i\n\ \m\u\l\t\i\p\l\e\ \t\o\o\l\ \c\a\l\l\s\ \t\o\g\e\t\h\e\r\,\ \o\r\ \i\n\t\e\r\p\r\e\t\ \c\o\m\p\l\e\x\ \n\a\t\u\r\a\l\ \l\a\n\g\u\a\g\e\ \i\n\t\o\ \t\o\o\l\ \a\r\g\u\m\e\n\t\s\.\ \T\h\o\s\e\ \a\r\e\ \t\a\s\k\s\ \f\o\r\ \a\ \m\o\d\e\l\.\
\
\I\t\ \*\*\i\s\*\*\ \a\ \h\a\r\n\e\s\s\ \—\ \t\h\e\ \e\q\u\i\v\a\l\e\n\t\ \o\f\ \a\ \t\e\s\t\ \r\u\n\n\e\r\ \o\r\ \a\ \R\E\P\L\ \—\ \t\h\a\t\ \l\e\t\s\ \y\o\u\ \s\p\e\a\k\ \t\h\e\ \M\C\P\ \p\r\o\t\o\c\o\l\ \d\i\r\e\c\t\l\y\ \w\h\e\n\ \y\o\u\ \w\a\n\t\ \t\o\.\
\
\-\-\-\
\
\#\#\ \D\e\s\i\g\n\ \P\h\i\l\o\s\o\p\h\y\
\
\*\*\M\i\n\i\m\a\l\ \s\u\r\f\a\c\e\ \a\r\e\a\*\*\:\ \T\h\e\ \b\i\n\a\r\y\ \d\o\e\s\ \o\n\e\ \t\h\i\n\g\ \—\ \c\o\n\n\e\c\t\,\ \d\i\s\c\o\v\e\r\,\ \i\n\v\o\k\e\,\ \d\i\s\p\l\a\y\.\ \I\t\ \h\a\s\ \n\o\ \p\e\r\s\i\s\t\e\n\t\ \s\t\a\t\e\,\ \n\o\ \d\a\e\m\o\n\,\ \n\o\ \b\a\c\k\g\r\o\u\n\d\ \s\e\r\v\i\c\e\.\
\
\*\*\S\t\d\i\o\ \f\i\r\s\t\*\*\:\ \T\h\e\ \M\C\P\ \s\t\d\i\o\ \t\r\a\n\s\p\o\r\t\ \i\s\ \t\h\e\ \s\t\a\n\d\a\r\d\ \f\o\r\ \l\o\c\a\l\ \s\e\r\v\e\r\s\ \a\n\d\ \t\h\e\ \m\o\s\t\ \u\n\i\v\e\r\s\a\l\l\y\ \s\u\p\p\o\r\t\e\d\.\ \`\m\c\p\-\c\a\l\l\e\r\`\ \o\p\t\i\m\i\z\e\s\ \f\o\r\ \t\h\i\s\ \t\r\a\n\s\p\o\r\t\ \w\i\t\h\ \a\ \c\l\e\a\n\ \i\m\p\l\e\m\e\n\t\a\t\i\o\n\ \t\h\a\t\ \h\a\n\d\l\e\s\ \l\i\n\e\-\f\r\a\m\e\d\ \J\S\O\N\-\R\P\C\ \o\v\e\r\ \c\h\i\l\d\ \p\r\o\c\e\s\s\ \I\/\O\.\
\
\*\*\D\u\a\l\ \i\n\t\e\r\f\a\c\e\*\*\:\ \T\h\e\ \i\n\t\e\r\a\c\t\i\v\e\ \T\U\I\ \w\i\z\a\r\d\ \e\x\i\s\t\s\ \f\o\r\ \h\u\m\a\n\s\ \e\x\p\l\o\r\i\n\g\ \n\e\w\ \s\e\r\v\e\r\s\.\ \T\h\e\ \s\c\r\i\p\t\a\b\l\e\ \`\-\-\j\s\o\n\`\/\`\-\-\n\o\n\-\i\n\t\e\r\a\c\t\i\v\e\`\ \f\l\a\g\s\ \e\x\i\s\t\ \f\o\r\ \a\u\t\o\m\a\t\i\o\n\ \p\i\p\e\l\i\n\e\s\.\ \B\o\t\h\ \a\r\e\ \f\i\r\s\t\-\c\l\a\s\s\.\
\
\*\*\Z\e\r\o\ \E\n\t\r\o\p\y\*\*\ \(\s\e\e\ \[\S\.\P\.\I\.\K\.\E\.\R\.\ \A\D\R\]\(\s\p\i\k\e\r\-\a\d\r\.\m\d\)\)\:\ \T\h\e\ \c\o\d\e\b\a\s\e\ \i\s\ \d\e\s\i\g\n\e\d\ \t\o\ \a\v\o\i\d\ \T\e\c\h\n\i\c\a\l\ \D\e\b\t\ \a\t\ \c\o\m\m\i\t\ \t\i\m\e\.\ \E\a\c\h\ \m\o\d\u\l\e\ \h\a\s\ \o\n\e\ \r\e\s\p\o\n\s\i\b\i\l\i\t\y\.\ \E\x\t\e\n\s\i\o\n\ \h\a\p\p\e\n\s\ \b\y\ \a\d\d\i\t\i\o\n\,\ \n\o\t\ \m\u\t\a\t\i\o\n\.\
\
\-\-\-\
\
\#\#\ \W\h\e\n\ \t\o\ \U\s\e\ \`\m\c\p\-\c\a\l\l\e\r\`\
\
\|\ \S\c\e\n\a\r\i\o\ \|\ \U\s\e\ \`\m\c\p\-\c\a\l\l\e\r\`\?\ \|\
\|\-\-\-\|\-\-\-\|\
\|\ \L\L\M\ \i\s\ \d\o\w\n\,\ \n\e\e\d\ \t\o\ \m\a\n\u\a\l\l\y\ \i\n\v\o\k\e\ \a\ \t\o\o\l\ \|\ \✅\ \Y\e\s\ \|\
\|\ \D\e\b\u\g\g\i\n\g\ \w\h\y\ \a\n\ \M\C\P\ \s\e\r\v\e\r\'\s\ \t\o\o\l\ \r\e\t\u\r\n\s\ \u\n\e\x\p\e\c\t\e\d\ \r\e\s\u\l\t\s\ \|\ \✅\ \Y\e\s\ \|\
\|\ \S\c\r\i\p\t\i\n\g\ \r\e\p\e\a\t\e\d\ \t\o\o\l\ \c\a\l\l\s\ \i\n\ \C\I\/\C\D\ \|\ \✅\ \Y\e\s\ \|\
\|\ \E\x\p\l\o\r\i\n\g\ \a\ \n\e\w\ \M\C\P\ \s\e\r\v\e\r\'\s\ \c\a\p\a\b\i\l\i\t\i\e\s\ \|\ \✅\ \Y\e\s\ \|\
\|\ \C\h\a\i\n\i\n\g\ \1\0\ \t\o\o\l\ \c\a\l\l\s\ \b\a\s\e\d\ \o\n\ \L\L\M\ \r\e\a\s\o\n\i\n\g\ \|\ \❌\ \U\s\e\ \a\n\ \L\L\M\ \c\l\i\e\n\t\ \|\
\|\ \N\a\t\u\r\a\l\ \l\a\n\g\u\a\g\e\ \→\ \t\o\o\l\ \a\r\g\u\m\e\n\t\ \m\a\p\p\i\n\g\ \|\ \❌\ \U\s\e\ \a\n\ \L\L\M\ \c\l\i\e\n\t\ \|\
\
\-\-\-\
\
\#\#\ \S\e\e\ \A\l\s\o\
\
\-\ \[\G\e\t\t\i\n\g\ \S\t\a\r\t\e\d\ \T\u\t\o\r\i\a\l\]\(\.\.\/\t\u\t\o\r\i\a\l\s\/\g\e\t\t\i\n\g\-\s\t\a\r\t\e\d\.\m\d\)\
\-\ \[\T\h\e\ \T\r\a\n\s\p\o\r\t\ \A\b\s\t\r\a\c\t\i\o\n\]\(\t\r\a\n\s\p\o\r\t\-\a\b\s\t\r\a\c\t\i\o\n\.\m\d\)\
\-\ \[\S\.\P\.\I\.\K\.\E\.\R\.\ \A\r\c\h\i\t\e\c\t\u\r\e\ \D\e\c\i\s\i\o\n\ \R\e\c\o\r\d\]\(\s\p\i\k\e\r\-\a\d\r\.\m\d\)\
\
  },
};
