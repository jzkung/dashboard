'use strict';

angular.module('admin').factory('UserGroup', ['$resource',
  function ($resource) {
    return $resource('/api/user-groups/:id', {id: '@_id'}, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
