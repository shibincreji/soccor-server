const  mongoose = require("mongoose");
const {PlayerSchema} = require('../models/playerModel');

const Player = mongoose.model('Player', PlayerSchema);

 const addNewPlayer = (req, res) => {
    let newPlayer = new Player(req.body);
    newPlayer.save((err, Player) => {
        if(err){
            res.send(err);
        }
        res.json(Player);
    });
};