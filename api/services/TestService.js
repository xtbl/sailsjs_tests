//Test Service
module.exports = {
    testService: function() {
        var opts = {
            option1: "test",
            option2: "service"
        };
        console.log("object from test service: ", opts);

        var dateObj = new Date();
        var timeObj = dateObj.getTime();

        var minutes = 1,
            the_interval = minutes * 60 * 10;

        setInterval(
            function() {
                console.log("interval works");
                console.log("time: ", timeObj);
            }, the_interval);
    }
};