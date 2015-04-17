'use strict';

angular.module('dashboardAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('emailVerification', {
        url: '/register/verify',
        templateUrl: 'app/emailVerification/emailVerification.html',
        controller: 'EmailVerificationCtrl'
      });
  });