const friendData = require("../data/friends");

module.exports = (app) => {
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    app.post("/api/friends", function (req, res) {
        let friend = req.body;
        friendData.push(req.body);
        //data handling logic
        res.json(true);
    });
}