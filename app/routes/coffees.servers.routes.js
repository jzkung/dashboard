'use strict';

module.exports = function(app) {
  // Coffee Routes
  var coffees = require('../../app/controllers/coffees');


  app.route('/api/coffees')
  .post(coffees.createCoffee)
  .get(coffees.getAllCoffees);

  app.route('/api/coffees/:id')
  .get(coffees.getCoffee)
  .put(coffees.updateCoffee)
  .delete(coffees.deleteCoffee);
};