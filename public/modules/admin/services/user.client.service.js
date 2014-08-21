'use strict';

angular.module('admin').factory('User', ['$resource',
  function ($resource) {
    return $resource('users/:id', {id: '@_id'}, {
      update: {
        method: 'PUT'
      }
    });
  }
]);

