
var optimist = require('optimist');
//var argv = require('optimist').argv;

/**
 * Get the command line parameters
 * @returns {object}
 */
exports.process = function () {
    var optimist = require('optimist')
        .usage('$0: This is an example on how to use optimist')
        .describe('h', 'Display the usage')
        .describe('l', 'uses local repo')
        .alias('h', 'help')
        .alias('l', 'local');

    var argv = optimist.argv;

    var count = 0;

    if(argv.i) {
        count++;
    }

    if (argv.o) {
        count++;
    }

    if (argv.t) {
        count++;
    }

    if (argv.help) {
        optimist.showHelp();
        process.exit(0);
    }

    return { fromFile: argv.i, toFile : argv.o, type: argv.t, count: count };
};

