/*
 * Generated by PEG.js 0.10.0.
 *
 * http://pegjs.org/
 */

"use strict";

function peg$subclass(child, parent) {
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor();
}

function peg$SyntaxError(message, expected, found, location) {
  this.message  = message;
  this.expected = expected;
  this.found    = found;
  this.location = location;
  this.name     = "SyntaxError";

  if (typeof Error.captureStackTrace === "function") {
    Error.captureStackTrace(this, peg$SyntaxError);
  }
}

peg$subclass(peg$SyntaxError, Error);

peg$SyntaxError.buildMessage = function(expected, found) {
  var DESCRIBE_EXPECTATION_FNS = {
        literal: function(expectation) {
          return "\"" + literalEscape(expectation.text) + "\"";
        },

        "class": function(expectation) {
          var escapedParts = "",
              i;

          for (i = 0; i < expectation.parts.length; i++) {
            escapedParts += expectation.parts[i] instanceof Array
              ? classEscape(expectation.parts[i][0]) + "-" + classEscape(expectation.parts[i][1])
              : classEscape(expectation.parts[i]);
          }

          return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
        },

        any: function(expectation) {
          return "any character";
        },

        end: function(expectation) {
          return "end of input";
        },

        other: function(expectation) {
          return expectation.description;
        }
      };

  function hex(ch) {
    return ch.charCodeAt(0).toString(16).toUpperCase();
  }

  function literalEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/"/g,  '\\"')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
  }

  function classEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/\]/g, '\\]')
      .replace(/\^/g, '\\^')
      .replace(/-/g,  '\\-')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
  }

  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }

  function describeExpected(expected) {
    var descriptions = new Array(expected.length),
        i, j;

    for (i = 0; i < expected.length; i++) {
      descriptions[i] = describeExpectation(expected[i]);
    }

    descriptions.sort();

    if (descriptions.length > 0) {
      for (i = 1, j = 1; i < descriptions.length; i++) {
        if (descriptions[i - 1] !== descriptions[i]) {
          descriptions[j] = descriptions[i];
          j++;
        }
      }
      descriptions.length = j;
    }

    switch (descriptions.length) {
      case 1:
        return descriptions[0];

      case 2:
        return descriptions[0] + " or " + descriptions[1];

      default:
        return descriptions.slice(0, -1).join(", ")
          + ", or "
          + descriptions[descriptions.length - 1];
    }
  }

  function describeFound(found) {
    return found ? "\"" + literalEscape(found) + "\"" : "end of input";
  }

  return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
};

function peg$parse(input, options) {
  options = options !== void 0 ? options : {};

  var peg$FAILED = {},

      peg$startRuleIndices = { Grammar: 0 },
      peg$startRuleIndex   = 0,

      peg$consts = [
        function(fields) {
            return {
              type: 'Grammar',
              fields: fields
            };
          },
        function(fields) {
            return {
              type: 'Definition',
              fields: fields
            };
          },
        function(fields) {
            return {
              type: 'Expression',
              fields: fields
            };
          },
        function(fields) {
            return {
              type: 'Sequence',
              fields: fields
            };
          },
        function(fields) {
            return {
              type: 'Prefix',
              fields: fields
            };
          },
        function(fields) {
            return {
              type: 'Suffix',
              fields: fields
            };
          },
        function(fields) {
            return {
              type: 'Primary',
              fields: fields
            };
          },
        function(fields) {
            return {
              type: 'Identifier',
              fields: fields
            };
          },
        /^[a-z_]/i,
        peg$classExpectation([["a", "z"], "_"], false, true),
        function() {
            return {
              type: 'IdentStart',
              fields: makeText()
            };
          },
        /^[0-9]/,
        peg$classExpectation([["0", "9"]], false, false),
        function() { return makeText(); },
        function(fields) {
            return {
              type: 'IdentCont',
              fields: fields
            };
          },
        /^[']/,
        peg$classExpectation(["'"], false, false),
        /^["]/,
        peg$classExpectation(["\""], false, false),
        function(fields) {
            return {
              type: 'Literal',
              fields: fields
            };
          },
        "[",
        peg$literalExpectation("[", false),
        "]",
        peg$literalExpectation("]", false),
        function(fields) {
            return {
              type: 'Class',
              fields: fields
            };
          },
        "-",
        peg$literalExpectation("-", false),
        function(fields) {
            return {
              type: 'Range',
              fields: fields
            };
          },
        "\\",
        peg$literalExpectation("\\", false),
        /^[nrt'"[\]\\]/,
        peg$classExpectation(["n", "r", "t", "'", "\"", "[", "]", "\\"], false, false),
        /^[0-2]/,
        peg$classExpectation([["0", "2"]], false, false),
        /^[0-7]/,
        peg$classExpectation([["0", "7"]], false, false),
        peg$anyExpectation(),
        function() {
            return {
              type: 'Char',
              fields: makeText()
            };
          },
        "<-",
        peg$literalExpectation("<-", false),
        function(fields) {
            return {
              type: 'LEFTARROW',
              fields: fields
            };
          },
        "/",
        peg$literalExpectation("/", false),
        function(fields) {
            return {
              type: 'SLASH',
              fields: fields
            };
          },
        "&",
        peg$literalExpectation("&", false),
        function(fields) {
            return {
              type: 'AND',
              fields: fields
            };
          },
        "!",
        peg$literalExpectation("!", false),
        function(fields) {
            return {
              type: 'NOT',
              fields: fields
            };
          },
        "?",
        peg$literalExpectation("?", false),
        function(fields) {
            return {
              type: 'QUESTION',
              fields: fields
            };
          },
        "*",
        peg$literalExpectation("*", false),
        function(fields) {
            return {
              type: 'STAR',
              fields: fields
            };
          },
        "+",
        peg$literalExpectation("+", false),
        function(fields) {
            return {
              type: 'PLUS',
              fields: fields
            };
          },
        "(",
        peg$literalExpectation("(", false),
        function(fields) {
            return {
              type: 'OPEN',
              fields: fields
            };
          },
        ")",
        peg$literalExpectation(")", false),
        function(fields) {
            return {
              type: 'CLOSE',
              fields: fields
            };
          },
        ".",
        peg$literalExpectation(".", false),
        function(fields) {
            return {
              type: 'DOT',
              fields: fields
            };
          },
        function(fields) {
            return {
              type: 'Spacing',
              fields: fields
            };
          },
        "#",
        peg$literalExpectation("#", false),
        function(fields) {
            return {
              type: 'Comment',
              fields: fields
            };
          },
        " ",
        peg$literalExpectation(" ", false),
        "\t",
        peg$literalExpectation("\t", false),
        function(fields) {
            return {
              type: 'Space',
              fields: fields
            };
          },
        "\r\n",
        peg$literalExpectation("\r\n", false),
        "\n",
        peg$literalExpectation("\n", false),
        "\r",
        peg$literalExpectation("\r", false),
        function() {
            return {
              type: 'EndOfLine',
              fields: makeText()
            };
          },
        function() {
            return {
              type: 'EndOfFile',
            };
          }
      ],

      peg$bytecode = [
        peg$decode("%%;8/B#$;!/&#0#*;!&&&#/,$;</#$+#)(#'#(\"'#&'#/' 8!: !! )"),
        peg$decode("%%;'/5#;./,$;\"/#$+#)(#'#(\"'#&'#/' 8!:!!! )"),
        peg$decode("%%;#/Y#$%;//,#;#/#$+\")(\"'#&'#06*%;//,#;#/#$+\")(\"'#&'#&/#$+\")(\"'#&'#/' 8!:\"!! )"),
        peg$decode("%$;$0#*;$&/' 8!:#!! )"),
        peg$decode("%%;0.# &;1.\" &\"/,#;%/#$+\")(\"'#&'#/' 8!:$!! )"),
        peg$decode("%%;&/=#;2.) &;3.# &;4.\" &\"/#$+\")(\"'#&'#/' 8!:%!! )"),
        peg$decode("%%;'/8#%<;.=.##&&!&'#/#$+\")(\"'#&'#.Q &%;5/5#;\"/,$;6/#$+#)(#'#(\"'#&'#./ &;*.) &;+.# &;7/' 8!:&!! )"),
        peg$decode("%%;(/<#$;)0#*;)&/,$;8/#$+#)(#'#(\"'#&'#/' 8!:'!! )"),
        peg$decode("%4(\"\"5!7)/& 8!:*! )"),
        peg$decode("%;(.4 &%4+\"\"5!7,/& 8!:-! )/' 8!:.!! )"),
        peg$decode("%%%4/\"\"5!70/& 8!:-! )/\xA0#$%%<4/\"\"5!70=.##&&!&'#/,#;-/#$+\")(\"'#&'#0H*%%<4/\"\"5!70=.##&&!&'#/,#;-/#$+\")(\"'#&'#&/F$%4/\"\"5!70/& 8!:-! )/,$;8/#$+$)($'#(#'#(\"'#&'#.\xBB &%%41\"\"5!72/& 8!:-! )/\xA0#$%%<41\"\"5!72=.##&&!&'#/,#;-/#$+\")(\"'#&'#0H*%%<41\"\"5!72=.##&&!&'#/,#;-/#$+\")(\"'#&'#&/F$%41\"\"5!72/& 8!:-! )/,$;8/#$+$)($'#(#'#(\"'#&'#/' 8!:3!! )"),
        peg$decode("%%%24\"\"6475/& 8!:-! )/\xA0#$%%<26\"\"6677=.##&&!&'#/,#;,/#$+\")(\"'#&'#0H*%%<26\"\"6677=.##&&!&'#/,#;,/#$+\")(\"'#&'#&/F$%26\"\"6677/& 8!:-! )/,$;8/#$+$)($'#(#'#(\"'#&'#/' 8!:8!! )"),
        peg$decode("%%;-/F#%29\"\"697:/& 8!:-! )/,$;-/#$+#)(#'#(\"'#&'#.# &;-/' 8!:;!! )"),
        peg$decode("%%2<\"\"6<7=/2#4>\"\"5!7?/#$+\")(\"'#&'#.\xC9 &%2<\"\"6<7=/P#4@\"\"5!7A/A$4B\"\"5!7C/2$4B\"\"5!7C/#$+$)($'#(#'#(\"'#&'#.\x86 &%2<\"\"6<7=/F#4B\"\"5!7C/7$4B\"\"5!7C.\" &\"/#$+#)(#'#(\"'#&'#.M &%%<2<\"\"6<7==.##&&!&'#/1#1\"\"5!7D/#$+\")(\"'#&'#/& 8!:E! )"),
        peg$decode("%%%2F\"\"6F7G/& 8!:-! )/,#;8/#$+\")(\"'#&'#/' 8!:H!! )"),
        peg$decode("%%%2I\"\"6I7J/& 8!:-! )/,#;8/#$+\")(\"'#&'#/' 8!:K!! )"),
        peg$decode("%%2L\"\"6L7M/& 8!:-! )/1#;8/($8\":N\"!!)(\"'#&'#"),
        peg$decode("%%2O\"\"6O7P/& 8!:-! )/1#;8/($8\":Q\"!!)(\"'#&'#"),
        peg$decode("%%2R\"\"6R7S/& 8!:-! )/1#;8/($8\":T\"!!)(\"'#&'#"),
        peg$decode("%%2U\"\"6U7V/& 8!:-! )/1#;8/($8\":W\"!!)(\"'#&'#"),
        peg$decode("%%2X\"\"6X7Y/& 8!:-! )/1#;8/($8\":Z\"!!)(\"'#&'#"),
        peg$decode("%%2[\"\"6[7\\/& 8!:-! )/1#;8/($8\":]\"!!)(\"'#&'#"),
        peg$decode("%%2^\"\"6^7_/& 8!:-! )/1#;8/($8\":`\"!!)(\"'#&'#"),
        peg$decode("%%2a\"\"6a7b/& 8!:-! )/1#;8/($8\":c\"!!)(\"'#&'#"),
        peg$decode("%$;:.# &;90)*;:.# &;9&/' 8!:d!! )"),
        peg$decode("%%%2e\"\"6e7f/& 8!:-! )/\x8C#$%%<;;=.##&&!&'#/5#1\"\"5!7D/'$8\":-\" )(\"'#&'#0K*%%<;;=.##&&!&'#/5#1\"\"5!7D/'$8\":-\" )(\"'#&'#&/,$;;/#$+#)(#'#(\"'#&'#/' 8!:g!! )"),
        peg$decode("%%2h\"\"6h7i.) &2j\"\"6j7k/& 8!:-! ).# &;;/' 8!:l!! )"),
        peg$decode("%2m\"\"6m7n.5 &2o\"\"6o7p.) &2q\"\"6q7r/& 8!:s! )"),
        peg$decode("%%<1\"\"5!7D=.##&&!&'#/& 8!:t! )")
      ],

      peg$currPos          = 0,
      peg$savedPos         = 0,
      peg$posDetailsCache  = [{ line: 1, column: 1 }],
      peg$maxFailPos       = 0,
      peg$maxFailExpected  = [],
      peg$silentFails      = 0,

      peg$resultsCache = {},

      peg$result;

  if ("startRule" in options) {
    if (!(options.startRule in peg$startRuleIndices)) {
      throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
    }

    peg$startRuleIndex = peg$startRuleIndices[options.startRule];
  }

  function text() {
    return input.substring(peg$savedPos, peg$currPos);
  }

  function location() {
    return peg$computeLocation(peg$savedPos, peg$currPos);
  }

  function expected(description, location) {
    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

    throw peg$buildStructuredError(
      [peg$otherExpectation(description)],
      input.substring(peg$savedPos, peg$currPos),
      location
    );
  }

  function error(message, location) {
    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

    throw peg$buildSimpleError(message, location);
  }

  function peg$literalExpectation(text, ignoreCase) {
    return { type: "literal", text: text, ignoreCase: ignoreCase };
  }

  function peg$classExpectation(parts, inverted, ignoreCase) {
    return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase };
  }

  function peg$anyExpectation() {
    return { type: "any" };
  }

  function peg$endExpectation() {
    return { type: "end" };
  }

  function peg$otherExpectation(description) {
    return { type: "other", description: description };
  }

  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos], p;

    if (details) {
      return details;
    } else {
      p = pos - 1;
      while (!peg$posDetailsCache[p]) {
        p--;
      }

      details = peg$posDetailsCache[p];
      details = {
        line:   details.line,
        column: details.column
      };

      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }

        p++;
      }

      peg$posDetailsCache[pos] = details;
      return details;
    }
  }

  function peg$computeLocation(startPos, endPos) {
    var startPosDetails = peg$computePosDetails(startPos),
        endPosDetails   = peg$computePosDetails(endPos);

    return {
      start: {
        offset: startPos,
        line:   startPosDetails.line,
        column: startPosDetails.column
      },
      end: {
        offset: endPos,
        line:   endPosDetails.line,
        column: endPosDetails.column
      }
    };
  }

  function peg$fail(expected) {
    if (peg$currPos < peg$maxFailPos) { return; }

    if (peg$currPos > peg$maxFailPos) {
      peg$maxFailPos = peg$currPos;
      peg$maxFailExpected = [];
    }

    peg$maxFailExpected.push(expected);
  }

  function peg$buildSimpleError(message, location) {
    return new peg$SyntaxError(message, null, null, location);
  }

  function peg$buildStructuredError(expected, found, location) {
    return new peg$SyntaxError(
      peg$SyntaxError.buildMessage(expected, found),
      expected,
      found,
      location
    );
  }

  function peg$decode(s) {
    var bc = new Array(s.length), i;

    for (i = 0; i < s.length; i++) {
      bc[i] = s.charCodeAt(i) - 32;
    }

    return bc;
  }

  function peg$parseRule(index) {
    var bc    = peg$bytecode[index],
        ip    = 0,
        ips   = [],
        end   = bc.length,
        ends  = [],
        stack = [],
        params, i;

    var key    = peg$currPos * 29 + index,
        cached = peg$resultsCache[key];

    if (cached) {
      peg$currPos = cached.nextPos;

      return cached.result;
    }

    while (true) {
      while (ip < end) {
        switch (bc[ip]) {
          case 0:
            stack.push(peg$consts[bc[ip + 1]]);
            ip += 2;
            break;

          case 1:
            stack.push(void 0);
            ip++;
            break;

          case 2:
            stack.push(null);
            ip++;
            break;

          case 3:
            stack.push(peg$FAILED);
            ip++;
            break;

          case 4:
            stack.push([]);
            ip++;
            break;

          case 5:
            stack.push(peg$currPos);
            ip++;
            break;

          case 6:
            stack.pop();
            ip++;
            break;

          case 7:
            peg$currPos = stack.pop();
            ip++;
            break;

          case 8:
            stack.length -= bc[ip + 1];
            ip += 2;
            break;

          case 9:
            stack.splice(-2, 1);
            ip++;
            break;

          case 10:
            stack[stack.length - 2].push(stack.pop());
            ip++;
            break;

          case 11:
            stack.push(stack.splice(stack.length - bc[ip + 1], bc[ip + 1]));
            ip += 2;
            break;

          case 12:
            stack.push(input.substring(stack.pop(), peg$currPos));
            ip++;
            break;

          case 13:
            ends.push(end);
            ips.push(ip + 3 + bc[ip + 1] + bc[ip + 2]);

            if (stack[stack.length - 1]) {
              end = ip + 3 + bc[ip + 1];
              ip += 3;
            } else {
              end = ip + 3 + bc[ip + 1] + bc[ip + 2];
              ip += 3 + bc[ip + 1];
            }

            break;

          case 14:
            ends.push(end);
            ips.push(ip + 3 + bc[ip + 1] + bc[ip + 2]);

            if (stack[stack.length - 1] === peg$FAILED) {
              end = ip + 3 + bc[ip + 1];
              ip += 3;
            } else {
              end = ip + 3 + bc[ip + 1] + bc[ip + 2];
              ip += 3 + bc[ip + 1];
            }

            break;

          case 15:
            ends.push(end);
            ips.push(ip + 3 + bc[ip + 1] + bc[ip + 2]);

            if (stack[stack.length - 1] !== peg$FAILED) {
              end = ip + 3 + bc[ip + 1];
              ip += 3;
            } else {
              end = ip + 3 + bc[ip + 1] + bc[ip + 2];
              ip += 3 + bc[ip + 1];
            }

            break;

          case 16:
            if (stack[stack.length - 1] !== peg$FAILED) {
              ends.push(end);
              ips.push(ip);

              end = ip + 2 + bc[ip + 1];
              ip += 2;
            } else {
              ip += 2 + bc[ip + 1];
            }

            break;

          case 17:
            ends.push(end);
            ips.push(ip + 3 + bc[ip + 1] + bc[ip + 2]);

            if (input.length > peg$currPos) {
              end = ip + 3 + bc[ip + 1];
              ip += 3;
            } else {
              end = ip + 3 + bc[ip + 1] + bc[ip + 2];
              ip += 3 + bc[ip + 1];
            }

            break;

          case 18:
            ends.push(end);
            ips.push(ip + 4 + bc[ip + 2] + bc[ip + 3]);

            if (input.substr(peg$currPos, peg$consts[bc[ip + 1]].length) === peg$consts[bc[ip + 1]]) {
              end = ip + 4 + bc[ip + 2];
              ip += 4;
            } else {
              end = ip + 4 + bc[ip + 2] + bc[ip + 3];
              ip += 4 + bc[ip + 2];
            }

            break;

          case 19:
            ends.push(end);
            ips.push(ip + 4 + bc[ip + 2] + bc[ip + 3]);

            if (input.substr(peg$currPos, peg$consts[bc[ip + 1]].length).toLowerCase() === peg$consts[bc[ip + 1]]) {
              end = ip + 4 + bc[ip + 2];
              ip += 4;
            } else {
              end = ip + 4 + bc[ip + 2] + bc[ip + 3];
              ip += 4 + bc[ip + 2];
            }

            break;

          case 20:
            ends.push(end);
            ips.push(ip + 4 + bc[ip + 2] + bc[ip + 3]);

            if (peg$consts[bc[ip + 1]].test(input.charAt(peg$currPos))) {
              end = ip + 4 + bc[ip + 2];
              ip += 4;
            } else {
              end = ip + 4 + bc[ip + 2] + bc[ip + 3];
              ip += 4 + bc[ip + 2];
            }

            break;

          case 21:
            stack.push(input.substr(peg$currPos, bc[ip + 1]));
            peg$currPos += bc[ip + 1];
            ip += 2;
            break;

          case 22:
            stack.push(peg$consts[bc[ip + 1]]);
            peg$currPos += peg$consts[bc[ip + 1]].length;
            ip += 2;
            break;

          case 23:
            stack.push(peg$FAILED);
            if (peg$silentFails === 0) {
              peg$fail(peg$consts[bc[ip + 1]]);
            }
            ip += 2;
            break;

          case 24:
            peg$savedPos = stack[stack.length - 1 - bc[ip + 1]];
            ip += 2;
            break;

          case 25:
            peg$savedPos = peg$currPos;
            ip++;
            break;

          case 26:
            params = bc.slice(ip + 4, ip + 4 + bc[ip + 3]);
            for (i = 0; i < bc[ip + 3]; i++) {
              params[i] = stack[stack.length - 1 - params[i]];
            }

            stack.splice(
              stack.length - bc[ip + 2],
              bc[ip + 2],
              peg$consts[bc[ip + 1]].apply(null, params)
            );

            ip += 4 + bc[ip + 3];
            break;

          case 27:
            stack.push(peg$parseRule(bc[ip + 1]));
            ip += 2;
            break;

          case 28:
            peg$silentFails++;
            ip++;
            break;

          case 29:
            peg$silentFails--;
            ip++;
            break;

          default:
            throw new Error("Invalid opcode: " + bc[ip] + ".");
        }
      }

      if (ends.length > 0) {
        end = ends.pop();
        ip = ips.pop();
      } else {
        break;
      }
    }

    peg$resultsCache[key] = { nextPos: peg$currPos, result: stack[0] };

    return stack[0];
  }


    function makeText() {
      return {
        type: 'Text',
        text: text(),
        offset: location().start.offset
      };
    }


  peg$result = peg$parseRule(peg$startRuleIndex);

  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$fail(peg$endExpectation());
    }

    throw peg$buildStructuredError(
      peg$maxFailExpected,
      peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
      peg$maxFailPos < input.length
        ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
        : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
    );
  }
}

module.exports = {
  SyntaxError: peg$SyntaxError,
  parse:       peg$parse
};