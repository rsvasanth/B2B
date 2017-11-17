(function () {
  'use strict';
  angular
    .module('com.module.reports')
    .config(function ($stateProvider) {
      $stateProvider
        .state('app.reports', {
          abstract: true,
          url: '/reports',
          templateUrl: 'modules/reports/views/main.html',
          controller: 'ReportsCtrl'
        })
        .state('app.reports.index', {
          url: ''
        })

    });

})();
