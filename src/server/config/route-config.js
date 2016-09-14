(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');
    const restaurantsRoutes = require('../routes/restaurants');
    const usersRoutes = require('../routes/users');

    // *** register routes *** //
    app.use('/api/v1/restaurants', restaurantsRoutes);
    app.use('/api/v1/users', usersRoutes);
    app.use('/', routes);

  };

})(module.exports);
