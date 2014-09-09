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

//TODO: GET, PROCESS and SAVE (add tests)
// tests: https://blog.sergiocruz.me/unit-test-sailsjs-with-mocha-and-instanbul-for-code-coverage/
// check getting started guide http://sailsjs.org/#!getStarted
/*
GET item collection
      receive a service definition
      Reaper.get(serviceOptions) (options object for each service or an array of objects)
      make an API call to the service to retrieve a collection of items

*/

/*
PROCESS items
      reduce each received item according to the data model
            create a fits-all-cases data model
                processItems function (collection, serviceProcessorCb)
      create a collection with the processed items
*/

/*
SAVE items into db
      save the new processed item collection into db

*/
//item data model
//_id
//title
//created
//image
//tags/topics: []
//rating
//source
/*
===============
|   REDDIT    |
===============
{data:
  children[
      data
            "domain": "i.imgur.com",
            "subreddit": "girlsinyogapants",
            "id": "2ff7tz"
            "score": 7,
            "over_18": true,
            "thumbnail": "http://b.thumbs.redditmedia.com/sARBZFkLYJcQSa10z8etne7wZteNpV_QyTaClahlujE.jpg",
            "created": 1409829956,
            "url": "http://i.imgur.com/te2Eqna.jpg",
            "title": "Are shorts okay?.... x-post from /r/RandomSexiness",
]
*/

var http = require('http');

var Reaper = function (serviceOptions) {

    //Todo: change to receive options parameter
    this.options = {
        host: "www.reddit.com",
        port: 80,
        path: "/r/girlsinyogapants/new.json?sort=new",
        method: "GET"
    };
};


Reaper.prototype.get = function() {

    http.request(this.options, function(res) {
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