const { addNewPlayer } = require('../controllers/playerControllers');

const routes = (app) => {
    app.route('/players')
    //post endpoint
        .post(addNewPlayer);
}

module.exports = routes;