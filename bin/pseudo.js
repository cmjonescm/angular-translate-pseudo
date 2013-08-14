// Steps:
// 1) Get the path/filename from the command line of the file to pseudo-translate
// 2) Read the json file
// 3) Parse and Pseudo Translate the file
// 4) Output the pseudo-translated file

var fs = require('fs');
var cli = require('../lib/cli');
var io = require('../lib/fileAccess').init(fs);
var pseudo = require('../lib/pseudoTrans');

console.log("Performing pseudo-translate...");

var cmd = cli.process();
var data = io.read(cmd.fromFile);
var pseudoed = pseudo.trans(data);
io.write(cmd.toFile, pseudoed);

console.log("Output filename: translation_en_pseudo.json");
console.log("Done.");



