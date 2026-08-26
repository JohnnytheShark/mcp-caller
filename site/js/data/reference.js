export const REFERENCE_DATA = {
  "reference/architecture.md": {
    title: "Architecture & Module Reference",
    category: "reference",
    content: \#\ \A\r\c\h\i\t\e\c\t\u\r\e\ \&\ \M\o\d\u\l\e\ \R\e\f\e\r\e\n\c\e\
\
\*\*\T\y\p\e\*\*\:\ \R\e\f\e\r\e\n\c\e\ \|\ \A\c\c\u\r\a\t\e\ \d\e\s\c\r\i\p\t\i\o\n\ \o\f\ \t\h\e\ \s\o\u\r\c\e\ \l\a\y\o\u\t\,\ \m\o\d\u\l\e\ \r\e\s\p\o\n\s\i\b\i\l\i\t\i\e\s\,\ \a\n\d\ \e\x\t\e\n\s\i\o\n\ \p\o\i\n\t\s\.\
\
\-\-\-\
\
\#\#\ \D\i\r\e\c\t\o\r\y\ \S\t\r\u\c\t\u\r\e\
\
\`\`\`\
\s\r\c\/\
\├\─\─\ \m\a\i\n\.\r\s\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \#\ \B\i\n\a\r\y\ \e\n\t\r\y\p\o\i\n\t\
\├\─\─\ \c\o\n\f\i\g\/\
\│\ \ \ \├\─\─\ \m\o\d\.\r\s\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \#\ \C\o\n\f\i\g\M\a\n\a\g\e\r\:\ \d\i\s\c\o\v\e\r\y\,\ \l\o\a\d\i\n\g\,\ \m\e\r\g\i\n\g\
\│\ \ \ \└\─\─\ \m\o\d\e\l\s\.\r\s\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \#\ \S\e\r\v\e\r\D\e\f\i\n\i\t\i\o\n\,\ \M\c\p\C\o\n\f\i\g\ \(\s\e\r\d\e\ \t\y\p\e\s\ \+\ \t\e\s\t\s\)\
\├\─\─\ \m\c\p\/\
\│\ \ \ \├\─\─\ \m\o\d\.\r\s\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \#\ \M\o\d\u\l\e\ \r\e\-\e\x\p\o\r\t\s\
\│\ \ \ \├\─\─\ \t\y\p\e\s\.\r\s\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \#\ \J\S\O\N\-\R\P\C\ \2\.\0\ \&\ \M\C\P\ \p\r\o\t\o\c\o\l\ \t\y\p\e\s\ \(\+\ \u\n\i\t\ \t\e\s\t\s\)\
\│\ \ \ \├\─\─\ \t\r\a\n\s\p\o\r\t\.\r\s\ \ \ \ \ \ \ \ \ \ \ \ \#\ \T\r\a\n\s\p\o\r\t\ \a\s\y\n\c\ \t\r\a\i\t\
\│\ \ \ \├\─\─\ \s\t\d\i\o\.\r\s\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \#\ \S\t\d\i\o\T\r\a\n\s\p\o\r\t\:\ \c\h\i\l\d\ \p\r\o\c\e\s\s\ \+\ \l\i\n\e\-\f\r\a\m\e\d\ \I\/\O\
\│\ \ \ \└\─\─\ \c\l\i\e\n\t\.\r\s\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \#\ \M\c\p\C\l\i\e\n\t\:\ \h\i\g\h\-\l\e\v\e\l\ \p\r\o\t\o\c\o\l\ \A\P\I\
\├\─\─\ \p\r\o\m\p\t\/\
\│\ \ \ \├\─\─\ \m\o\d\.\r\s\
\│\ \ \ \└\─\─\ \s\c\h\e\m\a\_\f\o\r\m\.\r\s\ \ \ \ \ \ \ \ \ \ \#\ \S\c\h\e\m\a\F\o\r\m\:\ \J\S\O\N\ \S\c\h\e\m\a\ \→\ \t\e\r\m\i\n\a\l\ \p\r\o\m\p\t\ \e\n\g\i\n\e\
\├\─\─\ \u\i\/\
\│\ \ \ \├\─\─\ \m\o\d\.\r\s\
\│\ \ \ \└\─\─\ \o\u\t\p\u\t\.\r\s\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \#\ \O\u\t\p\u\t\:\ \t\a\b\l\e\s\,\ \r\e\s\u\l\t\ \b\l\o\c\k\s\,\ \b\a\d\g\e\s\
\└\─\─\ \c\o\m\m\a\n\d\s\/\
\ \ \ \ \├\─\─\ \m\o\d\.\r\s\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \#\ \r\e\s\o\l\v\e\_\s\e\r\v\e\r\_\d\e\f\i\n\i\t\i\o\n\(\)\ \s\h\a\r\e\d\ \f\u\n\c\t\i\o\n\
\ \ \ \ \├\─\─\ \i\n\t\e\r\a\c\t\i\v\e\.\r\s\ \ \ \ \ \ \ \ \ \ \#\ \h\a\n\d\l\e\_\i\n\t\e\r\a\c\t\i\v\e\,\ \r\u\n\_\s\e\r\v\e\r\_\s\e\s\s\i\o\n\,\ \r\u\n\_\t\o\o\l\_\l\o\o\p\
\ \ \ \ \├\─\─\ \l\i\s\t\.\r\s\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \#\ \h\a\n\d\l\e\_\l\i\s\t\
\ \ \ \ \├\─\─\ \i\n\f\o\.\r\s\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \#\ \h\a\n\d\l\e\_\i\n\f\o\
\ \ \ \ \├\─\─\ \c\a\l\l\.\r\s\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \#\ \h\a\n\d\l\e\_\c\a\l\l\
\ \ \ \ \└\─\─\ \s\e\r\v\e\r\s\.\r\s\ \ \ \ \ \ \ \ \ \ \ \ \ \ \#\ \h\a\n\d\l\e\_\s\e\r\v\e\r\s\
\`\`\`\
\
\-\-\-\
\
\#\#\ \M\o\d\u\l\e\ \R\e\s\p\o\n\s\i\b\i\l\i\t\i\e\s\
\
\#\#\#\ \`\m\a\i\n\.\r\s\`\
\-\ \P\a\r\s\e\s\ \t\h\e\ \C\L\I\ \u\s\i\n\g\ \`\c\l\a\p\`\ \d\e\r\i\v\e\ \m\a\c\r\o\s\
\-\ \R\o\u\t\e\s\ \s\u\b\c\o\m\m\a\n\d\ \v\a\r\i\a\n\t\s\ \t\o\ \t\h\e\i\r\ \h\a\n\d\l\e\r\ \f\u\n\c\t\i\o\n\s\
\-\ \P\r\o\p\a\g\a\t\e\s\ \`\R\e\s\u\l\t\`\ \e\r\r\o\r\s\ \t\o\ \s\t\d\e\r\r\ \w\i\t\h\ \e\x\i\t\ \c\o\d\e\ \1\
\-\ \*\*\N\o\ \b\u\s\i\n\e\s\s\ \l\o\g\i\c\ \l\i\v\e\s\ \h\e\r\e\*\*\
\
\#\#\#\ \`\c\o\n\f\i\g\/\`\
\
\#\#\#\#\ \`\C\o\n\f\i\g\M\a\n\a\g\e\r\`\ \(\`\m\o\d\.\r\s\`\)\
\-\ \`\l\o\a\d\_\a\l\l\(\c\u\s\t\o\m\_\c\o\n\f\i\g\)\`\ \→\ \d\i\s\c\o\v\e\r\s\ \a\n\d\ \m\e\r\g\e\s\ \s\e\r\v\e\r\s\ \f\r\o\m\ \a\l\l\ \c\o\n\f\i\g\ \s\o\u\r\c\e\s\
\-\ \`\m\e\r\g\e\_\f\r\o\m\_\f\i\l\e\(\p\a\t\h\,\ \m\a\p\)\`\ \→\ \p\a\r\s\e\s\ \o\n\e\ \c\o\n\f\i\g\ \f\i\l\e\ \(\h\a\n\d\l\e\s\ \b\o\t\h\ \`\m\c\p\S\e\r\v\e\r\s\`\-\w\r\a\p\p\e\d\ \a\n\d\ \f\l\a\t\ \f\o\r\m\a\t\s\)\;\ \u\s\e\s\ \f\i\r\s\t\-\w\i\n\s\ \d\e\d\u\p\l\i\c\a\t\i\o\n\
\-\ \`\g\e\t\_\s\e\r\v\e\r\(\n\a\m\e\)\`\ \→\ \l\o\o\k\ \u\p\ \a\ \`\S\e\r\v\e\r\D\e\f\i\n\i\t\i\o\n\`\ \b\y\ \n\a\m\e\
\-\ \`\l\i\s\t\_\s\e\r\v\e\r\s\(\)\`\ \→\ \s\o\r\t\e\d\ \l\i\s\t\ \o\f\ \`\(\n\a\m\e\,\ \d\e\f\,\ \s\o\u\r\c\e\_\p\a\t\h\)\`\ \t\u\p\l\e\s\
\-\ \S\t\a\t\i\c\ \h\e\l\p\e\r\s\:\ \`\g\e\t\_\c\l\a\u\d\e\_\c\o\n\f\i\g\_\p\a\t\h\(\)\`\,\ \`\g\e\t\_\g\e\m\i\n\i\_\c\o\n\f\i\g\_\p\a\t\h\(\)\`\
\
\#\#\#\#\ \`\S\e\r\v\e\r\D\e\f\i\n\i\t\i\o\n\`\ \+\ \`\M\c\p\C\o\n\f\i\g\`\ \(\`\m\o\d\e\l\s\.\r\s\`\)\
\-\ \P\u\r\e\ \d\a\t\a\ \t\y\p\e\s\ \w\i\t\h\ \`\s\e\r\d\e\`\ \d\e\r\i\v\e\s\
\-\ \`\S\e\r\v\e\r\D\e\f\i\n\i\t\i\o\n\:\:\f\r\o\m\_\c\o\m\m\a\n\d\_\s\t\r\(\c\m\d\_\l\i\n\e\)\`\ \—\ \P\O\S\I\X\ \s\h\e\l\l\-\w\o\r\d\ \p\a\r\s\i\n\g\;\ \d\o\c\u\m\e\n\t\e\d\ \t\r\u\s\t\ \b\o\u\n\d\a\r\y\
\
\#\#\#\ \`\m\c\p\/\`\
\
\#\#\#\#\ \`\T\r\a\n\s\p\o\r\t\`\ \t\r\a\i\t\ \(\`\t\r\a\n\s\p\o\r\t\.\r\s\`\)\
\`\`\`\r\u\s\t\
\#\[\a\s\y\n\c\_\t\r\a\i\t\]\
\p\u\b\ \t\r\a\i\t\ \T\r\a\n\s\p\o\r\t\:\ \S\e\n\d\ \+\ \S\y\n\c\ \{\
\ \ \ \ \a\s\y\n\c\ \f\n\ \s\e\n\d\_\r\e\q\u\e\s\t\(\&\m\u\t\ \s\e\l\f\,\ \m\e\t\h\o\d\:\ \&\s\t\r\,\ \p\a\r\a\m\s\:\ \O\p\t\i\o\n\<\V\a\l\u\e\>\)\ \-\>\ \R\e\s\u\l\t\<\V\a\l\u\e\>\;\
\ \ \ \ \a\s\y\n\c\ \f\n\ \s\e\n\d\_\n\o\t\i\f\i\c\a\t\i\o\n\(\&\m\u\t\ \s\e\l\f\,\ \m\e\t\h\o\d\:\ \&\s\t\r\,\ \p\a\r\a\m\s\:\ \O\p\t\i\o\n\<\V\a\l\u\e\>\)\ \-\>\ \R\e\s\u\l\t\<\(\)\>\;\
\ \ \ \ \a\s\y\n\c\ \f\n\ \c\l\o\s\e\(\&\m\u\t\ \s\e\l\f\)\ \-\>\ \R\e\s\u\l\t\<\(\)\>\;\
\}\
\`\`\`\
\A\l\l\ \t\r\a\n\s\p\o\r\t\ \i\m\p\l\e\m\e\n\t\a\t\i\o\n\s\ \d\e\p\e\n\d\ \*\*\o\n\l\y\*\*\ \o\n\ \t\h\i\s\ \t\r\a\i\t\.\ \`\M\c\p\C\l\i\e\n\t\`\ \i\s\ \f\u\l\l\y\ \d\e\c\o\u\p\l\e\d\ \f\r\o\m\ \t\r\a\n\s\p\o\r\t\ \m\e\c\h\a\n\i\c\s\.\
\
\#\#\#\#\ \`\S\t\d\i\o\T\r\a\n\s\p\o\r\t\`\ \(\`\s\t\d\i\o\.\r\s\`\)\
\-\ \S\p\a\w\n\s\ \a\ \c\h\i\l\d\ \p\r\o\c\e\s\s\ \w\i\t\h\ \`\t\o\k\i\o\:\:\p\r\o\c\e\s\s\:\:\C\o\m\m\a\n\d\`\
\-\ \H\a\n\d\l\e\s\ \W\i\n\d\o\w\s\ \`\.\c\m\d\`\/\`\.\b\a\t\`\ \v\i\a\ \`\c\m\d\.\e\x\e\ \/\C\`\
\-\ \R\e\a\d\s\ \l\i\n\e\-\f\r\a\m\e\d\ \J\S\O\N\ \f\r\o\m\ \`\s\t\d\o\u\t\`\ \v\i\a\ \`\A\s\y\n\c\B\u\f\R\e\a\d\E\x\t\`\
\-\ \M\a\t\c\h\e\s\ \r\e\s\p\o\n\s\e\s\ \b\y\ \`\i\d\`\ \(\i\g\n\o\r\e\s\ \n\o\t\i\f\i\c\a\t\i\o\n\s\ \a\n\d\ \n\o\n\-\J\S\O\N\ \l\i\n\e\s\ \f\r\o\m\ \t\h\e\ \s\e\r\v\e\r\)\
\-\ \`\D\r\o\p\`\ \i\m\p\l\ \e\n\s\u\r\e\s\ \t\h\e\ \c\h\i\l\d\ \i\s\ \k\i\l\l\e\d\ \e\v\e\n\ \o\n\ \p\a\n\i\c\
\
\#\#\#\#\ \`\M\c\p\C\l\i\e\n\t\`\ \(\`\c\l\i\e\n\t\.\r\s\`\)\
\-\ \`\c\o\n\n\e\c\t\_\s\t\d\i\o\(\c\o\m\m\a\n\d\,\ \a\r\g\s\,\ \e\n\v\)\`\ \—\ \s\p\a\w\n\s\ \t\r\a\n\s\p\o\r\t\,\ \r\u\n\s\ \i\n\i\t\i\a\l\i\z\e\ \h\a\n\d\s\h\a\k\e\
\-\ \`\i\n\i\t\i\a\l\i\z\e\(\)\`\ \—\ \s\e\n\d\s\ \`\i\n\i\t\i\a\l\i\z\e\`\,\ \r\e\c\e\i\v\e\s\ \`\I\n\i\t\i\a\l\i\z\e\R\e\s\u\l\t\`\,\ \s\e\n\d\s\ \`\n\o\t\i\f\i\c\a\t\i\o\n\s\/\i\n\i\t\i\a\l\i\z\e\d\`\
\-\ \`\l\i\s\t\_\t\o\o\l\s\(\)\`\ \—\ \p\a\g\i\n\a\t\e\s\ \t\h\r\o\u\g\h\ \`\t\o\o\l\s\/\l\i\s\t\`\ \c\a\l\l\s\,\ \c\o\l\l\e\c\t\s\ \a\l\l\ \t\o\o\l\s\
\-\ \`\c\a\l\l\_\t\o\o\l\(\n\a\m\e\,\ \a\r\g\u\m\e\n\t\s\)\`\ \—\ \s\e\n\d\s\ \`\t\o\o\l\s\/\c\a\l\l\`\,\ \r\e\t\u\r\n\s\ \`\C\a\l\l\T\o\o\l\R\e\s\u\l\t\`\
\-\ \`\s\e\r\v\e\r\_\i\n\f\o\(\)\`\,\ \`\i\n\s\t\r\u\c\t\i\o\n\s\(\)\`\ \—\ \a\c\c\e\s\s\o\r\s\ \f\o\r\ \d\a\t\a\ \f\r\o\m\ \`\I\n\i\t\i\a\l\i\z\e\R\e\s\u\l\t\`\
\
\#\#\#\#\ \T\y\p\e\s\ \(\`\t\y\p\e\s\.\r\s\`\)\
\A\l\l\ \J\S\O\N\-\R\P\C\ \2\.\0\ \a\n\d\ \M\C\P\ \p\r\o\t\o\c\o\l\ \s\t\r\u\c\t\s\ \w\i\t\h\ \`\s\e\r\d\e\`\ \d\e\r\i\v\e\s\.\ \I\n\c\l\u\d\e\s\ \`\#\[\s\e\r\d\e\(\o\t\h\e\r\)\]\`\ \o\n\ \`\C\o\n\t\e\n\t\B\l\o\c\k\:\:\U\n\k\n\o\w\n\`\ \t\o\ \h\a\n\d\l\e\ \f\u\t\u\r\e\ \c\o\n\t\e\n\t\ \t\y\p\e\s\ \g\r\a\c\e\f\u\l\l\y\.\
\
\#\#\#\ \`\p\r\o\m\p\t\/\`\
\
\#\#\#\#\ \`\S\c\h\e\m\a\F\o\r\m\`\ \(\`\s\c\h\e\m\a\_\f\o\r\m\.\r\s\`\)\
\-\ \`\p\r\o\m\p\t\_\a\r\g\u\m\e\n\t\s\(\t\o\o\l\,\ \p\r\e\f\i\l\l\e\d\)\`\ \—\ \m\a\i\n\ \e\n\t\r\y\ \p\o\i\n\t\;\ \i\t\e\r\a\t\e\s\ \o\v\e\r\ \t\h\e\ \t\o\o\l\'\s\ \`\i\n\p\u\t\S\c\h\e\m\a\.\p\r\o\p\e\r\t\i\e\s\`\,\ \s\o\r\t\s\ \r\e\q\u\i\r\e\d\ \f\i\e\l\d\s\ \f\i\r\s\t\,\ \d\i\s\p\a\t\c\h\e\s\ \t\o\ \t\y\p\e\-\s\p\e\c\i\f\i\c\ \p\r\o\m\p\t\s\
\-\ \P\e\r\-\t\y\p\e\ \p\r\o\m\p\t\s\:\ \`\p\r\o\m\p\t\_\s\t\r\i\n\g\`\,\ \`\p\r\o\m\p\t\_\i\n\t\e\g\e\r\`\,\ \`\p\r\o\m\p\t\_\n\u\m\b\e\r\`\,\ \`\p\r\o\m\p\t\_\b\o\o\l\e\a\n\`\,\ \`\p\r\o\m\p\t\_\e\n\u\m\`\,\ \`\p\r\o\m\p\t\_\a\r\r\a\y\`\,\ \`\p\r\o\m\p\t\_\o\b\j\e\c\t\`\
\-\ \A\l\l\ \p\r\o\m\p\t\s\ \i\n\c\l\u\d\e\ \i\n\l\i\n\e\ \v\a\l\i\d\a\t\i\o\n\ \a\n\d\ \u\s\e\ \`\s\c\h\e\m\a\.\d\e\f\a\u\l\t\`\ \v\a\l\u\e\s\ \a\s\ \p\r\e\f\i\l\l\s\
\-\ \R\e\t\u\r\n\s\ \`\O\p\t\i\o\n\<\V\a\l\u\e\>\`\ \—\ \`\N\o\n\e\`\ \m\e\a\n\s\ \t\h\e\ \u\s\e\r\ \c\a\n\c\e\l\l\e\d\
\
\#\#\#\ \`\u\i\/\`\
\
\#\#\#\#\ \`\O\u\t\p\u\t\`\ \(\`\o\u\t\p\u\t\.\r\s\`\)\
\-\ \`\p\r\i\n\t\_\b\a\n\n\e\r\(\)\`\ \—\ \A\S\C\I\I\ \h\e\a\d\e\r\ \f\o\r\ \i\n\t\e\r\a\c\t\i\v\e\ \m\o\d\e\
\-\ \`\p\r\i\n\t\_\s\e\r\v\e\r\s\_\t\a\b\l\e\(\s\e\r\v\e\r\s\)\`\ \—\ \`\c\o\m\f\y\-\t\a\b\l\e\`\ \g\r\i\d\ \o\f\ \d\i\s\c\o\v\e\r\e\d\ \s\e\r\v\e\r\s\
\-\ \`\p\r\i\n\t\_\t\o\o\l\s\_\t\a\b\l\e\(\t\o\o\l\s\)\`\ \—\ \`\c\o\m\f\y\-\t\a\b\l\e\`\ \g\r\i\d\ \o\f\ \t\o\o\l\ \n\a\m\e\s\,\ \d\e\s\c\r\i\p\t\i\o\n\s\,\ \p\a\r\a\m\e\t\e\r\s\
\-\ \`\p\r\i\n\t\_\t\o\o\l\_\i\n\f\o\(\t\o\o\l\)\`\ \—\ \d\e\t\a\i\l\e\d\ \s\i\n\g\l\e\-\t\o\o\l\ \p\a\r\a\m\e\t\e\r\ \l\i\s\t\i\n\g\
\-\ \`\p\r\i\n\t\_\c\a\l\l\_\r\e\s\u\l\t\(\r\e\s\u\l\t\,\ \d\u\r\a\t\i\o\n\)\`\ \—\ \s\u\c\c\e\s\s\/\e\r\r\o\r\ \b\a\d\g\e\,\ \c\o\n\t\e\n\t\ \b\l\o\c\k\s\,\ \e\x\e\c\u\t\i\o\n\ \t\i\m\e\
\-\ \`\p\r\i\n\t\_\r\a\w\_\j\s\o\n\(\v\a\l\)\`\ \—\ \p\r\e\t\t\y\-\p\r\i\n\t\e\d\ \J\S\O\N\ \f\o\r\ \`\-\-\j\s\o\n\`\ \m\o\d\e\
\
\#\#\#\ \`\c\o\m\m\a\n\d\s\/\`\
\
\#\#\#\#\ \`\r\e\s\o\l\v\e\_\s\e\r\v\e\r\_\d\e\f\i\n\i\t\i\o\n\`\ \(\`\m\o\d\.\r\s\`\)\
\S\i\n\g\l\e\ \s\h\a\r\e\d\ \f\u\n\c\t\i\o\n\ \r\e\s\o\l\v\i\n\g\ \t\h\e\ \`\(\s\e\r\v\e\r\_\n\a\m\e\,\ \c\m\d\_\o\v\e\r\r\i\d\e\,\ \c\o\n\f\i\g\)\`\ \→\ \`\S\e\r\v\e\r\D\e\f\i\n\i\t\i\o\n\`\ \r\o\u\t\i\n\g\ \f\o\r\ \a\l\l\ \c\o\m\m\a\n\d\ \h\a\n\d\l\e\r\s\.\ \E\m\i\t\s\ \a\ \w\a\r\n\i\n\g\ \w\h\e\n\ \b\o\t\h\ \s\e\r\v\e\r\ \n\a\m\e\ \a\n\d\ \`\-\-\c\m\d\`\ \a\r\e\ \p\r\o\v\i\d\e\d\.\
\
\#\#\#\#\ \C\o\m\m\a\n\d\ \h\a\n\d\l\e\r\s\
\E\a\c\h\ \h\a\n\d\l\e\r\ \f\o\l\l\o\w\s\ \t\h\e\ \s\a\m\e\ \p\a\t\t\e\r\n\:\
\1\.\ \C\a\l\l\ \`\r\e\s\o\l\v\e\_\s\e\r\v\e\r\_\d\e\f\i\n\i\t\i\o\n\`\
\2\.\ \E\x\t\r\a\c\t\ \`\c\o\m\m\a\n\d\`\ \f\r\o\m\ \t\h\e\ \d\e\f\i\n\i\t\i\o\n\
\3\.\ \C\o\n\n\e\c\t\ \v\i\a\ \`\M\c\p\C\l\i\e\n\t\:\:\c\o\n\n\e\c\t\_\s\t\d\i\o\`\
\4\.\ \E\x\e\c\u\t\e\ \t\h\e\ \r\e\l\e\v\a\n\t\ \p\r\o\t\o\c\o\l\ \o\p\e\r\a\t\i\o\n\
\5\.\ \R\e\n\d\e\r\ \v\i\a\ \`\O\u\t\p\u\t\`\ \(\o\r\ \r\a\w\ \J\S\O\N\ \i\f\ \`\-\-\j\s\o\n\`\)\
\6\.\ \C\l\o\s\e\ \t\h\e\ \c\l\i\e\n\t\
\
\-\-\-\
\
\#\#\ \E\x\t\e\n\s\i\o\n\ \P\o\i\n\t\s\
\
\|\ \G\o\a\l\ \|\ \W\h\a\t\ \t\o\ \d\o\ \|\
\|\-\-\-\|\-\-\-\|\
\|\ \A\d\d\ \a\ \n\e\w\ \t\r\a\n\s\p\o\r\t\ \(\e\.\g\.\ \H\T\T\P\/\S\S\E\)\ \|\ \I\m\p\l\e\m\e\n\t\ \`\T\r\a\n\s\p\o\r\t\`\ \i\n\ \a\ \n\e\w\ \`\s\r\c\/\m\c\p\/\<\n\a\m\e\>\.\r\s\`\,\ \a\d\d\ \a\ \`\c\o\n\n\e\c\t\_\<\n\a\m\e\>\`\ \c\o\n\s\t\r\u\c\t\o\r\ \t\o\ \`\M\c\p\C\l\i\e\n\t\`\ \|\
\|\ \A\d\d\ \a\ \n\e\w\ \C\L\I\ \c\o\m\m\a\n\d\ \|\ \A\d\d\ \h\a\n\d\l\e\r\ \i\n\ \`\s\r\c\/\c\o\m\m\a\n\d\s\/\<\n\a\m\e\>\.\r\s\`\,\ \r\e\g\i\s\t\e\r\ \i\n\ \`\c\o\m\m\a\n\d\s\/\m\o\d\.\r\s\`\,\ \a\d\d\ \`\C\o\m\m\a\n\d\s\`\ \v\a\r\i\a\n\t\ \i\n\ \`\m\a\i\n\.\r\s\`\ \|\
\|\ \S\u\p\p\o\r\t\ \a\ \n\e\w\ \J\S\O\N\ \S\c\h\e\m\a\ \t\y\p\e\ \|\ \A\d\d\ \a\ \`\m\a\t\c\h\`\ \a\r\m\ \i\n\ \`\S\c\h\e\m\a\F\o\r\m\:\:\p\r\o\m\p\t\_\a\r\g\u\m\e\n\t\s\`\ \d\i\s\p\a\t\c\h\i\n\g\ \t\o\ \a\ \n\e\w\ \`\p\r\o\m\p\t\_\<\t\y\p\e\>\`\ \f\u\n\c\t\i\o\n\ \|\
\|\ \A\d\d\ \a\ \n\e\w\ \c\o\n\f\i\g\ \s\o\u\r\c\e\ \|\ \A\d\d\ \a\ \n\e\w\ \d\i\s\c\o\v\e\r\y\ \s\t\e\p\ \i\n\ \`\C\o\n\f\i\g\M\a\n\a\g\e\r\:\:\l\o\a\d\_\a\l\l\`\ \|\
\|\ \C\h\a\n\g\e\ \o\u\t\p\u\t\ \f\o\r\m\a\t\t\i\n\g\ \|\ \A\l\l\ \f\o\r\m\a\t\t\i\n\g\ \i\s\ \i\s\o\l\a\t\e\d\ \i\n\ \`\s\r\c\/\u\i\/\o\u\t\p\u\t\.\r\s\`\ \—\ \n\o\ \o\t\h\e\r\ \m\o\d\u\l\e\ \n\e\e\d\s\ \t\o\ \c\h\a\n\g\e\ \|\
\
\-\-\-\
\
\#\#\ \D\e\p\e\n\d\e\n\c\y\ \M\a\p\
\
\`\`\`\
\m\a\i\n\.\r\s\
\ \ \└\─\─\ \c\o\m\m\a\n\d\s\/\
\ \ \ \ \ \ \ \ \├\─\─\ \(\a\l\l\ \h\a\n\d\l\e\r\s\)\
\ \ \ \ \ \ \ \ \│\ \ \ \ \ \├\─\─\ \c\o\n\f\i\g\/\ \ \ \ \ \ \ \ \ \ \←\ \s\e\r\v\e\r\ \d\i\s\c\o\v\e\r\y\
\ \ \ \ \ \ \ \ \│\ \ \ \ \ \├\─\─\ \m\c\p\/\c\l\i\e\n\t\ \ \ \ \ \ \ \←\ \p\r\o\t\o\c\o\l\
\ \ \ \ \ \ \ \ \│\ \ \ \ \ \├\─\─\ \p\r\o\m\p\t\/\ \ \ \ \ \ \ \ \ \ \←\ \i\n\t\e\r\a\c\t\i\v\e\ \i\n\p\u\t\
\ \ \ \ \ \ \ \ \│\ \ \ \ \ \└\─\─\ \u\i\/\o\u\t\p\u\t\ \ \ \ \ \ \ \ \←\ \d\i\s\p\l\a\y\
\ \ \ \ \ \ \ \ \└\─\─\ \m\o\d\.\r\s\ \(\r\e\s\o\l\v\e\_\s\e\r\v\e\r\_\d\e\f\i\n\i\t\i\o\n\)\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \└\─\─\ \c\o\n\f\i\g\/\ \ \ \ \ \ \ \ \ \ \←\ \s\e\r\v\e\r\ \r\e\s\o\l\u\t\i\o\n\
\
\m\c\p\/\c\l\i\e\n\t\
\ \ \└\─\─\ \m\c\p\/\t\r\a\n\s\p\o\r\t\ \(\t\r\a\i\t\)\
\ \ \ \ \ \ \ \ \└\─\─\ \m\c\p\/\s\t\d\i\o\ \(\i\m\p\l\)\
\
\m\c\p\/\t\y\p\e\s\ \ \ \ \←\ \s\h\a\r\e\d\ \b\y\ \c\l\i\e\n\t\,\ \s\t\d\i\o\,\ \c\o\m\m\a\n\d\s\
\c\o\n\f\i\g\/\m\o\d\e\l\s\ \←\ \s\h\a\r\e\d\ \b\y\ \c\o\n\f\i\g\/\m\o\d\,\ \c\o\m\m\a\n\d\s\
\`\`\`\
\
\N\o\ \c\i\r\c\u\l\a\r\ \d\e\p\e\n\d\e\n\c\i\e\s\.\ \E\a\c\h\ \l\a\y\e\r\ \o\n\l\y\ \i\m\p\o\r\t\s\ \f\r\o\m\ \l\a\y\e\r\s\ \b\e\l\o\w\ \i\t\.\
\
  },
  "reference/cli-commands.md": {
    title: "CLI Commands & Flags Reference",
    category: "reference",
    content: \#\ \C\L\I\ \C\o\m\m\a\n\d\s\ \&\ \F\l\a\g\s\ \R\e\f\e\r\e\n\c\e\
\
\*\*\T\y\p\e\*\*\:\ \R\e\f\e\r\e\n\c\e\ \|\ \A\c\c\u\r\a\t\e\,\ \c\o\m\p\l\e\t\e\,\ \n\o\n\-\i\n\s\t\r\u\c\t\i\o\n\a\l\.\
\
\T\h\i\s\ \p\a\g\e\ \d\o\c\u\m\e\n\t\s\ \e\v\e\r\y\ \c\o\m\m\a\n\d\,\ \s\u\b\c\o\m\m\a\n\d\,\ \a\n\d\ \f\l\a\g\ \i\n\ \`\m\c\p\-\c\a\l\l\e\r\`\.\ \U\s\e\ \i\t\ \w\h\i\l\e\ \y\o\u\ \w\o\r\k\.\
\
\-\-\-\
\
\#\#\ \G\l\o\b\a\l\ \F\l\a\g\s\
\
\T\h\e\s\e\ \f\l\a\g\s\ \a\p\p\l\y\ \t\o\ \a\l\l\ \c\o\m\m\a\n\d\s\ \a\n\d\ \s\u\b\c\o\m\m\a\n\d\s\.\
\
\|\ \F\l\a\g\ \|\ \S\h\o\r\t\ \|\ \T\y\p\e\ \|\ \D\e\f\a\u\l\t\ \|\ \D\e\s\c\r\i\p\t\i\o\n\ \|\
\|\-\-\-\|\-\-\-\|\-\-\-\|\-\-\-\|\-\-\-\|\
\|\ \`\-\-\c\o\n\f\i\g\ \<\P\A\T\H\>\`\ \|\ \`\-\c\`\ \|\ \P\a\t\h\ \|\ \—\ \|\ \C\u\s\t\o\m\ \c\o\n\f\i\g\ \f\i\l\e\ \p\a\t\h\ \(\o\v\e\r\r\i\d\e\s\ \a\u\t\o\-\d\i\s\c\o\v\e\r\y\)\ \|\
\|\ \`\-\-\c\m\d\ \<\C\O\M\M\A\N\D\>\`\ \|\ \—\ \|\ \S\t\r\i\n\g\ \|\ \—\ \|\ \A\d\-\h\o\c\ \M\C\P\ \s\e\r\v\e\r\ \c\o\m\m\a\n\d\ \(\e\.\g\.\ \`\"\n\p\x\ \-\y\ \s\e\r\v\e\r\ \a\r\g\"\`\)\ \|\
\|\ \`\-\-\j\s\o\n\`\ \|\ \`\-\j\`\ \|\ \B\o\o\l\ \|\ \`\f\a\l\s\e\`\ \|\ \O\u\t\p\u\t\ \r\a\w\ \J\S\O\N\ \t\o\ \s\t\d\o\u\t\ \i\n\s\t\e\a\d\ \o\f\ \f\o\r\m\a\t\t\e\d\ \t\a\b\l\e\s\ \|\
\|\ \`\-\-\h\e\l\p\`\ \|\ \`\-\h\`\ \|\ \—\ \|\ \—\ \|\ \P\r\i\n\t\ \h\e\l\p\ \|\
\|\ \`\-\-\v\e\r\s\i\o\n\`\ \|\ \`\-\V\`\ \|\ \—\ \|\ \—\ \|\ \P\r\i\n\t\ \v\e\r\s\i\o\n\ \|\
\
\>\ \*\*\`\-\-\c\m\d\`\ \v\s\ \s\e\r\v\e\r\ \n\a\m\e\*\*\:\ \I\f\ \b\o\t\h\ \a\r\e\ \p\r\o\v\i\d\e\d\,\ \`\-\-\c\m\d\`\ \t\a\k\e\s\ \p\r\e\c\e\d\e\n\c\e\ \a\n\d\ \a\ \w\a\r\n\i\n\g\ \i\s\ \p\r\i\n\t\e\d\ \t\o\ \s\t\d\e\r\r\.\
\
\-\-\-\
\
\#\#\ \`\m\c\p\-\c\a\l\l\e\r\`\ \(\n\o\ \s\u\b\c\o\m\m\a\n\d\)\
\
\L\a\u\n\c\h\e\s\ \t\h\e\ \f\u\l\l\ \*\*\i\n\t\e\r\a\c\t\i\v\e\ \T\U\I\ \w\i\z\a\r\d\*\*\:\ \s\e\r\v\e\r\ \s\e\l\e\c\t\i\o\n\ \→\ \t\o\o\l\ \s\e\l\e\c\t\i\o\n\ \→\ \p\a\r\a\m\e\t\e\r\ \p\r\o\m\p\t\s\ \→\ \e\x\e\c\u\t\i\o\n\ \→\ \l\o\o\p\.\
\
\`\`\`\b\a\s\h\
\m\c\p\-\c\a\l\l\e\r\ \[\-\-\c\o\n\f\i\g\ \<\P\A\T\H\>\]\ \[\-\-\c\m\d\ \<\C\O\M\M\A\N\D\>\]\
\`\`\`\
\
\*\*\E\x\a\m\p\l\e\s\:\*\*\
\
\`\`\`\b\a\s\h\
\#\ \O\p\e\n\ \w\i\z\a\r\d\ \w\i\t\h\ \a\l\l\ \c\o\n\f\i\g\u\r\e\d\ \s\e\r\v\e\r\s\
\m\c\p\-\c\a\l\l\e\r\
\
\#\ \O\p\e\n\ \w\i\z\a\r\d\ \c\o\n\n\e\c\t\e\d\ \d\i\r\e\c\t\l\y\ \t\o\ \a\n\ \a\d\-\h\o\c\ \s\e\r\v\e\r\
\m\c\p\-\c\a\l\l\e\r\ \-\-\c\m\d\ \"\n\p\x\ \-\y\ \@\m\o\d\e\l\c\o\n\t\e\x\t\p\r\o\t\o\c\o\l\/\s\e\r\v\e\r\-\f\i\l\e\s\y\s\t\e\m\ \.\"\
\
\#\ \L\o\a\d\ \s\e\r\v\e\r\s\ \f\r\o\m\ \a\ \c\u\s\t\o\m\ \c\o\n\f\i\g\
\m\c\p\-\c\a\l\l\e\r\ \-\-\c\o\n\f\i\g\ \~\/\t\e\a\m\-\s\e\r\v\e\r\s\.\j\s\o\n\
\`\`\`\
\
\-\-\-\
\
\#\#\ \`\m\c\p\-\c\a\l\l\e\r\ \i\n\t\e\r\a\c\t\i\v\e\ \[\S\E\R\V\E\R\]\`\
\
\A\l\i\a\s\ \f\o\r\ \l\a\u\n\c\h\i\n\g\ \t\h\e\ \w\i\z\a\r\d\.\ \O\p\t\i\o\n\a\l\l\y\ \s\k\i\p\ \t\h\e\ \s\e\r\v\e\r\-\s\e\l\e\c\t\i\o\n\ \m\e\n\u\ \b\y\ \n\a\m\i\n\g\ \a\ \s\e\r\v\e\r\ \d\i\r\e\c\t\l\y\.\
\
\`\`\`\b\a\s\h\
\m\c\p\-\c\a\l\l\e\r\ \i\n\t\e\r\a\c\t\i\v\e\ \[\S\E\R\V\E\R\]\ \[\-\-\c\m\d\ \<\C\O\M\M\A\N\D\>\]\ \[\-\-\c\o\n\f\i\g\ \<\P\A\T\H\>\]\
\`\`\`\
\
\|\ \A\r\g\u\m\e\n\t\ \|\ \R\e\q\u\i\r\e\d\ \|\ \D\e\s\c\r\i\p\t\i\o\n\ \|\
\|\-\-\-\|\-\-\-\|\-\-\-\|\
\|\ \`\S\E\R\V\E\R\`\ \|\ \N\o\ \|\ \S\e\r\v\e\r\ \n\a\m\e\ \f\r\o\m\ \c\o\n\f\i\g\ \t\o\ \c\o\n\n\e\c\t\ \t\o\ \d\i\r\e\c\t\l\y\ \|\
\
\*\*\E\x\a\m\p\l\e\s\:\*\*\
\
\`\`\`\b\a\s\h\
\#\ \O\p\e\n\ \w\i\z\a\r\d\ \a\t\ \s\e\r\v\e\r\ \s\e\l\e\c\t\i\o\n\ \s\c\r\e\e\n\
\m\c\p\-\c\a\l\l\e\r\ \i\n\t\e\r\a\c\t\i\v\e\
\
\#\ \J\u\m\p\ \d\i\r\e\c\t\l\y\ \i\n\t\o\ \t\h\e\ \'\g\i\t\h\u\b\'\ \s\e\r\v\e\r\ \s\e\s\s\i\o\n\
\m\c\p\-\c\a\l\l\e\r\ \i\n\t\e\r\a\c\t\i\v\e\ \g\i\t\h\u\b\
\`\`\`\
\
\-\-\-\
\
\#\#\ \`\m\c\p\-\c\a\l\l\e\r\ \s\e\r\v\e\r\s\`\
\
\L\i\s\t\s\ \a\l\l\ \M\C\P\ \s\e\r\v\e\r\s\ \d\i\s\c\o\v\e\r\e\d\ \f\r\o\m\ \l\o\c\a\l\ \c\o\n\f\i\g\ \f\i\l\e\s\ \a\n\d\ \s\y\s\t\e\m\ \l\o\c\a\t\i\o\n\s\.\ \S\h\o\w\s\ \s\e\r\v\e\r\ \n\a\m\e\,\ \c\o\m\m\a\n\d\,\ \a\n\d\ \t\h\e\ \c\o\n\f\i\g\ \f\i\l\e\ \i\t\ \w\a\s\ \s\o\u\r\c\e\d\ \f\r\o\m\.\
\
\`\`\`\b\a\s\h\
\m\c\p\-\c\a\l\l\e\r\ \s\e\r\v\e\r\s\ \[\-\-\c\o\n\f\i\g\ \<\P\A\T\H\>\]\
\`\`\`\
\
\*\*\E\x\a\m\p\l\e\ \o\u\t\p\u\t\:\*\*\
\
\`\`\`\
\╭\─\─\─\─\─\─\─\─\─\─\─\─\┬\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\┬\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\╮\
\│\ \S\e\r\v\e\r\ \N\a\m\e\│\ \C\o\m\m\a\n\d\ \/\ \U\R\L\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \│\ \C\o\n\f\i\g\ \S\o\u\r\c\e\ \ \ \ \ \ \ \ \│\
\├\─\─\─\─\─\─\─\─\─\─\─\─\┼\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\┼\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\┤\
\│\ \f\i\l\e\s\y\s\t\e\m\ \│\ \n\p\x\ \-\y\ \@\m\c\p\/\s\e\r\v\e\r\-\f\i\l\e\s\y\s\t\e\m\ \.\ \ \ \ \ \ \ \ \│\ \.\/\m\c\p\.\j\s\o\n\ \ \ \ \ \ \ \ \ \ \ \│\
\│\ \g\i\t\h\u\b\ \ \ \ \ \│\ \n\p\x\ \-\y\ \@\m\c\p\/\s\e\r\v\e\r\-\g\i\t\h\u\b\ \ \ \ \ \ \ \ \ \ \ \ \ \ \│\ \.\/\m\c\p\.\j\s\o\n\ \ \ \ \ \ \ \ \ \ \ \│\
\╰\─\─\─\─\─\─\─\─\─\─\─\─\┴\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\┴\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\╯\
\`\`\`\
\
\-\-\-\
\
\#\#\ \`\m\c\p\-\c\a\l\l\e\r\ \l\i\s\t\ \[\S\E\R\V\E\R\]\`\
\
\C\o\n\n\e\c\t\s\ \t\o\ \a\ \s\e\r\v\e\r\,\ \c\a\l\l\s\ \`\t\o\o\l\s\/\l\i\s\t\`\,\ \a\n\d\ \d\i\s\p\l\a\y\s\ \a\l\l\ \a\v\a\i\l\a\b\l\e\ \t\o\o\l\s\ \w\i\t\h\ \t\h\e\i\r\ \p\a\r\a\m\e\t\e\r\s\.\
\
\`\`\`\b\a\s\h\
\m\c\p\-\c\a\l\l\e\r\ \l\i\s\t\ \[\S\E\R\V\E\R\]\ \[\-\-\c\m\d\ \<\C\O\M\M\A\N\D\>\]\ \[\-\-\c\o\n\f\i\g\ \<\P\A\T\H\>\]\ \[\-\-\j\s\o\n\]\
\`\`\`\
\
\|\ \A\r\g\u\m\e\n\t\ \|\ \R\e\q\u\i\r\e\d\ \|\ \D\e\s\c\r\i\p\t\i\o\n\ \|\
\|\-\-\-\|\-\-\-\|\-\-\-\|\
\|\ \`\S\E\R\V\E\R\`\ \|\ \C\o\n\d\i\t\i\o\n\a\l\l\y\ \|\ \S\e\r\v\e\r\ \n\a\m\e\ \f\r\o\m\ \c\o\n\f\i\g\.\ \R\e\q\u\i\r\e\d\ \u\n\l\e\s\s\ \`\-\-\c\m\d\`\ \i\s\ \p\r\o\v\i\d\e\d\.\ \|\
\
\*\*\E\x\a\m\p\l\e\s\:\*\*\
\
\`\`\`\b\a\s\h\
\#\ \L\i\s\t\ \t\o\o\l\s\ \f\r\o\m\ \a\ \c\o\n\f\i\g\u\r\e\d\ \s\e\r\v\e\r\
\m\c\p\-\c\a\l\l\e\r\ \l\i\s\t\ \f\i\l\e\s\y\s\t\e\m\
\
\#\ \L\i\s\t\ \t\o\o\l\s\ \f\r\o\m\ \a\n\ \a\d\-\h\o\c\ \s\e\r\v\e\r\
\m\c\p\-\c\a\l\l\e\r\ \l\i\s\t\ \-\-\c\m\d\ \"\p\y\t\h\o\n\ \m\y\_\s\e\r\v\e\r\.\p\y\"\
\
\#\ \G\e\t\ \r\a\w\ \J\S\O\N\ \t\o\o\l\ \l\i\s\t\
\m\c\p\-\c\a\l\l\e\r\ \l\i\s\t\ \f\i\l\e\s\y\s\t\e\m\ \-\-\j\s\o\n\
\`\`\`\
\
\-\-\-\
\
\#\#\ \`\m\c\p\-\c\a\l\l\e\r\ \i\n\f\o\ \[\S\E\R\V\E\R\]\ \-\-\t\o\o\l\ \<\T\O\O\L\>\`\
\
\C\o\n\n\e\c\t\s\ \t\o\ \a\ \s\e\r\v\e\r\ \a\n\d\ \d\i\s\p\l\a\y\s\ \t\h\e\ \f\u\l\l\ \J\S\O\N\ \S\c\h\e\m\a\ \o\f\ \a\ \s\i\n\g\l\e\ \t\o\o\l\ \—\ \p\a\r\a\m\e\t\e\r\s\,\ \t\y\p\e\s\,\ \d\e\s\c\r\i\p\t\i\o\n\s\,\ \d\e\f\a\u\l\t\s\,\ \a\n\d\ \e\n\u\m\ \v\a\l\u\e\s\.\
\
\`\`\`\b\a\s\h\
\m\c\p\-\c\a\l\l\e\r\ \i\n\f\o\ \[\S\E\R\V\E\R\]\ \-\-\t\o\o\l\ \<\T\O\O\L\>\ \[\-\-\c\m\d\ \<\C\O\M\M\A\N\D\>\]\ \[\-\-\c\o\n\f\i\g\ \<\P\A\T\H\>\]\ \[\-\-\j\s\o\n\]\
\`\`\`\
\
\|\ \A\r\g\u\m\e\n\t\ \/\ \F\l\a\g\ \|\ \R\e\q\u\i\r\e\d\ \|\ \D\e\s\c\r\i\p\t\i\o\n\ \|\
\|\-\-\-\|\-\-\-\|\-\-\-\|\
\|\ \`\S\E\R\V\E\R\`\ \|\ \C\o\n\d\i\t\i\o\n\a\l\l\y\ \|\ \S\e\r\v\e\r\ \n\a\m\e\ \f\r\o\m\ \c\o\n\f\i\g\.\ \R\e\q\u\i\r\e\d\ \u\n\l\e\s\s\ \`\-\-\c\m\d\`\ \i\s\ \p\r\o\v\i\d\e\d\.\ \|\
\|\ \`\-\-\t\o\o\l\ \<\T\O\O\L\>\`\ \/\ \`\-\t\ \<\T\O\O\L\>\`\ \|\ \Y\e\s\ \|\ \N\a\m\e\ \o\f\ \t\h\e\ \t\o\o\l\ \t\o\ \i\n\s\p\e\c\t\ \|\
\
\*\*\E\x\a\m\p\l\e\s\:\*\*\
\
\`\`\`\b\a\s\h\
\#\ \I\n\s\p\e\c\t\ \'\r\e\a\d\_\f\i\l\e\'\ \o\n\ \t\h\e\ \f\i\l\e\s\y\s\t\e\m\ \s\e\r\v\e\r\
\m\c\p\-\c\a\l\l\e\r\ \i\n\f\o\ \f\i\l\e\s\y\s\t\e\m\ \-\-\t\o\o\l\ \r\e\a\d\_\f\i\l\e\
\
\#\ \I\n\s\p\e\c\t\ \a\s\ \r\a\w\ \J\S\O\N\
\m\c\p\-\c\a\l\l\e\r\ \i\n\f\o\ \f\i\l\e\s\y\s\t\e\m\ \-\-\t\o\o\l\ \r\e\a\d\_\f\i\l\e\ \-\-\j\s\o\n\
\`\`\`\
\
\-\-\-\
\
\#\#\ \`\m\c\p\-\c\a\l\l\e\r\ \c\a\l\l\ \[\S\E\R\V\E\R\]\ \-\-\t\o\o\l\ \<\T\O\O\L\>\`\
\
\C\o\n\n\e\c\t\s\ \t\o\ \a\ \s\e\r\v\e\r\ \a\n\d\ \i\n\v\o\k\e\s\ \a\ \t\o\o\l\.\ \I\f\ \`\-\-\a\r\g\s\`\ \i\s\ \n\o\t\ \p\r\o\v\i\d\e\d\,\ \s\t\a\r\t\s\ \t\h\e\ \i\n\t\e\r\a\c\t\i\v\e\ \s\c\h\e\m\a\-\f\i\l\l\i\n\g\ \p\r\o\m\p\t\.\
\
\`\`\`\b\a\s\h\
\m\c\p\-\c\a\l\l\e\r\ \c\a\l\l\ \[\S\E\R\V\E\R\]\ \-\-\t\o\o\l\ \<\T\O\O\L\>\ \[\-\-\a\r\g\s\ \<\J\S\O\N\>\]\ \[\-\-\c\m\d\ \<\C\O\M\M\A\N\D\>\]\ \[\-\-\c\o\n\f\i\g\ \<\P\A\T\H\>\]\ \[\-\-\j\s\o\n\]\ \[\-\-\n\o\n\-\i\n\t\e\r\a\c\t\i\v\e\]\
\`\`\`\
\
\|\ \A\r\g\u\m\e\n\t\ \/\ \F\l\a\g\ \|\ \R\e\q\u\i\r\e\d\ \|\ \D\e\s\c\r\i\p\t\i\o\n\ \|\
\|\-\-\-\|\-\-\-\|\-\-\-\|\
\|\ \`\S\E\R\V\E\R\`\ \|\ \C\o\n\d\i\t\i\o\n\a\l\l\y\ \|\ \S\e\r\v\e\r\ \n\a\m\e\ \f\r\o\m\ \c\o\n\f\i\g\.\ \R\e\q\u\i\r\e\d\ \u\n\l\e\s\s\ \`\-\-\c\m\d\`\ \i\s\ \p\r\o\v\i\d\e\d\.\ \|\
\|\ \`\-\-\t\o\o\l\ \<\T\O\O\L\>\`\ \/\ \`\-\t\ \<\T\O\O\L\>\`\ \|\ \Y\e\s\ \|\ \N\a\m\e\ \o\f\ \t\h\e\ \t\o\o\l\ \t\o\ \i\n\v\o\k\e\ \|\
\|\ \`\-\-\a\r\g\s\ \<\J\S\O\N\>\`\ \/\ \`\-\a\ \<\J\S\O\N\>\`\ \|\ \N\o\ \|\ \J\S\O\N\ \o\b\j\e\c\t\ \o\f\ \a\r\g\u\m\e\n\t\s\ \(\e\.\g\.\ \`\'\{\"\p\a\t\h\"\:\"\s\r\c\"\}\'\`\)\ \|\
\|\ \`\-\-\n\o\n\-\i\n\t\e\r\a\c\t\i\v\e\`\ \|\ \N\o\ \|\ \D\i\s\a\b\l\e\ \a\l\l\ \p\r\o\m\p\t\s\;\ \f\a\i\l\ \i\f\ \r\e\q\u\i\r\e\d\ \a\r\g\s\ \a\r\e\ \m\i\s\s\i\n\g\ \|\
\
\*\*\E\x\a\m\p\l\e\s\:\*\*\
\
\`\`\`\b\a\s\h\
\#\ \C\a\l\l\ \w\i\t\h\ \i\n\t\e\r\a\c\t\i\v\e\ \p\r\o\m\p\t\s\ \(\n\o\ \-\-\a\r\g\s\)\
\m\c\p\-\c\a\l\l\e\r\ \c\a\l\l\ \f\i\l\e\s\y\s\t\e\m\ \-\-\t\o\o\l\ \r\e\a\d\_\f\i\l\e\
\
\#\ \C\a\l\l\ \w\i\t\h\ \d\i\r\e\c\t\ \a\r\g\u\m\e\n\t\s\ \(\n\o\ \p\r\o\m\p\t\s\)\
\m\c\p\-\c\a\l\l\e\r\ \c\a\l\l\ \f\i\l\e\s\y\s\t\e\m\ \-\-\t\o\o\l\ \r\e\a\d\_\f\i\l\e\ \-\-\a\r\g\s\ \'\{\"\p\a\t\h\"\:\"\C\a\r\g\o\.\t\o\m\l\"\}\'\
\
\#\ \C\a\l\l\ \n\o\n\-\i\n\t\e\r\a\c\t\i\v\e\l\y\ \a\n\d\ \o\u\t\p\u\t\ \r\a\w\ \J\S\O\N\
\m\c\p\-\c\a\l\l\e\r\ \c\a\l\l\ \f\i\l\e\s\y\s\t\e\m\ \\\\\
\ \ \-\-\t\o\o\l\ \r\e\a\d\_\f\i\l\e\ \\\\\
\ \ \-\-\a\r\g\s\ \'\{\"\p\a\t\h\"\:\"\C\a\r\g\o\.\t\o\m\l\"\}\'\ \\\\\
\ \ \-\-\n\o\n\-\i\n\t\e\r\a\c\t\i\v\e\ \\\\\
\ \ \-\-\j\s\o\n\
\
\#\ \A\d\-\h\o\c\ \s\e\r\v\e\r\
\m\c\p\-\c\a\l\l\e\r\ \c\a\l\l\ \\\\\
\ \ \-\-\c\m\d\ \"\n\p\x\ \-\y\ \@\m\o\d\e\l\c\o\n\t\e\x\t\p\r\o\t\o\c\o\l\/\s\e\r\v\e\r\-\g\i\t\h\u\b\"\ \\\\\
\ \ \-\-\t\o\o\l\ \g\e\t\_\r\e\p\o\s\i\t\o\r\y\ \\\\\
\ \ \-\-\a\r\g\s\ \'\{\"\o\w\n\e\r\"\:\"\o\c\t\o\c\a\t\"\,\"\r\e\p\o\"\:\"\h\e\l\l\o\-\w\o\r\l\d\"\}\'\ \\\\\
\ \ \-\-\j\s\o\n\
\`\`\`\
\
\-\-\-\
\
\#\#\ \E\x\i\t\ \C\o\d\e\s\
\
\|\ \C\o\d\e\ \|\ \M\e\a\n\i\n\g\ \|\
\|\-\-\-\|\-\-\-\|\
\|\ \`\0\`\ \|\ \S\u\c\c\e\s\s\ \|\
\|\ \`\1\`\ \|\ \A\n\y\ \e\r\r\o\r\ \(\c\o\n\n\e\c\t\i\o\n\,\ \t\o\o\l\ \n\o\t\ \f\o\u\n\d\,\ \s\e\r\i\a\l\i\z\a\t\i\o\n\,\ \e\t\c\.\)\ \|\
\
\E\r\r\o\r\ \d\e\t\a\i\l\s\ \a\r\e\ \a\l\w\a\y\s\ \w\r\i\t\t\e\n\ \t\o\ \*\*\s\t\d\e\r\r\*\*\.\ \T\o\o\l\ \o\u\t\p\u\t\ \(\f\o\r\m\a\t\t\e\d\ \o\r\ \`\-\-\j\s\o\n\`\)\ \i\s\ \a\l\w\a\y\s\ \w\r\i\t\t\e\n\ \t\o\ \*\*\s\t\d\o\u\t\*\*\.\ \T\h\i\s\ \s\e\p\a\r\a\t\i\o\n\ \m\a\k\e\s\ \t\h\e\ \t\o\o\l\ \s\a\f\e\ \t\o\ \u\s\e\ \i\n\ \p\i\p\e\l\i\n\e\s\.\
\
  },
  "reference/config-schema.md": {
    title: "Configuration File Schema Reference",
    category: "reference",
    content: \#\ \C\o\n\f\i\g\u\r\a\t\i\o\n\ \F\i\l\e\ \S\c\h\e\m\a\ \R\e\f\e\r\e\n\c\e\
\
\*\*\T\y\p\e\*\*\:\ \R\e\f\e\r\e\n\c\e\ \|\ \C\o\m\p\l\e\t\e\ \s\p\e\c\i\f\i\c\a\t\i\o\n\ \o\f\ \t\h\e\ \`\m\c\p\.\j\s\o\n\`\ \c\o\n\f\i\g\ \f\o\r\m\a\t\.\
\
\-\-\-\
\
\#\#\ \S\u\p\p\o\r\t\e\d\ \F\i\l\e\n\a\m\e\s\
\
\`\m\c\p\-\c\a\l\l\e\r\`\ \a\u\t\o\-\d\i\s\c\o\v\e\r\s\ \c\o\n\f\i\g\u\r\a\t\i\o\n\ \f\r\o\m\ \t\h\e\s\e\ \f\i\l\e\n\a\m\e\s\ \i\n\ \t\h\e\ \c\u\r\r\e\n\t\ \d\i\r\e\c\t\o\r\y\ \(\i\n\ \p\r\i\o\r\i\t\y\ \o\r\d\e\r\)\:\
\
\1\.\ \C\u\s\t\o\m\ \p\a\t\h\ \p\a\s\s\e\d\ \v\i\a\ \`\-\-\c\o\n\f\i\g\ \<\P\A\T\H\>\`\
\2\.\ \`\.\/\m\c\p\.\j\s\o\n\`\
\3\.\ \`\.\/\.\m\c\p\.\j\s\o\n\`\
\4\.\ \`\.\/\.\m\c\p\r\c\.\j\s\o\n\`\
\5\.\ \C\l\a\u\d\e\ \D\e\s\k\t\o\p\ \c\o\n\f\i\g\ \(\p\l\a\t\f\o\r\m\-\s\p\e\c\i\f\i\c\ \p\a\t\h\)\
\6\.\ \A\n\t\i\g\r\a\v\i\t\y\/\G\e\m\i\n\i\ \C\L\I\ \c\o\n\f\i\g\ \(\`\~\/\.\g\e\m\i\n\i\/\a\n\t\i\g\r\a\v\i\t\y\-\c\l\i\/\m\c\p\_\c\o\n\f\i\g\.\j\s\o\n\`\)\
\
\S\e\e\ \[\C\o\n\f\i\g\u\r\a\t\i\o\n\ \D\i\s\c\o\v\e\r\y\ \&\ \P\r\i\o\r\i\t\y\]\(\.\.\/\e\x\p\l\a\n\a\t\i\o\n\/\c\o\n\f\i\g\-\d\i\s\c\o\v\e\r\y\.\m\d\)\ \f\o\r\ \f\u\l\l\ \m\e\r\g\e\ \b\e\h\a\v\i\o\r\.\
\
\-\-\-\
\
\#\#\ \T\o\p\-\L\e\v\e\l\ \S\c\h\e\m\a\
\
\`\`\`\j\s\o\n\
\{\
\ \ \"\m\c\p\S\e\r\v\e\r\s\"\:\ \{\
\ \ \ \ \"\<\s\e\r\v\e\r\-\n\a\m\e\>\"\:\ \<\S\e\r\v\e\r\D\e\f\i\n\i\t\i\o\n\>\
\ \ \}\
\}\
\`\`\`\
\
\|\ \F\i\e\l\d\ \|\ \T\y\p\e\ \|\ \R\e\q\u\i\r\e\d\ \|\ \D\e\s\c\r\i\p\t\i\o\n\ \|\
\|\-\-\-\|\-\-\-\|\-\-\-\|\-\-\-\|\
\|\ \`\m\c\p\S\e\r\v\e\r\s\`\ \|\ \`\O\b\j\e\c\t\<\s\t\r\i\n\g\,\ \S\e\r\v\e\r\D\e\f\i\n\i\t\i\o\n\>\`\ \|\ \Y\e\s\ \|\ \M\a\p\ \o\f\ \s\e\r\v\e\r\ \n\a\m\e\s\ \t\o\ \t\h\e\i\r\ \d\e\f\i\n\i\t\i\o\n\s\ \|\
\
\-\-\-\
\
\#\#\ \`\S\e\r\v\e\r\D\e\f\i\n\i\t\i\o\n\`\
\
\E\a\c\h\ \e\n\t\r\y\ \i\n\ \`\m\c\p\S\e\r\v\e\r\s\`\ \i\s\ \a\ \`\S\e\r\v\e\r\D\e\f\i\n\i\t\i\o\n\`\ \o\b\j\e\c\t\:\
\
\`\`\`\j\s\o\n\
\{\
\ \ \"\c\o\m\m\a\n\d\"\:\ \"\n\p\x\"\,\
\ \ \"\a\r\g\s\"\:\ \[\"\-\y\"\,\ \"\@\m\o\d\e\l\c\o\n\t\e\x\t\p\r\o\t\o\c\o\l\/\s\e\r\v\e\r\-\f\i\l\e\s\y\s\t\e\m\"\,\ \"\.\"\]\,\
\ \ \"\e\n\v\"\:\ \{\
\ \ \ \ \"\A\P\I\_\K\E\Y\"\:\ \"\y\o\u\r\-\s\e\c\r\e\t\-\h\e\r\e\"\
\ \ \}\,\
\ \ \"\u\r\l\"\:\ \n\u\l\l\
\}\
\`\`\`\
\
\|\ \F\i\e\l\d\ \|\ \T\y\p\e\ \|\ \R\e\q\u\i\r\e\d\ \|\ \D\e\s\c\r\i\p\t\i\o\n\ \|\
\|\-\-\-\|\-\-\-\|\-\-\-\|\-\-\-\|\
\|\ \`\c\o\m\m\a\n\d\`\ \|\ \`\s\t\r\i\n\g\`\ \|\ \C\o\n\d\i\t\i\o\n\a\l\l\y\ \|\ \E\x\e\c\u\t\a\b\l\e\ \t\o\ \s\p\a\w\n\ \(\e\.\g\.\ \`\"\n\p\x\"\`\,\ \`\"\p\y\t\h\o\n\"\`\,\ \`\"\n\o\d\e\"\`\)\.\ \R\e\q\u\i\r\e\d\ \f\o\r\ \s\t\d\i\o\ \s\e\r\v\e\r\s\.\ \|\
\|\ \`\a\r\g\s\`\ \|\ \`\s\t\r\i\n\g\[\]\`\ \|\ \N\o\ \|\ \A\r\g\u\m\e\n\t\s\ \p\a\s\s\e\d\ \t\o\ \`\c\o\m\m\a\n\d\`\.\ \D\e\f\a\u\l\t\s\ \t\o\ \`\[\]\`\.\ \|\
\|\ \`\e\n\v\`\ \|\ \`\O\b\j\e\c\t\<\s\t\r\i\n\g\,\ \s\t\r\i\n\g\>\`\ \|\ \N\o\ \|\ \E\n\v\i\r\o\n\m\e\n\t\ \v\a\r\i\a\b\l\e\s\ \i\n\j\e\c\t\e\d\ \i\n\t\o\ \t\h\e\ \s\e\r\v\e\r\ \p\r\o\c\e\s\s\.\ \D\e\f\a\u\l\t\s\ \t\o\ \`\{\}\`\.\ \|\
\|\ \`\u\r\l\`\ \|\ \`\s\t\r\i\n\g\`\ \|\ \C\o\n\d\i\t\i\o\n\a\l\l\y\ \|\ \B\a\s\e\ \U\R\L\ \f\o\r\ \H\T\T\P\/\S\S\E\ \t\r\a\n\s\p\o\r\t\ \(\e\.\g\.\ \`\"\h\t\t\p\:\/\/\l\o\c\a\l\h\o\s\t\:\8\0\8\0\"\`\)\.\ \R\e\q\u\i\r\e\d\ \f\o\r\ \r\e\m\o\t\e\ \s\e\r\v\e\r\s\.\ \|\
\
\>\ \*\*\N\o\t\e\*\*\:\ \E\i\t\h\e\r\ \`\c\o\m\m\a\n\d\`\ \o\r\ \`\u\r\l\`\ \m\u\s\t\ \b\e\ \s\e\t\.\ \I\f\ \b\o\t\h\ \a\r\e\ \s\e\t\,\ \`\u\r\l\`\ \t\a\k\e\s\ \p\r\e\c\e\d\e\n\c\e\ \(\H\T\T\P\ \t\r\a\n\s\p\o\r\t\)\.\
\
\-\-\-\
\
\#\#\ \F\u\l\l\ \E\x\a\m\p\l\e\
\
\`\`\`\j\s\o\n\
\{\
\ \ \"\m\c\p\S\e\r\v\e\r\s\"\:\ \{\
\ \ \ \ \"\f\i\l\e\s\y\s\t\e\m\"\:\ \{\
\ \ \ \ \ \ \"\c\o\m\m\a\n\d\"\:\ \"\n\p\x\"\,\
\ \ \ \ \ \ \"\a\r\g\s\"\:\ \[\"\-\y\"\,\ \"\@\m\o\d\e\l\c\o\n\t\e\x\t\p\r\o\t\o\c\o\l\/\s\e\r\v\e\r\-\f\i\l\e\s\y\s\t\e\m\"\,\ \"\/\w\o\r\k\s\p\a\c\e\"\]\,\
\ \ \ \ \ \ \"\e\n\v\"\:\ \{\}\
\ \ \ \ \}\,\
\ \ \ \ \"\g\i\t\h\u\b\"\:\ \{\
\ \ \ \ \ \ \"\c\o\m\m\a\n\d\"\:\ \"\n\p\x\"\,\
\ \ \ \ \ \ \"\a\r\g\s\"\:\ \[\"\-\y\"\,\ \"\@\m\o\d\e\l\c\o\n\t\e\x\t\p\r\o\t\o\c\o\l\/\s\e\r\v\e\r\-\g\i\t\h\u\b\"\]\,\
\ \ \ \ \ \ \"\e\n\v\"\:\ \{\
\ \ \ \ \ \ \ \ \"\G\I\T\H\U\B\_\P\E\R\S\O\N\A\L\_\A\C\C\E\S\S\_\T\O\K\E\N\"\:\ \"\g\h\p\_\x\x\x\x\x\x\x\x\x\x\x\x\x\x\x\x\x\x\x\x\"\
\ \ \ \ \ \ \}\
\ \ \ \ \}\,\
\ \ \ \ \"\m\y\-\p\y\t\h\o\n\-\s\e\r\v\e\r\"\:\ \{\
\ \ \ \ \ \ \"\c\o\m\m\a\n\d\"\:\ \"\p\y\t\h\o\n\"\,\
\ \ \ \ \ \ \"\a\r\g\s\"\:\ \[\"\s\e\r\v\e\r\.\p\y\"\,\ \"\-\-\p\o\r\t\"\,\ \"\s\t\d\i\o\"\]\,\
\ \ \ \ \ \ \"\e\n\v\"\:\ \{\
\ \ \ \ \ \ \ \ \"\D\A\T\A\B\A\S\E\_\U\R\L\"\:\ \"\p\o\s\t\g\r\e\s\q\l\:\/\/\l\o\c\a\l\h\o\s\t\/\m\y\d\b\"\,\
\ \ \ \ \ \ \ \ \"\L\O\G\_\L\E\V\E\L\"\:\ \"\I\N\F\O\"\
\ \ \ \ \ \ \}\
\ \ \ \ \}\,\
\ \ \ \ \"\r\e\m\o\t\e\-\s\e\r\v\e\r\"\:\ \{\
\ \ \ \ \ \ \"\u\r\l\"\:\ \"\h\t\t\p\:\/\/\1\9\2\.\1\6\8\.\1\.\1\0\0\:\8\0\8\0\"\
\ \ \ \ \}\
\ \ \}\
\}\
\`\`\`\
\
\-\-\-\
\
\#\#\ \A\l\t\e\r\n\a\t\i\v\e\ \F\o\r\m\a\t\:\ \F\l\a\t\ \S\e\r\v\e\r\ \M\a\p\
\
\I\f\ \t\h\e\ \r\o\o\t\ \o\f\ \y\o\u\r\ \J\S\O\N\ \f\i\l\e\ \i\s\ \a\ \f\l\a\t\ \`\<\s\e\r\v\e\r\-\n\a\m\e\>\:\ \S\e\r\v\e\r\D\e\f\i\n\i\t\i\o\n\`\ \m\a\p\ \(\w\i\t\h\o\u\t\ \t\h\e\ \`\"\m\c\p\S\e\r\v\e\r\s\"\`\ \w\r\a\p\p\e\r\)\,\ \`\m\c\p\-\c\a\l\l\e\r\`\ \w\i\l\l\ \a\l\s\o\ \p\a\r\s\e\ \i\t\:\
\
\`\`\`\j\s\o\n\
\{\
\ \ \"\m\y\-\s\e\r\v\e\r\"\:\ \{\
\ \ \ \ \"\c\o\m\m\a\n\d\"\:\ \"\n\p\x\"\,\
\ \ \ \ \"\a\r\g\s\"\:\ \[\"\-\y\"\,\ \"\m\y\-\m\c\p\-\s\e\r\v\e\r\"\]\
\ \ \}\
\}\
\`\`\`\
\
\T\h\i\s\ \i\s\ \p\r\o\v\i\d\e\d\ \f\o\r\ \c\o\m\p\a\t\i\b\i\l\i\t\y\ \w\i\t\h\ \t\o\o\l\s\ \t\h\a\t\ \e\m\i\t\ \c\o\n\f\i\g\s\ \w\i\t\h\o\u\t\ \t\h\e\ \w\r\a\p\p\e\r\.\
\
\-\-\-\
\
\#\#\ \S\e\c\u\r\i\t\y\ \N\o\t\e\s\
\
\-\ \*\*\D\o\ \n\o\t\ \c\o\m\m\i\t\ \`\m\c\p\.\j\s\o\n\`\ \f\i\l\e\s\ \w\i\t\h\ \s\e\c\r\e\t\s\*\*\ \(\A\P\I\ \k\e\y\s\,\ \t\o\k\e\n\s\)\ \t\o\ \v\e\r\s\i\o\n\ \c\o\n\t\r\o\l\.\ \A\d\d\ \`\m\c\p\.\j\s\o\n\`\ \t\o\ \y\o\u\r\ \`\.\g\i\t\i\g\n\o\r\e\`\.\
\-\ \T\h\e\ \`\e\n\v\`\ \b\l\o\c\k\ \i\s\ \i\n\j\e\c\t\e\d\ \d\i\r\e\c\t\l\y\ \i\n\t\o\ \t\h\e\ \c\h\i\l\d\ \p\r\o\c\e\s\s\ \e\n\v\i\r\o\n\m\e\n\t\.\ \U\s\e\ \a\ \s\e\c\r\e\t\s\ \m\a\n\a\g\e\r\ \o\r\ \`\.\e\n\v\`\ \s\u\b\s\t\i\t\u\t\i\o\n\ \f\o\r\ \p\r\o\d\u\c\t\i\o\n\ \d\e\p\l\o\y\m\e\n\t\s\.\
\-\ \V\a\l\u\e\s\ \i\n\ \`\c\o\m\m\a\n\d\`\ \a\n\d\ \`\a\r\g\s\`\ \a\r\e\ \p\a\s\s\e\d\ \t\h\r\o\u\g\h\ \t\h\e\ \O\S\ \p\r\o\c\e\s\s\ \A\P\I\ \a\n\d\ \a\r\e\ \n\o\t\ \s\h\e\l\l\-\i\n\t\e\r\p\r\e\t\e\d\ \(\n\o\ \i\n\j\e\c\t\i\o\n\ \r\i\s\k\)\,\ \b\u\t\ \t\h\e\ \c\o\m\m\a\n\d\s\ \t\h\e\m\s\e\l\v\e\s\ \e\x\e\c\u\t\e\ \w\i\t\h\ \f\u\l\l\ \O\S\ \p\r\i\v\i\l\e\g\e\s\.\ \S\e\e\ \t\h\e\ \t\r\u\s\t\ \b\o\u\n\d\a\r\y\ \d\o\c\u\m\e\n\t\a\t\i\o\n\ \i\n\ \t\h\e\ \[\s\o\u\r\c\e\ \c\o\d\e\]\(\.\.\/\.\.\/\s\r\c\/\c\o\n\f\i\g\/\m\o\d\e\l\s\.\r\s\)\.\
\
  },
  "reference/mcp-protocol.md": {
    title: "MCP Protocol Notes Reference",
    category: "reference",
    content: \#\ \M\C\P\ \P\r\o\t\o\c\o\l\ \N\o\t\e\s\ \R\e\f\e\r\e\n\c\e\
\
\*\*\T\y\p\e\*\*\:\ \R\e\f\e\r\e\n\c\e\ \|\ \T\e\c\h\n\i\c\a\l\ \d\e\s\c\r\i\p\t\i\o\n\ \o\f\ \t\h\e\ \M\C\P\ \s\u\b\s\e\t\ \i\m\p\l\e\m\e\n\t\e\d\ \b\y\ \`\m\c\p\-\c\a\l\l\e\r\`\.\
\
\T\h\i\s\ \i\s\ \n\o\t\ \a\ \f\u\l\l\ \M\C\P\ \s\p\e\c\i\f\i\c\a\t\i\o\n\.\ \I\t\ \d\o\c\u\m\e\n\t\s\ \o\n\l\y\ \t\h\e\ \p\r\o\t\o\c\o\l\ \b\e\h\a\v\i\o\r\ \y\o\u\ \n\e\e\d\ \t\o\ \u\n\d\e\r\s\t\a\n\d\ \t\o\ \u\s\e\ \o\r\ \e\x\t\e\n\d\ \`\m\c\p\-\c\a\l\l\e\r\`\.\ \F\o\r\ \t\h\e\ \f\u\l\l\ \s\p\e\c\,\ \s\e\e\ \t\h\e\ \[\o\f\f\i\c\i\a\l\ \M\C\P\ \d\o\c\u\m\e\n\t\a\t\i\o\n\]\(\h\t\t\p\s\:\/\/\m\o\d\e\l\c\o\n\t\e\x\t\p\r\o\t\o\c\o\l\.\i\o\/\)\.\
\
\-\-\-\
\
\#\#\ \T\r\a\n\s\p\o\r\t\:\ \s\t\d\i\o\
\
\`\m\c\p\-\c\a\l\l\e\r\`\ \v\0\.\1\.\0\ \u\s\e\s\ \t\h\e\ \*\*\s\t\d\i\o\ \t\r\a\n\s\p\o\r\t\*\*\ \e\x\c\l\u\s\i\v\e\l\y\.\ \E\a\c\h\ \M\C\P\ \s\e\r\v\e\r\ \i\s\ \s\p\a\w\n\e\d\ \a\s\ \a\ \c\h\i\l\d\ \p\r\o\c\e\s\s\.\ \C\o\m\m\u\n\i\c\a\t\i\o\n\ \i\s\:\
\
\-\ \*\*\C\l\i\e\n\t\ \→\ \S\e\r\v\e\r\*\*\:\ \n\e\w\l\i\n\e\-\d\e\l\i\m\i\t\e\d\ \J\S\O\N\ \w\r\i\t\t\e\n\ \t\o\ \t\h\e\ \c\h\i\l\d\'\s\ \`\s\t\d\i\n\`\
\-\ \*\*\S\e\r\v\e\r\ \→\ \C\l\i\e\n\t\*\*\:\ \n\e\w\l\i\n\e\-\d\e\l\i\m\i\t\e\d\ \J\S\O\N\ \r\e\a\d\ \f\r\o\m\ \t\h\e\ \c\h\i\l\d\'\s\ \`\s\t\d\o\u\t\`\
\-\ \*\*\S\e\r\v\e\r\ \l\o\g\s\*\*\:\ \p\a\s\s\e\d\ \t\h\r\o\u\g\h\ \t\o\ \t\h\e\ \p\a\r\e\n\t\'\s\ \`\s\t\d\e\r\r\`\ \u\n\c\h\a\n\g\e\d\
\
\E\a\c\h\ \m\e\s\s\a\g\e\ \i\s\ \a\ \s\i\n\g\l\e\ \l\i\n\e\ \o\f\ \J\S\O\N\ \t\e\r\m\i\n\a\t\e\d\ \w\i\t\h\ \`\\\\\n\`\.\
\
\-\-\-\
\
\#\#\ \P\r\o\t\o\c\o\l\ \V\e\r\s\i\o\n\
\
\`\m\c\p\-\c\a\l\l\e\r\`\ \d\e\c\l\a\r\e\s\ \`\"\2\0\2\4\-\1\1\-\0\5\"\`\ \a\s\ \i\t\s\ \`\p\r\o\t\o\c\o\l\V\e\r\s\i\o\n\`\ \d\u\r\i\n\g\ \i\n\i\t\i\a\l\i\z\a\t\i\o\n\.\ \S\e\r\v\e\r\s\ \t\h\a\t\ \r\e\q\u\i\r\e\ \a\ \l\a\t\e\r\ \v\e\r\s\i\o\n\ \m\a\y\ \r\e\j\e\c\t\ \t\h\e\ \c\o\n\n\e\c\t\i\o\n\.\
\
\-\-\-\
\
\#\#\ \M\e\s\s\a\g\e\ \F\r\a\m\i\n\g\:\ \J\S\O\N\-\R\P\C\ \2\.\0\
\
\A\l\l\ \m\e\s\s\a\g\e\s\ \c\o\n\f\o\r\m\ \t\o\ \[\J\S\O\N\-\R\P\C\ \2\.\0\]\(\h\t\t\p\s\:\/\/\w\w\w\.\j\s\o\n\r\p\c\.\o\r\g\/\s\p\e\c\i\f\i\c\a\t\i\o\n\)\.\
\
\#\#\#\ \R\e\q\u\e\s\t\ \(\c\l\i\e\n\t\ \→\ \s\e\r\v\e\r\,\ \e\x\p\e\c\t\s\ \r\e\s\p\o\n\s\e\)\
\
\`\`\`\j\s\o\n\
\{\
\ \ \"\j\s\o\n\r\p\c\"\:\ \"\2\.\0\"\,\
\ \ \"\i\d\"\:\ \1\,\
\ \ \"\m\e\t\h\o\d\"\:\ \"\t\o\o\l\s\/\l\i\s\t\"\,\
\ \ \"\p\a\r\a\m\s\"\:\ \{\}\
\}\
\`\`\`\
\
\-\ \`\i\d\`\ \i\s\ \a\ \m\o\n\o\t\o\n\i\c\a\l\l\y\ \i\n\c\r\e\a\s\i\n\g\ \`\u\i\n\t\6\4\`\,\ \s\t\a\r\t\i\n\g\ \a\t\ \1\ \p\e\r\ \s\e\s\s\i\o\n\
\-\ \`\p\a\r\a\m\s\`\ \i\s\ \o\m\i\t\t\e\d\ \w\h\e\n\ \n\o\t\ \n\e\e\d\e\d\ \(\n\o\t\ \s\e\n\t\ \a\s\ \`\n\u\l\l\`\)\
\
\#\#\#\ \R\e\s\p\o\n\s\e\ \(\s\e\r\v\e\r\ \→\ \c\l\i\e\n\t\)\
\
\`\`\`\j\s\o\n\
\{\
\ \ \"\j\s\o\n\r\p\c\"\:\ \"\2\.\0\"\,\
\ \ \"\i\d\"\:\ \1\,\
\ \ \"\r\e\s\u\l\t\"\:\ \{\ \.\.\.\ \}\
\}\
\`\`\`\
\
\O\n\ \e\r\r\o\r\:\
\
\`\`\`\j\s\o\n\
\{\
\ \ \"\j\s\o\n\r\p\c\"\:\ \"\2\.\0\"\,\
\ \ \"\i\d\"\:\ \1\,\
\ \ \"\e\r\r\o\r\"\:\ \{\
\ \ \ \ \"\c\o\d\e\"\:\ \-\3\2\6\0\1\,\
\ \ \ \ \"\m\e\s\s\a\g\e\"\:\ \"\M\e\t\h\o\d\ \n\o\t\ \f\o\u\n\d\"\,\
\ \ \ \ \"\d\a\t\a\"\:\ \n\u\l\l\
\ \ \}\
\}\
\`\`\`\
\
\#\#\#\ \N\o\t\i\f\i\c\a\t\i\o\n\ \(\c\l\i\e\n\t\ \→\ \s\e\r\v\e\r\,\ \n\o\ \r\e\s\p\o\n\s\e\)\
\
\`\`\`\j\s\o\n\
\{\
\ \ \"\j\s\o\n\r\p\c\"\:\ \"\2\.\0\"\,\
\ \ \"\m\e\t\h\o\d\"\:\ \"\n\o\t\i\f\i\c\a\t\i\o\n\s\/\i\n\i\t\i\a\l\i\z\e\d\"\
\}\
\`\`\`\
\
\N\o\t\i\f\i\c\a\t\i\o\n\s\ \h\a\v\e\ \n\o\ \`\i\d\`\ \f\i\e\l\d\.\ \`\m\c\p\-\c\a\l\l\e\r\`\ \d\o\e\s\ \n\o\t\ \w\a\i\t\ \f\o\r\ \a\ \r\e\s\p\o\n\s\e\ \a\f\t\e\r\ \s\e\n\d\i\n\g\ \o\n\e\.\
\
\-\-\-\
\
\#\#\ \S\e\s\s\i\o\n\ \L\i\f\e\c\y\c\l\e\
\
\E\v\e\r\y\ \s\e\s\s\i\o\n\ \f\o\l\l\o\w\s\ \t\h\i\s\ \e\x\a\c\t\ \s\e\q\u\e\n\c\e\:\
\
\`\`\`\
\C\l\i\e\n\t\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \S\e\r\v\e\r\
\ \ \│\─\─\─\─\ \i\n\i\t\i\a\l\i\z\e\ \─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\►\│\
\ \ \│\◄\─\─\─\ \I\n\i\t\i\a\l\i\z\e\R\e\s\u\l\t\ \─\─\─\─\─\─\─\─\─\─\─\│\
\ \ \│\─\─\─\─\ \n\o\t\i\f\i\c\a\t\i\o\n\s\/\i\n\i\t\i\a\l\i\z\e\d\ \─\─\►\│\ \ \(\n\o\t\i\f\i\c\a\t\i\o\n\,\ \n\o\ \r\e\s\p\o\n\s\e\)\
\ \ \│\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \│\
\ \ \│\─\─\─\─\ \t\o\o\l\s\/\l\i\s\t\ \─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\►\│\ \ \(\m\a\y\ \r\e\p\e\a\t\ \w\i\t\h\ \c\u\r\s\o\r\ \f\o\r\ \p\a\g\i\n\a\t\i\o\n\)\
\ \ \│\◄\─\─\─\ \L\i\s\t\T\o\o\l\s\R\e\s\u\l\t\ \─\─\─\─\─\─\─\─\─\─\─\─\│\
\ \ \│\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \│\
\ \ \│\─\─\─\─\ \t\o\o\l\s\/\c\a\l\l\ \─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\─\►\│\
\ \ \│\◄\─\─\─\ \C\a\l\l\T\o\o\l\R\e\s\u\l\t\ \─\─\─\─\─\─\─\─\─\─\─\─\─\│\
\ \ \│\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \│\
\ \ \[\c\l\i\e\n\t\ \k\i\l\l\s\ \c\h\i\l\d\ \p\r\o\c\e\s\s\]\
\`\`\`\
\
\-\-\-\
\
\#\#\ \`\i\n\i\t\i\a\l\i\z\e\`\ \/\ \`\I\n\i\t\i\a\l\i\z\e\R\e\s\u\l\t\`\
\
\*\*\R\e\q\u\e\s\t\ \p\a\r\a\m\s\:\*\*\
\
\`\`\`\j\s\o\n\
\{\
\ \ \"\p\r\o\t\o\c\o\l\V\e\r\s\i\o\n\"\:\ \"\2\0\2\4\-\1\1\-\0\5\"\,\
\ \ \"\c\a\p\a\b\i\l\i\t\i\e\s\"\:\ \{\}\,\
\ \ \"\c\l\i\e\n\t\I\n\f\o\"\:\ \{\
\ \ \ \ \"\n\a\m\e\"\:\ \"\m\c\p\-\c\a\l\l\e\r\"\,\
\ \ \ \ \"\v\e\r\s\i\o\n\"\:\ \"\0\.\1\.\0\"\
\ \ \}\
\}\
\`\`\`\
\
\*\*\R\e\s\p\o\n\s\e\ \r\e\s\u\l\t\ \f\i\e\l\d\s\ \u\s\e\d\ \b\y\ \`\m\c\p\-\c\a\l\l\e\r\`\:\*\*\
\
\|\ \F\i\e\l\d\ \|\ \T\y\p\e\ \|\ \D\e\s\c\r\i\p\t\i\o\n\ \|\
\|\-\-\-\|\-\-\-\|\-\-\-\|\
\|\ \`\p\r\o\t\o\c\o\l\V\e\r\s\i\o\n\`\ \|\ \`\s\t\r\i\n\g\`\ \|\ \S\e\r\v\e\r\'\s\ \p\r\o\t\o\c\o\l\ \v\e\r\s\i\o\n\ \|\
\|\ \`\s\e\r\v\e\r\I\n\f\o\.\n\a\m\e\`\ \|\ \`\s\t\r\i\n\g\`\ \|\ \S\e\r\v\e\r\ \d\i\s\p\l\a\y\ \n\a\m\e\ \|\
\|\ \`\s\e\r\v\e\r\I\n\f\o\.\v\e\r\s\i\o\n\`\ \|\ \`\s\t\r\i\n\g\`\ \|\ \S\e\r\v\e\r\ \v\e\r\s\i\o\n\ \|\
\|\ \`\i\n\s\t\r\u\c\t\i\o\n\s\`\ \|\ \`\s\t\r\i\n\g\?\`\ \|\ \O\p\t\i\o\n\a\l\ \u\s\a\g\e\ \i\n\s\t\r\u\c\t\i\o\n\s\ \s\h\o\w\n\ \i\n\ \i\n\t\e\r\a\c\t\i\v\e\ \m\o\d\e\ \|\
\
\-\-\-\
\
\#\#\ \`\t\o\o\l\s\/\l\i\s\t\`\
\
\*\*\R\e\q\u\e\s\t\ \p\a\r\a\m\s\:\*\*\
\
\`\`\`\j\s\o\n\
\{\ \"\c\u\r\s\o\r\"\:\ \"\<\o\p\a\q\u\e\-\s\t\r\i\n\g\>\"\ \}\
\`\`\`\
\
\`\c\u\r\s\o\r\`\ \i\s\ \o\m\i\t\t\e\d\ \o\n\ \t\h\e\ \f\i\r\s\t\ \r\e\q\u\e\s\t\.\ \I\f\ \t\h\e\ \r\e\s\p\o\n\s\e\ \i\n\c\l\u\d\e\s\ \`\n\e\x\t\C\u\r\s\o\r\`\,\ \t\h\e\ \n\e\x\t\ \p\a\g\e\ \i\s\ \f\e\t\c\h\e\d\ \b\y\ \r\e\p\e\a\t\i\n\g\ \w\i\t\h\ \t\h\a\t\ \c\u\r\s\o\r\.\
\
\*\*\R\e\s\p\o\n\s\e\ \r\e\s\u\l\t\:\*\*\
\
\`\`\`\j\s\o\n\
\{\
\ \ \"\t\o\o\l\s\"\:\ \[\
\ \ \ \ \{\
\ \ \ \ \ \ \"\n\a\m\e\"\:\ \"\r\e\a\d\_\f\i\l\e\"\,\
\ \ \ \ \ \ \"\d\e\s\c\r\i\p\t\i\o\n\"\:\ \"\R\e\a\d\ \t\h\e\ \c\o\m\p\l\e\t\e\ \c\o\n\t\e\n\t\s\ \o\f\ \a\ \f\i\l\e\.\"\,\
\ \ \ \ \ \ \"\i\n\p\u\t\S\c\h\e\m\a\"\:\ \{\
\ \ \ \ \ \ \ \ \"\t\y\p\e\"\:\ \"\o\b\j\e\c\t\"\,\
\ \ \ \ \ \ \ \ \"\p\r\o\p\e\r\t\i\e\s\"\:\ \{\
\ \ \ \ \ \ \ \ \ \ \"\p\a\t\h\"\:\ \{\ \"\t\y\p\e\"\:\ \"\s\t\r\i\n\g\"\,\ \"\d\e\s\c\r\i\p\t\i\o\n\"\:\ \"\.\.\.\"\ \}\
\ \ \ \ \ \ \ \ \}\,\
\ \ \ \ \ \ \ \ \"\r\e\q\u\i\r\e\d\"\:\ \[\"\p\a\t\h\"\]\
\ \ \ \ \ \ \}\
\ \ \ \ \}\
\ \ \]\,\
\ \ \"\n\e\x\t\C\u\r\s\o\r\"\:\ \n\u\l\l\
\}\
\`\`\`\
\
\`\m\c\p\-\c\a\l\l\e\r\`\ \a\u\t\o\m\a\t\i\c\a\l\l\y\ \p\a\g\i\n\a\t\e\s\ \u\n\t\i\l\ \`\n\e\x\t\C\u\r\s\o\r\`\ \i\s\ \a\b\s\e\n\t\ \o\r\ \e\m\p\t\y\.\
\
\-\-\-\
\
\#\#\ \`\t\o\o\l\s\/\c\a\l\l\`\
\
\*\*\R\e\q\u\e\s\t\ \p\a\r\a\m\s\:\*\*\
\
\`\`\`\j\s\o\n\
\{\
\ \ \"\n\a\m\e\"\:\ \"\r\e\a\d\_\f\i\l\e\"\,\
\ \ \"\a\r\g\u\m\e\n\t\s\"\:\ \{\
\ \ \ \ \"\p\a\t\h\"\:\ \"\C\a\r\g\o\.\t\o\m\l\"\
\ \ \}\
\}\
\`\`\`\
\
\*\*\R\e\s\p\o\n\s\e\ \r\e\s\u\l\t\:\*\*\
\
\`\`\`\j\s\o\n\
\{\
\ \ \"\c\o\n\t\e\n\t\"\:\ \[\
\ \ \ \ \{\ \"\t\y\p\e\"\:\ \"\t\e\x\t\"\,\ \"\t\e\x\t\"\:\ \"\[\p\a\c\k\a\g\e\]\\\\\n\n\a\m\e\ \=\ \\\\\"\m\c\p\-\c\a\l\l\e\r\\\\\"\.\.\.\"\ \}\
\ \ \]\,\
\ \ \"\i\s\E\r\r\o\r\"\:\ \f\a\l\s\e\
\}\
\`\`\`\
\
\#\#\#\ \C\o\n\t\e\n\t\ \B\l\o\c\k\ \T\y\p\e\s\
\
\|\ \`\t\y\p\e\`\ \|\ \F\i\e\l\d\s\ \|\ \D\e\s\c\r\i\p\t\i\o\n\ \|\
\|\-\-\-\|\-\-\-\|\-\-\-\|\
\|\ \`\t\e\x\t\`\ \|\ \`\t\e\x\t\:\ \s\t\r\i\n\g\`\ \|\ \P\l\a\i\n\ \t\e\x\t\ \o\r\ \J\S\O\N\ \s\t\r\i\n\g\ \|\
\|\ \`\i\m\a\g\e\`\ \|\ \`\d\a\t\a\:\ \s\t\r\i\n\g\`\,\ \`\m\i\m\e\T\y\p\e\:\ \s\t\r\i\n\g\`\ \|\ \B\a\s\e\6\4\-\e\n\c\o\d\e\d\ \i\m\a\g\e\ \|\
\|\ \`\r\e\s\o\u\r\c\e\`\ \|\ \`\r\e\s\o\u\r\c\e\:\ \o\b\j\e\c\t\`\ \|\ \E\m\b\e\d\d\e\d\ \r\e\s\o\u\r\c\e\ \r\e\f\e\r\e\n\c\e\ \|\
\|\ \*\(\a\n\y\ \o\t\h\e\r\)\*\ \|\ \—\ \|\ \P\a\r\s\e\d\ \a\s\ \`\U\n\k\n\o\w\n\`\,\ \d\i\s\p\l\a\y\e\d\ \a\s\ \`\[\U\n\k\n\o\w\n\ \c\o\n\t\e\n\t\ \b\l\o\c\k\]\`\ \|\
\
\`\i\s\E\r\r\o\r\:\ \t\r\u\e\`\ \i\n\d\i\c\a\t\e\s\ \t\h\e\ \t\o\o\l\ \i\t\s\e\l\f\ \r\e\t\u\r\n\e\d\ \a\n\ \e\r\r\o\r\ \(\n\o\t\ \a\ \t\r\a\n\s\p\o\r\t\/\p\r\o\t\o\c\o\l\ \e\r\r\o\r\)\.\ \T\h\e\ \c\o\n\t\e\n\t\ \w\i\l\l\ \c\o\n\t\a\i\n\ \e\r\r\o\r\ \d\e\t\a\i\l\s\.\
\
  },
};
