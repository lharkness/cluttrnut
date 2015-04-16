'use strict';

module.exports = function(System, app, auth, database) {

    // Home route
    var pricing = require('../controllers/pricing');
    app.route('/pricing')
        .get(pricing.render);

};
