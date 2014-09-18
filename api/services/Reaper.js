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
                    serviceProcessorCb["serviceName"]
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


/**
 *
 * Constructs Reaper objects
 * @class Reaper
 * @constructor
 * @param {String} type of service
 *
 */

var http = require('http');

var Reaper = function (serviceType) {

   this.serviceType = serviceType;

   // type of service: twitter, reddit, tumblr...
   this.services = {
       reddit: {
           host: "www.reddit.com",
           port: 80,
           path: "/r/girlsinyogapants/new.json?sort=new",
           method: "GET"
       },
       twitter: {
           host: "www.reddit.com",
           port: 80,
           path: "/r/girlsinyogapants/new.json?sort=new",
           method: "GET"
       }
   };
   this.rawResponseData = {};
   this.getRawResponseData = function() {
     return this.rawResponseData;
   };
   // type of Reaper: the type of service used
   this.ReaperType = {};

   this.init = function() {
//       this.ReaperType = this.services[serviceType] || null;
       this.options = this.serviceType;
   };

    //Todo: change to receive options parameter
//    this.options = {
//        host: "www.reddit.com",
//        port: 80,
//        path: "/r/girlsinyogapants/new.json?sort=new",
//        method: "GET"
//    };
};


Reaper.prototype.get = function() {
    var self = this;
    console.log("REAPER GET");
    http.request(this.options, function(res) {
        console.log('STATUS: ' + res.statusCode);
        console.log('HEADERS: ' + JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', function (rawResponseData) {
            console.log('BODY: ' + rawResponseData);
            self.rawResponseData = rawResponseData;
            /// ??? from this point on, how to call processItems(rawResponseData) and keep this decoupled and test friendly?
            // 1. trigger an event like an emit? then on that emit call processItems(this.rawResponseData) -> http://javascriptplayground.com/blog/2014/03/event-emitter/
//            function _getData(error, rows) {
//                if (_checkForErrors(error, rows)) {
//                    return false;
//                } else {
//                    this.emit('success', rows[0]);
//                }
//            }
            // 2. some binded callback:
//            worker.updateCustomer(currentCustomer, _.bind(function(err, data) {
//                this.showAlert(err || data);
//            }, notifier));
//            nota: practicar binding
//            var currentServiceCb = this.currentService;
//            _.bind(function(err, data){
//                this.saveData(err || data);
//            }, currentServiceCb);
//            NO NO NO NO
//            hacer funciones independientes, decoupled y test friendly con sus unit test cada una e invocarlas cuando se llama un init() o algo asi que usa promises
//            tipo get().then(process(), save()) etc etc y ejecutar las funciones ahi
        });
    }).end();


//    return {title:"title",image:"image"};
    return this.rawResponseData;
};


Reaper.prototype.processItems = function() {
//    JSON.parse();
//    JSON.stringify();
    return false;
};

Reaper.prototype.save = function() {
    return false;
};

module.exports = Reaper;