const routes = require('express').Router();
const quotes = require('../controllers/');

routes.get('/', quotes.displayQuotes);
routes.use('/admin', require('./admin'));
module.exports = routes;