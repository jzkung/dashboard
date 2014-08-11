'use strict';
// Init the application configuration module for AngularJS application
var ApplicationConfiguration = function () {
    // Init module configuration options
    var applicationModuleName = 'dashboard';
    var applicationModuleVendorDependencies = [
        'ngResource',
        'ngCookies',
        'ngAnimate',
        'ngTouch',
        'ngSanitize',
        'ui.router',
        'ui.bootstrap',
        'ui.utils'
      ];
    // Add a new vertical module
    var registerModule = function (moduleName) {
      // Create angular module
      angular.module(moduleName, []);
      // Add the module to the AngularJS configuration file
      angular.module(applicationModuleName).requires.push(moduleName);
    };
    return {
      applicationModuleName: applicationModuleName,
      applicationModuleVendorDependencies: applicationModuleVendorDependencies,
      registerModule: registerModule
    };
  }();'use strict';
//Start by defining the main module and adding the module dependencies
angular.module(ApplicationConfiguration.applicationModuleName, ApplicationConfiguration.applicationModuleVendorDependencies);
// Setting HTML5 Location Mode
angular.module(ApplicationConfiguration.applicationModuleName).config([
  '$locationProvider',
  function ($locationProvider) {
    $locationProvider.hashPrefix('!');
  }
]);
//Then define the init function for starting up the application
angular.element(document).ready(function () {
  //Fixing facebook bug with redirect
  if (window.location.hash === '#_=_')
    window.location.hash = '#!';
  //Then init the app
  angular.bootstrap(document, [ApplicationConfiguration.applicationModuleName]);
});'use strict';
// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('admin-tools');'use strict';
// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('admin');'use strict';
// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('control-panel');'use strict';
// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('core');'use strict';
// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('notifications');'use strict';
// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('team');'use strict';
// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('tools');'use strict';
// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('users');'use strict';
//Setting up route
angular.module('admin-tools').config([
  '$stateProvider',
  function ($stateProvider) {
    // Admin tools state routing
    $stateProvider.state('admin-tools', {
      url: '/admin-tools',
      templateUrl: 'modules/admin-tools/views/admin-tools.client.view.html'
    });
  }
]);'use strict';
var tools = [
    {
      category: 'Daily',
      users: [{ group: 'workers' }],
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
      users: [
        { group: 'admin' },
        { group: 'hr' }
      ],
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
angular.module('admin-tools').controller('AdminToolsController', [
  '$scope',
  function ($scope) {
    this.tools = tools;
    $scope.myData = [
      {
        name: 'Moroni',
        age: 50
      },
      {
        name: 'Tiancum',
        age: 43
      }
    ];
    $scope.gridOptions = { data: 'myData' };
  }
]);'use strict';
angular.module('admin-tools').directive('adminTools', [function () {
    return {
      templateUrl: 'modules/admin-tools/views/admin-tools.client.view.html',
      restrict: 'E'
    };
  }]);'use strict';
//Setting up route
angular.module('admin').config([
  '$stateProvider',
  function ($stateProvider) {
    // Admin state routing
    $stateProvider.state('admin-widget', {
      url: '/admin-widget',
      templateUrl: 'modules/admin/views/admin-widget.client.view.html'
    }).state('admin', {
      url: '/admin',
      templateUrl: 'modules/admin/views/admin.client.view.html'
    });
  }
]);'use strict';
angular.module('admin').controller('AdminController', [
  '$scope',
  function ($scope) {
  }
]);'use strict';
//Setting up route
angular.module('control-panel').config([
  '$stateProvider',
  function ($stateProvider) {
    // Control panel state routing
    $stateProvider.state('control-panel', {
      url: '/',
      templateUrl: 'modules/control-panel/views/control-panel.client.view.html'
    }).state('widget', {
      url: '/widget',
      templateUrl: 'modules/control-panel/views/widget.client.view.html'
    });
  }
]);'use strict';
angular.module('control-panel').controller('ControlpanelController', [
  '$scope',
  function ($scope) {
  }
]);'use strict';
angular.module('control-panel').controller('WidgetController', [
  '$scope',
  function ($scope) {
  }
]);'use strict';
angular.module('control-panel').directive('draggable', [function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        // Draggable directive logic
        // ...
        element.text('this is the draggable directive');
      }
    };
  }]);'use strict';
angular.module('control-panel').directive('widget', [function () {
    return {
      templateUrl: 'modules/control-panel/views/widget.client.view.html',
      restrict: 'E',
      transclude: true
    };
  }]);'use strict';
// Setting up route
angular.module('core').config([
  '$stateProvider',
  '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {
    // Redirect to home view when route not found
    $urlRouterProvider.otherwise('/');
    // Home state routing
    $stateProvider.state('contact', {
      url: '/contact',
      templateUrl: 'modules/core/views/contact.client.view.html'
    }).state('about', {
      url: '/about',
      templateUrl: 'modules/core/views/about.client.view.html'
    });  // state('home', {
         // 	url: '/',
         // 	templateUrl: 'modules/core/views/home.client.view.html'
         // });
  }
]);'use strict';
angular.module('core').controller('AboutController', [
  '$scope',
  function () {
  }
]);'use strict';
angular.module('core').controller('ContactController', [
  '$scope',
  function () {
  }
]);'use strict';
angular.module('core').controller('HeaderController', [
  '$scope',
  'Authentication',
  'Menus',
  function ($scope, Authentication, Menus) {
    $scope.authentication = Authentication;
    $scope.isCollapsed = false;
    $scope.menu = Menus.getMenu('topbar');
    $scope.toggleCollapsibleMenu = function () {
      $scope.isCollapsed = !$scope.isCollapsed;
    };
    // Collapsing the menu after navigation
    $scope.$on('$stateChangeSuccess', function () {
      $scope.isCollapsed = false;
    });
  }
]);'use strict';
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
    // This provides Authentication context.
    $scope.authentication = Authentication;
    this.products = gems;
  }
]);'use strict';
angular.module('core').controller('ReviewController', [
  '$scope',
  function () {
    this.review = [];
    this.addReview = function (product) {
      product.reviews.push(this.review);
      this.review = [];
    };
  }
]);'use strict';
angular.module('core').directive('productDescription', [function () {
    return {
      restrict: 'E',
      templateUrl: 'modules/core/views/product-description.client.view.html'
    };
  }]);'use strict';
angular.module('core').directive('productReviews', [function () {
    return {
      restrict: 'E',
      templateUrl: 'modules/core/views/product-reviews.client.view.html'
    };
  }]);'use strict';
angular.module('core').directive('productSpecs', [function () {
    return {
      restrict: 'E',
      templateUrl: 'modules/core/views/product-specs.client.view.html'
    };
  }]);'use strict';
angular.module('core').directive('productTabs', [function () {
    return {
      restrict: 'E',
      templateUrl: 'modules/core/views/product-tabs.client.view.html',
      controller: function () {
        this.tab = 1;
        this.setTab = function (setTab) {
          this.tab = setTab;
        };
        this.isSet = function (checkTab) {
          return this.tab === checkTab;
        };
      },
      controllerAs: 'tab'
    };
  }]);'use strict';
angular.module('core').directive('productTitle', [function () {
    return {
      restrict: 'E',
      templateUrl: 'modules/core/views/product-title.client.view.html'
    };
  }]);'use strict';
//Menu service used for managing  menus
angular.module('core').service('Menus', [function () {
    // Define the menus object
    this.menus = {};
    // Validate menu existance
    this.validateMenuExistance = function (menuId) {
      if (menuId && menuId.length) {
        if (this.menus[menuId]) {
          return true;
        } else {
          throw new Error('Menu does not exists');
        }
      } else {
        throw new Error('MenuId was not provided');
      }
      return false;
    };
    // Get the menu object by menu id
    this.getMenu = function (menuId) {
      // Validate that the menu exists
      this.validateMenuExistance(menuId);
      // Return the menu object
      return this.menus[menuId];
    };
    // Add new menu object by menu id
    this.addMenu = function (menuId, isPublic, roles) {
      // Create the new menu
      this.menus[menuId] = {
        isPublic: isPublic || false,
        roles: roles || this.defaultRoles,
        items: []
      };
      // Return the menu object
      return this.menus[menuId];
    };
    // Remove existing menu object by menu id
    this.removeMenu = function (menuId) {
      // Validate that the menu exists
      this.validateMenuExistance(menuId);
      // Return the menu object
      delete this.menus[menuId];
    };
    // Add menu item object
    this.addMenuItem = function (menuId, menuItemTitle, menuItemURL, menuItemType, menuItemUIRoute, isPublic, roles) {
      // Validate that the menu exists
      this.validateMenuExistance(menuId);
      // Push new menu item
      this.menus[menuId].items.push({
        title: menuItemTitle,
        link: menuItemURL,
        menuItemType: menuItemType || 'item',
        menuItemClass: menuItemType,
        uiRoute: menuItemUIRoute || '/' + menuItemURL,
        isPublic: isPublic || this.menus[menuId].isPublic,
        roles: roles || this.defaultRoles,
        items: []
      });
      // Return the menu object
      return this.menus[menuId];
    };
    // Add submenu item object
    this.addSubMenuItem = function (menuId, rootMenuItemURL, menuItemTitle, menuItemURL, menuItemUIRoute, isPublic, roles) {
      // Validate that the menu exists
      this.validateMenuExistance(menuId);
      // Search for menu item
      for (var itemIndex in this.menus[menuId].items) {
        if (this.menus[menuId].items[itemIndex].link === rootMenuItemURL) {
          // Push new submenu item
          this.menus[menuId].items[itemIndex].items.push({
            title: menuItemTitle,
            link: menuItemURL,
            uiRoute: menuItemUIRoute || '/' + menuItemURL,
            isPublic: isPublic || this.menus[menuId].isPublic,
            roles: roles || this.defaultRoles
          });
        }
      }
      // Return the menu object
      return this.menus[menuId];
    };
    // Remove existing menu object by menu id
    this.removeMenuItem = function (menuId, menuItemURL) {
      // Validate that the menu exists
      this.validateMenuExistance(menuId);
      // Search for menu item to remove
      for (var itemIndex in this.menus[menuId].items) {
        if (this.menus[menuId].items[itemIndex].link === menuItemURL) {
          this.menus[menuId].items.splice(itemIndex, 1);
        }
      }
      // Return the menu object
      return this.menus[menuId];
    };
    // Remove existing menu object by menu id
    this.removeSubMenuItem = function (menuId, submenuItemURL) {
      // Validate that the menu exists
      this.validateMenuExistance(menuId);
      // Search for menu item to remove
      for (var itemIndex in this.menus[menuId].items) {
        for (var subitemIndex in this.menus[menuId].items[itemIndex].items) {
          if (this.menus[menuId].items[itemIndex].items[subitemIndex].link === submenuItemURL) {
            this.menus[menuId].items[itemIndex].items.splice(subitemIndex, 1);
          }
        }
      }
      // Return the menu object
      return this.menus[menuId];
    };
    //Adding the topbar menu
    this.addMenu('topbar');
  }]);'use strict';
//Setting up route
angular.module('notifications').config([
  '$stateProvider',
  function ($stateProvider) {
    // Notifications state routing
    $stateProvider.state('notifications', {
      url: '/notifications',
      templateUrl: 'modules/notifications/views/notifications.client.view.html'
    });
  }
]);'use strict';
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
    $scope.widget = { title: 'My Notifications' };
    this.alerts = alerts;
  }
]);'use strict';
angular.module('notifications').directive('notifications', [function () {
    return {
      restrict: 'E',
      templateUrl: 'modules/notifications/views/notifications.client.view.html'
    };
  }]);'use strict';
//Setting up route
angular.module('team').config([
  '$stateProvider',
  function ($stateProvider) {
    // Team state routing
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
]);'use strict';
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
  ];
angular.module('team').controller('TeamEmployeesController', [
  '$scope',
  function ($scope) {
    this.employees = employees;
    var initEmployees = 2;
    $scope.employeesToShow = initEmployees;
    $scope.hasMoreToShow = function () {
      return $scope.employeesToShow < employees.length;
    };
    $scope.showAll = function () {
      $scope.employeesToShow = employees.length;
    };
    $scope.hideSome = function () {
      $scope.employeesToShow = initEmployees;
    };
    $scope.checkIfShow = function (index) {
      return index < $scope.employeesToShow;
    };
  }
]);'use strict';
var anniversaries = [{
      first_name: 'Sara',
      last_name: 'Hua',
      year: '2nd',
      image: 'modules/team/img/sara.png'
    }];
angular.module('team').controller('TeamAnniversaryController', [
  '$scope',
  '$animate',
  function ($scope, $animate) {
    this.anniversaries = anniversaries;
  }
]);'use strict';
var birthdays = [
    {
      first_name: 'Jessica',
      last_name: 'Kung',
      age: '22nd',
      image: 'modules/team/img/jessicar.png'
    },
    {
      first_name: 'Kevin',
      last_name: 'Lu',
      age: '21st',
      image: 'modules/team/img/kevin.png'
    }
  ];
angular.module('team').controller('TeamBirthdayController', [
  '$scope',
  '$animate',
  function ($scope, $animate) {
    this.birthdays = birthdays;
  }
]);'use strict';
angular.module('team').controller('TeamController', [
  '$scope',
  '$animate',
  function ($scope, $animate) {
    $animate.enabled(false);
    $scope.widget = { title: 'My Team' };
    $scope.myInterval = 5000;
  }
]);'use strict';
angular.module('team').directive('teamAnniversaries', [function () {
    return {
      restrict: 'E',
      templateUrl: 'modules/team/views/team-anniversaries.client.view.html'
    };
  }]);'use strict';
angular.module('team').directive('teamBirthdays', [function () {
    return {
      restrict: 'E',
      templateUrl: 'modules/team/views/team-birthdays.client.view.html'
    };
  }]);'use strict';
angular.module('team').directive('teamEmployees', [function () {
    return {
      restrict: 'E',
      templateUrl: 'modules/team/views/team-employees.client.view.html'
    };
  }]);'use strict';
angular.module('team').directive('team', [function () {
    return {
      templateUrl: 'modules/team/views/team.client.view.html',
      restrict: 'E'
    };
  }]);'use strict';
//Setting up route
angular.module('tools').config([
  '$stateProvider',
  function ($stateProvider) {
    // Tools state routing
    $stateProvider.state('tools', {
      url: '/tools',
      templateUrl: 'modules/tools/views/tools.client.view.html'
    });
  }
]);'use strict';
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
    $scope.widget = { title: 'My Tools' };
    this.toolbox = toolbox;
  }
]);'use strict';
angular.module('tools').directive('tools', [function () {
    return {
      templateUrl: 'modules/tools/views/tools.client.view.html',
      restrict: 'E'
    };
  }]);'use strict';
// Config HTTP Error Handling
angular.module('users').config([
  '$httpProvider',
  function ($httpProvider) {
    // Set the httpProvider "not authorized" interceptor
    $httpProvider.interceptors.push([
      '$q',
      '$location',
      'Authentication',
      function ($q, $location, Authentication) {
        return {
          responseError: function (rejection) {
            switch (rejection.status) {
            case 401:
              // Deauthenticate the global user
              Authentication.user = null;
              // Redirect to signin page
              $location.path('signin');
              break;
            case 403:
              // Add unauthorized behaviour 
              break;
            }
            return $q.reject(rejection);
          }
        };
      }
    ]);
  }
]);'use strict';
// Setting up route
angular.module('users').config([
  '$stateProvider',
  function ($stateProvider) {
    // Users state routing
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
]);'use strict';
angular.module('users').controller('AuthenticationController', [
  '$scope',
  '$http',
  '$location',
  'Authentication',
  function ($scope, $http, $location, Authentication) {
    $scope.authentication = Authentication;
    //If user is signed in then redirect back home
    if ($scope.authentication.user)
      $location.path('/');
    $scope.signup = function () {
      $http.post('/auth/signup', $scope.credentials).success(function (response) {
        //If successful we assign the response to the global user model
        $scope.authentication.user = response;
        //And redirect to the index page
        $location.path('/');
      }).error(function (response) {
        $scope.error = response.message;
      });
    };
    $scope.signin = function () {
      $http.post('/auth/signin', $scope.credentials).success(function (response) {
        //If successful we assign the response to the global user model
        $scope.authentication.user = response;
        //And redirect to the index page
        $location.path('/');
      }).error(function (response) {
        $scope.error = response.message;
      });
    };
  }
]);'use strict';
angular.module('users').controller('SettingsController', [
  '$scope',
  '$http',
  '$location',
  'Users',
  'Authentication',
  function ($scope, $http, $location, Users, Authentication) {
    $scope.user = Authentication.user;
    // If user is not signed in then redirect back home
    if (!$scope.user)
      $location.path('/');
    // Check if there are additional accounts 
    $scope.hasConnectedAdditionalSocialAccounts = function (provider) {
      for (var i in $scope.user.additionalProvidersData) {
        return true;
      }
      return false;
    };
    // Check if provider is already in use with current user
    $scope.isConnectedSocialAccount = function (provider) {
      return $scope.user.provider === provider || $scope.user.additionalProvidersData && $scope.user.additionalProvidersData[provider];
    };
    // Remove a user social account
    $scope.removeUserSocialAccount = function (provider) {
      $scope.success = $scope.error = null;
      $http.delete('/users/accounts', { params: { provider: provider } }).success(function (response) {
        // If successful show success message and clear form
        $scope.success = true;
        $scope.user = Authentication.user = response;
      }).error(function (response) {
        $scope.error = response.message;
      });
    };
    // Update a user profile
    $scope.updateUserProfile = function () {
      $scope.success = $scope.error = null;
      var user = new Users($scope.user);
      user.$update(function (response) {
        $scope.success = true;
        Authentication.user = response;
      }, function (response) {
        $scope.error = response.data.message;
      });
    };
    // Change user password
    $scope.changeUserPassword = function () {
      $scope.success = $scope.error = null;
      $http.post('/users/password', $scope.passwordDetails).success(function (response) {
        // If successful show success message and clear form
        $scope.success = true;
        $scope.passwordDetails = null;
      }).error(function (response) {
        $scope.error = response.message;
      });
    };
  }
]);'use strict';
// Authentication service for user variables
angular.module('users').factory('Authentication', [function () {
    var _this = this;
    _this._data = { user: window.user };
    return _this._data;
  }]);'use strict';
// Users service used for communicating with the users REST endpoint
angular.module('users').factory('Users', [
  '$resource',
  function ($resource) {
    return $resource('users', {}, { update: { method: 'PUT' } });
  }
]);