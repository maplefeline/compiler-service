module.exports = function (req, res) {
  res.send(
    'Grammar <- Spacing Definition+ EndOfFile\n' +
    '# Hierarchical syntax\n' +
    'Definition <- Identifier LEFTARROW Expression\n' +
    'Expression <- Sequence (SLASH Sequence)*\n' +
    'Prefix <- (AND / NOT)? Suffix\n' +
    'Primary <- Identifier !LEFTARROW / OPEN Expression CLOSE / Literal / Class / DOT\n' +
    'Sequence <- Prefix*\n' +
    'Suffix <- Primary (QUESTION / STAR / PLUS)?\n' +
    '# Lexical syntax\n' +
    'EndOfFile <- !.\n' +
    'IdentCont <- IdentStart / [0-9]\n' +
    'Identifier <- IdentStart IdentCont* Spacing\n' +
    'IdentStart <- [a-zA-Z_]\n' +
    'Spacing <- (Space / Comment)*\n' +
    "AND <- '&' Spacing\n" +
    "Char <- '\\\\' [nrt'\"\\[\\]\\\\] / '\\\\' [0-2][0-7][0-7] / '\\\\' [0-7][0-7]? / !'\\\\' .\n" +
    "Class <- '[' (!']' Range)* ']' Spacing\n" +
    "CLOSE <- ')' Spacing\n" +
    "Comment <- '#' (!EndOfLine .)* EndOfLine\n" +
    "DOT <- '.' Spacing\n" +
    "EndOfLine <- '\\r\\n' / '\\n' / '\\r'\n" +
    "LEFTARROW <- '<-' Spacing\n" +
    "Literal <- ['] (!['] Char)* ['] Spacing / [\"] (![\"] Char)* [\"] Spacing\n" +
    "NOT <- '!' Spacing\n" +
    "OPEN <- '(' Spacing\n" +
    "PLUS <- '+' Spacing\n" +
    "QUESTION <- '?' Spacing\n" +
    "Range <- Char '-' Char / Char\n" +
    "SLASH <- '/' Spacing\n" +
    "Space <- ' ' / '\\t' / EndOfLine\n" +
    "STAR <- '*' Spacing\n"
  )
}
