//'use strict';
//
//function PayDataEntryGridService($resource,$rootScope){
//	// REFERENCE THIS VARIABLE
//	var vm = this;
//
//	// LOGIC TO LOAD THE TABLE GRID
//	vm.loadGrid = function(_this){
//		// DEFINE THE API URL FOR THE DATA
//		var url = 'http://localhost/PayDayCACServices/rest/v1/payroll/paydataentry/list';
//		var sref = "payDataEntryAbstract.payDataEntryPayGroupDetails({payGroupObj: row.entity})";
//		_this.gridOptions.columnDefs = [
//	 	    {field:'payGroup', displayName: 'Pay Group',
//	 	     cellTemplate:'<div><a ui-sref="' + sref+ '\" style="padding:5px">{{row.entity.payGroup}}</a></div>'},
//	 	    {field:'description', displayName: 'Description'},
//	 	    {field:'companyDescription', displayName: 'Company'},
//	 	    {field:'payFrequencyDescription', displayName: 'Pay Frequency'},
//	 	    {field:'cycleStatusDescription', displayName: 'Batch Status'},
//	 	    {field:'status', displayName: 'Status'}
//	 	];
//
//		$resource(url).get().$promise.then(
//			function(data) {
//				_this.gridOptions.data = data.payGroupList;
//				// TODO: REFACTOR THIS AS PER REQUIREMENTS
//				//$rootScope.successField = true;
//				//$rootScope.successMessage = 'Success';
//			}
//		);
//	};
//}
//
//angular.module('payDataEntryApp').service('PayDataEntryGridService', ['$resource','$rootScope',PayDataEntryGridService]);
