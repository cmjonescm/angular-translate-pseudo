
var transTable =
{
    "a":"áá",
    "e":"éé",
    "i":"íí",
    "o":"óó",
    "u":"úú"
};

var preTrans = '_';
var postTrans = '_';


/**
 * Perform the pseudo translation
 * @param translation{object}
 * @returns {object}
 * @constructor
 */
exports.trans = function (translation) {

    var table = translation.table;

    for (key in table) {

        val = table[key];


        // 1) Firstly replace all the vowels in your application or file with accented versions..
        // So you replace the following: a=á e=é i=í o=ó u=ú or other similar combination depending on your language.
        // 2) In some cases you might double the characters to test string expansion. So "Hello" would become "Hééllóó".
        for (transKey in transTable) {
            val = val.replace(transKey,transTable[transKey]);
        }

        // 3) Add fixed pre- and post-delimiters (_)
        val = preTrans +  val + postTrans;

        table[key] = val;

        console.log(val);
    }
    translation.language = 'en-pseudo';

    return translation;
};




