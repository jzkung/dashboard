'use strict';

module.exports = function(app) {
  // Donut Routes
  var donuts = require('../../app/controllers/donuts');


  app.route('/api/donuts').post(donuts.createDonut);
  app.route('/api/donuts').get(donuts.getAllDonuts);

  app.route('/api/donuts/:id')
  .get(donuts.getDonut)
  .put(donuts.updateDonut)
  .delete(donuts.deleteDonut);
};