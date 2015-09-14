/**
 * Created by caos on 6/25/2015.
 */
vantagePaydayAppApp.controller('PayDataEntryPayGroupDetailsCtrl', [
  '$scope',
  '$http',
  function($scope, $http, focusSlide) {

    $scope.PayDataEntryPayGroupDetails = [
      { BatchID: '874544', Owner: 'Aguirre, Christina A', Status: 'In Balance', BatchOptions: 'BatchOptions'},
      { BatchID: '6699', Owner: 'Aguirre, Christina A', Status: 'In Balance', BatchOptions: 'BatchOptions'}
    ];
    //$scope.slidePage = function (){
    //  focusSlide.setScope($scope);
    //  $scope.focusSlide = focusSlide;
    //  focusSlide.open('views/payDataEntryDetail.html', 'Return', {'test':'Test Parameter'})
    //}


  }
]);
