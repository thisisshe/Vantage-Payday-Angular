  /**
   * Created by caos on 6/25/2015.
   */
  vantagePaydayAppApp.controller('PayCycleProcessingHomeCtrl', [
    '$scope',
    '$http',
    function($scope, $http, focusSlide) {

      $scope.PayCycleProcessingGrid = [
        { GroupName: 'DPD', Description: 'dsgfsdfds', GroupType: 'Pay Group'},
        { GroupName: '123', Description: '', GroupType: 'Group'},
        { GroupName: '21D', Description: 'North East USA', GroupType: 'Pay Group'},
      ];
    }
  ]);
