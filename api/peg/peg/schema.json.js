const Bacon = require('baconjs').Bacon;

module.exports = function (req) {
  return Bacon.once({
    "$schema": "http://json-schema.org/draft-04/schema#",
    "description": "A PEG syntax tree",
    "id": "https://" + req.hostname + req.originalUrl,
    "type": "object",
    "required": [
      "type",
      "spacing",
      "definitions",
      "endoffile"
    ],
    "properties": {
      "type": {
        "enum": [
          "Grammar"
        ]
      },
      "spacing": { "$ref": "#/definitions/Spacing" },
      "definitions": {
        "type": "array",
        "items": { "$ref": "#/definitions/Definition" },
        "minItems": 1
      },
      "endoffile": { "$ref": "#/definitions/EndOfFile" }
    },
    "definitions": {
      "Text": {
        "type": "object",
        "required": [
          "type",
          "text",
          "offset"
        ],
        "properties": {
          "type": {
            "enum": [
              "Text"
            ]
          },
          "text": {
            "type": "string"
          },
          "offset": {
            "type": "integer",
            "minimum": 0
          }
        }
      },
      "Definition": {
        "type": "object",
        "required": [
          "type",
          "identifier",
          "leftarrow",
          "expression"
        ],
        "properties": {
          "type": {
            "enum": [
              "Definition"
            ]
          },
          "identifier": { "$ref": "#/definitions/Identifier" },
          "leftarrow": { "$ref": "#/definitions/LEFTARROW" },
          "expression": { "$ref": "#/definitions/Expression" }
        }
      },
      "Expression": {
        "type": "object",
        "required": [
          "type",
          "sequence",
          "alternates"
        ],
        "properties": {
          "type": {
            "enum": [
              "Expression"
            ]
          },
          "sequence": { "$ref": "#/definitions/Sequence" },
          "alternates": {
            "type": "array",
            "items": {
              "type": "object",
              "required": [
                "slash",
                "sequence"
              ],
              "properties": {
                "slash": { "$ref": "#/definitions/SLASH" },
                "sequence": { "$ref": "#/definitions/Sequence" }
              }
            }
          }
        }
      },
      "Sequence": {
        "type": "object",
        "required": [
          "type",
          "prefixes"
        ],
        "properties": {
          "type": {
            "enum": [
              "Sequence"
            ]
          },
          "prefixes": {
            "type": "array",
            "items": { "$ref": "#/definitions/Prefix" }
          }
        }
      },
      "Prefix": {
        "type": "object",
        "required": [
          "type",
          "suffix"
        ],
        "properties": {
          "type": {
            "enum": [
              "Prefix"
            ]
          },
          "and": { "$ref": "#/definitions/AND" },
          "not": { "$ref": "#/definitions/NOT" },
          "suffix": { "$ref": "#/definitions/Suffix" }
        }
      },
      "Suffix": {
        "type": "object",
        "required": [
          "type",
          "primary"
        ],
        "properties": {
          "type": {
            "enum": [
              "Suffix"
            ]
          },
          "primary": { "$ref": "#/definitions/Primary" },
          "question": { "$ref": "#/definitions/QUESTION" },
          "star": { "$ref": "#/definitions/STAR" },
          "plus": { "$ref": "#/definitions/PLUS" }
        }
      },
      "Primary": {
        "type": "object",
        "required": [
          "type"
        ],
        "properties": {
          "type": {
            "enum": [
              "Primary"
            ]
          },
          "identifier": { "$ref": "#/definitions/Identifier" },
          "open": { "$ref": "#/definitions/OPEN" },
          "expression": { "$ref": "#/definitions/Expression" },
          "close": { "$ref": "#/definitions/CLOSE" },
          "literal": { "$ref": "#/definitions/Literal" },
          "class": { "$ref": "#/definitions/Class" },
          "dot": { "$ref": "#/definitions/DOT" }
        }
      },
      "Identifier": {
        "type": "object",
        "required": [
          "type",
          "identstart",
          "identconts",
          "spacing"
        ],
        "properties": {
          "type": {
            "enum": [
              "Identifier"
            ]
          },
          "identstart": { "$ref": "#/definitions/IdentStart" },
          "identconts": {
            "type": "array",
            "items": { "$ref": "#/definitions/IdentCont" }
          },
          "spacing": { "$ref": "#/definitions/Spacing" }
        }
      },
      "IdentStart": {
        "type": "object",
        "required": [
          "type",
          "text"
        ],
        "properties": {
          "type": {
            "enum": [
              "IdentStart"
            ]
          },
          "text": {
            "allOf": [
              { "$ref": "#/definitions/Text" },
              {
                "type": "object",
                "properties": {
                  "text": {
                    "enum": [
                      "a",
                      "b",
                      "c",
                      "d",
                      "e",
                      "f",
                      "g",
                      "h",
                      "i",
                      "j",
                      "k",
                      "l",
                      "m",
                      "n",
                      "o",
                      "p",
                      "q",
                      "r",
                      "s",
                      "t",
                      "u",
                      "v",
                      "w",
                      "x",
                      "y",
                      "z",
                      "A",
                      "B",
                      "C",
                      "D",
                      "E",
                      "F",
                      "G",
                      "H",
                      "I",
                      "J",
                      "K",
                      "L",
                      "M",
                      "N",
                      "O",
                      "P",
                      "Q",
                      "R",
                      "S",
                      "T",
                      "U",
                      "V",
                      "W",
                      "X",
                      "Y",
                      "Z",
                      "_"
                    ]
                  }
                }
              }
            ]
          }
        }
      },
      "IdentCont": {
        "type": "object",
        "required": [
          "type"
        ],
        "properties": {
          "type": {
            "enum": [
              "IdentCont"
            ]
          },
          "text": {
            "allOf": [
              { "$ref": "#/definitions/Text" },
              {
                "type": "object",
                "properties": {
                  "text": {
                    "enum": [
                      "0",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9"
                    ]
                  }
                }
              }
            ]
          },
          "identstart": { "$ref": "#/definitions/IdentStart" }
        }
      },
      "Literal": {
        "type": "object",
        "required": [
          "type",
          "open",
          "chars",
          "close",
          "spacing"
        ],
        "properties": {
          "type": {
            "enum": [
              "Literal"
            ]
          },
          "open": {
            "allOf": [
              { "$ref": "#/definitions/Text" },
              {
                "type": "object",
                "properties": {
                  "text": {
                    "enum": [
                      "\""
                    ]
                  }
                }
              }
            ]
          },
          "chars": {
            "type": "array",
            "items": { "$ref": "#/definitions/Char" }
          },
          "close": {
            "allOf": [
              { "$ref": "#/definitions/Text" },
              {
                "type": "object",
                "properties": {
                  "text": {
                    "enum": [
                      "\""
                    ]
                  }
                }
              }
            ]
          },
          "spacing": { "$ref": "#/definitions/Spacing" }
        }
      },
      "Class": {
        "type": "object",
        "required": [
          "type",
          "open",
          "ranges",
          "close",
          "spacing"
        ],
        "properties": {
          "type": {
            "enum": [
              "Class"
            ]
          },
          "open": {
            "allOf": [
              { "$ref": "#/definitions/Text" },
              {
                "type": "object",
                "properties": {
                  "text": {
                    "enum": [
                      "["
                    ]
                  }
                }
              }
            ]
          },
          "ranges": {
            "type": "array",
            "items": { "$ref": "#/definitions/Range" }
          },
          "close": {
            "allOf": [
              { "$ref": "#/definitions/Text" },
              {
                "type": "object",
                "properties": {
                  "text": {
                    "enum": [
                      "]"
                    ]
                  }
                }
              }
            ]
          },
          "spacing": { "$ref": "#/definitions/Spacing" }
        }
      },
      "Range": {
        "type": "object",
        "required": [
          "type",
          "start"
        ],
        "properties": {
          "type": {
            "enum": [
              "Range"
            ]
          },
          "start": { "$ref": "#/definitions/Char" },
          "text": {
            "allOf": [
              { "$ref": "#/definitions/Text" },
              {
                "type": "object",
                "properties": {
                  "text": {
                    "enum": [
                      "-"
                    ]
                  }
                }
              }
            ]
          },
          "end": { "$ref": "#/definitions/Char" }
        }
      },
      "Char": {
        "type": "object",
        "required": [
          "type",
          "text"
        ],
        "properties": {
          "type": {
            "enum": [
              "Char"
            ]
          },
          "text": {
            "allOf": [
              { "$ref": "#/definitions/Text" },
              {
                "type": "object",
                "properties": {
                  "text": {
                    "type": "string",
                    "pattern": "^(\\\\([nrt''\\[\\]\\\\]|[0-2][0-7][0-7|[0-7][0-7]?])|[^\\\\])$"
                  }
                }
              }
            ]
          }
        }
      },
      "LEFTARROW": {
        "type": "object",
        "required": [
          "type",
          "leftarrow",
          "spacing"
        ],
        "properties": {
          "type": {
            "enum": [
              "LEFTARROW"
            ]
          },
          "text": {
            "allOf": [
              { "$ref": "#/definitions/Text" },
              {
                "type": "object",
                "properties": {
                  "text": {
                    "enum": [
                      "<-"
                    ]
                  }
                }
              }
            ]
          },
          "spacing": { "$ref": "#/definitions/Spacing" }
        }
      },
      "SLASH": {
        "type": "object",
        "required": [
          "type",
          "slash",
          "spacing"
        ],
        "properties": {
          "type": {
            "enum": [
              "SLASH"
            ]
          },
          "text": {
            "allOf": [
              { "$ref": "#/definitions/Text" },
              {
                "type": "object",
                "properties": {
                  "text": {
                    "enum": [
                      "/"
                    ]
                  }
                }
              }
            ]
          },
          "spacing": { "$ref": "#/definitions/Spacing" }
        }
      },
      "AND": {
        "type": "object",
        "required": [
          "type",
          "and",
          "spacing"
        ],
        "properties": {
          "type": {
            "enum": [
              "AND"
            ]
          },
          "text": {
            "allOf": [
              { "$ref": "#/definitions/Text" },
              {
                "type": "object",
                "properties": {
                  "text": {
                    "enum": [
                      "&"
                    ]
                  }
                }
              }
            ]
          },
          "spacing": { "$ref": "#/definitions/Spacing" }
        }
      },
      "NOT": {
        "type": "object",
        "required": [
          "type",
          "not",
          "spacing"
        ],
        "properties": {
          "type": {
            "enum": [
              "NOT"
            ]
          },
          "not": {
            "allOf": [
              { "$ref": "#/definitions/Text" },
              {
                "type": "object",
                "properties": {
                  "text": {
                    "enum": [
                      "!"
                    ]
                  }
                }
              }
            ]
          },
          "spacing": { "$ref": "#/definitions/Spacing" }
        }
      },
      "QUESTION": {
        "type": "object",
        "required": [
          "type",
          "question",
          "spacing"
        ],
        "properties": {
          "type": {
            "enum": [
              "QUESTION"
            ]
          },
          "text": {
            "allOf": [
              { "$ref": "#/definitions/Text" },
              {
                "type": "object",
                "properties": {
                  "text": {
                    "enum": [
                      "?"
                    ]
                  }
                }
              }
            ]
          },
          "spacing": { "$ref": "#/definitions/Spacing" }
        }
      },
      "STAR": {
        "type": "object",
        "required": [
          "type",
          "star",
          "spacing"
        ],
        "properties": {
          "type": {
            "enum": [
              "STAR"
            ]
          },
          "text": {
            "allOf": [
              { "$ref": "#/definitions/Text" },
              {
                "type": "object",
                "properties": {
                  "text": {
                    "enum": [
                      "*"
                    ]
                  }
                }
              }
            ]
          },
          "spacing": { "$ref": "#/definitions/Spacing" }
        }
      },
      "PLUS": {
        "type": "object",
        "required": [
          "type",
          "plus",
          "spacing"
        ],
        "properties": {
          "type": {
            "enum": [
              "PLUS"
            ]
          },
          "text": {
            "allOf": [
              { "$ref": "#/definitions/Text" },
              {
                "type": "object",
                "properties": {
                  "text": {
                    "enum": [
                      "+"
                    ]
                  }
                }
              }
            ]
          },
          "spacing": { "$ref": "#/definitions/Spacing" }
        }
      },
      "OPEN": {
        "type": "object",
        "required": [
          "type",
          "open",
          "spacing"
        ],
        "properties": {
          "type": {
            "enum": [
              "OPEN"
            ]
          },
          "text": {
            "allOf": [
              { "$ref": "#/definitions/Text" },
              {
                "type": "object",
                "properties": {
                  "text": {
                    "enum": [
                      "("
                    ]
                  }
                }
              }
            ]
          },
          "spacing": { "$ref": "#/definitions/Spacing" }
        }
      },
      "CLOSE": {
        "type": "object",
        "required": [
          "type",
          "close",
          "spacing"
        ],
        "properties": {
          "type": {
            "enum": [
              "CLOSE"
            ]
          },
          "text": {
            "allOf": [
              { "$ref": "#/definitions/Text" },
              {
                "type": "object",
                "properties": {
                  "text": {
                    "enum": [
                      ")"
                    ]
                  }
                }
              }
            ]
          },
          "spacing": { "$ref": "#/definitions/Spacing" }
        }
      },
      "DOT": {
        "type": "object",
        "required": [
          "type",
          "dot",
          "spacing"
        ],
        "properties": {
          "type": {
            "enum": [
              "DOT"
            ]
          },
          "dot": {
            "allOf": [
              { "$ref": "#/definitions/Text" },
              {
                "type": "object",
                "properties": {
                  "text": {
                    "enum": [
                      "."
                    ]
                  }
                }
              }
            ]
          },
          "spacing": { "$ref": "#/definitions/Spacing" }
        }
      },
      "Spacing": {
        "type": "object",
        "required": [
          "type",
          "spacing"
        ],
        "properties": {
          "type": {
            "enum": [
              "Spacing"
            ]
          },
          "spacing": {
            "type": "array",
            "items": {
              "oneOf": [
                { "$ref": "#/definitions/Space" },
                { "$ref": "#/definitions/Comment" }
              ]
            }
          }
        }
      },
      "Comment": {
        "type": "object",
        "required": [
          "type",
          "start",
          "content",
          "endofline"
        ],
        "properties": {
          "type": {
            "enum": [
              "Comment"
            ]
          },
          "start": {
            "allOf": [
              { "$ref": "#/definitions/Text" },
              {
                "type": "object",
                "properties": {
                  "text": {
                    "enum": [
                      "#"
                    ]
                  }
                }
              }
            ]
          },
          "content": {
            "type": "array",
            "items": { "$ref": "#/definitions/Text" }
          },
          "endofline": { "$ref": "#/definitions/EndOfLine" }
        }
      },
      "Space": {
        "type": "object",
        "required": [
          "type"
        ],
        "properties": {
          "type": {
            "enum": [
              "Space"
            ]
          },
          "text": {
            "allOf": [
              { "$ref": "#/definitions/Text" },
              {
                "type": "object",
                "properties": {
                  "text": {
                    "enum": [
                      " ",
                      "\t"
                    ]
                  }
                }
              }
            ]
          },
          "endofline": { "$ref": "#/definitions/EndOfLine" }
        }
      },
      "EndOfLine": {
        "type": "object",
        "required": [
          "type",
          "text"
        ],
        "properties": {
          "type": {
            "enum": [
              "EndOfLine"
            ]
          },
          "text": {
            "allOf": [
              { "$ref": "#/definitions/Text" },
              {
                "type": "object",
                "properties": {
                  "text": {
                    "enum": [
                      "\r",
                      "\r\n",
                      "\n"
                    ]
                  }
                }
              }
            ]
          }
        }
      },
      "EndOfFile": {
        "type": "object",
        "required": [
          "type"
        ],
        "properties": {
          "type": {
            "enum": [
              "EndOfFile"
            ]
          }
        }
      }
    }
  }).toPromise();
};
