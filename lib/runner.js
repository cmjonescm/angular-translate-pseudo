'use strict';

var check = require('../lib/argCheck');
var io = require('../lib/fileAccess');
var pseudo = require('../lib/pseudoTrans');

exports.start = function (config) {

    if (check.validate(config)){
        var data = io.read(config.fromFile);
        var pseudoed = pseudo.trans(data);
        io.write(config.toFile, pseudoed);

        console.log("Output filename: translation_en_pseudo.json");
        console.log("Done.");
    }



};