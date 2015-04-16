/**
 * Created by lharkness on 4/14/15.
 */
'use strict';

var mean = require('meanio');

exports.render = function(req, res) {

    var modules = [];
    // Preparing angular modules list with dependencies
    for (var name in mean.modules) {
        modules.push({
            name: name,
            module: 'mean.' + name,
            angularDependencies: mean.modules[name].angularDependencies
        });
    }

    // Send some basic starting info to the view
    res.render('pricing', {
        modules: modules
    });
};
