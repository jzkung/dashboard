'use strict';

//Setting up route
angular.module('admin').config(['$stateProvider',
  function($stateProvider) {
    // Admin state routing
    $stateProvider.
    state('admin-users', {
      url: '/admin/users',
      templateUrl: 'modules/admin/views/admin-users.client.view.html'
    }).
    state('admin-new-user', {
      url: '/admin/users/new',
      templateUrl: 'modules/admin/views/admin-user.client.view.html'
    }).
    state('admin-user', {
      url: '/admin/users/:id',
      templateUrl: 'modules/admin/views/admin-user.client.view.html'
    }).
    state('admin-new-user-group', {
      url: '/admin/user-groups/new',
      templateUrl: 'modules/admin/views/admin-user-group.client.view.html'
    }).
    state('admin-user-group', {
      url: '/admin/user-groups/:id',
      templateUrl: 'modules/admin/views/admin-user-group.client.view.html'
    });
  }
]);