const friendData = require("../data/friends");

module.exports = (app) => {
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    app.post("/api/friends", function (req, res) {
        let friendInfo = req.body;
        let newScores = [];
        for (let i = 0; i < friendInfo.scores.length; i++) {
            newScores.push(parseInt(friendInfo.scores[i]));
        }
        let min = 100000000;
        let index;
        for (let i = 0; i < friendData.length; i++) {
            difQ1 = Math.abs(friendInfo.scores[0]) -
                Math.abs(friendData[i].scores[0]);
            difQ2 = Math.abs(friendInfo.scores[1]) -
                Math.abs(friendData[i].scores[1]);
            difQ3 = Math.abs(friendInfo.scores[2]) -
                Math.abs(friendData[i].scores[2]);
            difQ4 = Math.abs(friendInfo.scores[3]) -
                Math.abs(friendData[i].scores[3]);
            difQ5 = Math.abs(friendInfo.scores[4]) -
                Math.abs(friendData[i].scores[4]);
            difQ6 = Math.abs(friendInfo.scores[5]) -
                Math.abs(friendData[i].scores[5]);
            difQ7 = Math.abs(friendInfo.scores[6]) -
                Math.abs(friendData[i].scores[6]);
            difQ8 = Math.abs(friendInfo.scores[7]) -
                Math.abs(friendData[i].scores[7]);
            difQ9 = Math.abs(friendInfo.scores[8]) -
                Math.abs(friendData[i].scores[8]);
            difQ10 = Math.abs(friendInfo.scores[9]) -
                Math.abs(friendData[i].scores[9]);
            difTotal = Math.abs(difQ1 + difQ2 + difQ3 + difQ4 + difQ5 +
                difQ6 + difQ7 + difQ8 + difQ9 + difQ10);
            if (difTotal < min) {
                min = difTotal;
                index = i;
            }
        }
        friendData.push({
            name: friendInfo.name,
            photo: friendInfo.photo,
            scores: newScores
        });

        res.json(friendData[index]);
    });
}