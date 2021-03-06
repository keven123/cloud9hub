'use strict';

var index = require('../controllers/index');
var authorization = require('./middlewares/authorization');

module.exports = function(app) {
    app.get('/', authorization.redirectToLogin, index.index);
}