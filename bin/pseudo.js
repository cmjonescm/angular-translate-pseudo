

// usage: pseudo -i file1.js -o file2.js -t both

// e.g: pseudo -i translation_en_US.json -o translation_en_pseudo.json -t json


var fs = require('fs');
var cli = require('../lib/cli');
var check = require('../lib/argCheck');
var io = require('../lib/fileAccess').init(fs);
var pseudo = require('../lib/pseudoTrans');

console.log("Performing pseudo-translate...");

var cmds = cli.process();

if (check.validate(cmds)){
    var data = io.read(cmds.fromFile);
    var pseudoed = pseudo.trans(data);
    io.write(cmds.toFile, pseudoed);

    console.log("Output filename: translation_en_pseudo.json");
    console.log("Done.");
}



