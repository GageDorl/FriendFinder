var path = require('path');
var friends = require('../data/friend.js');

function routes(app){
    app.get('/api/friends', function(req,res){
        return res.json(friends)
    });
    app.post('/api/friends', function(req,res){
        var newFriend = req.body;
        console.log(JSON.stringify(newFriend))
        var difference=100;
        var bestFriend;
        for(i in friends){
            var thisDiff=0;
            for(j in friends[i].scores){
                thisDiff+=Math.abs(friends[i].scores[j]-newFriend.scores[j])
            }
            if(thisDiff<difference){
                difference=thisDiff;
                bestFriend=friends[i];
            }
        }
        friends.push(newFriend);
        res.json(bestFriend);
        console.log(bestFriend)
    });
}
module.exports = routes;