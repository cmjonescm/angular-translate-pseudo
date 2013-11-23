
var transTable =
{
    "a":"á",
    "e":"é",
    "i":"í",
    "o":"ó",
    "u":"ú"
};

var dbltransTable =
{
    "a":"áá",
    "e":"éé",
    "i":"íí",
    "o":"óó",
    "u":"úú"
};


var regxTable =
{
    "a":/a/gi,
    "e":/e/gi,
    "i":/i/gi,
    "o":/o/gi,
    "u":/u/gi
};


var preTrans = '_';
var postTrans = '_';

var doubleUp = true;
var prePostUnderScore = true;
var spaceDots = true;
var spaceDotsCount = 2;

/**
 * Perform the pseudo translation
 * @param translation{object}
 * @returns {object}
 * @constructor
 */
exports.trans = function (translation) {

    var table = translation.table;

    var dotString = GetSpaceDots();

    for (var key in table) {

        var val = table[key];

        // 1) Firstly replace all the vowels in your application or file with accented versions..
        // So you replace the following: a=á e=é i=í o=ó u=ú or other similar combination depending on your language.
        // 2) In some cases you might double the characters to test string expansion. So "Hello" would become "Hééllóó".
        for (var transKey in transTable) {
            if (doubleUp) {
                val = val.replace(regxTable[transKey], dbltransTable[transKey]);
            }
            else
            {
                val = val.replace(regxTable[transKey], transTable[transKey]);
            }
        }

        if (spaceDots) {
            val = val.replace(/ /gi, dotString);
        }

        // 3) Add fixed pre- and post-delimiters (_)
        if (prePostUnderScore) {
            val = preTrans +  val + postTrans;
        }

        table[key] = val;
    }
    translation.language = 'en-pseudo';

    return translation;
};


exports.doubleUp = function(flag) {
    doubleUp = flag;
};

exports.prePostUnderScore = function(flag) {
    prePostUnderScore = flag;
};

exports.spaceDots = function(flag, count) {
    spaceDots = flag;
    spaceDotsCount = count;
};

/**
 * Return the number of decimal points to replace for each space character.
 * @returns {string}
 * @constructor
 */
GetSpaceDots = function() {
    var dotsString = "";

    for (var i = 0; i < spaceDotsCount; i++) {
        dotsString += '.';
    }

    return dotsString;
};

