const routes = require('express').Router();
const quotes = require('../controllers/');

routes.get('/', quotes.displayQuote);
// routes.use('/admin', require('./admin'));
module.exports = routes;