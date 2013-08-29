
// usage: pseudo -i file1.js -o file2.js -t both


var optimist = require('optimist');
//var argv = require('optimist').argv;

/**
 * Get the command line parameters
 * @returns {object}
 */
exports.process = function () {

    //var argv = optimist.parse(argsBeforeDoubleDash(process.argv.slice(2)));

    var optimist = require('optimist')
        .usage('$0: This is an example on how to use optimist')
        .describe('h', 'Display the usage')
        .describe('l', 'uses local repo')
        .alias('h', 'help')
        .alias('l', 'local');

    var argv = optimist.argv;


    console.log(argv.i);
    console.log(argv.o);
    console.log(argv.t);

    if (argv.help) {
        optimist.showHelp();
        process.exit(0);
    }




   return { fromFile: './translation_en_US.json', toFile : 'translation_en_pseudo.json' };
};

