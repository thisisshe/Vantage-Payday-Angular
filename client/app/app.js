'use strict';

var vantagePaydayAppApp = angular.module('vantagePaydayAppApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'PayDataEntryApp'
]);

vantagePaydayAppApp.config(function ($stateProvider, $urlRouterProvider) {


  $urlRouterProvider.when("", "/NavPage");
   $stateProvider
    .state("NavPage", {
      url: "/NavPage",
      templateUrl: "app/partials/NavPage.html"
    })

    .state("NavPage.Home", {
      url: "/Home",
      templateUrl: "app/partials/Home.html"
    })


    .state("NavPage.PayDataEntry", {
      url: "/PayDataEntry",
      templateUrl: "app/payroll/payDataEntry/views/PayDataEntryGrid.html",
      controller: "PayDataEntryGridCtrl"
    })

    .state("NavPage.PayCycleProcessing", {
        url: "/PayCycleProcessing",
        templateUrl: "app/payroll/payCycleProcessing/views/PayCycleProcessing.html",
        controller:"PayCycleProcessingHomeCtrl"
      })

  ;
  alert("finish state provider");

    //$locationProvider.html5Mode(true);
  });
