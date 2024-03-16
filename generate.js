import {read, rpw, bash, sysArgs, write} from "/home/kdog3682/2024-javascript/nodekit/deno.js"
import * as chalk from "/home/kdog3682/2024-javascript/js-toolkit/chalk.js"
import * as variables from "/home/kdog3682/2023/variables.js"
import {packageManager} from "/home/kdog3682/2024-javascript/nodekit/packageManager.js"
import {getDashedText, LineEditor} from "/home/kdog3682/2024-javascript/js-toolkit/LineEditor.js"
import {vueflow} from "/home/kdog3682/2024-javascript/vuekit/vueflow.js"
// /* prettier-ignore */ import {componentManager, rpx, datetime, tclip, jclip, readRaw, manager, prependOrReplace, mdate, WriteFile, LogFile, vimFunctionConnector, tempFile, resolvePath, path2024, write2024, packageManager3, smart_path, createCodeString2, buildBindings2, JavascriptBuilder, ltf, appendVariable3, generateFile, generateImports, getStats, ff, createCodeString, finishConfig, findError2, onConfigStart, packageManager2, getFiles2, colonPackageManager, packageManagerSingletonRunColon, getText, packageManagerSingleton, oneArg, toVimVariable, headAndTail, absdir, getSection, sortByDate, dateTheFile, vimConnector, writeExportFile, pathJoin, jslib, pylib, backupFile, writeAndBackup, superFileGetter, submit, clipOrLog, fileGetter, toTimestamp, appendVariableFile, readParse, incrementalName, rfile, getJuneJson, isRecentFile, unmute, clip2, clip2 as c2, appendVariable2, moduleFunctionFactory, dirGetter, save, getRecentFile, fileOrText, logger, writeFromOptions, appendFileName, backup, getFiles, mergeJson, fileFromKey, path, mergeFiles, writeUnitTest, runUnitTest, NodeError, isDir, NodeAssertion, sysArgs, sysArg, mute, abspath, getFile, logAction, head, getDir, dirFromPath, npath, textAndLang, shunt, sysget, append, prepend, currentFile, clip, isFile, normFileDir, normRead, normWrite, normAppend, normPrepend, normRpw, openFile, read, rpw, textGetter, write, getString, appendSelf, appendVariable, argv, exit, request} from "/home/kdog3682/2023/node-utils.js"
/* prettier-ignore */ import {fooga, asyncToggle, touched, chosen, lastOf, firstOf, isBlockEnter, group3, loremIpsum, exportString, deepToggle, maybeNewlineIndent, onAndOff, flattenModule, isModule, isNativeHtmlTag, partitionByValues, strcall, getLongest2, must, mconfig, unreachable, notify, storager, joiner, removeVeryStartingComments, ireplace, removeCommentsInPlace, editf, getLineTokens, IndexedStore, abstractError, bool, xassert, getSetLines, inMiddle, replaceLast, ensureExtension, multipleReplacer, getGradeLevel, constructEdit, getYear, Modulus, wrapClassMethods, proseReplacer, parseComments, parseFunctionDictComments, todo, dictAssertion, boundModularIncrement, construct, reduceToString2, pageTurner, assignCumulative, defaultMergeStrategy, dictSetter3, toArguments, reTemplate, parseFrontmatter, typeAssertion, defineGetter, assignAllowed, simpleRecursiveWalk, simpleArgument, exprTemplater, stringifyIfNotPrimitive, panic, stringerf, wrapFunction, regexTemplater, iso8601, strftime, walkChildEntries, getFiletype, matchf, isUrl, looksLikeFunction, toArgument2, notNull, CumulativeStorage2, simpleAssign, findAndMatch, infuseObjectArray, regexGetter, splitArg, isJavascriptComment, runTest, everyOther, splitByRange, get_regex, getImports, isJavascriptFile, isValidDateString, WriteObject, equalityf, group2, splitOnce2, dedent4, isLowerCase, looksLikeRegExpString, isRegExpString, getDependencies, camelSplit, toggle3, countf, isLiteralObject, bindMethodsAndState2, call, mget3, looks_like_object_function, create_functions_from_master, toStringArgumentPretty, codeChunks, smart_map, run_tests, hasStartingCallable, mapTemplate, aliaser, fixSelector, htmlTags, removePythonComments, simpleStringBreaker, colonConfig, operations, error, redColon, so2, group, parseSingleLineJson, Items, findDependencies, tryf, find4, localeString, cssComment, colonConfigf, trimArray, parseCallable, bringToLifeTextFix, localBringToLife, getCaller4, getErrorStack, forEach, getBindings, getExports, matchstr, filter4, allEqual, count, isNativeFunction, repeat, eat, getIndentAndText, StopWatch, stringDictSetter, getFunctionInfo, runRef, toLines, hasCallable, getProseWords, tally, paramify, codeSplit, debugConfig, logConfig, blueColon, toStringArgument3, stringCallable, simpleBinding, dashSplit4, appendBelow, appendAbove, removeLineComments, prependIfNecessary, smartDedent4, blueSandwich, walk4, findLineIndex, parseAB, applyTransform, kebabCase, getExcerpt, sortObject, buildFunction, maybeSort, parseFunction, isTypable, frontMatter, dictEntry, insertAfterIndex, State, bindMethods, cpop, tagRE, toggle2, createFunction2, assignIncrementedIndex, ufa, assignArray, regexFromComment, createParsersFromObject, imatch, globalConsoleDebug, bindMethodsAndState, isQuestion, oxfordComma, isUpperCase, getFunctionIdentifier, filter3, match, getMatch, alternatef, reCombine, assertion2, deepEqual, hasDollar, so, deepAssign, Tally, getFunctionNames, throwError, notEqual, tryString, prettyPrintCodeSnippet, prettyPrintErrorStack, iter, quotify, transformerf, assign, defineBinding, jspy, linebreak, stringCall2, reduce3, getClassParameters, assignOnTop2, isIdentifier, ndy, dashSplit3, runFunctionFromRef, equalf, alphabet, stateGetterFromSchema, mreplace, require, topLineComment, isChinese, replacef, ignoref, codeLibrary, splitLines, addArgumentQuotes, getBindings2, addCaret, mget2, getStartingConfig, incrementalEat, strlen, hr, setOnce, unescapeHtml, oxford, breakerf, runTests, map3, dateSplit, transformDict, walk3, toRegExp, tryAgainf, assertNotNull, getArgumentObject, isArgumentObject, typef, requireArg, keyAndValue, assignf, stateGetter3, objectFromArguments2, assignDefaults, transformValue, assign3, assignFresh3, evaluate3, scopedEvaluator, objectFromArguments, enforce, sub, filterObject, extractStartingJsonLikeConfig, unbrackify, newlineIndent2, deleteLine, both, normalizeIndent, getComment, secondComment, isStringRegExp, dashSplit2, clock, warning, errorStringify, alert, labelCase, bottomComment, stringCompose, getAnyIdentifier, chalkf, getNumbers, partitions, has, addUnit, toCallable, unquote, filter2, warn2, join2, caller2, assignOnce, longShort, shortLong, argPop, caller, assignOnTop, toggle, defineWindow, unescapeNewlines, escapeQuotes, unescapeQuotes, escapeNewlines, setAliases, announceCaller, removeStartingComments, smartBind, assignExisting, isObjectWithKey, eatStart, modularIncrementItem, getRegex, runFunction, isObjectLikeArray, itemGetter2, getAllKeys, prefixSlice, hasQuotes, assertion, diff, toggleState, initState, dunder, objectGetter, superTransform, popFilter, testRunner, assert2, insertAtDollar, popEmptyLine, getOptions, mergeSpecs, sortByKeys, map2, strictMessengerAssert, smartSplit, chalk4, typeLog, getFunctionName, Clock, search3, MyError, fuzzyMatch3, debugDisplay, getCaller3, messengerAssert, camelSlice, setPrototype, assignAliases, display, modifyNumber, toDict, setPush, modularIncrementIndex, longstamp, popIndex, toggleOnOff, locWrap, walk2, typeMatch, prettyStringify, getIdentifiers, CustomError, argMatch, brackify2, smartestDedent, modularIncrementNumber, AbstractMethodError, allUnique, Trie, boundarySplit, numberBoundarySplit, nodeLog, getFirst, defineProperty, supermix, partial, timeLog, timestamp, raise, getIdentifier, conditionalPrefix, conditionalSuffix, QueryList, fuzzyMatch2, buildDict, getTextAndCommand, sprawlFactory, getParameters2, pushf, intersection, union, blue, green, sandwich, getLastSpaces, smartDedent3, red, sort, debounce, checkValue, getCodeChunks, logf, boundary, myError, conditional, isStringFunction, toSpaces, objectf, searchAll, difference, singleQuote, itemGetter, slice2, mergeObjects, once, dashSplit, nchalk, coerceToObject, ArrayState, exporter2, indent2, iterator, removeAllComments, countParams, cumulativeSchemaAssign, argKwargSplit, argParse, removeInlineComments, getFrontMatter, hasHtmlSuffix, lazyArray, isThisFunction, escapeHTML, getKwargs2, search2, toStringArgument, createFuzzyMatch, edit2, splice, zip, merge2, argArgsKwargs, fill2, vueWrap, splitArray, splitArray2, warn, makeRunner2, searchf2, smartDedent2, dedent2, toArray2, stateGetter2, sortByIndex, IndexedCache, argo, curry2, doUntil2, evaluate2, findall2, findIndex2, findItem2, getCaller2, getErrorStack2, isJson, indexGetter2, insert2, pop2, parseError2, remove2, reduce2, testf2, type2, unshift2, waterfall2, xsplit2, Cache, cumulativeAssign, replaceBefore, topComment, isAsyncFunction, mapSort, getFileURI, getQuotes, isClassObject, isInitialized, getFallback, bindingRE, addObjectOrObjectProperty, forDoubles, isCss, log, iterate, backAndForth, round, iteratorWrapper, toJSON, isFromMap, toString, empty, conditionalString, getConfigArg, hasKey, errorWrap, successWrap, check, toPoints, bind, mixinAliases, isPercentage, isBasicType, reducerStrategy, gather, entries, stateGetter, methodCase, vueCase, push2, smarterIndent, lineSplit, Store, isSingleLetter, prepareText, isSymbol, getShortest, slice, KeyError, deepCopy, argsKwargs, isError, isColor, list, objectEditor, matchall, makeFastRunner, announce, hasLetter, filter, reduce, stringCall, capitalizeName, stop, proseCase, lineDitto, mixinSetters, modularIncrement, distinct, definedSort, groupBy, reWrap2, fuzzyMatch, isPlural, Element, parseError, isPrimitiveArray, callableArgsKwargs, waterfall, defineVariable, info, flat2D, splitThePage, handleError, dedent, TypeAssertion, createFunction, pluralize, remove, Group, PageStorage, Storage, UniqueStorage, Watcher, arrayToDict, addProperty, addQuotes, argWrapFactory, assert, abrev, abf, addExtension, assignFresh, antif, atFirst, atSecond, backspace, bindObject, breaker, blockQuote, brackify, bringToLife, comment, countCaptureGroups, capitalizeTitle, classMixin, callableRE, camelToTitle, curry, createVariable, changeExtension, curryStart, curryEnd, capitalize, copy, camelCase, compose, char2n, camelToDash, deepMerge, datestamp, doublef, dictSetter, dictSetter2, dsearch, doUntil, dashCase, doubleQuote, dict, dictGetter, depluralize, dreplace, dictf, endsWithWord, exporter, edit, exists, evaluate, extend, find, flatMap, fill, fixUrl, functionGetter, findall, fixPath, flat, fparse, findIndex, firstLine, ftest, getKwargs, getFirstName, getBindingName, getParameters, getLastWord, getCodeWords, getCodeWords2, getIndent, getExtension, getLast, getLongest, getChunks, getCaller, getStackTrace, getConstructorName, getFirstWord, getWords, getSpaces, hasComma, hasSpaces, hasHtml, hasBracket, hasNewline, hasCaptureGroup, hasEquals, hasValue, hasCamelCase, hasNumber, hackReplace, insert, indexGetter, incrementf, isCallable, isQuote, isEven, isOdd, isLast, isHTML, isNode, interweave, inferLang, isString, isArray, isObject, isDefined, isFunction, isPrimitive, isNumber, isSet, isNestedArray, indent, isNull, isWord, isBoolean, isRegExp, identity, isObjectLiteral, isJsonParsable, isCapitalized, isNewLine, isObjectArray, isStringArray, isClassFunction, joinSpaces, join, keyArrayToObject, lowerCase, linebreakRE, len, lineGetter, lineCount, lastLine, logConsole, makeRunner, mixin, modularf, matchGetter, merge, mget, map, mergeOnTop, mergeToObject, mapFilter, noop, nestPush, no, newlineIndent, n2char, objectWalk, overlap, objectToString, opposite, pipe, parseTopAttrs, pascalCase, partition, parens, push, pop, parseJSON, rigidSort, removeQuotes, rep, removeComments, range, removeExtension, rescape, reverse, reWrap, reduceToString, repeatUntil, swapKey, sayhi, swap, splitMapJoin, splitCamel, smallify, search, stringify, shared, smartDedent, stringBreaker, sleep, split, snakeCase, stringArgument, sorted, splitOnce, searchf, secondLine, titleCase, textOrJson, toNumber, toArgument, toNestedArray, test, type, tail, transformObject, trim, testf, toArray, templater, totalOverlap, upperCase, unique, uncapitalize, unzip, wrap, walk, wrapf, xsplit, yes, zip2} from "/home/kdog3682/2023/utils.js"

const stringifyOptions = {
    magic: true,
    max_length: 0,
    lang: "javascript",
    beforeStart(component) {
        sortObject(component, variables.vueComponentOptionKeys, [
            "template",
            "props",
            "name"
        ])
        return component
    }
}


function addComponentToFile(file, name, mode) {
    if (mode == 'default') {
        return rpw(file, (s) => {
            const le = new LineEditor(s)
            le.setPos(/^export {/).setPos(/^}/).insertAbove(name + ',')
            const message = `import ${name} from "./raw/${name}.js"`
            le.insertBelow(le.size, message)
            return le.toString()
        })
    }
    todo()
}

function getClasses(s) {
    const r = /class *= *"(.*?)"/g
    return unique(flat(findall(r, s).map((x) => x.split(' '))))
}
function create({file, lnum}, mode) {
    const text = getDashedText(read(file), lnum)
    const c = vueflow(text, 'component')
    c.raw = newlineIndent(text)
    if (mode == 'debug') {
        console.log({classes: getClasses(c.template)})
        console.log('debugging')
        return console.log(c.template)
    }

    const s = 'export default ' + toStringArgumentPretty(c, stringifyOptions)
    if (!c.name) {
        return console.log(s)
    }

    const pascal = pascalCase(c.name.replace(/^r-/, ''))
    c.name = conditionalPrefix('r-', c.name)
    const dir = "/home/kdog3682/2024-javascript/vuekit/components/raw/"
    const outpath = dir + pascal + '.js'
    return 
    write(outpath, s)
    addComponentToFile('/home/kdog3682/2024-javascript/vuekit/components/raw-components.js', pascal, 'default')
}


function createCssFile(s) {
	
    const classes = getClasses(s)
    const root = classes.shift()
    const a = '/* '
    const b = ' */'
    const middleLength = 76 - a.length - b.length
    const middle = '-'.repeat(middleLength)
    const row = a + middle + b
    mid = '-'.repeat(76 * 0.5 - a.length - b.length)
    const bottomDelimiter = a + mid + b + ' } ' + a + mid + b
    // '-'.repeat(76)

    const mapper = (s) => {
        return s
    }

    classes.map(mapper)
}

packageManager(create)
