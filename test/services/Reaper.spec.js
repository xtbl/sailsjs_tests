/**
 * Test File: Testing Reaper Service
 */
var ReaperService = require('../../api/services/Reaper'),
    sinon = require('sinon'),
    assert = require('assert'),
    nock = require('nock');

describe('The Reaper Service', function() {
    describe('when initialized', function() {
        it('should have default options data', function() {

            // Mocking res.send() method by using a sinon spy
            var send = sinon.spy();

            var mockServiceOptions = {
                host: "http://mockresponse.com",
                port: 80,
                path: "/",
                method: "GET"
            };
            var ReaperInstance = new ReaperService(mockServiceOptions);
            // Executes service action
            ReaperInstance.init();
            console.log("ReaperInstance", ReaperInstance.options);

            assert.equal(typeof ReaperInstance.options != "undefined", true);
        });
    });
    describe("when get action is invoked", function(){

        it("should return the right data", function(done) {
            var mockServerResponse = nock('http://www.mockresponse.com')
                .get('/')
                .reply(200, {_id:"123", title:"mock title", img:"mock.jpg"});
//            var mockServiceOptions = {
//                host: "www.reddit.com",
//                port: 80,
//                path: "/r/girlsinyogapants/new.json?sort=new",
//                method: "GET"
//            };

            var mockServiceOptions = {
                host: "www.mockresponse.com",
                port: 80,
                path: "/",
                method: "GET"
            };

            var ReaperInstance = new ReaperService(mockServiceOptions);
            ReaperInstance.init();
            console.log("ReaperInstance.options 2", ReaperInstance.options);
            var reaperData = ReaperInstance.get();


            mockServerResponse.done();
//            console.log("reaperData", reaperData);


            setTimeout(function() {
                console.log("reaperData", reaperData);
                mockServerResponse.isDone(); // will throw an assertion error if meanwhile a "GET http://google.com" was not performed.
                done();
                console.log("[ReaperInstance].getRawResponseData()", ReaperInstance.getRawResponseData());
                assert.equal(ReaperInstance.getRawResponseData(),false);
            }, 1500);

        });
    });
//    describe("when passed xxxxx service and get action is invoked", function(){
//        it("should return the right data for the service", function() {
////            use http://sinonjs.org/ fake server to mock server response
//            assert.equal(true,false);
//        });
//    });
//
//    describe("when the item is processed", function(){
//        it("should return the right data structure", function() {
//            assert.equal(true,false);
//        });
//    });
//
//    // http://stackoverflow.com/questions/13057016/nodejs-mocha-and-mongoose
//    describe("when the items are saved", function(){
//        it("should save the first item", function() {
//            assert.equal(true,false);
//        });
//    });



});