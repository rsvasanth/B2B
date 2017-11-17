(function () {
  'use strict';
  angular
    .module('com.module.reports')
    .run(function ($rootScope) {
      $rootScope.addMenu('Reports', 'app.reports.index', 'fa-inbox');
    });

})();
