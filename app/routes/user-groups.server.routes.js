'use strict';

module.exports = function(app) {
  var userGroups = require('../../app/controllers/user-groups');

  app.route('/api/user-groups')
    .get(userGroups.list)
    .post(userGroups.create);

  app.route('/api/user-groups/:id')
    .get(userGroups.read)
    .put(userGroups.update)
    .delete(userGroups.delete);
};