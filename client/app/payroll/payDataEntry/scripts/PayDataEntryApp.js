var myApp = angular.module('PayDataEntryApp', ['ui.router']);



myApp.config(function ($stateProvider,$urlRouterProvider) {

  $stateProvider.state("NavPage.PayDataEntry.PayDataEntryPayGroupDetails", {
    //url: "/PayDataEntryPayGroupDetails",
    templateUrl: "app/payroll/payDataEntry/views/PayDataEntryPayGroupDetails.html",
    controller: "PayDataEntryGridCtrl"
  })

    .state("NavPage.PayDataEntry.PayDataEntryPayGroupDetails.PayDataEntryInBalance", {

      templateUrl: "app/payroll/payDataEntry/views/PayDataEntryInBalance.html",
      controller:"PayDataEntryInBalanceCtrl"
    })
});
