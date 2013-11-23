#!/usr/bin/env node
'use strict';


// usage: pseudo -i file1.js -o file2.js -t both
// e.g: node bin/pseudo run -i translation_en_US.json -o translation_en_pseudo.json -t json

var path = require('path');
var cli = require('../lib/cli');

console.log("Performing pseudo-translate...");

var dir = path.join('..', 'lib');

var config = cli.process();

switch (config.cmd) {
    case 'run':
        require(path.join(dir, 'runner')).start(config);
        break;

    case 'batch':
//        require(path.join(dir, 'runner')).run(config);
        break;
}




