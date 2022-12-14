const { addNewPlayer } = require('../controllers/playerControllers');

const routes = (app) => {
    app.route('/player')
    //post endpoint
        .post(addNewPlayer);
}

module.exports = routes;