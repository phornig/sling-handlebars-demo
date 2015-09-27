module.exports = function (grunt) {
    return {
        options: {
            requireCurlyBraces: [
                "if",
                "else",
                "for",
                "while",
                "do",
                "try",
                "catch",
                "case",
                "default"
            ],
            requireSpaceAfterKeywords: [
                "if",
                "else",
                "for",
                "while",
                "do",
                "switch",
                "return",
                "try",
                "catch"
            ],
            requireSpaceBeforeBlockStatements: true,
            requireParenthesesAroundIIFE: true,
            requireSpacesInConditionalExpression: true,
            requireSpacesInFunctionExpression: {
                beforeOpeningCurlyBrace: true
            },
            requireSpacesInAnonymousFunctionExpression: {
                beforeOpeningCurlyBrace: true
            },
            requireSpacesInNamedFunctionExpression: {
                beforeOpeningCurlyBrace: true
            },
            requireSpacesInFunctionDeclaration: {
                beforeOpeningCurlyBrace: true
            },
            requireMultipleVarDecl: true,
            requireBlocksOnNewline: true,
            disallowEmptyBlocks: true,
            disallowDanglingUnderscores: true,
            disallowSpaceAfterObjectKeys: true,
            requireCommaBeforeLineBreak: true,
            requireOperatorBeforeLineBreak: true,
            disallowSpaceAfterPrefixUnaryOperators: [
                "++",
                "--",
                "+",
                "-",
                "~",
                "!"
            ],
            disallowSpaceBeforePostfixUnaryOperators: [
                "++",
                "--"
            ],
            requireSpaceBeforeBinaryOperators: [
                "=",
                "+",
                "-",
                "/",
                "*",
                "==",
                "===",
                "!=",
                "!=="
            ],
            requireSpaceAfterBinaryOperators: [
                "=",
                ",",
                "+",
                "-",
                "/",
                "*",
                "==",
                "===",
                "!=",
                "!=="
            ],
            requireCamelCaseOrUpperCaseIdentifiers: "ignoreProperties",
            disallowKeywords: [
                "with"
            ],
            disallowMultipleLineStrings: true,
            validateLineBreaks: "LF",
            validateQuoteMarks: "\"",
            validateIndentation: 4,
            disallowMixedSpacesAndTabs: "smart",
            disallowTrailingWhitespace: true,
            disallowTrailingComma: true,
            requireCapitalizedConstructors: true,
            safeContextKeyword: [
                "self"
            ],
            requireDotNotation: {
                "allExcept": ["keywords"]
            },
            disallowYodaConditions: true,
            requireSpaceAfterLineComment: true
        },
        grunt: {
            src: ["Gruntfile.js", "grunt/**/*.js"]
        },
        js: {
            src: [
                "<%= assetsSrc %>/js/main/**/*.js"
            ]
        },
        server: {
            src: [
                "server/**/*.js"
            ]
        }
    };
};
