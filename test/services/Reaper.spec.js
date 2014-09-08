/**
 * Test File: Testing Reaper Service
 */
var ReaperService = require('../../api/services/Reaper'),
    sinon = require('sinon'),
    assert = require('assert');

describe('The Reaper Service', function() {
    describe('when initialized', function() {
        it('should have default options data', function() {

            // Mocking res.send() method by using a sinon spy
            var send = sinon.spy();

            var ReaperInstance = new ReaperService();
            // Executes service action
            console.log("ReaperInstance", ReaperInstance.options);

            assert.equal(typeof ReaperInstance.options != "undefined", true);
        });
    });
    describe("when get action is invoked", function(){
        it("should return the right data", function() {
            assert.equal(true,false);
        });
    });
    describe("when passed xxxxx service and get action is invoked", function(){
        it("should return the right data", function() {
            assert.equal(true,false);
        });
    });

    describe("when the item is processed", function(){
        it("should return the right data structure", function() {
            assert.equal(true,false);
        });
    });

    // http://stackoverflow.com/questions/13057016/nodejs-mocha-and-mongoose
    describe("when the items are saved", function(){
        it("should save the first item", function() {
            assert.equal(true,false);
        });
    });



});