var fs = require('fs');

/**
 * Readin the specified translation file to perform the translation on.
 * @param filename
 * @returns {object}
 */
exports.read = function (filename) {
    var translation;

    var data = fs.readFileSync(filename);

    translation = JSON.parse(data);

    return translation;
};


/**
 * Save out the pseudo translation
 * @param filename{string}
 * @param pseudoed{pseudo translation object}
 */
exports.write = function (filename, data) {
    var pretty = JSON.stringify(data, null, 4);
    fs.writeFileSync(filename, pretty, 'utf8');
};