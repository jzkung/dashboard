'use strict';

angular.module('admin').controller('AdminUserController', ['$scope', '$state', '$location', 'User', 'UserGroup',
  function($scope, $state, $location, User, UserGroup) {
    $scope.vars = {};

    if ($state.current.name === 'admin-user') {
      User.get({id: $state.params.id}, function (response) {
        $scope.user = response;
      });
    }
    else if ($state.current.name === 'admin-new-user') {
      $scope.vars.isNew = true;
      $scope.user = new User();
    }
    else if ($state.current.name === 'admin-new-user-group') {
      $scope.vars.isNew = true;
      $scope.userGroup = new UserGroup();
    }
    else if ($state.current.name === 'admin-user-group') {
      $scope.vars.isNew = false;
      UserGroup.get({id: $state.params.id}, function (response) {
        $scope.userGroup = response;
      });
    }
    else {
      User.query(function (response) {
        $scope.users = response;
      });

      UserGroup.query(function (response) {
        $scope.userGroups = response;
      });
    }

    $scope.newUserGroup = function () {
      $location.path('/admin/user-groups/new');
    };

    $scope.newUser = function () {
      console.info('here');
      $location.path('/admin/users/new');
    };

    $scope.updateUserGroup = function () {
      var success = function () {
        $location.path('/admin/users');
      };

      var error = function (response) {
        $scope.user_group_form.$error = response.data;
        $scope.user_group_form.$setValidity('valid', false);
      };

      if ($scope.vars.isNew === true) {
        $scope.userGroup.$save($scope.userGroup, success, error);
      }
      else {
        $scope.userGroup.$update(success, error);
      }
    };

    $scope.updateUser = function () {
      var success = function () {
        $location.path('/admin/users');
      };

      var error = function (response) {
        $scope.user_form.$error = response.data;
        $scope.user_form.$setValidity('valid', false);
      };

      if ($scope.vars.isNew === true) {
        $scope.user.$save($scope.user, success, error);
      }
      else {
        $scope.user.$update(success, error);
      }
    };
  }
]);