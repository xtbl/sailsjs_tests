/*
 Reaper Service
 - retrieves the collection of objects from a service

 @param service
 @param options
 */

// delete:
// exporting classes: http://stackoverflow.com/questions/18020113/exporting-classes-with-node-js
// create promises: http://howtonode.org/promises
// nodejs rest example: http://rapiddg.com/blog/calling-rest-api-nodejs-script

// Todo: use inheritance to create reaper children (for each service if needed)
// check nodejs export design patterns: http://bites.goodeggs.com/posts/export-this/

//reddit: http://www.reddit.com/r/<subreddit>/new.json?sort=new
var http = require('http');

var Reaper = function (options) {
    this.options = options;
};


Reaper.prototype.get = function() {

    var options = {
        host: "www.reddit.com",
        port: 80,
        path: "/r/girlsinyogapants/new.json?sort=new",
        method: "GET"
    };

    http.request(options, function(res) {
        console.log('STATUS: ' + res.statusCode);
        console.log('HEADERS: ' + JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log('BODY: ' + chunk);
        });
    }).end();


    return {title:"title",image:"image"};
};

module.exports = Reaper;