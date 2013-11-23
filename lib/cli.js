'use strict';

var optimist = require('optimist');


/**
 * Process the command line parameters
 * @returns {object}
 */
exports.process = function () {
    var argv = optimist.parse(argsBeforeDoubleDash(process.argv.slice(2)));
    var cmd = argv._.shift();

    switch(cmd) {
        case 'run':

            break;

        case 'batch':

            break;

        default:
            describeShared();
            break;
    }

    return processArgs(cmd, argv);
};



var processArgs = function(cmd, argv) {

    if (argv.help) {
        console.log(optimist.help());
        process.exit(0);
    }

    if (argv.version) {
        console.log('Pseudo version: ' + constant.VERSION);
        process.exit(0);
    }

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

    return { cmd: cmd, fromFile: argv.i, toFile : argv.o, type: argv.t, count: count };
};




// return only args that occur before `--`
var argsBeforeDoubleDash = function(argv) {
    var idx = argv.indexOf('--');

    return idx === -1 ? argv : argv.slice(0, idx);
};


var describeShared = function() {
    optimist
        .usage('Pseudo - Pseudo translation for angular-translate.\n\n' +
            'Usage: TODO\n' +
//            '  $0 <command>\n\n' +
            'Commands: TODO\n' +
//            '  start [<configFile>] [<options>] Start the server / do single run.\n' +
//            '  init [<configFile>] Initialize a config file.\n' +
//            '  run [<options>] [ -- <clientArgs>] Trigger a test run.\n' +
//            '  completion Shell completion for karma.\n\n' +
            'pseudo [<Command>] [--help] to see a commands description and its available options.')
        .describe('help', 'Print usage and options.')
        .describe('version', 'Print current version.');
};