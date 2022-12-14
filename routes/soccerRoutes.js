import { addNewPlayer } from '../controllers/playerControllers';

const routes = (app) => {
    app.route('/player')
    //post endpoint
        .post(addNewPlayer);
}

export default routes;