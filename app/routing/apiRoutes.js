var tableData = require("../data/tableData");
var waitListData = require("../data/waitinglistData");

module.exports = (app) => {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {

    });
}