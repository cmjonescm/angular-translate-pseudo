//*****************************************************************************
// Copyright © 2013 Waters Corporation. All rights reserved.
//*****************************************************************************
'use strict';

var should = require('should');
var sinon = require('sinon');
var pseudo = require("../../lib/pseudoTrans");


describe('pseudo translate unit tests, ', function(){


    it('should pseudo translate a single ID in the table.', function(){
        // Arrange
       var PSEUDO_RESULT = "_ááééííóóúú_";
       var input = {
           "language": "XXXXX",
           "table": {
               "EXAMPLE_ID": "aeiou"
           }
       };

        // Action
        var pseudoed = pseudo.trans(input);

        // Assert
        pseudoed.table.EXAMPLE_ID.should.equal(PSEUDO_RESULT);
    });

    it('should pseudo translate a single uppercase ID in the table.', function(){
        // Arrange
        var PSEUDO_RESULT = "_ááééííóóúú_";
        var input = {
            "language": "XXXXX",
            "table": {
                "EXAMPLE_ID": "AEIOU"
            }
        };

        // Action
        var pseudoed = pseudo.trans(input);

        // Assert
        pseudoed.table.EXAMPLE_ID.should.equal(PSEUDO_RESULT);
    });


    it('should pseudo translate a ID in the table.', function(){
        // Arrange
        var PSEUDO_RESULT = "_bbbbb_";
        var input = {
            "language": "XXXXX",
            "table": {
                "EXAMPLE_ID": "bbbbb"
            }
        };

        // Action
        var pseudoed = pseudo.trans(input);

        // Assert
        pseudoed.table.EXAMPLE_ID.should.equal(PSEUDO_RESULT);
    });


    it('should pseudo translate a multiple IDs in the table.', function(){
        // Arrange
        var PSEUDO_RESULT = "_ááééííóóúú_";
        var input = {
            "language": "XXXXX",
            "table": {
                "EXAMPLE_ONE_ID": "aeiou",
                "EXAMPLE_TWO_ID": "aeiou",
                "EXAMPLE_THREE_ID": "aeiou",
                "EXAMPLE_FOUR_ID": "aeiou",
                "EXAMPLE_FIVE_ID": "aeiou"
            }
        };

        // Action
        var pseudoed = pseudo.trans(input);

        // Assert
        pseudoed.table.EXAMPLE_ONE_ID.should.equal(PSEUDO_RESULT);
        pseudoed.table.EXAMPLE_TWO_ID.should.equal(PSEUDO_RESULT);
        pseudoed.table.EXAMPLE_THREE_ID.should.equal(PSEUDO_RESULT);
        pseudoed.table.EXAMPLE_FOUR_ID.should.equal(PSEUDO_RESULT);
        pseudoed.table.EXAMPLE_FIVE_ID.should.equal(PSEUDO_RESULT);
    });



    it('should return a real life pseudoed string.', function(){
        // Arrange
        var PSEUDO_RESULT = "_Váácúúúúm..stáátúús_";
        var input = {
            "language": "XXXXX",
            "table": {
                "VACUUM_STATUS_LABEL_ID": "Vacuum status"

            }
        };

        // Action
        var pseudoed = pseudo.trans(input);

        // Assert
        pseudoed.table.VACUUM_STATUS_LABEL_ID.should.equal(PSEUDO_RESULT);
    });


    it('should switch off transforming space characters to dots.', function(){
        // Arrange
        var PSEUDO_RESULT = "_Váácúúúúm stáátúús_";
        var input = {
            "language": "XXXXX",
            "table": {
                "VACUUM_STATUS_LABEL_ID": "Vacuum status"

            }
        };

        pseudo.spaceDots(false);

        // Action
        var pseudoed = pseudo.trans(input);

        // Assert
        pseudoed.table.VACUUM_STATUS_LABEL_ID.should.equal(PSEUDO_RESULT);
    });

    it('should convert all space character to 5 dots.', function(){
        // Arrange
        var PSEUDO_RESULT = "_Váácúúúúm.....stáátúús_";
        var input = {
            "language": "XXXXX",
            "table": {
                "VACUUM_STATUS_LABEL_ID": "Vacuum status"

            }
        };

        pseudo.spaceDots(true, 5);

        // Action
        var pseudoed = pseudo.trans(input);

        // Assert
        pseudoed.table.VACUUM_STATUS_LABEL_ID.should.equal(PSEUDO_RESULT);
    });

    it('should not double up pseudo characters.', function(){
        // Arrange
        var PSEUDO_RESULT = "_Vácúúm státús_";
        var input = {
            "language": "XXXXX",
            "table": {
                "VACUUM_STATUS_LABEL_ID": "Vacuum status"

            }
        };

        pseudo.spaceDots(false);
        pseudo.doubleUp(false);

        // Action
        var pseudoed = pseudo.trans(input);

        // Assert
        pseudoed.table.VACUUM_STATUS_LABEL_ID.should.equal(PSEUDO_RESULT);
    });


    it('should add pre/post underscores.', function(){
        // Arrange
        var PSEUDO_RESULT = "Vácúúm státús";
        var input = {
            "language": "XXXXX",
            "table": {
                "VACUUM_STATUS_LABEL_ID": "Vacuum status"

            }
        };

        pseudo.spaceDots(false);
        pseudo.doubleUp(false);
        pseudo.prePostUnderScore(false);

        // Action
        var pseudoed = pseudo.trans(input);

        // Assert
        pseudoed.table.VACUUM_STATUS_LABEL_ID.should.equal(PSEUDO_RESULT);
    });


});



















