'use strict';
var ApplicationConfiguration = function () {
    var applicationModuleName = 'dashboard', applicationModuleVendorDependencies = [
        'ngResource',
        'ngCookies',
        'ngAnimate',
        'ngTouch',
        'ngSanitize',
        'ui.router',
        'ui.bootstrap',
        'ui.utils'
      ], registerModule = function (moduleName) {
        angular.module(moduleName, []), angular.module(applicationModuleName).requires.push(moduleName);
      };
    return {
      applicationModuleName: applicationModuleName,
      applicationModuleVendorDependencies: applicationModuleVendorDependencies,
      registerModule: registerModule
    };
  }();
angular.module(ApplicationConfiguration.applicationModuleName, ApplicationConfiguration.applicationModuleVendorDependencies), angular.module(ApplicationConfiguration.applicationModuleName).config([
  '$locationProvider',
  function ($locationProvider) {
    $locationProvider.hashPrefix('!');
  }
]), angular.element(document).ready(function () {
  '#_=_' === window.location.hash && (window.location.hash = '#!'), angular.bootstrap(document, [ApplicationConfiguration.applicationModuleName]);
}), ApplicationConfiguration.registerModule('control-panel'), ApplicationConfiguration.registerModule('core'), ApplicationConfiguration.registerModule('notifications'), ApplicationConfiguration.registerModule('team'), ApplicationConfiguration.registerModule('tools'), ApplicationConfiguration.registerModule('users'), angular.module('control-panel').config([
  '$stateProvider',
  function ($stateProvider) {
    $stateProvider.state('control-panel', {
      url: '/',
      templateUrl: 'modules/control-panel/views/control-panel.client.view.html'
    }).state('widget', {
      url: '/widget',
      templateUrl: 'modules/control-panel/views/widget.client.view.html'
    });
  }
]), angular.module('control-panel').controller('ControlpanelController', [
  '$scope',
  function () {
  }
]), angular.module('control-panel').controller('WidgetController', [
  '$scope',
  function () {
  }
]), angular.module('control-panel').directive('widget', [function () {
    return {
      templateUrl: 'modules/control-panel/views/widget.client.view.html',
      restrict: 'E',
      transclude: !0
    };
  }]), angular.module('core').run([
  'Menus',
  function (Menus) {
    Menus.addMenuItem('topbar', 'About', 'about');
  }
]), angular.module('core').run([
  'Menus',
  function (Menus) {
    Menus.addMenuItem('topbar', 'Contact', 'contact');
  }
]), angular.module('core').config([
  '$stateProvider',
  '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/'), $stateProvider.state('contact', {
      url: '/contact',
      templateUrl: 'modules/core/views/contact.client.view.html'
    }).state('about', {
      url: '/about',
      templateUrl: 'modules/core/views/about.client.view.html'
    });
  }
]), angular.module('core').controller('AboutController', [
  '$scope',
  function () {
  }
]), angular.module('core').controller('ContactController', [
  '$scope',
  function () {
  }
]), angular.module('core').controller('HeaderController', [
  '$scope',
  'Authentication',
  'Menus',
  function ($scope, Authentication, Menus) {
    $scope.authentication = Authentication, $scope.isCollapsed = !1, $scope.menu = Menus.getMenu('topbar'), $scope.toggleCollapsibleMenu = function () {
      $scope.isCollapsed = !$scope.isCollapsed;
    }, $scope.$on('$stateChangeSuccess', function () {
      $scope.isCollapsed = !1;
    });
  }
]);
var gems = [
    {
      name: 'Azurite',
      description: 'Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.',
      shine: 8,
      price: 110.5,
      rarity: 7,
      color: '#CCC',
      faces: 14,
      images: [
        'images/gem-02.gif',
        'images/gem-05.gif',
        'images/gem-09.gif'
      ],
      reviews: [
        {
          stars: 5,
          body: 'I love this gem!',
          author: 'joe@example.org',
          createdOn: 1397490980837
        },
        {
          stars: 1,
          body: 'This gem sucks.',
          author: 'tim@example.org',
          createdOn: 1397490980837
        }
      ]
    },
    {
      name: 'Bloodstone',
      description: 'Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.',
      shine: 9,
      price: 22.9,
      rarity: 6,
      color: '#EEE',
      faces: 12,
      images: [
        'images/gem-01.gif',
        'images/gem-03.gif',
        'images/gem-04.gif'
      ],
      reviews: [
        {
          stars: 3,
          body: 'I think this gem was just OK, could honestly use more shine, IMO.',
          author: 'JimmyDean@example.org',
          createdOn: 1397490980837
        },
        {
          stars: 4,
          body: 'Any gem with 12 faces is for me!',
          author: 'gemsRock@example.org',
          createdOn: 1397490980837
        }
      ]
    },
    {
      name: 'Zircon',
      description: 'Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.',
      shine: 70,
      price: 1100,
      rarity: 2,
      color: '#000',
      faces: 6,
      images: [
        'images/gem-06.gif',
        'images/gem-07.gif',
        'images/gem-08.gif'
      ],
      reviews: [
        {
          stars: 1,
          body: 'This gem is WAY too expensive for its rarity value.',
          author: 'turtleguyy@example.org',
          createdOn: 1397490980837
        },
        {
          stars: 1,
          body: 'BBW: High Shine != High Quality.',
          author: 'LouisW407@example.org',
          createdOn: 1397490980837
        },
        {
          stars: 1,
          body: 'Don\'t waste your rubles!',
          author: 'nat@example.org',
          createdOn: 1397490980837
        }
      ]
    }
  ];
angular.module('core').controller('HomeController', [
  '$scope',
  'Authentication',
  function ($scope, Authentication) {
    $scope.authentication = Authentication, this.products = gems;
  }
]), angular.module('core').controller('ReviewController', [
  '$scope',
  function () {
    this.review = [], this.addReview = function (product) {
      product.reviews.push(this.review), this.review = [];
    };
  }
]), angular.module('core').directive('productDescription', [function () {
    return {
      restrict: 'E',
      templateUrl: 'modules/core/views/product-description.client.view.html'
    };
  }]), angular.module('core').directive('productReviews', [function () {
    return {
      restrict: 'E',
      templateUrl: 'modules/core/views/product-reviews.client.view.html'
    };
  }]), angular.module('core').directive('productSpecs', [function () {
    return {
      restrict: 'E',
      templateUrl: 'modules/core/views/product-specs.client.view.html'
    };
  }]), angular.module('core').directive('productTabs', [function () {
    return {
      restrict: 'E',
      templateUrl: 'modules/core/views/product-tabs.client.view.html',
      controller: function () {
        this.tab = 1, this.setTab = function (setTab) {
          this.tab = setTab;
        }, this.isSet = function (checkTab) {
          return this.tab === checkTab;
        };
      },
      controllerAs: 'tab'
    };
  }]), angular.module('core').directive('productTitle', [function () {
    return {
      restrict: 'E',
      templateUrl: 'modules/core/views/product-title.client.view.html'
    };
  }]), angular.module('core').service('Menus', [function () {
    this.menus = {}, this.validateMenuExistance = function (menuId) {
      if (menuId && menuId.length) {
        if (this.menus[menuId])
          return !0;
        throw new Error('Menu does not exists');
      }
      throw new Error('MenuId was not provided');
    }, this.getMenu = function (menuId) {
      return this.validateMenuExistance(menuId), this.menus[menuId];
    }, this.addMenu = function (menuId, isPublic, roles) {
      return this.menus[menuId] = {
        isPublic: isPublic || !1,
        roles: roles || this.defaultRoles,
        items: []
      }, this.menus[menuId];
    }, this.removeMenu = function (menuId) {
      this.validateMenuExistance(menuId), delete this.menus[menuId];
    }, this.addMenuItem = function (menuId, menuItemTitle, menuItemURL, menuItemType, menuItemUIRoute, isPublic, roles) {
      return this.validateMenuExistance(menuId), this.menus[menuId].items.push({
        title: menuItemTitle,
        link: menuItemURL,
        menuItemType: menuItemType || 'item',
        menuItemClass: menuItemType,
        uiRoute: menuItemUIRoute || '/' + menuItemURL,
        isPublic: isPublic || this.menus[menuId].isPublic,
        roles: roles || this.defaultRoles,
        items: []
      }), this.menus[menuId];
    }, this.addSubMenuItem = function (menuId, rootMenuItemURL, menuItemTitle, menuItemURL, menuItemUIRoute, isPublic, roles) {
      this.validateMenuExistance(menuId);
      for (var itemIndex in this.menus[menuId].items)
        this.menus[menuId].items[itemIndex].link === rootMenuItemURL && this.menus[menuId].items[itemIndex].items.push({
          title: menuItemTitle,
          link: menuItemURL,
          uiRoute: menuItemUIRoute || '/' + menuItemURL,
          isPublic: isPublic || this.menus[menuId].isPublic,
          roles: roles || this.defaultRoles
        });
      return this.menus[menuId];
    }, this.removeMenuItem = function (menuId, menuItemURL) {
      this.validateMenuExistance(menuId);
      for (var itemIndex in this.menus[menuId].items)
        this.menus[menuId].items[itemIndex].link === menuItemURL && this.menus[menuId].items.splice(itemIndex, 1);
      return this.menus[menuId];
    }, this.removeSubMenuItem = function (menuId, submenuItemURL) {
      return this.validateMenuExistance(menuId), _(this.menus[menuId].items).forEach(function (itemIndex) {
        _(this.menus[menuId].items[itemIndex].items).forEach(function (subitemIndex) {
          this.menus[menuId].items[itemIndex].items[subitemIndex].link === submenuItemURL && this.menus[menuId].items[itemIndex].items.splice(subitemIndex, 1);
        });
      }), this.menus[menuId];
    }, this.addMenu('topbar');
  }]), angular.module('notifications').config([
  '$stateProvider',
  function ($stateProvider) {
    $stateProvider.state('notifications', {
      url: '/notifications',
      templateUrl: 'modules/notifications/views/notifications.client.view.html'
    });
  }
]);
var alerts = [
    {
      title: 'Finish Performance Review',
      link: 'http://www.workday.com',
      dueDate: 'tomorrow'
    },
    {
      title: 'Submit fitness reimbursement',
      link: 'http://www.workday.com',
      dueDate: '7/28/2014'
    },
    {
      title: 'Scheduled maintenance',
      link: 'http://www.workday.com',
      dueDate: 'today'
    }
  ];
angular.module('notifications').controller('NotificationsController', [
  '$scope',
  function ($scope) {
    $scope.widget = { title: 'My Notifications' }, this.alerts = alerts;
  }
]), angular.module('notifications').directive('notifications', [function () {
    return {
      restrict: 'E',
      templateUrl: 'modules/notifications/views/notifications.client.view.html'
    };
  }]), angular.module('team').config([
  '$stateProvider',
  function ($stateProvider) {
    $stateProvider.state('team', {
      url: '/team',
      templateUrl: 'modules/team/views/team.client.view.html'
    }).state('employees', {
      url: '/employees',
      templateUrl: 'modules/team/views/employees.client.view.html'
    }).state('team-anniversary', {
      url: '/team-anniversary',
      templateUrl: 'modules/team/views/team-anniversary.client.view.html'
    }).state('team-birthday', {
      url: '/team-birthday',
      templateUrl: 'modules/team/views/team-birthday.client.view.html'
    });
  }
]), angular.module('team').controller('EmployeesController', [
  '$scope',
  function () {
  }
]), angular.module('team').controller('TeamAnniversaryController', [
  '$scope',
  function () {
  }
]), angular.module('team').controller('TeamBirthdayController', [
  '$scope',
  function () {
  }
]);
var employees = [
    {
      name: 'Jessica Kung',
      title: 'Software Engineer Intern',
      birthday: '10/02/1992',
      hireDate: '6/23/2014',
      link: 'http://www.workday.com',
      image: 'modules/team/img/jessicar.png'
    },
    {
      name: 'Sara Hua',
      title: 'HR Intern',
      birthday: '7/25/1992',
      hireDate: '7/28/2014',
      link: 'http://www.workday.com',
      image: 'modules/team/img/sara.png'
    },
    {
      name: 'Kevin Lu',
      title: 'Software Engineer Intern',
      birthday: '5/5/1993',
      hireDate: '6/16/2014',
      link: 'http://www.workday.com',
      image: 'modules/team/img/kevin.png'
    }
  ], birthdays = [
    {
      name: 'Jessica Kung',
      age: '22',
      image: 'modules/team/img/jessicar.png'
    },
    {
      name: 'Kevin Lu',
      age: '21',
      image: 'modules/team/img/kevin.png'
    },
    {
      name: 'Kevin Lu',
      age: '21',
      image: 'modules/team/img/kevin.png'
    }
  ], anniversaries = [];
angular.module('team').controller('TeamController', [
  '$scope',
  '$animate',
  function ($scope, $animate) {
    $animate.enabled(!1), $scope.widget = { title: 'My Team' }, $scope.myInterval = -5000, this.employees = employees, this.birthdays = birthdays;
  }
]), angular.module('team').directive('teamBirthdays', [function () {
    return {
      restrict: 'E',
      templateUrl: 'modules/team/views/team-birthdays.client.view.html'
    };
  }]), angular.module('team').directive('teamEmployees', [function () {
    return {
      restrict: 'E',
      templateUrl: 'modules/team/views/team-employees.client.view.html'
    };
  }]), angular.module('team').directive('team', [function () {
    return {
      templateUrl: 'modules/team/views/team.client.view.html',
      restrict: 'E'
    };
  }]), angular.module('tools').config([
  '$stateProvider',
  function ($stateProvider) {
    $stateProvider.state('tools', {
      url: '/tools',
      templateUrl: 'modules/tools/views/tools.client.view.html'
    });
  }
]);
var toolbox = [
    {
      category: 'Daily',
      links: [
        {
          name: 'PrimeTime',
          description: 'a place to manage your timesheet!',
          url: 'http://www.primetime.com'
        },
        {
          name: 'Workday',
          description: 'a place to look at your team and stuff!',
          url: 'http://www.workday.com'
        },
        {
          name: 'Yelp',
          description: 'a place to look for good foods!',
          url: 'http://www.yelp.com'
        }
      ]
    },
    {
      category: 'Miscellaneous',
      links: [
        {
          name: 'HR Insight',
          description: 'a place to go when you have questions!',
          url: 'http://insight.intuit.com'
        },
        {
          name: 'Onboarding',
          description: 'the place you went to onboard and stuff!',
          url: 'http://www.intuit.com'
        }
      ]
    }
  ];
angular.module('tools').controller('ToolsController', [
  '$scope',
  function ($scope) {
    $scope.widget = { title: 'My Tools' }, this.toolbox = toolbox;
  }
]), angular.module('tools').directive('tools', [function () {
    return {
      templateUrl: 'modules/tools/views/tools.client.view.html',
      restrict: 'E'
    };
  }]), angular.module('users').config([
  '$httpProvider',
  function ($httpProvider) {
    $httpProvider.interceptors.push([
      '$q',
      '$location',
      'Authentication',
      function ($q, $location, Authentication) {
        return {
          responseError: function (rejection) {
            switch (rejection.status) {
            case 401:
              Authentication.user = null, $location.path('signin');
              break;
            case 403:
            }
            return $q.reject(rejection);
          }
        };
      }
    ]);
  }
]), angular.module('users').config([
  '$stateProvider',
  function ($stateProvider) {
    $stateProvider.state('profile', {
      url: '/settings/profile',
      templateUrl: 'modules/users/views/settings/edit-profile.client.view.html'
    }).state('password', {
      url: '/settings/password',
      templateUrl: 'modules/users/views/settings/change-password.client.view.html'
    }).state('accounts', {
      url: '/settings/accounts',
      templateUrl: 'modules/users/views/settings/social-accounts.client.view.html'
    }).state('signup', {
      url: '/signup',
      templateUrl: 'modules/users/views/signup.client.view.html'
    }).state('signin', {
      url: '/signin',
      templateUrl: 'modules/users/views/signin.client.view.html'
    });
  }
]), angular.module('users').controller('AuthenticationController', [
  '$scope',
  '$http',
  '$location',
  'Authentication',
  function ($scope, $http, $location, Authentication) {
    $scope.authentication = Authentication, $scope.authentication.user && $location.path('/'), $scope.signup = function () {
      $http.post('/auth/signup', $scope.credentials).success(function (response) {
        $scope.authentication.user = response, $location.path('/');
      }).error(function (response) {
        $scope.error = response.message;
      });
    }, $scope.signin = function () {
      $http.post('/auth/signin', $scope.credentials).success(function (response) {
        $scope.authentication.user = response, $location.path('/');
      }).error(function (response) {
        $scope.error = response.message;
      });
    };
  }
]), angular.module('users').controller('SettingsController', [
  '$scope',
  '$http',
  '$location',
  'Users',
  'Authentication',
  function ($scope, $http, $location, Users, Authentication) {
    $scope.user = Authentication.user, $scope.user || $location.path('/'), $scope.hasConnectedAdditionalSocialAccounts = function () {
      for (var i in $scope.user.additionalProvidersData)
        return !0;
      return !1;
    }, $scope.isConnectedSocialAccount = function (provider) {
      return $scope.user.provider === provider || $scope.user.additionalProvidersData && $scope.user.additionalProvidersData[provider];
    }, $scope.removeUserSocialAccount = function (provider) {
      $scope.success = $scope.error = null, $http.delete('/users/accounts', { params: { provider: provider } }).success(function (response) {
        $scope.success = !0, $scope.user = Authentication.user = response;
      }).error(function (response) {
        $scope.error = response.message;
      });
    }, $scope.updateUserProfile = function () {
      $scope.success = $scope.error = null;
      var user = new Users($scope.user);
      user.$update(function (response) {
        $scope.success = !0, Authentication.user = response;
      }, function (response) {
        $scope.error = response.data.message;
      });
    }, $scope.changeUserPassword = function () {
      $scope.success = $scope.error = null, $http.post('/users/password', $scope.passwordDetails).success(function () {
        $scope.success = !0, $scope.passwordDetails = null;
      }).error(function (response) {
        $scope.error = response.message;
      });
    };
  }
]), angular.module('users').factory('Authentication', [function () {
    var _this = this;
    return _this._data = { user: window.user }, _this._data;
  }]), angular.module('users').factory('Users', [
  '$resource',
  function ($resource) {
    return $resource('users', {}, { update: { method: 'PUT' } });
  }
]);