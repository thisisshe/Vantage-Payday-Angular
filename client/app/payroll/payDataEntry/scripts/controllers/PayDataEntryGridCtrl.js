/**
 * Created by caos on 6/25/2015.
 */
vantagePaydayAppApp.controller('PayDataEntryGridCtrl', [
  '$scope',
  '$http',
  function($scope, $http, focusSlide) {

    $scope.PayDataEntry = [{ PayGroup: 'DPD', Description: 'dsfdsfdsfdsfdsf', Company: 'South', PayFrequency: 'Weekly' , BatchStatus:'Available', Status:'Active'},
      { PayGroup: '21D', Description: 'North East USA', Company: 'North East', PayFrequency: 'Weekly' , BatchStatus:'Available', Status:'Active'},
      { PayGroup: '21F', Description: 'MidWest', Company: 'MidWest', PayFrequency: 'Weekly' , BatchStatus:'Available', Status:'Active'},
      { PayGroup: '21G', Description: 'West', Company: 'South', PayFrequency: 'Biweekly' , BatchStatus:'Available', Status:'Active'}
    ];
    //$scope.slidePage = function (){
    //  focusSlide.setScope($scope);
    //  $scope.focusSlide = focusSlide;
    //  focusSlide.open('views/payDataEntryDetail.html', 'Return', {'test':'Test Parameter'})
    //}


  }
]);





//$scope.selectedPayGroup = false;
//
//$scope.payGroupClick = function() {
// $scope.selectedPayGroup=true;
//  alert("123");
//};



//function init() {
//  getPayDataEntry();
//}
//
//init();
//
//function getPayDataEntry() {
//
//  //$http.get('http://localhost/PayDayCACServices/rest/v1/payroll/paydataentry/list').success(function (data) {
//    $http.get('http://jsonplaceholder.typicode.com/posts').success(function (data) {
//
//    $scope.PayDataEntry = data;
//  }).error(function () { alert('error'); });
//
//}



