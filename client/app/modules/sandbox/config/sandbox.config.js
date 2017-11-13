(function () {
  'use strict';
  angular
    .module('com.module.sandbox')
    .run(function ($rootScope) {
      $rootScope.addMenu('Reports', 'app.sandbox.index', 'fa-inbox');
    });

})();
