const routes = require('express').Router();

const myController = require('../controllers');

routes.get('/', myController.friendName);
routes.get('/another', myController.anotherFriendName);

module.exports = routes;